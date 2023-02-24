var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/oled-font-5x7/oled-font-5x7.js
var require_oled_font_5x7 = __commonJS({
  "node_modules/oled-font-5x7/oled-font-5x7.js"(exports, module2) {
    module2.exports = {
      monospace: true,
      width: 5,
      height: 7,
      fontData: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        95,
        0,
        0,
        0,
        7,
        0,
        7,
        0,
        20,
        127,
        20,
        127,
        20,
        36,
        42,
        127,
        42,
        18,
        35,
        19,
        8,
        100,
        98,
        54,
        73,
        85,
        34,
        80,
        0,
        5,
        3,
        0,
        0,
        0,
        28,
        34,
        65,
        0,
        0,
        65,
        34,
        28,
        0,
        8,
        42,
        28,
        42,
        8,
        8,
        8,
        62,
        8,
        8,
        0,
        80,
        48,
        0,
        0,
        8,
        8,
        8,
        8,
        8,
        0,
        96,
        96,
        0,
        0,
        32,
        16,
        8,
        4,
        2,
        62,
        81,
        73,
        69,
        62,
        0,
        66,
        127,
        64,
        0,
        66,
        97,
        81,
        73,
        70,
        33,
        65,
        69,
        75,
        49,
        24,
        20,
        18,
        127,
        16,
        39,
        69,
        69,
        69,
        57,
        60,
        74,
        73,
        73,
        48,
        1,
        113,
        9,
        5,
        3,
        54,
        73,
        73,
        73,
        54,
        6,
        73,
        73,
        41,
        30,
        0,
        54,
        54,
        0,
        0,
        0,
        86,
        54,
        0,
        0,
        0,
        8,
        20,
        34,
        65,
        20,
        20,
        20,
        20,
        20,
        65,
        34,
        20,
        8,
        0,
        2,
        1,
        81,
        9,
        6,
        50,
        73,
        121,
        65,
        62,
        126,
        17,
        17,
        17,
        126,
        127,
        73,
        73,
        73,
        54,
        62,
        65,
        65,
        65,
        34,
        127,
        65,
        65,
        34,
        28,
        127,
        73,
        73,
        73,
        65,
        127,
        9,
        9,
        1,
        1,
        62,
        65,
        65,
        81,
        50,
        127,
        8,
        8,
        8,
        127,
        0,
        65,
        127,
        65,
        0,
        32,
        64,
        65,
        63,
        1,
        127,
        8,
        20,
        34,
        65,
        127,
        64,
        64,
        64,
        64,
        127,
        2,
        4,
        2,
        127,
        127,
        4,
        8,
        16,
        127,
        62,
        65,
        65,
        65,
        62,
        127,
        9,
        9,
        9,
        6,
        62,
        65,
        81,
        33,
        94,
        127,
        9,
        25,
        41,
        70,
        70,
        73,
        73,
        73,
        49,
        1,
        1,
        127,
        1,
        1,
        63,
        64,
        64,
        64,
        63,
        31,
        32,
        64,
        32,
        31,
        127,
        32,
        24,
        32,
        127,
        99,
        20,
        8,
        20,
        99,
        3,
        4,
        120,
        4,
        3,
        97,
        81,
        73,
        69,
        67,
        125,
        18,
        18,
        125,
        0,
        61,
        66,
        66,
        66,
        61,
        61,
        64,
        64,
        64,
        61,
        0,
        0,
        127,
        65,
        65,
        2,
        4,
        8,
        16,
        32,
        65,
        65,
        127,
        0,
        0,
        4,
        2,
        1,
        2,
        4,
        64,
        64,
        64,
        64,
        64,
        0,
        1,
        2,
        4,
        0,
        32,
        84,
        84,
        84,
        120,
        127,
        72,
        68,
        68,
        56,
        56,
        68,
        68,
        68,
        32,
        56,
        68,
        68,
        72,
        127,
        56,
        84,
        84,
        84,
        24,
        8,
        126,
        9,
        1,
        2,
        8,
        20,
        84,
        84,
        60,
        127,
        8,
        4,
        4,
        120,
        0,
        68,
        125,
        64,
        0,
        32,
        64,
        68,
        61,
        0,
        0,
        127,
        16,
        40,
        68,
        0,
        65,
        127,
        64,
        0,
        124,
        4,
        24,
        4,
        120,
        124,
        8,
        4,
        4,
        120,
        56,
        68,
        68,
        68,
        56,
        124,
        20,
        20,
        20,
        8,
        8,
        20,
        20,
        24,
        124,
        124,
        8,
        4,
        4,
        8,
        72,
        84,
        84,
        84,
        32,
        4,
        63,
        68,
        64,
        32,
        60,
        64,
        64,
        32,
        124,
        28,
        32,
        64,
        32,
        28,
        60,
        64,
        48,
        64,
        60,
        68,
        40,
        16,
        40,
        68,
        12,
        80,
        80,
        80,
        60,
        68,
        100,
        84,
        76,
        68,
        32,
        85,
        84,
        85,
        120,
        58,
        68,
        68,
        58,
        0,
        58,
        64,
        64,
        58,
        0,
        0,
        8,
        54,
        65,
        0,
        0,
        0,
        127,
        0,
        0,
        0,
        65,
        54,
        8,
        0,
        20,
        62,
        85,
        65,
        34,
        8,
        8,
        42,
        28,
        8,
        8,
        28,
        42,
        8,
        8,
        0,
        0,
        7,
        5,
        7
      ],
      lookup: [
        " ",
        "!",
        '"',
        "#",
        "$",
        "%",
        "&",
        "'",
        "(",
        ")",
        "*",
        "+",
        ",",
        "-",
        ".",
        "/",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        ":",
        ";",
        "<",
        "=",
        ">",
        "?",
        "@",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "\xC4",
        "\xD6",
        "\xDC",
        "[",
        "\\",
        "]",
        "^",
        "_",
        "`",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "\xE4",
        "\xF6",
        "\xFC",
        "{",
        "|",
        "}",
        "\u20AC",
        "\u2020",
        "\u2021",
        "\xB0"
      ]
    };
  }
});

// ../oled-js/node_modules/qr-image/lib/encode.js
var require_encode = __commonJS({
  "../oled-js/node_modules/qr-image/lib/encode.js"(exports, module2) {
    "use strict";
    function pushBits(arr, n, value) {
      for (var bit = 1 << n - 1; bit; bit = bit >>> 1) {
        arr.push(bit & value ? 1 : 0);
      }
    }
    function encode_8bit(data) {
      var len = data.length;
      var bits = [];
      for (var i = 0; i < len; i++) {
        pushBits(bits, 8, data[i]);
      }
      var res = {};
      var d = [0, 1, 0, 0];
      pushBits(d, 16, len);
      res.data10 = res.data27 = d.concat(bits);
      if (len < 256) {
        var d = [0, 1, 0, 0];
        pushBits(d, 8, len);
        res.data1 = d.concat(bits);
      }
      return res;
    }
    var ALPHANUM = function(s) {
      var res = {};
      for (var i = 0; i < s.length; i++) {
        res[s[i]] = i;
      }
      return res;
    }("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:");
    function encode_alphanum(str) {
      var len = str.length;
      var bits = [];
      for (var i = 0; i < len; i += 2) {
        var b = 6;
        var n = ALPHANUM[str[i]];
        if (str[i + 1]) {
          b = 11;
          n = n * 45 + ALPHANUM[str[i + 1]];
        }
        pushBits(bits, b, n);
      }
      var res = {};
      var d = [0, 0, 1, 0];
      pushBits(d, 13, len);
      res.data27 = d.concat(bits);
      if (len < 2048) {
        var d = [0, 0, 1, 0];
        pushBits(d, 11, len);
        res.data10 = d.concat(bits);
      }
      if (len < 512) {
        var d = [0, 0, 1, 0];
        pushBits(d, 9, len);
        res.data1 = d.concat(bits);
      }
      return res;
    }
    function encode_numeric(str) {
      var len = str.length;
      var bits = [];
      for (var i = 0; i < len; i += 3) {
        var s = str.substr(i, 3);
        var b = Math.ceil(s.length * 10 / 3);
        pushBits(bits, b, parseInt(s, 10));
      }
      var res = {};
      var d = [0, 0, 0, 1];
      pushBits(d, 14, len);
      res.data27 = d.concat(bits);
      if (len < 4096) {
        var d = [0, 0, 0, 1];
        pushBits(d, 12, len);
        res.data10 = d.concat(bits);
      }
      if (len < 1024) {
        var d = [0, 0, 0, 1];
        pushBits(d, 10, len);
        res.data1 = d.concat(bits);
      }
      return res;
    }
    function encode_url(str) {
      var slash = str.indexOf("/", 8) + 1 || str.length;
      var res = encode(str.slice(0, slash).toUpperCase(), false);
      if (slash >= str.length) {
        return res;
      }
      var path_res = encode(str.slice(slash), false);
      res.data27 = res.data27.concat(path_res.data27);
      if (res.data10 && path_res.data10) {
        res.data10 = res.data10.concat(path_res.data10);
      }
      if (res.data1 && path_res.data1) {
        res.data1 = res.data1.concat(path_res.data1);
      }
      return res;
    }
    function encode(data, parse_url) {
      var str;
      var t = typeof data;
      if (t == "string" || t == "number") {
        str = "" + data;
        data = new Buffer(str);
      } else if (Buffer.isBuffer(data)) {
        str = data.toString();
      } else if (Array.isArray(data)) {
        data = new Buffer(data);
        str = data.toString();
      } else {
        throw new Error("Bad data");
      }
      if (/^[0-9]+$/.test(str)) {
        if (data.length > 7089) {
          throw new Error("Too much data");
        }
        return encode_numeric(str);
      }
      if (/^[0-9A-Z \$%\*\+\.\/\:\-]+$/.test(str)) {
        if (data.length > 4296) {
          throw new Error("Too much data");
        }
        return encode_alphanum(str);
      }
      if (parse_url && /^https?:/i.test(str)) {
        return encode_url(str);
      }
      if (data.length > 2953) {
        throw new Error("Too much data");
      }
      return encode_8bit(data);
    }
    module2.exports = encode;
  }
});

// ../oled-js/node_modules/qr-image/lib/errorcode.js
var require_errorcode = __commonJS({
  "../oled-js/node_modules/qr-image/lib/errorcode.js"(exports, module2) {
    "use strict";
    var GF256_BASE = 285;
    var EXP_TABLE = [1];
    var LOG_TABLE = [];
    for (i = 1; i < 256; i++) {
      n = EXP_TABLE[i - 1] << 1;
      if (n > 255)
        n = n ^ GF256_BASE;
      EXP_TABLE[i] = n;
    }
    var n;
    var i;
    for (i = 0; i < 255; i++) {
      LOG_TABLE[EXP_TABLE[i]] = i;
    }
    var i;
    function exp(k) {
      while (k < 0)
        k += 255;
      while (k > 255)
        k -= 255;
      return EXP_TABLE[k];
    }
    function log(k) {
      if (k < 1 || k > 255) {
        throw Error("Bad log(" + k + ")");
      }
      return LOG_TABLE[k];
    }
    var POLYNOMIALS = [
      [0],
      [0, 0],
      [0, 25, 1]
    ];
    function generatorPolynomial(num) {
      if (POLYNOMIALS[num]) {
        return POLYNOMIALS[num];
      }
      var prev = generatorPolynomial(num - 1);
      var res = [];
      res[0] = prev[0];
      for (var i2 = 1; i2 <= num; i2++) {
        res[i2] = log(exp(prev[i2]) ^ exp(prev[i2 - 1] + num - 1));
      }
      POLYNOMIALS[num] = res;
      return res;
    }
    module2.exports = function calculate_ec(msg, ec_len) {
      msg = [].slice.call(msg);
      var poly = generatorPolynomial(ec_len);
      for (var i2 = 0; i2 < ec_len; i2++)
        msg.push(0);
      while (msg.length > ec_len) {
        if (!msg[0]) {
          msg.shift();
          continue;
        }
        var log_k = log(msg[0]);
        for (var i2 = 0; i2 <= ec_len; i2++) {
          msg[i2] = msg[i2] ^ exp(poly[i2] + log_k);
        }
        msg.shift();
      }
      return new Buffer(msg);
    };
  }
});

// ../oled-js/node_modules/qr-image/lib/matrix.js
var require_matrix = __commonJS({
  "../oled-js/node_modules/qr-image/lib/matrix.js"(exports, module2) {
    "use strict";
    function init(version) {
      var N = version * 4 + 17;
      var matrix = [];
      var zeros = new Buffer(N);
      zeros.fill(0);
      zeros = [].slice.call(zeros);
      for (var i = 0; i < N; i++) {
        matrix[i] = zeros.slice();
      }
      return matrix;
    }
    function fillFinders(matrix) {
      var N = matrix.length;
      for (var i = -3; i <= 3; i++) {
        for (var j = -3; j <= 3; j++) {
          var max = Math.max(i, j);
          var min = Math.min(i, j);
          var pixel = max == 2 && min >= -2 || min == -2 && max <= 2 ? 128 : 129;
          matrix[3 + i][3 + j] = pixel;
          matrix[3 + i][N - 4 + j] = pixel;
          matrix[N - 4 + i][3 + j] = pixel;
        }
      }
      for (var i = 0; i < 8; i++) {
        matrix[7][i] = matrix[i][7] = matrix[7][N - i - 1] = matrix[i][N - 8] = matrix[N - 8][i] = matrix[N - 1 - i][7] = 128;
      }
    }
    function fillAlignAndTiming(matrix) {
      var N = matrix.length;
      if (N > 21) {
        var len = N - 13;
        var delta = Math.round(len / Math.ceil(len / 28));
        if (delta % 2)
          delta++;
        var res = [];
        for (var p = len + 6; p > 10; p -= delta) {
          res.unshift(p);
        }
        res.unshift(6);
        for (var i = 0; i < res.length; i++) {
          for (var j = 0; j < res.length; j++) {
            var x = res[i], y = res[j];
            if (matrix[x][y])
              continue;
            for (var r = -2; r <= 2; r++) {
              for (var c = -2; c <= 2; c++) {
                var max = Math.max(r, c);
                var min = Math.min(r, c);
                var pixel = max == 1 && min >= -1 || min == -1 && max <= 1 ? 128 : 129;
                matrix[x + r][y + c] = pixel;
              }
            }
          }
        }
      }
      for (var i = 8; i < N - 8; i++) {
        matrix[6][i] = matrix[i][6] = i % 2 ? 128 : 129;
      }
    }
    function fillStub(matrix) {
      var N = matrix.length;
      for (var i = 0; i < 8; i++) {
        if (i != 6) {
          matrix[8][i] = matrix[i][8] = 128;
        }
        matrix[8][N - 1 - i] = 128;
        matrix[N - 1 - i][8] = 128;
      }
      matrix[8][8] = 128;
      matrix[N - 8][8] = 129;
      if (N < 45)
        return;
      for (var i = N - 11; i < N - 8; i++) {
        for (var j = 0; j < 6; j++) {
          matrix[i][j] = matrix[j][i] = 128;
        }
      }
    }
    var fillReserved = function() {
      var FORMATS = Array(32);
      var VERSIONS = Array(40);
      var gf15 = 1335;
      var gf18 = 7973;
      var formats_mask = 21522;
      for (var format = 0; format < 32; format++) {
        var res = format << 10;
        for (var i = 5; i > 0; i--) {
          if (res >>> 9 + i) {
            res = res ^ gf15 << i - 1;
          }
        }
        FORMATS[format] = (res | format << 10) ^ formats_mask;
      }
      for (var version = 7; version <= 40; version++) {
        var res = version << 12;
        for (var i = 6; i > 0; i--) {
          if (res >>> 11 + i) {
            res = res ^ gf18 << i - 1;
          }
        }
        VERSIONS[version] = res | version << 12;
      }
      var EC_LEVELS = { L: 1, M: 0, Q: 3, H: 2 };
      return function fillReserved2(matrix, ec_level, mask) {
        var N = matrix.length;
        var format2 = FORMATS[EC_LEVELS[ec_level] << 3 | mask];
        function F(k) {
          return format2 >> k & 1 ? 129 : 128;
        }
        ;
        for (var i2 = 0; i2 < 8; i2++) {
          matrix[8][N - 1 - i2] = F(i2);
          if (i2 < 6)
            matrix[i2][8] = F(i2);
        }
        for (var i2 = 8; i2 < 15; i2++) {
          matrix[N - 15 + i2][8] = F(i2);
          if (i2 > 8)
            matrix[8][14 - i2] = F(i2);
        }
        matrix[7][8] = F(6);
        matrix[8][8] = F(7);
        matrix[8][7] = F(8);
        var version2 = VERSIONS[(N - 17) / 4];
        if (!version2)
          return;
        function V(k) {
          return version2 >> k & 1 ? 129 : 128;
        }
        ;
        for (var i2 = 0; i2 < 6; i2++) {
          for (var j = 0; j < 3; j++) {
            matrix[N - 11 + j][i2] = matrix[i2][N - 11 + j] = V(i2 * 3 + j);
          }
        }
      };
    }();
    var fillData = function() {
      var MASK_FUNCTIONS = [
        function(i, j) {
          return (i + j) % 2 == 0;
        },
        function(i, j) {
          return i % 2 == 0;
        },
        function(i, j) {
          return j % 3 == 0;
        },
        function(i, j) {
          return (i + j) % 3 == 0;
        },
        function(i, j) {
          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
        },
        function(i, j) {
          return i * j % 2 + i * j % 3 == 0;
        },
        function(i, j) {
          return (i * j % 2 + i * j % 3) % 2 == 0;
        },
        function(i, j) {
          return (i * j % 3 + (i + j) % 2) % 2 == 0;
        }
      ];
      return function fillData2(matrix, data, mask) {
        var N = matrix.length;
        var row, col, dir = -1;
        row = col = N - 1;
        var mask_fn = MASK_FUNCTIONS[mask];
        var len = data.blocks[data.blocks.length - 1].length;
        for (var i = 0; i < len; i++) {
          for (var b = 0; b < data.blocks.length; b++) {
            if (data.blocks[b].length <= i)
              continue;
            put(data.blocks[b][i]);
          }
        }
        len = data.ec_len;
        for (var i = 0; i < len; i++) {
          for (var b = 0; b < data.ec.length; b++) {
            put(data.ec[b][i]);
          }
        }
        if (col > -1) {
          do {
            matrix[row][col] = mask_fn(row, col) ? 1 : 0;
          } while (next());
        }
        function put(byte) {
          for (var mask2 = 128; mask2; mask2 = mask2 >> 1) {
            var pixel = !!(mask2 & byte);
            if (mask_fn(row, col))
              pixel = !pixel;
            matrix[row][col] = pixel ? 1 : 0;
            next();
          }
        }
        function next() {
          do {
            if (col % 2 ^ col < 6) {
              if (dir < 0 && row == 0 || dir > 0 && row == N - 1) {
                col--;
                dir = -dir;
              } else {
                col++;
                row += dir;
              }
            } else {
              col--;
            }
            if (col == 6) {
              col--;
            }
            if (col < 0) {
              return false;
            }
          } while (matrix[row][col] & 240);
          return true;
        }
      };
    }();
    function calculatePenalty(matrix) {
      var N = matrix.length;
      var penalty = 0;
      for (var i = 0; i < N; i++) {
        var pixel = matrix[i][0] & 1;
        var len = 1;
        for (var j = 1; j < N; j++) {
          var p = matrix[i][j] & 1;
          if (p == pixel) {
            len++;
            continue;
          }
          if (len >= 5) {
            penalty += len - 2;
          }
          pixel = p;
          len = 1;
        }
        if (len >= 5) {
          penalty += len - 2;
        }
      }
      for (var j = 0; j < N; j++) {
        var pixel = matrix[0][j] & 1;
        var len = 1;
        for (var i = 1; i < N; i++) {
          var p = matrix[i][j] & 1;
          if (p == pixel) {
            len++;
            continue;
          }
          if (len >= 5) {
            penalty += len - 2;
          }
          pixel = p;
          len = 1;
        }
        if (len >= 5) {
          penalty += len - 2;
        }
      }
      for (var i = 0; i < N - 1; i++) {
        for (var j = 0; j < N - 1; j++) {
          var s = matrix[i][j] + matrix[i][j + 1] + matrix[i + 1][j] + matrix[i + 1][j + 1] & 7;
          if (s == 0 || s == 4) {
            penalty += 3;
          }
        }
      }
      function I(k) {
        return matrix[i][j + k] & 1;
      }
      ;
      function J(k) {
        return matrix[i + k][j] & 1;
      }
      ;
      for (var i = 0; i < N; i++) {
        for (var j = 0; j < N; j++) {
          if (j < N - 6 && I(0) && !I(1) && I(2) && I(3) && I(4) && !I(5) && I(6)) {
            if (j >= 4 && !(I(-4) || I(-3) || I(-2) || I(-1))) {
              penalty += 40;
            }
            if (j < N - 10 && !(I(7) || I(8) || I(9) || I(10))) {
              penalty += 40;
            }
          }
          if (i < N - 6 && J(0) && !J(1) && J(2) && J(3) && J(4) && !J(5) && J(6)) {
            if (i >= 4 && !(J(-4) || J(-3) || J(-2) || J(-1))) {
              penalty += 40;
            }
            if (i < N - 10 && !(J(7) || J(8) || J(9) || J(10))) {
              penalty += 40;
            }
          }
        }
      }
      var numDark = 0;
      for (var i = 0; i < N; i++) {
        for (var j = 0; j < N; j++) {
          if (matrix[i][j] & 1)
            numDark++;
        }
      }
      penalty += 10 * Math.floor(Math.abs(10 - 20 * numDark / (N * N)));
      return penalty;
    }
    function getMatrix(data) {
      var matrix = init(data.version);
      fillFinders(matrix);
      fillAlignAndTiming(matrix);
      fillStub(matrix);
      var penalty = Infinity;
      var bestMask = 0;
      for (var mask = 0; mask < 8; mask++) {
        fillData(matrix, data, mask);
        fillReserved(matrix, data.ec_level, mask);
        var p = calculatePenalty(matrix);
        if (p < penalty) {
          penalty = p;
          bestMask = mask;
        }
      }
      fillData(matrix, data, bestMask);
      fillReserved(matrix, data.ec_level, bestMask);
      return matrix.map(function(row) {
        return row.map(function(cell) {
          return cell & 1;
        });
      });
    }
    module2.exports = {
      getMatrix,
      init,
      fillFinders,
      fillAlignAndTiming,
      fillStub,
      fillReserved,
      fillData,
      calculatePenalty
    };
  }
});

// ../oled-js/node_modules/qr-image/lib/qr-base.js
var require_qr_base = __commonJS({
  "../oled-js/node_modules/qr-image/lib/qr-base.js"(exports, module2) {
    "use strict";
    var encode = require_encode();
    var calculateEC = require_errorcode();
    var matrix = require_matrix();
    function _deepCopy(obj) {
      return JSON.parse(JSON.stringify(obj));
    }
    var EC_LEVELS = ["L", "M", "Q", "H"];
    var versions = [
      [],
      [26, 7, 1, 10, 1, 13, 1, 17, 1],
      [44, 10, 1, 16, 1, 22, 1, 28, 1],
      [70, 15, 1, 26, 1, 36, 2, 44, 2],
      [100, 20, 1, 36, 2, 52, 2, 64, 4],
      [134, 26, 1, 48, 2, 72, 4, 88, 4],
      [172, 36, 2, 64, 4, 96, 4, 112, 4],
      [196, 40, 2, 72, 4, 108, 6, 130, 5],
      [242, 48, 2, 88, 4, 132, 6, 156, 6],
      [292, 60, 2, 110, 5, 160, 8, 192, 8],
      [346, 72, 4, 130, 5, 192, 8, 224, 8],
      [404, 80, 4, 150, 5, 224, 8, 264, 11],
      [466, 96, 4, 176, 8, 260, 10, 308, 11],
      [532, 104, 4, 198, 9, 288, 12, 352, 16],
      [581, 120, 4, 216, 9, 320, 16, 384, 16],
      [655, 132, 6, 240, 10, 360, 12, 432, 18],
      [733, 144, 6, 280, 10, 408, 17, 480, 16],
      [815, 168, 6, 308, 11, 448, 16, 532, 19],
      [901, 180, 6, 338, 13, 504, 18, 588, 21],
      [991, 196, 7, 364, 14, 546, 21, 650, 25],
      [1085, 224, 8, 416, 16, 600, 20, 700, 25],
      [1156, 224, 8, 442, 17, 644, 23, 750, 25],
      [1258, 252, 9, 476, 17, 690, 23, 816, 34],
      [1364, 270, 9, 504, 18, 750, 25, 900, 30],
      [1474, 300, 10, 560, 20, 810, 27, 960, 32],
      [1588, 312, 12, 588, 21, 870, 29, 1050, 35],
      [1706, 336, 12, 644, 23, 952, 34, 1110, 37],
      [1828, 360, 12, 700, 25, 1020, 34, 1200, 40],
      [1921, 390, 13, 728, 26, 1050, 35, 1260, 42],
      [2051, 420, 14, 784, 28, 1140, 38, 1350, 45],
      [2185, 450, 15, 812, 29, 1200, 40, 1440, 48],
      [2323, 480, 16, 868, 31, 1290, 43, 1530, 51],
      [2465, 510, 17, 924, 33, 1350, 45, 1620, 54],
      [2611, 540, 18, 980, 35, 1440, 48, 1710, 57],
      [2761, 570, 19, 1036, 37, 1530, 51, 1800, 60],
      [2876, 570, 19, 1064, 38, 1590, 53, 1890, 63],
      [3034, 600, 20, 1120, 40, 1680, 56, 1980, 66],
      [3196, 630, 21, 1204, 43, 1770, 59, 2100, 70],
      [3362, 660, 22, 1260, 45, 1860, 62, 2220, 74],
      [3532, 720, 24, 1316, 47, 1950, 65, 2310, 77],
      [3706, 750, 25, 1372, 49, 2040, 68, 2430, 81]
    ];
    versions = versions.map(function(v, index) {
      if (!index)
        return {};
      var res = {};
      for (var i = 1; i < 8; i += 2) {
        var length = v[0] - v[i];
        var num_template = v[i + 1];
        var ec_level = EC_LEVELS[i / 2 | 0];
        var level = {
          version: index,
          ec_level,
          data_len: length,
          ec_len: v[i] / num_template,
          blocks: [],
          ec: []
        };
        for (var k = num_template, n = length; k > 0; k--) {
          var block = n / k | 0;
          level.blocks.push(block);
          n -= block;
        }
        res[ec_level] = level;
      }
      return res;
    });
    function getTemplate(message, ec_level) {
      var i = 1;
      var len;
      if (message.data1) {
        len = Math.ceil(message.data1.length / 8);
      } else {
        i = 10;
      }
      for (; i < 10; i++) {
        var version = versions[i][ec_level];
        if (version.data_len >= len) {
          return _deepCopy(version);
        }
      }
      if (message.data10) {
        len = Math.ceil(message.data10.length / 8);
      } else {
        i = 27;
      }
      for (; i < 27; i++) {
        var version = versions[i][ec_level];
        if (version.data_len >= len) {
          return _deepCopy(version);
        }
      }
      len = Math.ceil(message.data27.length / 8);
      for (; i < 41; i++) {
        var version = versions[i][ec_level];
        if (version.data_len >= len) {
          return _deepCopy(version);
        }
      }
      throw new Error("Too much data");
    }
    function fillTemplate(message, template) {
      var blocks = new Buffer(template.data_len);
      blocks.fill(0);
      if (template.version < 10) {
        message = message.data1;
      } else if (template.version < 27) {
        message = message.data10;
      } else {
        message = message.data27;
      }
      var len = message.length;
      for (var i = 0; i < len; i += 8) {
        var b = 0;
        for (var j = 0; j < 8; j++) {
          b = b << 1 | (message[i + j] ? 1 : 0);
        }
        blocks[i / 8] = b;
      }
      var pad = 236;
      for (var i = Math.ceil((len + 4) / 8); i < blocks.length; i++) {
        blocks[i] = pad;
        pad = pad == 236 ? 17 : 236;
      }
      var offset = 0;
      template.blocks = template.blocks.map(function(n) {
        var b2 = blocks.slice(offset, offset + n);
        offset += n;
        template.ec.push(calculateEC(b2, template.ec_len));
        return b2;
      });
      return template;
    }
    function QR(text, ec_level, parse_url) {
      ec_level = EC_LEVELS.indexOf(ec_level) > -1 ? ec_level : "M";
      var message = encode(text, parse_url);
      var data = fillTemplate(message, getTemplate(message, ec_level));
      return matrix.getMatrix(data);
    }
    module2.exports = {
      QR,
      getTemplate,
      fillTemplate
    };
  }
});

// ../oled-js/node_modules/qr-image/lib/crc32buffer.js
var require_crc32buffer = __commonJS({
  "../oled-js/node_modules/qr-image/lib/crc32buffer.js"(exports, module2) {
    "use strict";
    var crc_table = [];
    for (n = 0; n < 256; n++) {
      c = crc_table[n] = new Buffer(4);
      c.writeUInt32BE(n, 0);
      for (k = 0; k < 8; k++) {
        b0 = c[0] & 1;
        b1 = c[1] & 1;
        b2 = c[2] & 1;
        b3 = c[3] & 1;
        c[0] = c[0] >> 1 ^ (b3 ? 237 : 0);
        c[1] = c[1] >> 1 ^ (b3 ? 184 : 0) ^ (b0 ? 128 : 0);
        c[2] = c[2] >> 1 ^ (b3 ? 131 : 0) ^ (b1 ? 128 : 0);
        c[3] = c[3] >> 1 ^ (b3 ? 32 : 0) ^ (b2 ? 128 : 0);
      }
    }
    var c;
    var b0;
    var b1;
    var b2;
    var b3;
    var k;
    var n;
    function update(c2, buf) {
      var l = buf.length;
      for (var n2 = 0; n2 < l; n2++) {
        var e = crc_table[c2[3] ^ buf[n2]];
        c2[3] = e[3] ^ c2[2];
        c2[2] = e[2] ^ c2[1];
        c2[1] = e[1] ^ c2[0];
        c2[0] = e[0];
      }
    }
    function crc32() {
      var l = arguments.length;
      var c2 = new Buffer(4);
      c2.fill(255);
      for (var i = 0; i < l; i++) {
        update(c2, new Buffer(arguments[i]));
      }
      c2[0] = c2[0] ^ 255;
      c2[1] = c2[1] ^ 255;
      c2[2] = c2[2] ^ 255;
      c2[3] = c2[3] ^ 255;
      return c2.readUInt32BE(0);
    }
    module2.exports = crc32;
  }
});

// ../oled-js/node_modules/qr-image/lib/crc32.js
var require_crc32 = __commonJS({
  "../oled-js/node_modules/qr-image/lib/crc32.js"(exports, module2) {
    "use strict";
    (function() {
      if (process.arch === "arm") {
        module2.exports = require_crc32buffer();
        return;
      }
      var crc_table = [];
      (function() {
        for (var n = 0; n < 256; n++) {
          var c = n;
          for (var k = 0; k < 8; k++) {
            if (c & 1) {
              c = 3988292384 ^ c >>> 1;
            } else {
              c = c >>> 1;
            }
          }
          crc_table[n] = c >>> 0;
        }
      })();
      function update(c, buf) {
        var l = buf.length;
        for (var n = 0; n < l; n++) {
          c = crc_table[(c ^ buf[n]) & 255] ^ c >>> 8;
        }
        return c;
      }
      function crc32() {
        var l = arguments.length;
        var c = -1;
        for (var i = 0; i < l; i++) {
          c = update(c, new Buffer(arguments[i]));
        }
        c = (c ^ -1) >>> 0;
        return c;
      }
      module2.exports = crc32;
    })();
  }
});

// ../oled-js/node_modules/qr-image/lib/png.js
var require_png = __commonJS({
  "../oled-js/node_modules/qr-image/lib/png.js"(exports, module2) {
    "use strict";
    var zlib = require("zlib");
    var crc32 = require_crc32();
    var PNG_HEAD = new Buffer([137, 80, 78, 71, 13, 10, 26, 10]);
    var PNG_IHDR = new Buffer([0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0]);
    var PNG_IDAT = new Buffer([0, 0, 0, 0, 73, 68, 65, 84]);
    var PNG_IEND = new Buffer([0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130]);
    function png(bitmap2, stream) {
      stream.push(PNG_HEAD);
      var IHDR = Buffer.concat([PNG_IHDR]);
      IHDR.writeUInt32BE(bitmap2.size, 8);
      IHDR.writeUInt32BE(bitmap2.size, 12);
      IHDR.writeUInt32BE(crc32(IHDR.slice(4, -4)), 21);
      stream.push(IHDR);
      var IDAT = Buffer.concat([
        PNG_IDAT,
        zlib.deflateSync(bitmap2.data, { level: 9 }),
        new Buffer(4)
      ]);
      IDAT.writeUInt32BE(IDAT.length - 12, 0);
      IDAT.writeUInt32BE(crc32(IDAT.slice(4, -4)), IDAT.length - 4);
      stream.push(IDAT);
      stream.push(PNG_IEND);
      stream.push(null);
    }
    function bitmap(matrix, size, margin) {
      var N = matrix.length;
      var X = (N + 2 * margin) * size;
      var data = new Buffer((X + 1) * X);
      data.fill(255);
      for (var i = 0; i < X; i++) {
        data[i * (X + 1)] = 0;
      }
      for (var i = 0; i < N; i++) {
        for (var j = 0; j < N; j++) {
          if (matrix[i][j]) {
            var offset = ((margin + i) * (X + 1) + (margin + j)) * size + 1;
            data.fill(0, offset, offset + size);
            for (var c = 1; c < size; c++) {
              data.copy(data, offset + c * (X + 1), offset, offset + size);
            }
          }
        }
      }
      return {
        data,
        size: X
      };
    }
    module2.exports = {
      bitmap,
      png
    };
  }
});

// ../oled-js/node_modules/qr-image/lib/vector.js
var require_vector = __commonJS({
  "../oled-js/node_modules/qr-image/lib/vector.js"(exports, module2) {
    "use strict";
    function matrix2path(matrix) {
      var N = matrix.length;
      var filled = [];
      for (var row = -1; row <= N; row++) {
        filled[row] = [];
      }
      var path = [];
      for (var row = 0; row < N; row++) {
        for (var col = 0; col < N; col++) {
          if (filled[row][col])
            continue;
          filled[row][col] = 1;
          if (isDark(row, col)) {
            if (!isDark(row - 1, col)) {
              path.push(plot(row, col, "right"));
            }
          } else {
            if (isDark(row, col - 1)) {
              path.push(plot(row, col, "down"));
            }
          }
        }
      }
      return path;
      function isDark(row2, col2) {
        if (row2 < 0 || col2 < 0 || row2 >= N || col2 >= N)
          return false;
        return !!matrix[row2][col2];
      }
      function plot(row0, col0, dir) {
        filled[row0][col0] = 1;
        var res = [];
        res.push(["M", col0, row0]);
        var row2 = row0;
        var col2 = col0;
        var len = 0;
        do {
          switch (dir) {
            case "right":
              filled[row2][col2] = 1;
              if (isDark(row2, col2)) {
                filled[row2 - 1][col2] = 1;
                if (isDark(row2 - 1, col2)) {
                  res.push(["h", len]);
                  len = 0;
                  dir = "up";
                } else {
                  len++;
                  col2++;
                }
              } else {
                res.push(["h", len]);
                len = 0;
                dir = "down";
              }
              break;
            case "left":
              filled[row2 - 1][col2 - 1] = 1;
              if (isDark(row2 - 1, col2 - 1)) {
                filled[row2][col2 - 1] = 1;
                if (isDark(row2, col2 - 1)) {
                  res.push(["h", -len]);
                  len = 0;
                  dir = "down";
                } else {
                  len++;
                  col2--;
                }
              } else {
                res.push(["h", -len]);
                len = 0;
                dir = "up";
              }
              break;
            case "down":
              filled[row2][col2 - 1] = 1;
              if (isDark(row2, col2 - 1)) {
                filled[row2][col2] = 1;
                if (isDark(row2, col2)) {
                  res.push(["v", len]);
                  len = 0;
                  dir = "right";
                } else {
                  len++;
                  row2++;
                }
              } else {
                res.push(["v", len]);
                len = 0;
                dir = "left";
              }
              break;
            case "up":
              filled[row2 - 1][col2] = 1;
              if (isDark(row2 - 1, col2)) {
                filled[row2 - 1][col2 - 1] = 1;
                if (isDark(row2 - 1, col2 - 1)) {
                  res.push(["v", -len]);
                  len = 0;
                  dir = "left";
                } else {
                  len++;
                  row2--;
                }
              } else {
                res.push(["v", -len]);
                len = 0;
                dir = "right";
              }
              break;
          }
        } while (row2 != row0 || col2 != col0);
        return res;
      }
    }
    function pushSVGPath(matrix, stream, margin) {
      matrix2path(matrix).forEach(function(subpath) {
        var res = "";
        for (var k = 0; k < subpath.length; k++) {
          var item = subpath[k];
          switch (item[0]) {
            case "M":
              res += "M" + (item[1] + margin) + " " + (item[2] + margin);
              break;
            default:
              res += item.join("");
          }
        }
        res += "z";
        stream.push(res);
      });
    }
    function SVG_object(matrix, margin) {
      var stream = [];
      pushSVGPath(matrix, stream, margin);
      var result = {
        size: matrix.length + 2 * margin,
        path: stream.filter(Boolean).join("")
      };
      return result;
    }
    function SVG(matrix, stream, margin, size) {
      var X = matrix.length + 2 * margin;
      stream.push('<svg xmlns="http://www.w3.org/2000/svg" ');
      if (size > 0) {
        var XY = X * size;
        stream.push('width="' + XY + '" height="' + XY + '" ');
      }
      stream.push('viewBox="0 0 ' + X + " " + X + '">');
      stream.push('<path d="');
      pushSVGPath(matrix, stream, margin);
      stream.push('"/></svg>');
      stream.push(null);
    }
    function EPS(matrix, stream, margin) {
      var N = matrix.length;
      var scale = 9;
      var X = (N + 2 * margin) * scale;
      stream.push([
        "%!PS-Adobe-3.0 EPSF-3.0",
        "%%BoundingBox: 0 0 " + X + " " + X,
        "/h { 0 rlineto } bind def",
        "/v { 0 exch neg rlineto } bind def",
        "/M { neg " + (N + margin) + " add moveto } bind def",
        "/z { closepath } bind def",
        scale + " " + scale + " scale",
        ""
      ].join("\n"));
      matrix2path(matrix).forEach(function(subpath) {
        var res = "";
        for (var k = 0; k < subpath.length; k++) {
          var item = subpath[k];
          switch (item[0]) {
            case "M":
              res += item[1] + margin + " " + item[2] + " M ";
              break;
            default:
              res += item[1] + " " + item[0] + " ";
          }
        }
        res += "z\n";
        stream.push(res);
      });
      stream.push("fill\n%%EOF\n");
      stream.push(null);
    }
    function PDF(matrix, stream, margin) {
      var N = matrix.length;
      var scale = 9;
      var X = (N + 2 * margin) * scale;
      var data = [
        "%PDF-1.0\n\n",
        "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj\n",
        "2 0 obj << /Type /Pages /Count 1 /Kids [ 3 0 R ] >> endobj\n"
      ];
      data.push("3 0 obj << /Type /Page /Parent 2 0 R /Resources <<>> /Contents 4 0 R /MediaBox [ 0 0 " + X + " " + X + " ] >> endobj\n");
      var path = scale + " 0 0 " + scale + " 0 0 cm\n";
      path += matrix2path(matrix).map(function(subpath) {
        var res = "";
        var x, y;
        for (var k = 0; k < subpath.length; k++) {
          var item = subpath[k];
          switch (item[0]) {
            case "M":
              x = item[1] + margin;
              y = N - item[2] + margin;
              res += x + " " + y + " m ";
              break;
            case "h":
              x += item[1];
              res += x + " " + y + " l ";
              break;
            case "v":
              y -= item[1];
              res += x + " " + y + " l ";
              break;
          }
        }
        res += "h";
        return res;
      }).join("\n");
      path += "\nf\n";
      data.push("4 0 obj << /Length " + path.length + " >> stream\n" + path + "endstream\nendobj\n");
      var xref = "xref\n0 5\n0000000000 65535 f \n";
      for (var i = 1, l = data[0].length; i < 5; i++) {
        xref += ("0000000000" + l).substr(-10) + " 00000 n \n";
        l += data[i].length;
      }
      data.push(xref, "trailer << /Root 1 0 R /Size 5 >>\n", "startxref\n" + l + "\n%%EOF\n");
      stream.push(data.join(""));
      stream.push(null);
    }
    module2.exports = {
      svg: SVG,
      eps: EPS,
      pdf: PDF,
      svg_object: SVG_object
    };
  }
});

// ../oled-js/node_modules/qr-image/lib/qr.js
var require_qr = __commonJS({
  "../oled-js/node_modules/qr-image/lib/qr.js"(exports, module2) {
    "use strict";
    var Readable2 = require("stream").Readable;
    var QR = require_qr_base().QR;
    var png = require_png();
    var vector = require_vector();
    var fn_noop = function() {
    };
    var BITMAP_OPTIONS = {
      parse_url: false,
      ec_level: "M",
      size: 5,
      margin: 4,
      customize: null
    };
    var VECTOR_OPTIONS = {
      parse_url: false,
      ec_level: "M",
      margin: 1,
      size: 0
    };
    function get_options(options, force_type) {
      if (typeof options === "string") {
        options = { "ec_level": options };
      } else {
        options = options || {};
      }
      var _options = {
        type: String(force_type || options.type || "png").toLowerCase()
      };
      var defaults = _options.type == "png" ? BITMAP_OPTIONS : VECTOR_OPTIONS;
      for (var k in defaults) {
        _options[k] = k in options ? options[k] : defaults[k];
      }
      return _options;
    }
    function qr_image(text, options) {
      options = get_options(options);
      var matrix = QR(text, options.ec_level, options.parse_url);
      var stream = new Readable2();
      stream._read = fn_noop;
      switch (options.type) {
        case "svg":
        case "pdf":
        case "eps":
          process.nextTick(function() {
            vector[options.type](matrix, stream, options.margin, options.size);
          });
          break;
        case "svgpath":
          process.nextTick(function() {
            var obj = vector.svg_object(matrix, options.margin, options.size);
            stream.push(obj.path);
            stream.push(null);
          });
          break;
        case "png":
        default:
          process.nextTick(function() {
            var bitmap = png.bitmap(matrix, options.size, options.margin);
            if (options.customize) {
              options.customize(bitmap);
            }
            png.png(bitmap, stream);
          });
      }
      return stream;
    }
    function qr_image_sync(text, options) {
      options = get_options(options);
      var matrix = QR(text, options.ec_level, options.parse_url);
      var stream = [];
      var result;
      switch (options.type) {
        case "svg":
        case "pdf":
        case "eps":
          vector[options.type](matrix, stream, options.margin, options.size);
          result = stream.filter(Boolean).join("");
          break;
        case "png":
        default:
          var bitmap = png.bitmap(matrix, options.size, options.margin);
          if (options.customize) {
            options.customize(bitmap);
          }
          png.png(bitmap, stream);
          result = Buffer.concat(stream.filter(Boolean));
      }
      return result;
    }
    function svg_object(text, options) {
      options = get_options(options, "svg");
      var matrix = QR(text, options.ec_level);
      return vector.svg_object(matrix, options.margin);
    }
    module2.exports = {
      matrix: QR,
      image: qr_image,
      imageSync: qr_image_sync,
      svgObject: svg_object
    };
  }
});

// ../oled-js/build/oled.js
var require_oled = __commonJS({
  "../oled-js/build/oled.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var qr2 = null;
    try {
      qr2 = require_qr();
    } catch (err) {
    }
    var Protocol;
    (function(Protocol2) {
      Protocol2[Protocol2["I2C"] = 0] = "I2C";
      Protocol2[Protocol2["SPI"] = 1] = "SPI";
    })(Protocol || (Protocol = {}));
    var TransferType;
    (function(TransferType2) {
      TransferType2[TransferType2["Command"] = 0] = "Command";
      TransferType2[TransferType2["Data"] = 1] = "Data";
    })(TransferType || (TransferType = {}));
    var Oled2 = function() {
      function Oled3(board, five5, opts) {
        this.HEIGHT = opts.height || 32;
        this.WIDTH = opts.width || 128;
        this.ADDRESS = opts.address || 60;
        this.PROTOCOL = opts.address ? Protocol.I2C : Protocol.SPI;
        this.MICROVIEW = opts.microview || false;
        this.SECONDARYPIN = opts.secondaryPin || 12;
        this.RESETPIN = opts.resetPin === void 0 ? 4 : opts.resetPin;
        this.DATA = opts.data || 64;
        this.COMMAND = opts.command || 0;
        this.cursor_x = 0;
        this.cursor_y = 0;
        this.buffer = Buffer.alloc(this.WIDTH * this.HEIGHT / 8);
        this.buffer.fill(0);
        this.dirtyBytes = [];
        this.board = board;
        this.five = five5;
        var config = {
          "128x32": {
            multiplex: 31,
            compins: 2,
            coloffset: 0
          },
          "128x64": {
            multiplex: 63,
            compins: 18,
            coloffset: 0
          },
          "96x16": {
            multiplex: 15,
            compins: 2,
            coloffset: 0
          },
          "64x48": {
            multiplex: 47,
            compins: 18,
            coloffset: this.MICROVIEW ? 32 : 0
          }
        };
        if (this.MICROVIEW) {
          this.SPIconfig = {
            dcPin: 8,
            ssPin: 10,
            rstPin: 7,
            clkPin: 13,
            mosiPin: 11
          };
        } else if (this.PROTOCOL === Protocol.SPI) {
          this.SPIconfig = {
            dcPin: 11,
            ssPin: this.SECONDARYPIN,
            rstPin: 13,
            clkPin: 10,
            mosiPin: 9
          };
        }
        var screenSize = "".concat(this.WIDTH, "x").concat(this.HEIGHT);
        this.screenConfig = config[screenSize];
        if (this.PROTOCOL === Protocol.I2C) {
          this._setUpI2C(opts);
        } else {
          this._setUpSPI();
        }
        this._initialise();
      }
      Oled3.prototype._initialise = function() {
        var initSeq = [
          Oled3.DISPLAY_OFF,
          Oled3.SET_DISPLAY_CLOCK_DIV,
          128,
          Oled3.SET_MULTIPLEX,
          this.screenConfig.multiplex,
          Oled3.SET_DISPLAY_OFFSET,
          0,
          Oled3.SET_START_LINE,
          Oled3.CHARGE_PUMP,
          20,
          Oled3.MEMORY_MODE,
          0,
          Oled3.SEG_REMAP,
          Oled3.COM_SCAN_DEC,
          Oled3.SET_COM_PINS,
          this.screenConfig.compins,
          Oled3.SET_CONTRAST,
          143,
          Oled3.SET_PRECHARGE,
          241,
          Oled3.SET_VCOM_DETECT,
          64,
          Oled3.DISPLAY_ALL_ON_RESUME,
          Oled3.NORMAL_DISPLAY,
          Oled3.DISPLAY_ON
        ];
        for (var i = 0; i < initSeq.length; i++) {
          this._transfer(TransferType.Command, initSeq[i]);
        }
      };
      Oled3.prototype._setUpSPI = function() {
        this.dcPin = new this.five.Pin(this.SPIconfig.dcPin);
        this.ssPin = new this.five.Pin(this.SPIconfig.ssPin);
        this.clkPin = new this.five.Pin(this.SPIconfig.clkPin);
        this.mosiPin = new this.five.Pin(this.SPIconfig.mosiPin);
        this.rstPin = new this.five.Pin(this.SPIconfig.rstPin);
        this.rstPin.low();
        this.rstPin.high();
        this.ssPin.high();
      };
      Oled3.prototype._setUpI2C = function(opts) {
        this.board.io.i2cConfig(opts);
        if (this.rstPin) {
          this.rstPin = new this.five.Pin({
            pin: this.RESETPIN,
            board: this.board
          });
          this.rstPin.low();
          this.rstPin.high();
        }
      };
      Oled3.prototype._transfer = function(type, val) {
        var control;
        if (type === TransferType.Data) {
          control = this.DATA;
        } else if (type === TransferType.Command) {
          control = this.COMMAND;
        } else {
          return;
        }
        if (this.PROTOCOL === Protocol.I2C) {
          this.board.io.i2cWrite(this.ADDRESS, [control, val]);
        } else {
          this._writeSPI(val, type);
        }
      };
      Oled3.prototype._writeSPI = function(byte, mode) {
        if (mode === TransferType.Command) {
          this.dcPin.low();
        } else {
          this.dcPin.high();
        }
        this.ssPin.low();
        for (var bit = 7; bit >= 0; bit--) {
          this.clkPin.low();
          if (byte & 1 << bit) {
            this.mosiPin.high();
          } else {
            this.mosiPin.low();
          }
          this.clkPin.high();
        }
        this.ssPin.high();
      };
      Oled3.prototype._readI2C = function(fn) {
        this.board.io.i2cReadOnce(this.ADDRESS, 1, function(data) {
          fn(data);
        });
      };
      Oled3.prototype._waitUntilReady = function(callback) {
        var oled = this;
        var tick = function(callback2) {
          oled._readI2C(function(byte) {
            var busy = byte >> 7 & 1;
            if (!busy) {
              callback2();
            } else {
              console.log("I'm busy!");
              setTimeout(tick, 0);
            }
          });
        };
        if (this.PROTOCOL === Protocol.I2C) {
          setTimeout(function() {
            tick(callback);
          }, 0);
        } else {
          callback();
        }
      };
      Oled3.prototype.setCursor = function(x, y) {
        this.cursor_x = x;
        this.cursor_y = y;
      };
      Oled3.prototype._invertColor = function(color) {
        return color === 0 ? 1 : 0;
      };
      Oled3.prototype.writeString = function(font2, size, string, color, wrap, linespacing, sync) {
        var immed = typeof sync === "undefined" ? true : sync;
        var wordArr = string.split(" ");
        var len = wordArr.length;
        var offset = this.cursor_x;
        var padding = 0;
        var letspace = 1;
        var leading = linespacing || 2;
        for (var i = 0; i < len; i += 1) {
          if (i < len - 1)
            wordArr[i] += " ";
          var stringArr = wordArr[i].split("");
          var slen = stringArr.length;
          var compare = font2.width * size * slen + size * (len - 1);
          if (wrap && len > 1 && offset >= this.WIDTH - compare) {
            offset = 1;
            this.cursor_y += font2.height * size + size + leading;
            this.setCursor(offset, this.cursor_y);
          }
          for (var i_1 = 0; i_1 < slen; i_1 += 1) {
            var charBuf = this._findCharBuf(font2, stringArr[i_1]);
            var charBytes = this._readCharBytes(charBuf);
            this._drawChar(font2, charBytes, size, color, false);
            this.fillRect(offset - padding, this.cursor_y, padding, font2.height * size, this._invertColor(color), false);
            padding = stringArr[i_1] === " " ? 0 : size + letspace;
            offset += font2.width * size + padding;
            if (wrap && offset >= this.WIDTH - font2.width - letspace) {
              offset = 1;
              this.cursor_y += font2.height * size + size + leading;
            }
            this.setCursor(offset, this.cursor_y);
          }
        }
        if (immed) {
          this._updateDirtyBytes(this.dirtyBytes);
        }
      };
      Oled3.prototype._drawChar = function(font2, byteArray, size, color, sync) {
        var x = this.cursor_x;
        var y = this.cursor_y;
        var c = 0;
        var pagePos = 0;
        for (var i = 0; i < byteArray.length; i += 1) {
          pagePos = Math.floor(i / font2.width) * 8;
          for (var j = 0; j < 8; j += 1) {
            var pixelState = byteArray[i][j] === 1 ? color : this._invertColor(color);
            var xpos = void 0;
            var ypos = void 0;
            if (size === 1) {
              xpos = x + c;
              ypos = y + j + pagePos;
              this.drawPixel([xpos, ypos, pixelState], false);
            } else {
              xpos = x + i * size;
              ypos = y + j * size;
              this.fillRect(xpos, ypos, size, size, pixelState, false);
            }
          }
          c = c < font2.width - 1 ? c += 1 : 0;
        }
      };
      Oled3.prototype._readCharBytes = function(byteArray) {
        var bitArr = [];
        var bitCharArr = [];
        for (var i = 0; i < byteArray.length; i += 1) {
          var byte = byteArray[i];
          for (var j = 0; j < 8; j += 1) {
            var bit = byte >> j & 1;
            bitArr.push(bit);
          }
          bitCharArr.push(bitArr);
          bitArr = [];
        }
        return bitCharArr;
      };
      Oled3.prototype._findCharBuf = function(font2, c) {
        var charLength = Math.ceil(font2.width * font2.height / 8);
        var cBufPos = font2.lookup.indexOf(c) * charLength;
        return font2.fontData.slice(cBufPos, cBufPos + charLength);
      };
      Oled3.prototype.update = function() {
        var _this = this;
        this._waitUntilReady(function() {
          var displaySeq = [
            Oled3.COLUMN_ADDR,
            _this.screenConfig.coloffset,
            _this.screenConfig.coloffset + _this.WIDTH - 1,
            Oled3.PAGE_ADDR,
            0,
            _this.HEIGHT / 8 - 1
          ];
          var displaySeqLen = displaySeq.length;
          var bufferLen = _this.buffer.length;
          for (var i = 0; i < displaySeqLen; i += 1) {
            _this._transfer(TransferType.Command, displaySeq[i]);
          }
          for (var i = 0; i < bufferLen; i += 1) {
            _this._transfer(TransferType.Data, _this.buffer[i]);
          }
        });
        this.dirtyBytes = [];
      };
      Oled3.prototype.updateDirty = function() {
        this._updateDirtyBytes(this.dirtyBytes);
      };
      Oled3.prototype.dimDisplay = function(bool) {
        var contrast;
        if (bool) {
          contrast = 0;
        } else {
          contrast = 207;
        }
        this._transfer(TransferType.Command, Oled3.SET_CONTRAST);
        this._transfer(TransferType.Command, contrast);
      };
      Oled3.prototype.turnOffDisplay = function() {
        this._transfer(TransferType.Command, Oled3.DISPLAY_OFF);
      };
      Oled3.prototype.turnOnDisplay = function() {
        this._transfer(TransferType.Command, Oled3.DISPLAY_ON);
      };
      Oled3.prototype.clearDisplay = function(sync) {
        var immed = typeof sync === "undefined" ? true : sync;
        for (var i = 0; i < this.buffer.length; i += 1) {
          if (this.buffer[i] !== 0) {
            this.buffer[i] = 0;
            if (this.dirtyBytes.indexOf(i) === -1) {
              this.dirtyBytes.push(i);
            }
          }
        }
        if (immed) {
          this._updateDirtyBytes(this.dirtyBytes);
        }
      };
      Oled3.prototype.invertDisplay = function(bool) {
        if (bool) {
          this._transfer(TransferType.Command, Oled3.INVERT_DISPLAY);
        } else {
          this._transfer(TransferType.Command, Oled3.NORMAL_DISPLAY);
        }
      };
      Oled3.prototype.drawBitmap = function(pixels, sync) {
        var immed = typeof sync === "undefined" ? true : sync;
        for (var i = 0; i < pixels.length; i++) {
          var x = Math.floor(i % this.WIDTH);
          var y = Math.floor(i / this.WIDTH);
          this.drawPixel([x, y, pixels[i]], false);
        }
        if (immed) {
          this._updateDirtyBytes(this.dirtyBytes);
        }
      };
      Oled3.prototype._isSinglePixel = function(pixels) {
        return typeof pixels[0] !== "object";
      };
      Oled3.prototype.drawPixel = function(pixels, sync) {
        var _this = this;
        var immed = typeof sync === "undefined" ? true : sync;
        if (this._isSinglePixel(pixels))
          pixels = [pixels];
        pixels.forEach(function(el) {
          var x = el[0], y = el[1], color = el[2];
          if (x > _this.WIDTH || y > _this.HEIGHT)
            return;
          var byte = 0;
          var page = Math.floor(y / 8);
          var pageShift = 1 << y - 8 * page;
          page === 0 ? byte = x : byte = x + _this.WIDTH * page;
          if (color === 0) {
            _this.buffer[byte] &= ~pageShift;
          } else {
            _this.buffer[byte] |= pageShift;
          }
          if (_this.dirtyBytes.indexOf(byte) === -1) {
            _this.dirtyBytes.push(byte);
          }
        }, this);
        if (immed) {
          this._updateDirtyBytes(this.dirtyBytes);
        }
      };
      Oled3.prototype._updateDirtyBytes = function(byteArray) {
        var _this = this;
        var blen = byteArray.length;
        this._waitUntilReady(function() {
          var pageStart = Infinity;
          var pageEnd = 0;
          var colStart = Infinity;
          var colEnd = 0;
          var any = false;
          for (var i = 0; i < blen; i += 1) {
            var b = byteArray[i];
            if (b >= 0 && b < _this.buffer.length) {
              var page = b / _this.WIDTH | 0;
              if (page < pageStart)
                pageStart = page;
              if (page > pageEnd)
                pageEnd = page;
              var col = b % _this.WIDTH;
              if (col < colStart)
                colStart = col;
              if (col > colEnd)
                colEnd = col;
              any = true;
            }
          }
          if (!any)
            return;
          var displaySeq = [
            Oled3.COLUMN_ADDR,
            colStart,
            colEnd,
            Oled3.PAGE_ADDR,
            pageStart,
            pageEnd
          ];
          var displaySeqLen = displaySeq.length;
          for (var i = 0; i < displaySeqLen; i += 1) {
            _this._transfer(TransferType.Command, displaySeq[i]);
          }
          for (var i = pageStart; i <= pageEnd; i += 1) {
            for (var j = colStart; j <= colEnd; j += 1) {
              _this._transfer(TransferType.Data, _this.buffer[_this.WIDTH * i + j]);
            }
          }
        });
        this.dirtyBytes = [];
      };
      Oled3.prototype.drawLine = function(x0, y0, x1, y1, color, sync) {
        var immed = typeof sync === "undefined" ? true : sync;
        var dx = Math.abs(x1 - x0);
        var sx = x0 < x1 ? 1 : -1;
        var dy = Math.abs(y1 - y0);
        var sy = y0 < y1 ? 1 : -1;
        var err = (dx > dy ? dx : -dy) / 2;
        while (true) {
          this.drawPixel([x0, y0, color], false);
          if (x0 === x1 && y0 === y1)
            break;
          var e2 = err;
          if (e2 > -dx) {
            err -= dy;
            x0 += sx;
          }
          if (e2 < dy) {
            err += dx;
            y0 += sy;
          }
        }
        if (immed) {
          this._updateDirtyBytes(this.dirtyBytes);
        }
      };
      Oled3.prototype.drawRect = function(x, y, w, h, color, sync) {
        var immed = typeof sync === "undefined" ? true : sync;
        this.drawLine(x, y, x + w, y, color, false);
        this.drawLine(x, y + 1, x, y + h - 1, color, false);
        this.drawLine(x + w, y + 1, x + w, y + h - 1, color, false);
        this.drawLine(x, y + h - 1, x + w, y + h - 1, color, false);
        if (immed) {
          this._updateDirtyBytes(this.dirtyBytes);
        }
      };
      Oled3.prototype.drawQRCode = function(x, y, data, margin, sync) {
        if (margin === void 0) {
          margin = 4;
        }
        if (qr2) {
          var immed = typeof sync === "undefined" ? true : sync;
          var matrix = qr2.matrix(data);
          var pixels = matrix.flat();
          var bitmap = pixels.map(function(pixel) {
            return pixel ? 0 : 1;
          });
          var width = Math.sqrt(pixels.length);
          this.fillRect(x, y, width + margin * 2, width + margin * 2, 1);
          for (var i = 0; i < bitmap.length; i++) {
            var px = Math.floor(i % width);
            var py = Math.floor(i / width);
            px += margin + x;
            py += margin + y;
            this.drawPixel([px, py, bitmap[i]], false);
          }
          if (immed) {
            this._updateDirtyBytes(this.dirtyBytes);
          }
        } else {
          console.log("Missing optional dependency: qr-image");
        }
      };
      Oled3.prototype.fillRect = function(x, y, w, h, color, sync) {
        var immed = typeof sync === "undefined" ? true : sync;
        for (var i = x; i < x + w; i += 1) {
          this.drawLine(i, y, i, y + h - 1, color, false);
        }
        if (immed) {
          this._updateDirtyBytes(this.dirtyBytes);
        }
      };
      Oled3.prototype.drawCircle = function(x0, y0, r, color, sync) {
        var immed = typeof sync === "undefined" ? true : sync;
        var f = 1 - r;
        var ddF_x = 1;
        var ddF_y = -2 * r;
        var x = 0;
        var y = r;
        this.drawPixel([
          [x0, y0 + r, color],
          [x0, y0 - r, color],
          [x0 + r, y0, color],
          [x0 - r, y0, color]
        ], false);
        while (x < y) {
          if (f >= 0) {
            y--;
            ddF_y += 2;
            f += ddF_y;
          }
          x++;
          ddF_x += 2;
          f += ddF_x;
          this.drawPixel([
            [x0 + x, y0 + y, color],
            [x0 - x, y0 + y, color],
            [x0 + x, y0 - y, color],
            [x0 - x, y0 - y, color],
            [x0 + y, y0 + x, color],
            [x0 - y, y0 + x, color],
            [x0 + y, y0 - x, color],
            [x0 - y, y0 - x, color]
          ], false);
        }
        if (immed) {
          this._updateDirtyBytes(this.dirtyBytes);
        }
      };
      Oled3.prototype.startScroll = function(dir, start, stop) {
        var _this = this;
        var cmdSeq = [];
        switch (dir) {
          case "right":
            cmdSeq.push(Oled3.RIGHT_HORIZONTAL_SCROLL);
            break;
          case "left":
            cmdSeq.push(Oled3.LEFT_HORIZONTAL_SCROLL);
            break;
          case "left diagonal":
            cmdSeq.push(Oled3.SET_VERTICAL_SCROLL_AREA, 0, this.HEIGHT, Oled3.VERTICAL_AND_LEFT_HORIZONTAL_SCROLL, 0, start, 0, stop, 1, Oled3.ACTIVATE_SCROLL);
            break;
          case "right diagonal":
            cmdSeq.push(Oled3.SET_VERTICAL_SCROLL_AREA, 0, this.HEIGHT, Oled3.VERTICAL_AND_RIGHT_HORIZONTAL_SCROLL, 0, start, 0, stop, 1, Oled3.ACTIVATE_SCROLL);
            break;
        }
        this._waitUntilReady(function() {
          if (dir === "right" || dir === "left") {
            cmdSeq.push(0, start, 0, stop, 0, 255, Oled3.ACTIVATE_SCROLL);
          }
          for (var i = 0; i < cmdSeq.length; i += 1) {
            _this._transfer(TransferType.Command, cmdSeq[i]);
          }
        });
      };
      Oled3.prototype.stopScroll = function() {
        this._transfer(TransferType.Command, Oled3.DEACTIVATE_SCROLL);
      };
      Oled3.DISPLAY_OFF = 174;
      Oled3.DISPLAY_ON = 175;
      Oled3.SET_DISPLAY_CLOCK_DIV = 213;
      Oled3.SET_MULTIPLEX = 168;
      Oled3.SET_DISPLAY_OFFSET = 211;
      Oled3.SET_START_LINE = 0;
      Oled3.CHARGE_PUMP = 141;
      Oled3.EXTERNAL_VCC = false;
      Oled3.MEMORY_MODE = 32;
      Oled3.SEG_REMAP = 161;
      Oled3.COM_SCAN_DEC = 200;
      Oled3.COM_SCAN_INC = 192;
      Oled3.SET_COM_PINS = 218;
      Oled3.SET_CONTRAST = 129;
      Oled3.SET_PRECHARGE = 217;
      Oled3.SET_VCOM_DETECT = 219;
      Oled3.DISPLAY_ALL_ON_RESUME = 164;
      Oled3.NORMAL_DISPLAY = 166;
      Oled3.COLUMN_ADDR = 33;
      Oled3.PAGE_ADDR = 34;
      Oled3.INVERT_DISPLAY = 167;
      Oled3.ACTIVATE_SCROLL = 47;
      Oled3.DEACTIVATE_SCROLL = 46;
      Oled3.SET_VERTICAL_SCROLL_AREA = 163;
      Oled3.RIGHT_HORIZONTAL_SCROLL = 38;
      Oled3.LEFT_HORIZONTAL_SCROLL = 39;
      Oled3.VERTICAL_AND_RIGHT_HORIZONTAL_SCROLL = 41;
      Oled3.VERTICAL_AND_LEFT_HORIZONTAL_SCROLL = 42;
      return Oled3;
    }();
    exports.default = Oled2;
  }
});

// node_modules/qr-image/lib/encode.js
var require_encode2 = __commonJS({
  "node_modules/qr-image/lib/encode.js"(exports, module2) {
    "use strict";
    function pushBits(arr, n, value) {
      for (var bit = 1 << n - 1; bit; bit = bit >>> 1) {
        arr.push(bit & value ? 1 : 0);
      }
    }
    function encode_8bit(data) {
      var len = data.length;
      var bits = [];
      for (var i = 0; i < len; i++) {
        pushBits(bits, 8, data[i]);
      }
      var res = {};
      var d = [0, 1, 0, 0];
      pushBits(d, 16, len);
      res.data10 = res.data27 = d.concat(bits);
      if (len < 256) {
        var d = [0, 1, 0, 0];
        pushBits(d, 8, len);
        res.data1 = d.concat(bits);
      }
      return res;
    }
    var ALPHANUM = function(s) {
      var res = {};
      for (var i = 0; i < s.length; i++) {
        res[s[i]] = i;
      }
      return res;
    }("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:");
    function encode_alphanum(str) {
      var len = str.length;
      var bits = [];
      for (var i = 0; i < len; i += 2) {
        var b = 6;
        var n = ALPHANUM[str[i]];
        if (str[i + 1]) {
          b = 11;
          n = n * 45 + ALPHANUM[str[i + 1]];
        }
        pushBits(bits, b, n);
      }
      var res = {};
      var d = [0, 0, 1, 0];
      pushBits(d, 13, len);
      res.data27 = d.concat(bits);
      if (len < 2048) {
        var d = [0, 0, 1, 0];
        pushBits(d, 11, len);
        res.data10 = d.concat(bits);
      }
      if (len < 512) {
        var d = [0, 0, 1, 0];
        pushBits(d, 9, len);
        res.data1 = d.concat(bits);
      }
      return res;
    }
    function encode_numeric(str) {
      var len = str.length;
      var bits = [];
      for (var i = 0; i < len; i += 3) {
        var s = str.substr(i, 3);
        var b = Math.ceil(s.length * 10 / 3);
        pushBits(bits, b, parseInt(s, 10));
      }
      var res = {};
      var d = [0, 0, 0, 1];
      pushBits(d, 14, len);
      res.data27 = d.concat(bits);
      if (len < 4096) {
        var d = [0, 0, 0, 1];
        pushBits(d, 12, len);
        res.data10 = d.concat(bits);
      }
      if (len < 1024) {
        var d = [0, 0, 0, 1];
        pushBits(d, 10, len);
        res.data1 = d.concat(bits);
      }
      return res;
    }
    function encode_url(str) {
      var slash = str.indexOf("/", 8) + 1 || str.length;
      var res = encode(str.slice(0, slash).toUpperCase(), false);
      if (slash >= str.length) {
        return res;
      }
      var path_res = encode(str.slice(slash), false);
      res.data27 = res.data27.concat(path_res.data27);
      if (res.data10 && path_res.data10) {
        res.data10 = res.data10.concat(path_res.data10);
      }
      if (res.data1 && path_res.data1) {
        res.data1 = res.data1.concat(path_res.data1);
      }
      return res;
    }
    function encode(data, parse_url) {
      var str;
      var t = typeof data;
      if (t == "string" || t == "number") {
        str = "" + data;
        data = new Buffer(str);
      } else if (Buffer.isBuffer(data)) {
        str = data.toString();
      } else if (Array.isArray(data)) {
        data = new Buffer(data);
        str = data.toString();
      } else {
        throw new Error("Bad data");
      }
      if (/^[0-9]+$/.test(str)) {
        if (data.length > 7089) {
          throw new Error("Too much data");
        }
        return encode_numeric(str);
      }
      if (/^[0-9A-Z \$%\*\+\.\/\:\-]+$/.test(str)) {
        if (data.length > 4296) {
          throw new Error("Too much data");
        }
        return encode_alphanum(str);
      }
      if (parse_url && /^https?:/i.test(str)) {
        return encode_url(str);
      }
      if (data.length > 2953) {
        throw new Error("Too much data");
      }
      return encode_8bit(data);
    }
    module2.exports = encode;
  }
});

// node_modules/qr-image/lib/errorcode.js
var require_errorcode2 = __commonJS({
  "node_modules/qr-image/lib/errorcode.js"(exports, module2) {
    "use strict";
    var GF256_BASE = 285;
    var EXP_TABLE = [1];
    var LOG_TABLE = [];
    for (i = 1; i < 256; i++) {
      n = EXP_TABLE[i - 1] << 1;
      if (n > 255)
        n = n ^ GF256_BASE;
      EXP_TABLE[i] = n;
    }
    var n;
    var i;
    for (i = 0; i < 255; i++) {
      LOG_TABLE[EXP_TABLE[i]] = i;
    }
    var i;
    function exp(k) {
      while (k < 0)
        k += 255;
      while (k > 255)
        k -= 255;
      return EXP_TABLE[k];
    }
    function log(k) {
      if (k < 1 || k > 255) {
        throw Error("Bad log(" + k + ")");
      }
      return LOG_TABLE[k];
    }
    var POLYNOMIALS = [
      [0],
      [0, 0],
      [0, 25, 1]
    ];
    function generatorPolynomial(num) {
      if (POLYNOMIALS[num]) {
        return POLYNOMIALS[num];
      }
      var prev = generatorPolynomial(num - 1);
      var res = [];
      res[0] = prev[0];
      for (var i2 = 1; i2 <= num; i2++) {
        res[i2] = log(exp(prev[i2]) ^ exp(prev[i2 - 1] + num - 1));
      }
      POLYNOMIALS[num] = res;
      return res;
    }
    module2.exports = function calculate_ec(msg, ec_len) {
      msg = [].slice.call(msg);
      var poly = generatorPolynomial(ec_len);
      for (var i2 = 0; i2 < ec_len; i2++)
        msg.push(0);
      while (msg.length > ec_len) {
        if (!msg[0]) {
          msg.shift();
          continue;
        }
        var log_k = log(msg[0]);
        for (var i2 = 0; i2 <= ec_len; i2++) {
          msg[i2] = msg[i2] ^ exp(poly[i2] + log_k);
        }
        msg.shift();
      }
      return new Buffer(msg);
    };
  }
});

// node_modules/qr-image/lib/matrix.js
var require_matrix2 = __commonJS({
  "node_modules/qr-image/lib/matrix.js"(exports, module2) {
    "use strict";
    function init(version) {
      var N = version * 4 + 17;
      var matrix = [];
      var zeros = new Buffer(N);
      zeros.fill(0);
      zeros = [].slice.call(zeros);
      for (var i = 0; i < N; i++) {
        matrix[i] = zeros.slice();
      }
      return matrix;
    }
    function fillFinders(matrix) {
      var N = matrix.length;
      for (var i = -3; i <= 3; i++) {
        for (var j = -3; j <= 3; j++) {
          var max = Math.max(i, j);
          var min = Math.min(i, j);
          var pixel = max == 2 && min >= -2 || min == -2 && max <= 2 ? 128 : 129;
          matrix[3 + i][3 + j] = pixel;
          matrix[3 + i][N - 4 + j] = pixel;
          matrix[N - 4 + i][3 + j] = pixel;
        }
      }
      for (var i = 0; i < 8; i++) {
        matrix[7][i] = matrix[i][7] = matrix[7][N - i - 1] = matrix[i][N - 8] = matrix[N - 8][i] = matrix[N - 1 - i][7] = 128;
      }
    }
    function fillAlignAndTiming(matrix) {
      var N = matrix.length;
      if (N > 21) {
        var len = N - 13;
        var delta = Math.round(len / Math.ceil(len / 28));
        if (delta % 2)
          delta++;
        var res = [];
        for (var p = len + 6; p > 10; p -= delta) {
          res.unshift(p);
        }
        res.unshift(6);
        for (var i = 0; i < res.length; i++) {
          for (var j = 0; j < res.length; j++) {
            var x = res[i], y = res[j];
            if (matrix[x][y])
              continue;
            for (var r = -2; r <= 2; r++) {
              for (var c = -2; c <= 2; c++) {
                var max = Math.max(r, c);
                var min = Math.min(r, c);
                var pixel = max == 1 && min >= -1 || min == -1 && max <= 1 ? 128 : 129;
                matrix[x + r][y + c] = pixel;
              }
            }
          }
        }
      }
      for (var i = 8; i < N - 8; i++) {
        matrix[6][i] = matrix[i][6] = i % 2 ? 128 : 129;
      }
    }
    function fillStub(matrix) {
      var N = matrix.length;
      for (var i = 0; i < 8; i++) {
        if (i != 6) {
          matrix[8][i] = matrix[i][8] = 128;
        }
        matrix[8][N - 1 - i] = 128;
        matrix[N - 1 - i][8] = 128;
      }
      matrix[8][8] = 128;
      matrix[N - 8][8] = 129;
      if (N < 45)
        return;
      for (var i = N - 11; i < N - 8; i++) {
        for (var j = 0; j < 6; j++) {
          matrix[i][j] = matrix[j][i] = 128;
        }
      }
    }
    var fillReserved = function() {
      var FORMATS = Array(32);
      var VERSIONS = Array(40);
      var gf15 = 1335;
      var gf18 = 7973;
      var formats_mask = 21522;
      for (var format = 0; format < 32; format++) {
        var res = format << 10;
        for (var i = 5; i > 0; i--) {
          if (res >>> 9 + i) {
            res = res ^ gf15 << i - 1;
          }
        }
        FORMATS[format] = (res | format << 10) ^ formats_mask;
      }
      for (var version = 7; version <= 40; version++) {
        var res = version << 12;
        for (var i = 6; i > 0; i--) {
          if (res >>> 11 + i) {
            res = res ^ gf18 << i - 1;
          }
        }
        VERSIONS[version] = res | version << 12;
      }
      var EC_LEVELS = { L: 1, M: 0, Q: 3, H: 2 };
      return function fillReserved2(matrix, ec_level, mask) {
        var N = matrix.length;
        var format2 = FORMATS[EC_LEVELS[ec_level] << 3 | mask];
        function F(k) {
          return format2 >> k & 1 ? 129 : 128;
        }
        ;
        for (var i2 = 0; i2 < 8; i2++) {
          matrix[8][N - 1 - i2] = F(i2);
          if (i2 < 6)
            matrix[i2][8] = F(i2);
        }
        for (var i2 = 8; i2 < 15; i2++) {
          matrix[N - 15 + i2][8] = F(i2);
          if (i2 > 8)
            matrix[8][14 - i2] = F(i2);
        }
        matrix[7][8] = F(6);
        matrix[8][8] = F(7);
        matrix[8][7] = F(8);
        var version2 = VERSIONS[(N - 17) / 4];
        if (!version2)
          return;
        function V(k) {
          return version2 >> k & 1 ? 129 : 128;
        }
        ;
        for (var i2 = 0; i2 < 6; i2++) {
          for (var j = 0; j < 3; j++) {
            matrix[N - 11 + j][i2] = matrix[i2][N - 11 + j] = V(i2 * 3 + j);
          }
        }
      };
    }();
    var fillData = function() {
      var MASK_FUNCTIONS = [
        function(i, j) {
          return (i + j) % 2 == 0;
        },
        function(i, j) {
          return i % 2 == 0;
        },
        function(i, j) {
          return j % 3 == 0;
        },
        function(i, j) {
          return (i + j) % 3 == 0;
        },
        function(i, j) {
          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
        },
        function(i, j) {
          return i * j % 2 + i * j % 3 == 0;
        },
        function(i, j) {
          return (i * j % 2 + i * j % 3) % 2 == 0;
        },
        function(i, j) {
          return (i * j % 3 + (i + j) % 2) % 2 == 0;
        }
      ];
      return function fillData2(matrix, data, mask) {
        var N = matrix.length;
        var row, col, dir = -1;
        row = col = N - 1;
        var mask_fn = MASK_FUNCTIONS[mask];
        var len = data.blocks[data.blocks.length - 1].length;
        for (var i = 0; i < len; i++) {
          for (var b = 0; b < data.blocks.length; b++) {
            if (data.blocks[b].length <= i)
              continue;
            put(data.blocks[b][i]);
          }
        }
        len = data.ec_len;
        for (var i = 0; i < len; i++) {
          for (var b = 0; b < data.ec.length; b++) {
            put(data.ec[b][i]);
          }
        }
        if (col > -1) {
          do {
            matrix[row][col] = mask_fn(row, col) ? 1 : 0;
          } while (next());
        }
        function put(byte) {
          for (var mask2 = 128; mask2; mask2 = mask2 >> 1) {
            var pixel = !!(mask2 & byte);
            if (mask_fn(row, col))
              pixel = !pixel;
            matrix[row][col] = pixel ? 1 : 0;
            next();
          }
        }
        function next() {
          do {
            if (col % 2 ^ col < 6) {
              if (dir < 0 && row == 0 || dir > 0 && row == N - 1) {
                col--;
                dir = -dir;
              } else {
                col++;
                row += dir;
              }
            } else {
              col--;
            }
            if (col == 6) {
              col--;
            }
            if (col < 0) {
              return false;
            }
          } while (matrix[row][col] & 240);
          return true;
        }
      };
    }();
    function calculatePenalty(matrix) {
      var N = matrix.length;
      var penalty = 0;
      for (var i = 0; i < N; i++) {
        var pixel = matrix[i][0] & 1;
        var len = 1;
        for (var j = 1; j < N; j++) {
          var p = matrix[i][j] & 1;
          if (p == pixel) {
            len++;
            continue;
          }
          if (len >= 5) {
            penalty += len - 2;
          }
          pixel = p;
          len = 1;
        }
        if (len >= 5) {
          penalty += len - 2;
        }
      }
      for (var j = 0; j < N; j++) {
        var pixel = matrix[0][j] & 1;
        var len = 1;
        for (var i = 1; i < N; i++) {
          var p = matrix[i][j] & 1;
          if (p == pixel) {
            len++;
            continue;
          }
          if (len >= 5) {
            penalty += len - 2;
          }
          pixel = p;
          len = 1;
        }
        if (len >= 5) {
          penalty += len - 2;
        }
      }
      for (var i = 0; i < N - 1; i++) {
        for (var j = 0; j < N - 1; j++) {
          var s = matrix[i][j] + matrix[i][j + 1] + matrix[i + 1][j] + matrix[i + 1][j + 1] & 7;
          if (s == 0 || s == 4) {
            penalty += 3;
          }
        }
      }
      function I(k) {
        return matrix[i][j + k] & 1;
      }
      ;
      function J(k) {
        return matrix[i + k][j] & 1;
      }
      ;
      for (var i = 0; i < N; i++) {
        for (var j = 0; j < N; j++) {
          if (j < N - 6 && I(0) && !I(1) && I(2) && I(3) && I(4) && !I(5) && I(6)) {
            if (j >= 4 && !(I(-4) || I(-3) || I(-2) || I(-1))) {
              penalty += 40;
            }
            if (j < N - 10 && !(I(7) || I(8) || I(9) || I(10))) {
              penalty += 40;
            }
          }
          if (i < N - 6 && J(0) && !J(1) && J(2) && J(3) && J(4) && !J(5) && J(6)) {
            if (i >= 4 && !(J(-4) || J(-3) || J(-2) || J(-1))) {
              penalty += 40;
            }
            if (i < N - 10 && !(J(7) || J(8) || J(9) || J(10))) {
              penalty += 40;
            }
          }
        }
      }
      var numDark = 0;
      for (var i = 0; i < N; i++) {
        for (var j = 0; j < N; j++) {
          if (matrix[i][j] & 1)
            numDark++;
        }
      }
      penalty += 10 * Math.floor(Math.abs(10 - 20 * numDark / (N * N)));
      return penalty;
    }
    function getMatrix(data) {
      var matrix = init(data.version);
      fillFinders(matrix);
      fillAlignAndTiming(matrix);
      fillStub(matrix);
      var penalty = Infinity;
      var bestMask = 0;
      for (var mask = 0; mask < 8; mask++) {
        fillData(matrix, data, mask);
        fillReserved(matrix, data.ec_level, mask);
        var p = calculatePenalty(matrix);
        if (p < penalty) {
          penalty = p;
          bestMask = mask;
        }
      }
      fillData(matrix, data, bestMask);
      fillReserved(matrix, data.ec_level, bestMask);
      return matrix.map(function(row) {
        return row.map(function(cell) {
          return cell & 1;
        });
      });
    }
    module2.exports = {
      getMatrix,
      init,
      fillFinders,
      fillAlignAndTiming,
      fillStub,
      fillReserved,
      fillData,
      calculatePenalty
    };
  }
});

// node_modules/qr-image/lib/qr-base.js
var require_qr_base2 = __commonJS({
  "node_modules/qr-image/lib/qr-base.js"(exports, module2) {
    "use strict";
    var encode = require_encode2();
    var calculateEC = require_errorcode2();
    var matrix = require_matrix2();
    function _deepCopy(obj) {
      return JSON.parse(JSON.stringify(obj));
    }
    var EC_LEVELS = ["L", "M", "Q", "H"];
    var versions = [
      [],
      [26, 7, 1, 10, 1, 13, 1, 17, 1],
      [44, 10, 1, 16, 1, 22, 1, 28, 1],
      [70, 15, 1, 26, 1, 36, 2, 44, 2],
      [100, 20, 1, 36, 2, 52, 2, 64, 4],
      [134, 26, 1, 48, 2, 72, 4, 88, 4],
      [172, 36, 2, 64, 4, 96, 4, 112, 4],
      [196, 40, 2, 72, 4, 108, 6, 130, 5],
      [242, 48, 2, 88, 4, 132, 6, 156, 6],
      [292, 60, 2, 110, 5, 160, 8, 192, 8],
      [346, 72, 4, 130, 5, 192, 8, 224, 8],
      [404, 80, 4, 150, 5, 224, 8, 264, 11],
      [466, 96, 4, 176, 8, 260, 10, 308, 11],
      [532, 104, 4, 198, 9, 288, 12, 352, 16],
      [581, 120, 4, 216, 9, 320, 16, 384, 16],
      [655, 132, 6, 240, 10, 360, 12, 432, 18],
      [733, 144, 6, 280, 10, 408, 17, 480, 16],
      [815, 168, 6, 308, 11, 448, 16, 532, 19],
      [901, 180, 6, 338, 13, 504, 18, 588, 21],
      [991, 196, 7, 364, 14, 546, 21, 650, 25],
      [1085, 224, 8, 416, 16, 600, 20, 700, 25],
      [1156, 224, 8, 442, 17, 644, 23, 750, 25],
      [1258, 252, 9, 476, 17, 690, 23, 816, 34],
      [1364, 270, 9, 504, 18, 750, 25, 900, 30],
      [1474, 300, 10, 560, 20, 810, 27, 960, 32],
      [1588, 312, 12, 588, 21, 870, 29, 1050, 35],
      [1706, 336, 12, 644, 23, 952, 34, 1110, 37],
      [1828, 360, 12, 700, 25, 1020, 34, 1200, 40],
      [1921, 390, 13, 728, 26, 1050, 35, 1260, 42],
      [2051, 420, 14, 784, 28, 1140, 38, 1350, 45],
      [2185, 450, 15, 812, 29, 1200, 40, 1440, 48],
      [2323, 480, 16, 868, 31, 1290, 43, 1530, 51],
      [2465, 510, 17, 924, 33, 1350, 45, 1620, 54],
      [2611, 540, 18, 980, 35, 1440, 48, 1710, 57],
      [2761, 570, 19, 1036, 37, 1530, 51, 1800, 60],
      [2876, 570, 19, 1064, 38, 1590, 53, 1890, 63],
      [3034, 600, 20, 1120, 40, 1680, 56, 1980, 66],
      [3196, 630, 21, 1204, 43, 1770, 59, 2100, 70],
      [3362, 660, 22, 1260, 45, 1860, 62, 2220, 74],
      [3532, 720, 24, 1316, 47, 1950, 65, 2310, 77],
      [3706, 750, 25, 1372, 49, 2040, 68, 2430, 81]
    ];
    versions = versions.map(function(v, index) {
      if (!index)
        return {};
      var res = {};
      for (var i = 1; i < 8; i += 2) {
        var length = v[0] - v[i];
        var num_template = v[i + 1];
        var ec_level = EC_LEVELS[i / 2 | 0];
        var level = {
          version: index,
          ec_level,
          data_len: length,
          ec_len: v[i] / num_template,
          blocks: [],
          ec: []
        };
        for (var k = num_template, n = length; k > 0; k--) {
          var block = n / k | 0;
          level.blocks.push(block);
          n -= block;
        }
        res[ec_level] = level;
      }
      return res;
    });
    function getTemplate(message, ec_level) {
      var i = 1;
      var len;
      if (message.data1) {
        len = Math.ceil(message.data1.length / 8);
      } else {
        i = 10;
      }
      for (; i < 10; i++) {
        var version = versions[i][ec_level];
        if (version.data_len >= len) {
          return _deepCopy(version);
        }
      }
      if (message.data10) {
        len = Math.ceil(message.data10.length / 8);
      } else {
        i = 27;
      }
      for (; i < 27; i++) {
        var version = versions[i][ec_level];
        if (version.data_len >= len) {
          return _deepCopy(version);
        }
      }
      len = Math.ceil(message.data27.length / 8);
      for (; i < 41; i++) {
        var version = versions[i][ec_level];
        if (version.data_len >= len) {
          return _deepCopy(version);
        }
      }
      throw new Error("Too much data");
    }
    function fillTemplate(message, template) {
      var blocks = new Buffer(template.data_len);
      blocks.fill(0);
      if (template.version < 10) {
        message = message.data1;
      } else if (template.version < 27) {
        message = message.data10;
      } else {
        message = message.data27;
      }
      var len = message.length;
      for (var i = 0; i < len; i += 8) {
        var b = 0;
        for (var j = 0; j < 8; j++) {
          b = b << 1 | (message[i + j] ? 1 : 0);
        }
        blocks[i / 8] = b;
      }
      var pad = 236;
      for (var i = Math.ceil((len + 4) / 8); i < blocks.length; i++) {
        blocks[i] = pad;
        pad = pad == 236 ? 17 : 236;
      }
      var offset = 0;
      template.blocks = template.blocks.map(function(n) {
        var b2 = blocks.slice(offset, offset + n);
        offset += n;
        template.ec.push(calculateEC(b2, template.ec_len));
        return b2;
      });
      return template;
    }
    function QR(text, ec_level, parse_url) {
      ec_level = EC_LEVELS.indexOf(ec_level) > -1 ? ec_level : "M";
      var message = encode(text, parse_url);
      var data = fillTemplate(message, getTemplate(message, ec_level));
      return matrix.getMatrix(data);
    }
    module2.exports = {
      QR,
      getTemplate,
      fillTemplate
    };
  }
});

// node_modules/qr-image/lib/crc32buffer.js
var require_crc32buffer2 = __commonJS({
  "node_modules/qr-image/lib/crc32buffer.js"(exports, module2) {
    "use strict";
    var crc_table = [];
    for (n = 0; n < 256; n++) {
      c = crc_table[n] = new Buffer(4);
      c.writeUInt32BE(n, 0);
      for (k = 0; k < 8; k++) {
        b0 = c[0] & 1;
        b1 = c[1] & 1;
        b2 = c[2] & 1;
        b3 = c[3] & 1;
        c[0] = c[0] >> 1 ^ (b3 ? 237 : 0);
        c[1] = c[1] >> 1 ^ (b3 ? 184 : 0) ^ (b0 ? 128 : 0);
        c[2] = c[2] >> 1 ^ (b3 ? 131 : 0) ^ (b1 ? 128 : 0);
        c[3] = c[3] >> 1 ^ (b3 ? 32 : 0) ^ (b2 ? 128 : 0);
      }
    }
    var c;
    var b0;
    var b1;
    var b2;
    var b3;
    var k;
    var n;
    function update(c2, buf) {
      var l = buf.length;
      for (var n2 = 0; n2 < l; n2++) {
        var e = crc_table[c2[3] ^ buf[n2]];
        c2[3] = e[3] ^ c2[2];
        c2[2] = e[2] ^ c2[1];
        c2[1] = e[1] ^ c2[0];
        c2[0] = e[0];
      }
    }
    function crc32() {
      var l = arguments.length;
      var c2 = new Buffer(4);
      c2.fill(255);
      for (var i = 0; i < l; i++) {
        update(c2, new Buffer(arguments[i]));
      }
      c2[0] = c2[0] ^ 255;
      c2[1] = c2[1] ^ 255;
      c2[2] = c2[2] ^ 255;
      c2[3] = c2[3] ^ 255;
      return c2.readUInt32BE(0);
    }
    module2.exports = crc32;
  }
});

// node_modules/qr-image/lib/crc32.js
var require_crc322 = __commonJS({
  "node_modules/qr-image/lib/crc32.js"(exports, module2) {
    "use strict";
    (function() {
      if (process.arch === "arm") {
        module2.exports = require_crc32buffer2();
        return;
      }
      var crc_table = [];
      (function() {
        for (var n = 0; n < 256; n++) {
          var c = n;
          for (var k = 0; k < 8; k++) {
            if (c & 1) {
              c = 3988292384 ^ c >>> 1;
            } else {
              c = c >>> 1;
            }
          }
          crc_table[n] = c >>> 0;
        }
      })();
      function update(c, buf) {
        var l = buf.length;
        for (var n = 0; n < l; n++) {
          c = crc_table[(c ^ buf[n]) & 255] ^ c >>> 8;
        }
        return c;
      }
      function crc32() {
        var l = arguments.length;
        var c = -1;
        for (var i = 0; i < l; i++) {
          c = update(c, new Buffer(arguments[i]));
        }
        c = (c ^ -1) >>> 0;
        return c;
      }
      module2.exports = crc32;
    })();
  }
});

// node_modules/qr-image/lib/png.js
var require_png2 = __commonJS({
  "node_modules/qr-image/lib/png.js"(exports, module2) {
    "use strict";
    var zlib = require("zlib");
    var crc32 = require_crc322();
    var PNG_HEAD = new Buffer([137, 80, 78, 71, 13, 10, 26, 10]);
    var PNG_IHDR = new Buffer([0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0]);
    var PNG_IDAT = new Buffer([0, 0, 0, 0, 73, 68, 65, 84]);
    var PNG_IEND = new Buffer([0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130]);
    function png(bitmap2, stream) {
      stream.push(PNG_HEAD);
      var IHDR = Buffer.concat([PNG_IHDR]);
      IHDR.writeUInt32BE(bitmap2.size, 8);
      IHDR.writeUInt32BE(bitmap2.size, 12);
      IHDR.writeUInt32BE(crc32(IHDR.slice(4, -4)), 21);
      stream.push(IHDR);
      var IDAT = Buffer.concat([
        PNG_IDAT,
        zlib.deflateSync(bitmap2.data, { level: 9 }),
        new Buffer(4)
      ]);
      IDAT.writeUInt32BE(IDAT.length - 12, 0);
      IDAT.writeUInt32BE(crc32(IDAT.slice(4, -4)), IDAT.length - 4);
      stream.push(IDAT);
      stream.push(PNG_IEND);
      stream.push(null);
    }
    function bitmap(matrix, size, margin) {
      var N = matrix.length;
      var X = (N + 2 * margin) * size;
      var data = new Buffer((X + 1) * X);
      data.fill(255);
      for (var i = 0; i < X; i++) {
        data[i * (X + 1)] = 0;
      }
      for (var i = 0; i < N; i++) {
        for (var j = 0; j < N; j++) {
          if (matrix[i][j]) {
            var offset = ((margin + i) * (X + 1) + (margin + j)) * size + 1;
            data.fill(0, offset, offset + size);
            for (var c = 1; c < size; c++) {
              data.copy(data, offset + c * (X + 1), offset, offset + size);
            }
          }
        }
      }
      return {
        data,
        size: X
      };
    }
    module2.exports = {
      bitmap,
      png
    };
  }
});

// node_modules/qr-image/lib/vector.js
var require_vector2 = __commonJS({
  "node_modules/qr-image/lib/vector.js"(exports, module2) {
    "use strict";
    function matrix2path(matrix) {
      var N = matrix.length;
      var filled = [];
      for (var row = -1; row <= N; row++) {
        filled[row] = [];
      }
      var path = [];
      for (var row = 0; row < N; row++) {
        for (var col = 0; col < N; col++) {
          if (filled[row][col])
            continue;
          filled[row][col] = 1;
          if (isDark(row, col)) {
            if (!isDark(row - 1, col)) {
              path.push(plot(row, col, "right"));
            }
          } else {
            if (isDark(row, col - 1)) {
              path.push(plot(row, col, "down"));
            }
          }
        }
      }
      return path;
      function isDark(row2, col2) {
        if (row2 < 0 || col2 < 0 || row2 >= N || col2 >= N)
          return false;
        return !!matrix[row2][col2];
      }
      function plot(row0, col0, dir) {
        filled[row0][col0] = 1;
        var res = [];
        res.push(["M", col0, row0]);
        var row2 = row0;
        var col2 = col0;
        var len = 0;
        do {
          switch (dir) {
            case "right":
              filled[row2][col2] = 1;
              if (isDark(row2, col2)) {
                filled[row2 - 1][col2] = 1;
                if (isDark(row2 - 1, col2)) {
                  res.push(["h", len]);
                  len = 0;
                  dir = "up";
                } else {
                  len++;
                  col2++;
                }
              } else {
                res.push(["h", len]);
                len = 0;
                dir = "down";
              }
              break;
            case "left":
              filled[row2 - 1][col2 - 1] = 1;
              if (isDark(row2 - 1, col2 - 1)) {
                filled[row2][col2 - 1] = 1;
                if (isDark(row2, col2 - 1)) {
                  res.push(["h", -len]);
                  len = 0;
                  dir = "down";
                } else {
                  len++;
                  col2--;
                }
              } else {
                res.push(["h", -len]);
                len = 0;
                dir = "up";
              }
              break;
            case "down":
              filled[row2][col2 - 1] = 1;
              if (isDark(row2, col2 - 1)) {
                filled[row2][col2] = 1;
                if (isDark(row2, col2)) {
                  res.push(["v", len]);
                  len = 0;
                  dir = "right";
                } else {
                  len++;
                  row2++;
                }
              } else {
                res.push(["v", len]);
                len = 0;
                dir = "left";
              }
              break;
            case "up":
              filled[row2 - 1][col2] = 1;
              if (isDark(row2 - 1, col2)) {
                filled[row2 - 1][col2 - 1] = 1;
                if (isDark(row2 - 1, col2 - 1)) {
                  res.push(["v", -len]);
                  len = 0;
                  dir = "left";
                } else {
                  len++;
                  row2--;
                }
              } else {
                res.push(["v", -len]);
                len = 0;
                dir = "right";
              }
              break;
          }
        } while (row2 != row0 || col2 != col0);
        return res;
      }
    }
    function pushSVGPath(matrix, stream, margin) {
      matrix2path(matrix).forEach(function(subpath) {
        var res = "";
        for (var k = 0; k < subpath.length; k++) {
          var item = subpath[k];
          switch (item[0]) {
            case "M":
              res += "M" + (item[1] + margin) + " " + (item[2] + margin);
              break;
            default:
              res += item.join("");
          }
        }
        res += "z";
        stream.push(res);
      });
    }
    function SVG_object(matrix, margin) {
      var stream = [];
      pushSVGPath(matrix, stream, margin);
      var result = {
        size: matrix.length + 2 * margin,
        path: stream.filter(Boolean).join("")
      };
      return result;
    }
    function SVG(matrix, stream, margin, size) {
      var X = matrix.length + 2 * margin;
      stream.push('<svg xmlns="http://www.w3.org/2000/svg" ');
      if (size > 0) {
        var XY = X * size;
        stream.push('width="' + XY + '" height="' + XY + '" ');
      }
      stream.push('viewBox="0 0 ' + X + " " + X + '">');
      stream.push('<path d="');
      pushSVGPath(matrix, stream, margin);
      stream.push('"/></svg>');
      stream.push(null);
    }
    function EPS(matrix, stream, margin) {
      var N = matrix.length;
      var scale = 9;
      var X = (N + 2 * margin) * scale;
      stream.push([
        "%!PS-Adobe-3.0 EPSF-3.0",
        "%%BoundingBox: 0 0 " + X + " " + X,
        "/h { 0 rlineto } bind def",
        "/v { 0 exch neg rlineto } bind def",
        "/M { neg " + (N + margin) + " add moveto } bind def",
        "/z { closepath } bind def",
        scale + " " + scale + " scale",
        ""
      ].join("\n"));
      matrix2path(matrix).forEach(function(subpath) {
        var res = "";
        for (var k = 0; k < subpath.length; k++) {
          var item = subpath[k];
          switch (item[0]) {
            case "M":
              res += item[1] + margin + " " + item[2] + " M ";
              break;
            default:
              res += item[1] + " " + item[0] + " ";
          }
        }
        res += "z\n";
        stream.push(res);
      });
      stream.push("fill\n%%EOF\n");
      stream.push(null);
    }
    function PDF(matrix, stream, margin) {
      var N = matrix.length;
      var scale = 9;
      var X = (N + 2 * margin) * scale;
      var data = [
        "%PDF-1.0\n\n",
        "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj\n",
        "2 0 obj << /Type /Pages /Count 1 /Kids [ 3 0 R ] >> endobj\n"
      ];
      data.push("3 0 obj << /Type /Page /Parent 2 0 R /Resources <<>> /Contents 4 0 R /MediaBox [ 0 0 " + X + " " + X + " ] >> endobj\n");
      var path = scale + " 0 0 " + scale + " 0 0 cm\n";
      path += matrix2path(matrix).map(function(subpath) {
        var res = "";
        var x, y;
        for (var k = 0; k < subpath.length; k++) {
          var item = subpath[k];
          switch (item[0]) {
            case "M":
              x = item[1] + margin;
              y = N - item[2] + margin;
              res += x + " " + y + " m ";
              break;
            case "h":
              x += item[1];
              res += x + " " + y + " l ";
              break;
            case "v":
              y -= item[1];
              res += x + " " + y + " l ";
              break;
          }
        }
        res += "h";
        return res;
      }).join("\n");
      path += "\nf\n";
      data.push("4 0 obj << /Length " + path.length + " >> stream\n" + path + "endstream\nendobj\n");
      var xref = "xref\n0 5\n0000000000 65535 f \n";
      for (var i = 1, l = data[0].length; i < 5; i++) {
        xref += ("0000000000" + l).substr(-10) + " 00000 n \n";
        l += data[i].length;
      }
      data.push(xref, "trailer << /Root 1 0 R /Size 5 >>\n", "startxref\n" + l + "\n%%EOF\n");
      stream.push(data.join(""));
      stream.push(null);
    }
    module2.exports = {
      svg: SVG,
      eps: EPS,
      pdf: PDF,
      svg_object: SVG_object
    };
  }
});

// node_modules/qr-image/lib/qr.js
var require_qr2 = __commonJS({
  "node_modules/qr-image/lib/qr.js"(exports, module2) {
    "use strict";
    var Readable2 = require("stream").Readable;
    var QR = require_qr_base2().QR;
    var png = require_png2();
    var vector = require_vector2();
    var fn_noop = function() {
    };
    var BITMAP_OPTIONS = {
      parse_url: false,
      ec_level: "M",
      size: 5,
      margin: 4,
      customize: null
    };
    var VECTOR_OPTIONS = {
      parse_url: false,
      ec_level: "M",
      margin: 1,
      size: 0
    };
    function get_options(options, force_type) {
      if (typeof options === "string") {
        options = { "ec_level": options };
      } else {
        options = options || {};
      }
      var _options = {
        type: String(force_type || options.type || "png").toLowerCase()
      };
      var defaults = _options.type == "png" ? BITMAP_OPTIONS : VECTOR_OPTIONS;
      for (var k in defaults) {
        _options[k] = k in options ? options[k] : defaults[k];
      }
      return _options;
    }
    function qr_image(text, options) {
      options = get_options(options);
      var matrix = QR(text, options.ec_level, options.parse_url);
      var stream = new Readable2();
      stream._read = fn_noop;
      switch (options.type) {
        case "svg":
        case "pdf":
        case "eps":
          process.nextTick(function() {
            vector[options.type](matrix, stream, options.margin, options.size);
          });
          break;
        case "svgpath":
          process.nextTick(function() {
            var obj = vector.svg_object(matrix, options.margin, options.size);
            stream.push(obj.path);
            stream.push(null);
          });
          break;
        case "png":
        default:
          process.nextTick(function() {
            var bitmap = png.bitmap(matrix, options.size, options.margin);
            if (options.customize) {
              options.customize(bitmap);
            }
            png.png(bitmap, stream);
          });
      }
      return stream;
    }
    function qr_image_sync(text, options) {
      options = get_options(options);
      var matrix = QR(text, options.ec_level, options.parse_url);
      var stream = [];
      var result;
      switch (options.type) {
        case "svg":
        case "pdf":
        case "eps":
          vector[options.type](matrix, stream, options.margin, options.size);
          result = stream.filter(Boolean).join("");
          break;
        case "png":
        default:
          var bitmap = png.bitmap(matrix, options.size, options.margin);
          if (options.customize) {
            options.customize(bitmap);
          }
          png.png(bitmap, stream);
          result = Buffer.concat(stream.filter(Boolean));
      }
      return result;
    }
    function svg_object(text, options) {
      options = get_options(options, "svg");
      var matrix = QR(text, options.ec_level);
      return vector.svg_object(matrix, options.margin);
    }
    module2.exports = {
      matrix: QR,
      image: qr_image,
      imageSync: qr_image_sync,
      svgObject: svg_object
    };
  }
});

// src/index.ts
__export(exports, {
  BLOKDOTS_SOCKET_IO_SERVER_DEFAULT_PORT: () => BLOKDOTS_SOCKET_IO_SERVER_DEFAULT_PORT,
  Counter: () => Counter_default,
  Encoder: () => Encoder_default,
  FigmaIntegration: () => FigmaIntegration_default,
  HapticLabs: () => HapticLabs_default,
  InvertableSensor: () => InvertableSensor_default,
  Joystick: () => Joystick_default,
  Metronome: () => Metronome_default,
  OLED_HEIGHT: () => OLED_HEIGHT,
  OLED_WIDTH: () => OLED_WIDTH,
  Oled: () => OLED_default,
  SignalTower: () => SignalTower_default,
  SocketIOIntegration: () => SocketIOIntegration_default,
  Timer: () => Timer_default,
  addTextToBuffer: () => addTextToBuffer,
  getBlokdotsSocketIOServer: () => BlokdotsSocketIOServer_default,
  getBlokdotsSocketIOServerAddress: () => getBlokdotsSocketIOServerAddress,
  utils: () => utils_default
});

// src/BlokdotsSocketIOServer/BlokdotsSocketIOServer.ts
var import_socket = __toModule(require("socket.io"));
var import_ws = __toModule(require("ws"));
var import_os = __toModule(require("os"));

// src/BlokdotsSocketIOServer/setupHttpServer.ts
var import_stream = __toModule(require("stream"));
var import_http = __toModule(require("http"));

// src/BlokdotsSocketIOServer/webserver/favicon.ico
var favicon_default = "data:image/x-icon;base64,AAABAAIAICAAAAEAIAAoEQAAJgAAABAQAAABACAAaAQAAE4RAAAoAAAAIAAAAEAAAAABACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4AAABSAAAAeQAAAIgAAAB+AAAAWwAAACcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAACgAAAA7QAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA9gAAALMAAABEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAABxAAAA8QAAAP8AAADtAAAArQAAAHwAAABpAAAAdgAAAKIAAADhAAAA/wAAAP0AAACQAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAhwAAAP8AAAD5AAAAiQAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUAAABxAAAA6wAAAP8AAACrAAAACwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGcAAAD/AAAA7QAAAE0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyAAAA2AAAAP8AAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiAAAA6gAAAPoAAABSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAA6gAAAPsAAABDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIkAAAD/AAAAnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAA/wAAALQAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAAAA2wAAAPgAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIAAADiAAAA9gAAACcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC0AAAD9AAAAxwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKEAAAD/AAAAWwAAAAAAAAAAAAAAMQAAAF0AAABcAAAAXAAAAFwAAABcAAAAXAAAAFwAAABZAAAAjgAAAP8AAADHAAAAWQAAAFwAAABcAAAAXAAAAFwAAABcAAAAXAAAAF0AAAAhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdgAAAP8AAAB+AAAAAAAAAAAAAACNAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAF8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABpAAAA/wAAAIgAAAAAAAAAAAAAAIkAAAD/AAAAwAAAAJMAAACVAAAAlQAAAJUAAACVAAAAlAAAALIAAAD/AAAA3wAAAJMAAACVAAAAlQAAAJUAAACVAAAAkwAAANMAAAD/AAAAXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHsAAAD/AAAAegAAAAAAAAAAAAAAiQAAAP8AAABhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJgAAAPoAAADRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkQAAAP8AAABcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArAAAAP8AAABSAAAAAAAAAAAAAACJAAAA/wAAAGcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAzwAAAPwAAAA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAACVAAAA/wAAAFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0AAADsAAAA7wAAAB0AAAAAAAAAAAAAAIkAAAD/AAAAZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB2AAAA/wAAALMAAAACAAAAAAAAAAAAAAAAAAAAAAAAAJUAAAD/AAAAXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAigAAAP8AAACiAAAAAAAAAAAAAAAAAAAAiQAAAP8AAABnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUAAADaAAAA/wAAAHIAAAAAAAAAAAAAAAAAAAAAAAAAlQAAAP8AAABcAAAAAAAAAAAAAAAAAAAAAAAAAEwAAAD2AAAA8gAAAC8AAAAAAAAAAAAAAAAAAACJAAAA/wAAAGcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEoAAAD4AAAA+wAAAHIAAAACAAAAAAAAAAAAAACVAAAA/wAAAFwAAAAAAAAAAAAAAAAAAABTAAAA7QAAAP8AAABwAAAAAAAAAAAAAAAAAAAAAAAAAIkAAAD/AAAAZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGMAAAD4AAAA/wAAALEAAABBAAAABwAAAJMAAAD/AAAAWAAAAAMAAAAyAAAAmwAAAP0AAAD/AAAAhwAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAiQAAAP8AAABnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEsAAADYAAAA/wAAAP8AAADRAAAA3wAAAP8AAADHAAAAxwAAAPsAAAD/AAAA6QAAAGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACJAAAA/wAAAGcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUAAAB1AAAAzQAAAPsAAAD/AAAA/wAAAP8AAAD/AAAA2QAAAIkAAAAjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIkAAAD/AAAAZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAKwAAALIAAAD/AAAAjgAAADIAAAANAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiQAAAP8AAABnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkgAAAP8AAABXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACJAAAA/wAAAGcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACVAAAA/wAAAFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIkAAAD/AAAAZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJUAAAD/AAAAXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiQAAAP8AAABnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlQAAAP8AAABcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACJAAAA/wAAAGcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACVAAAA/wAAAFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIkAAAD/AAAAYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJEAAAD/AAAAXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiQAAAP8AAACkAAAAZgAAAGcAAABnAAAAZwAAAGcAAABnAAAAZwAAAGcAAABnAAAAZwAAAGcAAABnAAAAZwAAAGcAAABmAAAAwAAAAP8AAABcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACPAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEkAAACKAAAAiQAAAIkAAACJAAAAiQAAAIkAAACJAAAAiQAAAIkAAACJAAAAiQAAAIkAAACJAAAAiQAAAIkAAACJAAAAiQAAAIkAAACKAAAAMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAEAAAACAAAAABACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFQAAABwAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+AAAAsQAAAMsAAADKAAAAxgAAAHkAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABXAAAA2QAAAGEAAAAYAAAADwAAADUAAACvAAAArwAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdAAAA1gAAADcAAAAAAAAAAAAAAAAAAAAAAAAAAgAAALEAAAB5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbwAAAJcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyAAAAyQAAAAgAAAAQAAAAjAAAAJ0AAACdAAAAnAAAANgAAADGAAAAnAAAAJ0AAACbAAAAVwAAAAAAAAAAAAAADQAAAMsAAAAdAAAAHwAAAN8AAABsAAAAZQAAAGQAAAC4AAAAswAAAGMAAABkAAAApwAAAKAAAAAAAAAAAAAAABUAAADNAAAAFQAAAB8AAADIAAAAAgAAAAAAAAAAAAAASgAAAL0AAAAAAAAAAAAAAGAAAACdAAAAAAAAAAAAAABhAAAAtAAAAAEAAAAfAAAAyQAAAAsAAAAAAAAAAAAAAAUAAAC0AAAAjQAAAAIAAABeAAAAmQAAAAAAAAA4AAAA2gAAAD0AAAAAAAAAHwAAAMkAAAALAAAAAAAAAAAAAAAAAAAAFwAAALQAAAC6AAAAsgAAAMYAAACYAAAA1AAAAFcAAAAAAAAAAAAAAB8AAADJAAAACwAAAAAAAAAAAAAAAAAAAAAAAAADAAAATgAAALcAAADXAAAAcQAAAB0AAAAAAAAAAAAAAAAAAAAfAAAAyQAAAAsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfAAAAmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwAAAMkAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZAAAAJ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8AAADMAAAAFgAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAG0AAACeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaAAAA2QAAAMsAAADJAAAAyQAAAMkAAADJAAAAyQAAAMgAAADYAAAAjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAABoAAAAfAAAAHwAAAB8AAAAfAAAAHwAAAB8AAAAfAAAAHgAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";

// src/BlokdotsSocketIOServer/webserver/index.html
var webserver_default = "data:text/html;charset=utf-8;base64,PCFET0NUWVBFIGh0bWw+CjxodG1sPgogIDxoZWFkPgogICAgPG1ldGEgY2hhcnNldD0idXRmLTgiIC8+CiAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCIgLz4KICAgIDx0aXRsZT5ibG9rZG90czwvdGl0bGU+CiAgICA8bGluayByZWw9Imljb24iIGhyZWY9Ii9mYXZpY29uLmljbyIgLz4KCiAgICA8bGluayByZWw9InN0eWxlc2hlZXQiIHR5cGU9InRleHQvY3NzIiBocmVmPSJzdHlsZS5jc3MiIC8+CgogICAgPHNjcmlwdCBzcmM9InNvY2tldC1pby5taW4uanMiPjwvc2NyaXB0PgogIDwvaGVhZD4KCiAgPGJvZHk+CiAgICA8ZGl2IGlkPSJ3cmFwcGVyIj4KICAgICAgPGgxPmJsb2tkb3RzPC9oMT4KCiAgICAgIDxwPgogICAgICAgIFRoaXMgcGFnZSBpcyBnZW5lcmF0ZWQgYnkgdGhlIGludGVybmFsIGJsb2tkb3RzIHNlcnZlci4gWW91IGNhbiBjb25uZWN0CiAgICAgICAgdG8gdGhlIGludGVncmF0aW9ucyBieSBjb25uZWN0aW5nIHdpdGggYSBTb2NrZXQuSU8gY2xpZW50IHRvIHRoaXMKICAgICAgICBhZGRyZXNzLgogICAgICA8L3A+CiAgICAgIDxwPgogICAgICAgIEZvciBtb3JlIGluZm9ybWF0aW9uLCBjaGVjayBvdXQgdGhlCiAgICAgICAgPGEgaHJlZj0iaHR0cHM6Ly9ibG9rZG90cy5jb20vZG9jdW1lbnRhdGlvbi9jb21wb25lbnRzL2ludGVncmF0aW9ucy9zb2NrZXQtaW8tc2VydmVyIgogICAgICAgICAgPmJsb2tkb3RzIGRvY3VtZW50YXRpb248L2EKICAgICAgICA+LgogICAgICA8L3A+CgogICAgICA8YnIgLz4KCiAgICAgIDxoMT5Db25uZWN0aW9uIFN0YXR1czwvaDE+CgogICAgICA8cD4KICAgICAgICBTZXJ2ZXIKICAgICAgICA8c3BhbiBpZD0ic2VydmVyQWRkcmVzcyI+PC9zcGFuPgogICAgICAgIDxzcGFuIGlkPSJjb25uZWN0aW9uU3RhdHVzIj5ub3QgY29ubmVjdGVkPC9zcGFuPgogICAgICA8L3A+CgogICAgICA8aDE+QWN0aXZlIEludGVncmF0aW9uczwvaDE+CiAgICAgIDxkaXYgaWQ9ImFjdGl2ZUludGVncmF0aW9ucyI+PC9kaXY+CgogICAgICA8c2VjdGlvbiBpZD0idGVzdE1lc3NhZ2VzIj4KICAgICAgICA8aDE+VGVzdCBNZXNzYWdlczwvaDE+CgogICAgICAgIDxwPgogICAgICAgICAgWW91IGNhbiBzZW5kIGFuZCByZWNlaXZlIHRlc3QgbWVzc2FnZXMgYmVsb3cuIFBsZWFzZSBtYWtlIHN1cmUgdGhhdCBhCiAgICAgICAgICBoYXJkd2FyZSBib2FyZCAobGlrZSBBcmR1aW5vKSBpcyBjb25uZWN0ZWQgYW5kIG1hcmtlZCBhcyAiUmVhZHkiIGluCiAgICAgICAgICBibG9rZG90cy4KICAgICAgICA8L3A+CgogICAgICAgIDxkaXYgaWQ9InRlc3RJbnB1dCI+CiAgICAgICAgICA8bGFiZWwKICAgICAgICAgICAgPjxzcGFuPk1lc3NhZ2U6PC9zcGFuPgogICAgICAgICAgICA8aW5wdXQKICAgICAgICAgICAgICB0eXBlPSJ0ZXh0IgogICAgICAgICAgICAgIGlkPSJ0ZXN0TWVzc2FnZSIKICAgICAgICAgICAgICBuYW1lPSJ0ZXN0TWVzc2FnZSIKICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0ibWVzc2FnZSIKICAgICAgICAgICAgLz4KICAgICAgICAgIDwvbGFiZWw+CiAgICAgICAgICA8bGFiZWwKICAgICAgICAgICAgPjxzcGFuPlZhbHVlOjwvc3Bhbj4KICAgICAgICAgICAgPGlucHV0CiAgICAgICAgICAgICAgdHlwZT0idGV4dCIKICAgICAgICAgICAgICBpZD0idGVzdFZhbHVlIgogICAgICAgICAgICAgIG5hbWU9InRlc3RWYWx1ZSIKICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0idmFsdWUiCiAgICAgICAgICAgIC8+CiAgICAgICAgICA8L2xhYmVsPgogICAgICAgICAgPGJ1dHRvbj5TZW5kPC9idXR0b24+CiAgICAgICAgPC9kaXY+CgogICAgICAgIDx1bCBpZD0ic29ja2V0LWhpc3RvcnkiPgogICAgICAgICAgPCEtLSBtZXNzYWdlcyBnbyBoZXJlIC0tPgogICAgICAgIDwvdWw+CiAgICAgIDwvc2VjdGlvbj4KICAgIDwvZGl2PgoKICAgIDxzY3JpcHQgdHlwZT0idGV4dC9qYXZhc2NyaXB0Ij4KICAgICAgY29uc3QgZ2VuZXJhbFNvY2tldCA9IGlvKHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pOwoKICAgICAgZ2VuZXJhbFNvY2tldC5vbigiaW5mbyIsIChkYXRhKSA9PiB7CiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7CiAgICAgIH0pOwoKICAgICAgY29uc3Qgc29ja2V0ID0gaW8od2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7CiAgICAgIGNvbnN0IGludGVncmF0aW9uID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN1YnN0cmluZygxKTsKCiAgICAgIGxldCBzb2NrZXRDb250YWluZXIgPSBudWxsOwoKICAgICAgc29ja2V0Lm9uKCJjb25uZWN0IiwgKCkgPT4gewogICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIiNjb25uZWN0aW9uU3RhdHVzIikudGV4dENvbnRlbnQgPQogICAgICAgICAgImlzIGNvbm5lY3RlZCI7CiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigiI2Nvbm5lY3Rpb25TdGF0dXMiKS5jbGFzc0xpc3QuYWRkKCJvayIpOwogICAgICB9KTsKCiAgICAgIHNvY2tldC5vbigiZGlzY29ubmVjdCIsICgpID0+IHsKICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCIjY29ubmVjdGlvblN0YXR1cyIpLnRleHRDb250ZW50ID0KICAgICAgICAgICJub3QgY29ubmVjdGVkIjsKICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCIjY29ubmVjdGlvblN0YXR1cyIpLmNsYXNzTGlzdC5yZW1vdmUoIm9rIik7CiAgICAgIH0pOwoKICAgICAgc29ja2V0Lm9uKCJpbmZvIiwgKHZhbCkgPT4gewogICAgICAgIGlmICh2YWwuYWN0aXZlSW50ZWdyYXRpb25zKSB7CiAgICAgICAgICBjb25zdCBpbnRlZ3JhdGlvbnNIdG1sID0gdmFsLmFjdGl2ZUludGVncmF0aW9ucwogICAgICAgICAgICAubWFwKChpbnRlZ3JhdGlvbk5hbWUpID0+IHsKICAgICAgICAgICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPSJjb2RlICR7CiAgICAgICAgICAgICAgICBpbnRlZ3JhdGlvbk5hbWUgPT09IGludGVncmF0aW9uID8gIm9rIiA6ICIiCiAgICAgICAgICAgICAgfSI+JHtpbnRlZ3JhdGlvbk5hbWV9PC9zcGFuPmA7CiAgICAgICAgICAgIH0pCiAgICAgICAgICAgIC5qb2luKCIgIik7CiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCIjYWN0aXZlSW50ZWdyYXRpb25zIikuaW5uZXJIVE1MID0KICAgICAgICAgICAgaW50ZWdyYXRpb25zSHRtbDsKICAgICAgICB9CiAgICAgIH0pOwoKICAgICAgaWYgKGludGVncmF0aW9uID09PSAiIikgewogICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIiN0ZXN0TWVzc2FnZXMiKS5pbm5lckhUTUwgPQogICAgICAgICAgIlBsZWFzZSBvcGVuIHRoaXMgcGFnZSB3aXRoIHRoZSBzcGVjaWZpYyBVUkwgZm9yIGFuIGFjdGl2ZSBpbnRlZ3JhdGlvbi4iOwogICAgICB9CgogICAgICBpZiAoaW50ZWdyYXRpb24gPT09ICJibG9rZG90cyIpIHsKICAgICAgICBzb2NrZXQub24oImJsb2tkb3RzIiwgKHZhbCkgPT4gewogICAgICAgICAgYWRkTWVzc2FnZVRvTGlzdCh2YWwpOwogICAgICAgIH0pOwogICAgICB9CgogICAgICBpZiAoaW50ZWdyYXRpb24gPT09ICJwcm90b3BpZSIpIHsKICAgICAgICBzb2NrZXQub24oInBwTWVzc2FnZSIsICh2YWwpID0+IHsKICAgICAgICAgIGNvbnN0IHBwVmFsID0gewogICAgICAgICAgICBtc2c6IHZhbC5tZXNzYWdlSWQsCiAgICAgICAgICAgIHZhbDogdmFsLnZhbHVlLAogICAgICAgICAgfTsKICAgICAgICAgIGFkZE1lc3NhZ2VUb0xpc3QocHBWYWwpOwogICAgICAgIH0pOwogICAgICB9CgogICAgICBjb25zdCBhZGRNZXNzYWdlVG9MaXN0ID0gKHZhbCwgZGlyID0gImluIikgPT4gewogICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgibGkiKTsKCiAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoRGF0ZS5ub3coKSkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7CiAgICAgICAgY29uc3Qgc2lnbmFsRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInNwYW4iKTsKICAgICAgICBzaWduYWxEYXRlLmNsYXNzTGlzdC5hZGQoIm1lc3NhZ2VUaW1lIik7CiAgICAgICAgc2lnbmFsRGF0ZS50ZXh0Q29udGVudCA9IHRpbWVzdGFtcDsKICAgICAgICBsaS5hcHBlbmRDaGlsZChzaWduYWxEYXRlKTsKCiAgICAgICAgY29uc3QgYXJyb3dJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImltZyIpOwogICAgICAgIGFycm93SW1hZ2UuY2xhc3NMaXN0LmFkZCgibWVzc2FnZUFycm93Iik7CiAgICAgICAgYXJyb3dJbWFnZS5zcmMgPSAibG9nLWFycm93LSIgKyBkaXIgKyAiLnN2ZyI7CiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYXJyb3dJbWFnZSk7CgogICAgICAgIGNvbnN0IG1lc3NhZ2VET00gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCJzcGFuIik7CiAgICAgICAgbWVzc2FnZURPTS5jbGFzc0xpc3QuYWRkKCJtZXNzYWdlQ29udGVudERpc3BsYXkiKTsKICAgICAgICBtZXNzYWdlRE9NLnRleHRDb250ZW50ID0gdmFsLm1zZzsKICAgICAgICBsaS5hcHBlbmRDaGlsZChtZXNzYWdlRE9NKTsKCiAgICAgICAgaWYgKHZhbC52YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwudmFsICE9PSBudWxsICYmIHZhbC52YWwgIT09ICIiKSB7CiAgICAgICAgICBjb25zdCB2YWx1ZURPTSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInNwYW4iKTsKICAgICAgICAgIHZhbHVlRE9NLmNsYXNzTGlzdC5hZGQoIm1lc3NhZ2VWYWx1ZURpc3BsYXkiKTsKICAgICAgICAgIGlmICghaXNOYU4odmFsLnZhbCkpIHsKICAgICAgICAgICAgdmFsdWVET00uY2xhc3NMaXN0LmFkZCgibWVzc2FnZVZhbHVlRGlzcGxheS1pcy1udW1iZXIiKTsKICAgICAgICAgIH0KICAgICAgICAgIHZhbHVlRE9NLnRleHRDb250ZW50ID0gdmFsLnZhbDsKICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHZhbHVlRE9NKTsKICAgICAgICB9CgogICAgICAgIHNvY2tldENvbnRhaW5lci5wcmVwZW5kKGxpKTsKICAgICAgfTsKCiAgICAgIGNvbnN0IHNlbmRNZXNzYWdlID0gKCkgPT4gewogICAgICAgIGNvbnN0IG1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIiN0ZXN0TWVzc2FnZSIpLnZhbHVlOwogICAgICAgIGxldCB2YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCIjdGVzdFZhbHVlIikudmFsdWU7CgogICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB7CiAgICAgICAgICBtc2csCiAgICAgICAgICB2YWwsCiAgICAgICAgfTsKICAgICAgICBhZGRNZXNzYWdlVG9MaXN0KG1lc3NhZ2UsICJvdXQiKTsKCiAgICAgICAgaWYgKGludGVncmF0aW9uID09PSAiYmxva2RvdHMiKSB7CiAgICAgICAgICBzb2NrZXQuZW1pdCgiYmxva2RvdHMiLCBtZXNzYWdlKTsKICAgICAgICB9CiAgICAgICAgaWYgKGludGVncmF0aW9uID09PSAicHJvdG9waWUiKSB7CiAgICAgICAgICBzb2NrZXQuZW1pdCgicHBNZXNzYWdlIiwgeyBtZXNzYWdlSWQ6IG1zZywgdmFsdWU6IHZhbCB9KTsKICAgICAgICB9CiAgICAgIH07CgogICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCJET01Db250ZW50TG9hZGVkIiwgKCkgPT4gewogICAgICAgIHNvY2tldENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIiNzb2NrZXQtaGlzdG9yeSIpOwogICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIiNzZXJ2ZXJBZGRyZXNzIikudGV4dENvbnRlbnQgPQogICAgICAgICAgd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTsKCiAgICAgICAgaWYgKGludGVncmF0aW9uICE9PSAiIikgewogICAgICAgICAgZG9jdW1lbnQKICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoIiN0ZXN0SW5wdXQgYnV0dG9uIikKICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgc2VuZE1lc3NhZ2UpOwogICAgICAgIH0KICAgICAgfSk7CiAgICA8L3NjcmlwdD4KICA8L2JvZHk+CjwvaHRtbD4K";

// src/BlokdotsSocketIOServer/webserver/log-arrow-in.svg
var log_arrow_in_default = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgNS43NDIwNUw0LjcyODIyIDEwLjQ4NDFMNS42ODc1NSA5LjUyNDc3TDIuNTQ3NjEgNi4zOTcwNUwxMS4xNjg0IDYuMzk3MDVWNS4wODcwNUwyLjU0NzYxIDUuMDg3MDVMNS42ODc1NSAxLjk1OTMzTDQuNzI4MjMgMUwwIDUuNzQyMDVaIiBmaWxsPSIjQThBOEE4Ii8+Cjwvc3ZnPgo=";

// src/BlokdotsSocketIOServer/webserver/log-arrow-out.svg
var log_arrow_out_default = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuODExOTcgMi4wNjYyNkwzLjExNTQ3IDIuMDU2NDlMMy4xMTU0NyAzLjQxMzE4TDcuNTQ3MzggMy40MDQ1NEwxLjQ1MTU0IDkuNTAwMzhMMi4zNzc4NSAxMC40MjY3TDguNDczNjkgNC4zMzA4NUw4LjQ2NTA1IDguNzYyNzZIOS44MjE3NEw5LjgxMTk3IDIuMDY2MjZaIiBmaWxsPSIjMUFCQzlDIi8+Cjwvc3ZnPgo=";

// src/BlokdotsSocketIOServer/webserver/socket-io.min.js
var socket_io_min_default = "data:text/javascript;charset=utf-8;base64,LyohCiAqIFNvY2tldC5JTyB2NC4yLjAKICogKGMpIDIwMTQtMjAyMSBHdWlsbGVybW8gUmF1Y2gKICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLgogKi8KIShmdW5jdGlvbiAodCwgZSkgewogICJvYmplY3QiID09IHR5cGVvZiBleHBvcnRzICYmICJvYmplY3QiID09IHR5cGVvZiBtb2R1bGUKICAgID8gKG1vZHVsZS5leHBvcnRzID0gZSgpKQogICAgOiAiZnVuY3Rpb24iID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZAogICAgPyBkZWZpbmUoW10sIGUpCiAgICA6ICJvYmplY3QiID09IHR5cGVvZiBleHBvcnRzCiAgICA/IChleHBvcnRzLmlvID0gZSgpKQogICAgOiAodC5pbyA9IGUoKSk7Cn0pKHNlbGYsIGZ1bmN0aW9uICgpIHsKICByZXR1cm4gKGZ1bmN0aW9uICh0KSB7CiAgICB2YXIgZSA9IHt9OwogICAgZnVuY3Rpb24gbihyKSB7CiAgICAgIGlmIChlW3JdKSByZXR1cm4gZVtyXS5leHBvcnRzOwogICAgICB2YXIgbyA9IChlW3JdID0geyBpOiByLCBsOiAhMSwgZXhwb3J0czoge30gfSk7CiAgICAgIHJldHVybiB0W3JdLmNhbGwoby5leHBvcnRzLCBvLCBvLmV4cG9ydHMsIG4pLCAoby5sID0gITApLCBvLmV4cG9ydHM7CiAgICB9CiAgICByZXR1cm4gKAogICAgICAobi5tID0gdCksCiAgICAgIChuLmMgPSBlKSwKICAgICAgKG4uZCA9IGZ1bmN0aW9uICh0LCBlLCByKSB7CiAgICAgICAgbi5vKHQsIGUpIHx8IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBlLCB7IGVudW1lcmFibGU6ICEwLCBnZXQ6IHIgfSk7CiAgICAgIH0pLAogICAgICAobi5yID0gZnVuY3Rpb24gKHQpIHsKICAgICAgICAidW5kZWZpbmVkIiAhPSB0eXBlb2YgU3ltYm9sICYmCiAgICAgICAgICBTeW1ib2wudG9TdHJpbmdUYWcgJiYKICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICJNb2R1bGUiIH0pLAogICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogITAgfSk7CiAgICAgIH0pLAogICAgICAobi50ID0gZnVuY3Rpb24gKHQsIGUpIHsKICAgICAgICBpZiAoKDEgJiBlICYmICh0ID0gbih0KSksIDggJiBlKSkgcmV0dXJuIHQ7CiAgICAgICAgaWYgKDQgJiBlICYmICJvYmplY3QiID09IHR5cGVvZiB0ICYmIHQgJiYgdC5fX2VzTW9kdWxlKSByZXR1cm4gdDsKICAgICAgICB2YXIgciA9IE9iamVjdC5jcmVhdGUobnVsbCk7CiAgICAgICAgaWYgKAogICAgICAgICAgKG4ucihyKSwKICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLCAiZGVmYXVsdCIsIHsgZW51bWVyYWJsZTogITAsIHZhbHVlOiB0IH0pLAogICAgICAgICAgMiAmIGUgJiYgInN0cmluZyIgIT0gdHlwZW9mIHQpCiAgICAgICAgKQogICAgICAgICAgZm9yICh2YXIgbyBpbiB0KQogICAgICAgICAgICBuLmQoCiAgICAgICAgICAgICAgciwKICAgICAgICAgICAgICBvLAogICAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7CiAgICAgICAgICAgICAgICByZXR1cm4gdFtlXTsKICAgICAgICAgICAgICB9LmJpbmQobnVsbCwgbykKICAgICAgICAgICAgKTsKICAgICAgICByZXR1cm4gcjsKICAgICAgfSksCiAgICAgIChuLm4gPSBmdW5jdGlvbiAodCkgewogICAgICAgIHZhciBlID0KICAgICAgICAgIHQgJiYgdC5fX2VzTW9kdWxlCiAgICAgICAgICAgID8gZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgcmV0dXJuIHQuZGVmYXVsdDsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIDogZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgcmV0dXJuIHQ7CiAgICAgICAgICAgICAgfTsKICAgICAgICByZXR1cm4gbi5kKGUsICJhIiwgZSksIGU7CiAgICAgIH0pLAogICAgICAobi5vID0gZnVuY3Rpb24gKHQsIGUpIHsKICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsIGUpOwogICAgICB9KSwKICAgICAgKG4ucCA9ICIiKSwKICAgICAgbigobi5zID0gMTgpKQogICAgKTsKICB9KShbCiAgICBmdW5jdGlvbiAodCwgZSkgewogICAgICB0LmV4cG9ydHMgPQogICAgICAgICJ1bmRlZmluZWQiICE9IHR5cGVvZiBzZWxmCiAgICAgICAgICA/IHNlbGYKICAgICAgICAgIDogInVuZGVmaW5lZCIgIT0gdHlwZW9mIHdpbmRvdwogICAgICAgICAgPyB3aW5kb3cKICAgICAgICAgIDogRnVuY3Rpb24oInJldHVybiB0aGlzIikoKTsKICAgIH0sCiAgICBmdW5jdGlvbiAodCwgZSwgbikgewogICAgICB2YXIgciA9IG4oMjQpLAogICAgICAgIG8gPSBuKDI1KSwKICAgICAgICBpID0gU3RyaW5nLmZyb21DaGFyQ29kZSgzMCk7CiAgICAgIHQuZXhwb3J0cyA9IHsKICAgICAgICBwcm90b2NvbDogNCwKICAgICAgICBlbmNvZGVQYWNrZXQ6IHIsCiAgICAgICAgZW5jb2RlUGF5bG9hZDogZnVuY3Rpb24gKHQsIGUpIHsKICAgICAgICAgIHZhciBuID0gdC5sZW5ndGgsCiAgICAgICAgICAgIG8gPSBuZXcgQXJyYXkobiksCiAgICAgICAgICAgIHMgPSAwOwogICAgICAgICAgdC5mb3JFYWNoKGZ1bmN0aW9uICh0LCBjKSB7CiAgICAgICAgICAgIHIodCwgITEsIGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgKG9bY10gPSB0KSwgKytzID09PSBuICYmIGUoby5qb2luKGkpKTsKICAgICAgICAgICAgfSk7CiAgICAgICAgICB9KTsKICAgICAgICB9LAogICAgICAgIGRlY29kZVBhY2tldDogbywKICAgICAgICBkZWNvZGVQYXlsb2FkOiBmdW5jdGlvbiAodCwgZSkgewogICAgICAgICAgZm9yICh2YXIgbiA9IHQuc3BsaXQoaSksIHIgPSBbXSwgcyA9IDA7IHMgPCBuLmxlbmd0aDsgcysrKSB7CiAgICAgICAgICAgIHZhciBjID0gbyhuW3NdLCBlKTsKICAgICAgICAgICAgaWYgKChyLnB1c2goYyksICJlcnJvciIgPT09IGMudHlwZSkpIGJyZWFrOwogICAgICAgICAgfQogICAgICAgICAgcmV0dXJuIHI7CiAgICAgICAgfSwKICAgICAgfTsKICAgIH0sCiAgICBmdW5jdGlvbiAodCwgZSwgbikgewogICAgICBmdW5jdGlvbiByKHQpIHsKICAgICAgICBpZiAodCkKICAgICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgZm9yICh2YXIgZSBpbiByLnByb3RvdHlwZSkgdFtlXSA9IHIucHJvdG90eXBlW2VdOwogICAgICAgICAgICByZXR1cm4gdDsKICAgICAgICAgIH0pKHQpOwogICAgICB9CiAgICAgICh0LmV4cG9ydHMgPSByKSwKICAgICAgICAoci5wcm90b3R5cGUub24gPSByLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0KICAgICAgICAgIGZ1bmN0aW9uICh0LCBlKSB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgKHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fSksCiAgICAgICAgICAgICAgKHRoaXMuX2NhbGxiYWNrc1siJCIgKyB0XSA9IHRoaXMuX2NhbGxiYWNrc1siJCIgKyB0XSB8fCBbXSkucHVzaCgKICAgICAgICAgICAgICAgIGUKICAgICAgICAgICAgICApLAogICAgICAgICAgICAgIHRoaXMKICAgICAgICAgICAgKTsKICAgICAgICAgIH0pLAogICAgICAgIChyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gKHQsIGUpIHsKICAgICAgICAgIGZ1bmN0aW9uIG4oKSB7CiAgICAgICAgICAgIHRoaXMub2ZmKHQsIG4pLCBlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgICB9CiAgICAgICAgICByZXR1cm4gKG4uZm4gPSBlKSwgdGhpcy5vbih0LCBuKSwgdGhpczsKICAgICAgICB9KSwKICAgICAgICAoci5wcm90b3R5cGUub2ZmID0KICAgICAgICAgIHIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID0KICAgICAgICAgIHIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9CiAgICAgICAgICByLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0KICAgICAgICAgICAgZnVuY3Rpb24gKHQsIGUpIHsKICAgICAgICAgICAgICBpZiAoCiAgICAgICAgICAgICAgICAoKHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fSksCiAgICAgICAgICAgICAgICAwID09IGFyZ3VtZW50cy5sZW5ndGgpCiAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLl9jYWxsYmFja3MgPSB7fSksIHRoaXM7CiAgICAgICAgICAgICAgdmFyIG4sCiAgICAgICAgICAgICAgICByID0gdGhpcy5fY2FsbGJhY2tzWyIkIiArIHRdOwogICAgICAgICAgICAgIGlmICghcikgcmV0dXJuIHRoaXM7CiAgICAgICAgICAgICAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkKICAgICAgICAgICAgICAgIHJldHVybiBkZWxldGUgdGhpcy5fY2FsbGJhY2tzWyIkIiArIHRdLCB0aGlzOwogICAgICAgICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgci5sZW5ndGg7IG8rKykKICAgICAgICAgICAgICAgIGlmICgobiA9IHJbb10pID09PSBlIHx8IG4uZm4gPT09IGUpIHsKICAgICAgICAgICAgICAgICAgci5zcGxpY2UobywgMSk7CiAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIHJldHVybiAwID09PSByLmxlbmd0aCAmJiBkZWxldGUgdGhpcy5fY2FsbGJhY2tzWyIkIiArIHRdLCB0aGlzOwogICAgICAgICAgICB9KSwKICAgICAgICAoci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307CiAgICAgICAgICBmb3IgKAogICAgICAgICAgICB2YXIgZSA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSksCiAgICAgICAgICAgICAgbiA9IHRoaXMuX2NhbGxiYWNrc1siJCIgKyB0XSwKICAgICAgICAgICAgICByID0gMTsKICAgICAgICAgICAgciA8IGFyZ3VtZW50cy5sZW5ndGg7CiAgICAgICAgICAgIHIrKwogICAgICAgICAgKQogICAgICAgICAgICBlW3IgLSAxXSA9IGFyZ3VtZW50c1tyXTsKICAgICAgICAgIGlmIChuKSB7CiAgICAgICAgICAgIHIgPSAwOwogICAgICAgICAgICBmb3IgKHZhciBvID0gKG4gPSBuLnNsaWNlKDApKS5sZW5ndGg7IHIgPCBvOyArK3IpCiAgICAgICAgICAgICAgbltyXS5hcHBseSh0aGlzLCBlKTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiB0aGlzOwogICAgICAgIH0pLAogICAgICAgIChyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiAodCkgewogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgKHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fSksCiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrc1siJCIgKyB0XSB8fCBbXQogICAgICAgICAgKTsKICAgICAgICB9KSwKICAgICAgICAoci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24gKHQpIHsKICAgICAgICAgIHJldHVybiAhIXRoaXMubGlzdGVuZXJzKHQpLmxlbmd0aDsKICAgICAgICB9KTsKICAgIH0sCiAgICBmdW5jdGlvbiAodCwgZSwgbikgewogICAgICB2YXIgciA9IG4oMCk7CiAgICAgIHQuZXhwb3J0cy5waWNrID0gZnVuY3Rpb24gKHQpIHsKICAgICAgICBmb3IgKAogICAgICAgICAgdmFyIGUgPSBhcmd1bWVudHMubGVuZ3RoLCBuID0gbmV3IEFycmF5KGUgPiAxID8gZSAtIDEgOiAwKSwgciA9IDE7CiAgICAgICAgICByIDwgZTsKICAgICAgICAgIHIrKwogICAgICAgICkKICAgICAgICAgIG5bciAtIDFdID0gYXJndW1lbnRzW3JdOwogICAgICAgIHJldHVybiBuLnJlZHVjZShmdW5jdGlvbiAoZSwgbikgewogICAgICAgICAgcmV0dXJuIHQuaGFzT3duUHJvcGVydHkobikgJiYgKGVbbl0gPSB0W25dKSwgZTsKICAgICAgICB9LCB7fSk7CiAgICAgIH07CiAgICAgIHZhciBvID0gc2V0VGltZW91dCwKICAgICAgICBpID0gY2xlYXJUaW1lb3V0OwogICAgICB0LmV4cG9ydHMuaW5zdGFsbFRpbWVyRnVuY3Rpb25zID0gZnVuY3Rpb24gKHQsIGUpIHsKICAgICAgICBlLnVzZU5hdGl2ZVRpbWVycwogICAgICAgICAgPyAoKHQuc2V0VGltZW91dEZuID0gby5iaW5kKHIpKSwgKHQuY2xlYXJUaW1lb3V0Rm4gPSBpLmJpbmQocikpKQogICAgICAgICAgOiAoKHQuc2V0VGltZW91dEZuID0gc2V0VGltZW91dC5iaW5kKHIpKSwKICAgICAgICAgICAgKHQuY2xlYXJUaW1lb3V0Rm4gPSBjbGVhclRpbWVvdXQuYmluZChyKSkpOwogICAgICB9OwogICAgfSwKICAgIGZ1bmN0aW9uICh0LCBlLCBuKSB7CiAgICAgIGZ1bmN0aW9uIHIodCkgewogICAgICAgIHJldHVybiAociA9CiAgICAgICAgICAiZnVuY3Rpb24iID09IHR5cGVvZiBTeW1ib2wgJiYgInN5bWJvbCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvcgogICAgICAgICAgICA/IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIHQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICA6IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICByZXR1cm4gdCAmJgogICAgICAgICAgICAgICAgICAiZnVuY3Rpb24iID09IHR5cGVvZiBTeW1ib2wgJiYKICAgICAgICAgICAgICAgICAgdC5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmCiAgICAgICAgICAgICAgICAgIHQgIT09IFN5bWJvbC5wcm90b3R5cGUKICAgICAgICAgICAgICAgICAgPyAic3ltYm9sIgogICAgICAgICAgICAgICAgICA6IHR5cGVvZiB0OwogICAgICAgICAgICAgIH0pKHQpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIG8odCwgZSkgewogICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgZS5sZW5ndGg7IG4rKykgewogICAgICAgICAgdmFyIHIgPSBlW25dOwogICAgICAgICAgKHIuZW51bWVyYWJsZSA9IHIuZW51bWVyYWJsZSB8fCAhMSksCiAgICAgICAgICAgIChyLmNvbmZpZ3VyYWJsZSA9ICEwKSwKICAgICAgICAgICAgInZhbHVlIiBpbiByICYmIChyLndyaXRhYmxlID0gITApLAogICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgci5rZXksIHIpOwogICAgICAgIH0KICAgICAgfQogICAgICBmdW5jdGlvbiBpKHQsIGUpIHsKICAgICAgICByZXR1cm4gKGkgPQogICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8CiAgICAgICAgICBmdW5jdGlvbiAodCwgZSkgewogICAgICAgICAgICByZXR1cm4gKHQuX19wcm90b19fID0gZSksIHQ7CiAgICAgICAgICB9KSh0LCBlKTsKICAgICAgfQogICAgICBmdW5jdGlvbiBzKHQpIHsKICAgICAgICB2YXIgZSA9IChmdW5jdGlvbiAoKSB7CiAgICAgICAgICBpZiAoInVuZGVmaW5lZCIgPT0gdHlwZW9mIFJlZmxlY3QgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gITE7CiAgICAgICAgICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuICExOwogICAgICAgICAgaWYgKCJmdW5jdGlvbiIgPT0gdHlwZW9mIFByb3h5KSByZXR1cm4gITA7CiAgICAgICAgICB0cnkgewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbCgKICAgICAgICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkKICAgICAgICAgICAgICApLAogICAgICAgICAgICAgICEwCiAgICAgICAgICAgICk7CiAgICAgICAgICB9IGNhdGNoICh0KSB7CiAgICAgICAgICAgIHJldHVybiAhMTsKICAgICAgICAgIH0KICAgICAgICB9KSgpOwogICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7CiAgICAgICAgICB2YXIgbiwKICAgICAgICAgICAgciA9IHUodCk7CiAgICAgICAgICBpZiAoZSkgewogICAgICAgICAgICB2YXIgbyA9IHUodGhpcykuY29uc3RydWN0b3I7CiAgICAgICAgICAgIG4gPSBSZWZsZWN0LmNvbnN0cnVjdChyLCBhcmd1bWVudHMsIG8pOwogICAgICAgICAgfSBlbHNlIG4gPSByLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgICByZXR1cm4gYyh0aGlzLCBuKTsKICAgICAgICB9OwogICAgICB9CiAgICAgIGZ1bmN0aW9uIGModCwgZSkgewogICAgICAgIGlmIChlICYmICgib2JqZWN0IiA9PT0gcihlKSB8fCAiZnVuY3Rpb24iID09IHR5cGVvZiBlKSkgcmV0dXJuIGU7CiAgICAgICAgaWYgKHZvaWQgMCAhPT0gZSkKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoCiAgICAgICAgICAgICJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZCIKICAgICAgICAgICk7CiAgICAgICAgcmV0dXJuIGEodCk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gYSh0KSB7CiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkKICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcigKICAgICAgICAgICAgInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZCIKICAgICAgICAgICk7CiAgICAgICAgcmV0dXJuIHQ7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gdSh0KSB7CiAgICAgICAgcmV0dXJuICh1ID0gT2JqZWN0LnNldFByb3RvdHlwZU9mCiAgICAgICAgICA/IE9iamVjdC5nZXRQcm90b3R5cGVPZgogICAgICAgICAgOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgIHJldHVybiB0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodCk7CiAgICAgICAgICAgIH0pKHQpOwogICAgICB9CiAgICAgIHZhciBmID0gbigxKSwKICAgICAgICBsID0gbigyKSwKICAgICAgICBwID0gbigzKS5pbnN0YWxsVGltZXJGdW5jdGlvbnMsCiAgICAgICAgaCA9IChmdW5jdGlvbiAodCkgewogICAgICAgICAgIShmdW5jdGlvbiAodCwgZSkgewogICAgICAgICAgICBpZiAoImZ1bmN0aW9uIiAhPSB0eXBlb2YgZSAmJiBudWxsICE9PSBlKQogICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoCiAgICAgICAgICAgICAgICAiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24iCiAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgKHQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShlICYmIGUucHJvdG90eXBlLCB7CiAgICAgICAgICAgICAgY29uc3RydWN0b3I6IHsgdmFsdWU6IHQsIHdyaXRhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9LAogICAgICAgICAgICB9KSksCiAgICAgICAgICAgICAgZSAmJiBpKHQsIGUpOwogICAgICAgICAgfSkodSwgdCk7CiAgICAgICAgICB2YXIgZSwKICAgICAgICAgICAgbiwKICAgICAgICAgICAgciwKICAgICAgICAgICAgYyA9IHModSk7CiAgICAgICAgICBmdW5jdGlvbiB1KHQpIHsKICAgICAgICAgICAgdmFyIGU7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgKGZ1bmN0aW9uICh0LCBlKSB7CiAgICAgICAgICAgICAgICBpZiAoISh0IGluc3RhbmNlb2YgZSkpCiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbiIpOwogICAgICAgICAgICAgIH0pKHRoaXMsIHUpLAogICAgICAgICAgICAgIChlID0gYy5jYWxsKHRoaXMpKSwKICAgICAgICAgICAgICBwKGEoZSksIHQpLAogICAgICAgICAgICAgIChlLm9wdHMgPSB0KSwKICAgICAgICAgICAgICAoZS5xdWVyeSA9IHQucXVlcnkpLAogICAgICAgICAgICAgIChlLnJlYWR5U3RhdGUgPSAiIiksCiAgICAgICAgICAgICAgKGUuc29ja2V0ID0gdC5zb2NrZXQpLAogICAgICAgICAgICAgIGUKICAgICAgICAgICAgKTsKICAgICAgICAgIH0KICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgIChlID0gdSksCiAgICAgICAgICAgIChuID0gWwogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogIm9uRXJyb3IiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh0LCBlKSB7CiAgICAgICAgICAgICAgICAgIHZhciBuID0gbmV3IEVycm9yKHQpOwogICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgIChuLnR5cGUgPSAiVHJhbnNwb3J0RXJyb3IiKSwKICAgICAgICAgICAgICAgICAgICAobi5kZXNjcmlwdGlvbiA9IGUpLAogICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgiZXJyb3IiLCBuKSwKICAgICAgICAgICAgICAgICAgICB0aGlzCiAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAib3BlbiIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICgiY2xvc2VkIiAhPT0gdGhpcy5yZWFkeVN0YXRlICYmICIiICE9PSB0aGlzLnJlYWR5U3RhdGUpIHx8CiAgICAgICAgICAgICAgICAgICAgICAoKHRoaXMucmVhZHlTdGF0ZSA9ICJvcGVuaW5nIiksIHRoaXMuZG9PcGVuKCkpLAogICAgICAgICAgICAgICAgICAgIHRoaXMKICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJjbG9zZSIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICgib3BlbmluZyIgIT09IHRoaXMucmVhZHlTdGF0ZSAmJgogICAgICAgICAgICAgICAgICAgICAgIm9wZW4iICE9PSB0aGlzLnJlYWR5U3RhdGUpIHx8CiAgICAgICAgICAgICAgICAgICAgICAodGhpcy5kb0Nsb3NlKCksIHRoaXMub25DbG9zZSgpKSwKICAgICAgICAgICAgICAgICAgICB0aGlzCiAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAic2VuZCIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgICAgIm9wZW4iID09PSB0aGlzLnJlYWR5U3RhdGUgJiYgdGhpcy53cml0ZSh0KTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJvbk9wZW4iLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgKHRoaXMucmVhZHlTdGF0ZSA9ICJvcGVuIiksCiAgICAgICAgICAgICAgICAgICAgKHRoaXMud3JpdGFibGUgPSAhMCksCiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCJvcGVuIik7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAib25EYXRhIiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgICB2YXIgZSA9IGYuZGVjb2RlUGFja2V0KHQsIHRoaXMuc29ja2V0LmJpbmFyeVR5cGUpOwogICAgICAgICAgICAgICAgICB0aGlzLm9uUGFja2V0KGUpOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogIm9uUGFja2V0IiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoInBhY2tldCIsIHQpOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogIm9uQ2xvc2UiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgKHRoaXMucmVhZHlTdGF0ZSA9ICJjbG9zZWQiKSwgdGhpcy5lbWl0KCJjbG9zZSIpOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICBdKSAmJiBvKGUucHJvdG90eXBlLCBuKSwKICAgICAgICAgICAgciAmJiBvKGUsIHIpLAogICAgICAgICAgICB1CiAgICAgICAgICApOwogICAgICAgIH0pKGwpOwogICAgICB0LmV4cG9ydHMgPSBoOwogICAgfSwKICAgIGZ1bmN0aW9uICh0LCBlKSB7CiAgICAgIChlLmVuY29kZSA9IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgdmFyIGUgPSAiIjsKICAgICAgICBmb3IgKHZhciBuIGluIHQpCiAgICAgICAgICB0Lmhhc093blByb3BlcnR5KG4pICYmCiAgICAgICAgICAgIChlLmxlbmd0aCAmJiAoZSArPSAiJiIpLAogICAgICAgICAgICAoZSArPSBlbmNvZGVVUklDb21wb25lbnQobikgKyAiPSIgKyBlbmNvZGVVUklDb21wb25lbnQodFtuXSkpKTsKICAgICAgICByZXR1cm4gZTsKICAgICAgfSksCiAgICAgICAgKGUuZGVjb2RlID0gZnVuY3Rpb24gKHQpIHsKICAgICAgICAgIGZvciAodmFyIGUgPSB7fSwgbiA9IHQuc3BsaXQoIiYiKSwgciA9IDAsIG8gPSBuLmxlbmd0aDsgciA8IG87IHIrKykgewogICAgICAgICAgICB2YXIgaSA9IG5bcl0uc3BsaXQoIj0iKTsKICAgICAgICAgICAgZVtkZWNvZGVVUklDb21wb25lbnQoaVswXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KGlbMV0pOwogICAgICAgICAgfQogICAgICAgICAgcmV0dXJuIGU7CiAgICAgICAgfSk7CiAgICB9LAogICAgZnVuY3Rpb24gKHQsIGUsIG4pIHsKICAgICAgZnVuY3Rpb24gcih0KSB7CiAgICAgICAgcmV0dXJuIChyID0KICAgICAgICAgICJmdW5jdGlvbiIgPT0gdHlwZW9mIFN5bWJvbCAmJiAic3ltYm9sIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yCiAgICAgICAgICAgID8gZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgdDsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIDogZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgIHJldHVybiB0ICYmCiAgICAgICAgICAgICAgICAgICJmdW5jdGlvbiIgPT0gdHlwZW9mIFN5bWJvbCAmJgogICAgICAgICAgICAgICAgICB0LmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYKICAgICAgICAgICAgICAgICAgdCAhPT0gU3ltYm9sLnByb3RvdHlwZQogICAgICAgICAgICAgICAgICA/ICJzeW1ib2wiCiAgICAgICAgICAgICAgICAgIDogdHlwZW9mIHQ7CiAgICAgICAgICAgICAgfSkodCk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gbyh0LCBlLCBuKSB7CiAgICAgICAgcmV0dXJuIChvID0KICAgICAgICAgICJ1bmRlZmluZWQiICE9IHR5cGVvZiBSZWZsZWN0ICYmIFJlZmxlY3QuZ2V0CiAgICAgICAgICAgID8gUmVmbGVjdC5nZXQKICAgICAgICAgICAgOiBmdW5jdGlvbiAodCwgZSwgbikgewogICAgICAgICAgICAgICAgdmFyIHIgPSAoZnVuY3Rpb24gKHQsIGUpIHsKICAgICAgICAgICAgICAgICAgZm9yICgKICAgICAgICAgICAgICAgICAgICA7CiAgICAgICAgICAgICAgICAgICAgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LCBlKSAmJgogICAgICAgICAgICAgICAgICAgIG51bGwgIT09ICh0ID0gYSh0KSk7CgogICAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgICAgICByZXR1cm4gdDsKICAgICAgICAgICAgICAgIH0pKHQsIGUpOwogICAgICAgICAgICAgICAgaWYgKHIpIHsKICAgICAgICAgICAgICAgICAgdmFyIG8gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsIGUpOwogICAgICAgICAgICAgICAgICByZXR1cm4gby5nZXQgPyBvLmdldC5jYWxsKG4pIDogby52YWx1ZTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICB9KSh0LCBlLCBuIHx8IHQpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIGkodCwgZSkgewogICAgICAgIHJldHVybiAoaSA9CiAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwKICAgICAgICAgIGZ1bmN0aW9uICh0LCBlKSB7CiAgICAgICAgICAgIHJldHVybiAodC5fX3Byb3RvX18gPSBlKSwgdDsKICAgICAgICAgIH0pKHQsIGUpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHModCkgewogICAgICAgIHZhciBlID0gKGZ1bmN0aW9uICgpIHsKICAgICAgICAgIGlmICgidW5kZWZpbmVkIiA9PSB0eXBlb2YgUmVmbGVjdCB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiAhMTsKICAgICAgICAgIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gITE7CiAgICAgICAgICBpZiAoImZ1bmN0aW9uIiA9PSB0eXBlb2YgUHJveHkpIHJldHVybiAhMDsKICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKAogICAgICAgICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KQogICAgICAgICAgICAgICksCiAgICAgICAgICAgICAgITAKICAgICAgICAgICAgKTsKICAgICAgICAgIH0gY2F0Y2ggKHQpIHsKICAgICAgICAgICAgcmV0dXJuICExOwogICAgICAgICAgfQogICAgICAgIH0pKCk7CiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsKICAgICAgICAgIHZhciBuLAogICAgICAgICAgICByID0gYSh0KTsKICAgICAgICAgIGlmIChlKSB7CiAgICAgICAgICAgIHZhciBvID0gYSh0aGlzKS5jb25zdHJ1Y3RvcjsKICAgICAgICAgICAgbiA9IFJlZmxlY3QuY29uc3RydWN0KHIsIGFyZ3VtZW50cywgbyk7CiAgICAgICAgICB9IGVsc2UgbiA9IHIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICAgIHJldHVybiBjKHRoaXMsIG4pOwogICAgICAgIH07CiAgICAgIH0KICAgICAgZnVuY3Rpb24gYyh0LCBlKSB7CiAgICAgICAgaWYgKGUgJiYgKCJvYmplY3QiID09PSByKGUpIHx8ICJmdW5jdGlvbiIgPT0gdHlwZW9mIGUpKSByZXR1cm4gZTsKICAgICAgICBpZiAodm9pZCAwICE9PSBlKQogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigKICAgICAgICAgICAgIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkIgogICAgICAgICAgKTsKICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICBpZiAodm9pZCAwID09PSB0KQogICAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoCiAgICAgICAgICAgICAgInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZCIKICAgICAgICAgICAgKTsKICAgICAgICAgIHJldHVybiB0OwogICAgICAgIH0pKHQpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIGEodCkgewogICAgICAgIHJldHVybiAoYSA9IE9iamVjdC5zZXRQcm90b3R5cGVPZgogICAgICAgICAgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YKICAgICAgICAgIDogZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICByZXR1cm4gdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpOwogICAgICAgICAgICB9KSh0KTsKICAgICAgfQogICAgICBmdW5jdGlvbiB1KHQsIGUpIHsKICAgICAgICBpZiAoISh0IGluc3RhbmNlb2YgZSkpCiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24iKTsKICAgICAgfQogICAgICBmdW5jdGlvbiBmKHQsIGUpIHsKICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGUubGVuZ3RoOyBuKyspIHsKICAgICAgICAgIHZhciByID0gZVtuXTsKICAgICAgICAgIChyLmVudW1lcmFibGUgPSByLmVudW1lcmFibGUgfHwgITEpLAogICAgICAgICAgICAoci5jb25maWd1cmFibGUgPSAhMCksCiAgICAgICAgICAgICJ2YWx1ZSIgaW4gciAmJiAoci53cml0YWJsZSA9ICEwKSwKICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIHIua2V5LCByKTsKICAgICAgICB9CiAgICAgIH0KICAgICAgZnVuY3Rpb24gbCh0LCBlLCBuKSB7CiAgICAgICAgcmV0dXJuIGUgJiYgZih0LnByb3RvdHlwZSwgZSksIG4gJiYgZih0LCBuKSwgdDsKICAgICAgfQogICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgIl9fZXNNb2R1bGUiLCB7IHZhbHVlOiAhMCB9KSwKICAgICAgICAoZS5EZWNvZGVyID0gZS5FbmNvZGVyID0gZS5QYWNrZXRUeXBlID0gZS5wcm90b2NvbCA9IHZvaWQgMCk7CiAgICAgIHZhciBwLAogICAgICAgIGggPSBuKDIpLAogICAgICAgIHkgPSBuKDMwKSwKICAgICAgICBkID0gbigxNSk7CiAgICAgIChlLnByb3RvY29sID0gNSksCiAgICAgICAgKGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAodFsodC5DT05ORUNUID0gMCldID0gIkNPTk5FQ1QiKSwKICAgICAgICAgICAgKHRbKHQuRElTQ09OTkVDVCA9IDEpXSA9ICJESVNDT05ORUNUIiksCiAgICAgICAgICAgICh0Wyh0LkVWRU5UID0gMildID0gIkVWRU5UIiksCiAgICAgICAgICAgICh0Wyh0LkFDSyA9IDMpXSA9ICJBQ0siKSwKICAgICAgICAgICAgKHRbKHQuQ09OTkVDVF9FUlJPUiA9IDQpXSA9ICJDT05ORUNUX0VSUk9SIiksCiAgICAgICAgICAgICh0Wyh0LkJJTkFSWV9FVkVOVCA9IDUpXSA9ICJCSU5BUllfRVZFTlQiKSwKICAgICAgICAgICAgKHRbKHQuQklOQVJZX0FDSyA9IDYpXSA9ICJCSU5BUllfQUNLIik7CiAgICAgICAgfSkoKHAgPSBlLlBhY2tldFR5cGUgfHwgKGUuUGFja2V0VHlwZSA9IHt9KSkpOwogICAgICB2YXIgdiA9IChmdW5jdGlvbiAoKSB7CiAgICAgICAgZnVuY3Rpb24gdCgpIHsKICAgICAgICAgIHUodGhpcywgdCk7CiAgICAgICAgfQogICAgICAgIHJldHVybiAoCiAgICAgICAgICBsKHQsIFsKICAgICAgICAgICAgewogICAgICAgICAgICAgIGtleTogImVuY29kZSIsCiAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICByZXR1cm4gKHQudHlwZSAhPT0gcC5FVkVOVCAmJiB0LnR5cGUgIT09IHAuQUNLKSB8fAogICAgICAgICAgICAgICAgICAhZC5oYXNCaW5hcnkodCkKICAgICAgICAgICAgICAgICAgPyBbdGhpcy5lbmNvZGVBc1N0cmluZyh0KV0KICAgICAgICAgICAgICAgICAgOiAoKHQudHlwZSA9CiAgICAgICAgICAgICAgICAgICAgICB0LnR5cGUgPT09IHAuRVZFTlQgPyBwLkJJTkFSWV9FVkVOVCA6IHAuQklOQVJZX0FDSyksCiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmNvZGVBc0JpbmFyeSh0KSk7CiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSwKICAgICAgICAgICAgewogICAgICAgICAgICAgIGtleTogImVuY29kZUFzU3RyaW5nIiwKICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgIHZhciBlID0gIiIgKyB0LnR5cGU7CiAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAodC50eXBlICE9PSBwLkJJTkFSWV9FVkVOVCAmJiB0LnR5cGUgIT09IHAuQklOQVJZX0FDSykgfHwKICAgICAgICAgICAgICAgICAgICAoZSArPSB0LmF0dGFjaG1lbnRzICsgIi0iKSwKICAgICAgICAgICAgICAgICAgdC5uc3AgJiYgIi8iICE9PSB0Lm5zcCAmJiAoZSArPSB0Lm5zcCArICIsIiksCiAgICAgICAgICAgICAgICAgIG51bGwgIT0gdC5pZCAmJiAoZSArPSB0LmlkKSwKICAgICAgICAgICAgICAgICAgbnVsbCAhPSB0LmRhdGEgJiYgKGUgKz0gSlNPTi5zdHJpbmdpZnkodC5kYXRhKSksCiAgICAgICAgICAgICAgICAgIGUKICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSwKICAgICAgICAgICAgewogICAgICAgICAgICAgIGtleTogImVuY29kZUFzQmluYXJ5IiwKICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgIHZhciBlID0geS5kZWNvbnN0cnVjdFBhY2tldCh0KSwKICAgICAgICAgICAgICAgICAgbiA9IHRoaXMuZW5jb2RlQXNTdHJpbmcoZS5wYWNrZXQpLAogICAgICAgICAgICAgICAgICByID0gZS5idWZmZXJzOwogICAgICAgICAgICAgICAgcmV0dXJuIHIudW5zaGlmdChuKSwgcjsKICAgICAgICAgICAgICB9LAogICAgICAgICAgICB9LAogICAgICAgICAgXSksCiAgICAgICAgICB0CiAgICAgICAgKTsKICAgICAgfSkoKTsKICAgICAgZS5FbmNvZGVyID0gdjsKICAgICAgdmFyIGIgPSAoZnVuY3Rpb24gKHQpIHsKICAgICAgICAhKGZ1bmN0aW9uICh0LCBlKSB7CiAgICAgICAgICBpZiAoImZ1bmN0aW9uIiAhPSB0eXBlb2YgZSAmJiBudWxsICE9PSBlKQogICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKAogICAgICAgICAgICAgICJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiIKICAgICAgICAgICAgKTsKICAgICAgICAgICh0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoZSAmJiBlLnByb3RvdHlwZSwgewogICAgICAgICAgICBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogdCwgd3JpdGFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwIH0sCiAgICAgICAgICB9KSksCiAgICAgICAgICAgIGUgJiYgaSh0LCBlKTsKICAgICAgICB9KShuLCB0KTsKICAgICAgICB2YXIgZSA9IHMobik7CiAgICAgICAgZnVuY3Rpb24gbigpIHsKICAgICAgICAgIHJldHVybiB1KHRoaXMsIG4pLCBlLmNhbGwodGhpcyk7CiAgICAgICAgfQogICAgICAgIHJldHVybiAoCiAgICAgICAgICBsKAogICAgICAgICAgICBuLAogICAgICAgICAgICBbCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAiYWRkIiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgICB2YXIgZTsKICAgICAgICAgICAgICAgICAgaWYgKCJzdHJpbmciID09IHR5cGVvZiB0KQogICAgICAgICAgICAgICAgICAgIChlID0gdGhpcy5kZWNvZGVTdHJpbmcodCkpLnR5cGUgPT09IHAuQklOQVJZX0VWRU5UIHx8CiAgICAgICAgICAgICAgICAgICAgZS50eXBlID09PSBwLkJJTkFSWV9BQ0sKICAgICAgICAgICAgICAgICAgICAgID8gKCh0aGlzLnJlY29uc3RydWN0b3IgPSBuZXcgbShlKSksCiAgICAgICAgICAgICAgICAgICAgICAgIDAgPT09IGUuYXR0YWNobWVudHMgJiYKICAgICAgICAgICAgICAgICAgICAgICAgICBvKGEobi5wcm90b3R5cGUpLCAiZW1pdCIsIHRoaXMpLmNhbGwoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgImRlY29kZWQiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgZQogICAgICAgICAgICAgICAgICAgICAgICAgICkpCiAgICAgICAgICAgICAgICAgICAgICA6IG8oYShuLnByb3RvdHlwZSksICJlbWl0IiwgdGhpcykuY2FsbCgKICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLAogICAgICAgICAgICAgICAgICAgICAgICAgICJkZWNvZGVkIiwKICAgICAgICAgICAgICAgICAgICAgICAgICBlCiAgICAgICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgIGVsc2UgewogICAgICAgICAgICAgICAgICAgIGlmICghZC5pc0JpbmFyeSh0KSAmJiAhdC5iYXNlNjQpCiAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoIlVua25vd24gdHlwZTogIiArIHQpOwogICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5yZWNvbnN0cnVjdG9yKQogICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKAogICAgICAgICAgICAgICAgICAgICAgICAiZ290IGJpbmFyeSBkYXRhIHdoZW4gbm90IHJlY29uc3RydWN0aW5nIGEgcGFja2V0IgogICAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICAoZSA9IHRoaXMucmVjb25zdHJ1Y3Rvci50YWtlQmluYXJ5RGF0YSh0KSkgJiYKICAgICAgICAgICAgICAgICAgICAgICgodGhpcy5yZWNvbnN0cnVjdG9yID0gbnVsbCksCiAgICAgICAgICAgICAgICAgICAgICBvKGEobi5wcm90b3R5cGUpLCAiZW1pdCIsIHRoaXMpLmNhbGwodGhpcywgImRlY29kZWQiLCBlKSk7CiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJkZWNvZGVTdHJpbmciLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICAgIHZhciBlID0gMCwKICAgICAgICAgICAgICAgICAgICByID0geyB0eXBlOiBOdW1iZXIodC5jaGFyQXQoMCkpIH07CiAgICAgICAgICAgICAgICAgIGlmICh2b2lkIDAgPT09IHBbci50eXBlXSkKICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoInVua25vd24gcGFja2V0IHR5cGUgIiArIHIudHlwZSk7CiAgICAgICAgICAgICAgICAgIGlmIChyLnR5cGUgPT09IHAuQklOQVJZX0VWRU5UIHx8IHIudHlwZSA9PT0gcC5CSU5BUllfQUNLKSB7CiAgICAgICAgICAgICAgICAgICAgZm9yICgKICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gZSArIDE7CiAgICAgICAgICAgICAgICAgICAgICAiLSIgIT09IHQuY2hhckF0KCsrZSkgJiYgZSAhPSB0Lmxlbmd0aDsKCiAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IHQuc3Vic3RyaW5nKG8sIGUpOwogICAgICAgICAgICAgICAgICAgIGlmIChpICE9IE51bWJlcihpKSB8fCAiLSIgIT09IHQuY2hhckF0KGUpKQogICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJJbGxlZ2FsIGF0dGFjaG1lbnRzIik7CiAgICAgICAgICAgICAgICAgICAgci5hdHRhY2htZW50cyA9IE51bWJlcihpKTsKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICBpZiAoIi8iID09PSB0LmNoYXJBdChlICsgMSkpIHsKICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzID0gZSArIDE7ICsrZTsgKSB7CiAgICAgICAgICAgICAgICAgICAgICBpZiAoIiwiID09PSB0LmNoYXJBdChlKSkgYnJlYWs7CiAgICAgICAgICAgICAgICAgICAgICBpZiAoZSA9PT0gdC5sZW5ndGgpIGJyZWFrOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICByLm5zcCA9IHQuc3Vic3RyaW5nKHMsIGUpOwogICAgICAgICAgICAgICAgICB9IGVsc2Ugci5uc3AgPSAiLyI7CiAgICAgICAgICAgICAgICAgIHZhciBjID0gdC5jaGFyQXQoZSArIDEpOwogICAgICAgICAgICAgICAgICBpZiAoIiIgIT09IGMgJiYgTnVtYmVyKGMpID09IGMpIHsKICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBhID0gZSArIDE7ICsrZTsgKSB7CiAgICAgICAgICAgICAgICAgICAgICB2YXIgdSA9IHQuY2hhckF0KGUpOwogICAgICAgICAgICAgICAgICAgICAgaWYgKG51bGwgPT0gdSB8fCBOdW1iZXIodSkgIT0gdSkgewogICAgICAgICAgICAgICAgICAgICAgICAtLWU7CiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgaWYgKGUgPT09IHQubGVuZ3RoKSBicmVhazsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgci5pZCA9IE51bWJlcih0LnN1YnN0cmluZyhhLCBlICsgMSkpOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIGlmICh0LmNoYXJBdCgrK2UpKSB7CiAgICAgICAgICAgICAgICAgICAgdmFyIGYgPSAoZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHQpOwogICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAodCkgewogICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gITE7CiAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgfSkodC5zdWJzdHIoZSkpOwogICAgICAgICAgICAgICAgICAgIGlmICghbi5pc1BheWxvYWRWYWxpZChyLnR5cGUsIGYpKQogICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJpbnZhbGlkIHBheWxvYWQiKTsKICAgICAgICAgICAgICAgICAgICByLmRhdGEgPSBmOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIHJldHVybiByOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogImRlc3Ryb3kiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvbnN0cnVjdG9yICYmCiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvbnN0cnVjdG9yLmZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24oKTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgXSwKICAgICAgICAgICAgWwogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogImlzUGF5bG9hZFZhbGlkIiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCwgZSkgewogICAgICAgICAgICAgICAgICBzd2l0Y2ggKHQpIHsKICAgICAgICAgICAgICAgICAgICBjYXNlIHAuQ09OTkVDVDoKICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAib2JqZWN0IiA9PT0gcihlKTsKICAgICAgICAgICAgICAgICAgICBjYXNlIHAuRElTQ09OTkVDVDoKICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIDAgPT09IGU7CiAgICAgICAgICAgICAgICAgICAgY2FzZSBwLkNPTk5FQ1RfRVJST1I6CiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gInN0cmluZyIgPT0gdHlwZW9mIGUgfHwgIm9iamVjdCIgPT09IHIoZSk7CiAgICAgICAgICAgICAgICAgICAgY2FzZSBwLkVWRU5UOgogICAgICAgICAgICAgICAgICAgIGNhc2UgcC5CSU5BUllfRVZFTlQ6CiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShlKSAmJiBlLmxlbmd0aCA+IDA7CiAgICAgICAgICAgICAgICAgICAgY2FzZSBwLkFDSzoKICAgICAgICAgICAgICAgICAgICBjYXNlIHAuQklOQVJZX0FDSzoKICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGUpOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgIF0KICAgICAgICAgICksCiAgICAgICAgICBuCiAgICAgICAgKTsKICAgICAgfSkoaCk7CiAgICAgIGUuRGVjb2RlciA9IGI7CiAgICAgIHZhciBtID0gKGZ1bmN0aW9uICgpIHsKICAgICAgICBmdW5jdGlvbiB0KGUpIHsKICAgICAgICAgIHUodGhpcywgdCksCiAgICAgICAgICAgICh0aGlzLnBhY2tldCA9IGUpLAogICAgICAgICAgICAodGhpcy5idWZmZXJzID0gW10pLAogICAgICAgICAgICAodGhpcy5yZWNvblBhY2sgPSBlKTsKICAgICAgICB9CiAgICAgICAgcmV0dXJuICgKICAgICAgICAgIGwodCwgWwogICAgICAgICAgICB7CiAgICAgICAgICAgICAga2V5OiAidGFrZUJpbmFyeURhdGEiLAogICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgaWYgKAogICAgICAgICAgICAgICAgICAodGhpcy5idWZmZXJzLnB1c2godCksCiAgICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVycy5sZW5ndGggPT09IHRoaXMucmVjb25QYWNrLmF0dGFjaG1lbnRzKQogICAgICAgICAgICAgICAgKSB7CiAgICAgICAgICAgICAgICAgIHZhciBlID0geS5yZWNvbnN0cnVjdFBhY2tldCh0aGlzLnJlY29uUGFjaywgdGhpcy5idWZmZXJzKTsKICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmluaXNoZWRSZWNvbnN0cnVjdGlvbigpLCBlOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7CiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSwKICAgICAgICAgICAgewogICAgICAgICAgICAgIGtleTogImZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24iLAogICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAodGhpcy5yZWNvblBhY2sgPSBudWxsKSwgKHRoaXMuYnVmZmVycyA9IFtdKTsKICAgICAgICAgICAgICB9LAogICAgICAgICAgICB9LAogICAgICAgICAgXSksCiAgICAgICAgICB0CiAgICAgICAgKTsKICAgICAgfSkoKTsKICAgIH0sCiAgICBmdW5jdGlvbiAodCwgZSkgewogICAgICB2YXIgbiA9CiAgICAgICAgICAvXig/Oig/IVteOkBdKzpbXjpAXC9dKkApKGh0dHB8aHR0cHN8d3N8d3NzKTpcL1wvKT8oKD86KChbXjpAXSopKD86OihbXjpAXSopKT8pP0ApPygoPzpbYS1mMC05XXswLDR9Oil7Miw3fVthLWYwLTldezAsNH18W146XC8/I10qKSg/OjooXGQqKSk/KSgoKFwvKD86W14/I10oPyFbXj8jXC9dKlwuW14/I1wvLl0rKD86Wz8jXXwkKSkpKlwvPyk/KFtePyNcL10qKSkoPzpcPyhbXiNdKikpPyg/OiMoLiopKT8pLywKICAgICAgICByID0gWwogICAgICAgICAgInNvdXJjZSIsCiAgICAgICAgICAicHJvdG9jb2wiLAogICAgICAgICAgImF1dGhvcml0eSIsCiAgICAgICAgICAidXNlckluZm8iLAogICAgICAgICAgInVzZXIiLAogICAgICAgICAgInBhc3N3b3JkIiwKICAgICAgICAgICJob3N0IiwKICAgICAgICAgICJwb3J0IiwKICAgICAgICAgICJyZWxhdGl2ZSIsCiAgICAgICAgICAicGF0aCIsCiAgICAgICAgICAiZGlyZWN0b3J5IiwKICAgICAgICAgICJmaWxlIiwKICAgICAgICAgICJxdWVyeSIsCiAgICAgICAgICAiYW5jaG9yIiwKICAgICAgICBdOwogICAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCkgewogICAgICAgIHZhciBlID0gdCwKICAgICAgICAgIG8gPSB0LmluZGV4T2YoIlsiKSwKICAgICAgICAgIGkgPSB0LmluZGV4T2YoIl0iKTsKICAgICAgICAtMSAhPSBvICYmCiAgICAgICAgICAtMSAhPSBpICYmCiAgICAgICAgICAodCA9CiAgICAgICAgICAgIHQuc3Vic3RyaW5nKDAsIG8pICsKICAgICAgICAgICAgdC5zdWJzdHJpbmcobywgaSkucmVwbGFjZSgvOi9nLCAiOyIpICsKICAgICAgICAgICAgdC5zdWJzdHJpbmcoaSwgdC5sZW5ndGgpKTsKICAgICAgICBmb3IgKHZhciBzLCBjLCBhID0gbi5leGVjKHQgfHwgIiIpLCB1ID0ge30sIGYgPSAxNDsgZi0tOyApCiAgICAgICAgICB1W3JbZl1dID0gYVtmXSB8fCAiIjsKICAgICAgICByZXR1cm4gKAogICAgICAgICAgLTEgIT0gbyAmJgogICAgICAgICAgICAtMSAhPSBpICYmCiAgICAgICAgICAgICgodS5zb3VyY2UgPSBlKSwKICAgICAgICAgICAgKHUuaG9zdCA9IHUuaG9zdAogICAgICAgICAgICAgIC5zdWJzdHJpbmcoMSwgdS5ob3N0Lmxlbmd0aCAtIDEpCiAgICAgICAgICAgICAgLnJlcGxhY2UoLzsvZywgIjoiKSksCiAgICAgICAgICAgICh1LmF1dGhvcml0eSA9IHUuYXV0aG9yaXR5CiAgICAgICAgICAgICAgLnJlcGxhY2UoIlsiLCAiIikKICAgICAgICAgICAgICAucmVwbGFjZSgiXSIsICIiKQogICAgICAgICAgICAgIC5yZXBsYWNlKC87L2csICI6IikpLAogICAgICAgICAgICAodS5pcHY2dXJpID0gITApKSwKICAgICAgICAgICh1LnBhdGhOYW1lcyA9IChmdW5jdGlvbiAodCwgZSkgewogICAgICAgICAgICB2YXIgbiA9IGUucmVwbGFjZSgvXC97Miw5fS9nLCAiLyIpLnNwbGl0KCIvIik7CiAgICAgICAgICAgICgiLyIgIT0gZS5zdWJzdHIoMCwgMSkgJiYgMCAhPT0gZS5sZW5ndGgpIHx8IG4uc3BsaWNlKDAsIDEpOwogICAgICAgICAgICAiLyIgPT0gZS5zdWJzdHIoZS5sZW5ndGggLSAxLCAxKSAmJiBuLnNwbGljZShuLmxlbmd0aCAtIDEsIDEpOwogICAgICAgICAgICByZXR1cm4gbjsKICAgICAgICAgIH0pKDAsIHUucGF0aCkpLAogICAgICAgICAgKHUucXVlcnlLZXkgPQogICAgICAgICAgICAoKHMgPSB1LnF1ZXJ5KSwKICAgICAgICAgICAgKGMgPSB7fSksCiAgICAgICAgICAgIHMucmVwbGFjZSgvKD86XnwmKShbXiY9XSopPT8oW14mXSopL2csIGZ1bmN0aW9uICh0LCBlLCBuKSB7CiAgICAgICAgICAgICAgZSAmJiAoY1tlXSA9IG4pOwogICAgICAgICAgICB9KSwKICAgICAgICAgICAgYykpLAogICAgICAgICAgdQogICAgICAgICk7CiAgICAgIH07CiAgICB9LAogICAgZnVuY3Rpb24gKHQsIGUsIG4pIHsKICAgICAgZnVuY3Rpb24gcih0KSB7CiAgICAgICAgcmV0dXJuIChyID0KICAgICAgICAgICJmdW5jdGlvbiIgPT0gdHlwZW9mIFN5bWJvbCAmJiAic3ltYm9sIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yCiAgICAgICAgICAgID8gZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgdDsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIDogZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgIHJldHVybiB0ICYmCiAgICAgICAgICAgICAgICAgICJmdW5jdGlvbiIgPT0gdHlwZW9mIFN5bWJvbCAmJgogICAgICAgICAgICAgICAgICB0LmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYKICAgICAgICAgICAgICAgICAgdCAhPT0gU3ltYm9sLnByb3RvdHlwZQogICAgICAgICAgICAgICAgICA/ICJzeW1ib2wiCiAgICAgICAgICAgICAgICAgIDogdHlwZW9mIHQ7CiAgICAgICAgICAgICAgfSkodCk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gbyh0LCBlKSB7CiAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBlLmxlbmd0aDsgbisrKSB7CiAgICAgICAgICB2YXIgciA9IGVbbl07CiAgICAgICAgICAoci5lbnVtZXJhYmxlID0gci5lbnVtZXJhYmxlIHx8ICExKSwKICAgICAgICAgICAgKHIuY29uZmlndXJhYmxlID0gITApLAogICAgICAgICAgICAidmFsdWUiIGluIHIgJiYgKHIud3JpdGFibGUgPSAhMCksCiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCByLmtleSwgcik7CiAgICAgICAgfQogICAgICB9CiAgICAgIGZ1bmN0aW9uIGkodCwgZSkgewogICAgICAgIHJldHVybiAoaSA9CiAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwKICAgICAgICAgIGZ1bmN0aW9uICh0LCBlKSB7CiAgICAgICAgICAgIHJldHVybiAodC5fX3Byb3RvX18gPSBlKSwgdDsKICAgICAgICAgIH0pKHQsIGUpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHModCkgewogICAgICAgIHZhciBlID0gKGZ1bmN0aW9uICgpIHsKICAgICAgICAgIGlmICgidW5kZWZpbmVkIiA9PSB0eXBlb2YgUmVmbGVjdCB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiAhMTsKICAgICAgICAgIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gITE7CiAgICAgICAgICBpZiAoImZ1bmN0aW9uIiA9PSB0eXBlb2YgUHJveHkpIHJldHVybiAhMDsKICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKAogICAgICAgICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KQogICAgICAgICAgICAgICksCiAgICAgICAgICAgICAgITAKICAgICAgICAgICAgKTsKICAgICAgICAgIH0gY2F0Y2ggKHQpIHsKICAgICAgICAgICAgcmV0dXJuICExOwogICAgICAgICAgfQogICAgICAgIH0pKCk7CiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsKICAgICAgICAgIHZhciBuLAogICAgICAgICAgICByID0gdSh0KTsKICAgICAgICAgIGlmIChlKSB7CiAgICAgICAgICAgIHZhciBvID0gdSh0aGlzKS5jb25zdHJ1Y3RvcjsKICAgICAgICAgICAgbiA9IFJlZmxlY3QuY29uc3RydWN0KHIsIGFyZ3VtZW50cywgbyk7CiAgICAgICAgICB9IGVsc2UgbiA9IHIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICAgIHJldHVybiBjKHRoaXMsIG4pOwogICAgICAgIH07CiAgICAgIH0KICAgICAgZnVuY3Rpb24gYyh0LCBlKSB7CiAgICAgICAgaWYgKGUgJiYgKCJvYmplY3QiID09PSByKGUpIHx8ICJmdW5jdGlvbiIgPT0gdHlwZW9mIGUpKSByZXR1cm4gZTsKICAgICAgICBpZiAodm9pZCAwICE9PSBlKQogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigKICAgICAgICAgICAgIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkIgogICAgICAgICAgKTsKICAgICAgICByZXR1cm4gYSh0KTsKICAgICAgfQogICAgICBmdW5jdGlvbiBhKHQpIHsKICAgICAgICBpZiAodm9pZCAwID09PSB0KQogICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKAogICAgICAgICAgICAidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkIgogICAgICAgICAgKTsKICAgICAgICByZXR1cm4gdDsKICAgICAgfQogICAgICBmdW5jdGlvbiB1KHQpIHsKICAgICAgICByZXR1cm4gKHUgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YKICAgICAgICAgID8gT2JqZWN0LmdldFByb3RvdHlwZU9mCiAgICAgICAgICA6IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgcmV0dXJuIHQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZih0KTsKICAgICAgICAgICAgfSkodCk7CiAgICAgIH0KICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogITAgfSksCiAgICAgICAgKGUuTWFuYWdlciA9IHZvaWQgMCk7CiAgICAgIHZhciBmID0gbigyMCksCiAgICAgICAgbCA9IG4oMyksCiAgICAgICAgcCA9IG4oMTQpLAogICAgICAgIGggPSBuKDYpLAogICAgICAgIHkgPSBuKDE2KSwKICAgICAgICBkID0gbigzMSksCiAgICAgICAgdiA9IChmdW5jdGlvbiAodCkgewogICAgICAgICAgIShmdW5jdGlvbiAodCwgZSkgewogICAgICAgICAgICBpZiAoImZ1bmN0aW9uIiAhPSB0eXBlb2YgZSAmJiBudWxsICE9PSBlKQogICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoCiAgICAgICAgICAgICAgICAiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24iCiAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgKHQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShlICYmIGUucHJvdG90eXBlLCB7CiAgICAgICAgICAgICAgY29uc3RydWN0b3I6IHsgdmFsdWU6IHQsIHdyaXRhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9LAogICAgICAgICAgICB9KSksCiAgICAgICAgICAgICAgZSAmJiBpKHQsIGUpOwogICAgICAgICAgfSkodiwgdCk7CiAgICAgICAgICB2YXIgZSwKICAgICAgICAgICAgbiwKICAgICAgICAgICAgYywKICAgICAgICAgICAgdSA9IHModik7CiAgICAgICAgICBmdW5jdGlvbiB2KHQsIGUpIHsKICAgICAgICAgICAgdmFyIG4sIG87CiAgICAgICAgICAgICEoZnVuY3Rpb24gKHQsIGUpIHsKICAgICAgICAgICAgICBpZiAoISh0IGluc3RhbmNlb2YgZSkpCiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24iKTsKICAgICAgICAgICAgfSkodGhpcywgdiksCiAgICAgICAgICAgICAgKChuID0gdS5jYWxsKHRoaXMpKS5uc3BzID0ge30pLAogICAgICAgICAgICAgIChuLnN1YnMgPSBbXSksCiAgICAgICAgICAgICAgdCAmJiAib2JqZWN0IiA9PT0gcih0KSAmJiAoKGUgPSB0KSwgKHQgPSB2b2lkIDApKSwKICAgICAgICAgICAgICAoKGUgPSBlIHx8IHt9KS5wYXRoID0gZS5wYXRoIHx8ICIvc29ja2V0LmlvIiksCiAgICAgICAgICAgICAgKG4ub3B0cyA9IGUpLAogICAgICAgICAgICAgICgwLCBsLmluc3RhbGxUaW1lckZ1bmN0aW9ucykoYShuKSwgZSksCiAgICAgICAgICAgICAgbi5yZWNvbm5lY3Rpb24oITEgIT09IGUucmVjb25uZWN0aW9uKSwKICAgICAgICAgICAgICBuLnJlY29ubmVjdGlvbkF0dGVtcHRzKGUucmVjb25uZWN0aW9uQXR0ZW1wdHMgfHwgMSAvIDApLAogICAgICAgICAgICAgIG4ucmVjb25uZWN0aW9uRGVsYXkoZS5yZWNvbm5lY3Rpb25EZWxheSB8fCAxZTMpLAogICAgICAgICAgICAgIG4ucmVjb25uZWN0aW9uRGVsYXlNYXgoZS5yZWNvbm5lY3Rpb25EZWxheU1heCB8fCA1ZTMpLAogICAgICAgICAgICAgIG4ucmFuZG9taXphdGlvbkZhY3RvcigKICAgICAgICAgICAgICAgIG51bGwgIT09IChvID0gZS5yYW5kb21pemF0aW9uRmFjdG9yKSAmJiB2b2lkIDAgIT09IG8gPyBvIDogMC41CiAgICAgICAgICAgICAgKSwKICAgICAgICAgICAgICAobi5iYWNrb2ZmID0gbmV3IGQoewogICAgICAgICAgICAgICAgbWluOiBuLnJlY29ubmVjdGlvbkRlbGF5KCksCiAgICAgICAgICAgICAgICBtYXg6IG4ucmVjb25uZWN0aW9uRGVsYXlNYXgoKSwKICAgICAgICAgICAgICAgIGppdHRlcjogbi5yYW5kb21pemF0aW9uRmFjdG9yKCksCiAgICAgICAgICAgICAgfSkpLAogICAgICAgICAgICAgIG4udGltZW91dChudWxsID09IGUudGltZW91dCA/IDJlNCA6IGUudGltZW91dCksCiAgICAgICAgICAgICAgKG4uX3JlYWR5U3RhdGUgPSAiY2xvc2VkIiksCiAgICAgICAgICAgICAgKG4udXJpID0gdCk7CiAgICAgICAgICAgIHZhciBpID0gZS5wYXJzZXIgfHwgaDsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAobi5lbmNvZGVyID0gbmV3IGkuRW5jb2RlcigpKSwKICAgICAgICAgICAgICAobi5kZWNvZGVyID0gbmV3IGkuRGVjb2RlcigpKSwKICAgICAgICAgICAgICAobi5fYXV0b0Nvbm5lY3QgPSAhMSAhPT0gZS5hdXRvQ29ubmVjdCksCiAgICAgICAgICAgICAgbi5fYXV0b0Nvbm5lY3QgJiYgbi5vcGVuKCksCiAgICAgICAgICAgICAgbgogICAgICAgICAgICApOwogICAgICAgICAgfQogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgKGUgPSB2KSwKICAgICAgICAgICAgKG4gPSBbCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAicmVjb25uZWN0aW9uIiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aAogICAgICAgICAgICAgICAgICAgID8gKCh0aGlzLl9yZWNvbm5lY3Rpb24gPSAhIXQpLCB0aGlzKQogICAgICAgICAgICAgICAgICAgIDogdGhpcy5fcmVjb25uZWN0aW9uOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogInJlY29ubmVjdGlvbkF0dGVtcHRzIiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCAwID09PSB0CiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cwogICAgICAgICAgICAgICAgICAgIDogKCh0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cyA9IHQpLCB0aGlzKTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJyZWNvbm5lY3Rpb25EZWxheSIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgICAgdmFyIGU7CiAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIDAgPT09IHQKICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5CiAgICAgICAgICAgICAgICAgICAgOiAoKHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5ID0gdCksCiAgICAgICAgICAgICAgICAgICAgICBudWxsID09PSAoZSA9IHRoaXMuYmFja29mZikgfHwKICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCAwID09PSBlIHx8CiAgICAgICAgICAgICAgICAgICAgICAgIGUuc2V0TWluKHQpLAogICAgICAgICAgICAgICAgICAgICAgdGhpcyk7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAicmFuZG9taXphdGlvbkZhY3RvciIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgICAgdmFyIGU7CiAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIDAgPT09IHQKICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX3JhbmRvbWl6YXRpb25GYWN0b3IKICAgICAgICAgICAgICAgICAgICA6ICgodGhpcy5fcmFuZG9taXphdGlvbkZhY3RvciA9IHQpLAogICAgICAgICAgICAgICAgICAgICAgbnVsbCA9PT0gKGUgPSB0aGlzLmJhY2tvZmYpIHx8CiAgICAgICAgICAgICAgICAgICAgICAgIHZvaWQgMCA9PT0gZSB8fAogICAgICAgICAgICAgICAgICAgICAgICBlLnNldEppdHRlcih0KSwKICAgICAgICAgICAgICAgICAgICAgIHRoaXMpOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogInJlY29ubmVjdGlvbkRlbGF5TWF4IiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgICB2YXIgZTsKICAgICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgMCA9PT0gdAogICAgICAgICAgICAgICAgICAgID8gdGhpcy5fcmVjb25uZWN0aW9uRGVsYXlNYXgKICAgICAgICAgICAgICAgICAgICA6ICgodGhpcy5fcmVjb25uZWN0aW9uRGVsYXlNYXggPSB0KSwKICAgICAgICAgICAgICAgICAgICAgIG51bGwgPT09IChlID0gdGhpcy5iYWNrb2ZmKSB8fAogICAgICAgICAgICAgICAgICAgICAgICB2b2lkIDAgPT09IGUgfHwKICAgICAgICAgICAgICAgICAgICAgICAgZS5zZXRNYXgodCksCiAgICAgICAgICAgICAgICAgICAgICB0aGlzKTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJ0aW1lb3V0IiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aAogICAgICAgICAgICAgICAgICAgID8gKCh0aGlzLl90aW1lb3V0ID0gdCksIHRoaXMpCiAgICAgICAgICAgICAgICAgICAgOiB0aGlzLl90aW1lb3V0OwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogIm1heWJlUmVjb25uZWN0T25PcGVuIiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgICF0aGlzLl9yZWNvbm5lY3RpbmcgJiYKICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWNvbm5lY3Rpb24gJiYKICAgICAgICAgICAgICAgICAgICAwID09PSB0aGlzLmJhY2tvZmYuYXR0ZW1wdHMgJiYKICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29ubmVjdCgpOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogIm9wZW4iLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpczsKICAgICAgICAgICAgICAgICAgaWYgKH50aGlzLl9yZWFkeVN0YXRlLmluZGV4T2YoIm9wZW4iKSkgcmV0dXJuIHRoaXM7CiAgICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lID0gZih0aGlzLnVyaSwgdGhpcy5vcHRzKTsKICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0aGlzLmVuZ2luZSwKICAgICAgICAgICAgICAgICAgICByID0gdGhpczsKICAgICAgICAgICAgICAgICAgKHRoaXMuX3JlYWR5U3RhdGUgPSAib3BlbmluZyIpLCAodGhpcy5za2lwUmVjb25uZWN0ID0gITEpOwogICAgICAgICAgICAgICAgICB2YXIgbyA9ICgwLCB5Lm9uKShuLCAib3BlbiIsIGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgICAgIHIub25vcGVuKCksIHQgJiYgdCgpOwogICAgICAgICAgICAgICAgICAgIH0pLAogICAgICAgICAgICAgICAgICAgIGkgPSAoMCwgeS5vbikobiwgImVycm9yIiwgZnVuY3Rpb24gKG4pIHsKICAgICAgICAgICAgICAgICAgICAgIHIuY2xlYW51cCgpLAogICAgICAgICAgICAgICAgICAgICAgICAoci5fcmVhZHlTdGF0ZSA9ICJjbG9zZWQiKSwKICAgICAgICAgICAgICAgICAgICAgICAgZS5lbWl0UmVzZXJ2ZWQoImVycm9yIiwgbiksCiAgICAgICAgICAgICAgICAgICAgICAgIHQgPyB0KG4pIDogci5tYXliZVJlY29ubmVjdE9uT3BlbigpOwogICAgICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICAgICAgICBpZiAoITEgIT09IHRoaXMuX3RpbWVvdXQpIHsKICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IHRoaXMuX3RpbWVvdXQ7CiAgICAgICAgICAgICAgICAgICAgMCA9PT0gcyAmJiBvKCk7CiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSB0aGlzLnNldFRpbWVvdXRGbihmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgICAgICBvKCksIG4uY2xvc2UoKSwgbi5lbWl0KCJlcnJvciIsIG5ldyBFcnJvcigidGltZW91dCIpKTsKICAgICAgICAgICAgICAgICAgICB9LCBzKTsKICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdHMuYXV0b1VucmVmICYmIGMudW5yZWYoKSwKICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3Vicy5wdXNoKGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGMpOwogICAgICAgICAgICAgICAgICAgICAgfSk7CiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3Vicy5wdXNoKG8pLCB0aGlzLnN1YnMucHVzaChpKSwgdGhpczsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJjb25uZWN0IiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vcGVuKHQpOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogIm9ub3BlbiIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICB0aGlzLmNsZWFudXAoKSwKICAgICAgICAgICAgICAgICAgICAodGhpcy5fcmVhZHlTdGF0ZSA9ICJvcGVuIiksCiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoIm9wZW4iKTsKICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmVuZ2luZTsKICAgICAgICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2goCiAgICAgICAgICAgICAgICAgICAgKDAsIHkub24pKHQsICJwaW5nIiwgdGhpcy5vbnBpbmcuYmluZCh0aGlzKSksCiAgICAgICAgICAgICAgICAgICAgKDAsIHkub24pKHQsICJkYXRhIiwgdGhpcy5vbmRhdGEuYmluZCh0aGlzKSksCiAgICAgICAgICAgICAgICAgICAgKDAsIHkub24pKHQsICJlcnJvciIsIHRoaXMub25lcnJvci5iaW5kKHRoaXMpKSwKICAgICAgICAgICAgICAgICAgICAoMCwgeS5vbikodCwgImNsb3NlIiwgdGhpcy5vbmNsb3NlLmJpbmQodGhpcykpLAogICAgICAgICAgICAgICAgICAgICgwLCB5Lm9uKSgKICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVjb2RlciwKICAgICAgICAgICAgICAgICAgICAgICJkZWNvZGVkIiwKICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25kZWNvZGVkLmJpbmQodGhpcykKICAgICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAib25waW5nIiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKCJwaW5nIik7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAib25kYXRhIiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgICB0aGlzLmRlY29kZXIuYWRkKHQpOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogIm9uZGVjb2RlZCIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoInBhY2tldCIsIHQpOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogIm9uZXJyb3IiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKCJlcnJvciIsIHQpOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogInNvY2tldCIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHQsIGUpIHsKICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0aGlzLm5zcHNbdF07CiAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgbiB8fCAoKG4gPSBuZXcgcC5Tb2NrZXQodGhpcywgdCwgZSkpLCAodGhpcy5uc3BzW3RdID0gbikpLCBuCiAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAiX2Rlc3Ryb3kiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICAgIGZvciAoCiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSAwLCBuID0gT2JqZWN0LmtleXModGhpcy5uc3BzKTsKICAgICAgICAgICAgICAgICAgICBlIDwgbi5sZW5ndGg7CiAgICAgICAgICAgICAgICAgICAgZSsrCiAgICAgICAgICAgICAgICAgICkgewogICAgICAgICAgICAgICAgICAgIHZhciByID0gbltlXTsKICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5uc3BzW3JdLmFjdGl2ZSkgcmV0dXJuOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIHRoaXMuX2Nsb3NlKCk7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAiX3BhY2tldCIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZSA9IHRoaXMuZW5jb2Rlci5lbmNvZGUodCksIG4gPSAwOyBuIDwgZS5sZW5ndGg7IG4rKykKICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZS53cml0ZShlW25dLCB0Lm9wdGlvbnMpOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogImNsZWFudXAiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgICAgICByZXR1cm4gdCgpOwogICAgICAgICAgICAgICAgICB9KSwKICAgICAgICAgICAgICAgICAgICAodGhpcy5zdWJzLmxlbmd0aCA9IDApLAogICAgICAgICAgICAgICAgICAgIHRoaXMuZGVjb2Rlci5kZXN0cm95KCk7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAiX2Nsb3NlIiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgICh0aGlzLnNraXBSZWNvbm5lY3QgPSAhMCksCiAgICAgICAgICAgICAgICAgICAgKHRoaXMuX3JlY29ubmVjdGluZyA9ICExKSwKICAgICAgICAgICAgICAgICAgICAib3BlbmluZyIgPT09IHRoaXMuX3JlYWR5U3RhdGUgJiYgdGhpcy5jbGVhbnVwKCksCiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYWNrb2ZmLnJlc2V0KCksCiAgICAgICAgICAgICAgICAgICAgKHRoaXMuX3JlYWR5U3RhdGUgPSAiY2xvc2VkIiksCiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmdpbmUgJiYgdGhpcy5lbmdpbmUuY2xvc2UoKTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJkaXNjb25uZWN0IiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jbG9zZSgpOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogIm9uY2xvc2UiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYW51cCgpLAogICAgICAgICAgICAgICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpLAogICAgICAgICAgICAgICAgICAgICh0aGlzLl9yZWFkeVN0YXRlID0gImNsb3NlZCIpLAogICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKCJjbG9zZSIsIHQpLAogICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdGlvbiAmJgogICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc2tpcFJlY29ubmVjdCAmJgogICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvbm5lY3QoKTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJyZWNvbm5lY3QiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzOwogICAgICAgICAgICAgICAgICBpZiAodGhpcy5fcmVjb25uZWN0aW5nIHx8IHRoaXMuc2tpcFJlY29ubmVjdCkgcmV0dXJuIHRoaXM7CiAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpczsKICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYmFja29mZi5hdHRlbXB0cyA+PSB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cykKICAgICAgICAgICAgICAgICAgICB0aGlzLmJhY2tvZmYucmVzZXQoKSwKICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKCJyZWNvbm5lY3RfZmFpbGVkIiksCiAgICAgICAgICAgICAgICAgICAgICAodGhpcy5fcmVjb25uZWN0aW5nID0gITEpOwogICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IHRoaXMuYmFja29mZi5kdXJhdGlvbigpOwogICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlY29ubmVjdGluZyA9ICEwOwogICAgICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy5zZXRUaW1lb3V0Rm4oZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICAgICAgZS5za2lwUmVjb25uZWN0IHx8CiAgICAgICAgICAgICAgICAgICAgICAgICh0LmVtaXRSZXNlcnZlZCgKICAgICAgICAgICAgICAgICAgICAgICAgICAicmVjb25uZWN0X2F0dGVtcHQiLAogICAgICAgICAgICAgICAgICAgICAgICAgIGUuYmFja29mZi5hdHRlbXB0cwogICAgICAgICAgICAgICAgICAgICAgICApLAogICAgICAgICAgICAgICAgICAgICAgICBlLnNraXBSZWNvbm5lY3QgfHwKICAgICAgICAgICAgICAgICAgICAgICAgICBlLm9wZW4oZnVuY3Rpb24gKG4pIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoKGUuX3JlY29ubmVjdGluZyA9ICExKSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnJlY29ubmVjdCgpLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQuZW1pdFJlc2VydmVkKCJyZWNvbm5lY3RfZXJyb3IiLCBuKSkKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlLm9ucmVjb25uZWN0KCk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpOwogICAgICAgICAgICAgICAgICAgIH0sIG4pOwogICAgICAgICAgICAgICAgICAgIHRoaXMub3B0cy5hdXRvVW5yZWYgJiYgci51bnJlZigpLAogICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWJzLnB1c2goZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQocik7CiAgICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogIm9ucmVjb25uZWN0IiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcy5iYWNrb2ZmLmF0dGVtcHRzOwogICAgICAgICAgICAgICAgICAodGhpcy5fcmVjb25uZWN0aW5nID0gITEpLAogICAgICAgICAgICAgICAgICAgIHRoaXMuYmFja29mZi5yZXNldCgpLAogICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKCJyZWNvbm5lY3QiLCB0KTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgXSkgJiYgbyhlLnByb3RvdHlwZSwgbiksCiAgICAgICAgICAgIGMgJiYgbyhlLCBjKSwKICAgICAgICAgICAgdgogICAgICAgICAgKTsKICAgICAgICB9KShuKDE3KS5TdHJpY3RFdmVudEVtaXR0ZXIpOwogICAgICBlLk1hbmFnZXIgPSB2OwogICAgfSwKICAgIGZ1bmN0aW9uICh0LCBlLCBuKSB7CiAgICAgIHZhciByID0gbigxMCksCiAgICAgICAgbyA9IG4oMjMpLAogICAgICAgIGkgPSBuKDI3KSwKICAgICAgICBzID0gbigyOCk7CiAgICAgIChlLnBvbGxpbmcgPSBmdW5jdGlvbiAodCkgewogICAgICAgIHZhciBlID0gITEsCiAgICAgICAgICBuID0gITEsCiAgICAgICAgICBzID0gITEgIT09IHQuanNvbnA7CiAgICAgICAgaWYgKCJ1bmRlZmluZWQiICE9IHR5cGVvZiBsb2NhdGlvbikgewogICAgICAgICAgdmFyIGMgPSAiaHR0cHM6IiA9PT0gbG9jYXRpb24ucHJvdG9jb2wsCiAgICAgICAgICAgIGEgPSBsb2NhdGlvbi5wb3J0OwogICAgICAgICAgYSB8fCAoYSA9IGMgPyA0NDMgOiA4MCksCiAgICAgICAgICAgIChlID0gdC5ob3N0bmFtZSAhPT0gbG9jYXRpb24uaG9zdG5hbWUgfHwgYSAhPT0gdC5wb3J0KSwKICAgICAgICAgICAgKG4gPSB0LnNlY3VyZSAhPT0gYyk7CiAgICAgICAgfQogICAgICAgIGlmICgKICAgICAgICAgICgodC54ZG9tYWluID0gZSksCiAgICAgICAgICAodC54c2NoZW1lID0gbiksCiAgICAgICAgICAib3BlbiIgaW4gbmV3IHIodCkgJiYgIXQuZm9yY2VKU09OUCkKICAgICAgICApCiAgICAgICAgICByZXR1cm4gbmV3IG8odCk7CiAgICAgICAgaWYgKCFzKSB0aHJvdyBuZXcgRXJyb3IoIkpTT05QIGRpc2FibGVkIik7CiAgICAgICAgcmV0dXJuIG5ldyBpKHQpOwogICAgICB9KSwKICAgICAgICAoZS53ZWJzb2NrZXQgPSBzKTsKICAgIH0sCiAgICBmdW5jdGlvbiAodCwgZSwgbikgewogICAgICB2YXIgciA9IG4oMjIpLAogICAgICAgIG8gPSBuKDApOwogICAgICB0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCkgewogICAgICAgIHZhciBlID0gdC54ZG9tYWluLAogICAgICAgICAgbiA9IHQueHNjaGVtZSwKICAgICAgICAgIGkgPSB0LmVuYWJsZXNYRFI7CiAgICAgICAgdHJ5IHsKICAgICAgICAgIGlmICgidW5kZWZpbmVkIiAhPSB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgJiYgKCFlIHx8IHIpKQogICAgICAgICAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7CiAgICAgICAgfSBjYXRjaCAodCkge30KICAgICAgICB0cnkgewogICAgICAgICAgaWYgKCJ1bmRlZmluZWQiICE9IHR5cGVvZiBYRG9tYWluUmVxdWVzdCAmJiAhbiAmJiBpKQogICAgICAgICAgICByZXR1cm4gbmV3IFhEb21haW5SZXF1ZXN0KCk7CiAgICAgICAgfSBjYXRjaCAodCkge30KICAgICAgICBpZiAoIWUpCiAgICAgICAgICB0cnkgewogICAgICAgICAgICByZXR1cm4gbmV3IG9bWyJBY3RpdmUiXS5jb25jYXQoIk9iamVjdCIpLmpvaW4oIlgiKV0oCiAgICAgICAgICAgICAgIk1pY3Jvc29mdC5YTUxIVFRQIgogICAgICAgICAgICApOwogICAgICAgICAgfSBjYXRjaCAodCkge30KICAgICAgfTsKICAgIH0sCiAgICBmdW5jdGlvbiAodCwgZSwgbikgewogICAgICBmdW5jdGlvbiByKHQpIHsKICAgICAgICByZXR1cm4gKHIgPQogICAgICAgICAgImZ1bmN0aW9uIiA9PSB0eXBlb2YgU3ltYm9sICYmICJzeW1ib2wiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IKICAgICAgICAgICAgPyBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB0OwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgcmV0dXJuIHQgJiYKICAgICAgICAgICAgICAgICAgImZ1bmN0aW9uIiA9PSB0eXBlb2YgU3ltYm9sICYmCiAgICAgICAgICAgICAgICAgIHQuY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJgogICAgICAgICAgICAgICAgICB0ICE9PSBTeW1ib2wucHJvdG90eXBlCiAgICAgICAgICAgICAgICAgID8gInN5bWJvbCIKICAgICAgICAgICAgICAgICAgOiB0eXBlb2YgdDsKICAgICAgICAgICAgICB9KSh0KTsKICAgICAgfQogICAgICBmdW5jdGlvbiBvKHQsIGUpIHsKICAgICAgICBpZiAoISh0IGluc3RhbmNlb2YgZSkpCiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24iKTsKICAgICAgfQogICAgICBmdW5jdGlvbiBpKHQsIGUpIHsKICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGUubGVuZ3RoOyBuKyspIHsKICAgICAgICAgIHZhciByID0gZVtuXTsKICAgICAgICAgIChyLmVudW1lcmFibGUgPSByLmVudW1lcmFibGUgfHwgITEpLAogICAgICAgICAgICAoci5jb25maWd1cmFibGUgPSAhMCksCiAgICAgICAgICAgICJ2YWx1ZSIgaW4gciAmJiAoci53cml0YWJsZSA9ICEwKSwKICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIHIua2V5LCByKTsKICAgICAgICB9CiAgICAgIH0KICAgICAgZnVuY3Rpb24gcyh0LCBlKSB7CiAgICAgICAgcmV0dXJuIChzID0KICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fAogICAgICAgICAgZnVuY3Rpb24gKHQsIGUpIHsKICAgICAgICAgICAgcmV0dXJuICh0Ll9fcHJvdG9fXyA9IGUpLCB0OwogICAgICAgICAgfSkodCwgZSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gYyh0KSB7CiAgICAgICAgdmFyIGUgPSAoZnVuY3Rpb24gKCkgewogICAgICAgICAgaWYgKCJ1bmRlZmluZWQiID09IHR5cGVvZiBSZWZsZWN0IHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuICExOwogICAgICAgICAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiAhMTsKICAgICAgICAgIGlmICgiZnVuY3Rpb24iID09IHR5cGVvZiBQcm94eSkgcmV0dXJuICEwOwogICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoCiAgICAgICAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pCiAgICAgICAgICAgICAgKSwKICAgICAgICAgICAgICAhMAogICAgICAgICAgICApOwogICAgICAgICAgfSBjYXRjaCAodCkgewogICAgICAgICAgICByZXR1cm4gITE7CiAgICAgICAgICB9CiAgICAgICAgfSkoKTsKICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgewogICAgICAgICAgdmFyIG4sCiAgICAgICAgICAgIHIgPSB1KHQpOwogICAgICAgICAgaWYgKGUpIHsKICAgICAgICAgICAgdmFyIG8gPSB1KHRoaXMpLmNvbnN0cnVjdG9yOwogICAgICAgICAgICBuID0gUmVmbGVjdC5jb25zdHJ1Y3QociwgYXJndW1lbnRzLCBvKTsKICAgICAgICAgIH0gZWxzZSBuID0gci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgICAgcmV0dXJuIGEodGhpcywgbik7CiAgICAgICAgfTsKICAgICAgfQogICAgICBmdW5jdGlvbiBhKHQsIGUpIHsKICAgICAgICBpZiAoZSAmJiAoIm9iamVjdCIgPT09IHIoZSkgfHwgImZ1bmN0aW9uIiA9PSB0eXBlb2YgZSkpIHJldHVybiBlOwogICAgICAgIGlmICh2b2lkIDAgIT09IGUpCiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKAogICAgICAgICAgICAiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWQiCiAgICAgICAgICApOwogICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHQpIHsKICAgICAgICAgIGlmICh2b2lkIDAgPT09IHQpCiAgICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcigKICAgICAgICAgICAgICAidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkIgogICAgICAgICAgICApOwogICAgICAgICAgcmV0dXJuIHQ7CiAgICAgICAgfSkodCk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gdSh0KSB7CiAgICAgICAgcmV0dXJuICh1ID0gT2JqZWN0LnNldFByb3RvdHlwZU9mCiAgICAgICAgICA/IE9iamVjdC5nZXRQcm90b3R5cGVPZgogICAgICAgICAgOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgIHJldHVybiB0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodCk7CiAgICAgICAgICAgIH0pKHQpOwogICAgICB9CiAgICAgIHZhciBmID0gbig0KSwKICAgICAgICBsID0gbig1KSwKICAgICAgICBwID0gbigxKSwKICAgICAgICBoID0gbigxMyksCiAgICAgICAgeSA9IChmdW5jdGlvbiAodCkgewogICAgICAgICAgIShmdW5jdGlvbiAodCwgZSkgewogICAgICAgICAgICBpZiAoImZ1bmN0aW9uIiAhPSB0eXBlb2YgZSAmJiBudWxsICE9PSBlKQogICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoCiAgICAgICAgICAgICAgICAiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24iCiAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgKHQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShlICYmIGUucHJvdG90eXBlLCB7CiAgICAgICAgICAgICAgY29uc3RydWN0b3I6IHsgdmFsdWU6IHQsIHdyaXRhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9LAogICAgICAgICAgICB9KSksCiAgICAgICAgICAgICAgZSAmJiBzKHQsIGUpOwogICAgICAgICAgfSkodSwgdCk7CiAgICAgICAgICB2YXIgZSwKICAgICAgICAgICAgbiwKICAgICAgICAgICAgciwKICAgICAgICAgICAgYSA9IGModSk7CiAgICAgICAgICBmdW5jdGlvbiB1KCkgewogICAgICAgICAgICByZXR1cm4gbyh0aGlzLCB1KSwgYS5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgICAgfQogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgKGUgPSB1KSwKICAgICAgICAgICAgKG4gPSBbCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAibmFtZSIsCiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgcmV0dXJuICJwb2xsaW5nIjsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJkb09wZW4iLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgdGhpcy5wb2xsKCk7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAicGF1c2UiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpczsKICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gInBhdXNpbmciOwogICAgICAgICAgICAgICAgICB2YXIgbiA9IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgICAoZS5yZWFkeVN0YXRlID0gInBhdXNlZCIpLCB0KCk7CiAgICAgICAgICAgICAgICAgIH07CiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvbGxpbmcgfHwgIXRoaXMud3JpdGFibGUpIHsKICAgICAgICAgICAgICAgICAgICB2YXIgciA9IDA7CiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb2xsaW5nICYmCiAgICAgICAgICAgICAgICAgICAgICAocisrLAogICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbmNlKCJwb2xsQ29tcGxldGUiLCBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIC0tciB8fCBuKCk7CiAgICAgICAgICAgICAgICAgICAgICB9KSksCiAgICAgICAgICAgICAgICAgICAgICB0aGlzLndyaXRhYmxlIHx8CiAgICAgICAgICAgICAgICAgICAgICAgIChyKyssCiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25jZSgiZHJhaW4iLCBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgLS1yIHx8IG4oKTsKICAgICAgICAgICAgICAgICAgICAgICAgfSkpOwogICAgICAgICAgICAgICAgICB9IGVsc2UgbigpOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogInBvbGwiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgKHRoaXMucG9sbGluZyA9ICEwKSwgdGhpcy5kb1BvbGwoKSwgdGhpcy5lbWl0KCJwb2xsIik7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAib25EYXRhIiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXM7CiAgICAgICAgICAgICAgICAgIHAKICAgICAgICAgICAgICAgICAgICAuZGVjb2RlUGF5bG9hZCh0LCB0aGlzLnNvY2tldC5iaW5hcnlUeXBlKQogICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICAgICAgICBpZiAoCiAgICAgICAgICAgICAgICAgICAgICAgICgib3BlbmluZyIgPT09IGUucmVhZHlTdGF0ZSAmJgogICAgICAgICAgICAgICAgICAgICAgICAgICJvcGVuIiA9PT0gdC50eXBlICYmCiAgICAgICAgICAgICAgICAgICAgICAgICAgZS5vbk9wZW4oKSwKICAgICAgICAgICAgICAgICAgICAgICAgImNsb3NlIiA9PT0gdC50eXBlKQogICAgICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZS5vbkNsb3NlKCksICExOwogICAgICAgICAgICAgICAgICAgICAgZS5vblBhY2tldCh0KTsKICAgICAgICAgICAgICAgICAgICB9KSwKICAgICAgICAgICAgICAgICAgICAiY2xvc2VkIiAhPT0gdGhpcy5yZWFkeVN0YXRlICYmCiAgICAgICAgICAgICAgICAgICAgICAoKHRoaXMucG9sbGluZyA9ICExKSwKICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgicG9sbENvbXBsZXRlIiksCiAgICAgICAgICAgICAgICAgICAgICAib3BlbiIgPT09IHRoaXMucmVhZHlTdGF0ZSAmJiB0aGlzLnBvbGwoKSk7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAiZG9DbG9zZSIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMsCiAgICAgICAgICAgICAgICAgICAgZSA9IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgICAgIHQud3JpdGUoW3sgdHlwZTogImNsb3NlIiB9XSk7CiAgICAgICAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgICAgICAgIm9wZW4iID09PSB0aGlzLnJlYWR5U3RhdGUgPyBlKCkgOiB0aGlzLm9uY2UoIm9wZW4iLCBlKTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJ3cml0ZSIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzOwogICAgICAgICAgICAgICAgICAodGhpcy53cml0YWJsZSA9ICExKSwKICAgICAgICAgICAgICAgICAgICBwLmVuY29kZVBheWxvYWQodCwgZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgICAgICAgIGUuZG9Xcml0ZSh0LCBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIChlLndyaXRhYmxlID0gITApLCBlLmVtaXQoImRyYWluIik7CiAgICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJ1cmkiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLnF1ZXJ5IHx8IHt9LAogICAgICAgICAgICAgICAgICAgIGUgPSB0aGlzLm9wdHMuc2VjdXJlID8gImh0dHBzIiA6ICJodHRwIiwKICAgICAgICAgICAgICAgICAgICBuID0gIiI7CiAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgITEgIT09IHRoaXMub3B0cy50aW1lc3RhbXBSZXF1ZXN0cyAmJgogICAgICAgICAgICAgICAgICAgICAgKHRbdGhpcy5vcHRzLnRpbWVzdGFtcFBhcmFtXSA9IGgoKSksCiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXBwb3J0c0JpbmFyeSB8fCB0LnNpZCB8fCAodC5iNjQgPSAxKSwKICAgICAgICAgICAgICAgICAgICAodCA9IGwuZW5jb2RlKHQpKSwKICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdHMucG9ydCAmJgogICAgICAgICAgICAgICAgICAgICAgKCgiaHR0cHMiID09PSBlICYmIDQ0MyAhPT0gTnVtYmVyKHRoaXMub3B0cy5wb3J0KSkgfHwKICAgICAgICAgICAgICAgICAgICAgICAgKCJodHRwIiA9PT0gZSAmJiA4MCAhPT0gTnVtYmVyKHRoaXMub3B0cy5wb3J0KSkpICYmCiAgICAgICAgICAgICAgICAgICAgICAobiA9ICI6IiArIHRoaXMub3B0cy5wb3J0KSwKICAgICAgICAgICAgICAgICAgICB0Lmxlbmd0aCAmJiAodCA9ICI/IiArIHQpLAogICAgICAgICAgICAgICAgICAgIGUgKwogICAgICAgICAgICAgICAgICAgICAgIjovLyIgKwogICAgICAgICAgICAgICAgICAgICAgKC0xICE9PSB0aGlzLm9wdHMuaG9zdG5hbWUuaW5kZXhPZigiOiIpCiAgICAgICAgICAgICAgICAgICAgICAgID8gIlsiICsgdGhpcy5vcHRzLmhvc3RuYW1lICsgIl0iCiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5vcHRzLmhvc3RuYW1lKSArCiAgICAgICAgICAgICAgICAgICAgICBuICsKICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0cy5wYXRoICsKICAgICAgICAgICAgICAgICAgICAgIHQKICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgXSkgJiYgaShlLnByb3RvdHlwZSwgbiksCiAgICAgICAgICAgIHIgJiYgaShlLCByKSwKICAgICAgICAgICAgdQogICAgICAgICAgKTsKICAgICAgICB9KShmKTsKICAgICAgdC5leHBvcnRzID0geTsKICAgIH0sCiAgICBmdW5jdGlvbiAodCwgZSkgewogICAgICB2YXIgbiA9IE9iamVjdC5jcmVhdGUobnVsbCk7CiAgICAgIChuLm9wZW4gPSAiMCIpLAogICAgICAgIChuLmNsb3NlID0gIjEiKSwKICAgICAgICAobi5waW5nID0gIjIiKSwKICAgICAgICAobi5wb25nID0gIjMiKSwKICAgICAgICAobi5tZXNzYWdlID0gIjQiKSwKICAgICAgICAobi51cGdyYWRlID0gIjUiKSwKICAgICAgICAobi5ub29wID0gIjYiKTsKICAgICAgdmFyIHIgPSBPYmplY3QuY3JlYXRlKG51bGwpOwogICAgICBPYmplY3Qua2V5cyhuKS5mb3JFYWNoKGZ1bmN0aW9uICh0KSB7CiAgICAgICAgcltuW3RdXSA9IHQ7CiAgICAgIH0pOwogICAgICB0LmV4cG9ydHMgPSB7CiAgICAgICAgUEFDS0VUX1RZUEVTOiBuLAogICAgICAgIFBBQ0tFVF9UWVBFU19SRVZFUlNFOiByLAogICAgICAgIEVSUk9SX1BBQ0tFVDogeyB0eXBlOiAiZXJyb3IiLCBkYXRhOiAicGFyc2VyIGVycm9yIiB9LAogICAgICB9OwogICAgfSwKICAgIGZ1bmN0aW9uICh0LCBlLCBuKSB7CiAgICAgIHZhciByLAogICAgICAgIG8gPQogICAgICAgICAgIjAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6LV8iLnNwbGl0KAogICAgICAgICAgICAiIgogICAgICAgICAgKSwKICAgICAgICBpID0ge30sCiAgICAgICAgcyA9IDAsCiAgICAgICAgYyA9IDA7CiAgICAgIGZ1bmN0aW9uIGEodCkgewogICAgICAgIHZhciBlID0gIiI7CiAgICAgICAgZG8gewogICAgICAgICAgKGUgPSBvW3QgJSA2NF0gKyBlKSwgKHQgPSBNYXRoLmZsb29yKHQgLyA2NCkpOwogICAgICAgIH0gd2hpbGUgKHQgPiAwKTsKICAgICAgICByZXR1cm4gZTsKICAgICAgfQogICAgICBmdW5jdGlvbiB1KCkgewogICAgICAgIHZhciB0ID0gYSgrbmV3IERhdGUoKSk7CiAgICAgICAgcmV0dXJuIHQgIT09IHIgPyAoKHMgPSAwKSwgKHIgPSB0KSkgOiB0ICsgIi4iICsgYShzKyspOwogICAgICB9CiAgICAgIGZvciAoOyBjIDwgNjQ7IGMrKykgaVtvW2NdXSA9IGM7CiAgICAgICh1LmVuY29kZSA9IGEpLAogICAgICAgICh1LmRlY29kZSA9IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICB2YXIgZSA9IDA7CiAgICAgICAgICBmb3IgKGMgPSAwOyBjIDwgdC5sZW5ndGg7IGMrKykgZSA9IDY0ICogZSArIGlbdC5jaGFyQXQoYyldOwogICAgICAgICAgcmV0dXJuIGU7CiAgICAgICAgfSksCiAgICAgICAgKHQuZXhwb3J0cyA9IHUpOwogICAgfSwKICAgIGZ1bmN0aW9uICh0LCBlLCBuKSB7CiAgICAgIGZ1bmN0aW9uIHIodCkgewogICAgICAgIHJldHVybiAociA9CiAgICAgICAgICAiZnVuY3Rpb24iID09IHR5cGVvZiBTeW1ib2wgJiYgInN5bWJvbCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvcgogICAgICAgICAgICA/IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIHQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICA6IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICByZXR1cm4gdCAmJgogICAgICAgICAgICAgICAgICAiZnVuY3Rpb24iID09IHR5cGVvZiBTeW1ib2wgJiYKICAgICAgICAgICAgICAgICAgdC5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmCiAgICAgICAgICAgICAgICAgIHQgIT09IFN5bWJvbC5wcm90b3R5cGUKICAgICAgICAgICAgICAgICAgPyAic3ltYm9sIgogICAgICAgICAgICAgICAgICA6IHR5cGVvZiB0OwogICAgICAgICAgICAgIH0pKHQpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIG8odCwgZSkgewogICAgICAgIHZhciBuID0KICAgICAgICAgICgidW5kZWZpbmVkIiAhPSB0eXBlb2YgU3ltYm9sICYmIHRbU3ltYm9sLml0ZXJhdG9yXSkgfHwKICAgICAgICAgIHRbIkBAaXRlcmF0b3IiXTsKICAgICAgICBpZiAoIW4pIHsKICAgICAgICAgIGlmICgKICAgICAgICAgICAgQXJyYXkuaXNBcnJheSh0KSB8fAogICAgICAgICAgICAobiA9IChmdW5jdGlvbiAodCwgZSkgewogICAgICAgICAgICAgIGlmICghdCkgcmV0dXJuOwogICAgICAgICAgICAgIGlmICgic3RyaW5nIiA9PSB0eXBlb2YgdCkgcmV0dXJuIGkodCwgZSk7CiAgICAgICAgICAgICAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkuc2xpY2UoOCwgLTEpOwogICAgICAgICAgICAgICJPYmplY3QiID09PSBuICYmIHQuY29uc3RydWN0b3IgJiYgKG4gPSB0LmNvbnN0cnVjdG9yLm5hbWUpOwogICAgICAgICAgICAgIGlmICgiTWFwIiA9PT0gbiB8fCAiU2V0IiA9PT0gbikgcmV0dXJuIEFycmF5LmZyb20odCk7CiAgICAgICAgICAgICAgaWYgKAogICAgICAgICAgICAgICAgIkFyZ3VtZW50cyIgPT09IG4gfHwKICAgICAgICAgICAgICAgIC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pCiAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgcmV0dXJuIGkodCwgZSk7CiAgICAgICAgICAgIH0pKHQpKSB8fAogICAgICAgICAgICAoZSAmJiB0ICYmICJudW1iZXIiID09IHR5cGVvZiB0Lmxlbmd0aCkKICAgICAgICAgICkgewogICAgICAgICAgICBuICYmICh0ID0gbik7CiAgICAgICAgICAgIHZhciByID0gMCwKICAgICAgICAgICAgICBvID0gZnVuY3Rpb24gKCkge307CiAgICAgICAgICAgIHJldHVybiB7CiAgICAgICAgICAgICAgczogbywKICAgICAgICAgICAgICBuOiBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICByZXR1cm4gciA+PSB0Lmxlbmd0aAogICAgICAgICAgICAgICAgICA/IHsgZG9uZTogITAgfQogICAgICAgICAgICAgICAgICA6IHsgZG9uZTogITEsIHZhbHVlOiB0W3IrK10gfTsKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIGU6IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICB0aHJvdyB0OwogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgZjogbywKICAgICAgICAgICAgfTsKICAgICAgICAgIH0KICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoCiAgICAgICAgICAgICJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuIgogICAgICAgICAgKTsKICAgICAgICB9CiAgICAgICAgdmFyIHMsCiAgICAgICAgICBjID0gITAsCiAgICAgICAgICBhID0gITE7CiAgICAgICAgcmV0dXJuIHsKICAgICAgICAgIHM6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgbiA9IG4uY2FsbCh0KTsKICAgICAgICAgIH0sCiAgICAgICAgICBuOiBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgIHZhciB0ID0gbi5uZXh0KCk7CiAgICAgICAgICAgIHJldHVybiAoYyA9IHQuZG9uZSksIHQ7CiAgICAgICAgICB9LAogICAgICAgICAgZTogZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgKGEgPSAhMCksIChzID0gdCk7CiAgICAgICAgICB9LAogICAgICAgICAgZjogZnVuY3Rpb24gKCkgewogICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgIGMgfHwgbnVsbCA9PSBuLnJldHVybiB8fCBuLnJldHVybigpOwogICAgICAgICAgICB9IGZpbmFsbHkgewogICAgICAgICAgICAgIGlmIChhKSB0aHJvdyBzOwogICAgICAgICAgICB9CiAgICAgICAgICB9LAogICAgICAgIH07CiAgICAgIH0KICAgICAgZnVuY3Rpb24gaSh0LCBlKSB7CiAgICAgICAgKG51bGwgPT0gZSB8fCBlID4gdC5sZW5ndGgpICYmIChlID0gdC5sZW5ndGgpOwogICAgICAgIGZvciAodmFyIG4gPSAwLCByID0gbmV3IEFycmF5KGUpOyBuIDwgZTsgbisrKSByW25dID0gdFtuXTsKICAgICAgICByZXR1cm4gcjsKICAgICAgfQogICAgICBmdW5jdGlvbiBzKHQsIGUpIHsKICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGUubGVuZ3RoOyBuKyspIHsKICAgICAgICAgIHZhciByID0gZVtuXTsKICAgICAgICAgIChyLmVudW1lcmFibGUgPSByLmVudW1lcmFibGUgfHwgITEpLAogICAgICAgICAgICAoci5jb25maWd1cmFibGUgPSAhMCksCiAgICAgICAgICAgICJ2YWx1ZSIgaW4gciAmJiAoci53cml0YWJsZSA9ICEwKSwKICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIHIua2V5LCByKTsKICAgICAgICB9CiAgICAgIH0KICAgICAgZnVuY3Rpb24gYyh0LCBlLCBuKSB7CiAgICAgICAgcmV0dXJuIChjID0KICAgICAgICAgICJ1bmRlZmluZWQiICE9IHR5cGVvZiBSZWZsZWN0ICYmIFJlZmxlY3QuZ2V0CiAgICAgICAgICAgID8gUmVmbGVjdC5nZXQKICAgICAgICAgICAgOiBmdW5jdGlvbiAodCwgZSwgbikgewogICAgICAgICAgICAgICAgdmFyIHIgPSAoZnVuY3Rpb24gKHQsIGUpIHsKICAgICAgICAgICAgICAgICAgZm9yICgKICAgICAgICAgICAgICAgICAgICA7CiAgICAgICAgICAgICAgICAgICAgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LCBlKSAmJgogICAgICAgICAgICAgICAgICAgIG51bGwgIT09ICh0ID0gbCh0KSk7CgogICAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgICAgICByZXR1cm4gdDsKICAgICAgICAgICAgICAgIH0pKHQsIGUpOwogICAgICAgICAgICAgICAgaWYgKHIpIHsKICAgICAgICAgICAgICAgICAgdmFyIG8gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsIGUpOwogICAgICAgICAgICAgICAgICByZXR1cm4gby5nZXQgPyBvLmdldC5jYWxsKG4pIDogby52YWx1ZTsKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICB9KSh0LCBlLCBuIHx8IHQpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIGEodCwgZSkgewogICAgICAgIHJldHVybiAoYSA9CiAgICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwKICAgICAgICAgIGZ1bmN0aW9uICh0LCBlKSB7CiAgICAgICAgICAgIHJldHVybiAodC5fX3Byb3RvX18gPSBlKSwgdDsKICAgICAgICAgIH0pKHQsIGUpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHUodCkgewogICAgICAgIHZhciBlID0gKGZ1bmN0aW9uICgpIHsKICAgICAgICAgIGlmICgidW5kZWZpbmVkIiA9PSB0eXBlb2YgUmVmbGVjdCB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiAhMTsKICAgICAgICAgIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gITE7CiAgICAgICAgICBpZiAoImZ1bmN0aW9uIiA9PSB0eXBlb2YgUHJveHkpIHJldHVybiAhMDsKICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKAogICAgICAgICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KQogICAgICAgICAgICAgICksCiAgICAgICAgICAgICAgITAKICAgICAgICAgICAgKTsKICAgICAgICAgIH0gY2F0Y2ggKHQpIHsKICAgICAgICAgICAgcmV0dXJuICExOwogICAgICAgICAgfQogICAgICAgIH0pKCk7CiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsKICAgICAgICAgIHZhciBuLAogICAgICAgICAgICByID0gbCh0KTsKICAgICAgICAgIGlmIChlKSB7CiAgICAgICAgICAgIHZhciBvID0gbCh0aGlzKS5jb25zdHJ1Y3RvcjsKICAgICAgICAgICAgbiA9IFJlZmxlY3QuY29uc3RydWN0KHIsIGFyZ3VtZW50cywgbyk7CiAgICAgICAgICB9IGVsc2UgbiA9IHIuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAgICAgICAgIHJldHVybiBmKHRoaXMsIG4pOwogICAgICAgIH07CiAgICAgIH0KICAgICAgZnVuY3Rpb24gZih0LCBlKSB7CiAgICAgICAgaWYgKGUgJiYgKCJvYmplY3QiID09PSByKGUpIHx8ICJmdW5jdGlvbiIgPT0gdHlwZW9mIGUpKSByZXR1cm4gZTsKICAgICAgICBpZiAodm9pZCAwICE9PSBlKQogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigKICAgICAgICAgICAgIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkIgogICAgICAgICAgKTsKICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICBpZiAodm9pZCAwID09PSB0KQogICAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoCiAgICAgICAgICAgICAgInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZCIKICAgICAgICAgICAgKTsKICAgICAgICAgIHJldHVybiB0OwogICAgICAgIH0pKHQpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIGwodCkgewogICAgICAgIHJldHVybiAobCA9IE9iamVjdC5zZXRQcm90b3R5cGVPZgogICAgICAgICAgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YKICAgICAgICAgIDogZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICByZXR1cm4gdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpOwogICAgICAgICAgICB9KSh0KTsKICAgICAgfQogICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgIl9fZXNNb2R1bGUiLCB7IHZhbHVlOiAhMCB9KSwKICAgICAgICAoZS5Tb2NrZXQgPSB2b2lkIDApOwogICAgICB2YXIgcCA9IG4oNiksCiAgICAgICAgaCA9IG4oMTYpLAogICAgICAgIHkgPSBuKDE3KSwKICAgICAgICBkID0gT2JqZWN0LmZyZWV6ZSh7CiAgICAgICAgICBjb25uZWN0OiAxLAogICAgICAgICAgY29ubmVjdF9lcnJvcjogMSwKICAgICAgICAgIGRpc2Nvbm5lY3Q6IDEsCiAgICAgICAgICBkaXNjb25uZWN0aW5nOiAxLAogICAgICAgICAgbmV3TGlzdGVuZXI6IDEsCiAgICAgICAgICByZW1vdmVMaXN0ZW5lcjogMSwKICAgICAgICB9KSwKICAgICAgICB2ID0gKGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAhKGZ1bmN0aW9uICh0LCBlKSB7CiAgICAgICAgICAgIGlmICgiZnVuY3Rpb24iICE9IHR5cGVvZiBlICYmIG51bGwgIT09IGUpCiAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigKICAgICAgICAgICAgICAgICJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiIKICAgICAgICAgICAgICApOwogICAgICAgICAgICAodC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGUgJiYgZS5wcm90b3R5cGUsIHsKICAgICAgICAgICAgICBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogdCwgd3JpdGFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwIH0sCiAgICAgICAgICAgIH0pKSwKICAgICAgICAgICAgICBlICYmIGEodCwgZSk7CiAgICAgICAgICB9KShmLCB0KTsKICAgICAgICAgIHZhciBlLAogICAgICAgICAgICBuLAogICAgICAgICAgICByLAogICAgICAgICAgICBpID0gdShmKTsKICAgICAgICAgIGZ1bmN0aW9uIGYodCwgZSwgbikgewogICAgICAgICAgICB2YXIgcjsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAoZnVuY3Rpb24gKHQsIGUpIHsKICAgICAgICAgICAgICAgIGlmICghKHQgaW5zdGFuY2VvZiBlKSkKICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uIik7CiAgICAgICAgICAgICAgfSkodGhpcywgZiksCiAgICAgICAgICAgICAgKChyID0gaS5jYWxsKHRoaXMpKS5jb25uZWN0ZWQgPSAhMSksCiAgICAgICAgICAgICAgKHIuZGlzY29ubmVjdGVkID0gITApLAogICAgICAgICAgICAgIChyLnJlY2VpdmVCdWZmZXIgPSBbXSksCiAgICAgICAgICAgICAgKHIuc2VuZEJ1ZmZlciA9IFtdKSwKICAgICAgICAgICAgICAoci5pZHMgPSAwKSwKICAgICAgICAgICAgICAoci5hY2tzID0ge30pLAogICAgICAgICAgICAgIChyLmZsYWdzID0ge30pLAogICAgICAgICAgICAgIChyLmlvID0gdCksCiAgICAgICAgICAgICAgKHIubnNwID0gZSksCiAgICAgICAgICAgICAgbiAmJiBuLmF1dGggJiYgKHIuYXV0aCA9IG4uYXV0aCksCiAgICAgICAgICAgICAgci5pby5fYXV0b0Nvbm5lY3QgJiYgci5vcGVuKCksCiAgICAgICAgICAgICAgcgogICAgICAgICAgICApOwogICAgICAgICAgfQogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgKGUgPSBmKSwKICAgICAgICAgICAgKG4gPSBbCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAic3ViRXZlbnRzIiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zdWJzKSB7CiAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmlvOwogICAgICAgICAgICAgICAgICAgIHRoaXMuc3VicyA9IFsKICAgICAgICAgICAgICAgICAgICAgICgwLCBoLm9uKSh0LCAib3BlbiIsIHRoaXMub25vcGVuLmJpbmQodGhpcykpLAogICAgICAgICAgICAgICAgICAgICAgKDAsIGgub24pKHQsICJwYWNrZXQiLCB0aGlzLm9ucGFja2V0LmJpbmQodGhpcykpLAogICAgICAgICAgICAgICAgICAgICAgKDAsIGgub24pKHQsICJlcnJvciIsIHRoaXMub25lcnJvci5iaW5kKHRoaXMpKSwKICAgICAgICAgICAgICAgICAgICAgICgwLCBoLm9uKSh0LCAiY2xvc2UiLCB0aGlzLm9uY2xvc2UuYmluZCh0aGlzKSksCiAgICAgICAgICAgICAgICAgICAgXTsKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogImFjdGl2ZSIsCiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgcmV0dXJuICEhdGhpcy5zdWJzOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogImNvbm5lY3QiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RlZCB8fAogICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3ViRXZlbnRzKCksCiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlvLl9yZWNvbm5lY3RpbmcgfHwgdGhpcy5pby5vcGVuKCksCiAgICAgICAgICAgICAgICAgICAgICAib3BlbiIgPT09IHRoaXMuaW8uX3JlYWR5U3RhdGUgJiYgdGhpcy5vbm9wZW4oKSksCiAgICAgICAgICAgICAgICAgICAgdGhpcwogICAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogIm9wZW4iLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdCgpOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogInNlbmQiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgZm9yICgKICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGFyZ3VtZW50cy5sZW5ndGgsIGUgPSBuZXcgQXJyYXkodCksIG4gPSAwOwogICAgICAgICAgICAgICAgICAgIG4gPCB0OwogICAgICAgICAgICAgICAgICAgIG4rKwogICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgZVtuXSA9IGFyZ3VtZW50c1tuXTsKICAgICAgICAgICAgICAgICAgcmV0dXJuIGUudW5zaGlmdCgibWVzc2FnZSIpLCB0aGlzLmVtaXQuYXBwbHkodGhpcywgZSksIHRoaXM7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAiZW1pdCIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgICAgaWYgKGQuaGFzT3duUHJvcGVydHkodCkpCiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCciJyArIHQgKyAnIiBpcyBhIHJlc2VydmVkIGV2ZW50IG5hbWUnKTsKICAgICAgICAgICAgICAgICAgZm9yICgKICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IGFyZ3VtZW50cy5sZW5ndGgsCiAgICAgICAgICAgICAgICAgICAgICBuID0gbmV3IEFycmF5KGUgPiAxID8gZSAtIDEgOiAwKSwKICAgICAgICAgICAgICAgICAgICAgIHIgPSAxOwogICAgICAgICAgICAgICAgICAgIHIgPCBlOwogICAgICAgICAgICAgICAgICAgIHIrKwogICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgbltyIC0gMV0gPSBhcmd1bWVudHNbcl07CiAgICAgICAgICAgICAgICAgIG4udW5zaGlmdCh0KTsKICAgICAgICAgICAgICAgICAgdmFyIG8gPSB7IHR5cGU6IHAuUGFja2V0VHlwZS5FVkVOVCwgZGF0YTogbiwgb3B0aW9uczoge30gfTsKICAgICAgICAgICAgICAgICAgKG8ub3B0aW9ucy5jb21wcmVzcyA9ICExICE9PSB0aGlzLmZsYWdzLmNvbXByZXNzKSwKICAgICAgICAgICAgICAgICAgICAiZnVuY3Rpb24iID09IHR5cGVvZiBuW24ubGVuZ3RoIC0gMV0gJiYKICAgICAgICAgICAgICAgICAgICAgICgodGhpcy5hY2tzW3RoaXMuaWRzXSA9IG4ucG9wKCkpLCAoby5pZCA9IHRoaXMuaWRzKyspKTsKICAgICAgICAgICAgICAgICAgdmFyIGkgPQogICAgICAgICAgICAgICAgICAgICAgdGhpcy5pby5lbmdpbmUgJiYKICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW8uZW5naW5lLnRyYW5zcG9ydCAmJgogICAgICAgICAgICAgICAgICAgICAgdGhpcy5pby5lbmdpbmUudHJhbnNwb3J0LndyaXRhYmxlLAogICAgICAgICAgICAgICAgICAgIHMgPSB0aGlzLmZsYWdzLnZvbGF0aWxlICYmICghaSB8fCAhdGhpcy5jb25uZWN0ZWQpOwogICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgIHMgfHwKICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmNvbm5lY3RlZAogICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucGFja2V0KG8pCiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5zZW5kQnVmZmVyLnB1c2gobykpLAogICAgICAgICAgICAgICAgICAgICh0aGlzLmZsYWdzID0ge30pLAogICAgICAgICAgICAgICAgICAgIHRoaXMKICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJwYWNrZXQiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICAgICh0Lm5zcCA9IHRoaXMubnNwKSwgdGhpcy5pby5fcGFja2V0KHQpOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogIm9ub3BlbiIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXM7CiAgICAgICAgICAgICAgICAgICJmdW5jdGlvbiIgPT0gdHlwZW9mIHRoaXMuYXV0aAogICAgICAgICAgICAgICAgICAgID8gdGhpcy5hdXRoKGZ1bmN0aW9uIChlKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHQucGFja2V0KHsgdHlwZTogcC5QYWNrZXRUeXBlLkNPTk5FQ1QsIGRhdGE6IGUgfSk7CiAgICAgICAgICAgICAgICAgICAgICB9KQogICAgICAgICAgICAgICAgICAgIDogdGhpcy5wYWNrZXQoewogICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBwLlBhY2tldFR5cGUuQ09OTkVDVCwKICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5hdXRoLAogICAgICAgICAgICAgICAgICAgICAgfSk7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAib25lcnJvciIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0ZWQgfHwgdGhpcy5lbWl0UmVzZXJ2ZWQoImNvbm5lY3RfZXJyb3IiLCB0KTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJvbmNsb3NlIiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgICAodGhpcy5jb25uZWN0ZWQgPSAhMSksCiAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGlzY29ubmVjdGVkID0gITApLAogICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmlkLAogICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdFJlc2VydmVkKCJkaXNjb25uZWN0IiwgdCk7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAib25wYWNrZXQiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICAgIGlmICh0Lm5zcCA9PT0gdGhpcy5uc3ApCiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0LnR5cGUpIHsKICAgICAgICAgICAgICAgICAgICAgIGNhc2UgcC5QYWNrZXRUeXBlLkNPTk5FQ1Q6CiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0LmRhdGEgJiYgdC5kYXRhLnNpZCkgewogICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlID0gdC5kYXRhLnNpZDsKICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uY29ubmVjdChlKTsKICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlCiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAiY29ubmVjdF9lcnJvciIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRXJyb3IoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJJdCBzZWVtcyB5b3UgYXJlIHRyeWluZyB0byByZWFjaCBhIFNvY2tldC5JTyBzZXJ2ZXIgaW4gdjIueCB3aXRoIGEgdjMueCBjbGllbnQsIGJ1dCB0aGV5IGFyZSBub3QgY29tcGF0aWJsZSAobW9yZSBpbmZvcm1hdGlvbiBoZXJlOiBodHRwczovL3NvY2tldC5pby9kb2NzL3YzL21pZ3JhdGluZy1mcm9tLTIteC10by0zLTAvKSIKICAgICAgICAgICAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgICAgICAgIGNhc2UgcC5QYWNrZXRUeXBlLkVWRU5UOgogICAgICAgICAgICAgICAgICAgICAgY2FzZSBwLlBhY2tldFR5cGUuQklOQVJZX0VWRU5UOgogICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uZXZlbnQodCk7CiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgICAgICAgY2FzZSBwLlBhY2tldFR5cGUuQUNLOgogICAgICAgICAgICAgICAgICAgICAgY2FzZSBwLlBhY2tldFR5cGUuQklOQVJZX0FDSzoKICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbmFjayh0KTsKICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICAgICAgICBjYXNlIHAuUGFja2V0VHlwZS5ESVNDT05ORUNUOgogICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uZGlzY29ubmVjdCgpOwogICAgICAgICAgICAgICAgICAgICAgICBicmVhazsKICAgICAgICAgICAgICAgICAgICAgIGNhc2UgcC5QYWNrZXRUeXBlLkNPTk5FQ1RfRVJST1I6CiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gbmV3IEVycm9yKHQuZGF0YS5tZXNzYWdlKTsKICAgICAgICAgICAgICAgICAgICAgICAgKG4uZGF0YSA9IHQuZGF0YS5kYXRhKSwKICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRSZXNlcnZlZCgiY29ubmVjdF9lcnJvciIsIG4pOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJvbmV2ZW50IiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgICB2YXIgZSA9IHQuZGF0YSB8fCBbXTsKICAgICAgICAgICAgICAgICAgbnVsbCAhPSB0LmlkICYmIGUucHVzaCh0aGlzLmFjayh0LmlkKSksCiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0ZWQKICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5lbWl0RXZlbnQoZSkKICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5yZWNlaXZlQnVmZmVyLnB1c2goT2JqZWN0LmZyZWV6ZShlKSk7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAiZW1pdEV2ZW50IiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgICBpZiAodGhpcy5fYW55TGlzdGVuZXJzICYmIHRoaXMuX2FueUxpc3RlbmVycy5sZW5ndGgpIHsKICAgICAgICAgICAgICAgICAgICB2YXIgZSwKICAgICAgICAgICAgICAgICAgICAgIG4gPSBvKHRoaXMuX2FueUxpc3RlbmVycy5zbGljZSgpKTsKICAgICAgICAgICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgICAgICAgZm9yIChuLnMoKTsgIShlID0gbi5uKCkpLmRvbmU7ICkgZS52YWx1ZS5hcHBseSh0aGlzLCB0KTsKICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICh0KSB7CiAgICAgICAgICAgICAgICAgICAgICBuLmUodCk7CiAgICAgICAgICAgICAgICAgICAgfSBmaW5hbGx5IHsKICAgICAgICAgICAgICAgICAgICAgIG4uZigpOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICBjKGwoZi5wcm90b3R5cGUpLCAiZW1pdCIsIHRoaXMpLmFwcGx5KHRoaXMsIHQpOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogImFjayIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgICAgdmFyIGUgPSB0aGlzLAogICAgICAgICAgICAgICAgICAgIG4gPSAhMTsKICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgICBpZiAoIW4pIHsKICAgICAgICAgICAgICAgICAgICAgIG4gPSAhMDsKICAgICAgICAgICAgICAgICAgICAgIGZvciAoCiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gYXJndW1lbnRzLmxlbmd0aCwgbyA9IG5ldyBBcnJheShyKSwgaSA9IDA7CiAgICAgICAgICAgICAgICAgICAgICAgIGkgPCByOwogICAgICAgICAgICAgICAgICAgICAgICBpKysKICAgICAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICAgICAgICAgb1tpXSA9IGFyZ3VtZW50c1tpXTsKICAgICAgICAgICAgICAgICAgICAgIGUucGFja2V0KHsgdHlwZTogcC5QYWNrZXRUeXBlLkFDSywgaWQ6IHQsIGRhdGE6IG8gfSk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICB9OwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogIm9uYWNrIiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXMuYWNrc1t0LmlkXTsKICAgICAgICAgICAgICAgICAgImZ1bmN0aW9uIiA9PSB0eXBlb2YgZSAmJgogICAgICAgICAgICAgICAgICAgIChlLmFwcGx5KHRoaXMsIHQuZGF0YSksIGRlbGV0ZSB0aGlzLmFja3NbdC5pZF0pOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogIm9uY29ubmVjdCIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgICAgKHRoaXMuaWQgPSB0KSwKICAgICAgICAgICAgICAgICAgICAodGhpcy5jb25uZWN0ZWQgPSAhMCksCiAgICAgICAgICAgICAgICAgICAgKHRoaXMuZGlzY29ubmVjdGVkID0gITEpLAogICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdEJ1ZmZlcmVkKCksCiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0UmVzZXJ2ZWQoImNvbm5lY3QiKTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJlbWl0QnVmZmVyZWQiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzOwogICAgICAgICAgICAgICAgICB0aGlzLnJlY2VpdmVCdWZmZXIuZm9yRWFjaChmdW5jdGlvbiAoZSkgewogICAgICAgICAgICAgICAgICAgIHJldHVybiB0LmVtaXRFdmVudChlKTsKICAgICAgICAgICAgICAgICAgfSksCiAgICAgICAgICAgICAgICAgICAgKHRoaXMucmVjZWl2ZUJ1ZmZlciA9IFtdKSwKICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRCdWZmZXIuZm9yRWFjaChmdW5jdGlvbiAoZSkgewogICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQucGFja2V0KGUpOwogICAgICAgICAgICAgICAgICAgIH0pLAogICAgICAgICAgICAgICAgICAgICh0aGlzLnNlbmRCdWZmZXIgPSBbXSk7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAib25kaXNjb25uZWN0IiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpLCB0aGlzLm9uY2xvc2UoImlvIHNlcnZlciBkaXNjb25uZWN0Iik7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAiZGVzdHJveSIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICB0aGlzLnN1YnMgJiYKICAgICAgICAgICAgICAgICAgICAodGhpcy5zdWJzLmZvckVhY2goZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0KCk7CiAgICAgICAgICAgICAgICAgICAgfSksCiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3VicyA9IHZvaWQgMCkpLAogICAgICAgICAgICAgICAgICAgIHRoaXMuaW8uX2Rlc3Ryb3kodGhpcyk7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAiZGlzY29ubmVjdCIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGVkICYmCiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhY2tldCh7IHR5cGU6IHAuUGFja2V0VHlwZS5ESVNDT05ORUNUIH0pLAogICAgICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpLAogICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGVkICYmIHRoaXMub25jbG9zZSgiaW8gY2xpZW50IGRpc2Nvbm5lY3QiKSwKICAgICAgICAgICAgICAgICAgICB0aGlzCiAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAiY2xvc2UiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzY29ubmVjdCgpOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogImNvbXByZXNzIiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMuZmxhZ3MuY29tcHJlc3MgPSB0KSwgdGhpczsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJ2b2xhdGlsZSIsCiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgcmV0dXJuICh0aGlzLmZsYWdzLnZvbGF0aWxlID0gITApLCB0aGlzOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogIm9uQW55IiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICh0aGlzLl9hbnlMaXN0ZW5lcnMgPSB0aGlzLl9hbnlMaXN0ZW5lcnMgfHwgW10pLAogICAgICAgICAgICAgICAgICAgIHRoaXMuX2FueUxpc3RlbmVycy5wdXNoKHQpLAogICAgICAgICAgICAgICAgICAgIHRoaXMKICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJwcmVwZW5kQW55IiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgICh0aGlzLl9hbnlMaXN0ZW5lcnMgPSB0aGlzLl9hbnlMaXN0ZW5lcnMgfHwgW10pLAogICAgICAgICAgICAgICAgICAgIHRoaXMuX2FueUxpc3RlbmVycy51bnNoaWZ0KHQpLAogICAgICAgICAgICAgICAgICAgIHRoaXMKICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJvZmZBbnkiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fYW55TGlzdGVuZXJzKSByZXR1cm4gdGhpczsKICAgICAgICAgICAgICAgICAgaWYgKHQpIHsKICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBlID0gdGhpcy5fYW55TGlzdGVuZXJzLCBuID0gMDsgbiA8IGUubGVuZ3RoOyBuKyspCiAgICAgICAgICAgICAgICAgICAgICBpZiAodCA9PT0gZVtuXSkgcmV0dXJuIGUuc3BsaWNlKG4sIDEpLCB0aGlzOwogICAgICAgICAgICAgICAgICB9IGVsc2UgdGhpcy5fYW55TGlzdGVuZXJzID0gW107CiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogImxpc3RlbmVyc0FueSIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYW55TGlzdGVuZXJzIHx8IFtdOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICBdKSAmJiBzKGUucHJvdG90eXBlLCBuKSwKICAgICAgICAgICAgciAmJiBzKGUsIHIpLAogICAgICAgICAgICBmCiAgICAgICAgICApOwogICAgICAgIH0pKHkuU3RyaWN0RXZlbnRFbWl0dGVyKTsKICAgICAgZS5Tb2NrZXQgPSB2OwogICAgfSwKICAgIGZ1bmN0aW9uICh0LCBlLCBuKSB7CiAgICAgIGZ1bmN0aW9uIHIodCkgewogICAgICAgIHJldHVybiAociA9CiAgICAgICAgICAiZnVuY3Rpb24iID09IHR5cGVvZiBTeW1ib2wgJiYgInN5bWJvbCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvcgogICAgICAgICAgICA/IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIHQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICA6IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICByZXR1cm4gdCAmJgogICAgICAgICAgICAgICAgICAiZnVuY3Rpb24iID09IHR5cGVvZiBTeW1ib2wgJiYKICAgICAgICAgICAgICAgICAgdC5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmCiAgICAgICAgICAgICAgICAgIHQgIT09IFN5bWJvbC5wcm90b3R5cGUKICAgICAgICAgICAgICAgICAgPyAic3ltYm9sIgogICAgICAgICAgICAgICAgICA6IHR5cGVvZiB0OwogICAgICAgICAgICAgIH0pKHQpOwogICAgICB9CiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCAiX19lc01vZHVsZSIsIHsgdmFsdWU6ICEwIH0pLAogICAgICAgIChlLmhhc0JpbmFyeSA9IGUuaXNCaW5hcnkgPSB2b2lkIDApOwogICAgICB2YXIgbyA9ICJmdW5jdGlvbiIgPT0gdHlwZW9mIEFycmF5QnVmZmVyLAogICAgICAgIGkgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLAogICAgICAgIHMgPQogICAgICAgICAgImZ1bmN0aW9uIiA9PSB0eXBlb2YgQmxvYiB8fAogICAgICAgICAgKCJ1bmRlZmluZWQiICE9IHR5cGVvZiBCbG9iICYmCiAgICAgICAgICAgICJbb2JqZWN0IEJsb2JDb25zdHJ1Y3Rvcl0iID09PSBpLmNhbGwoQmxvYikpLAogICAgICAgIGMgPQogICAgICAgICAgImZ1bmN0aW9uIiA9PSB0eXBlb2YgRmlsZSB8fAogICAgICAgICAgKCJ1bmRlZmluZWQiICE9IHR5cGVvZiBGaWxlICYmCiAgICAgICAgICAgICJbb2JqZWN0IEZpbGVDb25zdHJ1Y3Rvcl0iID09PSBpLmNhbGwoRmlsZSkpOwogICAgICBmdW5jdGlvbiBhKHQpIHsKICAgICAgICByZXR1cm4gKAogICAgICAgICAgKG8gJiYKICAgICAgICAgICAgKHQgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciB8fAogICAgICAgICAgICAgIChmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgcmV0dXJuICJmdW5jdGlvbiIgPT0gdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldwogICAgICAgICAgICAgICAgICA/IEFycmF5QnVmZmVyLmlzVmlldyh0KQogICAgICAgICAgICAgICAgICA6IHQuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXI7CiAgICAgICAgICAgICAgfSkodCkpKSB8fAogICAgICAgICAgKHMgJiYgdCBpbnN0YW5jZW9mIEJsb2IpIHx8CiAgICAgICAgICAoYyAmJiB0IGluc3RhbmNlb2YgRmlsZSkKICAgICAgICApOwogICAgICB9CiAgICAgIChlLmlzQmluYXJ5ID0gYSksCiAgICAgICAgKGUuaGFzQmluYXJ5ID0gZnVuY3Rpb24gdChlLCBuKSB7CiAgICAgICAgICBpZiAoIWUgfHwgIm9iamVjdCIgIT09IHIoZSkpIHJldHVybiAhMTsKICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSB7CiAgICAgICAgICAgIGZvciAodmFyIG8gPSAwLCBpID0gZS5sZW5ndGg7IG8gPCBpOyBvKyspIGlmICh0KGVbb10pKSByZXR1cm4gITA7CiAgICAgICAgICAgIHJldHVybiAhMTsKICAgICAgICAgIH0KICAgICAgICAgIGlmIChhKGUpKSByZXR1cm4gITA7CiAgICAgICAgICBpZiAoCiAgICAgICAgICAgIGUudG9KU09OICYmCiAgICAgICAgICAgICJmdW5jdGlvbiIgPT0gdHlwZW9mIGUudG9KU09OICYmCiAgICAgICAgICAgIDEgPT09IGFyZ3VtZW50cy5sZW5ndGgKICAgICAgICAgICkKICAgICAgICAgICAgcmV0dXJuIHQoZS50b0pTT04oKSwgITApOwogICAgICAgICAgZm9yICh2YXIgcyBpbiBlKQogICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsIHMpICYmIHQoZVtzXSkpCiAgICAgICAgICAgICAgcmV0dXJuICEwOwogICAgICAgICAgcmV0dXJuICExOwogICAgICAgIH0pOwogICAgfSwKICAgIGZ1bmN0aW9uICh0LCBlLCBuKSB7CiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCAiX19lc01vZHVsZSIsIHsgdmFsdWU6ICEwIH0pLAogICAgICAgIChlLm9uID0gdm9pZCAwKSwKICAgICAgICAoZS5vbiA9IGZ1bmN0aW9uICh0LCBlLCBuKSB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICB0Lm9uKGUsIG4pLAogICAgICAgICAgICBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgdC5vZmYoZSwgbik7CiAgICAgICAgICAgIH0KICAgICAgICAgICk7CiAgICAgICAgfSk7CiAgICB9LAogICAgZnVuY3Rpb24gKHQsIGUsIG4pIHsKICAgICAgZnVuY3Rpb24gcih0KSB7CiAgICAgICAgcmV0dXJuIChyID0KICAgICAgICAgICJmdW5jdGlvbiIgPT0gdHlwZW9mIFN5bWJvbCAmJiAic3ltYm9sIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yCiAgICAgICAgICAgID8gZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgdDsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIDogZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgIHJldHVybiB0ICYmCiAgICAgICAgICAgICAgICAgICJmdW5jdGlvbiIgPT0gdHlwZW9mIFN5bWJvbCAmJgogICAgICAgICAgICAgICAgICB0LmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYKICAgICAgICAgICAgICAgICAgdCAhPT0gU3ltYm9sLnByb3RvdHlwZQogICAgICAgICAgICAgICAgICA/ICJzeW1ib2wiCiAgICAgICAgICAgICAgICAgIDogdHlwZW9mIHQ7CiAgICAgICAgICAgICAgfSkodCk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gbyh0LCBlKSB7CiAgICAgICAgaWYgKCEodCBpbnN0YW5jZW9mIGUpKQogICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uIik7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gaSh0LCBlKSB7CiAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBlLmxlbmd0aDsgbisrKSB7CiAgICAgICAgICB2YXIgciA9IGVbbl07CiAgICAgICAgICAoci5lbnVtZXJhYmxlID0gci5lbnVtZXJhYmxlIHx8ICExKSwKICAgICAgICAgICAgKHIuY29uZmlndXJhYmxlID0gITApLAogICAgICAgICAgICAidmFsdWUiIGluIHIgJiYgKHIud3JpdGFibGUgPSAhMCksCiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LCByLmtleSwgcik7CiAgICAgICAgfQogICAgICB9CiAgICAgIGZ1bmN0aW9uIHModCwgZSwgbikgewogICAgICAgIHJldHVybiAocyA9CiAgICAgICAgICAidW5kZWZpbmVkIiAhPSB0eXBlb2YgUmVmbGVjdCAmJiBSZWZsZWN0LmdldAogICAgICAgICAgICA/IFJlZmxlY3QuZ2V0CiAgICAgICAgICAgIDogZnVuY3Rpb24gKHQsIGUsIG4pIHsKICAgICAgICAgICAgICAgIHZhciByID0gKGZ1bmN0aW9uICh0LCBlKSB7CiAgICAgICAgICAgICAgICAgIGZvciAoCiAgICAgICAgICAgICAgICAgICAgOwogICAgICAgICAgICAgICAgICAgICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCwgZSkgJiYKICAgICAgICAgICAgICAgICAgICBudWxsICE9PSAodCA9IGYodCkpOwoKICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgcmV0dXJuIHQ7CiAgICAgICAgICAgICAgICB9KSh0LCBlKTsKICAgICAgICAgICAgICAgIGlmIChyKSB7CiAgICAgICAgICAgICAgICAgIHZhciBvID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLCBlKTsKICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uZ2V0ID8gby5nZXQuY2FsbChuKSA6IG8udmFsdWU7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgfSkodCwgZSwgbiB8fCB0KTsKICAgICAgfQogICAgICBmdW5jdGlvbiBjKHQsIGUpIHsKICAgICAgICByZXR1cm4gKGMgPQogICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8CiAgICAgICAgICBmdW5jdGlvbiAodCwgZSkgewogICAgICAgICAgICByZXR1cm4gKHQuX19wcm90b19fID0gZSksIHQ7CiAgICAgICAgICB9KSh0LCBlKTsKICAgICAgfQogICAgICBmdW5jdGlvbiBhKHQpIHsKICAgICAgICB2YXIgZSA9IChmdW5jdGlvbiAoKSB7CiAgICAgICAgICBpZiAoInVuZGVmaW5lZCIgPT0gdHlwZW9mIFJlZmxlY3QgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gITE7CiAgICAgICAgICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuICExOwogICAgICAgICAgaWYgKCJmdW5jdGlvbiIgPT0gdHlwZW9mIFByb3h5KSByZXR1cm4gITA7CiAgICAgICAgICB0cnkgewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbCgKICAgICAgICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkKICAgICAgICAgICAgICApLAogICAgICAgICAgICAgICEwCiAgICAgICAgICAgICk7CiAgICAgICAgICB9IGNhdGNoICh0KSB7CiAgICAgICAgICAgIHJldHVybiAhMTsKICAgICAgICAgIH0KICAgICAgICB9KSgpOwogICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7CiAgICAgICAgICB2YXIgbiwKICAgICAgICAgICAgciA9IGYodCk7CiAgICAgICAgICBpZiAoZSkgewogICAgICAgICAgICB2YXIgbyA9IGYodGhpcykuY29uc3RydWN0b3I7CiAgICAgICAgICAgIG4gPSBSZWZsZWN0LmNvbnN0cnVjdChyLCBhcmd1bWVudHMsIG8pOwogICAgICAgICAgfSBlbHNlIG4gPSByLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgICByZXR1cm4gdSh0aGlzLCBuKTsKICAgICAgICB9OwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHUodCwgZSkgewogICAgICAgIGlmIChlICYmICgib2JqZWN0IiA9PT0gcihlKSB8fCAiZnVuY3Rpb24iID09IHR5cGVvZiBlKSkgcmV0dXJuIGU7CiAgICAgICAgaWYgKHZvaWQgMCAhPT0gZSkKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoCiAgICAgICAgICAgICJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZCIKICAgICAgICAgICk7CiAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAodCkgewogICAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkKICAgICAgICAgICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKAogICAgICAgICAgICAgICJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWQiCiAgICAgICAgICAgICk7CiAgICAgICAgICByZXR1cm4gdDsKICAgICAgICB9KSh0KTsKICAgICAgfQogICAgICBmdW5jdGlvbiBmKHQpIHsKICAgICAgICByZXR1cm4gKGYgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YKICAgICAgICAgID8gT2JqZWN0LmdldFByb3RvdHlwZU9mCiAgICAgICAgICA6IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgcmV0dXJuIHQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZih0KTsKICAgICAgICAgICAgfSkodCk7CiAgICAgIH0KICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogITAgfSksCiAgICAgICAgKGUuU3RyaWN0RXZlbnRFbWl0dGVyID0gdm9pZCAwKTsKICAgICAgdmFyIGwgPSAoZnVuY3Rpb24gKHQpIHsKICAgICAgICAhKGZ1bmN0aW9uICh0LCBlKSB7CiAgICAgICAgICBpZiAoImZ1bmN0aW9uIiAhPSB0eXBlb2YgZSAmJiBudWxsICE9PSBlKQogICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKAogICAgICAgICAgICAgICJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiIKICAgICAgICAgICAgKTsKICAgICAgICAgICh0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoZSAmJiBlLnByb3RvdHlwZSwgewogICAgICAgICAgICBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogdCwgd3JpdGFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwIH0sCiAgICAgICAgICB9KSksCiAgICAgICAgICAgIGUgJiYgYyh0LCBlKTsKICAgICAgICB9KShsLCB0KTsKICAgICAgICB2YXIgZSwKICAgICAgICAgIG4sCiAgICAgICAgICByLAogICAgICAgICAgdSA9IGEobCk7CiAgICAgICAgZnVuY3Rpb24gbCgpIHsKICAgICAgICAgIHJldHVybiBvKHRoaXMsIGwpLCB1LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgfQogICAgICAgIHJldHVybiAoCiAgICAgICAgICAoZSA9IGwpLAogICAgICAgICAgKG4gPSBbCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICBrZXk6ICJvbiIsCiAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh0LCBlKSB7CiAgICAgICAgICAgICAgICByZXR1cm4gcyhmKGwucHJvdG90eXBlKSwgIm9uIiwgdGhpcykuY2FsbCh0aGlzLCB0LCBlKSwgdGhpczsKICAgICAgICAgICAgICB9LAogICAgICAgICAgICB9LAogICAgICAgICAgICB7CiAgICAgICAgICAgICAga2V5OiAib25jZSIsCiAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh0LCBlKSB7CiAgICAgICAgICAgICAgICByZXR1cm4gcyhmKGwucHJvdG90eXBlKSwgIm9uY2UiLCB0aGlzKS5jYWxsKHRoaXMsIHQsIGUpLCB0aGlzOwogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICBrZXk6ICJlbWl0IiwKICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgIGZvciAoCiAgICAgICAgICAgICAgICAgIHZhciBlLAogICAgICAgICAgICAgICAgICAgIG4gPSBhcmd1bWVudHMubGVuZ3RoLAogICAgICAgICAgICAgICAgICAgIHIgPSBuZXcgQXJyYXkobiA+IDEgPyBuIC0gMSA6IDApLAogICAgICAgICAgICAgICAgICAgIG8gPSAxOwogICAgICAgICAgICAgICAgICBvIDwgbjsKICAgICAgICAgICAgICAgICAgbysrCiAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgIHJbbyAtIDFdID0gYXJndW1lbnRzW29dOwogICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgKGUgPSBzKGYobC5wcm90b3R5cGUpLCAiZW1pdCIsIHRoaXMpKS5jYWxsLmFwcGx5KAogICAgICAgICAgICAgICAgICAgIGUsCiAgICAgICAgICAgICAgICAgICAgW3RoaXMsIHRdLmNvbmNhdChyKQogICAgICAgICAgICAgICAgICApLAogICAgICAgICAgICAgICAgICB0aGlzCiAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgIH0sCiAgICAgICAgICAgIHsKICAgICAgICAgICAgICBrZXk6ICJlbWl0UmVzZXJ2ZWQiLAogICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgZm9yICgKICAgICAgICAgICAgICAgICAgdmFyIGUsCiAgICAgICAgICAgICAgICAgICAgbiA9IGFyZ3VtZW50cy5sZW5ndGgsCiAgICAgICAgICAgICAgICAgICAgciA9IG5ldyBBcnJheShuID4gMSA/IG4gLSAxIDogMCksCiAgICAgICAgICAgICAgICAgICAgbyA9IDE7CiAgICAgICAgICAgICAgICAgIG8gPCBuOwogICAgICAgICAgICAgICAgICBvKysKICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICAgcltvIC0gMV0gPSBhcmd1bWVudHNbb107CiAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAoZSA9IHMoZihsLnByb3RvdHlwZSksICJlbWl0IiwgdGhpcykpLmNhbGwuYXBwbHkoCiAgICAgICAgICAgICAgICAgICAgZSwKICAgICAgICAgICAgICAgICAgICBbdGhpcywgdF0uY29uY2F0KHIpCiAgICAgICAgICAgICAgICAgICksCiAgICAgICAgICAgICAgICAgIHRoaXMKICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSwKICAgICAgICAgICAgewogICAgICAgICAgICAgIGtleTogImxpc3RlbmVycyIsCiAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICByZXR1cm4gcyhmKGwucHJvdG90eXBlKSwgImxpc3RlbmVycyIsIHRoaXMpLmNhbGwodGhpcywgdCk7CiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSwKICAgICAgICAgIF0pICYmIGkoZS5wcm90b3R5cGUsIG4pLAogICAgICAgICAgciAmJiBpKGUsIHIpLAogICAgICAgICAgbAogICAgICAgICk7CiAgICAgIH0pKG4oMikpOwogICAgICBlLlN0cmljdEV2ZW50RW1pdHRlciA9IGw7CiAgICB9LAogICAgZnVuY3Rpb24gKHQsIGUsIG4pIHsKICAgICAgZnVuY3Rpb24gcih0KSB7CiAgICAgICAgcmV0dXJuIChyID0KICAgICAgICAgICJmdW5jdGlvbiIgPT0gdHlwZW9mIFN5bWJvbCAmJiAic3ltYm9sIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yCiAgICAgICAgICAgID8gZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgdDsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIDogZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgIHJldHVybiB0ICYmCiAgICAgICAgICAgICAgICAgICJmdW5jdGlvbiIgPT0gdHlwZW9mIFN5bWJvbCAmJgogICAgICAgICAgICAgICAgICB0LmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYKICAgICAgICAgICAgICAgICAgdCAhPT0gU3ltYm9sLnByb3RvdHlwZQogICAgICAgICAgICAgICAgICA/ICJzeW1ib2wiCiAgICAgICAgICAgICAgICAgIDogdHlwZW9mIHQ7CiAgICAgICAgICAgICAgfSkodCk7CiAgICAgIH0KICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogITAgfSksCiAgICAgICAgKGUuaW8gPSBlLlNvY2tldCA9IGUuTWFuYWdlciA9IGUucHJvdG9jb2wgPSB2b2lkIDApOwogICAgICB2YXIgbyA9IG4oMTkpLAogICAgICAgIGkgPSBuKDgpOwogICAgICB0LmV4cG9ydHMgPSBlID0gYzsKICAgICAgdmFyIHMgPSAoZS5tYW5hZ2VycyA9IHt9KTsKICAgICAgZnVuY3Rpb24gYyh0LCBlKSB7CiAgICAgICAgIm9iamVjdCIgPT09IHIodCkgJiYgKChlID0gdCksICh0ID0gdm9pZCAwKSksIChlID0gZSB8fCB7fSk7CiAgICAgICAgdmFyIG4sCiAgICAgICAgICBjID0gKDAsIG8udXJsKSh0LCBlLnBhdGggfHwgIi9zb2NrZXQuaW8iKSwKICAgICAgICAgIGEgPSBjLnNvdXJjZSwKICAgICAgICAgIHUgPSBjLmlkLAogICAgICAgICAgZiA9IGMucGF0aCwKICAgICAgICAgIGwgPSBzW3VdICYmIGYgaW4gc1t1XS5uc3BzOwogICAgICAgIHJldHVybiAoCiAgICAgICAgICBlLmZvcmNlTmV3IHx8IGVbImZvcmNlIG5ldyBjb25uZWN0aW9uIl0gfHwgITEgPT09IGUubXVsdGlwbGV4IHx8IGwKICAgICAgICAgICAgPyAobiA9IG5ldyBpLk1hbmFnZXIoYSwgZSkpCiAgICAgICAgICAgIDogKHNbdV0gfHwgKHNbdV0gPSBuZXcgaS5NYW5hZ2VyKGEsIGUpKSwgKG4gPSBzW3VdKSksCiAgICAgICAgICBjLnF1ZXJ5ICYmICFlLnF1ZXJ5ICYmIChlLnF1ZXJ5ID0gYy5xdWVyeUtleSksCiAgICAgICAgICBuLnNvY2tldChjLnBhdGgsIGUpCiAgICAgICAgKTsKICAgICAgfQogICAgICBlLmlvID0gYzsKICAgICAgdmFyIGEgPSBuKDYpOwogICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgInByb3RvY29sIiwgewogICAgICAgIGVudW1lcmFibGU6ICEwLAogICAgICAgIGdldDogZnVuY3Rpb24gKCkgewogICAgICAgICAgcmV0dXJuIGEucHJvdG9jb2w7CiAgICAgICAgfSwKICAgICAgfSksCiAgICAgICAgKGUuY29ubmVjdCA9IGMpOwogICAgICB2YXIgdSA9IG4oOCk7CiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCAiTWFuYWdlciIsIHsKICAgICAgICBlbnVtZXJhYmxlOiAhMCwKICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgIHJldHVybiB1Lk1hbmFnZXI7CiAgICAgICAgfSwKICAgICAgfSk7CiAgICAgIHZhciBmID0gbigxNCk7CiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCAiU29ja2V0IiwgewogICAgICAgIGVudW1lcmFibGU6ICEwLAogICAgICAgIGdldDogZnVuY3Rpb24gKCkgewogICAgICAgICAgcmV0dXJuIGYuU29ja2V0OwogICAgICAgIH0sCiAgICAgIH0pLAogICAgICAgIChlLmRlZmF1bHQgPSBjKTsKICAgIH0sCiAgICBmdW5jdGlvbiAodCwgZSwgbikgewogICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgIl9fZXNNb2R1bGUiLCB7IHZhbHVlOiAhMCB9KSwgKGUudXJsID0gdm9pZCAwKTsKICAgICAgdmFyIHIgPSBuKDcpOwogICAgICBlLnVybCA9IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgdmFyIGUgPQogICAgICAgICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiB2b2lkIDAgIT09IGFyZ3VtZW50c1sxXSA/IGFyZ3VtZW50c1sxXSA6ICIiLAogICAgICAgICAgbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAyID8gYXJndW1lbnRzWzJdIDogdm9pZCAwLAogICAgICAgICAgbyA9IHQ7CiAgICAgICAgKG4gPSBuIHx8ICgidW5kZWZpbmVkIiAhPSB0eXBlb2YgbG9jYXRpb24gJiYgbG9jYXRpb24pKSwKICAgICAgICAgIG51bGwgPT0gdCAmJiAodCA9IG4ucHJvdG9jb2wgKyAiLy8iICsgbi5ob3N0KSwKICAgICAgICAgICJzdHJpbmciID09IHR5cGVvZiB0ICYmCiAgICAgICAgICAgICgiLyIgPT09IHQuY2hhckF0KDApICYmCiAgICAgICAgICAgICAgKHQgPSAiLyIgPT09IHQuY2hhckF0KDEpID8gbi5wcm90b2NvbCArIHQgOiBuLmhvc3QgKyB0KSwKICAgICAgICAgICAgL14oaHR0cHM/fHdzcz8pOlwvXC8vLnRlc3QodCkgfHwKICAgICAgICAgICAgICAodCA9IHZvaWQgMCAhPT0gbiA/IG4ucHJvdG9jb2wgKyAiLy8iICsgdCA6ICJodHRwczovLyIgKyB0KSwKICAgICAgICAgICAgKG8gPSByKHQpKSksCiAgICAgICAgICBvLnBvcnQgfHwKICAgICAgICAgICAgKC9eKGh0dHB8d3MpJC8udGVzdChvLnByb3RvY29sKQogICAgICAgICAgICAgID8gKG8ucG9ydCA9ICI4MCIpCiAgICAgICAgICAgICAgOiAvXihodHRwfHdzKXMkLy50ZXN0KG8ucHJvdG9jb2wpICYmIChvLnBvcnQgPSAiNDQzIikpLAogICAgICAgICAgKG8ucGF0aCA9IG8ucGF0aCB8fCAiLyIpOwogICAgICAgIHZhciBpID0gLTEgIT09IG8uaG9zdC5pbmRleE9mKCI6IiksCiAgICAgICAgICBzID0gaSA/ICJbIiArIG8uaG9zdCArICJdIiA6IG8uaG9zdDsKICAgICAgICByZXR1cm4gKAogICAgICAgICAgKG8uaWQgPSBvLnByb3RvY29sICsgIjovLyIgKyBzICsgIjoiICsgby5wb3J0ICsgZSksCiAgICAgICAgICAoby5ocmVmID0KICAgICAgICAgICAgby5wcm90b2NvbCArCiAgICAgICAgICAgICI6Ly8iICsKICAgICAgICAgICAgcyArCiAgICAgICAgICAgIChuICYmIG4ucG9ydCA9PT0gby5wb3J0ID8gIiIgOiAiOiIgKyBvLnBvcnQpKSwKICAgICAgICAgIG8KICAgICAgICApOwogICAgICB9OwogICAgfSwKICAgIGZ1bmN0aW9uICh0LCBlLCBuKSB7CiAgICAgIHZhciByID0gbigyMSk7CiAgICAgICh0LmV4cG9ydHMgPSBmdW5jdGlvbiAodCwgZSkgewogICAgICAgIHJldHVybiBuZXcgcih0LCBlKTsKICAgICAgfSksCiAgICAgICAgKHQuZXhwb3J0cy5Tb2NrZXQgPSByKSwKICAgICAgICAodC5leHBvcnRzLnByb3RvY29sID0gci5wcm90b2NvbCksCiAgICAgICAgKHQuZXhwb3J0cy5UcmFuc3BvcnQgPSBuKDQpKSwKICAgICAgICAodC5leHBvcnRzLnRyYW5zcG9ydHMgPSBuKDkpKSwKICAgICAgICAodC5leHBvcnRzLnBhcnNlciA9IG4oMSkpOwogICAgfSwKICAgIGZ1bmN0aW9uICh0LCBlLCBuKSB7CiAgICAgIGZ1bmN0aW9uIHIoKSB7CiAgICAgICAgcmV0dXJuIChyID0KICAgICAgICAgIE9iamVjdC5hc3NpZ24gfHwKICAgICAgICAgIGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgIGZvciAodmFyIGUgPSAxOyBlIDwgYXJndW1lbnRzLmxlbmd0aDsgZSsrKSB7CiAgICAgICAgICAgICAgdmFyIG4gPSBhcmd1bWVudHNbZV07CiAgICAgICAgICAgICAgZm9yICh2YXIgciBpbiBuKQogICAgICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sIHIpICYmICh0W3JdID0gbltyXSk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIHQ7CiAgICAgICAgICB9KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIG8odCkgewogICAgICAgIHJldHVybiAobyA9CiAgICAgICAgICAiZnVuY3Rpb24iID09IHR5cGVvZiBTeW1ib2wgJiYgInN5bWJvbCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvcgogICAgICAgICAgICA/IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIHQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICA6IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICByZXR1cm4gdCAmJgogICAgICAgICAgICAgICAgICAiZnVuY3Rpb24iID09IHR5cGVvZiBTeW1ib2wgJiYKICAgICAgICAgICAgICAgICAgdC5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmCiAgICAgICAgICAgICAgICAgIHQgIT09IFN5bWJvbC5wcm90b3R5cGUKICAgICAgICAgICAgICAgICAgPyAic3ltYm9sIgogICAgICAgICAgICAgICAgICA6IHR5cGVvZiB0OwogICAgICAgICAgICAgIH0pKHQpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIGkodCwgZSkgewogICAgICAgIGlmICghKHQgaW5zdGFuY2VvZiBlKSkKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbiIpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHModCwgZSkgewogICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgZS5sZW5ndGg7IG4rKykgewogICAgICAgICAgdmFyIHIgPSBlW25dOwogICAgICAgICAgKHIuZW51bWVyYWJsZSA9IHIuZW51bWVyYWJsZSB8fCAhMSksCiAgICAgICAgICAgIChyLmNvbmZpZ3VyYWJsZSA9ICEwKSwKICAgICAgICAgICAgInZhbHVlIiBpbiByICYmIChyLndyaXRhYmxlID0gITApLAogICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgci5rZXksIHIpOwogICAgICAgIH0KICAgICAgfQogICAgICBmdW5jdGlvbiBjKHQsIGUpIHsKICAgICAgICByZXR1cm4gKGMgPQogICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8CiAgICAgICAgICBmdW5jdGlvbiAodCwgZSkgewogICAgICAgICAgICByZXR1cm4gKHQuX19wcm90b19fID0gZSksIHQ7CiAgICAgICAgICB9KSh0LCBlKTsKICAgICAgfQogICAgICBmdW5jdGlvbiBhKHQpIHsKICAgICAgICB2YXIgZSA9IChmdW5jdGlvbiAoKSB7CiAgICAgICAgICBpZiAoInVuZGVmaW5lZCIgPT0gdHlwZW9mIFJlZmxlY3QgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gITE7CiAgICAgICAgICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuICExOwogICAgICAgICAgaWYgKCJmdW5jdGlvbiIgPT0gdHlwZW9mIFByb3h5KSByZXR1cm4gITA7CiAgICAgICAgICB0cnkgewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbCgKICAgICAgICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkKICAgICAgICAgICAgICApLAogICAgICAgICAgICAgICEwCiAgICAgICAgICAgICk7CiAgICAgICAgICB9IGNhdGNoICh0KSB7CiAgICAgICAgICAgIHJldHVybiAhMTsKICAgICAgICAgIH0KICAgICAgICB9KSgpOwogICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7CiAgICAgICAgICB2YXIgbiwKICAgICAgICAgICAgciA9IGwodCk7CiAgICAgICAgICBpZiAoZSkgewogICAgICAgICAgICB2YXIgbyA9IGwodGhpcykuY29uc3RydWN0b3I7CiAgICAgICAgICAgIG4gPSBSZWZsZWN0LmNvbnN0cnVjdChyLCBhcmd1bWVudHMsIG8pOwogICAgICAgICAgfSBlbHNlIG4gPSByLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgICByZXR1cm4gdSh0aGlzLCBuKTsKICAgICAgICB9OwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHUodCwgZSkgewogICAgICAgIGlmIChlICYmICgib2JqZWN0IiA9PT0gbyhlKSB8fCAiZnVuY3Rpb24iID09IHR5cGVvZiBlKSkgcmV0dXJuIGU7CiAgICAgICAgaWYgKHZvaWQgMCAhPT0gZSkKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoCiAgICAgICAgICAgICJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZCIKICAgICAgICAgICk7CiAgICAgICAgcmV0dXJuIGYodCk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gZih0KSB7CiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkKICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcigKICAgICAgICAgICAgInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZCIKICAgICAgICAgICk7CiAgICAgICAgcmV0dXJuIHQ7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gbCh0KSB7CiAgICAgICAgcmV0dXJuIChsID0gT2JqZWN0LnNldFByb3RvdHlwZU9mCiAgICAgICAgICA/IE9iamVjdC5nZXRQcm90b3R5cGVPZgogICAgICAgICAgOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgIHJldHVybiB0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodCk7CiAgICAgICAgICAgIH0pKHQpOwogICAgICB9CiAgICAgIHZhciBwID0gbig5KSwKICAgICAgICBoID0gbigyKSwKICAgICAgICB5ID0gbigxKSwKICAgICAgICBkID0gbig3KSwKICAgICAgICB2ID0gbig1KSwKICAgICAgICBiID0gbigzKS5pbnN0YWxsVGltZXJGdW5jdGlvbnMsCiAgICAgICAgbSA9IChmdW5jdGlvbiAodCkgewogICAgICAgICAgIShmdW5jdGlvbiAodCwgZSkgewogICAgICAgICAgICBpZiAoImZ1bmN0aW9uIiAhPSB0eXBlb2YgZSAmJiBudWxsICE9PSBlKQogICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoCiAgICAgICAgICAgICAgICAiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24iCiAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgKHQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShlICYmIGUucHJvdG90eXBlLCB7CiAgICAgICAgICAgICAgY29uc3RydWN0b3I6IHsgdmFsdWU6IHQsIHdyaXRhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9LAogICAgICAgICAgICB9KSksCiAgICAgICAgICAgICAgZSAmJiBjKHQsIGUpOwogICAgICAgICAgfSkoaCwgdCk7CiAgICAgICAgICB2YXIgZSwKICAgICAgICAgICAgbiwKICAgICAgICAgICAgdSwKICAgICAgICAgICAgbCA9IGEoaCk7CiAgICAgICAgICBmdW5jdGlvbiBoKHQpIHsKICAgICAgICAgICAgdmFyIGUsCiAgICAgICAgICAgICAgbiA9CiAgICAgICAgICAgICAgICBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiB2b2lkIDAgIT09IGFyZ3VtZW50c1sxXQogICAgICAgICAgICAgICAgICA/IGFyZ3VtZW50c1sxXQogICAgICAgICAgICAgICAgICA6IHt9OwogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIGkodGhpcywgaCksCiAgICAgICAgICAgICAgKGUgPSBsLmNhbGwodGhpcykpLAogICAgICAgICAgICAgIHQgJiYgIm9iamVjdCIgPT09IG8odCkgJiYgKChuID0gdCksICh0ID0gbnVsbCkpLAogICAgICAgICAgICAgIHQKICAgICAgICAgICAgICAgID8gKCh0ID0gZCh0KSksCiAgICAgICAgICAgICAgICAgIChuLmhvc3RuYW1lID0gdC5ob3N0KSwKICAgICAgICAgICAgICAgICAgKG4uc2VjdXJlID0gImh0dHBzIiA9PT0gdC5wcm90b2NvbCB8fCAid3NzIiA9PT0gdC5wcm90b2NvbCksCiAgICAgICAgICAgICAgICAgIChuLnBvcnQgPSB0LnBvcnQpLAogICAgICAgICAgICAgICAgICB0LnF1ZXJ5ICYmIChuLnF1ZXJ5ID0gdC5xdWVyeSkpCiAgICAgICAgICAgICAgICA6IG4uaG9zdCAmJiAobi5ob3N0bmFtZSA9IGQobi5ob3N0KS5ob3N0KSwKICAgICAgICAgICAgICBiKGYoZSksIG4pLAogICAgICAgICAgICAgIChlLnNlY3VyZSA9CiAgICAgICAgICAgICAgICBudWxsICE9IG4uc2VjdXJlCiAgICAgICAgICAgICAgICAgID8gbi5zZWN1cmUKICAgICAgICAgICAgICAgICAgOiAidW5kZWZpbmVkIiAhPSB0eXBlb2YgbG9jYXRpb24gJiYKICAgICAgICAgICAgICAgICAgICAiaHR0cHM6IiA9PT0gbG9jYXRpb24ucHJvdG9jb2wpLAogICAgICAgICAgICAgIG4uaG9zdG5hbWUgJiYgIW4ucG9ydCAmJiAobi5wb3J0ID0gZS5zZWN1cmUgPyAiNDQzIiA6ICI4MCIpLAogICAgICAgICAgICAgIChlLmhvc3RuYW1lID0KICAgICAgICAgICAgICAgIG4uaG9zdG5hbWUgfHwKICAgICAgICAgICAgICAgICgidW5kZWZpbmVkIiAhPSB0eXBlb2YgbG9jYXRpb24KICAgICAgICAgICAgICAgICAgPyBsb2NhdGlvbi5ob3N0bmFtZQogICAgICAgICAgICAgICAgICA6ICJsb2NhbGhvc3QiKSksCiAgICAgICAgICAgICAgKGUucG9ydCA9CiAgICAgICAgICAgICAgICBuLnBvcnQgfHwKICAgICAgICAgICAgICAgICgidW5kZWZpbmVkIiAhPSB0eXBlb2YgbG9jYXRpb24gJiYgbG9jYXRpb24ucG9ydAogICAgICAgICAgICAgICAgICA/IGxvY2F0aW9uLnBvcnQKICAgICAgICAgICAgICAgICAgOiBlLnNlY3VyZQogICAgICAgICAgICAgICAgICA/IDQ0MwogICAgICAgICAgICAgICAgICA6IDgwKSksCiAgICAgICAgICAgICAgKGUudHJhbnNwb3J0cyA9IG4udHJhbnNwb3J0cyB8fCBbInBvbGxpbmciLCAid2Vic29ja2V0Il0pLAogICAgICAgICAgICAgIChlLnJlYWR5U3RhdGUgPSAiIiksCiAgICAgICAgICAgICAgKGUud3JpdGVCdWZmZXIgPSBbXSksCiAgICAgICAgICAgICAgKGUucHJldkJ1ZmZlckxlbiA9IDApLAogICAgICAgICAgICAgIChlLm9wdHMgPSByKAogICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICBwYXRoOiAiL2VuZ2luZS5pbyIsCiAgICAgICAgICAgICAgICAgIGFnZW50OiAhMSwKICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiAhMSwKICAgICAgICAgICAgICAgICAgdXBncmFkZTogITAsCiAgICAgICAgICAgICAgICAgIGpzb25wOiAhMCwKICAgICAgICAgICAgICAgICAgdGltZXN0YW1wUGFyYW06ICJ0IiwKICAgICAgICAgICAgICAgICAgcmVtZW1iZXJVcGdyYWRlOiAhMSwKICAgICAgICAgICAgICAgICAgcmVqZWN0VW5hdXRob3JpemVkOiAhMCwKICAgICAgICAgICAgICAgICAgcGVyTWVzc2FnZURlZmxhdGU6IHsgdGhyZXNob2xkOiAxMDI0IH0sCiAgICAgICAgICAgICAgICAgIHRyYW5zcG9ydE9wdGlvbnM6IHt9LAogICAgICAgICAgICAgICAgICBjbG9zZU9uQmVmb3JldW5sb2FkOiAhMCwKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICBuCiAgICAgICAgICAgICAgKSksCiAgICAgICAgICAgICAgKGUub3B0cy5wYXRoID0gZS5vcHRzLnBhdGgucmVwbGFjZSgvXC8kLywgIiIpICsgIi8iKSwKICAgICAgICAgICAgICAic3RyaW5nIiA9PSB0eXBlb2YgZS5vcHRzLnF1ZXJ5ICYmCiAgICAgICAgICAgICAgICAoZS5vcHRzLnF1ZXJ5ID0gdi5kZWNvZGUoZS5vcHRzLnF1ZXJ5KSksCiAgICAgICAgICAgICAgKGUuaWQgPSBudWxsKSwKICAgICAgICAgICAgICAoZS51cGdyYWRlcyA9IG51bGwpLAogICAgICAgICAgICAgIChlLnBpbmdJbnRlcnZhbCA9IG51bGwpLAogICAgICAgICAgICAgIChlLnBpbmdUaW1lb3V0ID0gbnVsbCksCiAgICAgICAgICAgICAgKGUucGluZ1RpbWVvdXRUaW1lciA9IG51bGwpLAogICAgICAgICAgICAgICJmdW5jdGlvbiIgPT0gdHlwZW9mIGFkZEV2ZW50TGlzdGVuZXIgJiYKICAgICAgICAgICAgICAgIChlLm9wdHMuY2xvc2VPbkJlZm9yZXVubG9hZCAmJgogICAgICAgICAgICAgICAgICBhZGRFdmVudExpc3RlbmVyKAogICAgICAgICAgICAgICAgICAgICJiZWZvcmV1bmxvYWQiLAogICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgICAgIGUudHJhbnNwb3J0ICYmCiAgICAgICAgICAgICAgICAgICAgICAgIChlLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoKSwgZS50cmFuc3BvcnQuY2xvc2UoKSk7CiAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAhMQogICAgICAgICAgICAgICAgICApLAogICAgICAgICAgICAgICAgImxvY2FsaG9zdCIgIT09IGUuaG9zdG5hbWUgJiYKICAgICAgICAgICAgICAgICAgKChlLm9mZmxpbmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICAgIGUub25DbG9zZSgidHJhbnNwb3J0IGNsb3NlIik7CiAgICAgICAgICAgICAgICAgIH0pLAogICAgICAgICAgICAgICAgICBhZGRFdmVudExpc3RlbmVyKCJvZmZsaW5lIiwgZS5vZmZsaW5lRXZlbnRMaXN0ZW5lciwgITEpKSksCiAgICAgICAgICAgICAgZS5vcGVuKCksCiAgICAgICAgICAgICAgZQogICAgICAgICAgICApOwogICAgICAgICAgfQogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgKGUgPSBoKSwKICAgICAgICAgICAgKG4gPSBbCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAiY3JlYXRlVHJhbnNwb3J0IiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgICB2YXIgZSA9IChmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgICAgIHZhciBlID0ge307CiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgbiBpbiB0KSB0Lmhhc093blByb3BlcnR5KG4pICYmIChlW25dID0gdFtuXSk7CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGU7CiAgICAgICAgICAgICAgICAgIH0pKHRoaXMub3B0cy5xdWVyeSk7CiAgICAgICAgICAgICAgICAgIChlLkVJTyA9IHkucHJvdG9jb2wpLAogICAgICAgICAgICAgICAgICAgIChlLnRyYW5zcG9ydCA9IHQpLAogICAgICAgICAgICAgICAgICAgIHRoaXMuaWQgJiYgKGUuc2lkID0gdGhpcy5pZCk7CiAgICAgICAgICAgICAgICAgIHZhciBuID0gcih7fSwgdGhpcy5vcHRzLnRyYW5zcG9ydE9wdGlvbnNbdF0sIHRoaXMub3B0cywgewogICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBlLAogICAgICAgICAgICAgICAgICAgIHNvY2tldDogdGhpcywKICAgICAgICAgICAgICAgICAgICBob3N0bmFtZTogdGhpcy5ob3N0bmFtZSwKICAgICAgICAgICAgICAgICAgICBzZWN1cmU6IHRoaXMuc2VjdXJlLAogICAgICAgICAgICAgICAgICAgIHBvcnQ6IHRoaXMucG9ydCwKICAgICAgICAgICAgICAgICAgfSk7CiAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgcFt0XShuKTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJvcGVuIiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgIHZhciB0LAogICAgICAgICAgICAgICAgICAgIGUgPSB0aGlzOwogICAgICAgICAgICAgICAgICBpZiAoCiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRzLnJlbWVtYmVyVXBncmFkZSAmJgogICAgICAgICAgICAgICAgICAgIGgucHJpb3JXZWJzb2NrZXRTdWNjZXNzICYmCiAgICAgICAgICAgICAgICAgICAgLTEgIT09IHRoaXMudHJhbnNwb3J0cy5pbmRleE9mKCJ3ZWJzb2NrZXQiKQogICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgdCA9ICJ3ZWJzb2NrZXQiOwogICAgICAgICAgICAgICAgICBlbHNlIHsKICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PT0gdGhpcy50cmFuc3BvcnRzLmxlbmd0aCkKICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIHRoaXMuc2V0VGltZW91dEZuKGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgICAgICAgZS5lbWl0KCJlcnJvciIsICJObyB0cmFuc3BvcnRzIGF2YWlsYWJsZSIpOwogICAgICAgICAgICAgICAgICAgICAgfSwgMCk7CiAgICAgICAgICAgICAgICAgICAgdCA9IHRoaXMudHJhbnNwb3J0c1swXTsKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSAib3BlbmluZyI7CiAgICAgICAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgICAgICAgdCA9IHRoaXMuY3JlYXRlVHJhbnNwb3J0KHQpOwogICAgICAgICAgICAgICAgICB9IGNhdGNoICh0KSB7CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNwb3J0cy5zaGlmdCgpLCB2b2lkIHRoaXMub3BlbigpOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIHQub3BlbigpLCB0aGlzLnNldFRyYW5zcG9ydCh0KTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJzZXRUcmFuc3BvcnQiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpczsKICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQgJiYgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKCksCiAgICAgICAgICAgICAgICAgICAgKHRoaXMudHJhbnNwb3J0ID0gdCksCiAgICAgICAgICAgICAgICAgICAgdAogICAgICAgICAgICAgICAgICAgICAgLm9uKCJkcmFpbiIsIHRoaXMub25EcmFpbi5iaW5kKHRoaXMpKQogICAgICAgICAgICAgICAgICAgICAgLm9uKCJwYWNrZXQiLCB0aGlzLm9uUGFja2V0LmJpbmQodGhpcykpCiAgICAgICAgICAgICAgICAgICAgICAub24oImVycm9yIiwgdGhpcy5vbkVycm9yLmJpbmQodGhpcykpCiAgICAgICAgICAgICAgICAgICAgICAub24oImNsb3NlIiwgZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICAgICAgICBlLm9uQ2xvc2UoInRyYW5zcG9ydCBjbG9zZSIpOwogICAgICAgICAgICAgICAgICAgICAgfSk7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAicHJvYmUiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICAgIHZhciBlID0gdGhpcywKICAgICAgICAgICAgICAgICAgICBuID0gdGhpcy5jcmVhdGVUcmFuc3BvcnQodCwgeyBwcm9iZTogMSB9KSwKICAgICAgICAgICAgICAgICAgICByID0gITE7CiAgICAgICAgICAgICAgICAgIGgucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gITE7CiAgICAgICAgICAgICAgICAgIHZhciBvID0gZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICAgIHIgfHwKICAgICAgICAgICAgICAgICAgICAgIChuLnNlbmQoW3sgdHlwZTogInBpbmciLCBkYXRhOiAicHJvYmUiIH1dKSwKICAgICAgICAgICAgICAgICAgICAgIG4ub25jZSgicGFja2V0IiwgZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyKQogICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgicG9uZyIgPT09IHQudHlwZSAmJiAicHJvYmUiID09PSB0LmRhdGEpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChlLnVwZ3JhZGluZyA9ICEwKSwgZS5lbWl0KCJ1cGdyYWRpbmciLCBuKSwgIW4pCiAgICAgICAgICAgICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIChoLnByaW9yV2Vic29ja2V0U3VjY2VzcyA9ICJ3ZWJzb2NrZXQiID09PSBuLm5hbWUpLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRyYW5zcG9ydC5wYXVzZShmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgciB8fAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCJjbG9zZWQiICE9PSBlLnJlYWR5U3RhdGUgJiYKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGYoKSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zZXRUcmFuc3BvcnQobiksCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG4uc2VuZChbeyB0eXBlOiAidXBncmFkZSIgfV0pLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmVtaXQoInVwZ3JhZGUiLCBuKSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG4gPSBudWxsKSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGUudXBncmFkaW5nID0gITEpLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLmZsdXNoKCkpKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gbmV3IEVycm9yKCJwcm9iZSBlcnJvciIpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgKG8udHJhbnNwb3J0ID0gbi5uYW1lKSwgZS5lbWl0KCJ1cGdyYWRlRXJyb3IiLCBvKTsKICAgICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgICB9KSk7CiAgICAgICAgICAgICAgICAgIH07CiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGkoKSB7CiAgICAgICAgICAgICAgICAgICAgciB8fCAoKHIgPSAhMCksIGYoKSwgbi5jbG9zZSgpLCAobiA9IG51bGwpKTsKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICB2YXIgcyA9IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBuZXcgRXJyb3IoInByb2JlIGVycm9yOiAiICsgdCk7CiAgICAgICAgICAgICAgICAgICAgKHIudHJhbnNwb3J0ID0gbi5uYW1lKSwgaSgpLCBlLmVtaXQoInVwZ3JhZGVFcnJvciIsIHIpOwogICAgICAgICAgICAgICAgICB9OwogICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjKCkgewogICAgICAgICAgICAgICAgICAgIHMoInRyYW5zcG9ydCBjbG9zZWQiKTsKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICBmdW5jdGlvbiBhKCkgewogICAgICAgICAgICAgICAgICAgIHMoInNvY2tldCBjbG9zZWQiKTsKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICBmdW5jdGlvbiB1KHQpIHsKICAgICAgICAgICAgICAgICAgICBuICYmIHQubmFtZSAhPT0gbi5uYW1lICYmIGkoKTsKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICB2YXIgZiA9IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgICBuLnJlbW92ZUxpc3RlbmVyKCJvcGVuIiwgbyksCiAgICAgICAgICAgICAgICAgICAgICBuLnJlbW92ZUxpc3RlbmVyKCJlcnJvciIsIHMpLAogICAgICAgICAgICAgICAgICAgICAgbi5yZW1vdmVMaXN0ZW5lcigiY2xvc2UiLCBjKSwKICAgICAgICAgICAgICAgICAgICAgIGUucmVtb3ZlTGlzdGVuZXIoImNsb3NlIiwgYSksCiAgICAgICAgICAgICAgICAgICAgICBlLnJlbW92ZUxpc3RlbmVyKCJ1cGdyYWRpbmciLCB1KTsKICAgICAgICAgICAgICAgICAgfTsKICAgICAgICAgICAgICAgICAgbi5vbmNlKCJvcGVuIiwgbyksCiAgICAgICAgICAgICAgICAgICAgbi5vbmNlKCJlcnJvciIsIHMpLAogICAgICAgICAgICAgICAgICAgIG4ub25jZSgiY2xvc2UiLCBjKSwKICAgICAgICAgICAgICAgICAgICB0aGlzLm9uY2UoImNsb3NlIiwgYSksCiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbmNlKCJ1cGdyYWRpbmciLCB1KSwKICAgICAgICAgICAgICAgICAgICBuLm9wZW4oKTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJvbk9wZW4iLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgaWYgKAogICAgICAgICAgICAgICAgICAgICgodGhpcy5yZWFkeVN0YXRlID0gIm9wZW4iKSwKICAgICAgICAgICAgICAgICAgICAoaC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPQogICAgICAgICAgICAgICAgICAgICAgIndlYnNvY2tldCIgPT09IHRoaXMudHJhbnNwb3J0Lm5hbWUpLAogICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgib3BlbiIpLAogICAgICAgICAgICAgICAgICAgIHRoaXMuZmx1c2goKSwKICAgICAgICAgICAgICAgICAgICAib3BlbiIgPT09IHRoaXMucmVhZHlTdGF0ZSAmJgogICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRzLnVwZ3JhZGUgJiYKICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0LnBhdXNlKQogICAgICAgICAgICAgICAgICApCiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdCA9IDAsIGUgPSB0aGlzLnVwZ3JhZGVzLmxlbmd0aDsgdCA8IGU7IHQrKykKICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvYmUodGhpcy51cGdyYWRlc1t0XSk7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAib25QYWNrZXQiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICAgIGlmICgKICAgICAgICAgICAgICAgICAgICAib3BlbmluZyIgPT09IHRoaXMucmVhZHlTdGF0ZSB8fAogICAgICAgICAgICAgICAgICAgICJvcGVuIiA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8CiAgICAgICAgICAgICAgICAgICAgImNsb3NpbmciID09PSB0aGlzLnJlYWR5U3RhdGUKICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoCiAgICAgICAgICAgICAgICAgICAgICAodGhpcy5lbWl0KCJwYWNrZXQiLCB0KSwgdGhpcy5lbWl0KCJoZWFydGJlYXQiKSwgdC50eXBlKQogICAgICAgICAgICAgICAgICAgICkgewogICAgICAgICAgICAgICAgICAgICAgY2FzZSAib3BlbiI6CiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25IYW5kc2hha2UoSlNPTi5wYXJzZSh0LmRhdGEpKTsKICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgICAgICAgICAgICAgICBjYXNlICJwaW5nIjoKICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFBpbmdUaW1lb3V0KCksCiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kUGFja2V0KCJwb25nIiksCiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCJwaW5nIiksCiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCJwb25nIik7CiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgICAgICAgY2FzZSAiZXJyb3IiOgogICAgICAgICAgICAgICAgICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcigic2VydmVyIGVycm9yIik7CiAgICAgICAgICAgICAgICAgICAgICAgIChlLmNvZGUgPSB0LmRhdGEpLCB0aGlzLm9uRXJyb3IoZSk7CiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICAgICAgICAgICAgY2FzZSAibWVzc2FnZSI6CiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgiZGF0YSIsIHQuZGF0YSksIHRoaXMuZW1pdCgibWVzc2FnZSIsIHQuZGF0YSk7CiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogIm9uSGFuZHNoYWtlIiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoImhhbmRzaGFrZSIsIHQpLAogICAgICAgICAgICAgICAgICAgICh0aGlzLmlkID0gdC5zaWQpLAogICAgICAgICAgICAgICAgICAgICh0aGlzLnRyYW5zcG9ydC5xdWVyeS5zaWQgPSB0LnNpZCksCiAgICAgICAgICAgICAgICAgICAgKHRoaXMudXBncmFkZXMgPSB0aGlzLmZpbHRlclVwZ3JhZGVzKHQudXBncmFkZXMpKSwKICAgICAgICAgICAgICAgICAgICAodGhpcy5waW5nSW50ZXJ2YWwgPSB0LnBpbmdJbnRlcnZhbCksCiAgICAgICAgICAgICAgICAgICAgKHRoaXMucGluZ1RpbWVvdXQgPSB0LnBpbmdUaW1lb3V0KSwKICAgICAgICAgICAgICAgICAgICB0aGlzLm9uT3BlbigpLAogICAgICAgICAgICAgICAgICAgICJjbG9zZWQiICE9PSB0aGlzLnJlYWR5U3RhdGUgJiYgdGhpcy5yZXNldFBpbmdUaW1lb3V0KCk7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAicmVzZXRQaW5nVGltZW91dCIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXM7CiAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJUaW1lb3V0Rm4odGhpcy5waW5nVGltZW91dFRpbWVyKSwKICAgICAgICAgICAgICAgICAgICAodGhpcy5waW5nVGltZW91dFRpbWVyID0gdGhpcy5zZXRUaW1lb3V0Rm4oZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICAgICAgdC5vbkNsb3NlKCJwaW5nIHRpbWVvdXQiKTsKICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLnBpbmdJbnRlcnZhbCArIHRoaXMucGluZ1RpbWVvdXQpKSwKICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdHMuYXV0b1VucmVmICYmIHRoaXMucGluZ1RpbWVvdXRUaW1lci51bnJlZigpOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogIm9uRHJhaW4iLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgdGhpcy53cml0ZUJ1ZmZlci5zcGxpY2UoMCwgdGhpcy5wcmV2QnVmZmVyTGVuKSwKICAgICAgICAgICAgICAgICAgICAodGhpcy5wcmV2QnVmZmVyTGVuID0gMCksCiAgICAgICAgICAgICAgICAgICAgMCA9PT0gdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgKICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5lbWl0KCJkcmFpbiIpCiAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZmx1c2goKTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJmbHVzaCIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICAiY2xvc2VkIiAhPT0gdGhpcy5yZWFkeVN0YXRlICYmCiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQud3JpdGFibGUgJiYKICAgICAgICAgICAgICAgICAgICAhdGhpcy51cGdyYWRpbmcgJiYKICAgICAgICAgICAgICAgICAgICB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCAmJgogICAgICAgICAgICAgICAgICAgICh0aGlzLnRyYW5zcG9ydC5zZW5kKHRoaXMud3JpdGVCdWZmZXIpLAogICAgICAgICAgICAgICAgICAgICh0aGlzLnByZXZCdWZmZXJMZW4gPSB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCksCiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCJmbHVzaCIpKTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJ3cml0ZSIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHQsIGUsIG4pIHsKICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VuZFBhY2tldCgibWVzc2FnZSIsIHQsIGUsIG4pLCB0aGlzOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogInNlbmQiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh0LCBlLCBuKSB7CiAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbmRQYWNrZXQoIm1lc3NhZ2UiLCB0LCBlLCBuKSwgdGhpczsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJzZW5kUGFja2V0IiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCwgZSwgbiwgcikgewogICAgICAgICAgICAgICAgICBpZiAoCiAgICAgICAgICAgICAgICAgICAgKCJmdW5jdGlvbiIgPT0gdHlwZW9mIGUgJiYgKChyID0gZSksIChlID0gdm9pZCAwKSksCiAgICAgICAgICAgICAgICAgICAgImZ1bmN0aW9uIiA9PSB0eXBlb2YgbiAmJiAoKHIgPSBuKSwgKG4gPSBudWxsKSksCiAgICAgICAgICAgICAgICAgICAgImNsb3NpbmciICE9PSB0aGlzLnJlYWR5U3RhdGUgJiYKICAgICAgICAgICAgICAgICAgICAgICJjbG9zZWQiICE9PSB0aGlzLnJlYWR5U3RhdGUpCiAgICAgICAgICAgICAgICAgICkgewogICAgICAgICAgICAgICAgICAgIChuID0gbiB8fCB7fSkuY29tcHJlc3MgPSAhMSAhPT0gbi5jb21wcmVzczsKICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHsgdHlwZTogdCwgZGF0YTogZSwgb3B0aW9uczogbiB9OwogICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgicGFja2V0Q3JlYXRlIiwgbyksCiAgICAgICAgICAgICAgICAgICAgICB0aGlzLndyaXRlQnVmZmVyLnB1c2gobyksCiAgICAgICAgICAgICAgICAgICAgICByICYmIHRoaXMub25jZSgiZmx1c2giLCByKSwKICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmx1c2goKTsKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogImNsb3NlIiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcywKICAgICAgICAgICAgICAgICAgICBlID0gZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICAgICAgdC5vbkNsb3NlKCJmb3JjZWQgY2xvc2UiKSwgdC50cmFuc3BvcnQuY2xvc2UoKTsKICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgIG4gPSBmdW5jdGlvbiBuKCkgewogICAgICAgICAgICAgICAgICAgICAgdC5yZW1vdmVMaXN0ZW5lcigidXBncmFkZSIsIG4pLAogICAgICAgICAgICAgICAgICAgICAgICB0LnJlbW92ZUxpc3RlbmVyKCJ1cGdyYWRlRXJyb3IiLCBuKSwKICAgICAgICAgICAgICAgICAgICAgICAgZSgpOwogICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgciA9IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgICAgIHQub25jZSgidXBncmFkZSIsIG4pLCB0Lm9uY2UoInVwZ3JhZGVFcnJvciIsIG4pOwogICAgICAgICAgICAgICAgICAgIH07CiAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgKCJvcGVuaW5nIiAhPT0gdGhpcy5yZWFkeVN0YXRlICYmCiAgICAgICAgICAgICAgICAgICAgICAib3BlbiIgIT09IHRoaXMucmVhZHlTdGF0ZSkgfHwKICAgICAgICAgICAgICAgICAgICAgICgodGhpcy5yZWFkeVN0YXRlID0gImNsb3NpbmciKSwKICAgICAgICAgICAgICAgICAgICAgIHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoCiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5vbmNlKCJkcmFpbiIsIGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQudXBncmFkaW5nID8gcigpIDogZSgpOwogICAgICAgICAgICAgICAgICAgICAgICAgIH0pCiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy51cGdyYWRpbmcKICAgICAgICAgICAgICAgICAgICAgICAgPyByKCkKICAgICAgICAgICAgICAgICAgICAgICAgOiBlKCkpLAogICAgICAgICAgICAgICAgICAgIHRoaXMKICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJvbkVycm9yIiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgICAoaC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSAhMSksCiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCJlcnJvciIsIHQpLAogICAgICAgICAgICAgICAgICAgIHRoaXMub25DbG9zZSgidHJhbnNwb3J0IGVycm9yIiwgdCk7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAib25DbG9zZSIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHQsIGUpIHsKICAgICAgICAgICAgICAgICAgKCJvcGVuaW5nIiAhPT0gdGhpcy5yZWFkeVN0YXRlICYmCiAgICAgICAgICAgICAgICAgICAgIm9wZW4iICE9PSB0aGlzLnJlYWR5U3RhdGUgJiYKICAgICAgICAgICAgICAgICAgICAiY2xvc2luZyIgIT09IHRoaXMucmVhZHlTdGF0ZSkgfHwKICAgICAgICAgICAgICAgICAgICAodGhpcy5jbGVhclRpbWVvdXRGbih0aGlzLnBpbmdJbnRlcnZhbFRpbWVyKSwKICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyVGltZW91dEZuKHRoaXMucGluZ1RpbWVvdXRUaW1lciksCiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKCJjbG9zZSIpLAogICAgICAgICAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCksCiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKCksCiAgICAgICAgICAgICAgICAgICAgImZ1bmN0aW9uIiA9PSB0eXBlb2YgcmVtb3ZlRXZlbnRMaXN0ZW5lciAmJgogICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigKICAgICAgICAgICAgICAgICAgICAgICAgIm9mZmxpbmUiLAogICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9mZmxpbmVFdmVudExpc3RlbmVyLAogICAgICAgICAgICAgICAgICAgICAgICAhMQogICAgICAgICAgICAgICAgICAgICAgKSwKICAgICAgICAgICAgICAgICAgICAodGhpcy5yZWFkeVN0YXRlID0gImNsb3NlZCIpLAogICAgICAgICAgICAgICAgICAgICh0aGlzLmlkID0gbnVsbCksCiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCJjbG9zZSIsIHQsIGUpLAogICAgICAgICAgICAgICAgICAgICh0aGlzLndyaXRlQnVmZmVyID0gW10pLAogICAgICAgICAgICAgICAgICAgICh0aGlzLnByZXZCdWZmZXJMZW4gPSAwKSk7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAiZmlsdGVyVXBncmFkZXMiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGUgPSBbXSwgbiA9IDAsIHIgPSB0Lmxlbmd0aDsgbiA8IHI7IG4rKykKICAgICAgICAgICAgICAgICAgICB+dGhpcy50cmFuc3BvcnRzLmluZGV4T2YodFtuXSkgJiYgZS5wdXNoKHRbbl0pOwogICAgICAgICAgICAgICAgICByZXR1cm4gZTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgXSkgJiYgcyhlLnByb3RvdHlwZSwgbiksCiAgICAgICAgICAgIHUgJiYgcyhlLCB1KSwKICAgICAgICAgICAgaAogICAgICAgICAgKTsKICAgICAgICB9KShoKTsKICAgICAgKG0ucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gITEpLAogICAgICAgIChtLnByb3RvY29sID0geS5wcm90b2NvbCksCiAgICAgICAgKHQuZXhwb3J0cyA9IG0pOwogICAgfSwKICAgIGZ1bmN0aW9uICh0LCBlKSB7CiAgICAgIHRyeSB7CiAgICAgICAgdC5leHBvcnRzID0KICAgICAgICAgICJ1bmRlZmluZWQiICE9IHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAmJgogICAgICAgICAgIndpdGhDcmVkZW50aWFscyIgaW4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7CiAgICAgIH0gY2F0Y2ggKGUpIHsKICAgICAgICB0LmV4cG9ydHMgPSAhMTsKICAgICAgfQogICAgfSwKICAgIGZ1bmN0aW9uICh0LCBlLCBuKSB7CiAgICAgIGZ1bmN0aW9uIHIodCkgewogICAgICAgIHJldHVybiAociA9CiAgICAgICAgICAiZnVuY3Rpb24iID09IHR5cGVvZiBTeW1ib2wgJiYgInN5bWJvbCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvcgogICAgICAgICAgICA/IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIHQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICA6IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICByZXR1cm4gdCAmJgogICAgICAgICAgICAgICAgICAiZnVuY3Rpb24iID09IHR5cGVvZiBTeW1ib2wgJiYKICAgICAgICAgICAgICAgICAgdC5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmCiAgICAgICAgICAgICAgICAgIHQgIT09IFN5bWJvbC5wcm90b3R5cGUKICAgICAgICAgICAgICAgICAgPyAic3ltYm9sIgogICAgICAgICAgICAgICAgICA6IHR5cGVvZiB0OwogICAgICAgICAgICAgIH0pKHQpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIG8oKSB7CiAgICAgICAgcmV0dXJuIChvID0KICAgICAgICAgIE9iamVjdC5hc3NpZ24gfHwKICAgICAgICAgIGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgIGZvciAodmFyIGUgPSAxOyBlIDwgYXJndW1lbnRzLmxlbmd0aDsgZSsrKSB7CiAgICAgICAgICAgICAgdmFyIG4gPSBhcmd1bWVudHNbZV07CiAgICAgICAgICAgICAgZm9yICh2YXIgciBpbiBuKQogICAgICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sIHIpICYmICh0W3JdID0gbltyXSk7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIHQ7CiAgICAgICAgICB9KS5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIGkodCwgZSkgewogICAgICAgIGlmICghKHQgaW5zdGFuY2VvZiBlKSkKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbiIpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHModCwgZSkgewogICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgZS5sZW5ndGg7IG4rKykgewogICAgICAgICAgdmFyIHIgPSBlW25dOwogICAgICAgICAgKHIuZW51bWVyYWJsZSA9IHIuZW51bWVyYWJsZSB8fCAhMSksCiAgICAgICAgICAgIChyLmNvbmZpZ3VyYWJsZSA9ICEwKSwKICAgICAgICAgICAgInZhbHVlIiBpbiByICYmIChyLndyaXRhYmxlID0gITApLAogICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgci5rZXksIHIpOwogICAgICAgIH0KICAgICAgfQogICAgICBmdW5jdGlvbiBjKHQsIGUsIG4pIHsKICAgICAgICByZXR1cm4gZSAmJiBzKHQucHJvdG90eXBlLCBlKSwgbiAmJiBzKHQsIG4pLCB0OwogICAgICB9CiAgICAgIGZ1bmN0aW9uIGEodCwgZSkgewogICAgICAgIGlmICgiZnVuY3Rpb24iICE9IHR5cGVvZiBlICYmIG51bGwgIT09IGUpCiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKAogICAgICAgICAgICAiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24iCiAgICAgICAgICApOwogICAgICAgICh0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoZSAmJiBlLnByb3RvdHlwZSwgewogICAgICAgICAgY29uc3RydWN0b3I6IHsgdmFsdWU6IHQsIHdyaXRhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9LAogICAgICAgIH0pKSwKICAgICAgICAgIGUgJiYgdSh0LCBlKTsKICAgICAgfQogICAgICBmdW5jdGlvbiB1KHQsIGUpIHsKICAgICAgICByZXR1cm4gKHUgPQogICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8CiAgICAgICAgICBmdW5jdGlvbiAodCwgZSkgewogICAgICAgICAgICByZXR1cm4gKHQuX19wcm90b19fID0gZSksIHQ7CiAgICAgICAgICB9KSh0LCBlKTsKICAgICAgfQogICAgICBmdW5jdGlvbiBmKHQpIHsKICAgICAgICB2YXIgZSA9IChmdW5jdGlvbiAoKSB7CiAgICAgICAgICBpZiAoInVuZGVmaW5lZCIgPT0gdHlwZW9mIFJlZmxlY3QgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gITE7CiAgICAgICAgICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuICExOwogICAgICAgICAgaWYgKCJmdW5jdGlvbiIgPT0gdHlwZW9mIFByb3h5KSByZXR1cm4gITA7CiAgICAgICAgICB0cnkgewogICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbCgKICAgICAgICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkKICAgICAgICAgICAgICApLAogICAgICAgICAgICAgICEwCiAgICAgICAgICAgICk7CiAgICAgICAgICB9IGNhdGNoICh0KSB7CiAgICAgICAgICAgIHJldHVybiAhMTsKICAgICAgICAgIH0KICAgICAgICB9KSgpOwogICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7CiAgICAgICAgICB2YXIgbiwKICAgICAgICAgICAgciA9IGgodCk7CiAgICAgICAgICBpZiAoZSkgewogICAgICAgICAgICB2YXIgbyA9IGgodGhpcykuY29uc3RydWN0b3I7CiAgICAgICAgICAgIG4gPSBSZWZsZWN0LmNvbnN0cnVjdChyLCBhcmd1bWVudHMsIG8pOwogICAgICAgICAgfSBlbHNlIG4gPSByLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgICAgICAgICByZXR1cm4gbCh0aGlzLCBuKTsKICAgICAgICB9OwogICAgICB9CiAgICAgIGZ1bmN0aW9uIGwodCwgZSkgewogICAgICAgIGlmIChlICYmICgib2JqZWN0IiA9PT0gcihlKSB8fCAiZnVuY3Rpb24iID09IHR5cGVvZiBlKSkgcmV0dXJuIGU7CiAgICAgICAgaWYgKHZvaWQgMCAhPT0gZSkKICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoCiAgICAgICAgICAgICJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZCIKICAgICAgICAgICk7CiAgICAgICAgcmV0dXJuIHAodCk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gcCh0KSB7CiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCkKICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcigKICAgICAgICAgICAgInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZCIKICAgICAgICAgICk7CiAgICAgICAgcmV0dXJuIHQ7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gaCh0KSB7CiAgICAgICAgcmV0dXJuIChoID0gT2JqZWN0LnNldFByb3RvdHlwZU9mCiAgICAgICAgICA/IE9iamVjdC5nZXRQcm90b3R5cGVPZgogICAgICAgICAgOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgIHJldHVybiB0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodCk7CiAgICAgICAgICAgIH0pKHQpOwogICAgICB9CiAgICAgIHZhciB5ID0gbigxMCksCiAgICAgICAgZCA9IG4oMTEpLAogICAgICAgIHYgPSBuKDIpLAogICAgICAgIGIgPSBuKDMpLAogICAgICAgIG0gPSBiLnBpY2ssCiAgICAgICAgZyA9IGIuaW5zdGFsbFRpbWVyRnVuY3Rpb25zLAogICAgICAgIGsgPSBuKDApOwogICAgICBmdW5jdGlvbiB3KCkge30KICAgICAgdmFyIE8gPSBudWxsICE9IG5ldyB5KHsgeGRvbWFpbjogITEgfSkucmVzcG9uc2VUeXBlLAogICAgICAgIF8gPSAoZnVuY3Rpb24gKHQpIHsKICAgICAgICAgIGEobiwgdCk7CiAgICAgICAgICB2YXIgZSA9IGYobik7CiAgICAgICAgICBmdW5jdGlvbiBuKHQpIHsKICAgICAgICAgICAgdmFyIHI7CiAgICAgICAgICAgIGlmICgKICAgICAgICAgICAgICAoaSh0aGlzLCBuKSwKICAgICAgICAgICAgICAociA9IGUuY2FsbCh0aGlzLCB0KSksCiAgICAgICAgICAgICAgInVuZGVmaW5lZCIgIT0gdHlwZW9mIGxvY2F0aW9uKQogICAgICAgICAgICApIHsKICAgICAgICAgICAgICB2YXIgbyA9ICJodHRwczoiID09PSBsb2NhdGlvbi5wcm90b2NvbCwKICAgICAgICAgICAgICAgIHMgPSBsb2NhdGlvbi5wb3J0OwogICAgICAgICAgICAgIHMgfHwgKHMgPSBvID8gNDQzIDogODApLAogICAgICAgICAgICAgICAgKHIueGQgPQogICAgICAgICAgICAgICAgICAoInVuZGVmaW5lZCIgIT0gdHlwZW9mIGxvY2F0aW9uICYmCiAgICAgICAgICAgICAgICAgICAgdC5ob3N0bmFtZSAhPT0gbG9jYXRpb24uaG9zdG5hbWUpIHx8CiAgICAgICAgICAgICAgICAgIHMgIT09IHQucG9ydCksCiAgICAgICAgICAgICAgICAoci54cyA9IHQuc2VjdXJlICE9PSBvKTsKICAgICAgICAgICAgfQogICAgICAgICAgICB2YXIgYyA9IHQgJiYgdC5mb3JjZUJhc2U2NDsKICAgICAgICAgICAgcmV0dXJuIChyLnN1cHBvcnRzQmluYXJ5ID0gTyAmJiAhYyksIHI7CiAgICAgICAgICB9CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICBjKG4sIFsKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJyZXF1ZXN0IiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgIHZhciB0ID0KICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiB2b2lkIDAgIT09IGFyZ3VtZW50c1swXQogICAgICAgICAgICAgICAgICAgICAgPyBhcmd1bWVudHNbMF0KICAgICAgICAgICAgICAgICAgICAgIDoge307CiAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgbyh0LCB7IHhkOiB0aGlzLnhkLCB4czogdGhpcy54cyB9LCB0aGlzLm9wdHMpLAogICAgICAgICAgICAgICAgICAgIG5ldyBFKHRoaXMudXJpKCksIHQpCiAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAiZG9Xcml0ZSIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHQsIGUpIHsKICAgICAgICAgICAgICAgICAgdmFyIG4gPSB0aGlzLAogICAgICAgICAgICAgICAgICAgIHIgPSB0aGlzLnJlcXVlc3QoeyBtZXRob2Q6ICJQT1NUIiwgZGF0YTogdCB9KTsKICAgICAgICAgICAgICAgICAgci5vbigic3VjY2VzcyIsIGUpLAogICAgICAgICAgICAgICAgICAgIHIub24oImVycm9yIiwgZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgICAgICAgIG4ub25FcnJvcigieGhyIHBvc3QgZXJyb3IiLCB0KTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJkb1BvbGwiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgdmFyIHQgPSB0aGlzLAogICAgICAgICAgICAgICAgICAgIGUgPSB0aGlzLnJlcXVlc3QoKTsKICAgICAgICAgICAgICAgICAgZS5vbigiZGF0YSIsIHRoaXMub25EYXRhLmJpbmQodGhpcykpLAogICAgICAgICAgICAgICAgICAgIGUub24oImVycm9yIiwgZnVuY3Rpb24gKGUpIHsKICAgICAgICAgICAgICAgICAgICAgIHQub25FcnJvcigieGhyIHBvbGwgZXJyb3IiLCBlKTsKICAgICAgICAgICAgICAgICAgICB9KSwKICAgICAgICAgICAgICAgICAgICAodGhpcy5wb2xsWGhyID0gZSk7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgIF0pLAogICAgICAgICAgICBuCiAgICAgICAgICApOwogICAgICAgIH0pKGQpLAogICAgICAgIEUgPSAoZnVuY3Rpb24gKHQpIHsKICAgICAgICAgIGEobiwgdCk7CiAgICAgICAgICB2YXIgZSA9IGYobik7CiAgICAgICAgICBmdW5jdGlvbiBuKHQsIHIpIHsKICAgICAgICAgICAgdmFyIG87CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgaSh0aGlzLCBuKSwKICAgICAgICAgICAgICAobyA9IGUuY2FsbCh0aGlzKSksCiAgICAgICAgICAgICAgZyhwKG8pLCByKSwKICAgICAgICAgICAgICAoby5vcHRzID0gciksCiAgICAgICAgICAgICAgKG8ubWV0aG9kID0gci5tZXRob2QgfHwgIkdFVCIpLAogICAgICAgICAgICAgIChvLnVyaSA9IHQpLAogICAgICAgICAgICAgIChvLmFzeW5jID0gITEgIT09IHIuYXN5bmMpLAogICAgICAgICAgICAgIChvLmRhdGEgPSB2b2lkIDAgIT09IHIuZGF0YSA/IHIuZGF0YSA6IG51bGwpLAogICAgICAgICAgICAgIG8uY3JlYXRlKCksCiAgICAgICAgICAgICAgbwogICAgICAgICAgICApOwogICAgICAgICAgfQogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgYyhuLCBbCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAiY3JlYXRlIiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgIHZhciB0ID0gdGhpcywKICAgICAgICAgICAgICAgICAgICBlID0gbSgKICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0cywKICAgICAgICAgICAgICAgICAgICAgICJhZ2VudCIsCiAgICAgICAgICAgICAgICAgICAgICAiZW5hYmxlc1hEUiIsCiAgICAgICAgICAgICAgICAgICAgICAicGZ4IiwKICAgICAgICAgICAgICAgICAgICAgICJrZXkiLAogICAgICAgICAgICAgICAgICAgICAgInBhc3NwaHJhc2UiLAogICAgICAgICAgICAgICAgICAgICAgImNlcnQiLAogICAgICAgICAgICAgICAgICAgICAgImNhIiwKICAgICAgICAgICAgICAgICAgICAgICJjaXBoZXJzIiwKICAgICAgICAgICAgICAgICAgICAgICJyZWplY3RVbmF1dGhvcml6ZWQiLAogICAgICAgICAgICAgICAgICAgICAgImF1dG9VbnJlZiIKICAgICAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgICAgICAoZS54ZG9tYWluID0gISF0aGlzLm9wdHMueGQpLCAoZS54c2NoZW1lID0gISF0aGlzLm9wdHMueHMpOwogICAgICAgICAgICAgICAgICB2YXIgciA9ICh0aGlzLnhociA9IG5ldyB5KGUpKTsKICAgICAgICAgICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgICAgICAgICByLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJpLCB0aGlzLmFzeW5jKTsKICAgICAgICAgICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3B0cy5leHRyYUhlYWRlcnMpCiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG8gaW4gKHIuc2V0RGlzYWJsZUhlYWRlckNoZWNrICYmCiAgICAgICAgICAgICAgICAgICAgICAgICAgci5zZXREaXNhYmxlSGVhZGVyQ2hlY2soITApLAogICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdHMuZXh0cmFIZWFkZXJzKSkKICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdHMuZXh0cmFIZWFkZXJzLmhhc093blByb3BlcnR5KG8pICYmCiAgICAgICAgICAgICAgICAgICAgICAgICAgICByLnNldFJlcXVlc3RIZWFkZXIobywgdGhpcy5vcHRzLmV4dHJhSGVhZGVyc1tvXSk7CiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAodCkge30KICAgICAgICAgICAgICAgICAgICBpZiAoIlBPU1QiID09PSB0aGlzLm1ldGhvZCkKICAgICAgICAgICAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHIuc2V0UmVxdWVzdEhlYWRlcigKICAgICAgICAgICAgICAgICAgICAgICAgICAiQ29udGVudC10eXBlIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAidGV4dC9wbGFpbjtjaGFyc2V0PVVURi04IgogICAgICAgICAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAodCkge30KICAgICAgICAgICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgICAgICAgci5zZXRSZXF1ZXN0SGVhZGVyKCJBY2NlcHQiLCAiKi8qIik7CiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAodCkge30KICAgICAgICAgICAgICAgICAgICAid2l0aENyZWRlbnRpYWxzIiBpbiByICYmCiAgICAgICAgICAgICAgICAgICAgICAoci53aXRoQ3JlZGVudGlhbHMgPSB0aGlzLm9wdHMud2l0aENyZWRlbnRpYWxzKSwKICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0cy5yZXF1ZXN0VGltZW91dCAmJgogICAgICAgICAgICAgICAgICAgICAgICAoci50aW1lb3V0ID0gdGhpcy5vcHRzLnJlcXVlc3RUaW1lb3V0KSwKICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzWERSKCkKICAgICAgICAgICAgICAgICAgICAgICAgPyAoKHIub25sb2FkID0gZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5vbkxvYWQoKTsKICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwKICAgICAgICAgICAgICAgICAgICAgICAgICAoci5vbmVycm9yID0gZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5vbkVycm9yKHIucmVzcG9uc2VUZXh0KTsKICAgICAgICAgICAgICAgICAgICAgICAgICB9KSkKICAgICAgICAgICAgICAgICAgICAgICAgOiAoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA0ID09PSByLnJlYWR5U3RhdGUgJiYKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDIwMCA9PT0gci5zdGF0dXMgfHwgMTIyMyA9PT0gci5zdGF0dXMKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHQub25Mb2FkKCkKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHQuc2V0VGltZW91dEZuKGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5vbkVycm9yKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJudW1iZXIiID09IHR5cGVvZiByLnN0YXR1cyA/IHIuc3RhdHVzIDogMAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMCkpOwogICAgICAgICAgICAgICAgICAgICAgICAgIH0pLAogICAgICAgICAgICAgICAgICAgICAgci5zZW5kKHRoaXMuZGF0YSk7CiAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHsKICAgICAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCB0aGlzLnNldFRpbWVvdXRGbihmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgICAgICB0Lm9uRXJyb3IoZSk7CiAgICAgICAgICAgICAgICAgICAgfSwgMCk7CiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgInVuZGVmaW5lZCIgIT0gdHlwZW9mIGRvY3VtZW50ICYmCiAgICAgICAgICAgICAgICAgICAgKCh0aGlzLmluZGV4ID0gbi5yZXF1ZXN0c0NvdW50KyspLAogICAgICAgICAgICAgICAgICAgIChuLnJlcXVlc3RzW3RoaXMuaW5kZXhdID0gdGhpcykpOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogIm9uU3VjY2VzcyIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoInN1Y2Nlc3MiKSwgdGhpcy5jbGVhbnVwKCk7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAib25EYXRhIiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoImRhdGEiLCB0KSwgdGhpcy5vblN1Y2Nlc3MoKTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJvbkVycm9yIiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoImVycm9yIiwgdCksIHRoaXMuY2xlYW51cCghMCk7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAiY2xlYW51cCIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gdGhpcy54aHIgJiYgbnVsbCAhPT0gdGhpcy54aHIpIHsKICAgICAgICAgICAgICAgICAgICBpZiAoCiAgICAgICAgICAgICAgICAgICAgICAodGhpcy5oYXNYRFIoKQogICAgICAgICAgICAgICAgICAgICAgICA/ICh0aGlzLnhoci5vbmxvYWQgPSB0aGlzLnhoci5vbmVycm9yID0gdykKICAgICAgICAgICAgICAgICAgICAgICAgOiAodGhpcy54aHIub25yZWFkeXN0YXRlY2hhbmdlID0gdyksCiAgICAgICAgICAgICAgICAgICAgICB0KQogICAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICAgICAgIHRyeSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueGhyLmFib3J0KCk7CiAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICh0KSB7fQogICAgICAgICAgICAgICAgICAgICJ1bmRlZmluZWQiICE9IHR5cGVvZiBkb2N1bWVudCAmJgogICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG4ucmVxdWVzdHNbdGhpcy5pbmRleF0sCiAgICAgICAgICAgICAgICAgICAgICAodGhpcy54aHIgPSBudWxsKTsKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogIm9uTG9hZCIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMueGhyLnJlc3BvbnNlVGV4dDsKICAgICAgICAgICAgICAgICAgbnVsbCAhPT0gdCAmJiB0aGlzLm9uRGF0YSh0KTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJoYXNYRFIiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAgICAgICAidW5kZWZpbmVkIiAhPSB0eXBlb2YgWERvbWFpblJlcXVlc3QgJiYKICAgICAgICAgICAgICAgICAgICAhdGhpcy54cyAmJgogICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlc1hEUgogICAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogImFib3J0IiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYW51cCgpOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICBdKSwKICAgICAgICAgICAgbgogICAgICAgICAgKTsKICAgICAgICB9KSh2KTsKICAgICAgaWYgKAogICAgICAgICgoRS5yZXF1ZXN0c0NvdW50ID0gMCksCiAgICAgICAgKEUucmVxdWVzdHMgPSB7fSksCiAgICAgICAgInVuZGVmaW5lZCIgIT0gdHlwZW9mIGRvY3VtZW50KQogICAgICApCiAgICAgICAgaWYgKCJmdW5jdGlvbiIgPT0gdHlwZW9mIGF0dGFjaEV2ZW50KSBhdHRhY2hFdmVudCgib251bmxvYWQiLCBTKTsKICAgICAgICBlbHNlIGlmICgiZnVuY3Rpb24iID09IHR5cGVvZiBhZGRFdmVudExpc3RlbmVyKSB7CiAgICAgICAgICBhZGRFdmVudExpc3RlbmVyKCJvbnBhZ2VoaWRlIiBpbiBrID8gInBhZ2VoaWRlIiA6ICJ1bmxvYWQiLCBTLCAhMSk7CiAgICAgICAgfQogICAgICBmdW5jdGlvbiBTKCkgewogICAgICAgIGZvciAodmFyIHQgaW4gRS5yZXF1ZXN0cykKICAgICAgICAgIEUucmVxdWVzdHMuaGFzT3duUHJvcGVydHkodCkgJiYgRS5yZXF1ZXN0c1t0XS5hYm9ydCgpOwogICAgICB9CiAgICAgICh0LmV4cG9ydHMgPSBfKSwgKHQuZXhwb3J0cy5SZXF1ZXN0ID0gRSk7CiAgICB9LAogICAgZnVuY3Rpb24gKHQsIGUsIG4pIHsKICAgICAgdmFyIHIgPSBuKDEyKS5QQUNLRVRfVFlQRVMsCiAgICAgICAgbyA9CiAgICAgICAgICAiZnVuY3Rpb24iID09IHR5cGVvZiBCbG9iIHx8CiAgICAgICAgICAoInVuZGVmaW5lZCIgIT0gdHlwZW9mIEJsb2IgJiYKICAgICAgICAgICAgIltvYmplY3QgQmxvYkNvbnN0cnVjdG9yXSIgPT09CiAgICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKEJsb2IpKSwKICAgICAgICBpID0gImZ1bmN0aW9uIiA9PSB0eXBlb2YgQXJyYXlCdWZmZXIsCiAgICAgICAgcyA9IGZ1bmN0aW9uICh0LCBlKSB7CiAgICAgICAgICB2YXIgbiA9IG5ldyBGaWxlUmVhZGVyKCk7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAobi5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgdmFyIHQgPSBuLnJlc3VsdC5zcGxpdCgiLCIpWzFdOwogICAgICAgICAgICAgIGUoImIiICsgdCk7CiAgICAgICAgICAgIH0pLAogICAgICAgICAgICBuLnJlYWRBc0RhdGFVUkwodCkKICAgICAgICAgICk7CiAgICAgICAgfTsKICAgICAgdC5leHBvcnRzID0gZnVuY3Rpb24gKHQsIGUsIG4pIHsKICAgICAgICB2YXIgYywKICAgICAgICAgIGEgPSB0LnR5cGUsCiAgICAgICAgICB1ID0gdC5kYXRhOwogICAgICAgIHJldHVybiBvICYmIHUgaW5zdGFuY2VvZiBCbG9iCiAgICAgICAgICA/IGUKICAgICAgICAgICAgPyBuKHUpCiAgICAgICAgICAgIDogcyh1LCBuKQogICAgICAgICAgOiBpICYmCiAgICAgICAgICAgICh1IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgfHwKICAgICAgICAgICAgICAoKGMgPSB1KSwKICAgICAgICAgICAgICAiZnVuY3Rpb24iID09IHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcKICAgICAgICAgICAgICAgID8gQXJyYXlCdWZmZXIuaXNWaWV3KGMpCiAgICAgICAgICAgICAgICA6IGMgJiYgYy5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpCiAgICAgICAgICA/IGUKICAgICAgICAgICAgPyBuKHUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciA/IHUgOiB1LmJ1ZmZlcikKICAgICAgICAgICAgOiBzKG5ldyBCbG9iKFt1XSksIG4pCiAgICAgICAgICA6IG4oclthXSArICh1IHx8ICIiKSk7CiAgICAgIH07CiAgICB9LAogICAgZnVuY3Rpb24gKHQsIGUsIG4pIHsKICAgICAgdmFyIHIsCiAgICAgICAgbyA9IG4oMTIpLAogICAgICAgIGkgPSBvLlBBQ0tFVF9UWVBFU19SRVZFUlNFLAogICAgICAgIHMgPSBvLkVSUk9SX1BBQ0tFVDsKICAgICAgImZ1bmN0aW9uIiA9PSB0eXBlb2YgQXJyYXlCdWZmZXIgJiYgKHIgPSBuKDI2KSk7CiAgICAgIHZhciBjID0gZnVuY3Rpb24gKHQsIGUpIHsKICAgICAgICAgIGlmIChyKSB7CiAgICAgICAgICAgIHZhciBuID0gci5kZWNvZGUodCk7CiAgICAgICAgICAgIHJldHVybiBhKG4sIGUpOwogICAgICAgICAgfQogICAgICAgICAgcmV0dXJuIHsgYmFzZTY0OiAhMCwgZGF0YTogdCB9OwogICAgICAgIH0sCiAgICAgICAgYSA9IGZ1bmN0aW9uICh0LCBlKSB7CiAgICAgICAgICBzd2l0Y2ggKGUpIHsKICAgICAgICAgICAgY2FzZSAiYmxvYiI6CiAgICAgICAgICAgICAgcmV0dXJuIHQgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlciA/IG5ldyBCbG9iKFt0XSkgOiB0OwogICAgICAgICAgICBjYXNlICJhcnJheWJ1ZmZlciI6CiAgICAgICAgICAgIGRlZmF1bHQ6CiAgICAgICAgICAgICAgcmV0dXJuIHQ7CiAgICAgICAgICB9CiAgICAgICAgfTsKICAgICAgdC5leHBvcnRzID0gZnVuY3Rpb24gKHQsIGUpIHsKICAgICAgICBpZiAoInN0cmluZyIgIT0gdHlwZW9mIHQpIHJldHVybiB7IHR5cGU6ICJtZXNzYWdlIiwgZGF0YTogYSh0LCBlKSB9OwogICAgICAgIHZhciBuID0gdC5jaGFyQXQoMCk7CiAgICAgICAgcmV0dXJuICJiIiA9PT0gbgogICAgICAgICAgPyB7IHR5cGU6ICJtZXNzYWdlIiwgZGF0YTogYyh0LnN1YnN0cmluZygxKSwgZSkgfQogICAgICAgICAgOiBpW25dCiAgICAgICAgICA/IHQubGVuZ3RoID4gMQogICAgICAgICAgICA/IHsgdHlwZTogaVtuXSwgZGF0YTogdC5zdWJzdHJpbmcoMSkgfQogICAgICAgICAgICA6IHsgdHlwZTogaVtuXSB9CiAgICAgICAgICA6IHM7CiAgICAgIH07CiAgICB9LAogICAgZnVuY3Rpb24gKHQsIGUpIHsKICAgICAgIShmdW5jdGlvbiAodCkgewogICAgICAgIChlLmVuY29kZSA9IGZ1bmN0aW9uIChlKSB7CiAgICAgICAgICB2YXIgbiwKICAgICAgICAgICAgciA9IG5ldyBVaW50OEFycmF5KGUpLAogICAgICAgICAgICBvID0gci5sZW5ndGgsCiAgICAgICAgICAgIGkgPSAiIjsKICAgICAgICAgIGZvciAobiA9IDA7IG4gPCBvOyBuICs9IDMpCiAgICAgICAgICAgIChpICs9IHRbcltuXSA+PiAyXSksCiAgICAgICAgICAgICAgKGkgKz0gdFsoKDMgJiByW25dKSA8PCA0KSB8IChyW24gKyAxXSA+PiA0KV0pLAogICAgICAgICAgICAgIChpICs9IHRbKCgxNSAmIHJbbiArIDFdKSA8PCAyKSB8IChyW24gKyAyXSA+PiA2KV0pLAogICAgICAgICAgICAgIChpICs9IHRbNjMgJiByW24gKyAyXV0pOwogICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgbyAlIDMgPT0gMgogICAgICAgICAgICAgID8gKGkgPSBpLnN1YnN0cmluZygwLCBpLmxlbmd0aCAtIDEpICsgIj0iKQogICAgICAgICAgICAgIDogbyAlIDMgPT0gMSAmJiAoaSA9IGkuc3Vic3RyaW5nKDAsIGkubGVuZ3RoIC0gMikgKyAiPT0iKSwKICAgICAgICAgICAgaQogICAgICAgICAgKTsKICAgICAgICB9KSwKICAgICAgICAgIChlLmRlY29kZSA9IGZ1bmN0aW9uIChlKSB7CiAgICAgICAgICAgIHZhciBuLAogICAgICAgICAgICAgIHIsCiAgICAgICAgICAgICAgbywKICAgICAgICAgICAgICBpLAogICAgICAgICAgICAgIHMsCiAgICAgICAgICAgICAgYyA9IDAuNzUgKiBlLmxlbmd0aCwKICAgICAgICAgICAgICBhID0gZS5sZW5ndGgsCiAgICAgICAgICAgICAgdSA9IDA7CiAgICAgICAgICAgICI9IiA9PT0gZVtlLmxlbmd0aCAtIDFdICYmIChjLS0sICI9IiA9PT0gZVtlLmxlbmd0aCAtIDJdICYmIGMtLSk7CiAgICAgICAgICAgIHZhciBmID0gbmV3IEFycmF5QnVmZmVyKGMpLAogICAgICAgICAgICAgIGwgPSBuZXcgVWludDhBcnJheShmKTsKICAgICAgICAgICAgZm9yIChuID0gMDsgbiA8IGE7IG4gKz0gNCkKICAgICAgICAgICAgICAociA9IHQuaW5kZXhPZihlW25dKSksCiAgICAgICAgICAgICAgICAobyA9IHQuaW5kZXhPZihlW24gKyAxXSkpLAogICAgICAgICAgICAgICAgKGkgPSB0LmluZGV4T2YoZVtuICsgMl0pKSwKICAgICAgICAgICAgICAgIChzID0gdC5pbmRleE9mKGVbbiArIDNdKSksCiAgICAgICAgICAgICAgICAobFt1KytdID0gKHIgPDwgMikgfCAobyA+PiA0KSksCiAgICAgICAgICAgICAgICAobFt1KytdID0gKCgxNSAmIG8pIDw8IDQpIHwgKGkgPj4gMikpLAogICAgICAgICAgICAgICAgKGxbdSsrXSA9ICgoMyAmIGkpIDw8IDYpIHwgKDYzICYgcykpOwogICAgICAgICAgICByZXR1cm4gZjsKICAgICAgICAgIH0pOwogICAgICB9KSgiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyIpOwogICAgfSwKICAgIGZ1bmN0aW9uICh0LCBlLCBuKSB7CiAgICAgIGZ1bmN0aW9uIHIodCkgewogICAgICAgIHJldHVybiAociA9CiAgICAgICAgICAiZnVuY3Rpb24iID09IHR5cGVvZiBTeW1ib2wgJiYgInN5bWJvbCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvcgogICAgICAgICAgICA/IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICByZXR1cm4gdHlwZW9mIHQ7CiAgICAgICAgICAgICAgfQogICAgICAgICAgICA6IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICByZXR1cm4gdCAmJgogICAgICAgICAgICAgICAgICAiZnVuY3Rpb24iID09IHR5cGVvZiBTeW1ib2wgJiYKICAgICAgICAgICAgICAgICAgdC5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmCiAgICAgICAgICAgICAgICAgIHQgIT09IFN5bWJvbC5wcm90b3R5cGUKICAgICAgICAgICAgICAgICAgPyAic3ltYm9sIgogICAgICAgICAgICAgICAgICA6IHR5cGVvZiB0OwogICAgICAgICAgICAgIH0pKHQpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIG8odCwgZSkgewogICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgZS5sZW5ndGg7IG4rKykgewogICAgICAgICAgdmFyIHIgPSBlW25dOwogICAgICAgICAgKHIuZW51bWVyYWJsZSA9IHIuZW51bWVyYWJsZSB8fCAhMSksCiAgICAgICAgICAgIChyLmNvbmZpZ3VyYWJsZSA9ICEwKSwKICAgICAgICAgICAgInZhbHVlIiBpbiByICYmIChyLndyaXRhYmxlID0gITApLAogICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgci5rZXksIHIpOwogICAgICAgIH0KICAgICAgfQogICAgICBmdW5jdGlvbiBpKHQsIGUsIG4pIHsKICAgICAgICByZXR1cm4gKGkgPQogICAgICAgICAgInVuZGVmaW5lZCIgIT0gdHlwZW9mIFJlZmxlY3QgJiYgUmVmbGVjdC5nZXQKICAgICAgICAgICAgPyBSZWZsZWN0LmdldAogICAgICAgICAgICA6IGZ1bmN0aW9uICh0LCBlLCBuKSB7CiAgICAgICAgICAgICAgICB2YXIgciA9IChmdW5jdGlvbiAodCwgZSkgewogICAgICAgICAgICAgICAgICBmb3IgKAogICAgICAgICAgICAgICAgICAgIDsKICAgICAgICAgICAgICAgICAgICAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsIGUpICYmCiAgICAgICAgICAgICAgICAgICAgbnVsbCAhPT0gKHQgPSBmKHQpKTsKCiAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgIHJldHVybiB0OwogICAgICAgICAgICAgICAgfSkodCwgZSk7CiAgICAgICAgICAgICAgICBpZiAocikgewogICAgICAgICAgICAgICAgICB2YXIgbyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IociwgZSk7CiAgICAgICAgICAgICAgICAgIHJldHVybiBvLmdldCA/IG8uZ2V0LmNhbGwobikgOiBvLnZhbHVlOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgIH0pKHQsIGUsIG4gfHwgdCk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gcyh0LCBlKSB7CiAgICAgICAgcmV0dXJuIChzID0KICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fAogICAgICAgICAgZnVuY3Rpb24gKHQsIGUpIHsKICAgICAgICAgICAgcmV0dXJuICh0Ll9fcHJvdG9fXyA9IGUpLCB0OwogICAgICAgICAgfSkodCwgZSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gYyh0KSB7CiAgICAgICAgdmFyIGUgPSAoZnVuY3Rpb24gKCkgewogICAgICAgICAgaWYgKCJ1bmRlZmluZWQiID09IHR5cGVvZiBSZWZsZWN0IHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuICExOwogICAgICAgICAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiAhMTsKICAgICAgICAgIGlmICgiZnVuY3Rpb24iID09IHR5cGVvZiBQcm94eSkgcmV0dXJuICEwOwogICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoCiAgICAgICAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pCiAgICAgICAgICAgICAgKSwKICAgICAgICAgICAgICAhMAogICAgICAgICAgICApOwogICAgICAgICAgfSBjYXRjaCAodCkgewogICAgICAgICAgICByZXR1cm4gITE7CiAgICAgICAgICB9CiAgICAgICAgfSkoKTsKICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgewogICAgICAgICAgdmFyIG4sCiAgICAgICAgICAgIHIgPSBmKHQpOwogICAgICAgICAgaWYgKGUpIHsKICAgICAgICAgICAgdmFyIG8gPSBmKHRoaXMpLmNvbnN0cnVjdG9yOwogICAgICAgICAgICBuID0gUmVmbGVjdC5jb25zdHJ1Y3QociwgYXJndW1lbnRzLCBvKTsKICAgICAgICAgIH0gZWxzZSBuID0gci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgICAgcmV0dXJuIGEodGhpcywgbik7CiAgICAgICAgfTsKICAgICAgfQogICAgICBmdW5jdGlvbiBhKHQsIGUpIHsKICAgICAgICBpZiAoZSAmJiAoIm9iamVjdCIgPT09IHIoZSkgfHwgImZ1bmN0aW9uIiA9PSB0eXBlb2YgZSkpIHJldHVybiBlOwogICAgICAgIGlmICh2b2lkIDAgIT09IGUpCiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKAogICAgICAgICAgICAiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWQiCiAgICAgICAgICApOwogICAgICAgIHJldHVybiB1KHQpOwogICAgICB9CiAgICAgIGZ1bmN0aW9uIHUodCkgewogICAgICAgIGlmICh2b2lkIDAgPT09IHQpCiAgICAgICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoCiAgICAgICAgICAgICJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWQiCiAgICAgICAgICApOwogICAgICAgIHJldHVybiB0OwogICAgICB9CiAgICAgIGZ1bmN0aW9uIGYodCkgewogICAgICAgIHJldHVybiAoZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZgogICAgICAgICAgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YKICAgICAgICAgIDogZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICByZXR1cm4gdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpOwogICAgICAgICAgICB9KSh0KTsKICAgICAgfQogICAgICB2YXIgbCwKICAgICAgICBwID0gbigxMSksCiAgICAgICAgaCA9IG4oMCksCiAgICAgICAgeSA9IC9cbi9nLAogICAgICAgIGQgPSAvXFxuL2csCiAgICAgICAgdiA9IChmdW5jdGlvbiAodCkgewogICAgICAgICAgIShmdW5jdGlvbiAodCwgZSkgewogICAgICAgICAgICBpZiAoImZ1bmN0aW9uIiAhPSB0eXBlb2YgZSAmJiBudWxsICE9PSBlKQogICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoCiAgICAgICAgICAgICAgICAiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24iCiAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgKHQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShlICYmIGUucHJvdG90eXBlLCB7CiAgICAgICAgICAgICAgY29uc3RydWN0b3I6IHsgdmFsdWU6IHQsIHdyaXRhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9LAogICAgICAgICAgICB9KSksCiAgICAgICAgICAgICAgZSAmJiBzKHQsIGUpOwogICAgICAgICAgfSkocCwgdCk7CiAgICAgICAgICB2YXIgZSwKICAgICAgICAgICAgbiwKICAgICAgICAgICAgciwKICAgICAgICAgICAgYSA9IGMocCk7CiAgICAgICAgICBmdW5jdGlvbiBwKHQpIHsKICAgICAgICAgICAgdmFyIGU7CiAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgKGZ1bmN0aW9uICh0LCBlKSB7CiAgICAgICAgICAgICAgICBpZiAoISh0IGluc3RhbmNlb2YgZSkpCiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbiIpOwogICAgICAgICAgICAgIH0pKHRoaXMsIHApLAogICAgICAgICAgICAgICgoZSA9IGEuY2FsbCh0aGlzLCB0KSkucXVlcnkgPSBlLnF1ZXJ5IHx8IHt9KSwKICAgICAgICAgICAgICBsIHx8IChsID0gaC5fX19laW8gPSBoLl9fX2VpbyB8fCBbXSksCiAgICAgICAgICAgICAgKGUuaW5kZXggPSBsLmxlbmd0aCksCiAgICAgICAgICAgICAgbC5wdXNoKGUub25EYXRhLmJpbmQodShlKSkpLAogICAgICAgICAgICAgIChlLnF1ZXJ5LmogPSBlLmluZGV4KSwKICAgICAgICAgICAgICBlCiAgICAgICAgICAgICk7CiAgICAgICAgICB9CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAoZSA9IHApLAogICAgICAgICAgICAobiA9IFsKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJzdXBwb3J0c0JpbmFyeSIsCiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgcmV0dXJuICExOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogImRvQ2xvc2UiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgdGhpcy5zY3JpcHQgJiYKICAgICAgICAgICAgICAgICAgICAoKHRoaXMuc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7fSksCiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnNjcmlwdCksCiAgICAgICAgICAgICAgICAgICAgKHRoaXMuc2NyaXB0ID0gbnVsbCkpLAogICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybSAmJgogICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZm9ybS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZm9ybSksCiAgICAgICAgICAgICAgICAgICAgICAodGhpcy5mb3JtID0gbnVsbCksCiAgICAgICAgICAgICAgICAgICAgICAodGhpcy5pZnJhbWUgPSBudWxsKSksCiAgICAgICAgICAgICAgICAgICAgaShmKHAucHJvdG90eXBlKSwgImRvQ2xvc2UiLCB0aGlzKS5jYWxsKHRoaXMpOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogImRvUG9sbCIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMsCiAgICAgICAgICAgICAgICAgICAgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInNjcmlwdCIpOwogICAgICAgICAgICAgICAgICB0aGlzLnNjcmlwdCAmJgogICAgICAgICAgICAgICAgICAgICh0aGlzLnNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc2NyaXB0KSwKICAgICAgICAgICAgICAgICAgICAodGhpcy5zY3JpcHQgPSBudWxsKSksCiAgICAgICAgICAgICAgICAgICAgKGUuYXN5bmMgPSAhMCksCiAgICAgICAgICAgICAgICAgICAgKGUuc3JjID0gdGhpcy51cmkoKSksCiAgICAgICAgICAgICAgICAgICAgKGUub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7CiAgICAgICAgICAgICAgICAgICAgICB0Lm9uRXJyb3IoImpzb25wIHBvbGwgZXJyb3IiLCBlKTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgICAgdmFyIG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgic2NyaXB0IilbMF07CiAgICAgICAgICAgICAgICAgIG4KICAgICAgICAgICAgICAgICAgICA/IG4ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSwgbikKICAgICAgICAgICAgICAgICAgICA6IChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmJvZHkpLmFwcGVuZENoaWxkKGUpLAogICAgICAgICAgICAgICAgICAgICh0aGlzLnNjcmlwdCA9IGUpLAogICAgICAgICAgICAgICAgICAgICJ1bmRlZmluZWQiICE9IHR5cGVvZiBuYXZpZ2F0b3IgJiYKICAgICAgICAgICAgICAgICAgICAgIC9nZWNrby9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYKICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VGltZW91dEZuKGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCJpZnJhbWUiKTsKICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0KSwKICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHQpOwogICAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJkb1dyaXRlIiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCwgZSkgewogICAgICAgICAgICAgICAgICB2YXIgbiwKICAgICAgICAgICAgICAgICAgICByID0gdGhpczsKICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZvcm0pIHsKICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImZvcm0iKSwKICAgICAgICAgICAgICAgICAgICAgIGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCJ0ZXh0YXJlYSIpLAogICAgICAgICAgICAgICAgICAgICAgcyA9ICh0aGlzLmlmcmFtZUlkID0gImVpb19pZnJhbWVfIiArIHRoaXMuaW5kZXgpOwogICAgICAgICAgICAgICAgICAgIChvLmNsYXNzTmFtZSA9ICJzb2NrZXRpbyIpLAogICAgICAgICAgICAgICAgICAgICAgKG8uc3R5bGUucG9zaXRpb24gPSAiYWJzb2x1dGUiKSwKICAgICAgICAgICAgICAgICAgICAgIChvLnN0eWxlLnRvcCA9ICItMTAwMHB4IiksCiAgICAgICAgICAgICAgICAgICAgICAoby5zdHlsZS5sZWZ0ID0gIi0xMDAwcHgiKSwKICAgICAgICAgICAgICAgICAgICAgIChvLnRhcmdldCA9IHMpLAogICAgICAgICAgICAgICAgICAgICAgKG8ubWV0aG9kID0gIlBPU1QiKSwKICAgICAgICAgICAgICAgICAgICAgIG8uc2V0QXR0cmlidXRlKCJhY2NlcHQtY2hhcnNldCIsICJ1dGYtOCIpLAogICAgICAgICAgICAgICAgICAgICAgKGkubmFtZSA9ICJkIiksCiAgICAgICAgICAgICAgICAgICAgICBvLmFwcGVuZENoaWxkKGkpLAogICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvKSwKICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmZvcm0gPSBvKSwKICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmFyZWEgPSBpKTsKICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICBmdW5jdGlvbiBjKCkgewogICAgICAgICAgICAgICAgICAgIGEoKSwgZSgpOwogICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5hY3Rpb24gPSB0aGlzLnVyaSgpOwogICAgICAgICAgICAgICAgICB2YXIgYSA9IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgICBpZiAoci5pZnJhbWUpCiAgICAgICAgICAgICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgICAgICAgICByLmZvcm0ucmVtb3ZlQ2hpbGQoci5pZnJhbWUpOwogICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAodCkgewogICAgICAgICAgICAgICAgICAgICAgICByLm9uRXJyb3IoImpzb25wIHBvbGxpbmcgaWZyYW1lIHJlbW92YWwgZXJyb3IiLCB0KTsKICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPQogICAgICAgICAgICAgICAgICAgICAgICAnPGlmcmFtZSBzcmM9ImphdmFzY3JpcHQ6MCIgbmFtZT0iJyArIHIuaWZyYW1lSWQgKyAnIj4nOwogICAgICAgICAgICAgICAgICAgICAgbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodCk7CiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAodCkgewogICAgICAgICAgICAgICAgICAgICAgKChuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiaWZyYW1lIikpLm5hbWUgPQogICAgICAgICAgICAgICAgICAgICAgICByLmlmcmFtZUlkKSwKICAgICAgICAgICAgICAgICAgICAgICAgKG4uc3JjID0gImphdmFzY3JpcHQ6MCIpOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAobi5pZCA9IHIuaWZyYW1lSWQpLCByLmZvcm0uYXBwZW5kQ2hpbGQobiksIChyLmlmcmFtZSA9IG4pOwogICAgICAgICAgICAgICAgICB9OwogICAgICAgICAgICAgICAgICBhKCksCiAgICAgICAgICAgICAgICAgICAgKHQgPSB0LnJlcGxhY2UoZCwgIlxcXG4iKSksCiAgICAgICAgICAgICAgICAgICAgKHRoaXMuYXJlYS52YWx1ZSA9IHQucmVwbGFjZSh5LCAiXFxuIikpOwogICAgICAgICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5zdWJtaXQoKTsKICAgICAgICAgICAgICAgICAgfSBjYXRjaCAodCkge30KICAgICAgICAgICAgICAgICAgdGhpcy5pZnJhbWUuYXR0YWNoRXZlbnQKICAgICAgICAgICAgICAgICAgICA/ICh0aGlzLmlmcmFtZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICJjb21wbGV0ZSIgPT09IHIuaWZyYW1lLnJlYWR5U3RhdGUgJiYgYygpOwogICAgICAgICAgICAgICAgICAgICAgfSkKICAgICAgICAgICAgICAgICAgICA6ICh0aGlzLmlmcmFtZS5vbmxvYWQgPSBjKTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgXSkgJiYgbyhlLnByb3RvdHlwZSwgbiksCiAgICAgICAgICAgIHIgJiYgbyhlLCByKSwKICAgICAgICAgICAgcAogICAgICAgICAgKTsKICAgICAgICB9KShwKTsKICAgICAgdC5leHBvcnRzID0gdjsKICAgIH0sCiAgICBmdW5jdGlvbiAodCwgZSwgbikgewogICAgICBmdW5jdGlvbiByKHQpIHsKICAgICAgICByZXR1cm4gKHIgPQogICAgICAgICAgImZ1bmN0aW9uIiA9PSB0eXBlb2YgU3ltYm9sICYmICJzeW1ib2wiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IKICAgICAgICAgICAgPyBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB0OwogICAgICAgICAgICAgIH0KICAgICAgICAgICAgOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgcmV0dXJuIHQgJiYKICAgICAgICAgICAgICAgICAgImZ1bmN0aW9uIiA9PSB0eXBlb2YgU3ltYm9sICYmCiAgICAgICAgICAgICAgICAgIHQuY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJgogICAgICAgICAgICAgICAgICB0ICE9PSBTeW1ib2wucHJvdG90eXBlCiAgICAgICAgICAgICAgICAgID8gInN5bWJvbCIKICAgICAgICAgICAgICAgICAgOiB0eXBlb2YgdDsKICAgICAgICAgICAgICB9KSh0KTsKICAgICAgfQogICAgICBmdW5jdGlvbiBvKHQsIGUpIHsKICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGUubGVuZ3RoOyBuKyspIHsKICAgICAgICAgIHZhciByID0gZVtuXTsKICAgICAgICAgIChyLmVudW1lcmFibGUgPSByLmVudW1lcmFibGUgfHwgITEpLAogICAgICAgICAgICAoci5jb25maWd1cmFibGUgPSAhMCksCiAgICAgICAgICAgICJ2YWx1ZSIgaW4gciAmJiAoci53cml0YWJsZSA9ICEwKSwKICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIHIua2V5LCByKTsKICAgICAgICB9CiAgICAgIH0KICAgICAgZnVuY3Rpb24gaSh0LCBlKSB7CiAgICAgICAgcmV0dXJuIChpID0KICAgICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fAogICAgICAgICAgZnVuY3Rpb24gKHQsIGUpIHsKICAgICAgICAgICAgcmV0dXJuICh0Ll9fcHJvdG9fXyA9IGUpLCB0OwogICAgICAgICAgfSkodCwgZSk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gcyh0KSB7CiAgICAgICAgdmFyIGUgPSAoZnVuY3Rpb24gKCkgewogICAgICAgICAgaWYgKCJ1bmRlZmluZWQiID09IHR5cGVvZiBSZWZsZWN0IHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuICExOwogICAgICAgICAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiAhMTsKICAgICAgICAgIGlmICgiZnVuY3Rpb24iID09IHR5cGVvZiBQcm94eSkgcmV0dXJuICEwOwogICAgICAgICAgdHJ5IHsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoCiAgICAgICAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pCiAgICAgICAgICAgICAgKSwKICAgICAgICAgICAgICAhMAogICAgICAgICAgICApOwogICAgICAgICAgfSBjYXRjaCAodCkgewogICAgICAgICAgICByZXR1cm4gITE7CiAgICAgICAgICB9CiAgICAgICAgfSkoKTsKICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgewogICAgICAgICAgdmFyIG4sCiAgICAgICAgICAgIHIgPSBhKHQpOwogICAgICAgICAgaWYgKGUpIHsKICAgICAgICAgICAgdmFyIG8gPSBhKHRoaXMpLmNvbnN0cnVjdG9yOwogICAgICAgICAgICBuID0gUmVmbGVjdC5jb25zdHJ1Y3QociwgYXJndW1lbnRzLCBvKTsKICAgICAgICAgIH0gZWxzZSBuID0gci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogICAgICAgICAgcmV0dXJuIGModGhpcywgbik7CiAgICAgICAgfTsKICAgICAgfQogICAgICBmdW5jdGlvbiBjKHQsIGUpIHsKICAgICAgICBpZiAoZSAmJiAoIm9iamVjdCIgPT09IHIoZSkgfHwgImZ1bmN0aW9uIiA9PSB0eXBlb2YgZSkpIHJldHVybiBlOwogICAgICAgIGlmICh2b2lkIDAgIT09IGUpCiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKAogICAgICAgICAgICAiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWQiCiAgICAgICAgICApOwogICAgICAgIHJldHVybiAoZnVuY3Rpb24gKHQpIHsKICAgICAgICAgIGlmICh2b2lkIDAgPT09IHQpCiAgICAgICAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcigKICAgICAgICAgICAgICAidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkIgogICAgICAgICAgICApOwogICAgICAgICAgcmV0dXJuIHQ7CiAgICAgICAgfSkodCk7CiAgICAgIH0KICAgICAgZnVuY3Rpb24gYSh0KSB7CiAgICAgICAgcmV0dXJuIChhID0gT2JqZWN0LnNldFByb3RvdHlwZU9mCiAgICAgICAgICA/IE9iamVjdC5nZXRQcm90b3R5cGVPZgogICAgICAgICAgOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgIHJldHVybiB0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodCk7CiAgICAgICAgICAgIH0pKHQpOwogICAgICB9CiAgICAgIHZhciB1ID0gbig0KSwKICAgICAgICBmID0gbigxKSwKICAgICAgICBsID0gbig1KSwKICAgICAgICBwID0gbigxMyksCiAgICAgICAgaCA9IG4oMykucGljaywKICAgICAgICB5ID0gbigyOSksCiAgICAgICAgZCA9IHkuV2ViU29ja2V0LAogICAgICAgIHYgPSB5LnVzaW5nQnJvd3NlcldlYlNvY2tldCwKICAgICAgICBiID0geS5kZWZhdWx0QmluYXJ5VHlwZSwKICAgICAgICBtID0geS5uZXh0VGljaywKICAgICAgICBnID0KICAgICAgICAgICJ1bmRlZmluZWQiICE9IHR5cGVvZiBuYXZpZ2F0b3IgJiYKICAgICAgICAgICJzdHJpbmciID09IHR5cGVvZiBuYXZpZ2F0b3IucHJvZHVjdCAmJgogICAgICAgICAgInJlYWN0bmF0aXZlIiA9PT0gbmF2aWdhdG9yLnByb2R1Y3QudG9Mb3dlckNhc2UoKSwKICAgICAgICBrID0gKGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAhKGZ1bmN0aW9uICh0LCBlKSB7CiAgICAgICAgICAgIGlmICgiZnVuY3Rpb24iICE9IHR5cGVvZiBlICYmIG51bGwgIT09IGUpCiAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigKICAgICAgICAgICAgICAgICJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiIKICAgICAgICAgICAgICApOwogICAgICAgICAgICAodC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGUgJiYgZS5wcm90b3R5cGUsIHsKICAgICAgICAgICAgICBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogdCwgd3JpdGFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwIH0sCiAgICAgICAgICAgIH0pKSwKICAgICAgICAgICAgICBlICYmIGkodCwgZSk7CiAgICAgICAgICB9KShhLCB0KTsKICAgICAgICAgIHZhciBlLAogICAgICAgICAgICBuLAogICAgICAgICAgICByLAogICAgICAgICAgICBjID0gcyhhKTsKICAgICAgICAgIGZ1bmN0aW9uIGEodCkgewogICAgICAgICAgICB2YXIgZTsKICAgICAgICAgICAgcmV0dXJuICgKICAgICAgICAgICAgICAoZnVuY3Rpb24gKHQsIGUpIHsKICAgICAgICAgICAgICAgIGlmICghKHQgaW5zdGFuY2VvZiBlKSkKICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uIik7CiAgICAgICAgICAgICAgfSkodGhpcywgYSksCiAgICAgICAgICAgICAgKChlID0gYy5jYWxsKHRoaXMsIHQpKS5zdXBwb3J0c0JpbmFyeSA9ICF0LmZvcmNlQmFzZTY0KSwKICAgICAgICAgICAgICBlCiAgICAgICAgICAgICk7CiAgICAgICAgICB9CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAoZSA9IGEpLAogICAgICAgICAgICAobiA9IFsKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJuYW1lIiwKICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICByZXR1cm4gIndlYnNvY2tldCI7CiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAga2V5OiAiZG9PcGVuIiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrKCkpIHsKICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMudXJpKCksCiAgICAgICAgICAgICAgICAgICAgICBlID0gdGhpcy5vcHRzLnByb3RvY29scywKICAgICAgICAgICAgICAgICAgICAgIG4gPSBnCiAgICAgICAgICAgICAgICAgICAgICAgID8ge30KICAgICAgICAgICAgICAgICAgICAgICAgOiBoKAogICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRzLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgImFnZW50IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICJwZXJNZXNzYWdlRGVmbGF0ZSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAicGZ4IiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICJrZXkiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgInBhc3NwaHJhc2UiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgImNlcnQiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgImNhIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICJjaXBoZXJzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICJyZWplY3RVbmF1dGhvcml6ZWQiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgImxvY2FsQWRkcmVzcyIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAicHJvdG9jb2xWZXJzaW9uIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICJvcmlnaW4iLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgIm1heFBheWxvYWQiLAogICAgICAgICAgICAgICAgICAgICAgICAgICAgImZhbWlseSIsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAiY2hlY2tTZXJ2ZXJJZGVudGl0eSIKICAgICAgICAgICAgICAgICAgICAgICAgICApOwogICAgICAgICAgICAgICAgICAgIHRoaXMub3B0cy5leHRyYUhlYWRlcnMgJiYKICAgICAgICAgICAgICAgICAgICAgIChuLmhlYWRlcnMgPSB0aGlzLm9wdHMuZXh0cmFIZWFkZXJzKTsKICAgICAgICAgICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgICAgICAgdGhpcy53cyA9CiAgICAgICAgICAgICAgICAgICAgICAgIHYgJiYgIWcgPyAoZSA/IG5ldyBkKHQsIGUpIDogbmV3IGQodCkpIDogbmV3IGQodCwgZSwgbik7CiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAodCkgewogICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW1pdCgiZXJyb3IiLCB0KTsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgKHRoaXMud3MuYmluYXJ5VHlwZSA9IHRoaXMuc29ja2V0LmJpbmFyeVR5cGUgfHwgYiksCiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7CiAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJhZGRFdmVudExpc3RlbmVycyIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXM7CiAgICAgICAgICAgICAgICAgICh0aGlzLndzLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgICB0Lm9wdHMuYXV0b1VucmVmICYmIHQud3MuX3NvY2tldC51bnJlZigpLCB0Lm9uT3BlbigpOwogICAgICAgICAgICAgICAgICB9KSwKICAgICAgICAgICAgICAgICAgICAodGhpcy53cy5vbmNsb3NlID0gdGhpcy5vbkNsb3NlLmJpbmQodGhpcykpLAogICAgICAgICAgICAgICAgICAgICh0aGlzLndzLm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7CiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdC5vbkRhdGEoZS5kYXRhKTsKICAgICAgICAgICAgICAgICAgICB9KSwKICAgICAgICAgICAgICAgICAgICAodGhpcy53cy5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHsKICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0Lm9uRXJyb3IoIndlYnNvY2tldCBlcnJvciIsIGUpOwogICAgICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogIndyaXRlIiwKICAgICAgICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgICB2YXIgZSA9IHRoaXM7CiAgICAgICAgICAgICAgICAgIHRoaXMud3JpdGFibGUgPSAhMTsKICAgICAgICAgICAgICAgICAgZm9yICgKICAgICAgICAgICAgICAgICAgICB2YXIgbiA9IGZ1bmN0aW9uIChuKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByID0gdFtuXSwKICAgICAgICAgICAgICAgICAgICAgICAgICBvID0gbiA9PT0gdC5sZW5ndGggLSAxOwogICAgICAgICAgICAgICAgICAgICAgICBmLmVuY29kZVBhY2tldChyLCBlLnN1cHBvcnRzQmluYXJ5LCBmdW5jdGlvbiAodCkgewogICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0ge307CiAgICAgICAgICAgICAgICAgICAgICAgICAgdiB8fAogICAgICAgICAgICAgICAgICAgICAgICAgICAgKHIub3B0aW9ucyAmJiAobi5jb21wcmVzcyA9IHIub3B0aW9ucy5jb21wcmVzcyksCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLm9wdHMucGVyTWVzc2FnZURlZmxhdGUgJiYKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCJzdHJpbmciID09IHR5cGVvZiB0CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBCdWZmZXIuYnl0ZUxlbmd0aCh0KQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdC5sZW5ndGgpIDwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLm9wdHMucGVyTWVzc2FnZURlZmxhdGUudGhyZXNob2xkICYmCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuLmNvbXByZXNzID0gITEpKTsKICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdiA/IGUud3Muc2VuZCh0KSA6IGUud3Muc2VuZCh0LCBuKTsKICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoICh0KSB7fQogICAgICAgICAgICAgICAgICAgICAgICAgIG8gJiYKICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0oZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZS53cml0YWJsZSA9ICEwKSwgZS5lbWl0KCJkcmFpbiIpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZS5zZXRUaW1lb3V0Rm4pOwogICAgICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICByID0gMDsKICAgICAgICAgICAgICAgICAgICByIDwgdC5sZW5ndGg7CiAgICAgICAgICAgICAgICAgICAgcisrCiAgICAgICAgICAgICAgICAgICkKICAgICAgICAgICAgICAgICAgICBuKHIpOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogIm9uQ2xvc2UiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgdS5wcm90b3R5cGUub25DbG9zZS5jYWxsKHRoaXMpOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogImRvQ2xvc2UiLAogICAgICAgICAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgdm9pZCAwICE9PSB0aGlzLndzICYmICh0aGlzLndzLmNsb3NlKCksICh0aGlzLndzID0gbnVsbCkpOwogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIHsKICAgICAgICAgICAgICAgIGtleTogInVyaSIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICB2YXIgdCA9IHRoaXMucXVlcnkgfHwge30sCiAgICAgICAgICAgICAgICAgICAgZSA9IHRoaXMub3B0cy5zZWN1cmUgPyAid3NzIiA6ICJ3cyIsCiAgICAgICAgICAgICAgICAgICAgbiA9ICIiOwogICAgICAgICAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAgICAgICAgIHRoaXMub3B0cy5wb3J0ICYmCiAgICAgICAgICAgICAgICAgICAgICAoKCJ3c3MiID09PSBlICYmIDQ0MyAhPT0gTnVtYmVyKHRoaXMub3B0cy5wb3J0KSkgfHwKICAgICAgICAgICAgICAgICAgICAgICAgKCJ3cyIgPT09IGUgJiYgODAgIT09IE51bWJlcih0aGlzLm9wdHMucG9ydCkpKSAmJgogICAgICAgICAgICAgICAgICAgICAgKG4gPSAiOiIgKyB0aGlzLm9wdHMucG9ydCksCiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRzLnRpbWVzdGFtcFJlcXVlc3RzICYmCiAgICAgICAgICAgICAgICAgICAgICAodFt0aGlzLm9wdHMudGltZXN0YW1wUGFyYW1dID0gcCgpKSwKICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cHBvcnRzQmluYXJ5IHx8ICh0LmI2NCA9IDEpLAogICAgICAgICAgICAgICAgICAgICh0ID0gbC5lbmNvZGUodCkpLmxlbmd0aCAmJiAodCA9ICI/IiArIHQpLAogICAgICAgICAgICAgICAgICAgIGUgKwogICAgICAgICAgICAgICAgICAgICAgIjovLyIgKwogICAgICAgICAgICAgICAgICAgICAgKC0xICE9PSB0aGlzLm9wdHMuaG9zdG5hbWUuaW5kZXhPZigiOiIpCiAgICAgICAgICAgICAgICAgICAgICAgID8gIlsiICsgdGhpcy5vcHRzLmhvc3RuYW1lICsgIl0iCiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5vcHRzLmhvc3RuYW1lKSArCiAgICAgICAgICAgICAgICAgICAgICBuICsKICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0cy5wYXRoICsKICAgICAgICAgICAgICAgICAgICAgIHQKICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICBrZXk6ICJjaGVjayIsCiAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICByZXR1cm4gISgKICAgICAgICAgICAgICAgICAgICAhZCB8fAogICAgICAgICAgICAgICAgICAgICgiX19pbml0aWFsaXplIiBpbiBkICYmIHRoaXMubmFtZSA9PT0gYS5wcm90b3R5cGUubmFtZSkKICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgXSkgJiYgbyhlLnByb3RvdHlwZSwgbiksCiAgICAgICAgICAgIHIgJiYgbyhlLCByKSwKICAgICAgICAgICAgYQogICAgICAgICAgKTsKICAgICAgICB9KSh1KTsKICAgICAgdC5leHBvcnRzID0gazsKICAgIH0sCiAgICBmdW5jdGlvbiAodCwgZSwgbikgewogICAgICB2YXIgciA9IG4oMCksCiAgICAgICAgbyA9CiAgICAgICAgICAiZnVuY3Rpb24iID09IHR5cGVvZiBQcm9taXNlICYmICJmdW5jdGlvbiIgPT0gdHlwZW9mIFByb21pc2UucmVzb2x2ZQogICAgICAgICAgICA/IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbih0KTsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIDogZnVuY3Rpb24gKHQsIGUpIHsKICAgICAgICAgICAgICAgIHJldHVybiBlKHQsIDApOwogICAgICAgICAgICAgIH07CiAgICAgIHQuZXhwb3J0cyA9IHsKICAgICAgICBXZWJTb2NrZXQ6IHIuV2ViU29ja2V0IHx8IHIuTW96V2ViU29ja2V0LAogICAgICAgIHVzaW5nQnJvd3NlcldlYlNvY2tldDogITAsCiAgICAgICAgZGVmYXVsdEJpbmFyeVR5cGU6ICJhcnJheWJ1ZmZlciIsCiAgICAgICAgbmV4dFRpY2s6IG8sCiAgICAgIH07CiAgICB9LAogICAgZnVuY3Rpb24gKHQsIGUsIG4pIHsKICAgICAgZnVuY3Rpb24gcih0KSB7CiAgICAgICAgcmV0dXJuIChyID0KICAgICAgICAgICJmdW5jdGlvbiIgPT0gdHlwZW9mIFN5bWJvbCAmJiAic3ltYm9sIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yCiAgICAgICAgICAgID8gZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgdDsKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIDogZnVuY3Rpb24gKHQpIHsKICAgICAgICAgICAgICAgIHJldHVybiB0ICYmCiAgICAgICAgICAgICAgICAgICJmdW5jdGlvbiIgPT0gdHlwZW9mIFN5bWJvbCAmJgogICAgICAgICAgICAgICAgICB0LmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYKICAgICAgICAgICAgICAgICAgdCAhPT0gU3ltYm9sLnByb3RvdHlwZQogICAgICAgICAgICAgICAgICA/ICJzeW1ib2wiCiAgICAgICAgICAgICAgICAgIDogdHlwZW9mIHQ7CiAgICAgICAgICAgICAgfSkodCk7CiAgICAgIH0KICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsICJfX2VzTW9kdWxlIiwgeyB2YWx1ZTogITAgfSksCiAgICAgICAgKGUucmVjb25zdHJ1Y3RQYWNrZXQgPSBlLmRlY29uc3RydWN0UGFja2V0ID0gdm9pZCAwKTsKICAgICAgdmFyIG8gPSBuKDE1KTsKICAgICAgKGUuZGVjb25zdHJ1Y3RQYWNrZXQgPSBmdW5jdGlvbiAodCkgewogICAgICAgIHZhciBlID0gW10sCiAgICAgICAgICBuID0gdC5kYXRhLAogICAgICAgICAgaSA9IHQ7CiAgICAgICAgcmV0dXJuICgKICAgICAgICAgIChpLmRhdGEgPSAoZnVuY3Rpb24gdChlLCBuKSB7CiAgICAgICAgICAgIGlmICghZSkgcmV0dXJuIGU7CiAgICAgICAgICAgIGlmIChvLmlzQmluYXJ5KGUpKSB7CiAgICAgICAgICAgICAgdmFyIGkgPSB7IF9wbGFjZWhvbGRlcjogITAsIG51bTogbi5sZW5ndGggfTsKICAgICAgICAgICAgICByZXR1cm4gbi5wdXNoKGUpLCBpOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGUpKSB7CiAgICAgICAgICAgICAgZm9yICh2YXIgcyA9IG5ldyBBcnJheShlLmxlbmd0aCksIGMgPSAwOyBjIDwgZS5sZW5ndGg7IGMrKykKICAgICAgICAgICAgICAgIHNbY10gPSB0KGVbY10sIG4pOwogICAgICAgICAgICAgIHJldHVybiBzOwogICAgICAgICAgICB9CiAgICAgICAgICAgIGlmICgib2JqZWN0IiA9PT0gcihlKSAmJiAhKGUgaW5zdGFuY2VvZiBEYXRlKSkgewogICAgICAgICAgICAgIHZhciBhID0ge307CiAgICAgICAgICAgICAgZm9yICh2YXIgdSBpbiBlKSBlLmhhc093blByb3BlcnR5KHUpICYmIChhW3VdID0gdChlW3VdLCBuKSk7CiAgICAgICAgICAgICAgcmV0dXJuIGE7CiAgICAgICAgICAgIH0KICAgICAgICAgICAgcmV0dXJuIGU7CiAgICAgICAgICB9KShuLCBlKSksCiAgICAgICAgICAoaS5hdHRhY2htZW50cyA9IGUubGVuZ3RoKSwKICAgICAgICAgIHsgcGFja2V0OiBpLCBidWZmZXJzOiBlIH0KICAgICAgICApOwogICAgICB9KSwKICAgICAgICAoZS5yZWNvbnN0cnVjdFBhY2tldCA9IGZ1bmN0aW9uICh0LCBlKSB7CiAgICAgICAgICByZXR1cm4gKAogICAgICAgICAgICAodC5kYXRhID0gKGZ1bmN0aW9uIHQoZSwgbikgewogICAgICAgICAgICAgIGlmICghZSkgcmV0dXJuIGU7CiAgICAgICAgICAgICAgaWYgKGUgJiYgZS5fcGxhY2Vob2xkZXIpIHJldHVybiBuW2UubnVtXTsKICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlKSkKICAgICAgICAgICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgZS5sZW5ndGg7IG8rKykgZVtvXSA9IHQoZVtvXSwgbik7CiAgICAgICAgICAgICAgZWxzZSBpZiAoIm9iamVjdCIgPT09IHIoZSkpCiAgICAgICAgICAgICAgICBmb3IgKHZhciBpIGluIGUpIGUuaGFzT3duUHJvcGVydHkoaSkgJiYgKGVbaV0gPSB0KGVbaV0sIG4pKTsKICAgICAgICAgICAgICByZXR1cm4gZTsKICAgICAgICAgICAgfSkodC5kYXRhLCBlKSksCiAgICAgICAgICAgICh0LmF0dGFjaG1lbnRzID0gdm9pZCAwKSwKICAgICAgICAgICAgdAogICAgICAgICAgKTsKICAgICAgICB9KTsKICAgIH0sCiAgICBmdW5jdGlvbiAodCwgZSkgewogICAgICBmdW5jdGlvbiBuKHQpIHsKICAgICAgICAodCA9IHQgfHwge30pLAogICAgICAgICAgKHRoaXMubXMgPSB0Lm1pbiB8fCAxMDApLAogICAgICAgICAgKHRoaXMubWF4ID0gdC5tYXggfHwgMWU0KSwKICAgICAgICAgICh0aGlzLmZhY3RvciA9IHQuZmFjdG9yIHx8IDIpLAogICAgICAgICAgKHRoaXMuaml0dGVyID0gdC5qaXR0ZXIgPiAwICYmIHQuaml0dGVyIDw9IDEgPyB0LmppdHRlciA6IDApLAogICAgICAgICAgKHRoaXMuYXR0ZW1wdHMgPSAwKTsKICAgICAgfQogICAgICAodC5leHBvcnRzID0gbiksCiAgICAgICAgKG4ucHJvdG90eXBlLmR1cmF0aW9uID0gZnVuY3Rpb24gKCkgewogICAgICAgICAgdmFyIHQgPSB0aGlzLm1zICogTWF0aC5wb3codGhpcy5mYWN0b3IsIHRoaXMuYXR0ZW1wdHMrKyk7CiAgICAgICAgICBpZiAodGhpcy5qaXR0ZXIpIHsKICAgICAgICAgICAgdmFyIGUgPSBNYXRoLnJhbmRvbSgpLAogICAgICAgICAgICAgIG4gPSBNYXRoLmZsb29yKGUgKiB0aGlzLmppdHRlciAqIHQpOwogICAgICAgICAgICB0ID0gMCA9PSAoMSAmIE1hdGguZmxvb3IoMTAgKiBlKSkgPyB0IC0gbiA6IHQgKyBuOwogICAgICAgICAgfQogICAgICAgICAgcmV0dXJuIDAgfCBNYXRoLm1pbih0LCB0aGlzLm1heCk7CiAgICAgICAgfSksCiAgICAgICAgKG4ucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKCkgewogICAgICAgICAgdGhpcy5hdHRlbXB0cyA9IDA7CiAgICAgICAgfSksCiAgICAgICAgKG4ucHJvdG90eXBlLnNldE1pbiA9IGZ1bmN0aW9uICh0KSB7CiAgICAgICAgICB0aGlzLm1zID0gdDsKICAgICAgICB9KSwKICAgICAgICAobi5wcm90b3R5cGUuc2V0TWF4ID0gZnVuY3Rpb24gKHQpIHsKICAgICAgICAgIHRoaXMubWF4ID0gdDsKICAgICAgICB9KSwKICAgICAgICAobi5wcm90b3R5cGUuc2V0Sml0dGVyID0gZnVuY3Rpb24gKHQpIHsKICAgICAgICAgIHRoaXMuaml0dGVyID0gdDsKICAgICAgICB9KTsKICAgIH0sCiAgXSk7Cn0pOwovLyMgc291cmNlTWFwcGluZ1VSTD1zb2NrZXQuaW8ubWluLmpzLm1hcAo=";

// src/BlokdotsSocketIOServer/webserver/style.css
var style_default = "data:text/css;charset=utf-8;base64,LyogVmFyaWFibGVzICovCjpyb290IHsKICAvKiBmb250cyAqLwogIC0tZm9udC1mYW1pbHktcmVnOiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICJTZWdvZSBVSSIsIFJvYm90bywKICAgIE94eWdlbi1TYW5zLCBVYnVudHUsIENhbnRhcmVsbCwgIkhlbHZldGljYSBOZXVlIiwgc2Fucy1zZXJpZjsKICAtLWZvbnQtZmFtaWx5LW1vbm86ICJTRiBNb25vIiwgIlJvYm90byBNb25vIiwgIk1lbmxvIiwgbW9ub3NwYWNlOwoKICAtLWZvbnQtc2l6ZS1yZWc6IDE2cHg7CiAgLS1mb250LXNpemUtc21hbGw6IDEzcHg7CiAgLS1mb250LXNpemUtdGlueTogMTBweDsKCiAgLS1mb250LXdlaWdodC1tZWQ6IDUwMDsKICAtLWZvbnQtd2VpZ2h0LXJlZzogNDAwOwogIC0tZm9udC13ZWlnaHQtdGhpbjogMzAwOwoKICAvKiBTaXplcyAqLwogIC0tbWF4LXdpZHRoOiA2NDBweDsKCiAgLyogQ29sb3JzICovCgogIC0tY29sb3Itd2hpdGU6ICNmZmZmZmY7CiAgLS1jb2xvci1ibGFjazogIzAwMDAwMDsKCiAgLS1jb2xvci1mb250LXJlZzogdmFyKC0tY29sb3ItYmxhY2spOwogIC0tY29sb3ItZm9udC1tZWQ6ICM4MDgwODA7CiAgLS1jb2xvci1mb250LWRpczogI2IzYjNiMzsKCiAgLS1jb2xvci1ncmF5LTE6ICNmOGY4Zjg7CiAgLS1jb2xvci1ncmF5LTI6ICNmNWY1ZjU7CiAgLS1jb2xvci1ncmF5LTM6ICNmMmYyZjI7CiAgLS1jb2xvci1ncmF5LTQ6ICNmMGYwZjA7CiAgLS1jb2xvci1ncmF5LTU6ICNlYWVhZWE7CiAgLS1jb2xvci1ncmF5LTY6ICNkY2RjZGM7CiAgLS1jb2xvci1ncmF5LTc6ICNjMWMxYzE7CiAgLS1jb2xvci1ncmF5LTg6ICNhOGE4YTg7CiAgLS1jb2xvci1ncmF5LTk6ICM2MDYwNjA7CgogIC0tY29sb3ItYnJhbmQ6ICNmYmU5NDE7CiAgLS1jb2xvci1icmFuZC1tZWRpdW06ICNmYmQ4NDE7CiAgLS1jb2xvci1icmFuZC1kYXJrOiAjZjdjNTEwOwoKICAtLWNvbG9yLXJlZDogI2U3NGMzYzsKICAtLWNvbG9yLWdyZWVuOiAjMWFiYzljOwogIC0tY29sb3ItZ3JlZW4tZGFyazogIzE3YTM4NzsKICAtLWNvbG9yLWJsdWU6ICM1ZDliYzU7CiAgLS1jb2xvci12aW9sZXQ6ICM5ZjYzYjc7CiAgLS1jb2xvci1vcmFuZ2U6ICNmMzljMTI7CiAgLS1jb2xvci15ZWxsb3c6IHZhcigtLWNvbG9yLWJyYW5kLW1lZGl1bSk7CgogIC0tY29sb3ItYWxlcnQtaGlnaDogdmFyKC0tY29sb3ItcmVkKTsKICAtLWNvbG9yLWFsZXJ0LW1lZGl1bTogdmFyKC0tY29sb3Itb3JhbmdlKTsKICAtLWNvbG9yLWFsZXJ0LWxvdzogdmFyKC0tY29sb3IteWVsbG93KTsKCiAgLyogU2l6ZXMgKi8KCiAgLS1ib3JkZXItcmFkaXVzLXJlZzogMnB4OwogIC0td2luZG93cy1tZW51LWJhci1oZWlnaHQ6IDI4cHg7Cn0KCkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHsKICA6cm9vdCB7CiAgICAtLWNvbG9yLXdoaXRlOiAjMzkzOTNhOwogICAgLS1jb2xvci1ibGFjazogI2ZmZmZmZjsKCiAgICAtLWNvbG9yLWdyYXktMTogIzQyNDI0MzsKICAgIC0tY29sb3ItZ3JheS0yOiAjNGQ0ZDRkOwogICAgLS1jb2xvci1ncmF5LTM6ICM4MDgwODA7CiAgICAtLWNvbG9yLWdyYXktNDogIzNkM2QzZTsKICAgIC0tY29sb3ItZ3JheS01OiAjMmQyZDJlOwogICAgLS1jb2xvci1ncmF5LTY6ICM1MDUwNTE7CiAgICAtLWNvbG9yLWdyYXktNzogIzU2NTY1NzsKICAgIC0tY29sb3ItZ3JheS04OiAjNmY2Zjc0OwogICAgLS1jb2xvci1ncmF5LTk6ICM3ODc4N2M7CgogICAgLS1jb2xvci1mb250LXJlZzogdmFyKC0tY29sb3ItYmxhY2spOwogICAgLS1jb2xvci1mb250LW1lZDogIzkwOTA5MDsKICAgIC0tY29sb3ItZm9udC1kaXM6IHZhcigtLWNvbG9yLWdyYXktNik7CiAgfQp9CgpAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHsKICA6cm9vdCB7CiAgICAtLW1heC13aWR0aDogMTAwdnc7CiAgfQp9CgovKiBSZXNldCAqLwpodG1sLApib2R5LApkaXYsCnNwYW4sCmFwcGxldCwKb2JqZWN0LAppZnJhbWUsCmgxLApoMiwKaDMsCmg0LApoNSwKaDYsCnAsCmEsCmltZywKb2wsCnVsLApsaSwKZmllbGRzZXQsCmZvcm0sCmxhYmVsLApsZWdlbmQsCnRhYmxlLApjYXB0aW9uLAp0Ym9keSwKdGZvb3QsCnRoZWFkLAp0ciwKdGgsCnRkIHsKICBib3JkZXI6IDA7CiAgb3V0bGluZTogMDsKICBmb250LXdlaWdodDogaW5oZXJpdDsKICBmb250LXN0eWxlOiBpbmhlcml0OwogIGZvbnQtc2l6ZTogMTAwJTsKICBmb250LWZhbWlseTogaW5oZXJpdDsKICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7CiAgbWFyZ2luOiAwOwogIHBhZGRpbmc6IDA7Cn0KOmZvY3VzIHsKICBvdXRsaW5lOiAwOwp9Cm9sLAp1bCB7CiAgbGlzdC1zdHlsZTogbm9uZTsKfQp0YWJsZSB7CiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTsKICBib3JkZXItc3BhY2luZzogMDsKfQpjYXB0aW9uLAp0aCwKdGQgewogIHRleHQtYWxpZ246IGxlZnQ7CiAgZm9udC13ZWlnaHQ6IDQwMDsKfQpibG9ja3F1b3RlOmJlZm9yZSwKYmxvY2txdW90ZTphZnRlciwKcTpiZWZvcmUsCnE6YWZ0ZXIgewogIGNvbnRlbnQ6ICIiOwp9Ci5jbGVhcmZpeDphZnRlciB7CiAgY29udGVudDogIi4iOwogIGRpc3BsYXk6IGJsb2NrOwogIGNsZWFyOiBib3RoOwogIHZpc2liaWxpdHk6IGhpZGRlbjsKICBsaW5lLWhlaWdodDogMDsKICBoZWlnaHQ6IDA7Cn0KLmNsZWFyZml4IHsKICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Cn0KaHRtbFt4bWxuc10gLmNsZWFyZml4IHsKICBkaXNwbGF5OiBibG9jazsKfQoqIGh0bWwgLmNsZWFyZml4IHsKICBoZWlnaHQ6IDElOwp9Ci5jbGVhciB7CiAgY2xlYXI6IGJvdGg7CiAgaGVpZ2h0OiAwOwogIHdpZHRoOiAwOwogIG1hcmdpbjogMDsKICBwYWRkaW5nOiAwOwp9Ci5ubywKLmF1c2JsZW5kZW4gewogIGRpc3BsYXk6IG5vbmU7Cn0KaGVhZGVyLApzZWN0aW9uLApmb290ZXIsCmFzaWRlLApuYXYsCmFydGljbGUsCmZpZ3VyZSB7CiAgZGlzcGxheTogYmxvY2s7Cn0KCi8qIEFjdHVhbCBTdHlsZSAqLwoqIHsKICBwb3NpdGlvbjogcmVsYXRpdmU7CiAgYm94LXNpemluZzogYm9yZGVyLWJveDsKfQoKaHRtbCwKYm9keSB7CiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LXJlZyk7CgogIGNvbG9yOiB2YXIoLS1jb2xvci1mb250LXJlZyk7CiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itd2hpdGUpOwoKICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1yZWcpOwogIGxpbmUtaGVpZ2h0OiAxLjY7CiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZyk7Cn0KCmgxIHsKICBmb250LXdlaWdodDogNTAwOwogIG1hcmdpbjogMXJlbSAwOwp9CgphIHsKICBjb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pOwp9CgpwICsgcCB7CiAgbWFyZ2luLXRvcDogOHB4Owp9Cgojd3JhcHBlciB7CiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpOwogIG1hcmdpbjogMCBhdXRvOwogIHBhZGRpbmc6IDIwcHg7Cn0KCiN0ZXN0SW5wdXQgewogIG1hcmdpbjogM3JlbSAwOwogIGRpc3BsYXk6IGZsZXg7CiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogIGdhcDogOHB4Owp9CiN0ZXN0SW5wdXQgbGFiZWwgewogIGRpc3BsYXk6IGZsZXg7CiAgZmxleDogMTsKICBhbGlnbi1pdGVtczogY2VudGVyOwp9CiN0ZXN0SW5wdXQgaW5wdXQsCmJ1dHRvbiB7CiAgb3V0bGluZTogbm9uZTsKICBib3JkZXI6IG5vbmU7CiAgYmFja2dyb3VuZDogbm9uZTsKICBib3JkZXItcmFkaXVzOiAwOwogIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1yZWcpOwogIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplLXJlZyk7CiAgY29sb3I6IHZhcigtLWNvbG9yLWZvbnQtcmVnKTsKfQojdGVzdElucHV0IGxhYmVsIHNwYW4gewogIGZsZXg6IDA7CiAgcGFkZGluZy1yaWdodDogM3B4Owp9CiN0ZXN0SW5wdXQgaW5wdXQgewogIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1jb2xvci1ncmF5LTcpOwogIGZsZXg6IDE7Cn0KI3Rlc3RJbnB1dCBpbnB1dDo6cGxhY2Vob2xkZXIgewogIGNvbG9yOiB2YXIoLS1jb2xvci1mb250LWRpcyk7Cn0KI3Rlc3RJbnB1dCBidXR0b24gewogIGN1cnNvcjogcG9pbnRlcjsKICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ncmVlbik7CiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1yZWcpOwogIHBhZGRpbmc6IDAuM2VtIDAuNmVtOwogIGNvbG9yOiAjZmZmOwogIGZsZXgtZ3JvdzogMDsKfQpAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHsKICAjdGVzdElucHV0IHsKICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgfQogICN0ZXN0SW5wdXQgbGFiZWwgewogICAgd2lkdGg6IDEwMCU7CiAgICBmbGV4OiAxOwogIH0KICAjdGVzdElucHV0IGJ1dHRvbiB7CiAgICB3aWR0aDogMTAwJTsKICAgIGZsZXgtZ3JvdzogMTsKICB9CiAgI3Rlc3RJbnB1dCBsYWJlbCBzcGFuIHsKICAgIGZsZXg6IDE7CiAgfQogICN0ZXN0SW5wdXQgbGFiZWwgaW5wdXQgewogICAgZmxleDogMzsKICB9Cn0KCiNzb2NrZXQtaGlzdG9yeSB7CiAgbWFyZ2luOiA0MHB4IDA7Cn0KI3NvY2tldC1oaXN0b3J5IGxpIHsKICB3aWR0aDogMTAwJTsKICBwYWRkaW5nOiA4cHggMDsKICBib3JkZXItdG9wOiBzb2xpZCAxcHggdmFyKC0tY29sb3ItZ3JheS02KTsKfQoKI3NlcnZlckFkZHJlc3MsCiNjb25uZWN0aW9uU3RhdHVzLAouY29kZSB7CiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LW1vbm8pOwogIGZvbnQtc2l6ZTogMC45ZW07CiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItZ3JheS00KTsKICBwYWRkaW5nOiAycHggNHB4OwogIGJvcmRlci1yYWRpdXM6IDJweDsKICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Cn0KCiNjb25uZWN0aW9uU3RhdHVzLm9rLAouY29kZS5vayB7CiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JlZW4pOwogIGNvbG9yOiAjZmZmOwp9CgoubWVzc2FnZVRpbWUgewogIGNvbG9yOiB2YXIoLS1jb2xvci1ncmF5LTgpOwogIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1tb25vKTsKICBtYXJnaW4tcmlnaHQ6IDhweDsKfQoubWVzc2FnZUFycm93IHsKICBoZWlnaHQ6IDAuOGVtOwogIG1hcmdpbi1yaWdodDogOHB4Owp9Ci5tZXNzYWdlQ29udGVudERpc3BsYXkgewp9Ci5tZXNzYWdlVmFsdWVEaXNwbGF5OmJlZm9yZSB7CiAgY29udGVudDogIlsiOwogIGNvbG9yOiB2YXIoLS1jb2xvci1ncmF5LTgpOwp9Ci5tZXNzYWdlVmFsdWVEaXNwbGF5OmFmdGVyIHsKICBjb250ZW50OiAiXSI7CiAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXktOCk7Cn0KLm1lc3NhZ2VWYWx1ZURpc3BsYXkgewogIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1tb25vKTsKICBjb2xvcjogdmFyKC0tY29sb3ItZ3JheS04KTsKICBtYXJnaW4tbGVmdDogOHB4Owp9Ci5tZXNzYWdlVmFsdWVEaXNwbGF5LWlzLW51bWJlciB7CiAgY29sb3I6IHZhcigtLWNvbG9yLXZpb2xldCk7Cn0K";

// src/BlokdotsSocketIOServer/setupHttpServer.ts
var setupHttpServer = () => {
  const httpServer = import_http.default.createServer((req, res) => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Max-Age": 2592e3,
      "Cache-Control": "max-age=86400"
    };
    if (req.method === "OPTIONS") {
      res.writeHead(204, headers);
      res.end();
      return;
    }
    let file = null;
    switch (req.url) {
      case "/favicon.ico":
        headers["Content-Type"] = "image/x-icon";
        file = favicon_default;
        break;
      case "/style.css":
        headers["Content-Type"] = "text/css";
        file = style_default;
        break;
      case "/socket-io.min.js":
        headers["Content-Type"] = "text/javascript";
        file = socket_io_min_default;
        break;
      case "/log-arrow-out.svg":
        headers["Content-Type"] = "image/svg+xml";
        file = log_arrow_out_default;
        break;
      case "/log-arrow-in.svg":
        headers["Content-Type"] = "image/svg+xml";
        file = log_arrow_in_default;
        break;
      default:
        headers["Content-Type"] = "text/html";
        delete headers["Cache-Control"];
        file = webserver_default;
    }
    res.writeHead(200, headers);
    const buffer = Buffer.from(file.split(",")[1], "base64");
    const stream = new import_stream.Readable();
    stream.push(buffer);
    stream.push(null);
    stream.pipe(res);
  });
  return httpServer;
};
var setupHttpServer_default = setupHttpServer;

// src/BlokdotsSocketIOServer/BlokdotsSocketIOServer.ts
var BLOKDOTS_SOCKET_IO_SERVER_DEFAULT_PORT = 8777;
var getBlokdotsSocketIOServerAddress = () => {
  var _a;
  const currentIP = (_a = Object.values((0, import_os.networkInterfaces)()).flat().find((i) => (i == null ? void 0 : i.family) === "IPv4" && !i.internal)) == null ? void 0 : _a.address;
  if (!currentIP)
    return null;
  return `http://${currentIP}:${BLOKDOTS_SOCKET_IO_SERVER_DEFAULT_PORT}`;
};
var BlokdotsSocketIOServer = class {
  constructor() {
    this.activeIntegrations = {};
    this.io = null;
  }
  init() {
    return __async(this, null, function* () {
      return new Promise((resolve) => {
        this.start();
        resolve(null);
      });
    });
  }
  start() {
    const httpServer = setupHttpServer_default();
    this.io = new import_socket.Server(httpServer, {
      wsEngine: import_ws.default.Server,
      pingInterval: 5e3,
      pingTimeout: 5e3,
      allowEIO3: true,
      cors: {
        origin: "*",
        methods: ["GET", "POST"]
      }
    });
    httpServer.listen(BLOKDOTS_SOCKET_IO_SERVER_DEFAULT_PORT, "0.0.0.0");
    this.io.on("connection", (socket) => {
      socket.on("requestInfo", () => {
        this.emitInfo(socket);
      });
      this.emitInfo(socket);
    });
  }
  emitInfo(socket) {
    if (!this.io)
      return;
    let socketsToEmitTo;
    if (!socket) {
      socketsToEmitTo = this.io.sockets;
    } else {
      socketsToEmitTo = socket;
    }
    socketsToEmitTo.emit("info", {
      url: getBlokdotsSocketIOServerAddress(),
      integrations: Object.values(this.activeIntegrations).map((i) => ({
        id: i.id,
        url: i.url,
        connections: i.ioNamespace.sockets.size
      }))
    });
  }
  stop(callback) {
    if (!this.io)
      return;
    this.io.close(callback);
  }
  registerIntegration({
    integrationName,
    handlers = [],
    onClientConnect,
    onClientDisconnect
  }) {
    if (!this.io)
      return;
    let integration = this.activeIntegrations[integrationName];
    if (integration) {
      integration.handlers = integration.handlers.concat(handlers);
      onClientConnect && integration.onClientConnect.push(onClientConnect);
      onClientDisconnect && integration.onClientDisconnect.push(onClientDisconnect);
      for (let [, socket] of integration.ioNamespace.sockets) {
        handlers.forEach(({ eventName, callback }) => {
          socket.on(eventName, callback);
        });
      }
    } else {
      this.activeIntegrations[integrationName] = {
        id: integrationName,
        url: `${getBlokdotsSocketIOServerAddress()}/${integrationName}`,
        handlers: [...handlers],
        ioNamespace: this.io.of("/" + integrationName),
        onClientConnect: onClientConnect ? [onClientConnect] : [],
        onClientDisconnect: onClientDisconnect ? [onClientDisconnect] : [],
        connections: 0
      };
      integration = this.activeIntegrations[integrationName];
      integration.ioNamespace.on("connection", (socket) => {
        integration.handlers.forEach(({ eventName, callback }) => {
          socket.on(eventName, callback);
        });
        integration.ioNamespace.emit("client-connect", {
          integration: integrationName,
          connections: integration.ioNamespace.sockets.size
        });
        integration.onClientConnect.forEach((h) => {
          h({
            integration: integrationName,
            connections: integration.ioNamespace.sockets.size
          });
        });
        this.emitInfo();
        socket.on("disconnect", (reason) => {
          integration.ioNamespace.emit("client-disconnect", {
            reason,
            integration: integrationName,
            connections: integration.ioNamespace.sockets.size
          });
          integration.onClientDisconnect.forEach((h) => {
            h({
              reason,
              integration: integrationName,
              connections: integration.ioNamespace.sockets.size
            });
          });
          this.emitInfo();
        });
      });
      this.emitInfo();
    }
    return __spreadProps(__spreadValues({}, integration), {
      connections: integration.ioNamespace.sockets.size
    });
  }
  unregisterIntegration({
    integrationName,
    handlers = [],
    onClientConnect,
    onClientDisconnect
  }) {
    let integration = this.activeIntegrations[integrationName];
    if (!integration) {
      return;
    }
    integration.handlers = integration.handlers.filter((h) => handlers.some((hU) => hU.eventName === h.eventName && hU.callback === h.callback));
    integration.onClientConnect = integration.onClientConnect.filter((h) => h !== onClientConnect);
    integration.onClientDisconnect = integration.onClientDisconnect.filter((h) => h !== onClientDisconnect);
    for (let [, socket] of integration.ioNamespace.sockets) {
      handlers.forEach(({ eventName, callback }) => {
        socket.off(eventName, callback);
      });
    }
    if (integration.handlers.length === 0) {
      integration.ioNamespace.disconnectSockets();
      delete this.activeIntegrations[integrationName];
      this.emitInfo();
    }
  }
};
var blokdotsSocketIOServer = null;
var getBlokdotsSocketIOServer = () => __async(void 0, null, function* () {
  return new Promise((resolve) => {
    if (blokdotsSocketIOServer === null) {
      blokdotsSocketIOServer = new BlokdotsSocketIOServer();
      blokdotsSocketIOServer.init().then(() => {
        resolve(blokdotsSocketIOServer);
      });
    } else {
      resolve(blokdotsSocketIOServer);
    }
  });
});
var BlokdotsSocketIOServer_default = getBlokdotsSocketIOServer;

// src/Counter/Counter.ts
var import_events = __toModule(require("events"));
var Counter = class extends import_events.default {
  constructor(initialValue = 0) {
    super();
    this.value = initialValue;
  }
  countUp() {
    this.value++;
    this.emit("change", this.value);
  }
  countDown() {
    this.value--;
    this.emit("change", this.value);
  }
  setCountTo(value) {
    this.value = value;
    this.emit("change", this.value);
  }
};
var Counter_default = Counter;

// src/Encoder/Encoder.ts
var import_events2 = __toModule(require("events"));
var import_johnny_five = __toModule(require("johnny-five"));
var Encoder = class extends import_events2.default {
  constructor({
    slot,
    board,
    initialValue = 0,
    debounce = 7
  }) {
    super();
    this.value = initialValue;
    this.waveform = "";
    this.waveformTimeout;
    this.upButton = new import_johnny_five.default.Button({
      pin: slot,
      debounce,
      board
    });
    this.downButton = new import_johnny_five.default.Button({
      pin: slot + 1,
      debounce,
      board
    });
    this.upButton.on("up", () => {
      this.waveform += "1";
      this.handleWaveform();
    });
    this.downButton.on("up", () => {
      this.waveform += "0";
      this.handleWaveform();
    });
  }
  handleWaveform() {
    if (this.waveform.length < 2) {
      this.waveformTimeout = setTimeout(() => {
        this.waveform = "";
      }, 100);
      return;
    }
    if (this.waveformTimeout) {
      clearTimeout(this.waveformTimeout);
    }
    if (this.waveform === "01") {
      this.value = this.value + 1;
      this.emit("change", this.value);
      this.emit("up", this.value);
    } else if (this.waveform === "10") {
      this.value = this.value - 1;
      this.emit("change", this.value);
      this.emit("down", this.value);
    }
    this.waveform = "";
  }
  cleanUp() {
    var _a, _b, _c, _d;
    (_b = (_a = this.upButton).removeAllListeners) == null ? void 0 : _b.call(_a);
    (_d = (_c = this.downButton).removeAllListeners) == null ? void 0 : _d.call(_c);
  }
};
var Encoder_default = Encoder;

// src/FigmaIntegration/FigmaIntegration.ts
var EventEmitter3 = require("events");
var INTEGRATION_NAME = "figma";
var FigmaIntegration = class extends EventEmitter3 {
  constructor() {
    super();
    this.server = null;
    this.integration = null;
    BlokdotsSocketIOServer_default().then((server) => {
      this.server = server;
      this.integration = server.registerIntegration({
        integrationName: INTEGRATION_NAME
      });
    });
  }
  sendReaction(message, shouldUpdateState = true) {
    this.emit("reaction", message);
    this.integration.ioNamespace.emit("reaction", message);
    if (shouldUpdateState) {
      this.emit("updateState", message);
    }
  }
  cleanUp() {
    this.server.unregisterIntegration({
      integrationName: INTEGRATION_NAME
    });
  }
  rotate(parameters) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "rotate",
      parameters: { value: parameters.value, relation: parameters.relation },
      timestamp: Date.now()
    });
  }
  setText(parameters) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "setText",
      parameters: { string: parameters.string },
      timestamp: Date.now()
    });
  }
  setPosition(parameters) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "setPosition",
      parameters: {
        x: parameters.x,
        y: parameters.y,
        relation: parameters.relation
      },
      timestamp: Date.now()
    });
  }
  setOpacity(parameters) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "setOpacity",
      parameters: { value: parameters.value / 100 },
      timestamp: Date.now()
    });
  }
  setSize(parameters) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "setSize",
      parameters: {
        width: parameters.width,
        height: parameters.height,
        relation: parameters.relation
      },
      timestamp: Date.now()
    });
  }
  setColor(parameters) {
    this.sendReaction({
      target: parameters.layer,
      reaction: "setColor",
      parameters: { value: parameters.value },
      timestamp: Date.now()
    });
  }
};
var FigmaIntegration_default = FigmaIntegration;

// src/HapticLabs/HapticLabs.ts
var import_johnny_five2 = __toModule(require("johnny-five"));
var HapticLabs = class {
  constructor({
    slot,
    board,
    initialValue = 0
  }) {
    this.value = initialValue;
    this.track1 = new import_johnny_five2.default.Pin({
      pin: slot,
      type: "digital",
      board
    });
    this.track2 = new import_johnny_five2.default.Pin({
      pin: slot + 1,
      type: "digital",
      board
    });
  }
};
var HapticLabs_default = HapticLabs;

// src/InvertableSensor/InvertableSensor.ts
var import_events3 = __toModule(require("events"));
var import_johnny_five3 = __toModule(require("johnny-five"));
var InvertableSensor = class extends import_events3.default {
  constructor(_a) {
    var _b = _a, {
      invert = false,
      pin,
      board,
      threshold
    } = _b, componentProps = __objRest(_b, [
      "invert",
      "pin",
      "board",
      "threshold"
    ]);
    super();
    this.transformValue = (value) => {
      if (this.invert) {
        value = 1023 - value;
      }
      return value;
    };
    this.j5Object = new import_johnny_five3.default.Sensor(__spreadValues({
      pin,
      board,
      threshold
    }, componentProps));
    this.invert = invert;
    this.j5Object.on("change", () => {
      this.emit("change", this.transformValue(this.j5Object.value));
    });
  }
  cleanUp() {
    var _a, _b;
    (_b = (_a = this.j5Object).removeAllListeners) == null ? void 0 : _b.call(_a);
  }
};
var InvertableSensor_default = InvertableSensor;

// src/Joystick/Joystick.ts
var import_events4 = __toModule(require("events"));
var import_johnny_five4 = __toModule(require("johnny-five"));
var Joystick = class extends import_events4.default {
  constructor({
    slot,
    board,
    invertX = false,
    invertY = false
  }) {
    super();
    this.transformValue = (value) => {
      let pressed = false;
      let x = Math.round(value.x * 100);
      let y = Math.round(value.y * 100);
      x = import_johnny_five4.default.Fn.constrain(x, -50, 50);
      y = import_johnny_five4.default.Fn.constrain(y, -50, 50);
      if (this.invertX)
        x *= -1;
      if (this.invertY)
        y *= -1;
      if (value.x === 1) {
        pressed = true;
        x = this.previousX || 0;
      } else {
        this.previousX = x;
      }
      return { x, y, pressed };
    };
    this.j5Object = new import_johnny_five4.default.Joystick({
      pins: [slot, `A${parseInt(slot.substring(1)) + 1}`],
      board
    });
    this.invertX = invertX;
    this.invertY = invertY;
    this.previousX;
    this.j5Object.on("change", (v) => {
      this.emit("change", this.transformValue(v));
    });
  }
  cleanUp() {
    var _a, _b;
    (_b = (_a = this.j5Object).removeAllListeners) == null ? void 0 : _b.call(_a);
  }
};
var Joystick_default = Joystick;

// src/Metronome/Metronome.ts
var import_events5 = __toModule(require("events"));
var Metronome = class extends import_events5.default {
  constructor(frequency = 1e3) {
    super();
    this.frequency = frequency;
  }
  start() {
    if (this.interval) {
      return;
    }
    this.emit("start", {
      timestamp: Date.now(),
      frequency: this.frequency
    });
    this.interval = setInterval(() => {
      this.emit("tick", {
        timestamp: Date.now(),
        frequency: this.frequency
      });
    }, this.frequency);
  }
  stop() {
    clearInterval(this.interval);
    this.interval = void 0;
    this.emit("stop");
  }
  setFrequency(frequency) {
    if (this.frequency !== frequency) {
      this.frequency = frequency;
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.emit("tick", {
          timestamp: Date.now(),
          frequency: this.frequency
        });
      }, this.frequency);
    }
  }
};
var Metronome_default = Metronome;

// src/OLED/OLED.ts
var import_oled_font_5x7 = __toModule(require_oled_font_5x7());
var import_oled_js = __toModule(require_oled());
var import_qr_image = __toModule(require_qr2());
var OLED_WIDTH = 128;
var OLED_HEIGHT = 64;
var OLED = class extends import_oled_js.default {
  constructor({ board, five: five5 }) {
    super(board, five5, {
      width: 128,
      height: 64,
      address: 60,
      resetPin: null
    });
    this.previousBitmap = null;
    this.drawingIsBlocked = false;
    this.drawingBuffer = Array(OLED_WIDTH * OLED_HEIGHT).fill(null);
    this.clearDisplay = () => {
      this.drawBitmapOptimized(Array(OLED_WIDTH * OLED_HEIGHT).fill(0));
    };
  }
  drawString(string) {
    const buffer = addStringToBuffer(1, 1, string, 1);
    this.drawBitmapOptimized(buffer);
  }
  drawQRCodeNew(data, apply = true) {
    const buffer = addQrCodeToBuffer(1, 1, data, 4);
    if (apply) {
      this.drawBitmapOptimized(buffer);
    }
    return buffer;
  }
  drawValue(label, value, apply = true) {
    const buffer = addTextToBuffer([
      { x: 1, y: 1, string: label, size: 1 },
      { x: 1, y: 24, string: value, size: 2 }
    ]);
    if (apply) {
      this.drawBitmapOptimized(buffer);
    }
    return buffer;
  }
  drawBitmapOptimized(bitmap) {
    if (this.previousBitmap) {
      const updatePixels = [];
      for (let i = 0; i < bitmap.length; i++) {
        if (this.previousBitmap[i] !== bitmap[i]) {
          const [col, row] = indexToCoords(i);
          updatePixels.push([col, row, bitmap[i]]);
        }
      }
      this.updatePixelsBlocking(updatePixels);
      this.previousBitmap = bitmap;
    } else {
      this.drawBitmap(bitmap);
      this.previousBitmap = bitmap;
    }
  }
  updatePixelsBlocking(pixels) {
    if (this.drawingIsBlocked) {
      pixels.forEach(([col, row, color]) => {
        const index = coordsToIndex(col, row);
        this.drawingBuffer[index] = color;
      });
      return;
    }
    let blockingTime = 50 + 2e3 / 8096 * pixels.length;
    this.drawingIsBlocked = true;
    setTimeout(() => {
      this.drawingIsBlocked = false;
      const pixels2 = [];
      this.drawingBuffer.forEach((color, i) => {
        if (color !== null) {
          const [col, row] = indexToCoords(i);
          pixels2.push([col, row, color]);
        }
      });
      this.drawingBuffer = Array(OLED_WIDTH * OLED_HEIGHT).fill(null);
      if (pixels2.length > 0) {
        this.updatePixelsBlocking(pixels2);
      }
    }, blockingTime);
    this.drawPixel(pixels);
  }
};
var getClearBuffer = () => Array(OLED_WIDTH * OLED_HEIGHT).fill(0);
var addQrCodeToBuffer = (x, y, data, margin = 2, size = 2, buffer = getClearBuffer()) => {
  const matrix = import_qr_image.default.matrix(data);
  const pixels = matrix.flat();
  const width = Math.sqrt(pixels.length);
  for (let xi = x; xi < x + width * size + 2 * margin; xi++) {
    for (let yi = y; yi < y + width * size + 2 * margin; yi++) {
      const index = coordsToIndex(xi, yi);
      buffer[index] = 1;
    }
  }
  for (let i = 0; i < pixels.length; i++) {
    let px = Math.floor(i % width) * size;
    let py = Math.floor(i / width) * size;
    px += margin + x;
    py += margin + y;
    for (let xi = px; xi < px + size; xi++) {
      for (let yi = py; yi < py + size; yi++) {
        const index = coordsToIndex(xi, yi);
        buffer[index] = pixels[i] ? 0 : 1;
      }
    }
  }
  return buffer;
};
var addCharToBuffer = (x, y, byteArray, size, buffer = getClearBuffer()) => {
  for (let i = 0; i < byteArray.length; i += 1) {
    for (let j = 0; j < 8; j += 1) {
      const pixelState = byteArray[i][j];
      let xpos;
      let ypos;
      if (size === 1) {
        xpos = x + i;
        ypos = y + j;
        const index = coordsToIndex(xpos, ypos);
        buffer[index] = pixelState ? 1 : 0;
      } else {
        xpos = x + i * size;
        ypos = y + j * size;
        for (let xi = 0; xi < size; xi++) {
          for (let yi = 0; yi < size; yi++) {
            const index = coordsToIndex(xpos + xi, ypos + yi);
            buffer[index] = pixelState ? 1 : 0;
          }
        }
      }
    }
  }
  return buffer;
};
var findCharBuf = (c) => {
  let cBufPos = import_oled_font_5x7.default.lookup.indexOf(c) * import_oled_font_5x7.default.width;
  let cBuf = import_oled_font_5x7.default.fontData.slice(cBufPos, cBufPos + import_oled_font_5x7.default.width);
  return cBuf;
};
var readCharBytes = (byteArray, charHeight) => {
  let bitArr = [], bitCharArr = [];
  for (let i = 0; i < byteArray.length; i += 1) {
    let byte = byteArray[i];
    for (let j = 0; j < charHeight; j += 1) {
      let bit = byte >> j & 1;
      bitArr.push(bit);
    }
    bitCharArr.push(bitArr);
    bitArr = [];
  }
  return bitCharArr;
};
var LETTER_SPACING = 2;
var LINE_SPACING = 3;
var addStringToBuffer = (x, y, string, size = 1, buffer = getClearBuffer()) => {
  const charsPerRow = Math.floor((OLED_WIDTH - x) / (import_oled_font_5x7.default.width + LETTER_SPACING) * size);
  let wordArr = string.split(" ");
  let acc = "";
  while (wordArr.length > 0) {
    let word = wordArr[0];
    let hasLinebreak = false;
    if (word.includes("\n")) {
      const s = word.split("\n");
      hasLinebreak = true;
      word = s.shift();
      wordArr.splice(1, 0, s.join("\n"));
    }
    const wordLength = word.length;
    let charsTillEndOfRow = charsPerRow - acc.length % charsPerRow;
    if (wordLength + 1 > charsTillEndOfRow) {
      for (let j = 0; j < charsTillEndOfRow; j++) {
        acc += " ";
      }
    } else if (acc.length % charsPerRow !== 0) {
      word = " " + word;
    }
    acc += word;
    if (hasLinebreak && (word.length === 0 || acc.length % charsPerRow !== 0)) {
      charsTillEndOfRow = charsPerRow - acc.length % charsPerRow;
      for (let j = 0; j < charsTillEndOfRow; j++) {
        acc += " ";
      }
    }
    wordArr.shift();
  }
  acc.split("").forEach((char, char_index) => {
    const charBuf = findCharBuf(char);
    const bytes = readCharBytes(charBuf, import_oled_font_5x7.default.height);
    const lineY = Math.floor(char_index / charsPerRow);
    const charX = char_index - lineY * charsPerRow;
    let xpos = x + charX * ((import_oled_font_5x7.default.width + LETTER_SPACING) * size);
    let ypos = y + lineY * ((import_oled_font_5x7.default.height + LINE_SPACING) * size);
    buffer = addCharToBuffer(xpos, ypos, bytes, size, buffer);
  });
  return buffer;
};
var addTextToBuffer = (text, buffer = getClearBuffer()) => {
  text.forEach((t) => {
    buffer = addStringToBuffer(t.x, t.y, t.string, t.size, buffer);
  });
  return buffer;
};
var indexToCoords = (i) => {
  const row = Math.floor(i / OLED_WIDTH);
  const col = i - OLED_WIDTH * row;
  return [col, row];
};
var coordsToIndex = (col, row) => {
  return col + row * OLED_WIDTH;
};
var OLED_default = OLED;

// src/SignalTower/SignalTower.ts
var import_events6 = __toModule(require("events"));
var SignalTower = class extends import_events6.default {
  constructor() {
    super();
    this.value = void 0;
  }
  send(message) {
    this.value = message;
    this.emit("send", this.value);
  }
};
var SignalTower_default = SignalTower;

// src/SocketIOIntegration/SocketIOIntegration.ts
var import_events7 = __toModule(require("events"));
var SocketIOIntegration = class extends import_events7.default {
  constructor(integrationName = "blokdots", messageEventName = "blokdots", format = { message: "msg", value: "val" }) {
    super();
    this.integrationName = integrationName;
    this.messageEventName = messageEventName;
    this.format = format;
    this.server;
    this.integration;
    this.onMessage = this.onMessage.bind(this);
    BlokdotsSocketIOServer_default().then((server) => {
      this.server = server;
      this.integration = server.registerIntegration({
        integrationName: this.integrationName,
        handlers: [
          {
            eventName: this.messageEventName,
            callback: this.onMessage
          }
        ]
      });
    });
  }
  onMessage(data) {
    const message = {
      message: data[this.format.message],
      value: data[this.format.value],
      direction: "in"
    };
    this.emit("received", message);
    this.emit("updateState", message);
  }
  send(message, shouldUpdateState = true) {
    var _a;
    if (!message.direction)
      message.direction = "out";
    this.emit("send", message);
    (_a = this.integration) == null ? void 0 : _a.ioNamespace.emit(this.messageEventName, {
      [this.format.message]: message.message,
      [this.format.value]: message.value
    });
    if (shouldUpdateState) {
      this.emit("updateState", message);
    }
  }
  cleanUp() {
    var _a;
    (_a = this.server) == null ? void 0 : _a.unregisterIntegration({
      integrationName: this.integrationName,
      handlers: [
        {
          eventName: this.messageEventName,
          callback: this.onMessage
        }
      ]
    });
  }
};
var SocketIOIntegration_default = SocketIOIntegration;

// src/Timer/Timer.ts
var import_events8 = __toModule(require("events"));
var Timer = class extends import_events8.default {
  constructor(value = 0) {
    super();
    this.value = value;
    this.interval;
  }
  start() {
    if (this.interval) {
      return;
    }
    this.interval = setInterval(() => {
      this.value++;
      this.emit("change", this.value);
    }, 1e3);
    this.emit("start");
  }
  stop() {
    clearInterval(this.interval);
    this.interval = void 0;
    this.emit("stop");
  }
  reset() {
    this.value = 0;
    this.emit("change", this.value);
    this.emit("reset");
  }
  setTo(value) {
    this.value = value;
    this.emit("change", this.value);
  }
};
var Timer_default = Timer;

// src/utils.ts
var utils = {
  rgbToHex: (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
};
var utils_default = utils;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BLOKDOTS_SOCKET_IO_SERVER_DEFAULT_PORT,
  Counter,
  Encoder,
  FigmaIntegration,
  HapticLabs,
  InvertableSensor,
  Joystick,
  Metronome,
  OLED_HEIGHT,
  OLED_WIDTH,
  Oled,
  SignalTower,
  SocketIOIntegration,
  Timer,
  addTextToBuffer,
  getBlokdotsSocketIOServer,
  getBlokdotsSocketIOServerAddress,
  utils
});
