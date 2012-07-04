# Tests for the ID3 parser.

require 'coffee-script'

fs = require 'fs'
{assert, expect, should} = require 'chai'

libpath = if process.env['ID3_COV'] then '../lib-cov' else '../src'

{Parser} = require libpath + '/parser'


#### ID3v2.2
describe 'Short ID3v2.2 audio', ->
  parser = null

  beforeEach (done) ->
    fs.readFile 'test/mj_short.mp3', (err, data) ->
      return done err if err
      parser = new Parser(data)
      parser.parse()
      done()

  it 'is ID3v2.2', () ->
    expect(parser.version).to.equal(2)
    expect(parser.frameIdSize).to.equal(3)
    expect(parser.frameSizeSize).to.equal(3)
    expect(parser.frameFlagsSize).to.equal(0)

  it 'has finished parsing', () ->
    expect(parser.parsed).to.be.true;

  it 'has some tags', () ->
    ids = parser.ids
    tags = parser.tags
    expect(ids).to.include('TAL')
    expect(ids).to.include('TP1')
    expect(ids).to.include('TT2')
    expect(tags).to.have.property('album')
    expect(tags).to.have.property('artist')
    expect(tags).to.have.property('title')

  describe 'MJ\'s "Smile" from "HIStory..." (1995)', ->
    it 'is by Michael Jackson', () ->
      tags = parser.tags
      expect(tags['artist']).to.equal('Michael Jackson')

    it 'is called "Smile"', () ->
      tags = parser.tags
      expect(tags['title']).to.equal('Smile')

    it 'is from "HIStory Past, Present and Future, Book 1"', () ->
      tags = parser.tags
      expect(tags['album']).to.equal('HIStory Past, Present and Future, Book 1')

    it 'was recorded in 1995', () ->
      tags = parser.tags
      expect(tags['year']).to.equal('1995')
