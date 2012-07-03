// Copyright 2012 Arunjit Singh. All Rights Reserved.

/**
 * @fileoverview ID3 tag parsing (NodeJS).
 * @author Arunjit Singh <arunjit@me.com>
 * @license MIT license.
 * @copyright 2012 Arunjit Singh (arunjit@me.com).
 */

var fs = require('fs');
var path = require('path');
var util = require('util');

var log = require('npmlog');
var nopt = require('nopt');


/**
 * The known commandline options.
 *
 * @type {!Object.<string, *>}
 * @const
 */
var OPTS = {
  'file': path,
  'art_out': path
};


/**
 * Shorter versions of known commandline options.
 *
 * @type {!Object.<string, *>}
 * @const
 */
var SHORT_OPTS = {
  'f': ['--file'],
  'a': ['--art_out']
};


var argv = nopt(OPTS, SHORT_OPTS);


id3 = {};
id3.frame_ = {};
id3.v22 = {frame: {}};
id3.v23 = {frame: {}};
id3.v24 = {frame: {}};


/**
 * Decodes text frame data
 *
 * @param {Buffer} data The frame data.
 * @return {string} The decoded data.
 */
id3.frame_.decodeText = function(data) {
  if (data[0] == 0) {
    if (data[1] == 0) {
      return (data.slice(2)).toString('ucs2');
    } else {
      return (data.slice(1)).toString('utf8');
    }
  }
  return data.toString();
};


id3.frame_.decodeImage = function(data) {
  var next = 1;
  var type;
  var mime = data.slice(1, 7).toString();
  if (mime == 'image/') {
    type = data.slice(7, 11).toString().match(/([A-Za-z0-9]+)/)[1];
    next += 6;
  } else {
    type = data.slice(1, 4).toString();
  }
  next += type.length + 2;
  if (argv.art_out) {
    fs.writeFile(argv.art_out + '.' + type.toLowerCase(), data.slice(6));
  }
  switch (type) {
    case 'JPG':
      type = 'image/jpeg';
      break;
    case 'PNG': // fall thru
    default:
      type = 'image/png';
  }
  return 'data:' + type + ';base64,' + data.slice(next).toString('base64');
};


id3.frame_.Parser = function(idLength, sizeLength, flagsLength, mapper) {
  this.idLength = idLength;
  this.sizeLength = sizeLength;
  this.flagsLength = flagsLength;
  this.headerLength = this.idLength + this.sizeLength + this.flagsLength;
  this.mapper = mapper;
};


id3.frame_.Parser.toString = function() {
  return 'id3.frame_.Parser';
};


/**
 * Parses the frames and creates the tags.
 *
 * @param {Buffer} frames The buffer of frames data.
 * @return {!Object.<string, *>} The tags.
 */
id3.frame_.Parser.prototype.parse = function(frames) {
  var tags = {};
  var len = frames.length;
  var i = 0;
  log.info('Size of all frames', len)
  while(i < len) {
    try {
      var id = frames.slice(i, i += this.idLength).toString();
      if (!(/[0-9A-Z]+/).test(id)) {
        break;
      }
      log.info('ID', id);
      var size = id3.getSize(frames.slice(i, i += this.sizeLength), /A?PIC/.test(id));
      log.info('Size', size);
      var flags = frames.slice(i, i += this.flagsLength);
      log.info('Flags', flags);

      var data = frames.slice(i, i += size);

      if (this.mapper[id]) {
        tags[this.mapper[id][0]] = this.mapper[id][1](data);
      }
    } catch (e) {
      log.error('Exception raised', '%s\nIndex: %d', e, i);
      break;
    }
  }
  return tags;
};


id3.v22.frame.mapper_ = {
  'TAL': ['album', id3.frame_.decodeText],
  'TP1': ['artist', id3.frame_.decodeText],
  //'TP2': ['', id3.frame_.decodeText],
  //'TP3': ['', id3.frame_.decodeText],
  'TT2': ['title', id3.frame_.decodeText],
  'TYE': ['year', id3.frame_.decodeText],
  'TLE': ['duration', id3.frame_.decodeText],
  'PIC': ['artwork', id3.frame_.decodeImage]
};



id3.v22.frame.Parser = function() {
  id3.frame_.Parser.call(this, 3, 3, 0, id3.v22.frame.mapper_);
};
util.inherits(id3.v22.frame.Parser, id3.frame_.Parser);


id3.v23.frame.mapper_ =
id3.v24.frame.mapper_ = {
  'TALB': ['album', id3.frame_.decodeText],
  'TPE1': ['artist', id3.frame_.decodeText],
  //'TPE2': ['', id3.frame_.decodeText],
  //'TPE3': ['', id3.frame_.decodeText],
  'TIT2': ['title', id3.frame_.decodeText],
  'TYER': ['year', id3.frame_.decodeText],
  'TLEN': ['duration', id3.frame_.decodeText],
  'APIC': ['artwork', id3.frame_.decodeImage]
};



id3.v23.frame.Parser = function() {
  id3.frame_.Parser.call(this, 4, 4, 2, id3.v23.frame.mapper_);
};
util.inherits(id3.v23.frame.Parser, id3.frame_.Parser);




id3.v24.frame.Parser = function() {
  id3.frame_.Parser.call(this, 4, 4, 2, id3.v24.frame.mapper_);
};
util.inherits(id3.v24.frame.Parser, id3.frame_.Parser);


/**
 * Parses 2-to-4-byte size.
 *
 * @param {(Buffer|Array.<number>)} s The size bytes (big endian).
 * @param {boolean} ebb Eight-Bit-Bytes
 * @return {number} The size.
 */
id3.getSize = function(s, ebb) {
  var b = ebb ? 8 : 7;
  switch (s.length) {
    case 2: return s[1] | (s[0] << b);
    case 3: return s[2] | (s[1] << b) | (s[0] << (2 * b));
    case 4: return s[3] | (s[2] << b) | (s[1] << (2 * b)) | (s[0] << (3 * b));
  }
};


id3.getTags = function(data) {
  var header = data.slice(0, 10);
  var size = id3.getSize(header.slice(6, 10));

  var frames = data.slice(10, size);

  var parser;
  switch (header[3]) {
    case 2:
      parser = new id3.v22.frame.Parser;
      break;
    case 3:
      parser = new id3.v23.frame.Parser;
      if (header[5] & 64) {
        // Parse Extended-Header.
        var extSize = id3.getSize(data.slice(10, 14));
        frames = data.slice(16 + extSize, size);
      }
      break;
    case 4:
      parser = new id3.v24.frame.Parser;
      if (header[5] & 64) {
        // Parse Extended-Header.
        var extSize = id3.getSize(data.slice(10, 14));
        frames = data.slice(16 + extSize, size);
      }
      break;
    default:
      log.error('Unknown version', 'Header: %s, version: %d',
                header.toString('hex'),
                header[3]);
      return;
  }
  return parser.parse(frames);
};


/**
 * Callback for async read.
 *
 * @param {Error|null} err An error, if there was one, or {@code null}.
 * @param {Buffer} data The file data.
 */
readCb = function(err, data) {
  if (err) {
    log.error('Read error', 'There was an error reading the file: %j', err);
    return;
  }
  // data is a buffer
  var totalSize = data.length;
  if (data.slice(0, 3).toString() === 'ID3') {
    // have ID3 tags, parse them!
    console.log(id3.getTags(data));
  }
};


/** The main function */
main = function() {
  var filepath = argv.file;
  if (!filepath) {
    log.error('File error', 'Need an MP3 to work with');
    return;
  }

  fs.readFile(filepath, readCb);
};


// Start the work
main();
