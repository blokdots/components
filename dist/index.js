var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
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

// node_modules/johnny-five/lib/mixins/emitter.js
var require_emitter = __commonJS({
  "node_modules/johnny-five/lib/mixins/emitter.js"(exports, module2) {
    var EventEmitter6 = require("events");
    var wm = new WeakMap();
    var Emitter = class extends EventEmitter6 {
      pause() {
        wm.set(this, {
          ...this._events
        });
        this._events = { __proto__: null };
      }
      resume() {
        const events = wm.get(this);
        if (events) {
          this._events = {
            __proto__: null,
            ...events
          };
          wm.set(this, null);
        }
      }
    };
    Object.assign(Emitter.prototype, EventEmitter6.prototype);
    module2.exports = Emitter;
  }
});

// node_modules/escape-string-regexp/index.js
var require_escape_string_regexp = __commonJS({
  "node_modules/escape-string-regexp/index.js"(exports, module2) {
    "use strict";
    var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
    module2.exports = function(str) {
      if (typeof str !== "string") {
        throw new TypeError("Expected a string");
      }
      return str.replace(matchOperatorsRe, "\\$&");
    };
  }
});

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

// node_modules/ansi-styles/node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "node_modules/ansi-styles/node_modules/color-convert/conversions.js"(exports, module2) {
    var cssKeywords = require_color_name();
    var reverseKeywords = {};
    for (var key in cssKeywords) {
      if (cssKeywords.hasOwnProperty(key)) {
        reverseKeywords[cssKeywords[key]] = key;
      }
    }
    var convert = module2.exports = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    for (var model in convert) {
      if (convert.hasOwnProperty(model)) {
        if (!("channels" in convert[model])) {
          throw new Error("missing channels property: " + model);
        }
        if (!("labels" in convert[model])) {
          throw new Error("missing channel labels property: " + model);
        }
        if (convert[model].labels.length !== convert[model].channels) {
          throw new Error("channel and label counts mismatch: " + model);
        }
        channels = convert[model].channels;
        labels = convert[model].labels;
        delete convert[model].channels;
        delete convert[model].labels;
        Object.defineProperty(convert[model], "channels", { value: channels });
        Object.defineProperty(convert[model], "labels", { value: labels });
      }
    }
    var channels;
    var labels;
    convert.rgb.hsl = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var min = Math.min(r, g, b);
      var max = Math.max(r, g, b);
      var delta = max - min;
      var h;
      var s;
      var l;
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [h, s * 100, l * 100];
    };
    convert.rgb.hsv = function(rgb) {
      var rdif;
      var gdif;
      var bdif;
      var h;
      var s;
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var v = Math.max(r, g, b);
      var diff = v - Math.min(r, g, b);
      var diffc = function(c) {
        return (v - c) / 6 / diff + 1 / 2;
      };
      if (diff === 0) {
        h = s = 0;
      } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);
        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }
      return [
        h * 360,
        s * 100,
        v * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      var r = rgb[0];
      var g = rgb[1];
      var b = rgb[2];
      var h = convert.rgb.hsl(rgb)[0];
      var w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [h, w * 100, b * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var c;
      var m;
      var y;
      var k;
      k = Math.min(1 - r, 1 - g, 1 - b);
      c = (1 - r - k) / (1 - k) || 0;
      m = (1 - g - k) / (1 - k) || 0;
      y = (1 - b - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    };
    function comparativeDistance(x, y) {
      return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
    }
    convert.rgb.keyword = function(rgb) {
      var reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      var currentClosestDistance = Infinity;
      var currentClosestKeyword;
      for (var keyword in cssKeywords) {
        if (cssKeywords.hasOwnProperty(keyword)) {
          var value = cssKeywords[keyword];
          var distance = comparativeDistance(rgb, value);
          if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
          }
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
      g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
      b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
      var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [x * 100, y * 100, z * 100];
    };
    convert.rgb.lab = function(rgb) {
      var xyz = convert.rgb.xyz(rgb);
      var x = xyz[0];
      var y = xyz[1];
      var z = xyz[2];
      var l;
      var a;
      var b;
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);
      return [l, a, b];
    };
    convert.hsl.rgb = function(hsl) {
      var h = hsl[0] / 360;
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var t1;
      var t2;
      var t3;
      var rgb;
      var val;
      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      t1 = 2 * l - t2;
      rgb = [0, 0, 0];
      for (var i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      var h = hsl[0];
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var smin = s;
      var lmin = Math.max(l, 0.01);
      var sv;
      var v;
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      v = (l + s) / 2;
      sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      var h = hsv[0] / 60;
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var hi = Math.floor(h) % 6;
      var f = h - Math.floor(h);
      var p = 255 * v * (1 - s);
      var q = 255 * v * (1 - s * f);
      var t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    };
    convert.hsv.hsl = function(hsv) {
      var h = hsv[0];
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var vmin = Math.max(v, 0.01);
      var lmin;
      var sl;
      var l;
      l = (2 - s) * v;
      lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    };
    convert.hwb.rgb = function(hwb) {
      var h = hwb[0] / 360;
      var wh = hwb[1] / 100;
      var bl = hwb[2] / 100;
      var ratio = wh + bl;
      var i;
      var v;
      var f;
      var n;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      i = Math.floor(6 * h);
      v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      n = wh + f * (v - wh);
      var r;
      var g;
      var b;
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }
      return [r * 255, g * 255, b * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      var c = cmyk[0] / 100;
      var m = cmyk[1] / 100;
      var y = cmyk[2] / 100;
      var k = cmyk[3] / 100;
      var r;
      var g;
      var b;
      r = 1 - Math.min(1, c * (1 - k) + k);
      g = 1 - Math.min(1, m * (1 - k) + k);
      b = 1 - Math.min(1, y * (1 - k) + k);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.rgb = function(xyz) {
      var x = xyz[0] / 100;
      var y = xyz[1] / 100;
      var z = xyz[2] / 100;
      var r;
      var g;
      var b;
      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;
      r = r > 31308e-7 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : r * 12.92;
      g = g > 31308e-7 ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : g * 12.92;
      b = b > 31308e-7 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : b * 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.lab = function(xyz) {
      var x = xyz[0];
      var y = xyz[1];
      var z = xyz[2];
      var l;
      var a;
      var b;
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);
      return [l, a, b];
    };
    convert.lab.xyz = function(lab) {
      var l = lab[0];
      var a = lab[1];
      var b = lab[2];
      var x;
      var y;
      var z;
      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;
      var y2 = Math.pow(y, 3);
      var x2 = Math.pow(x, 3);
      var z2 = Math.pow(z, 3);
      y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
      x *= 95.047;
      y *= 100;
      z *= 108.883;
      return [x, y, z];
    };
    convert.lab.lch = function(lab) {
      var l = lab[0];
      var a = lab[1];
      var b = lab[2];
      var hr;
      var h;
      var c;
      hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      c = Math.sqrt(a * a + b * b);
      return [l, c, h];
    };
    convert.lch.lab = function(lch) {
      var l = lch[0];
      var c = lch[1];
      var h = lch[2];
      var a;
      var b;
      var hr;
      hr = h / 360 * 2 * Math.PI;
      a = c * Math.cos(hr);
      b = c * Math.sin(hr);
      return [l, a, b];
    };
    convert.rgb.ansi16 = function(args) {
      var r = args[0];
      var g = args[1];
      var b = args[2];
      var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2];
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      var r = args[0];
      var g = args[1];
      var b = args[2];
      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      var color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      var mult = (~~(args > 50) + 1) * 0.5;
      var r = (color & 1) * mult * 255;
      var g = (color >> 1 & 1) * mult * 255;
      var b = (color >> 2 & 1) * mult * 255;
      return [r, g, b];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        var c = (args - 232) * 10 + 8;
        return [c, c, c];
      }
      args -= 16;
      var rem;
      var r = Math.floor(args / 36) / 5 * 255;
      var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      var b = rem % 6 / 5 * 255;
      return [r, g, b];
    };
    convert.rgb.hex = function(args) {
      var integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      var string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      var colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map(function(char) {
          return char + char;
        }).join("");
      }
      var integer = parseInt(colorString, 16);
      var r = integer >> 16 & 255;
      var g = integer >> 8 & 255;
      var b = integer & 255;
      return [r, g, b];
    };
    convert.rgb.hcg = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var max = Math.max(Math.max(r, g), b);
      var min = Math.min(Math.min(r, g), b);
      var chroma = max - min;
      var grayscale;
      var hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma + 4;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var c = 1;
      var f = 0;
      if (l < 0.5) {
        c = 2 * s * l;
      } else {
        c = 2 * s * (1 - l);
      }
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f * 100];
    };
    convert.hsv.hcg = function(hsv) {
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var c = s * v;
      var f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [hsv[0], c * 100, f * 100];
    };
    convert.hcg.rgb = function(hcg) {
      var h = hcg[0] / 360;
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      if (c === 0) {
        return [g * 255, g * 255, g * 255];
      }
      var pure = [0, 0, 0];
      var hi = h % 1 * 6;
      var v = hi % 1;
      var w = 1 - v;
      var mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c) * g;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var v = c + g * (1 - c);
      var f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [hcg[0], f * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var l = g * (1 - c) + 0.5 * c;
      var s = 0;
      if (l > 0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c / (2 * (1 - l));
      }
      return [hcg[0], s * 100, l * 100];
    };
    convert.hcg.hwb = function(hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var v = c + g * (1 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      var w = hwb[1] / 100;
      var b = hwb[2] / 100;
      var v = 1 - b;
      var c = v - w;
      var g = 0;
      if (c < 1) {
        g = (v - c) / (1 - c);
      }
      return [hwb[0], c * 100, g * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };
    convert.gray.hsl = convert.gray.hsv = function(args) {
      return [0, 0, args[0]];
    };
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      var val = Math.round(gray[0] / 100 * 255) & 255;
      var integer = (val << 16) + (val << 8) + val;
      var string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// node_modules/ansi-styles/node_modules/color-convert/route.js
var require_route = __commonJS({
  "node_modules/ansi-styles/node_modules/color-convert/route.js"(exports, module2) {
    var conversions = require_conversions();
    function buildGraph() {
      var graph = {};
      var models = Object.keys(conversions);
      for (var len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      var graph = buildGraph();
      var queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        var current = queue.pop();
        var adjacents = Object.keys(conversions[current]);
        for (var len = adjacents.length, i = 0; i < len; i++) {
          var adjacent = adjacents[i];
          var node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    function wrapConversion(toModel, graph) {
      var path = [graph[toModel].parent, toModel];
      var fn = conversions[graph[toModel].parent][toModel];
      var cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path;
      return fn;
    }
    module2.exports = function(fromModel) {
      var graph = deriveBFS(fromModel);
      var conversion = {};
      var models = Object.keys(graph);
      for (var len = models.length, i = 0; i < len; i++) {
        var toModel = models[i];
        var node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// node_modules/ansi-styles/node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "node_modules/ansi-styles/node_modules/color-convert/index.js"(exports, module2) {
    var conversions = require_conversions();
    var route = require_route();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      var wrappedFn = function(args) {
        if (args === void 0 || args === null) {
          return args;
        }
        if (arguments.length > 1) {
          args = Array.prototype.slice.call(arguments);
        }
        return fn(args);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      var wrappedFn = function(args) {
        if (args === void 0 || args === null) {
          return args;
        }
        if (arguments.length > 1) {
          args = Array.prototype.slice.call(arguments);
        }
        var result = fn(args);
        if (typeof result === "object") {
          for (var len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    models.forEach(function(fromModel) {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
      var routes = route(fromModel);
      var routeModels = Object.keys(routes);
      routeModels.forEach(function(toModel) {
        var fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module2.exports = convert;
  }
});

// node_modules/ansi-styles/index.js
var require_ansi_styles = __commonJS({
  "node_modules/ansi-styles/index.js"(exports, module2) {
    "use strict";
    var colorConvert = require_color_convert();
    var wrapAnsi16 = (fn, offset) => function() {
      const code = fn.apply(colorConvert, arguments);
      return `[${code + offset}m`;
    };
    var wrapAnsi256 = (fn, offset) => function() {
      const code = fn.apply(colorConvert, arguments);
      return `[${38 + offset};5;${code}m`;
    };
    var wrapAnsi16m = (fn, offset) => function() {
      const rgb = fn.apply(colorConvert, arguments);
      return `[${38 + offset};2;${rgb[0]};${rgb[1]};${rgb[2]}m`;
    };
    function assembleStyles() {
      const codes = new Map();
      const styles = {
        modifier: {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          gray: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles.color.grey = styles.color.gray;
      for (const groupName of Object.keys(styles)) {
        const group = styles[groupName];
        for (const styleName of Object.keys(group)) {
          const style = group[styleName];
          styles[styleName] = {
            open: `[${style[0]}m`,
            close: `[${style[1]}m`
          };
          group[styleName] = styles[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
          value: group,
          enumerable: false
        });
        Object.defineProperty(styles, "codes", {
          value: codes,
          enumerable: false
        });
      }
      const ansi2ansi = (n) => n;
      const rgb2rgb = (r, g, b) => [r, g, b];
      styles.color.close = "[39m";
      styles.bgColor.close = "[49m";
      styles.color.ansi = {
        ansi: wrapAnsi16(ansi2ansi, 0)
      };
      styles.color.ansi256 = {
        ansi256: wrapAnsi256(ansi2ansi, 0)
      };
      styles.color.ansi16m = {
        rgb: wrapAnsi16m(rgb2rgb, 0)
      };
      styles.bgColor.ansi = {
        ansi: wrapAnsi16(ansi2ansi, 10)
      };
      styles.bgColor.ansi256 = {
        ansi256: wrapAnsi256(ansi2ansi, 10)
      };
      styles.bgColor.ansi16m = {
        rgb: wrapAnsi16m(rgb2rgb, 10)
      };
      for (let key of Object.keys(colorConvert)) {
        if (typeof colorConvert[key] !== "object") {
          continue;
        }
        const suite = colorConvert[key];
        if (key === "ansi16") {
          key = "ansi";
        }
        if ("ansi16" in suite) {
          styles.color.ansi[key] = wrapAnsi16(suite.ansi16, 0);
          styles.bgColor.ansi[key] = wrapAnsi16(suite.ansi16, 10);
        }
        if ("ansi256" in suite) {
          styles.color.ansi256[key] = wrapAnsi256(suite.ansi256, 0);
          styles.bgColor.ansi256[key] = wrapAnsi256(suite.ansi256, 10);
        }
        if ("rgb" in suite) {
          styles.color.ansi16m[key] = wrapAnsi16m(suite.rgb, 0);
          styles.bgColor.ansi16m[key] = wrapAnsi16m(suite.rgb, 10);
        }
      }
      return styles;
    }
    Object.defineProperty(module2, "exports", {
      enumerable: true,
      get: assembleStyles
    });
  }
});

// node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "node_modules/has-flag/index.js"(exports, module2) {
    "use strict";
    module2.exports = function(flag, argv) {
      argv = argv || process.argv;
      var terminatorPos = argv.indexOf("--");
      var prefix = /^-{1,2}/.test(flag) ? "" : "--";
      var pos = argv.indexOf(prefix + flag);
      return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
    };
  }
});

// node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "node_modules/supports-color/index.js"(exports, module2) {
    "use strict";
    var os = require("os");
    var hasFlag = require_has_flag();
    var env = process.env;
    var support = (level) => {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    };
    var supportLevel = (() => {
      if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false")) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
        return 1;
      }
      if (process.stdout && !process.stdout.isTTY) {
        return 0;
      }
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(process.versions.node.split(".")[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return 0;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Hyper":
            return 3;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      if (env.TERM === "dumb") {
        return 0;
      }
      return 0;
    })();
    if ("FORCE_COLOR" in env) {
      supportLevel = parseInt(env.FORCE_COLOR, 10) === 0 ? 0 : supportLevel || 1;
    }
    module2.exports = process && support(supportLevel);
  }
});

// node_modules/chalk/templates.js
var require_templates = __commonJS({
  "node_modules/chalk/templates.js"(exports, module2) {
    "use strict";
    var TEMPLATE_REGEX = /(?:\\(u[a-f0-9]{4}|x[a-f0-9]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi;
    var STYLE_REGEX = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g;
    var STRING_REGEX = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/;
    var ESCAPE_REGEX = /\\(u[0-9a-f]{4}|x[0-9a-f]{2}|.)|([^\\])/gi;
    var ESCAPES = {
      n: "\n",
      r: "\r",
      t: "	",
      b: "\b",
      f: "\f",
      v: "\v",
      0: "\0",
      "\\": "\\",
      e: "",
      a: "\x07"
    };
    function unescape(c) {
      if (c[0] === "u" && c.length === 5 || c[0] === "x" && c.length === 3) {
        return String.fromCharCode(parseInt(c.slice(1), 16));
      }
      return ESCAPES[c] || c;
    }
    function parseArguments(name, args) {
      const results = [];
      const chunks = args.trim().split(/\s*,\s*/g);
      let matches;
      for (const chunk of chunks) {
        if (!isNaN(chunk)) {
          results.push(Number(chunk));
        } else if (matches = chunk.match(STRING_REGEX)) {
          results.push(matches[2].replace(ESCAPE_REGEX, (m, escape, chr) => escape ? unescape(escape) : chr));
        } else {
          throw new Error(`Invalid Chalk template style argument: ${chunk} (in style '${name}')`);
        }
      }
      return results;
    }
    function parseStyle(style) {
      STYLE_REGEX.lastIndex = 0;
      const results = [];
      let matches;
      while ((matches = STYLE_REGEX.exec(style)) !== null) {
        const name = matches[1];
        if (matches[2]) {
          const args = parseArguments(name, matches[2]);
          results.push([name].concat(args));
        } else {
          results.push([name]);
        }
      }
      return results;
    }
    function buildStyle(chalk, styles) {
      const enabled = {};
      for (const layer of styles) {
        for (const style of layer.styles) {
          enabled[style[0]] = layer.inverse ? null : style.slice(1);
        }
      }
      let current = chalk;
      for (const styleName of Object.keys(enabled)) {
        if (Array.isArray(enabled[styleName])) {
          if (!(styleName in current)) {
            throw new Error(`Unknown Chalk style: ${styleName}`);
          }
          if (enabled[styleName].length > 0) {
            current = current[styleName].apply(current, enabled[styleName]);
          } else {
            current = current[styleName];
          }
        }
      }
      return current;
    }
    module2.exports = (chalk, tmp) => {
      const styles = [];
      const chunks = [];
      let chunk = [];
      tmp.replace(TEMPLATE_REGEX, (m, escapeChar, inverse, style, close, chr) => {
        if (escapeChar) {
          chunk.push(unescape(escapeChar));
        } else if (style) {
          const str = chunk.join("");
          chunk = [];
          chunks.push(styles.length === 0 ? str : buildStyle(chalk, styles)(str));
          styles.push({ inverse, styles: parseStyle(style) });
        } else if (close) {
          if (styles.length === 0) {
            throw new Error("Found extraneous } in Chalk template literal");
          }
          chunks.push(buildStyle(chalk, styles)(chunk.join("")));
          chunk = [];
          styles.pop();
        } else {
          chunk.push(chr);
        }
      });
      chunks.push(chunk.join(""));
      if (styles.length > 0) {
        const errMsg = `Chalk template literal is missing ${styles.length} closing bracket${styles.length === 1 ? "" : "s"} (\`}\`)`;
        throw new Error(errMsg);
      }
      return chunks.join("");
    };
  }
});

// node_modules/chalk/index.js
var require_chalk = __commonJS({
  "node_modules/chalk/index.js"(exports, module2) {
    "use strict";
    var escapeStringRegexp = require_escape_string_regexp();
    var ansiStyles = require_ansi_styles();
    var supportsColor = require_supports_color();
    var template = require_templates();
    var isSimpleWindowsTerm = process.platform === "win32" && !(process.env.TERM || "").toLowerCase().startsWith("xterm");
    var levelMapping = ["ansi", "ansi", "ansi256", "ansi16m"];
    var skipModels = new Set(["gray"]);
    var styles = Object.create(null);
    function applyOptions(obj, options) {
      options = options || {};
      const scLevel = supportsColor ? supportsColor.level : 0;
      obj.level = options.level === void 0 ? scLevel : options.level;
      obj.enabled = "enabled" in options ? options.enabled : obj.level > 0;
    }
    function Chalk(options) {
      if (!this || !(this instanceof Chalk) || this.template) {
        const chalk = {};
        applyOptions(chalk, options);
        chalk.template = function() {
          const args = [].slice.call(arguments);
          return chalkTag.apply(null, [chalk.template].concat(args));
        };
        Object.setPrototypeOf(chalk, Chalk.prototype);
        Object.setPrototypeOf(chalk.template, chalk);
        chalk.template.constructor = Chalk;
        return chalk.template;
      }
      applyOptions(this, options);
    }
    if (isSimpleWindowsTerm) {
      ansiStyles.blue.open = "[94m";
    }
    for (const key of Object.keys(ansiStyles)) {
      ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), "g");
      styles[key] = {
        get() {
          const codes = ansiStyles[key];
          return build.call(this, this._styles ? this._styles.concat(codes) : [codes], key);
        }
      };
    }
    ansiStyles.color.closeRe = new RegExp(escapeStringRegexp(ansiStyles.color.close), "g");
    for (const model of Object.keys(ansiStyles.color.ansi)) {
      if (skipModels.has(model)) {
        continue;
      }
      styles[model] = {
        get() {
          const level = this.level;
          return function() {
            const open = ansiStyles.color[levelMapping[level]][model].apply(null, arguments);
            const codes = {
              open,
              close: ansiStyles.color.close,
              closeRe: ansiStyles.color.closeRe
            };
            return build.call(this, this._styles ? this._styles.concat(codes) : [codes], model);
          };
        }
      };
    }
    ansiStyles.bgColor.closeRe = new RegExp(escapeStringRegexp(ansiStyles.bgColor.close), "g");
    for (const model of Object.keys(ansiStyles.bgColor.ansi)) {
      if (skipModels.has(model)) {
        continue;
      }
      const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
      styles[bgModel] = {
        get() {
          const level = this.level;
          return function() {
            const open = ansiStyles.bgColor[levelMapping[level]][model].apply(null, arguments);
            const codes = {
              open,
              close: ansiStyles.bgColor.close,
              closeRe: ansiStyles.bgColor.closeRe
            };
            return build.call(this, this._styles ? this._styles.concat(codes) : [codes], model);
          };
        }
      };
    }
    var proto = Object.defineProperties(() => {
    }, styles);
    function build(_styles, key) {
      const builder = function() {
        return applyStyle.apply(builder, arguments);
      };
      builder._styles = _styles;
      const self2 = this;
      Object.defineProperty(builder, "level", {
        enumerable: true,
        get() {
          return self2.level;
        },
        set(level) {
          self2.level = level;
        }
      });
      Object.defineProperty(builder, "enabled", {
        enumerable: true,
        get() {
          return self2.enabled;
        },
        set(enabled) {
          self2.enabled = enabled;
        }
      });
      builder.hasGrey = this.hasGrey || key === "gray" || key === "grey";
      builder.__proto__ = proto;
      return builder;
    }
    function applyStyle() {
      const args = arguments;
      const argsLen = args.length;
      let str = String(arguments[0]);
      if (argsLen === 0) {
        return "";
      }
      if (argsLen > 1) {
        for (let a = 1; a < argsLen; a++) {
          str += " " + args[a];
        }
      }
      if (!this.enabled || this.level <= 0 || !str) {
        return str;
      }
      const originalDim = ansiStyles.dim.open;
      if (isSimpleWindowsTerm && this.hasGrey) {
        ansiStyles.dim.open = "";
      }
      for (const code of this._styles.slice().reverse()) {
        str = code.open + str.replace(code.closeRe, code.open) + code.close;
        str = str.replace(/\r?\n/g, `${code.close}$&${code.open}`);
      }
      ansiStyles.dim.open = originalDim;
      return str;
    }
    function chalkTag(chalk, strings) {
      if (!Array.isArray(strings)) {
        return [].slice.call(arguments, 1).join(" ");
      }
      const args = [].slice.call(arguments, 2);
      const parts = [strings.raw[0]];
      for (let i = 1; i < strings.length; i++) {
        parts.push(String(args[i - 1]).replace(/[{}\\]/g, "\\$&"));
        parts.push(String(strings.raw[i]));
      }
      return template(chalk, parts.join(""));
    }
    Object.defineProperties(Chalk.prototype, styles);
    module2.exports = Chalk();
    module2.exports.supportsColor = supportsColor;
  }
});

// node_modules/johnny-five/lib/mixins/collection.js
var require_collection = __commonJS({
  "node_modules/johnny-five/lib/mixins/collection.js"(exports, module2) {
    var EventEmitter6 = require("events");
    var Emitter = require_emitter();
    var Collection = class {
      constructor(numsOrObjects) {
        const Type = this.type;
        let initObjects = [];
        this.length = 0;
        if (Array.isArray(numsOrObjects)) {
          initObjects = numsOrObjects;
        } else {
          if (Array.isArray(numsOrObjects.pins)) {
            const keys = Object.keys(numsOrObjects).filter((key) => key !== "pins");
            initObjects = numsOrObjects.pins.map((pin) => {
              const obj = {};
              if (Array.isArray(pin)) {
                obj.pins = pin;
              } else {
                obj.pin = pin;
              }
              return keys.reduce((accum, key) => {
                accum[key] = numsOrObjects[key];
                return accum;
              }, obj);
            });
          }
        }
        if (initObjects.length) {
          while (initObjects.length) {
            let numOrObject = initObjects.shift();
            if (typeof Type === "function") {
              if (!(numOrObject instanceof Type || numOrObject instanceof this.constructor)) {
                numOrObject = new Type(numOrObject);
              }
            }
            this.add(numOrObject);
          }
        }
      }
      slice() {
        return new this.constructor([].slice.apply(this, arguments));
      }
    };
    Collection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
    Collection.prototype.add = function(...args) {
      let length = this.length;
      if (args.length === 1 && args[0] instanceof this.constructor) {
        args = args[0];
      }
      for (let i = 0; i < args.length; i++) {
        if (this.type) {
          if (args[i] instanceof this.type || args[i] instanceof this.constructor) {
            this[length++] = args[i];
          }
        } else {
          this[length++] = args[i];
        }
      }
      return this.length = length;
    };
    Collection.prototype.each = function(callback) {
      let length = this.length;
      for (let i = 0; i < length; i++) {
        callback.call(this[i], this[i], i);
      }
      return this;
    };
    Collection.prototype.forEach = function() {
      [].forEach.apply(this, arguments);
    };
    Collection.prototype.includes = function() {
      return [].includes.apply(this, arguments);
    };
    Collection.prototype.indexOf = function() {
      return [].indexOf.apply(this, arguments);
    };
    Collection.prototype.map = function() {
      return [].map.apply(this, arguments);
    };
    Collection.prototype.byId = function(id) {
      return [].find.call(this, function(entry) {
        return entry.id !== void 0 && entry.id === id;
      });
    };
    Collection.installMethodForwarding = (target, source, options = {}) => {
      const { skip = [] } = options;
      const nevercopy = "apply|arguments|bind|call|caller|constructor|domain|length|name|prototype|toString".split("|");
      return Object.getOwnPropertyNames(source).reduce((accum, method) => {
        if (skip.includes(method) || nevercopy.includes(method)) {
          return accum;
        }
        accum[method] = function(...args) {
          const length = this.length;
          for (let i = 0; i < length; i++) {
            this[i][method](...args);
          }
          return this;
        };
        return accum;
      }, target);
    };
    var noop = () => {
    };
    Collection.installCallbackReconciliation = (target, methods) => {
      methods.forEach((method) => {
        target[method] = function(duration, callback) {
          const length = this.length;
          const signals = [];
          if (typeof duration === "function") {
            callback = duration;
            duration = 1e3;
          }
          if (typeof callback !== "function") {
            callback = noop;
          }
          for (let i = 0; i < length; i++) {
            signals.push(new Promise((resolve) => this[i][method](duration, () => resolve())));
          }
          Promise.all(signals).then(callback);
          return this;
        };
      });
    };
    Collection.Emitter = class extends Collection {
      constructor(numsOrObjects) {
        super(numsOrObjects);
        let interval = null;
        let period = 5;
        if (!Array.isArray(numsOrObjects) && (typeof numsOrObjects === "object" && numsOrObjects !== null)) {
          period = numsOrObjects.freq || numsOrObjects.period || period;
          if (numsOrObjects.frequency) {
            period = 1 / numsOrObjects.frequency * 1e3;
          }
        }
        Object.defineProperties(this, {
          period: {
            get() {
              return period;
            },
            set(value) {
              if (period !== value) {
                period = value;
              }
              if (interval) {
                clearInterval(interval);
              }
              interval = setInterval(() => {
                this.emit("data", this);
              }, period);
            }
          }
        });
        this.period = period;
        this.on("newListener", (event) => {
          if (event === "change" || event === "data") {
            return;
          }
          this.forEach((input) => {
            input.on(event, (data) => this.emit(event, input, data));
          });
        });
      }
      add(...inputs) {
        if (inputs.length) {
          super.add(...inputs);
          inputs.forEach((input) => {
            if (input) {
              input.on("change", () => this.emit("change", input));
            }
          });
        }
        return this.length;
      }
    };
    Object.assign(Collection.Emitter.prototype, EventEmitter6.prototype, Emitter.prototype);
    Collection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
    module2.exports = Collection;
  }
});

// node_modules/lodash.debounce/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.debounce/index.js"(exports, module2) {
    var FUNC_ERROR_TEXT = "Expected a function";
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    var now = function() {
      return root.Date.now();
    };
    function debounce(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
        return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module2.exports = debounce;
  }
});

// node_modules/lodash.clonedeep/index.js
var require_lodash2 = __commonJS({
  "node_modules/lodash.clonedeep/index.js"(exports, module2) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reFlags = /\w*$/;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    function addMapEntry(map, pair) {
      map.set(pair[0], pair[1]);
      return map;
    }
    function addSetEntry(set, value) {
      set.add(value);
      return set;
    }
    function arrayEach(array, iteratee) {
      var index = -1, length = array ? array.length : 0;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1, length = array ? array.length : 0;
      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function isHostObject(value) {
      var result = false;
      if (value != null && typeof value.toString != "function") {
        try {
          result = !!(value + "");
        } catch (e) {
        }
      }
      return result;
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectToString = objectProto.toString;
    var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var Symbol2 = root.Symbol;
    var Uint8Array2 = root.Uint8Array;
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    var objectCreate = Object.create;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var nativeKeys = overArg(Object.keys, Object);
    var DataView = getNative(root, "DataView");
    var Map2 = getNative(root, "Map");
    var Promise2 = getNative(root, "Promise");
    var Set2 = getNative(root, "Set");
    var WeakMap2 = getNative(root, "WeakMap");
    var nativeCreate = getNative(Object, "create");
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap2);
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function Hash(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
    }
    function hashDelete(key) {
      return this.has(key) && delete this.__data__[key];
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries ? entries.length : 0;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      return getMapData(this, key)["delete"](key);
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      getMapData(this, key).set(key, value);
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function Stack(entries) {
      this.__data__ = new ListCache(entries);
    }
    function stackClear() {
      this.__data__ = new ListCache();
    }
    function stackDelete(key) {
      return this.__data__["delete"](key);
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var cache = this.__data__;
      if (cache instanceof ListCache) {
        var pairs = cache.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          return this;
        }
        cache = this.__data__ = new MapCache(pairs);
      }
      cache.set(key, value);
      return this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
      var length = result.length, skipIndexes = !!length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        object[key] = value;
      }
    }
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }
    function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
      var result;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
          if (isHostObject(value)) {
            return object ? value : {};
          }
          result = initCloneObject(isFunc ? {} : value);
          if (!isDeep) {
            return copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, baseClone, isDeep);
        }
      }
      stack || (stack = new Stack());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (!isArr) {
        var props = isFull ? getAllKeys(value) : keys(value);
      }
      arrayEach(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, isDeep, isFull, customizer, key2, value, stack));
      });
      return result;
    }
    function baseCreate(proto) {
      return isObject(proto) ? objectCreate(proto) : {};
    }
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    function baseGetTag(value) {
      return objectToString.call(value);
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var result = new buffer.constructor(buffer.length);
      buffer.copy(result);
      return result;
    }
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
      return result;
    }
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    function cloneMap(map, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
      return arrayReduce(array, addMapEntry, new map.constructor());
    }
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    function cloneSet(set, isDeep, cloneFunc) {
      var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
      return arrayReduce(array, addSetEntry, new set.constructor());
    }
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    function copyArray(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    function copyObject(source, props, object, customizer) {
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        assignValue(object, key, newValue === void 0 ? source[key] : newValue);
      }
      return object;
    }
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
      getTag = function(value) {
        var result = objectToString.call(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : void 0;
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    function initCloneArray(array) {
      var length = array.length, result = array.constructor(length);
      if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    function initCloneByTag(object, tag, cloneFunc, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
          return new Ctor(+object);
        case dataViewTag:
          return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object, isDeep);
        case mapTag:
          return cloneMap(object, isDeep, cloneFunc);
        case numberTag:
        case stringTag:
          return new Ctor(object);
        case regexpTag:
          return cloneRegExp(object);
        case setTag:
          return cloneSet(object, isDeep, cloneFunc);
        case symbolTag:
          return cloneSymbol(object);
      }
    }
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == "number" || reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function cloneDeep(value) {
      return baseClone(value, true, true);
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    function isArguments(value) {
      return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
    }
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isFunction(value) {
      var tag = isObject(value) ? objectToString.call(value) : "";
      return tag == funcTag || tag == genTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    function stubArray() {
      return [];
    }
    function stubFalse() {
      return false;
    }
    module2.exports = cloneDeep;
  }
});

// node_modules/johnny-five/lib/fn.js
var require_fn = __commonJS({
  "node_modules/johnny-five/lib/fn.js"(exports, module2) {
    var Fn = {
      debounce: require_lodash(),
      cloneDeep: require_lodash2()
    };
    var { ceil, max, min, PI } = Math;
    Fn.toFixed = (number, digits) => +(number || 0).toFixed(digits);
    Fn.map = (value, fromLow, fromHigh, toLow, toHigh) => (value - fromLow) * (toHigh - toLow) / (fromHigh - fromLow) + toLow | 0;
    Fn.scale = Fn.map;
    var f32A = new Float32Array(1);
    Fn.fmap = (value, fromLow, fromHigh, toLow, toHigh) => {
      f32A[0] = (value - fromLow) * (toHigh - toLow) / (fromHigh - fromLow) + toLow;
      return f32A[0];
    };
    Fn.fscale = Fn.fmap;
    Fn.constrain = (value, lower, upper) => min(upper, max(lower, value));
    Fn.inRange = (value, lower, upper) => value >= lower && value <= upper;
    Fn.range = function(lower, upper, tick) {
      if (arguments.length === 1) {
        upper = lower - 1;
        lower = 0;
      }
      lower = lower || 0;
      upper = upper || 0;
      tick = tick || 1;
      const len = max(ceil((upper - lower) / tick), 0);
      let idx = 0;
      const range = [];
      while (idx <= len) {
        range[idx++] = lower;
        lower += tick;
      }
      return range;
    };
    Fn.uid = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (chr) => {
      const rnd = Math.random() * 16 | 0;
      return (chr === "x" ? rnd : rnd & 3 | 8).toString(16);
    }).toUpperCase();
    Fn.square = (x) => x * x;
    Fn.sum = function sum(values) {
      let vals;
      if (Array.isArray(values)) {
        vals = values;
      } else {
        vals = [].slice.call(arguments);
      }
      return vals.reduce((accum, value) => accum + value, 0);
    };
    Fn.fma = (a, b, c) => {
      let aHigh = 134217729 * a;
      let aLow;
      aHigh = aHigh + (a - aHigh);
      aLow = a - aHigh;
      let bHigh = 134217729 * b;
      let bLow;
      bHigh = bHigh + (b - bHigh);
      bLow = b - bHigh;
      const r1 = a * b;
      const r2 = -r1 + aHigh * bHigh + aHigh * bLow + aLow * bHigh + aLow * bLow;
      const s = r1 + c;
      const t = r1 - (s - c) + (c - (s - r1));
      return s + (t + r2);
    };
    Fn._BV = Fn.bitValue = Fn.bv = (bit) => 1 << bit;
    Fn.int16 = (msb, lsb) => {
      const result = msb << 8 | lsb;
      return result >> 15 ? ((result ^ 65535) + 1) * -1 : result;
    };
    Fn.uint16 = (msb, lsb) => msb << 8 | lsb;
    Fn.int24 = (b16, b8, b0) => {
      const result = b16 << 16 | b8 << 8 | b0;
      return result >> 23 ? ((result ^ 16777215) + 1) * -1 : result;
    };
    Fn.uint24 = (b16, b8, b0) => b16 << 16 | b8 << 8 | b0;
    Fn.int32 = (b24, b16, b8, b0) => {
      const result = b24 << 24 | b16 << 16 | b8 << 8 | b0;
      return result >> 31 ? ((result ^ 4294967295) + 1) * -1 : result;
    };
    Fn.uint32 = (b24, b16, b8, b0) => (b24 << 24 | b16 << 16 | b8 << 8 | b0) >>> 0;
    Fn.bitSize = (n) => Math.round(Math.log2(n));
    var POW = "POW_2_";
    var U = "u";
    var S = "s";
    var MAX = Fn.bitSize(Number.MAX_SAFE_INTEGER) + 1;
    var bitSizes = [4, 8, 10, 12, 16, 20, 24, 32];
    for (let i = 0; i < MAX; i++) {
      Fn[POW + i] = 2 ** i;
    }
    bitSizes.forEach((bitSize) => {
      const decimal = Fn[POW + bitSize];
      const half = decimal / 2 >>> 0;
      const halfMinusOne = half - 1;
      Fn[U + bitSize] = (value) => {
        if (value < 0) {
          value += decimal;
        }
        return Fn.constrain(value, 0, decimal - 1);
      };
      Fn[S + bitSize] = (value) => {
        if (value > halfMinusOne) {
          value -= decimal;
        }
        return Fn.constrain(value, -half, halfMinusOne);
      };
    });
    Fn.RAD_TO_DEG = 180 / PI;
    Fn.DEG_TO_RAD = PI / 180;
    Fn.TAU = 2 * PI;
    module2.exports = Fn;
  }
});

// node_modules/johnny-five/lib/repl.js
var require_repl = __commonJS({
  "node_modules/johnny-five/lib/repl.js"(exports, module2) {
    var Emitter = require_emitter();
    var repl = require("repl");
    var priv = new Map();
    var Repl = class extends Emitter {
      constructor(opts) {
        if (!Repl.isActive) {
          super();
          Repl.isActive = true;
          this.context = {};
          this.ready = false;
          const state = {
            opts,
            board: opts.board
          };
          priv.set(this, state);
          Repl.ref = this;
        } else {
          return Repl.ref;
        }
      }
      initialize(callback) {
        const state = priv.get(this);
        process.stdin.resume();
        process.stdin.setEncoding("utf8");
        const replDefaults = {
          prompt: ">> ",
          useGlobal: false
        };
        state.board.info("Repl", "Initialized");
        const cmd = repl.start(replDefaults);
        this.ready = true;
        this.cmd = cmd;
        this.context = cmd.context;
        cmd.on("exit", () => {
          const failExitTimeout = 1e3;
          state.board.emit("exit");
          state.board.warn("Board", "Closing.");
          const timeout = setTimeout(() => {
            process.reallyExit();
          }, failExitTimeout);
          const interval = setInterval(() => {
            let pendingIo = false;
            if (state.board.length) {
              for (let i = 0; i < state.board.length; i++) {
                if (state.board[i].io.pending) {
                  pendingIo = true;
                  break;
                }
              }
            } else {
              pendingIo = state.board.io.pending;
            }
            if (!pendingIo) {
              clearInterval(interval);
              clearTimeout(timeout);
              process.nextTick(process.reallyExit);
            }
          }, 1);
        });
        this.inject(state.opts);
        if (callback) {
          process.nextTick(callback);
        }
      }
      close() {
        this.cmd.emit("exit");
      }
      inject(obj) {
        Object.keys(obj).forEach(function(key) {
          Object.defineProperty(this.context, key, Object.getOwnPropertyDescriptor(obj, key));
        }, this);
      }
    };
    Repl.isActive = false;
    Repl.isBlocked = false;
    Repl.ref = null;
    module2.exports = Repl;
  }
});

// node_modules/johnny-five/lib/board.options.js
var require_board_options = __commonJS({
  "node_modules/johnny-five/lib/board.options.js"(exports, module2) {
    var Options = class {
      constructor(arg) {
        var options = {};
        if (typeof arg === "number" || typeof arg === "string") {
          options.pin = arg;
        } else if (Array.isArray(arg)) {
          options.pins = arg;
        } else {
          options = arg;
        }
        Object.assign(this, options);
      }
    };
    module2.exports = Options;
  }
});

// node_modules/johnny-five/lib/board.pins.js
var require_board_pins = __commonJS({
  "node_modules/johnny-five/lib/board.pins.js"(exports, module2) {
    var Options = require_board_options();
    var MODES = {
      INPUT: 0,
      OUTPUT: 1,
      ANALOG: 2,
      PWM: 3,
      SERVO: 4
    };
    var pinsToType = {
      20: "UNO",
      25: "LEONARDO",
      70: "MEGA"
    };
    function Pins(board) {
      if (!(this instanceof Pins)) {
        return new Pins(board);
      }
      const io = board.io;
      const pins = io.pins.slice();
      const length = pins.length;
      const type = pinsToType[length] || "OTHER";
      board.type = type;
      for (let i = 0; i < length; i++) {
        this[i] = pins[i];
      }
      Object.defineProperties(this, {
        type: {
          value: type
        },
        length: {
          value: length
        }
      });
      [
        "isInput",
        "isOutput",
        "isAnalog",
        "isPwm",
        "isServo"
      ].forEach((isType) => {
        if (io[isType]) {
          this[isType] = io[isType];
        }
      });
    }
    Object.entries(MODES).forEach(([mode, value]) => {
      Object.defineProperty(Pins, mode, { value });
    });
    function isFirmata({ io }) {
      return io.name === "Firmata" || io.name === "Mock";
    }
    function hasPins({ pin, pins }) {
      return typeof pin !== "undefined" || typeof pins !== "undefined" && pins.length;
    }
    Pins.isFirmata = isFirmata;
    Pins.Error = ({ pin, type, via }) => {
      throw new Error(`Pin Error: ${pin} is not a valid ${type} pin (${via})`);
    };
    var normalizers = new Map();
    Pins.normalize = function(options, board) {
      var type = board.pins.type;
      var isArduino = isFirmata(board);
      var normalizer = normalizers.get(board);
      var isNormalizing;
      if (typeof options === "string" || typeof options === "number" || Array.isArray(options)) {
        options = new Options(options);
      }
      if (!normalizer) {
        isNormalizing = board.io && typeof board.io.normalize === "function";
        normalizer = function(pin) {
          return isArduino ? Pins.fromAnalog(Pins.translate(pin, type)) : isNormalizing ? board.io.normalize(pin) : pin;
        };
        normalizers.set(board, normalizer);
      }
      if (hasPins(options)) {
        if (options.pins) {
          options.pins = options.pins.map(normalizer);
        } else {
          options.pin = normalizer(options.pin);
        }
      }
      return options;
    };
    Pins.normalize.clear = function() {
      normalizers.clear();
    };
    Pins.translations = {
      UNO: {
        dtoa: {
          14: "A0",
          15: "A1",
          16: "A2",
          17: "A3",
          18: "A4",
          19: "A5"
        },
        tinker: {
          I0: "A0",
          I1: "A1",
          I2: "A2",
          I3: "A3",
          I4: "A4",
          I5: "A5",
          O0: 11,
          O1: 10,
          O2: 9,
          O3: 6,
          O4: 5,
          O5: 3,
          D13: 13,
          D12: 12,
          D8: 8,
          D7: 7,
          D4: 4,
          D2: 2
        }
      },
      MEGA: {
        dtoa: {
          54: "A0",
          55: "A1",
          56: "A2",
          57: "A3",
          58: "A4",
          59: "A5",
          60: "A6",
          61: "A7",
          62: "A8",
          63: "A9"
        },
        tinker: {
          I0: "A0",
          I1: "A1",
          I2: "A2",
          I3: "A3",
          I4: "A4",
          I5: "A5",
          I6: "A6",
          I7: "A7",
          I8: "A8",
          I9: "A9",
          O0: 11,
          O1: 10,
          O2: 9,
          O3: 6,
          O4: 5,
          O5: 3,
          D13: 13,
          D12: 12,
          D8: 8,
          D7: 7,
          D4: 4,
          D2: 2
        }
      }
    };
    Pins.translations.LEONARDO = Pins.translations.UNO;
    Pins.translate = function(pin, type) {
      var translations = Pins.translations[type.toUpperCase()];
      if (!translations) {
        return pin;
      }
      return Object.keys(translations).reduce(function(pin2, map) {
        return translations[map][pin2] || pin2;
      }, pin);
    };
    Pins.fromAnalog = function(pin) {
      if (typeof pin === "string" && (pin.length > 1 && pin[0] === "A")) {
        return parseInt(pin.slice(1), 10);
      }
      return pin;
    };
    Pins.identity = function(pins, needle) {
      return [].findIndex.call(pins, function(pin) {
        return pin.name === needle || pin.id === needle || pin.port === needle;
      });
    };
    Object.keys(MODES).forEach(function(key) {
      var name = key[0] + key.slice(1).toLowerCase();
      Pins.prototype["is" + name] = function(pin) {
        var attrs = this[pin] || this[Pins.identity(this, pin)];
        if (attrs && attrs.supportedModes.includes(MODES[key])) {
          return true;
        }
        return false;
      };
    });
    Pins.prototype.isDigital = function(pin) {
      var attrs = this[pin] || this[Pins.identity(this, pin)];
      if (attrs && attrs.supportedModes.length) {
        return true;
      }
      return false;
    };
    module2.exports = Pins;
  }
});

// node_modules/browser-serialport/index.js
var require_browser_serialport = __commonJS({
  "node_modules/browser-serialport/index.js"(exports, module2) {
    "use strict";
    var EE = require("events").EventEmitter;
    var util = require("util");
    var DATABITS = [7, 8];
    var STOPBITS = [1, 2];
    var PARITY = ["none", "even", "mark", "odd", "space"];
    var FLOWCONTROLS = ["RTSCTS"];
    var _options = {
      baudrate: 9600,
      parity: "none",
      rtscts: false,
      databits: 8,
      stopbits: 1,
      buffersize: 256
    };
    function convertOptions(options) {
      switch (options.dataBits) {
        case 7:
          options.dataBits = "seven";
          break;
        case 8:
          options.dataBits = "eight";
          break;
      }
      switch (options.stopBits) {
        case 1:
          options.stopBits = "one";
          break;
        case 2:
          options.stopBits = "two";
          break;
      }
      switch (options.parity) {
        case "none":
          options.parity = "no";
          break;
      }
      return options;
    }
    function SerialPort(path, options, openImmediately, callback) {
      EE.call(this);
      var self2 = this;
      var args = Array.prototype.slice.call(arguments);
      callback = args.pop();
      if (typeof callback !== "function") {
        callback = null;
      }
      options = typeof options !== "function" && options || {};
      openImmediately = openImmediately === void 0 || openImmediately === null ? true : openImmediately;
      callback = callback || function(err2) {
        if (err2) {
          self2.emit("error", err2);
        }
      };
      var err;
      options.baudRate = options.baudRate || options.baudrate || _options.baudrate;
      options.dataBits = options.dataBits || options.databits || _options.databits;
      if (DATABITS.indexOf(options.dataBits) === -1) {
        err = new Error('Invalid "databits": ' + options.dataBits);
        callback(err);
        return;
      }
      options.stopBits = options.stopBits || options.stopbits || _options.stopbits;
      if (STOPBITS.indexOf(options.stopBits) === -1) {
        err = new Error('Invalid "stopbits": ' + options.stopbits);
        callback(err);
        return;
      }
      options.parity = options.parity || _options.parity;
      if (PARITY.indexOf(options.parity) === -1) {
        err = new Error('Invalid "parity": ' + options.parity);
        callback(err);
        return;
      }
      if (!path) {
        err = new Error("Invalid port specified: " + path);
        callback(err);
        return;
      }
      options.rtscts = _options.rtscts;
      if (options.flowControl || options.flowcontrol) {
        var fc = options.flowControl || options.flowcontrol;
        if (typeof fc === "boolean") {
          options.rtscts = true;
        } else {
          var clean = fc.every(function(flowControl) {
            var fcup = flowControl.toUpperCase();
            var idx = FLOWCONTROLS.indexOf(fcup);
            if (idx < 0) {
              var err2 = new Error('Invalid "flowControl": ' + fcup + ". Valid options: " + FLOWCONTROLS.join(", "));
              callback(err2);
              return false;
            } else {
              switch (idx) {
                case 0:
                  options.rtscts = true;
                  break;
              }
              return true;
            }
          });
          if (!clean) {
            return;
          }
        }
      }
      options.bufferSize = options.bufferSize || options.buffersize || _options.buffersize;
      options.serial = options.serial || typeof chrome !== "undefined" && chrome.serial;
      if (!options.serial) {
        throw new Error("No access to serial ports. Try loading as a Chrome Application.");
      }
      this.options = convertOptions(options);
      this.options.serial.onReceiveError.addListener(function(info) {
        switch (info.error) {
          case "disconnected":
          case "device_lost":
          case "system_error":
            err = new Error("Disconnected");
            if (self2.options.disconnectedCallback) {
              self2.options.disconnectedCallback(err);
            } else {
              self2.emit("disconnect", err);
            }
            if (self2.connectionId >= 0) {
              self2.close();
            }
            break;
          case "timeout":
            break;
        }
      });
      this.path = path;
      if (openImmediately) {
        process.nextTick(function() {
          self2.open(callback);
        });
      }
    }
    util.inherits(SerialPort, EE);
    SerialPort.prototype.connectionId = -1;
    SerialPort.prototype.open = function(callback) {
      var options = {
        bitrate: parseInt(this.options.baudRate, 10),
        dataBits: this.options.dataBits,
        parityBit: this.options.parity,
        stopBits: this.options.stopBits,
        ctsFlowControl: this.options.rtscts
      };
      this.options.serial.connect(this.path, options, this.proxy("onOpen", callback));
    };
    SerialPort.prototype.onOpen = function(callback, openInfo) {
      if (chrome.runtime.lastError) {
        if (typeof callback === "function") {
          callback(chrome.runtime.lastError);
        } else {
          this.emit("error", chrome.runtime.lastError);
        }
        return;
      }
      this.connectionId = openInfo.connectionId;
      if (this.connectionId === -1) {
        this.emit("error", new Error("Could not open port."));
        return;
      }
      this.emit("open", openInfo);
      this._reader = this.proxy("onRead");
      this.options.serial.onReceive.addListener(this._reader);
      if (typeof callback === "function") {
        callback(chrome.runtime.lastError, openInfo);
      }
    };
    SerialPort.prototype.onRead = function(readInfo) {
      if (readInfo && this.connectionId === readInfo.connectionId) {
        if (this.options.dataCallback) {
          this.options.dataCallback(toBuffer(readInfo.data));
        } else {
          this.emit("data", toBuffer(readInfo.data));
        }
      }
    };
    SerialPort.prototype.write = function(buffer, callback) {
      if (this.connectionId < 0) {
        var err = new Error("Serialport not open.");
        if (typeof callback === "function") {
          callback(err);
        } else {
          this.emit("error", err);
        }
        return;
      }
      if (typeof buffer === "string") {
        buffer = str2ab(buffer);
      }
      if (buffer instanceof ArrayBuffer === false) {
        buffer = buffer2ArrayBuffer(buffer);
      }
      this.options.serial.send(this.connectionId, buffer, function(info) {
        if (typeof callback === "function") {
          callback(chrome.runtime.lastError, info);
        }
      });
    };
    SerialPort.prototype.close = function(callback) {
      if (this.connectionId < 0) {
        var err = new Error("Serialport not open.");
        if (typeof callback === "function") {
          callback(err);
        } else {
          this.emit("error", err);
        }
        return;
      }
      this.options.serial.disconnect(this.connectionId, this.proxy("onClose", callback));
    };
    SerialPort.prototype.onClose = function(callback, result) {
      this.connectionId = -1;
      this.emit("close");
      this.removeAllListeners();
      if (this._reader) {
        this.options.serial.onReceive.removeListener(this._reader);
        this._reader = null;
      }
      if (typeof callback === "function") {
        callback(chrome.runtime.lastError, result);
      }
    };
    SerialPort.prototype.flush = function(callback) {
      if (this.connectionId < 0) {
        var err = new Error("Serialport not open.");
        if (typeof callback === "function") {
          callback(err);
        } else {
          this.emit("error", err);
        }
        return;
      }
      var self2 = this;
      this.options.serial.flush(this.connectionId, function(result) {
        if (chrome.runtime.lastError) {
          if (typeof callback === "function") {
            callback(chrome.runtime.lastError, result);
          } else {
            self2.emit("error", chrome.runtime.lastError);
          }
          return;
        } else {
          callback(null, result);
        }
      });
    };
    SerialPort.prototype.drain = function(callback) {
      if (this.connectionId < 0) {
        var err = new Error("Serialport not open.");
        if (typeof callback === "function") {
          callback(err);
        } else {
          this.emit("error", err);
        }
        return;
      }
      if (typeof callback === "function") {
        callback();
      }
    };
    SerialPort.prototype.proxy = function() {
      var self2 = this;
      var proxyArgs = [];
      for (var i = 0; i < arguments.length; i++) {
        proxyArgs[i] = arguments[i];
      }
      var functionName = proxyArgs.splice(0, 1)[0];
      var func = function() {
        var funcArgs = [];
        for (var i2 = 0; i2 < arguments.length; i2++) {
          funcArgs[i2] = arguments[i2];
        }
        var allArgs = proxyArgs.concat(funcArgs);
        self2[functionName].apply(self2, allArgs);
      };
      return func;
    };
    SerialPort.prototype.set = function(options, callback) {
      this.options.serial.setControlSignals(this.connectionId, options, function(result) {
        callback(chrome.runtime.lastError, result);
      });
    };
    SerialPort.prototype.isOpen = function() {
      return this.connectionId > -1;
    };
    function SerialPortList(callback) {
      if (typeof chrome != "undefined" && chrome.serial) {
        chrome.serial.getDevices(function(ports) {
          var portObjects = new Array(ports.length);
          for (var i = 0; i < ports.length; i++) {
            portObjects[i] = {
              comName: ports[i].path,
              manufacturer: ports[i].displayName,
              serialNumber: "",
              pnpId: "",
              locationId: "",
              vendorId: "0x" + (ports[i].vendorId || 0).toString(16),
              productId: "0x" + (ports[i].productId || 0).toString(16)
            };
          }
          callback(chrome.runtime.lastError, portObjects);
        });
      } else {
        callback(new Error("No access to serial ports. Try loading as a Chrome Application."), null);
      }
    }
    function str2ab(str) {
      var buf = new ArrayBuffer(str.length);
      var bufView = new Uint8Array(buf);
      for (var i = 0; i < str.length; i++) {
        bufView[i] = str.charCodeAt(i);
      }
      return buf;
    }
    function buffer2ArrayBuffer(buffer) {
      var buf = new ArrayBuffer(buffer.length);
      var bufView = new Uint8Array(buf);
      for (var i = 0; i < buffer.length; i++) {
        bufView[i] = buffer[i];
      }
      return buf;
    }
    function toBuffer(ab) {
      var buffer = new Buffer(ab.byteLength);
      var view = new Uint8Array(ab);
      for (var i = 0; i < buffer.length; ++i) {
        buffer[i] = view[i];
      }
      return buffer;
    }
    module2.exports = {
      SerialPort,
      list: SerialPortList,
      buffer2ArrayBuffer,
      used: []
    };
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports, module2) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module2.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// node_modules/debug/src/common.js
var require_common = __commonJS({
  "node_modules/debug/src/common.js"(exports, module2) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
          if (!debug.enabled) {
            return;
          }
          const self2 = debug;
          const curr = Number(new Date());
          const ms = curr - (prevTime || curr);
          self2.diff = ms;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self2, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self2, args);
          const logFn = self2.log || createDebug.log;
          logFn.apply(self2, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module2.exports = setup;
  }
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/debug/src/browser.js"(exports, module2) {
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module2.exports = require_common()(exports);
    var { formatters } = module2.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// node_modules/debug/src/node.js
var require_node = __commonJS({
  "node_modules/debug/src/node.js"(exports, module2) {
    var tty = require("tty");
    var util = require("util");
    exports.init = init;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.destroy = util.deprecate(() => {
    }, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    exports.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor = require_supports_color();
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error) {
    }
    exports.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
        return k.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    function formatArgs(args) {
      const { namespace: name, useColors: useColors2 } = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} [0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module2.exports.humanize(this.diff) + "[0m");
      } else {
        args[0] = getDate() + name + " " + args[0];
      }
    }
    function getDate() {
      if (exports.inspectOpts.hideDate) {
        return "";
      }
      return new Date().toISOString() + " ";
    }
    function log(...args) {
      return process.stderr.write(util.format(...args) + "\n");
    }
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function init(debug) {
      debug.inspectOpts = {};
      const keys = Object.keys(exports.inspectOpts);
      for (let i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    module2.exports = require_common()(exports);
    var { formatters } = module2.exports;
    formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
    };
    formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
  }
});

// node_modules/debug/src/index.js
var require_src = __commonJS({
  "node_modules/debug/src/index.js"(exports, module2) {
    if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
      module2.exports = require_browser();
    } else {
      module2.exports = require_node();
    }
  }
});

// node_modules/@serialport/stream/lib/index.js
var require_lib = __commonJS({
  "node_modules/@serialport/stream/lib/index.js"(exports, module2) {
    var stream = require("stream");
    var util = require("util");
    var debug = require_src()("serialport/stream");
    var DATABITS = Object.freeze([5, 6, 7, 8]);
    var STOPBITS = Object.freeze([1, 1.5, 2]);
    var PARITY = Object.freeze(["none", "even", "mark", "odd", "space"]);
    var FLOWCONTROLS = Object.freeze(["xon", "xoff", "xany", "rtscts"]);
    var defaultSettings = Object.freeze({
      autoOpen: true,
      endOnClose: false,
      baudRate: 9600,
      dataBits: 8,
      hupcl: true,
      lock: true,
      parity: "none",
      rtscts: false,
      stopBits: 1,
      xany: false,
      xoff: false,
      xon: false,
      highWaterMark: 64 * 1024
    });
    var defaultSetFlags = Object.freeze({
      brk: false,
      cts: false,
      dtr: true,
      dts: false,
      rts: true
    });
    function allocNewReadPool(poolSize) {
      const pool = Buffer.allocUnsafe(poolSize);
      pool.used = 0;
      return pool;
    }
    function SerialPort(path, options, openCallback) {
      if (!(this instanceof SerialPort)) {
        return new SerialPort(path, options, openCallback);
      }
      if (options instanceof Function) {
        openCallback = options;
        options = {};
      }
      const settings = { ...defaultSettings, ...options };
      stream.Duplex.call(this, {
        highWaterMark: settings.highWaterMark
      });
      const Binding = settings.binding || SerialPort.Binding;
      if (!Binding) {
        throw new TypeError('"Bindings" is invalid pass it as `options.binding` or set it on `SerialPort.Binding`');
      }
      if (!path) {
        throw new TypeError(`"path" is not defined: ${path}`);
      }
      if (settings.baudrate) {
        throw new TypeError(`"baudrate" is an unknown option, did you mean "baudRate"?`);
      }
      if (typeof settings.baudRate !== "number") {
        throw new TypeError(`"baudRate" must be a number: ${settings.baudRate}`);
      }
      if (DATABITS.indexOf(settings.dataBits) === -1) {
        throw new TypeError(`"databits" is invalid: ${settings.dataBits}`);
      }
      if (STOPBITS.indexOf(settings.stopBits) === -1) {
        throw new TypeError(`"stopbits" is invalid: ${settings.stopbits}`);
      }
      if (PARITY.indexOf(settings.parity) === -1) {
        throw new TypeError(`"parity" is invalid: ${settings.parity}`);
      }
      FLOWCONTROLS.forEach((control) => {
        if (typeof settings[control] !== "boolean") {
          throw new TypeError(`"${control}" is not boolean: ${settings[control]}`);
        }
      });
      const binding = new Binding({
        bindingOptions: settings.bindingOptions
      });
      Object.defineProperties(this, {
        binding: {
          enumerable: true,
          value: binding
        },
        path: {
          enumerable: true,
          value: path
        },
        settings: {
          enumerable: true,
          value: settings
        }
      });
      this.opening = false;
      this.closing = false;
      this._pool = allocNewReadPool(this.settings.highWaterMark);
      this._kMinPoolSpace = 128;
      if (this.settings.autoOpen) {
        this.open(openCallback);
      }
    }
    util.inherits(SerialPort, stream.Duplex);
    Object.defineProperties(SerialPort.prototype, {
      isOpen: {
        enumerable: true,
        get() {
          return this.binding.isOpen && !this.closing;
        }
      },
      baudRate: {
        enumerable: true,
        get() {
          return this.settings.baudRate;
        }
      }
    });
    SerialPort.prototype._error = function(error, callback) {
      if (callback) {
        callback.call(this, error);
      } else {
        this.emit("error", error);
      }
    };
    SerialPort.prototype._asyncError = function(error, callback) {
      process.nextTick(() => this._error(error, callback));
    };
    SerialPort.prototype.open = function(openCallback) {
      if (this.isOpen) {
        return this._asyncError(new Error("Port is already open"), openCallback);
      }
      if (this.opening) {
        return this._asyncError(new Error("Port is opening"), openCallback);
      }
      this.opening = true;
      debug("opening", `path: ${this.path}`);
      this.binding.open(this.path, this.settings).then(() => {
        debug("opened", `path: ${this.path}`);
        this.opening = false;
        this.emit("open");
        if (openCallback) {
          openCallback.call(this, null);
        }
      }, (err) => {
        this.opening = false;
        debug("Binding #open had an error", err);
        this._error(err, openCallback);
      });
    };
    SerialPort.prototype.update = function(options, callback) {
      if (typeof options !== "object") {
        throw TypeError('"options" is not an object');
      }
      if (!this.isOpen) {
        debug("update attempted, but port is not open");
        return this._asyncError(new Error("Port is not open"), callback);
      }
      const settings = { ...defaultSettings, ...options };
      this.settings.baudRate = settings.baudRate;
      debug("update", `baudRate: ${settings.baudRate}`);
      this.binding.update(this.settings).then(() => {
        debug("binding.update", "finished");
        if (callback) {
          callback.call(this, null);
        }
      }, (err) => {
        debug("binding.update", "error", err);
        return this._error(err, callback);
      });
    };
    var superWrite = SerialPort.prototype.write;
    SerialPort.prototype.write = function(data, encoding, callback) {
      if (Array.isArray(data)) {
        data = Buffer.from(data);
      }
      return superWrite.call(this, data, encoding, callback);
    };
    SerialPort.prototype._write = function(data, encoding, callback) {
      if (!this.isOpen) {
        return this.once("open", function afterOpenWrite() {
          this._write(data, encoding, callback);
        });
      }
      debug("_write", `${data.length} bytes of data`);
      this.binding.write(data).then(() => {
        debug("binding.write", "write finished");
        callback(null);
      }, (err) => {
        debug("binding.write", "error", err);
        if (!err.canceled) {
          this._disconnected(err);
        }
        callback(err);
      });
    };
    SerialPort.prototype._writev = function(data, callback) {
      debug("_writev", `${data.length} chunks of data`);
      const dataV = data.map((write) => write.chunk);
      this._write(Buffer.concat(dataV), null, callback);
    };
    SerialPort.prototype._read = function(bytesToRead) {
      if (!this.isOpen) {
        debug("_read", "queueing _read for after open");
        this.once("open", () => {
          this._read(bytesToRead);
        });
        return;
      }
      if (!this._pool || this._pool.length - this._pool.used < this._kMinPoolSpace) {
        debug("_read", "discarding the read buffer pool because it is below kMinPoolSpace");
        this._pool = allocNewReadPool(this.settings.highWaterMark);
      }
      const pool = this._pool;
      const toRead = Math.min(pool.length - pool.used, bytesToRead);
      const start = pool.used;
      debug("_read", `reading`, { start, toRead });
      this.binding.read(pool, start, toRead).then(({ bytesRead }) => {
        debug("binding.read", `finished`, { bytesRead });
        if (bytesRead === 0) {
          debug("binding.read", "Zero bytes read closing readable stream");
          this.push(null);
          return;
        }
        pool.used += bytesRead;
        this.push(pool.slice(start, start + bytesRead));
      }, (err) => {
        debug("binding.read", `error`, err);
        if (!err.canceled) {
          this._disconnected(err);
        }
        this._read(bytesToRead);
      });
    };
    SerialPort.prototype._disconnected = function(err) {
      if (!this.isOpen) {
        debug("disconnected aborted because already closed", err);
        return;
      }
      debug("disconnected", err);
      err.disconnected = true;
      this.close(null, err);
    };
    SerialPort.prototype.close = function(callback, disconnectError) {
      disconnectError = disconnectError || null;
      if (!this.isOpen) {
        debug("close attempted, but port is not open");
        return this._asyncError(new Error("Port is not open"), callback);
      }
      this.closing = true;
      debug("#close");
      this.binding.close().then(() => {
        this.closing = false;
        debug("binding.close", "finished");
        this.emit("close", disconnectError);
        if (this.settings.endOnClose) {
          this.emit("end");
        }
        if (callback) {
          callback.call(this, disconnectError);
        }
      }, (err) => {
        this.closing = false;
        debug("binding.close", "had an error", err);
        return this._error(err, callback);
      });
    };
    SerialPort.prototype.set = function(options, callback) {
      if (typeof options !== "object") {
        throw TypeError('"options" is not an object');
      }
      if (!this.isOpen) {
        debug("set attempted, but port is not open");
        return this._asyncError(new Error("Port is not open"), callback);
      }
      const settings = { ...defaultSetFlags, ...options };
      debug("#set", settings);
      this.binding.set(settings).then(() => {
        debug("binding.set", "finished");
        if (callback) {
          callback.call(this, null);
        }
      }, (err) => {
        debug("binding.set", "had an error", err);
        return this._error(err, callback);
      });
    };
    SerialPort.prototype.get = function(callback) {
      if (!this.isOpen) {
        debug("get attempted, but port is not open");
        return this._asyncError(new Error("Port is not open"), callback);
      }
      debug("#get");
      this.binding.get().then((status) => {
        debug("binding.get", "finished");
        if (callback) {
          callback.call(this, null, status);
        }
      }, (err) => {
        debug("binding.get", "had an error", err);
        return this._error(err, callback);
      });
    };
    SerialPort.prototype.flush = function(callback) {
      if (!this.isOpen) {
        debug("flush attempted, but port is not open");
        return this._asyncError(new Error("Port is not open"), callback);
      }
      debug("#flush");
      this.binding.flush().then(() => {
        debug("binding.flush", "finished");
        if (callback) {
          callback.call(this, null);
        }
      }, (err) => {
        debug("binding.flush", "had an error", err);
        return this._error(err, callback);
      });
    };
    SerialPort.prototype.drain = function(callback) {
      debug("drain");
      if (!this.isOpen) {
        debug("drain queuing on port open");
        return this.once("open", () => {
          this.drain(callback);
        });
      }
      this.binding.drain().then(() => {
        debug("binding.drain", "finished");
        if (callback) {
          callback.call(this, null);
        }
      }, (err) => {
        debug("binding.drain", "had an error", err);
        return this._error(err, callback);
      });
    };
    SerialPort.list = async function(callback) {
      debug(".list");
      if (!SerialPort.Binding) {
        throw new TypeError("No Binding set on `SerialPort.Binding`");
      }
      if (callback) {
        throw new TypeError("SerialPort.list no longer takes a callback and only returns a promise");
      }
      return SerialPort.Binding.list();
    };
    module2.exports = SerialPort;
  }
});

// node_modules/file-uri-to-path/index.js
var require_file_uri_to_path = __commonJS({
  "node_modules/file-uri-to-path/index.js"(exports, module2) {
    var sep = require("path").sep || "/";
    module2.exports = fileUriToPath;
    function fileUriToPath(uri) {
      if (typeof uri != "string" || uri.length <= 7 || uri.substring(0, 7) != "file://") {
        throw new TypeError("must pass in a file:// URI to convert to a file path");
      }
      var rest = decodeURI(uri.substring(7));
      var firstSlash = rest.indexOf("/");
      var host = rest.substring(0, firstSlash);
      var path = rest.substring(firstSlash + 1);
      if (host == "localhost")
        host = "";
      if (host) {
        host = sep + sep + host;
      }
      path = path.replace(/^(.+)\|/, "$1:");
      if (sep == "\\") {
        path = path.replace(/\//g, "\\");
      }
      if (/^.+\:/.test(path)) {
      } else {
        path = sep + path;
      }
      return host + path;
    }
  }
});

// node_modules/bindings/bindings.js
var require_bindings = __commonJS({
  "node_modules/bindings/bindings.js"(exports, module2) {
    var fs = require("fs");
    var path = require("path");
    var fileURLToPath = require_file_uri_to_path();
    var join = path.join;
    var dirname = path.dirname;
    var exists = fs.accessSync && function(path2) {
      try {
        fs.accessSync(path2);
      } catch (e) {
        return false;
      }
      return true;
    } || fs.existsSync || path.existsSync;
    var defaults = {
      arrow: process.env.NODE_BINDINGS_ARROW || " \u2192 ",
      compiled: process.env.NODE_BINDINGS_COMPILED_DIR || "compiled",
      platform: process.platform,
      arch: process.arch,
      nodePreGyp: "node-v" + process.versions.modules + "-" + process.platform + "-" + process.arch,
      version: process.versions.node,
      bindings: "bindings.node",
      try: [
        ["module_root", "build", "bindings"],
        ["module_root", "build", "Debug", "bindings"],
        ["module_root", "build", "Release", "bindings"],
        ["module_root", "out", "Debug", "bindings"],
        ["module_root", "Debug", "bindings"],
        ["module_root", "out", "Release", "bindings"],
        ["module_root", "Release", "bindings"],
        ["module_root", "build", "default", "bindings"],
        ["module_root", "compiled", "version", "platform", "arch", "bindings"],
        ["module_root", "addon-build", "release", "install-root", "bindings"],
        ["module_root", "addon-build", "debug", "install-root", "bindings"],
        ["module_root", "addon-build", "default", "install-root", "bindings"],
        ["module_root", "lib", "binding", "nodePreGyp", "bindings"]
      ]
    };
    function bindings(opts) {
      if (typeof opts == "string") {
        opts = { bindings: opts };
      } else if (!opts) {
        opts = {};
      }
      Object.keys(defaults).map(function(i2) {
        if (!(i2 in opts))
          opts[i2] = defaults[i2];
      });
      if (!opts.module_root) {
        opts.module_root = exports.getRoot(exports.getFileName());
      }
      if (path.extname(opts.bindings) != ".node") {
        opts.bindings += ".node";
      }
      var requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;
      var tries = [], i = 0, l = opts.try.length, n, b, err;
      for (; i < l; i++) {
        n = join.apply(null, opts.try[i].map(function(p) {
          return opts[p] || p;
        }));
        tries.push(n);
        try {
          b = opts.path ? requireFunc.resolve(n) : requireFunc(n);
          if (!opts.path) {
            b.path = n;
          }
          return b;
        } catch (e) {
          if (e.code !== "MODULE_NOT_FOUND" && e.code !== "QUALIFIED_PATH_RESOLUTION_FAILED" && !/not find/i.test(e.message)) {
            throw e;
          }
        }
      }
      err = new Error("Could not locate the bindings file. Tried:\n" + tries.map(function(a) {
        return opts.arrow + a;
      }).join("\n"));
      err.tries = tries;
      throw err;
    }
    module2.exports = exports = bindings;
    exports.getFileName = function getFileName(calling_file) {
      var origPST = Error.prepareStackTrace, origSTL = Error.stackTraceLimit, dummy = {}, fileName;
      Error.stackTraceLimit = 10;
      Error.prepareStackTrace = function(e, st) {
        for (var i = 0, l = st.length; i < l; i++) {
          fileName = st[i].getFileName();
          if (fileName !== __filename) {
            if (calling_file) {
              if (fileName !== calling_file) {
                return;
              }
            } else {
              return;
            }
          }
        }
      };
      Error.captureStackTrace(dummy);
      dummy.stack;
      Error.prepareStackTrace = origPST;
      Error.stackTraceLimit = origSTL;
      var fileSchema = "file://";
      if (fileName.indexOf(fileSchema) === 0) {
        fileName = fileURLToPath(fileName);
      }
      return fileName;
    };
    exports.getRoot = function getRoot(file) {
      var dir = dirname(file), prev;
      while (true) {
        if (dir === ".") {
          dir = process.cwd();
        }
        if (exists(join(dir, "package.json")) || exists(join(dir, "node_modules"))) {
          return dir;
        }
        if (prev === dir) {
          throw new Error('Could not find module root given file: "' + file + '". Do you have a `package.json` file? ');
        }
        prev = dir;
        dir = join(dir, "..");
      }
    };
  }
});

// node_modules/@serialport/binding-abstract/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/@serialport/binding-abstract/lib/index.js"(exports, module2) {
    var debug = require_src()("serialport/binding-abstract");
    var AbstractBinding = class {
      static async list() {
        debug("list");
      }
      constructor(opt = {}) {
        if (typeof opt !== "object") {
          throw new TypeError('"options" is not an object');
        }
      }
      async open(path, options) {
        if (!path) {
          throw new TypeError('"path" is not a valid port');
        }
        if (typeof options !== "object") {
          throw new TypeError('"options" is not an object');
        }
        debug("open");
        if (this.isOpen) {
          throw new Error("Already open");
        }
      }
      async close() {
        debug("close");
        if (!this.isOpen) {
          throw new Error("Port is not open");
        }
      }
      async read(buffer, offset, length) {
        if (!Buffer.isBuffer(buffer)) {
          throw new TypeError('"buffer" is not a Buffer');
        }
        if (typeof offset !== "number" || isNaN(length)) {
          throw new TypeError(`"offset" is not an integer got "${isNaN(length) ? "NaN" : typeof offset}"`);
        }
        if (typeof length !== "number" || isNaN(length)) {
          throw new TypeError(`"length" is not an integer got "${isNaN(length) ? "NaN" : typeof length}"`);
        }
        debug("read");
        if (buffer.length < offset + length) {
          throw new Error("buffer is too small");
        }
        if (!this.isOpen) {
          throw new Error("Port is not open");
        }
      }
      async write(buffer) {
        if (!Buffer.isBuffer(buffer)) {
          throw new TypeError('"buffer" is not a Buffer');
        }
        debug("write", buffer.length, "bytes");
        if (!this.isOpen) {
          debug("write", "error port is not open");
          throw new Error("Port is not open");
        }
      }
      async update(options) {
        if (typeof options !== "object") {
          throw TypeError('"options" is not an object');
        }
        if (typeof options.baudRate !== "number") {
          throw new TypeError('"options.baudRate" is not a number');
        }
        debug("update");
        if (!this.isOpen) {
          throw new Error("Port is not open");
        }
      }
      async set(options) {
        if (typeof options !== "object") {
          throw new TypeError('"options" is not an object');
        }
        debug("set");
        if (!this.isOpen) {
          throw new Error("Port is not open");
        }
      }
      async get() {
        debug("get");
        if (!this.isOpen) {
          throw new Error("Port is not open");
        }
      }
      async getBaudRate() {
        debug("getbaudRate");
        if (!this.isOpen) {
          throw new Error("Port is not open");
        }
      }
      async flush() {
        debug("flush");
        if (!this.isOpen) {
          throw new Error("Port is not open");
        }
      }
      async drain() {
        debug("drain");
        if (!this.isOpen) {
          throw new Error("Port is not open");
        }
      }
    };
    module2.exports = AbstractBinding;
  }
});

// node_modules/@serialport/bindings/lib/win32-sn-parser.js
var require_win32_sn_parser = __commonJS({
  "node_modules/@serialport/bindings/lib/win32-sn-parser.js"(exports, module2) {
    var PARSERS = [/USB\\(?:.+)\\(.+)/, /FTDIBUS\\(?:.+)\+(.+?)A?\\.+/];
    module2.exports = function(pnpId) {
      if (!pnpId) {
        return null;
      }
      for (const parser of PARSERS) {
        const sn = pnpId.match(parser);
        if (sn) {
          return sn[1];
        }
      }
      return null;
    };
  }
});

// node_modules/@serialport/bindings/lib/legacy.js
var require_legacy = __commonJS({
  "node_modules/@serialport/bindings/lib/legacy.js"(exports, module2) {
    var warningSent = false;
    var wrapWithHiddenComName = async (portsPromise) => {
      const ports = await portsPromise;
      return ports.map((port) => {
        const newPort = { ...port };
        return Object.defineProperties(newPort, {
          comName: {
            get() {
              if (!warningSent) {
                warningSent = true;
                console.warn(`"PortInfo.comName" has been deprecated. You should now use "PortInfo.path". The property will be removed in the next major release.`);
              }
              return newPort.path;
            },
            enumerable: false
          }
        });
      });
    };
    module2.exports = {
      wrapWithHiddenComName
    };
  }
});

// node_modules/@serialport/bindings/lib/win32.js
var require_win32 = __commonJS({
  "node_modules/@serialport/bindings/lib/win32.js"(exports, module2) {
    var binding = require_bindings()("bindings.node");
    var AbstractBinding = require_lib2();
    var { promisify } = require("util");
    var serialNumParser = require_win32_sn_parser();
    var asyncList = promisify(binding.list);
    var asyncOpen = promisify(binding.open);
    var asyncClose = promisify(binding.close);
    var asyncRead = promisify(binding.read);
    var asyncWrite = promisify(binding.write);
    var asyncUpdate = promisify(binding.update);
    var asyncSet = promisify(binding.set);
    var asyncGet = promisify(binding.get);
    var asyncGetBaudRate = promisify(binding.getBaudRate);
    var asyncDrain = promisify(binding.drain);
    var asyncFlush = promisify(binding.flush);
    var { wrapWithHiddenComName } = require_legacy();
    var WindowsBinding = class extends AbstractBinding {
      static async list() {
        const ports = await asyncList();
        return wrapWithHiddenComName(ports.map((port) => {
          if (port.pnpId && !port.serialNumber) {
            const serialNumber = serialNumParser(port.pnpId);
            if (serialNumber) {
              return {
                ...port,
                serialNumber
              };
            }
          }
          return port;
        }));
      }
      constructor(opt = {}) {
        super(opt);
        this.bindingOptions = { ...opt.bindingOptions };
        this.fd = null;
        this.writeOperation = null;
      }
      get isOpen() {
        return this.fd !== null;
      }
      async open(path, options) {
        await super.open(path, options);
        this.openOptions = { ...this.bindingOptions, ...options };
        const fd = await asyncOpen(path, this.openOptions);
        this.fd = fd;
      }
      async close() {
        await super.close();
        const fd = this.fd;
        this.fd = null;
        return asyncClose(fd);
      }
      async read(buffer, offset, length) {
        await super.read(buffer, offset, length);
        try {
          const bytesRead = await asyncRead(this.fd, buffer, offset, length);
          return { bytesRead, buffer };
        } catch (err) {
          if (!this.isOpen) {
            err.canceled = true;
          }
          throw err;
        }
      }
      async write(buffer) {
        this.writeOperation = super.write(buffer).then(async () => {
          if (buffer.length === 0) {
            return;
          }
          await asyncWrite(this.fd, buffer);
          this.writeOperation = null;
        });
        return this.writeOperation;
      }
      async update(options) {
        await super.update(options);
        return asyncUpdate(this.fd, options);
      }
      async set(options) {
        await super.set(options);
        return asyncSet(this.fd, options);
      }
      async get() {
        await super.get();
        return asyncGet(this.fd);
      }
      async getBaudRate() {
        await super.get();
        return asyncGetBaudRate(this.fd);
      }
      async drain() {
        await super.drain();
        await this.writeOperation;
        return asyncDrain(this.fd);
      }
      async flush() {
        await super.flush();
        return asyncFlush(this.fd);
      }
    };
    module2.exports = WindowsBinding;
  }
});

// node_modules/@serialport/bindings/lib/poller.js
var require_poller = __commonJS({
  "node_modules/@serialport/bindings/lib/poller.js"(exports, module2) {
    var debug = require_src();
    var logger = debug("serialport/bindings/poller");
    var EventEmitter6 = require("events");
    var PollerBindings = require_bindings()("bindings.node").Poller;
    var EVENTS = {
      UV_READABLE: 1,
      UV_WRITABLE: 2,
      UV_DISCONNECT: 4
    };
    function handleEvent(error, eventFlag) {
      if (error) {
        logger("error", error);
        this.emit("readable", error);
        this.emit("writable", error);
        this.emit("disconnect", error);
        return;
      }
      if (eventFlag & EVENTS.UV_READABLE) {
        logger('received "readable"');
        this.emit("readable", null);
      }
      if (eventFlag & EVENTS.UV_WRITABLE) {
        logger('received "writable"');
        this.emit("writable", null);
      }
      if (eventFlag & EVENTS.UV_DISCONNECT) {
        logger('received "disconnect"');
        this.emit("disconnect", null);
      }
    }
    var Poller = class extends EventEmitter6 {
      constructor(fd, FDPoller = PollerBindings) {
        logger("Creating poller");
        super();
        this.poller = new FDPoller(fd, handleEvent.bind(this));
      }
      once(event, callback) {
        switch (event) {
          case "readable":
            this.poll(EVENTS.UV_READABLE);
            break;
          case "writable":
            this.poll(EVENTS.UV_WRITABLE);
            break;
          case "disconnect":
            this.poll(EVENTS.UV_DISCONNECT);
            break;
        }
        return super.once(event, callback);
      }
      poll(eventFlag) {
        eventFlag = eventFlag || 0;
        if (eventFlag & EVENTS.UV_READABLE) {
          logger('Polling for "readable"');
        }
        if (eventFlag & EVENTS.UV_WRITABLE) {
          logger('Polling for "writable"');
        }
        if (eventFlag & EVENTS.UV_DISCONNECT) {
          logger('Polling for "disconnect"');
        }
        this.poller.poll(eventFlag);
      }
      stop() {
        logger("Stopping poller");
        this.poller.stop();
        this.emitCanceled();
      }
      destroy() {
        logger("Destroying poller");
        this.poller.destroy();
        this.emitCanceled();
      }
      emitCanceled() {
        const err = new Error("Canceled");
        err.canceled = true;
        this.emit("readable", err);
        this.emit("writable", err);
        this.emit("disconnect", err);
      }
    };
    Poller.EVENTS = EVENTS;
    module2.exports = Poller;
  }
});

// node_modules/@serialport/bindings/lib/unix-read.js
var require_unix_read = __commonJS({
  "node_modules/@serialport/bindings/lib/unix-read.js"(exports, module2) {
    var fs = require("fs");
    var debug = require_src();
    var logger = debug("serialport/bindings/unixRead");
    var { promisify } = require("util");
    var readAsync = promisify(fs.read);
    var readable = (binding) => {
      return new Promise((resolve, reject) => {
        binding.poller.once("readable", (err) => err ? reject(err) : resolve());
      });
    };
    var unixRead = async ({ binding, buffer, offset, length, fsReadAsync = readAsync }) => {
      logger("Starting read");
      if (!binding.isOpen) {
        const err = new Error("Port is not open");
        err.canceled = true;
        throw err;
      }
      try {
        const { bytesRead } = await fsReadAsync(binding.fd, buffer, offset, length, null);
        if (bytesRead === 0) {
          return unixRead({ binding, buffer, offset, length, fsReadAsync });
        }
        logger("Finished read", bytesRead, "bytes");
        return { bytesRead, buffer };
      } catch (err) {
        logger("read error", err);
        if (err.code === "EAGAIN" || err.code === "EWOULDBLOCK" || err.code === "EINTR") {
          if (!binding.isOpen) {
            const err2 = new Error("Port is not open");
            err2.canceled = true;
            throw err2;
          }
          logger("waiting for readable because of code:", err.code);
          await readable(binding);
          return unixRead({ binding, buffer, offset, length, fsReadAsync });
        }
        const disconnectError = err.code === "EBADF" || err.code === "ENXIO" || err.code === "UNKNOWN" || err.errno === -1;
        if (disconnectError) {
          err.canceled = true;
          logger("disconnecting", err);
        }
        throw err;
      }
    };
    module2.exports = unixRead;
  }
});

// node_modules/@serialport/bindings/lib/unix-write.js
var require_unix_write = __commonJS({
  "node_modules/@serialport/bindings/lib/unix-write.js"(exports, module2) {
    var fs = require("fs");
    var debug = require_src();
    var logger = debug("serialport/bindings/unixWrite");
    var { promisify } = require("util");
    var writeAsync = promisify(fs.write);
    var writable = (binding) => {
      return new Promise((resolve, reject) => {
        binding.poller.once("writable", (err) => err ? reject(err) : resolve());
      });
    };
    var unixWrite = async ({ binding, buffer, offset = 0, fsWriteAsync = writeAsync }) => {
      const bytesToWrite = buffer.length - offset;
      logger("Starting write", buffer.length, "bytes offset", offset, "bytesToWrite", bytesToWrite);
      if (!binding.isOpen) {
        throw new Error("Port is not open");
      }
      try {
        const { bytesWritten } = await fsWriteAsync(binding.fd, buffer, offset, bytesToWrite);
        logger("write returned: wrote", bytesWritten, "bytes");
        if (bytesWritten + offset < buffer.length) {
          if (!binding.isOpen) {
            throw new Error("Port is not open");
          }
          return unixWrite({ binding, buffer, offset: bytesWritten + offset, fsWriteAsync });
        }
        logger("Finished writing", bytesWritten + offset, "bytes");
      } catch (err) {
        logger("write errored", err);
        if (err.code === "EAGAIN" || err.code === "EWOULDBLOCK" || err.code === "EINTR") {
          if (!binding.isOpen) {
            throw new Error("Port is not open");
          }
          logger("waiting for writable because of code:", err.code);
          await writable(binding);
          return unixWrite({ binding, buffer, offset, fsWriteAsync });
        }
        const disconnectError = err.code === "EBADF" || err.code === "ENXIO" || err.code === "UNKNOWN" || err.errno === -1;
        if (disconnectError) {
          err.disconnect = true;
          logger("disconnecting", err);
        }
        logger("error", err);
        throw err;
      }
    };
    module2.exports = unixWrite;
  }
});

// node_modules/@serialport/bindings/lib/darwin.js
var require_darwin = __commonJS({
  "node_modules/@serialport/bindings/lib/darwin.js"(exports, module2) {
    var { promisify } = require("util");
    var binding = require_bindings()("bindings.node");
    var AbstractBinding = require_lib2();
    var Poller = require_poller();
    var unixRead = require_unix_read();
    var unixWrite = require_unix_write();
    var { wrapWithHiddenComName } = require_legacy();
    var defaultBindingOptions = Object.freeze({
      vmin: 1,
      vtime: 0
    });
    var asyncList = promisify(binding.list);
    var asyncOpen = promisify(binding.open);
    var asyncClose = promisify(binding.close);
    var asyncUpdate = promisify(binding.update);
    var asyncSet = promisify(binding.set);
    var asyncGet = promisify(binding.get);
    var asyncGetBaudRate = promisify(binding.getBaudRate);
    var asyncDrain = promisify(binding.drain);
    var asyncFlush = promisify(binding.flush);
    var DarwinBinding = class extends AbstractBinding {
      static list() {
        return wrapWithHiddenComName(asyncList());
      }
      constructor(opt = {}) {
        super(opt);
        this.bindingOptions = { ...defaultBindingOptions, ...opt.bindingOptions };
        this.fd = null;
        this.writeOperation = null;
      }
      get isOpen() {
        return this.fd !== null;
      }
      async open(path, options) {
        await super.open(path, options);
        this.openOptions = { ...this.bindingOptions, ...options };
        const fd = await asyncOpen(path, this.openOptions);
        this.fd = fd;
        this.poller = new Poller(fd);
      }
      async close() {
        await super.close();
        const fd = this.fd;
        this.poller.stop();
        this.poller.destroy();
        this.poller = null;
        this.openOptions = null;
        this.fd = null;
        return asyncClose(fd);
      }
      async read(buffer, offset, length) {
        await super.read(buffer, offset, length);
        return unixRead({ binding: this, buffer, offset, length });
      }
      async write(buffer) {
        this.writeOperation = super.write(buffer).then(async () => {
          if (buffer.length === 0) {
            return;
          }
          await unixWrite({ binding: this, buffer });
          this.writeOperation = null;
        });
        return this.writeOperation;
      }
      async update(options) {
        await super.update(options);
        return asyncUpdate(this.fd, options);
      }
      async set(options) {
        await super.set(options);
        return asyncSet(this.fd, options);
      }
      async get() {
        await super.get();
        return asyncGet(this.fd);
      }
      async getBaudRate() {
        await super.get();
        return asyncGetBaudRate(this.fd);
      }
      async drain() {
        await super.drain();
        await this.writeOperation;
        return asyncDrain(this.fd);
      }
      async flush() {
        await super.flush();
        return asyncFlush(this.fd);
      }
    };
    module2.exports = DarwinBinding;
  }
});

// node_modules/@serialport/parser-delimiter/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/@serialport/parser-delimiter/lib/index.js"(exports, module2) {
    var { Transform } = require("stream");
    var DelimiterParser = class extends Transform {
      constructor(options = {}) {
        super(options);
        if (options.delimiter === void 0) {
          throw new TypeError('"delimiter" is not a bufferable object');
        }
        if (options.delimiter.length === 0) {
          throw new TypeError('"delimiter" has a 0 or undefined length');
        }
        this.includeDelimiter = options.includeDelimiter !== void 0 ? options.includeDelimiter : false;
        this.delimiter = Buffer.from(options.delimiter);
        this.buffer = Buffer.alloc(0);
      }
      _transform(chunk, encoding, cb) {
        let data = Buffer.concat([this.buffer, chunk]);
        let position;
        while ((position = data.indexOf(this.delimiter)) !== -1) {
          this.push(data.slice(0, position + (this.includeDelimiter ? this.delimiter.length : 0)));
          data = data.slice(position + this.delimiter.length);
        }
        this.buffer = data;
        cb();
      }
      _flush(cb) {
        this.push(this.buffer);
        this.buffer = Buffer.alloc(0);
        cb();
      }
    };
    module2.exports = DelimiterParser;
  }
});

// node_modules/@serialport/parser-readline/lib/index.js
var require_lib4 = __commonJS({
  "node_modules/@serialport/parser-readline/lib/index.js"(exports, module2) {
    var DelimiterParser = require_lib3();
    var ReadLineParser = class extends DelimiterParser {
      constructor(options) {
        const opts = {
          delimiter: Buffer.from("\n", "utf8"),
          encoding: "utf8",
          ...options
        };
        if (typeof opts.delimiter === "string") {
          opts.delimiter = Buffer.from(opts.delimiter, opts.encoding);
        }
        super(opts);
      }
    };
    module2.exports = ReadLineParser;
  }
});

// node_modules/@serialport/bindings/lib/linux-list.js
var require_linux_list = __commonJS({
  "node_modules/@serialport/bindings/lib/linux-list.js"(exports, module2) {
    var childProcess = require("child_process");
    var Readline = require_lib4();
    function checkPathOfDevice(path) {
      return /(tty(S|WCH|ACM|USB|AMA|MFD|O|XRUSB)|rfcomm)/.test(path) && path;
    }
    function propName(name) {
      return {
        DEVNAME: "path",
        ID_VENDOR_ENC: "manufacturer",
        ID_SERIAL_SHORT: "serialNumber",
        ID_VENDOR_ID: "vendorId",
        ID_MODEL_ID: "productId",
        DEVLINKS: "pnpId"
      }[name.toUpperCase()];
    }
    function decodeHexEscape(str) {
      return str.replace(/\\x([a-fA-F0-9]{2})/g, (a, b) => {
        return String.fromCharCode(parseInt(b, 16));
      });
    }
    function propVal(name, val) {
      if (name === "pnpId") {
        const match = val.match(/\/by-id\/([^\s]+)/);
        return match && match[1] || void 0;
      }
      if (name === "manufacturer") {
        return decodeHexEscape(val);
      }
      if (/^0x/.test(val)) {
        return val.substr(2);
      }
      return val;
    }
    function listLinux() {
      return new Promise((resolve, reject) => {
        const ports = [];
        const ude = childProcess.spawn("udevadm", ["info", "-e"]);
        const lines = ude.stdout.pipe(new Readline());
        ude.on("close", (code) => code && reject(new Error(`Error listing ports udevadm exited with error code: ${code}`)));
        ude.on("error", reject);
        lines.on("error", reject);
        let port = {};
        let skipPort = false;
        lines.on("data", (line) => {
          const lineType = line.slice(0, 1);
          const data = line.slice(3);
          if (lineType === "P") {
            port = {
              manufacturer: void 0,
              serialNumber: void 0,
              pnpId: void 0,
              locationId: void 0,
              vendorId: void 0,
              productId: void 0
            };
            skipPort = false;
            return;
          }
          if (skipPort) {
            return;
          }
          if (lineType === "N") {
            if (checkPathOfDevice(data)) {
              ports.push(port);
            } else {
              skipPort = true;
            }
            return;
          }
          if (lineType === "E") {
            const keyValue = data.match(/^(.+)=(.*)/);
            if (!keyValue) {
              return;
            }
            const key = propName(keyValue[1]);
            if (!key) {
              return;
            }
            port[key] = propVal(key, keyValue[2]);
          }
        });
        lines.on("finish", () => resolve(ports));
      });
    }
    module2.exports = listLinux;
  }
});

// node_modules/@serialport/bindings/lib/linux.js
var require_linux = __commonJS({
  "node_modules/@serialport/bindings/lib/linux.js"(exports, module2) {
    var { promisify } = require("util");
    var binding = require_bindings()("bindings.node");
    var AbstractBinding = require_lib2();
    var linuxList = require_linux_list();
    var Poller = require_poller();
    var unixRead = require_unix_read();
    var unixWrite = require_unix_write();
    var { wrapWithHiddenComName } = require_legacy();
    var defaultBindingOptions = Object.freeze({
      vmin: 1,
      vtime: 0
    });
    var asyncOpen = promisify(binding.open);
    var asyncClose = promisify(binding.close);
    var asyncUpdate = promisify(binding.update);
    var asyncSet = promisify(binding.set);
    var asyncGet = promisify(binding.get);
    var asyncGetBaudRate = promisify(binding.getBaudRate);
    var asyncDrain = promisify(binding.drain);
    var asyncFlush = promisify(binding.flush);
    var LinuxBinding = class extends AbstractBinding {
      static list() {
        return wrapWithHiddenComName(linuxList());
      }
      constructor(opt = {}) {
        super(opt);
        this.bindingOptions = { ...defaultBindingOptions, ...opt.bindingOptions };
        this.fd = null;
        this.writeOperation = null;
      }
      get isOpen() {
        return this.fd !== null;
      }
      async open(path, options) {
        await super.open(path, options);
        this.openOptions = { ...this.bindingOptions, ...options };
        const fd = await asyncOpen(path, this.openOptions);
        this.fd = fd;
        this.poller = new Poller(fd);
      }
      async close() {
        await super.close();
        const fd = this.fd;
        this.poller.stop();
        this.poller.destroy();
        this.poller = null;
        this.openOptions = null;
        this.fd = null;
        return asyncClose(fd);
      }
      async read(buffer, offset, length) {
        await super.read(buffer, offset, length);
        return unixRead({ binding: this, buffer, offset, length });
      }
      async write(buffer) {
        this.writeOperation = super.write(buffer).then(async () => {
          if (buffer.length === 0) {
            return;
          }
          await unixWrite({ binding: this, buffer });
          this.writeOperation = null;
        });
        return this.writeOperation;
      }
      async update(options) {
        await super.update(options);
        return asyncUpdate(this.fd, options);
      }
      async set(options) {
        await super.set(options);
        return asyncSet(this.fd, options);
      }
      async get() {
        await super.get();
        return asyncGet(this.fd);
      }
      async getBaudRate() {
        await super.get();
        return asyncGetBaudRate(this.fd);
      }
      async drain() {
        await super.drain();
        await this.writeOperation;
        return asyncDrain(this.fd);
      }
      async flush() {
        await super.flush();
        return asyncFlush(this.fd);
      }
    };
    module2.exports = LinuxBinding;
  }
});

// node_modules/@serialport/bindings/lib/index.js
var require_lib5 = __commonJS({
  "node_modules/@serialport/bindings/lib/index.js"(exports, module2) {
    var debug = require_src()("serialport/bindings");
    switch (process.platform) {
      case "win32":
        debug("loading WindowsBinding");
        module2.exports = require_win32();
        break;
      case "darwin":
        debug("loading DarwinBinding");
        module2.exports = require_darwin();
        break;
      default:
        debug("loading LinuxBinding");
        module2.exports = require_linux();
    }
  }
});

// node_modules/@serialport/parser-byte-length/lib/index.js
var require_lib6 = __commonJS({
  "node_modules/@serialport/parser-byte-length/lib/index.js"(exports, module2) {
    var { Transform } = require("stream");
    var ByteLengthParser = class extends Transform {
      constructor(options = {}) {
        super(options);
        if (typeof options.length !== "number") {
          throw new TypeError('"length" is not a number');
        }
        if (options.length < 1) {
          throw new TypeError('"length" is not greater than 0');
        }
        this.length = options.length;
        this.position = 0;
        this.buffer = Buffer.alloc(this.length);
      }
      _transform(chunk, encoding, cb) {
        let cursor = 0;
        while (cursor < chunk.length) {
          this.buffer[this.position] = chunk[cursor];
          cursor++;
          this.position++;
          if (this.position === this.length) {
            this.push(this.buffer);
            this.buffer = Buffer.alloc(this.length);
            this.position = 0;
          }
        }
        cb();
      }
      _flush(cb) {
        this.push(this.buffer.slice(0, this.position));
        this.buffer = Buffer.alloc(this.length);
        cb();
      }
    };
    module2.exports = ByteLengthParser;
  }
});

// node_modules/@serialport/parser-cctalk/lib/index.js
var require_lib7 = __commonJS({
  "node_modules/@serialport/parser-cctalk/lib/index.js"(exports, module2) {
    var { Transform } = require("stream");
    var CCTalkParser = class extends Transform {
      constructor(maxDelayBetweenBytesMs = 50) {
        super();
        this.array = [];
        this.cursor = 0;
        this.lastByteFetchTime = 0;
        this.maxDelayBetweenBytesMs = maxDelayBetweenBytesMs;
      }
      _transform(buffer, _, cb) {
        if (this.maxDelayBetweenBytesMs > 0) {
          const now = Date.now();
          if (now - this.lastByteFetchTime > this.maxDelayBetweenBytesMs) {
            this.array = [];
            this.cursor = 0;
          }
          this.lastByteFetchTime = now;
        }
        this.cursor += buffer.length;
        Array.from(buffer).map((byte) => this.array.push(byte));
        while (this.cursor > 1 && this.cursor >= this.array[1] + 5) {
          const FullMsgLength = this.array[1] + 5;
          const frame = Buffer.from(this.array.slice(0, FullMsgLength));
          this.array = this.array.slice(frame.length, this.array.length);
          this.cursor -= FullMsgLength;
          this.push(frame);
        }
        cb();
      }
    };
    module2.exports = CCTalkParser;
  }
});

// node_modules/@serialport/parser-ready/lib/index.js
var require_lib8 = __commonJS({
  "node_modules/@serialport/parser-ready/lib/index.js"(exports, module2) {
    var { Transform } = require("stream");
    var ReadyParser = class extends Transform {
      constructor(options = {}) {
        if (options.delimiter === void 0) {
          throw new TypeError('"delimiter" is not a bufferable object');
        }
        if (options.delimiter.length === 0) {
          throw new TypeError('"delimiter" has a 0 or undefined length');
        }
        super(options);
        this.delimiter = Buffer.from(options.delimiter);
        this.readOffset = 0;
        this.ready = false;
      }
      _transform(chunk, encoding, cb) {
        if (this.ready) {
          this.push(chunk);
          return cb();
        }
        const delimiter = this.delimiter;
        let chunkOffset = 0;
        while (this.readOffset < delimiter.length && chunkOffset < chunk.length) {
          if (delimiter[this.readOffset] === chunk[chunkOffset]) {
            this.readOffset++;
          } else {
            this.readOffset = 0;
          }
          chunkOffset++;
        }
        if (this.readOffset === delimiter.length) {
          this.ready = true;
          this.emit("ready");
          const chunkRest = chunk.slice(chunkOffset);
          if (chunkRest.length > 0) {
            this.push(chunkRest);
          }
        }
        cb();
      }
    };
    module2.exports = ReadyParser;
  }
});

// node_modules/@serialport/parser-regex/lib/index.js
var require_lib9 = __commonJS({
  "node_modules/@serialport/parser-regex/lib/index.js"(exports, module2) {
    var { Transform } = require("stream");
    var RegexParser = class extends Transform {
      constructor(options) {
        const opts = {
          encoding: "utf8",
          ...options
        };
        if (opts.regex === void 0) {
          throw new TypeError('"options.regex" must be a regular expression pattern or object');
        }
        if (!(opts.regex instanceof RegExp)) {
          opts.regex = new RegExp(opts.regex);
        }
        super(opts);
        this.regex = opts.regex;
        this.data = "";
      }
      _transform(chunk, encoding, cb) {
        const data = this.data + chunk;
        const parts = data.split(this.regex);
        this.data = parts.pop();
        parts.forEach((part) => {
          this.push(part);
        });
        cb();
      }
      _flush(cb) {
        this.push(this.data);
        this.data = "";
        cb();
      }
    };
    module2.exports = RegexParser;
  }
});

// node_modules/serialport/lib/parsers.js
var require_parsers = __commonJS({
  "node_modules/serialport/lib/parsers.js"(exports, module2) {
    module2.exports = {
      ByteLength: require_lib6(),
      CCTalk: require_lib7(),
      Delimiter: require_lib3(),
      Readline: require_lib4(),
      Ready: require_lib8(),
      Regex: require_lib9()
    };
  }
});

// node_modules/serialport/lib/index.js
var require_lib10 = __commonJS({
  "node_modules/serialport/lib/index.js"(exports, module2) {
    var SerialPort = require_lib();
    var Binding = require_lib5();
    var parsers = require_parsers();
    SerialPort.Binding = Binding;
    SerialPort.parsers = parsers;
    module2.exports = SerialPort;
  }
});

// node_modules/firmata-io/lib/encoder7bit.js
var require_encoder7bit = __commonJS({
  "node_modules/firmata-io/lib/encoder7bit.js"(exports, module2) {
    "use strict";
    module2.exports = {
      to7BitArray(data) {
        let shift = 0;
        let previous = 0;
        const output = [];
        for (let byte of data) {
          if (shift === 0) {
            output.push(byte & 127);
            shift++;
            previous = byte >> 7;
          } else {
            output.push(byte << shift & 127 | previous);
            if (shift === 6) {
              output.push(byte >> 1);
              shift = 0;
            } else {
              shift++;
              previous = byte >> 8 - shift;
            }
          }
        }
        if (shift > 0) {
          output.push(previous);
        }
        return output;
      },
      from7BitArray(encoded) {
        const expectedBytes = encoded.length * 7 >> 3;
        const decoded = [];
        for (let i = 0; i < expectedBytes; i++) {
          const j = i << 3;
          const pos = j / 7 >>> 0;
          const shift = j % 7;
          decoded[i] = encoded[pos] >> shift | encoded[pos + 1] << 7 - shift & 255;
        }
        return decoded;
      }
    };
  }
});

// node_modules/firmata-io/lib/onewireutils.js
var require_onewireutils = __commonJS({
  "node_modules/firmata-io/lib/onewireutils.js"(exports, module2) {
    "use strict";
    var Encoder7Bit = require_encoder7bit();
    var OneWireUtils = {
      crc8(data) {
        let crc = 0;
        for (let inbyte of data) {
          for (let n = 8; n; n--) {
            const mix = (crc ^ inbyte) & 1;
            crc >>= 1;
            if (mix) {
              crc ^= 140;
            }
            inbyte >>= 1;
          }
        }
        return crc;
      },
      readDevices(data) {
        const deviceBytes = Encoder7Bit.from7BitArray(data);
        const devices = [];
        for (let i = 0; i < deviceBytes.length; i += 8) {
          const device = deviceBytes.slice(i, i + 8);
          if (device.length !== 8) {
            continue;
          }
          const check = OneWireUtils.crc8(device.slice(0, 7));
          if (check !== device[7]) {
            console.error("ROM invalid!");
          }
          devices.push(device);
        }
        return devices;
      }
    };
    module2.exports = OneWireUtils;
  }
});

// node_modules/firmata-io/lib/firmata.js
var require_firmata = __commonJS({
  "node_modules/firmata-io/lib/firmata.js"(exports, module2) {
    "use strict";
    var Emitter = require("events");
    var Encoder7Bit = require_encoder7bit();
    var OneWire = require_onewireutils();
    var i2cActive = new Map();
    var ANALOG_MAPPING_QUERY = 105;
    var ANALOG_MAPPING_RESPONSE = 106;
    var ANALOG_MESSAGE = 224;
    var CAPABILITY_QUERY = 107;
    var CAPABILITY_RESPONSE = 108;
    var DIGITAL_MESSAGE = 144;
    var END_SYSEX = 247;
    var EXTENDED_ANALOG = 111;
    var I2C_CONFIG = 120;
    var I2C_REPLY = 119;
    var I2C_REQUEST = 118;
    var I2C_READ_MASK = 24;
    var ONEWIRE_CONFIG_REQUEST = 65;
    var ONEWIRE_DATA = 115;
    var ONEWIRE_DELAY_REQUEST_BIT = 16;
    var ONEWIRE_READ_REPLY = 67;
    var ONEWIRE_READ_REQUEST_BIT = 8;
    var ONEWIRE_RESET_REQUEST_BIT = 1;
    var ONEWIRE_SEARCH_ALARMS_REPLY = 69;
    var ONEWIRE_SEARCH_ALARMS_REQUEST = 68;
    var ONEWIRE_SEARCH_REPLY = 66;
    var ONEWIRE_SEARCH_REQUEST = 64;
    var ONEWIRE_WITHDATA_REQUEST_BITS = 60;
    var ONEWIRE_WRITE_REQUEST_BIT = 32;
    var PIN_MODE = 244;
    var PIN_STATE_QUERY = 109;
    var PIN_STATE_RESPONSE = 110;
    var PING_READ = 117;
    var QUERY_FIRMWARE = 121;
    var REPORT_ANALOG = 192;
    var REPORT_DIGITAL = 208;
    var REPORT_VERSION = 249;
    var SAMPLING_INTERVAL = 122;
    var SERVO_CONFIG = 112;
    var SERIAL_MESSAGE = 96;
    var SERIAL_CONFIG = 16;
    var SERIAL_WRITE = 32;
    var SERIAL_READ = 48;
    var SERIAL_REPLY = 64;
    var SERIAL_CLOSE = 80;
    var SERIAL_FLUSH = 96;
    var SERIAL_LISTEN = 112;
    var START_SYSEX = 240;
    var STEPPER = 114;
    var ACCELSTEPPER = 98;
    var STRING_DATA = 113;
    var SYSTEM_RESET = 255;
    var MAX_PIN_COUNT = 128;
    var SYM_sendOneWireSearch = Symbol("sendOneWireSearch");
    var SYM_sendOneWireRequest = Symbol("sendOneWireRequest");
    var MIDI_RESPONSE = {
      [REPORT_VERSION](board) {
        board.version.major = board.buffer[1];
        board.version.minor = board.buffer[2];
        board.emit("reportversion");
      },
      [ANALOG_MESSAGE](board) {
        const pin = board.buffer[0] & 15;
        const value = board.buffer[1] | board.buffer[2] << 7;
        if (board.pins[board.analogPins[pin]]) {
          board.pins[board.analogPins[pin]].value = value;
        }
        board.emit(`analog-read-${pin}`, value);
        board.emit("analog-read", {
          pin,
          value
        });
      },
      [DIGITAL_MESSAGE](board) {
        const port = board.buffer[0] & 15;
        const portValue = board.buffer[1] | board.buffer[2] << 7;
        for (let i = 0; i < 8; i++) {
          const pin = 8 * port + i;
          const pinRec = board.pins[pin];
          const bit = 1 << i;
          if (pinRec && (pinRec.mode === board.MODES.INPUT || pinRec.mode === board.MODES.PULLUP)) {
            pinRec.value = portValue >> (i & 7) & 1;
            if (pinRec.value) {
              board.ports[port] |= bit;
            } else {
              board.ports[port] &= ~bit;
            }
            let { value } = pinRec;
            board.emit(`digital-read-${pin}`, value);
            board.emit("digital-read", {
              pin,
              value
            });
          }
        }
      }
    };
    var SYSEX_RESPONSE = {
      [QUERY_FIRMWARE](board) {
        const length = board.buffer.length - 2;
        const buffer = Buffer.alloc(Math.round((length - 4) / 2));
        let byte = 0;
        let offset = 0;
        for (let i = 4; i < length; i += 2) {
          byte = (board.buffer[i] & 127 | (board.buffer[i + 1] & 127) << 7) & 255;
          buffer.writeUInt8(byte, offset++);
        }
        board.firmware = {
          name: buffer.toString(),
          version: {
            major: board.buffer[2],
            minor: board.buffer[3]
          }
        }, board.emit("queryfirmware");
      },
      [CAPABILITY_RESPONSE](board) {
        const modes = Object.keys(board.MODES).map((key) => board.MODES[key]);
        let mode, resolution;
        let capability = 0;
        function supportedModes(capability2) {
          return modes.reduce((accum, mode2) => {
            if (capability2 & 1 << mode2) {
              accum.push(mode2);
            }
            return accum;
          }, []);
        }
        if (!board.pins.length) {
          for (let i = 2, n = 0; i < board.buffer.length - 1; i++) {
            if (board.buffer[i] === 127) {
              board.pins.push({
                supportedModes: supportedModes(capability),
                mode: void 0,
                value: 0,
                report: 1
              });
              capability = 0;
              n = 0;
              continue;
            }
            if (n === 0) {
              mode = board.buffer[i];
              resolution = (1 << board.buffer[i + 1]) - 1;
              capability |= 1 << mode;
              if (mode === board.MODES.ANALOG && board.RESOLUTION.ADC === null) {
                board.RESOLUTION.ADC = resolution;
              }
              if (mode === board.MODES.PWM && board.RESOLUTION.PWM === null) {
                board.RESOLUTION.PWM = resolution;
              }
            }
            n ^= 1;
          }
        }
        board.emit("capability-query");
      },
      [PIN_STATE_RESPONSE](board) {
        let pin = board.buffer[2];
        board.pins[pin].mode = board.buffer[3];
        board.pins[pin].state = board.buffer[4];
        if (board.buffer.length > 6) {
          board.pins[pin].state |= board.buffer[5] << 7;
        }
        if (board.buffer.length > 7) {
          board.pins[pin].state |= board.buffer[6] << 14;
        }
        board.emit(`pin-state-${pin}`);
      },
      [ANALOG_MAPPING_RESPONSE](board) {
        let pin = 0;
        let currentValue;
        for (let i = 2; i < board.buffer.length - 1; i++) {
          currentValue = board.buffer[i];
          board.pins[pin].analogChannel = currentValue;
          if (currentValue !== 127) {
            board.analogPins.push(pin);
          }
          pin++;
        }
        board.emit("analog-mapping-query");
      },
      [I2C_REPLY](board) {
        const reply = [];
        const address = board.buffer[2] & 127 | (board.buffer[3] & 127) << 7;
        const register = board.buffer[4] & 127 | (board.buffer[5] & 127) << 7;
        for (let i = 6, length = board.buffer.length - 1; i < length; i += 2) {
          reply.push(board.buffer[i] | board.buffer[i + 1] << 7);
        }
        board.emit(`I2C-reply-${address}-${register}`, reply);
      },
      [ONEWIRE_DATA](board) {
        const subCommand = board.buffer[2];
        if (!SYSEX_RESPONSE[subCommand]) {
          return;
        }
        SYSEX_RESPONSE[subCommand](board);
      },
      [ONEWIRE_SEARCH_REPLY](board) {
        const pin = board.buffer[3];
        const buffer = board.buffer.slice(4, board.buffer.length - 1);
        board.emit(`1-wire-search-reply-${pin}`, OneWire.readDevices(buffer));
      },
      [ONEWIRE_SEARCH_ALARMS_REPLY](board) {
        const pin = board.buffer[3];
        const buffer = board.buffer.slice(4, board.buffer.length - 1);
        board.emit(`1-wire-search-alarms-reply-${pin}`, OneWire.readDevices(buffer));
      },
      [ONEWIRE_READ_REPLY](board) {
        const encoded = board.buffer.slice(4, board.buffer.length - 1);
        const decoded = Encoder7Bit.from7BitArray(encoded);
        const correlationId = decoded[1] << 8 | decoded[0];
        board.emit(`1-wire-read-reply-${correlationId}`, decoded.slice(2));
      },
      [STRING_DATA](board) {
        board.emit("string", Buffer.from(board.buffer.slice(2, -1)).toString().replace(/\0/g, ""));
      },
      [PING_READ](board) {
        const pin = board.buffer[2] & 127 | (board.buffer[3] & 127) << 7;
        const durationBuffer = [
          board.buffer[4] & 127 | (board.buffer[5] & 127) << 7,
          board.buffer[6] & 127 | (board.buffer[7] & 127) << 7,
          board.buffer[8] & 127 | (board.buffer[9] & 127) << 7,
          board.buffer[10] & 127 | (board.buffer[11] & 127) << 7
        ];
        const duration = (durationBuffer[0] << 24) + (durationBuffer[1] << 16) + (durationBuffer[2] << 8) + durationBuffer[3];
        board.emit(`ping-read-${pin}`, duration);
      },
      [STEPPER](board) {
        const deviceNum = board.buffer[2];
        board.emit(`stepper-done-${deviceNum}`, true);
      },
      [ACCELSTEPPER](board) {
        const command = board.buffer[2];
        const deviceNum = board.buffer[3];
        const value = command === 6 || command === 10 ? decode32BitSignedInteger(board.buffer.slice(4, 9)) : null;
        if (command === 6) {
          board.emit(`stepper-position-${deviceNum}`, value);
        }
        if (command === 10) {
          board.emit(`stepper-done-${deviceNum}`, value);
        }
        if (command === 36) {
          board.emit(`multi-stepper-done-${deviceNum}`);
        }
      },
      [SERIAL_MESSAGE](board) {
        const command = board.buffer[2] & START_SYSEX;
        const portId = board.buffer[2] & 15;
        const reply = [];
        if (command === SERIAL_REPLY) {
          for (let i = 3, len = board.buffer.length; i < len - 1; i += 2) {
            reply.push(board.buffer[i + 1] << 7 | board.buffer[i]);
          }
          board.emit(`serial-data-${portId}`, reply);
        }
      }
    };
    var Transport = null;
    var Firmata = class extends Emitter {
      constructor(port, options, callback) {
        super();
        if (typeof options === "function" || typeof options === "undefined") {
          callback = options;
          options = {};
        }
        const board = this;
        const defaults = {
          reportVersionTimeout: 5e3,
          samplingInterval: 19,
          serialport: {
            baudRate: 57600,
            highWaterMark: 256
          }
        };
        const settings = Object.assign({}, defaults, options);
        this.isReady = false;
        this.MODES = {
          INPUT: 0,
          OUTPUT: 1,
          ANALOG: 2,
          PWM: 3,
          SERVO: 4,
          SHIFT: 5,
          I2C: 6,
          ONEWIRE: 7,
          STEPPER: 8,
          SERIAL: 10,
          PULLUP: 11,
          IGNORE: 127,
          PING_READ: 117,
          UNKOWN: 16
        };
        this.I2C_MODES = {
          WRITE: 0,
          READ: 1,
          CONTINUOUS_READ: 2,
          STOP_READING: 3
        };
        this.STEPPER = {
          TYPE: {
            DRIVER: 1,
            TWO_WIRE: 2,
            THREE_WIRE: 3,
            FOUR_WIRE: 4
          },
          STEP_SIZE: {
            WHOLE: 0,
            HALF: 1
          },
          RUN_STATE: {
            STOP: 0,
            ACCEL: 1,
            DECEL: 2,
            RUN: 3
          },
          DIRECTION: {
            CCW: 0,
            CW: 1
          }
        };
        this.SERIAL_MODES = {
          CONTINUOUS_READ: 0,
          STOP_READING: 1
        };
        this.SERIAL_PORT_IDs = {
          HW_SERIAL0: 0,
          HW_SERIAL1: 1,
          HW_SERIAL2: 2,
          HW_SERIAL3: 3,
          SW_SERIAL0: 8,
          SW_SERIAL1: 9,
          SW_SERIAL2: 16,
          SW_SERIAL3: 17,
          DEFAULT: 8
        };
        this.SERIAL_PIN_TYPES = {
          RES_RX0: 0,
          RES_TX0: 1,
          RES_RX1: 2,
          RES_TX1: 3,
          RES_RX2: 4,
          RES_TX2: 5,
          RES_RX3: 6,
          RES_TX3: 7
        };
        this.RESOLUTION = {
          ADC: null,
          DAC: null,
          PWM: null
        };
        this.HIGH = 1;
        this.LOW = 0;
        this.pins = [];
        this.ports = Array(16).fill(0);
        this.analogPins = [];
        this.version = {};
        this.firmware = {};
        this.buffer = [];
        this.versionReceived = false;
        this.name = "Firmata";
        this.settings = settings;
        this.pending = 0;
        this.digitalPortQueue = 0;
        if (typeof port === "object") {
          this.transport = port;
        } else {
          if (!Transport) {
            throw new Error("Missing Default Transport");
          }
          this.transport = new Transport(port, settings.serialport);
        }
        this.transport.on("close", (event) => {
          if (event && event.disconnect && event.disconnected) {
            this.emit("disconnect");
            return;
          }
          this.emit("close");
        });
        this.transport.on("open", (event) => {
          this.emit("open", event);
          this.emit("connect", event);
        });
        this.transport.on("error", (error) => {
          if (!this.isReady && typeof callback === "function") {
            callback(error);
          } else {
            this.emit("error", error);
          }
        });
        this.transport.on("data", (data) => {
          for (let i = 0; i < data.length; i++) {
            let byte = data[i];
            if (this.buffer.length === 0 && byte === 0) {
              continue;
            } else {
              this.buffer.push(byte);
              let first = this.buffer[0];
              let last = this.buffer[this.buffer.length - 1];
              if (first === START_SYSEX && last === END_SYSEX) {
                let handler = SYSEX_RESPONSE[this.buffer[1]];
                if (handler && this.versionReceived) {
                  handler(this);
                }
                this.buffer.length = 0;
              } else if (first === START_SYSEX && this.buffer.length > 0) {
                let currByte = data[i];
                if (currByte > 127) {
                  this.buffer.length = 0;
                  this.buffer.push(currByte);
                }
              } else {
                if (first !== START_SYSEX) {
                  let response = first < START_SYSEX ? first & START_SYSEX : first;
                  if (response !== REPORT_VERSION && response !== ANALOG_MESSAGE && response !== DIGITAL_MESSAGE) {
                    this.buffer.length = 0;
                  }
                }
              }
              if (this.buffer.length === 3 && first !== START_SYSEX) {
                let response = first < START_SYSEX ? first & START_SYSEX : first;
                if (MIDI_RESPONSE[response]) {
                  if (this.versionReceived || first === REPORT_VERSION) {
                    this.versionReceived = true;
                    MIDI_RESPONSE[response](this);
                  }
                  this.buffer.length = 0;
                } else {
                  this.buffer.length = 0;
                }
              }
            }
          }
        });
        this.reportVersionTimeoutId = setTimeout(() => {
          if (this.versionReceived === false) {
            this.reportVersion(function() {
            });
            this.queryFirmware(function() {
            });
          }
        }, settings.reportVersionTimeout);
        function ready() {
          board.isReady = true;
          board.emit("ready");
          if (typeof callback === "function") {
            callback();
          }
        }
        this.once("reportversion", () => {
          clearTimeout(this.reportVersionTimeoutId);
          this.versionReceived = true;
          this.once("queryfirmware", () => {
            if (options.samplingInterval !== void 0) {
              this.setSamplingInterval(options.samplingInterval);
            }
            if (settings.skipCapabilities) {
              this.analogPins = settings.analogPins || this.analogPins;
              this.pins = settings.pins || this.pins;
              if (!this.pins.length) {
                for (var i = 0; i < (settings.pinCount || MAX_PIN_COUNT); i++) {
                  var supportedModes = [];
                  var analogChannel = this.analogPins.indexOf(i);
                  if (analogChannel < 0) {
                    analogChannel = 127;
                  }
                  this.pins.push({ supportedModes, analogChannel });
                }
              }
              this.RESOLUTION.ADC = 1023;
              this.RESOLUTION.PWM = 255;
              ready();
            } else {
              this.queryCapabilities(() => {
                this.queryAnalogMapping(ready);
              });
            }
          });
        });
      }
      reportVersion(callback) {
        this.once("reportversion", callback);
        writeToTransport(this, [REPORT_VERSION]);
      }
      queryFirmware(callback) {
        this.once("queryfirmware", callback);
        writeToTransport(this, [
          START_SYSEX,
          QUERY_FIRMWARE,
          END_SYSEX
        ]);
      }
      analogRead(pin, callback) {
        this.reportAnalogPin(pin, 1);
        this.addListener(`analog-read-${pin}`, callback);
      }
      pwmWrite(pin, value) {
        let data;
        this.pins[pin].value = value;
        if (pin > 15) {
          data = [
            START_SYSEX,
            EXTENDED_ANALOG,
            pin,
            value & 127,
            value >> 7 & 127
          ];
          if (value > 16384) {
            data[data.length] = value >> 14 & 127;
          }
          if (value > 2097152) {
            data[data.length] = value >> 21 & 127;
          }
          if (value > 268435456) {
            data[data.length] = value >> 28 & 127;
          }
          data[data.length] = END_SYSEX;
        } else {
          data = [
            ANALOG_MESSAGE | pin,
            value & 127,
            value >> 7 & 127
          ];
        }
        writeToTransport(this, data);
      }
      servoConfig(pin, min, max) {
        if (typeof pin === "object" && pin !== null) {
          let temp = pin;
          pin = temp.pin;
          min = temp.min;
          max = temp.max;
        }
        if (typeof pin === "undefined") {
          throw new Error("servoConfig: pin must be specified");
        }
        if (typeof min === "undefined") {
          throw new Error("servoConfig: min must be specified");
        }
        if (typeof max === "undefined") {
          throw new Error("servoConfig: max must be specified");
        }
        this.pins[pin].mode = this.MODES.SERVO;
        writeToTransport(this, [
          START_SYSEX,
          SERVO_CONFIG,
          pin,
          min & 127,
          min >> 7 & 127,
          max & 127,
          max >> 7 & 127,
          END_SYSEX
        ]);
      }
      servoWrite(...args) {
        this.analogWrite(...args);
      }
      pinMode(pin, mode) {
        if (mode === this.MODES.ANALOG) {
          this.pins[this.analogPins[pin]].mode = mode;
        } else {
          this.pins[pin].mode = mode;
          writeToTransport(this, [
            PIN_MODE,
            pin,
            mode
          ]);
        }
      }
      digitalWrite(pin, value, enqueue) {
        let port = this.updateDigitalPort(pin, value);
        if (enqueue) {
          this.digitalPortQueue |= 1 << port;
        } else {
          this.writeDigitalPort(port);
        }
      }
      updateDigitalPort(pin, value) {
        const port = pin >> 3;
        const bit = 1 << (pin & 7);
        this.pins[pin].value = value;
        if (value) {
          this.ports[port] |= bit;
        } else {
          this.ports[port] &= ~bit;
        }
        return port;
      }
      flushDigitalPorts() {
        for (let i = 0; i < this.ports.length; i++) {
          if (this.digitalPortQueue >> i) {
            this.writeDigitalPort(i);
          }
        }
        this.digitalPortQueue = 0;
      }
      writeDigitalPort(port) {
        writeToTransport(this, [
          DIGITAL_MESSAGE | port,
          this.ports[port] & 127,
          this.ports[port] >> 7 & 127
        ]);
      }
      digitalRead(pin, callback) {
        this.reportDigitalPin(pin, 1);
        this.addListener(`digital-read-${pin}`, callback);
      }
      queryCapabilities(callback) {
        this.once("capability-query", callback);
        writeToTransport(this, [
          START_SYSEX,
          CAPABILITY_QUERY,
          END_SYSEX
        ]);
      }
      queryAnalogMapping(callback) {
        this.once("analog-mapping-query", callback);
        writeToTransport(this, [
          START_SYSEX,
          ANALOG_MAPPING_QUERY,
          END_SYSEX
        ]);
      }
      queryPinState(pin, callback) {
        this.once(`pin-state-${pin}`, callback);
        writeToTransport(this, [
          START_SYSEX,
          PIN_STATE_QUERY,
          pin,
          END_SYSEX
        ]);
      }
      sendString(string) {
        const bytes = Buffer.from(`${string}\0`, "utf8");
        const data = [];
        data.push(START_SYSEX, STRING_DATA);
        for (let i = 0, length = bytes.length; i < length; i++) {
          data.push(bytes[i] & 127, bytes[i] >> 7 & 127);
        }
        data.push(END_SYSEX);
        writeToTransport(this, data);
      }
      sendI2CConfig(delay) {
        return this.i2cConfig(delay);
      }
      i2cConfig(options) {
        let settings = i2cActive.get(this);
        let delay;
        if (!settings) {
          settings = {};
          i2cActive.set(this, settings);
        }
        if (typeof options === "number") {
          delay = options;
        } else {
          if (typeof options === "object" && options !== null) {
            delay = Number(options.delay);
            if (typeof options.address !== "undefined") {
              if (!settings[options.address]) {
                settings[options.address] = {
                  stopTX: true
                };
              }
            }
            if (typeof options.settings !== "undefined") {
              Object.assign(settings[options.address], options.settings);
            }
          }
        }
        settings.delay = delay = delay || 0;
        i2cRequest(this, [
          START_SYSEX,
          I2C_CONFIG,
          delay & 255,
          delay >> 8 & 255,
          END_SYSEX
        ]);
        return this;
      }
      sendI2CWriteRequest(slaveAddress, bytes) {
        const data = [];
        bytes = bytes || [];
        data.push(START_SYSEX, I2C_REQUEST, slaveAddress, this.I2C_MODES.WRITE << 3);
        for (let i = 0, length = bytes.length; i < length; i++) {
          data.push(bytes[i] & 127, bytes[i] >> 7 & 127);
        }
        data.push(END_SYSEX);
        i2cRequest(this, data);
      }
      i2cWrite(address, registerOrData, inBytes) {
        const data = [
          START_SYSEX,
          I2C_REQUEST,
          address,
          this.I2C_MODES.WRITE << 3
        ];
        if (arguments.length === 3 && !Array.isArray(registerOrData) && !Array.isArray(inBytes)) {
          return this.i2cWriteReg(address, registerOrData, inBytes);
        }
        if (arguments.length === 2) {
          if (Array.isArray(registerOrData)) {
            inBytes = registerOrData.slice();
            registerOrData = inBytes.shift();
          } else {
            inBytes = [];
          }
        }
        const bytes = Buffer.from([registerOrData].concat(inBytes));
        for (var i = 0, length = bytes.length; i < length; i++) {
          data.push(bytes[i] & 127, bytes[i] >> 7 & 127);
        }
        data.push(END_SYSEX);
        i2cRequest(this, data);
        return this;
      }
      i2cWriteReg(address, register, byte) {
        i2cRequest(this, [
          START_SYSEX,
          I2C_REQUEST,
          address,
          this.I2C_MODES.WRITE << 3,
          register & 127,
          register >> 7 & 127,
          byte & 127,
          byte >> 7 & 127,
          END_SYSEX
        ]);
        return this;
      }
      sendI2CReadRequest(address, numBytes, callback) {
        i2cRequest(this, [
          START_SYSEX,
          I2C_REQUEST,
          address,
          this.I2C_MODES.READ << 3,
          numBytes & 127,
          numBytes >> 7 & 127,
          END_SYSEX
        ]);
        this.once(`I2C-reply-${address}-0`, callback);
      }
      i2cRead(address, register, bytesToRead, callback) {
        if (arguments.length === 3 && typeof register === "number" && typeof bytesToRead === "function") {
          callback = bytesToRead;
          bytesToRead = register;
          register = null;
        }
        const data = [
          START_SYSEX,
          I2C_REQUEST,
          address,
          this.I2C_MODES.CONTINUOUS_READ << 3
        ];
        let event = `I2C-reply-${address}-`;
        if (register !== null) {
          data.push(register & 127, register >> 7 & 127);
        } else {
          register = 0;
        }
        event += register;
        data.push(bytesToRead & 127, bytesToRead >> 7 & 127, END_SYSEX);
        this.on(event, callback);
        i2cRequest(this, data);
        return this;
      }
      i2cStop(options) {
        if (options == null) {
          return;
        }
        if (typeof options === "number") {
          options = {
            address: options
          };
        }
        writeToTransport(this, [
          START_SYSEX,
          I2C_REQUEST,
          options.address,
          this.I2C_MODES.STOP_READING << 3,
          END_SYSEX
        ]);
        Object.keys(this._events).forEach((event) => {
          if (event.startsWith(`I2C-reply-${options.address}`)) {
            this.removeAllListeners(event);
          }
        });
      }
      i2cReadOnce(address, register, bytesToRead, callback) {
        if (arguments.length === 3 && typeof register === "number" && typeof bytesToRead === "function") {
          callback = bytesToRead;
          bytesToRead = register;
          register = null;
        }
        const data = [
          START_SYSEX,
          I2C_REQUEST,
          address,
          this.I2C_MODES.READ << 3
        ];
        let event = `I2C-reply-${address}-`;
        if (register !== null) {
          data.push(register & 127, register >> 7 & 127);
        } else {
          register = 0;
        }
        event += register;
        data.push(bytesToRead & 127, bytesToRead >> 7 & 127, END_SYSEX);
        this.once(event, callback);
        i2cRequest(this, data);
        return this;
      }
      sendOneWireConfig(pin, enableParasiticPower) {
        writeToTransport(this, [
          START_SYSEX,
          ONEWIRE_DATA,
          ONEWIRE_CONFIG_REQUEST,
          pin,
          enableParasiticPower ? 1 : 0,
          END_SYSEX
        ]);
      }
      sendOneWireSearch(pin, callback) {
        this[SYM_sendOneWireSearch](ONEWIRE_SEARCH_REQUEST, `1-wire-search-reply-${pin}`, pin, callback);
      }
      sendOneWireAlarmsSearch(pin, callback) {
        this[SYM_sendOneWireSearch](ONEWIRE_SEARCH_ALARMS_REQUEST, `1-wire-search-alarms-reply-${pin}`, pin, callback);
      }
      [SYM_sendOneWireSearch](type, event, pin, callback) {
        writeToTransport(this, [
          START_SYSEX,
          ONEWIRE_DATA,
          type,
          pin,
          END_SYSEX
        ]);
        const timeout = setTimeout(() => {
          callback(new Error("1-Wire device search timeout - are you running ConfigurableFirmata?"));
        }, 5e3);
        this.once(event, (devices) => {
          clearTimeout(timeout);
          callback(null, devices);
        });
      }
      sendOneWireRead(pin, device, numBytesToRead, callback) {
        const correlationId = Math.floor(Math.random() * 255);
        const timeout = setTimeout(() => {
          callback(new Error("1-Wire device read timeout - are you running ConfigurableFirmata?"));
        }, 5e3);
        this[SYM_sendOneWireRequest](pin, ONEWIRE_READ_REQUEST_BIT, device, numBytesToRead, correlationId, null, null, `1-wire-read-reply-${correlationId}`, (data) => {
          clearTimeout(timeout);
          callback(null, data);
        });
      }
      sendOneWireReset(pin) {
        this[SYM_sendOneWireRequest](pin, ONEWIRE_RESET_REQUEST_BIT);
      }
      sendOneWireWrite(pin, device, data) {
        this[SYM_sendOneWireRequest](pin, ONEWIRE_WRITE_REQUEST_BIT, device, null, null, null, Array.isArray(data) ? data : [data]);
      }
      sendOneWireDelay(pin, delay) {
        this[SYM_sendOneWireRequest](pin, ONEWIRE_DELAY_REQUEST_BIT, null, null, null, delay);
      }
      sendOneWireWriteAndRead(pin, device, data, numBytesToRead, callback) {
        const correlationId = Math.floor(Math.random() * 255);
        const timeout = setTimeout(() => {
          callback(new Error("1-Wire device read timeout - are you running ConfigurableFirmata?"));
        }, 5e3);
        this[SYM_sendOneWireRequest](pin, ONEWIRE_WRITE_REQUEST_BIT | ONEWIRE_READ_REQUEST_BIT, device, numBytesToRead, correlationId, null, Array.isArray(data) ? data : [data], `1-wire-read-reply-${correlationId}`, (data2) => {
          clearTimeout(timeout);
          callback(null, data2);
        });
      }
      [SYM_sendOneWireRequest](pin, subcommand, device, numBytesToRead, correlationId, delay, dataToWrite, event, callback) {
        const bytes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        if (device || numBytesToRead || correlationId || delay || dataToWrite) {
          subcommand = subcommand | ONEWIRE_WITHDATA_REQUEST_BITS;
        }
        if (device) {
          bytes.splice(...[0, 8].concat(device));
        }
        if (numBytesToRead) {
          bytes[8] = numBytesToRead & 255;
          bytes[9] = numBytesToRead >> 8 & 255;
        }
        if (correlationId) {
          bytes[10] = correlationId & 255;
          bytes[11] = correlationId >> 8 & 255;
        }
        if (delay) {
          bytes[12] = delay & 255;
          bytes[13] = delay >> 8 & 255;
          bytes[14] = delay >> 16 & 255;
          bytes[15] = delay >> 24 & 255;
        }
        if (dataToWrite) {
          bytes.push(...dataToWrite);
        }
        const output = [
          START_SYSEX,
          ONEWIRE_DATA,
          subcommand,
          pin,
          ...Encoder7Bit.to7BitArray(bytes),
          END_SYSEX
        ];
        writeToTransport(this, output);
        if (event && callback) {
          this.once(event, callback);
        }
      }
      setSamplingInterval(interval) {
        const safeint = interval < 10 ? 10 : interval > 65535 ? 65535 : interval;
        this.settings.samplingInterval = safeint;
        writeToTransport(this, [
          START_SYSEX,
          SAMPLING_INTERVAL,
          safeint & 127,
          safeint >> 7 & 127,
          END_SYSEX
        ]);
      }
      getSamplingInterval() {
        return this.settings.samplingInterval;
      }
      reportAnalogPin(pin, value) {
        if (value === 0 || value === 1) {
          this.pins[this.analogPins[pin]].report = value;
          writeToTransport(this, [
            REPORT_ANALOG | pin,
            value
          ]);
        }
      }
      reportDigitalPin(pin, value) {
        const port = pin >> 3;
        if (value === 0 || value === 1) {
          this.pins[pin].report = value;
          writeToTransport(this, [
            REPORT_DIGITAL | port,
            value
          ]);
        }
      }
      pingRead(options, callback) {
        if (!this.pins[options.pin].supportedModes.includes(PING_READ)) {
          throw new Error("Please upload PingFirmata to the board");
        }
        const {
          pin,
          value,
          pulseOut = 0,
          timeout = 1e6
        } = options;
        writeToTransport(this, [
          START_SYSEX,
          PING_READ,
          pin,
          value,
          ...Firmata.encode([
            pulseOut >> 24 & 255,
            pulseOut >> 16 & 255,
            pulseOut >> 8 & 255,
            pulseOut & 255
          ]),
          ...Firmata.encode([
            timeout >> 24 & 255,
            timeout >> 16 & 255,
            timeout >> 8 & 255,
            timeout & 255
          ]),
          END_SYSEX
        ]);
        this.once(`ping-read-${pin}`, callback);
      }
      accelStepperConfig(options) {
        let {
          deviceNum,
          invertPins,
          motorPin1,
          motorPin2,
          motorPin3,
          motorPin4,
          enablePin,
          stepSize = this.STEPPER.STEP_SIZE.WHOLE,
          type = this.STEPPER.TYPE.FOUR_WIRE
        } = options;
        const data = [
          START_SYSEX,
          ACCELSTEPPER,
          0,
          deviceNum
        ];
        let iface = (type & 7) << 4 | (stepSize & 7) << 1;
        let pinsToInvert = 0;
        if (typeof enablePin !== "undefined") {
          iface = iface | 1;
        }
        data.push(iface);
        [
          "stepPin",
          "motorPin1",
          "directionPin",
          "motorPin2",
          "motorPin3",
          "motorPin4",
          "enablePin"
        ].forEach((pin) => {
          if (typeof options[pin] !== "undefined") {
            data.push(options[pin]);
          }
        });
        if (Array.isArray(invertPins)) {
          if (invertPins.includes(motorPin1)) {
            pinsToInvert |= 1;
          }
          if (invertPins.includes(motorPin2)) {
            pinsToInvert |= 2;
          }
          if (invertPins.includes(motorPin3)) {
            pinsToInvert |= 4;
          }
          if (invertPins.includes(motorPin4)) {
            pinsToInvert |= 8;
          }
          if (invertPins.includes(enablePin)) {
            pinsToInvert |= 16;
          }
        }
        data.push(pinsToInvert, END_SYSEX);
        writeToTransport(this, data);
      }
      accelStepperZero(deviceNum) {
        writeToTransport(this, [
          START_SYSEX,
          ACCELSTEPPER,
          1,
          deviceNum,
          END_SYSEX
        ]);
      }
      accelStepperStep(deviceNum, steps, callback) {
        writeToTransport(this, [
          START_SYSEX,
          ACCELSTEPPER,
          2,
          deviceNum,
          ...encode32BitSignedInteger(steps),
          END_SYSEX
        ]);
        if (callback) {
          this.once(`stepper-done-${deviceNum}`, callback);
        }
      }
      accelStepperTo(deviceNum, position, callback) {
        writeToTransport(this, [
          START_SYSEX,
          ACCELSTEPPER,
          3,
          deviceNum,
          ...encode32BitSignedInteger(position),
          END_SYSEX
        ]);
        if (callback) {
          this.once(`stepper-done-${deviceNum}`, callback);
        }
      }
      accelStepperEnable(deviceNum, enabled = true) {
        writeToTransport(this, [
          START_SYSEX,
          ACCELSTEPPER,
          4,
          deviceNum,
          enabled & 1,
          END_SYSEX
        ]);
      }
      accelStepperStop(deviceNum) {
        writeToTransport(this, [
          START_SYSEX,
          ACCELSTEPPER,
          5,
          deviceNum,
          END_SYSEX
        ]);
      }
      accelStepperReportPosition(deviceNum, callback) {
        writeToTransport(this, [
          START_SYSEX,
          ACCELSTEPPER,
          6,
          deviceNum,
          END_SYSEX
        ]);
        if (callback) {
          this.once(`stepper-position-${deviceNum}`, callback);
        }
      }
      accelStepperAcceleration(deviceNum, acceleration) {
        writeToTransport(this, [
          START_SYSEX,
          ACCELSTEPPER,
          8,
          deviceNum,
          ...encodeCustomFloat(acceleration),
          END_SYSEX
        ]);
      }
      accelStepperSpeed(deviceNum, speed) {
        writeToTransport(this, [
          START_SYSEX,
          ACCELSTEPPER,
          9,
          deviceNum,
          ...encodeCustomFloat(speed),
          END_SYSEX
        ]);
      }
      multiStepperConfig(options) {
        writeToTransport(this, [
          START_SYSEX,
          ACCELSTEPPER,
          32,
          options.groupNum,
          ...options.devices,
          END_SYSEX
        ]);
      }
      multiStepperTo(groupNum, positions, callback) {
        if (groupNum < 0 || groupNum > 5) {
          throw new RangeError(`Invalid "groupNum": ${groupNum}. Expected "groupNum" between 0-5`);
        }
        writeToTransport(this, [
          START_SYSEX,
          ACCELSTEPPER,
          33,
          groupNum,
          ...positions.reduce((a, b) => a.concat(...encode32BitSignedInteger(b)), []),
          END_SYSEX
        ]);
        if (callback) {
          this.once(`multi-stepper-done-${groupNum}`, callback);
        }
      }
      multiStepperStop(groupNum) {
        if (groupNum < 0 || groupNum > 5) {
          throw new RangeError(`Invalid "groupNum": ${groupNum}. Expected "groupNum" between 0-5`);
        }
        writeToTransport(this, [
          START_SYSEX,
          ACCELSTEPPER,
          35,
          groupNum,
          END_SYSEX
        ]);
      }
      stepperConfig(deviceNum, type, stepsPerRev, dirOrMotor1Pin, dirOrMotor2Pin, motorPin3, motorPin4) {
        writeToTransport(this, [
          START_SYSEX,
          STEPPER,
          0,
          deviceNum,
          type,
          stepsPerRev & 127,
          stepsPerRev >> 7 & 127,
          dirOrMotor1Pin,
          dirOrMotor2Pin,
          ...type === this.STEPPER.TYPE.FOUR_WIRE ? [motorPin3, motorPin4] : [],
          END_SYSEX
        ]);
      }
      stepperStep(deviceNum, direction, steps, speed, accel, decel, callback) {
        if (typeof accel === "function") {
          callback = accel;
          accel = 0;
          decel = 0;
        }
        writeToTransport(this, [
          START_SYSEX,
          STEPPER,
          1,
          deviceNum,
          direction,
          steps & 127,
          steps >> 7 & 127,
          steps >> 14 & 127,
          speed & 127,
          speed >> 7 & 127,
          ...accel > 0 || decel > 0 ? [accel & 127, accel >> 7 & 127, decel & 127, decel >> 7 & 127] : [],
          END_SYSEX
        ]);
        if (callback) {
          this.once(`stepper-done-${deviceNum}`, callback);
        }
      }
      serialConfig(options) {
        let portId;
        let baud;
        let rxPin;
        let txPin;
        if (typeof options === "object" && options !== null) {
          portId = options.portId;
          baud = options.baud;
          rxPin = options.rxPin;
          txPin = options.txPin;
        }
        if (typeof portId === "undefined") {
          throw new Error("portId must be specified, see SERIAL_PORT_IDs for options.");
        }
        baud = baud || 57600;
        const data = [
          START_SYSEX,
          SERIAL_MESSAGE,
          SERIAL_CONFIG | portId,
          baud & 127,
          baud >> 7 & 127,
          baud >> 14 & 127
        ];
        if (portId > 7 && typeof rxPin !== "undefined" && typeof txPin !== "undefined") {
          data.push(rxPin, txPin);
        } else if (portId > 7) {
          throw new Error("Both RX and TX pins must be defined when using Software Serial.");
        }
        data.push(END_SYSEX);
        writeToTransport(this, data);
      }
      serialWrite(portId, bytes) {
        const data = [
          START_SYSEX,
          SERIAL_MESSAGE,
          SERIAL_WRITE | portId
        ];
        for (let i = 0, len = bytes.length; i < len; i++) {
          data.push(bytes[i] & 127, bytes[i] >> 7 & 127);
        }
        data.push(END_SYSEX);
        if (bytes.length > 0) {
          writeToTransport(this, data);
        }
      }
      serialRead(portId, maxBytesToRead, callback) {
        const data = [
          START_SYSEX,
          SERIAL_MESSAGE,
          SERIAL_READ | portId,
          this.SERIAL_MODES.CONTINUOUS_READ
        ];
        if (arguments.length === 2 && typeof maxBytesToRead === "function") {
          callback = maxBytesToRead;
        } else {
          data.push(maxBytesToRead & 127, maxBytesToRead >> 7 & 127);
        }
        data.push(END_SYSEX);
        writeToTransport(this, data);
        this.on(`serial-data-${portId}`, callback);
      }
      serialStop(portId) {
        writeToTransport(this, [
          START_SYSEX,
          SERIAL_MESSAGE,
          SERIAL_READ | portId,
          this.SERIAL_MODES.STOP_READING,
          END_SYSEX
        ]);
        this.removeAllListeners(`serial-data-${portId}`);
      }
      serialClose(portId) {
        writeToTransport(this, [
          START_SYSEX,
          SERIAL_MESSAGE,
          SERIAL_CLOSE | portId,
          END_SYSEX
        ]);
      }
      serialFlush(portId) {
        writeToTransport(this, [
          START_SYSEX,
          SERIAL_MESSAGE,
          SERIAL_FLUSH | portId,
          END_SYSEX
        ]);
      }
      serialListen(portId) {
        if (portId < 8) {
          return;
        }
        writeToTransport(this, [
          START_SYSEX,
          SERIAL_MESSAGE,
          SERIAL_LISTEN | portId,
          END_SYSEX
        ]);
      }
      sysexResponse(commandByte, handler) {
        if (Firmata.SYSEX_RESPONSE[commandByte]) {
          throw new Error(`${commandByte} is not an available SYSEX_RESPONSE byte`);
        }
        Firmata.SYSEX_RESPONSE[commandByte] = (board) => handler.call(board, board.buffer.slice(2, -1));
        return this;
      }
      clearSysexResponse(commandByte) {
        if (Firmata.SYSEX_RESPONSE[commandByte]) {
          delete Firmata.SYSEX_RESPONSE[commandByte];
        }
      }
      sysexCommand(message) {
        if (!message || !message.length) {
          throw new Error("Sysex Command cannot be empty");
        }
        writeToTransport(this, [
          START_SYSEX,
          ...message.slice(),
          END_SYSEX
        ]);
        return this;
      }
      reset() {
        writeToTransport(this, [SYSTEM_RESET]);
      }
      static isAcceptablePort(port) {
        let rport = /usb|acm|^com/i;
        if (rport.test(port.path)) {
          return true;
        }
        return false;
      }
      static requestPort(callback) {
        if (!Transport || Transport && typeof Transport.list !== "function") {
          process.nextTick(() => {
            callback(new Error("No Transport provided"), null);
          });
          return;
        }
        Transport.list().then((ports) => {
          const port = ports.find((port2) => Firmata.isAcceptablePort(port2) && port2);
          if (port) {
            callback(null, port);
          } else {
            callback(new Error("No Acceptable Port Found"), null);
          }
        }).catch((error) => {
          callback(error, null);
        });
      }
      static encode(data) {
        const encoded = [];
        const length = data.length;
        for (let i = 0; i < length; i++) {
          encoded.push(data[i] & 127, data[i] >> 7 & 127);
        }
        return encoded;
      }
      static decode(data) {
        const decoded = [];
        if (data.length % 2 !== 0) {
          throw new Error("Firmata.decode(data) called with odd number of data bytes");
        }
        while (data.length) {
          const lsb = data.shift();
          const msb = data.shift();
          decoded.push(lsb | msb << 7);
        }
        return decoded;
      }
    };
    Firmata.prototype.analogWrite = Firmata.prototype.pwmWrite;
    Firmata.Board = Firmata;
    Firmata.SYSEX_RESPONSE = SYSEX_RESPONSE;
    Firmata.MIDI_RESPONSE = MIDI_RESPONSE;
    function writeToTransport(board, data) {
      board.pending++;
      board.transport.write(Buffer.from(data), () => board.pending--);
    }
    function i2cRequest(board, bytes) {
      const active = i2cActive.get(board);
      if (!active) {
        throw new Error("I2C is not enabled for this board. To enable, call the i2cConfig() method.");
      }
      if (bytes[1] === I2C_REQUEST) {
        const address = bytes[2];
        if (!active[address]) {
          active[address] = {
            stopTX: true
          };
        }
        if (bytes[3] & I2C_READ_MASK) {
          bytes[3] |= Number(!active[address].stopTX) << 6;
        }
      }
      writeToTransport(board, bytes);
    }
    function encode32BitSignedInteger(data) {
      const negative = data < 0;
      data = Math.abs(data);
      const encoded = [
        data & 127,
        data >> 7 & 127,
        data >> 14 & 127,
        data >> 21 & 127,
        data >> 28 & 7
      ];
      if (negative) {
        encoded[encoded.length - 1] |= 8;
      }
      return encoded;
    }
    function decode32BitSignedInteger(bytes) {
      let result = bytes[0] & 127 | (bytes[1] & 127) << 7 | (bytes[2] & 127) << 14 | (bytes[3] & 127) << 21 | (bytes[4] & 7) << 28;
      if (bytes[4] >> 3) {
        result *= -1;
      }
      return result;
    }
    var MAX_SIGNIFICAND = Math.pow(2, 23);
    function encodeCustomFloat(input) {
      const sign = input < 0 ? 1 : 0;
      input = Math.abs(input);
      const base10 = Math.floor(Math.log10(input));
      let exponent = 0 + base10;
      input /= Math.pow(10, base10);
      while (!Number.isInteger(input) && input < MAX_SIGNIFICAND) {
        exponent -= 1;
        input *= 10;
      }
      while (input > MAX_SIGNIFICAND) {
        exponent += 1;
        input /= 10;
      }
      input = Math.trunc(input);
      exponent += 11;
      const encoded = [
        input & 127,
        input >> 7 & 127,
        input >> 14 & 127,
        input >> 21 & 3 | (exponent & 15) << 2 | (sign & 1) << 6
      ];
      return encoded;
    }
    function decodeCustomFloat(input) {
      const exponent = (input[3] >> 2 & 15) - 11;
      const sign = input[3] >> 6 & 1;
      let result = input[0] | input[1] << 7 | input[2] << 14 | (input[3] & 3) << 21;
      if (sign) {
        result *= -1;
      }
      return result * Math.pow(10, exponent);
    }
    if (process.env.IS_TEST_MODE) {
      let transport = null;
      Firmata.test = {
        i2cPeripheralSettings(board) {
          return i2cActive.get(board);
        },
        get i2cActive() {
          return i2cActive;
        },
        set transport(value) {
          transport = Transport;
          Transport = value;
        },
        restoreTransport() {
          Transport = transport;
        },
        encode32BitSignedInteger,
        decode32BitSignedInteger,
        encodeCustomFloat,
        decodeCustomFloat,
        writeToTransport,
        symbols: {
          SYM_sendOneWireRequest,
          SYM_sendOneWireSearch
        }
      };
    }
    var bindTransport = function(transport) {
      Transport = transport;
      return Firmata;
    };
    bindTransport.Firmata = Firmata;
    module2.exports = bindTransport;
  }
});

// node_modules/firmata/lib/com.js
var require_com = __commonJS({
  "node_modules/firmata/lib/com.js"(exports, module2) {
    "use strict";
    var Emitter = require("events");
    var TransportStub = class extends Emitter {
      constructor(path) {
        super();
        this.isOpen = true;
        this.baudRate = 0;
        this.path = path;
      }
      write(buffer) {
        if (Buffer.isBuffer(buffer)) {
          buffer = Array.from(buffer);
        }
        this.lastWrite = buffer;
        this.emit("write", buffer);
      }
      static list() {
        return Promise.resolve([]);
      }
    };
    TransportStub.SerialPort = TransportStub;
    var com;
    var error;
    var SerialPort;
    try {
      if (process.env.IS_TEST_MODE) {
        com = TransportStub;
      } else {
        SerialPort = require_lib10();
        com = SerialPort;
      }
    } catch (err) {
      error = err;
    }
    if (com == null) {
      if (process.env.IS_TEST_MODE) {
        com = TransportStub;
      } else {
        console.log("It looks like serialport didn't install properly.");
        console.log("More information can be found here https://serialport.io/docs/guide-installation");
        console.log(`The result of requiring the package is: ${SerialPort}`);
        console.log(error);
        throw "Missing serialport dependency";
      }
    }
    module2.exports = com;
  }
});

// node_modules/firmata/lib/firmata.js
var require_firmata2 = __commonJS({
  "node_modules/firmata/lib/firmata.js"(exports, module2) {
    "use strict";
    module2.exports = require_firmata()(require_com());
  }
});

// node_modules/johnny-five/lib/sleep.js
var require_sleep = __commonJS({
  "node_modules/johnny-five/lib/sleep.js"(exports, module2) {
    var sleep = {
      micro(us) {
        const start = process.hrtime();
        let waited = 0;
        let delta;
        while (us > waited) {
          delta = process.hrtime(start);
          waited = (delta[0] * 1e9 + delta[1]) / 1e3;
        }
      },
      milli(ms) {
        sleep.micro(ms * 1e3);
      }
    };
    module2.exports = sleep;
  }
});

// node_modules/johnny-five/lib/expander.js
var require_expander = __commonJS({
  "node_modules/johnny-five/lib/expander.js"(exports, module2) {
    var Board = require_board();
    var Emitter = require_emitter();
    var sleep = require_sleep();
    var Fn = require_fn();
    var priv = new Map();
    var active = new Map();
    var Base = class extends Emitter {
      constructor() {
        super();
        this.HIGH = 1;
        this.LOW = 0;
        this.isReady = false;
        this.MODES = {};
        this.pins = [];
        this.analogPins = [];
      }
    };
    var Controllers = {
      DEFAULT: {
        initialize: {
          value() {
            throw new Error("Expander expects a valid controller");
          }
        }
      },
      MCP23017: {
        ADDRESSES: {
          value: [32]
        },
        REGISTER: {
          value: {
            IODIRA: 0,
            GPPUA: 12,
            GPIOA: 18,
            OLATA: 20,
            IODIRB: 1,
            GPPUB: 13,
            GPIOB: 19,
            OLATB: 21
          }
        },
        initialize: {
          value(options) {
            const state = priv.get(this);
            state.iodir = [255, 255];
            state.olat = [255, 255];
            state.gpio = [255, 255];
            state.gppu = [0, 0];
            this.address = options.address || this.ADDRESSES[0];
            options.address = this.address;
            this.io.i2cConfig(options);
            this.io.i2cWrite(this.address, [this.REGISTER.IODIRA, state.iodir[this.REGISTER.IODIRA]]);
            this.io.i2cWrite(this.address, [this.REGISTER.IODIRB, state.iodir[this.REGISTER.IODIRB]]);
            Object.assign(this.MODES, this.io.MODES);
            for (let i = 0; i < 16; i++) {
              this.pins.push({
                supportedModes: [
                  this.MODES.INPUT,
                  this.MODES.OUTPUT
                ],
                mode: 0,
                value: 0,
                report: 0,
                analogChannel: 127
              });
              this.pinMode(i, this.MODES.OUTPUT);
              this.digitalWrite(i, this.LOW);
            }
            this.name = "MCP23017";
            this.isReady = true;
            this.emit("connect");
            this.emit("ready");
          }
        },
        normalize: {
          value(pin) {
            return pin;
          }
        },
        pinMode: {
          value(pin, mode) {
            const state = priv.get(this);
            const pinIndex = pin;
            let port = 0;
            let iodir = null;
            if (pin < 8) {
              port = this.REGISTER.IODIRA;
            } else {
              port = this.REGISTER.IODIRB;
              pin -= 8;
            }
            iodir = state.iodir[port];
            if (mode === this.io.MODES.INPUT) {
              iodir |= 1 << pin;
            } else {
              iodir &= ~(1 << pin);
            }
            this.pins[pinIndex].mode = mode;
            this.io.i2cWrite(this.address, [port, iodir]);
            state.iodir[port] = iodir;
          }
        },
        digitalWrite: {
          value(pin, value) {
            const state = priv.get(this);
            const pinIndex = pin;
            let port = 0;
            let gpio = 0;
            let gpioaddr = 0;
            if (pin < 8) {
              port = this.REGISTER.IODIRA;
              gpioaddr = this.REGISTER.GPIOA;
            } else {
              port = this.REGISTER.IODIRB;
              gpioaddr = this.REGISTER.GPIOB;
              pin -= 8;
            }
            gpio = state.olat[port];
            if (value === this.io.HIGH) {
              gpio |= 1 << pin;
            } else {
              gpio &= ~(1 << pin);
            }
            this.pins[pinIndex].report = 0;
            this.pins[pinIndex].value = value;
            this.io.i2cWrite(this.address, [gpioaddr, gpio]);
            state.olat[port] = gpio;
            state.gpio[port] = gpio;
          }
        },
        pullUp: {
          value(pin, value) {
            const state = priv.get(this);
            let port = 0;
            let gppu = 0;
            let gppuaddr = 0;
            if (pin < 8) {
              port = this.REGISTER.IODIRA;
              gppuaddr = this.REGISTER.GPPUA;
            } else {
              port = this.REGISTER.IODIRB;
              gppuaddr = this.REGISTER.GPPUB;
              pin -= 8;
            }
            gppu = state.gppu[port];
            if (value === this.io.HIGH) {
              gppu |= 1 << pin;
            } else {
              gppu &= ~(1 << pin);
            }
            this.io.i2cWrite(this.address, [gppuaddr, gppu]);
            state.gppu[port] = gppu;
          }
        },
        digitalRead: {
          value(pin, callback) {
            const pinIndex = pin;
            let gpioaddr = 0;
            if (pin < 8) {
              gpioaddr = this.REGISTER.GPIOA;
            } else {
              gpioaddr = this.REGISTER.GPIOB;
              pin -= 8;
            }
            this.pins[pinIndex].report = 1;
            this.on(`digital-read-${pinIndex}`, callback);
            this.io.i2cRead(this.address, gpioaddr, 1, (data) => {
              const byte = data[0];
              const value = byte >> pin & 1;
              this.pins[pinIndex].value = value;
              this.emit(`digital-read-${pinIndex}`, value);
            });
          }
        }
      },
      MCP23008: {
        ADDRESSES: {
          value: [32]
        },
        REGISTER: {
          value: {
            IODIR: 0,
            GPPU: 6,
            GPIO: 9,
            OLAT: 10
          }
        },
        initialize: {
          value(options) {
            const state = priv.get(this);
            state.iodir = [255];
            state.olat = [255];
            state.gpio = [255];
            state.gppu = [0];
            this.address = options.address || this.ADDRESSES[0];
            options.address = this.address;
            this.io.i2cConfig(options);
            this.io.i2cWrite(this.address, [this.REGISTER.IODIR, state.iodir[this.REGISTER.IODIR]]);
            Object.assign(this.MODES, this.io.MODES);
            for (let i = 0; i < 8; i++) {
              this.pins.push({
                supportedModes: [
                  this.MODES.INPUT,
                  this.MODES.OUTPUT
                ],
                mode: 0,
                value: 0,
                report: 0,
                analogChannel: 127
              });
              this.pinMode(i, this.MODES.OUTPUT);
              this.digitalWrite(i, this.LOW);
            }
            this.name = "MCP23008";
            this.isReady = true;
            this.emit("connect");
            this.emit("ready");
          }
        },
        normalize: {
          value(pin) {
            return pin;
          }
        },
        pinMode: {
          value(pin, mode) {
            const state = priv.get(this);
            const pinIndex = pin;
            const port = this.REGISTER.IODIR;
            let iodir = state.iodir[port];
            if (mode === this.io.MODES.INPUT) {
              iodir |= 1 << pin;
            } else {
              iodir &= ~(1 << pin);
            }
            this.pins[pinIndex].mode = mode;
            this.io.i2cWrite(this.address, [port, iodir]);
            state.iodir[port] = iodir;
          }
        },
        digitalWrite: {
          value(pin, value) {
            const state = priv.get(this);
            const pinIndex = pin;
            const port = this.REGISTER.IODIR;
            const gpioaddr = this.REGISTER.GPIO;
            let gpio = state.olat[port];
            if (value === this.io.HIGH) {
              gpio |= 1 << pin;
            } else {
              gpio &= ~(1 << pin);
            }
            this.pins[pinIndex].report = 0;
            this.pins[pinIndex].value = value;
            this.io.i2cWrite(this.address, [gpioaddr, gpio]);
            state.olat[port] = gpio;
            state.gpio[port] = gpio;
          }
        },
        pullUp: {
          value(pin, value) {
            const state = priv.get(this);
            const port = this.REGISTER.IODIR;
            const gppuaddr = this.REGISTER.GPPU;
            let gppu = state.gppu[port];
            if (value === this.io.HIGH) {
              gppu |= 1 << pin;
            } else {
              gppu &= ~(1 << pin);
            }
            this.io.i2cWrite(this.address, [gppuaddr, gppu]);
            state.gppu[port] = gppu;
          }
        },
        digitalRead: {
          value(pin, callback) {
            const pinIndex = pin;
            const gpioaddr = this.REGISTER.GPIO;
            this.pins[pinIndex].report = 1;
            this.on(`digital-read-${pin}`, callback);
            this.io.i2cRead(this.address, gpioaddr, 1, (data) => {
              const byte = data[0];
              const value = byte >> pin & 1;
              this.pins[pinIndex].value = value;
              this.emit(`digital-read-${pin}`, value);
            });
          }
        }
      },
      PCF8574: {
        ADDRESSES: {
          value: [32]
        },
        REGISTER: {},
        initialize: {
          value(options) {
            const state = priv.get(this);
            state.port = 0;
            state.ddr = 0;
            state.pins = 0;
            this.address = options.address || this.ADDRESSES[0];
            options.address = this.address;
            this.io.i2cConfig(options);
            Object.assign(this.MODES, this.io.MODES);
            for (let i = 0; i < 8; i++) {
              this.pins.push({
                supportedModes: [
                  this.MODES.INPUT,
                  this.MODES.OUTPUT
                ],
                mode: 1,
                value: 0,
                report: 0,
                analogChannel: 127
              });
              this.pinMode(i, this.MODES.OUTPUT);
              this.digitalWrite(i, this.LOW);
            }
            this.name = "PCF8574";
            this.isReady = true;
            this.emit("connect");
            this.emit("ready");
          }
        },
        normalize: {
          value(pin) {
            return pin;
          }
        },
        pinMode: {
          value(pin, mode) {
            const state = priv.get(this);
            const pinIndex = pin;
            let port = state.port;
            let ddr = state.ddr;
            const pins = state.pins;
            if (mode === this.MODES.INPUT) {
              ddr &= ~(1 << pin);
              port &= ~(1 << pin);
            } else {
              ddr |= 1 << pin;
              port &= ~(1 << pin);
            }
            this.pins[pinIndex].mode = mode;
            state.port = port;
            state.ddr = ddr;
            this.io.i2cWrite(this.address, pins & ~ddr | port);
          }
        },
        digitalWrite: {
          value(pin, value) {
            const state = priv.get(this);
            const pinIndex = pin;
            let port = state.port;
            const ddr = state.ddr;
            const pins = state.pins;
            if (value) {
              port |= 1 << pin;
            } else {
              port &= ~(1 << pin);
            }
            this.pins[pinIndex].report = 0;
            this.pins[pinIndex].value = value;
            state.port = port;
            this.io.i2cWrite(this.address, pins & ~ddr | port);
          }
        },
        digitalRead: {
          value(pin, callback) {
            const state = priv.get(this);
            const pinIndex = pin;
            this.pins[pinIndex].report = 1;
            this.on(`digital-read-${pin}`, callback);
            this.io.i2cRead(this.address, 1, (data) => {
              const byte = data[0];
              const value = byte >> pin & 1;
              state.pins = byte;
              this.pins[pinIndex].value = value;
              this.emit(`digital-read-${pin}`, value);
            });
          }
        }
      },
      PCF8575: {
        ADDRESSES: {
          value: [32]
        },
        REGISTER: {},
        initialize: {
          value(options) {
            const state = priv.get(this);
            state.port = [0, 1];
            state.gpio = [0, 0];
            this.address = options.address || this.ADDRESSES[0];
            options.address = this.address;
            this.io.i2cConfig(options);
            Object.assign(this.MODES, this.io.MODES);
            for (let i = 0; i < 16; i++) {
              this.pins.push({
                supportedModes: [
                  this.MODES.INPUT,
                  this.MODES.OUTPUT
                ],
                mode: 1,
                value: 0,
                report: 0,
                analogChannel: 127
              });
              this.pinMode(i, this.MODES.OUTPUT);
              this.digitalWrite(i, this.LOW);
            }
            this.io.i2cWrite(this.address, state.gpio);
            this.name = "PCF8575";
            this.isReady = true;
            this.emit("connect");
            this.emit("ready");
          }
        },
        normalize: {
          value(pin) {
            return pin;
          }
        },
        pinMode: {
          value(pin, mode) {
            const pinIndex = pin;
            this.pins[pinIndex].mode = mode;
          }
        },
        digitalWrite: {
          value(pin, value) {
            const state = priv.get(this);
            const pinIndex = pin;
            let port;
            if (pin < 8) {
              port = 0;
            } else {
              port = 1;
              pin -= 8;
            }
            if (value === this.io.HIGH) {
              state.gpio[port] |= 1 << pin;
            } else {
              state.gpio[port] &= ~(1 << pin);
            }
            this.pins[pinIndex].report = 0;
            this.pins[pinIndex].value = value;
            this.io.i2cWrite(this.address, state.gpio);
          }
        },
        digitalRead: {
          value(pin, callback) {
            const pinIndex = pin;
            let port;
            if (pin < 8) {
              port = 0;
            } else {
              port = 1;
              pin -= 8;
            }
            this.pins[pinIndex].report = 1;
            this.on(`digital-read-${pin}`, callback);
            this.io.i2cRead(this.address, 2, (data) => {
              const byte = data[port];
              const value = byte >> pin & 1;
              this.pins[pinIndex].value = value;
              this.emit(`digital-read-${pin}`, value);
            });
          }
        }
      },
      PCA9685: {
        ADDRESSES: {
          value: [64]
        },
        REGISTER: {
          value: {
            MODE1: 0,
            PRESCALE: 254,
            BASE: 6
          }
        },
        initialize: {
          value(options) {
            const state = priv.get(this);
            state.frequency = Fn.constrain(options.frequency || 1526, 24, 1526);
            this.address = options.address || this.ADDRESSES[0];
            this.pwmRange = options.pwmRange || [0, 4095];
            Object.defineProperties(this, {
              prescale: {
                get() {
                  return Math.round(25e6 / (4096 * state.frequency)) - 1;
                }
              },
              frequency: {
                get() {
                  return state.frequency;
                }
              }
            });
            options.address = this.address;
            this.io.i2cConfig(options);
            this.io.i2cWriteReg(this.address, this.REGISTER.MODE1, 0);
            this.io.i2cWriteReg(this.address, this.REGISTER.MODE1, 16);
            this.io.i2cWriteReg(this.address, this.REGISTER.PRESCALE, this.prescale);
            this.io.i2cWriteReg(this.address, this.REGISTER.MODE1, 0);
            sleep.micro(5);
            this.io.i2cWriteReg(this.address, this.REGISTER.MODE1, 160);
            Object.assign(this.MODES, this.io.MODES);
            for (let i = 0; i < 16; i++) {
              this.pins.push({
                supportedModes: [
                  this.MODES.OUTPUT,
                  this.MODES.PWM,
                  this.MODES.SERVO
                ],
                mode: 0,
                value: 0,
                report: 0,
                analogChannel: 127
              });
              this.pinMode(i, this.MODES.OUTPUT);
              this.digitalWrite(i, this.LOW);
            }
            this.name = "PCA9685";
            this.isReady = true;
            this.emit("connect");
            this.emit("ready");
          }
        },
        normalize: {
          value(pin) {
            return this.io.name.includes("Tessel 2") ? pin - 1 : pin;
          }
        },
        pinMode: {
          value(pin, mode) {
            if (this.pins[pin] === void 0) {
              throw new RangeError(`Invalid PCA9685 pin: ${pin}`);
            }
            this.pins[pin].mode = mode;
          }
        },
        digitalWrite: {
          value(pin, value) {
            this.pwmWrite(pin, value ? 255 : 0);
          }
        },
        analogWrite: {
          value(pin, value) {
            this.pwmWrite(pin, value);
          }
        },
        servoWrite: {
          value(pin, value) {
            let off;
            if (value < 544) {
              value = Fn.constrain(value, 0, 180);
              off = Fn.map(value, 0, 180, this.pwmRange[0] / 4, this.pwmRange[1] / 4);
            } else {
              off = value / 4;
            }
            off |= 0;
            this.io.i2cWrite(this.address, [
              this.REGISTER.BASE + 4 * pin,
              0,
              0,
              off,
              off >> 8
            ]);
          }
        },
        pwmWrite: {
          value(pin, value) {
            if (this.pins[pin] === void 0) {
              throw new RangeError(`Invalid PCA9685 pin: ${pin}`);
            }
            value = Fn.constrain(value, 0, 255);
            let on = 0;
            let off = this.pwmRange[1] * value / 255;
            if (value === 0) {
              on = 0;
              off = 4096;
            }
            if (value === 255) {
              on = 4096;
              off = 0;
            }
            this.io.i2cWrite(this.address, [
              this.REGISTER.BASE + 4 * pin,
              on,
              on >> 8,
              off,
              off >> 8
            ]);
            this.pins[pin].value = value;
          }
        }
      },
      PCF8591: {
        ADDRESSES: {
          value: [72]
        },
        REGISTER: {},
        initialize: {
          value(options) {
            const state = priv.get(this);
            state.control = 69;
            state.reading = false;
            this.address = options.address || this.ADDRESSES[0];
            options.address = this.address;
            this.io.i2cConfig(options);
            Object.assign(this.MODES, this.io.MODES);
            for (let i = 0; i < 4; i++) {
              this.pins.push({
                supportedModes: [
                  this.MODES.ANALOG
                ],
                mode: 1,
                value: 0,
                report: 0,
                analogChannel: i
              });
            }
            this.analogPins.push(0, 1, 2, 3);
            this.io.i2cWrite(this.address, state.control);
            this.name = "PCF8591";
            this.isReady = true;
            this.emit("connect");
            this.emit("ready");
          }
        },
        normalize: {
          value(pin) {
            if (typeof pin === "string" && pin[0] === "A") {
              return +pin.slice(1);
            }
            return pin;
          }
        },
        pinMode: {
          value(pin, mode) {
            this.pins[pin].mode = mode;
          }
        },
        analogRead: {
          value(pin, callback) {
            const state = priv.get(this);
            const pinIndex = pin;
            this.pins[pinIndex].report = 1;
            this.on(`analog-read-${pin}`, callback);
            if (!state.reading) {
              state.reading = true;
              this.io.i2cRead(this.address, 4, (data) => {
                let value;
                for (let i = 0; i < 4; i++) {
                  value = data[i] << 2;
                  this.pins[i].value = value;
                  if (this.pins[i].report) {
                    this.emit(`analog-read-${i}`, value);
                  }
                }
              });
            }
          }
        }
      },
      MUXSHIELD2: {
        initialize: {
          value() {
            const state = priv.get(this);
            state.select = [2, 4, 6, 7];
            state.ios = [null, 10, 11, 12];
            state.io = [null, 14, 15, 16];
            state.aio = [null, 0, 1, 2];
            state.outMode = 8;
            state.pinMap = {};
            state.rowReading = [false, false, false];
            state.rowMode = [null, null, null];
            state.rowValues = [0, 0, 0];
            Object.assign(this.MODES, {
              INPUT: 0,
              OUTPUT: 1,
              ANALOG: 2
            });
            this.io.pinMode(state.select[0], this.MODES.OUTPUT);
            this.io.pinMode(state.select[1], this.MODES.OUTPUT);
            this.io.pinMode(state.select[2], this.MODES.OUTPUT);
            this.io.pinMode(state.select[3], this.MODES.OUTPUT);
            this.io.pinMode(state.outMode, this.MODES.OUTPUT);
            this.io.digitalWrite(state.outMode, this.LOW);
            this.io.pinMode(state.ios[1], this.MODES.OUTPUT);
            this.io.pinMode(state.ios[2], this.MODES.OUTPUT);
            this.io.pinMode(state.ios[3], this.MODES.OUTPUT);
            let row = 1;
            let mask = 16;
            let index = 0;
            for (let i = 0; i < 48; i++) {
              const band = i & mask;
              if (band === mask) {
                row++;
                mask *= 2;
                index = 0;
              }
              state.pinMap[`IO${row}-${index}`] = i;
              this.pins.push({
                row,
                index,
                supportedModes: [
                  this.MODES.INPUT,
                  this.MODES.OUTPUT,
                  this.MODES.ANALOG
                ],
                mode: 1,
                value: 0,
                report: 0,
                analogChannel: i
              });
              this.analogPins.push(i);
              index++;
            }
            this.name = "MUXSHIELD2";
            this.isReady = true;
            this.emit("connect");
            this.emit("ready");
          }
        },
        normalize: {
          value(pin) {
            return pin;
          }
        },
        pinMode: {
          value(pin, mode) {
            const state = priv.get(this);
            const pinIndex = state.pinMap[pin];
            if (pinIndex === void 0) {
              throw new Error(`MUXSHIELD2: Invalid Pin number or name: ${pin}`);
            }
            const row = this.pins[pinIndex].row;
            const rowModeIndex = row - 1;
            const rowMode = state.rowMode[rowModeIndex];
            if (rowMode === mode) {
              return this;
            }
            if (rowMode !== null && rowMode !== mode) {
              throw new Error("MUXSHIELD2: Cannot set mixed modes per IO row.");
            }
            state.rowMode[rowModeIndex] = mode;
            for (let i = 0; i < 16; i++) {
              this.pins[rowModeIndex + i].mode = mode;
            }
            const IO = state.io[row];
            const IOS = state.ios[row];
            if (mode === this.MODES.INPUT) {
              this.io.pinMode(IO, this.MODES.INPUT);
            }
            if (mode === this.MODES.OUTPUT) {
              this.io.pinMode(IO, this.MODES.OUTPUT);
              this.io.digitalWrite(IOS, this.HIGH);
            }
          }
        },
        digitalWrite: {
          value(pin, value) {
            const state = priv.get(this);
            const pinIndex = state.pinMap[pin];
            if (pinIndex === void 0) {
              throw new Error(`MUXSHIELD2: Invalid Pin number or name: ${pin}`);
            }
            const row = this.pins[pinIndex].row;
            const rowValueIndex = row - 1;
            let rowValue = state.rowValues[rowValueIndex];
            const ioPin = row - 1;
            const offset = ioPin * 16;
            const channel = pinIndex - offset;
            if (value) {
              rowValue |= 1 << channel;
            } else {
              rowValue &= ~(1 << channel);
            }
            this.io.digitalWrite(state.select[3], this.LOW);
            this.io.digitalWrite(state.outMode, this.HIGH);
            const S = state.select[row - 1];
            const IO = state.io[row];
            for (let i = 15; i >= 0; i--) {
              this.io.digitalWrite(S, this.LOW);
              this.io.digitalWrite(IO, rowValue >> i & 1);
              this.io.digitalWrite(S, this.HIGH);
            }
            this.io.digitalWrite(state.select[3], this.HIGH);
            this.io.digitalWrite(state.outMode, this.LOW);
            this.pins[pinIndex].value = value;
            state.rowValues[rowValueIndex] = rowValue;
          }
        },
        digitalRead: {
          value(pin, callback) {
            this.ioRead("digital", pin, callback);
          }
        },
        analogRead: {
          value(pin, callback) {
            this.ioRead("analog", pin, callback);
          }
        },
        ioRead: {
          value(type, pin, callback) {
            const state = priv.get(this);
            const pinIndex = state.pinMap[pin];
            if (pinIndex === void 0) {
              throw new Error(`MUXSHIELD2: Invalid Pin number or name: ${pin}`);
            }
            this.on(`${type}-read-${pinIndex}`, callback);
            const isAnalog = type === "analog" ? true : false;
            const row = this.pins[pinIndex].row;
            const rowReadingIndex = row - 1;
            const offset = rowReadingIndex * 16;
            const channel = pinIndex - offset;
            this.pins[pinIndex].report = 1;
            this.pins[pinIndex].channel = channel;
            this.pins[pinIndex].ioPin = isAnalog ? rowReadingIndex : rowReadingIndex + 14;
            const nextPinIndex = () => {
              const startAt = nextPinIndex.lastPinIndex + 1;
              for (let i = startAt; i < this.pins.length; i++) {
                if (this.pins[i].report === 1) {
                  nextPinIndex.lastPinIndex = i;
                  return nextPinIndex.lastPinIndex;
                }
              }
              nextPinIndex.lastPinIndex = -1;
              return nextPinIndex();
            };
            nextPinIndex.lastPinIndex = -1;
            const handler = (value) => {
              const pinIndex2 = nextPinIndex.lastPinIndex;
              const pin2 = this.pins[pinIndex2];
              this.emit(`${type}-read-${pinIndex2}`, value);
              this.io.removeListener(`${type}-read-${pin2.ioPin}`, handler);
              setTimeout(read, 10);
            };
            var read = () => {
              const pinIndex2 = nextPinIndex();
              const pin2 = this.pins[pinIndex2];
              this.select(pin2.channel);
              if (isAnalog) {
                this.io.pinMode(pin2.ioPin, this.io.MODES.ANALOG);
                this.io.analogRead(pin2.ioPin, handler);
              } else {
                this.io.digitalRead(pin2.ioPin, handler);
              }
            };
            if (!state.rowReading[rowReadingIndex]) {
              state.rowReading[rowReadingIndex] = true;
              read();
            }
          }
        },
        select: {
          value(channel) {
            const state = priv.get(this);
            this.io.digitalWrite(state.outMode, this.LOW);
            this.io.digitalWrite(state.select[0], channel & 1);
            this.io.digitalWrite(state.select[1], (channel & 3) >> 1);
            this.io.digitalWrite(state.select[2], (channel & 7) >> 2);
            this.io.digitalWrite(state.select[3], (channel & 15) >> 3);
          }
        }
      },
      GROVEPI: {
        ADDRESSES: {
          value: [4]
        },
        REGISTER: {},
        COMMANDS: {
          value: {
            DIGITAL_READ: 1,
            DIGITAL_WRITE: 2,
            ANALOG_READ: 3,
            ANALOG_WRITE: 4,
            PIN_MODE: 5,
            PING_READ: 7
          }
        },
        initialize: {
          value(options) {
            const state = priv.get(this);
            state.isReading = false;
            state.pinMap = {
              D2: 2,
              D3: 3,
              D4: 4,
              D5: 5,
              D6: 6,
              D7: 7,
              D8: 8,
              A0: 14,
              A1: 15,
              A2: 16
            };
            this.isPwm = (name) => {
              const number = typeof name === "number" ? name : parseInt(name[1]);
              return number === 3 || number === 5 || number === 6;
            };
            this.address = options.address || this.ADDRESSES[0];
            options.address = this.address;
            this.io.i2cConfig(options);
            Object.assign(this.MODES, this.io.MODES);
            let analogChannel;
            for (let i = 0; i < 17; i++) {
              analogChannel = 127;
              if (i <= 1 || i >= 9 && i < 14) {
                this.pins.push({
                  supportedModes: [],
                  mode: 0,
                  value: 0,
                  report: 0,
                  analogChannel
                });
              } else {
                this.pins.push({
                  supportedModes: [
                    this.MODES.INPUT,
                    this.MODES.OUTPUT
                  ],
                  mode: 0,
                  value: 0,
                  report: 0,
                  analogChannel
                });
                if (this.isPwm(i)) {
                  this.pins[i].supportedModes.push(this.MODES.PWM);
                }
                if (i >= 14 && i <= 17) {
                  this.pins[i].analogChannel = i - 14;
                  this.pins[i].supportedModes.push(this.MODES.ANALOG);
                  this.analogPins.push(i);
                  this.pinMode(`A${this.pins[i].analogChannel}`, this.MODES.ANALOG);
                } else {
                  this.pinMode(`D${i}`, this.MODES.OUTPUT);
                  this.digitalWrite(`D${i}`, this.LOW);
                }
              }
            }
            this.name = "GROVEPI";
            this.isReady = true;
            this.emit("connect");
            this.emit("ready");
          }
        },
        normalize: {
          value(pin) {
            return pin;
          }
        },
        pinMode: {
          value(pin, mode) {
            const state = priv.get(this);
            const pinIndex = state.pinMap[pin];
            if (mode === this.io.MODES.INPUT || mode === this.io.MODES.ANALOG) {
              this.pins[pinIndex].mode = 0;
            } else {
              this.pins[pinIndex].mode = 1;
            }
            this.io.i2cWrite(this.address, [
              this.COMMANDS.PIN_MODE,
              pinIndex,
              this.pins[pinIndex].mode,
              0
            ]);
          }
        },
        digitalWrite: {
          value(pin, value) {
            const state = priv.get(this);
            const pinIndex = state.pinMap[pin];
            value = value ? 1 : 0;
            this.io.i2cWrite(this.address, [
              this.COMMANDS.DIGITAL_WRITE,
              pinIndex,
              value,
              0
            ]);
            this.pins[pinIndex].value = value;
          }
        },
        ioRead: {
          value(pin, type, callback) {
            const state = priv.get(this);
            const pinIndex = state.pinMap[pin];
            const isAnalog = type === "analog";
            const length = isAnalog ? 3 : 1;
            const command = isAnalog ? this.COMMANDS.ANALOG_READ : this.COMMANDS.DIGITAL_READ;
            this.on(`${type}-read-${pinIndex}`, callback);
            this.pins[pinIndex].report = 1;
            this.pins[pinIndex].command = command;
            this.pins[pinIndex].type = type;
            this.pins[pinIndex].length = length;
            const nextPinIndex = () => {
              const startAt = nextPinIndex.lastPinIndex + 1;
              for (let i = startAt; i < this.pins.length; i++) {
                if (this.pins[i].report === 1) {
                  nextPinIndex.lastPinIndex = i;
                  return nextPinIndex.lastPinIndex;
                }
              }
              nextPinIndex.lastPinIndex = -1;
              return nextPinIndex();
            };
            nextPinIndex.lastPinIndex = -1;
            const handler = (pinIndex2, value) => {
              const pin2 = this.pins[pinIndex2];
              let canEmit = true;
              if (pin2.type === "digital" && this.pins[pinIndex2].value === value) {
                canEmit = false;
              }
              this.pins[pinIndex2].value = value;
              if (canEmit) {
                this.emit(`${pin2.type}-read-${pinIndex2}`, value);
              }
              setTimeout(read, 1);
            };
            var read = () => {
              const pinIndex2 = nextPinIndex();
              const pin2 = this.pins[pinIndex2];
              const isAnalog2 = pin2.type === "analog";
              this.io.i2cWrite(this.address, [pin2.command, pinIndex2, 0, 0]);
              this.io.i2cReadOnce(this.address, pin2.length, (data) => {
                let value;
                if (isAnalog2) {
                  value = (data[1] << 8) + data[2];
                } else {
                  value = data[0];
                }
                handler(pinIndex2, value);
              });
            };
            if (!state.isReading) {
              state.isReading = true;
              read();
            }
          }
        },
        digitalRead: {
          value(pin, callback) {
            this.ioRead(pin, "digital", callback);
          }
        },
        analogRead: {
          value(pin, callback) {
            this.ioRead(pin, "analog", callback);
          }
        },
        pingRead: {
          value({ pin }, callback) {
            const state = priv.get(this);
            const pinIndex = state.pinMap[pin];
            this.io.i2cWrite(this.address, [
              this.COMMANDS.PING_READ,
              pinIndex,
              0,
              0
            ]);
            setTimeout(() => {
              this.once(`ping-read-${pin}`, callback);
              this.io.i2cReadOnce(this.address, 3, (data) => {
                const value = Math.round(((data[1] << 8) + data[2]) * 29 * 2);
                this.pins[pinIndex].value = value;
                this.emit(`ping-read-${pin}`, value);
              });
            }, 200);
          }
        },
        analogWrite: {
          value(pin, value) {
            this.pwmWrite(pin, value);
          }
        },
        pwmWrite: {
          writable: true,
          value(pin, value) {
            const state = priv.get(this);
            const pinIndex = state.pinMap[pin];
            value = Fn.constrain(value, 0, 255);
            this.io.i2cWrite(this.address, [
              this.COMMANDS.ANALOG_WRITE,
              pinIndex,
              value,
              0
            ]);
            this.pins[pinIndex].value = value;
          }
        }
      },
      "74HC595": {
        initialize: {
          value({ pins }) {
            const state = priv.get(this);
            if (!pins.data) {
              throw new Error("Expected pins.data");
            }
            if (!pins.clock) {
              throw new Error("Expected pins.clock");
            }
            if (!pins.latch) {
              throw new Error("Expected pins.latch");
            }
            state.data = pins.data;
            state.clock = pins.clock;
            state.latch = pins.latch;
            state.value = 0;
            Object.assign(this.MODES, this.io.MODES);
            this.pins = [];
            for (let i = 0; i < 8; i++) {
              this.pins.push({
                supportedModes: [
                  this.MODES.OUTPUT
                ],
                mode: 1,
                value: 0,
                report: 0,
                analogChannel: 127
              });
            }
            this.portWrite(0, state.value);
            this.name = "74HC595";
            this.isReady = true;
            this.emit("connect");
            this.emit("ready");
          }
        },
        normalize: {
          value(pin) {
            return pin;
          }
        },
        pinMode: {
          value(pin, mode) {
            this.pins[pin].mode = mode;
          }
        },
        digitalWrite: {
          value(pin, value) {
            const state = priv.get(this);
            if (value) {
              state.value |= 1 << pin;
            } else {
              state.value &= ~(1 << pin);
            }
            this.pins[pin].value = value;
            this.portWrite(0, state.value);
          }
        },
        portWrite: {
          writable: true,
          configurable: true,
          value(port, value) {
            const state = priv.get(this);
            state.value = value;
            this.board.digitalWrite(state.latch, this.io.LOW);
            this.board.shiftOut(state.data, state.clock, true, state.value);
            this.board.digitalWrite(state.latch, this.io.HIGH);
            for (let i = 0; i < 8; i++) {
              this.pins[i].value = state.value >> i & 1;
            }
          }
        }
      },
      CD74HC4067: {
        ADDRESSES: {
          value: [10, 11, 12, 13]
        },
        REGISTER: {},
        initialize: {
          value(options) {
            const state = priv.get(this);
            state.reading = false;
            this.address = options.address || this.ADDRESSES[0];
            options.address = this.address;
            this.io.i2cConfig(options);
            Object.assign(this.MODES, this.io.MODES);
            for (let i = 0; i < 16; i++) {
              this.pins.push({
                supportedModes: [
                  this.MODES.ANALOG
                ],
                mode: 1,
                value: 0,
                report: 0,
                analogChannel: i
              });
              this.analogPins.push(i);
            }
            this.name = "CD74HC4067";
            this.isReady = true;
            this.emit("connect");
            this.emit("ready");
          }
        },
        normalize: {
          value(pin) {
            if (typeof pin === "string" && pin[0] === "A") {
              return +pin.slice(1);
            }
            return pin;
          }
        },
        pinMode: {
          value(pin, mode) {
            this.pins[pin].mode = mode;
          }
        },
        analogRead: {
          value(pin, callback) {
            const state = priv.get(this);
            const pinIndex = pin;
            this.pins[pinIndex].report = 1;
            this.on(`analog-read-${pin}`, callback);
            this.io.i2cWrite(this.address, pinIndex, 1);
            if (!state.reading) {
              state.reading = true;
              this.io.i2cRead(this.address, 32, (data) => {
                let value;
                for (let i = 0; i < 16; i++) {
                  const index = i * 2;
                  value = (data[index] << 8) + data[index + 1];
                  this.pins[i].value = value;
                  if (this.pins[i].report) {
                    this.emit(`analog-read-${i}`, value);
                  }
                }
              });
            }
          }
        }
      },
      LIS3DH: {
        ADDRESSES: {
          value: [24]
        },
        REGISTER: {
          value: {
            OUT_ADC1_L: 8,
            OUT_X_L: 40,
            CTRL_REG1: 32,
            CTRL_REG2: 33,
            CTRL_REG3: 34,
            CTRL_REG4: 35,
            CTRL_REG5: 36,
            TEMP_CFG_REG: 31
          }
        },
        initialize: {
          value(options) {
            const state = priv.get(this);
            state.reading = false;
            this.address = options.address || this.ADDRESSES[0];
            options.address = this.address;
            this.io.i2cConfig(options);
            let ctrl1 = 7;
            ctrl1 = ctrl1 & ~240 | 7 << 4;
            this.io.i2cWrite(this.address, this.REGISTER.CTRL_REG1, ctrl1);
            this.io.i2cWrite(this.address, this.REGISTER.CTRL_REG4, 136);
            this.io.i2cWrite(this.address, this.REGISTER.CTRL_REG3, 16);
            Object.assign(this.MODES, this.io.MODES);
            for (let i = 0; i < 4; i++) {
              if (i === 0) {
                this.pins.push({
                  supportedModes: [],
                  mode: 0,
                  value: 0,
                  report: 0,
                  analogChannel: 127
                });
              } else {
                this.pins.push({
                  supportedModes: [this.MODES.ANALOG],
                  mode: 1,
                  value: 0,
                  report: 0,
                  analogChannel: i
                });
                this.analogPins.push(i);
              }
            }
            this.name = "LIS3DH";
            this.isReady = true;
            this.emit("connect");
            this.emit("ready");
          }
        },
        normalize: {
          value(pin) {
            if (typeof pin === "string" && pin[0] === "A") {
              return +pin.slice(1);
            }
            return pin;
          }
        },
        pinMode: {
          value(pin, mode) {
            this.pins[pin].mode = mode;
          }
        },
        analogRead: {
          value(pin, callback) {
            const state = priv.get(this);
            const pinIndex = pin;
            this.pins[pinIndex].report = 1;
            this.on(`analog-read-${pin}`, callback);
            if (!state.reading) {
              state.reading = true;
              this.io.i2cWrite(this.address, this.REGISTER.TEMP_CFG_REG, 128);
              this.io.i2cRead(this.address, this.REGISTER.OUT_ADC1_L | 128, 6, (data) => {
                this.pins[1].value = Fn.scale(Fn.int16(data[1], data[0]), -32512, 32512, 1023, 0);
                this.pins[2].value = Fn.scale(Fn.int16(data[3], data[2]), -32512, 32512, 1023, 0);
                this.pins[3].value = Fn.scale(Fn.int16(data[5], data[4]), -32512, 32512, 1023, 0);
                for (let i = 1; i < 4; i++) {
                  if (this.pins[i].report) {
                    this.emit(`analog-read-${i}`, this.pins[i].value);
                  }
                }
              });
            }
          }
        },
        i2cConfig: {
          value(...args) {
            return this.io.i2cConfig.apply(this.io, args);
          }
        },
        i2cWrite: {
          value(...args) {
            return this.io.i2cWrite.apply(this.io, args);
          }
        },
        i2cWriteReg: {
          value(...args) {
            return this.io.i2cWriteReg.apply(this.io, args);
          }
        },
        i2cRead: {
          value(...args) {
            return this.io.i2cRead.apply(this.io, args);
          }
        },
        i2cReadOnce: {
          value(...args) {
            return this.io.i2cReadOnce.apply(this.io, args);
          }
        }
      },
      ADS1115: {
        ADDRESSES: {
          value: [72, 73, 74, 75]
        },
        REGISTER: {
          value: {
            CONFIG: 1,
            READ: 0,
            PIN: [193, 209, 225, 241],
            PIN_DATA: 131
          }
        },
        initialize: {
          value(options) {
            const state = priv.get(this);
            state.reading = false;
            this.address = options.address || this.ADDRESSES[0];
            options.address = this.address;
            this.io.i2cConfig(options);
            Object.assign(this.MODES, this.io.MODES);
            for (let i = 0; i < 4; i++) {
              this.pins.push({
                supportedModes: [
                  this.MODES.ANALOG
                ],
                mode: 1,
                value: 0,
                report: 0,
                analogChannel: i
              });
              this.analogPins.push(i);
            }
            this.name = "ADS1115";
            this.isReady = true;
            this.emit("connect");
            this.emit("ready");
          }
        },
        normalize: {
          value(pin) {
            if (typeof pin === "string" && pin[0] === "A") {
              return +pin.slice(1);
            }
            return pin;
          }
        },
        pinMode: {
          value(pin, mode) {
            this.pins[pin].mode = mode;
          }
        },
        analogRead: {
          value(pin, callback) {
            const state = priv.get(this);
            this.pins[pin].report = 1;
            let ready = false;
            this.on(`analog-read-${pin}`, callback);
            if (!state.reading) {
              state.reading = true;
              const delay = () => {
                setTimeout(() => {
                  ready = true;
                }, 8);
              };
              this.io.i2cWrite(this.address, this.REGISTER.CONFIG, [this.REGISTER.PIN[pin], this.REGISTER.PIN_DATA]);
              delay();
              this.io.i2cRead(this.address, this.REGISTER.READ, 2, (data) => {
                if (ready) {
                  ready = false;
                  const newPin = pin === this.pins.length - 1 ? 0 : pin + 1;
                  this.io.i2cWrite(this.address, this.REGISTER.CONFIG, [this.REGISTER.PIN[newPin], this.REGISTER.PIN_DATA]);
                  const value = (data[0] << 8) + data[1];
                  this.pins[pin].value = value;
                  if (this.pins[pin].report) {
                    this.emit(`analog-read-${pin}`, value);
                  }
                  pin = newPin;
                  delay();
                }
              });
            }
          }
        }
      }
    };
    Controllers["CD74HCT4067"] = Controllers.CD74HC4067;
    Controllers["74HC4067"] = Controllers.CD74HC4067;
    Controllers.PCF8574A = Object.assign({}, Controllers.PCF8574, {
      ADDRESSES: {
        value: [56]
      }
    });
    var methods = Object.keys(Board.prototype);
    Object.keys(Controllers).forEach((name) => {
      methods.forEach((key) => {
        if (Controllers[name][key] === void 0) {
          Controllers[name][key] = {
            writable: true,
            configurable: true,
            value() {
              throw new Error(`Expander:${name} does not support ${key}`);
            }
          };
        }
      });
    });
    var nonAddressable = [
      "74HC595"
    ];
    var Expander = class extends Base {
      constructor(options) {
        super();
        let addressError = "Expander cannot reuse an active address";
        let expander = null;
        let controllerValue;
        if (typeof options === "string") {
          controllerValue = options;
        }
        Board.Component.call(this, options = Board.Options(options), {
          normalizePin: false,
          requestPin: false
        });
        if (nonAddressable.includes(options.controller) && typeof this.address === "undefined") {
          this.address = Fn.uid();
        }
        expander = active.get(this.address);
        if (expander) {
          if (this.bus && (expander.bus !== void 0 && expander.bus === this.bus)) {
            addressError += " on this bus";
          }
          throw new Error(addressError);
        }
        if (typeof options.controller === "undefined" && controllerValue) {
          options.controller = controllerValue;
        }
        Board.Controller.call(this, Controllers, options);
        priv.set(this, {});
        if (typeof this.initialize === "function") {
          this.initialize(options);
        }
        active.set(this.address, this);
      }
    };
    Expander.get = (required) => {
      if (!required.address || !required.controller) {
        throw new Error("Expander.get(...) requires an address and controller");
      }
      if (required.address !== void 0) {
        required.address = Number(required.address);
      }
      if (Number.isNaN(required.address)) {
        throw new Error("Expander.get(...) expects address to be a number");
      }
      if (typeof required.controller !== "string") {
        throw new Error("Expander.get(...) expects controller name to be a string");
      }
      const expander = active.get(required.address);
      if (expander && expander.name === required.controller.toUpperCase()) {
        return expander;
      }
      return new Expander(required);
    };
    Expander.byAddress = (address) => active.get(address);
    Expander.byController = (name) => {
      let controller = null;
      active.forEach((value) => {
        if (value.name === name.toUpperCase()) {
          controller = value;
        }
      });
      return controller;
    };
    Expander.hasController = (key) => Controllers[key] !== void 0;
    if (!!process.env.IS_TEST_MODE) {
      Expander.Controllers = Controllers;
      Expander.purge = () => {
        priv.clear();
        active.clear();
      };
    }
    module2.exports = Expander;
  }
});

// node_modules/johnny-five/lib/board.js
var require_board = __commonJS({
  "node_modules/johnny-five/lib/board.js"(exports, module2) {
    var Emitter = require_emitter();
    var chalk = require_chalk();
    var Collection = require_collection();
    var Fn = require_fn();
    var Repl = require_repl();
    var Options = require_board_options();
    var Pins = require_board_pins();
    var IS_TEST_MODE = !!process.env.IS_TEST_MODE;
    var Expander;
    var boards = [];
    var rport = /usb|acm|^com/i;
    var UNDEFINED = "undefined";
    var Serial = {
      used: [],
      attempts: [],
      detect(callback) {
        const maxAttempts = 10;
        const retryDelay = 400;
        let serialport;
        if (parseFloat(process.versions.nw) >= 0.13) {
          serialport = require_browser_serialport();
        } else {
          serialport = require_lib10();
        }
        serialport.list().then((results) => {
          const portPaths = results.reduce((accum, result) => {
            let available = true;
            if (!rport.test(result.path)) {
              available = false;
            }
            if (Serial.used.includes(result.path)) {
              available = false;
            }
            if (available) {
              accum.push(result.path);
            }
            return accum;
          }, []);
          if (!portPaths.length) {
            if (IS_TEST_MODE && this.abort) {
              return;
            }
            if (!Serial.attempts[Serial.used.length]) {
              Serial.attempts[Serial.used.length] = 0;
              this.info("Board", "Looking for connected device");
            }
            Serial.attempts[Serial.used.length]++;
            if (Serial.attempts[Serial.used.length] > maxAttempts) {
              this.fail("Board", "No connected device found");
              return;
            }
            setTimeout(() => {
              Serial.detect.call(this, callback);
            }, retryDelay);
            return;
          }
          this.info("Available", chalk.grey(portPaths));
          callback.call(this, portPaths[0]);
        });
      },
      connect(portOrPath, callback) {
        const IO = require_firmata2().Board;
        let caught = null;
        let io;
        let isConnected;
        let path;
        let type;
        if (typeof portOrPath === "object" && portOrPath.path) {
          path = portOrPath.path;
          this.info(portOrPath.transport || "SerialPort", chalk.grey(path));
        } else {
          path = portOrPath;
        }
        Serial.used.push(path);
        try {
          io = new IO(portOrPath, (error) => {
            if (error) {
              caught = error;
            }
            callback.call(this, caught, caught ? "error" : "ready", io);
          });
          io.name = "Firmata";
          io.defaultLed = 13;
          io.port = path;
          isConnected = true;
        } catch (error) {
          caught = error;
        }
        if (caught) {
          caught = caught.message || caught;
        }
        type = isConnected ? "connect" : "error";
        callback.call(this, caught, type, io);
      }
    };
    var Board = class extends Emitter {
      constructor(options = {}) {
        super();
        const replContext = {};
        let isPostponed = false;
        Object.assign(this, options);
        this.timer = null;
        this.isConnected = false;
        this.isReady = false;
        this.io = this.io || null;
        this.register = [];
        this.occupied = [];
        this.Drivers = {};
        if (!this.id) {
          this.id = Fn.uid();
        }
        if (typeof this.debug === UNDEFINED) {
          this.debug = true;
        }
        if (typeof this.repl === UNDEFINED) {
          this.repl = true;
        }
        if (typeof this.sigint === UNDEFINED) {
          this.sigint = true;
        }
        this.pins = null;
        if (this.repl) {
          if (Repl.ref) {
            replContext[this.id] = this;
            Repl.ref.on("ready", function() {
              Repl.ref.inject(replContext);
            });
            this.repl = Repl.ref;
          } else {
            replContext[this.id] = replContext.board = this;
            this.repl = new Repl(replContext);
          }
        }
        if (options.io) {
          this.io = options.io;
          this.isReady = options.io.isReady;
          this.transport = this.io.transport || null;
          this.port = this.io.name;
          this.pins = Board.Pins(this);
          this.RESOLUTION = Object.assign({ ADC: 1023, DAC: null, PWM: 255 }, this.io.RESOLUTION || {});
        } else {
          if (this.port && options.port) {
            Serial.connect.call(this, this.port, finalizeAndBroadcast);
          } else {
            Serial.detect.call(this, function(path) {
              Serial.connect.call(this, path, finalizeAndBroadcast);
            });
          }
        }
        if (!options.port && this.io !== null) {
          this.info("Available", chalk.grey(this.io.name || "unknown"));
          ["connect", "ready"].forEach((type) => {
            this.io.once(type, () => {
              if (type === "ready" && !this.isConnected) {
                isPostponed = true;
              } else {
                finalizeAndBroadcast.call(this, null, type, this.io);
              }
              if (type === "connect" && isPostponed) {
                finalizeAndBroadcast.call(this, null, "ready", this.io);
              }
            });
            if (this.io.isReady) {
              process.nextTick(() => this.io.emit(type));
            }
          });
        }
        this.once("ready", () => {
          const hrstart = process.hrtime();
          this.millis = function() {
            const now = process.hrtime(hrstart);
            return now[1] / 1e6;
          };
          ["close", "disconnect", "error", "string"].forEach((type) => {
            this.io.on(type, (data) => this.emit(type, data));
          });
        });
        boards.push(this);
      }
    };
    function finalizeAndBroadcast(data, type, io) {
      let hasBeenEmitted = false;
      if (!this.io) {
        this.io = io;
      }
      if (type === "error") {
        if (data && data.message) {
          hasBeenEmitted = true;
          this.error("Error", data.message);
        }
      }
      if (type === "connect") {
        this.isConnected = true;
        this.port = io.port || io.name;
        this.info("Connected", chalk.grey(this.port));
        if (!IS_TEST_MODE) {
          this.timer = setTimeout(() => {
            this.error("Device or Firmware Error", "A timeout occurred while connecting to the Board. \n\nPlease check that you've properly flashed the board with the correct firmware.\nSee: https://github.com/rwaldron/johnny-five/wiki/Getting-Started#trouble-shooting\n\nIf connecting to a Leonardo or Leonardo clone, press the 'Reset' button on the board, wait approximately 11 seconds for complete reset, then run your program again.");
            this.emit("error", new Error("A timeout occurred while connecting to the Board."));
          }, this.timeout || 1e4);
        }
      }
      if (type === "ready") {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.isReady = true;
        this.pins = Board.Pins(this);
        this.MODES = this.io.MODES;
        if (typeof io.debug !== UNDEFINED && io.debug === false) {
          this.debug = false;
        }
        if (typeof io.repl !== UNDEFINED && io.repl === false) {
          this.repl = false;
        }
        if (this.repl) {
          this.repl.initialize(() => this.emit("ready"));
        }
        if (io.name !== "Mock" && this.sigint) {
          process.on("SIGINT", () => {
            const failExitTimeout = 1e3;
            this.emit("exit");
            this.warn("Board", "Closing.");
            const timeout = setTimeout(() => {
              process.reallyExit();
            }, failExitTimeout);
            const interval = setInterval(() => {
              if (!this.io.pending) {
                clearInterval(interval);
                clearTimeout(timeout);
                process.nextTick(process.reallyExit);
              }
            }, 1);
          });
        }
        this.RESOLUTION = Object.assign({ ADC: 1023, DAC: null, PWM: 255 }, io.RESOLUTION || {});
      }
      if (this.repl) {
        if (type === "connect") {
          this.emit(type, data);
        }
      } else {
        if (!hasBeenEmitted) {
          this.emit(type, data);
        }
      }
    }
    [
      "digitalWrite",
      "analogWrite",
      "analogRead",
      "digitalRead",
      "pinMode",
      "queryPinState",
      "stepperConfig",
      "stepperStep",
      "sendI2CConfig",
      "sendI2CWriteRequest",
      "sendI2CReadRequest",
      "i2cConfig",
      "i2cWrite",
      "i2cWriteReg",
      "i2cRead",
      "i2cReadOnce",
      "pwmWrite",
      "servoConfig",
      "servoWrite",
      "sysexCommand",
      "sysexResponse",
      "serialConfig",
      "serialWrite",
      "serialRead",
      "serialStop",
      "serialClose",
      "serialFlush",
      "serialListen"
    ].forEach(function(method) {
      Board.prototype[method] = function() {
        this.io[method].apply(this.io, arguments);
        return this;
      };
    });
    Board.prototype.snapshot = function(reducer) {
      const blacklist = this.snapshot.blacklist;
      const special = this.snapshot.special;
      const hasReducer = typeof reducer === "function";
      return this.register.reduce((cAccum, component) => {
        if (typeof component.components === UNDEFINED) {
          cAccum.push(Object.getOwnPropertyNames(component).reduce((pAccum, prop) => {
            const value = component[prop];
            if (!blacklist.includes(prop) && typeof value !== "function") {
              if (hasReducer) {
                const result = reducer(prop, value, component);
                if (result !== void 0) {
                  pAccum[prop] = result;
                }
              } else {
                pAccum[prop] = special[prop] ? special[prop](value) : value;
              }
            }
            return pAccum;
          }, Object.create(null)));
        }
        return cAccum;
      }, []);
    };
    Board.prototype.serialize = function(reducer) {
      return JSON.stringify(this.snapshot(reducer));
    };
    Board.prototype.snapshot.blacklist = [
      "board",
      "io",
      "_events",
      "_eventsCount",
      "state"
    ];
    Board.prototype.samplingInterval = function(ms) {
      if (this.io.setSamplingInterval) {
        this.io.setSamplingInterval(ms);
      } else {
        throw new Error("This IO plugin does not implement an interval adjustment method");
      }
      return this;
    };
    Board.prototype.snapshot.special = {
      mode: function(value) {
        return ["INPUT", "OUTPUT", "ANALOG", "PWM", "SERVO"][value] || "unknown";
      }
    };
    Board.prototype.shiftOut = function(dataPin, clockPin, isBigEndian, value) {
      if (arguments.length === 3) {
        value = isBigEndian;
        isBigEndian = true;
      }
      for (let i = 0; i < 8; i++) {
        this.io.digitalWrite(clockPin, 0);
        if (isBigEndian) {
          this.io.digitalWrite(dataPin, !!(value & 1 << 7 - i) | 0);
        } else {
          this.io.digitalWrite(dataPin, !!(value & 1 << i) | 0);
        }
        this.io.digitalWrite(clockPin, 1);
      }
    };
    var logging = {
      specials: [
        "error",
        "fail",
        "warn",
        "info"
      ],
      colors: {
        log: "white",
        error: "red",
        fail: "inverse",
        warn: "yellow",
        info: "cyan"
      }
    };
    Board.prototype.log = function() {
      var args = Array.from(arguments);
      if (!logging.specials.includes(args[0])) {
        args.unshift("log");
      }
      var type = args.shift();
      var klass = args.shift();
      var message = args.shift();
      var color = logging.colors[type];
      var now = Date.now();
      var event = {
        type,
        timestamp: now,
        class: klass,
        message: "",
        data: null
      };
      if (typeof args[args.length - 1] === "object") {
        event.data = args.pop();
      }
      message += " " + args.join(", ");
      event.message = message.trim();
      if (this.debug) {
        console.log([
          chalk.grey(now),
          chalk.magenta(klass),
          chalk[color](message),
          args.join(", ")
        ].join(" "));
      }
      this.emit(type, event);
      this.emit("message", event);
    };
    logging.specials.forEach(function(type) {
      Board.prototype[type] = function() {
        var args = [].slice.call(arguments);
        args.unshift(type);
        this.log.apply(this, args);
      };
    });
    Board.prototype.wait = function(time, callback) {
      setTimeout(callback, time);
      return this;
    };
    Board.prototype.loop = function(time, callback) {
      var handler = function() {
        callback(function() {
          clearInterval(interval);
        });
      };
      var interval = setInterval(handler, time);
      return this;
    };
    Board.map = Fn.map;
    Board.fmap = Fn.fmap;
    Board.constrain = Fn.constrain;
    Board.range = Fn.range;
    Board.uid = Fn.uid;
    Board.mount = function(arg) {
      var index = typeof arg === "number" && arg, hardware;
      if (arg && arg.board) {
        return arg.board;
      }
      if (typeof index === "number") {
        hardware = boards[index];
        return hardware ? hardware : null;
      }
      if (boards.length) {
        return boards[0];
      }
      return null;
    };
    Board.Component = function(opts, componentOpts) {
      if (typeof opts === UNDEFINED) {
        opts = {};
      }
      if (typeof componentOpts === UNDEFINED) {
        componentOpts = {};
      }
      this.board = Board.mount(opts);
      this.io = this.board.io;
      this.id = opts.id || Board.uid();
      this.custom = opts.custom || {};
      var originalPins;
      if (typeof opts.pin === "number" || typeof opts.pin === "string") {
        originalPins = [opts.pin];
      } else {
        if (Array.isArray(opts.pins)) {
          originalPins = opts.pins.slice();
        } else {
          if (typeof opts.pins === "object" && opts.pins !== null) {
            var pinset = opts.pins || opts.pin;
            originalPins = [];
            for (var p in pinset) {
              originalPins.push(pinset[p]);
            }
          }
        }
      }
      if (opts.controller) {
        if (typeof opts.controller === "string") {
          opts.controller = opts.controller.replace(/-/g, "");
        }
        if (!Expander) {
          Expander = require_expander();
        }
        if (Expander.hasController(opts.controller)) {
          componentOpts = {
            normalizePin: false,
            requestPin: false
          };
        }
      }
      componentOpts = Board.Component.initialization(componentOpts);
      if (componentOpts.normalizePin) {
        opts = Board.Pins.normalize(opts, this.board);
      }
      if (typeof opts.pins !== UNDEFINED) {
        this.pins = opts.pins || [];
      }
      if (typeof opts.pin !== UNDEFINED) {
        this.pin = opts.pin;
      }
      if (typeof opts.emitter !== UNDEFINED) {
        this.emitter = opts.emitter;
      }
      if (typeof opts.address !== UNDEFINED) {
        this.address = opts.address;
      }
      if (typeof opts.controller !== UNDEFINED) {
        this.controller = opts.controller;
      }
      if (typeof opts.bus !== UNDEFINED) {
        this.bus = opts.bus;
      }
      this.board.register.push(this);
    };
    Board.Component.initialization = function(opts) {
      var defaults = {
        requestPin: true,
        normalizePin: true
      };
      return Object.assign({}, defaults, opts);
    };
    Board.Controller = function(controllers, options) {
      let controller;
      if (typeof options.controller === "string") {
        controller = controllers[options.controller] || controllers[options.controller.toUpperCase()];
      } else {
        controller = options.controller || controllers.DEFAULT || null;
      }
      if (controller === null) {
        throw new Error("No Valid Controller Found");
      }
      let requirements = controller.requirements && controller.requirements.value;
      if (requirements) {
        if (requirements.options) {
          Object.keys(requirements.options).forEach(function(key) {
            if (typeof options[key] === UNDEFINED || typeof options[key] !== requirements.options[key].typeof) {
              if (requirements.options[key].throws) {
                throw new Error(requirements.options[key].message);
              } else {
                this.board.warn(this.constructor.name, requirements.options[key].message);
              }
            }
          }, this);
        }
      }
      Object.defineProperties(this, controller);
    };
    Board.Pins = Pins;
    Board.Options = function(options) {
      return new Options(options);
    };
    Object.defineProperty(Board, "cache", {
      get() {
        return boards;
      }
    });
    Board.Event = function(event) {
      if (typeof event === UNDEFINED) {
        throw new Error("Board.Event missing Event object");
      }
      this.type = event.type || "data";
      this.target = event.target || null;
      Object.assign(this, event);
    };
    var Boards = class extends Collection {
      constructor(options) {
        let ports;
        if (Array.isArray(options)) {
          ports = options.slice();
          options = {
            ports
          };
        }
        if (!Array.isArray(options) && typeof options === "object" && options.ports !== void 0) {
          ports = options.ports;
        }
        if (!Array.isArray(ports)) {
          throw new Error("Expected ports to be an array");
        }
        if (typeof options.debug === UNDEFINED) {
          options.debug = true;
        }
        if (typeof options.repl === UNDEFINED) {
          options.repl = true;
        }
        const initialized = {};
        const noRepl = ports.some(({ repl }) => repl === false);
        const noDebug = ports.some(({ debug }) => debug === false);
        const boardObjects = ports.map((port) => {
          let portOpts;
          if (typeof port === "string") {
            portOpts = {};
            if (rport.test(port)) {
              portOpts.port = port;
            } else {
              portOpts.id = port;
            }
          } else {
            portOpts = port;
          }
          portOpts.repl = false;
          return new Board(portOpts);
        });
        super(boardObjects);
        this.debug = options.debug;
        this.repl = options.repl;
        if (noDebug) {
          this.debug = false;
        }
        if (noRepl) {
          this.repl = false;
        }
        const expecteds = this.map((board, index) => {
          initialized[board.id] = board;
          return new Promise((resolve) => {
            this[index].on("error", (error) => this.emit("error", error));
            this[index].on("fail", (event) => this.emit("fail", event));
            this[index].on("ready", () => resolve(this[index]));
          });
        });
        Promise.all(expecteds).then(() => {
          this.each((board) => {
            board.info("Board ID: ", chalk.green(board.id));
          });
          if (this.repl) {
            this.repl = new Repl(Object.assign({}, initialized, {
              board: this
            }));
            this.repl.initialize(() => this.emit("ready", initialized));
          } else {
            this.emit("ready", initialized);
          }
        }).catch((error) => {
          console.error(chalk.red(error));
        });
      }
      static get type() {
        return Board;
      }
    };
    Collection.installMethodForwarding(Boards.prototype, Board.prototype);
    Object.assign(Boards.prototype, Emitter.prototype);
    Boards.prototype.byId = function(id) {
      for (var i = 0; i < this.length; i++) {
        if (this[i].id === id) {
          return this[i];
        }
      }
      return null;
    };
    Boards.prototype.log = Board.prototype.log;
    logging.specials.forEach(function(type) {
      Boards.prototype[type] = function() {
        var args = [].slice.call(arguments);
        args.unshift(type);
        this.log.apply(this, args);
      };
    });
    if (IS_TEST_MODE) {
      Serial.purge = function() {
        Serial.used.length = 0;
      };
      Board.Serial = Serial;
      Board.purge = function() {
        Board.Pins.normalize.clear();
        Repl.isActive = false;
        Repl.isBlocked = true;
        Repl.ref = null;
        boards.length = 0;
      };
      Board.testMode = function(state) {
        if (!arguments.length) {
          return IS_TEST_MODE;
        } else {
          IS_TEST_MODE = state;
        }
      };
    }
    Board.Array = Boards;
    Board.Collection = Boards;
    module2.exports = Board;
  }
});

// node_modules/johnny-five/lib/altimeter.js
var require_altimeter = __commonJS({
  "node_modules/johnny-five/lib/altimeter.js"(exports, module2) {
    var Board = require_board();
    var Emitter = require_emitter();
    var { toFixed } = require_fn();
    var priv = new Map();
    var Controllers = {
      MPL3115A2: {
        requirements: {
          value: {
            options: {
              elevation: {
                throws: false,
                message: "Missing `elevation` option. Without a specified base `elevation`, the altitude measurement will be inaccurate. Use the meters value shown on whatismyelevation.com",
                typeof: "number"
              }
            }
          }
        },
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            Drivers.get(this.board, "MPL3115A2", options).on("data", ({ altitude }) => callback(altitude));
          }
        },
        toMeters: {
          writable: true,
          value(value) {
            return toFixed(value, 1);
          }
        }
      },
      MS5611: {
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            Drivers.get(this.board, "MS5611", options).on("data", ({ altitude }) => callback(altitude));
          }
        },
        toMeters: {
          writable: true,
          value(value) {
            return toFixed(value, 2);
          }
        }
      },
      BMP180: {
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            Drivers.get(this.board, "BMP180", options).on("data", ({ altitude }) => callback(altitude));
          }
        },
        toMeters: {
          writable: true,
          value(value) {
            return toFixed(value, 2);
          }
        }
      },
      BMP280: {
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            Drivers.get(this.board, "BMP280", options).on("data", ({ altitude }) => callback(altitude));
          }
        },
        toMeters: {
          writable: true,
          value(value) {
            return toFixed(value, 3);
          }
        }
      },
      BME280: {
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            Drivers.get(this.board, "BME280", options).on("data", ({ altitude }) => callback(altitude));
          }
        },
        toMeters: {
          writable: true,
          value(value) {
            return toFixed(value, 3);
          }
        }
      }
    };
    Controllers["BMP085"] = Controllers["BMP-085"] = Controllers.BMP180;
    var Altimeter = class extends Emitter {
      constructor(options) {
        super();
        Board.Component.call(this, options = Board.Options(options));
        Board.Controller.call(this, Controllers, options);
        const state = {};
        const freq = options.freq || 25;
        let last = null;
        let value = null;
        if (!this.toMeters) {
          this.toMeters = options.toMeters || ((x) => x);
        }
        priv.set(this, state);
        const descriptors = {
          meters: {
            get() {
              return this.toMeters(value);
            }
          },
          feet: {
            get() {
              return toFixed(this.meters * 3.28084, 2);
            }
          }
        };
        descriptors.m = descriptors.meters;
        descriptors.ft = descriptors.feet;
        Object.defineProperties(this, descriptors);
        if (typeof this.initialize === "function") {
          this.initialize(options, (data) => value = data);
        }
        setInterval(() => {
          if (value == null) {
            return;
          }
          const data = {};
          data.m = data.meters = this.meters;
          data.ft = data.feet = this.feet;
          this.emit("data", data);
          if (this.meters !== last) {
            last = this.meters;
            this.emit("change", data);
          }
        }, freq);
      }
    };
    if (!!process.env.IS_TEST_MODE) {
      Altimeter.Controllers = Controllers;
      Altimeter.purge = function() {
        priv.clear();
      };
    }
    module2.exports = Altimeter;
  }
});

// node_modules/johnny-five/lib/barometer.js
var require_barometer = __commonJS({
  "node_modules/johnny-five/lib/barometer.js"(exports, module2) {
    var Board = require_board();
    var Emitter = require_emitter();
    var { toFixed } = require_fn();
    var Controllers = {
      MPL115A2: {
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            Drivers.get(this.board, "MPL115A2", options).on("data", ({ pressure }) => callback(pressure));
          }
        },
        toPressure: {
          value(value) {
            return toFixed(65 / 1023 * value + 50, 2);
          }
        }
      },
      MPL3115A2: {
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            Drivers.get(this.board, "MPL3115A2", options).on("data", ({ pressure }) => callback(pressure));
          }
        },
        toPressure: {
          value(value) {
            const inches = value / 4 / 3377;
            const output = inches * 3.39;
            return toFixed(output, 4);
          }
        }
      },
      BMP180: {
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            Drivers.get(this.board, "BMP180", options).on("data", ({ pressure }) => callback(pressure));
          }
        },
        toPressure: {
          value(value) {
            return toFixed(value / 1e3, 3);
          }
        }
      },
      BMP280: {
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            Drivers.get(this.board, "BMP280", options).on("data", ({ pressure }) => callback(pressure));
          }
        },
        toPressure: {
          value(value) {
            return toFixed(value / 1e3, 5);
          }
        }
      },
      BME280: {
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            Drivers.get(this.board, "BME280", options).on("data", ({ pressure }) => callback(pressure));
          }
        },
        toPressure: {
          value(value) {
            return toFixed(value / 1e3, 5);
          }
        }
      },
      MS5611: {
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            Drivers.get(this.board, "MS5611", options).on("data", ({ pressure }) => callback(pressure));
          }
        },
        toPressure: {
          value(value) {
            return toFixed(value / 1e3, 4);
          }
        }
      }
    };
    Controllers.BMP085 = Controllers.BMP180;
    var Barometer = class extends Emitter {
      constructor(options) {
        super();
        Board.Component.call(this, options = Board.Options(options));
        Board.Controller.call(this, Controllers, options);
        const freq = options.freq || 25;
        let last = null;
        let raw = null;
        if (!this.toPressure) {
          this.toPressure = options.toPressure || ((x) => x);
        }
        if (typeof this.initialize === "function") {
          this.initialize(options, (data) => {
            raw = data;
          });
        }
        Object.defineProperties(this, {
          pressure: {
            get() {
              return this.toPressure(raw);
            }
          }
        });
        setInterval(() => {
          if (raw === null) {
            return;
          }
          const data = {
            pressure: this.pressure
          };
          this.emit("data", data);
          if (this.pressure !== last) {
            last = this.pressure;
            this.emit("change", data);
          }
        }, freq);
      }
    };
    if (!!process.env.IS_TEST_MODE) {
      Barometer.Controllers = Controllers;
      Barometer.purge = function() {
      };
    }
    module2.exports = Barometer;
  }
});

// node_modules/johnny-five/lib/gyro.js
var require_gyro = __commonJS({
  "node_modules/johnny-five/lib/gyro.js"(exports, module2) {
    var Board = require_board();
    var Emitter = require_emitter();
    var Fn = require_fn();
    var sum = Fn.sum;
    var toFixed = Fn.toFixed;
    var priv = new Map();
    var axes = ["x", "y", "z"];
    var Controllers = {
      ANALOG: {
        initialize: {
          value(options, callback) {
            const pins = options.pins || [];
            let sensitivity;
            let resolution;
            const state = priv.get(this);
            const dataPoints = {};
            if (options.sensitivity === void 0) {
              throw new Error("Expected a Sensitivity");
            }
            sensitivity = options.sensitivity;
            resolution = options.resolution || 4.88;
            state.K = resolution / sensitivity;
            pins.forEach(function(pin, index) {
              this.io.pinMode(pin, this.io.MODES.ANALOG);
              this.io.analogRead(pin, (data) => {
                const axis = axes[index];
                dataPoints[axis] = data;
                callback(dataPoints);
              });
            }, this);
          }
        },
        toNormal: {
          value(raw) {
            return raw >> 2;
          }
        },
        toDegreesPerSecond: {
          value(raw, rawCenter) {
            const normal = this.toNormal(raw);
            const center = this.toNormal(rawCenter);
            const state = priv.get(this);
            return (normal - center) * state.K | 0;
          }
        }
      },
      MPU6050: {
        initialize: {
          value(options, callback) {
            const IMU = require_sip();
            const state = priv.get(this);
            const driver = IMU.Drivers.get(this.board, "MPU6050", options);
            state.sensitivity = options.sensitivity || 131;
            driver.on("data", ({ gyro }) => {
              callback(gyro);
            });
          }
        },
        toNormal: {
          value(raw) {
            return (raw >> 11) + 127;
          }
        },
        toDegreesPerSecond: {
          value(raw, rawCenter) {
            const state = priv.get(this);
            return toFixed((raw - rawCenter) / state.sensitivity, 4);
          }
        }
      },
      BNO055: {
        initialize: {
          value(options, callback) {
            const IMU = require_sip();
            const state = priv.get(this);
            const driver = IMU.Drivers.get(this.board, "BNO055", options);
            state.sensitivity = 16;
            driver.on("data", ({ gyro }) => {
              callback(gyro);
            });
          }
        },
        toNormal: {
          value(raw) {
            return raw;
          }
        },
        toDegreesPerSecond: {
          value(raw) {
            const state = priv.get(this);
            return toFixed(raw / state.sensitivity, 4);
          }
        }
      }
    };
    Controllers.DEFAULT = Controllers.ANALOG;
    var Gyro = class extends Emitter {
      constructor(options) {
        super();
        let isCalibrated = false;
        const sampleSize = 100;
        const state = {
          x: {
            angle: 0,
            value: 0,
            previous: 0,
            calibration: [],
            stash: [0, 0, 0, 0, 0],
            center: 0,
            hasValue: false
          },
          y: {
            angle: 0,
            value: 0,
            previous: 0,
            calibration: [],
            stash: [0, 0, 0, 0, 0],
            center: 0,
            hasValue: false
          },
          z: {
            angle: 0,
            value: 0,
            previous: 0,
            calibration: [],
            stash: [0, 0, 0, 0, 0],
            center: 0,
            hasValue: false
          }
        };
        Board.Component.call(this, options = Board.Options(options));
        Board.Controller.call(this, Controllers, options);
        if (!this.toNormal) {
          this.toNormal = options.toNormal || ((raw) => raw);
        }
        if (!this.toDegreesPerSecond) {
          this.toDegreesPerSecond = options.toDegreesPerSecond || ((raw) => raw);
        }
        priv.set(this, state);
        if (typeof this.initialize === "function") {
          this.initialize(options, (data) => {
            let isChange = false;
            Object.keys(data).forEach((axis) => {
              const value = data[axis];
              const sensor = state[axis];
              sensor.previous = sensor.value;
              sensor.stash.shift();
              sensor.stash.push(value);
              sensor.hasValue = true;
              sensor.value = sum(sensor.stash) / 5 | 0;
              if (!isCalibrated && (state.x.calibration.length === sampleSize && state.y.calibration.length === sampleSize && (this.z === void 0 || state.z.calibration.length === sampleSize))) {
                isCalibrated = true;
                state.x.center = sum(state.x.calibration) / sampleSize | 0;
                state.y.center = sum(state.y.calibration) / sampleSize | 0;
                state.z.center = sum(state.z.calibration) / sampleSize | 0;
                state.x.calibration.length = 0;
                state.y.calibration.length = 0;
                state.z.calibration.length = 0;
              } else {
                if (sensor.calibration.length < sampleSize) {
                  sensor.calibration.push(value);
                }
              }
              if (sensor.previous !== sensor.value) {
                isChange = true;
              }
            });
            if (isCalibrated) {
              state.x.angle += this.rate.x / 100;
              state.y.angle += this.rate.y / 100;
              state.z.angle += this.rate.z / 100;
              this.emit("data", {
                x: this.x,
                y: this.y,
                z: this.z
              });
              if (isChange) {
                this.emit("change", {
                  x: this.x,
                  y: this.y,
                  z: this.z
                });
              }
            }
          });
        }
        Object.defineProperties(this, {
          isCalibrated: {
            get() {
              return isCalibrated;
            },
            set(value) {
              if (typeof value === "boolean") {
                isCalibrated = value;
              }
            }
          },
          pitch: {
            get() {
              return {
                rate: toFixed(this.rate.y, 2),
                angle: toFixed(state.y.angle, 2)
              };
            }
          },
          roll: {
            get() {
              return {
                rate: toFixed(this.rate.x, 2),
                angle: toFixed(state.x.angle, 2)
              };
            }
          },
          yaw: {
            get() {
              return {
                rate: this.z !== void 0 ? toFixed(this.rate.z, 2) : 0,
                angle: this.z !== void 0 ? toFixed(state.z.angle, 2) : 0
              };
            }
          },
          x: {
            get() {
              return toFixed(this.toNormal(state.x.value), 4);
            }
          },
          y: {
            get() {
              return toFixed(this.toNormal(state.y.value), 4);
            }
          },
          z: {
            get() {
              return state.z.hasValue ? toFixed(this.toNormal(state.z.value), 4) : void 0;
            }
          },
          rate: {
            get() {
              const x = this.toDegreesPerSecond(state.x.value, state.x.center);
              const y = this.toDegreesPerSecond(state.y.value, state.y.center);
              const z = state.z.hasValue ? this.toDegreesPerSecond(state.z.value, state.z.center) : 0;
              return {
                x,
                y,
                z
              };
            }
          }
        });
      }
      recalibrate() {
        this.isCalibrated = false;
      }
    };
    Object.defineProperties(Gyro, {
      TK_4X: {
        value: 0.67
      },
      TK_1X: {
        value: 0.167
      }
    });
    if (!!process.env.IS_TEST_MODE) {
      Gyro.Controllers = Controllers;
      Gyro.purge = () => {
        priv.clear();
      };
    }
    module2.exports = Gyro;
  }
});

// node_modules/johnny-five/lib/hygrometer.js
var require_hygrometer = __commonJS({
  "node_modules/johnny-five/lib/hygrometer.js"(exports, module2) {
    var Board = require_board();
    var Emitter = require_emitter();
    var Fn = require_fn();
    var priv = new Map();
    var {
      toFixed,
      POW_2_14,
      POW_2_16
    } = Fn;
    var writable = true;
    var Controllers = {
      SHT31D: {
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            Drivers.get(this.board, "SHT31D", options).on("data", ({ humidity }) => callback(humidity));
          }
        },
        toRelativeHumidity: {
          writable,
          value(value) {
            return toFixed(100 * (value / (POW_2_16 - 1)), 2);
          }
        }
      },
      HTU21D: {
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            Drivers.get(this.board, "HTU21D", options).on("data", ({ humidity }) => callback(humidity));
          }
        },
        toRelativeHumidity: {
          writable,
          value(value) {
            return toFixed(-6 + 125 * (value / POW_2_16), 2);
          }
        }
      },
      HIH6130: {
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            Drivers.get(this.board, "HIH6130", options).on("data", ({ humidity }) => callback(humidity));
          }
        },
        toRelativeHumidity: {
          writable,
          value(value) {
            return toFixed(value / (POW_2_14 - 1) * 100, 2);
          }
        }
      },
      DHT_I2C_NANO_BACKPACK: {
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            Drivers.get(this.board, "DHT_I2C_NANO_BACKPACK", options).on("data", ({ humidity }) => callback(humidity));
          }
        },
        toRelativeHumidity: {
          writable,
          value(raw) {
            return toFixed(raw / 100, 1);
          }
        }
      },
      TH02: {
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            Drivers.get(this.board, "TH02", options).on("data", ({ humidity }) => callback(humidity));
          }
        },
        toRelativeHumidity: {
          writable,
          value(value) {
            if (value > 100) {
              value = 0;
            }
            return toFixed(value || 0, 2);
          }
        }
      },
      SI7020: {
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            Drivers.get(this.board, "SI7020", options).on("data", ({ humidity }) => callback(humidity));
          }
        },
        toRelativeHumidity: {
          writable,
          value(value) {
            return toFixed(125 * value / POW_2_16 - 6, 2);
          }
        }
      },
      BME280: {
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            Drivers.get(this.board, "BME280", options).on("data", ({ humidity }) => callback(humidity));
          }
        },
        toRelativeHumidity: {
          writable,
          value(value) {
            return toFixed(value / 1024, 3);
          }
        }
      }
    };
    Controllers.DHT11_I2C_NANO_BACKPACK = Controllers.DHT_I2C_NANO_BACKPACK;
    Controllers.DHT21_I2C_NANO_BACKPACK = Controllers.DHT_I2C_NANO_BACKPACK;
    Controllers.DHT22_I2C_NANO_BACKPACK = Controllers.DHT_I2C_NANO_BACKPACK;
    Controllers.SI7021 = Controllers.SI7020;
    var Hygrometer = class extends Emitter {
      constructor(options) {
        super();
        const freq = options.freq || 25;
        let last = null;
        let raw = null;
        Board.Component.call(this, options = Board.Options(options));
        Board.Controller.call(this, Controllers, options);
        priv.set(this, {});
        if (!this.toRelativeHumidity) {
          this.toRelativeHumidity = options.toRelativeHumidity || ((x) => x);
        }
        const propDescriptors = {
          relativeHumidity: {
            get() {
              return this.toRelativeHumidity(raw);
            }
          }
        };
        propDescriptors.RH = propDescriptors.relativeHumidity;
        Object.defineProperties(this, propDescriptors);
        if (typeof this.initialize === "function") {
          this.initialize(options, (data) => {
            raw = data;
          });
        }
        setInterval(() => {
          if (raw == null) {
            return;
          }
          if (Number.isNaN(this.relativeHumidity)) {
            return;
          }
          const data = {};
          data.RH = data.relativeHumidity = this.relativeHumidity;
          this.emit("data", data);
          if (this.relativeHumidity !== last) {
            last = this.relativeHumidity;
            this.emit("change", data);
          }
        }, freq);
      }
    };
    if (!!process.env.IS_TEST_MODE) {
      Hygrometer.Controllers = Controllers;
      Hygrometer.purge = () => {
        priv.clear();
      };
    }
    module2.exports = Hygrometer;
  }
});

// node_modules/johnny-five/lib/compass.js
var require_compass = __commonJS({
  "node_modules/johnny-five/lib/compass.js"(exports, module2) {
    var Board = require_board();
    var Emitter = require_emitter();
    var { int16, RAD_TO_DEG, TAU } = require_fn();
    var priv = new Map();
    var Controllers = {
      HMC5883L: {
        REGISTER: {
          value: {
            CRA: 0,
            CRB: 1,
            MODE: 2,
            READ: 3
          }
        },
        initialize: {
          value(opts, dataHandler) {
            const state = priv.get(this);
            const address = opts.address || 30;
            const READLENGTH = 6;
            state.scale = 1;
            Object.assign(state, new Compass.Scale(opts.gauss || 0.88));
            opts.address = address;
            this.io.i2cConfig(opts);
            this.io.i2cWrite(address, this.REGISTER.CRA, 112);
            this.io.i2cWrite(address, this.REGISTER.CRB, 64);
            this.io.i2cWrite(address, this.REGISTER.MODE, 0);
            this.io.i2cRead(address, this.REGISTER.READ, READLENGTH, (bytes) => {
              dataHandler({
                x: int16(bytes[0], bytes[1]),
                y: int16(bytes[4], bytes[5]),
                z: int16(bytes[2], bytes[3])
              });
            });
          }
        },
        toScaledHeading: {
          value({ x, y }) {
            const state = priv.get(this);
            return ToHeading(x * state.scale, y * state.scale);
          }
        }
      },
      HMC6352: {
        REGISTER: {
          value: {
            READ: 65
          }
        },
        initialize: {
          value(opts, dataHandler) {
            const state = priv.get(this);
            const address = opts.address || 33;
            const READLENGTH = 2;
            state.scale = 1;
            opts.delay = 10;
            opts.address = address;
            this.io.i2cConfig(opts);
            this.io.i2cWrite(address, this.REGISTER.READ);
            this.io.i2cRead(address, this.REGISTER.READ, READLENGTH, (bytes) => {
              dataHandler({
                x: ((bytes[0] << 8) + bytes[1]) / 10 | 0,
                y: null,
                z: null
              });
            });
          }
        },
        toScaledHeading: {
          value({ x }) {
            const state = priv.get(this);
            return x * state.scale;
          }
        }
      },
      BNO055: {
        initialize: {
          value(opts, dataHandler) {
            const IMU = require_sip();
            const driver = IMU.Drivers.get(this.board, "BNO055", opts);
            const state = priv.get(this);
            state.sensitivity = 16;
            driver.on("data", ({ magnetometer }) => {
              dataHandler(magnetometer);
            });
          }
        },
        toScaledHeading: {
          value(raw) {
            const state = priv.get(this);
            const x = raw.x / state.sensitivity;
            const y = raw.y / state.sensitivity;
            return ToHeading(x, y);
          }
        }
      },
      MAG3110: {
        REGISTER: {
          value: {
            STATUS: 0,
            READ: 1,
            OFFSETS: 9,
            CTRL_REG1: 16,
            CTRL_REG2: 17
          }
        },
        initialize: {
          value(opts, dataHandler) {
            const state = priv.get(this);
            const address = 14;
            let isDataPending = false;
            let temp;
            state.isCalibrated = false;
            state.isPreCalibrated = false;
            state.hasEmittedCalibration = false;
            state.measurements = 20;
            state.offsets = {
              x: 0,
              y: 0,
              z: 0
            };
            state.accum = {
              x: { offset: null, high: 0, low: 0 },
              y: { offset: null, high: 0, low: 0 },
              z: { offset: null, high: 0, low: 0 }
            };
            opts.delay = 2;
            opts.address = address;
            if (opts.offsets) {
              state.isCalibrated = true;
              state.isPreCalibrated = true;
              if (Array.isArray(opts.offsets)) {
                temp = opts.offsets.slice();
                opts.offsets = {
                  x: temp[0],
                  y: temp[1],
                  z: temp[2]
                };
              }
              state.accum.x.low = opts.offsets.x[0];
              state.accum.x.high = opts.offsets.x[1];
              state.accum.x.offset = (state.accum.x.low + state.accum.x.high) / 2;
              state.accum.y.low = opts.offsets.y[0];
              state.accum.y.high = opts.offsets.y[1];
              state.accum.y.offset = (state.accum.y.low + state.accum.y.high) / 2;
              state.accum.z.low = opts.offsets.z[0];
              state.accum.z.high = opts.offsets.z[1];
              state.accum.z.offset = (state.accum.z.low + state.accum.z.high) / 2;
            }
            this.io.i2cConfig(opts);
            this.io.i2cWrite(address, this.REGISTER.CTRL_REG2, 128);
            this.io.i2cWrite(address, this.REGISTER.CTRL_REG1, 1);
            const measured = {
              x: 0,
              y: 0,
              z: 0
            };
            const readCycle = () => {
              this.io.i2cReadOnce(address, this.REGISTER.STATUS, 1, (data) => {
                if (!isDataPending && (data[0] === 15 || data[0] === 255)) {
                  isDataPending = true;
                  this.io.i2cReadOnce(address, this.REGISTER.READ, 6, (bytes) => {
                    let timeout = 0;
                    isDataPending = false;
                    measured.x = int16(bytes[0], bytes[1]);
                    measured.y = int16(bytes[2], bytes[3]);
                    measured.z = int16(bytes[4], bytes[5]);
                    if (!state.isCalibrated) {
                      if (state.accum.x.offset === null) {
                        state.accum.x.offset = measured.x;
                        state.accum.x.low = measured.x;
                        state.accum.x.high = measured.x;
                      }
                      if (state.accum.y.offset === null) {
                        state.accum.y.offset = measured.y;
                        state.accum.y.low = measured.y;
                        state.accum.y.high = measured.y;
                      }
                      state.accum.x.low = Math.min(state.accum.x.low, measured.x);
                      state.accum.x.high = Math.max(state.accum.x.high, measured.x);
                      state.accum.x.offset = Math.trunc((state.accum.x.low + state.accum.x.high) / 2);
                      state.accum.y.low = Math.min(state.accum.y.low, measured.y);
                      state.accum.y.high = Math.max(state.accum.y.high, measured.y);
                      state.accum.y.offset = Math.trunc((state.accum.y.low + state.accum.y.high) / 2);
                      state.accum.z.low = Math.min(state.accum.z.low, measured.z);
                      state.accum.z.high = Math.max(state.accum.z.high, measured.z);
                      state.accum.z.offset = Math.trunc((state.accum.z.low + state.accum.z.high) / 2);
                      --state.measurements;
                      if (!state.measurements) {
                        state.isCalibrated = true;
                      }
                    }
                    if (state.isCalibrated) {
                      if (!state.hasEmittedCalibration) {
                        state.hasEmittedCalibration = true;
                        state.offsets.x = state.accum.x.offset;
                        state.offsets.y = state.accum.y.offset;
                        state.offsets.z = state.accum.z.offset;
                        this.io.i2cWrite(address, this.REGISTER.OFFSETS, [
                          state.offsets.x >> 7,
                          state.offsets.x << 1 & 255,
                          state.offsets.y >> 7,
                          state.offsets.y << 1 & 255,
                          state.offsets.z >> 7,
                          state.offsets.z << 1 & 255
                        ]);
                        this.emit("calibrated", {
                          x: [state.accum.x.low, state.accum.x.high],
                          y: [state.accum.y.low, state.accum.y.high],
                          z: [state.accum.z.low, state.accum.z.high]
                        });
                      }
                      timeout = Math.floor(1e3 / 80);
                      dataHandler(measured);
                    }
                    setTimeout(readCycle, timeout);
                  });
                } else {
                  readCycle();
                }
              });
            };
            readCycle();
          }
        },
        calibrate: {
          value(measurements) {
            const state = priv.get(this);
            state.isCalibrated = false;
            state.measurements = measurements;
          }
        },
        toScaledHeading: {
          value({ y, x }) {
            const state = priv.get(this);
            const scale = {
              x: 1 / (state.accum.x.high - state.accum.x.low),
              y: 1 / (state.accum.y.high - state.accum.y.low)
            };
            let heading = Math.atan2(-y * scale.y, x * scale.x);
            if (heading < 0) {
              heading += TAU;
            }
            return Math.trunc(heading * RAD_TO_DEG);
          }
        }
      },
      LSM303C: {
        initialize: {
          value(opts, dataHandler) {
            const IMU = require_sip();
            const driver = IMU.Drivers.get(this.board, "LSM303C", opts);
            driver.on("data", ({ magnetometer }) => {
              dataHandler(magnetometer);
            });
          }
        },
        toScaledHeading: {
          value({ x, y }) {
            return ToHeading(x, y);
          }
        }
      }
    };
    var Compass = class extends Emitter {
      constructor(opts) {
        super();
        Board.Component.call(this, opts = Board.Options(opts));
        const freq = opts.freq || 25;
        let raw = {
          x: null,
          y: null,
          z: null
        };
        const state = {
          x: 0,
          y: 0,
          z: 0,
          scale: 0,
          register: 0,
          heading: 0
        };
        Board.Controller.call(this, Controllers, opts);
        if (!this.toScaledHeading) {
          this.toScaledHeading = opts.toScaledHeading || ((raw2) => raw2);
        }
        priv.set(this, state);
        if (typeof this.initialize === "function") {
          this.initialize(opts, (data) => raw = data);
        }
        setInterval(() => {
          if (raw.x === null) {
            return;
          }
          let isChange = false;
          state.x = raw.x;
          state.y = raw.y;
          state.z = raw.z;
          const heading = this.heading;
          if (heading !== state.heading) {
            state.heading = heading;
            isChange = true;
          }
          this.emit("data", { heading });
          if (isChange) {
            this.emit("change", { heading });
          }
        }, freq);
        Object.defineProperties(this, {
          bearing: {
            get() {
              const length = Compass.Points.length;
              const heading = this.heading;
              let point;
              for (let i = 0; i < length; i++) {
                point = Compass.Points[i];
                if (heading >= point.low && heading <= point.high) {
                  return {
                    name: point.name,
                    abbr: point.abbr,
                    low: point.low,
                    high: point.high,
                    heading
                  };
                }
              }
            }
          },
          raw: {
            get() {
              return {
                x: raw.x,
                y: raw.y,
                z: raw.z
              };
            }
          },
          heading: {
            get() {
              return this.toScaledHeading(raw);
            }
          }
        });
      }
    };
    Compass.Scale = class {
      constructor(gauss) {
        if (gauss === 0.88) {
          this.register = 0;
          this.scale = 0.73;
        } else if (gauss === 1.3) {
          this.register = 1;
          this.scale = 0.92;
        } else if (gauss === 1.9) {
          this.register = 2;
          this.scale = 1.22;
        } else if (gauss === 2.5) {
          this.register = 3;
          this.scale = 1.52;
        } else if (gauss === 4) {
          this.register = 4;
          this.scale = 2.27;
        } else if (gauss === 4.7) {
          this.register = 5;
          this.scale = 2.56;
        } else if (gauss === 5.6) {
          this.register = 6;
          this.scale = 3.03;
        } else if (gauss === 8.1) {
          this.register = 7;
          this.scale = 4.35;
        } else {
          this.register = 0;
          this.scale = 1;
        }
        this.register = this.register << 5;
      }
    };
    function ToHeading(x, y) {
      let radians = Math.atan2(y, x);
      if (radians < 0) {
        radians += TAU;
      }
      if (radians > TAU) {
        radians -= TAU;
      }
      return radians * RAD_TO_DEG;
    }
    Compass.Points = [{
      name: "North",
      abbr: "N",
      low: 354.38,
      high: 360
    }, {
      name: "North",
      abbr: "N",
      low: 0,
      high: 5.62
    }, {
      name: "North by East",
      abbr: "NbE",
      low: 5.63,
      high: 16.87
    }, {
      name: "North-NorthEast",
      abbr: "NNE",
      low: 16.88,
      high: 28.12
    }, {
      name: "NorthEast by North",
      abbr: "NEbN",
      low: 28.13,
      high: 39.37
    }, {
      name: "NorthEast",
      abbr: "NE",
      low: 39.38,
      high: 50.62
    }, {
      name: "NorthEast by East",
      abbr: "NEbE",
      low: 50.63,
      high: 61.87
    }, {
      name: "East-NorthEast",
      abbr: "ENE",
      low: 61.88,
      high: 73.12
    }, {
      name: "East by North",
      abbr: "EbN",
      low: 73.13,
      high: 84.37
    }, {
      name: "East",
      abbr: "E",
      low: 84.38,
      high: 95.62
    }, {
      name: "East by South",
      abbr: "EbS",
      low: 95.63,
      high: 106.87
    }, {
      name: "East-SouthEast",
      abbr: "ESE",
      low: 106.88,
      high: 118.12
    }, {
      name: "SouthEast by East",
      abbr: "SEbE",
      low: 118.13,
      high: 129.37
    }, {
      name: "SouthEast",
      abbr: "SE",
      low: 129.38,
      high: 140.62
    }, {
      name: "SouthEast by South",
      abbr: "SEbS",
      low: 140.63,
      high: 151.87
    }, {
      name: "South-SouthEast",
      abbr: "SSE",
      low: 151.88,
      high: 163.12
    }, {
      name: "South by East",
      abbr: "SbE",
      low: 163.13,
      high: 174.37
    }, {
      name: "South",
      abbr: "S",
      low: 174.38,
      high: 185.62
    }, {
      name: "South by West",
      abbr: "SbW",
      low: 185.63,
      high: 196.87
    }, {
      name: "South-SouthWest",
      abbr: "SSW",
      low: 196.88,
      high: 208.12
    }, {
      name: "SouthWest by South",
      abbr: "SWbS",
      low: 208.13,
      high: 219.37
    }, {
      name: "SouthWest",
      abbr: "SW",
      low: 219.38,
      high: 230.62
    }, {
      name: "SouthWest by West",
      abbr: "SWbW",
      low: 230.63,
      high: 241.87
    }, {
      name: "West-SouthWest",
      abbr: "WSW",
      low: 241.88,
      high: 253.12
    }, {
      name: "West by South",
      abbr: "WbS",
      low: 253.13,
      high: 264.37
    }, {
      name: "West",
      abbr: "W",
      low: 264.38,
      high: 275.62
    }, {
      name: "West by North",
      abbr: "WbN",
      low: 275.63,
      high: 286.87
    }, {
      name: "West-NorthWest",
      abbr: "WNW",
      low: 286.88,
      high: 298.12
    }, {
      name: "NorthWest by West",
      abbr: "NWbW",
      low: 298.13,
      high: 309.37
    }, {
      name: "NorthWest",
      abbr: "NW",
      low: 309.38,
      high: 320.62
    }, {
      name: "NorthWest by North",
      abbr: "NWbN",
      low: 320.63,
      high: 331.87
    }, {
      name: "North-NorthWest",
      abbr: "NNW",
      low: 331.88,
      high: 343.12
    }, {
      name: "North by West",
      abbr: "NbW",
      low: 343.13,
      high: 354.37
    }];
    Object.freeze(Compass.Points);
    if (!!process.env.IS_TEST_MODE) {
      Compass.Controllers = Controllers;
      Compass.purge = () => {
        priv.clear();
      };
    }
    module2.exports = Compass;
  }
});

// node_modules/johnny-five/lib/orientation.js
var require_orientation = __commonJS({
  "node_modules/johnny-five/lib/orientation.js"(exports, module2) {
    var Board = require_board();
    var Emitter = require_emitter();
    var priv = new Map();
    var Controllers = {
      BNO055: {
        initialize: {
          value(options, dataHandler) {
            const IMU = require_sip();
            const driver = IMU.Drivers.get(this.board, "BNO055", options);
            driver.on("data", (data) => {
              dataHandler(data);
            });
          }
        },
        toScaledEuler: {
          value({ euler }) {
            return {
              heading: euler.heading / 16,
              roll: euler.roll / 16,
              pitch: euler.pitch / 16
            };
          }
        },
        toScaledQuarternion: {
          value({ quarternion }) {
            return {
              w: quarternion.w * (1 / (1 << 14)),
              x: quarternion.x * (1 / (1 << 14)),
              y: quarternion.y * (1 / (1 << 14)),
              z: quarternion.z * (1 / (1 << 14))
            };
          }
        },
        calibration: {
          get() {
            return priv.get(this).calibration;
          }
        },
        isCalibrated: {
          get() {
            return (this.calibration >> 6 & 3) === 3;
          }
        }
      }
    };
    var Orientation = class extends Emitter {
      constructor(options) {
        super();
        Board.Component.call(this, options = Board.Options(options));
        Board.Controller.call(this, Controllers, options);
        const freq = options.freq || 25;
        const state = {
          euler: {
            heading: 0,
            roll: 0,
            pitch: 0
          },
          quarternion: {
            w: 0,
            x: 0,
            y: 0,
            z: 0
          },
          calibration: 0
        };
        let raw = null;
        priv.set(this, state);
        if (!this.toScaledQuarternion) {
          this.toScaledQuarternion = options.toScaledQuarternion || ((x) => x);
        }
        if (!this.toScaledEuler) {
          this.toScaledEuler = options.toScaledEuler || ((x) => x);
        }
        if (typeof this.initialize === "function") {
          this.initialize(options, (data) => raw = data);
        }
        setInterval(() => {
          if (raw === null) {
            return;
          }
          let didOrientationChange = false;
          let didCalibrationChange = false;
          ["heading", "roll", "pitch"].forEach((el) => {
            if (state.euler[el] !== raw.orientation.euler[el]) {
              didOrientationChange = true;
            }
            state.euler[el] = raw.orientation.euler[el];
          });
          ["w", "x", "y", "z"].forEach((el) => {
            if (state.quarternion[el] !== raw.orientation.quarternion[el]) {
              didOrientationChange = true;
            }
            state.quarternion[el] = raw.orientation.quarternion[el];
          });
          if (raw.calibration) {
            if (state.calibration !== raw.calibration) {
              didCalibrationChange = true;
            }
            state.calibration = raw.calibration;
          }
          const data = {
            euler: this.euler,
            quarternion: this.quarternion,
            calibration: this.calibration
          };
          this.emit("data", data);
          if (didOrientationChange) {
            this.emit("change", data);
          }
          if (didCalibrationChange) {
            this.emit("calibration", this.calibration);
          }
        }, freq);
      }
      get euler() {
        return this.toScaledEuler(priv.get(this));
      }
      get quarternion() {
        return this.toScaledQuarternion(priv.get(this));
      }
    };
    if (!!process.env.IS_TEST_MODE) {
      Orientation.Controllers = Controllers;
      Orientation.purge = () => {
        priv.clear();
      };
    }
    module2.exports = Orientation;
  }
});

// node_modules/johnny-five/lib/mixins/withinable.js
var require_withinable = __commonJS({
  "node_modules/johnny-five/lib/mixins/withinable.js"(exports, module2) {
    var Emitter = require_emitter();
    var Withinable = class extends Emitter {
      constructor() {
        super();
      }
      within(range, unit, callback) {
        let upper;
        if (typeof range === "number") {
          upper = range;
          range = [0, upper];
        }
        if (!Array.isArray(range)) {
          throw new Error("within expected a range array");
        }
        if (typeof unit === "function") {
          callback = unit;
          unit = "value";
        }
        if (typeof this[unit] === "undefined") {
          return this;
        }
        this.on("data", () => {
          const value = this[unit];
          if (value >= range[0] && value <= range[1]) {
            callback.call(this, null, value);
          }
        });
        return this;
      }
    };
    module2.exports = Withinable;
  }
});

// node_modules/johnny-five/lib/thermometer.js
var require_thermometer = __commonJS({
  "node_modules/johnny-five/lib/thermometer.js"(exports, module2) {
    var Board = require_board();
    var EventEmitter6 = require("events");
    var Withinable = require_withinable();
    var {
      toFixed,
      POW_2_16
    } = require_fn();
    var {
      log,
      round,
      trunc
    } = Math;
    var CELSIUS_TO_KELVIN = 273.15;
    function analogHandler(options, callback) {
      const pin = options.pin;
      this.io.pinMode(pin, this.io.MODES.ANALOG);
      this.io.analogRead(pin, (data) => {
        callback.call(this, data);
      });
    }
    var activeDrivers = new Map();
    var Drivers = {
      MAX31850K: {
        initialize: {
          value(board, options) {
            const CONSTANTS = {
              TEMPERATURE_FAMILY: 59,
              CONVERT_TEMPERATURE_COMMAND: 68,
              READ_SCRATCHPAD_COMMAND: 190,
              READ_COUNT: 9
            };
            const pin = options.pin;
            const freq = options.freq || 100;
            const getAddress = (device) => {
              let result = 0;
              for (let i = 6; i > 0; i--) {
                result = result * 256 + device[i];
              }
              return result;
            };
            board.io.sendOneWireConfig(pin, true);
            board.io.sendOneWireSearch(pin, (err, devices) => {
              if (err) {
                this.emit("error", err);
                return;
              }
              this.devices = devices.filter((device) => device[0] === CONSTANTS.TEMPERATURE_FAMILY, this);
              if (devices.length === 0) {
                this.emit("error", new Error("FAILED TO FIND TEMPERATURE DEVICE"));
                return;
              }
              this.devices.forEach((device) => {
                this.emit("initialized", getAddress(device));
              });
              let getAddresses = () => {
                if (this.addresses) {
                  return this.devices.filter(function(device) {
                    const address = getAddress(device);
                    return this.addresses.includes(address);
                  }, this);
                } else {
                  return [this.devices[0]];
                }
              };
              let readTemperature = () => {
                let result;
                let devicesToWait = getAddresses();
                let devicesToRead = getAddresses();
                devicesToRead.forEach((device) => {
                  board.io.sendOneWireReset(pin);
                  board.io.sendOneWireWrite(pin, device, CONSTANTS.CONVERT_TEMPERATURE_COMMAND);
                });
                let isConversionAvailable = (done) => {
                  let nextDevice;
                  if (devicesToWait.length === 0) {
                    return done();
                  }
                  nextDevice = devicesToWait.pop();
                  board.io.sendOneWireReset(pin);
                  board.io.sendOneWireWriteAndRead(pin, nextDevice, CONSTANTS.READ_SCRATCHPAD_COMMAND, CONSTANTS.READ_COUNT, (err2, data) => {
                    if (!data[0]) {
                      devicesToWait.push(nextDevice);
                      if (data[1] !== 0) {
                        return done();
                      }
                    }
                    isConversionAvailable(done);
                  });
                };
                let readOne = () => {
                  let device;
                  if (devicesToRead.length === 0) {
                    setTimeout(readTemperature, freq);
                    return;
                  }
                  device = devicesToRead.pop();
                  board.io.sendOneWireReset(pin);
                  board.io.sendOneWireWriteAndRead(pin, device, CONSTANTS.READ_SCRATCHPAD_COMMAND, CONSTANTS.READ_COUNT, (error, data) => {
                    if (error) {
                      this.emit("error", error);
                      return;
                    }
                    result = data[1] << 8 | data[0];
                    this.emit("data", getAddress(device), result);
                    readOne();
                  });
                };
                isConversionAvailable(readOne);
              };
              readTemperature();
            });
          }
        },
        register: {
          value(address) {
            if (!this.addresses) {
              this.addresses = [];
            }
            this.addresses.push(address);
          }
        }
      },
      DS18B20: {
        initialize: {
          value(board, options) {
            const CONSTANTS = {
              TEMPERATURE_FAMILY: 40,
              CONVERT_TEMPERATURE_COMMAND: 68,
              READ_SCRATCHPAD_COMMAND: 190,
              READ_COUNT: 2
            };
            const pin = options.pin;
            const freq = options.freq || 100;
            let getAddress;
            let readThermometer;
            let readOne;
            getAddress = (device) => {
              let i;
              let result = 0;
              for (i = 6; i > 0; i--) {
                result = result * 256 + device[i];
              }
              return result;
            };
            board.io.sendOneWireConfig(pin, true);
            board.io.sendOneWireSearch(pin, (err, devices) => {
              if (err) {
                this.emit("error", err);
                return;
              }
              this.devices = devices.filter((device) => device[0] === CONSTANTS.TEMPERATURE_FAMILY, this);
              if (devices.length === 0) {
                this.emit("error", new Error("FAILED TO FIND TEMPERATURE DEVICE"));
                return;
              }
              this.devices.forEach((device) => {
                this.emit("initialized", getAddress(device));
              });
              readThermometer = () => {
                let devicesToRead;
                let result;
                if (this.addresses) {
                  devicesToRead = this.devices.filter(function(device) {
                    const address = getAddress(device);
                    return this.addresses.includes(address);
                  }, this);
                } else {
                  devicesToRead = [this.devices[0]];
                }
                devicesToRead.forEach((device) => {
                  board.io.sendOneWireReset(pin);
                  board.io.sendOneWireWrite(pin, device, CONSTANTS.CONVERT_TEMPERATURE_COMMAND);
                });
                board.io.sendOneWireDelay(pin, 1);
                readOne = () => {
                  let device;
                  if (devicesToRead.length === 0) {
                    setTimeout(readThermometer, freq);
                    return;
                  }
                  device = devicesToRead.pop();
                  board.io.sendOneWireReset(pin);
                  board.io.sendOneWireWriteAndRead(pin, device, CONSTANTS.READ_SCRATCHPAD_COMMAND, CONSTANTS.READ_COUNT, (err2, data) => {
                    if (err2) {
                      this.emit("error", err2);
                      return;
                    }
                    result = data[1] << 8 | data[0];
                    this.emit("data", getAddress(device), result);
                    readOne();
                  });
                };
                readOne();
              };
              readThermometer();
            });
          }
        },
        register: {
          value(address) {
            if (!this.addresses) {
              this.addresses = [];
            }
            this.addresses.push(address);
          }
        }
      }
    };
    Drivers.get = (board, driverName, options) => {
      let drivers;
      let driver;
      if (!activeDrivers.has(board)) {
        activeDrivers.set(board, {});
      }
      drivers = activeDrivers.get(board);
      const key = `${driverName}_${options.pin}`;
      if (!drivers[key]) {
        driver = new EventEmitter6();
        Object.defineProperties(driver, Drivers[driverName]);
        driver.initialize(board, options);
        drivers[key] = driver;
      }
      return drivers[key];
    };
    Drivers.clear = () => {
      activeDrivers.clear();
    };
    var Controllers = {
      ANALOG: {
        initialize: {
          value: analogHandler
        }
      },
      LM35: {
        initialize: {
          value: analogHandler
        },
        toCelsius: {
          value(raw) {
            const mV = this.aref * 1e3 * raw / 1023;
            return round(mV / 10);
          }
        }
      },
      LM335: {
        initialize: {
          value: analogHandler
        },
        toCelsius: {
          value(raw) {
            const mV = this.aref * 1e3 * raw / 1023;
            return round(mV / 10 - CELSIUS_TO_KELVIN);
          }
        }
      },
      TMP36: {
        initialize: {
          value: analogHandler
        },
        toCelsius: {
          value(raw) {
            const mV = this.aref * 1e3 * raw / 1023;
            return round(mV / 10 - 50);
          }
        }
      },
      TMP102: {
        ADDRESSES: {
          value: [72]
        },
        initialize: {
          value(options, callback) {
            const { Drivers: Drivers2 } = require_sip();
            const address = Drivers2.addressResolver(this, options);
            this.io.i2cConfig(options);
            this.io.i2cRead(address, 0, 2, (data) => {
              let raw = (data[0] << 8 | data[1]) >> 4;
              if (raw & 1 << 11) {
                raw |= 63488;
              }
              raw = raw >> 15 ? ((raw ^ 65535) + 1) * -1 : raw;
              callback(raw);
            });
          }
        },
        toCelsius: {
          value(raw) {
            return toFixed(raw / 16, 1);
          }
        }
      },
      MAX31850K: {
        initialize: {
          value(options, callback) {
            const state = priv.get(this);
            const address = options.address;
            const driver = Drivers.get(this.board, "MAX31850K", options);
            if (address) {
              state.address = address;
              driver.register(address);
            } else {
              if (driver.addressless) {
                this.emit("error", "You cannot have more than one MAX31850K without an address");
              }
              driver.addressless = true;
            }
            driver.once("initialized", (dataAddress) => {
              if (!state.address) {
                state.address = dataAddress;
              }
            });
            driver.on("data", (dataAddress, data) => {
              if (!address || dataAddress === address) {
                callback(data);
              }
            });
          }
        },
        toCelsius: {
          value(value) {
            return toFixed(value / 16, 2);
          }
        },
        address: {
          get() {
            return priv.get(this).address || 0;
          }
        }
      },
      DS18B20: {
        initialize: {
          value(options, callback) {
            const state = priv.get(this);
            const address = options.address;
            const driver = Drivers.get(this.board, "DS18B20", options);
            if (address) {
              state.address = address;
              driver.register(address);
            } else {
              if (driver.addressless) {
                this.emit("error", "You cannot have more than one DS18B20 without an address");
              }
              driver.addressless = true;
            }
            driver.once("initialized", (dataAddress) => {
              if (!state.address) {
                state.address = dataAddress;
              }
            });
            driver.on("data", (dataAddress, data) => {
              if (!address || dataAddress === address) {
                callback(data);
              }
            });
          }
        },
        toCelsius: {
          value(value) {
            return toFixed(value / 16, 4);
          }
        },
        address: {
          get() {
            return priv.get(this).address || 0;
          }
        }
      },
      SHT31D: {
        initialize: {
          value(options, callback) {
            const { Drivers: Drivers2 } = require_sip();
            Drivers2.get(this.board, "SHT31D", options).on("data", ({ temperature }) => callback(temperature));
          }
        },
        toCelsius: {
          value(value) {
            return toFixed(-45 + 175 * (value / (POW_2_16 - 1)), 3);
          }
        }
      },
      HTU21D: {
        initialize: {
          value(options, callback) {
            const { Drivers: Drivers2 } = require_sip();
            Drivers2.get(this.board, "HTU21D", options).on("data", ({ temperature }) => callback(temperature));
          }
        },
        toCelsius: {
          value(value) {
            return toFixed(-46.85 + 175.72 * (value / POW_2_16), 2);
          }
        }
      },
      HIH6130: {
        initialize: {
          value(options, callback) {
            const { Drivers: Drivers2 } = require_sip();
            Drivers2.get(this.board, "HIH6130", options).on("data", ({ temperature }) => callback(temperature));
          }
        },
        toCelsius: {
          value(raw) {
            return round(raw / 1e3);
          }
        }
      },
      DHT_I2C_NANO_BACKPACK: {
        initialize: {
          value(options, callback) {
            const { Drivers: Drivers2 } = require_sip();
            Drivers2.get(this.board, "DHT_I2C_NANO_BACKPACK", options).on("data", ({ temperature }) => callback(temperature));
          }
        },
        toCelsius: {
          value(raw) {
            return round(raw / 100);
          }
        }
      },
      TH02: {
        initialize: {
          value(options, callback) {
            const { Drivers: Drivers2 } = require_sip();
            Drivers2.get(this.board, "TH02", options).on("data", ({ temperature }) => callback(temperature));
          }
        },
        toCelsius: {
          value(raw) {
            return toFixed(raw, 1);
          }
        }
      },
      MPU6050: {
        initialize: {
          value(options, callback) {
            const { Drivers: Drivers2 } = require_sip();
            Drivers2.get(this.board, "MPU6050", options).on("data", ({ temperature }) => callback(temperature));
          }
        },
        toCelsius: {
          value(raw) {
            return round(raw / 340 + 36.53);
          }
        }
      },
      BNO055: {
        initialize: {
          value(options, callback) {
            const { Drivers: Drivers2 } = require_sip();
            Drivers2.get(this.board, "BNO055", options).on("data", ({ temperature }) => callback(temperature));
          }
        },
        toCelsius: {
          value(raw) {
            return trunc(raw);
          }
        }
      },
      MPL115A2: {
        initialize: {
          value(options, callback) {
            const { Drivers: Drivers2 } = require_sip();
            Drivers2.get(this.board, "MPL115A2", options).on("data", ({ temperature }) => callback(temperature));
          }
        },
        toCelsius: {
          value(raw) {
            return trunc((raw - 498) / -5.35 + 25);
          }
        }
      },
      MPL3115A2: {
        initialize: {
          value(options, callback) {
            const { Drivers: Drivers2 } = require_sip();
            Drivers2.get(this.board, "MPL3115A2", options).on("data", ({ temperature }) => callback(temperature));
          }
        },
        toCelsius: {
          value(raw) {
            return round(raw / 16);
          }
        }
      },
      MS5611: {
        initialize: {
          value(options, callback) {
            const { Drivers: Drivers2 } = require_sip();
            Drivers2.get(this.board, "MS5611", options).on("data", ({ temperature }) => callback(temperature));
          }
        },
        toCelsius: {
          value(raw) {
            return toFixed(raw, 2);
          }
        }
      },
      GROVE: {
        initialize: {
          value: analogHandler
        },
        toCelsius: {
          value(raw) {
            const adcres = 1023;
            const beta = 3975;
            const rb = 1e4;
            const tempr = 298.15;
            const rthermistor = (adcres - raw) * rb / raw;
            const tempc = 1 / (log(rthermistor / rb) / beta + 1 / tempr) - CELSIUS_TO_KELVIN;
            return round(tempc);
          }
        }
      },
      TINKERKIT: {
        initialize: {
          value: analogHandler
        },
        toCelsius: {
          value(value) {
            const adcres = 1023;
            const beta = 3950;
            const rb = 1e4;
            const ginf = 120.6685;
            const rthermistor = rb * (adcres / value - 1);
            const tempc = beta / log(rthermistor * ginf);
            return round(tempc - CELSIUS_TO_KELVIN);
          }
        }
      },
      BMP180: {
        initialize: {
          value(options, callback) {
            const { Drivers: Drivers2 } = require_sip();
            Drivers2.get(this.board, "BMP180", options).on("data", ({ temperature }) => callback(temperature));
          }
        },
        toCelsius: {
          value(value) {
            return toFixed(value, 1);
          }
        }
      },
      BMP280: {
        initialize: {
          value(options, callback) {
            const { Drivers: Drivers2 } = require_sip();
            Drivers2.get(this.board, "BMP280", options).on("data", ({ temperature }) => callback(temperature));
          }
        },
        toCelsius: {
          value(value) {
            return toFixed(value, 2);
          }
        }
      },
      BME280: {
        initialize: {
          value(options, callback) {
            const { Drivers: Drivers2 } = require_sip();
            Drivers2.get(this.board, "BME280", options).on("data", ({ temperature }) => callback(temperature));
          }
        },
        toCelsius: {
          value(value) {
            return toFixed(value, 2);
          }
        }
      },
      SI7020: {
        initialize: {
          value(options, callback) {
            const { Drivers: Drivers2 } = require_sip();
            Drivers2.get(this.board, "SI7020", options).on("data", ({ temperature }) => callback(temperature));
          }
        },
        toCelsius: {
          value(value) {
            return toFixed(175.72 * value / 65536 - 46.85, 1);
          }
        }
      },
      MCP9808: {
        ADDRESSES: {
          value: [24]
        },
        initialize: {
          value(options, callback) {
            const { Drivers: Drivers2 } = require_sip();
            const address = Drivers2.addressResolver(this, options);
            this.io.i2cConfig(options);
            this.io.i2cRead(address, 5, 2, (data) => {
              let value = ((data[0] << 8 | data[1]) & 4095) / 16;
              if (value & 4096) {
                value -= 256;
              }
              callback(value);
            });
          }
        },
        toCelsius: {
          value(value) {
            return toFixed(value, 2);
          }
        }
      },
      LSM303C: {
        initialize: {
          value(options, callback) {
            const { Drivers: Drivers2 } = require_sip();
            Drivers2.get(this.board, "LSM303C", options).on("data", ({ temperature }) => callback(temperature));
          }
        },
        toCelsius: {
          value(value) {
            return toFixed(value / 8 + 25, 1);
          }
        }
      }
    };
    Controllers.BMP085 = Controllers.BMP180;
    Controllers.GY521 = Controllers.MPU6050;
    Controllers.SI7021 = Controllers.SI7020;
    Controllers.DHT11_I2C_NANO_BACKPACK = Controllers.DHT_I2C_NANO_BACKPACK;
    Controllers.DHT21_I2C_NANO_BACKPACK = Controllers.DHT_I2C_NANO_BACKPACK;
    Controllers.DHT22_I2C_NANO_BACKPACK = Controllers.DHT_I2C_NANO_BACKPACK;
    Controllers.DEFAULT = Controllers.ANALOG;
    var priv = new Map();
    var Thermometer = class extends Withinable {
      constructor(options) {
        super();
        let last = null;
        let raw = null;
        Board.Component.call(this, options = Board.Options(options));
        Board.Controller.call(this, Controllers, options);
        const state = {
          enabled: typeof options.enabled === "undefined" ? true : options.enabled,
          intervalId: null,
          freq: options.freq || 25,
          previousFreq: options.freq || 25
        };
        priv.set(this, state);
        this.aref = options.aref || this.io.aref || 5;
        if (!this.toCelsius) {
          this.toCelsius = options.toCelsius || ((x) => x);
        }
        const eventProcessing = () => {
          if (raw == null) {
            return;
          }
          const data = {};
          data.C = data.celsius = this.celsius;
          data.F = data.fahrenheit = this.fahrenheit;
          data.K = data.kelvin = this.kelvin;
          this.emit("data", data);
          if (this.celsius !== last) {
            last = this.celsius;
            this.emit("change", data);
          }
        };
        const descriptors = {
          celsius: {
            get() {
              return this.toCelsius(raw);
            }
          },
          fahrenheit: {
            get() {
              return toFixed(this.celsius * 9 / 5 + 32, 2);
            }
          },
          kelvin: {
            get() {
              return toFixed(this.celsius + CELSIUS_TO_KELVIN, 2);
            }
          },
          freq: {
            get() {
              return state.freq;
            },
            set(newFreq) {
              state.freq = newFreq;
              if (state.intervalId) {
                clearInterval(state.intervalId);
              }
              if (state.freq !== null) {
                state.intervalId = setInterval(eventProcessing, newFreq);
              }
            }
          }
        };
        descriptors.C = descriptors.celsius;
        descriptors.F = descriptors.fahrenheit;
        descriptors.K = descriptors.kelvin;
        Object.defineProperties(this, descriptors);
        if (typeof this.initialize === "function") {
          this.initialize(options, (data) => raw = data);
        }
        if (state.enabled) {
          this.freq = state.freq;
        }
      }
      enable() {
        const state = priv.get(this);
        if (!state.enabled) {
          this.freq = state.freq || state.previousFreq;
        }
        return this;
      }
      disable() {
        const state = priv.get(this);
        if (state.enabled) {
          state.enabled = false;
          state.previousFreq = state.freq;
          this.freq = null;
        }
        return this;
      }
    };
    Thermometer.Drivers = Drivers;
    if (!!process.env.IS_TEST_MODE) {
      Thermometer.Controllers = Controllers;
      Thermometer.purge = () => {
        priv.clear();
      };
    }
    module2.exports = Thermometer;
  }
});

// node_modules/johnny-five/lib/sip.js
var require_sip = __commonJS({
  "node_modules/johnny-five/lib/sip.js"(exports, module2) {
    var Board = require_board();
    var Emitter = require_emitter();
    var Fn = require_fn();
    var priv = new Map();
    var activeDrivers = new Map();
    var {
      int16,
      uint16,
      uint24,
      s32,
      u32
    } = Fn;
    var ACCELEROMETER = "accelerometer";
    var ALTIMETER = "altimeter";
    var BAROMETER = "barometer";
    var GYRO = "gyro";
    var HYGROMETER = "hygrometer";
    var MAGNETOMETER = "magnetometer";
    var ORIENTATION = "orientation";
    var THERMOMETER = "thermometer";
    function Components(controller, options) {
      const state = priv.get(this);
      const descriptors = Object.create(null);
      for (const component of this.components) {
        state[component] = new Components[component](Object.assign({
          controller: options.controller || controller,
          freq: options.freq,
          board: this.board
        }, options));
        descriptors[component] = {
          get() {
            return state[component];
          }
        };
        if (backwardCompatibilityGarbageHacks[component]) {
          descriptors[backwardCompatibilityGarbageHacks[component]] = descriptors[component];
        }
      }
      Object.defineProperties(this, descriptors);
    }
    Components.accelerometer = require_accelerometer();
    Components.altimeter = require_altimeter();
    Components.barometer = require_barometer();
    Components.gyro = require_gyro();
    Components.hygrometer = require_hygrometer();
    Components.magnetometer = require_compass();
    Components.orientation = require_orientation();
    Components.thermometer = require_thermometer();
    var backwardCompatibilityGarbageHacks = {
      thermometer: "temperature"
    };
    var Drivers = {
      SHT31D: {
        ADDRESSES: {
          value: [68]
        },
        REGISTER: {
          value: {
            SOFT_RESET: 12450,
            MEASURE_HIGH_REPEATABILITY: 9216
          }
        },
        initialize: {
          value(board, options) {
            const READLENGTH = 6;
            const io = board.io;
            const address = Drivers.addressResolver(this, options);
            io.i2cConfig(options);
            io.i2cWrite(address, [
              this.REGISTER.SOFT_RESET >> 8,
              this.REGISTER.SOFT_RESET & 255
            ]);
            const computed = {
              temperature: null,
              humidity: null
            };
            const readCycle = () => {
              io.i2cWrite(address, [
                this.REGISTER.MEASURE_HIGH_REPEATABILITY >> 8,
                this.REGISTER.MEASURE_HIGH_REPEATABILITY & 255
              ]);
              setTimeout(() => {
                io.i2cReadOnce(address, READLENGTH, (data) => {
                  computed.temperature = uint16(data[0], data[1]);
                  computed.humidity = uint16(data[3], data[4]);
                  this.emit("data", computed);
                  readCycle();
                });
              }, 16);
            };
            readCycle();
          }
        },
        identifier: {
          value(options) {
            const address = Drivers.addressResolver(Drivers.SHT31D, options);
            return `sht-31d-${address}`;
          }
        }
      },
      HTU21D: {
        ADDRESSES: {
          value: [64]
        },
        REGISTER: {
          value: {
            HUMIDITY: 229,
            TEMPERATURE: 227,
            SOFT_RESET: 254
          }
        },
        initialize: {
          value(board, options) {
            const io = board.io;
            const address = Drivers.addressResolver(this, options);
            options.delay = 5e4;
            io.i2cConfig(options);
            io.i2cWrite(address, this.REGISTER.SOFT_RESET);
            const computed = {
              temperature: null,
              humidity: null
            };
            let cycle = 0;
            const readCycle = () => {
              const isTemperatureCycle = cycle === 0;
              const register = isTemperatureCycle ? this.REGISTER.TEMPERATURE : this.REGISTER.HUMIDITY;
              io.i2cReadOnce(address, register, 2, (data) => {
                if (isTemperatureCycle) {
                  computed.temperature = uint16(data[0], data[1]);
                } else {
                  computed.humidity = uint16(data[0], data[1]);
                }
                if (++cycle === 2) {
                  cycle = 0;
                  this.emit("data", computed);
                }
                readCycle();
              });
            };
            readCycle();
          }
        },
        identifier: {
          value(options) {
            const address = Drivers.addressResolver(Drivers.HTU21D, options);
            return `htu-s1d-${address}`;
          }
        }
      },
      HIH6130: {
        ADDRESSES: {
          value: [39]
        },
        initialize: {
          value(board, options) {
            const io = board.io;
            const address = Drivers.addressResolver(this, options);
            io.i2cConfig(options);
            const computed = {
              humidity: null,
              temperature: null
            };
            let delay = 36.65;
            const measureCycle = () => {
              io.i2cWrite(address, 160, [0, 0]);
              setTimeout(() => {
                io.i2cWrite(address, 128, [0, 0]);
                io.i2cReadOnce(address, 4, (data) => {
                  const status = data[0] >> 6;
                  computed.humidity = int16(data[0] & 63, data[1]);
                  computed.temperature = int16(data[2], data[3] >> 2);
                  if (status === 0) {
                    delay--;
                  }
                  if (status === 1) {
                    delay++;
                  }
                  this.emit("data", computed);
                  measureCycle();
                });
              }, delay);
            };
            measureCycle();
          }
        },
        identifier: {
          value(options) {
            const address = Drivers.addressResolver(Drivers.HIH6130, options);
            return `hih6130-${address}`;
          }
        }
      },
      DHT_I2C_NANO_BACKPACK: {
        ADDRESSES: {
          value: [10]
        },
        REGISTER: {
          value: {
            READ: 0
          }
        },
        initialize: {
          value(board, options) {
            const io = board.io;
            const dhtPin = 2;
            let dhtType = 11;
            const address = Drivers.addressResolver(this, options);
            io.i2cConfig(options);
            const dhtVariantExec = /(\d{2})/.exec(options.controller);
            const dhtVariant = dhtVariantExec && dhtVariantExec.length && dhtVariantExec[0];
            if (dhtVariant) {
              dhtType = +dhtVariant;
              if (Number.isNaN(dhtType)) {
                dhtType = 11;
              }
            }
            const computed = {
              temperature: null,
              humidity: null
            };
            io.i2cWrite(address, [dhtPin, dhtType]);
            io.i2cRead(address, 4, (data) => {
              computed.humidity = int16(data[0], data[1]);
              computed.temperature = int16(data[2], data[3]);
              this.emit("data", computed);
            });
          }
        },
        identifier: {
          value(options) {
            const address = Drivers.addressResolver(Drivers.DHT_I2C_NANO_BACKPACK, options);
            return `dht_i2c_nano_backpack-${address}`;
          }
        }
      },
      MPU6050: {
        ADDRESSES: {
          value: [104, 105]
        },
        REGISTER: {
          value: {
            SETUP: [107, 0],
            READ: 59
          }
        },
        initialize: {
          value(board, options) {
            const READLENGTH = 14;
            const io = board.io;
            const address = Drivers.addressResolver(this, options);
            const computed = {
              accelerometer: {},
              temperature: {},
              gyro: {}
            };
            io.i2cConfig(options);
            io.i2cWrite(address, this.REGISTER.SETUP);
            io.i2cRead(address, this.REGISTER.READ, READLENGTH, (data) => {
              computed.accelerometer = {
                x: int16(data[0], data[1]),
                y: int16(data[2], data[3]),
                z: int16(data[4], data[5])
              };
              computed.temperature = int16(data[6], data[7]);
              computed.gyro = {
                x: int16(data[8], data[9]),
                y: int16(data[10], data[11]),
                z: int16(data[12], data[13])
              };
              this.emit("data", computed);
            });
          }
        },
        identifier: {
          value(options) {
            const address = Drivers.addressResolver(Drivers.MPU6050, options);
            return `mpu-6050-${address}`;
          }
        }
      },
      BNO055: {
        ADDRESSES: {
          value: [40, 41]
        },
        REGISTER: {
          value: {
            READ: {
              ACCEL: 8,
              MAG: 14,
              GYRO: 20,
              EULER: 26,
              QUARTERNION: 32,
              TEMP: 52
            },
            LENGTH: {
              ACCEL: 6,
              MAG: 6,
              GYRO: 6,
              EULER: 6,
              QUARTERNION: 8,
              TEMP: 1
            },
            OPR_MODE_ADDR: 61,
            OPR_MODES: {
              CONFIG: 0,
              ACCONLY: 1,
              MAGONLY: 2,
              GYRONLY: 3,
              ACCMAG: 4,
              ACCGYRO: 5,
              MAGGYRO: 6,
              AMG: 7,
              IMUPLUS: 8,
              COMPASS: 9,
              M4G: 10,
              NDOF_FMC_OFF: 11,
              NDOF: 12
            },
            PWR_MODE_ADDR: 62,
            PWR_MODES: {
              NORMAL: 0,
              LOW: 1,
              SUSPEND: 2
            },
            PAGE_ID_ADDR: 7,
            PAGE_STATES: {
              ZERO: 0
            },
            CALIBRATION: 53,
            SYS_TRIGGER: 63,
            UNIT_SEL_ADDR: 59,
            AXIS_MAP_CONFIG_ADDR: 65,
            AXIS_MAP_SIGN_ADDR: 66
          }
        },
        initialize: {
          value(board, options) {
            const io = board.io;
            const calibrationMask = options.calibrationMask || 192;
            const address = Drivers.addressResolver(this, options);
            const computed = {
              accelerometer: {
                x: null,
                y: null,
                z: null
              },
              gyro: {
                x: null,
                y: null,
                z: null
              },
              magnetometer: {
                x: null,
                y: null,
                z: null
              },
              orientation: {
                euler: {
                  heading: null,
                  roll: null,
                  pitch: null
                },
                quarternion: {
                  w: null,
                  x: null,
                  y: null,
                  z: null
                }
              },
              temperature: null,
              calibration: null
            };
            io.i2cConfig(options);
            io.i2cWriteReg(address, this.REGISTER.OPR_MODE_ADDR, this.REGISTER.OPR_MODES.CONFIG);
            io.i2cWriteReg(address, this.REGISTER.PAGE_ID_ADDR, this.REGISTER.PAGE_STATES.ZERO);
            io.i2cWriteReg(address, this.REGISTER.SYS_TRIGGER, 32);
            const por = new Promise((resolve) => {
              setTimeout(() => {
                io.i2cWriteReg(address, this.REGISTER.PWR_MODE_ADDR, this.REGISTER.PWR_MODES.NORMAL);
                io.i2cWriteReg(address, this.REGISTER.SYS_TRIGGER, options.enableExternalCrystal ? 128 : 0);
                const axisMap = options.axisMap || 36;
                io.i2cWriteReg(address, this.REGISTER.AXIS_MAP_CONFIG_ADDR, axisMap);
                const axisSign = options.axisSign || 0;
                io.i2cWriteReg(address, this.REGISTER.AXIS_MAP_SIGN_ADDR, axisSign);
                setTimeout(() => {
                  io.i2cWriteReg(address, this.REGISTER.OPR_MODE_ADDR, this.REGISTER.OPR_MODES.NDOF);
                  resolve();
                }, 10);
              }, 650);
            });
            por.then(() => new Promise((resolve) => {
              const readCalibration = () => {
                io.i2cReadOnce(address, this.REGISTER.CALIBRATION, 1, (data) => {
                  const calibration = data[0];
                  const didCalibrationChange = computed.calibration !== calibration;
                  computed.calibration = calibration;
                  if (didCalibrationChange) {
                    this.emit("calibration", computed.calibration);
                  }
                  if ((calibration & calibrationMask) === calibrationMask) {
                    this.emit("calibrated");
                    resolve();
                  } else {
                    readCalibration();
                  }
                });
              };
              readCalibration();
            })).then(() => {
              io.i2cRead(address, this.REGISTER.READ.TEMP, 2, (data) => {
                computed.temperature = data[0];
                const didCalibrationChange = computed.calibration !== data[1];
                computed.calibration = data[1];
                this.emit("data", computed);
                if (didCalibrationChange) {
                  this.emit("calibration", computed.calibration);
                }
              });
              io.i2cRead(address, this.REGISTER.READ.ACCEL, 18, (data) => {
                computed.accelerometer = {
                  x: int16(data[1], data[0]),
                  y: int16(data[3], data[2]),
                  z: int16(data[5], data[4])
                };
                computed.magnetometer = {
                  x: int16(data[7], data[6]),
                  y: int16(data[9], data[8]),
                  z: int16(data[11], data[10])
                };
                computed.gyro = {
                  x: int16(data[13], data[12]),
                  y: int16(data[15], data[14]),
                  z: int16(data[17], data[16])
                };
                this.emit("data", computed);
              });
              io.i2cRead(address, this.REGISTER.READ.EULER, 14, (data) => {
                computed.orientation.euler = {
                  heading: int16(data[1], data[0]),
                  roll: int16(data[3], data[2]),
                  pitch: int16(data[5], data[4])
                };
                computed.orientation.quarternion = {
                  w: int16(data[7], data[6]),
                  x: int16(data[9], data[8]),
                  y: int16(data[11], data[10]),
                  z: int16(data[13], data[12])
                };
                this.emit("data", computed);
              });
            });
          }
        },
        identifier: {
          value(options) {
            const address = Drivers.addressResolver(Drivers.BNO055, options);
            return `bno055-${address}`;
          }
        }
      },
      MPL115A2: {
        ADDRESSES: {
          value: [96]
        },
        REGISTER: {
          value: {
            COEFFICIENTS: 4,
            PADC_MSB: 0,
            CONVERT: 18
          }
        },
        initialize: {
          value(board, options) {
            const io = board.io;
            const address = Drivers.addressResolver(this, options);
            io.i2cConfig(options);
            const computed = {
              pressure: null,
              temperature: null
            };
            const cof = {
              a0: null,
              b1: null,
              b2: null,
              c12: null
            };
            const handler = (data) => {
              const Padc = uint16(data[0], data[1]) >> 6;
              const Tadc = uint16(data[2], data[3]) >> 6;
              computed.pressure = cof.a0 + (cof.b1 + cof.c12 * Tadc) * Padc + cof.b2 * Tadc;
              computed.temperature = Tadc;
              this.emit("data", computed);
              readCycle();
            };
            var readCycle = () => {
              io.i2cWriteReg(address, this.REGISTER.CONVERT, 0);
              io.i2cReadOnce(address, this.REGISTER.PADC_MSB, 4, handler);
            };
            const pCoefficients = new Promise((resolve) => {
              io.i2cReadOnce(address, this.REGISTER.COEFFICIENTS, 8, (data) => {
                const A0 = int16(data[0], data[1]);
                const B1 = int16(data[2], data[3]);
                const B2 = int16(data[4], data[5]);
                const C12 = int16(data[6], data[7]) >> 2;
                cof.a0 = A0 / 8;
                cof.b1 = B1 / 8192;
                cof.b2 = B2 / 16384;
                cof.c12 = C12 / 4194304;
                resolve();
              });
            });
            pCoefficients.then(readCycle);
          }
        },
        identifier: {
          value(options) {
            const address = Drivers.addressResolver(Drivers.MPL115A2, options);
            return `mpl115a2-${address}`;
          }
        }
      },
      MPL3115A2: {
        ADDRESSES: {
          value: [96]
        },
        REGISTER: {
          value: {
            STATUS: 0,
            PRESSURE: 1,
            CONFIG: 19,
            BAR_IN_MSB: 20,
            BAR_IN_LSB: 21,
            CONTROL: 38
          }
        },
        MASK: {
          value: {
            STATUS: {
              PRESSURE_DATA_READ: 4
            },
            CONTROL: {
              SBYB: 1,
              OS128: 56,
              ALTIMETER: 128,
              PRESSURE: 0
            },
            CONFIG: {
              TDEFE: 1,
              PDEFE: 2,
              DREM: 4
            }
          }
        },
        initialize: {
          value(board, options) {
            const READLENGTH = 6;
            const io = board.io;
            let isPressure = false;
            let elevation = null;
            let offset = 0;
            const address = Drivers.addressResolver(this, options);
            let altNow = 0;
            const computed = {
              pressure: 0,
              altitude: 0,
              temperature: 0
            };
            if (typeof options.elevation !== "undefined") {
              elevation = options.elevation;
            }
            if (elevation !== null && elevation <= 0) {
              offset = Math.abs(elevation) + 1;
              elevation = 1;
            }
            const waitForReady = (next) => {
              io.i2cReadOnce(address, this.REGISTER.STATUS, 1, (data) => {
                if (data[0] & this.MASK.STATUS.PRESSURE_DATA_READ) {
                  next();
                } else {
                  setTimeout(() => {
                    waitForReady(next);
                  }, 100);
                }
              });
            };
            const readValues = () => {
              const modeMask = isPressure ? this.MASK.CONTROL.PRESSURE : this.MASK.CONTROL.ALTIMETER;
              const mode = this.MASK.CONTROL.SBYB | this.MASK.CONTROL.OS128 | modeMask;
              io.i2cWrite(address, this.REGISTER.CONTROL, mode);
              waitForReady(() => {
                io.i2cReadOnce(address, this.REGISTER.PRESSURE, READLENGTH, (data) => {
                  const value = uint24(data[1], data[2], data[3]) >> 4;
                  const temperature = uint16(data[4], data[5]) >> 4;
                  let altVal;
                  computed.temperature = temperature;
                  if (isPressure) {
                    computed.pressure = value;
                    this.emit("data", computed);
                  } else {
                    const m = data[1];
                    const c = data[2];
                    const l = data[3];
                    const fl = (l >> 4) / 16;
                    altVal = (m << 8 | c) + fl;
                    altNow = (altNow * 3 + altVal) / 4;
                    computed.altitude = altNow - offset;
                  }
                  isPressure = !isPressure;
                  readValues();
                });
              });
            };
            const reads = [];
            const calibrate = () => {
              io.i2cWrite(address, this.REGISTER.CONTROL, 59);
              io.i2cWrite(address, this.REGISTER.CONTROL, 57);
              setTimeout(() => {
                io.i2cReadOnce(address, this.REGISTER.PRESSURE, READLENGTH, (data) => {
                  const m = data[1];
                  const c = data[2];
                  const l = data[3];
                  const fl = (l >> 4) / 4;
                  reads.push((m << 10 | c << 2) + fl);
                  if (reads.length === 4) {
                    const curpress = (reads[0] + reads[1] + reads[2] + reads[3]) / 4;
                    const seapress = curpress / (1 - elevation * 225577e-10) ** 5.255;
                    io.i2cWrite(address, this.REGISTER.BAR_IN_MSB, seapress / 2 >> 8);
                    io.i2cWrite(address, this.REGISTER.BAR_IN_LSB, seapress / 2 & 255);
                    io.i2cWrite(address, this.REGISTER.CONTROL, 187);
                    io.i2cWrite(address, this.REGISTER.CONTROL, 185);
                    setTimeout(() => {
                      io.i2cReadOnce(address, this.REGISTER.PRESSURE, READLENGTH, (data2) => {
                        const m2 = data2[1];
                        const c2 = data2[2];
                        const l2 = data2[3];
                        const fl2 = (l2 >> 4) / 16;
                        altNow = (m2 << 8 | c2) + fl2;
                        readValues(false);
                      });
                    }, 550);
                  } else {
                    calibrate();
                  }
                });
              }, 500);
            };
            io.i2cConfig(Object.assign(options, {
              settings: {
                stopTX: true
              }
            }));
            io.i2cWriteReg(address, 45, 0);
            io.i2cWriteReg(address, this.REGISTER.BAR_IN_MSB, 0);
            io.i2cWriteReg(address, this.REGISTER.BAR_IN_LSB, 0);
            io.i2cWriteReg(address, this.REGISTER.CONFIG, this.MASK.CONFIG.TDEFE | this.MASK.CONFIG.PDEFE | this.MASK.CONFIG.DREM);
            if (elevation !== null) {
              calibrate();
            } else {
              readValues();
            }
          }
        },
        identifier: {
          value(options) {
            const address = Drivers.addressResolver(Drivers.MPL3115A2, options);
            return `mpl3115a2-${address}`;
          }
        }
      },
      BMP180: {
        ADDRESSES: {
          value: [119]
        },
        REGISTER: {
          value: {
            COEFFICIENTS: 170,
            READ: 0,
            READ_START: 244,
            READ_RESULT: 246
          }
        },
        initialize: {
          value(board, options) {
            const io = board.io;
            let elevation = null;
            let offset = 0;
            if (typeof options.elevation !== "undefined") {
              elevation = options.elevation;
            }
            if (elevation != null && elevation <= 0 || elevation == null) {
              offset = Math.abs(elevation) + 1;
              elevation = 1;
            }
            const address = Drivers.addressResolver(this, options);
            const mode = options.mode || 3;
            const kpDelay = [5, 8, 14, 26][mode];
            const oss = Fn.constrain(mode, 0, 3);
            const cof = {
              a1: null,
              a2: null,
              a3: null,
              a4: null,
              a5: null,
              a6: null,
              b1: null,
              b2: null,
              b5: null,
              mb: null,
              mc: null,
              md: null
            };
            io.i2cConfig(options);
            const pCoefficients = new Promise((resolve) => {
              io.i2cReadOnce(address, this.REGISTER.COEFFICIENTS, 22, (data) => {
                cof.a1 = int16(data[0], data[1]);
                cof.a2 = int16(data[2], data[3]);
                cof.a3 = int16(data[4], data[5]);
                cof.a4 = uint16(data[6], data[7]);
                cof.a5 = uint16(data[8], data[9]);
                cof.a6 = uint16(data[10], data[11]);
                cof.b1 = int16(data[12], data[13]);
                cof.b2 = int16(data[14], data[15]);
                cof.mb = int16(data[16], data[17]);
                cof.mc = int16(data[18], data[19]);
                cof.md = int16(data[20], data[21]);
                resolve();
              });
            });
            pCoefficients.then(() => {
              const computed = {
                altitude: null,
                pressure: null,
                temperature: null
              };
              let cycle = 0;
              const readCycle = () => {
                const isTemperatureCycle = cycle === 0;
                const component = isTemperatureCycle ? 46 : 52 + (oss << 6);
                const numBytes = isTemperatureCycle ? 2 : 3;
                const delay = isTemperatureCycle ? 5 : kpDelay;
                io.i2cWriteReg(address, this.REGISTER.READ_START, component);
                setTimeout(() => {
                  io.i2cReadOnce(address, this.REGISTER.READ_RESULT, numBytes, (data) => {
                    let compensated;
                    let uncompensated;
                    let x1;
                    let x2;
                    let x3;
                    let b3;
                    let b4;
                    let b6;
                    let b7;
                    let b6s;
                    let bx;
                    if (isTemperatureCycle) {
                      uncompensated = int16(data[0], data[1]);
                      x1 = (uncompensated - cof.a6) * cof.a5 >> 15;
                      x2 = (cof.mc << 11) / (x1 + cof.md) >> 0;
                      cof.b5 = x1 + x2 | 0;
                      computed.temperature = (cof.b5 + 8 >> 4) / 10;
                    } else {
                      uncompensated = uint24(data[0], data[1], data[2]) >> 8 - oss;
                      b6 = cof.b5 - 4e3;
                      b6s = b6 * b6;
                      bx = b6s >> 12;
                      x1 = cof.b2 * bx >> 11;
                      x2 = cof.a2 * b6 >> 11;
                      x3 = x1 + x2;
                      b3 = ((cof.a1 * 4 + x3 << oss) + 2) / 4 >> 0;
                      x1 = cof.a3 * b6 >> 13;
                      x2 = cof.b1 * bx >> 16;
                      x3 = x1 + x2 + 2 >> 2;
                      b4 = cof.a4 * (x3 + 32768) >> 15;
                      b7 = (uncompensated - b3) * (5e4 >> oss);
                      if (b7 < Fn.POW_2_31) {
                        compensated = b7 * 2 / b4;
                      } else {
                        compensated = b7 / b4 * 2;
                      }
                      compensated >>= 0;
                      x1 = (compensated >> 8) * (compensated >> 8);
                      x1 = x1 * 3038 >> 16;
                      x2 = -7357 * compensated >> 16;
                      compensated += x1 + x2 + 3791 >> 4;
                      computed.pressure = compensated;
                      const seapress = compensated / (1 - elevation * 225577e-10) ** 5.255;
                      const altitude = 44330 * (1 - compensated / seapress ** (1 / 5.255));
                      computed.altitude = Math.round(altitude - offset);
                    }
                    if (++cycle === 2) {
                      cycle = 0;
                      this.emit("data", computed);
                    }
                    readCycle();
                  });
                }, delay);
              };
              readCycle();
            });
          }
        },
        identifier: {
          value(options) {
            const address = Drivers.addressResolver(Drivers.BMP180, options);
            return `bmp180-${address}`;
          }
        }
      },
      BMP280: {
        ADDRESSES: {
          value: [119]
        },
        REGISTER: {
          value: {
            COEFFICIENTS: 136,
            CONFIG: 245,
            MEASURE: 244,
            PRESSURE: 247,
            TEMPERATURE: 250,
            RESET: 224
          }
        },
        initialize: {
          value(board, options) {
            const io = board.io;
            let elevation = null;
            let offset = 0;
            if (typeof options.elevation !== "undefined") {
              elevation = options.elevation;
            }
            if (elevation != null && elevation <= 0 || elevation == null) {
              offset = Math.abs(elevation) + 1;
              elevation = 1;
            }
            const address = Drivers.addressResolver(this, options);
            const dig = {
              T1: null,
              T2: null,
              T3: null,
              P1: null,
              P2: null,
              P3: null,
              P4: null,
              P5: null,
              P6: null,
              P7: null,
              P8: null,
              P9: null
            };
            io.i2cConfig(options);
            io.i2cWrite(address, this.REGISTER.RESET, 182);
            const pCoefficients = new Promise((resolve) => {
              io.i2cReadOnce(address, this.REGISTER.COEFFICIENTS, 24, (data) => {
                dig.T1 = uint16(data[1], data[0]);
                dig.T2 = int16(data[3], data[2]);
                dig.T3 = int16(data[5], data[4]);
                dig.P1 = uint16(data[7], data[6]);
                dig.P2 = int16(data[9], data[8]);
                dig.P3 = int16(data[11], data[10]);
                dig.P4 = int16(data[13], data[12]);
                dig.P5 = int16(data[15], data[14]);
                dig.P6 = int16(data[17], data[16]);
                dig.P7 = int16(data[19], data[18]);
                dig.P8 = int16(data[21], data[20]);
                dig.P9 = int16(data[23], data[22]);
                resolve();
              });
            });
            pCoefficients.then(() => {
              io.i2cWrite(address, this.REGISTER.MEASURE, 63);
              const computed = {
                altitude: null,
                pressure: null,
                temperature: null
              };
              io.i2cRead(address, this.REGISTER.PRESSURE, 6, (data) => {
                let compensated = 0;
                let fine;
                let v1;
                let v2;
                let P = s32(uint24(data[0], data[1], data[2]));
                let T = s32(uint24(data[3], data[4], data[5]));
                P >>= 4;
                T >>= 4;
                const adc16 = T >> 4;
                const adc16subT1 = adc16 - dig.T1;
                v1 = ((T >> 3) - (dig.T1 << 1)) * dig.T2 >> 11;
                v2 = (adc16subT1 * adc16subT1 >> 12) * dig.T3 >> 14;
                fine = v1 + v2;
                computed.temperature = (fine * 5 + 128 >> 8) / 100;
                v1 = void 0;
                v2 = void 0;
                v1 = s32(fine >> 1) - 64e3;
                v2 = ((v1 >> 2) * (v1 >> 2) >> 11) * s32(dig.P6);
                v2 += v1 * s32(dig.P5) << 1;
                v2 = (v2 >> 2) + (s32(dig.P4) << 16);
                v1 = (dig.P3 * ((v1 >> 2) * (v1 >> 2) >> 13) >> 3) + (s32(dig.P2) * v1 >> 1) >> 18;
                v1 = (Fn.POW_2_15 + v1) * s32(dig.P1) >> 15;
                if (v1 === 0) {
                  return 0;
                }
                compensated = u32(s32(Fn.POW_2_20) - P - (v2 >> 12)) * 3125;
                if (compensated < Fn.POW_2_31) {
                  compensated = (compensated << 1 >>> 0) / u32(v1);
                } else {
                  compensated = (compensated / u32(v1) >>> 0) * 2;
                }
                compensated = u32(compensated) >>> 0;
                const compshift3r = compensated >> 3;
                v1 = s32(dig.P9) * s32(compshift3r * compshift3r >> 13) >> 12;
                v2 = s32(compensated >> 2) * s32(dig.P8) >> 13;
                compensated = u32(s32(compensated) + (v1 + v2 + dig.P7 >> 4));
                computed.pressure = compensated;
                const seapress = compensated / (1 - elevation * 225577e-10) ** 5.255;
                const altitude = 44330 * (1 - compensated / seapress ** (1 / 5.255));
                computed.altitude = Math.round(altitude - offset);
                this.emit("data", computed);
              });
            });
          }
        },
        identifier: {
          value(options) {
            const address = Drivers.addressResolver(Drivers.BMP280, options);
            return `bmp280-${address}`;
          }
        }
      },
      BME280: {
        ADDRESSES: {
          value: [119]
        },
        REGISTER: {
          value: {
            COEFFICIENTS_TP: 136,
            COEFFICIENTS_H: 225,
            CONFIG: 245,
            MEASURE_H: 242,
            MEASURE_TP: 244,
            PRESSURE: 247,
            TEMPERATURE: 250,
            HUMIDITY: 253,
            RESET: 224
          }
        },
        initialize: {
          value(board, options) {
            const io = board.io;
            let elevation = null;
            let offset = 0;
            if (typeof options.elevation !== "undefined") {
              elevation = options.elevation;
            }
            if (elevation != null && elevation <= 0 || elevation == null) {
              offset = Math.abs(elevation) + 1;
              elevation = 1;
            }
            const address = Drivers.addressResolver(this, options);
            const dig = {
              T1: null,
              T2: null,
              T3: null,
              P1: null,
              P2: null,
              P3: null,
              P4: null,
              P5: null,
              P6: null,
              P7: null,
              P8: null,
              P9: null,
              H1: null,
              H2: null,
              H3: null,
              H4: null,
              H5: null,
              H6: null
            };
            io.i2cConfig(options);
            io.i2cWrite(address, this.REGISTER.RESET, 182);
            const pCoefficients = new Promise((resolveCoeffs) => {
              Promise.all([
                new Promise((resolve) => {
                  io.i2cReadOnce(address, 136, 24, (data) => {
                    dig.T1 = uint16(data[1], data[0]);
                    dig.T2 = int16(data[3], data[2]);
                    dig.T3 = int16(data[5], data[4]);
                    dig.P1 = uint16(data[7], data[6]);
                    dig.P2 = int16(data[9], data[8]);
                    dig.P3 = int16(data[11], data[10]);
                    dig.P4 = int16(data[13], data[12]);
                    dig.P5 = int16(data[15], data[14]);
                    dig.P6 = int16(data[17], data[16]);
                    dig.P7 = int16(data[19], data[18]);
                    dig.P8 = s32(int16(data[21], data[20]));
                    dig.P9 = s32(int16(data[23], data[22]));
                    resolve();
                  });
                }),
                new Promise((resolve) => {
                  io.i2cReadOnce(address, 161, 1, (data) => {
                    dig.H1 = Fn.u8(data[0]);
                    resolve();
                  });
                }),
                new Promise((resolve) => {
                  io.i2cReadOnce(address, 225, 8, (data) => {
                    dig.H2 = s32(int16(data[1], data[0]));
                    dig.H3 = s32(data[2]);
                    dig.H4 = s32(data[3] << 4 | data[4] & 15);
                    dig.H5 = s32(data[5] << 4 | data[4] >> 4);
                    dig.H6 = Fn.s8(data[6]);
                    resolve();
                  });
                })
              ]).then(resolveCoeffs);
            });
            pCoefficients.then(() => {
              io.i2cWrite(address, this.REGISTER.MEASURE_H, 5);
              io.i2cWrite(address, this.REGISTER.MEASURE_TP, 183);
              const computed = {
                altitude: null,
                pressure: null,
                humidity: null,
                temperature: null
              };
              const standby = Date.now();
              io.i2cRead(address, this.REGISTER.PRESSURE, 8, (data) => {
                if (!process.env.IS_TEST_MODE) {
                  if (standby + 1e3 > Date.now()) {
                    return;
                  }
                }
                let compensated = 0;
                let fine;
                let v1;
                let v2;
                let vx;
                let P = s32(uint24(data[0], data[1], data[2]));
                let T = s32(uint24(data[3], data[4], data[5]));
                const H = s32(uint16(data[6], data[7]));
                P >>= 4;
                T >>= 4;
                const adc16 = T >> 4;
                const adc16subT1 = adc16 - dig.T1;
                v1 = ((T >> 3) - (dig.T1 << 1)) * dig.T2 >> 11;
                v2 = (adc16subT1 * adc16subT1 >> 12) * dig.T3 >> 14;
                fine = v1 + v2;
                computed.temperature = (fine * 5 + 128 >> 8) / 100;
                v1 = void 0;
                v2 = void 0;
                v1 = s32(fine >> 1) - 64e3;
                v2 = ((v1 >> 2) * (v1 >> 2) >> 11) * s32(dig.P6);
                v2 += v1 * s32(dig.P5) << 1;
                v2 = (v2 >> 2) + (s32(dig.P4) << 16);
                v1 = (dig.P3 * ((v1 >> 2) * (v1 >> 2) >> 13) >> 3) + (s32(dig.P2) * v1 >> 1) >> 18;
                v1 = (Fn.POW_2_15 + v1) * s32(dig.P1) >> 15;
                if (v1 === 0) {
                  return 0;
                }
                compensated = u32(s32(Fn.POW_2_20) - P - (v2 >> 12)) * 3125;
                if (compensated < Fn.POW_2_31) {
                  compensated = (compensated << 1 >>> 0) / u32(v1);
                } else {
                  compensated = (compensated / u32(v1) >>> 0) * 2;
                }
                compensated = u32(compensated) >>> 0;
                const compshift3r = compensated >> 3;
                v1 = s32(dig.P9) * s32(compshift3r * compshift3r >> 13) >> 12;
                v2 = s32(compensated >> 2) * dig.P8 >> 13;
                compensated = u32(s32(compensated) + (v1 + v2 + dig.P7 >> 4));
                computed.pressure = compensated;
                const seapress = compensated / (1 - elevation * 225577e-10) ** 5.255;
                const altitude = 44330 * (1 - compensated / seapress ** (1 / 5.255));
                computed.altitude = Math.round(altitude - offset);
                vx = s32(fine - 76800);
                vx = ((H << 14) - s32(dig.H4 << 20) - dig.H5 * vx + Fn.POW_2_14 >> 15) * ((((vx * dig.H6 >> 10) * ((vx * dig.H3 >> 11) + Fn.POW_2_15) >> 10) + Fn.POW_2_21) * dig.H2 + Fn.POW_2_13 >> 14);
                vx -= ((vx >> 15) * (vx >> 15) >> 7) * s32(dig.H1) >> 4;
                vx = Fn.constrain(vx, 0, 419430400);
                computed.humidity = u32(vx >> 12);
                this.emit("data", computed);
              });
            });
          }
        },
        identifier: {
          value(options) {
            const address = Drivers.addressResolver(Drivers.BME280, options);
            return `bme280-${address}`;
          }
        }
      },
      SI7020: {
        ADDRESSES: {
          value: [64]
        },
        REGISTER: {
          value: {
            HUMIDITY: 229,
            TEMPERATURE: 224
          }
        },
        initialize: {
          value(board, options) {
            const io = board.io;
            const address = Drivers.addressResolver(this, options);
            options.delay = 5e4;
            io.i2cConfig(options);
            const computed = {
              temperature: null,
              humidity: null
            };
            io.i2cRead(address, this.REGISTER.TEMPERATURE, 2, (data) => {
              computed.temperature = uint16(data[0], data[1]);
              this.emit("data", computed);
            });
            io.i2cRead(address, this.REGISTER.HUMIDITY, 2, (data) => {
              computed.humidity = uint16(data[0], data[1]);
              this.emit("data", computed);
            });
          }
        },
        identifier: {
          value(options) {
            const address = Drivers.addressResolver(Drivers.SI7020, options);
            return `si7020-${address}`;
          }
        }
      },
      MS5611: {
        ADDRESSES: {
          value: [119]
        },
        REGISTER: {
          value: {
            COEFFICIENTS: 162,
            READ: 0,
            PRESSURE: 64,
            TEMPERATURE: 80,
            RESET: 30
          }
        },
        initialize: {
          value(board, options) {
            const io = board.io;
            let elevation = null;
            let offset = 0;
            if (typeof options.elevation !== "undefined") {
              elevation = options.elevation;
            }
            if (elevation != null && elevation <= 0 || elevation == null) {
              offset = Math.abs(elevation) + 1;
              elevation = 1;
            }
            const address = Drivers.addressResolver(this, options);
            const computed = {
              altitude: null,
              pressure: null,
              temperature: null
            };
            const mode = options.mode || 5;
            const kpDelay = [1, 2, 3, 4, 5, 10][mode];
            const cof = {
              C1: null,
              C2: null,
              C3: null,
              C4: null,
              C5: null,
              C6: null
            };
            const cKeys = Object.keys(cof);
            options.delay = kpDelay * 1e3;
            io.i2cConfig(options);
            io.i2cWrite(address, this.REGISTER.RESET);
            const pCoefficients = new Promise((resolve) => {
              setTimeout(() => {
                const cofs = cKeys.map((key, index) => {
                  const register = this.REGISTER.COEFFICIENTS + index * 2;
                  return new Promise((resolve2) => {
                    io.i2cReadOnce(address, register, 2, (data) => {
                      cof[key] = uint16(data[0], data[1]);
                      resolve2();
                    });
                  });
                });
                Promise.all(cofs).then(resolve);
              }, 50);
            });
            pCoefficients.then(() => {
              let cycle = 0;
              let D1;
              let D2;
              let dT;
              let TEMP;
              let OFF;
              let SENS;
              let P;
              let TEMP2;
              let OFF2;
              let SENS2;
              const readCycle = () => {
                const isTemperatureCycle = cycle === 0;
                const component = (isTemperatureCycle ? 80 : 64) + mode;
                io.i2cWrite(address, component);
                if (isTemperatureCycle) {
                  D2 = 0;
                  dT = 0;
                  TEMP = 0;
                  TEMP2 = 0;
                  OFF2 = 0;
                  SENS2 = 0;
                } else {
                  D1 = 0;
                  OFF = 0;
                  SENS = 0;
                  P = 0;
                }
                setTimeout(() => {
                  io.i2cReadOnce(address, this.REGISTER.READ, 3, (data) => {
                    if (isTemperatureCycle) {
                      D2 = uint24(data[0], data[1], data[2]);
                      dT = D2 - cof.C5 * Fn.POW_2_8;
                      TEMP = 2e3 + dT * cof.C6 / Fn.POW_2_23;
                      if (TEMP < 2e3) {
                        TEMP2 = dT ** 2 / Fn.POW_2_31;
                        OFF2 = 5 * (TEMP - 2e3) ** 2 / 2;
                        SENS2 = 5 * (TEMP - 2e3) ** 2 / Fn.POW_2_2;
                        if (TEMP < -1500) {
                          OFF2 = OFF2 + 7 * (TEMP + 1500) ** 2;
                          SENS2 = SENS2 + 11 * (TEMP + 1500) ** 2 / 2;
                        }
                      }
                      TEMP -= TEMP2;
                      computed.temperature = TEMP / 100;
                    } else {
                      D1 = uint24(data[0], data[1], data[2]);
                      OFF = cof.C2 * Fn.POW_2_16 + cof.C4 * dT / Fn.POW_2_7;
                      SENS = cof.C1 * Fn.POW_2_15 + cof.C3 * dT / Fn.POW_2_8;
                      OFF -= OFF2;
                      SENS -= SENS2;
                      P = (D1 * SENS / Fn.POW_2_21 - OFF) / Fn.POW_2_15;
                      computed.pressure = P;
                      const seapress = P / (1 - elevation * 225577e-10) ** 5.255;
                      const altitude = 44330 * (1 - P / seapress ** (1 / 5.255));
                      computed.altitude = altitude - offset;
                    }
                    if (++cycle === 2) {
                      cycle = 0;
                      this.emit("data", computed);
                    }
                    readCycle();
                  });
                }, kpDelay);
              };
              readCycle();
            });
          }
        },
        identifier: {
          value(options) {
            const address = Drivers.addressResolver(Drivers.MS5611, options);
            return `ms5611-${address}`;
          }
        }
      },
      TH02: {
        ADDRESSES: {
          value: [64]
        },
        COMMAND: {
          value: {
            MEASURE_HUMIDITY: 1,
            MEASURE_TEMPERATURE: 17
          }
        },
        REGISTER: {
          value: {
            STATUS: 0,
            READ: 1,
            CONFIG: 3
          }
        },
        initialize: {
          value(board, options) {
            const io = board.io;
            const address = Drivers.addressResolver(this, options);
            const computed = {
              temperature: null,
              humidity: null
            };
            let cycle = 0;
            io.i2cConfig(Object.assign(options, {
              settings: {
                stopTX: true
              }
            }));
            const readCycle = () => {
              const isTemperatureCycle = cycle === 0;
              const command = isTemperatureCycle ? this.COMMAND.MEASURE_TEMPERATURE : this.COMMAND.MEASURE_HUMIDITY;
              const conversion = new Promise((resolve) => {
                io.i2cWrite(address, this.REGISTER.CONFIG, command);
                const requestStatus = () => {
                  io.i2cReadOnce(address, this.REGISTER.STATUS, 1, (data) => {
                    const status = data[0];
                    if (!(status & 1)) {
                      resolve();
                    } else {
                      requestStatus();
                    }
                  });
                };
                requestStatus();
              });
              conversion.then(() => {
                Promise.all([
                  new Promise((resolve) => {
                    io.i2cReadOnce(address, 1, 1, (data) => {
                      resolve(data[0]);
                    });
                  }),
                  new Promise((resolve) => {
                    io.i2cReadOnce(address, 2, 1, (data) => {
                      resolve(data[0]);
                    });
                  })
                ]).then((data) => {
                  if (isTemperatureCycle) {
                    computed.temperature = (uint16(data[0], data[1]) >> 2) / 32 - 50;
                  } else {
                    computed.humidity = (uint16(data[0], data[1]) >> 4) / 16 - 24;
                  }
                  if (++cycle === 2) {
                    cycle = 0;
                    this.emit("data", computed);
                  }
                  readCycle();
                });
              });
            };
            readCycle();
          }
        },
        identifier: {
          value(options) {
            const address = Drivers.addressResolver(Drivers.TH02, options);
            return `th02-${address}`;
          }
        }
      },
      LSM303C: {
        ADDRESSES: {
          value: [
            29,
            30
          ]
        },
        COMMAND: {
          value: {
            ACC_SETUP: [4, 63, 63, 63],
            MAG_SETUP: [216, 96, 64, 216, 8, 0]
          }
        },
        REGISTER: {
          value: {
            ACC_CTRL_SEQ: [35, 32, 32, 32],
            ACC_STATUS: 39,
            ACC_OUTX_L: 40,
            ACC_OUTX_H: 41,
            ACC_OUTY_L: 42,
            ACC_OUTY_H: 43,
            ACC_OUTZ_L: 44,
            ACC_OUTZ_H: 45,
            MAG_CTRL_SEQ: [32, 33, 36, 32, 35, 34],
            MAG_STATUS: 39,
            MAG_OUTX_L: 40,
            MAG_OUTX_H: 41,
            MAG_OUTY_L: 42,
            MAG_OUTY_H: 43,
            MAG_OUTZ_L: 44,
            MAG_OUTZ_H: 45,
            MAG_TEMP_OUT_L: 46,
            MAG_TEMP_OUT_H: 47
          }
        },
        initialize: {
          value(board, options) {
            const ACC_SENSITIVITY = 0.06103515625;
            const MAG_SENSITIVITY = 48828125e-11;
            const io = board.io;
            const frequency = this.freq || 40;
            const [ACC_ADDRESS, MAG_ADDRESS] = this.ADDRESSES;
            const accelerometer = {};
            const magnetometer = {};
            const computed = {
              temperature: 0,
              magnetometer,
              accelerometer
            };
            const initializeAccelerometer = () => {
              io.i2cConfig(Object.assign({}, options, { address: ACC_ADDRESS }));
              this.REGISTER.ACC_CTRL_SEQ.forEach((ctrlReg, i) => {
                io.i2cWrite(ACC_ADDRESS, ctrlReg, this.COMMAND.ACC_SETUP[i]);
              });
            };
            const initializeMagnetometer = () => {
              io.i2cConfig(Object.assign({}, options, { address: MAG_ADDRESS }));
              this.REGISTER.MAG_CTRL_SEQ.forEach((ctrlReg, i) => {
                io.i2cWrite(MAG_ADDRESS, ctrlReg, this.COMMAND.MAG_SETUP[i]);
              });
            };
            const readAccelerometer = (done) => {
              io.i2cReadOnce(ACC_ADDRESS, this.REGISTER.ACC_OUTX_L, 6, (data) => {
                accelerometer.x = int16(data[1], data[0]) * ACC_SENSITIVITY;
                accelerometer.y = int16(data[3], data[2]) * ACC_SENSITIVITY;
                accelerometer.z = int16(data[5], data[4]) * ACC_SENSITIVITY;
                done();
              });
            };
            const readMagnetometer = (done) => {
              io.i2cReadOnce(MAG_ADDRESS, this.REGISTER.MAG_OUTX_L, 6, (data) => {
                magnetometer.x = int16(data[1], data[0]) * MAG_SENSITIVITY;
                magnetometer.y = int16(data[3], data[2]) * MAG_SENSITIVITY;
                magnetometer.z = int16(data[5], data[4]) * MAG_SENSITIVITY;
                done();
              });
            };
            const readTemperature = (done) => {
              io.i2cReadOnce(MAG_ADDRESS, this.REGISTER.MAG_TEMP_OUT_L, 2, (data) => {
                computed.temperature = int16(data[1], data[0]);
                done();
              });
            };
            const readCycle = () => {
              Promise.all([
                new Promise(readAccelerometer),
                new Promise(readMagnetometer),
                new Promise(readTemperature)
              ]).then(() => {
                this.emit("data", computed);
                setTimeout(readCycle, frequency);
              });
            };
            initializeAccelerometer();
            initializeMagnetometer();
            readCycle();
          }
        },
        identifier: {
          value(options) {
            const address = Drivers.addressResolver(Drivers.LSM303C, options);
            return `lsm303c-${address}`;
          }
        }
      }
    };
    Drivers.BMP085 = Drivers.BMP180;
    Drivers.GY521 = Drivers.MPU6050;
    Drivers.SI7021 = Drivers.SI7020;
    Drivers.DHT11_I2C_NANO_BACKPACK = Drivers.DHT_I2C_NANO_BACKPACK;
    Drivers.DHT21_I2C_NANO_BACKPACK = Drivers.DHT_I2C_NANO_BACKPACK;
    Drivers.DHT22_I2C_NANO_BACKPACK = Drivers.DHT_I2C_NANO_BACKPACK;
    Drivers.get = (board, driverName, options = {}) => {
      let drivers;
      let driverKey;
      let driver;
      if (!activeDrivers.has(board)) {
        activeDrivers.set(board, {});
      }
      drivers = activeDrivers.get(board);
      driverKey = Drivers[driverName].identifier.value(options);
      if (!drivers[driverKey]) {
        driver = new Emitter();
        Object.defineProperties(driver, Drivers[driverName]);
        driver.initialize(board, options);
        drivers[driverKey] = driver;
      }
      return drivers[driverKey];
    };
    Drivers.addressResolver = (driver, options) => {
      const addresses = driver.ADDRESSES;
      const address = options.address || (Array.isArray(addresses) ? addresses[0] : addresses.value[0]);
      options.address = address;
      return address;
    };
    Drivers.clear = () => {
      activeDrivers.clear();
    };
    var Controllers = {
      MPU6050: {
        initialize: {
          value(options) {
            Components.call(this, "MPU6050", options);
          }
        },
        components: {
          value: [ACCELEROMETER, GYRO, THERMOMETER]
        }
      },
      BNO055: {
        initialize: {
          value(options) {
            const state = priv.get(this);
            const CONTROLLER = "BNO055";
            state.calibrationMask = options.calibrationMask || 192;
            Drivers.get(this.board, CONTROLLER, options).on("calibrated", () => this.emit("calibrated")).on("calibration", (state2) => this.emit("calibration", state2));
            Components.call(this, CONTROLLER, options);
          }
        },
        components: {
          value: [ACCELEROMETER, GYRO, MAGNETOMETER, ORIENTATION, THERMOMETER]
        },
        calibration: {
          get() {
            return this.orientation.calibration;
          }
        },
        isCalibrated: {
          get() {
            const { calibrationMask } = priv.get(this);
            return (this.orientation.calibration & calibrationMask) === calibrationMask;
          }
        }
      },
      MPL115A2: {
        initialize: {
          value(options) {
            Components.call(this, "MPL115A2", options);
          }
        },
        components: {
          value: [BAROMETER, THERMOMETER]
        }
      },
      SHT31D: {
        initialize: {
          value(options) {
            Components.call(this, "SHT31D", options);
          }
        },
        components: {
          value: [HYGROMETER, THERMOMETER]
        }
      },
      HTU21D: {
        initialize: {
          value(options) {
            Components.call(this, "HTU21D", options);
          }
        },
        components: {
          value: [HYGROMETER, THERMOMETER]
        }
      },
      HIH6130: {
        initialize: {
          value(options) {
            Components.call(this, "HIH6130", options);
          }
        },
        components: {
          value: [HYGROMETER, THERMOMETER]
        }
      },
      DHT_I2C_NANO_BACKPACK: {
        initialize: {
          value(options) {
            Components.call(this, "DHT_I2C_NANO_BACKPACK", options);
          }
        },
        components: {
          value: [HYGROMETER, THERMOMETER]
        }
      },
      MPL3115A2: {
        initialize: {
          value(options) {
            Components.call(this, "MPL3115A2", options);
          }
        },
        components: {
          value: [ALTIMETER, BAROMETER, THERMOMETER]
        }
      },
      BMP180: {
        initialize: {
          value(options) {
            Components.call(this, "BMP180", options);
          }
        },
        components: {
          value: [ALTIMETER, BAROMETER, THERMOMETER]
        }
      },
      BMP280: {
        initialize: {
          value(options) {
            Components.call(this, "BMP280", options);
          }
        },
        components: {
          value: [ALTIMETER, BAROMETER, THERMOMETER]
        }
      },
      BME280: {
        initialize: {
          value(options) {
            Components.call(this, "BME280", options);
          }
        },
        components: {
          value: [ALTIMETER, BAROMETER, HYGROMETER, THERMOMETER]
        }
      },
      SI7020: {
        initialize: {
          value(options) {
            Components.call(this, "SI7020", options);
          }
        },
        components: {
          value: [HYGROMETER, THERMOMETER]
        }
      },
      MS5611: {
        initialize: {
          value(options) {
            Components.call(this, "MS5611", options);
          }
        },
        components: {
          value: [ALTIMETER, BAROMETER, THERMOMETER]
        }
      },
      TH02: {
        initialize: {
          value(options) {
            Components.call(this, "TH02", options);
          }
        },
        components: {
          value: [HYGROMETER, THERMOMETER]
        }
      },
      LSM303C: {
        initialize: {
          value(options) {
            Components.call(this, "LSM303C", options);
          }
        },
        components: {
          value: [MAGNETOMETER, THERMOMETER, ACCELEROMETER]
        }
      }
    };
    Controllers.BMP085 = Controllers.BMP180;
    Controllers.GY521 = Controllers.MPU6050;
    Controllers.SI7021 = Controllers.SI7020;
    Controllers.DHT11_I2C_NANO_BACKPACK = Controllers.DHT_I2C_NANO_BACKPACK;
    Controllers.DHT21_I2C_NANO_BACKPACK = Controllers.DHT_I2C_NANO_BACKPACK;
    Controllers.DHT22_I2C_NANO_BACKPACK = Controllers.DHT_I2C_NANO_BACKPACK;
    var IMU = class extends Emitter {
      constructor(options) {
        super();
        Board.Component.call(this, options = Board.Options(options));
        Board.Controller.call(this, Controllers, options);
        let state = {};
        priv.set(this, state);
        this.freq = options.freq || 20;
        if (typeof this.initialize === "function") {
          this.initialize(options);
        }
        this.isReady = false;
        setInterval(() => {
          if (this.isReady) {
            this.emit("data", this);
          }
        }, this.freq);
        const awaiting = this.components.slice();
        if (this.components && this.components.length > 0) {
          this.components.forEach((component) => {
            if (!(this[component] instanceof Emitter)) {
              return;
            }
            this[component].on("change", () => {
              if (awaiting.length) {
                const index = awaiting.indexOf(component);
                if (index !== -1) {
                  awaiting.splice(index, 1);
                }
              }
              if (!awaiting.length && !this.isReady) {
                this.isReady = true;
              }
              if (this.isReady) {
                this.emit("change", this, component);
              }
            });
          });
        }
      }
    };
    IMU.Drivers = Drivers;
    if (!!process.env.IS_TEST_MODE) {
      IMU.Controllers = Controllers;
      IMU.purge = () => {
        priv.clear();
      };
    }
    module2.exports = IMU;
  }
});

// node_modules/johnny-five/lib/accelerometer.js
var require_accelerometer = __commonJS({
  "node_modules/johnny-five/lib/accelerometer.js"(exports, module2) {
    var Board = require_board();
    var Expander = require_expander();
    var Emitter = require_emitter();
    var { constrain, fma, int16, sum, toFixed, RAD_TO_DEG } = require_fn();
    var priv = new Map();
    var calibrationSize = 10;
    var aX = "x";
    var aY = "y";
    var aZ = "z";
    var axes = [aX, aY, aZ];
    function analogInitialize({ zeroV, sensitivity }, callback) {
      const state = priv.get(this);
      const dataPoints = {};
      state.zeroV = zeroV || this.DEFAULTS.zeroV;
      state.sensitivity = sensitivity || this.DEFAULTS.sensitivity;
      this.pins.forEach(function(pin, index) {
        this.io.pinMode(pin, this.io.MODES.ANALOG);
        this.io.analogRead(pin, (data) => {
          const axis = axes[index];
          dataPoints[axis] = data;
          callback(dataPoints);
        });
      }, this);
    }
    function analogToGravity(value, axis) {
      const state = priv.get(this);
      let zeroV = state.zeroV;
      if (Array.isArray(zeroV) && zeroV.length > 0) {
        const axisIndex = axes.indexOf(axis);
        zeroV = zeroV[axisIndex || 0];
      }
      return (value - zeroV) / state.sensitivity;
    }
    var Controllers = {
      ANALOG: {
        DEFAULTS: {
          value: {
            zeroV: 478,
            sensitivity: 96
          }
        },
        initialize: {
          value: analogInitialize
        },
        toGravity: {
          value: analogToGravity
        }
      },
      MPU6050: {
        initialize: {
          value(options, callback) {
            const state = priv.get(this);
            state.sensitivity = options.sensitivity || 16384;
            const { Drivers } = require_sip();
            Drivers.get(this.board, "MPU6050", options).on("data", ({ accelerometer }) => callback(accelerometer));
          }
        },
        toGravity: {
          value(value) {
            return toFixed(value / priv.get(this).sensitivity, 3);
          }
        }
      },
      BNO055: {
        initialize: {
          value(options, callback) {
            const state = priv.get(this);
            state.sensitivity = 100;
            const { Drivers } = require_sip();
            Drivers.get(this.board, "BNO055", options).on("data", ({ accelerometer }) => callback(accelerometer));
          }
        },
        toGravity: {
          value(value) {
            return toFixed(value / priv.get(this).sensitivity, 2);
          }
        }
      },
      ADXL335: {
        DEFAULTS: {
          value: {
            zeroV: 330,
            sensitivity: 66.5
          }
        },
        initialize: {
          value: analogInitialize
        },
        toGravity: {
          value(value, axis) {
            return toFixed(analogToGravity.call(this, value, axis), 3);
          }
        }
      },
      ADXL345: {
        ADDRESSES: {
          value: [83]
        },
        REGISTER: {
          value: {
            POWER: 45,
            DATA_FORMAT: 49,
            DATAX0: 50
          }
        },
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            const address = Drivers.addressResolver(this, options);
            const READLENGTH = 6;
            this.io.i2cConfig(options);
            this.io.i2cWrite(address, this.REGISTER.POWER, 0);
            this.io.i2cWrite(address, this.REGISTER.POWER, 8);
            const format = 8;
            const range = {
              2: 0,
              4: 1,
              8: 2,
              16: 3
            }[options.range || 2];
            this.io.i2cWrite(address, this.REGISTER.DATA_FORMAT, format | range);
            this.io.i2cRead(address, this.REGISTER.DATAX0, READLENGTH, (data) => {
              callback({
                x: int16(data[1], data[0]),
                y: int16(data[3], data[2]),
                z: int16(data[5], data[4])
              });
            });
          }
        },
        toGravity: {
          value(value) {
            return toFixed(value * 390625e-8, 8);
          }
        }
      },
      MMA7361: {
        DEFAULTS: {
          value: {
            zeroV: [372, 372, 287],
            sensitivity: 170
          }
        },
        initialize: {
          value(options, callback) {
            const state = priv.get(this);
            if (options.sleepPin !== void 0) {
              state.sleepPin = options.sleepPin;
              this.io.pinMode(state.sleepPin, 1);
              this.io.digitalWrite(state.sleepPin, 1);
            }
            analogInitialize.call(this, options, callback);
          }
        },
        toGravity: {
          value(value, axis) {
            return toFixed(analogToGravity.call(this, value, axis), 3);
          }
        },
        enabledChanged: {
          value(value) {
            const state = priv.get(this);
            if (state.sleepPin !== void 0) {
              this.io.digitalWrite(state.sleepPin, value ? 1 : 0);
            }
          }
        }
      },
      MMA8452: {
        ADDRESSES: {
          value: [29]
        },
        REGISTER: {
          value: {
            STATUS: 0,
            OUT_X_MSB: 1,
            XYZ_DATA_CFG: 14,
            PULSE_CFG: 33,
            PULSE_SRC: 34,
            PULSE_THSX: 35,
            PULSE_THSY: 36,
            PULSE_THSZ: 37,
            PULSE_TMLT: 38,
            PULSE_LTCY: 39,
            PULSE_WIND: 40,
            CTRL_REG1: 42,
            CTRL_REG4: 46,
            CTRL_REG5: 47
          }
        },
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            const address = Drivers.addressResolver(this, options);
            const state = priv.get(this);
            const rates = [800, 400, 200, 100, 50, 12, 6];
            const odr = rates.indexOf(options.odr || 800);
            const scale = options.range || 2;
            const fsr = {
              2: 0,
              4: 1,
              8: 2
            }[scale];
            options.taps = options.taps || {
              x: false,
              y: false,
              z: true
            };
            const taps = {
              x: options.taps.x ? 8 : 128,
              y: options.taps.y ? 8 : 128,
              z: options.taps.z ? 8 : 128
            };
            state.scale = scale;
            const computed = {
              x: null,
              y: null,
              z: null
            };
            this.io.i2cConfig(Object.assign(options, {
              settings: {
                stopTX: false
              }
            }));
            if (odr === -1) {
              throw new RangeError("Invalid odr. Expected one of: 800,  400,  200,  100,  50,  12,  6");
            }
            let config = 8;
            config |= odr << 3;
            this.io.i2cWriteReg(address, this.REGISTER.CTRL_REG1, config);
            this.io.i2cWriteReg(address, this.REGISTER.XYZ_DATA_CFG, fsr);
            let temp = 0;
            if (!(taps.x & 128)) {
              temp |= 3;
              this.io.i2cWriteReg(address, this.REGISTER.PULSE_THSX, taps.x);
            }
            if (!(taps.y & 128)) {
              temp |= 12;
              this.io.i2cWriteReg(address, this.REGISTER.PULSE_THSY, taps.y);
            }
            if (!(taps.z & 128)) {
              temp |= 48;
              this.io.i2cWriteReg(address, this.REGISTER.PULSE_THSZ, taps.z);
            }
            this.io.i2cWriteReg(address, this.REGISTER.PULSE_CFG, temp | 64);
            this.io.i2cWriteReg(address, this.REGISTER.PULSE_TMLT, 60 / (1e3 / rates[odr]));
            this.io.i2cWriteReg(address, this.REGISTER.PULSE_LTCY, 200 / (1e3 / rates[odr]));
            this.io.i2cWriteReg(address, this.REGISTER.PULSE_WIND, 255);
            config |= 1;
            this.io.i2cWriteReg(address, this.REGISTER.CTRL_REG1, config);
            this.io.i2cRead(address, this.REGISTER.STATUS, 7, (data) => {
              const status = (data.shift() & 8) >>> 3;
              if (status) {
                computed.x = int16(data[0], data[1]) >> 4;
                computed.y = int16(data[2], data[3]) >> 4;
                computed.z = int16(data[4], data[5]) >> 4;
                callback(computed);
              }
            });
            this.io.i2cRead(address, this.REGISTER.PULSE_SRC, 1, (data) => {
              const status = data[0];
              const tap = status & 127;
              if (status & 128) {
                this.emit("tap");
                if (tap >> 2 & 1) {
                  this.emit("tap:single");
                  if (tap >> 3 & 1) {
                    this.emit("tap:double");
                  }
                }
              }
            });
          }
        },
        toGravity: {
          value(value) {
            return toFixed(value / ((1 << 11) * priv.get(this).scale), 4);
          }
        }
      },
      MMA7660: {
        ADDRESSES: {
          value: [76]
        },
        REGISTER: {
          value: {
            XOUT: 0,
            MODE: 7,
            SR: 8
          }
        },
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            const address = Drivers.addressResolver(this, options);
            const READLENGTH = 3;
            const state = priv.get(this);
            state.sensitivity = 21.33;
            this.io.i2cConfig(options);
            this.io.i2cWrite(address, this.REGISTER.MODE, 0);
            this.io.i2cWrite(address, this.REGISTER.SR, 7);
            this.io.i2cWrite(address, this.REGISTER.MODE, 1);
            this.io.i2cRead(address, this.REGISTER.XOUT, READLENGTH, (data) => {
              callback({
                x: data[0] & 63,
                y: data[1] & 63,
                z: data[2] & 63
              });
            });
          }
        },
        toGravity: {
          value(value) {
            return toFixed(value / priv.get(this).sensitivity, 3);
          }
        }
      },
      ESPLORA: {
        DEFAULTS: {
          value: {
            zeroV: [320, 330, 310],
            sensitivity: 170
          }
        },
        initialize: {
          value(options, callback) {
            this.pins = [5, 11, 6];
            analogInitialize.call(this, options, callback);
          }
        },
        toGravity: {
          value(value, axis) {
            return toFixed(analogToGravity.call(this, value, axis), 2);
          }
        }
      },
      LIS3DH: {
        ADDRESSES: {
          value: [24]
        },
        REGISTER: {
          value: {
            OUT_X_L: 40,
            CTRL_REG1: 32,
            CTRL_REG2: 33,
            CTRL_REG3: 34,
            CTRL_REG4: 35,
            CTRL_REG5: 36,
            TEMP_CFG_REG: 31,
            CLICK_CFG: 56,
            CLICK_SRC: 57,
            CLICK_THS: 58,
            TIME_LIMIT: 59,
            TIME_LATENCY: 60,
            TIME_WINDOW: 61
          }
        },
        initialize: {
          value(options, callback) {
            const state = priv.get(this);
            const address = options.address || 24;
            let range = {
              2: 0,
              4: 1,
              8: 2,
              16: 3
            }[options.range || 4];
            if (range === void 0) {
              range = 1;
            }
            let divider = [
              16380,
              8190,
              4096,
              1365
            ][range];
            if (divider === void 0) {
              divider = 1;
            }
            let threshold = [
              80,
              40,
              20,
              10
            ][range];
            if (threshold === void 0) {
              threshold = 10;
            }
            state.divider = divider;
            state.expander = Expander.get({
              address,
              controller: this.controller,
              bus: this.bus
            });
            const ctrl4 = 136 | range << 4;
            state.expander.i2cWrite(address, this.REGISTER.CTRL_REG4, ctrl4);
            state.expander.i2cReadOnce(address, this.REGISTER.CTRL_REG1, 1, (data) => {
              let ctrl1 = data[0];
              ctrl1 &= ~240;
              ctrl1 |= 6 << 4;
              state.expander.i2cWrite(address, this.REGISTER.CTRL_REG1, ctrl1);
              state.expander.i2cRead(address, this.REGISTER.OUT_X_L | 128, 6, (data2) => {
                callback({
                  x: int16(data2[1], data2[0]),
                  y: int16(data2[3], data2[2]),
                  z: int16(data2[5], data2[4])
                });
              });
              state.expander.i2cWrite(address, this.REGISTER.CTRL_REG3, 128);
              state.expander.i2cWrite(address, this.REGISTER.CTRL_REG5, 8);
              state.expander.i2cWrite(address, this.REGISTER.CLICK_CFG, 42);
              const timelimit = 10;
              const timelatency = 20;
              const timewindow = 255;
              state.expander.i2cWrite(address, this.REGISTER.CLICK_THS, threshold);
              state.expander.i2cWrite(address, this.REGISTER.TIME_LIMIT, timelimit);
              state.expander.i2cWrite(address, this.REGISTER.TIME_LATENCY, timelatency);
              state.expander.i2cWrite(address, this.REGISTER.TIME_WINDOW, timewindow);
              let lastEmitTime = null;
              state.expander.i2cRead(address, this.REGISTER.CLICK_SRC, 1, (data2) => {
                const status = data2[0];
                const thisEmitTime = Date.now();
                if (lastEmitTime === null) {
                  lastEmitTime = thisEmitTime - 101;
                }
                if (thisEmitTime < lastEmitTime + 100) {
                  return;
                }
                if (status === 0) {
                  return;
                }
                if (!(status & 48)) {
                  return;
                }
                lastEmitTime = thisEmitTime;
                this.emit("tap");
                if (status & 16) {
                  this.emit("tap:single");
                }
                if (status & 32) {
                  this.emit("tap:single");
                  this.emit("tap:double");
                }
              });
            });
          }
        },
        toGravity: {
          value(raw) {
            return toFixed(raw / priv.get(this).divider, 3);
          }
        }
      },
      LSM303C: {
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            Drivers.get(this.board, "LSM303C", options).on("data", ({ accelerometer }) => callback(accelerometer));
          }
        },
        toGravity: {
          value(raw) {
            return toFixed(raw, 2);
          }
        }
      }
    };
    Controllers.TINKERKIT = Controllers.ANALOG;
    Controllers.MMA8452Q = Controllers.MMA8452;
    Controllers.DEFAULT = Controllers.ANALOG;
    function magnitude(x, y, z) {
      let a;
      a = x * x;
      a = fma(y, y, a);
      a = fma(z, z, a);
      return Math.sqrt(a);
    }
    var Accelerometer = class extends Emitter {
      constructor(options) {
        super();
        const state = {
          enabled: true,
          x: {
            value: 0,
            previous: 0,
            stash: [],
            orientation: null,
            inclination: null,
            acceleration: null,
            calibration: []
          },
          y: {
            value: 0,
            previous: 0,
            stash: [],
            orientation: null,
            inclination: null,
            acceleration: null,
            calibration: []
          },
          z: {
            value: 0,
            previous: 0,
            stash: [],
            orientation: null,
            inclination: null,
            acceleration: null,
            calibration: []
          }
        };
        Board.Component.call(this, options = Board.Options(options));
        Board.Controller.call(this, Controllers, options);
        if (!this.toGravity) {
          this.toGravity = options.toGravity || ((x) => x);
        }
        if (!this.enabledChanged) {
          this.enabledChanged = () => {
          };
        }
        priv.set(this, state);
        if (typeof this.initialize === "function") {
          this.initialize(options, (data) => {
            let isChange = false;
            if (!state.enabled) {
              return;
            }
            Object.keys(data).forEach((axis) => {
              const value = data[axis];
              const sensor = state[axis];
              if (options.autoCalibrate && sensor.calibration.length < calibrationSize) {
                const axisIndex = axes.indexOf(axis);
                sensor.calibration.push(value);
                if (!Array.isArray(state.zeroV)) {
                  state.zeroV = [];
                }
                state.zeroV[axisIndex] = sum(sensor.calibration) / sensor.calibration.length;
                if (axis === aZ) {
                  state.zeroV[axisIndex] -= state.sensitivity;
                }
              }
              if (sensor.stash.length === 0) {
                for (let i = 0; i < 5; i++) {
                  sensor.stash[i] = value;
                }
              }
              sensor.previous = sensor.value;
              sensor.stash.shift();
              sensor.stash.push(value);
              sensor.value = sum(sensor.stash) / 5 | 0;
              if (this.acceleration !== sensor.acceleration) {
                sensor.acceleration = this.acceleration;
                isChange = true;
                this.emit("acceleration", sensor.acceleration);
              }
              if (this.orientation !== sensor.orientation) {
                sensor.orientation = this.orientation;
                isChange = true;
                this.emit("orientation", sensor.orientation);
              }
              if (this.inclination !== sensor.inclination) {
                sensor.inclination = this.inclination;
                isChange = true;
                this.emit("inclination", sensor.inclination);
              }
            });
            this.emit("data", {
              x: state.x.value,
              y: state.y.value,
              z: state.z.value
            });
            if (isChange) {
              this.emit("change", {
                x: this.x,
                y: this.y,
                z: this.z
              });
            }
          });
        }
        Object.defineProperties(this, {
          hasAxis: {
            writable: true,
            value(axis) {
              return state[axis] ? state[axis].stash.length > 0 : false;
            }
          },
          enable: {
            value() {
              state.enabled = true;
              this.enabledChanged(true);
              return this;
            }
          },
          disable: {
            value() {
              state.enabled = false;
              this.enabledChanged(false);
              return this;
            }
          },
          zeroV: {
            get() {
              return state.zeroV;
            }
          },
          pitch: {
            get() {
              const x = this.x;
              const y = this.y;
              const z = this.z;
              const rads = this.hasAxis(aZ) ? Math.atan2(x, Math.hypot(y, z)) : Math.asin(constrain(x, -1, 1));
              return toFixed(rads * RAD_TO_DEG, 2);
            }
          },
          roll: {
            get() {
              const x = this.x;
              const y = this.y;
              const z = this.z;
              const rads = this.hasAxis(aZ) ? Math.atan2(y, Math.hypot(x, z)) : Math.asin(constrain(y, -1, 1));
              return toFixed(rads * RAD_TO_DEG, 2);
            }
          },
          x: {
            get() {
              return this.toGravity(state.x.value, aX);
            }
          },
          y: {
            get() {
              return this.toGravity(state.y.value, aY);
            }
          },
          z: {
            get() {
              return this.hasAxis(aZ) ? this.toGravity(state.z.value, aZ) : 0;
            }
          },
          acceleration: {
            get() {
              return magnitude(this.x, this.y, this.z);
            }
          },
          inclination: {
            get() {
              return Math.atan2(this.y, this.x) * RAD_TO_DEG;
            }
          },
          orientation: {
            get() {
              const abs = Math.abs;
              const x = this.x;
              const y = this.y;
              const z = this.hasAxis(aZ) ? this.z : 1;
              const absX = abs(x);
              const absY = abs(y);
              const absZ = abs(z);
              if (absX < absY && absX < absZ) {
                if (x > 0) {
                  return 1;
                }
                return -1;
              }
              if (absY < absX && absY < absZ) {
                if (y > 0) {
                  return 2;
                }
                return -2;
              }
              if (absZ < absX && absZ < absY) {
                if (z > 0) {
                  return 3;
                }
                return -3;
              }
              return 0;
            }
          }
        });
      }
    };
    if (!!process.env.IS_TEST_MODE) {
      Accelerometer.Controllers = Controllers;
      Accelerometer.purge = function() {
        priv.clear();
      };
    }
    module2.exports = Accelerometer;
  }
});

// node_modules/johnny-five/lib/easing.js
var require_easing = __commonJS({
  "node_modules/johnny-five/lib/easing.js"(exports, module2) {
    var SI = 1.70158;
    var SIO = 1.70158 * 1.525;
    var SB = 7.5625;
    var HALF = 0.5;
    var {
      PI,
      cos,
      sin,
      sqrt
    } = Math;
    var ease = {};
    ease.linear = (n) => n;
    ease.inQuad = (n) => n * n;
    ease.outQuad = (n) => n * (2 - n);
    ease.inOutQuad = (n) => {
      n *= 2;
      return n < 1 ? HALF * n * n : -HALF * (--n * (n - 2) - 1);
    };
    ease.inCube = (n) => n * n * n;
    ease.outCube = (n) => --n * n * n + 1;
    ease.inOutCube = (n) => {
      n *= 2;
      return n < 1 ? HALF * (n * n * n) : HALF * ((n -= 2) * n * n + 2);
    };
    ease.inQuart = (n) => n * n * n * n;
    ease.outQuart = (n) => 1 - --n * (n * n * n);
    ease.inOutQuart = (n) => {
      n *= 2;
      return n < 1 ? HALF * (n * n * n * n) : -HALF * ((n -= 2) * (n * n * n) - 2);
    };
    ease.inQuint = (n) => n * n * n * n * n;
    ease.outQuint = (n) => --n * (n * n * n * n) + 1;
    ease.inOutQuint = (n) => {
      n *= 2;
      return n < 1 ? HALF * (n * n * n * n * n) : HALF * ((n -= 2) * (n * n * n * n) + 2);
    };
    ease.inSine = (n) => 1 - cos(n * PI / 2);
    ease.outSine = (n) => sin(n * PI / 2);
    ease.inOutSine = (n) => HALF * (1 - cos(PI * n));
    ease.inExpo = (n) => n === 0 ? 0 : Math.pow(1024, n - 1);
    ease.outExpo = (n) => n === 1 ? n : 1 - Math.pow(2, -10 * n);
    ease.inOutExpo = (n) => {
      if (n === 0) {
        return 0;
      }
      if (n === 1) {
        return 1;
      }
      return (n *= 2) < 1 ? HALF * Math.pow(1024, n - 1) : HALF * (-Math.pow(2, -10 * (n - 1)) + 2);
    };
    ease.inCirc = (n) => 1 - sqrt(1 - n * n);
    ease.outCirc = (n) => sqrt(1 - --n * n);
    ease.inOutCirc = (n) => {
      n *= 2;
      return n < 1 ? -HALF * (sqrt(1 - n * n) - 1) : HALF * (sqrt(1 - (n -= 2) * n) + 1);
    };
    ease.inBack = (n) => n * n * ((SI + 1) * n - SI);
    ease.outBack = (n) => --n * n * ((SI + 1) * n + SI) + 1;
    ease.inOutBack = (n) => {
      return (n *= 2) < 1 ? HALF * (n * n * ((SIO + 1) * n - SIO)) : HALF * ((n -= 2) * n * ((SIO + 1) * n + SIO) + 2);
    };
    ease.outBounce = (n) => {
      if (n < 1 / 2.75) {
        return SB * n * n;
      } else if (n < 2 / 2.75) {
        return SB * (n -= 1.5 / 2.75) * n + 0.75;
      } else if (n < 2.5 / 2.75) {
        return SB * (n -= 2.25 / 2.75) * n + 0.9375;
      } else {
        return SB * (n -= 2.625 / 2.75) * n + 0.984375;
      }
    };
    ease.inBounce = (n) => 1 - ease.outBounce(1 - n);
    ease.inOutBounce = (n) => {
      return n < HALF ? ease.inBounce(n * 2) * HALF : ease.outBounce(n * 2 - 1) * HALF + HALF;
    };
    var exportables = {};
    Object.keys(ease).forEach((key) => {
      exportables[key.toLowerCase()] = ease[key];
    });
    module2.exports = new Proxy({}, {
      get(target, property) {
        return exportables[property.replace(/([a-z])([A-Z])/g, "$1$2").toLowerCase()];
      }
    });
  }
});

// node_modules/temporal/lib/temporal.js
var require_temporal = __commonJS({
  "node_modules/temporal/lib/temporal.js"(exports, module2) {
    var Emitter = require("events").EventEmitter;
    var util = require("util");
    var resolutionDivisor = 1e6;
    var exportable = new Emitter();
    var queue = {};
    var gLast = Date.now();
    var isProcessing = false;
    var tick = global.setImmediate || process.nextTick;
    var hrTime = function() {
      var hrtime = process.hrtime();
      return Math.floor((hrtime[0] * 1e9 + hrtime[1]) / resolutionDivisor);
    };
    var time = function() {
      return Date.now();
    };
    var getTime = time;
    function Task(entry) {
      if (!(this instanceof Task)) {
        return new Task(entry);
      }
      this.called = 0;
      this.now = this.calledAt = getTime();
      if (resolutionDivisor !== 1e6) {
        entry.time = ~~(entry.time * (1e6 / resolutionDivisor));
      }
      this.isRunnable = true;
      this.later = this.now + entry.time;
      this.task = entry.task;
      this.type = entry.type;
      this.time = entry.time;
      if (this.later > gLast) {
        gLast = this.later;
      }
      if (!queue[this.later]) {
        queue[this.later] = [];
      }
      queue[this.later].push(this);
    }
    util.inherits(Task, Emitter);
    Task.deriveOp = function(p, v) {
      return v !== "task" ? v : p;
    };
    Task.prototype.stop = function() {
      this.isRunnable = false;
      this.emit("stop");
    };
    function Queue(tasks) {
      this.refs = [];
      this.add(tasks);
    }
    util.inherits(Queue, Emitter);
    Queue.prototype.stop = function() {
      this.refs.forEach(function(ref) {
        ref.stop();
      });
      this.emit("stop");
    };
    Queue.prototype.add = function(tasks) {
      var op, item, task, ref;
      this.cumulative = this.cumulative || 0;
      while (tasks.length) {
        item = tasks.shift();
        op = Object.keys(item).reduce(Task.deriveOp, "");
        this.cumulative += item[op];
        if (tasks.length === 0) {
          task = item.task;
          item.task = (temporald) => {
            task.call(this, temporald);
            this.emit("end", temporald);
            this.cumulative = 0;
          };
        }
        if (op === "loop" && tasks.length === 0) {
          ref = exportable.delay(this.cumulative - item[op], () => {
            ref = exportable.loop(item[op], item.task);
            this.refs.push(ref);
          });
        } else {
          ref = exportable[op](this.cumulative, item.task);
        }
        this.refs.push(ref);
      }
    };
    exportable.queue = function(tasks) {
      var queue2 = new Queue(tasks);
      processQueue();
      return queue2;
    };
    var previousTime = getTime();
    function processQueue() {
      if (!isProcessing) {
        isProcessing = true;
        exportable.emit("busy");
      }
      var now = getTime();
      var entries = [];
      var callProcessQueue = true;
      var entry, i;
      if (gLast <= now) {
        callProcessQueue = false;
      }
      for (i = previousTime; i <= now; i++) {
        [].push.apply(entries, queue[i] || []);
      }
      if (entries.length) {
        while (entries.length) {
          entry = entries.shift();
          if (entry.isRunnable) {
            entry.called++;
            entry.calledAt = now;
            entry.task.call(entry, entry);
          }
          if (entry.type === "loop" && entry.isRunnable) {
            callProcessQueue = true;
            entry.later = now + entry.time;
            if (entry.later > gLast) {
              gLast = entry.later;
            }
            if (!queue[entry.later]) {
              queue[entry.later] = [];
            }
            if (entry.isRunnable) {
              queue[entry.later].push(entry);
            }
          }
        }
        for (i = previousTime; i <= now; i++) {
          delete queue[i];
        }
        entries.length = 0;
      }
      previousTime = now;
      if (callProcessQueue) {
        tick(processQueue);
      } else {
        isProcessing = false;
        exportable.emit("idle");
      }
    }
    ["loop", "delay"].forEach(function(type) {
      exportable[type] = function(time2, operation) {
        if (typeof time2 === "function") {
          operation = time2;
          time2 = 10;
        }
        var task = new Task({
          time: time2,
          type,
          task: operation
        });
        if (!isProcessing) {
          processQueue();
        }
        return task;
      };
    });
    exportable.wait = exportable.defer = exportable.delay;
    exportable.repeat = function(n, ms, callback) {
      return exportable.loop(ms, function(context) {
        callback(context);
        if (context.called === n) {
          this.stop();
        }
      });
    };
    exportable.clear = function() {
      isProcessing = false;
      exportable.removeAllListeners();
      queue = {};
    };
    exportable.resolution = function(value) {
      if (value === 0.1 || value === 0.01) {
        resolutionDivisor = 1e6 * value;
        getTime = hrTime;
      } else {
        resolutionDivisor = 1e6;
        getTime = time;
      }
      previousTime = getTime();
    };
    module2.exports = exportable;
  }
});

// node_modules/johnny-five/lib/animation.js
var require_animation = __commonJS({
  "node_modules/johnny-five/lib/animation.js"(exports, module2) {
    var Emitter = require_emitter();
    var ease = require_easing();
    var { cloneDeep, constrain } = require_fn();
    var temporal;
    var temporalTTL = 5e3;
    var Animation = class extends Emitter {
      constructor(target) {
        super();
        if (!temporal) {
          temporal = require_temporal();
        }
        Object.assign(this, new Animation.Segment());
        this.defaultTarget = target || {};
      }
      enqueue(options = {}) {
        if (typeof options.target === "undefined") {
          options.target = this.defaultTarget;
        }
        this.segments.push(options);
        if (!this.paused && !this.isRunning) {
          this.next();
        }
        return this;
      }
      next() {
        if (this.isRunning) {
          return this;
        } else {
          this.isRunning = true;
        }
        if (this.segments.length > 0) {
          Object.assign(this, new Animation.Segment(this.segments.shift()));
          this.paused = this.currentSpeed === 0 ? true : false;
          if (this.onstart) {
            this.onstart();
          }
          this.normalizeKeyframes();
          if (this.reverse) {
            this.currentSpeed *= -1;
          }
          if (this.currentSpeed !== 0) {
            this.play();
          } else {
            this.paused = true;
          }
        } else {
          this.playLoop.stop();
        }
        return this;
      }
      pause() {
        this.emit("animation:pause");
        if (this.playLoop) {
          this.playLoop.stop();
        }
        this.paused = true;
        if (this.onpause) {
          this.onpause();
        }
      }
      stop() {
        this.emit("animation:stop");
        this.segments = [];
        this.isRunning = false;
        if (this.playLoop) {
          this.playLoop.stop();
        }
        if (this.onstop) {
          this.onstop();
        }
      }
      speed(speed) {
        if (typeof speed === "undefined") {
          return this.currentSpeed;
        } else {
          this.currentSpeed = speed;
          this.scaledDuration = this.duration / Math.abs(this.currentSpeed);
          this.startTime = Date.now() - this.scaledDuration * this.progress;
          this.endTime = this.startTime + this.scaledDuration;
          if (!this.paused) {
            this.play();
          }
          return this;
        }
      }
      loopFunction({ calledAt }) {
        const progress = this.calculateProgress(calledAt);
        const indices = this.findIndices(progress);
        this.target[Animation.render](this.tweenedValue(indices, progress));
        if (calledAt > this.fallBackTime) {
          this.fallBackTime = Infinity;
          if (this.playLoop) {
            this.playLoop.stop();
          }
          this.playLoop = new Animation.TemporalFallback(this);
        }
        if (this.progress === 1 && !this.reverse || progress === this.loopback && this.reverse) {
          if (this.loop || this.metronomic && !this.reverse) {
            if (this.onloop) {
              this.onloop();
            }
            if (this.metronomic) {
              this.reverse = this.reverse ? false : true;
            }
            this.normalizeKeyframes();
            this.progress = this.loopback;
            this.startTime = Date.now() - this.scaledDuration * this.progress;
            this.endTime = this.startTime + this.scaledDuration;
          } else {
            this.isRunning = false;
            if (this.oncomplete) {
              process.nextTick(() => this.oncomplete());
            }
            if (this.segments.length > 0) {
              process.nextTick(() => this.next());
            } else {
              this.stop();
            }
          }
        }
      }
      play() {
        const now = Date.now();
        if (this.playLoop) {
          this.playLoop.stop();
        }
        this.paused = false;
        this.isRunning = true;
        this.scaledDuration = this.duration / Math.abs(this.currentSpeed);
        this.startTime = now - this.scaledDuration * this.progress;
        this.endTime = this.startTime + this.scaledDuration;
        this.fallBackTime = now + temporalTTL;
        this.frameCount = 0;
        if (this.fps) {
          this.rate = 1e3 / this.fps;
        }
        this.rate = this.rate | 0;
        this.playLoop = temporal.loop(this.rate, (data) => this.loopFunction(data));
      }
      findIndices(progress) {
        const indices = {
          left: null,
          right: null
        };
        indices.right = this.cuePoints.findIndex((point) => point >= progress);
        indices.left = indices.right === 0 ? 0 : indices.right - 1;
        return indices;
      }
      calculateProgress(calledAt) {
        let progress = (calledAt - this.startTime) / this.scaledDuration;
        if (progress > 1) {
          progress = 1;
        }
        this.progress = progress;
        if (this.reverse) {
          progress = 1 - progress;
        }
        return constrain(ease[this.easing](progress), 0, 1);
      }
      tweenedValue(indices, progress) {
        const tween = {
          duration: null,
          progress: null
        };
        const result = this.normalizedKeyFrames.map((keyFrame) => {
          const kIndices = {
            left: null,
            right: null
          };
          for (kIndices.left = indices.left; kIndices.left > -1; kIndices.left--) {
            if (keyFrame[kIndices.left] !== null) {
              break;
            }
          }
          kIndices.right = keyFrame.findIndex((frame, index) => index >= indices.right && frame !== null);
          tween.duration = this.cuePoints[kIndices.right] - this.cuePoints[kIndices.left];
          tween.progress = (progress - this.cuePoints[kIndices.left]) / tween.duration;
          if (!Number.isFinite(tween.progress)) {
            tween.progress = this.reverse ? 0 : 1;
          }
          const left = keyFrame[kIndices.left];
          const right = keyFrame[kIndices.right];
          tween.progress = ease[right.easing](tween.progress);
          let calcValue;
          if (right.position) {
            calcValue = right.position.map((value, index) => (value - left.position[index]) * tween.progress + left.position[index]);
          } else {
            if (typeof right.value === "number" && typeof left.value === "number") {
              calcValue = (right.value - left.value) * tween.progress + left.value;
            } else {
              calcValue = this.target[Animation.keys].reduce((accum, key) => {
                accum[key] = (right.value[key] - left.value[key]) * tween.progress + left.value[key];
                return accum;
              }, {});
            }
          }
          return calcValue;
        });
        return result;
      }
      normalizeKeyframes() {
        let previousVal;
        let keyFrameSet = cloneDeep(this.keyFrames);
        const cuePoints = this.cuePoints;
        keyFrameSet = this.target[Animation.normalize](keyFrameSet);
        if (!Array.isArray(keyFrameSet[0])) {
          keyFrameSet = [keyFrameSet];
        }
        keyFrameSet.forEach(function(keyFrames) {
          for (let i = keyFrames.length; i < cuePoints.length; i++) {
            keyFrames.push(null);
          }
          keyFrames.forEach((keyFrame, i, source) => {
            if (keyFrame !== null) {
              if (typeof keyFrame !== "object") {
                keyFrame = {
                  step: keyFrame,
                  easing: "linear"
                };
              }
              if (typeof keyFrame.step !== "undefined") {
                keyFrame.value = keyFrame.step === false ? previousVal : previousVal + keyFrame.step;
              }
              if (!keyFrame.easing) {
                keyFrame.easing = "linear";
              }
              if (typeof keyFrame.copyValue !== "undefined") {
                keyFrame.value = source[keyFrame.copyValue].value;
              }
              if (keyFrame.copyFrame) {
                keyFrame = source[keyFrame.copyFrame];
              }
              previousVal = keyFrame.value;
            } else {
              if (i === source.length - 1) {
                keyFrame = {
                  value: previousVal,
                  easing: "linear"
                };
              } else {
                keyFrame = null;
              }
            }
            source[i] = keyFrame;
          }, this);
        });
        this.normalizedKeyFrames = keyFrameSet;
        return this;
      }
    };
    Animation.keys = "@@keys";
    Animation.normalize = "@@normalize";
    Animation.render = "@@render";
    Animation.TemporalFallback = class {
      constructor(animation) {
        this.interval = setInterval(() => {
          animation.loopFunction({
            calledAt: Date.now()
          });
        }, animation.rate);
      }
      stop() {
        if (this.interval) {
          clearInterval(this.interval);
        }
      }
    };
    Animation.Segment = class {
      constructor(options) {
        this.cuePoints = [0, 1];
        this.duration = 1e3;
        this.easing = "linear";
        this.loop = false;
        this.loopback = 0;
        this.metronomic = false;
        this.currentSpeed = 1;
        this.progress = 0;
        this.fps = 60;
        this.rate = 1e3 / 60;
        this.paused = false;
        this.isRunning = false;
        this.segments = [];
        this.onstart = null;
        this.onpause = null;
        this.onstop = null;
        this.oncomplete = null;
        this.onloop = null;
        if (options) {
          Object.assign(this, options);
          if (options.segments) {
            this.segments = options.segments.slice();
          }
        }
      }
    };
    module2.exports = Animation;
  }
});

// node_modules/johnny-five/lib/evshield.js
var require_evshield = __commonJS({
  "node_modules/johnny-five/lib/evshield.js"(exports, module2) {
    var Emitter = require_emitter();
    var shared;
    var Bank = class {
      constructor(options) {
        this.address = options.address;
        this.io = options.io;
        this.io.i2cConfig(options);
      }
      read(register, numBytes, callback) {
        if (register) {
          this.io.i2cRead(this.address, register, numBytes, callback);
        } else {
          this.io.i2cRead(this.address, numBytes, callback);
        }
      }
      write(register, bytes) {
        if (!Array.isArray(bytes)) {
          bytes = [bytes];
        }
        this.io.i2cWrite(this.address, register, bytes);
      }
    };
    var EVS = class extends Emitter {
      constructor({ io }) {
        super();
        if (shared) {
          return shared;
        }
        this.bank = {
          a: new Bank({
            address: EVS.BANK_A,
            io
          }),
          b: new Bank({
            address: EVS.BANK_B,
            io
          })
        };
        shared = this;
      }
      setup({ bank, mode }, type) {
        this.bank[bank].write(mode, [type]);
      }
      read(port, register, numBytes, callback) {
        if (port.sensor && port.offset && !EVS.isRawSensor(port)) {
          register += port.offset;
        }
        this.bank[port.bank].read(register, numBytes, callback);
      }
      write({ bank }, register, data) {
        this.bank[bank].write(register, data);
      }
    };
    EVS.shieldPort = (pin) => {
      const port = EVS[pin];
      if (port === void 0) {
        throw new Error("Invalid EVShield pin name");
      }
      let address;
      let analog;
      let bank;
      let motor;
      let mode;
      let offset;
      let sensor;
      let endsWithS1 = false;
      if (pin.startsWith("BA")) {
        address = EVS.BANK_A;
        bank = "a";
      } else {
        address = EVS.BANK_B;
        bank = "b";
      }
      if (pin.includes("M")) {
        motor = pin.endsWith("M1") ? EVS.S1 : EVS.S2;
      }
      if (pin.includes("S")) {
        endsWithS1 = pin.endsWith("S1");
        analog = endsWithS1 ? EVS.S1_ANALOG : EVS.S2_ANALOG;
        mode = endsWithS1 ? EVS.S1_MODE : EVS.S2_MODE;
        offset = endsWithS1 ? EVS.S1_OFFSET : EVS.S2_OFFSET;
        sensor = endsWithS1 ? EVS.S1 : EVS.S2;
      }
      return {
        address,
        analog,
        bank,
        mode,
        motor,
        offset,
        port,
        sensor
      };
    };
    EVS.isRawSensor = ({ analog }) => analog === EVS.S1_ANALOG || analog === EVS.S2_ANALOG;
    EVS.BAS1 = 1;
    EVS.BAS2 = 2;
    EVS.BBS1 = 3;
    EVS.BBS2 = 4;
    EVS.BAM1 = 5;
    EVS.BAM2 = 6;
    EVS.BBM1 = 7;
    EVS.BBM2 = 8;
    EVS.BANK_A = 26;
    EVS.BANK_B = 27;
    EVS.S1 = 1;
    EVS.S2 = 2;
    EVS.M1 = 1;
    EVS.M2 = 2;
    EVS.MM = 3;
    EVS.Type_NONE = 0;
    EVS.Type_SWITCH = 1;
    EVS.Type_ANALOG = 2;
    EVS.Type_I2C = 9;
    EVS.Type_NXT_LIGHT_REFLECTED = 3;
    EVS.Type_NXT_LIGHT = 4;
    EVS.Type_NXT_COLOR = 13;
    EVS.Type_NXT_COLOR_RGBRAW = 4;
    EVS.Type_NXT_COLORRED = 14;
    EVS.Type_NXT_COLORGREEN = 15;
    EVS.Type_NXT_COLORBLUE = 16;
    EVS.Type_NXT_COLORNONE = 17;
    EVS.Type_DATABIT0_HIGH = 64;
    EVS.S1_MODE = 111;
    EVS.S1_ANALOG = 112;
    EVS.S1_OFFSET = 0;
    EVS.S2_MODE = 163;
    EVS.S2_ANALOG = 164;
    EVS.S2_OFFSET = 52;
    EVS.Type_EV3_LIGHT_REFLECTED = 0;
    EVS.Type_EV3_LIGHT = 1;
    EVS.Type_EV3_COLOR = 2;
    EVS.Type_EV3_COLOR_REFRAW = 3;
    EVS.Type_EV3_COLOR_RGBRAW = 4;
    EVS.Type_EV3_TOUCH = 18;
    EVS.Type_EV3 = 19;
    EVS.Light = 131;
    EVS.Bump = 132;
    EVS.ColorMeasure = 131;
    EVS.Proximity = 131;
    EVS.Touch = 131;
    EVS.Ultrasonic = 129;
    EVS.Mode = 129;
    EVS.Light_Bytes = 2;
    EVS.Analog_Bytes = 2;
    EVS.Bump_Bytes = 1;
    EVS.ColorMeasure_Bytes = 2;
    EVS.Proximity_Bytes = 2;
    EVS.Touch_Bytes = 1;
    EVS.Motor_1 = 1;
    EVS.Motor_2 = 2;
    EVS.Motor_Both = 3;
    EVS.Motor_Next_Action_Float = 0;
    EVS.Motor_Next_Action_Brake = 1;
    EVS.Motor_Next_Action_BrakeHold = 2;
    EVS.Motor_Stop = 96;
    EVS.Motor_Reset = 82;
    EVS.Motor_Reverse = 0;
    EVS.Motor_Forward = 1;
    EVS.Motor_Move_Absolute = 0;
    EVS.Motor_Move_Relative = 1;
    EVS.Motor_Completion_Dont_Wait = 0;
    EVS.Motor_Completion_Wait_For = 1;
    EVS.Speed_Full = 90;
    EVS.Speed_Medium = 60;
    EVS.Speed_Slow = 25;
    EVS.CONTROL_SPEED = 1;
    EVS.CONTROL_RAMP = 2;
    EVS.CONTROL_RELATIVE = 4;
    EVS.CONTROL_TACHO = 8;
    EVS.CONTROL_BRK = 16;
    EVS.CONTROL_ON = 32;
    EVS.CONTROL_TIME = 64;
    EVS.CONTROL_GO = 128;
    EVS.STATUS_SPEED = 1;
    EVS.STATUS_RAMP = 2;
    EVS.STATUS_MOVING = 4;
    EVS.STATUS_TACHO = 8;
    EVS.STATUS_BREAK = 16;
    EVS.STATUS_OVERLOAD = 32;
    EVS.STATUS_TIME = 64;
    EVS.STATUS_STALL = 128;
    EVS.COMMAND = 65;
    EVS.VOLTAGE = 110;
    EVS.SETPT_M1 = 66;
    EVS.SPEED_M1 = 70;
    EVS.TIME_M1 = 71;
    EVS.CMD_B_M1 = 72;
    EVS.CMD_A_M1 = 73;
    EVS.SETPT_M2 = 74;
    EVS.SPEED_M2 = 78;
    EVS.TIME_M2 = 79;
    EVS.CMD_B_M2 = 80;
    EVS.CMD_A_M2 = 81;
    EVS.POSITION_M1 = 82;
    EVS.POSITION_M2 = 86;
    EVS.STATUS_M1 = 90;
    EVS.STATUS_M2 = 91;
    EVS.TASKS_M1 = 92;
    EVS.TASKS_M2 = 93;
    EVS.ENCODER_PID = 94;
    EVS.SPEED_PID = 100;
    EVS.PASS_COUNT = 106;
    EVS.TOLERANCE = 107;
    EVS.BTN_PRESS = 218;
    EVS.RGB_LED = 215;
    EVS.CENTER_RGB_LED = 222;
    module2.exports = EVS;
  }
});

// node_modules/johnny-five/lib/button.js
var require_button = __commonJS({
  "node_modules/johnny-five/lib/button.js"(exports, module2) {
    var Board = require_board();
    var Collection = require_collection();
    var Emitter = require_emitter();
    var EVS = require_evshield();
    var Fn = require_fn();
    var priv = new Map();
    var Pins = Board.Pins;
    var aliases = {
      down: ["down", "press"],
      up: ["up", "release"]
    };
    var Controllers = {
      DEFAULT: {
        initialize: {
          value(options, callback) {
            const state = priv.get(this);
            if (Pins.isFirmata(this) && (typeof options.pinValue === "string" && (options.pinValue.length > 1 && options.pinValue[0] === "A"))) {
              options.pinValue = this.io.analogPins[+options.pinValue.slice(1)];
            }
            this.pin = Number.isNaN(+options.pinValue) ? options.pinValue : +options.pinValue;
            this.io.pinMode(this.pin, this.io.MODES.INPUT);
            if (this.pullup) {
              this.io.digitalWrite(this.pin, this.io.HIGH);
            }
            if (this.pulldown) {
              this.io.digitalWrite(this.pin, this.io.LOW);
            }
            this.io.digitalRead(this.pin, (data) => {
              if (data !== state.last) {
                callback(data);
              }
            });
          }
        },
        toBoolean: {
          writable: true,
          value(raw) {
            return raw === this.downValue;
          }
        }
      },
      TINKERKIT: {
        initialize: {
          value(options, callback) {
            const state = priv.get(this);
            let value = 0;
            this.io.pinMode(this.pin, this.io.MODES.ANALOG);
            this.io.analogRead(this.pin, (data) => {
              data = data > 512 ? 1 : 0;
              if (data !== value && data !== state.last) {
                callback(data);
              }
              value = data;
            });
          }
        },
        toBoolean: {
          writable: true,
          value(raw) {
            return raw === this.downValue;
          }
        }
      },
      EVS_EV3: {
        initialize: {
          value(options, callback) {
            const state = priv.get(this);
            state.previous = 0;
            state.shield = EVS.shieldPort(options.pin);
            state.register = EVS.Touch;
            state.ev3 = new EVS(Object.assign(options, {
              io: this.io
            }));
            state.ev3.setup(state.shield, EVS.Type_EV3_TOUCH);
            state.ev3.read(state.shield, EVS.Touch, EVS.Touch_Bytes, (data) => {
              const value = data[0];
              if (state.previous !== value) {
                callback(value);
              }
              state.previous = value;
            });
          }
        },
        toBoolean: {
          writable: true,
          value(raw) {
            return raw === this.downValue;
          }
        }
      },
      EVS_NXT: {
        initialize: {
          value(options, callback) {
            const state = priv.get(this);
            state.previous = 0;
            state.shield = EVS.shieldPort(options.pin);
            state.ev3 = new EVS(Object.assign(options, {
              io: this.io
            }));
            state.ev3.setup(state.shield, EVS.Type_ANALOG);
            state.ev3.read(state.shield, state.shield.analog, EVS.Analog_Bytes, (data) => {
              let value = data[0] | data[1] << 8;
              value = value < 300 ? 1 : 0;
              if (state.previous !== value) {
                callback(value);
              }
              state.previous = value;
            });
          }
        },
        toBoolean: {
          writable: true,
          value(raw) {
            return raw === this.downValue;
          }
        }
      }
    };
    var Button = class extends Emitter {
      constructor(options) {
        super();
        let raw;
        let invert = false;
        let downValue = 1;
        let upValue = 0;
        const state = {
          interval: null,
          last: null
        };
        const trigger = Fn.debounce((key) => {
          aliases[key].forEach((type) => this.emit(type));
        }, 7);
        let pinValue = typeof options === "object" ? options.pin : options;
        Board.Component.call(this, options = Board.Options(options));
        Board.Controller.call(this, Controllers, options);
        options.pinValue = pinValue;
        this.holdtime = options.holdtime || 500;
        this.pullup = options.pullup || options.isPullup || false;
        this.pulldown = options.pulldown || options.isPulldown || false;
        invert = typeof options.invert !== "undefined" ? options.invert : this.pullup || false;
        if (invert) {
          downValue = downValue ^ 1;
          upValue = upValue ^ 1;
        }
        state.last = upValue;
        priv.set(this, state);
        Object.defineProperties(this, {
          value: {
            get() {
              return Number(this.isDown);
            }
          },
          invert: {
            get() {
              return invert;
            },
            set(value) {
              invert = value;
              downValue = invert ? 0 : 1;
              upValue = invert ? 1 : 0;
              state.last = upValue;
            }
          },
          downValue: {
            get() {
              return downValue;
            },
            set(value) {
              downValue = value;
              upValue = value ^ 1;
              invert = value ? true : false;
              state.last = upValue;
            }
          },
          upValue: {
            get() {
              return upValue;
            },
            set(value) {
              upValue = value;
              downValue = value ^ 1;
              invert = value ? true : false;
              state.last = downValue;
            }
          },
          isDown: {
            get() {
              return this.toBoolean(raw);
            }
          }
        });
        if (typeof this.initialize === "function") {
          this.initialize(options, (data) => {
            raw = data;
            if (!this.isDown) {
              if (state.interval) {
                clearInterval(state.interval);
              }
              trigger("up");
            }
            if (this.isDown) {
              trigger("down");
              state.interval = setInterval(() => {
                if (this.isDown) {
                  this.emit("hold");
                }
              }, this.holdtime);
            }
            state.last = data;
          });
        }
      }
    };
    var Buttons = class extends Collection.Emitter {
      constructor(numsOrObjects) {
        super(numsOrObjects);
      }
      get type() {
        return Button;
      }
    };
    Collection.installMethodForwarding(Buttons.prototype, Button.prototype);
    Button.Collection = Buttons;
    if (!!process.env.IS_TEST_MODE) {
      Button.Controllers = Controllers;
      Button.purge = function() {
        priv.clear();
      };
    }
    module2.exports = Button;
  }
});

// node_modules/johnny-five/lib/color.js
var require_color = __commonJS({
  "node_modules/johnny-five/lib/color.js"(exports, module2) {
    var Board = require_board();
    var EVS = require_evshield();
    var Emitter = require_emitter();
    var Fn = require_fn();
    var priv = new Map();
    var Controllers = {
      EVS_EV3: {
        initialize: {
          value(options, callback) {
            const state = priv.get(this);
            if (options.mode) {
              options.mode = options.mode.toUpperCase();
            }
            state.mode = options.mode === "RAW" ? EVS.Type_EV3_COLOR_RGBRAW : EVS.Type_EV3_COLOR;
            state.bytes = state.mode === EVS.Type_EV3_COLOR_RGBRAW ? 6 : 2;
            state.colors = [
              [],
              [0, 0, 0],
              [0, 0, 255],
              [0, 128, 0],
              [255, 255, 0],
              [255, 0, 0],
              [255, 255, 255],
              [139, 69, 19]
            ];
            state.shield = EVS.shieldPort(options.pin);
            state.ev3 = new EVS(Object.assign(options, {
              io: this.io
            }));
            state.ev3.setup(state.shield, EVS.Type_EV3);
            state.ev3.write(state.shield, 129 + state.shield.offset, state.mode);
            state.ev3.read(state.shield, EVS.ColorMeasure, state.bytes, (data) => {
              let value = "";
              if (state.bytes === 2) {
                value += String(data[0] | data[1] << 8 || 1);
              } else {
                for (let i = 0; i < 3; i++) {
                  value += data[i * 2].toString(16).padStart(2, "0");
                }
              }
              callback(value);
            });
          }
        },
        toRGB: {
          value(raw) {
            const state = priv.get(this);
            if (state.mode === EVS.Type_EV3_COLOR) {
              return raw > 0 && raw < 8 ? state.colors[raw] : state.colors[0];
            } else {
              raw = String(raw);
              return [0, 0, 0].map((zero, index) => parseInt(raw.slice(index * 2, index * 2 + 2), 16));
            }
          }
        }
      },
      EVS_NXT: {
        initialize: {
          value(options, callback) {
            const state = priv.get(this);
            if (options.mode) {
              options.mode = options.mode.toUpperCase();
            }
            state.mode = options.mode === "RAW" ? EVS.Type_NXT_COLOR_RGBRAW : EVS.Type_NXT_COLOR;
            state.bytes = state.mode === EVS.Type_NXT_COLOR_RGBRAW ? 10 : 1;
            if (state.mode === EVS.Type_NXT_COLOR_RGBRAW) {
              throw new Error("Raw RGB is not currently supported for the NXT.");
            }
            state.colors = [
              [],
              [0, 0, 0],
              [0, 0, 255],
              [0, 128, 0],
              [255, 255, 0],
              [255, 0, 0],
              [255, 255, 255]
            ];
            state.shield = EVS.shieldPort(options.pin);
            state.ev3 = new EVS(Object.assign(options, {
              io: this.io
            }));
            state.ev3.setup(state.shield, EVS.Type_NXT_COLOR);
            state.ev3.read(state.shield, 112 + state.shield.offset, state.bytes, (data) => {
              let value = "";
              if (state.bytes === 1) {
                value += String(data[0]);
              } else {
              }
              callback(value);
            });
          }
        },
        toRGB: {
          value(raw) {
            const state = priv.get(this);
            if (state.mode === EVS.Type_NXT_COLOR) {
              return raw > 0 && raw < 7 ? state.colors[raw] : state.colors[0];
            } else {
              raw = String(raw);
              return [0, 0, 0].map((zero, index) => parseInt(raw.slice(index * 2, index * 2 + 2), 16));
            }
          }
        }
      },
      ISL29125: {
        ADDRESSES: {
          value: [68]
        },
        REGISTER: {
          value: {
            RESET: 0,
            CONFIG1: 1,
            CONFIG2: 2,
            CONFIG3: 3,
            READ: 9
          }
        },
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            const address = Drivers.addressResolver(this, options);
            this.io.i2cConfig(options);
            this.io.i2cWriteReg(address, this.REGISTER.RESET, 70);
            this.io.i2cWriteReg(address, this.REGISTER.CONFIG1, 5 | 8 | 0);
            this.io.i2cWriteReg(address, this.REGISTER.CONFIG2, 63);
            this.io.i2cWriteReg(address, this.REGISTER.CONFIG3, 0);
            this.io.i2cRead(address, this.REGISTER.READ, 6, (data) => {
              let value = "";
              const g = data[1] << 8 | data[0];
              const r = data[3] << 8 | data[2];
              const b = data[5] << 8 | data[4];
              const rgb = [r >> 2, g >> 2, b >> 2].map((value2) => Fn.constrain(value2, 0, 255));
              for (let i = 0; i < 3; i++) {
                value += rgb[i].toString(16).padStart(2, "0");
              }
              callback(value);
            });
          }
        },
        toRGB: {
          value(raw) {
            raw = String(raw);
            return [0, 0, 0].map((zero, index) => parseInt(raw.slice(index * 2, index * 2 + 2), 16));
          }
        }
      }
    };
    var colorNames = ["red", "green", "blue"];
    var Color = class extends Emitter {
      constructor(options) {
        super();
        Board.Component.call(this, options = Board.Options(options));
        Board.Controller.call(this, Controllers, options);
        const state = {};
        const freq = options.freq || 25;
        let raw = 0;
        let last = null;
        priv.set(this, state);
        if (!this.toRGB) {
          this.toRGB = options.toRGB || ((x) => x);
        }
        Object.defineProperties(this, {
          value: {
            get() {
              return raw;
            }
          },
          rgb: {
            get() {
              return this.toRGB(raw).reduce((accum, value, index) => {
                accum[colorNames[index]] = value;
                return accum;
              }, {});
            }
          }
        });
        if (typeof this.initialize === "function") {
          this.initialize(options, (data) => {
            raw = data;
          });
        }
        setInterval(() => {
          if (raw === void 0) {
            return;
          }
          const data = {
            rgb: this.rgb
          };
          this.emit("data", data);
          if (raw !== last) {
            last = raw;
            this.emit("change", data);
          }
        }, freq);
      }
      static hexCode(rgb) {
        if (rgb.red === void 0 || rgb.green === void 0 || rgb.blue === void 0) {
          return null;
        }
        return rgb.length === 0 ? "unknown" : colorNames.reduce((accum, name) => accum += rgb[name].toString(16).padStart(2, "0"), "");
      }
    };
    if (!!process.env.IS_TEST_MODE) {
      Color.Controllers = Controllers;
      Color.purge = () => {
        priv.clear();
      };
    }
    module2.exports = Color;
  }
});

// node_modules/johnny-five/lib/esc.js
var require_esc = __commonJS({
  "node_modules/johnny-five/lib/esc.js"(exports, module2) {
    var Board = require_board();
    var Expander = require_expander();
    var Pins = Board.Pins;
    var Collection = require_collection();
    var { scale, fscale, constrain } = require_fn();
    var priv = new Map();
    var Controllers = {
      PCA9685: {
        initialize: {
          value: function(options) {
            const state = priv.get(this);
            this.address = options.address || 64;
            this.pwmRange = options.pwmRange || [1e3, 2e3];
            this.frequency = options.frequency || 50;
            state.expander = Expander.get({
              address: this.address,
              controller: this.controller,
              bus: this.bus,
              pwmRange: this.pwmRange,
              frequency: this.frequency
            });
            this.pin = state.expander.normalize(options.pin);
          }
        },
        update: {
          writable: true,
          value: function(us) {
            const state = priv.get(this);
            state.expander.servoWrite(this.pin, us);
          }
        }
      },
      DEFAULT: {
        initialize: {
          value: function(options) {
            if (options.debug && !this.board.pins.isServo(this.pin)) {
              Board.Pins.Error({
                pin: this.pin,
                type: "PWM",
                via: "Servo"
              });
            }
            this.io.servoConfig(this.pin, this.pwmRange[0], this.pwmRange[1]);
          }
        },
        update: {
          writable: true,
          value: function(us) {
            this.io.servoWrite(this.pin, us);
          }
        }
      }
    };
    var FORWARD = "FORWARD";
    var FORWARD_REVERSE = "FORWARD_REVERSE";
    var FORWARD_BRAKE_REVERSE = "FORWARD_BRAKE_REVERSE";
    var Devices = {
      [FORWARD]: {
        device: {
          value: FORWARD
        }
      },
      [FORWARD_REVERSE]: {
        device: {
          value: FORWARD_REVERSE
        }
      },
      [FORWARD_BRAKE_REVERSE]: {
        device: {
          value: FORWARD_BRAKE_REVERSE
        }
      }
    };
    var ESC = class {
      constructor(options) {
        if (!(this instanceof ESC)) {
          return new ESC(options);
        }
        Board.Component.call(this, options = Board.Options(options));
        let pinValue;
        if (typeof options.controller === "undefined" && Pins.isFirmata(this)) {
          if (typeof pinValue === "string" && (pinValue.length > 1 && pinValue[0] === "A")) {
            pinValue = this.io.analogPins[+pinValue.slice(1)];
          }
          pinValue = +pinValue;
          if (!Number.isNaN(pinValue) && this.pin !== pinValue) {
            this.pin = pinValue;
          }
        }
        Board.Controller.call(this, Controllers, options);
        Object.defineProperties(this, options.device && Devices[options.device] || Devices.FORWARD);
        this.pwmRange = options.pwmRange || [1e3, 2e3];
        this.neutral = options.neutral;
        priv.set(this, {});
        this.initialize(options);
        const [low, high] = this.pwmRange;
        if (typeof this.neutral !== "undefined" && this.neutral <= 100) {
          this.neutral = scale(this.neutral, 0, 100, low, high);
        }
        if (typeof this.neutral === "undefined") {
          this.neutral = (low + high) / 2;
        }
        this.neutral = constrain(this.neutral, low, high);
        if (this.device === FORWARD_REVERSE && this.neutral === low) {
          throw new Error("Bidirectional (FORWARD_REVERSE) speed controllers require a non-zero neutral point");
        }
        if (this.device === FORWARD) {
          this.neutral = low;
        }
        this.throttle(this.neutral);
      }
      throttle(value) {
        if (value > 0 && value <= 100) {
          if (this.device !== "FORWARD") {
            throw new Error("Bidirectional (FORWARD_REVERSE, FORWARD_*_REVERSE) speed controllers require a pulse in usec");
          }
          value = fscale(value, 0, 100, this.pwmRange[0], this.pwmRange[1]);
        }
        this.update(constrain(value, this.pwmRange[0], this.pwmRange[1]));
        return this;
      }
      brake() {
        this.update(this.neutral);
        return this;
      }
    };
    var ESCs = class extends Collection {
      constructor(numsOrObjects) {
        super(numsOrObjects);
      }
      get type() {
        return ESC;
      }
    };
    Collection.installMethodForwarding(ESCs.prototype, ESC.prototype);
    ESC.Collection = ESCs;
    if (!!process.env.IS_TEST_MODE) {
      ESC.Controllers = Controllers;
      ESC.purge = function() {
        priv.clear();
      };
    }
    module2.exports = ESC;
  }
});

// node_modules/johnny-five/lib/pin.js
var require_pin = __commonJS({
  "node_modules/johnny-five/lib/pin.js"(exports, module2) {
    var Board = require_board();
    var Emitter = require_emitter();
    var Collection = require_collection();
    var priv = new Map();
    var modes = {
      INPUT: 0,
      OUTPUT: 1,
      ANALOG: 2,
      PWM: 3,
      SERVO: 4
    };
    var LOW = "low";
    var HIGH = "high";
    var ANALOG = "analog";
    var DIGITAL = "digital";
    var Pin = class extends Emitter {
      constructor(options) {
        super();
        if (options === void 0 || typeof options === "object" && options.addr === void 0 && options.pin === void 0) {
          throw new Error("Pins must have a pin number");
        }
        const pinValue = typeof options === "object" ? options.addr || options.pin || 0 : options;
        let isAnalogInput = Pin.isAnalog(options);
        let isDTOA = false;
        Board.Component.call(this, options = Board.Options(options));
        options.addr = options.addr || options.pin;
        if (this.io.analogPins.includes(pinValue)) {
          isAnalogInput = false;
          isDTOA = true;
        }
        const isPin = typeof options !== "object";
        const addr = isDTOA ? pinValue : isPin ? options : options.addr;
        const type = options.type || (isAnalogInput ? ANALOG : DIGITAL);
        const state = {
          mode: null,
          last: null,
          value: 0
        };
        priv.set(this, state);
        Object.defineProperties(this, {
          type: {
            get() {
              return type;
            }
          },
          addr: {
            get() {
              return addr;
            }
          },
          value: {
            get() {
              return state.value;
            }
          },
          mode: {
            set(mode) {
              priv.get(this).mode = mode;
              this.io.pinMode(this.addr, mode);
            },
            get() {
              return priv.get(this).mode;
            }
          }
        });
        this.mode = typeof options.as !== "undefined" ? options.as : typeof options.mode !== "undefined" ? options.mode : isAnalogInput ? 2 : 1;
        this.freq = typeof options.freq !== "undefined" ? options.freq : 20;
        if (this.mode === 0 || this.mode === 2) {
          read(this);
        }
        if (type === DIGITAL) {
          Object.defineProperties(this, {
            isHigh: {
              get() {
                return !!state.value;
              }
            },
            isLow: {
              get() {
                return !state.value;
              }
            }
          });
        }
      }
      query(callback) {
        let index = this.addr;
        if (this.type === ANALOG) {
          index = this.io.analogPins[this.addr];
        }
        this.io.queryPinState(index, () => callback(this.io.pins[index]));
        return this;
      }
      high() {
        const value = this.type === ANALOG ? this.board.RESOLUTION.PWM : 1;
        Pin.write(this, value);
        this.emit(HIGH);
        return this;
      }
      low() {
        Pin.write(this, 0);
        this.emit(LOW);
        return this;
      }
    };
    function read(pin) {
      const state = priv.get(pin);
      pin.io[`${pin.type}Read`](pin.addr, (data) => state.value = data);
      setInterval(() => {
        let isNot;
        let emit;
        isNot = state.value ? LOW : HIGH;
        emit = state.value ? HIGH : LOW;
        if (state.mode === modes.INPUT) {
          if (state.last === null) {
            state.last = isNot;
          }
          if (state.last === isNot) {
            state.last = emit;
            pin.emit(emit, state.value);
            pin.emit("change", state.value);
          }
        }
        pin.emit("data", state.value);
      }, pin.freq);
    }
    Object.entries(modes).forEach(([mode, value]) => {
      Object.defineProperty(Pin, mode, { value });
    });
    Pin.isAnalog = (options) => {
      if (typeof options === "string" && Pin.isPrefixed(options, ["I", "A"])) {
        return true;
      }
      if (typeof options === "object") {
        return Pin.isAnalog(typeof options.addr !== "undefined" ? options.addr : options.pin);
      }
    };
    Pin.isPrefixed = (value, prefixes) => {
      value = value[0];
      return prefixes.reduce((resolution, prefix) => {
        if (!resolution) {
          return prefix === value;
        }
        return resolution;
      }, false);
    };
    Pin.write = (pin, val) => {
      const state = priv.get(pin);
      state.value = val;
      pin.mode = modes.OUTPUT;
      pin.io[`${pin.type}Write`](pin.addr, val);
      pin.emit("write", null, val);
    };
    Pin.read = (pin, callback) => {
      let isChanging = false;
      if (pin.type === DIGITAL && pin.mode !== 0) {
        isChanging = true;
        pin.mode = modes.INPUT;
      }
      if (pin.type === ANALOG && pin.mode !== 2) {
        isChanging = true;
        pin.mode = modes.ANALOG;
      }
      if (isChanging) {
        read(pin);
      }
      pin.on("data", () => {
        callback.call(pin, null, pin.value);
      });
    };
    ["read", "write"].forEach((operation) => {
      Pin.prototype[operation] = function(valOrCallback) {
        Pin[operation](this, valOrCallback);
        return this;
      };
    });
    var Pins = class extends Collection.Emitter {
      constructor(numsOrObjects) {
        super(numsOrObjects);
      }
      get type() {
        return Pin;
      }
    };
    Collection.installMethodForwarding(Pins.prototype, Pin.prototype);
    Pin.Collection = Pins;
    if (!!process.env.IS_TEST_MODE) {
      Pin.purge = () => {
        priv.clear();
      };
    }
    module2.exports = Pin;
  }
});

// node_modules/johnny-five/lib/gps.js
var require_gps = __commonJS({
  "node_modules/johnny-five/lib/gps.js"(exports, module2) {
    var Board = require_board();
    var Emitter = require_emitter();
    var Pin = require_pin();
    var { toFixed } = require_fn();
    var priv = new Map();
    var Breakouts = {
      ADAFRUIT_ULTIMATE_GPS: {
        receiver: {
          value: "FGPMMOPA6H"
        }
      }
    };
    var Receivers = {
      FGPMMOPA6H: {
        chip: {
          value: "MT3339"
        }
      }
    };
    var Chips = {
      DEFAULT: {
        baud: {
          value: 9600,
          writable: true
        },
        configure: {
          value(callback) {
            process.nextTick(callback);
          }
        }
      },
      MT3339: {
        baud: {
          value: 9600,
          writable: true
        },
        configure: {
          value(callback) {
            process.nextTick(callback);
          }
        },
        frequency: {
          get() {
            const state = priv.get(this);
            return state.frequency;
          },
          set(frequency) {
            const state = priv.get(this);
            if (frequency < 10) {
              frequency = 10;
            }
            state.frequency = frequency;
            this.sendCommand(`$PMTK220,${String(1e3 / state.frequency)}`);
          }
        },
        restart: {
          value(coldRestart) {
            if (coldRestart === true) {
              this.sendCommand("$PMTK103");
            } else {
              this.sendCommand("$PMTK101");
              setTimeout(() => {
                this.sendCommand("");
              }, 1e3);
            }
          }
        }
      }
    };
    var GPS = class extends Emitter {
      constructor(options) {
        super();
        if (Array.isArray(options)) {
          options = {
            pins: {
              rx: options[0],
              tx: options[1],
              onOff: options[2]
            }
          };
        }
        if (typeof options.pins === "undefined") {
          options.pins = {};
        }
        Board.Component.call(this, options = Board.Options(options));
        let breakout = options.breakout || {};
        let receiver = options.receiver;
        let chip = options.chip;
        if (Breakouts[breakout]) {
          if (!receiver && Breakouts[breakout].receiver) {
            receiver = Breakouts[breakout].receiver.value;
          }
          if (!chip && Breakouts[breakout].chip) {
            chip = Breakouts[breakout].chip.value;
          }
        }
        if (!chip) {
          if (receiver && Receivers[receiver].chip) {
            chip = Receivers[receiver].chip.value;
          } else {
            chip = "DEFAULT";
          }
        }
        breakout = typeof breakout === "string" ? Chips[breakout] : options.breakout;
        chip = typeof chip === "string" ? Chips[chip] : options.chip;
        receiver = typeof receiver === "string" ? Receivers[receiver] : options.receiver;
        if (chip) {
          Object.defineProperties(this, chip);
        }
        if (receiver) {
          Object.defineProperties(this, receiver);
        }
        if (breakout) {
          Object.defineProperties(this, breakout);
        }
        this.fixed = options.fixed || 6;
        this.baud = options.baud || this.baud;
        let state = {
          sat: {},
          latitude: 0,
          longitude: 0,
          altitude: 0,
          speed: 0,
          course: 0,
          frequency: 1,
          lowPowerMode: false
        };
        priv.set(this, state);
        Object.defineProperties(this, {
          latitude: {
            get() {
              return state.latitude;
            }
          },
          longitude: {
            get() {
              return state.longitude;
            }
          },
          altitude: {
            get() {
              return state.altitude;
            }
          },
          sat: {
            get() {
              return state.sat;
            }
          },
          speed: {
            get() {
              return state.speed;
            }
          },
          course: {
            get() {
              return state.course;
            }
          },
          time: {
            get() {
              return state.time;
            }
          }
        });
        if (this.initialize) {
          this.initialize(options);
        }
      }
      initialize(options) {
        const state = priv.get(this);
        state.portId = options.serialPort || options.portId || options.port || options.bus;
        if (typeof state.portId === "undefined" && this.io.SERIAL_PORT_IDs) {
          state.portId = this.io.SERIAL_PORT_IDs.DEFAULT;
        }
        ["tx", "rx"].forEach((pin) => {
          if (this.pins[pin]) {
            this.io.pinMode(this.pins[pin], this.io.MODES.SERIAL);
          }
        });
        if (this.pins.onOff) {
          this.io.pinMode(this.pins.onOff, this.io.MODES.OUTPUT);
          this.onOff = new Pin(this.pins.onOff);
        }
        this.io.serialConfig({
          portId: state.portId,
          baud: this.baud,
          rxPin: this.pins.rx,
          txPin: this.pins.tx
        });
        if (this.configure) {
          this.configure(() => {
            this.listen();
            if (options.frequency) {
              this.frequency = options.frequency;
            }
          });
        }
      }
      sendCommand(string) {
        const state = priv.get(this);
        const cc = [];
        for (let i = 0; i < string.length; ++i) {
          cc[i] = string.charCodeAt(i);
        }
        const hexsum = getNmeaChecksum(string.substring(1));
        cc.push(42, hexsum.charCodeAt(0), hexsum.charCodeAt(1), 13, 10);
        this.io.serialWrite(state.portId, cc);
      }
      listen() {
        const state = priv.get(this);
        let input = "";
        this.io.serialRead(state.portId, (data) => {
          input += new Buffer(data).toString("ascii");
          const sentences = input.split("\r\n");
          if (sentences.length > 1) {
            for (let i = 0; i < sentences.length - 1; i++) {
              this.parseNmeaSentence(sentences[i]);
            }
            input = sentences[sentences.length - 1];
          }
        });
      }
      parseNmeaSentence(sentence) {
        const state = priv.get(this);
        const cksum = sentence.split("*");
        if (cksum[1] !== getNmeaChecksum(cksum[0].substring(1))) {
          return;
        }
        this.emit("sentence", sentence);
        const segments = cksum[0].split(",");
        const last = {
          latitude: state.latitude,
          longitude: state.longitude,
          altitude: state.altitude,
          speed: state.speed,
          course: state.course
        };
        switch (segments[0]) {
          case "$GPGGA":
            state.time = segments[1];
            state.latitude = degToDec(segments[2], 2, segments[3], this.fixed);
            state.longitude = degToDec(segments[4], 3, segments[5], this.fixed);
            state.altitude = Number(segments[9]);
            break;
          case "$GPGSA":
            state.sat.satellites = segments.slice(3, 15);
            state.sat.pdop = Number(segments[15]);
            state.sat.hdop = Number(segments[16]);
            state.sat.vdop = Number(segments[17]);
            this.emit("operations", sentence);
            break;
          case "$GPRMC":
            state.time = segments[1];
            state.latitude = degToDec(segments[3], 2, segments[4], this.fixed);
            state.longitude = degToDec(segments[5], 3, segments[6], this.fixed);
            state.course = Number(segments[8]);
            state.speed = toFixed(segments[7] * 0.514444, this.fixed);
            break;
          case "$GPVTG":
            state.course = Number(segments[1]);
            state.speed = toFixed(segments[5] * 0.514444, this.fixed);
            break;
          case "$GPGSV":
            break;
          case "$PGACK":
            this.emit("acknowledge", sentence);
            break;
          default:
            this.emit("unknown", sentence);
            break;
        }
        this.emit("data", {
          latitude: state.latitude,
          longitude: state.longitude,
          altitude: state.altitude,
          speed: state.speed,
          course: state.course,
          sat: state.sat,
          time: state.time
        });
        if (last.latitude !== state.latitude || last.longitude !== state.longitude || last.altitude !== state.altitude) {
          this.emit("change", {
            latitude: state.latitude,
            longitude: state.longitude,
            altitude: state.altitude
          });
        }
        if (last.speed !== state.speed || last.course !== state.course) {
          this.emit("navigation", {
            speed: state.speed,
            course: state.course
          });
        }
      }
    };
    function degToDec(degrees, intDigitsLength, cardinal, fixed) {
      if (degrees) {
        let decimal = Number(degrees.substring(0, intDigitsLength)) + Number(degrees.substring(intDigitsLength)) / 60;
        if (cardinal === "S" || cardinal === "W") {
          decimal *= -1;
        }
        return Number(decimal.toFixed(fixed));
      } else {
        return 0;
      }
    }
    function getNmeaChecksum(string) {
      let cksum = 0;
      for (let i = 0; i < string.length; ++i) {
        cksum ^= string.charCodeAt(i);
      }
      cksum = cksum.toString(16).toUpperCase();
      if (cksum.length < 2) {
        cksum = `00${cksum}`.slice(-2);
      }
      return cksum;
    }
    if (!!process.env.IS_TEST_MODE) {
      GPS.Breakouts = Breakouts;
      GPS.Chips = Chips;
      GPS.Receivers = Receivers;
      GPS.purge = () => {
        priv.clear();
      };
    }
    module2.exports = GPS;
  }
});

// node_modules/johnny-five/lib/definitions/mpr121.js
var require_mpr121 = __commonJS({
  "node_modules/johnny-five/lib/definitions/mpr121.js"(exports, module2) {
    module2.exports = {
      MAPS: {
        MPR121QR2_SHIELD: {
          KEYS: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9
          },
          TARGETS: {
            256: 0,
            32: 1,
            4: 2,
            128: 3,
            16: 4,
            2: 5,
            64: 6,
            8: 7,
            1: 8
          }
        },
        MPR121: {
          KEYS: {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            10: 10,
            11: 11
          },
          TARGETS: {
            1: 0,
            2: 1,
            4: 2,
            8: 3,
            16: 4,
            32: 5,
            64: 6,
            128: 7,
            256: 8,
            512: 9,
            1024: 10,
            2048: 11
          }
        },
        MPR121_KEYPAD: {
          KEYS: {
            0: 1,
            1: 2,
            2: 3,
            3: 4,
            4: 5,
            5: 6,
            6: 7,
            7: 8,
            8: 9,
            9: 10,
            10: 11,
            11: 12
          },
          TARGETS: {
            8: 0,
            128: 1,
            2048: 2,
            4: 3,
            64: 4,
            1024: 5,
            2: 6,
            32: 7,
            512: 8,
            1: 9,
            16: 10,
            256: 11
          }
        },
        MPR121_SHIELD: {
          KEYS: {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            10: 10,
            11: 11
          },
          TARGETS: {
            1: 0,
            2: 1,
            4: 2,
            8: 3,
            16: 4,
            32: 5,
            64: 6,
            128: 7,
            256: 8,
            512: 9,
            1024: 10,
            2048: 11
          }
        }
      },
      MPR121_DEFAULT_ADDRESS: 90,
      MPR121_SOFTRESET: 128,
      ELE0_ELE7_TOUCH_STATUS: 0,
      ELE8_ELE11_ELEPROX_TOUCH_STATUS: 1,
      ELE0_7_OOR_STATUS: 2,
      ELE8_11_ELEPROX_OOR_STATUS: 3,
      ELE0_FILTERED_DATA_LSB: 4,
      ELE0_FILTERED_DATA_MSB: 5,
      ELE1_FILTERED_DATA_LSB: 6,
      ELE1_FILTERED_DATA_MSB: 7,
      ELE2_FILTERED_DATA_LSB: 8,
      ELE2_FILTERED_DATA_MSB: 9,
      ELE3_FILTERED_DATA_LSB: 10,
      ELE3_FILTERED_DATA_MSB: 11,
      ELE4_FILTERED_DATA_LSB: 12,
      ELE4_FILTERED_DATA_MSB: 13,
      ELE5_FILTERED_DATA_LSB: 14,
      ELE5_FILTERED_DATA_MSB: 15,
      ELE6_FILTERED_DATA_LSB: 16,
      ELE6_FILTERED_DATA_MSB: 17,
      ELE7_FILTERED_DATA_LSB: 18,
      ELE7_FILTERED_DATA_MSB: 19,
      ELE8_FILTERED_DATA_LSB: 20,
      ELE8_FILTERED_DATA_MSB: 21,
      ELE9_FILTERED_DATA_LSB: 22,
      ELE9_FILTERED_DATA_MSB: 23,
      ELE10_FILTERED_DATA_LSB: 24,
      ELE10_FILTERED_DATA_MSB: 25,
      ELE11_FILTERED_DATA_LSB: 26,
      ELE11_FILTERED_DATA_MSB: 27,
      ELEPROX_FILTERED_DATA_LSB: 28,
      ELEPROX_FILTERED_DATA_MSB: 29,
      ELE0_BASELINE_VALUE: 30,
      ELE1_BASELINE_VALUE: 31,
      ELE2_BASELINE_VALUE: 32,
      ELE3_BASELINE_VALUE: 33,
      ELE4_BASELINE_VALUE: 34,
      ELE5_BASELINE_VALUE: 35,
      ELE6_BASELINE_VALUE: 36,
      ELE7_BASELINE_VALUE: 37,
      ELE8_BASELINE_VALUE: 38,
      ELE9_BASELINE_VALUE: 39,
      ELE10_BASELINE_VALUE: 40,
      ELE11_BASELINE_VALUE: 41,
      ELEPROX_BASELINE_VALUE: 42,
      MHD_RISING: 43,
      NHD_AMOUNT_RISING: 44,
      NCL_RISING: 45,
      FDL_RISING: 46,
      MHD_FALLING: 47,
      NHD_AMOUNT_FALLING: 48,
      NCL_FALLING: 49,
      FDL_FALLING: 50,
      NHD_AMOUNT_TOUCHED: 51,
      NCL_TOUCHED: 52,
      FDL_TOUCHED: 53,
      ELEPROX_MHD_RISING: 54,
      ELEPROX_NHD_AMOUNT_RISING: 55,
      ELEPROX_NCL_RISING: 56,
      ELEPROX_FDL_RISING: 57,
      ELEPROX_MHD_FALLING: 58,
      ELEPROX_NHD_AMOUNT_FALLING: 59,
      ELEPROX_FDL_FALLING: 60,
      ELEPROX_NHD_AMOUNT_TOUCHED: 62,
      ELEPROX_NCL_TOUCHED: 63,
      ELEPROX_FDL_TOUCHED: 64,
      ELE0_TOUCH_THRESHOLD: 65,
      ELE0_RELEASE_THRESHOLD: 66,
      ELE1_TOUCH_THRESHOLD: 67,
      ELE1_RELEASE_THRESHOLD: 68,
      ELE2_TOUCH_THRESHOLD: 69,
      ELE2_RELEASE_THRESHOLD: 70,
      ELE3_TOUCH_THRESHOLD: 71,
      ELE3_RELEASE_THRESHOLD: 72,
      ELE4_TOUCH_THRESHOLD: 73,
      ELE4_RELEASE_THRESHOLD: 74,
      ELE5_TOUCH_THRESHOLD: 75,
      ELE5_RELEASE_THRESHOLD: 76,
      ELE6_TOUCH_THRESHOLD: 77,
      ELE6_RELEASE_THRESHOLD: 78,
      ELE7_TOUCH_THRESHOLD: 79,
      ELE7_RELEASE_THRESHOLD: 80,
      ELE8_TOUCH_THRESHOLD: 81,
      ELE8_RELEASE_THRESHOLD: 82,
      ELE9_TOUCH_THRESHOLD: 83,
      ELE9_RELEASE_THRESHOLD: 84,
      ELE10_TOUCH_THRESHOLD: 85,
      ELE10_RELEASE_THRESHOLD: 86,
      ELE11_TOUCH_THRESHOLD: 87,
      ELE11_RELEASE_THRESHOLD: 88,
      ELEPROX_TOUCH_THRESHOLD: 89,
      ELEPROX_RELEASE_THRESHOLD: 90,
      DEBOUNCE_TOUCH_AND_RELEASE: 91,
      AFE_CONFIGURATION: 92,
      FILTER_CONFIG: 93,
      ELECTRODE_CONFIG: 94,
      ELE0_CURRENT: 95,
      ELE1_CURRENT: 96,
      ELE2_CURRENT: 97,
      ELE3_CURRENT: 98,
      ELE4_CURRENT: 99,
      ELE5_CURRENT: 100,
      ELE6_CURRENT: 101,
      ELE7_CURRENT: 102,
      ELE8_CURRENT: 103,
      ELE9_CURRENT: 104,
      ELE10_CURRENT: 105,
      ELE11_CURRENT: 106,
      ELEPROX_CURRENT: 107,
      ELE0_ELE1_CHARGE_TIME: 108,
      ELE2_ELE3_CHARGE_TIME: 109,
      ELE4_ELE5_CHARGE_TIME: 110,
      ELE6_ELE7_CHARGE_TIME: 111,
      ELE8_ELE9_CHARGE_TIME: 112,
      ELE10_ELE11_CHARGE_TIME: 113,
      ELEPROX_CHARGE_TIME: 114,
      GPIO_CONTROL_0: 115,
      GPIO_CONTROL_1: 116,
      GPIO_DATA: 117,
      GPIO_DIRECTION: 118,
      GPIO_ENABLE: 119,
      GPIO_SET: 120,
      GPIO_CLEAR: 121,
      GPIO_TOGGLE: 122,
      AUTO_CONFIG_CONTROL_0: 123,
      AUTO_CONFIG_CONTROL_1: 124,
      AUTO_CONFIG_USL: 125,
      AUTO_CONFIG_LSL: 126,
      AUTO_CONFIG_TARGET_LEVEL: 127,
      TOUCH_THRESHOLD: 15,
      RELEASE_THRESHOLD: 10,
      NUM_CHANNELS: 12
    };
  }
});

// node_modules/johnny-five/lib/keypad.js
var require_keypad = __commonJS({
  "node_modules/johnny-five/lib/keypad.js"(exports, module2) {
    var Board = require_board();
    var Emitter = require_emitter();
    var Fn = require_fn();
    var { scale, toFixed, uint16 } = Fn;
    var priv = new Map();
    var aliases = {
      down: ["down", "press", "tap", "impact", "hit", "touch"],
      up: ["up", "release"],
      hold: ["hold"]
    };
    function flatten(array) {
      return array.flat ? array.flat() : array.reduce((accum, val) => accum.concat(val), []);
    }
    function flatKeys(options) {
      let keys = [];
      if (options.keys && Array.isArray(options.keys)) {
        keys = options.keys.slice();
        if (keys.every(Array.isArray)) {
          keys = flatten(keys);
        }
      }
      return keys;
    }
    var Controllers = {
      MPR121: {
        ADDRESSES: {
          value: [90, 91, 92, 93]
        },
        REGISTER: {
          value: require_mpr121()
        },
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            const address = Drivers.addressResolver(this, options);
            const state = priv.get(this);
            const keyMap = this.REGISTER.MAPS[options.controller].KEYS;
            const targets = this.REGISTER.MAPS[options.controller].TARGETS;
            const mapping = Object.keys(keyMap).reduce((accum, index) => {
              accum[index] = keyMap[index];
              return accum;
            }, []);
            let keys = flatKeys(options);
            const length = mapping.length;
            this.io.i2cConfig(options);
            this.io.i2cWrite(address, this.REGISTER.MPR121_SOFTRESET, 99);
            this.io.i2cWrite(address, this.REGISTER.MHD_RISING, 1);
            this.io.i2cWrite(address, this.REGISTER.NHD_AMOUNT_RISING, 1);
            this.io.i2cWrite(address, this.REGISTER.NCL_RISING, 0);
            this.io.i2cWrite(address, this.REGISTER.FDL_RISING, 0);
            this.io.i2cWrite(address, this.REGISTER.MHD_FALLING, 1);
            this.io.i2cWrite(address, this.REGISTER.NHD_AMOUNT_FALLING, 1);
            this.io.i2cWrite(address, this.REGISTER.NCL_FALLING, 255);
            this.io.i2cWrite(address, this.REGISTER.FDL_FALLING, 2);
            this.sensitivity = {
              press: Array(12).fill(0.95),
              release: Array(12).fill(0.975)
            };
            if (options.keys && options.controller === "MPR121_SHIELD") {
              keys = keys.reverse();
            }
            if (options.sensitivity) {
              if (Array.isArray(options.sensitivity)) {
                options.sensitivity.forEach(function({ press, release }, index) {
                  if (typeof press !== "undefined") {
                    this.sensitivity.press[index] = press;
                  }
                  if (typeof release !== "undefined") {
                    this.sensitivity.release[index] = release;
                  }
                }, this);
              } else {
                if (typeof options.sensitivity.press !== "undefined") {
                  this.sensitivity.press.fill(options.sensitivity.press);
                }
                if (typeof options.sensitivity.release !== "undefined") {
                  this.sensitivity.release.fill(options.sensitivity.release);
                }
              }
            }
            for (let i = 0; i < 12; i++) {
              this.io.i2cWrite(address, this.REGISTER.ELE0_TOUCH_THRESHOLD + (i << 1), scale(toFixed(1 - this.sensitivity.press[i], 3), 0, 1, 0, 255));
              this.io.i2cWrite(address, this.REGISTER.ELE0_RELEASE_THRESHOLD + (i << 1), scale(toFixed(1 - this.sensitivity.release[i], 3), 0, 1, 0, 255));
            }
            this.io.i2cWrite(address, this.REGISTER.FILTER_CONFIG, 19);
            this.io.i2cWrite(address, this.REGISTER.AFE_CONFIGURATION, 128);
            this.io.i2cWrite(address, this.REGISTER.AUTO_CONFIG_CONTROL_0, 143);
            this.io.i2cWrite(address, this.REGISTER.AUTO_CONFIG_USL, 228);
            this.io.i2cWrite(address, this.REGISTER.AUTO_CONFIG_LSL, 148);
            this.io.i2cWrite(address, this.REGISTER.AUTO_CONFIG_TARGET_LEVEL, 205);
            this.io.i2cWrite(address, this.REGISTER.ELECTRODE_CONFIG, 204);
            if (!keys.length) {
              keys = Array.from(Object.assign({}, keyMap, {
                length
              }));
            }
            state.length = length;
            state.touches = touches(length);
            state.keys = keys;
            state.mapping = mapping;
            state.targets = targets;
            state.isMultitouch = true;
            this.io.i2cRead(address, 0, 2, (bytes) => callback(uint16(bytes[1], bytes[0])));
          }
        },
        toAlias: {
          value(index) {
            const state = priv.get(this);
            return state.keys[index];
          }
        },
        toIndices: {
          value(raw) {
            const state = priv.get(this);
            const indices = [];
            for (let i = 0; i < 12; i++) {
              if (raw & 1 << i) {
                indices.push(state.targets[raw & 1 << i]);
              }
            }
            return indices;
          }
        }
      },
      VKEY: {
        initialize: {
          value(options, callback) {
            const state = priv.get(this);
            const aref = options.aref || this.io.aref || 5;
            const use5V = Fn.inRange(aref, 4.5, 5.5);
            const mapping = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            let keys = flatKeys(options);
            let length = 0;
            if (!keys.length) {
              keys = mapping;
            }
            state.scale = [
              use5V ? 17 : 26,
              use5V ? 40 : 58,
              use5V ? 496 : 721
            ];
            length = mapping.length;
            state.length = length;
            state.touches = touches(length);
            state.mapping = mapping;
            state.keys = keys;
            state.isMultitouch = false;
            this.io.pinMode(this.pin, this.io.MODES.ANALOG);
            this.io.analogRead(this.pin, (adc) => callback(adc));
          }
        },
        toAlias: {
          value(index) {
            const state = priv.get(this);
            return state.keys[index];
          }
        },
        toIndices: {
          value(raw) {
            const state = priv.get(this);
            const length = state.length;
            const low = state.scale[0];
            const step = state.scale[1];
            const high = state.scale[2];
            if (raw < low || raw > high) {
              return [];
            }
            return [length - (raw - low) / step | 0];
          }
        }
      },
      ANALOG: {
        initialize: {
          value(options, callback) {
            let keys = flatKeys(options);
            let mapping = [];
            let length = 0;
            if (options.length && !keys.length) {
              keys = Array.from({
                length: options.length
              }, (_, key) => key);
            }
            if (!keys.length) {
              throw new Error("Missing `keys`. Analog Keypad requires either a numeric `length` or a `keys` array.");
            }
            mapping = keys;
            length = mapping.length;
            const state = priv.get(this);
            const total = length + 1;
            const vrange = Math.round(1023 / total);
            const ranges = Array.from({
              length: total
            }, (_, index) => {
              const start = vrange * index;
              return Array.from({
                length: vrange - 1
              }, (_2, index2) => start + index2);
            });
            state.length = length;
            state.ranges = ranges;
            state.touches = touches(length);
            state.mapping = mapping;
            state.keys = keys;
            state.isMultitouch = true;
            this.io.pinMode(this.pin, this.io.MODES.ANALOG);
            this.io.analogRead(this.pin, (adc) => callback(adc));
          }
        },
        toAlias: {
          value(index) {
            const state = priv.get(this);
            return state.keys[index];
          }
        },
        toIndices: {
          value(raw) {
            const state = priv.get(this);
            const ranges = state.ranges;
            let index = ranges.findIndex((range) => range.includes(raw));
            if (index === state.length) {
              index--;
            }
            if (index < 0) {
              return [];
            }
            return [index];
          }
        }
      },
      AT42QT1070: {
        ADDRESSES: {
          value: [27]
        },
        REGISTER: {
          value: {
            READ: 3
          }
        },
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            const address = Drivers.addressResolver(this, options);
            const state = priv.get(this);
            const mapping = [0, 1, 2, 3, 4, 5, 6];
            let keys = flatKeys(options);
            let length = 0;
            if (!keys.length) {
              keys = mapping;
            }
            length = mapping.length;
            state.length = length;
            state.touches = touches(length);
            state.mapping = mapping;
            state.keys = keys;
            state.isMultitouch = true;
            this.io.i2cConfig(options);
            this.io.i2cRead(address, this.REGISTER.READ, 1, (data) => callback(data[0]));
          }
        },
        toAlias: {
          value(index) {
            const state = priv.get(this);
            return state.keys[index];
          }
        },
        toIndices: {
          value(raw) {
            const indices = [];
            for (let i = 0; i < 7; i++) {
              if (raw & 1 << i) {
                indices.push(i);
              }
            }
            return indices;
          }
        }
      },
      "3X4_I2C_NANO_BACKPACK": {
        ADDRESSES: {
          value: [10, 11, 12, 13]
        },
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            const address = Drivers.addressResolver(this, options);
            const state = priv.get(this);
            const mapping = [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"];
            let keys = flatKeys(options);
            let length = 0;
            if (!keys.length) {
              keys = mapping;
            }
            length = mapping.length;
            state.length = length;
            state.touches = touches(length);
            state.mapping = mapping;
            state.keys = keys;
            state.isMultitouch = true;
            this.io.i2cConfig(options);
            this.io.i2cRead(address, 2, (bytes) => callback(uint16(bytes[0], bytes[1])));
          }
        },
        toAlias: {
          value(index) {
            const state = priv.get(this);
            return state.keys[index];
          }
        },
        toIndices: {
          value(raw) {
            const state = priv.get(this);
            const indices = [];
            for (let i = 0; i < state.length; i++) {
              if (raw & 1 << i) {
                indices.push(i);
              }
            }
            return indices;
          }
        }
      },
      "4X4_I2C_NANO_BACKPACK": {
        ADDRESSES: {
          value: [10, 11, 12, 13]
        },
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            const address = Drivers.addressResolver(this, options);
            const state = priv.get(this);
            let keys = flatKeys(options);
            const mapping = [1, 2, 3, "A", 4, 5, 6, "B", 7, 8, 9, "C", "*", 0, "#", "D"];
            let length = 0;
            if (!keys.length) {
              keys = mapping;
            }
            length = mapping.length;
            state.length = length;
            state.touches = touches(length);
            state.mapping = mapping;
            state.keys = keys;
            state.isMultitouch = true;
            this.io.i2cConfig(options);
            this.io.i2cRead(address, 2, (bytes) => callback(uint16(bytes[0], bytes[1])));
          }
        },
        toAlias: {
          value(index) {
            return priv.get(this).keys[index];
          }
        },
        toIndices: {
          value(raw) {
            const state = priv.get(this);
            const indices = [];
            for (let i = 0; i < state.length; i++) {
              if (raw & 1 << i) {
                indices.push(i);
              }
            }
            return indices;
          }
        }
      },
      SX1509: {
        ADDRESSES: {
          value: [10, 11, 12, 13]
        },
        REGISTER: {
          value: {
            PULLUP: 3,
            OPEN_DRAIN: 5,
            DIR: 7,
            DIR_B: 14,
            DIR_A: 15
          }
        },
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            const address = Drivers.addressResolver(this, options);
            const state = priv.get(this);
            let keys = flatKeys(options);
            const mapping = [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"];
            let length = 0;
            if (!keys.length) {
              keys = mapping;
            }
            length = mapping.length;
            state.length = length;
            state.touches = touches(length);
            state.mapping = mapping;
            state.keys = keys;
            state.isMultitouch = true;
            this.io.i2cConfig(options);
            this.io.i2cWriteReg(address, this.REGISTER.DIR, 240);
            this.io.i2cWriteReg(address, this.REGISTER.OPEN_DRAIN, 15);
            this.io.i2cWriteReg(address, this.REGISTER.PULLUP, 240);
            this.io.i2cRead(address, 2, (bytes) => callback(uint16(bytes[0], bytes[1])));
          }
        },
        toAlias: {
          value(index) {
            const state = priv.get(this);
            return state.keys[index];
          }
        },
        toIndices: {
          value(raw) {
            const state = priv.get(this);
            const indices = [];
            for (let i = 0; i < state.length; i++) {
              if (raw & 1 << i) {
                indices.push(i);
              }
            }
            return indices;
          }
        }
      }
    };
    Controllers.MPR121QR2 = Controllers.MPR121;
    Controllers.MPR121QR2_SHIELD = Controllers.MPR121;
    Controllers.MPR121_KEYPAD = Controllers.MPR121;
    Controllers.MPR121_SHIELD = Controllers.MPR121;
    Controllers.QTOUCH = Controllers.AT42QT1070;
    Controllers.DEFAULT = Controllers.ANALOG;
    function touches(length) {
      return Array.from({ length }, () => ({
        timeout: null,
        value: 0
      }));
    }
    var Keypad = class extends Emitter {
      constructor(options) {
        super();
        Board.Component.call(this, options = Board.Options(options));
        let raw = null;
        const state = {
          touches: null,
          timeout: null,
          length: null,
          keys: null,
          mapping: null,
          holdtime: null
        };
        const trigger = Fn.debounce(function(type, value) {
          const event = {
            type,
            which: value,
            timestamp: Date.now()
          };
          aliases[type].forEach(function(type2) {
            this.emit(type2, event);
          }, this);
          this.emit("change", Object.assign({}, event));
        }, 5);
        Board.Controller.call(this, Controllers, options);
        state.holdtime = options.holdtime ? options.holdtime : 500;
        priv.set(this, state);
        if (typeof this.initialize === "function") {
          this.initialize(options, (data) => {
            raw = data;
            const now = Date.now();
            const indices = this.toIndices(data);
            const kLength = state.length;
            const lists = {
              down: [],
              hold: [],
              up: []
            };
            let target = null;
            let alias = null;
            for (let k = 0; k < kLength; k++) {
              alias = this.toAlias(k);
              if (indices.includes(k)) {
                if (state.touches[k].value === 0) {
                  state.touches[k].timeout = now + state.holdtime;
                  lists.down.push(alias);
                } else if (state.touches[k].value === 1) {
                  if (state.touches[k].timeout !== null && now > state.touches[k].timeout) {
                    state.touches[k].timeout = now + state.holdtime;
                    lists.hold.push(alias);
                  }
                }
                state.touches[k].value = 1;
              } else {
                if (state.touches[k].value === 1) {
                  state.touches[k].timeout = null;
                  lists.up.push(alias);
                }
                state.touches[k].value = 0;
              }
              target = null;
              alias = null;
            }
            Object.keys(lists).forEach(function(key) {
              const list = lists[key];
              if (list.length) {
                trigger.call(this, key, list);
              }
            }, this);
          });
        }
        Object.defineProperties(this, {
          isMultitouch: {
            get() {
              return state.isMultitouch;
            }
          },
          value: {
            get() {
              return raw;
            }
          }
        });
      }
    };
    if (!!process.env.IS_TEST_MODE) {
      Keypad.Controllers = Controllers;
      Keypad.purge = () => {
        priv.clear();
      };
    }
    module2.exports = Keypad;
  }
});

// node_modules/johnny-five/lib/lcd-chars.js
var require_lcd_chars = __commonJS({
  "node_modules/johnny-five/lib/lcd-chars.js"(exports, module2) {
    module2.exports = {
      DEFAULT: {
        0: [14, 27, 27, 27, 27, 27, 14, 0],
        1: [2, 6, 14, 6, 6, 6, 6, 0],
        2: [14, 27, 3, 6, 12, 24, 31, 0],
        3: [14, 27, 3, 14, 3, 27, 14, 0],
        4: [3, 7, 15, 27, 31, 3, 3, 0],
        5: [31, 24, 30, 3, 3, 27, 14, 0],
        6: [14, 27, 24, 30, 27, 27, 14, 0],
        7: [31, 3, 6, 12, 12, 12, 12, 0],
        8: [14, 27, 27, 14, 27, 27, 14, 0],
        9: [14, 27, 27, 15, 3, 27, 14, 0],
        10: [23, 21, 21, 21, 23, 0, 31, 0],
        11: [10, 10, 10, 10, 10, 0, 31, 0],
        12: [23, 17, 23, 20, 23, 0, 31, 0],
        13: [23, 17, 19, 17, 23, 0, 31, 0],
        14: [21, 21, 23, 17, 17, 0, 31, 0],
        15: [23, 20, 23, 17, 23, 0, 31, 0],
        16: [23, 20, 23, 21, 23, 0, 31, 0],
        17: [23, 17, 18, 18, 18, 0, 31, 0],
        18: [23, 21, 23, 21, 23, 0, 31, 0],
        19: [23, 21, 23, 17, 23, 0, 31, 0],
        circle: [0, 14, 17, 17, 17, 14, 0, 0],
        cdot: [0, 14, 17, 21, 17, 14, 0, 0],
        donut: [0, 14, 31, 27, 31, 14, 0, 0],
        ball: [0, 14, 31, 31, 31, 14, 0, 0],
        square: [0, 31, 17, 17, 17, 31, 0, 0],
        sdot: [0, 31, 17, 21, 17, 31, 0, 0],
        fbox: [0, 31, 31, 31, 31, 31, 0, 0],
        sbox: [0, 0, 14, 10, 14, 0, 0, 0],
        sfbox: [0, 0, 14, 14, 14, 0, 0, 0],
        bigpointerright: [8, 12, 10, 9, 10, 12, 8, 0],
        bigpointerleft: [2, 6, 10, 18, 10, 6, 2, 0],
        arrowright: [8, 12, 10, 9, 10, 12, 8, 0],
        arrowleft: [2, 6, 10, 18, 10, 6, 2, 0],
        ascprogress1: [16, 16, 16, 16, 16, 16, 16, 16],
        ascprogress2: [24, 24, 24, 24, 24, 24, 24, 24],
        ascprogress3: [28, 28, 28, 28, 28, 28, 28, 28],
        ascprogress4: [30, 30, 30, 30, 30, 30, 30, 30],
        fullprogress: [31, 31, 31, 31, 31, 31, 31, 31],
        descprogress1: [1, 1, 1, 1, 1, 1, 1, 1],
        descprogress2: [3, 3, 3, 3, 3, 3, 3, 3],
        descprogress3: [7, 7, 7, 7, 7, 7, 7, 7],
        descprogress4: [15, 15, 15, 15, 15, 15, 15, 15],
        ascchart1: [31, 0, 0, 0, 0, 0, 0, 0],
        ascchart2: [31, 31, 0, 0, 0, 0, 0, 0],
        ascchart3: [31, 31, 31, 0, 0, 0, 0, 0],
        ascchart4: [31, 31, 31, 31, 0, 0, 0, 0],
        ascchart5: [31, 31, 31, 31, 31, 0, 0, 0],
        ascchart6: [31, 31, 31, 31, 31, 31, 0, 0],
        ascchart7: [31, 31, 31, 31, 31, 31, 31, 0],
        descchart1: [0, 0, 0, 0, 0, 0, 0, 31],
        descchart2: [0, 0, 0, 0, 0, 0, 31, 31],
        descchart3: [0, 0, 0, 0, 0, 31, 31, 31],
        descchart4: [0, 0, 0, 0, 31, 31, 31, 31],
        descchart5: [0, 0, 0, 31, 31, 31, 31, 31],
        descchart6: [0, 0, 31, 31, 31, 31, 31, 31],
        descchart7: [0, 31, 31, 31, 31, 31, 31, 31],
        borderleft1: [1, 1, 1, 1, 1, 1, 1, 1],
        borderleft2: [3, 2, 2, 2, 2, 2, 2, 3],
        borderleft3: [7, 4, 4, 4, 4, 4, 4, 7],
        borderleft4: [15, 8, 8, 8, 8, 8, 8, 15],
        borderleft5: [31, 16, 16, 16, 16, 16, 16, 31],
        bordertopbottom5: [31, 0, 0, 0, 0, 0, 0, 31],
        borderright1: [16, 16, 16, 16, 16, 16, 16, 16],
        borderright2: [24, 8, 8, 8, 8, 8, 8, 24],
        borderright3: [28, 4, 4, 4, 4, 4, 4, 28],
        borderright4: [30, 2, 2, 2, 2, 2, 2, 30],
        borderright5: [31, 1, 1, 1, 1, 1, 1, 31],
        box1: [3, 3, 3, 0, 0, 0, 0, 0],
        box2: [24, 24, 24, 0, 0, 0, 0, 0],
        box3: [27, 27, 27, 0, 0, 0, 0, 0],
        box4: [0, 0, 0, 0, 3, 3, 3, 0],
        box5: [3, 3, 3, 0, 3, 3, 3, 0],
        box6: [24, 24, 24, 0, 3, 3, 3, 0],
        box7: [27, 27, 27, 0, 3, 3, 3, 0],
        box8: [0, 0, 0, 0, 24, 24, 24, 0],
        box9: [3, 3, 3, 0, 24, 24, 24, 0],
        box10: [24, 24, 24, 0, 24, 24, 24, 0],
        box11: [27, 27, 27, 0, 24, 24, 24, 0],
        box12: [0, 0, 0, 0, 27, 27, 27, 0],
        box13: [3, 3, 3, 0, 27, 27, 27, 0],
        box14: [24, 24, 24, 0, 27, 27, 27, 0],
        box15: [27, 27, 27, 0, 27, 27, 27, 0],
        euro: [3, 4, 30, 8, 30, 8, 7, 0],
        cent: [0, 0, 14, 17, 16, 21, 14, 8],
        speaker: [1, 3, 15, 15, 15, 3, 1, 0],
        sound: [8, 16, 0, 24, 0, 16, 8, 0],
        x: [0, 27, 14, 4, 14, 27, 0, 0],
        target: [0, 10, 17, 21, 17, 10, 0, 0],
        pointerright: [0, 8, 12, 14, 12, 8, 0, 0],
        pointerup: [0, 0, 4, 14, 31, 0, 0, 0],
        pointerleft: [0, 2, 6, 14, 6, 2, 0, 0],
        pointerdown: [0, 0, 31, 14, 4, 0, 0, 0],
        arrowne: [0, 15, 3, 5, 9, 16, 0, 0],
        arrownw: [0, 30, 24, 20, 18, 1, 0, 0],
        arrowsw: [0, 1, 18, 20, 24, 30, 0, 0],
        arrowse: [0, 16, 9, 5, 3, 15, 0, 0],
        dice1: [0, 0, 0, 4, 0, 0, 0, 0],
        dice2: [0, 16, 0, 0, 0, 1, 0, 0],
        dice3: [0, 16, 0, 4, 0, 1, 0, 0],
        dice4: [0, 17, 0, 0, 0, 17, 0, 0],
        dice5: [0, 17, 0, 4, 0, 17, 0, 0],
        dice6: [0, 17, 0, 17, 0, 17, 0, 0],
        bell: [4, 14, 14, 14, 31, 0, 4, 0],
        smile: [0, 10, 0, 17, 14, 0, 0, 0],
        note: [2, 3, 2, 14, 30, 12, 0, 0],
        clock: [0, 14, 21, 23, 17, 14, 0, 0],
        heart: [0, 10, 31, 31, 31, 14, 4, 0],
        duck: [0, 12, 29, 15, 15, 6, 0, 0],
        check: [0, 1, 3, 22, 28, 8, 0, 0],
        retarrow: [1, 1, 5, 9, 31, 8, 4, 0],
        runninga: [6, 6, 5, 14, 20, 4, 10, 17],
        runningb: [6, 6, 4, 14, 14, 4, 10, 10]
      }
    };
  }
});

// node_modules/color-convert/css-keywords.js
var require_css_keywords = __commonJS({
  "node_modules/color-convert/css-keywords.js"(exports, module2) {
    module2.exports = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50]
    };
  }
});

// node_modules/color-convert/conversions.js
var require_conversions2 = __commonJS({
  "node_modules/color-convert/conversions.js"(exports, module2) {
    var cssKeywords = require_css_keywords();
    var reverseKeywords = {};
    for (var key in cssKeywords) {
      if (cssKeywords.hasOwnProperty(key)) {
        reverseKeywords[cssKeywords[key].join()] = key;
      }
    }
    var convert = module2.exports = {
      rgb: { channels: 3 },
      hsl: { channels: 3 },
      hsv: { channels: 3 },
      hwb: { channels: 3 },
      cmyk: { channels: 4 },
      xyz: { channels: 3 },
      lab: { channels: 3 },
      lch: { channels: 3 },
      hex: { channels: 1 },
      keyword: { channels: 1 },
      ansi16: { channels: 1 },
      ansi256: { channels: 1 },
      hcg: { channels: 3 }
    };
    for (var model in convert) {
      if (convert.hasOwnProperty(model)) {
        if (!("channels" in convert[model])) {
          throw new Error("missing channels property: " + model);
        }
        channels = convert[model].channels;
        delete convert[model].channels;
        Object.defineProperty(convert[model], "channels", { value: channels });
      }
    }
    var channels;
    convert.rgb.hsl = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var min = Math.min(r, g, b);
      var max = Math.max(r, g, b);
      var delta = max - min;
      var h;
      var s;
      var l;
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      l = (min + max) / 2;
      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }
      return [h, s * 100, l * 100];
    };
    convert.rgb.hsv = function(rgb) {
      var r = rgb[0];
      var g = rgb[1];
      var b = rgb[2];
      var min = Math.min(r, g, b);
      var max = Math.max(r, g, b);
      var delta = max - min;
      var h;
      var s;
      var v;
      if (max === 0) {
        s = 0;
      } else {
        s = delta / max * 1e3 / 10;
      }
      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }
      h = Math.min(h * 60, 360);
      if (h < 0) {
        h += 360;
      }
      v = max / 255 * 1e3 / 10;
      return [h, s, v];
    };
    convert.rgb.hwb = function(rgb) {
      var r = rgb[0];
      var g = rgb[1];
      var b = rgb[2];
      var h = convert.rgb.hsl(rgb)[0];
      var w = 1 / 255 * Math.min(r, Math.min(g, b));
      b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
      return [h, w * 100, b * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var c;
      var m;
      var y;
      var k;
      k = Math.min(1 - r, 1 - g, 1 - b);
      c = (1 - r - k) / (1 - k) || 0;
      m = (1 - g - k) / (1 - k) || 0;
      y = (1 - b - k) / (1 - k) || 0;
      return [c * 100, m * 100, y * 100, k * 100];
    };
    convert.rgb.keyword = function(rgb) {
      return reverseKeywords[rgb.join()];
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
      g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
      b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
      var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
      return [x * 100, y * 100, z * 100];
    };
    convert.rgb.lab = function(rgb) {
      var xyz = convert.rgb.xyz(rgb);
      var x = xyz[0];
      var y = xyz[1];
      var z = xyz[2];
      var l;
      var a;
      var b;
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);
      return [l, a, b];
    };
    convert.hsl.rgb = function(hsl) {
      var h = hsl[0] / 360;
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var t1;
      var t2;
      var t3;
      var rgb;
      var val;
      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }
      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }
      t1 = 2 * l - t2;
      rgb = [0, 0, 0];
      for (var i = 0; i < 3; i++) {
        t3 = h + 1 / 3 * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      var h = hsl[0];
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var sv;
      var v;
      if (l === 0) {
        return [0, 0, 0];
      }
      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      v = (l + s) / 2;
      sv = 2 * s / (l + s);
      return [h, sv * 100, v * 100];
    };
    convert.hsv.rgb = function(hsv) {
      var h = hsv[0] / 60;
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var hi = Math.floor(h) % 6;
      var f = h - Math.floor(h);
      var p = 255 * v * (1 - s);
      var q = 255 * v * (1 - s * f);
      var t = 255 * v * (1 - s * (1 - f));
      v *= 255;
      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    };
    convert.hsv.hsl = function(hsv) {
      var h = hsv[0];
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var sl;
      var l;
      l = (2 - s) * v;
      sl = s * v;
      sl /= l <= 1 ? l : 2 - l;
      sl = sl || 0;
      l /= 2;
      return [h, sl * 100, l * 100];
    };
    convert.hwb.rgb = function(hwb) {
      var h = hwb[0] / 360;
      var wh = hwb[1] / 100;
      var bl = hwb[2] / 100;
      var ratio = wh + bl;
      var i;
      var v;
      var f;
      var n;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      i = Math.floor(6 * h);
      v = 1 - bl;
      f = 6 * h - i;
      if ((i & 1) !== 0) {
        f = 1 - f;
      }
      n = wh + f * (v - wh);
      var r;
      var g;
      var b;
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }
      return [r * 255, g * 255, b * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      var c = cmyk[0] / 100;
      var m = cmyk[1] / 100;
      var y = cmyk[2] / 100;
      var k = cmyk[3] / 100;
      var r;
      var g;
      var b;
      r = 1 - Math.min(1, c * (1 - k) + k);
      g = 1 - Math.min(1, m * (1 - k) + k);
      b = 1 - Math.min(1, y * (1 - k) + k);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.rgb = function(xyz) {
      var x = xyz[0] / 100;
      var y = xyz[1] / 100;
      var z = xyz[2] / 100;
      var r;
      var g;
      var b;
      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;
      r = r > 31308e-7 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : r *= 12.92;
      g = g > 31308e-7 ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : g *= 12.92;
      b = b > 31308e-7 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : b *= 12.92;
      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);
      return [r * 255, g * 255, b * 255];
    };
    convert.xyz.lab = function(xyz) {
      var x = xyz[0];
      var y = xyz[1];
      var z = xyz[2];
      var l;
      var a;
      var b;
      x /= 95.047;
      y /= 100;
      z /= 108.883;
      x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);
      return [l, a, b];
    };
    convert.lab.xyz = function(lab) {
      var l = lab[0];
      var a = lab[1];
      var b = lab[2];
      var x;
      var y;
      var z;
      var y2;
      if (l <= 8) {
        y = l * 100 / 903.3;
        y2 = 7.787 * (y / 100) + 16 / 116;
      } else {
        y = 100 * Math.pow((l + 16) / 116, 3);
        y2 = Math.pow(y / 100, 1 / 3);
      }
      x = x / 95.047 <= 8856e-6 ? x = 95.047 * (a / 500 + y2 - 16 / 116) / 7.787 : 95.047 * Math.pow(a / 500 + y2, 3);
      z = z / 108.883 <= 8859e-6 ? z = 108.883 * (y2 - b / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(y2 - b / 200, 3);
      return [x, y, z];
    };
    convert.lab.lch = function(lab) {
      var l = lab[0];
      var a = lab[1];
      var b = lab[2];
      var hr;
      var h;
      var c;
      hr = Math.atan2(b, a);
      h = hr * 360 / 2 / Math.PI;
      if (h < 0) {
        h += 360;
      }
      c = Math.sqrt(a * a + b * b);
      return [l, c, h];
    };
    convert.lch.lab = function(lch) {
      var l = lch[0];
      var c = lch[1];
      var h = lch[2];
      var a;
      var b;
      var hr;
      hr = h / 360 * 2 * Math.PI;
      a = c * Math.cos(hr);
      b = c * Math.sin(hr);
      return [l, a, b];
    };
    convert.rgb.ansi16 = function(args) {
      var r = args[0];
      var g = args[1];
      var b = args[2];
      var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2];
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      var r = args[0];
      var g = args[1];
      var b = args[2];
      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }
        if (r > 248) {
          return 231;
        }
        return Math.round((r - 8) / 247 * 24) + 232;
      }
      var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      var color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      var mult = (~~(args > 50) + 1) * 0.5;
      var r = (color & 1) * mult * 255;
      var g = (color >> 1 & 1) * mult * 255;
      var b = (color >> 2 & 1) * mult * 255;
      return [r, g, b];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        var c = (args - 232) * 10 + 8;
        return [c, c, c];
      }
      args -= 16;
      var rem;
      var r = Math.floor(args / 36) / 5 * 255;
      var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
      var b = rem % 6 / 5 * 255;
      return [r, g, b];
    };
    convert.rgb.hex = function(args) {
      var integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      var string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      var match = args.toString(16).match(/[a-f0-9]{6}/i);
      if (!match) {
        return [0, 0, 0];
      }
      var integer = parseInt(match[0], 16);
      var r = integer >> 16 & 255;
      var g = integer >> 8 & 255;
      var b = integer & 255;
      return [r, g, b];
    };
    convert.rgb.hcg = function(rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var max = Math.max(Math.max(r, g), b);
      var min = Math.min(Math.min(r, g), b);
      var chroma = max - min;
      var grayscale;
      var hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = (g - b) / chroma % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma + 4;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var c = 1;
      var f = 0;
      if (l < 0.5) {
        c = 2 * s * l;
      } else {
        c = 2 * s * (1 - l);
      }
      if (c < 1) {
        f = (l - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f * 100];
    };
    convert.hsv.hcg = function(hsv) {
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var c = s * v;
      var f = 0;
      if (c < 1) {
        f = (v - c) / (1 - c);
      }
      return [hsv[0], c * 100, f * 100];
    };
    convert.hcg.rgb = function(hcg) {
      var h = hcg[0] / 360;
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      if (c === 0) {
        return [g * 255, g * 255, g * 255];
      }
      var pure = [0, 0, 0];
      var hi = h % 1 * 6;
      var v = hi % 1;
      var w = 1 - v;
      var mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }
      mg = (1 - c) * g;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var v = c + g * (1 - c);
      var f = 0;
      if (v > 0) {
        f = c / v;
      }
      return [hcg[0], f * 100, v * 100];
    };
    convert.hcg.hsl = function(hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var l = g * (1 - c) + 0.5 * c;
      var s = 0;
      if (l > 0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1) {
        s = c / (2 * (1 - l));
      }
      return [hcg[0], s * 100, l * 100];
    };
  }
});

// node_modules/color-convert/route.js
var require_route2 = __commonJS({
  "node_modules/color-convert/route.js"(exports, module2) {
    var conversions = require_conversions2();
    var models = Object.keys(conversions);
    function buildGraph() {
      var graph = {};
      for (var len = models.length, i = 0; i < len; i++) {
        graph[models[i]] = {
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      var graph = buildGraph();
      var queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        var current = queue.pop();
        var adjacents = Object.keys(conversions[current]);
        for (var len = adjacents.length, i = 0; i < len; i++) {
          var adjacent = adjacents[i];
          var node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    function wrapConversion(toModel, graph) {
      var path = [graph[toModel].parent, toModel];
      var fn = conversions[graph[toModel].parent][toModel];
      var cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path;
      return fn;
    }
    module2.exports = function(fromModel) {
      var graph = deriveBFS(fromModel);
      var conversion = {};
      var models2 = Object.keys(graph);
      for (var len = models2.length, i = 0; i < len; i++) {
        var toModel = models2[i];
        var node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// node_modules/color-convert/index.js
var require_color_convert2 = __commonJS({
  "node_modules/color-convert/index.js"(exports, module2) {
    var conversions = require_conversions2();
    var route = require_route2();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      var wrappedFn = function(args) {
        if (args === void 0 || args === null) {
          return args;
        }
        if (arguments.length > 1) {
          args = Array.prototype.slice.call(arguments);
        }
        return fn(args);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      var wrappedFn = function(args) {
        if (args === void 0 || args === null) {
          return args;
        }
        if (arguments.length > 1) {
          args = Array.prototype.slice.call(arguments);
        }
        var result = fn(args);
        if (typeof result === "object") {
          for (var len = result.length, i = 0; i < len; i++) {
            result[i] = Math.round(result[i]);
          }
        }
        return result;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    models.forEach(function(fromModel) {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      var routes = route(fromModel);
      var routeModels = Object.keys(routes);
      routeModels.forEach(function(toModel) {
        var fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module2.exports = convert;
  }
});

// node_modules/johnny-five/lib/led/rgb.js
var require_rgb = __commonJS({
  "node_modules/johnny-five/lib/led/rgb.js"(exports, module2) {
    var Board = require_board();
    var Animation = require_animation();
    var Expander = require_expander();
    var converter = require_color_convert2();
    var { constrain, map } = require_fn();
    var priv = new Map();
    var Controllers = {
      DEFAULT: {
        initialize: {
          value({ pins, debug }) {
            RGB.colors.forEach((color, index) => {
              const pin = pins[index];
              if (debug && !this.board.pins.isPwm(pin)) {
                Board.Pins.Error({
                  pin,
                  type: "PWM",
                  via: "Led.RGB"
                });
              }
              this.io.pinMode(pin, this.io.MODES.PWM);
              this.pins[index] = pin;
            });
          }
        },
        write: {
          writable: true,
          value(colors) {
            const state = priv.get(this);
            RGB.colors.forEach((color, index) => {
              const pin = this.pins[index];
              let value = colors[color];
              if (state.isAnode) {
                value = 255 - constrain(value, 0, 255);
              }
              value = map(value, 0, 255, 0, this.board.RESOLUTION.PWM);
              this.io.analogWrite(pin, value);
            });
          }
        }
      },
      PCA9685: {
        initialize: {
          value({ address, pwmRange, frequency, pins }) {
            const state = priv.get(this);
            this.address = address || 64;
            this.pwmRange = pwmRange || [0, 4095];
            this.frequency = frequency || 200;
            state.expander = Expander.get({
              address: this.address,
              controller: this.controller,
              bus: this.bus,
              pwmRange: this.pwmRange,
              frequency: this.frequency
            });
            RGB.colors.forEach((color, index) => {
              this.pins[index] = state.expander.normalize(pins[index]);
              state.expander.analogWrite(this.pins[index], 0);
            });
          }
        },
        write: {
          writable: true,
          value(colors) {
            const state = priv.get(this);
            RGB.colors.forEach((color, index) => {
              const pin = this.pins[index];
              let value = colors[color];
              if (state.isAnode) {
                value = 255 - constrain(value, 0, 255);
              }
              state.expander.analogWrite(pin, value);
            });
          }
        }
      },
      BLINKM: {
        REGISTER: {
          value: {
            GO_TO_RGB_COLOR_NOW: 110,
            STOP_SCRIPT: 111
          }
        },
        initialize: {
          value(options) {
            this.address = options.address || 9;
            options.address = this.address;
            if (!this.board.Drivers[this.address]) {
              this.io.i2cConfig(options);
              this.board.Drivers[this.address] = {
                initialized: false
              };
              this.io.i2cWrite(this.address, [this.REGISTER.STOP_SCRIPT]);
              this.board.Drivers[this.address].initialized = true;
            }
          }
        },
        write: {
          writable: true,
          value({ red, green, blue }) {
            this.io.i2cWrite(this.address, [this.REGISTER.GO_TO_RGB_COLOR_NOW, red, green, blue]);
          }
        }
      }
    };
    Controllers.ESPLORA = {
      initialize: {
        value(options) {
          options.pins = [5, 10, 9];
          this.pins = [];
          Controllers.DEFAULT.initialize.value.call(this, options);
        }
      },
      write: Controllers.DEFAULT.write
    };
    var RGB = class {
      constructor(options) {
        if (Array.isArray(options)) {
          options = {
            pins: options
          };
        } else if (typeof options.pins === "object" && !Array.isArray(options.pins)) {
          options.pins = [options.pins.red, options.pins.green, options.pins.blue];
        }
        Board.Component.call(this, options = Board.Options(options));
        Board.Controller.call(this, Controllers, options);
        const state = {
          red: 255,
          green: 255,
          blue: 255,
          intensity: 100,
          isAnode: options.isAnode || false,
          interval: null,
          values: {
            red: 255,
            green: 255,
            blue: 255
          }
        };
        priv.set(this, state);
        Object.defineProperties(this, {
          isOn: {
            get() {
              return RGB.colors.some((color) => state[color] > 0);
            }
          },
          isRunning: {
            get() {
              return !!state.interval;
            }
          },
          isAnode: {
            get() {
              return state.isAnode;
            }
          },
          values: {
            get() {
              return Object.assign({}, state.values);
            }
          },
          update: {
            value(colors) {
              const state2 = priv.get(this);
              colors = colors || this.color();
              state2.values = RGB.ToScaledRGB(state2.intensity, colors);
              this.write(state2.values);
              Object.assign(state2, colors);
            }
          }
        });
        this.initialize(options);
        this.off();
      }
      color(red, green, blue) {
        const state = priv.get(this);
        let colors;
        if (arguments.length === 0) {
          colors = this.isOn ? state : state.prev;
          return RGB.colors.reduce((current, color) => (current[color] = Math.round(colors[color]), current), {});
        }
        const update = RGB.ToRGB(red, green, blue);
        RGB.colors.forEach((color) => {
          let value = update[color];
          if (value == null) {
            throw new Error(`Led.RGB.color: invalid color ([${[update.red, update.green, update.blue].join(",")}])`);
          }
          value = constrain(value, 0, 255);
          update[color] = value;
        });
        this.update(update);
        return this;
      }
      on() {
        const state = priv.get(this);
        let colors;
        if (!this.isOn) {
          colors = state.prev || {
            red: 255,
            green: 255,
            blue: 255
          };
          state.prev = null;
          this.update(colors);
        }
        return this;
      }
      off() {
        const state = priv.get(this);
        if (this.isOn) {
          state.prev = RGB.colors.reduce((current, color) => (current[color] = state[color], current), {});
          this.update({
            red: 0,
            green: 0,
            blue: 0
          });
        }
        return this;
      }
      blink(duration, callback) {
        const state = priv.get(this);
        this.stop();
        if (typeof duration === "function") {
          callback = duration;
          duration = null;
        }
        state.interval = setInterval(() => {
          this.toggle();
          if (typeof callback === "function") {
            callback();
          }
        }, duration || 100);
        return this;
      }
      toggle() {
        return this[this.isOn ? "off" : "on"]();
      }
      stop() {
        const state = priv.get(this);
        if (state.interval) {
          clearInterval(state.interval);
        }
        if (state.animation) {
          state.animation.stop();
        }
        state.interval = null;
        return this;
      }
      intensity(intensity) {
        const state = priv.get(this);
        if (arguments.length === 0) {
          return state.intensity;
        }
        state.intensity = constrain(intensity, 0, 100);
        this.update();
        return this;
      }
      [Animation.normalize](keyFrames) {
        const state = priv.get(this);
        if (keyFrames[0] === null) {
          keyFrames[0] = state.values;
        }
        return keyFrames.reduce((accum, frame) => {
          const value = frame;
          let normalized = {};
          let color = null;
          let intensity = state.intensity;
          if (frame !== null) {
            if (typeof value === "number") {
              throw new Error("RGB LEDs expect a complete keyFrame object or hexadecimal string value");
            }
            if (typeof value === "string") {
              color = value;
            }
            if (Array.isArray(value)) {
              color = value;
            } else {
              if (typeof value === "object") {
                if (typeof value.color !== "undefined") {
                  color = value.color;
                } else {
                  color = value;
                }
              }
            }
            if (typeof frame.intensity === "number") {
              intensity = frame.intensity;
              delete frame.intensity;
            }
            normalized.easing = frame.easing || "linear";
            normalized.value = RGB.ToScaledRGB(intensity, RGB.ToRGB(color));
          } else {
            normalized = frame;
          }
          accum.push(normalized);
          return accum;
        }, []);
      }
      [Animation.render](frames) {
        return this.color(frames[0]);
      }
    };
    RGB.prototype[Animation.keys] = RGB.colors;
    RGB.colors = ["red", "green", "blue"];
    RGB.ToScaledRGB = (intensity, colors) => {
      const scale = intensity / 100;
      return RGB.colors.reduce((current, color) => (current[color] = Math.round(colors[color] * scale), current), {});
    };
    RGB.ToRGB = (red, green, blue) => {
      let update = {};
      let flags = 0;
      let input;
      if (typeof red !== "undefined") {
        flags |= 1 << 2;
      }
      if (typeof green !== "undefined") {
        flags |= 1 << 1;
      }
      if (typeof blue !== "undefined") {
        flags |= 1 << 0;
      }
      if ((flags | 4) === 4) {
        input = red;
        if (input == null) {
          throw new Error(`Invalid color (${input})`);
        }
        if (Array.isArray(input)) {
          update = {
            red: input[0],
            green: input[1],
            blue: input[2]
          };
        } else if (typeof input === "object") {
          update = {
            red: input.red,
            green: input.green,
            blue: input.blue
          };
        } else if (typeof input === "string") {
          if (/^#?[0-9A-Fa-f]{6}$/.test(input)) {
            if (input.length === 7 && input[0] === "#") {
              input = input.slice(1);
            }
            update = {
              red: parseInt(input.slice(0, 2), 16),
              green: parseInt(input.slice(2, 4), 16),
              blue: parseInt(input.slice(4, 6), 16)
            };
          } else {
            if (/^rgb/.test(input)) {
              const args = input.match(/^rgba?\(([^)]+)\)$/)[1].split(/[\s,]+/);
              if (isPercentString(args[0])) {
                args.forEach((value, index) => {
                  if (index <= 2) {
                    args[index] = Math.round(parseInt(value, 10) / 100 * 255);
                  }
                });
              }
              update = {
                red: parseInt(args[0], 10),
                green: parseInt(args[1], 10),
                blue: parseInt(args[2], 10)
              };
              if (args.length > 3) {
                if (isPercentString(args[3])) {
                  args[3] = parseInt(args[3], 10) / 100;
                }
                update = RGB.ToScaledRGB(100 * parseFloat(args[3]), update);
              }
            } else {
              return RGB.ToRGB(converter.keyword.rgb(input.toLowerCase()));
            }
          }
        }
      } else {
        update = {
          red,
          green,
          blue
        };
      }
      return update;
    };
    function isPercentString(input) {
      return typeof input === "string" && input.endsWith("%");
    }
    RGB.prototype.strobe = RGB.prototype.blink;
    if (!!process.env.IS_TEST_MODE) {
      RGB.Controllers = Controllers;
      RGB.purge = () => {
        priv.clear();
      };
    }
    module2.exports = RGB;
  }
});

// node_modules/johnny-five/lib/lcd.js
var require_lcd = __commonJS({
  "node_modules/johnny-five/lib/lcd.js"(exports, module2) {
    var Board = require_board();
    var Pin = require_pin();
    var lcdCharacters = require_lcd_chars();
    var RGB = require_rgb();
    var priv = new Map();
    function sleepus(usDelay) {
      const startTime = process.hrtime();
      let deltaTime;
      let usWaited = 0;
      while (usDelay > usWaited) {
        deltaTime = process.hrtime(startTime);
        usWaited = (deltaTime[0] * 1e9 + deltaTime[1]) / 1e3;
      }
    }
    function sleep(ms) {
      sleepus(ms * 1e3);
    }
    var Expander = class {
      constructor(address, io) {
        this.address = address;
        this.mask = 255;
        this.memory = 0;
        this.io = io;
      }
      pinMode(pin, dir) {
        if (dir === 1) {
          this.mask &= ~(1 << pin);
        } else {
          this.mask |= 1 << pin;
        }
      }
      portMode(dir) {
        this.mask = dir === 0 ? 255 : 0;
      }
      portWrite(value) {
        this.memory = value & ~this.mask;
        this.io.i2cWrite(this.address, this.memory);
      }
    };
    var REGISTER = {
      DEFAULT: {
        SHIFT_LEFT: 4,
        CLEAR: 1,
        HOME: 2,
        ENTRY: 4,
        DISPLAY: 8,
        DIMENSIONS: 32,
        CURSORSHIFT: 16,
        SETCGRAMADDR: 64,
        SETDDRAMADDR: 128,
        DATA: 64,
        COMMAND: 128,
        ENTRYRIGHT: 0,
        ENTRYLEFT: 2,
        ENTRYSHIFTINCREMENT: 1,
        ENTRYSHIFTDECREMENT: 0,
        DISPLAYON: 4,
        DISPLAYOFF: 0,
        CURSORON: 2,
        CURSOROFF: 0,
        BLINKON: 1,
        BLINKOFF: 0,
        DISPLAYMOVE: 8,
        CURSORMOVE: 0,
        MOVERIGHT: 4,
        MOVELEFT: 0,
        BITMODE: {
          4: 0,
          8: 16
        },
        LINE: {
          1: 0,
          2: 8
        },
        DOTS: {
          "5x10": 4,
          "5x8": 0
        },
        BACKLIGHT_ON: 8,
        BACKLIGHT_OFF: 0,
        MEMORYLIMIT: 8,
        EN: 4,
        RW: 2,
        RS: 1,
        D4: 4,
        D5: 5,
        D6: 6,
        D7: 7
      }
    };
    var Controllers = {
      JHD1313M1: {
        REGISTER: {
          value: REGISTER.DEFAULT
        },
        CHARS: {
          value: lcdCharacters.DEFAULT
        },
        initialize: {
          value(options) {
            this.address = {
              lcd: options.address || 62,
              rgb: 98
            };
            options.address = this.address;
            this.io.i2cConfig(options);
            this.lines = options.lines || 2;
            this.rows = options.rows || 2;
            this.cols = options.cols || 16;
            this.dots = options.dots || "5x8";
            const display = this.REGISTER.DISPLAY | this.REGISTER.DISPLAYON | this.REGISTER.CURSOROFF | this.REGISTER.BLINKOFF;
            const state = {
              display,
              characters: {},
              index: this.REGISTER.MEMORYLIMIT - 1,
              backlight: {
                polarity: 1,
                pin: null,
                value: null
              }
            };
            priv.set(this, state);
            blocking: {
              const lines = this.REGISTER.DIMENSIONS | this.REGISTER.LINE[2];
              sleep(50);
              this.command(lines);
              sleep(5);
              this.command(lines);
              this.command(lines);
              this.command(lines);
              sleep(5);
              this.command(this.REGISTER.ENTRY | this.REGISTER.ENTRYLEFT | this.REGISTER.ENTRYSHIFTDECREMENT);
              this.on();
              this.clear();
              this.home();
            }
            this.bgOn();
            if (options.color) {
              this.bgColor(options.color);
            } else {
              this.bgColor("black");
            }
          }
        },
        clear: {
          value() {
            return this.command(this.REGISTER.CLEAR);
          }
        },
        setCursor: {
          value(col, row) {
            return this.command(row === 0 ? col | 128 : col | 192);
          }
        },
        autoscroll: {
          value() {
            const state = priv.get(this);
            state.display = this.REGISTER.ENTRYLEFT | this.REGISTER.ENTRYSHIFTINCREMENT;
            this.command(this.REGISTER.ENTRY | state.display);
            return this;
          }
        },
        bgColor: {
          value(red, green, blue) {
            const rgb = RGB.ToRGB(red, green, blue);
            const address = this.address.rgb;
            this.io.i2cWrite(address, [0, 0]);
            this.io.i2cWrite(address, [1, 0]);
            this.io.i2cWrite(address, [4, rgb.red]);
            this.io.i2cWrite(address, [3, rgb.green]);
            this.io.i2cWrite(address, [2, rgb.blue]);
            return this;
          }
        },
        bgOn: {
          value() {
            this.io.i2cWrite(this.address.rgb, [this.REGISTER.BACKLIGHT_ON, 170]);
            return this;
          }
        },
        bgOff: {
          value() {
            this.io.i2cWrite(this.address.rgb, [this.REGISTER.BACKLIGHT_ON, 0]);
            return this;
          }
        },
        command: {
          value(mode, value) {
            if (arguments.length === 1) {
              value = mode;
              mode = this.REGISTER.COMMAND;
            }
            if (mode === this.REGISTER.DATA) {
              return this.send(value);
            }
            return this.writeBits(this.REGISTER.COMMAND, value);
          }
        },
        send: {
          value(value) {
            return this.writeBits(this.REGISTER.DATA, value);
          }
        },
        writeBits: {
          value(mode, value) {
            this.io.i2cWrite(this.address.lcd, [mode, value]);
            return this;
          }
        },
        hilo: {
          value(callback) {
            callback.call(this);
          }
        }
      },
      PCF8574: {
        REGISTER: {
          value: Object.assign({}, REGISTER.DEFAULT, {
            COMMAND: 0,
            DATA: 1,
            BACKLIGHT_ON: 255,
            BACKLIGHT_OFF: 0
          })
        },
        CHARS: {
          value: lcdCharacters.DEFAULT
        },
        initialize: {
          value(options) {
            this.bitMode = options.bitMode || 4;
            this.lines = options.lines || 2;
            this.rows = options.rows || 2;
            this.cols = options.cols || 16;
            this.dots = options.dots || "5x8";
            if (!options.address) {
              options.address = ["PCF8574A", "PCF8574AT"].includes(options.controller) ? 63 : 39;
            }
            this.io.i2cConfig(options);
            this.address = {
              lcd: options.address
            };
            this.expander = new Expander(this.address.lcd, this.io);
            this.expander.portMode(this.io.MODES.OUTPUT);
            this.expander.portWrite(0);
            const backlight = options.backlight || {
              polarity: 0,
              pin: 3
            };
            backlight.pin = typeof backlight.pin === "undefined" ? 3 : backlight.pin;
            backlight.polarity = typeof backlight.polarity === "undefined" ? 0 : backlight.polarity;
            const dimensions = this.REGISTER.BITMODE[this.bitMode] | this.REGISTER.LINE[this.lines] | this.REGISTER.DOTS[this.dots];
            const display = this.REGISTER.DISPLAY | this.REGISTER.DISPLAYON | this.REGISTER.CURSOROFF | this.REGISTER.BLINKOFF;
            const entry = this.REGISTER.ENTRYLEFT | this.REGISTER.ENTRYSHIFTDECREMENT;
            const state = {
              display,
              characters: {},
              index: this.REGISTER.MEMORYLIMIT - 1,
              backlight: {
                polarity: backlight.polarity,
                pinMask: 1 << backlight.pin,
                statusMask: 0
              },
              data: [
                1 << this.REGISTER.D4,
                1 << this.REGISTER.D5,
                1 << this.REGISTER.D6,
                1 << this.REGISTER.D7
              ]
            };
            priv.set(this, state);
            let toggle = 3 << this.REGISTER.SHIFT_LEFT;
            blocking: {
              this.expander.portWrite(toggle);
              this.pulse(toggle);
              sleep(4);
              this.expander.portWrite(toggle);
              this.pulse(toggle);
              sleep(4);
              this.expander.portWrite(toggle);
              this.pulse(toggle);
              toggle = 2 << this.REGISTER.SHIFT_LEFT;
              this.expander.portWrite(toggle);
              this.pulse(toggle);
              this.command(this.REGISTER.DIMENSIONS | dimensions);
              this.command(state.display);
              state.display = entry;
              this.command(this.REGISTER.ENTRY | state.display);
              this.on();
              this.clear();
              this.backlight();
            }
          }
        },
        clear: {
          value() {
            this.command(this.REGISTER.CLEAR);
            sleep(2);
            return this;
          }
        },
        backlight: {
          value(value) {
            const state = priv.get(this);
            let mask;
            value = typeof value === "undefined" ? 255 : value;
            if (state.backlight.pinMask !== 0) {
              if (state.backlight.polarity === 0 && value > 0 || state.backlight.polarity === 1 && value === 0) {
                mask = 255;
              } else {
                mask = 0;
              }
              state.backlight.statusMask = state.backlight.pinMask & mask;
              this.expander.portWrite(state.backlight.statusMask);
            }
            return this;
          }
        },
        createChar: {
          value(name, charMap) {
            const state = priv.get(this);
            let address;
            if (typeof name === "number") {
              address = name & 7;
            } else {
              address = state.index;
              state.index--;
              if (state.index === -1) {
                state.index = this.REGISTER.MEMORYLIMIT - 1;
              }
            }
            this.command(this.REGISTER.SETCGRAMADDR | address << 3);
            blocking: {
              sleep(1);
              for (let i = 0; i < 8; i++) {
                this.command(this.REGISTER.DATA, charMap[i]);
                sleep(1);
              }
            }
            state.characters[name] = address;
            return address;
          }
        },
        noBacklight: {
          value() {
            this.backlight(0);
          }
        },
        on: {
          value() {
            const state = priv.get(this);
            state.display |= this.REGISTER.DISPLAYON;
            this.command(this.REGISTER.DISPLAY | state.display);
            return this;
          }
        },
        off: {
          value() {
            const state = priv.get(this);
            state.display &= ~this.REGISTER.DISPLAYON;
            this.command(this.REGISTER.DISPLAY | state.display);
            return this;
          }
        },
        hilo: {
          value(callback) {
            callback.call(this);
          }
        },
        command: {
          value(mode, value) {
            if (arguments.length === 1) {
              value = mode;
              mode = this.REGISTER.COMMAND;
            }
            this.send(mode, value);
            return this;
          }
        },
        send: {
          writable: true,
          value(mode, value) {
            this.writeBits(mode, value >> 4);
            this.writeBits(mode, value & 15);
            return this;
          }
        },
        writeBits: {
          writable: true,
          value(mode, value) {
            const state = priv.get(this);
            let pinMapValue = 0;
            for (let i = 0; i < 4; i++) {
              if ((value & 1) === 1) {
                pinMapValue |= state.data[i];
              }
              value = value >> 1;
            }
            if (mode === this.REGISTER.DATA) {
              mode = this.REGISTER.RS;
            }
            pinMapValue |= mode | state.backlight.statusMask;
            this.pulse(pinMapValue);
            return this;
          }
        },
        pulse: {
          writable: true,
          value(data) {
            this.expander.portWrite(data | this.REGISTER.EN);
            this.expander.portWrite(data & ~this.REGISTER.EN);
          }
        }
      },
      PARALLEL: {
        REGISTER: {
          value: REGISTER.DEFAULT
        },
        CHARS: {
          value: lcdCharacters.DEFAULT
        },
        initialize: {
          value(options) {
            this.bitMode = options.bitMode || 4;
            this.lines = options.lines || 2;
            this.rows = options.rows || 2;
            this.cols = options.cols || 16;
            this.dots = options.dots || "5x8";
            if (Array.isArray(options.pins)) {
              this.pins = {
                rs: options.pins[0],
                en: options.pins[1],
                data: [
                  options.pins[5],
                  options.pins[4],
                  options.pins[3],
                  options.pins[2]
                ]
              };
            } else {
              this.pins = options.pins;
            }
            const display = this.REGISTER.DISPLAY | this.REGISTER.DISPLAYON;
            const state = {
              display,
              characters: {},
              index: this.REGISTER.MEMORYLIMIT - 1,
              backlight: {
                polarity: 1,
                pin: null,
                value: null
              }
            };
            priv.set(this, state);
            options.pins.forEach(function(pin) {
              this.io.pinMode(pin, 1);
            }, this);
            this.io.digitalWrite(this.pins.rs, this.io.LOW);
            this.io.digitalWrite(this.pins.en, this.io.LOW);
            if (options.backlight) {
              if (typeof options.backlight === "number") {
                const temp = options.backlight;
                options.backlight = {
                  pin: temp
                };
              }
              if (options.backlight.pin) {
                state.backlight.pin = new Pin({
                  pin: options.backlight.pin,
                  board: this.board
                });
                state.backlight.pin.high();
              }
            }
            blocking: {
              this.command(3);
              sleep(4);
              this.command(3);
              sleep(4);
              this.command(3);
              if (this.bitMode === 4) {
                this.command(2);
              }
              this.command(this.REGISTER.LINE[this.lines] | this.REGISTER.DOTS[this.dots]);
              this.command(display);
              this.clear();
              this.home();
            }
          }
        }
      }
    };
    Controllers.LCM1602 = Controllers.LCD1602 = Controllers.LCM1602IIC = Controllers.LCD2004 = Controllers.PCF8574A = Controllers.PCF8574AT = Controllers.PCF8574T = Controllers.PCF8574;
    Controllers.MJKDZ = Object.assign({}, Controllers.PCF8574, {
      REGISTER: {
        value: Object.assign({}, REGISTER.DEFAULT, {
          SHIFT_LEFT: 0,
          COMMAND: 0,
          DATA: 6,
          EN: 16,
          RW: 5,
          RS: 6,
          D4: 0,
          D5: 1,
          D6: 2,
          D7: 3
        })
      },
      writeBits: {
        writable: true,
        value(mode, value) {
          const state = priv.get(this);
          let pinMapValue = 0;
          for (let i = 0; i < 4; i++) {
            if ((value & 1) === 1) {
              pinMapValue |= state.data[i];
            }
            value = value >> 1;
          }
          if (mode === this.REGISTER.DATA) {
            mode = 1 << this.REGISTER.RS;
          }
          pinMapValue |= mode | state.backlight.statusMask;
          this.pulse(pinMapValue);
          return this;
        }
      }
    });
    Controllers.DEFAULT = Controllers.PARALLEL;
    var LCD = class {
      constructor(options) {
        Board.Component.call(this, options = Board.Options(options));
        Board.Controller.call(this, Controllers, options);
        this.ctype = options.controller;
        if (this.initialize) {
          this.initialize(options);
        }
        Object.defineProperties(this, {
          characters: {
            get() {
              return Object.assign({}, priv.get(this).characters);
            }
          }
        });
      }
      command(mode, value) {
        if (typeof value === "undefined") {
          value = mode;
          mode = 128;
        }
        if (this.bitMode === 4) {
          this.send(value >> 4);
        }
        this.send(value);
        return this;
      }
      send(value) {
        let pin = 0;
        let mask = {
          4: 8,
          8: 128
        }[this.bitMode];
        for (; mask > 0; mask = mask >> 1) {
          this.io.digitalWrite(this.pins.data[pin], this.io[value & mask ? "HIGH" : "LOW"]);
          pin++;
        }
        this.io.digitalWrite(this.pins.en, this.io.LOW);
        this.io.digitalWrite(this.pins.en, this.io.HIGH);
        sleepus(1);
        this.io.digitalWrite(this.pins.en, this.io.LOW);
        sleepus(37);
        return this;
      }
      hilo(callback) {
        this.io.digitalWrite(this.pins.rs, this.io.HIGH);
        callback.call(this);
        this.io.digitalWrite(this.pins.rs, this.io.LOW);
      }
      print(message, options) {
        let state;
        let dontProcessSpecials;
        let hasCharacters;
        let processed;
        message = `${message}`;
        options = options || {};
        state = priv.get(this);
        dontProcessSpecials = options.dontProcessSpecials || false;
        hasCharacters = !dontProcessSpecials && RE_SPECIALS.test(message);
        if (message.length === 1) {
          this.hilo(function() {
            this.command(this.REGISTER.DATA, message.charCodeAt(0));
          });
        } else {
          if (hasCharacters) {
            processed = message.replace(RE_SPECIALS, (match, name) => {
              const address = state.characters[name];
              return typeof address === "number" ? String.fromCharCode(address) : match;
            });
            this.print(processed, {
              dontProcessSpecials: true
            });
          } else {
            this.hilo(function() {
              Array.from(message).forEach(function(character) {
                this.command(this.REGISTER.DATA, character.charCodeAt(0));
              }, this);
            });
          }
        }
        return this;
      }
      write(charCode) {
        this.hilo.call(this, function() {
          this.command(this.REGISTER.DATA, charCode);
        });
        return this;
      }
      clear() {
        this.command(this.REGISTER.CLEAR);
        sleep(2);
        return this;
      }
      home() {
        this.command(this.REGISTER.HOME);
        sleep(2);
        return this;
      }
      setCursor(col, row) {
        const rowOffsets = [0, 64, 20, 84];
        this.command(this.REGISTER.SETDDRAMADDR | col + rowOffsets[row]);
        return this;
      }
      backlight(highOrLow) {
        const state = priv.get(this);
        highOrLow = typeof highOrLow === "undefined" ? true : false;
        if (state.backlight.pin instanceof Pin) {
          if (highOrLow) {
            state.backlight.pin.high();
          } else {
            state.backlight.pin.low();
          }
        }
        if (highOrLow) {
          state.display |= this.REGISTER.DISPLAYON;
        } else {
          state.display &= ~this.REGISTER.DISPLAYON;
        }
        this.command(state.display);
        return this;
      }
      noBacklight() {
        const state = priv.get(this);
        if (state.backlight.pin instanceof Pin) {
          state.backlight.pin.high();
        }
        return this.backlight(false);
      }
      on() {
        const state = priv.get(this);
        state.display |= this.REGISTER.DISPLAYON;
        this.command(state.display);
        return this;
      }
      off() {
        const state = priv.get(this);
        state.display &= ~this.REGISTER.DISPLAYON;
        this.command(state.display);
        return this;
      }
      cursor(row, col) {
        if (typeof col !== "undefined" && typeof row !== "undefined") {
          return this.setCursor(col, row);
        }
        const state = priv.get(this);
        state.display |= this.REGISTER.CURSORON;
        this.command(state.display);
        return this;
      }
      noCursor() {
        const state = priv.get(this);
        state.display &= ~this.REGISTER.CURSORON;
        this.command(state.display);
        return this;
      }
      blink() {
        const state = priv.get(this);
        state.display |= this.REGISTER.BLINKON;
        this.command(state.display);
        return this;
      }
      noBlink() {
        const state = priv.get(this);
        state.display &= ~this.REGISTER.BLINKON;
        this.command(state.display);
        return this;
      }
      autoscroll() {
        const state = priv.get(this);
        state.display |= this.REGISTER.ENTRYSHIFTINCREMENT;
        this.command(this.REGISTER.ENTRY | state.display);
        return this;
      }
      noAutoscroll() {
        const state = priv.get(this);
        state.display &= ~this.REGISTER.ENTRYSHIFTINCREMENT;
        this.command(this.REGISTER.ENTRY | state.display);
        return this;
      }
      createChar(name, charMap) {
        const state = priv.get(this);
        let address;
        if (typeof name === "number") {
          address = name & 7;
        } else {
          address = state.index;
          state.index--;
          if (state.index === -1) {
            state.index = this.REGISTER.MEMORYLIMIT - 1;
          }
        }
        this.command(this.REGISTER.SETCGRAMADDR | address << 3);
        this.hilo(function() {
          for (let i = 0; i < 8; i++) {
            this.command(this.REGISTER.DATA, charMap[i]);
          }
        });
        state.characters[name] = address;
        return address;
      }
      useChar(name) {
        const state = priv.get(this);
        if (typeof state.characters[name] === "undefined") {
          const newCharIndex = this.createChar(name, this.CHARS[name]);
          for (const oldName in state.characters) {
            if (name !== oldName && state.characters[oldName] === newCharIndex) {
              delete state.characters[oldName];
              break;
            }
          }
          state.characters[name] = newCharIndex;
        }
        return this;
      }
    };
    var RE_SPECIALS = /:(\w+):/g;
    LCD.POSITIVE = 0;
    LCD.NEGATIVE = 1;
    LCD.Characters = lcdCharacters;
    module2.exports = LCD;
  }
});

// node_modules/johnny-five/lib/led/led.js
var require_led = __commonJS({
  "node_modules/johnny-five/lib/led/led.js"(exports, module2) {
    var Board = require_board();
    var Animation = require_animation();
    var Expander = require_expander();
    var { constrain, map, scale } = require_fn();
    var Pins = Board.Pins;
    var priv = new Map();
    var Controllers = {
      PCA9685: {
        initialize: {
          value({ address, pwmRange, frequency, pin }) {
            const state = priv.get(this);
            this.address = address || 64;
            this.pwmRange = pwmRange || [0, 4095];
            this.frequency = frequency || 200;
            state.expander = Expander.get({
              address: this.address,
              controller: this.controller,
              bus: this.bus,
              pwmRange: this.pwmRange,
              frequency: this.frequency
            });
            this.pin = state.expander.normalize(pin);
            state.mode = this.io.MODES.PWM;
          }
        },
        update: {
          writable: true,
          value(input) {
            const state = priv.get(this);
            const output = typeof input !== "undefined" ? input : state.value;
            const value = state.isAnode ? 255 - Board.constrain(output, 0, 255) : output;
            this.write(value);
          }
        },
        write: {
          writable: true,
          value(value) {
            const state = priv.get(this);
            state.expander.analogWrite(this.pin, value);
          }
        }
      },
      DEFAULT: {
        initialize: {
          value({ pin }, pinValue) {
            const state = priv.get(this);
            const isFirmata = Pins.isFirmata(this);
            let defaultLed;
            if (isFirmata && typeof pinValue === "string" && (pinValue.length > 1 && pinValue[0] === "A")) {
              pinValue = this.io.analogPins[+pinValue.slice(1)];
            }
            defaultLed = this.io.defaultLed || 13;
            pinValue = +pinValue;
            if (isFirmata && this.io.analogPins.includes(pinValue)) {
              this.pin = pinValue;
              state.mode = this.io.MODES.OUTPUT;
            } else {
              this.pin = typeof pin === "undefined" ? defaultLed : pin;
              state.mode = this.io.MODES[this.board.pins.isPwm(this.pin) ? "PWM" : "OUTPUT"];
            }
            this.io.pinMode(this.pin, state.mode);
          }
        },
        update: {
          writable: true,
          value(input) {
            const state = priv.get(this);
            const output = typeof input !== "undefined" ? input : state.value;
            let value = state.isAnode ? 255 - Board.constrain(output, 0, 255) : output;
            value = map(value, 0, 255, 0, this.board.RESOLUTION.PWM);
            if (value !== this.io.LOW && value !== this.io.HIGH && this.mode !== this.io.MODES.PWM) {
              Board.Pins.Error({
                pin: this.pin,
                type: "PWM",
                via: "Led"
              });
            }
            if (state.mode === this.io.MODES.OUTPUT) {
              value = output;
            }
            this.write(value);
          }
        },
        write: {
          writable: true,
          value(value) {
            const state = priv.get(this);
            if (state.mode === this.io.MODES.OUTPUT) {
              this.io.digitalWrite(this.pin, value);
            }
            if (state.mode === this.io.MODES.PWM) {
              this.io.analogWrite(this.pin, value);
            }
          }
        }
      }
    };
    var Led = class {
      constructor(options) {
        const pinValue = typeof options === "object" ? options.pin : options;
        Board.Component.call(this, options = Board.Options(options));
        Board.Controller.call(this, Controllers, options);
        const state = {
          isAnode: options.isAnode,
          isOn: false,
          isRunning: false,
          value: null,
          direction: 1,
          mode: null,
          intensity: 0,
          interval: null
        };
        priv.set(this, state);
        Object.defineProperties(this, {
          value: {
            get() {
              return state.value;
            }
          },
          mode: {
            get() {
              return state.mode;
            }
          },
          isOn: {
            get() {
              return !!state.value;
            }
          },
          isRunning: {
            get() {
              return state.isRunning;
            }
          },
          animation: {
            get() {
              return state.animation;
            }
          }
        });
        if (typeof this.initialize === "function") {
          this.initialize(options, pinValue);
        }
      }
      on() {
        const state = priv.get(this);
        if (state.mode === this.io.MODES.OUTPUT) {
          state.value = this.io.HIGH;
        }
        if (state.mode === this.io.MODES.PWM) {
          if (state.value === null) {
            state.value = 255;
          }
          if (!state.interval) {
            state.value = 255;
          }
          if (state.value === 0) {
            state.value = 255;
          }
        }
        this.update();
        return this;
      }
      off() {
        const state = priv.get(this);
        state.value = 0;
        this.update();
        return this;
      }
      toggle() {
        return this[this.isOn ? "off" : "on"]();
      }
      brightness(brightness) {
        const state = priv.get(this);
        state.value = brightness;
        this.update();
        return this;
      }
      intensity(intensity) {
        const state = priv.get(this);
        if (arguments.length === 0) {
          return state.intensity;
        }
        state.intensity = constrain(intensity, 0, 100);
        return this.brightness(scale(state.intensity, 0, 100, 0, 255));
      }
      [Animation.normalize](keyFrames) {
        const state = priv.get(this);
        if (keyFrames[0] === null) {
          keyFrames[0] = {
            value: state.value || 0
          };
        }
        return keyFrames.map((frame) => {
          const value = frame;
          if (frame !== null) {
            if (typeof frame === "number") {
              frame = {
                value
              };
            } else {
              if (typeof frame.brightness === "number") {
                frame.value = frame.brightness;
                delete frame.brightness;
              }
              if (typeof frame.intensity === "number") {
                frame.value = scale(frame.intensity, 0, 100, 0, 255);
                delete frame.intensity;
              }
            }
            if (!frame.easing) {
              frame.easing = "linear";
            }
          }
          return frame;
        });
      }
      [Animation.render](position) {
        const state = priv.get(this);
        state.value = position[0];
        return this.update();
      }
      pulse(duration, callback) {
        const state = priv.get(this);
        this.stop();
        const options = {
          duration: typeof duration === "number" ? duration : 1e3,
          keyFrames: [0, 255],
          metronomic: true,
          loop: true,
          easing: "inOutSine",
          onloop() {
            if (typeof callback === "function") {
              callback();
            }
          }
        };
        if (typeof duration === "object") {
          Object.assign(options, duration);
        }
        if (typeof duration === "function") {
          callback = duration;
        }
        state.isRunning = true;
        state.animation = state.animation || new Animation(this);
        state.animation.enqueue(options);
        return this;
      }
      fade(val, duration, callback) {
        const state = priv.get(this);
        this.stop();
        const options = {
          duration: typeof duration === "number" ? duration : 1e3,
          keyFrames: [null, typeof val === "number" ? val : 255],
          easing: "outSine",
          oncomplete() {
            state.isRunning = false;
            if (typeof callback === "function") {
              callback();
            }
          }
        };
        if (typeof val === "object") {
          Object.assign(options, val);
        }
        if (typeof val === "function") {
          callback = val;
        }
        if (typeof duration === "object") {
          Object.assign(options, duration);
        }
        if (typeof duration === "function") {
          callback = duration;
        }
        state.isRunning = true;
        state.animation = state.animation || new Animation(this);
        state.animation.enqueue(options);
        return this;
      }
      fadeIn(duration, callback) {
        return this.fade(255, duration || 1e3, callback);
      }
      fadeOut(duration, callback) {
        return this.fade(0, duration || 1e3, callback);
      }
      blink(duration, callback) {
        const state = priv.get(this);
        this.stop();
        if (typeof duration === "function") {
          callback = duration;
          duration = null;
        }
        state.isRunning = true;
        state.interval = setInterval(() => {
          this.toggle();
          if (typeof callback === "function") {
            callback();
          }
        }, duration || 100);
        return this;
      }
      stop() {
        const state = priv.get(this);
        if (state.interval) {
          clearInterval(state.interval);
        }
        if (state.animation) {
          state.animation.stop();
        }
        state.interval = null;
        state.isRunning = false;
        return this;
      }
    };
    Led.prototype.strobe = Led.prototype.blink;
    if (!!process.env.IS_TEST_MODE) {
      Led.Controllers = Controllers;
      Led.purge = function() {
        priv.clear();
      };
    }
    module2.exports = Led;
  }
});

// node_modules/johnny-five/lib/led/leds.js
var require_leds = __commonJS({
  "node_modules/johnny-five/lib/led/leds.js"(exports, module2) {
    var Animation = require_animation();
    var Led = require_led();
    var Collection = require_collection();
    var Leds = class extends Collection {
      constructor(numsOrObjects) {
        super(numsOrObjects);
      }
      get type() {
        return Led;
      }
      [Animation.normalize](keyFrameSet) {
        return keyFrameSet.map((keyFrames, index) => {
          if (keyFrames !== null) {
            return this[index][Animation.normalize](keyFrames);
          }
          return keyFrames;
        });
      }
      [Animation.render](frames) {
        return this.each((led, i) => led[Animation.render]([frames[i]]));
      }
    };
    Collection.installMethodForwarding(Leds.prototype, Led.prototype, {
      skip: [Animation.normalize, Animation.render]
    });
    Collection.installCallbackReconciliation(Leds.prototype, ["pulse", "fade", "fadeIn", "fadeOut", "blink"]);
    Led.Collection = Leds;
    module2.exports = Leds;
  }
});

// node_modules/johnny-five/lib/led/rgbs.js
var require_rgbs = __commonJS({
  "node_modules/johnny-five/lib/led/rgbs.js"(exports, module2) {
    var Animation = require_animation();
    var Collection = require_collection();
    var RGB = require_rgb();
    var RGBs = class extends Collection {
      constructor(numsOrObjects) {
        super(numsOrObjects);
      }
      get type() {
        return RGB;
      }
      [Animation.normalize](keyFrameSet) {
        return keyFrameSet.map((keyFrames, index) => {
          if (keyFrames !== null) {
            return this[index][Animation.normalize](keyFrames);
          }
          return keyFrames;
        });
      }
      [Animation.render](frames) {
        return this.each((led, i) => led[Animation.render]([frames[i]]));
      }
    };
    Collection.installMethodForwarding(RGBs.prototype, RGB.prototype, {
      skip: [Animation.normalize, Animation.render]
    });
    Collection.installCallbackReconciliation(RGBs.prototype, ["blink"]);
    RGBs.prototype[Animation.keys] = RGB.colors;
    module2.exports = RGBs;
  }
});

// node_modules/johnny-five/lib/led/led-chars.js
var require_led_chars = __commonJS({
  "node_modules/johnny-five/lib/led/led-chars.js"(exports, module2) {
    module2.exports = {
      MATRIX_CHARS: {
        " ": [0, 0, 0, 0, 0, 0, 0, 0],
        "!": [4, 4, 4, 4, 0, 0, 4, 0],
        '"': [10, 10, 10, 0, 0, 0, 0, 0],
        "#": [10, 10, 31, 10, 31, 10, 10, 0],
        "$": [4, 15, 20, 14, 5, 30, 4, 0],
        "%": [24, 25, 2, 4, 8, 19, 3, 0],
        "&": [12, 18, 20, 8, 21, 18, 13, 0],
        "'": [12, 4, 8, 0, 0, 0, 0, 0],
        "(": [2, 4, 8, 8, 8, 4, 2, 0],
        ")": [8, 4, 2, 2, 2, 4, 8, 0],
        "*": [0, 4, 21, 14, 21, 4, 0, 0],
        "+": [0, 4, 4, 31, 4, 4, 0, 0],
        ",": [0, 0, 0, 0, 12, 4, 8, 0],
        "-": [0, 0, 0, 31, 0, 0, 0, 0],
        ".": [0, 0, 0, 0, 0, 12, 12, 0],
        "/": [0, 1, 2, 4, 8, 16, 0, 0],
        "[": [14, 8, 8, 8, 8, 8, 14, 0],
        "\\": [0, 16, 8, 4, 2, 1, 0, 0],
        "]": [14, 2, 2, 2, 2, 2, 14, 0],
        "^": [4, 10, 17, 0, 0, 0, 0, 0],
        "_": [0, 0, 0, 0, 0, 0, 31, 0],
        "`": [16, 8, 4, 0, 0, 0, 0, 0],
        ":": [0, 12, 12, 0, 12, 12, 0, 0],
        ";": [0, 12, 12, 0, 12, 4, 8, 0],
        "<": [2, 4, 8, 16, 8, 4, 2, 0],
        "=": [0, 0, 31, 0, 31, 0, 0, 0],
        ">": [8, 4, 2, 1, 2, 4, 8, 0],
        "?": [14, 17, 1, 2, 4, 0, 4, 0],
        "@": [14, 17, 1, 13, 21, 21, 14, 0],
        "{": [2, 4, 4, 8, 4, 4, 2, 0],
        "|": [4, 4, 4, 0, 4, 4, 4, 0],
        "}": [8, 4, 4, 2, 4, 4, 8, 0],
        "~": [8, 21, 2, 0, 0, 0, 0, 0],
        "0": [14, 17, 19, 21, 25, 17, 14, 0],
        "1": [4, 12, 4, 4, 4, 4, 14, 0],
        "2": [14, 17, 1, 2, 4, 8, 31, 0],
        "3": [31, 2, 4, 2, 1, 17, 14, 0],
        "4": [2, 6, 10, 18, 31, 2, 2, 0],
        "5": [31, 16, 30, 1, 1, 17, 14, 0],
        "6": [6, 8, 16, 30, 17, 17, 14, 0],
        "7": [31, 1, 2, 4, 4, 4, 4, 0],
        "8": [30, 17, 17, 14, 17, 17, 14, 0],
        "9": [14, 17, 17, 15, 1, 2, 12, 0],
        "A": [8, 20, 34, 62, 34, 34, 34, 34],
        "B": [60, 34, 34, 62, 34, 34, 60, 0],
        "C": [60, 64, 64, 64, 64, 64, 60, 0],
        "D": [124, 66, 66, 66, 66, 66, 124, 0],
        "E": [124, 64, 64, 124, 64, 64, 64, 124],
        "F": [124, 64, 64, 124, 64, 64, 64, 64],
        "G": [60, 64, 64, 64, 64, 68, 68, 60],
        "H": [68, 68, 68, 124, 68, 68, 68, 68],
        "I": [124, 16, 16, 16, 16, 16, 16, 124],
        "J": [60, 8, 8, 8, 8, 8, 72, 48],
        "K": [0, 36, 40, 48, 32, 48, 40, 36],
        "L": [64, 64, 64, 64, 64, 64, 64, 124],
        "M": [129, 195, 165, 153, 129, 129, 129, 129],
        "N": [0, 66, 98, 82, 74, 70, 66, 0],
        "O": [60, 66, 66, 66, 66, 66, 66, 60],
        "P": [60, 34, 34, 34, 60, 32, 32, 32],
        "Q": [28, 34, 34, 34, 34, 38, 34, 29],
        "R": [60, 34, 34, 34, 60, 36, 34, 33],
        "S": [0, 30, 32, 32, 62, 2, 2, 60],
        "T": [0, 62, 8, 8, 8, 8, 8, 8],
        "U": [66, 66, 66, 66, 66, 66, 34, 28],
        "V": [66, 66, 66, 66, 66, 66, 36, 24],
        "W": [0, 73, 73, 73, 73, 42, 28, 0],
        "X": [0, 65, 34, 20, 8, 20, 34, 65],
        "Y": [65, 34, 20, 8, 8, 8, 8, 8],
        "Z": [0, 127, 2, 4, 8, 16, 32, 127],
        "a": [0, 0, 14, 1, 15, 17, 15, 0],
        "b": [16, 16, 22, 25, 17, 17, 30, 0],
        "c": [0, 0, 14, 17, 16, 17, 14, 0],
        "d": [1, 1, 13, 19, 17, 17, 15, 0],
        "e": [0, 0, 14, 17, 31, 16, 14, 0],
        "f": [2, 5, 4, 14, 4, 4, 4, 0],
        "g": [0, 13, 19, 19, 13, 1, 14, 0],
        "h": [16, 16, 22, 25, 17, 17, 17, 0],
        "i": [4, 0, 12, 4, 4, 4, 14, 0],
        "j": [2, 0, 6, 2, 2, 18, 12, 0],
        "k": [8, 8, 9, 10, 12, 10, 9, 0],
        "l": [12, 4, 4, 4, 4, 4, 14, 0],
        "m": [0, 0, 26, 21, 21, 21, 21, 0],
        "n": [0, 0, 22, 25, 17, 17, 17, 0],
        "o": [0, 0, 14, 17, 17, 17, 14, 0],
        "p": [0, 22, 25, 25, 22, 16, 16, 0],
        "q": [0, 13, 19, 19, 13, 1, 1, 0],
        "r": [0, 0, 22, 25, 16, 16, 16, 0],
        "s": [0, 0, 15, 16, 30, 1, 31, 0],
        "t": [8, 8, 28, 8, 8, 9, 6, 0],
        "u": [0, 0, 18, 18, 18, 18, 13, 0],
        "v": [0, 0, 17, 17, 17, 10, 4, 0],
        "w": [0, 0, 17, 17, 21, 21, 10, 0],
        "x": [0, 0, 17, 10, 4, 10, 17, 0],
        "y": [0, 0, 17, 17, 19, 13, 1, 14],
        "z": [0, 0, 31, 2, 4, 8, 31, 0],
        euro: [14, 16, 124, 32, 124, 32, 16, 14],
        cent: [0, 60, 66, 64, 64, 82, 60, 32],
        angryface: [0, 102, 102, 0, 24, 36, 66, 129],
        circle: [60, 66, 129, 129, 129, 129, 66, 60],
        cdot: [60, 66, 129, 153, 153, 129, 66, 60],
        donut: [60, 126, 255, 231, 231, 255, 126, 60],
        equality: [0, 255, 255, 0, 0, 255, 255, 0],
        ball: [60, 126, 255, 255, 255, 255, 126, 60],
        thinsquare: [255, 129, 129, 129, 129, 129, 129, 255],
        thicksquare: [255, 255, 195, 195, 195, 195, 255, 255],
        centeredsquare1: [0, 0, 60, 60, 60, 60, 0, 0],
        centeredsquare2: [0, 0, 60, 60, 60, 60, 0, 0],
        arrowright: [0, 4, 6, 255, 255, 6, 4, 0],
        arrowleft: [0, 32, 96, 255, 255, 96, 32, 0],
        note: [4, 6, 7, 4, 60, 124, 124, 56],
        clock: [60, 82, 145, 145, 143, 129, 66, 60],
        heartoutline: [102, 153, 129, 129, 66, 36, 24, 0],
        heartfull: [102, 255, 255, 255, 126, 60, 24, 0],
        thincheck: [0, 0, 1, 2, 4, 136, 80, 32],
        thickcheck: [0, 1, 3, 6, 140, 216, 112, 32],
        speaker: [3, 7, 63, 63, 63, 63, 7, 3],
        sound: [0, 64, 128, 0, 192, 0, 128, 64],
        xbig: [195, 231, 126, 60, 60, 126, 231, 195],
        target: [60, 126, 195, 219, 219, 195, 126, 60],
        bell: [24, 60, 60, 60, 60, 126, 0, 24],
        smile: [0, 102, 102, 0, 0, 129, 66, 60],
        frown: [0, 102, 102, 0, 0, 60, 66, 129],
        winkright: [0, 96, 102, 0, 0, 129, 66, 60],
        winkleft: [0, 6, 102, 0, 0, 129, 66, 60],
        blink: [0, 0, 102, 0, 0, 129, 66, 60],
        laughing: [0, 102, 102, 0, 255, 129, 66, 60],
        tongueout: [0, 102, 102, 0, 0, 126, 10, 4],
        expressionless: [0, 102, 102, 0, 0, 255, 0, 0],
        ascprogress1: [128, 128, 128, 128, 128, 128, 128, 128],
        ascprogress2: [192, 192, 192, 192, 192, 192, 192, 192],
        ascprogress3: [224, 224, 224, 224, 224, 224, 224, 224],
        ascprogress4: [240, 240, 240, 240, 240, 240, 240, 240],
        ascprogress5: [248, 248, 248, 248, 248, 248, 248, 248],
        ascprogress6: [252, 252, 252, 252, 252, 252, 252, 252],
        ascprogress7: [254, 254, 254, 254, 254, 254, 254, 254],
        fullprogress: [255, 255, 255, 255, 255, 255, 255, 255],
        descprogress1: [127, 127, 127, 127, 127, 127, 127, 127],
        descprogress2: [63, 63, 63, 63, 63, 63, 63, 63],
        descprogress3: [31, 31, 31, 31, 31, 31, 31, 31],
        descprogress4: [15, 15, 15, 15, 15, 15, 15, 15],
        descprogress5: [7, 7, 7, 7, 7, 7, 7, 7],
        descprogress6: [3, 3, 3, 3, 3, 3, 3, 3],
        descprogress7: [1, 1, 1, 1, 1, 1, 1, 1],
        ascchart1: [255, 0, 0, 0, 0, 0, 0, 0],
        ascchart2: [255, 255, 0, 0, 0, 0, 0, 0],
        ascchart3: [255, 255, 255, 0, 0, 0, 0, 0],
        ascchart4: [255, 255, 255, 255, 0, 0, 0, 0],
        ascchart5: [255, 255, 255, 255, 255, 0, 0, 0],
        ascchart6: [255, 255, 255, 255, 255, 255, 0, 0],
        ascchart7: [255, 255, 255, 255, 255, 255, 255, 0],
        ascchart8: [255, 255, 255, 255, 255, 255, 255, 255],
        descchart1: [0, 255, 255, 255, 255, 255, 255, 255],
        descchart2: [0, 0, 255, 255, 255, 255, 255, 255],
        descchart3: [0, 0, 0, 255, 255, 255, 255, 255],
        descchart4: [0, 0, 0, 0, 255, 255, 255, 255],
        descchart5: [0, 0, 0, 0, 0, 255, 255, 255],
        descchart6: [0, 0, 0, 0, 0, 0, 255, 255],
        descchart7: [0, 0, 0, 0, 0, 0, 0, 255],
        descchart8: [0, 0, 0, 0, 0, 0, 0, 0],
        borderleft1: [1, 1, 1, 1, 1, 1, 1, 1],
        borderleft2: [3, 2, 2, 2, 2, 2, 2, 3],
        borderleft3: [7, 4, 4, 4, 4, 4, 4, 7],
        borderleft4: [15, 8, 8, 8, 8, 8, 8, 15],
        borderleft5: [31, 16, 16, 16, 16, 16, 16, 31],
        borderleft6: [63, 32, 32, 32, 32, 32, 32, 63],
        borderleft7: [127, 64, 64, 64, 64, 64, 64, 127],
        borderleft8: [255, 128, 128, 128, 128, 128, 128, 255],
        bordertopbottom5: [255, 0, 0, 0, 0, 0, 0, 255],
        borderright1: [128, 128, 128, 128, 128, 128, 128, 128],
        borderright2: [192, 64, 64, 64, 64, 64, 64, 192],
        borderright3: [224, 32, 32, 32, 32, 32, 32, 224],
        borderright4: [240, 16, 16, 16, 16, 16, 16, 240],
        borderright5: [248, 8, 8, 8, 8, 8, 8, 248],
        borderright6: [252, 4, 4, 4, 4, 4, 4, 252],
        borderright7: [254, 2, 2, 2, 2, 2, 2, 254],
        borderright8: [255, 1, 1, 1, 1, 1, 1, 255],
        box1: [224, 224, 224, 0, 0, 0, 0, 0],
        box2: [7, 7, 7, 0, 0, 0, 0, 0],
        box3: [231, 231, 231, 0, 0, 0, 0, 0],
        box4: [0, 0, 0, 0, 0, 7, 7, 7],
        box5: [7, 7, 7, 0, 0, 7, 7, 7],
        box6: [224, 224, 224, 0, 0, 7, 7, 7],
        box7: [231, 231, 231, 0, 0, 7, 7, 7],
        box8: [0, 0, 0, 0, 0, 224, 224, 224],
        box9: [7, 7, 7, 0, 0, 224, 224, 224],
        box10: [224, 224, 224, 0, 0, 224, 224, 224],
        box11: [231, 231, 231, 0, 0, 224, 224, 224],
        box12: [0, 0, 0, 0, 0, 231, 231, 231],
        box13: [7, 7, 7, 0, 0, 231, 231, 231],
        box14: [224, 224, 224, 0, 0, 231, 231, 231],
        box15: [231, 231, 231, 0, 0, 231, 231, 231],
        checkerboard1: [170, 85, 170, 85, 170, 85, 170, 85],
        checkerboard2: [85, 170, 85, 170, 85, 170, 85, 170],
        checkerboard3: [93, 234, 87, 186, 85, 238, 85, 187],
        checkerboard4: [204, 51, 51, 204, 204, 51, 51, 204],
        checkerboard5: [204, 204, 51, 51, 204, 204, 51, 51],
        checkerboard6: [51, 204, 204, 51, 51, 204, 204, 51],
        checkerboard7: [51, 51, 204, 204, 51, 51, 204, 204],
        pointerright: [32, 48, 56, 60, 60, 56, 48, 32],
        pointerup: [0, 0, 24, 60, 126, 255, 0, 0],
        pointerleft: [4, 12, 28, 60, 60, 28, 12, 4],
        pointerdown: [0, 0, 255, 126, 60, 24, 0, 0],
        arrowne: [0, 62, 6, 10, 18, 34, 64, 128],
        arrownw: [0, 124, 96, 80, 72, 68, 2, 1],
        arrowsw: [1, 2, 68, 72, 80, 96, 124, 0],
        arrowse: [128, 64, 34, 18, 10, 6, 62, 0],
        dice1: [0, 0, 0, 24, 24, 0, 0, 0],
        dice2: [192, 192, 0, 0, 0, 0, 3, 3],
        dice3: [192, 192, 0, 24, 24, 0, 3, 3],
        dice4: [195, 195, 0, 0, 0, 0, 195, 195],
        dice5: [195, 195, 0, 24, 24, 0, 195, 195],
        dice6: [195, 195, 0, 195, 195, 0, 195, 195],
        outlinedplus1: [60, 36, 231, 129, 129, 231, 36, 60],
        outlinedplus2: [255, 231, 231, 129, 129, 231, 231, 255],
        twoboxes1: [240, 144, 144, 240, 15, 9, 9, 15],
        twoboxes2: [240, 144, 144, 254, 18, 18, 30, 0],
        twoboxes3: [240, 144, 188, 244, 36, 60, 0, 0],
        twoboxes4: [240, 248, 216, 248, 120, 0, 0, 0],
        twoboxes5: [15, 9, 9, 15, 240, 144, 144, 240],
        fourboxes: [255, 153, 153, 255, 255, 153, 153, 255],
        chain1: [240, 248, 216, 248, 120, 0, 0, 0],
        chain2: [240, 144, 188, 244, 47, 61, 9, 15]
      },
      SPECIAL_CHARS: {
        "0": [60, 102, 102, 102, 102, 102, 102, 60],
        "1": [24, 56, 120, 24, 24, 24, 24, 24],
        "2": [60, 102, 6, 12, 24, 48, 96, 126],
        "3": [60, 102, 6, 28, 6, 6, 102, 60],
        "4": [14, 30, 54, 102, 102, 126, 6, 6],
        "5": [126, 96, 96, 124, 6, 6, 102, 60],
        "6": [60, 102, 96, 124, 102, 102, 102, 60],
        "7": [126, 126, 6, 12, 24, 24, 24, 24],
        "8": [60, 102, 102, 60, 102, 102, 102, 60],
        "9": [60, 102, 102, 62, 6, 6, 102, 60],
        "10": [94, 82, 82, 82, 82, 94, 0, 255],
        "11": [36, 36, 36, 36, 36, 36, 0, 255],
        "12": [94, 66, 68, 72, 80, 94, 0, 255],
        "13": [94, 66, 78, 66, 66, 94, 0, 255],
        "14": [82, 82, 94, 66, 66, 66, 0, 255],
        "15": [94, 80, 94, 66, 66, 94, 0, 255],
        "16": [94, 80, 94, 82, 82, 94, 0, 255],
        "17": [94, 66, 68, 72, 72, 72, 0, 255],
        "18": [94, 82, 94, 82, 82, 94, 0, 255],
        "19": [94, 82, 94, 66, 66, 94, 0, 255]
      },
      DIGIT_CHARS: {
        "0": 126,
        "1": 48,
        "2": 109,
        "3": 121,
        "4": 51,
        "5": 91,
        "6": 95,
        "7": 112,
        "8": 127,
        "9": 123,
        " ": 0,
        ".": 128,
        ":": 255,
        "!": 176,
        "A": 119,
        "a": 125,
        "B": 127,
        "b": 31,
        "C": 78,
        "c": 13,
        "D": 126,
        "d": 61,
        "E": 79,
        "e": 111,
        "F": 71,
        "f": 71,
        "G": 94,
        "g": 123,
        "H": 55,
        "h": 23,
        "I": 48,
        "i": 16,
        "J": 60,
        "j": 56,
        "K": 55,
        "k": 23,
        "L": 14,
        "l": 6,
        "M": 85,
        "m": 85,
        "N": 21,
        "n": 21,
        "O": 126,
        "o": 29,
        "P": 103,
        "p": 103,
        "Q": 115,
        "q": 115,
        "R": 119,
        "r": 5,
        "S": 91,
        "s": 91,
        "T": 70,
        "t": 15,
        "U": 62,
        "u": 28,
        "V": 39,
        "v": 35,
        "W": 63,
        "w": 43,
        "X": 37,
        "x": 37,
        "Y": 59,
        "y": 51,
        "Z": 109,
        "z": 109
      }
    };
  }
});

// node_modules/johnny-five/lib/led/ledcontrol.js
var require_ledcontrol = __commonJS({
  "node_modules/johnny-five/lib/led/ledcontrol.js"(exports, module2) {
    var Board = require_board();
    var ledCharacters = require_led_chars();
    var priv = new Map();
    var LedControl = class {
      constructor(options) {
        Board.Component.call(this, options = Board.Options(options));
        Board.Controller.call(this, Controllers, options);
        this.digitOrder = 1;
        if (!this.isMatrix) {
          this.colon = options.colon || false;
        }
        const devices = options.devices || (options.addresses ? options.addresses.length : 1);
        this.memory = Array(64).fill(0);
        options.dims = options.dims || LedControl.MATRIX_DIMENSIONS["8x8"];
        if (typeof options.dims === "string") {
          options.dims = LedControl.MATRIX_DIMENSIONS[options.dims];
        }
        if (Array.isArray(options.dims)) {
          options.dims = {
            rows: options.dims[0],
            columns: options.dims[1]
          };
        }
        const state = {
          devices,
          digits: options.digits || 8,
          isMatrix: !!options.isMatrix,
          isBicolor: !!options.isBicolor,
          rows: options.dims.rows,
          columns: options.dims.columns
        };
        if (!(state.columns === 8 || state.columns === 16) || !(state.rows === 8 || state.rows === 16) || state.columns + state.rows === 32) {
          throw new Error("Invalid matrix dimensions specified: must be 8x8, 16x8 or 8x16");
        }
        Object.defineProperties(this, {
          devices: {
            get() {
              return state.devices;
            }
          },
          digits: {
            get() {
              return state.digits;
            }
          },
          isMatrix: {
            get() {
              return state.isMatrix;
            }
          },
          isBicolor: {
            get() {
              return state.isBicolor;
            }
          },
          rows: {
            get() {
              return state.rows;
            }
          },
          columns: {
            get() {
              return state.columns;
            }
          }
        });
        priv.set(this, state);
        this.initialize(options);
      }
      each(callbackfn) {
        for (let i = 0; i < this.devices; i++) {
          callbackfn.call(this, i);
        }
      }
      on(addr) {
        if (typeof addr === "undefined") {
          this.each(function(device) {
            this.on(device);
          });
        } else {
          this.send(addr, this.OP.SHUTDOWN || LedControl.OP.SHUTDOWN, 1);
        }
        return this;
      }
      off(addr) {
        if (typeof addr === "undefined") {
          this.each(function(device) {
            this.off(device);
          });
        } else {
          this.send(addr, this.OP.SHUTDOWN || LedControl.OP.SHUTDOWN, 0);
        }
        return this;
      }
      digit(addr, position, chr) {
        let args;
        let offset;
        let index;
        let character;
        let value;
        let hasDecimal = false;
        if (arguments.length < 3) {
          args = Array.from(arguments);
          this.each(function(device) {
            this.digit.apply(this, (args.unshift(device), args));
          });
          return this;
        }
        if (this.isMatrix) {
          this.draw.apply(this, arguments);
          return this;
        }
        offset = addr * this.digits;
        character = String(chr);
        position = Number(position);
        index = position;
        if (this.digitOrder === -1) {
          index = this.digits - index - 1;
        }
        if (character.length === 2 && character[1] === ".") {
          hasDecimal = true;
          character = character[0];
        }
        value = LedControl.DIGIT_CHARS[character];
        if (!value) {
          value = Math.abs(Number(character));
        }
        if (hasDecimal) {
          value = value | LedControl.DIGIT_CHARS["."];
        }
        this.memory[offset + index] = value;
        this.sendDigit(addr, index, value);
        return this;
      }
      print(message, options) {
        const rdigchars = /([0-9A-Za-z][.]|[0-9A-Za-z:]|[\s])/g;
        let characters;
        options = options || {
          device: 0
        };
        if (this.isMatrix) {
          throw new Error("Led.Matrix does not yet support the print method");
        }
        if (typeof message !== "string") {
          message = String(message);
        }
        characters = message.match(rdigchars);
        if (this.colon) {
          if (characters.length > 2 && (characters[2] !== ":" && characters[2] !== " ")) {
            characters.splice(2, 0, " ");
          }
        }
        (characters || []).forEach(function(character, position) {
          this.digit(options.device, position, character);
        }, this);
        return this;
      }
      brightness(addr, val) {
        if (arguments.length === 1) {
          val = addr;
          this.each(function(device) {
            this.brightness(device, val);
          });
        } else {
          this.send(addr, this.OP.BRIGHTNESS || LedControl.OP.BRIGHTNESS, Board.map(val, 0, 100, 0, 15));
        }
        return this;
      }
      column(addr, col, value) {
        let state;
        if (!this.isMatrix) {
          throw new Error("The `column` method is only supported for Matrix devices");
        }
        if (arguments.length === 2) {
          value = col;
          col = addr;
          this.each(function(device) {
            this.column(device, col, value);
          });
        } else {
          for (let row = 0; row < this.rows; row++) {
            state = value >> this.rows - 1 - row;
            state = state & 1;
            this.led(addr, row, col, state);
          }
        }
        return this;
      }
      draw(addr, chr) {
        let character;
        if (arguments.length === 1) {
          chr = addr;
          this.each(function(device) {
            this.draw(device, chr);
          });
        } else {
          if (this.isMatrix) {
            if (Array.isArray(chr)) {
              character = chr;
            } else {
              character = ledCharacters.MATRIX_CHARS[chr];
            }
            if (character !== void 0) {
              if (character.length !== this.rows && character.length !== this.columns) {
                throw new Error(`Invalid character: ${character}`);
              }
              const charLength = character.length;
              for (let i = 0; i < this.rows - charLength; i++) {
                character.push(0);
              }
              character.forEach(function(rowData, idx) {
                this.row(addr, idx, rowData);
              }, this);
            }
          } else {
            this.digit.apply(this, arguments);
          }
        }
        return this;
      }
      device(addr) {
        const bound = {};
        Object.keys(LedControl.prototype).forEach((key) => {
          bound[key] = this[key].bind(this, addr);
        });
        Object.getOwnPropertyNames(this).forEach((key) => {
          if (this[key] && typeof this[key] === "function") {
            bound[key] = this[key].bind(this, addr);
          }
        });
        return bound;
      }
    };
    var addresses = new Set([112, 113, 114, 115, 116, 117, 118, 119]);
    var Controllers = {
      HT16K33: {
        OP: {
          value: {
            SHUTDOWN: 32,
            BRIGHTNESS: 224,
            BLINK: 128
          }
        },
        initialize: {
          writable: true,
          value(options) {
            const state = priv.get(this);
            const available = Array.from(addresses);
            if (available.length === 0) {
              throw new Error("There are no available HT16K33 controller addresses");
            }
            this.addresses = options.addresses || (options.address ? [options.address] : null);
            if (this.addresses === null) {
              this.addresses = available.slice(0, state.devices);
            }
            this.addresses.forEach((address) => {
              if (!addresses.has(address)) {
                throw new Error(`Invalid HT16K33 controller address: ${address}`);
              }
              addresses.delete(address);
            });
            this.rotation = options.rotation || 1;
            if (this.columns === 16 && !options.rotation) {
              this.rotation = 0;
            }
            this.buffer = Array(this.rows).fill([]);
            if (!this.isMatrix) {
              this.colon = true;
            }
            options.addresses = this.addresses;
            this.io.i2cConfig(options);
            this.each(function(device) {
              this.on(device);
              this.blink(device, false);
              this.brightness(device, 100);
              this.clear(device);
            });
          }
        },
        blink: {
          writable: true,
          value(addr, val) {
            if (arguments.length === 1) {
              val = addr;
              this.each(function(device) {
                this.blink(device, val);
              });
            } else {
              let _val = null;
              switch (val) {
                case false:
                  _val = 0;
                  break;
                case "slow":
                  _val = 6;
                  break;
                case "normal":
                  _val = 4;
                  break;
                case "fast":
                  _val = 2;
                  break;
              }
              if (_val == null) {
                return;
              }
              this.send(addr, this.OP.BLINK | 1, _val);
            }
            return this;
          }
        },
        clear: {
          writable: true,
          value(addr) {
            let offset;
            if (typeof addr === "undefined") {
              this.each(function(device) {
                this.clear(device);
              });
            } else {
              offset = addr * this.columns;
              for (let i = 0; i < this.rows; i++) {
                this.memory[offset + i] = 0;
                this.buffer[addr][i] = 0;
              }
              this.writeDisplay(addr);
            }
            return this;
          }
        },
        led: {
          writable: true,
          value(addr, row, col, state) {
            if (arguments.length === 3) {
              state = col;
              col = row;
              row = addr;
              this.each(function(device) {
                this.led(device, row, col, state);
              });
              return this;
            } else {
              let x = col;
              let y = row;
              let tmp;
              let rows = this.rows;
              let columns = this.columns;
              if (y < 0 || y >= rows) {
                return this;
              }
              if (x < 0 || x >= columns) {
                return this;
              }
              switch (this.rotation) {
                case 1:
                  columns = this.rows;
                  rows = this.columns;
                  tmp = x;
                  x = y;
                  y = tmp;
                  x = columns - x - 1;
                  break;
                case 2:
                  x = columns - x - 1;
                  y = rows - y - 1;
                  break;
                case 3:
                  columns = this.rows;
                  rows = this.columns;
                  tmp = x;
                  x = y;
                  y = tmp;
                  y = rows - y - 1;
                  break;
              }
              if (!this.isBicolor) {
                if (columns === 8 && rows === 8) {
                  x += columns - 1;
                  x %= columns;
                }
                if (state) {
                  this.buffer[addr][y] |= 1 << x;
                } else {
                  this.buffer[addr][y] &= ~(1 << x);
                }
              } else {
                if (state === LedControl.COLORS.GREEN) {
                  this.buffer[addr][y] |= 1 << x;
                  this.buffer[addr][y] &= ~(1 << x + 8);
                } else if (state === LedControl.COLORS.YELLOW) {
                  this.buffer[addr][y] |= 1 << x + 8 | 1 << x;
                } else if (state === LedControl.COLORS.RED) {
                  this.buffer[addr][y] |= 1 << x + 8;
                  this.buffer[addr][y] &= ~(1 << x);
                } else {
                  this.buffer[addr][y] &= ~(1 << x) & ~(1 << x + 8);
                }
              }
              this.writeDisplay(addr);
            }
            return this;
          }
        },
        writeDisplay: {
          writable: true,
          value(addr) {
            const bytes = [0];
            for (let i = 0; i < 8; i++) {
              bytes.push(this.buffer[addr][i] & 255);
              bytes.push(this.buffer[addr][i] >> 8);
            }
            this.io.i2cWrite(this.addresses[addr], bytes);
          }
        },
        row: {
          writable: true,
          value(addr, row, val) {
            if (!this.isMatrix) {
              throw new Error("The `row` method is only supported for Matrix devices");
            }
            if (typeof val === "number") {
              val = `0000000000000000${parseInt(val, 10).toString(2)}`.substr(0 - this.columns, this.columns);
            }
            if (arguments.length === 2) {
              val = row;
              row = addr;
              this.each(function(device) {
                this.row(device, row, val);
              });
            } else {
              for (let i = 0; i < this.columns; i++) {
                this.led(addr, row, i, parseInt(val[i], 10));
              }
            }
            return this;
          }
        },
        scanLimit: {
          writable: true,
          value() {
            throw new Error("The `scanLimit` method is not implemented for HT16K33 devices");
          }
        },
        send: {
          writable: true,
          value(addr, opcode, data) {
            if (arguments.length !== 3) {
              throw new Error("The `send` method expects three arguments: device, opcode, data");
            }
            this.io.i2cWrite(this.addresses[addr], [opcode | data]);
            return this;
          }
        },
        sendDigit: {
          writable: true,
          value(addr, index, code) {
            if (code > 0 && code < 255) {
              code = `00000000${code.toString(2)}`.slice(-8).split("");
              code = code.shift() + code.reverse().join("");
              code = parseInt(code, 2);
            }
            this.buffer[addr][index] = code;
            this.writeDisplay(addr);
            return this;
          }
        }
      },
      DEFAULT: {
        OP: {
          value: {}
        },
        initialize: {
          writable: true,
          value({ pins }) {
            this.pins = {
              data: pins.data,
              clock: pins.clock,
              cs: pins.cs || pins.latch
            };
            ["data", "clock", "cs"].forEach(function(pin) {
              this.io.pinMode(this.pins[pin], this.io.MODES.OUTPUT);
            }, this);
            this.digitOrder = -1;
            this.digitOrder = -1;
            for (let device = 0; device < this.devices; device++) {
              if (this.isMatrix) {
                this.send(device, LedControl.OP.DECODING, 0);
              }
              this.send(device, LedControl.OP.BRIGHTNESS, 3);
              this.send(device, LedControl.OP.SCANLIMIT, 7);
              this.send(device, LedControl.OP.SHUTDOWN, 1);
              this.send(device, LedControl.OP.DISPLAYTEST, 0);
              this.clear(device);
              this.on(device);
            }
            return this;
          }
        },
        clear: {
          writable: true,
          value(addr) {
            let offset;
            if (typeof addr === "undefined") {
              this.each(function(device) {
                this.clear(device);
              });
            } else {
              offset = addr * 8;
              for (let i = 0; i < 8; i++) {
                this.memory[offset + i] = 0;
                this.send(addr, i + 1, 0);
              }
            }
            return this;
          }
        },
        sendDigit: {
          writable: true,
          value(addr, index, code) {
            this.send(addr, index + 1, code);
            return this;
          }
        },
        led: {
          writable: true,
          value(addr, row, col, state) {
            let offset;
            let val;
            if (arguments.length === 3) {
              state = col;
              col = row;
              row = addr;
              this.each(function(device) {
                this.led(device, row, col, state);
              });
            } else {
              offset = addr * this.columns;
              val = 128 >> col;
              if (state) {
                this.memory[offset + row] = this.memory[offset + row] | val;
              } else {
                val = ~val;
                this.memory[offset + row] = this.memory[offset + row] & val;
              }
              this.send(addr, row + 1, this.memory[offset + row]);
            }
            return this;
          }
        },
        row: {
          writable: true,
          value(addr, row, val) {
            if (!this.isMatrix) {
              throw new Error("The `row` method is only supported for Matrix devices");
            }
            let offset;
            if (typeof val === "string") {
              val = parseInt(val, 2);
            }
            if (arguments.length === 2) {
              val = row;
              row = addr;
              this.each(function(device) {
                this.row(device, row, val);
              });
            } else {
              offset = addr * this.columns;
              this.memory[offset + row] = val;
              this.send(addr, row + 1, this.memory[offset + row]);
            }
            return this;
          }
        },
        scanLimit: {
          writable: true,
          value(addr, limit) {
            if (arguments.length === 1) {
              limit = addr;
              this.each(function(device) {
                this.scanLimit(device, limit);
              });
            } else {
              this.send(addr, LedControl.OP.SCANLIMIT, limit);
            }
            return this;
          }
        },
        send: {
          writable: true,
          value(addr, opcode, data) {
            if (arguments.length !== 3) {
              throw new Error("`send` expects three arguments: device, opcode, data");
            }
            const offset = addr * 2;
            const maxBytes = this.devices * 2;
            const spiData = [];
            if (addr < this.devices) {
              for (let i = 0; i < maxBytes; i++) {
                spiData[i] = 0;
              }
              spiData[offset + 1] = opcode;
              spiData[offset] = data;
              this.io.digitalWrite(this.pins.cs, this.io.LOW);
              for (let j = maxBytes; j > 0; j--) {
                this.board.shiftOut(this.pins.data, this.pins.clock, spiData[j - 1]);
              }
              this.io.digitalWrite(this.pins.cs, this.io.HIGH);
            }
            return this;
          }
        }
      }
    };
    LedControl.DEFAULTS = {
      DECODING: 0,
      BRIGHTNESS: 3,
      SCANLIMIT: 7,
      SHUTDOWN: 1,
      DISPLAYTEST: 0
    };
    Object.freeze(LedControl.DEFAULTS);
    LedControl.OP = {};
    LedControl.OP.NOOP = 0;
    LedControl.OP.DIGIT0 = 1;
    LedControl.OP.DIGIT1 = 2;
    LedControl.OP.DIGIT2 = 3;
    LedControl.OP.DIGIT3 = 4;
    LedControl.OP.DIGIT4 = 5;
    LedControl.OP.DIGIT5 = 6;
    LedControl.OP.DIGIT6 = 7;
    LedControl.OP.DIGIT7 = 8;
    LedControl.OP.DECODEMODE = 9;
    LedControl.OP.INTENSITY = 10;
    LedControl.OP.SCANLIMIT = 11;
    LedControl.OP.SHUTDOWN = 12;
    LedControl.OP.DISPLAYTEST = 15;
    LedControl.OP.BRIGHTNESS = LedControl.OP.INTENSITY;
    LedControl.OP.DECODING = LedControl.OP.DECODEMODE;
    LedControl.OP.DISPLAY = LedControl.OP.DISPLAYTEST;
    LedControl.OP.POWERDOWN = LedControl.OP.SHUTDOWN;
    Object.freeze(LedControl.OP);
    LedControl.COLORS = {
      RED: 1,
      YELLOW: 2,
      GREEN: 3
    };
    LedControl.DIRECTIONS = {
      UP: 1,
      RIGHT: 2,
      DOWN: 3,
      LEFT: 4,
      1: "UP",
      2: "RIGHT",
      3: "DOWN",
      4: "LEFT"
    };
    Object.freeze(LedControl.DIRECTIONS);
    var digits = [
      [224, 160, 160, 160, 160, 160, 224, 0],
      [64, 192, 64, 64, 64, 64, 224, 0],
      [224, 32, 32, 224, 128, 128, 224, 0],
      [224, 32, 32, 96, 32, 32, 224, 0],
      [32, 96, 160, 224, 32, 32, 32, 0],
      [224, 128, 128, 224, 32, 32, 224, 0],
      [224, 128, 128, 224, 160, 160, 224, 0],
      [224, 32, 32, 32, 32, 32, 32, 0],
      [224, 160, 160, 64, 160, 160, 224, 0],
      [224, 160, 160, 224, 32, 32, 224, 0]
    ];
    var charName = "";
    for (let i = 0; i < 10; i++) {
      for (let k = 0; k < 10; k++) {
        charName = `${i}${k}`;
        ledCharacters.MATRIX_CHARS[charName] = [];
        for (let j = 0; j < 8; j++) {
          ledCharacters.MATRIX_CHARS[charName][j] = digits[i][j] | digits[k][j] >>> 4;
        }
      }
    }
    LedControl.MATRIX_DIMENSIONS = {
      "16x8": {
        rows: 16,
        columns: 8
      },
      "8x16": {
        rows: 8,
        columns: 16
      },
      "8x8": {
        rows: 8,
        columns: 8
      }
    };
    LedControl.MATRIX_CHARS = ledCharacters.MATRIX_CHARS;
    LedControl.DIGIT_CHARS = ledCharacters.DIGIT_CHARS;
    if (!!process.env.IS_TEST_MODE) {
      LedControl.Controllers = Controllers;
      LedControl.purge = () => {
        addresses = new Set([112, 113, 114, 115, 116, 117, 118, 119]);
        priv.clear();
      };
    }
    module2.exports = LedControl;
  }
});

// node_modules/johnny-five/lib/led/matrix.js
var require_matrix = __commonJS({
  "node_modules/johnny-five/lib/led/matrix.js"(exports, module2) {
    var LedControl = require_ledcontrol();
    var Matrix = class extends LedControl {
      constructor(options) {
        options.isMatrix = true;
        super(options);
      }
      static get CHARS() {
        return LedControl.MATRIX_CHARS;
      }
    };
    module2.exports = Matrix;
  }
});

// node_modules/johnny-five/lib/led/digits.js
var require_digits = __commonJS({
  "node_modules/johnny-five/lib/led/digits.js"(exports, module2) {
    var LedControl = require_ledcontrol();
    var Digits = class extends LedControl {
      constructor(options) {
        options.isMatrix = false;
        super(options);
      }
      static get CHARS() {
        return LedControl.DIGIT_CHARS;
      }
    };
    module2.exports = Digits;
  }
});

// node_modules/johnny-five/lib/led/index.js
var require_led2 = __commonJS({
  "node_modules/johnny-five/lib/led/index.js"(exports, module2) {
    var Led = require_led();
    Led.Collection = require_leds();
    Led.RGB = require_rgb();
    Led.RGB.Collection = require_rgbs();
    Led.Matrix = require_matrix();
    Led.Digits = require_digits();
    module2.exports = Led;
  }
});

// node_modules/johnny-five/lib/light.js
var require_light = __commonJS({
  "node_modules/johnny-five/lib/light.js"(exports, module2) {
    var Board = require_board();
    var EVS = require_evshield();
    var Withinable = require_withinable();
    var { uint16, toFixed, scale } = require_fn();
    var priv = new Map();
    var Controllers = {
      DEFAULT: {
        initialize: {
          value(options, callback) {
            this.io.pinMode(this.pin, this.io.MODES.ANALOG);
            this.io.analogRead(this.pin, callback);
          }
        },
        toIntensityLevel: {
          value(value) {
            return toFixed(scale(value, 0, 1023, 0, 100) / 100, 2);
          }
        }
      },
      EVS_EV3: {
        initialize: {
          value(options, callback) {
            const state = priv.get(this);
            if (options.mode) {
              options.mode = options.mode.toUpperCase();
            }
            state.mode = options.mode === "REFLECTED" ? EVS.Type_EV3_LIGHT_REFLECTED : EVS.Type_EV3_LIGHT;
            state.shield = EVS.shieldPort(options.pin);
            state.ev3 = new EVS(Object.assign(options, {
              io: this.io
            }));
            state.ev3.setup(state.shield, EVS.Type_EV3);
            state.ev3.write(state.shield, 129 + state.shield.offset, state.mode);
            state.ev3.read(state.shield, EVS.Light, EVS.Light_Bytes, (data) => {
              const value = data[0] | data[1] << 8;
              callback(value);
            });
          }
        },
        toIntensityLevel: {
          value(value) {
            return toFixed(value / 100, 2);
          }
        }
      },
      EVS_NXT: {
        initialize: {
          value(options, callback) {
            const state = priv.get(this);
            if (options.mode) {
              options.mode = options.mode.toUpperCase();
            }
            state.mode = options.mode === "REFLECTED" ? EVS.Type_NXT_LIGHT_REFLECTED : EVS.Type_NXT_LIGHT;
            state.shield = EVS.shieldPort(options.pin);
            state.ev3 = new EVS(Object.assign(options, {
              io: this.io
            }));
            state.ev3.setup(state.shield, state.mode);
            state.ev3.read(state.shield, state.shield.analog, EVS.Analog_Bytes, (data) => {
              callback(data[0] | data[1] << 8);
            });
          }
        },
        toIntensityLevel: {
          value(value) {
            return toFixed(scale(value, 0, 1023, 100, 0) / 100, 2);
          }
        }
      },
      TSL2561: {
        ADDRESSES: {
          value: [41, 57, 73]
        },
        REGISTER: {
          value: {
            CONTROL: 0,
            TIMING: 1,
            READ: 44
          }
        },
        initialize: {
          value(options, callback) {
            const command = (byte) => byte | 128;
            const { Drivers } = require_sip();
            const address = Drivers.addressResolver(this, options);
            this.io.i2cConfig(options);
            this.io.i2cWriteReg(address, command(this.REGISTER.CONTROL), 3);
            const LUX_SCALE = 14;
            const RATIO_SCALE = 9;
            const K1T = 64;
            const B1T = 498;
            const M1T = 446;
            const K2T = 128;
            const B2T = 532;
            const M2T = 721;
            const K3T = 192;
            const B3T = 575;
            const M3T = 891;
            const K4T = 256;
            const B4T = 624;
            const M4T = 1022;
            const K5T = 312;
            const B5T = 367;
            const M5T = 508;
            const K6T = 410;
            const B6T = 210;
            const M6T = 251;
            const K7T = 666;
            const B7T = 24;
            const M7T = 18;
            const K8T = 666;
            const B8T = 0;
            const M8T = 0;
            const GAIN_1X = 0;
            const GAIN_16X = 16;
            const TintMs = [
              13,
              101,
              402
            ];
            const TintDelayMs = [
              15,
              120,
              450
            ];
            const chScales = [
              29975,
              4071,
              65536
            ];
            let gain = GAIN_16X;
            let TintIndex = 0;
            let Tint = TintMs[TintIndex];
            let lux = 0;
            Object.defineProperties(this, {
              gain: {
                get() {
                  return gain;
                },
                set(value) {
                  if (value !== GAIN_1X && value !== GAIN_16X) {
                    throw new RangeError("Invalid gain. Expected one of: 0, 16");
                  }
                  gain = value;
                  this.io.i2cWriteReg(address, command(this.REGISTER.TIMING), TintIndex | gain);
                }
              },
              integration: {
                get() {
                  return Tint;
                },
                set(value) {
                  TintIndex = TintMs.indexOf(value);
                  if (TintIndex === -1) {
                    throw new RangeError("Invalid integration. Expected one of: 13, 101, 402");
                  }
                  Tint = value;
                  this.io.i2cWriteReg(address, command(this.REGISTER.TIMING), TintIndex | gain);
                }
              },
              lux: {
                get() {
                  return lux;
                }
              }
            });
            this.gain = gain;
            this.integration = Tint;
            const read = () => {
              setTimeout(() => {
                this.io.i2cReadOnce(address, command(this.REGISTER.READ), 4, (data) => {
                  let ch0 = uint16(data[1], data[0]);
                  let ch1 = uint16(data[3], data[2]);
                  let b = 0;
                  let m = 0;
                  let chScale = chScales[TintIndex];
                  if (!gain) {
                    chScale = chScale << 4;
                  }
                  ch0 = ch0 * chScale >> 10;
                  ch1 = ch1 * chScale >> 10;
                  let ratio1 = 0;
                  if (ch0) {
                    ratio1 = (ch1 << RATIO_SCALE + 1) / ch0;
                  }
                  ratio1 = Math.round(ratio1);
                  const ratio = ratio1 + 1 >> 1;
                  if (ratio >= 0 && ratio <= K1T) {
                    b = B1T;
                    m = M1T;
                  } else if (ratio <= K2T) {
                    b = B2T;
                    m = M2T;
                  } else if (ratio <= K3T) {
                    b = B3T;
                    m = M3T;
                  } else if (ratio <= K4T) {
                    b = B4T;
                    m = M4T;
                  } else if (ratio <= K5T) {
                    b = B5T;
                    m = M5T;
                  } else if (ratio <= K6T) {
                    b = B6T;
                    m = M6T;
                  } else if (ratio <= K7T) {
                    b = B7T;
                    m = M7T;
                  } else if (ratio > K8T) {
                    b = B8T;
                    m = M8T;
                  }
                  let temp = ch0 * b - ch1 * m;
                  if (temp < 0) {
                    temp = 0;
                  }
                  temp += 1 << LUX_SCALE - 1;
                  lux = temp >>> LUX_SCALE;
                  callback(lux);
                  read();
                });
              }, TintDelayMs[TintIndex]);
            };
            read();
          }
        },
        toLux: {
          value(value) {
            return value;
          }
        },
        toIntensityLevel: {
          value(value) {
            return toFixed(scale(value, 0, 17e3, 0, 100) / 100, 2);
          }
        }
      },
      BH1750: {
        ADDRESSES: {
          value: [35, 92]
        },
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            const address = Drivers.addressResolver(this, options);
            const mode = options.mode || 16;
            this.io.i2cConfig(options);
            this.io.i2cWrite(address, mode);
            const read = () => {
              setTimeout(() => {
                this.io.i2cReadOnce(address, 2, (data) => {
                  callback(uint16(data[0], data[1]));
                  read();
                });
              }, 120);
            };
            read();
          }
        },
        toLux: {
          value(value) {
            return Math.round(value / 1.2);
          }
        },
        toIntensityLevel: {
          value(value) {
            return toFixed(scale(value / 1.2, 0, 65535, 0, 100) / 100, 2);
          }
        }
      }
    };
    Controllers.ALSPT19 = Controllers["ALS-PT19"] = Controllers.DEFAULT;
    var Light = class extends Withinable {
      constructor(options) {
        super();
        Board.Component.call(this, options = Board.Options(options));
        Board.Controller.call(this, Controllers, options);
        let value = 0;
        let last = 0;
        let {
          freq = 25
        } = options;
        priv.set(this, {});
        if (!this.toIntensityLevel) {
          this.toIntensityLevel = options.toIntensityLevel || ((x) => x);
        }
        if (!this.toLux) {
          this.toLux = options.toLux || ((x) => x);
        }
        Object.defineProperties(this, {
          value: {
            get() {
              return value;
            }
          },
          level: {
            get() {
              return this.toIntensityLevel(value);
            }
          }
        });
        if (typeof this.initialize === "function") {
          this.initialize(options, (data2) => value = data2);
        }
        if (typeof this.lux === "undefined") {
          Object.defineProperty(this, "lux", {
            get() {
              return this.toLux(value);
            }
          });
        }
        const data = {
          level: 0,
          lux: 0
        };
        setInterval(() => {
          data.level = this.level;
          data.lux = this.lux;
          this.emit("data", data);
          if (value !== last) {
            last = value;
            this.emit("change", data);
          }
        }, freq);
      }
    };
    if (process.env.IS_TEST_MODE) {
      Light.Controllers = Controllers;
      Light.purge = function() {
        priv.clear();
      };
    }
    module2.exports = Light;
  }
});

// node_modules/johnny-five/lib/joystick.js
var require_joystick = __commonJS({
  "node_modules/johnny-five/lib/joystick.js"(exports, module2) {
    var Board = require_board();
    var Emitter = require_emitter();
    var { constrain, fscale } = require_fn();
    var priv = new Map();
    var axes = ["x", "y"];
    var Multiplexer = class {
      constructor({ pins, io }) {
        this.pins = pins;
        this.io = io;
        this.io.pinMode(this.pins[0], this.io.MODES.OUTPUT);
        this.io.pinMode(this.pins[1], this.io.MODES.OUTPUT);
        this.io.pinMode(this.pins[2], this.io.MODES.OUTPUT);
        this.io.pinMode(this.pins[3], this.io.MODES.OUTPUT);
      }
      select(channel) {
        this.io.digitalWrite(this.pins[0], channel & 1 ? this.io.HIGH : this.io.LOW);
        this.io.digitalWrite(this.pins[1], channel & 2 ? this.io.HIGH : this.io.LOW);
        this.io.digitalWrite(this.pins[2], channel & 4 ? this.io.HIGH : this.io.LOW);
        this.io.digitalWrite(this.pins[3], channel & 8 ? this.io.HIGH : this.io.LOW);
      }
    };
    var Controllers = {
      ANALOG: {
        initialize: {
          value({ pins }, callback) {
            const axisValues = {
              x: null,
              y: null
            };
            pins.forEach((pin, index) => {
              this.io.pinMode(pin, this.io.MODES.ANALOG);
              this.io.analogRead(pin, (value) => {
                axisValues[axes[index]] = value;
                if (axisValues.x !== null && axisValues.y !== null) {
                  callback({
                    x: axisValues.x,
                    y: axisValues.y
                  });
                  axisValues.x = null;
                  axisValues.y = null;
                }
              });
            });
          }
        },
        toAxis: {
          value(raw, axis) {
            const state = priv.get(this);
            return constrain(fscale(raw - state[axis].zeroV, -511, 511, -1, 1), -1, 1);
          }
        }
      },
      ESPLORA: {
        initialize: {
          value(options, callback) {
            const multiplexer = new Multiplexer({
              pins: [18, 19, 20, 21],
              io: this.io
            });
            const channels = [11, 12];
            let index = 1;
            const axisValues = {
              x: null,
              y: null
            };
            this.io.pinMode(4, this.io.MODES.ANALOG);
            const handler = (value) => {
              axisValues[axes[index]] = value;
              if (axisValues.x !== null && axisValues.y !== null) {
                callback({
                  x: axisValues.x,
                  y: axisValues.y
                });
                axisValues.x = null;
                axisValues.y = null;
              }
              this.io.removeListener("analog-read-4", handler);
              setTimeout(read, 10);
            };
            var read = () => {
              multiplexer.select(channels[index ^= 1]);
              this.io.analogRead(4, handler);
            };
            read();
          }
        },
        toAxis: {
          value(raw, axis) {
            const state = priv.get(this);
            return constrain(fscale(raw - state[axis].zeroV, -511, 511, -1, 1), -1, 1);
          }
        }
      }
    };
    Controllers.DEFAULT = Controllers.ANALOG;
    var Joystick = class extends Emitter {
      constructor(options) {
        super();
        Board.Component.call(this, options = Board.Options(options));
        Board.Controller.call(this, Controllers, options);
        if (!this.toAxis) {
          this.toAxis = options.toAxis || ((raw) => raw);
        }
        const state = {
          x: {
            invert: false,
            value: 0,
            previous: 0,
            zeroV: 0,
            calibrated: false
          },
          y: {
            invert: false,
            value: 0,
            previous: 0,
            zeroV: 0,
            calibrated: false
          }
        };
        state.x.zeroV = options.zeroV === void 0 ? 0 : options.zeroV.x || 0;
        state.y.zeroV = options.zeroV === void 0 ? 0 : options.zeroV.y || 0;
        state.x.invert = options.invertX || options.invert || false;
        state.y.invert = options.invertY || options.invert || false;
        priv.set(this, state);
        if (typeof this.initialize === "function") {
          this.initialize(options, (data) => {
            let isChange = false;
            const computed = {
              x: null,
              y: null
            };
            Object.keys(data).forEach((axis) => {
              const value = data[axis];
              const sensor = state[axis];
              sensor.value = value;
              if (!state[axis].calibrated) {
                state[axis].calibrated = true;
                state[axis].zeroV = value;
                isChange = true;
              }
              computed[axis] = this[axis];
              const absAxis = Math.abs(computed[axis]);
              const absPAxis = Math.abs(sensor.previous);
              if (absAxis < absPAxis || absAxis > absPAxis) {
                isChange = true;
              }
              sensor.previous = computed[axis];
            });
            this.emit("data", {
              x: computed.x,
              y: computed.y
            });
            if (isChange) {
              this.emit("change", {
                x: computed.x,
                y: computed.y
              });
            }
          });
        }
        Object.defineProperties(this, {
          x: {
            get() {
              return this.toAxis(state.x.value, "x") * (state.x.invert ? -1 : 1);
            }
          },
          y: {
            get() {
              return this.toAxis(state.y.value, "y") * (state.y.invert ? -1 : 1);
            }
          }
        });
      }
    };
    if (!!process.env.IS_TEST_MODE) {
      Joystick.Controllers = Controllers;
      Joystick.purge = () => {
        priv.clear();
      };
    }
    module2.exports = Joystick;
  }
});

// node_modules/johnny-five/lib/motion.js
var require_motion = __commonJS({
  "node_modules/johnny-five/lib/motion.js"(exports, module2) {
    var Board = require_board();
    var Collection = require_collection();
    var Emitter = require_emitter();
    var priv = new Map();
    function analogInitializer({ pin }, dataHandler) {
      const state = priv.get(this);
      this.io.pinMode(pin, this.io.MODES.ANALOG);
      setTimeout(() => {
        state.isCalibrated = true;
        this.emit("calibrated");
      }, 10);
      this.io.analogRead(pin, dataHandler);
    }
    var initialize = {
      value: analogInitializer
    };
    var Controllers = {
      PIR: {
        initialize: {
          value(options, dataHandler) {
            const state = priv.get(this);
            const calibrationDelay = typeof options.calibrationDelay !== "undefined" ? options.calibrationDelay : 2e3;
            this.io.pinMode(options.pin, this.io.MODES.INPUT);
            setTimeout(() => {
              state.isCalibrated = true;
              this.emit("calibrated");
            }, calibrationDelay);
            this.io.digitalRead(options.pin, dataHandler);
          }
        },
        toBoolean: {
          value(raw) {
            return !!raw;
          }
        }
      },
      GP2Y0D805Z0F: {
        ADDRESSES: {
          value: [38]
        },
        initialize: {
          value(options, dataHandler) {
            const { Drivers } = require_sip();
            const address = Drivers.addressResolver(this, options);
            const state = priv.get(this);
            setTimeout(() => {
              state.isCalibrated = true;
              this.emit("calibrated");
            }, 10);
            this.io.i2cConfig(options);
            this.io.i2cWriteReg(address, 3, 254);
            this.io.i2cWrite(address, [0]);
            this.io.i2cRead(address, 1, (data) => {
              dataHandler(data[0] & 2);
            });
          }
        },
        toBoolean: {
          value(raw) {
            return raw === 0;
          }
        }
      },
      GP2Y0D810Z0F: {
        initialize,
        toBoolean: {
          value(raw) {
            return raw >> 9 === 0;
          }
        }
      },
      GP2Y0A60SZLF: {
        initialize,
        toBoolean: {
          value(raw) {
            return raw >> 9 === 1;
          }
        }
      }
    };
    Controllers.GP2Y0D815Z0F = Controllers.GP2Y0D810Z0F;
    Controllers["HC-SR501"] = Controllers.PIR;
    Controllers["HCSR501"] = Controllers.PIR;
    Controllers["0D805"] = Controllers.GP2Y0D805Z0F;
    Controllers["805"] = Controllers.GP2Y0D805Z0F;
    Controllers["0D810"] = Controllers.GP2Y0D810Z0F;
    Controllers["810"] = Controllers.GP2Y0D810Z0F;
    Controllers["0D815"] = Controllers.GP2Y0D815Z0F;
    Controllers["815"] = Controllers.GP2Y0D815Z0F;
    Controllers["0A60SZLF"] = Controllers.GP2Y0A60SZLF;
    Controllers["60SZLF"] = Controllers.GP2Y0A60SZLF;
    Controllers.DEFAULT = Controllers.PIR;
    var Motion = class extends Emitter {
      constructor(options) {
        super();
        Board.Component.call(this, options = Board.Options(options));
        Board.Controller.call(this, Controllers, options);
        let last = false;
        const freq = options.freq || 25;
        const state = {
          value: false,
          isCalibrated: false
        };
        priv.set(this, state);
        Object.defineProperties(this, {
          detectedMotion: {
            get() {
              return this.toBoolean(state.value);
            }
          },
          isCalibrated: {
            get() {
              return state.isCalibrated;
            }
          }
        });
        if (typeof this.initialize === "function") {
          this.initialize(options, (data) => state.value = data);
        }
        setInterval(() => {
          let isChange = false;
          const eventData = {
            timestamp: Date.now(),
            detectedMotion: this.detectedMotion,
            isCalibrated: state.isCalibrated
          };
          if (state.isCalibrated && this.detectedMotion && !last) {
            this.emit("motionstart", eventData);
          }
          if (state.isCalibrated && !this.detectedMotion && last) {
            this.emit("motionend", eventData);
          }
          if (last !== this.detectedMotion) {
            isChange = true;
          }
          this.emit("data", eventData);
          if (isChange) {
            this.emit("change", eventData);
          }
          last = this.detectedMotion;
        }, freq);
      }
    };
    Motion.Collection = class extends Collection.Emitter {
      constructor(numsOrObjects) {
        super(numsOrObjects);
      }
      get type() {
        return Motion;
      }
    };
    Collection.installMethodForwarding(Motion.Collection.prototype, Motion.prototype);
    if (!!process.env.IS_TEST_MODE) {
      Motion.Controllers = Controllers;
      Motion.purge = () => {
        priv.clear();
      };
    }
    module2.exports = Motion;
  }
});

// node_modules/johnny-five/lib/sensor.js
var require_sensor = __commonJS({
  "node_modules/johnny-five/lib/sensor.js"(exports, module2) {
    var Board = require_board();
    var Fn = require_fn();
    var Collection = require_collection();
    var Withinable = require_withinable();
    var priv = new Map();
    function median(input) {
      const sorted = input.sort((a, b) => a - b);
      const len = sorted.length;
      const half = Math.floor(len / 2);
      return len % 2 ? sorted[half] : (sorted[half - 1] + sorted[half]) / 2;
    }
    var Sensor = class extends Withinable {
      constructor(options) {
        super();
        let resolution = 1023;
        let raw = null;
        let last = -1;
        const samples = [];
        Board.Component.call(this, options = Board.Options(options));
        if (!options.type) {
          options.type = "analog";
        }
        if (this.io.RESOLUTION && (this.io.RESOLUTION.ADC && this.io.RESOLUTION.ADC !== resolution)) {
          resolution = this.io.RESOLUTION.ADC;
        }
        this.mode = options.type === "digital" ? this.io.MODES.INPUT : this.io.MODES.ANALOG;
        this.io.pinMode(this.pin, this.mode);
        const state = {
          enabled: typeof options.enabled === "undefined" ? true : options.enabled,
          booleanBarrier: options.type === "digital" ? 0 : null,
          intervalId: null,
          scale: null,
          value: 0,
          median: 0,
          freq: options.freq || 25,
          previousFreq: options.freq || 25
        };
        priv.set(this, state);
        this.range = options.range || [0, resolution];
        this.limit = options.limit || null;
        this.threshold = options.threshold === void 0 ? 1 : options.threshold;
        this.isScaled = false;
        this.io[`${options.type}Read`](this.pin, (data) => {
          raw = data;
          if (options.type !== "digital") {
            samples.push(raw);
          }
        });
        const eventProcessing = () => {
          let err;
          let boundary;
          err = null;
          if (options.type === "digital") {
            this.emit("data", raw);
            if (last !== raw) {
              this.emit("change", raw);
              last = raw;
            }
            return;
          }
          if (samples.length > 0) {
            state.median = median(samples);
          }
          const roundMedian = Math.round(state.median);
          this.emit("data", roundMedian);
          if (state.median <= last - this.threshold || state.median >= last + this.threshold) {
            this.emit("change", roundMedian);
            last = state.median;
          }
          if (this.limit) {
            if (state.median <= this.limit[0]) {
              boundary = "lower";
            }
            if (state.median >= this.limit[1]) {
              boundary = "upper";
            }
            if (boundary) {
              this.emit("limit", {
                boundary,
                value: roundMedian
              });
              this.emit(`limit:${boundary}`, roundMedian);
            }
          }
          samples.length = 0;
        };
        Object.defineProperties(this, {
          raw: {
            get() {
              return raw;
            }
          },
          analog: {
            get() {
              if (options.type === "digital") {
                return raw;
              }
              return raw === null ? 0 : Fn.map(this.raw, 0, resolution, 0, 255) | 0;
            }
          },
          constrained: {
            get() {
              if (options.type === "digital") {
                return raw;
              }
              return raw === null ? 0 : Fn.constrain(this.raw, 0, 255);
            }
          },
          boolean: {
            get() {
              const state2 = priv.get(this);
              let booleanBarrier = state2.booleanBarrier;
              const scale = state2.scale || [0, resolution];
              if (booleanBarrier === null) {
                booleanBarrier = scale[0] + (scale[1] - scale[0]) / 2;
              }
              return this.value > booleanBarrier;
            }
          },
          scaled: {
            get() {
              let mapped;
              let constrain;
              if (state.scale && raw !== null) {
                if (options.type === "digital") {
                  return state.scale[raw];
                }
                mapped = Fn.fmap(raw, this.range[0], this.range[1], state.scale[0], state.scale[1]);
                constrain = Fn.constrain(mapped, state.scale[0], state.scale[1]);
                return constrain;
              }
              return this.constrained;
            }
          },
          freq: {
            get() {
              return state.freq;
            },
            set(newFreq) {
              state.freq = newFreq;
              if (state.intervalId) {
                clearInterval(state.intervalId);
              }
              if (state.freq !== null) {
                state.intervalId = setInterval(eventProcessing, newFreq);
              }
            }
          },
          value: {
            get() {
              if (state.scale) {
                this.isScaled = true;
                return this.scaled;
              }
              return raw;
            }
          },
          resolution: {
            get() {
              return resolution;
            }
          }
        });
        if (!!process.env.IS_TEST_MODE) {
          Object.defineProperties(this, {
            state: {
              get() {
                return priv.get(this);
              }
            }
          });
        }
        if (state.enabled) {
          this.freq = state.freq;
        }
      }
      enable() {
        const state = priv.get(this);
        if (!state.enabled) {
          this.freq = state.freq || state.previousFreq;
        }
        return this;
      }
      disable() {
        const state = priv.get(this);
        if (state.enabled) {
          state.enabled = false;
          state.previousFreq = state.freq;
          this.freq = null;
        }
        return this;
      }
      scale(low, high) {
        this.isScaled = true;
        priv.get(this).scale = Array.isArray(low) ? low : [low, high];
        return this;
      }
      scaleTo(low, high) {
        const scale = Array.isArray(low) ? low : [low, high];
        return Fn.map(this.raw, 0, this.resolution, scale[0], scale[1]);
      }
      fscaleTo(low, high) {
        const scale = Array.isArray(low) ? low : [low, high];
        return Fn.fmap(this.raw, 0, this.resolution, scale[0], scale[1]);
      }
      booleanAt(barrier) {
        priv.get(this).booleanBarrier = barrier;
        return this;
      }
    };
    var Sensors = class extends Collection.Emitter {
      constructor(numsOrObjects) {
        super(numsOrObjects);
      }
      get type() {
        return Sensor;
      }
    };
    Collection.installMethodForwarding(Sensors.prototype, Sensor.prototype);
    Sensor.Collection = Sensors;
    if (!!process.env.IS_TEST_MODE) {
      Sensor.purge = () => {
        priv.clear();
      };
    }
    module2.exports = Sensor;
  }
});

// node_modules/johnny-five/lib/shiftregister.js
var require_shiftregister = __commonJS({
  "node_modules/johnny-five/lib/shiftregister.js"(exports, module2) {
    var Board = require_board();
    var Collection = require_collection();
    var priv = new Map();
    var encoded = {
      cathode: [63, 6, 91, 79, 102, 109, 125, 7, 127, 103],
      anode: [64, 121, 36, 48, 25, 18, 2, 120, 0, 24]
    };
    var ShiftRegister = class {
      constructor(opts) {
        if (!(this instanceof ShiftRegister)) {
          return new ShiftRegister(opts);
        }
        if (Array.isArray(opts)) {
          opts = {
            pins: {
              data: opts[0],
              clock: opts[1],
              latch: opts[2],
              reset: opts.length === 4 ? opts[3] : null
            }
          };
        } else if (typeof opts.pins === "object" && Array.isArray(opts.pins)) {
          opts.pins = {
            data: opts.pins[0],
            clock: opts.pins[1],
            latch: opts.pins[2],
            reset: opts.pins.length === 4 ? opts.pins[3] : null
          };
        }
        Board.Component.call(this, opts = Board.Options(opts));
        this.size = opts.size || 1;
        this.pins.reset = typeof opts.pins.reset !== "undefined" ? opts.pins.reset : null;
        const isAnode = typeof opts.isAnode !== "undefined" ? opts.isAnode : false;
        const clear = isAnode ? 255 : 0;
        const state = {
          isAnode,
          value: new Array(this.size).fill(clear),
          encoded: encoded[isAnode ? "anode" : "cathode"],
          clear
        };
        priv.set(this, state);
        Object.defineProperties(this, {
          isAnode: {
            get() {
              return isAnode;
            }
          },
          value: {
            get() {
              return state.value;
            }
          }
        });
      }
      display(value) {
        const state = priv.get(this);
        let chars;
        if (typeof value === "number") {
          return this.display(String(value));
        }
        if (typeof value === "string") {
          const matches = value.match(/([0-9]{1}\.*)/g);
          if (matches && matches.length) {
            chars = matches.map((char) => {
              if (char.length === 1) {
                return state.encoded[char] | 1 << 7;
              }
              return state.encoded[char[0]];
            });
          }
        }
        this.send(chars);
        state.value = chars;
        return this;
      }
      send(value) {
        const state = priv.get(this);
        let args = Array.from(arguments);
        if (args.length === 1) {
          args = [value];
        }
        if (Array.isArray(value)) {
          args = value;
        }
        this.io.digitalWrite(this.pins.latch, this.io.LOW);
        args.forEach(function(arg) {
          if (typeof arg === "string") {
            arg = arg.charCodeAt(0);
          }
          if (this.isAnode && (arg !== 255 && !state.encoded.includes(arg) && !state.encoded.includes(arg & ~(1 << 7)))) {
            const index = encoded.anode.findIndex((value2) => value2 === arg);
            if (index !== -1) {
              arg = encoded.cathode[index];
            }
          }
          this.board.shiftOut(this.pins.data, this.pins.clock, true, arg);
        }, this);
        this.io.digitalWrite(this.pins.latch, this.io.HIGH);
        state.value = args;
        return this;
      }
      clear() {
        const state = priv.get(this);
        return this.send(Array(this.size).fill(state.clear));
      }
      reset() {
        if (this.pins.reset === null) {
          throw new Error("ShiftRegister was not initialized with a reset pin");
        }
        this.io.digitalWrite(this.pins.clock, this.io.LOW);
        this.io.digitalWrite(this.pins.reset, this.io.LOW);
        this.io.digitalWrite(this.pins.clock, this.io.HIGH);
        this.io.digitalWrite(this.pins.reset, this.io.HIGH);
        return this;
      }
    };
    var ShiftRegisters = class extends Collection {
      constructor(numsOrObjects) {
        super(numsOrObjects);
      }
      get type() {
        return ShiftRegister;
      }
    };
    Collection.installMethodForwarding(ShiftRegisters.prototype, ShiftRegister.prototype);
    Collection.installMethodForwarding(ShiftRegisters.prototype, ShiftRegister.prototype);
    ShiftRegister.Collection = ShiftRegisters;
    if (!!process.env.IS_TEST_MODE) {
      ShiftRegister.purge = () => {
        priv.clear();
      };
    }
    module2.exports = ShiftRegister;
  }
});

// node_modules/johnny-five/lib/motor.js
var require_motor = __commonJS({
  "node_modules/johnny-five/lib/motor.js"(exports, module2) {
    var Board = require_board();
    var Collection = require_collection();
    var Emitter = require_emitter();
    var EVS = require_evshield();
    var Expander = require_expander();
    var Fn = require_fn();
    var Sensor = require_sensor();
    var ShiftRegister = require_shiftregister();
    var priv = new Map();
    var registers = new Map();
    function registerKey(registerOpts) {
      return ["clock", "data", "latch"].reduce((accum, key) => `${accum}.${registerOpts[key]}`, "");
    }
    function latch(state, bit, on) {
      return on ? state |= 1 << bit : state &= ~(1 << bit);
    }
    function updateShiftRegister(motor, dir) {
      const rKey = registerKey(motor.settings.register);
      const register = registers.get(motor.board)[rKey];
      let latchState = register.value;
      const bits = priv.get(motor).bits;
      const forward = dir !== "reverse";
      latchState = latch(latchState, bits.a, forward);
      latchState = latch(latchState, bits.b, !forward);
      if (register.value !== latchState) {
        register.send(latchState);
      }
    }
    var Controllers = {
      DEFAULT: {},
      ShiftRegister: {
        initialize: {
          value({ register, bits }) {
            const rKey = registerKey(register);
            if (!bits || bits.a === void 0 || bits.b === void 0) {
              throw new Error("ShiftRegister Motors MUST contain HBRIDGE bits {a, b}");
            }
            priv.get(this).bits = bits;
            if (!registers.has(this.board)) {
              registers.set(this.board, {});
            }
            if (!registers.get(this.board)[rKey]) {
              registers.get(this.board)[rKey] = new ShiftRegister({
                board: this.board,
                pins: register
              });
            }
            this.io.pinMode(this.pins.pwm, this.io.MODES.PWM);
          }
        },
        dir: {
          value(dir) {
            this.stop();
            updateShiftRegister(this, dir.name);
            this.direction = dir;
            process.nextTick(() => this.emit(dir.name));
            return this;
          }
        }
      },
      PCA9685: {
        initialize: {
          value({ address, pwmRange, frequency }) {
            const state = priv.get(this);
            this.address = address || 64;
            this.pwmRange = pwmRange || [0, 4080];
            this.frequency = frequency || 50;
            state.expander = Expander.get({
              address: this.address,
              controller: this.controller,
              bus: this.bus,
              pwmRange: this.pwmRange,
              frequency: this.frequency
            });
            Object.keys(this.pins).forEach((pinName) => {
              this.pins[pinName] = state.expander.normalize(this.pins[pinName]);
            });
          }
        },
        setPWM: {
          writable: true,
          value(pin, speed) {
            priv.get(this).expander.analogWrite(pin, speed);
          }
        },
        setPin: {
          writable: true,
          value(pin, value) {
            priv.get(this).expander.digitalWrite(pin, value);
          }
        }
      },
      PCA9685_Hybrid: {
        initialize: {
          value({ address, pwmRange, frequency }) {
            const state = priv.get(this);
            this.address = address || 64;
            this.pwmRange = pwmRange || [0, 4080];
            this.frequency = frequency || 50;
            state.expander = Expander.get({
              address: this.address,
              controller: "PCA9685",
              bus: this.bus,
              pwmRange: this.pwmRange,
              frequency: this.frequency
            });
            this.pins.pwm = state.expander.normalize(this.pins.pwm);
          }
        },
        setPWM: {
          writable: true,
          value(pin, speed) {
            priv.get(this).expander.analogWrite(pin, speed);
          }
        }
      },
      EVS_EV3: {
        initialize: {
          value(options) {
            const state = priv.get(this);
            state.shield = EVS.shieldPort(options.pin);
            state.ev3 = new EVS(Object.assign(options, {
              io: this.io
            }));
            this.settings.pins = {
              pwm: options.pin,
              dir: options.pin
            };
          }
        },
        setPWM: {
          value(pin, value) {
            const state = priv.get(this);
            const register = state.shield.motor === EVS.M1 ? EVS.SPEED_M1 : EVS.SPEED_M2;
            let speed = Fn.scale(value, 0, 255, 0, 100) | 0;
            if (value === 0) {
              state.ev3.write(state.shield, EVS.COMMAND, EVS.Motor_Reset);
            } else {
              if (!this.direction.value) {
                speed = -speed;
              }
              const data = [
                speed,
                0,
                0,
                EVS.CONTROL_SPEED | EVS.CONTROL_GO
              ];
              state.ev3.write(state.shield, register, data);
            }
          }
        },
        setPin: {
          value(pin, value) {
            this.setPWM(this.pin, value);
          }
        },
        validatePins: {
          value() {
            if (typeof this.settings.pin === "undefined") {
              throw new Error("Pin must be defined");
            }
          }
        }
      },
      GROVE_I2C_MOTOR_DRIVER: {
        REGISTER: {
          value: {
            ADDRESS: 15
          }
        },
        COMMANDS: {
          value: {
            SET_SPEED: 130,
            SET_PWM_FREQUENCY: 132,
            SET_DIRECTION: 170,
            NOOP: 1
          }
        },
        initialize: {
          value(options) {
            const state = priv.get(this);
            let shared = priv.get("GROVE_I2C_MOTOR_DRIVER");
            if (!shared) {
              shared = {
                direction: {
                  A: 1,
                  B: 1
                },
                speed: {
                  A: 0,
                  B: 0
                }
              };
              priv.set("GROVE_I2C_MOTOR_DRIVER", shared);
            }
            state.shared = shared;
            state.pin = options.pin.toUpperCase();
            this.settings.pins = {
              pwm: options.pin,
              dir: options.pin
            };
            this.address = options.address || this.REGISTER.ADDRESS;
            options.address = this.address;
            this.io.i2cConfig(options);
          }
        },
        setPWM: {
          value(pin, value) {
            const state = priv.get(this);
            const speed = Board.constrain(value, 0, 255) | 0;
            state.shared.speed[state.pin] = speed;
            this.io.i2cWrite(this.address, [
              this.COMMANDS.SET_SPEED,
              state.shared.speed.A,
              state.shared.speed.B
            ]);
          }
        },
        setPin: {
          value(pin, value) {
            const state = priv.get(this);
            state.shared.direction[state.pin] = value ? 1 : 2;
            const a = state.shared.direction.A & 3;
            const b = state.shared.direction.B & 3;
            const direction = b << 2 | a;
            this.io.i2cWrite(this.address, [
              this.COMMANDS.SET_DIRECTION,
              direction,
              this.COMMANDS.NOOP
            ]);
          }
        },
        validatePins: {
          value() {
            if (typeof this.settings.pin === "undefined") {
              throw new Error("Pin must be defined");
            }
          }
        }
      }
    };
    Controllers.EVS_NXT = Controllers.EVS_EV3;
    var Devices = {
      NONDIRECTIONAL: {
        pins: {
          get() {
            if (this.settings.pin) {
              return {
                pwm: this.settings.pin
              };
            } else {
              return this.settings.pins || {};
            }
          }
        },
        dir: {
          writable: true,
          configurable: true,
          value(speed) {
            speed = speed || this.speed();
            return this;
          }
        },
        resume: {
          value() {
            const speed = this.speed();
            this.speed({
              speed
            });
            return this;
          }
        }
      },
      DIRECTIONAL: {
        pins: {
          get() {
            if (Array.isArray(this.settings.pins)) {
              return {
                pwm: this.settings.pins[0],
                dir: this.settings.pins[1]
              };
            } else {
              return this.settings.pins;
            }
          }
        },
        dir: {
          writable: true,
          configurable: true,
          value(dir) {
            this.stop();
            this.setPin(this.pins.dir, dir.value);
            this.direction = dir;
            process.nextTick(() => this.emit(dir.name));
            return this;
          }
        }
      },
      CDIR: {
        pins: {
          get() {
            if (Array.isArray(this.settings.pins)) {
              return {
                pwm: this.settings.pins[0],
                dir: this.settings.pins[1],
                cdir: this.settings.pins[2]
              };
            } else {
              return this.settings.pins;
            }
          }
        },
        dir: {
          value(dir) {
            this.stop();
            this.direction = dir;
            this.setPin(this.pins.cdir, 1 ^ dir.value);
            this.setPin(this.pins.dir, dir.value);
            process.nextTick(() => this.emit(dir.name));
            return this;
          }
        },
        brake: {
          value(duration) {
            this.speed({
              speed: 0,
              saveSpeed: false
            });
            this.setPin(this.pins.dir, 1, 127);
            this.setPin(this.pins.cdir, 1, 128, 127);
            this.speed({
              speed: 255,
              saveSpeed: false,
              braking: true
            });
            process.nextTick(() => this.emit("brake"));
            if (duration) {
              this.board.wait(duration, () => this.stop());
            }
            return this;
          }
        }
      }
    };
    var Motor = class extends Emitter {
      constructor(options) {
        super();
        var device, controller, state;
        Board.Component.call(this, options = Board.Options(options));
        this.settings = options;
        if (typeof this.settings.device === "undefined") {
          this.settings.device = "DIRECTIONAL";
          if (typeof this.settings.pins === "undefined" && typeof this.settings.register !== "object") {
            this.settings.device = "NONDIRECTIONAL";
          }
          if (this.settings.pins) {
            if (Array.isArray(this.settings.pins)) {
              this.settings.device = ["NONDIRECTIONAL", "DIRECTIONAL", "CDIR"][this.settings.pins.length - 1];
            } else {
              if (typeof this.settings.pins.dir === "undefined") {
                this.settings.device = "NONDIRECTIONAL";
              } else {
                this.settings.device = "DIRECTIONAL";
              }
              if (typeof this.settings.pins.cdir !== "undefined") {
                this.settings.device = "CDIR";
              }
            }
          }
        }
        if (typeof this.settings.controller === "string" && (this.settings.controller.startsWith("EVS") || this.settings.controller.startsWith("GROVE_I2C"))) {
          this.settings.device = "DIRECTIONAL";
        }
        device = typeof this.settings.device === "string" ? Devices[this.settings.device] : this.settings.device;
        this.threshold = typeof this.settings.threshold !== "undefined" ? this.settings.threshold : 30;
        this.invertPWM = typeof this.settings.invertPWM !== "undefined" ? this.settings.invertPWM : false;
        Object.defineProperties(this, device);
        if (this.settings.register) {
          this.settings.controller = "ShiftRegister";
        }
        if (this.settings.controller) {
          controller = typeof this.settings.controller === "string" ? Controllers[this.settings.controller] : this.settings.controller;
          Board.Controller.call(this, Controllers, options);
        }
        if (this.settings.current) {
          this.settings.current.board = this.board;
          this.current = new Sensor(this.settings.current);
        }
        state = {
          isOn: false,
          currentSpeed: typeof this.settings.speed !== "undefined" ? this.settings.speed : 128,
          braking: false,
          enabled: false
        };
        priv.set(this, state);
        Object.defineProperties(this, {
          isOn: {
            get: function() {
              return state.isOn;
            }
          },
          currentSpeed: {
            get: function() {
              return state.currentSpeed;
            }
          },
          braking: {
            get: function() {
              return state.braking;
            }
          },
          enabled: {
            get: function() {
              return state.enabled;
            }
          }
        });
        this.direction = {
          value: 1
        };
        if (this.initialize) {
          this.initialize(options);
        }
        this.validatePins();
        this.enable();
        this.dir(this.direction);
      }
    };
    Motor.prototype.initialize = function() {
      this.io.pinMode(this.pins.pwm, this.io.MODES.PWM);
      ["dir", "cdir", "brake", "enable"].forEach((pin) => {
        if (typeof this.pins[pin] !== "undefined") {
          this.io.pinMode(this.pins[pin], this.io.MODES.OUTPUT);
        }
      });
    };
    Motor.prototype.setPin = function(pin, value) {
      this.io.digitalWrite(pin, value);
    };
    Motor.prototype.setPWM = function(pin, value) {
      this.io.analogWrite(pin, Fn.map(value, 0, 255, 0, this.board.RESOLUTION.PWM));
    };
    Motor.prototype.speed = function(options) {
      var state = priv.get(this);
      if (typeof options === "undefined") {
        return state.currentSpeed;
      } else {
        if (typeof options === "number") {
          options = {
            speed: options
          };
        }
        options.speed = Board.constrain(options.speed, 0, 255);
        options.saveSpeed = typeof options.saveSpeed !== "undefined" ? options.saveSpeed : true;
        if (options.speed < this.threshold) {
          options.speed = 0;
        }
        state.isOn = options.speed === 0 ? false : true;
        if (options.saveSpeed) {
          state.currentSpeed = options.speed;
        }
        if (options.braking) {
          state.braking = true;
        }
        if (this.invertPWM && this.direction.value === 1) {
          options.speed ^= 255;
        }
        this.setPWM(this.pins.pwm, options.speed);
        return this;
      }
    };
    Motor.prototype.start = function(speed) {
      if (this.pins.brake && this.braking) {
        this.setPin(this.pins.brake, 0);
      }
      speed = typeof speed !== "undefined" ? speed : this.speed();
      this.speed({
        speed,
        braking: false
      });
      if (speed > 0) {
        process.nextTick(() => this.emit("start"));
      }
      return this;
    };
    Motor.prototype.stop = function() {
      this.speed({
        speed: 0,
        saveSpeed: false
      });
      process.nextTick(() => this.emit("stop"));
      return this;
    };
    Motor.prototype.brake = function(duration) {
      if (typeof this.pins.brake === "undefined") {
        if (this.board.io.name !== "Mock") {
          console.log("Non-braking motor type");
        }
        this.stop();
      } else {
        this.setPin(this.pins.brake, 1);
        this.setPin(this.pins.dir, 1);
        this.speed({
          speed: 255,
          saveSpeed: false,
          braking: true
        });
        process.nextTick(() => this.emit("brake"));
        if (duration) {
          var motor = this;
          this.board.wait(duration, function() {
            motor.resume();
          });
        }
      }
      return this;
    };
    Motor.prototype.release = function() {
      this.resume();
      process.nextTick(() => this.emit("release"));
      return this;
    };
    Motor.prototype.resume = function() {
      var speed = this.speed();
      this.dir(this.direction);
      this.start(speed);
      return this;
    };
    Motor.prototype.enable = function() {
      var state = priv.get(this);
      if (typeof this.pins.enable !== "undefined" && !state.enabled) {
        this.setPin(this.pins.enable, 1);
        state.enabled = true;
      }
    };
    Motor.prototype.disable = function() {
      var state = priv.get(this);
      if (typeof this.pins.enable !== "undefined" && state.enabled) {
        this.setPin(this.pins.enable, 0);
        state.enabled = false;
      }
    };
    Motor.prototype.validatePins = function() {
      if (typeof this.pins.pwm === "undefined") {
        throw new Error("PWM pin must be defined");
      }
      if (typeof this.pins.dir === "undefined" && this.settings.device !== "NONDIRECTIONAL") {
        throw new Error("DIR pin must be defined");
      }
      if (this.settings.device === "CDIR" && typeof this.pins.cdir === "undefined") {
        throw new Error("CDIR pin must be defined for three wire motors");
      }
    };
    [
      {
        name: "forward",
        abbr: "fwd",
        value: 1
      },
      {
        name: "reverse",
        abbr: "rev",
        value: 0
      }
    ].forEach((dir) => {
      Motor.prototype[dir.name] = Motor.prototype[dir.abbr] = function(speed) {
        this.dir(dir);
        this.start(speed);
        return this;
      };
    });
    Motor.SHIELD_CONFIGS = {
      ADAFRUIT_V1: {
        M1: {
          pins: {
            pwm: 11
          },
          register: {
            data: 8,
            clock: 4,
            latch: 12
          },
          bits: {
            a: 2,
            b: 3
          }
        },
        M2: {
          pins: {
            pwm: 3
          },
          register: {
            data: 8,
            clock: 4,
            latch: 12
          },
          bits: {
            a: 1,
            b: 4
          }
        },
        M3: {
          pins: {
            pwm: 6
          },
          register: {
            data: 8,
            clock: 4,
            latch: 12
          },
          bits: {
            a: 5,
            b: 7
          }
        },
        M4: {
          pins: {
            pwm: 5
          },
          register: {
            data: 8,
            clock: 4,
            latch: 12
          },
          bits: {
            a: 0,
            b: 6
          }
        }
      },
      ADAFRUIT_V2: {
        M1: {
          pins: {
            pwm: 8,
            dir: 9,
            cdir: 10
          },
          address: 96,
          controller: "PCA9685"
        },
        M2: {
          pins: {
            pwm: 13,
            dir: 12,
            cdir: 11
          },
          address: 96,
          controller: "PCA9685"
        },
        M3: {
          pins: {
            pwm: 2,
            dir: 3,
            cdir: 4
          },
          address: 96,
          controller: "PCA9685"
        },
        M4: {
          pins: {
            pwm: 7,
            dir: 6,
            cdir: 5
          },
          address: 96,
          controller: "PCA9685"
        }
      },
      SEEED_STUDIO: {
        A: {
          pins: {
            pwm: 9,
            dir: 8,
            cdir: 11
          }
        },
        B: {
          pins: {
            pwm: 10,
            dir: 12,
            cdir: 13
          }
        }
      },
      FREETRONICS_HBRIDGE: {
        A: {
          pins: {
            pwm: 6,
            dir: 4,
            cdir: 7
          }
        },
        B: {
          pins: {
            pwm: 5,
            dir: 3,
            cdir: 2
          }
        }
      },
      ARDUINO_MOTOR_SHIELD_R3_1: {
        A: {
          pins: {
            pwm: 3,
            dir: 12
          }
        },
        B: {
          pins: {
            pwm: 11,
            dir: 13
          }
        }
      },
      ARDUINO_MOTOR_SHIELD_R3_2: {
        A: {
          pins: {
            pwm: 3,
            dir: 12,
            brake: 9
          }
        },
        B: {
          pins: {
            pwm: 11,
            dir: 13,
            brake: 8
          }
        }
      },
      ARDUINO_MOTOR_SHIELD_R3_3: {
        A: {
          pins: {
            pwm: 3,
            dir: 12,
            brake: 9,
            current: "A0"
          }
        },
        B: {
          pins: {
            pwm: 11,
            dir: 13,
            brake: 8,
            current: "A1"
          }
        }
      },
      DF_ROBOT: {
        A: {
          pins: {
            pwm: 6,
            dir: 7
          }
        },
        B: {
          pins: {
            pwm: 5,
            dir: 4
          }
        }
      },
      NKC_ELECTRONICS_KIT: {
        A: {
          pins: {
            pwm: 9,
            dir: 12
          }
        },
        B: {
          pins: {
            pwm: 10,
            dir: 13
          }
        }
      },
      RUGGED_CIRCUITS: {
        A: {
          pins: {
            pwm: 3,
            dir: 12
          }
        },
        B: {
          pins: {
            pwm: 11,
            dir: 13
          }
        }
      },
      SPARKFUN_ARDUMOTO: {
        A: {
          pins: {
            pwm: 3,
            dir: 12
          }
        },
        B: {
          pins: {
            pwm: 11,
            dir: 13
          }
        }
      },
      POLOLU_DRV8835_SHIELD: {
        M1: {
          pins: {
            pwm: 9,
            dir: 7
          }
        },
        M2: {
          pins: {
            pwm: 10,
            dir: 8
          }
        }
      },
      POLOLU_VNH5019_SHIELD: {
        M1: {
          pins: {
            pwm: 9,
            dir: 2,
            cdir: 4,
            enable: 6
          }
        },
        M2: {
          pins: {
            pwm: 10,
            dir: 7,
            cdir: 8,
            enable: 12
          }
        }
      },
      MICRO_MAGICIAN_V2: {
        A: {
          pins: {
            pwm: 6,
            dir: 8
          },
          invertPWM: true
        },
        B: {
          pins: {
            pwm: 5,
            dir: 7
          },
          invertPWM: true
        }
      },
      SPARKFUN_LUDUS: {
        A: {
          pins: {
            pwm: 3,
            dir: 4,
            cdir: 5
          }
        },
        B: {
          pins: {
            pwm: 6,
            dir: 7,
            cdir: 8
          }
        }
      },
      SPARKFUN_DUAL_HBRIDGE_EDISON_BLOCK: {
        A: {
          pins: {
            pwm: 20,
            dir: 33,
            cdir: 46,
            enable: 47
          }
        },
        B: {
          pins: {
            pwm: 14,
            dir: 48,
            cdir: 36,
            enable: 47
          }
        }
      },
      PICAR_V: {
        A: {
          controller: "PCA9685_Hybrid",
          pins: {
            pwm: 4,
            dir: "GPIO17"
          }
        },
        B: {
          controller: "PCA9685_Hybrid",
          pins: {
            pwm: 5,
            dir: "GPIO27"
          }
        }
      }
    };
    var Motors = class extends Collection {
      constructor(numsOrObjects) {
        super(numsOrObjects);
      }
      get type() {
        return Motor;
      }
    };
    Collection.installMethodForwarding(Motors.prototype, Motor.prototype);
    Motor.Collection = Motors;
    if (!!process.env.IS_TEST_MODE) {
      Motor.Controllers = Controllers;
      Motor.purge = function() {
        priv.clear();
        registers.clear();
      };
    }
    module2.exports = Motor;
  }
});

// node_modules/nanotimer/lib/nanoTimer.js
var require_nanoTimer = __commonJS({
  "node_modules/nanotimer/lib/nanoTimer.js"(exports, module2) {
    function NanoTimer(log) {
      var version = process.version;
      var major = version.split(".")[0];
      major = major.split("v")[1];
      var minor = version.split(".")[1];
      if (major == 0 && minor < 10) {
        console.log("Error: Please update to the latest version of node! This library requires 0.10.x or later");
        process.exit(0);
      }
      this.intervalT1 = null;
      this.timeOutT1 = null;
      this.intervalCount = 1;
      this.deferredInterval = false;
      this.deferredTimeout = false;
      this.deferredTimeoutRef = null;
      this.deferredIntervalRef = null;
      this.timeoutCallbackRef = null;
      this.intervalCallbackRef = null;
      this.timeoutImmediateRef = null;
      this.intervalImmediateRef = null;
      this.intervalErrorChecked = false;
      this.intervalType = "";
      if (log) {
        this.logging = true;
      }
    }
    NanoTimer.prototype.time = function(task, args, format, callback) {
      if (callback) {
        var t1 = process.hrtime();
        if (args) {
          args.push(function() {
            var time = process.hrtime(t1);
            if (format == "s") {
              callback(time[0] + time[1] / 1e9);
            } else if (format == "m") {
              callback(time[0] / 1e3 + time[1] / 1e6);
            } else if (format == "u") {
              callback(time[0] / 1e6 + time[1] / 1e3);
            } else if (format == "n") {
              callback(time[0] / 1e9 + time[1]);
            } else {
              callback(time);
            }
          });
          task.apply(null, args);
        } else {
          task(function() {
            var time = process.hrtime(t1);
            if (format == "s") {
              callback(time[0] + time[1] / 1e9);
            } else if (format == "m") {
              callback(time[0] / 1e3 + time[1] / 1e6);
            } else if (format == "u") {
              callback(time[0] / 1e6 + time[1] / 1e3);
            } else if (format == "n") {
              callback(time[0] / 1e9 + time[1]);
            } else {
              callback(time);
            }
          });
        }
      } else {
        var t1 = process.hrtime();
        if (args) {
          task.apply(null, args);
        } else {
          task();
        }
        var t2 = process.hrtime(t1);
        if (format == "s") {
          return t2[0] + t2[1] / 1e9;
        } else if (format == "m") {
          return t2[0] / 1e3 + t2[1] / 1e6;
        } else if (format == "u") {
          return t2[0] / 1e6 + t2[1] / 1e3;
        } else if (format == "n") {
          return t2[0] / 1e9 + t2[1];
        } else {
          return process.hrtime(t1);
        }
      }
    };
    NanoTimer.prototype.setInterval = function(task, args, interval, callback) {
      if (!this.intervalErrorChecked) {
        if (!task) {
          console.log("A task function must be specified to setInterval");
          process.exit(1);
        } else {
          if (typeof task != "function") {
            console.log("Task argument to setInterval must be a function reference");
            process.exit(1);
          }
        }
        if (!interval) {
          console.log("An interval argument must be specified");
          process.exit(1);
        } else {
          if (typeof interval != "string") {
            console.log("Interval argument to setInterval must be a string specified as an integer followed by 's' for seconds, 'm' for milli, 'u' for micro, and 'n' for nanoseconds. Ex. 2u");
            process.exit(1);
          }
        }
        if (callback) {
          if (typeof callback != "function") {
            console.log("Callback argument to setInterval must be a function reference");
            process.exit(1);
          } else {
            this.intervalCallbackRef = callback;
          }
        }
        this.intervalType = interval[interval.length - 1];
        if (this.intervalType == "s") {
          this.intervalTime = interval.slice(0, interval.length - 1) * 1e9;
        } else if (this.intervalType == "m") {
          this.intervalTime = interval.slice(0, interval.length - 1) * 1e6;
        } else if (this.intervalType == "u") {
          this.intervalTime = interval.slice(0, interval.length - 1) * 1e3;
        } else if (this.intervalType == "n") {
          this.intervalTime = interval.slice(0, interval.length - 1);
        } else {
          console.log("Error with argument: " + interval + ': Incorrect interval format. Format is an integer followed by "s" for seconds, "m" for milli, "u" for micro, and "n" for nanoseconds. Ex. 2u');
          process.exit(1);
        }
        this.intervalErrorChecked = true;
      }
      var thisTimer = this;
      if (this.intervalTime > 0) {
        if (this.intervalT1 == null) {
          this.intervalT1 = process.hrtime();
        }
        if (this.intervalTime * this.intervalCount > 8e15) {
          this.intervalT1 = process.hrtime();
          this.intervalCount = 1;
        }
        this.difArray = process.hrtime(this.intervalT1);
        this.difTime = this.difArray[0] * 1e9 + this.difArray[1];
        if (this.difTime < this.intervalTime * this.intervalCount) {
          if (this.intervalTime > 25e6) {
            if (this.deferredInterval == false) {
              this.deferredInterval = true;
              msDelay = (this.intervalTime - 25e6) / 1e6;
              this.deferredIntervalRef = setTimeout(function() {
                thisTimer.setInterval(task, args, interval, callback);
              }, msDelay);
            } else {
              this.deferredIntervalRef = null;
              this.intervalImmediateRef = setImmediate(function() {
                thisTimer.setInterval(task, args, interval, callback);
              });
            }
          } else {
            this.intervalImmediateRef = setImmediate(function() {
              thisTimer.setInterval(task, args, interval, callback);
            });
          }
        } else {
          this.intervalImmediateRef = null;
          if (this.logging) {
            console.log("nanotimer log: cycle time at - " + this.difTime);
          }
          if (args) {
            task.apply(null, args);
          } else {
            task();
          }
          if (this.intervalT1) {
            this.intervalCount++;
            this.deferredInterval = false;
            this.intervalImmediateRef = setImmediate(function() {
              thisTimer.setInterval(task, args, interval, callback);
            });
          }
        }
      } else {
        if (this.intervalT1 == null) {
          this.intervalT1 = process.hrtime();
          this.intervalContinue = true;
        }
        if (this.intervalContinue == true) {
          if (args) {
            task.apply(null, args);
          } else {
            task();
          }
          setImmediate(function() {
            thisTimer.setInterval(task, args, interval, callback);
          });
        } else {
          this.intervalT1 = null;
          this.intervalCount = 1;
          callback();
        }
      }
    };
    NanoTimer.prototype.setTimeout = function(task, args, delay, callback) {
      if (!task) {
        console.log("A task function must be specified to setTimeout");
        process.exit(1);
      } else {
        if (typeof task != "function") {
          console.log("Task argument to setTimeout must be a function reference");
          process.exit(1);
        }
      }
      if (!delay) {
        console.log("A delay argument must be specified");
        process.exit(1);
      } else {
        if (typeof delay != "string") {
          console.log("Delay argument to setTimeout must be a string specified as an integer followed by 's' for seconds, 'm' for milli, 'u' for micro, and 'n' for nanoseconds. Ex. 2u");
          process.exit(1);
        }
      }
      if (callback) {
        if (typeof callback != "function") {
          console.log("Callback argument to setTimeout must be a function reference");
          process.exit(1);
        } else {
          this.timeoutCallbackRef = callback;
        }
      }
      var thisTimer = this;
      var delayType = delay[delay.length - 1];
      if (delayType == "s") {
        var delayTime = delay.slice(0, delay.length - 1) * 1e9;
      } else if (delayType == "m") {
        var delayTime = delay.slice(0, delay.length - 1) * 1e6;
      } else if (delayType == "u") {
        var delayTime = delay.slice(0, delay.length - 1) * 1e3;
      } else if (delayType == "n") {
        var delayTime = delay.slice(0, delay.length - 1);
      } else {
        console.log("Error with argument: " + delay + ': Incorrect delay format. Format is an integer followed by "s" for seconds, "m" for milli, "u" for micro, and "n" for nanoseconds. Ex. 2u');
        process.exit(1);
      }
      if (this.timeOutT1 == null) {
        this.timeOutT1 = process.hrtime();
      }
      var difArray = process.hrtime(this.timeOutT1);
      var difTime = difArray[0] * 1e9 + difArray[1];
      if (difTime < delayTime) {
        if (delayTime > 25e6) {
          if (this.deferredTimeout == false) {
            this.deferredTimeout = true;
            msDelay = (delayTime - 25e6) / 1e6;
            this.deferredTimeoutRef = setTimeout(function() {
              thisTimer.setTimeout(task, args, delay, callback);
            }, msDelay);
          } else {
            this.deferredTimeoutRef = null;
            this.timeoutImmediateRef = setImmediate(function() {
              thisTimer.setTimeout(task, args, delay, callback);
            });
          }
        } else {
          this.timeoutImmediateRef = setImmediate(function() {
            thisTimer.setTimeout(task, args, delay, callback);
          });
        }
      } else {
        this.timeoutImmediateRef = null;
        this.timeOutT1 = null;
        this.deferredTimeout = false;
        if (this.logging == true) {
          console.log("nanotimer log: actual wait - " + difTime);
        }
        if (args) {
          task.apply(null, args);
        } else {
          task();
        }
        if (callback) {
          var data = { "waitTime": difTime };
          callback(data);
        }
      }
    };
    NanoTimer.prototype.clearInterval = function() {
      if (this.deferredIntervalRef) {
        clearTimeout(this.deferredIntervalRef);
        this.deferredInterval = false;
      }
      if (this.intervalImmediateRef) {
        clearImmediate(this.intervalImmediateRef);
      }
      this.intervalT1 = null;
      this.intervalCount = 1;
      this.intervalErrorChecked = false;
      if (this.intervalCallbackRef) {
        this.intervalCallbackRef();
      }
    };
    NanoTimer.prototype.clearTimeout = function() {
      if (this.deferredTimeoutRef) {
        clearTimeout(this.deferredTimeoutRef);
        var difArray = process.hrtime(this.timeOutT1);
        var difTime = difArray[0] * 1e9 + difArray[1];
        this.deferredTimeout = false;
      }
      if (this.timeoutImmediateRef) {
        clearImmediate(this.timeoutImmediateRef);
      }
      this.timeOutT1 = null;
      if (this.timeoutCallbackRef) {
        var data = { "waitTime": difTime };
        this.timeoutCallbackRef(data);
      }
    };
    module2.exports = NanoTimer;
  }
});

// node_modules/johnny-five/lib/piezo.js
var require_piezo = __commonJS({
  "node_modules/johnny-five/lib/piezo.js"(exports, module2) {
    var Board = require_board();
    var Timer2 = require_nanoTimer();
    var MICROSECONDS_PER_SECOND = 1e6;
    var priv = new Map();
    var defaultOctave = 4;
    function clearTimer(target) {
      if (!target.timer) {
        return target;
      }
      target.timer.clearInterval();
      delete target.timer;
      return target;
    }
    var Controllers = {
      DEFAULT: {
        initialize: {
          writable: true,
          value() {
            this.io.pinMode(this.pin, this.io.MODES.OUTPUT);
          }
        },
        tone: {
          writable: true,
          value(tone, duration) {
            if (isNaN(tone) || isNaN(duration)) {
              throw new Error("Piezo.tone: invalid tone or duration");
            }
            clearTimer(this);
            this.timer = new Timer2();
            let value = 1;
            this.timer.setInterval(() => {
              value = value === 1 ? 0 : 1;
              this.io.digitalWrite(this.pin, value);
              if (this.timer.difTime / 1e6 > duration) {
                clearTimer(this);
              }
            }, null, `${tone}u`, () => {
            });
            return this;
          }
        },
        noTone: {
          writable: true,
          value() {
            this.io.digitalWrite(this.pin, 0);
            return clearTimer(this);
          }
        }
      },
      I2C_BACKPACK: {
        ADDRESSES: {
          value: [10]
        },
        REGISTER: {
          value: {
            NO_TONE: 0,
            TONE: 1
          }
        },
        initialize: {
          writable: true,
          value(options) {
            const { Drivers } = require_sip();
            const address = Drivers.addressResolver(this, options);
            const state = priv.get(this);
            this.io.i2cConfig(options);
            state.address = address;
          }
        },
        tone: {
          writable: true,
          value(tone, duration) {
            const state = priv.get(this);
            if (isNaN(tone) || isNaN(duration)) {
              throw new Error("Piezo.tone: invalid tone or duration");
            }
            this.io.i2cWrite(state.address, [
              this.REGISTER.TONE,
              this.pin,
              tone >> 8 & 255,
              tone & 255,
              duration >> 24 & 255,
              duration >> 16 & 255,
              duration >> 8 & 255,
              duration & 255
            ]);
            return this;
          }
        },
        noTone: {
          writable: true,
          value() {
            const state = priv.get(this);
            this.io.i2cWrite(state.address, [
              this.REGISTER.NO_TONE,
              this.pin
            ]);
            return this;
          }
        }
      }
    };
    var Piezo = class {
      constructor(options) {
        Board.Component.call(this, options = Board.Options(options));
        Board.Controller.call(this, Controllers, options);
        const state = {
          isPlaying: false,
          timeout: null,
          address: null
        };
        priv.set(this, state);
        Object.defineProperties(this, {
          isPlaying: {
            get() {
              return state.isPlaying;
            }
          }
        });
        if (typeof this.initialize === "function") {
          this.initialize(options);
        }
      }
      note(note, duration) {
        return this.frequency(Piezo.Parsers.hzFromInput(note), duration);
      }
      tone(tone, duration) {
        return this.frequency(Piezo.ToFrequency(tone), duration);
      }
      frequency(frequency, duration) {
        return this.tone(Piezo.ToTone(frequency), duration);
      }
      play(tune, callback) {
        if (typeof tune !== "object") {
          tune = {
            song: tune
          };
        }
        if (typeof tune.song === "string") {
          tune.song = Piezo.ToSong(tune.song, tune.beats);
        }
        if (tune.song && !Array.isArray(tune.song)) {
          tune.song = [tune.song];
        }
        const state = priv.get(this);
        const tempo = tune.tempo || 250;
        const beatDuration = Math.round(6e4 / tempo);
        const song = tune.song || [];
        let duration;
        let nextNoteIndex = 0;
        const next = () => {
          if (nextNoteIndex === song.length) {
            state.isPlaying = false;
            if (typeof callback === "function") {
              callback(tune);
            }
            return;
          }
          const note = song[nextNoteIndex];
          const hz = Piezo.Parsers.hzFromInput(note);
          const beat = Piezo.Parsers.beatFromNote(note);
          duration = beat * beatDuration;
          nextNoteIndex++;
          if (hz === null) {
            this.noTone();
          } else {
            this.frequency(hz, duration);
          }
          state.timeout = setTimeout(next, duration);
        };
        state.isPlaying = true;
        next();
        return this;
      }
      off() {
        return this.noTone();
      }
      stop() {
        const state = priv.get(this);
        if (state.timeout) {
          clearTimeout(state.timeout);
          state.timeout = null;
        }
        return this;
      }
    };
    Piezo.Notes = {
      "c0": 16,
      "c#0": 17,
      "d0": 18,
      "d#0": 19,
      "e0": 21,
      "f0": 22,
      "f#0": 23,
      "g0": 25,
      "g#0": 26,
      "a0": 28,
      "a#0": 29,
      "b0": 31,
      "c1": 33,
      "c#1": 35,
      "d1": 37,
      "d#1": 39,
      "e1": 41,
      "f1": 44,
      "f#1": 47,
      "g1": 49,
      "g#1": 52,
      "a1": 55,
      "a#1": 58,
      "b1": 62,
      "c2": 65,
      "c#2": 69,
      "d2": 73,
      "d#2": 78,
      "e2": 82,
      "f2": 87,
      "f#2": 93,
      "g2": 98,
      "g#2": 104,
      "a2": 110,
      "a#2": 117,
      "b2": 124,
      "c3": 131,
      "c#3": 139,
      "d3": 147,
      "d#3": 156,
      "e3": 165,
      "f3": 175,
      "f#3": 185,
      "g3": 196,
      "g#3": 208,
      "a3": 220,
      "a#3": 233,
      "b3": 247,
      "c4": 262,
      "c#4": 277,
      "d4": 294,
      "d#4": 311,
      "e4": 330,
      "f4": 349,
      "f#4": 370,
      "g4": 392,
      "g#4": 415,
      "a4": 440,
      "a#4": 466,
      "b4": 494,
      "c5": 523,
      "c#5": 554,
      "d5": 587,
      "d#5": 622,
      "e5": 659,
      "f5": 698,
      "f#5": 740,
      "g5": 784,
      "g#5": 831,
      "a5": 880,
      "a#5": 932,
      "b5": 988,
      "c6": 1047,
      "c#6": 1109,
      "d6": 1175,
      "d#6": 1245,
      "e6": 1319,
      "f6": 1397,
      "f#6": 1480,
      "g6": 1568,
      "g#6": 1661,
      "a6": 1760,
      "a#6": 1865,
      "b6": 1976,
      "c7": 2093,
      "c#7": 2217,
      "d7": 2349,
      "d#7": 2489,
      "e7": 2637,
      "f7": 2794,
      "f#7": 2960,
      "g7": 3136,
      "g#7": 3322,
      "a7": 3520,
      "a#7": 3729,
      "b7": 3951,
      "c8": 4186,
      "c#8": 4435,
      "d8": 4699,
      "d#8": 4978,
      "e8": 5274,
      "f8": 5588,
      "f#8": 5920,
      "g8": 6272,
      "g#8": 6645,
      "a8": 7040,
      "a#8": 7459,
      "b8": 7902
    };
    Piezo.Frequencies = Object.keys(Piezo.Notes).reduce((accum, note) => {
      accum[Piezo.Notes[note]] = note;
      return accum;
    }, {});
    Piezo.Parsers = {};
    Piezo.Parsers.hzFromInput = (input) => {
      let output = input;
      if (Array.isArray(input)) {
        output = input[0];
      }
      if (typeof output === "number" && Piezo.Frequencies[output]) {
        return output;
      }
      if (typeof output === "string") {
        output = output.toLowerCase().trim();
        if (output.endsWith("#") || output.length === 1) {
          output += defaultOctave;
        }
        output = Piezo.Notes[output] || null;
      }
      if (isNaN(output)) {
        output = null;
      }
      return output;
    };
    Piezo.Parsers.beatFromNote = (note) => {
      let beat = 1;
      if (Array.isArray(note) && note[1] !== void 0) {
        beat = note[1];
      }
      return beat;
    };
    Piezo.isValidOctave = (octave) => typeof octave === "number" && (octave >= 0 && octave <= 8);
    Piezo.defaultOctave = (octave) => {
      if (Piezo.isValidOctave(octave)) {
        defaultOctave = octave;
      }
      return defaultOctave;
    };
    Piezo.ToFrequency = (tone) => {
      const toneSeconds = tone / MICROSECONDS_PER_SECOND;
      const period = toneSeconds * 2;
      return Math.round(1 / period);
    };
    Piezo.ToTone = (frequency) => {
      const period = 1 / frequency;
      const duty = period / 2;
      return Math.round(duty * MICROSECONDS_PER_SECOND);
    };
    Piezo.ToSong = (stringSong, beats = 1) => {
      const notes = stringSong.split(" ");
      const song = [];
      let note;
      let lastNote;
      while (notes.length) {
        note = notes.shift();
        if (/^[0-9]+$/.test(note)) {
          note = parseInt(note, 10);
        }
        lastNote = song[song.length - 1];
        if (lastNote && lastNote[0] === note) {
          lastNote[1] += beats;
        } else {
          song.push([note, beats]);
        }
      }
      return song;
    };
    module2.exports = Piezo;
  }
});

// node_modules/johnny-five/lib/proximity.js
var require_proximity = __commonJS({
  "node_modules/johnny-five/lib/proximity.js"(exports, module2) {
    var Board = require_board();
    var Collection = require_collection();
    var EVS = require_evshield();
    var Fn = require_fn();
    var Withinable = require_withinable();
    var Pins = Board.Pins;
    var toFixed = Fn.toFixed;
    var priv = new Map();
    function analogHandler(options, callback) {
      this.io.pinMode(this.pin, this.io.MODES.ANALOG);
      this.io.analogRead(this.pin, (data) => {
        callback.call(this, data);
      });
    }
    var Controllers = {
      GP2Y0A21YK: {
        initialize: {
          value: analogHandler
        },
        toCm: {
          value(value) {
            return toFixed(12343.85 * value ** -1.15, 2);
          }
        }
      },
      GP2D120XJ00F: {
        initialize: {
          value: analogHandler
        },
        toCm: {
          value(value) {
            return toFixed(2914 / (value + 5) - 1, 2);
          }
        }
      },
      GP2Y0A02YK0F: {
        initialize: {
          value: analogHandler
        },
        toCm: {
          value(value) {
            return toFixed(10650.08 * value ** -0.935 - 10, 2);
          }
        }
      },
      GP2Y0A41SK0F: {
        initialize: {
          value: analogHandler
        },
        toCm: {
          value(value) {
            return toFixed(2076 / (value - 11), 2);
          }
        }
      },
      GP2Y0A710K0F: {
        initialize: {
          value: analogHandler
        },
        toCm: {
          value(value) {
            return toFixed(38631e4 * value ** -2.463343, 0);
          }
        }
      },
      SRF10: {
        ADDRESSES: {
          value: [112]
        },
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            const address = Drivers.addressResolver(this, options);
            const msUntilNextRead = 65;
            this.io.i2cConfig(options);
            this.io.i2cWrite(address, [1, 16]);
            this.io.i2cWrite(address, [2, 255]);
            const read = () => {
              this.io.i2cWrite(address, [0, 81]);
              setTimeout(() => {
                this.io.i2cWrite(address, [2]);
                this.io.i2cReadOnce(address, 2, (data) => callback(data[0] << 8 | data[1]));
                read();
              }, msUntilNextRead);
            };
            read();
          }
        },
        toCm: {
          value(value) {
            return value;
          }
        }
      },
      MB1000: {
        initialize: {
          value: analogHandler
        },
        toCm: {
          value(value) {
            return toFixed(value / 2 * 2.54, 2);
          }
        }
      },
      MB1003: {
        initialize: {
          value: analogHandler
        },
        toCm: {
          value(value) {
            return toFixed(value / 2, 1);
          }
        }
      },
      MB1230: {
        initialize: {
          value: analogHandler
        },
        toCm: {
          value(value) {
            return value >> 0;
          }
        }
      },
      HCSR04: {
        initialize: {
          value(options, callback) {
            let pinValue = options.pinValue;
            const msToNextRead = 65;
            if (Pins.isFirmata(this)) {
              if (typeof pinValue === "string" && (pinValue.length > 1 && pinValue[0] === "A")) {
                pinValue = this.io.analogPins[+pinValue.slice(1)];
              }
              pinValue = +pinValue;
              if (this.io.analogPins.includes(pinValue)) {
                options.pin = pinValue;
              }
              this.pin = options.pin;
            }
            const settings = {
              pin: options.pin,
              value: this.io.HIGH,
              pulseOut: 5
            };
            const read = () => {
              this.io.pingRead(settings, (microseconds) => {
                callback(microseconds);
                setTimeout(read, msToNextRead);
              });
            };
            read();
          }
        },
        toCm: {
          value(value) {
            return toFixed(value / 29.1 / 2, 1);
          }
        }
      },
      HCSR04I2CBACKPACK: {
        ADDRESSES: {
          value: [
            39
          ]
        },
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            const address = Drivers.addressResolver(this, options);
            const msToNextRead = 90;
            this.io.i2cConfig(options);
            if (typeof options.pin === "undefined") {
              this.pin = 8;
            }
            const read = () => {
              this.io.i2cReadOnce(address, 2, (data) => {
                callback((data[0] << 8) + data[1]);
                setTimeout(read, msToNextRead);
              });
            };
            read();
          }
        },
        toCm: {
          value(value) {
            return toFixed(value / 29.1 / 2, 1);
          }
        }
      },
      LIDARLITE: {
        ADDRESSES: {
          value: [
            98
          ]
        },
        REGISTER: {
          value: {
            ENABLE: 0,
            READ: 143
          }
        },
        initialize: {
          value(options, callback) {
            const { Drivers } = require_sip();
            const address = Drivers.addressResolver(this, options);
            this.io.i2cConfig(options);
            const read = () => {
              this.io.i2cWrite(address, this.REGISTER.ENABLE, 4);
              setTimeout(() => {
                this.io.i2cReadOnce(address, this.REGISTER.READ, 2, (bytes) => {
                  callback((bytes[0] << 8) + bytes[1]);
                  read();
                });
              }, 20);
            };
            read();
          }
        },
        toCm: {
          value(value) {
            return value >> 0;
          }
        }
      },
      EVS_EV3_IR: {
        initialize: {
          value(options, callback) {
            const state = priv.get(this);
            state.shield = EVS.shieldPort(options.pin);
            state.ev3 = new EVS(Object.assign(options, {
              io: this.io
            }));
            state.ev3.setup(state.shield, EVS.Type_EV3);
            state.ev3.read(state.shield, EVS.Proximity, EVS.Proximity_Bytes, (data) => callback(data[0] | data[1] << 8));
          }
        },
        toCm: {
          value(value) {
            return value;
          }
        }
      },
      EVS_EV3_US: {
        initialize: {
          value(options, callback) {
            const state = priv.get(this);
            state.shield = EVS.shieldPort(options.pin);
            state.ev3 = new EVS(Object.assign(options, {
              io: this.io
            }));
            state.ev3.setup(state.shield, EVS.Type_EV3);
            state.ev3.read(state.shield, EVS.Proximity, EVS.Proximity_Bytes, (data) => callback(data[0] | data[1] << 8));
          }
        },
        toCm: {
          value(value) {
            return value / 10;
          }
        }
      }
    };
    Controllers["2Y0A21"] = Controllers.GP2Y0A21YK;
    Controllers["2D120X"] = Controllers.GP2D120XJ00F;
    Controllers["2Y0A02"] = Controllers.GP2Y0A02YK0F;
    Controllers["0A41"] = Controllers.GP2Y0A41SK0F;
    Controllers["0A21"] = Controllers.GP2Y0A21YK;
    Controllers["0A02"] = Controllers.GP2Y0A02YK0F;
    Controllers["41SK0F"] = Controllers.GP2Y0A41SK0F;
    Controllers["21YK"] = Controllers.GP2Y0A21YK;
    Controllers["2YK0F"] = Controllers.GP2Y0A02YK0F;
    Controllers.MB1010 = Controllers.MB1000;
    Controllers["LV-MaxSonar-EZ"] = Controllers.MB1000;
    Controllers["LV-MaxSonar-EZ0"] = Controllers.MB1000;
    Controllers["LV-MaxSonar-EZ1"] = Controllers.MB1010;
    Controllers["HRLV-MaxSonar-EZ0"] = Controllers.MB1003;
    Controllers["XL-MaxSonar-EZ3"] = Controllers.MB1230;
    [
      "HC-SR04",
      "SR04",
      "SRF05",
      "SRF06",
      "PARALLAXPING",
      "SEEEDPING",
      "GROVEPING",
      "PING_PULSE_IN",
      "ULTRASONIC_PING"
    ].forEach((alias) => {
      Controllers[alias] = Controllers.HCSR04;
    });
    [
      "HCSR04-I2C-BACKPACK",
      "HC-SR04-I2C-BACKPACK",
      "SR04-I2C-BACKPACK",
      "SR04I2CBACKPACK",
      "PINGI2CBACKPACK",
      "PING-I2C-BACKPACK",
      "HCSR04_I2C_BACKPACK",
      "HC_SR04_I2C_BACKPACK",
      "SR04_I2C_BACKPACK",
      "SR04I2CBACKPACK",
      "PINGI2CBACKPACK",
      "PING_I2C_BACKPACK"
    ].forEach((alias) => {
      Controllers[alias] = Controllers.HCSR04I2CBACKPACK;
    });
    Controllers["LIDAR-Lite"] = Controllers.LIDARLITE;
    Controllers.DEFAULT = Controllers["GP2Y0A21YK"];
    var Proximity = class extends Withinable {
      constructor(options) {
        super();
        const pinValue = typeof options === "object" ? options.pin : options;
        Board.Component.call(this, options = Board.Options(options));
        Board.Controller.call(this, Controllers, options);
        const state = {};
        const freq = options.freq || 25;
        let raw = 0;
        let last = 0;
        if (!this.toCm) {
          this.toCm = options.toCm || ((x) => x);
        }
        priv.set(this, state);
        Object.defineProperties(this, {
          centimeters: {
            get() {
              return this.toCm(raw);
            }
          },
          cm: {
            get() {
              return this.centimeters;
            }
          },
          inches: {
            get() {
              return toFixed(this.centimeters * 0.39, 2);
            }
          },
          in: {
            get() {
              return this.inches;
            }
          }
        });
        if (typeof this.initialize === "function") {
          options.pinValue = pinValue;
          this.initialize(options, (data) => raw = data);
        }
        setInterval(() => {
          if (raw === void 0) {
            return;
          }
          const data = {
            cm: this.cm,
            centimeters: this.centimeters,
            in: this.in,
            inches: this.inches
          };
          this.emit("data", data);
          if (raw !== last) {
            last = raw;
            this.emit("change", data);
          }
        }, freq);
      }
    };
    Proximity.Collection = class extends Collection.Emitter {
      constructor(numsOrObjects) {
        super(numsOrObjects);
      }
      get type() {
        return Proximity;
      }
    };
    Collection.installMethodForwarding(Proximity.Collection.prototype, Proximity.prototype);
    Proximity.Controllers = Object.keys(Controllers);
    if (!!process.env.IS_TEST_MODE) {
      Proximity.Controllers = Controllers;
      Proximity.purge = () => {
        priv.clear();
      };
    }
    module2.exports = Proximity;
  }
});

// node_modules/johnny-five/lib/reflectancearray.js
var require_reflectancearray = __commonJS({
  "node_modules/johnny-five/lib/reflectancearray.js"(exports, module2) {
    var Board = require_board();
    var Emitter = require_emitter();
    var Fn = require_fn();
    var Led = require_led2();
    var Sensor = require_sensor();
    var CALIBRATED_MIN_VALUE = 0;
    var CALIBRATED_MAX_VALUE = 1e3;
    var LINE_ON_THRESHOLD = 200;
    var LINE_NOISE_THRESHOLD = 50;
    var priv = new Map();
    var Controllers = {
      DEFAULT: {
        initialize: {
          value(options) {
            if (typeof options.emitter === "undefined") {
              throw new Error("Emitter pin is required");
            }
            if (!options.pins || options.pins.length === 0) {
              throw new Error("Pins must be defined");
            }
            const state = priv.get(this);
            state.emitter = new Led({
              board: this.board,
              pin: options.emitter
            });
            state.sensorStates = options.pins.map((pin) => {
              const sensor = new Sensor({
                board: this.board,
                freq: state.freq,
                pin
              });
              const sensorState = {
                sensor,
                rawValue: 0,
                dataReceived: false
              };
              sensor.on("data", (value) => {
                onData(this, sensorState, value);
              });
              return sensorState;
            });
          }
        }
      }
    };
    function onData(instance, sensorState, value) {
      const state = priv.get(instance);
      sensorState.dataReceived = true;
      sensorState.rawValue = value;
      const allRead = state.sensorStates.every(({ dataReceived }) => dataReceived);
      if (allRead) {
        instance.emit("data", instance.raw);
        if (state.autoCalibrate) {
          setCalibration(state.calibration, instance.raw);
        }
        if (instance.isCalibrated) {
          instance.emit("calibratedData", instance.values);
          instance.emit("line", instance.line);
        }
        state.sensorStates.forEach((sensorState2) => {
          sensorState2.dataReceived = false;
        });
      }
    }
    function setCalibration(calibration, values) {
      values.forEach((value, i) => {
        if (calibration.min[i] === void 0 || value < calibration.min[i]) {
          calibration.min[i] = value;
        }
        if (calibration.max[i] === void 0 || value > calibration.max[i]) {
          calibration.max[i] = value;
        }
      });
    }
    function calibrationIsValid(calibration, sensors) {
      return calibration && (calibration.max && calibration.max.length === sensors.length) && (calibration.min && calibration.min.length === sensors.length);
    }
    function calibratedValues(instance) {
      return instance.raw.map((value, i) => {
        return Fn.constrain(Fn.scale(value, instance.calibration.min[i], instance.calibration.max[i], CALIBRATED_MIN_VALUE, CALIBRATED_MAX_VALUE), CALIBRATED_MIN_VALUE, CALIBRATED_MAX_VALUE);
      });
    }
    function maxLineValue(instance) {
      return (instance.sensors.length - 1) * CALIBRATED_MAX_VALUE;
    }
    function getLine(instance, whiteLine) {
      const state = priv.get(instance);
      let onLine = false;
      let avg = 0;
      let sum = 0;
      whiteLine = !!whiteLine;
      instance.values.forEach((value, i) => {
        value = whiteLine ? CALIBRATED_MAX_VALUE - value : value;
        if (value > LINE_ON_THRESHOLD) {
          onLine = true;
        }
        if (value > LINE_NOISE_THRESHOLD) {
          avg += value * i * CALIBRATED_MAX_VALUE;
          sum += value;
        }
      });
      if (!onLine) {
        const maxPoint = maxLineValue(instance) + 1;
        const centerPoint = maxPoint / 2;
        return state.lastLine < centerPoint ? 0 : maxPoint;
      }
      return state.lastLine = Math.floor(avg / sum);
    }
    var ReflectanceArray = class extends Emitter {
      constructor(options) {
        super();
        Board.Component.call(this, options = Board.Options(options));
        Board.Controller.call(this, Controllers, options);
        const {
          autoCalibrate = false,
          freq = 25
        } = options;
        const state = {
          autoCalibrate,
          freq,
          lastLine: 0,
          isOn: false,
          calibration: {
            min: [],
            max: []
          }
        };
        priv.set(this, state);
        if (typeof this.initialize === "function") {
          this.initialize(options);
        }
        Object.defineProperties(this, {
          isOn: {
            get() {
              return state.emitter.isOn;
            }
          },
          isCalibrated: {
            get() {
              return calibrationIsValid(this.calibration, this.sensors);
            }
          },
          isOnLine: {
            get() {
              const line = this.line;
              return line > CALIBRATED_MIN_VALUE && line < maxLineValue(this);
            }
          },
          sensors: {
            get() {
              return state.sensorStates.map(({ sensor }) => sensor);
            }
          },
          calibration: {
            get() {
              return state.calibration;
            }
          },
          raw: {
            get() {
              return state.sensorStates.map(({ rawValue }) => rawValue);
            }
          },
          values: {
            get() {
              return this.isCalibrated ? calibratedValues(this) : this.raw;
            }
          },
          line: {
            get() {
              return this.isCalibrated ? getLine(this) : 0;
            }
          }
        });
      }
      enable() {
        priv.get(this).emitter.on();
        return this;
      }
      disable() {
        priv.get(this).emitter.off();
        return this;
      }
      calibrate() {
        this.once("data", (values) => {
          setCalibration(priv.get(this).calibration, values);
          this.emit("calibrated");
        });
        return this;
      }
      calibrateUntil(predicate) {
        const loop = () => {
          this.calibrate();
          this.once("calibrated", () => {
            if (!predicate()) {
              loop();
            }
          });
        };
        loop();
        return this;
      }
      loadCalibration(calibration) {
        if (!calibrationIsValid(calibration, this.sensors)) {
          throw new Error("Calibration data not properly set: {min: [], max: []}");
        }
        priv.get(this).calibration = calibration;
        return this;
      }
    };
    module2.exports = ReflectanceArray;
  }
});

// node_modules/johnny-five/lib/relay.js
var require_relay = __commonJS({
  "node_modules/johnny-five/lib/relay.js"(exports, module2) {
    var Board = require_board();
    var Collection = require_collection();
    var Pins = Board.Pins;
    var priv = new Map();
    var Relay = class {
      constructor(options) {
        const pinValue = typeof options === "object" ? options.pin : options;
        Board.Component.call(this, options = Board.Options(options));
        options.type = options.type || "NO";
        const state = {
          isInverted: options.type === "NC",
          isClosed: false,
          value: null
        };
        priv.set(this, state);
        Object.defineProperties(this, {
          value: {
            get() {
              return Number(this.isClosed);
            }
          },
          type: {
            get() {
              return state.isInverted ? "NC" : "NO";
            }
          },
          isClosed: {
            get() {
              return state.isClosed;
            }
          }
        });
        if (Pins.isFirmata(this) && (typeof pinValue === "string" && pinValue[0] === "A")) {
          this.pin = this.io.analogPins[+pinValue.slice(1)];
          this.io.pinMode(this.pin, this.io.MODES.OUTPUT);
        }
      }
      close() {
        const state = priv.get(this);
        this.io.digitalWrite(this.pin, state.isInverted ? this.io.LOW : this.io.HIGH);
        state.isClosed = true;
        return this;
      }
      open() {
        const state = priv.get(this);
        this.io.digitalWrite(this.pin, state.isInverted ? this.io.HIGH : this.io.LOW);
        state.isClosed = false;
        return this;
      }
      toggle() {
        const state = priv.get(this);
        if (state.isClosed) {
          this.open();
        } else {
          this.close();
        }
        return this;
      }
    };
    var Relays = class extends Collection {
      constructor(numsOrObjects) {
        super(numsOrObjects);
      }
      get type() {
        return Relay;
      }
    };
    Collection.installMethodForwarding(Relays.prototype, Relay.prototype);
    Relay.Collection = Relays;
    if (!!process.env.IS_TEST_MODE) {
      Relay.purge = () => {
        priv.clear();
      };
    }
    module2.exports = Relay;
  }
});

// node_modules/johnny-five/lib/servo.js
var require_servo = __commonJS({
  "node_modules/johnny-five/lib/servo.js"(exports, module2) {
    var Board = require_board();
    var Pins = Board.Pins;
    var Expander = require_expander();
    var Collection = require_collection();
    var Emitter = require_emitter();
    var Fn = require_fn();
    var Animation = require_animation();
    var priv = new Map();
    var Controllers = {
      PCA9685: {
        initialize: {
          value({ address, pwmRange, frequency, pin }) {
            const state = priv.get(this);
            this.address = address || 64;
            this.pwmRange = pwmRange || [450, 1850];
            this.frequency = frequency || 50;
            state.expander = Expander.get({
              address: this.address,
              controller: this.controller,
              bus: this.bus,
              pwmRange: this.pwmRange,
              frequency: this.frequency
            });
            this.pin = state.expander.normalize(pin);
          }
        },
        update: {
          writable: true,
          value(microseconds) {
            const state = priv.get(this);
            state.expander.servoWrite(this.pin, microseconds);
          }
        }
      },
      Standard: {
        initialize: {
          value({ debug, pwmRange }) {
            if (debug && !this.board.pins.isServo(this.pin)) {
              Board.Pins.Error({
                pin: this.pin,
                type: "PWM",
                via: "Servo"
              });
            }
            if (Array.isArray(pwmRange)) {
              this.io.servoConfig(this.pin, pwmRange[0], pwmRange[1]);
            } else {
              this.io.pinMode(this.pin, this.mode);
            }
          }
        },
        update: {
          writable: true,
          value(degrees) {
            if (this.last && this.last.degrees === degrees) {
              return this;
            }
            let microseconds = Fn.map(degrees, this.degreeRange[0], this.degreeRange[1], this.pwmRange[0], this.pwmRange[1]);
            microseconds |= 0;
            this.io.servoWrite(this.pin, microseconds);
          }
        }
      }
    };
    Controllers.DEFAULT = Controllers.Standard;
    var Servo = class extends Emitter {
      constructor(options) {
        super();
        const history = [];
        let pinValue = typeof options === "object" ? options.pin : options;
        Board.Component.call(this, options = Board.Options(options));
        this.degreeRange = options.degreeRange || [0, 180];
        this.pwmRange = options.pwmRange || [600, 2400];
        this.range = options.range || this.degreeRange;
        this.deadband = options.deadband || [90, 90];
        this.fps = options.fps || 100;
        this.offset = options.offset || 0;
        this.range = options.range || [0 - this.offset, 180 - this.offset];
        this.mode = this.io.MODES.SERVO;
        this.interval = null;
        this.value = null;
        this.type = options.type || "standard";
        if (options.isInverted) {
          console.warn("The 'isInverted' property has been renamed 'invert'");
        }
        this.invert = options.isInverted || options.invert || false;
        if (typeof options.controller === "undefined" && Pins.isFirmata(this)) {
          if (typeof pinValue === "string" && (pinValue.length > 1 && pinValue[0] === "A")) {
            pinValue = this.io.analogPins[+pinValue.slice(1)];
          }
          pinValue = +pinValue;
          if (!Number.isNaN(pinValue) && this.pin !== pinValue) {
            this.pin = pinValue;
          }
        }
        Board.Controller.call(this, Controllers, options);
        priv.set(this, {
          history
        });
        Object.defineProperties(this, {
          history: {
            get() {
              return history.slice(-5);
            }
          },
          last: {
            get() {
              return history[history.length - 1];
            }
          },
          position: {
            get() {
              return history.length ? history[history.length - 1].degrees : -1;
            }
          }
        });
        this.initialize(options);
        if (typeof options.startAt !== "undefined") {
          this.startAt = options.startAt;
          this.to(options.startAt);
        } else {
          this.startAt = (this.degreeRange[1] - this.degreeRange[0]) / 2 + this.degreeRange[0];
        }
        if (options.center) {
          this.center();
        }
        if (options.type === "continuous") {
          this.stop();
        }
      }
      to(degrees, time, rate) {
        const state = priv.get(this);
        const options = {};
        if (typeof degrees === "object") {
          Object.assign(options, degrees);
          options.duration = degrees.duration || degrees.interval || 1e3;
          options.cuePoints = degrees.cuePoints || [0, 1];
          options.keyFrames = degrees.keyFrames || [
            null,
            {
              value: typeof degrees.degrees === "number" ? degrees.degrees : this.startAt
            }
          ];
          options.oncomplete = () => {
            process.nextTick(() => {
              if (typeof degrees.oncomplete === "function") {
                degrees.oncomplete();
              }
              this.emit("move:complete");
            });
          };
          state.isRunning = true;
          state.animation = state.animation || new Animation(this);
          state.animation.enqueue(options);
        } else {
          const target = degrees;
          degrees = Fn.constrain(degrees, this.range[0], this.range[1]);
          if (typeof time !== "undefined") {
            options.duration = time;
            options.keyFrames = [null, {
              degrees
            }];
            options.fps = rate || this.fps;
            this.to(options);
          } else {
            this.value = degrees;
            degrees += this.offset;
            if (this.invert) {
              degrees = Fn.map(degrees, this.degreeRange[0], this.degreeRange[1], this.degreeRange[1], this.degreeRange[0]);
            }
            this.update(degrees);
            if (state.history.length > 5) {
              state.history.shift();
            }
            state.history.push({
              timestamp: Date.now(),
              degrees,
              target
            });
          }
        }
        return this;
      }
      step(degrees, time) {
        return this.to(this.last.target + degrees, time);
      }
      move(degrees, time) {
        console.warn("Servo.prototype.move has been renamed to Servo.prototype.to");
        return this.to(degrees, time);
      }
      min(time, rate) {
        return this.to(this.range[0], time, rate);
      }
      max(time, rate) {
        return this.to(this.range[1], time, rate);
      }
      center(time, rate) {
        return this.to(Math.abs((this.range[0] + this.range[1]) / 2), time, rate);
      }
      home() {
        return this.to(this.startAt);
      }
      sweep(opts) {
        const options = {
          keyFrames: [{
            value: this.range[0]
          }, {
            value: this.range[1]
          }],
          metronomic: true,
          loop: true,
          easing: "inOutSine"
        };
        if (Array.isArray(opts)) {
          options.keyFrames = rangeToKeyFrames(opts);
        } else {
          if (typeof opts === "object" && opts !== null) {
            Object.assign(options, opts);
            if (Array.isArray(options.range)) {
              options.keyFrames = rangeToKeyFrames(options.range);
            }
          }
        }
        return this.to(options);
      }
      stop() {
        const state = priv.get(this);
        if (state.animation) {
          state.animation.stop();
        }
        if (this.type === "continuous") {
          this.to(this.deadband.reduce((a, b) => Math.round((a + b) / 2)));
        } else {
          clearInterval(this.interval);
        }
        return this;
      }
    };
    Servo.prototype[Animation.normalize] = function(keyFrames) {
      const last = this.last ? this.last.target : this.startAt;
      if (keyFrames[0] === null) {
        keyFrames[0] = {
          value: last
        };
      }
      if (typeof keyFrames[0] === "number") {
        keyFrames[0] = {
          value: last + keyFrames[0]
        };
      }
      return keyFrames.map((frame) => {
        const value = frame;
        if (frame !== null) {
          if (typeof frame === "number") {
            frame = {
              step: value
            };
          } else {
            if (typeof frame.degrees === "number") {
              frame.value = frame.degrees;
              delete frame.degrees;
            }
            if (typeof frame.copyDegrees === "number") {
              frame.copyValue = frame.copyDegrees;
              delete frame.copyDegrees;
            }
          }
          if (!frame.easing) {
            frame.easing = "linear";
          }
        }
        return frame;
      });
    };
    Servo.prototype[Animation.render] = function(position) {
      return this.to(position[0]);
    };
    function rangeToKeyFrames(range) {
      return range.map((value) => ({
        value
      }));
    }
    ["clockWise", "cw", "counterClockwise", "ccw"].forEach((api) => {
      Servo.prototype[api] = function(rate) {
        let range;
        rate = rate === void 0 ? 1 : rate;
        if (this.type !== "continuous") {
          this.board.error("Servo", `Servo.prototype.${api} is only available for continuous servos`);
        }
        if (api === "cw" || api === "clockWise") {
          range = [rate, 0, 1, this.deadband[1] + 1, this.range[1]];
        } else {
          range = [rate, 0, 1, this.deadband[0] - 1, this.range[0]];
        }
        return this.to(Fn.scale.apply(null, range) | 0);
      };
    });
    Servo.Continuous = class extends Servo {
      constructor(pinOrOpts) {
        const options = {};
        if (typeof pinOrOpts === "object") {
          Object.assign(options, pinOrOpts);
        } else {
          options.pin = pinOrOpts;
        }
        options.type = "continuous";
        super(options);
      }
    };
    var Servos = class extends Collection {
      constructor(numsOrObjects) {
        super(numsOrObjects);
      }
      get type() {
        return Servo;
      }
      [Animation.normalize](keyFrameSet) {
        return keyFrameSet.map((keyFrames, index) => {
          if (keyFrames !== null && Array.isArray(keyFrames)) {
            let servo = this[index];
            if (servo instanceof Servos) {
              servo = servo[0];
            }
            const last = servo.last ? servo.last.target : servo.startAt;
            if (keyFrames[0] === null) {
              keyFrames[0] = {
                value: last
              };
            }
            if (Array.isArray(keyFrames)) {
              if (keyFrames[0] === null) {
                keyFrameSet[index][0] = {
                  value: last
                };
              }
            }
            return this[index][Animation.normalize](keyFrames);
          }
          if (keyFrames && typeof keyFrames.degrees === "number") {
            keyFrames.value = keyFrames.degrees;
            delete keyFrames.degrees;
          }
          return keyFrames;
        });
      }
      [Animation.render](position) {
        return this.each((servo, i) => servo.to(position[i]));
      }
    };
    Collection.installMethodForwarding(Servos.prototype, Servo.prototype, {
      skip: [Animation.normalize, Animation.render]
    });
    Servo.Collection = Servos;
    if (!!process.env.IS_TEST_MODE) {
      Servo.Controllers = Controllers;
      Servo.purge = () => {
        priv.clear();
      };
    }
    module2.exports = Servo;
  }
});

// node_modules/johnny-five/lib/stepper.js
var require_stepper = __commonJS({
  "node_modules/johnny-five/lib/stepper.js"(exports, module2) {
    var Board = require_board();
    var Fn = require_fn();
    var priv = new Map();
    var steppers = new Map();
    var TAU = Fn.TAU;
    var MAXSTEPPERS = 6;
    var Step = class {
      constructor(stepper) {
        this.rpm = 180;
        this.direction = -1;
        this.speed = 0;
        this.accel = 0;
        this.decel = 0;
        this.stepper = stepper;
      }
      move(steps, dir, speed, accel, decel, callback) {
        this.stepper.io.stepperStep.apply(this.stepper.io, [this.stepper.id, dir, steps, speed, accel, decel, callback]);
      }
    };
    Step.PROPERTIES = ["rpm", "direction", "speed", "accel", "decel"];
    Step.DEFAULTS = [180, -1, 0, 0, 0];
    function MotorPins(pins) {
      let k = 0;
      pins = pins.slice();
      while (pins.length) {
        this[`motor${++k}`] = pins.shift();
      }
    }
    function isSupported({ pins, MODES }) {
      return pins.some(({ supportedModes }) => supportedModes.includes(MODES.STEPPER));
    }
    var Stepper = class {
      constructor(options) {
        const params = [];
        let state;
        Board.Component.call(this, options = Board.Options(options));
        if (!isSupported(this.io)) {
          throw new Error("Stepper is not supported");
        }
        if (!options.pins) {
          throw new Error("Stepper requires a `pins` object or array");
        }
        if (!options.stepsPerRev) {
          throw new Error("Stepper requires a `stepsPerRev` number value");
        }
        steppers.set(this.board, steppers.get(this.board) || []);
        this.id = steppers.get(this.board).length;
        if (this.id >= MAXSTEPPERS) {
          throw new Error(`Stepper cannot exceed max steppers (${MAXSTEPPERS})`);
        }
        if (Array.isArray(this.pins)) {
          if (this.pins.length === 2) {
            if (!options.type) {
              throw new Error("Stepper requires a `type` number value (DRIVER, TWO_WIRE)");
            }
          }
          if (options.type === Stepper.TYPE.DRIVER) {
            this.pins = {
              step: this.pins[0],
              dir: this.pins[1]
            };
          } else {
            this.pins = new MotorPins(this.pins);
          }
        }
        if (!options.type) {
          if (this.pins.dir) {
            options.type = Stepper.TYPE.DRIVER;
          } else {
            if (this.pins.motor3) {
              options.type = Stepper.TYPE.FOUR_WIRE;
            } else {
              options.type = Stepper.TYPE.TWO_WIRE;
            }
          }
        }
        params.push(this.id, options.type, options.stepsPerRev);
        if (options.type === Stepper.TYPE.DRIVER) {
          if (typeof this.pins.dir === "undefined" || typeof this.pins.step === "undefined") {
            throw new Error("Stepper.TYPE.DRIVER expects: `pins.dir`, `pins.step`");
          }
          params.push(this.pins.dir, this.pins.step);
        }
        if (options.type === Stepper.TYPE.TWO_WIRE) {
          if (typeof this.pins.motor1 === "undefined" || typeof this.pins.motor2 === "undefined") {
            throw new Error("Stepper.TYPE.TWO_WIRE expects: `pins.motor1`, `pins.motor2`");
          }
          params.push(this.pins.motor1, this.pins.motor2);
        }
        if (options.type === Stepper.TYPE.FOUR_WIRE) {
          if (typeof this.pins.motor1 === "undefined" || typeof this.pins.motor2 === "undefined" || typeof this.pins.motor3 === "undefined" || typeof this.pins.motor4 === "undefined") {
            throw new Error("Stepper.TYPE.FOUR_WIRE expects: `pins.motor1`, `pins.motor2`, `pins.motor3`, `pins.motor4`");
          }
          params.push(this.pins.motor1, this.pins.motor2, this.pins.motor3, this.pins.motor4);
        }
        params.slice(3).forEach((pin) => {
          this.io.pinMode(pin, this.io.MODES.STEPPER);
        });
        this.io.stepperConfig.apply(this.io, params);
        steppers.get(this.board).push(this);
        state = Step.PROPERTIES.reduce((state2, key, i) => (state2[key] = typeof options[key] !== "undefined" ? options[key] : Step.DEFAULTS[i], state2), {
          isRunning: false,
          type: options.type,
          pins: this.pins
        });
        priv.set(this, state);
        Object.defineProperties(this, {
          type: {
            get() {
              return state.type;
            }
          },
          pins: {
            get() {
              return state.pins;
            }
          }
        });
      }
      rpm(rpm) {
        const state = priv.get(this);
        if (typeof rpm === "undefined") {
          return state.rpm;
        }
        state.rpm = rpm;
        state.speed = Math.round(rpm * TAU * 100 / 60);
        return this;
      }
      speed(speed) {
        const state = priv.get(this);
        if (typeof speed === "undefined") {
          return state.speed;
        }
        state.speed = speed;
        state.rpm = Math.round(speed / TAU / 100 * 60);
        return this;
      }
      ccw() {
        return this.direction(0);
      }
      cw() {
        return this.direction(1);
      }
      step(stepsOrOpts, callback) {
        let steps;
        let step;
        let state;
        let params;
        let isValidStep;
        steps = typeof stepsOrOpts === "object" ? stepsOrOpts.steps || 0 : Math.floor(stepsOrOpts);
        step = new Step(this);
        state = priv.get(this);
        params = [];
        isValidStep = true;
        function failback(error) {
          isValidStep = false;
          if (callback) {
            callback(error);
          }
        }
        params.push(steps);
        if (typeof stepsOrOpts === "object") {
          Step.PROPERTIES.forEach((key) => {
            if (typeof stepsOrOpts[key] !== "undefined") {
              this[key](stepsOrOpts[key]);
            }
          });
        }
        if (!state.speed) {
          this.rpm(state.rpm);
          step.speed = this.speed();
        }
        Step.PROPERTIES.slice(1).forEach((key) => {
          params.push(step[key] = this[key]());
        });
        if (steps === 0) {
          failback(new Error("Must set a number of steps when calling `step()`"));
        }
        if (step.direction < 0) {
          failback(new Error("Must set a direction before calling `step()`"));
        }
        if (isValidStep) {
          state.isRunning = true;
          params.push((complete) => {
            state.isRunning = false;
            callback(null, complete);
          });
          step.move.apply(step, params);
        }
        return this;
      }
    };
    Object.defineProperties(Stepper, {
      TYPE: {
        value: Object.freeze({
          DRIVER: 1,
          TWO_WIRE: 2,
          FOUR_WIRE: 4
        })
      },
      RUNSTATE: {
        value: Object.freeze({
          STOP: 0,
          ACCEL: 1,
          DECEL: 2,
          RUN: 3
        })
      },
      DIRECTION: {
        value: Object.freeze({
          CCW: 0,
          CW: 1
        })
      }
    });
    ["direction", "accel", "decel"].forEach((prop) => {
      Stepper.prototype[prop] = function(value) {
        const state = priv.get(this);
        if (typeof value === "undefined") {
          return state[prop];
        }
        state[prop] = value;
        return this;
      };
    });
    module2.exports = Stepper;
  }
});

// node_modules/johnny-five/lib/switch.js
var require_switch = __commonJS({
  "node_modules/johnny-five/lib/switch.js"(exports, module2) {
    var Board = require_board();
    var Collection = require_collection();
    var Emitter = require_emitter();
    var Fn = require_fn();
    var Switch = class extends Emitter {
      constructor(options) {
        super();
        Board.Component.call(this, options = Board.Options(options));
        const trigger = Fn.debounce((type) => this.emit(type, this), 5);
        options.type = options.type || "NO";
        const isNormallyOpen = options.type === "NO";
        let raw = null;
        let invert = typeof options.invert !== "undefined" ? options.invert : isNormallyOpen || false;
        let closeValue = 1;
        let openValue = 0;
        if (invert) {
          closeValue ^= 1;
          openValue ^= 1;
        }
        this.io.pinMode(this.pin, this.io.MODES.INPUT);
        if (isNormallyOpen) {
          this.io.digitalWrite(this.pin, this.io.HIGH);
        }
        this.io.digitalRead(this.pin, (data) => {
          raw = data;
          trigger.call(this, this.isOpen ? "open" : "close");
        });
        Object.defineProperties(this, {
          value: {
            get() {
              return Number(this.isOpen);
            }
          },
          invert: {
            get() {
              return invert;
            },
            set(value) {
              invert = value;
              closeValue = invert ? 0 : 1;
              openValue = invert ? 1 : 0;
            }
          },
          closeValue: {
            get() {
              return closeValue;
            },
            set(value) {
              closeValue = value;
              openValue = value ^ 1;
            }
          },
          openValue: {
            get() {
              return openValue;
            },
            set(value) {
              openValue = value;
              closeValue = value ^ 1;
            }
          },
          isOpen: {
            get() {
              return raw === openValue;
            }
          },
          isClosed: {
            get() {
              return raw === closeValue;
            }
          }
        });
      }
    };
    var Switches = class extends Collection.Emitter {
      constructor(numsOrObjects) {
        super(numsOrObjects);
      }
      get type() {
        return Switch;
      }
    };
    Collection.installMethodForwarding(Switches.prototype, Switch.prototype);
    Switch.Collection = Switches;
    module2.exports = Switch;
  }
});

// node_modules/johnny-five/lib/johnny-five.js
var require_johnny_five = __commonJS({
  "node_modules/johnny-five/lib/johnny-five.js"(exports, module2) {
    module2.exports = {
      Accelerometer: require_accelerometer(),
      Animation: require_animation(),
      Altimeter: require_altimeter(),
      Barometer: require_barometer(),
      Board: require_board(),
      Button: require_button(),
      Color: require_color(),
      Collection: require_collection(),
      Compass: require_compass(),
      ESC: require_esc(),
      Expander: require_expander(),
      Fn: require_fn(),
      GPS: require_gps(),
      Gyro: require_gyro(),
      Hygrometer: require_hygrometer(),
      SIP: require_sip(),
      Keypad: require_keypad(),
      LCD: require_lcd(),
      Led: require_led2(),
      LedControl: require_ledcontrol(),
      Light: require_light(),
      Joystick: require_joystick(),
      Motion: require_motion(),
      Motor: require_motor(),
      Orientation: require_orientation(),
      Piezo: require_piezo(),
      Pin: require_pin(),
      Proximity: require_proximity(),
      ReflectanceArray: require_reflectancearray(),
      Relay: require_relay(),
      Repl: require_repl(),
      Sensor: require_sensor(),
      Servo: require_servo(),
      ShiftRegister: require_shiftregister(),
      Stepper: require_stepper(),
      Switch: require_switch(),
      Thermometer: require_thermometer()
    };
    module2.exports.Board.Virtual = function(options) {
      let temp;
      if (options instanceof module2.exports.Expander) {
        temp = {
          io: options
        };
      } else {
        temp = options;
      }
      return new module2.exports.Board(Object.assign({}, {
        repl: false,
        debug: false,
        sigint: false
      }, temp));
    };
    module2.exports.Sensor.Analog = module2.exports.Sensor;
    module2.exports.Sensor.Digital = function(options) {
      let pin;
      let type = "digital";
      if (typeof options === "number" || typeof options === "string") {
        pin = options;
        options = {
          type,
          pin
        };
      } else {
        options.type = type;
      }
      return new module2.exports.Sensor(options);
    };
    module2.exports.IMU = module2.exports.SIP;
    module2.exports.Multi = module2.exports.SIP;
    module2.exports.Luxmeter = module2.exports.Light;
    module2.exports.Magnetometer = module2.exports.Compass;
    module2.exports.Ping = module2.exports.Proximity;
    module2.exports.Sonar = module2.exports.Proximity;
    module2.exports.Boards = module2.exports.Board.Collection;
    module2.exports.Buttons = module2.exports.Button.Collection;
    module2.exports.ESCs = module2.exports.ESC.Collection;
    module2.exports.Leds = module2.exports.Led.Collection;
    module2.exports.Led.RGBs = module2.exports.Led.RGB.Collection;
    module2.exports.Motors = module2.exports.Motor.Collection;
    module2.exports.Pins = module2.exports.Pin.Collection;
    module2.exports.Relays = module2.exports.Relay.Collection;
    module2.exports.Sensors = module2.exports.Sensor.Collection;
    module2.exports.Servos = module2.exports.Servo.Collection;
    module2.exports.Switches = module2.exports.Switch.Collection;
    module2.exports.Touchpad = module2.exports.Keypad;
  }
});

// src/index.js
__export(exports, {
  Counter: () => Counter_default,
  Encoder: () => Encoder_default,
  Metronome: () => Metronome_default,
  SignalTower: () => SignalTower_default,
  Timer: () => Timer_default
});

// src/Counter/Counter.js
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

// src/Encoder/Encoder.js
var import_events2 = __toModule(require("events"));
var import_johnny_five = __toModule(require_johnny_five());
var Encoder = class extends import_events2.default {
  constructor({ slot, board, initialValue = 0 }) {
    super();
    this.value = initialValue;
    this.waveform = "";
    this.waveformTimeout;
    this.upButton = new import_johnny_five.default.Button({
      pin: slot,
      holdtime: 500,
      board
    });
    this.downButton = new import_johnny_five.default.Button({
      pin: slot + 1,
      holdtime: 500,
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
};
var Encoder_default = Encoder;

// src/Metronome/Metronome.js
var import_events3 = __toModule(require("events"));
var Metronome = class extends import_events3.default {
  constructor(frequency = 1e3) {
    super();
    this.frequency = frequency;
    this.interval = void 0;
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

// src/SignalTower/SignalTower.js
var import_events4 = __toModule(require("events"));
var SignalTower = class extends import_events4.default {
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

// src/Timer/Timer.js
var import_events5 = __toModule(require("events"));
var Timer = class extends import_events5.default {
  constructor(value = 0) {
    super();
    this.value = value;
    this.interval = void 0;
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Counter,
  Encoder,
  Metronome,
  SignalTower,
  Timer
});
