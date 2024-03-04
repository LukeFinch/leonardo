
      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire9a3c"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire9a3c"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("oZyht", function(module, exports) {
/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2019, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */ (function(global, factory) {
    module.exports = factory();
})(module.exports, function() {
    "use strict";
    var limit$2 = function(x, min, max) {
        if (min === void 0) min = 0;
        if (max === void 0) max = 1;
        return x < min ? min : x > max ? max : x;
    };
    var limit$1 = limit$2;
    var clip_rgb$3 = function(rgb) {
        rgb._clipped = false;
        rgb._unclipped = rgb.slice(0);
        for(var i = 0; i <= 3; i++){
            if (i < 3) {
                if (rgb[i] < 0 || rgb[i] > 255) rgb._clipped = true;
                rgb[i] = limit$1(rgb[i], 0, 255);
            } else if (i === 3) rgb[i] = limit$1(rgb[i], 0, 1);
        }
        return rgb;
    };
    // ported from jQuery's $.type
    var classToType = {};
    for(var i$1 = 0, list$1 = [
        "Boolean",
        "Number",
        "String",
        "Function",
        "Array",
        "Date",
        "RegExp",
        "Undefined",
        "Null"
    ]; i$1 < list$1.length; i$1 += 1){
        var name = list$1[i$1];
        classToType["[object " + name + "]"] = name.toLowerCase();
    }
    var type$p = function(obj) {
        return classToType[Object.prototype.toString.call(obj)] || "object";
    };
    var type$o = type$p;
    var unpack$B = function(args, keyOrder) {
        if (keyOrder === void 0) keyOrder = null;
        // if called with more than 3 arguments, we return the arguments
        if (args.length >= 3) return Array.prototype.slice.call(args);
        // with less than 3 args we check if first arg is object
        // and use the keyOrder string to extract and sort properties
        if (type$o(args[0]) == "object" && keyOrder) return keyOrder.split("").filter(function(k) {
            return args[0][k] !== undefined;
        }).map(function(k) {
            return args[0][k];
        });
        // otherwise we just return the first argument
        // (which we suppose is an array of args)
        return args[0];
    };
    var type$n = type$p;
    var last$4 = function(args) {
        if (args.length < 2) return null;
        var l = args.length - 1;
        if (type$n(args[l]) == "string") return args[l].toLowerCase();
        return null;
    };
    var PI$2 = Math.PI;
    var utils = {
        clip_rgb: clip_rgb$3,
        limit: limit$2,
        type: type$p,
        unpack: unpack$B,
        last: last$4,
        PI: PI$2,
        TWOPI: PI$2 * 2,
        PITHIRD: PI$2 / 3,
        DEG2RAD: PI$2 / 180,
        RAD2DEG: 180 / PI$2
    };
    var input$h = {
        format: {},
        autodetect: []
    };
    var last$3 = utils.last;
    var clip_rgb$2 = utils.clip_rgb;
    var type$m = utils.type;
    var _input = input$h;
    var Color$D = function Color() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        var me = this;
        if (type$m(args[0]) === "object" && args[0].constructor && args[0].constructor === this.constructor) // the argument is already a Color instance
        return args[0];
        // last argument could be the mode
        var mode = last$3(args);
        var autodetect = false;
        if (!mode) {
            autodetect = true;
            if (!_input.sorted) {
                _input.autodetect = _input.autodetect.sort(function(a, b) {
                    return b.p - a.p;
                });
                _input.sorted = true;
            }
            // auto-detect format
            for(var i = 0, list = _input.autodetect; i < list.length; i += 1){
                var chk = list[i];
                mode = chk.test.apply(chk, args);
                if (mode) break;
            }
        }
        if (_input.format[mode]) {
            var rgb = _input.format[mode].apply(null, autodetect ? args : args.slice(0, -1));
            me._rgb = clip_rgb$2(rgb);
        } else throw new Error("unknown format: " + args);
        // add alpha channel
        if (me._rgb.length === 3) me._rgb.push(1);
    };
    Color$D.prototype.toString = function toString() {
        if (type$m(this.hex) == "function") return this.hex();
        return "[" + this._rgb.join(",") + "]";
    };
    var Color_1 = Color$D;
    var chroma$k = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return new (Function.prototype.bind.apply(chroma$k.Color, [
            null
        ].concat(args)));
    };
    chroma$k.Color = Color_1;
    chroma$k.version = "2.4.2";
    var chroma_1 = chroma$k;
    var unpack$A = utils.unpack;
    var max$2 = Math.max;
    var rgb2cmyk$1 = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        var ref = unpack$A(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        r = r / 255;
        g = g / 255;
        b = b / 255;
        var k = 1 - max$2(r, max$2(g, b));
        var f = k < 1 ? 1 / (1 - k) : 0;
        var c = (1 - r - k) * f;
        var m = (1 - g - k) * f;
        var y = (1 - b - k) * f;
        return [
            c,
            m,
            y,
            k
        ];
    };
    var rgb2cmyk_1 = rgb2cmyk$1;
    var unpack$z = utils.unpack;
    var cmyk2rgb = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        args = unpack$z(args, "cmyk");
        var c = args[0];
        var m = args[1];
        var y = args[2];
        var k = args[3];
        var alpha = args.length > 4 ? args[4] : 1;
        if (k === 1) return [
            0,
            0,
            0,
            alpha
        ];
        return [
            c >= 1 ? 0 : 255 * (1 - c) * (1 - k),
            m >= 1 ? 0 : 255 * (1 - m) * (1 - k),
            y >= 1 ? 0 : 255 * (1 - y) * (1 - k),
            alpha
        ];
    };
    var cmyk2rgb_1 = cmyk2rgb;
    var chroma$j = chroma_1;
    var Color$C = Color_1;
    var input$g = input$h;
    var unpack$y = utils.unpack;
    var type$l = utils.type;
    var rgb2cmyk = rgb2cmyk_1;
    Color$C.prototype.cmyk = function() {
        return rgb2cmyk(this._rgb);
    };
    chroma$j.cmyk = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$C, [
            null
        ].concat(args, [
            "cmyk"
        ])));
    };
    input$g.format.cmyk = cmyk2rgb_1;
    input$g.autodetect.push({
        p: 2,
        test: function() {
            var args = [], len = arguments.length;
            while(len--)args[len] = arguments[len];
            args = unpack$y(args, "cmyk");
            if (type$l(args) === "array" && args.length === 4) return "cmyk";
        }
    });
    var unpack$x = utils.unpack;
    var last$2 = utils.last;
    var rnd = function(a) {
        return Math.round(a * 100) / 100;
    };
    /*
     * supported arguments:
     * - hsl2css(h,s,l)
     * - hsl2css(h,s,l,a)
     * - hsl2css([h,s,l], mode)
     * - hsl2css([h,s,l,a], mode)
     * - hsl2css({h,s,l,a}, mode)
     */ var hsl2css$1 = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        var hsla = unpack$x(args, "hsla");
        var mode = last$2(args) || "lsa";
        hsla[0] = rnd(hsla[0] || 0);
        hsla[1] = rnd(hsla[1] * 100) + "%";
        hsla[2] = rnd(hsla[2] * 100) + "%";
        if (mode === "hsla" || hsla.length > 3 && hsla[3] < 1) {
            hsla[3] = hsla.length > 3 ? hsla[3] : 1;
            mode = "hsla";
        } else hsla.length = 3;
        return mode + "(" + hsla.join(",") + ")";
    };
    var hsl2css_1 = hsl2css$1;
    var unpack$w = utils.unpack;
    /*
     * supported arguments:
     * - rgb2hsl(r,g,b)
     * - rgb2hsl(r,g,b,a)
     * - rgb2hsl([r,g,b])
     * - rgb2hsl([r,g,b,a])
     * - rgb2hsl({r,g,b,a})
     */ var rgb2hsl$3 = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        args = unpack$w(args, "rgba");
        var r = args[0];
        var g = args[1];
        var b = args[2];
        r /= 255;
        g /= 255;
        b /= 255;
        var min = Math.min(r, g, b);
        var max = Math.max(r, g, b);
        var l = (max + min) / 2;
        var s, h;
        if (max === min) {
            s = 0;
            h = Number.NaN;
        } else s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
        if (r == max) h = (g - b) / (max - min);
        else if (g == max) h = 2 + (b - r) / (max - min);
        else if (b == max) h = 4 + (r - g) / (max - min);
        h *= 60;
        if (h < 0) h += 360;
        if (args.length > 3 && args[3] !== undefined) return [
            h,
            s,
            l,
            args[3]
        ];
        return [
            h,
            s,
            l
        ];
    };
    var rgb2hsl_1 = rgb2hsl$3;
    var unpack$v = utils.unpack;
    var last$1 = utils.last;
    var hsl2css = hsl2css_1;
    var rgb2hsl$2 = rgb2hsl_1;
    var round$6 = Math.round;
    /*
     * supported arguments:
     * - rgb2css(r,g,b)
     * - rgb2css(r,g,b,a)
     * - rgb2css([r,g,b], mode)
     * - rgb2css([r,g,b,a], mode)
     * - rgb2css({r,g,b,a}, mode)
     */ var rgb2css$1 = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        var rgba = unpack$v(args, "rgba");
        var mode = last$1(args) || "rgb";
        if (mode.substr(0, 3) == "hsl") return hsl2css(rgb2hsl$2(rgba), mode);
        rgba[0] = round$6(rgba[0]);
        rgba[1] = round$6(rgba[1]);
        rgba[2] = round$6(rgba[2]);
        if (mode === "rgba" || rgba.length > 3 && rgba[3] < 1) {
            rgba[3] = rgba.length > 3 ? rgba[3] : 1;
            mode = "rgba";
        }
        return mode + "(" + rgba.slice(0, mode === "rgb" ? 3 : 4).join(",") + ")";
    };
    var rgb2css_1 = rgb2css$1;
    var unpack$u = utils.unpack;
    var round$5 = Math.round;
    var hsl2rgb$1 = function() {
        var assign;
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        args = unpack$u(args, "hsl");
        var h = args[0];
        var s = args[1];
        var l = args[2];
        var r, g, b;
        if (s === 0) r = g = b = l * 255;
        else {
            var t3 = [
                0,
                0,
                0
            ];
            var c = [
                0,
                0,
                0
            ];
            var t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var t1 = 2 * l - t2;
            var h_ = h / 360;
            t3[0] = h_ + 1 / 3;
            t3[1] = h_;
            t3[2] = h_ - 1 / 3;
            for(var i = 0; i < 3; i++){
                if (t3[i] < 0) t3[i] += 1;
                if (t3[i] > 1) t3[i] -= 1;
                if (6 * t3[i] < 1) c[i] = t1 + (t2 - t1) * 6 * t3[i];
                else if (2 * t3[i] < 1) c[i] = t2;
                else if (3 * t3[i] < 2) c[i] = t1 + (t2 - t1) * (2 / 3 - t3[i]) * 6;
                else c[i] = t1;
            }
            assign = [
                round$5(c[0] * 255),
                round$5(c[1] * 255),
                round$5(c[2] * 255)
            ], r = assign[0], g = assign[1], b = assign[2];
        }
        if (args.length > 3) // keep alpha channel
        return [
            r,
            g,
            b,
            args[3]
        ];
        return [
            r,
            g,
            b,
            1
        ];
    };
    var hsl2rgb_1 = hsl2rgb$1;
    var hsl2rgb = hsl2rgb_1;
    var input$f = input$h;
    var RE_RGB = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
    var RE_RGBA = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
    var RE_RGB_PCT = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
    var RE_RGBA_PCT = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
    var RE_HSL = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
    var RE_HSLA = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
    var round$4 = Math.round;
    var css2rgb$1 = function(css) {
        css = css.toLowerCase().trim();
        var m;
        if (input$f.format.named) try {
            return input$f.format.named(css);
        } catch (e) {
        // eslint-disable-next-line
        }
        // rgb(250,20,0)
        if (m = css.match(RE_RGB)) {
            var rgb = m.slice(1, 4);
            for(var i = 0; i < 3; i++)rgb[i] = +rgb[i];
            rgb[3] = 1; // default alpha
            return rgb;
        }
        // rgba(250,20,0,0.4)
        if (m = css.match(RE_RGBA)) {
            var rgb$1 = m.slice(1, 5);
            for(var i$1 = 0; i$1 < 4; i$1++)rgb$1[i$1] = +rgb$1[i$1];
            return rgb$1;
        }
        // rgb(100%,0%,0%)
        if (m = css.match(RE_RGB_PCT)) {
            var rgb$2 = m.slice(1, 4);
            for(var i$2 = 0; i$2 < 3; i$2++)rgb$2[i$2] = round$4(rgb$2[i$2] * 2.55);
            rgb$2[3] = 1; // default alpha
            return rgb$2;
        }
        // rgba(100%,0%,0%,0.4)
        if (m = css.match(RE_RGBA_PCT)) {
            var rgb$3 = m.slice(1, 5);
            for(var i$3 = 0; i$3 < 3; i$3++)rgb$3[i$3] = round$4(rgb$3[i$3] * 2.55);
            rgb$3[3] = +rgb$3[3];
            return rgb$3;
        }
        // hsl(0,100%,50%)
        if (m = css.match(RE_HSL)) {
            var hsl = m.slice(1, 4);
            hsl[1] *= 0.01;
            hsl[2] *= 0.01;
            var rgb$4 = hsl2rgb(hsl);
            rgb$4[3] = 1;
            return rgb$4;
        }
        // hsla(0,100%,50%,0.5)
        if (m = css.match(RE_HSLA)) {
            var hsl$1 = m.slice(1, 4);
            hsl$1[1] *= 0.01;
            hsl$1[2] *= 0.01;
            var rgb$5 = hsl2rgb(hsl$1);
            rgb$5[3] = +m[4]; // default alpha = 1
            return rgb$5;
        }
    };
    css2rgb$1.test = function(s) {
        return RE_RGB.test(s) || RE_RGBA.test(s) || RE_RGB_PCT.test(s) || RE_RGBA_PCT.test(s) || RE_HSL.test(s) || RE_HSLA.test(s);
    };
    var css2rgb_1 = css2rgb$1;
    var chroma$i = chroma_1;
    var Color$B = Color_1;
    var input$e = input$h;
    var type$k = utils.type;
    var rgb2css = rgb2css_1;
    var css2rgb = css2rgb_1;
    Color$B.prototype.css = function(mode) {
        return rgb2css(this._rgb, mode);
    };
    chroma$i.css = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$B, [
            null
        ].concat(args, [
            "css"
        ])));
    };
    input$e.format.css = css2rgb;
    input$e.autodetect.push({
        p: 5,
        test: function(h) {
            var rest = [], len = arguments.length - 1;
            while(len-- > 0)rest[len] = arguments[len + 1];
            if (!rest.length && type$k(h) === "string" && css2rgb.test(h)) return "css";
        }
    });
    var Color$A = Color_1;
    var chroma$h = chroma_1;
    var input$d = input$h;
    var unpack$t = utils.unpack;
    input$d.format.gl = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        var rgb = unpack$t(args, "rgba");
        rgb[0] *= 255;
        rgb[1] *= 255;
        rgb[2] *= 255;
        return rgb;
    };
    chroma$h.gl = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$A, [
            null
        ].concat(args, [
            "gl"
        ])));
    };
    Color$A.prototype.gl = function() {
        var rgb = this._rgb;
        return [
            rgb[0] / 255,
            rgb[1] / 255,
            rgb[2] / 255,
            rgb[3]
        ];
    };
    var unpack$s = utils.unpack;
    var rgb2hcg$1 = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        var ref = unpack$s(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var min = Math.min(r, g, b);
        var max = Math.max(r, g, b);
        var delta = max - min;
        var c = delta * 100 / 255;
        var _g = min / (255 - delta) * 100;
        var h;
        if (delta === 0) h = Number.NaN;
        else {
            if (r === max) h = (g - b) / delta;
            if (g === max) h = 2 + (b - r) / delta;
            if (b === max) h = 4 + (r - g) / delta;
            h *= 60;
            if (h < 0) h += 360;
        }
        return [
            h,
            c,
            _g
        ];
    };
    var rgb2hcg_1 = rgb2hcg$1;
    var unpack$r = utils.unpack;
    var floor$3 = Math.floor;
    /*
     * this is basically just HSV with some minor tweaks
     *
     * hue.. [0..360]
     * chroma .. [0..1]
     * grayness .. [0..1]
     */ var hcg2rgb = function() {
        var assign, assign$1, assign$2, assign$3, assign$4, assign$5;
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        args = unpack$r(args, "hcg");
        var h = args[0];
        var c = args[1];
        var _g = args[2];
        var r, g, b;
        _g = _g * 255;
        var _c = c * 255;
        if (c === 0) r = g = b = _g;
        else {
            if (h === 360) h = 0;
            if (h > 360) h -= 360;
            if (h < 0) h += 360;
            h /= 60;
            var i = floor$3(h);
            var f = h - i;
            var p = _g * (1 - c);
            var q = p + _c * (1 - f);
            var t = p + _c * f;
            var v = p + _c;
            switch(i){
                case 0:
                    assign = [
                        v,
                        t,
                        p
                    ], r = assign[0], g = assign[1], b = assign[2];
                    break;
                case 1:
                    assign$1 = [
                        q,
                        v,
                        p
                    ], r = assign$1[0], g = assign$1[1], b = assign$1[2];
                    break;
                case 2:
                    assign$2 = [
                        p,
                        v,
                        t
                    ], r = assign$2[0], g = assign$2[1], b = assign$2[2];
                    break;
                case 3:
                    assign$3 = [
                        p,
                        q,
                        v
                    ], r = assign$3[0], g = assign$3[1], b = assign$3[2];
                    break;
                case 4:
                    assign$4 = [
                        t,
                        p,
                        v
                    ], r = assign$4[0], g = assign$4[1], b = assign$4[2];
                    break;
                case 5:
                    assign$5 = [
                        v,
                        p,
                        q
                    ], r = assign$5[0], g = assign$5[1], b = assign$5[2];
                    break;
            }
        }
        return [
            r,
            g,
            b,
            args.length > 3 ? args[3] : 1
        ];
    };
    var hcg2rgb_1 = hcg2rgb;
    var unpack$q = utils.unpack;
    var type$j = utils.type;
    var chroma$g = chroma_1;
    var Color$z = Color_1;
    var input$c = input$h;
    var rgb2hcg = rgb2hcg_1;
    Color$z.prototype.hcg = function() {
        return rgb2hcg(this._rgb);
    };
    chroma$g.hcg = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$z, [
            null
        ].concat(args, [
            "hcg"
        ])));
    };
    input$c.format.hcg = hcg2rgb_1;
    input$c.autodetect.push({
        p: 1,
        test: function() {
            var args = [], len = arguments.length;
            while(len--)args[len] = arguments[len];
            args = unpack$q(args, "hcg");
            if (type$j(args) === "array" && args.length === 3) return "hcg";
        }
    });
    var unpack$p = utils.unpack;
    var last = utils.last;
    var round$3 = Math.round;
    var rgb2hex$2 = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        var ref = unpack$p(args, "rgba");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var a = ref[3];
        var mode = last(args) || "auto";
        if (a === undefined) a = 1;
        if (mode === "auto") mode = a < 1 ? "rgba" : "rgb";
        r = round$3(r);
        g = round$3(g);
        b = round$3(b);
        var u = r << 16 | g << 8 | b;
        var str = "000000" + u.toString(16); //#.toUpperCase();
        str = str.substr(str.length - 6);
        var hxa = "0" + round$3(a * 255).toString(16);
        hxa = hxa.substr(hxa.length - 2);
        switch(mode.toLowerCase()){
            case "rgba":
                return "#" + str + hxa;
            case "argb":
                return "#" + hxa + str;
            default:
                return "#" + str;
        }
    };
    var rgb2hex_1 = rgb2hex$2;
    var RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    var RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
    var hex2rgb$1 = function(hex) {
        if (hex.match(RE_HEX)) {
            // remove optional leading #
            if (hex.length === 4 || hex.length === 7) hex = hex.substr(1);
            // expand short-notation to full six-digit
            if (hex.length === 3) {
                hex = hex.split("");
                hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
            }
            var u = parseInt(hex, 16);
            var r = u >> 16;
            var g = u >> 8 & 0xFF;
            var b = u & 0xFF;
            return [
                r,
                g,
                b,
                1
            ];
        }
        // match rgba hex format, eg #FF000077
        if (hex.match(RE_HEXA)) {
            if (hex.length === 5 || hex.length === 9) // remove optional leading #
            hex = hex.substr(1);
            // expand short-notation to full eight-digit
            if (hex.length === 4) {
                hex = hex.split("");
                hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
            }
            var u$1 = parseInt(hex, 16);
            var r$1 = u$1 >> 24 & 0xFF;
            var g$1 = u$1 >> 16 & 0xFF;
            var b$1 = u$1 >> 8 & 0xFF;
            var a = Math.round((u$1 & 0xFF) / 0xFF * 100) / 100;
            return [
                r$1,
                g$1,
                b$1,
                a
            ];
        }
        // we used to check for css colors here
        // if _input.css? and rgb = _input.css hex
        //     return rgb
        throw new Error("unknown hex color: " + hex);
    };
    var hex2rgb_1 = hex2rgb$1;
    var chroma$f = chroma_1;
    var Color$y = Color_1;
    var type$i = utils.type;
    var input$b = input$h;
    var rgb2hex$1 = rgb2hex_1;
    Color$y.prototype.hex = function(mode) {
        return rgb2hex$1(this._rgb, mode);
    };
    chroma$f.hex = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$y, [
            null
        ].concat(args, [
            "hex"
        ])));
    };
    input$b.format.hex = hex2rgb_1;
    input$b.autodetect.push({
        p: 4,
        test: function(h) {
            var rest = [], len = arguments.length - 1;
            while(len-- > 0)rest[len] = arguments[len + 1];
            if (!rest.length && type$i(h) === "string" && [
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ].indexOf(h.length) >= 0) return "hex";
        }
    });
    var unpack$o = utils.unpack;
    var TWOPI$2 = utils.TWOPI;
    var min$2 = Math.min;
    var sqrt$4 = Math.sqrt;
    var acos = Math.acos;
    var rgb2hsi$1 = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        /*
        borrowed from here:
        http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/rgb2hsi.cpp
        */ var ref = unpack$o(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        r /= 255;
        g /= 255;
        b /= 255;
        var h;
        var min_ = min$2(r, g, b);
        var i = (r + g + b) / 3;
        var s = i > 0 ? 1 - min_ / i : 0;
        if (s === 0) h = NaN;
        else {
            h = (r - g + (r - b)) / 2;
            h /= sqrt$4((r - g) * (r - g) + (r - b) * (g - b));
            h = acos(h);
            if (b > g) h = TWOPI$2 - h;
            h /= TWOPI$2;
        }
        return [
            h * 360,
            s,
            i
        ];
    };
    var rgb2hsi_1 = rgb2hsi$1;
    var unpack$n = utils.unpack;
    var limit = utils.limit;
    var TWOPI$1 = utils.TWOPI;
    var PITHIRD = utils.PITHIRD;
    var cos$4 = Math.cos;
    /*
     * hue [0..360]
     * saturation [0..1]
     * intensity [0..1]
     */ var hsi2rgb = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        /*
        borrowed from here:
        http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/hsi2rgb.cpp
        */ args = unpack$n(args, "hsi");
        var h = args[0];
        var s = args[1];
        var i = args[2];
        var r, g, b;
        if (isNaN(h)) h = 0;
        if (isNaN(s)) s = 0;
        // normalize hue
        if (h > 360) h -= 360;
        if (h < 0) h += 360;
        h /= 360;
        if (h < 1 / 3) {
            b = (1 - s) / 3;
            r = (1 + s * cos$4(TWOPI$1 * h) / cos$4(PITHIRD - TWOPI$1 * h)) / 3;
            g = 1 - (b + r);
        } else if (h < 2 / 3) {
            h -= 1 / 3;
            r = (1 - s) / 3;
            g = (1 + s * cos$4(TWOPI$1 * h) / cos$4(PITHIRD - TWOPI$1 * h)) / 3;
            b = 1 - (r + g);
        } else {
            h -= 2 / 3;
            g = (1 - s) / 3;
            b = (1 + s * cos$4(TWOPI$1 * h) / cos$4(PITHIRD - TWOPI$1 * h)) / 3;
            r = 1 - (g + b);
        }
        r = limit(i * r * 3);
        g = limit(i * g * 3);
        b = limit(i * b * 3);
        return [
            r * 255,
            g * 255,
            b * 255,
            args.length > 3 ? args[3] : 1
        ];
    };
    var hsi2rgb_1 = hsi2rgb;
    var unpack$m = utils.unpack;
    var type$h = utils.type;
    var chroma$e = chroma_1;
    var Color$x = Color_1;
    var input$a = input$h;
    var rgb2hsi = rgb2hsi_1;
    Color$x.prototype.hsi = function() {
        return rgb2hsi(this._rgb);
    };
    chroma$e.hsi = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$x, [
            null
        ].concat(args, [
            "hsi"
        ])));
    };
    input$a.format.hsi = hsi2rgb_1;
    input$a.autodetect.push({
        p: 2,
        test: function() {
            var args = [], len = arguments.length;
            while(len--)args[len] = arguments[len];
            args = unpack$m(args, "hsi");
            if (type$h(args) === "array" && args.length === 3) return "hsi";
        }
    });
    var unpack$l = utils.unpack;
    var type$g = utils.type;
    var chroma$d = chroma_1;
    var Color$w = Color_1;
    var input$9 = input$h;
    var rgb2hsl$1 = rgb2hsl_1;
    Color$w.prototype.hsl = function() {
        return rgb2hsl$1(this._rgb);
    };
    chroma$d.hsl = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$w, [
            null
        ].concat(args, [
            "hsl"
        ])));
    };
    input$9.format.hsl = hsl2rgb_1;
    input$9.autodetect.push({
        p: 2,
        test: function() {
            var args = [], len = arguments.length;
            while(len--)args[len] = arguments[len];
            args = unpack$l(args, "hsl");
            if (type$g(args) === "array" && args.length === 3) return "hsl";
        }
    });
    var unpack$k = utils.unpack;
    var min$1 = Math.min;
    var max$1 = Math.max;
    /*
     * supported arguments:
     * - rgb2hsv(r,g,b)
     * - rgb2hsv([r,g,b])
     * - rgb2hsv({r,g,b})
     */ var rgb2hsl = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        args = unpack$k(args, "rgb");
        var r = args[0];
        var g = args[1];
        var b = args[2];
        var min_ = min$1(r, g, b);
        var max_ = max$1(r, g, b);
        var delta = max_ - min_;
        var h, s, v;
        v = max_ / 255.0;
        if (max_ === 0) {
            h = Number.NaN;
            s = 0;
        } else {
            s = delta / max_;
            if (r === max_) h = (g - b) / delta;
            if (g === max_) h = 2 + (b - r) / delta;
            if (b === max_) h = 4 + (r - g) / delta;
            h *= 60;
            if (h < 0) h += 360;
        }
        return [
            h,
            s,
            v
        ];
    };
    var rgb2hsv$1 = rgb2hsl;
    var unpack$j = utils.unpack;
    var floor$2 = Math.floor;
    var hsv2rgb = function() {
        var assign, assign$1, assign$2, assign$3, assign$4, assign$5;
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        args = unpack$j(args, "hsv");
        var h = args[0];
        var s = args[1];
        var v = args[2];
        var r, g, b;
        v *= 255;
        if (s === 0) r = g = b = v;
        else {
            if (h === 360) h = 0;
            if (h > 360) h -= 360;
            if (h < 0) h += 360;
            h /= 60;
            var i = floor$2(h);
            var f = h - i;
            var p = v * (1 - s);
            var q = v * (1 - s * f);
            var t = v * (1 - s * (1 - f));
            switch(i){
                case 0:
                    assign = [
                        v,
                        t,
                        p
                    ], r = assign[0], g = assign[1], b = assign[2];
                    break;
                case 1:
                    assign$1 = [
                        q,
                        v,
                        p
                    ], r = assign$1[0], g = assign$1[1], b = assign$1[2];
                    break;
                case 2:
                    assign$2 = [
                        p,
                        v,
                        t
                    ], r = assign$2[0], g = assign$2[1], b = assign$2[2];
                    break;
                case 3:
                    assign$3 = [
                        p,
                        q,
                        v
                    ], r = assign$3[0], g = assign$3[1], b = assign$3[2];
                    break;
                case 4:
                    assign$4 = [
                        t,
                        p,
                        v
                    ], r = assign$4[0], g = assign$4[1], b = assign$4[2];
                    break;
                case 5:
                    assign$5 = [
                        v,
                        p,
                        q
                    ], r = assign$5[0], g = assign$5[1], b = assign$5[2];
                    break;
            }
        }
        return [
            r,
            g,
            b,
            args.length > 3 ? args[3] : 1
        ];
    };
    var hsv2rgb_1 = hsv2rgb;
    var unpack$i = utils.unpack;
    var type$f = utils.type;
    var chroma$c = chroma_1;
    var Color$v = Color_1;
    var input$8 = input$h;
    var rgb2hsv = rgb2hsv$1;
    Color$v.prototype.hsv = function() {
        return rgb2hsv(this._rgb);
    };
    chroma$c.hsv = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$v, [
            null
        ].concat(args, [
            "hsv"
        ])));
    };
    input$8.format.hsv = hsv2rgb_1;
    input$8.autodetect.push({
        p: 2,
        test: function() {
            var args = [], len = arguments.length;
            while(len--)args[len] = arguments[len];
            args = unpack$i(args, "hsv");
            if (type$f(args) === "array" && args.length === 3) return "hsv";
        }
    });
    var labConstants = {
        // Corresponds roughly to RGB brighter/darker
        Kn: 18,
        // D65 standard referent
        Xn: 0.950470,
        Yn: 1,
        Zn: 1.088830,
        t0: 0.137931034,
        t1: 0.206896552,
        t2: 0.12841855,
        t3: 0.008856452
    };
    var LAB_CONSTANTS$3 = labConstants;
    var unpack$h = utils.unpack;
    var pow$a = Math.pow;
    var rgb2lab$2 = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        var ref = unpack$h(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2xyz(r, g, b);
        var x = ref$1[0];
        var y = ref$1[1];
        var z = ref$1[2];
        var l = 116 * y - 16;
        return [
            l < 0 ? 0 : l,
            500 * (x - y),
            200 * (y - z)
        ];
    };
    var rgb_xyz = function(r) {
        if ((r /= 255) <= 0.04045) return r / 12.92;
        return pow$a((r + 0.055) / 1.055, 2.4);
    };
    var xyz_lab = function(t) {
        if (t > LAB_CONSTANTS$3.t3) return pow$a(t, 1 / 3);
        return t / LAB_CONSTANTS$3.t2 + LAB_CONSTANTS$3.t0;
    };
    var rgb2xyz = function(r, g, b) {
        r = rgb_xyz(r);
        g = rgb_xyz(g);
        b = rgb_xyz(b);
        var x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / LAB_CONSTANTS$3.Xn);
        var y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / LAB_CONSTANTS$3.Yn);
        var z = xyz_lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / LAB_CONSTANTS$3.Zn);
        return [
            x,
            y,
            z
        ];
    };
    var rgb2lab_1 = rgb2lab$2;
    var LAB_CONSTANTS$2 = labConstants;
    var unpack$g = utils.unpack;
    var pow$9 = Math.pow;
    /*
     * L* [0..100]
     * a [-100..100]
     * b [-100..100]
     */ var lab2rgb$1 = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        args = unpack$g(args, "lab");
        var l = args[0];
        var a = args[1];
        var b = args[2];
        var x, y, z, r, g, b_;
        y = (l + 16) / 116;
        x = isNaN(a) ? y : y + a / 500;
        z = isNaN(b) ? y : y - b / 200;
        y = LAB_CONSTANTS$2.Yn * lab_xyz(y);
        x = LAB_CONSTANTS$2.Xn * lab_xyz(x);
        z = LAB_CONSTANTS$2.Zn * lab_xyz(z);
        r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z); // D65 -> sRGB
        g = xyz_rgb(-0.969266 * x + 1.8760108 * y + 0.0415560 * z);
        b_ = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);
        return [
            r,
            g,
            b_,
            args.length > 3 ? args[3] : 1
        ];
    };
    var xyz_rgb = function(r) {
        return 255 * (r <= 0.00304 ? 12.92 * r : 1.055 * pow$9(r, 1 / 2.4) - 0.055);
    };
    var lab_xyz = function(t) {
        return t > LAB_CONSTANTS$2.t1 ? t * t * t : LAB_CONSTANTS$2.t2 * (t - LAB_CONSTANTS$2.t0);
    };
    var lab2rgb_1 = lab2rgb$1;
    var unpack$f = utils.unpack;
    var type$e = utils.type;
    var chroma$b = chroma_1;
    var Color$u = Color_1;
    var input$7 = input$h;
    var rgb2lab$1 = rgb2lab_1;
    Color$u.prototype.lab = function() {
        return rgb2lab$1(this._rgb);
    };
    chroma$b.lab = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$u, [
            null
        ].concat(args, [
            "lab"
        ])));
    };
    input$7.format.lab = lab2rgb_1;
    input$7.autodetect.push({
        p: 2,
        test: function() {
            var args = [], len = arguments.length;
            while(len--)args[len] = arguments[len];
            args = unpack$f(args, "lab");
            if (type$e(args) === "array" && args.length === 3) return "lab";
        }
    });
    var unpack$e = utils.unpack;
    var RAD2DEG = utils.RAD2DEG;
    var sqrt$3 = Math.sqrt;
    var atan2$2 = Math.atan2;
    var round$2 = Math.round;
    var lab2lch$2 = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        var ref = unpack$e(args, "lab");
        var l = ref[0];
        var a = ref[1];
        var b = ref[2];
        var c = sqrt$3(a * a + b * b);
        var h = (atan2$2(b, a) * RAD2DEG + 360) % 360;
        if (round$2(c * 10000) === 0) h = Number.NaN;
        return [
            l,
            c,
            h
        ];
    };
    var lab2lch_1 = lab2lch$2;
    var unpack$d = utils.unpack;
    var rgb2lab = rgb2lab_1;
    var lab2lch$1 = lab2lch_1;
    var rgb2lch$1 = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        var ref = unpack$d(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2lab(r, g, b);
        var l = ref$1[0];
        var a = ref$1[1];
        var b_ = ref$1[2];
        return lab2lch$1(l, a, b_);
    };
    var rgb2lch_1 = rgb2lch$1;
    var unpack$c = utils.unpack;
    var DEG2RAD = utils.DEG2RAD;
    var sin$3 = Math.sin;
    var cos$3 = Math.cos;
    var lch2lab$2 = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        /*
        Convert from a qualitative parameter h and a quantitative parameter l to a 24-bit pixel.
        These formulas were invented by David Dalrymple to obtain maximum contrast without going
        out of gamut if the parameters are in the range 0-1.

        A saturation multiplier was added by Gregor Aisch
        */ var ref = unpack$c(args, "lch");
        var l = ref[0];
        var c = ref[1];
        var h = ref[2];
        if (isNaN(h)) h = 0;
        h = h * DEG2RAD;
        return [
            l,
            cos$3(h) * c,
            sin$3(h) * c
        ];
    };
    var lch2lab_1 = lch2lab$2;
    var unpack$b = utils.unpack;
    var lch2lab$1 = lch2lab_1;
    var lab2rgb = lab2rgb_1;
    var lch2rgb$1 = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        args = unpack$b(args, "lch");
        var l = args[0];
        var c = args[1];
        var h = args[2];
        var ref = lch2lab$1(l, c, h);
        var L = ref[0];
        var a = ref[1];
        var b_ = ref[2];
        var ref$1 = lab2rgb(L, a, b_);
        var r = ref$1[0];
        var g = ref$1[1];
        var b = ref$1[2];
        return [
            r,
            g,
            b,
            args.length > 3 ? args[3] : 1
        ];
    };
    var lch2rgb_1 = lch2rgb$1;
    var unpack$a = utils.unpack;
    var lch2rgb = lch2rgb_1;
    var hcl2rgb = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        var hcl = unpack$a(args, "hcl").reverse();
        return lch2rgb.apply(void 0, hcl);
    };
    var hcl2rgb_1 = hcl2rgb;
    var unpack$9 = utils.unpack;
    var type$d = utils.type;
    var chroma$a = chroma_1;
    var Color$t = Color_1;
    var input$6 = input$h;
    var rgb2lch = rgb2lch_1;
    Color$t.prototype.lch = function() {
        return rgb2lch(this._rgb);
    };
    Color$t.prototype.hcl = function() {
        return rgb2lch(this._rgb).reverse();
    };
    chroma$a.lch = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$t, [
            null
        ].concat(args, [
            "lch"
        ])));
    };
    chroma$a.hcl = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$t, [
            null
        ].concat(args, [
            "hcl"
        ])));
    };
    input$6.format.lch = lch2rgb_1;
    input$6.format.hcl = hcl2rgb_1;
    [
        "lch",
        "hcl"
    ].forEach(function(m) {
        return input$6.autodetect.push({
            p: 2,
            test: function() {
                var args = [], len = arguments.length;
                while(len--)args[len] = arguments[len];
                args = unpack$9(args, m);
                if (type$d(args) === "array" && args.length === 3) return m;
            }
        });
    });
    /**
    	X11 color names

    	http://www.w3.org/TR/css3-color/#svg-color
    */ var w3cx11$1 = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflower: "#6495ed",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        laserlemon: "#ffff54",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrod: "#fafad2",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        maroon2: "#7f0000",
        maroon3: "#b03060",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        purple2: "#7f007f",
        purple3: "#a020f0",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    };
    var w3cx11_1 = w3cx11$1;
    var Color$s = Color_1;
    var input$5 = input$h;
    var type$c = utils.type;
    var w3cx11 = w3cx11_1;
    var hex2rgb = hex2rgb_1;
    var rgb2hex = rgb2hex_1;
    Color$s.prototype.name = function() {
        var hex = rgb2hex(this._rgb, "rgb");
        for(var i = 0, list = Object.keys(w3cx11); i < list.length; i += 1){
            var n = list[i];
            if (w3cx11[n] === hex) return n.toLowerCase();
        }
        return hex;
    };
    input$5.format.named = function(name) {
        name = name.toLowerCase();
        if (w3cx11[name]) return hex2rgb(w3cx11[name]);
        throw new Error("unknown color name: " + name);
    };
    input$5.autodetect.push({
        p: 5,
        test: function(h) {
            var rest = [], len = arguments.length - 1;
            while(len-- > 0)rest[len] = arguments[len + 1];
            if (!rest.length && type$c(h) === "string" && w3cx11[h.toLowerCase()]) return "named";
        }
    });
    var unpack$8 = utils.unpack;
    var rgb2num$1 = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        var ref = unpack$8(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        return (r << 16) + (g << 8) + b;
    };
    var rgb2num_1 = rgb2num$1;
    var type$b = utils.type;
    var num2rgb = function(num) {
        if (type$b(num) == "number" && num >= 0 && num <= 0xFFFFFF) {
            var r = num >> 16;
            var g = num >> 8 & 0xFF;
            var b = num & 0xFF;
            return [
                r,
                g,
                b,
                1
            ];
        }
        throw new Error("unknown num color: " + num);
    };
    var num2rgb_1 = num2rgb;
    var chroma$9 = chroma_1;
    var Color$r = Color_1;
    var input$4 = input$h;
    var type$a = utils.type;
    var rgb2num = rgb2num_1;
    Color$r.prototype.num = function() {
        return rgb2num(this._rgb);
    };
    chroma$9.num = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$r, [
            null
        ].concat(args, [
            "num"
        ])));
    };
    input$4.format.num = num2rgb_1;
    input$4.autodetect.push({
        p: 5,
        test: function() {
            var args = [], len = arguments.length;
            while(len--)args[len] = arguments[len];
            if (args.length === 1 && type$a(args[0]) === "number" && args[0] >= 0 && args[0] <= 0xFFFFFF) return "num";
        }
    });
    var chroma$8 = chroma_1;
    var Color$q = Color_1;
    var input$3 = input$h;
    var unpack$7 = utils.unpack;
    var type$9 = utils.type;
    var round$1 = Math.round;
    Color$q.prototype.rgb = function(rnd) {
        if (rnd === void 0) rnd = true;
        if (rnd === false) return this._rgb.slice(0, 3);
        return this._rgb.slice(0, 3).map(round$1);
    };
    Color$q.prototype.rgba = function(rnd) {
        if (rnd === void 0) rnd = true;
        return this._rgb.slice(0, 4).map(function(v, i) {
            return i < 3 ? rnd === false ? v : round$1(v) : v;
        });
    };
    chroma$8.rgb = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$q, [
            null
        ].concat(args, [
            "rgb"
        ])));
    };
    input$3.format.rgb = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        var rgba = unpack$7(args, "rgba");
        if (rgba[3] === undefined) rgba[3] = 1;
        return rgba;
    };
    input$3.autodetect.push({
        p: 3,
        test: function() {
            var args = [], len = arguments.length;
            while(len--)args[len] = arguments[len];
            args = unpack$7(args, "rgba");
            if (type$9(args) === "array" && (args.length === 3 || args.length === 4 && type$9(args[3]) == "number" && args[3] >= 0 && args[3] <= 1)) return "rgb";
        }
    });
    /*
     * Based on implementation by Neil Bartlett
     * https://github.com/neilbartlett/color-temperature
     */ var log$1 = Math.log;
    var temperature2rgb$1 = function(kelvin) {
        var temp = kelvin / 100;
        var r, g, b;
        if (temp < 66) {
            r = 255;
            g = temp < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log$1(g);
            b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp - 10) + 115.67994401066147 * log$1(b);
        } else {
            r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log$1(r);
            g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log$1(g);
            b = 255;
        }
        return [
            r,
            g,
            b,
            1
        ];
    };
    var temperature2rgb_1 = temperature2rgb$1;
    /*
     * Based on implementation by Neil Bartlett
     * https://github.com/neilbartlett/color-temperature
     **/ var temperature2rgb = temperature2rgb_1;
    var unpack$6 = utils.unpack;
    var round = Math.round;
    var rgb2temperature$1 = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        var rgb = unpack$6(args, "rgb");
        var r = rgb[0], b = rgb[2];
        var minTemp = 1000;
        var maxTemp = 40000;
        var eps = 0.4;
        var temp;
        while(maxTemp - minTemp > eps){
            temp = (maxTemp + minTemp) * 0.5;
            var rgb$1 = temperature2rgb(temp);
            if (rgb$1[2] / rgb$1[0] >= b / r) maxTemp = temp;
            else minTemp = temp;
        }
        return round(temp);
    };
    var rgb2temperature_1 = rgb2temperature$1;
    var chroma$7 = chroma_1;
    var Color$p = Color_1;
    var input$2 = input$h;
    var rgb2temperature = rgb2temperature_1;
    Color$p.prototype.temp = Color$p.prototype.kelvin = Color$p.prototype.temperature = function() {
        return rgb2temperature(this._rgb);
    };
    chroma$7.temp = chroma$7.kelvin = chroma$7.temperature = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$p, [
            null
        ].concat(args, [
            "temp"
        ])));
    };
    input$2.format.temp = input$2.format.kelvin = input$2.format.temperature = temperature2rgb_1;
    var unpack$5 = utils.unpack;
    var cbrt = Math.cbrt;
    var pow$8 = Math.pow;
    var sign$1 = Math.sign;
    var rgb2oklab$2 = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        // OKLab color space implementation taken from
        // https://bottosson.github.io/posts/oklab/
        var ref = unpack$5(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = [
            rgb2lrgb(r / 255),
            rgb2lrgb(g / 255),
            rgb2lrgb(b / 255)
        ];
        var lr = ref$1[0];
        var lg = ref$1[1];
        var lb = ref$1[2];
        var l = cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
        var m = cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
        var s = cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
        return [
            0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
            1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
            0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s
        ];
    };
    var rgb2oklab_1 = rgb2oklab$2;
    function rgb2lrgb(c) {
        var abs = Math.abs(c);
        if (abs < 0.04045) return c / 12.92;
        return (sign$1(c) || 1) * pow$8((abs + 0.055) / 1.055, 2.4);
    }
    var unpack$4 = utils.unpack;
    var pow$7 = Math.pow;
    var sign = Math.sign;
    /*
     * L* [0..100]
     * a [-100..100]
     * b [-100..100]
     */ var oklab2rgb$1 = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        args = unpack$4(args, "lab");
        var L = args[0];
        var a = args[1];
        var b = args[2];
        var l = pow$7(L + 0.3963377774 * a + 0.2158037573 * b, 3);
        var m = pow$7(L - 0.1055613458 * a - 0.0638541728 * b, 3);
        var s = pow$7(L - 0.0894841775 * a - 1.291485548 * b, 3);
        return [
            255 * lrgb2rgb(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
            255 * lrgb2rgb(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
            255 * lrgb2rgb(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s),
            args.length > 3 ? args[3] : 1
        ];
    };
    var oklab2rgb_1 = oklab2rgb$1;
    function lrgb2rgb(c) {
        var abs = Math.abs(c);
        if (abs > 0.0031308) return (sign(c) || 1) * (1.055 * pow$7(abs, 1 / 2.4) - 0.055);
        return c * 12.92;
    }
    var unpack$3 = utils.unpack;
    var type$8 = utils.type;
    var chroma$6 = chroma_1;
    var Color$o = Color_1;
    var input$1 = input$h;
    var rgb2oklab$1 = rgb2oklab_1;
    Color$o.prototype.oklab = function() {
        return rgb2oklab$1(this._rgb);
    };
    chroma$6.oklab = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$o, [
            null
        ].concat(args, [
            "oklab"
        ])));
    };
    input$1.format.oklab = oklab2rgb_1;
    input$1.autodetect.push({
        p: 3,
        test: function() {
            var args = [], len = arguments.length;
            while(len--)args[len] = arguments[len];
            args = unpack$3(args, "oklab");
            if (type$8(args) === "array" && args.length === 3) return "oklab";
        }
    });
    var unpack$2 = utils.unpack;
    var rgb2oklab = rgb2oklab_1;
    var lab2lch = lab2lch_1;
    var rgb2oklch$1 = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        var ref = unpack$2(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2oklab(r, g, b);
        var l = ref$1[0];
        var a = ref$1[1];
        var b_ = ref$1[2];
        return lab2lch(l, a, b_);
    };
    var rgb2oklch_1 = rgb2oklch$1;
    var unpack$1 = utils.unpack;
    var lch2lab = lch2lab_1;
    var oklab2rgb = oklab2rgb_1;
    var oklch2rgb = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        args = unpack$1(args, "lch");
        var l = args[0];
        var c = args[1];
        var h = args[2];
        var ref = lch2lab(l, c, h);
        var L = ref[0];
        var a = ref[1];
        var b_ = ref[2];
        var ref$1 = oklab2rgb(L, a, b_);
        var r = ref$1[0];
        var g = ref$1[1];
        var b = ref$1[2];
        return [
            r,
            g,
            b,
            args.length > 3 ? args[3] : 1
        ];
    };
    var oklch2rgb_1 = oklch2rgb;
    var unpack = utils.unpack;
    var type$7 = utils.type;
    var chroma$5 = chroma_1;
    var Color$n = Color_1;
    var input = input$h;
    var rgb2oklch = rgb2oklch_1;
    Color$n.prototype.oklch = function() {
        return rgb2oklch(this._rgb);
    };
    chroma$5.oklch = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$n, [
            null
        ].concat(args, [
            "oklch"
        ])));
    };
    input.format.oklch = oklch2rgb_1;
    input.autodetect.push({
        p: 3,
        test: function() {
            var args = [], len = arguments.length;
            while(len--)args[len] = arguments[len];
            args = unpack(args, "oklch");
            if (type$7(args) === "array" && args.length === 3) return "oklch";
        }
    });
    var Color$m = Color_1;
    var type$6 = utils.type;
    Color$m.prototype.alpha = function(a, mutate) {
        if (mutate === void 0) mutate = false;
        if (a !== undefined && type$6(a) === "number") {
            if (mutate) {
                this._rgb[3] = a;
                return this;
            }
            return new Color$m([
                this._rgb[0],
                this._rgb[1],
                this._rgb[2],
                a
            ], "rgb");
        }
        return this._rgb[3];
    };
    var Color$l = Color_1;
    Color$l.prototype.clipped = function() {
        return this._rgb._clipped || false;
    };
    var Color$k = Color_1;
    var LAB_CONSTANTS$1 = labConstants;
    Color$k.prototype.darken = function(amount) {
        if (amount === void 0) amount = 1;
        var me = this;
        var lab = me.lab();
        lab[0] -= LAB_CONSTANTS$1.Kn * amount;
        return new Color$k(lab, "lab").alpha(me.alpha(), true);
    };
    Color$k.prototype.brighten = function(amount) {
        if (amount === void 0) amount = 1;
        return this.darken(-amount);
    };
    Color$k.prototype.darker = Color$k.prototype.darken;
    Color$k.prototype.brighter = Color$k.prototype.brighten;
    var Color$j = Color_1;
    Color$j.prototype.get = function(mc) {
        var ref = mc.split(".");
        var mode = ref[0];
        var channel = ref[1];
        var src = this[mode]();
        if (channel) {
            var i = mode.indexOf(channel) - (mode.substr(0, 2) === "ok" ? 2 : 0);
            if (i > -1) return src[i];
            throw new Error("unknown channel " + channel + " in mode " + mode);
        } else return src;
    };
    var Color$i = Color_1;
    var type$5 = utils.type;
    var pow$6 = Math.pow;
    var EPS = 1e-7;
    var MAX_ITER = 20;
    Color$i.prototype.luminance = function(lum) {
        if (lum !== undefined && type$5(lum) === "number") {
            if (lum === 0) // return pure black
            return new Color$i([
                0,
                0,
                0,
                this._rgb[3]
            ], "rgb");
            if (lum === 1) // return pure white
            return new Color$i([
                255,
                255,
                255,
                this._rgb[3]
            ], "rgb");
            // compute new color using...
            var cur_lum = this.luminance();
            var mode = "rgb";
            var max_iter = MAX_ITER;
            var test = function(low, high) {
                var mid = low.interpolate(high, 0.5, mode);
                var lm = mid.luminance();
                if (Math.abs(lum - lm) < EPS || !max_iter--) // close enough
                return mid;
                return lm > lum ? test(low, mid) : test(mid, high);
            };
            var rgb = (cur_lum > lum ? test(new Color$i([
                0,
                0,
                0
            ]), this) : test(this, new Color$i([
                255,
                255,
                255
            ]))).rgb();
            return new Color$i(rgb.concat([
                this._rgb[3]
            ]));
        }
        return rgb2luminance.apply(void 0, this._rgb.slice(0, 3));
    };
    var rgb2luminance = function(r, g, b) {
        // relative luminance
        // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        r = luminance_x(r);
        g = luminance_x(g);
        b = luminance_x(b);
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };
    var luminance_x = function(x) {
        x /= 255;
        return x <= 0.03928 ? x / 12.92 : pow$6((x + 0.055) / 1.055, 2.4);
    };
    var interpolator$1 = {};
    var Color$h = Color_1;
    var type$4 = utils.type;
    var interpolator = interpolator$1;
    var mix$1 = function(col1, col2, f) {
        if (f === void 0) f = 0.5;
        var rest = [], len = arguments.length - 3;
        while(len-- > 0)rest[len] = arguments[len + 3];
        var mode = rest[0] || "lrgb";
        if (!interpolator[mode] && !rest.length) // fall back to the first supported mode
        mode = Object.keys(interpolator)[0];
        if (!interpolator[mode]) throw new Error("interpolation mode " + mode + " is not defined");
        if (type$4(col1) !== "object") col1 = new Color$h(col1);
        if (type$4(col2) !== "object") col2 = new Color$h(col2);
        return interpolator[mode](col1, col2, f).alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
    };
    var Color$g = Color_1;
    var mix = mix$1;
    Color$g.prototype.mix = Color$g.prototype.interpolate = function(col2, f) {
        if (f === void 0) f = 0.5;
        var rest = [], len = arguments.length - 2;
        while(len-- > 0)rest[len] = arguments[len + 2];
        return mix.apply(void 0, [
            this,
            col2,
            f
        ].concat(rest));
    };
    var Color$f = Color_1;
    Color$f.prototype.premultiply = function(mutate) {
        if (mutate === void 0) mutate = false;
        var rgb = this._rgb;
        var a = rgb[3];
        if (mutate) {
            this._rgb = [
                rgb[0] * a,
                rgb[1] * a,
                rgb[2] * a,
                a
            ];
            return this;
        } else return new Color$f([
            rgb[0] * a,
            rgb[1] * a,
            rgb[2] * a,
            a
        ], "rgb");
    };
    var Color$e = Color_1;
    var LAB_CONSTANTS = labConstants;
    Color$e.prototype.saturate = function(amount) {
        if (amount === void 0) amount = 1;
        var me = this;
        var lch = me.lch();
        lch[1] += LAB_CONSTANTS.Kn * amount;
        if (lch[1] < 0) lch[1] = 0;
        return new Color$e(lch, "lch").alpha(me.alpha(), true);
    };
    Color$e.prototype.desaturate = function(amount) {
        if (amount === void 0) amount = 1;
        return this.saturate(-amount);
    };
    var Color$d = Color_1;
    var type$3 = utils.type;
    Color$d.prototype.set = function(mc, value, mutate) {
        if (mutate === void 0) mutate = false;
        var ref = mc.split(".");
        var mode = ref[0];
        var channel = ref[1];
        var src = this[mode]();
        if (channel) {
            var i = mode.indexOf(channel) - (mode.substr(0, 2) === "ok" ? 2 : 0);
            if (i > -1) {
                if (type$3(value) == "string") switch(value.charAt(0)){
                    case "+":
                        src[i] += +value;
                        break;
                    case "-":
                        src[i] += +value;
                        break;
                    case "*":
                        src[i] *= +value.substr(1);
                        break;
                    case "/":
                        src[i] /= +value.substr(1);
                        break;
                    default:
                        src[i] = +value;
                }
                else if (type$3(value) === "number") src[i] = value;
                else throw new Error("unsupported value for Color.set");
                var out = new Color$d(src, mode);
                if (mutate) {
                    this._rgb = out._rgb;
                    return this;
                }
                return out;
            }
            throw new Error("unknown channel " + channel + " in mode " + mode);
        } else return src;
    };
    var Color$c = Color_1;
    var rgb = function(col1, col2, f) {
        var xyz0 = col1._rgb;
        var xyz1 = col2._rgb;
        return new Color$c(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), "rgb");
    };
    // register interpolator
    interpolator$1.rgb = rgb;
    var Color$b = Color_1;
    var sqrt$2 = Math.sqrt;
    var pow$5 = Math.pow;
    var lrgb = function(col1, col2, f) {
        var ref = col1._rgb;
        var x1 = ref[0];
        var y1 = ref[1];
        var z1 = ref[2];
        var ref$1 = col2._rgb;
        var x2 = ref$1[0];
        var y2 = ref$1[1];
        var z2 = ref$1[2];
        return new Color$b(sqrt$2(pow$5(x1, 2) * (1 - f) + pow$5(x2, 2) * f), sqrt$2(pow$5(y1, 2) * (1 - f) + pow$5(y2, 2) * f), sqrt$2(pow$5(z1, 2) * (1 - f) + pow$5(z2, 2) * f), "rgb");
    };
    // register interpolator
    interpolator$1.lrgb = lrgb;
    var Color$a = Color_1;
    var lab = function(col1, col2, f) {
        var xyz0 = col1.lab();
        var xyz1 = col2.lab();
        return new Color$a(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), "lab");
    };
    // register interpolator
    interpolator$1.lab = lab;
    var Color$9 = Color_1;
    var _hsx = function(col1, col2, f, m) {
        var assign, assign$1;
        var xyz0, xyz1;
        if (m === "hsl") {
            xyz0 = col1.hsl();
            xyz1 = col2.hsl();
        } else if (m === "hsv") {
            xyz0 = col1.hsv();
            xyz1 = col2.hsv();
        } else if (m === "hcg") {
            xyz0 = col1.hcg();
            xyz1 = col2.hcg();
        } else if (m === "hsi") {
            xyz0 = col1.hsi();
            xyz1 = col2.hsi();
        } else if (m === "lch" || m === "hcl") {
            m = "hcl";
            xyz0 = col1.hcl();
            xyz1 = col2.hcl();
        } else if (m === "oklch") {
            xyz0 = col1.oklch().reverse();
            xyz1 = col2.oklch().reverse();
        }
        var hue0, hue1, sat0, sat1, lbv0, lbv1;
        if (m.substr(0, 1) === "h" || m === "oklch") {
            assign = xyz0, hue0 = assign[0], sat0 = assign[1], lbv0 = assign[2];
            assign$1 = xyz1, hue1 = assign$1[0], sat1 = assign$1[1], lbv1 = assign$1[2];
        }
        var sat, hue, lbv, dh;
        if (!isNaN(hue0) && !isNaN(hue1)) {
            // both colors have hue
            if (hue1 > hue0 && hue1 - hue0 > 180) dh = hue1 - (hue0 + 360);
            else if (hue1 < hue0 && hue0 - hue1 > 180) dh = hue1 + 360 - hue0;
            else dh = hue1 - hue0;
            hue = hue0 + f * dh;
        } else if (!isNaN(hue0)) {
            hue = hue0;
            if ((lbv1 == 1 || lbv1 == 0) && m != "hsv") sat = sat0;
        } else if (!isNaN(hue1)) {
            hue = hue1;
            if ((lbv0 == 1 || lbv0 == 0) && m != "hsv") sat = sat1;
        } else hue = Number.NaN;
        if (sat === undefined) sat = sat0 + f * (sat1 - sat0);
        lbv = lbv0 + f * (lbv1 - lbv0);
        return m === "oklch" ? new Color$9([
            lbv,
            sat,
            hue
        ], m) : new Color$9([
            hue,
            sat,
            lbv
        ], m);
    };
    var interpolate_hsx$5 = _hsx;
    var lch = function(col1, col2, f) {
        return interpolate_hsx$5(col1, col2, f, "lch");
    };
    // register interpolator
    interpolator$1.lch = lch;
    interpolator$1.hcl = lch;
    var Color$8 = Color_1;
    var num = function(col1, col2, f) {
        var c1 = col1.num();
        var c2 = col2.num();
        return new Color$8(c1 + f * (c2 - c1), "num");
    };
    // register interpolator
    interpolator$1.num = num;
    var interpolate_hsx$4 = _hsx;
    var hcg = function(col1, col2, f) {
        return interpolate_hsx$4(col1, col2, f, "hcg");
    };
    // register interpolator
    interpolator$1.hcg = hcg;
    var interpolate_hsx$3 = _hsx;
    var hsi = function(col1, col2, f) {
        return interpolate_hsx$3(col1, col2, f, "hsi");
    };
    // register interpolator
    interpolator$1.hsi = hsi;
    var interpolate_hsx$2 = _hsx;
    var hsl = function(col1, col2, f) {
        return interpolate_hsx$2(col1, col2, f, "hsl");
    };
    // register interpolator
    interpolator$1.hsl = hsl;
    var interpolate_hsx$1 = _hsx;
    var hsv = function(col1, col2, f) {
        return interpolate_hsx$1(col1, col2, f, "hsv");
    };
    // register interpolator
    interpolator$1.hsv = hsv;
    var Color$7 = Color_1;
    var oklab = function(col1, col2, f) {
        var xyz0 = col1.oklab();
        var xyz1 = col2.oklab();
        return new Color$7(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), "oklab");
    };
    // register interpolator
    interpolator$1.oklab = oklab;
    var interpolate_hsx = _hsx;
    var oklch = function(col1, col2, f) {
        return interpolate_hsx(col1, col2, f, "oklch");
    };
    // register interpolator
    interpolator$1.oklch = oklch;
    var Color$6 = Color_1;
    var clip_rgb$1 = utils.clip_rgb;
    var pow$4 = Math.pow;
    var sqrt$1 = Math.sqrt;
    var PI$1 = Math.PI;
    var cos$2 = Math.cos;
    var sin$2 = Math.sin;
    var atan2$1 = Math.atan2;
    var average = function(colors, mode, weights) {
        if (mode === void 0) mode = "lrgb";
        if (weights === void 0) weights = null;
        var l = colors.length;
        if (!weights) weights = Array.from(new Array(l)).map(function() {
            return 1;
        });
        // normalize weights
        var k = l / weights.reduce(function(a, b) {
            return a + b;
        });
        weights.forEach(function(w, i) {
            weights[i] *= k;
        });
        // convert colors to Color objects
        colors = colors.map(function(c) {
            return new Color$6(c);
        });
        if (mode === "lrgb") return _average_lrgb(colors, weights);
        var first = colors.shift();
        var xyz = first.get(mode);
        var cnt = [];
        var dx = 0;
        var dy = 0;
        // initial color
        for(var i = 0; i < xyz.length; i++){
            xyz[i] = (xyz[i] || 0) * weights[0];
            cnt.push(isNaN(xyz[i]) ? 0 : weights[0]);
            if (mode.charAt(i) === "h" && !isNaN(xyz[i])) {
                var A = xyz[i] / 180 * PI$1;
                dx += cos$2(A) * weights[0];
                dy += sin$2(A) * weights[0];
            }
        }
        var alpha = first.alpha() * weights[0];
        colors.forEach(function(c, ci) {
            var xyz2 = c.get(mode);
            alpha += c.alpha() * weights[ci + 1];
            for(var i = 0; i < xyz.length; i++)if (!isNaN(xyz2[i])) {
                cnt[i] += weights[ci + 1];
                if (mode.charAt(i) === "h") {
                    var A = xyz2[i] / 180 * PI$1;
                    dx += cos$2(A) * weights[ci + 1];
                    dy += sin$2(A) * weights[ci + 1];
                } else xyz[i] += xyz2[i] * weights[ci + 1];
            }
        });
        for(var i$1 = 0; i$1 < xyz.length; i$1++)if (mode.charAt(i$1) === "h") {
            var A$1 = atan2$1(dy / cnt[i$1], dx / cnt[i$1]) / PI$1 * 180;
            while(A$1 < 0)A$1 += 360;
            while(A$1 >= 360)A$1 -= 360;
            xyz[i$1] = A$1;
        } else xyz[i$1] = xyz[i$1] / cnt[i$1];
        alpha /= l;
        return new Color$6(xyz, mode).alpha(alpha > 0.99999 ? 1 : alpha, true);
    };
    var _average_lrgb = function(colors, weights) {
        var l = colors.length;
        var xyz = [
            0,
            0,
            0,
            0
        ];
        for(var i = 0; i < colors.length; i++){
            var col = colors[i];
            var f = weights[i] / l;
            var rgb = col._rgb;
            xyz[0] += pow$4(rgb[0], 2) * f;
            xyz[1] += pow$4(rgb[1], 2) * f;
            xyz[2] += pow$4(rgb[2], 2) * f;
            xyz[3] += rgb[3] * f;
        }
        xyz[0] = sqrt$1(xyz[0]);
        xyz[1] = sqrt$1(xyz[1]);
        xyz[2] = sqrt$1(xyz[2]);
        if (xyz[3] > 0.9999999) xyz[3] = 1;
        return new Color$6(clip_rgb$1(xyz));
    };
    // minimal multi-purpose interface
    // @requires utils color analyze
    var chroma$4 = chroma_1;
    var type$2 = utils.type;
    var pow$3 = Math.pow;
    var scale$2 = function(colors) {
        // constructor
        var _mode = "rgb";
        var _nacol = chroma$4("#ccc");
        var _spread = 0;
        // const _fixed = false;
        var _domain = [
            0,
            1
        ];
        var _pos = [];
        var _padding = [
            0,
            0
        ];
        var _classes = false;
        var _colors = [];
        var _out = false;
        var _min = 0;
        var _max = 1;
        var _correctLightness = false;
        var _colorCache = {};
        var _useCache = true;
        var _gamma = 1;
        // private methods
        var setColors = function(colors) {
            colors = colors || [
                "#fff",
                "#000"
            ];
            if (colors && type$2(colors) === "string" && chroma$4.brewer && chroma$4.brewer[colors.toLowerCase()]) colors = chroma$4.brewer[colors.toLowerCase()];
            if (type$2(colors) === "array") {
                // handle single color
                if (colors.length === 1) colors = [
                    colors[0],
                    colors[0]
                ];
                // make a copy of the colors
                colors = colors.slice(0);
                // convert to chroma classes
                for(var c = 0; c < colors.length; c++)colors[c] = chroma$4(colors[c]);
                // auto-fill color position
                _pos.length = 0;
                for(var c$1 = 0; c$1 < colors.length; c$1++)_pos.push(c$1 / (colors.length - 1));
            }
            resetCache();
            return _colors = colors;
        };
        var getClass = function(value) {
            if (_classes != null) {
                var n = _classes.length - 1;
                var i = 0;
                while(i < n && value >= _classes[i])i++;
                return i - 1;
            }
            return 0;
        };
        var tMapLightness = function(t) {
            return t;
        };
        var tMapDomain = function(t) {
            return t;
        };
        // const classifyValue = function(value) {
        //     let val = value;
        //     if (_classes.length > 2) {
        //         const n = _classes.length-1;
        //         const i = getClass(value);
        //         const minc = _classes[0] + ((_classes[1]-_classes[0]) * (0 + (_spread * 0.5)));  // center of 1st class
        //         const maxc = _classes[n-1] + ((_classes[n]-_classes[n-1]) * (1 - (_spread * 0.5)));  // center of last class
        //         val = _min + ((((_classes[i] + ((_classes[i+1] - _classes[i]) * 0.5)) - minc) / (maxc-minc)) * (_max - _min));
        //     }
        //     return val;
        // };
        var getColor = function(val, bypassMap) {
            var col, t;
            if (bypassMap == null) bypassMap = false;
            if (isNaN(val) || val === null) return _nacol;
            if (!bypassMap) {
                if (_classes && _classes.length > 2) {
                    // find the class
                    var c = getClass(val);
                    t = c / (_classes.length - 2);
                } else if (_max !== _min) // just interpolate between min/max
                t = (val - _min) / (_max - _min);
                else t = 1;
            } else t = val;
            // domain map
            t = tMapDomain(t);
            if (!bypassMap) t = tMapLightness(t); // lightness correction
            if (_gamma !== 1) t = pow$3(t, _gamma);
            t = _padding[0] + t * (1 - _padding[0] - _padding[1]);
            t = Math.min(1, Math.max(0, t));
            var k = Math.floor(t * 10000);
            if (_useCache && _colorCache[k]) col = _colorCache[k];
            else {
                if (type$2(_colors) === "array") //for i in [0.._pos.length-1]
                for(var i = 0; i < _pos.length; i++){
                    var p = _pos[i];
                    if (t <= p) {
                        col = _colors[i];
                        break;
                    }
                    if (t >= p && i === _pos.length - 1) {
                        col = _colors[i];
                        break;
                    }
                    if (t > p && t < _pos[i + 1]) {
                        t = (t - p) / (_pos[i + 1] - p);
                        col = chroma$4.interpolate(_colors[i], _colors[i + 1], t, _mode);
                        break;
                    }
                }
                else if (type$2(_colors) === "function") col = _colors(t);
                if (_useCache) _colorCache[k] = col;
            }
            return col;
        };
        var resetCache = function() {
            return _colorCache = {};
        };
        setColors(colors);
        // public interface
        var f = function(v) {
            var c = chroma$4(getColor(v));
            if (_out && c[_out]) return c[_out]();
            else return c;
        };
        f.classes = function(classes) {
            if (classes != null) {
                if (type$2(classes) === "array") {
                    _classes = classes;
                    _domain = [
                        classes[0],
                        classes[classes.length - 1]
                    ];
                } else {
                    var d = chroma$4.analyze(_domain);
                    if (classes === 0) _classes = [
                        d.min,
                        d.max
                    ];
                    else _classes = chroma$4.limits(d, "e", classes);
                }
                return f;
            }
            return _classes;
        };
        f.domain = function(domain) {
            if (!arguments.length) return _domain;
            _min = domain[0];
            _max = domain[domain.length - 1];
            _pos = [];
            var k = _colors.length;
            if (domain.length === k && _min !== _max) // update positions
            for(var i = 0, list = Array.from(domain); i < list.length; i += 1){
                var d = list[i];
                _pos.push((d - _min) / (_max - _min));
            }
            else {
                for(var c = 0; c < k; c++)_pos.push(c / (k - 1));
                if (domain.length > 2) {
                    // set domain map
                    var tOut = domain.map(function(d, i) {
                        return i / (domain.length - 1);
                    });
                    var tBreaks = domain.map(function(d) {
                        return (d - _min) / (_max - _min);
                    });
                    if (!tBreaks.every(function(val, i) {
                        return tOut[i] === val;
                    })) tMapDomain = function(t) {
                        if (t <= 0 || t >= 1) return t;
                        var i = 0;
                        while(t >= tBreaks[i + 1])i++;
                        var f = (t - tBreaks[i]) / (tBreaks[i + 1] - tBreaks[i]);
                        var out = tOut[i] + f * (tOut[i + 1] - tOut[i]);
                        return out;
                    };
                }
            }
            _domain = [
                _min,
                _max
            ];
            return f;
        };
        f.mode = function(_m) {
            if (!arguments.length) return _mode;
            _mode = _m;
            resetCache();
            return f;
        };
        f.range = function(colors, _pos) {
            setColors(colors);
            return f;
        };
        f.out = function(_o) {
            _out = _o;
            return f;
        };
        f.spread = function(val) {
            if (!arguments.length) return _spread;
            _spread = val;
            return f;
        };
        f.correctLightness = function(v) {
            if (v == null) v = true;
            _correctLightness = v;
            resetCache();
            if (_correctLightness) tMapLightness = function(t) {
                var L0 = getColor(0, true).lab()[0];
                var L1 = getColor(1, true).lab()[0];
                var pol = L0 > L1;
                var L_actual = getColor(t, true).lab()[0];
                var L_ideal = L0 + (L1 - L0) * t;
                var L_diff = L_actual - L_ideal;
                var t0 = 0;
                var t1 = 1;
                var max_iter = 20;
                while(Math.abs(L_diff) > 1e-2 && max_iter-- > 0)(function() {
                    if (pol) L_diff *= -1;
                    if (L_diff < 0) {
                        t0 = t;
                        t += (t1 - t) * 0.5;
                    } else {
                        t1 = t;
                        t += (t0 - t) * 0.5;
                    }
                    L_actual = getColor(t, true).lab()[0];
                    return L_diff = L_actual - L_ideal;
                })();
                return t;
            };
            else tMapLightness = function(t) {
                return t;
            };
            return f;
        };
        f.padding = function(p) {
            if (p != null) {
                if (type$2(p) === "number") p = [
                    p,
                    p
                ];
                _padding = p;
                return f;
            } else return _padding;
        };
        f.colors = function(numColors, out) {
            // If no arguments are given, return the original colors that were provided
            if (arguments.length < 2) out = "hex";
            var result = [];
            if (arguments.length === 0) result = _colors.slice(0);
            else if (numColors === 1) result = [
                f(0.5)
            ];
            else if (numColors > 1) {
                var dm = _domain[0];
                var dd = _domain[1] - dm;
                result = __range__(0, numColors, false).map(function(i) {
                    return f(dm + i / (numColors - 1) * dd);
                });
            } else {
                colors = [];
                var samples = [];
                if (_classes && _classes.length > 2) for(var i = 1, end = _classes.length, asc = 1 <= end; asc ? i < end : i > end; asc ? i++ : i--)samples.push((_classes[i - 1] + _classes[i]) * 0.5);
                else samples = _domain;
                result = samples.map(function(v) {
                    return f(v);
                });
            }
            if (chroma$4[out]) result = result.map(function(c) {
                return c[out]();
            });
            return result;
        };
        f.cache = function(c) {
            if (c != null) {
                _useCache = c;
                return f;
            } else return _useCache;
        };
        f.gamma = function(g) {
            if (g != null) {
                _gamma = g;
                return f;
            } else return _gamma;
        };
        f.nodata = function(d) {
            if (d != null) {
                _nacol = chroma$4(d);
                return f;
            } else return _nacol;
        };
        return f;
    };
    function __range__(left, right, inclusive) {
        var range = [];
        var ascending = left < right;
        var end = !inclusive ? right : ascending ? right + 1 : right - 1;
        for(var i = left; ascending ? i < end : i > end; ascending ? i++ : i--)range.push(i);
        return range;
    }
    //
    // interpolates between a set of colors uzing a bezier spline
    //
    // @requires utils lab
    var Color$5 = Color_1;
    var scale$1 = scale$2;
    // nth row of the pascal triangle
    var binom_row = function(n) {
        var row = [
            1,
            1
        ];
        for(var i = 1; i < n; i++){
            var newrow = [
                1
            ];
            for(var j = 1; j <= row.length; j++)newrow[j] = (row[j] || 0) + row[j - 1];
            row = newrow;
        }
        return row;
    };
    var bezier = function(colors) {
        var assign, assign$1, assign$2;
        var I, lab0, lab1, lab2;
        colors = colors.map(function(c) {
            return new Color$5(c);
        });
        if (colors.length === 2) {
            // linear interpolation
            assign = colors.map(function(c) {
                return c.lab();
            }), lab0 = assign[0], lab1 = assign[1];
            I = function(t) {
                var lab = [
                    0,
                    1,
                    2
                ].map(function(i) {
                    return lab0[i] + t * (lab1[i] - lab0[i]);
                });
                return new Color$5(lab, "lab");
            };
        } else if (colors.length === 3) {
            // quadratic bezier interpolation
            assign$1 = colors.map(function(c) {
                return c.lab();
            }), lab0 = assign$1[0], lab1 = assign$1[1], lab2 = assign$1[2];
            I = function(t) {
                var lab = [
                    0,
                    1,
                    2
                ].map(function(i) {
                    return (1 - t) * (1 - t) * lab0[i] + 2 * (1 - t) * t * lab1[i] + t * t * lab2[i];
                });
                return new Color$5(lab, "lab");
            };
        } else if (colors.length === 4) {
            // cubic bezier interpolation
            var lab3;
            assign$2 = colors.map(function(c) {
                return c.lab();
            }), lab0 = assign$2[0], lab1 = assign$2[1], lab2 = assign$2[2], lab3 = assign$2[3];
            I = function(t) {
                var lab = [
                    0,
                    1,
                    2
                ].map(function(i) {
                    return (1 - t) * (1 - t) * (1 - t) * lab0[i] + 3 * (1 - t) * (1 - t) * t * lab1[i] + 3 * (1 - t) * t * t * lab2[i] + t * t * t * lab3[i];
                });
                return new Color$5(lab, "lab");
            };
        } else if (colors.length >= 5) {
            // general case (degree n bezier)
            var labs, row, n;
            labs = colors.map(function(c) {
                return c.lab();
            });
            n = colors.length - 1;
            row = binom_row(n);
            I = function(t) {
                var u = 1 - t;
                var lab = [
                    0,
                    1,
                    2
                ].map(function(i) {
                    return labs.reduce(function(sum, el, j) {
                        return sum + row[j] * Math.pow(u, n - j) * Math.pow(t, j) * el[i];
                    }, 0);
                });
                return new Color$5(lab, "lab");
            };
        } else throw new RangeError("No point in running bezier with only one color.");
        return I;
    };
    var bezier_1 = function(colors) {
        var f = bezier(colors);
        f.scale = function() {
            return scale$1(f);
        };
        return f;
    };
    /*
     * interpolates between a set of colors uzing a bezier spline
     * blend mode formulas taken from http://www.venture-ware.com/kevin/coding/lets-learn-math-photoshop-blend-modes/
     */ var chroma$3 = chroma_1;
    var blend = function(bottom, top, mode) {
        if (!blend[mode]) throw new Error("unknown blend mode " + mode);
        return blend[mode](bottom, top);
    };
    var blend_f = function(f) {
        return function(bottom, top) {
            var c0 = chroma$3(top).rgb();
            var c1 = chroma$3(bottom).rgb();
            return chroma$3.rgb(f(c0, c1));
        };
    };
    var each = function(f) {
        return function(c0, c1) {
            var out = [];
            out[0] = f(c0[0], c1[0]);
            out[1] = f(c0[1], c1[1]);
            out[2] = f(c0[2], c1[2]);
            return out;
        };
    };
    var normal = function(a) {
        return a;
    };
    var multiply = function(a, b) {
        return a * b / 255;
    };
    var darken = function(a, b) {
        return a > b ? b : a;
    };
    var lighten = function(a, b) {
        return a > b ? a : b;
    };
    var screen = function(a, b) {
        return 255 * (1 - (1 - a / 255) * (1 - b / 255));
    };
    var overlay = function(a, b) {
        return b < 128 ? 2 * a * b / 255 : 255 * (1 - 2 * (1 - a / 255) * (1 - b / 255));
    };
    var burn = function(a, b) {
        return 255 * (1 - (1 - b / 255) / (a / 255));
    };
    var dodge = function(a, b) {
        if (a === 255) return 255;
        a = 255 * (b / 255) / (1 - a / 255);
        return a > 255 ? 255 : a;
    };
    // # add = (a,b) ->
    // #     if (a + b > 255) then 255 else a + b
    blend.normal = blend_f(each(normal));
    blend.multiply = blend_f(each(multiply));
    blend.screen = blend_f(each(screen));
    blend.overlay = blend_f(each(overlay));
    blend.darken = blend_f(each(darken));
    blend.lighten = blend_f(each(lighten));
    blend.dodge = blend_f(each(dodge));
    blend.burn = blend_f(each(burn));
    // blend.add = blend_f(each(add));
    var blend_1 = blend;
    // cubehelix interpolation
    // based on D.A. Green "A colour scheme for the display of astronomical intensity images"
    // http://astron-soc.in/bulletin/11June/289392011.pdf
    var type$1 = utils.type;
    var clip_rgb = utils.clip_rgb;
    var TWOPI = utils.TWOPI;
    var pow$2 = Math.pow;
    var sin$1 = Math.sin;
    var cos$1 = Math.cos;
    var chroma$2 = chroma_1;
    var cubehelix = function(start, rotations, hue, gamma, lightness) {
        if (start === void 0) start = 300;
        if (rotations === void 0) rotations = -1.5;
        if (hue === void 0) hue = 1;
        if (gamma === void 0) gamma = 1;
        if (lightness === void 0) lightness = [
            0,
            1
        ];
        var dh = 0, dl;
        if (type$1(lightness) === "array") dl = lightness[1] - lightness[0];
        else {
            dl = 0;
            lightness = [
                lightness,
                lightness
            ];
        }
        var f = function(fract) {
            var a = TWOPI * ((start + 120) / 360 + rotations * fract);
            var l = pow$2(lightness[0] + dl * fract, gamma);
            var h = dh !== 0 ? hue[0] + fract * dh : hue;
            var amp = h * l * (1 - l) / 2;
            var cos_a = cos$1(a);
            var sin_a = sin$1(a);
            var r = l + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
            var g = l + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
            var b = l + amp * (1.97294 * cos_a);
            return chroma$2(clip_rgb([
                r * 255,
                g * 255,
                b * 255,
                1
            ]));
        };
        f.start = function(s) {
            if (s == null) return start;
            start = s;
            return f;
        };
        f.rotations = function(r) {
            if (r == null) return rotations;
            rotations = r;
            return f;
        };
        f.gamma = function(g) {
            if (g == null) return gamma;
            gamma = g;
            return f;
        };
        f.hue = function(h) {
            if (h == null) return hue;
            hue = h;
            if (type$1(hue) === "array") {
                dh = hue[1] - hue[0];
                if (dh === 0) hue = hue[1];
            } else dh = 0;
            return f;
        };
        f.lightness = function(h) {
            if (h == null) return lightness;
            if (type$1(h) === "array") {
                lightness = h;
                dl = h[1] - h[0];
            } else {
                lightness = [
                    h,
                    h
                ];
                dl = 0;
            }
            return f;
        };
        f.scale = function() {
            return chroma$2.scale(f);
        };
        f.hue(hue);
        return f;
    };
    var Color$4 = Color_1;
    var digits = "0123456789abcdef";
    var floor$1 = Math.floor;
    var random = Math.random;
    var random_1 = function() {
        var code = "#";
        for(var i = 0; i < 6; i++)code += digits.charAt(floor$1(random() * 16));
        return new Color$4(code, "hex");
    };
    var type = type$p;
    var log = Math.log;
    var pow$1 = Math.pow;
    var floor = Math.floor;
    var abs$1 = Math.abs;
    var analyze = function(data, key) {
        if (key === void 0) key = null;
        var r = {
            min: Number.MAX_VALUE,
            max: Number.MAX_VALUE * -1,
            sum: 0,
            values: [],
            count: 0
        };
        if (type(data) === "object") data = Object.values(data);
        data.forEach(function(val) {
            if (key && type(val) === "object") val = val[key];
            if (val !== undefined && val !== null && !isNaN(val)) {
                r.values.push(val);
                r.sum += val;
                if (val < r.min) r.min = val;
                if (val > r.max) r.max = val;
                r.count += 1;
            }
        });
        r.domain = [
            r.min,
            r.max
        ];
        r.limits = function(mode, num) {
            return limits(r, mode, num);
        };
        return r;
    };
    var limits = function(data, mode, num) {
        if (mode === void 0) mode = "equal";
        if (num === void 0) num = 7;
        if (type(data) == "array") data = analyze(data);
        var min = data.min;
        var max = data.max;
        var values = data.values.sort(function(a, b) {
            return a - b;
        });
        if (num === 1) return [
            min,
            max
        ];
        var limits = [];
        if (mode.substr(0, 1) === "c") {
            limits.push(min);
            limits.push(max);
        }
        if (mode.substr(0, 1) === "e") {
            limits.push(min);
            for(var i = 1; i < num; i++)limits.push(min + i / num * (max - min));
            limits.push(max);
        } else if (mode.substr(0, 1) === "l") {
            if (min <= 0) throw new Error("Logarithmic scales are only possible for values > 0");
            var min_log = Math.LOG10E * log(min);
            var max_log = Math.LOG10E * log(max);
            limits.push(min);
            for(var i$1 = 1; i$1 < num; i$1++)limits.push(pow$1(10, min_log + i$1 / num * (max_log - min_log)));
            limits.push(max);
        } else if (mode.substr(0, 1) === "q") {
            limits.push(min);
            for(var i$2 = 1; i$2 < num; i$2++){
                var p = (values.length - 1) * i$2 / num;
                var pb = floor(p);
                if (pb === p) limits.push(values[pb]);
                else {
                    var pr = p - pb;
                    limits.push(values[pb] * (1 - pr) + values[pb + 1] * pr);
                }
            }
            limits.push(max);
        } else if (mode.substr(0, 1) === "k") {
            /*
            implementation based on
            http://code.google.com/p/figue/source/browse/trunk/figue.js#336
            simplified for 1-d input values
            */ var cluster;
            var n = values.length;
            var assignments = new Array(n);
            var clusterSizes = new Array(num);
            var repeat = true;
            var nb_iters = 0;
            var centroids = null;
            // get seed values
            centroids = [];
            centroids.push(min);
            for(var i$3 = 1; i$3 < num; i$3++)centroids.push(min + i$3 / num * (max - min));
            centroids.push(max);
            while(repeat){
                // assignment step
                for(var j = 0; j < num; j++)clusterSizes[j] = 0;
                for(var i$4 = 0; i$4 < n; i$4++){
                    var value = values[i$4];
                    var mindist = Number.MAX_VALUE;
                    var best = void 0;
                    for(var j$1 = 0; j$1 < num; j$1++){
                        var dist = abs$1(centroids[j$1] - value);
                        if (dist < mindist) {
                            mindist = dist;
                            best = j$1;
                        }
                        clusterSizes[best]++;
                        assignments[i$4] = best;
                    }
                }
                // update centroids step
                var newCentroids = new Array(num);
                for(var j$2 = 0; j$2 < num; j$2++)newCentroids[j$2] = null;
                for(var i$5 = 0; i$5 < n; i$5++){
                    cluster = assignments[i$5];
                    if (newCentroids[cluster] === null) newCentroids[cluster] = values[i$5];
                    else newCentroids[cluster] += values[i$5];
                }
                for(var j$3 = 0; j$3 < num; j$3++)newCentroids[j$3] *= 1 / clusterSizes[j$3];
                // check convergence
                repeat = false;
                for(var j$4 = 0; j$4 < num; j$4++)if (newCentroids[j$4] !== centroids[j$4]) {
                    repeat = true;
                    break;
                }
                centroids = newCentroids;
                nb_iters++;
                if (nb_iters > 200) repeat = false;
            }
            // finished k-means clustering
            // the next part is borrowed from gabrielflor.it
            var kClusters = {};
            for(var j$5 = 0; j$5 < num; j$5++)kClusters[j$5] = [];
            for(var i$6 = 0; i$6 < n; i$6++){
                cluster = assignments[i$6];
                kClusters[cluster].push(values[i$6]);
            }
            var tmpKMeansBreaks = [];
            for(var j$6 = 0; j$6 < num; j$6++){
                tmpKMeansBreaks.push(kClusters[j$6][0]);
                tmpKMeansBreaks.push(kClusters[j$6][kClusters[j$6].length - 1]);
            }
            tmpKMeansBreaks = tmpKMeansBreaks.sort(function(a, b) {
                return a - b;
            });
            limits.push(tmpKMeansBreaks[0]);
            for(var i$7 = 1; i$7 < tmpKMeansBreaks.length; i$7 += 2){
                var v = tmpKMeansBreaks[i$7];
                if (!isNaN(v) && limits.indexOf(v) === -1) limits.push(v);
            }
        }
        return limits;
    };
    var analyze_1 = {
        analyze: analyze,
        limits: limits
    };
    var Color$3 = Color_1;
    var contrast = function(a, b) {
        // WCAG contrast ratio
        // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
        a = new Color$3(a);
        b = new Color$3(b);
        var l1 = a.luminance();
        var l2 = b.luminance();
        return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
    };
    var Color$2 = Color_1;
    var sqrt = Math.sqrt;
    var pow = Math.pow;
    var min = Math.min;
    var max = Math.max;
    var atan2 = Math.atan2;
    var abs = Math.abs;
    var cos = Math.cos;
    var sin = Math.sin;
    var exp = Math.exp;
    var PI = Math.PI;
    var deltaE = function(a, b, Kl, Kc, Kh) {
        if (Kl === void 0) Kl = 1;
        if (Kc === void 0) Kc = 1;
        if (Kh === void 0) Kh = 1;
        // Delta E (CIE 2000)
        // see http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CIE2000.html
        var rad2deg = function(rad) {
            return 360 * rad / (2 * PI);
        };
        var deg2rad = function(deg) {
            return 2 * PI * deg / 360;
        };
        a = new Color$2(a);
        b = new Color$2(b);
        var ref = Array.from(a.lab());
        var L1 = ref[0];
        var a1 = ref[1];
        var b1 = ref[2];
        var ref$1 = Array.from(b.lab());
        var L2 = ref$1[0];
        var a2 = ref$1[1];
        var b2 = ref$1[2];
        var avgL = (L1 + L2) / 2;
        var C1 = sqrt(pow(a1, 2) + pow(b1, 2));
        var C2 = sqrt(pow(a2, 2) + pow(b2, 2));
        var avgC = (C1 + C2) / 2;
        var G = 0.5 * (1 - sqrt(pow(avgC, 7) / (pow(avgC, 7) + pow(25, 7))));
        var a1p = a1 * (1 + G);
        var a2p = a2 * (1 + G);
        var C1p = sqrt(pow(a1p, 2) + pow(b1, 2));
        var C2p = sqrt(pow(a2p, 2) + pow(b2, 2));
        var avgCp = (C1p + C2p) / 2;
        var arctan1 = rad2deg(atan2(b1, a1p));
        var arctan2 = rad2deg(atan2(b2, a2p));
        var h1p = arctan1 >= 0 ? arctan1 : arctan1 + 360;
        var h2p = arctan2 >= 0 ? arctan2 : arctan2 + 360;
        var avgHp = abs(h1p - h2p) > 180 ? (h1p + h2p + 360) / 2 : (h1p + h2p) / 2;
        var T = 1 - 0.17 * cos(deg2rad(avgHp - 30)) + 0.24 * cos(deg2rad(2 * avgHp)) + 0.32 * cos(deg2rad(3 * avgHp + 6)) - 0.2 * cos(deg2rad(4 * avgHp - 63));
        var deltaHp = h2p - h1p;
        deltaHp = abs(deltaHp) <= 180 ? deltaHp : h2p <= h1p ? deltaHp + 360 : deltaHp - 360;
        deltaHp = 2 * sqrt(C1p * C2p) * sin(deg2rad(deltaHp) / 2);
        var deltaL = L2 - L1;
        var deltaCp = C2p - C1p;
        var sl = 1 + 0.015 * pow(avgL - 50, 2) / sqrt(20 + pow(avgL - 50, 2));
        var sc = 1 + 0.045 * avgCp;
        var sh = 1 + 0.015 * avgCp * T;
        var deltaTheta = 30 * exp(-pow((avgHp - 275) / 25, 2));
        var Rc = 2 * sqrt(pow(avgCp, 7) / (pow(avgCp, 7) + pow(25, 7)));
        var Rt = -Rc * sin(2 * deg2rad(deltaTheta));
        var result = sqrt(pow(deltaL / (Kl * sl), 2) + pow(deltaCp / (Kc * sc), 2) + pow(deltaHp / (Kh * sh), 2) + Rt * (deltaCp / (Kc * sc)) * (deltaHp / (Kh * sh)));
        return max(0, min(100, result));
    };
    var Color$1 = Color_1;
    // simple Euclidean distance
    var distance = function(a, b, mode) {
        if (mode === void 0) mode = "lab";
        // Delta E (CIE 1976)
        // see http://www.brucelindbloom.com/index.html?Equations.html
        a = new Color$1(a);
        b = new Color$1(b);
        var l1 = a.get(mode);
        var l2 = b.get(mode);
        var sum_sq = 0;
        for(var i in l1){
            var d = (l1[i] || 0) - (l2[i] || 0);
            sum_sq += d * d;
        }
        return Math.sqrt(sum_sq);
    };
    var Color = Color_1;
    var valid = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        try {
            new (Function.prototype.bind.apply(Color, [
                null
            ].concat(args)));
            return true;
        } catch (e) {
            return false;
        }
    };
    // some pre-defined color scales:
    var chroma$1 = chroma_1;
    var scale = scale$2;
    var scales = {
        cool: function cool() {
            return scale([
                chroma$1.hsl(180, 1, .9),
                chroma$1.hsl(250, .7, .4)
            ]);
        },
        hot: function hot() {
            return scale([
                "#000",
                "#f00",
                "#ff0",
                "#fff"
            ]).mode("rgb");
        }
    };
    /**
        ColorBrewer colors for chroma.js

        Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The
        Pennsylvania State University.

        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0

        Unless required by applicable law or agreed to in writing, software distributed
        under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
        CONDITIONS OF ANY KIND, either express or implied. See the License for the
        specific language governing permissions and limitations under the License.
    */ var colorbrewer = {
        // sequential
        OrRd: [
            "#fff7ec",
            "#fee8c8",
            "#fdd49e",
            "#fdbb84",
            "#fc8d59",
            "#ef6548",
            "#d7301f",
            "#b30000",
            "#7f0000"
        ],
        PuBu: [
            "#fff7fb",
            "#ece7f2",
            "#d0d1e6",
            "#a6bddb",
            "#74a9cf",
            "#3690c0",
            "#0570b0",
            "#045a8d",
            "#023858"
        ],
        BuPu: [
            "#f7fcfd",
            "#e0ecf4",
            "#bfd3e6",
            "#9ebcda",
            "#8c96c6",
            "#8c6bb1",
            "#88419d",
            "#810f7c",
            "#4d004b"
        ],
        Oranges: [
            "#fff5eb",
            "#fee6ce",
            "#fdd0a2",
            "#fdae6b",
            "#fd8d3c",
            "#f16913",
            "#d94801",
            "#a63603",
            "#7f2704"
        ],
        BuGn: [
            "#f7fcfd",
            "#e5f5f9",
            "#ccece6",
            "#99d8c9",
            "#66c2a4",
            "#41ae76",
            "#238b45",
            "#006d2c",
            "#00441b"
        ],
        YlOrBr: [
            "#ffffe5",
            "#fff7bc",
            "#fee391",
            "#fec44f",
            "#fe9929",
            "#ec7014",
            "#cc4c02",
            "#993404",
            "#662506"
        ],
        YlGn: [
            "#ffffe5",
            "#f7fcb9",
            "#d9f0a3",
            "#addd8e",
            "#78c679",
            "#41ab5d",
            "#238443",
            "#006837",
            "#004529"
        ],
        Reds: [
            "#fff5f0",
            "#fee0d2",
            "#fcbba1",
            "#fc9272",
            "#fb6a4a",
            "#ef3b2c",
            "#cb181d",
            "#a50f15",
            "#67000d"
        ],
        RdPu: [
            "#fff7f3",
            "#fde0dd",
            "#fcc5c0",
            "#fa9fb5",
            "#f768a1",
            "#dd3497",
            "#ae017e",
            "#7a0177",
            "#49006a"
        ],
        Greens: [
            "#f7fcf5",
            "#e5f5e0",
            "#c7e9c0",
            "#a1d99b",
            "#74c476",
            "#41ab5d",
            "#238b45",
            "#006d2c",
            "#00441b"
        ],
        YlGnBu: [
            "#ffffd9",
            "#edf8b1",
            "#c7e9b4",
            "#7fcdbb",
            "#41b6c4",
            "#1d91c0",
            "#225ea8",
            "#253494",
            "#081d58"
        ],
        Purples: [
            "#fcfbfd",
            "#efedf5",
            "#dadaeb",
            "#bcbddc",
            "#9e9ac8",
            "#807dba",
            "#6a51a3",
            "#54278f",
            "#3f007d"
        ],
        GnBu: [
            "#f7fcf0",
            "#e0f3db",
            "#ccebc5",
            "#a8ddb5",
            "#7bccc4",
            "#4eb3d3",
            "#2b8cbe",
            "#0868ac",
            "#084081"
        ],
        Greys: [
            "#ffffff",
            "#f0f0f0",
            "#d9d9d9",
            "#bdbdbd",
            "#969696",
            "#737373",
            "#525252",
            "#252525",
            "#000000"
        ],
        YlOrRd: [
            "#ffffcc",
            "#ffeda0",
            "#fed976",
            "#feb24c",
            "#fd8d3c",
            "#fc4e2a",
            "#e31a1c",
            "#bd0026",
            "#800026"
        ],
        PuRd: [
            "#f7f4f9",
            "#e7e1ef",
            "#d4b9da",
            "#c994c7",
            "#df65b0",
            "#e7298a",
            "#ce1256",
            "#980043",
            "#67001f"
        ],
        Blues: [
            "#f7fbff",
            "#deebf7",
            "#c6dbef",
            "#9ecae1",
            "#6baed6",
            "#4292c6",
            "#2171b5",
            "#08519c",
            "#08306b"
        ],
        PuBuGn: [
            "#fff7fb",
            "#ece2f0",
            "#d0d1e6",
            "#a6bddb",
            "#67a9cf",
            "#3690c0",
            "#02818a",
            "#016c59",
            "#014636"
        ],
        Viridis: [
            "#440154",
            "#482777",
            "#3f4a8a",
            "#31678e",
            "#26838f",
            "#1f9d8a",
            "#6cce5a",
            "#b6de2b",
            "#fee825"
        ],
        // diverging
        Spectral: [
            "#9e0142",
            "#d53e4f",
            "#f46d43",
            "#fdae61",
            "#fee08b",
            "#ffffbf",
            "#e6f598",
            "#abdda4",
            "#66c2a5",
            "#3288bd",
            "#5e4fa2"
        ],
        RdYlGn: [
            "#a50026",
            "#d73027",
            "#f46d43",
            "#fdae61",
            "#fee08b",
            "#ffffbf",
            "#d9ef8b",
            "#a6d96a",
            "#66bd63",
            "#1a9850",
            "#006837"
        ],
        RdBu: [
            "#67001f",
            "#b2182b",
            "#d6604d",
            "#f4a582",
            "#fddbc7",
            "#f7f7f7",
            "#d1e5f0",
            "#92c5de",
            "#4393c3",
            "#2166ac",
            "#053061"
        ],
        PiYG: [
            "#8e0152",
            "#c51b7d",
            "#de77ae",
            "#f1b6da",
            "#fde0ef",
            "#f7f7f7",
            "#e6f5d0",
            "#b8e186",
            "#7fbc41",
            "#4d9221",
            "#276419"
        ],
        PRGn: [
            "#40004b",
            "#762a83",
            "#9970ab",
            "#c2a5cf",
            "#e7d4e8",
            "#f7f7f7",
            "#d9f0d3",
            "#a6dba0",
            "#5aae61",
            "#1b7837",
            "#00441b"
        ],
        RdYlBu: [
            "#a50026",
            "#d73027",
            "#f46d43",
            "#fdae61",
            "#fee090",
            "#ffffbf",
            "#e0f3f8",
            "#abd9e9",
            "#74add1",
            "#4575b4",
            "#313695"
        ],
        BrBG: [
            "#543005",
            "#8c510a",
            "#bf812d",
            "#dfc27d",
            "#f6e8c3",
            "#f5f5f5",
            "#c7eae5",
            "#80cdc1",
            "#35978f",
            "#01665e",
            "#003c30"
        ],
        RdGy: [
            "#67001f",
            "#b2182b",
            "#d6604d",
            "#f4a582",
            "#fddbc7",
            "#ffffff",
            "#e0e0e0",
            "#bababa",
            "#878787",
            "#4d4d4d",
            "#1a1a1a"
        ],
        PuOr: [
            "#7f3b08",
            "#b35806",
            "#e08214",
            "#fdb863",
            "#fee0b6",
            "#f7f7f7",
            "#d8daeb",
            "#b2abd2",
            "#8073ac",
            "#542788",
            "#2d004b"
        ],
        // qualitative
        Set2: [
            "#66c2a5",
            "#fc8d62",
            "#8da0cb",
            "#e78ac3",
            "#a6d854",
            "#ffd92f",
            "#e5c494",
            "#b3b3b3"
        ],
        Accent: [
            "#7fc97f",
            "#beaed4",
            "#fdc086",
            "#ffff99",
            "#386cb0",
            "#f0027f",
            "#bf5b17",
            "#666666"
        ],
        Set1: [
            "#e41a1c",
            "#377eb8",
            "#4daf4a",
            "#984ea3",
            "#ff7f00",
            "#ffff33",
            "#a65628",
            "#f781bf",
            "#999999"
        ],
        Set3: [
            "#8dd3c7",
            "#ffffb3",
            "#bebada",
            "#fb8072",
            "#80b1d3",
            "#fdb462",
            "#b3de69",
            "#fccde5",
            "#d9d9d9",
            "#bc80bd",
            "#ccebc5",
            "#ffed6f"
        ],
        Dark2: [
            "#1b9e77",
            "#d95f02",
            "#7570b3",
            "#e7298a",
            "#66a61e",
            "#e6ab02",
            "#a6761d",
            "#666666"
        ],
        Paired: [
            "#a6cee3",
            "#1f78b4",
            "#b2df8a",
            "#33a02c",
            "#fb9a99",
            "#e31a1c",
            "#fdbf6f",
            "#ff7f00",
            "#cab2d6",
            "#6a3d9a",
            "#ffff99",
            "#b15928"
        ],
        Pastel2: [
            "#b3e2cd",
            "#fdcdac",
            "#cbd5e8",
            "#f4cae4",
            "#e6f5c9",
            "#fff2ae",
            "#f1e2cc",
            "#cccccc"
        ],
        Pastel1: [
            "#fbb4ae",
            "#b3cde3",
            "#ccebc5",
            "#decbe4",
            "#fed9a6",
            "#ffffcc",
            "#e5d8bd",
            "#fddaec",
            "#f2f2f2"
        ]
    };
    // add lowercase aliases for case-insensitive matches
    for(var i = 0, list = Object.keys(colorbrewer); i < list.length; i += 1){
        var key = list[i];
        colorbrewer[key.toLowerCase()] = colorbrewer[key];
    }
    var colorbrewer_1 = colorbrewer;
    var chroma = chroma_1;
    // feel free to comment out anything to rollup
    // a smaller chroma.js built
    // io --> convert colors
    // operators --> modify existing Colors
    // interpolators
    // generators -- > create new colors
    chroma.average = average;
    chroma.bezier = bezier_1;
    chroma.blend = blend_1;
    chroma.cubehelix = cubehelix;
    chroma.mix = chroma.interpolate = mix$1;
    chroma.random = random_1;
    chroma.scale = scale$2;
    // other utility methods
    chroma.analyze = analyze_1.analyze;
    chroma.contrast = contrast;
    chroma.deltaE = deltaE;
    chroma.distance = distance;
    chroma.limits = analyze_1.limits;
    chroma.valid = valid;
    // scale
    chroma.scales = scales;
    // colors
    chroma.colors = w3cx11_1;
    chroma.brewer = colorbrewer_1;
    var chroma_js = chroma;
    return chroma_js;
});

});

parcelRegister("ieKdW", function(module, exports) {
// Generated by Haxe 3.4.4
var $d46d63e7e07542ac$var$hsluv = $d46d63e7e07542ac$var$hsluv || {};
$d46d63e7e07542ac$var$hsluv.Geometry = function() {};
$d46d63e7e07542ac$var$hsluv.Geometry.intersectLineLine = function(a, b) {
    var x = (a.intercept - b.intercept) / (b.slope - a.slope);
    var y = a.slope * x + a.intercept;
    return {
        x: x,
        y: y
    };
};
$d46d63e7e07542ac$var$hsluv.Geometry.distanceFromOrigin = function(point) {
    return Math.sqrt(Math.pow(point.x, 2) + Math.pow(point.y, 2));
};
$d46d63e7e07542ac$var$hsluv.Geometry.distanceLineFromOrigin = function(line) {
    return Math.abs(line.intercept) / Math.sqrt(Math.pow(line.slope, 2) + 1);
};
$d46d63e7e07542ac$var$hsluv.Geometry.perpendicularThroughPoint = function(line, point) {
    var slope = -1 / line.slope;
    var intercept = point.y - slope * point.x;
    return {
        slope: slope,
        intercept: intercept
    };
};
$d46d63e7e07542ac$var$hsluv.Geometry.angleFromOrigin = function(point) {
    return Math.atan2(point.y, point.x);
};
$d46d63e7e07542ac$var$hsluv.Geometry.normalizeAngle = function(angle) {
    var m = 2 * Math.PI;
    return (angle % m + m) % m;
};
$d46d63e7e07542ac$var$hsluv.Geometry.lengthOfRayUntilIntersect = function(theta, line) {
    return line.intercept / (Math.sin(theta) - line.slope * Math.cos(theta));
};
$d46d63e7e07542ac$var$hsluv.Hsluv = function() {};
$d46d63e7e07542ac$var$hsluv.Hsluv.getBounds = function(L) {
    var result = [];
    var sub1 = Math.pow(L + 16, 3) / 1560896;
    var sub2 = sub1 > $d46d63e7e07542ac$var$hsluv.Hsluv.epsilon ? sub1 : L / $d46d63e7e07542ac$var$hsluv.Hsluv.kappa;
    var _g = 0;
    while(_g < 3){
        var c = _g++;
        var m1 = $d46d63e7e07542ac$var$hsluv.Hsluv.m[c][0];
        var m2 = $d46d63e7e07542ac$var$hsluv.Hsluv.m[c][1];
        var m3 = $d46d63e7e07542ac$var$hsluv.Hsluv.m[c][2];
        var _g1 = 0;
        while(_g1 < 2){
            var t = _g1++;
            var top1 = (284517 * m1 - 94839 * m3) * sub2;
            var top2 = (838422 * m3 + 769860 * m2 + 731718 * m1) * L * sub2 - 769860 * t * L;
            var bottom = (632260 * m3 - 126452 * m2) * sub2 + 126452 * t;
            result.push({
                slope: top1 / bottom,
                intercept: top2 / bottom
            });
        }
    }
    return result;
};
$d46d63e7e07542ac$var$hsluv.Hsluv.maxSafeChromaForL = function(L) {
    var bounds = $d46d63e7e07542ac$var$hsluv.Hsluv.getBounds(L);
    var min = Infinity;
    var _g = 0;
    while(_g < bounds.length){
        var bound = bounds[_g];
        ++_g;
        var length = $d46d63e7e07542ac$var$hsluv.Geometry.distanceLineFromOrigin(bound);
        min = Math.min(min, length);
    }
    return min;
};
$d46d63e7e07542ac$var$hsluv.Hsluv.maxChromaForLH = function(L, H) {
    var hrad = H / 360 * Math.PI * 2;
    var bounds = $d46d63e7e07542ac$var$hsluv.Hsluv.getBounds(L);
    var min = Infinity;
    var _g = 0;
    while(_g < bounds.length){
        var bound = bounds[_g];
        ++_g;
        var length = $d46d63e7e07542ac$var$hsluv.Geometry.lengthOfRayUntilIntersect(hrad, bound);
        if (length >= 0) min = Math.min(min, length);
    }
    return min;
};
$d46d63e7e07542ac$var$hsluv.Hsluv.dotProduct = function(a, b) {
    var sum = 0;
    var _g1 = 0;
    var _g = a.length;
    while(_g1 < _g){
        var i = _g1++;
        sum += a[i] * b[i];
    }
    return sum;
};
$d46d63e7e07542ac$var$hsluv.Hsluv.fromLinear = function(c) {
    if (c <= 0.0031308) return 12.92 * c;
    else return 1.055 * Math.pow(c, 0.416666666666666685) - 0.055;
};
$d46d63e7e07542ac$var$hsluv.Hsluv.toLinear = function(c) {
    if (c > 0.04045) return Math.pow((c + 0.055) / 1.055, 2.4);
    else return c / 12.92;
};
$d46d63e7e07542ac$var$hsluv.Hsluv.xyzToRgb = function(tuple) {
    return [
        $d46d63e7e07542ac$var$hsluv.Hsluv.fromLinear($d46d63e7e07542ac$var$hsluv.Hsluv.dotProduct($d46d63e7e07542ac$var$hsluv.Hsluv.m[0], tuple)),
        $d46d63e7e07542ac$var$hsluv.Hsluv.fromLinear($d46d63e7e07542ac$var$hsluv.Hsluv.dotProduct($d46d63e7e07542ac$var$hsluv.Hsluv.m[1], tuple)),
        $d46d63e7e07542ac$var$hsluv.Hsluv.fromLinear($d46d63e7e07542ac$var$hsluv.Hsluv.dotProduct($d46d63e7e07542ac$var$hsluv.Hsluv.m[2], tuple))
    ];
};
$d46d63e7e07542ac$var$hsluv.Hsluv.rgbToXyz = function(tuple) {
    var rgbl = [
        $d46d63e7e07542ac$var$hsluv.Hsluv.toLinear(tuple[0]),
        $d46d63e7e07542ac$var$hsluv.Hsluv.toLinear(tuple[1]),
        $d46d63e7e07542ac$var$hsluv.Hsluv.toLinear(tuple[2])
    ];
    return [
        $d46d63e7e07542ac$var$hsluv.Hsluv.dotProduct($d46d63e7e07542ac$var$hsluv.Hsluv.minv[0], rgbl),
        $d46d63e7e07542ac$var$hsluv.Hsluv.dotProduct($d46d63e7e07542ac$var$hsluv.Hsluv.minv[1], rgbl),
        $d46d63e7e07542ac$var$hsluv.Hsluv.dotProduct($d46d63e7e07542ac$var$hsluv.Hsluv.minv[2], rgbl)
    ];
};
$d46d63e7e07542ac$var$hsluv.Hsluv.yToL = function(Y) {
    if (Y <= $d46d63e7e07542ac$var$hsluv.Hsluv.epsilon) return Y / $d46d63e7e07542ac$var$hsluv.Hsluv.refY * $d46d63e7e07542ac$var$hsluv.Hsluv.kappa;
    else return 116 * Math.pow(Y / $d46d63e7e07542ac$var$hsluv.Hsluv.refY, 0.333333333333333315) - 16;
};
$d46d63e7e07542ac$var$hsluv.Hsluv.lToY = function(L) {
    if (L <= 8) return $d46d63e7e07542ac$var$hsluv.Hsluv.refY * L / $d46d63e7e07542ac$var$hsluv.Hsluv.kappa;
    else return $d46d63e7e07542ac$var$hsluv.Hsluv.refY * Math.pow((L + 16) / 116, 3);
};
$d46d63e7e07542ac$var$hsluv.Hsluv.xyzToLuv = function(tuple) {
    var X = tuple[0];
    var Y = tuple[1];
    var Z = tuple[2];
    var divider = X + 15 * Y + 3 * Z;
    var varU = 4 * X;
    var varV = 9 * Y;
    if (divider != 0) {
        varU /= divider;
        varV /= divider;
    } else {
        varU = NaN;
        varV = NaN;
    }
    var L = $d46d63e7e07542ac$var$hsluv.Hsluv.yToL(Y);
    if (L == 0) return [
        0,
        0,
        0
    ];
    var U = 13 * L * (varU - $d46d63e7e07542ac$var$hsluv.Hsluv.refU);
    var V = 13 * L * (varV - $d46d63e7e07542ac$var$hsluv.Hsluv.refV);
    return [
        L,
        U,
        V
    ];
};
$d46d63e7e07542ac$var$hsluv.Hsluv.luvToXyz = function(tuple) {
    var L = tuple[0];
    var U = tuple[1];
    var V = tuple[2];
    if (L == 0) return [
        0,
        0,
        0
    ];
    var varU = U / (13 * L) + $d46d63e7e07542ac$var$hsluv.Hsluv.refU;
    var varV = V / (13 * L) + $d46d63e7e07542ac$var$hsluv.Hsluv.refV;
    var Y = $d46d63e7e07542ac$var$hsluv.Hsluv.lToY(L);
    var X = 0 - 9 * Y * varU / ((varU - 4) * varV - varU * varV);
    var Z = (9 * Y - 15 * varV * Y - varV * X) / (3 * varV);
    return [
        X,
        Y,
        Z
    ];
};
$d46d63e7e07542ac$var$hsluv.Hsluv.luvToLch = function(tuple) {
    var L = tuple[0];
    var U = tuple[1];
    var V = tuple[2];
    var C = Math.sqrt(U * U + V * V);
    var H;
    if (C < 0.00000001) H = 0;
    else {
        var Hrad = Math.atan2(V, U);
        H = Hrad * 180.0 / Math.PI;
        if (H < 0) H = 360 + H;
    }
    return [
        L,
        C,
        H
    ];
};
$d46d63e7e07542ac$var$hsluv.Hsluv.lchToLuv = function(tuple) {
    var L = tuple[0];
    var C = tuple[1];
    var H = tuple[2];
    var Hrad = H / 360.0 * 2 * Math.PI;
    var U = Math.cos(Hrad) * C;
    var V = Math.sin(Hrad) * C;
    return [
        L,
        U,
        V
    ];
};
$d46d63e7e07542ac$var$hsluv.Hsluv.hsluvToLch = function(tuple) {
    var H = tuple[0];
    var S = tuple[1];
    var L = tuple[2];
    if (L > 99.9999999) return [
        100,
        0,
        H
    ];
    if (L < 0.00000001) return [
        0,
        0,
        H
    ];
    var max = $d46d63e7e07542ac$var$hsluv.Hsluv.maxChromaForLH(L, H);
    var C = max / 100 * S;
    return [
        L,
        C,
        H
    ];
};
$d46d63e7e07542ac$var$hsluv.Hsluv.lchToHsluv = function(tuple) {
    var L = tuple[0];
    var C = tuple[1];
    var H = tuple[2];
    if (L > 99.9999999) return [
        H,
        0,
        100
    ];
    if (L < 0.00000001) return [
        H,
        0,
        0
    ];
    var max = $d46d63e7e07542ac$var$hsluv.Hsluv.maxChromaForLH(L, H);
    var S = C / max * 100;
    return [
        H,
        S,
        L
    ];
};
$d46d63e7e07542ac$var$hsluv.Hsluv.hpluvToLch = function(tuple) {
    var H = tuple[0];
    var S = tuple[1];
    var L = tuple[2];
    if (L > 99.9999999) return [
        100,
        0,
        H
    ];
    if (L < 0.00000001) return [
        0,
        0,
        H
    ];
    var max = $d46d63e7e07542ac$var$hsluv.Hsluv.maxSafeChromaForL(L);
    var C = max / 100 * S;
    return [
        L,
        C,
        H
    ];
};
$d46d63e7e07542ac$var$hsluv.Hsluv.lchToHpluv = function(tuple) {
    var L = tuple[0];
    var C = tuple[1];
    var H = tuple[2];
    if (L > 99.9999999) return [
        H,
        0,
        100
    ];
    if (L < 0.00000001) return [
        H,
        0,
        0
    ];
    var max = $d46d63e7e07542ac$var$hsluv.Hsluv.maxSafeChromaForL(L);
    var S = C / max * 100;
    return [
        H,
        S,
        L
    ];
};
$d46d63e7e07542ac$var$hsluv.Hsluv.rgbToHex = function(tuple) {
    var h = "#";
    var _g = 0;
    while(_g < 3){
        var i = _g++;
        var chan = tuple[i];
        var c = Math.round(chan * 255);
        var digit2 = c % 16;
        var digit1 = (c - digit2) / 16 | 0;
        h += $d46d63e7e07542ac$var$hsluv.Hsluv.hexChars.charAt(digit1) + $d46d63e7e07542ac$var$hsluv.Hsluv.hexChars.charAt(digit2);
    }
    return h;
};
$d46d63e7e07542ac$var$hsluv.Hsluv.hexToRgb = function(hex) {
    hex = hex.toLowerCase();
    var ret = [];
    var _g = 0;
    while(_g < 3){
        var i = _g++;
        var digit1 = $d46d63e7e07542ac$var$hsluv.Hsluv.hexChars.indexOf(hex.charAt(i * 2 + 1));
        var digit2 = $d46d63e7e07542ac$var$hsluv.Hsluv.hexChars.indexOf(hex.charAt(i * 2 + 2));
        var n = digit1 * 16 + digit2;
        ret.push(n / 255.0);
    }
    return ret;
};
$d46d63e7e07542ac$var$hsluv.Hsluv.lchToRgb = function(tuple) {
    return $d46d63e7e07542ac$var$hsluv.Hsluv.xyzToRgb($d46d63e7e07542ac$var$hsluv.Hsluv.luvToXyz($d46d63e7e07542ac$var$hsluv.Hsluv.lchToLuv(tuple)));
};
$d46d63e7e07542ac$var$hsluv.Hsluv.rgbToLch = function(tuple) {
    return $d46d63e7e07542ac$var$hsluv.Hsluv.luvToLch($d46d63e7e07542ac$var$hsluv.Hsluv.xyzToLuv($d46d63e7e07542ac$var$hsluv.Hsluv.rgbToXyz(tuple)));
};
$d46d63e7e07542ac$var$hsluv.Hsluv.hsluvToRgb = function(tuple) {
    return $d46d63e7e07542ac$var$hsluv.Hsluv.lchToRgb($d46d63e7e07542ac$var$hsluv.Hsluv.hsluvToLch(tuple));
};
$d46d63e7e07542ac$var$hsluv.Hsluv.rgbToHsluv = function(tuple) {
    return $d46d63e7e07542ac$var$hsluv.Hsluv.lchToHsluv($d46d63e7e07542ac$var$hsluv.Hsluv.rgbToLch(tuple));
};
$d46d63e7e07542ac$var$hsluv.Hsluv.hpluvToRgb = function(tuple) {
    return $d46d63e7e07542ac$var$hsluv.Hsluv.lchToRgb($d46d63e7e07542ac$var$hsluv.Hsluv.hpluvToLch(tuple));
};
$d46d63e7e07542ac$var$hsluv.Hsluv.rgbToHpluv = function(tuple) {
    return $d46d63e7e07542ac$var$hsluv.Hsluv.lchToHpluv($d46d63e7e07542ac$var$hsluv.Hsluv.rgbToLch(tuple));
};
$d46d63e7e07542ac$var$hsluv.Hsluv.hsluvToHex = function(tuple) {
    return $d46d63e7e07542ac$var$hsluv.Hsluv.rgbToHex($d46d63e7e07542ac$var$hsluv.Hsluv.hsluvToRgb(tuple));
};
$d46d63e7e07542ac$var$hsluv.Hsluv.hpluvToHex = function(tuple) {
    return $d46d63e7e07542ac$var$hsluv.Hsluv.rgbToHex($d46d63e7e07542ac$var$hsluv.Hsluv.hpluvToRgb(tuple));
};
$d46d63e7e07542ac$var$hsluv.Hsluv.hexToHsluv = function(s) {
    return $d46d63e7e07542ac$var$hsluv.Hsluv.rgbToHsluv($d46d63e7e07542ac$var$hsluv.Hsluv.hexToRgb(s));
};
$d46d63e7e07542ac$var$hsluv.Hsluv.hexToHpluv = function(s) {
    return $d46d63e7e07542ac$var$hsluv.Hsluv.rgbToHpluv($d46d63e7e07542ac$var$hsluv.Hsluv.hexToRgb(s));
};
$d46d63e7e07542ac$var$hsluv.Hsluv.m = [
    [
        3.240969941904521,
        -1.537383177570093,
        -0.498610760293
    ],
    [
        -0.96924363628087,
        1.87596750150772,
        0.041555057407175
    ],
    [
        0.055630079696993,
        -0.20397695888897,
        1.056971514242878
    ]
];
$d46d63e7e07542ac$var$hsluv.Hsluv.minv = [
    [
        0.41239079926595,
        0.35758433938387,
        0.18048078840183
    ],
    [
        0.21263900587151,
        0.71516867876775,
        0.072192315360733
    ],
    [
        0.019330818715591,
        0.11919477979462,
        0.95053215224966
    ]
];
$d46d63e7e07542ac$var$hsluv.Hsluv.refY = 1.0;
$d46d63e7e07542ac$var$hsluv.Hsluv.refU = 0.19783000664283;
$d46d63e7e07542ac$var$hsluv.Hsluv.refV = 0.46831999493879;
$d46d63e7e07542ac$var$hsluv.Hsluv.kappa = 903.2962962;
$d46d63e7e07542ac$var$hsluv.Hsluv.epsilon = 0.0088564516;
$d46d63e7e07542ac$var$hsluv.Hsluv.hexChars = "0123456789abcdef";
var $d46d63e7e07542ac$var$root = {
    "hsluvToRgb": $d46d63e7e07542ac$var$hsluv.Hsluv.hsluvToRgb,
    "rgbToHsluv": $d46d63e7e07542ac$var$hsluv.Hsluv.rgbToHsluv,
    "hpluvToRgb": $d46d63e7e07542ac$var$hsluv.Hsluv.hpluvToRgb,
    "rgbToHpluv": $d46d63e7e07542ac$var$hsluv.Hsluv.rgbToHpluv,
    "hsluvToHex": $d46d63e7e07542ac$var$hsluv.Hsluv.hsluvToHex,
    "hexToHsluv": $d46d63e7e07542ac$var$hsluv.Hsluv.hexToHsluv,
    "hpluvToHex": $d46d63e7e07542ac$var$hsluv.Hsluv.hpluvToHex,
    "hexToHpluv": $d46d63e7e07542ac$var$hsluv.Hsluv.hexToHpluv,
    "lchToHpluv": $d46d63e7e07542ac$var$hsluv.Hsluv.lchToHpluv,
    "hpluvToLch": $d46d63e7e07542ac$var$hsluv.Hsluv.hpluvToLch,
    "lchToHsluv": $d46d63e7e07542ac$var$hsluv.Hsluv.lchToHsluv,
    "hsluvToLch": $d46d63e7e07542ac$var$hsluv.Hsluv.hsluvToLch,
    "lchToLuv": $d46d63e7e07542ac$var$hsluv.Hsluv.lchToLuv,
    "luvToLch": $d46d63e7e07542ac$var$hsluv.Hsluv.luvToLch,
    "xyzToLuv": $d46d63e7e07542ac$var$hsluv.Hsluv.xyzToLuv,
    "luvToXyz": $d46d63e7e07542ac$var$hsluv.Hsluv.luvToXyz,
    "xyzToRgb": $d46d63e7e07542ac$var$hsluv.Hsluv.xyzToRgb,
    "rgbToXyz": $d46d63e7e07542ac$var$hsluv.Hsluv.rgbToXyz,
    "lchToRgb": $d46d63e7e07542ac$var$hsluv.Hsluv.lchToRgb,
    "rgbToLch": $d46d63e7e07542ac$var$hsluv.Hsluv.rgbToLch
};
module.exports = $d46d63e7e07542ac$var$root;

});

parcelRegister("83usW", function(module, exports) {

var $evZLl = parcelRequire("evZLl");

var $kYn2N = parcelRequire("kYn2N");

var $4vCPq = parcelRequire("4vCPq");

var $kdyuF = parcelRequire("kdyuF");

var $3H1fa = parcelRequire("3H1fa");

var $1yH5W = parcelRequire("1yH5W");
module.exports = {
    illuminant: $evZLl,
    workspace: $kYn2N,
    matrix: $4vCPq,
    degree: $kdyuF,
    rgb: $3H1fa,
    xyz: $1yH5W
};

});
parcelRegister("evZLl", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $a9UJU = parcelRequire("a9UJU");
// CIE 15-2004 Colorimetry, 3rd Edition
var $a913deb75712a616$var$coordinates = {
    A: {
        x: 0.44758,
        y: 0.40745
    },
    C: {
        x: 0.31006,
        y: 0.31616
    },
    D50: {
        x: 0.34567,
        y: 0.35851
    },
    D65: {
        x: 0.31272,
        y: 0.32903
    },
    D55: {
        x: 0.33243,
        y: 0.34744
    },
    D75: {
        x: 0.29903,
        y: 0.31488
    } // north sky daylight
};
var $a913deb75712a616$var$illuminants = (0, $a9UJU.map)($a913deb75712a616$var$coordinates, function(v) {
    var X = 100 * (v.x / v.y), Y = 100, Z = 100 * (1 - v.x - v.y) / v.y;
    return [
        X,
        Y,
        Z
    ];
});
module.exports.default = $a913deb75712a616$var$illuminants;
module.exports = module.exports["default"];

});
parcelRegister("a9UJU", function(module, exports) {
//automatically generated, do not edit!
//run `node build` instead




































module.exports = {
    "bindAll": (parcelRequire("dSRIY")),
    "contains": (parcelRequire("lDDyE")),
    "deepFillIn": (parcelRequire("gvZbY")),
    "deepMatches": (parcelRequire("e5kep")),
    "deepMixIn": (parcelRequire("hg70Q")),
    "equals": (parcelRequire("FvwcU")),
    "every": (parcelRequire("evjEG")),
    "fillIn": (parcelRequire("kZAOT")),
    "filter": (parcelRequire("eDZys")),
    "find": (parcelRequire("dj7nL")),
    "flatten": (parcelRequire("lL0Go")),
    "forIn": (parcelRequire("1TSew")),
    "forOwn": (parcelRequire("iM0eS")),
    "functions": (parcelRequire("1Pbvy")),
    "get": (parcelRequire("j3VtK")),
    "has": (parcelRequire("lmBlA")),
    "hasOwn": (parcelRequire("iCCkp")),
    "keys": (parcelRequire("50eP4")),
    "map": (parcelRequire("bLZ1y")),
    "matches": (parcelRequire("hgnrc")),
    "max": (parcelRequire("jvg9L")),
    "merge": (parcelRequire("6lHQg")),
    "min": (parcelRequire("1lQ8N")),
    "mixIn": (parcelRequire("ktIeN")),
    "namespace": (parcelRequire("cbjL9")),
    "omit": (parcelRequire("7kvLs")),
    "pick": (parcelRequire("hQ3Tl")),
    "pluck": (parcelRequire("2ThyT")),
    "reduce": (parcelRequire("kcv07")),
    "reject": (parcelRequire("8yQYI")),
    "result": (parcelRequire("D2Tng")),
    "set": (parcelRequire("gxlVN")),
    "size": (parcelRequire("eJQkt")),
    "some": (parcelRequire("hPDHa")),
    "unset": (parcelRequire("4ec3D")),
    "values": (parcelRequire("bvtXg"))
};

});
parcelRegister("dSRIY", function(module, exports) {

var $1Pbvy = parcelRequire("1Pbvy");

var $eaHaK = parcelRequire("eaHaK");

var $hfYey = parcelRequire("hfYey");

var $jI5R9 = parcelRequire("jI5R9");
/**
     * Binds methods of the object to be run in it's own context.
     */ function $a1b9fe089a195419$var$bindAll(obj, rest_methodNames) {
    var keys = arguments.length > 1 ? $jI5R9(arguments, 1) : $1Pbvy(obj);
    $hfYey(keys, function(key) {
        obj[key] = $eaHaK(obj[key], obj);
    });
}
module.exports = $a1b9fe089a195419$var$bindAll;

});
parcelRegister("1Pbvy", function(module, exports) {

var $1TSew = parcelRequire("1TSew");
/**
     * return a list of all enumerable properties that have function values
     */ function $15437b152decb146$var$functions(obj) {
    var keys = [];
    $1TSew(obj, function(val, key) {
        if (typeof val === "function") keys.push(key);
    });
    return keys.sort();
}
module.exports = $15437b152decb146$var$functions;

});
parcelRegister("1TSew", function(module, exports) {

var $iCCkp = parcelRequire("iCCkp");
var $1624ff13f9357221$var$_hasDontEnumBug, $1624ff13f9357221$var$_dontEnums;
function $1624ff13f9357221$var$checkDontEnum() {
    $1624ff13f9357221$var$_dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
    ];
    $1624ff13f9357221$var$_hasDontEnumBug = true;
    for(var key in {
        "toString": null
    })$1624ff13f9357221$var$_hasDontEnumBug = false;
}
/**
     * Similar to Array/forEach but works over object properties and fixes Don't
     * Enum bug on IE.
     * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
     */ function $1624ff13f9357221$var$forIn(obj, fn, thisObj) {
    var key, i = 0;
    // no need to check if argument is a real object that way we can use
    // it for arrays, functions, date, etc.
    //post-pone check till needed
    if ($1624ff13f9357221$var$_hasDontEnumBug == null) $1624ff13f9357221$var$checkDontEnum();
    for(key in obj){
        if ($1624ff13f9357221$var$exec(fn, obj, key, thisObj) === false) break;
    }
    if ($1624ff13f9357221$var$_hasDontEnumBug) {
        var ctor = obj.constructor, isProto = !!ctor && obj === ctor.prototype;
        while(key = $1624ff13f9357221$var$_dontEnums[i++])// For constructor, if it is a prototype object the constructor
        // is always non-enumerable unless defined otherwise (and
        // enumerated above).  For non-prototype objects, it will have
        // to be defined on this object, since it cannot be defined on
        // any prototype objects.
        //
        // For other [[DontEnum]] properties, check if the value is
        // different than Object prototype value.
        if ((key !== "constructor" || !isProto && $iCCkp(obj, key)) && obj[key] !== Object.prototype[key]) {
            if ($1624ff13f9357221$var$exec(fn, obj, key, thisObj) === false) break;
        }
    }
}
function $1624ff13f9357221$var$exec(fn, obj, key, thisObj) {
    return fn.call(thisObj, obj[key], key, obj);
}
module.exports = $1624ff13f9357221$var$forIn;

});
parcelRegister("iCCkp", function(module, exports) {
/**
     * Safer Object.hasOwnProperty
     */ function $d8e981c28e3a9f65$var$hasOwn(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
module.exports = $d8e981c28e3a9f65$var$hasOwn;

});



parcelRegister("eaHaK", function(module, exports) {

var $jI5R9 = parcelRequire("jI5R9");
/**
     * Return a function that will execute in the given context, optionally adding any additional supplied parameters to the beginning of the arguments collection.
     * @param {Function} fn  Function.
     * @param {object} context   Execution context.
     * @param {rest} args    Arguments (0...n arguments).
     * @return {Function} Wrapped Function.
     */ function $a5137cff857bac85$var$bind(fn, context, args) {
    var argsArr = $jI5R9(arguments, 2); //curried args
    return function() {
        return fn.apply(context, argsArr.concat($jI5R9(arguments)));
    };
}
module.exports = $a5137cff857bac85$var$bind;

});
parcelRegister("jI5R9", function(module, exports) {
/**
     * Create slice of source array or array-like object
     */ function $e596ab50b788df36$var$slice(arr, start, end) {
    var len = arr.length;
    if (start == null) start = 0;
    else if (start < 0) start = Math.max(len + start, 0);
    else start = Math.min(start, len);
    if (end == null) end = len;
    else if (end < 0) end = Math.max(len + end, 0);
    else end = Math.min(end, len);
    var result = [];
    while(start < end)result.push(arr[start++]);
    return result;
}
module.exports = $e596ab50b788df36$var$slice;

});


parcelRegister("hfYey", function(module, exports) {
/**
     * Array forEach
     */ function $c9028f91bf16f6ba$var$forEach(arr, callback, thisObj) {
    if (arr == null) return;
    var i = -1, len = arr.length;
    while(++i < len){
        // we iterate over sparse items since there is no way to make it
        // work properly on IE 7-8. see #64
        if (callback.call(thisObj, arr[i], i, arr) === false) break;
    }
}
module.exports = $c9028f91bf16f6ba$var$forEach;

});


parcelRegister("lDDyE", function(module, exports) {

var $hPDHa = parcelRequire("hPDHa");
/**
     * Check if object contains value
     */ function $fc0becdab01861d5$var$contains(obj, needle) {
    return $hPDHa(obj, function(val) {
        return val === needle;
    });
}
module.exports = $fc0becdab01861d5$var$contains;

});
parcelRegister("hPDHa", function(module, exports) {

var $iM0eS = parcelRequire("iM0eS");

var $6GTbI = parcelRequire("6GTbI");
/**
     * Object some
     */ function $cfb5fdbc39614bf2$var$some(obj, callback, thisObj) {
    callback = $6GTbI(callback, thisObj);
    var result = false;
    $iM0eS(obj, function(val, key) {
        if (callback(val, key, obj)) {
            result = true;
            return false; // break
        }
    });
    return result;
}
module.exports = $cfb5fdbc39614bf2$var$some;

});
parcelRegister("iM0eS", function(module, exports) {

var $iCCkp = parcelRequire("iCCkp");

var $1TSew = parcelRequire("1TSew");
/**
     * Similar to Array/forEach but works over object properties and fixes Don't
     * Enum bug on IE.
     * based on: http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
     */ function $daace5290aac13a0$var$forOwn(obj, fn, thisObj) {
    $1TSew(obj, function(val, key) {
        if ($iCCkp(obj, key)) return fn.call(thisObj, obj[key], key, obj);
    });
}
module.exports = $daace5290aac13a0$var$forOwn;

});

parcelRegister("6GTbI", function(module, exports) {

var $hg8ID = parcelRequire("hg8ID");

var $8Cpai = parcelRequire("8Cpai");

var $e5kep = parcelRequire("e5kep");
/**
     * Converts argument into a valid iterator.
     * Used internally on most array/object/collection methods that receives a
     * callback/iterator providing a shortcut syntax.
     */ function $4df179860a3287ee$var$makeIterator(src, thisObj) {
    if (src == null) return $hg8ID;
    switch(typeof src){
        case "function":
            // function is the first to improve perf (most common case)
            // also avoid using `Function#call` if not needed, which boosts
            // perf a lot in some cases
            return typeof thisObj !== "undefined" ? function(val, i, arr) {
                return src.call(thisObj, val, i, arr);
            } : src;
        case "object":
            return function(val) {
                return $e5kep(val, src);
            };
        case "string":
        case "number":
            return $8Cpai(src);
    }
}
module.exports = $4df179860a3287ee$var$makeIterator;

});
parcelRegister("hg8ID", function(module, exports) {
/**
     * Returns the first argument provided to it.
     */ function $c90ab1b1bff4a608$var$identity(val) {
    return val;
}
module.exports = $c90ab1b1bff4a608$var$identity;

});

parcelRegister("8Cpai", function(module, exports) {
/**
     * Returns a function that gets a property of the passed object
     */ function $6465649ae8ef59f4$var$prop(name) {
    return function(obj) {
        return obj[name];
    };
}
module.exports = $6465649ae8ef59f4$var$prop;

});

parcelRegister("e5kep", function(module, exports) {

var $iM0eS = parcelRequire("iM0eS");

var $3qinm = parcelRequire("3qinm");
function $a41139dc7ccf4d20$var$containsMatch(array, pattern) {
    var i = -1, length = array.length;
    while(++i < length){
        if ($a41139dc7ccf4d20$var$deepMatches(array[i], pattern)) return true;
    }
    return false;
}
function $a41139dc7ccf4d20$var$matchArray(target, pattern) {
    var i = -1, patternLength = pattern.length;
    while(++i < patternLength){
        if (!$a41139dc7ccf4d20$var$containsMatch(target, pattern[i])) return false;
    }
    return true;
}
function $a41139dc7ccf4d20$var$matchObject(target, pattern) {
    var result = true;
    $iM0eS(pattern, function(val, key) {
        if (!$a41139dc7ccf4d20$var$deepMatches(target[key], val)) // Return false to break out of forOwn early
        return result = false;
    });
    return result;
}
/**
     * Recursively check if the objects match.
     */ function $a41139dc7ccf4d20$var$deepMatches(target, pattern) {
    if (target && typeof target === "object") {
        if ($3qinm(target) && $3qinm(pattern)) return $a41139dc7ccf4d20$var$matchArray(target, pattern);
        else return $a41139dc7ccf4d20$var$matchObject(target, pattern);
    } else return target === pattern;
}
module.exports = $a41139dc7ccf4d20$var$deepMatches;

});
parcelRegister("3qinm", function(module, exports) {

var $2LcrG = parcelRequire("2LcrG");
/**
     */ var $27e20dd9e48c056e$var$isArray = Array.isArray || function(val) {
    return $2LcrG(val, "Array");
};
module.exports = $27e20dd9e48c056e$var$isArray;

});
parcelRegister("2LcrG", function(module, exports) {

var $kL9PR = parcelRequire("kL9PR");
/**
     * Check if value is from a specific "kind".
     */ function $20299ffc97c76b4c$var$isKind(val, kind) {
    return $kL9PR(val) === kind;
}
module.exports = $20299ffc97c76b4c$var$isKind;

});
parcelRegister("kL9PR", function(module, exports) {
var $f1cfd388fdafd622$var$_rKind = /^\[object (.*)\]$/, $f1cfd388fdafd622$var$_toString = Object.prototype.toString, $f1cfd388fdafd622$var$UNDEF;
/**
     * Gets the "kind" of value. (e.g. "String", "Number", etc)
     */ function $f1cfd388fdafd622$var$kindOf(val) {
    if (val === null) return "Null";
    else if (val === $f1cfd388fdafd622$var$UNDEF) return "Undefined";
    else return $f1cfd388fdafd622$var$_rKind.exec($f1cfd388fdafd622$var$_toString.call(val))[1];
}
module.exports = $f1cfd388fdafd622$var$kindOf;

});







parcelRegister("gvZbY", function(module, exports) {

var $iM0eS = parcelRequire("iM0eS");

var $bRUrh = parcelRequire("bRUrh");
/**
     * Deeply copy missing properties in the target from the defaults.
     */ function $c05f02102b847c8a$var$deepFillIn(target, defaults) {
    var i = 0, n = arguments.length, obj;
    while(++i < n){
        obj = arguments[i];
        if (obj) // jshint loopfunc: true
        $iM0eS(obj, function(newValue, key) {
            var curValue = target[key];
            if (curValue == null) target[key] = newValue;
            else if ($bRUrh(curValue) && $bRUrh(newValue)) $c05f02102b847c8a$var$deepFillIn(curValue, newValue);
        });
    }
    return target;
}
module.exports = $c05f02102b847c8a$var$deepFillIn;

});
parcelRegister("bRUrh", function(module, exports) {
/**
     * Checks if the value is created by the `Object` constructor.
     */ function $8a406c94e627be1f$var$isPlainObject(value) {
    return !!value && typeof value === "object" && value.constructor === Object;
}
module.exports = $8a406c94e627be1f$var$isPlainObject;

});


parcelRegister("hg70Q", function(module, exports) {

var $iM0eS = parcelRequire("iM0eS");

var $bRUrh = parcelRequire("bRUrh");
/**
     * Mixes objects into the target object, recursively mixing existing child
     * objects.
     */ function $c9095ed6513627c2$var$deepMixIn(target, objects) {
    var i = 0, n = arguments.length, obj;
    while(++i < n){
        obj = arguments[i];
        if (obj) $iM0eS(obj, $c9095ed6513627c2$var$copyProp, target);
    }
    return target;
}
function $c9095ed6513627c2$var$copyProp(val, key) {
    var existing = this[key];
    if ($bRUrh(val) && $bRUrh(existing)) $c9095ed6513627c2$var$deepMixIn(existing, val);
    else this[key] = val;
}
module.exports = $c9095ed6513627c2$var$deepMixIn;

});

parcelRegister("FvwcU", function(module, exports) {

var $iCCkp = parcelRequire("iCCkp");

var $evjEG = parcelRequire("evjEG");

var $6cnNR = parcelRequire("6cnNR");

var $ffMxY = parcelRequire("ffMxY");
// Makes a function to compare the object values from the specified compare
// operation callback.
function $07cc475cae623cc2$var$makeCompare(callback) {
    return function(value, key) {
        return $iCCkp(this, key) && callback(value, this[key]);
    };
}
function $07cc475cae623cc2$var$checkProperties(value, key) {
    return $iCCkp(this, key);
}
/**
     * Checks if two objects have the same keys and values.
     */ function $07cc475cae623cc2$var$equals(a, b, callback) {
    callback = callback || $ffMxY;
    if (!$6cnNR(a) || !$6cnNR(b)) return callback(a, b);
    return $evjEG(a, $07cc475cae623cc2$var$makeCompare(callback), b) && $evjEG(b, $07cc475cae623cc2$var$checkProperties, a);
}
module.exports = $07cc475cae623cc2$var$equals;

});
parcelRegister("evjEG", function(module, exports) {

var $iM0eS = parcelRequire("iM0eS");

var $6GTbI = parcelRequire("6GTbI");
/**
     * Object every
     */ function $a8f3350fc2286d4d$var$every(obj, callback, thisObj) {
    callback = $6GTbI(callback, thisObj);
    var result = true;
    $iM0eS(obj, function(val, key) {
        // we consider any falsy values as "false" on purpose so shorthand
        // syntax can be used to check property existence
        if (!callback(val, key, obj)) {
            result = false;
            return false; // break
        }
    });
    return result;
}
module.exports = $a8f3350fc2286d4d$var$every;

});

parcelRegister("6cnNR", function(module, exports) {

var $2LcrG = parcelRequire("2LcrG");
/**
     */ function $483653e09fa07500$var$isObject(val) {
    return $2LcrG(val, "Object");
}
module.exports = $483653e09fa07500$var$isObject;

});

parcelRegister("ffMxY", function(module, exports) {
/**
     * Check if both arguments are egal.
     */ function $b1adea230bbc8d5f$var$is(x, y) {
    // implementation borrowed from harmony:egal spec
    if (x === y) // 0 === -0, but they are not identical
    return x !== 0 || 1 / x === 1 / y;
    // NaN !== NaN, but they are identical.
    // NaNs are the only non-reflexive value, i.e., if x !== x,
    // then x is a NaN.
    // isNaN is broken: it converts its argument to number, so
    // isNaN("foo") => true
    return x !== x && y !== y;
}
module.exports = $b1adea230bbc8d5f$var$is;

});


parcelRegister("kZAOT", function(module, exports) {

var $hfYey = parcelRequire("hfYey");

var $jI5R9 = parcelRequire("jI5R9");

var $iM0eS = parcelRequire("iM0eS");
/**
     * Copy missing properties in the obj from the defaults.
     */ function $f48610d073924a05$var$fillIn(obj, var_defaults) {
    $hfYey($jI5R9(arguments, 1), function(base) {
        $iM0eS(base, function(val, key) {
            if (obj[key] == null) obj[key] = val;
        });
    });
    return obj;
}
module.exports = $f48610d073924a05$var$fillIn;

});

parcelRegister("eDZys", function(module, exports) {

var $iM0eS = parcelRequire("iM0eS");

var $6GTbI = parcelRequire("6GTbI");
/**
     * Creates a new object with all the properties where the callback returns
     * true.
     */ function $aa9474b9a97b1c07$var$filterValues(obj, callback, thisObj) {
    callback = $6GTbI(callback, thisObj);
    var output = {};
    $iM0eS(obj, function(value, key, obj) {
        if (callback(value, key, obj)) output[key] = value;
    });
    return output;
}
module.exports = $aa9474b9a97b1c07$var$filterValues;

});

parcelRegister("dj7nL", function(module, exports) {

var $hPDHa = parcelRequire("hPDHa");

var $6GTbI = parcelRequire("6GTbI");
/**
     * Returns first item that matches criteria
     */ function $9b02c6b2e3a8fe8e$var$find(obj, callback, thisObj) {
    callback = $6GTbI(callback, thisObj);
    var result;
    $hPDHa(obj, function(value, key, obj) {
        if (callback(value, key, obj)) {
            result = value;
            return true; //break
        }
    });
    return result;
}
module.exports = $9b02c6b2e3a8fe8e$var$find;

});

parcelRegister("lL0Go", function(module, exports) {

var $iM0eS = parcelRequire("iM0eS");

var $bRUrh = parcelRequire("bRUrh");
/*
     * Helper function to flatten to a destination object.
     * Used to remove the need to create intermediate objects while flattening.
     */ function $fd6e845a15818be7$var$flattenTo(obj, result, prefix, level) {
    $iM0eS(obj, function(value, key) {
        var nestedPrefix = prefix ? prefix + "." + key : key;
        if (level !== 0 && $bRUrh(value)) $fd6e845a15818be7$var$flattenTo(value, result, nestedPrefix, level - 1);
        else result[nestedPrefix] = value;
    });
    return result;
}
/**
     * Recursively flattens an object.
     * A new object containing all the elements is returned.
     * If level is specified, it will only flatten up to that level.
     */ function $fd6e845a15818be7$var$flatten(obj, level) {
    if (obj == null) return {};
    level = level == null ? -1 : level;
    return $fd6e845a15818be7$var$flattenTo(obj, {}, "", level);
}
module.exports = $fd6e845a15818be7$var$flatten;

});

parcelRegister("j3VtK", function(module, exports) {
parcelRequire("lvDOT");
/**
     * get "nested" object property
     */ function $de0ae234a40ba2d3$var$get(obj, prop) {
    var parts = prop.split("."), last = parts.pop();
    while(prop = parts.shift()){
        obj = obj[prop];
        if (obj == null) return;
    }
    return obj[last];
}
module.exports = $de0ae234a40ba2d3$var$get;

});
parcelRegister("lvDOT", function(module, exports) {
/**
     * Checks if the object is a primitive
     */ function $fa8b619f5c984b47$var$isPrimitive(value) {
    // Using switch fallthrough because it's simple to read and is
    // generally fast: http://jsperf.com/testing-value-is-primitive/5
    switch(typeof value){
        case "string":
        case "number":
        case "boolean":
            return true;
    }
    return value == null;
}
module.exports = $fa8b619f5c984b47$var$isPrimitive;

});


parcelRegister("lmBlA", function(module, exports) {

var $j3VtK = parcelRequire("j3VtK");
var $f8d89f671036808b$var$UNDEF;
/**
     * Check if object has nested property.
     */ function $f8d89f671036808b$var$has(obj, prop) {
    return $j3VtK(obj, prop) !== $f8d89f671036808b$var$UNDEF;
}
module.exports = $f8d89f671036808b$var$has;

});

parcelRegister("50eP4", function(module, exports) {

var $iM0eS = parcelRequire("iM0eS");
/**
     * Get object keys
     */ var $3a48734dbfc401af$var$keys = Object.keys || function(obj) {
    var keys = [];
    $iM0eS(obj, function(val, key) {
        keys.push(key);
    });
    return keys;
};
module.exports = $3a48734dbfc401af$var$keys;

});

parcelRegister("bLZ1y", function(module, exports) {

var $iM0eS = parcelRequire("iM0eS");

var $6GTbI = parcelRequire("6GTbI");
/**
     * Creates a new object where all the values are the result of calling
     * `callback`.
     */ function $89236b9ef35c4174$var$mapValues(obj, callback, thisObj) {
    callback = $6GTbI(callback, thisObj);
    var output = {};
    $iM0eS(obj, function(val, key, obj) {
        output[key] = callback(val, key, obj);
    });
    return output;
}
module.exports = $89236b9ef35c4174$var$mapValues;

});

parcelRegister("hgnrc", function(module, exports) {

var $iM0eS = parcelRequire("iM0eS");
/**
     * checks if a object contains all given properties/values
     */ function $c9161c848f97889d$var$matches(target, props) {
    // can't use "object/every" because of circular dependency
    var result = true;
    $iM0eS(props, function(val, key) {
        if (target[key] !== val) // break loop at first difference
        return result = false;
    });
    return result;
}
module.exports = $c9161c848f97889d$var$matches;

});

parcelRegister("jvg9L", function(module, exports) {

var $hDEHd = parcelRequire("hDEHd");

var $bvtXg = parcelRequire("bvtXg");
/**
     * Returns maximum value inside object.
     */ function $e32d71ea0861c653$var$max(obj, compareFn) {
    return $hDEHd($bvtXg(obj), compareFn);
}
module.exports = $e32d71ea0861c653$var$max;

});
parcelRegister("hDEHd", function(module, exports) {

var $6GTbI = parcelRequire("6GTbI");
/**
     * Return maximum value inside array
     */ function $cd75a59276ca211f$var$max(arr, iterator, thisObj) {
    if (arr == null || !arr.length) return Infinity;
    else if (arr.length && !iterator) return Math.max.apply(Math, arr);
    else {
        iterator = $6GTbI(iterator, thisObj);
        var result, compare = -Infinity, value, temp;
        var i = -1, len = arr.length;
        while(++i < len){
            value = arr[i];
            temp = iterator(value, i, arr);
            if (temp > compare) {
                compare = temp;
                result = value;
            }
        }
        return result;
    }
}
module.exports = $cd75a59276ca211f$var$max;

});

parcelRegister("bvtXg", function(module, exports) {

var $iM0eS = parcelRequire("iM0eS");
/**
     * Get object values
     */ function $022972e4a9929233$var$values(obj) {
    var vals = [];
    $iM0eS(obj, function(val, key) {
        vals.push(val);
    });
    return vals;
}
module.exports = $022972e4a9929233$var$values;

});


parcelRegister("6lHQg", function(module, exports) {

var $iCCkp = parcelRequire("iCCkp");

var $dcBXl = parcelRequire("dcBXl");

var $6cnNR = parcelRequire("6cnNR");
/**
     * Deep merge objects.
     */ function $49f6b652140ff27f$var$merge() {
    var i = 1, key, val, obj, target;
    // make sure we don't modify source element and it's properties
    // objects are passed by reference
    target = $dcBXl(arguments[0]);
    while(obj = arguments[i++])for(key in obj){
        if (!$iCCkp(obj, key)) continue;
        val = obj[key];
        if ($6cnNR(val) && $6cnNR(target[key])) // inception, deep merge objects
        target[key] = $49f6b652140ff27f$var$merge(target[key], val);
        else // make sure arrays, regexp, date, objects are cloned
        target[key] = $dcBXl(val);
    }
    return target;
}
module.exports = $49f6b652140ff27f$var$merge;

});
parcelRegister("dcBXl", function(module, exports) {

var $bgg24 = parcelRequire("bgg24");

var $iM0eS = parcelRequire("iM0eS");

var $kL9PR = parcelRequire("kL9PR");

var $bRUrh = parcelRequire("bRUrh");
/**
     * Recursively clone native types.
     */ function $99c9d6ae2a67a2b3$var$deepClone(val, instanceClone) {
    switch($kL9PR(val)){
        case "Object":
            return $99c9d6ae2a67a2b3$var$cloneObject(val, instanceClone);
        case "Array":
            return $99c9d6ae2a67a2b3$var$cloneArray(val, instanceClone);
        default:
            return $bgg24(val);
    }
}
function $99c9d6ae2a67a2b3$var$cloneObject(source, instanceClone) {
    if ($bRUrh(source)) {
        var out = {};
        $iM0eS(source, function(val, key) {
            this[key] = $99c9d6ae2a67a2b3$var$deepClone(val, instanceClone);
        }, out);
        return out;
    } else if (instanceClone) return instanceClone(source);
    else return source;
}
function $99c9d6ae2a67a2b3$var$cloneArray(arr, instanceClone) {
    var out = [], i = -1, n = arr.length, val;
    while(++i < n)out[i] = $99c9d6ae2a67a2b3$var$deepClone(arr[i], instanceClone);
    return out;
}
module.exports = $99c9d6ae2a67a2b3$var$deepClone;

});
parcelRegister("bgg24", function(module, exports) {

var $kL9PR = parcelRequire("kL9PR");

var $bRUrh = parcelRequire("bRUrh");

var $ktIeN = parcelRequire("ktIeN");
/**
     * Clone native types.
     */ function $832da0041740f7b0$var$clone(val) {
    switch($kL9PR(val)){
        case "Object":
            return $832da0041740f7b0$var$cloneObject(val);
        case "Array":
            return $832da0041740f7b0$var$cloneArray(val);
        case "RegExp":
            return $832da0041740f7b0$var$cloneRegExp(val);
        case "Date":
            return $832da0041740f7b0$var$cloneDate(val);
        default:
            return val;
    }
}
function $832da0041740f7b0$var$cloneObject(source) {
    if ($bRUrh(source)) return $ktIeN({}, source);
    else return source;
}
function $832da0041740f7b0$var$cloneRegExp(r) {
    var flags = "";
    flags += r.multiline ? "m" : "";
    flags += r.global ? "g" : "";
    flags += r.ignoreCase ? "i" : "";
    return new RegExp(r.source, flags);
}
function $832da0041740f7b0$var$cloneDate(date) {
    return new Date(+date);
}
function $832da0041740f7b0$var$cloneArray(arr) {
    return arr.slice();
}
module.exports = $832da0041740f7b0$var$clone;

});
parcelRegister("ktIeN", function(module, exports) {

var $iM0eS = parcelRequire("iM0eS");
/**
    * Combine properties from all the objects into first one.
    * - This method affects target object in place, if you want to create a new Object pass an empty object as first param.
    * @param {object} target    Target Object
    * @param {...object} objects    Objects to be combined (0...n objects).
    * @return {object} Target Object.
    */ function $ee88d4c3c912ab9c$var$mixIn(target, objects) {
    var i = 0, n = arguments.length, obj;
    while(++i < n){
        obj = arguments[i];
        if (obj != null) $iM0eS(obj, $ee88d4c3c912ab9c$var$copyProp, target);
    }
    return target;
}
function $ee88d4c3c912ab9c$var$copyProp(val, key) {
    this[key] = val;
}
module.exports = $ee88d4c3c912ab9c$var$mixIn;

});




parcelRegister("1lQ8N", function(module, exports) {

var $eB2yj = parcelRequire("eB2yj");

var $bvtXg = parcelRequire("bvtXg");
/**
     * Returns minimum value inside object.
     */ function $0fc032b1608ff44b$var$min(obj, iterator) {
    return $eB2yj($bvtXg(obj), iterator);
}
module.exports = $0fc032b1608ff44b$var$min;

});
parcelRegister("eB2yj", function(module, exports) {

var $6GTbI = parcelRequire("6GTbI");
/**
     * Return minimum value inside array
     */ function $aa06804036c0c57b$var$min(arr, iterator, thisObj) {
    if (arr == null || !arr.length) return -Infinity;
    else if (arr.length && !iterator) return Math.min.apply(Math, arr);
    else {
        iterator = $6GTbI(iterator, thisObj);
        var result, compare = Infinity, value, temp;
        var i = -1, len = arr.length;
        while(++i < len){
            value = arr[i];
            temp = iterator(value, i, arr);
            if (temp < compare) {
                compare = temp;
                result = value;
            }
        }
        return result;
    }
}
module.exports = $aa06804036c0c57b$var$min;

});


parcelRegister("cbjL9", function(module, exports) {

var $hfYey = parcelRequire("hfYey");
/**
     * Create nested object if non-existent
     */ function $8de5d6ec773fdba9$var$namespace(obj, path) {
    if (!path) return obj;
    $hfYey(path.split("."), function(key) {
        if (!obj[key]) obj[key] = {};
        obj = obj[key];
    });
    return obj;
}
module.exports = $8de5d6ec773fdba9$var$namespace;

});

parcelRegister("7kvLs", function(module, exports) {

var $jI5R9 = parcelRequire("jI5R9");

var $azWLy = parcelRequire("azWLy");
/**
     * Return a copy of the object, filtered to only contain properties except the blacklisted keys.
     */ function $55630a7170f4633b$var$omit(obj, var_keys) {
    var keys = typeof arguments[1] !== "string" ? arguments[1] : $jI5R9(arguments, 1), out = {};
    for(var property in obj)if (obj.hasOwnProperty(property) && !$azWLy(keys, property)) out[property] = obj[property];
    return out;
}
module.exports = $55630a7170f4633b$var$omit;

});
parcelRegister("azWLy", function(module, exports) {

var $lprRZ = parcelRequire("lprRZ");
/**
     * If array contains values.
     */ function $7b3ac1fd48579762$var$contains(arr, val) {
    return $lprRZ(arr, val) !== -1;
}
module.exports = $7b3ac1fd48579762$var$contains;

});
parcelRegister("lprRZ", function(module, exports) {
/**
     * Array.indexOf
     */ function $f9618d22cbaf3cd9$var$indexOf(arr, item, fromIndex) {
    fromIndex = fromIndex || 0;
    if (arr == null) return -1;
    var len = arr.length, i = fromIndex < 0 ? len + fromIndex : fromIndex;
    while(i < len){
        // we iterate over sparse items since there is no way to make it
        // work properly on IE 7-8. see #64
        if (arr[i] === item) return i;
        i++;
    }
    return -1;
}
module.exports = $f9618d22cbaf3cd9$var$indexOf;

});



parcelRegister("hQ3Tl", function(module, exports) {

var $jI5R9 = parcelRequire("jI5R9");
/**
     * Return a copy of the object, filtered to only have values for the whitelisted keys.
     */ function $cfca4fc807a46439$var$pick(obj, var_keys) {
    var keys = typeof arguments[1] !== "string" ? arguments[1] : $jI5R9(arguments, 1), out = {}, i = 0, key;
    while(key = keys[i++])out[key] = obj[key];
    return out;
}
module.exports = $cfca4fc807a46439$var$pick;

});

parcelRegister("2ThyT", function(module, exports) {

var $bLZ1y = parcelRequire("bLZ1y");

var $8Cpai = parcelRequire("8Cpai");
/**
     * Extract a list of property values.
     */ function $21ae573f8ce8dedf$var$pluck(obj, propName) {
    return $bLZ1y(obj, $8Cpai(propName));
}
module.exports = $21ae573f8ce8dedf$var$pluck;

});

parcelRegister("kcv07", function(module, exports) {

var $iM0eS = parcelRequire("iM0eS");

var $eJQkt = parcelRequire("eJQkt");
/**
     * Object reduce
     */ function $eb4cf9c7ca749753$var$reduce(obj, callback, memo, thisObj) {
    var initial = arguments.length > 2;
    if (!$eJQkt(obj) && !initial) throw new Error("reduce of empty object with no initial value");
    $iM0eS(obj, function(value, key, list) {
        if (!initial) {
            memo = value;
            initial = true;
        } else memo = callback.call(thisObj, memo, value, key, list);
    });
    return memo;
}
module.exports = $eb4cf9c7ca749753$var$reduce;

});
parcelRegister("eJQkt", function(module, exports) {

var $iM0eS = parcelRequire("iM0eS");
/**
     * Get object size
     */ function $abaddc29d47a713e$var$size(obj) {
    var count = 0;
    $iM0eS(obj, function() {
        count++;
    });
    return count;
}
module.exports = $abaddc29d47a713e$var$size;

});


parcelRegister("8yQYI", function(module, exports) {

var $eDZys = parcelRequire("eDZys");

var $6GTbI = parcelRequire("6GTbI");
/**
     * Object reject
     */ function $63ba981d0a07d274$var$reject(obj, callback, thisObj) {
    callback = $6GTbI(callback, thisObj);
    return $eDZys(obj, function(value, index, obj) {
        return !callback(value, index, obj);
    }, thisObj);
}
module.exports = $63ba981d0a07d274$var$reject;

});

parcelRegister("D2Tng", function(module, exports) {

var $1iSKQ = parcelRequire("1iSKQ");
function $0755e2f3404e8c46$var$result(obj, prop) {
    var property = obj[prop];
    if (property === undefined) return;
    return $1iSKQ(property) ? property.call(obj) : property;
}
module.exports = $0755e2f3404e8c46$var$result;

});
parcelRegister("1iSKQ", function(module, exports) {

var $2LcrG = parcelRequire("2LcrG");
/**
     */ function $0f31f200b94f33e1$var$isFunction(val) {
    return $2LcrG(val, "Function");
}
module.exports = $0f31f200b94f33e1$var$isFunction;

});


parcelRegister("gxlVN", function(module, exports) {

var $cbjL9 = parcelRequire("cbjL9");
/**
     * set "nested" object property
     */ function $c0a0bd7f77467a84$var$set(obj, prop, val) {
    var parts = /^(.+)\.(.+)$/.exec(prop);
    if (parts) $cbjL9(obj, parts[1])[parts[2]] = val;
    else obj[prop] = val;
}
module.exports = $c0a0bd7f77467a84$var$set;

});

parcelRegister("4ec3D", function(module, exports) {

var $lmBlA = parcelRequire("lmBlA");
/**
     * Unset object property.
     */ function $3141d29e4f06e60f$var$unset(obj, prop) {
    if ($lmBlA(obj, prop)) {
        var parts = prop.split("."), last = parts.pop();
        while(prop = parts.shift())obj = obj[prop];
        return delete obj[last];
    } else // if property doesn't exist treat as deleted
    return true;
}
module.exports = $3141d29e4f06e60f$var$unset;

});



parcelRegister("kYn2N", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
var $f44b49557ff13354$var$_Math = Math;
var $f44b49557ff13354$var$pow = $f44b49557ff13354$var$_Math.pow;
var $f44b49557ff13354$var$sign = $f44b49557ff13354$var$_Math.sign;
var $f44b49557ff13354$var$abs = $f44b49557ff13354$var$_Math.abs;
var $f44b49557ff13354$var$sRgbGamma = {
    decode: function decode(v) {
        return v <= 0.04045 ? v / 12.92 : $f44b49557ff13354$var$pow((v + 0.055) / 1.055, 2.4);
    },
    encode: function encode(v) {
        return v <= 0.0031308 ? 12.92 * v : 1.055 * $f44b49557ff13354$var$pow(v, 1 / 2.4) - 0.055;
    }
};
var $f44b49557ff13354$var$proPhotoGamma = {
    encode: function encode(v) {
        return v < 0.001953125 ? 16 * v : $f44b49557ff13354$var$pow(v, 1 / 1.8);
    },
    decode: function decode(v) {
        return v < 0.03125 ? v / 16 : $f44b49557ff13354$var$pow(v, 1.8);
    }
};
function $f44b49557ff13354$var$simpleGamma(g) {
    return {
        decode: function decode(v) {
            return $f44b49557ff13354$var$sign(v) * $f44b49557ff13354$var$pow($f44b49557ff13354$var$abs(v), g);
        },
        encode: function encode(v) {
            return $f44b49557ff13354$var$sign(v) * $f44b49557ff13354$var$pow($f44b49557ff13354$var$abs(v), 1 / g);
        }
    };
}
var $f44b49557ff13354$var$workspaces = {
    "sRGB": {
        r: {
            x: 0.64,
            y: 0.33
        },
        g: {
            x: 0.30,
            y: 0.60
        },
        b: {
            x: 0.15,
            y: 0.06
        },
        gamma: $f44b49557ff13354$var$sRgbGamma
    },
    "Adobe RGB": {
        r: {
            x: 0.64,
            y: 0.33
        },
        g: {
            x: 0.21,
            y: 0.71
        },
        b: {
            x: 0.15,
            y: 0.06
        },
        gamma: $f44b49557ff13354$var$simpleGamma(2.2)
    },
    "Wide Gamut RGB": {
        r: {
            x: 0.7347,
            y: 0.2653
        },
        g: {
            x: 0.1152,
            y: 0.8264
        },
        b: {
            x: 0.1566,
            y: 0.0177
        },
        gamma: $f44b49557ff13354$var$simpleGamma(563 / 256)
    },
    "ProPhoto RGB": {
        r: {
            x: 0.7347,
            y: 0.2653
        },
        g: {
            x: 0.1596,
            y: 0.8404
        },
        b: {
            x: 0.0366,
            y: 0.0001
        },
        gamma: $f44b49557ff13354$var$proPhotoGamma
    }
};
module.exports.default = $f44b49557ff13354$var$workspaces;
module.exports = module.exports["default"];

});

parcelRegister("4vCPq", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
// 3x3 matrices operations
function $34882d31579aa7fc$var$transpose(M) {
    return [
        [
            M[0][0],
            M[1][0],
            M[2][0]
        ],
        [
            M[0][1],
            M[1][1],
            M[2][1]
        ],
        [
            M[0][2],
            M[1][2],
            M[2][2]
        ]
    ];
}
function $34882d31579aa7fc$var$determinant(M) {
    return M[0][0] * (M[2][2] * M[1][1] - M[2][1] * M[1][2]) + M[1][0] * (M[2][1] * M[0][2] - M[2][2] * M[0][1]) + M[2][0] * (M[1][2] * M[0][1] - M[1][1] * M[0][2]);
}
function $34882d31579aa7fc$var$inverse(M) {
    var c = 1 / $34882d31579aa7fc$var$determinant(M);
    return [
        [
            (M[2][2] * M[1][1] - M[2][1] * M[1][2]) * c,
            (M[2][1] * M[0][2] - M[2][2] * M[0][1]) * c,
            (M[1][2] * M[0][1] - M[1][1] * M[0][2]) * c
        ],
        [
            (M[2][0] * M[1][2] - M[2][2] * M[1][0]) * c,
            (M[2][2] * M[0][0] - M[2][0] * M[0][2]) * c,
            (M[1][0] * M[0][2] - M[1][2] * M[0][0]) * c
        ],
        [
            (M[2][1] * M[1][0] - M[2][0] * M[1][1]) * c,
            (M[2][0] * M[0][1] - M[2][1] * M[0][0]) * c,
            (M[1][1] * M[0][0] - M[1][0] * M[0][1]) * c
        ]
    ];
}
function $34882d31579aa7fc$var$multiply(M, v) {
    return [
        M[0][0] * v[0] + M[0][1] * v[1] + M[0][2] * v[2],
        M[1][0] * v[0] + M[1][1] * v[1] + M[1][2] * v[2],
        M[2][0] * v[0] + M[2][1] * v[1] + M[2][2] * v[2]
    ];
}
function $34882d31579aa7fc$var$scalar(M, v) {
    return [
        [
            M[0][0] * v[0],
            M[0][1] * v[1],
            M[0][2] * v[2]
        ],
        [
            M[1][0] * v[0],
            M[1][1] * v[1],
            M[1][2] * v[2]
        ],
        [
            M[2][0] * v[0],
            M[2][1] * v[1],
            M[2][2] * v[2]
        ]
    ];
}
function $34882d31579aa7fc$var$product(M, N) {
    return [
        [
            M[0][0] * N[0][0] + M[0][1] * N[1][0] + M[0][2] * N[2][0],
            M[0][0] * N[0][1] + M[0][1] * N[1][1] + M[0][2] * N[2][1],
            M[0][0] * N[0][2] + M[0][1] * N[1][2] + M[0][2] * N[2][2]
        ],
        [
            M[1][0] * N[0][0] + M[1][1] * N[1][0] + M[1][2] * N[2][0],
            M[1][0] * N[0][1] + M[1][1] * N[1][1] + M[1][2] * N[2][1],
            M[1][0] * N[0][2] + M[1][1] * N[1][2] + M[1][2] * N[2][2]
        ],
        [
            M[2][0] * N[0][0] + M[2][1] * N[1][0] + M[2][2] * N[2][0],
            M[2][0] * N[0][1] + M[2][1] * N[1][1] + M[2][2] * N[2][1],
            M[2][0] * N[0][2] + M[2][1] * N[1][2] + M[2][2] * N[2][2]
        ]
    ];
}
module.exports.transpose = $34882d31579aa7fc$var$transpose;
module.exports.determinant = $34882d31579aa7fc$var$determinant;
module.exports.inverse = $34882d31579aa7fc$var$inverse;
module.exports.multiply = $34882d31579aa7fc$var$multiply;
module.exports.scalar = $34882d31579aa7fc$var$scalar;
module.exports.product = $34882d31579aa7fc$var$product;

});

parcelRegister("kdyuF", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
var $eb7fc744935311fd$var$_Math = Math;
var $eb7fc744935311fd$var$PI = $eb7fc744935311fd$var$_Math.PI;
function $eb7fc744935311fd$var$fromRadian(r) {
    var d = r * 180 / $eb7fc744935311fd$var$PI;
    while(d < 0)d += 360;
    while(d > 360)d -= 360;
    return d;
}
function $eb7fc744935311fd$var$toRadian(d) {
    var r = $eb7fc744935311fd$var$PI * d / 180;
    while(r < 0)r += 2 * $eb7fc744935311fd$var$PI;
    while(r > 2 * $eb7fc744935311fd$var$PI)r -= 2 * $eb7fc744935311fd$var$PI;
    return r;
}
module.exports.fromRadian = $eb7fc744935311fd$var$fromRadian;
module.exports.toRadian = $eb7fc744935311fd$var$toRadian;

});

parcelRegister("3H1fa", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
var $2b065a3b8aa23173$var$_Math = Math;
var $2b065a3b8aa23173$var$round = $2b065a3b8aa23173$var$_Math.round;
function $2b065a3b8aa23173$var$fromHex(hex) {
    if (hex[0] == "#") hex = hex.slice(1);
    if (hex.length < 6) hex = hex.split("").map(function(v) {
        return v + v;
    }).join("");
    return hex.match(/../g).map(function(v) {
        return parseInt(v, 16) / 255;
    });
}
function $2b065a3b8aa23173$var$toHex(RGB) {
    var hex = RGB.map(function(v) {
        v = $2b065a3b8aa23173$var$round(255 * v).toString(16);
        if (v.length < 2) v = "0" + v;
        return v;
    }).join("");
    return "#" + hex;
}
module.exports.fromHex = $2b065a3b8aa23173$var$fromHex;
module.exports.toHex = $2b065a3b8aa23173$var$toHex;

});

parcelRegister("1yH5W", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $4vCPq = parcelRequire("4vCPq");
var $122a652513ccdee9$var$matrix = $122a652513ccdee9$var$_interopRequireWildcard($4vCPq);

var $evZLl = parcelRequire("evZLl");
var $122a652513ccdee9$var$_illuminant2 = $122a652513ccdee9$var$_interopRequireDefault($evZLl);

var $kYn2N = parcelRequire("kYn2N");
var $122a652513ccdee9$var$_workspace2 = $122a652513ccdee9$var$_interopRequireDefault($kYn2N);
function $122a652513ccdee9$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function $122a652513ccdee9$var$_interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj.default = obj;
        return newObj;
    }
}
// http://www.brucelindbloom.com/Eqn_RGB_XYZ_Matrix.html
function $122a652513ccdee9$var$Converter() {
    var rgbSpace = arguments.length <= 0 || arguments[0] === undefined ? $122a652513ccdee9$var$_workspace2.default.sRGB : arguments[0];
    var whitePoint = arguments.length <= 1 || arguments[1] === undefined ? $122a652513ccdee9$var$_illuminant2.default.D65 : arguments[1];
    var primaries = [
        rgbSpace.r,
        rgbSpace.g,
        rgbSpace.b
    ];
    var M_P = $122a652513ccdee9$var$matrix.transpose(primaries.map(function(v) {
        var X = v.x / v.y, Y = 1, Z = (1 - v.x - v.y) / v.y;
        return [
            X,
            Y,
            Z
        ];
    }));
    var gamma = rgbSpace.gamma, M_S = $122a652513ccdee9$var$matrix.multiply($122a652513ccdee9$var$matrix.inverse(M_P), whitePoint), M_RGB_XYZ = $122a652513ccdee9$var$matrix.scalar(M_P, M_S), M_XYZ_RGB = $122a652513ccdee9$var$matrix.inverse(M_RGB_XYZ);
    return {
        fromRgb: function fromRgb(RGB) {
            return $122a652513ccdee9$var$matrix.multiply(M_RGB_XYZ, RGB.map(gamma.decode));
        },
        toRgb: function toRgb(XYZ) {
            return $122a652513ccdee9$var$matrix.multiply(M_XYZ_RGB, XYZ).map(gamma.encode);
        }
    };
}
module.exports.default = $122a652513ccdee9$var$Converter;
module.exports = module.exports["default"];

});


parcelRegister("9uue3", function(module, exports) {

var $3XIkW = parcelRequire("3XIkW");

var $d12SR = parcelRequire("d12SR");

var $9DHKR = parcelRequire("9DHKR");

var $515Sl = parcelRequire("515Sl");

var $9WvCR = parcelRequire("9WvCR");
module.exports = {
    gamut: $d12SR,
    cfs: $3XIkW.cfs,
    lerp: $3XIkW.lerp,
    cam: $9DHKR,
    ucs: $515Sl,
    hq: $9WvCR
};

});
parcelRegister("3XIkW", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.cfs = module.exports.distance = module.exports.lerp = module.exports.corLerp = undefined;

var $a9UJU = parcelRequire("a9UJU");
function $2e29462aec5cbd7b$var$_defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $2e29462aec5cbd7b$var$_toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
        return arr2;
    } else return Array.from(arr);
}
var $2e29462aec5cbd7b$var$_Math = Math;
var $2e29462aec5cbd7b$var$abs = $2e29462aec5cbd7b$var$_Math.abs;
var $2e29462aec5cbd7b$var$pow = $2e29462aec5cbd7b$var$_Math.pow;
var $2e29462aec5cbd7b$var$sqrt = $2e29462aec5cbd7b$var$_Math.sqrt;
var $2e29462aec5cbd7b$var$hueMax = {
    h: 360,
    H: 400
};
function $2e29462aec5cbd7b$var$corLerp(a, b, t, cor) {
    var m = $2e29462aec5cbd7b$var$hueMax[cor];
    if (m) {
        var d = $2e29462aec5cbd7b$var$abs(a - b);
        if (d > m / 2) {
            if (a > b) b += m;
            else a += m;
        }
    }
    return ((1 - t) * a + t * b) % (m || Infinity);
}
function $2e29462aec5cbd7b$var$lerp(start, end, t) {
    var CAM = {};
    for(var cor in start)CAM[cor] = $2e29462aec5cbd7b$var$corLerp(start[cor], end[cor], t, cor);
    return CAM;
}
function $2e29462aec5cbd7b$var$distance(start, end) {
    var d = 0;
    for(var cor in start)d += $2e29462aec5cbd7b$var$pow(start[cor] - end[cor], 2);
    return $2e29462aec5cbd7b$var$sqrt(d);
}
function $2e29462aec5cbd7b$var$cfs(str) {
    return $a9UJU.merge.apply(undefined, $2e29462aec5cbd7b$var$_toConsumableArray(str.split("").map(function(v) {
        return $2e29462aec5cbd7b$var$_defineProperty({}, v, true);
    })));
}
module.exports.corLerp = $2e29462aec5cbd7b$var$corLerp;
module.exports.lerp = $2e29462aec5cbd7b$var$lerp;
module.exports.distance = $2e29462aec5cbd7b$var$distance;
module.exports.cfs = $2e29462aec5cbd7b$var$cfs;

});

parcelRegister("d12SR", function(module, exports) {
"use strict";
var $979d9b0753877940$var$_slicedToArray = function() {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    return function(arr, i) {
        if (Array.isArray(arr)) return arr;
        else if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
        else throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $83usW = parcelRequire("83usW");

var $3XIkW = parcelRequire("3XIkW");
function $979d9b0753877940$var$Gamut(xyz, cam) {
    var epsilon = arguments.length <= 2 || arguments[2] === undefined ? 1e-6 : arguments[2];
    var ZERO = -epsilon;
    var ONE = 1 + epsilon;
    var _Math = Math;
    var min = _Math.min;
    var max = _Math.max;
    var _map = [
        "000",
        "fff"
    ].map(function(hex) {
        return cam.fromXyz(xyz.fromRgb($83usW.rgb.fromHex(hex)));
    });
    var _map2 = $979d9b0753877940$var$_slicedToArray(_map, 2);
    var camBlack = _map2[0];
    var camWhite = _map2[1];
    function contains(CAM) {
        var RGB = xyz.toRgb(cam.toXyz(CAM)), isInside = RGB.map(function(v) {
            return v >= ZERO && v <= ONE;
        }).reduce(function(a, b) {
            return a && b;
        }, true);
        return [
            isInside,
            RGB
        ];
    }
    function limit(camIn, camOut) {
        var prec = arguments.length <= 2 || arguments[2] === undefined ? 1e-3 : arguments[2];
        while((0, $3XIkW.distance)(camIn, camOut) > prec){
            var camMid = (0, $3XIkW.lerp)(camIn, camOut, 0.5);
            var _contains = contains(camMid);
            var _contains2 = $979d9b0753877940$var$_slicedToArray(_contains, 1);
            var isInside = _contains2[0];
            if (isInside) camIn = camMid;
            else camOut = camMid;
        }
        return camIn;
    }
    function spine(t) {
        return (0, $3XIkW.lerp)(camBlack, camWhite, t);
    }
    function crop(RGB) {
        return RGB.map(function(v) {
            return max(ZERO, min(ONE, v));
        });
    }
    return {
        contains: contains,
        limit: limit,
        spine: spine,
        crop: crop
    };
}
module.exports.default = $979d9b0753877940$var$Gamut;
module.exports = module.exports["default"];

});

parcelRegister("9DHKR", function(module, exports) {
"use strict";
var $7049b25e60c0691e$var$_slicedToArray = function() {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    return function(arr, i) {
        if (Array.isArray(arr)) return arr;
        else if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
        else throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $83usW = parcelRequire("83usW");

var $9WvCR = parcelRequire("9WvCR");
var $7049b25e60c0691e$var$hq = $7049b25e60c0691e$var$_interopRequireWildcard($9WvCR);

var $3XIkW = parcelRequire("3XIkW");

var $a9UJU = parcelRequire("a9UJU");
function $7049b25e60c0691e$var$_interopRequireWildcard(obj) {
    if (obj && obj.__esModule) return obj;
    else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
        newObj.default = obj;
        return newObj;
    }
}
var $7049b25e60c0691e$var$_Math = Math;
var $7049b25e60c0691e$var$pow = $7049b25e60c0691e$var$_Math.pow;
var $7049b25e60c0691e$var$sqrt = $7049b25e60c0691e$var$_Math.sqrt;
var $7049b25e60c0691e$var$exp = $7049b25e60c0691e$var$_Math.exp;
var $7049b25e60c0691e$var$abs = $7049b25e60c0691e$var$_Math.abs;
var $7049b25e60c0691e$var$sign = $7049b25e60c0691e$var$_Math.sign;
var $7049b25e60c0691e$var$_Math2 = Math;
var $7049b25e60c0691e$var$sin = $7049b25e60c0691e$var$_Math2.sin;
var $7049b25e60c0691e$var$cos = $7049b25e60c0691e$var$_Math2.cos;
var $7049b25e60c0691e$var$atan2 = $7049b25e60c0691e$var$_Math2.atan2;
var $7049b25e60c0691e$var$surrounds = {
    average: {
        F: 1.0,
        c: 0.69,
        N_c: 1.0
    },
    dim: {
        F: 0.9,
        c: 0.59,
        N_c: 0.9
    },
    dark: {
        F: 0.8,
        c: 0.535,
        N_c: 0.8
    }
};
var $7049b25e60c0691e$var$M_CAT02 = [
    [
        0.7328,
        0.4296,
        -0.1624
    ],
    [
        -0.7036,
        1.6975,
        0.0061
    ],
    [
        0.0030,
        0.0136,
        0.9834
    ]
];
var $7049b25e60c0691e$var$M_HPE = [
    [
        0.38971,
        0.68898,
        -0.07868
    ],
    [
        -0.22981,
        1.18340,
        0.04641
    ],
    [
        0.00000,
        0.00000,
        1.00000
    ]
];
var $7049b25e60c0691e$var$XYZ_to_CAT02 = $7049b25e60c0691e$var$M_CAT02, $7049b25e60c0691e$var$CAT02_to_XYZ = $83usW.matrix.inverse($7049b25e60c0691e$var$M_CAT02), $7049b25e60c0691e$var$CAT02_to_HPE = $83usW.matrix.product($7049b25e60c0691e$var$M_HPE, $83usW.matrix.inverse($7049b25e60c0691e$var$M_CAT02)), $7049b25e60c0691e$var$HPE_to_CAT02 = $83usW.matrix.product($7049b25e60c0691e$var$M_CAT02, $83usW.matrix.inverse($7049b25e60c0691e$var$M_HPE));
var $7049b25e60c0691e$var$defaultViewingConditions = {
    whitePoint: $83usW.illuminant.D65,
    adaptingLuminance: 40,
    backgroundLuminance: 20,
    surroundType: "average",
    discounting: false
};
var $7049b25e60c0691e$var$defaultCorrelates = (0, $3XIkW.cfs)("QJMCshH"), $7049b25e60c0691e$var$vitalCorrelates = (0, $3XIkW.cfs)("JCh");
// CIECAM02 and Its Recent Developments - Ming Ronnier Luo and Changjun Li
function $7049b25e60c0691e$var$Converter() {
    var viewingConditions = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var correlates = arguments.length <= 1 || arguments[1] === undefined ? $7049b25e60c0691e$var$defaultCorrelates : arguments[1];
    viewingConditions = (0, $a9UJU.merge)($7049b25e60c0691e$var$defaultViewingConditions, viewingConditions);
    var XYZ_w = viewingConditions.whitePoint;
    var L_A = viewingConditions.adaptingLuminance;
    var Y_b = viewingConditions.backgroundLuminance;
    var _surrounds$viewingCon = $7049b25e60c0691e$var$surrounds[viewingConditions.surroundType];
    var F = _surrounds$viewingCon.F;
    var c = _surrounds$viewingCon.c;
    var N_c = _surrounds$viewingCon.N_c;
    var Y_w = XYZ_w[1];
    var k = 1 / (5 * L_A + 1), F_L = 0.2 * $7049b25e60c0691e$var$pow(k, 4) * 5 * L_A + 0.1 * $7049b25e60c0691e$var$pow(1 - $7049b25e60c0691e$var$pow(k, 4), 2) * $7049b25e60c0691e$var$pow(5 * L_A, 1 / 3), n = Y_b / Y_w, N_bb = 0.725 * $7049b25e60c0691e$var$pow(1 / n, 0.2), N_cb = N_bb, z = 1.48 + $7049b25e60c0691e$var$sqrt(n), D = viewingConditions.discounting ? 1 : F * (1 - 1 / 3.6 * $7049b25e60c0691e$var$exp(-(L_A + 42) / 92));
    var RGB_w = $83usW.matrix.multiply($7049b25e60c0691e$var$M_CAT02, XYZ_w);
    var _RGB_w$map = RGB_w.map(function(v) {
        return D * Y_w / v + 1 - D;
    });
    var _RGB_w$map2 = $7049b25e60c0691e$var$_slicedToArray(_RGB_w$map, 3);
    var D_R = _RGB_w$map2[0];
    var D_G = _RGB_w$map2[1];
    var D_B = _RGB_w$map2[2];
    var RGB_cw = correspondingColors(XYZ_w);
    var RGB_aw = adaptedResponses(RGB_cw);
    var A_w = achromaticResponse(RGB_aw);
    function correspondingColors(XYZ) {
        var _matrix$multiply = $83usW.matrix.multiply($7049b25e60c0691e$var$XYZ_to_CAT02, XYZ);
        var _matrix$multiply2 = $7049b25e60c0691e$var$_slicedToArray(_matrix$multiply, 3);
        var R = _matrix$multiply2[0];
        var G = _matrix$multiply2[1];
        var B = _matrix$multiply2[2];
        return [
            D_R * R,
            D_G * G,
            D_B * B
        ];
    }
    function reverseCorrespondingColors(RGB_c) {
        var _RGB_c = $7049b25e60c0691e$var$_slicedToArray(RGB_c, 3);
        var R_c = _RGB_c[0];
        var G_c = _RGB_c[1];
        var B_c = _RGB_c[2];
        return $83usW.matrix.multiply($7049b25e60c0691e$var$CAT02_to_XYZ, [
            R_c / D_R,
            G_c / D_G,
            B_c / D_B
        ]);
    }
    function adaptedResponses(RGB_c) {
        return $83usW.matrix.multiply($7049b25e60c0691e$var$CAT02_to_HPE, RGB_c).map(function(v) {
            var x = $7049b25e60c0691e$var$pow(F_L * $7049b25e60c0691e$var$abs(v) / 100, 0.42);
            return $7049b25e60c0691e$var$sign(v) * 400 * x / (27.13 + x) + 0.1;
        });
    }
    function reverseAdaptedResponses(RGB_a) {
        return $83usW.matrix.multiply($7049b25e60c0691e$var$HPE_to_CAT02, RGB_a.map(function(v) {
            var x = v - 0.1;
            return $7049b25e60c0691e$var$sign(x) * 100 / F_L * $7049b25e60c0691e$var$pow(27.13 * $7049b25e60c0691e$var$abs(x) / (400 - $7049b25e60c0691e$var$abs(x)), 1 / 0.42);
        }));
    }
    function achromaticResponse(RGB_a) {
        var _RGB_a = $7049b25e60c0691e$var$_slicedToArray(RGB_a, 3);
        var R_a = _RGB_a[0];
        var G_a = _RGB_a[1];
        var B_a = _RGB_a[2];
        return (R_a * 2 + G_a + B_a / 20 - 0.305) * N_bb;
    }
    function brightness(J) {
        return 4 / c * $7049b25e60c0691e$var$sqrt(J / 100) * (A_w + 4) * $7049b25e60c0691e$var$pow(F_L, 0.25);
    }
    function lightness(Q) {
        return 6.25 * $7049b25e60c0691e$var$pow(c * Q / ((A_w + 4) * $7049b25e60c0691e$var$pow(F_L, 0.25)), 2);
    }
    function colorfulness(C) {
        return C * $7049b25e60c0691e$var$pow(F_L, 0.25);
    }
    function chromaFromSaturationBrightness(s, Q) {
        return $7049b25e60c0691e$var$pow(s / 100, 2) * Q / $7049b25e60c0691e$var$pow(F_L, 0.25);
    }
    function chromaFromColorfulness(M) {
        return M / $7049b25e60c0691e$var$pow(F_L, 0.25);
    }
    function saturation(M, Q) {
        return 100 * $7049b25e60c0691e$var$sqrt(M / Q);
    }
    function fillOut(correlates, inputs) {
        var Q = inputs.Q;
        var J = inputs.J;
        var M = inputs.M;
        var C = inputs.C;
        var s = inputs.s;
        var h = inputs.h;
        var H = inputs.H;
        var outputs = {};
        if (correlates.J) outputs.J = isNaN(J) ? lightness(Q) : J;
        if (correlates.C) {
            if (isNaN(C)) {
                if (isNaN(M)) {
                    Q = isNaN(Q) ? brightness(J) : Q;
                    outputs.C = chromaFromSaturationBrightness(s, Q);
                } else outputs.C = chromaFromColorfulness(M);
            } else outputs.C = inputs.C;
        }
        if (correlates.h) outputs.h = isNaN(h) ? $7049b25e60c0691e$var$hq.toHue(H) : h;
        if (correlates.Q) outputs.Q = isNaN(Q) ? brightness(J) : Q;
        if (correlates.M) outputs.M = isNaN(M) ? colorfulness(C) : M;
        if (correlates.s) {
            if (isNaN(s)) {
                Q = isNaN(Q) ? brightness(J) : Q;
                M = isNaN(M) ? colorfulness(C) : M;
                outputs.s = saturation(M, Q);
            } else outputs.s = s;
        }
        if (correlates.H) outputs.H = isNaN(H) ? $7049b25e60c0691e$var$hq.fromHue(h) : H;
        return outputs;
    }
    function fromXyz(XYZ) {
        var RGB_c = correspondingColors(XYZ);
        var RGB_a = adaptedResponses(RGB_c);
        var _RGB_a2 = $7049b25e60c0691e$var$_slicedToArray(RGB_a, 3);
        var R_a = _RGB_a2[0];
        var G_a = _RGB_a2[1];
        var B_a = _RGB_a2[2];
        var a = R_a - G_a * 12 / 11 + B_a / 11, b = (R_a + G_a - 2 * B_a) / 9, h_rad = $7049b25e60c0691e$var$atan2(b, a), h = $83usW.degree.fromRadian(h_rad), e_t = 1 / 4 * ($7049b25e60c0691e$var$cos(h_rad + 2) + 3.8), A = achromaticResponse(RGB_a), J = 100 * $7049b25e60c0691e$var$pow(A / A_w, c * z), t = 5e4 / 13 * N_c * N_cb * e_t * $7049b25e60c0691e$var$sqrt(a * a + b * b) / (R_a + G_a + 1.05 * B_a), C = $7049b25e60c0691e$var$pow(t, 0.9) * $7049b25e60c0691e$var$sqrt(J / 100) * $7049b25e60c0691e$var$pow(1.64 - $7049b25e60c0691e$var$pow(0.29, n), 0.73);
        return fillOut(correlates, {
            J: J,
            C: C,
            h: h
        });
    }
    function toXyz(CAM) {
        var _fillOut = fillOut($7049b25e60c0691e$var$vitalCorrelates, CAM);
        var J = _fillOut.J;
        var C = _fillOut.C;
        var h = _fillOut.h;
        var h_rad = $83usW.degree.toRadian(h);
        var t = $7049b25e60c0691e$var$pow(C / ($7049b25e60c0691e$var$sqrt(J / 100) * $7049b25e60c0691e$var$pow(1.64 - $7049b25e60c0691e$var$pow(0.29, n), 0.73)), 10 / 9);
        var e_t = 1 / 4 * ($7049b25e60c0691e$var$cos(h_rad + 2) + 3.8);
        var A = A_w * $7049b25e60c0691e$var$pow(J / 100, 1 / c / z);
        var p_1 = 5e4 / 13 * N_c * N_cb * e_t / t, p_2 = A / N_bb + 0.305, q_1 = p_2 * 61 / 20 * 460 / 1403, q_2 = 0.4782608695652174, q_3 = 4.714896650035638 - 27 / 1403;
        var sin_h = $7049b25e60c0691e$var$sin(h_rad), cos_h = $7049b25e60c0691e$var$cos(h_rad);
        var a, b;
        if (t === 0 || isNaN(t)) a = b = 0;
        else if ($7049b25e60c0691e$var$abs(sin_h) >= $7049b25e60c0691e$var$abs(cos_h)) {
            b = q_1 / (p_1 / sin_h + q_2 * cos_h / sin_h + q_3);
            a = b * cos_h / sin_h;
        } else {
            a = q_1 / (p_1 / cos_h + q_2 + q_3 * sin_h / cos_h);
            b = a * sin_h / cos_h;
        }
        var RGB_a = [
            20 / 61 * p_2 + 451 / 1403 * a + 288 / 1403 * b,
            20 / 61 * p_2 - 891 / 1403 * a - 261 / 1403 * b,
            20 / 61 * p_2 - 220 / 1403 * a - 6300 / 1403 * b
        ];
        var RGB_c = reverseAdaptedResponses(RGB_a), XYZ = reverseCorrespondingColors(RGB_c);
        return XYZ;
    }
    return {
        fromXyz: fromXyz,
        toXyz: toXyz,
        fillOut: fillOut
    };
}
module.exports.default = $7049b25e60c0691e$var$Converter;
module.exports = module.exports["default"];

});
parcelRegister("9WvCR", function(module, exports) {
"use strict";
var $73d210112cf434b2$var$_slicedToArray = function() {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
            for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"]) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    return function(arr, i) {
        if (Array.isArray(arr)) return arr;
        else if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
        else throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.toNotation = module.exports.fromNotation = module.exports.toHue = module.exports.fromHue = undefined;

var $3XIkW = parcelRequire("3XIkW");
var $73d210112cf434b2$var$_Math = Math;
var $73d210112cf434b2$var$floor = $73d210112cf434b2$var$_Math.floor;
var $73d210112cf434b2$var$uniqueHues = [
    {
        s: "R",
        h: 20.14,
        e: 0.8,
        H: 0
    },
    {
        s: "Y",
        h: 90.00,
        e: 0.7,
        H: 100
    },
    {
        s: "G",
        h: 164.25,
        e: 1.0,
        H: 200
    },
    {
        s: "B",
        h: 237.53,
        e: 1.2,
        H: 300
    },
    {
        s: "R",
        h: 380.14,
        e: 0.8,
        H: 400
    }
];
var $73d210112cf434b2$var$hueSymbols = $73d210112cf434b2$var$uniqueHues.map(function(v) {
    return v.s;
}).slice(0, -1).join("");
function $73d210112cf434b2$var$fromHue(h) {
    if (h < $73d210112cf434b2$var$uniqueHues[0].h) h += 360;
    var j = 0;
    while($73d210112cf434b2$var$uniqueHues[j + 1].h < h)j++;
    var d_j = (h - $73d210112cf434b2$var$uniqueHues[j].h) / $73d210112cf434b2$var$uniqueHues[j].e, d_k = ($73d210112cf434b2$var$uniqueHues[j + 1].h - h) / $73d210112cf434b2$var$uniqueHues[j + 1].e, H_j = $73d210112cf434b2$var$uniqueHues[j].H;
    return H_j + 100 * d_j / (d_j + d_k);
}
function $73d210112cf434b2$var$toHue(H) {
    var j = $73d210112cf434b2$var$floor(H / 100);
    var amt = H % 100;
    var _uniqueHues$slice = $73d210112cf434b2$var$uniqueHues.slice(j, j + 2);
    var _uniqueHues$slice2 = $73d210112cf434b2$var$_slicedToArray(_uniqueHues$slice, 2);
    var _uniqueHues$slice2$ = _uniqueHues$slice2[0];
    var e_j = _uniqueHues$slice2$.e;
    var h_j = _uniqueHues$slice2$.h;
    var _uniqueHues$slice2$2 = _uniqueHues$slice2[1];
    var e_k = _uniqueHues$slice2$2.e;
    var h_k = _uniqueHues$slice2$2.h;
    var h = (amt * (e_k * h_j - e_j * h_k) - 100 * h_j * e_k) / (amt * (e_k - e_j) - 100 * e_k);
    return h;
}
var $73d210112cf434b2$var$shortcuts = {
    O: "RY",
    S: "YG",
    T: "G25B",
    C: "GB",
    A: "B25G",
    V: "B25R",
    M: "BR",
    P: "R25B"
};
function $73d210112cf434b2$var$fromNotation(N) {
    var _N$match = N.match(/^([a-z])(?:(.+)?([a-z]))?$/i);
    var _N$match2 = $73d210112cf434b2$var$_slicedToArray(_N$match, 4);
    var H1 = _N$match2[1];
    var P = _N$match2[2];
    var H2 = _N$match2[3];
    if (H2 === undefined) H2 = H1;
    if (P === undefined) P = "50";
    var _map = [
        H1,
        H2
    ].map(function(v) {
        v = v.toUpperCase();
        var sc = $73d210112cf434b2$var$shortcuts[v];
        return sc ? $73d210112cf434b2$var$fromNotation(sc) : 100 * $73d210112cf434b2$var$hueSymbols.indexOf(v);
    });
    var _map2 = $73d210112cf434b2$var$_slicedToArray(_map, 2);
    H1 = _map2[0];
    H2 = _map2[1];
    P = parseFloat(P) / 100;
    return (0, $3XIkW.corLerp)(H1, H2, P, "H");
}
function $73d210112cf434b2$var$toNotation(H) {
    var i = $73d210112cf434b2$var$floor(H / 100), j = (i + 1) % $73d210112cf434b2$var$hueSymbols.length, p = H - i * 100;
    if (p > 50) {
        var _ref = [
            j,
            i
        ];
        i = _ref[0];
        j = _ref[1];
        p = 100 - p;
    }
    if (p < 1) return $73d210112cf434b2$var$hueSymbols[i];
    else return $73d210112cf434b2$var$hueSymbols[i] + p.toFixed() + $73d210112cf434b2$var$hueSymbols[j];
}
module.exports.fromHue = $73d210112cf434b2$var$fromHue;
module.exports.toHue = $73d210112cf434b2$var$toHue;
module.exports.fromNotation = $73d210112cf434b2$var$fromNotation;
module.exports.toNotation = $73d210112cf434b2$var$toNotation;

});


parcelRegister("515Sl", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $83usW = parcelRequire("83usW");
var $3a719a7a94dc4d99$var$_Math = Math;
var $3a719a7a94dc4d99$var$sqrt = $3a719a7a94dc4d99$var$_Math.sqrt;
var $3a719a7a94dc4d99$var$pow = $3a719a7a94dc4d99$var$_Math.pow;
var $3a719a7a94dc4d99$var$exp = $3a719a7a94dc4d99$var$_Math.exp;
var $3a719a7a94dc4d99$var$log = $3a719a7a94dc4d99$var$_Math.log;
var $3a719a7a94dc4d99$var$cos = $3a719a7a94dc4d99$var$_Math.cos;
var $3a719a7a94dc4d99$var$sin = $3a719a7a94dc4d99$var$_Math.sin;
var $3a719a7a94dc4d99$var$atan2 = $3a719a7a94dc4d99$var$_Math.atan2;
var $3a719a7a94dc4d99$var$uniformSpaces = {
    LCD: {
        K_L: 0.77,
        c_1: 0.007,
        c_2: 0.0053
    },
    SCD: {
        K_L: 1.24,
        c_1: 0.007,
        c_2: 0.0363
    },
    UCS: {
        K_L: 1.00,
        c_1: 0.007,
        c_2: 0.0228
    }
};
function $3a719a7a94dc4d99$var$Converter() {
    var name = arguments.length <= 0 || arguments[0] === undefined ? "UCS" : arguments[0];
    var _uniformSpaces$name = $3a719a7a94dc4d99$var$uniformSpaces[name];
    var K_L = _uniformSpaces$name.K_L;
    var c_1 = _uniformSpaces$name.c_1;
    var c_2 = _uniformSpaces$name.c_2;
    function fromCam(CAM) {
        var J = CAM.J;
        var M = CAM.M;
        var h = CAM.h;
        var h_rad = $83usW.degree.toRadian(h);
        var J_p = (1 + 100 * c_1) * J / (1 + c_1 * J);
        var M_p = 1 / c_2 * $3a719a7a94dc4d99$var$log(1 + c_2 * M);
        var a_p = M_p * $3a719a7a94dc4d99$var$cos(h_rad);
        var b_p = M_p * $3a719a7a94dc4d99$var$sin(h_rad);
        return {
            J_p: J_p,
            a_p: a_p,
            b_p: b_p
        };
    }
    function toCam(UCS) {
        var J_p = UCS.J_p;
        var a_p = UCS.a_p;
        var b_p = UCS.b_p;
        var J = -J_p / (c_1 * J_p - 100 * c_1 - 1);
        var M_p = $3a719a7a94dc4d99$var$sqrt($3a719a7a94dc4d99$var$pow(a_p, 2) + $3a719a7a94dc4d99$var$pow(b_p, 2));
        var M = ($3a719a7a94dc4d99$var$exp(c_2 * M_p) - 1) / c_2;
        var h_rad = $3a719a7a94dc4d99$var$atan2(b_p, a_p);
        var h = $83usW.degree.fromRadian(h_rad);
        return {
            J: J,
            M: M,
            h: h
        };
    }
    function distance(UCS1, UCS2) {
        return $3a719a7a94dc4d99$var$sqrt($3a719a7a94dc4d99$var$pow((UCS1.J_p - UCS2.J_p) / K_L, 2) + $3a719a7a94dc4d99$var$pow(UCS1.a_p - UCS2.a_p, 2) + $3a719a7a94dc4d99$var$pow(UCS1.b_p - UCS2.b_p, 2));
    }
    return {
        fromCam: fromCam,
        toCam: toCam,
        distance: distance
    };
}
module.exports.default = $3a719a7a94dc4d99$var$Converter;
module.exports = module.exports["default"];

});



//# sourceMappingURL=tools.c107bc23.js.map
