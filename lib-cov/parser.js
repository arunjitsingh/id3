/* automatically generated by JSCoverage - do not edit */
if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (! _$jscoverage['parser.js']) {
  _$jscoverage['parser.js'] = [];
  _$jscoverage['parser.js'][2] = 0;
  _$jscoverage['parser.js'][3] = 0;
  _$jscoverage['parser.js'][5] = 0;
  _$jscoverage['parser.js'][6] = 0;
  _$jscoverage['parser.js'][7] = 0;
  _$jscoverage['parser.js'][8] = 0;
  _$jscoverage['parser.js'][10] = 0;
  _$jscoverage['parser.js'][12] = 0;
  _$jscoverage['parser.js'][14] = 0;
  _$jscoverage['parser.js'][18] = 0;
  _$jscoverage['parser.js'][20] = 0;
  _$jscoverage['parser.js'][21] = 0;
  _$jscoverage['parser.js'][22] = 0;
  _$jscoverage['parser.js'][23] = 0;
  _$jscoverage['parser.js'][24] = 0;
  _$jscoverage['parser.js'][25] = 0;
  _$jscoverage['parser.js'][26] = 0;
  _$jscoverage['parser.js'][29] = 0;
  _$jscoverage['parser.js'][30] = 0;
  _$jscoverage['parser.js'][33] = 0;
  _$jscoverage['parser.js'][35] = 0;
  _$jscoverage['parser.js'][38] = 0;
  _$jscoverage['parser.js'][42] = 0;
  _$jscoverage['parser.js'][46] = 0;
  _$jscoverage['parser.js'][47] = 0;
  _$jscoverage['parser.js'][50] = 0;
  _$jscoverage['parser.js'][53] = 0;
  _$jscoverage['parser.js'][57] = 0;
  _$jscoverage['parser.js'][59] = 0;
  _$jscoverage['parser.js'][60] = 0;
  _$jscoverage['parser.js'][61] = 0;
  _$jscoverage['parser.js'][62] = 0;
  _$jscoverage['parser.js'][64] = 0;
  _$jscoverage['parser.js'][65] = 0;
  _$jscoverage['parser.js'][66] = 0;
  _$jscoverage['parser.js'][67] = 0;
  _$jscoverage['parser.js'][68] = 0;
  _$jscoverage['parser.js'][69] = 0;
  _$jscoverage['parser.js'][70] = 0;
  _$jscoverage['parser.js'][73] = 0;
  _$jscoverage['parser.js'][74] = 0;
  _$jscoverage['parser.js'][75] = 0;
  _$jscoverage['parser.js'][76] = 0;
  _$jscoverage['parser.js'][80] = 0;
  _$jscoverage['parser.js'][81] = 0;
  _$jscoverage['parser.js'][82] = 0;
  _$jscoverage['parser.js'][83] = 0;
  _$jscoverage['parser.js'][84] = 0;
  _$jscoverage['parser.js'][85] = 0;
  _$jscoverage['parser.js'][86] = 0;
  _$jscoverage['parser.js'][87] = 0;
  _$jscoverage['parser.js'][88] = 0;
  _$jscoverage['parser.js'][90] = 0;
  _$jscoverage['parser.js'][93] = 0;
  _$jscoverage['parser.js'][94] = 0;
  _$jscoverage['parser.js'][97] = 0;
  _$jscoverage['parser.js'][98] = 0;
  _$jscoverage['parser.js'][101] = 0;
  _$jscoverage['parser.js'][102] = 0;
  _$jscoverage['parser.js'][103] = 0;
  _$jscoverage['parser.js'][104] = 0;
  _$jscoverage['parser.js'][106] = 0;
  _$jscoverage['parser.js'][107] = 0;
  _$jscoverage['parser.js'][108] = 0;
  _$jscoverage['parser.js'][109] = 0;
  _$jscoverage['parser.js'][110] = 0;
  _$jscoverage['parser.js'][111] = 0;
  _$jscoverage['parser.js'][112] = 0;
  _$jscoverage['parser.js'][113] = 0;
  _$jscoverage['parser.js'][114] = 0;
  _$jscoverage['parser.js'][115] = 0;
  _$jscoverage['parser.js'][116] = 0;
  _$jscoverage['parser.js'][117] = 0;
  _$jscoverage['parser.js'][118] = 0;
  _$jscoverage['parser.js'][120] = 0;
  _$jscoverage['parser.js'][121] = 0;
  _$jscoverage['parser.js'][122] = 0;
  _$jscoverage['parser.js'][123] = 0;
  _$jscoverage['parser.js'][124] = 0;
  _$jscoverage['parser.js'][125] = 0;
  _$jscoverage['parser.js'][126] = 0;
  _$jscoverage['parser.js'][128] = 0;
  _$jscoverage['parser.js'][129] = 0;
  _$jscoverage['parser.js'][130] = 0;
  _$jscoverage['parser.js'][131] = 0;
  _$jscoverage['parser.js'][132] = 0;
  _$jscoverage['parser.js'][133] = 0;
  _$jscoverage['parser.js'][135] = 0;
  _$jscoverage['parser.js'][136] = 0;
  _$jscoverage['parser.js'][139] = 0;
  _$jscoverage['parser.js'][143] = 0;
}
_$jscoverage['parser.js'][2]++;
(function () {
  _$jscoverage['parser.js'][3]++;
  var FrameParser, Parser, _toNumber;
  _$jscoverage['parser.js'][5]++;
  _toNumber = (function (s, ebb) {
  _$jscoverage['parser.js'][6]++;
  var b;
  _$jscoverage['parser.js'][7]++;
  b = ebb? 8: 7;
  _$jscoverage['parser.js'][8]++;
  switch (s.length) {
  case 2:
    _$jscoverage['parser.js'][10]++;
    return s[1] | (s[0] << b);
  case 3:
    _$jscoverage['parser.js'][12]++;
    return s[2] | (s[1] << b) | (s[0] << (2 * b));
  case 4:
    _$jscoverage['parser.js'][14]++;
    return s[3] | (s[2] << b) | (s[1] << (2 * b)) | (s[0] << (3 * b));
  }
});
  _$jscoverage['parser.js'][18]++;
  FrameParser = {};
  _$jscoverage['parser.js'][20]++;
  FrameParser._decodeText = (function (data) {
  _$jscoverage['parser.js'][21]++;
  var encoding, headsz, len, tailsz;
  _$jscoverage['parser.js'][22]++;
  len = data.length;
  _$jscoverage['parser.js'][23]++;
  encoding = data[0];
  _$jscoverage['parser.js'][24]++;
  headsz = 0;
  _$jscoverage['parser.js'][25]++;
  tailsz = 0;
  _$jscoverage['parser.js'][26]++;
  switch (encoding) {
  case 0:
  case 3:
    _$jscoverage['parser.js'][29]++;
    headsz = tailsz = 1;
    _$jscoverage['parser.js'][30]++;
    break;
  case 1:
  case 2:
    _$jscoverage['parser.js'][33]++;
    headsz = tailsz = 2;
  }
  _$jscoverage['parser.js'][35]++;
  return data.toString("utf-8", headsz, len - tailsz);
});
  _$jscoverage['parser.js'][38]++;
  FrameParser._v1Decoders = {"TAL": ["album", FrameParser._decodeText]};
  _$jscoverage['parser.js'][42]++;
  FrameParser._v3Decoders = {"TALB": ["album", FrameParser._decodeText]};
  _$jscoverage['parser.js'][46]++;
  FrameParser.get = (function (version) {
  _$jscoverage['parser.js'][47]++;
  switch (version) {
  case 1:
  case 2:
    _$jscoverage['parser.js'][50]++;
    return FrameParser._v1Decoders;
  case 3:
  case 4:
    _$jscoverage['parser.js'][53]++;
    return FrameParser._v3Decoders;
  }
});
  _$jscoverage['parser.js'][57]++;
  Parser = (function () {
  _$jscoverage['parser.js'][59]++;
  function Parser(data) {
    _$jscoverage['parser.js'][60]++;
    this.data = data;
    _$jscoverage['parser.js'][61]++;
    if (! this.data.slice(0, 3).toString() === "ID3") {
      _$jscoverage['parser.js'][62]++;
      throw new Error("No ID3 tags present!");
    }
    _$jscoverage['parser.js'][64]++;
    this.version = this.data[3] | (this.data[4] << 8);
    _$jscoverage['parser.js'][65]++;
    this.size = _toNumber(this.data.slice(6, 10), false);
    _$jscoverage['parser.js'][66]++;
    this._initializeExtendedHeader();
    _$jscoverage['parser.js'][67]++;
    this._initializeFrames();
    _$jscoverage['parser.js'][68]++;
    this._initializeFooter();
    _$jscoverage['parser.js'][69]++;
    this.totalSize = this.size + 10 + (this.hasFooter? 10: 0);
    _$jscoverage['parser.js'][70]++;
    this.parsed = false;
}
  _$jscoverage['parser.js'][73]++;
  Parser.prototype._initializeExtendedHeader = (function () {
  _$jscoverage['parser.js'][74]++;
  this.hasExtendedHeader = this.data[5] & 64;
  _$jscoverage['parser.js'][75]++;
  if (this.hasExtenderHeader) {
    _$jscoverage['parser.js'][76]++;
    return this.extendedHeaderSize = _toNumber(this.data.slice(10, 14), false);
  }
});
  _$jscoverage['parser.js'][80]++;
  Parser.prototype._initializeFrames = (function () {
  _$jscoverage['parser.js'][81]++;
  var _ref;
  _$jscoverage['parser.js'][82]++;
  this.frameIdSize = 3;
  _$jscoverage['parser.js'][83]++;
  this.frameSizeSize = 3;
  _$jscoverage['parser.js'][84]++;
  this.frameFlagsSize = 0;
  _$jscoverage['parser.js'][85]++;
  if ((_ref = this.version) === 3 || _ref === 4) {
    _$jscoverage['parser.js'][86]++;
    this.frameIdSize = 4;
    _$jscoverage['parser.js'][87]++;
    this.frameSizeSize = 4;
    _$jscoverage['parser.js'][88]++;
    this.frameFlagsSize = 2;
  }
  _$jscoverage['parser.js'][90]++;
  return this.frameParser = FrameParser.get(this.version);
});
  _$jscoverage['parser.js'][93]++;
  Parser.prototype._initializeFooter = (function () {
  _$jscoverage['parser.js'][94]++;
  return this.hasFooter = this.data[5] & 16;
});
  _$jscoverage['parser.js'][97]++;
  Parser.prototype._getFrameStart = (function () {
  _$jscoverage['parser.js'][98]++;
  return 10 + (this.hasExtenderHeader? 6 + this.extendedHeaderSize: 0);
});
  _$jscoverage['parser.js'][101]++;
  Parser.prototype.parse = (function () {
  _$jscoverage['parser.js'][102]++;
  var data, fl, flsz, frame, i, id, ids, idsz, max, p, parser, sz, szsz, tags;
  _$jscoverage['parser.js'][103]++;
  if (this.parsed) {
    _$jscoverage['parser.js'][104]++;
    return this.tags;
  }
  _$jscoverage['parser.js'][106]++;
  data = this.data;
  _$jscoverage['parser.js'][107]++;
  parser = this.frameParser;
  _$jscoverage['parser.js'][108]++;
  idsz = this.frameIdSize;
  _$jscoverage['parser.js'][109]++;
  szsz = this.frameSizeSize;
  _$jscoverage['parser.js'][110]++;
  flsz = this.frameFlagsSize;
  _$jscoverage['parser.js'][111]++;
  tags = this.tags = {};
  _$jscoverage['parser.js'][112]++;
  ids = this.ids = [];
  _$jscoverage['parser.js'][113]++;
  i = this._getFrameStart();
  _$jscoverage['parser.js'][114]++;
  max = this.totalSize - (this.hasFooter? 10: 0);
  _$jscoverage['parser.js'][115]++;
  while (i < max) {
    _$jscoverage['parser.js'][116]++;
    id = data.slice(i, i + idsz).toString();
    _$jscoverage['parser.js'][117]++;
    if (! /^[A-Z0-9]+$/.test(id)) {
      _$jscoverage['parser.js'][118]++;
      break;
    }
    _$jscoverage['parser.js'][120]++;
    i += idsz;
    _$jscoverage['parser.js'][121]++;
    ids.push(id);
    _$jscoverage['parser.js'][122]++;
    sz = _toNumber(data.slice(i, i + szsz), /A?PIC/.test(id));
    _$jscoverage['parser.js'][123]++;
    i += szsz;
    _$jscoverage['parser.js'][124]++;
    if (! parser[id]) {
      _$jscoverage['parser.js'][125]++;
      i += flsz + sz;
      _$jscoverage['parser.js'][126]++;
      continue;
    }
    _$jscoverage['parser.js'][128]++;
    fl = data.slice(i, i + flsz);
    _$jscoverage['parser.js'][129]++;
    i += flsz;
    _$jscoverage['parser.js'][130]++;
    frame = data.slice(i, i + sz);
    _$jscoverage['parser.js'][131]++;
    i += sz;
    _$jscoverage['parser.js'][132]++;
    p = parser[id];
    _$jscoverage['parser.js'][133]++;
    tags[p[0]] = p[1](frame);
}
  _$jscoverage['parser.js'][135]++;
  this.parsed = true;
  _$jscoverage['parser.js'][136]++;
  return this.tags;
});
  _$jscoverage['parser.js'][139]++;
  return Parser;
})();
  _$jscoverage['parser.js'][143]++;
  module.exports.Parser = Parser;
}).call(this);
_$jscoverage['parser.js'].source = ["// Generated by CoffeeScript 1.3.3","(function() {","  var FrameParser, Parser, _toNumber;","","  _toNumber = function(s, ebb) {","    var b;","    b = ebb ? 8 : 7;","    switch (s.length) {","      case 2:","        return s[1] | (s[0] &lt;&lt; b);","      case 3:","        return s[2] | (s[1] &lt;&lt; b) | (s[0] &lt;&lt; (2 * b));","      case 4:","        return s[3] | (s[2] &lt;&lt; b) | (s[1] &lt;&lt; (2 * b)) | (s[0] &lt;&lt; (3 * b));","    }","  };","","  FrameParser = {};","","  FrameParser._decodeText = function(data) {","    var encoding, headsz, len, tailsz;","    len = data.length;","    encoding = data[0];","    headsz = 0;","    tailsz = 0;","    switch (encoding) {","      case 0:","      case 3:","        headsz = tailsz = 1;","        break;","      case 1:","      case 2:","        headsz = tailsz = 2;","    }","    return data.toString('utf-8', headsz, len - tailsz);","  };","","  FrameParser._v1Decoders = {","    'TAL': ['album', FrameParser._decodeText]","  };","","  FrameParser._v3Decoders = {","    'TALB': ['album', FrameParser._decodeText]","  };","","  FrameParser.get = function(version) {","    switch (version) {","      case 1:","      case 2:","        return FrameParser._v1Decoders;","      case 3:","      case 4:","        return FrameParser._v3Decoders;","    }","  };","","  Parser = (function() {","","    function Parser(data) {","      this.data = data;","      if (!this.data.slice(0, 3).toString() === 'ID3') {","        throw new Error('No ID3 tags present!');","      }","      this.version = this.data[3] | (this.data[4] &lt;&lt; 8);","      this.size = _toNumber(this.data.slice(6, 10), false);","      this._initializeExtendedHeader();","      this._initializeFrames();","      this._initializeFooter();","      this.totalSize = this.size + 10 + (this.hasFooter ? 10 : 0);","      this.parsed = false;","    }","","    Parser.prototype._initializeExtendedHeader = function() {","      this.hasExtendedHeader = this.data[5] &amp; 0x40;","      if (this.hasExtenderHeader) {","        return this.extendedHeaderSize = _toNumber(this.data.slice(10, 14), false);","      }","    };","","    Parser.prototype._initializeFrames = function() {","      var _ref;","      this.frameIdSize = 3;","      this.frameSizeSize = 3;","      this.frameFlagsSize = 0;","      if ((_ref = this.version) === 3 || _ref === 4) {","        this.frameIdSize = 4;","        this.frameSizeSize = 4;","        this.frameFlagsSize = 2;","      }","      return this.frameParser = FrameParser.get(this.version);","    };","","    Parser.prototype._initializeFooter = function() {","      return this.hasFooter = this.data[5] &amp; 0x10;","    };","","    Parser.prototype._getFrameStart = function() {","      return 10 + (this.hasExtenderHeader ? 6 + this.extendedHeaderSize : 0);","    };","","    Parser.prototype.parse = function() {","      var data, fl, flsz, frame, i, id, ids, idsz, max, p, parser, sz, szsz, tags;","      if (this.parsed) {","        return this.tags;","      }","      data = this.data;","      parser = this.frameParser;","      idsz = this.frameIdSize;","      szsz = this.frameSizeSize;","      flsz = this.frameFlagsSize;","      tags = this.tags = {};","      ids = this.ids = [];","      i = this._getFrameStart();","      max = this.totalSize - (this.hasFooter ? 10 : 0);","      while (i &lt; max) {","        id = data.slice(i, i + idsz).toString();","        if (!/^[A-Z0-9]+$/.test(id)) {","          break;","        }","        i += idsz;","        ids.push(id);","        sz = _toNumber(data.slice(i, i + szsz), /A?PIC/.test(id));","        i += szsz;","        if (!parser[id]) {","          i += flsz + sz;","          continue;","        }","        fl = data.slice(i, i + flsz);","        i += flsz;","        frame = data.slice(i, i + sz);","        i += sz;","        p = parser[id];","        tags[p[0]] = p[1](frame);","      }","      this.parsed = true;","      return this.tags;","    };","","    return Parser;","","  })();","","  module.exports.Parser = Parser;","","}).call(this);"];
