# Parses [**ID3v2**](http://www.id3.org) tags.
#
# Audio files like MP3s include some metadata about the track, like artist,
# album, title, year, etc. These are usually prepended to the actual, encoded
# audio.
#
#### Artwork:
# Some audio files include artwork (cover, etc.) embedded in the file itself.
#
#### Tags:
# Currently, only a few tags are read (that's because I'm too lazy to include
# all of them).
#
# The code for the parser is open sourced on
# [Github](https://github.com/arunjitsingh) under the MIT license.

require 'coffee-script'


#### Module dependencies.
fs = require 'fs'
path = require 'path'
util = require 'util'

# `npmlog`: npm-style logging to the terminal.
log = require 'npmlog'
# `nopt`: command line options parser.
nopt = require 'nopt'


# Options for the command line.
OPTS =
  'file': path,
  'art_out': path,


# Shorter command line options.
SHORT_OPTS =
  'f': ['--file'],
  'a': ['--art_out'],


# Parse the command line options.
options = nopt(OPTS, SHORT_OPTS)

