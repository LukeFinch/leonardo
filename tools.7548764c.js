
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

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
parcelRegister("W2lsj", function(module, exports) {

$parcel$export(module.exports, "Color", () => (parcelRequire("g4Png")).Color);
$parcel$export(module.exports, "BackgroundColor", () => (parcelRequire("40Ygz")).BackgroundColor);
$parcel$export(module.exports, "Theme", () => (parcelRequire("1C2SD")).Theme);
$parcel$export(module.exports, "createScale", () => (parcelRequire("13qG5")).createScale);
$parcel$export(module.exports, "contrast", () => (parcelRequire("13qG5")).getContrast);
/*
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ 
var $oZyht = parcelRequire("oZyht");

var $bNybZ = parcelRequire("bNybZ");

var $13qG5 = parcelRequire("13qG5");

var $g4Png = parcelRequire("g4Png");

var $40Ygz = parcelRequire("40Ygz");

var $1C2SD = parcelRequire("1C2SD");
(0, $bNybZ.extendChroma)((0, (/*@__PURE__*/$parcel$interopDefault($oZyht))));

});
parcelRegister("bNybZ", function(module, exports) {

$parcel$export(module.exports, "extendChroma", () => $896ecb34056f05ba$export$531cbc729c539a3e);
/*
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ 
var $oZyht = parcelRequire("oZyht");

var $ieKdW = parcelRequire("ieKdW");

var $83usW = parcelRequire("83usW");

var $9uue3 = parcelRequire("9uue3");
const $896ecb34056f05ba$var$cam = (0, (/*@__PURE__*/$parcel$interopDefault($9uue3))).cam({
    whitePoint: (0, (/*@__PURE__*/$parcel$interopDefault($83usW))).illuminant.D65,
    adaptingLuminance: 40,
    backgroundLuminance: 20,
    surroundType: "average",
    discounting: false
}, (0, (/*@__PURE__*/$parcel$interopDefault($9uue3))).cfs("JCh"));
const $896ecb34056f05ba$var$xyz = (0, (/*@__PURE__*/$parcel$interopDefault($83usW))).xyz((0, (/*@__PURE__*/$parcel$interopDefault($83usW))).workspace.sRGB, (0, (/*@__PURE__*/$parcel$interopDefault($83usW))).illuminant.D65);
const $896ecb34056f05ba$var$jch2rgb = (jch)=>$896ecb34056f05ba$var$xyz.toRgb($896ecb34056f05ba$var$cam.toXyz({
        J: jch[0],
        C: jch[1],
        h: jch[2]
    }));
const $896ecb34056f05ba$var$rgb2jch = (rgb)=>{
    const jch = $896ecb34056f05ba$var$cam.fromXyz($896ecb34056f05ba$var$xyz.fromRgb(rgb));
    return [
        jch.J,
        jch.C,
        jch.h
    ];
};
const [$896ecb34056f05ba$var$jch2jab, $896ecb34056f05ba$var$jab2jch] = (()=>{
    const coefs = {
        k_l: 1,
        c1: 0.007,
        c2: 0.0228
    };
    const \u03C0 = Math.PI;
    const CIECAM02_la = 64 / \u03C0 / 5;
    const CIECAM02_k = 1 / (5 * CIECAM02_la + 1);
    const CIECAM02_fl = 0.2 * CIECAM02_k ** 4 * (5 * CIECAM02_la) + 0.1 * (1 - CIECAM02_k ** 4) ** 2 * (5 * CIECAM02_la) ** (1 / 3);
    return [
        (jch)=>{
            const [J, C, h] = jch;
            const M = C * CIECAM02_fl ** 0.25;
            let j = (1 + 100 * coefs.c1) * J / (1 + coefs.c1 * J);
            j /= coefs.k_l;
            const MPrime = 1 / coefs.c2 * Math.log(1.0 + coefs.c2 * M);
            const a = MPrime * Math.cos(h * (\u03C0 / 180));
            const b = MPrime * Math.sin(h * (\u03C0 / 180));
            return [
                j,
                a,
                b
            ];
        },
        (jab)=>{
            const [j, a, b] = jab;
            const newMPrime = Math.sqrt(a * a + b * b);
            const newM = (Math.exp(newMPrime * coefs.c2) - 1) / coefs.c2;
            const h = (180 / \u03C0 * Math.atan2(b, a) + 360) % 360;
            const C = newM / CIECAM02_fl ** 0.25;
            const J = j / (1 + coefs.c1 * (100 - j));
            return [
                J,
                C,
                h
            ];
        }
    ];
})();
const $896ecb34056f05ba$var$jab2rgb = (jab)=>$896ecb34056f05ba$var$jch2rgb($896ecb34056f05ba$var$jab2jch(jab));
const $896ecb34056f05ba$var$rgb2jab = (rgb)=>$896ecb34056f05ba$var$jch2jab($896ecb34056f05ba$var$rgb2jch(rgb));
const $896ecb34056f05ba$var$con = console;
// Usage:
// console.color('rebeccapurple');
$896ecb34056f05ba$var$con.color = (color, text = "")=>{
    const col = (0, (/*@__PURE__*/$parcel$interopDefault($oZyht)))(color);
    const l = col.luminance();
    $896ecb34056f05ba$var$con.log(`%c${color} ${text}`, `background-color: ${color};padding: 5px; border-radius: 5px; color: ${l > 0.5 ? "#000" : "#fff"}`);
};
// Usage:
// console.ramp(chroma.scale(['yellow', 'navy']).mode('hsluv'));
// console.ramp(scale, 3000); // if you need to specify the length of the scale
$896ecb34056f05ba$var$con.ramp = (scale, length = 1)=>{
    $896ecb34056f05ba$var$con.log("%c ", `font-size: 1px;line-height: 16px;background: ${(0, (/*@__PURE__*/$parcel$interopDefault($oZyht))).getCSSGradient(scale, length)};padding: 0 0 0 200px; border-radius: 2px;`);
};
const $896ecb34056f05ba$var$online = (x1, y1, x2, y2, x3, y3, \u03B5 = 0.1)=>{
    if (x1 === x2 || y1 === y2) return true;
    const m = (y2 - y1) / (x2 - x1);
    const x4 = (y3 + x3 / m - y1 + m * x1) / (m + 1 / m);
    const y4 = y3 + x3 / m - x4 / m;
    return (x3 - x4) ** 2 + (y3 - y4) ** 2 < \u03B5 ** 2;
};
const $896ecb34056f05ba$var$div = (\u0192, dot1, dot2, \u03B5)=>{
    const x3 = (dot1[0] + dot2[0]) / 2;
    const y3 = \u0192(x3);
    if ($896ecb34056f05ba$var$online(...dot1, ...dot2, x3, y3, \u03B5)) return null;
    return [
        x3,
        y3
    ];
};
const $896ecb34056f05ba$var$split = (\u0192, from, to, \u03B5 = 0.1)=>{
    const step = (to - from) / 10;
    const points = [];
    for(let i = from; i < to; i += step)points.push([
        i,
        \u0192(i)
    ]);
    points.push([
        to,
        \u0192(to)
    ]);
    for(let i = 0; i < points.length - 1; i++){
        const dot = $896ecb34056f05ba$var$div(\u0192, points[i], points[i + 1], \u03B5);
        if (dot) {
            points.splice(i + 1, 0, dot);
            i--;
        }
    }
    for(let i = 0; i < points.length - 2; i++)if ($896ecb34056f05ba$var$online(...points[i], ...points[i + 2], ...points[i + 1], \u03B5)) {
        points.splice(i + 1, 1);
        i--;
    }
    return points;
};
const $896ecb34056f05ba$var$round = (x, r = 4)=>Math.round(x * 10 ** r) / 10 ** r;
const $896ecb34056f05ba$var$getCSSGradient = (scale, length = 1, deg = 90, \u03B5 = 0.005)=>{
    const ptsr = $896ecb34056f05ba$var$split((x)=>scale(x).gl()[0], 0, length, \u03B5);
    const ptsg = $896ecb34056f05ba$var$split((x)=>scale(x).gl()[1], 0, length, \u03B5);
    const ptsb = $896ecb34056f05ba$var$split((x)=>scale(x).gl()[2], 0, length, \u03B5);
    const points = Array.from(new Set([
        ...ptsr.map((a)=>$896ecb34056f05ba$var$round(a[0])),
        ...ptsg.map((a)=>$896ecb34056f05ba$var$round(a[0])),
        ...ptsb.map((a)=>$896ecb34056f05ba$var$round(a[0]))
    ].sort((a, b)=>a - b)));
    return `linear-gradient(${deg}deg, ${points.map((x)=>`${scale(x).hex()} ${$896ecb34056f05ba$var$round(x * 100)}%`).join()});`;
};
const $896ecb34056f05ba$export$531cbc729c539a3e = (chroma)=>{
    // JCH
    chroma.Color.prototype.jch = function() {
        return $896ecb34056f05ba$var$rgb2jch(this._rgb.slice(0, 3).map((c)=>c / 255));
    };
    chroma.jch = (...args)=>new chroma.Color(...$896ecb34056f05ba$var$jch2rgb(args).map((c)=>Math.floor(c * 255)), "rgb");
    // JAB
    chroma.Color.prototype.jab = function() {
        return $896ecb34056f05ba$var$rgb2jab(this._rgb.slice(0, 3).map((c)=>c / 255));
    };
    chroma.jab = (...args)=>new chroma.Color(...$896ecb34056f05ba$var$jab2rgb(args).map((c)=>Math.floor(c * 255)), "rgb");
    // HSLuv
    chroma.Color.prototype.hsluv = function() {
        return (0, (/*@__PURE__*/$parcel$interopDefault($ieKdW))).rgbToHsluv(this._rgb.slice(0, 3).map((c)=>c / 255));
    };
    chroma.hsluv = (...args)=>new chroma.Color(...(0, (/*@__PURE__*/$parcel$interopDefault($ieKdW))).hsluvToRgb(args).map((c)=>Math.floor(c * 255)), "rgb");
    const oldInterpol = chroma.interpolate;
    const RGB2 = {
        jch: $896ecb34056f05ba$var$rgb2jch,
        jab: $896ecb34056f05ba$var$rgb2jab,
        hsluv: (0, (/*@__PURE__*/$parcel$interopDefault($ieKdW))).rgbToHsluv
    };
    const lerpH = (a, b, t)=>{
        const m = 360;
        const d = Math.abs(a - b);
        if (d > m / 2) {
            if (a > b) b += m;
            else a += m;
        }
        return ((1 - t) * a + t * b) % m;
    };
    chroma.interpolate = (col1, col2, f = 0.5, mode = "lrgb")=>{
        if (RGB2[mode]) {
            if (typeof col1 !== "object") col1 = new chroma.Color(col1);
            if (typeof col2 !== "object") col2 = new chroma.Color(col2);
            const xyz1 = RGB2[mode](col1.gl());
            const xyz2 = RGB2[mode](col2.gl());
            const grey1 = Number.isNaN(col1.hsl()[0]);
            const grey2 = Number.isNaN(col2.hsl()[0]);
            let X;
            let Y;
            let Z;
            switch(mode){
                case "hsluv":
                    if (xyz1[1] < 1e-10) xyz1[0] = xyz2[0];
                    if (xyz1[1] === 0) // black or white
                    xyz1[1] = xyz2[1];
                    if (xyz2[1] < 1e-10) xyz2[0] = xyz1[0];
                    if (xyz2[1] === 0) // black or white
                    xyz2[1] = xyz1[1];
                    X = lerpH(xyz1[0], xyz2[0], f);
                    Y = xyz1[1] + (xyz2[1] - xyz1[1]) * f;
                    Z = xyz1[2] + (xyz2[2] - xyz1[2]) * f;
                    break;
                case "jch":
                    if (grey1) xyz1[2] = xyz2[2];
                    if (grey2) xyz2[2] = xyz1[2];
                    X = xyz1[0] + (xyz2[0] - xyz1[0]) * f;
                    Y = xyz1[1] + (xyz2[1] - xyz1[1]) * f;
                    Z = lerpH(xyz1[2], xyz2[2], f);
                    break;
                default:
                    X = xyz1[0] + (xyz2[0] - xyz1[0]) * f;
                    Y = xyz1[1] + (xyz2[1] - xyz1[1]) * f;
                    Z = xyz1[2] + (xyz2[2] - xyz1[2]) * f;
            }
            return chroma[mode](X, Y, Z).alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
        }
        return oldInterpol(col1, col2, f, mode);
    };
    chroma.getCSSGradient = $896ecb34056f05ba$var$getCSSGradient;
};

});

parcelRegister("13qG5", function(module, exports) {

$parcel$export(module.exports, "colorSpaces", () => $0c4ac3e70927ce4e$export$cc6bb9d5740973f3);
$parcel$export(module.exports, "round", () => $0c4ac3e70927ce4e$export$2077e0241d6afd3c);
$parcel$export(module.exports, "multiplyRatios", () => $0c4ac3e70927ce4e$export$e8cab9b5b5bcd52a);
$parcel$export(module.exports, "hsluvArray", () => $0c4ac3e70927ce4e$export$27bd29d0f1d19e5e);
$parcel$export(module.exports, "createScale", () => $0c4ac3e70927ce4e$export$587d9c3c553380c6);
$parcel$export(module.exports, "removeDuplicates", () => $0c4ac3e70927ce4e$export$2e2262a44ac61957);
$parcel$export(module.exports, "convertColorValue", () => $0c4ac3e70927ce4e$export$b409da732fb3f2cb);
$parcel$export(module.exports, "getContrast", () => $0c4ac3e70927ce4e$export$850ce485a60d103b);
$parcel$export(module.exports, "ratioName", () => $0c4ac3e70927ce4e$export$3a744cf2ace16d);
$parcel$export(module.exports, "searchColors", () => $0c4ac3e70927ce4e$export$540b66383af796b8);
/*
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ 
var $auXrg = parcelRequire("auXrg");

var $oZyht = parcelRequire("oZyht");

var $8zUhc = parcelRequire("8zUhc");
const $0c4ac3e70927ce4e$export$cc6bb9d5740973f3 = {
    CAM02: "jab",
    CAM02p: "jch",
    HEX: "hex",
    HSL: "hsl",
    HSLuv: "hsluv",
    HSV: "hsv",
    LAB: "lab",
    LCH: "lch",
    RGB: "rgb",
    OKLAB: "oklab",
    OKLCH: "oklch"
};
function $0c4ac3e70927ce4e$export$2077e0241d6afd3c(x, n = 0) {
    const ten = 10 ** n;
    return Math.round(x * ten) / ten;
}
function $0c4ac3e70927ce4e$export$e8cab9b5b5bcd52a(ratio, multiplier) {
    let r;
    // Normalize contrast ratios before multiplying by this._contrast
    // by making 1 = 0. This ensures consistent application of increase/decrease
    // in contrast ratios. Then add 1 back to number for contextual ratio value.
    if (ratio > 1) r = (ratio - 1) * multiplier + 1;
    else if (ratio < -1) r = (ratio + 1) * multiplier - 1;
    else r = 1;
    return $0c4ac3e70927ce4e$export$2077e0241d6afd3c(r, 2);
}
function $0c4ac3e70927ce4e$export$6df5d436e950bfce(c) {
    return (0, (/*@__PURE__*/$parcel$interopDefault($oZyht)))(String(c)).jch();
}
function $0c4ac3e70927ce4e$export$27bd29d0f1d19e5e(c) {
    return (0, (/*@__PURE__*/$parcel$interopDefault($oZyht)))(String(c)).hsluv();
}
function $0c4ac3e70927ce4e$var$smoothScale(ColorsArray, domains, space) {
    const points = [
        [],
        [],
        []
    ];
    ColorsArray.forEach((color, i)=>points.forEach((point, j)=>point.push(domains[i], color[j])));
    if (space === "hcl") {
        const point = points[1];
        for(let i = 1; i < point.length; i += 2)if (Number.isNaN(point[i])) point[i] = 0;
    }
    points.forEach((point)=>{
        const nans = [];
        // leading NaNs
        for(let i = 1; i < point.length; i += 2)if (Number.isNaN(point[i])) nans.push(i);
        else {
            nans.forEach((j)=>{
                point[j] = point[i];
            });
            nans.length = 0;
            break;
        }
        // all are grey case
        if (nans.length) {
            // hue is not important except for JCh
            const safeJChHue = (0, (/*@__PURE__*/$parcel$interopDefault($oZyht)))("#ccc").jch()[2];
            nans.forEach((j)=>{
                point[j] = safeJChHue;
            });
        }
        nans.length = 0;
        // trailing NaNs
        for(let i = point.length - 1; i > 0; i -= 2)if (Number.isNaN(point[i])) nans.push(i);
        else {
            nans.forEach((j)=>{
                point[j] = point[i];
            });
            break;
        }
        // other NaNs
        for(let i = 1; i < point.length; i += 2)if (Number.isNaN(point[i])) {
            point.splice(i - 1, 2);
            i -= 2;
        }
        // force hue to go on the shortest route
        if (space in {
            hcl: 1,
            hsl: 1,
            hsluv: 1,
            hsv: 1,
            jch: 1
        }) {
            let prev = point[1];
            let addon = 0;
            for(let i = 3; i < point.length; i += 2){
                const p = point[i] + addon;
                const zero = Math.abs(prev - p);
                const plus = Math.abs(prev - (p + 360));
                const minus = Math.abs(prev - (p - 360));
                if (plus < zero && plus < minus) addon += 360;
                if (minus < zero && minus < plus) addon -= 360;
                point[i] += addon;
                prev = point[i];
            }
        }
    });
    const prep = points.map((point)=>(0, $8zUhc.catmullRom2bezier)(point).map((curve)=>(0, $8zUhc.prepareCurve)(...curve)));
    return (d)=>{
        const ch = prep.map((p)=>{
            for(let i = 0; i < p.length; i++){
                const res = p[i](d);
                if (res != null) return res;
            }
            return null;
        });
        if (space === "jch" && ch[1] < 0) ch[1] = 0;
        return (0, (/*@__PURE__*/$parcel$interopDefault($oZyht)))[space](...ch).hex();
    };
}
function $0c4ac3e70927ce4e$var$makePowScale(exp = 1, domains = [
    0,
    1
], range = [
    0,
    1
]) {
    const m = (range[1] - range[0]) / (domains[1] ** exp - domains[0] ** exp);
    const c = range[0] - m * domains[0] ** exp;
    return (x)=>m * x ** exp + c;
}
function $0c4ac3e70927ce4e$export$587d9c3c553380c6({ swatches: swatches, colorKeys: colorKeys, colorspace: colorspace = "LAB", shift: shift = 1, fullScale: fullScale = true, smooth: smooth = false, distributeLightness: distributeLightness = "linear", sortColor: sortColor = true, asFun: asFun = false } = {}) {
    const space = $0c4ac3e70927ce4e$export$cc6bb9d5740973f3[colorspace];
    if (!space) throw new Error(`Colorspace \u{201C}${colorspace}\u{201D} not supported`);
    if (!colorKeys) throw new Error(`Colorkeys missing: returned \u{201C}${colorKeys}\u{201D}`);
    let domains;
    if (fullScale) {
        // Set domain of each color key based on percentage (as HSLuv lightness)
        // against the full scale of black to white
        domains = colorKeys.map((key)=>swatches - swatches * ((0, (/*@__PURE__*/$parcel$interopDefault($oZyht)))(key).jch()[0] / 100)).sort((a, b)=>a - b).concat(swatches);
        domains.unshift(0);
    } else {
        // Domains need to be a percentage of the available luminosity range
        let lums = colorKeys.map((c)=>(0, (/*@__PURE__*/$parcel$interopDefault($oZyht)))(c).jch()[0] / 100);
        let min = Math.min(...lums);
        let max = Math.max(...lums);
        domains = lums.map((lum)=>{
            if (lum === 0 || isNaN((lum - min) / (max - min))) return 0;
            else return swatches - (lum - min) / (max - min) * swatches;
        }).sort((a, b)=>a - b);
    }
    // Test logarithmic domain (for non-contrast-based scales)
    let sqrtDomains = $0c4ac3e70927ce4e$var$makePowScale(shift, [
        1,
        swatches
    ], [
        1,
        swatches
    ]);
    sqrtDomains = domains.map((d)=>Math.max(0, sqrtDomains(d)));
    // Transform square root in order to smooth gradient
    domains = sqrtDomains;
    // if(distributeLightness === 'parabolic') {
    //   const parabola = (x) => {return (Math.sqrt(x, 2))}
    //   let percDomains = sqrtDomains.map((d) => {return d/swatches})
    //   let newDomains = percDomains.map((d) => {return parabola(d) * swatches})
    //   domains = newDomains;
    // }
    if (distributeLightness === "polynomial") {
        // Equation based on polynomial mapping of lightness values in CIECAM02
        // of the RgBu diverging color scale.
        // const polynomial = (x) => { return 2.53906249999454 * Math.pow(x,4) - 6.08506944443434 * Math.pow(x,3) + 5.11197916665992 * Math.pow(x,2) - 2.56537698412552 * x + 0.999702380952327; }
        // const polynomial = (x) => { return Math.sqrt(Math.sqrt(x)) }
        const polynomial = (x)=>{
            return Math.sqrt(Math.sqrt((Math.pow(x, 2.25) + Math.pow(x, 4)) / 2));
        };
        let percDomains = sqrtDomains.map((d)=>{
            return d / swatches;
        });
        let newDomains = percDomains.map((d)=>{
            return polynomial(d) * swatches;
        });
        domains = newDomains;
    }
    const sortedColor = colorKeys// Convert to HSLuv and keep track of original indices
    .map((c, i)=>({
            colorKeys: $0c4ac3e70927ce4e$export$6df5d436e950bfce(c),
            index: i
        }))// Sort by lightness
    .sort((c1, c2)=>c2.colorKeys[0] - c1.colorKeys[0])// Retrieve original RGB color
    .map((data)=>colorKeys[data.index]);
    let ColorsArray = [];
    let scale;
    if (fullScale) {
        const white = space === "lch" ? (0, (/*@__PURE__*/$parcel$interopDefault($oZyht))).lch(...(0, (/*@__PURE__*/$parcel$interopDefault($oZyht)))("#fff").lch()) : "#ffffff";
        const black = space === "lch" ? (0, (/*@__PURE__*/$parcel$interopDefault($oZyht))).lch(...(0, (/*@__PURE__*/$parcel$interopDefault($oZyht)))("#000").lch()) : "#000000";
        ColorsArray = [
            white,
            ...sortedColor,
            black
        ];
    } else if (sortColor) ColorsArray = sortedColor;
    else ColorsArray = colorKeys;
    let smoothScaleArray;
    if (smooth) {
        const stringColors = ColorsArray;
        ColorsArray = ColorsArray.map((d)=>(0, (/*@__PURE__*/$parcel$interopDefault($oZyht)))(String(d))[space]());
        if (space === "hcl") // special case for HCL if C is NaN we should treat it as 0
        ColorsArray.forEach((c)=>{
            c[1] = Number.isNaN(c[1]) ? 0 : c[1];
        });
        if (space === "jch") // JCh has some “random” hue for grey colors.
        // Replacing it to NaN, so we can apply the same method of dealing with them.
        for(let i = 0; i < stringColors.length; i++){
            const color = (0, (/*@__PURE__*/$parcel$interopDefault($oZyht)))(stringColors[i]).hcl();
            if (Number.isNaN(color[0])) ColorsArray[i][2] = NaN;
        }
        scale = $0c4ac3e70927ce4e$var$smoothScale(ColorsArray, domains, space);
        smoothScaleArray = new Array(swatches).fill().map((_, d)=>scale(d));
    } else scale = (0, (/*@__PURE__*/$parcel$interopDefault($oZyht))).scale(ColorsArray.map((color)=>{
        if (typeof color === "object" && color.constructor === (0, (/*@__PURE__*/$parcel$interopDefault($oZyht))).Color) return color;
        return String(color);
    })).domain(domains).mode(space);
    if (asFun) return scale;
    // const Colors = new Array(swatches).fill().map((_, d) => chroma(scale(d)).hex());
    const Colors = !smooth || smooth === false ? scale.colors(swatches) : smoothScaleArray;
    const colors = Colors.filter((el)=>el != null);
    return colors;
}
function $0c4ac3e70927ce4e$export$2e2262a44ac61957(originalArray, prop) {
    const newArray = [];
    const lookupObject = {};
    const keys1 = Object.keys(originalArray);
    keys1.forEach((i)=>{
        lookupObject[originalArray[i][prop]] = originalArray[i];
    });
    const keys2 = Object.keys(lookupObject);
    keys2.forEach((i)=>newArray.push(lookupObject[i]));
    return newArray;
}
function $0c4ac3e70927ce4e$export$f70730c3d1fc524e(a) {
    return Array.from(new Set(a));
}
// Helper function to change any NaN to a zero
function $0c4ac3e70927ce4e$var$filterNaN(x) {
    if (Number.isNaN(x)) return 0;
    return x;
}
// Helper function for rounding color values to whole numbers
function $0c4ac3e70927ce4e$export$b409da732fb3f2cb(color, format, object = false) {
    if (!color) throw new Error(`Cannot convert color value of \u{201C}${color}\u{201D}`);
    if (!$0c4ac3e70927ce4e$export$cc6bb9d5740973f3[format]) throw new Error(`Cannot convert to colorspace \u{201C}${format}\u{201D}`);
    const space = $0c4ac3e70927ce4e$export$cc6bb9d5740973f3[format];
    const colorObj = (0, (/*@__PURE__*/$parcel$interopDefault($oZyht)))(String(color))[space]();
    if (format === "HSL") colorObj.pop();
    if (format === "HEX") {
        if (object) {
            const rgb = (0, (/*@__PURE__*/$parcel$interopDefault($oZyht)))(String(color)).rgb();
            return {
                r: rgb[0],
                g: rgb[1],
                b: rgb[2]
            };
        }
        return colorObj;
    }
    const colorObject = {};
    let newColorObj = colorObj.map($0c4ac3e70927ce4e$var$filterNaN);
    newColorObj = newColorObj.map((ch, i)=>{
        let rnd = $0c4ac3e70927ce4e$export$2077e0241d6afd3c(ch);
        let j = i;
        if (space === "hsluv") j += 2;
        let letter = space.charAt(j);
        if (space === "jch" && letter === "c") letter = "C";
        colorObject[letter === "j" ? "J" : letter] = rnd;
        if (space in {
            lab: 1,
            lch: 1,
            jab: 1,
            jch: 1
        }) {
            if (!object) {
                if (letter === "l" || letter === "j") rnd += "%";
                if (letter === "h") rnd += "deg";
            }
        } else if (space !== "hsluv") {
            if (letter === "s" || letter === "l" || letter === "v") {
                colorObject[letter] = $0c4ac3e70927ce4e$export$2077e0241d6afd3c(ch, 2);
                if (!object) {
                    rnd = $0c4ac3e70927ce4e$export$2077e0241d6afd3c(ch * 100);
                    rnd += "%";
                }
            } else if (letter === "h" && !object) rnd += "deg";
        }
        return rnd;
    });
    const stringName = space;
    const stringValue = `${stringName}(${newColorObj.join(", ")})`;
    if (object) return colorObject;
    return stringValue;
}
function $0c4ac3e70927ce4e$export$5c6e3c2b59b7fbbe(r, g, b) {
    const a = [
        r,
        g,
        b
    ].map((v)=>{
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
function $0c4ac3e70927ce4e$export$850ce485a60d103b(color, base, baseV, method = "wcag2") {
    if (baseV === undefined) {
        // If base is an array and baseV undefined
        const baseLightness = (0, (/*@__PURE__*/$parcel$interopDefault($oZyht))).rgb(...base).hsluv()[2];
        baseV = $0c4ac3e70927ce4e$export$2077e0241d6afd3c(baseLightness / 100, 2);
    }
    if (method === "wcag2") {
        const colorLum = $0c4ac3e70927ce4e$export$5c6e3c2b59b7fbbe(color[0], color[1], color[2]);
        const baseLum = $0c4ac3e70927ce4e$export$5c6e3c2b59b7fbbe(base[0], base[1], base[2]);
        const cr1 = (colorLum + 0.05) / (baseLum + 0.05); // will return value >=1 if color is darker than background
        const cr2 = (baseLum + 0.05) / (colorLum + 0.05); // will return value >=1 if color is lighter than background
        if (baseV < 0.5) {
            // Dark themes
            // If color is darker than background, return cr1 which will be whole number
            if (cr1 >= 1) return cr1;
            // If color is lighter than background, return cr2 as negative whole number
            return -cr2;
        }
        // Light themes
        // If color is lighter than background, return cr2 which will be whole number
        if (cr1 < 1) return cr2;
        // If color is darker than background, return cr1 as negative whole number
        if (cr1 === 1) return cr1;
        return -cr1;
    } else if (method === "wcag3") return baseV < 0.5 ? (0, $auXrg.APCAcontrast)((0, $auXrg.sRGBtoY)(color), (0, $auXrg.sRGBtoY)(base)) * -1 : (0, $auXrg.APCAcontrast)((0, $auXrg.sRGBtoY)(color), (0, $auXrg.sRGBtoY)(base));
    else throw new Error(`Contrast calculation method ${method} unsupported; use 'wcag2' or 'wcag3'`);
}
function $0c4ac3e70927ce4e$export$a15c179edde46aa5(r, formula) {
    if (!r) throw new Error("Array undefined");
    if (!Array.isArray(r)) throw new Error("Passed object is not an array");
    const min = formula === "wcag2" ? 0 : 1;
    return Math.min(...r.filter((val)=>val >= min));
}
function $0c4ac3e70927ce4e$export$3a744cf2ace16d(r, formula) {
    if (!r) throw new Error("Ratios undefined");
    r = r.sort((a, b)=>a - b); // sort ratio array in case unordered
    const min = $0c4ac3e70927ce4e$export$a15c179edde46aa5(r, formula);
    const minIndex = r.indexOf(min);
    const nArr = []; // names array
    const rNeg = r.slice(0, minIndex);
    const rPos = r.slice(minIndex, r.length);
    // Name the negative values
    for(let i = 0; i < rNeg.length; i++){
        const d = 1 / (rNeg.length + 1);
        const m = d * 100;
        const nVal = m * (i + 1);
        nArr.push($0c4ac3e70927ce4e$export$2077e0241d6afd3c(nVal));
    }
    // Name the positive values
    for(let i = 0; i < rPos.length; i++)nArr.push((i + 1) * 100);
    nArr.sort((a, b)=>a - b); // just for safe measure
    return nArr;
}
const $0c4ac3e70927ce4e$export$540b66383af796b8 = (color, bgRgbArray, baseV, ratioValues, formula)=>{
    const colorLen = 3000;
    const colorScale = $0c4ac3e70927ce4e$export$587d9c3c553380c6({
        swatches: colorLen,
        colorKeys: color._modifiedKeys,
        colorspace: color._colorspace,
        shift: 1,
        smooth: color._smooth,
        asFun: true
    });
    const ccache = {};
    // let ccounter = 0;
    const getContrast2 = (i)=>{
        if (ccache[i]) return ccache[i];
        const rgb = (0, (/*@__PURE__*/$parcel$interopDefault($oZyht)))(colorScale(i)).rgb();
        const c = $0c4ac3e70927ce4e$export$850ce485a60d103b(rgb, bgRgbArray, baseV, formula);
        ccache[i] = c;
        // ccounter++;
        return c;
    };
    const colorSearch = (x)=>{
        const first = getContrast2(0);
        const last = getContrast2(colorLen);
        const dir = first < last ? 1 : -1;
        const \u03B5 = 0.01;
        x += 0.005 * Math.sign(x);
        let step = colorLen / 2;
        let dot = step;
        let val = getContrast2(dot);
        let counter = 100;
        while(Math.abs(val - x) > \u03B5 && counter){
            counter--;
            step /= 2;
            if (val < x) dot += step * dir;
            else dot -= step * dir;
            val = getContrast2(dot);
        }
        return $0c4ac3e70927ce4e$export$2077e0241d6afd3c(dot, 3);
    };
    const outputColors = [];
    ratioValues.forEach((ratio)=>outputColors.push(colorScale(colorSearch(+ratio))));
    return outputColors;
};

});
parcelRegister("auXrg", function(module, exports) {

$parcel$export(module.exports, "APCAcontrast", () => $7a4ad0075e7685cd$export$31c9349e1a210963);
$parcel$export(module.exports, "sRGBtoY", () => $7a4ad0075e7685cd$export$452c78380407a584);
///////////////////////////////////////////////////////////////////////////////
/** @preserve
/////    SAPC APCA - Advanced Perceptual Contrast Algorithm
/////           Beta 0.1.9 W3 • contrast function only
/////           DIST: W3 • Revision date: July 3, 2022
/////    Function to parse color values and determine Lc contrast
/////    Copyright © 2019-2022 by Andrew Somers. All Rights Reserved.
/////    LICENSE: W3 LICENSE
/////    CONTACT: Please use the ISSUES or DISCUSSIONS tab at:
/////    https://github.com/Myndex/SAPC-APCA/
/////
///////////////////////////////////////////////////////////////////////////////
/////
/////    MINIMAL IMPORTS:
/////      import { APCAcontrast, sRGBtoY, displayP3toY,
/////               calcAPCA, fontLookupAPCA } from 'apca-w3';
/////      import { colorParsley } from 'colorparsley';
/////
/////    FORWARD CONTRAST USAGE:
/////      Lc = APCAcontrast( sRGBtoY( TEXTcolor ) , sRGBtoY( BACKGNDcolor ) );
/////    Where the colors are sent as an rgba array [255,255,255,1]
/////
/////    Retrieving an array of font sizes for the contrast:
/////      fontArray = fontLookupAPCA(Lc);
/////
/////    Live Demonstrator at https://www.myndex.com/APCA/
// */ ///////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/////
/////                  SAPC Method and APCA Algorithm
/////   W3 Licensed Version: https://github.com/Myndex/apca-w3
/////   GITHUB MAIN REPO: https://github.com/Myndex/SAPC-APCA
/////   DEVELOPER SITE: https://git.myndex.com/
/////
/////   Acknowledgments and Thanks To:
/////   • This project references the research & work of M.Fairchild, R.W.Hunt,
/////     Drs. Bailey/Lovie-Kitchin, G.Legge, A.Arditi, M.Stone, C.Poynton, 
/////     L.Arend, M.Luo, E.Burns, R.Blackwell, P.Barton, M.Brettel, and many 
/////     others — see refs at https://www.myndex.com/WEB/WCAG_CE17polarity
/////   • Bruce Bailey of USAccessBoard for his encouragement, ideas, & feedback
/////   • Chris Lilly of W3C for continued review, examination, & oversight
/////   • Chris Loiselle of Oracle for getting us back on track in a pandemic
/////   • The many volunteer test subjects for participating in the studies.
/////   • The many early adopters, beta testers, and code/issue contributors
/////   • Principal research conducted at Myndex by A.Somers.
/////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/////
/////   *****  SAPC BLOCK  *****
/////
/////   For Evaluations, refer to this as: SAPC-8, 0.0.98G-series constant 4g
/////            SAPC • S-LUV Advanced Predictive Color
/////
/////   SIMPLE VERSION — Only the basic APCA contrast predictor.
/////
/////   Included Extensions & Model Features in this file:
/////       • SAPC-8 Core Contrast (Base APCA, non-clinical use only) 
/////       • G series constants, group "G-4g" using a 2.4 monitor exponent
/////       • sRGB to Y, parses numeric sRGB color to luminance
/////       • SoftToe black level soft clamp and flare compensation.
/////
/////
////////////////////////////////////////////////////////////////////////////////
/////
/////               DISCLAIMER AND LIMITATIONS OF USE
/////     APCA is an embodiment of certain suprathreshold contrast
/////     prediction technologies and it is licensed to the W3 on a
/////     limited basis for use in certain specific accessibility
/////     guidelines for web content only. APCA may be used for 
/////     predicting colors for web content use without royalty.
/////
/////     However, Any such license excludes other use cases
/////     not related to web content. Prohibited uses include
/////     medical, clinical evaluation, human safety related,
/////     aerospace, transportation, military applications, 
/////     and uses which are not specific to web based content
/////     presented on self-illuminated displays or devices.
/////
////////////////////////////////////////////////////////////////////////////////
//////////   APCA 0.1.9  G 4g USAGE  ///////////////////////////////////////////
///
///  The API for "APCA 0.1.9" is trivially simple.
///  Send text and background sRGB numeric values to the sRGBtoY() function,
///  and send the resulting text-Y and background-Y to the APCAcontrast function
///  it returns a signed float with the numeric Lc contrast result.
///  
///  The two inputs are TEXT color and BACKGROUND color in that order.
///  Each must be a numeric NOT a string, as this simple version has
///  no string parsing utilities. EXAMPLE:
///  ________________________________________________________________________
///
///     txtColor = colorParsley(0x123456); // color of the text
///     bgColor  = colorParsley(0xabcdef); // color for the background
///
///     contrastLc = APCAcontrast( sRGBtoY(txtColor) , sRGBtoY(bgColor) );
///  ________________________________________________________________________
///
///                  **********   QUICK START   **********
///
///  Each color must be a 24bit color (8 bit per channel) as a single integer
///  (or 0x) sRGB encoded color, i.e. White is either the integer 16777216 or
///  the hex 0xffffff. A float is returned with a positive or negative value.
///  Negative values mean light text and a dark background, positive values
///  mean dark text and a light background. 60.0, or -60.0 is a contrast
///  "sort of like" the old WCAG 2's 4.5:1. NOTE: the total range is now less
///  than ± 110, so output can be rounded to a signed INT but DO NOT output
///  an absolute value - light text on dark BG should return a negative number.
///
///     *****  IMPORTANT: Do Not Mix Up Text and Background inputs.  *****
///     ****************   APCA is polarity sensitive!   *****************
///  
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/////    BEGIN APCA  0.1.9  BLOCK       \/////////////////////////////////////
////                                     \///////////////////////////////////
///                                       \/////////////////////////////////
//                                         \///////////////////////////////
/////  DEPENDENCIES  /////
// The following imports are not needed for the main APCA function,
// but are needed for the shortcut/alias calcAPCA(), and for the
// future invertAPCA function, which examines hue.
////  (add slash to line start for local test mode, remove before push)
/*    ////  LOCAL TESTING SWITCH for using test.html
    import{colorParsley}from'../node_modules/colorparsley/src/colorparsley.js';
/*/ //// TOGGLE

var $f1ktT = parcelRequire("f1ktT");
// */ //// END LOCAL TESTING SWITCH
/////  Module Scope Object Containing Constants  /////
/////   APCA   0.0.98G - 4g - W3 Compatible Constants
/////  𝒦 SA98G  ///////////////////////////////////
const $7a4ad0075e7685cd$var$SA98G = {
    mainTRC: 2.4,
    // For reverseAPCA
    get mainTRCencode () {
        return 1 / this.mainTRC;
    },
    // sRGB coefficients
    sRco: 0.2126729,
    sGco: 0.7151522,
    sBco: 0.0721750,
    // G-4g constants for use with 2.4 exponent
    normBG: 0.56,
    normTXT: 0.57,
    revTXT: 0.62,
    revBG: 0.65,
    // G-4g Clamps and Scalers
    blkThrs: 0.022,
    blkClmp: 1.414,
    scaleBoW: 1.14,
    scaleWoB: 1.14,
    loBoWoffset: 0.027,
    loWoBoffset: 0.027,
    deltaYmin: 0.0005,
    loClip: 0.1,
    ///// MAGIC NUMBERS for UNCLAMP, for use with 0.022 & 1.414 /////
    // Magic Numbers for reverseAPCA
    mFactor: 1.94685544331710,
    get mFactInv () {
        return 1 / this.mFactor;
    },
    mOffsetIn: 0.03873938165714010,
    mExpAdj: 0.2833433964208690,
    get mExp () {
        return this.mExpAdj / this.blkClmp;
    },
    mOffsetOut: 0.3128657958707580
};
function $7a4ad0075e7685cd$export$31c9349e1a210963(txtY, bgY, places = -1) {
    // send linear Y (luminance) for text and background.
    // txtY and bgY must be between 0.0-1.0
    // IMPORTANT: Do not swap, polarity is important.
    const icp = [
        0.0,
        1.1
    ]; // input range clamp / input error check
    if (isNaN(txtY) || isNaN(bgY) || Math.min(txtY, bgY) < icp[0] || Math.max(txtY, bgY) > icp[1]) return 0.0; // return zero on error
    //////////   SAPC LOCAL VARS   /////////////////////////////////////////
    let SAPC = 0.0; // For raw SAPC values
    let outputContrast = 0.0; // For weighted final values
    let polCat = "BoW"; // Alternate Polarity Indicator. N normal R reverse
    // TUTORIAL
    // Use Y for text and BG, and soft clamp black,
    // return 0 for very close luminances, determine
    // polarity, and calculate SAPC raw contrast
    // Then scale for easy to remember levels.
    // Note that reverse contrast (white text on black)
    // intentionally returns a negative number
    // Proper polarity is important!
    //////////   BLACK SOFT CLAMP   ////////////////////////////////////////
    // Soft clamps Y for either color if it is near black.
    txtY = txtY > $7a4ad0075e7685cd$var$SA98G.blkThrs ? txtY : txtY + Math.pow($7a4ad0075e7685cd$var$SA98G.blkThrs - txtY, $7a4ad0075e7685cd$var$SA98G.blkClmp);
    bgY = bgY > $7a4ad0075e7685cd$var$SA98G.blkThrs ? bgY : bgY + Math.pow($7a4ad0075e7685cd$var$SA98G.blkThrs - bgY, $7a4ad0075e7685cd$var$SA98G.blkClmp);
    ///// Return 0 Early for extremely low ∆Y
    if (Math.abs(bgY - txtY) < $7a4ad0075e7685cd$var$SA98G.deltaYmin) return 0.0;
    //////////   APCA/SAPC CONTRAST - LOW CLIP (W3 LICENSE)  ///////////////
    if (bgY > txtY) {
        // Calculate the SAPC contrast value and scale
        SAPC = (Math.pow(bgY, $7a4ad0075e7685cd$var$SA98G.normBG) - Math.pow(txtY, $7a4ad0075e7685cd$var$SA98G.normTXT)) * $7a4ad0075e7685cd$var$SA98G.scaleBoW;
        // Low Contrast smooth rollout to prevent polarity reversal
        // and also a low-clip for very low contrasts
        outputContrast = SAPC < $7a4ad0075e7685cd$var$SA98G.loClip ? 0.0 : SAPC - $7a4ad0075e7685cd$var$SA98G.loBoWoffset;
    } else {
        // WoB should always return negative value.
        polCat = "WoB";
        SAPC = (Math.pow(bgY, $7a4ad0075e7685cd$var$SA98G.revBG) - Math.pow(txtY, $7a4ad0075e7685cd$var$SA98G.revTXT)) * $7a4ad0075e7685cd$var$SA98G.scaleWoB;
        outputContrast = SAPC > -$7a4ad0075e7685cd$var$SA98G.loClip ? 0.0 : SAPC + $7a4ad0075e7685cd$var$SA98G.loWoBoffset;
    }
    // return Lc (lightness contrast) as a signed numeric value 
    // Round to the nearest whole number as string is optional.
    // Rounded can be a signed INT as output will be within ± 127 
    // places = -1 returns signed float, 1 or more set that many places
    // 0 returns rounded string, uses BoW or WoB instead of minus sign
    if (places < 0) return outputContrast * 100.0;
    else if (places == 0) return Math.round(Math.abs(outputContrast) * 100.0) + "<sub>" + polCat + "</sub>";
    else if (Number.isInteger(places)) return (outputContrast * 100.0).toFixed(places);
    else return 0.0;
} // End APCAcontrast()
function $7a4ad0075e7685cd$export$de2521c2f3302d7d(contrast = 0, knownY = 1.0, knownType = "bg", returnAs = "hex") {
    if (Math.abs(contrast) < 9) return false;
    let unknownY = knownY, knownExp, unknownExp;
    /////   APCA   0.0.98G - 4g - W3 Compatible Constants   ////////////////////
    const scale = contrast > 0 ? $7a4ad0075e7685cd$var$SA98G.scaleBoW : $7a4ad0075e7685cd$var$SA98G.scaleWoB;
    const offset = contrast > 0 ? $7a4ad0075e7685cd$var$SA98G.loBoWoffset : -$7a4ad0075e7685cd$var$SA98G.loWoBoffset;
    contrast = (parseFloat(contrast) * 0.01 + offset) / scale;
    // Soft clamps Y if it is near black.
    knownY = knownY > $7a4ad0075e7685cd$var$SA98G.blkThrs ? knownY : knownY + Math.pow($7a4ad0075e7685cd$var$SA98G.blkThrs - knownY, $7a4ad0075e7685cd$var$SA98G.blkClmp);
    // set the known and unknown exponents
    if (knownType == "bg" || knownType == "background") {
        knownExp = contrast > 0 ? $7a4ad0075e7685cd$var$SA98G.normBG : $7a4ad0075e7685cd$var$SA98G.revBG;
        unknownExp = contrast > 0 ? $7a4ad0075e7685cd$var$SA98G.normTXT : $7a4ad0075e7685cd$var$SA98G.revTXT;
        unknownY = Math.pow(Math.pow(knownY, knownExp) - contrast, 1 / unknownExp);
        if (isNaN(unknownY)) return false;
    } else if (knownType == "txt" || knownType == "text") {
        knownExp = contrast > 0 ? $7a4ad0075e7685cd$var$SA98G.normTXT : $7a4ad0075e7685cd$var$SA98G.revTXT;
        unknownExp = contrast > 0 ? $7a4ad0075e7685cd$var$SA98G.normBG : $7a4ad0075e7685cd$var$SA98G.revBG;
        unknownY = Math.pow(contrast + Math.pow(knownY, knownExp), 1 / unknownExp);
        if (isNaN(unknownY)) return false;
    } else return false;
     // return false on error
    //return contrast +'----'+unknownY;
    if (unknownY > 1.06 || unknownY < 0) return false;
     // return false on overflow
    // if (unknownY < 0) { return false } // return false on underflow
    //unknownY = Math.max(unknownY,0.0);
    //  unclamp
    unknownY = unknownY > $7a4ad0075e7685cd$var$SA98G.blkThrs ? unknownY : Math.pow((unknownY + $7a4ad0075e7685cd$var$SA98G.mOffsetIn) * $7a4ad0075e7685cd$var$SA98G.mFactor, $7a4ad0075e7685cd$var$SA98G.mExp) * $7a4ad0075e7685cd$var$SA98G.mFactInv - $7a4ad0075e7685cd$var$SA98G.mOffsetOut;
    //    unknownY - 0.22 * Math.pow(unknownY*0.5, 1/blkClmp);
    unknownY = Math.max(Math.min(unknownY, 1.0), 0.0);
    if (returnAs === "hex") {
        let hexB = Math.round(Math.pow(unknownY, $7a4ad0075e7685cd$var$SA98G.mainTRCencode) * 255).toString(16).padStart(2, "0");
        return "#" + hexB + hexB + hexB;
    } else if (returnAs === "color") {
        let colorB = Math.round(Math.pow(unknownY, $7a4ad0075e7685cd$var$SA98G.mainTRCencode) * 255);
        let retUse = knownType == "bg" ? "txtColor" : "bgColor";
        return [
            colorB,
            colorB,
            colorB,
            1,
            retUse
        ];
    } else if (returnAs === "Y" || returnAs === "y") return Math.max(0.0, unknownY);
    else return false;
     // return knownY on error
}
function $7a4ad0075e7685cd$export$3e7e0130ff0bf5f6(textColor, bgColor, places = -1, round = true) {
    // Note that this function requires colorParsley !!
    let bgClr = (0, $f1ktT.colorParsley)(bgColor);
    let txClr = (0, $f1ktT.colorParsley)(textColor);
    let hasAlpha = txClr[3] == "" || txClr[3] == 1 ? false : true;
    if (hasAlpha) txClr = $7a4ad0075e7685cd$export$d6db500c413b8b2e(txClr, bgClr, round);
    return $7a4ad0075e7685cd$export$31c9349e1a210963($7a4ad0075e7685cd$export$452c78380407a584(txClr), $7a4ad0075e7685cd$export$452c78380407a584(bgClr), places);
} // End calcAPCA()
function $7a4ad0075e7685cd$export$948ddafec831c627(contrast, places = 2) {
    ////////////////////////////////////////////////////////////////////////////
    /////  CONTRAST * FONT WEIGHT & SIZE  /////////////////////////////////////
    // Font size interpolations. Here the chart was re-ordered to put
    // the main contrast levels each on one line, instead of font size per line.
    // First column is LC value, then each following column is font size by weight
    // G G G G G G  Public Beta 0.1.7 (G) • MAY 28 2022
    // Lc values under 70 should have Lc 15 ADDED if used for body text
    // All font sizes are in px and reference font is Barlow
    // 999: prohibited - too low contrast
    // 777: NON TEXT at this minimum weight stroke
    // 666 - this is for spot text, not fluent-Things like copyright or placeholder.
    // 5xx - minimum font at this weight for content, 5xx % 500 for font-size
    // 4xx - minimum font at this weight for any purpose], 4xx % 400 for font-size
    // MAIN FONT SIZE LOOKUP
    //// ASCENDING SORTED  Public Beta 0.1.7 (G) • MAY 28 2022  ////
    //// Lc 45 * 0.2 = 9 which is the index for the row for Lc 45
    // MAIN FONT LOOKUP May 28 2022 EXPANDED
    // Sorted by Lc Value
    // First row is standard weights 100-900
    // First column is font size in px
    // All other values are the Lc contrast 
    // 999 = too low. 777 = non-text and spot text only
    const fontMatrixAscend = [
        [
            "Lc",
            100,
            200,
            300,
            400,
            500,
            600,
            700,
            800,
            900
        ],
        [
            0,
            999,
            999,
            999,
            999,
            999,
            999,
            999,
            999,
            999
        ],
        [
            10,
            999,
            999,
            999,
            999,
            999,
            999,
            999,
            999,
            999
        ],
        [
            15,
            777,
            777,
            777,
            777,
            777,
            777,
            777,
            777,
            777
        ],
        [
            20,
            777,
            777,
            777,
            777,
            777,
            777,
            777,
            777,
            777
        ],
        [
            25,
            777,
            777,
            777,
            120,
            120,
            108,
            96,
            96,
            96
        ],
        [
            30,
            777,
            777,
            120,
            108,
            108,
            96,
            72,
            72,
            72
        ],
        [
            35,
            777,
            120,
            108,
            96,
            72,
            60,
            48,
            48,
            48
        ],
        [
            40,
            120,
            108,
            96,
            60,
            48,
            42,
            32,
            32,
            32
        ],
        [
            45,
            108,
            96,
            72,
            42,
            32,
            28,
            24,
            24,
            24
        ],
        [
            50,
            96,
            72,
            60,
            32,
            28,
            24,
            21,
            21,
            21
        ],
        [
            55,
            80,
            60,
            48,
            28,
            24,
            21,
            18,
            18,
            18
        ],
        [
            60,
            72,
            48,
            42,
            24,
            21,
            18,
            16,
            16,
            18
        ],
        [
            65,
            68,
            46,
            32,
            21.75,
            19,
            17,
            15,
            16,
            18
        ],
        [
            70,
            64,
            44,
            28,
            19.5,
            18,
            16,
            14.5,
            16,
            18
        ],
        [
            75,
            60,
            42,
            24,
            18,
            16,
            15,
            14,
            16,
            18
        ],
        [
            80,
            56,
            38.25,
            23,
            17.25,
            15.81,
            14.81,
            14,
            16,
            18
        ],
        [
            85,
            52,
            34.5,
            22,
            16.5,
            15.625,
            14.625,
            14,
            16,
            18
        ],
        [
            90,
            48,
            32,
            21,
            16,
            15.5,
            14.5,
            14,
            16,
            18
        ],
        [
            95,
            45,
            28,
            19.5,
            15.5,
            15,
            14,
            13.5,
            16,
            18
        ],
        [
            100,
            42,
            26.5,
            18.5,
            15,
            14.5,
            13.5,
            13,
            16,
            18
        ],
        [
            105,
            39,
            25,
            18,
            14.5,
            14,
            13,
            12,
            16,
            18
        ],
        [
            110,
            36,
            24,
            18,
            14,
            13,
            12,
            11,
            16,
            18
        ],
        [
            115,
            34.5,
            22.5,
            17.25,
            12.5,
            11.875,
            11.25,
            10.625,
            14.5,
            16.5
        ],
        [
            120,
            33,
            21,
            16.5,
            11,
            10.75,
            10.5,
            10.25,
            13,
            15
        ],
        [
            125,
            32,
            20,
            16,
            10,
            10,
            10,
            10,
            12,
            14
        ]
    ];
    // ASCENDING SORTED  Public Beta 0.1.7 (G) • MAY 28 2022 ////
    // DELTA - MAIN FONT LOOKUP May 28 2022 EXPANDED
    // EXPANDED  Sorted by Lc Value ••  DELTA
    // The pre-calculated deltas of the above array
    const fontDeltaAscend = [
        [
            "\u2206Lc",
            100,
            200,
            300,
            400,
            500,
            600,
            700,
            800,
            900
        ],
        [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            10,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            15,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            20,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ],
        [
            25,
            0,
            0,
            0,
            12,
            12,
            12,
            24,
            24,
            24
        ],
        [
            30,
            0,
            0,
            12,
            12,
            36,
            36,
            24,
            24,
            24
        ],
        [
            35,
            0,
            12,
            12,
            36,
            24,
            18,
            16,
            16,
            16
        ],
        [
            40,
            12,
            12,
            24,
            18,
            16,
            14,
            8,
            8,
            8
        ],
        [
            45,
            12,
            24,
            12,
            10,
            4,
            4,
            3,
            3,
            3
        ],
        [
            50,
            16,
            12,
            12,
            4,
            4,
            3,
            3,
            3,
            3
        ],
        [
            55,
            8,
            12,
            6,
            4,
            3,
            3,
            2,
            2,
            0
        ],
        [
            60,
            4,
            2,
            10,
            2.25,
            2,
            1,
            1,
            0,
            0
        ],
        [
            65,
            4,
            2,
            4,
            2.25,
            1,
            1,
            0.5,
            0,
            0
        ],
        [
            70,
            4,
            2,
            4,
            1.5,
            2,
            1,
            0.5,
            0,
            0
        ],
        [
            75,
            4,
            3.75,
            1,
            0.75,
            0.188,
            0.188,
            0,
            0,
            0
        ],
        [
            80,
            4,
            3.75,
            1,
            0.75,
            0.188,
            0.188,
            0,
            0,
            0
        ],
        [
            85,
            4,
            2.5,
            1,
            0.5,
            0.125,
            0.125,
            0,
            0,
            0
        ],
        [
            90,
            3,
            4,
            1.5,
            0.5,
            0.5,
            0.5,
            0.5,
            0,
            0
        ],
        [
            95,
            3,
            1.5,
            1,
            0.5,
            0.5,
            0.5,
            0.5,
            0,
            0
        ],
        [
            100,
            3,
            1.5,
            0.5,
            0.5,
            0.5,
            0.5,
            1,
            0,
            0
        ],
        [
            105,
            3,
            1,
            0,
            0.5,
            1,
            1,
            1,
            0,
            0
        ],
        [
            110,
            1.5,
            1.5,
            0.75,
            1.5,
            1.125,
            0.75,
            0.375,
            1.5,
            1.5
        ],
        [
            115,
            1.5,
            1.5,
            0.75,
            1.5,
            1.125,
            0.75,
            0.375,
            1.5,
            1.5
        ],
        [
            120,
            1,
            1,
            0.5,
            1,
            0.75,
            0.5,
            0.25,
            1,
            1
        ],
        [
            125,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ]
    ];
    // APCA CONTRAST FONT LOOKUP TABLES
    // Copyright © 2022 by Myndex Research and Andrew Somers. All Rights Reserved
    // Public Beta 0.1.7 (G) • MAY 28 2022
    // For the following arrays, the Y axis is contrastArrayLen
    // The two x axis are weightArrayLen and scoreArrayLen
    // MAY 28 2022
    const weightArray = [
        0,
        100,
        200,
        300,
        400,
        500,
        600,
        700,
        800,
        900
    ];
    const weightArrayLen = weightArray.length; // X axis
    let returnArray = [
        contrast.toFixed(places),
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
    const returnArrayLen = returnArray.length; // X axis
    const contrastArrayAscend = [
        "lc",
        0,
        10,
        15,
        20,
        25,
        30,
        35,
        40,
        45,
        50,
        55,
        60,
        65,
        70,
        75,
        80,
        85,
        90,
        95,
        100,
        105,
        110,
        115,
        120,
        125
    ];
    const contrastArrayLenAsc = contrastArrayAscend.length; // Y azis
    //// Lc 45 * 0.2 = 9, and 9 is the index for the row for Lc 45
    let tempFont = 777;
    contrast = Math.abs(contrast); // Polarity unneeded for LUT
    const factor = 0.2; // 1/5 as LUT is in increments of 5
    const index = contrast == 0 ? 1 : contrast * factor | 0; // LUT row... n|0 is bw floor
    let w = 0;
    // scoreAdj interpolates the needed font side per the Lc
    let scoreAdj = (contrast - fontMatrixAscend[index][w]) * factor;
    w++; // determines column in font matrix LUT
    /////////  Font and Score Interpolation  \/////////////////////////////////
    // populate returnArray with interpolated values
    for(; w < weightArrayLen; w++){
        tempFont = fontMatrixAscend[index][w];
        if (tempFont > 400) returnArray[w] = tempFont;
        else if (contrast < 14.5) returnArray[w] = 999; //  999 = do not use for anything
        else if (contrast < 29.5) returnArray[w] = 777; // 777 =  non-text only
        else // INTERPOLATION OF FONT SIZE
        // sets level for 0.5px size increments of smaller fonts
        // Note bitwise (n|0) instead of floor
        tempFont > 24 ? returnArray[w] = Math.round(tempFont - fontDeltaAscend[index][w] * scoreAdj) : returnArray[w] = tempFont - (2.0 * fontDeltaAscend[index][w] * scoreAdj | 0) * 0.5;
    }
    /////////  End Interpolation  ////////////////////////////////////////////
    return returnArray;
} // end fontLookupAPCA
function $7a4ad0075e7685cd$export$452c78380407a584(rgb = [
    0,
    0,
    0
]) {
    // NOTE: Currently expects 0-255
    /////   APCA   0.0.98G - 4g - W3 Compatible Constants   ////////////////////
    /*
const mainTRC = 2.4; // 2.4 exponent emulates actual monitor perception
    
const sRco = 0.2126729, 
      sGco = 0.7151522, 
      sBco = 0.0721750; // sRGB coefficients
      */ // Future:
    // 0.2126478133913640	0.7151791475336150	0.0721730390750208
    // Derived from:
    // xW	yW	K	xR	yR	xG	yG	xB	yB
    // 0.312720	0.329030	6504	0.640	0.330	0.300	0.600	0.150	0.060
    // linearize r, g, or b then apply coefficients
    // and sum then return the resulting luminance
    function simpleExp(chan) {
        return Math.pow(chan / 255.0, $7a4ad0075e7685cd$var$SA98G.mainTRC);
    }
    return $7a4ad0075e7685cd$var$SA98G.sRco * simpleExp(rgb[0]) + $7a4ad0075e7685cd$var$SA98G.sGco * simpleExp(rgb[1]) + $7a4ad0075e7685cd$var$SA98G.sBco * simpleExp(rgb[2]);
} // End sRGBtoY()
function $7a4ad0075e7685cd$export$d5d18e467c2873fc(rgb = [
    0,
    0,
    0
]) {
    // NOTE: Currently Apple has the tuple as 0.0 to 1.0, NOT 255
    /////   APCA   0.0.98G - 4g - W3 Compatible Constants   ////////////////////
    const mainTRC = 2.4; // 2.4 exponent emulates actual monitor perception
    // Pending evaluation, because, Apple...
    const sRco = 0.2289829594805780, sGco = 0.6917492625852380, sBco = 0.0792677779341829; // displayP3 coefficients
    // Derived from:
    // xW	yW	K	xR	yR	xG	yG	xB	yB
    // 0.312720	0.329030	6504	0.680	0.320	0.265	0.690	0.150	0.060
    // linearize r, g, or b then apply coefficients
    // and sum then return the resulting luminance
    function simpleExp(chan) {
        return Math.pow(chan, mainTRC);
    }
    return sRco * simpleExp(rgb[0]) + sGco * simpleExp(rgb[1]) + sBco * simpleExp(rgb[2]);
} // End displayP3toY()
function $7a4ad0075e7685cd$export$96aa82a34dd51c77(rgb = [
    0,
    0,
    0
]) {
    // NOTE: Currently expects 0-255
    /////   APCA   0.0.98G - 4g - W3 Compatible Constants   ////////////////////
    const mainTRC = 2.35; // 2.35 exponent emulates actual monitor perception
    // Pending evaluation...
    const sRco = 0.2973550227113810, sGco = 0.6273727497145280, sBco = 0.0752722275740913; // adobeRGB coefficients
    // Derived from:
    // xW	yW	K	xR	yR	xG	yG	xB	yB
    // 0.312720	0.329030	6504	0.640	0.330	0.210	0.710	0.150	0.060
    // linearize r, g, or b then apply coefficients
    // and sum then return the resulting luminance
    function simpleExp(chan) {
        return Math.pow(chan / 255.0, mainTRC);
    }
    return sRco * simpleExp(rgb[0]) + sGco * simpleExp(rgb[1]) + sBco * simpleExp(rgb[2]);
} // End displayP3toY()
function $7a4ad0075e7685cd$export$d6db500c413b8b2e(rgbaFG = [
    0,
    0,
    0,
    1.0
], rgbBG = [
    0,
    0,
    0
], round = true) {
    rgbaFG[3] = Math.max(Math.min(rgbaFG[3], 1.0), 0.0); // clamp alpha 0-1
    let compBlend = 1.0 - rgbaFG[3];
    let rgbOut = [
        0,
        0,
        0,
        1,
        true
    ]; // or just use rgbBG to retain other elements?
    for(let i = 0; i < 3; i++){
        rgbOut[i] = rgbBG[i] * compBlend + rgbaFG[i] * rgbaFG[3];
        if (round) rgbOut[i] = Math.min(Math.round(rgbOut[i]), 255);
    }
    return rgbOut;
} // End alphaBlend()
 //\                                     ////////////////////////////////////////
 ///\                                   ////////////////////////////////////////
 ////\                                 ////////////////////////////////////////
 /////\  END APCA 0.1.9  G-4g  BLOCK  ////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////////////////

});
parcelRegister("f1ktT", function(module, exports) {

$parcel$export(module.exports, "colorParsley", () => $aef6d6276b745fa9$export$1a21ac02d10b0a57);
///////////////////////////////////////////////////////////////////////////////
/** @preserve
/////    CoLoR PaRsLeY  a simple set of color parsing thingies!
/////           Beta 0.1.8   Revision date: June 04, 2022
/////
/////    Functions to parse color values and return array
/////    Copyright (c) 2019-2022 by Andrew Somers. All Rights Reserved.
/////    LICENSE: AGPL 3
/////    CONTACT: Please use the ISSUES or DISCUSSIONS tab at:
/////    https://github.com/Myndex/colorparsley/
/////
///////////////////////////////////////////////////////////////////////////////
/////
/////    IMPORT:
/////    import { colorParsley } from 'colorparsley';
/////
/////    let rgbaArray = colorParsley('#abcdef');
/////
/////    Output as array:  [r,g,b,a,isValid,colorspace]
/////    Example: [123,123,123,1.0,true,'sRGB']
// */ ///////////////////////////////////////////////////////////////////////////////
// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS
// @output_file_name colorparsley.min.js
// @code_url https://raw.githubusercontent.com/Myndex/colorparsley/master/src/colorparsley.js
// ==/ClosureCompiler==
// 
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/////  BEGIN COLOR PARSLEY 0.1.8  BLOCK  \/////////////////////////////////////
////                                      \///////////////////////////////////
///                                        \/////////////////////////////////
/////  ƒ  colorParsley()  ///////////////////////////////////////////////////
function $aef6d6276b745fa9$export$1a21ac02d10b0a57(colorIn) {
    if (typeof colorIn === "string") return $aef6d6276b745fa9$var$parseString(colorIn);
    else if (typeof colorIn === "number") return [
        (colorIn & 0xFF0000) >> 16,
        (colorIn & 0x00FF00) >> 8,
        colorIn & 0x0000FF,
        1,
        true,
        "unknown"
    ];
    else if (typeof colorIn === "object") {
        if (Array.isArray(colorIn)) return colorIn;
        else if (!isNaN(colorIn.r) || !isNaN(colorIn.red)) {
            // validate object & return array
            let objArray = [
                0,
                0,
                0,
                0,
                false,
                "unknown"
            ];
            // takes object with r g b or red green blue etc...
            objArray[0] = colorIn.r ? colorIn.r : colorIn.red ? colorIn.red : false;
            objArray[1] = colorIn.g ? colorIn.g : colorIn.green ? colorIn.green : false;
            objArray[2] = colorIn.b ? colorIn.b : colorIn.blue ? colorIn.blue : false;
            objArray[3] = colorIn.a ? colorIn.a : colorIn.alpha ? colorIn.alpha : 1;
            objArray[4] = objArray[0] && objArray[1] && objArray[2] ? true : false;
            objArray[5] = colorIn.space ? colorIn.space : colorIn.colorSpace ? colorIn.colorSpace : colorIn.colorspace ? colorIn.colorspace : "unknown";
            return objArray;
        }
    }
    console.log("colorParsley error: invalid input");
    return [
        0,
        0,
        0,
        0,
        false,
        "inputError"
    ] // throw 'InvalidInput' // return error 
    ;
}
/////  ƒ  parseString()  ///////////////////////////////////////////////////
// private
function $aef6d6276b745fa9$var$parseString(colorString = "#abcdef") {
    // strip junk and make a clean string (replace unmatched)
    // This retains all alphanumeric and , . # % ( ) /
    colorString = colorString.replace(/[^\w,.#%()\/ -]/g, "");
    colorString = colorString.toLowerCase(); // set lowercase
    let isValid = false; // validation flag, in array element [4]
    let type = "sRGB"; // Default colorspace flag in element [5]
    let retArray = [
        0,
        0,
        0,
        0,
        isValid,
        type
    ]; // init the return array
    // test for named color before iterating array
    if (colorString.match(/^(?:(?!rgb|l.h|hs|col|\d|#).{0,4})(?=[g-z])/)) {
        ///// CSS4 NAMED COLORS plus a bonus set of GREYS and GRAYS //////////
        // If name is matched, parse and return the color values
        let namedColors = {
            gray0: "000000",
            gray1: "111111",
            gray2: "222222",
            gray3: "333333",
            gray4: "444444",
            gray5: "555555",
            gray6: "666666",
            gray7: "777777",
            gray8: "888888",
            gray9: "999999",
            graya: "aaaaaa",
            grayb: "bbbbbb",
            grayc: "cccccc",
            grayd: "dddddd",
            graye: "eeeeee",
            grayf: "ffffff",
            midgray: "a0a0a0",
            grey0: "000000",
            grey1: "111111",
            grey2: "222222",
            grey3: "333333",
            grey4: "444444",
            grey5: "555555",
            grey6: "666666",
            grey7: "777777",
            grey8: "888888",
            grey9: "999999",
            greya: "aaaaaa",
            greyb: "bbbbbb",
            greyc: "cccccc",
            greyd: "dddddd",
            greye: "eeeeee",
            greyf: "ffffff",
            midgrey: "a0a0a0",
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "00ffff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000000",
            blanchedalmond: "ffebcd",
            blue: "0000ff",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "00ffff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgreen: "006400",
            darkgrey: "a9a9a9",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkslategrey: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dimgrey: "696969",
            dodgerblue: "1e90ff",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "ff00ff",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            green: "008000",
            greenyellow: "adff2f",
            grey: "808080",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgray: "d3d3d3",
            lightgreen: "90ee90",
            lightgrey: "d3d3d3",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslategray: "778899",
            lightslategrey: "778899",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "00ff00",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "ff00ff",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370db",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "db7093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            rebeccapurple: "663399",
            red: "ff0000",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            slategrey: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            wheat: "f5deb3",
            white: "ffffff",
            whitesmoke: "f5f5f5",
            yellow: "ffff00",
            yellowgreen: "9acd32"
        };
        for(let key in namedColors)if (colorString == key) {
            let hexRex = {
                rex: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/,
                sprig: function(slices) {
                    for(let i = 0; i < 3; i++)retArray[i] = parseInt(slices[i + 1], 16);
                    retArray[3] = 1;
                    return true;
                }
            };
            let hexProc = hexRex.rex.exec(namedColors[key]);
            retArray[4] = isValid = hexRex.sprig(hexProc);
            return retArray;
        }
    }
    // NEW regex  0.1.6 - still current for use with with 0.1.8+
    // See docs for breakdown of regex pattern
    let colorRex = {
        rex: /(?:^(?:#|0x|)(?:(?:([\da-f])([\da-f])([\da-f])([\da-f])?)(?!\S)|(?:([\da-f]{2})(?:([\da-f]{2})([\da-f]{2})([\da-f]{2})?)?))|(?:(?:^(?:rgba?|)\(? ?(?:(?:(?:(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))(?:,[^\S]*$|(?:(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)(?:, ?| )(255|(?:25[0-4]|2[0-4]\d|1?\d{1,2})(?:\.\d{1,24})?)))|(100%|\d{1,2}(?:\.\d{1,24})?%)(?:,?[^\S]*$|(?:(?:, ?| )(?:(100%|\d{1,2}(?:\.\d{1,24})?%)(?:, ?| )(100%|\d{1,2}(?:\.\d{1,24})?%)))))|^(?:color\((srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])) (?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))|^(?:((?:r(?!gb)|c(?!olor)|[abd-qs-z])[a-z]{2,5})\( ?((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?)(?:, ?| )((?:\d{0,3}\.|)\d{1,24}%?))))(?:(?:,| \/| ) ?(?:(100%|\d{1,2}(?:\.\d{1,24})?%|[0 ]\.\d{1,24}|[01])))?(?:\)| |))[^\S]*$/,
        parsley: function(slices) {
            let slicePos = 0;
            let sliceLast = 0;
            let base = 10;
            let divisor = 100.0;
            let convertPct = 2.55;
            let alpha = "1";
            if (slices[23]) {
                alpha = slices[23];
                delete slices[23];
            }
            // Set alpha before anything else
            retArray[3] = alpha.match(/%/g) ? parseFloat(alpha) / divisor : parseFloat(alpha);
            //  determine first and last element
            for(let k = 1; k < slices.length; k++)if (slices[k]) {
                slicePos = slicePos ? slicePos : k;
                sliceLast = k;
            }
            switch(sliceLast){
                case 4:
                    base = 16;
                    divisor = 15.0;
                    retArray[3] = parseInt(slices[sliceLast], base) / divisor;
                case 3:
                    base = 16;
                    for(let i = 0; i < 3; i++)retArray[i] = parseInt(slices[slicePos + i] + slices[slicePos + i], base);
                    break;
                case 5:
                    base = 16;
                case 9:
                    retArray[0] = retArray[1] = retArray[2] = base == 10 ? parseFloat(slices[sliceLast]) : parseInt(slices[sliceLast], base);
                    break;
                case 12:
                    retArray[0] = retArray[1] = retArray[2] = parseFloat(slices[sliceLast]) * convertPct;
                    break;
                case 8:
                    base = 16;
                    divisor = 255.0;
                    retArray[3] = parseInt(slices[8], base) / divisor;
                case 7:
                    base = 16;
                case 11:
                    for(let i = 0; i < 3; i++)retArray[i] = base == 10 ? parseFloat(slices[slicePos + i]) : parseInt(slices[slicePos + i], base);
                    break;
                case 14:
                    for(let i = 0; i < 3; i++)retArray[i] = parseFloat(slices[slicePos + i]) * convertPct;
                    break;
                case 18:
                    retArray[5] = slices[15];
                    for(let i = 0; i < 3; i++){
                        slicePos++;
                        retArray[i] = slices[slicePos].match(/%/g) ? parseFloat(slices[slicePos]) * 2.55 : parseFloat(slices[slicePos]) * 255;
                    }
                    break;
                case 22:
                    retArray[5] = slices[slicePos];
                    for(let i = 0; i < 3; i++){
                        slicePos++;
                        retArray[i] = slices[slicePos] ? slices[slicePos].match(/%/g) ? parseFloat(slices[slicePos]) / divisor : parseFloat(slices[slicePos]) : 0.0;
                    }
                    // Process for HSL and HWB
                    if (retArray[5].match(/^(?:hsla?|hwba?)/i)) {
                        let sat, light, white, black, hwbFact;
                        let hue = retArray[0] % 360.0;
                        if (hue < 0) hue += 360.0;
                        if (retArray[5].match(/^hsla?/i)) {
                            sat = retArray[1];
                            light = retArray[2];
                            white = 0;
                            hwbFact = 1;
                        } else if (retArray[5].match(/^hwba?/i)) {
                            white = retArray[1];
                            black = retArray[2];
                            if (white + black >= 1) {
                                retArray[0] = retArray[1] = retArray[2] = white / (white + black);
                                retArray[5] = "sRGB";
                                break;
                            }
                            sat = 1.0;
                            light = 0.5;
                            hwbFact = 1.0 - white - black;
                        }
                        function f(n) {
                            let k = (n + hue / 30) % 12;
                            let a = sat * Math.min(light, 1 - light);
                            return light - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
                        }
                        retArray[0] = Math.round(255 * (f(0) * hwbFact + white));
                        retArray[1] = Math.round(255 * (f(8) * hwbFact + white));
                        retArray[2] = Math.round(255 * (f(4) * hwbFact + white));
                        retArray[5] = "sRGB";
                    }
                    break;
            }
            return true;
        } // close parsley sub-function
    }; // close colorRex obj
    //  The main call
    let slicesProc = colorRex.rex.exec(colorString);
    if (slicesProc) {
        retArray[4] = isValid = colorRex.parsley(slicesProc); // set the isValid flag
        return retArray;
    } else {
        isValid = false;
        console.log("colorParsley error: unable to parse string");
        return [
            0,
            0,
            0,
            0,
            isValid,
            "parsleyError"
        ] // throw 'InvalidString'
        ;
    }
}
function $aef6d6276b745fa9$export$ccbcd1deb748941d(rgba = [
    0,
    0,
    0,
    ""
], allow3 = true) {
    let R = Math.round(rgba[0]).toString(16).padStart(2, "0");
    let G = Math.round(rgba[1]).toString(16).padStart(2, "0");
    let B = Math.round(rgba[2]).toString(16).padStart(2, "0");
    let A = rgba[3] == "" || rgba[3] == 1 ? "" : Math.round(rgba[3] * 255).toString(16).padStart(2, "0");
    // this if returns a 3 character hex if possible - aabbcc becomes abc
    if (allow3 && parseInt(A, 16) % 17 == 0 && parseInt(A, 16) % 17 == 0 && parseInt(A, 16) % 17 == 0 && (parseInt(A, 16) % 17 == 0 || A == "")) return R.charAt(0) + G.charAt(0) + B.charAt(0) + A.charAt(0);
    else return R + G + B + A;
}
function $aef6d6276b745fa9$export$5d4ff3be137693a8(rgba = [
    0,
    0,
    0,
    ""
], round = true) {
    if (round) {
        for(let i = 0; i < 3; i++)rgba[i] = Math.round(rgba[i]);
        // while RGB tuples round to int, A needs additional precision
        rgba[3] = rgba[3] == "" || rgba[3] == 1 ? 1 : Math.trunc(rgba[3] * 1000) * 0.001;
    }
    return rgba[3] == "" || rgba[3] == 1 ? "rgb(" + rgba[0] + "," + rgba[1] + "," + rgba[2] + ")" : "rgba(" + rgba[0] + "," + rgba[1] + "," + rgba[2] + "," + rgba[3] + ")";
} /////\  END UTILITIES  ///////////////////////////////////////////////////////
 /////////////////////////////////////////////////////////////////////////////
 ///\                                      //////////////////////////////////////
 ////\                                    //////////////////////////////////////
 /////\  END COLOR PARSLEY 0.1.8  BLOCK  //////////////////////////////////////
 /////////////////////////////////////////////////////////////////////////////

});


parcelRegister("8zUhc", function(module, exports) {

$parcel$export(module.exports, "catmullRom2bezier", () => $63ed3ef3d1583df6$export$b3cf38a9c0750aa5);
$parcel$export(module.exports, "prepareCurve", () => $63ed3ef3d1583df6$export$b3ec39bd0c132afa);
/*
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ const $63ed3ef3d1583df6$var$base3 = (t, p1, p2, p3, p4)=>{
    const t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4;
    const t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
    return t * t2 - 3 * p1 + 3 * p2;
};
const $63ed3ef3d1583df6$export$a2d09daff198aae = (x1, y1, x2, y2, x3, y3, x4, y4, z)=>{
    if (z == null) z = 1;
    z = Math.max(0, Math.min(z, 1));
    const z2 = z / 2;
    const n = 12;
    const Tvalues = [
        -0.1252,
        0.1252,
        -0.3678,
        0.3678,
        -0.5873,
        0.5873,
        -0.7699,
        0.7699,
        -0.9041,
        0.9041,
        -0.9816,
        0.9816
    ];
    const Cvalues = [
        0.2491,
        0.2491,
        0.2335,
        0.2335,
        0.2032,
        0.2032,
        0.1601,
        0.1601,
        0.1069,
        0.1069,
        0.0472,
        0.0472
    ];
    let sum = 0;
    for(let i = 0; i < n; i++){
        const ct = z2 * Tvalues[i] + z2;
        const xbase = $63ed3ef3d1583df6$var$base3(ct, x1, x2, x3, x4);
        const ybase = $63ed3ef3d1583df6$var$base3(ct, y1, y2, y3, y4);
        const comb = xbase * xbase + ybase * ybase;
        sum += Cvalues[i] * Math.sqrt(comb);
    }
    return z2 * sum;
};
const $63ed3ef3d1583df6$export$53db2fef91bd2d1a = (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t)=>{
    const t1 = 1 - t;
    const t12 = t1 * t1;
    const t13 = t12 * t1;
    const t2 = t * t;
    const t3 = t2 * t;
    const x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x;
    const y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y;
    return {
        x: x,
        y: y
    };
};
const $63ed3ef3d1583df6$export$b3cf38a9c0750aa5 = (crp, z)=>{
    const d = [];
    let end = {
        x: +crp[0],
        y: +crp[1]
    };
    for(let i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2){
        const p = [
            {
                x: +crp[i - 2],
                y: +crp[i - 1]
            },
            {
                x: +crp[i],
                y: +crp[i + 1]
            },
            {
                x: +crp[i + 2],
                y: +crp[i + 3]
            },
            {
                x: +crp[i + 4],
                y: +crp[i + 5]
            }
        ];
        if (z) {
            if (!i) p[0] = {
                x: +crp[iLen - 2],
                y: +crp[iLen - 1]
            };
            else if (iLen - 4 === i) p[3] = {
                x: +crp[0],
                y: +crp[1]
            };
            else if (iLen - 2 === i) {
                p[2] = {
                    x: +crp[0],
                    y: +crp[1]
                };
                p[3] = {
                    x: +crp[2],
                    y: +crp[3]
                };
            }
        } else if (iLen - 4 === i) p[3] = p[2];
        else if (!i) p[0] = {
            x: +crp[i],
            y: +crp[i + 1]
        };
        d.push([
            end.x,
            end.y,
            (-p[0].x + 6 * p[1].x + p[2].x) / 6,
            (-p[0].y + 6 * p[1].y + p[2].y) / 6,
            (p[1].x + 6 * p[2].x - p[3].x) / 6,
            (p[1].y + 6 * p[2].y - p[3].y) / 6,
            p[2].x,
            p[2].y
        ]);
        end = p[2];
    }
    return d;
};
const $63ed3ef3d1583df6$var$bezlen2 = (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y)=>{
    const n = 5;
    let x0 = p1x;
    let y0 = p1y;
    let len = 0;
    for(let i = 1; i < n; i++){
        const { x: x, y: y } = $63ed3ef3d1583df6$export$53db2fef91bd2d1a(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, i / n);
        len += Math.hypot(x - x0, y - y0);
        x0 = x;
        y0 = y;
    }
    len += Math.hypot(p2x - x0, p2y - y0);
    return len;
};
const $63ed3ef3d1583df6$export$b3ec39bd0c132afa = (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y)=>{
    const len = Math.floor($63ed3ef3d1583df6$var$bezlen2(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) * 0.75);
    const fs = [];
    let oldi = 0;
    for(let i = 0; i <= len; i++){
        const t = i / len;
        const xy = $63ed3ef3d1583df6$export$53db2fef91bd2d1a(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t);
        const index = Math.round(xy.x);
        fs[index] = xy.y;
        if (index - oldi > 1) {
            const s = fs[oldi];
            const f = fs[index];
            for(let j = oldi + 1; j < index; j++)fs[j] = s + (f - s) / (index - oldi) * (j - oldi);
        }
        oldi = index;
    }
    return (x)=>fs[Math.round(x)] || null;
};

});


parcelRegister("g4Png", function(module, exports) {

$parcel$export(module.exports, "Color", () => $bb44dee3faf91d95$export$892596cec99bc70e);
/*
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ 
var $oZyht = parcelRequire("oZyht");

var $13qG5 = parcelRequire("13qG5");
class $bb44dee3faf91d95$export$892596cec99bc70e {
    constructor({ name: name, colorKeys: colorKeys, colorspace: colorspace = "RGB", ratios: ratios, smooth: smooth = false, output: output = "HEX", saturation: saturation = 100 }){
        this._name = name;
        this._colorKeys = colorKeys;
        this._modifiedKeys = colorKeys;
        this._colorspace = colorspace;
        this._ratios = ratios;
        this._smooth = smooth;
        this._output = output;
        this._saturation = saturation;
        if (!this._name) throw new Error("Color missing name");
        if (!this._colorKeys) throw new Error("Color Keys are undefined");
        if (!(0, $13qG5.colorSpaces)[this._colorspace]) throw new Error(`Colorspace \u{201C}${colorspace}\u{201D} not supported`);
        if (!(0, $13qG5.colorSpaces)[this._output]) throw new Error(`Output \u{201C}${colorspace}\u{201D} not supported`);
        // validate color keys
        for(let i = 0; i < this._colorKeys.length; i++){
            if (!(0, (/*@__PURE__*/$parcel$interopDefault($oZyht))).valid(this._colorKeys[i])) throw new Error(`Invalid Color Key \u{201C}${this._colorKeys[i]}\u{201D}`);
        }
        // Run function to generate this array of colors:
        this._colorScale = null;
    }
    // Setting and getting properties of the Color class
    set colorKeys(colorKeys) {
        this._colorKeys = colorKeys;
        this._updateColorSaturation();
    }
    get colorKeys() {
        return this._colorKeys;
    }
    set saturation(saturation) {
        this._saturation = saturation;
        this._updateColorSaturation();
    }
    get saturation() {
        return this._saturation;
    }
    set colorspace(colorspace) {
        this._colorspace = colorspace;
        this._generateColorScale();
    }
    get colorspace() {
        return this._colorspace;
    }
    set ratios(ratios) {
        this._ratios = ratios;
    }
    get ratios() {
        return this._ratios;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set smooth(smooth) {
        if (smooth === true || smooth === "true") this._smooth = smooth;
        else this._smooth = false;
        this._generateColorScale();
    }
    get smooth() {
        return this._smooth;
    }
    set output(output) {
        this._output = output;
        this._colorScale = null;
    }
    get output() {
        return this._output;
    }
    get colorScale() {
        if (!this._colorScale) this._generateColorScale();
        return this._colorScale;
    }
    _updateColorSaturation() {
        let newColorKeys = [];
        this._colorKeys.forEach((key)=>{
            let currentOklch = (0, (/*@__PURE__*/$parcel$interopDefault($oZyht)))(`${key}`).oklch();
            let currentSaturation = currentOklch[1];
            let newSaturation = currentSaturation * (this._saturation / 100);
            let newOklch = (0, (/*@__PURE__*/$parcel$interopDefault($oZyht))).oklch(currentOklch[0], newSaturation, currentOklch[2]);
            let newColor = (0, (/*@__PURE__*/$parcel$interopDefault($oZyht))).rgb(newOklch).hex();
            newColorKeys.push(newColor);
        });
        // set color keys with new modified array
        this._modifiedKeys = newColorKeys;
        this._generateColorScale();
    }
    _generateColorScale() {
        // This would create 3000 color values based on all parameters
        // and return an array of colors:
        this._colorScale = (0, $13qG5.createScale)({
            swatches: 3000,
            colorKeys: this._modifiedKeys,
            colorspace: this._colorspace,
            shift: 1,
            smooth: this._smooth,
            asFun: true
        });
    }
}

});

parcelRegister("40Ygz", function(module, exports) {

$parcel$export(module.exports, "BackgroundColor", () => $2ec5e927fc1775ae$export$a5eaedcf95d1edc1);
/*
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ 
var $13qG5 = parcelRequire("13qG5");

var $g4Png = parcelRequire("g4Png");
class $2ec5e927fc1775ae$export$a5eaedcf95d1edc1 extends (0, $g4Png.Color) {
    get backgroundColorScale() {
        if (!this._backgroundColorScale) this._generateColorScale();
        return this._backgroundColorScale;
    }
    _generateColorScale() {
        // This would create a 100 color value array based on all parameters,
        // which can be used for sliding lightness as a background color
        // Call original generateColorScale method in the context of our background color
        // Then we can run the code for Color, but we've added in more below.
        (0, $g4Png.Color).prototype._generateColorScale.call(this);
        // create massive scale
        const backgroundColorScale = (0, $13qG5.createScale)({
            swatches: 1000,
            colorKeys: this._colorKeys,
            colorspace: this._colorspace,
            shift: 1,
            smooth: this._smooth
        });
        // Inject original keycolors to ensure they are present in the background options
        backgroundColorScale.push(...this.colorKeys);
        const colorObj = backgroundColorScale// Convert to HSLuv and keep track of original indices
        .map((c, i)=>({
                value: Math.round((0, $13qG5.hsluvArray)(c)[2]),
                index: i
            }));
        const colorObjFiltered = (0, $13qG5.removeDuplicates)(colorObj, "value");
        const bgColorArrayFiltered = colorObjFiltered.map((data)=>backgroundColorScale[data.index]);
        // Manually cap the background array at 100 colors, then add white back to the end
        // since it sometimes gets removed.
        if (bgColorArrayFiltered.length >= 101) {
            bgColorArrayFiltered.length = 100;
            bgColorArrayFiltered.push("#ffffff");
        }
        this._backgroundColorScale = bgColorArrayFiltered.map((color)=>(0, $13qG5.convertColorValue)(color, this._output));
        return this._backgroundColorScale;
    }
}

});

parcelRegister("1C2SD", function(module, exports) {

$parcel$export(module.exports, "Theme", () => $12cb92fb6d073b6c$export$14faa19a0f3bbeb2);
/*
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ 
var $oZyht = parcelRequire("oZyht");

var $13qG5 = parcelRequire("13qG5");

var $40Ygz = parcelRequire("40Ygz");
class $12cb92fb6d073b6c$export$14faa19a0f3bbeb2 {
    constructor({ colors: colors, backgroundColor: backgroundColor, lightness: lightness, contrast: contrast = 1, saturation: saturation = 100, output: output = "HEX", formula: formula = "wcag2" }){
        this._output = output;
        this._colors = colors;
        this._lightness = lightness;
        this._saturation = saturation;
        this._formula = formula;
        this._setBackgroundColor(backgroundColor);
        this._setBackgroundColorValue();
        this._contrast = contrast;
        if (!this._colors) throw new Error("No colors are defined");
        if (!this._backgroundColor) throw new Error("Background color is undefined");
        colors.forEach((color)=>{
            if (!color.ratios) throw new Error(`Color ${color.name}'s ratios are undefined`);
        });
        if (!(0, $13qG5.colorSpaces)[this._output]) throw new Error(`Output \u{201C}${output}\u{201D} not supported`);
        // Only run the update if saturation is set below 100%
        if (this._saturation < 100) this._updateColorSaturation(this._saturation);
        this._findContrastColors();
        this._findContrastColorPairs();
        this._findContrastColorValues();
    }
    set formula(formula) {
        this._formula = formula;
        this._findContrastColors();
    }
    get formula() {
        return this._formula;
    }
    set contrast(contrast) {
        this._contrast = contrast;
        this._findContrastColors();
    }
    get contrast() {
        return this._contrast;
    }
    set lightness(lightness) {
        this._lightness = lightness;
        this._setBackgroundColor(this._backgroundColor);
        this._findContrastColors();
    }
    get lightness() {
        return this._lightness;
    }
    set saturation(saturation) {
        this._saturation = saturation;
        // Update all colors key colors
        this._updateColorSaturation(saturation);
        this._findContrastColors();
    }
    get saturation() {
        return this._saturation;
    }
    set backgroundColor(backgroundColor) {
        this._setBackgroundColor(backgroundColor);
        this._findContrastColors();
    }
    get backgroundColorValue() {
        return this._backgroundColorValue;
    }
    get backgroundColor() {
        return this._backgroundColor;
    }
    // Add a getter and setter for colors
    set colors(colors) {
        this._colors = colors;
        this._findContrastColors();
    }
    get colors() {
        return this._colors;
    }
    // add individual new colors
    set addColor(color) {
        this._colors.push(color);
        this._findContrastColors();
    }
    // remove individual colors
    set removeColor(color) {
        const filteredColors = this._colors.filter((entry)=>{
            return entry.name !== color.name;
        });
        this._colors = filteredColors;
        this._findContrastColors();
    }
    // modify individual colors
    set updateColor(param) {
        // pass arguments in the format updateColor: {color: 'ColorToChange', [propertyToChange]: 'newValue'}
        // eg, changing the name of a color: updateColor: {color: 'blue', name: 'cerulean'}
        // If param is an array, loop through each object, otherwise execute once
        if (Array.isArray(param)) for(let i = 0; i < param.length; i++){
            let currentColor = this._colors.filter((entry)=>{
                return entry.name === param[i].color;
            });
            currentColor = currentColor[0];
            let index = this._colors.indexOf(currentColor);
            const filteredColors = this._colors.filter((entry)=>{
                return entry.name !== param[i].color;
            });
            if (param[i].name) currentColor.name = param[i].name;
            if (param[i].colorKeys) currentColor.colorKeys = param[i].colorKeys;
            if (param[i].ratios) currentColor.ratios = param[i].ratios;
            if (param[i].colorspace) currentColor.colorspace = param[i].colorspace;
            if (param[i].smooth) currentColor.smooth = param[i].smooth;
            // call _generateColorScale to ensure scale is updated with new params
            currentColor._generateColorScale();
            // Add the updated color into the filtered array at original index
            filteredColors.splice(index, 0, currentColor);
            this._colors = filteredColors;
        }
        else {
            let currentColor = this._colors.filter((entry)=>{
                return entry.name === param.color;
            });
            currentColor = currentColor[0];
            let index = this._colors.indexOf(currentColor);
            const filteredColors = this._colors.filter((entry)=>{
                return entry.name !== param.color;
            });
            if (param.name) currentColor.name = param.name;
            if (param.colorKeys) currentColor.colorKeys = param.colorKeys;
            if (param.ratios) currentColor.ratios = param.ratios;
            if (param.colorspace) currentColor.colorspace = param.colorspace;
            if (param.smooth) currentColor.smooth = param.smooth;
            // call _generateColorScale to ensure scale is updated with new params
            currentColor._generateColorScale();
            // Add the updated color into the filtered array at original index
            filteredColors.splice(index, 0, currentColor);
            this._colors = filteredColors;
        }
        this._findContrastColors();
    }
    set output(output) {
        this._output = output;
        this._colors.forEach((element)=>{
            element.output = this._output;
        });
        this._backgroundColor.output = this._output;
        this._findContrastColors();
    }
    get output() {
        return this._output;
    }
    get contrastColors() {
        return this._contrastColors;
    }
    get contrastColorPairs() {
        return this._contrastColorPairs;
    }
    get contrastColorValues() {
        return this._contrastColorValues;
    }
    _setBackgroundColor(backgroundColor) {
        if (typeof backgroundColor === "string") {
            // If it's a string, convert to Color object and assign lightness.
            const newBackgroundColor = new (0, $40Ygz.BackgroundColor)({
                name: "background",
                colorKeys: [
                    backgroundColor
                ],
                output: "RGB"
            });
            const calcLightness = (0, $13qG5.round)((0, (/*@__PURE__*/$parcel$interopDefault($oZyht)))(String(backgroundColor)).hsluv()[2]);
            this._backgroundColor = newBackgroundColor;
            this._lightness = calcLightness;
            this._backgroundColorValue = newBackgroundColor[this._lightness];
        } else {
            backgroundColor.output = "RGB";
            const calcBackgroundColorValue = backgroundColor.backgroundColorScale[this._lightness];
            this._backgroundColor = backgroundColor;
            this._backgroundColorValue = calcBackgroundColorValue;
        }
    }
    _setBackgroundColorValue() {
        this._backgroundColorValue = this._backgroundColor.backgroundColorScale[this._lightness];
    }
    _updateColorSaturation(saturation) {
        this._colors.map((color)=>{
            color.saturation = saturation;
        });
    }
    _findContrastColors() {
        const bgRgbArray = (0, (/*@__PURE__*/$parcel$interopDefault($oZyht)))(String(this._backgroundColorValue)).rgb();
        const baseV = this._lightness / 100;
        const convertedBackgroundColorValue = (0, $13qG5.convertColorValue)(this._backgroundColorValue, this._output);
        const baseObj = {
            background: convertedBackgroundColorValue
        };
        const returnColors = []; // Array to be populated with JSON objects for each color, including names & contrast values
        const returnColorValues = []; // Array to be populated with flat list of all color values
        const returnColorPairs = {
            ...baseObj
        }; // Objext to be populated with flat list of all color values as named key-value pairs
        returnColors.push(baseObj);
        this._colors.map((color)=>{
            if (color.ratios !== undefined) {
                let swatchNames;
                const newArr = [];
                const colorObj = {
                    name: color.name,
                    values: newArr
                };
                let ratioValues;
                if (Array.isArray(color.ratios)) ratioValues = color.ratios;
                else if (!Array.isArray(color.ratios)) {
                    swatchNames = Object.keys(color.ratios);
                    ratioValues = Object.values(color.ratios);
                }
                // modify target ratio based on contrast multiplier
                ratioValues = ratioValues.map((ratio)=>(0, $13qG5.multiplyRatios)(+ratio, this._contrast));
                const contrastColors = (0, $13qG5.searchColors)(color, bgRgbArray, baseV, ratioValues, this._formula).map((clr)=>(0, $13qG5.convertColorValue)(clr, this._output));
                for(let i = 0; i < contrastColors.length; i++){
                    let n;
                    if (!swatchNames) {
                        const rVal = (0, $13qG5.ratioName)(color.ratios, this._formula)[i];
                        n = color.name.concat(rVal).replace(/\s+/g, ""); // concat with ratio name and remove any spaces from original name
                    } else n = swatchNames[i];
                    const obj = {
                        name: n,
                        contrast: ratioValues[i],
                        value: contrastColors[i]
                    };
                    newArr.push(obj);
                    // Push the same values to the returnColorPairs object
                    returnColorPairs[n] = contrastColors[i];
                    // Push the same value to the returnColorValues array
                    returnColorValues.push(contrastColors[i]);
                }
                returnColors.push(colorObj);
            }
            return null;
        });
        this._contrastColorValues = returnColorValues;
        this._contrastColorPairs = returnColorPairs;
        this._contrastColors = returnColors;
        return this._contrastColors;
    }
    _findContrastColorPairs() {
        return this._contrastColorPairs;
    }
    _findContrastColorValues() {
        return this._contrastColorValues;
    }
}

});



//# sourceMappingURL=tools.7548764c.js.map
