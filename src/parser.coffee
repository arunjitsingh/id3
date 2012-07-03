## The Parser
# This is the main workhorse.

#### Some utility functions

# Converts a buffer slice `s` to a number. Not using the in-built
# Buffer#readUint*() as numbers may use unsynched values where the MSB of a byte
# is shifted to the next (higher) byte.
# `ebb`, or "eight-bit-bytes" uses 8 bits/byte when `true`
_toNumber = (s, ebb) ->
  b = if ebb then 8 else 7
  switch s.length
    when 2
      return s[1] | (s[0] << b)
    when 3
      return s[2] | (s[1] << b) | (s[0] << (2 * b))
    when 4
      return s[3] | (s[2] << b) | (s[1] << (2 * b)) | (s[0] << (3 * b))


#### Frame parser
# Parses/decodes data in a frame.
FrameParser = {}


# Decodes text.
FrameParser._decodeText = (data) ->
  len = data.length
  encoding = data[0]
  headsz = 0
  tailsz = 0
  switch encoding
    when 0, 3
      headsz = tailsz = 1
    when 1, 2
      headsz = tailsz = 2
  data.toString('utf-8', headsz, len - tailsz)


# Decoders for v1,2.
FrameParser._v1Decoders =
  'TAL': ['album', FrameParser._decodeText]


# Decoders for v3,4.
FrameParser._v3Decoders =
  'TALB': ['album', FrameParser._decodeText]


# Returns a frame parser.
FrameParser.get = (version) ->
  switch version
    when 1, 2
      return FrameParser._v1Decoders
    when 3, 4
      return FrameParser._v3Decoders



## Parser
# Parses data to extract ID3 information like headers, version, size, etc.
#
# `@version` determines the format of the frames. The `@frameParser`
# (@see `FrameParser`) does the actual decoding of frame data.
class Parser

  # Initializes the parser with the data that needs to be parsed.
  # > data: (Buffer) The data buffer.
  constructor: (@data) ->
    # If the data doesn't start with `"ID3"`, it has no tags.
    if not @data.slice(0, 3).toString() == 'ID3'
      throw new Error 'No ID3 tags present!'

    # ID3v2.x version (the `x`).
    @version = @data[3] | (@data[4] << 8)

    # Size of all frames, padding and extended header (minus header, footer).
    @size = _toNumber @data.slice(6, 10), no

    @_initializeExtendedHeader()
    @_initializeFrames()
    @_initializeFooter()

    # Total size of the tag.
    # > `= size + header size (10)[ + footer size (10)]`
    @totalSize = @size + 10 + (if @hasFooter then 10 else 0)

    # The parser hasn't yet parsed.
    @parsed = false


  # Parses the extended header. This is currently unimplemented and only updates
  # `@extendedHeaderSize` so that the index of the first frame can be
  # determined.
  _initializeExtendedHeader: () ->
    # Whether this file has an extended header
    @hasExtendedHeader = (@data[5] & 0x40)

    if @hasExtenderHeader
      @extendedHeaderSize = _toNumber @data.slice(10, 14), no


  # Sets up the frame values for parsing.
  _initializeFrames: () ->
    # Defaults for frame `ID`, `size` and `flags` size. These are overriden for
    # versions >=.3
    @frameIdSize = 3
    @frameSizeSize = 3
    @frameFlagsSize = 0

    if @version in [3, 4]
      @frameIdSize = 4
      @frameSizeSize = 4
      @frameFlagsSize = 2

    # The parser for the frame. @see `FrameParser`
    @frameParser = FrameParser.get @version


  # Determines whether his file includes a footer. The footer has no
  # information (is identical to the header, except that it starts with
  # `"3DI"`).
  _initializeFooter: () ->
    @hasFooter = (@data[5] & 0x10)


  # Returns the index of the first byte of the `frames`.
  _getFrameStart: () ->
    10 + (if @hasExtenderHeader then 6 + @extendedHeaderSize else 0)


  # The real deal. Parses frames and extracts data from them.
  parse: () ->
    return @tags if @parsed

    # Local refs for `@`s
    data = @data
    parser = @frameParser
    idsz = @frameIdSize
    szsz = @frameSizeSize
    flsz = @frameFlagsSize
    tags = @tags = {}
    ids = @ids = []  # debugging only

    i = @_getFrameStart()
    max = @totalSize - (if @hasFooter then 10 else 0)

    while i < max
      # Get the frame ID.
      id = data.slice(i, i + idsz).toString()
      if not /^[A-Z0-9]+$/.test(id)
        break  # no longer parsing frames
      i += idsz
      ids.push id

      # Attachments (v.4), and embedded images use 8-bit sizes. There will be
      # a better way to determine this than a naive regex.
      sz = _toNumber data.slice(i, i + szsz), /A?PIC/.test(id)
      i += szsz

      # Check if this ID is supported.
      if not parser[id]
        i += flsz + sz
        continue  # not a known tag

      # Currently, frame flags are ignored.
      fl = data.slice(i, i + flsz)
      i += flsz

      # The frame data.
      frame = data.slice(i, i + sz)
      i += sz

      # Set the tag. `parser[id]` is a two-element array of `key` and `decoder
      # function`.
      p = parser[id]
      tags[p[0]] = p[1](frame)
    @parsed = true
    @tags



# Export the parser
module.exports.Parser = Parser
