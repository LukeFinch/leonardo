
function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
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
parcelRegister("be61U", function(module, exports) {
/**
 *  Copyright 2018 Adobe. All rights reserved.
 *  This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License. You may obtain a copy
 *  of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software distributed under
 *  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *  OF ANY KIND, either express or implied. See the License for the specific language
 *  governing permissions and limitations under the License.
 */ // Provides explicit indication of elements receiving focus through keyboard interaction rather than mouse or touch.
(function(doc) {
    // In case file is imported in SSR context, don't polyfill anything
    if (!doc) return;
    var NAVIGATION_KEYS = [
        "Tab",
        "ArrowUp",
        "ArrowRight",
        "ArrowDown",
        "ArrowLeft",
        "Home",
        "End",
        "PageUp",
        "PageDown",
        "Enter",
        " ",
        "Escape",
        /* IE9 and Firefox < 37 */ "Up",
        "Right",
        "Down",
        "Left",
        "Esc"
    ];
    var TEXT_INPUT_TYPES = [
        "text",
        "date",
        "datetime-local",
        "email",
        "month",
        "number",
        "password",
        "search",
        "tel",
        "time",
        "url",
        "week"
    ];
    var keyboardFocus = false;
    var elements = doc.getElementsByClassName("focus-ring");
    function onKeydownHandler(event) {
        if (event.ctrlKey || event.altKey || event.metaKey || NAVIGATION_KEYS.indexOf(event.key) === -1) return;
        keyboardFocus = true;
        if (doc.activeElement && doc.activeElement !== doc.body && doc.activeElement.tagName !== "TEXTAREA" && !(doc.activeElement.tagName === "INPUT" && TEXT_INPUT_TYPES.indexOf(doc.activeElement.type) !== -1)) doc.activeElement.classList.add("focus-ring");
    }
    function onMousedownHandler() {
        keyboardFocus = false;
        for(var i = 0; i < elements.length; i++)elements[i].classList.remove("focus-ring");
    }
    function onFocusHandler(event) {
        var classList = event.target.classList;
        if (classList && keyboardFocus) classList.add("focus-ring");
    }
    function onBlurHandler(event) {
        var classList = event.target.classList;
        classList && classList.remove("focus-ring");
    }
    doc.addEventListener("keydown", onKeydownHandler, true);
    doc.addEventListener("mousedown", onMousedownHandler, true);
    doc.addEventListener("focus", onFocusHandler, true);
    doc.addEventListener("blur", onBlurHandler, true);
})(typeof window === "undefined" ? undefined : document);

});

parcelRegister("jzSuI", function(module, exports) {
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ function $e40b8eaa244dec6e$var$pageLoader() {
    const loader = document.getElementById("pageLoader");
    const page = document.getElementById("page");
    setTimeout(()=>{
        page.style.opacity = 1;
    }, 50);
    setTimeout(()=>{
        loader.style.opacity = 0;
        setTimeout(()=>{
            loader.remove();
        }, 150);
    }, 1000);
}
module.exports = {
    pageLoader: $e40b8eaa244dec6e$var$pageLoader
};

});

parcelRegister("lPtXq", function(module, exports) {
/*
Copyright 2018 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ // UMD pattern via umdjs
(function(root, factory) {
    if (typeof define === "function" && define.amd) // AMD
    define([], factory);
    else if (0, module.exports) // CommonJS-like
    module.exports = factory();
    else // Browser
    root.loadIcons = factory();
})(typeof self !== "undefined" ? self : module.exports, function() {
    function handleError(string) {
        string = "loadIcons: " + string;
        var error = new Error(string);
        console.error(error.toString());
        if (typeof callback === "function") callback(error);
    }
    function injectSVG(svgURL, callback1) {
        var error;
        // 200 for web servers, 0 for CEP panels
        if (this.status !== 200 && this.status !== 0) {
            handleError("Failed to fetch icons, server returned " + this.status);
            return;
        }
        // Parse the SVG
        var parser = new DOMParser();
        try {
            var doc = parser.parseFromString(this.responseText, "image/svg+xml");
            var svg = doc.firstChild;
        } catch (err) {
            handleError("Error parsing SVG: " + err);
            return;
        }
        // Make sure a real SVG was returned
        if (svg && svg.tagName === "svg") {
            // Hide the element
            svg.style.display = "none";
            svg.setAttribute("data-url", svgURL);
            // Insert it into the head
            document.head.insertBefore(svg, null);
            // Pass the SVG to the callback
            if (typeof callback1 === "function") callback1(null, svg);
        } else handleError("Parsed SVG document contained something other than an SVG");
    }
    function loadIcons(svgURL, callback1) {
        // Request the SVG sprite
        var req = new XMLHttpRequest();
        req.open("GET", svgURL, true);
        req.addEventListener("load", injectSVG.bind(req, svgURL, callback1));
        req.addEventListener("error", function(event) {
            handleError("Request failed");
        });
        req.send();
    }
    return loadIcons;
});

});

parcelRegister("6A7nx", function(module, exports) {
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ 
var $dlNIw = parcelRequire("dlNIw");

var $5mszC = parcelRequire("5mszC");

var $j4T26 = parcelRequire("j4T26");

var $oZyht = parcelRequire("oZyht");

var $66fty = parcelRequire("66fty");
var $4cabd41a33da101c$require$extendChroma = $66fty.extendChroma;

var $8oHP0 = parcelRequire("8oHP0");
$4cabd41a33da101c$require$extendChroma($oZyht);
window.chroma = $oZyht;
function $4cabd41a33da101c$var$randomId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(2, 10);
}
function $4cabd41a33da101c$var$throttle(func, wait) {
    var timerId, lastRan;
    return function throttled() {
        var context = this;
        var args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(timerId);
            timerId = setTimeout(function() {
                if (Date.now() - lastRan >= wait) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, wait - (Date.now() - lastRan) || 0);
        }
    };
}
function $4cabd41a33da101c$var$camelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, "");
}
function $4cabd41a33da101c$var$convertToCartesian(s, h, clamp) {
    if (clamp) {
        if (s > 100) s = 100;
    }
    // convert degrees to radians
    let hRad = h * Math.PI / 180;
    let xAxis = s * Math.cos(hRad);
    let yAxis = s * Math.sin(hRad);
    return {
        x: xAxis,
        y: yAxis
    };
}
function $4cabd41a33da101c$var$filterNaN(x) {
    if (isNaN(x) || x === undefined) return 0;
    else return x;
}
function $4cabd41a33da101c$var$removeElementsByClass(className, parent) {
    let elements;
    if (!parent) elements = document.getElementsByClassName(className);
    else elements = parent.getElementsByClassName(className);
    while(elements.length > 0)elements[0].parentNode.removeChild(elements[0]);
}
function $4cabd41a33da101c$var$round(x, n = 0) {
    const ten = 10 ** n;
    return Math.round(x * ten) / ten;
}
const $4cabd41a33da101c$var$lerp = (x, y, a)=>x * (1 - a) + y * a;
// Helper function for rounding color values to whole numbers
// Copied directly from contrast-colors. For some reason it would
// not import properly.
const $4cabd41a33da101c$var$colorSpaces = {
    CAM02: "jab",
    CAM02p: "jch",
    HEX: "hex",
    HSL: "hsl",
    HSLuv: "hsluv",
    HSV: "hsv",
    LAB: "lab",
    LCH: "lch",
    RGB: "rgb"
};
function $4cabd41a33da101c$var$cssColorToRgb(colorString) {
    let colorStringArr, newColor, inputFormat;
    if (colorString.match(/^hsl\(/)) inputFormat = "hsl";
    if (colorString.match(/^hsv\(/)) inputFormat = "hsv";
    if (colorString.match(/^lab\(/)) inputFormat = "lab";
    if (colorString.match(/^lch\(/)) inputFormat = "lch";
    if (colorString.match(/^jab\(/)) inputFormat = "jab";
    if (colorString.match(/^jch\(/)) inputFormat = "jch";
    if (colorString.match(/^hsluv\(/)) inputFormat = "hsluv";
    if (!colorString) console.warn(`Cannot convert css color of ${colorString}`);
    else {
        let colorStringNums = colorString.match(/\(.*?\)/g).toString().replace("(", "").replace(")", "").replaceAll("%", "").replace("deg", "").trim(); // find numbers only
        colorStringArr = colorStringNums.split(","); // split numbers into array
        colorStringArr = colorStringArr.map((c)=>{
            return $4cabd41a33da101c$var$filterNaN(Number(c));
        });
        let c1 = colorStringArr[0];
        let c2 = inputFormat === "hsl" ? colorStringArr[1] / 100 : colorStringArr[1];
        let c3 = inputFormat === "hsl" ? colorStringArr[2] / 100 : colorStringArr[2];
        newColor = $oZyht(c1, c2, c3, inputFormat);
        return newColor.hex();
    }
}
window.bulkConvertColorValue = $4cabd41a33da101c$var$bulkConvertColorValue;
function $4cabd41a33da101c$var$bulkConvertColorValue(colors, format, object = false) {
    let formatted = [];
    for(let i = 0; i < colors.length; i++)formatted.push($4cabd41a33da101c$var$convertColorValue(colors[i], format, object));
    return formatted;
}
window.getAllChannelValues = $4cabd41a33da101c$var$getAllChannelValues;
function $4cabd41a33da101c$var$getAllChannelValues(colors, format, key) {
    const array = $4cabd41a33da101c$var$bulkConvertColorValue(colors, format, true);
    let permittedValues = array.map((value)=>value[key]);
    return permittedValues;
}
window.convertColorValue = $4cabd41a33da101c$var$convertColorValue;
function $4cabd41a33da101c$var$convertColorValue(color, format, object = false) {
    if (!color) throw new Error(`Cannot convert color value of \u{201C}${color}\u{201D}`);
    if (!$4cabd41a33da101c$var$colorSpaces[format]) throw new Error(`Cannot convert to colorspace \u{201C}${format}\u{201D}`);
    const space = $4cabd41a33da101c$var$colorSpaces[format];
    const colorObj = $oZyht(String(color))[space]();
    if (format === "HSL") colorObj.pop();
    if (format === "HEX") {
        if (object) {
            const rgb = $oZyht(String(color)).rgb();
            return {
                r: rgb[0],
                g: rgb[1],
                b: rgb[2]
            };
        }
        return colorObj;
    }
    const colorObject = {};
    let newColorObj = colorObj.map($4cabd41a33da101c$var$filterNaN);
    newColorObj = newColorObj.map((ch, i)=>{
        let rnd = $4cabd41a33da101c$var$round(ch);
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
                colorObject[letter] = $4cabd41a33da101c$var$round(ch, 2);
                if (!object) {
                    rnd = $4cabd41a33da101c$var$round(ch * 100);
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
function $4cabd41a33da101c$var$makePowScale(exp = 1, domains = [
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
function $4cabd41a33da101c$var$removeDuplicates(originalArray, prop) {
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
function $4cabd41a33da101c$var$findMatchingLuminosity(colorScale, colorLen, luminosities, smooth) {
    const colorSearch = (x)=>{
        const first = smooth ? $oZyht(colorScale(0)).hsluv()[2] : colorScale(0).hsluv()[2];
        const last = smooth ? $oZyht(colorScale(colorLen)).hsluv()[2] : colorScale(colorLen).hsluv()[2];
        const dir = first < last ? 1 : -1;
        const \u03B5 = 0.01;
        x += 0.005 * Math.sign(x);
        let step = colorLen / 2;
        let dot = step;
        let val = smooth ? $oZyht(colorScale(dot)).hsluv()[2] : colorScale(dot).hsluv()[2];
        let counter = 100;
        while(Math.abs(val - x) > \u03B5 && counter){
            counter--;
            step /= 2;
            if (val < x) dot += step * dir;
            else dot -= step * dir;
            val = smooth ? $oZyht(colorScale(dot)).hsluv()[2] : colorScale(dot).hsluv()[2];
        }
        return $4cabd41a33da101c$var$round(dot, 3);
    };
    const outputColors = [];
    luminosities.forEach((lum)=>{
        if (smooth) {
            let findColor = colorScale(colorSearch(+lum));
            outputColors.push($oZyht(findColor).hex());
        } else outputColors.push(colorScale(colorSearch(+lum)).hex());
    });
    return outputColors;
}
function $4cabd41a33da101c$var$getColorDifference(color1, color2) {
    // pre-formatting and running through specific deltaE formula
    let c1 = $oZyht(color1).lab();
    let c2 = $oZyht(color2).lab();
    let c1Lab = {
        L: c1[0],
        A: c1[1],
        B: c1[2]
    };
    let c2Lab = {
        L: c2[0],
        A: c2[1],
        B: c2[2]
    };
    // Use DeltaE 2000 formula (latest)
    return $8oHP0.getDeltaE00(c1Lab, c2Lab);
}
function $4cabd41a33da101c$var$groupCommonHues(colors) {
    // colors are in put as an array of Chroma.js colors.
    // Then, find the colors that are similar, and place them
    // into a sub-array.
    // EXAMPLE: ['yellow', 'lightyellow', 'blue', 'green', 'lightgreen']
    // should become: [ ['yellow', 'lightyellow'], ['blue'], ['green', 'lightgreen'] ]
    // First, resort colors by hue
    let orderedColors = $4cabd41a33da101c$var$orderColors(colors, "hue", "saturation");
    // Acceptable difference in hues
    const hueGroupThreshold = 22; // 10
    const hueThreshold = 22; // 10
    const colorDifferenceMin = 16;
    const colorDifferenceMax = 100;
    // Filter colors with lightness darker than 8,
    // and chroma greater than 40
    // as darker colors are less clearly identifiable.
    const minChroma = 30;
    const minLuma = 8;
    let filteredColors = [];
    for(let i = 0; i < colors.length; i++){
        if ($oZyht(orderedColors[i]).lch()[1] > minChroma && $oZyht(orderedColors[i]).lch()[0] > minLuma) filteredColors.push(orderedColors[i]);
        else continue;
    }
    // Create new array, bucketing similar hues within sub-arrays
    let bucketedColors = [];
    for(let i = 0; i < filteredColors.length; i++){
        const lastIndex = i === 0 ? filteredColors.length - 1 : i - 1;
        const currentColor = filteredColors[i];
        const lastColor = filteredColors[lastIndex];
        const hueDiff = $oZyht(currentColor).jch()[2] - $oZyht(lastColor).jch()[2];
        if (hueDiff < 0) hueDiff = hueDiff * -1;
        if (hueDiff >= hueGroupThreshold || bucketedColors.length === 0) {
            const newArr = [];
            newArr.push(currentColor);
            bucketedColors.push(newArr);
        // console.log(`Adding new array with color ${currentColor}`)
        }
        // Find the right bucket to place the color if it's within the hue threshold
        if (hueDiff < hueGroupThreshold && bucketedColors.length > 0) // Loop the bucketed colors
        for(let z = 0; z < bucketedColors.length; z++){
            const currentBucket = bucketedColors[z];
            let colorDiffs = currentBucket.map((color)=>{
                return $4cabd41a33da101c$var$getColorDifference(color, currentColor);
            });
            let hueDiffs = currentBucket.map((color)=>{
                return $oZyht(currentColor).jch()[2] - $oZyht(color).jch()[2];
            });
            let minHueDiff = Math.min(...hueDiffs);
            let minDiff = Math.min(...colorDiffs);
            let maxDiff = Math.max(...colorDiffs);
            // if minimum color difference of currentColor, when compared to all colors of
            // the current bucket..
            if (minDiff > colorDifferenceMin && maxDiff < colorDifferenceMax && minHueDiff <= hueThreshold) currentBucket.push(currentColor);
        }
    }
    // // FOR DEBUGGING ONLY
    // for(let i = 0; i < bucketedColors.length; i++) {
    //   let bucket = bucketedColors[i];
    //   console.log('BUCKETED COLORS:')
    //   bucket.forEach((color) => {console.color(color)})
    // }
    return bucketedColors;
}
function $4cabd41a33da101c$var$getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
/**
 *  Helper function to order colors
 *  by hue and lightness
 */ function $4cabd41a33da101c$var$orderColors(colors, priority1, priority2, random = false) {
    let validOptions = [
        "hue",
        "saturation",
        "lightness"
    ];
    for(let i = 0; i < validOptions.length; i++){
        if (!validOptions.includes(priority1)) console.warn(`${priority1} is not a valid option of ${validOptions}`);
        if (priority2) {
            if (!validOptions.includes(priority2)) console.warn(`${priority1} is not a valid option of ${validOptions}`);
        }
    }
    // for each color, convert to lch object
    let colorsJch = colors.map((color, i)=>{
        let jch = $oZyht(color).jch();
        return {
            hue: Math.floor(jch[2]),
            saturation: Math.floor(jch[1]),
            lightness: Math.floor(jch[0]),
            color: color,
            index: i
        };
    });
    let sorted;
    if (priority2) // Sort by priority 1, then by priority 1
    sorted = colorsJch.sort((a, b)=>a[priority1] > b[priority1] ? 1 : a[priority1] === b[priority1] ? a[priority2] > b[priority2] ? 1 : -1 : -1);
    else sorted = colorsJch.sort((a, b)=>a[priority1] > b[priority1] ? 1 : -1);
    // Create random "starting point" for hues
    // Only useful in CVD scenario
    if (random) {
        if (priority1 === "hue") {
            let randomIndex = $4cabd41a33da101c$var$getRandomInt(sorted.length);
            let firstHalf = sorted.splice(0, randomIndex);
            let secondHalf = sorted.splice(randomIndex);
            sorted = secondHalf.concat(firstHalf);
        }
    }
    const orderedColors = sorted.map((object)=>{
        return object.color;
    });
    return orderedColors;
}
function $4cabd41a33da101c$var$shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle...
    while(currentIndex != 0){
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex]
        ];
    }
    return array;
}
function $4cabd41a33da101c$var$createColorData(color, mode) {
    const f = $4cabd41a33da101c$var$getChannelsAndFunction(mode);
    const method = (d)=>$dlNIw[f.func](d);
    let dataA = color.map(function(d) {
        let channelValue = method(d)[f.c1];
        // Need to do some geometry for polar colorspaces
        if (mode === "CAM02p" || mode === "LCH" || mode === "HSL" || mode === "HSV" || mode === "HSLuv") {
            let s = mode === "HSL" || mode === "HSV" ? method(d)[f.c2] * 100 : method(d)[f.c2];
            let h = channelValue;
            return $4cabd41a33da101c$var$filterNaN($4cabd41a33da101c$var$convertToCartesian(s, h).x);
        } else return $4cabd41a33da101c$var$filterNaN(channelValue);
    });
    let dataB = color.map(function(d) {
        let channelValue = method(d)[f.c3];
        if (mode === "HSL" || mode === "HSV") channelValue = channelValue * 100;
        return $4cabd41a33da101c$var$filterNaN(channelValue);
    });
    let dataC = color.map(function(d) {
        let channelValue = method(d)[f.c2];
        // Need to do some geometry for polar colorspaces
        if (mode === "CAM02p" || mode === "LCH" || mode === "HSL" || mode === "HSV" || mode === "HSLuv") {
            let s = mode === "HSL" || mode === "HSV" ? channelValue * 100 : channelValue;
            let h = method(d)[f.c1];
            return $4cabd41a33da101c$var$filterNaN($4cabd41a33da101c$var$convertToCartesian(s, h).y);
        }
        return $4cabd41a33da101c$var$filterNaN(channelValue);
    });
    return {
        a: dataA,
        b: dataB,
        c: dataC
    };
}
function $4cabd41a33da101c$var$getChannelsAndFunction(mode) {
    let c1, c2, c3, func, yMin, yMax, yMin2, yMax2, c1Label, c2Label, c3Label;
    if (mode === "RGB") {
        func = "hsl";
        c1 = 0;
        c1Label = `Hue (HSL - H)`;
        c2 = 1;
        c2Label = `Saturation (HSL - S)`;
        c3 = 2;
        c3Label = `Lightness (${mode} - L)`;
        yMin = 0;
        yMax = 360;
        yMin2 = 0;
        yMax2 = 1;
    }
    if (mode === "LAB") {
        func = "lab";
        c1 = 1;
        c1Label = `Redness / Greenness (${mode} - A)`;
        c2 = 2;
        c2Label = `Blueness / Yellowness (${mode} - B)`;
        c3 = 0;
        c3Label = `Lightness (${mode} - L)`;
    }
    if (mode === "LCH") {
        func = "lch";
        c1 = 2;
        c1Label = `Hue (${mode} - H)`;
        c2 = 1;
        c2Label = `Chroma (${mode} - C)`;
        c3 = 0;
        c3Label = `Lightness (${mode} - L)`;
        yMin = 0;
        yMax = 360;
    }
    if (mode === "OKLAB") {
        func = "oklab";
        c1 = 1;
        c1Label = `Redness / Greenness (${mode} - A)`;
        c2 = 2;
        c2Label = `Blueness / Yellowness (${mode} - B)`;
        c3 = 0;
        c3Label = `Lightness (${mode} - L)`;
    }
    if (mode === "OKLCH") {
        func = "oklch";
        c1 = 2;
        c1Label = `Hue (${mode} - H)`;
        c2 = 1;
        c2Label = `Chroma (${mode} - C)`;
        c3 = 0;
        c3Label = `Lightness (${mode} - L)`;
        yMin = 0;
        yMax = 360;
        yMax2 = 0.322;
    }
    if (mode === "CAM02") {
        func = "jab";
        c1 = 1;
        c1Label = `Redness / Greenness (${mode} - A)`;
        c2 = 2;
        c2Label = `Blueness / Yellowness (${mode} - B)`;
        c3 = 0;
        c3Label = `Lightness (${mode} - J)`;
    }
    if (mode === "CAM02p") {
        func = "jch";
        c1 = 2;
        c1Label = `Hue (CAM02 (Ch) - H)`;
        c2 = 1;
        c2Label = `Chroma (CAM02 (Ch) - C)`;
        c3 = 0;
        c3Label = `Lightness (${mode} - J)`;
        yMin = 0;
        yMax = 360;
    }
    if (mode === "HSL") {
        func = "hsl";
        c1 = 0;
        c1Label = `Hue (${mode} - H)`;
        c2 = 1;
        c2Label = `Saturation (${mode} - S)`;
        c3 = 2;
        c3Label = `Lightness (${mode} - L)`;
        yMin = 0;
        yMax = 360;
        yMin2 = 0;
        yMax2 = 1;
    }
    if (mode === "HSLuv") {
        func = "hsluv";
        c1 = 0;
        c1Label = `Hue (${mode} - H)`;
        c2 = 1;
        c2Label = `Saturation (${mode} - S)`;
        c3 = 2;
        c3Label = `Lightness (${mode} - L)`;
        yMin = 0;
        yMax = 360;
        yMin2 = 0;
        yMax2 = 100;
    }
    if (mode === "HSV") {
        func = "hsv";
        c1 = 0;
        c1Label = `Hue (${mode} - H)`;
        c2 = 1;
        c2Label = `Saturation (${mode} - S)`;
        c3 = 2;
        c3Label = `Value (${mode} - V)`;
        yMin = 0;
        yMax = 360;
        yMin2 = 0;
        yMax2 = 1;
    }
    return {
        func: func,
        c1: c1,
        c2: c2,
        c3: c3,
        c1Label: c1Label,
        c2Label: c2Label,
        c3Label: c3Label,
        yMin: yMin,
        yMax: yMax,
        yMin2: yMin2,
        yMax2: yMax2
    };
}
function $4cabd41a33da101c$var$capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function $4cabd41a33da101c$var$orderColorsByLuminosity(colors, direction = "toLight") {
    // 'toLight' or 'toDark'
    let luminosities = colors.map((color, index)=>{
        return {
            color: color,
            luminosity: $dlNIw.hsluv(color).v
        };
    });
    if (direction === "toLight") {
        luminosities.sort((a, b)=>a.luminosity < b.luminosity ? 1 : -1);
        return luminosities.map((c)=>c.color);
    }
    if (direction === "toDark") {
        luminosities.sort((a, b)=>a.luminosity < b.luminosity ? -1 : 1);
        return luminosities.map((c)=>c.color);
    } else console.warn(`Direction must be of value 'toLight' or 'toDark'`);
}
// Artificially create a semi-chromatic tone based on the
// hue of the lightest color key (each scale) and the
// luminosity of the midpoint. This helps to create
// a transition between each scale at the midpoint, rather
// than a sharp midpoint.
function $4cabd41a33da101c$var$createEquiLuminantKey(middleKey, colorKeys) {
    let luminance = $dlNIw.jch(middleKey).J;
    let sorted = $4cabd41a33da101c$var$orderColorsByLuminosity(colorKeys, "toLight");
    let lightestColor = sorted[0];
    let hue = $dlNIw.jch(lightestColor).h;
    let chroma = 8;
    let newColor = $dlNIw.jch(luminance, chroma, hue).formatHex();
    return newColor;
}
/**
 *  Helper function to reformat colors as an object
 *  to pass through the simulator. Returns colors in RGB
 *
 *  works as expected:
 *  console.log(simulateCvd('rgb(120, 50, 30)', 'protanopia'))
 *  returns {r: 62, g: 62, b: 30}
 */ function $4cabd41a33da101c$var$simulateCvd(color, deficiency, lib = "color-blind") {
    if (!color) console.warn(`${color} is invalid`);
    let cRgb = $oZyht(color).rgb();
    let c = {
        r: cRgb[0],
        g: cRgb[1],
        b: cRgb[2]
    };
    let sim, simRgb;
    /* Added conditions so that I can easily swap between CVD simulation
   * libraries. This is helpful to see any discrepancies between
   * the resulting simulation colors.
   *
   * Note: color-blind library is closer in alignment with Sim Daltonism,
   * color-blindness.com and other online simulators.
   */ if (lib === "bjornlu") {
        sim = (0, $5mszC.simulate)(c, deficiency);
        simRgb = $oZyht.rgb(sim.r, sim.g, sim.b).hex();
    } else if (lib === "color-blind") {
        if (deficiency === "deuteranopia") sim = $j4T26.deuteranopia($oZyht(color).hex());
        if (deficiency === "protanopia") sim = $j4T26.protanopia($oZyht(color).hex());
        if (deficiency === "tritanopia") sim = $j4T26.tritanopia($oZyht(color).hex());
        if (deficiency === "achromatopsia") sim = $j4T26.achromatopsia($oZyht(color).hex());
        simRgb = sim;
    }
    return simRgb;
}
/**
 *  Note: returns unexpected result.
 *  Should be 61.16740074680422
 *  when passing:
 *  let colorRgb1 = 'rgb(173, 2, 22)';
 *  let colorRgb2 = 'rgb(255, 222, 65)';
 *  console.log(getDifference(colorRgb1, colorRgb2));
 *  Returns 62.725336807388025
 *
 *  May be chroma.js Lab conversion rounding
 *  as those RGB values do not come to whole numbers
 *  in Lab color space.
 */ function $4cabd41a33da101c$var$getDifference(color1, color2) {
    // pre-formatting and running through specific deltaE formula
    let c1 = $oZyht(color1).lab();
    let c2 = $oZyht(color2).lab();
    let c1Lab = {
        L: c1[0],
        A: c1[1],
        B: c1[2]
    };
    let c2Lab = {
        L: c2[0],
        A: c2[1],
        B: c2[2]
    };
    // Use DeltaE 2000 formula (latest)
    return $8oHP0.getDeltaE00(c1Lab, c2Lab);
}
/**
 * Function for blending a translucent color with its background
 * This is an appropriate method for identifying resulting color
 * value to calculate contrast from
 */ function $4cabd41a33da101c$var$alphaBlend(color1, color2) {
    color1 = $oZyht(color1);
    color2 = $oZyht(color2);
    let c1 = color1.rgba();
    let c2 = color2.rgb();
    let r1, g1, b1, a1;
    let r2, g2, b2;
    r1 = c1[0];
    g1 = c1[1];
    b1 = c1[2];
    a1 = c1[3];
    r2 = c2[0];
    g2 = c2[1];
    b2 = c2[2];
    let r3 = r2 + (r1 - r2) * a1;
    let g3 = g2 + (g1 - g2) * a1;
    let b3 = b2 + (b1 - b2) * a1;
    let c3 = [
        r3,
        g3,
        b3
    ];
    return $oZyht(c3);
}
function $4cabd41a33da101c$var$colorToGrayScale(color) {
    let c = $oZyht(color).lch();
    let newC = $oZyht.lch(c[0], 0, c[2]);
    return newC.hex();
}
function $4cabd41a33da101c$var$getLightness(color) {
    let c = $oZyht(color).lch();
    return c[0];
}
function $4cabd41a33da101c$var$colorPickerInput(e) {
    if (e !== undefined) {
        let id = e.target.id;
        let inputId = id.replace("_picker", "Input");
        let value = e.target.value;
        let color = $oZyht(value);
        let input = document.getElementById(inputId);
        input.value = $oZyht(color).hex();
        input.dispatchEvent(new Event("input"));
    }
}
module.exports = {
    randomId: $4cabd41a33da101c$var$randomId,
    throttle: $4cabd41a33da101c$var$throttle,
    convertToCartesian: $4cabd41a33da101c$var$convertToCartesian,
    filterNaN: $4cabd41a33da101c$var$filterNaN,
    camelCase: $4cabd41a33da101c$var$camelCase,
    makePowScale: $4cabd41a33da101c$var$makePowScale,
    removeDuplicates: $4cabd41a33da101c$var$removeDuplicates,
    createEquiLuminantKey: $4cabd41a33da101c$var$createEquiLuminantKey,
    round: $4cabd41a33da101c$var$round,
    convertColorValue: $4cabd41a33da101c$var$convertColorValue,
    bulkConvertColorValue: $4cabd41a33da101c$var$bulkConvertColorValue,
    getAllChannelValues: $4cabd41a33da101c$var$getAllChannelValues,
    findMatchingLuminosity: $4cabd41a33da101c$var$findMatchingLuminosity,
    lerp: $4cabd41a33da101c$var$lerp,
    getLightness: $4cabd41a33da101c$var$getLightness,
    colorToGrayScale: $4cabd41a33da101c$var$colorToGrayScale,
    cssColorToRgb: $4cabd41a33da101c$var$cssColorToRgb,
    removeElementsByClass: $4cabd41a33da101c$var$removeElementsByClass,
    getColorDifference: $4cabd41a33da101c$var$getColorDifference,
    groupCommonHues: $4cabd41a33da101c$var$groupCommonHues,
    capitalizeFirstLetter: $4cabd41a33da101c$var$capitalizeFirstLetter,
    createColorData: $4cabd41a33da101c$var$createColorData,
    orderColors: $4cabd41a33da101c$var$orderColors,
    alphaBlend: $4cabd41a33da101c$var$alphaBlend,
    simulateCvd: $4cabd41a33da101c$var$simulateCvd,
    getDifference: $4cabd41a33da101c$var$getDifference,
    getChannelsAndFunction: $4cabd41a33da101c$var$getChannelsAndFunction,
    orderColorsByLuminosity: $4cabd41a33da101c$var$orderColorsByLuminosity,
    shuffleArray: $4cabd41a33da101c$var$shuffleArray,
    colorPickerInput: $4cabd41a33da101c$var$colorPickerInput
};

});
parcelRegister("dlNIw", function(module, exports) {
// import * as d3 from 'd3';
// // Import d3 plugins and add them to the d3 namespace
// import * as d3cam02 from 'd3-cam02';
// import * as d3hsluv from 'd3-hsluv';
// import * as d3hsv from 'd3-hsv';
// import * as d33d from 'd3-3d';
// Object.assign(d3, d3cam02, d3hsluv, d3hsv, d33d);
// module.exports = {d3};
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ 
var $1X0rJ = parcelRequire("1X0rJ");

var $jBxzP = parcelRequire("jBxzP");

var $1oOnY = parcelRequire("1oOnY");

var $hzkzJ = parcelRequire("hzkzJ");
const $9b83cd486e2fbeba$var$d3plus = {
    ...$1X0rJ,
    ...$jBxzP,
    ...$1oOnY,
    ...$hzkzJ
};
$9b83cd486e2fbeba$var$d3plus.interpolateJch = (start, end)=>{
    // constant, linear, and colorInterpolate are taken from d3-interpolate
    // the colorInterpolate function is `nogamma` in the d3-interpolate's color.js
    const constant = (x)=>()=>x;
    const linear = (a, d)=>(t)=>a + t * d;
    const colorInterpolate = (a, b)=>{
        const d = b - a;
        return d ? linear(a, d) : constant(isNaN(a) ? b : a);
    };
    start = $9b83cd486e2fbeba$var$d3plus.jch(start);
    end = $9b83cd486e2fbeba$var$d3plus.jch(end);
    const zero = Math.abs(start.h - end.h);
    const plus = Math.abs(start.h - (end.h + 360));
    const minus = Math.abs(start.h - (end.h - 360));
    if (plus < zero && plus < minus) end.h += 360;
    if (minus < zero && minus < plus) end.h -= 360;
    const startc = $1X0rJ.hcl(start + "").c;
    const endc = $1X0rJ.hcl(end + "").c;
    if (!startc) start.h = end.h;
    if (!endc) end.h = start.h;
    const J = colorInterpolate(start.J, end.J), C = colorInterpolate(start.C, end.C), h = colorInterpolate(start.h, end.h), opacity = colorInterpolate(start.opacity, end.opacity);
    return (t)=>{
        start.J = J(t);
        start.C = C(t);
        start.h = h(t);
        start.opacity = opacity(t);
        return start + "";
    };
};
module.exports = $9b83cd486e2fbeba$var$d3plus;

});
parcelRegister("1X0rJ", function(module, exports) {

$parcel$export(module.exports, "version", () => (parcelRequire("4JHRC")).version);

var $4JHRC = parcelRequire("4JHRC");

var $ap1W6 = parcelRequire("ap1W6");

var $iodK3 = parcelRequire("iodK3");

var $jRLtn = parcelRequire("jRLtn");

var $czXbl = parcelRequire("czXbl");

var $3pJtp = parcelRequire("3pJtp");

var $2ADI5 = parcelRequire("2ADI5");

var $64CJJ = parcelRequire("64CJJ");

var $28Esj = parcelRequire("28Esj");

var $WiT8y = parcelRequire("WiT8y");

var $6qx3y = parcelRequire("6qx3y");

var $hYwe5 = parcelRequire("hYwe5");

var $6fbIJ = parcelRequire("6fbIJ");

var $k2x0x = parcelRequire("k2x0x");

var $beUta = parcelRequire("beUta");

var $kPADG = parcelRequire("kPADG");

var $1SuNb = parcelRequire("1SuNb");

var $24GOI = parcelRequire("24GOI");

var $aeouR = parcelRequire("aeouR");

var $a2fK7 = parcelRequire("a2fK7");

var $iFdqd = parcelRequire("iFdqd");

var $7ci6s = parcelRequire("7ci6s");

var $4md7b = parcelRequire("4md7b");

var $4uph1 = parcelRequire("4uph1");

var $300K2 = parcelRequire("300K2");

var $lJGxA = parcelRequire("lJGxA");

var $dvkHI = parcelRequire("dvkHI");

var $3HaHe = parcelRequire("3HaHe");

var $anBCS = parcelRequire("anBCS");

var $6Ur3E = parcelRequire("6Ur3E");

var $cAVFJ = parcelRequire("cAVFJ");

var $D6zVi = parcelRequire("D6zVi");
$parcel$exportWildcard(module.exports, $ap1W6);
$parcel$exportWildcard(module.exports, $iodK3);
$parcel$exportWildcard(module.exports, $jRLtn);
$parcel$exportWildcard(module.exports, $czXbl);
$parcel$exportWildcard(module.exports, $3pJtp);
$parcel$exportWildcard(module.exports, $2ADI5);
$parcel$exportWildcard(module.exports, $64CJJ);
$parcel$exportWildcard(module.exports, $28Esj);
$parcel$exportWildcard(module.exports, $WiT8y);
$parcel$exportWildcard(module.exports, $6qx3y);
$parcel$exportWildcard(module.exports, $hYwe5);
$parcel$exportWildcard(module.exports, $6fbIJ);
$parcel$exportWildcard(module.exports, $k2x0x);
$parcel$exportWildcard(module.exports, $beUta);
$parcel$exportWildcard(module.exports, $kPADG);
$parcel$exportWildcard(module.exports, $1SuNb);
$parcel$exportWildcard(module.exports, $24GOI);
$parcel$exportWildcard(module.exports, $aeouR);
$parcel$exportWildcard(module.exports, $a2fK7);
$parcel$exportWildcard(module.exports, $iFdqd);
$parcel$exportWildcard(module.exports, $7ci6s);
$parcel$exportWildcard(module.exports, $4md7b);
$parcel$exportWildcard(module.exports, $4uph1);
$parcel$exportWildcard(module.exports, $300K2);
$parcel$exportWildcard(module.exports, $lJGxA);
$parcel$exportWildcard(module.exports, $dvkHI);
$parcel$exportWildcard(module.exports, $3HaHe);
$parcel$exportWildcard(module.exports, $anBCS);
$parcel$exportWildcard(module.exports, $6Ur3E);
$parcel$exportWildcard(module.exports, $cAVFJ);
$parcel$exportWildcard(module.exports, $D6zVi);

});
parcelRegister("4JHRC", function(module, exports) {

$parcel$export(module.exports, "version", () => $372d63dbfb74dd77$export$83d89fbfd8236492);
var $372d63dbfb74dd77$export$a8ff84c12d48cfa6 = "d3";
var $372d63dbfb74dd77$export$83d89fbfd8236492 = "5.12.0";
var $372d63dbfb74dd77$export$6d59db4903f20f7d = "Data-Driven Documents";
var $372d63dbfb74dd77$export$eebaaf2b24d91f63 = [
    "dom",
    "visualization",
    "svg",
    "animation",
    "canvas"
];
var $372d63dbfb74dd77$export$4cec2234a9c7ce6d = "https://d3js.org";
var $372d63dbfb74dd77$export$7ff87ebdb8ccbf20 = "BSD-3-Clause";
var $372d63dbfb74dd77$export$571b02044ddb2ab3 = {
    "name": "Mike Bostock",
    "url": "https://bost.ocks.org/mike"
};
var $372d63dbfb74dd77$export$f22da7240b7add18 = "dist/d3.node.js";
var $372d63dbfb74dd77$export$101358e655b23e68 = "dist/d3.min.js";
var $372d63dbfb74dd77$export$a2877c4988dda7ec = "dist/d3.min.js";
var $372d63dbfb74dd77$export$130be424786e852f = "index.js";
var $372d63dbfb74dd77$export$69a68d0c8baaec49 = {
    "type": "git",
    "url": "https://github.com/d3/d3.git"
};
var $372d63dbfb74dd77$export$3a444357c5f65f65 = [
    "dist/**/*.js",
    "index.js"
];
var $372d63dbfb74dd77$export$e0fef70db1fd3806 = {
    "pretest": "rimraf dist && mkdir dist && json2module package.json > dist/package.js && rollup -c",
    "test": "tape 'test/**/*-test.js'",
    "prepublishOnly": "yarn test",
    "postpublish": 'git push && git push --tags && cd ../d3.github.com && git pull && cp ../d3/dist/d3.js d3.v5.js && cp ../d3/dist/d3.min.js d3.v5.min.js && git add d3.v5.js d3.v5.min.js && git commit -m "d3 ${npm_package_version}" && git push && cd - && cd ../d3-bower && git pull && cp ../d3/LICENSE ../d3/README.md ../d3/dist/d3.js ../d3/dist/d3.min.js . && git add -- LICENSE README.md d3.js d3.min.js && git commit -m "${npm_package_version}" && git tag -am "${npm_package_version}" v${npm_package_version} && git push && git push --tags && cd - && zip -j dist/d3.zip -- LICENSE README.md API.md CHANGES.md dist/d3.js dist/d3.min.js'
};
var $372d63dbfb74dd77$export$6dbeb9fdb5a4bbaa = {
    "json2module": "0.0",
    "rimraf": "2",
    "rollup": "1",
    "rollup-plugin-ascii": "0.0",
    "rollup-plugin-node-resolve": "3",
    "rollup-plugin-terser": "5",
    "tape": "4"
};
var $372d63dbfb74dd77$export$b74ff737e0e298b5 = {
    "d3-array": "1",
    "d3-axis": "1",
    "d3-brush": "1",
    "d3-chord": "1",
    "d3-collection": "1",
    "d3-color": "1",
    "d3-contour": "1",
    "d3-dispatch": "1",
    "d3-drag": "1",
    "d3-dsv": "1",
    "d3-ease": "1",
    "d3-fetch": "1",
    "d3-force": "1",
    "d3-format": "1",
    "d3-geo": "1",
    "d3-hierarchy": "1",
    "d3-interpolate": "1",
    "d3-path": "1",
    "d3-polygon": "1",
    "d3-quadtree": "1",
    "d3-random": "1",
    "d3-scale": "2",
    "d3-scale-chromatic": "1",
    "d3-selection": "1",
    "d3-shape": "1",
    "d3-time": "1",
    "d3-time-format": "2",
    "d3-timer": "1",
    "d3-transition": "1",
    "d3-voronoi": "1",
    "d3-zoom": "1"
};

});

parcelRegister("ap1W6", function(module, exports) {

$parcel$export(module.exports, "bisect", () => (parcelRequire("lS5FO")).default);
$parcel$export(module.exports, "bisectRight", () => (parcelRequire("lS5FO")).bisectRight);
$parcel$export(module.exports, "bisectLeft", () => (parcelRequire("lS5FO")).bisectLeft);
$parcel$export(module.exports, "ascending", () => (parcelRequire("aXFrh")).default);
$parcel$export(module.exports, "bisector", () => (parcelRequire("kl6hC")).default);
$parcel$export(module.exports, "cross", () => (parcelRequire("dL7Oy")).default);
$parcel$export(module.exports, "descending", () => (parcelRequire("6xYjO")).default);
$parcel$export(module.exports, "deviation", () => (parcelRequire("374wx")).default);
$parcel$export(module.exports, "extent", () => (parcelRequire("7JHjx")).default);
$parcel$export(module.exports, "histogram", () => (parcelRequire("kaSgh")).default);
$parcel$export(module.exports, "thresholdFreedmanDiaconis", () => (parcelRequire("h5nBV")).default);
$parcel$export(module.exports, "thresholdScott", () => (parcelRequire("aRm9K")).default);
$parcel$export(module.exports, "thresholdSturges", () => (parcelRequire("ddvTy")).default);
$parcel$export(module.exports, "max", () => (parcelRequire("d7Bqq")).default);
$parcel$export(module.exports, "mean", () => (parcelRequire("kZmKX")).default);
$parcel$export(module.exports, "median", () => (parcelRequire("b1mRv")).default);
$parcel$export(module.exports, "merge", () => (parcelRequire("9RpEG")).default);
$parcel$export(module.exports, "min", () => (parcelRequire("bhvkB")).default);
$parcel$export(module.exports, "pairs", () => (parcelRequire("9E3He")).default);
$parcel$export(module.exports, "permute", () => (parcelRequire("5B50D")).default);
$parcel$export(module.exports, "quantile", () => (parcelRequire("4Zazj")).default);
$parcel$export(module.exports, "range", () => (parcelRequire("5Cu7w")).default);
$parcel$export(module.exports, "scan", () => (parcelRequire("ePmtt")).default);
$parcel$export(module.exports, "shuffle", () => (parcelRequire("3WafL")).default);
$parcel$export(module.exports, "sum", () => (parcelRequire("lraJm")).default);
$parcel$export(module.exports, "ticks", () => (parcelRequire("bn7Cl")).default);
$parcel$export(module.exports, "tickIncrement", () => (parcelRequire("bn7Cl")).tickIncrement);
$parcel$export(module.exports, "tickStep", () => (parcelRequire("bn7Cl")).tickStep);
$parcel$export(module.exports, "transpose", () => (parcelRequire("b3z6Q")).default);
$parcel$export(module.exports, "variance", () => (parcelRequire("eOYkR")).default);
$parcel$export(module.exports, "zip", () => (parcelRequire("93r8F")).default);

var $lS5FO = parcelRequire("lS5FO");

var $aXFrh = parcelRequire("aXFrh");

var $kl6hC = parcelRequire("kl6hC");

var $dL7Oy = parcelRequire("dL7Oy");

var $6xYjO = parcelRequire("6xYjO");

var $374wx = parcelRequire("374wx");

var $7JHjx = parcelRequire("7JHjx");

var $kaSgh = parcelRequire("kaSgh");

var $h5nBV = parcelRequire("h5nBV");

var $aRm9K = parcelRequire("aRm9K");

var $ddvTy = parcelRequire("ddvTy");

var $d7Bqq = parcelRequire("d7Bqq");

var $kZmKX = parcelRequire("kZmKX");

var $b1mRv = parcelRequire("b1mRv");

var $9RpEG = parcelRequire("9RpEG");

var $bhvkB = parcelRequire("bhvkB");

var $9E3He = parcelRequire("9E3He");

var $5B50D = parcelRequire("5B50D");

var $4Zazj = parcelRequire("4Zazj");

var $5Cu7w = parcelRequire("5Cu7w");

var $ePmtt = parcelRequire("ePmtt");

var $3WafL = parcelRequire("3WafL");

var $lraJm = parcelRequire("lraJm");

var $bn7Cl = parcelRequire("bn7Cl");

var $b3z6Q = parcelRequire("b3z6Q");

var $eOYkR = parcelRequire("eOYkR");

var $93r8F = parcelRequire("93r8F");

});
parcelRegister("lS5FO", function(module, exports) {

$parcel$export(module.exports, "bisectRight", () => $fec30ac1a597167d$export$4d945ad3ad5751b0);
$parcel$export(module.exports, "bisectLeft", () => $fec30ac1a597167d$export$df7d25c84ebd12a5);
$parcel$export(module.exports, "default", () => $fec30ac1a597167d$export$2e2bcd8739ae039);

var $aXFrh = parcelRequire("aXFrh");

var $kl6hC = parcelRequire("kl6hC");
var $fec30ac1a597167d$var$ascendingBisect = (0, $kl6hC.default)((0, $aXFrh.default));
var $fec30ac1a597167d$export$4d945ad3ad5751b0 = $fec30ac1a597167d$var$ascendingBisect.right;
var $fec30ac1a597167d$export$df7d25c84ebd12a5 = $fec30ac1a597167d$var$ascendingBisect.left;
var $fec30ac1a597167d$export$2e2bcd8739ae039 = $fec30ac1a597167d$export$4d945ad3ad5751b0;

});
parcelRegister("aXFrh", function(module, exports) {

$parcel$export(module.exports, "default", () => $7faf8f043ab99eef$export$2e2bcd8739ae039);
function $7faf8f043ab99eef$export$2e2bcd8739ae039(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

});

parcelRegister("kl6hC", function(module, exports) {

$parcel$export(module.exports, "default", () => $eceaa483536b56be$export$2e2bcd8739ae039);

var $aXFrh = parcelRequire("aXFrh");
function $eceaa483536b56be$export$2e2bcd8739ae039(compare) {
    if (compare.length === 1) compare = $eceaa483536b56be$var$ascendingComparator(compare);
    return {
        left: function(a, x, lo, hi) {
            if (lo == null) lo = 0;
            if (hi == null) hi = a.length;
            while(lo < hi){
                var mid = lo + hi >>> 1;
                if (compare(a[mid], x) < 0) lo = mid + 1;
                else hi = mid;
            }
            return lo;
        },
        right: function(a, x, lo, hi) {
            if (lo == null) lo = 0;
            if (hi == null) hi = a.length;
            while(lo < hi){
                var mid = lo + hi >>> 1;
                if (compare(a[mid], x) > 0) hi = mid;
                else lo = mid + 1;
            }
            return lo;
        }
    };
}
function $eceaa483536b56be$var$ascendingComparator(f) {
    return function(d, x) {
        return (0, $aXFrh.default)(f(d), x);
    };
}

});


parcelRegister("dL7Oy", function(module, exports) {

$parcel$export(module.exports, "default", () => $a045b9e80b4def6b$export$2e2bcd8739ae039);

var $9E3He = parcelRequire("9E3He");
function $a045b9e80b4def6b$export$2e2bcd8739ae039(values0, values1, reduce) {
    var n0 = values0.length, n1 = values1.length, values = new Array(n0 * n1), i0, i1, i, value0;
    if (reduce == null) reduce = (0, $9E3He.pair);
    for(i0 = i = 0; i0 < n0; ++i0)for(value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i)values[i] = reduce(value0, values1[i1]);
    return values;
}

});
parcelRegister("9E3He", function(module, exports) {

$parcel$export(module.exports, "default", () => $705ab78393fb4a6a$export$2e2bcd8739ae039);
$parcel$export(module.exports, "pair", () => $705ab78393fb4a6a$export$a04cb3fe8b81dd);
function $705ab78393fb4a6a$export$2e2bcd8739ae039(array, f) {
    if (f == null) f = $705ab78393fb4a6a$export$a04cb3fe8b81dd;
    var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
    while(i < n)pairs[i] = f(p, p = array[++i]);
    return pairs;
}
function $705ab78393fb4a6a$export$a04cb3fe8b81dd(a, b) {
    return [
        a,
        b
    ];
}

});


parcelRegister("6xYjO", function(module, exports) {

$parcel$export(module.exports, "default", () => $4c449d2649b2a9cc$export$2e2bcd8739ae039);
function $4c449d2649b2a9cc$export$2e2bcd8739ae039(a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}

});

parcelRegister("374wx", function(module, exports) {

$parcel$export(module.exports, "default", () => $244588e3c2a52402$export$2e2bcd8739ae039);

var $eOYkR = parcelRequire("eOYkR");
function $244588e3c2a52402$export$2e2bcd8739ae039(array, f) {
    var v = (0, $eOYkR.default)(array, f);
    return v ? Math.sqrt(v) : v;
}

});
parcelRegister("eOYkR", function(module, exports) {

$parcel$export(module.exports, "default", () => $aca48997ab79030d$export$2e2bcd8739ae039);

var $aEwwm = parcelRequire("aEwwm");
function $aca48997ab79030d$export$2e2bcd8739ae039(values, valueof) {
    var n = values.length, m = 0, i = -1, mean = 0, value, delta, sum = 0;
    if (valueof == null) {
        while(++i < n)if (!isNaN(value = (0, $aEwwm.default)(values[i]))) {
            delta = value - mean;
            mean += delta / ++m;
            sum += delta * (value - mean);
        }
    } else {
        while(++i < n)if (!isNaN(value = (0, $aEwwm.default)(valueof(values[i], i, values)))) {
            delta = value - mean;
            mean += delta / ++m;
            sum += delta * (value - mean);
        }
    }
    if (m > 1) return sum / (m - 1);
}

});
parcelRegister("aEwwm", function(module, exports) {

$parcel$export(module.exports, "default", () => $7c16ddc7c62942cc$export$2e2bcd8739ae039);
function $7c16ddc7c62942cc$export$2e2bcd8739ae039(x) {
    return x === null ? NaN : +x;
}

});



parcelRegister("7JHjx", function(module, exports) {

$parcel$export(module.exports, "default", () => $5a1e55ad5ef5fe56$export$2e2bcd8739ae039);
function $5a1e55ad5ef5fe56$export$2e2bcd8739ae039(values, valueof) {
    var n = values.length, i = -1, value, min, max;
    if (valueof == null) {
        while(++i < n)if ((value = values[i]) != null && value >= value) {
            min = max = value;
            while(++i < n)if ((value = values[i]) != null) {
                if (min > value) min = value;
                if (max < value) max = value;
            }
        }
    } else {
        while(++i < n)if ((value = valueof(values[i], i, values)) != null && value >= value) {
            min = max = value;
            while(++i < n)if ((value = valueof(values[i], i, values)) != null) {
                if (min > value) min = value;
                if (max < value) max = value;
            }
        }
    }
    return [
        min,
        max
    ];
}

});

parcelRegister("kaSgh", function(module, exports) {

$parcel$export(module.exports, "default", () => $eafed503eab02b6d$export$2e2bcd8739ae039);

var $kq22D = parcelRequire("kq22D");

var $lS5FO = parcelRequire("lS5FO");

var $9sLU2 = parcelRequire("9sLU2");

var $7JHjx = parcelRequire("7JHjx");

var $gmNqF = parcelRequire("gmNqF");

var $5Cu7w = parcelRequire("5Cu7w");

var $bn7Cl = parcelRequire("bn7Cl");

var $ddvTy = parcelRequire("ddvTy");
function $eafed503eab02b6d$export$2e2bcd8739ae039() {
    var value = (0, $gmNqF.default), domain = (0, $7JHjx.default), threshold = (0, $ddvTy.default);
    function histogram(data) {
        var i, n = data.length, x, values = new Array(n);
        for(i = 0; i < n; ++i)values[i] = value(data[i], i, data);
        var xz = domain(values), x0 = xz[0], x1 = xz[1], tz = threshold(values, x0, x1);
        // Convert number of thresholds into uniform thresholds.
        if (!Array.isArray(tz)) {
            tz = (0, $bn7Cl.tickStep)(x0, x1, tz);
            tz = (0, $5Cu7w.default)(Math.ceil(x0 / tz) * tz, x1, tz); // exclusive
        }
        // Remove any thresholds outside the domain.
        var m = tz.length;
        while(tz[0] <= x0)tz.shift(), --m;
        while(tz[m - 1] > x1)tz.pop(), --m;
        var bins = new Array(m + 1), bin;
        // Initialize bins.
        for(i = 0; i <= m; ++i){
            bin = bins[i] = [];
            bin.x0 = i > 0 ? tz[i - 1] : x0;
            bin.x1 = i < m ? tz[i] : x1;
        }
        // Assign data to bins by value, ignoring any outside the domain.
        for(i = 0; i < n; ++i){
            x = values[i];
            if (x0 <= x && x <= x1) bins[(0, $lS5FO.default)(tz, x, 0, m)].push(data[i]);
        }
        return bins;
    }
    histogram.value = function(_) {
        return arguments.length ? (value = typeof _ === "function" ? _ : (0, $9sLU2.default)(_), histogram) : value;
    };
    histogram.domain = function(_) {
        return arguments.length ? (domain = typeof _ === "function" ? _ : (0, $9sLU2.default)([
            _[0],
            _[1]
        ]), histogram) : domain;
    };
    histogram.thresholds = function(_) {
        return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? (0, $9sLU2.default)((0, $kq22D.slice).call(_)) : (0, $9sLU2.default)(_), histogram) : threshold;
    };
    return histogram;
}

});
parcelRegister("kq22D", function(module, exports) {

$parcel$export(module.exports, "slice", () => $edd7d1c0d35a2d60$export$58adb3bec8346d0f);
$parcel$export(module.exports, "map", () => $edd7d1c0d35a2d60$export$871de8747c9eaa88);
var $edd7d1c0d35a2d60$var$array = Array.prototype;
var $edd7d1c0d35a2d60$export$58adb3bec8346d0f = $edd7d1c0d35a2d60$var$array.slice;
var $edd7d1c0d35a2d60$export$871de8747c9eaa88 = $edd7d1c0d35a2d60$var$array.map;

});

parcelRegister("9sLU2", function(module, exports) {

$parcel$export(module.exports, "default", () => $6e3be31a02bae954$export$2e2bcd8739ae039);
function $6e3be31a02bae954$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}

});

parcelRegister("gmNqF", function(module, exports) {

$parcel$export(module.exports, "default", () => $bea50b07d07581ee$export$2e2bcd8739ae039);
function $bea50b07d07581ee$export$2e2bcd8739ae039(x) {
    return x;
}

});

parcelRegister("5Cu7w", function(module, exports) {

$parcel$export(module.exports, "default", () => $4177dd9aa549affd$export$2e2bcd8739ae039);
function $4177dd9aa549affd$export$2e2bcd8739ae039(start, stop, step) {
    start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
    var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range = new Array(n);
    while(++i < n)range[i] = start + i * step;
    return range;
}

});

parcelRegister("bn7Cl", function(module, exports) {

$parcel$export(module.exports, "default", () => $8477c06020aea09d$export$2e2bcd8739ae039);
$parcel$export(module.exports, "tickIncrement", () => $8477c06020aea09d$export$bc64d00cc98e7e95);
$parcel$export(module.exports, "tickStep", () => $8477c06020aea09d$export$81087d9b915d4ede);
var $8477c06020aea09d$var$e10 = Math.sqrt(50), $8477c06020aea09d$var$e5 = Math.sqrt(10), $8477c06020aea09d$var$e2 = Math.sqrt(2);
function $8477c06020aea09d$export$2e2bcd8739ae039(start, stop, count) {
    var reverse, i = -1, n, ticks, step;
    stop = +stop, start = +start, count = +count;
    if (start === stop && count > 0) return [
        start
    ];
    if (reverse = stop < start) n = start, start = stop, stop = n;
    if ((step = $8477c06020aea09d$export$bc64d00cc98e7e95(start, stop, count)) === 0 || !isFinite(step)) return [];
    if (step > 0) {
        start = Math.ceil(start / step);
        stop = Math.floor(stop / step);
        ticks = new Array(n = Math.ceil(stop - start + 1));
        while(++i < n)ticks[i] = (start + i) * step;
    } else {
        start = Math.floor(start * step);
        stop = Math.ceil(stop * step);
        ticks = new Array(n = Math.ceil(start - stop + 1));
        while(++i < n)ticks[i] = (start - i) / step;
    }
    if (reverse) ticks.reverse();
    return ticks;
}
function $8477c06020aea09d$export$bc64d00cc98e7e95(start, stop, count) {
    var step = (stop - start) / Math.max(0, count), power = Math.floor(Math.log(step) / Math.LN10), error = step / Math.pow(10, power);
    return power >= 0 ? (error >= $8477c06020aea09d$var$e10 ? 10 : error >= $8477c06020aea09d$var$e5 ? 5 : error >= $8477c06020aea09d$var$e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= $8477c06020aea09d$var$e10 ? 10 : error >= $8477c06020aea09d$var$e5 ? 5 : error >= $8477c06020aea09d$var$e2 ? 2 : 1);
}
function $8477c06020aea09d$export$81087d9b915d4ede(start, stop, count) {
    var step0 = Math.abs(stop - start) / Math.max(0, count), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
    if (error >= $8477c06020aea09d$var$e10) step1 *= 10;
    else if (error >= $8477c06020aea09d$var$e5) step1 *= 5;
    else if (error >= $8477c06020aea09d$var$e2) step1 *= 2;
    return stop < start ? -step1 : step1;
}

});

parcelRegister("ddvTy", function(module, exports) {

$parcel$export(module.exports, "default", () => $99f53aed5c23b5b3$export$2e2bcd8739ae039);
function $99f53aed5c23b5b3$export$2e2bcd8739ae039(values) {
    return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
}

});


parcelRegister("h5nBV", function(module, exports) {

$parcel$export(module.exports, "default", () => $c70537ea674270c7$export$2e2bcd8739ae039);

var $kq22D = parcelRequire("kq22D");

var $aXFrh = parcelRequire("aXFrh");

var $aEwwm = parcelRequire("aEwwm");

var $4Zazj = parcelRequire("4Zazj");
function $c70537ea674270c7$export$2e2bcd8739ae039(values, min, max) {
    values = (0, $kq22D.map).call(values, (0, $aEwwm.default)).sort((0, $aXFrh.default));
    return Math.ceil((max - min) / (2 * ((0, $4Zazj.default)(values, 0.75) - (0, $4Zazj.default)(values, 0.25)) * Math.pow(values.length, -1 / 3)));
}

});
parcelRegister("4Zazj", function(module, exports) {

$parcel$export(module.exports, "default", () => $3a150e9a41fe1547$export$2e2bcd8739ae039);

var $aEwwm = parcelRequire("aEwwm");
function $3a150e9a41fe1547$export$2e2bcd8739ae039(values, p, valueof) {
    if (valueof == null) valueof = (0, $aEwwm.default);
    if (!(n = values.length)) return;
    if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
    if (p >= 1) return +valueof(values[n - 1], n - 1, values);
    var n, i = (n - 1) * p, i0 = Math.floor(i), value0 = +valueof(values[i0], i0, values), value1 = +valueof(values[i0 + 1], i0 + 1, values);
    return value0 + (value1 - value0) * (i - i0);
}

});


parcelRegister("aRm9K", function(module, exports) {

$parcel$export(module.exports, "default", () => $7e800a633d7f5b0a$export$2e2bcd8739ae039);

var $374wx = parcelRequire("374wx");
function $7e800a633d7f5b0a$export$2e2bcd8739ae039(values, min, max) {
    return Math.ceil((max - min) / (3.5 * (0, $374wx.default)(values) * Math.pow(values.length, -1 / 3)));
}

});

parcelRegister("d7Bqq", function(module, exports) {

$parcel$export(module.exports, "default", () => $98d8f5a7a3c9c214$export$2e2bcd8739ae039);
function $98d8f5a7a3c9c214$export$2e2bcd8739ae039(values, valueof) {
    var n = values.length, i = -1, value, max;
    if (valueof == null) {
        while(++i < n)if ((value = values[i]) != null && value >= value) {
            max = value;
            while(++i < n)if ((value = values[i]) != null && value > max) max = value;
        }
    } else {
        while(++i < n)if ((value = valueof(values[i], i, values)) != null && value >= value) {
            max = value;
            while(++i < n)if ((value = valueof(values[i], i, values)) != null && value > max) max = value;
        }
    }
    return max;
}

});

parcelRegister("kZmKX", function(module, exports) {

$parcel$export(module.exports, "default", () => $f47b2815b851a201$export$2e2bcd8739ae039);

var $aEwwm = parcelRequire("aEwwm");
function $f47b2815b851a201$export$2e2bcd8739ae039(values, valueof) {
    var n = values.length, m = n, i = -1, value, sum = 0;
    if (valueof == null) {
        while(++i < n)if (!isNaN(value = (0, $aEwwm.default)(values[i]))) sum += value;
        else --m;
    } else {
        while(++i < n)if (!isNaN(value = (0, $aEwwm.default)(valueof(values[i], i, values)))) sum += value;
        else --m;
    }
    if (m) return sum / m;
}

});

parcelRegister("b1mRv", function(module, exports) {

$parcel$export(module.exports, "default", () => $8061859fc780eae9$export$2e2bcd8739ae039);

var $aXFrh = parcelRequire("aXFrh");

var $aEwwm = parcelRequire("aEwwm");

var $4Zazj = parcelRequire("4Zazj");
function $8061859fc780eae9$export$2e2bcd8739ae039(values, valueof) {
    var n = values.length, i = -1, value, numbers = [];
    if (valueof == null) {
        while(++i < n)if (!isNaN(value = (0, $aEwwm.default)(values[i]))) numbers.push(value);
    } else {
        while(++i < n)if (!isNaN(value = (0, $aEwwm.default)(valueof(values[i], i, values)))) numbers.push(value);
    }
    return (0, $4Zazj.default)(numbers.sort((0, $aXFrh.default)), 0.5);
}

});

parcelRegister("9RpEG", function(module, exports) {

$parcel$export(module.exports, "default", () => $72dcf6e1b4d3c3e9$export$2e2bcd8739ae039);
function $72dcf6e1b4d3c3e9$export$2e2bcd8739ae039(arrays) {
    var n = arrays.length, m, i = -1, j = 0, merged, array;
    while(++i < n)j += arrays[i].length;
    merged = new Array(j);
    while(--n >= 0){
        array = arrays[n];
        m = array.length;
        while(--m >= 0)merged[--j] = array[m];
    }
    return merged;
}

});

parcelRegister("bhvkB", function(module, exports) {

$parcel$export(module.exports, "default", () => $836995f812582370$export$2e2bcd8739ae039);
function $836995f812582370$export$2e2bcd8739ae039(values, valueof) {
    var n = values.length, i = -1, value, min;
    if (valueof == null) {
        while(++i < n)if ((value = values[i]) != null && value >= value) {
            min = value;
            while(++i < n)if ((value = values[i]) != null && min > value) min = value;
        }
    } else {
        while(++i < n)if ((value = valueof(values[i], i, values)) != null && value >= value) {
            min = value;
            while(++i < n)if ((value = valueof(values[i], i, values)) != null && min > value) min = value;
        }
    }
    return min;
}

});

parcelRegister("5B50D", function(module, exports) {

$parcel$export(module.exports, "default", () => $41344b28f8d3d3d2$export$2e2bcd8739ae039);
function $41344b28f8d3d3d2$export$2e2bcd8739ae039(array, indexes) {
    var i = indexes.length, permutes = new Array(i);
    while(i--)permutes[i] = array[indexes[i]];
    return permutes;
}

});

parcelRegister("ePmtt", function(module, exports) {

$parcel$export(module.exports, "default", () => $acb74308b93121e3$export$2e2bcd8739ae039);

var $aXFrh = parcelRequire("aXFrh");
function $acb74308b93121e3$export$2e2bcd8739ae039(values, compare) {
    if (!(n = values.length)) return;
    var n, i = 0, j = 0, xi, xj = values[j];
    if (compare == null) compare = (0, $aXFrh.default);
    while(++i < n)if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) xj = xi, j = i;
    if (compare(xj, xj) === 0) return j;
}

});

parcelRegister("3WafL", function(module, exports) {

$parcel$export(module.exports, "default", () => $2ddebdfa1bd36a96$export$2e2bcd8739ae039);
function $2ddebdfa1bd36a96$export$2e2bcd8739ae039(array, i0, i1) {
    var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0), t, i;
    while(m){
        i = Math.random() * m-- | 0;
        t = array[m + i0];
        array[m + i0] = array[i + i0];
        array[i + i0] = t;
    }
    return array;
}

});

parcelRegister("lraJm", function(module, exports) {

$parcel$export(module.exports, "default", () => $f9b471721167ff8e$export$2e2bcd8739ae039);
function $f9b471721167ff8e$export$2e2bcd8739ae039(values, valueof) {
    var n = values.length, i = -1, value, sum = 0;
    if (valueof == null) {
        while(++i < n)if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    } else {
        while(++i < n)if (value = +valueof(values[i], i, values)) sum += value;
    }
    return sum;
}

});

parcelRegister("b3z6Q", function(module, exports) {

$parcel$export(module.exports, "default", () => $80cb3581c4bf6842$export$2e2bcd8739ae039);

var $bhvkB = parcelRequire("bhvkB");
function $80cb3581c4bf6842$export$2e2bcd8739ae039(matrix) {
    if (!(n = matrix.length)) return [];
    for(var i = -1, m = (0, $bhvkB.default)(matrix, $80cb3581c4bf6842$var$length), transpose = new Array(m); ++i < m;)for(var j = -1, n, row = transpose[i] = new Array(n); ++j < n;)row[j] = matrix[j][i];
    return transpose;
}
function $80cb3581c4bf6842$var$length(d) {
    return d.length;
}

});

parcelRegister("93r8F", function(module, exports) {

$parcel$export(module.exports, "default", () => $6979720c3b7eee02$export$2e2bcd8739ae039);

var $b3z6Q = parcelRequire("b3z6Q");
function $6979720c3b7eee02$export$2e2bcd8739ae039() {
    return (0, $b3z6Q.default)(arguments);
}

});


parcelRegister("iodK3", function(module, exports) {

$parcel$export(module.exports, "axisTop", () => (parcelRequire("2yslq")).axisTop);
$parcel$export(module.exports, "axisRight", () => (parcelRequire("2yslq")).axisRight);
$parcel$export(module.exports, "axisBottom", () => (parcelRequire("2yslq")).axisBottom);
$parcel$export(module.exports, "axisLeft", () => (parcelRequire("2yslq")).axisLeft);

var $2yslq = parcelRequire("2yslq");

});
parcelRegister("2yslq", function(module, exports) {

$parcel$export(module.exports, "axisTop", () => $1dc4be6854e899a1$export$59b8cfab074bdeb1);
$parcel$export(module.exports, "axisRight", () => $1dc4be6854e899a1$export$b0d2e24dc4f898f0);
$parcel$export(module.exports, "axisBottom", () => $1dc4be6854e899a1$export$e5cb22533a15e72e);
$parcel$export(module.exports, "axisLeft", () => $1dc4be6854e899a1$export$2749afb169a520d2);

var $eGwUr = parcelRequire("eGwUr");

var $cAHIn = parcelRequire("cAHIn");
var $1dc4be6854e899a1$var$top = 1, $1dc4be6854e899a1$var$right = 2, $1dc4be6854e899a1$var$bottom = 3, $1dc4be6854e899a1$var$left = 4, $1dc4be6854e899a1$var$epsilon = 1e-6;
function $1dc4be6854e899a1$var$translateX(x) {
    return "translate(" + (x + 0.5) + ",0)";
}
function $1dc4be6854e899a1$var$translateY(y) {
    return "translate(0," + (y + 0.5) + ")";
}
function $1dc4be6854e899a1$var$number(scale) {
    return function(d) {
        return +scale(d);
    };
}
function $1dc4be6854e899a1$var$center(scale) {
    var offset = Math.max(0, scale.bandwidth() - 1) / 2; // Adjust for 0.5px offset.
    if (scale.round()) offset = Math.round(offset);
    return function(d) {
        return +scale(d) + offset;
    };
}
function $1dc4be6854e899a1$var$entering() {
    return !this.__axis;
}
function $1dc4be6854e899a1$var$axis(orient, scale) {
    var tickArguments = [], tickValues = null, tickFormat = null, tickSizeInner = 6, tickSizeOuter = 6, tickPadding = 3, k = orient === $1dc4be6854e899a1$var$top || orient === $1dc4be6854e899a1$var$left ? -1 : 1, x = orient === $1dc4be6854e899a1$var$left || orient === $1dc4be6854e899a1$var$right ? "x" : "y", transform = orient === $1dc4be6854e899a1$var$top || orient === $1dc4be6854e899a1$var$bottom ? $1dc4be6854e899a1$var$translateX : $1dc4be6854e899a1$var$translateY;
    function axis(context) {
        var values = tickValues == null ? scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain() : tickValues, format = tickFormat == null ? scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : (0, $cAHIn.default) : tickFormat, spacing = Math.max(tickSizeInner, 0) + tickPadding, range = scale.range(), range0 = +range[0] + 0.5, range1 = +range[range.length - 1] + 0.5, position = (scale.bandwidth ? $1dc4be6854e899a1$var$center : $1dc4be6854e899a1$var$number)(scale.copy()), selection = context.selection ? context.selection() : context, path = selection.selectAll(".domain").data([
            null
        ]), tick = selection.selectAll(".tick").data(values, scale).order(), tickExit = tick.exit(), tickEnter = tick.enter().append("g").attr("class", "tick"), line = tick.select("line"), text = tick.select("text");
        path = path.merge(path.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor"));
        tick = tick.merge(tickEnter);
        line = line.merge(tickEnter.append("line").attr("stroke", "currentColor").attr(x + "2", k * tickSizeInner));
        text = text.merge(tickEnter.append("text").attr("fill", "currentColor").attr(x, k * spacing).attr("dy", orient === $1dc4be6854e899a1$var$top ? "0em" : orient === $1dc4be6854e899a1$var$bottom ? "0.71em" : "0.32em"));
        if (context !== selection) {
            path = path.transition(context);
            tick = tick.transition(context);
            line = line.transition(context);
            text = text.transition(context);
            tickExit = tickExit.transition(context).attr("opacity", $1dc4be6854e899a1$var$epsilon).attr("transform", function(d) {
                return isFinite(d = position(d)) ? transform(d) : this.getAttribute("transform");
            });
            tickEnter.attr("opacity", $1dc4be6854e899a1$var$epsilon).attr("transform", function(d) {
                var p = this.parentNode.__axis;
                return transform(p && isFinite(p = p(d)) ? p : position(d));
            });
        }
        tickExit.remove();
        path.attr("d", orient === $1dc4be6854e899a1$var$left || orient == $1dc4be6854e899a1$var$right ? tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter : "M0.5," + range0 + "V" + range1 : tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + ",0.5H" + range1);
        tick.attr("opacity", 1).attr("transform", function(d) {
            return transform(position(d));
        });
        line.attr(x + "2", k * tickSizeInner);
        text.attr(x, k * spacing).text(format);
        selection.filter($1dc4be6854e899a1$var$entering).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", orient === $1dc4be6854e899a1$var$right ? "start" : orient === $1dc4be6854e899a1$var$left ? "end" : "middle");
        selection.each(function() {
            this.__axis = position;
        });
    }
    axis.scale = function(_) {
        return arguments.length ? (scale = _, axis) : scale;
    };
    axis.ticks = function() {
        return tickArguments = (0, $eGwUr.slice).call(arguments), axis;
    };
    axis.tickArguments = function(_) {
        return arguments.length ? (tickArguments = _ == null ? [] : (0, $eGwUr.slice).call(_), axis) : tickArguments.slice();
    };
    axis.tickValues = function(_) {
        return arguments.length ? (tickValues = _ == null ? null : (0, $eGwUr.slice).call(_), axis) : tickValues && tickValues.slice();
    };
    axis.tickFormat = function(_) {
        return arguments.length ? (tickFormat = _, axis) : tickFormat;
    };
    axis.tickSize = function(_) {
        return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
    };
    axis.tickSizeInner = function(_) {
        return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
    };
    axis.tickSizeOuter = function(_) {
        return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
    };
    axis.tickPadding = function(_) {
        return arguments.length ? (tickPadding = +_, axis) : tickPadding;
    };
    return axis;
}
function $1dc4be6854e899a1$export$59b8cfab074bdeb1(scale) {
    return $1dc4be6854e899a1$var$axis($1dc4be6854e899a1$var$top, scale);
}
function $1dc4be6854e899a1$export$b0d2e24dc4f898f0(scale) {
    return $1dc4be6854e899a1$var$axis($1dc4be6854e899a1$var$right, scale);
}
function $1dc4be6854e899a1$export$e5cb22533a15e72e(scale) {
    return $1dc4be6854e899a1$var$axis($1dc4be6854e899a1$var$bottom, scale);
}
function $1dc4be6854e899a1$export$2749afb169a520d2(scale) {
    return $1dc4be6854e899a1$var$axis($1dc4be6854e899a1$var$left, scale);
}

});
parcelRegister("eGwUr", function(module, exports) {

$parcel$export(module.exports, "slice", () => $ab0e8406d9c9db76$export$58adb3bec8346d0f);
var $ab0e8406d9c9db76$export$58adb3bec8346d0f = Array.prototype.slice;

});

parcelRegister("cAHIn", function(module, exports) {

$parcel$export(module.exports, "default", () => $92aac1a4ef41e95e$export$2e2bcd8739ae039);
function $92aac1a4ef41e95e$export$2e2bcd8739ae039(x) {
    return x;
}

});



parcelRegister("jRLtn", function(module, exports) {

$parcel$export(module.exports, "brush", () => (parcelRequire("2O0t5")).default);
$parcel$export(module.exports, "brushX", () => (parcelRequire("2O0t5")).brushX);
$parcel$export(module.exports, "brushY", () => (parcelRequire("2O0t5")).brushY);
$parcel$export(module.exports, "brushSelection", () => (parcelRequire("2O0t5")).brushSelection);

var $2O0t5 = parcelRequire("2O0t5");

});
parcelRegister("2O0t5", function(module, exports) {

$parcel$export(module.exports, "brushSelection", () => $20b09d42a8d7b86a$export$69760394fc76f689);
$parcel$export(module.exports, "brushX", () => $20b09d42a8d7b86a$export$979ace6c88860aa8);
$parcel$export(module.exports, "brushY", () => $20b09d42a8d7b86a$export$468748b530991c54);
$parcel$export(module.exports, "default", () => $20b09d42a8d7b86a$export$2e2bcd8739ae039);

var $iBYE9 = parcelRequire("iBYE9");

var $8stEL = parcelRequire("8stEL");

var $03m37 = parcelRequire("03m37");

var $bVR25 = parcelRequire("bVR25");
var $8mNB9 = parcelRequire("8mNB9");
var $gcg15 = parcelRequire("gcg15");
var $g98YB = parcelRequire("g98YB");
parcelRequire("6Ur3E");
var $ejxBi = parcelRequire("ejxBi");

var $9oEqG = parcelRequire("9oEqG");

var $2GNVz = parcelRequire("2GNVz");

var $bqAWn = parcelRequire("bqAWn");
var $20b09d42a8d7b86a$var$MODE_DRAG = {
    name: "drag"
}, $20b09d42a8d7b86a$var$MODE_SPACE = {
    name: "space"
}, $20b09d42a8d7b86a$var$MODE_HANDLE = {
    name: "handle"
}, $20b09d42a8d7b86a$var$MODE_CENTER = {
    name: "center"
};
function $20b09d42a8d7b86a$var$number1(e) {
    return [
        +e[0],
        +e[1]
    ];
}
function $20b09d42a8d7b86a$var$number2(e) {
    return [
        $20b09d42a8d7b86a$var$number1(e[0]),
        $20b09d42a8d7b86a$var$number1(e[1])
    ];
}
function $20b09d42a8d7b86a$var$toucher(identifier) {
    return function(target) {
        return (0, $g98YB.default)(target, (0, $bVR25.event).touches, identifier);
    };
}
var $20b09d42a8d7b86a$var$X = {
    name: "x",
    handles: [
        "w",
        "e"
    ].map($20b09d42a8d7b86a$var$type),
    input: function(x, e) {
        return x == null ? null : [
            [
                +x[0],
                e[0][1]
            ],
            [
                +x[1],
                e[1][1]
            ]
        ];
    },
    output: function(xy) {
        return xy && [
            xy[0][0],
            xy[1][0]
        ];
    }
};
var $20b09d42a8d7b86a$var$Y = {
    name: "y",
    handles: [
        "n",
        "s"
    ].map($20b09d42a8d7b86a$var$type),
    input: function(y, e) {
        return y == null ? null : [
            [
                e[0][0],
                +y[0]
            ],
            [
                e[1][0],
                +y[1]
            ]
        ];
    },
    output: function(xy) {
        return xy && [
            xy[0][1],
            xy[1][1]
        ];
    }
};
var $20b09d42a8d7b86a$var$XY = {
    name: "xy",
    handles: [
        "n",
        "w",
        "e",
        "s",
        "nw",
        "ne",
        "sw",
        "se"
    ].map($20b09d42a8d7b86a$var$type),
    input: function(xy) {
        return xy == null ? null : $20b09d42a8d7b86a$var$number2(xy);
    },
    output: function(xy) {
        return xy;
    }
};
var $20b09d42a8d7b86a$var$cursors = {
    overlay: "crosshair",
    selection: "move",
    n: "ns-resize",
    e: "ew-resize",
    s: "ns-resize",
    w: "ew-resize",
    nw: "nwse-resize",
    ne: "nesw-resize",
    se: "nwse-resize",
    sw: "nesw-resize"
};
var $20b09d42a8d7b86a$var$flipX = {
    e: "w",
    w: "e",
    nw: "ne",
    ne: "nw",
    se: "sw",
    sw: "se"
};
var $20b09d42a8d7b86a$var$flipY = {
    n: "s",
    s: "n",
    nw: "sw",
    ne: "se",
    se: "ne",
    sw: "nw"
};
var $20b09d42a8d7b86a$var$signsX = {
    overlay: 1,
    selection: 1,
    n: null,
    e: 1,
    s: null,
    w: -1,
    nw: -1,
    ne: 1,
    se: 1,
    sw: -1
};
var $20b09d42a8d7b86a$var$signsY = {
    overlay: 1,
    selection: 1,
    n: -1,
    e: null,
    s: 1,
    w: null,
    nw: -1,
    ne: -1,
    se: 1,
    sw: 1
};
function $20b09d42a8d7b86a$var$type(t) {
    return {
        type: t
    };
}
// Ignore right-click, since that should open the context menu.
function $20b09d42a8d7b86a$var$defaultFilter() {
    return !(0, $bVR25.event).ctrlKey && !(0, $bVR25.event).button;
}
function $20b09d42a8d7b86a$var$defaultExtent() {
    var svg = this.ownerSVGElement || this;
    if (svg.hasAttribute("viewBox")) {
        svg = svg.viewBox.baseVal;
        return [
            [
                svg.x,
                svg.y
            ],
            [
                svg.x + svg.width,
                svg.y + svg.height
            ]
        ];
    }
    return [
        [
            0,
            0
        ],
        [
            svg.width.baseVal.value,
            svg.height.baseVal.value
        ]
    ];
}
function $20b09d42a8d7b86a$var$defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
// Like d3.local, but with the name “__brush” rather than auto-generated.
function $20b09d42a8d7b86a$var$local(node) {
    while(!node.__brush)if (!(node = node.parentNode)) return;
    return node.__brush;
}
function $20b09d42a8d7b86a$var$empty(extent) {
    return extent[0][0] === extent[1][0] || extent[0][1] === extent[1][1];
}
function $20b09d42a8d7b86a$export$69760394fc76f689(node) {
    var state = node.__brush;
    return state ? state.dim.output(state.selection) : null;
}
function $20b09d42a8d7b86a$export$979ace6c88860aa8() {
    return $20b09d42a8d7b86a$var$brush($20b09d42a8d7b86a$var$X);
}
function $20b09d42a8d7b86a$export$468748b530991c54() {
    return $20b09d42a8d7b86a$var$brush($20b09d42a8d7b86a$var$Y);
}
function $20b09d42a8d7b86a$export$2e2bcd8739ae039() {
    return $20b09d42a8d7b86a$var$brush($20b09d42a8d7b86a$var$XY);
}
function $20b09d42a8d7b86a$var$brush(dim) {
    var extent = $20b09d42a8d7b86a$var$defaultExtent, filter = $20b09d42a8d7b86a$var$defaultFilter, touchable = $20b09d42a8d7b86a$var$defaultTouchable, keys = true, listeners = (0, $iBYE9.default)("start", "brush", "end"), handleSize = 6, touchending;
    function brush(group) {
        var overlay = group.property("__brush", initialize).selectAll(".overlay").data([
            $20b09d42a8d7b86a$var$type("overlay")
        ]);
        overlay.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", $20b09d42a8d7b86a$var$cursors.overlay).merge(overlay).each(function() {
            var extent = $20b09d42a8d7b86a$var$local(this).extent;
            (0, $gcg15.default)(this).attr("x", extent[0][0]).attr("y", extent[0][1]).attr("width", extent[1][0] - extent[0][0]).attr("height", extent[1][1] - extent[0][1]);
        });
        group.selectAll(".selection").data([
            $20b09d42a8d7b86a$var$type("selection")
        ]).enter().append("rect").attr("class", "selection").attr("cursor", $20b09d42a8d7b86a$var$cursors.selection).attr("fill", "#777").attr("fill-opacity", 0.3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
        var handle = group.selectAll(".handle").data(dim.handles, function(d) {
            return d.type;
        });
        handle.exit().remove();
        handle.enter().append("rect").attr("class", function(d) {
            return "handle handle--" + d.type;
        }).attr("cursor", function(d) {
            return $20b09d42a8d7b86a$var$cursors[d.type];
        });
        group.each(redraw).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", started).filter(touchable).on("touchstart.brush", started).on("touchmove.brush", touchmoved).on("touchend.brush touchcancel.brush", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    brush.move = function(group, selection) {
        if (group.selection) group.on("start.brush", function() {
            emitter(this, arguments).beforestart().start();
        }).on("interrupt.brush end.brush", function() {
            emitter(this, arguments).end();
        }).tween("brush", function() {
            var that = this, state = that.__brush, emit = emitter(that, arguments), selection0 = state.selection, selection1 = dim.input(typeof selection === "function" ? selection.apply(this, arguments) : selection, state.extent), i = (0, $03m37.default)(selection0, selection1);
            function tween(t) {
                state.selection = t === 1 && selection1 === null ? null : i(t);
                redraw.call(that);
                emit.brush();
            }
            return selection0 !== null && selection1 !== null ? tween : tween(1);
        });
        else group.each(function() {
            var that = this, args = arguments, state = that.__brush, selection1 = dim.input(typeof selection === "function" ? selection.apply(that, args) : selection, state.extent), emit = emitter(that, args).beforestart();
            (0, $ejxBi.default)(that);
            state.selection = selection1 === null ? null : selection1;
            redraw.call(that);
            emit.start().brush().end();
        });
    };
    brush.clear = function(group) {
        brush.move(group, null);
    };
    function redraw() {
        var group = (0, $gcg15.default)(this), selection = $20b09d42a8d7b86a$var$local(this).selection;
        if (selection) {
            group.selectAll(".selection").style("display", null).attr("x", selection[0][0]).attr("y", selection[0][1]).attr("width", selection[1][0] - selection[0][0]).attr("height", selection[1][1] - selection[0][1]);
            group.selectAll(".handle").style("display", null).attr("x", function(d) {
                return d.type[d.type.length - 1] === "e" ? selection[1][0] - handleSize / 2 : selection[0][0] - handleSize / 2;
            }).attr("y", function(d) {
                return d.type[0] === "s" ? selection[1][1] - handleSize / 2 : selection[0][1] - handleSize / 2;
            }).attr("width", function(d) {
                return d.type === "n" || d.type === "s" ? selection[1][0] - selection[0][0] + handleSize : handleSize;
            }).attr("height", function(d) {
                return d.type === "e" || d.type === "w" ? selection[1][1] - selection[0][1] + handleSize : handleSize;
            });
        } else group.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
    }
    function emitter(that, args, clean) {
        var emit = that.__brush.emitter;
        return emit && (!clean || !emit.clean) ? emit : new Emitter(that, args, clean);
    }
    function Emitter(that, args, clean) {
        this.that = that;
        this.args = args;
        this.state = that.__brush;
        this.active = 0;
        this.clean = clean;
    }
    Emitter.prototype = {
        beforestart: function() {
            if (++this.active === 1) this.state.emitter = this, this.starting = true;
            return this;
        },
        start: function() {
            if (this.starting) this.starting = false, this.emit("start");
            else this.emit("brush");
            return this;
        },
        brush: function() {
            this.emit("brush");
            return this;
        },
        end: function() {
            if (--this.active === 0) delete this.state.emitter, this.emit("end");
            return this;
        },
        emit: function(type) {
            (0, $bVR25.customEvent)(new (0, $2GNVz.default)(brush, type, dim.output(this.state.selection)), listeners.apply, listeners, [
                type,
                this.that,
                this.args
            ]);
        }
    };
    function started() {
        if (touchending && !(0, $bVR25.event).touches) return;
        if (!filter.apply(this, arguments)) return;
        var that = this, type = (0, $bVR25.event).target.__data__.type, mode = (keys && (0, $bVR25.event).metaKey ? type = "overlay" : type) === "selection" ? $20b09d42a8d7b86a$var$MODE_DRAG : keys && (0, $bVR25.event).altKey ? $20b09d42a8d7b86a$var$MODE_CENTER : $20b09d42a8d7b86a$var$MODE_HANDLE, signX = dim === $20b09d42a8d7b86a$var$Y ? null : $20b09d42a8d7b86a$var$signsX[type], signY = dim === $20b09d42a8d7b86a$var$X ? null : $20b09d42a8d7b86a$var$signsY[type], state = $20b09d42a8d7b86a$var$local(that), extent = state.extent, selection = state.selection, W = extent[0][0], w0, w1, N = extent[0][1], n0, n1, E = extent[1][0], e0, e1, S = extent[1][1], s0, s1, dx = 0, dy = 0, moving, shifting = signX && signY && keys && (0, $bVR25.event).shiftKey, lockX, lockY, pointer = (0, $bVR25.event).touches ? $20b09d42a8d7b86a$var$toucher((0, $bVR25.event).changedTouches[0].identifier) : (0, $8mNB9.default), point0 = pointer(that), point = point0, emit = emitter(that, arguments, true).beforestart();
        if (type === "overlay") {
            if (selection) moving = true;
            state.selection = selection = [
                [
                    w0 = dim === $20b09d42a8d7b86a$var$Y ? W : point0[0],
                    n0 = dim === $20b09d42a8d7b86a$var$X ? N : point0[1]
                ],
                [
                    e0 = dim === $20b09d42a8d7b86a$var$Y ? E : w0,
                    s0 = dim === $20b09d42a8d7b86a$var$X ? S : n0
                ]
            ];
        } else {
            w0 = selection[0][0];
            n0 = selection[0][1];
            e0 = selection[1][0];
            s0 = selection[1][1];
        }
        w1 = w0;
        n1 = n0;
        e1 = e0;
        s1 = s0;
        var group = (0, $gcg15.default)(that).attr("pointer-events", "none");
        var overlay = group.selectAll(".overlay").attr("cursor", $20b09d42a8d7b86a$var$cursors[type]);
        if ((0, $bVR25.event).touches) {
            emit.moved = moved;
            emit.ended = ended;
        } else {
            var view = (0, $gcg15.default)((0, $bVR25.event).view).on("mousemove.brush", moved, true).on("mouseup.brush", ended, true);
            if (keys) view.on("keydown.brush", keydowned, true).on("keyup.brush", keyupped, true);
            (0, $8stEL.default)((0, $bVR25.event).view);
        }
        (0, $bqAWn.nopropagation)();
        (0, $ejxBi.default)(that);
        redraw.call(that);
        emit.start();
        function moved() {
            var point1 = pointer(that);
            if (shifting && !lockX && !lockY) {
                if (Math.abs(point1[0] - point[0]) > Math.abs(point1[1] - point[1])) lockY = true;
                else lockX = true;
            }
            point = point1;
            moving = true;
            (0, $bqAWn.default)();
            move();
        }
        function move() {
            var t;
            dx = point[0] - point0[0];
            dy = point[1] - point0[1];
            switch(mode){
                case $20b09d42a8d7b86a$var$MODE_SPACE:
                case $20b09d42a8d7b86a$var$MODE_DRAG:
                    if (signX) dx = Math.max(W - w0, Math.min(E - e0, dx)), w1 = w0 + dx, e1 = e0 + dx;
                    if (signY) dy = Math.max(N - n0, Math.min(S - s0, dy)), n1 = n0 + dy, s1 = s0 + dy;
                    break;
                case $20b09d42a8d7b86a$var$MODE_HANDLE:
                    if (signX < 0) dx = Math.max(W - w0, Math.min(E - w0, dx)), w1 = w0 + dx, e1 = e0;
                    else if (signX > 0) dx = Math.max(W - e0, Math.min(E - e0, dx)), w1 = w0, e1 = e0 + dx;
                    if (signY < 0) dy = Math.max(N - n0, Math.min(S - n0, dy)), n1 = n0 + dy, s1 = s0;
                    else if (signY > 0) dy = Math.max(N - s0, Math.min(S - s0, dy)), n1 = n0, s1 = s0 + dy;
                    break;
                case $20b09d42a8d7b86a$var$MODE_CENTER:
                    if (signX) w1 = Math.max(W, Math.min(E, w0 - dx * signX)), e1 = Math.max(W, Math.min(E, e0 + dx * signX));
                    if (signY) n1 = Math.max(N, Math.min(S, n0 - dy * signY)), s1 = Math.max(N, Math.min(S, s0 + dy * signY));
                    break;
            }
            if (e1 < w1) {
                signX *= -1;
                t = w0, w0 = e0, e0 = t;
                t = w1, w1 = e1, e1 = t;
                if (type in $20b09d42a8d7b86a$var$flipX) overlay.attr("cursor", $20b09d42a8d7b86a$var$cursors[type = $20b09d42a8d7b86a$var$flipX[type]]);
            }
            if (s1 < n1) {
                signY *= -1;
                t = n0, n0 = s0, s0 = t;
                t = n1, n1 = s1, s1 = t;
                if (type in $20b09d42a8d7b86a$var$flipY) overlay.attr("cursor", $20b09d42a8d7b86a$var$cursors[type = $20b09d42a8d7b86a$var$flipY[type]]);
            }
            if (state.selection) selection = state.selection; // May be set by brush.move!
            if (lockX) w1 = selection[0][0], e1 = selection[1][0];
            if (lockY) n1 = selection[0][1], s1 = selection[1][1];
            if (selection[0][0] !== w1 || selection[0][1] !== n1 || selection[1][0] !== e1 || selection[1][1] !== s1) {
                state.selection = [
                    [
                        w1,
                        n1
                    ],
                    [
                        e1,
                        s1
                    ]
                ];
                redraw.call(that);
                emit.brush();
            }
        }
        function ended() {
            (0, $bqAWn.nopropagation)();
            if ((0, $bVR25.event).touches) {
                if ((0, $bVR25.event).touches.length) return;
                if (touchending) clearTimeout(touchending);
                touchending = setTimeout(function() {
                    touchending = null;
                }, 500); // Ghost clicks are delayed!
            } else {
                (0, $8stEL.yesdrag)((0, $bVR25.event).view, moving);
                view.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
            }
            group.attr("pointer-events", "all");
            overlay.attr("cursor", $20b09d42a8d7b86a$var$cursors.overlay);
            if (state.selection) selection = state.selection; // May be set by brush.move (on start)!
            if ($20b09d42a8d7b86a$var$empty(selection)) state.selection = null, redraw.call(that);
            emit.end();
        }
        function keydowned() {
            switch((0, $bVR25.event).keyCode){
                case 16:
                    shifting = signX && signY;
                    break;
                case 18:
                    if (mode === $20b09d42a8d7b86a$var$MODE_HANDLE) {
                        if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
                        if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
                        mode = $20b09d42a8d7b86a$var$MODE_CENTER;
                        move();
                    }
                    break;
                case 32:
                    if (mode === $20b09d42a8d7b86a$var$MODE_HANDLE || mode === $20b09d42a8d7b86a$var$MODE_CENTER) {
                        if (signX < 0) e0 = e1 - dx;
                        else if (signX > 0) w0 = w1 - dx;
                        if (signY < 0) s0 = s1 - dy;
                        else if (signY > 0) n0 = n1 - dy;
                        mode = $20b09d42a8d7b86a$var$MODE_SPACE;
                        overlay.attr("cursor", $20b09d42a8d7b86a$var$cursors.selection);
                        move();
                    }
                    break;
                default:
                    return;
            }
            (0, $bqAWn.default)();
        }
        function keyupped() {
            switch((0, $bVR25.event).keyCode){
                case 16:
                    if (shifting) {
                        lockX = lockY = shifting = false;
                        move();
                    }
                    break;
                case 18:
                    if (mode === $20b09d42a8d7b86a$var$MODE_CENTER) {
                        if (signX < 0) e0 = e1;
                        else if (signX > 0) w0 = w1;
                        if (signY < 0) s0 = s1;
                        else if (signY > 0) n0 = n1;
                        mode = $20b09d42a8d7b86a$var$MODE_HANDLE;
                        move();
                    }
                    break;
                case 32:
                    if (mode === $20b09d42a8d7b86a$var$MODE_SPACE) {
                        if ((0, $bVR25.event).altKey) {
                            if (signX) e0 = e1 - dx * signX, w0 = w1 + dx * signX;
                            if (signY) s0 = s1 - dy * signY, n0 = n1 + dy * signY;
                            mode = $20b09d42a8d7b86a$var$MODE_CENTER;
                        } else {
                            if (signX < 0) e0 = e1;
                            else if (signX > 0) w0 = w1;
                            if (signY < 0) s0 = s1;
                            else if (signY > 0) n0 = n1;
                            mode = $20b09d42a8d7b86a$var$MODE_HANDLE;
                        }
                        overlay.attr("cursor", $20b09d42a8d7b86a$var$cursors[type]);
                        move();
                    }
                    break;
                default:
                    return;
            }
            (0, $bqAWn.default)();
        }
    }
    function touchmoved() {
        emitter(this, arguments).moved();
    }
    function touchended() {
        emitter(this, arguments).ended();
    }
    function initialize() {
        var state = this.__brush || {
            selection: null
        };
        state.extent = $20b09d42a8d7b86a$var$number2(extent.apply(this, arguments));
        state.dim = dim;
        return state;
    }
    brush.extent = function(_) {
        return arguments.length ? (extent = typeof _ === "function" ? _ : (0, $9oEqG.default)($20b09d42a8d7b86a$var$number2(_)), brush) : extent;
    };
    brush.filter = function(_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : (0, $9oEqG.default)(!!_), brush) : filter;
    };
    brush.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : (0, $9oEqG.default)(!!_), brush) : touchable;
    };
    brush.handleSize = function(_) {
        return arguments.length ? (handleSize = +_, brush) : handleSize;
    };
    brush.keyModifiers = function(_) {
        return arguments.length ? (keys = !!_, brush) : keys;
    };
    brush.on = function() {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? brush : value;
    };
    return brush;
}

});
parcelRegister("iBYE9", function(module, exports) {

$parcel$export(module.exports, "default", () => $d8cab9d841f7f89c$export$2e2bcd8739ae039);
var $d8cab9d841f7f89c$var$noop = {
    value: function() {}
};
function $d8cab9d841f7f89c$var$dispatch() {
    for(var i = 0, n = arguments.length, _ = {}, t; i < n; ++i){
        if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
        _[t] = [];
    }
    return new $d8cab9d841f7f89c$var$Dispatch(_);
}
function $d8cab9d841f7f89c$var$Dispatch(_) {
    this._ = _;
}
function $d8cab9d841f7f89c$var$parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {
            type: t,
            name: name
        };
    });
}
$d8cab9d841f7f89c$var$Dispatch.prototype = $d8cab9d841f7f89c$var$dispatch.prototype = {
    constructor: $d8cab9d841f7f89c$var$Dispatch,
    on: function(typename, callback) {
        var _ = this._, T = $d8cab9d841f7f89c$var$parseTypenames(typename + "", _), t, i = -1, n = T.length;
        // If no callback was specified, return the callback of the given type and name.
        if (arguments.length < 2) {
            while(++i < n)if ((t = (typename = T[i]).type) && (t = $d8cab9d841f7f89c$var$get(_[t], typename.name))) return t;
            return;
        }
        // If a type was specified, set the callback for the given type and name.
        // Otherwise, if a null callback was specified, remove callbacks of the given name.
        if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
        while(++i < n){
            if (t = (typename = T[i]).type) _[t] = $d8cab9d841f7f89c$var$set(_[t], typename.name, callback);
            else if (callback == null) for(t in _)_[t] = $d8cab9d841f7f89c$var$set(_[t], typename.name, null);
        }
        return this;
    },
    copy: function() {
        var copy = {}, _ = this._;
        for(var t in _)copy[t] = _[t].slice();
        return new $d8cab9d841f7f89c$var$Dispatch(copy);
    },
    call: function(type, that) {
        if ((n = arguments.length - 2) > 0) for(var args = new Array(n), i = 0, n, t; i < n; ++i)args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    },
    apply: function(type, that, args) {
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for(var t = this._[type], i = 0, n = t.length; i < n; ++i)t[i].value.apply(that, args);
    }
};
function $d8cab9d841f7f89c$var$get(type, name) {
    for(var i = 0, n = type.length, c; i < n; ++i){
        if ((c = type[i]).name === name) return c.value;
    }
}
function $d8cab9d841f7f89c$var$set(type, name, callback) {
    for(var i = 0, n = type.length; i < n; ++i)if (type[i].name === name) {
        type[i] = $d8cab9d841f7f89c$var$noop, type = type.slice(0, i).concat(type.slice(i + 1));
        break;
    }
    if (callback != null) type.push({
        name: name,
        value: callback
    });
    return type;
}
var $d8cab9d841f7f89c$export$2e2bcd8739ae039 = $d8cab9d841f7f89c$var$dispatch;

});

parcelRegister("8stEL", function(module, exports) {

$parcel$export(module.exports, "default", () => $6287f1684b55a9b6$export$2e2bcd8739ae039);
$parcel$export(module.exports, "yesdrag", () => $6287f1684b55a9b6$export$833237748009e1e1);

var $gcg15 = parcelRequire("gcg15");

var $l9DJo = parcelRequire("l9DJo");
function $6287f1684b55a9b6$export$2e2bcd8739ae039(view) {
    var root = view.document.documentElement, selection = (0, $gcg15.default)(view).on("dragstart.drag", (0, $l9DJo.default), true);
    if ("onselectstart" in root) selection.on("selectstart.drag", (0, $l9DJo.default), true);
    else {
        root.__noselect = root.style.MozUserSelect;
        root.style.MozUserSelect = "none";
    }
}
function $6287f1684b55a9b6$export$833237748009e1e1(view, noclick) {
    var root = view.document.documentElement, selection = (0, $gcg15.default)(view).on("dragstart.drag", null);
    if (noclick) {
        selection.on("click.drag", (0, $l9DJo.default), true);
        setTimeout(function() {
            selection.on("click.drag", null);
        }, 0);
    }
    if ("onselectstart" in root) selection.on("selectstart.drag", null);
    else {
        root.style.MozUserSelect = root.__noselect;
        delete root.__noselect;
    }
}

});
parcelRegister("gcg15", function(module, exports) {

$parcel$export(module.exports, "default", () => $030b00c9bd3169a9$export$2e2bcd8739ae039);

var $1LA4c = parcelRequire("1LA4c");
function $030b00c9bd3169a9$export$2e2bcd8739ae039(selector) {
    return typeof selector === "string" ? new (0, $1LA4c.Selection)([
        [
            document.querySelector(selector)
        ]
    ], [
        document.documentElement
    ]) : new (0, $1LA4c.Selection)([
        [
            selector
        ]
    ], (0, $1LA4c.root));
}

});
parcelRegister("1LA4c", function(module, exports) {

$parcel$export(module.exports, "root", () => $14962858e7e73f8d$export$e8e78c978b129247);
$parcel$export(module.exports, "Selection", () => $14962858e7e73f8d$export$52baac22726c72bf);
$parcel$export(module.exports, "default", () => $14962858e7e73f8d$export$2e2bcd8739ae039);

var $8YW8y = parcelRequire("8YW8y");

var $hHR0j = parcelRequire("hHR0j");

var $eSGje = parcelRequire("eSGje");

var $dP9c7 = parcelRequire("dP9c7");

var $gCmD3 = parcelRequire("gCmD3");

var $bNdi7 = parcelRequire("bNdi7");

var $lqUva = parcelRequire("lqUva");

var $9VklS = parcelRequire("9VklS");

var $3460n = parcelRequire("3460n");

var $kGHD6 = parcelRequire("kGHD6");

var $kqgGH = parcelRequire("kqgGH");

var $4Zcci = parcelRequire("4Zcci");

var $b6d9U = parcelRequire("b6d9U");

var $3XaFg = parcelRequire("3XaFg");

var $ltIus = parcelRequire("ltIus");

var $ln4lE = parcelRequire("ln4lE");

var $gs1oT = parcelRequire("gs1oT");

var $7VDk4 = parcelRequire("7VDk4");

var $gDT2O = parcelRequire("gDT2O");

var $hwcZV = parcelRequire("hwcZV");

var $lPV33 = parcelRequire("lPV33");

var $ecDqk = parcelRequire("ecDqk");

var $cJ1Yw = parcelRequire("cJ1Yw");

var $1JXf6 = parcelRequire("1JXf6");

var $c3bo5 = parcelRequire("c3bo5");

var $adyrC = parcelRequire("adyrC");

var $3M9Sn = parcelRequire("3M9Sn");

var $habSE = parcelRequire("habSE");

var $eSASu = parcelRequire("eSASu");

var $bVR25 = parcelRequire("bVR25");

var $dFgZV = parcelRequire("dFgZV");
var $14962858e7e73f8d$export$e8e78c978b129247 = [
    null
];
function $14962858e7e73f8d$export$52baac22726c72bf(groups, parents) {
    this._groups = groups;
    this._parents = parents;
}
function $14962858e7e73f8d$var$selection() {
    return new $14962858e7e73f8d$export$52baac22726c72bf([
        [
            document.documentElement
        ]
    ], $14962858e7e73f8d$export$e8e78c978b129247);
}
$14962858e7e73f8d$export$52baac22726c72bf.prototype = $14962858e7e73f8d$var$selection.prototype = {
    constructor: $14962858e7e73f8d$export$52baac22726c72bf,
    select: (0, $8YW8y.default),
    selectAll: (0, $hHR0j.default),
    filter: (0, $eSGje.default),
    data: (0, $dP9c7.default),
    enter: (0, $gCmD3.default),
    exit: (0, $bNdi7.default),
    join: (0, $lqUva.default),
    merge: (0, $9VklS.default),
    order: (0, $3460n.default),
    sort: (0, $kGHD6.default),
    call: (0, $kqgGH.default),
    nodes: (0, $4Zcci.default),
    node: (0, $b6d9U.default),
    size: (0, $3XaFg.default),
    empty: (0, $ltIus.default),
    each: (0, $ln4lE.default),
    attr: (0, $gs1oT.default),
    style: (0, $7VDk4.default),
    property: (0, $gDT2O.default),
    classed: (0, $hwcZV.default),
    text: (0, $lPV33.default),
    html: (0, $ecDqk.default),
    raise: (0, $cJ1Yw.default),
    lower: (0, $1JXf6.default),
    append: (0, $c3bo5.default),
    insert: (0, $adyrC.default),
    remove: (0, $3M9Sn.default),
    clone: (0, $habSE.default),
    datum: (0, $eSASu.default),
    on: (0, $bVR25.default),
    dispatch: (0, $dFgZV.default)
};
var $14962858e7e73f8d$export$2e2bcd8739ae039 = $14962858e7e73f8d$var$selection;

});
parcelRegister("8YW8y", function(module, exports) {

$parcel$export(module.exports, "default", () => $68a10618cfe10a12$export$2e2bcd8739ae039);

var $1LA4c = parcelRequire("1LA4c");

var $d07D9 = parcelRequire("d07D9");
function $68a10618cfe10a12$export$2e2bcd8739ae039(select) {
    if (typeof select !== "function") select = (0, $d07D9.default)(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
        }
    }
    return new (0, $1LA4c.Selection)(subgroups, this._parents);
}

});
parcelRegister("d07D9", function(module, exports) {

$parcel$export(module.exports, "default", () => $977131ae8c565617$export$2e2bcd8739ae039);
function $977131ae8c565617$var$none() {}
function $977131ae8c565617$export$2e2bcd8739ae039(selector) {
    return selector == null ? $977131ae8c565617$var$none : function() {
        return this.querySelector(selector);
    };
}

});


parcelRegister("hHR0j", function(module, exports) {

$parcel$export(module.exports, "default", () => $ce3f9155814cc492$export$2e2bcd8739ae039);

var $1LA4c = parcelRequire("1LA4c");

var $7DUTo = parcelRequire("7DUTo");
function $ce3f9155814cc492$export$2e2bcd8739ae039(select) {
    if (typeof select !== "function") select = (0, $7DUTo.default)(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            subgroups.push(select.call(node, node.__data__, i, group));
            parents.push(node);
        }
    }
    return new (0, $1LA4c.Selection)(subgroups, parents);
}

});
parcelRegister("7DUTo", function(module, exports) {

$parcel$export(module.exports, "default", () => $59084e92a0948325$export$2e2bcd8739ae039);
function $59084e92a0948325$var$empty() {
    return [];
}
function $59084e92a0948325$export$2e2bcd8739ae039(selector) {
    return selector == null ? $59084e92a0948325$var$empty : function() {
        return this.querySelectorAll(selector);
    };
}

});


parcelRegister("eSGje", function(module, exports) {

$parcel$export(module.exports, "default", () => $ad56ed88b8127ae4$export$2e2bcd8739ae039);

var $1LA4c = parcelRequire("1LA4c");

var $2R3nw = parcelRequire("2R3nw");
function $ad56ed88b8127ae4$export$2e2bcd8739ae039(match) {
    if (typeof match !== "function") match = (0, $2R3nw.default)(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
    }
    return new (0, $1LA4c.Selection)(subgroups, this._parents);
}

});
parcelRegister("2R3nw", function(module, exports) {

$parcel$export(module.exports, "default", () => $214326df0229880c$export$2e2bcd8739ae039);
function $214326df0229880c$export$2e2bcd8739ae039(selector) {
    return function() {
        return this.matches(selector);
    };
}

});


parcelRegister("dP9c7", function(module, exports) {

$parcel$export(module.exports, "default", () => $a1072b9fda0a7e71$export$2e2bcd8739ae039);

var $1LA4c = parcelRequire("1LA4c");

var $gCmD3 = parcelRequire("gCmD3");

var $7fd6B = parcelRequire("7fd6B");
var $a1072b9fda0a7e71$var$keyPrefix = "$"; // Protect against keys like “__proto__”.
function $a1072b9fda0a7e71$var$bindIndex(parent, group, enter, update, exit, data) {
    var i = 0, node, groupLength = group.length, dataLength = data.length;
    // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for(; i < dataLength; ++i)if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
    } else enter[i] = new (0, $gCmD3.EnterNode)(parent, data[i]);
    // Put any non-null nodes that don’t fit into exit.
    for(; i < groupLength; ++i)if (node = group[i]) exit[i] = node;
}
function $a1072b9fda0a7e71$var$bindKey(parent, group, enter, update, exit, data, key) {
    var i, node, nodeByKeyValue = {}, groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
    // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for(i = 0; i < groupLength; ++i)if (node = group[i]) {
        keyValues[i] = keyValue = $a1072b9fda0a7e71$var$keyPrefix + key.call(node, node.__data__, i, group);
        if (keyValue in nodeByKeyValue) exit[i] = node;
        else nodeByKeyValue[keyValue] = node;
    }
    // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for(i = 0; i < dataLength; ++i){
        keyValue = $a1072b9fda0a7e71$var$keyPrefix + key.call(parent, data[i], i, data);
        if (node = nodeByKeyValue[keyValue]) {
            update[i] = node;
            node.__data__ = data[i];
            nodeByKeyValue[keyValue] = null;
        } else enter[i] = new (0, $gCmD3.EnterNode)(parent, data[i]);
    }
    // Add any remaining nodes that were not bound to data to exit.
    for(i = 0; i < groupLength; ++i)if ((node = group[i]) && nodeByKeyValue[keyValues[i]] === node) exit[i] = node;
}
function $a1072b9fda0a7e71$export$2e2bcd8739ae039(value, key) {
    if (!value) {
        data = new Array(this.size()), j = -1;
        this.each(function(d) {
            data[++j] = d;
        });
        return data;
    }
    var bind = key ? $a1072b9fda0a7e71$var$bindKey : $a1072b9fda0a7e71$var$bindIndex, parents = this._parents, groups = this._groups;
    if (typeof value !== "function") value = (0, $7fd6B.default)(value);
    for(var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j){
        var parent = parents[j], group = groups[j], groupLength = group.length, data = value.call(parent, parent && parent.__data__, j, parents), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
        bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
        // Now connect the enter nodes to their following update node, such that
        // appendChild can insert the materialized enter node before this node,
        // rather than at the end of the parent node.
        for(var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0)if (previous = enterGroup[i0]) {
            if (i0 >= i1) i1 = i0 + 1;
            while(!(next = updateGroup[i1]) && ++i1 < dataLength);
            previous._next = next || null;
        }
    }
    update = new (0, $1LA4c.Selection)(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
}

});
parcelRegister("gCmD3", function(module, exports) {

$parcel$export(module.exports, "default", () => $c191bf97be858ad7$export$2e2bcd8739ae039);
$parcel$export(module.exports, "EnterNode", () => $c191bf97be858ad7$export$67b01759a14cf6a4);

var $hILbP = parcelRequire("hILbP");

var $1LA4c = parcelRequire("1LA4c");
function $c191bf97be858ad7$export$2e2bcd8739ae039() {
    return new (0, $1LA4c.Selection)(this._enter || this._groups.map((0, $hILbP.default)), this._parents);
}
function $c191bf97be858ad7$export$67b01759a14cf6a4(parent, datum) {
    this.ownerDocument = parent.ownerDocument;
    this.namespaceURI = parent.namespaceURI;
    this._next = null;
    this._parent = parent;
    this.__data__ = datum;
}
$c191bf97be858ad7$export$67b01759a14cf6a4.prototype = {
    constructor: $c191bf97be858ad7$export$67b01759a14cf6a4,
    appendChild: function(child) {
        return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function(child, next) {
        return this._parent.insertBefore(child, next);
    },
    querySelector: function(selector) {
        return this._parent.querySelector(selector);
    },
    querySelectorAll: function(selector) {
        return this._parent.querySelectorAll(selector);
    }
};

});
parcelRegister("hILbP", function(module, exports) {

$parcel$export(module.exports, "default", () => $ce6b26a6bf24ed2e$export$2e2bcd8739ae039);
function $ce6b26a6bf24ed2e$export$2e2bcd8739ae039(update) {
    return new Array(update.length);
}

});


parcelRegister("7fd6B", function(module, exports) {

$parcel$export(module.exports, "default", () => $546419958b3d3fa5$export$2e2bcd8739ae039);
function $546419958b3d3fa5$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}

});


parcelRegister("bNdi7", function(module, exports) {

$parcel$export(module.exports, "default", () => $895e94b1bdb105ba$export$2e2bcd8739ae039);

var $hILbP = parcelRequire("hILbP");

var $1LA4c = parcelRequire("1LA4c");
function $895e94b1bdb105ba$export$2e2bcd8739ae039() {
    return new (0, $1LA4c.Selection)(this._exit || this._groups.map((0, $hILbP.default)), this._parents);
}

});

parcelRegister("lqUva", function(module, exports) {

$parcel$export(module.exports, "default", () => $f9a7dabb1f950923$export$2e2bcd8739ae039);
function $f9a7dabb1f950923$export$2e2bcd8739ae039(onenter, onupdate, onexit) {
    var enter = this.enter(), update = this, exit = this.exit();
    enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
    if (onupdate != null) update = onupdate(update);
    if (onexit == null) exit.remove();
    else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
}

});

parcelRegister("9VklS", function(module, exports) {

$parcel$export(module.exports, "default", () => $7399395dfa5cdffe$export$2e2bcd8739ae039);

var $1LA4c = parcelRequire("1LA4c");
function $7399395dfa5cdffe$export$2e2bcd8739ae039(selection) {
    for(var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
    }
    for(; j < m0; ++j)merges[j] = groups0[j];
    return new (0, $1LA4c.Selection)(merges, this._parents);
}

});

parcelRegister("3460n", function(module, exports) {

$parcel$export(module.exports, "default", () => $23b667472b652f35$export$2e2bcd8739ae039);
function $23b667472b652f35$export$2e2bcd8739ae039() {
    for(var groups = this._groups, j = -1, m = groups.length; ++j < m;){
        for(var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;)if (node = group[i]) {
            if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
            next = node;
        }
    }
    return this;
}

});

parcelRegister("kGHD6", function(module, exports) {

$parcel$export(module.exports, "default", () => $f0f992d6191db2d8$export$2e2bcd8739ae039);

var $1LA4c = parcelRequire("1LA4c");
function $f0f992d6191db2d8$export$2e2bcd8739ae039(compare) {
    if (!compare) compare = $f0f992d6191db2d8$var$ascending;
    function compareNode(a, b) {
        return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }
    for(var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group[i]) sortgroup[i] = node;
        sortgroup.sort(compareNode);
    }
    return new (0, $1LA4c.Selection)(sortgroups, this._parents).order();
}
function $f0f992d6191db2d8$var$ascending(a, b) {
    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

});

parcelRegister("kqgGH", function(module, exports) {

$parcel$export(module.exports, "default", () => $ede32e31d84aa724$export$2e2bcd8739ae039);
function $ede32e31d84aa724$export$2e2bcd8739ae039() {
    var callback = arguments[0];
    arguments[0] = this;
    callback.apply(null, arguments);
    return this;
}

});

parcelRegister("4Zcci", function(module, exports) {

$parcel$export(module.exports, "default", () => $3a165210b84b07c4$export$2e2bcd8739ae039);
function $3a165210b84b07c4$export$2e2bcd8739ae039() {
    var nodes = new Array(this.size()), i = -1;
    this.each(function() {
        nodes[++i] = this;
    });
    return nodes;
}

});

parcelRegister("b6d9U", function(module, exports) {

$parcel$export(module.exports, "default", () => $814a765126a73a7d$export$2e2bcd8739ae039);
function $814a765126a73a7d$export$2e2bcd8739ae039() {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j)for(var group = groups[j], i = 0, n = group.length; i < n; ++i){
        var node = group[i];
        if (node) return node;
    }
    return null;
}

});

parcelRegister("3XaFg", function(module, exports) {

$parcel$export(module.exports, "default", () => $2e0f278b2a584161$export$2e2bcd8739ae039);
function $2e0f278b2a584161$export$2e2bcd8739ae039() {
    var size = 0;
    this.each(function() {
        ++size;
    });
    return size;
}

});

parcelRegister("ltIus", function(module, exports) {

$parcel$export(module.exports, "default", () => $fa2ed1436540d19f$export$2e2bcd8739ae039);
function $fa2ed1436540d19f$export$2e2bcd8739ae039() {
    return !this.node();
}

});

parcelRegister("ln4lE", function(module, exports) {

$parcel$export(module.exports, "default", () => $f8ef1e670fb121c5$export$2e2bcd8739ae039);
function $f8ef1e670fb121c5$export$2e2bcd8739ae039(callback) {
    for(var groups = this._groups, j = 0, m = groups.length; j < m; ++j){
        for(var group = groups[j], i = 0, n = group.length, node; i < n; ++i)if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
    return this;
}

});

parcelRegister("gs1oT", function(module, exports) {

$parcel$export(module.exports, "default", () => $bfa058fba9e87c85$export$2e2bcd8739ae039);

var $gDfVI = parcelRequire("gDfVI");
function $bfa058fba9e87c85$var$attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function $bfa058fba9e87c85$var$attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function $bfa058fba9e87c85$var$attrConstant(name, value) {
    return function() {
        this.setAttribute(name, value);
    };
}
function $bfa058fba9e87c85$var$attrConstantNS(fullname, value) {
    return function() {
        this.setAttributeNS(fullname.space, fullname.local, value);
    };
}
function $bfa058fba9e87c85$var$attrFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttribute(name);
        else this.setAttribute(name, v);
    };
}
function $bfa058fba9e87c85$var$attrFunctionNS(fullname, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
        else this.setAttributeNS(fullname.space, fullname.local, v);
    };
}
function $bfa058fba9e87c85$export$2e2bcd8739ae039(name, value) {
    var fullname = (0, $gDfVI.default)(name);
    if (arguments.length < 2) {
        var node = this.node();
        return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? $bfa058fba9e87c85$var$attrRemoveNS : $bfa058fba9e87c85$var$attrRemove : typeof value === "function" ? fullname.local ? $bfa058fba9e87c85$var$attrFunctionNS : $bfa058fba9e87c85$var$attrFunction : fullname.local ? $bfa058fba9e87c85$var$attrConstantNS : $bfa058fba9e87c85$var$attrConstant)(fullname, value));
}

});
parcelRegister("gDfVI", function(module, exports) {

$parcel$export(module.exports, "default", () => $c1bca53770d011b2$export$2e2bcd8739ae039);

var $4uvKo = parcelRequire("4uvKo");
function $c1bca53770d011b2$export$2e2bcd8739ae039(name) {
    var prefix = name += "", i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return (0, $4uvKo.default).hasOwnProperty(prefix) ? {
        space: (0, $4uvKo.default)[prefix],
        local: name
    } : name;
}

});
parcelRegister("4uvKo", function(module, exports) {

$parcel$export(module.exports, "xhtml", () => $34529716ce8c0b84$export$201a3f7520ccc326);
$parcel$export(module.exports, "default", () => $34529716ce8c0b84$export$2e2bcd8739ae039);
var $34529716ce8c0b84$export$201a3f7520ccc326 = "http://www.w3.org/1999/xhtml";
var $34529716ce8c0b84$export$2e2bcd8739ae039 = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: $34529716ce8c0b84$export$201a3f7520ccc326,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
};

});



parcelRegister("7VDk4", function(module, exports) {

$parcel$export(module.exports, "default", () => $5c5c5bf0bf754673$export$2e2bcd8739ae039);
$parcel$export(module.exports, "styleValue", () => $5c5c5bf0bf754673$export$5e3cec964f0b5efd);

var $kDuUi = parcelRequire("kDuUi");
function $5c5c5bf0bf754673$var$styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function $5c5c5bf0bf754673$var$styleConstant(name, value, priority) {
    return function() {
        this.style.setProperty(name, value, priority);
    };
}
function $5c5c5bf0bf754673$var$styleFunction(name, value, priority) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.style.removeProperty(name);
        else this.style.setProperty(name, v, priority);
    };
}
function $5c5c5bf0bf754673$export$2e2bcd8739ae039(name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? $5c5c5bf0bf754673$var$styleRemove : typeof value === "function" ? $5c5c5bf0bf754673$var$styleFunction : $5c5c5bf0bf754673$var$styleConstant)(name, value, priority == null ? "" : priority)) : $5c5c5bf0bf754673$export$5e3cec964f0b5efd(this.node(), name);
}
function $5c5c5bf0bf754673$export$5e3cec964f0b5efd(node, name) {
    return node.style.getPropertyValue(name) || (0, $kDuUi.default)(node).getComputedStyle(node, null).getPropertyValue(name);
}

});
parcelRegister("kDuUi", function(module, exports) {

$parcel$export(module.exports, "default", () => $f05f6ca0b7452e0a$export$2e2bcd8739ae039);
function $f05f6ca0b7452e0a$export$2e2bcd8739ae039(node) {
    return node.ownerDocument && node.ownerDocument.defaultView // node is a Node
     || node.document && node // node is a Window
     || node.defaultView; // node is a Document
}

});


parcelRegister("gDT2O", function(module, exports) {

$parcel$export(module.exports, "default", () => $c1dafc873f8f6c11$export$2e2bcd8739ae039);
function $c1dafc873f8f6c11$var$propertyRemove(name) {
    return function() {
        delete this[name];
    };
}
function $c1dafc873f8f6c11$var$propertyConstant(name, value) {
    return function() {
        this[name] = value;
    };
}
function $c1dafc873f8f6c11$var$propertyFunction(name, value) {
    return function() {
        var v = value.apply(this, arguments);
        if (v == null) delete this[name];
        else this[name] = v;
    };
}
function $c1dafc873f8f6c11$export$2e2bcd8739ae039(name, value) {
    return arguments.length > 1 ? this.each((value == null ? $c1dafc873f8f6c11$var$propertyRemove : typeof value === "function" ? $c1dafc873f8f6c11$var$propertyFunction : $c1dafc873f8f6c11$var$propertyConstant)(name, value)) : this.node()[name];
}

});

parcelRegister("hwcZV", function(module, exports) {

$parcel$export(module.exports, "default", () => $cc0f81e64fb9b9ac$export$2e2bcd8739ae039);
function $cc0f81e64fb9b9ac$var$classArray(string) {
    return string.trim().split(/^|\s+/);
}
function $cc0f81e64fb9b9ac$var$classList(node) {
    return node.classList || new $cc0f81e64fb9b9ac$var$ClassList(node);
}
function $cc0f81e64fb9b9ac$var$ClassList(node) {
    this._node = node;
    this._names = $cc0f81e64fb9b9ac$var$classArray(node.getAttribute("class") || "");
}
$cc0f81e64fb9b9ac$var$ClassList.prototype = {
    add: function(name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
            this._names.push(name);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    remove: function(name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
            this._names.splice(i, 1);
            this._node.setAttribute("class", this._names.join(" "));
        }
    },
    contains: function(name) {
        return this._names.indexOf(name) >= 0;
    }
};
function $cc0f81e64fb9b9ac$var$classedAdd(node, names) {
    var list = $cc0f81e64fb9b9ac$var$classList(node), i = -1, n = names.length;
    while(++i < n)list.add(names[i]);
}
function $cc0f81e64fb9b9ac$var$classedRemove(node, names) {
    var list = $cc0f81e64fb9b9ac$var$classList(node), i = -1, n = names.length;
    while(++i < n)list.remove(names[i]);
}
function $cc0f81e64fb9b9ac$var$classedTrue(names) {
    return function() {
        $cc0f81e64fb9b9ac$var$classedAdd(this, names);
    };
}
function $cc0f81e64fb9b9ac$var$classedFalse(names) {
    return function() {
        $cc0f81e64fb9b9ac$var$classedRemove(this, names);
    };
}
function $cc0f81e64fb9b9ac$var$classedFunction(names, value) {
    return function() {
        (value.apply(this, arguments) ? $cc0f81e64fb9b9ac$var$classedAdd : $cc0f81e64fb9b9ac$var$classedRemove)(this, names);
    };
}
function $cc0f81e64fb9b9ac$export$2e2bcd8739ae039(name, value) {
    var names = $cc0f81e64fb9b9ac$var$classArray(name + "");
    if (arguments.length < 2) {
        var list = $cc0f81e64fb9b9ac$var$classList(this.node()), i = -1, n = names.length;
        while(++i < n)if (!list.contains(names[i])) return false;
        return true;
    }
    return this.each((typeof value === "function" ? $cc0f81e64fb9b9ac$var$classedFunction : value ? $cc0f81e64fb9b9ac$var$classedTrue : $cc0f81e64fb9b9ac$var$classedFalse)(names, value));
}

});

parcelRegister("lPV33", function(module, exports) {

$parcel$export(module.exports, "default", () => $fe5a9d0134b7dc2f$export$2e2bcd8739ae039);
function $fe5a9d0134b7dc2f$var$textRemove() {
    this.textContent = "";
}
function $fe5a9d0134b7dc2f$var$textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function $fe5a9d0134b7dc2f$var$textFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
    };
}
function $fe5a9d0134b7dc2f$export$2e2bcd8739ae039(value) {
    return arguments.length ? this.each(value == null ? $fe5a9d0134b7dc2f$var$textRemove : (typeof value === "function" ? $fe5a9d0134b7dc2f$var$textFunction : $fe5a9d0134b7dc2f$var$textConstant)(value)) : this.node().textContent;
}

});

parcelRegister("ecDqk", function(module, exports) {

$parcel$export(module.exports, "default", () => $a570c4684efbf6f3$export$2e2bcd8739ae039);
function $a570c4684efbf6f3$var$htmlRemove() {
    this.innerHTML = "";
}
function $a570c4684efbf6f3$var$htmlConstant(value) {
    return function() {
        this.innerHTML = value;
    };
}
function $a570c4684efbf6f3$var$htmlFunction(value) {
    return function() {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
    };
}
function $a570c4684efbf6f3$export$2e2bcd8739ae039(value) {
    return arguments.length ? this.each(value == null ? $a570c4684efbf6f3$var$htmlRemove : (typeof value === "function" ? $a570c4684efbf6f3$var$htmlFunction : $a570c4684efbf6f3$var$htmlConstant)(value)) : this.node().innerHTML;
}

});

parcelRegister("cJ1Yw", function(module, exports) {

$parcel$export(module.exports, "default", () => $943b383e7c687c14$export$2e2bcd8739ae039);
function $943b383e7c687c14$var$raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
}
function $943b383e7c687c14$export$2e2bcd8739ae039() {
    return this.each($943b383e7c687c14$var$raise);
}

});

parcelRegister("1JXf6", function(module, exports) {

$parcel$export(module.exports, "default", () => $1447f2bc09741973$export$2e2bcd8739ae039);
function $1447f2bc09741973$var$lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function $1447f2bc09741973$export$2e2bcd8739ae039() {
    return this.each($1447f2bc09741973$var$lower);
}

});

parcelRegister("c3bo5", function(module, exports) {

$parcel$export(module.exports, "default", () => $8c5e992a6c7cd9f3$export$2e2bcd8739ae039);

var $ZMzK7 = parcelRequire("ZMzK7");
function $8c5e992a6c7cd9f3$export$2e2bcd8739ae039(name) {
    var create = typeof name === "function" ? name : (0, $ZMzK7.default)(name);
    return this.select(function() {
        return this.appendChild(create.apply(this, arguments));
    });
}

});
parcelRegister("ZMzK7", function(module, exports) {

$parcel$export(module.exports, "default", () => $0b9b60b3ae806231$export$2e2bcd8739ae039);

var $gDfVI = parcelRequire("gDfVI");

var $4uvKo = parcelRequire("4uvKo");
function $0b9b60b3ae806231$var$creatorInherit(name) {
    return function() {
        var document = this.ownerDocument, uri = this.namespaceURI;
        return uri === (0, $4uvKo.xhtml) && document.documentElement.namespaceURI === (0, $4uvKo.xhtml) ? document.createElement(name) : document.createElementNS(uri, name);
    };
}
function $0b9b60b3ae806231$var$creatorFixed(fullname) {
    return function() {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
}
function $0b9b60b3ae806231$export$2e2bcd8739ae039(name) {
    var fullname = (0, $gDfVI.default)(name);
    return (fullname.local ? $0b9b60b3ae806231$var$creatorFixed : $0b9b60b3ae806231$var$creatorInherit)(fullname);
}

});


parcelRegister("adyrC", function(module, exports) {

$parcel$export(module.exports, "default", () => $7705d63bc40f7741$export$2e2bcd8739ae039);

var $ZMzK7 = parcelRequire("ZMzK7");

var $d07D9 = parcelRequire("d07D9");
function $7705d63bc40f7741$var$constantNull() {
    return null;
}
function $7705d63bc40f7741$export$2e2bcd8739ae039(name, before) {
    var create = typeof name === "function" ? name : (0, $ZMzK7.default)(name), select = before == null ? $7705d63bc40f7741$var$constantNull : typeof before === "function" ? before : (0, $d07D9.default)(before);
    return this.select(function() {
        return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
}

});

parcelRegister("3M9Sn", function(module, exports) {

$parcel$export(module.exports, "default", () => $2bfd83f5ac1085de$export$2e2bcd8739ae039);
function $2bfd83f5ac1085de$var$remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
}
function $2bfd83f5ac1085de$export$2e2bcd8739ae039() {
    return this.each($2bfd83f5ac1085de$var$remove);
}

});

parcelRegister("habSE", function(module, exports) {

$parcel$export(module.exports, "default", () => $c7ec96107d440f80$export$2e2bcd8739ae039);
function $c7ec96107d440f80$var$selection_cloneShallow() {
    var clone = this.cloneNode(false), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function $c7ec96107d440f80$var$selection_cloneDeep() {
    var clone = this.cloneNode(true), parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function $c7ec96107d440f80$export$2e2bcd8739ae039(deep) {
    return this.select(deep ? $c7ec96107d440f80$var$selection_cloneDeep : $c7ec96107d440f80$var$selection_cloneShallow);
}

});

parcelRegister("eSASu", function(module, exports) {

$parcel$export(module.exports, "default", () => $ad52b700d8add1fb$export$2e2bcd8739ae039);
function $ad52b700d8add1fb$export$2e2bcd8739ae039(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
}

});

parcelRegister("bVR25", function(module, exports) {

$parcel$export(module.exports, "event", () => $8afe27c628a70f2a$export$6cd530ed55e06764);
$parcel$export(module.exports, "default", () => $8afe27c628a70f2a$export$2e2bcd8739ae039);
$parcel$export(module.exports, "customEvent", () => $8afe27c628a70f2a$export$4c724631b4750aef);
var $8afe27c628a70f2a$var$filterEvents = {};
var $8afe27c628a70f2a$export$6cd530ed55e06764 = null;
if (typeof document !== "undefined") {
    var $8afe27c628a70f2a$var$element = document.documentElement;
    if (!("onmouseenter" in $8afe27c628a70f2a$var$element)) $8afe27c628a70f2a$var$filterEvents = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
}
function $8afe27c628a70f2a$var$filterContextListener(listener, index, group) {
    listener = $8afe27c628a70f2a$var$contextListener(listener, index, group);
    return function(event) {
        var related = event.relatedTarget;
        if (!related || related !== this && !(related.compareDocumentPosition(this) & 8)) listener.call(this, event);
    };
}
function $8afe27c628a70f2a$var$contextListener(listener, index, group) {
    return function(event1) {
        var event0 = $8afe27c628a70f2a$export$6cd530ed55e06764; // Events can be reentrant (e.g., focus).
        $8afe27c628a70f2a$export$6cd530ed55e06764 = event1;
        try {
            listener.call(this, this.__data__, index, group);
        } finally{
            $8afe27c628a70f2a$export$6cd530ed55e06764 = event0;
        }
    };
}
function $8afe27c628a70f2a$var$parseTypenames(typenames) {
    return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        return {
            type: t,
            name: name
        };
    });
}
function $8afe27c628a70f2a$var$onRemove(typename) {
    return function() {
        var on = this.__on;
        if (!on) return;
        for(var j = 0, i = -1, m = on.length, o; j < m; ++j)if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) this.removeEventListener(o.type, o.listener, o.capture);
        else on[++i] = o;
        if (++i) on.length = i;
        else delete this.__on;
    };
}
function $8afe27c628a70f2a$var$onAdd(typename, value, capture) {
    var wrap = $8afe27c628a70f2a$var$filterEvents.hasOwnProperty(typename.type) ? $8afe27c628a70f2a$var$filterContextListener : $8afe27c628a70f2a$var$contextListener;
    return function(d, i, group) {
        var on = this.__on, o, listener = wrap(value, i, group);
        if (on) {
            for(var j = 0, m = on.length; j < m; ++j)if ((o = on[j]).type === typename.type && o.name === typename.name) {
                this.removeEventListener(o.type, o.listener, o.capture);
                this.addEventListener(o.type, o.listener = listener, o.capture = capture);
                o.value = value;
                return;
            }
        }
        this.addEventListener(typename.type, listener, capture);
        o = {
            type: typename.type,
            name: typename.name,
            value: value,
            listener: listener,
            capture: capture
        };
        if (!on) this.__on = [
            o
        ];
        else on.push(o);
    };
}
function $8afe27c628a70f2a$export$2e2bcd8739ae039(typename, value, capture) {
    var typenames = $8afe27c628a70f2a$var$parseTypenames(typename + ""), i, n = typenames.length, t;
    if (arguments.length < 2) {
        var on = this.node().__on;
        if (on) for(var j = 0, m = on.length, o; j < m; ++j)for(i = 0, o = on[j]; i < n; ++i){
            if ((t = typenames[i]).type === o.type && t.name === o.name) return o.value;
        }
        return;
    }
    on = value ? $8afe27c628a70f2a$var$onAdd : $8afe27c628a70f2a$var$onRemove;
    if (capture == null) capture = false;
    for(i = 0; i < n; ++i)this.each(on(typenames[i], value, capture));
    return this;
}
function $8afe27c628a70f2a$export$4c724631b4750aef(event1, listener, that, args) {
    var event0 = $8afe27c628a70f2a$export$6cd530ed55e06764;
    event1.sourceEvent = $8afe27c628a70f2a$export$6cd530ed55e06764;
    $8afe27c628a70f2a$export$6cd530ed55e06764 = event1;
    try {
        return listener.apply(that, args);
    } finally{
        $8afe27c628a70f2a$export$6cd530ed55e06764 = event0;
    }
}

});

parcelRegister("dFgZV", function(module, exports) {

$parcel$export(module.exports, "default", () => $9f2c4a194b26ec26$export$2e2bcd8739ae039);

var $kDuUi = parcelRequire("kDuUi");
function $9f2c4a194b26ec26$var$dispatchEvent(node, type, params) {
    var window = (0, $kDuUi.default)(node), event = window.CustomEvent;
    if (typeof event === "function") event = new event(type, params);
    else {
        event = window.document.createEvent("Event");
        if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
        else event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
}
function $9f2c4a194b26ec26$var$dispatchConstant(type, params) {
    return function() {
        return $9f2c4a194b26ec26$var$dispatchEvent(this, type, params);
    };
}
function $9f2c4a194b26ec26$var$dispatchFunction(type, params) {
    return function() {
        return $9f2c4a194b26ec26$var$dispatchEvent(this, type, params.apply(this, arguments));
    };
}
function $9f2c4a194b26ec26$export$2e2bcd8739ae039(type, params) {
    return this.each((typeof params === "function" ? $9f2c4a194b26ec26$var$dispatchFunction : $9f2c4a194b26ec26$var$dispatchConstant)(type, params));
}

});



parcelRegister("l9DJo", function(module, exports) {

$parcel$export(module.exports, "nopropagation", () => $f669420494830be1$export$2e2561858db9bf47);
$parcel$export(module.exports, "default", () => $f669420494830be1$export$2e2bcd8739ae039);

var $bVR25 = parcelRequire("bVR25");
function $f669420494830be1$export$2e2561858db9bf47() {
    (0, $bVR25.event).stopImmediatePropagation();
}
function $f669420494830be1$export$2e2bcd8739ae039() {
    (0, $bVR25.event).preventDefault();
    (0, $bVR25.event).stopImmediatePropagation();
}

});


parcelRegister("03m37", function(module, exports) {

$parcel$export(module.exports, "default", () => $00a162764493721c$export$2e2bcd8739ae039);

var $abtVK = parcelRequire("abtVK");

var $emQa8 = parcelRequire("emQa8");

var $by39a = parcelRequire("by39a");

var $eqaiw = parcelRequire("eqaiw");

var $97hTl = parcelRequire("97hTl");

var $e8zLv = parcelRequire("e8zLv");

var $a20cS = parcelRequire("a20cS");

var $8BrP4 = parcelRequire("8BrP4");

var $8XNGd = parcelRequire("8XNGd");
function $00a162764493721c$export$2e2bcd8739ae039(a, b) {
    var t = typeof b, c;
    return b == null || t === "boolean" ? (0, $8BrP4.default)(b) : (t === "number" ? (0, $97hTl.default) : t === "string" ? (c = (0, $abtVK.default)(b)) ? (b = c, $emQa8.default) : (0, $a20cS.default) : b instanceof (0, $abtVK.default) ? (0, $emQa8.default) : b instanceof Date ? (0, $eqaiw.default) : (0, $8XNGd.isNumberArray)(b) ? (0, $8XNGd.default) : Array.isArray(b) ? (0, $by39a.genericArray) : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? (0, $e8zLv.default) : (0, $97hTl.default))(a, b);
}

});
parcelRegister("abtVK", function(module, exports) {

$parcel$export(module.exports, "Color", () => Color);
$parcel$export(module.exports, "darker", () => darker);
$parcel$export(module.exports, "brighter", () => brighter);
$parcel$export(module.exports, "default", () => color);
$parcel$export(module.exports, "hslConvert", () => hslConvert);
$parcel$export(module.exports, "Rgb", () => Rgb);
$parcel$export(module.exports, "rgbConvert", () => rgbConvert);
$parcel$export(module.exports, "rgb", () => rgb);
$parcel$export(module.exports, "hsl", () => hsl);

var $6nWEw = parcelRequire("6nWEw");
function Color() {}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp("^rgb\\(" + [
    reI,
    reI,
    reI
] + "\\)$"), reRgbPercent = new RegExp("^rgb\\(" + [
    reP,
    reP,
    reP
] + "\\)$"), reRgbaInteger = new RegExp("^rgba\\(" + [
    reI,
    reI,
    reI,
    reN
] + "\\)$"), reRgbaPercent = new RegExp("^rgba\\(" + [
    reP,
    reP,
    reP,
    reN
] + "\\)$"), reHslPercent = new RegExp("^hsl\\(" + [
    reN,
    reP,
    reP
] + "\\)$"), reHslaPercent = new RegExp("^hsla\\(" + [
    reN,
    reP,
    reP,
    reN
] + "\\)$");
var named = {
    aliceblue: 0xf0f8ff,
    antiquewhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquamarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedalmond: 0xffebcd,
    blue: 0x0000ff,
    blueviolet: 0x8a2be2,
    brown: 0xa52a2a,
    burlywood: 0xdeb887,
    cadetblue: 0x5f9ea0,
    chartreuse: 0x7fff00,
    chocolate: 0xd2691e,
    coral: 0xff7f50,
    cornflowerblue: 0x6495ed,
    cornsilk: 0xfff8dc,
    crimson: 0xdc143c,
    cyan: 0x00ffff,
    darkblue: 0x00008b,
    darkcyan: 0x008b8b,
    darkgoldenrod: 0xb8860b,
    darkgray: 0xa9a9a9,
    darkgreen: 0x006400,
    darkgrey: 0xa9a9a9,
    darkkhaki: 0xbdb76b,
    darkmagenta: 0x8b008b,
    darkolivegreen: 0x556b2f,
    darkorange: 0xff8c00,
    darkorchid: 0x9932cc,
    darkred: 0x8b0000,
    darksalmon: 0xe9967a,
    darkseagreen: 0x8fbc8f,
    darkslateblue: 0x483d8b,
    darkslategray: 0x2f4f4f,
    darkslategrey: 0x2f4f4f,
    darkturquoise: 0x00ced1,
    darkviolet: 0x9400d3,
    deeppink: 0xff1493,
    deepskyblue: 0x00bfff,
    dimgray: 0x696969,
    dimgrey: 0x696969,
    dodgerblue: 0x1e90ff,
    firebrick: 0xb22222,
    floralwhite: 0xfffaf0,
    forestgreen: 0x228b22,
    fuchsia: 0xff00ff,
    gainsboro: 0xdcdcdc,
    ghostwhite: 0xf8f8ff,
    gold: 0xffd700,
    goldenrod: 0xdaa520,
    gray: 0x808080,
    green: 0x008000,
    greenyellow: 0xadff2f,
    grey: 0x808080,
    honeydew: 0xf0fff0,
    hotpink: 0xff69b4,
    indianred: 0xcd5c5c,
    indigo: 0x4b0082,
    ivory: 0xfffff0,
    khaki: 0xf0e68c,
    lavender: 0xe6e6fa,
    lavenderblush: 0xfff0f5,
    lawngreen: 0x7cfc00,
    lemonchiffon: 0xfffacd,
    lightblue: 0xadd8e6,
    lightcoral: 0xf08080,
    lightcyan: 0xe0ffff,
    lightgoldenrodyellow: 0xfafad2,
    lightgray: 0xd3d3d3,
    lightgreen: 0x90ee90,
    lightgrey: 0xd3d3d3,
    lightpink: 0xffb6c1,
    lightsalmon: 0xffa07a,
    lightseagreen: 0x20b2aa,
    lightskyblue: 0x87cefa,
    lightslategray: 0x778899,
    lightslategrey: 0x778899,
    lightsteelblue: 0xb0c4de,
    lightyellow: 0xffffe0,
    lime: 0x00ff00,
    limegreen: 0x32cd32,
    linen: 0xfaf0e6,
    magenta: 0xff00ff,
    maroon: 0x800000,
    mediumaquamarine: 0x66cdaa,
    mediumblue: 0x0000cd,
    mediumorchid: 0xba55d3,
    mediumpurple: 0x9370db,
    mediumseagreen: 0x3cb371,
    mediumslateblue: 0x7b68ee,
    mediumspringgreen: 0x00fa9a,
    mediumturquoise: 0x48d1cc,
    mediumvioletred: 0xc71585,
    midnightblue: 0x191970,
    mintcream: 0xf5fffa,
    mistyrose: 0xffe4e1,
    moccasin: 0xffe4b5,
    navajowhite: 0xffdead,
    navy: 0x000080,
    oldlace: 0xfdf5e6,
    olive: 0x808000,
    olivedrab: 0x6b8e23,
    orange: 0xffa500,
    orangered: 0xff4500,
    orchid: 0xda70d6,
    palegoldenrod: 0xeee8aa,
    palegreen: 0x98fb98,
    paleturquoise: 0xafeeee,
    palevioletred: 0xdb7093,
    papayawhip: 0xffefd5,
    peachpuff: 0xffdab9,
    peru: 0xcd853f,
    pink: 0xffc0cb,
    plum: 0xdda0dd,
    powderblue: 0xb0e0e6,
    purple: 0x800080,
    rebeccapurple: 0x663399,
    red: 0xff0000,
    rosybrown: 0xbc8f8f,
    royalblue: 0x4169e1,
    saddlebrown: 0x8b4513,
    salmon: 0xfa8072,
    sandybrown: 0xf4a460,
    seagreen: 0x2e8b57,
    seashell: 0xfff5ee,
    sienna: 0xa0522d,
    silver: 0xc0c0c0,
    skyblue: 0x87ceeb,
    slateblue: 0x6a5acd,
    slategray: 0x708090,
    slategrey: 0x708090,
    snow: 0xfffafa,
    springgreen: 0x00ff7f,
    steelblue: 0x4682b4,
    tan: 0xd2b48c,
    teal: 0x008080,
    thistle: 0xd8bfd8,
    tomato: 0xff6347,
    turquoise: 0x40e0d0,
    violet: 0xee82ee,
    wheat: 0xf5deb3,
    white: 0xffffff,
    whitesmoke: 0xf5f5f5,
    yellow: 0xffff00,
    yellowgreen: 0x9acd32
};
(0, $6nWEw.default)(Color, color, {
    copy: function(channels) {
        return Object.assign(new this.constructor, this, channels);
    },
    displayable: function() {
        return this.rgb().displayable();
    },
    hex: color_formatHex,
    formatHex: color_formatHex,
    formatHsl: color_formatHsl,
    formatRgb: color_formatRgb,
    toString: color_formatRgb
});
function color_formatHex() {
    return this.rgb().formatHex();
}
function color_formatHsl() {
    return hslConvert(this).formatHsl();
}
function color_formatRgb() {
    return this.rgb().formatRgb();
}
function color(format) {
    var m, l;
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
     : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
     : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
     : l === 4 ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
     : null // invalid hex
    ) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
     : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
     : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
     : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
     : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
     : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
     : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
     : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}
function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb;
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
}
(0, $6nWEw.default)(Rgb, rgb, (0, $6nWEw.extend)(Color, {
    brighter: function(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function() {
        return this;
    },
    displayable: function() {
        return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: rgb_formatHex,
    formatHex: rgb_formatHex,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
}));
function rgb_formatHex() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}
function rgb_formatRgb() {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
}
function hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;
    else if (l <= 0 || l >= 1) h = s = NaN;
    else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
}
function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl;
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
    if (s) {
        if (r === max) h = (g - b) / s + (g < b) * 6;
        else if (g === max) h = (b - r) / s + 2;
        else h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
    } else s = l > 0 && l < 1 ? 0 : h;
    return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
(0, $6nWEw.default)(Hsl, hsl, (0, $6nWEw.extend)(Color, {
    brighter: function(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
        var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
        return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    displayable: function() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl: function() {
        var a = this.opacity;
        a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
        return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
    }
}));
/* From FvD 13.37, CSS Color Module Level 3 */ function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

});
parcelRegister("6nWEw", function(module, exports) {

$parcel$export(module.exports, "default", () => $4a62633810893214$export$2e2bcd8739ae039);
$parcel$export(module.exports, "extend", () => $4a62633810893214$export$8b58be045bf06082);
function $4a62633810893214$export$2e2bcd8739ae039(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
}
function $4a62633810893214$export$8b58be045bf06082(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for(var key in definition)prototype[key] = definition[key];
    return prototype;
}

});


parcelRegister("emQa8", function(module, exports) {

$parcel$export(module.exports, "default", () => $a75b952456d772b3$export$2e2bcd8739ae039);
$parcel$export(module.exports, "rgbBasis", () => $a75b952456d772b3$export$2c0e28f2e2852d3f);
$parcel$export(module.exports, "rgbBasisClosed", () => $a75b952456d772b3$export$53d5214f625ccd4c);

var $abtVK = parcelRequire("abtVK");

var $8IEIx = parcelRequire("8IEIx");

var $gCUxL = parcelRequire("gCUxL");

var $2WQVg = parcelRequire("2WQVg");
var $a75b952456d772b3$export$2e2bcd8739ae039 = function rgbGamma(y) {
    var color = (0, $2WQVg.gamma)(y);
    function rgb(start, end) {
        var r = color((start = (0, $abtVK.rgb)(start)).r, (end = (0, $abtVK.rgb)(end)).r), g = color(start.g, end.g), b = color(start.b, end.b), opacity = (0, $2WQVg.default)(start.opacity, end.opacity);
        return function(t) {
            start.r = r(t);
            start.g = g(t);
            start.b = b(t);
            start.opacity = opacity(t);
            return start + "";
        };
    }
    rgb.gamma = rgbGamma;
    return rgb;
}(1);
function $a75b952456d772b3$var$rgbSpline(spline) {
    return function(colors) {
        var n = colors.length, r = new Array(n), g = new Array(n), b = new Array(n), i, color;
        for(i = 0; i < n; ++i){
            color = (0, $abtVK.rgb)(colors[i]);
            r[i] = color.r || 0;
            g[i] = color.g || 0;
            b[i] = color.b || 0;
        }
        r = spline(r);
        g = spline(g);
        b = spline(b);
        color.opacity = 1;
        return function(t) {
            color.r = r(t);
            color.g = g(t);
            color.b = b(t);
            return color + "";
        };
    };
}
var $a75b952456d772b3$export$2c0e28f2e2852d3f = $a75b952456d772b3$var$rgbSpline((0, $8IEIx.default));
var $a75b952456d772b3$export$53d5214f625ccd4c = $a75b952456d772b3$var$rgbSpline((0, $gCUxL.default));

});
parcelRegister("8IEIx", function(module, exports) {

$parcel$export(module.exports, "basis", () => $6592046c16020655$export$4e41033bfeec1a4c);
$parcel$export(module.exports, "default", () => $6592046c16020655$export$2e2bcd8739ae039);
function $6592046c16020655$export$4e41033bfeec1a4c(t1, v0, v1, v2, v3) {
    var t2 = t1 * t1, t3 = t2 * t1;
    return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function $6592046c16020655$export$2e2bcd8739ae039(values) {
    var n = values.length - 1;
    return function(t) {
        var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
        return $6592046c16020655$export$4e41033bfeec1a4c((t - i / n) * n, v0, v1, v2, v3);
    };
}

});

parcelRegister("gCUxL", function(module, exports) {

$parcel$export(module.exports, "default", () => $c1ac0e5629558356$export$2e2bcd8739ae039);

var $8IEIx = parcelRequire("8IEIx");
function $c1ac0e5629558356$export$2e2bcd8739ae039(values) {
    var n = values.length;
    return function(t) {
        var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
        return (0, $8IEIx.basis)((t - i / n) * n, v0, v1, v2, v3);
    };
}

});

parcelRegister("2WQVg", function(module, exports) {

$parcel$export(module.exports, "hue", () => $225a0ce3803be291$export$97d7b0c7ddb78dcf);
$parcel$export(module.exports, "gamma", () => $225a0ce3803be291$export$a7ebe8cc6aaf8d37);
$parcel$export(module.exports, "default", () => $225a0ce3803be291$export$2e2bcd8739ae039);

var $8BrP4 = parcelRequire("8BrP4");
function $225a0ce3803be291$var$linear(a, d) {
    return function(t) {
        return a + t * d;
    };
}
function $225a0ce3803be291$var$exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
        return Math.pow(a + t * b, y);
    };
}
function $225a0ce3803be291$export$97d7b0c7ddb78dcf(a, b) {
    var d = b - a;
    return d ? $225a0ce3803be291$var$linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0, $8BrP4.default)(isNaN(a) ? b : a);
}
function $225a0ce3803be291$export$a7ebe8cc6aaf8d37(y) {
    return (y = +y) === 1 ? $225a0ce3803be291$export$2e2bcd8739ae039 : function(a, b) {
        return b - a ? $225a0ce3803be291$var$exponential(a, b, y) : (0, $8BrP4.default)(isNaN(a) ? b : a);
    };
}
function $225a0ce3803be291$export$2e2bcd8739ae039(a, b) {
    var d = b - a;
    return d ? $225a0ce3803be291$var$linear(a, d) : (0, $8BrP4.default)(isNaN(a) ? b : a);
}

});
parcelRegister("8BrP4", function(module, exports) {

$parcel$export(module.exports, "default", () => $64375c779af04e3a$export$2e2bcd8739ae039);
function $64375c779af04e3a$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}

});



parcelRegister("by39a", function(module, exports) {

$parcel$export(module.exports, "default", () => $86854f9457f3414e$export$2e2bcd8739ae039);
$parcel$export(module.exports, "genericArray", () => $86854f9457f3414e$export$15d09067c6a5ee49);

var $03m37 = parcelRequire("03m37");

var $8XNGd = parcelRequire("8XNGd");
function $86854f9457f3414e$export$2e2bcd8739ae039(a, b) {
    return ((0, $8XNGd.isNumberArray)(b) ? (0, $8XNGd.default) : $86854f9457f3414e$export$15d09067c6a5ee49)(a, b);
}
function $86854f9457f3414e$export$15d09067c6a5ee49(a, b) {
    var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
    for(i = 0; i < na; ++i)x[i] = (0, $03m37.default)(a[i], b[i]);
    for(; i < nb; ++i)c[i] = b[i];
    return function(t) {
        for(i = 0; i < na; ++i)c[i] = x[i](t);
        return c;
    };
}

});
parcelRegister("8XNGd", function(module, exports) {

$parcel$export(module.exports, "default", () => $686a5ed4a845c485$export$2e2bcd8739ae039);
$parcel$export(module.exports, "isNumberArray", () => $686a5ed4a845c485$export$5cd576d1827d40c8);
function $686a5ed4a845c485$export$2e2bcd8739ae039(a, b) {
    if (!b) b = [];
    var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
    return function(t) {
        for(i = 0; i < n; ++i)c[i] = a[i] * (1 - t) + b[i] * t;
        return c;
    };
}
function $686a5ed4a845c485$export$5cd576d1827d40c8(x) {
    return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

});


parcelRegister("eqaiw", function(module, exports) {

$parcel$export(module.exports, "default", () => $a7fb7b53f04754b4$export$2e2bcd8739ae039);
function $a7fb7b53f04754b4$export$2e2bcd8739ae039(a, b) {
    var d = new Date;
    return a = +a, b = +b, function(t) {
        return d.setTime(a * (1 - t) + b * t), d;
    };
}

});

parcelRegister("97hTl", function(module, exports) {

$parcel$export(module.exports, "default", () => $6a32a5672fc72a74$export$2e2bcd8739ae039);
function $6a32a5672fc72a74$export$2e2bcd8739ae039(a, b) {
    return a = +a, b = +b, function(t) {
        return a * (1 - t) + b * t;
    };
}

});

parcelRegister("e8zLv", function(module, exports) {

$parcel$export(module.exports, "default", () => $a4ad8e45563ce159$export$2e2bcd8739ae039);

var $03m37 = parcelRequire("03m37");
function $a4ad8e45563ce159$export$2e2bcd8739ae039(a, b) {
    var i = {}, c = {}, k;
    if (a === null || typeof a !== "object") a = {};
    if (b === null || typeof b !== "object") b = {};
    for(k in b)if (k in a) i[k] = (0, $03m37.default)(a[k], b[k]);
    else c[k] = b[k];
    return function(t) {
        for(k in i)c[k] = i[k](t);
        return c;
    };
}

});

parcelRegister("a20cS", function(module, exports) {

$parcel$export(module.exports, "default", () => $74da4059f4bc1e47$export$2e2bcd8739ae039);

var $97hTl = parcelRequire("97hTl");
var $74da4059f4bc1e47$var$reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, $74da4059f4bc1e47$var$reB = new RegExp($74da4059f4bc1e47$var$reA.source, "g");
function $74da4059f4bc1e47$var$zero(b) {
    return function() {
        return b;
    };
}
function $74da4059f4bc1e47$var$one(b) {
    return function(t) {
        return b(t) + "";
    };
}
function $74da4059f4bc1e47$export$2e2bcd8739ae039(a, b) {
    var bi = $74da4059f4bc1e47$var$reA.lastIndex = $74da4059f4bc1e47$var$reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = []; // number interpolators
    // Coerce inputs to strings.
    a = a + "", b = b + "";
    // Interpolate pairs of numbers in a & b.
    while((am = $74da4059f4bc1e47$var$reA.exec(a)) && (bm = $74da4059f4bc1e47$var$reB.exec(b))){
        if ((bs = bm.index) > bi) {
            bs = b.slice(bi, bs);
            if (s[i]) s[i] += bs; // coalesce with previous string
            else s[++i] = bs;
        }
        if ((am = am[0]) === (bm = bm[0])) {
            if (s[i]) s[i] += bm; // coalesce with previous string
            else s[++i] = bm;
        } else {
            s[++i] = null;
            q.push({
                i: i,
                x: (0, $97hTl.default)(am, bm)
            });
        }
        bi = $74da4059f4bc1e47$var$reB.lastIndex;
    }
    // Add remains of b.
    if (bi < b.length) {
        bs = b.slice(bi);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
    }
    // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? q[0] ? $74da4059f4bc1e47$var$one(q[0].x) : $74da4059f4bc1e47$var$zero(b) : (b = q.length, function(t) {
        for(var i = 0, o; i < b; ++i)s[(o = q[i]).i] = o.x(t);
        return s.join("");
    });
}

});


parcelRegister("8mNB9", function(module, exports) {

$parcel$export(module.exports, "default", () => $6176d9f342f25227$export$2e2bcd8739ae039);

var $711YS = parcelRequire("711YS");

var $bWogN = parcelRequire("bWogN");
function $6176d9f342f25227$export$2e2bcd8739ae039(node) {
    var event = (0, $711YS.default)();
    if (event.changedTouches) event = event.changedTouches[0];
    return (0, $bWogN.default)(node, event);
}

});
parcelRegister("711YS", function(module, exports) {

$parcel$export(module.exports, "default", () => $51ba29be5b097874$export$2e2bcd8739ae039);

var $bVR25 = parcelRequire("bVR25");
function $51ba29be5b097874$export$2e2bcd8739ae039() {
    var current = (0, $bVR25.event), source;
    while(source = current.sourceEvent)current = source;
    return current;
}

});

parcelRegister("bWogN", function(module, exports) {

$parcel$export(module.exports, "default", () => $8b17efff69597cbc$export$2e2bcd8739ae039);
function $8b17efff69597cbc$export$2e2bcd8739ae039(node, event) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
        var point = svg.createSVGPoint();
        point.x = event.clientX, point.y = event.clientY;
        point = point.matrixTransform(node.getScreenCTM().inverse());
        return [
            point.x,
            point.y
        ];
    }
    var rect = node.getBoundingClientRect();
    return [
        event.clientX - rect.left - node.clientLeft,
        event.clientY - rect.top - node.clientTop
    ];
}

});


parcelRegister("g98YB", function(module, exports) {

$parcel$export(module.exports, "default", () => $bc147324b16e4b19$export$2e2bcd8739ae039);

var $711YS = parcelRequire("711YS");

var $bWogN = parcelRequire("bWogN");
function $bc147324b16e4b19$export$2e2bcd8739ae039(node, touches, identifier) {
    if (arguments.length < 3) identifier = touches, touches = (0, $711YS.default)().changedTouches;
    for(var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i){
        if ((touch = touches[i]).identifier === identifier) return (0, $bWogN.default)(node, touch);
    }
    return null;
}

});

parcelRegister("6Ur3E", function(module, exports) {

$parcel$export(module.exports, "transition", () => (parcelRequire("gpIF4")).default);
$parcel$export(module.exports, "active", () => (parcelRequire("lSYaY")).default);
$parcel$export(module.exports, "interrupt", () => (parcelRequire("ejxBi")).default);
parcelRequire("14NtH");

var $gpIF4 = parcelRequire("gpIF4");

var $lSYaY = parcelRequire("lSYaY");

var $ejxBi = parcelRequire("ejxBi");

});
parcelRegister("14NtH", function(module, exports) {

var $1LA4c = parcelRequire("1LA4c");

var $dVDuz = parcelRequire("dVDuz");

var $afMn3 = parcelRequire("afMn3");
(0, $1LA4c.default).prototype.interrupt = (0, $dVDuz.default);
(0, $1LA4c.default).prototype.transition = (0, $afMn3.default);

});
parcelRegister("dVDuz", function(module, exports) {

$parcel$export(module.exports, "default", () => $a23f3b879c282382$export$2e2bcd8739ae039);

var $ejxBi = parcelRequire("ejxBi");
function $a23f3b879c282382$export$2e2bcd8739ae039(name) {
    return this.each(function() {
        (0, $ejxBi.default)(this, name);
    });
}

});
parcelRegister("ejxBi", function(module, exports) {

$parcel$export(module.exports, "default", () => $a6bce765d3647ba7$export$2e2bcd8739ae039);

var $63DML = parcelRequire("63DML");
function $a6bce765d3647ba7$export$2e2bcd8739ae039(node, name) {
    var schedules = node.__transition, schedule, active, empty = true, i;
    if (!schedules) return;
    name = name == null ? null : name + "";
    for(i in schedules){
        if ((schedule = schedules[i]).name !== name) {
            empty = false;
            continue;
        }
        active = schedule.state > (0, $63DML.STARTING) && schedule.state < (0, $63DML.ENDING);
        schedule.state = (0, $63DML.ENDED);
        schedule.timer.stop();
        schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
        delete schedules[i];
    }
    if (empty) delete node.__transition;
}

});
parcelRegister("63DML", function(module, exports) {

$parcel$export(module.exports, "SCHEDULED", () => $4691e27bbc7a6528$export$584530fe98d14a84);
$parcel$export(module.exports, "STARTING", () => $4691e27bbc7a6528$export$a5d151aee16efd42);
$parcel$export(module.exports, "ENDING", () => $4691e27bbc7a6528$export$a2e792214ded83b2);
$parcel$export(module.exports, "ENDED", () => $4691e27bbc7a6528$export$9d38167254403955);
$parcel$export(module.exports, "default", () => $4691e27bbc7a6528$export$2e2bcd8739ae039);
$parcel$export(module.exports, "init", () => $4691e27bbc7a6528$export$2cd8252107eb640b);
$parcel$export(module.exports, "get", () => $4691e27bbc7a6528$export$3988ae62b71be9a3);
$parcel$export(module.exports, "set", () => $4691e27bbc7a6528$export$adaa4cf7ef1b65be);

var $iBYE9 = parcelRequire("iBYE9");

var $3EbCp = parcelRequire("3EbCp");
var $4yOwQ = parcelRequire("4yOwQ");
var $4691e27bbc7a6528$var$emptyOn = (0, $iBYE9.default)("start", "end", "cancel", "interrupt");
var $4691e27bbc7a6528$var$emptyTween = [];
var $4691e27bbc7a6528$export$ff39ebd4bb12b718 = 0;
var $4691e27bbc7a6528$export$584530fe98d14a84 = 1;
var $4691e27bbc7a6528$export$a5d151aee16efd42 = 2;
var $4691e27bbc7a6528$export$fb935ab5849a0db9 = 3;
var $4691e27bbc7a6528$export$1573e22b087389af = 4;
var $4691e27bbc7a6528$export$a2e792214ded83b2 = 5;
var $4691e27bbc7a6528$export$9d38167254403955 = 6;
function $4691e27bbc7a6528$export$2e2bcd8739ae039(node, name, id, index, group, timing) {
    var schedules = node.__transition;
    if (!schedules) node.__transition = {};
    else if (id in schedules) return;
    $4691e27bbc7a6528$var$create(node, id, {
        name: name,
        index: index,
        group: group,
        on: $4691e27bbc7a6528$var$emptyOn,
        tween: $4691e27bbc7a6528$var$emptyTween,
        time: timing.time,
        delay: timing.delay,
        duration: timing.duration,
        ease: timing.ease,
        timer: null,
        state: $4691e27bbc7a6528$export$ff39ebd4bb12b718
    });
}
function $4691e27bbc7a6528$export$2cd8252107eb640b(node, id) {
    var schedule = $4691e27bbc7a6528$export$3988ae62b71be9a3(node, id);
    if (schedule.state > $4691e27bbc7a6528$export$ff39ebd4bb12b718) throw new Error("too late; already scheduled");
    return schedule;
}
function $4691e27bbc7a6528$export$adaa4cf7ef1b65be(node, id) {
    var schedule = $4691e27bbc7a6528$export$3988ae62b71be9a3(node, id);
    if (schedule.state > $4691e27bbc7a6528$export$fb935ab5849a0db9) throw new Error("too late; already running");
    return schedule;
}
function $4691e27bbc7a6528$export$3988ae62b71be9a3(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
    return schedule;
}
function $4691e27bbc7a6528$var$create(node, id, self) {
    var schedules = node.__transition, tween;
    // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!
    schedules[id] = self;
    self.timer = (0, $4yOwQ.timer)(schedule, 0, self.time);
    function schedule(elapsed) {
        self.state = $4691e27bbc7a6528$export$584530fe98d14a84;
        self.timer.restart(start, self.delay, self.time);
        // If the elapsed delay is less than our first sleep, start immediately.
        if (self.delay <= elapsed) start(elapsed - self.delay);
    }
    function start(elapsed) {
        var i, j, n, o;
        // If the state is not SCHEDULED, then we previously errored on start.
        if (self.state !== $4691e27bbc7a6528$export$584530fe98d14a84) return stop();
        for(i in schedules){
            o = schedules[i];
            if (o.name !== self.name) continue;
            // While this element already has a starting transition during this frame,
            // defer starting an interrupting transition until that transition has a
            // chance to tick (and possibly end); see d3/d3-transition#54!
            if (o.state === $4691e27bbc7a6528$export$fb935ab5849a0db9) return (0, $3EbCp.default)(start);
            // Interrupt the active transition, if any.
            if (o.state === $4691e27bbc7a6528$export$1573e22b087389af) {
                o.state = $4691e27bbc7a6528$export$9d38167254403955;
                o.timer.stop();
                o.on.call("interrupt", node, node.__data__, o.index, o.group);
                delete schedules[i];
            } else if (+i < id) {
                o.state = $4691e27bbc7a6528$export$9d38167254403955;
                o.timer.stop();
                o.on.call("cancel", node, node.__data__, o.index, o.group);
                delete schedules[i];
            }
        }
        // Defer the first tick to end of the current frame; see d3/d3#1576.
        // Note the transition may be canceled after start and before the first tick!
        // Note this must be scheduled before the start event; see d3/d3-transition#16!
        // Assuming this is successful, subsequent callbacks go straight to tick.
        (0, $3EbCp.default)(function() {
            if (self.state === $4691e27bbc7a6528$export$fb935ab5849a0db9) {
                self.state = $4691e27bbc7a6528$export$1573e22b087389af;
                self.timer.restart(tick, self.delay, self.time);
                tick(elapsed);
            }
        });
        // Dispatch the start event.
        // Note this must be done before the tween are initialized.
        self.state = $4691e27bbc7a6528$export$a5d151aee16efd42;
        self.on.call("start", node, node.__data__, self.index, self.group);
        if (self.state !== $4691e27bbc7a6528$export$a5d151aee16efd42) return; // interrupted
        self.state = $4691e27bbc7a6528$export$fb935ab5849a0db9;
        // Initialize the tween, deleting null tween.
        tween = new Array(n = self.tween.length);
        for(i = 0, j = -1; i < n; ++i)if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) tween[++j] = o;
        tween.length = j + 1;
    }
    function tick(elapsed) {
        var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = $4691e27bbc7a6528$export$a2e792214ded83b2, 1), i = -1, n = tween.length;
        while(++i < n)tween[i].call(node, t);
        // Dispatch the end event.
        if (self.state === $4691e27bbc7a6528$export$a2e792214ded83b2) {
            self.on.call("end", node, node.__data__, self.index, self.group);
            stop();
        }
    }
    function stop() {
        self.state = $4691e27bbc7a6528$export$9d38167254403955;
        self.timer.stop();
        delete schedules[id];
        for(var i in schedules)return; // eslint-disable-line no-unused-vars
        delete node.__transition;
    }
}

});
parcelRegister("3EbCp", function(module, exports) {

$parcel$export(module.exports, "default", () => $2a7e1eb46a8e7c7d$export$2e2bcd8739ae039);

var $4yOwQ = parcelRequire("4yOwQ");
function $2a7e1eb46a8e7c7d$export$2e2bcd8739ae039(callback, delay, time) {
    var t = new (0, $4yOwQ.Timer);
    delay = delay == null ? 0 : +delay;
    t.restart(function(elapsed) {
        t.stop();
        callback(elapsed + delay);
    }, delay, time);
    return t;
}

});
parcelRegister("4yOwQ", function(module, exports) {

$parcel$export(module.exports, "now", () => $3521885a78198aba$export$461939dd4422153);
$parcel$export(module.exports, "Timer", () => $3521885a78198aba$export$c57e9b2d8b9e4de);
$parcel$export(module.exports, "timer", () => $3521885a78198aba$export$9dc4ecf953986f04);
$parcel$export(module.exports, "timerFlush", () => $3521885a78198aba$export$d60154c1d7f3990e);
var $3521885a78198aba$var$frame = 0, $3521885a78198aba$var$timeout = 0, $3521885a78198aba$var$interval = 0, $3521885a78198aba$var$pokeDelay = 1000, $3521885a78198aba$var$taskHead, $3521885a78198aba$var$taskTail, $3521885a78198aba$var$clockLast = 0, $3521885a78198aba$var$clockNow = 0, $3521885a78198aba$var$clockSkew = 0, $3521885a78198aba$var$clock = typeof performance === "object" && performance.now ? performance : Date, $3521885a78198aba$var$setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
    setTimeout(f, 17);
};
function $3521885a78198aba$export$461939dd4422153() {
    return $3521885a78198aba$var$clockNow || ($3521885a78198aba$var$setFrame($3521885a78198aba$var$clearNow), $3521885a78198aba$var$clockNow = $3521885a78198aba$var$clock.now() + $3521885a78198aba$var$clockSkew);
}
function $3521885a78198aba$var$clearNow() {
    $3521885a78198aba$var$clockNow = 0;
}
function $3521885a78198aba$export$c57e9b2d8b9e4de() {
    this._call = this._time = this._next = null;
}
$3521885a78198aba$export$c57e9b2d8b9e4de.prototype = $3521885a78198aba$export$9dc4ecf953986f04.prototype = {
    constructor: $3521885a78198aba$export$c57e9b2d8b9e4de,
    restart: function(callback, delay, time) {
        if (typeof callback !== "function") throw new TypeError("callback is not a function");
        time = (time == null ? $3521885a78198aba$export$461939dd4422153() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && $3521885a78198aba$var$taskTail !== this) {
            if ($3521885a78198aba$var$taskTail) $3521885a78198aba$var$taskTail._next = this;
            else $3521885a78198aba$var$taskHead = this;
            $3521885a78198aba$var$taskTail = this;
        }
        this._call = callback;
        this._time = time;
        $3521885a78198aba$var$sleep();
    },
    stop: function() {
        if (this._call) {
            this._call = null;
            this._time = Infinity;
            $3521885a78198aba$var$sleep();
        }
    }
};
function $3521885a78198aba$export$9dc4ecf953986f04(callback, delay, time) {
    var t = new $3521885a78198aba$export$c57e9b2d8b9e4de;
    t.restart(callback, delay, time);
    return t;
}
function $3521885a78198aba$export$d60154c1d7f3990e() {
    $3521885a78198aba$export$461939dd4422153(); // Get the current time, if not already set.
    ++$3521885a78198aba$var$frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = $3521885a78198aba$var$taskHead, e;
    while(t){
        if ((e = $3521885a78198aba$var$clockNow - t._time) >= 0) t._call.call(null, e);
        t = t._next;
    }
    --$3521885a78198aba$var$frame;
}
function $3521885a78198aba$var$wake() {
    $3521885a78198aba$var$clockNow = ($3521885a78198aba$var$clockLast = $3521885a78198aba$var$clock.now()) + $3521885a78198aba$var$clockSkew;
    $3521885a78198aba$var$frame = $3521885a78198aba$var$timeout = 0;
    try {
        $3521885a78198aba$export$d60154c1d7f3990e();
    } finally{
        $3521885a78198aba$var$frame = 0;
        $3521885a78198aba$var$nap();
        $3521885a78198aba$var$clockNow = 0;
    }
}
function $3521885a78198aba$var$poke() {
    var now = $3521885a78198aba$var$clock.now(), delay = now - $3521885a78198aba$var$clockLast;
    if (delay > $3521885a78198aba$var$pokeDelay) $3521885a78198aba$var$clockSkew -= delay, $3521885a78198aba$var$clockLast = now;
}
function $3521885a78198aba$var$nap() {
    var t0, t1 = $3521885a78198aba$var$taskHead, t2, time = Infinity;
    while(t1)if (t1._call) {
        if (time > t1._time) time = t1._time;
        t0 = t1, t1 = t1._next;
    } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : $3521885a78198aba$var$taskHead = t2;
    }
    $3521885a78198aba$var$taskTail = t0;
    $3521885a78198aba$var$sleep(time);
}
function $3521885a78198aba$var$sleep(time) {
    if ($3521885a78198aba$var$frame) return; // Soonest alarm already set, or will be.
    if ($3521885a78198aba$var$timeout) $3521885a78198aba$var$timeout = clearTimeout($3521885a78198aba$var$timeout);
    var delay = time - $3521885a78198aba$var$clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
        if (time < Infinity) $3521885a78198aba$var$timeout = setTimeout($3521885a78198aba$var$wake, time - $3521885a78198aba$var$clock.now() - $3521885a78198aba$var$clockSkew);
        if ($3521885a78198aba$var$interval) $3521885a78198aba$var$interval = clearInterval($3521885a78198aba$var$interval);
    } else {
        if (!$3521885a78198aba$var$interval) $3521885a78198aba$var$clockLast = $3521885a78198aba$var$clock.now(), $3521885a78198aba$var$interval = setInterval($3521885a78198aba$var$poke, $3521885a78198aba$var$pokeDelay);
        $3521885a78198aba$var$frame = 1, $3521885a78198aba$var$setFrame($3521885a78198aba$var$wake);
    }
}

});





parcelRegister("afMn3", function(module, exports) {

$parcel$export(module.exports, "default", () => $7770d38e7c503b2c$export$2e2bcd8739ae039);

var $gpIF4 = parcelRequire("gpIF4");

var $63DML = parcelRequire("63DML");

var $jzOe8 = parcelRequire("jzOe8");

var $4yOwQ = parcelRequire("4yOwQ");
var $7770d38e7c503b2c$var$defaultTiming = {
    time: null,
    delay: 0,
    duration: 250,
    ease: (0, $jzOe8.cubicInOut)
};
function $7770d38e7c503b2c$var$inherit(node, id) {
    var timing;
    while(!(timing = node.__transition) || !(timing = timing[id])){
        if (!(node = node.parentNode)) return $7770d38e7c503b2c$var$defaultTiming.time = (0, $4yOwQ.now)(), $7770d38e7c503b2c$var$defaultTiming;
    }
    return timing;
}
function $7770d38e7c503b2c$export$2e2bcd8739ae039(name) {
    var id, timing;
    if (name instanceof (0, $gpIF4.Transition)) id = name._id, name = name._name;
    else id = (0, $gpIF4.newId)(), (timing = $7770d38e7c503b2c$var$defaultTiming).time = (0, $4yOwQ.now)(), name = name == null ? null : name + "";
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) (0, $63DML.default)(node, name, id, i, group, timing || $7770d38e7c503b2c$var$inherit(node, id));
    }
    return new (0, $gpIF4.Transition)(groups, this._parents, name, id);
}

});
parcelRegister("gpIF4", function(module, exports) {

$parcel$export(module.exports, "Transition", () => $bf319ff6a9f82bd1$export$be58926105124dd4);
$parcel$export(module.exports, "default", () => $bf319ff6a9f82bd1$export$2e2bcd8739ae039);
$parcel$export(module.exports, "newId", () => $bf319ff6a9f82bd1$export$9ffd10a3fbdc175b);

var $1LA4c = parcelRequire("1LA4c");

var $hbK4p = parcelRequire("hbK4p");

var $1QtRT = parcelRequire("1QtRT");

var $jOi2x = parcelRequire("jOi2x");

var $4F6sh = parcelRequire("4F6sh");

var $SpWDA = parcelRequire("SpWDA");

var $gGCQl = parcelRequire("gGCQl");

var $2nzjg = parcelRequire("2nzjg");

var $ef2Nf = parcelRequire("ef2Nf");

var $6fQlv = parcelRequire("6fQlv");

var $i65bQ = parcelRequire("i65bQ");

var $cFCcy = parcelRequire("cFCcy");

var $bd8Zk = parcelRequire("bd8Zk");

var $8Zlov = parcelRequire("8Zlov");

var $blsRc = parcelRequire("blsRc");

var $26n9v = parcelRequire("26n9v");

var $l2ayI = parcelRequire("l2ayI");

var $iHc55 = parcelRequire("iHc55");

var $dkJ4y = parcelRequire("dkJ4y");

var $3KlR8 = parcelRequire("3KlR8");
var $bf319ff6a9f82bd1$var$id = 0;
function $bf319ff6a9f82bd1$export$be58926105124dd4(groups, parents, name, id) {
    this._groups = groups;
    this._parents = parents;
    this._name = name;
    this._id = id;
}
function $bf319ff6a9f82bd1$export$2e2bcd8739ae039(name) {
    return (0, $1LA4c.default)().transition(name);
}
function $bf319ff6a9f82bd1$export$9ffd10a3fbdc175b() {
    return ++$bf319ff6a9f82bd1$var$id;
}
var $bf319ff6a9f82bd1$var$selection_prototype = (0, $1LA4c.default).prototype;
$bf319ff6a9f82bd1$export$be58926105124dd4.prototype = $bf319ff6a9f82bd1$export$2e2bcd8739ae039.prototype = {
    constructor: $bf319ff6a9f82bd1$export$be58926105124dd4,
    select: (0, $i65bQ.default),
    selectAll: (0, $cFCcy.default),
    filter: (0, $gGCQl.default),
    merge: (0, $2nzjg.default),
    selection: (0, $bd8Zk.default),
    transition: (0, $iHc55.default),
    call: $bf319ff6a9f82bd1$var$selection_prototype.call,
    nodes: $bf319ff6a9f82bd1$var$selection_prototype.nodes,
    node: $bf319ff6a9f82bd1$var$selection_prototype.node,
    size: $bf319ff6a9f82bd1$var$selection_prototype.size,
    empty: $bf319ff6a9f82bd1$var$selection_prototype.empty,
    each: $bf319ff6a9f82bd1$var$selection_prototype.each,
    on: (0, $ef2Nf.default),
    attr: (0, $hbK4p.default),
    attrTween: (0, $1QtRT.default),
    style: (0, $8Zlov.default),
    styleTween: (0, $blsRc.default),
    text: (0, $26n9v.default),
    textTween: (0, $l2ayI.default),
    remove: (0, $6fQlv.default),
    tween: (0, $dkJ4y.default),
    delay: (0, $jOi2x.default),
    duration: (0, $4F6sh.default),
    ease: (0, $SpWDA.default),
    end: (0, $3KlR8.default)
};

});
parcelRegister("hbK4p", function(module, exports) {

$parcel$export(module.exports, "default", () => $c837334bb7c3c29e$export$2e2bcd8739ae039);

var $eDhJF = parcelRequire("eDhJF");

var $gDfVI = parcelRequire("gDfVI");

var $dkJ4y = parcelRequire("dkJ4y");

var $6lsfI = parcelRequire("6lsfI");
function $c837334bb7c3c29e$var$attrRemove(name) {
    return function() {
        this.removeAttribute(name);
    };
}
function $c837334bb7c3c29e$var$attrRemoveNS(fullname) {
    return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
    };
}
function $c837334bb7c3c29e$var$attrConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttribute(name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function $c837334bb7c3c29e$var$attrConstantNS(fullname, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = this.getAttributeNS(fullname.space, fullname.local);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function $c837334bb7c3c29e$var$attrFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttribute(name);
        string0 = this.getAttribute(name);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function $c837334bb7c3c29e$var$attrFunctionNS(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
        string0 = this.getAttributeNS(fullname.space, fullname.local);
        string1 = value1 + "";
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function $c837334bb7c3c29e$export$2e2bcd8739ae039(name, value) {
    var fullname = (0, $gDfVI.default)(name), i = fullname === "transform" ? (0, $eDhJF.interpolateTransformSvg) : (0, $6lsfI.default);
    return this.attrTween(name, typeof value === "function" ? (fullname.local ? $c837334bb7c3c29e$var$attrFunctionNS : $c837334bb7c3c29e$var$attrFunction)(fullname, i, (0, $dkJ4y.tweenValue)(this, "attr." + name, value)) : value == null ? (fullname.local ? $c837334bb7c3c29e$var$attrRemoveNS : $c837334bb7c3c29e$var$attrRemove)(fullname) : (fullname.local ? $c837334bb7c3c29e$var$attrConstantNS : $c837334bb7c3c29e$var$attrConstant)(fullname, i, value));
}

});
parcelRegister("eDhJF", function(module, exports) {

$parcel$export(module.exports, "interpolateTransformCss", () => $aa72771a03b09180$export$56bec7123bb3589a);
$parcel$export(module.exports, "interpolateTransformSvg", () => $aa72771a03b09180$export$da8cba906d64c082);

var $97hTl = parcelRequire("97hTl");

var $k4cpn = parcelRequire("k4cpn");
function $aa72771a03b09180$var$interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s) {
        return s.length ? s.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push("translate(", null, pxComma, null, pxParen);
            q.push({
                i: i - 4,
                x: (0, $97hTl.default)(xa, xb)
            }, {
                i: i - 2,
                x: (0, $97hTl.default)(ya, yb)
            });
        } else if (xb || yb) s.push("translate(" + xb + pxComma + yb + pxParen);
    }
    function rotate(a, b, s, q) {
        if (a !== b) {
            if (a - b > 180) b += 360;
            else if (b - a > 180) a += 360; // shortest path
            q.push({
                i: s.push(pop(s) + "rotate(", null, degParen) - 2,
                x: (0, $97hTl.default)(a, b)
            });
        } else if (b) s.push(pop(s) + "rotate(" + b + degParen);
    }
    function skewX(a, b, s, q) {
        if (a !== b) q.push({
            i: s.push(pop(s) + "skewX(", null, degParen) - 2,
            x: (0, $97hTl.default)(a, b)
        });
        else if (b) s.push(pop(s) + "skewX(" + b + degParen);
    }
    function scale(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
            var i = s.push(pop(s) + "scale(", null, ",", null, ")");
            q.push({
                i: i - 4,
                x: (0, $97hTl.default)(xa, xb)
            }, {
                i: i - 2,
                x: (0, $97hTl.default)(ya, yb)
            });
        } else if (xb !== 1 || yb !== 1) s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
    return function(a, b) {
        var s = [], q = []; // number interpolators
        a = parse(a), b = parse(b);
        translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
        rotate(a.rotate, b.rotate, s, q);
        skewX(a.skewX, b.skewX, s, q);
        scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
        a = b = null; // gc
        return function(t) {
            var i = -1, n = q.length, o;
            while(++i < n)s[(o = q[i]).i] = o.x(t);
            return s.join("");
        };
    };
}
var $aa72771a03b09180$export$56bec7123bb3589a = $aa72771a03b09180$var$interpolateTransform((0, $k4cpn.parseCss), "px, ", "px)", "deg)");
var $aa72771a03b09180$export$da8cba906d64c082 = $aa72771a03b09180$var$interpolateTransform((0, $k4cpn.parseSvg), ", ", ")", ")");

});
parcelRegister("k4cpn", function(module, exports) {

$parcel$export(module.exports, "parseCss", () => $e9bdce620804143d$export$59ad369bf4938177);
$parcel$export(module.exports, "parseSvg", () => $e9bdce620804143d$export$f9ef43f9a1d89a18);

var $lTLzS = parcelRequire("lTLzS");
var $e9bdce620804143d$var$cssNode, $e9bdce620804143d$var$cssRoot, $e9bdce620804143d$var$cssView, $e9bdce620804143d$var$svgNode;
function $e9bdce620804143d$export$59ad369bf4938177(value) {
    if (value === "none") return 0, $lTLzS.identity;
    if (!$e9bdce620804143d$var$cssNode) $e9bdce620804143d$var$cssNode = document.createElement("DIV"), $e9bdce620804143d$var$cssRoot = document.documentElement, $e9bdce620804143d$var$cssView = document.defaultView;
    $e9bdce620804143d$var$cssNode.style.transform = value;
    value = $e9bdce620804143d$var$cssView.getComputedStyle($e9bdce620804143d$var$cssRoot.appendChild($e9bdce620804143d$var$cssNode), null).getPropertyValue("transform");
    $e9bdce620804143d$var$cssRoot.removeChild($e9bdce620804143d$var$cssNode);
    value = value.slice(7, -1).split(",");
    return (0, $lTLzS.default)(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}
function $e9bdce620804143d$export$f9ef43f9a1d89a18(value) {
    if (value == null) return 0, $lTLzS.identity;
    if (!$e9bdce620804143d$var$svgNode) $e9bdce620804143d$var$svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    $e9bdce620804143d$var$svgNode.setAttribute("transform", value);
    if (!(value = $e9bdce620804143d$var$svgNode.transform.baseVal.consolidate())) return 0, $lTLzS.identity;
    value = value.matrix;
    return (0, $lTLzS.default)(value.a, value.b, value.c, value.d, value.e, value.f);
}

});
parcelRegister("lTLzS", function(module, exports) {

$parcel$export(module.exports, "identity", () => $ff13a3fa7bbd37b0$export$f0954fd7d5368655);
$parcel$export(module.exports, "default", () => $ff13a3fa7bbd37b0$export$2e2bcd8739ae039);
var $ff13a3fa7bbd37b0$var$degrees = 180 / Math.PI;
var $ff13a3fa7bbd37b0$export$f0954fd7d5368655 = {
    translateX: 0,
    translateY: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1
};
function $ff13a3fa7bbd37b0$export$2e2bcd8739ae039(a, b, c, d, e, f) {
    var scaleX, scaleY, skewX;
    if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
        translateX: e,
        translateY: f,
        rotate: Math.atan2(b, a) * $ff13a3fa7bbd37b0$var$degrees,
        skewX: Math.atan(skewX) * $ff13a3fa7bbd37b0$var$degrees,
        scaleX: scaleX,
        scaleY: scaleY
    };
}

});



parcelRegister("dkJ4y", function(module, exports) {

$parcel$export(module.exports, "default", () => $9b501b0cf079c002$export$2e2bcd8739ae039);
$parcel$export(module.exports, "tweenValue", () => $9b501b0cf079c002$export$f78ce6ab10405d82);

var $63DML = parcelRequire("63DML");
function $9b501b0cf079c002$var$tweenRemove(id, name) {
    var tween0, tween1;
    return function() {
        var schedule = (0, $63DML.set)(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = tween0 = tween;
            for(var i = 0, n = tween1.length; i < n; ++i)if (tween1[i].name === name) {
                tween1 = tween1.slice();
                tween1.splice(i, 1);
                break;
            }
        }
        schedule.tween = tween1;
    };
}
function $9b501b0cf079c002$var$tweenFunction(id, name, value) {
    var tween0, tween1;
    if (typeof value !== "function") throw new Error;
    return function() {
        var schedule = (0, $63DML.set)(this, id), tween = schedule.tween;
        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
            tween1 = (tween0 = tween).slice();
            for(var t = {
                name: name,
                value: value
            }, i = 0, n = tween1.length; i < n; ++i)if (tween1[i].name === name) {
                tween1[i] = t;
                break;
            }
            if (i === n) tween1.push(t);
        }
        schedule.tween = tween1;
    };
}
function $9b501b0cf079c002$export$2e2bcd8739ae039(name, value) {
    var id = this._id;
    name += "";
    if (arguments.length < 2) {
        var tween = (0, $63DML.get)(this.node(), id).tween;
        for(var i = 0, n = tween.length, t; i < n; ++i){
            if ((t = tween[i]).name === name) return t.value;
        }
        return null;
    }
    return this.each((value == null ? $9b501b0cf079c002$var$tweenRemove : $9b501b0cf079c002$var$tweenFunction)(id, name, value));
}
function $9b501b0cf079c002$export$f78ce6ab10405d82(transition, name, value) {
    var id = transition._id;
    transition.each(function() {
        var schedule = (0, $63DML.set)(this, id);
        (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function(node) {
        return (0, $63DML.get)(node, id).value[name];
    };
}

});

parcelRegister("6lsfI", function(module, exports) {

$parcel$export(module.exports, "default", () => $49ea9e9e9373e866$export$2e2bcd8739ae039);

var $abtVK = parcelRequire("abtVK");

var $97hTl = parcelRequire("97hTl");
var $emQa8 = parcelRequire("emQa8");
var $a20cS = parcelRequire("a20cS");
function $49ea9e9e9373e866$export$2e2bcd8739ae039(a, b) {
    var c;
    return (typeof b === "number" ? (0, $97hTl.default) : b instanceof (0, $abtVK.default) ? (0, $emQa8.default) : (c = (0, $abtVK.default)(b)) ? (b = c, $emQa8.default) : (0, $a20cS.default))(a, b);
}

});


parcelRegister("1QtRT", function(module, exports) {

$parcel$export(module.exports, "default", () => $1581d0fc05e11bdc$export$2e2bcd8739ae039);

var $gDfVI = parcelRequire("gDfVI");
function $1581d0fc05e11bdc$var$attrInterpolate(name, i) {
    return function(t) {
        this.setAttribute(name, i.call(this, t));
    };
}
function $1581d0fc05e11bdc$var$attrInterpolateNS(fullname, i) {
    return function(t) {
        this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
}
function $1581d0fc05e11bdc$var$attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && $1581d0fc05e11bdc$var$attrInterpolateNS(fullname, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function $1581d0fc05e11bdc$var$attrTween(name, value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && $1581d0fc05e11bdc$var$attrInterpolate(name, i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function $1581d0fc05e11bdc$export$2e2bcd8739ae039(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    var fullname = (0, $gDfVI.default)(name);
    return this.tween(key, (fullname.local ? $1581d0fc05e11bdc$var$attrTweenNS : $1581d0fc05e11bdc$var$attrTween)(fullname, value));
}

});

parcelRegister("jOi2x", function(module, exports) {

$parcel$export(module.exports, "default", () => $e6c0ae3464cad099$export$2e2bcd8739ae039);

var $63DML = parcelRequire("63DML");
function $e6c0ae3464cad099$var$delayFunction(id, value) {
    return function() {
        (0, $63DML.init)(this, id).delay = +value.apply(this, arguments);
    };
}
function $e6c0ae3464cad099$var$delayConstant(id, value) {
    return value = +value, function() {
        (0, $63DML.init)(this, id).delay = value;
    };
}
function $e6c0ae3464cad099$export$2e2bcd8739ae039(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? $e6c0ae3464cad099$var$delayFunction : $e6c0ae3464cad099$var$delayConstant)(id, value)) : (0, $63DML.get)(this.node(), id).delay;
}

});

parcelRegister("4F6sh", function(module, exports) {

$parcel$export(module.exports, "default", () => $364fffa1ac5c4313$export$2e2bcd8739ae039);

var $63DML = parcelRequire("63DML");
function $364fffa1ac5c4313$var$durationFunction(id, value) {
    return function() {
        (0, $63DML.set)(this, id).duration = +value.apply(this, arguments);
    };
}
function $364fffa1ac5c4313$var$durationConstant(id, value) {
    return value = +value, function() {
        (0, $63DML.set)(this, id).duration = value;
    };
}
function $364fffa1ac5c4313$export$2e2bcd8739ae039(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? $364fffa1ac5c4313$var$durationFunction : $364fffa1ac5c4313$var$durationConstant)(id, value)) : (0, $63DML.get)(this.node(), id).duration;
}

});

parcelRegister("SpWDA", function(module, exports) {

$parcel$export(module.exports, "default", () => $0a392b59a0e75e9b$export$2e2bcd8739ae039);

var $63DML = parcelRequire("63DML");
function $0a392b59a0e75e9b$var$easeConstant(id, value) {
    if (typeof value !== "function") throw new Error;
    return function() {
        (0, $63DML.set)(this, id).ease = value;
    };
}
function $0a392b59a0e75e9b$export$2e2bcd8739ae039(value) {
    var id = this._id;
    return arguments.length ? this.each($0a392b59a0e75e9b$var$easeConstant(id, value)) : (0, $63DML.get)(this.node(), id).ease;
}

});

parcelRegister("gGCQl", function(module, exports) {

$parcel$export(module.exports, "default", () => $c25eb30a36a82c2e$export$2e2bcd8739ae039);

var $2R3nw = parcelRequire("2R3nw");

var $gpIF4 = parcelRequire("gpIF4");
function $c25eb30a36a82c2e$export$2e2bcd8739ae039(match) {
    if (typeof match !== "function") match = (0, $2R3nw.default)(match);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i)if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
    }
    return new (0, $gpIF4.Transition)(subgroups, this._parents, this._name, this._id);
}

});

parcelRegister("2nzjg", function(module, exports) {

$parcel$export(module.exports, "default", () => $1bb91e89108c7970$export$2e2bcd8739ae039);

var $gpIF4 = parcelRequire("gpIF4");
function $1bb91e89108c7970$export$2e2bcd8739ae039(transition) {
    if (transition._id !== this._id) throw new Error;
    for(var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j){
        for(var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i)if (node = group0[i] || group1[i]) merge[i] = node;
    }
    for(; j < m0; ++j)merges[j] = groups0[j];
    return new (0, $gpIF4.Transition)(merges, this._parents, this._name, this._id);
}

});

parcelRegister("ef2Nf", function(module, exports) {

$parcel$export(module.exports, "default", () => $a5e4a218057671b5$export$2e2bcd8739ae039);

var $63DML = parcelRequire("63DML");
function $a5e4a218057671b5$var$start(name) {
    return (name + "").trim().split(/^|\s+/).every(function(t) {
        var i = t.indexOf(".");
        if (i >= 0) t = t.slice(0, i);
        return !t || t === "start";
    });
}
function $a5e4a218057671b5$var$onFunction(id, name, listener) {
    var on0, on1, sit = $a5e4a218057671b5$var$start(name) ? (0, $63DML.init) : (0, $63DML.set);
    return function() {
        var schedule = sit(this, id), on = schedule.on;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
        schedule.on = on1;
    };
}
function $a5e4a218057671b5$export$2e2bcd8739ae039(name, listener) {
    var id = this._id;
    return arguments.length < 2 ? (0, $63DML.get)(this.node(), id).on.on(name) : this.each($a5e4a218057671b5$var$onFunction(id, name, listener));
}

});

parcelRegister("6fQlv", function(module, exports) {

$parcel$export(module.exports, "default", () => $48dcbf95b1ad6680$export$2e2bcd8739ae039);
function $48dcbf95b1ad6680$var$removeFunction(id) {
    return function() {
        var parent = this.parentNode;
        for(var i in this.__transition)if (+i !== id) return;
        if (parent) parent.removeChild(this);
    };
}
function $48dcbf95b1ad6680$export$2e2bcd8739ae039() {
    return this.on("end.remove", $48dcbf95b1ad6680$var$removeFunction(this._id));
}

});

parcelRegister("i65bQ", function(module, exports) {

$parcel$export(module.exports, "default", () => $d2ccd02b86438489$export$2e2bcd8739ae039);

var $d07D9 = parcelRequire("d07D9");

var $gpIF4 = parcelRequire("gpIF4");

var $63DML = parcelRequire("63DML");
function $d2ccd02b86438489$export$2e2bcd8739ae039(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = (0, $d07D9.default)(select);
    for(var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i)if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
            (0, $63DML.default)(subgroup[i], name, id, i, subgroup, (0, $63DML.get)(node, id));
        }
    }
    return new (0, $gpIF4.Transition)(subgroups, this._parents, name, id);
}

});

parcelRegister("cFCcy", function(module, exports) {

$parcel$export(module.exports, "default", () => $02616701973f87d4$export$2e2bcd8739ae039);

var $7DUTo = parcelRequire("7DUTo");

var $gpIF4 = parcelRequire("gpIF4");

var $63DML = parcelRequire("63DML");
function $02616701973f87d4$export$2e2bcd8739ae039(select) {
    var name = this._name, id = this._id;
    if (typeof select !== "function") select = (0, $7DUTo.default)(select);
    for(var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            for(var children = select.call(node, node.__data__, i, group), child, inherit = (0, $63DML.get)(node, id), k = 0, l = children.length; k < l; ++k)if (child = children[k]) (0, $63DML.default)(child, name, id, k, children, inherit);
            subgroups.push(children);
            parents.push(node);
        }
    }
    return new (0, $gpIF4.Transition)(subgroups, parents, name, id);
}

});

parcelRegister("bd8Zk", function(module, exports) {

$parcel$export(module.exports, "default", () => $8297e175e188c8a5$export$2e2bcd8739ae039);

var $1LA4c = parcelRequire("1LA4c");
var $8297e175e188c8a5$var$Selection = (0, $1LA4c.default).prototype.constructor;
function $8297e175e188c8a5$export$2e2bcd8739ae039() {
    return new $8297e175e188c8a5$var$Selection(this._groups, this._parents);
}

});

parcelRegister("8Zlov", function(module, exports) {

$parcel$export(module.exports, "default", () => $68b49dac947171a1$export$2e2bcd8739ae039);

var $eDhJF = parcelRequire("eDhJF");

var $7VDk4 = parcelRequire("7VDk4");

var $63DML = parcelRequire("63DML");

var $dkJ4y = parcelRequire("dkJ4y");

var $6lsfI = parcelRequire("6lsfI");
function $68b49dac947171a1$var$styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = (0, $7VDk4.styleValue)(this, name), string1 = (this.style.removeProperty(name), (0, $7VDk4.styleValue)(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
}
function $68b49dac947171a1$var$styleRemove(name) {
    return function() {
        this.style.removeProperty(name);
    };
}
function $68b49dac947171a1$var$styleConstant(name, interpolate, value1) {
    var string00, string1 = value1 + "", interpolate0;
    return function() {
        var string0 = (0, $7VDk4.styleValue)(this, name);
        return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
}
function $68b49dac947171a1$var$styleFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function() {
        var string0 = (0, $7VDk4.styleValue)(this, name), value1 = value(this), string1 = value1 + "";
        if (value1 == null) string1 = value1 = (this.style.removeProperty(name), (0, $7VDk4.styleValue)(this, name));
        return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
}
function $68b49dac947171a1$var$styleMaybeRemove(id, name) {
    var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
    return function() {
        var schedule = (0, $63DML.set)(this, id), on = schedule.on, listener = schedule.value[key] == null ? remove || (remove = $68b49dac947171a1$var$styleRemove(name)) : undefined;
        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
        schedule.on = on1;
    };
}
function $68b49dac947171a1$export$2e2bcd8739ae039(name, value, priority) {
    var i = (name += "") === "transform" ? (0, $eDhJF.interpolateTransformCss) : (0, $6lsfI.default);
    return value == null ? this.styleTween(name, $68b49dac947171a1$var$styleNull(name, i)).on("end.style." + name, $68b49dac947171a1$var$styleRemove(name)) : typeof value === "function" ? this.styleTween(name, $68b49dac947171a1$var$styleFunction(name, i, (0, $dkJ4y.tweenValue)(this, "style." + name, value))).each($68b49dac947171a1$var$styleMaybeRemove(this._id, name)) : this.styleTween(name, $68b49dac947171a1$var$styleConstant(name, i, value), priority).on("end.style." + name, null);
}

});

parcelRegister("blsRc", function(module, exports) {

$parcel$export(module.exports, "default", () => $84280a4645e68b1f$export$2e2bcd8739ae039);
function $84280a4645e68b1f$var$styleInterpolate(name, i, priority) {
    return function(t) {
        this.style.setProperty(name, i.call(this, t), priority);
    };
}
function $84280a4645e68b1f$var$styleTween(name, value, priority) {
    var t, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t = (i0 = i) && $84280a4645e68b1f$var$styleInterpolate(name, i, priority);
        return t;
    }
    tween._value = value;
    return tween;
}
function $84280a4645e68b1f$export$2e2bcd8739ae039(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, $84280a4645e68b1f$var$styleTween(name, value, priority == null ? "" : priority));
}

});

parcelRegister("26n9v", function(module, exports) {

$parcel$export(module.exports, "default", () => $187e19e71c463eec$export$2e2bcd8739ae039);

var $dkJ4y = parcelRequire("dkJ4y");
function $187e19e71c463eec$var$textConstant(value) {
    return function() {
        this.textContent = value;
    };
}
function $187e19e71c463eec$var$textFunction(value) {
    return function() {
        var value1 = value(this);
        this.textContent = value1 == null ? "" : value1;
    };
}
function $187e19e71c463eec$export$2e2bcd8739ae039(value) {
    return this.tween("text", typeof value === "function" ? $187e19e71c463eec$var$textFunction((0, $dkJ4y.tweenValue)(this, "text", value)) : $187e19e71c463eec$var$textConstant(value == null ? "" : value + ""));
}

});

parcelRegister("l2ayI", function(module, exports) {

$parcel$export(module.exports, "default", () => $f501f9a6ac54e07a$export$2e2bcd8739ae039);
function $f501f9a6ac54e07a$var$textInterpolate(i) {
    return function(t) {
        this.textContent = i.call(this, t);
    };
}
function $f501f9a6ac54e07a$var$textTween(value) {
    var t0, i0;
    function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && $f501f9a6ac54e07a$var$textInterpolate(i);
        return t0;
    }
    tween._value = value;
    return tween;
}
function $f501f9a6ac54e07a$export$2e2bcd8739ae039(value) {
    var key = "text";
    if (arguments.length < 1) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error;
    return this.tween(key, $f501f9a6ac54e07a$var$textTween(value));
}

});

parcelRegister("iHc55", function(module, exports) {

$parcel$export(module.exports, "default", () => $d9c59d3408b82217$export$2e2bcd8739ae039);

var $gpIF4 = parcelRequire("gpIF4");

var $63DML = parcelRequire("63DML");
function $d9c59d3408b82217$export$2e2bcd8739ae039() {
    var name = this._name, id0 = this._id, id1 = (0, $gpIF4.newId)();
    for(var groups = this._groups, m = groups.length, j = 0; j < m; ++j){
        for(var group = groups[j], n = group.length, node, i = 0; i < n; ++i)if (node = group[i]) {
            var inherit = (0, $63DML.get)(node, id0);
            (0, $63DML.default)(node, name, id1, i, group, {
                time: inherit.time + inherit.delay + inherit.duration,
                delay: 0,
                duration: inherit.duration,
                ease: inherit.ease
            });
        }
    }
    return new (0, $gpIF4.Transition)(groups, this._parents, name, id1);
}

});

parcelRegister("3KlR8", function(module, exports) {

$parcel$export(module.exports, "default", () => $2ba69f1ebcb1407f$export$2e2bcd8739ae039);

var $63DML = parcelRequire("63DML");
function $2ba69f1ebcb1407f$export$2e2bcd8739ae039() {
    var on0, on1, that = this, id = that._id, size = that.size();
    return new Promise(function(resolve, reject) {
        var cancel = {
            value: reject
        }, end = {
            value: function() {
                if (--size === 0) resolve();
            }
        };
        that.each(function() {
            var schedule = (0, $63DML.set)(this, id), on = schedule.on;
            // If this node shared a dispatch with the previous node,
            // just assign the updated shared dispatch and we’re done!
            // Otherwise, copy-on-write.
            if (on !== on0) {
                on1 = (on0 = on).copy();
                on1._.cancel.push(cancel);
                on1._.interrupt.push(cancel);
                on1._.end.push(end);
            }
            schedule.on = on1;
        });
    });
}

});


parcelRegister("jzOe8", function(module, exports) {

$parcel$export(module.exports, "cubicIn", () => $e4083f3b90384a39$export$b1a09cb1b71f86aa);
$parcel$export(module.exports, "cubicOut", () => $e4083f3b90384a39$export$68d528839c701b6);
$parcel$export(module.exports, "cubicInOut", () => $e4083f3b90384a39$export$89238d3bc79d3ada);
function $e4083f3b90384a39$export$b1a09cb1b71f86aa(t) {
    return t * t * t;
}
function $e4083f3b90384a39$export$68d528839c701b6(t) {
    return --t * t * t + 1;
}
function $e4083f3b90384a39$export$89238d3bc79d3ada(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}

});



parcelRegister("lSYaY", function(module, exports) {

$parcel$export(module.exports, "default", () => $feed51d0b83ba6ac$export$2e2bcd8739ae039);

var $gpIF4 = parcelRequire("gpIF4");

var $63DML = parcelRequire("63DML");
var $feed51d0b83ba6ac$var$root = [
    null
];
function $feed51d0b83ba6ac$export$2e2bcd8739ae039(node, name) {
    var schedules = node.__transition, schedule, i;
    if (schedules) {
        name = name == null ? null : name + "";
        for(i in schedules){
            if ((schedule = schedules[i]).state > (0, $63DML.SCHEDULED) && schedule.name === name) return new (0, $gpIF4.Transition)([
                [
                    node
                ]
            ], $feed51d0b83ba6ac$var$root, name, +i);
        }
    }
    return null;
}

});


parcelRegister("9oEqG", function(module, exports) {

$parcel$export(module.exports, "default", () => $6d75b75c88f251a8$export$2e2bcd8739ae039);
function $6d75b75c88f251a8$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}

});

parcelRegister("2GNVz", function(module, exports) {

$parcel$export(module.exports, "default", () => $1f563b9c01a5ac0f$export$2e2bcd8739ae039);
function $1f563b9c01a5ac0f$export$2e2bcd8739ae039(target, type, selection) {
    this.target = target;
    this.type = type;
    this.selection = selection;
}

});

parcelRegister("bqAWn", function(module, exports) {

$parcel$export(module.exports, "nopropagation", () => $851ec7052900e789$export$2e2561858db9bf47);
$parcel$export(module.exports, "default", () => $851ec7052900e789$export$2e2bcd8739ae039);

var $bVR25 = parcelRequire("bVR25");
function $851ec7052900e789$export$2e2561858db9bf47() {
    (0, $bVR25.event).stopImmediatePropagation();
}
function $851ec7052900e789$export$2e2bcd8739ae039() {
    (0, $bVR25.event).preventDefault();
    (0, $bVR25.event).stopImmediatePropagation();
}

});



parcelRegister("czXbl", function(module, exports) {

$parcel$export(module.exports, "chord", () => (parcelRequire("15qKe")).default);
$parcel$export(module.exports, "ribbon", () => (parcelRequire("bj5zr")).default);

var $15qKe = parcelRequire("15qKe");

var $bj5zr = parcelRequire("bj5zr");

});
parcelRegister("15qKe", function(module, exports) {

$parcel$export(module.exports, "default", () => $0cab010826e2abcc$export$2e2bcd8739ae039);
parcelRequire("ap1W6");
var $5Cu7w = parcelRequire("5Cu7w");

var $2sL9L = parcelRequire("2sL9L");
function $0cab010826e2abcc$var$compareValue(compare) {
    return function(a, b) {
        return compare(a.source.value + a.target.value, b.source.value + b.target.value);
    };
}
function $0cab010826e2abcc$export$2e2bcd8739ae039() {
    var padAngle = 0, sortGroups = null, sortSubgroups = null, sortChords = null;
    function chord(matrix) {
        var n = matrix.length, groupSums = [], groupIndex = (0, $5Cu7w.default)(n), subgroupIndex = [], chords = [], groups = chords.groups = new Array(n), subgroups = new Array(n * n), k, x, x0, dx, i, j;
        // Compute the sum.
        k = 0, i = -1;
        while(++i < n){
            x = 0, j = -1;
            while(++j < n)x += matrix[i][j];
            groupSums.push(x);
            subgroupIndex.push((0, $5Cu7w.default)(n));
            k += x;
        }
        // Sort groups…
        if (sortGroups) groupIndex.sort(function(a, b) {
            return sortGroups(groupSums[a], groupSums[b]);
        });
        // Sort subgroups…
        if (sortSubgroups) subgroupIndex.forEach(function(d, i) {
            d.sort(function(a, b) {
                return sortSubgroups(matrix[i][a], matrix[i][b]);
            });
        });
        // Convert the sum to scaling factor for [0, 2pi].
        // TODO Allow start and end angle to be specified?
        // TODO Allow padding to be specified as percentage?
        k = (0, $2sL9L.max)(0, (0, $2sL9L.tau) - padAngle * n) / k;
        dx = k ? padAngle : (0, $2sL9L.tau) / n;
        // Compute the start and end angle for each group and subgroup.
        // Note: Opera has a bug reordering object literal properties!
        x = 0, i = -1;
        while(++i < n){
            x0 = x, j = -1;
            while(++j < n){
                var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x, a1 = x += v * k;
                subgroups[dj * n + di] = {
                    index: di,
                    subindex: dj,
                    startAngle: a0,
                    endAngle: a1,
                    value: v
                };
            }
            groups[di] = {
                index: di,
                startAngle: x0,
                endAngle: x,
                value: groupSums[di]
            };
            x += dx;
        }
        // Generate chords for each (non-empty) subgroup-subgroup link.
        i = -1;
        while(++i < n){
            j = i - 1;
            while(++j < n){
                var source = subgroups[j * n + i], target = subgroups[i * n + j];
                if (source.value || target.value) chords.push(source.value < target.value ? {
                    source: target,
                    target: source
                } : {
                    source: source,
                    target: target
                });
            }
        }
        return sortChords ? chords.sort(sortChords) : chords;
    }
    chord.padAngle = function(_) {
        return arguments.length ? (padAngle = (0, $2sL9L.max)(0, _), chord) : padAngle;
    };
    chord.sortGroups = function(_) {
        return arguments.length ? (sortGroups = _, chord) : sortGroups;
    };
    chord.sortSubgroups = function(_) {
        return arguments.length ? (sortSubgroups = _, chord) : sortSubgroups;
    };
    chord.sortChords = function(_) {
        return arguments.length ? (_ == null ? sortChords = null : (sortChords = $0cab010826e2abcc$var$compareValue(_))._ = _, chord) : sortChords && sortChords._;
    };
    return chord;
}

});
parcelRegister("2sL9L", function(module, exports) {

$parcel$export(module.exports, "cos", () => $1cb2c69d3b12b72d$export$50d414a77b60d802);
$parcel$export(module.exports, "sin", () => $1cb2c69d3b12b72d$export$5de3937cb4b592ed);
$parcel$export(module.exports, "halfPi", () => $1cb2c69d3b12b72d$export$e51408a300e8929a);
$parcel$export(module.exports, "tau", () => $1cb2c69d3b12b72d$export$a4b4b4d4d776fe92);
$parcel$export(module.exports, "max", () => $1cb2c69d3b12b72d$export$8960430cfd85939f);
var $1cb2c69d3b12b72d$export$50d414a77b60d802 = Math.cos;
var $1cb2c69d3b12b72d$export$5de3937cb4b592ed = Math.sin;
var $1cb2c69d3b12b72d$export$18c7bea995a110f = Math.PI;
var $1cb2c69d3b12b72d$export$e51408a300e8929a = $1cb2c69d3b12b72d$export$18c7bea995a110f / 2;
var $1cb2c69d3b12b72d$export$a4b4b4d4d776fe92 = $1cb2c69d3b12b72d$export$18c7bea995a110f * 2;
var $1cb2c69d3b12b72d$export$8960430cfd85939f = Math.max;

});


parcelRegister("bj5zr", function(module, exports) {

$parcel$export(module.exports, "default", () => $83b5ca48ed146934$export$2e2bcd8739ae039);

var $l8Afk = parcelRequire("l8Afk");

var $kbQ0i = parcelRequire("kbQ0i");

var $2sL9L = parcelRequire("2sL9L");

var $ftDUk = parcelRequire("ftDUk");
function $83b5ca48ed146934$var$defaultSource(d) {
    return d.source;
}
function $83b5ca48ed146934$var$defaultTarget(d) {
    return d.target;
}
function $83b5ca48ed146934$var$defaultRadius(d) {
    return d.radius;
}
function $83b5ca48ed146934$var$defaultStartAngle(d) {
    return d.startAngle;
}
function $83b5ca48ed146934$var$defaultEndAngle(d) {
    return d.endAngle;
}
function $83b5ca48ed146934$export$2e2bcd8739ae039() {
    var source = $83b5ca48ed146934$var$defaultSource, target = $83b5ca48ed146934$var$defaultTarget, radius = $83b5ca48ed146934$var$defaultRadius, startAngle = $83b5ca48ed146934$var$defaultStartAngle, endAngle = $83b5ca48ed146934$var$defaultEndAngle, context = null;
    function ribbon() {
        var buffer, argv = (0, $l8Afk.slice).call(arguments), s = source.apply(this, argv), t = target.apply(this, argv), sr = +radius.apply(this, (argv[0] = s, argv)), sa0 = startAngle.apply(this, argv) - (0, $2sL9L.halfPi), sa1 = endAngle.apply(this, argv) - (0, $2sL9L.halfPi), sx0 = sr * (0, $2sL9L.cos)(sa0), sy0 = sr * (0, $2sL9L.sin)(sa0), tr = +radius.apply(this, (argv[0] = t, argv)), ta0 = startAngle.apply(this, argv) - (0, $2sL9L.halfPi), ta1 = endAngle.apply(this, argv) - (0, $2sL9L.halfPi);
        if (!context) context = buffer = (0, $ftDUk.default)();
        context.moveTo(sx0, sy0);
        context.arc(0, 0, sr, sa0, sa1);
        if (sa0 !== ta0 || sa1 !== ta1) {
            context.quadraticCurveTo(0, 0, tr * (0, $2sL9L.cos)(ta0), tr * (0, $2sL9L.sin)(ta0));
            context.arc(0, 0, tr, ta0, ta1);
        }
        context.quadraticCurveTo(0, 0, sx0, sy0);
        context.closePath();
        if (buffer) return context = null, buffer + "" || null;
    }
    ribbon.radius = function(_) {
        return arguments.length ? (radius = typeof _ === "function" ? _ : (0, $kbQ0i.default)(+_), ribbon) : radius;
    };
    ribbon.startAngle = function(_) {
        return arguments.length ? (startAngle = typeof _ === "function" ? _ : (0, $kbQ0i.default)(+_), ribbon) : startAngle;
    };
    ribbon.endAngle = function(_) {
        return arguments.length ? (endAngle = typeof _ === "function" ? _ : (0, $kbQ0i.default)(+_), ribbon) : endAngle;
    };
    ribbon.source = function(_) {
        return arguments.length ? (source = _, ribbon) : source;
    };
    ribbon.target = function(_) {
        return arguments.length ? (target = _, ribbon) : target;
    };
    ribbon.context = function(_) {
        return arguments.length ? (context = _ == null ? null : _, ribbon) : context;
    };
    return ribbon;
}

});
parcelRegister("l8Afk", function(module, exports) {

$parcel$export(module.exports, "slice", () => $f63676128013175c$export$58adb3bec8346d0f);
var $f63676128013175c$export$58adb3bec8346d0f = Array.prototype.slice;

});

parcelRegister("kbQ0i", function(module, exports) {

$parcel$export(module.exports, "default", () => $eb2d2c9c53c8f537$export$2e2bcd8739ae039);
function $eb2d2c9c53c8f537$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}

});

parcelRegister("ftDUk", function(module, exports) {

$parcel$export(module.exports, "default", () => $b448853f0cf4ab80$export$2e2bcd8739ae039);
var $b448853f0cf4ab80$var$pi = Math.PI, $b448853f0cf4ab80$var$tau = 2 * $b448853f0cf4ab80$var$pi, $b448853f0cf4ab80$var$epsilon = 1e-6, $b448853f0cf4ab80$var$tauEpsilon = $b448853f0cf4ab80$var$tau - $b448853f0cf4ab80$var$epsilon;
function $b448853f0cf4ab80$var$Path() {
    this._x0 = this._y0 = this._x1 = this._y1 = null; // end of current subpath
    this._ = "";
}
function $b448853f0cf4ab80$var$path() {
    return new $b448853f0cf4ab80$var$Path;
}
$b448853f0cf4ab80$var$Path.prototype = $b448853f0cf4ab80$var$path.prototype = {
    constructor: $b448853f0cf4ab80$var$Path,
    moveTo: function(x, y) {
        this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
    },
    closePath: function() {
        if (this._x1 !== null) {
            this._x1 = this._x0, this._y1 = this._y0;
            this._ += "Z";
        }
    },
    lineTo: function(x, y) {
        this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    quadraticCurveTo: function(x1, y1, x, y) {
        this._ += "Q" + +x1 + "," + +y1 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    bezierCurveTo: function(x1, y1, x2, y2, x, y) {
        this._ += "C" + +x1 + "," + +y1 + "," + +x2 + "," + +y2 + "," + (this._x1 = +x) + "," + (this._y1 = +y);
    },
    arcTo: function(x1, y1, x2, y2, r) {
        x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
        var x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
        // Is the radius negative? Error.
        if (r < 0) throw new Error("negative radius: " + r);
        // Is this path empty? Move to (x1,y1).
        if (this._x1 === null) this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
        else if (!(l01_2 > $b448853f0cf4ab80$var$epsilon)) ;
        else if (!(Math.abs(y01 * x21 - y21 * x01) > $b448853f0cf4ab80$var$epsilon) || !r) this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
        else {
            var x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan(($b448853f0cf4ab80$var$pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
            // If the start tangent is not coincident with (x0,y0), line to.
            if (Math.abs(t01 - 1) > $b448853f0cf4ab80$var$epsilon) this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
            this._ += "A" + r + "," + r + ",0,0," + +(y01 * x20 > x01 * y20) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
        }
    },
    arc: function(x, y, r, a0, a1, ccw) {
        x = +x, y = +y, r = +r, ccw = !!ccw;
        var dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x + dx, y0 = y + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
        // Is the radius negative? Error.
        if (r < 0) throw new Error("negative radius: " + r);
        // Is this path empty? Move to (x0,y0).
        if (this._x1 === null) this._ += "M" + x0 + "," + y0;
        else if (Math.abs(this._x1 - x0) > $b448853f0cf4ab80$var$epsilon || Math.abs(this._y1 - y0) > $b448853f0cf4ab80$var$epsilon) this._ += "L" + x0 + "," + y0;
        // Is this arc empty? We’re done.
        if (!r) return;
        // Does the angle go the wrong way? Flip the direction.
        if (da < 0) da = da % $b448853f0cf4ab80$var$tau + $b448853f0cf4ab80$var$tau;
        // Is this a complete circle? Draw two arcs to complete the circle.
        if (da > $b448853f0cf4ab80$var$tauEpsilon) this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
        else if (da > $b448853f0cf4ab80$var$epsilon) this._ += "A" + r + "," + r + ",0," + +(da >= $b448853f0cf4ab80$var$pi) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    },
    rect: function(x, y, w, h) {
        this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + +w + "v" + +h + "h" + -w + "Z";
    },
    toString: function() {
        return this._;
    }
};
var $b448853f0cf4ab80$export$2e2bcd8739ae039 = $b448853f0cf4ab80$var$path;

});



parcelRegister("3pJtp", function(module, exports) {

$parcel$export(module.exports, "nest", () => (parcelRequire("ffH35")).default);
$parcel$export(module.exports, "set", () => (parcelRequire("ecluZ")).default);
$parcel$export(module.exports, "map", () => (parcelRequire("9y7Xw")).default);
$parcel$export(module.exports, "keys", () => (parcelRequire("jh8NP")).default);
$parcel$export(module.exports, "values", () => (parcelRequire("jk5ON")).default);
$parcel$export(module.exports, "entries", () => (parcelRequire("dXcj7")).default);

var $ffH35 = parcelRequire("ffH35");

var $ecluZ = parcelRequire("ecluZ");

var $9y7Xw = parcelRequire("9y7Xw");

var $jh8NP = parcelRequire("jh8NP");

var $jk5ON = parcelRequire("jk5ON");

var $dXcj7 = parcelRequire("dXcj7");

});
parcelRegister("ffH35", function(module, exports) {

$parcel$export(module.exports, "default", () => $b1a9a65043e3d8a0$export$2e2bcd8739ae039);

var $9y7Xw = parcelRequire("9y7Xw");
function $b1a9a65043e3d8a0$export$2e2bcd8739ae039() {
    var keys = [], sortKeys = [], sortValues, rollup, nest;
    function apply(array, depth, createResult, setResult) {
        if (depth >= keys.length) {
            if (sortValues != null) array.sort(sortValues);
            return rollup != null ? rollup(array) : array;
        }
        var i = -1, n = array.length, key = keys[depth++], keyValue, value, valuesByKey = (0, $9y7Xw.default)(), values, result = createResult();
        while(++i < n)if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) values.push(value);
        else valuesByKey.set(keyValue, [
            value
        ]);
        valuesByKey.each(function(values, key) {
            setResult(result, key, apply(values, depth, createResult, setResult));
        });
        return result;
    }
    function entries(map, depth) {
        if (++depth > keys.length) return map;
        var array, sortKey = sortKeys[depth - 1];
        if (rollup != null && depth >= keys.length) array = map.entries();
        else array = [], map.each(function(v, k) {
            array.push({
                key: k,
                values: entries(v, depth)
            });
        });
        return sortKey != null ? array.sort(function(a, b) {
            return sortKey(a.key, b.key);
        }) : array;
    }
    return nest = {
        object: function(array) {
            return apply(array, 0, $b1a9a65043e3d8a0$var$createObject, $b1a9a65043e3d8a0$var$setObject);
        },
        map: function(array) {
            return apply(array, 0, $b1a9a65043e3d8a0$var$createMap, $b1a9a65043e3d8a0$var$setMap);
        },
        entries: function(array) {
            return entries(apply(array, 0, $b1a9a65043e3d8a0$var$createMap, $b1a9a65043e3d8a0$var$setMap), 0);
        },
        key: function(d) {
            keys.push(d);
            return nest;
        },
        sortKeys: function(order) {
            sortKeys[keys.length - 1] = order;
            return nest;
        },
        sortValues: function(order) {
            sortValues = order;
            return nest;
        },
        rollup: function(f) {
            rollup = f;
            return nest;
        }
    };
}
function $b1a9a65043e3d8a0$var$createObject() {
    return {};
}
function $b1a9a65043e3d8a0$var$setObject(object, key, value) {
    object[key] = value;
}
function $b1a9a65043e3d8a0$var$createMap() {
    return (0, $9y7Xw.default)();
}
function $b1a9a65043e3d8a0$var$setMap(map, key, value) {
    map.set(key, value);
}

});
parcelRegister("9y7Xw", function(module, exports) {

$parcel$export(module.exports, "prefix", () => $6f3d76870de9b9f2$export$82e9f45cca5ba907);
$parcel$export(module.exports, "default", () => $6f3d76870de9b9f2$export$2e2bcd8739ae039);
var $6f3d76870de9b9f2$export$82e9f45cca5ba907 = "$";
function $6f3d76870de9b9f2$var$Map() {}
$6f3d76870de9b9f2$var$Map.prototype = $6f3d76870de9b9f2$var$map.prototype = {
    constructor: $6f3d76870de9b9f2$var$Map,
    has: function(key) {
        return $6f3d76870de9b9f2$export$82e9f45cca5ba907 + key in this;
    },
    get: function(key) {
        return this[$6f3d76870de9b9f2$export$82e9f45cca5ba907 + key];
    },
    set: function(key, value) {
        this[$6f3d76870de9b9f2$export$82e9f45cca5ba907 + key] = value;
        return this;
    },
    remove: function(key) {
        var property = $6f3d76870de9b9f2$export$82e9f45cca5ba907 + key;
        return property in this && delete this[property];
    },
    clear: function() {
        for(var property in this)if (property[0] === $6f3d76870de9b9f2$export$82e9f45cca5ba907) delete this[property];
    },
    keys: function() {
        var keys = [];
        for(var property in this)if (property[0] === $6f3d76870de9b9f2$export$82e9f45cca5ba907) keys.push(property.slice(1));
        return keys;
    },
    values: function() {
        var values = [];
        for(var property in this)if (property[0] === $6f3d76870de9b9f2$export$82e9f45cca5ba907) values.push(this[property]);
        return values;
    },
    entries: function() {
        var entries = [];
        for(var property in this)if (property[0] === $6f3d76870de9b9f2$export$82e9f45cca5ba907) entries.push({
            key: property.slice(1),
            value: this[property]
        });
        return entries;
    },
    size: function() {
        var size = 0;
        for(var property in this)if (property[0] === $6f3d76870de9b9f2$export$82e9f45cca5ba907) ++size;
        return size;
    },
    empty: function() {
        for(var property in this)if (property[0] === $6f3d76870de9b9f2$export$82e9f45cca5ba907) return false;
        return true;
    },
    each: function(f) {
        for(var property in this)if (property[0] === $6f3d76870de9b9f2$export$82e9f45cca5ba907) f(this[property], property.slice(1), this);
    }
};
function $6f3d76870de9b9f2$var$map(object, f) {
    var map = new $6f3d76870de9b9f2$var$Map;
    // Copy constructor.
    if (object instanceof $6f3d76870de9b9f2$var$Map) object.each(function(value, key) {
        map.set(key, value);
    });
    else if (Array.isArray(object)) {
        var i = -1, n = object.length, o;
        if (f == null) while(++i < n)map.set(i, object[i]);
        else while(++i < n)map.set(f(o = object[i], i, object), o);
    } else if (object) for(var key in object)map.set(key, object[key]);
    return map;
}
var $6f3d76870de9b9f2$export$2e2bcd8739ae039 = $6f3d76870de9b9f2$var$map;

});


parcelRegister("ecluZ", function(module, exports) {

$parcel$export(module.exports, "default", () => $a562dce3f9f91600$export$2e2bcd8739ae039);

var $9y7Xw = parcelRequire("9y7Xw");
function $a562dce3f9f91600$var$Set() {}
var $a562dce3f9f91600$var$proto = (0, $9y7Xw.default).prototype;
$a562dce3f9f91600$var$Set.prototype = $a562dce3f9f91600$var$set.prototype = {
    constructor: $a562dce3f9f91600$var$Set,
    has: $a562dce3f9f91600$var$proto.has,
    add: function(value) {
        value += "";
        this[(0, $9y7Xw.prefix) + value] = value;
        return this;
    },
    remove: $a562dce3f9f91600$var$proto.remove,
    clear: $a562dce3f9f91600$var$proto.clear,
    values: $a562dce3f9f91600$var$proto.keys,
    size: $a562dce3f9f91600$var$proto.size,
    empty: $a562dce3f9f91600$var$proto.empty,
    each: $a562dce3f9f91600$var$proto.each
};
function $a562dce3f9f91600$var$set(object, f) {
    var set = new $a562dce3f9f91600$var$Set;
    // Copy constructor.
    if (object instanceof $a562dce3f9f91600$var$Set) object.each(function(value) {
        set.add(value);
    });
    else if (object) {
        var i = -1, n = object.length;
        if (f == null) while(++i < n)set.add(object[i]);
        else while(++i < n)set.add(f(object[i], i, object));
    }
    return set;
}
var $a562dce3f9f91600$export$2e2bcd8739ae039 = $a562dce3f9f91600$var$set;

});

parcelRegister("jh8NP", function(module, exports) {

$parcel$export(module.exports, "default", () => $e0866edfab6bcf1c$export$2e2bcd8739ae039);
function $e0866edfab6bcf1c$export$2e2bcd8739ae039(map) {
    var keys = [];
    for(var key in map)keys.push(key);
    return keys;
}

});

parcelRegister("jk5ON", function(module, exports) {

$parcel$export(module.exports, "default", () => $e11465fc42647d5b$export$2e2bcd8739ae039);
function $e11465fc42647d5b$export$2e2bcd8739ae039(map) {
    var values = [];
    for(var key in map)values.push(map[key]);
    return values;
}

});

parcelRegister("dXcj7", function(module, exports) {

$parcel$export(module.exports, "default", () => $a28a5503dba3323b$export$2e2bcd8739ae039);
function $a28a5503dba3323b$export$2e2bcd8739ae039(map) {
    var entries = [];
    for(var key in map)entries.push({
        key: key,
        value: map[key]
    });
    return entries;
}

});


parcelRegister("2ADI5", function(module, exports) {

$parcel$export(module.exports, "color", () => (parcelRequire("abtVK")).default);
$parcel$export(module.exports, "rgb", () => (parcelRequire("abtVK")).rgb);
$parcel$export(module.exports, "hsl", () => (parcelRequire("abtVK")).hsl);
$parcel$export(module.exports, "lab", () => (parcelRequire("BkyT1")).default);
$parcel$export(module.exports, "hcl", () => (parcelRequire("BkyT1")).hcl);
$parcel$export(module.exports, "lch", () => (parcelRequire("BkyT1")).lch);
$parcel$export(module.exports, "gray", () => (parcelRequire("BkyT1")).gray);
$parcel$export(module.exports, "cubehelix", () => (parcelRequire("6wiJa")).default);

var $abtVK = parcelRequire("abtVK");

var $BkyT1 = parcelRequire("BkyT1");

var $6wiJa = parcelRequire("6wiJa");

});
parcelRegister("BkyT1", function(module, exports) {

$parcel$export(module.exports, "gray", () => $070367f03c4768ad$export$3e2c219d3ab79d01);
$parcel$export(module.exports, "default", () => $070367f03c4768ad$export$2e2bcd8739ae039);
$parcel$export(module.exports, "lch", () => $070367f03c4768ad$export$5a21418738164530);
$parcel$export(module.exports, "hcl", () => $070367f03c4768ad$export$d0e870ba50062ff1);

var $6nWEw = parcelRequire("6nWEw");

var $abtVK = parcelRequire("abtVK");

var $4mfmw = parcelRequire("4mfmw");
// https://observablehq.com/@mbostock/lab-and-rgb
var $070367f03c4768ad$var$K = 18, $070367f03c4768ad$var$Xn = 0.96422, $070367f03c4768ad$var$Yn = 1, $070367f03c4768ad$var$Zn = 0.82521, $070367f03c4768ad$var$t0 = 4 / 29, $070367f03c4768ad$var$t1 = 6 / 29, $070367f03c4768ad$var$t2 = 3 * $070367f03c4768ad$var$t1 * $070367f03c4768ad$var$t1, $070367f03c4768ad$var$t3 = $070367f03c4768ad$var$t1 * $070367f03c4768ad$var$t1 * $070367f03c4768ad$var$t1;
function $070367f03c4768ad$var$labConvert(o) {
    if (o instanceof $070367f03c4768ad$export$f2722c70a60257f7) return new $070367f03c4768ad$export$f2722c70a60257f7(o.l, o.a, o.b, o.opacity);
    if (o instanceof $070367f03c4768ad$export$d9397e094a5fbb9a) return $070367f03c4768ad$var$hcl2lab(o);
    if (!(o instanceof (0, $abtVK.Rgb))) o = (0, $abtVK.rgbConvert)(o);
    var r = $070367f03c4768ad$var$rgb2lrgb(o.r), g = $070367f03c4768ad$var$rgb2lrgb(o.g), b = $070367f03c4768ad$var$rgb2lrgb(o.b), y = $070367f03c4768ad$var$xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / $070367f03c4768ad$var$Yn), x, z;
    if (r === g && g === b) x = z = y;
    else {
        x = $070367f03c4768ad$var$xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / $070367f03c4768ad$var$Xn);
        z = $070367f03c4768ad$var$xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / $070367f03c4768ad$var$Zn);
    }
    return new $070367f03c4768ad$export$f2722c70a60257f7(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}
function $070367f03c4768ad$export$3e2c219d3ab79d01(l, opacity) {
    return new $070367f03c4768ad$export$f2722c70a60257f7(l, 0, 0, opacity == null ? 1 : opacity);
}
function $070367f03c4768ad$export$2e2bcd8739ae039(l, a, b, opacity) {
    return arguments.length === 1 ? $070367f03c4768ad$var$labConvert(l) : new $070367f03c4768ad$export$f2722c70a60257f7(l, a, b, opacity == null ? 1 : opacity);
}
function $070367f03c4768ad$export$f2722c70a60257f7(l, a, b, opacity) {
    this.l = +l;
    this.a = +a;
    this.b = +b;
    this.opacity = +opacity;
}
(0, $6nWEw.default)($070367f03c4768ad$export$f2722c70a60257f7, $070367f03c4768ad$export$2e2bcd8739ae039, (0, $6nWEw.extend)((0, $abtVK.Color), {
    brighter: function(k) {
        return new $070367f03c4768ad$export$f2722c70a60257f7(this.l + $070367f03c4768ad$var$K * (k == null ? 1 : k), this.a, this.b, this.opacity);
    },
    darker: function(k) {
        return new $070367f03c4768ad$export$f2722c70a60257f7(this.l - $070367f03c4768ad$var$K * (k == null ? 1 : k), this.a, this.b, this.opacity);
    },
    rgb: function() {
        var y = (this.l + 16) / 116, x = isNaN(this.a) ? y : y + this.a / 500, z = isNaN(this.b) ? y : y - this.b / 200;
        x = $070367f03c4768ad$var$Xn * $070367f03c4768ad$var$lab2xyz(x);
        y = $070367f03c4768ad$var$Yn * $070367f03c4768ad$var$lab2xyz(y);
        z = $070367f03c4768ad$var$Zn * $070367f03c4768ad$var$lab2xyz(z);
        return new (0, $abtVK.Rgb)($070367f03c4768ad$var$lrgb2rgb(3.1338561 * x - 1.6168667 * y - 0.4906146 * z), $070367f03c4768ad$var$lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z), $070367f03c4768ad$var$lrgb2rgb(0.0719453 * x - 0.2289914 * y + 1.4052427 * z), this.opacity);
    }
}));
function $070367f03c4768ad$var$xyz2lab(t) {
    return t > $070367f03c4768ad$var$t3 ? Math.pow(t, 1 / 3) : t / $070367f03c4768ad$var$t2 + $070367f03c4768ad$var$t0;
}
function $070367f03c4768ad$var$lab2xyz(t) {
    return t > $070367f03c4768ad$var$t1 ? t * t * t : $070367f03c4768ad$var$t2 * (t - $070367f03c4768ad$var$t0);
}
function $070367f03c4768ad$var$lrgb2rgb(x) {
    return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}
function $070367f03c4768ad$var$rgb2lrgb(x) {
    return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}
function $070367f03c4768ad$var$hclConvert(o) {
    if (o instanceof $070367f03c4768ad$export$d9397e094a5fbb9a) return new $070367f03c4768ad$export$d9397e094a5fbb9a(o.h, o.c, o.l, o.opacity);
    if (!(o instanceof $070367f03c4768ad$export$f2722c70a60257f7)) o = $070367f03c4768ad$var$labConvert(o);
    if (o.a === 0 && o.b === 0) return new $070367f03c4768ad$export$d9397e094a5fbb9a(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
    var h = Math.atan2(o.b, o.a) * (0, $4mfmw.rad2deg);
    return new $070367f03c4768ad$export$d9397e094a5fbb9a(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}
function $070367f03c4768ad$export$5a21418738164530(l, c, h, opacity) {
    return arguments.length === 1 ? $070367f03c4768ad$var$hclConvert(l) : new $070367f03c4768ad$export$d9397e094a5fbb9a(h, c, l, opacity == null ? 1 : opacity);
}
function $070367f03c4768ad$export$d0e870ba50062ff1(h, c, l, opacity) {
    return arguments.length === 1 ? $070367f03c4768ad$var$hclConvert(h) : new $070367f03c4768ad$export$d9397e094a5fbb9a(h, c, l, opacity == null ? 1 : opacity);
}
function $070367f03c4768ad$export$d9397e094a5fbb9a(h, c, l, opacity) {
    this.h = +h;
    this.c = +c;
    this.l = +l;
    this.opacity = +opacity;
}
function $070367f03c4768ad$var$hcl2lab(o) {
    if (isNaN(o.h)) return new $070367f03c4768ad$export$f2722c70a60257f7(o.l, 0, 0, o.opacity);
    var h = o.h * (0, $4mfmw.deg2rad);
    return new $070367f03c4768ad$export$f2722c70a60257f7(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}
(0, $6nWEw.default)($070367f03c4768ad$export$d9397e094a5fbb9a, $070367f03c4768ad$export$d0e870ba50062ff1, (0, $6nWEw.extend)((0, $abtVK.Color), {
    brighter: function(k) {
        return new $070367f03c4768ad$export$d9397e094a5fbb9a(this.h, this.c, this.l + $070367f03c4768ad$var$K * (k == null ? 1 : k), this.opacity);
    },
    darker: function(k) {
        return new $070367f03c4768ad$export$d9397e094a5fbb9a(this.h, this.c, this.l - $070367f03c4768ad$var$K * (k == null ? 1 : k), this.opacity);
    },
    rgb: function() {
        return $070367f03c4768ad$var$hcl2lab(this).rgb();
    }
}));

});
parcelRegister("4mfmw", function(module, exports) {

$parcel$export(module.exports, "deg2rad", () => $32c5221b6795a5a7$export$b1b275608b2b1b8);
$parcel$export(module.exports, "rad2deg", () => $32c5221b6795a5a7$export$b2ba2578f2c43d74);
var $32c5221b6795a5a7$export$b1b275608b2b1b8 = Math.PI / 180;
var $32c5221b6795a5a7$export$b2ba2578f2c43d74 = 180 / Math.PI;

});


parcelRegister("6wiJa", function(module, exports) {

$parcel$export(module.exports, "default", () => $4bf4421ac66e2e41$export$2e2bcd8739ae039);

var $6nWEw = parcelRequire("6nWEw");

var $abtVK = parcelRequire("abtVK");

var $4mfmw = parcelRequire("4mfmw");
var $4bf4421ac66e2e41$var$A = -0.14861, $4bf4421ac66e2e41$var$B = 1.78277, $4bf4421ac66e2e41$var$C = -0.29227, $4bf4421ac66e2e41$var$D = -0.90649, $4bf4421ac66e2e41$var$E = 1.97294, $4bf4421ac66e2e41$var$ED = $4bf4421ac66e2e41$var$E * $4bf4421ac66e2e41$var$D, $4bf4421ac66e2e41$var$EB = $4bf4421ac66e2e41$var$E * $4bf4421ac66e2e41$var$B, $4bf4421ac66e2e41$var$BC_DA = $4bf4421ac66e2e41$var$B * $4bf4421ac66e2e41$var$C - $4bf4421ac66e2e41$var$D * $4bf4421ac66e2e41$var$A;
function $4bf4421ac66e2e41$var$cubehelixConvert(o) {
    if (o instanceof $4bf4421ac66e2e41$export$57ed4bde61a1e2f2) return new $4bf4421ac66e2e41$export$57ed4bde61a1e2f2(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof (0, $abtVK.Rgb))) o = (0, $abtVK.rgbConvert)(o);
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, l = ($4bf4421ac66e2e41$var$BC_DA * b + $4bf4421ac66e2e41$var$ED * r - $4bf4421ac66e2e41$var$EB * g) / ($4bf4421ac66e2e41$var$BC_DA + $4bf4421ac66e2e41$var$ED - $4bf4421ac66e2e41$var$EB), bl = b - l, k = ($4bf4421ac66e2e41$var$E * (g - l) - $4bf4421ac66e2e41$var$C * bl) / $4bf4421ac66e2e41$var$D, s = Math.sqrt(k * k + bl * bl) / ($4bf4421ac66e2e41$var$E * l * (1 - l)), h = s ? Math.atan2(k, bl) * (0, $4mfmw.rad2deg) - 120 : NaN;
    return new $4bf4421ac66e2e41$export$57ed4bde61a1e2f2(h < 0 ? h + 360 : h, s, l, o.opacity);
}
function $4bf4421ac66e2e41$export$2e2bcd8739ae039(h, s, l, opacity) {
    return arguments.length === 1 ? $4bf4421ac66e2e41$var$cubehelixConvert(h) : new $4bf4421ac66e2e41$export$57ed4bde61a1e2f2(h, s, l, opacity == null ? 1 : opacity);
}
function $4bf4421ac66e2e41$export$57ed4bde61a1e2f2(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
}
(0, $6nWEw.default)($4bf4421ac66e2e41$export$57ed4bde61a1e2f2, $4bf4421ac66e2e41$export$2e2bcd8739ae039, (0, $6nWEw.extend)((0, $abtVK.Color), {
    brighter: function(k) {
        k = k == null ? (0, $abtVK.brighter) : Math.pow((0, $abtVK.brighter), k);
        return new $4bf4421ac66e2e41$export$57ed4bde61a1e2f2(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function(k) {
        k = k == null ? (0, $abtVK.darker) : Math.pow((0, $abtVK.darker), k);
        return new $4bf4421ac66e2e41$export$57ed4bde61a1e2f2(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function() {
        var h = isNaN(this.h) ? 0 : (this.h + 120) * (0, $4mfmw.deg2rad), l = +this.l, a = isNaN(this.s) ? 0 : this.s * l * (1 - l), cosh = Math.cos(h), sinh = Math.sin(h);
        return new (0, $abtVK.Rgb)(255 * (l + a * ($4bf4421ac66e2e41$var$A * cosh + $4bf4421ac66e2e41$var$B * sinh)), 255 * (l + a * ($4bf4421ac66e2e41$var$C * cosh + $4bf4421ac66e2e41$var$D * sinh)), 255 * (l + a * ($4bf4421ac66e2e41$var$E * cosh)), this.opacity);
    }
}));

});


parcelRegister("64CJJ", function(module, exports) {

$parcel$export(module.exports, "contours", () => (parcelRequire("2hTLm")).default);
$parcel$export(module.exports, "contourDensity", () => (parcelRequire("9rFsb")).default);

var $2hTLm = parcelRequire("2hTLm");

var $9rFsb = parcelRequire("9rFsb");

});
parcelRegister("2hTLm", function(module, exports) {

$parcel$export(module.exports, "default", () => $1aa86ca090fea3d0$export$2e2bcd8739ae039);
parcelRequire("ap1W6");
var $7JHjx = parcelRequire("7JHjx");
var $5Cu7w = parcelRequire("5Cu7w");
var $ddvTy = parcelRequire("ddvTy");
var $bn7Cl = parcelRequire("bn7Cl");

var $guJF2 = parcelRequire("guJF2");

var $aL30C = parcelRequire("aL30C");

var $5SOCm = parcelRequire("5SOCm");

var $jmC2C = parcelRequire("jmC2C");

var $eHkE7 = parcelRequire("eHkE7");

var $lqtt1 = parcelRequire("lqtt1");
var $1aa86ca090fea3d0$var$cases = [
    [],
    [
        [
            [
                1.0,
                1.5
            ],
            [
                0.5,
                1.0
            ]
        ]
    ],
    [
        [
            [
                1.5,
                1.0
            ],
            [
                1.0,
                1.5
            ]
        ]
    ],
    [
        [
            [
                1.5,
                1.0
            ],
            [
                0.5,
                1.0
            ]
        ]
    ],
    [
        [
            [
                1.0,
                0.5
            ],
            [
                1.5,
                1.0
            ]
        ]
    ],
    [
        [
            [
                1.0,
                1.5
            ],
            [
                0.5,
                1.0
            ]
        ],
        [
            [
                1.0,
                0.5
            ],
            [
                1.5,
                1.0
            ]
        ]
    ],
    [
        [
            [
                1.0,
                0.5
            ],
            [
                1.0,
                1.5
            ]
        ]
    ],
    [
        [
            [
                1.0,
                0.5
            ],
            [
                0.5,
                1.0
            ]
        ]
    ],
    [
        [
            [
                0.5,
                1.0
            ],
            [
                1.0,
                0.5
            ]
        ]
    ],
    [
        [
            [
                1.0,
                1.5
            ],
            [
                1.0,
                0.5
            ]
        ]
    ],
    [
        [
            [
                0.5,
                1.0
            ],
            [
                1.0,
                0.5
            ]
        ],
        [
            [
                1.5,
                1.0
            ],
            [
                1.0,
                1.5
            ]
        ]
    ],
    [
        [
            [
                1.5,
                1.0
            ],
            [
                1.0,
                0.5
            ]
        ]
    ],
    [
        [
            [
                0.5,
                1.0
            ],
            [
                1.5,
                1.0
            ]
        ]
    ],
    [
        [
            [
                1.0,
                1.5
            ],
            [
                1.5,
                1.0
            ]
        ]
    ],
    [
        [
            [
                0.5,
                1.0
            ],
            [
                1.0,
                1.5
            ]
        ]
    ],
    []
];
function $1aa86ca090fea3d0$export$2e2bcd8739ae039() {
    var dx = 1, dy = 1, threshold = (0, $ddvTy.default), smooth = smoothLinear;
    function contours(values) {
        var tz = threshold(values);
        // Convert number of thresholds into uniform thresholds.
        if (!Array.isArray(tz)) {
            var domain = (0, $7JHjx.default)(values), start = domain[0], stop = domain[1];
            tz = (0, $bn7Cl.tickStep)(start, stop, tz);
            tz = (0, $5Cu7w.default)(Math.floor(start / tz) * tz, Math.floor(stop / tz) * tz, tz);
        } else tz = tz.slice().sort((0, $aL30C.default));
        return tz.map(function(value) {
            return contour(values, value);
        });
    }
    // Accumulate, smooth contour rings, assign holes to exterior rings.
    // Based on https://github.com/mbostock/shapefile/blob/v0.6.2/shp/polygon.js
    function contour(values, value) {
        var polygons = [], holes = [];
        isorings(values, value, function(ring) {
            smooth(ring, values, value);
            if ((0, $5SOCm.default)(ring) > 0) polygons.push([
                ring
            ]);
            else holes.push(ring);
        });
        holes.forEach(function(hole) {
            for(var i = 0, n = polygons.length, polygon; i < n; ++i)if ((0, $eHkE7.default)((polygon = polygons[i])[0], hole) !== -1) {
                polygon.push(hole);
                return;
            }
        });
        return {
            type: "MultiPolygon",
            value: value,
            coordinates: polygons
        };
    }
    // Marching squares with isolines stitched into rings.
    // Based on https://github.com/topojson/topojson-client/blob/v3.0.0/src/stitch.js
    function isorings(values, value, callback) {
        var fragmentByStart = new Array, fragmentByEnd = new Array, x, y, t0, t1, t2, t3;
        // Special case for the first row (y = -1, t2 = t3 = 0).
        x = y = -1;
        t1 = values[0] >= value;
        $1aa86ca090fea3d0$var$cases[t1 << 1].forEach(stitch);
        while(++x < dx - 1){
            t0 = t1, t1 = values[x + 1] >= value;
            $1aa86ca090fea3d0$var$cases[t0 | t1 << 1].forEach(stitch);
        }
        $1aa86ca090fea3d0$var$cases[t1 << 0].forEach(stitch);
        // General case for the intermediate rows.
        while(++y < dy - 1){
            x = -1;
            t1 = values[y * dx + dx] >= value;
            t2 = values[y * dx] >= value;
            $1aa86ca090fea3d0$var$cases[t1 << 1 | t2 << 2].forEach(stitch);
            while(++x < dx - 1){
                t0 = t1, t1 = values[y * dx + dx + x + 1] >= value;
                t3 = t2, t2 = values[y * dx + x + 1] >= value;
                $1aa86ca090fea3d0$var$cases[t0 | t1 << 1 | t2 << 2 | t3 << 3].forEach(stitch);
            }
            $1aa86ca090fea3d0$var$cases[t1 | t2 << 3].forEach(stitch);
        }
        // Special case for the last row (y = dy - 1, t0 = t1 = 0).
        x = -1;
        t2 = values[y * dx] >= value;
        $1aa86ca090fea3d0$var$cases[t2 << 2].forEach(stitch);
        while(++x < dx - 1){
            t3 = t2, t2 = values[y * dx + x + 1] >= value;
            $1aa86ca090fea3d0$var$cases[t2 << 2 | t3 << 3].forEach(stitch);
        }
        $1aa86ca090fea3d0$var$cases[t2 << 3].forEach(stitch);
        function stitch(line) {
            var start = [
                line[0][0] + x,
                line[0][1] + y
            ], end = [
                line[1][0] + x,
                line[1][1] + y
            ], startIndex = index(start), endIndex = index(end), f, g;
            if (f = fragmentByEnd[startIndex]) {
                if (g = fragmentByStart[endIndex]) {
                    delete fragmentByEnd[f.end];
                    delete fragmentByStart[g.start];
                    if (f === g) {
                        f.ring.push(end);
                        callback(f.ring);
                    } else fragmentByStart[f.start] = fragmentByEnd[g.end] = {
                        start: f.start,
                        end: g.end,
                        ring: f.ring.concat(g.ring)
                    };
                } else {
                    delete fragmentByEnd[f.end];
                    f.ring.push(end);
                    fragmentByEnd[f.end = endIndex] = f;
                }
            } else if (f = fragmentByStart[endIndex]) {
                if (g = fragmentByEnd[startIndex]) {
                    delete fragmentByStart[f.start];
                    delete fragmentByEnd[g.end];
                    if (f === g) {
                        f.ring.push(end);
                        callback(f.ring);
                    } else fragmentByStart[g.start] = fragmentByEnd[f.end] = {
                        start: g.start,
                        end: f.end,
                        ring: g.ring.concat(f.ring)
                    };
                } else {
                    delete fragmentByStart[f.start];
                    f.ring.unshift(start);
                    fragmentByStart[f.start = startIndex] = f;
                }
            } else fragmentByStart[startIndex] = fragmentByEnd[endIndex] = {
                start: startIndex,
                end: endIndex,
                ring: [
                    start,
                    end
                ]
            };
        }
    }
    function index(point) {
        return point[0] * 2 + point[1] * (dx + 1) * 4;
    }
    function smoothLinear(ring, values, value) {
        ring.forEach(function(point) {
            var x = point[0], y = point[1], xt = x | 0, yt = y | 0, v0, v1 = values[yt * dx + xt];
            if (x > 0 && x < dx && xt === x) {
                v0 = values[yt * dx + xt - 1];
                point[0] = x + (value - v0) / (v1 - v0) - 0.5;
            }
            if (y > 0 && y < dy && yt === y) {
                v0 = values[(yt - 1) * dx + xt];
                point[1] = y + (value - v0) / (v1 - v0) - 0.5;
            }
        });
    }
    contours.contour = contour;
    contours.size = function(_) {
        if (!arguments.length) return [
            dx,
            dy
        ];
        var _0 = Math.ceil(_[0]), _1 = Math.ceil(_[1]);
        if (!(_0 > 0) || !(_1 > 0)) throw new Error("invalid size");
        return dx = _0, dy = _1, contours;
    };
    contours.thresholds = function(_) {
        return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? (0, $jmC2C.default)((0, $guJF2.slice).call(_)) : (0, $jmC2C.default)(_), contours) : threshold;
    };
    contours.smooth = function(_) {
        return arguments.length ? (smooth = _ ? smoothLinear : (0, $lqtt1.default), contours) : smooth === smoothLinear;
    };
    return contours;
}

});
parcelRegister("guJF2", function(module, exports) {

$parcel$export(module.exports, "slice", () => $c022ddfb05078ace$export$58adb3bec8346d0f);
var $c022ddfb05078ace$var$array = Array.prototype;
var $c022ddfb05078ace$export$58adb3bec8346d0f = $c022ddfb05078ace$var$array.slice;

});

parcelRegister("aL30C", function(module, exports) {

$parcel$export(module.exports, "default", () => $7d50a0b2864e826d$export$2e2bcd8739ae039);
function $7d50a0b2864e826d$export$2e2bcd8739ae039(a, b) {
    return a - b;
}

});

parcelRegister("5SOCm", function(module, exports) {

$parcel$export(module.exports, "default", () => $448942877a9dfc60$export$2e2bcd8739ae039);
function $448942877a9dfc60$export$2e2bcd8739ae039(ring) {
    var i = 0, n = ring.length, area = ring[n - 1][1] * ring[0][0] - ring[n - 1][0] * ring[0][1];
    while(++i < n)area += ring[i - 1][1] * ring[i][0] - ring[i - 1][0] * ring[i][1];
    return area;
}

});

parcelRegister("jmC2C", function(module, exports) {

$parcel$export(module.exports, "default", () => $e18d94983a1a152e$export$2e2bcd8739ae039);
function $e18d94983a1a152e$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}

});

parcelRegister("eHkE7", function(module, exports) {

$parcel$export(module.exports, "default", () => $ab3518b6c6c5e9f8$export$2e2bcd8739ae039);
function $ab3518b6c6c5e9f8$export$2e2bcd8739ae039(ring, hole) {
    var i = -1, n = hole.length, c;
    while(++i < n)if (c = $ab3518b6c6c5e9f8$var$ringContains(ring, hole[i])) return c;
    return 0;
}
function $ab3518b6c6c5e9f8$var$ringContains(ring, point) {
    var x = point[0], y = point[1], contains = -1;
    for(var i = 0, n = ring.length, j = n - 1; i < n; j = i++){
        var pi = ring[i], xi = pi[0], yi = pi[1], pj = ring[j], xj = pj[0], yj = pj[1];
        if ($ab3518b6c6c5e9f8$var$segmentContains(pi, pj, point)) return 0;
        if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) contains = -contains;
    }
    return contains;
}
function $ab3518b6c6c5e9f8$var$segmentContains(a, b, c) {
    var i;
    return $ab3518b6c6c5e9f8$var$collinear(a, b, c) && $ab3518b6c6c5e9f8$var$within(a[i = +(a[0] === b[0])], c[i], b[i]);
}
function $ab3518b6c6c5e9f8$var$collinear(a, b, c) {
    return (b[0] - a[0]) * (c[1] - a[1]) === (c[0] - a[0]) * (b[1] - a[1]);
}
function $ab3518b6c6c5e9f8$var$within(p, q, r) {
    return p <= q && q <= r || r <= q && q <= p;
}

});

parcelRegister("lqtt1", function(module, exports) {

$parcel$export(module.exports, "default", () => $f992e237dccf738d$export$2e2bcd8739ae039);
function $f992e237dccf738d$export$2e2bcd8739ae039() {}

});


parcelRegister("9rFsb", function(module, exports) {

$parcel$export(module.exports, "default", () => $6e06ca82350f0e11$export$2e2bcd8739ae039);
parcelRequire("ap1W6");
var $d7Bqq = parcelRequire("d7Bqq");
var $5Cu7w = parcelRequire("5Cu7w");
var $bn7Cl = parcelRequire("bn7Cl");

var $guJF2 = parcelRequire("guJF2");

var $hrSSf = parcelRequire("hrSSf");

var $jmC2C = parcelRequire("jmC2C");

var $2hTLm = parcelRequire("2hTLm");
function $6e06ca82350f0e11$var$defaultX(d) {
    return d[0];
}
function $6e06ca82350f0e11$var$defaultY(d) {
    return d[1];
}
function $6e06ca82350f0e11$var$defaultWeight() {
    return 1;
}
function $6e06ca82350f0e11$export$2e2bcd8739ae039() {
    var x = $6e06ca82350f0e11$var$defaultX, y = $6e06ca82350f0e11$var$defaultY, weight = $6e06ca82350f0e11$var$defaultWeight, dx = 960, dy = 500, r = 20, k = 2, o = r * 3, n = dx + o * 2 >> k, m = dy + o * 2 >> k, threshold = (0, $jmC2C.default)(20);
    function density(data) {
        var values0 = new Float32Array(n * m), values1 = new Float32Array(n * m);
        data.forEach(function(d, i, data) {
            var xi = +x(d, i, data) + o >> k, yi = +y(d, i, data) + o >> k, wi = +weight(d, i, data);
            if (xi >= 0 && xi < n && yi >= 0 && yi < m) values0[xi + yi * n] += wi;
        });
        // TODO Optimize.
        (0, $hrSSf.blurX)({
            width: n,
            height: m,
            data: values0
        }, {
            width: n,
            height: m,
            data: values1
        }, r >> k);
        (0, $hrSSf.blurY)({
            width: n,
            height: m,
            data: values1
        }, {
            width: n,
            height: m,
            data: values0
        }, r >> k);
        (0, $hrSSf.blurX)({
            width: n,
            height: m,
            data: values0
        }, {
            width: n,
            height: m,
            data: values1
        }, r >> k);
        (0, $hrSSf.blurY)({
            width: n,
            height: m,
            data: values1
        }, {
            width: n,
            height: m,
            data: values0
        }, r >> k);
        (0, $hrSSf.blurX)({
            width: n,
            height: m,
            data: values0
        }, {
            width: n,
            height: m,
            data: values1
        }, r >> k);
        (0, $hrSSf.blurY)({
            width: n,
            height: m,
            data: values1
        }, {
            width: n,
            height: m,
            data: values0
        }, r >> k);
        var tz = threshold(values0);
        // Convert number of thresholds into uniform thresholds.
        if (!Array.isArray(tz)) {
            var stop = (0, $d7Bqq.default)(values0);
            tz = (0, $bn7Cl.tickStep)(0, stop, tz);
            tz = (0, $5Cu7w.default)(0, Math.floor(stop / tz) * tz, tz);
            tz.shift();
        }
        return (0, $2hTLm.default)().thresholds(tz).size([
            n,
            m
        ])(values0).map(transform);
    }
    function transform(geometry) {
        geometry.value *= Math.pow(2, -2 * k); // Density in points per square pixel.
        geometry.coordinates.forEach(transformPolygon);
        return geometry;
    }
    function transformPolygon(coordinates) {
        coordinates.forEach(transformRing);
    }
    function transformRing(coordinates) {
        coordinates.forEach(transformPoint);
    }
    // TODO Optimize.
    function transformPoint(coordinates) {
        coordinates[0] = coordinates[0] * Math.pow(2, k) - o;
        coordinates[1] = coordinates[1] * Math.pow(2, k) - o;
    }
    function resize() {
        o = r * 3;
        n = dx + o * 2 >> k;
        m = dy + o * 2 >> k;
        return density;
    }
    density.x = function(_) {
        return arguments.length ? (x = typeof _ === "function" ? _ : (0, $jmC2C.default)(+_), density) : x;
    };
    density.y = function(_) {
        return arguments.length ? (y = typeof _ === "function" ? _ : (0, $jmC2C.default)(+_), density) : y;
    };
    density.weight = function(_) {
        return arguments.length ? (weight = typeof _ === "function" ? _ : (0, $jmC2C.default)(+_), density) : weight;
    };
    density.size = function(_) {
        if (!arguments.length) return [
            dx,
            dy
        ];
        var _0 = Math.ceil(_[0]), _1 = Math.ceil(_[1]);
        if (!(_0 >= 0) && !(_0 >= 0)) throw new Error("invalid size");
        return dx = _0, dy = _1, resize();
    };
    density.cellSize = function(_) {
        if (!arguments.length) return 1 << k;
        if (!((_ = +_) >= 1)) throw new Error("invalid cell size");
        return k = Math.floor(Math.log(_) / Math.LN2), resize();
    };
    density.thresholds = function(_) {
        return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? (0, $jmC2C.default)((0, $guJF2.slice).call(_)) : (0, $jmC2C.default)(_), density) : threshold;
    };
    density.bandwidth = function(_) {
        if (!arguments.length) return Math.sqrt(r * (r + 1));
        if (!((_ = +_) >= 0)) throw new Error("invalid bandwidth");
        return r = Math.round((Math.sqrt(4 * _ * _ + 1) - 1) / 2), resize();
    };
    return density;
}

});
parcelRegister("hrSSf", function(module, exports) {

$parcel$export(module.exports, "blurX", () => $cb3f86160b195758$export$d6b6c69cb5897b44);
$parcel$export(module.exports, "blurY", () => $cb3f86160b195758$export$96ba1179f8344c4b);
// TODO Optimize edge cases.
// TODO Optimize index calculation.
// TODO Optimize arguments.
function $cb3f86160b195758$export$d6b6c69cb5897b44(source, target, r) {
    var n = source.width, m = source.height, w = (r << 1) + 1;
    for(var j = 0; j < m; ++j)for(var i = 0, sr = 0; i < n + r; ++i){
        if (i < n) sr += source.data[i + j * n];
        if (i >= r) {
            if (i >= w) sr -= source.data[i - w + j * n];
            target.data[i - r + j * n] = sr / Math.min(i + 1, n - 1 + w - i, w);
        }
    }
}
function $cb3f86160b195758$export$96ba1179f8344c4b(source, target, r) {
    var n = source.width, m = source.height, w = (r << 1) + 1;
    for(var i = 0; i < n; ++i)for(var j = 0, sr = 0; j < m + r; ++j){
        if (j < m) sr += source.data[i + j * n];
        if (j >= r) {
            if (j >= w) sr -= source.data[i + (j - w) * n];
            target.data[i + (j - r) * n] = sr / Math.min(j + 1, m - 1 + w - j, w);
        }
    }
}

});



parcelRegister("28Esj", function(module, exports) {

$parcel$export(module.exports, "dispatch", () => (parcelRequire("iBYE9")).default);

var $iBYE9 = parcelRequire("iBYE9");

});

parcelRegister("WiT8y", function(module, exports) {

$parcel$export(module.exports, "drag", () => (parcelRequire("5B1KW")).default);
$parcel$export(module.exports, "dragDisable", () => (parcelRequire("8stEL")).default);
$parcel$export(module.exports, "dragEnable", () => (parcelRequire("8stEL")).yesdrag);

var $5B1KW = parcelRequire("5B1KW");

var $8stEL = parcelRequire("8stEL");

});
parcelRegister("5B1KW", function(module, exports) {

$parcel$export(module.exports, "default", () => $4131c52c0a47232e$export$2e2bcd8739ae039);

var $iBYE9 = parcelRequire("iBYE9");

var $bVR25 = parcelRequire("bVR25");
var $8mNB9 = parcelRequire("8mNB9");
var $gcg15 = parcelRequire("gcg15");
var $g98YB = parcelRequire("g98YB");

var $8stEL = parcelRequire("8stEL");

var $l9DJo = parcelRequire("l9DJo");

var $6q60N = parcelRequire("6q60N");

var $kn9u9 = parcelRequire("kn9u9");
// Ignore right-click, since that should open the context menu.
function $4131c52c0a47232e$var$defaultFilter() {
    return !(0, $bVR25.event).ctrlKey && !(0, $bVR25.event).button;
}
function $4131c52c0a47232e$var$defaultContainer() {
    return this.parentNode;
}
function $4131c52c0a47232e$var$defaultSubject(d) {
    return d == null ? {
        x: (0, $bVR25.event).x,
        y: (0, $bVR25.event).y
    } : d;
}
function $4131c52c0a47232e$var$defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
function $4131c52c0a47232e$export$2e2bcd8739ae039() {
    var filter = $4131c52c0a47232e$var$defaultFilter, container = $4131c52c0a47232e$var$defaultContainer, subject = $4131c52c0a47232e$var$defaultSubject, touchable = $4131c52c0a47232e$var$defaultTouchable, gestures = {}, listeners = (0, $iBYE9.default)("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
    function drag(selection) {
        selection.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    function mousedowned() {
        if (touchending || !filter.apply(this, arguments)) return;
        var gesture = beforestart("mouse", container.apply(this, arguments), (0, $8mNB9.default), this, arguments);
        if (!gesture) return;
        (0, $gcg15.default)((0, $bVR25.event).view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
        (0, $8stEL.default)((0, $bVR25.event).view);
        (0, $l9DJo.nopropagation)();
        mousemoving = false;
        mousedownx = (0, $bVR25.event).clientX;
        mousedowny = (0, $bVR25.event).clientY;
        gesture("start");
    }
    function mousemoved() {
        (0, $l9DJo.default)();
        if (!mousemoving) {
            var dx = (0, $bVR25.event).clientX - mousedownx, dy = (0, $bVR25.event).clientY - mousedowny;
            mousemoving = dx * dx + dy * dy > clickDistance2;
        }
        gestures.mouse("drag");
    }
    function mouseupped() {
        (0, $gcg15.default)((0, $bVR25.event).view).on("mousemove.drag mouseup.drag", null);
        (0, $8stEL.yesdrag)((0, $bVR25.event).view, mousemoving);
        (0, $l9DJo.default)();
        gestures.mouse("end");
    }
    function touchstarted() {
        if (!filter.apply(this, arguments)) return;
        var touches = (0, $bVR25.event).changedTouches, c = container.apply(this, arguments), n = touches.length, i, gesture;
        for(i = 0; i < n; ++i)if (gesture = beforestart(touches[i].identifier, c, (0, $g98YB.default), this, arguments)) {
            (0, $l9DJo.nopropagation)();
            gesture("start");
        }
    }
    function touchmoved() {
        var touches = (0, $bVR25.event).changedTouches, n = touches.length, i, gesture;
        for(i = 0; i < n; ++i)if (gesture = gestures[touches[i].identifier]) {
            (0, $l9DJo.default)();
            gesture("drag");
        }
    }
    function touchended() {
        var touches = (0, $bVR25.event).changedTouches, n = touches.length, i, gesture;
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() {
            touchending = null;
        }, 500); // Ghost clicks are delayed!
        for(i = 0; i < n; ++i)if (gesture = gestures[touches[i].identifier]) {
            (0, $l9DJo.nopropagation)();
            gesture("end");
        }
    }
    function beforestart(id, container, point, that, args) {
        var p = point(container, id), s, dx, dy, sublisteners = listeners.copy();
        if (!(0, $bVR25.customEvent)(new (0, $kn9u9.default)(drag, "beforestart", s, id, active, p[0], p[1], 0, 0, sublisteners), function() {
            if (((0, $bVR25.event).subject = s = subject.apply(that, args)) == null) return false;
            dx = s.x - p[0] || 0;
            dy = s.y - p[1] || 0;
            return true;
        })) return;
        return function gesture(type) {
            var p0 = p, n;
            switch(type){
                case "start":
                    gestures[id] = gesture, n = active++;
                    break;
                case "end":
                    delete gestures[id], --active; // nobreak
                case "drag":
                    p = point(container, id), n = active;
                    break;
            }
            (0, $bVR25.customEvent)(new (0, $kn9u9.default)(drag, type, s, id, n, p[0] + dx, p[1] + dy, p[0] - p0[0], p[1] - p0[1], sublisteners), sublisteners.apply, sublisteners, [
                type,
                that,
                args
            ]);
        };
    }
    drag.filter = function(_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : (0, $6q60N.default)(!!_), drag) : filter;
    };
    drag.container = function(_) {
        return arguments.length ? (container = typeof _ === "function" ? _ : (0, $6q60N.default)(_), drag) : container;
    };
    drag.subject = function(_) {
        return arguments.length ? (subject = typeof _ === "function" ? _ : (0, $6q60N.default)(_), drag) : subject;
    };
    drag.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : (0, $6q60N.default)(!!_), drag) : touchable;
    };
    drag.on = function() {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? drag : value;
    };
    drag.clickDistance = function(_) {
        return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
    };
    return drag;
}

});
parcelRegister("6q60N", function(module, exports) {

$parcel$export(module.exports, "default", () => $4ac9d59e60a0854d$export$2e2bcd8739ae039);
function $4ac9d59e60a0854d$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}

});

parcelRegister("kn9u9", function(module, exports) {

$parcel$export(module.exports, "default", () => $ed4d50321d99e13c$export$2e2bcd8739ae039);
function $ed4d50321d99e13c$export$2e2bcd8739ae039(target, type, subject, id, active, x, y, dx, dy, dispatch) {
    this.target = target;
    this.type = type;
    this.subject = subject;
    this.identifier = id;
    this.active = active;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this._ = dispatch;
}
$ed4d50321d99e13c$export$2e2bcd8739ae039.prototype.on = function() {
    var value = this._.on.apply(this._, arguments);
    return value === this._ ? this : value;
};

});



parcelRegister("6qx3y", function(module, exports) {

$parcel$export(module.exports, "dsvFormat", () => (parcelRequire("6nScL")).default);
$parcel$export(module.exports, "csvParse", () => (parcelRequire("heFBh")).csvParse);
$parcel$export(module.exports, "csvParseRows", () => (parcelRequire("heFBh")).csvParseRows);
$parcel$export(module.exports, "csvFormat", () => (parcelRequire("heFBh")).csvFormat);
$parcel$export(module.exports, "csvFormatBody", () => (parcelRequire("heFBh")).csvFormatBody);
$parcel$export(module.exports, "csvFormatRows", () => (parcelRequire("heFBh")).csvFormatRows);
$parcel$export(module.exports, "csvFormatRow", () => (parcelRequire("heFBh")).csvFormatRow);
$parcel$export(module.exports, "csvFormatValue", () => (parcelRequire("heFBh")).csvFormatValue);
$parcel$export(module.exports, "tsvParse", () => (parcelRequire("lOvtu")).tsvParse);
$parcel$export(module.exports, "tsvParseRows", () => (parcelRequire("lOvtu")).tsvParseRows);
$parcel$export(module.exports, "tsvFormat", () => (parcelRequire("lOvtu")).tsvFormat);
$parcel$export(module.exports, "tsvFormatBody", () => (parcelRequire("lOvtu")).tsvFormatBody);
$parcel$export(module.exports, "tsvFormatRows", () => (parcelRequire("lOvtu")).tsvFormatRows);
$parcel$export(module.exports, "tsvFormatRow", () => (parcelRequire("lOvtu")).tsvFormatRow);
$parcel$export(module.exports, "tsvFormatValue", () => (parcelRequire("lOvtu")).tsvFormatValue);
$parcel$export(module.exports, "autoType", () => (parcelRequire("kFcOX")).default);

var $6nScL = parcelRequire("6nScL");

var $heFBh = parcelRequire("heFBh");

var $lOvtu = parcelRequire("lOvtu");

var $kFcOX = parcelRequire("kFcOX");

});
parcelRegister("6nScL", function(module, exports) {

$parcel$export(module.exports, "default", () => $4a5ef001113ca81e$export$2e2bcd8739ae039);
var $4a5ef001113ca81e$var$EOL = {}, $4a5ef001113ca81e$var$EOF = {}, $4a5ef001113ca81e$var$QUOTE = 34, $4a5ef001113ca81e$var$NEWLINE = 10, $4a5ef001113ca81e$var$RETURN = 13;
function $4a5ef001113ca81e$var$objectConverter(columns) {
    return new Function("d", "return {" + columns.map(function(name, i) {
        return JSON.stringify(name) + ": d[" + i + '] || ""';
    }).join(",") + "}");
}
function $4a5ef001113ca81e$var$customConverter(columns, f) {
    var object = $4a5ef001113ca81e$var$objectConverter(columns);
    return function(row, i) {
        return f(object(row), i, columns);
    };
}
// Compute unique columns in order of discovery.
function $4a5ef001113ca81e$var$inferColumns(rows) {
    var columnSet = Object.create(null), columns = [];
    rows.forEach(function(row) {
        for(var column in row)if (!(column in columnSet)) columns.push(columnSet[column] = column);
    });
    return columns;
}
function $4a5ef001113ca81e$var$pad(value, width) {
    var s = value + "", length = s.length;
    return length < width ? new Array(width - length + 1).join(0) + s : s;
}
function $4a5ef001113ca81e$var$formatYear(year) {
    return year < 0 ? "-" + $4a5ef001113ca81e$var$pad(-year, 6) : year > 9999 ? "+" + $4a5ef001113ca81e$var$pad(year, 6) : $4a5ef001113ca81e$var$pad(year, 4);
}
function $4a5ef001113ca81e$var$formatDate(date) {
    var hours = date.getUTCHours(), minutes = date.getUTCMinutes(), seconds = date.getUTCSeconds(), milliseconds = date.getUTCMilliseconds();
    return isNaN(date) ? "Invalid Date" : $4a5ef001113ca81e$var$formatYear(date.getUTCFullYear(), 4) + "-" + $4a5ef001113ca81e$var$pad(date.getUTCMonth() + 1, 2) + "-" + $4a5ef001113ca81e$var$pad(date.getUTCDate(), 2) + (milliseconds ? "T" + $4a5ef001113ca81e$var$pad(hours, 2) + ":" + $4a5ef001113ca81e$var$pad(minutes, 2) + ":" + $4a5ef001113ca81e$var$pad(seconds, 2) + "." + $4a5ef001113ca81e$var$pad(milliseconds, 3) + "Z" : seconds ? "T" + $4a5ef001113ca81e$var$pad(hours, 2) + ":" + $4a5ef001113ca81e$var$pad(minutes, 2) + ":" + $4a5ef001113ca81e$var$pad(seconds, 2) + "Z" : minutes || hours ? "T" + $4a5ef001113ca81e$var$pad(hours, 2) + ":" + $4a5ef001113ca81e$var$pad(minutes, 2) + "Z" : "");
}
function $4a5ef001113ca81e$export$2e2bcd8739ae039(delimiter) {
    var reFormat = new RegExp('["' + delimiter + "\n\r]"), DELIMITER = delimiter.charCodeAt(0);
    function parse(text, f) {
        var convert, columns, rows = parseRows(text, function(row, i) {
            if (convert) return convert(row, i - 1);
            columns = row, convert = f ? $4a5ef001113ca81e$var$customConverter(row, f) : $4a5ef001113ca81e$var$objectConverter(row);
        });
        rows.columns = columns || [];
        return rows;
    }
    function parseRows(text, f) {
        var rows = [], N = text.length, I = 0, n = 0, t, eof = N <= 0, eol = false; // current token followed by EOL?
        // Strip the trailing newline.
        if (text.charCodeAt(N - 1) === $4a5ef001113ca81e$var$NEWLINE) --N;
        if (text.charCodeAt(N - 1) === $4a5ef001113ca81e$var$RETURN) --N;
        function token() {
            if (eof) return $4a5ef001113ca81e$var$EOF;
            if (eol) return eol = false, $4a5ef001113ca81e$var$EOL;
            // Unescape quotes.
            var i, j = I, c;
            if (text.charCodeAt(j) === $4a5ef001113ca81e$var$QUOTE) {
                while(I++ < N && text.charCodeAt(I) !== $4a5ef001113ca81e$var$QUOTE || text.charCodeAt(++I) === $4a5ef001113ca81e$var$QUOTE);
                if ((i = I) >= N) eof = true;
                else if ((c = text.charCodeAt(I++)) === $4a5ef001113ca81e$var$NEWLINE) eol = true;
                else if (c === $4a5ef001113ca81e$var$RETURN) {
                    eol = true;
                    if (text.charCodeAt(I) === $4a5ef001113ca81e$var$NEWLINE) ++I;
                }
                return text.slice(j + 1, i - 1).replace(/""/g, '"');
            }
            // Find next delimiter or newline.
            while(I < N){
                if ((c = text.charCodeAt(i = I++)) === $4a5ef001113ca81e$var$NEWLINE) eol = true;
                else if (c === $4a5ef001113ca81e$var$RETURN) {
                    eol = true;
                    if (text.charCodeAt(I) === $4a5ef001113ca81e$var$NEWLINE) ++I;
                } else if (c !== DELIMITER) continue;
                return text.slice(j, i);
            }
            // Return last token before EOF.
            return eof = true, text.slice(j, N);
        }
        while((t = token()) !== $4a5ef001113ca81e$var$EOF){
            var row = [];
            while(t !== $4a5ef001113ca81e$var$EOL && t !== $4a5ef001113ca81e$var$EOF)row.push(t), t = token();
            if (f && (row = f(row, n++)) == null) continue;
            rows.push(row);
        }
        return rows;
    }
    function preformatBody(rows, columns) {
        return rows.map(function(row) {
            return columns.map(function(column) {
                return formatValue(row[column]);
            }).join(delimiter);
        });
    }
    function format(rows, columns) {
        if (columns == null) columns = $4a5ef001113ca81e$var$inferColumns(rows);
        return [
            columns.map(formatValue).join(delimiter)
        ].concat(preformatBody(rows, columns)).join("\n");
    }
    function formatBody(rows, columns) {
        if (columns == null) columns = $4a5ef001113ca81e$var$inferColumns(rows);
        return preformatBody(rows, columns).join("\n");
    }
    function formatRows(rows) {
        return rows.map(formatRow).join("\n");
    }
    function formatRow(row) {
        return row.map(formatValue).join(delimiter);
    }
    function formatValue(value) {
        return value == null ? "" : value instanceof Date ? $4a5ef001113ca81e$var$formatDate(value) : reFormat.test(value += "") ? '"' + value.replace(/"/g, '""') + '"' : value;
    }
    return {
        parse: parse,
        parseRows: parseRows,
        format: format,
        formatBody: formatBody,
        formatRows: formatRows,
        formatRow: formatRow,
        formatValue: formatValue
    };
}

});

parcelRegister("heFBh", function(module, exports) {

$parcel$export(module.exports, "csvParse", () => $c8c403706d024b7c$export$289d25497b0f4c16);
$parcel$export(module.exports, "csvParseRows", () => $c8c403706d024b7c$export$c82550ca942d869);
$parcel$export(module.exports, "csvFormat", () => $c8c403706d024b7c$export$afe767551074aa08);
$parcel$export(module.exports, "csvFormatBody", () => $c8c403706d024b7c$export$b46fa59a5e3bc8a2);
$parcel$export(module.exports, "csvFormatRows", () => $c8c403706d024b7c$export$3f42a65843fbd1d9);
$parcel$export(module.exports, "csvFormatRow", () => $c8c403706d024b7c$export$c30212b87b2d080f);
$parcel$export(module.exports, "csvFormatValue", () => $c8c403706d024b7c$export$2771de09a60fc648);

var $6nScL = parcelRequire("6nScL");
var $c8c403706d024b7c$var$csv = (0, $6nScL.default)(",");
var $c8c403706d024b7c$export$289d25497b0f4c16 = $c8c403706d024b7c$var$csv.parse;
var $c8c403706d024b7c$export$c82550ca942d869 = $c8c403706d024b7c$var$csv.parseRows;
var $c8c403706d024b7c$export$afe767551074aa08 = $c8c403706d024b7c$var$csv.format;
var $c8c403706d024b7c$export$b46fa59a5e3bc8a2 = $c8c403706d024b7c$var$csv.formatBody;
var $c8c403706d024b7c$export$3f42a65843fbd1d9 = $c8c403706d024b7c$var$csv.formatRows;
var $c8c403706d024b7c$export$c30212b87b2d080f = $c8c403706d024b7c$var$csv.formatRow;
var $c8c403706d024b7c$export$2771de09a60fc648 = $c8c403706d024b7c$var$csv.formatValue;

});

parcelRegister("lOvtu", function(module, exports) {

$parcel$export(module.exports, "tsvParse", () => $fe16aeb1a20af6c9$export$f913251db2f734ee);
$parcel$export(module.exports, "tsvParseRows", () => $fe16aeb1a20af6c9$export$8de3b5abc40a067f);
$parcel$export(module.exports, "tsvFormat", () => $fe16aeb1a20af6c9$export$77e754c4f8504293);
$parcel$export(module.exports, "tsvFormatBody", () => $fe16aeb1a20af6c9$export$9d44987d460c9cb3);
$parcel$export(module.exports, "tsvFormatRows", () => $fe16aeb1a20af6c9$export$ae461973f6adc981);
$parcel$export(module.exports, "tsvFormatRow", () => $fe16aeb1a20af6c9$export$5d61cf35a4a738d2);
$parcel$export(module.exports, "tsvFormatValue", () => $fe16aeb1a20af6c9$export$4280e6a416cd92a3);

var $6nScL = parcelRequire("6nScL");
var $fe16aeb1a20af6c9$var$tsv = (0, $6nScL.default)("	");
var $fe16aeb1a20af6c9$export$f913251db2f734ee = $fe16aeb1a20af6c9$var$tsv.parse;
var $fe16aeb1a20af6c9$export$8de3b5abc40a067f = $fe16aeb1a20af6c9$var$tsv.parseRows;
var $fe16aeb1a20af6c9$export$77e754c4f8504293 = $fe16aeb1a20af6c9$var$tsv.format;
var $fe16aeb1a20af6c9$export$9d44987d460c9cb3 = $fe16aeb1a20af6c9$var$tsv.formatBody;
var $fe16aeb1a20af6c9$export$ae461973f6adc981 = $fe16aeb1a20af6c9$var$tsv.formatRows;
var $fe16aeb1a20af6c9$export$5d61cf35a4a738d2 = $fe16aeb1a20af6c9$var$tsv.formatRow;
var $fe16aeb1a20af6c9$export$4280e6a416cd92a3 = $fe16aeb1a20af6c9$var$tsv.formatValue;

});

parcelRegister("kFcOX", function(module, exports) {

$parcel$export(module.exports, "default", () => $f0b194f5fd2f32a1$export$2e2bcd8739ae039);
function $f0b194f5fd2f32a1$export$2e2bcd8739ae039(object) {
    for(var key in object){
        var value = object[key].trim(), number, m;
        if (!value) value = null;
        else if (value === "true") value = true;
        else if (value === "false") value = false;
        else if (value === "NaN") value = NaN;
        else if (!isNaN(number = +value)) value = number;
        else if (m = value.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)) {
            if ($f0b194f5fd2f32a1$var$fixtz && !!m[4] && !m[7]) value = value.replace(/-/g, "/").replace(/T/, " ");
            value = new Date(value);
        } else continue;
        object[key] = value;
    }
    return object;
}
// https://github.com/d3/d3-dsv/issues/45
var $f0b194f5fd2f32a1$var$fixtz = new Date("2019-01-01T00:00").getHours() || new Date("2019-07-01T00:00").getHours();

});


parcelRegister("hYwe5", function(module, exports) {

$parcel$export(module.exports, "easeLinear", () => (parcelRequire("4MLYY")).linear);
$parcel$export(module.exports, "easeQuad", () => (parcelRequire("ep9X8")).quadInOut);
$parcel$export(module.exports, "easeQuadIn", () => (parcelRequire("ep9X8")).quadIn);
$parcel$export(module.exports, "easeQuadOut", () => (parcelRequire("ep9X8")).quadOut);
$parcel$export(module.exports, "easeQuadInOut", () => (parcelRequire("ep9X8")).quadInOut);
$parcel$export(module.exports, "easeCubic", () => (parcelRequire("jzOe8")).cubicInOut);
$parcel$export(module.exports, "easeCubicIn", () => (parcelRequire("jzOe8")).cubicIn);
$parcel$export(module.exports, "easeCubicOut", () => (parcelRequire("jzOe8")).cubicOut);
$parcel$export(module.exports, "easeCubicInOut", () => (parcelRequire("jzOe8")).cubicInOut);
$parcel$export(module.exports, "easePoly", () => (parcelRequire("g4jIW")).polyInOut);
$parcel$export(module.exports, "easePolyIn", () => (parcelRequire("g4jIW")).polyIn);
$parcel$export(module.exports, "easePolyOut", () => (parcelRequire("g4jIW")).polyOut);
$parcel$export(module.exports, "easePolyInOut", () => (parcelRequire("g4jIW")).polyInOut);
$parcel$export(module.exports, "easeSin", () => (parcelRequire("k0LQg")).sinInOut);
$parcel$export(module.exports, "easeSinIn", () => (parcelRequire("k0LQg")).sinIn);
$parcel$export(module.exports, "easeSinOut", () => (parcelRequire("k0LQg")).sinOut);
$parcel$export(module.exports, "easeSinInOut", () => (parcelRequire("k0LQg")).sinInOut);
$parcel$export(module.exports, "easeExp", () => (parcelRequire("fyEcw")).expInOut);
$parcel$export(module.exports, "easeExpIn", () => (parcelRequire("fyEcw")).expIn);
$parcel$export(module.exports, "easeExpOut", () => (parcelRequire("fyEcw")).expOut);
$parcel$export(module.exports, "easeExpInOut", () => (parcelRequire("fyEcw")).expInOut);
$parcel$export(module.exports, "easeCircle", () => (parcelRequire("jP3P9")).circleInOut);
$parcel$export(module.exports, "easeCircleIn", () => (parcelRequire("jP3P9")).circleIn);
$parcel$export(module.exports, "easeCircleOut", () => (parcelRequire("jP3P9")).circleOut);
$parcel$export(module.exports, "easeCircleInOut", () => (parcelRequire("jP3P9")).circleInOut);
$parcel$export(module.exports, "easeBounce", () => (parcelRequire("3BOaC")).bounceOut);
$parcel$export(module.exports, "easeBounceIn", () => (parcelRequire("3BOaC")).bounceIn);
$parcel$export(module.exports, "easeBounceOut", () => (parcelRequire("3BOaC")).bounceOut);
$parcel$export(module.exports, "easeBounceInOut", () => (parcelRequire("3BOaC")).bounceInOut);
$parcel$export(module.exports, "easeBack", () => (parcelRequire("eu2AH")).backInOut);
$parcel$export(module.exports, "easeBackIn", () => (parcelRequire("eu2AH")).backIn);
$parcel$export(module.exports, "easeBackOut", () => (parcelRequire("eu2AH")).backOut);
$parcel$export(module.exports, "easeBackInOut", () => (parcelRequire("eu2AH")).backInOut);
$parcel$export(module.exports, "easeElastic", () => (parcelRequire("1Qfvv")).elasticOut);
$parcel$export(module.exports, "easeElasticIn", () => (parcelRequire("1Qfvv")).elasticIn);
$parcel$export(module.exports, "easeElasticOut", () => (parcelRequire("1Qfvv")).elasticOut);
$parcel$export(module.exports, "easeElasticInOut", () => (parcelRequire("1Qfvv")).elasticInOut);

var $4MLYY = parcelRequire("4MLYY");

var $ep9X8 = parcelRequire("ep9X8");

var $jzOe8 = parcelRequire("jzOe8");

var $g4jIW = parcelRequire("g4jIW");

var $k0LQg = parcelRequire("k0LQg");

var $fyEcw = parcelRequire("fyEcw");

var $jP3P9 = parcelRequire("jP3P9");

var $3BOaC = parcelRequire("3BOaC");

var $eu2AH = parcelRequire("eu2AH");

var $1Qfvv = parcelRequire("1Qfvv");

});
parcelRegister("4MLYY", function(module, exports) {

$parcel$export(module.exports, "linear", () => $37c0dd74416a56c8$export$45db2fc2f15997e7);
function $37c0dd74416a56c8$export$45db2fc2f15997e7(t) {
    return +t;
}

});

parcelRegister("ep9X8", function(module, exports) {

$parcel$export(module.exports, "quadIn", () => $a7cb1eed61e7a153$export$5118fc7a1e64441b);
$parcel$export(module.exports, "quadOut", () => $a7cb1eed61e7a153$export$5be5f5e804d0b60c);
$parcel$export(module.exports, "quadInOut", () => $a7cb1eed61e7a153$export$d6ded66933892ed3);
function $a7cb1eed61e7a153$export$5118fc7a1e64441b(t) {
    return t * t;
}
function $a7cb1eed61e7a153$export$5be5f5e804d0b60c(t) {
    return t * (2 - t);
}
function $a7cb1eed61e7a153$export$d6ded66933892ed3(t) {
    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}

});

parcelRegister("g4jIW", function(module, exports) {

$parcel$export(module.exports, "polyIn", () => $bb2c51ccec5217bb$export$aa0b5c3ce2df9d7d);
$parcel$export(module.exports, "polyOut", () => $bb2c51ccec5217bb$export$e3d987a417dc6640);
$parcel$export(module.exports, "polyInOut", () => $bb2c51ccec5217bb$export$ae94c6a40058b429);
var $bb2c51ccec5217bb$var$exponent = 3;
var $bb2c51ccec5217bb$export$aa0b5c3ce2df9d7d = function custom(e) {
    e = +e;
    function polyIn(t) {
        return Math.pow(t, e);
    }
    polyIn.exponent = custom;
    return polyIn;
}($bb2c51ccec5217bb$var$exponent);
var $bb2c51ccec5217bb$export$e3d987a417dc6640 = function custom(e) {
    e = +e;
    function polyOut(t) {
        return 1 - Math.pow(1 - t, e);
    }
    polyOut.exponent = custom;
    return polyOut;
}($bb2c51ccec5217bb$var$exponent);
var $bb2c51ccec5217bb$export$ae94c6a40058b429 = function custom(e) {
    e = +e;
    function polyInOut(t) {
        return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
    }
    polyInOut.exponent = custom;
    return polyInOut;
}($bb2c51ccec5217bb$var$exponent);

});

parcelRegister("k0LQg", function(module, exports) {

$parcel$export(module.exports, "sinIn", () => $e918eb21d7642377$export$a83a280f8d31ba8d);
$parcel$export(module.exports, "sinOut", () => $e918eb21d7642377$export$62ec6410ca53f2a7);
$parcel$export(module.exports, "sinInOut", () => $e918eb21d7642377$export$ff58b604d3ba15ba);
var $e918eb21d7642377$var$pi = Math.PI, $e918eb21d7642377$var$halfPi = $e918eb21d7642377$var$pi / 2;
function $e918eb21d7642377$export$a83a280f8d31ba8d(t) {
    return +t === 1 ? 1 : 1 - Math.cos(t * $e918eb21d7642377$var$halfPi);
}
function $e918eb21d7642377$export$62ec6410ca53f2a7(t) {
    return Math.sin(t * $e918eb21d7642377$var$halfPi);
}
function $e918eb21d7642377$export$ff58b604d3ba15ba(t) {
    return (1 - Math.cos($e918eb21d7642377$var$pi * t)) / 2;
}

});

parcelRegister("fyEcw", function(module, exports) {

$parcel$export(module.exports, "expIn", () => $b539370ebca57678$export$fc3e95f15e1ef38e);
$parcel$export(module.exports, "expOut", () => $b539370ebca57678$export$f3c9b2f85fbcf0ab);
$parcel$export(module.exports, "expInOut", () => $b539370ebca57678$export$ae4d4e77fab188ff);

var $p9a18 = parcelRequire("p9a18");
function $b539370ebca57678$export$fc3e95f15e1ef38e(t) {
    return (0, $p9a18.tpmt)(1 - +t);
}
function $b539370ebca57678$export$f3c9b2f85fbcf0ab(t) {
    return 1 - (0, $p9a18.tpmt)(t);
}
function $b539370ebca57678$export$ae4d4e77fab188ff(t) {
    return ((t *= 2) <= 1 ? (0, $p9a18.tpmt)(1 - t) : 2 - (0, $p9a18.tpmt)(t - 1)) / 2;
}

});
parcelRegister("p9a18", function(module, exports) {

$parcel$export(module.exports, "tpmt", () => $04b97103204dd10c$export$be3f0f7224794b88);
// tpmt is two power minus ten times t scaled to [0,1]
function $04b97103204dd10c$export$be3f0f7224794b88(x) {
    return (Math.pow(2, -10 * x) - 0.0009765625) * 1.0009775171065494;
}

});


parcelRegister("jP3P9", function(module, exports) {

$parcel$export(module.exports, "circleIn", () => $e6e5bf1cffcb3c2a$export$9f82a71b0377c018);
$parcel$export(module.exports, "circleOut", () => $e6e5bf1cffcb3c2a$export$27989e665abef2c8);
$parcel$export(module.exports, "circleInOut", () => $e6e5bf1cffcb3c2a$export$2d757ff9ad09038f);
function $e6e5bf1cffcb3c2a$export$9f82a71b0377c018(t) {
    return 1 - Math.sqrt(1 - t * t);
}
function $e6e5bf1cffcb3c2a$export$27989e665abef2c8(t) {
    return Math.sqrt(1 - --t * t);
}
function $e6e5bf1cffcb3c2a$export$2d757ff9ad09038f(t) {
    return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}

});

parcelRegister("3BOaC", function(module, exports) {

$parcel$export(module.exports, "bounceIn", () => $2a0bbe9017d0646b$export$fccebd7948554554);
$parcel$export(module.exports, "bounceOut", () => $2a0bbe9017d0646b$export$cccc9e04465dce11);
$parcel$export(module.exports, "bounceInOut", () => $2a0bbe9017d0646b$export$41ad9e9849a703ce);
var $2a0bbe9017d0646b$var$b1 = 4 / 11, $2a0bbe9017d0646b$var$b2 = 6 / 11, $2a0bbe9017d0646b$var$b3 = 8 / 11, $2a0bbe9017d0646b$var$b4 = 3 / 4, $2a0bbe9017d0646b$var$b5 = 9 / 11, $2a0bbe9017d0646b$var$b6 = 10 / 11, $2a0bbe9017d0646b$var$b7 = 15 / 16, $2a0bbe9017d0646b$var$b8 = 21 / 22, $2a0bbe9017d0646b$var$b9 = 63 / 64, $2a0bbe9017d0646b$var$b0 = 1 / $2a0bbe9017d0646b$var$b1 / $2a0bbe9017d0646b$var$b1;
function $2a0bbe9017d0646b$export$fccebd7948554554(t) {
    return 1 - $2a0bbe9017d0646b$export$cccc9e04465dce11(1 - t);
}
function $2a0bbe9017d0646b$export$cccc9e04465dce11(t) {
    return (t = +t) < $2a0bbe9017d0646b$var$b1 ? $2a0bbe9017d0646b$var$b0 * t * t : t < $2a0bbe9017d0646b$var$b3 ? $2a0bbe9017d0646b$var$b0 * (t -= $2a0bbe9017d0646b$var$b2) * t + $2a0bbe9017d0646b$var$b4 : t < $2a0bbe9017d0646b$var$b6 ? $2a0bbe9017d0646b$var$b0 * (t -= $2a0bbe9017d0646b$var$b5) * t + $2a0bbe9017d0646b$var$b7 : $2a0bbe9017d0646b$var$b0 * (t -= $2a0bbe9017d0646b$var$b8) * t + $2a0bbe9017d0646b$var$b9;
}
function $2a0bbe9017d0646b$export$41ad9e9849a703ce(t) {
    return ((t *= 2) <= 1 ? 1 - $2a0bbe9017d0646b$export$cccc9e04465dce11(1 - t) : $2a0bbe9017d0646b$export$cccc9e04465dce11(t - 1) + 1) / 2;
}

});

parcelRegister("eu2AH", function(module, exports) {

$parcel$export(module.exports, "backIn", () => $a8b5e08a4fecbcb7$export$b01116c84cdfe1a2);
$parcel$export(module.exports, "backOut", () => $a8b5e08a4fecbcb7$export$77edfce482316a60);
$parcel$export(module.exports, "backInOut", () => $a8b5e08a4fecbcb7$export$ddc5fd596f6c71b2);
var $a8b5e08a4fecbcb7$var$overshoot = 1.70158;
var $a8b5e08a4fecbcb7$export$b01116c84cdfe1a2 = function custom(s) {
    s = +s;
    function backIn(t) {
        return (t = +t) * t * (s * (t - 1) + t);
    }
    backIn.overshoot = custom;
    return backIn;
}($a8b5e08a4fecbcb7$var$overshoot);
var $a8b5e08a4fecbcb7$export$77edfce482316a60 = function custom(s) {
    s = +s;
    function backOut(t) {
        return --t * t * ((t + 1) * s + t) + 1;
    }
    backOut.overshoot = custom;
    return backOut;
}($a8b5e08a4fecbcb7$var$overshoot);
var $a8b5e08a4fecbcb7$export$ddc5fd596f6c71b2 = function custom(s) {
    s = +s;
    function backInOut(t) {
        return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
    }
    backInOut.overshoot = custom;
    return backInOut;
}($a8b5e08a4fecbcb7$var$overshoot);

});

parcelRegister("1Qfvv", function(module, exports) {

$parcel$export(module.exports, "elasticIn", () => $1576ad27b3cd8d1d$export$41f42134872a5fa0);
$parcel$export(module.exports, "elasticOut", () => $1576ad27b3cd8d1d$export$ed1782b99e69bbc8);
$parcel$export(module.exports, "elasticInOut", () => $1576ad27b3cd8d1d$export$309de4f35f218bfd);

var $p9a18 = parcelRequire("p9a18");
var $1576ad27b3cd8d1d$var$tau = 2 * Math.PI, $1576ad27b3cd8d1d$var$amplitude = 1, $1576ad27b3cd8d1d$var$period = 0.3;
var $1576ad27b3cd8d1d$export$41f42134872a5fa0 = function custom(a, p) {
    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= $1576ad27b3cd8d1d$var$tau);
    function elasticIn(t) {
        return a * (0, $p9a18.tpmt)(- --t) * Math.sin((s - t) / p);
    }
    elasticIn.amplitude = function(a) {
        return custom(a, p * $1576ad27b3cd8d1d$var$tau);
    };
    elasticIn.period = function(p) {
        return custom(a, p);
    };
    return elasticIn;
}($1576ad27b3cd8d1d$var$amplitude, $1576ad27b3cd8d1d$var$period);
var $1576ad27b3cd8d1d$export$ed1782b99e69bbc8 = function custom(a, p) {
    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= $1576ad27b3cd8d1d$var$tau);
    function elasticOut(t) {
        return 1 - a * (0, $p9a18.tpmt)(t = +t) * Math.sin((t + s) / p);
    }
    elasticOut.amplitude = function(a) {
        return custom(a, p * $1576ad27b3cd8d1d$var$tau);
    };
    elasticOut.period = function(p) {
        return custom(a, p);
    };
    return elasticOut;
}($1576ad27b3cd8d1d$var$amplitude, $1576ad27b3cd8d1d$var$period);
var $1576ad27b3cd8d1d$export$309de4f35f218bfd = function custom(a, p) {
    var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= $1576ad27b3cd8d1d$var$tau);
    function elasticInOut(t) {
        return ((t = t * 2 - 1) < 0 ? a * (0, $p9a18.tpmt)(-t) * Math.sin((s - t) / p) : 2 - a * (0, $p9a18.tpmt)(t) * Math.sin((s + t) / p)) / 2;
    }
    elasticInOut.amplitude = function(a) {
        return custom(a, p * $1576ad27b3cd8d1d$var$tau);
    };
    elasticInOut.period = function(p) {
        return custom(a, p);
    };
    return elasticInOut;
}($1576ad27b3cd8d1d$var$amplitude, $1576ad27b3cd8d1d$var$period);

});


parcelRegister("6fbIJ", function(module, exports) {

$parcel$export(module.exports, "blob", () => (parcelRequire("e5Kc6")).default);
$parcel$export(module.exports, "buffer", () => (parcelRequire("bCxFQ")).default);
$parcel$export(module.exports, "dsv", () => (parcelRequire("dFlUg")).default);
$parcel$export(module.exports, "csv", () => (parcelRequire("dFlUg")).csv);
$parcel$export(module.exports, "tsv", () => (parcelRequire("dFlUg")).tsv);
$parcel$export(module.exports, "image", () => (parcelRequire("10ymr")).default);
$parcel$export(module.exports, "json", () => (parcelRequire("6nXrY")).default);
$parcel$export(module.exports, "text", () => (parcelRequire("9BCQh")).default);
$parcel$export(module.exports, "xml", () => (parcelRequire("bbef2")).default);
$parcel$export(module.exports, "html", () => (parcelRequire("bbef2")).html);
$parcel$export(module.exports, "svg", () => (parcelRequire("bbef2")).svg);

var $e5Kc6 = parcelRequire("e5Kc6");

var $bCxFQ = parcelRequire("bCxFQ");

var $dFlUg = parcelRequire("dFlUg");

var $10ymr = parcelRequire("10ymr");

var $6nXrY = parcelRequire("6nXrY");

var $9BCQh = parcelRequire("9BCQh");

var $bbef2 = parcelRequire("bbef2");

});
parcelRegister("e5Kc6", function(module, exports) {

$parcel$export(module.exports, "default", () => $a4255d8b4571e865$export$2e2bcd8739ae039);
function $a4255d8b4571e865$var$responseBlob(response) {
    if (!response.ok) throw new Error(response.status + " " + response.statusText);
    return response.blob();
}
function $a4255d8b4571e865$export$2e2bcd8739ae039(input, init) {
    return fetch(input, init).then($a4255d8b4571e865$var$responseBlob);
}

});

parcelRegister("bCxFQ", function(module, exports) {

$parcel$export(module.exports, "default", () => $875d5d42536b2f55$export$2e2bcd8739ae039);
function $875d5d42536b2f55$var$responseArrayBuffer(response) {
    if (!response.ok) throw new Error(response.status + " " + response.statusText);
    return response.arrayBuffer();
}
function $875d5d42536b2f55$export$2e2bcd8739ae039(input, init) {
    return fetch(input, init).then($875d5d42536b2f55$var$responseArrayBuffer);
}

});

parcelRegister("dFlUg", function(module, exports) {

$parcel$export(module.exports, "default", () => $9f3018e155bd990d$export$2e2bcd8739ae039);
$parcel$export(module.exports, "csv", () => $9f3018e155bd990d$export$901ba78aa04f49da);
$parcel$export(module.exports, "tsv", () => $9f3018e155bd990d$export$580b2de76423ff18);

var $heFBh = parcelRequire("heFBh");
var $6nScL = parcelRequire("6nScL");
var $lOvtu = parcelRequire("lOvtu");

var $9BCQh = parcelRequire("9BCQh");
function $9f3018e155bd990d$var$dsvParse(parse) {
    return function(input, init, row) {
        if (arguments.length === 2 && typeof init === "function") row = init, init = undefined;
        return (0, $9BCQh.default)(input, init).then(function(response) {
            return parse(response, row);
        });
    };
}
function $9f3018e155bd990d$export$2e2bcd8739ae039(delimiter, input, init, row) {
    if (arguments.length === 3 && typeof init === "function") row = init, init = undefined;
    var format = (0, $6nScL.default)(delimiter);
    return (0, $9BCQh.default)(input, init).then(function(response) {
        return format.parse(response, row);
    });
}
var $9f3018e155bd990d$export$901ba78aa04f49da = $9f3018e155bd990d$var$dsvParse((0, $heFBh.csvParse));
var $9f3018e155bd990d$export$580b2de76423ff18 = $9f3018e155bd990d$var$dsvParse((0, $lOvtu.tsvParse));

});
parcelRegister("9BCQh", function(module, exports) {

$parcel$export(module.exports, "default", () => $6fe5b2ff8262a344$export$2e2bcd8739ae039);
function $6fe5b2ff8262a344$var$responseText(response) {
    if (!response.ok) throw new Error(response.status + " " + response.statusText);
    return response.text();
}
function $6fe5b2ff8262a344$export$2e2bcd8739ae039(input, init) {
    return fetch(input, init).then($6fe5b2ff8262a344$var$responseText);
}

});


parcelRegister("10ymr", function(module, exports) {

$parcel$export(module.exports, "default", () => $0bc071ed0321d744$export$2e2bcd8739ae039);
function $0bc071ed0321d744$export$2e2bcd8739ae039(input, init) {
    return new Promise(function(resolve, reject) {
        var image = new Image;
        for(var key in init)image[key] = init[key];
        image.onerror = reject;
        image.onload = function() {
            resolve(image);
        };
        image.src = input;
    });
}

});

parcelRegister("6nXrY", function(module, exports) {

$parcel$export(module.exports, "default", () => $4a63019f1093e404$export$2e2bcd8739ae039);
function $4a63019f1093e404$var$responseJson(response) {
    if (!response.ok) throw new Error(response.status + " " + response.statusText);
    if (response.status === 204 || response.status === 205) return;
    return response.json();
}
function $4a63019f1093e404$export$2e2bcd8739ae039(input, init) {
    return fetch(input, init).then($4a63019f1093e404$var$responseJson);
}

});

parcelRegister("bbef2", function(module, exports) {

$parcel$export(module.exports, "default", () => $823bc4e07c53f962$export$2e2bcd8739ae039);
$parcel$export(module.exports, "html", () => $823bc4e07c53f962$export$c0bb0b647f701bb5);
$parcel$export(module.exports, "svg", () => $823bc4e07c53f962$export$7ed1367e7fa1ad68);

var $9BCQh = parcelRequire("9BCQh");
function $823bc4e07c53f962$var$parser(type) {
    return function(input, init) {
        return (0, $9BCQh.default)(input, init).then(function(text) {
            return (new DOMParser).parseFromString(text, type);
        });
    };
}
var $823bc4e07c53f962$export$2e2bcd8739ae039 = $823bc4e07c53f962$var$parser("application/xml");
var $823bc4e07c53f962$export$c0bb0b647f701bb5 = $823bc4e07c53f962$var$parser("text/html");
var $823bc4e07c53f962$export$7ed1367e7fa1ad68 = $823bc4e07c53f962$var$parser("image/svg+xml");

});


parcelRegister("k2x0x", function(module, exports) {

$parcel$export(module.exports, "forceCenter", () => (parcelRequire("ctpMN")).default);
$parcel$export(module.exports, "forceCollide", () => (parcelRequire("fJkso")).default);
$parcel$export(module.exports, "forceLink", () => (parcelRequire("knZYW")).default);
$parcel$export(module.exports, "forceManyBody", () => (parcelRequire("58T4W")).default);
$parcel$export(module.exports, "forceRadial", () => (parcelRequire("aIaqN")).default);
$parcel$export(module.exports, "forceSimulation", () => (parcelRequire("aaCZx")).default);
$parcel$export(module.exports, "forceX", () => (parcelRequire("6Ms6X")).default);
$parcel$export(module.exports, "forceY", () => (parcelRequire("apcHK")).default);

var $ctpMN = parcelRequire("ctpMN");

var $fJkso = parcelRequire("fJkso");

var $knZYW = parcelRequire("knZYW");

var $58T4W = parcelRequire("58T4W");

var $aIaqN = parcelRequire("aIaqN");

var $aaCZx = parcelRequire("aaCZx");

var $6Ms6X = parcelRequire("6Ms6X");

var $apcHK = parcelRequire("apcHK");

});
parcelRegister("ctpMN", function(module, exports) {

$parcel$export(module.exports, "default", () => $914c320b1e55ef3c$export$2e2bcd8739ae039);
function $914c320b1e55ef3c$export$2e2bcd8739ae039(x, y) {
    var nodes;
    if (x == null) x = 0;
    if (y == null) y = 0;
    function force() {
        var i, n = nodes.length, node, sx = 0, sy = 0;
        for(i = 0; i < n; ++i)node = nodes[i], sx += node.x, sy += node.y;
        for(sx = sx / n - x, sy = sy / n - y, i = 0; i < n; ++i)node = nodes[i], node.x -= sx, node.y -= sy;
    }
    force.initialize = function(_) {
        nodes = _;
    };
    force.x = function(_) {
        return arguments.length ? (x = +_, force) : x;
    };
    force.y = function(_) {
        return arguments.length ? (y = +_, force) : y;
    };
    return force;
}

});

parcelRegister("fJkso", function(module, exports) {

$parcel$export(module.exports, "default", () => $b73aed5539e73dc4$export$2e2bcd8739ae039);

var $382Ne = parcelRequire("382Ne");

var $atZYc = parcelRequire("atZYc");

var $16dty = parcelRequire("16dty");
function $b73aed5539e73dc4$var$x(d) {
    return d.x + d.vx;
}
function $b73aed5539e73dc4$var$y(d) {
    return d.y + d.vy;
}
function $b73aed5539e73dc4$export$2e2bcd8739ae039(radius) {
    var nodes, radii, strength = 1, iterations = 1;
    if (typeof radius !== "function") radius = (0, $382Ne.default)(radius == null ? 1 : +radius);
    function force() {
        var i, n = nodes.length, tree, node, xi, yi, ri, ri2;
        for(var k = 0; k < iterations; ++k){
            tree = (0, $16dty.default)(nodes, $b73aed5539e73dc4$var$x, $b73aed5539e73dc4$var$y).visitAfter(prepare);
            for(i = 0; i < n; ++i){
                node = nodes[i];
                ri = radii[node.index], ri2 = ri * ri;
                xi = node.x + node.vx;
                yi = node.y + node.vy;
                tree.visit(apply);
            }
        }
        function apply(quad, x0, y0, x1, y1) {
            var data = quad.data, rj = quad.r, r = ri + rj;
            if (data) {
                if (data.index > node.index) {
                    var x = xi - data.x - data.vx, y = yi - data.y - data.vy, l = x * x + y * y;
                    if (l < r * r) {
                        if (x === 0) x = (0, $atZYc.default)(), l += x * x;
                        if (y === 0) y = (0, $atZYc.default)(), l += y * y;
                        l = (r - (l = Math.sqrt(l))) / l * strength;
                        node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
                        node.vy += (y *= l) * r;
                        data.vx -= x * (r = 1 - r);
                        data.vy -= y * r;
                    }
                }
                return;
            }
            return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
        }
    }
    function prepare(quad) {
        if (quad.data) return quad.r = radii[quad.data.index];
        for(var i = quad.r = 0; i < 4; ++i)if (quad[i] && quad[i].r > quad.r) quad.r = quad[i].r;
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length, node;
        radii = new Array(n);
        for(i = 0; i < n; ++i)node = nodes[i], radii[node.index] = +radius(node, i, nodes);
    }
    force.initialize = function(_) {
        nodes = _;
        initialize();
    };
    force.iterations = function(_) {
        return arguments.length ? (iterations = +_, force) : iterations;
    };
    force.strength = function(_) {
        return arguments.length ? (strength = +_, force) : strength;
    };
    force.radius = function(_) {
        return arguments.length ? (radius = typeof _ === "function" ? _ : (0, $382Ne.default)(+_), initialize(), force) : radius;
    };
    return force;
}

});
parcelRegister("382Ne", function(module, exports) {

$parcel$export(module.exports, "default", () => $2474491eaefb48ef$export$2e2bcd8739ae039);
function $2474491eaefb48ef$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}

});

parcelRegister("atZYc", function(module, exports) {

$parcel$export(module.exports, "default", () => $7a1caebddeae53b5$export$2e2bcd8739ae039);
function $7a1caebddeae53b5$export$2e2bcd8739ae039() {
    return (Math.random() - 0.5) * 1e-6;
}

});

parcelRegister("16dty", function(module, exports) {

$parcel$export(module.exports, "default", () => $0cd0cdf4dfce5b1e$export$2e2bcd8739ae039);

var $k1xVh = parcelRequire("k1xVh");

var $iJ26R = parcelRequire("iJ26R");

var $7mwa7 = parcelRequire("7mwa7");

var $ftpJn = parcelRequire("ftpJn");

var $jdnqc = parcelRequire("jdnqc");

var $49Ex5 = parcelRequire("49Ex5");

var $inAfy = parcelRequire("inAfy");

var $4ATbK = parcelRequire("4ATbK");

var $lsjHd = parcelRequire("lsjHd");

var $gvyYt = parcelRequire("gvyYt");

var $ahlw2 = parcelRequire("ahlw2");

var $gFTGd = parcelRequire("gFTGd");
function $0cd0cdf4dfce5b1e$export$2e2bcd8739ae039(nodes, x, y) {
    var tree = new $0cd0cdf4dfce5b1e$var$Quadtree(x == null ? (0, $ahlw2.defaultX) : x, y == null ? (0, $gFTGd.defaultY) : y, NaN, NaN, NaN, NaN);
    return nodes == null ? tree : tree.addAll(nodes);
}
function $0cd0cdf4dfce5b1e$var$Quadtree(x, y, x0, y0, x1, y1) {
    this._x = x;
    this._y = y;
    this._x0 = x0;
    this._y0 = y0;
    this._x1 = x1;
    this._y1 = y1;
    this._root = undefined;
}
function $0cd0cdf4dfce5b1e$var$leaf_copy(leaf) {
    var copy = {
        data: leaf.data
    }, next = copy;
    while(leaf = leaf.next)next = next.next = {
        data: leaf.data
    };
    return copy;
}
var $0cd0cdf4dfce5b1e$var$treeProto = $0cd0cdf4dfce5b1e$export$2e2bcd8739ae039.prototype = $0cd0cdf4dfce5b1e$var$Quadtree.prototype;
$0cd0cdf4dfce5b1e$var$treeProto.copy = function() {
    var copy = new $0cd0cdf4dfce5b1e$var$Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1), node = this._root, nodes, child;
    if (!node) return copy;
    if (!node.length) return copy._root = $0cd0cdf4dfce5b1e$var$leaf_copy(node), copy;
    nodes = [
        {
            source: node,
            target: copy._root = new Array(4)
        }
    ];
    while(node = nodes.pop()){
        for(var i = 0; i < 4; ++i)if (child = node.source[i]) {
            if (child.length) nodes.push({
                source: child,
                target: node.target[i] = new Array(4)
            });
            else node.target[i] = $0cd0cdf4dfce5b1e$var$leaf_copy(child);
        }
    }
    return copy;
};
$0cd0cdf4dfce5b1e$var$treeProto.add = (0, $k1xVh.default);
$0cd0cdf4dfce5b1e$var$treeProto.addAll = (0, $k1xVh.addAll);
$0cd0cdf4dfce5b1e$var$treeProto.cover = (0, $iJ26R.default);
$0cd0cdf4dfce5b1e$var$treeProto.data = (0, $7mwa7.default);
$0cd0cdf4dfce5b1e$var$treeProto.extent = (0, $ftpJn.default);
$0cd0cdf4dfce5b1e$var$treeProto.find = (0, $jdnqc.default);
$0cd0cdf4dfce5b1e$var$treeProto.remove = (0, $49Ex5.default);
$0cd0cdf4dfce5b1e$var$treeProto.removeAll = (0, $49Ex5.removeAll);
$0cd0cdf4dfce5b1e$var$treeProto.root = (0, $inAfy.default);
$0cd0cdf4dfce5b1e$var$treeProto.size = (0, $4ATbK.default);
$0cd0cdf4dfce5b1e$var$treeProto.visit = (0, $lsjHd.default);
$0cd0cdf4dfce5b1e$var$treeProto.visitAfter = (0, $gvyYt.default);
$0cd0cdf4dfce5b1e$var$treeProto.x = (0, $ahlw2.default);
$0cd0cdf4dfce5b1e$var$treeProto.y = (0, $gFTGd.default);

});
parcelRegister("k1xVh", function(module, exports) {

$parcel$export(module.exports, "default", () => $e93e3706fa80e923$export$2e2bcd8739ae039);
$parcel$export(module.exports, "addAll", () => $e93e3706fa80e923$export$32ed0561867ec8a1);
function $e93e3706fa80e923$export$2e2bcd8739ae039(d) {
    var x = +this._x.call(null, d), y = +this._y.call(null, d);
    return $e93e3706fa80e923$var$add(this.cover(x, y), x, y, d);
}
function $e93e3706fa80e923$var$add(tree, x, y, d) {
    if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points
    var parent, node = tree._root, leaf = {
        data: d
    }, x0 = tree._x0, y0 = tree._y0, x1 = tree._x1, y1 = tree._y1, xm, ym, xp, yp, right, bottom, i, j;
    // If the tree is empty, initialize the root as a leaf.
    if (!node) return tree._root = leaf, tree;
    // Find the existing leaf for the new point, or add it.
    while(node.length){
        if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
        else x1 = xm;
        if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;
        else y1 = ym;
        if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
    }
    // Is the new point is exactly coincident with the existing point?
    xp = +tree._x.call(null, node.data);
    yp = +tree._y.call(null, node.data);
    if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;
    // Otherwise, split the leaf node until the old and new point are separated.
    do {
        parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
        if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
        else x1 = xm;
        if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;
        else y1 = ym;
    }while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | xp >= xm));
    return parent[j] = node, parent[i] = leaf, tree;
}
function $e93e3706fa80e923$export$32ed0561867ec8a1(data) {
    var d, i, n = data.length, x, y, xz = new Array(n), yz = new Array(n), x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    // Compute the points and their extent.
    for(i = 0; i < n; ++i){
        if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
        xz[i] = x;
        yz[i] = y;
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
    }
    // If there were no (valid) points, abort.
    if (x0 > x1 || y0 > y1) return this;
    // Expand the tree to cover the new points.
    this.cover(x0, y0).cover(x1, y1);
    // Add the new points.
    for(i = 0; i < n; ++i)$e93e3706fa80e923$var$add(this, xz[i], yz[i], data[i]);
    return this;
}

});

parcelRegister("iJ26R", function(module, exports) {

$parcel$export(module.exports, "default", () => $da1e10e59c421a04$export$2e2bcd8739ae039);
function $da1e10e59c421a04$export$2e2bcd8739ae039(x, y) {
    if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points
    var x0 = this._x0, y0 = this._y0, x1 = this._x1, y1 = this._y1;
    // If the quadtree has no extent, initialize them.
    // Integer extent are necessary so that if we later double the extent,
    // the existing quadrant boundaries don’t change due to floating point error!
    if (isNaN(x0)) {
        x1 = (x0 = Math.floor(x)) + 1;
        y1 = (y0 = Math.floor(y)) + 1;
    } else {
        var z = x1 - x0, node = this._root, parent, i;
        while(x0 > x || x >= x1 || y0 > y || y >= y1){
            i = (y < y0) << 1 | x < x0;
            parent = new Array(4), parent[i] = node, node = parent, z *= 2;
            switch(i){
                case 0:
                    x1 = x0 + z, y1 = y0 + z;
                    break;
                case 1:
                    x0 = x1 - z, y1 = y0 + z;
                    break;
                case 2:
                    x1 = x0 + z, y0 = y1 - z;
                    break;
                case 3:
                    x0 = x1 - z, y0 = y1 - z;
                    break;
            }
        }
        if (this._root && this._root.length) this._root = node;
    }
    this._x0 = x0;
    this._y0 = y0;
    this._x1 = x1;
    this._y1 = y1;
    return this;
}

});

parcelRegister("7mwa7", function(module, exports) {

$parcel$export(module.exports, "default", () => $55c3893b9f3710c9$export$2e2bcd8739ae039);
function $55c3893b9f3710c9$export$2e2bcd8739ae039() {
    var data = [];
    this.visit(function(node) {
        if (!node.length) do data.push(node.data);
        while (node = node.next);
    });
    return data;
}

});

parcelRegister("ftpJn", function(module, exports) {

$parcel$export(module.exports, "default", () => $b43d8610a7fdbdc3$export$2e2bcd8739ae039);
function $b43d8610a7fdbdc3$export$2e2bcd8739ae039(_) {
    return arguments.length ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1]) : isNaN(this._x0) ? undefined : [
        [
            this._x0,
            this._y0
        ],
        [
            this._x1,
            this._y1
        ]
    ];
}

});

parcelRegister("jdnqc", function(module, exports) {

$parcel$export(module.exports, "default", () => $dfd1663b3e27e212$export$2e2bcd8739ae039);

var $3EHmC = parcelRequire("3EHmC");
function $dfd1663b3e27e212$export$2e2bcd8739ae039(x, y, radius) {
    var data, x0 = this._x0, y0 = this._y0, x1, y1, x2, y2, x3 = this._x1, y3 = this._y1, quads = [], node = this._root, q, i;
    if (node) quads.push(new (0, $3EHmC.default)(node, x0, y0, x3, y3));
    if (radius == null) radius = Infinity;
    else {
        x0 = x - radius, y0 = y - radius;
        x3 = x + radius, y3 = y + radius;
        radius *= radius;
    }
    while(q = quads.pop()){
        // Stop searching if this quadrant can’t contain a closer node.
        if (!(node = q.node) || (x1 = q.x0) > x3 || (y1 = q.y0) > y3 || (x2 = q.x1) < x0 || (y2 = q.y1) < y0) continue;
        // Bisect the current quadrant.
        if (node.length) {
            var xm = (x1 + x2) / 2, ym = (y1 + y2) / 2;
            quads.push(new (0, $3EHmC.default)(node[3], xm, ym, x2, y2), new (0, $3EHmC.default)(node[2], x1, ym, xm, y2), new (0, $3EHmC.default)(node[1], xm, y1, x2, ym), new (0, $3EHmC.default)(node[0], x1, y1, xm, ym));
            // Visit the closest quadrant first.
            if (i = (y >= ym) << 1 | x >= xm) {
                q = quads[quads.length - 1];
                quads[quads.length - 1] = quads[quads.length - 1 - i];
                quads[quads.length - 1 - i] = q;
            }
        } else {
            var dx = x - +this._x.call(null, node.data), dy = y - +this._y.call(null, node.data), d2 = dx * dx + dy * dy;
            if (d2 < radius) {
                var d = Math.sqrt(radius = d2);
                x0 = x - d, y0 = y - d;
                x3 = x + d, y3 = y + d;
                data = node.data;
            }
        }
    }
    return data;
}

});
parcelRegister("3EHmC", function(module, exports) {

$parcel$export(module.exports, "default", () => $2a96beb1b89b1f4a$export$2e2bcd8739ae039);
function $2a96beb1b89b1f4a$export$2e2bcd8739ae039(node, x0, y0, x1, y1) {
    this.node = node;
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;
}

});


parcelRegister("49Ex5", function(module, exports) {

$parcel$export(module.exports, "default", () => $306771a2543bdaa6$export$2e2bcd8739ae039);
$parcel$export(module.exports, "removeAll", () => $306771a2543bdaa6$export$1cfc7aad5cb1833b);
function $306771a2543bdaa6$export$2e2bcd8739ae039(d) {
    if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points
    var parent, node = this._root, retainer, previous, next, x0 = this._x0, y0 = this._y0, x1 = this._x1, y1 = this._y1, x, y, xm, ym, right, bottom, i, j;
    // If the tree is empty, initialize the root as a leaf.
    if (!node) return this;
    // Find the leaf node for the point.
    // While descending, also retain the deepest parent with a non-removed sibling.
    if (node.length) while(true){
        if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm;
        else x1 = xm;
        if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym;
        else y1 = ym;
        if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
        if (!node.length) break;
        if (parent[i + 1 & 3] || parent[i + 2 & 3] || parent[i + 3 & 3]) retainer = parent, j = i;
    }
    // Find the point to remove.
    while(node.data !== d)if (!(previous = node, node = node.next)) return this;
    if (next = node.next) delete node.next;
    // If there are multiple coincident points, remove just the point.
    if (previous) return next ? previous.next = next : delete previous.next, this;
    // If this is the root point, remove it.
    if (!parent) return this._root = next, this;
    // Remove this leaf.
    next ? parent[i] = next : delete parent[i];
    // If the parent now contains exactly one leaf, collapse superfluous parents.
    if ((node = parent[0] || parent[1] || parent[2] || parent[3]) && node === (parent[3] || parent[2] || parent[1] || parent[0]) && !node.length) {
        if (retainer) retainer[j] = node;
        else this._root = node;
    }
    return this;
}
function $306771a2543bdaa6$export$1cfc7aad5cb1833b(data) {
    for(var i = 0, n = data.length; i < n; ++i)this.remove(data[i]);
    return this;
}

});

parcelRegister("inAfy", function(module, exports) {

$parcel$export(module.exports, "default", () => $d6167e6f331f726f$export$2e2bcd8739ae039);
function $d6167e6f331f726f$export$2e2bcd8739ae039() {
    return this._root;
}

});

parcelRegister("4ATbK", function(module, exports) {

$parcel$export(module.exports, "default", () => $3585558584af7e29$export$2e2bcd8739ae039);
function $3585558584af7e29$export$2e2bcd8739ae039() {
    var size = 0;
    this.visit(function(node) {
        if (!node.length) do ++size;
        while (node = node.next);
    });
    return size;
}

});

parcelRegister("lsjHd", function(module, exports) {

$parcel$export(module.exports, "default", () => $f9eb7dbae8a69965$export$2e2bcd8739ae039);

var $3EHmC = parcelRequire("3EHmC");
function $f9eb7dbae8a69965$export$2e2bcd8739ae039(callback) {
    var quads = [], q, node = this._root, child, x0, y0, x1, y1;
    if (node) quads.push(new (0, $3EHmC.default)(node, this._x0, this._y0, this._x1, this._y1));
    while(q = quads.pop())if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
        var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
        if (child = node[3]) quads.push(new (0, $3EHmC.default)(child, xm, ym, x1, y1));
        if (child = node[2]) quads.push(new (0, $3EHmC.default)(child, x0, ym, xm, y1));
        if (child = node[1]) quads.push(new (0, $3EHmC.default)(child, xm, y0, x1, ym));
        if (child = node[0]) quads.push(new (0, $3EHmC.default)(child, x0, y0, xm, ym));
    }
    return this;
}

});

parcelRegister("gvyYt", function(module, exports) {

$parcel$export(module.exports, "default", () => $c04aabcc388348e7$export$2e2bcd8739ae039);

var $3EHmC = parcelRequire("3EHmC");
function $c04aabcc388348e7$export$2e2bcd8739ae039(callback) {
    var quads = [], next = [], q;
    if (this._root) quads.push(new (0, $3EHmC.default)(this._root, this._x0, this._y0, this._x1, this._y1));
    while(q = quads.pop()){
        var node = q.node;
        if (node.length) {
            var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
            if (child = node[0]) quads.push(new (0, $3EHmC.default)(child, x0, y0, xm, ym));
            if (child = node[1]) quads.push(new (0, $3EHmC.default)(child, xm, y0, x1, ym));
            if (child = node[2]) quads.push(new (0, $3EHmC.default)(child, x0, ym, xm, y1));
            if (child = node[3]) quads.push(new (0, $3EHmC.default)(child, xm, ym, x1, y1));
        }
        next.push(q);
    }
    while(q = next.pop())callback(q.node, q.x0, q.y0, q.x1, q.y1);
    return this;
}

});

parcelRegister("ahlw2", function(module, exports) {

$parcel$export(module.exports, "defaultX", () => $77bc2e82dc99f413$export$e6fafc98131d2a44);
$parcel$export(module.exports, "default", () => $77bc2e82dc99f413$export$2e2bcd8739ae039);
function $77bc2e82dc99f413$export$e6fafc98131d2a44(d) {
    return d[0];
}
function $77bc2e82dc99f413$export$2e2bcd8739ae039(_) {
    return arguments.length ? (this._x = _, this) : this._x;
}

});

parcelRegister("gFTGd", function(module, exports) {

$parcel$export(module.exports, "defaultY", () => $c23baa8a2e2fedf1$export$6f0a21aeb844a64c);
$parcel$export(module.exports, "default", () => $c23baa8a2e2fedf1$export$2e2bcd8739ae039);
function $c23baa8a2e2fedf1$export$6f0a21aeb844a64c(d) {
    return d[1];
}
function $c23baa8a2e2fedf1$export$2e2bcd8739ae039(_) {
    return arguments.length ? (this._y = _, this) : this._y;
}

});



parcelRegister("knZYW", function(module, exports) {

$parcel$export(module.exports, "default", () => $ed7608efd452aa12$export$2e2bcd8739ae039);

var $382Ne = parcelRequire("382Ne");

var $atZYc = parcelRequire("atZYc");
parcelRequire("3pJtp");
var $9y7Xw = parcelRequire("9y7Xw");
function $ed7608efd452aa12$var$index(d) {
    return d.index;
}
function $ed7608efd452aa12$var$find(nodeById, nodeId) {
    var node = nodeById.get(nodeId);
    if (!node) throw new Error("missing: " + nodeId);
    return node;
}
function $ed7608efd452aa12$export$2e2bcd8739ae039(links) {
    var id = $ed7608efd452aa12$var$index, strength = defaultStrength, strengths, distance = (0, $382Ne.default)(30), distances, nodes, count, bias, iterations = 1;
    if (links == null) links = [];
    function defaultStrength(link) {
        return 1 / Math.min(count[link.source.index], count[link.target.index]);
    }
    function force(alpha) {
        for(var k = 0, n = links.length; k < iterations; ++k)for(var i = 0, link, source, target, x, y, l, b; i < n; ++i){
            link = links[i], source = link.source, target = link.target;
            x = target.x + target.vx - source.x - source.vx || (0, $atZYc.default)();
            y = target.y + target.vy - source.y - source.vy || (0, $atZYc.default)();
            l = Math.sqrt(x * x + y * y);
            l = (l - distances[i]) / l * alpha * strengths[i];
            x *= l, y *= l;
            target.vx -= x * (b = bias[i]);
            target.vy -= y * b;
            source.vx += x * (b = 1 - b);
            source.vy += y * b;
        }
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length, m = links.length, nodeById = (0, $9y7Xw.default)(nodes, id), link;
        for(i = 0, count = new Array(n); i < m; ++i){
            link = links[i], link.index = i;
            if (typeof link.source !== "object") link.source = $ed7608efd452aa12$var$find(nodeById, link.source);
            if (typeof link.target !== "object") link.target = $ed7608efd452aa12$var$find(nodeById, link.target);
            count[link.source.index] = (count[link.source.index] || 0) + 1;
            count[link.target.index] = (count[link.target.index] || 0) + 1;
        }
        for(i = 0, bias = new Array(m); i < m; ++i)link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
        strengths = new Array(m), initializeStrength();
        distances = new Array(m), initializeDistance();
    }
    function initializeStrength() {
        if (!nodes) return;
        for(var i = 0, n = links.length; i < n; ++i)strengths[i] = +strength(links[i], i, links);
    }
    function initializeDistance() {
        if (!nodes) return;
        for(var i = 0, n = links.length; i < n; ++i)distances[i] = +distance(links[i], i, links);
    }
    force.initialize = function(_) {
        nodes = _;
        initialize();
    };
    force.links = function(_) {
        return arguments.length ? (links = _, initialize(), force) : links;
    };
    force.id = function(_) {
        return arguments.length ? (id = _, force) : id;
    };
    force.iterations = function(_) {
        return arguments.length ? (iterations = +_, force) : iterations;
    };
    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : (0, $382Ne.default)(+_), initializeStrength(), force) : strength;
    };
    force.distance = function(_) {
        return arguments.length ? (distance = typeof _ === "function" ? _ : (0, $382Ne.default)(+_), initializeDistance(), force) : distance;
    };
    return force;
}

});

parcelRegister("58T4W", function(module, exports) {

$parcel$export(module.exports, "default", () => $3be86c9154249a8a$export$2e2bcd8739ae039);

var $382Ne = parcelRequire("382Ne");

var $atZYc = parcelRequire("atZYc");

var $16dty = parcelRequire("16dty");

var $aaCZx = parcelRequire("aaCZx");
function $3be86c9154249a8a$export$2e2bcd8739ae039() {
    var nodes, node, alpha, strength = (0, $382Ne.default)(-30), strengths, distanceMin2 = 1, distanceMax2 = Infinity, theta2 = 0.81;
    function force(_) {
        var i, n = nodes.length, tree = (0, $16dty.default)(nodes, (0, $aaCZx.x), (0, $aaCZx.y)).visitAfter(accumulate);
        for(alpha = _, i = 0; i < n; ++i)node = nodes[i], tree.visit(apply);
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length, node;
        strengths = new Array(n);
        for(i = 0; i < n; ++i)node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
    }
    function accumulate(quad) {
        var strength = 0, q, c, weight = 0, x, y, i;
        // For internal nodes, accumulate forces from child quadrants.
        if (quad.length) {
            for(x = y = i = 0; i < 4; ++i)if ((q = quad[i]) && (c = Math.abs(q.value))) strength += q.value, weight += c, x += c * q.x, y += c * q.y;
            quad.x = x / weight;
            quad.y = y / weight;
        } else {
            q = quad;
            q.x = q.data.x;
            q.y = q.data.y;
            do strength += strengths[q.data.index];
            while (q = q.next);
        }
        quad.value = strength;
    }
    function apply(quad, x1, _, x2) {
        if (!quad.value) return true;
        var x = quad.x - node.x, y = quad.y - node.y, w = x2 - x1, l = x * x + y * y;
        // Apply the Barnes-Hut approximation if possible.
        // Limit forces for very close nodes; randomize direction if coincident.
        if (w * w / theta2 < l) {
            if (l < distanceMax2) {
                if (x === 0) x = (0, $atZYc.default)(), l += x * x;
                if (y === 0) y = (0, $atZYc.default)(), l += y * y;
                if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
                node.vx += x * quad.value * alpha / l;
                node.vy += y * quad.value * alpha / l;
            }
            return true;
        } else if (quad.length || l >= distanceMax2) return;
        // Limit forces for very close nodes; randomize direction if coincident.
        if (quad.data !== node || quad.next) {
            if (x === 0) x = (0, $atZYc.default)(), l += x * x;
            if (y === 0) y = (0, $atZYc.default)(), l += y * y;
            if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
        }
        do if (quad.data !== node) {
            w = strengths[quad.data.index] * alpha / l;
            node.vx += x * w;
            node.vy += y * w;
        }
        while (quad = quad.next);
    }
    force.initialize = function(_) {
        nodes = _;
        initialize();
    };
    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : (0, $382Ne.default)(+_), initialize(), force) : strength;
    };
    force.distanceMin = function(_) {
        return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
    };
    force.distanceMax = function(_) {
        return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
    };
    force.theta = function(_) {
        return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
    };
    return force;
}

});
parcelRegister("aaCZx", function(module, exports) {

$parcel$export(module.exports, "x", () => $7679157bac491e58$export$d141bba7fdc215a3);
$parcel$export(module.exports, "y", () => $7679157bac491e58$export$4a5767248b18ef41);
$parcel$export(module.exports, "default", () => $7679157bac491e58$export$2e2bcd8739ae039);

var $iBYE9 = parcelRequire("iBYE9");
parcelRequire("3pJtp");
var $9y7Xw = parcelRequire("9y7Xw");

var $4yOwQ = parcelRequire("4yOwQ");
function $7679157bac491e58$export$d141bba7fdc215a3(d) {
    return d.x;
}
function $7679157bac491e58$export$4a5767248b18ef41(d) {
    return d.y;
}
var $7679157bac491e58$var$initialRadius = 10, $7679157bac491e58$var$initialAngle = Math.PI * (3 - Math.sqrt(5));
function $7679157bac491e58$export$2e2bcd8739ae039(nodes) {
    var simulation, alpha = 1, alphaMin = 0.001, alphaDecay = 1 - Math.pow(alphaMin, 1 / 300), alphaTarget = 0, velocityDecay = 0.6, forces = (0, $9y7Xw.default)(), stepper = (0, $4yOwQ.timer)(step), event = (0, $iBYE9.default)("tick", "end");
    if (nodes == null) nodes = [];
    function step() {
        tick();
        event.call("tick", simulation);
        if (alpha < alphaMin) {
            stepper.stop();
            event.call("end", simulation);
        }
    }
    function tick(iterations) {
        var i, n = nodes.length, node;
        if (iterations === undefined) iterations = 1;
        for(var k = 0; k < iterations; ++k){
            alpha += (alphaTarget - alpha) * alphaDecay;
            forces.each(function(force) {
                force(alpha);
            });
            for(i = 0; i < n; ++i){
                node = nodes[i];
                if (node.fx == null) node.x += node.vx *= velocityDecay;
                else node.x = node.fx, node.vx = 0;
                if (node.fy == null) node.y += node.vy *= velocityDecay;
                else node.y = node.fy, node.vy = 0;
            }
        }
        return simulation;
    }
    function initializeNodes() {
        for(var i = 0, n = nodes.length, node; i < n; ++i){
            node = nodes[i], node.index = i;
            if (node.fx != null) node.x = node.fx;
            if (node.fy != null) node.y = node.fy;
            if (isNaN(node.x) || isNaN(node.y)) {
                var radius = $7679157bac491e58$var$initialRadius * Math.sqrt(i), angle = i * $7679157bac491e58$var$initialAngle;
                node.x = radius * Math.cos(angle);
                node.y = radius * Math.sin(angle);
            }
            if (isNaN(node.vx) || isNaN(node.vy)) node.vx = node.vy = 0;
        }
    }
    function initializeForce(force) {
        if (force.initialize) force.initialize(nodes);
        return force;
    }
    initializeNodes();
    return simulation = {
        tick: tick,
        restart: function() {
            return stepper.restart(step), simulation;
        },
        stop: function() {
            return stepper.stop(), simulation;
        },
        nodes: function(_) {
            return arguments.length ? (nodes = _, initializeNodes(), forces.each(initializeForce), simulation) : nodes;
        },
        alpha: function(_) {
            return arguments.length ? (alpha = +_, simulation) : alpha;
        },
        alphaMin: function(_) {
            return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
        },
        alphaDecay: function(_) {
            return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
        },
        alphaTarget: function(_) {
            return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
        },
        velocityDecay: function(_) {
            return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
        },
        force: function(name, _) {
            return arguments.length > 1 ? (_ == null ? forces.remove(name) : forces.set(name, initializeForce(_)), simulation) : forces.get(name);
        },
        find: function(x, y, radius) {
            var i = 0, n = nodes.length, dx, dy, d2, node, closest;
            if (radius == null) radius = Infinity;
            else radius *= radius;
            for(i = 0; i < n; ++i){
                node = nodes[i];
                dx = x - node.x;
                dy = y - node.y;
                d2 = dx * dx + dy * dy;
                if (d2 < radius) closest = node, radius = d2;
            }
            return closest;
        },
        on: function(name, _) {
            return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
        }
    };
}

});


parcelRegister("aIaqN", function(module, exports) {

$parcel$export(module.exports, "default", () => $7cc61ae22367c3e5$export$2e2bcd8739ae039);

var $382Ne = parcelRequire("382Ne");
function $7cc61ae22367c3e5$export$2e2bcd8739ae039(radius, x, y) {
    var nodes, strength = (0, $382Ne.default)(0.1), strengths, radiuses;
    if (typeof radius !== "function") radius = (0, $382Ne.default)(+radius);
    if (x == null) x = 0;
    if (y == null) y = 0;
    function force(alpha) {
        for(var i = 0, n = nodes.length; i < n; ++i){
            var node = nodes[i], dx = node.x - x || 1e-6, dy = node.y - y || 1e-6, r = Math.sqrt(dx * dx + dy * dy), k = (radiuses[i] - r) * strengths[i] * alpha / r;
            node.vx += dx * k;
            node.vy += dy * k;
        }
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length;
        strengths = new Array(n);
        radiuses = new Array(n);
        for(i = 0; i < n; ++i){
            radiuses[i] = +radius(nodes[i], i, nodes);
            strengths[i] = isNaN(radiuses[i]) ? 0 : +strength(nodes[i], i, nodes);
        }
    }
    force.initialize = function(_) {
        nodes = _, initialize();
    };
    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : (0, $382Ne.default)(+_), initialize(), force) : strength;
    };
    force.radius = function(_) {
        return arguments.length ? (radius = typeof _ === "function" ? _ : (0, $382Ne.default)(+_), initialize(), force) : radius;
    };
    force.x = function(_) {
        return arguments.length ? (x = +_, force) : x;
    };
    force.y = function(_) {
        return arguments.length ? (y = +_, force) : y;
    };
    return force;
}

});

parcelRegister("6Ms6X", function(module, exports) {

$parcel$export(module.exports, "default", () => $4efd08193aecce72$export$2e2bcd8739ae039);

var $382Ne = parcelRequire("382Ne");
function $4efd08193aecce72$export$2e2bcd8739ae039(x) {
    var strength = (0, $382Ne.default)(0.1), nodes, strengths, xz;
    if (typeof x !== "function") x = (0, $382Ne.default)(x == null ? 0 : +x);
    function force(alpha) {
        for(var i = 0, n = nodes.length, node; i < n; ++i)node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length;
        strengths = new Array(n);
        xz = new Array(n);
        for(i = 0; i < n; ++i)strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
    force.initialize = function(_) {
        nodes = _;
        initialize();
    };
    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : (0, $382Ne.default)(+_), initialize(), force) : strength;
    };
    force.x = function(_) {
        return arguments.length ? (x = typeof _ === "function" ? _ : (0, $382Ne.default)(+_), initialize(), force) : x;
    };
    return force;
}

});

parcelRegister("apcHK", function(module, exports) {

$parcel$export(module.exports, "default", () => $79361813e017cb71$export$2e2bcd8739ae039);

var $382Ne = parcelRequire("382Ne");
function $79361813e017cb71$export$2e2bcd8739ae039(y) {
    var strength = (0, $382Ne.default)(0.1), nodes, strengths, yz;
    if (typeof y !== "function") y = (0, $382Ne.default)(y == null ? 0 : +y);
    function force(alpha) {
        for(var i = 0, n = nodes.length, node; i < n; ++i)node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
    }
    function initialize() {
        if (!nodes) return;
        var i, n = nodes.length;
        strengths = new Array(n);
        yz = new Array(n);
        for(i = 0; i < n; ++i)strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
    force.initialize = function(_) {
        nodes = _;
        initialize();
    };
    force.strength = function(_) {
        return arguments.length ? (strength = typeof _ === "function" ? _ : (0, $382Ne.default)(+_), initialize(), force) : strength;
    };
    force.y = function(_) {
        return arguments.length ? (y = typeof _ === "function" ? _ : (0, $382Ne.default)(+_), initialize(), force) : y;
    };
    return force;
}

});


parcelRegister("beUta", function(module, exports) {

$parcel$export(module.exports, "formatDefaultLocale", () => (parcelRequire("lr7vc")).default);
$parcel$export(module.exports, "format", () => (parcelRequire("lr7vc")).format);
$parcel$export(module.exports, "formatPrefix", () => (parcelRequire("lr7vc")).formatPrefix);
$parcel$export(module.exports, "formatLocale", () => (parcelRequire("878mh")).default);
$parcel$export(module.exports, "formatSpecifier", () => (parcelRequire("7xAwE")).default);
$parcel$export(module.exports, "FormatSpecifier", () => (parcelRequire("7xAwE")).FormatSpecifier);
$parcel$export(module.exports, "precisionFixed", () => (parcelRequire("kHFtR")).default);
$parcel$export(module.exports, "precisionPrefix", () => (parcelRequire("fSpVr")).default);
$parcel$export(module.exports, "precisionRound", () => (parcelRequire("cmAI8")).default);

var $lr7vc = parcelRequire("lr7vc");

var $878mh = parcelRequire("878mh");

var $7xAwE = parcelRequire("7xAwE");

var $kHFtR = parcelRequire("kHFtR");

var $fSpVr = parcelRequire("fSpVr");

var $cmAI8 = parcelRequire("cmAI8");

});
parcelRegister("lr7vc", function(module, exports) {

$parcel$export(module.exports, "format", () => $f9b1f059a4e2f7cf$export$d9468344d3651243);
$parcel$export(module.exports, "formatPrefix", () => $f9b1f059a4e2f7cf$export$8d85692a469dde6f);
$parcel$export(module.exports, "default", () => $f9b1f059a4e2f7cf$export$2e2bcd8739ae039);

var $878mh = parcelRequire("878mh");
var $f9b1f059a4e2f7cf$var$locale;
var $f9b1f059a4e2f7cf$export$d9468344d3651243;
var $f9b1f059a4e2f7cf$export$8d85692a469dde6f;
$f9b1f059a4e2f7cf$export$2e2bcd8739ae039({
    decimal: ".",
    thousands: ",",
    grouping: [
        3
    ],
    currency: [
        "$",
        ""
    ],
    minus: "-"
});
function $f9b1f059a4e2f7cf$export$2e2bcd8739ae039(definition) {
    $f9b1f059a4e2f7cf$var$locale = (0, $878mh.default)(definition);
    $f9b1f059a4e2f7cf$export$d9468344d3651243 = $f9b1f059a4e2f7cf$var$locale.format;
    $f9b1f059a4e2f7cf$export$8d85692a469dde6f = $f9b1f059a4e2f7cf$var$locale.formatPrefix;
    return $f9b1f059a4e2f7cf$var$locale;
}

});
parcelRegister("878mh", function(module, exports) {

$parcel$export(module.exports, "default", () => $5e8575f2637b44f6$export$2e2bcd8739ae039);

var $kLcWg = parcelRequire("kLcWg");

var $l7hmO = parcelRequire("l7hmO");

var $8L273 = parcelRequire("8L273");

var $7xAwE = parcelRequire("7xAwE");

var $dqmjC = parcelRequire("dqmjC");

var $1K4ly = parcelRequire("1K4ly");

var $7FKYh = parcelRequire("7FKYh");

var $cye9Z = parcelRequire("cye9Z");
var $5e8575f2637b44f6$var$map = Array.prototype.map, $5e8575f2637b44f6$var$prefixes = [
    "y",
    "z",
    "a",
    "f",
    "p",
    "n",
    "\xb5",
    "m",
    "",
    "k",
    "M",
    "G",
    "T",
    "P",
    "E",
    "Z",
    "Y"
];
function $5e8575f2637b44f6$export$2e2bcd8739ae039(locale) {
    var group = locale.grouping === undefined || locale.thousands === undefined ? (0, $cye9Z.default) : (0, $l7hmO.default)($5e8575f2637b44f6$var$map.call(locale.grouping, Number), locale.thousands + ""), currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "", currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "", decimal = locale.decimal === undefined ? "." : locale.decimal + "", numerals = locale.numerals === undefined ? (0, $cye9Z.default) : (0, $8L273.default)($5e8575f2637b44f6$var$map.call(locale.numerals, String)), percent = locale.percent === undefined ? "%" : locale.percent + "", minus = locale.minus === undefined ? "-" : locale.minus + "", nan = locale.nan === undefined ? "NaN" : locale.nan + "";
    function newFormat(specifier) {
        specifier = (0, $7xAwE.default)(specifier);
        var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
        // The "n" type is an alias for ",g".
        if (type === "n") comma = true, type = "g";
        else if (!(0, $1K4ly.default)[type]) precision === undefined && (precision = 12), trim = true, type = "g";
        // If zero fill is specified, padding goes after sign and before digits.
        if (zero || fill === "0" && align === "=") zero = true, fill = "0", align = "=";
        // Compute the prefix and suffix.
        // For SI-prefix, the suffix is lazily computed.
        var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
        // What format function should we use?
        // Is this an integer type?
        // Can this type generate exponential notation?
        var formatType = (0, $1K4ly.default)[type], maybeSuffix = /[defgprs%]/.test(type);
        // Set the default precision if not specified,
        // or clamp the specified precision to the supported range.
        // For significant precision, it must be in [1, 21].
        // For fixed precision, it must be in [0, 20].
        precision = precision === undefined ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
        function format(value) {
            var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
            if (type === "c") {
                valueSuffix = formatType(value) + valueSuffix;
                value = "";
            } else {
                value = +value;
                // Determine the sign. -0 is not less than 0, but 1 / -0 is!
                var valueNegative = value < 0 || 1 / value < 0;
                // Perform the initial formatting.
                value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
                // Trim insignificant zeros.
                if (trim) value = (0, $dqmjC.default)(value);
                // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
                if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;
                // Compute the prefix and suffix.
                valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
                valueSuffix = (type === "s" ? $5e8575f2637b44f6$var$prefixes[8 + (0, $7FKYh.prefixExponent) / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
                // Break the formatted value into the integer “value” part that can be
                // grouped, and fractional or exponential “suffix” part that is not.
                if (maybeSuffix) {
                    i = -1, n = value.length;
                    while(++i < n)if (c = value.charCodeAt(i), 48 > c || c > 57) {
                        valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
                        value = value.slice(0, i);
                        break;
                    }
                }
            }
            // If the fill character is not "0", grouping is applied before padding.
            if (comma && !zero) value = group(value, Infinity);
            // Compute the padding.
            var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
            // If the fill character is "0", grouping is applied after padding.
            if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
            // Reconstruct the final output based on the desired alignment.
            switch(align){
                case "<":
                    value = valuePrefix + value + valueSuffix + padding;
                    break;
                case "=":
                    value = valuePrefix + padding + value + valueSuffix;
                    break;
                case "^":
                    value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
                    break;
                default:
                    value = padding + valuePrefix + value + valueSuffix;
                    break;
            }
            return numerals(value);
        }
        format.toString = function() {
            return specifier + "";
        };
        return format;
    }
    function formatPrefix(specifier, value) {
        var f = newFormat((specifier = (0, $7xAwE.default)(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor((0, $kLcWg.default)(value) / 3))) * 3, k = Math.pow(10, -e), prefix = $5e8575f2637b44f6$var$prefixes[8 + e / 3];
        return function(value) {
            return f(k * value) + prefix;
        };
    }
    return {
        format: newFormat,
        formatPrefix: formatPrefix
    };
}

});
parcelRegister("kLcWg", function(module, exports) {

$parcel$export(module.exports, "default", () => $f1d23bcdb96ddf28$export$2e2bcd8739ae039);

var $imoLh = parcelRequire("imoLh");
function $f1d23bcdb96ddf28$export$2e2bcd8739ae039(x) {
    return x = (0, $imoLh.formatDecimalParts)(Math.abs(x)), x ? x[1] : NaN;
}

});
parcelRegister("imoLh", function(module, exports) {

$parcel$export(module.exports, "default", () => $d5dd7d397189649d$export$2e2bcd8739ae039);
$parcel$export(module.exports, "formatDecimalParts", () => $d5dd7d397189649d$export$8f8e23dd27dc19f5);
function $d5dd7d397189649d$export$2e2bcd8739ae039(x) {
    return Math.abs(x = Math.round(x)) >= 1e21 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
}
function $d5dd7d397189649d$export$8f8e23dd27dc19f5(x, p) {
    if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
    var i, coefficient = x.slice(0, i);
    // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
    // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
    return [
        coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
        +x.slice(i + 1)
    ];
}

});


parcelRegister("l7hmO", function(module, exports) {

$parcel$export(module.exports, "default", () => $f5f7b9278e49c1e0$export$2e2bcd8739ae039);
function $f5f7b9278e49c1e0$export$2e2bcd8739ae039(grouping, thousands) {
    return function(value, width) {
        var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
        while(i > 0 && g > 0){
            if (length + g + 1 > width) g = Math.max(1, width - length);
            t.push(value.substring(i -= g, i + g));
            if ((length += g + 1) > width) break;
            g = grouping[j = (j + 1) % grouping.length];
        }
        return t.reverse().join(thousands);
    };
}

});

parcelRegister("8L273", function(module, exports) {

$parcel$export(module.exports, "default", () => $66045a10c138acef$export$2e2bcd8739ae039);
function $66045a10c138acef$export$2e2bcd8739ae039(numerals) {
    return function(value) {
        return value.replace(/[0-9]/g, function(i) {
            return numerals[+i];
        });
    };
}

});

parcelRegister("7xAwE", function(module, exports) {

$parcel$export(module.exports, "default", () => $57d7f2b73813b7a2$export$2e2bcd8739ae039);
$parcel$export(module.exports, "FormatSpecifier", () => $57d7f2b73813b7a2$export$963aac351db36ed4);
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var $57d7f2b73813b7a2$var$re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function $57d7f2b73813b7a2$export$2e2bcd8739ae039(specifier) {
    if (!(match = $57d7f2b73813b7a2$var$re.exec(specifier))) throw new Error("invalid format: " + specifier);
    var match;
    return new $57d7f2b73813b7a2$export$963aac351db36ed4({
        fill: match[1],
        align: match[2],
        sign: match[3],
        symbol: match[4],
        zero: match[5],
        width: match[6],
        comma: match[7],
        precision: match[8] && match[8].slice(1),
        trim: match[9],
        type: match[10]
    });
}
$57d7f2b73813b7a2$export$2e2bcd8739ae039.prototype = $57d7f2b73813b7a2$export$963aac351db36ed4.prototype; // instanceof
function $57d7f2b73813b7a2$export$963aac351db36ed4(specifier) {
    this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
    this.align = specifier.align === undefined ? ">" : specifier.align + "";
    this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
    this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
    this.zero = !!specifier.zero;
    this.width = specifier.width === undefined ? undefined : +specifier.width;
    this.comma = !!specifier.comma;
    this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
    this.trim = !!specifier.trim;
    this.type = specifier.type === undefined ? "" : specifier.type + "";
}
$57d7f2b73813b7a2$export$963aac351db36ed4.prototype.toString = function() {
    return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === undefined ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

});

parcelRegister("dqmjC", function(module, exports) {

$parcel$export(module.exports, "default", () => $9c5f03724d84d89b$export$2e2bcd8739ae039);
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
function $9c5f03724d84d89b$export$2e2bcd8739ae039(s) {
    out: for(var n = s.length, i = 1, i0 = -1, i1; i < n; ++i)switch(s[i]){
        case ".":
            i0 = i1 = i;
            break;
        case "0":
            if (i0 === 0) i0 = i;
            i1 = i;
            break;
        default:
            if (!+s[i]) break out;
            if (i0 > 0) i0 = 0;
            break;
    }
    return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}

});

parcelRegister("1K4ly", function(module, exports) {

$parcel$export(module.exports, "default", () => $144d7576b33fc087$export$2e2bcd8739ae039);

var $imoLh = parcelRequire("imoLh");

var $7FKYh = parcelRequire("7FKYh");

var $aMj4z = parcelRequire("aMj4z");
var $144d7576b33fc087$export$2e2bcd8739ae039 = {
    "%": function(x, p) {
        return (x * 100).toFixed(p);
    },
    "b": function(x) {
        return Math.round(x).toString(2);
    },
    "c": function(x) {
        return x + "";
    },
    "d": (0, $imoLh.default),
    "e": function(x, p) {
        return x.toExponential(p);
    },
    "f": function(x, p) {
        return x.toFixed(p);
    },
    "g": function(x, p) {
        return x.toPrecision(p);
    },
    "o": function(x) {
        return Math.round(x).toString(8);
    },
    "p": function(x, p) {
        return (0, $aMj4z.default)(x * 100, p);
    },
    "r": (0, $aMj4z.default),
    "s": (0, $7FKYh.default),
    "X": function(x) {
        return Math.round(x).toString(16).toUpperCase();
    },
    "x": function(x) {
        return Math.round(x).toString(16);
    }
};

});
parcelRegister("7FKYh", function(module, exports) {

$parcel$export(module.exports, "prefixExponent", () => $5960cc3eddb36a11$export$6863724d9a42263);
$parcel$export(module.exports, "default", () => $5960cc3eddb36a11$export$2e2bcd8739ae039);

var $imoLh = parcelRequire("imoLh");
var $5960cc3eddb36a11$export$6863724d9a42263;
function $5960cc3eddb36a11$export$2e2bcd8739ae039(x, p) {
    var d = (0, $imoLh.formatDecimalParts)(x, p);
    if (!d) return x + "";
    var coefficient = d[0], exponent = d[1], i = exponent - ($5960cc3eddb36a11$export$6863724d9a42263 = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
    return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + (0, $imoLh.formatDecimalParts)(x, Math.max(0, p + i - 1))[0]; // less than 1y!
}

});

parcelRegister("aMj4z", function(module, exports) {

$parcel$export(module.exports, "default", () => $7d8d2e83be6a6252$export$2e2bcd8739ae039);

var $imoLh = parcelRequire("imoLh");
function $7d8d2e83be6a6252$export$2e2bcd8739ae039(x, p) {
    var d = (0, $imoLh.formatDecimalParts)(x, p);
    if (!d) return x + "";
    var coefficient = d[0], exponent = d[1];
    return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

});


parcelRegister("cye9Z", function(module, exports) {

$parcel$export(module.exports, "default", () => $9233a4e74799a3f7$export$2e2bcd8739ae039);
function $9233a4e74799a3f7$export$2e2bcd8739ae039(x) {
    return x;
}

});



parcelRegister("kHFtR", function(module, exports) {

$parcel$export(module.exports, "default", () => $f12800031b4d981e$export$2e2bcd8739ae039);

var $kLcWg = parcelRequire("kLcWg");
function $f12800031b4d981e$export$2e2bcd8739ae039(step) {
    return Math.max(0, -(0, $kLcWg.default)(Math.abs(step)));
}

});

parcelRegister("fSpVr", function(module, exports) {

$parcel$export(module.exports, "default", () => $b8f0026f8433a16d$export$2e2bcd8739ae039);

var $kLcWg = parcelRequire("kLcWg");
function $b8f0026f8433a16d$export$2e2bcd8739ae039(step, value) {
    return Math.max(0, Math.max(-8, Math.min(8, Math.floor((0, $kLcWg.default)(value) / 3))) * 3 - (0, $kLcWg.default)(Math.abs(step)));
}

});

parcelRegister("cmAI8", function(module, exports) {

$parcel$export(module.exports, "default", () => $90040419984e3164$export$2e2bcd8739ae039);

var $kLcWg = parcelRequire("kLcWg");
function $90040419984e3164$export$2e2bcd8739ae039(step, max) {
    step = Math.abs(step), max = Math.abs(max) - step;
    return Math.max(0, (0, $kLcWg.default)(max) - (0, $kLcWg.default)(step)) + 1;
}

});


parcelRegister("kPADG", function(module, exports) {

$parcel$export(module.exports, "geoArea", () => (parcelRequire("aEvvN")).default);
$parcel$export(module.exports, "geoBounds", () => (parcelRequire("j9fAp")).default);
$parcel$export(module.exports, "geoCentroid", () => (parcelRequire("2KpUr")).default);
$parcel$export(module.exports, "geoCircle", () => (parcelRequire("6pOnP")).default);
$parcel$export(module.exports, "geoClipAntimeridian", () => (parcelRequire("aAkke")).default);
$parcel$export(module.exports, "geoClipCircle", () => (parcelRequire("3Au9P")).default);
$parcel$export(module.exports, "geoClipExtent", () => (parcelRequire("8Ra9R")).default);
$parcel$export(module.exports, "geoClipRectangle", () => (parcelRequire("9akEc")).default);
$parcel$export(module.exports, "geoContains", () => (parcelRequire("a9KKM")).default);
$parcel$export(module.exports, "geoDistance", () => (parcelRequire("535OD")).default);
$parcel$export(module.exports, "geoGraticule", () => (parcelRequire("knUx1")).default);
$parcel$export(module.exports, "geoGraticule10", () => (parcelRequire("knUx1")).graticule10);
$parcel$export(module.exports, "geoInterpolate", () => (parcelRequire("1dxap")).default);
$parcel$export(module.exports, "geoLength", () => (parcelRequire("lKSZ1")).default);
$parcel$export(module.exports, "geoPath", () => (parcelRequire("5hj15")).default);
$parcel$export(module.exports, "geoAlbers", () => (parcelRequire("6mXW6")).default);
$parcel$export(module.exports, "geoAlbersUsa", () => (parcelRequire("5I4Rm")).default);
$parcel$export(module.exports, "geoAzimuthalEqualArea", () => (parcelRequire("c7gnl")).default);
$parcel$export(module.exports, "geoAzimuthalEqualAreaRaw", () => (parcelRequire("c7gnl")).azimuthalEqualAreaRaw);
$parcel$export(module.exports, "geoAzimuthalEquidistant", () => (parcelRequire("4NnNA")).default);
$parcel$export(module.exports, "geoAzimuthalEquidistantRaw", () => (parcelRequire("4NnNA")).azimuthalEquidistantRaw);
$parcel$export(module.exports, "geoConicConformal", () => (parcelRequire("aQe54")).default);
$parcel$export(module.exports, "geoConicConformalRaw", () => (parcelRequire("aQe54")).conicConformalRaw);
$parcel$export(module.exports, "geoConicEqualArea", () => (parcelRequire("lmVAz")).default);
$parcel$export(module.exports, "geoConicEqualAreaRaw", () => (parcelRequire("lmVAz")).conicEqualAreaRaw);
$parcel$export(module.exports, "geoConicEquidistant", () => (parcelRequire("atQaE")).default);
$parcel$export(module.exports, "geoConicEquidistantRaw", () => (parcelRequire("atQaE")).conicEquidistantRaw);
$parcel$export(module.exports, "geoEqualEarth", () => (parcelRequire("aTQCG")).default);
$parcel$export(module.exports, "geoEqualEarthRaw", () => (parcelRequire("aTQCG")).equalEarthRaw);
$parcel$export(module.exports, "geoEquirectangular", () => (parcelRequire("kOX0V")).default);
$parcel$export(module.exports, "geoEquirectangularRaw", () => (parcelRequire("kOX0V")).equirectangularRaw);
$parcel$export(module.exports, "geoGnomonic", () => (parcelRequire("7KgSx")).default);
$parcel$export(module.exports, "geoGnomonicRaw", () => (parcelRequire("7KgSx")).gnomonicRaw);
$parcel$export(module.exports, "geoIdentity", () => (parcelRequire("kOk9r")).default);
$parcel$export(module.exports, "geoProjection", () => (parcelRequire("g0Z1C")).default);
$parcel$export(module.exports, "geoProjectionMutator", () => (parcelRequire("g0Z1C")).projectionMutator);
$parcel$export(module.exports, "geoMercator", () => (parcelRequire("aNmln")).default);
$parcel$export(module.exports, "geoMercatorRaw", () => (parcelRequire("aNmln")).mercatorRaw);
$parcel$export(module.exports, "geoNaturalEarth1", () => (parcelRequire("01OJY")).default);
$parcel$export(module.exports, "geoNaturalEarth1Raw", () => (parcelRequire("01OJY")).naturalEarth1Raw);
$parcel$export(module.exports, "geoOrthographic", () => (parcelRequire("fwyTB")).default);
$parcel$export(module.exports, "geoOrthographicRaw", () => (parcelRequire("fwyTB")).orthographicRaw);
$parcel$export(module.exports, "geoStereographic", () => (parcelRequire("bF8AX")).default);
$parcel$export(module.exports, "geoStereographicRaw", () => (parcelRequire("bF8AX")).stereographicRaw);
$parcel$export(module.exports, "geoTransverseMercator", () => (parcelRequire("6IHcd")).default);
$parcel$export(module.exports, "geoTransverseMercatorRaw", () => (parcelRequire("6IHcd")).transverseMercatorRaw);
$parcel$export(module.exports, "geoRotation", () => (parcelRequire("jRH68")).default);
$parcel$export(module.exports, "geoStream", () => (parcelRequire("e0paR")).default);
$parcel$export(module.exports, "geoTransform", () => (parcelRequire("9DYcM")).default);

var $aEvvN = parcelRequire("aEvvN");

var $j9fAp = parcelRequire("j9fAp");

var $2KpUr = parcelRequire("2KpUr");

var $6pOnP = parcelRequire("6pOnP");

var $aAkke = parcelRequire("aAkke");

var $3Au9P = parcelRequire("3Au9P");

var $8Ra9R = parcelRequire("8Ra9R");

var $9akEc = parcelRequire("9akEc");

var $a9KKM = parcelRequire("a9KKM");

var $535OD = parcelRequire("535OD");

var $knUx1 = parcelRequire("knUx1");

var $1dxap = parcelRequire("1dxap");

var $lKSZ1 = parcelRequire("lKSZ1");

var $5hj15 = parcelRequire("5hj15");

var $6mXW6 = parcelRequire("6mXW6");

var $5I4Rm = parcelRequire("5I4Rm");

var $c7gnl = parcelRequire("c7gnl");

var $4NnNA = parcelRequire("4NnNA");

var $aQe54 = parcelRequire("aQe54");

var $lmVAz = parcelRequire("lmVAz");

var $atQaE = parcelRequire("atQaE");

var $aTQCG = parcelRequire("aTQCG");

var $kOX0V = parcelRequire("kOX0V");

var $7KgSx = parcelRequire("7KgSx");

var $kOk9r = parcelRequire("kOk9r");

var $g0Z1C = parcelRequire("g0Z1C");

var $aNmln = parcelRequire("aNmln");

var $01OJY = parcelRequire("01OJY");

var $fwyTB = parcelRequire("fwyTB");

var $bF8AX = parcelRequire("bF8AX");

var $6IHcd = parcelRequire("6IHcd");

var $jRH68 = parcelRequire("jRH68");

var $e0paR = parcelRequire("e0paR");

var $9DYcM = parcelRequire("9DYcM");

});
parcelRegister("aEvvN", function(module, exports) {

$parcel$export(module.exports, "areaRingSum", () => $7c1615674e080e95$export$bf8f994332070c7f);
$parcel$export(module.exports, "areaStream", () => $7c1615674e080e95$export$cb67cfa750ae69dc);
$parcel$export(module.exports, "default", () => $7c1615674e080e95$export$2e2bcd8739ae039);

var $8UK3C = parcelRequire("8UK3C");

var $5jMPm = parcelRequire("5jMPm");

var $jJAH0 = parcelRequire("jJAH0");

var $e0paR = parcelRequire("e0paR");
var $7c1615674e080e95$export$bf8f994332070c7f = (0, $8UK3C.default)();
var $7c1615674e080e95$var$areaSum = (0, $8UK3C.default)(), $7c1615674e080e95$var$lambda00, $7c1615674e080e95$var$phi00, $7c1615674e080e95$var$lambda0, $7c1615674e080e95$var$cosPhi0, $7c1615674e080e95$var$sinPhi0;
var $7c1615674e080e95$export$cb67cfa750ae69dc = {
    point: (0, $jJAH0.default),
    lineStart: (0, $jJAH0.default),
    lineEnd: (0, $jJAH0.default),
    polygonStart: function() {
        $7c1615674e080e95$export$bf8f994332070c7f.reset();
        $7c1615674e080e95$export$cb67cfa750ae69dc.lineStart = $7c1615674e080e95$var$areaRingStart;
        $7c1615674e080e95$export$cb67cfa750ae69dc.lineEnd = $7c1615674e080e95$var$areaRingEnd;
    },
    polygonEnd: function() {
        var areaRing = +$7c1615674e080e95$export$bf8f994332070c7f;
        $7c1615674e080e95$var$areaSum.add(areaRing < 0 ? (0, $5jMPm.tau) + areaRing : areaRing);
        this.lineStart = this.lineEnd = this.point = (0, $jJAH0.default);
    },
    sphere: function() {
        $7c1615674e080e95$var$areaSum.add((0, $5jMPm.tau));
    }
};
function $7c1615674e080e95$var$areaRingStart() {
    $7c1615674e080e95$export$cb67cfa750ae69dc.point = $7c1615674e080e95$var$areaPointFirst;
}
function $7c1615674e080e95$var$areaRingEnd() {
    $7c1615674e080e95$var$areaPoint($7c1615674e080e95$var$lambda00, $7c1615674e080e95$var$phi00);
}
function $7c1615674e080e95$var$areaPointFirst(lambda, phi) {
    $7c1615674e080e95$export$cb67cfa750ae69dc.point = $7c1615674e080e95$var$areaPoint;
    $7c1615674e080e95$var$lambda00 = lambda, $7c1615674e080e95$var$phi00 = phi;
    lambda *= (0, $5jMPm.radians), phi *= (0, $5jMPm.radians);
    $7c1615674e080e95$var$lambda0 = lambda, $7c1615674e080e95$var$cosPhi0 = (0, $5jMPm.cos)(phi = phi / 2 + (0, $5jMPm.quarterPi)), $7c1615674e080e95$var$sinPhi0 = (0, $5jMPm.sin)(phi);
}
function $7c1615674e080e95$var$areaPoint(lambda, phi) {
    lambda *= (0, $5jMPm.radians), phi *= (0, $5jMPm.radians);
    phi = phi / 2 + (0, $5jMPm.quarterPi); // half the angular distance from south pole
    // Spherical excess E for a spherical triangle with vertices: south pole,
    // previous point, current point.  Uses a formula derived from Cagnoli’s
    // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
    var dLambda = lambda - $7c1615674e080e95$var$lambda0, sdLambda = dLambda >= 0 ? 1 : -1, adLambda = sdLambda * dLambda, cosPhi = (0, $5jMPm.cos)(phi), sinPhi = (0, $5jMPm.sin)(phi), k = $7c1615674e080e95$var$sinPhi0 * sinPhi, u = $7c1615674e080e95$var$cosPhi0 * cosPhi + k * (0, $5jMPm.cos)(adLambda), v = k * sdLambda * (0, $5jMPm.sin)(adLambda);
    $7c1615674e080e95$export$bf8f994332070c7f.add((0, $5jMPm.atan2)(v, u));
    // Advance the previous points.
    $7c1615674e080e95$var$lambda0 = lambda, $7c1615674e080e95$var$cosPhi0 = cosPhi, $7c1615674e080e95$var$sinPhi0 = sinPhi;
}
function $7c1615674e080e95$export$2e2bcd8739ae039(object) {
    $7c1615674e080e95$var$areaSum.reset();
    (0, $e0paR.default)(object, $7c1615674e080e95$export$cb67cfa750ae69dc);
    return $7c1615674e080e95$var$areaSum * 2;
}

});
parcelRegister("8UK3C", function(module, exports) {

$parcel$export(module.exports, "default", () => $67d747bed74d9c81$export$2e2bcd8739ae039);
// Adds floating point numbers with twice the normal precision.
// Reference: J. R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and
// Fast Robust Geometric Predicates, Discrete & Computational Geometry 18(3)
// 305–363 (1997).
// Code adapted from GeographicLib by Charles F. F. Karney,
// http://geographiclib.sourceforge.net/
function $67d747bed74d9c81$export$2e2bcd8739ae039() {
    return new $67d747bed74d9c81$var$Adder;
}
function $67d747bed74d9c81$var$Adder() {
    this.reset();
}
$67d747bed74d9c81$var$Adder.prototype = {
    constructor: $67d747bed74d9c81$var$Adder,
    reset: function() {
        this.s = this.t = 0; // exact error
    },
    add: function(y) {
        $67d747bed74d9c81$var$add($67d747bed74d9c81$var$temp, y, this.t);
        $67d747bed74d9c81$var$add(this, $67d747bed74d9c81$var$temp.s, this.s);
        if (this.s) this.t += $67d747bed74d9c81$var$temp.t;
        else this.s = $67d747bed74d9c81$var$temp.t;
    },
    valueOf: function() {
        return this.s;
    }
};
var $67d747bed74d9c81$var$temp = new $67d747bed74d9c81$var$Adder;
function $67d747bed74d9c81$var$add(adder, a, b) {
    var x = adder.s = a + b, bv = x - a, av = x - bv;
    adder.t = a - av + (b - bv);
}

});

parcelRegister("5jMPm", function(module, exports) {

$parcel$export(module.exports, "epsilon", () => $3df49a379b6dad4d$export$6c421550c66a327d);
$parcel$export(module.exports, "epsilon2", () => $3df49a379b6dad4d$export$92c06fba281fe81b);
$parcel$export(module.exports, "pi", () => $3df49a379b6dad4d$export$18c7bea995a110f);
$parcel$export(module.exports, "halfPi", () => $3df49a379b6dad4d$export$e51408a300e8929a);
$parcel$export(module.exports, "quarterPi", () => $3df49a379b6dad4d$export$c39a5cba78ea0fc2);
$parcel$export(module.exports, "tau", () => $3df49a379b6dad4d$export$a4b4b4d4d776fe92);
$parcel$export(module.exports, "degrees", () => $3df49a379b6dad4d$export$41fc368e1a942b97);
$parcel$export(module.exports, "radians", () => $3df49a379b6dad4d$export$8449e153fbd325fc);
$parcel$export(module.exports, "abs", () => $3df49a379b6dad4d$export$2335f513bbd82c6d);
$parcel$export(module.exports, "atan", () => $3df49a379b6dad4d$export$628dc4eed22b0fbd);
$parcel$export(module.exports, "atan2", () => $3df49a379b6dad4d$export$b8b770ee6a0d9760);
$parcel$export(module.exports, "cos", () => $3df49a379b6dad4d$export$50d414a77b60d802);
$parcel$export(module.exports, "ceil", () => $3df49a379b6dad4d$export$803ce6b71a0a94b2);
$parcel$export(module.exports, "exp", () => $3df49a379b6dad4d$export$b310ec824aaee37f);
$parcel$export(module.exports, "log", () => $3df49a379b6dad4d$export$bef1f36f5486a6a3);
$parcel$export(module.exports, "pow", () => $3df49a379b6dad4d$export$9c297f60e22e3389);
$parcel$export(module.exports, "sin", () => $3df49a379b6dad4d$export$5de3937cb4b592ed);
$parcel$export(module.exports, "sign", () => $3df49a379b6dad4d$export$c5552dfdbc7cec71);
$parcel$export(module.exports, "sqrt", () => $3df49a379b6dad4d$export$eba8049fb5020b81);
$parcel$export(module.exports, "tan", () => $3df49a379b6dad4d$export$fcdd3b0b3246a325);
$parcel$export(module.exports, "acos", () => $3df49a379b6dad4d$export$fd6306be3fde5b04);
$parcel$export(module.exports, "asin", () => $3df49a379b6dad4d$export$41726bdb1fc63f);
$parcel$export(module.exports, "haversin", () => $3df49a379b6dad4d$export$e808712c2966e662);
var $3df49a379b6dad4d$export$6c421550c66a327d = 1e-6;
var $3df49a379b6dad4d$export$92c06fba281fe81b = 1e-12;
var $3df49a379b6dad4d$export$18c7bea995a110f = Math.PI;
var $3df49a379b6dad4d$export$e51408a300e8929a = $3df49a379b6dad4d$export$18c7bea995a110f / 2;
var $3df49a379b6dad4d$export$c39a5cba78ea0fc2 = $3df49a379b6dad4d$export$18c7bea995a110f / 4;
var $3df49a379b6dad4d$export$a4b4b4d4d776fe92 = $3df49a379b6dad4d$export$18c7bea995a110f * 2;
var $3df49a379b6dad4d$export$41fc368e1a942b97 = 180 / $3df49a379b6dad4d$export$18c7bea995a110f;
var $3df49a379b6dad4d$export$8449e153fbd325fc = $3df49a379b6dad4d$export$18c7bea995a110f / 180;
var $3df49a379b6dad4d$export$2335f513bbd82c6d = Math.abs;
var $3df49a379b6dad4d$export$628dc4eed22b0fbd = Math.atan;
var $3df49a379b6dad4d$export$b8b770ee6a0d9760 = Math.atan2;
var $3df49a379b6dad4d$export$50d414a77b60d802 = Math.cos;
var $3df49a379b6dad4d$export$803ce6b71a0a94b2 = Math.ceil;
var $3df49a379b6dad4d$export$b310ec824aaee37f = Math.exp;
var $3df49a379b6dad4d$export$a3fe094919f356fd = Math.floor;
var $3df49a379b6dad4d$export$bef1f36f5486a6a3 = Math.log;
var $3df49a379b6dad4d$export$9c297f60e22e3389 = Math.pow;
var $3df49a379b6dad4d$export$5de3937cb4b592ed = Math.sin;
var $3df49a379b6dad4d$export$c5552dfdbc7cec71 = Math.sign || function(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
};
var $3df49a379b6dad4d$export$eba8049fb5020b81 = Math.sqrt;
var $3df49a379b6dad4d$export$fcdd3b0b3246a325 = Math.tan;
function $3df49a379b6dad4d$export$fd6306be3fde5b04(x) {
    return x > 1 ? 0 : x < -1 ? $3df49a379b6dad4d$export$18c7bea995a110f : Math.acos(x);
}
function $3df49a379b6dad4d$export$41726bdb1fc63f(x) {
    return x > 1 ? $3df49a379b6dad4d$export$e51408a300e8929a : x < -1 ? -$3df49a379b6dad4d$export$e51408a300e8929a : Math.asin(x);
}
function $3df49a379b6dad4d$export$e808712c2966e662(x) {
    return (x = $3df49a379b6dad4d$export$5de3937cb4b592ed(x / 2)) * x;
}

});

parcelRegister("jJAH0", function(module, exports) {

$parcel$export(module.exports, "default", () => $e5deaeb39e08e921$export$2e2bcd8739ae039);
function $e5deaeb39e08e921$export$2e2bcd8739ae039() {}

});

parcelRegister("e0paR", function(module, exports) {

$parcel$export(module.exports, "default", () => $02a19f5a18ae59d2$export$2e2bcd8739ae039);
function $02a19f5a18ae59d2$var$streamGeometry(geometry, stream) {
    if (geometry && $02a19f5a18ae59d2$var$streamGeometryType.hasOwnProperty(geometry.type)) $02a19f5a18ae59d2$var$streamGeometryType[geometry.type](geometry, stream);
}
var $02a19f5a18ae59d2$var$streamObjectType = {
    Feature: function(object, stream) {
        $02a19f5a18ae59d2$var$streamGeometry(object.geometry, stream);
    },
    FeatureCollection: function(object, stream) {
        var features = object.features, i = -1, n = features.length;
        while(++i < n)$02a19f5a18ae59d2$var$streamGeometry(features[i].geometry, stream);
    }
};
var $02a19f5a18ae59d2$var$streamGeometryType = {
    Sphere: function(object, stream) {
        stream.sphere();
    },
    Point: function(object, stream) {
        object = object.coordinates;
        stream.point(object[0], object[1], object[2]);
    },
    MultiPoint: function(object, stream) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)object = coordinates[i], stream.point(object[0], object[1], object[2]);
    },
    LineString: function(object, stream) {
        $02a19f5a18ae59d2$var$streamLine(object.coordinates, stream, 0);
    },
    MultiLineString: function(object, stream) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)$02a19f5a18ae59d2$var$streamLine(coordinates[i], stream, 0);
    },
    Polygon: function(object, stream) {
        $02a19f5a18ae59d2$var$streamPolygon(object.coordinates, stream);
    },
    MultiPolygon: function(object, stream) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)$02a19f5a18ae59d2$var$streamPolygon(coordinates[i], stream);
    },
    GeometryCollection: function(object, stream) {
        var geometries = object.geometries, i = -1, n = geometries.length;
        while(++i < n)$02a19f5a18ae59d2$var$streamGeometry(geometries[i], stream);
    }
};
function $02a19f5a18ae59d2$var$streamLine(coordinates, stream, closed) {
    var i = -1, n = coordinates.length - closed, coordinate;
    stream.lineStart();
    while(++i < n)coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
    stream.lineEnd();
}
function $02a19f5a18ae59d2$var$streamPolygon(coordinates, stream) {
    var i = -1, n = coordinates.length;
    stream.polygonStart();
    while(++i < n)$02a19f5a18ae59d2$var$streamLine(coordinates[i], stream, 1);
    stream.polygonEnd();
}
function $02a19f5a18ae59d2$export$2e2bcd8739ae039(object, stream) {
    if (object && $02a19f5a18ae59d2$var$streamObjectType.hasOwnProperty(object.type)) $02a19f5a18ae59d2$var$streamObjectType[object.type](object, stream);
    else $02a19f5a18ae59d2$var$streamGeometry(object, stream);
}

});


parcelRegister("j9fAp", function(module, exports) {

$parcel$export(module.exports, "default", () => $df0af2ac7601abf1$export$2e2bcd8739ae039);

var $8UK3C = parcelRequire("8UK3C");

var $aEvvN = parcelRequire("aEvvN");

var $jaKPv = parcelRequire("jaKPv");

var $5jMPm = parcelRequire("5jMPm");

var $e0paR = parcelRequire("e0paR");
var $df0af2ac7601abf1$var$lambda0, $df0af2ac7601abf1$var$phi0, $df0af2ac7601abf1$var$lambda1, $df0af2ac7601abf1$var$phi1, $df0af2ac7601abf1$var$lambda2, $df0af2ac7601abf1$var$lambda00, $df0af2ac7601abf1$var$phi00, $df0af2ac7601abf1$var$p0, $df0af2ac7601abf1$var$deltaSum = (0, $8UK3C.default)(), $df0af2ac7601abf1$var$ranges, $df0af2ac7601abf1$var$range;
var $df0af2ac7601abf1$var$boundsStream = {
    point: $df0af2ac7601abf1$var$boundsPoint,
    lineStart: $df0af2ac7601abf1$var$boundsLineStart,
    lineEnd: $df0af2ac7601abf1$var$boundsLineEnd,
    polygonStart: function() {
        $df0af2ac7601abf1$var$boundsStream.point = $df0af2ac7601abf1$var$boundsRingPoint;
        $df0af2ac7601abf1$var$boundsStream.lineStart = $df0af2ac7601abf1$var$boundsRingStart;
        $df0af2ac7601abf1$var$boundsStream.lineEnd = $df0af2ac7601abf1$var$boundsRingEnd;
        $df0af2ac7601abf1$var$deltaSum.reset();
        (0, $aEvvN.areaStream).polygonStart();
    },
    polygonEnd: function() {
        (0, $aEvvN.areaStream).polygonEnd();
        $df0af2ac7601abf1$var$boundsStream.point = $df0af2ac7601abf1$var$boundsPoint;
        $df0af2ac7601abf1$var$boundsStream.lineStart = $df0af2ac7601abf1$var$boundsLineStart;
        $df0af2ac7601abf1$var$boundsStream.lineEnd = $df0af2ac7601abf1$var$boundsLineEnd;
        if ((0, $aEvvN.areaRingSum) < 0) $df0af2ac7601abf1$var$lambda0 = -($df0af2ac7601abf1$var$lambda1 = 180), $df0af2ac7601abf1$var$phi0 = -($df0af2ac7601abf1$var$phi1 = 90);
        else if ($df0af2ac7601abf1$var$deltaSum > (0, $5jMPm.epsilon)) $df0af2ac7601abf1$var$phi1 = 90;
        else if ($df0af2ac7601abf1$var$deltaSum < -(0, $5jMPm.epsilon)) $df0af2ac7601abf1$var$phi0 = -90;
        $df0af2ac7601abf1$var$range[0] = $df0af2ac7601abf1$var$lambda0, $df0af2ac7601abf1$var$range[1] = $df0af2ac7601abf1$var$lambda1;
    },
    sphere: function() {
        $df0af2ac7601abf1$var$lambda0 = -($df0af2ac7601abf1$var$lambda1 = 180), $df0af2ac7601abf1$var$phi0 = -($df0af2ac7601abf1$var$phi1 = 90);
    }
};
function $df0af2ac7601abf1$var$boundsPoint(lambda, phi) {
    $df0af2ac7601abf1$var$ranges.push($df0af2ac7601abf1$var$range = [
        $df0af2ac7601abf1$var$lambda0 = lambda,
        $df0af2ac7601abf1$var$lambda1 = lambda
    ]);
    if (phi < $df0af2ac7601abf1$var$phi0) $df0af2ac7601abf1$var$phi0 = phi;
    if (phi > $df0af2ac7601abf1$var$phi1) $df0af2ac7601abf1$var$phi1 = phi;
}
function $df0af2ac7601abf1$var$linePoint(lambda, phi) {
    var p = (0, $jaKPv.cartesian)([
        lambda * (0, $5jMPm.radians),
        phi * (0, $5jMPm.radians)
    ]);
    if ($df0af2ac7601abf1$var$p0) {
        var normal = (0, $jaKPv.cartesianCross)($df0af2ac7601abf1$var$p0, p), equatorial = [
            normal[1],
            -normal[0],
            0
        ], inflection = (0, $jaKPv.cartesianCross)(equatorial, normal);
        (0, $jaKPv.cartesianNormalizeInPlace)(inflection);
        inflection = (0, $jaKPv.spherical)(inflection);
        var delta = lambda - $df0af2ac7601abf1$var$lambda2, sign = delta > 0 ? 1 : -1, lambdai = inflection[0] * (0, $5jMPm.degrees) * sign, phii, antimeridian = (0, $5jMPm.abs)(delta) > 180;
        if (antimeridian ^ (sign * $df0af2ac7601abf1$var$lambda2 < lambdai && lambdai < sign * lambda)) {
            phii = inflection[1] * (0, $5jMPm.degrees);
            if (phii > $df0af2ac7601abf1$var$phi1) $df0af2ac7601abf1$var$phi1 = phii;
        } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign * $df0af2ac7601abf1$var$lambda2 < lambdai && lambdai < sign * lambda)) {
            phii = -inflection[1] * (0, $5jMPm.degrees);
            if (phii < $df0af2ac7601abf1$var$phi0) $df0af2ac7601abf1$var$phi0 = phii;
        } else {
            if (phi < $df0af2ac7601abf1$var$phi0) $df0af2ac7601abf1$var$phi0 = phi;
            if (phi > $df0af2ac7601abf1$var$phi1) $df0af2ac7601abf1$var$phi1 = phi;
        }
        if (antimeridian) {
            if (lambda < $df0af2ac7601abf1$var$lambda2) {
                if ($df0af2ac7601abf1$var$angle($df0af2ac7601abf1$var$lambda0, lambda) > $df0af2ac7601abf1$var$angle($df0af2ac7601abf1$var$lambda0, $df0af2ac7601abf1$var$lambda1)) $df0af2ac7601abf1$var$lambda1 = lambda;
            } else if ($df0af2ac7601abf1$var$angle(lambda, $df0af2ac7601abf1$var$lambda1) > $df0af2ac7601abf1$var$angle($df0af2ac7601abf1$var$lambda0, $df0af2ac7601abf1$var$lambda1)) $df0af2ac7601abf1$var$lambda0 = lambda;
        } else if ($df0af2ac7601abf1$var$lambda1 >= $df0af2ac7601abf1$var$lambda0) {
            if (lambda < $df0af2ac7601abf1$var$lambda0) $df0af2ac7601abf1$var$lambda0 = lambda;
            if (lambda > $df0af2ac7601abf1$var$lambda1) $df0af2ac7601abf1$var$lambda1 = lambda;
        } else {
            if (lambda > $df0af2ac7601abf1$var$lambda2) {
                if ($df0af2ac7601abf1$var$angle($df0af2ac7601abf1$var$lambda0, lambda) > $df0af2ac7601abf1$var$angle($df0af2ac7601abf1$var$lambda0, $df0af2ac7601abf1$var$lambda1)) $df0af2ac7601abf1$var$lambda1 = lambda;
            } else if ($df0af2ac7601abf1$var$angle(lambda, $df0af2ac7601abf1$var$lambda1) > $df0af2ac7601abf1$var$angle($df0af2ac7601abf1$var$lambda0, $df0af2ac7601abf1$var$lambda1)) $df0af2ac7601abf1$var$lambda0 = lambda;
        }
    } else $df0af2ac7601abf1$var$ranges.push($df0af2ac7601abf1$var$range = [
        $df0af2ac7601abf1$var$lambda0 = lambda,
        $df0af2ac7601abf1$var$lambda1 = lambda
    ]);
    if (phi < $df0af2ac7601abf1$var$phi0) $df0af2ac7601abf1$var$phi0 = phi;
    if (phi > $df0af2ac7601abf1$var$phi1) $df0af2ac7601abf1$var$phi1 = phi;
    $df0af2ac7601abf1$var$p0 = p, $df0af2ac7601abf1$var$lambda2 = lambda;
}
function $df0af2ac7601abf1$var$boundsLineStart() {
    $df0af2ac7601abf1$var$boundsStream.point = $df0af2ac7601abf1$var$linePoint;
}
function $df0af2ac7601abf1$var$boundsLineEnd() {
    $df0af2ac7601abf1$var$range[0] = $df0af2ac7601abf1$var$lambda0, $df0af2ac7601abf1$var$range[1] = $df0af2ac7601abf1$var$lambda1;
    $df0af2ac7601abf1$var$boundsStream.point = $df0af2ac7601abf1$var$boundsPoint;
    $df0af2ac7601abf1$var$p0 = null;
}
function $df0af2ac7601abf1$var$boundsRingPoint(lambda, phi) {
    if ($df0af2ac7601abf1$var$p0) {
        var delta = lambda - $df0af2ac7601abf1$var$lambda2;
        $df0af2ac7601abf1$var$deltaSum.add((0, $5jMPm.abs)(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
    } else $df0af2ac7601abf1$var$lambda00 = lambda, $df0af2ac7601abf1$var$phi00 = phi;
    (0, $aEvvN.areaStream).point(lambda, phi);
    $df0af2ac7601abf1$var$linePoint(lambda, phi);
}
function $df0af2ac7601abf1$var$boundsRingStart() {
    (0, $aEvvN.areaStream).lineStart();
}
function $df0af2ac7601abf1$var$boundsRingEnd() {
    $df0af2ac7601abf1$var$boundsRingPoint($df0af2ac7601abf1$var$lambda00, $df0af2ac7601abf1$var$phi00);
    (0, $aEvvN.areaStream).lineEnd();
    if ((0, $5jMPm.abs)($df0af2ac7601abf1$var$deltaSum) > (0, $5jMPm.epsilon)) $df0af2ac7601abf1$var$lambda0 = -($df0af2ac7601abf1$var$lambda1 = 180);
    $df0af2ac7601abf1$var$range[0] = $df0af2ac7601abf1$var$lambda0, $df0af2ac7601abf1$var$range[1] = $df0af2ac7601abf1$var$lambda1;
    $df0af2ac7601abf1$var$p0 = null;
}
// Finds the left-right distance between two longitudes.
// This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
// the distance between ±180° to be 360°.
function $df0af2ac7601abf1$var$angle(lambda0, lambda1) {
    return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
}
function $df0af2ac7601abf1$var$rangeCompare(a, b) {
    return a[0] - b[0];
}
function $df0af2ac7601abf1$var$rangeContains(range, x) {
    return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
}
function $df0af2ac7601abf1$export$2e2bcd8739ae039(feature) {
    var i, n, a, b, merged, deltaMax, delta;
    $df0af2ac7601abf1$var$phi1 = $df0af2ac7601abf1$var$lambda1 = -($df0af2ac7601abf1$var$lambda0 = $df0af2ac7601abf1$var$phi0 = Infinity);
    $df0af2ac7601abf1$var$ranges = [];
    (0, $e0paR.default)(feature, $df0af2ac7601abf1$var$boundsStream);
    // First, sort ranges by their minimum longitudes.
    if (n = $df0af2ac7601abf1$var$ranges.length) {
        $df0af2ac7601abf1$var$ranges.sort($df0af2ac7601abf1$var$rangeCompare);
        // Then, merge any ranges that overlap.
        for(i = 1, a = $df0af2ac7601abf1$var$ranges[0], merged = [
            a
        ]; i < n; ++i){
            b = $df0af2ac7601abf1$var$ranges[i];
            if ($df0af2ac7601abf1$var$rangeContains(a, b[0]) || $df0af2ac7601abf1$var$rangeContains(a, b[1])) {
                if ($df0af2ac7601abf1$var$angle(a[0], b[1]) > $df0af2ac7601abf1$var$angle(a[0], a[1])) a[1] = b[1];
                if ($df0af2ac7601abf1$var$angle(b[0], a[1]) > $df0af2ac7601abf1$var$angle(a[0], a[1])) a[0] = b[0];
            } else merged.push(a = b);
        }
        // Finally, find the largest gap between the merged ranges.
        // The final bounding box will be the inverse of this gap.
        for(deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i){
            b = merged[i];
            if ((delta = $df0af2ac7601abf1$var$angle(a[1], b[0])) > deltaMax) deltaMax = delta, $df0af2ac7601abf1$var$lambda0 = b[0], $df0af2ac7601abf1$var$lambda1 = a[1];
        }
    }
    $df0af2ac7601abf1$var$ranges = $df0af2ac7601abf1$var$range = null;
    return $df0af2ac7601abf1$var$lambda0 === Infinity || $df0af2ac7601abf1$var$phi0 === Infinity ? [
        [
            NaN,
            NaN
        ],
        [
            NaN,
            NaN
        ]
    ] : [
        [
            $df0af2ac7601abf1$var$lambda0,
            $df0af2ac7601abf1$var$phi0
        ],
        [
            $df0af2ac7601abf1$var$lambda1,
            $df0af2ac7601abf1$var$phi1
        ]
    ];
}

});
parcelRegister("jaKPv", function(module, exports) {

$parcel$export(module.exports, "spherical", () => $df5346e8fed8da64$export$12f9ad44fe773943);
$parcel$export(module.exports, "cartesian", () => $df5346e8fed8da64$export$6e6697ef026a96);
$parcel$export(module.exports, "cartesianDot", () => $df5346e8fed8da64$export$2ef80f51436a9de9);
$parcel$export(module.exports, "cartesianCross", () => $df5346e8fed8da64$export$4763f5351b14293f);
$parcel$export(module.exports, "cartesianAddInPlace", () => $df5346e8fed8da64$export$e62eba72fc898eae);
$parcel$export(module.exports, "cartesianScale", () => $df5346e8fed8da64$export$52d0ee3fc868d452);
$parcel$export(module.exports, "cartesianNormalizeInPlace", () => $df5346e8fed8da64$export$6789498aec2cb34b);

var $5jMPm = parcelRequire("5jMPm");
function $df5346e8fed8da64$export$12f9ad44fe773943(cartesian) {
    return [
        (0, $5jMPm.atan2)(cartesian[1], cartesian[0]),
        (0, $5jMPm.asin)(cartesian[2])
    ];
}
function $df5346e8fed8da64$export$6e6697ef026a96(spherical) {
    var lambda = spherical[0], phi = spherical[1], cosPhi = (0, $5jMPm.cos)(phi);
    return [
        cosPhi * (0, $5jMPm.cos)(lambda),
        cosPhi * (0, $5jMPm.sin)(lambda),
        (0, $5jMPm.sin)(phi)
    ];
}
function $df5346e8fed8da64$export$2ef80f51436a9de9(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function $df5346e8fed8da64$export$4763f5351b14293f(a, b) {
    return [
        a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0]
    ];
}
function $df5346e8fed8da64$export$e62eba72fc898eae(a, b) {
    a[0] += b[0], a[1] += b[1], a[2] += b[2];
}
function $df5346e8fed8da64$export$52d0ee3fc868d452(vector, k) {
    return [
        vector[0] * k,
        vector[1] * k,
        vector[2] * k
    ];
}
function $df5346e8fed8da64$export$6789498aec2cb34b(d) {
    var l = (0, $5jMPm.sqrt)(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
    d[0] /= l, d[1] /= l, d[2] /= l;
}

});


parcelRegister("2KpUr", function(module, exports) {

$parcel$export(module.exports, "default", () => $2003f9b817a4fa11$export$2e2bcd8739ae039);

var $5jMPm = parcelRequire("5jMPm");

var $jJAH0 = parcelRequire("jJAH0");

var $e0paR = parcelRequire("e0paR");
var $2003f9b817a4fa11$var$W0, $2003f9b817a4fa11$var$W1, $2003f9b817a4fa11$var$X0, $2003f9b817a4fa11$var$Y0, $2003f9b817a4fa11$var$Z0, $2003f9b817a4fa11$var$X1, $2003f9b817a4fa11$var$Y1, $2003f9b817a4fa11$var$Z1, $2003f9b817a4fa11$var$X2, $2003f9b817a4fa11$var$Y2, $2003f9b817a4fa11$var$Z2, $2003f9b817a4fa11$var$lambda00, $2003f9b817a4fa11$var$phi00, $2003f9b817a4fa11$var$x0, $2003f9b817a4fa11$var$y0, $2003f9b817a4fa11$var$z0; // previous point
var $2003f9b817a4fa11$var$centroidStream = {
    sphere: (0, $jJAH0.default),
    point: $2003f9b817a4fa11$var$centroidPoint,
    lineStart: $2003f9b817a4fa11$var$centroidLineStart,
    lineEnd: $2003f9b817a4fa11$var$centroidLineEnd,
    polygonStart: function() {
        $2003f9b817a4fa11$var$centroidStream.lineStart = $2003f9b817a4fa11$var$centroidRingStart;
        $2003f9b817a4fa11$var$centroidStream.lineEnd = $2003f9b817a4fa11$var$centroidRingEnd;
    },
    polygonEnd: function() {
        $2003f9b817a4fa11$var$centroidStream.lineStart = $2003f9b817a4fa11$var$centroidLineStart;
        $2003f9b817a4fa11$var$centroidStream.lineEnd = $2003f9b817a4fa11$var$centroidLineEnd;
    }
};
// Arithmetic mean of Cartesian vectors.
function $2003f9b817a4fa11$var$centroidPoint(lambda, phi) {
    lambda *= (0, $5jMPm.radians), phi *= (0, $5jMPm.radians);
    var cosPhi = (0, $5jMPm.cos)(phi);
    $2003f9b817a4fa11$var$centroidPointCartesian(cosPhi * (0, $5jMPm.cos)(lambda), cosPhi * (0, $5jMPm.sin)(lambda), (0, $5jMPm.sin)(phi));
}
function $2003f9b817a4fa11$var$centroidPointCartesian(x, y, z) {
    ++$2003f9b817a4fa11$var$W0;
    $2003f9b817a4fa11$var$X0 += (x - $2003f9b817a4fa11$var$X0) / $2003f9b817a4fa11$var$W0;
    $2003f9b817a4fa11$var$Y0 += (y - $2003f9b817a4fa11$var$Y0) / $2003f9b817a4fa11$var$W0;
    $2003f9b817a4fa11$var$Z0 += (z - $2003f9b817a4fa11$var$Z0) / $2003f9b817a4fa11$var$W0;
}
function $2003f9b817a4fa11$var$centroidLineStart() {
    $2003f9b817a4fa11$var$centroidStream.point = $2003f9b817a4fa11$var$centroidLinePointFirst;
}
function $2003f9b817a4fa11$var$centroidLinePointFirst(lambda, phi) {
    lambda *= (0, $5jMPm.radians), phi *= (0, $5jMPm.radians);
    var cosPhi = (0, $5jMPm.cos)(phi);
    $2003f9b817a4fa11$var$x0 = cosPhi * (0, $5jMPm.cos)(lambda);
    $2003f9b817a4fa11$var$y0 = cosPhi * (0, $5jMPm.sin)(lambda);
    $2003f9b817a4fa11$var$z0 = (0, $5jMPm.sin)(phi);
    $2003f9b817a4fa11$var$centroidStream.point = $2003f9b817a4fa11$var$centroidLinePoint;
    $2003f9b817a4fa11$var$centroidPointCartesian($2003f9b817a4fa11$var$x0, $2003f9b817a4fa11$var$y0, $2003f9b817a4fa11$var$z0);
}
function $2003f9b817a4fa11$var$centroidLinePoint(lambda, phi) {
    lambda *= (0, $5jMPm.radians), phi *= (0, $5jMPm.radians);
    var cosPhi = (0, $5jMPm.cos)(phi), x = cosPhi * (0, $5jMPm.cos)(lambda), y = cosPhi * (0, $5jMPm.sin)(lambda), z = (0, $5jMPm.sin)(phi), w = (0, $5jMPm.atan2)((0, $5jMPm.sqrt)((w = $2003f9b817a4fa11$var$y0 * z - $2003f9b817a4fa11$var$z0 * y) * w + (w = $2003f9b817a4fa11$var$z0 * x - $2003f9b817a4fa11$var$x0 * z) * w + (w = $2003f9b817a4fa11$var$x0 * y - $2003f9b817a4fa11$var$y0 * x) * w), $2003f9b817a4fa11$var$x0 * x + $2003f9b817a4fa11$var$y0 * y + $2003f9b817a4fa11$var$z0 * z);
    $2003f9b817a4fa11$var$W1 += w;
    $2003f9b817a4fa11$var$X1 += w * ($2003f9b817a4fa11$var$x0 + ($2003f9b817a4fa11$var$x0 = x));
    $2003f9b817a4fa11$var$Y1 += w * ($2003f9b817a4fa11$var$y0 + ($2003f9b817a4fa11$var$y0 = y));
    $2003f9b817a4fa11$var$Z1 += w * ($2003f9b817a4fa11$var$z0 + ($2003f9b817a4fa11$var$z0 = z));
    $2003f9b817a4fa11$var$centroidPointCartesian($2003f9b817a4fa11$var$x0, $2003f9b817a4fa11$var$y0, $2003f9b817a4fa11$var$z0);
}
function $2003f9b817a4fa11$var$centroidLineEnd() {
    $2003f9b817a4fa11$var$centroidStream.point = $2003f9b817a4fa11$var$centroidPoint;
}
// See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
// J. Applied Mechanics 42, 239 (1975).
function $2003f9b817a4fa11$var$centroidRingStart() {
    $2003f9b817a4fa11$var$centroidStream.point = $2003f9b817a4fa11$var$centroidRingPointFirst;
}
function $2003f9b817a4fa11$var$centroidRingEnd() {
    $2003f9b817a4fa11$var$centroidRingPoint($2003f9b817a4fa11$var$lambda00, $2003f9b817a4fa11$var$phi00);
    $2003f9b817a4fa11$var$centroidStream.point = $2003f9b817a4fa11$var$centroidPoint;
}
function $2003f9b817a4fa11$var$centroidRingPointFirst(lambda, phi) {
    $2003f9b817a4fa11$var$lambda00 = lambda, $2003f9b817a4fa11$var$phi00 = phi;
    lambda *= (0, $5jMPm.radians), phi *= (0, $5jMPm.radians);
    $2003f9b817a4fa11$var$centroidStream.point = $2003f9b817a4fa11$var$centroidRingPoint;
    var cosPhi = (0, $5jMPm.cos)(phi);
    $2003f9b817a4fa11$var$x0 = cosPhi * (0, $5jMPm.cos)(lambda);
    $2003f9b817a4fa11$var$y0 = cosPhi * (0, $5jMPm.sin)(lambda);
    $2003f9b817a4fa11$var$z0 = (0, $5jMPm.sin)(phi);
    $2003f9b817a4fa11$var$centroidPointCartesian($2003f9b817a4fa11$var$x0, $2003f9b817a4fa11$var$y0, $2003f9b817a4fa11$var$z0);
}
function $2003f9b817a4fa11$var$centroidRingPoint(lambda, phi) {
    lambda *= (0, $5jMPm.radians), phi *= (0, $5jMPm.radians);
    var cosPhi = (0, $5jMPm.cos)(phi), x = cosPhi * (0, $5jMPm.cos)(lambda), y = cosPhi * (0, $5jMPm.sin)(lambda), z = (0, $5jMPm.sin)(phi), cx = $2003f9b817a4fa11$var$y0 * z - $2003f9b817a4fa11$var$z0 * y, cy = $2003f9b817a4fa11$var$z0 * x - $2003f9b817a4fa11$var$x0 * z, cz = $2003f9b817a4fa11$var$x0 * y - $2003f9b817a4fa11$var$y0 * x, m = (0, $5jMPm.sqrt)(cx * cx + cy * cy + cz * cz), w = (0, $5jMPm.asin)(m), v = m && -w / m; // area weight multiplier
    $2003f9b817a4fa11$var$X2 += v * cx;
    $2003f9b817a4fa11$var$Y2 += v * cy;
    $2003f9b817a4fa11$var$Z2 += v * cz;
    $2003f9b817a4fa11$var$W1 += w;
    $2003f9b817a4fa11$var$X1 += w * ($2003f9b817a4fa11$var$x0 + ($2003f9b817a4fa11$var$x0 = x));
    $2003f9b817a4fa11$var$Y1 += w * ($2003f9b817a4fa11$var$y0 + ($2003f9b817a4fa11$var$y0 = y));
    $2003f9b817a4fa11$var$Z1 += w * ($2003f9b817a4fa11$var$z0 + ($2003f9b817a4fa11$var$z0 = z));
    $2003f9b817a4fa11$var$centroidPointCartesian($2003f9b817a4fa11$var$x0, $2003f9b817a4fa11$var$y0, $2003f9b817a4fa11$var$z0);
}
function $2003f9b817a4fa11$export$2e2bcd8739ae039(object) {
    $2003f9b817a4fa11$var$W0 = $2003f9b817a4fa11$var$W1 = $2003f9b817a4fa11$var$X0 = $2003f9b817a4fa11$var$Y0 = $2003f9b817a4fa11$var$Z0 = $2003f9b817a4fa11$var$X1 = $2003f9b817a4fa11$var$Y1 = $2003f9b817a4fa11$var$Z1 = $2003f9b817a4fa11$var$X2 = $2003f9b817a4fa11$var$Y2 = $2003f9b817a4fa11$var$Z2 = 0;
    (0, $e0paR.default)(object, $2003f9b817a4fa11$var$centroidStream);
    var x = $2003f9b817a4fa11$var$X2, y = $2003f9b817a4fa11$var$Y2, z = $2003f9b817a4fa11$var$Z2, m = x * x + y * y + z * z;
    // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
    if (m < (0, $5jMPm.epsilon2)) {
        x = $2003f9b817a4fa11$var$X1, y = $2003f9b817a4fa11$var$Y1, z = $2003f9b817a4fa11$var$Z1;
        // If the feature has zero length, fall back to arithmetic mean of point vectors.
        if ($2003f9b817a4fa11$var$W1 < (0, $5jMPm.epsilon)) x = $2003f9b817a4fa11$var$X0, y = $2003f9b817a4fa11$var$Y0, z = $2003f9b817a4fa11$var$Z0;
        m = x * x + y * y + z * z;
        // If the feature still has an undefined ccentroid, then return.
        if (m < (0, $5jMPm.epsilon2)) return [
            NaN,
            NaN
        ];
    }
    return [
        (0, $5jMPm.atan2)(y, x) * (0, $5jMPm.degrees),
        (0, $5jMPm.asin)(z / (0, $5jMPm.sqrt)(m)) * (0, $5jMPm.degrees)
    ];
}

});

parcelRegister("6pOnP", function(module, exports) {

$parcel$export(module.exports, "circleStream", () => $4abc28f638384f2f$export$b5441eb324cd8d4e);
$parcel$export(module.exports, "default", () => $4abc28f638384f2f$export$2e2bcd8739ae039);

var $jaKPv = parcelRequire("jaKPv");

var $fiQEF = parcelRequire("fiQEF");

var $5jMPm = parcelRequire("5jMPm");

var $jRH68 = parcelRequire("jRH68");
function $4abc28f638384f2f$export$b5441eb324cd8d4e(stream, radius, delta, direction, t0, t1) {
    if (!delta) return;
    var cosRadius = (0, $5jMPm.cos)(radius), sinRadius = (0, $5jMPm.sin)(radius), step = direction * delta;
    if (t0 == null) {
        t0 = radius + direction * (0, $5jMPm.tau);
        t1 = radius - step / 2;
    } else {
        t0 = $4abc28f638384f2f$var$circleRadius(cosRadius, t0);
        t1 = $4abc28f638384f2f$var$circleRadius(cosRadius, t1);
        if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * (0, $5jMPm.tau);
    }
    for(var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step){
        point = (0, $jaKPv.spherical)([
            cosRadius,
            -sinRadius * (0, $5jMPm.cos)(t),
            -sinRadius * (0, $5jMPm.sin)(t)
        ]);
        stream.point(point[0], point[1]);
    }
}
// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function $4abc28f638384f2f$var$circleRadius(cosRadius, point) {
    point = (0, $jaKPv.cartesian)(point), point[0] -= cosRadius;
    (0, $jaKPv.cartesianNormalizeInPlace)(point);
    var radius = (0, $5jMPm.acos)(-point[1]);
    return ((-point[2] < 0 ? -radius : radius) + (0, $5jMPm.tau) - (0, $5jMPm.epsilon)) % (0, $5jMPm.tau);
}
function $4abc28f638384f2f$export$2e2bcd8739ae039() {
    var center = (0, $fiQEF.default)([
        0,
        0
    ]), radius = (0, $fiQEF.default)(90), precision = (0, $fiQEF.default)(6), ring, rotate, stream = {
        point: point
    };
    function point(x, y) {
        ring.push(x = rotate(x, y));
        x[0] *= (0, $5jMPm.degrees), x[1] *= (0, $5jMPm.degrees);
    }
    function circle() {
        var c = center.apply(this, arguments), r = radius.apply(this, arguments) * (0, $5jMPm.radians), p = precision.apply(this, arguments) * (0, $5jMPm.radians);
        ring = [];
        rotate = (0, $jRH68.rotateRadians)(-c[0] * (0, $5jMPm.radians), -c[1] * (0, $5jMPm.radians), 0).invert;
        $4abc28f638384f2f$export$b5441eb324cd8d4e(stream, r, p, 1);
        c = {
            type: "Polygon",
            coordinates: [
                ring
            ]
        };
        ring = rotate = null;
        return c;
    }
    circle.center = function(_) {
        return arguments.length ? (center = typeof _ === "function" ? _ : (0, $fiQEF.default)([
            +_[0],
            +_[1]
        ]), circle) : center;
    };
    circle.radius = function(_) {
        return arguments.length ? (radius = typeof _ === "function" ? _ : (0, $fiQEF.default)(+_), circle) : radius;
    };
    circle.precision = function(_) {
        return arguments.length ? (precision = typeof _ === "function" ? _ : (0, $fiQEF.default)(+_), circle) : precision;
    };
    return circle;
}

});
parcelRegister("fiQEF", function(module, exports) {

$parcel$export(module.exports, "default", () => $b24161a283a6c2f6$export$2e2bcd8739ae039);
function $b24161a283a6c2f6$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}

});

parcelRegister("jRH68", function(module, exports) {

$parcel$export(module.exports, "rotateRadians", () => $e76465e8851e3b9e$export$a2ba89726971a90f);
$parcel$export(module.exports, "default", () => $e76465e8851e3b9e$export$2e2bcd8739ae039);

var $a8vPq = parcelRequire("a8vPq");

var $5jMPm = parcelRequire("5jMPm");
function $e76465e8851e3b9e$var$rotationIdentity(lambda, phi) {
    return [
        (0, $5jMPm.abs)(lambda) > (0, $5jMPm.pi) ? lambda + Math.round(-lambda / (0, $5jMPm.tau)) * (0, $5jMPm.tau) : lambda,
        phi
    ];
}
$e76465e8851e3b9e$var$rotationIdentity.invert = $e76465e8851e3b9e$var$rotationIdentity;
function $e76465e8851e3b9e$export$a2ba89726971a90f(deltaLambda, deltaPhi, deltaGamma) {
    return (deltaLambda %= (0, $5jMPm.tau)) ? deltaPhi || deltaGamma ? (0, $a8vPq.default)($e76465e8851e3b9e$var$rotationLambda(deltaLambda), $e76465e8851e3b9e$var$rotationPhiGamma(deltaPhi, deltaGamma)) : $e76465e8851e3b9e$var$rotationLambda(deltaLambda) : deltaPhi || deltaGamma ? $e76465e8851e3b9e$var$rotationPhiGamma(deltaPhi, deltaGamma) : $e76465e8851e3b9e$var$rotationIdentity;
}
function $e76465e8851e3b9e$var$forwardRotationLambda(deltaLambda) {
    return function(lambda, phi) {
        return lambda += deltaLambda, [
            lambda > (0, $5jMPm.pi) ? lambda - (0, $5jMPm.tau) : lambda < -(0, $5jMPm.pi) ? lambda + (0, $5jMPm.tau) : lambda,
            phi
        ];
    };
}
function $e76465e8851e3b9e$var$rotationLambda(deltaLambda) {
    var rotation = $e76465e8851e3b9e$var$forwardRotationLambda(deltaLambda);
    rotation.invert = $e76465e8851e3b9e$var$forwardRotationLambda(-deltaLambda);
    return rotation;
}
function $e76465e8851e3b9e$var$rotationPhiGamma(deltaPhi, deltaGamma) {
    var cosDeltaPhi = (0, $5jMPm.cos)(deltaPhi), sinDeltaPhi = (0, $5jMPm.sin)(deltaPhi), cosDeltaGamma = (0, $5jMPm.cos)(deltaGamma), sinDeltaGamma = (0, $5jMPm.sin)(deltaGamma);
    function rotation(lambda, phi) {
        var cosPhi = (0, $5jMPm.cos)(phi), x = (0, $5jMPm.cos)(lambda) * cosPhi, y = (0, $5jMPm.sin)(lambda) * cosPhi, z = (0, $5jMPm.sin)(phi), k = z * cosDeltaPhi + x * sinDeltaPhi;
        return [
            (0, $5jMPm.atan2)(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
            (0, $5jMPm.asin)(k * cosDeltaGamma + y * sinDeltaGamma)
        ];
    }
    rotation.invert = function(lambda, phi) {
        var cosPhi = (0, $5jMPm.cos)(phi), x = (0, $5jMPm.cos)(lambda) * cosPhi, y = (0, $5jMPm.sin)(lambda) * cosPhi, z = (0, $5jMPm.sin)(phi), k = z * cosDeltaGamma - y * sinDeltaGamma;
        return [
            (0, $5jMPm.atan2)(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
            (0, $5jMPm.asin)(k * cosDeltaPhi - x * sinDeltaPhi)
        ];
    };
    return rotation;
}
function $e76465e8851e3b9e$export$2e2bcd8739ae039(rotate) {
    rotate = $e76465e8851e3b9e$export$a2ba89726971a90f(rotate[0] * (0, $5jMPm.radians), rotate[1] * (0, $5jMPm.radians), rotate.length > 2 ? rotate[2] * (0, $5jMPm.radians) : 0);
    function forward(coordinates) {
        coordinates = rotate(coordinates[0] * (0, $5jMPm.radians), coordinates[1] * (0, $5jMPm.radians));
        return coordinates[0] *= (0, $5jMPm.degrees), coordinates[1] *= (0, $5jMPm.degrees), coordinates;
    }
    forward.invert = function(coordinates) {
        coordinates = rotate.invert(coordinates[0] * (0, $5jMPm.radians), coordinates[1] * (0, $5jMPm.radians));
        return coordinates[0] *= (0, $5jMPm.degrees), coordinates[1] *= (0, $5jMPm.degrees), coordinates;
    };
    return forward;
}

});
parcelRegister("a8vPq", function(module, exports) {

$parcel$export(module.exports, "default", () => $761357309e963af3$export$2e2bcd8739ae039);
function $761357309e963af3$export$2e2bcd8739ae039(a, b) {
    function compose(x, y) {
        return x = a(x, y), b(x[0], x[1]);
    }
    if (a.invert && b.invert) compose.invert = function(x, y) {
        return x = b.invert(x, y), x && a.invert(x[0], x[1]);
    };
    return compose;
}

});



parcelRegister("aAkke", function(module, exports) {

$parcel$export(module.exports, "default", () => $7b4d085ba426cac9$export$2e2bcd8739ae039);

var $jTkMN = parcelRequire("jTkMN");

var $5jMPm = parcelRequire("5jMPm");
var $7b4d085ba426cac9$export$2e2bcd8739ae039 = (0, $jTkMN.default)(function() {
    return true;
}, $7b4d085ba426cac9$var$clipAntimeridianLine, $7b4d085ba426cac9$var$clipAntimeridianInterpolate, [
    -(0, $5jMPm.pi),
    -(0, $5jMPm.halfPi)
]);
// Takes a line and cuts into visible segments. Return values: 0 - there were
// intersections or the line was empty; 1 - no intersections; 2 - there were
// intersections, and the first and last segments should be rejoined.
function $7b4d085ba426cac9$var$clipAntimeridianLine(stream) {
    var lambda0 = NaN, phi0 = NaN, sign0 = NaN, clean; // no intersections
    return {
        lineStart: function() {
            stream.lineStart();
            clean = 1;
        },
        point: function(lambda1, phi1) {
            var sign1 = lambda1 > 0 ? (0, $5jMPm.pi) : -(0, $5jMPm.pi), delta = (0, $5jMPm.abs)(lambda1 - lambda0);
            if ((0, $5jMPm.abs)(delta - (0, $5jMPm.pi)) < (0, $5jMPm.epsilon)) {
                stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? (0, $5jMPm.halfPi) : -(0, $5jMPm.halfPi));
                stream.point(sign0, phi0);
                stream.lineEnd();
                stream.lineStart();
                stream.point(sign1, phi0);
                stream.point(lambda1, phi0);
                clean = 0;
            } else if (sign0 !== sign1 && delta >= (0, $5jMPm.pi)) {
                if ((0, $5jMPm.abs)(lambda0 - sign0) < (0, $5jMPm.epsilon)) lambda0 -= sign0 * (0, $5jMPm.epsilon); // handle degeneracies
                if ((0, $5jMPm.abs)(lambda1 - sign1) < (0, $5jMPm.epsilon)) lambda1 -= sign1 * (0, $5jMPm.epsilon);
                phi0 = $7b4d085ba426cac9$var$clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
                stream.point(sign0, phi0);
                stream.lineEnd();
                stream.lineStart();
                stream.point(sign1, phi0);
                clean = 0;
            }
            stream.point(lambda0 = lambda1, phi0 = phi1);
            sign0 = sign1;
        },
        lineEnd: function() {
            stream.lineEnd();
            lambda0 = phi0 = NaN;
        },
        clean: function() {
            return 2 - clean; // if intersections, rejoin first and last segments
        }
    };
}
function $7b4d085ba426cac9$var$clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
    var cosPhi0, cosPhi1, sinLambda0Lambda1 = (0, $5jMPm.sin)(lambda0 - lambda1);
    return (0, $5jMPm.abs)(sinLambda0Lambda1) > (0, $5jMPm.epsilon) ? (0, $5jMPm.atan)(((0, $5jMPm.sin)(phi0) * (cosPhi1 = (0, $5jMPm.cos)(phi1)) * (0, $5jMPm.sin)(lambda1) - (0, $5jMPm.sin)(phi1) * (cosPhi0 = (0, $5jMPm.cos)(phi0)) * (0, $5jMPm.sin)(lambda0)) / (cosPhi0 * cosPhi1 * sinLambda0Lambda1)) : (phi0 + phi1) / 2;
}
function $7b4d085ba426cac9$var$clipAntimeridianInterpolate(from, to, direction, stream) {
    var phi;
    if (from == null) {
        phi = direction * (0, $5jMPm.halfPi);
        stream.point(-(0, $5jMPm.pi), phi);
        stream.point(0, phi);
        stream.point((0, $5jMPm.pi), phi);
        stream.point((0, $5jMPm.pi), 0);
        stream.point((0, $5jMPm.pi), -phi);
        stream.point(0, -phi);
        stream.point(-(0, $5jMPm.pi), -phi);
        stream.point(-(0, $5jMPm.pi), 0);
        stream.point(-(0, $5jMPm.pi), phi);
    } else if ((0, $5jMPm.abs)(from[0] - to[0]) > (0, $5jMPm.epsilon)) {
        var lambda = from[0] < to[0] ? (0, $5jMPm.pi) : -(0, $5jMPm.pi);
        phi = direction * lambda / 2;
        stream.point(-lambda, phi);
        stream.point(0, phi);
        stream.point(lambda, phi);
    } else stream.point(to[0], to[1]);
}

});
parcelRegister("jTkMN", function(module, exports) {

$parcel$export(module.exports, "default", () => $e7b347104483a12c$export$2e2bcd8739ae039);

var $gyzSp = parcelRequire("gyzSp");

var $lgxPX = parcelRequire("lgxPX");

var $5jMPm = parcelRequire("5jMPm");

var $iRpoL = parcelRequire("iRpoL");
parcelRequire("ap1W6");
var $9RpEG = parcelRequire("9RpEG");
function $e7b347104483a12c$export$2e2bcd8739ae039(pointVisible, clipLine, interpolate, start) {
    return function(sink) {
        var line = clipLine(sink), ringBuffer = (0, $gyzSp.default)(), ringSink = clipLine(ringBuffer), polygonStarted = false, polygon, segments, ring;
        var clip = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: function() {
                clip.point = pointRing;
                clip.lineStart = ringStart;
                clip.lineEnd = ringEnd;
                segments = [];
                polygon = [];
            },
            polygonEnd: function() {
                clip.point = point;
                clip.lineStart = lineStart;
                clip.lineEnd = lineEnd;
                segments = (0, $9RpEG.default)(segments);
                var startInside = (0, $iRpoL.default)(polygon, start);
                if (segments.length) {
                    if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                    (0, $lgxPX.default)(segments, $e7b347104483a12c$var$compareIntersection, startInside, interpolate, sink);
                } else if (startInside) {
                    if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                    sink.lineStart();
                    interpolate(null, null, 1, sink);
                    sink.lineEnd();
                }
                if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
                segments = polygon = null;
            },
            sphere: function() {
                sink.polygonStart();
                sink.lineStart();
                interpolate(null, null, 1, sink);
                sink.lineEnd();
                sink.polygonEnd();
            }
        };
        function point(lambda, phi) {
            if (pointVisible(lambda, phi)) sink.point(lambda, phi);
        }
        function pointLine(lambda, phi) {
            line.point(lambda, phi);
        }
        function lineStart() {
            clip.point = pointLine;
            line.lineStart();
        }
        function lineEnd() {
            clip.point = point;
            line.lineEnd();
        }
        function pointRing(lambda, phi) {
            ring.push([
                lambda,
                phi
            ]);
            ringSink.point(lambda, phi);
        }
        function ringStart() {
            ringSink.lineStart();
            ring = [];
        }
        function ringEnd() {
            pointRing(ring[0][0], ring[0][1]);
            ringSink.lineEnd();
            var clean = ringSink.clean(), ringSegments = ringBuffer.result(), i, n = ringSegments.length, m, segment, point;
            ring.pop();
            polygon.push(ring);
            ring = null;
            if (!n) return;
            // No intersections.
            if (clean & 1) {
                segment = ringSegments[0];
                if ((m = segment.length - 1) > 0) {
                    if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
                    sink.lineStart();
                    for(i = 0; i < m; ++i)sink.point((point = segment[i])[0], point[1]);
                    sink.lineEnd();
                }
                return;
            }
            // Rejoin connected segments.
            // TODO reuse ringBuffer.rejoin()?
            if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
            segments.push(ringSegments.filter($e7b347104483a12c$var$validSegment));
        }
        return clip;
    };
}
function $e7b347104483a12c$var$validSegment(segment) {
    return segment.length > 1;
}
// Intersections are sorted along the clip edge. For both antimeridian cutting
// and circle clipping, the same comparison is used.
function $e7b347104483a12c$var$compareIntersection(a, b) {
    return ((a = a.x)[0] < 0 ? a[1] - (0, $5jMPm.halfPi) - (0, $5jMPm.epsilon) : (0, $5jMPm.halfPi) - a[1]) - ((b = b.x)[0] < 0 ? b[1] - (0, $5jMPm.halfPi) - (0, $5jMPm.epsilon) : (0, $5jMPm.halfPi) - b[1]);
}

});
parcelRegister("gyzSp", function(module, exports) {

$parcel$export(module.exports, "default", () => $c0dba6a4addf76b2$export$2e2bcd8739ae039);

var $jJAH0 = parcelRequire("jJAH0");
function $c0dba6a4addf76b2$export$2e2bcd8739ae039() {
    var lines = [], line;
    return {
        point: function(x, y, m) {
            line.push([
                x,
                y,
                m
            ]);
        },
        lineStart: function() {
            lines.push(line = []);
        },
        lineEnd: (0, $jJAH0.default),
        rejoin: function() {
            if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
        },
        result: function() {
            var result = lines;
            lines = [];
            line = null;
            return result;
        }
    };
}

});

parcelRegister("lgxPX", function(module, exports) {

$parcel$export(module.exports, "default", () => $f7b556e8af2b3f8f$export$2e2bcd8739ae039);

var $lsqyQ = parcelRequire("lsqyQ");

var $5jMPm = parcelRequire("5jMPm");
function $f7b556e8af2b3f8f$var$Intersection(point, points, other, entry) {
    this.x = point;
    this.z = points;
    this.o = other; // another intersection
    this.e = entry; // is an entry?
    this.v = false; // visited
    this.n = this.p = null; // next & previous
}
function $f7b556e8af2b3f8f$export$2e2bcd8739ae039(segments, compareIntersection, startInside, interpolate, stream) {
    var subject = [], clip = [], i, n;
    segments.forEach(function(segment) {
        if ((n = segment.length - 1) <= 0) return;
        var n, p0 = segment[0], p1 = segment[n], x;
        if ((0, $lsqyQ.default)(p0, p1)) {
            if (!p0[2] && !p1[2]) {
                stream.lineStart();
                for(i = 0; i < n; ++i)stream.point((p0 = segment[i])[0], p0[1]);
                stream.lineEnd();
                return;
            }
            // handle degenerate cases by moving the point
            p1[0] += 2 * (0, $5jMPm.epsilon);
        }
        subject.push(x = new $f7b556e8af2b3f8f$var$Intersection(p0, segment, null, true));
        clip.push(x.o = new $f7b556e8af2b3f8f$var$Intersection(p0, null, x, false));
        subject.push(x = new $f7b556e8af2b3f8f$var$Intersection(p1, segment, null, false));
        clip.push(x.o = new $f7b556e8af2b3f8f$var$Intersection(p1, null, x, true));
    });
    if (!subject.length) return;
    clip.sort(compareIntersection);
    $f7b556e8af2b3f8f$var$link(subject);
    $f7b556e8af2b3f8f$var$link(clip);
    for(i = 0, n = clip.length; i < n; ++i)clip[i].e = startInside = !startInside;
    var start = subject[0], points, point;
    while(true){
        // Find first unvisited intersection.
        var current = start, isSubject = true;
        while(current.v)if ((current = current.n) === start) return;
        points = current.z;
        stream.lineStart();
        do {
            current.v = current.o.v = true;
            if (current.e) {
                if (isSubject) for(i = 0, n = points.length; i < n; ++i)stream.point((point = points[i])[0], point[1]);
                else interpolate(current.x, current.n.x, 1, stream);
                current = current.n;
            } else {
                if (isSubject) {
                    points = current.p.z;
                    for(i = points.length - 1; i >= 0; --i)stream.point((point = points[i])[0], point[1]);
                } else interpolate(current.x, current.p.x, -1, stream);
                current = current.p;
            }
            current = current.o;
            points = current.z;
            isSubject = !isSubject;
        }while (!current.v);
        stream.lineEnd();
    }
}
function $f7b556e8af2b3f8f$var$link(array) {
    if (!(n = array.length)) return;
    var n, i = 0, a = array[0], b;
    while(++i < n){
        a.n = b = array[i];
        b.p = a;
        a = b;
    }
    a.n = b = array[0];
    b.p = a;
}

});
parcelRegister("lsqyQ", function(module, exports) {

$parcel$export(module.exports, "default", () => $f9f0d0fc8dc8afb2$export$2e2bcd8739ae039);

var $5jMPm = parcelRequire("5jMPm");
function $f9f0d0fc8dc8afb2$export$2e2bcd8739ae039(a, b) {
    return (0, $5jMPm.abs)(a[0] - b[0]) < (0, $5jMPm.epsilon) && (0, $5jMPm.abs)(a[1] - b[1]) < (0, $5jMPm.epsilon);
}

});


parcelRegister("iRpoL", function(module, exports) {

$parcel$export(module.exports, "default", () => $dbb0e0d011b799c5$export$2e2bcd8739ae039);

var $8UK3C = parcelRequire("8UK3C");

var $jaKPv = parcelRequire("jaKPv");

var $5jMPm = parcelRequire("5jMPm");
var $dbb0e0d011b799c5$var$sum = (0, $8UK3C.default)();
function $dbb0e0d011b799c5$var$longitude(point) {
    if ((0, $5jMPm.abs)(point[0]) <= (0, $5jMPm.pi)) return point[0];
    else return (0, $5jMPm.sign)(point[0]) * (((0, $5jMPm.abs)(point[0]) + (0, $5jMPm.pi)) % (0, $5jMPm.tau) - (0, $5jMPm.pi));
}
function $dbb0e0d011b799c5$export$2e2bcd8739ae039(polygon, point) {
    var lambda = $dbb0e0d011b799c5$var$longitude(point), phi = point[1], sinPhi = (0, $5jMPm.sin)(phi), normal = [
        (0, $5jMPm.sin)(lambda),
        -(0, $5jMPm.cos)(lambda),
        0
    ], angle = 0, winding = 0;
    $dbb0e0d011b799c5$var$sum.reset();
    if (sinPhi === 1) phi = (0, $5jMPm.halfPi) + (0, $5jMPm.epsilon);
    else if (sinPhi === -1) phi = -(0, $5jMPm.halfPi) - (0, $5jMPm.epsilon);
    for(var i = 0, n = polygon.length; i < n; ++i){
        if (!(m = (ring = polygon[i]).length)) continue;
        var ring, m, point0 = ring[m - 1], lambda0 = $dbb0e0d011b799c5$var$longitude(point0), phi0 = point0[1] / 2 + (0, $5jMPm.quarterPi), sinPhi0 = (0, $5jMPm.sin)(phi0), cosPhi0 = (0, $5jMPm.cos)(phi0);
        for(var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1){
            var point1 = ring[j], lambda1 = $dbb0e0d011b799c5$var$longitude(point1), phi1 = point1[1] / 2 + (0, $5jMPm.quarterPi), sinPhi1 = (0, $5jMPm.sin)(phi1), cosPhi1 = (0, $5jMPm.cos)(phi1), delta = lambda1 - lambda0, sign = delta >= 0 ? 1 : -1, absDelta = sign * delta, antimeridian = absDelta > (0, $5jMPm.pi), k = sinPhi0 * sinPhi1;
            $dbb0e0d011b799c5$var$sum.add((0, $5jMPm.atan2)(k * sign * (0, $5jMPm.sin)(absDelta), cosPhi0 * cosPhi1 + k * (0, $5jMPm.cos)(absDelta)));
            angle += antimeridian ? delta + sign * (0, $5jMPm.tau) : delta;
            // Are the longitudes either side of the point’s meridian (lambda),
            // and are the latitudes smaller than the parallel (phi)?
            if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
                var arc = (0, $jaKPv.cartesianCross)((0, $jaKPv.cartesian)(point0), (0, $jaKPv.cartesian)(point1));
                (0, $jaKPv.cartesianNormalizeInPlace)(arc);
                var intersection = (0, $jaKPv.cartesianCross)(normal, arc);
                (0, $jaKPv.cartesianNormalizeInPlace)(intersection);
                var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * (0, $5jMPm.asin)(intersection[2]);
                if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) winding += antimeridian ^ delta >= 0 ? 1 : -1;
            }
        }
    }
    // First, determine whether the South pole is inside or outside:
    //
    // It is inside if:
    // * the polygon winds around it in a clockwise direction.
    // * the polygon does not (cumulatively) wind around it, but has a negative
    //   (counter-clockwise) area.
    //
    // Second, count the (signed) number of times a segment crosses a lambda
    // from the point to the South pole.  If it is zero, then the point is the
    // same side as the South pole.
    return (angle < -(0, $5jMPm.epsilon) || angle < (0, $5jMPm.epsilon) && $dbb0e0d011b799c5$var$sum < -(0, $5jMPm.epsilon)) ^ winding & 1;
}

});



parcelRegister("3Au9P", function(module, exports) {

$parcel$export(module.exports, "default", () => $29cc208861a70b0d$export$2e2bcd8739ae039);

var $jaKPv = parcelRequire("jaKPv");

var $6pOnP = parcelRequire("6pOnP");

var $5jMPm = parcelRequire("5jMPm");

var $lsqyQ = parcelRequire("lsqyQ");

var $jTkMN = parcelRequire("jTkMN");
function $29cc208861a70b0d$export$2e2bcd8739ae039(radius) {
    var cr = (0, $5jMPm.cos)(radius), delta = 6 * (0, $5jMPm.radians), smallRadius = cr > 0, notHemisphere = (0, $5jMPm.abs)(cr) > (0, $5jMPm.epsilon); // TODO optimise for this common case
    function interpolate(from, to, direction, stream) {
        (0, $6pOnP.circleStream)(stream, radius, delta, direction, from, to);
    }
    function visible(lambda, phi) {
        return (0, $5jMPm.cos)(lambda) * (0, $5jMPm.cos)(phi) > cr;
    }
    // Takes a line and cuts into visible segments. Return values used for polygon
    // clipping: 0 - there were intersections or the line was empty; 1 - no
    // intersections 2 - there were intersections, and the first and last segments
    // should be rejoined.
    function clipLine(stream) {
        var point0, c0, v0, v00, clean; // no intersections
        return {
            lineStart: function() {
                v00 = v0 = false;
                clean = 1;
            },
            point: function(lambda, phi) {
                var point1 = [
                    lambda,
                    phi
                ], point2, v = visible(lambda, phi), c = smallRadius ? v ? 0 : code(lambda, phi) : v ? code(lambda + (lambda < 0 ? (0, $5jMPm.pi) : -(0, $5jMPm.pi)), phi) : 0;
                if (!point0 && (v00 = v0 = v)) stream.lineStart();
                if (v !== v0) {
                    point2 = intersect(point0, point1);
                    if (!point2 || (0, $lsqyQ.default)(point0, point2) || (0, $lsqyQ.default)(point1, point2)) point1[2] = 1;
                }
                if (v !== v0) {
                    clean = 0;
                    if (v) {
                        // outside going in
                        stream.lineStart();
                        point2 = intersect(point1, point0);
                        stream.point(point2[0], point2[1]);
                    } else {
                        // inside going out
                        point2 = intersect(point0, point1);
                        stream.point(point2[0], point2[1], 2);
                        stream.lineEnd();
                    }
                    point0 = point2;
                } else if (notHemisphere && point0 && smallRadius ^ v) {
                    var t;
                    // If the codes for two points are different, or are both zero,
                    // and there this segment intersects with the small circle.
                    if (!(c & c0) && (t = intersect(point1, point0, true))) {
                        clean = 0;
                        if (smallRadius) {
                            stream.lineStart();
                            stream.point(t[0][0], t[0][1]);
                            stream.point(t[1][0], t[1][1]);
                            stream.lineEnd();
                        } else {
                            stream.point(t[1][0], t[1][1]);
                            stream.lineEnd();
                            stream.lineStart();
                            stream.point(t[0][0], t[0][1], 3);
                        }
                    }
                }
                if (v && (!point0 || !(0, $lsqyQ.default)(point0, point1))) stream.point(point1[0], point1[1]);
                point0 = point1, v0 = v, c0 = c;
            },
            lineEnd: function() {
                if (v0) stream.lineEnd();
                point0 = null;
            },
            // Rejoin first and last segments if there were intersections and the first
            // and last points were visible.
            clean: function() {
                return clean | (v00 && v0) << 1;
            }
        };
    }
    // Intersects the great circle between a and b with the clip circle.
    function intersect(a, b, two) {
        var pa = (0, $jaKPv.cartesian)(a), pb = (0, $jaKPv.cartesian)(b);
        // We have two planes, n1.p = d1 and n2.p = d2.
        // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
        var n1 = [
            1,
            0,
            0
        ], n2 = (0, $jaKPv.cartesianCross)(pa, pb), n2n2 = (0, $jaKPv.cartesianDot)(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
        // Two polar points.
        if (!determinant) return !two && a;
        var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = (0, $jaKPv.cartesianCross)(n1, n2), A = (0, $jaKPv.cartesianScale)(n1, c1), B = (0, $jaKPv.cartesianScale)(n2, c2);
        (0, $jaKPv.cartesianAddInPlace)(A, B);
        // Solve |p(t)|^2 = 1.
        var u = n1xn2, w = (0, $jaKPv.cartesianDot)(A, u), uu = (0, $jaKPv.cartesianDot)(u, u), t2 = w * w - uu * ((0, $jaKPv.cartesianDot)(A, A) - 1);
        if (t2 < 0) return;
        var t = (0, $5jMPm.sqrt)(t2), q = (0, $jaKPv.cartesianScale)(u, (-w - t) / uu);
        (0, $jaKPv.cartesianAddInPlace)(q, A);
        q = (0, $jaKPv.spherical)(q);
        if (!two) return q;
        // Two intersection points.
        var lambda0 = a[0], lambda1 = b[0], phi0 = a[1], phi1 = b[1], z;
        if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;
        var delta = lambda1 - lambda0, polar = (0, $5jMPm.abs)(delta - (0, $5jMPm.pi)) < (0, $5jMPm.epsilon), meridian = polar || delta < (0, $5jMPm.epsilon);
        if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;
        // Check that the first point is between a and b.
        if (meridian ? polar ? phi0 + phi1 > 0 ^ q[1] < ((0, $5jMPm.abs)(q[0] - lambda0) < (0, $5jMPm.epsilon) ? phi0 : phi1) : phi0 <= q[1] && q[1] <= phi1 : delta > (0, $5jMPm.pi) ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
            var q1 = (0, $jaKPv.cartesianScale)(u, (-w + t) / uu);
            (0, $jaKPv.cartesianAddInPlace)(q1, A);
            return [
                q,
                (0, $jaKPv.spherical)(q1)
            ];
        }
    }
    // Generates a 4-bit vector representing the location of a point relative to
    // the small circle's bounding box.
    function code(lambda, phi) {
        var r = smallRadius ? radius : (0, $5jMPm.pi) - radius, code = 0;
        if (lambda < -r) code |= 1; // left
        else if (lambda > r) code |= 2; // right
        if (phi < -r) code |= 4; // below
        else if (phi > r) code |= 8; // above
        return code;
    }
    return (0, $jTkMN.default)(visible, clipLine, interpolate, smallRadius ? [
        0,
        -radius
    ] : [
        -(0, $5jMPm.pi),
        radius - (0, $5jMPm.pi)
    ]);
}

});

parcelRegister("8Ra9R", function(module, exports) {

$parcel$export(module.exports, "default", () => $672b271fa18d9b01$export$2e2bcd8739ae039);

var $9akEc = parcelRequire("9akEc");
function $672b271fa18d9b01$export$2e2bcd8739ae039() {
    var x0 = 0, y0 = 0, x1 = 960, y1 = 500, cache, cacheStream, clip;
    return clip = {
        stream: function(stream) {
            return cache && cacheStream === stream ? cache : cache = (0, $9akEc.default)(x0, y0, x1, y1)(cacheStream = stream);
        },
        extent: function(_) {
            return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], cache = cacheStream = null, clip) : [
                [
                    x0,
                    y0
                ],
                [
                    x1,
                    y1
                ]
            ];
        }
    };
}

});
parcelRegister("9akEc", function(module, exports) {

$parcel$export(module.exports, "default", () => $6ac5105dc21fa683$export$2e2bcd8739ae039);

var $5jMPm = parcelRequire("5jMPm");

var $gyzSp = parcelRequire("gyzSp");

var $7fXMe = parcelRequire("7fXMe");

var $lgxPX = parcelRequire("lgxPX");
parcelRequire("ap1W6");
var $9RpEG = parcelRequire("9RpEG");
var $6ac5105dc21fa683$var$clipMax = 1e9, $6ac5105dc21fa683$var$clipMin = -$6ac5105dc21fa683$var$clipMax;
function $6ac5105dc21fa683$export$2e2bcd8739ae039(x0, y0, x1, y1) {
    function visible(x, y) {
        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
    }
    function interpolate(from, to, direction, stream) {
        var a = 0, a1 = 0;
        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoint(from, to) < 0 ^ direction > 0) do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
        while ((a = (a + direction + 4) % 4) !== a1);
        else stream.point(to[0], to[1]);
    }
    function corner(p, direction) {
        return (0, $5jMPm.abs)(p[0] - x0) < (0, $5jMPm.epsilon) ? direction > 0 ? 0 : 3 : (0, $5jMPm.abs)(p[0] - x1) < (0, $5jMPm.epsilon) ? direction > 0 ? 2 : 1 : (0, $5jMPm.abs)(p[1] - y0) < (0, $5jMPm.epsilon) ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
    }
    function compareIntersection(a, b) {
        return comparePoint(a.x, b.x);
    }
    function comparePoint(a, b) {
        var ca = corner(a, 1), cb = corner(b, 1);
        return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
    }
    return function(stream) {
        var activeStream = stream, bufferStream = (0, $gyzSp.default)(), segments, polygon, ring, x__, y__, v__, x_, y_, v_, first, clean;
        var clipStream = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: polygonStart,
            polygonEnd: polygonEnd
        };
        function point(x, y) {
            if (visible(x, y)) activeStream.point(x, y);
        }
        function polygonInside() {
            var winding = 0;
            for(var i = 0, n = polygon.length; i < n; ++i)for(var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j){
                a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
                if (a1 <= y1) {
                    if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding;
                } else if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding;
            }
            return winding;
        }
        // Buffer geometry within a polygon and then clip it en masse.
        function polygonStart() {
            activeStream = bufferStream, segments = [], polygon = [], clean = true;
        }
        function polygonEnd() {
            var startInside = polygonInside(), cleanInside = clean && startInside, visible = (segments = (0, $9RpEG.default)(segments)).length;
            if (cleanInside || visible) {
                stream.polygonStart();
                if (cleanInside) {
                    stream.lineStart();
                    interpolate(null, null, 1, stream);
                    stream.lineEnd();
                }
                if (visible) (0, $lgxPX.default)(segments, compareIntersection, startInside, interpolate, stream);
                stream.polygonEnd();
            }
            activeStream = stream, segments = polygon = ring = null;
        }
        function lineStart() {
            clipStream.point = linePoint;
            if (polygon) polygon.push(ring = []);
            first = true;
            v_ = false;
            x_ = y_ = NaN;
        }
        // TODO rather than special-case polygons, simply handle them separately.
        // Ideally, coincident intersection points should be jittered to avoid
        // clipping issues.
        function lineEnd() {
            if (segments) {
                linePoint(x__, y__);
                if (v__ && v_) bufferStream.rejoin();
                segments.push(bufferStream.result());
            }
            clipStream.point = point;
            if (v_) activeStream.lineEnd();
        }
        function linePoint(x, y) {
            var v = visible(x, y);
            if (polygon) ring.push([
                x,
                y
            ]);
            if (first) {
                x__ = x, y__ = y, v__ = v;
                first = false;
                if (v) {
                    activeStream.lineStart();
                    activeStream.point(x, y);
                }
            } else if (v && v_) activeStream.point(x, y);
            else {
                var a = [
                    x_ = Math.max($6ac5105dc21fa683$var$clipMin, Math.min($6ac5105dc21fa683$var$clipMax, x_)),
                    y_ = Math.max($6ac5105dc21fa683$var$clipMin, Math.min($6ac5105dc21fa683$var$clipMax, y_))
                ], b = [
                    x = Math.max($6ac5105dc21fa683$var$clipMin, Math.min($6ac5105dc21fa683$var$clipMax, x)),
                    y = Math.max($6ac5105dc21fa683$var$clipMin, Math.min($6ac5105dc21fa683$var$clipMax, y))
                ];
                if ((0, $7fXMe.default)(a, b, x0, y0, x1, y1)) {
                    if (!v_) {
                        activeStream.lineStart();
                        activeStream.point(a[0], a[1]);
                    }
                    activeStream.point(b[0], b[1]);
                    if (!v) activeStream.lineEnd();
                    clean = false;
                } else if (v) {
                    activeStream.lineStart();
                    activeStream.point(x, y);
                    clean = false;
                }
            }
            x_ = x, y_ = y, v_ = v;
        }
        return clipStream;
    };
}

});
parcelRegister("7fXMe", function(module, exports) {

$parcel$export(module.exports, "default", () => $54884d92d546f9c3$export$2e2bcd8739ae039);
function $54884d92d546f9c3$export$2e2bcd8739ae039(a, b, x0, y0, x1, y1) {
    var ax = a[0], ay = a[1], bx = b[0], by = b[1], t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
    r = x0 - ax;
    if (!dx && r > 0) return;
    r /= dx;
    if (dx < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
    } else if (dx > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
    }
    r = x1 - ax;
    if (!dx && r < 0) return;
    r /= dx;
    if (dx < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
    } else if (dx > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
    }
    r = y0 - ay;
    if (!dy && r > 0) return;
    r /= dy;
    if (dy < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
    } else if (dy > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
    }
    r = y1 - ay;
    if (!dy && r < 0) return;
    r /= dy;
    if (dy < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
    } else if (dy > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
    }
    if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
    if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
    return true;
}

});



parcelRegister("a9KKM", function(module, exports) {

$parcel$export(module.exports, "default", () => $764f02e86fd48911$export$2e2bcd8739ae039);

var $iRpoL = parcelRequire("iRpoL");

var $535OD = parcelRequire("535OD");

var $5jMPm = parcelRequire("5jMPm");
var $764f02e86fd48911$var$containsObjectType = {
    Feature: function(object, point) {
        return $764f02e86fd48911$var$containsGeometry(object.geometry, point);
    },
    FeatureCollection: function(object, point) {
        var features = object.features, i = -1, n = features.length;
        while(++i < n)if ($764f02e86fd48911$var$containsGeometry(features[i].geometry, point)) return true;
        return false;
    }
};
var $764f02e86fd48911$var$containsGeometryType = {
    Sphere: function() {
        return true;
    },
    Point: function(object, point) {
        return $764f02e86fd48911$var$containsPoint(object.coordinates, point);
    },
    MultiPoint: function(object, point) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)if ($764f02e86fd48911$var$containsPoint(coordinates[i], point)) return true;
        return false;
    },
    LineString: function(object, point) {
        return $764f02e86fd48911$var$containsLine(object.coordinates, point);
    },
    MultiLineString: function(object, point) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)if ($764f02e86fd48911$var$containsLine(coordinates[i], point)) return true;
        return false;
    },
    Polygon: function(object, point) {
        return $764f02e86fd48911$var$containsPolygon(object.coordinates, point);
    },
    MultiPolygon: function(object, point) {
        var coordinates = object.coordinates, i = -1, n = coordinates.length;
        while(++i < n)if ($764f02e86fd48911$var$containsPolygon(coordinates[i], point)) return true;
        return false;
    },
    GeometryCollection: function(object, point) {
        var geometries = object.geometries, i = -1, n = geometries.length;
        while(++i < n)if ($764f02e86fd48911$var$containsGeometry(geometries[i], point)) return true;
        return false;
    }
};
function $764f02e86fd48911$var$containsGeometry(geometry, point) {
    return geometry && $764f02e86fd48911$var$containsGeometryType.hasOwnProperty(geometry.type) ? $764f02e86fd48911$var$containsGeometryType[geometry.type](geometry, point) : false;
}
function $764f02e86fd48911$var$containsPoint(coordinates, point) {
    return (0, $535OD.default)(coordinates, point) === 0;
}
function $764f02e86fd48911$var$containsLine(coordinates, point) {
    var ao, bo, ab;
    for(var i = 0, n = coordinates.length; i < n; i++){
        bo = (0, $535OD.default)(coordinates[i], point);
        if (bo === 0) return true;
        if (i > 0) {
            ab = (0, $535OD.default)(coordinates[i], coordinates[i - 1]);
            if (ab > 0 && ao <= ab && bo <= ab && (ao + bo - ab) * (1 - Math.pow((ao - bo) / ab, 2)) < (0, $5jMPm.epsilon2) * ab) return true;
        }
        ao = bo;
    }
    return false;
}
function $764f02e86fd48911$var$containsPolygon(coordinates, point) {
    return !!(0, $iRpoL.default)(coordinates.map($764f02e86fd48911$var$ringRadians), $764f02e86fd48911$var$pointRadians(point));
}
function $764f02e86fd48911$var$ringRadians(ring) {
    return ring = ring.map($764f02e86fd48911$var$pointRadians), ring.pop(), ring;
}
function $764f02e86fd48911$var$pointRadians(point) {
    return [
        point[0] * (0, $5jMPm.radians),
        point[1] * (0, $5jMPm.radians)
    ];
}
function $764f02e86fd48911$export$2e2bcd8739ae039(object, point) {
    return (object && $764f02e86fd48911$var$containsObjectType.hasOwnProperty(object.type) ? $764f02e86fd48911$var$containsObjectType[object.type] : $764f02e86fd48911$var$containsGeometry)(object, point);
}

});
parcelRegister("535OD", function(module, exports) {

$parcel$export(module.exports, "default", () => $3ad1be69cf0917bc$export$2e2bcd8739ae039);

var $lKSZ1 = parcelRequire("lKSZ1");
var $3ad1be69cf0917bc$var$coordinates = [
    null,
    null
], $3ad1be69cf0917bc$var$object = {
    type: "LineString",
    coordinates: $3ad1be69cf0917bc$var$coordinates
};
function $3ad1be69cf0917bc$export$2e2bcd8739ae039(a, b) {
    $3ad1be69cf0917bc$var$coordinates[0] = a;
    $3ad1be69cf0917bc$var$coordinates[1] = b;
    return (0, $lKSZ1.default)($3ad1be69cf0917bc$var$object);
}

});
parcelRegister("lKSZ1", function(module, exports) {

$parcel$export(module.exports, "default", () => $fd688b650128aace$export$2e2bcd8739ae039);

var $8UK3C = parcelRequire("8UK3C");

var $5jMPm = parcelRequire("5jMPm");

var $jJAH0 = parcelRequire("jJAH0");

var $e0paR = parcelRequire("e0paR");
var $fd688b650128aace$var$lengthSum = (0, $8UK3C.default)(), $fd688b650128aace$var$lambda0, $fd688b650128aace$var$sinPhi0, $fd688b650128aace$var$cosPhi0;
var $fd688b650128aace$var$lengthStream = {
    sphere: (0, $jJAH0.default),
    point: (0, $jJAH0.default),
    lineStart: $fd688b650128aace$var$lengthLineStart,
    lineEnd: (0, $jJAH0.default),
    polygonStart: (0, $jJAH0.default),
    polygonEnd: (0, $jJAH0.default)
};
function $fd688b650128aace$var$lengthLineStart() {
    $fd688b650128aace$var$lengthStream.point = $fd688b650128aace$var$lengthPointFirst;
    $fd688b650128aace$var$lengthStream.lineEnd = $fd688b650128aace$var$lengthLineEnd;
}
function $fd688b650128aace$var$lengthLineEnd() {
    $fd688b650128aace$var$lengthStream.point = $fd688b650128aace$var$lengthStream.lineEnd = (0, $jJAH0.default);
}
function $fd688b650128aace$var$lengthPointFirst(lambda, phi) {
    lambda *= (0, $5jMPm.radians), phi *= (0, $5jMPm.radians);
    $fd688b650128aace$var$lambda0 = lambda, $fd688b650128aace$var$sinPhi0 = (0, $5jMPm.sin)(phi), $fd688b650128aace$var$cosPhi0 = (0, $5jMPm.cos)(phi);
    $fd688b650128aace$var$lengthStream.point = $fd688b650128aace$var$lengthPoint;
}
function $fd688b650128aace$var$lengthPoint(lambda, phi) {
    lambda *= (0, $5jMPm.radians), phi *= (0, $5jMPm.radians);
    var sinPhi = (0, $5jMPm.sin)(phi), cosPhi = (0, $5jMPm.cos)(phi), delta = (0, $5jMPm.abs)(lambda - $fd688b650128aace$var$lambda0), cosDelta = (0, $5jMPm.cos)(delta), sinDelta = (0, $5jMPm.sin)(delta), x = cosPhi * sinDelta, y = $fd688b650128aace$var$cosPhi0 * sinPhi - $fd688b650128aace$var$sinPhi0 * cosPhi * cosDelta, z = $fd688b650128aace$var$sinPhi0 * sinPhi + $fd688b650128aace$var$cosPhi0 * cosPhi * cosDelta;
    $fd688b650128aace$var$lengthSum.add((0, $5jMPm.atan2)((0, $5jMPm.sqrt)(x * x + y * y), z));
    $fd688b650128aace$var$lambda0 = lambda, $fd688b650128aace$var$sinPhi0 = sinPhi, $fd688b650128aace$var$cosPhi0 = cosPhi;
}
function $fd688b650128aace$export$2e2bcd8739ae039(object) {
    $fd688b650128aace$var$lengthSum.reset();
    (0, $e0paR.default)(object, $fd688b650128aace$var$lengthStream);
    return +$fd688b650128aace$var$lengthSum;
}

});



parcelRegister("knUx1", function(module, exports) {

$parcel$export(module.exports, "default", () => $ed71ce9e9ecfdb72$export$2e2bcd8739ae039);
$parcel$export(module.exports, "graticule10", () => $ed71ce9e9ecfdb72$export$b8db4e9403a5b6f1);
parcelRequire("ap1W6");
var $5Cu7w = parcelRequire("5Cu7w");

var $5jMPm = parcelRequire("5jMPm");
function $ed71ce9e9ecfdb72$var$graticuleX(y0, y1, dy) {
    var y = (0, $5Cu7w.default)(y0, y1 - (0, $5jMPm.epsilon), dy).concat(y1);
    return function(x) {
        return y.map(function(y) {
            return [
                x,
                y
            ];
        });
    };
}
function $ed71ce9e9ecfdb72$var$graticuleY(x0, x1, dx) {
    var x = (0, $5Cu7w.default)(x0, x1 - (0, $5jMPm.epsilon), dx).concat(x1);
    return function(y) {
        return x.map(function(x) {
            return [
                x,
                y
            ];
        });
    };
}
function $ed71ce9e9ecfdb72$export$2e2bcd8739ae039() {
    var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
    function graticule() {
        return {
            type: "MultiLineString",
            coordinates: lines()
        };
    }
    function lines() {
        return (0, $5Cu7w.default)((0, $5jMPm.ceil)(X0 / DX) * DX, X1, DX).map(X).concat((0, $5Cu7w.default)((0, $5jMPm.ceil)(Y0 / DY) * DY, Y1, DY).map(Y)).concat((0, $5Cu7w.default)((0, $5jMPm.ceil)(x0 / dx) * dx, x1, dx).filter(function(x) {
            return (0, $5jMPm.abs)(x % DX) > (0, $5jMPm.epsilon);
        }).map(x)).concat((0, $5Cu7w.default)((0, $5jMPm.ceil)(y0 / dy) * dy, y1, dy).filter(function(y) {
            return (0, $5jMPm.abs)(y % DY) > (0, $5jMPm.epsilon);
        }).map(y));
    }
    graticule.lines = function() {
        return lines().map(function(coordinates) {
            return {
                type: "LineString",
                coordinates: coordinates
            };
        });
    };
    graticule.outline = function() {
        return {
            type: "Polygon",
            coordinates: [
                X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1))
            ]
        };
    };
    graticule.extent = function(_) {
        if (!arguments.length) return graticule.extentMinor();
        return graticule.extentMajor(_).extentMinor(_);
    };
    graticule.extentMajor = function(_) {
        if (!arguments.length) return [
            [
                X0,
                Y0
            ],
            [
                X1,
                Y1
            ]
        ];
        X0 = +_[0][0], X1 = +_[1][0];
        Y0 = +_[0][1], Y1 = +_[1][1];
        if (X0 > X1) _ = X0, X0 = X1, X1 = _;
        if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
        return graticule.precision(precision);
    };
    graticule.extentMinor = function(_) {
        if (!arguments.length) return [
            [
                x0,
                y0
            ],
            [
                x1,
                y1
            ]
        ];
        x0 = +_[0][0], x1 = +_[1][0];
        y0 = +_[0][1], y1 = +_[1][1];
        if (x0 > x1) _ = x0, x0 = x1, x1 = _;
        if (y0 > y1) _ = y0, y0 = y1, y1 = _;
        return graticule.precision(precision);
    };
    graticule.step = function(_) {
        if (!arguments.length) return graticule.stepMinor();
        return graticule.stepMajor(_).stepMinor(_);
    };
    graticule.stepMajor = function(_) {
        if (!arguments.length) return [
            DX,
            DY
        ];
        DX = +_[0], DY = +_[1];
        return graticule;
    };
    graticule.stepMinor = function(_) {
        if (!arguments.length) return [
            dx,
            dy
        ];
        dx = +_[0], dy = +_[1];
        return graticule;
    };
    graticule.precision = function(_) {
        if (!arguments.length) return precision;
        precision = +_;
        x = $ed71ce9e9ecfdb72$var$graticuleX(y0, y1, 90);
        y = $ed71ce9e9ecfdb72$var$graticuleY(x0, x1, precision);
        X = $ed71ce9e9ecfdb72$var$graticuleX(Y0, Y1, 90);
        Y = $ed71ce9e9ecfdb72$var$graticuleY(X0, X1, precision);
        return graticule;
    };
    return graticule.extentMajor([
        [
            -180,
            -90 + (0, $5jMPm.epsilon)
        ],
        [
            180,
            90 - (0, $5jMPm.epsilon)
        ]
    ]).extentMinor([
        [
            -180,
            -80 - (0, $5jMPm.epsilon)
        ],
        [
            180,
            80 + (0, $5jMPm.epsilon)
        ]
    ]);
}
function $ed71ce9e9ecfdb72$export$b8db4e9403a5b6f1() {
    return $ed71ce9e9ecfdb72$export$2e2bcd8739ae039()();
}

});

parcelRegister("1dxap", function(module, exports) {

$parcel$export(module.exports, "default", () => $0e30bb987d7b58e4$export$2e2bcd8739ae039);

var $5jMPm = parcelRequire("5jMPm");
function $0e30bb987d7b58e4$export$2e2bcd8739ae039(a, b) {
    var x0 = a[0] * (0, $5jMPm.radians), y0 = a[1] * (0, $5jMPm.radians), x1 = b[0] * (0, $5jMPm.radians), y1 = b[1] * (0, $5jMPm.radians), cy0 = (0, $5jMPm.cos)(y0), sy0 = (0, $5jMPm.sin)(y0), cy1 = (0, $5jMPm.cos)(y1), sy1 = (0, $5jMPm.sin)(y1), kx0 = cy0 * (0, $5jMPm.cos)(x0), ky0 = cy0 * (0, $5jMPm.sin)(x0), kx1 = cy1 * (0, $5jMPm.cos)(x1), ky1 = cy1 * (0, $5jMPm.sin)(x1), d = 2 * (0, $5jMPm.asin)((0, $5jMPm.sqrt)((0, $5jMPm.haversin)(y1 - y0) + cy0 * cy1 * (0, $5jMPm.haversin)(x1 - x0))), k = (0, $5jMPm.sin)(d);
    var interpolate = d ? function(t) {
        var B = (0, $5jMPm.sin)(t *= d) / k, A = (0, $5jMPm.sin)(d - t) / k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
        return [
            (0, $5jMPm.atan2)(y, x) * (0, $5jMPm.degrees),
            (0, $5jMPm.atan2)(z, (0, $5jMPm.sqrt)(x * x + y * y)) * (0, $5jMPm.degrees)
        ];
    } : function() {
        return [
            x0 * (0, $5jMPm.degrees),
            y0 * (0, $5jMPm.degrees)
        ];
    };
    interpolate.distance = d;
    return interpolate;
}

});

parcelRegister("5hj15", function(module, exports) {

$parcel$export(module.exports, "default", () => $3d7d4a934db9bb47$export$2e2bcd8739ae039);

var $408fg = parcelRequire("408fg");

var $e0paR = parcelRequire("e0paR");

var $81NSF = parcelRequire("81NSF");

var $eEc44 = parcelRequire("eEc44");

var $bIeWk = parcelRequire("bIeWk");

var $hbB34 = parcelRequire("hbB34");

var $5WjNs = parcelRequire("5WjNs");

var $eaGCl = parcelRequire("eaGCl");
function $3d7d4a934db9bb47$export$2e2bcd8739ae039(projection, context) {
    var pointRadius = 4.5, projectionStream, contextStream;
    function path(object) {
        if (object) {
            if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
            (0, $e0paR.default)(object, projectionStream(contextStream));
        }
        return contextStream.result();
    }
    path.area = function(object) {
        (0, $e0paR.default)(object, projectionStream((0, $81NSF.default)));
        return (0, $81NSF.default).result();
    };
    path.measure = function(object) {
        (0, $e0paR.default)(object, projectionStream((0, $5WjNs.default)));
        return (0, $5WjNs.default).result();
    };
    path.bounds = function(object) {
        (0, $e0paR.default)(object, projectionStream((0, $eEc44.default)));
        return (0, $eEc44.default).result();
    };
    path.centroid = function(object) {
        (0, $e0paR.default)(object, projectionStream((0, $bIeWk.default)));
        return (0, $bIeWk.default).result();
    };
    path.projection = function(_) {
        return arguments.length ? (projectionStream = _ == null ? (projection = null, $408fg.default) : (projection = _).stream, path) : projection;
    };
    path.context = function(_) {
        if (!arguments.length) return context;
        contextStream = _ == null ? (context = null, new (0, $eaGCl.default)) : new (0, $hbB34.default)(context = _);
        if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
        return path;
    };
    path.pointRadius = function(_) {
        if (!arguments.length) return pointRadius;
        pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
        return path;
    };
    return path.projection(projection).context(context);
}

});
parcelRegister("408fg", function(module, exports) {

$parcel$export(module.exports, "default", () => $2e9d8ed4527e5f74$export$2e2bcd8739ae039);
function $2e9d8ed4527e5f74$export$2e2bcd8739ae039(x) {
    return x;
}

});

parcelRegister("81NSF", function(module, exports) {

$parcel$export(module.exports, "default", () => $5d851bfb30a83272$export$2e2bcd8739ae039);

var $8UK3C = parcelRequire("8UK3C");

var $5jMPm = parcelRequire("5jMPm");

var $jJAH0 = parcelRequire("jJAH0");
var $5d851bfb30a83272$var$areaSum = (0, $8UK3C.default)(), $5d851bfb30a83272$var$areaRingSum = (0, $8UK3C.default)(), $5d851bfb30a83272$var$x00, $5d851bfb30a83272$var$y00, $5d851bfb30a83272$var$x0, $5d851bfb30a83272$var$y0;
var $5d851bfb30a83272$var$areaStream = {
    point: (0, $jJAH0.default),
    lineStart: (0, $jJAH0.default),
    lineEnd: (0, $jJAH0.default),
    polygonStart: function() {
        $5d851bfb30a83272$var$areaStream.lineStart = $5d851bfb30a83272$var$areaRingStart;
        $5d851bfb30a83272$var$areaStream.lineEnd = $5d851bfb30a83272$var$areaRingEnd;
    },
    polygonEnd: function() {
        $5d851bfb30a83272$var$areaStream.lineStart = $5d851bfb30a83272$var$areaStream.lineEnd = $5d851bfb30a83272$var$areaStream.point = (0, $jJAH0.default);
        $5d851bfb30a83272$var$areaSum.add((0, $5jMPm.abs)($5d851bfb30a83272$var$areaRingSum));
        $5d851bfb30a83272$var$areaRingSum.reset();
    },
    result: function() {
        var area = $5d851bfb30a83272$var$areaSum / 2;
        $5d851bfb30a83272$var$areaSum.reset();
        return area;
    }
};
function $5d851bfb30a83272$var$areaRingStart() {
    $5d851bfb30a83272$var$areaStream.point = $5d851bfb30a83272$var$areaPointFirst;
}
function $5d851bfb30a83272$var$areaPointFirst(x, y) {
    $5d851bfb30a83272$var$areaStream.point = $5d851bfb30a83272$var$areaPoint;
    $5d851bfb30a83272$var$x00 = $5d851bfb30a83272$var$x0 = x, $5d851bfb30a83272$var$y00 = $5d851bfb30a83272$var$y0 = y;
}
function $5d851bfb30a83272$var$areaPoint(x, y) {
    $5d851bfb30a83272$var$areaRingSum.add($5d851bfb30a83272$var$y0 * x - $5d851bfb30a83272$var$x0 * y);
    $5d851bfb30a83272$var$x0 = x, $5d851bfb30a83272$var$y0 = y;
}
function $5d851bfb30a83272$var$areaRingEnd() {
    $5d851bfb30a83272$var$areaPoint($5d851bfb30a83272$var$x00, $5d851bfb30a83272$var$y00);
}
var $5d851bfb30a83272$export$2e2bcd8739ae039 = $5d851bfb30a83272$var$areaStream;

});

parcelRegister("eEc44", function(module, exports) {

$parcel$export(module.exports, "default", () => $aa9e28e2a952b64c$export$2e2bcd8739ae039);

var $jJAH0 = parcelRequire("jJAH0");
var $aa9e28e2a952b64c$var$x0 = Infinity, $aa9e28e2a952b64c$var$y0 = $aa9e28e2a952b64c$var$x0, $aa9e28e2a952b64c$var$x1 = -$aa9e28e2a952b64c$var$x0, $aa9e28e2a952b64c$var$y1 = $aa9e28e2a952b64c$var$x1;
var $aa9e28e2a952b64c$var$boundsStream = {
    point: $aa9e28e2a952b64c$var$boundsPoint,
    lineStart: (0, $jJAH0.default),
    lineEnd: (0, $jJAH0.default),
    polygonStart: (0, $jJAH0.default),
    polygonEnd: (0, $jJAH0.default),
    result: function() {
        var bounds = [
            [
                $aa9e28e2a952b64c$var$x0,
                $aa9e28e2a952b64c$var$y0
            ],
            [
                $aa9e28e2a952b64c$var$x1,
                $aa9e28e2a952b64c$var$y1
            ]
        ];
        $aa9e28e2a952b64c$var$x1 = $aa9e28e2a952b64c$var$y1 = -($aa9e28e2a952b64c$var$y0 = $aa9e28e2a952b64c$var$x0 = Infinity);
        return bounds;
    }
};
function $aa9e28e2a952b64c$var$boundsPoint(x, y) {
    if (x < $aa9e28e2a952b64c$var$x0) $aa9e28e2a952b64c$var$x0 = x;
    if (x > $aa9e28e2a952b64c$var$x1) $aa9e28e2a952b64c$var$x1 = x;
    if (y < $aa9e28e2a952b64c$var$y0) $aa9e28e2a952b64c$var$y0 = y;
    if (y > $aa9e28e2a952b64c$var$y1) $aa9e28e2a952b64c$var$y1 = y;
}
var $aa9e28e2a952b64c$export$2e2bcd8739ae039 = $aa9e28e2a952b64c$var$boundsStream;

});

parcelRegister("bIeWk", function(module, exports) {

$parcel$export(module.exports, "default", () => $886f64821cb112ec$export$2e2bcd8739ae039);

var $5jMPm = parcelRequire("5jMPm");
// TODO Enforce positive area for exterior, negative area for interior?
var $886f64821cb112ec$var$X0 = 0, $886f64821cb112ec$var$Y0 = 0, $886f64821cb112ec$var$Z0 = 0, $886f64821cb112ec$var$X1 = 0, $886f64821cb112ec$var$Y1 = 0, $886f64821cb112ec$var$Z1 = 0, $886f64821cb112ec$var$X2 = 0, $886f64821cb112ec$var$Y2 = 0, $886f64821cb112ec$var$Z2 = 0, $886f64821cb112ec$var$x00, $886f64821cb112ec$var$y00, $886f64821cb112ec$var$x0, $886f64821cb112ec$var$y0;
var $886f64821cb112ec$var$centroidStream = {
    point: $886f64821cb112ec$var$centroidPoint,
    lineStart: $886f64821cb112ec$var$centroidLineStart,
    lineEnd: $886f64821cb112ec$var$centroidLineEnd,
    polygonStart: function() {
        $886f64821cb112ec$var$centroidStream.lineStart = $886f64821cb112ec$var$centroidRingStart;
        $886f64821cb112ec$var$centroidStream.lineEnd = $886f64821cb112ec$var$centroidRingEnd;
    },
    polygonEnd: function() {
        $886f64821cb112ec$var$centroidStream.point = $886f64821cb112ec$var$centroidPoint;
        $886f64821cb112ec$var$centroidStream.lineStart = $886f64821cb112ec$var$centroidLineStart;
        $886f64821cb112ec$var$centroidStream.lineEnd = $886f64821cb112ec$var$centroidLineEnd;
    },
    result: function() {
        var centroid = $886f64821cb112ec$var$Z2 ? [
            $886f64821cb112ec$var$X2 / $886f64821cb112ec$var$Z2,
            $886f64821cb112ec$var$Y2 / $886f64821cb112ec$var$Z2
        ] : $886f64821cb112ec$var$Z1 ? [
            $886f64821cb112ec$var$X1 / $886f64821cb112ec$var$Z1,
            $886f64821cb112ec$var$Y1 / $886f64821cb112ec$var$Z1
        ] : $886f64821cb112ec$var$Z0 ? [
            $886f64821cb112ec$var$X0 / $886f64821cb112ec$var$Z0,
            $886f64821cb112ec$var$Y0 / $886f64821cb112ec$var$Z0
        ] : [
            NaN,
            NaN
        ];
        $886f64821cb112ec$var$X0 = $886f64821cb112ec$var$Y0 = $886f64821cb112ec$var$Z0 = $886f64821cb112ec$var$X1 = $886f64821cb112ec$var$Y1 = $886f64821cb112ec$var$Z1 = $886f64821cb112ec$var$X2 = $886f64821cb112ec$var$Y2 = $886f64821cb112ec$var$Z2 = 0;
        return centroid;
    }
};
function $886f64821cb112ec$var$centroidPoint(x, y) {
    $886f64821cb112ec$var$X0 += x;
    $886f64821cb112ec$var$Y0 += y;
    ++$886f64821cb112ec$var$Z0;
}
function $886f64821cb112ec$var$centroidLineStart() {
    $886f64821cb112ec$var$centroidStream.point = $886f64821cb112ec$var$centroidPointFirstLine;
}
function $886f64821cb112ec$var$centroidPointFirstLine(x, y) {
    $886f64821cb112ec$var$centroidStream.point = $886f64821cb112ec$var$centroidPointLine;
    $886f64821cb112ec$var$centroidPoint($886f64821cb112ec$var$x0 = x, $886f64821cb112ec$var$y0 = y);
}
function $886f64821cb112ec$var$centroidPointLine(x, y) {
    var dx = x - $886f64821cb112ec$var$x0, dy = y - $886f64821cb112ec$var$y0, z = (0, $5jMPm.sqrt)(dx * dx + dy * dy);
    $886f64821cb112ec$var$X1 += z * ($886f64821cb112ec$var$x0 + x) / 2;
    $886f64821cb112ec$var$Y1 += z * ($886f64821cb112ec$var$y0 + y) / 2;
    $886f64821cb112ec$var$Z1 += z;
    $886f64821cb112ec$var$centroidPoint($886f64821cb112ec$var$x0 = x, $886f64821cb112ec$var$y0 = y);
}
function $886f64821cb112ec$var$centroidLineEnd() {
    $886f64821cb112ec$var$centroidStream.point = $886f64821cb112ec$var$centroidPoint;
}
function $886f64821cb112ec$var$centroidRingStart() {
    $886f64821cb112ec$var$centroidStream.point = $886f64821cb112ec$var$centroidPointFirstRing;
}
function $886f64821cb112ec$var$centroidRingEnd() {
    $886f64821cb112ec$var$centroidPointRing($886f64821cb112ec$var$x00, $886f64821cb112ec$var$y00);
}
function $886f64821cb112ec$var$centroidPointFirstRing(x, y) {
    $886f64821cb112ec$var$centroidStream.point = $886f64821cb112ec$var$centroidPointRing;
    $886f64821cb112ec$var$centroidPoint($886f64821cb112ec$var$x00 = $886f64821cb112ec$var$x0 = x, $886f64821cb112ec$var$y00 = $886f64821cb112ec$var$y0 = y);
}
function $886f64821cb112ec$var$centroidPointRing(x, y) {
    var dx = x - $886f64821cb112ec$var$x0, dy = y - $886f64821cb112ec$var$y0, z = (0, $5jMPm.sqrt)(dx * dx + dy * dy);
    $886f64821cb112ec$var$X1 += z * ($886f64821cb112ec$var$x0 + x) / 2;
    $886f64821cb112ec$var$Y1 += z * ($886f64821cb112ec$var$y0 + y) / 2;
    $886f64821cb112ec$var$Z1 += z;
    z = $886f64821cb112ec$var$y0 * x - $886f64821cb112ec$var$x0 * y;
    $886f64821cb112ec$var$X2 += z * ($886f64821cb112ec$var$x0 + x);
    $886f64821cb112ec$var$Y2 += z * ($886f64821cb112ec$var$y0 + y);
    $886f64821cb112ec$var$Z2 += z * 3;
    $886f64821cb112ec$var$centroidPoint($886f64821cb112ec$var$x0 = x, $886f64821cb112ec$var$y0 = y);
}
var $886f64821cb112ec$export$2e2bcd8739ae039 = $886f64821cb112ec$var$centroidStream;

});

parcelRegister("hbB34", function(module, exports) {

$parcel$export(module.exports, "default", () => $c83033cf6f929cf9$export$2e2bcd8739ae039);

var $5jMPm = parcelRequire("5jMPm");

var $jJAH0 = parcelRequire("jJAH0");
function $c83033cf6f929cf9$export$2e2bcd8739ae039(context) {
    this._context = context;
}
$c83033cf6f929cf9$export$2e2bcd8739ae039.prototype = {
    _radius: 4.5,
    pointRadius: function(_) {
        return this._radius = _, this;
    },
    polygonStart: function() {
        this._line = 0;
    },
    polygonEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._point = 0;
    },
    lineEnd: function() {
        if (this._line === 0) this._context.closePath();
        this._point = NaN;
    },
    point: function(x, y) {
        switch(this._point){
            case 0:
                this._context.moveTo(x, y);
                this._point = 1;
                break;
            case 1:
                this._context.lineTo(x, y);
                break;
            default:
                this._context.moveTo(x + this._radius, y);
                this._context.arc(x, y, this._radius, 0, (0, $5jMPm.tau));
                break;
        }
    },
    result: (0, $jJAH0.default)
};

});

parcelRegister("5WjNs", function(module, exports) {

$parcel$export(module.exports, "default", () => $4531b9b88da4a3a6$export$2e2bcd8739ae039);

var $8UK3C = parcelRequire("8UK3C");

var $5jMPm = parcelRequire("5jMPm");

var $jJAH0 = parcelRequire("jJAH0");
var $4531b9b88da4a3a6$var$lengthSum = (0, $8UK3C.default)(), $4531b9b88da4a3a6$var$lengthRing, $4531b9b88da4a3a6$var$x00, $4531b9b88da4a3a6$var$y00, $4531b9b88da4a3a6$var$x0, $4531b9b88da4a3a6$var$y0;
var $4531b9b88da4a3a6$var$lengthStream = {
    point: (0, $jJAH0.default),
    lineStart: function() {
        $4531b9b88da4a3a6$var$lengthStream.point = $4531b9b88da4a3a6$var$lengthPointFirst;
    },
    lineEnd: function() {
        if ($4531b9b88da4a3a6$var$lengthRing) $4531b9b88da4a3a6$var$lengthPoint($4531b9b88da4a3a6$var$x00, $4531b9b88da4a3a6$var$y00);
        $4531b9b88da4a3a6$var$lengthStream.point = (0, $jJAH0.default);
    },
    polygonStart: function() {
        $4531b9b88da4a3a6$var$lengthRing = true;
    },
    polygonEnd: function() {
        $4531b9b88da4a3a6$var$lengthRing = null;
    },
    result: function() {
        var length = +$4531b9b88da4a3a6$var$lengthSum;
        $4531b9b88da4a3a6$var$lengthSum.reset();
        return length;
    }
};
function $4531b9b88da4a3a6$var$lengthPointFirst(x, y) {
    $4531b9b88da4a3a6$var$lengthStream.point = $4531b9b88da4a3a6$var$lengthPoint;
    $4531b9b88da4a3a6$var$x00 = $4531b9b88da4a3a6$var$x0 = x, $4531b9b88da4a3a6$var$y00 = $4531b9b88da4a3a6$var$y0 = y;
}
function $4531b9b88da4a3a6$var$lengthPoint(x, y) {
    $4531b9b88da4a3a6$var$x0 -= x, $4531b9b88da4a3a6$var$y0 -= y;
    $4531b9b88da4a3a6$var$lengthSum.add((0, $5jMPm.sqrt)($4531b9b88da4a3a6$var$x0 * $4531b9b88da4a3a6$var$x0 + $4531b9b88da4a3a6$var$y0 * $4531b9b88da4a3a6$var$y0));
    $4531b9b88da4a3a6$var$x0 = x, $4531b9b88da4a3a6$var$y0 = y;
}
var $4531b9b88da4a3a6$export$2e2bcd8739ae039 = $4531b9b88da4a3a6$var$lengthStream;

});

parcelRegister("eaGCl", function(module, exports) {

$parcel$export(module.exports, "default", () => $a5130ec6f92323ab$export$2e2bcd8739ae039);
function $a5130ec6f92323ab$export$2e2bcd8739ae039() {
    this._string = [];
}
$a5130ec6f92323ab$export$2e2bcd8739ae039.prototype = {
    _radius: 4.5,
    _circle: $a5130ec6f92323ab$var$circle(4.5),
    pointRadius: function(_) {
        if ((_ = +_) !== this._radius) this._radius = _, this._circle = null;
        return this;
    },
    polygonStart: function() {
        this._line = 0;
    },
    polygonEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._point = 0;
    },
    lineEnd: function() {
        if (this._line === 0) this._string.push("Z");
        this._point = NaN;
    },
    point: function(x, y) {
        switch(this._point){
            case 0:
                this._string.push("M", x, ",", y);
                this._point = 1;
                break;
            case 1:
                this._string.push("L", x, ",", y);
                break;
            default:
                if (this._circle == null) this._circle = $a5130ec6f92323ab$var$circle(this._radius);
                this._string.push("M", x, ",", y, this._circle);
                break;
        }
    },
    result: function() {
        if (this._string.length) {
            var result = this._string.join("");
            this._string = [];
            return result;
        } else return null;
    }
};
function $a5130ec6f92323ab$var$circle(radius) {
    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
}

});


parcelRegister("6mXW6", function(module, exports) {

$parcel$export(module.exports, "default", () => $4a334a3eb9e26039$export$2e2bcd8739ae039);

var $lmVAz = parcelRequire("lmVAz");
function $4a334a3eb9e26039$export$2e2bcd8739ae039() {
    return (0, $lmVAz.default)().parallels([
        29.5,
        45.5
    ]).scale(1070).translate([
        480,
        250
    ]).rotate([
        96,
        0
    ]).center([
        -0.6,
        38.7
    ]);
}

});
parcelRegister("lmVAz", function(module, exports) {

$parcel$export(module.exports, "conicEqualAreaRaw", () => $f8e852f8baa43989$export$75409dad1c406288);
$parcel$export(module.exports, "default", () => $f8e852f8baa43989$export$2e2bcd8739ae039);

var $5jMPm = parcelRequire("5jMPm");

var $8KL43 = parcelRequire("8KL43");

var $cUpLj = parcelRequire("cUpLj");
function $f8e852f8baa43989$export$75409dad1c406288(y0, y1) {
    var sy0 = (0, $5jMPm.sin)(y0), n = (sy0 + (0, $5jMPm.sin)(y1)) / 2;
    // Are the parallels symmetrical around the Equator?
    if ((0, $5jMPm.abs)(n) < (0, $5jMPm.epsilon)) return (0, $cUpLj.cylindricalEqualAreaRaw)(y0);
    var c = 1 + sy0 * (2 * n - sy0), r0 = (0, $5jMPm.sqrt)(c) / n;
    function project(x, y) {
        var r = (0, $5jMPm.sqrt)(c - 2 * n * (0, $5jMPm.sin)(y)) / n;
        return [
            r * (0, $5jMPm.sin)(x *= n),
            r0 - r * (0, $5jMPm.cos)(x)
        ];
    }
    project.invert = function(x, y) {
        var r0y = r0 - y, l = (0, $5jMPm.atan2)(x, (0, $5jMPm.abs)(r0y)) * (0, $5jMPm.sign)(r0y);
        if (r0y * n < 0) l -= (0, $5jMPm.pi) * (0, $5jMPm.sign)(x) * (0, $5jMPm.sign)(r0y);
        return [
            l / n,
            (0, $5jMPm.asin)((c - (x * x + r0y * r0y) * n * n) / (2 * n))
        ];
    };
    return project;
}
function $f8e852f8baa43989$export$2e2bcd8739ae039() {
    return (0, $8KL43.conicProjection)($f8e852f8baa43989$export$75409dad1c406288).scale(155.424).center([
        0,
        33.6442
    ]);
}

});
parcelRegister("8KL43", function(module, exports) {

$parcel$export(module.exports, "conicProjection", () => $65f7209969396829$export$228272587c4d24d8);

var $5jMPm = parcelRequire("5jMPm");

var $g0Z1C = parcelRequire("g0Z1C");
function $65f7209969396829$export$228272587c4d24d8(projectAt) {
    var phi0 = 0, phi1 = (0, $5jMPm.pi) / 3, m = (0, $g0Z1C.projectionMutator)(projectAt), p = m(phi0, phi1);
    p.parallels = function(_) {
        return arguments.length ? m(phi0 = _[0] * (0, $5jMPm.radians), phi1 = _[1] * (0, $5jMPm.radians)) : [
            phi0 * (0, $5jMPm.degrees),
            phi1 * (0, $5jMPm.degrees)
        ];
    };
    return p;
}

});
parcelRegister("g0Z1C", function(module, exports) {

$parcel$export(module.exports, "default", () => $ba8bfbbce5f0f3b7$export$2e2bcd8739ae039);
$parcel$export(module.exports, "projectionMutator", () => $ba8bfbbce5f0f3b7$export$155d5a6fa6fddeba);

var $aAkke = parcelRequire("aAkke");

var $3Au9P = parcelRequire("3Au9P");

var $9akEc = parcelRequire("9akEc");

var $a8vPq = parcelRequire("a8vPq");

var $408fg = parcelRequire("408fg");

var $5jMPm = parcelRequire("5jMPm");

var $jRH68 = parcelRequire("jRH68");

var $9DYcM = parcelRequire("9DYcM");

var $cXGjO = parcelRequire("cXGjO");

var $eLoiv = parcelRequire("eLoiv");
var $ba8bfbbce5f0f3b7$var$transformRadians = (0, $9DYcM.transformer)({
    point: function(x, y) {
        this.stream.point(x * (0, $5jMPm.radians), y * (0, $5jMPm.radians));
    }
});
function $ba8bfbbce5f0f3b7$var$transformRotate(rotate) {
    return (0, $9DYcM.transformer)({
        point: function(x, y) {
            var r = rotate(x, y);
            return this.stream.point(r[0], r[1]);
        }
    });
}
function $ba8bfbbce5f0f3b7$var$scaleTranslate(k, dx, dy, sx, sy) {
    function transform(x, y) {
        x *= sx;
        y *= sy;
        return [
            dx + k * x,
            dy - k * y
        ];
    }
    transform.invert = function(x, y) {
        return [
            (x - dx) / k * sx,
            (dy - y) / k * sy
        ];
    };
    return transform;
}
function $ba8bfbbce5f0f3b7$var$scaleTranslateRotate(k, dx, dy, sx, sy, alpha) {
    var cosAlpha = (0, $5jMPm.cos)(alpha), sinAlpha = (0, $5jMPm.sin)(alpha), a = cosAlpha * k, b = sinAlpha * k, ai = cosAlpha / k, bi = sinAlpha / k, ci = (sinAlpha * dy - cosAlpha * dx) / k, fi = (sinAlpha * dx + cosAlpha * dy) / k;
    function transform(x, y) {
        x *= sx;
        y *= sy;
        return [
            a * x - b * y + dx,
            dy - b * x - a * y
        ];
    }
    transform.invert = function(x, y) {
        return [
            sx * (ai * x - bi * y + ci),
            sy * (fi - bi * x - ai * y)
        ];
    };
    return transform;
}
function $ba8bfbbce5f0f3b7$export$2e2bcd8739ae039(project) {
    return $ba8bfbbce5f0f3b7$export$155d5a6fa6fddeba(function() {
        return project;
    })();
}
function $ba8bfbbce5f0f3b7$export$155d5a6fa6fddeba(projectAt) {
    var project, k = 150, x = 480, y = 250, lambda = 0, phi = 0, deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, alpha = 0, sx = 1, sy = 1, theta = null, preclip = (0, $aAkke.default), x0 = null, y0, x1, y1, postclip = (0, $408fg.default), delta2 = 0.5, projectResample, projectTransform, projectRotateTransform, cache, cacheStream;
    function projection(point) {
        return projectRotateTransform(point[0] * (0, $5jMPm.radians), point[1] * (0, $5jMPm.radians));
    }
    function invert(point) {
        point = projectRotateTransform.invert(point[0], point[1]);
        return point && [
            point[0] * (0, $5jMPm.degrees),
            point[1] * (0, $5jMPm.degrees)
        ];
    }
    projection.stream = function(stream) {
        return cache && cacheStream === stream ? cache : cache = $ba8bfbbce5f0f3b7$var$transformRadians($ba8bfbbce5f0f3b7$var$transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
    };
    projection.preclip = function(_) {
        return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
    };
    projection.postclip = function(_) {
        return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    };
    projection.clipAngle = function(_) {
        return arguments.length ? (preclip = +_ ? (0, $3Au9P.default)(theta = _ * (0, $5jMPm.radians)) : (theta = null, $aAkke.default), reset()) : theta * (0, $5jMPm.degrees);
    };
    projection.clipExtent = function(_) {
        return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, $408fg.default) : (0, $9akEc.default)(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [
            [
                x0,
                y0
            ],
            [
                x1,
                y1
            ]
        ];
    };
    projection.scale = function(_) {
        return arguments.length ? (k = +_, recenter()) : k;
    };
    projection.translate = function(_) {
        return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [
            x,
            y
        ];
    };
    projection.center = function(_) {
        return arguments.length ? (lambda = _[0] % 360 * (0, $5jMPm.radians), phi = _[1] % 360 * (0, $5jMPm.radians), recenter()) : [
            lambda * (0, $5jMPm.degrees),
            phi * (0, $5jMPm.degrees)
        ];
    };
    projection.rotate = function(_) {
        return arguments.length ? (deltaLambda = _[0] % 360 * (0, $5jMPm.radians), deltaPhi = _[1] % 360 * (0, $5jMPm.radians), deltaGamma = _.length > 2 ? _[2] % 360 * (0, $5jMPm.radians) : 0, recenter()) : [
            deltaLambda * (0, $5jMPm.degrees),
            deltaPhi * (0, $5jMPm.degrees),
            deltaGamma * (0, $5jMPm.degrees)
        ];
    };
    projection.angle = function(_) {
        return arguments.length ? (alpha = _ % 360 * (0, $5jMPm.radians), recenter()) : alpha * (0, $5jMPm.degrees);
    };
    projection.reflectX = function(_) {
        return arguments.length ? (sx = _ ? -1 : 1, recenter()) : sx < 0;
    };
    projection.reflectY = function(_) {
        return arguments.length ? (sy = _ ? -1 : 1, recenter()) : sy < 0;
    };
    projection.precision = function(_) {
        return arguments.length ? (projectResample = (0, $eLoiv.default)(projectTransform, delta2 = _ * _), reset()) : (0, $5jMPm.sqrt)(delta2);
    };
    projection.fitExtent = function(extent, object) {
        return (0, $cXGjO.fitExtent)(projection, extent, object);
    };
    projection.fitSize = function(size, object) {
        return (0, $cXGjO.fitSize)(projection, size, object);
    };
    projection.fitWidth = function(width, object) {
        return (0, $cXGjO.fitWidth)(projection, width, object);
    };
    projection.fitHeight = function(height, object) {
        return (0, $cXGjO.fitHeight)(projection, height, object);
    };
    function recenter() {
        var center = $ba8bfbbce5f0f3b7$var$scaleTranslateRotate(k, 0, 0, sx, sy, alpha).apply(null, project(lambda, phi)), transform = (alpha ? $ba8bfbbce5f0f3b7$var$scaleTranslateRotate : $ba8bfbbce5f0f3b7$var$scaleTranslate)(k, x - center[0], y - center[1], sx, sy, alpha);
        rotate = (0, $jRH68.rotateRadians)(deltaLambda, deltaPhi, deltaGamma);
        projectTransform = (0, $a8vPq.default)(project, transform);
        projectRotateTransform = (0, $a8vPq.default)(rotate, projectTransform);
        projectResample = (0, $eLoiv.default)(projectTransform, delta2);
        return reset();
    }
    function reset() {
        cache = cacheStream = null;
        return projection;
    }
    return function() {
        project = projectAt.apply(this, arguments);
        projection.invert = project.invert && invert;
        return recenter();
    };
}

});
parcelRegister("9DYcM", function(module, exports) {

$parcel$export(module.exports, "default", () => $7056750adaa45e43$export$2e2bcd8739ae039);
$parcel$export(module.exports, "transformer", () => $7056750adaa45e43$export$6b468dcfb64c653c);
function $7056750adaa45e43$export$2e2bcd8739ae039(methods) {
    return {
        stream: $7056750adaa45e43$export$6b468dcfb64c653c(methods)
    };
}
function $7056750adaa45e43$export$6b468dcfb64c653c(methods) {
    return function(stream) {
        var s = new $7056750adaa45e43$var$TransformStream;
        for(var key in methods)s[key] = methods[key];
        s.stream = stream;
        return s;
    };
}
function $7056750adaa45e43$var$TransformStream() {}
$7056750adaa45e43$var$TransformStream.prototype = {
    constructor: $7056750adaa45e43$var$TransformStream,
    point: function(x, y) {
        this.stream.point(x, y);
    },
    sphere: function() {
        this.stream.sphere();
    },
    lineStart: function() {
        this.stream.lineStart();
    },
    lineEnd: function() {
        this.stream.lineEnd();
    },
    polygonStart: function() {
        this.stream.polygonStart();
    },
    polygonEnd: function() {
        this.stream.polygonEnd();
    }
};

});

parcelRegister("cXGjO", function(module, exports) {

$parcel$export(module.exports, "fitExtent", () => $96fbd24a386584e4$export$e450184041869e7f);
$parcel$export(module.exports, "fitSize", () => $96fbd24a386584e4$export$33a367fa1728c3ba);
$parcel$export(module.exports, "fitWidth", () => $96fbd24a386584e4$export$7d8f2192ef31c5a7);
$parcel$export(module.exports, "fitHeight", () => $96fbd24a386584e4$export$7069bab0d2ced675);

var $e0paR = parcelRequire("e0paR");

var $eEc44 = parcelRequire("eEc44");
function $96fbd24a386584e4$var$fit(projection, fitBounds, object) {
    var clip = projection.clipExtent && projection.clipExtent();
    projection.scale(150).translate([
        0,
        0
    ]);
    if (clip != null) projection.clipExtent(null);
    (0, $e0paR.default)(object, projection.stream((0, $eEc44.default)));
    fitBounds((0, $eEc44.default).result());
    if (clip != null) projection.clipExtent(clip);
    return projection;
}
function $96fbd24a386584e4$export$e450184041869e7f(projection, extent, object) {
    return $96fbd24a386584e4$var$fit(projection, function(b) {
        var w = extent[1][0] - extent[0][0], h = extent[1][1] - extent[0][1], k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])), x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2, y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
        projection.scale(150 * k).translate([
            x,
            y
        ]);
    }, object);
}
function $96fbd24a386584e4$export$33a367fa1728c3ba(projection, size, object) {
    return $96fbd24a386584e4$export$e450184041869e7f(projection, [
        [
            0,
            0
        ],
        size
    ], object);
}
function $96fbd24a386584e4$export$7d8f2192ef31c5a7(projection, width, object) {
    return $96fbd24a386584e4$var$fit(projection, function(b) {
        var w = +width, k = w / (b[1][0] - b[0][0]), x = (w - k * (b[1][0] + b[0][0])) / 2, y = -k * b[0][1];
        projection.scale(150 * k).translate([
            x,
            y
        ]);
    }, object);
}
function $96fbd24a386584e4$export$7069bab0d2ced675(projection, height, object) {
    return $96fbd24a386584e4$var$fit(projection, function(b) {
        var h = +height, k = h / (b[1][1] - b[0][1]), x = -k * b[0][0], y = (h - k * (b[1][1] + b[0][1])) / 2;
        projection.scale(150 * k).translate([
            x,
            y
        ]);
    }, object);
}

});

parcelRegister("eLoiv", function(module, exports) {

$parcel$export(module.exports, "default", () => $abf84d75c967d6ba$export$2e2bcd8739ae039);

var $jaKPv = parcelRequire("jaKPv");

var $5jMPm = parcelRequire("5jMPm");

var $9DYcM = parcelRequire("9DYcM");
var $abf84d75c967d6ba$var$maxDepth = 16, $abf84d75c967d6ba$var$cosMinDistance = (0, $5jMPm.cos)(30 * (0, $5jMPm.radians)); // cos(minimum angular distance)
function $abf84d75c967d6ba$export$2e2bcd8739ae039(project, delta2) {
    return +delta2 ? $abf84d75c967d6ba$var$resample(project, delta2) : $abf84d75c967d6ba$var$resampleNone(project);
}
function $abf84d75c967d6ba$var$resampleNone(project) {
    return (0, $9DYcM.transformer)({
        point: function(x, y) {
            x = project(x, y);
            this.stream.point(x[0], x[1]);
        }
    });
}
function $abf84d75c967d6ba$var$resample(project, delta2) {
    function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
        var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
        if (d2 > 4 * delta2 && depth--) {
            var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = (0, $5jMPm.sqrt)(a * a + b * b + c * c), phi2 = (0, $5jMPm.asin)(c /= m), lambda2 = (0, $5jMPm.abs)((0, $5jMPm.abs)(c) - 1) < (0, $5jMPm.epsilon) || (0, $5jMPm.abs)(lambda0 - lambda1) < (0, $5jMPm.epsilon) ? (lambda0 + lambda1) / 2 : (0, $5jMPm.atan2)(b, a), p = project(lambda2, phi2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
            if (dz * dz / d2 > delta2 // perpendicular projected distance
             || (0, $5jMPm.abs)((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
             || a0 * a1 + b0 * b1 + c0 * c1 < $abf84d75c967d6ba$var$cosMinDistance) {
                resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
                stream.point(x2, y2);
                resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
            }
        }
    }
    return function(stream) {
        var lambda00, x00, y00, a00, b00, c00, lambda0, x0, y0, a0, b0, c0; // previous point
        var resampleStream = {
            point: point,
            lineStart: lineStart,
            lineEnd: lineEnd,
            polygonStart: function() {
                stream.polygonStart();
                resampleStream.lineStart = ringStart;
            },
            polygonEnd: function() {
                stream.polygonEnd();
                resampleStream.lineStart = lineStart;
            }
        };
        function point(x, y) {
            x = project(x, y);
            stream.point(x[0], x[1]);
        }
        function lineStart() {
            x0 = NaN;
            resampleStream.point = linePoint;
            stream.lineStart();
        }
        function linePoint(lambda, phi) {
            var c = (0, $jaKPv.cartesian)([
                lambda,
                phi
            ]), p = project(lambda, phi);
            resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], $abf84d75c967d6ba$var$maxDepth, stream);
            stream.point(x0, y0);
        }
        function lineEnd() {
            resampleStream.point = point;
            stream.lineEnd();
        }
        function ringStart() {
            lineStart();
            resampleStream.point = ringPoint;
            resampleStream.lineEnd = ringEnd;
        }
        function ringPoint(lambda, phi) {
            linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
            resampleStream.point = linePoint;
        }
        function ringEnd() {
            resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, $abf84d75c967d6ba$var$maxDepth, stream);
            resampleStream.lineEnd = lineEnd;
            lineEnd();
        }
        return resampleStream;
    };
}

});



parcelRegister("cUpLj", function(module, exports) {

$parcel$export(module.exports, "cylindricalEqualAreaRaw", () => $965eb2d275ccc224$export$ae68c6db8b65046a);

var $5jMPm = parcelRequire("5jMPm");
function $965eb2d275ccc224$export$ae68c6db8b65046a(phi0) {
    var cosPhi0 = (0, $5jMPm.cos)(phi0);
    function forward(lambda, phi) {
        return [
            lambda * cosPhi0,
            (0, $5jMPm.sin)(phi) / cosPhi0
        ];
    }
    forward.invert = function(x, y) {
        return [
            x / cosPhi0,
            (0, $5jMPm.asin)(y * cosPhi0)
        ];
    };
    return forward;
}

});



parcelRegister("5I4Rm", function(module, exports) {

$parcel$export(module.exports, "default", () => $4284d4d0788c50f2$export$2e2bcd8739ae039);

var $5jMPm = parcelRequire("5jMPm");

var $6mXW6 = parcelRequire("6mXW6");

var $lmVAz = parcelRequire("lmVAz");

var $cXGjO = parcelRequire("cXGjO");
// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function $4284d4d0788c50f2$var$multiplex(streams) {
    var n = streams.length;
    return {
        point: function(x, y) {
            var i = -1;
            while(++i < n)streams[i].point(x, y);
        },
        sphere: function() {
            var i = -1;
            while(++i < n)streams[i].sphere();
        },
        lineStart: function() {
            var i = -1;
            while(++i < n)streams[i].lineStart();
        },
        lineEnd: function() {
            var i = -1;
            while(++i < n)streams[i].lineEnd();
        },
        polygonStart: function() {
            var i = -1;
            while(++i < n)streams[i].polygonStart();
        },
        polygonEnd: function() {
            var i = -1;
            while(++i < n)streams[i].polygonEnd();
        }
    };
}
function $4284d4d0788c50f2$export$2e2bcd8739ae039() {
    var cache, cacheStream, lower48 = (0, $6mXW6.default)(), lower48Point, alaska = (0, $lmVAz.default)().rotate([
        154,
        0
    ]).center([
        -2,
        58.5
    ]).parallels([
        55,
        65
    ]), alaskaPoint, hawaii = (0, $lmVAz.default)().rotate([
        157,
        0
    ]).center([
        -3,
        19.9
    ]).parallels([
        8,
        18
    ]), hawaiiPoint, point, pointStream = {
        point: function(x, y) {
            point = [
                x,
                y
            ];
        }
    };
    function albersUsa(coordinates) {
        var x = coordinates[0], y = coordinates[1];
        return point = null, (lower48Point.point(x, y), point) || (alaskaPoint.point(x, y), point) || (hawaiiPoint.point(x, y), point);
    }
    albersUsa.invert = function(coordinates) {
        var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
        return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii : lower48).invert(coordinates);
    };
    albersUsa.stream = function(stream) {
        return cache && cacheStream === stream ? cache : cache = $4284d4d0788c50f2$var$multiplex([
            lower48.stream(cacheStream = stream),
            alaska.stream(stream),
            hawaii.stream(stream)
        ]);
    };
    albersUsa.precision = function(_) {
        if (!arguments.length) return lower48.precision();
        lower48.precision(_), alaska.precision(_), hawaii.precision(_);
        return reset();
    };
    albersUsa.scale = function(_) {
        if (!arguments.length) return lower48.scale();
        lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
        return albersUsa.translate(lower48.translate());
    };
    albersUsa.translate = function(_) {
        if (!arguments.length) return lower48.translate();
        var k = lower48.scale(), x = +_[0], y = +_[1];
        lower48Point = lower48.translate(_).clipExtent([
            [
                x - 0.455 * k,
                y - 0.238 * k
            ],
            [
                x + 0.455 * k,
                y + 0.238 * k
            ]
        ]).stream(pointStream);
        alaskaPoint = alaska.translate([
            x - 0.307 * k,
            y + 0.201 * k
        ]).clipExtent([
            [
                x - 0.425 * k + (0, $5jMPm.epsilon),
                y + 0.120 * k + (0, $5jMPm.epsilon)
            ],
            [
                x - 0.214 * k - (0, $5jMPm.epsilon),
                y + 0.234 * k - (0, $5jMPm.epsilon)
            ]
        ]).stream(pointStream);
        hawaiiPoint = hawaii.translate([
            x - 0.205 * k,
            y + 0.212 * k
        ]).clipExtent([
            [
                x - 0.214 * k + (0, $5jMPm.epsilon),
                y + 0.166 * k + (0, $5jMPm.epsilon)
            ],
            [
                x - 0.115 * k - (0, $5jMPm.epsilon),
                y + 0.234 * k - (0, $5jMPm.epsilon)
            ]
        ]).stream(pointStream);
        return reset();
    };
    albersUsa.fitExtent = function(extent, object) {
        return (0, $cXGjO.fitExtent)(albersUsa, extent, object);
    };
    albersUsa.fitSize = function(size, object) {
        return (0, $cXGjO.fitSize)(albersUsa, size, object);
    };
    albersUsa.fitWidth = function(width, object) {
        return (0, $cXGjO.fitWidth)(albersUsa, width, object);
    };
    albersUsa.fitHeight = function(height, object) {
        return (0, $cXGjO.fitHeight)(albersUsa, height, object);
    };
    function reset() {
        cache = cacheStream = null;
        return albersUsa;
    }
    return albersUsa.scale(1070);
}

});

parcelRegister("c7gnl", function(module, exports) {

$parcel$export(module.exports, "azimuthalEqualAreaRaw", () => $8d22d74e6e1406ec$export$5e11f94fc4a8d2c6);
$parcel$export(module.exports, "default", () => $8d22d74e6e1406ec$export$2e2bcd8739ae039);

var $5jMPm = parcelRequire("5jMPm");

var $5Smqb = parcelRequire("5Smqb");

var $g0Z1C = parcelRequire("g0Z1C");
var $8d22d74e6e1406ec$export$5e11f94fc4a8d2c6 = (0, $5Smqb.azimuthalRaw)(function(cxcy) {
    return (0, $5jMPm.sqrt)(2 / (1 + cxcy));
});
$8d22d74e6e1406ec$export$5e11f94fc4a8d2c6.invert = (0, $5Smqb.azimuthalInvert)(function(z) {
    return 2 * (0, $5jMPm.asin)(z / 2);
});
function $8d22d74e6e1406ec$export$2e2bcd8739ae039() {
    return (0, $g0Z1C.default)($8d22d74e6e1406ec$export$5e11f94fc4a8d2c6).scale(124.75).clipAngle(179.999);
}

});
parcelRegister("5Smqb", function(module, exports) {

$parcel$export(module.exports, "azimuthalRaw", () => $44736346a75d5d61$export$f1211ac1bdb0796);
$parcel$export(module.exports, "azimuthalInvert", () => $44736346a75d5d61$export$3cee429f13e44eac);

var $5jMPm = parcelRequire("5jMPm");
function $44736346a75d5d61$export$f1211ac1bdb0796(scale) {
    return function(x, y) {
        var cx = (0, $5jMPm.cos)(x), cy = (0, $5jMPm.cos)(y), k = scale(cx * cy);
        return [
            k * cy * (0, $5jMPm.sin)(x),
            k * (0, $5jMPm.sin)(y)
        ];
    };
}
function $44736346a75d5d61$export$3cee429f13e44eac(angle) {
    return function(x, y) {
        var z = (0, $5jMPm.sqrt)(x * x + y * y), c = angle(z), sc = (0, $5jMPm.sin)(c), cc = (0, $5jMPm.cos)(c);
        return [
            (0, $5jMPm.atan2)(x * sc, z * cc),
            (0, $5jMPm.asin)(z && y * sc / z)
        ];
    };
}

});


parcelRegister("4NnNA", function(module, exports) {

$parcel$export(module.exports, "azimuthalEquidistantRaw", () => $37de32feb6a18399$export$b94a4d6aa3dd25c);
$parcel$export(module.exports, "default", () => $37de32feb6a18399$export$2e2bcd8739ae039);

var $5jMPm = parcelRequire("5jMPm");

var $5Smqb = parcelRequire("5Smqb");

var $g0Z1C = parcelRequire("g0Z1C");
var $37de32feb6a18399$export$b94a4d6aa3dd25c = (0, $5Smqb.azimuthalRaw)(function(c) {
    return (c = (0, $5jMPm.acos)(c)) && c / (0, $5jMPm.sin)(c);
});
$37de32feb6a18399$export$b94a4d6aa3dd25c.invert = (0, $5Smqb.azimuthalInvert)(function(z) {
    return z;
});
function $37de32feb6a18399$export$2e2bcd8739ae039() {
    return (0, $g0Z1C.default)($37de32feb6a18399$export$b94a4d6aa3dd25c).scale(79.4188).clipAngle(179.999);
}

});

parcelRegister("aQe54", function(module, exports) {

$parcel$export(module.exports, "conicConformalRaw", () => $7e49aed63781a051$export$2b1bc913962ed170);
$parcel$export(module.exports, "default", () => $7e49aed63781a051$export$2e2bcd8739ae039);

var $5jMPm = parcelRequire("5jMPm");

var $8KL43 = parcelRequire("8KL43");

var $aNmln = parcelRequire("aNmln");
function $7e49aed63781a051$var$tany(y) {
    return (0, $5jMPm.tan)(((0, $5jMPm.halfPi) + y) / 2);
}
function $7e49aed63781a051$export$2b1bc913962ed170(y0, y1) {
    var cy0 = (0, $5jMPm.cos)(y0), n = y0 === y1 ? (0, $5jMPm.sin)(y0) : (0, $5jMPm.log)(cy0 / (0, $5jMPm.cos)(y1)) / (0, $5jMPm.log)($7e49aed63781a051$var$tany(y1) / $7e49aed63781a051$var$tany(y0)), f = cy0 * (0, $5jMPm.pow)($7e49aed63781a051$var$tany(y0), n) / n;
    if (!n) return 0, $aNmln.mercatorRaw;
    function project(x, y) {
        if (f > 0) {
            if (y < -(0, $5jMPm.halfPi) + (0, $5jMPm.epsilon)) y = -(0, $5jMPm.halfPi) + (0, $5jMPm.epsilon);
        } else if (y > (0, $5jMPm.halfPi) - (0, $5jMPm.epsilon)) y = (0, $5jMPm.halfPi) - (0, $5jMPm.epsilon);
        var r = f / (0, $5jMPm.pow)($7e49aed63781a051$var$tany(y), n);
        return [
            r * (0, $5jMPm.sin)(n * x),
            f - r * (0, $5jMPm.cos)(n * x)
        ];
    }
    project.invert = function(x, y) {
        var fy = f - y, r = (0, $5jMPm.sign)(n) * (0, $5jMPm.sqrt)(x * x + fy * fy), l = (0, $5jMPm.atan2)(x, (0, $5jMPm.abs)(fy)) * (0, $5jMPm.sign)(fy);
        if (fy * n < 0) l -= (0, $5jMPm.pi) * (0, $5jMPm.sign)(x) * (0, $5jMPm.sign)(fy);
        return [
            l / n,
            2 * (0, $5jMPm.atan)((0, $5jMPm.pow)(f / r, 1 / n)) - (0, $5jMPm.halfPi)
        ];
    };
    return project;
}
function $7e49aed63781a051$export$2e2bcd8739ae039() {
    return (0, $8KL43.conicProjection)($7e49aed63781a051$export$2b1bc913962ed170).scale(109.5).parallels([
        30,
        30
    ]);
}

});
parcelRegister("aNmln", function(module, exports) {

$parcel$export(module.exports, "mercatorRaw", () => $7dbfcffc2c237606$export$94ff8a57e9b91cc3);
$parcel$export(module.exports, "default", () => $7dbfcffc2c237606$export$2e2bcd8739ae039);
$parcel$export(module.exports, "mercatorProjection", () => $7dbfcffc2c237606$export$44b9b66a01f2127b);

var $5jMPm = parcelRequire("5jMPm");

var $jRH68 = parcelRequire("jRH68");

var $g0Z1C = parcelRequire("g0Z1C");
function $7dbfcffc2c237606$export$94ff8a57e9b91cc3(lambda, phi) {
    return [
        lambda,
        (0, $5jMPm.log)((0, $5jMPm.tan)(((0, $5jMPm.halfPi) + phi) / 2))
    ];
}
$7dbfcffc2c237606$export$94ff8a57e9b91cc3.invert = function(x, y) {
    return [
        x,
        2 * (0, $5jMPm.atan)((0, $5jMPm.exp)(y)) - (0, $5jMPm.halfPi)
    ];
};
function $7dbfcffc2c237606$export$2e2bcd8739ae039() {
    return $7dbfcffc2c237606$export$44b9b66a01f2127b($7dbfcffc2c237606$export$94ff8a57e9b91cc3).scale(961 / (0, $5jMPm.tau));
}
function $7dbfcffc2c237606$export$44b9b66a01f2127b(project) {
    var m = (0, $g0Z1C.default)(project), center = m.center, scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, x0 = null, y0, x1, y1; // clip extent
    m.scale = function(_) {
        return arguments.length ? (scale(_), reclip()) : scale();
    };
    m.translate = function(_) {
        return arguments.length ? (translate(_), reclip()) : translate();
    };
    m.center = function(_) {
        return arguments.length ? (center(_), reclip()) : center();
    };
    m.clipExtent = function(_) {
        return arguments.length ? (_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reclip()) : x0 == null ? null : [
            [
                x0,
                y0
            ],
            [
                x1,
                y1
            ]
        ];
    };
    function reclip() {
        var k = (0, $5jMPm.pi) * scale(), t = m((0, $jRH68.default)(m.rotate()).invert([
            0,
            0
        ]));
        return clipExtent(x0 == null ? [
            [
                t[0] - k,
                t[1] - k
            ],
            [
                t[0] + k,
                t[1] + k
            ]
        ] : project === $7dbfcffc2c237606$export$94ff8a57e9b91cc3 ? [
            [
                Math.max(t[0] - k, x0),
                y0
            ],
            [
                Math.min(t[0] + k, x1),
                y1
            ]
        ] : [
            [
                x0,
                Math.max(t[1] - k, y0)
            ],
            [
                x1,
                Math.min(t[1] + k, y1)
            ]
        ]);
    }
    return reclip();
}

});


parcelRegister("atQaE", function(module, exports) {

$parcel$export(module.exports, "conicEquidistantRaw", () => $7a1514dbf7a8f560$export$24f604fe80e5f192);
$parcel$export(module.exports, "default", () => $7a1514dbf7a8f560$export$2e2bcd8739ae039);

var $5jMPm = parcelRequire("5jMPm");

var $8KL43 = parcelRequire("8KL43");

var $kOX0V = parcelRequire("kOX0V");
function $7a1514dbf7a8f560$export$24f604fe80e5f192(y0, y1) {
    var cy0 = (0, $5jMPm.cos)(y0), n = y0 === y1 ? (0, $5jMPm.sin)(y0) : (cy0 - (0, $5jMPm.cos)(y1)) / (y1 - y0), g = cy0 / n + y0;
    if ((0, $5jMPm.abs)(n) < (0, $5jMPm.epsilon)) return 0, $kOX0V.equirectangularRaw;
    function project(x, y) {
        var gy = g - y, nx = n * x;
        return [
            gy * (0, $5jMPm.sin)(nx),
            g - gy * (0, $5jMPm.cos)(nx)
        ];
    }
    project.invert = function(x, y) {
        var gy = g - y, l = (0, $5jMPm.atan2)(x, (0, $5jMPm.abs)(gy)) * (0, $5jMPm.sign)(gy);
        if (gy * n < 0) l -= (0, $5jMPm.pi) * (0, $5jMPm.sign)(x) * (0, $5jMPm.sign)(gy);
        return [
            l / n,
            g - (0, $5jMPm.sign)(n) * (0, $5jMPm.sqrt)(x * x + gy * gy)
        ];
    };
    return project;
}
function $7a1514dbf7a8f560$export$2e2bcd8739ae039() {
    return (0, $8KL43.conicProjection)($7a1514dbf7a8f560$export$24f604fe80e5f192).scale(131.154).center([
        0,
        13.9389
    ]);
}

});
parcelRegister("kOX0V", function(module, exports) {

$parcel$export(module.exports, "equirectangularRaw", () => $f286411a1a0c3b38$export$f5fee52180f2f058);
$parcel$export(module.exports, "default", () => $f286411a1a0c3b38$export$2e2bcd8739ae039);

var $g0Z1C = parcelRequire("g0Z1C");
function $f286411a1a0c3b38$export$f5fee52180f2f058(lambda, phi) {
    return [
        lambda,
        phi
    ];
}
$f286411a1a0c3b38$export$f5fee52180f2f058.invert = $f286411a1a0c3b38$export$f5fee52180f2f058;
function $f286411a1a0c3b38$export$2e2bcd8739ae039() {
    return (0, $g0Z1C.default)($f286411a1a0c3b38$export$f5fee52180f2f058).scale(152.63);
}

});


parcelRegister("aTQCG", function(module, exports) {

$parcel$export(module.exports, "equalEarthRaw", () => $7ef7dc3b4533cd99$export$a320734067e7a731);
$parcel$export(module.exports, "default", () => $7ef7dc3b4533cd99$export$2e2bcd8739ae039);

var $g0Z1C = parcelRequire("g0Z1C");

var $5jMPm = parcelRequire("5jMPm");
var $7ef7dc3b4533cd99$var$A1 = 1.340264, $7ef7dc3b4533cd99$var$A2 = -0.081106, $7ef7dc3b4533cd99$var$A3 = 0.000893, $7ef7dc3b4533cd99$var$A4 = 0.003796, $7ef7dc3b4533cd99$var$M = (0, $5jMPm.sqrt)(3) / 2, $7ef7dc3b4533cd99$var$iterations = 12;
function $7ef7dc3b4533cd99$export$a320734067e7a731(lambda, phi) {
    var l = (0, $5jMPm.asin)($7ef7dc3b4533cd99$var$M * (0, $5jMPm.sin)(phi)), l2 = l * l, l6 = l2 * l2 * l2;
    return [
        lambda * (0, $5jMPm.cos)(l) / ($7ef7dc3b4533cd99$var$M * ($7ef7dc3b4533cd99$var$A1 + 3 * $7ef7dc3b4533cd99$var$A2 * l2 + l6 * (7 * $7ef7dc3b4533cd99$var$A3 + 9 * $7ef7dc3b4533cd99$var$A4 * l2))),
        l * ($7ef7dc3b4533cd99$var$A1 + $7ef7dc3b4533cd99$var$A2 * l2 + l6 * ($7ef7dc3b4533cd99$var$A3 + $7ef7dc3b4533cd99$var$A4 * l2))
    ];
}
$7ef7dc3b4533cd99$export$a320734067e7a731.invert = function(x, y) {
    var l = y, l2 = l * l, l6 = l2 * l2 * l2;
    for(var i = 0, delta, fy, fpy; i < $7ef7dc3b4533cd99$var$iterations; ++i){
        fy = l * ($7ef7dc3b4533cd99$var$A1 + $7ef7dc3b4533cd99$var$A2 * l2 + l6 * ($7ef7dc3b4533cd99$var$A3 + $7ef7dc3b4533cd99$var$A4 * l2)) - y;
        fpy = $7ef7dc3b4533cd99$var$A1 + 3 * $7ef7dc3b4533cd99$var$A2 * l2 + l6 * (7 * $7ef7dc3b4533cd99$var$A3 + 9 * $7ef7dc3b4533cd99$var$A4 * l2);
        l -= delta = fy / fpy, l2 = l * l, l6 = l2 * l2 * l2;
        if ((0, $5jMPm.abs)(delta) < (0, $5jMPm.epsilon2)) break;
    }
    return [
        $7ef7dc3b4533cd99$var$M * x * ($7ef7dc3b4533cd99$var$A1 + 3 * $7ef7dc3b4533cd99$var$A2 * l2 + l6 * (7 * $7ef7dc3b4533cd99$var$A3 + 9 * $7ef7dc3b4533cd99$var$A4 * l2)) / (0, $5jMPm.cos)(l),
        (0, $5jMPm.asin)((0, $5jMPm.sin)(l) / $7ef7dc3b4533cd99$var$M)
    ];
};
function $7ef7dc3b4533cd99$export$2e2bcd8739ae039() {
    return (0, $g0Z1C.default)($7ef7dc3b4533cd99$export$a320734067e7a731).scale(177.158);
}

});

parcelRegister("7KgSx", function(module, exports) {

$parcel$export(module.exports, "gnomonicRaw", () => $5a39ec0606998aab$export$dc8c6ddfc8b22c85);
$parcel$export(module.exports, "default", () => $5a39ec0606998aab$export$2e2bcd8739ae039);

var $5jMPm = parcelRequire("5jMPm");

var $5Smqb = parcelRequire("5Smqb");

var $g0Z1C = parcelRequire("g0Z1C");
function $5a39ec0606998aab$export$dc8c6ddfc8b22c85(x, y) {
    var cy = (0, $5jMPm.cos)(y), k = (0, $5jMPm.cos)(x) * cy;
    return [
        cy * (0, $5jMPm.sin)(x) / k,
        (0, $5jMPm.sin)(y) / k
    ];
}
$5a39ec0606998aab$export$dc8c6ddfc8b22c85.invert = (0, $5Smqb.azimuthalInvert)((0, $5jMPm.atan));
function $5a39ec0606998aab$export$2e2bcd8739ae039() {
    return (0, $g0Z1C.default)($5a39ec0606998aab$export$dc8c6ddfc8b22c85).scale(144.049).clipAngle(60);
}

});

parcelRegister("kOk9r", function(module, exports) {

$parcel$export(module.exports, "default", () => $f2681bce881c0d50$export$2e2bcd8739ae039);

var $9akEc = parcelRequire("9akEc");

var $408fg = parcelRequire("408fg");

var $9DYcM = parcelRequire("9DYcM");

var $cXGjO = parcelRequire("cXGjO");

var $5jMPm = parcelRequire("5jMPm");
function $f2681bce881c0d50$export$2e2bcd8739ae039() {
    var k = 1, tx = 0, ty = 0, sx = 1, sy = 1, alpha = 0, ca, sa, x0 = null, y0, x1, y1, kx = 1, ky = 1, transform = (0, $9DYcM.transformer)({
        point: function(x, y) {
            var p = projection([
                x,
                y
            ]);
            this.stream.point(p[0], p[1]);
        }
    }), postclip = (0, $408fg.default), cache, cacheStream;
    function reset() {
        kx = k * sx;
        ky = k * sy;
        cache = cacheStream = null;
        return projection;
    }
    function projection(p) {
        var x = p[0] * kx, y = p[1] * ky;
        if (alpha) {
            var t = y * ca - x * sa;
            x = x * ca + y * sa;
            y = t;
        }
        return [
            x + tx,
            y + ty
        ];
    }
    projection.invert = function(p) {
        var x = p[0] - tx, y = p[1] - ty;
        if (alpha) {
            var t = y * ca + x * sa;
            x = x * ca - y * sa;
            y = t;
        }
        return [
            x / kx,
            y / ky
        ];
    };
    projection.stream = function(stream) {
        return cache && cacheStream === stream ? cache : cache = transform(postclip(cacheStream = stream));
    };
    projection.postclip = function(_) {
        return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    };
    projection.clipExtent = function(_) {
        return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, $408fg.default) : (0, $9akEc.default)(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [
            [
                x0,
                y0
            ],
            [
                x1,
                y1
            ]
        ];
    };
    projection.scale = function(_) {
        return arguments.length ? (k = +_, reset()) : k;
    };
    projection.translate = function(_) {
        return arguments.length ? (tx = +_[0], ty = +_[1], reset()) : [
            tx,
            ty
        ];
    };
    projection.angle = function(_) {
        return arguments.length ? (alpha = _ % 360 * (0, $5jMPm.radians), sa = (0, $5jMPm.sin)(alpha), ca = (0, $5jMPm.cos)(alpha), reset()) : alpha * (0, $5jMPm.degrees);
    };
    projection.reflectX = function(_) {
        return arguments.length ? (sx = _ ? -1 : 1, reset()) : sx < 0;
    };
    projection.reflectY = function(_) {
        return arguments.length ? (sy = _ ? -1 : 1, reset()) : sy < 0;
    };
    projection.fitExtent = function(extent, object) {
        return (0, $cXGjO.fitExtent)(projection, extent, object);
    };
    projection.fitSize = function(size, object) {
        return (0, $cXGjO.fitSize)(projection, size, object);
    };
    projection.fitWidth = function(width, object) {
        return (0, $cXGjO.fitWidth)(projection, width, object);
    };
    projection.fitHeight = function(height, object) {
        return (0, $cXGjO.fitHeight)(projection, height, object);
    };
    return projection;
}

});

parcelRegister("01OJY", function(module, exports) {

$parcel$export(module.exports, "naturalEarth1Raw", () => $005774249a682eb8$export$acb6def22fe878e6);
$parcel$export(module.exports, "default", () => $005774249a682eb8$export$2e2bcd8739ae039);

var $g0Z1C = parcelRequire("g0Z1C");

var $5jMPm = parcelRequire("5jMPm");
function $005774249a682eb8$export$acb6def22fe878e6(lambda, phi) {
    var phi2 = phi * phi, phi4 = phi2 * phi2;
    return [
        lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (0.003971 * phi2 - 0.001529 * phi4))),
        phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4)))
    ];
}
$005774249a682eb8$export$acb6def22fe878e6.invert = function(x, y) {
    var phi = y, i = 25, delta;
    do {
        var phi2 = phi * phi, phi4 = phi2 * phi2;
        phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4))) - y) / (1.007226 + phi2 * (0.045255 + phi4 * (-0.311325 + 0.259866 * phi2 - 0.005916 * 11 * phi4)));
    }while ((0, $5jMPm.abs)(delta) > (0, $5jMPm.epsilon) && --i > 0);
    return [
        x / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (0.003971 - 0.001529 * phi2)))),
        phi
    ];
};
function $005774249a682eb8$export$2e2bcd8739ae039() {
    return (0, $g0Z1C.default)($005774249a682eb8$export$acb6def22fe878e6).scale(175.295);
}

});

parcelRegister("fwyTB", function(module, exports) {

$parcel$export(module.exports, "orthographicRaw", () => $b4d4e9c04dc6c81c$export$1cd9c2eb846182a);
$parcel$export(module.exports, "default", () => $b4d4e9c04dc6c81c$export$2e2bcd8739ae039);

var $5jMPm = parcelRequire("5jMPm");

var $5Smqb = parcelRequire("5Smqb");

var $g0Z1C = parcelRequire("g0Z1C");
function $b4d4e9c04dc6c81c$export$1cd9c2eb846182a(x, y) {
    return [
        (0, $5jMPm.cos)(y) * (0, $5jMPm.sin)(x),
        (0, $5jMPm.sin)(y)
    ];
}
$b4d4e9c04dc6c81c$export$1cd9c2eb846182a.invert = (0, $5Smqb.azimuthalInvert)((0, $5jMPm.asin));
function $b4d4e9c04dc6c81c$export$2e2bcd8739ae039() {
    return (0, $g0Z1C.default)($b4d4e9c04dc6c81c$export$1cd9c2eb846182a).scale(249.5).clipAngle(90 + (0, $5jMPm.epsilon));
}

});

parcelRegister("bF8AX", function(module, exports) {

$parcel$export(module.exports, "stereographicRaw", () => $87da30d5e7f389f6$export$f9ccbb0dcb3dcd2b);
$parcel$export(module.exports, "default", () => $87da30d5e7f389f6$export$2e2bcd8739ae039);

var $5jMPm = parcelRequire("5jMPm");

var $5Smqb = parcelRequire("5Smqb");

var $g0Z1C = parcelRequire("g0Z1C");
function $87da30d5e7f389f6$export$f9ccbb0dcb3dcd2b(x, y) {
    var cy = (0, $5jMPm.cos)(y), k = 1 + (0, $5jMPm.cos)(x) * cy;
    return [
        cy * (0, $5jMPm.sin)(x) / k,
        (0, $5jMPm.sin)(y) / k
    ];
}
$87da30d5e7f389f6$export$f9ccbb0dcb3dcd2b.invert = (0, $5Smqb.azimuthalInvert)(function(z) {
    return 2 * (0, $5jMPm.atan)(z);
});
function $87da30d5e7f389f6$export$2e2bcd8739ae039() {
    return (0, $g0Z1C.default)($87da30d5e7f389f6$export$f9ccbb0dcb3dcd2b).scale(250).clipAngle(142);
}

});

parcelRegister("6IHcd", function(module, exports) {

$parcel$export(module.exports, "transverseMercatorRaw", () => $4e485bf867e33b60$export$e84942adec6de533);
$parcel$export(module.exports, "default", () => $4e485bf867e33b60$export$2e2bcd8739ae039);

var $5jMPm = parcelRequire("5jMPm");

var $aNmln = parcelRequire("aNmln");
function $4e485bf867e33b60$export$e84942adec6de533(lambda, phi) {
    return [
        (0, $5jMPm.log)((0, $5jMPm.tan)(((0, $5jMPm.halfPi) + phi) / 2)),
        -lambda
    ];
}
$4e485bf867e33b60$export$e84942adec6de533.invert = function(x, y) {
    return [
        -y,
        2 * (0, $5jMPm.atan)((0, $5jMPm.exp)(x)) - (0, $5jMPm.halfPi)
    ];
};
function $4e485bf867e33b60$export$2e2bcd8739ae039() {
    var m = (0, $aNmln.mercatorProjection)($4e485bf867e33b60$export$e84942adec6de533), center = m.center, rotate = m.rotate;
    m.center = function(_) {
        return arguments.length ? center([
            -_[1],
            _[0]
        ]) : (_ = center(), [
            _[1],
            -_[0]
        ]);
    };
    m.rotate = function(_) {
        return arguments.length ? rotate([
            _[0],
            _[1],
            _.length > 2 ? _[2] + 90 : 90
        ]) : (_ = rotate(), [
            _[0],
            _[1],
            _[2] - 90
        ]);
    };
    return rotate([
        0,
        0,
        90
    ]).scale(159.155);
}

});


parcelRegister("1SuNb", function(module, exports) {

$parcel$export(module.exports, "cluster", () => (parcelRequire("kESMM")).default);
$parcel$export(module.exports, "hierarchy", () => (parcelRequire("dWPne")).default);
$parcel$export(module.exports, "pack", () => (parcelRequire("7WUVp")).default);
$parcel$export(module.exports, "packSiblings", () => (parcelRequire("e2gyk")).default);
$parcel$export(module.exports, "packEnclose", () => (parcelRequire("67LyN")).default);
$parcel$export(module.exports, "partition", () => (parcelRequire("l42Pk")).default);
$parcel$export(module.exports, "stratify", () => (parcelRequire("65veo")).default);
$parcel$export(module.exports, "tree", () => (parcelRequire("dt7LF")).default);
$parcel$export(module.exports, "treemap", () => (parcelRequire("lPpkX")).default);
$parcel$export(module.exports, "treemapBinary", () => (parcelRequire("hN27z")).default);
$parcel$export(module.exports, "treemapDice", () => (parcelRequire("bTi5M")).default);
$parcel$export(module.exports, "treemapSlice", () => (parcelRequire("607MI")).default);
$parcel$export(module.exports, "treemapSliceDice", () => (parcelRequire("43jAF")).default);
$parcel$export(module.exports, "treemapSquarify", () => (parcelRequire("8AgZS")).default);
$parcel$export(module.exports, "treemapResquarify", () => (parcelRequire("fWVT1")).default);

var $kESMM = parcelRequire("kESMM");

var $dWPne = parcelRequire("dWPne");

var $7WUVp = parcelRequire("7WUVp");

var $e2gyk = parcelRequire("e2gyk");

var $67LyN = parcelRequire("67LyN");

var $l42Pk = parcelRequire("l42Pk");

var $65veo = parcelRequire("65veo");

var $dt7LF = parcelRequire("dt7LF");

var $lPpkX = parcelRequire("lPpkX");

var $hN27z = parcelRequire("hN27z");

var $bTi5M = parcelRequire("bTi5M");

var $607MI = parcelRequire("607MI");

var $43jAF = parcelRequire("43jAF");

var $8AgZS = parcelRequire("8AgZS");

var $fWVT1 = parcelRequire("fWVT1");

});
parcelRegister("kESMM", function(module, exports) {

$parcel$export(module.exports, "default", () => $f0a20a6677b400e4$export$2e2bcd8739ae039);
function $f0a20a6677b400e4$var$defaultSeparation(a, b) {
    return a.parent === b.parent ? 1 : 2;
}
function $f0a20a6677b400e4$var$meanX(children) {
    return children.reduce($f0a20a6677b400e4$var$meanXReduce, 0) / children.length;
}
function $f0a20a6677b400e4$var$meanXReduce(x, c) {
    return x + c.x;
}
function $f0a20a6677b400e4$var$maxY(children) {
    return 1 + children.reduce($f0a20a6677b400e4$var$maxYReduce, 0);
}
function $f0a20a6677b400e4$var$maxYReduce(y, c) {
    return Math.max(y, c.y);
}
function $f0a20a6677b400e4$var$leafLeft(node) {
    var children;
    while(children = node.children)node = children[0];
    return node;
}
function $f0a20a6677b400e4$var$leafRight(node) {
    var children;
    while(children = node.children)node = children[children.length - 1];
    return node;
}
function $f0a20a6677b400e4$export$2e2bcd8739ae039() {
    var separation = $f0a20a6677b400e4$var$defaultSeparation, dx = 1, dy = 1, nodeSize = false;
    function cluster(root) {
        var previousNode, x = 0;
        // First walk, computing the initial x & y values.
        root.eachAfter(function(node) {
            var children = node.children;
            if (children) {
                node.x = $f0a20a6677b400e4$var$meanX(children);
                node.y = $f0a20a6677b400e4$var$maxY(children);
            } else {
                node.x = previousNode ? x += separation(node, previousNode) : 0;
                node.y = 0;
                previousNode = node;
            }
        });
        var left = $f0a20a6677b400e4$var$leafLeft(root), right = $f0a20a6677b400e4$var$leafRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
        // Second walk, normalizing x & y to the desired size.
        return root.eachAfter(nodeSize ? function(node) {
            node.x = (node.x - root.x) * dx;
            node.y = (root.y - node.y) * dy;
        } : function(node) {
            node.x = (node.x - x0) / (x1 - x0) * dx;
            node.y = (1 - (root.y ? node.y / root.y : 1)) * dy;
        });
    }
    cluster.separation = function(x) {
        return arguments.length ? (separation = x, cluster) : separation;
    };
    cluster.size = function(x) {
        return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], cluster) : nodeSize ? null : [
            dx,
            dy
        ];
    };
    cluster.nodeSize = function(x) {
        return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], cluster) : nodeSize ? [
            dx,
            dy
        ] : null;
    };
    return cluster;
}

});

parcelRegister("dWPne", function(module, exports) {

$parcel$export(module.exports, "default", () => $a2788adecceffc0c$export$2e2bcd8739ae039);
$parcel$export(module.exports, "Node", () => $a2788adecceffc0c$export$85c928794f8d04d4);
$parcel$export(module.exports, "computeHeight", () => $a2788adecceffc0c$export$5af32d52ab5dfd57);

var $7L6k5 = parcelRequire("7L6k5");

var $3U3hs = parcelRequire("3U3hs");

var $8hRuX = parcelRequire("8hRuX");

var $4nU4E = parcelRequire("4nU4E");

var $5kdvk = parcelRequire("5kdvk");

var $gD1fC = parcelRequire("gD1fC");

var $c79eA = parcelRequire("c79eA");

var $8q1Dy = parcelRequire("8q1Dy");

var $4FSLP = parcelRequire("4FSLP");

var $7Uhi0 = parcelRequire("7Uhi0");

var $52WK6 = parcelRequire("52WK6");
function $a2788adecceffc0c$export$2e2bcd8739ae039(data, children) {
    var root = new $a2788adecceffc0c$export$85c928794f8d04d4(data), valued = +data.value && (root.value = data.value), node, nodes = [
        root
    ], child, childs, i, n;
    if (children == null) children = $a2788adecceffc0c$var$defaultChildren;
    while(node = nodes.pop()){
        if (valued) node.value = +node.data.value;
        if ((childs = children(node.data)) && (n = childs.length)) {
            node.children = new Array(n);
            for(i = n - 1; i >= 0; --i){
                nodes.push(child = node.children[i] = new $a2788adecceffc0c$export$85c928794f8d04d4(childs[i]));
                child.parent = node;
                child.depth = node.depth + 1;
            }
        }
    }
    return root.eachBefore($a2788adecceffc0c$export$5af32d52ab5dfd57);
}
function $a2788adecceffc0c$var$node_copy() {
    return $a2788adecceffc0c$export$2e2bcd8739ae039(this).eachBefore($a2788adecceffc0c$var$copyData);
}
function $a2788adecceffc0c$var$defaultChildren(d) {
    return d.children;
}
function $a2788adecceffc0c$var$copyData(node) {
    node.data = node.data.data;
}
function $a2788adecceffc0c$export$5af32d52ab5dfd57(node) {
    var height = 0;
    do node.height = height;
    while ((node = node.parent) && node.height < ++height);
}
function $a2788adecceffc0c$export$85c928794f8d04d4(data) {
    this.data = data;
    this.depth = this.height = 0;
    this.parent = null;
}
$a2788adecceffc0c$export$85c928794f8d04d4.prototype = $a2788adecceffc0c$export$2e2bcd8739ae039.prototype = {
    constructor: $a2788adecceffc0c$export$85c928794f8d04d4,
    count: (0, $7L6k5.default),
    each: (0, $3U3hs.default),
    eachAfter: (0, $4nU4E.default),
    eachBefore: (0, $8hRuX.default),
    sum: (0, $5kdvk.default),
    sort: (0, $gD1fC.default),
    path: (0, $c79eA.default),
    ancestors: (0, $8q1Dy.default),
    descendants: (0, $4FSLP.default),
    leaves: (0, $7Uhi0.default),
    links: (0, $52WK6.default),
    copy: $a2788adecceffc0c$var$node_copy
};

});
parcelRegister("7L6k5", function(module, exports) {

$parcel$export(module.exports, "default", () => $5a61d3ca8f28eee3$export$2e2bcd8739ae039);
function $5a61d3ca8f28eee3$var$count(node) {
    var sum = 0, children = node.children, i = children && children.length;
    if (!i) sum = 1;
    else while(--i >= 0)sum += children[i].value;
    node.value = sum;
}
function $5a61d3ca8f28eee3$export$2e2bcd8739ae039() {
    return this.eachAfter($5a61d3ca8f28eee3$var$count);
}

});

parcelRegister("3U3hs", function(module, exports) {

$parcel$export(module.exports, "default", () => $2d79258224725d8b$export$2e2bcd8739ae039);
function $2d79258224725d8b$export$2e2bcd8739ae039(callback) {
    var node = this, current, next = [
        node
    ], children, i, n;
    do {
        current = next.reverse(), next = [];
        while(node = current.pop()){
            callback(node), children = node.children;
            if (children) for(i = 0, n = children.length; i < n; ++i)next.push(children[i]);
        }
    }while (next.length);
    return this;
}

});

parcelRegister("8hRuX", function(module, exports) {

$parcel$export(module.exports, "default", () => $608968ea7d4cc341$export$2e2bcd8739ae039);
function $608968ea7d4cc341$export$2e2bcd8739ae039(callback) {
    var node = this, nodes = [
        node
    ], children, i;
    while(node = nodes.pop()){
        callback(node), children = node.children;
        if (children) for(i = children.length - 1; i >= 0; --i)nodes.push(children[i]);
    }
    return this;
}

});

parcelRegister("4nU4E", function(module, exports) {

$parcel$export(module.exports, "default", () => $3314ce8f454044d7$export$2e2bcd8739ae039);
function $3314ce8f454044d7$export$2e2bcd8739ae039(callback) {
    var node = this, nodes = [
        node
    ], next = [], children, i, n;
    while(node = nodes.pop()){
        next.push(node), children = node.children;
        if (children) for(i = 0, n = children.length; i < n; ++i)nodes.push(children[i]);
    }
    while(node = next.pop())callback(node);
    return this;
}

});

parcelRegister("5kdvk", function(module, exports) {

$parcel$export(module.exports, "default", () => $3e094baae2b73f64$export$2e2bcd8739ae039);
function $3e094baae2b73f64$export$2e2bcd8739ae039(value) {
    return this.eachAfter(function(node) {
        var sum = +value(node.data) || 0, children = node.children, i = children && children.length;
        while(--i >= 0)sum += children[i].value;
        node.value = sum;
    });
}

});

parcelRegister("gD1fC", function(module, exports) {

$parcel$export(module.exports, "default", () => $c1b1423de1e26c2c$export$2e2bcd8739ae039);
function $c1b1423de1e26c2c$export$2e2bcd8739ae039(compare) {
    return this.eachBefore(function(node) {
        if (node.children) node.children.sort(compare);
    });
}

});

parcelRegister("c79eA", function(module, exports) {

$parcel$export(module.exports, "default", () => $8d1d4d3316fc6248$export$2e2bcd8739ae039);
function $8d1d4d3316fc6248$export$2e2bcd8739ae039(end) {
    var start = this, ancestor = $8d1d4d3316fc6248$var$leastCommonAncestor(start, end), nodes = [
        start
    ];
    while(start !== ancestor){
        start = start.parent;
        nodes.push(start);
    }
    var k = nodes.length;
    while(end !== ancestor){
        nodes.splice(k, 0, end);
        end = end.parent;
    }
    return nodes;
}
function $8d1d4d3316fc6248$var$leastCommonAncestor(a, b) {
    if (a === b) return a;
    var aNodes = a.ancestors(), bNodes = b.ancestors(), c = null;
    a = aNodes.pop();
    b = bNodes.pop();
    while(a === b){
        c = a;
        a = aNodes.pop();
        b = bNodes.pop();
    }
    return c;
}

});

parcelRegister("8q1Dy", function(module, exports) {

$parcel$export(module.exports, "default", () => $621205803af9cdbd$export$2e2bcd8739ae039);
function $621205803af9cdbd$export$2e2bcd8739ae039() {
    var node = this, nodes = [
        node
    ];
    while(node = node.parent)nodes.push(node);
    return nodes;
}

});

parcelRegister("4FSLP", function(module, exports) {

$parcel$export(module.exports, "default", () => $36757a00e53b071c$export$2e2bcd8739ae039);
function $36757a00e53b071c$export$2e2bcd8739ae039() {
    var nodes = [];
    this.each(function(node) {
        nodes.push(node);
    });
    return nodes;
}

});

parcelRegister("7Uhi0", function(module, exports) {

$parcel$export(module.exports, "default", () => $5c1b2cae369bd9a6$export$2e2bcd8739ae039);
function $5c1b2cae369bd9a6$export$2e2bcd8739ae039() {
    var leaves = [];
    this.eachBefore(function(node) {
        if (!node.children) leaves.push(node);
    });
    return leaves;
}

});

parcelRegister("52WK6", function(module, exports) {

$parcel$export(module.exports, "default", () => $3acab4ba79022ca7$export$2e2bcd8739ae039);
function $3acab4ba79022ca7$export$2e2bcd8739ae039() {
    var root = this, links = [];
    root.each(function(node) {
        if (node !== root) links.push({
            source: node.parent,
            target: node
        });
    });
    return links;
}

});


parcelRegister("7WUVp", function(module, exports) {

$parcel$export(module.exports, "default", () => $5c9a1b484c637abe$export$2e2bcd8739ae039);

var $e2gyk = parcelRequire("e2gyk");

var $lHjA2 = parcelRequire("lHjA2");

var $6m0qb = parcelRequire("6m0qb");
function $5c9a1b484c637abe$var$defaultRadius(d) {
    return Math.sqrt(d.value);
}
function $5c9a1b484c637abe$export$2e2bcd8739ae039() {
    var radius = null, dx = 1, dy = 1, padding = (0, $6m0qb.constantZero);
    function pack(root) {
        root.x = dx / 2, root.y = dy / 2;
        if (radius) root.eachBefore($5c9a1b484c637abe$var$radiusLeaf(radius)).eachAfter($5c9a1b484c637abe$var$packChildren(padding, 0.5)).eachBefore($5c9a1b484c637abe$var$translateChild(1));
        else root.eachBefore($5c9a1b484c637abe$var$radiusLeaf($5c9a1b484c637abe$var$defaultRadius)).eachAfter($5c9a1b484c637abe$var$packChildren((0, $6m0qb.constantZero), 1)).eachAfter($5c9a1b484c637abe$var$packChildren(padding, root.r / Math.min(dx, dy))).eachBefore($5c9a1b484c637abe$var$translateChild(Math.min(dx, dy) / (2 * root.r)));
        return root;
    }
    pack.radius = function(x) {
        return arguments.length ? (radius = (0, $lHjA2.optional)(x), pack) : radius;
    };
    pack.size = function(x) {
        return arguments.length ? (dx = +x[0], dy = +x[1], pack) : [
            dx,
            dy
        ];
    };
    pack.padding = function(x) {
        return arguments.length ? (padding = typeof x === "function" ? x : (0, $6m0qb.default)(+x), pack) : padding;
    };
    return pack;
}
function $5c9a1b484c637abe$var$radiusLeaf(radius) {
    return function(node) {
        if (!node.children) node.r = Math.max(0, +radius(node) || 0);
    };
}
function $5c9a1b484c637abe$var$packChildren(padding, k) {
    return function(node) {
        if (children = node.children) {
            var children, i, n = children.length, r = padding(node) * k || 0, e;
            if (r) for(i = 0; i < n; ++i)children[i].r += r;
            e = (0, $e2gyk.packEnclose)(children);
            if (r) for(i = 0; i < n; ++i)children[i].r -= r;
            node.r = e + r;
        }
    };
}
function $5c9a1b484c637abe$var$translateChild(k) {
    return function(node) {
        var parent = node.parent;
        node.r *= k;
        if (parent) {
            node.x = parent.x + k * node.x;
            node.y = parent.y + k * node.y;
        }
    };
}

});
parcelRegister("e2gyk", function(module, exports) {

$parcel$export(module.exports, "packEnclose", () => $a37e17962001c19e$export$b86b5dcbc4bfc7a7);
$parcel$export(module.exports, "default", () => $a37e17962001c19e$export$2e2bcd8739ae039);

var $67LyN = parcelRequire("67LyN");
function $a37e17962001c19e$var$place(b, a, c) {
    var dx = b.x - a.x, x, a2, dy = b.y - a.y, y, b2, d2 = dx * dx + dy * dy;
    if (d2) {
        a2 = a.r + c.r, a2 *= a2;
        b2 = b.r + c.r, b2 *= b2;
        if (a2 > b2) {
            x = (d2 + b2 - a2) / (2 * d2);
            y = Math.sqrt(Math.max(0, b2 / d2 - x * x));
            c.x = b.x - x * dx - y * dy;
            c.y = b.y - x * dy + y * dx;
        } else {
            x = (d2 + a2 - b2) / (2 * d2);
            y = Math.sqrt(Math.max(0, a2 / d2 - x * x));
            c.x = a.x + x * dx - y * dy;
            c.y = a.y + x * dy + y * dx;
        }
    } else {
        c.x = a.x + c.r;
        c.y = a.y;
    }
}
function $a37e17962001c19e$var$intersects(a, b) {
    var dr = a.r + b.r - 1e-6, dx = b.x - a.x, dy = b.y - a.y;
    return dr > 0 && dr * dr > dx * dx + dy * dy;
}
function $a37e17962001c19e$var$score(node) {
    var a = node._, b = node.next._, ab = a.r + b.r, dx = (a.x * b.r + b.x * a.r) / ab, dy = (a.y * b.r + b.y * a.r) / ab;
    return dx * dx + dy * dy;
}
function $a37e17962001c19e$var$Node(circle) {
    this._ = circle;
    this.next = null;
    this.previous = null;
}
function $a37e17962001c19e$export$b86b5dcbc4bfc7a7(circles) {
    if (!(n = circles.length)) return 0;
    var a, b, c, n, aa, ca, i, j, k, sj, sk;
    // Place the first circle.
    a = circles[0], a.x = 0, a.y = 0;
    if (!(n > 1)) return a.r;
    // Place the second circle.
    b = circles[1], a.x = -b.r, b.x = a.r, b.y = 0;
    if (!(n > 2)) return a.r + b.r;
    // Place the third circle.
    $a37e17962001c19e$var$place(b, a, c = circles[2]);
    // Initialize the front-chain using the first three circles a, b and c.
    a = new $a37e17962001c19e$var$Node(a), b = new $a37e17962001c19e$var$Node(b), c = new $a37e17962001c19e$var$Node(c);
    a.next = c.previous = b;
    b.next = a.previous = c;
    c.next = b.previous = a;
    // Attempt to place each remaining circle…
    pack: for(i = 3; i < n; ++i){
        $a37e17962001c19e$var$place(a._, b._, c = circles[i]), c = new $a37e17962001c19e$var$Node(c);
        // Find the closest intersecting circle on the front-chain, if any.
        // “Closeness” is determined by linear distance along the front-chain.
        // “Ahead” or “behind” is likewise determined by linear distance.
        j = b.next, k = a.previous, sj = b._.r, sk = a._.r;
        do if (sj <= sk) {
            if ($a37e17962001c19e$var$intersects(j._, c._)) {
                b = j, a.next = b, b.previous = a, --i;
                continue pack;
            }
            sj += j._.r, j = j.next;
        } else {
            if ($a37e17962001c19e$var$intersects(k._, c._)) {
                a = k, a.next = b, b.previous = a, --i;
                continue pack;
            }
            sk += k._.r, k = k.previous;
        }
        while (j !== k.next);
        // Success! Insert the new circle c between a and b.
        c.previous = a, c.next = b, a.next = b.previous = b = c;
        // Compute the new closest circle pair to the centroid.
        aa = $a37e17962001c19e$var$score(a);
        while((c = c.next) !== b)if ((ca = $a37e17962001c19e$var$score(c)) < aa) a = c, aa = ca;
        b = a.next;
    }
    // Compute the enclosing circle of the front chain.
    a = [
        b._
    ], c = b;
    while((c = c.next) !== b)a.push(c._);
    c = (0, $67LyN.default)(a);
    // Translate the circles to put the enclosing circle around the origin.
    for(i = 0; i < n; ++i)a = circles[i], a.x -= c.x, a.y -= c.y;
    return c.r;
}
function $a37e17962001c19e$export$2e2bcd8739ae039(circles) {
    $a37e17962001c19e$export$b86b5dcbc4bfc7a7(circles);
    return circles;
}

});
parcelRegister("67LyN", function(module, exports) {

$parcel$export(module.exports, "default", () => $47584a051c4efa58$export$2e2bcd8739ae039);

var $iYmOi = parcelRequire("iYmOi");
function $47584a051c4efa58$export$2e2bcd8739ae039(circles) {
    var i = 0, n = (circles = (0, $iYmOi.shuffle)((0, $iYmOi.slice).call(circles))).length, B = [], p, e;
    while(i < n){
        p = circles[i];
        if (e && $47584a051c4efa58$var$enclosesWeak(e, p)) ++i;
        else e = $47584a051c4efa58$var$encloseBasis(B = $47584a051c4efa58$var$extendBasis(B, p)), i = 0;
    }
    return e;
}
function $47584a051c4efa58$var$extendBasis(B, p) {
    var i, j;
    if ($47584a051c4efa58$var$enclosesWeakAll(p, B)) return [
        p
    ];
    // If we get here then B must have at least one element.
    for(i = 0; i < B.length; ++i){
        if ($47584a051c4efa58$var$enclosesNot(p, B[i]) && $47584a051c4efa58$var$enclosesWeakAll($47584a051c4efa58$var$encloseBasis2(B[i], p), B)) return [
            B[i],
            p
        ];
    }
    // If we get here then B must have at least two elements.
    for(i = 0; i < B.length - 1; ++i)for(j = i + 1; j < B.length; ++j){
        if ($47584a051c4efa58$var$enclosesNot($47584a051c4efa58$var$encloseBasis2(B[i], B[j]), p) && $47584a051c4efa58$var$enclosesNot($47584a051c4efa58$var$encloseBasis2(B[i], p), B[j]) && $47584a051c4efa58$var$enclosesNot($47584a051c4efa58$var$encloseBasis2(B[j], p), B[i]) && $47584a051c4efa58$var$enclosesWeakAll($47584a051c4efa58$var$encloseBasis3(B[i], B[j], p), B)) return [
            B[i],
            B[j],
            p
        ];
    }
    // If we get here then something is very wrong.
    throw new Error;
}
function $47584a051c4efa58$var$enclosesNot(a, b) {
    var dr = a.r - b.r, dx = b.x - a.x, dy = b.y - a.y;
    return dr < 0 || dr * dr < dx * dx + dy * dy;
}
function $47584a051c4efa58$var$enclosesWeak(a, b) {
    var dr = a.r - b.r + 1e-6, dx = b.x - a.x, dy = b.y - a.y;
    return dr > 0 && dr * dr > dx * dx + dy * dy;
}
function $47584a051c4efa58$var$enclosesWeakAll(a, B) {
    for(var i = 0; i < B.length; ++i){
        if (!$47584a051c4efa58$var$enclosesWeak(a, B[i])) return false;
    }
    return true;
}
function $47584a051c4efa58$var$encloseBasis(B) {
    switch(B.length){
        case 1:
            return $47584a051c4efa58$var$encloseBasis1(B[0]);
        case 2:
            return $47584a051c4efa58$var$encloseBasis2(B[0], B[1]);
        case 3:
            return $47584a051c4efa58$var$encloseBasis3(B[0], B[1], B[2]);
    }
}
function $47584a051c4efa58$var$encloseBasis1(a) {
    return {
        x: a.x,
        y: a.y,
        r: a.r
    };
}
function $47584a051c4efa58$var$encloseBasis2(a, b) {
    var x1 = a.x, y1 = a.y, r1 = a.r, x2 = b.x, y2 = b.y, r2 = b.r, x21 = x2 - x1, y21 = y2 - y1, r21 = r2 - r1, l = Math.sqrt(x21 * x21 + y21 * y21);
    return {
        x: (x1 + x2 + x21 / l * r21) / 2,
        y: (y1 + y2 + y21 / l * r21) / 2,
        r: (l + r1 + r2) / 2
    };
}
function $47584a051c4efa58$var$encloseBasis3(a, b, c) {
    var x1 = a.x, y1 = a.y, r1 = a.r, x2 = b.x, y2 = b.y, r2 = b.r, x3 = c.x, y3 = c.y, r3 = c.r, a2 = x1 - x2, a3 = x1 - x3, b2 = y1 - y2, b3 = y1 - y3, c2 = r2 - r1, c3 = r3 - r1, d1 = x1 * x1 + y1 * y1 - r1 * r1, d2 = d1 - x2 * x2 - y2 * y2 + r2 * r2, d3 = d1 - x3 * x3 - y3 * y3 + r3 * r3, ab = a3 * b2 - a2 * b3, xa = (b2 * d3 - b3 * d2) / (ab * 2) - x1, xb = (b3 * c2 - b2 * c3) / ab, ya = (a3 * d2 - a2 * d3) / (ab * 2) - y1, yb = (a2 * c3 - a3 * c2) / ab, A = xb * xb + yb * yb - 1, B = 2 * (r1 + xa * xb + ya * yb), C = xa * xa + ya * ya - r1 * r1, r = -(A ? (B + Math.sqrt(B * B - 4 * A * C)) / (2 * A) : C / B);
    return {
        x: x1 + xa + xb * r,
        y: y1 + ya + yb * r,
        r: r
    };
}

});
parcelRegister("iYmOi", function(module, exports) {

$parcel$export(module.exports, "slice", () => $dcff8638251d5d42$export$58adb3bec8346d0f);
$parcel$export(module.exports, "shuffle", () => $dcff8638251d5d42$export$448332262467e042);
var $dcff8638251d5d42$export$58adb3bec8346d0f = Array.prototype.slice;
function $dcff8638251d5d42$export$448332262467e042(array) {
    var m = array.length, t, i;
    while(m){
        i = Math.random() * m-- | 0;
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

});



parcelRegister("lHjA2", function(module, exports) {

$parcel$export(module.exports, "optional", () => $fcbccd5c3f734adb$export$516e28dec6a4b6d4);
$parcel$export(module.exports, "required", () => $fcbccd5c3f734adb$export$a7a0278c004aac3f);
function $fcbccd5c3f734adb$export$516e28dec6a4b6d4(f) {
    return f == null ? null : $fcbccd5c3f734adb$export$a7a0278c004aac3f(f);
}
function $fcbccd5c3f734adb$export$a7a0278c004aac3f(f) {
    if (typeof f !== "function") throw new Error;
    return f;
}

});

parcelRegister("6m0qb", function(module, exports) {

$parcel$export(module.exports, "constantZero", () => $4a051fccd1686a90$export$99e2e371aa6a9db);
$parcel$export(module.exports, "default", () => $4a051fccd1686a90$export$2e2bcd8739ae039);
function $4a051fccd1686a90$export$99e2e371aa6a9db() {
    return 0;
}
function $4a051fccd1686a90$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}

});


parcelRegister("l42Pk", function(module, exports) {

$parcel$export(module.exports, "default", () => $f55c2a12c316df9f$export$2e2bcd8739ae039);

var $bGc0w = parcelRequire("bGc0w");

var $bTi5M = parcelRequire("bTi5M");
function $f55c2a12c316df9f$export$2e2bcd8739ae039() {
    var dx = 1, dy = 1, padding = 0, round = false;
    function partition(root) {
        var n = root.height + 1;
        root.x0 = root.y0 = padding;
        root.x1 = dx;
        root.y1 = dy / n;
        root.eachBefore(positionNode(dy, n));
        if (round) root.eachBefore((0, $bGc0w.default));
        return root;
    }
    function positionNode(dy, n) {
        return function(node) {
            if (node.children) (0, $bTi5M.default)(node, node.x0, dy * (node.depth + 1) / n, node.x1, dy * (node.depth + 2) / n);
            var x0 = node.x0, y0 = node.y0, x1 = node.x1 - padding, y1 = node.y1 - padding;
            if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
            if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
            node.x0 = x0;
            node.y0 = y0;
            node.x1 = x1;
            node.y1 = y1;
        };
    }
    partition.round = function(x) {
        return arguments.length ? (round = !!x, partition) : round;
    };
    partition.size = function(x) {
        return arguments.length ? (dx = +x[0], dy = +x[1], partition) : [
            dx,
            dy
        ];
    };
    partition.padding = function(x) {
        return arguments.length ? (padding = +x, partition) : padding;
    };
    return partition;
}

});
parcelRegister("bGc0w", function(module, exports) {

$parcel$export(module.exports, "default", () => $880cee649bb44858$export$2e2bcd8739ae039);
function $880cee649bb44858$export$2e2bcd8739ae039(node) {
    node.x0 = Math.round(node.x0);
    node.y0 = Math.round(node.y0);
    node.x1 = Math.round(node.x1);
    node.y1 = Math.round(node.y1);
}

});

parcelRegister("bTi5M", function(module, exports) {

$parcel$export(module.exports, "default", () => $8a82dd7f8a426ce0$export$2e2bcd8739ae039);
function $8a82dd7f8a426ce0$export$2e2bcd8739ae039(parent, x0, y0, x1, y1) {
    var nodes = parent.children, node, i = -1, n = nodes.length, k = parent.value && (x1 - x0) / parent.value;
    while(++i < n){
        node = nodes[i], node.y0 = y0, node.y1 = y1;
        node.x0 = x0, node.x1 = x0 += node.value * k;
    }
}

});


parcelRegister("65veo", function(module, exports) {

$parcel$export(module.exports, "default", () => $46eb6f95aa5a2b1f$export$2e2bcd8739ae039);

var $lHjA2 = parcelRequire("lHjA2");

var $dWPne = parcelRequire("dWPne");
var $46eb6f95aa5a2b1f$var$keyPrefix = "$", $46eb6f95aa5a2b1f$var$preroot = {
    depth: -1
}, $46eb6f95aa5a2b1f$var$ambiguous = {};
function $46eb6f95aa5a2b1f$var$defaultId(d) {
    return d.id;
}
function $46eb6f95aa5a2b1f$var$defaultParentId(d) {
    return d.parentId;
}
function $46eb6f95aa5a2b1f$export$2e2bcd8739ae039() {
    var id = $46eb6f95aa5a2b1f$var$defaultId, parentId = $46eb6f95aa5a2b1f$var$defaultParentId;
    function stratify(data) {
        var d, i, n = data.length, root, parent, node, nodes = new Array(n), nodeId, nodeKey, nodeByKey = {};
        for(i = 0; i < n; ++i){
            d = data[i], node = nodes[i] = new (0, $dWPne.Node)(d);
            if ((nodeId = id(d, i, data)) != null && (nodeId += "")) {
                nodeKey = $46eb6f95aa5a2b1f$var$keyPrefix + (node.id = nodeId);
                nodeByKey[nodeKey] = nodeKey in nodeByKey ? $46eb6f95aa5a2b1f$var$ambiguous : node;
            }
        }
        for(i = 0; i < n; ++i){
            node = nodes[i], nodeId = parentId(data[i], i, data);
            if (nodeId == null || !(nodeId += "")) {
                if (root) throw new Error("multiple roots");
                root = node;
            } else {
                parent = nodeByKey[$46eb6f95aa5a2b1f$var$keyPrefix + nodeId];
                if (!parent) throw new Error("missing: " + nodeId);
                if (parent === $46eb6f95aa5a2b1f$var$ambiguous) throw new Error("ambiguous: " + nodeId);
                if (parent.children) parent.children.push(node);
                else parent.children = [
                    node
                ];
                node.parent = parent;
            }
        }
        if (!root) throw new Error("no root");
        root.parent = $46eb6f95aa5a2b1f$var$preroot;
        root.eachBefore(function(node) {
            node.depth = node.parent.depth + 1;
            --n;
        }).eachBefore((0, $dWPne.computeHeight));
        root.parent = null;
        if (n > 0) throw new Error("cycle");
        return root;
    }
    stratify.id = function(x) {
        return arguments.length ? (id = (0, $lHjA2.required)(x), stratify) : id;
    };
    stratify.parentId = function(x) {
        return arguments.length ? (parentId = (0, $lHjA2.required)(x), stratify) : parentId;
    };
    return stratify;
}

});

parcelRegister("dt7LF", function(module, exports) {

$parcel$export(module.exports, "default", () => $9ce40254c32a7566$export$2e2bcd8739ae039);

var $dWPne = parcelRequire("dWPne");
function $9ce40254c32a7566$var$defaultSeparation(a, b) {
    return a.parent === b.parent ? 1 : 2;
}
// function radialSeparation(a, b) {
//   return (a.parent === b.parent ? 1 : 2) / a.depth;
// }
// This function is used to traverse the left contour of a subtree (or
// subforest). It returns the successor of v on this contour. This successor is
// either given by the leftmost child of v or by the thread of v. The function
// returns null if and only if v is on the highest level of its subtree.
function $9ce40254c32a7566$var$nextLeft(v) {
    var children = v.children;
    return children ? children[0] : v.t;
}
// This function works analogously to nextLeft.
function $9ce40254c32a7566$var$nextRight(v) {
    var children = v.children;
    return children ? children[children.length - 1] : v.t;
}
// Shifts the current subtree rooted at w+. This is done by increasing
// prelim(w+) and mod(w+) by shift.
function $9ce40254c32a7566$var$moveSubtree(wm, wp, shift) {
    var change = shift / (wp.i - wm.i);
    wp.c -= change;
    wp.s += shift;
    wm.c += change;
    wp.z += shift;
    wp.m += shift;
}
// All other shifts, applied to the smaller subtrees between w- and w+, are
// performed by this function. To prepare the shifts, we have to adjust
// change(w+), shift(w+), and change(w-).
function $9ce40254c32a7566$var$executeShifts(v) {
    var shift = 0, change = 0, children = v.children, i = children.length, w;
    while(--i >= 0){
        w = children[i];
        w.z += shift;
        w.m += shift;
        shift += w.s + (change += w.c);
    }
}
// If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,
// returns the specified (default) ancestor.
function $9ce40254c32a7566$var$nextAncestor(vim, v, ancestor) {
    return vim.a.parent === v.parent ? vim.a : ancestor;
}
function $9ce40254c32a7566$var$TreeNode(node, i) {
    this._ = node;
    this.parent = null;
    this.children = null;
    this.A = null; // default ancestor
    this.a = this; // ancestor
    this.z = 0; // prelim
    this.m = 0; // mod
    this.c = 0; // change
    this.s = 0; // shift
    this.t = null; // thread
    this.i = i; // number
}
$9ce40254c32a7566$var$TreeNode.prototype = Object.create((0, $dWPne.Node).prototype);
function $9ce40254c32a7566$var$treeRoot(root) {
    var tree = new $9ce40254c32a7566$var$TreeNode(root, 0), node, nodes = [
        tree
    ], child, children, i, n;
    while(node = nodes.pop())if (children = node._.children) {
        node.children = new Array(n = children.length);
        for(i = n - 1; i >= 0; --i){
            nodes.push(child = node.children[i] = new $9ce40254c32a7566$var$TreeNode(children[i], i));
            child.parent = node;
        }
    }
    (tree.parent = new $9ce40254c32a7566$var$TreeNode(null, 0)).children = [
        tree
    ];
    return tree;
}
function $9ce40254c32a7566$export$2e2bcd8739ae039() {
    var separation = $9ce40254c32a7566$var$defaultSeparation, dx = 1, dy = 1, nodeSize = null;
    function tree(root) {
        var t = $9ce40254c32a7566$var$treeRoot(root);
        // Compute the layout using Buchheim et al.’s algorithm.
        t.eachAfter(firstWalk), t.parent.m = -t.z;
        t.eachBefore(secondWalk);
        // If a fixed node size is specified, scale x and y.
        if (nodeSize) root.eachBefore(sizeNode);
        else {
            var left = root, right = root, bottom = root;
            root.eachBefore(function(node) {
                if (node.x < left.x) left = node;
                if (node.x > right.x) right = node;
                if (node.depth > bottom.depth) bottom = node;
            });
            var s = left === right ? 1 : separation(left, right) / 2, tx = s - left.x, kx = dx / (right.x + s + tx), ky = dy / (bottom.depth || 1);
            root.eachBefore(function(node) {
                node.x = (node.x + tx) * kx;
                node.y = node.depth * ky;
            });
        }
        return root;
    }
    // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is
    // applied recursively to the children of v, as well as the function
    // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the
    // node v is placed to the midpoint of its outermost children.
    function firstWalk(v) {
        var children = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
        if (children) {
            $9ce40254c32a7566$var$executeShifts(v);
            var midpoint = (children[0].z + children[children.length - 1].z) / 2;
            if (w) {
                v.z = w.z + separation(v._, w._);
                v.m = v.z - midpoint;
            } else v.z = midpoint;
        } else if (w) v.z = w.z + separation(v._, w._);
        v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
    }
    // Computes all real x-coordinates by summing up the modifiers recursively.
    function secondWalk(v) {
        v._.x = v.z + v.parent.m;
        v.m += v.parent.m;
    }
    // The core of the algorithm. Here, a new subtree is combined with the
    // previous subtrees. Threads are used to traverse the inside and outside
    // contours of the left and right subtree up to the highest common level. The
    // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the
    // superscript o means outside and i means inside, the subscript - means left
    // subtree and + means right subtree. For summing up the modifiers along the
    // contour, we use respective variables si+, si-, so-, and so+. Whenever two
    // nodes of the inside contours conflict, we compute the left one of the
    // greatest uncommon ancestors using the function ANCESTOR and call MOVE
    // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.
    // Finally, we add a new thread (if necessary).
    function apportion(v, w, ancestor) {
        if (w) {
            var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
            while(vim = $9ce40254c32a7566$var$nextRight(vim), vip = $9ce40254c32a7566$var$nextLeft(vip), vim && vip){
                vom = $9ce40254c32a7566$var$nextLeft(vom);
                vop = $9ce40254c32a7566$var$nextRight(vop);
                vop.a = v;
                shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
                if (shift > 0) {
                    $9ce40254c32a7566$var$moveSubtree($9ce40254c32a7566$var$nextAncestor(vim, v, ancestor), v, shift);
                    sip += shift;
                    sop += shift;
                }
                sim += vim.m;
                sip += vip.m;
                som += vom.m;
                sop += vop.m;
            }
            if (vim && !$9ce40254c32a7566$var$nextRight(vop)) {
                vop.t = vim;
                vop.m += sim - sop;
            }
            if (vip && !$9ce40254c32a7566$var$nextLeft(vom)) {
                vom.t = vip;
                vom.m += sip - som;
                ancestor = v;
            }
        }
        return ancestor;
    }
    function sizeNode(node) {
        node.x *= dx;
        node.y = node.depth * dy;
    }
    tree.separation = function(x) {
        return arguments.length ? (separation = x, tree) : separation;
    };
    tree.size = function(x) {
        return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : nodeSize ? null : [
            dx,
            dy
        ];
    };
    tree.nodeSize = function(x) {
        return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : nodeSize ? [
            dx,
            dy
        ] : null;
    };
    return tree;
}

});

parcelRegister("lPpkX", function(module, exports) {

$parcel$export(module.exports, "default", () => $fe4203d09c2c2a21$export$2e2bcd8739ae039);

var $bGc0w = parcelRequire("bGc0w");

var $8AgZS = parcelRequire("8AgZS");

var $lHjA2 = parcelRequire("lHjA2");

var $6m0qb = parcelRequire("6m0qb");
function $fe4203d09c2c2a21$export$2e2bcd8739ae039() {
    var tile = (0, $8AgZS.default), round = false, dx = 1, dy = 1, paddingStack = [
        0
    ], paddingInner = (0, $6m0qb.constantZero), paddingTop = (0, $6m0qb.constantZero), paddingRight = (0, $6m0qb.constantZero), paddingBottom = (0, $6m0qb.constantZero), paddingLeft = (0, $6m0qb.constantZero);
    function treemap(root) {
        root.x0 = root.y0 = 0;
        root.x1 = dx;
        root.y1 = dy;
        root.eachBefore(positionNode);
        paddingStack = [
            0
        ];
        if (round) root.eachBefore((0, $bGc0w.default));
        return root;
    }
    function positionNode(node) {
        var p = paddingStack[node.depth], x0 = node.x0 + p, y0 = node.y0 + p, x1 = node.x1 - p, y1 = node.y1 - p;
        if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
        if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
        node.x0 = x0;
        node.y0 = y0;
        node.x1 = x1;
        node.y1 = y1;
        if (node.children) {
            p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
            x0 += paddingLeft(node) - p;
            y0 += paddingTop(node) - p;
            x1 -= paddingRight(node) - p;
            y1 -= paddingBottom(node) - p;
            if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
            if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
            tile(node, x0, y0, x1, y1);
        }
    }
    treemap.round = function(x) {
        return arguments.length ? (round = !!x, treemap) : round;
    };
    treemap.size = function(x) {
        return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [
            dx,
            dy
        ];
    };
    treemap.tile = function(x) {
        return arguments.length ? (tile = (0, $lHjA2.required)(x), treemap) : tile;
    };
    treemap.padding = function(x) {
        return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
    };
    treemap.paddingInner = function(x) {
        return arguments.length ? (paddingInner = typeof x === "function" ? x : (0, $6m0qb.default)(+x), treemap) : paddingInner;
    };
    treemap.paddingOuter = function(x) {
        return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
    };
    treemap.paddingTop = function(x) {
        return arguments.length ? (paddingTop = typeof x === "function" ? x : (0, $6m0qb.default)(+x), treemap) : paddingTop;
    };
    treemap.paddingRight = function(x) {
        return arguments.length ? (paddingRight = typeof x === "function" ? x : (0, $6m0qb.default)(+x), treemap) : paddingRight;
    };
    treemap.paddingBottom = function(x) {
        return arguments.length ? (paddingBottom = typeof x === "function" ? x : (0, $6m0qb.default)(+x), treemap) : paddingBottom;
    };
    treemap.paddingLeft = function(x) {
        return arguments.length ? (paddingLeft = typeof x === "function" ? x : (0, $6m0qb.default)(+x), treemap) : paddingLeft;
    };
    return treemap;
}

});
parcelRegister("8AgZS", function(module, exports) {

$parcel$export(module.exports, "phi", () => $63fedec1427153da$export$324943737027944a);
$parcel$export(module.exports, "squarifyRatio", () => $63fedec1427153da$export$9ff1217655212093);
$parcel$export(module.exports, "default", () => $63fedec1427153da$export$2e2bcd8739ae039);

var $bTi5M = parcelRequire("bTi5M");

var $607MI = parcelRequire("607MI");
var $63fedec1427153da$export$324943737027944a = (1 + Math.sqrt(5)) / 2;
function $63fedec1427153da$export$9ff1217655212093(ratio, parent, x0, y0, x1, y1) {
    var rows = [], nodes = parent.children, row, nodeValue, i0 = 0, i1 = 0, n = nodes.length, dx, dy, value = parent.value, sumValue, minValue, maxValue, newRatio, minRatio, alpha, beta;
    while(i0 < n){
        dx = x1 - x0, dy = y1 - y0;
        // Find the next non-empty node.
        do sumValue = nodes[i1++].value;
        while (!sumValue && i1 < n);
        minValue = maxValue = sumValue;
        alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
        beta = sumValue * sumValue * alpha;
        minRatio = Math.max(maxValue / beta, beta / minValue);
        // Keep adding nodes while the aspect ratio maintains or improves.
        for(; i1 < n; ++i1){
            sumValue += nodeValue = nodes[i1].value;
            if (nodeValue < minValue) minValue = nodeValue;
            if (nodeValue > maxValue) maxValue = nodeValue;
            beta = sumValue * sumValue * alpha;
            newRatio = Math.max(maxValue / beta, beta / minValue);
            if (newRatio > minRatio) {
                sumValue -= nodeValue;
                break;
            }
            minRatio = newRatio;
        }
        // Position and record the row orientation.
        rows.push(row = {
            value: sumValue,
            dice: dx < dy,
            children: nodes.slice(i0, i1)
        });
        if (row.dice) (0, $bTi5M.default)(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);
        else (0, $607MI.default)(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
        value -= sumValue, i0 = i1;
    }
    return rows;
}
var $63fedec1427153da$export$2e2bcd8739ae039 = function custom(ratio) {
    function squarify(parent, x0, y0, x1, y1) {
        $63fedec1427153da$export$9ff1217655212093(ratio, parent, x0, y0, x1, y1);
    }
    squarify.ratio = function(x) {
        return custom((x = +x) > 1 ? x : 1);
    };
    return squarify;
}($63fedec1427153da$export$324943737027944a);

});
parcelRegister("607MI", function(module, exports) {

$parcel$export(module.exports, "default", () => $45e8c80e5a95cc0e$export$2e2bcd8739ae039);
function $45e8c80e5a95cc0e$export$2e2bcd8739ae039(parent, x0, y0, x1, y1) {
    var nodes = parent.children, node, i = -1, n = nodes.length, k = parent.value && (y1 - y0) / parent.value;
    while(++i < n){
        node = nodes[i], node.x0 = x0, node.x1 = x1;
        node.y0 = y0, node.y1 = y0 += node.value * k;
    }
}

});



parcelRegister("hN27z", function(module, exports) {

$parcel$export(module.exports, "default", () => $cf38a880902e4094$export$2e2bcd8739ae039);
function $cf38a880902e4094$export$2e2bcd8739ae039(parent, x0, y0, x1, y1) {
    var nodes = parent.children, i, n = nodes.length, sum, sums = new Array(n + 1);
    for(sums[0] = sum = i = 0; i < n; ++i)sums[i + 1] = sum += nodes[i].value;
    partition(0, n, parent.value, x0, y0, x1, y1);
    function partition(i, j, value, x0, y0, x1, y1) {
        if (i >= j - 1) {
            var node = nodes[i];
            node.x0 = x0, node.y0 = y0;
            node.x1 = x1, node.y1 = y1;
            return;
        }
        var valueOffset = sums[i], valueTarget = value / 2 + valueOffset, k = i + 1, hi = j - 1;
        while(k < hi){
            var mid = k + hi >>> 1;
            if (sums[mid] < valueTarget) k = mid + 1;
            else hi = mid;
        }
        if (valueTarget - sums[k - 1] < sums[k] - valueTarget && i + 1 < k) --k;
        var valueLeft = sums[k] - valueOffset, valueRight = value - valueLeft;
        if (x1 - x0 > y1 - y0) {
            var xk = (x0 * valueRight + x1 * valueLeft) / value;
            partition(i, k, valueLeft, x0, y0, xk, y1);
            partition(k, j, valueRight, xk, y0, x1, y1);
        } else {
            var yk = (y0 * valueRight + y1 * valueLeft) / value;
            partition(i, k, valueLeft, x0, y0, x1, yk);
            partition(k, j, valueRight, x0, yk, x1, y1);
        }
    }
}

});

parcelRegister("43jAF", function(module, exports) {

$parcel$export(module.exports, "default", () => $2f36a379af6cfc38$export$2e2bcd8739ae039);

var $bTi5M = parcelRequire("bTi5M");

var $607MI = parcelRequire("607MI");
function $2f36a379af6cfc38$export$2e2bcd8739ae039(parent, x0, y0, x1, y1) {
    (parent.depth & 1 ? (0, $607MI.default) : (0, $bTi5M.default))(parent, x0, y0, x1, y1);
}

});

parcelRegister("fWVT1", function(module, exports) {

$parcel$export(module.exports, "default", () => $b9c92cd6cfbc3f62$export$2e2bcd8739ae039);

var $bTi5M = parcelRequire("bTi5M");

var $607MI = parcelRequire("607MI");

var $8AgZS = parcelRequire("8AgZS");
var $b9c92cd6cfbc3f62$export$2e2bcd8739ae039 = function custom(ratio) {
    function resquarify(parent, x0, y0, x1, y1) {
        if ((rows = parent._squarify) && rows.ratio === ratio) {
            var rows, row, nodes, i, j = -1, n, m = rows.length, value = parent.value;
            while(++j < m){
                row = rows[j], nodes = row.children;
                for(i = row.value = 0, n = nodes.length; i < n; ++i)row.value += nodes[i].value;
                if (row.dice) (0, $bTi5M.default)(row, x0, y0, x1, y0 += (y1 - y0) * row.value / value);
                else (0, $607MI.default)(row, x0, y0, x0 += (x1 - x0) * row.value / value, y1);
                value -= row.value;
            }
        } else {
            parent._squarify = rows = (0, $8AgZS.squarifyRatio)(ratio, parent, x0, y0, x1, y1);
            rows.ratio = ratio;
        }
    }
    resquarify.ratio = function(x) {
        return custom((x = +x) > 1 ? x : 1);
    };
    return resquarify;
}((0, $8AgZS.phi));

});


parcelRegister("24GOI", function(module, exports) {

$parcel$export(module.exports, "interpolate", () => (parcelRequire("03m37")).default);
$parcel$export(module.exports, "interpolateArray", () => (parcelRequire("by39a")).default);
$parcel$export(module.exports, "interpolateBasis", () => (parcelRequire("8IEIx")).default);
$parcel$export(module.exports, "interpolateBasisClosed", () => (parcelRequire("gCUxL")).default);
$parcel$export(module.exports, "interpolateDate", () => (parcelRequire("eqaiw")).default);
$parcel$export(module.exports, "interpolateDiscrete", () => (parcelRequire("cyR7d")).default);
$parcel$export(module.exports, "interpolateHue", () => (parcelRequire("dxTCG")).default);
$parcel$export(module.exports, "interpolateNumber", () => (parcelRequire("97hTl")).default);
$parcel$export(module.exports, "interpolateNumberArray", () => (parcelRequire("8XNGd")).default);
$parcel$export(module.exports, "interpolateObject", () => (parcelRequire("e8zLv")).default);
$parcel$export(module.exports, "interpolateRound", () => (parcelRequire("gXid3")).default);
$parcel$export(module.exports, "interpolateString", () => (parcelRequire("a20cS")).default);
$parcel$export(module.exports, "interpolateTransformCss", () => (parcelRequire("eDhJF")).interpolateTransformCss);
$parcel$export(module.exports, "interpolateTransformSvg", () => (parcelRequire("eDhJF")).interpolateTransformSvg);
$parcel$export(module.exports, "interpolateZoom", () => (parcelRequire("8JKMb")).default);
$parcel$export(module.exports, "interpolateRgb", () => (parcelRequire("emQa8")).default);
$parcel$export(module.exports, "interpolateRgbBasis", () => (parcelRequire("emQa8")).rgbBasis);
$parcel$export(module.exports, "interpolateRgbBasisClosed", () => (parcelRequire("emQa8")).rgbBasisClosed);
$parcel$export(module.exports, "interpolateHsl", () => (parcelRequire("hxewM")).default);
$parcel$export(module.exports, "interpolateHslLong", () => (parcelRequire("hxewM")).hslLong);
$parcel$export(module.exports, "interpolateLab", () => (parcelRequire("ir10T")).default);
$parcel$export(module.exports, "interpolateHcl", () => (parcelRequire("bUymS")).default);
$parcel$export(module.exports, "interpolateHclLong", () => (parcelRequire("bUymS")).hclLong);
$parcel$export(module.exports, "interpolateCubehelix", () => (parcelRequire("d0aNl")).default);
$parcel$export(module.exports, "interpolateCubehelixLong", () => (parcelRequire("d0aNl")).cubehelixLong);
$parcel$export(module.exports, "piecewise", () => (parcelRequire("1anPJ")).default);
$parcel$export(module.exports, "quantize", () => (parcelRequire("13GXd")).default);

var $03m37 = parcelRequire("03m37");

var $by39a = parcelRequire("by39a");

var $8IEIx = parcelRequire("8IEIx");

var $gCUxL = parcelRequire("gCUxL");

var $eqaiw = parcelRequire("eqaiw");

var $cyR7d = parcelRequire("cyR7d");

var $dxTCG = parcelRequire("dxTCG");

var $97hTl = parcelRequire("97hTl");

var $8XNGd = parcelRequire("8XNGd");

var $e8zLv = parcelRequire("e8zLv");

var $gXid3 = parcelRequire("gXid3");

var $a20cS = parcelRequire("a20cS");

var $eDhJF = parcelRequire("eDhJF");

var $8JKMb = parcelRequire("8JKMb");

var $emQa8 = parcelRequire("emQa8");

var $hxewM = parcelRequire("hxewM");

var $ir10T = parcelRequire("ir10T");

var $bUymS = parcelRequire("bUymS");

var $d0aNl = parcelRequire("d0aNl");

var $1anPJ = parcelRequire("1anPJ");

var $13GXd = parcelRequire("13GXd");

});
parcelRegister("cyR7d", function(module, exports) {

$parcel$export(module.exports, "default", () => $9251dc99d29c999d$export$2e2bcd8739ae039);
function $9251dc99d29c999d$export$2e2bcd8739ae039(range) {
    var n = range.length;
    return function(t) {
        return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
    };
}

});

parcelRegister("dxTCG", function(module, exports) {

$parcel$export(module.exports, "default", () => $9dc980f76fb8250c$export$2e2bcd8739ae039);

var $2WQVg = parcelRequire("2WQVg");
function $9dc980f76fb8250c$export$2e2bcd8739ae039(a, b) {
    var i = (0, $2WQVg.hue)(+a, +b);
    return function(t) {
        var x = i(t);
        return x - 360 * Math.floor(x / 360);
    };
}

});

parcelRegister("gXid3", function(module, exports) {

$parcel$export(module.exports, "default", () => $c58048106a7235e8$export$2e2bcd8739ae039);
function $c58048106a7235e8$export$2e2bcd8739ae039(a, b) {
    return a = +a, b = +b, function(t) {
        return Math.round(a * (1 - t) + b * t);
    };
}

});

parcelRegister("8JKMb", function(module, exports) {

$parcel$export(module.exports, "default", () => $65c6cf7c90c701d3$export$2e2bcd8739ae039);
var $65c6cf7c90c701d3$var$rho = Math.SQRT2, $65c6cf7c90c701d3$var$rho2 = 2, $65c6cf7c90c701d3$var$rho4 = 4, $65c6cf7c90c701d3$var$epsilon2 = 1e-12;
function $65c6cf7c90c701d3$var$cosh(x) {
    return ((x = Math.exp(x)) + 1 / x) / 2;
}
function $65c6cf7c90c701d3$var$sinh(x) {
    return ((x = Math.exp(x)) - 1 / x) / 2;
}
function $65c6cf7c90c701d3$var$tanh(x) {
    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
function $65c6cf7c90c701d3$export$2e2bcd8739ae039(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
    // Special case for u0 ≅ u1.
    if (d2 < $65c6cf7c90c701d3$var$epsilon2) {
        S = Math.log(w1 / w0) / $65c6cf7c90c701d3$var$rho;
        i = function(t) {
            return [
                ux0 + t * dx,
                uy0 + t * dy,
                w0 * Math.exp($65c6cf7c90c701d3$var$rho * t * S)
            ];
        };
    } else {
        var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + $65c6cf7c90c701d3$var$rho4 * d2) / (2 * w0 * $65c6cf7c90c701d3$var$rho2 * d1), b1 = (w1 * w1 - w0 * w0 - $65c6cf7c90c701d3$var$rho4 * d2) / (2 * w1 * $65c6cf7c90c701d3$var$rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
        S = (r1 - r0) / $65c6cf7c90c701d3$var$rho;
        i = function(t) {
            var s = t * S, coshr0 = $65c6cf7c90c701d3$var$cosh(r0), u = w0 / ($65c6cf7c90c701d3$var$rho2 * d1) * (coshr0 * $65c6cf7c90c701d3$var$tanh($65c6cf7c90c701d3$var$rho * s + r0) - $65c6cf7c90c701d3$var$sinh(r0));
            return [
                ux0 + u * dx,
                uy0 + u * dy,
                w0 * coshr0 / $65c6cf7c90c701d3$var$cosh($65c6cf7c90c701d3$var$rho * s + r0)
            ];
        };
    }
    i.duration = S * 1000;
    return i;
}

});

parcelRegister("hxewM", function(module, exports) {

$parcel$export(module.exports, "default", () => $cc40c9a293881e76$export$2e2bcd8739ae039);
$parcel$export(module.exports, "hslLong", () => $cc40c9a293881e76$export$a2c535e270a59256);

var $abtVK = parcelRequire("abtVK");

var $2WQVg = parcelRequire("2WQVg");
function $cc40c9a293881e76$var$hsl(hue) {
    return function(start, end) {
        var h = hue((start = (0, $abtVK.hsl)(start)).h, (end = (0, $abtVK.hsl)(end)).h), s = (0, $2WQVg.default)(start.s, end.s), l = (0, $2WQVg.default)(start.l, end.l), opacity = (0, $2WQVg.default)(start.opacity, end.opacity);
        return function(t) {
            start.h = h(t);
            start.s = s(t);
            start.l = l(t);
            start.opacity = opacity(t);
            return start + "";
        };
    };
}
var $cc40c9a293881e76$export$2e2bcd8739ae039 = $cc40c9a293881e76$var$hsl((0, $2WQVg.hue));
var $cc40c9a293881e76$export$a2c535e270a59256 = $cc40c9a293881e76$var$hsl((0, $2WQVg.default));

});

parcelRegister("ir10T", function(module, exports) {

$parcel$export(module.exports, "default", () => $d6bb88d510ec257d$export$2e2bcd8739ae039);

var $BkyT1 = parcelRequire("BkyT1");

var $2WQVg = parcelRequire("2WQVg");
function $d6bb88d510ec257d$export$2e2bcd8739ae039(start, end) {
    var l = (0, $2WQVg.default)((start = (0, $BkyT1.default)(start)).l, (end = (0, $BkyT1.default)(end)).l), a = (0, $2WQVg.default)(start.a, end.a), b = (0, $2WQVg.default)(start.b, end.b), opacity = (0, $2WQVg.default)(start.opacity, end.opacity);
    return function(t) {
        start.l = l(t);
        start.a = a(t);
        start.b = b(t);
        start.opacity = opacity(t);
        return start + "";
    };
}

});

parcelRegister("bUymS", function(module, exports) {

$parcel$export(module.exports, "default", () => $8abf956a08f0ba11$export$2e2bcd8739ae039);
$parcel$export(module.exports, "hclLong", () => $8abf956a08f0ba11$export$5aaa50f7615f9b70);

var $BkyT1 = parcelRequire("BkyT1");

var $2WQVg = parcelRequire("2WQVg");
function $8abf956a08f0ba11$var$hcl(hue) {
    return function(start, end) {
        var h = hue((start = (0, $BkyT1.hcl)(start)).h, (end = (0, $BkyT1.hcl)(end)).h), c = (0, $2WQVg.default)(start.c, end.c), l = (0, $2WQVg.default)(start.l, end.l), opacity = (0, $2WQVg.default)(start.opacity, end.opacity);
        return function(t) {
            start.h = h(t);
            start.c = c(t);
            start.l = l(t);
            start.opacity = opacity(t);
            return start + "";
        };
    };
}
var $8abf956a08f0ba11$export$2e2bcd8739ae039 = $8abf956a08f0ba11$var$hcl((0, $2WQVg.hue));
var $8abf956a08f0ba11$export$5aaa50f7615f9b70 = $8abf956a08f0ba11$var$hcl((0, $2WQVg.default));

});

parcelRegister("d0aNl", function(module, exports) {

$parcel$export(module.exports, "default", () => $9773a617b846a78f$export$2e2bcd8739ae039);
$parcel$export(module.exports, "cubehelixLong", () => $9773a617b846a78f$export$934fa09ad474a1b4);

var $6wiJa = parcelRequire("6wiJa");

var $2WQVg = parcelRequire("2WQVg");
function $9773a617b846a78f$var$cubehelix(hue) {
    return function cubehelixGamma(y) {
        y = +y;
        function cubehelix(start, end) {
            var h = hue((start = (0, $6wiJa.default)(start)).h, (end = (0, $6wiJa.default)(end)).h), s = (0, $2WQVg.default)(start.s, end.s), l = (0, $2WQVg.default)(start.l, end.l), opacity = (0, $2WQVg.default)(start.opacity, end.opacity);
            return function(t) {
                start.h = h(t);
                start.s = s(t);
                start.l = l(Math.pow(t, y));
                start.opacity = opacity(t);
                return start + "";
            };
        }
        cubehelix.gamma = cubehelixGamma;
        return cubehelix;
    }(1);
}
var $9773a617b846a78f$export$2e2bcd8739ae039 = $9773a617b846a78f$var$cubehelix((0, $2WQVg.hue));
var $9773a617b846a78f$export$934fa09ad474a1b4 = $9773a617b846a78f$var$cubehelix((0, $2WQVg.default));

});

parcelRegister("1anPJ", function(module, exports) {

$parcel$export(module.exports, "default", () => $0d99366bdfa414ff$export$2e2bcd8739ae039);
function $0d99366bdfa414ff$export$2e2bcd8739ae039(interpolate, values) {
    var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
    while(i < n)I[i] = interpolate(v, v = values[++i]);
    return function(t) {
        var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
        return I[i](t - i);
    };
}

});

parcelRegister("13GXd", function(module, exports) {

$parcel$export(module.exports, "default", () => $0c57640e42ae4e5b$export$2e2bcd8739ae039);
function $0c57640e42ae4e5b$export$2e2bcd8739ae039(interpolator, n) {
    var samples = new Array(n);
    for(var i = 0; i < n; ++i)samples[i] = interpolator(i / (n - 1));
    return samples;
}

});


parcelRegister("aeouR", function(module, exports) {

$parcel$export(module.exports, "path", () => (parcelRequire("ftDUk")).default);

var $ftDUk = parcelRequire("ftDUk");

});

parcelRegister("a2fK7", function(module, exports) {

$parcel$export(module.exports, "polygonArea", () => (parcelRequire("k3UYP")).default);
$parcel$export(module.exports, "polygonCentroid", () => (parcelRequire("j9New")).default);
$parcel$export(module.exports, "polygonHull", () => (parcelRequire("99tpu")).default);
$parcel$export(module.exports, "polygonContains", () => (parcelRequire("eRhj1")).default);
$parcel$export(module.exports, "polygonLength", () => (parcelRequire("5gjSR")).default);

var $k3UYP = parcelRequire("k3UYP");

var $j9New = parcelRequire("j9New");

var $99tpu = parcelRequire("99tpu");

var $eRhj1 = parcelRequire("eRhj1");

var $5gjSR = parcelRequire("5gjSR");

});
parcelRegister("k3UYP", function(module, exports) {

$parcel$export(module.exports, "default", () => $e9b049884ab932a4$export$2e2bcd8739ae039);
function $e9b049884ab932a4$export$2e2bcd8739ae039(polygon) {
    var i = -1, n = polygon.length, a, b = polygon[n - 1], area = 0;
    while(++i < n){
        a = b;
        b = polygon[i];
        area += a[1] * b[0] - a[0] * b[1];
    }
    return area / 2;
}

});

parcelRegister("j9New", function(module, exports) {

$parcel$export(module.exports, "default", () => $df250c4113629967$export$2e2bcd8739ae039);
function $df250c4113629967$export$2e2bcd8739ae039(polygon) {
    var i = -1, n = polygon.length, x = 0, y = 0, a, b = polygon[n - 1], c, k = 0;
    while(++i < n){
        a = b;
        b = polygon[i];
        k += c = a[0] * b[1] - b[0] * a[1];
        x += (a[0] + b[0]) * c;
        y += (a[1] + b[1]) * c;
    }
    return k *= 3, [
        x / k,
        y / k
    ];
}

});

parcelRegister("99tpu", function(module, exports) {

$parcel$export(module.exports, "default", () => $01b83096f0d58190$export$2e2bcd8739ae039);

var $4Gqtj = parcelRequire("4Gqtj");
function $01b83096f0d58190$var$lexicographicOrder(a, b) {
    return a[0] - b[0] || a[1] - b[1];
}
// Computes the upper convex hull per the monotone chain algorithm.
// Assumes points.length >= 3, is sorted by x, unique in y.
// Returns an array of indices into points in left-to-right order.
function $01b83096f0d58190$var$computeUpperHullIndexes(points) {
    var n = points.length, indexes = [
        0,
        1
    ], size = 2;
    for(var i = 2; i < n; ++i){
        while(size > 1 && (0, $4Gqtj.default)(points[indexes[size - 2]], points[indexes[size - 1]], points[i]) <= 0)--size;
        indexes[size++] = i;
    }
    return indexes.slice(0, size); // remove popped points
}
function $01b83096f0d58190$export$2e2bcd8739ae039(points) {
    if ((n = points.length) < 3) return null;
    var i, n, sortedPoints = new Array(n), flippedPoints = new Array(n);
    for(i = 0; i < n; ++i)sortedPoints[i] = [
        +points[i][0],
        +points[i][1],
        i
    ];
    sortedPoints.sort($01b83096f0d58190$var$lexicographicOrder);
    for(i = 0; i < n; ++i)flippedPoints[i] = [
        sortedPoints[i][0],
        -sortedPoints[i][1]
    ];
    var upperIndexes = $01b83096f0d58190$var$computeUpperHullIndexes(sortedPoints), lowerIndexes = $01b83096f0d58190$var$computeUpperHullIndexes(flippedPoints);
    // Construct the hull polygon, removing possible duplicate endpoints.
    var skipLeft = lowerIndexes[0] === upperIndexes[0], skipRight = lowerIndexes[lowerIndexes.length - 1] === upperIndexes[upperIndexes.length - 1], hull = [];
    // Add upper hull in right-to-l order.
    // Then add lower hull in left-to-right order.
    for(i = upperIndexes.length - 1; i >= 0; --i)hull.push(points[sortedPoints[upperIndexes[i]][2]]);
    for(i = +skipLeft; i < lowerIndexes.length - skipRight; ++i)hull.push(points[sortedPoints[lowerIndexes[i]][2]]);
    return hull;
}

});
parcelRegister("4Gqtj", function(module, exports) {

$parcel$export(module.exports, "default", () => $368f9e673ce95f6f$export$2e2bcd8739ae039);
// Returns the 2D cross product of AB and AC vectors, i.e., the z-component of
// the 3D cross product in a quadrant I Cartesian coordinate system (+x is
// right, +y is up). Returns a positive value if ABC is counter-clockwise,
// negative if clockwise, and zero if the points are collinear.
function $368f9e673ce95f6f$export$2e2bcd8739ae039(a, b, c) {
    return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
}

});


parcelRegister("eRhj1", function(module, exports) {

$parcel$export(module.exports, "default", () => $ad1370835e349484$export$2e2bcd8739ae039);
function $ad1370835e349484$export$2e2bcd8739ae039(polygon, point) {
    var n = polygon.length, p = polygon[n - 1], x = point[0], y = point[1], x0 = p[0], y0 = p[1], x1, y1, inside = false;
    for(var i = 0; i < n; ++i){
        p = polygon[i], x1 = p[0], y1 = p[1];
        if (y1 > y !== y0 > y && x < (x0 - x1) * (y - y1) / (y0 - y1) + x1) inside = !inside;
        x0 = x1, y0 = y1;
    }
    return inside;
}

});

parcelRegister("5gjSR", function(module, exports) {

$parcel$export(module.exports, "default", () => $3d4ddee8dd008942$export$2e2bcd8739ae039);
function $3d4ddee8dd008942$export$2e2bcd8739ae039(polygon) {
    var i = -1, n = polygon.length, b = polygon[n - 1], xa, ya, xb = b[0], yb = b[1], perimeter = 0;
    while(++i < n){
        xa = xb;
        ya = yb;
        b = polygon[i];
        xb = b[0];
        yb = b[1];
        xa -= xb;
        ya -= yb;
        perimeter += Math.sqrt(xa * xa + ya * ya);
    }
    return perimeter;
}

});


parcelRegister("iFdqd", function(module, exports) {

$parcel$export(module.exports, "quadtree", () => (parcelRequire("16dty")).default);

var $16dty = parcelRequire("16dty");

});

parcelRegister("7ci6s", function(module, exports) {

$parcel$export(module.exports, "randomUniform", () => (parcelRequire("5Cp3N")).default);
$parcel$export(module.exports, "randomNormal", () => (parcelRequire("km9QG")).default);
$parcel$export(module.exports, "randomLogNormal", () => (parcelRequire("9LPvr")).default);
$parcel$export(module.exports, "randomBates", () => (parcelRequire("lVa7u")).default);
$parcel$export(module.exports, "randomIrwinHall", () => (parcelRequire("jwHOb")).default);
$parcel$export(module.exports, "randomExponential", () => (parcelRequire("iGClT")).default);

var $5Cp3N = parcelRequire("5Cp3N");

var $km9QG = parcelRequire("km9QG");

var $9LPvr = parcelRequire("9LPvr");

var $lVa7u = parcelRequire("lVa7u");

var $jwHOb = parcelRequire("jwHOb");

var $iGClT = parcelRequire("iGClT");

});
parcelRegister("5Cp3N", function(module, exports) {

$parcel$export(module.exports, "default", () => $4173f0cc9b7ba5b1$export$2e2bcd8739ae039);

var $lzITq = parcelRequire("lzITq");
var $4173f0cc9b7ba5b1$export$2e2bcd8739ae039 = function sourceRandomUniform(source) {
    function randomUniform(min, max) {
        min = min == null ? 0 : +min;
        max = max == null ? 1 : +max;
        if (arguments.length === 1) max = min, min = 0;
        else max -= min;
        return function() {
            return source() * max + min;
        };
    }
    randomUniform.source = sourceRandomUniform;
    return randomUniform;
}((0, $lzITq.default));

});
parcelRegister("lzITq", function(module, exports) {

$parcel$export(module.exports, "default", () => $fb4fb0a476840f9f$export$2e2bcd8739ae039);
function $fb4fb0a476840f9f$export$2e2bcd8739ae039() {
    return Math.random();
}

});


parcelRegister("km9QG", function(module, exports) {

$parcel$export(module.exports, "default", () => $ed1d807ebe819473$export$2e2bcd8739ae039);

var $lzITq = parcelRequire("lzITq");
var $ed1d807ebe819473$export$2e2bcd8739ae039 = function sourceRandomNormal(source) {
    function randomNormal(mu, sigma) {
        var x, r;
        mu = mu == null ? 0 : +mu;
        sigma = sigma == null ? 1 : +sigma;
        return function() {
            var y;
            // If available, use the second previously-generated uniform random.
            if (x != null) y = x, x = null;
            else do {
                x = source() * 2 - 1;
                y = source() * 2 - 1;
                r = x * x + y * y;
            }while (!r || r > 1);
            return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
        };
    }
    randomNormal.source = sourceRandomNormal;
    return randomNormal;
}((0, $lzITq.default));

});

parcelRegister("9LPvr", function(module, exports) {

$parcel$export(module.exports, "default", () => $71d074e8c370932d$export$2e2bcd8739ae039);

var $lzITq = parcelRequire("lzITq");

var $km9QG = parcelRequire("km9QG");
var $71d074e8c370932d$export$2e2bcd8739ae039 = function sourceRandomLogNormal(source) {
    function randomLogNormal() {
        var randomNormal = (0, $km9QG.default).source(source).apply(this, arguments);
        return function() {
            return Math.exp(randomNormal());
        };
    }
    randomLogNormal.source = sourceRandomLogNormal;
    return randomLogNormal;
}((0, $lzITq.default));

});

parcelRegister("lVa7u", function(module, exports) {

$parcel$export(module.exports, "default", () => $ff56c5686aadea9e$export$2e2bcd8739ae039);

var $lzITq = parcelRequire("lzITq");

var $jwHOb = parcelRequire("jwHOb");
var $ff56c5686aadea9e$export$2e2bcd8739ae039 = function sourceRandomBates(source) {
    function randomBates(n) {
        var randomIrwinHall = (0, $jwHOb.default).source(source)(n);
        return function() {
            return randomIrwinHall() / n;
        };
    }
    randomBates.source = sourceRandomBates;
    return randomBates;
}((0, $lzITq.default));

});
parcelRegister("jwHOb", function(module, exports) {

$parcel$export(module.exports, "default", () => $e372fce452016b4c$export$2e2bcd8739ae039);

var $lzITq = parcelRequire("lzITq");
var $e372fce452016b4c$export$2e2bcd8739ae039 = function sourceRandomIrwinHall(source) {
    function randomIrwinHall(n) {
        return function() {
            for(var sum = 0, i = 0; i < n; ++i)sum += source();
            return sum;
        };
    }
    randomIrwinHall.source = sourceRandomIrwinHall;
    return randomIrwinHall;
}((0, $lzITq.default));

});


parcelRegister("iGClT", function(module, exports) {

$parcel$export(module.exports, "default", () => $d9a9e62ddd63f986$export$2e2bcd8739ae039);

var $lzITq = parcelRequire("lzITq");
var $d9a9e62ddd63f986$export$2e2bcd8739ae039 = function sourceRandomExponential(source) {
    function randomExponential(lambda) {
        return function() {
            return -Math.log(1 - source()) / lambda;
        };
    }
    randomExponential.source = sourceRandomExponential;
    return randomExponential;
}((0, $lzITq.default));

});


parcelRegister("4md7b", function(module, exports) {

$parcel$export(module.exports, "scaleBand", () => (parcelRequire("89YAw")).default);
$parcel$export(module.exports, "scalePoint", () => (parcelRequire("89YAw")).point);
$parcel$export(module.exports, "scaleIdentity", () => (parcelRequire("lHbmF")).default);
$parcel$export(module.exports, "scaleLinear", () => (parcelRequire("2G0sx")).default);
$parcel$export(module.exports, "scaleLog", () => (parcelRequire("88B1C")).default);
$parcel$export(module.exports, "scaleSymlog", () => (parcelRequire("5ozv4")).default);
$parcel$export(module.exports, "scaleOrdinal", () => (parcelRequire("2LKBg")).default);
$parcel$export(module.exports, "scaleImplicit", () => (parcelRequire("2LKBg")).implicit);
$parcel$export(module.exports, "scalePow", () => (parcelRequire("4A5bV")).default);
$parcel$export(module.exports, "scaleSqrt", () => (parcelRequire("4A5bV")).sqrt);
$parcel$export(module.exports, "scaleQuantile", () => (parcelRequire("2H6Ua")).default);
$parcel$export(module.exports, "scaleQuantize", () => (parcelRequire("bcNxs")).default);
$parcel$export(module.exports, "scaleThreshold", () => (parcelRequire("6QSfW")).default);
$parcel$export(module.exports, "scaleTime", () => (parcelRequire("g2I0P")).default);
$parcel$export(module.exports, "scaleUtc", () => (parcelRequire("iaeyz")).default);
$parcel$export(module.exports, "scaleSequential", () => (parcelRequire("hgpeg")).default);
$parcel$export(module.exports, "scaleSequentialLog", () => (parcelRequire("hgpeg")).sequentialLog);
$parcel$export(module.exports, "scaleSequentialPow", () => (parcelRequire("hgpeg")).sequentialPow);
$parcel$export(module.exports, "scaleSequentialSqrt", () => (parcelRequire("hgpeg")).sequentialSqrt);
$parcel$export(module.exports, "scaleSequentialSymlog", () => (parcelRequire("hgpeg")).sequentialSymlog);
$parcel$export(module.exports, "scaleSequentialQuantile", () => (parcelRequire("eV8cL")).default);
$parcel$export(module.exports, "scaleDiverging", () => (parcelRequire("9oKbx")).default);
$parcel$export(module.exports, "scaleDivergingLog", () => (parcelRequire("9oKbx")).divergingLog);
$parcel$export(module.exports, "scaleDivergingPow", () => (parcelRequire("9oKbx")).divergingPow);
$parcel$export(module.exports, "scaleDivergingSqrt", () => (parcelRequire("9oKbx")).divergingSqrt);
$parcel$export(module.exports, "scaleDivergingSymlog", () => (parcelRequire("9oKbx")).divergingSymlog);
$parcel$export(module.exports, "tickFormat", () => (parcelRequire("7dm7a")).default);

var $89YAw = parcelRequire("89YAw");

var $lHbmF = parcelRequire("lHbmF");

var $2G0sx = parcelRequire("2G0sx");

var $88B1C = parcelRequire("88B1C");

var $5ozv4 = parcelRequire("5ozv4");

var $2LKBg = parcelRequire("2LKBg");

var $4A5bV = parcelRequire("4A5bV");

var $2H6Ua = parcelRequire("2H6Ua");

var $bcNxs = parcelRequire("bcNxs");

var $6QSfW = parcelRequire("6QSfW");

var $g2I0P = parcelRequire("g2I0P");

var $iaeyz = parcelRequire("iaeyz");

var $hgpeg = parcelRequire("hgpeg");

var $eV8cL = parcelRequire("eV8cL");

var $9oKbx = parcelRequire("9oKbx");

var $7dm7a = parcelRequire("7dm7a");

});
parcelRegister("89YAw", function(module, exports) {

$parcel$export(module.exports, "default", () => $5f0e2981ece90fb7$export$2e2bcd8739ae039);
$parcel$export(module.exports, "point", () => $5f0e2981ece90fb7$export$105684a3041cb6f3);
parcelRequire("ap1W6");
var $5Cu7w = parcelRequire("5Cu7w");

var $bkGR0 = parcelRequire("bkGR0");

var $2LKBg = parcelRequire("2LKBg");
function $5f0e2981ece90fb7$export$2e2bcd8739ae039() {
    var scale = (0, $2LKBg.default)().unknown(undefined), domain = scale.domain, ordinalRange = scale.range, range = [
        0,
        1
    ], step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
    delete scale.unknown;
    function rescale() {
        var n = domain().length, reverse = range[1] < range[0], start = range[reverse - 0], stop = range[1 - reverse];
        step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
        if (round) step = Math.floor(step);
        start += (stop - start - step * (n - paddingInner)) * align;
        bandwidth = step * (1 - paddingInner);
        if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
        var values = (0, $5Cu7w.default)(n).map(function(i) {
            return start + step * i;
        });
        return ordinalRange(reverse ? values.reverse() : values);
    }
    scale.domain = function(_) {
        return arguments.length ? (domain(_), rescale()) : domain();
    };
    scale.range = function(_) {
        return arguments.length ? (range = [
            +_[0],
            +_[1]
        ], rescale()) : range.slice();
    };
    scale.rangeRound = function(_) {
        return range = [
            +_[0],
            +_[1]
        ], round = true, rescale();
    };
    scale.bandwidth = function() {
        return bandwidth;
    };
    scale.step = function() {
        return step;
    };
    scale.round = function(_) {
        return arguments.length ? (round = !!_, rescale()) : round;
    };
    scale.padding = function(_) {
        return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
    };
    scale.paddingInner = function(_) {
        return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
    };
    scale.paddingOuter = function(_) {
        return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
    };
    scale.align = function(_) {
        return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
    };
    scale.copy = function() {
        return $5f0e2981ece90fb7$export$2e2bcd8739ae039(domain(), range).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
    };
    return (0, $bkGR0.initRange).apply(rescale(), arguments);
}
function $5f0e2981ece90fb7$var$pointish(scale) {
    var copy = scale.copy;
    scale.padding = scale.paddingOuter;
    delete scale.paddingInner;
    delete scale.paddingOuter;
    scale.copy = function() {
        return $5f0e2981ece90fb7$var$pointish(copy());
    };
    return scale;
}
function $5f0e2981ece90fb7$export$105684a3041cb6f3() {
    return $5f0e2981ece90fb7$var$pointish($5f0e2981ece90fb7$export$2e2bcd8739ae039.apply(null, arguments).paddingInner(1));
}

});
parcelRegister("bkGR0", function(module, exports) {

$parcel$export(module.exports, "initRange", () => $8402cde0f272c469$export$23c7bb9e6558da2a);
$parcel$export(module.exports, "initInterpolator", () => $8402cde0f272c469$export$7d6b419e59e83f3d);
function $8402cde0f272c469$export$23c7bb9e6558da2a(domain, range) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            this.range(domain);
            break;
        default:
            this.range(range).domain(domain);
            break;
    }
    return this;
}
function $8402cde0f272c469$export$7d6b419e59e83f3d(domain, interpolator) {
    switch(arguments.length){
        case 0:
            break;
        case 1:
            this.interpolator(domain);
            break;
        default:
            this.interpolator(interpolator).domain(domain);
            break;
    }
    return this;
}

});

parcelRegister("2LKBg", function(module, exports) {

$parcel$export(module.exports, "implicit", () => $20441e58336ac0f3$export$e4f898ab14d9d460);
$parcel$export(module.exports, "default", () => $20441e58336ac0f3$export$2e2bcd8739ae039);
parcelRequire("3pJtp");
var $9y7Xw = parcelRequire("9y7Xw");

var $cB76B = parcelRequire("cB76B");

var $bkGR0 = parcelRequire("bkGR0");
var $20441e58336ac0f3$export$e4f898ab14d9d460 = {
    name: "implicit"
};
function $20441e58336ac0f3$export$2e2bcd8739ae039() {
    var index = (0, $9y7Xw.default)(), domain = [], range = [], unknown = $20441e58336ac0f3$export$e4f898ab14d9d460;
    function scale(d) {
        var key = d + "", i = index.get(key);
        if (!i) {
            if (unknown !== $20441e58336ac0f3$export$e4f898ab14d9d460) return unknown;
            index.set(key, i = domain.push(d));
        }
        return range[(i - 1) % range.length];
    }
    scale.domain = function(_) {
        if (!arguments.length) return domain.slice();
        domain = [], index = (0, $9y7Xw.default)();
        var i = -1, n = _.length, d, key;
        while(++i < n)if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
        return scale;
    };
    scale.range = function(_) {
        return arguments.length ? (range = (0, $cB76B.slice).call(_), scale) : range.slice();
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return $20441e58336ac0f3$export$2e2bcd8739ae039(domain, range).unknown(unknown);
    };
    (0, $bkGR0.initRange).apply(scale, arguments);
    return scale;
}

});
parcelRegister("cB76B", function(module, exports) {

$parcel$export(module.exports, "map", () => $92be73bfc8877628$export$871de8747c9eaa88);
$parcel$export(module.exports, "slice", () => $92be73bfc8877628$export$58adb3bec8346d0f);
var $92be73bfc8877628$var$array = Array.prototype;
var $92be73bfc8877628$export$871de8747c9eaa88 = $92be73bfc8877628$var$array.map;
var $92be73bfc8877628$export$58adb3bec8346d0f = $92be73bfc8877628$var$array.slice;

});



parcelRegister("lHbmF", function(module, exports) {

$parcel$export(module.exports, "default", () => $fcb66deb3e76b304$export$2e2bcd8739ae039);

var $cB76B = parcelRequire("cB76B");

var $2G0sx = parcelRequire("2G0sx");

var $3suIy = parcelRequire("3suIy");
function $fcb66deb3e76b304$export$2e2bcd8739ae039(domain) {
    var unknown;
    function scale(x) {
        return isNaN(x = +x) ? unknown : x;
    }
    scale.invert = scale;
    scale.domain = scale.range = function(_) {
        return arguments.length ? (domain = (0, $cB76B.map).call(_, (0, $3suIy.default)), scale) : domain.slice();
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return $fcb66deb3e76b304$export$2e2bcd8739ae039(domain).unknown(unknown);
    };
    domain = arguments.length ? (0, $cB76B.map).call(domain, (0, $3suIy.default)) : [
        0,
        1
    ];
    return (0, $2G0sx.linearish)(scale);
}

});
parcelRegister("2G0sx", function(module, exports) {

$parcel$export(module.exports, "linearish", () => $1f2fdc33dc3bc793$export$16a5d4b4a61a274d);
$parcel$export(module.exports, "default", () => $1f2fdc33dc3bc793$export$2e2bcd8739ae039);
parcelRequire("ap1W6");
var $bn7Cl = parcelRequire("bn7Cl");

var $7Fi51 = parcelRequire("7Fi51");

var $bkGR0 = parcelRequire("bkGR0");

var $7dm7a = parcelRequire("7dm7a");
function $1f2fdc33dc3bc793$export$16a5d4b4a61a274d(scale) {
    var domain = scale.domain;
    scale.ticks = function(count) {
        var d = domain();
        return (0, $bn7Cl.default)(d[0], d[d.length - 1], count == null ? 10 : count);
    };
    scale.tickFormat = function(count, specifier) {
        var d = domain();
        return (0, $7dm7a.default)(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
    };
    scale.nice = function(count) {
        if (count == null) count = 10;
        var d = domain(), i0 = 0, i1 = d.length - 1, start = d[i0], stop = d[i1], step;
        if (stop < start) {
            step = start, start = stop, stop = step;
            step = i0, i0 = i1, i1 = step;
        }
        step = (0, $bn7Cl.tickIncrement)(start, stop, count);
        if (step > 0) {
            start = Math.floor(start / step) * step;
            stop = Math.ceil(stop / step) * step;
            step = (0, $bn7Cl.tickIncrement)(start, stop, count);
        } else if (step < 0) {
            start = Math.ceil(start * step) / step;
            stop = Math.floor(stop * step) / step;
            step = (0, $bn7Cl.tickIncrement)(start, stop, count);
        }
        if (step > 0) {
            d[i0] = Math.floor(start / step) * step;
            d[i1] = Math.ceil(stop / step) * step;
            domain(d);
        } else if (step < 0) {
            d[i0] = Math.ceil(start * step) / step;
            d[i1] = Math.floor(stop * step) / step;
            domain(d);
        }
        return scale;
    };
    return scale;
}
function $1f2fdc33dc3bc793$export$2e2bcd8739ae039() {
    var scale = (0, $7Fi51.default)((0, $7Fi51.identity), (0, $7Fi51.identity));
    scale.copy = function() {
        return (0, $7Fi51.copy)(scale, $1f2fdc33dc3bc793$export$2e2bcd8739ae039());
    };
    (0, $bkGR0.initRange).apply(scale, arguments);
    return $1f2fdc33dc3bc793$export$16a5d4b4a61a274d(scale);
}

});
parcelRegister("7Fi51", function(module, exports) {

$parcel$export(module.exports, "identity", () => $594a630b6e274a28$export$f0954fd7d5368655);
$parcel$export(module.exports, "copy", () => $594a630b6e274a28$export$784d13d8ee351f07);
$parcel$export(module.exports, "transformer", () => $594a630b6e274a28$export$6b468dcfb64c653c);
$parcel$export(module.exports, "default", () => $594a630b6e274a28$export$2e2bcd8739ae039);
parcelRequire("ap1W6");
var $lS5FO = parcelRequire("lS5FO");

var $03m37 = parcelRequire("03m37");
var $97hTl = parcelRequire("97hTl");
var $gXid3 = parcelRequire("gXid3");

var $cB76B = parcelRequire("cB76B");

var $94lPG = parcelRequire("94lPG");

var $3suIy = parcelRequire("3suIy");
var $594a630b6e274a28$var$unit = [
    0,
    1
];
function $594a630b6e274a28$export$f0954fd7d5368655(x) {
    return x;
}
function $594a630b6e274a28$var$normalize(a, b) {
    return (b -= a = +a) ? function(x) {
        return (x - a) / b;
    } : (0, $94lPG.default)(isNaN(b) ? NaN : 0.5);
}
function $594a630b6e274a28$var$clamper(domain) {
    var a = domain[0], b = domain[domain.length - 1], t;
    if (a > b) t = a, a = b, b = t;
    return function(x) {
        return Math.max(a, Math.min(b, x));
    };
}
// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function $594a630b6e274a28$var$bimap(domain, range, interpolate) {
    var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
    if (d1 < d0) d0 = $594a630b6e274a28$var$normalize(d1, d0), r0 = interpolate(r1, r0);
    else d0 = $594a630b6e274a28$var$normalize(d0, d1), r0 = interpolate(r0, r1);
    return function(x) {
        return r0(d0(x));
    };
}
function $594a630b6e274a28$var$polymap(domain, range, interpolate) {
    var j = Math.min(domain.length, range.length) - 1, d = new Array(j), r = new Array(j), i = -1;
    // Reverse descending domains.
    if (domain[j] < domain[0]) {
        domain = domain.slice().reverse();
        range = range.slice().reverse();
    }
    while(++i < j){
        d[i] = $594a630b6e274a28$var$normalize(domain[i], domain[i + 1]);
        r[i] = interpolate(range[i], range[i + 1]);
    }
    return function(x) {
        var i = (0, $lS5FO.default)(domain, x, 1, j) - 1;
        return r[i](d[i](x));
    };
}
function $594a630b6e274a28$export$784d13d8ee351f07(source, target) {
    return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function $594a630b6e274a28$export$6b468dcfb64c653c() {
    var domain = $594a630b6e274a28$var$unit, range = $594a630b6e274a28$var$unit, interpolate = (0, $03m37.default), transform, untransform, unknown, clamp = $594a630b6e274a28$export$f0954fd7d5368655, piecewise, output, input;
    function rescale() {
        piecewise = Math.min(domain.length, range.length) > 2 ? $594a630b6e274a28$var$polymap : $594a630b6e274a28$var$bimap;
        output = input = null;
        return scale;
    }
    function scale(x) {
        return isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
    }
    scale.invert = function(y) {
        return clamp(untransform((input || (input = piecewise(range, domain.map(transform), (0, $97hTl.default))))(y)));
    };
    scale.domain = function(_) {
        return arguments.length ? (domain = (0, $cB76B.map).call(_, (0, $3suIy.default)), clamp === $594a630b6e274a28$export$f0954fd7d5368655 || (clamp = $594a630b6e274a28$var$clamper(domain)), rescale()) : domain.slice();
    };
    scale.range = function(_) {
        return arguments.length ? (range = (0, $cB76B.slice).call(_), rescale()) : range.slice();
    };
    scale.rangeRound = function(_) {
        return range = (0, $cB76B.slice).call(_), interpolate = (0, $gXid3.default), rescale();
    };
    scale.clamp = function(_) {
        return arguments.length ? (clamp = _ ? $594a630b6e274a28$var$clamper(domain) : $594a630b6e274a28$export$f0954fd7d5368655, scale) : clamp !== $594a630b6e274a28$export$f0954fd7d5368655;
    };
    scale.interpolate = function(_) {
        return arguments.length ? (interpolate = _, rescale()) : interpolate;
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t, u) {
        transform = t, untransform = u;
        return rescale();
    };
}
function $594a630b6e274a28$export$2e2bcd8739ae039(transform, untransform) {
    return $594a630b6e274a28$export$6b468dcfb64c653c()(transform, untransform);
}

});
parcelRegister("94lPG", function(module, exports) {

$parcel$export(module.exports, "default", () => $69a56c4b285892c5$export$2e2bcd8739ae039);
function $69a56c4b285892c5$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}

});

parcelRegister("3suIy", function(module, exports) {

$parcel$export(module.exports, "default", () => $284bd086ae86cc4c$export$2e2bcd8739ae039);
function $284bd086ae86cc4c$export$2e2bcd8739ae039(x) {
    return +x;
}

});


parcelRegister("7dm7a", function(module, exports) {

$parcel$export(module.exports, "default", () => $540ae6c72ef85c0b$export$2e2bcd8739ae039);
parcelRequire("ap1W6");
var $bn7Cl = parcelRequire("bn7Cl");

var $lr7vc = parcelRequire("lr7vc");
var $7xAwE = parcelRequire("7xAwE");
var $kHFtR = parcelRequire("kHFtR");
var $fSpVr = parcelRequire("fSpVr");
var $cmAI8 = parcelRequire("cmAI8");
function $540ae6c72ef85c0b$export$2e2bcd8739ae039(start, stop, count, specifier) {
    var step = (0, $bn7Cl.tickStep)(start, stop, count), precision;
    specifier = (0, $7xAwE.default)(specifier == null ? ",f" : specifier);
    switch(specifier.type){
        case "s":
            var value = Math.max(Math.abs(start), Math.abs(stop));
            if (specifier.precision == null && !isNaN(precision = (0, $fSpVr.default)(step, value))) specifier.precision = precision;
            return (0, $lr7vc.formatPrefix)(specifier, value);
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
            if (specifier.precision == null && !isNaN(precision = (0, $cmAI8.default)(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
            break;
        case "f":
        case "%":
            if (specifier.precision == null && !isNaN(precision = (0, $kHFtR.default)(step))) specifier.precision = precision - (specifier.type === "%") * 2;
            break;
    }
    return (0, $lr7vc.format)(specifier);
}

});



parcelRegister("88B1C", function(module, exports) {

$parcel$export(module.exports, "loggish", () => $5ecbca86b5e0f0fa$export$860836db074028f0);
$parcel$export(module.exports, "default", () => $5ecbca86b5e0f0fa$export$2e2bcd8739ae039);
parcelRequire("ap1W6");
var $bn7Cl = parcelRequire("bn7Cl");

var $lr7vc = parcelRequire("lr7vc");

var $c6qJx = parcelRequire("c6qJx");

var $7Fi51 = parcelRequire("7Fi51");

var $bkGR0 = parcelRequire("bkGR0");
function $5ecbca86b5e0f0fa$var$transformLog(x) {
    return Math.log(x);
}
function $5ecbca86b5e0f0fa$var$transformExp(x) {
    return Math.exp(x);
}
function $5ecbca86b5e0f0fa$var$transformLogn(x) {
    return -Math.log(-x);
}
function $5ecbca86b5e0f0fa$var$transformExpn(x) {
    return -Math.exp(-x);
}
function $5ecbca86b5e0f0fa$var$pow10(x) {
    return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}
function $5ecbca86b5e0f0fa$var$powp(base) {
    return base === 10 ? $5ecbca86b5e0f0fa$var$pow10 : base === Math.E ? Math.exp : function(x) {
        return Math.pow(base, x);
    };
}
function $5ecbca86b5e0f0fa$var$logp(base) {
    return base === Math.E ? Math.log : base === 10 && Math.log10 || base === 2 && Math.log2 || (base = Math.log(base), function(x) {
        return Math.log(x) / base;
    });
}
function $5ecbca86b5e0f0fa$var$reflect(f) {
    return function(x) {
        return -f(-x);
    };
}
function $5ecbca86b5e0f0fa$export$860836db074028f0(transform) {
    var scale = transform($5ecbca86b5e0f0fa$var$transformLog, $5ecbca86b5e0f0fa$var$transformExp), domain = scale.domain, base = 10, logs, pows;
    function rescale() {
        logs = $5ecbca86b5e0f0fa$var$logp(base), pows = $5ecbca86b5e0f0fa$var$powp(base);
        if (domain()[0] < 0) {
            logs = $5ecbca86b5e0f0fa$var$reflect(logs), pows = $5ecbca86b5e0f0fa$var$reflect(pows);
            transform($5ecbca86b5e0f0fa$var$transformLogn, $5ecbca86b5e0f0fa$var$transformExpn);
        } else transform($5ecbca86b5e0f0fa$var$transformLog, $5ecbca86b5e0f0fa$var$transformExp);
        return scale;
    }
    scale.base = function(_) {
        return arguments.length ? (base = +_, rescale()) : base;
    };
    scale.domain = function(_) {
        return arguments.length ? (domain(_), rescale()) : domain();
    };
    scale.ticks = function(count) {
        var d = domain(), u = d[0], v = d[d.length - 1], r;
        if (r = v < u) i = u, u = v, v = i;
        var i = logs(u), j = logs(v), p, k, t, n = count == null ? 10 : +count, z = [];
        if (!(base % 1) && j - i < n) {
            i = Math.round(i) - 1, j = Math.round(j) + 1;
            if (u > 0) for(; i < j; ++i)for(k = 1, p = pows(i); k < base; ++k){
                t = p * k;
                if (t < u) continue;
                if (t > v) break;
                z.push(t);
            }
            else for(; i < j; ++i)for(k = base - 1, p = pows(i); k >= 1; --k){
                t = p * k;
                if (t < u) continue;
                if (t > v) break;
                z.push(t);
            }
        } else z = (0, $bn7Cl.default)(i, j, Math.min(j - i, n)).map(pows);
        return r ? z.reverse() : z;
    };
    scale.tickFormat = function(count, specifier) {
        if (specifier == null) specifier = base === 10 ? ".0e" : ",";
        if (typeof specifier !== "function") specifier = (0, $lr7vc.format)(specifier);
        if (count === Infinity) return specifier;
        if (count == null) count = 10;
        var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
        return function(d) {
            var i = d / pows(Math.round(logs(d)));
            if (i * base < base - 0.5) i *= base;
            return i <= k ? specifier(d) : "";
        };
    };
    scale.nice = function() {
        return domain((0, $c6qJx.default)(domain(), {
            floor: function(x) {
                return pows(Math.floor(logs(x)));
            },
            ceil: function(x) {
                return pows(Math.ceil(logs(x)));
            }
        }));
    };
    return scale;
}
function $5ecbca86b5e0f0fa$export$2e2bcd8739ae039() {
    var scale = $5ecbca86b5e0f0fa$export$860836db074028f0((0, $7Fi51.transformer)()).domain([
        1,
        10
    ]);
    scale.copy = function() {
        return (0, $7Fi51.copy)(scale, $5ecbca86b5e0f0fa$export$2e2bcd8739ae039()).base(scale.base());
    };
    (0, $bkGR0.initRange).apply(scale, arguments);
    return scale;
}

});
parcelRegister("c6qJx", function(module, exports) {

$parcel$export(module.exports, "default", () => $8cfac84e443f3ed9$export$2e2bcd8739ae039);
function $8cfac84e443f3ed9$export$2e2bcd8739ae039(domain, interval) {
    domain = domain.slice();
    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
    if (x1 < x0) {
        t = i0, i0 = i1, i1 = t;
        t = x0, x0 = x1, x1 = t;
    }
    domain[i0] = interval.floor(x0);
    domain[i1] = interval.ceil(x1);
    return domain;
}

});


parcelRegister("5ozv4", function(module, exports) {

$parcel$export(module.exports, "symlogish", () => $3edabb3a782ce075$export$4602684e614eba38);
$parcel$export(module.exports, "default", () => $3edabb3a782ce075$export$2e2bcd8739ae039);

var $2G0sx = parcelRequire("2G0sx");

var $7Fi51 = parcelRequire("7Fi51");

var $bkGR0 = parcelRequire("bkGR0");
function $3edabb3a782ce075$var$transformSymlog(c) {
    return function(x) {
        return Math.sign(x) * Math.log1p(Math.abs(x / c));
    };
}
function $3edabb3a782ce075$var$transformSymexp(c) {
    return function(x) {
        return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
    };
}
function $3edabb3a782ce075$export$4602684e614eba38(transform) {
    var c = 1, scale = transform($3edabb3a782ce075$var$transformSymlog(c), $3edabb3a782ce075$var$transformSymexp(c));
    scale.constant = function(_) {
        return arguments.length ? transform($3edabb3a782ce075$var$transformSymlog(c = +_), $3edabb3a782ce075$var$transformSymexp(c)) : c;
    };
    return (0, $2G0sx.linearish)(scale);
}
function $3edabb3a782ce075$export$2e2bcd8739ae039() {
    var scale = $3edabb3a782ce075$export$4602684e614eba38((0, $7Fi51.transformer)());
    scale.copy = function() {
        return (0, $7Fi51.copy)(scale, $3edabb3a782ce075$export$2e2bcd8739ae039()).constant(scale.constant());
    };
    return (0, $bkGR0.initRange).apply(scale, arguments);
}

});

parcelRegister("4A5bV", function(module, exports) {

$parcel$export(module.exports, "powish", () => $355e8d1f6298b1d4$export$34695211ec403a46);
$parcel$export(module.exports, "default", () => $355e8d1f6298b1d4$export$2e2bcd8739ae039);
$parcel$export(module.exports, "sqrt", () => $355e8d1f6298b1d4$export$eba8049fb5020b81);

var $2G0sx = parcelRequire("2G0sx");

var $7Fi51 = parcelRequire("7Fi51");

var $bkGR0 = parcelRequire("bkGR0");
function $355e8d1f6298b1d4$var$transformPow(exponent) {
    return function(x) {
        return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
    };
}
function $355e8d1f6298b1d4$var$transformSqrt(x) {
    return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}
function $355e8d1f6298b1d4$var$transformSquare(x) {
    return x < 0 ? -x * x : x * x;
}
function $355e8d1f6298b1d4$export$34695211ec403a46(transform) {
    var scale = transform((0, $7Fi51.identity), (0, $7Fi51.identity)), exponent = 1;
    function rescale() {
        return exponent === 1 ? transform((0, $7Fi51.identity), (0, $7Fi51.identity)) : exponent === 0.5 ? transform($355e8d1f6298b1d4$var$transformSqrt, $355e8d1f6298b1d4$var$transformSquare) : transform($355e8d1f6298b1d4$var$transformPow(exponent), $355e8d1f6298b1d4$var$transformPow(1 / exponent));
    }
    scale.exponent = function(_) {
        return arguments.length ? (exponent = +_, rescale()) : exponent;
    };
    return (0, $2G0sx.linearish)(scale);
}
function $355e8d1f6298b1d4$export$2e2bcd8739ae039() {
    var scale = $355e8d1f6298b1d4$export$34695211ec403a46((0, $7Fi51.transformer)());
    scale.copy = function() {
        return (0, $7Fi51.copy)(scale, $355e8d1f6298b1d4$export$2e2bcd8739ae039()).exponent(scale.exponent());
    };
    (0, $bkGR0.initRange).apply(scale, arguments);
    return scale;
}
function $355e8d1f6298b1d4$export$eba8049fb5020b81() {
    return $355e8d1f6298b1d4$export$2e2bcd8739ae039.apply(null, arguments).exponent(0.5);
}

});

parcelRegister("2H6Ua", function(module, exports) {

$parcel$export(module.exports, "default", () => $1f64f41ecc7d3ddd$export$2e2bcd8739ae039);
parcelRequire("ap1W6");
var $aXFrh = parcelRequire("aXFrh");
var $lS5FO = parcelRequire("lS5FO");
var $4Zazj = parcelRequire("4Zazj");

var $cB76B = parcelRequire("cB76B");

var $bkGR0 = parcelRequire("bkGR0");
function $1f64f41ecc7d3ddd$export$2e2bcd8739ae039() {
    var domain = [], range = [], thresholds = [], unknown;
    function rescale() {
        var i = 0, n = Math.max(1, range.length);
        thresholds = new Array(n - 1);
        while(++i < n)thresholds[i - 1] = (0, $4Zazj.default)(domain, i / n);
        return scale;
    }
    function scale(x) {
        return isNaN(x = +x) ? unknown : range[(0, $lS5FO.default)(thresholds, x)];
    }
    scale.invertExtent = function(y) {
        var i = range.indexOf(y);
        return i < 0 ? [
            NaN,
            NaN
        ] : [
            i > 0 ? thresholds[i - 1] : domain[0],
            i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
        ];
    };
    scale.domain = function(_) {
        if (!arguments.length) return domain.slice();
        domain = [];
        for(var i = 0, n = _.length, d; i < n; ++i)if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
        domain.sort((0, $aXFrh.default));
        return rescale();
    };
    scale.range = function(_) {
        return arguments.length ? (range = (0, $cB76B.slice).call(_), rescale()) : range.slice();
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.quantiles = function() {
        return thresholds.slice();
    };
    scale.copy = function() {
        return $1f64f41ecc7d3ddd$export$2e2bcd8739ae039().domain(domain).range(range).unknown(unknown);
    };
    return (0, $bkGR0.initRange).apply(scale, arguments);
}

});

parcelRegister("bcNxs", function(module, exports) {

$parcel$export(module.exports, "default", () => $82873e0daf4f48b7$export$2e2bcd8739ae039);
parcelRequire("ap1W6");
var $lS5FO = parcelRequire("lS5FO");

var $cB76B = parcelRequire("cB76B");

var $2G0sx = parcelRequire("2G0sx");

var $bkGR0 = parcelRequire("bkGR0");
function $82873e0daf4f48b7$export$2e2bcd8739ae039() {
    var x0 = 0, x1 = 1, n = 1, domain = [
        0.5
    ], range = [
        0,
        1
    ], unknown;
    function scale(x) {
        return x <= x ? range[(0, $lS5FO.default)(domain, x, 0, n)] : unknown;
    }
    function rescale() {
        var i = -1;
        domain = new Array(n);
        while(++i < n)domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
        return scale;
    }
    scale.domain = function(_) {
        return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [
            x0,
            x1
        ];
    };
    scale.range = function(_) {
        return arguments.length ? (n = (range = (0, $cB76B.slice).call(_)).length - 1, rescale()) : range.slice();
    };
    scale.invertExtent = function(y) {
        var i = range.indexOf(y);
        return i < 0 ? [
            NaN,
            NaN
        ] : i < 1 ? [
            x0,
            domain[0]
        ] : i >= n ? [
            domain[n - 1],
            x1
        ] : [
            domain[i - 1],
            domain[i]
        ];
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : scale;
    };
    scale.thresholds = function() {
        return domain.slice();
    };
    scale.copy = function() {
        return $82873e0daf4f48b7$export$2e2bcd8739ae039().domain([
            x0,
            x1
        ]).range(range).unknown(unknown);
    };
    return (0, $bkGR0.initRange).apply((0, $2G0sx.linearish)(scale), arguments);
}

});

parcelRegister("6QSfW", function(module, exports) {

$parcel$export(module.exports, "default", () => $4fd1af882e25f1f5$export$2e2bcd8739ae039);
parcelRequire("ap1W6");
var $lS5FO = parcelRequire("lS5FO");

var $cB76B = parcelRequire("cB76B");

var $bkGR0 = parcelRequire("bkGR0");
function $4fd1af882e25f1f5$export$2e2bcd8739ae039() {
    var domain = [
        0.5
    ], range = [
        0,
        1
    ], unknown, n = 1;
    function scale(x) {
        return x <= x ? range[(0, $lS5FO.default)(domain, x, 0, n)] : unknown;
    }
    scale.domain = function(_) {
        return arguments.length ? (domain = (0, $cB76B.slice).call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
    };
    scale.range = function(_) {
        return arguments.length ? (range = (0, $cB76B.slice).call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
    };
    scale.invertExtent = function(y) {
        var i = range.indexOf(y);
        return [
            domain[i - 1],
            domain[i]
        ];
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    scale.copy = function() {
        return $4fd1af882e25f1f5$export$2e2bcd8739ae039().domain(domain).range(range).unknown(unknown);
    };
    return (0, $bkGR0.initRange).apply(scale, arguments);
}

});

parcelRegister("g2I0P", function(module, exports) {

$parcel$export(module.exports, "calendar", () => $badef92a772a513e$export$56bbcdb8aca31149);
$parcel$export(module.exports, "default", () => $badef92a772a513e$export$2e2bcd8739ae039);
parcelRequire("ap1W6");
var $kl6hC = parcelRequire("kl6hC");
var $bn7Cl = parcelRequire("bn7Cl");

var $6k3PS = parcelRequire("6k3PS");
var $hxMZB = parcelRequire("hxMZB");
var $ib75S = parcelRequire("ib75S");
var $665Rw = parcelRequire("665Rw");
var $y9nom = parcelRequire("y9nom");
var $5WJjg = parcelRequire("5WJjg");
var $lTpTu = parcelRequire("lTpTu");
var $fomVJ = parcelRequire("fomVJ");

var $6WgZw = parcelRequire("6WgZw");

var $cB76B = parcelRequire("cB76B");

var $7Fi51 = parcelRequire("7Fi51");

var $bkGR0 = parcelRequire("bkGR0");

var $c6qJx = parcelRequire("c6qJx");
var $badef92a772a513e$var$durationSecond = 1000, $badef92a772a513e$var$durationMinute = $badef92a772a513e$var$durationSecond * 60, $badef92a772a513e$var$durationHour = $badef92a772a513e$var$durationMinute * 60, $badef92a772a513e$var$durationDay = $badef92a772a513e$var$durationHour * 24, $badef92a772a513e$var$durationWeek = $badef92a772a513e$var$durationDay * 7, $badef92a772a513e$var$durationMonth = $badef92a772a513e$var$durationDay * 30, $badef92a772a513e$var$durationYear = $badef92a772a513e$var$durationDay * 365;
function $badef92a772a513e$var$date(t) {
    return new Date(t);
}
function $badef92a772a513e$var$number(t) {
    return t instanceof Date ? +t : +new Date(+t);
}
function $badef92a772a513e$export$56bbcdb8aca31149(year, month, week, day, hour, minute, second, millisecond, format) {
    var scale = (0, $7Fi51.default)((0, $7Fi51.identity), (0, $7Fi51.identity)), invert = scale.invert, domain = scale.domain;
    var formatMillisecond = format(".%L"), formatSecond = format(":%S"), formatMinute = format("%I:%M"), formatHour = format("%I %p"), formatDay = format("%a %d"), formatWeek = format("%b %d"), formatMonth = format("%B"), formatYear = format("%Y");
    var tickIntervals = [
        [
            second,
            1,
            $badef92a772a513e$var$durationSecond
        ],
        [
            second,
            5,
            5 * $badef92a772a513e$var$durationSecond
        ],
        [
            second,
            15,
            15 * $badef92a772a513e$var$durationSecond
        ],
        [
            second,
            30,
            30 * $badef92a772a513e$var$durationSecond
        ],
        [
            minute,
            1,
            $badef92a772a513e$var$durationMinute
        ],
        [
            minute,
            5,
            5 * $badef92a772a513e$var$durationMinute
        ],
        [
            minute,
            15,
            15 * $badef92a772a513e$var$durationMinute
        ],
        [
            minute,
            30,
            30 * $badef92a772a513e$var$durationMinute
        ],
        [
            hour,
            1,
            $badef92a772a513e$var$durationHour
        ],
        [
            hour,
            3,
            3 * $badef92a772a513e$var$durationHour
        ],
        [
            hour,
            6,
            6 * $badef92a772a513e$var$durationHour
        ],
        [
            hour,
            12,
            12 * $badef92a772a513e$var$durationHour
        ],
        [
            day,
            1,
            $badef92a772a513e$var$durationDay
        ],
        [
            day,
            2,
            2 * $badef92a772a513e$var$durationDay
        ],
        [
            week,
            1,
            $badef92a772a513e$var$durationWeek
        ],
        [
            month,
            1,
            $badef92a772a513e$var$durationMonth
        ],
        [
            month,
            3,
            3 * $badef92a772a513e$var$durationMonth
        ],
        [
            year,
            1,
            $badef92a772a513e$var$durationYear
        ]
    ];
    function tickFormat(date) {
        return (second(date) < date ? formatMillisecond : minute(date) < date ? formatSecond : hour(date) < date ? formatMinute : day(date) < date ? formatHour : month(date) < date ? week(date) < date ? formatDay : formatWeek : year(date) < date ? formatMonth : formatYear)(date);
    }
    function tickInterval(interval, start, stop, step) {
        if (interval == null) interval = 10;
        // If a desired tick count is specified, pick a reasonable tick interval
        // based on the extent of the domain and a rough estimate of tick size.
        // Otherwise, assume interval is already a time interval and use it.
        if (typeof interval === "number") {
            var target = Math.abs(stop - start) / interval, i = (0, $kl6hC.default)(function(i) {
                return i[2];
            }).right(tickIntervals, target);
            if (i === tickIntervals.length) {
                step = (0, $bn7Cl.tickStep)(start / $badef92a772a513e$var$durationYear, stop / $badef92a772a513e$var$durationYear, interval);
                interval = year;
            } else if (i) {
                i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
                step = i[1];
                interval = i[0];
            } else {
                step = Math.max((0, $bn7Cl.tickStep)(start, stop, interval), 1);
                interval = millisecond;
            }
        }
        return step == null ? interval : interval.every(step);
    }
    scale.invert = function(y) {
        return new Date(invert(y));
    };
    scale.domain = function(_) {
        return arguments.length ? domain((0, $cB76B.map).call(_, $badef92a772a513e$var$number)) : domain().map($badef92a772a513e$var$date);
    };
    scale.ticks = function(interval, step) {
        var d = domain(), t0 = d[0], t1 = d[d.length - 1], r = t1 < t0, t;
        if (r) t = t0, t0 = t1, t1 = t;
        t = tickInterval(interval, t0, t1, step);
        t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
        return r ? t.reverse() : t;
    };
    scale.tickFormat = function(count, specifier) {
        return specifier == null ? tickFormat : format(specifier);
    };
    scale.nice = function(interval, step) {
        var d = domain();
        return (interval = tickInterval(interval, d[0], d[d.length - 1], step)) ? domain((0, $c6qJx.default)(d, interval)) : scale;
    };
    scale.copy = function() {
        return (0, $7Fi51.copy)(scale, $badef92a772a513e$export$56bbcdb8aca31149(year, month, week, day, hour, minute, second, millisecond, format));
    };
    return scale;
}
function $badef92a772a513e$export$2e2bcd8739ae039() {
    return (0, $bkGR0.initRange).apply($badef92a772a513e$export$56bbcdb8aca31149((0, $fomVJ.default), (0, $y9nom.default), (0, $lTpTu.sunday), (0, $6k3PS.default), (0, $hxMZB.default), (0, $665Rw.default), (0, $5WJjg.default), (0, $ib75S.default), (0, $6WgZw.timeFormat)).domain([
        new Date(2000, 0, 1),
        new Date(2000, 0, 2)
    ]), arguments);
}

});
parcelRegister("6k3PS", function(module, exports) {

$parcel$export(module.exports, "default", () => $49a796060f0f622c$export$2e2bcd8739ae039);
$parcel$export(module.exports, "days", () => $49a796060f0f622c$export$3cf5dda4201cc0f2);

var $jDHVD = parcelRequire("jDHVD");

var $4o5am = parcelRequire("4o5am");
var $49a796060f0f622c$var$day = (0, $jDHVD.default)(function(date) {
    date.setHours(0, 0, 0, 0);
}, function(date, step) {
    date.setDate(date.getDate() + step);
}, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * (0, $4o5am.durationMinute)) / (0, $4o5am.durationDay);
}, function(date) {
    return date.getDate() - 1;
});
var $49a796060f0f622c$export$2e2bcd8739ae039 = $49a796060f0f622c$var$day;
var $49a796060f0f622c$export$3cf5dda4201cc0f2 = $49a796060f0f622c$var$day.range;

});
parcelRegister("jDHVD", function(module, exports) {

$parcel$export(module.exports, "default", () => $e4c3bc24c67b317e$export$2e2bcd8739ae039);
var $e4c3bc24c67b317e$var$t0 = new Date, $e4c3bc24c67b317e$var$t1 = new Date;
function $e4c3bc24c67b317e$export$2e2bcd8739ae039(floori, offseti, count, field) {
    function interval(date) {
        return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;
    }
    interval.floor = function(date) {
        return floori(date = new Date(+date)), date;
    };
    interval.ceil = function(date) {
        return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
    };
    interval.round = function(date) {
        var d0 = interval(date), d1 = interval.ceil(date);
        return date - d0 < d1 - date ? d0 : d1;
    };
    interval.offset = function(date, step) {
        return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
    };
    interval.range = function(start, stop, step) {
        var range = [], previous;
        start = interval.ceil(start);
        step = step == null ? 1 : Math.floor(step);
        if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
        do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
        while (previous < start && start < stop);
        return range;
    };
    interval.filter = function(test) {
        return $e4c3bc24c67b317e$export$2e2bcd8739ae039(function(date) {
            if (date >= date) while(floori(date), !test(date))date.setTime(date - 1);
        }, function(date, step) {
            if (date >= date) {
                if (step < 0) while(++step <= 0){
                    while(offseti(date, -1), !test(date)); // eslint-disable-line no-empty
                }
                else while(--step >= 0){
                    while(offseti(date, 1), !test(date)); // eslint-disable-line no-empty
                }
            }
        });
    };
    if (count) {
        interval.count = function(start, end) {
            $e4c3bc24c67b317e$var$t0.setTime(+start), $e4c3bc24c67b317e$var$t1.setTime(+end);
            floori($e4c3bc24c67b317e$var$t0), floori($e4c3bc24c67b317e$var$t1);
            return Math.floor(count($e4c3bc24c67b317e$var$t0, $e4c3bc24c67b317e$var$t1));
        };
        interval.every = function(step) {
            step = Math.floor(step);
            return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? function(d) {
                return field(d) % step === 0;
            } : function(d) {
                return interval.count(0, d) % step === 0;
            });
        };
    }
    return interval;
}

});

parcelRegister("4o5am", function(module, exports) {

$parcel$export(module.exports, "durationSecond", () => $331d6937cecf206d$export$79ef0e34099623dc);
$parcel$export(module.exports, "durationMinute", () => $331d6937cecf206d$export$683905d551c33fa9);
$parcel$export(module.exports, "durationHour", () => $331d6937cecf206d$export$4157bf0c8e241659);
$parcel$export(module.exports, "durationDay", () => $331d6937cecf206d$export$353686095f4fbf45);
$parcel$export(module.exports, "durationWeek", () => $331d6937cecf206d$export$c241eb88520d5016);
var $331d6937cecf206d$export$79ef0e34099623dc = 1e3;
var $331d6937cecf206d$export$683905d551c33fa9 = 6e4;
var $331d6937cecf206d$export$4157bf0c8e241659 = 36e5;
var $331d6937cecf206d$export$353686095f4fbf45 = 864e5;
var $331d6937cecf206d$export$c241eb88520d5016 = 6048e5;

});


parcelRegister("hxMZB", function(module, exports) {

$parcel$export(module.exports, "default", () => $cc5b85a4b594f73f$export$2e2bcd8739ae039);
$parcel$export(module.exports, "hours", () => $cc5b85a4b594f73f$export$8d468796d69cdad1);

var $jDHVD = parcelRequire("jDHVD");

var $4o5am = parcelRequire("4o5am");
var $cc5b85a4b594f73f$var$hour = (0, $jDHVD.default)(function(date) {
    date.setTime(date - date.getMilliseconds() - date.getSeconds() * (0, $4o5am.durationSecond) - date.getMinutes() * (0, $4o5am.durationMinute));
}, function(date, step) {
    date.setTime(+date + step * (0, $4o5am.durationHour));
}, function(start, end) {
    return (end - start) / (0, $4o5am.durationHour);
}, function(date) {
    return date.getHours();
});
var $cc5b85a4b594f73f$export$2e2bcd8739ae039 = $cc5b85a4b594f73f$var$hour;
var $cc5b85a4b594f73f$export$8d468796d69cdad1 = $cc5b85a4b594f73f$var$hour.range;

});

parcelRegister("ib75S", function(module, exports) {

$parcel$export(module.exports, "default", () => $d3bec1c0444939d2$export$2e2bcd8739ae039);
$parcel$export(module.exports, "milliseconds", () => $d3bec1c0444939d2$export$9a27fac83d67afd3);

var $jDHVD = parcelRequire("jDHVD");
var $d3bec1c0444939d2$var$millisecond = (0, $jDHVD.default)(function() {
// noop
}, function(date, step) {
    date.setTime(+date + step);
}, function(start, end) {
    return end - start;
});
// An optimized implementation for this simple case.
$d3bec1c0444939d2$var$millisecond.every = function(k) {
    k = Math.floor(k);
    if (!isFinite(k) || !(k > 0)) return null;
    if (!(k > 1)) return $d3bec1c0444939d2$var$millisecond;
    return (0, $jDHVD.default)(function(date) {
        date.setTime(Math.floor(date / k) * k);
    }, function(date, step) {
        date.setTime(+date + step * k);
    }, function(start, end) {
        return (end - start) / k;
    });
};
var $d3bec1c0444939d2$export$2e2bcd8739ae039 = $d3bec1c0444939d2$var$millisecond;
var $d3bec1c0444939d2$export$9a27fac83d67afd3 = $d3bec1c0444939d2$var$millisecond.range;

});

parcelRegister("665Rw", function(module, exports) {

$parcel$export(module.exports, "default", () => $4707d9bc246ed4a9$export$2e2bcd8739ae039);
$parcel$export(module.exports, "minutes", () => $4707d9bc246ed4a9$export$666252b437cce0c7);

var $jDHVD = parcelRequire("jDHVD");

var $4o5am = parcelRequire("4o5am");
var $4707d9bc246ed4a9$var$minute = (0, $jDHVD.default)(function(date) {
    date.setTime(date - date.getMilliseconds() - date.getSeconds() * (0, $4o5am.durationSecond));
}, function(date, step) {
    date.setTime(+date + step * (0, $4o5am.durationMinute));
}, function(start, end) {
    return (end - start) / (0, $4o5am.durationMinute);
}, function(date) {
    return date.getMinutes();
});
var $4707d9bc246ed4a9$export$2e2bcd8739ae039 = $4707d9bc246ed4a9$var$minute;
var $4707d9bc246ed4a9$export$666252b437cce0c7 = $4707d9bc246ed4a9$var$minute.range;

});

parcelRegister("y9nom", function(module, exports) {

$parcel$export(module.exports, "default", () => $066a7306b9a931c2$export$2e2bcd8739ae039);
$parcel$export(module.exports, "months", () => $066a7306b9a931c2$export$16352d1b10c5eb38);

var $jDHVD = parcelRequire("jDHVD");
var $066a7306b9a931c2$var$month = (0, $jDHVD.default)(function(date) {
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
}, function(date, step) {
    date.setMonth(date.getMonth() + step);
}, function(start, end) {
    return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
    return date.getMonth();
});
var $066a7306b9a931c2$export$2e2bcd8739ae039 = $066a7306b9a931c2$var$month;
var $066a7306b9a931c2$export$16352d1b10c5eb38 = $066a7306b9a931c2$var$month.range;

});

parcelRegister("5WJjg", function(module, exports) {

$parcel$export(module.exports, "default", () => $454584199bf115e3$export$2e2bcd8739ae039);
$parcel$export(module.exports, "seconds", () => $454584199bf115e3$export$4792e48abc550fa1);

var $jDHVD = parcelRequire("jDHVD");

var $4o5am = parcelRequire("4o5am");
var $454584199bf115e3$var$second = (0, $jDHVD.default)(function(date) {
    date.setTime(date - date.getMilliseconds());
}, function(date, step) {
    date.setTime(+date + step * (0, $4o5am.durationSecond));
}, function(start, end) {
    return (end - start) / (0, $4o5am.durationSecond);
}, function(date) {
    return date.getUTCSeconds();
});
var $454584199bf115e3$export$2e2bcd8739ae039 = $454584199bf115e3$var$second;
var $454584199bf115e3$export$4792e48abc550fa1 = $454584199bf115e3$var$second.range;

});

parcelRegister("lTpTu", function(module, exports) {

$parcel$export(module.exports, "sunday", () => $ff02d204ee62fb0c$export$fb3ee18ed410cc21);
$parcel$export(module.exports, "monday", () => $ff02d204ee62fb0c$export$6416afaab03bc9b8);
$parcel$export(module.exports, "tuesday", () => $ff02d204ee62fb0c$export$cb8f040f5d17ac7b);
$parcel$export(module.exports, "wednesday", () => $ff02d204ee62fb0c$export$347581849975dfc8);
$parcel$export(module.exports, "thursday", () => $ff02d204ee62fb0c$export$2f2b56683a3e5629);
$parcel$export(module.exports, "friday", () => $ff02d204ee62fb0c$export$59b8c2ccd931d806);
$parcel$export(module.exports, "saturday", () => $ff02d204ee62fb0c$export$478ceadebff4d377);
$parcel$export(module.exports, "sundays", () => $ff02d204ee62fb0c$export$e8daabaa40641211);
$parcel$export(module.exports, "mondays", () => $ff02d204ee62fb0c$export$74e5b559c235c00e);
$parcel$export(module.exports, "tuesdays", () => $ff02d204ee62fb0c$export$e7d6aa4fb107bc56);
$parcel$export(module.exports, "wednesdays", () => $ff02d204ee62fb0c$export$fcd5880b20bb06a8);
$parcel$export(module.exports, "thursdays", () => $ff02d204ee62fb0c$export$682716b7bbe33641);
$parcel$export(module.exports, "fridays", () => $ff02d204ee62fb0c$export$482924968ca86084);
$parcel$export(module.exports, "saturdays", () => $ff02d204ee62fb0c$export$7d755172c9cda9d2);

var $jDHVD = parcelRequire("jDHVD");

var $4o5am = parcelRequire("4o5am");
function $ff02d204ee62fb0c$var$weekday(i) {
    return (0, $jDHVD.default)(function(date) {
        date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
        date.setHours(0, 0, 0, 0);
    }, function(date, step) {
        date.setDate(date.getDate() + step * 7);
    }, function(start, end) {
        return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * (0, $4o5am.durationMinute)) / (0, $4o5am.durationWeek);
    });
}
var $ff02d204ee62fb0c$export$fb3ee18ed410cc21 = $ff02d204ee62fb0c$var$weekday(0);
var $ff02d204ee62fb0c$export$6416afaab03bc9b8 = $ff02d204ee62fb0c$var$weekday(1);
var $ff02d204ee62fb0c$export$cb8f040f5d17ac7b = $ff02d204ee62fb0c$var$weekday(2);
var $ff02d204ee62fb0c$export$347581849975dfc8 = $ff02d204ee62fb0c$var$weekday(3);
var $ff02d204ee62fb0c$export$2f2b56683a3e5629 = $ff02d204ee62fb0c$var$weekday(4);
var $ff02d204ee62fb0c$export$59b8c2ccd931d806 = $ff02d204ee62fb0c$var$weekday(5);
var $ff02d204ee62fb0c$export$478ceadebff4d377 = $ff02d204ee62fb0c$var$weekday(6);
var $ff02d204ee62fb0c$export$e8daabaa40641211 = $ff02d204ee62fb0c$export$fb3ee18ed410cc21.range;
var $ff02d204ee62fb0c$export$74e5b559c235c00e = $ff02d204ee62fb0c$export$6416afaab03bc9b8.range;
var $ff02d204ee62fb0c$export$e7d6aa4fb107bc56 = $ff02d204ee62fb0c$export$cb8f040f5d17ac7b.range;
var $ff02d204ee62fb0c$export$fcd5880b20bb06a8 = $ff02d204ee62fb0c$export$347581849975dfc8.range;
var $ff02d204ee62fb0c$export$682716b7bbe33641 = $ff02d204ee62fb0c$export$2f2b56683a3e5629.range;
var $ff02d204ee62fb0c$export$482924968ca86084 = $ff02d204ee62fb0c$export$59b8c2ccd931d806.range;
var $ff02d204ee62fb0c$export$7d755172c9cda9d2 = $ff02d204ee62fb0c$export$478ceadebff4d377.range;

});

parcelRegister("fomVJ", function(module, exports) {

$parcel$export(module.exports, "default", () => $b34ae25d0c111ac3$export$2e2bcd8739ae039);
$parcel$export(module.exports, "years", () => $b34ae25d0c111ac3$export$6fda41c7fb23acf9);

var $jDHVD = parcelRequire("jDHVD");
var $b34ae25d0c111ac3$var$year = (0, $jDHVD.default)(function(date) {
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
}, function(date, step) {
    date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
    return end.getFullYear() - start.getFullYear();
}, function(date) {
    return date.getFullYear();
});
// An optimized implementation for this simple case.
$b34ae25d0c111ac3$var$year.every = function(k) {
    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : (0, $jDHVD.default)(function(date) {
        date.setFullYear(Math.floor(date.getFullYear() / k) * k);
        date.setMonth(0, 1);
        date.setHours(0, 0, 0, 0);
    }, function(date, step) {
        date.setFullYear(date.getFullYear() + step * k);
    });
};
var $b34ae25d0c111ac3$export$2e2bcd8739ae039 = $b34ae25d0c111ac3$var$year;
var $b34ae25d0c111ac3$export$6fda41c7fb23acf9 = $b34ae25d0c111ac3$var$year.range;

});

parcelRegister("6WgZw", function(module, exports) {

$parcel$export(module.exports, "timeFormat", () => $50d556fd6b4bed9c$export$94f4d87fad5dcf9a);
$parcel$export(module.exports, "timeParse", () => $50d556fd6b4bed9c$export$32b9cd16e1b8c8d2);
$parcel$export(module.exports, "utcFormat", () => $50d556fd6b4bed9c$export$1a08fe38f63ebbbb);
$parcel$export(module.exports, "utcParse", () => $50d556fd6b4bed9c$export$3edae9cf8e233729);
$parcel$export(module.exports, "default", () => $50d556fd6b4bed9c$export$2e2bcd8739ae039);

var $2nbvg = parcelRequire("2nbvg");
var $50d556fd6b4bed9c$var$locale;
var $50d556fd6b4bed9c$export$94f4d87fad5dcf9a;
var $50d556fd6b4bed9c$export$32b9cd16e1b8c8d2;
var $50d556fd6b4bed9c$export$1a08fe38f63ebbbb;
var $50d556fd6b4bed9c$export$3edae9cf8e233729;
$50d556fd6b4bed9c$export$2e2bcd8739ae039({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: [
        "AM",
        "PM"
    ],
    days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    shortDays: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],
    shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
});
function $50d556fd6b4bed9c$export$2e2bcd8739ae039(definition) {
    $50d556fd6b4bed9c$var$locale = (0, $2nbvg.default)(definition);
    $50d556fd6b4bed9c$export$94f4d87fad5dcf9a = $50d556fd6b4bed9c$var$locale.format;
    $50d556fd6b4bed9c$export$32b9cd16e1b8c8d2 = $50d556fd6b4bed9c$var$locale.parse;
    $50d556fd6b4bed9c$export$1a08fe38f63ebbbb = $50d556fd6b4bed9c$var$locale.utcFormat;
    $50d556fd6b4bed9c$export$3edae9cf8e233729 = $50d556fd6b4bed9c$var$locale.utcParse;
    return $50d556fd6b4bed9c$var$locale;
}

});
parcelRegister("2nbvg", function(module, exports) {

$parcel$export(module.exports, "default", () => $1ba6a71522bf953e$export$2e2bcd8739ae039);

var $6k3PS = parcelRequire("6k3PS");
var $lTpTu = parcelRequire("lTpTu");
var $fomVJ = parcelRequire("fomVJ");
var $jqBxJ = parcelRequire("jqBxJ");
var $dAFA2 = parcelRequire("dAFA2");
var $iIAL8 = parcelRequire("iIAL8");
function $1ba6a71522bf953e$var$localDate(d) {
    if (0 <= d.y && d.y < 100) {
        var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
        date.setFullYear(d.y);
        return date;
    }
    return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function $1ba6a71522bf953e$var$utcDate(d) {
    if (0 <= d.y && d.y < 100) {
        var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
        date.setUTCFullYear(d.y);
        return date;
    }
    return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function $1ba6a71522bf953e$var$newDate(y, m, d) {
    return {
        y: y,
        m: m,
        d: d,
        H: 0,
        M: 0,
        S: 0,
        L: 0
    };
}
function $1ba6a71522bf953e$export$2e2bcd8739ae039(locale) {
    var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_weekdays = locale.days, locale_shortWeekdays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
    var periodRe = $1ba6a71522bf953e$var$formatRe(locale_periods), periodLookup = $1ba6a71522bf953e$var$formatLookup(locale_periods), weekdayRe = $1ba6a71522bf953e$var$formatRe(locale_weekdays), weekdayLookup = $1ba6a71522bf953e$var$formatLookup(locale_weekdays), shortWeekdayRe = $1ba6a71522bf953e$var$formatRe(locale_shortWeekdays), shortWeekdayLookup = $1ba6a71522bf953e$var$formatLookup(locale_shortWeekdays), monthRe = $1ba6a71522bf953e$var$formatRe(locale_months), monthLookup = $1ba6a71522bf953e$var$formatLookup(locale_months), shortMonthRe = $1ba6a71522bf953e$var$formatRe(locale_shortMonths), shortMonthLookup = $1ba6a71522bf953e$var$formatLookup(locale_shortMonths);
    var formats = {
        "a": formatShortWeekday,
        "A": formatWeekday,
        "b": formatShortMonth,
        "B": formatMonth,
        "c": null,
        "d": $1ba6a71522bf953e$var$formatDayOfMonth,
        "e": $1ba6a71522bf953e$var$formatDayOfMonth,
        "f": $1ba6a71522bf953e$var$formatMicroseconds,
        "g": $1ba6a71522bf953e$var$formatYearISO,
        "G": $1ba6a71522bf953e$var$formatFullYearISO,
        "H": $1ba6a71522bf953e$var$formatHour24,
        "I": $1ba6a71522bf953e$var$formatHour12,
        "j": $1ba6a71522bf953e$var$formatDayOfYear,
        "L": $1ba6a71522bf953e$var$formatMilliseconds,
        "m": $1ba6a71522bf953e$var$formatMonthNumber,
        "M": $1ba6a71522bf953e$var$formatMinutes,
        "p": formatPeriod,
        "q": formatQuarter,
        "Q": $1ba6a71522bf953e$var$formatUnixTimestamp,
        "s": $1ba6a71522bf953e$var$formatUnixTimestampSeconds,
        "S": $1ba6a71522bf953e$var$formatSeconds,
        "u": $1ba6a71522bf953e$var$formatWeekdayNumberMonday,
        "U": $1ba6a71522bf953e$var$formatWeekNumberSunday,
        "V": $1ba6a71522bf953e$var$formatWeekNumberISO,
        "w": $1ba6a71522bf953e$var$formatWeekdayNumberSunday,
        "W": $1ba6a71522bf953e$var$formatWeekNumberMonday,
        "x": null,
        "X": null,
        "y": $1ba6a71522bf953e$var$formatYear,
        "Y": $1ba6a71522bf953e$var$formatFullYear,
        "Z": $1ba6a71522bf953e$var$formatZone,
        "%": $1ba6a71522bf953e$var$formatLiteralPercent
    };
    var utcFormats = {
        "a": formatUTCShortWeekday,
        "A": formatUTCWeekday,
        "b": formatUTCShortMonth,
        "B": formatUTCMonth,
        "c": null,
        "d": $1ba6a71522bf953e$var$formatUTCDayOfMonth,
        "e": $1ba6a71522bf953e$var$formatUTCDayOfMonth,
        "f": $1ba6a71522bf953e$var$formatUTCMicroseconds,
        "g": $1ba6a71522bf953e$var$formatUTCYearISO,
        "G": $1ba6a71522bf953e$var$formatUTCFullYearISO,
        "H": $1ba6a71522bf953e$var$formatUTCHour24,
        "I": $1ba6a71522bf953e$var$formatUTCHour12,
        "j": $1ba6a71522bf953e$var$formatUTCDayOfYear,
        "L": $1ba6a71522bf953e$var$formatUTCMilliseconds,
        "m": $1ba6a71522bf953e$var$formatUTCMonthNumber,
        "M": $1ba6a71522bf953e$var$formatUTCMinutes,
        "p": formatUTCPeriod,
        "q": formatUTCQuarter,
        "Q": $1ba6a71522bf953e$var$formatUnixTimestamp,
        "s": $1ba6a71522bf953e$var$formatUnixTimestampSeconds,
        "S": $1ba6a71522bf953e$var$formatUTCSeconds,
        "u": $1ba6a71522bf953e$var$formatUTCWeekdayNumberMonday,
        "U": $1ba6a71522bf953e$var$formatUTCWeekNumberSunday,
        "V": $1ba6a71522bf953e$var$formatUTCWeekNumberISO,
        "w": $1ba6a71522bf953e$var$formatUTCWeekdayNumberSunday,
        "W": $1ba6a71522bf953e$var$formatUTCWeekNumberMonday,
        "x": null,
        "X": null,
        "y": $1ba6a71522bf953e$var$formatUTCYear,
        "Y": $1ba6a71522bf953e$var$formatUTCFullYear,
        "Z": $1ba6a71522bf953e$var$formatUTCZone,
        "%": $1ba6a71522bf953e$var$formatLiteralPercent
    };
    var parses = {
        "a": parseShortWeekday,
        "A": parseWeekday,
        "b": parseShortMonth,
        "B": parseMonth,
        "c": parseLocaleDateTime,
        "d": $1ba6a71522bf953e$var$parseDayOfMonth,
        "e": $1ba6a71522bf953e$var$parseDayOfMonth,
        "f": $1ba6a71522bf953e$var$parseMicroseconds,
        "g": $1ba6a71522bf953e$var$parseYear,
        "G": $1ba6a71522bf953e$var$parseFullYear,
        "H": $1ba6a71522bf953e$var$parseHour24,
        "I": $1ba6a71522bf953e$var$parseHour24,
        "j": $1ba6a71522bf953e$var$parseDayOfYear,
        "L": $1ba6a71522bf953e$var$parseMilliseconds,
        "m": $1ba6a71522bf953e$var$parseMonthNumber,
        "M": $1ba6a71522bf953e$var$parseMinutes,
        "p": parsePeriod,
        "q": $1ba6a71522bf953e$var$parseQuarter,
        "Q": $1ba6a71522bf953e$var$parseUnixTimestamp,
        "s": $1ba6a71522bf953e$var$parseUnixTimestampSeconds,
        "S": $1ba6a71522bf953e$var$parseSeconds,
        "u": $1ba6a71522bf953e$var$parseWeekdayNumberMonday,
        "U": $1ba6a71522bf953e$var$parseWeekNumberSunday,
        "V": $1ba6a71522bf953e$var$parseWeekNumberISO,
        "w": $1ba6a71522bf953e$var$parseWeekdayNumberSunday,
        "W": $1ba6a71522bf953e$var$parseWeekNumberMonday,
        "x": parseLocaleDate,
        "X": parseLocaleTime,
        "y": $1ba6a71522bf953e$var$parseYear,
        "Y": $1ba6a71522bf953e$var$parseFullYear,
        "Z": $1ba6a71522bf953e$var$parseZone,
        "%": $1ba6a71522bf953e$var$parseLiteralPercent
    };
    // These recursive directive definitions must be deferred.
    formats.x = newFormat(locale_date, formats);
    formats.X = newFormat(locale_time, formats);
    formats.c = newFormat(locale_dateTime, formats);
    utcFormats.x = newFormat(locale_date, utcFormats);
    utcFormats.X = newFormat(locale_time, utcFormats);
    utcFormats.c = newFormat(locale_dateTime, utcFormats);
    function newFormat(specifier, formats) {
        return function(date) {
            var string = [], i = -1, j = 0, n = specifier.length, c, pad, format;
            if (!(date instanceof Date)) date = new Date(+date);
            while(++i < n)if (specifier.charCodeAt(i) === 37) {
                string.push(specifier.slice(j, i));
                if ((pad = $1ba6a71522bf953e$var$pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
                else pad = c === "e" ? " " : "0";
                if (format = formats[c]) c = format(date, pad);
                string.push(c);
                j = i + 1;
            }
            string.push(specifier.slice(j, i));
            return string.join("");
        };
    }
    function newParse(specifier, Z) {
        return function(string) {
            var d = $1ba6a71522bf953e$var$newDate(1900, undefined, 1), i = parseSpecifier(d, specifier, string += "", 0), week, day;
            if (i != string.length) return null;
            // If a UNIX timestamp is specified, return it.
            if ("Q" in d) return new Date(d.Q);
            if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));
            // If this is utcParse, never use the local timezone.
            if (Z && !("Z" in d)) d.Z = 0;
            // The am-pm flag is 0 for AM, and 1 for PM.
            if ("p" in d) d.H = d.H % 12 + d.p * 12;
            // If the month was not specified, inherit from the quarter.
            if (d.m === undefined) d.m = "q" in d ? d.q : 0;
            // Convert day-of-week and week-of-year to day-of-year.
            if ("V" in d) {
                if (d.V < 1 || d.V > 53) return null;
                if (!("w" in d)) d.w = 1;
                if ("Z" in d) {
                    week = $1ba6a71522bf953e$var$utcDate($1ba6a71522bf953e$var$newDate(d.y, 0, 1)), day = week.getUTCDay();
                    week = day > 4 || day === 0 ? (0, $dAFA2.utcMonday).ceil(week) : (0, $dAFA2.utcMonday)(week);
                    week = (0, $jqBxJ.default).offset(week, (d.V - 1) * 7);
                    d.y = week.getUTCFullYear();
                    d.m = week.getUTCMonth();
                    d.d = week.getUTCDate() + (d.w + 6) % 7;
                } else {
                    week = $1ba6a71522bf953e$var$localDate($1ba6a71522bf953e$var$newDate(d.y, 0, 1)), day = week.getDay();
                    week = day > 4 || day === 0 ? (0, $lTpTu.monday).ceil(week) : (0, $lTpTu.monday)(week);
                    week = (0, $6k3PS.default).offset(week, (d.V - 1) * 7);
                    d.y = week.getFullYear();
                    d.m = week.getMonth();
                    d.d = week.getDate() + (d.w + 6) % 7;
                }
            } else if ("W" in d || "U" in d) {
                if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
                day = "Z" in d ? $1ba6a71522bf953e$var$utcDate($1ba6a71522bf953e$var$newDate(d.y, 0, 1)).getUTCDay() : $1ba6a71522bf953e$var$localDate($1ba6a71522bf953e$var$newDate(d.y, 0, 1)).getDay();
                d.m = 0;
                d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
            }
            // If a time zone is specified, all fields are interpreted as UTC and then
            // offset according to the specified time zone.
            if ("Z" in d) {
                d.H += d.Z / 100 | 0;
                d.M += d.Z % 100;
                return $1ba6a71522bf953e$var$utcDate(d);
            }
            // Otherwise, all fields are in local time.
            return $1ba6a71522bf953e$var$localDate(d);
        };
    }
    function parseSpecifier(d, specifier, string, j) {
        var i = 0, n = specifier.length, m = string.length, c, parse;
        while(i < n){
            if (j >= m) return -1;
            c = specifier.charCodeAt(i++);
            if (c === 37) {
                c = specifier.charAt(i++);
                parse = parses[c in $1ba6a71522bf953e$var$pads ? specifier.charAt(i++) : c];
                if (!parse || (j = parse(d, string, j)) < 0) return -1;
            } else if (c != string.charCodeAt(j++)) return -1;
        }
        return j;
    }
    function parsePeriod(d, string, i) {
        var n = periodRe.exec(string.slice(i));
        return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }
    function parseShortWeekday(d, string, i) {
        var n = shortWeekdayRe.exec(string.slice(i));
        return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }
    function parseWeekday(d, string, i) {
        var n = weekdayRe.exec(string.slice(i));
        return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }
    function parseShortMonth(d, string, i) {
        var n = shortMonthRe.exec(string.slice(i));
        return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }
    function parseMonth(d, string, i) {
        var n = monthRe.exec(string.slice(i));
        return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
    }
    function parseLocaleDateTime(d, string, i) {
        return parseSpecifier(d, locale_dateTime, string, i);
    }
    function parseLocaleDate(d, string, i) {
        return parseSpecifier(d, locale_date, string, i);
    }
    function parseLocaleTime(d, string, i) {
        return parseSpecifier(d, locale_time, string, i);
    }
    function formatShortWeekday(d) {
        return locale_shortWeekdays[d.getDay()];
    }
    function formatWeekday(d) {
        return locale_weekdays[d.getDay()];
    }
    function formatShortMonth(d) {
        return locale_shortMonths[d.getMonth()];
    }
    function formatMonth(d) {
        return locale_months[d.getMonth()];
    }
    function formatPeriod(d) {
        return locale_periods[+(d.getHours() >= 12)];
    }
    function formatQuarter(d) {
        return 1 + ~~(d.getMonth() / 3);
    }
    function formatUTCShortWeekday(d) {
        return locale_shortWeekdays[d.getUTCDay()];
    }
    function formatUTCWeekday(d) {
        return locale_weekdays[d.getUTCDay()];
    }
    function formatUTCShortMonth(d) {
        return locale_shortMonths[d.getUTCMonth()];
    }
    function formatUTCMonth(d) {
        return locale_months[d.getUTCMonth()];
    }
    function formatUTCPeriod(d) {
        return locale_periods[+(d.getUTCHours() >= 12)];
    }
    function formatUTCQuarter(d) {
        return 1 + ~~(d.getUTCMonth() / 3);
    }
    return {
        format: function(specifier) {
            var f = newFormat(specifier += "", formats);
            f.toString = function() {
                return specifier;
            };
            return f;
        },
        parse: function(specifier) {
            var p = newParse(specifier += "", false);
            p.toString = function() {
                return specifier;
            };
            return p;
        },
        utcFormat: function(specifier) {
            var f = newFormat(specifier += "", utcFormats);
            f.toString = function() {
                return specifier;
            };
            return f;
        },
        utcParse: function(specifier) {
            var p = newParse(specifier += "", true);
            p.toString = function() {
                return specifier;
            };
            return p;
        }
    };
}
var $1ba6a71522bf953e$var$pads = {
    "-": "",
    "_": " ",
    "0": "0"
}, $1ba6a71522bf953e$var$numberRe = /^\s*\d+/, $1ba6a71522bf953e$var$percentRe = /^%/, $1ba6a71522bf953e$var$requoteRe = /[\\^$*+?|[\]().{}]/g;
function $1ba6a71522bf953e$var$pad(value, fill, width) {
    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
function $1ba6a71522bf953e$var$requote(s) {
    return s.replace($1ba6a71522bf953e$var$requoteRe, "\\$&");
}
function $1ba6a71522bf953e$var$formatRe(names) {
    return new RegExp("^(?:" + names.map($1ba6a71522bf953e$var$requote).join("|") + ")", "i");
}
function $1ba6a71522bf953e$var$formatLookup(names) {
    var map = {}, i = -1, n = names.length;
    while(++i < n)map[names[i].toLowerCase()] = i;
    return map;
}
function $1ba6a71522bf953e$var$parseWeekdayNumberSunday(d, string, i) {
    var n = $1ba6a71522bf953e$var$numberRe.exec(string.slice(i, i + 1));
    return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function $1ba6a71522bf953e$var$parseWeekdayNumberMonday(d, string, i) {
    var n = $1ba6a71522bf953e$var$numberRe.exec(string.slice(i, i + 1));
    return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function $1ba6a71522bf953e$var$parseWeekNumberSunday(d, string, i) {
    var n = $1ba6a71522bf953e$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function $1ba6a71522bf953e$var$parseWeekNumberISO(d, string, i) {
    var n = $1ba6a71522bf953e$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function $1ba6a71522bf953e$var$parseWeekNumberMonday(d, string, i) {
    var n = $1ba6a71522bf953e$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function $1ba6a71522bf953e$var$parseFullYear(d, string, i) {
    var n = $1ba6a71522bf953e$var$numberRe.exec(string.slice(i, i + 4));
    return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function $1ba6a71522bf953e$var$parseYear(d, string, i) {
    var n = $1ba6a71522bf953e$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}
function $1ba6a71522bf953e$var$parseZone(d, string, i) {
    var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
    return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function $1ba6a71522bf953e$var$parseQuarter(d, string, i) {
    var n = $1ba6a71522bf953e$var$numberRe.exec(string.slice(i, i + 1));
    return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function $1ba6a71522bf953e$var$parseMonthNumber(d, string, i) {
    var n = $1ba6a71522bf953e$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function $1ba6a71522bf953e$var$parseDayOfMonth(d, string, i) {
    var n = $1ba6a71522bf953e$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function $1ba6a71522bf953e$var$parseDayOfYear(d, string, i) {
    var n = $1ba6a71522bf953e$var$numberRe.exec(string.slice(i, i + 3));
    return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function $1ba6a71522bf953e$var$parseHour24(d, string, i) {
    var n = $1ba6a71522bf953e$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function $1ba6a71522bf953e$var$parseMinutes(d, string, i) {
    var n = $1ba6a71522bf953e$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function $1ba6a71522bf953e$var$parseSeconds(d, string, i) {
    var n = $1ba6a71522bf953e$var$numberRe.exec(string.slice(i, i + 2));
    return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function $1ba6a71522bf953e$var$parseMilliseconds(d, string, i) {
    var n = $1ba6a71522bf953e$var$numberRe.exec(string.slice(i, i + 3));
    return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function $1ba6a71522bf953e$var$parseMicroseconds(d, string, i) {
    var n = $1ba6a71522bf953e$var$numberRe.exec(string.slice(i, i + 6));
    return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}
function $1ba6a71522bf953e$var$parseLiteralPercent(d, string, i) {
    var n = $1ba6a71522bf953e$var$percentRe.exec(string.slice(i, i + 1));
    return n ? i + n[0].length : -1;
}
function $1ba6a71522bf953e$var$parseUnixTimestamp(d, string, i) {
    var n = $1ba6a71522bf953e$var$numberRe.exec(string.slice(i));
    return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function $1ba6a71522bf953e$var$parseUnixTimestampSeconds(d, string, i) {
    var n = $1ba6a71522bf953e$var$numberRe.exec(string.slice(i));
    return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function $1ba6a71522bf953e$var$formatDayOfMonth(d, p) {
    return $1ba6a71522bf953e$var$pad(d.getDate(), p, 2);
}
function $1ba6a71522bf953e$var$formatHour24(d, p) {
    return $1ba6a71522bf953e$var$pad(d.getHours(), p, 2);
}
function $1ba6a71522bf953e$var$formatHour12(d, p) {
    return $1ba6a71522bf953e$var$pad(d.getHours() % 12 || 12, p, 2);
}
function $1ba6a71522bf953e$var$formatDayOfYear(d, p) {
    return $1ba6a71522bf953e$var$pad(1 + (0, $6k3PS.default).count((0, $fomVJ.default)(d), d), p, 3);
}
function $1ba6a71522bf953e$var$formatMilliseconds(d, p) {
    return $1ba6a71522bf953e$var$pad(d.getMilliseconds(), p, 3);
}
function $1ba6a71522bf953e$var$formatMicroseconds(d, p) {
    return $1ba6a71522bf953e$var$formatMilliseconds(d, p) + "000";
}
function $1ba6a71522bf953e$var$formatMonthNumber(d, p) {
    return $1ba6a71522bf953e$var$pad(d.getMonth() + 1, p, 2);
}
function $1ba6a71522bf953e$var$formatMinutes(d, p) {
    return $1ba6a71522bf953e$var$pad(d.getMinutes(), p, 2);
}
function $1ba6a71522bf953e$var$formatSeconds(d, p) {
    return $1ba6a71522bf953e$var$pad(d.getSeconds(), p, 2);
}
function $1ba6a71522bf953e$var$formatWeekdayNumberMonday(d) {
    var day = d.getDay();
    return day === 0 ? 7 : day;
}
function $1ba6a71522bf953e$var$formatWeekNumberSunday(d, p) {
    return $1ba6a71522bf953e$var$pad((0, $lTpTu.sunday).count((0, $fomVJ.default)(d) - 1, d), p, 2);
}
function $1ba6a71522bf953e$var$dISO(d) {
    var day = d.getDay();
    return day >= 4 || day === 0 ? (0, $lTpTu.thursday)(d) : (0, $lTpTu.thursday).ceil(d);
}
function $1ba6a71522bf953e$var$formatWeekNumberISO(d, p) {
    d = $1ba6a71522bf953e$var$dISO(d);
    return $1ba6a71522bf953e$var$pad((0, $lTpTu.thursday).count((0, $fomVJ.default)(d), d) + ((0, $fomVJ.default)(d).getDay() === 4), p, 2);
}
function $1ba6a71522bf953e$var$formatWeekdayNumberSunday(d) {
    return d.getDay();
}
function $1ba6a71522bf953e$var$formatWeekNumberMonday(d, p) {
    return $1ba6a71522bf953e$var$pad((0, $lTpTu.monday).count((0, $fomVJ.default)(d) - 1, d), p, 2);
}
function $1ba6a71522bf953e$var$formatYear(d, p) {
    return $1ba6a71522bf953e$var$pad(d.getFullYear() % 100, p, 2);
}
function $1ba6a71522bf953e$var$formatYearISO(d, p) {
    d = $1ba6a71522bf953e$var$dISO(d);
    return $1ba6a71522bf953e$var$pad(d.getFullYear() % 100, p, 2);
}
function $1ba6a71522bf953e$var$formatFullYear(d, p) {
    return $1ba6a71522bf953e$var$pad(d.getFullYear() % 10000, p, 4);
}
function $1ba6a71522bf953e$var$formatFullYearISO(d, p) {
    var day = d.getDay();
    d = day >= 4 || day === 0 ? (0, $lTpTu.thursday)(d) : (0, $lTpTu.thursday).ceil(d);
    return $1ba6a71522bf953e$var$pad(d.getFullYear() % 10000, p, 4);
}
function $1ba6a71522bf953e$var$formatZone(d) {
    var z = d.getTimezoneOffset();
    return (z > 0 ? "-" : (z *= -1, "+")) + $1ba6a71522bf953e$var$pad(z / 60 | 0, "0", 2) + $1ba6a71522bf953e$var$pad(z % 60, "0", 2);
}
function $1ba6a71522bf953e$var$formatUTCDayOfMonth(d, p) {
    return $1ba6a71522bf953e$var$pad(d.getUTCDate(), p, 2);
}
function $1ba6a71522bf953e$var$formatUTCHour24(d, p) {
    return $1ba6a71522bf953e$var$pad(d.getUTCHours(), p, 2);
}
function $1ba6a71522bf953e$var$formatUTCHour12(d, p) {
    return $1ba6a71522bf953e$var$pad(d.getUTCHours() % 12 || 12, p, 2);
}
function $1ba6a71522bf953e$var$formatUTCDayOfYear(d, p) {
    return $1ba6a71522bf953e$var$pad(1 + (0, $jqBxJ.default).count((0, $iIAL8.default)(d), d), p, 3);
}
function $1ba6a71522bf953e$var$formatUTCMilliseconds(d, p) {
    return $1ba6a71522bf953e$var$pad(d.getUTCMilliseconds(), p, 3);
}
function $1ba6a71522bf953e$var$formatUTCMicroseconds(d, p) {
    return $1ba6a71522bf953e$var$formatUTCMilliseconds(d, p) + "000";
}
function $1ba6a71522bf953e$var$formatUTCMonthNumber(d, p) {
    return $1ba6a71522bf953e$var$pad(d.getUTCMonth() + 1, p, 2);
}
function $1ba6a71522bf953e$var$formatUTCMinutes(d, p) {
    return $1ba6a71522bf953e$var$pad(d.getUTCMinutes(), p, 2);
}
function $1ba6a71522bf953e$var$formatUTCSeconds(d, p) {
    return $1ba6a71522bf953e$var$pad(d.getUTCSeconds(), p, 2);
}
function $1ba6a71522bf953e$var$formatUTCWeekdayNumberMonday(d) {
    var dow = d.getUTCDay();
    return dow === 0 ? 7 : dow;
}
function $1ba6a71522bf953e$var$formatUTCWeekNumberSunday(d, p) {
    return $1ba6a71522bf953e$var$pad((0, $dAFA2.utcSunday).count((0, $iIAL8.default)(d) - 1, d), p, 2);
}
function $1ba6a71522bf953e$var$UTCdISO(d) {
    var day = d.getUTCDay();
    return day >= 4 || day === 0 ? (0, $dAFA2.utcThursday)(d) : (0, $dAFA2.utcThursday).ceil(d);
}
function $1ba6a71522bf953e$var$formatUTCWeekNumberISO(d, p) {
    d = $1ba6a71522bf953e$var$UTCdISO(d);
    return $1ba6a71522bf953e$var$pad((0, $dAFA2.utcThursday).count((0, $iIAL8.default)(d), d) + ((0, $iIAL8.default)(d).getUTCDay() === 4), p, 2);
}
function $1ba6a71522bf953e$var$formatUTCWeekdayNumberSunday(d) {
    return d.getUTCDay();
}
function $1ba6a71522bf953e$var$formatUTCWeekNumberMonday(d, p) {
    return $1ba6a71522bf953e$var$pad((0, $dAFA2.utcMonday).count((0, $iIAL8.default)(d) - 1, d), p, 2);
}
function $1ba6a71522bf953e$var$formatUTCYear(d, p) {
    return $1ba6a71522bf953e$var$pad(d.getUTCFullYear() % 100, p, 2);
}
function $1ba6a71522bf953e$var$formatUTCYearISO(d, p) {
    d = $1ba6a71522bf953e$var$UTCdISO(d);
    return $1ba6a71522bf953e$var$pad(d.getUTCFullYear() % 100, p, 2);
}
function $1ba6a71522bf953e$var$formatUTCFullYear(d, p) {
    return $1ba6a71522bf953e$var$pad(d.getUTCFullYear() % 10000, p, 4);
}
function $1ba6a71522bf953e$var$formatUTCFullYearISO(d, p) {
    var day = d.getUTCDay();
    d = day >= 4 || day === 0 ? (0, $dAFA2.utcThursday)(d) : (0, $dAFA2.utcThursday).ceil(d);
    return $1ba6a71522bf953e$var$pad(d.getUTCFullYear() % 10000, p, 4);
}
function $1ba6a71522bf953e$var$formatUTCZone() {
    return "+0000";
}
function $1ba6a71522bf953e$var$formatLiteralPercent() {
    return "%";
}
function $1ba6a71522bf953e$var$formatUnixTimestamp(d) {
    return +d;
}
function $1ba6a71522bf953e$var$formatUnixTimestampSeconds(d) {
    return Math.floor(+d / 1000);
}

});
parcelRegister("jqBxJ", function(module, exports) {

$parcel$export(module.exports, "default", () => $e24d9150f6ce8e36$export$2e2bcd8739ae039);
$parcel$export(module.exports, "utcDays", () => $e24d9150f6ce8e36$export$d277e198508549a1);

var $jDHVD = parcelRequire("jDHVD");

var $4o5am = parcelRequire("4o5am");
var $e24d9150f6ce8e36$var$utcDay = (0, $jDHVD.default)(function(date) {
    date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
    return (end - start) / (0, $4o5am.durationDay);
}, function(date) {
    return date.getUTCDate() - 1;
});
var $e24d9150f6ce8e36$export$2e2bcd8739ae039 = $e24d9150f6ce8e36$var$utcDay;
var $e24d9150f6ce8e36$export$d277e198508549a1 = $e24d9150f6ce8e36$var$utcDay.range;

});

parcelRegister("dAFA2", function(module, exports) {

$parcel$export(module.exports, "utcSunday", () => $9e4ee423338658e6$export$4898b06303a92011);
$parcel$export(module.exports, "utcMonday", () => $9e4ee423338658e6$export$9cfc53b9cfafd080);
$parcel$export(module.exports, "utcTuesday", () => $9e4ee423338658e6$export$2a6d545f77eceb15);
$parcel$export(module.exports, "utcWednesday", () => $9e4ee423338658e6$export$a5c25d8ed64433c4);
$parcel$export(module.exports, "utcThursday", () => $9e4ee423338658e6$export$1db08111baec2f53);
$parcel$export(module.exports, "utcFriday", () => $9e4ee423338658e6$export$29265e34dd5921f7);
$parcel$export(module.exports, "utcSaturday", () => $9e4ee423338658e6$export$85b74dad05049604);
$parcel$export(module.exports, "utcSundays", () => $9e4ee423338658e6$export$6f3e1c2b0f7d7880);
$parcel$export(module.exports, "utcMondays", () => $9e4ee423338658e6$export$1d2d8b858bb366f9);
$parcel$export(module.exports, "utcTuesdays", () => $9e4ee423338658e6$export$1d5f6785fc7f30f8);
$parcel$export(module.exports, "utcWednesdays", () => $9e4ee423338658e6$export$7a75faf0e37ef4af);
$parcel$export(module.exports, "utcThursdays", () => $9e4ee423338658e6$export$417eb959611b2f2f);
$parcel$export(module.exports, "utcFridays", () => $9e4ee423338658e6$export$59d308db7af08c64);
$parcel$export(module.exports, "utcSaturdays", () => $9e4ee423338658e6$export$a124108a0a7f34c8);

var $jDHVD = parcelRequire("jDHVD");

var $4o5am = parcelRequire("4o5am");
function $9e4ee423338658e6$var$utcWeekday(i) {
    return (0, $jDHVD.default)(function(date) {
        date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
        date.setUTCHours(0, 0, 0, 0);
    }, function(date, step) {
        date.setUTCDate(date.getUTCDate() + step * 7);
    }, function(start, end) {
        return (end - start) / (0, $4o5am.durationWeek);
    });
}
var $9e4ee423338658e6$export$4898b06303a92011 = $9e4ee423338658e6$var$utcWeekday(0);
var $9e4ee423338658e6$export$9cfc53b9cfafd080 = $9e4ee423338658e6$var$utcWeekday(1);
var $9e4ee423338658e6$export$2a6d545f77eceb15 = $9e4ee423338658e6$var$utcWeekday(2);
var $9e4ee423338658e6$export$a5c25d8ed64433c4 = $9e4ee423338658e6$var$utcWeekday(3);
var $9e4ee423338658e6$export$1db08111baec2f53 = $9e4ee423338658e6$var$utcWeekday(4);
var $9e4ee423338658e6$export$29265e34dd5921f7 = $9e4ee423338658e6$var$utcWeekday(5);
var $9e4ee423338658e6$export$85b74dad05049604 = $9e4ee423338658e6$var$utcWeekday(6);
var $9e4ee423338658e6$export$6f3e1c2b0f7d7880 = $9e4ee423338658e6$export$4898b06303a92011.range;
var $9e4ee423338658e6$export$1d2d8b858bb366f9 = $9e4ee423338658e6$export$9cfc53b9cfafd080.range;
var $9e4ee423338658e6$export$1d5f6785fc7f30f8 = $9e4ee423338658e6$export$2a6d545f77eceb15.range;
var $9e4ee423338658e6$export$7a75faf0e37ef4af = $9e4ee423338658e6$export$a5c25d8ed64433c4.range;
var $9e4ee423338658e6$export$417eb959611b2f2f = $9e4ee423338658e6$export$1db08111baec2f53.range;
var $9e4ee423338658e6$export$59d308db7af08c64 = $9e4ee423338658e6$export$29265e34dd5921f7.range;
var $9e4ee423338658e6$export$a124108a0a7f34c8 = $9e4ee423338658e6$export$85b74dad05049604.range;

});

parcelRegister("iIAL8", function(module, exports) {

$parcel$export(module.exports, "default", () => $da08d9ad4b2f835d$export$2e2bcd8739ae039);
$parcel$export(module.exports, "utcYears", () => $da08d9ad4b2f835d$export$3e24d311e17f5802);

var $jDHVD = parcelRequire("jDHVD");
var $da08d9ad4b2f835d$var$utcYear = (0, $jDHVD.default)(function(date) {
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
    return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
    return date.getUTCFullYear();
});
// An optimized implementation for this simple case.
$da08d9ad4b2f835d$var$utcYear.every = function(k) {
    return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : (0, $jDHVD.default)(function(date) {
        date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
        date.setUTCMonth(0, 1);
        date.setUTCHours(0, 0, 0, 0);
    }, function(date, step) {
        date.setUTCFullYear(date.getUTCFullYear() + step * k);
    });
};
var $da08d9ad4b2f835d$export$2e2bcd8739ae039 = $da08d9ad4b2f835d$var$utcYear;
var $da08d9ad4b2f835d$export$3e24d311e17f5802 = $da08d9ad4b2f835d$var$utcYear.range;

});




parcelRegister("iaeyz", function(module, exports) {

$parcel$export(module.exports, "default", () => $d39473cea7624e6d$export$2e2bcd8739ae039);

var $g2I0P = parcelRequire("g2I0P");

var $6WgZw = parcelRequire("6WgZw");

var $jqBxJ = parcelRequire("jqBxJ");
var $bVbKI = parcelRequire("bVbKI");
var $ib75S = parcelRequire("ib75S");
var $eMrXX = parcelRequire("eMrXX");
var $jHjSV = parcelRequire("jHjSV");
var $5WJjg = parcelRequire("5WJjg");
var $dAFA2 = parcelRequire("dAFA2");
var $iIAL8 = parcelRequire("iIAL8");

var $bkGR0 = parcelRequire("bkGR0");
function $d39473cea7624e6d$export$2e2bcd8739ae039() {
    return (0, $bkGR0.initRange).apply((0, $g2I0P.calendar)((0, $iIAL8.default), (0, $jHjSV.default), (0, $dAFA2.utcSunday), (0, $jqBxJ.default), (0, $bVbKI.default), (0, $eMrXX.default), (0, $5WJjg.default), (0, $ib75S.default), (0, $6WgZw.utcFormat)).domain([
        Date.UTC(2000, 0, 1),
        Date.UTC(2000, 0, 2)
    ]), arguments);
}

});
parcelRegister("bVbKI", function(module, exports) {

$parcel$export(module.exports, "default", () => $8ade2260fda96639$export$2e2bcd8739ae039);
$parcel$export(module.exports, "utcHours", () => $8ade2260fda96639$export$6e7a76cd5f50b719);

var $jDHVD = parcelRequire("jDHVD");

var $4o5am = parcelRequire("4o5am");
var $8ade2260fda96639$var$utcHour = (0, $jDHVD.default)(function(date) {
    date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
    date.setTime(+date + step * (0, $4o5am.durationHour));
}, function(start, end) {
    return (end - start) / (0, $4o5am.durationHour);
}, function(date) {
    return date.getUTCHours();
});
var $8ade2260fda96639$export$2e2bcd8739ae039 = $8ade2260fda96639$var$utcHour;
var $8ade2260fda96639$export$6e7a76cd5f50b719 = $8ade2260fda96639$var$utcHour.range;

});

parcelRegister("eMrXX", function(module, exports) {

$parcel$export(module.exports, "default", () => $ac2b3ddad476fc1b$export$2e2bcd8739ae039);
$parcel$export(module.exports, "utcMinutes", () => $ac2b3ddad476fc1b$export$cedd563624e8ee50);

var $jDHVD = parcelRequire("jDHVD");

var $4o5am = parcelRequire("4o5am");
var $ac2b3ddad476fc1b$var$utcMinute = (0, $jDHVD.default)(function(date) {
    date.setUTCSeconds(0, 0);
}, function(date, step) {
    date.setTime(+date + step * (0, $4o5am.durationMinute));
}, function(start, end) {
    return (end - start) / (0, $4o5am.durationMinute);
}, function(date) {
    return date.getUTCMinutes();
});
var $ac2b3ddad476fc1b$export$2e2bcd8739ae039 = $ac2b3ddad476fc1b$var$utcMinute;
var $ac2b3ddad476fc1b$export$cedd563624e8ee50 = $ac2b3ddad476fc1b$var$utcMinute.range;

});

parcelRegister("jHjSV", function(module, exports) {

$parcel$export(module.exports, "default", () => $e571752ea1cfd4d2$export$2e2bcd8739ae039);
$parcel$export(module.exports, "utcMonths", () => $e571752ea1cfd4d2$export$49159f585997498);

var $jDHVD = parcelRequire("jDHVD");
var $e571752ea1cfd4d2$var$utcMonth = (0, $jDHVD.default)(function(date) {
    date.setUTCDate(1);
    date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
    date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
    return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
    return date.getUTCMonth();
});
var $e571752ea1cfd4d2$export$2e2bcd8739ae039 = $e571752ea1cfd4d2$var$utcMonth;
var $e571752ea1cfd4d2$export$49159f585997498 = $e571752ea1cfd4d2$var$utcMonth.range;

});


parcelRegister("hgpeg", function(module, exports) {

$parcel$export(module.exports, "copy", () => $c9178043aeb0dcf7$export$784d13d8ee351f07);
$parcel$export(module.exports, "default", () => $c9178043aeb0dcf7$export$2e2bcd8739ae039);
$parcel$export(module.exports, "sequentialLog", () => $c9178043aeb0dcf7$export$6843e08bf2ff981f);
$parcel$export(module.exports, "sequentialSymlog", () => $c9178043aeb0dcf7$export$9d4af4de62c81941);
$parcel$export(module.exports, "sequentialPow", () => $c9178043aeb0dcf7$export$de9f78581b4f2405);
$parcel$export(module.exports, "sequentialSqrt", () => $c9178043aeb0dcf7$export$413d935127ed466e);

var $7Fi51 = parcelRequire("7Fi51");

var $bkGR0 = parcelRequire("bkGR0");

var $2G0sx = parcelRequire("2G0sx");

var $88B1C = parcelRequire("88B1C");

var $5ozv4 = parcelRequire("5ozv4");

var $4A5bV = parcelRequire("4A5bV");
function $c9178043aeb0dcf7$var$transformer() {
    var x0 = 0, x1 = 1, t0, t1, k10, transform, interpolator = (0, $7Fi51.identity), clamp = false, unknown;
    function scale(x) {
        return isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
    }
    scale.domain = function(_) {
        return arguments.length ? (t0 = transform(x0 = +_[0]), t1 = transform(x1 = +_[1]), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [
            x0,
            x1
        ];
    };
    scale.clamp = function(_) {
        return arguments.length ? (clamp = !!_, scale) : clamp;
    };
    scale.interpolator = function(_) {
        return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t) {
        transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
        return scale;
    };
}
function $c9178043aeb0dcf7$export$784d13d8ee351f07(source, target) {
    return target.domain(source.domain()).interpolator(source.interpolator()).clamp(source.clamp()).unknown(source.unknown());
}
function $c9178043aeb0dcf7$export$2e2bcd8739ae039() {
    var scale = (0, $2G0sx.linearish)($c9178043aeb0dcf7$var$transformer()((0, $7Fi51.identity)));
    scale.copy = function() {
        return $c9178043aeb0dcf7$export$784d13d8ee351f07(scale, $c9178043aeb0dcf7$export$2e2bcd8739ae039());
    };
    return (0, $bkGR0.initInterpolator).apply(scale, arguments);
}
function $c9178043aeb0dcf7$export$6843e08bf2ff981f() {
    var scale = (0, $88B1C.loggish)($c9178043aeb0dcf7$var$transformer()).domain([
        1,
        10
    ]);
    scale.copy = function() {
        return $c9178043aeb0dcf7$export$784d13d8ee351f07(scale, $c9178043aeb0dcf7$export$6843e08bf2ff981f()).base(scale.base());
    };
    return (0, $bkGR0.initInterpolator).apply(scale, arguments);
}
function $c9178043aeb0dcf7$export$9d4af4de62c81941() {
    var scale = (0, $5ozv4.symlogish)($c9178043aeb0dcf7$var$transformer());
    scale.copy = function() {
        return $c9178043aeb0dcf7$export$784d13d8ee351f07(scale, $c9178043aeb0dcf7$export$9d4af4de62c81941()).constant(scale.constant());
    };
    return (0, $bkGR0.initInterpolator).apply(scale, arguments);
}
function $c9178043aeb0dcf7$export$de9f78581b4f2405() {
    var scale = (0, $4A5bV.powish)($c9178043aeb0dcf7$var$transformer());
    scale.copy = function() {
        return $c9178043aeb0dcf7$export$784d13d8ee351f07(scale, $c9178043aeb0dcf7$export$de9f78581b4f2405()).exponent(scale.exponent());
    };
    return (0, $bkGR0.initInterpolator).apply(scale, arguments);
}
function $c9178043aeb0dcf7$export$413d935127ed466e() {
    return $c9178043aeb0dcf7$export$de9f78581b4f2405.apply(null, arguments).exponent(0.5);
}

});

parcelRegister("eV8cL", function(module, exports) {

$parcel$export(module.exports, "default", () => $adccc0e6732f366f$export$2e2bcd8739ae039);
parcelRequire("ap1W6");
var $aXFrh = parcelRequire("aXFrh");
var $lS5FO = parcelRequire("lS5FO");

var $7Fi51 = parcelRequire("7Fi51");

var $bkGR0 = parcelRequire("bkGR0");
function $adccc0e6732f366f$export$2e2bcd8739ae039() {
    var domain = [], interpolator = (0, $7Fi51.identity);
    function scale(x) {
        if (!isNaN(x = +x)) return interpolator(((0, $lS5FO.default)(domain, x) - 1) / (domain.length - 1));
    }
    scale.domain = function(_) {
        if (!arguments.length) return domain.slice();
        domain = [];
        for(var i = 0, n = _.length, d; i < n; ++i)if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
        domain.sort((0, $aXFrh.default));
        return scale;
    };
    scale.interpolator = function(_) {
        return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    scale.copy = function() {
        return $adccc0e6732f366f$export$2e2bcd8739ae039(interpolator).domain(domain);
    };
    return (0, $bkGR0.initInterpolator).apply(scale, arguments);
}

});

parcelRegister("9oKbx", function(module, exports) {

$parcel$export(module.exports, "default", () => $6d7a2e55a81b2ca6$export$2e2bcd8739ae039);
$parcel$export(module.exports, "divergingLog", () => $6d7a2e55a81b2ca6$export$5f0266a9159c47fb);
$parcel$export(module.exports, "divergingSymlog", () => $6d7a2e55a81b2ca6$export$50b3da713cf557c6);
$parcel$export(module.exports, "divergingPow", () => $6d7a2e55a81b2ca6$export$d6cedcc63bf26e7e);
$parcel$export(module.exports, "divergingSqrt", () => $6d7a2e55a81b2ca6$export$33ddefb5c4ab9e9c);

var $7Fi51 = parcelRequire("7Fi51");

var $bkGR0 = parcelRequire("bkGR0");

var $2G0sx = parcelRequire("2G0sx");

var $88B1C = parcelRequire("88B1C");

var $hgpeg = parcelRequire("hgpeg");

var $5ozv4 = parcelRequire("5ozv4");

var $4A5bV = parcelRequire("4A5bV");
function $6d7a2e55a81b2ca6$var$transformer() {
    var x0 = 0, x1 = 0.5, x2 = 1, t0, t1, t2, k10, k21, interpolator = (0, $7Fi51.identity), transform, clamp = false, unknown;
    function scale(x) {
        return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (x < t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));
    }
    scale.domain = function(_) {
        return arguments.length ? (t0 = transform(x0 = +_[0]), t1 = transform(x1 = +_[1]), t2 = transform(x2 = +_[2]), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), scale) : [
            x0,
            x1,
            x2
        ];
    };
    scale.clamp = function(_) {
        return arguments.length ? (clamp = !!_, scale) : clamp;
    };
    scale.interpolator = function(_) {
        return arguments.length ? (interpolator = _, scale) : interpolator;
    };
    scale.unknown = function(_) {
        return arguments.length ? (unknown = _, scale) : unknown;
    };
    return function(t) {
        transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1);
        return scale;
    };
}
function $6d7a2e55a81b2ca6$export$2e2bcd8739ae039() {
    var scale = (0, $2G0sx.linearish)($6d7a2e55a81b2ca6$var$transformer()((0, $7Fi51.identity)));
    scale.copy = function() {
        return (0, $hgpeg.copy)(scale, $6d7a2e55a81b2ca6$export$2e2bcd8739ae039());
    };
    return (0, $bkGR0.initInterpolator).apply(scale, arguments);
}
function $6d7a2e55a81b2ca6$export$5f0266a9159c47fb() {
    var scale = (0, $88B1C.loggish)($6d7a2e55a81b2ca6$var$transformer()).domain([
        0.1,
        1,
        10
    ]);
    scale.copy = function() {
        return (0, $hgpeg.copy)(scale, $6d7a2e55a81b2ca6$export$5f0266a9159c47fb()).base(scale.base());
    };
    return (0, $bkGR0.initInterpolator).apply(scale, arguments);
}
function $6d7a2e55a81b2ca6$export$50b3da713cf557c6() {
    var scale = (0, $5ozv4.symlogish)($6d7a2e55a81b2ca6$var$transformer());
    scale.copy = function() {
        return (0, $hgpeg.copy)(scale, $6d7a2e55a81b2ca6$export$50b3da713cf557c6()).constant(scale.constant());
    };
    return (0, $bkGR0.initInterpolator).apply(scale, arguments);
}
function $6d7a2e55a81b2ca6$export$d6cedcc63bf26e7e() {
    var scale = (0, $4A5bV.powish)($6d7a2e55a81b2ca6$var$transformer());
    scale.copy = function() {
        return (0, $hgpeg.copy)(scale, $6d7a2e55a81b2ca6$export$d6cedcc63bf26e7e()).exponent(scale.exponent());
    };
    return (0, $bkGR0.initInterpolator).apply(scale, arguments);
}
function $6d7a2e55a81b2ca6$export$33ddefb5c4ab9e9c() {
    return $6d7a2e55a81b2ca6$export$d6cedcc63bf26e7e.apply(null, arguments).exponent(0.5);
}

});


parcelRegister("4uph1", function(module, exports) {

$parcel$export(module.exports, "schemeCategory10", () => (parcelRequire("36KlN")).default);
$parcel$export(module.exports, "schemeAccent", () => (parcelRequire("jII9l")).default);
$parcel$export(module.exports, "schemeDark2", () => (parcelRequire("42kPM")).default);
$parcel$export(module.exports, "schemePaired", () => (parcelRequire("3aml5")).default);
$parcel$export(module.exports, "schemePastel1", () => (parcelRequire("52WXw")).default);
$parcel$export(module.exports, "schemePastel2", () => (parcelRequire("2q3j1")).default);
$parcel$export(module.exports, "schemeSet1", () => (parcelRequire("dE5iK")).default);
$parcel$export(module.exports, "schemeSet2", () => (parcelRequire("5cJ7I")).default);
$parcel$export(module.exports, "schemeSet3", () => (parcelRequire("lgafH")).default);
$parcel$export(module.exports, "schemeTableau10", () => (parcelRequire("hN1l3")).default);
$parcel$export(module.exports, "interpolateBrBG", () => (parcelRequire("cZhs4")).default);
$parcel$export(module.exports, "schemeBrBG", () => (parcelRequire("cZhs4")).scheme);
$parcel$export(module.exports, "interpolatePRGn", () => (parcelRequire("gcuSQ")).default);
$parcel$export(module.exports, "schemePRGn", () => (parcelRequire("gcuSQ")).scheme);
$parcel$export(module.exports, "interpolatePiYG", () => (parcelRequire("6yVGe")).default);
$parcel$export(module.exports, "schemePiYG", () => (parcelRequire("6yVGe")).scheme);
$parcel$export(module.exports, "interpolatePuOr", () => (parcelRequire("17Oqk")).default);
$parcel$export(module.exports, "schemePuOr", () => (parcelRequire("17Oqk")).scheme);
$parcel$export(module.exports, "interpolateRdBu", () => (parcelRequire("9qXzq")).default);
$parcel$export(module.exports, "schemeRdBu", () => (parcelRequire("9qXzq")).scheme);
$parcel$export(module.exports, "interpolateRdGy", () => (parcelRequire("04hvh")).default);
$parcel$export(module.exports, "schemeRdGy", () => (parcelRequire("04hvh")).scheme);
$parcel$export(module.exports, "interpolateRdYlBu", () => (parcelRequire("f2vKw")).default);
$parcel$export(module.exports, "schemeRdYlBu", () => (parcelRequire("f2vKw")).scheme);
$parcel$export(module.exports, "interpolateRdYlGn", () => (parcelRequire("hyCWH")).default);
$parcel$export(module.exports, "schemeRdYlGn", () => (parcelRequire("hyCWH")).scheme);
$parcel$export(module.exports, "interpolateSpectral", () => (parcelRequire("dKOhd")).default);
$parcel$export(module.exports, "schemeSpectral", () => (parcelRequire("dKOhd")).scheme);
$parcel$export(module.exports, "interpolateBuGn", () => (parcelRequire("fsV9O")).default);
$parcel$export(module.exports, "schemeBuGn", () => (parcelRequire("fsV9O")).scheme);
$parcel$export(module.exports, "interpolateBuPu", () => (parcelRequire("dijf2")).default);
$parcel$export(module.exports, "schemeBuPu", () => (parcelRequire("dijf2")).scheme);
$parcel$export(module.exports, "interpolateGnBu", () => (parcelRequire("ZT4dg")).default);
$parcel$export(module.exports, "schemeGnBu", () => (parcelRequire("ZT4dg")).scheme);
$parcel$export(module.exports, "interpolateOrRd", () => (parcelRequire("6fBtX")).default);
$parcel$export(module.exports, "schemeOrRd", () => (parcelRequire("6fBtX")).scheme);
$parcel$export(module.exports, "interpolatePuBuGn", () => (parcelRequire("9hJNE")).default);
$parcel$export(module.exports, "schemePuBuGn", () => (parcelRequire("9hJNE")).scheme);
$parcel$export(module.exports, "interpolatePuBu", () => (parcelRequire("iU9z3")).default);
$parcel$export(module.exports, "schemePuBu", () => (parcelRequire("iU9z3")).scheme);
$parcel$export(module.exports, "interpolatePuRd", () => (parcelRequire("dZEbc")).default);
$parcel$export(module.exports, "schemePuRd", () => (parcelRequire("dZEbc")).scheme);
$parcel$export(module.exports, "interpolateRdPu", () => (parcelRequire("g1Crp")).default);
$parcel$export(module.exports, "schemeRdPu", () => (parcelRequire("g1Crp")).scheme);
$parcel$export(module.exports, "interpolateYlGnBu", () => (parcelRequire("2QcIp")).default);
$parcel$export(module.exports, "schemeYlGnBu", () => (parcelRequire("2QcIp")).scheme);
$parcel$export(module.exports, "interpolateYlGn", () => (parcelRequire("56Yxc")).default);
$parcel$export(module.exports, "schemeYlGn", () => (parcelRequire("56Yxc")).scheme);
$parcel$export(module.exports, "interpolateYlOrBr", () => (parcelRequire("bu8aT")).default);
$parcel$export(module.exports, "schemeYlOrBr", () => (parcelRequire("bu8aT")).scheme);
$parcel$export(module.exports, "interpolateYlOrRd", () => (parcelRequire("jiLt4")).default);
$parcel$export(module.exports, "schemeYlOrRd", () => (parcelRequire("jiLt4")).scheme);
$parcel$export(module.exports, "interpolateBlues", () => (parcelRequire("kjb7y")).default);
$parcel$export(module.exports, "schemeBlues", () => (parcelRequire("kjb7y")).scheme);
$parcel$export(module.exports, "interpolateGreens", () => (parcelRequire("l9tyw")).default);
$parcel$export(module.exports, "schemeGreens", () => (parcelRequire("l9tyw")).scheme);
$parcel$export(module.exports, "interpolateGreys", () => (parcelRequire("anmGk")).default);
$parcel$export(module.exports, "schemeGreys", () => (parcelRequire("anmGk")).scheme);
$parcel$export(module.exports, "interpolatePurples", () => (parcelRequire("jE2sY")).default);
$parcel$export(module.exports, "schemePurples", () => (parcelRequire("jE2sY")).scheme);
$parcel$export(module.exports, "interpolateReds", () => (parcelRequire("9Prqp")).default);
$parcel$export(module.exports, "schemeReds", () => (parcelRequire("9Prqp")).scheme);
$parcel$export(module.exports, "interpolateOranges", () => (parcelRequire("i5CQ3")).default);
$parcel$export(module.exports, "schemeOranges", () => (parcelRequire("i5CQ3")).scheme);
$parcel$export(module.exports, "interpolateCividis", () => (parcelRequire("9cBAA")).default);
$parcel$export(module.exports, "interpolateCubehelixDefault", () => (parcelRequire("hHIU5")).default);
$parcel$export(module.exports, "interpolateRainbow", () => (parcelRequire("a0W4g")).default);
$parcel$export(module.exports, "interpolateWarm", () => (parcelRequire("a0W4g")).warm);
$parcel$export(module.exports, "interpolateCool", () => (parcelRequire("a0W4g")).cool);
$parcel$export(module.exports, "interpolateSinebow", () => (parcelRequire("2XLpG")).default);
$parcel$export(module.exports, "interpolateTurbo", () => (parcelRequire("4JfUV")).default);
$parcel$export(module.exports, "interpolateViridis", () => (parcelRequire("fw13m")).default);
$parcel$export(module.exports, "interpolateMagma", () => (parcelRequire("fw13m")).magma);
$parcel$export(module.exports, "interpolateInferno", () => (parcelRequire("fw13m")).inferno);
$parcel$export(module.exports, "interpolatePlasma", () => (parcelRequire("fw13m")).plasma);

var $36KlN = parcelRequire("36KlN");

var $jII9l = parcelRequire("jII9l");

var $42kPM = parcelRequire("42kPM");

var $3aml5 = parcelRequire("3aml5");

var $52WXw = parcelRequire("52WXw");

var $2q3j1 = parcelRequire("2q3j1");

var $dE5iK = parcelRequire("dE5iK");

var $5cJ7I = parcelRequire("5cJ7I");

var $lgafH = parcelRequire("lgafH");

var $hN1l3 = parcelRequire("hN1l3");

var $cZhs4 = parcelRequire("cZhs4");

var $gcuSQ = parcelRequire("gcuSQ");

var $6yVGe = parcelRequire("6yVGe");

var $17Oqk = parcelRequire("17Oqk");

var $9qXzq = parcelRequire("9qXzq");

var $04hvh = parcelRequire("04hvh");

var $f2vKw = parcelRequire("f2vKw");

var $hyCWH = parcelRequire("hyCWH");

var $dKOhd = parcelRequire("dKOhd");

var $fsV9O = parcelRequire("fsV9O");

var $dijf2 = parcelRequire("dijf2");

var $ZT4dg = parcelRequire("ZT4dg");

var $6fBtX = parcelRequire("6fBtX");

var $9hJNE = parcelRequire("9hJNE");

var $iU9z3 = parcelRequire("iU9z3");

var $dZEbc = parcelRequire("dZEbc");

var $g1Crp = parcelRequire("g1Crp");

var $2QcIp = parcelRequire("2QcIp");

var $56Yxc = parcelRequire("56Yxc");

var $bu8aT = parcelRequire("bu8aT");

var $jiLt4 = parcelRequire("jiLt4");

var $kjb7y = parcelRequire("kjb7y");

var $l9tyw = parcelRequire("l9tyw");

var $anmGk = parcelRequire("anmGk");

var $jE2sY = parcelRequire("jE2sY");

var $9Prqp = parcelRequire("9Prqp");

var $i5CQ3 = parcelRequire("i5CQ3");

var $9cBAA = parcelRequire("9cBAA");

var $hHIU5 = parcelRequire("hHIU5");

var $a0W4g = parcelRequire("a0W4g");

var $2XLpG = parcelRequire("2XLpG");

var $4JfUV = parcelRequire("4JfUV");

var $fw13m = parcelRequire("fw13m");

});
parcelRegister("36KlN", function(module, exports) {

$parcel$export(module.exports, "default", () => $2435e2dffda20014$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");
var $2435e2dffda20014$export$2e2bcd8739ae039 = (0, $gG5dW.default)("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf");

});
parcelRegister("gG5dW", function(module, exports) {

$parcel$export(module.exports, "default", () => $c2449ef35f373007$export$2e2bcd8739ae039);
function $c2449ef35f373007$export$2e2bcd8739ae039(specifier) {
    var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
    while(i < n)colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
    return colors;
}

});


parcelRegister("jII9l", function(module, exports) {

$parcel$export(module.exports, "default", () => $e5b45f92c19ef76f$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");
var $e5b45f92c19ef76f$export$2e2bcd8739ae039 = (0, $gG5dW.default)("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666");

});

parcelRegister("42kPM", function(module, exports) {

$parcel$export(module.exports, "default", () => $2f07828aca972443$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");
var $2f07828aca972443$export$2e2bcd8739ae039 = (0, $gG5dW.default)("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666");

});

parcelRegister("3aml5", function(module, exports) {

$parcel$export(module.exports, "default", () => $24e3a25a883aa8e4$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");
var $24e3a25a883aa8e4$export$2e2bcd8739ae039 = (0, $gG5dW.default)("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");

});

parcelRegister("52WXw", function(module, exports) {

$parcel$export(module.exports, "default", () => $3acadfb6ce59b088$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");
var $3acadfb6ce59b088$export$2e2bcd8739ae039 = (0, $gG5dW.default)("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2");

});

parcelRegister("2q3j1", function(module, exports) {

$parcel$export(module.exports, "default", () => $1c3092f0f79508e9$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");
var $1c3092f0f79508e9$export$2e2bcd8739ae039 = (0, $gG5dW.default)("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc");

});

parcelRegister("dE5iK", function(module, exports) {

$parcel$export(module.exports, "default", () => $9ef31f87fb3b5c1a$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");
var $9ef31f87fb3b5c1a$export$2e2bcd8739ae039 = (0, $gG5dW.default)("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999");

});

parcelRegister("5cJ7I", function(module, exports) {

$parcel$export(module.exports, "default", () => $3ca113561119b273$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");
var $3ca113561119b273$export$2e2bcd8739ae039 = (0, $gG5dW.default)("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3");

});

parcelRegister("lgafH", function(module, exports) {

$parcel$export(module.exports, "default", () => $f7a30b7eef7a4b7e$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");
var $f7a30b7eef7a4b7e$export$2e2bcd8739ae039 = (0, $gG5dW.default)("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f");

});

parcelRegister("hN1l3", function(module, exports) {

$parcel$export(module.exports, "default", () => $cf380d1c24f0cc6a$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");
var $cf380d1c24f0cc6a$export$2e2bcd8739ae039 = (0, $gG5dW.default)("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");

});

parcelRegister("cZhs4", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $9748b81d6f09daf2$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $9748b81d6f09daf2$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $9748b81d6f09daf2$export$3005042704f95a69 = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map((0, $gG5dW.default));
var $9748b81d6f09daf2$export$2e2bcd8739ae039 = (0, $90e3C.default)($9748b81d6f09daf2$export$3005042704f95a69);

});
parcelRegister("90e3C", function(module, exports) {

$parcel$export(module.exports, "default", () => $68df04a96d4f1c5b$export$2e2bcd8739ae039);

var $emQa8 = parcelRequire("emQa8");
function $68df04a96d4f1c5b$export$2e2bcd8739ae039(scheme) {
    return (0, $emQa8.rgbBasis)(scheme[scheme.length - 1]);
}

});


parcelRegister("gcuSQ", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $030b3067ed603e4f$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $030b3067ed603e4f$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $030b3067ed603e4f$export$3005042704f95a69 = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map((0, $gG5dW.default));
var $030b3067ed603e4f$export$2e2bcd8739ae039 = (0, $90e3C.default)($030b3067ed603e4f$export$3005042704f95a69);

});

parcelRegister("6yVGe", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $4c72a91cc78970a6$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $4c72a91cc78970a6$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $4c72a91cc78970a6$export$3005042704f95a69 = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map((0, $gG5dW.default));
var $4c72a91cc78970a6$export$2e2bcd8739ae039 = (0, $90e3C.default)($4c72a91cc78970a6$export$3005042704f95a69);

});

parcelRegister("17Oqk", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $0d1d8ef8e11d3de0$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $0d1d8ef8e11d3de0$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $0d1d8ef8e11d3de0$export$3005042704f95a69 = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map((0, $gG5dW.default));
var $0d1d8ef8e11d3de0$export$2e2bcd8739ae039 = (0, $90e3C.default)($0d1d8ef8e11d3de0$export$3005042704f95a69);

});

parcelRegister("9qXzq", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $6de4c02e5335df54$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $6de4c02e5335df54$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $6de4c02e5335df54$export$3005042704f95a69 = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map((0, $gG5dW.default));
var $6de4c02e5335df54$export$2e2bcd8739ae039 = (0, $90e3C.default)($6de4c02e5335df54$export$3005042704f95a69);

});

parcelRegister("04hvh", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $00cdf3aad0c68b87$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $00cdf3aad0c68b87$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $00cdf3aad0c68b87$export$3005042704f95a69 = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map((0, $gG5dW.default));
var $00cdf3aad0c68b87$export$2e2bcd8739ae039 = (0, $90e3C.default)($00cdf3aad0c68b87$export$3005042704f95a69);

});

parcelRegister("f2vKw", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $af2fabb2074d6839$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $af2fabb2074d6839$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $af2fabb2074d6839$export$3005042704f95a69 = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map((0, $gG5dW.default));
var $af2fabb2074d6839$export$2e2bcd8739ae039 = (0, $90e3C.default)($af2fabb2074d6839$export$3005042704f95a69);

});

parcelRegister("hyCWH", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $cc83d2723b58c28c$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $cc83d2723b58c28c$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $cc83d2723b58c28c$export$3005042704f95a69 = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map((0, $gG5dW.default));
var $cc83d2723b58c28c$export$2e2bcd8739ae039 = (0, $90e3C.default)($cc83d2723b58c28c$export$3005042704f95a69);

});

parcelRegister("dKOhd", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $a0369226b9801a3c$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $a0369226b9801a3c$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $a0369226b9801a3c$export$3005042704f95a69 = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map((0, $gG5dW.default));
var $a0369226b9801a3c$export$2e2bcd8739ae039 = (0, $90e3C.default)($a0369226b9801a3c$export$3005042704f95a69);

});

parcelRegister("fsV9O", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $b425cec2ac809c8f$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $b425cec2ac809c8f$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $b425cec2ac809c8f$export$3005042704f95a69 = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map((0, $gG5dW.default));
var $b425cec2ac809c8f$export$2e2bcd8739ae039 = (0, $90e3C.default)($b425cec2ac809c8f$export$3005042704f95a69);

});

parcelRegister("dijf2", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $9adbe1c4a616ca70$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $9adbe1c4a616ca70$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $9adbe1c4a616ca70$export$3005042704f95a69 = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map((0, $gG5dW.default));
var $9adbe1c4a616ca70$export$2e2bcd8739ae039 = (0, $90e3C.default)($9adbe1c4a616ca70$export$3005042704f95a69);

});

parcelRegister("ZT4dg", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $0ba069c4d5362000$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $0ba069c4d5362000$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $0ba069c4d5362000$export$3005042704f95a69 = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map((0, $gG5dW.default));
var $0ba069c4d5362000$export$2e2bcd8739ae039 = (0, $90e3C.default)($0ba069c4d5362000$export$3005042704f95a69);

});

parcelRegister("6fBtX", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $48d137fa32264b1b$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $48d137fa32264b1b$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $48d137fa32264b1b$export$3005042704f95a69 = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map((0, $gG5dW.default));
var $48d137fa32264b1b$export$2e2bcd8739ae039 = (0, $90e3C.default)($48d137fa32264b1b$export$3005042704f95a69);

});

parcelRegister("9hJNE", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $6c293a7be6747ff8$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $6c293a7be6747ff8$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $6c293a7be6747ff8$export$3005042704f95a69 = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map((0, $gG5dW.default));
var $6c293a7be6747ff8$export$2e2bcd8739ae039 = (0, $90e3C.default)($6c293a7be6747ff8$export$3005042704f95a69);

});

parcelRegister("iU9z3", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $dc34e04059fbf509$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $dc34e04059fbf509$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $dc34e04059fbf509$export$3005042704f95a69 = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map((0, $gG5dW.default));
var $dc34e04059fbf509$export$2e2bcd8739ae039 = (0, $90e3C.default)($dc34e04059fbf509$export$3005042704f95a69);

});

parcelRegister("dZEbc", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $a30023ae3c371bdc$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $a30023ae3c371bdc$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $a30023ae3c371bdc$export$3005042704f95a69 = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map((0, $gG5dW.default));
var $a30023ae3c371bdc$export$2e2bcd8739ae039 = (0, $90e3C.default)($a30023ae3c371bdc$export$3005042704f95a69);

});

parcelRegister("g1Crp", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $baaa8ee9cdb6740a$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $baaa8ee9cdb6740a$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $baaa8ee9cdb6740a$export$3005042704f95a69 = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map((0, $gG5dW.default));
var $baaa8ee9cdb6740a$export$2e2bcd8739ae039 = (0, $90e3C.default)($baaa8ee9cdb6740a$export$3005042704f95a69);

});

parcelRegister("2QcIp", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $211a4d1c119943f4$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $211a4d1c119943f4$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $211a4d1c119943f4$export$3005042704f95a69 = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map((0, $gG5dW.default));
var $211a4d1c119943f4$export$2e2bcd8739ae039 = (0, $90e3C.default)($211a4d1c119943f4$export$3005042704f95a69);

});

parcelRegister("56Yxc", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $3b8c782eb80aaa50$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $3b8c782eb80aaa50$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $3b8c782eb80aaa50$export$3005042704f95a69 = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map((0, $gG5dW.default));
var $3b8c782eb80aaa50$export$2e2bcd8739ae039 = (0, $90e3C.default)($3b8c782eb80aaa50$export$3005042704f95a69);

});

parcelRegister("bu8aT", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $85c8d65cd0155a0a$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $85c8d65cd0155a0a$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $85c8d65cd0155a0a$export$3005042704f95a69 = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map((0, $gG5dW.default));
var $85c8d65cd0155a0a$export$2e2bcd8739ae039 = (0, $90e3C.default)($85c8d65cd0155a0a$export$3005042704f95a69);

});

parcelRegister("jiLt4", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $e0d484e1ef157af9$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $e0d484e1ef157af9$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $e0d484e1ef157af9$export$3005042704f95a69 = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map((0, $gG5dW.default));
var $e0d484e1ef157af9$export$2e2bcd8739ae039 = (0, $90e3C.default)($e0d484e1ef157af9$export$3005042704f95a69);

});

parcelRegister("kjb7y", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $ec8e355e4ac4c549$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $ec8e355e4ac4c549$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $ec8e355e4ac4c549$export$3005042704f95a69 = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map((0, $gG5dW.default));
var $ec8e355e4ac4c549$export$2e2bcd8739ae039 = (0, $90e3C.default)($ec8e355e4ac4c549$export$3005042704f95a69);

});

parcelRegister("l9tyw", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $f6615d69956bd950$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $f6615d69956bd950$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $f6615d69956bd950$export$3005042704f95a69 = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map((0, $gG5dW.default));
var $f6615d69956bd950$export$2e2bcd8739ae039 = (0, $90e3C.default)($f6615d69956bd950$export$3005042704f95a69);

});

parcelRegister("anmGk", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $78dda57d320a3624$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $78dda57d320a3624$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $78dda57d320a3624$export$3005042704f95a69 = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map((0, $gG5dW.default));
var $78dda57d320a3624$export$2e2bcd8739ae039 = (0, $90e3C.default)($78dda57d320a3624$export$3005042704f95a69);

});

parcelRegister("jE2sY", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $e4d3aa84fec1d19c$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $e4d3aa84fec1d19c$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $e4d3aa84fec1d19c$export$3005042704f95a69 = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map((0, $gG5dW.default));
var $e4d3aa84fec1d19c$export$2e2bcd8739ae039 = (0, $90e3C.default)($e4d3aa84fec1d19c$export$3005042704f95a69);

});

parcelRegister("9Prqp", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $727e267fcbf54a0d$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $727e267fcbf54a0d$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $727e267fcbf54a0d$export$3005042704f95a69 = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map((0, $gG5dW.default));
var $727e267fcbf54a0d$export$2e2bcd8739ae039 = (0, $90e3C.default)($727e267fcbf54a0d$export$3005042704f95a69);

});

parcelRegister("i5CQ3", function(module, exports) {

$parcel$export(module.exports, "scheme", () => $d2b6d22a8e2d9dfa$export$3005042704f95a69);
$parcel$export(module.exports, "default", () => $d2b6d22a8e2d9dfa$export$2e2bcd8739ae039);

var $gG5dW = parcelRequire("gG5dW");

var $90e3C = parcelRequire("90e3C");
var $d2b6d22a8e2d9dfa$export$3005042704f95a69 = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map((0, $gG5dW.default));
var $d2b6d22a8e2d9dfa$export$2e2bcd8739ae039 = (0, $90e3C.default)($d2b6d22a8e2d9dfa$export$3005042704f95a69);

});

parcelRegister("9cBAA", function(module, exports) {

$parcel$export(module.exports, "default", () => $6b326475f2005376$export$2e2bcd8739ae039);
function $6b326475f2005376$export$2e2bcd8739ae039(t) {
    t = Math.max(0, Math.min(1, t));
    return "rgb(" + Math.max(0, Math.min(255, Math.round(-4.54 - t * (35.34 - t * (2381.73 - t * (6402.7 - t * (7024.72 - t * 2710.57))))))) + ", " + Math.max(0, Math.min(255, Math.round(32.49 + t * (170.73 + t * (52.82 - t * (131.46 - t * (176.58 - t * 67.37))))))) + ", " + Math.max(0, Math.min(255, Math.round(81.24 + t * (442.36 - t * (2482.43 - t * (6167.24 - t * (6614.94 - t * 2475.67))))))) + ")";
}

});

parcelRegister("hHIU5", function(module, exports) {

$parcel$export(module.exports, "default", () => $ce3948c5122a0c42$export$2e2bcd8739ae039);

var $6wiJa = parcelRequire("6wiJa");

var $d0aNl = parcelRequire("d0aNl");
var $ce3948c5122a0c42$export$2e2bcd8739ae039 = (0, $d0aNl.cubehelixLong)((0, $6wiJa.default)(300, 0.5, 0.0), (0, $6wiJa.default)(-240, 0.5, 1.0));

});

parcelRegister("a0W4g", function(module, exports) {

$parcel$export(module.exports, "warm", () => $74a6f28930741f8a$export$fc70efcec537be98);
$parcel$export(module.exports, "cool", () => $74a6f28930741f8a$export$c5cedbc1ab3be2c3);
$parcel$export(module.exports, "default", () => $74a6f28930741f8a$export$2e2bcd8739ae039);

var $6wiJa = parcelRequire("6wiJa");

var $d0aNl = parcelRequire("d0aNl");
var $74a6f28930741f8a$export$fc70efcec537be98 = (0, $d0aNl.cubehelixLong)((0, $6wiJa.default)(-100, 0.75, 0.35), (0, $6wiJa.default)(80, 1.50, 0.8));
var $74a6f28930741f8a$export$c5cedbc1ab3be2c3 = (0, $d0aNl.cubehelixLong)((0, $6wiJa.default)(260, 0.75, 0.35), (0, $6wiJa.default)(80, 1.50, 0.8));
var $74a6f28930741f8a$var$c = (0, $6wiJa.default)();
function $74a6f28930741f8a$export$2e2bcd8739ae039(t) {
    if (t < 0 || t > 1) t -= Math.floor(t);
    var ts = Math.abs(t - 0.5);
    $74a6f28930741f8a$var$c.h = 360 * t - 100;
    $74a6f28930741f8a$var$c.s = 1.5 - 1.5 * ts;
    $74a6f28930741f8a$var$c.l = 0.8 - 0.9 * ts;
    return $74a6f28930741f8a$var$c + "";
}

});

parcelRegister("2XLpG", function(module, exports) {

$parcel$export(module.exports, "default", () => $2285dec369d8ec9d$export$2e2bcd8739ae039);

var $abtVK = parcelRequire("abtVK");
var $2285dec369d8ec9d$var$c = (0, $abtVK.rgb)(), $2285dec369d8ec9d$var$pi_1_3 = Math.PI / 3, $2285dec369d8ec9d$var$pi_2_3 = Math.PI * 2 / 3;
function $2285dec369d8ec9d$export$2e2bcd8739ae039(t) {
    var x;
    t = (0.5 - t) * Math.PI;
    $2285dec369d8ec9d$var$c.r = 255 * (x = Math.sin(t)) * x;
    $2285dec369d8ec9d$var$c.g = 255 * (x = Math.sin(t + $2285dec369d8ec9d$var$pi_1_3)) * x;
    $2285dec369d8ec9d$var$c.b = 255 * (x = Math.sin(t + $2285dec369d8ec9d$var$pi_2_3)) * x;
    return $2285dec369d8ec9d$var$c + "";
}

});

parcelRegister("4JfUV", function(module, exports) {

$parcel$export(module.exports, "default", () => $3717b6344b561db3$export$2e2bcd8739ae039);
function $3717b6344b561db3$export$2e2bcd8739ae039(t) {
    t = Math.max(0, Math.min(1, t));
    return "rgb(" + Math.max(0, Math.min(255, Math.round(34.61 + t * (1172.33 - t * (10793.56 - t * (33300.12 - t * (38394.49 - t * 14825.05))))))) + ", " + Math.max(0, Math.min(255, Math.round(23.31 + t * (557.33 + t * (1225.33 - t * (3574.96 - t * (1073.77 + t * 707.56))))))) + ", " + Math.max(0, Math.min(255, Math.round(27.2 + t * (3211.1 - t * (15327.97 - t * (27814 - t * (22569.18 - t * 6838.66))))))) + ")";
}

});

parcelRegister("fw13m", function(module, exports) {

$parcel$export(module.exports, "default", () => $b4baa9574d5db18b$export$2e2bcd8739ae039);
$parcel$export(module.exports, "magma", () => $b4baa9574d5db18b$export$c41e69203f572e8d);
$parcel$export(module.exports, "inferno", () => $b4baa9574d5db18b$export$ad0c8285c8ea6dbd);
$parcel$export(module.exports, "plasma", () => $b4baa9574d5db18b$export$6664860a633d9daf);

var $gG5dW = parcelRequire("gG5dW");
function $b4baa9574d5db18b$var$ramp(range) {
    var n = range.length;
    return function(t) {
        return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
    };
}
var $b4baa9574d5db18b$export$2e2bcd8739ae039 = $b4baa9574d5db18b$var$ramp((0, $gG5dW.default)("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
var $b4baa9574d5db18b$export$c41e69203f572e8d = $b4baa9574d5db18b$var$ramp((0, $gG5dW.default)("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
var $b4baa9574d5db18b$export$ad0c8285c8ea6dbd = $b4baa9574d5db18b$var$ramp((0, $gG5dW.default)("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
var $b4baa9574d5db18b$export$6664860a633d9daf = $b4baa9574d5db18b$var$ramp((0, $gG5dW.default)("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

});


parcelRegister("300K2", function(module, exports) {

$parcel$export(module.exports, "create", () => (parcelRequire("6wcp1")).default);
$parcel$export(module.exports, "creator", () => (parcelRequire("ZMzK7")).default);
$parcel$export(module.exports, "local", () => (parcelRequire("6aC0P")).default);
$parcel$export(module.exports, "matcher", () => (parcelRequire("2R3nw")).default);
$parcel$export(module.exports, "mouse", () => (parcelRequire("8mNB9")).default);
$parcel$export(module.exports, "namespace", () => (parcelRequire("gDfVI")).default);
$parcel$export(module.exports, "namespaces", () => (parcelRequire("4uvKo")).default);
$parcel$export(module.exports, "clientPoint", () => (parcelRequire("bWogN")).default);
$parcel$export(module.exports, "select", () => (parcelRequire("gcg15")).default);
$parcel$export(module.exports, "selectAll", () => (parcelRequire("3ADwE")).default);
$parcel$export(module.exports, "selection", () => (parcelRequire("1LA4c")).default);
$parcel$export(module.exports, "selector", () => (parcelRequire("d07D9")).default);
$parcel$export(module.exports, "selectorAll", () => (parcelRequire("7DUTo")).default);
$parcel$export(module.exports, "style", () => (parcelRequire("7VDk4")).styleValue);
$parcel$export(module.exports, "touch", () => (parcelRequire("g98YB")).default);
$parcel$export(module.exports, "touches", () => (parcelRequire("6hBUm")).default);
$parcel$export(module.exports, "window", () => (parcelRequire("kDuUi")).default);
$parcel$export(module.exports, "event", () => (parcelRequire("bVR25")).event);
$parcel$export(module.exports, "customEvent", () => (parcelRequire("bVR25")).customEvent);

var $6wcp1 = parcelRequire("6wcp1");

var $ZMzK7 = parcelRequire("ZMzK7");

var $6aC0P = parcelRequire("6aC0P");

var $2R3nw = parcelRequire("2R3nw");

var $8mNB9 = parcelRequire("8mNB9");

var $gDfVI = parcelRequire("gDfVI");

var $4uvKo = parcelRequire("4uvKo");

var $bWogN = parcelRequire("bWogN");

var $gcg15 = parcelRequire("gcg15");

var $3ADwE = parcelRequire("3ADwE");

var $1LA4c = parcelRequire("1LA4c");

var $d07D9 = parcelRequire("d07D9");

var $7DUTo = parcelRequire("7DUTo");

var $7VDk4 = parcelRequire("7VDk4");

var $g98YB = parcelRequire("g98YB");

var $6hBUm = parcelRequire("6hBUm");

var $kDuUi = parcelRequire("kDuUi");

var $bVR25 = parcelRequire("bVR25");

});
parcelRegister("6wcp1", function(module, exports) {

$parcel$export(module.exports, "default", () => $4bef5a2582596961$export$2e2bcd8739ae039);

var $ZMzK7 = parcelRequire("ZMzK7");

var $gcg15 = parcelRequire("gcg15");
function $4bef5a2582596961$export$2e2bcd8739ae039(name) {
    return (0, $gcg15.default)((0, $ZMzK7.default)(name).call(document.documentElement));
}

});

parcelRegister("6aC0P", function(module, exports) {

$parcel$export(module.exports, "default", () => $47e129b35c135a04$export$2e2bcd8739ae039);
var $47e129b35c135a04$var$nextId = 0;
function $47e129b35c135a04$export$2e2bcd8739ae039() {
    return new $47e129b35c135a04$var$Local;
}
function $47e129b35c135a04$var$Local() {
    this._ = "@" + (++$47e129b35c135a04$var$nextId).toString(36);
}
$47e129b35c135a04$var$Local.prototype = $47e129b35c135a04$export$2e2bcd8739ae039.prototype = {
    constructor: $47e129b35c135a04$var$Local,
    get: function(node) {
        var id = this._;
        while(!(id in node))if (!(node = node.parentNode)) return;
        return node[id];
    },
    set: function(node, value) {
        return node[this._] = value;
    },
    remove: function(node) {
        return this._ in node && delete node[this._];
    },
    toString: function() {
        return this._;
    }
};

});

parcelRegister("3ADwE", function(module, exports) {

$parcel$export(module.exports, "default", () => $29d364e069aa1887$export$2e2bcd8739ae039);

var $1LA4c = parcelRequire("1LA4c");
function $29d364e069aa1887$export$2e2bcd8739ae039(selector) {
    return typeof selector === "string" ? new (0, $1LA4c.Selection)([
        document.querySelectorAll(selector)
    ], [
        document.documentElement
    ]) : new (0, $1LA4c.Selection)([
        selector == null ? [] : selector
    ], (0, $1LA4c.root));
}

});

parcelRegister("6hBUm", function(module, exports) {

$parcel$export(module.exports, "default", () => $4931bc55949b9f22$export$2e2bcd8739ae039);

var $711YS = parcelRequire("711YS");

var $bWogN = parcelRequire("bWogN");
function $4931bc55949b9f22$export$2e2bcd8739ae039(node, touches) {
    if (touches == null) touches = (0, $711YS.default)().touches;
    for(var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i)points[i] = (0, $bWogN.default)(node, touches[i]);
    return points;
}

});


parcelRegister("lJGxA", function(module, exports) {

$parcel$export(module.exports, "arc", () => (parcelRequire("765w9")).default);
$parcel$export(module.exports, "area", () => (parcelRequire("1OpYF")).default);
$parcel$export(module.exports, "line", () => (parcelRequire("fEnSh")).default);
$parcel$export(module.exports, "pie", () => (parcelRequire("iQWsW")).default);
$parcel$export(module.exports, "areaRadial", () => (parcelRequire("4BeGq")).default);
$parcel$export(module.exports, "radialArea", () => (parcelRequire("4BeGq")).default);
$parcel$export(module.exports, "lineRadial", () => (parcelRequire("9Lxss")).default);
$parcel$export(module.exports, "radialLine", () => (parcelRequire("9Lxss")).default);
$parcel$export(module.exports, "pointRadial", () => (parcelRequire("3mExH")).default);
$parcel$export(module.exports, "linkHorizontal", () => (parcelRequire("gGe2s")).linkHorizontal);
$parcel$export(module.exports, "linkVertical", () => (parcelRequire("gGe2s")).linkVertical);
$parcel$export(module.exports, "linkRadial", () => (parcelRequire("gGe2s")).linkRadial);
$parcel$export(module.exports, "symbol", () => (parcelRequire("eHGNa")).default);
$parcel$export(module.exports, "symbols", () => (parcelRequire("eHGNa")).symbols);
$parcel$export(module.exports, "symbolCircle", () => (parcelRequire("26QJd")).default);
$parcel$export(module.exports, "symbolCross", () => (parcelRequire("hSBVw")).default);
$parcel$export(module.exports, "symbolDiamond", () => (parcelRequire("gamgh")).default);
$parcel$export(module.exports, "symbolSquare", () => (parcelRequire("avGSm")).default);
$parcel$export(module.exports, "symbolStar", () => (parcelRequire("cYfto")).default);
$parcel$export(module.exports, "symbolTriangle", () => (parcelRequire("4C5kN")).default);
$parcel$export(module.exports, "symbolWye", () => (parcelRequire("jZxw4")).default);
$parcel$export(module.exports, "curveBasisClosed", () => (parcelRequire("a7PuO")).default);
$parcel$export(module.exports, "curveBasisOpen", () => (parcelRequire("h6veq")).default);
$parcel$export(module.exports, "curveBasis", () => (parcelRequire("2ibnw")).default);
$parcel$export(module.exports, "curveBundle", () => (parcelRequire("kacIM")).default);
$parcel$export(module.exports, "curveCardinalClosed", () => (parcelRequire("3e3gn")).default);
$parcel$export(module.exports, "curveCardinalOpen", () => (parcelRequire("JNLfa")).default);
$parcel$export(module.exports, "curveCardinal", () => (parcelRequire("60OhX")).default);
$parcel$export(module.exports, "curveCatmullRomClosed", () => (parcelRequire("d4MeO")).default);
$parcel$export(module.exports, "curveCatmullRomOpen", () => (parcelRequire("fTc0E")).default);
$parcel$export(module.exports, "curveCatmullRom", () => (parcelRequire("62zOn")).default);
$parcel$export(module.exports, "curveLinearClosed", () => (parcelRequire("8Cy3m")).default);
$parcel$export(module.exports, "curveLinear", () => (parcelRequire("aXZqK")).default);
$parcel$export(module.exports, "curveMonotoneX", () => (parcelRequire("5M6zT")).monotoneX);
$parcel$export(module.exports, "curveMonotoneY", () => (parcelRequire("5M6zT")).monotoneY);
$parcel$export(module.exports, "curveNatural", () => (parcelRequire("bIO2h")).default);
$parcel$export(module.exports, "curveStep", () => (parcelRequire("9Fi5w")).default);
$parcel$export(module.exports, "curveStepAfter", () => (parcelRequire("9Fi5w")).stepAfter);
$parcel$export(module.exports, "curveStepBefore", () => (parcelRequire("9Fi5w")).stepBefore);
$parcel$export(module.exports, "stack", () => (parcelRequire("4qBr5")).default);
$parcel$export(module.exports, "stackOffsetExpand", () => (parcelRequire("9uY6H")).default);
$parcel$export(module.exports, "stackOffsetDiverging", () => (parcelRequire("dOkzk")).default);
$parcel$export(module.exports, "stackOffsetNone", () => (parcelRequire("3ap32")).default);
$parcel$export(module.exports, "stackOffsetSilhouette", () => (parcelRequire("ijenI")).default);
$parcel$export(module.exports, "stackOffsetWiggle", () => (parcelRequire("hcwbs")).default);
$parcel$export(module.exports, "stackOrderAppearance", () => (parcelRequire("3E5bb")).default);
$parcel$export(module.exports, "stackOrderAscending", () => (parcelRequire("kUUj6")).default);
$parcel$export(module.exports, "stackOrderDescending", () => (parcelRequire("hwTnn")).default);
$parcel$export(module.exports, "stackOrderInsideOut", () => (parcelRequire("3PZGg")).default);
$parcel$export(module.exports, "stackOrderNone", () => (parcelRequire("1xL1H")).default);
$parcel$export(module.exports, "stackOrderReverse", () => (parcelRequire("3YBix")).default);

var $765w9 = parcelRequire("765w9");

var $1OpYF = parcelRequire("1OpYF");

var $fEnSh = parcelRequire("fEnSh");

var $iQWsW = parcelRequire("iQWsW");

var $4BeGq = parcelRequire("4BeGq");

var $9Lxss = parcelRequire("9Lxss");

var $3mExH = parcelRequire("3mExH");

var $gGe2s = parcelRequire("gGe2s");

var $eHGNa = parcelRequire("eHGNa");

var $26QJd = parcelRequire("26QJd");

var $hSBVw = parcelRequire("hSBVw");

var $gamgh = parcelRequire("gamgh");

var $avGSm = parcelRequire("avGSm");

var $cYfto = parcelRequire("cYfto");

var $4C5kN = parcelRequire("4C5kN");

var $jZxw4 = parcelRequire("jZxw4");

var $a7PuO = parcelRequire("a7PuO");

var $h6veq = parcelRequire("h6veq");

var $2ibnw = parcelRequire("2ibnw");

var $kacIM = parcelRequire("kacIM");

var $3e3gn = parcelRequire("3e3gn");

var $JNLfa = parcelRequire("JNLfa");

var $60OhX = parcelRequire("60OhX");

var $d4MeO = parcelRequire("d4MeO");

var $fTc0E = parcelRequire("fTc0E");

var $62zOn = parcelRequire("62zOn");

var $8Cy3m = parcelRequire("8Cy3m");

var $aXZqK = parcelRequire("aXZqK");

var $5M6zT = parcelRequire("5M6zT");

var $bIO2h = parcelRequire("bIO2h");

var $9Fi5w = parcelRequire("9Fi5w");

var $4qBr5 = parcelRequire("4qBr5");

var $9uY6H = parcelRequire("9uY6H");

var $dOkzk = parcelRequire("dOkzk");

var $3ap32 = parcelRequire("3ap32");

var $ijenI = parcelRequire("ijenI");

var $hcwbs = parcelRequire("hcwbs");

var $3E5bb = parcelRequire("3E5bb");

var $kUUj6 = parcelRequire("kUUj6");

var $hwTnn = parcelRequire("hwTnn");

var $3PZGg = parcelRequire("3PZGg");

var $1xL1H = parcelRequire("1xL1H");

var $3YBix = parcelRequire("3YBix");

});
parcelRegister("765w9", function(module, exports) {

$parcel$export(module.exports, "default", () => $52ad5f9df465b234$export$2e2bcd8739ae039);

var $ftDUk = parcelRequire("ftDUk");

var $cYNhB = parcelRequire("cYNhB");

var $lqVFV = parcelRequire("lqVFV");
function $52ad5f9df465b234$var$arcInnerRadius(d) {
    return d.innerRadius;
}
function $52ad5f9df465b234$var$arcOuterRadius(d) {
    return d.outerRadius;
}
function $52ad5f9df465b234$var$arcStartAngle(d) {
    return d.startAngle;
}
function $52ad5f9df465b234$var$arcEndAngle(d) {
    return d.endAngle;
}
function $52ad5f9df465b234$var$arcPadAngle(d) {
    return d && d.padAngle; // Note: optional!
}
function $52ad5f9df465b234$var$intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
    var x10 = x1 - x0, y10 = y1 - y0, x32 = x3 - x2, y32 = y3 - y2, t = y32 * x10 - x32 * y10;
    if (t * t < (0, $lqVFV.epsilon)) return;
    t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
    return [
        x0 + t * x10,
        y0 + t * y10
    ];
}
// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function $52ad5f9df465b234$var$cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
    var x01 = x0 - x1, y01 = y0 - y1, lo = (cw ? rc : -rc) / (0, $lqVFV.sqrt)(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x11 = x0 + ox, y11 = y0 + oy, x10 = x1 + ox, y10 = y1 + oy, x00 = (x11 + x10) / 2, y00 = (y11 + y10) / 2, dx = x10 - x11, dy = y10 - y11, d2 = dx * dx + dy * dy, r = r1 - rc, D = x11 * y10 - x10 * y11, d = (dy < 0 ? -1 : 1) * (0, $lqVFV.sqrt)((0, $lqVFV.max)(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x00, dy0 = cy0 - y00, dx1 = cx1 - x00, dy1 = cy1 - y00;
    // Pick the closer of the two intersection points.
    // TODO Is there a faster way to determine which intersection to use?
    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
    return {
        cx: cx0,
        cy: cy0,
        x01: -ox,
        y01: -oy,
        x11: cx0 * (r1 / r - 1),
        y11: cy0 * (r1 / r - 1)
    };
}
function $52ad5f9df465b234$export$2e2bcd8739ae039() {
    var innerRadius = $52ad5f9df465b234$var$arcInnerRadius, outerRadius = $52ad5f9df465b234$var$arcOuterRadius, cornerRadius = (0, $cYNhB.default)(0), padRadius = null, startAngle = $52ad5f9df465b234$var$arcStartAngle, endAngle = $52ad5f9df465b234$var$arcEndAngle, padAngle = $52ad5f9df465b234$var$arcPadAngle, context = null;
    function arc() {
        var buffer, r, r0 = +innerRadius.apply(this, arguments), r1 = +outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) - (0, $lqVFV.halfPi), a1 = endAngle.apply(this, arguments) - (0, $lqVFV.halfPi), da = (0, $lqVFV.abs)(a1 - a0), cw = a1 > a0;
        if (!context) context = buffer = (0, $ftDUk.default)();
        // Ensure that the outer radius is always larger than the inner radius.
        if (r1 < r0) r = r1, r1 = r0, r0 = r;
        // Is it a point?
        if (!(r1 > (0, $lqVFV.epsilon))) context.moveTo(0, 0);
        else if (da > (0, $lqVFV.tau) - (0, $lqVFV.epsilon)) {
            context.moveTo(r1 * (0, $lqVFV.cos)(a0), r1 * (0, $lqVFV.sin)(a0));
            context.arc(0, 0, r1, a0, a1, !cw);
            if (r0 > (0, $lqVFV.epsilon)) {
                context.moveTo(r0 * (0, $lqVFV.cos)(a1), r0 * (0, $lqVFV.sin)(a1));
                context.arc(0, 0, r0, a1, a0, cw);
            }
        } else {
            var a01 = a0, a11 = a1, a00 = a0, a10 = a1, da0 = da, da1 = da, ap = padAngle.apply(this, arguments) / 2, rp = ap > (0, $lqVFV.epsilon) && (padRadius ? +padRadius.apply(this, arguments) : (0, $lqVFV.sqrt)(r0 * r0 + r1 * r1)), rc = (0, $lqVFV.min)((0, $lqVFV.abs)(r1 - r0) / 2, +cornerRadius.apply(this, arguments)), rc0 = rc, rc1 = rc, t0, t1;
            // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
            if (rp > (0, $lqVFV.epsilon)) {
                var p0 = (0, $lqVFV.asin)(rp / r0 * (0, $lqVFV.sin)(ap)), p1 = (0, $lqVFV.asin)(rp / r1 * (0, $lqVFV.sin)(ap));
                if ((da0 -= p0 * 2) > (0, $lqVFV.epsilon)) p0 *= cw ? 1 : -1, a00 += p0, a10 -= p0;
                else da0 = 0, a00 = a10 = (a0 + a1) / 2;
                if ((da1 -= p1 * 2) > (0, $lqVFV.epsilon)) p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;
                else da1 = 0, a01 = a11 = (a0 + a1) / 2;
            }
            var x01 = r1 * (0, $lqVFV.cos)(a01), y01 = r1 * (0, $lqVFV.sin)(a01), x10 = r0 * (0, $lqVFV.cos)(a10), y10 = r0 * (0, $lqVFV.sin)(a10);
            // Apply rounded corners?
            if (rc > (0, $lqVFV.epsilon)) {
                var x11 = r1 * (0, $lqVFV.cos)(a11), y11 = r1 * (0, $lqVFV.sin)(a11), x00 = r0 * (0, $lqVFV.cos)(a00), y00 = r0 * (0, $lqVFV.sin)(a00), oc;
                // Restrict the corner radius according to the sector angle.
                if (da < (0, $lqVFV.pi) && (oc = $52ad5f9df465b234$var$intersect(x01, y01, x00, y00, x11, y11, x10, y10))) {
                    var ax = x01 - oc[0], ay = y01 - oc[1], bx = x11 - oc[0], by = y11 - oc[1], kc = 1 / (0, $lqVFV.sin)((0, $lqVFV.acos)((ax * bx + ay * by) / ((0, $lqVFV.sqrt)(ax * ax + ay * ay) * (0, $lqVFV.sqrt)(bx * bx + by * by))) / 2), lc = (0, $lqVFV.sqrt)(oc[0] * oc[0] + oc[1] * oc[1]);
                    rc0 = (0, $lqVFV.min)(rc, (r0 - lc) / (kc - 1));
                    rc1 = (0, $lqVFV.min)(rc, (r1 - lc) / (kc + 1));
                }
            }
            // Is the sector collapsed to a line?
            if (!(da1 > (0, $lqVFV.epsilon))) context.moveTo(x01, y01);
            else if (rc1 > (0, $lqVFV.epsilon)) {
                t0 = $52ad5f9df465b234$var$cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
                t1 = $52ad5f9df465b234$var$cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
                context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);
                // Have the corners merged?
                if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, (0, $lqVFV.atan2)(t0.y01, t0.x01), (0, $lqVFV.atan2)(t1.y01, t1.x01), !cw);
                else {
                    context.arc(t0.cx, t0.cy, rc1, (0, $lqVFV.atan2)(t0.y01, t0.x01), (0, $lqVFV.atan2)(t0.y11, t0.x11), !cw);
                    context.arc(0, 0, r1, (0, $lqVFV.atan2)(t0.cy + t0.y11, t0.cx + t0.x11), (0, $lqVFV.atan2)(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
                    context.arc(t1.cx, t1.cy, rc1, (0, $lqVFV.atan2)(t1.y11, t1.x11), (0, $lqVFV.atan2)(t1.y01, t1.x01), !cw);
                }
            } else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
            // Is there no inner ring, and it’s a circular sector?
            // Or perhaps it’s an annular sector collapsed due to padding?
            if (!(r0 > (0, $lqVFV.epsilon)) || !(da0 > (0, $lqVFV.epsilon))) context.lineTo(x10, y10);
            else if (rc0 > (0, $lqVFV.epsilon)) {
                t0 = $52ad5f9df465b234$var$cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
                t1 = $52ad5f9df465b234$var$cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
                context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);
                // Have the corners merged?
                if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, (0, $lqVFV.atan2)(t0.y01, t0.x01), (0, $lqVFV.atan2)(t1.y01, t1.x01), !cw);
                else {
                    context.arc(t0.cx, t0.cy, rc0, (0, $lqVFV.atan2)(t0.y01, t0.x01), (0, $lqVFV.atan2)(t0.y11, t0.x11), !cw);
                    context.arc(0, 0, r0, (0, $lqVFV.atan2)(t0.cy + t0.y11, t0.cx + t0.x11), (0, $lqVFV.atan2)(t1.cy + t1.y11, t1.cx + t1.x11), cw);
                    context.arc(t1.cx, t1.cy, rc0, (0, $lqVFV.atan2)(t1.y11, t1.x11), (0, $lqVFV.atan2)(t1.y01, t1.x01), !cw);
                }
            } else context.arc(0, 0, r0, a10, a00, cw);
        }
        context.closePath();
        if (buffer) return context = null, buffer + "" || null;
    }
    arc.centroid = function() {
        var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - (0, $lqVFV.pi) / 2;
        return [
            (0, $lqVFV.cos)(a) * r,
            (0, $lqVFV.sin)(a) * r
        ];
    };
    arc.innerRadius = function(_) {
        return arguments.length ? (innerRadius = typeof _ === "function" ? _ : (0, $cYNhB.default)(+_), arc) : innerRadius;
    };
    arc.outerRadius = function(_) {
        return arguments.length ? (outerRadius = typeof _ === "function" ? _ : (0, $cYNhB.default)(+_), arc) : outerRadius;
    };
    arc.cornerRadius = function(_) {
        return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : (0, $cYNhB.default)(+_), arc) : cornerRadius;
    };
    arc.padRadius = function(_) {
        return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : (0, $cYNhB.default)(+_), arc) : padRadius;
    };
    arc.startAngle = function(_) {
        return arguments.length ? (startAngle = typeof _ === "function" ? _ : (0, $cYNhB.default)(+_), arc) : startAngle;
    };
    arc.endAngle = function(_) {
        return arguments.length ? (endAngle = typeof _ === "function" ? _ : (0, $cYNhB.default)(+_), arc) : endAngle;
    };
    arc.padAngle = function(_) {
        return arguments.length ? (padAngle = typeof _ === "function" ? _ : (0, $cYNhB.default)(+_), arc) : padAngle;
    };
    arc.context = function(_) {
        return arguments.length ? (context = _ == null ? null : _, arc) : context;
    };
    return arc;
}

});
parcelRegister("cYNhB", function(module, exports) {

$parcel$export(module.exports, "default", () => $9731512e92d50070$export$2e2bcd8739ae039);
function $9731512e92d50070$export$2e2bcd8739ae039(x) {
    return function constant() {
        return x;
    };
}

});

parcelRegister("lqVFV", function(module, exports) {

$parcel$export(module.exports, "abs", () => $f9a8c3c2c4d0d6ba$export$2335f513bbd82c6d);
$parcel$export(module.exports, "atan2", () => $f9a8c3c2c4d0d6ba$export$b8b770ee6a0d9760);
$parcel$export(module.exports, "cos", () => $f9a8c3c2c4d0d6ba$export$50d414a77b60d802);
$parcel$export(module.exports, "max", () => $f9a8c3c2c4d0d6ba$export$8960430cfd85939f);
$parcel$export(module.exports, "min", () => $f9a8c3c2c4d0d6ba$export$96ec731ed4dcb222);
$parcel$export(module.exports, "sin", () => $f9a8c3c2c4d0d6ba$export$5de3937cb4b592ed);
$parcel$export(module.exports, "sqrt", () => $f9a8c3c2c4d0d6ba$export$eba8049fb5020b81);
$parcel$export(module.exports, "epsilon", () => $f9a8c3c2c4d0d6ba$export$6c421550c66a327d);
$parcel$export(module.exports, "pi", () => $f9a8c3c2c4d0d6ba$export$18c7bea995a110f);
$parcel$export(module.exports, "halfPi", () => $f9a8c3c2c4d0d6ba$export$e51408a300e8929a);
$parcel$export(module.exports, "tau", () => $f9a8c3c2c4d0d6ba$export$a4b4b4d4d776fe92);
$parcel$export(module.exports, "acos", () => $f9a8c3c2c4d0d6ba$export$fd6306be3fde5b04);
$parcel$export(module.exports, "asin", () => $f9a8c3c2c4d0d6ba$export$41726bdb1fc63f);
var $f9a8c3c2c4d0d6ba$export$2335f513bbd82c6d = Math.abs;
var $f9a8c3c2c4d0d6ba$export$b8b770ee6a0d9760 = Math.atan2;
var $f9a8c3c2c4d0d6ba$export$50d414a77b60d802 = Math.cos;
var $f9a8c3c2c4d0d6ba$export$8960430cfd85939f = Math.max;
var $f9a8c3c2c4d0d6ba$export$96ec731ed4dcb222 = Math.min;
var $f9a8c3c2c4d0d6ba$export$5de3937cb4b592ed = Math.sin;
var $f9a8c3c2c4d0d6ba$export$eba8049fb5020b81 = Math.sqrt;
var $f9a8c3c2c4d0d6ba$export$6c421550c66a327d = 1e-12;
var $f9a8c3c2c4d0d6ba$export$18c7bea995a110f = Math.PI;
var $f9a8c3c2c4d0d6ba$export$e51408a300e8929a = $f9a8c3c2c4d0d6ba$export$18c7bea995a110f / 2;
var $f9a8c3c2c4d0d6ba$export$a4b4b4d4d776fe92 = 2 * $f9a8c3c2c4d0d6ba$export$18c7bea995a110f;
function $f9a8c3c2c4d0d6ba$export$fd6306be3fde5b04(x) {
    return x > 1 ? 0 : x < -1 ? $f9a8c3c2c4d0d6ba$export$18c7bea995a110f : Math.acos(x);
}
function $f9a8c3c2c4d0d6ba$export$41726bdb1fc63f(x) {
    return x >= 1 ? $f9a8c3c2c4d0d6ba$export$e51408a300e8929a : x <= -1 ? -$f9a8c3c2c4d0d6ba$export$e51408a300e8929a : Math.asin(x);
}

});


parcelRegister("1OpYF", function(module, exports) {

$parcel$export(module.exports, "default", () => $151e9c8a8188cdb3$export$2e2bcd8739ae039);

var $ftDUk = parcelRequire("ftDUk");

var $cYNhB = parcelRequire("cYNhB");

var $aXZqK = parcelRequire("aXZqK");

var $fEnSh = parcelRequire("fEnSh");

var $kLK0b = parcelRequire("kLK0b");
function $151e9c8a8188cdb3$export$2e2bcd8739ae039() {
    var x0 = (0, $kLK0b.x), x1 = null, y0 = (0, $cYNhB.default)(0), y1 = (0, $kLK0b.y), defined = (0, $cYNhB.default)(true), context = null, curve = (0, $aXZqK.default), output = null;
    function area(data) {
        var i, j, k, n = data.length, d, defined0 = false, buffer, x0z = new Array(n), y0z = new Array(n);
        if (context == null) output = curve(buffer = (0, $ftDUk.default)());
        for(i = 0; i <= n; ++i){
            if (!(i < n && defined(d = data[i], i, data)) === defined0) {
                if (defined0 = !defined0) {
                    j = i;
                    output.areaStart();
                    output.lineStart();
                } else {
                    output.lineEnd();
                    output.lineStart();
                    for(k = i - 1; k >= j; --k)output.point(x0z[k], y0z[k]);
                    output.lineEnd();
                    output.areaEnd();
                }
            }
            if (defined0) {
                x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
                output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
            }
        }
        if (buffer) return output = null, buffer + "" || null;
    }
    function arealine() {
        return (0, $fEnSh.default)().defined(defined).curve(curve).context(context);
    }
    area.x = function(_) {
        return arguments.length ? (x0 = typeof _ === "function" ? _ : (0, $cYNhB.default)(+_), x1 = null, area) : x0;
    };
    area.x0 = function(_) {
        return arguments.length ? (x0 = typeof _ === "function" ? _ : (0, $cYNhB.default)(+_), area) : x0;
    };
    area.x1 = function(_) {
        return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : (0, $cYNhB.default)(+_), area) : x1;
    };
    area.y = function(_) {
        return arguments.length ? (y0 = typeof _ === "function" ? _ : (0, $cYNhB.default)(+_), y1 = null, area) : y0;
    };
    area.y0 = function(_) {
        return arguments.length ? (y0 = typeof _ === "function" ? _ : (0, $cYNhB.default)(+_), area) : y0;
    };
    area.y1 = function(_) {
        return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : (0, $cYNhB.default)(+_), area) : y1;
    };
    area.lineX0 = area.lineY0 = function() {
        return arealine().x(x0).y(y0);
    };
    area.lineY1 = function() {
        return arealine().x(x0).y(y1);
    };
    area.lineX1 = function() {
        return arealine().x(x1).y(y0);
    };
    area.defined = function(_) {
        return arguments.length ? (defined = typeof _ === "function" ? _ : (0, $cYNhB.default)(!!_), area) : defined;
    };
    area.curve = function(_) {
        return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
    };
    area.context = function(_) {
        return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
    };
    return area;
}

});
parcelRegister("aXZqK", function(module, exports) {

$parcel$export(module.exports, "default", () => $7fbf10e437a27a39$export$2e2bcd8739ae039);
function $7fbf10e437a27a39$var$Linear(context) {
    this._context = context;
}
$7fbf10e437a27a39$var$Linear.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._point = 0;
    },
    lineEnd: function() {
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2; // proceed
            default:
                this._context.lineTo(x, y);
                break;
        }
    }
};
function $7fbf10e437a27a39$export$2e2bcd8739ae039(context) {
    return new $7fbf10e437a27a39$var$Linear(context);
}

});

parcelRegister("fEnSh", function(module, exports) {

$parcel$export(module.exports, "default", () => $b64d1c68130c8eb3$export$2e2bcd8739ae039);

var $ftDUk = parcelRequire("ftDUk");

var $cYNhB = parcelRequire("cYNhB");

var $aXZqK = parcelRequire("aXZqK");

var $kLK0b = parcelRequire("kLK0b");
function $b64d1c68130c8eb3$export$2e2bcd8739ae039() {
    var x = (0, $kLK0b.x), y = (0, $kLK0b.y), defined = (0, $cYNhB.default)(true), context = null, curve = (0, $aXZqK.default), output = null;
    function line(data) {
        var i, n = data.length, d, defined0 = false, buffer;
        if (context == null) output = curve(buffer = (0, $ftDUk.default)());
        for(i = 0; i <= n; ++i){
            if (!(i < n && defined(d = data[i], i, data)) === defined0) {
                if (defined0 = !defined0) output.lineStart();
                else output.lineEnd();
            }
            if (defined0) output.point(+x(d, i, data), +y(d, i, data));
        }
        if (buffer) return output = null, buffer + "" || null;
    }
    line.x = function(_) {
        return arguments.length ? (x = typeof _ === "function" ? _ : (0, $cYNhB.default)(+_), line) : x;
    };
    line.y = function(_) {
        return arguments.length ? (y = typeof _ === "function" ? _ : (0, $cYNhB.default)(+_), line) : y;
    };
    line.defined = function(_) {
        return arguments.length ? (defined = typeof _ === "function" ? _ : (0, $cYNhB.default)(!!_), line) : defined;
    };
    line.curve = function(_) {
        return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
    };
    line.context = function(_) {
        return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
    };
    return line;
}

});
parcelRegister("kLK0b", function(module, exports) {

$parcel$export(module.exports, "x", () => $f1ebe174479db8b0$export$d141bba7fdc215a3);
$parcel$export(module.exports, "y", () => $f1ebe174479db8b0$export$4a5767248b18ef41);
function $f1ebe174479db8b0$export$d141bba7fdc215a3(p) {
    return p[0];
}
function $f1ebe174479db8b0$export$4a5767248b18ef41(p) {
    return p[1];
}

});



parcelRegister("iQWsW", function(module, exports) {

$parcel$export(module.exports, "default", () => $db9a6f697b9886ae$export$2e2bcd8739ae039);

var $cYNhB = parcelRequire("cYNhB");

var $kLk0t = parcelRequire("kLk0t");

var $5lUEK = parcelRequire("5lUEK");

var $lqVFV = parcelRequire("lqVFV");
function $db9a6f697b9886ae$export$2e2bcd8739ae039() {
    var value = (0, $5lUEK.default), sortValues = (0, $kLk0t.default), sort = null, startAngle = (0, $cYNhB.default)(0), endAngle = (0, $cYNhB.default)((0, $lqVFV.tau)), padAngle = (0, $cYNhB.default)(0);
    function pie(data) {
        var i, n = data.length, j, k, sum = 0, index = new Array(n), arcs = new Array(n), a0 = +startAngle.apply(this, arguments), da = Math.min((0, $lqVFV.tau), Math.max(-(0, $lqVFV.tau), endAngle.apply(this, arguments) - a0)), a1, p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)), pa = p * (da < 0 ? -1 : 1), v;
        for(i = 0; i < n; ++i)if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) sum += v;
        // Optionally sort the arcs by previously-computed values or by data.
        if (sortValues != null) index.sort(function(i, j) {
            return sortValues(arcs[i], arcs[j]);
        });
        else if (sort != null) index.sort(function(i, j) {
            return sort(data[i], data[j]);
        });
        // Compute the arcs! They are stored in the original data's order.
        for(i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1)j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
            data: data[j],
            index: i,
            value: v,
            startAngle: a0,
            endAngle: a1,
            padAngle: p
        };
        return arcs;
    }
    pie.value = function(_) {
        return arguments.length ? (value = typeof _ === "function" ? _ : (0, $cYNhB.default)(+_), pie) : value;
    };
    pie.sortValues = function(_) {
        return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
    };
    pie.sort = function(_) {
        return arguments.length ? (sort = _, sortValues = null, pie) : sort;
    };
    pie.startAngle = function(_) {
        return arguments.length ? (startAngle = typeof _ === "function" ? _ : (0, $cYNhB.default)(+_), pie) : startAngle;
    };
    pie.endAngle = function(_) {
        return arguments.length ? (endAngle = typeof _ === "function" ? _ : (0, $cYNhB.default)(+_), pie) : endAngle;
    };
    pie.padAngle = function(_) {
        return arguments.length ? (padAngle = typeof _ === "function" ? _ : (0, $cYNhB.default)(+_), pie) : padAngle;
    };
    return pie;
}

});
parcelRegister("kLk0t", function(module, exports) {

$parcel$export(module.exports, "default", () => $f1d7b75a6c90da4c$export$2e2bcd8739ae039);
function $f1d7b75a6c90da4c$export$2e2bcd8739ae039(a, b) {
    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}

});

parcelRegister("5lUEK", function(module, exports) {

$parcel$export(module.exports, "default", () => $3e5adcaa5c076047$export$2e2bcd8739ae039);
function $3e5adcaa5c076047$export$2e2bcd8739ae039(d) {
    return d;
}

});


parcelRegister("4BeGq", function(module, exports) {

$parcel$export(module.exports, "default", () => $359601ef1ab8ba87$export$2e2bcd8739ae039);

var $90KbA = parcelRequire("90KbA");

var $1OpYF = parcelRequire("1OpYF");

var $9Lxss = parcelRequire("9Lxss");
function $359601ef1ab8ba87$export$2e2bcd8739ae039() {
    var a = (0, $1OpYF.default)().curve((0, $90KbA.curveRadialLinear)), c = a.curve, x0 = a.lineX0, x1 = a.lineX1, y0 = a.lineY0, y1 = a.lineY1;
    a.angle = a.x, delete a.x;
    a.startAngle = a.x0, delete a.x0;
    a.endAngle = a.x1, delete a.x1;
    a.radius = a.y, delete a.y;
    a.innerRadius = a.y0, delete a.y0;
    a.outerRadius = a.y1, delete a.y1;
    a.lineStartAngle = function() {
        return (0, $9Lxss.lineRadial)(x0());
    }, delete a.lineX0;
    a.lineEndAngle = function() {
        return (0, $9Lxss.lineRadial)(x1());
    }, delete a.lineX1;
    a.lineInnerRadius = function() {
        return (0, $9Lxss.lineRadial)(y0());
    }, delete a.lineY0;
    a.lineOuterRadius = function() {
        return (0, $9Lxss.lineRadial)(y1());
    }, delete a.lineY1;
    a.curve = function(_) {
        return arguments.length ? c((0, $90KbA.default)(_)) : c()._curve;
    };
    return a;
}

});
parcelRegister("90KbA", function(module, exports) {

$parcel$export(module.exports, "curveRadialLinear", () => $68f7f0b45ca55acc$export$22d25ffb9fb15b6f);
$parcel$export(module.exports, "default", () => $68f7f0b45ca55acc$export$2e2bcd8739ae039);

var $aXZqK = parcelRequire("aXZqK");
var $68f7f0b45ca55acc$export$22d25ffb9fb15b6f = $68f7f0b45ca55acc$export$2e2bcd8739ae039((0, $aXZqK.default));
function $68f7f0b45ca55acc$var$Radial(curve) {
    this._curve = curve;
}
$68f7f0b45ca55acc$var$Radial.prototype = {
    areaStart: function() {
        this._curve.areaStart();
    },
    areaEnd: function() {
        this._curve.areaEnd();
    },
    lineStart: function() {
        this._curve.lineStart();
    },
    lineEnd: function() {
        this._curve.lineEnd();
    },
    point: function(a, r) {
        this._curve.point(r * Math.sin(a), r * -Math.cos(a));
    }
};
function $68f7f0b45ca55acc$export$2e2bcd8739ae039(curve) {
    function radial(context) {
        return new $68f7f0b45ca55acc$var$Radial(curve(context));
    }
    radial._curve = curve;
    return radial;
}

});

parcelRegister("9Lxss", function(module, exports) {

$parcel$export(module.exports, "lineRadial", () => $71c274e763947692$export$4d8815a75dc8cd4d);
$parcel$export(module.exports, "default", () => $71c274e763947692$export$2e2bcd8739ae039);

var $90KbA = parcelRequire("90KbA");

var $fEnSh = parcelRequire("fEnSh");
function $71c274e763947692$export$4d8815a75dc8cd4d(l) {
    var c = l.curve;
    l.angle = l.x, delete l.x;
    l.radius = l.y, delete l.y;
    l.curve = function(_) {
        return arguments.length ? c((0, $90KbA.default)(_)) : c()._curve;
    };
    return l;
}
function $71c274e763947692$export$2e2bcd8739ae039() {
    return $71c274e763947692$export$4d8815a75dc8cd4d((0, $fEnSh.default)().curve((0, $90KbA.curveRadialLinear)));
}

});


parcelRegister("3mExH", function(module, exports) {

$parcel$export(module.exports, "default", () => $2732e01739d89c7f$export$2e2bcd8739ae039);
function $2732e01739d89c7f$export$2e2bcd8739ae039(x, y) {
    return [
        (y = +y) * Math.cos(x -= Math.PI / 2),
        y * Math.sin(x)
    ];
}

});

parcelRegister("gGe2s", function(module, exports) {

$parcel$export(module.exports, "linkHorizontal", () => $c24b755d66096d19$export$e7c381889b2cd14d);
$parcel$export(module.exports, "linkVertical", () => $c24b755d66096d19$export$75de4c8c66884e04);
$parcel$export(module.exports, "linkRadial", () => $c24b755d66096d19$export$7739cfe68d4e0799);

var $ftDUk = parcelRequire("ftDUk");

var $6Uwj4 = parcelRequire("6Uwj4");

var $cYNhB = parcelRequire("cYNhB");

var $kLK0b = parcelRequire("kLK0b");

var $3mExH = parcelRequire("3mExH");
function $c24b755d66096d19$var$linkSource(d) {
    return d.source;
}
function $c24b755d66096d19$var$linkTarget(d) {
    return d.target;
}
function $c24b755d66096d19$var$link(curve) {
    var source = $c24b755d66096d19$var$linkSource, target = $c24b755d66096d19$var$linkTarget, x = (0, $kLK0b.x), y = (0, $kLK0b.y), context = null;
    function link() {
        var buffer, argv = (0, $6Uwj4.slice).call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
        if (!context) context = buffer = (0, $ftDUk.default)();
        curve(context, +x.apply(this, (argv[0] = s, argv)), +y.apply(this, argv), +x.apply(this, (argv[0] = t, argv)), +y.apply(this, argv));
        if (buffer) return context = null, buffer + "" || null;
    }
    link.source = function(_) {
        return arguments.length ? (source = _, link) : source;
    };
    link.target = function(_) {
        return arguments.length ? (target = _, link) : target;
    };
    link.x = function(_) {
        return arguments.length ? (x = typeof _ === "function" ? _ : (0, $cYNhB.default)(+_), link) : x;
    };
    link.y = function(_) {
        return arguments.length ? (y = typeof _ === "function" ? _ : (0, $cYNhB.default)(+_), link) : y;
    };
    link.context = function(_) {
        return arguments.length ? (context = _ == null ? null : _, link) : context;
    };
    return link;
}
function $c24b755d66096d19$var$curveHorizontal(context, x0, y0, x1, y1) {
    context.moveTo(x0, y0);
    context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}
function $c24b755d66096d19$var$curveVertical(context, x0, y0, x1, y1) {
    context.moveTo(x0, y0);
    context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
}
function $c24b755d66096d19$var$curveRadial(context, x0, y0, x1, y1) {
    var p0 = (0, $3mExH.default)(x0, y0), p1 = (0, $3mExH.default)(x0, y0 = (y0 + y1) / 2), p2 = (0, $3mExH.default)(x1, y0), p3 = (0, $3mExH.default)(x1, y1);
    context.moveTo(p0[0], p0[1]);
    context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}
function $c24b755d66096d19$export$e7c381889b2cd14d() {
    return $c24b755d66096d19$var$link($c24b755d66096d19$var$curveHorizontal);
}
function $c24b755d66096d19$export$75de4c8c66884e04() {
    return $c24b755d66096d19$var$link($c24b755d66096d19$var$curveVertical);
}
function $c24b755d66096d19$export$7739cfe68d4e0799() {
    var l = $c24b755d66096d19$var$link($c24b755d66096d19$var$curveRadial);
    l.angle = l.x, delete l.x;
    l.radius = l.y, delete l.y;
    return l;
}

});
parcelRegister("6Uwj4", function(module, exports) {

$parcel$export(module.exports, "slice", () => $508108789d54845a$export$58adb3bec8346d0f);
var $508108789d54845a$export$58adb3bec8346d0f = Array.prototype.slice;

});


parcelRegister("eHGNa", function(module, exports) {

$parcel$export(module.exports, "symbols", () => $ab464670a8fc9d5e$export$47616e9f7f5fe113);
$parcel$export(module.exports, "default", () => $ab464670a8fc9d5e$export$2e2bcd8739ae039);

var $ftDUk = parcelRequire("ftDUk");

var $26QJd = parcelRequire("26QJd");

var $hSBVw = parcelRequire("hSBVw");

var $gamgh = parcelRequire("gamgh");

var $cYfto = parcelRequire("cYfto");

var $avGSm = parcelRequire("avGSm");

var $4C5kN = parcelRequire("4C5kN");

var $jZxw4 = parcelRequire("jZxw4");

var $cYNhB = parcelRequire("cYNhB");
var $ab464670a8fc9d5e$export$47616e9f7f5fe113 = [
    (0, $26QJd.default),
    (0, $hSBVw.default),
    (0, $gamgh.default),
    (0, $avGSm.default),
    (0, $cYfto.default),
    (0, $4C5kN.default),
    (0, $jZxw4.default)
];
function $ab464670a8fc9d5e$export$2e2bcd8739ae039() {
    var type = (0, $cYNhB.default)((0, $26QJd.default)), size = (0, $cYNhB.default)(64), context = null;
    function symbol() {
        var buffer;
        if (!context) context = buffer = (0, $ftDUk.default)();
        type.apply(this, arguments).draw(context, +size.apply(this, arguments));
        if (buffer) return context = null, buffer + "" || null;
    }
    symbol.type = function(_) {
        return arguments.length ? (type = typeof _ === "function" ? _ : (0, $cYNhB.default)(_), symbol) : type;
    };
    symbol.size = function(_) {
        return arguments.length ? (size = typeof _ === "function" ? _ : (0, $cYNhB.default)(+_), symbol) : size;
    };
    symbol.context = function(_) {
        return arguments.length ? (context = _ == null ? null : _, symbol) : context;
    };
    return symbol;
}

});
parcelRegister("26QJd", function(module, exports) {

$parcel$export(module.exports, "default", () => $18950b0b010061db$export$2e2bcd8739ae039);

var $lqVFV = parcelRequire("lqVFV");
var $18950b0b010061db$export$2e2bcd8739ae039 = {
    draw: function(context, size) {
        var r = Math.sqrt(size / (0, $lqVFV.pi));
        context.moveTo(r, 0);
        context.arc(0, 0, r, 0, (0, $lqVFV.tau));
    }
};

});

parcelRegister("hSBVw", function(module, exports) {

$parcel$export(module.exports, "default", () => $d044e648480ddabf$export$2e2bcd8739ae039);
var $d044e648480ddabf$export$2e2bcd8739ae039 = {
    draw: function(context, size) {
        var r = Math.sqrt(size / 5) / 2;
        context.moveTo(-3 * r, -r);
        context.lineTo(-r, -r);
        context.lineTo(-r, -3 * r);
        context.lineTo(r, -3 * r);
        context.lineTo(r, -r);
        context.lineTo(3 * r, -r);
        context.lineTo(3 * r, r);
        context.lineTo(r, r);
        context.lineTo(r, 3 * r);
        context.lineTo(-r, 3 * r);
        context.lineTo(-r, r);
        context.lineTo(-3 * r, r);
        context.closePath();
    }
};

});

parcelRegister("gamgh", function(module, exports) {

$parcel$export(module.exports, "default", () => $bc4ed938e558a925$export$2e2bcd8739ae039);
var $bc4ed938e558a925$var$tan30 = Math.sqrt(1 / 3), $bc4ed938e558a925$var$tan30_2 = $bc4ed938e558a925$var$tan30 * 2;
var $bc4ed938e558a925$export$2e2bcd8739ae039 = {
    draw: function(context, size) {
        var y = Math.sqrt(size / $bc4ed938e558a925$var$tan30_2), x = y * $bc4ed938e558a925$var$tan30;
        context.moveTo(0, -y);
        context.lineTo(x, 0);
        context.lineTo(0, y);
        context.lineTo(-x, 0);
        context.closePath();
    }
};

});

parcelRegister("cYfto", function(module, exports) {

$parcel$export(module.exports, "default", () => $9717173dcac265ba$export$2e2bcd8739ae039);

var $lqVFV = parcelRequire("lqVFV");
var $9717173dcac265ba$var$ka = 0.89081309152928522810, $9717173dcac265ba$var$kr = Math.sin((0, $lqVFV.pi) / 10) / Math.sin(7 * (0, $lqVFV.pi) / 10), $9717173dcac265ba$var$kx = Math.sin((0, $lqVFV.tau) / 10) * $9717173dcac265ba$var$kr, $9717173dcac265ba$var$ky = -Math.cos((0, $lqVFV.tau) / 10) * $9717173dcac265ba$var$kr;
var $9717173dcac265ba$export$2e2bcd8739ae039 = {
    draw: function(context, size) {
        var r = Math.sqrt(size * $9717173dcac265ba$var$ka), x = $9717173dcac265ba$var$kx * r, y = $9717173dcac265ba$var$ky * r;
        context.moveTo(0, -r);
        context.lineTo(x, y);
        for(var i = 1; i < 5; ++i){
            var a = (0, $lqVFV.tau) * i / 5, c = Math.cos(a), s = Math.sin(a);
            context.lineTo(s * r, -c * r);
            context.lineTo(c * x - s * y, s * x + c * y);
        }
        context.closePath();
    }
};

});

parcelRegister("avGSm", function(module, exports) {

$parcel$export(module.exports, "default", () => $7a6e0edcb231f66b$export$2e2bcd8739ae039);
var $7a6e0edcb231f66b$export$2e2bcd8739ae039 = {
    draw: function(context, size) {
        var w = Math.sqrt(size), x = -w / 2;
        context.rect(x, x, w, w);
    }
};

});

parcelRegister("4C5kN", function(module, exports) {

$parcel$export(module.exports, "default", () => $35bed959dcd24a91$export$2e2bcd8739ae039);
var $35bed959dcd24a91$var$sqrt3 = Math.sqrt(3);
var $35bed959dcd24a91$export$2e2bcd8739ae039 = {
    draw: function(context, size) {
        var y = -Math.sqrt(size / ($35bed959dcd24a91$var$sqrt3 * 3));
        context.moveTo(0, y * 2);
        context.lineTo(-$35bed959dcd24a91$var$sqrt3 * y, -y);
        context.lineTo($35bed959dcd24a91$var$sqrt3 * y, -y);
        context.closePath();
    }
};

});

parcelRegister("jZxw4", function(module, exports) {

$parcel$export(module.exports, "default", () => $e8ddb67bd9d37186$export$2e2bcd8739ae039);
var $e8ddb67bd9d37186$var$c = -0.5, $e8ddb67bd9d37186$var$s = Math.sqrt(3) / 2, $e8ddb67bd9d37186$var$k = 1 / Math.sqrt(12), $e8ddb67bd9d37186$var$a = ($e8ddb67bd9d37186$var$k / 2 + 1) * 3;
var $e8ddb67bd9d37186$export$2e2bcd8739ae039 = {
    draw: function(context, size) {
        var r = Math.sqrt(size / $e8ddb67bd9d37186$var$a), x0 = r / 2, y0 = r * $e8ddb67bd9d37186$var$k, x1 = x0, y1 = r * $e8ddb67bd9d37186$var$k + r, x2 = -x1, y2 = y1;
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
        context.lineTo(x2, y2);
        context.lineTo($e8ddb67bd9d37186$var$c * x0 - $e8ddb67bd9d37186$var$s * y0, $e8ddb67bd9d37186$var$s * x0 + $e8ddb67bd9d37186$var$c * y0);
        context.lineTo($e8ddb67bd9d37186$var$c * x1 - $e8ddb67bd9d37186$var$s * y1, $e8ddb67bd9d37186$var$s * x1 + $e8ddb67bd9d37186$var$c * y1);
        context.lineTo($e8ddb67bd9d37186$var$c * x2 - $e8ddb67bd9d37186$var$s * y2, $e8ddb67bd9d37186$var$s * x2 + $e8ddb67bd9d37186$var$c * y2);
        context.lineTo($e8ddb67bd9d37186$var$c * x0 + $e8ddb67bd9d37186$var$s * y0, $e8ddb67bd9d37186$var$c * y0 - $e8ddb67bd9d37186$var$s * x0);
        context.lineTo($e8ddb67bd9d37186$var$c * x1 + $e8ddb67bd9d37186$var$s * y1, $e8ddb67bd9d37186$var$c * y1 - $e8ddb67bd9d37186$var$s * x1);
        context.lineTo($e8ddb67bd9d37186$var$c * x2 + $e8ddb67bd9d37186$var$s * y2, $e8ddb67bd9d37186$var$c * y2 - $e8ddb67bd9d37186$var$s * x2);
        context.closePath();
    }
};

});


parcelRegister("a7PuO", function(module, exports) {

$parcel$export(module.exports, "default", () => $75f280e03c9a48bb$export$2e2bcd8739ae039);

var $3mTTg = parcelRequire("3mTTg");

var $2ibnw = parcelRequire("2ibnw");
function $75f280e03c9a48bb$var$BasisClosed(context) {
    this._context = context;
}
$75f280e03c9a48bb$var$BasisClosed.prototype = {
    areaStart: (0, $3mTTg.default),
    areaEnd: (0, $3mTTg.default),
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 1:
                this._context.moveTo(this._x2, this._y2);
                this._context.closePath();
                break;
            case 2:
                this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
                this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
                this._context.closePath();
                break;
            case 3:
                this.point(this._x2, this._y2);
                this.point(this._x3, this._y3);
                this.point(this._x4, this._y4);
                break;
        }
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._x2 = x, this._y2 = y;
                break;
            case 1:
                this._point = 2;
                this._x3 = x, this._y3 = y;
                break;
            case 2:
                this._point = 3;
                this._x4 = x, this._y4 = y;
                this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6);
                break;
            default:
                (0, $2ibnw.point)(this, x, y);
                break;
        }
        this._x0 = this._x1, this._x1 = x;
        this._y0 = this._y1, this._y1 = y;
    }
};
function $75f280e03c9a48bb$export$2e2bcd8739ae039(context) {
    return new $75f280e03c9a48bb$var$BasisClosed(context);
}

});
parcelRegister("3mTTg", function(module, exports) {

$parcel$export(module.exports, "default", () => $273ec7cf791bc0cb$export$2e2bcd8739ae039);
function $273ec7cf791bc0cb$export$2e2bcd8739ae039() {}

});

parcelRegister("2ibnw", function(module, exports) {

$parcel$export(module.exports, "point", () => $1ab616b36c003709$export$105684a3041cb6f3);
$parcel$export(module.exports, "Basis", () => $1ab616b36c003709$export$957f7263e89bedd2);
$parcel$export(module.exports, "default", () => $1ab616b36c003709$export$2e2bcd8739ae039);
function $1ab616b36c003709$export$105684a3041cb6f3(that, x, y) {
    that._context.bezierCurveTo((2 * that._x0 + that._x1) / 3, (2 * that._y0 + that._y1) / 3, (that._x0 + 2 * that._x1) / 3, (that._y0 + 2 * that._y1) / 3, (that._x0 + 4 * that._x1 + x) / 6, (that._y0 + 4 * that._y1 + y) / 6);
}
function $1ab616b36c003709$export$957f7263e89bedd2(context) {
    this._context = context;
}
$1ab616b36c003709$export$957f7263e89bedd2.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 3:
                $1ab616b36c003709$export$105684a3041cb6f3(this, this._x1, this._y1); // proceed
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
        }
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
            default:
                $1ab616b36c003709$export$105684a3041cb6f3(this, x, y);
                break;
        }
        this._x0 = this._x1, this._x1 = x;
        this._y0 = this._y1, this._y1 = y;
    }
};
function $1ab616b36c003709$export$2e2bcd8739ae039(context) {
    return new $1ab616b36c003709$export$957f7263e89bedd2(context);
}

});


parcelRegister("h6veq", function(module, exports) {

$parcel$export(module.exports, "default", () => $c73b392eb5a2478d$export$2e2bcd8739ae039);

var $2ibnw = parcelRequire("2ibnw");
function $c73b392eb5a2478d$var$BasisOpen(context) {
    this._context = context;
}
$c73b392eb5a2478d$var$BasisOpen.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6;
                this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
                break;
            case 3:
                this._point = 4; // proceed
            default:
                (0, $2ibnw.point)(this, x, y);
                break;
        }
        this._x0 = this._x1, this._x1 = x;
        this._y0 = this._y1, this._y1 = y;
    }
};
function $c73b392eb5a2478d$export$2e2bcd8739ae039(context) {
    return new $c73b392eb5a2478d$var$BasisOpen(context);
}

});

parcelRegister("kacIM", function(module, exports) {

$parcel$export(module.exports, "default", () => $eade9c05bde8f5bd$export$2e2bcd8739ae039);

var $2ibnw = parcelRequire("2ibnw");
function $eade9c05bde8f5bd$var$Bundle(context, beta) {
    this._basis = new (0, $2ibnw.Basis)(context);
    this._beta = beta;
}
$eade9c05bde8f5bd$var$Bundle.prototype = {
    lineStart: function() {
        this._x = [];
        this._y = [];
        this._basis.lineStart();
    },
    lineEnd: function() {
        var x = this._x, y = this._y, j = x.length - 1;
        if (j > 0) {
            var x0 = x[0], y0 = y[0], dx = x[j] - x0, dy = y[j] - y0, i = -1, t;
            while(++i <= j){
                t = i / j;
                this._basis.point(this._beta * x[i] + (1 - this._beta) * (x0 + t * dx), this._beta * y[i] + (1 - this._beta) * (y0 + t * dy));
            }
        }
        this._x = this._y = null;
        this._basis.lineEnd();
    },
    point: function(x, y) {
        this._x.push(+x);
        this._y.push(+y);
    }
};
var $eade9c05bde8f5bd$export$2e2bcd8739ae039 = function custom(beta) {
    function bundle(context) {
        return beta === 1 ? new (0, $2ibnw.Basis)(context) : new $eade9c05bde8f5bd$var$Bundle(context, beta);
    }
    bundle.beta = function(beta) {
        return custom(+beta);
    };
    return bundle;
}(0.85);

});

parcelRegister("3e3gn", function(module, exports) {

$parcel$export(module.exports, "CardinalClosed", () => $259535e2a69eec35$export$da3940d7e9162858);
$parcel$export(module.exports, "default", () => $259535e2a69eec35$export$2e2bcd8739ae039);

var $3mTTg = parcelRequire("3mTTg");

var $60OhX = parcelRequire("60OhX");
function $259535e2a69eec35$export$da3940d7e9162858(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
}
$259535e2a69eec35$export$da3940d7e9162858.prototype = {
    areaStart: (0, $3mTTg.default),
    areaEnd: (0, $3mTTg.default),
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 1:
                this._context.moveTo(this._x3, this._y3);
                this._context.closePath();
                break;
            case 2:
                this._context.lineTo(this._x3, this._y3);
                this._context.closePath();
                break;
            case 3:
                this.point(this._x3, this._y3);
                this.point(this._x4, this._y4);
                this.point(this._x5, this._y5);
                break;
        }
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._x3 = x, this._y3 = y;
                break;
            case 1:
                this._point = 2;
                this._context.moveTo(this._x4 = x, this._y4 = y);
                break;
            case 2:
                this._point = 3;
                this._x5 = x, this._y5 = y;
                break;
            default:
                (0, $60OhX.point)(this, x, y);
                break;
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
};
var $259535e2a69eec35$export$2e2bcd8739ae039 = function custom(tension) {
    function cardinal(context) {
        return new $259535e2a69eec35$export$da3940d7e9162858(context, tension);
    }
    cardinal.tension = function(tension) {
        return custom(+tension);
    };
    return cardinal;
}(0);

});
parcelRegister("60OhX", function(module, exports) {

$parcel$export(module.exports, "point", () => $4609c06c4f0ec484$export$105684a3041cb6f3);
$parcel$export(module.exports, "Cardinal", () => $4609c06c4f0ec484$export$ee51ff373511cbeb);
$parcel$export(module.exports, "default", () => $4609c06c4f0ec484$export$2e2bcd8739ae039);
function $4609c06c4f0ec484$export$105684a3041cb6f3(that, x, y) {
    that._context.bezierCurveTo(that._x1 + that._k * (that._x2 - that._x0), that._y1 + that._k * (that._y2 - that._y0), that._x2 + that._k * (that._x1 - x), that._y2 + that._k * (that._y1 - y), that._x2, that._y2);
}
function $4609c06c4f0ec484$export$ee51ff373511cbeb(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
}
$4609c06c4f0ec484$export$ee51ff373511cbeb.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                $4609c06c4f0ec484$export$105684a3041cb6f3(this, this._x1, this._y1);
                break;
        }
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2;
                this._x1 = x, this._y1 = y;
                break;
            case 2:
                this._point = 3; // proceed
            default:
                $4609c06c4f0ec484$export$105684a3041cb6f3(this, x, y);
                break;
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
};
var $4609c06c4f0ec484$export$2e2bcd8739ae039 = function custom(tension) {
    function cardinal(context) {
        return new $4609c06c4f0ec484$export$ee51ff373511cbeb(context, tension);
    }
    cardinal.tension = function(tension) {
        return custom(+tension);
    };
    return cardinal;
}(0);

});


parcelRegister("JNLfa", function(module, exports) {

$parcel$export(module.exports, "CardinalOpen", () => $089acd94ce64faee$export$cd7d1a617282f2f1);
$parcel$export(module.exports, "default", () => $089acd94ce64faee$export$2e2bcd8739ae039);

var $60OhX = parcelRequire("60OhX");
function $089acd94ce64faee$export$cd7d1a617282f2f1(context, tension) {
    this._context = context;
    this._k = (1 - tension) / 6;
}
$089acd94ce64faee$export$cd7d1a617282f2f1.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                break;
            case 3:
                this._point = 4; // proceed
            default:
                (0, $60OhX.point)(this, x, y);
                break;
        }
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
};
var $089acd94ce64faee$export$2e2bcd8739ae039 = function custom(tension) {
    function cardinal(context) {
        return new $089acd94ce64faee$export$cd7d1a617282f2f1(context, tension);
    }
    cardinal.tension = function(tension) {
        return custom(+tension);
    };
    return cardinal;
}(0);

});

parcelRegister("d4MeO", function(module, exports) {

$parcel$export(module.exports, "default", () => $98511122d2a5838b$export$2e2bcd8739ae039);

var $3e3gn = parcelRequire("3e3gn");

var $3mTTg = parcelRequire("3mTTg");

var $62zOn = parcelRequire("62zOn");
function $98511122d2a5838b$var$CatmullRomClosed(context, alpha) {
    this._context = context;
    this._alpha = alpha;
}
$98511122d2a5838b$var$CatmullRomClosed.prototype = {
    areaStart: (0, $3mTTg.default),
    areaEnd: (0, $3mTTg.default),
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
        this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 1:
                this._context.moveTo(this._x3, this._y3);
                this._context.closePath();
                break;
            case 2:
                this._context.lineTo(this._x3, this._y3);
                this._context.closePath();
                break;
            case 3:
                this.point(this._x3, this._y3);
                this.point(this._x4, this._y4);
                this.point(this._x5, this._y5);
                break;
        }
    },
    point: function(x, y) {
        x = +x, y = +y;
        if (this._point) {
            var x23 = this._x2 - x, y23 = this._y2 - y;
            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
        }
        switch(this._point){
            case 0:
                this._point = 1;
                this._x3 = x, this._y3 = y;
                break;
            case 1:
                this._point = 2;
                this._context.moveTo(this._x4 = x, this._y4 = y);
                break;
            case 2:
                this._point = 3;
                this._x5 = x, this._y5 = y;
                break;
            default:
                (0, $62zOn.point)(this, x, y);
                break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a;
        this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
};
var $98511122d2a5838b$export$2e2bcd8739ae039 = function custom(alpha) {
    function catmullRom(context) {
        return alpha ? new $98511122d2a5838b$var$CatmullRomClosed(context, alpha) : new (0, $3e3gn.CardinalClosed)(context, 0);
    }
    catmullRom.alpha = function(alpha) {
        return custom(+alpha);
    };
    return catmullRom;
}(0.5);

});
parcelRegister("62zOn", function(module, exports) {

$parcel$export(module.exports, "point", () => point);
$parcel$export(module.exports, "default", () => $465eb5658b6817cf$export$2e2bcd8739ae039);

var $lqVFV = parcelRequire("lqVFV");

var $60OhX = parcelRequire("60OhX");
function point(that, x, y) {
    var x1 = that._x1, y1 = that._y1, x2 = that._x2, y2 = that._y2;
    if (that._l01_a > (0, $lqVFV.epsilon)) {
        var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
        x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
        y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
    }
    if (that._l23_a > (0, $lqVFV.epsilon)) {
        var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m = 3 * that._l23_a * (that._l23_a + that._l12_a);
        x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
        y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
    }
    that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}
function CatmullRom(context, alpha) {
    this._context = context;
    this._alpha = alpha;
}
CatmullRom.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
        this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                this.point(this._x2, this._y2);
                break;
        }
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        if (this._point) {
            var x23 = this._x2 - x, y23 = this._y2 - y;
            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
        }
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3; // proceed
            default:
                point(this, x, y);
                break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a;
        this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
};
var $465eb5658b6817cf$export$2e2bcd8739ae039 = function custom(alpha) {
    function catmullRom(context) {
        return alpha ? new CatmullRom(context, alpha) : new (0, $60OhX.Cardinal)(context, 0);
    }
    catmullRom.alpha = function(alpha) {
        return custom(+alpha);
    };
    return catmullRom;
}(0.5);

});


parcelRegister("fTc0E", function(module, exports) {

$parcel$export(module.exports, "default", () => $b9154ee28653a163$export$2e2bcd8739ae039);

var $JNLfa = parcelRequire("JNLfa");

var $62zOn = parcelRequire("62zOn");
function $b9154ee28653a163$var$CatmullRomOpen(context, alpha) {
    this._context = context;
    this._alpha = alpha;
}
$b9154ee28653a163$var$CatmullRomOpen.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
        this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
        if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        if (this._point) {
            var x23 = this._x2 - x, y23 = this._y2 - y;
            this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
        }
        switch(this._point){
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                break;
            case 3:
                this._point = 4; // proceed
            default:
                (0, $62zOn.point)(this, x, y);
                break;
        }
        this._l01_a = this._l12_a, this._l12_a = this._l23_a;
        this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
        this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
        this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
    }
};
var $b9154ee28653a163$export$2e2bcd8739ae039 = function custom(alpha) {
    function catmullRom(context) {
        return alpha ? new $b9154ee28653a163$var$CatmullRomOpen(context, alpha) : new (0, $JNLfa.CardinalOpen)(context, 0);
    }
    catmullRom.alpha = function(alpha) {
        return custom(+alpha);
    };
    return catmullRom;
}(0.5);

});

parcelRegister("8Cy3m", function(module, exports) {

$parcel$export(module.exports, "default", () => $646c499f3c154b7b$export$2e2bcd8739ae039);

var $3mTTg = parcelRequire("3mTTg");
function $646c499f3c154b7b$var$LinearClosed(context) {
    this._context = context;
}
$646c499f3c154b7b$var$LinearClosed.prototype = {
    areaStart: (0, $3mTTg.default),
    areaEnd: (0, $3mTTg.default),
    lineStart: function() {
        this._point = 0;
    },
    lineEnd: function() {
        if (this._point) this._context.closePath();
    },
    point: function(x, y) {
        x = +x, y = +y;
        if (this._point) this._context.lineTo(x, y);
        else this._point = 1, this._context.moveTo(x, y);
    }
};
function $646c499f3c154b7b$export$2e2bcd8739ae039(context) {
    return new $646c499f3c154b7b$var$LinearClosed(context);
}

});

parcelRegister("5M6zT", function(module, exports) {

$parcel$export(module.exports, "monotoneX", () => $434689b118f0624a$export$99563b5420dbdc55);
$parcel$export(module.exports, "monotoneY", () => $434689b118f0624a$export$8b5360456d6bdb88);
function $434689b118f0624a$var$sign(x) {
    return x < 0 ? -1 : 1;
}
// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function $434689b118f0624a$var$slope3(that, x2, y2) {
    var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
    return ($434689b118f0624a$var$sign(s0) + $434689b118f0624a$var$sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
// Calculate a one-sided slope.
function $434689b118f0624a$var$slope2(that, t) {
    var h = that._x1 - that._x0;
    return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function $434689b118f0624a$var$point(that, t0, t1) {
    var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
    that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}
function $434689b118f0624a$var$MonotoneX(context) {
    this._context = context;
}
$434689b118f0624a$var$MonotoneX.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            case 3:
                $434689b118f0624a$var$point(this, this._t0, $434689b118f0624a$var$slope2(this, this._t0));
                break;
        }
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        var t1 = NaN;
        x = +x, y = +y;
        if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                $434689b118f0624a$var$point(this, $434689b118f0624a$var$slope2(this, t1 = $434689b118f0624a$var$slope3(this, x, y)), t1);
                break;
            default:
                $434689b118f0624a$var$point(this, this._t0, t1 = $434689b118f0624a$var$slope3(this, x, y));
                break;
        }
        this._x0 = this._x1, this._x1 = x;
        this._y0 = this._y1, this._y1 = y;
        this._t0 = t1;
    }
};
function $434689b118f0624a$var$MonotoneY(context) {
    this._context = new $434689b118f0624a$var$ReflectContext(context);
}
($434689b118f0624a$var$MonotoneY.prototype = Object.create($434689b118f0624a$var$MonotoneX.prototype)).point = function(x, y) {
    $434689b118f0624a$var$MonotoneX.prototype.point.call(this, y, x);
};
function $434689b118f0624a$var$ReflectContext(context) {
    this._context = context;
}
$434689b118f0624a$var$ReflectContext.prototype = {
    moveTo: function(x, y) {
        this._context.moveTo(y, x);
    },
    closePath: function() {
        this._context.closePath();
    },
    lineTo: function(x, y) {
        this._context.lineTo(y, x);
    },
    bezierCurveTo: function(x1, y1, x2, y2, x, y) {
        this._context.bezierCurveTo(y1, x1, y2, x2, y, x);
    }
};
function $434689b118f0624a$export$99563b5420dbdc55(context) {
    return new $434689b118f0624a$var$MonotoneX(context);
}
function $434689b118f0624a$export$8b5360456d6bdb88(context) {
    return new $434689b118f0624a$var$MonotoneY(context);
}

});

parcelRegister("bIO2h", function(module, exports) {

$parcel$export(module.exports, "default", () => $888a9dd29f790be2$export$2e2bcd8739ae039);
function $888a9dd29f790be2$var$Natural(context) {
    this._context = context;
}
$888a9dd29f790be2$var$Natural.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x = [];
        this._y = [];
    },
    lineEnd: function() {
        var x = this._x, y = this._y, n = x.length;
        if (n) {
            this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
            if (n === 2) this._context.lineTo(x[1], y[1]);
            else {
                var px = $888a9dd29f790be2$var$controlPoints(x), py = $888a9dd29f790be2$var$controlPoints(y);
                for(var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1)this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
            }
        }
        if (this._line || this._line !== 0 && n === 1) this._context.closePath();
        this._line = 1 - this._line;
        this._x = this._y = null;
    },
    point: function(x, y) {
        this._x.push(+x);
        this._y.push(+y);
    }
};
// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function $888a9dd29f790be2$var$controlPoints(x) {
    var i, n = x.length - 1, m, a = new Array(n), b = new Array(n), r = new Array(n);
    a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
    for(i = 1; i < n - 1; ++i)a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
    a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
    for(i = 1; i < n; ++i)m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
    a[n - 1] = r[n - 1] / b[n - 1];
    for(i = n - 2; i >= 0; --i)a[i] = (r[i] - a[i + 1]) / b[i];
    b[n - 1] = (x[n] + a[n - 1]) / 2;
    for(i = 0; i < n - 1; ++i)b[i] = 2 * x[i + 1] - a[i + 1];
    return [
        a,
        b
    ];
}
function $888a9dd29f790be2$export$2e2bcd8739ae039(context) {
    return new $888a9dd29f790be2$var$Natural(context);
}

});

parcelRegister("9Fi5w", function(module, exports) {

$parcel$export(module.exports, "default", () => $7095f94c0f9e0c7e$export$2e2bcd8739ae039);
$parcel$export(module.exports, "stepBefore", () => $7095f94c0f9e0c7e$export$10eafa5b7478b343);
$parcel$export(module.exports, "stepAfter", () => $7095f94c0f9e0c7e$export$793b3db073781cbb);
function $7095f94c0f9e0c7e$var$Step(context, t) {
    this._context = context;
    this._t = t;
}
$7095f94c0f9e0c7e$var$Step.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x = this._y = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
    },
    point: function(x, y) {
        x = +x, y = +y;
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2; // proceed
            default:
                if (this._t <= 0) {
                    this._context.lineTo(this._x, y);
                    this._context.lineTo(x, y);
                } else {
                    var x1 = this._x * (1 - this._t) + x * this._t;
                    this._context.lineTo(x1, this._y);
                    this._context.lineTo(x1, y);
                }
                break;
        }
        this._x = x, this._y = y;
    }
};
function $7095f94c0f9e0c7e$export$2e2bcd8739ae039(context) {
    return new $7095f94c0f9e0c7e$var$Step(context, 0.5);
}
function $7095f94c0f9e0c7e$export$10eafa5b7478b343(context) {
    return new $7095f94c0f9e0c7e$var$Step(context, 0);
}
function $7095f94c0f9e0c7e$export$793b3db073781cbb(context) {
    return new $7095f94c0f9e0c7e$var$Step(context, 1);
}

});

parcelRegister("4qBr5", function(module, exports) {

$parcel$export(module.exports, "default", () => $3396a124c53ea4fe$export$2e2bcd8739ae039);

var $6Uwj4 = parcelRequire("6Uwj4");

var $cYNhB = parcelRequire("cYNhB");

var $3ap32 = parcelRequire("3ap32");

var $1xL1H = parcelRequire("1xL1H");
function $3396a124c53ea4fe$var$stackValue(d, key) {
    return d[key];
}
function $3396a124c53ea4fe$export$2e2bcd8739ae039() {
    var keys = (0, $cYNhB.default)([]), order = (0, $1xL1H.default), offset = (0, $3ap32.default), value = $3396a124c53ea4fe$var$stackValue;
    function stack(data) {
        var kz = keys.apply(this, arguments), i, m = data.length, n = kz.length, sz = new Array(n), oz;
        for(i = 0; i < n; ++i){
            for(var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j){
                si[j] = sij = [
                    0,
                    +value(data[j], ki, j, data)
                ];
                sij.data = data[j];
            }
            si.key = ki;
        }
        for(i = 0, oz = order(sz); i < n; ++i)sz[oz[i]].index = i;
        offset(sz, oz);
        return sz;
    }
    stack.keys = function(_) {
        return arguments.length ? (keys = typeof _ === "function" ? _ : (0, $cYNhB.default)((0, $6Uwj4.slice).call(_)), stack) : keys;
    };
    stack.value = function(_) {
        return arguments.length ? (value = typeof _ === "function" ? _ : (0, $cYNhB.default)(+_), stack) : value;
    };
    stack.order = function(_) {
        return arguments.length ? (order = _ == null ? (0, $1xL1H.default) : typeof _ === "function" ? _ : (0, $cYNhB.default)((0, $6Uwj4.slice).call(_)), stack) : order;
    };
    stack.offset = function(_) {
        return arguments.length ? (offset = _ == null ? (0, $3ap32.default) : _, stack) : offset;
    };
    return stack;
}

});
parcelRegister("3ap32", function(module, exports) {

$parcel$export(module.exports, "default", () => $24e5bc41c0d31543$export$2e2bcd8739ae039);
function $24e5bc41c0d31543$export$2e2bcd8739ae039(series, order) {
    if (!((n = series.length) > 1)) return;
    for(var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i){
        s0 = s1, s1 = series[order[i]];
        for(j = 0; j < m; ++j)s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
}

});

parcelRegister("1xL1H", function(module, exports) {

$parcel$export(module.exports, "default", () => $11fd59f3d396c6cc$export$2e2bcd8739ae039);
function $11fd59f3d396c6cc$export$2e2bcd8739ae039(series) {
    var n = series.length, o = new Array(n);
    while(--n >= 0)o[n] = n;
    return o;
}

});


parcelRegister("9uY6H", function(module, exports) {

$parcel$export(module.exports, "default", () => $6ea58a6c1381acdd$export$2e2bcd8739ae039);

var $3ap32 = parcelRequire("3ap32");
function $6ea58a6c1381acdd$export$2e2bcd8739ae039(series, order) {
    if (!((n = series.length) > 0)) return;
    for(var i, n, j = 0, m = series[0].length, y; j < m; ++j){
        for(y = i = 0; i < n; ++i)y += series[i][j][1] || 0;
        if (y) for(i = 0; i < n; ++i)series[i][j][1] /= y;
    }
    (0, $3ap32.default)(series, order);
}

});

parcelRegister("dOkzk", function(module, exports) {

$parcel$export(module.exports, "default", () => $a0dfe66510c9e9c5$export$2e2bcd8739ae039);
function $a0dfe66510c9e9c5$export$2e2bcd8739ae039(series, order) {
    if (!((n = series.length) > 0)) return;
    for(var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j)for(yp = yn = 0, i = 0; i < n; ++i){
        if ((dy = (d = series[order[i]][j])[1] - d[0]) > 0) d[0] = yp, d[1] = yp += dy;
        else if (dy < 0) d[1] = yn, d[0] = yn += dy;
        else d[0] = 0, d[1] = dy;
    }
}

});

parcelRegister("ijenI", function(module, exports) {

$parcel$export(module.exports, "default", () => $d5452833a1e3fe6c$export$2e2bcd8739ae039);

var $3ap32 = parcelRequire("3ap32");
function $d5452833a1e3fe6c$export$2e2bcd8739ae039(series, order) {
    if (!((n = series.length) > 0)) return;
    for(var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j){
        for(var i = 0, y = 0; i < n; ++i)y += series[i][j][1] || 0;
        s0[j][1] += s0[j][0] = -y / 2;
    }
    (0, $3ap32.default)(series, order);
}

});

parcelRegister("hcwbs", function(module, exports) {

$parcel$export(module.exports, "default", () => $c85c85b13d6aafc5$export$2e2bcd8739ae039);

var $3ap32 = parcelRequire("3ap32");
function $c85c85b13d6aafc5$export$2e2bcd8739ae039(series, order) {
    if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
    for(var y = 0, j = 1, s0, m, n; j < m; ++j){
        for(var i = 0, s1 = 0, s2 = 0; i < n; ++i){
            var si = series[order[i]], sij0 = si[j][1] || 0, sij1 = si[j - 1][1] || 0, s3 = (sij0 - sij1) / 2;
            for(var k = 0; k < i; ++k){
                var sk = series[order[k]], skj0 = sk[j][1] || 0, skj1 = sk[j - 1][1] || 0;
                s3 += skj0 - skj1;
            }
            s1 += sij0, s2 += s3 * sij0;
        }
        s0[j - 1][1] += s0[j - 1][0] = y;
        if (s1) y -= s2 / s1;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    (0, $3ap32.default)(series, order);
}

});

parcelRegister("3E5bb", function(module, exports) {

$parcel$export(module.exports, "default", () => $2a792008ae732ef1$export$2e2bcd8739ae039);

var $1xL1H = parcelRequire("1xL1H");
function $2a792008ae732ef1$export$2e2bcd8739ae039(series) {
    var peaks = series.map($2a792008ae732ef1$var$peak);
    return (0, $1xL1H.default)(series).sort(function(a, b) {
        return peaks[a] - peaks[b];
    });
}
function $2a792008ae732ef1$var$peak(series) {
    var i = -1, j = 0, n = series.length, vi, vj = -Infinity;
    while(++i < n)if ((vi = +series[i][1]) > vj) vj = vi, j = i;
    return j;
}

});

parcelRegister("kUUj6", function(module, exports) {

$parcel$export(module.exports, "default", () => $f3a4b701710b3334$export$2e2bcd8739ae039);
$parcel$export(module.exports, "sum", () => $f3a4b701710b3334$export$8a63f25cc62965f1);

var $1xL1H = parcelRequire("1xL1H");
function $f3a4b701710b3334$export$2e2bcd8739ae039(series) {
    var sums = series.map($f3a4b701710b3334$export$8a63f25cc62965f1);
    return (0, $1xL1H.default)(series).sort(function(a, b) {
        return sums[a] - sums[b];
    });
}
function $f3a4b701710b3334$export$8a63f25cc62965f1(series) {
    var s = 0, i = -1, n = series.length, v;
    while(++i < n)if (v = +series[i][1]) s += v;
    return s;
}

});

parcelRegister("hwTnn", function(module, exports) {

$parcel$export(module.exports, "default", () => $cc30616196fe8a8d$export$2e2bcd8739ae039);

var $kUUj6 = parcelRequire("kUUj6");
function $cc30616196fe8a8d$export$2e2bcd8739ae039(series) {
    return (0, $kUUj6.default)(series).reverse();
}

});

parcelRegister("3PZGg", function(module, exports) {

$parcel$export(module.exports, "default", () => $2cb5fb011629a5db$export$2e2bcd8739ae039);

var $3E5bb = parcelRequire("3E5bb");

var $kUUj6 = parcelRequire("kUUj6");
function $2cb5fb011629a5db$export$2e2bcd8739ae039(series) {
    var n = series.length, i, j, sums = series.map((0, $kUUj6.sum)), order = (0, $3E5bb.default)(series), top = 0, bottom = 0, tops = [], bottoms = [];
    for(i = 0; i < n; ++i){
        j = order[i];
        if (top < bottom) {
            top += sums[j];
            tops.push(j);
        } else {
            bottom += sums[j];
            bottoms.push(j);
        }
    }
    return bottoms.reverse().concat(tops);
}

});

parcelRegister("3YBix", function(module, exports) {

$parcel$export(module.exports, "default", () => $2e53e8491764a0c8$export$2e2bcd8739ae039);

var $1xL1H = parcelRequire("1xL1H");
function $2e53e8491764a0c8$export$2e2bcd8739ae039(series) {
    return (0, $1xL1H.default)(series).reverse();
}

});


parcelRegister("dvkHI", function(module, exports) {

$parcel$export(module.exports, "timeInterval", () => (parcelRequire("jDHVD")).default);
$parcel$export(module.exports, "timeMillisecond", () => (parcelRequire("ib75S")).default);
$parcel$export(module.exports, "timeMilliseconds", () => (parcelRequire("ib75S")).milliseconds);
$parcel$export(module.exports, "utcMillisecond", () => (parcelRequire("ib75S")).default);
$parcel$export(module.exports, "utcMilliseconds", () => (parcelRequire("ib75S")).milliseconds);
$parcel$export(module.exports, "timeSecond", () => (parcelRequire("5WJjg")).default);
$parcel$export(module.exports, "timeSeconds", () => (parcelRequire("5WJjg")).seconds);
$parcel$export(module.exports, "utcSecond", () => (parcelRequire("5WJjg")).default);
$parcel$export(module.exports, "utcSeconds", () => (parcelRequire("5WJjg")).seconds);
$parcel$export(module.exports, "timeMinute", () => (parcelRequire("665Rw")).default);
$parcel$export(module.exports, "timeMinutes", () => (parcelRequire("665Rw")).minutes);
$parcel$export(module.exports, "timeHour", () => (parcelRequire("hxMZB")).default);
$parcel$export(module.exports, "timeHours", () => (parcelRequire("hxMZB")).hours);
$parcel$export(module.exports, "timeDay", () => (parcelRequire("6k3PS")).default);
$parcel$export(module.exports, "timeDays", () => (parcelRequire("6k3PS")).days);
$parcel$export(module.exports, "timeWeek", () => (parcelRequire("lTpTu")).sunday);
$parcel$export(module.exports, "timeWeeks", () => (parcelRequire("lTpTu")).sundays);
$parcel$export(module.exports, "timeSunday", () => (parcelRequire("lTpTu")).sunday);
$parcel$export(module.exports, "timeSundays", () => (parcelRequire("lTpTu")).sundays);
$parcel$export(module.exports, "timeMonday", () => (parcelRequire("lTpTu")).monday);
$parcel$export(module.exports, "timeMondays", () => (parcelRequire("lTpTu")).mondays);
$parcel$export(module.exports, "timeTuesday", () => (parcelRequire("lTpTu")).tuesday);
$parcel$export(module.exports, "timeTuesdays", () => (parcelRequire("lTpTu")).tuesdays);
$parcel$export(module.exports, "timeWednesday", () => (parcelRequire("lTpTu")).wednesday);
$parcel$export(module.exports, "timeWednesdays", () => (parcelRequire("lTpTu")).wednesdays);
$parcel$export(module.exports, "timeThursday", () => (parcelRequire("lTpTu")).thursday);
$parcel$export(module.exports, "timeThursdays", () => (parcelRequire("lTpTu")).thursdays);
$parcel$export(module.exports, "timeFriday", () => (parcelRequire("lTpTu")).friday);
$parcel$export(module.exports, "timeFridays", () => (parcelRequire("lTpTu")).fridays);
$parcel$export(module.exports, "timeSaturday", () => (parcelRequire("lTpTu")).saturday);
$parcel$export(module.exports, "timeSaturdays", () => (parcelRequire("lTpTu")).saturdays);
$parcel$export(module.exports, "timeMonth", () => (parcelRequire("y9nom")).default);
$parcel$export(module.exports, "timeMonths", () => (parcelRequire("y9nom")).months);
$parcel$export(module.exports, "timeYear", () => (parcelRequire("fomVJ")).default);
$parcel$export(module.exports, "timeYears", () => (parcelRequire("fomVJ")).years);
$parcel$export(module.exports, "utcMinute", () => (parcelRequire("eMrXX")).default);
$parcel$export(module.exports, "utcMinutes", () => (parcelRequire("eMrXX")).utcMinutes);
$parcel$export(module.exports, "utcHour", () => (parcelRequire("bVbKI")).default);
$parcel$export(module.exports, "utcHours", () => (parcelRequire("bVbKI")).utcHours);
$parcel$export(module.exports, "utcDay", () => (parcelRequire("jqBxJ")).default);
$parcel$export(module.exports, "utcDays", () => (parcelRequire("jqBxJ")).utcDays);
$parcel$export(module.exports, "utcWeek", () => (parcelRequire("dAFA2")).utcSunday);
$parcel$export(module.exports, "utcWeeks", () => (parcelRequire("dAFA2")).utcSundays);
$parcel$export(module.exports, "utcSunday", () => (parcelRequire("dAFA2")).utcSunday);
$parcel$export(module.exports, "utcSundays", () => (parcelRequire("dAFA2")).utcSundays);
$parcel$export(module.exports, "utcMonday", () => (parcelRequire("dAFA2")).utcMonday);
$parcel$export(module.exports, "utcMondays", () => (parcelRequire("dAFA2")).utcMondays);
$parcel$export(module.exports, "utcTuesday", () => (parcelRequire("dAFA2")).utcTuesday);
$parcel$export(module.exports, "utcTuesdays", () => (parcelRequire("dAFA2")).utcTuesdays);
$parcel$export(module.exports, "utcWednesday", () => (parcelRequire("dAFA2")).utcWednesday);
$parcel$export(module.exports, "utcWednesdays", () => (parcelRequire("dAFA2")).utcWednesdays);
$parcel$export(module.exports, "utcThursday", () => (parcelRequire("dAFA2")).utcThursday);
$parcel$export(module.exports, "utcThursdays", () => (parcelRequire("dAFA2")).utcThursdays);
$parcel$export(module.exports, "utcFriday", () => (parcelRequire("dAFA2")).utcFriday);
$parcel$export(module.exports, "utcFridays", () => (parcelRequire("dAFA2")).utcFridays);
$parcel$export(module.exports, "utcSaturday", () => (parcelRequire("dAFA2")).utcSaturday);
$parcel$export(module.exports, "utcSaturdays", () => (parcelRequire("dAFA2")).utcSaturdays);
$parcel$export(module.exports, "utcMonth", () => (parcelRequire("jHjSV")).default);
$parcel$export(module.exports, "utcMonths", () => (parcelRequire("jHjSV")).utcMonths);
$parcel$export(module.exports, "utcYear", () => (parcelRequire("iIAL8")).default);
$parcel$export(module.exports, "utcYears", () => (parcelRequire("iIAL8")).utcYears);

var $jDHVD = parcelRequire("jDHVD");

var $ib75S = parcelRequire("ib75S");

var $5WJjg = parcelRequire("5WJjg");

var $665Rw = parcelRequire("665Rw");

var $hxMZB = parcelRequire("hxMZB");

var $6k3PS = parcelRequire("6k3PS");

var $lTpTu = parcelRequire("lTpTu");

var $y9nom = parcelRequire("y9nom");

var $fomVJ = parcelRequire("fomVJ");

var $eMrXX = parcelRequire("eMrXX");

var $bVbKI = parcelRequire("bVbKI");

var $jqBxJ = parcelRequire("jqBxJ");

var $dAFA2 = parcelRequire("dAFA2");

var $jHjSV = parcelRequire("jHjSV");

var $iIAL8 = parcelRequire("iIAL8");

});

parcelRegister("3HaHe", function(module, exports) {

$parcel$export(module.exports, "timeFormatDefaultLocale", () => (parcelRequire("6WgZw")).default);
$parcel$export(module.exports, "timeFormat", () => (parcelRequire("6WgZw")).timeFormat);
$parcel$export(module.exports, "timeParse", () => (parcelRequire("6WgZw")).timeParse);
$parcel$export(module.exports, "utcFormat", () => (parcelRequire("6WgZw")).utcFormat);
$parcel$export(module.exports, "utcParse", () => (parcelRequire("6WgZw")).utcParse);
$parcel$export(module.exports, "timeFormatLocale", () => (parcelRequire("2nbvg")).default);
$parcel$export(module.exports, "isoFormat", () => (parcelRequire("gfZeb")).default);
$parcel$export(module.exports, "isoParse", () => (parcelRequire("gV8b3")).default);

var $6WgZw = parcelRequire("6WgZw");

var $2nbvg = parcelRequire("2nbvg");

var $gfZeb = parcelRequire("gfZeb");

var $gV8b3 = parcelRequire("gV8b3");

});
parcelRegister("gfZeb", function(module, exports) {

$parcel$export(module.exports, "isoSpecifier", () => $bd5d8a9ef50e634b$export$491f7bf2e88d83ce);
$parcel$export(module.exports, "default", () => $bd5d8a9ef50e634b$export$2e2bcd8739ae039);

var $6WgZw = parcelRequire("6WgZw");
var $bd5d8a9ef50e634b$export$491f7bf2e88d83ce = "%Y-%m-%dT%H:%M:%S.%LZ";
function $bd5d8a9ef50e634b$var$formatIsoNative(date) {
    return date.toISOString();
}
var $bd5d8a9ef50e634b$var$formatIso = Date.prototype.toISOString ? $bd5d8a9ef50e634b$var$formatIsoNative : (0, $6WgZw.utcFormat)($bd5d8a9ef50e634b$export$491f7bf2e88d83ce);
var $bd5d8a9ef50e634b$export$2e2bcd8739ae039 = $bd5d8a9ef50e634b$var$formatIso;

});

parcelRegister("gV8b3", function(module, exports) {

$parcel$export(module.exports, "default", () => $c518500cd58abd6d$export$2e2bcd8739ae039);

var $gfZeb = parcelRequire("gfZeb");

var $6WgZw = parcelRequire("6WgZw");
function $c518500cd58abd6d$var$parseIsoNative(string) {
    var date = new Date(string);
    return isNaN(date) ? null : date;
}
var $c518500cd58abd6d$var$parseIso = +new Date("2000-01-01T00:00:00.000Z") ? $c518500cd58abd6d$var$parseIsoNative : (0, $6WgZw.utcParse)((0, $gfZeb.isoSpecifier));
var $c518500cd58abd6d$export$2e2bcd8739ae039 = $c518500cd58abd6d$var$parseIso;

});


parcelRegister("anBCS", function(module, exports) {

$parcel$export(module.exports, "now", () => (parcelRequire("4yOwQ")).now);
$parcel$export(module.exports, "timer", () => (parcelRequire("4yOwQ")).timer);
$parcel$export(module.exports, "timerFlush", () => (parcelRequire("4yOwQ")).timerFlush);
$parcel$export(module.exports, "timeout", () => (parcelRequire("3EbCp")).default);
$parcel$export(module.exports, "interval", () => (parcelRequire("cdegw")).default);

var $4yOwQ = parcelRequire("4yOwQ");

var $3EbCp = parcelRequire("3EbCp");

var $cdegw = parcelRequire("cdegw");

});
parcelRegister("cdegw", function(module, exports) {

$parcel$export(module.exports, "default", () => $8e41c3c321616d0a$export$2e2bcd8739ae039);

var $4yOwQ = parcelRequire("4yOwQ");
function $8e41c3c321616d0a$export$2e2bcd8739ae039(callback, delay, time) {
    var t = new (0, $4yOwQ.Timer), total = delay;
    if (delay == null) return t.restart(callback, delay, time), t;
    delay = +delay, time = time == null ? (0, $4yOwQ.now)() : +time;
    t.restart(function tick(elapsed) {
        elapsed += total;
        t.restart(tick, total += delay, time);
        callback(elapsed);
    }, delay, time);
    return t;
}

});


parcelRegister("cAVFJ", function(module, exports) {

$parcel$export(module.exports, "voronoi", () => (parcelRequire("dlPF8")).default);

var $dlPF8 = parcelRequire("dlPF8");

});
parcelRegister("dlPF8", function(module, exports) {

$parcel$export(module.exports, "default", () => $9b854f9ea75d62fe$export$2e2bcd8739ae039);

var $bfgQL = parcelRequire("bfgQL");

var $h4nSA = parcelRequire("h4nSA");

var $U0nGP = parcelRequire("U0nGP");
function $9b854f9ea75d62fe$export$2e2bcd8739ae039() {
    var x = (0, $h4nSA.x), y = (0, $h4nSA.y), extent = null;
    function voronoi(data) {
        return new (0, $U0nGP.default)(data.map(function(d, i) {
            var s = [
                Math.round(x(d, i, data) / (0, $U0nGP.epsilon)) * (0, $U0nGP.epsilon),
                Math.round(y(d, i, data) / (0, $U0nGP.epsilon)) * (0, $U0nGP.epsilon)
            ];
            s.index = i;
            s.data = d;
            return s;
        }), extent);
    }
    voronoi.polygons = function(data) {
        return voronoi(data).polygons();
    };
    voronoi.links = function(data) {
        return voronoi(data).links();
    };
    voronoi.triangles = function(data) {
        return voronoi(data).triangles();
    };
    voronoi.x = function(_) {
        return arguments.length ? (x = typeof _ === "function" ? _ : (0, $bfgQL.default)(+_), voronoi) : x;
    };
    voronoi.y = function(_) {
        return arguments.length ? (y = typeof _ === "function" ? _ : (0, $bfgQL.default)(+_), voronoi) : y;
    };
    voronoi.extent = function(_) {
        return arguments.length ? (extent = _ == null ? null : [
            [
                +_[0][0],
                +_[0][1]
            ],
            [
                +_[1][0],
                +_[1][1]
            ]
        ], voronoi) : extent && [
            [
                extent[0][0],
                extent[0][1]
            ],
            [
                extent[1][0],
                extent[1][1]
            ]
        ];
    };
    voronoi.size = function(_) {
        return arguments.length ? (extent = _ == null ? null : [
            [
                0,
                0
            ],
            [
                +_[0],
                +_[1]
            ]
        ], voronoi) : extent && [
            extent[1][0] - extent[0][0],
            extent[1][1] - extent[0][1]
        ];
    };
    return voronoi;
}

});
parcelRegister("bfgQL", function(module, exports) {

$parcel$export(module.exports, "default", () => $82fe2a77fca39bbc$export$2e2bcd8739ae039);
function $82fe2a77fca39bbc$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}

});

parcelRegister("h4nSA", function(module, exports) {

$parcel$export(module.exports, "x", () => $c6d5555a79355f90$export$d141bba7fdc215a3);
$parcel$export(module.exports, "y", () => $c6d5555a79355f90$export$4a5767248b18ef41);
function $c6d5555a79355f90$export$d141bba7fdc215a3(d) {
    return d[0];
}
function $c6d5555a79355f90$export$4a5767248b18ef41(d) {
    return d[1];
}

});

parcelRegister("U0nGP", function(module, exports) {

$parcel$export(module.exports, "epsilon", () => epsilon);
$parcel$export(module.exports, "epsilon2", () => epsilon2);
$parcel$export(module.exports, "beaches", () => beaches);
$parcel$export(module.exports, "cells", () => cells);
$parcel$export(module.exports, "circles", () => circles);
$parcel$export(module.exports, "edges", () => edges);
$parcel$export(module.exports, "default", () => Diagram);

var $d5PtP = parcelRequire("d5PtP");

var $7FT4g = parcelRequire("7FT4g");

var $2KU9F = parcelRequire("2KU9F");

var $cMmO9 = parcelRequire("cMmO9");

var $4AV21 = parcelRequire("4AV21");
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var beaches;
var cells;
var circles;
var edges;
function triangleArea(a, b, c) {
    return (a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]);
}
function lexicographic(a, b) {
    return b[1] - a[1] || b[0] - a[0];
}
function Diagram(sites, extent) {
    var site = sites.sort(lexicographic).pop(), x, y, circle;
    edges = [];
    cells = new Array(sites.length);
    beaches = new (0, $4AV21.default);
    circles = new (0, $4AV21.default);
    while(true){
        circle = (0, $2KU9F.firstCircle);
        if (site && (!circle || site[1] < circle.y || site[1] === circle.y && site[0] < circle.x)) {
            if (site[0] !== x || site[1] !== y) {
                (0, $d5PtP.addBeach)(site);
                x = site[0], y = site[1];
            }
            site = sites.pop();
        } else if (circle) (0, $d5PtP.removeBeach)(circle.arc);
        else break;
    }
    (0, $7FT4g.sortCellHalfedges)();
    if (extent) {
        var x0 = +extent[0][0], y0 = +extent[0][1], x1 = +extent[1][0], y1 = +extent[1][1];
        (0, $cMmO9.clipEdges)(x0, y0, x1, y1);
        (0, $7FT4g.clipCells)(x0, y0, x1, y1);
    }
    this.edges = edges;
    this.cells = cells;
    beaches = circles = edges = cells = null;
}
Diagram.prototype = {
    constructor: Diagram,
    polygons: function() {
        var edges = this.edges;
        return this.cells.map(function(cell) {
            var polygon = cell.halfedges.map(function(i) {
                return (0, $7FT4g.cellHalfedgeStart)(cell, edges[i]);
            });
            polygon.data = cell.site.data;
            return polygon;
        });
    },
    triangles: function() {
        var triangles = [], edges = this.edges;
        this.cells.forEach(function(cell, i) {
            if (!(m = (halfedges = cell.halfedges).length)) return;
            var site = cell.site, halfedges, j = -1, m, s0, e1 = edges[halfedges[m - 1]], s1 = e1.left === site ? e1.right : e1.left;
            while(++j < m){
                s0 = s1;
                e1 = edges[halfedges[j]];
                s1 = e1.left === site ? e1.right : e1.left;
                if (s0 && s1 && i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0) triangles.push([
                    site.data,
                    s0.data,
                    s1.data
                ]);
            }
        });
        return triangles;
    },
    links: function() {
        return this.edges.filter(function(edge) {
            return edge.right;
        }).map(function(edge) {
            return {
                source: edge.left.data,
                target: edge.right.data
            };
        });
    },
    find: function(x, y, radius) {
        var that = this, i0, i1 = that._found || 0, n = that.cells.length, cell;
        // Use the previously-found cell, or start with an arbitrary one.
        while(!(cell = that.cells[i1]))if (++i1 >= n) return null;
        var dx = x - cell.site[0], dy = y - cell.site[1], d2 = dx * dx + dy * dy;
        // Traverse the half-edges to find a closer cell, if any.
        do {
            cell = that.cells[i0 = i1], i1 = null;
            cell.halfedges.forEach(function(e) {
                var edge = that.edges[e], v = edge.left;
                if ((v === cell.site || !v) && !(v = edge.right)) return;
                var vx = x - v[0], vy = y - v[1], v2 = vx * vx + vy * vy;
                if (v2 < d2) d2 = v2, i1 = v.index;
            });
        }while (i1 !== null);
        that._found = i0;
        return radius == null || d2 <= radius * radius ? cell.site : null;
    }
};

});
parcelRegister("d5PtP", function(module, exports) {

$parcel$export(module.exports, "removeBeach", () => $9883acdd15c5249b$export$25be321a9b2d3c3c);
$parcel$export(module.exports, "addBeach", () => $9883acdd15c5249b$export$fec167a219592370);

var $4AV21 = parcelRequire("4AV21");

var $7FT4g = parcelRequire("7FT4g");

var $2KU9F = parcelRequire("2KU9F");

var $cMmO9 = parcelRequire("cMmO9");

var $U0nGP = parcelRequire("U0nGP");
var $9883acdd15c5249b$var$beachPool = [];
function $9883acdd15c5249b$var$Beach() {
    (0, $4AV21.RedBlackNode)(this);
    this.edge = this.site = this.circle = null;
}
function $9883acdd15c5249b$var$createBeach(site) {
    var beach = $9883acdd15c5249b$var$beachPool.pop() || new $9883acdd15c5249b$var$Beach;
    beach.site = site;
    return beach;
}
function $9883acdd15c5249b$var$detachBeach(beach) {
    (0, $2KU9F.detachCircle)(beach);
    (0, $U0nGP.beaches).remove(beach);
    $9883acdd15c5249b$var$beachPool.push(beach);
    (0, $4AV21.RedBlackNode)(beach);
}
function $9883acdd15c5249b$export$25be321a9b2d3c3c(beach) {
    var circle = beach.circle, x = circle.x, y = circle.cy, vertex = [
        x,
        y
    ], previous = beach.P, next = beach.N, disappearing = [
        beach
    ];
    $9883acdd15c5249b$var$detachBeach(beach);
    var lArc = previous;
    while(lArc.circle && Math.abs(x - lArc.circle.x) < (0, $U0nGP.epsilon) && Math.abs(y - lArc.circle.cy) < (0, $U0nGP.epsilon)){
        previous = lArc.P;
        disappearing.unshift(lArc);
        $9883acdd15c5249b$var$detachBeach(lArc);
        lArc = previous;
    }
    disappearing.unshift(lArc);
    (0, $2KU9F.detachCircle)(lArc);
    var rArc = next;
    while(rArc.circle && Math.abs(x - rArc.circle.x) < (0, $U0nGP.epsilon) && Math.abs(y - rArc.circle.cy) < (0, $U0nGP.epsilon)){
        next = rArc.N;
        disappearing.push(rArc);
        $9883acdd15c5249b$var$detachBeach(rArc);
        rArc = next;
    }
    disappearing.push(rArc);
    (0, $2KU9F.detachCircle)(rArc);
    var nArcs = disappearing.length, iArc;
    for(iArc = 1; iArc < nArcs; ++iArc){
        rArc = disappearing[iArc];
        lArc = disappearing[iArc - 1];
        (0, $cMmO9.setEdgeEnd)(rArc.edge, lArc.site, rArc.site, vertex);
    }
    lArc = disappearing[0];
    rArc = disappearing[nArcs - 1];
    rArc.edge = (0, $cMmO9.createEdge)(lArc.site, rArc.site, null, vertex);
    (0, $2KU9F.attachCircle)(lArc);
    (0, $2KU9F.attachCircle)(rArc);
}
function $9883acdd15c5249b$export$fec167a219592370(site) {
    var x = site[0], directrix = site[1], lArc, rArc, dxl, dxr, node = (0, $U0nGP.beaches)._;
    while(node){
        dxl = $9883acdd15c5249b$var$leftBreakPoint(node, directrix) - x;
        if (dxl > (0, $U0nGP.epsilon)) node = node.L;
        else {
            dxr = x - $9883acdd15c5249b$var$rightBreakPoint(node, directrix);
            if (dxr > (0, $U0nGP.epsilon)) {
                if (!node.R) {
                    lArc = node;
                    break;
                }
                node = node.R;
            } else {
                if (dxl > -(0, $U0nGP.epsilon)) {
                    lArc = node.P;
                    rArc = node;
                } else if (dxr > -(0, $U0nGP.epsilon)) {
                    lArc = node;
                    rArc = node.N;
                } else lArc = rArc = node;
                break;
            }
        }
    }
    (0, $7FT4g.createCell)(site);
    var newArc = $9883acdd15c5249b$var$createBeach(site);
    (0, $U0nGP.beaches).insert(lArc, newArc);
    if (!lArc && !rArc) return;
    if (lArc === rArc) {
        (0, $2KU9F.detachCircle)(lArc);
        rArc = $9883acdd15c5249b$var$createBeach(lArc.site);
        (0, $U0nGP.beaches).insert(newArc, rArc);
        newArc.edge = rArc.edge = (0, $cMmO9.createEdge)(lArc.site, newArc.site);
        (0, $2KU9F.attachCircle)(lArc);
        (0, $2KU9F.attachCircle)(rArc);
        return;
    }
    if (!rArc) {
        newArc.edge = (0, $cMmO9.createEdge)(lArc.site, newArc.site);
        return;
    }
    // else lArc !== rArc
    (0, $2KU9F.detachCircle)(lArc);
    (0, $2KU9F.detachCircle)(rArc);
    var lSite = lArc.site, ax = lSite[0], ay = lSite[1], bx = site[0] - ax, by = site[1] - ay, rSite = rArc.site, cx = rSite[0] - ax, cy = rSite[1] - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = [
        (cy * hb - by * hc) / d + ax,
        (bx * hc - cx * hb) / d + ay
    ];
    (0, $cMmO9.setEdgeEnd)(rArc.edge, lSite, rSite, vertex);
    newArc.edge = (0, $cMmO9.createEdge)(lSite, site, null, vertex);
    rArc.edge = (0, $cMmO9.createEdge)(site, rSite, null, vertex);
    (0, $2KU9F.attachCircle)(lArc);
    (0, $2KU9F.attachCircle)(rArc);
}
function $9883acdd15c5249b$var$leftBreakPoint(arc, directrix) {
    var site = arc.site, rfocx = site[0], rfocy = site[1], pby2 = rfocy - directrix;
    if (!pby2) return rfocx;
    var lArc = arc.P;
    if (!lArc) return -Infinity;
    site = lArc.site;
    var lfocx = site[0], lfocy = site[1], plby2 = lfocy - directrix;
    if (!plby2) return lfocx;
    var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;
    if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
    return (rfocx + lfocx) / 2;
}
function $9883acdd15c5249b$var$rightBreakPoint(arc, directrix) {
    var rArc = arc.N;
    if (rArc) return $9883acdd15c5249b$var$leftBreakPoint(rArc, directrix);
    var site = arc.site;
    return site[1] === directrix ? site[0] : Infinity;
}

});
parcelRegister("4AV21", function(module, exports) {

$parcel$export(module.exports, "RedBlackNode", () => $3586c386694e9a12$export$5072552a5e64b90a);
$parcel$export(module.exports, "default", () => $3586c386694e9a12$export$2e2bcd8739ae039);
function $3586c386694e9a12$var$RedBlackTree() {
    this._ = null; // root node
}
function $3586c386694e9a12$export$5072552a5e64b90a(node) {
    node.U = node.C = node.L = node.R = node.P = node.N = null; // next node
}
$3586c386694e9a12$var$RedBlackTree.prototype = {
    constructor: $3586c386694e9a12$var$RedBlackTree,
    insert: function(after, node) {
        var parent, grandpa, uncle;
        if (after) {
            node.P = after;
            node.N = after.N;
            if (after.N) after.N.P = node;
            after.N = node;
            if (after.R) {
                after = after.R;
                while(after.L)after = after.L;
                after.L = node;
            } else after.R = node;
            parent = after;
        } else if (this._) {
            after = $3586c386694e9a12$var$RedBlackFirst(this._);
            node.P = null;
            node.N = after;
            after.P = after.L = node;
            parent = after;
        } else {
            node.P = node.N = null;
            this._ = node;
            parent = null;
        }
        node.L = node.R = null;
        node.U = parent;
        node.C = true;
        after = node;
        while(parent && parent.C){
            grandpa = parent.U;
            if (parent === grandpa.L) {
                uncle = grandpa.R;
                if (uncle && uncle.C) {
                    parent.C = uncle.C = false;
                    grandpa.C = true;
                    after = grandpa;
                } else {
                    if (after === parent.R) {
                        $3586c386694e9a12$var$RedBlackRotateLeft(this, parent);
                        after = parent;
                        parent = after.U;
                    }
                    parent.C = false;
                    grandpa.C = true;
                    $3586c386694e9a12$var$RedBlackRotateRight(this, grandpa);
                }
            } else {
                uncle = grandpa.L;
                if (uncle && uncle.C) {
                    parent.C = uncle.C = false;
                    grandpa.C = true;
                    after = grandpa;
                } else {
                    if (after === parent.L) {
                        $3586c386694e9a12$var$RedBlackRotateRight(this, parent);
                        after = parent;
                        parent = after.U;
                    }
                    parent.C = false;
                    grandpa.C = true;
                    $3586c386694e9a12$var$RedBlackRotateLeft(this, grandpa);
                }
            }
            parent = after.U;
        }
        this._.C = false;
    },
    remove: function(node) {
        if (node.N) node.N.P = node.P;
        if (node.P) node.P.N = node.N;
        node.N = node.P = null;
        var parent = node.U, sibling, left = node.L, right = node.R, next, red;
        if (!left) next = right;
        else if (!right) next = left;
        else next = $3586c386694e9a12$var$RedBlackFirst(right);
        if (parent) {
            if (parent.L === node) parent.L = next;
            else parent.R = next;
        } else this._ = next;
        if (left && right) {
            red = next.C;
            next.C = node.C;
            next.L = left;
            left.U = next;
            if (next !== right) {
                parent = next.U;
                next.U = node.U;
                node = next.R;
                parent.L = node;
                next.R = right;
                right.U = next;
            } else {
                next.U = parent;
                parent = next;
                node = next.R;
            }
        } else {
            red = node.C;
            node = next;
        }
        if (node) node.U = parent;
        if (red) return;
        if (node && node.C) {
            node.C = false;
            return;
        }
        do {
            if (node === this._) break;
            if (node === parent.L) {
                sibling = parent.R;
                if (sibling.C) {
                    sibling.C = false;
                    parent.C = true;
                    $3586c386694e9a12$var$RedBlackRotateLeft(this, parent);
                    sibling = parent.R;
                }
                if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
                    if (!sibling.R || !sibling.R.C) {
                        sibling.L.C = false;
                        sibling.C = true;
                        $3586c386694e9a12$var$RedBlackRotateRight(this, sibling);
                        sibling = parent.R;
                    }
                    sibling.C = parent.C;
                    parent.C = sibling.R.C = false;
                    $3586c386694e9a12$var$RedBlackRotateLeft(this, parent);
                    node = this._;
                    break;
                }
            } else {
                sibling = parent.L;
                if (sibling.C) {
                    sibling.C = false;
                    parent.C = true;
                    $3586c386694e9a12$var$RedBlackRotateRight(this, parent);
                    sibling = parent.L;
                }
                if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
                    if (!sibling.L || !sibling.L.C) {
                        sibling.R.C = false;
                        sibling.C = true;
                        $3586c386694e9a12$var$RedBlackRotateLeft(this, sibling);
                        sibling = parent.L;
                    }
                    sibling.C = parent.C;
                    parent.C = sibling.L.C = false;
                    $3586c386694e9a12$var$RedBlackRotateRight(this, parent);
                    node = this._;
                    break;
                }
            }
            sibling.C = true;
            node = parent;
            parent = parent.U;
        }while (!node.C);
        if (node) node.C = false;
    }
};
function $3586c386694e9a12$var$RedBlackRotateLeft(tree, node) {
    var p = node, q = node.R, parent = p.U;
    if (parent) {
        if (parent.L === p) parent.L = q;
        else parent.R = q;
    } else tree._ = q;
    q.U = parent;
    p.U = q;
    p.R = q.L;
    if (p.R) p.R.U = p;
    q.L = p;
}
function $3586c386694e9a12$var$RedBlackRotateRight(tree, node) {
    var p = node, q = node.L, parent = p.U;
    if (parent) {
        if (parent.L === p) parent.L = q;
        else parent.R = q;
    } else tree._ = q;
    q.U = parent;
    p.U = q;
    p.L = q.R;
    if (p.L) p.L.U = p;
    q.R = p;
}
function $3586c386694e9a12$var$RedBlackFirst(node) {
    while(node.L)node = node.L;
    return node;
}
var $3586c386694e9a12$export$2e2bcd8739ae039 = $3586c386694e9a12$var$RedBlackTree;

});

parcelRegister("7FT4g", function(module, exports) {

$parcel$export(module.exports, "createCell", () => $59671411ad562d9e$export$3cb21b6b1233300e);
$parcel$export(module.exports, "cellHalfedgeStart", () => $59671411ad562d9e$export$67c16aa967774be);
$parcel$export(module.exports, "sortCellHalfedges", () => $59671411ad562d9e$export$41888d88cbc31210);
$parcel$export(module.exports, "clipCells", () => $59671411ad562d9e$export$cdcebd68073bc3f);

var $cMmO9 = parcelRequire("cMmO9");

var $U0nGP = parcelRequire("U0nGP");
function $59671411ad562d9e$export$3cb21b6b1233300e(site) {
    return (0, $U0nGP.cells)[site.index] = {
        site: site,
        halfedges: []
    };
}
function $59671411ad562d9e$var$cellHalfedgeAngle(cell, edge) {
    var site = cell.site, va = edge.left, vb = edge.right;
    if (site === vb) vb = va, va = site;
    if (vb) return Math.atan2(vb[1] - va[1], vb[0] - va[0]);
    if (site === va) va = edge[1], vb = edge[0];
    else va = edge[0], vb = edge[1];
    return Math.atan2(va[0] - vb[0], vb[1] - va[1]);
}
function $59671411ad562d9e$export$67c16aa967774be(cell, edge) {
    return edge[+(edge.left !== cell.site)];
}
function $59671411ad562d9e$export$bf8e581ba65a00a5(cell, edge) {
    return edge[+(edge.left === cell.site)];
}
function $59671411ad562d9e$export$41888d88cbc31210() {
    for(var i = 0, n = (0, $U0nGP.cells).length, cell, halfedges, j, m; i < n; ++i)if ((cell = (0, $U0nGP.cells)[i]) && (m = (halfedges = cell.halfedges).length)) {
        var index = new Array(m), array = new Array(m);
        for(j = 0; j < m; ++j)index[j] = j, array[j] = $59671411ad562d9e$var$cellHalfedgeAngle(cell, (0, $U0nGP.edges)[halfedges[j]]);
        index.sort(function(i, j) {
            return array[j] - array[i];
        });
        for(j = 0; j < m; ++j)array[j] = halfedges[index[j]];
        for(j = 0; j < m; ++j)halfedges[j] = array[j];
    }
}
function $59671411ad562d9e$export$cdcebd68073bc3f(x0, y0, x1, y1) {
    var nCells = (0, $U0nGP.cells).length, iCell, cell, site, iHalfedge, halfedges, nHalfedges, start, startX, startY, end, endX, endY, cover = true;
    for(iCell = 0; iCell < nCells; ++iCell)if (cell = (0, $U0nGP.cells)[iCell]) {
        site = cell.site;
        halfedges = cell.halfedges;
        iHalfedge = halfedges.length;
        // Remove any dangling clipped edges.
        while(iHalfedge--)if (!(0, $U0nGP.edges)[halfedges[iHalfedge]]) halfedges.splice(iHalfedge, 1);
        // Insert any border edges as necessary.
        iHalfedge = 0, nHalfedges = halfedges.length;
        while(iHalfedge < nHalfedges){
            end = $59671411ad562d9e$export$bf8e581ba65a00a5(cell, (0, $U0nGP.edges)[halfedges[iHalfedge]]), endX = end[0], endY = end[1];
            start = $59671411ad562d9e$export$67c16aa967774be(cell, (0, $U0nGP.edges)[halfedges[++iHalfedge % nHalfedges]]), startX = start[0], startY = start[1];
            if (Math.abs(endX - startX) > (0, $U0nGP.epsilon) || Math.abs(endY - startY) > (0, $U0nGP.epsilon)) {
                halfedges.splice(iHalfedge, 0, (0, $U0nGP.edges).push((0, $cMmO9.createBorderEdge)(site, end, Math.abs(endX - x0) < (0, $U0nGP.epsilon) && y1 - endY > (0, $U0nGP.epsilon) ? [
                    x0,
                    Math.abs(startX - x0) < (0, $U0nGP.epsilon) ? startY : y1
                ] : Math.abs(endY - y1) < (0, $U0nGP.epsilon) && x1 - endX > (0, $U0nGP.epsilon) ? [
                    Math.abs(startY - y1) < (0, $U0nGP.epsilon) ? startX : x1,
                    y1
                ] : Math.abs(endX - x1) < (0, $U0nGP.epsilon) && endY - y0 > (0, $U0nGP.epsilon) ? [
                    x1,
                    Math.abs(startX - x1) < (0, $U0nGP.epsilon) ? startY : y0
                ] : Math.abs(endY - y0) < (0, $U0nGP.epsilon) && endX - x0 > (0, $U0nGP.epsilon) ? [
                    Math.abs(startY - y0) < (0, $U0nGP.epsilon) ? startX : x0,
                    y0
                ] : null)) - 1);
                ++nHalfedges;
            }
        }
        if (nHalfedges) cover = false;
    }
    // If there weren’t any edges, have the closest site cover the extent.
    // It doesn’t matter which corner of the extent we measure!
    if (cover) {
        var dx, dy, d2, dc = Infinity;
        for(iCell = 0, cover = null; iCell < nCells; ++iCell)if (cell = (0, $U0nGP.cells)[iCell]) {
            site = cell.site;
            dx = site[0] - x0;
            dy = site[1] - y0;
            d2 = dx * dx + dy * dy;
            if (d2 < dc) dc = d2, cover = cell;
        }
        if (cover) {
            var v00 = [
                x0,
                y0
            ], v01 = [
                x0,
                y1
            ], v11 = [
                x1,
                y1
            ], v10 = [
                x1,
                y0
            ];
            cover.halfedges.push((0, $U0nGP.edges).push((0, $cMmO9.createBorderEdge)(site = cover.site, v00, v01)) - 1, (0, $U0nGP.edges).push((0, $cMmO9.createBorderEdge)(site, v01, v11)) - 1, (0, $U0nGP.edges).push((0, $cMmO9.createBorderEdge)(site, v11, v10)) - 1, (0, $U0nGP.edges).push((0, $cMmO9.createBorderEdge)(site, v10, v00)) - 1);
        }
    }
    // Lastly delete any cells with no edges; these were entirely clipped.
    for(iCell = 0; iCell < nCells; ++iCell){
        if (cell = (0, $U0nGP.cells)[iCell]) {
            if (!cell.halfedges.length) delete (0, $U0nGP.cells)[iCell];
        }
    }
}

});
parcelRegister("cMmO9", function(module, exports) {

$parcel$export(module.exports, "createEdge", () => $94dba8e435cf121d$export$bdd941b9b8806569);
$parcel$export(module.exports, "setEdgeEnd", () => $94dba8e435cf121d$export$9e883caea829cb44);
$parcel$export(module.exports, "createBorderEdge", () => $94dba8e435cf121d$export$681cc0bbec712be1);
$parcel$export(module.exports, "clipEdges", () => $94dba8e435cf121d$export$db4502aa9c1617af);

var $U0nGP = parcelRequire("U0nGP");
function $94dba8e435cf121d$export$bdd941b9b8806569(left, right, v0, v1) {
    var edge = [
        null,
        null
    ], index = (0, $U0nGP.edges).push(edge) - 1;
    edge.left = left;
    edge.right = right;
    if (v0) $94dba8e435cf121d$export$9e883caea829cb44(edge, left, right, v0);
    if (v1) $94dba8e435cf121d$export$9e883caea829cb44(edge, right, left, v1);
    (0, $U0nGP.cells)[left.index].halfedges.push(index);
    (0, $U0nGP.cells)[right.index].halfedges.push(index);
    return edge;
}
function $94dba8e435cf121d$export$681cc0bbec712be1(left, v0, v1) {
    var edge = [
        v0,
        v1
    ];
    edge.left = left;
    return edge;
}
function $94dba8e435cf121d$export$9e883caea829cb44(edge, left, right, vertex) {
    if (!edge[0] && !edge[1]) {
        edge[0] = vertex;
        edge.left = left;
        edge.right = right;
    } else if (edge.left === right) edge[1] = vertex;
    else edge[0] = vertex;
}
// Liang–Barsky line clipping.
function $94dba8e435cf121d$var$clipEdge(edge, x0, y0, x1, y1) {
    var a = edge[0], b = edge[1], ax = a[0], ay = a[1], bx = b[0], by = b[1], t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
    r = x0 - ax;
    if (!dx && r > 0) return;
    r /= dx;
    if (dx < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
    } else if (dx > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
    }
    r = x1 - ax;
    if (!dx && r < 0) return;
    r /= dx;
    if (dx < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
    } else if (dx > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
    }
    r = y0 - ay;
    if (!dy && r > 0) return;
    r /= dy;
    if (dy < 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
    } else if (dy > 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
    }
    r = y1 - ay;
    if (!dy && r < 0) return;
    r /= dy;
    if (dy < 0) {
        if (r > t1) return;
        if (r > t0) t0 = r;
    } else if (dy > 0) {
        if (r < t0) return;
        if (r < t1) t1 = r;
    }
    if (!(t0 > 0) && !(t1 < 1)) return true; // TODO Better check?
    if (t0 > 0) edge[0] = [
        ax + t0 * dx,
        ay + t0 * dy
    ];
    if (t1 < 1) edge[1] = [
        ax + t1 * dx,
        ay + t1 * dy
    ];
    return true;
}
function $94dba8e435cf121d$var$connectEdge(edge, x0, y0, x1, y1) {
    var v1 = edge[1];
    if (v1) return true;
    var v0 = edge[0], left = edge.left, right = edge.right, lx = left[0], ly = left[1], rx = right[0], ry = right[1], fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb;
    if (ry === ly) {
        if (fx < x0 || fx >= x1) return;
        if (lx > rx) {
            if (!v0) v0 = [
                fx,
                y0
            ];
            else if (v0[1] >= y1) return;
            v1 = [
                fx,
                y1
            ];
        } else {
            if (!v0) v0 = [
                fx,
                y1
            ];
            else if (v0[1] < y0) return;
            v1 = [
                fx,
                y0
            ];
        }
    } else {
        fm = (lx - rx) / (ry - ly);
        fb = fy - fm * fx;
        if (fm < -1 || fm > 1) {
            if (lx > rx) {
                if (!v0) v0 = [
                    (y0 - fb) / fm,
                    y0
                ];
                else if (v0[1] >= y1) return;
                v1 = [
                    (y1 - fb) / fm,
                    y1
                ];
            } else {
                if (!v0) v0 = [
                    (y1 - fb) / fm,
                    y1
                ];
                else if (v0[1] < y0) return;
                v1 = [
                    (y0 - fb) / fm,
                    y0
                ];
            }
        } else if (ly < ry) {
            if (!v0) v0 = [
                x0,
                fm * x0 + fb
            ];
            else if (v0[0] >= x1) return;
            v1 = [
                x1,
                fm * x1 + fb
            ];
        } else {
            if (!v0) v0 = [
                x1,
                fm * x1 + fb
            ];
            else if (v0[0] < x0) return;
            v1 = [
                x0,
                fm * x0 + fb
            ];
        }
    }
    edge[0] = v0;
    edge[1] = v1;
    return true;
}
function $94dba8e435cf121d$export$db4502aa9c1617af(x0, y0, x1, y1) {
    var i = (0, $U0nGP.edges).length, edge;
    while(i--)if (!$94dba8e435cf121d$var$connectEdge(edge = (0, $U0nGP.edges)[i], x0, y0, x1, y1) || !$94dba8e435cf121d$var$clipEdge(edge, x0, y0, x1, y1) || !(Math.abs(edge[0][0] - edge[1][0]) > (0, $U0nGP.epsilon) || Math.abs(edge[0][1] - edge[1][1]) > (0, $U0nGP.epsilon))) delete (0, $U0nGP.edges)[i];
}

});


parcelRegister("2KU9F", function(module, exports) {

$parcel$export(module.exports, "firstCircle", () => $201b6fd6986847dc$export$2ca650a30b282a37);
$parcel$export(module.exports, "attachCircle", () => $201b6fd6986847dc$export$2a19333f6373b7a2);
$parcel$export(module.exports, "detachCircle", () => $201b6fd6986847dc$export$f0bd50ff687673c1);

var $4AV21 = parcelRequire("4AV21");

var $U0nGP = parcelRequire("U0nGP");
var $201b6fd6986847dc$var$circlePool = [];
var $201b6fd6986847dc$export$2ca650a30b282a37;
function $201b6fd6986847dc$var$Circle() {
    (0, $4AV21.RedBlackNode)(this);
    this.x = this.y = this.arc = this.site = this.cy = null;
}
function $201b6fd6986847dc$export$2a19333f6373b7a2(arc) {
    var lArc = arc.P, rArc = arc.N;
    if (!lArc || !rArc) return;
    var lSite = lArc.site, cSite = arc.site, rSite = rArc.site;
    if (lSite === rSite) return;
    var bx = cSite[0], by = cSite[1], ax = lSite[0] - bx, ay = lSite[1] - by, cx = rSite[0] - bx, cy = rSite[1] - by;
    var d = 2 * (ax * cy - ay * cx);
    if (d >= -(0, $U0nGP.epsilon2)) return;
    var ha = ax * ax + ay * ay, hc = cx * cx + cy * cy, x = (cy * ha - ay * hc) / d, y = (ax * hc - cx * ha) / d;
    var circle = $201b6fd6986847dc$var$circlePool.pop() || new $201b6fd6986847dc$var$Circle;
    circle.arc = arc;
    circle.site = cSite;
    circle.x = x + bx;
    circle.y = (circle.cy = y + by) + Math.sqrt(x * x + y * y); // y bottom
    arc.circle = circle;
    var before = null, node = (0, $U0nGP.circles)._;
    while(node){
        if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
            if (node.L) node = node.L;
            else {
                before = node.P;
                break;
            }
        } else if (node.R) node = node.R;
        else {
            before = node;
            break;
        }
    }
    (0, $U0nGP.circles).insert(before, circle);
    if (!before) $201b6fd6986847dc$export$2ca650a30b282a37 = circle;
}
function $201b6fd6986847dc$export$f0bd50ff687673c1(arc) {
    var circle = arc.circle;
    if (circle) {
        if (!circle.P) $201b6fd6986847dc$export$2ca650a30b282a37 = circle.N;
        (0, $U0nGP.circles).remove(circle);
        $201b6fd6986847dc$var$circlePool.push(circle);
        (0, $4AV21.RedBlackNode)(circle);
        arc.circle = null;
    }
}

});





parcelRegister("D6zVi", function(module, exports) {

$parcel$export(module.exports, "zoom", () => (parcelRequire("j8tUm")).default);
$parcel$export(module.exports, "zoomTransform", () => (parcelRequire("et1tl")).default);
$parcel$export(module.exports, "zoomIdentity", () => (parcelRequire("et1tl")).identity);

var $j8tUm = parcelRequire("j8tUm");

var $et1tl = parcelRequire("et1tl");

});
parcelRegister("j8tUm", function(module, exports) {

$parcel$export(module.exports, "default", () => $dee5f6c70d3deb50$export$2e2bcd8739ae039);

var $iBYE9 = parcelRequire("iBYE9");

var $8stEL = parcelRequire("8stEL");

var $8JKMb = parcelRequire("8JKMb");

var $bVR25 = parcelRequire("bVR25");
var $8mNB9 = parcelRequire("8mNB9");
var $gcg15 = parcelRequire("gcg15");
var $g98YB = parcelRequire("g98YB");
parcelRequire("6Ur3E");
var $ejxBi = parcelRequire("ejxBi");

var $lvayi = parcelRequire("lvayi");

var $8WwbH = parcelRequire("8WwbH");

var $et1tl = parcelRequire("et1tl");

var $ksTzH = parcelRequire("ksTzH");
// Ignore right-click, since that should open the context menu.
function $dee5f6c70d3deb50$var$defaultFilter() {
    return !(0, $bVR25.event).ctrlKey && !(0, $bVR25.event).button;
}
function $dee5f6c70d3deb50$var$defaultExtent() {
    var e = this;
    if (e instanceof SVGElement) {
        e = e.ownerSVGElement || e;
        if (e.hasAttribute("viewBox")) {
            e = e.viewBox.baseVal;
            return [
                [
                    e.x,
                    e.y
                ],
                [
                    e.x + e.width,
                    e.y + e.height
                ]
            ];
        }
        return [
            [
                0,
                0
            ],
            [
                e.width.baseVal.value,
                e.height.baseVal.value
            ]
        ];
    }
    return [
        [
            0,
            0
        ],
        [
            e.clientWidth,
            e.clientHeight
        ]
    ];
}
function $dee5f6c70d3deb50$var$defaultTransform() {
    return this.__zoom || (0, $et1tl.identity);
}
function $dee5f6c70d3deb50$var$defaultWheelDelta() {
    return -(0, $bVR25.event).deltaY * ((0, $bVR25.event).deltaMode === 1 ? 0.05 : (0, $bVR25.event).deltaMode ? 1 : 0.002);
}
function $dee5f6c70d3deb50$var$defaultTouchable() {
    return navigator.maxTouchPoints || "ontouchstart" in this;
}
function $dee5f6c70d3deb50$var$defaultConstrain(transform, extent, translateExtent) {
    var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
    return transform.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
}
function $dee5f6c70d3deb50$export$2e2bcd8739ae039() {
    var filter = $dee5f6c70d3deb50$var$defaultFilter, extent = $dee5f6c70d3deb50$var$defaultExtent, constrain = $dee5f6c70d3deb50$var$defaultConstrain, wheelDelta = $dee5f6c70d3deb50$var$defaultWheelDelta, touchable = $dee5f6c70d3deb50$var$defaultTouchable, scaleExtent = [
        0,
        Infinity
    ], translateExtent = [
        [
            -Infinity,
            -Infinity
        ],
        [
            Infinity,
            Infinity
        ]
    ], duration = 250, interpolate = (0, $8JKMb.default), listeners = (0, $iBYE9.default)("start", "zoom", "end"), touchstarting, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0;
    function zoom(selection) {
        selection.property("__zoom", $dee5f6c70d3deb50$var$defaultTransform).on("wheel.zoom", wheeled).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }
    zoom.transform = function(collection, transform, point) {
        var selection = collection.selection ? collection.selection() : collection;
        selection.property("__zoom", $dee5f6c70d3deb50$var$defaultTransform);
        if (collection !== selection) schedule(collection, transform, point);
        else selection.interrupt().each(function() {
            gesture(this, arguments).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
        });
    };
    zoom.scaleBy = function(selection, k, p) {
        zoom.scaleTo(selection, function() {
            var k0 = this.__zoom.k, k1 = typeof k === "function" ? k.apply(this, arguments) : k;
            return k0 * k1;
        }, p);
    };
    zoom.scaleTo = function(selection, k, p) {
        zoom.transform(selection, function() {
            var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
            return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
        }, p);
    };
    zoom.translateBy = function(selection, x, y) {
        zoom.transform(selection, function() {
            return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent.apply(this, arguments), translateExtent);
        });
    };
    zoom.translateTo = function(selection, x, y, p) {
        zoom.transform(selection, function() {
            var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
            return constrain((0, $et1tl.identity).translate(p0[0], p0[1]).scale(t.k).translate(typeof x === "function" ? -x.apply(this, arguments) : -x, typeof y === "function" ? -y.apply(this, arguments) : -y), e, translateExtent);
        }, p);
    };
    function scale(transform, k) {
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
        return k === transform.k ? transform : new (0, $et1tl.Transform)(k, transform.x, transform.y);
    }
    function translate(transform, p0, p1) {
        var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
        return x === transform.x && y === transform.y ? transform : new (0, $et1tl.Transform)(transform.k, x, y);
    }
    function centroid(extent) {
        return [
            (+extent[0][0] + +extent[1][0]) / 2,
            (+extent[0][1] + +extent[1][1]) / 2
        ];
    }
    function schedule(transition, transform, point) {
        transition.on("start.zoom", function() {
            gesture(this, arguments).start();
        }).on("interrupt.zoom end.zoom", function() {
            gesture(this, arguments).end();
        }).tween("zoom", function() {
            var that = this, args = arguments, g = gesture(that, args), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform === "function" ? transform.apply(that, args) : transform, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
            return function(t) {
                if (t === 1) t = b; // Avoid rounding error on end.
                else {
                    var l = i(t), k = w / l[2];
                    t = new (0, $et1tl.Transform)(k, p[0] - l[0] * k, p[1] - l[1] * k);
                }
                g.zoom(null, t);
            };
        });
    }
    function gesture(that, args, clean) {
        return !clean && that.__zooming || new Gesture(that, args);
    }
    function Gesture(that, args) {
        this.that = that;
        this.args = args;
        this.active = 0;
        this.extent = extent.apply(that, args);
        this.taps = 0;
    }
    Gesture.prototype = {
        start: function() {
            if (++this.active === 1) {
                this.that.__zooming = this;
                this.emit("start");
            }
            return this;
        },
        zoom: function(key, transform) {
            if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
            if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
            if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
            this.that.__zoom = transform;
            this.emit("zoom");
            return this;
        },
        end: function() {
            if (--this.active === 0) {
                delete this.that.__zooming;
                this.emit("end");
            }
            return this;
        },
        emit: function(type) {
            (0, $bVR25.customEvent)(new (0, $8WwbH.default)(zoom, type, this.that.__zoom), listeners.apply, listeners, [
                type,
                this.that,
                this.args
            ]);
        }
    };
    function wheeled() {
        if (!filter.apply(this, arguments)) return;
        var g = gesture(this, arguments), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = (0, $8mNB9.default)(this);
        // If the mouse is in the same location as before, reuse it.
        // If there were recent wheel events, reset the wheel idle timeout.
        if (g.wheel) {
            if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) g.mouse[1] = t.invert(g.mouse[0] = p);
            clearTimeout(g.wheel);
        } else if (t.k === k) return;
        else {
            g.mouse = [
                p,
                t.invert(p)
            ];
            (0, $ejxBi.default)(this);
            g.start();
        }
        (0, $ksTzH.default)();
        g.wheel = setTimeout(wheelidled, wheelDelay);
        g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
        function wheelidled() {
            g.wheel = null;
            g.end();
        }
    }
    function mousedowned() {
        if (touchending || !filter.apply(this, arguments)) return;
        var g = gesture(this, arguments, true), v = (0, $gcg15.default)((0, $bVR25.event).view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = (0, $8mNB9.default)(this), x0 = (0, $bVR25.event).clientX, y0 = (0, $bVR25.event).clientY;
        (0, $8stEL.default)((0, $bVR25.event).view);
        (0, $ksTzH.nopropagation)();
        g.mouse = [
            p,
            this.__zoom.invert(p)
        ];
        (0, $ejxBi.default)(this);
        g.start();
        function mousemoved() {
            (0, $ksTzH.default)();
            if (!g.moved) {
                var dx = (0, $bVR25.event).clientX - x0, dy = (0, $bVR25.event).clientY - y0;
                g.moved = dx * dx + dy * dy > clickDistance2;
            }
            g.zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = (0, $8mNB9.default)(g.that), g.mouse[1]), g.extent, translateExtent));
        }
        function mouseupped() {
            v.on("mousemove.zoom mouseup.zoom", null);
            (0, $8stEL.yesdrag)((0, $bVR25.event).view, g.moved);
            (0, $ksTzH.default)();
            g.end();
        }
    }
    function dblclicked() {
        if (!filter.apply(this, arguments)) return;
        var t0 = this.__zoom, p0 = (0, $8mNB9.default)(this), p1 = t0.invert(p0), k1 = t0.k * ((0, $bVR25.event).shiftKey ? 0.5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, arguments), translateExtent);
        (0, $ksTzH.default)();
        if (duration > 0) (0, $gcg15.default)(this).transition().duration(duration).call(schedule, t1, p0);
        else (0, $gcg15.default)(this).call(zoom.transform, t1);
    }
    function touchstarted() {
        if (!filter.apply(this, arguments)) return;
        var touches = (0, $bVR25.event).touches, n = touches.length, g = gesture(this, arguments, (0, $bVR25.event).changedTouches.length === n), started, i, t, p;
        (0, $ksTzH.nopropagation)();
        for(i = 0; i < n; ++i){
            t = touches[i], p = (0, $g98YB.default)(this, touches, t.identifier);
            p = [
                p,
                this.__zoom.invert(p),
                t.identifier
            ];
            if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
            else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
        }
        if (touchstarting) touchstarting = clearTimeout(touchstarting);
        if (started) {
            if (g.taps < 2) touchstarting = setTimeout(function() {
                touchstarting = null;
            }, touchDelay);
            (0, $ejxBi.default)(this);
            g.start();
        }
    }
    function touchmoved() {
        if (!this.__zooming) return;
        var g = gesture(this, arguments), touches = (0, $bVR25.event).changedTouches, n = touches.length, i, t, p, l;
        (0, $ksTzH.default)();
        if (touchstarting) touchstarting = clearTimeout(touchstarting);
        g.taps = 0;
        for(i = 0; i < n; ++i){
            t = touches[i], p = (0, $g98YB.default)(this, touches, t.identifier);
            if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
            else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
        }
        t = g.that.__zoom;
        if (g.touch1) {
            var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
            t = scale(t, Math.sqrt(dp / dl));
            p = [
                (p0[0] + p1[0]) / 2,
                (p0[1] + p1[1]) / 2
            ];
            l = [
                (l0[0] + l1[0]) / 2,
                (l0[1] + l1[1]) / 2
            ];
        } else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
        else return;
        g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
    }
    function touchended() {
        if (!this.__zooming) return;
        var g = gesture(this, arguments), touches = (0, $bVR25.event).changedTouches, n = touches.length, i, t;
        (0, $ksTzH.nopropagation)();
        if (touchending) clearTimeout(touchending);
        touchending = setTimeout(function() {
            touchending = null;
        }, touchDelay);
        for(i = 0; i < n; ++i){
            t = touches[i];
            if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
            else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
        }
        if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
        if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
        else {
            g.end();
            // If this was a dbltap, reroute to the (optional) dblclick.zoom handler.
            if (g.taps === 2) {
                var p = (0, $gcg15.default)(this).on("dblclick.zoom");
                if (p) p.apply(this, arguments);
            }
        }
    }
    zoom.wheelDelta = function(_) {
        return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : (0, $lvayi.default)(+_), zoom) : wheelDelta;
    };
    zoom.filter = function(_) {
        return arguments.length ? (filter = typeof _ === "function" ? _ : (0, $lvayi.default)(!!_), zoom) : filter;
    };
    zoom.touchable = function(_) {
        return arguments.length ? (touchable = typeof _ === "function" ? _ : (0, $lvayi.default)(!!_), zoom) : touchable;
    };
    zoom.extent = function(_) {
        return arguments.length ? (extent = typeof _ === "function" ? _ : (0, $lvayi.default)([
            [
                +_[0][0],
                +_[0][1]
            ],
            [
                +_[1][0],
                +_[1][1]
            ]
        ]), zoom) : extent;
    };
    zoom.scaleExtent = function(_) {
        return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [
            scaleExtent[0],
            scaleExtent[1]
        ];
    };
    zoom.translateExtent = function(_) {
        return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [
            [
                translateExtent[0][0],
                translateExtent[0][1]
            ],
            [
                translateExtent[1][0],
                translateExtent[1][1]
            ]
        ];
    };
    zoom.constrain = function(_) {
        return arguments.length ? (constrain = _, zoom) : constrain;
    };
    zoom.duration = function(_) {
        return arguments.length ? (duration = +_, zoom) : duration;
    };
    zoom.interpolate = function(_) {
        return arguments.length ? (interpolate = _, zoom) : interpolate;
    };
    zoom.on = function() {
        var value = listeners.on.apply(listeners, arguments);
        return value === listeners ? zoom : value;
    };
    zoom.clickDistance = function(_) {
        return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
    };
    return zoom;
}

});
parcelRegister("lvayi", function(module, exports) {

$parcel$export(module.exports, "default", () => $fa74adaca3766dbb$export$2e2bcd8739ae039);
function $fa74adaca3766dbb$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}

});

parcelRegister("8WwbH", function(module, exports) {

$parcel$export(module.exports, "default", () => $682cb54b0a19f241$export$2e2bcd8739ae039);
function $682cb54b0a19f241$export$2e2bcd8739ae039(target, type, transform) {
    this.target = target;
    this.type = type;
    this.transform = transform;
}

});

parcelRegister("et1tl", function(module, exports) {

$parcel$export(module.exports, "Transform", () => $a884ea7931c4bdb4$export$563a914cafbdc389);
$parcel$export(module.exports, "identity", () => $a884ea7931c4bdb4$export$f0954fd7d5368655);
$parcel$export(module.exports, "default", () => $a884ea7931c4bdb4$export$2e2bcd8739ae039);
function $a884ea7931c4bdb4$export$563a914cafbdc389(k, x, y) {
    this.k = k;
    this.x = x;
    this.y = y;
}
$a884ea7931c4bdb4$export$563a914cafbdc389.prototype = {
    constructor: $a884ea7931c4bdb4$export$563a914cafbdc389,
    scale: function(k) {
        return k === 1 ? this : new $a884ea7931c4bdb4$export$563a914cafbdc389(this.k * k, this.x, this.y);
    },
    translate: function(x, y) {
        return x === 0 & y === 0 ? this : new $a884ea7931c4bdb4$export$563a914cafbdc389(this.k, this.x + this.k * x, this.y + this.k * y);
    },
    apply: function(point) {
        return [
            point[0] * this.k + this.x,
            point[1] * this.k + this.y
        ];
    },
    applyX: function(x) {
        return x * this.k + this.x;
    },
    applyY: function(y) {
        return y * this.k + this.y;
    },
    invert: function(location) {
        return [
            (location[0] - this.x) / this.k,
            (location[1] - this.y) / this.k
        ];
    },
    invertX: function(x) {
        return (x - this.x) / this.k;
    },
    invertY: function(y) {
        return (y - this.y) / this.k;
    },
    rescaleX: function(x) {
        return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
    },
    rescaleY: function(y) {
        return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
    },
    toString: function() {
        return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    }
};
var $a884ea7931c4bdb4$export$f0954fd7d5368655 = new $a884ea7931c4bdb4$export$563a914cafbdc389(1, 0, 0);
$a884ea7931c4bdb4$export$2e2bcd8739ae039.prototype = $a884ea7931c4bdb4$export$563a914cafbdc389.prototype;
function $a884ea7931c4bdb4$export$2e2bcd8739ae039(node) {
    while(!node.__zoom)if (!(node = node.parentNode)) return $a884ea7931c4bdb4$export$f0954fd7d5368655;
    return node.__zoom;
}

});

parcelRegister("ksTzH", function(module, exports) {

$parcel$export(module.exports, "nopropagation", () => $ee6188251e6d5787$export$2e2561858db9bf47);
$parcel$export(module.exports, "default", () => $ee6188251e6d5787$export$2e2bcd8739ae039);

var $bVR25 = parcelRequire("bVR25");
function $ee6188251e6d5787$export$2e2561858db9bf47() {
    (0, $bVR25.event).stopImmediatePropagation();
}
function $ee6188251e6d5787$export$2e2bcd8739ae039() {
    (0, $bVR25.event).preventDefault();
    (0, $bVR25.event).stopImmediatePropagation();
}

});




parcelRegister("jBxzP", function(module, exports) {

$parcel$export(module.exports, "jch", () => (parcelRequire("5oGhq")).default);
$parcel$export(module.exports, "jab", () => (parcelRequire("5oGhq")).jab);
$parcel$export(module.exports, "interpolateJab", () => (parcelRequire("5oGhq")).interpolateJab);

var $5oGhq = parcelRequire("5oGhq");

});
parcelRegister("5oGhq", function(module, exports) {

$parcel$export(module.exports, "default", () => $3edffd8db0ed9bc1$export$2e2bcd8739ae039);
$parcel$export(module.exports, "jab", () => $3edffd8db0ed9bc1$export$812fb7000693874);
$parcel$export(module.exports, "interpolateJab", () => $3edffd8db0ed9bc1$export$60329fce869d0ad7);
// Implementation based on Billy Bigg's CIECAM02 implementation in C
// (http://scanline.ca/ciecam02/)
// and information on Wikipedia (https://en.wikipedia.org/wiki/CIECAM02)
//
// IMPORTANT NOTE : uses XYZ [0,100] not [0,1]
//
// When transforming colors into CIECAM02 space we use Luo et al.'s uniform
// color space transform; however, we also provide commented out transform
// coefficients for the long-distance and short-distance CIECAM02 transforms,
// should others desire to use these alternative perceptually uniform
// approximation spaces instead.
//
// Another important note is that we provide the full range of CIECAM02 color
// values in the JCh constructor, but the d3 color object stores only lightness
// (J), chroma (C), and hue (h).
//

var $abtVK = parcelRequire("abtVK");

var $ozXaB = parcelRequire("ozXaB");
// used for brighter and darker functions
// Kn is completely arbitrary and was picked originally by Mike Bostock to make
// the Lab brighter and darker functions behave similarly to the RGB equivalents
// in d3-color. We copy and paste the value directly and encourage others to
// add a more systematically chosen value.
var $3edffd8db0ed9bc1$var$Kn = 18;
// Conversion functions
function $3edffd8db0ed9bc1$var$rgb2xyz(r, g, b) {
    r = r / 255.0;
    g = g / 255.0;
    b = b / 255.0;
    // assume sRGB
    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
    // Convert to XYZ in [0,100] rather than [0,1]
    return {
        x: (r * 0.4124 + g * 0.3576 + b * 0.1805) * 100.0,
        y: (r * 0.2126 + g * 0.7152 + b * 0.0722) * 100.0,
        z: (r * 0.0193 + g * 0.1192 + b * 0.9505) * 100.0
    };
}
function $3edffd8db0ed9bc1$var$xyz2rgb(x, y, z) {
    x = x / 100.0;
    y = y / 100.0;
    z = z / 100.0;
    var preR = x * 3.2404542 + y * -1.5371385 - z * 0.4985314, preG = x * -0.969266 + y * 1.8760108 + z * 0.0415560, preB = x * 0.0556434 + y * -0.2040259 + z * 1.0572252;
    function toRGB(c) {
        return 255.0 * (c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055);
    }
    return {
        r: toRGB(preR),
        g: toRGB(preG),
        b: toRGB(preB)
    };
}
function $3edffd8db0ed9bc1$var$xyz2cat02(x, y, z) {
    var l = 0.7328 * x + 0.4296 * y - 0.1624 * z, m = -0.7036 * x + 1.6975 * y + 0.0061 * z, s = 0.0030 * x + 0.0136 * y + 0.9834 * z;
    return {
        l: l,
        m: m,
        s: s
    };
}
function $3edffd8db0ed9bc1$var$cat022xyz(l, m, s) {
    var x = 1.096124 * l - 0.278869 * m + 0.182745 * s, y = 0.454369 * l + 0.473533 * m + 0.072098 * s, z = -0.009628 * l - 0.005698 * m + 1.015326 * s;
    return {
        x: x,
        y: y,
        z: z
    };
}
function $3edffd8db0ed9bc1$var$cat022hpe(l, m, s) {
    var lh = 0.7409792 * l + 0.2180250 * m + 0.0410058 * s, mh = 0.2853532 * l + 0.6242014 * m + 0.0904454 * s, sh = -0.009628 * l - 0.0056980 * m + 1.0153260 * s;
    return {
        lh: lh,
        mh: mh,
        sh: sh
    };
}
function $3edffd8db0ed9bc1$var$hpe2xyz(l, m, s) {
    var x = 1.910197 * l - 1.112124 * m + 0.201908 * s, y = 0.370950 * l + 0.629054 * m - 0.000008 * s, z = s;
    return {
        x: x,
        y: y,
        z: z
    };
}
function $3edffd8db0ed9bc1$var$nonlinearAdaptation(coneResponse, fl) {
    var p = Math.pow(fl * coneResponse / 100.0, 0.42);
    return 400.0 * p / (27.13 + p) + 0.1;
}
function $3edffd8db0ed9bc1$var$inverseNonlinearAdaptation(coneResponse, fl) {
    return 100.0 / fl * Math.pow(27.13 * Math.abs(coneResponse - 0.1) / (400.0 - Math.abs(coneResponse - 0.1)), 1.0 / 0.42);
}
// CIECAM02_VC viewing conditions; assumes average viewing conditions
var $3edffd8db0ed9bc1$var$CIECAM02_VC = function() {
    var vc = {
        D65_X: 95.047,
        D65_Y: 100.0,
        D65_Z: 108.883,
        // Viewing conditions
        // Note about L_A:
        // Billy Bigg's implementation just uses a value of 4 cd/m^2, but
        // the colorspacious implementation uses greater precision by calculating
        // it with (64 / numpy.pi) / 5
        // This is based on Moroney (2000), "Usage guidelines for CIECAM97s" where
        // sRGB illuminance is 64 lux. Because of its greater precision we use
        // Moroney's alternative definition.
        la: 64.0 / Math.PI / 5.0,
        yb: 20.0,
        // Surround
        f: 1.0,
        c: 0.69,
        nc: 1.0 // average;  dim: 0.95; dark: 0.8
    };
    vc.D65_LMS = $3edffd8db0ed9bc1$var$xyz2cat02(vc.D65_X, vc.D65_Y, vc.D65_Z), vc.n = vc.yb / vc.D65_Y;
    vc.z = 1.48 + Math.sqrt(vc.n);
    var k = 1.0 / (5.0 * vc.la + 1.0);
    vc.fl = 0.2 * Math.pow(k, 4.0) * (5.0 * vc.la) + 0.1 * Math.pow(1.0 - Math.pow(k, 4.0), 2.0) * Math.pow(5.0 * vc.la, 1.0 / 3.0);
    vc.nbb = 0.725 * Math.pow(1.0 / vc.n, 0.2);
    vc.ncb = vc.nbb;
    vc.d = vc.f * (1.0 - 1.0 / 3.6 * Math.exp((-vc.la - 42.0) / 92.0));
    vc.achromaticResponseToWhite = function() {
        var l = vc.D65_LMS.l, m = vc.D65_LMS.m, s = vc.D65_LMS.s;
        var lc = l * (vc.D65_Y * vc.d / l + (1.0 - vc.d)), mc = m * (vc.D65_Y * vc.d / m + (1.0 - vc.d)), sc = s * (vc.D65_Y * vc.d / s + (1.0 - vc.d));
        var hpeTransforms = $3edffd8db0ed9bc1$var$cat022hpe(lc, mc, sc), lp = hpeTransforms.lh, mp = hpeTransforms.mh, sp = hpeTransforms.sh;
        var lpa = $3edffd8db0ed9bc1$var$nonlinearAdaptation(lp, vc.fl), mpa = $3edffd8db0ed9bc1$var$nonlinearAdaptation(mp, vc.fl), spa = $3edffd8db0ed9bc1$var$nonlinearAdaptation(sp, vc.fl);
        return (2.0 * lpa + mpa + 0.05 * spa - 0.305) * vc.nbb;
    }();
    return vc;
}(); // end CIECAM02_VC
function $3edffd8db0ed9bc1$var$cat022cam02(l, m, s) {
    var theColor = {};
    var D65_CAT02 = $3edffd8db0ed9bc1$var$xyz2cat02($3edffd8db0ed9bc1$var$CIECAM02_VC.D65_X, $3edffd8db0ed9bc1$var$CIECAM02_VC.D65_Y, $3edffd8db0ed9bc1$var$CIECAM02_VC.D65_Z);
    function cTransform(cone, D65_cone) {
        var D65_Y = $3edffd8db0ed9bc1$var$CIECAM02_VC.D65_Y, VC_d = $3edffd8db0ed9bc1$var$CIECAM02_VC.d;
        return cone * (D65_Y * VC_d / D65_cone + (1.0 - VC_d));
    }
    var lc = cTransform(l, D65_CAT02.l), mc = cTransform(m, D65_CAT02.m), sc = cTransform(s, D65_CAT02.s);
    var hpeTransforms = $3edffd8db0ed9bc1$var$cat022hpe(lc, mc, sc), lp = hpeTransforms.lh, mp = hpeTransforms.mh, sp = hpeTransforms.sh;
    var lpa = $3edffd8db0ed9bc1$var$nonlinearAdaptation(lp, $3edffd8db0ed9bc1$var$CIECAM02_VC.fl), mpa = $3edffd8db0ed9bc1$var$nonlinearAdaptation(mp, $3edffd8db0ed9bc1$var$CIECAM02_VC.fl), spa = $3edffd8db0ed9bc1$var$nonlinearAdaptation(sp, $3edffd8db0ed9bc1$var$CIECAM02_VC.fl);
    var ca = lpa - 12.0 * mpa / 11.0 + spa / 11.0, cb = 1.0 / 9.0 * (lpa + mpa - 2.0 * spa);
    theColor.h = 180.0 / Math.PI * Math.atan2(cb, ca);
    if (theColor.h < 0.0) theColor.h += 360.0;
    var temp;
    if (theColor.h < 20.14) {
        temp = (theColor.h + 122.47) / 1.2 + (20.14 - theColor.h) / 0.8;
        theColor.H = 300 + 100 * ((theColor.h + 122.47) / 1.2) / temp;
    } else if (theColor.h < 90.0) {
        temp = (theColor.h - 20.14) / 0.8 + (90.00 - theColor.h) / 0.7;
        theColor.H = 100 * ((theColor.h - 20.14) / 0.8) / temp;
    } else if (theColor.h < 164.25) {
        temp = (theColor.h - 90.00) / 0.7 + (164.25 - theColor.h) / 1.0;
        theColor.H = 100 + 100 * ((theColor.h - 90.00) / 0.7) / temp;
    } else if (theColor.h < 237.53) {
        temp = (theColor.h - 164.25) / 1.0 + (237.53 - theColor.h) / 1.2;
        theColor.H = 200 + 100 * ((theColor.h - 164.25) / 1.0) / temp;
    } else {
        temp = (theColor.h - 237.53) / 1.2 + (360 - theColor.h + 20.14) / 0.8;
        theColor.H = 300 + 100 * ((theColor.h - 237.53) / 1.2) / temp;
    }
    var a = (2.0 * lpa + mpa + 0.05 * spa - 0.305) * $3edffd8db0ed9bc1$var$CIECAM02_VC.nbb;
    theColor.J = 100.0 * Math.pow(a / $3edffd8db0ed9bc1$var$CIECAM02_VC.achromaticResponseToWhite, $3edffd8db0ed9bc1$var$CIECAM02_VC.c * $3edffd8db0ed9bc1$var$CIECAM02_VC.z);
    var et = 0.25 * (Math.cos(theColor.h * Math.PI / 180.0 + 2.0) + 3.8), t = 50000.0 / 13.0 * $3edffd8db0ed9bc1$var$CIECAM02_VC.nc * $3edffd8db0ed9bc1$var$CIECAM02_VC.ncb * et * Math.sqrt(ca * ca + cb * cb) / (lpa + mpa + 1.05 * spa);
    theColor.C = Math.pow(t, 0.9) * Math.sqrt(theColor.J / 100.0) * Math.pow(1.64 - Math.pow(0.29, $3edffd8db0ed9bc1$var$CIECAM02_VC.n), 0.73);
    theColor.Q = 4.0 / $3edffd8db0ed9bc1$var$CIECAM02_VC.c * Math.sqrt(theColor.J / 100.0) * ($3edffd8db0ed9bc1$var$CIECAM02_VC.achromaticResponseToWhite + 4.0) * Math.pow($3edffd8db0ed9bc1$var$CIECAM02_VC.fl, 0.25);
    theColor.M = theColor.C * Math.pow($3edffd8db0ed9bc1$var$CIECAM02_VC.fl, 0.25);
    theColor.s = 100.0 * Math.sqrt(theColor.M / theColor.Q);
    return theColor;
}
function $3edffd8db0ed9bc1$var$Aab2Cat02LMS(A, aa, bb, nbb) {
    var x = A / nbb + 0.305;
    var l = 0.32787 * x + 0.32145 * aa + 0.20527 * bb, m = 0.32787 * x - 0.63507 * aa - 0.18603 * bb, s = 0.32787 * x - 0.15681 * aa - 4.49038 * bb;
    return {
        l: l,
        m: m,
        s: s
    };
}
function $3edffd8db0ed9bc1$var$cam022rgb(J, C, h) {
    // NOTE input is small h not big H, the later of which is corrected
    var t = Math.pow(C / (Math.sqrt(J / 100.0) * Math.pow(1.64 - Math.pow(0.29, $3edffd8db0ed9bc1$var$CIECAM02_VC.n), 0.73)), 1.0 / 0.9), et = 0.25 * (Math.cos(h * Math.PI / 180.0 + 2.0) + 3.8);
    var a = Math.pow(J / 100.0, 1.0 / ($3edffd8db0ed9bc1$var$CIECAM02_VC.c * $3edffd8db0ed9bc1$var$CIECAM02_VC.z)) * $3edffd8db0ed9bc1$var$CIECAM02_VC.achromaticResponseToWhite;
    var p1 = 50000.0 / 13.0 * $3edffd8db0ed9bc1$var$CIECAM02_VC.nc * $3edffd8db0ed9bc1$var$CIECAM02_VC.ncb * et / t, p2 = a / $3edffd8db0ed9bc1$var$CIECAM02_VC.nbb + 0.305, p3 = 1.05, p4, p5, ca, cb;
    var hr = h * Math.PI / 180.0;
    if (Math.abs(Math.sin(hr)) >= Math.abs(Math.cos(hr))) {
        p4 = p1 / Math.sin(hr);
        cb = p2 * (2.0 + p3) * (460.0 / 1403.0) / (p4 + (2.0 + p3) * (220.0 / 1403.0) * (Math.cos(hr) / Math.sin(hr)) - 27.0 / 1403.0 + p3 * (6300.0 / 1403.0));
        ca = cb * (Math.cos(hr) / Math.sin(hr));
    } else {
        p5 = p1 / Math.cos(hr);
        ca = p2 * (2.0 + p3) * (460.0 / 1403.0) / (p5 + (2.0 + p3) * (220.0 / 1403.0) - (27.0 / 1403.0 - p3 * (6300.0 / 1403.0)) * (Math.sin(hr) / Math.cos(hr)));
        cb = ca * (Math.sin(hr) / Math.cos(hr));
    }
    var lms_a = $3edffd8db0ed9bc1$var$Aab2Cat02LMS(a, ca, cb, $3edffd8db0ed9bc1$var$CIECAM02_VC.nbb), lpa = lms_a.l, mpa = lms_a.m, spa = lms_a.s;
    var lp = $3edffd8db0ed9bc1$var$inverseNonlinearAdaptation(lpa, $3edffd8db0ed9bc1$var$CIECAM02_VC.fl), mp = $3edffd8db0ed9bc1$var$inverseNonlinearAdaptation(mpa, $3edffd8db0ed9bc1$var$CIECAM02_VC.fl), sp = $3edffd8db0ed9bc1$var$inverseNonlinearAdaptation(spa, $3edffd8db0ed9bc1$var$CIECAM02_VC.fl);
    var txyz = $3edffd8db0ed9bc1$var$hpe2xyz(lp, mp, sp), lms_c = $3edffd8db0ed9bc1$var$xyz2cat02(txyz.x, txyz.y, txyz.z);
    var D65_CAT02 = $3edffd8db0ed9bc1$var$xyz2cat02($3edffd8db0ed9bc1$var$CIECAM02_VC.D65_X, $3edffd8db0ed9bc1$var$CIECAM02_VC.D65_Y, $3edffd8db0ed9bc1$var$CIECAM02_VC.D65_Z);
    var l = lms_c.l / ($3edffd8db0ed9bc1$var$CIECAM02_VC.D65_Y * $3edffd8db0ed9bc1$var$CIECAM02_VC.d / D65_CAT02.l + (1.0 - $3edffd8db0ed9bc1$var$CIECAM02_VC.d)), m = lms_c.m / ($3edffd8db0ed9bc1$var$CIECAM02_VC.D65_Y * $3edffd8db0ed9bc1$var$CIECAM02_VC.d / D65_CAT02.m + (1.0 - $3edffd8db0ed9bc1$var$CIECAM02_VC.d)), s = lms_c.s / ($3edffd8db0ed9bc1$var$CIECAM02_VC.D65_Y * $3edffd8db0ed9bc1$var$CIECAM02_VC.d / D65_CAT02.s + (1.0 - $3edffd8db0ed9bc1$var$CIECAM02_VC.d));
    var xyz = $3edffd8db0ed9bc1$var$cat022xyz(l, m, s), rgb = $3edffd8db0ed9bc1$var$xyz2rgb(xyz.x, xyz.y, xyz.z);
    return rgb;
}
function $3edffd8db0ed9bc1$var$jchConvert(o) {
    if (o instanceof $3edffd8db0ed9bc1$export$eac0fb2c66c5ed2e) return new $3edffd8db0ed9bc1$export$eac0fb2c66c5ed2e(o.J, o.C, o.h, o.opacity);
    if (!(o instanceof (0, $abtVK.rgb))) o = (0, $abtVK.rgb)(o);
    var xyz = $3edffd8db0ed9bc1$var$rgb2xyz(o.r, o.g, o.b), lmsConeResponses = $3edffd8db0ed9bc1$var$xyz2cat02(xyz.x, xyz.y, xyz.z), cam02obj = $3edffd8db0ed9bc1$var$cat022cam02(lmsConeResponses.l, lmsConeResponses.m, lmsConeResponses.s);
    return new $3edffd8db0ed9bc1$export$eac0fb2c66c5ed2e(cam02obj.J, cam02obj.C, cam02obj.h, o.opacity);
}
function $3edffd8db0ed9bc1$export$2e2bcd8739ae039(J, C, h, opacity) {
    return arguments.length === 1 ? $3edffd8db0ed9bc1$var$jchConvert(J) : new $3edffd8db0ed9bc1$export$eac0fb2c66c5ed2e(J, C, h, opacity == null ? 1 : opacity);
}
function $3edffd8db0ed9bc1$export$eac0fb2c66c5ed2e(J, C, h, opacity) {
    this.J = +J;
    this.C = +C;
    this.h = +h;
    this.opacity = +opacity;
}
var $3edffd8db0ed9bc1$var$jchPrototype = $3edffd8db0ed9bc1$export$eac0fb2c66c5ed2e.prototype = $3edffd8db0ed9bc1$export$2e2bcd8739ae039.prototype = Object.create((0, $abtVK.default).prototype);
$3edffd8db0ed9bc1$var$jchPrototype.constructor = $3edffd8db0ed9bc1$export$eac0fb2c66c5ed2e;
$3edffd8db0ed9bc1$var$jchPrototype.brighter = function(k) {
    return new $3edffd8db0ed9bc1$export$eac0fb2c66c5ed2e(this.J + $3edffd8db0ed9bc1$var$Kn * (k === null ? 1 : k), this.C, this.h, this.opacity);
};
$3edffd8db0ed9bc1$var$jchPrototype.darker = function(k) {
    return new $3edffd8db0ed9bc1$export$eac0fb2c66c5ed2e(this.J - $3edffd8db0ed9bc1$var$Kn * (k === null ? 1 : k), this.C, this.h, this.opacity);
};
$3edffd8db0ed9bc1$var$jchPrototype.rgb = function() {
    var converted = $3edffd8db0ed9bc1$var$cam022rgb(this.J, this.C, this.h);
    return (0, $abtVK.rgb)(converted.r, converted.g, converted.b, this.opacity);
};
////////////////////////////////////////////////////////////////////////////////
// Updated attempts at perceptually uniform color spaces
// Formulas and constants taken from
// M.R. Luo and C. Li. "CIECAM02 and Its Recent Developments"
var $3edffd8db0ed9bc1$var$altCam02Coef = {
    lcd: {
        k_l: 0.77,
        c1: 0.007,
        c2: 0.0053
    },
    scd: {
        k_l: 1.24,
        c1: 0.007,
        c2: 0.0363
    },
    ucs: {
        k_l: 1.00,
        c1: 0.007,
        c2: 0.0228
    }
};
function $3edffd8db0ed9bc1$var$jabConvert(o) {
    if (o instanceof $3edffd8db0ed9bc1$export$dc0b34ad0f6d06d0) return new $3edffd8db0ed9bc1$export$dc0b34ad0f6d06d0(o.J, o.a, o.b, o.opacity);
    if (!(o instanceof (0, $abtVK.rgb))) o = (0, $abtVK.rgb)(o);
    var xyz = $3edffd8db0ed9bc1$var$rgb2xyz(o.r, o.g, o.b), lmsConeResponses = $3edffd8db0ed9bc1$var$xyz2cat02(xyz.x, xyz.y, xyz.z), cam02 = $3edffd8db0ed9bc1$var$cat022cam02(lmsConeResponses.l, lmsConeResponses.m, lmsConeResponses.s);
    var coefs = $3edffd8db0ed9bc1$var$altCam02Coef.ucs;
    var JPrime = (1.0 + 100.0 * coefs.c1) * cam02.J / (1.0 + coefs.c1 * cam02.J);
    JPrime = JPrime / coefs.k_l;
    var MPrime = 1.0 / coefs.c2 * Math.log(1.0 + coefs.c2 * cam02.M); // log=ln
    var a = MPrime * Math.cos((0, $ozXaB.deg2rad) * cam02.h), b = MPrime * Math.sin((0, $ozXaB.deg2rad) * cam02.h);
    return new $3edffd8db0ed9bc1$export$dc0b34ad0f6d06d0(JPrime, a, b, o.opacity);
}
// DE color distance function generator for the three CAM02 perceptually uniform
// models: lcd, scd, and ucs
function $3edffd8db0ed9bc1$var$cam02de(coefs) {
    return function(o) {
        if (!(o instanceof $3edffd8db0ed9bc1$export$dc0b34ad0f6d06d0)) o = $3edffd8db0ed9bc1$var$jabConvert(o);
        var k_l = coefs.k_l, diffJ = Math.abs(this.J - o.J), diffA = Math.abs(this.a - o.a), diffB = Math.abs(this.b - o.b);
        var de = Math.sqrt(diffJ / k_l * (diffJ / k_l) + diffA * diffA + diffB * diffB);
        return de;
    };
}
function $3edffd8db0ed9bc1$export$812fb7000693874(J, a, b, opacity) {
    opacity = opacity == null ? 1 : opacity;
    return arguments.length === 1 ? $3edffd8db0ed9bc1$var$jabConvert(J) : new $3edffd8db0ed9bc1$export$dc0b34ad0f6d06d0(J, a, b, opacity);
}
function $3edffd8db0ed9bc1$export$dc0b34ad0f6d06d0(J, a, b, opacity) {
    this.J = J;
    this.a = a;
    this.b = b;
    this.opacity = opacity;
}
var $3edffd8db0ed9bc1$var$jabPrototype = $3edffd8db0ed9bc1$export$dc0b34ad0f6d06d0.prototype = $3edffd8db0ed9bc1$export$812fb7000693874.prototype = Object.create((0, $abtVK.default).prototype);
$3edffd8db0ed9bc1$var$jabPrototype.constructor = $3edffd8db0ed9bc1$export$eac0fb2c66c5ed2e;
$3edffd8db0ed9bc1$var$jabPrototype.brighter = function(k) {
    return new $3edffd8db0ed9bc1$export$dc0b34ad0f6d06d0(this.J + $3edffd8db0ed9bc1$var$Kn * (k === null ? 1 : k), this.a, this.b, this.opacity);
};
$3edffd8db0ed9bc1$var$jabPrototype.darker = function(k) {
    return new $3edffd8db0ed9bc1$export$dc0b34ad0f6d06d0(this.J - $3edffd8db0ed9bc1$var$Kn * (k === null ? 1 : k), this.a, this.b, this.opacity);
};
$3edffd8db0ed9bc1$var$jabPrototype.rgb = function() {
    var coefs = $3edffd8db0ed9bc1$var$altCam02Coef.ucs;
    var J = this.J, a = this.a, b = this.b;
    // Get the new M using trigonomic identities
    // MPrime = (1.0/coefs.c2) * Math.log(1.0 + coefs.c2*cam02.M); // log=ln
    // var a = MPrime * Math.cos(o.h),
    //     b = MPrime * Math.sin(o.h);
    // x*x = (x*cos(y))*(x(cos(y))) + (x*sin(y))*(x(sin(y)))
    var newMPrime = Math.sqrt(a * a + b * b), newM = (Math.exp(newMPrime * coefs.c2) - 1.0) / coefs.c2;
    var newh = (0, $ozXaB.rad2deg) * Math.atan2(b, a);
    if (newh < 0) newh = 360.0 + newh;
    // M = C * Math.pow(CIECAM02_VC.fl, 0.25);
    // C = M / Math.pow(CIECAM02_VC.fl, 0.25);
    var newC = newM / Math.pow($3edffd8db0ed9bc1$var$CIECAM02_VC.fl, 0.25);
    // Last, derive the new Cam02J
    // JPrime = ((1.0 + 100.0*coefs.c1) * cam02.J) / (1.0 + coefs.c1 * cam02.J)
    // simplified: var cam02J = JPrime / (1.0 + coefs.c1*(100.0 - JPrime));
    // if v = (d*x) / (b + a*x), x = (b*(v/d)) / (1 - a(v/d))
    var newCam02J = J / (1.0 + coefs.c1 * (100.0 - J));
    var converted = $3edffd8db0ed9bc1$var$cam022rgb(newCam02J, newC, newh);
    return (0, $abtVK.rgb)(converted.r, converted.g, converted.b, this.opacity);
};
$3edffd8db0ed9bc1$var$jabPrototype.de = $3edffd8db0ed9bc1$var$cam02de($3edffd8db0ed9bc1$var$altCam02Coef.ucs);
function $3edffd8db0ed9bc1$export$60329fce869d0ad7(start, end) {
    // constant, linear, and colorInterpolate are taken from d3-interpolate
    // the colorInterpolate function is `nogamma` in the d3-interpolate's color.js
    function constant(x) {
        return function() {
            return x;
        };
    }
    function linear(a, d) {
        return function(t) {
            return a + t * d;
        };
    }
    function colorInterpolate(a, b) {
        var d = b - a;
        return d ? linear(a, d) : constant(isNaN(a) ? b : a);
    }
    start = $3edffd8db0ed9bc1$var$jabConvert(start);
    end = $3edffd8db0ed9bc1$var$jabConvert(end);
    // TODO import color function from d3-interpolate
    var J = colorInterpolate(start.J, end.J), a = colorInterpolate(start.a, end.a), b = colorInterpolate(start.b, end.b), opacity = colorInterpolate(start.opacity, end.opacity);
    return function(t) {
        start.J = J(t);
        start.a = a(t);
        start.b = b(t);
        start.opacity = opacity(t);
        return start + "";
    };
}

});
parcelRegister("ozXaB", function(module, exports) {

$parcel$export(module.exports, "deg2rad", () => $049e2197c22b44ef$export$b1b275608b2b1b8);
$parcel$export(module.exports, "rad2deg", () => $049e2197c22b44ef$export$b2ba2578f2c43d74);
var $049e2197c22b44ef$export$b1b275608b2b1b8 = Math.PI / 180;
var $049e2197c22b44ef$export$b2ba2578f2c43d74 = 180 / Math.PI;

});



parcelRegister("1oOnY", function(module, exports) {

$parcel$export(module.exports, "hsluv", () => (parcelRequire("VRwmJ")).default);
$parcel$export(module.exports, "interpolateHsluv", () => (parcelRequire("2Jteh")).default);
$parcel$export(module.exports, "interpolateHsluvLong", () => (parcelRequire("2Jteh")).hsluvLong);

var $VRwmJ = parcelRequire("VRwmJ");

var $2Jteh = parcelRequire("2Jteh");

});
parcelRegister("VRwmJ", function(module, exports) {

$parcel$export(module.exports, "default", () => $0aded7257ec7cb14$export$2e2bcd8739ae039);

var $abtVK = parcelRequire("abtVK");

var $6Nqmw = parcelRequire("6Nqmw");

var $j308z = parcelRequire("j308z");
function $0aded7257ec7cb14$var$HsluvConvert(o) {
    if (o instanceof $0aded7257ec7cb14$export$484bd93ed6606843) return new $0aded7257ec7cb14$export$484bd93ed6606843(o.l, o.u, o.v, o.opacity);
    if (!(o instanceof (0, $abtVK.rgb))) o = (0, $abtVK.rgb)(o);
    var oRGB = (0, $6Nqmw.lchToHsluv)((0, $6Nqmw.luvToLch)((0, $6Nqmw.xyzToLuv)((0, $6Nqmw.rgbToXyz)([
        o.r / 255,
        o.g / 255,
        o.b / 255
    ]))));
    var l = oRGB.l.toPrecision(7), u = oRGB.u.toPrecision(7), v = oRGB.v.toPrecision(7);
    return new $0aded7257ec7cb14$export$484bd93ed6606843(l, u, v, o.opacity);
}
function $0aded7257ec7cb14$export$2e2bcd8739ae039(l, u, v, opacity) {
    return arguments.length === 1 ? $0aded7257ec7cb14$var$HsluvConvert(l) : new $0aded7257ec7cb14$export$484bd93ed6606843(l, u, v, opacity == null ? 1 : opacity);
}
function $0aded7257ec7cb14$export$484bd93ed6606843(l, u, v, opacity) {
    this.l = +l;
    this.u = +u;
    this.v = +v;
    this.opacity = +opacity;
}
var $0aded7257ec7cb14$var$hsluvPrototype = $0aded7257ec7cb14$export$484bd93ed6606843.prototype = $0aded7257ec7cb14$export$2e2bcd8739ae039.prototype = Object.create((0, $abtVK.default).prototype);
$0aded7257ec7cb14$var$hsluvPrototype.constructor = $0aded7257ec7cb14$export$484bd93ed6606843;
$0aded7257ec7cb14$var$hsluvPrototype.brighter = function(k) {
    k = k == null ? (0, $j308z.brighter) : Math.pow((0, $j308z.brighter), k);
    return new $0aded7257ec7cb14$export$484bd93ed6606843(this.l, this.u, this.v * k, this.opacity);
};
$0aded7257ec7cb14$var$hsluvPrototype.darker = function(k) {
    k = k == null ? (0, $j308z.darker) : Math.pow((0, $j308z.darker), k);
    return new $0aded7257ec7cb14$export$484bd93ed6606843(this.l, this.u, this.v * k, this.opacity);
};
$0aded7257ec7cb14$var$hsluvPrototype.rgb = function() {
    var L = isNaN(this.l) ? 0 : this.l, U = isNaN(this.u) ? 0 : this.u, V = isNaN(this.v) ? 0 : this.v, a = this.opacity, o = (0, $6Nqmw.xyzToRgb)((0, $6Nqmw.luvToXyz)((0, $6Nqmw.lchToLuv)((0, $6Nqmw.hsluvToLch)([
        L,
        U,
        V
    ])))), r = o.r, g = o.g, b = o.b;
    return $0aded7257ec7cb14$var$hsluv2rgb(r, g, b, a);
};
$0aded7257ec7cb14$var$hsluvPrototype.displayable = function() {
    return (0 <= this.l && this.l <= 360 || isNaN(this.l)) && 0 <= this.u && this.u <= 100 && 0 <= this.v && this.v <= 100 && 0 <= this.opacity && this.opacity <= 1;
};
function $0aded7257ec7cb14$var$hsluv2rgb(r, g, b, a) {
    return (0, $abtVK.rgb)(r * 255, g * 255, b * 255, a || 1);
}

});
parcelRegister("6Nqmw", function(module, exports) {

$parcel$export(module.exports, "luvToXyz", () => $4f2bc4b1188f53e8$export$c77e5ac638b3ca85);
$parcel$export(module.exports, "lchToLuv", () => $4f2bc4b1188f53e8$export$60c100ad3d213bc3);
$parcel$export(module.exports, "hsluvToLch", () => $4f2bc4b1188f53e8$export$fef7c361cda5e5de);
$parcel$export(module.exports, "lchToHsluv", () => $4f2bc4b1188f53e8$export$72dda95e63099c90);
$parcel$export(module.exports, "luvToLch", () => $4f2bc4b1188f53e8$export$456236517fd5cbe5);
$parcel$export(module.exports, "xyzToLuv", () => $4f2bc4b1188f53e8$export$a9ee18adc892720b);
$parcel$export(module.exports, "xyzToRgb", () => $4f2bc4b1188f53e8$export$46da8101183bab4f);
$parcel$export(module.exports, "rgbToXyz", () => $4f2bc4b1188f53e8$export$532d5190d94ac8d7);

var $j308z = parcelRequire("j308z");

var $4DFvT = parcelRequire("4DFvT");
function $4f2bc4b1188f53e8$export$c77e5ac638b3ca85(tuple) {
    var L = tuple[0];
    var U = tuple[1];
    var V = tuple[2];
    if (L == 0) return [
        0,
        0,
        0
    ];
    var varU = U / (13 * L) + (0, $j308z.refU);
    var varV = V / (13 * L) + (0, $j308z.refV);
    var Y = (0, $4DFvT.lToY)(L);
    var X = 0 - 9 * Y * varU / ((varU - 4) * varV - varU * varV);
    var Z = (9 * Y - 15 * varV * Y - varV * X) / (3 * varV);
    return [
        X,
        Y,
        Z
    ];
}
function $4f2bc4b1188f53e8$export$60c100ad3d213bc3(tuple) {
    var L = tuple[0];
    var C = tuple[1];
    var H = tuple[2];
    var Hrad = H / 360 * 2 * Math.PI;
    var U = Math.cos(Hrad) * C;
    var V = Math.sin(Hrad) * C;
    return [
        L,
        U,
        V
    ];
}
function $4f2bc4b1188f53e8$export$fef7c361cda5e5de(tuple) {
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
    var max = (0, $4DFvT.maxChromaForLH)(L, H);
    var C = max / 100 * S;
    return [
        L,
        C,
        H
    ];
}
function $4f2bc4b1188f53e8$export$72dda95e63099c90(tuple) {
    var L = tuple[0];
    var C = tuple[1];
    var H = tuple[2];
    if (L > 99.9999999) return {
        l: H,
        u: 0,
        v: 100
    };
    if (L < 0.00000001) return {
        l: H,
        u: 0,
        v: 0
    };
    var max = (0, $4DFvT.maxChromaForLH)(L, H);
    var S = C / max * 100;
    return {
        l: H,
        u: S,
        v: L
    };
}
function $4f2bc4b1188f53e8$export$456236517fd5cbe5(tuple) {
    var L = tuple[0];
    var U = tuple[1];
    var V = tuple[2];
    var C = Math.sqrt(U * U + V * V);
    var H;
    if (C < 0.00000001) H = 0;
    else {
        var Hrad = Math.atan2(V, U);
        H = Hrad * 180 / Math.PI;
        if (H < 0) H = 360 + H;
    }
    return [
        L,
        C,
        H
    ];
}
function $4f2bc4b1188f53e8$export$a9ee18adc892720b(tuple) {
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
    var L = (0, $4DFvT.yToL)(Y);
    if (L == 0) return [
        0,
        0,
        0
    ];
    var U = 13 * L * (varU - (0, $j308z.refU));
    var V = 13 * L * (varV - (0, $j308z.refV));
    return [
        L,
        U,
        V
    ];
}
function $4f2bc4b1188f53e8$export$46da8101183bab4f(tuple) {
    var RGB = [
        (0, $4DFvT.fromLinear)((0, $4DFvT.dotProduct)((0, $j308z.m)[0], tuple)),
        (0, $4DFvT.fromLinear)((0, $4DFvT.dotProduct)((0, $j308z.m)[1], tuple)),
        (0, $4DFvT.fromLinear)((0, $4DFvT.dotProduct)((0, $j308z.m)[2], tuple))
    ];
    return {
        r: RGB[0],
        g: RGB[1],
        b: RGB[2]
    };
}
function $4f2bc4b1188f53e8$export$532d5190d94ac8d7(tuple) {
    var rgbl = [
        (0, $4DFvT.toLinear)(tuple[0]),
        (0, $4DFvT.toLinear)(tuple[1]),
        (0, $4DFvT.toLinear)(tuple[2])
    ];
    return [
        (0, $4DFvT.dotProduct)((0, $j308z.minv)[0], rgbl),
        (0, $4DFvT.dotProduct)((0, $j308z.minv)[1], rgbl),
        (0, $4DFvT.dotProduct)((0, $j308z.minv)[2], rgbl)
    ];
}

});
parcelRegister("j308z", function(module, exports) {

$parcel$export(module.exports, "m", () => $ddde675f7efe200e$export$953cecd6e717a553);
$parcel$export(module.exports, "minv", () => $ddde675f7efe200e$export$4dff56c4958d7a8);
$parcel$export(module.exports, "refY", () => $ddde675f7efe200e$export$bea20940f2ab408d);
$parcel$export(module.exports, "refU", () => $ddde675f7efe200e$export$298d20847629f155);
$parcel$export(module.exports, "refV", () => $ddde675f7efe200e$export$5adc18764e627829);
$parcel$export(module.exports, "kappa", () => $ddde675f7efe200e$export$ef6ce785539fd205);
$parcel$export(module.exports, "epsilon", () => $ddde675f7efe200e$export$6c421550c66a327d);
$parcel$export(module.exports, "darker", () => $ddde675f7efe200e$export$4adafc6ed0600c10);
$parcel$export(module.exports, "brighter", () => $ddde675f7efe200e$export$9eace2cc0d12c98d);
$parcel$export(module.exports, "default", () => $ddde675f7efe200e$export$2e2bcd8739ae039);
var $ddde675f7efe200e$export$953cecd6e717a553 = [
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
var $ddde675f7efe200e$export$4dff56c4958d7a8 = [
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
var $ddde675f7efe200e$export$bea20940f2ab408d = 1.0;
var $ddde675f7efe200e$export$298d20847629f155 = 0.19783000664283;
var $ddde675f7efe200e$export$5adc18764e627829 = 0.46831999493879;
var $ddde675f7efe200e$export$ef6ce785539fd205 = 903.2962962;
var $ddde675f7efe200e$export$6c421550c66a327d = 0.0088564516;
var $ddde675f7efe200e$export$4adafc6ed0600c10 = 0.7;
var $ddde675f7efe200e$export$9eace2cc0d12c98d = 1 / $ddde675f7efe200e$export$4adafc6ed0600c10;
function $ddde675f7efe200e$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}

});

parcelRegister("4DFvT", function(module, exports) {

$parcel$export(module.exports, "yToL", () => $360b01a92de9c175$export$ccedbd7383d4baa9);
$parcel$export(module.exports, "lToY", () => $360b01a92de9c175$export$97477852a61ea0c2);
$parcel$export(module.exports, "maxChromaForLH", () => $360b01a92de9c175$export$71c4175fdbb71ea3);
$parcel$export(module.exports, "dotProduct", () => $360b01a92de9c175$export$2dfa5a136446eaca);
$parcel$export(module.exports, "toLinear", () => $360b01a92de9c175$export$c129f8203fe7d0c5);
$parcel$export(module.exports, "fromLinear", () => $360b01a92de9c175$export$ef02d50253805314);

var $j308z = parcelRequire("j308z");
function $360b01a92de9c175$export$4200d66a306ca325(theta, line) {
    return line.intercept / (Math.sin(theta) - line.slope * Math.cos(theta));
}
function $360b01a92de9c175$export$ccedbd7383d4baa9(Y) {
    if (Y <= (0, $j308z.epsilon)) return Y / (0, $j308z.refY) * (0, $j308z.kappa);
    else return 116 * Math.pow(Y / (0, $j308z.refY), 0.333333333333333315) - 16;
}
function $360b01a92de9c175$export$97477852a61ea0c2(L) {
    if (L <= 8) return (0, $j308z.refY) * L / (0, $j308z.kappa);
    else return (0, $j308z.refY) * Math.pow((L + 16) / 116, 3);
}
function $360b01a92de9c175$export$becd1e645219fa23(L) {
    var result = [];
    var sub1 = Math.pow(L + 16, 3) / 1560896;
    var sub2;
    if (sub1 > (0, $j308z.epsilon)) sub2 = sub1;
    else sub2 = L / (0, $j308z.kappa);
    var _g = 0;
    while(_g < 3){
        var c = _g++;
        var m1 = (0, $j308z.m)[c][0];
        var m2 = (0, $j308z.m)[c][1];
        var m3 = (0, $j308z.m)[c][2];
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
}
function $360b01a92de9c175$export$71c4175fdbb71ea3(L, H) {
    var hrad = H / 360 * Math.PI * 2;
    var bounds = $360b01a92de9c175$export$becd1e645219fa23(L);
    var min = 1.7976931348623157e+308;
    var _g = 0;
    while(_g < bounds.length){
        var bound = bounds[_g];
        ++_g;
        var length = $360b01a92de9c175$export$4200d66a306ca325(hrad, bound);
        if (length >= 0) min = Math.min(min, length);
    }
    return min;
}
function $360b01a92de9c175$export$2dfa5a136446eaca(a, b) {
    var sum = 0;
    var _g1 = 0;
    var _g = a.length;
    while(_g1 < _g){
        var i = _g1++;
        sum += a[i] * b[i];
    }
    return sum;
}
function $360b01a92de9c175$export$c129f8203fe7d0c5(c) {
    if (c > 0.04045) return Math.pow((c + 0.055) / 1.055, 2.4);
    else return c / 12.92;
}
function $360b01a92de9c175$export$ef02d50253805314(c) {
    if (c <= 0.0031308) return 12.92 * c;
    else return 1.055 * Math.pow(c, 0.416666666666666685) - 0.055;
}

});



parcelRegister("2Jteh", function(module, exports) {

$parcel$export(module.exports, "default", () => $1fd6751292032329$export$2e2bcd8739ae039);
$parcel$export(module.exports, "hsluvLong", () => $1fd6751292032329$export$dd0df24b960a5eb1);
parcelRequire("1oOnY");
var $VRwmJ = parcelRequire("VRwmJ");

var $7XXgY = parcelRequire("7XXgY");
function $1fd6751292032329$var$hsluv(hue) {
    return function(start, end) {
        var l = hue((start = (0, $VRwmJ.default)(start)).l, (end = (0, $VRwmJ.default)(end)).l), u = (0, $7XXgY.default)(start.u, end.u), v = (0, $7XXgY.default)(start.v, end.v), opacity = (0, $7XXgY.default)(start.opacity, end.opacity);
        return function(t) {
            start.l = l(t);
            start.u = u(t);
            start.v = v(t);
            start.opacity = opacity(t);
            return start + "";
        };
    };
}
var $1fd6751292032329$export$2e2bcd8739ae039 = $1fd6751292032329$var$hsluv((0, $7XXgY.hue));
var $1fd6751292032329$export$dd0df24b960a5eb1 = $1fd6751292032329$var$hsluv((0, $7XXgY.default));

});
parcelRegister("7XXgY", function(module, exports) {

$parcel$export(module.exports, "hue", () => $5ccc056a37a5c27b$export$97d7b0c7ddb78dcf);
$parcel$export(module.exports, "default", () => $5ccc056a37a5c27b$export$2e2bcd8739ae039);

var $j308z = parcelRequire("j308z");
function $5ccc056a37a5c27b$var$linear(a, d) {
    return function(t) {
        return a + t * d;
    };
}
function $5ccc056a37a5c27b$export$97d7b0c7ddb78dcf(a, b) {
    var d = b - a;
    return d ? $5ccc056a37a5c27b$var$linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0, $j308z.default)(isNaN(a) ? b : a);
}
function $5ccc056a37a5c27b$export$2e2bcd8739ae039(a, b) {
    var d = b - a;
    return d ? $5ccc056a37a5c27b$var$linear(a, d) : (0, $j308z.default)(isNaN(a) ? b : a);
}

});



parcelRegister("hzkzJ", function(module, exports) {

$parcel$export(module.exports, "hsv", () => (parcelRequire("a1up8")).default);
$parcel$export(module.exports, "interpolateHsv", () => (parcelRequire("bXFKq")).default);
$parcel$export(module.exports, "interpolateHsvLong", () => (parcelRequire("bXFKq")).hsvLong);

var $a1up8 = parcelRequire("a1up8");

var $bXFKq = parcelRequire("bXFKq");

});
parcelRegister("a1up8", function(module, exports) {

$parcel$export(module.exports, "default", () => $74c195137d3ae946$export$2e2bcd8739ae039);

var $abtVK = parcelRequire("abtVK");
var $74c195137d3ae946$var$darker = 0.7, $74c195137d3ae946$var$brighter = 1 / $74c195137d3ae946$var$darker;
function $74c195137d3ae946$var$hsvConvert(o) {
    if (o instanceof $74c195137d3ae946$export$c547edc7d88070f1) return new $74c195137d3ae946$export$c547edc7d88070f1(o.h, o.s, o.v, o.opacity);
    if (!(o instanceof (0, $abtVK.rgb))) o = (0, $abtVK.rgb)(o);
    var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), d = max - min, h = NaN, s = d / max, v = max;
    if (d) {
        if (r === max) h = (g - b) / d + (g < b) * 6;
        else if (g === max) h = (b - r) / d + 2;
        else h = (r - g) / d + 4;
        h *= 60;
    }
    return new $74c195137d3ae946$export$c547edc7d88070f1(h, s, v, o.opacity);
}
function $74c195137d3ae946$export$2e2bcd8739ae039(h, s, v, opacity) {
    return arguments.length === 1 ? $74c195137d3ae946$var$hsvConvert(h) : new $74c195137d3ae946$export$c547edc7d88070f1(h, s, v, opacity == null ? 1 : opacity);
}
function $74c195137d3ae946$export$c547edc7d88070f1(h, s, v, opacity) {
    this.h = +h;
    this.s = +s;
    this.v = +v;
    this.opacity = +opacity;
}
var $74c195137d3ae946$var$hsvPrototype = $74c195137d3ae946$export$c547edc7d88070f1.prototype = $74c195137d3ae946$export$2e2bcd8739ae039.prototype = Object.create((0, $abtVK.default).prototype);
$74c195137d3ae946$var$hsvPrototype.constructor = $74c195137d3ae946$export$c547edc7d88070f1;
$74c195137d3ae946$var$hsvPrototype.brighter = function(k) {
    k = k == null ? $74c195137d3ae946$var$brighter : Math.pow($74c195137d3ae946$var$brighter, k);
    return new $74c195137d3ae946$export$c547edc7d88070f1(this.h, this.s, this.v * k, this.opacity);
};
$74c195137d3ae946$var$hsvPrototype.darker = function(k) {
    k = k == null ? $74c195137d3ae946$var$darker : Math.pow($74c195137d3ae946$var$darker, k);
    return new $74c195137d3ae946$export$c547edc7d88070f1(this.h, this.s, this.v * k, this.opacity);
};
$74c195137d3ae946$var$hsvPrototype.rgb = function() {
    var h = isNaN(this.h) ? 0 : this.h % 360 + (this.h < 0) * 360, s = isNaN(this.h) || isNaN(this.s) ? 0 : this.s, v = this.v, a = this.opacity, c = v * s, x = c * (1 - Math.abs(h / 60 % 2 - 1)), m = v - c;
    return h < 60 ? $74c195137d3ae946$var$hsv2rgb(c, x, 0, m, a) : h < 120 ? $74c195137d3ae946$var$hsv2rgb(x, c, 0, m, a) : h < 180 ? $74c195137d3ae946$var$hsv2rgb(0, c, x, m, a) : h < 240 ? $74c195137d3ae946$var$hsv2rgb(0, x, c, m, a) : h < 300 ? $74c195137d3ae946$var$hsv2rgb(x, 0, c, m, a) : $74c195137d3ae946$var$hsv2rgb(c, 0, x, m, a);
};
$74c195137d3ae946$var$hsvPrototype.displayable = function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.v && this.v <= 1 && 0 <= this.opacity && this.opacity <= 1;
};
function $74c195137d3ae946$var$hsv2rgb(r1, g1, b1, m, a) {
    return (0, $abtVK.rgb)((r1 + m) * 255, (g1 + m) * 255, (b1 + m) * 255, a);
}

});

parcelRegister("bXFKq", function(module, exports) {

$parcel$export(module.exports, "default", () => $8b5596a50c25de0b$export$2e2bcd8739ae039);
$parcel$export(module.exports, "hsvLong", () => $8b5596a50c25de0b$export$f921f6930a775966);

var $9C8DQ = parcelRequire("9C8DQ");

var $a1up8 = parcelRequire("a1up8");
function $8b5596a50c25de0b$var$hsv(hue) {
    return function(start, end) {
        var h = hue((start = (0, $a1up8.default)(start)).h, (end = (0, $a1up8.default)(end)).h), s = (0, $9C8DQ.default)(start.s, end.s), v = (0, $9C8DQ.default)(start.v, end.v), opacity = (0, $9C8DQ.default)(start.opacity, end.opacity);
        return function(t) {
            start.h = h(t);
            start.s = s(t);
            start.v = v(t);
            start.opacity = opacity(t);
            return start + "";
        };
    };
}
var $8b5596a50c25de0b$export$2e2bcd8739ae039 = $8b5596a50c25de0b$var$hsv((0, $9C8DQ.hue));
var $8b5596a50c25de0b$export$f921f6930a775966 = $8b5596a50c25de0b$var$hsv((0, $9C8DQ.default));

});
parcelRegister("9C8DQ", function(module, exports) {

$parcel$export(module.exports, "hue", () => $6ffe5dbabea07a48$export$97d7b0c7ddb78dcf);
$parcel$export(module.exports, "default", () => $6ffe5dbabea07a48$export$2e2bcd8739ae039);

var $a4RWf = parcelRequire("a4RWf");
function $6ffe5dbabea07a48$var$linear(a, d) {
    return function(t) {
        return a + t * d;
    };
}
function $6ffe5dbabea07a48$export$97d7b0c7ddb78dcf(a, b) {
    var d = b - a;
    return d ? $6ffe5dbabea07a48$var$linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : (0, $a4RWf.default)(isNaN(a) ? b : a);
}
function $6ffe5dbabea07a48$export$2e2bcd8739ae039(a, b) {
    var d = b - a;
    return d ? $6ffe5dbabea07a48$var$linear(a, d) : (0, $a4RWf.default)(isNaN(a) ? b : a);
}

});
parcelRegister("a4RWf", function(module, exports) {

$parcel$export(module.exports, "default", () => $75641e2f90e785d7$export$2e2bcd8739ae039);
function $75641e2f90e785d7$export$2e2bcd8739ae039(x) {
    return function() {
        return x;
    };
}

});





parcelRegister("5mszC", function(module, exports) {
!function(n, t) {
    t(module.exports);
}(module.exports, function(n) {
    "use strict";
    const t = [
        0,
        1.05118294,
        -0.05116099,
        0,
        1,
        0,
        0,
        0,
        1
    ], e = [
        1,
        0,
        0,
        .9513092,
        0,
        .04866992,
        0,
        0,
        1
    ], r = [
        1,
        0,
        0,
        0,
        1,
        0,
        -0.86744736,
        1.86727089,
        0
    ], o = [
        .212656,
        .715158,
        .072186
    ], i = [
        .31399022,
        .63951294,
        .04649755,
        .15537241,
        .75789446,
        .08670142,
        .01775239,
        .10944209,
        .87256922
    ], u = [
        5.47221206,
        -4.6419601,
        .16963708,
        -1.1252419,
        2.29317094,
        -0.1678952,
        .02980165,
        -0.19318073,
        1.16364789
    ];
    function c(n, t) {
        return [
            n[0] * t[0] + n[1] * t[1] + n[2] * t[2],
            n[3] * t[0] + n[4] * t[1] + n[5] * t[2],
            n[6] * t[0] + n[7] * t[1] + n[8] * t[2]
        ];
    }
    function a(n) {
        return [
            n.r / 255,
            n.g / 255,
            n.b / 255
        ];
    }
    function f(n) {
        return [
            n.l,
            n.m,
            n.s
        ];
    }
    function s(n) {
        return {
            r: 255 * n[0],
            g: 255 * n[1],
            b: 255 * n[2]
        };
    }
    function l(n) {
        return {
            l: n[0],
            m: n[1],
            s: n[2]
        };
    }
    function d(n) {
        return {
            r: p(n.r),
            g: p(n.g),
            b: p(n.b)
        };
    }
    function p(n) {
        return Math.round(Math.min(Math.max(n, 0), 255));
    }
    function m(n, t) {
        const e = function(n) {
            const t = a(n);
            return l(c(i, t));
        }(d(n));
        return d(function(n) {
            const t = f(n);
            return s(c(u, t));
        }(l(c(t, f(e)))));
    }
    function h(n, t) {
        const e = a(d(n)), r = (o = e, i = t, [
            o[0] * i[0] + o[1] * i[1] + o[2] * i[2]
        ])[0];
        var o, i;
        return d(s(Array(3).fill(r)));
    }
    n.simulate = function(n, i) {
        switch(i){
            case "protanopia":
                return m(n, t);
            case "deuteranopia":
                return m(n, e);
            case "tritanopia":
                return m(n, r);
            case "achromatopsia":
                return h(n, o);
            default:
                throw new Error("Invalid color deficiency provided");
        }
    }, n.simulateDichromatic = m, n.simulateMonochromatic = h, Object.defineProperty(n, "__esModule", {
        value: !0
    });
});

});

parcelRegister("j4T26", function(module, exports) {
/*
 * color-blind
 * https://github.com/skratchdot/color-blind
 *
 * see blind.js for more information about the original source.
 *
 * Copyright (c) 2014 skratchdot
 * Licensed under the MIT license.
 */ "use strict";

var $hdfik = parcelRequire("hdfik");

var $aPLXy = parcelRequire("aPLXy");
var $de39146ca155b71b$require$Blind = $aPLXy.Blind;
var $de39146ca155b71b$var$colorVisionData = {
    protanomaly: {
        type: "protan",
        anomalize: true
    },
    protanopia: {
        type: "protan"
    },
    deuteranomaly: {
        type: "deutan",
        anomalize: true
    },
    deuteranopia: {
        type: "deutan"
    },
    tritanomaly: {
        type: "tritan",
        anomalize: true
    },
    tritanopia: {
        type: "tritan"
    },
    achromatomaly: {
        type: "achroma",
        anomalize: true
    },
    achromatopsia: {
        type: "achroma"
    }
};
var $de39146ca155b71b$var$denorm = function(ratio) {
    return Math.round(ratio * 255);
};
var $de39146ca155b71b$var$createBlinder = function(key) {
    return function(colorString, returnRgb) {
        var color = $hdfik(colorString);
        if (!color) return returnRgb ? {
            R: 0,
            G: 0,
            B: 0
        } : "#000000";
        var rgb = new $de39146ca155b71b$require$Blind({
            R: $de39146ca155b71b$var$denorm(color.red() || 0),
            G: $de39146ca155b71b$var$denorm(color.green() || 0),
            B: $de39146ca155b71b$var$denorm(color.blue() || 0)
        }, $de39146ca155b71b$var$colorVisionData[key].type, $de39146ca155b71b$var$colorVisionData[key].anomalize);
        // blinder.tritanomaly('#000000') causes NaN / null
        rgb.R = rgb.R || 0;
        rgb.G = rgb.G || 0;
        rgb.B = rgb.B || 0;
        if (returnRgb) {
            delete rgb.X;
            delete rgb.Y;
            delete rgb.Z;
            return rgb;
        }
        return new $hdfik.RGB(rgb.R % 256 / 255, rgb.G % 256 / 255, rgb.B % 256 / 255, 1).hex();
    };
};
// add our exported functions
for(var $de39146ca155b71b$var$key in $de39146ca155b71b$var$colorVisionData)module.exports[$de39146ca155b71b$var$key] = $de39146ca155b71b$var$createBlinder($de39146ca155b71b$var$key);

});
parcelRegister("hdfik", function(module, exports) {
/*jshint evil:true, onevar:false*/ /*global define*/ var $c87f83c5d5df175f$var$installedColorSpaces = [], $c87f83c5d5df175f$var$namedColors = {}, $c87f83c5d5df175f$var$undef = function(obj) {
    return typeof obj === "undefined";
}, $c87f83c5d5df175f$var$channelRegExp = /\s*(\.\d+|\d+(?:\.\d+)?)(%)?\s*/, $c87f83c5d5df175f$var$percentageChannelRegExp = /\s*(\.\d+|100|\d?\d(?:\.\d+)?)%\s*/, $c87f83c5d5df175f$var$alphaChannelRegExp = /\s*(\.\d+|\d+(?:\.\d+)?)\s*/, $c87f83c5d5df175f$var$cssColorRegExp = new RegExp("^(rgb|hsl|hsv)a?\\(" + $c87f83c5d5df175f$var$channelRegExp.source + "," + $c87f83c5d5df175f$var$channelRegExp.source + "," + $c87f83c5d5df175f$var$channelRegExp.source + "(?:," + $c87f83c5d5df175f$var$alphaChannelRegExp.source + ")?" + "\\)$", "i");
function $c87f83c5d5df175f$var$ONECOLOR(obj) {
    if (Object.prototype.toString.apply(obj) === "[object Array]") {
        if (typeof obj[0] === "string" && typeof $c87f83c5d5df175f$var$ONECOLOR[obj[0]] === "function") // Assumed array from .toJSON()
        return new $c87f83c5d5df175f$var$ONECOLOR[obj[0]](obj.slice(1, obj.length));
        else if (obj.length === 4) // Assumed 4 element int RGB array from canvas with all channels [0;255]
        return new $c87f83c5d5df175f$var$ONECOLOR.RGB(obj[0] / 255, obj[1] / 255, obj[2] / 255, obj[3] / 255);
    } else if (typeof obj === "string") {
        var lowerCased = obj.toLowerCase();
        if ($c87f83c5d5df175f$var$namedColors[lowerCased]) obj = "#" + $c87f83c5d5df175f$var$namedColors[lowerCased];
        if (lowerCased === "transparent") obj = "rgba(0,0,0,0)";
        // Test for CSS rgb(....) string
        var matchCssSyntax = obj.match($c87f83c5d5df175f$var$cssColorRegExp);
        if (matchCssSyntax) {
            var colorSpaceName = matchCssSyntax[1].toUpperCase(), alpha = $c87f83c5d5df175f$var$undef(matchCssSyntax[8]) ? matchCssSyntax[8] : parseFloat(matchCssSyntax[8]), hasHue = colorSpaceName[0] === "H", firstChannelDivisor = matchCssSyntax[3] ? 100 : hasHue ? 360 : 255, secondChannelDivisor = matchCssSyntax[5] || hasHue ? 100 : 255, thirdChannelDivisor = matchCssSyntax[7] || hasHue ? 100 : 255;
            if ($c87f83c5d5df175f$var$undef($c87f83c5d5df175f$var$ONECOLOR[colorSpaceName])) throw new Error("one.color." + colorSpaceName + " is not installed.");
            return new $c87f83c5d5df175f$var$ONECOLOR[colorSpaceName](parseFloat(matchCssSyntax[2]) / firstChannelDivisor, parseFloat(matchCssSyntax[4]) / secondChannelDivisor, parseFloat(matchCssSyntax[6]) / thirdChannelDivisor, alpha);
        }
        // Assume hex syntax
        if (obj.length < 6) // Allow CSS shorthand
        obj = obj.replace(/^#?([0-9a-f])([0-9a-f])([0-9a-f])$/i, "$1$1$2$2$3$3");
        // Split obj into red, green, and blue components
        var hexMatch = obj.match(/^#?([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])$/i);
        if (hexMatch) return new $c87f83c5d5df175f$var$ONECOLOR.RGB(parseInt(hexMatch[1], 16) / 255, parseInt(hexMatch[2], 16) / 255, parseInt(hexMatch[3], 16) / 255);
        // No match so far. Lets try the less likely ones
        if ($c87f83c5d5df175f$var$ONECOLOR.CMYK) {
            var cmykMatch = obj.match(new RegExp("^cmyk\\(" + $c87f83c5d5df175f$var$percentageChannelRegExp.source + "," + $c87f83c5d5df175f$var$percentageChannelRegExp.source + "," + $c87f83c5d5df175f$var$percentageChannelRegExp.source + "," + $c87f83c5d5df175f$var$percentageChannelRegExp.source + "\\)$", "i"));
            if (cmykMatch) return new $c87f83c5d5df175f$var$ONECOLOR.CMYK(parseFloat(cmykMatch[1]) / 100, parseFloat(cmykMatch[2]) / 100, parseFloat(cmykMatch[3]) / 100, parseFloat(cmykMatch[4]) / 100);
        }
    } else if (typeof obj === "object" && obj.isColor) return obj;
    return false;
}
function $c87f83c5d5df175f$var$installColorSpace(colorSpaceName, propertyNames, config) {
    $c87f83c5d5df175f$var$ONECOLOR[colorSpaceName] = new Function(propertyNames.join(","), // Allow passing an array to the constructor:
    "if (Object.prototype.toString.apply(" + propertyNames[0] + ") === '[object Array]') {" + propertyNames.map(function(propertyName, i) {
        return propertyName + "=" + propertyNames[0] + "[" + i + "];";
    }).reverse().join("") + "}" + "if (" + propertyNames.filter(function(propertyName) {
        return propertyName !== "alpha";
    }).map(function(propertyName) {
        return "isNaN(" + propertyName + ")";
    }).join("||") + "){" + 'throw new Error("[' + colorSpaceName + ']: Invalid color: ("+' + propertyNames.join('+","+') + '+")");}' + propertyNames.map(function(propertyName) {
        if (propertyName === "hue") return "this._hue=hue<0?hue-Math.floor(hue):hue%1"; // Wrap
        else if (propertyName === "alpha") return "this._alpha=(isNaN(alpha)||alpha>1)?1:(alpha<0?0:alpha);";
        else return "this._" + propertyName + "=" + propertyName + "<0?0:(" + propertyName + ">1?1:" + propertyName + ")";
    }).join(";") + ";");
    $c87f83c5d5df175f$var$ONECOLOR[colorSpaceName].propertyNames = propertyNames;
    var prototype = $c87f83c5d5df175f$var$ONECOLOR[colorSpaceName].prototype;
    [
        "valueOf",
        "hex",
        "hexa",
        "css",
        "cssa"
    ].forEach(function(methodName) {
        prototype[methodName] = prototype[methodName] || (colorSpaceName === "RGB" ? prototype.hex : new Function("return this.rgb()." + methodName + "();"));
    });
    prototype.isColor = true;
    prototype.equals = function(otherColor, epsilon) {
        if ($c87f83c5d5df175f$var$undef(epsilon)) epsilon = 1e-10;
        otherColor = otherColor[colorSpaceName.toLowerCase()]();
        for(var i = 0; i < propertyNames.length; i = i + 1){
            if (Math.abs(this["_" + propertyNames[i]] - otherColor["_" + propertyNames[i]]) > epsilon) return false;
        }
        return true;
    };
    prototype.toJSON = new Function("return ['" + colorSpaceName + "', " + propertyNames.map(function(propertyName) {
        return "this._" + propertyName;
    }, this).join(", ") + "];");
    for(var propertyName in config)if (config.hasOwnProperty(propertyName)) {
        var matchFromColorSpace = propertyName.match(/^from(.*)$/);
        if (matchFromColorSpace) $c87f83c5d5df175f$var$ONECOLOR[matchFromColorSpace[1].toUpperCase()].prototype[colorSpaceName.toLowerCase()] = config[propertyName];
        else prototype[propertyName] = config[propertyName];
    }
    // It is pretty easy to implement the conversion to the same color space:
    prototype[colorSpaceName.toLowerCase()] = function() {
        return this;
    };
    prototype.toString = new Function('return "[one.color.' + colorSpaceName + ':"+' + propertyNames.map(function(propertyName, i) {
        return '" ' + propertyNames[i] + '="+this._' + propertyName;
    }).join("+") + '+"]";');
    // Generate getters and setters
    propertyNames.forEach(function(propertyName, i) {
        prototype[propertyName] = prototype[propertyName === "black" ? "k" : propertyName[0]] = new Function("value", "isDelta", // Simple getter mode: color.red()
        "if (typeof value === 'undefined') {return this._" + propertyName + ";" + "}" + // Adjuster: color.red(+.2, true)
        "if (isDelta) {" + "return new this.constructor(" + propertyNames.map(function(otherPropertyName, i) {
            return "this._" + otherPropertyName + (propertyName === otherPropertyName ? "+value" : "");
        }).join(", ") + ");" + "}" + // Setter: color.red(.2);
        "return new this.constructor(" + propertyNames.map(function(otherPropertyName, i) {
            return propertyName === otherPropertyName ? "value" : "this._" + otherPropertyName;
        }).join(", ") + ");");
    });
    function installForeignMethods(targetColorSpaceName, sourceColorSpaceName) {
        var obj = {};
        obj[sourceColorSpaceName.toLowerCase()] = new Function("return this.rgb()." + sourceColorSpaceName.toLowerCase() + "();"); // Fallback
        $c87f83c5d5df175f$var$ONECOLOR[sourceColorSpaceName].propertyNames.forEach(function(propertyName, i) {
            obj[propertyName] = obj[propertyName === "black" ? "k" : propertyName[0]] = new Function("value", "isDelta", "return this." + sourceColorSpaceName.toLowerCase() + "()." + propertyName + "(value, isDelta);");
        });
        for(var prop in obj)if (obj.hasOwnProperty(prop) && $c87f83c5d5df175f$var$ONECOLOR[targetColorSpaceName].prototype[prop] === undefined) $c87f83c5d5df175f$var$ONECOLOR[targetColorSpaceName].prototype[prop] = obj[prop];
    }
    $c87f83c5d5df175f$var$installedColorSpaces.forEach(function(otherColorSpaceName) {
        installForeignMethods(colorSpaceName, otherColorSpaceName);
        installForeignMethods(otherColorSpaceName, colorSpaceName);
    });
    $c87f83c5d5df175f$var$installedColorSpaces.push(colorSpaceName);
}
$c87f83c5d5df175f$var$ONECOLOR.installMethod = function(name, fn) {
    $c87f83c5d5df175f$var$installedColorSpaces.forEach(function(colorSpace) {
        $c87f83c5d5df175f$var$ONECOLOR[colorSpace].prototype[name] = fn;
    });
};
$c87f83c5d5df175f$var$installColorSpace("RGB", [
    "red",
    "green",
    "blue",
    "alpha"
], {
    hex: function() {
        var hexString = (Math.round(255 * this._red) * 0x10000 + Math.round(255 * this._green) * 0x100 + Math.round(255 * this._blue)).toString(16);
        return "#" + "00000".substr(0, 6 - hexString.length) + hexString;
    },
    hexa: function() {
        var alphaString = Math.round(this._alpha * 255).toString(16);
        return "#" + "00".substr(0, 2 - alphaString.length) + alphaString + this.hex().substr(1, 6);
    },
    css: function() {
        return "rgb(" + Math.round(255 * this._red) + "," + Math.round(255 * this._green) + "," + Math.round(255 * this._blue) + ")";
    },
    cssa: function() {
        return "rgba(" + Math.round(255 * this._red) + "," + Math.round(255 * this._green) + "," + Math.round(255 * this._blue) + "," + this._alpha + ")";
    }
});
if (typeof define === "function" && !$c87f83c5d5df175f$var$undef(define.amd)) define(function() {
    return $c87f83c5d5df175f$var$ONECOLOR;
});
else // Node module export
module.exports = $c87f83c5d5df175f$var$ONECOLOR;
if (typeof jQuery !== "undefined" && $c87f83c5d5df175f$var$undef(jQuery.color)) jQuery.color = $c87f83c5d5df175f$var$ONECOLOR;
/*global namedColors*/ $c87f83c5d5df175f$var$namedColors = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
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
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgrey: "a9a9a9",
    darkgreen: "006400",
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
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    grey: "808080",
    green: "008000",
    greenyellow: "adff2f",
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
    lightgrey: "d3d3d3",
    lightgreen: "90ee90",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370d8",
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
    palevioletred: "d87093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "639",
    red: "f00",
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
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
};
/*global INCLUDE, installColorSpace, ONECOLOR*/ $c87f83c5d5df175f$var$installColorSpace("XYZ", [
    "x",
    "y",
    "z",
    "alpha"
], {
    fromRgb: function() {
        // http://www.easyrgb.com/index.php?X=MATH&H=02#text2
        var convert = function(channel) {
            return channel > 0.04045 ? Math.pow((channel + 0.055) / 1.055, 2.4) : channel / 12.92;
        }, r = convert(this._red), g = convert(this._green), b = convert(this._blue);
        // Reference white point sRGB D65:
        // http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
        return new $c87f83c5d5df175f$var$ONECOLOR.XYZ(r * 0.4124564 + g * 0.3575761 + b * 0.1804375, r * 0.2126729 + g * 0.7151522 + b * 0.0721750, r * 0.0193339 + g * 0.1191920 + b * 0.9503041, this._alpha);
    },
    rgb: function() {
        // http://www.easyrgb.com/index.php?X=MATH&H=01#text1
        var x = this._x, y = this._y, z = this._z, convert = function(channel) {
            return channel > 0.0031308 ? 1.055 * Math.pow(channel, 1 / 2.4) - 0.055 : 12.92 * channel;
        };
        // Reference white point sRGB D65:
        // http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
        return new $c87f83c5d5df175f$var$ONECOLOR.RGB(convert(x * 3.2404542 + y * -1.5371385 + z * -0.4985314), convert(x * -0.969266 + y * 1.8760108 + z * 0.0415560), convert(x * 0.0556434 + y * -0.2040259 + z * 1.0572252), this._alpha);
    },
    lab: function() {
        // http://www.easyrgb.com/index.php?X=MATH&H=07#text7
        var convert = function(channel) {
            return channel > 0.008856 ? Math.pow(channel, 1 / 3) : 7.787037 * channel + 4 / 29;
        }, x = convert(this._x / 95.047), y = convert(this._y / 100.000), z = convert(this._z / 108.883);
        return new $c87f83c5d5df175f$var$ONECOLOR.LAB(116 * y - 16, 500 * (x - y), 200 * (y - z), this._alpha);
    }
});
/*global INCLUDE, installColorSpace, ONECOLOR*/ $c87f83c5d5df175f$var$installColorSpace("LAB", [
    "l",
    "a",
    "b",
    "alpha"
], {
    fromRgb: function() {
        return this.xyz().lab();
    },
    rgb: function() {
        return this.xyz().rgb();
    },
    xyz: function() {
        // http://www.easyrgb.com/index.php?X=MATH&H=08#text8
        var convert = function(channel) {
            var pow = Math.pow(channel, 3);
            return pow > 0.008856 ? pow : (channel - 16 / 116) / 7.87;
        }, y = (this._l + 16) / 116, x = this._a / 500 + y, z = y - this._b / 200;
        return new $c87f83c5d5df175f$var$ONECOLOR.XYZ(convert(x) * 95.047, convert(y) * 100.000, convert(z) * 108.883, this._alpha);
    }
});
/*global one*/ $c87f83c5d5df175f$var$installColorSpace("HSV", [
    "hue",
    "saturation",
    "value",
    "alpha"
], {
    rgb: function() {
        var hue = this._hue, saturation = this._saturation, value = this._value, i = Math.min(5, Math.floor(hue * 6)), f = hue * 6 - i, p = value * (1 - saturation), q = value * (1 - f * saturation), t = value * (1 - (1 - f) * saturation), red, green, blue;
        switch(i){
            case 0:
                red = value;
                green = t;
                blue = p;
                break;
            case 1:
                red = q;
                green = value;
                blue = p;
                break;
            case 2:
                red = p;
                green = value;
                blue = t;
                break;
            case 3:
                red = p;
                green = q;
                blue = value;
                break;
            case 4:
                red = t;
                green = p;
                blue = value;
                break;
            case 5:
                red = value;
                green = p;
                blue = q;
                break;
        }
        return new $c87f83c5d5df175f$var$ONECOLOR.RGB(red, green, blue, this._alpha);
    },
    hsl: function() {
        var l = (2 - this._saturation) * this._value, sv = this._saturation * this._value, svDivisor = l <= 1 ? l : 2 - l, saturation;
        // Avoid division by zero when lightness approaches zero:
        if (svDivisor < 1e-9) saturation = 0;
        else saturation = sv / svDivisor;
        return new $c87f83c5d5df175f$var$ONECOLOR.HSL(this._hue, saturation, l / 2, this._alpha);
    },
    fromRgb: function() {
        var red = this._red, green = this._green, blue = this._blue, max = Math.max(red, green, blue), min = Math.min(red, green, blue), delta = max - min, hue, saturation = max === 0 ? 0 : delta / max, value = max;
        if (delta === 0) hue = 0;
        else switch(max){
            case red:
                hue = (green - blue) / delta / 6 + (green < blue ? 1 : 0);
                break;
            case green:
                hue = (blue - red) / delta / 6 + 1 / 3;
                break;
            case blue:
                hue = (red - green) / delta / 6 + 2 / 3;
                break;
        }
        return new $c87f83c5d5df175f$var$ONECOLOR.HSV(hue, saturation, value, this._alpha);
    }
});
/*global one*/ $c87f83c5d5df175f$var$installColorSpace("HSL", [
    "hue",
    "saturation",
    "lightness",
    "alpha"
], {
    hsv: function() {
        // Algorithm adapted from http://wiki.secondlife.com/wiki/Color_conversion_scripts
        var l = this._lightness * 2, s = this._saturation * (l <= 1 ? l : 2 - l), saturation;
        // Avoid division by zero when l + s is very small (approaching black):
        if (l + s < 1e-9) saturation = 0;
        else saturation = 2 * s / (l + s);
        return new $c87f83c5d5df175f$var$ONECOLOR.HSV(this._hue, saturation, (l + s) / 2, this._alpha);
    },
    rgb: function() {
        return this.hsv().rgb();
    },
    fromRgb: function() {
        return this.hsv().hsl();
    }
});
/*global one*/ $c87f83c5d5df175f$var$installColorSpace("CMYK", [
    "cyan",
    "magenta",
    "yellow",
    "black",
    "alpha"
], {
    rgb: function() {
        return new $c87f83c5d5df175f$var$ONECOLOR.RGB(1 - this._cyan * (1 - this._black) - this._black, 1 - this._magenta * (1 - this._black) - this._black, 1 - this._yellow * (1 - this._black) - this._black, this._alpha);
    },
    fromRgb: function() {
        // Adapted from http://www.javascripter.net/faq/rgb2cmyk.htm
        var red = this._red, green = this._green, blue = this._blue, cyan = 1 - red, magenta = 1 - green, yellow = 1 - blue, black = 1;
        if (red || green || blue) {
            black = Math.min(cyan, Math.min(magenta, yellow));
            cyan = (cyan - black) / (1 - black);
            magenta = (magenta - black) / (1 - black);
            yellow = (yellow - black) / (1 - black);
        } else black = 1;
        return new $c87f83c5d5df175f$var$ONECOLOR.CMYK(cyan, magenta, yellow, black, this._alpha);
    }
});
$c87f83c5d5df175f$var$ONECOLOR.installMethod("clearer", function(amount) {
    return this.alpha(isNaN(amount) ? -0.1 : -amount, true);
});
$c87f83c5d5df175f$var$ONECOLOR.installMethod("darken", function(amount) {
    return this.lightness(isNaN(amount) ? -0.1 : -amount, true);
});
$c87f83c5d5df175f$var$ONECOLOR.installMethod("desaturate", function(amount) {
    return this.saturation(isNaN(amount) ? -0.1 : -amount, true);
});
function $c87f83c5d5df175f$var$gs() {
    var rgb = this.rgb(), val = rgb._red * 0.3 + rgb._green * 0.59 + rgb._blue * 0.11;
    return new $c87f83c5d5df175f$var$ONECOLOR.RGB(val, val, val, this._alpha);
}
$c87f83c5d5df175f$var$ONECOLOR.installMethod("greyscale", $c87f83c5d5df175f$var$gs);
$c87f83c5d5df175f$var$ONECOLOR.installMethod("grayscale", $c87f83c5d5df175f$var$gs);
$c87f83c5d5df175f$var$ONECOLOR.installMethod("lighten", function(amount) {
    return this.lightness(isNaN(amount) ? 0.1 : amount, true);
});
$c87f83c5d5df175f$var$ONECOLOR.installMethod("mix", function(otherColor, weight) {
    otherColor = $c87f83c5d5df175f$var$ONECOLOR(otherColor).rgb();
    weight = 1 - (isNaN(weight) ? 0.5 : weight);
    var w = weight * 2 - 1, a = this._alpha - otherColor._alpha, weight1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2, weight2 = 1 - weight1, rgb = this.rgb();
    return new $c87f83c5d5df175f$var$ONECOLOR.RGB(rgb._red * weight1 + otherColor._red * weight2, rgb._green * weight1 + otherColor._green * weight2, rgb._blue * weight1 + otherColor._blue * weight2, rgb._alpha * weight + otherColor._alpha * (1 - weight));
});
$c87f83c5d5df175f$var$ONECOLOR.installMethod("negate", function() {
    var rgb = this.rgb();
    return new $c87f83c5d5df175f$var$ONECOLOR.RGB(1 - rgb._red, 1 - rgb._green, 1 - rgb._blue, this._alpha);
});
$c87f83c5d5df175f$var$ONECOLOR.installMethod("opaquer", function(amount) {
    return this.alpha(isNaN(amount) ? 0.1 : amount, true);
});
$c87f83c5d5df175f$var$ONECOLOR.installMethod("rotate", function(degrees) {
    return this.hue((degrees || 0) / 360, true);
});
$c87f83c5d5df175f$var$ONECOLOR.installMethod("saturate", function(amount) {
    return this.saturation(isNaN(amount) ? 0.1 : amount, true);
});
// Adapted from http://gimp.sourcearchive.com/documentation/2.6.6-1ubuntu1/color-to-alpha_8c-source.html
/*
    toAlpha returns a color where the values of the argument have been converted to alpha
*/ $c87f83c5d5df175f$var$ONECOLOR.installMethod("toAlpha", function(color) {
    var me = this.rgb(), other = $c87f83c5d5df175f$var$ONECOLOR(color).rgb(), epsilon = 1e-10, a = new $c87f83c5d5df175f$var$ONECOLOR.RGB(0, 0, 0, me._alpha), channels = [
        "_red",
        "_green",
        "_blue"
    ];
    channels.forEach(function(channel) {
        if (me[channel] < epsilon) a[channel] = me[channel];
        else if (me[channel] > other[channel]) a[channel] = (me[channel] - other[channel]) / (1 - other[channel]);
        else if (me[channel] > other[channel]) a[channel] = (other[channel] - me[channel]) / other[channel];
        else a[channel] = 0;
    });
    if (a._red > a._green) {
        if (a._red > a._blue) me._alpha = a._red;
        else me._alpha = a._blue;
    } else if (a._green > a._blue) me._alpha = a._green;
    else me._alpha = a._blue;
    if (me._alpha < epsilon) return me;
    channels.forEach(function(channel) {
        me[channel] = (me[channel] - other[channel]) / me._alpha + other[channel];
    });
    me._alpha *= a._alpha;
    return me;
}); /*global one*/  // This file is purely for the build system
 // Order is important to prevent channel name clashes. Lab <-> hsL
 // Convenience functions

});

parcelRegister("aPLXy", function(module, exports) {

$parcel$export(module.exports, "Blind", () => $0209183c42eee264$export$8fa5dc3b90910671, (v) => $0209183c42eee264$export$8fa5dc3b90910671 = v);
/*
 * color-blind
 * https://github.com/skratchdot/color-blind
 *
 * This source was copied from http://mudcu.be/sphere/js/Color.Blind.js
 * 
 * It contains modifications for use in node.js.
 * 
 * The original copyright is included below.
 *
 * Copyright (c) 2014 skratchdot
 * Licensed under the MIT license.
 */ /*

    The Color Blindness Simulation function is
    copyright (c) 2000-2001 by Matthew Wickline and the
    Human-Computer Interaction Resource Network ( http://hcirn.com/ ).
    
    It is used with the permission of Matthew Wickline and HCIRN,
    and is freely available for non-commercial use. For commercial use, please
    contact the Human-Computer Interaction Resource Network ( http://hcirn.com/ ).

	------------------------
	blind.protan =
		cpu = 0.735; // confusion point, u coord
		cpv = 0.265; // confusion point, v coord
		abu = 0.115807; // color axis begining point (473nm), u coord
		abv = 0.073581; // color axis begining point (473nm), v coord
		aeu = 0.471899; // color axis ending point (574nm), u coord
		aev = 0.527051; // color axis ending point (574nm), v coord
	blind.deutan =
		cpu =  1.14; // confusion point, u coord
		cpv = -0.14; // confusion point, v coord
		abu = 0.102776; // color axis begining point (477nm), u coord
		abv = 0.102864; // color axis begining point (477nm), v coord
		aeu = 0.505845; // color axis ending point (579nm), u coord
		aev = 0.493211; // color axis ending point (579nm), v coord
	blind.tritan =
		cpu =  0.171; // confusion point, u coord
		cpv = -0.003; // confusion point, v coord
		abu = 0.045391; // color axis begining point (490nm), u coord
		abv = 0.294976; // color axis begining point (490nm), v coord
		aeu = 0.665764; // color axis ending point (610nm), u coord
		aev = 0.334011; // color axis ending point (610nm), v coord
			
	m = (aev - abv) / (aeu - abu); // slope of color axis
	yi = blind[t].abv - blind[t].abu * blind[t].m; // "y-intercept" of axis (on the "v" axis at u=0)

*/ var $0209183c42eee264$export$8fa5dc3b90910671;
"use strict";
var $0209183c42eee264$var$colorProfile = "sRGB";
var $0209183c42eee264$var$gammaCorrection = 2.2;
var $0209183c42eee264$var$matrixXyzRgb = [
    3.240712470389558,
    -0.969259258688888,
    0.05563600315398933,
    -1.5372626602963142,
    1.875996969313966,
    -0.2039948802843549,
    -0.49857440415943116,
    0.041556132211625726,
    1.0570636917433989
];
var $0209183c42eee264$var$matrixRgbXyz = [
    0.41242371206635076,
    0.21265606784927693,
    0.019331987577444885,
    0.3575793401363035,
    0.715157818248362,
    0.11919267420354762,
    0.1804662232369621,
    0.0721864539171564,
    0.9504491124870351
];
// xy: coordinates, m: slope, yi: y-intercept
var $0209183c42eee264$var$blinder = {
    protan: {
        x: 0.7465,
        y: 0.2535,
        m: 1.273463,
        yi: -0.073894
    },
    deutan: {
        x: 1.4,
        y: -0.4,
        m: 0.968437,
        yi: 0.003331
    },
    tritan: {
        x: 0.1748,
        y: 0,
        m: 0.062921,
        yi: 0.292119
    },
    custom: {
        x: 0.735,
        y: 0.265,
        m: -1.059259,
        yi: 1.026914
    }
};
var $0209183c42eee264$var$convertRgbToXyz = function(o) {
    var M = $0209183c42eee264$var$matrixRgbXyz;
    var z = {};
    var R = o.R / 255;
    var G = o.G / 255;
    var B = o.B / 255;
    if ($0209183c42eee264$var$colorProfile === "sRGB") {
        R = R > 0.04045 ? Math.pow((R + 0.055) / 1.055, 2.4) : R / 12.92;
        G = G > 0.04045 ? Math.pow((G + 0.055) / 1.055, 2.4) : G / 12.92;
        B = B > 0.04045 ? Math.pow((B + 0.055) / 1.055, 2.4) : B / 12.92;
    } else {
        R = Math.pow(R, $0209183c42eee264$var$gammaCorrection);
        G = Math.pow(G, $0209183c42eee264$var$gammaCorrection);
        B = Math.pow(B, $0209183c42eee264$var$gammaCorrection);
    }
    z.X = R * M[0] + G * M[3] + B * M[6];
    z.Y = R * M[1] + G * M[4] + B * M[7];
    z.Z = R * M[2] + G * M[5] + B * M[8];
    return z;
};
var $0209183c42eee264$var$convertXyzToXyy = function(o) {
    var n = o.X + o.Y + o.Z;
    if (n === 0) return {
        x: 0,
        y: 0,
        Y: o.Y
    };
    return {
        x: o.X / n,
        y: o.Y / n,
        Y: o.Y
    };
};
$0209183c42eee264$export$8fa5dc3b90910671 = function(rgb, type, anomalize) {
    var z, v, n, line, c, slope, yi, dx, dy, dX, dY, dZ, dR, dG, dB, _r, _g, _b, ngx, ngz, M, adjust;
    if (type === "achroma") {
        z = rgb.R * 0.212656 + rgb.G * 0.715158 + rgb.B * 0.072186;
        z = {
            R: z,
            G: z,
            B: z
        };
        if (anomalize) {
            v = 1.75;
            n = v + 1;
            z.R = (v * z.R + rgb.R) / n;
            z.G = (v * z.G + rgb.G) / n;
            z.B = (v * z.B + rgb.B) / n;
        }
        return z;
    }
    line = $0209183c42eee264$var$blinder[type];
    c = $0209183c42eee264$var$convertXyzToXyy($0209183c42eee264$var$convertRgbToXyz(rgb));
    // The confusion line is between the source color and the confusion point
    slope = (c.y - line.y) / (c.x - line.x);
    yi = c.y - c.x * slope; // slope, and y-intercept (at x=0)
    // Find the change in the x and y dimensions (no Y change)
    dx = (line.yi - yi) / (slope - line.m);
    dy = slope * dx + yi;
    dY = 0;
    // Find the simulated colors XYZ coords
    z = {};
    z.X = dx * c.Y / dy;
    z.Y = c.Y;
    z.Z = (1 - (dx + dy)) * c.Y / dy;
    // Calculate difference between sim color and neutral color
    ngx = 0.312713 * c.Y / 0.329016; // find neutral grey using D65 white-point
    ngz = 0.358271 * c.Y / 0.329016;
    dX = ngx - z.X;
    dZ = ngz - z.Z;
    // find out how much to shift sim color toward neutral to fit in RGB space
    M = $0209183c42eee264$var$matrixXyzRgb;
    dR = dX * M[0] + dY * M[3] + dZ * M[6]; // convert d to linear RGB
    dG = dX * M[1] + dY * M[4] + dZ * M[7];
    dB = dX * M[2] + dY * M[5] + dZ * M[8];
    z.R = z.X * M[0] + z.Y * M[3] + z.Z * M[6]; // convert z to linear RGB
    z.G = z.X * M[1] + z.Y * M[4] + z.Z * M[7];
    z.B = z.X * M[2] + z.Y * M[5] + z.Z * M[8];
    _r = ((z.R < 0 ? 0 : 1) - z.R) / dR;
    _g = ((z.G < 0 ? 0 : 1) - z.G) / dG;
    _b = ((z.B < 0 ? 0 : 1) - z.B) / dB;
    _r = _r > 1 || _r < 0 ? 0 : _r;
    _g = _g > 1 || _g < 0 ? 0 : _g;
    _b = _b > 1 || _b < 0 ? 0 : _b;
    adjust = _r > _g ? _r : _g;
    if (_b > adjust) adjust = _b;
    // shift proportionally...
    z.R += adjust * dR;
    z.G += adjust * dG;
    z.B += adjust * dB;
    // apply gamma and clamp simulated color...
    z.R = 255 * (z.R <= 0 ? 0 : z.R >= 1 ? 1 : Math.pow(z.R, 1 / $0209183c42eee264$var$gammaCorrection));
    z.G = 255 * (z.G <= 0 ? 0 : z.G >= 1 ? 1 : Math.pow(z.G, 1 / $0209183c42eee264$var$gammaCorrection));
    z.B = 255 * (z.B <= 0 ? 0 : z.B >= 1 ? 1 : Math.pow(z.B, 1 / $0209183c42eee264$var$gammaCorrection));
    //
    if (anomalize) {
        v = 1.75;
        n = v + 1;
        z.R = (v * z.R + rgb.R) / n;
        z.G = (v * z.G + rgb.G) / n;
        z.B = (v * z.B + rgb.B) / n;
    }
    //
    return z;
};

});


parcelRegister("66fty", function(module, exports) {

$parcel$export(module.exports, "extendChroma", () => $470f4ebf1a245cde$export$531cbc729c539a3e, (v) => $470f4ebf1a245cde$export$531cbc729c539a3e = v);
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ var $470f4ebf1a245cde$export$531cbc729c539a3e;

var $oZyht = parcelRequire("oZyht");

var $ieKdW = parcelRequire("ieKdW");

var $83usW = parcelRequire("83usW");

var $9uue3 = parcelRequire("9uue3");
const $470f4ebf1a245cde$var$cam = $9uue3.cam({
    whitePoint: $83usW.illuminant.D65,
    adaptingLuminance: 40,
    backgroundLuminance: 20,
    surroundType: "average",
    discounting: false
}, $9uue3.cfs("JCh"));
const $470f4ebf1a245cde$var$xyz = $83usW.xyz($83usW.workspace.sRGB, $83usW.illuminant.D65);
const $470f4ebf1a245cde$var$jch2rgb = (jch)=>$470f4ebf1a245cde$var$xyz.toRgb($470f4ebf1a245cde$var$cam.toXyz({
        J: jch[0],
        C: jch[1],
        h: jch[2]
    }));
const $470f4ebf1a245cde$var$rgb2jch = (rgb)=>{
    const jch = $470f4ebf1a245cde$var$cam.fromXyz($470f4ebf1a245cde$var$xyz.fromRgb(rgb));
    return [
        jch.J,
        jch.C,
        jch.h
    ];
};
const [$470f4ebf1a245cde$var$jch2jab, $470f4ebf1a245cde$var$jab2jch] = (()=>{
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
const $470f4ebf1a245cde$var$jab2rgb = (jab)=>$470f4ebf1a245cde$var$jch2rgb($470f4ebf1a245cde$var$jab2jch(jab));
const $470f4ebf1a245cde$var$rgb2jab = (rgb)=>$470f4ebf1a245cde$var$jch2jab($470f4ebf1a245cde$var$rgb2jch(rgb));
const $470f4ebf1a245cde$var$con = console;
// Usage:
// console.color('rebeccapurple');
$470f4ebf1a245cde$var$con.color = (color, text = "")=>{
    const col = $oZyht(color);
    const l = col.luminance();
    $470f4ebf1a245cde$var$con.log(`%c${color} ${text}`, `background-color: ${color};padding: 5px; border-radius: 5px; color: ${l > 0.5 ? "#000" : "#fff"}`);
};
// Usage:
// console.ramp(chroma.scale(['yellow', 'navy']).mode('hsluv'));
// console.ramp(scale, 3000); // if you need to specify the length of the scale
$470f4ebf1a245cde$var$con.ramp = (scale, length = 1)=>{
    $470f4ebf1a245cde$var$con.log("%c ", `font-size: 1px;line-height: 16px;background: ${$oZyht.getCSSGradient(scale, length)};padding: 0 0 0 200px; border-radius: 2px;`);
};
const $470f4ebf1a245cde$var$online = (x1, y1, x2, y2, x3, y3, \u03B5 = 0.1)=>{
    if (x1 === x2 || y1 === y2) return true;
    const m = (y2 - y1) / (x2 - x1);
    const x4 = (y3 + x3 / m - y1 + m * x1) / (m + 1 / m);
    const y4 = y3 + x3 / m - x4 / m;
    return (x3 - x4) ** 2 + (y3 - y4) ** 2 < \u03B5 ** 2;
};
const $470f4ebf1a245cde$var$div = (\u0192, dot1, dot2, \u03B5)=>{
    const x3 = (dot1[0] + dot2[0]) / 2;
    const y3 = \u0192(x3);
    if ($470f4ebf1a245cde$var$online(...dot1, ...dot2, x3, y3, \u03B5)) return null;
    return [
        x3,
        y3
    ];
};
const $470f4ebf1a245cde$var$split = (\u0192, from, to, \u03B5 = 0.1)=>{
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
        const dot = $470f4ebf1a245cde$var$div(\u0192, points[i], points[i + 1], \u03B5);
        if (dot) {
            points.splice(i + 1, 0, dot);
            i--;
        }
    }
    for(let i = 0; i < points.length - 2; i++)if ($470f4ebf1a245cde$var$online(...points[i], ...points[i + 2], ...points[i + 1], \u03B5)) {
        points.splice(i + 1, 1);
        i--;
    }
    return points;
};
const $470f4ebf1a245cde$var$round = (x, r = 4)=>Math.round(x * 10 ** r) / 10 ** r;
const $470f4ebf1a245cde$var$getCSSGradient = (scale, length = 1, deg = 90, \u03B5 = 0.005)=>{
    const ptsr = $470f4ebf1a245cde$var$split((x)=>scale(x).gl()[0], 0, length, \u03B5);
    const ptsg = $470f4ebf1a245cde$var$split((x)=>scale(x).gl()[1], 0, length, \u03B5);
    const ptsb = $470f4ebf1a245cde$var$split((x)=>scale(x).gl()[2], 0, length, \u03B5);
    const points = Array.from(new Set([
        ...ptsr.map((a)=>$470f4ebf1a245cde$var$round(a[0])),
        ...ptsg.map((a)=>$470f4ebf1a245cde$var$round(a[0])),
        ...ptsb.map((a)=>$470f4ebf1a245cde$var$round(a[0]))
    ].sort((a, b)=>a - b)));
    return `linear-gradient(${deg}deg, ${points.map((x)=>`${scale(x).hex()} ${$470f4ebf1a245cde$var$round(x * 100)}%`).join()});`;
};
$470f4ebf1a245cde$export$531cbc729c539a3e = (chroma)=>{
    // JCH
    chroma.Color.prototype.jch = function() {
        return $470f4ebf1a245cde$var$rgb2jch(this._rgb.slice(0, 3).map((c)=>c / 255));
    };
    chroma.jch = (...args)=>new chroma.Color(...$470f4ebf1a245cde$var$jch2rgb(args).map((c)=>Math.floor(c * 255)), "rgb");
    // JAB
    chroma.Color.prototype.jab = function() {
        return $470f4ebf1a245cde$var$rgb2jab(this._rgb.slice(0, 3).map((c)=>c / 255));
    };
    chroma.jab = (...args)=>new chroma.Color(...$470f4ebf1a245cde$var$jab2rgb(args).map((c)=>Math.floor(c * 255)), "rgb");
    // HSLuv
    chroma.Color.prototype.hsluv = function() {
        return $ieKdW.rgbToHsluv(this._rgb.slice(0, 3).map((c)=>c / 255));
    };
    chroma.hsluv = (...args)=>new chroma.Color(...$ieKdW.hsluvToRgb(args).map((c)=>Math.floor(c * 255)), "rgb");
    const oldInterpol = chroma.interpolate;
    const RGB2 = {
        jch: $470f4ebf1a245cde$var$rgb2jch,
        jab: $470f4ebf1a245cde$var$rgb2jab,
        hsluv: $ieKdW.rgbToHsluv
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
    chroma.getCSSGradient = $470f4ebf1a245cde$var$getCSSGradient;
};

});

parcelRegister("8oHP0", function(module, exports) {
"use strict";

var $kBtOl = parcelRequire("kBtOl");

var $4Hsk0 = parcelRequire("4Hsk0");

var $hdtPl = parcelRequire("hdtPl");
function $61d28eb7e8c0fe94$var$DeltaE() {}
/**
 * The CIE76 color difference algorithm: a simple euclidean distance calculation.
 * http://en.wikipedia.org/wiki/Color_difference#CIE76
 * @property {object} x1 The LAB color configuration object.
 * @property {number} x1.L The lightness value, on scale of 0-100.
 * @property {number} x1.A The chroma value, on scale of -128 to 128.
 * @property {number} x1.B The hue value, on scale of -128 to 128.
 * @property {object} x2 The LAB color configuration object.
 * @property {number} x2.L The lightness value, on scale of 0-100.
 * @property {number} x2.A The chroma value, on scale of -128 to 128.
 * @property {number} x2.B The hue value, on scale of -128 to 128.
 * @returns {number} The computed dE76 value.
 * @example
 * var labColor1 = {L: 50, A: 50, B: 50};
 * var labColor2 = {L: 20, A: 20, B: 20};
 * 
 * DeltaE.getDeltaE76(labColor1, labColor2);
 */ $61d28eb7e8c0fe94$var$DeltaE.prototype.getDeltaE76 = function(lab1, lab2) {
    var deltaE = new $kBtOl(lab1, lab2);
    return deltaE.getDeltaE();
};
/**
 * The CIE94 algorithm: an iteration of the CIE76 algorithm.
 * http://en.wikipedia.org/wiki/Color_difference#CIE94
 * @property {object} x1 The LAB color configuration object.
 * @property {number} x1.L The lightness value, on scale of 0-100.
 * @property {number} x1.A The chroma value, on scale of -128 to 128.
 * @property {number} x1.B The hue value, on scale of -128 to 128.
 * @property {object} x2 The LAB color configuration object.
 * @property {number} x2.L The lightness value, on scale of 0-100.
 * @property {number} x2.A The chroma value, on scale of -128 to 128.
 * @property {number} x2.B The hue value, on scale of -128 to 128.
 * @property {object} weights The weights configuration object.
 * @property {number} weights.lightness A weight factor to apply to lightness.
 * @property {number} weights.chroma A weight factor to apply to chroma.
 * @property {number} weights.hue A weight factor to apply to hue.
 * @returns {number} The computed dE94 value.
 * @example
 * var labColor1 = {L: 50, A: 50, B: 50};
 * var labColor2 = {L: 20, A: 20, B: 20};
 * 
 * DeltaE.getDeltaE94(labColor1, labColor2);
 */ $61d28eb7e8c0fe94$var$DeltaE.prototype.getDeltaE94 = function(lab1, lab2) {
    var deltaE = new $4Hsk0(lab1, lab2);
    return deltaE.getDeltaE();
};
/**
 * The CIE2000 color difference algorithm.
 * http://en.wikipedia.org/wiki/Color_difference#CIEDE2000
 * @property {object} x1 The LAB color configuration object.
 * @property {number} x1.L The lightness value, on scale of 0-100.
 * @property {number} x1.A The chroma value, on scale of -128 to 128.
 * @property {number} x1.B The hue value, on scale of -128 to 128.
 * @property {object} x2 The LAB color configuration object.
 * @property {number} x2.L The lightness value, on scale of 0-100.
 * @property {number} x2.A The chroma value, on scale of -128 to 128.
 * @property {number} x2.B The hue value, on scale of -128 to 128.
 * @property {object} weights The weights configuration object.
 * @property {number} weights.lightness A weight factor to apply to lightness.
 * @property {number} weights.chroma A weight factor to apply to chroma.
 * @property {number} weights.hue A weight factor to apply to hue.
 * @returns {number} The computed dE00 value.
 * @example
 * var labColor1 = {L: 50, A: 50, B: 50};
 * var labColor2 = {L: 20, A: 20, B: 20};
 * 
 * DeltaE.getDeltaE00(labColor1, labColor2);
 */ $61d28eb7e8c0fe94$var$DeltaE.prototype.getDeltaE00 = function(lab1, lab2) {
    var deltaE = new $hdtPl(lab1, lab2);
    return deltaE.getDeltaE();
};
module.exports = new $61d28eb7e8c0fe94$var$DeltaE;

});
parcelRegister("kBtOl", function(module, exports) {
"use strict";
/**
 * @class dE76
 * @classdesc
 * The CIE76 color difference algorithm: a simple euclidean distance calculation.
 * http://en.wikipedia.org/wiki/Color_difference#CIE76
 * @constructs dE76
 * @memberOf DeltaE
 * @property {object} x1 The LAB color configuration object.
 * @property {number} x1.L The lightness value, on scale of 0-100.
 * @property {number} x1.A The chroma value, on scale of -128 to 128.
 * @property {number} x1.B The hue value, on scale of -128 to 128.
 * @property {object} x2 The LAB color configuration object.
 * @property {number} x2.L The lightness value, on scale of 0-100.
 * @property {number} x2.A The chroma value, on scale of -128 to 128.
 * @property {number} x2.B The hue value, on scale of -128 to 128.
 * @example
 * var deltaE = new dE76(
 *     {L:50, A:50, B:50},
 *     {L:100, A:50, B:50},
 * );
 * console.log(deltaE.getDeltaE());
 */ function $effe633653209f11$var$dE76(x1, x2) {
    this.x1 = x1;
    this.x2 = x2;
}
/**
 * Returns the dE76 value.
 * @method
 * @returns {number}
 */ $effe633653209f11$var$dE76.prototype.getDeltaE = function() {
    var x1 = this.x1;
    var x2 = this.x2;
    return Math.sqrt(Math.pow(x2.L - x1.L, 2) + Math.pow(x2.A - x1.A, 2) + Math.pow(x2.B - x1.B, 2));
};
module.exports = $effe633653209f11$var$dE76;

});

parcelRegister("4Hsk0", function(module, exports) {
"use strict";
/**
 * @class dE94
 * @classdesc
 * The CIE94 algorithm: an iteration of the CIE76 algorithm.
 * http://en.wikipedia.org/wiki/Color_difference#CIE94
 * @constructs dE94
 * @memberOf DeltaE
 * @property {object} x1 The LAB color configuration object.
 * @property {number} x1.L The lightness value, on scale of 0-100.
 * @property {number} x1.A The chroma value, on scale of -128 to 128.
 * @property {number} x1.B The hue value, on scale of -128 to 128.
 * @property {object} x2 The LAB color configuration object.
 * @property {number} x2.L The lightness value, on scale of 0-100.
 * @property {number} x2.A The chroma value, on scale of -128 to 128.
 * @property {number} x2.B The hue value, on scale of -128 to 128.
 * @property {object} weights The weights configuration object.
 * @property {number} weights.lightness A weight factor to apply to lightness.
 * @property {number} weights.chroma A weight factor to apply to chroma.
 * @property {number} weights.hue A weight factor to apply to hue.
 * @example
 * var deltaE = new dE94(
 *     {L:50, A:50, B:50},
 *     {L:100, A:50, B:50},
 * );
 * console.log(deltaE.getDeltaE());
 */ function $36c125affaaf4e04$var$dE94(x1, x2, weights) {
    this.x1 = x1;
    this.x2 = x2;
    this.weights = weights || {};
    this.weights.lightness = this.weights.lightness || 1;
    this.weights.chroma = this.weights.chroma || 1;
    this.weights.hue = this.weights.hue || 1;
    if (1 === this.weights.lightness) {
        this.weights.K1 = 0.045;
        this.weights.K2 = 0.015;
    } else {
        this.weights.K1 = 0.048;
        this.weights.K2 = 0.014;
    }
}
/**
 * Returns the dE94 value.
 * @method
 * @returns {number}
 */ $36c125affaaf4e04$var$dE94.prototype.getDeltaE = function() {
    var x1 = this.x1;
    var x2 = this.x2;
    var sqrt = Math.sqrt;
    var pow = Math.pow;
    return sqrt(pow(this.calculateL(x1, x2), 2) + pow(this.calculateA(x1, x2), 2) + pow(this.calculateB(x1, x2), 2));
};
/**
 * Calculates the lightness value.
 * @method
 * @returns {number}
 */ $36c125affaaf4e04$var$dE94.prototype.calculateL = function(x1, x2) {
    return (x1.L - x2.L) / this.weights.lightness;
};
/**
 * Calculates the chroma value.
 * @method
 * @returns {number}
 */ $36c125affaaf4e04$var$dE94.prototype.calculateA = function(x1, x2) {
    var sqrt = Math.sqrt;
    var pow = Math.pow;
    //top
    var c1 = sqrt(pow(x1.A, 2) + pow(x1.B, 2));
    var c2 = sqrt(pow(x2.A, 2) + pow(x2.B, 2));
    var cab = c1 - c2;
    // bottom
    var sc = 1 + this.weights.K1 * c1;
    return cab / (this.weights.chroma * sc);
};
/**
 * Calculates the hue value.
 * @method
 * @returns {number}
 */ $36c125affaaf4e04$var$dE94.prototype.calculateB = function(x1, x2) {
    var sqrt = Math.sqrt;
    var pow = Math.pow;
    // cab
    var c1 = sqrt(pow(x1.A, 2) + pow(x1.B, 2));
    var c2 = sqrt(pow(x2.A, 2) + pow(x2.B, 2));
    var cab = c1 - c2;
    // top
    var a = x1.A - x2.A;
    var b = x1.B - x2.B;
    var hab = sqrt(pow(a, 2) + pow(b, 2) - pow(cab, 2)) || 0;
    // bottom
    var c1 = sqrt(pow(x1.A, 2) + pow(x1.B, 2));
    var sh = 1 + this.weights.K2 * c1;
    return hab / sh;
};
module.exports = $36c125affaaf4e04$var$dE94;

});

parcelRegister("hdtPl", function(module, exports) {
"use strict";
/**
 * @class dE00
 * @classdesc
 * The CIE2000 color difference algorithm.
 * http://en.wikipedia.org/wiki/Color_difference#CIEDE2000
 * @constructs dE00
 * @memberOf DeltaE
 * @property {object} x1 The LAB color configuration object.
 * @property {number} x1.L The lightness value, on scale of 0-100.
 * @property {number} x1.A The chroma value, on scale of -128 to 128.
 * @property {number} x1.B The hue value, on scale of -128 to 128.
 * @property {object} x2 The LAB color configuration object.
 * @property {number} x2.L The lightness value, on scale of 0-100.
 * @property {number} x2.A The chroma value, on scale of -128 to 128.
 * @property {number} x2.B The hue value, on scale of -128 to 128.
 * @property {object} weights The weights configuration object.
 * @property {number} weights.lightness A weight factor to apply to lightness.
 * @property {number} weights.chroma A weight factor to apply to chroma.
 * @property {number} weights.hue A weight factor to apply to hue.
 * @example
 * var deltaE = new dE00(
 *     {L:50, A:50, B:50},
 *     {L:100, A:50, B:50},
 * );
 * console.log(deltaE.getDeltaE());
 */ function $c88ac9997c220371$var$dE00(x1, x2, weights) {
    var sqrt = Math.sqrt;
    var pow = Math.pow;
    this.x1 = x1;
    this.x2 = x2;
    this.weights = weights || {};
    this.ksubL = this.weights.lightness || 1;
    this.ksubC = this.weights.chroma || 1;
    this.ksubH = this.weights.hue || 1;
    // Delta L Prime
    this.deltaLPrime = x2.L - x1.L;
    // L Bar
    this.LBar = (x1.L + x2.L) / 2;
    // C1 & C2
    this.C1 = sqrt(pow(x1.A, 2) + pow(x1.B, 2));
    this.C2 = sqrt(pow(x2.A, 2) + pow(x2.B, 2));
    // C Bar
    this.CBar = (this.C1 + this.C2) / 2;
    // A Prime 1
    this.aPrime1 = x1.A + x1.A / 2 * (1 - sqrt(pow(this.CBar, 7) / (pow(this.CBar, 7) + pow(25, 7))));
    // A Prime 2
    this.aPrime2 = x2.A + x2.A / 2 * (1 - sqrt(pow(this.CBar, 7) / (pow(this.CBar, 7) + pow(25, 7))));
    // C Prime 1
    this.CPrime1 = sqrt(pow(this.aPrime1, 2) + pow(x1.B, 2));
    // C Prime 2
    this.CPrime2 = sqrt(pow(this.aPrime2, 2) + pow(x2.B, 2));
    // C Bar Prime
    this.CBarPrime = (this.CPrime1 + this.CPrime2) / 2;
    // Delta C Prime
    this.deltaCPrime = this.CPrime2 - this.CPrime1;
    // S sub L
    this.SsubL = 1 + 0.015 * pow(this.LBar - 50, 2) / sqrt(20 + pow(this.LBar - 50, 2));
    // S sub C
    this.SsubC = 1 + 0.045 * this.CBarPrime;
    /**
     * Properties set in getDeltaE method, for access to convenience functions
     */ // h Prime 1
    this.hPrime1 = 0;
    // h Prime 2
    this.hPrime2 = 0;
    // Delta h Prime
    this.deltahPrime = 0;
    // Delta H Prime
    this.deltaHPrime = 0;
    // H Bar Prime
    this.HBarPrime = 0;
    // T
    this.T = 0;
    // S sub H
    this.SsubH = 0;
    // R sub T
    this.RsubT = 0;
}
/**
 * Returns the deltaE value.
 * @method
 * @returns {number}
 */ $c88ac9997c220371$var$dE00.prototype.getDeltaE = function() {
    var sqrt = Math.sqrt;
    var sin = Math.sin;
    var pow = Math.pow;
    // h Prime 1
    this.hPrime1 = this.gethPrime1();
    // h Prime 2
    this.hPrime2 = this.gethPrime2();
    // Delta h Prime
    this.deltahPrime = this.getDeltahPrime();
    // Delta H Prime
    this.deltaHPrime = 2 * sqrt(this.CPrime1 * this.CPrime2) * sin(this.degreesToRadians(this.deltahPrime) / 2);
    // H Bar Prime
    this.HBarPrime = this.getHBarPrime();
    // T
    this.T = this.getT();
    // S sub H
    this.SsubH = 1 + 0.015 * this.CBarPrime * this.T;
    // R sub T
    this.RsubT = this.getRsubT();
    // Put it all together!
    var lightness = this.deltaLPrime / (this.ksubL * this.SsubL);
    var chroma = this.deltaCPrime / (this.ksubC * this.SsubC);
    var hue = this.deltaHPrime / (this.ksubH * this.SsubH);
    return sqrt(pow(lightness, 2) + pow(chroma, 2) + pow(hue, 2) + this.RsubT * chroma * hue);
};
/**
 * Returns the RT variable calculation.
 * @method
 * @returns {number}
 */ $c88ac9997c220371$var$dE00.prototype.getRsubT = function() {
    var sin = Math.sin;
    var sqrt = Math.sqrt;
    var pow = Math.pow;
    var exp = Math.exp;
    return -2 * sqrt(pow(this.CBarPrime, 7) / (pow(this.CBarPrime, 7) + pow(25, 7))) * sin(this.degreesToRadians(60 * exp(-pow((this.HBarPrime - 275) / 25, 2))));
};
/**
 * Returns the T variable calculation.
 * @method
 * @returns {number}
 */ $c88ac9997c220371$var$dE00.prototype.getT = function() {
    var cos = Math.cos;
    return 1 - 0.17 * cos(this.degreesToRadians(this.HBarPrime - 30)) + 0.24 * cos(this.degreesToRadians(2 * this.HBarPrime)) + 0.32 * cos(this.degreesToRadians(3 * this.HBarPrime + 6)) - 0.20 * cos(this.degreesToRadians(4 * this.HBarPrime - 63));
};
/**
 * Returns the H Bar Prime variable calculation.
 * @method
 * @returns {number}
 */ $c88ac9997c220371$var$dE00.prototype.getHBarPrime = function() {
    var abs = Math.abs;
    if (abs(this.hPrime1 - this.hPrime2) > 180) return (this.hPrime1 + this.hPrime2 + 360) / 2;
    return (this.hPrime1 + this.hPrime2) / 2;
};
/**
 * Returns the Delta h Prime variable calculation.
 * @method
 * @returns {number}
 */ $c88ac9997c220371$var$dE00.prototype.getDeltahPrime = function() {
    var abs = Math.abs;
    // When either C′1 or C′2 is zero, then Δh′ is irrelevant and may be set to
    // zero.
    if (0 === this.C1 || 0 === this.C2) return 0;
    if (abs(this.hPrime1 - this.hPrime2) <= 180) return this.hPrime2 - this.hPrime1;
    if (this.hPrime2 <= this.hPrime1) return this.hPrime2 - this.hPrime1 + 360;
    else return this.hPrime2 - this.hPrime1 - 360;
};
/**
 * Returns the h Prime 1 variable calculation.
 * @method
 * @returns {number}
 */ $c88ac9997c220371$var$dE00.prototype.gethPrime1 = function() {
    return this._gethPrimeFn(this.x1.B, this.aPrime1);
};
/**
 * Returns the h Prime 2 variable calculation.
 * @method
 * @returns {number}
 */ $c88ac9997c220371$var$dE00.prototype.gethPrime2 = function() {
    return this._gethPrimeFn(this.x2.B, this.aPrime2);
};
/**
 * A helper function to calculate the h Prime 1 and h Prime 2 values.
 * @method
 * @private
 * @returns {number}
 */ $c88ac9997c220371$var$dE00.prototype._gethPrimeFn = function(x, y) {
    var hueAngle;
    if (x === 0 && y === 0) return 0;
    hueAngle = this.radiansToDegrees(Math.atan2(x, y));
    if (hueAngle >= 0) return hueAngle;
    else return hueAngle + 360;
};
/**
 * Gives the radian equivalent of a specified degree angle.
 * @method
 * @returns {number}
 */ $c88ac9997c220371$var$dE00.prototype.radiansToDegrees = function(radians) {
    return radians * (180 / Math.PI);
};
/**
 * Gives the degree equivalent of a specified radian.
 * @method
 * @returns {number}
 */ $c88ac9997c220371$var$dE00.prototype.degreesToRadians = function(degrees) {
    return degrees * (Math.PI / 180);
};
module.exports = $c88ac9997c220371$var$dE00;

});



parcelRegister("4r4R6", function(module, exports) {
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ function $33ad7342ef350bdd$var$openPanelTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("paneltabcontent");
    for(let i = 0; i < tabcontent.length; i++)tabcontent[i].style.display = "none";
    // Get all elements with class="spectrum-Tabs-item" and remove the class "active"
    tablinks = document.getElementsByClassName("panel-Tabs-item");
    for(let i = 0; i < tablinks.length; i++)tablinks[i].className = tablinks[i].className.replace(" is-selected", "");
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " is-selected";
}
function $33ad7342ef350bdd$var$openPanelSubTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("panel-SubTab-Content");
    for(let i = 0; i < tabcontent.length; i++)tabcontent[i].style.display = "none";
    // Get all elements with class="spectrum-Tabs-item" and remove the class "active"
    tablinks = document.getElementsByClassName("panel-SubTabs-item");
    for(let i = 0; i < tablinks.length; i++)tablinks[i].className = tablinks[i].className.replace(" is-selected", "");
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " is-selected";
}
function $33ad7342ef350bdd$var$openCompareTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("compare-Tabs-content");
    for(let i = 0; i < tabcontent.length; i++)tabcontent[i].style.display = "none";
    // Get all elements with class="spectrum-Tabs-item" and remove the class "active"
    tablinks = document.getElementsByClassName("compare-Tabs-item");
    for(let i = 0; i < tablinks.length; i++)tablinks[i].className = tablinks[i].className.replace(" is-selected", "");
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " is-selected";
}
function $33ad7342ef350bdd$var$openSwatchTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("swatch-Tabs-content");
    for(let i = 0; i < tabcontent.length; i++)tabcontent[i].style.display = "none";
    // Get all elements with class="spectrum-Tabs-item" and remove the class "active"
    tablinks = document.getElementsByClassName("swatch-Tabs-item");
    for(let i = 0; i < tablinks.length; i++)tablinks[i].className = tablinks[i].className.replace(" is-selected", "");
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " is-selected";
}
function $33ad7342ef350bdd$var$openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for(let i = 0; i < tabcontent.length; i++)tabcontent[i].style.display = "none";
    // Get all elements with class="spectrum-Tabs-item" and remove the class "active"
    tablinks = document.getElementsByClassName("main-Tabs-item");
    for(let i = 0; i < tablinks.length; i++)tablinks[i].className = tablinks[i].className.replace(" is-selected", "");
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " is-selected";
}
function $33ad7342ef350bdd$var$openAccessibilityTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("a11y-Tabs-content");
    for(let i = 0; i < tabcontent.length; i++)tabcontent[i].style.display = "none";
    // Get all elements with class="spectrum-Tabs-item" and remove the class "active"
    tablinks = document.getElementsByClassName("a11y-Tabs-item");
    for(let i = 0; i < tablinks.length; i++)tablinks[i].className = tablinks[i].className.replace(" is-selected", "");
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " is-selected";
}
function $33ad7342ef350bdd$var$openDetailTab(evt, tabName, colors) {
    // Declare all variables
    var i, tabcontent, tablinks;
    let thisId = evt.target.id;
    if (!tabName) tabName = thisId.concat("Content");
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabDetailContent");
    for(let i = 0; i < tabcontent.length; i++)tabcontent[i].style.display = "none";
    // Get all elements with class="spectrum-Tabs-item" and remove the class "active"
    tablinks = document.getElementsByClassName("detail-Tabs-item");
    for(let i = 0; i < tablinks.length; i++)tablinks[i].className = tablinks[i].className.replace(" is-selected", "");
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " is-selected";
    tabName;
}
function $33ad7342ef350bdd$var$openAppTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("AppTab");
    for(let i = 0; i < tabcontent.length; i++)tabcontent[i].style.display = "none";
    // Get all elements with class="spectrum-Tabs-item" and remove the class "active"
    tablinks = document.getElementsByClassName("app-Tabs-item");
    for(let i = 0; i < tablinks.length; i++)tablinks[i].className = tablinks[i].className.replace(" is-selected", "");
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "grid";
    evt.currentTarget.className += " is-selected";
}
function $33ad7342ef350bdd$var$openSideNavItem(evt, contentName) {
    // Declare all variables
    var i, sidenavcontent, sidenavlinks;
    // Get all elements with class="sideNavContent" and hide them
    sidenavcontent = document.getElementsByClassName("sideNavContent");
    for(let i = 0; i < sidenavcontent.length; i++)sidenavcontent[i].style.display = "none";
    // Get all elements with class="spectrum-SideNav-item" and remove the class "is-selected"
    sidenavlinks = document.getElementsByClassName("spectrum-SideNav-item");
    for(let i = 0; i < sidenavlinks.length; i++)sidenavlinks[i].className = sidenavlinks[i].className.replace(" is-selected", "");
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(contentName).style.display = "grid";
    evt.currentTarget.parentNode.className += " is-selected";
}
function $33ad7342ef350bdd$var$openColorTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("colorTabsWrapper");
    for(let i = 0; i < tabcontent.length; i++)tabcontent[i].style.display = "none";
    // Get all elements with class="spectrum-Tabs-item" and remove the class "active"
    tablinks = document.getElementsByClassName("color-Tabs-item");
    for(let i = 0; i < tablinks.length; i++)tablinks[i].className = tablinks[i].className.replace(" is-selected", "");
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " is-selected";
}
function $33ad7342ef350bdd$var$openScaleTab(evt, tabName, scaleType) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName(`${scaleType}TabsWrapper`);
    for(let i = 0; i < tabcontent.length; i++)tabcontent[i].style.display = "none";
    // Get all elements with class="spectrum-Tabs-item" and remove the class "active"
    tablinks = document.getElementsByClassName(`${scaleType}-Tabs-item`);
    for(let i = 0; i < tablinks.length; i++)tablinks[i].className = tablinks[i].className.replace(" is-selected", "");
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " is-selected";
}
window.openPanelTab = $33ad7342ef350bdd$var$openPanelTab;
window.openTab = $33ad7342ef350bdd$var$openTab;
window.openAccessibilityTab = $33ad7342ef350bdd$var$openAccessibilityTab;
window.openDetailTab = $33ad7342ef350bdd$var$openDetailTab;
window.openAppTab = $33ad7342ef350bdd$var$openAppTab;
window.openSideNavItem = $33ad7342ef350bdd$var$openSideNavItem;
window.openColorTab = $33ad7342ef350bdd$var$openColorTab;
window.openSwatchTab = $33ad7342ef350bdd$var$openSwatchTab;
window.openScaleTab = $33ad7342ef350bdd$var$openScaleTab;
window.openPanelSubTab = $33ad7342ef350bdd$var$openPanelSubTab;
window.openCompareTab = $33ad7342ef350bdd$var$openCompareTab;
module.exports = {
    openPanelTab: $33ad7342ef350bdd$var$openPanelTab,
    openTab: $33ad7342ef350bdd$var$openTab,
    openAccessibilityTab: $33ad7342ef350bdd$var$openAccessibilityTab,
    openDetailTab: $33ad7342ef350bdd$var$openDetailTab,
    openPanelSubTab: $33ad7342ef350bdd$var$openPanelSubTab,
    openAppTab: $33ad7342ef350bdd$var$openAppTab,
    openSideNavItem: $33ad7342ef350bdd$var$openSideNavItem,
    openScaleTab: $33ad7342ef350bdd$var$openScaleTab,
    openCompareTab: $33ad7342ef350bdd$var$openCompareTab,
    openColorTab: $33ad7342ef350bdd$var$openColorTab
};

});

parcelRegister("9AhIT", function(module, exports) {
/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ function $6fa53948fde3b943$var$toggleTooltip(targetId) {
    let tooltip = document.getElementById(targetId);
    if (!tooltip.classList.contains("is-open")) tooltip.classList.add("is-open");
    else tooltip.classList.remove("is-open");
}
window.toggleTooltip = $6fa53948fde3b943$var$toggleTooltip;
module.exports = {
    toggleTooltip: $6fa53948fde3b943$var$toggleTooltip
};

});


//# sourceMappingURL=tools.62e58b0d.js.map
