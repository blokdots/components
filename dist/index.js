"use strict";
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
  for (var prop in b ||= {})
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
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
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

// node_modules/color-name/index.js
var require_color_name = __commonJS({
  "node_modules/color-name/index.js"(exports, module2) {
    "use strict";
    module2.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// node_modules/is-arrayish/index.js
var require_is_arrayish = __commonJS({
  "node_modules/is-arrayish/index.js"(exports, module2) {
    module2.exports = function isArrayish(obj) {
      if (!obj || typeof obj === "string") {
        return false;
      }
      return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== "String");
    };
  }
});

// node_modules/simple-swizzle/index.js
var require_simple_swizzle = __commonJS({
  "node_modules/simple-swizzle/index.js"(exports, module2) {
    "use strict";
    var isArrayish = require_is_arrayish();
    var concat = Array.prototype.concat;
    var slice = Array.prototype.slice;
    var swizzle = module2.exports = function swizzle2(args) {
      var results = [];
      for (var i = 0, len = args.length; i < len; i++) {
        var arg = args[i];
        if (isArrayish(arg)) {
          results = concat.call(results, slice.call(arg));
        } else {
          results.push(arg);
        }
      }
      return results;
    };
    swizzle.wrap = function(fn) {
      return function() {
        return fn(swizzle(arguments));
      };
    };
  }
});

// node_modules/color-string/index.js
var require_color_string = __commonJS({
  "node_modules/color-string/index.js"(exports, module2) {
    var colorNames = require_color_name();
    var swizzle = require_simple_swizzle();
    var hasOwnProperty = Object.hasOwnProperty;
    var reverseNames = /* @__PURE__ */ Object.create(null);
    for (name in colorNames) {
      if (hasOwnProperty.call(colorNames, name)) {
        reverseNames[colorNames[name]] = name;
      }
    }
    var name;
    var cs = module2.exports = {
      to: {},
      get: {}
    };
    cs.get = function(string) {
      var prefix = string.substring(0, 3).toLowerCase();
      var val;
      var model;
      switch (prefix) {
        case "hsl":
          val = cs.get.hsl(string);
          model = "hsl";
          break;
        case "hwb":
          val = cs.get.hwb(string);
          model = "hwb";
          break;
        default:
          val = cs.get.rgb(string);
          model = "rgb";
          break;
      }
      if (!val) {
        return null;
      }
      return { model, value: val };
    };
    cs.get.rgb = function(string) {
      if (!string) {
        return null;
      }
      var abbr = /^#([a-f0-9]{3,4})$/i;
      var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
      var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
      var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
      var keyword = /^(\w+)$/;
      var rgb = [0, 0, 0, 1];
      var match;
      var i;
      var hexAlpha;
      if (match = string.match(hex)) {
        hexAlpha = match[2];
        match = match[1];
        for (i = 0; i < 3; i++) {
          var i2 = i * 2;
          rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
        }
        if (hexAlpha) {
          rgb[3] = parseInt(hexAlpha, 16) / 255;
        }
      } else if (match = string.match(abbr)) {
        match = match[1];
        hexAlpha = match[3];
        for (i = 0; i < 3; i++) {
          rgb[i] = parseInt(match[i] + match[i], 16);
        }
        if (hexAlpha) {
          rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
        }
      } else if (match = string.match(rgba)) {
        for (i = 0; i < 3; i++) {
          rgb[i] = parseInt(match[i + 1], 0);
        }
        if (match[4]) {
          if (match[5]) {
            rgb[3] = parseFloat(match[4]) * 0.01;
          } else {
            rgb[3] = parseFloat(match[4]);
          }
        }
      } else if (match = string.match(per)) {
        for (i = 0; i < 3; i++) {
          rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
        }
        if (match[4]) {
          if (match[5]) {
            rgb[3] = parseFloat(match[4]) * 0.01;
          } else {
            rgb[3] = parseFloat(match[4]);
          }
        }
      } else if (match = string.match(keyword)) {
        if (match[1] === "transparent") {
          return [0, 0, 0, 0];
        }
        if (!hasOwnProperty.call(colorNames, match[1])) {
          return null;
        }
        rgb = colorNames[match[1]];
        rgb[3] = 1;
        return rgb;
      } else {
        return null;
      }
      for (i = 0; i < 3; i++) {
        rgb[i] = clamp(rgb[i], 0, 255);
      }
      rgb[3] = clamp(rgb[3], 0, 1);
      return rgb;
    };
    cs.get.hsl = function(string) {
      if (!string) {
        return null;
      }
      var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
      var match = string.match(hsl);
      if (match) {
        var alpha = parseFloat(match[4]);
        var h = (parseFloat(match[1]) % 360 + 360) % 360;
        var s = clamp(parseFloat(match[2]), 0, 100);
        var l = clamp(parseFloat(match[3]), 0, 100);
        var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h, s, l, a];
      }
      return null;
    };
    cs.get.hwb = function(string) {
      if (!string) {
        return null;
      }
      var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
      var match = string.match(hwb);
      if (match) {
        var alpha = parseFloat(match[4]);
        var h = (parseFloat(match[1]) % 360 + 360) % 360;
        var w = clamp(parseFloat(match[2]), 0, 100);
        var b = clamp(parseFloat(match[3]), 0, 100);
        var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h, w, b, a];
      }
      return null;
    };
    cs.to.hex = function() {
      var rgba = swizzle(arguments);
      return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
    };
    cs.to.rgb = function() {
      var rgba = swizzle(arguments);
      return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
    };
    cs.to.rgb.percent = function() {
      var rgba = swizzle(arguments);
      var r = Math.round(rgba[0] / 255 * 100);
      var g = Math.round(rgba[1] / 255 * 100);
      var b = Math.round(rgba[2] / 255 * 100);
      return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r + "%, " + g + "%, " + b + "%)" : "rgba(" + r + "%, " + g + "%, " + b + "%, " + rgba[3] + ")";
    };
    cs.to.hsl = function() {
      var hsla = swizzle(arguments);
      return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
    };
    cs.to.hwb = function() {
      var hwba = swizzle(arguments);
      var a = "";
      if (hwba.length >= 4 && hwba[3] !== 1) {
        a = ", " + hwba[3];
      }
      return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a + ")";
    };
    cs.to.keyword = function(rgb) {
      return reverseNames[rgb.slice(0, 3)];
    };
    function clamp(num, min, max) {
      return Math.min(Math.max(min, num), max);
    }
    function hexDouble(num) {
      var str = Math.round(num).toString(16).toUpperCase();
      return str.length < 2 ? "0" + str : str;
    }
  }
});

// node_modules/node-pixel/lib/pixel.js
var require_pixel = __commonJS({
  "node_modules/node-pixel/lib/pixel.js"(exports, module2) {
    "use strict";
    var ColorString = require_color_string();
    var events = require("events");
    var util = require("util");
    ColorString.colorValue = function colorValue(colors, g_table) {
      colors[0] = g_table[colors[0]];
      colors[1] = g_table[colors[1]];
      colors[2] = g_table[colors[2]];
      return (colors[0] << 16) + (colors[1] << 8) + colors[2];
    };
    var START_SYSEX = 240;
    var END_SYSEX = 247;
    var FIRMATA_7BIT_MASK = 127;
    var PIXEL_SHIFT_WRAP = 64;
    var PIXEL_COMMAND = 81;
    var PIXEL_CONFIG = 1;
    var PIXEL_SHOW = 2;
    var PIXEL_SET_PIXEL = 3;
    var PIXEL_SET_STRIP = 4;
    var PIXEL_SHIFT = 5;
    var SHIFT_FORWARD = 32;
    var SHIFT_BACKWARD = 0;
    var MAX_STRIPS = 8;
    var PIN_DEFAULT = 6;
    var I2C_DEFAULT = 66;
    var GAMMA_DEFAULT = 1;
    function create_gamma_table(steps, gamma, warning) {
      if (!warning && gamma == GAMMA_DEFAULT && !global.IS_TEST_MODE) {
        console.info("INFO: Default gamma behaviour is changing");
        console.info("0.9 - gamma=1.0 - consistent with pre-gamma values");
        console.info("0.10 - gamma=2.8 - default fix for WS2812 LEDs");
        warning = true;
      }
      const g_table = new Array(steps);
      for (let i = 0; i < steps; i++) {
        g_table[i] = Math.floor(Math.pow(i / 255, gamma) * 255 + 0.5);
      }
      return g_table;
    }
    var COLOR_ORDER = {
      GRB: 0,
      RGB: 1,
      BRG: 2
    };
    var pixels = /* @__PURE__ */ new WeakMap();
    var Pixel_Controllers = {
      FIRMATA: {
        initialize: {
          value(opts) {
            const pixel2 = {
              address: opts.addr,
              id: opts.addr,
              color: {
                r: 0,
                g: 0,
                b: 0,
                hexcode: "#000000",
                color: "black",
                rgb: [0, 0, 0]
              },
              firmata: opts.firmata,
              port: opts.port,
              parent: opts.strip
            };
            return pixel2;
          }
        },
        pixel_color: {
          value(color) {
            const pixel2 = pixels.get(this);
            const data = [];
            data.push(START_SYSEX);
            data.push(PIXEL_COMMAND);
            data.push(PIXEL_SET_PIXEL);
            data.push(pixel2.address & FIRMATA_7BIT_MASK);
            data.push(pixel2.address >> 7 & FIRMATA_7BIT_MASK);
            data.push(color & FIRMATA_7BIT_MASK);
            data.push(color >> 7 & FIRMATA_7BIT_MASK);
            data.push(color >> 14 & FIRMATA_7BIT_MASK);
            data.push(color >> 21 & FIRMATA_7BIT_MASK);
            data.push(END_SYSEX);
            pixel2.port.write(new Buffer(data));
          }
        }
      },
      I2CBACKPACK: {
        initialize: {
          value(opts) {
            const pixel2 = {
              address: opts.addr,
              id: opts.addr,
              color: {
                r: 0,
                g: 0,
                b: 0,
                hexcode: "#000000",
                color: "black",
                rgb: [0, 0, 0]
              },
              io: opts.io,
              i2c_address: opts.i2c_address,
              parent: opts.strip
            };
            return pixel2;
          }
        },
        pixel_color: {
          value(color) {
            const pixel2 = pixels.get(this);
            const data = [];
            data.push(PIXEL_SET_PIXEL);
            data.push(pixel2.address & FIRMATA_7BIT_MASK);
            data.push(pixel2.address >> 7 & FIRMATA_7BIT_MASK);
            data.push(color & FIRMATA_7BIT_MASK);
            data.push(color >> 7 & FIRMATA_7BIT_MASK);
            data.push(color >> 14 & FIRMATA_7BIT_MASK);
            data.push(color >> 21 & FIRMATA_7BIT_MASK);
            pixel2.io.i2cWrite(pixel2.i2c_address, data);
          }
        }
      }
    };
    function Pixel2(opts) {
      if (!(this instanceof Pixel2)) {
        return new Pixel2(opts);
      }
      const controller = Pixel_Controllers[opts.controller];
      Object.defineProperties(this, controller);
      Object.defineProperty(this, "address", {
        get() {
          const pixel2 = pixels.get(this);
          return pixel2.address;
        },
        set(newAddress) {
          const pixel2 = pixels.get(this);
          pixel2.address = newAddress;
        }
      });
      pixels.set(this, this.initialize(opts));
    }
    Pixel2.prototype.off = Pixel2.prototype.clear = function() {
      this.color([0, 0, 0]);
    };
    Pixel2.prototype.colour = Pixel2.prototype.color = function(color, opts) {
      const pixel2 = pixels.get(this);
      const options = opts || {};
      let sendmsg = true;
      if (options.sendmsg != void 0) {
        sendmsg = options.sendmsg;
      }
      let pixelcolor = null;
      if (color) {
        if (typeof color === "object") {
          pixelcolor = {
            model: "rgb",
            value: color
          };
        } else {
          pixelcolor = ColorString.get(color);
        }
      } else {
        return pixel2.color;
      }
      if (pixelcolor != null) {
        pixel2.color.r = pixelcolor.value[0];
        pixel2.color.g = pixelcolor.value[1];
        pixel2.color.b = pixelcolor.value[2];
        pixel2.color.hexcode = ColorString.to.hex(pixelcolor.value);
        pixel2.color.color = ColorString.to.keyword(pixelcolor.value);
        if (pixelcolor.value.length == 4) {
          pixelcolor.value.pop();
        }
        pixel2.color.rgb = pixelcolor.value;
        color = ColorString.colorValue(pixelcolor.value, pixel2.parent.gtable);
        if (sendmsg) {
          this.pixel_color(color);
        }
      } else {
        console.log("Color supplied couldn't be parsed: " + color);
      }
    };
    var strips = /* @__PURE__ */ new WeakMap();
    var Controllers = {
      FIRMATA: {
        initialize: {
          value(opts) {
            const MAX_PIXELS = 216;
            const strip_length = opts.length || 6;
            const data_pin = opts.data || PIN_DEFAULT;
            const color_order = opts.color_order || COLOR_ORDER.GRB;
            const strip_definition = opts.strips || new Array();
            const skip_firmware_check = !!opts.skip_firmware_check;
            let firmata = opts.firmata || void 0;
            if (firmata == void 0) {
              try {
                firmata = opts.board.io;
              } catch (e) {
                if (e instanceof TypeError) {
                  firmata = void 0;
                }
              }
            }
            if (firmata == void 0) {
              const err = new Error("A firmata or board object is required");
              err.name = "NoFirmataError";
              throw err;
            }
            if (firmata.firmware.name !== "node_pixel_firmata.ino" && !skip_firmware_check) {
              const err = new Error("Please upload NodePixel Firmata to the board");
              err.name = "IncorrectFirmataVersionError";
              throw err;
            }
            const port = firmata.transport || firmata.sp || firmata;
            if (port.write === void 0) {
              const err = new Error("Node Pixel FIRMATA controller requires IO that can write out");
              err.name = "NoWritablePortError";
              throw err;
            }
            const gamma = opts.gamma || GAMMA_DEFAULT;
            const gtable = create_gamma_table(256, gamma, this.dep_warning.gamma);
            if (typeof strip_definition[0] == "undefined") {
              strip_definition.push({
                pin: data_pin,
                color_order,
                length: strip_length
              });
            }
            if (strip_definition.length > MAX_STRIPS) {
              const err = new RangeError("Maximum number of strips " + MAX_STRIPS + " exceeded");
              this.emit("error", err);
            }
            let total_length = 0;
            strip_definition.forEach(function(data2) {
              total_length += data2.length;
            });
            if (total_length > MAX_PIXELS) {
              const err = new RangeError("Maximum number of pixels " + MAX_PIXELS + " exceeded");
              this.emit("error", err);
            }
            const pixel_list = [];
            for (let i = 0; i < total_length; i++) {
              pixel_list.push(new Pixel2({
                addr: i,
                firmata,
                port,
                controller: "FIRMATA",
                strip: this
              }));
            }
            strips.set(this, {
              pixels: pixel_list,
              data: data_pin,
              firmata,
              port,
              gtable,
              gamma
            });
            const data = [];
            data[0] = START_SYSEX;
            data[1] = PIXEL_COMMAND;
            data[2] = PIXEL_CONFIG;
            strip_definition.forEach(function(strip) {
              data.push(strip.color_order << 5 | strip.pin);
              data.push(strip.length & FIRMATA_7BIT_MASK);
              data.push(strip.length >> 7 & FIRMATA_7BIT_MASK);
            });
            data.push(END_SYSEX);
            port.write(new Buffer(data), function(error, res) {
              let err = null;
              if (error) {
                err = error;
                this.emit("error", err);
              }
              setTimeout(() => {
                this.emit("ready", err);
              }, 1);
            }.bind(this));
          }
        },
        show: {
          value() {
            const strip = strips.get(this);
            const data = [];
            data[0] = START_SYSEX;
            data[1] = PIXEL_COMMAND;
            data[2] = PIXEL_SHOW;
            data[3] = END_SYSEX;
            strip.port.write(new Buffer(data));
          }
        },
        strip_color: {
          value(color) {
            const strip = strips.get(this);
            const data = [];
            data[0] = START_SYSEX;
            data[1] = PIXEL_COMMAND;
            data[2] = PIXEL_SET_STRIP;
            data[3] = color & FIRMATA_7BIT_MASK;
            data[4] = color >> 7 & FIRMATA_7BIT_MASK;
            data[5] = color >> 14 & FIRMATA_7BIT_MASK;
            data[6] = color >> 21 & FIRMATA_7BIT_MASK;
            data[7] = END_SYSEX;
            strip.port.write(new Buffer(data));
          }
        },
        _shift: {
          value(amt, direction, wrap) {
            const wrap_val = wrap ? PIXEL_SHIFT_WRAP : 0;
            const strip = strips.get(this);
            const data = [];
            data[0] = START_SYSEX;
            data[1] = PIXEL_COMMAND;
            data[2] = PIXEL_SHIFT;
            data[3] = (amt | direction | wrap_val) & FIRMATA_7BIT_MASK;
            data[4] = END_SYSEX;
            strip.port.write(new Buffer(data));
          }
        }
      },
      I2CBACKPACK: {
        initialize: {
          value(opts) {
            const MAX_PIXELS = 500;
            const strip_length = opts.length || 6;
            const strip_definition = opts.strips || new Array();
            const color_order = opts.color_order || COLOR_ORDER.GRB;
            const gamma = opts.gamma || GAMMA_DEFAULT;
            const gtable = create_gamma_table(256, gamma, this.dep_warning.gamma);
            const io = opts.firmata || opts.board.io;
            if (!opts.address) {
              opts.address = I2C_DEFAULT;
            }
            if (io == void 0) {
              const err = new Error("An IO object is required to I2C controller");
              err.name = "NoIOError";
              throw err;
            }
            if (typeof strip_definition[0] == "undefined") {
              strip_definition.push({
                color_order,
                length: strip_length
              });
            } else if (parseInt(strip_definition[0], 10) != NaN) {
              for (let i = 0; i < strip_definition.length; i++) {
                const len = strip_definition[i];
                strip_definition[i] = {
                  color_order,
                  length: len
                };
              }
            }
            if (strip_definition.length > MAX_STRIPS) {
              const err = new RangeError("Maximum number of strips " + MAX_STRIPS + " exceeded");
              this.emit("error", err);
            }
            let total_length = 0;
            strip_definition.forEach(function(data2) {
              total_length += data2.length;
            });
            if (total_length > MAX_PIXELS) {
              const err = new RangeError("Maximum number of pixels " + MAX_PIXELS + " exceeded");
              this.emit("error", err);
            }
            const pixel_list = [];
            for (let i = 0; i < total_length; i++) {
              pixel_list.push(new Pixel2({
                addr: i,
                io,
                controller: "I2CBACKPACK",
                i2c_address: opts.address,
                strip: this
              }));
            }
            strips.set(this, {
              pixels: pixel_list,
              io,
              i2c_address: opts.address,
              gtable,
              gamma
            });
            const data = [];
            data.push(PIXEL_CONFIG);
            strip_definition.forEach(function(strip) {
              data.push(strip.color_order << 5 | strip.pin);
              data.push(strip.length & FIRMATA_7BIT_MASK);
              data.push(strip.length >> 7 & FIRMATA_7BIT_MASK);
            });
            io.i2cConfig(opts);
            process.nextTick(function() {
              try {
                io.i2cWrite(opts.address, data);
              } catch (e) {
                if (e instanceof Error && e.name == "EIO") {
                  this.emit("np_i2c_write_error", data);
                }
              }
              process.nextTick(function() {
                this.emit("ready", null);
              }.bind(this));
            }.bind(this));
          }
        },
        show: {
          value() {
            const strip = strips.get(this);
            try {
              strip.io.i2cWrite(strip.i2c_address, [PIXEL_SHOW]);
            } catch (e) {
              if (e instanceof Error && e.name == "EIO") {
                this.emit("np_i2c_write_error", "PIXEL_SHOW");
              }
            }
          }
        },
        strip_color: {
          value(color) {
            const strip = strips.get(this);
            const data = [];
            data[0] = PIXEL_SET_STRIP;
            data[1] = color & FIRMATA_7BIT_MASK;
            data[2] = color >> 7 & FIRMATA_7BIT_MASK;
            data[3] = color >> 14 & FIRMATA_7BIT_MASK;
            data[4] = color >> 21 & FIRMATA_7BIT_MASK;
            try {
              strip.io.i2cWrite(strip.i2c_address, data);
            } catch (e) {
              if (e instanceof Error && e.name == "EIO") {
                this.emit("np_i2c_write_error", data);
              }
            }
          }
        },
        _shift: {
          value(amt, direction, wrap) {
            const wrap_val = wrap ? PIXEL_SHIFT_WRAP : 0;
            const strip = strips.get(this);
            const data = [];
            data[0] = PIXEL_SHIFT;
            data[1] = (amt | direction | wrap_val) & FIRMATA_7BIT_MASK;
            try {
              strip.io.i2cWrite(strip.i2c_address, data);
            } catch (e) {
              if (e instanceof Error && e.name == "EIO") {
                this.emit("np_i2c_write_error", data);
              }
            }
          }
        }
      }
    };
    function Strip(opts) {
      if (!(this instanceof Strip)) {
        return new Strip(opts);
      }
      let controller;
      if (typeof opts.controller === "string") {
        controller = Controllers[opts.controller];
      } else {
        controller = opts.controller || Controllers["FIRMATA"];
      }
      this.dep_warning = {
        stripLength: false,
        gammaValue: !typeof opts.gamma === "undefined"
      };
      Object.defineProperties(this, controller);
      Object.defineProperty(this, "length", {
        get() {
          const strip = strips.get(this);
          return strip.pixels.length;
        }
      });
      Object.defineProperty(this, "gamma", {
        get() {
          const strip = strips.get(this);
          return strip.gamma;
        }
      });
      Object.defineProperty(this, "gtable", {
        get() {
          const strip = strips.get(this);
          return strip.gtable;
        }
      });
      if (typeof this.initialize === "function") {
        this.initialize(opts);
      }
    }
    util.inherits(Strip, events.EventEmitter);
    Strip.prototype.pixel = function(addr) {
      const strip = strips.get(this);
      return strip.pixels[addr];
    };
    Strip.prototype.colour = Strip.prototype.color = function(color, opts) {
      const strip = strips.get(this);
      let stripcolor = null;
      if (color) {
        if (typeof color === "object") {
          stripcolor = color;
        } else {
          try {
            stripcolor = ColorString.get(color).value;
          } catch (e) {
            if (e instanceof TypeError && ColorString.get(color) === null) {
              stripcolor = null;
            }
          }
        }
      }
      if (stripcolor != null) {
        for (let i = 0; i < strip.pixels.length; i++) {
          strip.pixels[i].color(color, { sendmsg: false });
        }
        this.strip_color(ColorString.colorValue(stripcolor, strip.gtable));
      } else {
        console.log("Supplied colour couldn't be parsed: " + color);
      }
    };
    Strip.prototype.off = Strip.prototype.clear = function() {
      this.color([0, 0, 0]);
      this.show();
    };
    Strip.prototype.shift = function(amt, direction, wrap) {
      if (amt > 0) {
        const strip = strips.get(this);
        let start_element = 0;
        if (direction == SHIFT_FORWARD) {
          start_element = this.length - amt;
        }
        const tmp_pixels = strip.pixels.splice(start_element, amt);
        while (tmp_pixels.length > 0) {
          const px = tmp_pixels.pop();
          if (!wrap) {
            px.color("#000");
          }
          if (direction == SHIFT_FORWARD) {
            strip.pixels.unshift(px);
          } else {
            strip.pixels.push(px);
          }
        }
        strip.pixels.forEach((px, index) => {
          px.address = index;
        });
        this._shift(amt, direction, wrap);
      }
    };
    Strip.prototype.stripLength = function() {
      const strip = strips.get(this);
      if (!this.dep_warning.stripLength) {
        console.info("ERROR: strip.stripLength() is deprecated in favour of strip.length");
        console.info("0.8 - notice");
        console.info("0.9 - error");
        console.info("0.10 - removal");
        this.dep_warning.stripLength = true;
      }
      throw new Error({
        name: "NotImplemented",
        message: "stripLength is no longer supported, use strip.length",
        toString() {
          return "NotImplemented: stripLength is no longer supported";
        }
      });
    };
    module2.exports = {
      Strip,
      COLOR_ORDER,
      FORWARD: SHIFT_FORWARD,
      BACKWARD: SHIFT_BACKWARD
    };
  }
});

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
        // (space)
        0,
        0,
        95,
        0,
        0,
        // !
        0,
        7,
        0,
        7,
        0,
        // "
        20,
        127,
        20,
        127,
        20,
        // #
        36,
        42,
        127,
        42,
        18,
        // $
        35,
        19,
        8,
        100,
        98,
        // %
        54,
        73,
        85,
        34,
        80,
        // &
        0,
        5,
        3,
        0,
        0,
        // '
        0,
        28,
        34,
        65,
        0,
        // (
        0,
        65,
        34,
        28,
        0,
        // )
        8,
        42,
        28,
        42,
        8,
        // *
        8,
        8,
        62,
        8,
        8,
        // +
        0,
        80,
        48,
        0,
        0,
        // ,
        8,
        8,
        8,
        8,
        8,
        // -
        0,
        96,
        96,
        0,
        0,
        // .
        32,
        16,
        8,
        4,
        2,
        // /
        62,
        81,
        73,
        69,
        62,
        // 0
        0,
        66,
        127,
        64,
        0,
        // 1
        66,
        97,
        81,
        73,
        70,
        // 2
        33,
        65,
        69,
        75,
        49,
        // 3
        24,
        20,
        18,
        127,
        16,
        // 4
        39,
        69,
        69,
        69,
        57,
        // 5
        60,
        74,
        73,
        73,
        48,
        // 6
        1,
        113,
        9,
        5,
        3,
        // 7
        54,
        73,
        73,
        73,
        54,
        // 8
        6,
        73,
        73,
        41,
        30,
        // 9
        0,
        54,
        54,
        0,
        0,
        // :
        0,
        86,
        54,
        0,
        0,
        // ;
        0,
        8,
        20,
        34,
        65,
        // <
        20,
        20,
        20,
        20,
        20,
        // =
        65,
        34,
        20,
        8,
        0,
        // >
        2,
        1,
        81,
        9,
        6,
        // ?
        50,
        73,
        121,
        65,
        62,
        // @
        126,
        17,
        17,
        17,
        126,
        // A
        127,
        73,
        73,
        73,
        54,
        // B
        62,
        65,
        65,
        65,
        34,
        // C
        127,
        65,
        65,
        34,
        28,
        // D
        127,
        73,
        73,
        73,
        65,
        // E
        127,
        9,
        9,
        1,
        1,
        // F
        62,
        65,
        65,
        81,
        50,
        // G
        127,
        8,
        8,
        8,
        127,
        // H
        0,
        65,
        127,
        65,
        0,
        // I
        32,
        64,
        65,
        63,
        1,
        // J
        127,
        8,
        20,
        34,
        65,
        // K
        127,
        64,
        64,
        64,
        64,
        // L
        127,
        2,
        4,
        2,
        127,
        // M
        127,
        4,
        8,
        16,
        127,
        // N
        62,
        65,
        65,
        65,
        62,
        // O
        127,
        9,
        9,
        9,
        6,
        // P
        62,
        65,
        81,
        33,
        94,
        // Q
        127,
        9,
        25,
        41,
        70,
        // R
        70,
        73,
        73,
        73,
        49,
        // S
        1,
        1,
        127,
        1,
        1,
        // T
        63,
        64,
        64,
        64,
        63,
        // U
        31,
        32,
        64,
        32,
        31,
        // V
        127,
        32,
        24,
        32,
        127,
        // W
        99,
        20,
        8,
        20,
        99,
        // X
        3,
        4,
        120,
        4,
        3,
        // Y
        97,
        81,
        73,
        69,
        67,
        // Z
        125,
        18,
        18,
        125,
        0,
        // Ä
        61,
        66,
        66,
        66,
        61,
        // Ö
        61,
        64,
        64,
        64,
        61,
        // Ü
        0,
        0,
        127,
        65,
        65,
        // [
        2,
        4,
        8,
        16,
        32,
        // "\"
        65,
        65,
        127,
        0,
        0,
        // ]
        4,
        2,
        1,
        2,
        4,
        // ^
        64,
        64,
        64,
        64,
        64,
        // _
        0,
        1,
        2,
        4,
        0,
        // `
        32,
        84,
        84,
        84,
        120,
        // a
        127,
        72,
        68,
        68,
        56,
        // b
        56,
        68,
        68,
        68,
        32,
        // c
        56,
        68,
        68,
        72,
        127,
        // d
        56,
        84,
        84,
        84,
        24,
        // e
        8,
        126,
        9,
        1,
        2,
        // f
        8,
        20,
        84,
        84,
        60,
        // g
        127,
        8,
        4,
        4,
        120,
        // h
        0,
        68,
        125,
        64,
        0,
        // i
        32,
        64,
        68,
        61,
        0,
        // j
        0,
        127,
        16,
        40,
        68,
        // k
        0,
        65,
        127,
        64,
        0,
        // l
        124,
        4,
        24,
        4,
        120,
        // m
        124,
        8,
        4,
        4,
        120,
        // n
        56,
        68,
        68,
        68,
        56,
        // o
        124,
        20,
        20,
        20,
        8,
        // p
        8,
        20,
        20,
        24,
        124,
        // q
        124,
        8,
        4,
        4,
        8,
        // r
        72,
        84,
        84,
        84,
        32,
        // s
        4,
        63,
        68,
        64,
        32,
        // t
        60,
        64,
        64,
        32,
        124,
        // u
        28,
        32,
        64,
        32,
        28,
        // v
        60,
        64,
        48,
        64,
        60,
        // w
        68,
        40,
        16,
        40,
        68,
        // x
        12,
        80,
        80,
        80,
        60,
        // y
        68,
        100,
        84,
        76,
        68,
        // z
        32,
        85,
        84,
        85,
        120,
        // ä
        58,
        68,
        68,
        58,
        0,
        // ö
        58,
        64,
        64,
        58,
        0,
        // ü
        0,
        8,
        54,
        65,
        0,
        // {
        0,
        0,
        127,
        0,
        0,
        // |
        0,
        65,
        54,
        8,
        0,
        // }
        20,
        62,
        85,
        65,
        34,
        // €
        8,
        8,
        42,
        28,
        8,
        // -> (ALT + 0134) † 
        8,
        28,
        42,
        8,
        8,
        // <- (ALT + 0135) ‡
        0,
        0,
        7,
        5,
        7
        // °
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

// node_modules/qr-image/lib/encode.js
var require_encode = __commonJS({
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
var require_errorcode = __commonJS({
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
      // a^0 x^0
      [0, 0],
      // a^0 x^1 + a^0 x^0
      [0, 25, 1]
      // a^0 x^2 + a^25 x^1 + a^1 x^0
      // and so on...
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
var require_matrix = __commonJS({
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
          var pixel2 = max == 2 && min >= -2 || min == -2 && max <= 2 ? 128 : 129;
          matrix[3 + i][3 + j] = pixel2;
          matrix[3 + i][N - 4 + j] = pixel2;
          matrix[N - 4 + i][3 + j] = pixel2;
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
                var pixel2 = max == 1 && min >= -1 || min == -1 && max <= 1 ? 128 : 129;
                matrix[x + r][y + c] = pixel2;
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
            var pixel2 = !!(mask2 & byte);
            if (mask_fn(row, col))
              pixel2 = !pixel2;
            matrix[row][col] = pixel2 ? 1 : 0;
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
        var pixel2 = matrix[i][0] & 1;
        var len = 1;
        for (var j = 1; j < N; j++) {
          var p = matrix[i][j] & 1;
          if (p == pixel2) {
            len++;
            continue;
          }
          if (len >= 5) {
            penalty += len - 2;
          }
          pixel2 = p;
          len = 1;
        }
        if (len >= 5) {
          penalty += len - 2;
        }
      }
      for (var j = 0; j < N; j++) {
        var pixel2 = matrix[0][j] & 1;
        var len = 1;
        for (var i = 1; i < N; i++) {
          var p = matrix[i][j] & 1;
          if (p == pixel2) {
            len++;
            continue;
          }
          if (len >= 5) {
            penalty += len - 2;
          }
          pixel2 = p;
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
var require_qr_base = __commonJS({
  "node_modules/qr-image/lib/qr-base.js"(exports, module2) {
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
      // there is no version 0
      // total number of codewords, (number of ec codewords, number of blocks) * ( L, M, Q, H )
      [26, 7, 1, 10, 1, 13, 1, 17, 1],
      [44, 10, 1, 16, 1, 22, 1, 28, 1],
      [70, 15, 1, 26, 1, 36, 2, 44, 2],
      [100, 20, 1, 36, 2, 52, 2, 64, 4],
      [134, 26, 1, 48, 2, 72, 4, 88, 4],
      // 5
      [172, 36, 2, 64, 4, 96, 4, 112, 4],
      [196, 40, 2, 72, 4, 108, 6, 130, 5],
      [242, 48, 2, 88, 4, 132, 6, 156, 6],
      [292, 60, 2, 110, 5, 160, 8, 192, 8],
      [346, 72, 4, 130, 5, 192, 8, 224, 8],
      // 10
      [404, 80, 4, 150, 5, 224, 8, 264, 11],
      [466, 96, 4, 176, 8, 260, 10, 308, 11],
      [532, 104, 4, 198, 9, 288, 12, 352, 16],
      [581, 120, 4, 216, 9, 320, 16, 384, 16],
      [655, 132, 6, 240, 10, 360, 12, 432, 18],
      // 15
      [733, 144, 6, 280, 10, 408, 17, 480, 16],
      [815, 168, 6, 308, 11, 448, 16, 532, 19],
      [901, 180, 6, 338, 13, 504, 18, 588, 21],
      [991, 196, 7, 364, 14, 546, 21, 650, 25],
      [1085, 224, 8, 416, 16, 600, 20, 700, 25],
      // 20
      [1156, 224, 8, 442, 17, 644, 23, 750, 25],
      [1258, 252, 9, 476, 17, 690, 23, 816, 34],
      [1364, 270, 9, 504, 18, 750, 25, 900, 30],
      [1474, 300, 10, 560, 20, 810, 27, 960, 32],
      [1588, 312, 12, 588, 21, 870, 29, 1050, 35],
      // 25
      [1706, 336, 12, 644, 23, 952, 34, 1110, 37],
      [1828, 360, 12, 700, 25, 1020, 34, 1200, 40],
      [1921, 390, 13, 728, 26, 1050, 35, 1260, 42],
      [2051, 420, 14, 784, 28, 1140, 38, 1350, 45],
      [2185, 450, 15, 812, 29, 1200, 40, 1440, 48],
      // 30
      [2323, 480, 16, 868, 31, 1290, 43, 1530, 51],
      [2465, 510, 17, 924, 33, 1350, 45, 1620, 54],
      [2611, 540, 18, 980, 35, 1440, 48, 1710, 57],
      [2761, 570, 19, 1036, 37, 1530, 51, 1800, 60],
      [2876, 570, 19, 1064, 38, 1590, 53, 1890, 63],
      // 35
      [3034, 600, 20, 1120, 40, 1680, 56, 1980, 66],
      [3196, 630, 21, 1204, 43, 1770, 59, 2100, 70],
      [3362, 660, 22, 1260, 45, 1860, 62, 2220, 74],
      [3532, 720, 24, 1316, 47, 1950, 65, 2310, 77],
      [3706, 750, 25, 1372, 49, 2040, 68, 2430, 81]
      // 40
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
var require_crc32buffer = __commonJS({
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
var require_crc32 = __commonJS({
  "node_modules/qr-image/lib/crc32.js"(exports, module2) {
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

// node_modules/qr-image/lib/png.js
var require_png = __commonJS({
  "node_modules/qr-image/lib/png.js"(exports, module2) {
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

// node_modules/qr-image/lib/vector.js
var require_vector = __commonJS({
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
      data.push(
        xref,
        "trailer << /Root 1 0 R /Size 5 >>\n",
        "startxref\n" + l + "\n%%EOF\n"
      );
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
var require_qr = __commonJS({
  "node_modules/qr-image/lib/qr.js"(exports, module2) {
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

// node_modules/oled-js/build/oled.js
var require_oled = __commonJS({
  "node_modules/oled-js/build/oled.js"(exports) {
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
          var bitmap = pixels.map(function(pixel2) {
            return pixel2 ? 0 : 1;
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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  BLOKDOTS_SOCKET_IO_SERVER_DEFAULT_PORT: () => BLOKDOTS_SOCKET_IO_SERVER_DEFAULT_PORT,
  Counter: () => Counter_default,
  Encoder: () => Encoder_default,
  FigmaIntegration: () => FigmaIntegration_default,
  HapticLabs: () => HapticLabs_default,
  InvertableSensor: () => InvertableSensor_default,
  Joystick: () => Joystick_default,
  LEDStrip: () => LEDStrip_default,
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
module.exports = __toCommonJS(src_exports);

// src/BlokdotsSocketIOServer/BlokdotsSocketIOServer.ts
var import_socket = require("socket.io");
var import_os = require("os");

// src/BlokdotsSocketIOServer/setupHttpServer.ts
var import_stream = require("stream");
var import_http = __toESM(require("http"));

// src/BlokdotsSocketIOServer/webserver/favicon.ico
var favicon_default = "data:image/x-icon;base64,AAABAAIAICAAAAEAIAAoEQAAJgAAABAQAAABACAAaAQAAE4RAAAoAAAAIAAAAEAAAAABACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4AAABSAAAAeQAAAIgAAAB+AAAAWwAAACcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAACgAAAA7QAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA9gAAALMAAABEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAABxAAAA8QAAAP8AAADtAAAArQAAAHwAAABpAAAAdgAAAKIAAADhAAAA/wAAAP0AAACQAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAhwAAAP8AAAD5AAAAiQAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUAAABxAAAA6wAAAP8AAACrAAAACwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGcAAAD/AAAA7QAAAE0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyAAAA2AAAAP8AAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiAAAA6gAAAPoAAABSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAA6gAAAPsAAABDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIkAAAD/AAAAnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAA/wAAALQAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAAAA2wAAAPgAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABIAAADiAAAA9gAAACcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC0AAAD9AAAAxwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKEAAAD/AAAAWwAAAAAAAAAAAAAAMQAAAF0AAABcAAAAXAAAAFwAAABcAAAAXAAAAFwAAABZAAAAjgAAAP8AAADHAAAAWQAAAFwAAABcAAAAXAAAAFwAAABcAAAAXAAAAF0AAAAhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdgAAAP8AAAB+AAAAAAAAAAAAAACNAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAF8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABpAAAA/wAAAIgAAAAAAAAAAAAAAIkAAAD/AAAAwAAAAJMAAACVAAAAlQAAAJUAAACVAAAAlAAAALIAAAD/AAAA3wAAAJMAAACVAAAAlQAAAJUAAACVAAAAkwAAANMAAAD/AAAAXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHsAAAD/AAAAegAAAAAAAAAAAAAAiQAAAP8AAABhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJgAAAPoAAADRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkQAAAP8AAABcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArAAAAP8AAABSAAAAAAAAAAAAAACJAAAA/wAAAGcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAzwAAAPwAAAA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAACVAAAA/wAAAFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0AAADsAAAA7wAAAB0AAAAAAAAAAAAAAIkAAAD/AAAAZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB2AAAA/wAAALMAAAACAAAAAAAAAAAAAAAAAAAAAAAAAJUAAAD/AAAAXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAigAAAP8AAACiAAAAAAAAAAAAAAAAAAAAiQAAAP8AAABnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUAAADaAAAA/wAAAHIAAAAAAAAAAAAAAAAAAAAAAAAAlQAAAP8AAABcAAAAAAAAAAAAAAAAAAAAAAAAAEwAAAD2AAAA8gAAAC8AAAAAAAAAAAAAAAAAAACJAAAA/wAAAGcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEoAAAD4AAAA+wAAAHIAAAACAAAAAAAAAAAAAACVAAAA/wAAAFwAAAAAAAAAAAAAAAAAAABTAAAA7QAAAP8AAABwAAAAAAAAAAAAAAAAAAAAAAAAAIkAAAD/AAAAZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGMAAAD4AAAA/wAAALEAAABBAAAABwAAAJMAAAD/AAAAWAAAAAMAAAAyAAAAmwAAAP0AAAD/AAAAhwAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAiQAAAP8AAABnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEsAAADYAAAA/wAAAP8AAADRAAAA3wAAAP8AAADHAAAAxwAAAPsAAAD/AAAA6QAAAGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACJAAAA/wAAAGcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUAAAB1AAAAzQAAAPsAAAD/AAAA/wAAAP8AAAD/AAAA2QAAAIkAAAAjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIkAAAD/AAAAZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAKwAAALIAAAD/AAAAjgAAADIAAAANAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiQAAAP8AAABnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkgAAAP8AAABXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACJAAAA/wAAAGcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACVAAAA/wAAAFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIkAAAD/AAAAZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJUAAAD/AAAAXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiQAAAP8AAABnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlQAAAP8AAABcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACJAAAA/wAAAGcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACVAAAA/wAAAFwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIkAAAD/AAAAYQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJEAAAD/AAAAXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiQAAAP8AAACkAAAAZgAAAGcAAABnAAAAZwAAAGcAAABnAAAAZwAAAGcAAABnAAAAZwAAAGcAAABnAAAAZwAAAGcAAABmAAAAwAAAAP8AAABcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACPAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEkAAACKAAAAiQAAAIkAAACJAAAAiQAAAIkAAACJAAAAiQAAAIkAAACJAAAAiQAAAIkAAACJAAAAiQAAAIkAAACJAAAAiQAAAIkAAACKAAAAMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAEAAAACAAAAABACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFQAAABwAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+AAAAsQAAAMsAAADKAAAAxgAAAHkAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABXAAAA2QAAAGEAAAAYAAAADwAAADUAAACvAAAArwAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdAAAA1gAAADcAAAAAAAAAAAAAAAAAAAAAAAAAAgAAALEAAAB5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbwAAAJcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyAAAAyQAAAAgAAAAQAAAAjAAAAJ0AAACdAAAAnAAAANgAAADGAAAAnAAAAJ0AAACbAAAAVwAAAAAAAAAAAAAADQAAAMsAAAAdAAAAHwAAAN8AAABsAAAAZQAAAGQAAAC4AAAAswAAAGMAAABkAAAApwAAAKAAAAAAAAAAAAAAABUAAADNAAAAFQAAAB8AAADIAAAAAgAAAAAAAAAAAAAASgAAAL0AAAAAAAAAAAAAAGAAAACdAAAAAAAAAAAAAABhAAAAtAAAAAEAAAAfAAAAyQAAAAsAAAAAAAAAAAAAAAUAAAC0AAAAjQAAAAIAAABeAAAAmQAAAAAAAAA4AAAA2gAAAD0AAAAAAAAAHwAAAMkAAAALAAAAAAAAAAAAAAAAAAAAFwAAALQAAAC6AAAAsgAAAMYAAACYAAAA1AAAAFcAAAAAAAAAAAAAAB8AAADJAAAACwAAAAAAAAAAAAAAAAAAAAAAAAADAAAATgAAALcAAADXAAAAcQAAAB0AAAAAAAAAAAAAAAAAAAAfAAAAyQAAAAsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfAAAAmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwAAAMkAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZAAAAJ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8AAADMAAAAFgAAAAsAAAALAAAACwAAAAsAAAALAAAACwAAAG0AAACeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaAAAA2QAAAMsAAADJAAAAyQAAAMkAAADJAAAAyQAAAMgAAADYAAAAjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAABoAAAAfAAAAHwAAAB8AAAAfAAAAHwAAAB8AAAAfAAAAHgAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=";

// src/BlokdotsSocketIOServer/webserver/index.html
var webserver_default = 'data:text/html;charset=utf-8,<!DOCTYPE html>%0A<html>%0A  <head>%0A    <meta charset="utf-8" />%0A    <meta name="viewport" content="width=device-width, initial-scale=1.0" />%0A    <title>blokdots</title>%0A    <link rel="icon" href="/favicon.ico" />%0A%0A    <link rel="stylesheet" type="text/css" href="style.css" />%0A%0A    <script src="socket-io.min.js"></script>%0A  </head>%0A%0A  <body>%0A    <div id="wrapper">%0A      <h1>blokdots</h1>%0A%0A      <p>%0A        This page is generated by the internal blokdots server. You can connect%0A        to the integrations by connecting with a Socket.IO client to this%0A        address.%0A      </p>%0A      <p>%0A        For more information, check out the%0A        <a href="https://blokdots.com/documentation/components/integrations/socket-io-server"%0A          >blokdots documentation</a%0A        >.%0A      </p>%0A%0A      <br />%0A%0A      <h1>Connection Status</h1>%0A%0A      <p>%0A        Server%0A        <span id="serverAddress"></span>%0A        <span id="connectionStatus">not connected</span>%0A      </p>%0A%0A      <h1>Active Integrations</h1>%0A      <div id="activeIntegrations"></div>%0A%0A      <section id="testMessages">%0A        <h1>Test Messages</h1>%0A%0A        <p>%0A          You can send and receive test messages below. Please make sure that a%0A          hardware board (like Arduino) is connected and marked as "Ready" in%0A          blokdots.%0A        </p>%0A%0A        <div id="testInput">%0A          <label%0A            ><span>Message:</span>%0A            <input%0A              type="text"%0A              id="testMessage"%0A              name="testMessage"%0A              placeholder="message"%0A            />%0A          </label>%0A          <label%0A            ><span>Value:</span>%0A            <input%0A              type="text"%0A              id="testValue"%0A              name="testValue"%0A              placeholder="value"%0A            />%0A          </label>%0A          <button>Send</button>%0A        </div>%0A%0A        <ul id="socket-history">%0A          <!-- messages go here -->%0A        </ul>%0A      </section>%0A    </div>%0A%0A    <script type="text/javascript">%0A      const generalSocket = io(window.location.origin);%0A%0A      generalSocket.on("info", (data) => {%0A        console.log(data);%0A      });%0A%0A      const socket = io(window.location.origin + window.location.pathname);%0A      const integration = window.location.pathname.substring(1);%0A%0A      let socketContainer = null;%0A%0A      socket.on("connect", () => {%0A        document.querySelector("%23connectionStatus").textContent =%0A          "is connected";%0A        document.querySelector("%23connectionStatus").classList.add("ok");%0A      });%0A%0A      socket.on("disconnect", () => {%0A        document.querySelector("%23connectionStatus").textContent =%0A          "not connected";%0A        document.querySelector("%23connectionStatus").classList.remove("ok");%0A      });%0A%0A      socket.on("info", (val) => {%0A        if (val.activeIntegrations) {%0A          const integrationsHtml = val.activeIntegrations%0A            .map((integrationName) => {%0A              return `<span class="code ${%0A                integrationName === integration ? "ok" : ""%0A              }">${integrationName}</span>`;%0A            })%0A            .join(" ");%0A          document.querySelector("%23activeIntegrations").innerHTML =%0A            integrationsHtml;%0A        }%0A      });%0A%0A      if (integration === "") {%0A        document.querySelector("%23testMessages").innerHTML =%0A          "Please open this page with the specific URL for an active integration.";%0A      }%0A%0A      if (integration === "blokdots") {%0A        socket.on("blokdots", (val) => {%0A          addMessageToList(val);%0A        });%0A      }%0A%0A      if (integration === "protopie") {%0A        socket.on("ppMessage", (val) => {%0A          const ppVal = {%0A            msg: val.messageId,%0A            val: val.value,%0A          };%0A          addMessageToList(ppVal);%0A        });%0A      }%0A%0A      const addMessageToList = (val, dir = "in") => {%0A        const li = document.createElement("li");%0A%0A        const timestamp = new Date(Date.now()).toLocaleTimeString();%0A        const signalDate = document.createElement("span");%0A        signalDate.classList.add("messageTime");%0A        signalDate.textContent = timestamp;%0A        li.appendChild(signalDate);%0A%0A        const arrowImage = document.createElement("img");%0A        arrowImage.classList.add("messageArrow");%0A        arrowImage.src = "log-arrow-" + dir + ".svg";%0A        li.appendChild(arrowImage);%0A%0A        const messageDOM = document.createElement("span");%0A        messageDOM.classList.add("messageContentDisplay");%0A        messageDOM.textContent = val.msg;%0A        li.appendChild(messageDOM);%0A%0A        if (val.val !== undefined && val.val !== null && val.val !== "") {%0A          const valueDOM = document.createElement("span");%0A          valueDOM.classList.add("messageValueDisplay");%0A          if (!isNaN(val.val)) {%0A            valueDOM.classList.add("messageValueDisplay-is-number");%0A          }%0A          valueDOM.textContent = val.val;%0A          li.appendChild(valueDOM);%0A        }%0A%0A        socketContainer.prepend(li);%0A      };%0A%0A      const sendMessage = () => {%0A        const msg = document.querySelector("%23testMessage").value;%0A        let val = document.querySelector("%23testValue").value;%0A%0A        const message = {%0A          msg,%0A          val,%0A        };%0A        addMessageToList(message, "out");%0A%0A        if (integration === "blokdots") {%0A          socket.emit("blokdots", message);%0A        }%0A        if (integration === "protopie") {%0A          socket.emit("ppMessage", { messageId: msg, value: val });%0A        }%0A      };%0A%0A      document.addEventListener("DOMContentLoaded", () => {%0A        socketContainer = document.querySelector("%23socket-history");%0A        document.querySelector("%23serverAddress").textContent =%0A          window.location.origin + window.location.pathname;%0A%0A        if (integration !== "") {%0A          document%0A            .querySelector("%23testInput button")%0A            .addEventListener("click", sendMessage);%0A        }%0A      });%0A    </script>%0A  </body>%0A</html>%0A';

// src/BlokdotsSocketIOServer/webserver/log-arrow-in.svg
var log_arrow_in_default = 'data:image/svg+xml,<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<path d="M0 5.74205L4.72822 10.4841L5.68755 9.52477L2.54761 6.39705L11.1684 6.39705V5.08705L2.54761 5.08705L5.68755 1.95933L4.72823 1L0 5.74205Z" fill="%23A8A8A8"/>%0A</svg>%0A';

// src/BlokdotsSocketIOServer/webserver/log-arrow-out.svg
var log_arrow_out_default = 'data:image/svg+xml,<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">%0A<path d="M9.81197 2.06626L3.11547 2.05649L3.11547 3.41318L7.54738 3.40454L1.45154 9.50038L2.37785 10.4267L8.47369 4.33085L8.46505 8.76276H9.82174L9.81197 2.06626Z" fill="%231ABC9C"/>%0A</svg>%0A';

// src/BlokdotsSocketIOServer/webserver/socket-io.min.js
var socket_io_min_default = `data:text/javascript;charset=utf-8,/*!%0A * Socket.IO v4.2.0%0A * (c) 2014-2021 Guillermo Rauch%0A * Released under the MIT License.%0A */%0A!(function (t, e) {%0A  "object" == typeof exports && "object" == typeof module%0A    ? (module.exports = e())%0A    : "function" == typeof define && define.amd%0A    ? define([], e)%0A    : "object" == typeof exports%0A    ? (exports.io = e())%0A    : (t.io = e());%0A})(self, function () {%0A  return (function (t) {%0A    var e = {};%0A    function n(r) {%0A      if (e[r]) return e[r].exports;%0A      var o = (e[r] = { i: r, l: !1, exports: {} });%0A      return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;%0A    }%0A    return (%0A      (n.m = t),%0A      (n.c = e),%0A      (n.d = function (t, e, r) {%0A        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });%0A      }),%0A      (n.r = function (t) {%0A        "undefined" != typeof Symbol &&%0A          Symbol.toStringTag &&%0A          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),%0A          Object.defineProperty(t, "__esModule", { value: !0 });%0A      }),%0A      (n.t = function (t, e) {%0A        if ((1 & e && (t = n(t)), 8 & e)) return t;%0A        if (4 & e && "object" == typeof t && t && t.__esModule) return t;%0A        var r = Object.create(null);%0A        if (%0A          (n.r(r),%0A          Object.defineProperty(r, "default", { enumerable: !0, value: t }),%0A          2 & e && "string" != typeof t)%0A        )%0A          for (var o in t)%0A            n.d(%0A              r,%0A              o,%0A              function (e) {%0A                return t[e];%0A              }.bind(null, o)%0A            );%0A        return r;%0A      }),%0A      (n.n = function (t) {%0A        var e =%0A          t && t.__esModule%0A            ? function () {%0A                return t.default;%0A              }%0A            : function () {%0A                return t;%0A              };%0A        return n.d(e, "a", e), e;%0A      }),%0A      (n.o = function (t, e) {%0A        return Object.prototype.hasOwnProperty.call(t, e);%0A      }),%0A      (n.p = ""),%0A      n((n.s = 18))%0A    );%0A  })([%0A    function (t, e) {%0A      t.exports =%0A        "undefined" != typeof self%0A          ? self%0A          : "undefined" != typeof window%0A          ? window%0A          : Function("return this")();%0A    },%0A    function (t, e, n) {%0A      var r = n(24),%0A        o = n(25),%0A        i = String.fromCharCode(30);%0A      t.exports = {%0A        protocol: 4,%0A        encodePacket: r,%0A        encodePayload: function (t, e) {%0A          var n = t.length,%0A            o = new Array(n),%0A            s = 0;%0A          t.forEach(function (t, c) {%0A            r(t, !1, function (t) {%0A              (o[c] = t), ++s === n && e(o.join(i));%0A            });%0A          });%0A        },%0A        decodePacket: o,%0A        decodePayload: function (t, e) {%0A          for (var n = t.split(i), r = [], s = 0; s < n.length; s++) {%0A            var c = o(n[s], e);%0A            if ((r.push(c), "error" === c.type)) break;%0A          }%0A          return r;%0A        },%0A      };%0A    },%0A    function (t, e, n) {%0A      function r(t) {%0A        if (t)%0A          return (function (t) {%0A            for (var e in r.prototype) t[e] = r.prototype[e];%0A            return t;%0A          })(t);%0A      }%0A      (t.exports = r),%0A        (r.prototype.on = r.prototype.addEventListener =%0A          function (t, e) {%0A            return (%0A              (this._callbacks = this._callbacks || {}),%0A              (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(%0A                e%0A              ),%0A              this%0A            );%0A          }),%0A        (r.prototype.once = function (t, e) {%0A          function n() {%0A            this.off(t, n), e.apply(this, arguments);%0A          }%0A          return (n.fn = e), this.on(t, n), this;%0A        }),%0A        (r.prototype.off =%0A          r.prototype.removeListener =%0A          r.prototype.removeAllListeners =%0A          r.prototype.removeEventListener =%0A            function (t, e) {%0A              if (%0A                ((this._callbacks = this._callbacks || {}),%0A                0 == arguments.length)%0A              )%0A                return (this._callbacks = {}), this;%0A              var n,%0A                r = this._callbacks["$" + t];%0A              if (!r) return this;%0A              if (1 == arguments.length)%0A                return delete this._callbacks["$" + t], this;%0A              for (var o = 0; o < r.length; o++)%0A                if ((n = r[o]) === e || n.fn === e) {%0A                  r.splice(o, 1);%0A                  break;%0A                }%0A              return 0 === r.length && delete this._callbacks["$" + t], this;%0A            }),%0A        (r.prototype.emit = function (t) {%0A          this._callbacks = this._callbacks || {};%0A          for (%0A            var e = new Array(arguments.length - 1),%0A              n = this._callbacks["$" + t],%0A              r = 1;%0A            r < arguments.length;%0A            r++%0A          )%0A            e[r - 1] = arguments[r];%0A          if (n) {%0A            r = 0;%0A            for (var o = (n = n.slice(0)).length; r < o; ++r)%0A              n[r].apply(this, e);%0A          }%0A          return this;%0A        }),%0A        (r.prototype.listeners = function (t) {%0A          return (%0A            (this._callbacks = this._callbacks || {}),%0A            this._callbacks["$" + t] || []%0A          );%0A        }),%0A        (r.prototype.hasListeners = function (t) {%0A          return !!this.listeners(t).length;%0A        });%0A    },%0A    function (t, e, n) {%0A      var r = n(0);%0A      t.exports.pick = function (t) {%0A        for (%0A          var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;%0A          r < e;%0A          r++%0A        )%0A          n[r - 1] = arguments[r];%0A        return n.reduce(function (e, n) {%0A          return t.hasOwnProperty(n) && (e[n] = t[n]), e;%0A        }, {});%0A      };%0A      var o = setTimeout,%0A        i = clearTimeout;%0A      t.exports.installTimerFunctions = function (t, e) {%0A        e.useNativeTimers%0A          ? ((t.setTimeoutFn = o.bind(r)), (t.clearTimeoutFn = i.bind(r)))%0A          : ((t.setTimeoutFn = setTimeout.bind(r)),%0A            (t.clearTimeoutFn = clearTimeout.bind(r)));%0A      };%0A    },%0A    function (t, e, n) {%0A      function r(t) {%0A        return (r =%0A          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator%0A            ? function (t) {%0A                return typeof t;%0A              }%0A            : function (t) {%0A                return t &&%0A                  "function" == typeof Symbol &&%0A                  t.constructor === Symbol &&%0A                  t !== Symbol.prototype%0A                  ? "symbol"%0A                  : typeof t;%0A              })(t);%0A      }%0A      function o(t, e) {%0A        for (var n = 0; n < e.length; n++) {%0A          var r = e[n];%0A          (r.enumerable = r.enumerable || !1),%0A            (r.configurable = !0),%0A            "value" in r && (r.writable = !0),%0A            Object.defineProperty(t, r.key, r);%0A        }%0A      }%0A      function i(t, e) {%0A        return (i =%0A          Object.setPrototypeOf ||%0A          function (t, e) {%0A            return (t.__proto__ = e), t;%0A          })(t, e);%0A      }%0A      function s(t) {%0A        var e = (function () {%0A          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;%0A          if (Reflect.construct.sham) return !1;%0A          if ("function" == typeof Proxy) return !0;%0A          try {%0A            return (%0A              Boolean.prototype.valueOf.call(%0A                Reflect.construct(Boolean, [], function () {})%0A              ),%0A              !0%0A            );%0A          } catch (t) {%0A            return !1;%0A          }%0A        })();%0A        return function () {%0A          var n,%0A            r = u(t);%0A          if (e) {%0A            var o = u(this).constructor;%0A            n = Reflect.construct(r, arguments, o);%0A          } else n = r.apply(this, arguments);%0A          return c(this, n);%0A        };%0A      }%0A      function c(t, e) {%0A        if (e && ("object" === r(e) || "function" == typeof e)) return e;%0A        if (void 0 !== e)%0A          throw new TypeError(%0A            "Derived constructors may only return object or undefined"%0A          );%0A        return a(t);%0A      }%0A      function a(t) {%0A        if (void 0 === t)%0A          throw new ReferenceError(%0A            "this hasn't been initialised - super() hasn't been called"%0A          );%0A        return t;%0A      }%0A      function u(t) {%0A        return (u = Object.setPrototypeOf%0A          ? Object.getPrototypeOf%0A          : function (t) {%0A              return t.__proto__ || Object.getPrototypeOf(t);%0A            })(t);%0A      }%0A      var f = n(1),%0A        l = n(2),%0A        p = n(3).installTimerFunctions,%0A        h = (function (t) {%0A          !(function (t, e) {%0A            if ("function" != typeof e && null !== e)%0A              throw new TypeError(%0A                "Super expression must either be null or a function"%0A              );%0A            (t.prototype = Object.create(e && e.prototype, {%0A              constructor: { value: t, writable: !0, configurable: !0 },%0A            })),%0A              e && i(t, e);%0A          })(u, t);%0A          var e,%0A            n,%0A            r,%0A            c = s(u);%0A          function u(t) {%0A            var e;%0A            return (%0A              (function (t, e) {%0A                if (!(t instanceof e))%0A                  throw new TypeError("Cannot call a class as a function");%0A              })(this, u),%0A              (e = c.call(this)),%0A              p(a(e), t),%0A              (e.opts = t),%0A              (e.query = t.query),%0A              (e.readyState = ""),%0A              (e.socket = t.socket),%0A              e%0A            );%0A          }%0A          return (%0A            (e = u),%0A            (n = [%0A              {%0A                key: "onError",%0A                value: function (t, e) {%0A                  var n = new Error(t);%0A                  return (%0A                    (n.type = "TransportError"),%0A                    (n.description = e),%0A                    this.emit("error", n),%0A                    this%0A                  );%0A                },%0A              },%0A              {%0A                key: "open",%0A                value: function () {%0A                  return (%0A                    ("closed" !== this.readyState && "" !== this.readyState) ||%0A                      ((this.readyState = "opening"), this.doOpen()),%0A                    this%0A                  );%0A                },%0A              },%0A              {%0A                key: "close",%0A                value: function () {%0A                  return (%0A                    ("opening" !== this.readyState &&%0A                      "open" !== this.readyState) ||%0A                      (this.doClose(), this.onClose()),%0A                    this%0A                  );%0A                },%0A              },%0A              {%0A                key: "send",%0A                value: function (t) {%0A                  "open" === this.readyState && this.write(t);%0A                },%0A              },%0A              {%0A                key: "onOpen",%0A                value: function () {%0A                  (this.readyState = "open"),%0A                    (this.writable = !0),%0A                    this.emit("open");%0A                },%0A              },%0A              {%0A                key: "onData",%0A                value: function (t) {%0A                  var e = f.decodePacket(t, this.socket.binaryType);%0A                  this.onPacket(e);%0A                },%0A              },%0A              {%0A                key: "onPacket",%0A                value: function (t) {%0A                  this.emit("packet", t);%0A                },%0A              },%0A              {%0A                key: "onClose",%0A                value: function () {%0A                  (this.readyState = "closed"), this.emit("close");%0A                },%0A              },%0A            ]) && o(e.prototype, n),%0A            r && o(e, r),%0A            u%0A          );%0A        })(l);%0A      t.exports = h;%0A    },%0A    function (t, e) {%0A      (e.encode = function (t) {%0A        var e = "";%0A        for (var n in t)%0A          t.hasOwnProperty(n) &&%0A            (e.length && (e += "&"),%0A            (e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n])));%0A        return e;%0A      }),%0A        (e.decode = function (t) {%0A          for (var e = {}, n = t.split("&"), r = 0, o = n.length; r < o; r++) {%0A            var i = n[r].split("=");%0A            e[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);%0A          }%0A          return e;%0A        });%0A    },%0A    function (t, e, n) {%0A      function r(t) {%0A        return (r =%0A          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator%0A            ? function (t) {%0A                return typeof t;%0A              }%0A            : function (t) {%0A                return t &&%0A                  "function" == typeof Symbol &&%0A                  t.constructor === Symbol &&%0A                  t !== Symbol.prototype%0A                  ? "symbol"%0A                  : typeof t;%0A              })(t);%0A      }%0A      function o(t, e, n) {%0A        return (o =%0A          "undefined" != typeof Reflect && Reflect.get%0A            ? Reflect.get%0A            : function (t, e, n) {%0A                var r = (function (t, e) {%0A                  for (%0A                    ;%0A                    !Object.prototype.hasOwnProperty.call(t, e) &&%0A                    null !== (t = a(t));%0A%0A                  );%0A                  return t;%0A                })(t, e);%0A                if (r) {%0A                  var o = Object.getOwnPropertyDescriptor(r, e);%0A                  return o.get ? o.get.call(n) : o.value;%0A                }%0A              })(t, e, n || t);%0A      }%0A      function i(t, e) {%0A        return (i =%0A          Object.setPrototypeOf ||%0A          function (t, e) {%0A            return (t.__proto__ = e), t;%0A          })(t, e);%0A      }%0A      function s(t) {%0A        var e = (function () {%0A          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;%0A          if (Reflect.construct.sham) return !1;%0A          if ("function" == typeof Proxy) return !0;%0A          try {%0A            return (%0A              Boolean.prototype.valueOf.call(%0A                Reflect.construct(Boolean, [], function () {})%0A              ),%0A              !0%0A            );%0A          } catch (t) {%0A            return !1;%0A          }%0A        })();%0A        return function () {%0A          var n,%0A            r = a(t);%0A          if (e) {%0A            var o = a(this).constructor;%0A            n = Reflect.construct(r, arguments, o);%0A          } else n = r.apply(this, arguments);%0A          return c(this, n);%0A        };%0A      }%0A      function c(t, e) {%0A        if (e && ("object" === r(e) || "function" == typeof e)) return e;%0A        if (void 0 !== e)%0A          throw new TypeError(%0A            "Derived constructors may only return object or undefined"%0A          );%0A        return (function (t) {%0A          if (void 0 === t)%0A            throw new ReferenceError(%0A              "this hasn't been initialised - super() hasn't been called"%0A            );%0A          return t;%0A        })(t);%0A      }%0A      function a(t) {%0A        return (a = Object.setPrototypeOf%0A          ? Object.getPrototypeOf%0A          : function (t) {%0A              return t.__proto__ || Object.getPrototypeOf(t);%0A            })(t);%0A      }%0A      function u(t, e) {%0A        if (!(t instanceof e))%0A          throw new TypeError("Cannot call a class as a function");%0A      }%0A      function f(t, e) {%0A        for (var n = 0; n < e.length; n++) {%0A          var r = e[n];%0A          (r.enumerable = r.enumerable || !1),%0A            (r.configurable = !0),%0A            "value" in r && (r.writable = !0),%0A            Object.defineProperty(t, r.key, r);%0A        }%0A      }%0A      function l(t, e, n) {%0A        return e && f(t.prototype, e), n && f(t, n), t;%0A      }%0A      Object.defineProperty(e, "__esModule", { value: !0 }),%0A        (e.Decoder = e.Encoder = e.PacketType = e.protocol = void 0);%0A      var p,%0A        h = n(2),%0A        y = n(30),%0A        d = n(15);%0A      (e.protocol = 5),%0A        (function (t) {%0A          (t[(t.CONNECT = 0)] = "CONNECT"),%0A            (t[(t.DISCONNECT = 1)] = "DISCONNECT"),%0A            (t[(t.EVENT = 2)] = "EVENT"),%0A            (t[(t.ACK = 3)] = "ACK"),%0A            (t[(t.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),%0A            (t[(t.BINARY_EVENT = 5)] = "BINARY_EVENT"),%0A            (t[(t.BINARY_ACK = 6)] = "BINARY_ACK");%0A        })((p = e.PacketType || (e.PacketType = {})));%0A      var v = (function () {%0A        function t() {%0A          u(this, t);%0A        }%0A        return (%0A          l(t, [%0A            {%0A              key: "encode",%0A              value: function (t) {%0A                return (t.type !== p.EVENT && t.type !== p.ACK) ||%0A                  !d.hasBinary(t)%0A                  ? [this.encodeAsString(t)]%0A                  : ((t.type =%0A                      t.type === p.EVENT ? p.BINARY_EVENT : p.BINARY_ACK),%0A                    this.encodeAsBinary(t));%0A              },%0A            },%0A            {%0A              key: "encodeAsString",%0A              value: function (t) {%0A                var e = "" + t.type;%0A                return (%0A                  (t.type !== p.BINARY_EVENT && t.type !== p.BINARY_ACK) ||%0A                    (e += t.attachments + "-"),%0A                  t.nsp && "/" !== t.nsp && (e += t.nsp + ","),%0A                  null != t.id && (e += t.id),%0A                  null != t.data && (e += JSON.stringify(t.data)),%0A                  e%0A                );%0A              },%0A            },%0A            {%0A              key: "encodeAsBinary",%0A              value: function (t) {%0A                var e = y.deconstructPacket(t),%0A                  n = this.encodeAsString(e.packet),%0A                  r = e.buffers;%0A                return r.unshift(n), r;%0A              },%0A            },%0A          ]),%0A          t%0A        );%0A      })();%0A      e.Encoder = v;%0A      var b = (function (t) {%0A        !(function (t, e) {%0A          if ("function" != typeof e && null !== e)%0A            throw new TypeError(%0A              "Super expression must either be null or a function"%0A            );%0A          (t.prototype = Object.create(e && e.prototype, {%0A            constructor: { value: t, writable: !0, configurable: !0 },%0A          })),%0A            e && i(t, e);%0A        })(n, t);%0A        var e = s(n);%0A        function n() {%0A          return u(this, n), e.call(this);%0A        }%0A        return (%0A          l(%0A            n,%0A            [%0A              {%0A                key: "add",%0A                value: function (t) {%0A                  var e;%0A                  if ("string" == typeof t)%0A                    (e = this.decodeString(t)).type === p.BINARY_EVENT ||%0A                    e.type === p.BINARY_ACK%0A                      ? ((this.reconstructor = new m(e)),%0A                        0 === e.attachments &&%0A                          o(a(n.prototype), "emit", this).call(%0A                            this,%0A                            "decoded",%0A                            e%0A                          ))%0A                      : o(a(n.prototype), "emit", this).call(%0A                          this,%0A                          "decoded",%0A                          e%0A                        );%0A                  else {%0A                    if (!d.isBinary(t) && !t.base64)%0A                      throw new Error("Unknown type: " + t);%0A                    if (!this.reconstructor)%0A                      throw new Error(%0A                        "got binary data when not reconstructing a packet"%0A                      );%0A                    (e = this.reconstructor.takeBinaryData(t)) &&%0A                      ((this.reconstructor = null),%0A                      o(a(n.prototype), "emit", this).call(this, "decoded", e));%0A                  }%0A                },%0A              },%0A              {%0A                key: "decodeString",%0A                value: function (t) {%0A                  var e = 0,%0A                    r = { type: Number(t.charAt(0)) };%0A                  if (void 0 === p[r.type])%0A                    throw new Error("unknown packet type " + r.type);%0A                  if (r.type === p.BINARY_EVENT || r.type === p.BINARY_ACK) {%0A                    for (%0A                      var o = e + 1;%0A                      "-" !== t.charAt(++e) && e != t.length;%0A%0A                    );%0A                    var i = t.substring(o, e);%0A                    if (i != Number(i) || "-" !== t.charAt(e))%0A                      throw new Error("Illegal attachments");%0A                    r.attachments = Number(i);%0A                  }%0A                  if ("/" === t.charAt(e + 1)) {%0A                    for (var s = e + 1; ++e; ) {%0A                      if ("," === t.charAt(e)) break;%0A                      if (e === t.length) break;%0A                    }%0A                    r.nsp = t.substring(s, e);%0A                  } else r.nsp = "/";%0A                  var c = t.charAt(e + 1);%0A                  if ("" !== c && Number(c) == c) {%0A                    for (var a = e + 1; ++e; ) {%0A                      var u = t.charAt(e);%0A                      if (null == u || Number(u) != u) {%0A                        --e;%0A                        break;%0A                      }%0A                      if (e === t.length) break;%0A                    }%0A                    r.id = Number(t.substring(a, e + 1));%0A                  }%0A                  if (t.charAt(++e)) {%0A                    var f = (function (t) {%0A                      try {%0A                        return JSON.parse(t);%0A                      } catch (t) {%0A                        return !1;%0A                      }%0A                    })(t.substr(e));%0A                    if (!n.isPayloadValid(r.type, f))%0A                      throw new Error("invalid payload");%0A                    r.data = f;%0A                  }%0A                  return r;%0A                },%0A              },%0A              {%0A                key: "destroy",%0A                value: function () {%0A                  this.reconstructor &&%0A                    this.reconstructor.finishedReconstruction();%0A                },%0A              },%0A            ],%0A            [%0A              {%0A                key: "isPayloadValid",%0A                value: function (t, e) {%0A                  switch (t) {%0A                    case p.CONNECT:%0A                      return "object" === r(e);%0A                    case p.DISCONNECT:%0A                      return void 0 === e;%0A                    case p.CONNECT_ERROR:%0A                      return "string" == typeof e || "object" === r(e);%0A                    case p.EVENT:%0A                    case p.BINARY_EVENT:%0A                      return Array.isArray(e) && e.length > 0;%0A                    case p.ACK:%0A                    case p.BINARY_ACK:%0A                      return Array.isArray(e);%0A                  }%0A                },%0A              },%0A            ]%0A          ),%0A          n%0A        );%0A      })(h);%0A      e.Decoder = b;%0A      var m = (function () {%0A        function t(e) {%0A          u(this, t),%0A            (this.packet = e),%0A            (this.buffers = []),%0A            (this.reconPack = e);%0A        }%0A        return (%0A          l(t, [%0A            {%0A              key: "takeBinaryData",%0A              value: function (t) {%0A                if (%0A                  (this.buffers.push(t),%0A                  this.buffers.length === this.reconPack.attachments)%0A                ) {%0A                  var e = y.reconstructPacket(this.reconPack, this.buffers);%0A                  return this.finishedReconstruction(), e;%0A                }%0A                return null;%0A              },%0A            },%0A            {%0A              key: "finishedReconstruction",%0A              value: function () {%0A                (this.reconPack = null), (this.buffers = []);%0A              },%0A            },%0A          ]),%0A          t%0A        );%0A      })();%0A    },%0A    function (t, e) {%0A      var n =%0A          /^(?:(?![^:@]+:[^:@\\/]*@)(http|https|ws|wss):\\/\\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\\/?%23]*)(?::(\\d*))?)(((\\/(?:[^?%23](?![^?%23\\/]*\\.[^?%23\\/.]+(?:[?%23]|$)))*\\/?)?([^?%23\\/]*))(?:\\?([^%23]*))?(?:%23(.*))?)/,%0A        r = [%0A          "source",%0A          "protocol",%0A          "authority",%0A          "userInfo",%0A          "user",%0A          "password",%0A          "host",%0A          "port",%0A          "relative",%0A          "path",%0A          "directory",%0A          "file",%0A          "query",%0A          "anchor",%0A        ];%0A      t.exports = function (t) {%0A        var e = t,%0A          o = t.indexOf("["),%0A          i = t.indexOf("]");%0A        -1 != o &&%0A          -1 != i &&%0A          (t =%0A            t.substring(0, o) +%0A            t.substring(o, i).replace(/:/g, ";") +%0A            t.substring(i, t.length));%0A        for (var s, c, a = n.exec(t || ""), u = {}, f = 14; f--; )%0A          u[r[f]] = a[f] || "";%0A        return (%0A          -1 != o &&%0A            -1 != i &&%0A            ((u.source = e),%0A            (u.host = u.host%0A              .substring(1, u.host.length - 1)%0A              .replace(/;/g, ":")),%0A            (u.authority = u.authority%0A              .replace("[", "")%0A              .replace("]", "")%0A              .replace(/;/g, ":")),%0A            (u.ipv6uri = !0)),%0A          (u.pathNames = (function (t, e) {%0A            var n = e.replace(/\\/{2,9}/g, "/").split("/");%0A            ("/" != e.substr(0, 1) && 0 !== e.length) || n.splice(0, 1);%0A            "/" == e.substr(e.length - 1, 1) && n.splice(n.length - 1, 1);%0A            return n;%0A          })(0, u.path)),%0A          (u.queryKey =%0A            ((s = u.query),%0A            (c = {}),%0A            s.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (t, e, n) {%0A              e && (c[e] = n);%0A            }),%0A            c)),%0A          u%0A        );%0A      };%0A    },%0A    function (t, e, n) {%0A      function r(t) {%0A        return (r =%0A          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator%0A            ? function (t) {%0A                return typeof t;%0A              }%0A            : function (t) {%0A                return t &&%0A                  "function" == typeof Symbol &&%0A                  t.constructor === Symbol &&%0A                  t !== Symbol.prototype%0A                  ? "symbol"%0A                  : typeof t;%0A              })(t);%0A      }%0A      function o(t, e) {%0A        for (var n = 0; n < e.length; n++) {%0A          var r = e[n];%0A          (r.enumerable = r.enumerable || !1),%0A            (r.configurable = !0),%0A            "value" in r && (r.writable = !0),%0A            Object.defineProperty(t, r.key, r);%0A        }%0A      }%0A      function i(t, e) {%0A        return (i =%0A          Object.setPrototypeOf ||%0A          function (t, e) {%0A            return (t.__proto__ = e), t;%0A          })(t, e);%0A      }%0A      function s(t) {%0A        var e = (function () {%0A          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;%0A          if (Reflect.construct.sham) return !1;%0A          if ("function" == typeof Proxy) return !0;%0A          try {%0A            return (%0A              Boolean.prototype.valueOf.call(%0A                Reflect.construct(Boolean, [], function () {})%0A              ),%0A              !0%0A            );%0A          } catch (t) {%0A            return !1;%0A          }%0A        })();%0A        return function () {%0A          var n,%0A            r = u(t);%0A          if (e) {%0A            var o = u(this).constructor;%0A            n = Reflect.construct(r, arguments, o);%0A          } else n = r.apply(this, arguments);%0A          return c(this, n);%0A        };%0A      }%0A      function c(t, e) {%0A        if (e && ("object" === r(e) || "function" == typeof e)) return e;%0A        if (void 0 !== e)%0A          throw new TypeError(%0A            "Derived constructors may only return object or undefined"%0A          );%0A        return a(t);%0A      }%0A      function a(t) {%0A        if (void 0 === t)%0A          throw new ReferenceError(%0A            "this hasn't been initialised - super() hasn't been called"%0A          );%0A        return t;%0A      }%0A      function u(t) {%0A        return (u = Object.setPrototypeOf%0A          ? Object.getPrototypeOf%0A          : function (t) {%0A              return t.__proto__ || Object.getPrototypeOf(t);%0A            })(t);%0A      }%0A      Object.defineProperty(e, "__esModule", { value: !0 }),%0A        (e.Manager = void 0);%0A      var f = n(20),%0A        l = n(3),%0A        p = n(14),%0A        h = n(6),%0A        y = n(16),%0A        d = n(31),%0A        v = (function (t) {%0A          !(function (t, e) {%0A            if ("function" != typeof e && null !== e)%0A              throw new TypeError(%0A                "Super expression must either be null or a function"%0A              );%0A            (t.prototype = Object.create(e && e.prototype, {%0A              constructor: { value: t, writable: !0, configurable: !0 },%0A            })),%0A              e && i(t, e);%0A          })(v, t);%0A          var e,%0A            n,%0A            c,%0A            u = s(v);%0A          function v(t, e) {%0A            var n, o;%0A            !(function (t, e) {%0A              if (!(t instanceof e))%0A                throw new TypeError("Cannot call a class as a function");%0A            })(this, v),%0A              ((n = u.call(this)).nsps = {}),%0A              (n.subs = []),%0A              t && "object" === r(t) && ((e = t), (t = void 0)),%0A              ((e = e || {}).path = e.path || "/socket.io"),%0A              (n.opts = e),%0A              (0, l.installTimerFunctions)(a(n), e),%0A              n.reconnection(!1 !== e.reconnection),%0A              n.reconnectionAttempts(e.reconnectionAttempts || 1 / 0),%0A              n.reconnectionDelay(e.reconnectionDelay || 1e3),%0A              n.reconnectionDelayMax(e.reconnectionDelayMax || 5e3),%0A              n.randomizationFactor(%0A                null !== (o = e.randomizationFactor) && void 0 !== o ? o : 0.5%0A              ),%0A              (n.backoff = new d({%0A                min: n.reconnectionDelay(),%0A                max: n.reconnectionDelayMax(),%0A                jitter: n.randomizationFactor(),%0A              })),%0A              n.timeout(null == e.timeout ? 2e4 : e.timeout),%0A              (n._readyState = "closed"),%0A              (n.uri = t);%0A            var i = e.parser || h;%0A            return (%0A              (n.encoder = new i.Encoder()),%0A              (n.decoder = new i.Decoder()),%0A              (n._autoConnect = !1 !== e.autoConnect),%0A              n._autoConnect && n.open(),%0A              n%0A            );%0A          }%0A          return (%0A            (e = v),%0A            (n = [%0A              {%0A                key: "reconnection",%0A                value: function (t) {%0A                  return arguments.length%0A                    ? ((this._reconnection = !!t), this)%0A                    : this._reconnection;%0A                },%0A              },%0A              {%0A                key: "reconnectionAttempts",%0A                value: function (t) {%0A                  return void 0 === t%0A                    ? this._reconnectionAttempts%0A                    : ((this._reconnectionAttempts = t), this);%0A                },%0A              },%0A              {%0A                key: "reconnectionDelay",%0A                value: function (t) {%0A                  var e;%0A                  return void 0 === t%0A                    ? this._reconnectionDelay%0A                    : ((this._reconnectionDelay = t),%0A                      null === (e = this.backoff) ||%0A                        void 0 === e ||%0A                        e.setMin(t),%0A                      this);%0A                },%0A              },%0A              {%0A                key: "randomizationFactor",%0A                value: function (t) {%0A                  var e;%0A                  return void 0 === t%0A                    ? this._randomizationFactor%0A                    : ((this._randomizationFactor = t),%0A                      null === (e = this.backoff) ||%0A                        void 0 === e ||%0A                        e.setJitter(t),%0A                      this);%0A                },%0A              },%0A              {%0A                key: "reconnectionDelayMax",%0A                value: function (t) {%0A                  var e;%0A                  return void 0 === t%0A                    ? this._reconnectionDelayMax%0A                    : ((this._reconnectionDelayMax = t),%0A                      null === (e = this.backoff) ||%0A                        void 0 === e ||%0A                        e.setMax(t),%0A                      this);%0A                },%0A              },%0A              {%0A                key: "timeout",%0A                value: function (t) {%0A                  return arguments.length%0A                    ? ((this._timeout = t), this)%0A                    : this._timeout;%0A                },%0A              },%0A              {%0A                key: "maybeReconnectOnOpen",%0A                value: function () {%0A                  !this._reconnecting &&%0A                    this._reconnection &&%0A                    0 === this.backoff.attempts &&%0A                    this.reconnect();%0A                },%0A              },%0A              {%0A                key: "open",%0A                value: function (t) {%0A                  var e = this;%0A                  if (~this._readyState.indexOf("open")) return this;%0A                  this.engine = f(this.uri, this.opts);%0A                  var n = this.engine,%0A                    r = this;%0A                  (this._readyState = "opening"), (this.skipReconnect = !1);%0A                  var o = (0, y.on)(n, "open", function () {%0A                      r.onopen(), t && t();%0A                    }),%0A                    i = (0, y.on)(n, "error", function (n) {%0A                      r.cleanup(),%0A                        (r._readyState = "closed"),%0A                        e.emitReserved("error", n),%0A                        t ? t(n) : r.maybeReconnectOnOpen();%0A                    });%0A                  if (!1 !== this._timeout) {%0A                    var s = this._timeout;%0A                    0 === s && o();%0A                    var c = this.setTimeoutFn(function () {%0A                      o(), n.close(), n.emit("error", new Error("timeout"));%0A                    }, s);%0A                    this.opts.autoUnref && c.unref(),%0A                      this.subs.push(function () {%0A                        clearTimeout(c);%0A                      });%0A                  }%0A                  return this.subs.push(o), this.subs.push(i), this;%0A                },%0A              },%0A              {%0A                key: "connect",%0A                value: function (t) {%0A                  return this.open(t);%0A                },%0A              },%0A              {%0A                key: "onopen",%0A                value: function () {%0A                  this.cleanup(),%0A                    (this._readyState = "open"),%0A                    this.emitReserved("open");%0A                  var t = this.engine;%0A                  this.subs.push(%0A                    (0, y.on)(t, "ping", this.onping.bind(this)),%0A                    (0, y.on)(t, "data", this.ondata.bind(this)),%0A                    (0, y.on)(t, "error", this.onerror.bind(this)),%0A                    (0, y.on)(t, "close", this.onclose.bind(this)),%0A                    (0, y.on)(%0A                      this.decoder,%0A                      "decoded",%0A                      this.ondecoded.bind(this)%0A                    )%0A                  );%0A                },%0A              },%0A              {%0A                key: "onping",%0A                value: function () {%0A                  this.emitReserved("ping");%0A                },%0A              },%0A              {%0A                key: "ondata",%0A                value: function (t) {%0A                  this.decoder.add(t);%0A                },%0A              },%0A              {%0A                key: "ondecoded",%0A                value: function (t) {%0A                  this.emitReserved("packet", t);%0A                },%0A              },%0A              {%0A                key: "onerror",%0A                value: function (t) {%0A                  this.emitReserved("error", t);%0A                },%0A              },%0A              {%0A                key: "socket",%0A                value: function (t, e) {%0A                  var n = this.nsps[t];%0A                  return (%0A                    n || ((n = new p.Socket(this, t, e)), (this.nsps[t] = n)), n%0A                  );%0A                },%0A              },%0A              {%0A                key: "_destroy",%0A                value: function (t) {%0A                  for (%0A                    var e = 0, n = Object.keys(this.nsps);%0A                    e < n.length;%0A                    e++%0A                  ) {%0A                    var r = n[e];%0A                    if (this.nsps[r].active) return;%0A                  }%0A                  this._close();%0A                },%0A              },%0A              {%0A                key: "_packet",%0A                value: function (t) {%0A                  for (var e = this.encoder.encode(t), n = 0; n < e.length; n++)%0A                    this.engine.write(e[n], t.options);%0A                },%0A              },%0A              {%0A                key: "cleanup",%0A                value: function () {%0A                  this.subs.forEach(function (t) {%0A                    return t();%0A                  }),%0A                    (this.subs.length = 0),%0A                    this.decoder.destroy();%0A                },%0A              },%0A              {%0A                key: "_close",%0A                value: function () {%0A                  (this.skipReconnect = !0),%0A                    (this._reconnecting = !1),%0A                    "opening" === this._readyState && this.cleanup(),%0A                    this.backoff.reset(),%0A                    (this._readyState = "closed"),%0A                    this.engine && this.engine.close();%0A                },%0A              },%0A              {%0A                key: "disconnect",%0A                value: function () {%0A                  return this._close();%0A                },%0A              },%0A              {%0A                key: "onclose",%0A                value: function (t) {%0A                  this.cleanup(),%0A                    this.backoff.reset(),%0A                    (this._readyState = "closed"),%0A                    this.emitReserved("close", t),%0A                    this._reconnection &&%0A                      !this.skipReconnect &&%0A                      this.reconnect();%0A                },%0A              },%0A              {%0A                key: "reconnect",%0A                value: function () {%0A                  var t = this;%0A                  if (this._reconnecting || this.skipReconnect) return this;%0A                  var e = this;%0A                  if (this.backoff.attempts >= this._reconnectionAttempts)%0A                    this.backoff.reset(),%0A                      this.emitReserved("reconnect_failed"),%0A                      (this._reconnecting = !1);%0A                  else {%0A                    var n = this.backoff.duration();%0A                    this._reconnecting = !0;%0A                    var r = this.setTimeoutFn(function () {%0A                      e.skipReconnect ||%0A                        (t.emitReserved(%0A                          "reconnect_attempt",%0A                          e.backoff.attempts%0A                        ),%0A                        e.skipReconnect ||%0A                          e.open(function (n) {%0A                            n%0A                              ? ((e._reconnecting = !1),%0A                                e.reconnect(),%0A                                t.emitReserved("reconnect_error", n))%0A                              : e.onreconnect();%0A                          }));%0A                    }, n);%0A                    this.opts.autoUnref && r.unref(),%0A                      this.subs.push(function () {%0A                        clearTimeout(r);%0A                      });%0A                  }%0A                },%0A              },%0A              {%0A                key: "onreconnect",%0A                value: function () {%0A                  var t = this.backoff.attempts;%0A                  (this._reconnecting = !1),%0A                    this.backoff.reset(),%0A                    this.emitReserved("reconnect", t);%0A                },%0A              },%0A            ]) && o(e.prototype, n),%0A            c && o(e, c),%0A            v%0A          );%0A        })(n(17).StrictEventEmitter);%0A      e.Manager = v;%0A    },%0A    function (t, e, n) {%0A      var r = n(10),%0A        o = n(23),%0A        i = n(27),%0A        s = n(28);%0A      (e.polling = function (t) {%0A        var e = !1,%0A          n = !1,%0A          s = !1 !== t.jsonp;%0A        if ("undefined" != typeof location) {%0A          var c = "https:" === location.protocol,%0A            a = location.port;%0A          a || (a = c ? 443 : 80),%0A            (e = t.hostname !== location.hostname || a !== t.port),%0A            (n = t.secure !== c);%0A        }%0A        if (%0A          ((t.xdomain = e),%0A          (t.xscheme = n),%0A          "open" in new r(t) && !t.forceJSONP)%0A        )%0A          return new o(t);%0A        if (!s) throw new Error("JSONP disabled");%0A        return new i(t);%0A      }),%0A        (e.websocket = s);%0A    },%0A    function (t, e, n) {%0A      var r = n(22),%0A        o = n(0);%0A      t.exports = function (t) {%0A        var e = t.xdomain,%0A          n = t.xscheme,%0A          i = t.enablesXDR;%0A        try {%0A          if ("undefined" != typeof XMLHttpRequest && (!e || r))%0A            return new XMLHttpRequest();%0A        } catch (t) {}%0A        try {%0A          if ("undefined" != typeof XDomainRequest && !n && i)%0A            return new XDomainRequest();%0A        } catch (t) {}%0A        if (!e)%0A          try {%0A            return new o[["Active"].concat("Object").join("X")](%0A              "Microsoft.XMLHTTP"%0A            );%0A          } catch (t) {}%0A      };%0A    },%0A    function (t, e, n) {%0A      function r(t) {%0A        return (r =%0A          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator%0A            ? function (t) {%0A                return typeof t;%0A              }%0A            : function (t) {%0A                return t &&%0A                  "function" == typeof Symbol &&%0A                  t.constructor === Symbol &&%0A                  t !== Symbol.prototype%0A                  ? "symbol"%0A                  : typeof t;%0A              })(t);%0A      }%0A      function o(t, e) {%0A        if (!(t instanceof e))%0A          throw new TypeError("Cannot call a class as a function");%0A      }%0A      function i(t, e) {%0A        for (var n = 0; n < e.length; n++) {%0A          var r = e[n];%0A          (r.enumerable = r.enumerable || !1),%0A            (r.configurable = !0),%0A            "value" in r && (r.writable = !0),%0A            Object.defineProperty(t, r.key, r);%0A        }%0A      }%0A      function s(t, e) {%0A        return (s =%0A          Object.setPrototypeOf ||%0A          function (t, e) {%0A            return (t.__proto__ = e), t;%0A          })(t, e);%0A      }%0A      function c(t) {%0A        var e = (function () {%0A          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;%0A          if (Reflect.construct.sham) return !1;%0A          if ("function" == typeof Proxy) return !0;%0A          try {%0A            return (%0A              Boolean.prototype.valueOf.call(%0A                Reflect.construct(Boolean, [], function () {})%0A              ),%0A              !0%0A            );%0A          } catch (t) {%0A            return !1;%0A          }%0A        })();%0A        return function () {%0A          var n,%0A            r = u(t);%0A          if (e) {%0A            var o = u(this).constructor;%0A            n = Reflect.construct(r, arguments, o);%0A          } else n = r.apply(this, arguments);%0A          return a(this, n);%0A        };%0A      }%0A      function a(t, e) {%0A        if (e && ("object" === r(e) || "function" == typeof e)) return e;%0A        if (void 0 !== e)%0A          throw new TypeError(%0A            "Derived constructors may only return object or undefined"%0A          );%0A        return (function (t) {%0A          if (void 0 === t)%0A            throw new ReferenceError(%0A              "this hasn't been initialised - super() hasn't been called"%0A            );%0A          return t;%0A        })(t);%0A      }%0A      function u(t) {%0A        return (u = Object.setPrototypeOf%0A          ? Object.getPrototypeOf%0A          : function (t) {%0A              return t.__proto__ || Object.getPrototypeOf(t);%0A            })(t);%0A      }%0A      var f = n(4),%0A        l = n(5),%0A        p = n(1),%0A        h = n(13),%0A        y = (function (t) {%0A          !(function (t, e) {%0A            if ("function" != typeof e && null !== e)%0A              throw new TypeError(%0A                "Super expression must either be null or a function"%0A              );%0A            (t.prototype = Object.create(e && e.prototype, {%0A              constructor: { value: t, writable: !0, configurable: !0 },%0A            })),%0A              e && s(t, e);%0A          })(u, t);%0A          var e,%0A            n,%0A            r,%0A            a = c(u);%0A          function u() {%0A            return o(this, u), a.apply(this, arguments);%0A          }%0A          return (%0A            (e = u),%0A            (n = [%0A              {%0A                key: "name",%0A                get: function () {%0A                  return "polling";%0A                },%0A              },%0A              {%0A                key: "doOpen",%0A                value: function () {%0A                  this.poll();%0A                },%0A              },%0A              {%0A                key: "pause",%0A                value: function (t) {%0A                  var e = this;%0A                  this.readyState = "pausing";%0A                  var n = function () {%0A                    (e.readyState = "paused"), t();%0A                  };%0A                  if (this.polling || !this.writable) {%0A                    var r = 0;%0A                    this.polling &&%0A                      (r++,%0A                      this.once("pollComplete", function () {%0A                        --r || n();%0A                      })),%0A                      this.writable ||%0A                        (r++,%0A                        this.once("drain", function () {%0A                          --r || n();%0A                        }));%0A                  } else n();%0A                },%0A              },%0A              {%0A                key: "poll",%0A                value: function () {%0A                  (this.polling = !0), this.doPoll(), this.emit("poll");%0A                },%0A              },%0A              {%0A                key: "onData",%0A                value: function (t) {%0A                  var e = this;%0A                  p%0A                    .decodePayload(t, this.socket.binaryType)%0A                    .forEach(function (t) {%0A                      if (%0A                        ("opening" === e.readyState &&%0A                          "open" === t.type &&%0A                          e.onOpen(),%0A                        "close" === t.type)%0A                      )%0A                        return e.onClose(), !1;%0A                      e.onPacket(t);%0A                    }),%0A                    "closed" !== this.readyState &&%0A                      ((this.polling = !1),%0A                      this.emit("pollComplete"),%0A                      "open" === this.readyState && this.poll());%0A                },%0A              },%0A              {%0A                key: "doClose",%0A                value: function () {%0A                  var t = this,%0A                    e = function () {%0A                      t.write([{ type: "close" }]);%0A                    };%0A                  "open" === this.readyState ? e() : this.once("open", e);%0A                },%0A              },%0A              {%0A                key: "write",%0A                value: function (t) {%0A                  var e = this;%0A                  (this.writable = !1),%0A                    p.encodePayload(t, function (t) {%0A                      e.doWrite(t, function () {%0A                        (e.writable = !0), e.emit("drain");%0A                      });%0A                    });%0A                },%0A              },%0A              {%0A                key: "uri",%0A                value: function () {%0A                  var t = this.query || {},%0A                    e = this.opts.secure ? "https" : "http",%0A                    n = "";%0A                  return (%0A                    !1 !== this.opts.timestampRequests &&%0A                      (t[this.opts.timestampParam] = h()),%0A                    this.supportsBinary || t.sid || (t.b64 = 1),%0A                    (t = l.encode(t)),%0A                    this.opts.port &&%0A                      (("https" === e && 443 !== Number(this.opts.port)) ||%0A                        ("http" === e && 80 !== Number(this.opts.port))) &&%0A                      (n = ":" + this.opts.port),%0A                    t.length && (t = "?" + t),%0A                    e +%0A                      "://" +%0A                      (-1 !== this.opts.hostname.indexOf(":")%0A                        ? "[" + this.opts.hostname + "]"%0A                        : this.opts.hostname) +%0A                      n +%0A                      this.opts.path +%0A                      t%0A                  );%0A                },%0A              },%0A            ]) && i(e.prototype, n),%0A            r && i(e, r),%0A            u%0A          );%0A        })(f);%0A      t.exports = y;%0A    },%0A    function (t, e) {%0A      var n = Object.create(null);%0A      (n.open = "0"),%0A        (n.close = "1"),%0A        (n.ping = "2"),%0A        (n.pong = "3"),%0A        (n.message = "4"),%0A        (n.upgrade = "5"),%0A        (n.noop = "6");%0A      var r = Object.create(null);%0A      Object.keys(n).forEach(function (t) {%0A        r[n[t]] = t;%0A      });%0A      t.exports = {%0A        PACKET_TYPES: n,%0A        PACKET_TYPES_REVERSE: r,%0A        ERROR_PACKET: { type: "error", data: "parser error" },%0A      };%0A    },%0A    function (t, e, n) {%0A      var r,%0A        o =%0A          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(%0A            ""%0A          ),%0A        i = {},%0A        s = 0,%0A        c = 0;%0A      function a(t) {%0A        var e = "";%0A        do {%0A          (e = o[t % 64] + e), (t = Math.floor(t / 64));%0A        } while (t > 0);%0A        return e;%0A      }%0A      function u() {%0A        var t = a(+new Date());%0A        return t !== r ? ((s = 0), (r = t)) : t + "." + a(s++);%0A      }%0A      for (; c < 64; c++) i[o[c]] = c;%0A      (u.encode = a),%0A        (u.decode = function (t) {%0A          var e = 0;%0A          for (c = 0; c < t.length; c++) e = 64 * e + i[t.charAt(c)];%0A          return e;%0A        }),%0A        (t.exports = u);%0A    },%0A    function (t, e, n) {%0A      function r(t) {%0A        return (r =%0A          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator%0A            ? function (t) {%0A                return typeof t;%0A              }%0A            : function (t) {%0A                return t &&%0A                  "function" == typeof Symbol &&%0A                  t.constructor === Symbol &&%0A                  t !== Symbol.prototype%0A                  ? "symbol"%0A                  : typeof t;%0A              })(t);%0A      }%0A      function o(t, e) {%0A        var n =%0A          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||%0A          t["@@iterator"];%0A        if (!n) {%0A          if (%0A            Array.isArray(t) ||%0A            (n = (function (t, e) {%0A              if (!t) return;%0A              if ("string" == typeof t) return i(t, e);%0A              var n = Object.prototype.toString.call(t).slice(8, -1);%0A              "Object" === n && t.constructor && (n = t.constructor.name);%0A              if ("Map" === n || "Set" === n) return Array.from(t);%0A              if (%0A                "Arguments" === n ||%0A                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)%0A              )%0A                return i(t, e);%0A            })(t)) ||%0A            (e && t && "number" == typeof t.length)%0A          ) {%0A            n && (t = n);%0A            var r = 0,%0A              o = function () {};%0A            return {%0A              s: o,%0A              n: function () {%0A                return r >= t.length%0A                  ? { done: !0 }%0A                  : { done: !1, value: t[r++] };%0A              },%0A              e: function (t) {%0A                throw t;%0A              },%0A              f: o,%0A            };%0A          }%0A          throw new TypeError(%0A            "Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."%0A          );%0A        }%0A        var s,%0A          c = !0,%0A          a = !1;%0A        return {%0A          s: function () {%0A            n = n.call(t);%0A          },%0A          n: function () {%0A            var t = n.next();%0A            return (c = t.done), t;%0A          },%0A          e: function (t) {%0A            (a = !0), (s = t);%0A          },%0A          f: function () {%0A            try {%0A              c || null == n.return || n.return();%0A            } finally {%0A              if (a) throw s;%0A            }%0A          },%0A        };%0A      }%0A      function i(t, e) {%0A        (null == e || e > t.length) && (e = t.length);%0A        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];%0A        return r;%0A      }%0A      function s(t, e) {%0A        for (var n = 0; n < e.length; n++) {%0A          var r = e[n];%0A          (r.enumerable = r.enumerable || !1),%0A            (r.configurable = !0),%0A            "value" in r && (r.writable = !0),%0A            Object.defineProperty(t, r.key, r);%0A        }%0A      }%0A      function c(t, e, n) {%0A        return (c =%0A          "undefined" != typeof Reflect && Reflect.get%0A            ? Reflect.get%0A            : function (t, e, n) {%0A                var r = (function (t, e) {%0A                  for (%0A                    ;%0A                    !Object.prototype.hasOwnProperty.call(t, e) &&%0A                    null !== (t = l(t));%0A%0A                  );%0A                  return t;%0A                })(t, e);%0A                if (r) {%0A                  var o = Object.getOwnPropertyDescriptor(r, e);%0A                  return o.get ? o.get.call(n) : o.value;%0A                }%0A              })(t, e, n || t);%0A      }%0A      function a(t, e) {%0A        return (a =%0A          Object.setPrototypeOf ||%0A          function (t, e) {%0A            return (t.__proto__ = e), t;%0A          })(t, e);%0A      }%0A      function u(t) {%0A        var e = (function () {%0A          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;%0A          if (Reflect.construct.sham) return !1;%0A          if ("function" == typeof Proxy) return !0;%0A          try {%0A            return (%0A              Boolean.prototype.valueOf.call(%0A                Reflect.construct(Boolean, [], function () {})%0A              ),%0A              !0%0A            );%0A          } catch (t) {%0A            return !1;%0A          }%0A        })();%0A        return function () {%0A          var n,%0A            r = l(t);%0A          if (e) {%0A            var o = l(this).constructor;%0A            n = Reflect.construct(r, arguments, o);%0A          } else n = r.apply(this, arguments);%0A          return f(this, n);%0A        };%0A      }%0A      function f(t, e) {%0A        if (e && ("object" === r(e) || "function" == typeof e)) return e;%0A        if (void 0 !== e)%0A          throw new TypeError(%0A            "Derived constructors may only return object or undefined"%0A          );%0A        return (function (t) {%0A          if (void 0 === t)%0A            throw new ReferenceError(%0A              "this hasn't been initialised - super() hasn't been called"%0A            );%0A          return t;%0A        })(t);%0A      }%0A      function l(t) {%0A        return (l = Object.setPrototypeOf%0A          ? Object.getPrototypeOf%0A          : function (t) {%0A              return t.__proto__ || Object.getPrototypeOf(t);%0A            })(t);%0A      }%0A      Object.defineProperty(e, "__esModule", { value: !0 }),%0A        (e.Socket = void 0);%0A      var p = n(6),%0A        h = n(16),%0A        y = n(17),%0A        d = Object.freeze({%0A          connect: 1,%0A          connect_error: 1,%0A          disconnect: 1,%0A          disconnecting: 1,%0A          newListener: 1,%0A          removeListener: 1,%0A        }),%0A        v = (function (t) {%0A          !(function (t, e) {%0A            if ("function" != typeof e && null !== e)%0A              throw new TypeError(%0A                "Super expression must either be null or a function"%0A              );%0A            (t.prototype = Object.create(e && e.prototype, {%0A              constructor: { value: t, writable: !0, configurable: !0 },%0A            })),%0A              e && a(t, e);%0A          })(f, t);%0A          var e,%0A            n,%0A            r,%0A            i = u(f);%0A          function f(t, e, n) {%0A            var r;%0A            return (%0A              (function (t, e) {%0A                if (!(t instanceof e))%0A                  throw new TypeError("Cannot call a class as a function");%0A              })(this, f),%0A              ((r = i.call(this)).connected = !1),%0A              (r.disconnected = !0),%0A              (r.receiveBuffer = []),%0A              (r.sendBuffer = []),%0A              (r.ids = 0),%0A              (r.acks = {}),%0A              (r.flags = {}),%0A              (r.io = t),%0A              (r.nsp = e),%0A              n && n.auth && (r.auth = n.auth),%0A              r.io._autoConnect && r.open(),%0A              r%0A            );%0A          }%0A          return (%0A            (e = f),%0A            (n = [%0A              {%0A                key: "subEvents",%0A                value: function () {%0A                  if (!this.subs) {%0A                    var t = this.io;%0A                    this.subs = [%0A                      (0, h.on)(t, "open", this.onopen.bind(this)),%0A                      (0, h.on)(t, "packet", this.onpacket.bind(this)),%0A                      (0, h.on)(t, "error", this.onerror.bind(this)),%0A                      (0, h.on)(t, "close", this.onclose.bind(this)),%0A                    ];%0A                  }%0A                },%0A              },%0A              {%0A                key: "active",%0A                get: function () {%0A                  return !!this.subs;%0A                },%0A              },%0A              {%0A                key: "connect",%0A                value: function () {%0A                  return (%0A                    this.connected ||%0A                      (this.subEvents(),%0A                      this.io._reconnecting || this.io.open(),%0A                      "open" === this.io._readyState && this.onopen()),%0A                    this%0A                  );%0A                },%0A              },%0A              {%0A                key: "open",%0A                value: function () {%0A                  return this.connect();%0A                },%0A              },%0A              {%0A                key: "send",%0A                value: function () {%0A                  for (%0A                    var t = arguments.length, e = new Array(t), n = 0;%0A                    n < t;%0A                    n++%0A                  )%0A                    e[n] = arguments[n];%0A                  return e.unshift("message"), this.emit.apply(this, e), this;%0A                },%0A              },%0A              {%0A                key: "emit",%0A                value: function (t) {%0A                  if (d.hasOwnProperty(t))%0A                    throw new Error('"' + t + '" is a reserved event name');%0A                  for (%0A                    var e = arguments.length,%0A                      n = new Array(e > 1 ? e - 1 : 0),%0A                      r = 1;%0A                    r < e;%0A                    r++%0A                  )%0A                    n[r - 1] = arguments[r];%0A                  n.unshift(t);%0A                  var o = { type: p.PacketType.EVENT, data: n, options: {} };%0A                  (o.options.compress = !1 !== this.flags.compress),%0A                    "function" == typeof n[n.length - 1] &&%0A                      ((this.acks[this.ids] = n.pop()), (o.id = this.ids++));%0A                  var i =%0A                      this.io.engine &&%0A                      this.io.engine.transport &&%0A                      this.io.engine.transport.writable,%0A                    s = this.flags.volatile && (!i || !this.connected);%0A                  return (%0A                    s ||%0A                      (this.connected%0A                        ? this.packet(o)%0A                        : this.sendBuffer.push(o)),%0A                    (this.flags = {}),%0A                    this%0A                  );%0A                },%0A              },%0A              {%0A                key: "packet",%0A                value: function (t) {%0A                  (t.nsp = this.nsp), this.io._packet(t);%0A                },%0A              },%0A              {%0A                key: "onopen",%0A                value: function () {%0A                  var t = this;%0A                  "function" == typeof this.auth%0A                    ? this.auth(function (e) {%0A                        t.packet({ type: p.PacketType.CONNECT, data: e });%0A                      })%0A                    : this.packet({%0A                        type: p.PacketType.CONNECT,%0A                        data: this.auth,%0A                      });%0A                },%0A              },%0A              {%0A                key: "onerror",%0A                value: function (t) {%0A                  this.connected || this.emitReserved("connect_error", t);%0A                },%0A              },%0A              {%0A                key: "onclose",%0A                value: function (t) {%0A                  (this.connected = !1),%0A                    (this.disconnected = !0),%0A                    delete this.id,%0A                    this.emitReserved("disconnect", t);%0A                },%0A              },%0A              {%0A                key: "onpacket",%0A                value: function (t) {%0A                  if (t.nsp === this.nsp)%0A                    switch (t.type) {%0A                      case p.PacketType.CONNECT:%0A                        if (t.data && t.data.sid) {%0A                          var e = t.data.sid;%0A                          this.onconnect(e);%0A                        } else%0A                          this.emitReserved(%0A                            "connect_error",%0A                            new Error(%0A                              "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"%0A                            )%0A                          );%0A                        break;%0A                      case p.PacketType.EVENT:%0A                      case p.PacketType.BINARY_EVENT:%0A                        this.onevent(t);%0A                        break;%0A                      case p.PacketType.ACK:%0A                      case p.PacketType.BINARY_ACK:%0A                        this.onack(t);%0A                        break;%0A                      case p.PacketType.DISCONNECT:%0A                        this.ondisconnect();%0A                        break;%0A                      case p.PacketType.CONNECT_ERROR:%0A                        var n = new Error(t.data.message);%0A                        (n.data = t.data.data),%0A                          this.emitReserved("connect_error", n);%0A                    }%0A                },%0A              },%0A              {%0A                key: "onevent",%0A                value: function (t) {%0A                  var e = t.data || [];%0A                  null != t.id && e.push(this.ack(t.id)),%0A                    this.connected%0A                      ? this.emitEvent(e)%0A                      : this.receiveBuffer.push(Object.freeze(e));%0A                },%0A              },%0A              {%0A                key: "emitEvent",%0A                value: function (t) {%0A                  if (this._anyListeners && this._anyListeners.length) {%0A                    var e,%0A                      n = o(this._anyListeners.slice());%0A                    try {%0A                      for (n.s(); !(e = n.n()).done; ) e.value.apply(this, t);%0A                    } catch (t) {%0A                      n.e(t);%0A                    } finally {%0A                      n.f();%0A                    }%0A                  }%0A                  c(l(f.prototype), "emit", this).apply(this, t);%0A                },%0A              },%0A              {%0A                key: "ack",%0A                value: function (t) {%0A                  var e = this,%0A                    n = !1;%0A                  return function () {%0A                    if (!n) {%0A                      n = !0;%0A                      for (%0A                        var r = arguments.length, o = new Array(r), i = 0;%0A                        i < r;%0A                        i++%0A                      )%0A                        o[i] = arguments[i];%0A                      e.packet({ type: p.PacketType.ACK, id: t, data: o });%0A                    }%0A                  };%0A                },%0A              },%0A              {%0A                key: "onack",%0A                value: function (t) {%0A                  var e = this.acks[t.id];%0A                  "function" == typeof e &&%0A                    (e.apply(this, t.data), delete this.acks[t.id]);%0A                },%0A              },%0A              {%0A                key: "onconnect",%0A                value: function (t) {%0A                  (this.id = t),%0A                    (this.connected = !0),%0A                    (this.disconnected = !1),%0A                    this.emitBuffered(),%0A                    this.emitReserved("connect");%0A                },%0A              },%0A              {%0A                key: "emitBuffered",%0A                value: function () {%0A                  var t = this;%0A                  this.receiveBuffer.forEach(function (e) {%0A                    return t.emitEvent(e);%0A                  }),%0A                    (this.receiveBuffer = []),%0A                    this.sendBuffer.forEach(function (e) {%0A                      return t.packet(e);%0A                    }),%0A                    (this.sendBuffer = []);%0A                },%0A              },%0A              {%0A                key: "ondisconnect",%0A                value: function () {%0A                  this.destroy(), this.onclose("io server disconnect");%0A                },%0A              },%0A              {%0A                key: "destroy",%0A                value: function () {%0A                  this.subs &&%0A                    (this.subs.forEach(function (t) {%0A                      return t();%0A                    }),%0A                    (this.subs = void 0)),%0A                    this.io._destroy(this);%0A                },%0A              },%0A              {%0A                key: "disconnect",%0A                value: function () {%0A                  return (%0A                    this.connected &&%0A                      this.packet({ type: p.PacketType.DISCONNECT }),%0A                    this.destroy(),%0A                    this.connected && this.onclose("io client disconnect"),%0A                    this%0A                  );%0A                },%0A              },%0A              {%0A                key: "close",%0A                value: function () {%0A                  return this.disconnect();%0A                },%0A              },%0A              {%0A                key: "compress",%0A                value: function (t) {%0A                  return (this.flags.compress = t), this;%0A                },%0A              },%0A              {%0A                key: "volatile",%0A                get: function () {%0A                  return (this.flags.volatile = !0), this;%0A                },%0A              },%0A              {%0A                key: "onAny",%0A                value: function (t) {%0A                  return (%0A                    (this._anyListeners = this._anyListeners || []),%0A                    this._anyListeners.push(t),%0A                    this%0A                  );%0A                },%0A              },%0A              {%0A                key: "prependAny",%0A                value: function (t) {%0A                  return (%0A                    (this._anyListeners = this._anyListeners || []),%0A                    this._anyListeners.unshift(t),%0A                    this%0A                  );%0A                },%0A              },%0A              {%0A                key: "offAny",%0A                value: function (t) {%0A                  if (!this._anyListeners) return this;%0A                  if (t) {%0A                    for (var e = this._anyListeners, n = 0; n < e.length; n++)%0A                      if (t === e[n]) return e.splice(n, 1), this;%0A                  } else this._anyListeners = [];%0A                  return this;%0A                },%0A              },%0A              {%0A                key: "listenersAny",%0A                value: function () {%0A                  return this._anyListeners || [];%0A                },%0A              },%0A            ]) && s(e.prototype, n),%0A            r && s(e, r),%0A            f%0A          );%0A        })(y.StrictEventEmitter);%0A      e.Socket = v;%0A    },%0A    function (t, e, n) {%0A      function r(t) {%0A        return (r =%0A          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator%0A            ? function (t) {%0A                return typeof t;%0A              }%0A            : function (t) {%0A                return t &&%0A                  "function" == typeof Symbol &&%0A                  t.constructor === Symbol &&%0A                  t !== Symbol.prototype%0A                  ? "symbol"%0A                  : typeof t;%0A              })(t);%0A      }%0A      Object.defineProperty(e, "__esModule", { value: !0 }),%0A        (e.hasBinary = e.isBinary = void 0);%0A      var o = "function" == typeof ArrayBuffer,%0A        i = Object.prototype.toString,%0A        s =%0A          "function" == typeof Blob ||%0A          ("undefined" != typeof Blob &&%0A            "[object BlobConstructor]" === i.call(Blob)),%0A        c =%0A          "function" == typeof File ||%0A          ("undefined" != typeof File &&%0A            "[object FileConstructor]" === i.call(File));%0A      function a(t) {%0A        return (%0A          (o &&%0A            (t instanceof ArrayBuffer ||%0A              (function (t) {%0A                return "function" == typeof ArrayBuffer.isView%0A                  ? ArrayBuffer.isView(t)%0A                  : t.buffer instanceof ArrayBuffer;%0A              })(t))) ||%0A          (s && t instanceof Blob) ||%0A          (c && t instanceof File)%0A        );%0A      }%0A      (e.isBinary = a),%0A        (e.hasBinary = function t(e, n) {%0A          if (!e || "object" !== r(e)) return !1;%0A          if (Array.isArray(e)) {%0A            for (var o = 0, i = e.length; o < i; o++) if (t(e[o])) return !0;%0A            return !1;%0A          }%0A          if (a(e)) return !0;%0A          if (%0A            e.toJSON &&%0A            "function" == typeof e.toJSON &&%0A            1 === arguments.length%0A          )%0A            return t(e.toJSON(), !0);%0A          for (var s in e)%0A            if (Object.prototype.hasOwnProperty.call(e, s) && t(e[s]))%0A              return !0;%0A          return !1;%0A        });%0A    },%0A    function (t, e, n) {%0A      Object.defineProperty(e, "__esModule", { value: !0 }),%0A        (e.on = void 0),%0A        (e.on = function (t, e, n) {%0A          return (%0A            t.on(e, n),%0A            function () {%0A              t.off(e, n);%0A            }%0A          );%0A        });%0A    },%0A    function (t, e, n) {%0A      function r(t) {%0A        return (r =%0A          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator%0A            ? function (t) {%0A                return typeof t;%0A              }%0A            : function (t) {%0A                return t &&%0A                  "function" == typeof Symbol &&%0A                  t.constructor === Symbol &&%0A                  t !== Symbol.prototype%0A                  ? "symbol"%0A                  : typeof t;%0A              })(t);%0A      }%0A      function o(t, e) {%0A        if (!(t instanceof e))%0A          throw new TypeError("Cannot call a class as a function");%0A      }%0A      function i(t, e) {%0A        for (var n = 0; n < e.length; n++) {%0A          var r = e[n];%0A          (r.enumerable = r.enumerable || !1),%0A            (r.configurable = !0),%0A            "value" in r && (r.writable = !0),%0A            Object.defineProperty(t, r.key, r);%0A        }%0A      }%0A      function s(t, e, n) {%0A        return (s =%0A          "undefined" != typeof Reflect && Reflect.get%0A            ? Reflect.get%0A            : function (t, e, n) {%0A                var r = (function (t, e) {%0A                  for (%0A                    ;%0A                    !Object.prototype.hasOwnProperty.call(t, e) &&%0A                    null !== (t = f(t));%0A%0A                  );%0A                  return t;%0A                })(t, e);%0A                if (r) {%0A                  var o = Object.getOwnPropertyDescriptor(r, e);%0A                  return o.get ? o.get.call(n) : o.value;%0A                }%0A              })(t, e, n || t);%0A      }%0A      function c(t, e) {%0A        return (c =%0A          Object.setPrototypeOf ||%0A          function (t, e) {%0A            return (t.__proto__ = e), t;%0A          })(t, e);%0A      }%0A      function a(t) {%0A        var e = (function () {%0A          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;%0A          if (Reflect.construct.sham) return !1;%0A          if ("function" == typeof Proxy) return !0;%0A          try {%0A            return (%0A              Boolean.prototype.valueOf.call(%0A                Reflect.construct(Boolean, [], function () {})%0A              ),%0A              !0%0A            );%0A          } catch (t) {%0A            return !1;%0A          }%0A        })();%0A        return function () {%0A          var n,%0A            r = f(t);%0A          if (e) {%0A            var o = f(this).constructor;%0A            n = Reflect.construct(r, arguments, o);%0A          } else n = r.apply(this, arguments);%0A          return u(this, n);%0A        };%0A      }%0A      function u(t, e) {%0A        if (e && ("object" === r(e) || "function" == typeof e)) return e;%0A        if (void 0 !== e)%0A          throw new TypeError(%0A            "Derived constructors may only return object or undefined"%0A          );%0A        return (function (t) {%0A          if (void 0 === t)%0A            throw new ReferenceError(%0A              "this hasn't been initialised - super() hasn't been called"%0A            );%0A          return t;%0A        })(t);%0A      }%0A      function f(t) {%0A        return (f = Object.setPrototypeOf%0A          ? Object.getPrototypeOf%0A          : function (t) {%0A              return t.__proto__ || Object.getPrototypeOf(t);%0A            })(t);%0A      }%0A      Object.defineProperty(e, "__esModule", { value: !0 }),%0A        (e.StrictEventEmitter = void 0);%0A      var l = (function (t) {%0A        !(function (t, e) {%0A          if ("function" != typeof e && null !== e)%0A            throw new TypeError(%0A              "Super expression must either be null or a function"%0A            );%0A          (t.prototype = Object.create(e && e.prototype, {%0A            constructor: { value: t, writable: !0, configurable: !0 },%0A          })),%0A            e && c(t, e);%0A        })(l, t);%0A        var e,%0A          n,%0A          r,%0A          u = a(l);%0A        function l() {%0A          return o(this, l), u.apply(this, arguments);%0A        }%0A        return (%0A          (e = l),%0A          (n = [%0A            {%0A              key: "on",%0A              value: function (t, e) {%0A                return s(f(l.prototype), "on", this).call(this, t, e), this;%0A              },%0A            },%0A            {%0A              key: "once",%0A              value: function (t, e) {%0A                return s(f(l.prototype), "once", this).call(this, t, e), this;%0A              },%0A            },%0A            {%0A              key: "emit",%0A              value: function (t) {%0A                for (%0A                  var e,%0A                    n = arguments.length,%0A                    r = new Array(n > 1 ? n - 1 : 0),%0A                    o = 1;%0A                  o < n;%0A                  o++%0A                )%0A                  r[o - 1] = arguments[o];%0A                return (%0A                  (e = s(f(l.prototype), "emit", this)).call.apply(%0A                    e,%0A                    [this, t].concat(r)%0A                  ),%0A                  this%0A                );%0A              },%0A            },%0A            {%0A              key: "emitReserved",%0A              value: function (t) {%0A                for (%0A                  var e,%0A                    n = arguments.length,%0A                    r = new Array(n > 1 ? n - 1 : 0),%0A                    o = 1;%0A                  o < n;%0A                  o++%0A                )%0A                  r[o - 1] = arguments[o];%0A                return (%0A                  (e = s(f(l.prototype), "emit", this)).call.apply(%0A                    e,%0A                    [this, t].concat(r)%0A                  ),%0A                  this%0A                );%0A              },%0A            },%0A            {%0A              key: "listeners",%0A              value: function (t) {%0A                return s(f(l.prototype), "listeners", this).call(this, t);%0A              },%0A            },%0A          ]) && i(e.prototype, n),%0A          r && i(e, r),%0A          l%0A        );%0A      })(n(2));%0A      e.StrictEventEmitter = l;%0A    },%0A    function (t, e, n) {%0A      function r(t) {%0A        return (r =%0A          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator%0A            ? function (t) {%0A                return typeof t;%0A              }%0A            : function (t) {%0A                return t &&%0A                  "function" == typeof Symbol &&%0A                  t.constructor === Symbol &&%0A                  t !== Symbol.prototype%0A                  ? "symbol"%0A                  : typeof t;%0A              })(t);%0A      }%0A      Object.defineProperty(e, "__esModule", { value: !0 }),%0A        (e.io = e.Socket = e.Manager = e.protocol = void 0);%0A      var o = n(19),%0A        i = n(8);%0A      t.exports = e = c;%0A      var s = (e.managers = {});%0A      function c(t, e) {%0A        "object" === r(t) && ((e = t), (t = void 0)), (e = e || {});%0A        var n,%0A          c = (0, o.url)(t, e.path || "/socket.io"),%0A          a = c.source,%0A          u = c.id,%0A          f = c.path,%0A          l = s[u] && f in s[u].nsps;%0A        return (%0A          e.forceNew || e["force new connection"] || !1 === e.multiplex || l%0A            ? (n = new i.Manager(a, e))%0A            : (s[u] || (s[u] = new i.Manager(a, e)), (n = s[u])),%0A          c.query && !e.query && (e.query = c.queryKey),%0A          n.socket(c.path, e)%0A        );%0A      }%0A      e.io = c;%0A      var a = n(6);%0A      Object.defineProperty(e, "protocol", {%0A        enumerable: !0,%0A        get: function () {%0A          return a.protocol;%0A        },%0A      }),%0A        (e.connect = c);%0A      var u = n(8);%0A      Object.defineProperty(e, "Manager", {%0A        enumerable: !0,%0A        get: function () {%0A          return u.Manager;%0A        },%0A      });%0A      var f = n(14);%0A      Object.defineProperty(e, "Socket", {%0A        enumerable: !0,%0A        get: function () {%0A          return f.Socket;%0A        },%0A      }),%0A        (e.default = c);%0A    },%0A    function (t, e, n) {%0A      Object.defineProperty(e, "__esModule", { value: !0 }), (e.url = void 0);%0A      var r = n(7);%0A      e.url = function (t) {%0A        var e =%0A            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",%0A          n = arguments.length > 2 ? arguments[2] : void 0,%0A          o = t;%0A        (n = n || ("undefined" != typeof location && location)),%0A          null == t && (t = n.protocol + "//" + n.host),%0A          "string" == typeof t &&%0A            ("/" === t.charAt(0) &&%0A              (t = "/" === t.charAt(1) ? n.protocol + t : n.host + t),%0A            /^(https?|wss?):\\/\\//.test(t) ||%0A              (t = void 0 !== n ? n.protocol + "//" + t : "https://" + t),%0A            (o = r(t))),%0A          o.port ||%0A            (/^(http|ws)$/.test(o.protocol)%0A              ? (o.port = "80")%0A              : /^(http|ws)s$/.test(o.protocol) && (o.port = "443")),%0A          (o.path = o.path || "/");%0A        var i = -1 !== o.host.indexOf(":"),%0A          s = i ? "[" + o.host + "]" : o.host;%0A        return (%0A          (o.id = o.protocol + "://" + s + ":" + o.port + e),%0A          (o.href =%0A            o.protocol +%0A            "://" +%0A            s +%0A            (n && n.port === o.port ? "" : ":" + o.port)),%0A          o%0A        );%0A      };%0A    },%0A    function (t, e, n) {%0A      var r = n(21);%0A      (t.exports = function (t, e) {%0A        return new r(t, e);%0A      }),%0A        (t.exports.Socket = r),%0A        (t.exports.protocol = r.protocol),%0A        (t.exports.Transport = n(4)),%0A        (t.exports.transports = n(9)),%0A        (t.exports.parser = n(1));%0A    },%0A    function (t, e, n) {%0A      function r() {%0A        return (r =%0A          Object.assign ||%0A          function (t) {%0A            for (var e = 1; e < arguments.length; e++) {%0A              var n = arguments[e];%0A              for (var r in n)%0A                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);%0A            }%0A            return t;%0A          }).apply(this, arguments);%0A      }%0A      function o(t) {%0A        return (o =%0A          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator%0A            ? function (t) {%0A                return typeof t;%0A              }%0A            : function (t) {%0A                return t &&%0A                  "function" == typeof Symbol &&%0A                  t.constructor === Symbol &&%0A                  t !== Symbol.prototype%0A                  ? "symbol"%0A                  : typeof t;%0A              })(t);%0A      }%0A      function i(t, e) {%0A        if (!(t instanceof e))%0A          throw new TypeError("Cannot call a class as a function");%0A      }%0A      function s(t, e) {%0A        for (var n = 0; n < e.length; n++) {%0A          var r = e[n];%0A          (r.enumerable = r.enumerable || !1),%0A            (r.configurable = !0),%0A            "value" in r && (r.writable = !0),%0A            Object.defineProperty(t, r.key, r);%0A        }%0A      }%0A      function c(t, e) {%0A        return (c =%0A          Object.setPrototypeOf ||%0A          function (t, e) {%0A            return (t.__proto__ = e), t;%0A          })(t, e);%0A      }%0A      function a(t) {%0A        var e = (function () {%0A          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;%0A          if (Reflect.construct.sham) return !1;%0A          if ("function" == typeof Proxy) return !0;%0A          try {%0A            return (%0A              Boolean.prototype.valueOf.call(%0A                Reflect.construct(Boolean, [], function () {})%0A              ),%0A              !0%0A            );%0A          } catch (t) {%0A            return !1;%0A          }%0A        })();%0A        return function () {%0A          var n,%0A            r = l(t);%0A          if (e) {%0A            var o = l(this).constructor;%0A            n = Reflect.construct(r, arguments, o);%0A          } else n = r.apply(this, arguments);%0A          return u(this, n);%0A        };%0A      }%0A      function u(t, e) {%0A        if (e && ("object" === o(e) || "function" == typeof e)) return e;%0A        if (void 0 !== e)%0A          throw new TypeError(%0A            "Derived constructors may only return object or undefined"%0A          );%0A        return f(t);%0A      }%0A      function f(t) {%0A        if (void 0 === t)%0A          throw new ReferenceError(%0A            "this hasn't been initialised - super() hasn't been called"%0A          );%0A        return t;%0A      }%0A      function l(t) {%0A        return (l = Object.setPrototypeOf%0A          ? Object.getPrototypeOf%0A          : function (t) {%0A              return t.__proto__ || Object.getPrototypeOf(t);%0A            })(t);%0A      }%0A      var p = n(9),%0A        h = n(2),%0A        y = n(1),%0A        d = n(7),%0A        v = n(5),%0A        b = n(3).installTimerFunctions,%0A        m = (function (t) {%0A          !(function (t, e) {%0A            if ("function" != typeof e && null !== e)%0A              throw new TypeError(%0A                "Super expression must either be null or a function"%0A              );%0A            (t.prototype = Object.create(e && e.prototype, {%0A              constructor: { value: t, writable: !0, configurable: !0 },%0A            })),%0A              e && c(t, e);%0A          })(h, t);%0A          var e,%0A            n,%0A            u,%0A            l = a(h);%0A          function h(t) {%0A            var e,%0A              n =%0A                arguments.length > 1 && void 0 !== arguments[1]%0A                  ? arguments[1]%0A                  : {};%0A            return (%0A              i(this, h),%0A              (e = l.call(this)),%0A              t && "object" === o(t) && ((n = t), (t = null)),%0A              t%0A                ? ((t = d(t)),%0A                  (n.hostname = t.host),%0A                  (n.secure = "https" === t.protocol || "wss" === t.protocol),%0A                  (n.port = t.port),%0A                  t.query && (n.query = t.query))%0A                : n.host && (n.hostname = d(n.host).host),%0A              b(f(e), n),%0A              (e.secure =%0A                null != n.secure%0A                  ? n.secure%0A                  : "undefined" != typeof location &&%0A                    "https:" === location.protocol),%0A              n.hostname && !n.port && (n.port = e.secure ? "443" : "80"),%0A              (e.hostname =%0A                n.hostname ||%0A                ("undefined" != typeof location%0A                  ? location.hostname%0A                  : "localhost")),%0A              (e.port =%0A                n.port ||%0A                ("undefined" != typeof location && location.port%0A                  ? location.port%0A                  : e.secure%0A                  ? 443%0A                  : 80)),%0A              (e.transports = n.transports || ["polling", "websocket"]),%0A              (e.readyState = ""),%0A              (e.writeBuffer = []),%0A              (e.prevBufferLen = 0),%0A              (e.opts = r(%0A                {%0A                  path: "/engine.io",%0A                  agent: !1,%0A                  withCredentials: !1,%0A                  upgrade: !0,%0A                  jsonp: !0,%0A                  timestampParam: "t",%0A                  rememberUpgrade: !1,%0A                  rejectUnauthorized: !0,%0A                  perMessageDeflate: { threshold: 1024 },%0A                  transportOptions: {},%0A                  closeOnBeforeunload: !0,%0A                },%0A                n%0A              )),%0A              (e.opts.path = e.opts.path.replace(/\\/$/, "") + "/"),%0A              "string" == typeof e.opts.query &&%0A                (e.opts.query = v.decode(e.opts.query)),%0A              (e.id = null),%0A              (e.upgrades = null),%0A              (e.pingInterval = null),%0A              (e.pingTimeout = null),%0A              (e.pingTimeoutTimer = null),%0A              "function" == typeof addEventListener &&%0A                (e.opts.closeOnBeforeunload &&%0A                  addEventListener(%0A                    "beforeunload",%0A                    function () {%0A                      e.transport &&%0A                        (e.transport.removeAllListeners(), e.transport.close());%0A                    },%0A                    !1%0A                  ),%0A                "localhost" !== e.hostname &&%0A                  ((e.offlineEventListener = function () {%0A                    e.onClose("transport close");%0A                  }),%0A                  addEventListener("offline", e.offlineEventListener, !1))),%0A              e.open(),%0A              e%0A            );%0A          }%0A          return (%0A            (e = h),%0A            (n = [%0A              {%0A                key: "createTransport",%0A                value: function (t) {%0A                  var e = (function (t) {%0A                    var e = {};%0A                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);%0A                    return e;%0A                  })(this.opts.query);%0A                  (e.EIO = y.protocol),%0A                    (e.transport = t),%0A                    this.id && (e.sid = this.id);%0A                  var n = r({}, this.opts.transportOptions[t], this.opts, {%0A                    query: e,%0A                    socket: this,%0A                    hostname: this.hostname,%0A                    secure: this.secure,%0A                    port: this.port,%0A                  });%0A                  return new p[t](n);%0A                },%0A              },%0A              {%0A                key: "open",%0A                value: function () {%0A                  var t,%0A                    e = this;%0A                  if (%0A                    this.opts.rememberUpgrade &&%0A                    h.priorWebsocketSuccess &&%0A                    -1 !== this.transports.indexOf("websocket")%0A                  )%0A                    t = "websocket";%0A                  else {%0A                    if (0 === this.transports.length)%0A                      return void this.setTimeoutFn(function () {%0A                        e.emit("error", "No transports available");%0A                      }, 0);%0A                    t = this.transports[0];%0A                  }%0A                  this.readyState = "opening";%0A                  try {%0A                    t = this.createTransport(t);%0A                  } catch (t) {%0A                    return this.transports.shift(), void this.open();%0A                  }%0A                  t.open(), this.setTransport(t);%0A                },%0A              },%0A              {%0A                key: "setTransport",%0A                value: function (t) {%0A                  var e = this;%0A                  this.transport && this.transport.removeAllListeners(),%0A                    (this.transport = t),%0A                    t%0A                      .on("drain", this.onDrain.bind(this))%0A                      .on("packet", this.onPacket.bind(this))%0A                      .on("error", this.onError.bind(this))%0A                      .on("close", function () {%0A                        e.onClose("transport close");%0A                      });%0A                },%0A              },%0A              {%0A                key: "probe",%0A                value: function (t) {%0A                  var e = this,%0A                    n = this.createTransport(t, { probe: 1 }),%0A                    r = !1;%0A                  h.priorWebsocketSuccess = !1;%0A                  var o = function () {%0A                    r ||%0A                      (n.send([{ type: "ping", data: "probe" }]),%0A                      n.once("packet", function (t) {%0A                        if (!r)%0A                          if ("pong" === t.type && "probe" === t.data) {%0A                            if (%0A                              ((e.upgrading = !0), e.emit("upgrading", n), !n)%0A                            )%0A                              return;%0A                            (h.priorWebsocketSuccess = "websocket" === n.name),%0A                              e.transport.pause(function () {%0A                                r ||%0A                                  ("closed" !== e.readyState &&%0A                                    (f(),%0A                                    e.setTransport(n),%0A                                    n.send([{ type: "upgrade" }]),%0A                                    e.emit("upgrade", n),%0A                                    (n = null),%0A                                    (e.upgrading = !1),%0A                                    e.flush()));%0A                              });%0A                          } else {%0A                            var o = new Error("probe error");%0A                            (o.transport = n.name), e.emit("upgradeError", o);%0A                          }%0A                      }));%0A                  };%0A                  function i() {%0A                    r || ((r = !0), f(), n.close(), (n = null));%0A                  }%0A                  var s = function (t) {%0A                    var r = new Error("probe error: " + t);%0A                    (r.transport = n.name), i(), e.emit("upgradeError", r);%0A                  };%0A                  function c() {%0A                    s("transport closed");%0A                  }%0A                  function a() {%0A                    s("socket closed");%0A                  }%0A                  function u(t) {%0A                    n && t.name !== n.name && i();%0A                  }%0A                  var f = function () {%0A                    n.removeListener("open", o),%0A                      n.removeListener("error", s),%0A                      n.removeListener("close", c),%0A                      e.removeListener("close", a),%0A                      e.removeListener("upgrading", u);%0A                  };%0A                  n.once("open", o),%0A                    n.once("error", s),%0A                    n.once("close", c),%0A                    this.once("close", a),%0A                    this.once("upgrading", u),%0A                    n.open();%0A                },%0A              },%0A              {%0A                key: "onOpen",%0A                value: function () {%0A                  if (%0A                    ((this.readyState = "open"),%0A                    (h.priorWebsocketSuccess =%0A                      "websocket" === this.transport.name),%0A                    this.emit("open"),%0A                    this.flush(),%0A                    "open" === this.readyState &&%0A                      this.opts.upgrade &&%0A                      this.transport.pause)%0A                  )%0A                    for (var t = 0, e = this.upgrades.length; t < e; t++)%0A                      this.probe(this.upgrades[t]);%0A                },%0A              },%0A              {%0A                key: "onPacket",%0A                value: function (t) {%0A                  if (%0A                    "opening" === this.readyState ||%0A                    "open" === this.readyState ||%0A                    "closing" === this.readyState%0A                  )%0A                    switch (%0A                      (this.emit("packet", t), this.emit("heartbeat"), t.type)%0A                    ) {%0A                      case "open":%0A                        this.onHandshake(JSON.parse(t.data));%0A                        break;%0A                      case "ping":%0A                        this.resetPingTimeout(),%0A                          this.sendPacket("pong"),%0A                          this.emit("ping"),%0A                          this.emit("pong");%0A                        break;%0A                      case "error":%0A                        var e = new Error("server error");%0A                        (e.code = t.data), this.onError(e);%0A                        break;%0A                      case "message":%0A                        this.emit("data", t.data), this.emit("message", t.data);%0A                    }%0A                },%0A              },%0A              {%0A                key: "onHandshake",%0A                value: function (t) {%0A                  this.emit("handshake", t),%0A                    (this.id = t.sid),%0A                    (this.transport.query.sid = t.sid),%0A                    (this.upgrades = this.filterUpgrades(t.upgrades)),%0A                    (this.pingInterval = t.pingInterval),%0A                    (this.pingTimeout = t.pingTimeout),%0A                    this.onOpen(),%0A                    "closed" !== this.readyState && this.resetPingTimeout();%0A                },%0A              },%0A              {%0A                key: "resetPingTimeout",%0A                value: function () {%0A                  var t = this;%0A                  this.clearTimeoutFn(this.pingTimeoutTimer),%0A                    (this.pingTimeoutTimer = this.setTimeoutFn(function () {%0A                      t.onClose("ping timeout");%0A                    }, this.pingInterval + this.pingTimeout)),%0A                    this.opts.autoUnref && this.pingTimeoutTimer.unref();%0A                },%0A              },%0A              {%0A                key: "onDrain",%0A                value: function () {%0A                  this.writeBuffer.splice(0, this.prevBufferLen),%0A                    (this.prevBufferLen = 0),%0A                    0 === this.writeBuffer.length%0A                      ? this.emit("drain")%0A                      : this.flush();%0A                },%0A              },%0A              {%0A                key: "flush",%0A                value: function () {%0A                  "closed" !== this.readyState &&%0A                    this.transport.writable &&%0A                    !this.upgrading &&%0A                    this.writeBuffer.length &&%0A                    (this.transport.send(this.writeBuffer),%0A                    (this.prevBufferLen = this.writeBuffer.length),%0A                    this.emit("flush"));%0A                },%0A              },%0A              {%0A                key: "write",%0A                value: function (t, e, n) {%0A                  return this.sendPacket("message", t, e, n), this;%0A                },%0A              },%0A              {%0A                key: "send",%0A                value: function (t, e, n) {%0A                  return this.sendPacket("message", t, e, n), this;%0A                },%0A              },%0A              {%0A                key: "sendPacket",%0A                value: function (t, e, n, r) {%0A                  if (%0A                    ("function" == typeof e && ((r = e), (e = void 0)),%0A                    "function" == typeof n && ((r = n), (n = null)),%0A                    "closing" !== this.readyState &&%0A                      "closed" !== this.readyState)%0A                  ) {%0A                    (n = n || {}).compress = !1 !== n.compress;%0A                    var o = { type: t, data: e, options: n };%0A                    this.emit("packetCreate", o),%0A                      this.writeBuffer.push(o),%0A                      r && this.once("flush", r),%0A                      this.flush();%0A                  }%0A                },%0A              },%0A              {%0A                key: "close",%0A                value: function () {%0A                  var t = this,%0A                    e = function () {%0A                      t.onClose("forced close"), t.transport.close();%0A                    },%0A                    n = function n() {%0A                      t.removeListener("upgrade", n),%0A                        t.removeListener("upgradeError", n),%0A                        e();%0A                    },%0A                    r = function () {%0A                      t.once("upgrade", n), t.once("upgradeError", n);%0A                    };%0A                  return (%0A                    ("opening" !== this.readyState &&%0A                      "open" !== this.readyState) ||%0A                      ((this.readyState = "closing"),%0A                      this.writeBuffer.length%0A                        ? this.once("drain", function () {%0A                            t.upgrading ? r() : e();%0A                          })%0A                        : this.upgrading%0A                        ? r()%0A                        : e()),%0A                    this%0A                  );%0A                },%0A              },%0A              {%0A                key: "onError",%0A                value: function (t) {%0A                  (h.priorWebsocketSuccess = !1),%0A                    this.emit("error", t),%0A                    this.onClose("transport error", t);%0A                },%0A              },%0A              {%0A                key: "onClose",%0A                value: function (t, e) {%0A                  ("opening" !== this.readyState &&%0A                    "open" !== this.readyState &&%0A                    "closing" !== this.readyState) ||%0A                    (this.clearTimeoutFn(this.pingIntervalTimer),%0A                    this.clearTimeoutFn(this.pingTimeoutTimer),%0A                    this.transport.removeAllListeners("close"),%0A                    this.transport.close(),%0A                    this.transport.removeAllListeners(),%0A                    "function" == typeof removeEventListener &&%0A                      removeEventListener(%0A                        "offline",%0A                        this.offlineEventListener,%0A                        !1%0A                      ),%0A                    (this.readyState = "closed"),%0A                    (this.id = null),%0A                    this.emit("close", t, e),%0A                    (this.writeBuffer = []),%0A                    (this.prevBufferLen = 0));%0A                },%0A              },%0A              {%0A                key: "filterUpgrades",%0A                value: function (t) {%0A                  for (var e = [], n = 0, r = t.length; n < r; n++)%0A                    ~this.transports.indexOf(t[n]) && e.push(t[n]);%0A                  return e;%0A                },%0A              },%0A            ]) && s(e.prototype, n),%0A            u && s(e, u),%0A            h%0A          );%0A        })(h);%0A      (m.priorWebsocketSuccess = !1),%0A        (m.protocol = y.protocol),%0A        (t.exports = m);%0A    },%0A    function (t, e) {%0A      try {%0A        t.exports =%0A          "undefined" != typeof XMLHttpRequest &&%0A          "withCredentials" in new XMLHttpRequest();%0A      } catch (e) {%0A        t.exports = !1;%0A      }%0A    },%0A    function (t, e, n) {%0A      function r(t) {%0A        return (r =%0A          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator%0A            ? function (t) {%0A                return typeof t;%0A              }%0A            : function (t) {%0A                return t &&%0A                  "function" == typeof Symbol &&%0A                  t.constructor === Symbol &&%0A                  t !== Symbol.prototype%0A                  ? "symbol"%0A                  : typeof t;%0A              })(t);%0A      }%0A      function o() {%0A        return (o =%0A          Object.assign ||%0A          function (t) {%0A            for (var e = 1; e < arguments.length; e++) {%0A              var n = arguments[e];%0A              for (var r in n)%0A                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);%0A            }%0A            return t;%0A          }).apply(this, arguments);%0A      }%0A      function i(t, e) {%0A        if (!(t instanceof e))%0A          throw new TypeError("Cannot call a class as a function");%0A      }%0A      function s(t, e) {%0A        for (var n = 0; n < e.length; n++) {%0A          var r = e[n];%0A          (r.enumerable = r.enumerable || !1),%0A            (r.configurable = !0),%0A            "value" in r && (r.writable = !0),%0A            Object.defineProperty(t, r.key, r);%0A        }%0A      }%0A      function c(t, e, n) {%0A        return e && s(t.prototype, e), n && s(t, n), t;%0A      }%0A      function a(t, e) {%0A        if ("function" != typeof e && null !== e)%0A          throw new TypeError(%0A            "Super expression must either be null or a function"%0A          );%0A        (t.prototype = Object.create(e && e.prototype, {%0A          constructor: { value: t, writable: !0, configurable: !0 },%0A        })),%0A          e && u(t, e);%0A      }%0A      function u(t, e) {%0A        return (u =%0A          Object.setPrototypeOf ||%0A          function (t, e) {%0A            return (t.__proto__ = e), t;%0A          })(t, e);%0A      }%0A      function f(t) {%0A        var e = (function () {%0A          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;%0A          if (Reflect.construct.sham) return !1;%0A          if ("function" == typeof Proxy) return !0;%0A          try {%0A            return (%0A              Boolean.prototype.valueOf.call(%0A                Reflect.construct(Boolean, [], function () {})%0A              ),%0A              !0%0A            );%0A          } catch (t) {%0A            return !1;%0A          }%0A        })();%0A        return function () {%0A          var n,%0A            r = h(t);%0A          if (e) {%0A            var o = h(this).constructor;%0A            n = Reflect.construct(r, arguments, o);%0A          } else n = r.apply(this, arguments);%0A          return l(this, n);%0A        };%0A      }%0A      function l(t, e) {%0A        if (e && ("object" === r(e) || "function" == typeof e)) return e;%0A        if (void 0 !== e)%0A          throw new TypeError(%0A            "Derived constructors may only return object or undefined"%0A          );%0A        return p(t);%0A      }%0A      function p(t) {%0A        if (void 0 === t)%0A          throw new ReferenceError(%0A            "this hasn't been initialised - super() hasn't been called"%0A          );%0A        return t;%0A      }%0A      function h(t) {%0A        return (h = Object.setPrototypeOf%0A          ? Object.getPrototypeOf%0A          : function (t) {%0A              return t.__proto__ || Object.getPrototypeOf(t);%0A            })(t);%0A      }%0A      var y = n(10),%0A        d = n(11),%0A        v = n(2),%0A        b = n(3),%0A        m = b.pick,%0A        g = b.installTimerFunctions,%0A        k = n(0);%0A      function w() {}%0A      var O = null != new y({ xdomain: !1 }).responseType,%0A        _ = (function (t) {%0A          a(n, t);%0A          var e = f(n);%0A          function n(t) {%0A            var r;%0A            if (%0A              (i(this, n),%0A              (r = e.call(this, t)),%0A              "undefined" != typeof location)%0A            ) {%0A              var o = "https:" === location.protocol,%0A                s = location.port;%0A              s || (s = o ? 443 : 80),%0A                (r.xd =%0A                  ("undefined" != typeof location &&%0A                    t.hostname !== location.hostname) ||%0A                  s !== t.port),%0A                (r.xs = t.secure !== o);%0A            }%0A            var c = t && t.forceBase64;%0A            return (r.supportsBinary = O && !c), r;%0A          }%0A          return (%0A            c(n, [%0A              {%0A                key: "request",%0A                value: function () {%0A                  var t =%0A                    arguments.length > 0 && void 0 !== arguments[0]%0A                      ? arguments[0]%0A                      : {};%0A                  return (%0A                    o(t, { xd: this.xd, xs: this.xs }, this.opts),%0A                    new E(this.uri(), t)%0A                  );%0A                },%0A              },%0A              {%0A                key: "doWrite",%0A                value: function (t, e) {%0A                  var n = this,%0A                    r = this.request({ method: "POST", data: t });%0A                  r.on("success", e),%0A                    r.on("error", function (t) {%0A                      n.onError("xhr post error", t);%0A                    });%0A                },%0A              },%0A              {%0A                key: "doPoll",%0A                value: function () {%0A                  var t = this,%0A                    e = this.request();%0A                  e.on("data", this.onData.bind(this)),%0A                    e.on("error", function (e) {%0A                      t.onError("xhr poll error", e);%0A                    }),%0A                    (this.pollXhr = e);%0A                },%0A              },%0A            ]),%0A            n%0A          );%0A        })(d),%0A        E = (function (t) {%0A          a(n, t);%0A          var e = f(n);%0A          function n(t, r) {%0A            var o;%0A            return (%0A              i(this, n),%0A              (o = e.call(this)),%0A              g(p(o), r),%0A              (o.opts = r),%0A              (o.method = r.method || "GET"),%0A              (o.uri = t),%0A              (o.async = !1 !== r.async),%0A              (o.data = void 0 !== r.data ? r.data : null),%0A              o.create(),%0A              o%0A            );%0A          }%0A          return (%0A            c(n, [%0A              {%0A                key: "create",%0A                value: function () {%0A                  var t = this,%0A                    e = m(%0A                      this.opts,%0A                      "agent",%0A                      "enablesXDR",%0A                      "pfx",%0A                      "key",%0A                      "passphrase",%0A                      "cert",%0A                      "ca",%0A                      "ciphers",%0A                      "rejectUnauthorized",%0A                      "autoUnref"%0A                    );%0A                  (e.xdomain = !!this.opts.xd), (e.xscheme = !!this.opts.xs);%0A                  var r = (this.xhr = new y(e));%0A                  try {%0A                    r.open(this.method, this.uri, this.async);%0A                    try {%0A                      if (this.opts.extraHeaders)%0A                        for (var o in (r.setDisableHeaderCheck &&%0A                          r.setDisableHeaderCheck(!0),%0A                        this.opts.extraHeaders))%0A                          this.opts.extraHeaders.hasOwnProperty(o) &&%0A                            r.setRequestHeader(o, this.opts.extraHeaders[o]);%0A                    } catch (t) {}%0A                    if ("POST" === this.method)%0A                      try {%0A                        r.setRequestHeader(%0A                          "Content-type",%0A                          "text/plain;charset=UTF-8"%0A                        );%0A                      } catch (t) {}%0A                    try {%0A                      r.setRequestHeader("Accept", "*/*");%0A                    } catch (t) {}%0A                    "withCredentials" in r &&%0A                      (r.withCredentials = this.opts.withCredentials),%0A                      this.opts.requestTimeout &&%0A                        (r.timeout = this.opts.requestTimeout),%0A                      this.hasXDR()%0A                        ? ((r.onload = function () {%0A                            t.onLoad();%0A                          }),%0A                          (r.onerror = function () {%0A                            t.onError(r.responseText);%0A                          }))%0A                        : (r.onreadystatechange = function () {%0A                            4 === r.readyState &&%0A                              (200 === r.status || 1223 === r.status%0A                                ? t.onLoad()%0A                                : t.setTimeoutFn(function () {%0A                                    t.onError(%0A                                      "number" == typeof r.status ? r.status : 0%0A                                    );%0A                                  }, 0));%0A                          }),%0A                      r.send(this.data);%0A                  } catch (e) {%0A                    return void this.setTimeoutFn(function () {%0A                      t.onError(e);%0A                    }, 0);%0A                  }%0A                  "undefined" != typeof document &&%0A                    ((this.index = n.requestsCount++),%0A                    (n.requests[this.index] = this));%0A                },%0A              },%0A              {%0A                key: "onSuccess",%0A                value: function () {%0A                  this.emit("success"), this.cleanup();%0A                },%0A              },%0A              {%0A                key: "onData",%0A                value: function (t) {%0A                  this.emit("data", t), this.onSuccess();%0A                },%0A              },%0A              {%0A                key: "onError",%0A                value: function (t) {%0A                  this.emit("error", t), this.cleanup(!0);%0A                },%0A              },%0A              {%0A                key: "cleanup",%0A                value: function (t) {%0A                  if (void 0 !== this.xhr && null !== this.xhr) {%0A                    if (%0A                      (this.hasXDR()%0A                        ? (this.xhr.onload = this.xhr.onerror = w)%0A                        : (this.xhr.onreadystatechange = w),%0A                      t)%0A                    )%0A                      try {%0A                        this.xhr.abort();%0A                      } catch (t) {}%0A                    "undefined" != typeof document &&%0A                      delete n.requests[this.index],%0A                      (this.xhr = null);%0A                  }%0A                },%0A              },%0A              {%0A                key: "onLoad",%0A                value: function () {%0A                  var t = this.xhr.responseText;%0A                  null !== t && this.onData(t);%0A                },%0A              },%0A              {%0A                key: "hasXDR",%0A                value: function () {%0A                  return (%0A                    "undefined" != typeof XDomainRequest &&%0A                    !this.xs &&%0A                    this.enablesXDR%0A                  );%0A                },%0A              },%0A              {%0A                key: "abort",%0A                value: function () {%0A                  this.cleanup();%0A                },%0A              },%0A            ]),%0A            n%0A          );%0A        })(v);%0A      if (%0A        ((E.requestsCount = 0),%0A        (E.requests = {}),%0A        "undefined" != typeof document)%0A      )%0A        if ("function" == typeof attachEvent) attachEvent("onunload", S);%0A        else if ("function" == typeof addEventListener) {%0A          addEventListener("onpagehide" in k ? "pagehide" : "unload", S, !1);%0A        }%0A      function S() {%0A        for (var t in E.requests)%0A          E.requests.hasOwnProperty(t) && E.requests[t].abort();%0A      }%0A      (t.exports = _), (t.exports.Request = E);%0A    },%0A    function (t, e, n) {%0A      var r = n(12).PACKET_TYPES,%0A        o =%0A          "function" == typeof Blob ||%0A          ("undefined" != typeof Blob &&%0A            "[object BlobConstructor]" ===%0A              Object.prototype.toString.call(Blob)),%0A        i = "function" == typeof ArrayBuffer,%0A        s = function (t, e) {%0A          var n = new FileReader();%0A          return (%0A            (n.onload = function () {%0A              var t = n.result.split(",")[1];%0A              e("b" + t);%0A            }),%0A            n.readAsDataURL(t)%0A          );%0A        };%0A      t.exports = function (t, e, n) {%0A        var c,%0A          a = t.type,%0A          u = t.data;%0A        return o && u instanceof Blob%0A          ? e%0A            ? n(u)%0A            : s(u, n)%0A          : i &&%0A            (u instanceof ArrayBuffer ||%0A              ((c = u),%0A              "function" == typeof ArrayBuffer.isView%0A                ? ArrayBuffer.isView(c)%0A                : c && c.buffer instanceof ArrayBuffer))%0A          ? e%0A            ? n(u instanceof ArrayBuffer ? u : u.buffer)%0A            : s(new Blob([u]), n)%0A          : n(r[a] + (u || ""));%0A      };%0A    },%0A    function (t, e, n) {%0A      var r,%0A        o = n(12),%0A        i = o.PACKET_TYPES_REVERSE,%0A        s = o.ERROR_PACKET;%0A      "function" == typeof ArrayBuffer && (r = n(26));%0A      var c = function (t, e) {%0A          if (r) {%0A            var n = r.decode(t);%0A            return a(n, e);%0A          }%0A          return { base64: !0, data: t };%0A        },%0A        a = function (t, e) {%0A          switch (e) {%0A            case "blob":%0A              return t instanceof ArrayBuffer ? new Blob([t]) : t;%0A            case "arraybuffer":%0A            default:%0A              return t;%0A          }%0A        };%0A      t.exports = function (t, e) {%0A        if ("string" != typeof t) return { type: "message", data: a(t, e) };%0A        var n = t.charAt(0);%0A        return "b" === n%0A          ? { type: "message", data: c(t.substring(1), e) }%0A          : i[n]%0A          ? t.length > 1%0A            ? { type: i[n], data: t.substring(1) }%0A            : { type: i[n] }%0A          : s;%0A      };%0A    },%0A    function (t, e) {%0A      !(function (t) {%0A        (e.encode = function (e) {%0A          var n,%0A            r = new Uint8Array(e),%0A            o = r.length,%0A            i = "";%0A          for (n = 0; n < o; n += 3)%0A            (i += t[r[n] >> 2]),%0A              (i += t[((3 & r[n]) << 4) | (r[n + 1] >> 4)]),%0A              (i += t[((15 & r[n + 1]) << 2) | (r[n + 2] >> 6)]),%0A              (i += t[63 & r[n + 2]]);%0A          return (%0A            o % 3 == 2%0A              ? (i = i.substring(0, i.length - 1) + "=")%0A              : o % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="),%0A            i%0A          );%0A        }),%0A          (e.decode = function (e) {%0A            var n,%0A              r,%0A              o,%0A              i,%0A              s,%0A              c = 0.75 * e.length,%0A              a = e.length,%0A              u = 0;%0A            "=" === e[e.length - 1] && (c--, "=" === e[e.length - 2] && c--);%0A            var f = new ArrayBuffer(c),%0A              l = new Uint8Array(f);%0A            for (n = 0; n < a; n += 4)%0A              (r = t.indexOf(e[n])),%0A                (o = t.indexOf(e[n + 1])),%0A                (i = t.indexOf(e[n + 2])),%0A                (s = t.indexOf(e[n + 3])),%0A                (l[u++] = (r << 2) | (o >> 4)),%0A                (l[u++] = ((15 & o) << 4) | (i >> 2)),%0A                (l[u++] = ((3 & i) << 6) | (63 & s));%0A            return f;%0A          });%0A      })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");%0A    },%0A    function (t, e, n) {%0A      function r(t) {%0A        return (r =%0A          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator%0A            ? function (t) {%0A                return typeof t;%0A              }%0A            : function (t) {%0A                return t &&%0A                  "function" == typeof Symbol &&%0A                  t.constructor === Symbol &&%0A                  t !== Symbol.prototype%0A                  ? "symbol"%0A                  : typeof t;%0A              })(t);%0A      }%0A      function o(t, e) {%0A        for (var n = 0; n < e.length; n++) {%0A          var r = e[n];%0A          (r.enumerable = r.enumerable || !1),%0A            (r.configurable = !0),%0A            "value" in r && (r.writable = !0),%0A            Object.defineProperty(t, r.key, r);%0A        }%0A      }%0A      function i(t, e, n) {%0A        return (i =%0A          "undefined" != typeof Reflect && Reflect.get%0A            ? Reflect.get%0A            : function (t, e, n) {%0A                var r = (function (t, e) {%0A                  for (%0A                    ;%0A                    !Object.prototype.hasOwnProperty.call(t, e) &&%0A                    null !== (t = f(t));%0A%0A                  );%0A                  return t;%0A                })(t, e);%0A                if (r) {%0A                  var o = Object.getOwnPropertyDescriptor(r, e);%0A                  return o.get ? o.get.call(n) : o.value;%0A                }%0A              })(t, e, n || t);%0A      }%0A      function s(t, e) {%0A        return (s =%0A          Object.setPrototypeOf ||%0A          function (t, e) {%0A            return (t.__proto__ = e), t;%0A          })(t, e);%0A      }%0A      function c(t) {%0A        var e = (function () {%0A          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;%0A          if (Reflect.construct.sham) return !1;%0A          if ("function" == typeof Proxy) return !0;%0A          try {%0A            return (%0A              Boolean.prototype.valueOf.call(%0A                Reflect.construct(Boolean, [], function () {})%0A              ),%0A              !0%0A            );%0A          } catch (t) {%0A            return !1;%0A          }%0A        })();%0A        return function () {%0A          var n,%0A            r = f(t);%0A          if (e) {%0A            var o = f(this).constructor;%0A            n = Reflect.construct(r, arguments, o);%0A          } else n = r.apply(this, arguments);%0A          return a(this, n);%0A        };%0A      }%0A      function a(t, e) {%0A        if (e && ("object" === r(e) || "function" == typeof e)) return e;%0A        if (void 0 !== e)%0A          throw new TypeError(%0A            "Derived constructors may only return object or undefined"%0A          );%0A        return u(t);%0A      }%0A      function u(t) {%0A        if (void 0 === t)%0A          throw new ReferenceError(%0A            "this hasn't been initialised - super() hasn't been called"%0A          );%0A        return t;%0A      }%0A      function f(t) {%0A        return (f = Object.setPrototypeOf%0A          ? Object.getPrototypeOf%0A          : function (t) {%0A              return t.__proto__ || Object.getPrototypeOf(t);%0A            })(t);%0A      }%0A      var l,%0A        p = n(11),%0A        h = n(0),%0A        y = /\\n/g,%0A        d = /\\\\n/g,%0A        v = (function (t) {%0A          !(function (t, e) {%0A            if ("function" != typeof e && null !== e)%0A              throw new TypeError(%0A                "Super expression must either be null or a function"%0A              );%0A            (t.prototype = Object.create(e && e.prototype, {%0A              constructor: { value: t, writable: !0, configurable: !0 },%0A            })),%0A              e && s(t, e);%0A          })(p, t);%0A          var e,%0A            n,%0A            r,%0A            a = c(p);%0A          function p(t) {%0A            var e;%0A            return (%0A              (function (t, e) {%0A                if (!(t instanceof e))%0A                  throw new TypeError("Cannot call a class as a function");%0A              })(this, p),%0A              ((e = a.call(this, t)).query = e.query || {}),%0A              l || (l = h.___eio = h.___eio || []),%0A              (e.index = l.length),%0A              l.push(e.onData.bind(u(e))),%0A              (e.query.j = e.index),%0A              e%0A            );%0A          }%0A          return (%0A            (e = p),%0A            (n = [%0A              {%0A                key: "supportsBinary",%0A                get: function () {%0A                  return !1;%0A                },%0A              },%0A              {%0A                key: "doClose",%0A                value: function () {%0A                  this.script &&%0A                    ((this.script.onerror = function () {}),%0A                    this.script.parentNode.removeChild(this.script),%0A                    (this.script = null)),%0A                    this.form &&%0A                      (this.form.parentNode.removeChild(this.form),%0A                      (this.form = null),%0A                      (this.iframe = null)),%0A                    i(f(p.prototype), "doClose", this).call(this);%0A                },%0A              },%0A              {%0A                key: "doPoll",%0A                value: function () {%0A                  var t = this,%0A                    e = document.createElement("script");%0A                  this.script &&%0A                    (this.script.parentNode.removeChild(this.script),%0A                    (this.script = null)),%0A                    (e.async = !0),%0A                    (e.src = this.uri()),%0A                    (e.onerror = function (e) {%0A                      t.onError("jsonp poll error", e);%0A                    });%0A                  var n = document.getElementsByTagName("script")[0];%0A                  n%0A                    ? n.parentNode.insertBefore(e, n)%0A                    : (document.head || document.body).appendChild(e),%0A                    (this.script = e),%0A                    "undefined" != typeof navigator &&%0A                      /gecko/i.test(navigator.userAgent) &&%0A                      this.setTimeoutFn(function () {%0A                        var t = document.createElement("iframe");%0A                        document.body.appendChild(t),%0A                          document.body.removeChild(t);%0A                      }, 100);%0A                },%0A              },%0A              {%0A                key: "doWrite",%0A                value: function (t, e) {%0A                  var n,%0A                    r = this;%0A                  if (!this.form) {%0A                    var o = document.createElement("form"),%0A                      i = document.createElement("textarea"),%0A                      s = (this.iframeId = "eio_iframe_" + this.index);%0A                    (o.className = "socketio"),%0A                      (o.style.position = "absolute"),%0A                      (o.style.top = "-1000px"),%0A                      (o.style.left = "-1000px"),%0A                      (o.target = s),%0A                      (o.method = "POST"),%0A                      o.setAttribute("accept-charset", "utf-8"),%0A                      (i.name = "d"),%0A                      o.appendChild(i),%0A                      document.body.appendChild(o),%0A                      (this.form = o),%0A                      (this.area = i);%0A                  }%0A                  function c() {%0A                    a(), e();%0A                  }%0A                  this.form.action = this.uri();%0A                  var a = function () {%0A                    if (r.iframe)%0A                      try {%0A                        r.form.removeChild(r.iframe);%0A                      } catch (t) {%0A                        r.onError("jsonp polling iframe removal error", t);%0A                      }%0A                    try {%0A                      var t =%0A                        '<iframe src="javascript:0" name="' + r.iframeId + '">';%0A                      n = document.createElement(t);%0A                    } catch (t) {%0A                      ((n = document.createElement("iframe")).name =%0A                        r.iframeId),%0A                        (n.src = "javascript:0");%0A                    }%0A                    (n.id = r.iframeId), r.form.appendChild(n), (r.iframe = n);%0A                  };%0A                  a(),%0A                    (t = t.replace(d, "\\\\\\n")),%0A                    (this.area.value = t.replace(y, "\\\\n"));%0A                  try {%0A                    this.form.submit();%0A                  } catch (t) {}%0A                  this.iframe.attachEvent%0A                    ? (this.iframe.onreadystatechange = function () {%0A                        "complete" === r.iframe.readyState && c();%0A                      })%0A                    : (this.iframe.onload = c);%0A                },%0A              },%0A            ]) && o(e.prototype, n),%0A            r && o(e, r),%0A            p%0A          );%0A        })(p);%0A      t.exports = v;%0A    },%0A    function (t, e, n) {%0A      function r(t) {%0A        return (r =%0A          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator%0A            ? function (t) {%0A                return typeof t;%0A              }%0A            : function (t) {%0A                return t &&%0A                  "function" == typeof Symbol &&%0A                  t.constructor === Symbol &&%0A                  t !== Symbol.prototype%0A                  ? "symbol"%0A                  : typeof t;%0A              })(t);%0A      }%0A      function o(t, e) {%0A        for (var n = 0; n < e.length; n++) {%0A          var r = e[n];%0A          (r.enumerable = r.enumerable || !1),%0A            (r.configurable = !0),%0A            "value" in r && (r.writable = !0),%0A            Object.defineProperty(t, r.key, r);%0A        }%0A      }%0A      function i(t, e) {%0A        return (i =%0A          Object.setPrototypeOf ||%0A          function (t, e) {%0A            return (t.__proto__ = e), t;%0A          })(t, e);%0A      }%0A      function s(t) {%0A        var e = (function () {%0A          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;%0A          if (Reflect.construct.sham) return !1;%0A          if ("function" == typeof Proxy) return !0;%0A          try {%0A            return (%0A              Boolean.prototype.valueOf.call(%0A                Reflect.construct(Boolean, [], function () {})%0A              ),%0A              !0%0A            );%0A          } catch (t) {%0A            return !1;%0A          }%0A        })();%0A        return function () {%0A          var n,%0A            r = a(t);%0A          if (e) {%0A            var o = a(this).constructor;%0A            n = Reflect.construct(r, arguments, o);%0A          } else n = r.apply(this, arguments);%0A          return c(this, n);%0A        };%0A      }%0A      function c(t, e) {%0A        if (e && ("object" === r(e) || "function" == typeof e)) return e;%0A        if (void 0 !== e)%0A          throw new TypeError(%0A            "Derived constructors may only return object or undefined"%0A          );%0A        return (function (t) {%0A          if (void 0 === t)%0A            throw new ReferenceError(%0A              "this hasn't been initialised - super() hasn't been called"%0A            );%0A          return t;%0A        })(t);%0A      }%0A      function a(t) {%0A        return (a = Object.setPrototypeOf%0A          ? Object.getPrototypeOf%0A          : function (t) {%0A              return t.__proto__ || Object.getPrototypeOf(t);%0A            })(t);%0A      }%0A      var u = n(4),%0A        f = n(1),%0A        l = n(5),%0A        p = n(13),%0A        h = n(3).pick,%0A        y = n(29),%0A        d = y.WebSocket,%0A        v = y.usingBrowserWebSocket,%0A        b = y.defaultBinaryType,%0A        m = y.nextTick,%0A        g =%0A          "undefined" != typeof navigator &&%0A          "string" == typeof navigator.product &&%0A          "reactnative" === navigator.product.toLowerCase(),%0A        k = (function (t) {%0A          !(function (t, e) {%0A            if ("function" != typeof e && null !== e)%0A              throw new TypeError(%0A                "Super expression must either be null or a function"%0A              );%0A            (t.prototype = Object.create(e && e.prototype, {%0A              constructor: { value: t, writable: !0, configurable: !0 },%0A            })),%0A              e && i(t, e);%0A          })(a, t);%0A          var e,%0A            n,%0A            r,%0A            c = s(a);%0A          function a(t) {%0A            var e;%0A            return (%0A              (function (t, e) {%0A                if (!(t instanceof e))%0A                  throw new TypeError("Cannot call a class as a function");%0A              })(this, a),%0A              ((e = c.call(this, t)).supportsBinary = !t.forceBase64),%0A              e%0A            );%0A          }%0A          return (%0A            (e = a),%0A            (n = [%0A              {%0A                key: "name",%0A                get: function () {%0A                  return "websocket";%0A                },%0A              },%0A              {%0A                key: "doOpen",%0A                value: function () {%0A                  if (this.check()) {%0A                    var t = this.uri(),%0A                      e = this.opts.protocols,%0A                      n = g%0A                        ? {}%0A                        : h(%0A                            this.opts,%0A                            "agent",%0A                            "perMessageDeflate",%0A                            "pfx",%0A                            "key",%0A                            "passphrase",%0A                            "cert",%0A                            "ca",%0A                            "ciphers",%0A                            "rejectUnauthorized",%0A                            "localAddress",%0A                            "protocolVersion",%0A                            "origin",%0A                            "maxPayload",%0A                            "family",%0A                            "checkServerIdentity"%0A                          );%0A                    this.opts.extraHeaders &&%0A                      (n.headers = this.opts.extraHeaders);%0A                    try {%0A                      this.ws =%0A                        v && !g ? (e ? new d(t, e) : new d(t)) : new d(t, e, n);%0A                    } catch (t) {%0A                      return this.emit("error", t);%0A                    }%0A                    (this.ws.binaryType = this.socket.binaryType || b),%0A                      this.addEventListeners();%0A                  }%0A                },%0A              },%0A              {%0A                key: "addEventListeners",%0A                value: function () {%0A                  var t = this;%0A                  (this.ws.onopen = function () {%0A                    t.opts.autoUnref && t.ws._socket.unref(), t.onOpen();%0A                  }),%0A                    (this.ws.onclose = this.onClose.bind(this)),%0A                    (this.ws.onmessage = function (e) {%0A                      return t.onData(e.data);%0A                    }),%0A                    (this.ws.onerror = function (e) {%0A                      return t.onError("websocket error", e);%0A                    });%0A                },%0A              },%0A              {%0A                key: "write",%0A                value: function (t) {%0A                  var e = this;%0A                  this.writable = !1;%0A                  for (%0A                    var n = function (n) {%0A                        var r = t[n],%0A                          o = n === t.length - 1;%0A                        f.encodePacket(r, e.supportsBinary, function (t) {%0A                          var n = {};%0A                          v ||%0A                            (r.options && (n.compress = r.options.compress),%0A                            e.opts.perMessageDeflate &&%0A                              ("string" == typeof t%0A                                ? Buffer.byteLength(t)%0A                                : t.length) <%0A                                e.opts.perMessageDeflate.threshold &&%0A                              (n.compress = !1));%0A                          try {%0A                            v ? e.ws.send(t) : e.ws.send(t, n);%0A                          } catch (t) {}%0A                          o &&%0A                            m(function () {%0A                              (e.writable = !0), e.emit("drain");%0A                            }, e.setTimeoutFn);%0A                        });%0A                      },%0A                      r = 0;%0A                    r < t.length;%0A                    r++%0A                  )%0A                    n(r);%0A                },%0A              },%0A              {%0A                key: "onClose",%0A                value: function () {%0A                  u.prototype.onClose.call(this);%0A                },%0A              },%0A              {%0A                key: "doClose",%0A                value: function () {%0A                  void 0 !== this.ws && (this.ws.close(), (this.ws = null));%0A                },%0A              },%0A              {%0A                key: "uri",%0A                value: function () {%0A                  var t = this.query || {},%0A                    e = this.opts.secure ? "wss" : "ws",%0A                    n = "";%0A                  return (%0A                    this.opts.port &&%0A                      (("wss" === e && 443 !== Number(this.opts.port)) ||%0A                        ("ws" === e && 80 !== Number(this.opts.port))) &&%0A                      (n = ":" + this.opts.port),%0A                    this.opts.timestampRequests &&%0A                      (t[this.opts.timestampParam] = p()),%0A                    this.supportsBinary || (t.b64 = 1),%0A                    (t = l.encode(t)).length && (t = "?" + t),%0A                    e +%0A                      "://" +%0A                      (-1 !== this.opts.hostname.indexOf(":")%0A                        ? "[" + this.opts.hostname + "]"%0A                        : this.opts.hostname) +%0A                      n +%0A                      this.opts.path +%0A                      t%0A                  );%0A                },%0A              },%0A              {%0A                key: "check",%0A                value: function () {%0A                  return !(%0A                    !d ||%0A                    ("__initialize" in d && this.name === a.prototype.name)%0A                  );%0A                },%0A              },%0A            ]) && o(e.prototype, n),%0A            r && o(e, r),%0A            a%0A          );%0A        })(u);%0A      t.exports = k;%0A    },%0A    function (t, e, n) {%0A      var r = n(0),%0A        o =%0A          "function" == typeof Promise && "function" == typeof Promise.resolve%0A            ? function (t) {%0A                return Promise.resolve().then(t);%0A              }%0A            : function (t, e) {%0A                return e(t, 0);%0A              };%0A      t.exports = {%0A        WebSocket: r.WebSocket || r.MozWebSocket,%0A        usingBrowserWebSocket: !0,%0A        defaultBinaryType: "arraybuffer",%0A        nextTick: o,%0A      };%0A    },%0A    function (t, e, n) {%0A      function r(t) {%0A        return (r =%0A          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator%0A            ? function (t) {%0A                return typeof t;%0A              }%0A            : function (t) {%0A                return t &&%0A                  "function" == typeof Symbol &&%0A                  t.constructor === Symbol &&%0A                  t !== Symbol.prototype%0A                  ? "symbol"%0A                  : typeof t;%0A              })(t);%0A      }%0A      Object.defineProperty(e, "__esModule", { value: !0 }),%0A        (e.reconstructPacket = e.deconstructPacket = void 0);%0A      var o = n(15);%0A      (e.deconstructPacket = function (t) {%0A        var e = [],%0A          n = t.data,%0A          i = t;%0A        return (%0A          (i.data = (function t(e, n) {%0A            if (!e) return e;%0A            if (o.isBinary(e)) {%0A              var i = { _placeholder: !0, num: n.length };%0A              return n.push(e), i;%0A            }%0A            if (Array.isArray(e)) {%0A              for (var s = new Array(e.length), c = 0; c < e.length; c++)%0A                s[c] = t(e[c], n);%0A              return s;%0A            }%0A            if ("object" === r(e) && !(e instanceof Date)) {%0A              var a = {};%0A              for (var u in e) e.hasOwnProperty(u) && (a[u] = t(e[u], n));%0A              return a;%0A            }%0A            return e;%0A          })(n, e)),%0A          (i.attachments = e.length),%0A          { packet: i, buffers: e }%0A        );%0A      }),%0A        (e.reconstructPacket = function (t, e) {%0A          return (%0A            (t.data = (function t(e, n) {%0A              if (!e) return e;%0A              if (e && e._placeholder) return n[e.num];%0A              if (Array.isArray(e))%0A                for (var o = 0; o < e.length; o++) e[o] = t(e[o], n);%0A              else if ("object" === r(e))%0A                for (var i in e) e.hasOwnProperty(i) && (e[i] = t(e[i], n));%0A              return e;%0A            })(t.data, e)),%0A            (t.attachments = void 0),%0A            t%0A          );%0A        });%0A    },%0A    function (t, e) {%0A      function n(t) {%0A        (t = t || {}),%0A          (this.ms = t.min || 100),%0A          (this.max = t.max || 1e4),%0A          (this.factor = t.factor || 2),%0A          (this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0),%0A          (this.attempts = 0);%0A      }%0A      (t.exports = n),%0A        (n.prototype.duration = function () {%0A          var t = this.ms * Math.pow(this.factor, this.attempts++);%0A          if (this.jitter) {%0A            var e = Math.random(),%0A              n = Math.floor(e * this.jitter * t);%0A            t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n;%0A          }%0A          return 0 | Math.min(t, this.max);%0A        }),%0A        (n.prototype.reset = function () {%0A          this.attempts = 0;%0A        }),%0A        (n.prototype.setMin = function (t) {%0A          this.ms = t;%0A        }),%0A        (n.prototype.setMax = function (t) {%0A          this.max = t;%0A        }),%0A        (n.prototype.setJitter = function (t) {%0A          this.jitter = t;%0A        });%0A    },%0A  ]);%0A});%0A//%23 sourceMappingURL=socket.io.min.js.map%0A`;

// src/BlokdotsSocketIOServer/webserver/style.css
var style_default = 'data:text/css;charset=utf-8,/* Variables */%0A:root {%0A  /* fonts */%0A  --font-family-reg: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,%0A    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;%0A  --font-family-mono: "SF Mono", "Roboto Mono", "Menlo", monospace;%0A%0A  --font-size-reg: 16px;%0A  --font-size-small: 13px;%0A  --font-size-tiny: 10px;%0A%0A  --font-weight-med: 500;%0A  --font-weight-reg: 400;%0A  --font-weight-thin: 300;%0A%0A  /* Sizes */%0A  --max-width: 640px;%0A%0A  /* Colors */%0A%0A  --color-white: %23ffffff;%0A  --color-black: %23000000;%0A%0A  --color-font-reg: var(--color-black);%0A  --color-font-med: %23808080;%0A  --color-font-dis: %23b3b3b3;%0A%0A  --color-gray-1: %23f8f8f8;%0A  --color-gray-2: %23f5f5f5;%0A  --color-gray-3: %23f2f2f2;%0A  --color-gray-4: %23f0f0f0;%0A  --color-gray-5: %23eaeaea;%0A  --color-gray-6: %23dcdcdc;%0A  --color-gray-7: %23c1c1c1;%0A  --color-gray-8: %23a8a8a8;%0A  --color-gray-9: %23606060;%0A%0A  --color-brand: %23fbe941;%0A  --color-brand-medium: %23fbd841;%0A  --color-brand-dark: %23f7c510;%0A%0A  --color-red: %23e74c3c;%0A  --color-green: %231abc9c;%0A  --color-green-dark: %2317a387;%0A  --color-blue: %235d9bc5;%0A  --color-violet: %239f63b7;%0A  --color-orange: %23f39c12;%0A  --color-yellow: var(--color-brand-medium);%0A%0A  --color-alert-high: var(--color-red);%0A  --color-alert-medium: var(--color-orange);%0A  --color-alert-low: var(--color-yellow);%0A%0A  /* Sizes */%0A%0A  --border-radius-reg: 2px;%0A  --windows-menu-bar-height: 28px;%0A}%0A%0A@media (prefers-color-scheme: dark) {%0A  :root {%0A    --color-white: %2339393a;%0A    --color-black: %23ffffff;%0A%0A    --color-gray-1: %23424243;%0A    --color-gray-2: %234d4d4d;%0A    --color-gray-3: %23808080;%0A    --color-gray-4: %233d3d3e;%0A    --color-gray-5: %232d2d2e;%0A    --color-gray-6: %23505051;%0A    --color-gray-7: %23565657;%0A    --color-gray-8: %236f6f74;%0A    --color-gray-9: %2378787c;%0A%0A    --color-font-reg: var(--color-black);%0A    --color-font-med: %23909090;%0A    --color-font-dis: var(--color-gray-6);%0A  }%0A}%0A%0A@media (max-width: 480px) {%0A  :root {%0A    --max-width: 100vw;%0A  }%0A}%0A%0A/* Reset */%0Ahtml,%0Abody,%0Adiv,%0Aspan,%0Aapplet,%0Aobject,%0Aiframe,%0Ah1,%0Ah2,%0Ah3,%0Ah4,%0Ah5,%0Ah6,%0Ap,%0Aa,%0Aimg,%0Aol,%0Aul,%0Ali,%0Afieldset,%0Aform,%0Alabel,%0Alegend,%0Atable,%0Acaption,%0Atbody,%0Atfoot,%0Athead,%0Atr,%0Ath,%0Atd {%0A  border: 0;%0A  outline: 0;%0A  font-weight: inherit;%0A  font-style: inherit;%0A  font-size: 100%;%0A  font-family: inherit;%0A  vertical-align: baseline;%0A  margin: 0;%0A  padding: 0;%0A}%0A:focus {%0A  outline: 0;%0A}%0Aol,%0Aul {%0A  list-style: none;%0A}%0Atable {%0A  border-collapse: separate;%0A  border-spacing: 0;%0A}%0Acaption,%0Ath,%0Atd {%0A  text-align: left;%0A  font-weight: 400;%0A}%0Ablockquote:before,%0Ablockquote:after,%0Aq:before,%0Aq:after {%0A  content: "";%0A}%0A.clearfix:after {%0A  content: ".";%0A  display: block;%0A  clear: both;%0A  visibility: hidden;%0A  line-height: 0;%0A  height: 0;%0A}%0A.clearfix {%0A  display: inline-block;%0A}%0Ahtml[xmlns] .clearfix {%0A  display: block;%0A}%0A* html .clearfix {%0A  height: 1%;%0A}%0A.clear {%0A  clear: both;%0A  height: 0;%0A  width: 0;%0A  margin: 0;%0A  padding: 0;%0A}%0A.no,%0A.ausblenden {%0A  display: none;%0A}%0Aheader,%0Asection,%0Afooter,%0Aaside,%0Anav,%0Aarticle,%0Afigure {%0A  display: block;%0A}%0A%0A/* Actual Style */%0A* {%0A  position: relative;%0A  box-sizing: border-box;%0A}%0A%0Ahtml,%0Abody {%0A  font-family: var(--font-family-reg);%0A%0A  color: var(--color-font-reg);%0A  background: var(--color-white);%0A%0A  font-size: var(--font-size-reg);%0A  line-height: 1.6;%0A  font-weight: var(--font-weight-reg);%0A}%0A%0Ah1 {%0A  font-weight: 500;%0A  margin: 1rem 0;%0A}%0A%0Aa {%0A  color: var(--color-green);%0A}%0A%0Ap + p {%0A  margin-top: 8px;%0A}%0A%0A%23wrapper {%0A  max-width: var(--max-width);%0A  margin: 0 auto;%0A  padding: 20px;%0A}%0A%0A%23testInput {%0A  margin: 3rem 0;%0A  display: flex;%0A  justify-content: space-between;%0A  gap: 8px;%0A}%0A%23testInput label {%0A  display: flex;%0A  flex: 1;%0A  align-items: center;%0A}%0A%23testInput input,%0Abutton {%0A  outline: none;%0A  border: none;%0A  background: none;%0A  border-radius: 0;%0A  font-family: var(--font-family-reg);%0A  font-size: var(--font-size-reg);%0A  color: var(--color-font-reg);%0A}%0A%23testInput label span {%0A  flex: 0;%0A  padding-right: 3px;%0A}%0A%23testInput input {%0A  border-bottom: solid 1px var(--color-gray-7);%0A  flex: 1;%0A}%0A%23testInput input::placeholder {%0A  color: var(--color-font-dis);%0A}%0A%23testInput button {%0A  cursor: pointer;%0A  background: var(--color-green);%0A  border-radius: var(--border-radius-reg);%0A  padding: 0.3em 0.6em;%0A  color: %23fff;%0A  flex-grow: 0;%0A}%0A@media (max-width: 600px) {%0A  %23testInput {%0A    flex-direction: column;%0A  }%0A  %23testInput label {%0A    width: 100%;%0A    flex: 1;%0A  }%0A  %23testInput button {%0A    width: 100%;%0A    flex-grow: 1;%0A  }%0A  %23testInput label span {%0A    flex: 1;%0A  }%0A  %23testInput label input {%0A    flex: 3;%0A  }%0A}%0A%0A%23socket-history {%0A  margin: 40px 0;%0A}%0A%23socket-history li {%0A  width: 100%;%0A  padding: 8px 0;%0A  border-top: solid 1px var(--color-gray-6);%0A}%0A%0A%23serverAddress,%0A%23connectionStatus,%0A.code {%0A  font-family: var(--font-family-mono);%0A  font-size: 0.9em;%0A  background: var(--color-gray-4);%0A  padding: 2px 4px;%0A  border-radius: 2px;%0A  display: inline-block;%0A}%0A%0A%23connectionStatus.ok,%0A.code.ok {%0A  background-color: var(--color-green);%0A  color: %23fff;%0A}%0A%0A.messageTime {%0A  color: var(--color-gray-8);%0A  font-family: var(--font-family-mono);%0A  margin-right: 8px;%0A}%0A.messageArrow {%0A  height: 0.8em;%0A  margin-right: 8px;%0A}%0A.messageContentDisplay {%0A}%0A.messageValueDisplay:before {%0A  content: "[";%0A  color: var(--color-gray-8);%0A}%0A.messageValueDisplay:after {%0A  content: "]";%0A  color: var(--color-gray-8);%0A}%0A.messageValueDisplay {%0A  font-family: var(--font-family-mono);%0A  color: var(--color-gray-8);%0A  margin-left: 8px;%0A}%0A.messageValueDisplay-is-number {%0A  color: var(--color-violet);%0A}%0A';

// src/BlokdotsSocketIOServer/setupHttpServer.ts
var setupHttpServer = () => {
  const httpServer = import_http.default.createServer((req, res) => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Max-Age": 2592e3,
      // 30 days
      "Cache-Control": "max-age=86400"
      /** add other headers as per requirement */
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
  // Init is a separate function, because the constructor can
  // not be async
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
      // wsEngine: WebSocket.Server,
      pingInterval: 5e3,
      pingTimeout: 5e3,
      allowEIO3: true,
      // support older websocket clients
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
        emit: (event, data) => {
          var _a;
          (_a = this.io) == null ? void 0 : _a.of("/" + integrationName).emit(event, data);
          this.activeIntegrations[integrationName].handlers.forEach(
            ({ eventName, callback }) => {
              if (eventName === event) {
                callback(data);
              }
            }
          );
        },
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
    integration.handlers = integration.handlers.filter(
      (h) => handlers.some(
        (hU) => hU.eventName === h.eventName && hU.callback === h.callback
      )
    );
    integration.onClientConnect = integration.onClientConnect.filter(
      (h) => h !== onClientConnect
    );
    integration.onClientDisconnect = integration.onClientDisconnect.filter(
      (h) => h !== onClientDisconnect
    );
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
var import_events = __toESM(require("events"));
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
var import_events2 = __toESM(require("events"));
var import_johnny_five = __toESM(require("johnny-five"));
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
var import_events3 = __toESM(require("events"));
var INTEGRATION_NAME = "figma";
var FigmaIntegration = class extends import_events3.default {
  constructor() {
    super();
    this.server;
    this.integration;
    BlokdotsSocketIOServer_default().then((server) => {
      this.server = server;
      this.integration = server.registerIntegration({
        integrationName: INTEGRATION_NAME
      });
    });
  }
  sendReaction(message) {
    console.log("sendReaction", message);
    this.emit("reaction", message);
    if (!this.integration) {
      console.error("Integration not initialized");
      return;
    }
    this.integration.emit("reaction", message);
  }
  cleanUp() {
    var _a;
    (_a = this.server) == null ? void 0 : _a.unregisterIntegration({
      integrationName: INTEGRATION_NAME
    });
  }
  rotate(parameters) {
    console.log("rotate", parameters);
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
var import_johnny_five2 = __toESM(require("johnny-five"));
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
      // @ts-ignore — There is an issue with the types for the johnny-five library
      board
    });
    this.track2 = new import_johnny_five2.default.Pin({
      pin: slot + 1,
      type: "digital",
      // @ts-ignore — There is an issue with the types for the johnny-five library
      board
    });
  }
};
var HapticLabs_default = HapticLabs;

// src/InvertableSensor/InvertableSensor.ts
var import_events4 = __toESM(require("events"));
var import_johnny_five3 = __toESM(require("johnny-five"));
var InvertableSensor = class extends import_events4.default {
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
var import_events5 = __toESM(require("events"));
var import_johnny_five4 = __toESM(require("johnny-five"));
var Joystick = class extends import_events5.default {
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

// src/LEDStrip/LEDStrip.ts
var import_node_pixel = __toESM(require_pixel());
var LEDStrip = class extends import_node_pixel.default.Strip {
  constructor({
    pin,
    board,
    ledCount = 30
  }) {
    super({
      board,
      controller: "FIRMATA",
      strips: [{ pin, length: ledCount }],
      // this is preferred form for definition
      gamma: 2.8
      // set to a gamma that works nicely for WS2812
    });
  }
};
var LEDStrip_default = LEDStrip;

// src/Metronome/Metronome.ts
var import_events6 = __toESM(require("events"));
var Metronome = class extends import_events6.default {
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
var import_oled_font_5x7 = __toESM(require_oled_font_5x7());
var import_oled_js = __toESM(require_oled());
var import_qr_image = __toESM(require_qr());
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
  let cBuf = import_oled_font_5x7.default.fontData.slice(
    cBufPos,
    cBufPos + import_oled_font_5x7.default.width
  );
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
  const charsPerRow = Math.floor(
    (OLED_WIDTH - x) / (import_oled_font_5x7.default.width + LETTER_SPACING) * size
  );
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
var import_events7 = __toESM(require("events"));
var SignalTower = class extends import_events7.default {
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
var import_events8 = __toESM(require("events"));
var SocketIOIntegration = class extends import_events8.default {
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
    (_a = this.integration) == null ? void 0 : _a.emit(this.messageEventName, {
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
var import_events9 = __toESM(require("events"));
var Timer = class extends import_events9.default {
  constructor(value = 0) {
    super();
    this.value = value;
    this.interval;
  }
  startInterval() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => {
      this.value++;
      this.emit("change", this.value);
    }, 1e3);
  }
  start() {
    if (this.interval) {
      return;
    }
    this.startInterval();
    this.emit("start");
  }
  stop() {
    clearInterval(this.interval);
    this.interval = void 0;
    this.emit("stop");
  }
  reset() {
    this.startInterval();
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
  },
  hexToRgb: (hex) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16)
    ] : null;
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
  LEDStrip,
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
