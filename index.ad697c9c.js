
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
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















































parcelRequire("be61U");

var $jzSuI = parcelRequire("jzSuI");

var $lPtXq = parcelRequire("lPtXq");
parcelRequire("6A7nx");
parcelRequire("4r4R6");
parcelRequire("9AhIT");
(0, (/*@__PURE__*/$parcel$interopDefault($lPtXq)))("./spectrum-css-icons.svg");
(0, (/*@__PURE__*/$parcel$interopDefault($lPtXq)))("./spectrum-icons.svg");

var $aSy1q = parcelRequire("aSy1q");
var $7e2911337f911eb2$require$readFileSync = $aSy1q.readFileSync;

var $kqltW = parcelRequire("kqltW");
const $7e2911337f911eb2$var$options = {
};

$kqltW().use((parcelRequire("3A3O3"))($7e2911337f911eb2$var$options)).process('<html dir="ltr">\n<include src="src/htmlHead.html"></include>\n\n<body class="spectrum spectrum--medium appFrame">\n    <div id="pageLoader">\n        <div class="spectrum-ProgressCircle spectrum-ProgressCircle--indeterminate spectrum-ProgressCircle--large">\n            <div class="spectrum-ProgressCircle-track"></div>\n            <div class="spectrum-ProgressCircle-fills">\n                <div class="spectrum-ProgressCircle-fillMask1">\n                    <div class="spectrum-ProgressCircle-fillSubMask1">\n                        <div class="spectrum-ProgressCircle-fill"></div>\n                    </div>\n                </div>\n                <div class="spectrum-ProgressCircle-fillMask2">\n                    <div class="spectrum-ProgressCircle-fillSubMask2">\n                        <div class="spectrum-ProgressCircle-fill"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div id="page" style="opacity: 0;">\n        <include src="src/views/header.html"></include>\n        <include src="src/views/tab_home.html"></include>\n    </div>\n\n    <script src="index.js" type="module"></script>\n\n</html>\n').then((result)=>result);
// Redirect for URL parameters
let $7e2911337f911eb2$var$url = new URL(window.location);
let $7e2911337f911eb2$var$params = new URLSearchParams($7e2911337f911eb2$var$url.search.slice(1));
if ($7e2911337f911eb2$var$params.has("colorKeys") || $7e2911337f911eb2$var$params.has("name")) {
    let newURL;
    // if URL includes "index", replace with "theme"
    if (JSON.stringify($7e2911337f911eb2$var$url.href).includes("index")) newURL = $7e2911337f911eb2$var$url.href.replace("index", "theme");
    else newURL = $7e2911337f911eb2$var$url.href.replace("/?", "/theme?");
    window.location.replace(newURL);
}
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event)=>{
    if (event.matches) {
        //dark mode
        document.querySelector("body").classList.remove("spectrum--light");
        document.querySelector("body").classList.add("spectrum--darkest");
    } else {
        //light mode
        document.querySelector("body").classList.add("spectrum--light");
        document.querySelector("body").classList.remove("spectrum--darkest");
    }
});
const $7e2911337f911eb2$var$mq = window.matchMedia("(prefers-color-scheme: dark)");
if ($7e2911337f911eb2$var$mq.matches) //dark mode
document.querySelector("body").classList.add("spectrum--darkest");
else //light mode
document.querySelector("body").classList.add("spectrum--light");
document.getElementById("tabHome").click();
document.getElementById("welcome").click();
window.onload = function() {
    // On window load, transition to remove page loader
    (0, $jzSuI.pageLoader)();
};


//# sourceMappingURL=index.ad697c9c.js.map
