
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
var $W2lsj = parcelRequire("W2lsj");

// Define colors and ratios
let $2563643d2c11d684$var$baseRatios = [
    -1.1,
    1,
    1.12,
    1.25,
    1.45,
    1.75,
    2.25,
    3.01,
    4.52,
    7,
    11,
    16
];
let $2563643d2c11d684$var$uiRatios = [
    1,
    1.12,
    1.3,
    2,
    3.01,
    4.52,
    7,
    11,
    16
];
let $2563643d2c11d684$var$purpleScale = new $W2lsj.Color({
    name: "purple",
    colorKeys: [
        "#7a4beb",
        "#ac80f4",
        "#2f0071"
    ],
    colorspace: "LAB",
    ratios: $2563643d2c11d684$var$uiRatios
});
let $2563643d2c11d684$var$blueScale = new $W2lsj.Color({
    name: "blue",
    colorKeys: [
        "#0272d4",
        "#b2f0ff",
        "#55cfff",
        "#0037d7"
    ],
    colorspace: "CAM02",
    ratios: $2563643d2c11d684$var$uiRatios
});
let $2563643d2c11d684$var$greenScale = new $W2lsj.Color({
    name: "green",
    colorKeys: [
        "#4eb076",
        "#2a5a45",
        "#a7e3b4"
    ],
    colorspace: "HSL",
    ratios: $2563643d2c11d684$var$uiRatios
});
let $2563643d2c11d684$var$redScale = new $W2lsj.Color({
    name: "red",
    colorKeys: [
        "#ea2825",
        "#ffc1ad",
        "#fd937e"
    ],
    colorspace: "LAB",
    ratios: $2563643d2c11d684$var$uiRatios
});
let $2563643d2c11d684$var$goldScale = new $W2lsj.Color({
    name: "gold",
    colorKeys: [
        "#e8b221",
        "#a06a00",
        "#ffdd7c"
    ],
    colorspace: "HSL",
    ratios: $2563643d2c11d684$var$uiRatios
});
let $2563643d2c11d684$var$grayScale = new $W2lsj.BackgroundColor({
    name: "gray",
    colorKeys: [
        "#4a5b7b",
        "#72829c",
        "#a6b2c6"
    ],
    colorspace: "HSL",
    ratios: $2563643d2c11d684$var$baseRatios
});
let $2563643d2c11d684$var$myTheme = new $W2lsj.Theme({
    backgroundColor: $2563643d2c11d684$var$grayScale,
    colors: [
        $2563643d2c11d684$var$grayScale,
        $2563643d2c11d684$var$purpleScale,
        $2563643d2c11d684$var$blueScale,
        $2563643d2c11d684$var$greenScale,
        $2563643d2c11d684$var$redScale,
        $2563643d2c11d684$var$goldScale
    ],
    lightness: 100,
    contrast: 1
});
function $2563643d2c11d684$var$setup() {
    let br = document.getElementById("sliderBrightness");
    br.min = "0";
    br.max = "100";
    br.defaultValue = "95";
    let calendar = document.getElementById("calendar");
    calendar.innerHTML = " ";
    let monthNames = [
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
    ];
    let d = new Date();
    let month = monthNames[d.getMonth()];
    let colNum = 5;
    for(let i = 0; i < colNum; i++){
        let col = document.createElement("div");
        col.className = "calendarColumn";
        col.id = "calendarColumn" + i;
        let head = document.createElement("div");
        head.className = "calendarColumnHeader";
        let today = new Date();
        let date = month + " " + (today.getDate() + i);
        head.innerHTML = date;
        col.appendChild(head);
        let hours = 18;
        for(let i = 0; i < hours; i++){
            let half = document.createElement("div");
            let full = document.createElement("div");
            half.className = "calendar30";
            full.className = "calendar60";
            col.appendChild(half);
            col.appendChild(full);
        }
        calendar.appendChild(col);
    }
}
$2563643d2c11d684$var$setup();
function $2563643d2c11d684$var$createEvent(col, dur, title, meta, cat, pos, width, customClass) {
    if (!width) width = "eventSingle";
    // pos is position related to half-hour increments. Ie, how many rows down.
    let en = document.createElement("div");
    let head = document.createElement("span");
    let t = document.createTextNode(title);
    head.className = "eventTitle";
    head.appendChild(t);
    let detail = document.createElement("span");
    let d = document.createTextNode(meta);
    detail.className = "eventMeta";
    detail.appendChild(d);
    en.classList.add("event", dur, cat, width, customClass);
    en.appendChild(head);
    en.appendChild(detail);
    en.style.top = 56 + pos * 33 + "px";
    col.appendChild(en);
}
let $2563643d2c11d684$var$col0 = document.getElementById("calendarColumn0");
let $2563643d2c11d684$var$col1 = document.getElementById("calendarColumn1");
let $2563643d2c11d684$var$col2 = document.getElementById("calendarColumn2");
let $2563643d2c11d684$var$col3 = document.getElementById("calendarColumn3");
let $2563643d2c11d684$var$col4 = document.getElementById("calendarColumn4");
// Populate calendar with events
// Col 0
$2563643d2c11d684$var$createEvent($2563643d2c11d684$var$col0, "event30", "Gym", "-", "catPersonal", 1, "eventDouble");
$2563643d2c11d684$var$createEvent($2563643d2c11d684$var$col0, "event90", "Office Hour", "UT-331", "catPrimary", 1, "eventDouble");
$2563643d2c11d684$var$createEvent($2563643d2c11d684$var$col0, "event60", "Research Planning", "UT-105", "catDefault", 6);
$2563643d2c11d684$var$createEvent($2563643d2c11d684$var$col0, "event90", "Office Hour", "UT-201", "catPrimary", 10);
$2563643d2c11d684$var$createEvent($2563643d2c11d684$var$col0, "event60", "Project Sync", "UT-220", "catBlue", 16);
// Col 1
$2563643d2c11d684$var$createEvent($2563643d2c11d684$var$col1, "event30", "Gym", "-", "catPersonal", 1);
$2563643d2c11d684$var$createEvent($2563643d2c11d684$var$col1, "event120", "Employee Meeting", "UT-203", "catImportant", 4);
$2563643d2c11d684$var$createEvent($2563643d2c11d684$var$col1, "event90", "Leonardo integration", "https://leonardocolor.io", "catBlue", 12, "eventSingle", "is-selected");
// Col 2
$2563643d2c11d684$var$createEvent($2563643d2c11d684$var$col2, "event30", "Gym", "-", "catPersonal", 1);
$2563643d2c11d684$var$createEvent($2563643d2c11d684$var$col2, "event60", "Workshop", "UT-440", "catBlue", 4);
$2563643d2c11d684$var$createEvent($2563643d2c11d684$var$col2, "event90", "Office Hour", "UT-201", "catPrimary", 10, "eventDouble");
$2563643d2c11d684$var$createEvent($2563643d2c11d684$var$col2, "event30", "Color sync", "UT-220", "catDefault", 10, "eventDouble");
$2563643d2c11d684$var$createEvent($2563643d2c11d684$var$col2, "event30", "Submission Deadline", "-", "catUrgent", 18);
// Col 3
$2563643d2c11d684$var$createEvent($2563643d2c11d684$var$col3, "event30", "Gym", "-", "catPersonal", 1);
$2563643d2c11d684$var$createEvent($2563643d2c11d684$var$col3, "event60", "User Interview", "UT-203", "catDefault", 4);
$2563643d2c11d684$var$createEvent($2563643d2c11d684$var$col3, "event60", "User Interview", "UT-203", "catDefault", 7);
$2563643d2c11d684$var$createEvent($2563643d2c11d684$var$col3, "event60", "User Interview", "UT-203", "catDefault", 12);
$2563643d2c11d684$var$createEvent($2563643d2c11d684$var$col3, "event120", "Sprint Demo", "UT-440", "catImportant", 16, "eventDouble");
$2563643d2c11d684$var$createEvent($2563643d2c11d684$var$col3, "event60", "Color palette review", "UT-330", "catBlue", 19, "eventDouble");
// Col 4
$2563643d2c11d684$var$createEvent($2563643d2c11d684$var$col4, "event30", "Gym", "-", "catPersonal", 1);
$2563643d2c11d684$var$createEvent($2563643d2c11d684$var$col4, "event60", "Workshop", "UT-440", "catBlue", 4);
$2563643d2c11d684$var$createEvent($2563643d2c11d684$var$col4, "event120", "Backlog grooming", "UT-112", "catPrimary", 8);
function $2563643d2c11d684$var$createColors() {
    let br = document.getElementById("sliderBrightness");
    let con = document.getElementById("sliderContrast");
    let sat = document.getElementById("sliderSaturation");
    let mode = document.getElementById("darkMode");
    let brVal = Number(br.value);
    let conVal = Number(con.value);
    let satVal = Number(sat.value);
    if (mode.checked == true) {
        br.min = "0";
        br.max = "30";
        if (brVal > 30) {
            brVal = 15;
            br.value = 15;
        }
        document.documentElement.style.setProperty("--shadow-color", "rgba(0, 0, 0, 0.5)");
    } else {
        br.min = "85";
        br.max = "100";
        if (brVal < 80) {
            brVal = 95;
            br.value = 95;
        }
        document.documentElement.style.setProperty("--shadow-color", "rgba(0, 0, 0, 0.1)");
    }
    $2563643d2c11d684$var$myTheme.lightness = brVal;
    $2563643d2c11d684$var$myTheme.contrast = conVal;
    $2563643d2c11d684$var$myTheme.saturation = satVal;
    let colorPairs = $2563643d2c11d684$var$myTheme.contrastColorPairs;
    for (const [key, value] of Object.entries(colorPairs))document.documentElement.style.setProperty(`--${key}`, value);
}
$2563643d2c11d684$var$createColors();
document.getElementById("darkMode").addEventListener("input", $2563643d2c11d684$var$createColors);
document.getElementById("sliderBrightness").addEventListener("input", $2563643d2c11d684$var$createColors);
document.getElementById("sliderContrast").addEventListener("input", $2563643d2c11d684$var$createColors);
document.getElementById("sliderSaturation").addEventListener("input", $2563643d2c11d684$var$createColors);
window.createColors = $2563643d2c11d684$var$createColors;


//# sourceMappingURL=demo.ac045c3d.js.map
