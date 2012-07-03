# Copyright 2012 Arunjit Singh. All Rights Reserved.
# Author: Arunjit Singh <arunjit@me.com>
# License: MIT. See LICENSE.
#
# Tests for the ID3 parser.

require 'coffee-script'

fs = require 'fs'
{assert, expect, should} = require 'chai'
{Parser} = require '../src/parser'


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
    expect(tags).to.have.property('album')

  it 'is "HIStory Past, Present and Future, Book 1"', () ->
    tags = parser.tags
    expect(tags['album']).to.equal('HIStory Past, Present and Future, Book 1')
