
      var $parcel$global = globalThis;
    
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

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
parcelRegister("bnPzD", function(module, exports) {
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ function $8499d930796eb428$var$createTable(headers, rows, destId, quiet = false) {
    let dest = document.getElementById(destId);
    let table = document.createElement("table");
    table.className = quiet ? "spectrum-Table spectrum-Table--sizeM spectrum-Table--quiet" : "spectrum-Table spectrum-Table--sizeM";
    let tHead = document.createElement("thead");
    tHead.className = "spectrum-Table-head";
    let hTr = document.createElement("tr");
    let tBody = document.createElement("tbody");
    tBody.className = "spectrum-Table-body";
    for(let i = 0; i < headers.length; i++){
        let head = document.createElement("th");
        head.className = "spectrum-Table-headCell";
        head.innerHTML = headers[i];
        hTr.appendChild(head);
    }
    for(let i = 0; i < rows.length; i++){
        let row = document.createElement("tr");
        row.className = "spectrum-Table-row";
        for(let j = 0; j < rows[i].length; j++){
            let item = document.createElement("td");
            item.className = "spectrum-Table-cell";
            item.innerHTML = rows[i][j];
            row.appendChild(item);
        }
        tBody.appendChild(row);
    }
    tHead.appendChild(hTr);
    table.appendChild(tHead);
    table.appendChild(tBody);
    dest.appendChild(table);
}
module.exports = {
    createTable: $8499d930796eb428$var$createTable
};

});

parcelRegister("67uIO", function(module, exports) {
(function(a, b) {
    if ("function" == typeof define && define.amd) define([], b);
    else b();
})(module.exports, function() {
    "use strict";
    function b(a, b) {
        return "undefined" == typeof b ? b = {
            autoBom: !1
        } : "object" != typeof b && (console.warn("Deprecated: Expected third argument to be a object"), b = {
            autoBom: !b
        }), b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob([
            "\uFEFF",
            a
        ], {
            type: a.type
        }) : a;
    }
    function c(a, b, c) {
        var d = new XMLHttpRequest;
        d.open("GET", a), d.responseType = "blob", d.onload = function() {
            g(d.response, b, c);
        }, d.onerror = function() {
            console.error("could not download file");
        }, d.send();
    }
    function d(a) {
        var b = new XMLHttpRequest;
        b.open("HEAD", a, !1);
        try {
            b.send();
        } catch (a) {}
        return 200 <= b.status && 299 >= b.status;
    }
    function e(a) {
        try {
            a.dispatchEvent(new MouseEvent("click"));
        } catch (c) {
            var b = document.createEvent("MouseEvents");
            b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(b);
        }
    }
    var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof $parcel$global && $parcel$global.global === $parcel$global ? $parcel$global : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function() {} : "download" in HTMLAnchorElement.prototype && !a ? function(b, g, h) {
        var i = f.URL || f.webkitURL, j = document.createElement("a");
        g = g || b.name || "download", j.download = g, j.rel = "noopener", "string" == typeof b ? (j.href = b, j.origin === location.origin ? e(j) : d(j.href) ? c(b, g, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b), setTimeout(function() {
            i.revokeObjectURL(j.href);
        }, 4E4), setTimeout(function() {
            e(j);
        }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(f, g, h) {
        if (g = g || f.name || "download", "string" != typeof f) navigator.msSaveOrOpenBlob(b(f, h), g);
        else if (d(f)) c(f, g, h);
        else {
            var i = document.createElement("a");
            i.href = f, i.target = "_blank", setTimeout(function() {
                e(i);
            });
        }
    } : function(b, d, e, g) {
        if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), "string" == typeof b) return c(b, d, e);
        var h = "application/octet-stream" === b.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
        if ((j || h && i || a) && "undefined" != typeof FileReader) {
            var k = new FileReader;
            k.onloadend = function() {
                var a = k.result;
                a = j ? a : a.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = a : location = a, g = null;
            }, k.readAsDataURL(b);
        } else {
            var l = f.URL || f.webkitURL, m = l.createObjectURL(b);
            g ? g.location = m : location.href = m, g = null, setTimeout(function() {
                l.revokeObjectURL(m);
            }, 4E4);
        }
    });
    f.saveAs = g.saveAs = g, module.exports = g;
});

});

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
parcelRequire("W2lsj");

var $lPtXq = parcelRequire("lPtXq");
parcelRequire("jgIgM");
parcelRequire("aDYzc");
var $9165ecfe625ca0df$exports = {};
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
var $6A7nx = parcelRequire("6A7nx");

var $oZyht = parcelRequire("oZyht");

var $66fty = parcelRequire("66fty");
var $9165ecfe625ca0df$require$extendChroma = $66fty.extendChroma;
$9165ecfe625ca0df$require$extendChroma($oZyht);
class $9165ecfe625ca0df$var$QualitativeScale {
    constructor({ sampleColors: sampleColors, keeperColors: keeperColors, output: output, cvdSupport: cvdSupport }){
        this._sampleColors = sampleColors;
        this._keeperColors = keeperColors;
        this._output = output;
        this._cvdSupport = cvdSupport;
    }
    set sampleColors(colors) {
        this._sampleColors = colors;
    }
    get sampleColors() {
        return this._sampleColors;
    }
    set keeperColors(colors) {
        this._keeperColors = colors;
    }
    get keeperColors() {
        return this._keeperColors;
    }
    set output(output) {
        this._output = output;
        // then run all keeper colors through conversion filter
        let formattedColors = this._keeperColors.map((c)=>{
            return (0, $6A7nx.convertColorValue)(c, output);
        });
        this._keeperColors = formattedColors;
    }
    get output() {
        return this._output;
    }
    set cvdSupport(cvds) {
        this._cvdSupport = cvds;
    }
}
let $9165ecfe625ca0df$var$_qualitativeScale = new $9165ecfe625ca0df$var$QualitativeScale({
    sampleColors: [
        "#ff7d67",
        "#e83326",
        "#ac0000",
        "#680000",
        "#f98517",
        "#c85b00",
        "#903900",
        "#561e01",
        "#c6a000",
        "#997600",
        "#6c4f00",
        "#412c00",
        "#72b622",
        "#4f890e",
        "#355e07",
        "#1e3604",
        "#33b983",
        "#008c5c",
        "#00603d",
        "#0e3724",
        "#5ba8f7",
        "#1077f3",
        "#0050ae",
        "#002f64",
        "#bf8cfc",
        "#9b54f3",
        "#7018d3",
        "#3d137d",
        "#ee74ee",
        "#cc34cd",
        "#970098",
        "#551153",
        "#ff7d67",
        "#e83326",
        "#ac0000",
        "#680000",
        "#f98517",
        "#c85b00",
        "#903900",
        "#561e01",
        "#c6a000",
        "#997600",
        "#6c4f00",
        "#412c00",
        "#72b622",
        "#4f890e",
        "#355e07",
        "#1e3604",
        "#33b983",
        "#008c5c",
        "#00603d",
        "#0e3724",
        "#5ba8f7",
        "#1077f3",
        "#0050ae",
        "#002f64",
        "#bf8cfc",
        "#9b54f3",
        "#7018d3",
        "#3d137d",
        "#ee74ee",
        "#cc34cd",
        "#970098",
        "#551153"
    ],
    keeperColors: [],
    output: "HEX",
    cvdSupport: [
        "protanopia",
        "deuteranopia",
        "tritanopia",
        "achromatopsia"
    ]
});
$9165ecfe625ca0df$exports = {
    _qualitativeScale: $9165ecfe625ca0df$var$_qualitativeScale
};


parcelRequire("6A7nx");
parcelRequire("4r4R6");
var $3c376242dd3fb361$exports = {};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ var $81ca9048247c0114$exports = {};
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
var $6A7nx = parcelRequire("6A7nx");

var $7yS3p = parcelRequire("7yS3p");

var $4O58B = parcelRequire("4O58B");
var $9c50c98679544d2a$exports = {};
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
var $jgIgM = parcelRequire("jgIgM");

var $aDYzc = parcelRequire("aDYzc");

var $9rz6o = parcelRequire("9rz6o");

var $47sY3 = parcelRequire("47sY3");

var $gv7Pp = parcelRequire("gv7Pp");

var $6Ufyd = parcelRequire("6Ufyd");

var $6A7nx = parcelRequire("6A7nx");
(0, (/*@__PURE__*/$parcel$interopDefault($47sY3))).registerLanguage("javascript", (0, (/*@__PURE__*/$parcel$interopDefault($gv7Pp))));
(0, (/*@__PURE__*/$parcel$interopDefault($47sY3))).registerLanguage("css", (0, (/*@__PURE__*/$parcel$interopDefault($6Ufyd))));
function $9c50c98679544d2a$var$createSamples(samples, scaleType) {
    const colorClass = scaleType === "sequential" ? (0, $jgIgM._sequentialScale) : (0, $aDYzc._divergingScale);
    const originalSwatches = colorClass.swatches;
    const originalOutput = colorClass.output;
    const outputFormatPicker = document.getElementById(`${scaleType}_format`);
    const output = outputFormatPicker.value;
    const quoteSwitch = document.getElementById(`${scaleType}paramStringQuotes`);
    const quotes = quoteSwitch.checked;
    // reassign new swatch value
    colorClass.swatches = samples;
    const panelOutputContent = document.getElementById(`${scaleType}ColorScaleOutput`);
    panelOutputContent.innerHTML = " ";
    let samplesWrapper = document.getElementById(`${scaleType}SampleSwatches`);
    samplesWrapper.innerHTML = " ";
    let sampleColors = colorClass.colors;
    for(let i = 0; i < samples; i++)(0, $9rz6o.createHtmlElement)({
        element: "div",
        className: "sampleSwatch",
        styles: {
            backgroundColor: sampleColors[i]
        },
        appendTo: `${scaleType}SampleSwatches`
    });
    colorClass.output = output;
    sampleColors = colorClass.colors;
    colorClass.samples = colorClass.output === "HEX" || colorClass.output === "RGB" ? sampleColors : sampleColors.map((c)=>{
        return (0, $6A7nx.cssColorToRgb)(c);
    });
    let colorvalueString = quotes ? sampleColors.map((c)=>{
        return `"${c}"`;
    }).toString().replaceAll(",", ", ") : sampleColors.toString().replaceAll(",", ", ");
    panelOutputContent.innerHTML = colorvalueString;
    // Reset color class to original swatches
    colorClass.swatches = originalSwatches;
    colorClass.output = originalOutput;
}
$9c50c98679544d2a$exports = {
    createSamples: $9c50c98679544d2a$var$createSamples
};


var $b23be941d43c3510$exports = {};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ var $588a4618c0e29cdf$exports = {};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ 
var $dlNIw = parcelRequire("dlNIw");

var $aDYzc = parcelRequire("aDYzc");

var $jgIgM = parcelRequire("jgIgM");
function $588a4618c0e29cdf$var$heatmap(scaleType) {
    const colorClass = scaleType === "sequential" ? (0, $jgIgM._sequentialScale) : (0, $aDYzc._divergingScale);
    // set the dimensions and margins of the graph
    var margin = {
        top: 30,
        right: 30,
        bottom: 30,
        left: 30
    }, width = 250 - margin.left - margin.right, height = 250 - margin.top - margin.bottom;
    // append the svg object to the body of the page
    var svg = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).select(`#${scaleType}Heatmap`).append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    // Labels of row and columns
    var myGroups = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J"
    ];
    var myVars = [
        "v1",
        "v2",
        "v3",
        "v4",
        "v5",
        "v6",
        "v7",
        "v8",
        "v9",
        "v10"
    ];
    // Build X scales and axis:
    var x = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).scaleBand().range([
        0,
        width
    ]).domain(myGroups).padding(0.01);
    svg.append("g").attr("transform", "translate(0," + height + ")").call((0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).axisBottom(x));
    // Build X scales and axis:
    var y = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).scaleBand().range([
        height,
        0
    ]).domain(myVars).padding(0.01);
    svg.append("g").call((0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).axisLeft(y));
    colorClass.swatches = 100;
    var myColor = colorClass.colorFunction;
    (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv").then(function(data) {
        svg.selectAll().data(data, function(d) {
            return d.group + ":" + d.variable;
        }).join("rect").attr("x", function(d) {
            return x(d.group);
        }).attr("y", function(d) {
            return y(d.variable);
        }).attr("width", x.bandwidth()).attr("height", y.bandwidth()).style("fill", function(d) {
            return myColor(d.value).hex();
        });
    });
}
$588a4618c0e29cdf$exports = {
    heatmap: $588a4618c0e29cdf$var$heatmap
};


var $3b9e365a98426c2f$exports = {};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ 
var $dlNIw = parcelRequire("dlNIw");

var $aDYzc = parcelRequire("aDYzc");

var $jgIgM = parcelRequire("jgIgM");
function $3b9e365a98426c2f$var$choropleth(scaleType) {
    const colorClass = scaleType === "sequential" ? (0, $jgIgM._sequentialScale) : (0, $aDYzc._divergingScale);
    const originalSwatches = colorClass.swatches;
    colorClass.swatches = 7;
    // The svg
    var margin = {
        top: 30,
        right: 30,
        bottom: 30,
        left: 30
    }, width = 700 - margin.left - margin.right, height = 350 - margin.top - margin.bottom;
    var svg = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).select(`#${scaleType}Choropleth`).append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g");
    // .attr("transform",
    //       "translate(" + margin.left + "," + margin.top + ")");
    // Map and projection
    const path = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).geoPath();
    const projection = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).geoNaturalEarth1().scale(100).center([
        0,
        -10
    ]).translate([
        width / 2.5,
        height / 1.75
    ]);
    // Data and color scale
    let data = new Map();
    const colorScale = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).scaleThreshold().domain([
        100000,
        1000000,
        10000000,
        30000000,
        100000000,
        500000000
    ]).range(colorClass.colors);
    // const colorScale = colorClass.colorFunction;
    // Load external data and boot
    Promise.all([
        (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"),
        (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv", function(d) {
            data.set(d.code, +d.pop);
        })
    ]).then(function(loadData) {
        let topo = loadData[0];
        // Draw the map
        svg.append("g").selectAll("path").data(topo.features).join("path")// draw each country
        .attr("d", (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).geoPath().projection(projection))// set the color of each country
        .attr("fill", function(d) {
            d.total = data.get(d.id) || 0;
            return colorScale(d.total);
        });
    });
    colorClass.swatches = originalSwatches;
}
$3b9e365a98426c2f$exports = {
    choropleth: $3b9e365a98426c2f$var$choropleth
};


var $013174d8cc933c6d$exports = {};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ 
var $dlNIw = parcelRequire("dlNIw");

var $aDYzc = parcelRequire("aDYzc");

var $jgIgM = parcelRequire("jgIgM");
function $013174d8cc933c6d$var$chord(scaleType, colors) {
    const colorClass = scaleType === "sequential" ? (0, $jgIgM._sequentialScale) : (0, $aDYzc._divergingScale);
    const originalSwatches = colorClass.swatches;
    colorClass.swatches = 4;
    const width = 250;
    const height = 250;
    const radius = 100;
    const outerRadius = radius + 10;
    // create the svg area
    var svg = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).select(`#${scaleType}Chord`).append("svg").attr("width", width).attr("height", height).append("g").attr("transform", `translate(${width / 2}, ${height / 2})`);
    // create a matrix
    var matrix = [
        [
            0,
            5871,
            8916,
            2868
        ],
        [
            1951,
            0,
            2060,
            6171
        ],
        [
            8010,
            16145,
            0,
            8045
        ],
        [
            1013,
            990,
            940,
            0
        ]
    ];
    // 4 groups, so create a vector of 4 colors
    if (!colors) colors = colorClass.colors;
    // give this matrix to d3.chord(): it will calculates all the info we need to draw arc and ribbon
    var res = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).chord().padAngle(0.05).sortSubgroups((0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).descending)(matrix);
    // add the groups on the outer part of the circle
    svg.datum(res).append("g").selectAll("g").data(function(d) {
        return d.groups;
    }).enter().append("g").append("path").style("fill", function(d, i) {
        return colors[i];
    }).style("stroke", "black").attr("d", (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).arc().innerRadius(radius).outerRadius(outerRadius));
    // Add the links between groups
    svg.datum(res).append("g").selectAll("path").data(function(d) {
        return d;
    }).enter().append("path").attr("d", (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).ribbon().radius(radius)).style("fill", function(d) {
        return colors[d.source.index];
    }) // colors depend on the source group. Change to target otherwise.
    .style("stroke", "black");
    colorClass.swatches = originalSwatches;
}
$013174d8cc933c6d$exports = {
    chord: $013174d8cc933c6d$var$chord
};


var $50995619545a96cd$exports = {};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ 
var $dlNIw = parcelRequire("dlNIw");
function $50995619545a96cd$var$donut(scaleType, colors) {
    // set the dimensions and margins of the graph
    var width = 250;
    let height = 250;
    let margin = 80;
    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    var radius = Math.min(width, height) / 2 - margin;
    // append the svg object to the div called 'my_dataviz'
    var svg = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).select(`#${scaleType}Donut`).append("svg").attr("width", width).attr("height", height).append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    // Create dummy data
    var data = {
        a: 9,
        b: 18,
        c: 24,
        d: 8,
        e: 7,
        f: 5,
        g: 2,
        h: 3,
        i: 3
    };
    // set the color scale
    var color = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).scaleOrdinal().domain(data).range(colors);
    // Compute the position of each group on the pie:
    var pie = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).pie().value(function(d) {
        return d.value;
    });
    var data_ready = pie((0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).entries(data));
    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg.selectAll("whatever").data(data_ready).enter().append("path").attr("d", (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).arc().innerRadius(100) // This is the size of the donut hole
    .outerRadius(radius)).attr("fill", function(d) {
        return color(d.data.key);
    }).attr("stroke", "black").style("stroke-width", "1px");
}
$50995619545a96cd$exports = {
    donut: $50995619545a96cd$var$donut
};


var $117c9b1188a9101f$exports = {};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ 
var $dlNIw = parcelRequire("dlNIw");
function $117c9b1188a9101f$var$stackedArea(scaleType, colors) {
    // set the dimensions and margins of the graph
    var margin = {
        top: 20,
        right: 30,
        bottom: 30,
        left: 55
    }, width = 600 - margin.left - margin.right, height = 250 - margin.top - margin.bottom;
    // append the svg object to the body of the page
    var svg = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).select(`#${scaleType}StackedArea`).append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    // Parse the Data
    (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/5_OneCatSevNumOrdered_wide.csv").then(function(data) {
        // List of groups = header of the csv files
        var keys = data.columns.slice(1);
        // Add X axis
        var x = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).scaleLinear().domain((0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).extent(data, function(d) {
            return d.year;
        })).range([
            0,
            width
        ]);
        svg.append("g").attr("transform", "translate(0," + height + ")").call((0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).axisBottom(x).ticks(5));
        // Add Y axis
        var y = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).scaleLinear().domain([
            0,
            200000
        ]).range([
            height,
            0
        ]);
        svg.append("g").call((0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).axisLeft(y));
        // color palette
        var color = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).scaleOrdinal().domain(keys).range(colors);
        //stack the data?
        var stackedData = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).stack().keys(keys)(data);
        //console.log("This is the stack result: ", stackedData)
        // Show the areas
        svg.selectAll("mylayers").data(stackedData).enter().append("path").style("fill", function(d) {
            return color(d.key);
        }).attr("d", (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).area().x(function(d, i) {
            return x(d.data.year);
        }).y0(function(d) {
            return y(d[0]);
        }).y1(function(d) {
            return y(d[1]);
        }));
    });
}
$117c9b1188a9101f$exports = {
    stackedArea: $117c9b1188a9101f$var$stackedArea
};


var $17f6a24b8effbdee$exports = {};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ 
var $dlNIw = parcelRequire("dlNIw");

var $aDYzc = parcelRequire("aDYzc");

var $jgIgM = parcelRequire("jgIgM");
function $17f6a24b8effbdee$var$scatter(scaleType) {
    const colorClass = scaleType === "sequential" ? (0, $jgIgM._sequentialScale) : (0, $aDYzc._divergingScale);
    // set the dimensions and margins of the graph
    var margin = {
        top: 30,
        right: 30,
        bottom: 30,
        left: 60
    }, width = 350 - margin.left - margin.right, height = 250 - margin.top - margin.bottom;
    var myColor = colorClass.colorFunction;
    // append the svg object to the body of the page
    var svg = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).select(`#${scaleType}Scatter`).append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    //Read the data
    (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/2_TwoNum.csv").then(function(data) {
        // Add X axis
        var x = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).scaleLinear().domain([
            0,
            4000
        ]).range([
            0,
            width
        ]);
        svg.append("g").attr("transform", "translate(0," + height + ")").call((0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).axisBottom(x));
        // Add Y axis
        var y = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).scaleLinear().domain([
            0,
            500000
        ]).range([
            height,
            0
        ]);
        svg.append("g").call((0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).axisLeft(y));
        // Add dots
        svg.append("g").selectAll("dot").data(data).enter().append("circle").attr("cx", function(d) {
            return x(d.GrLivArea);
        }).attr("cy", function(d) {
            return y(d.SalePrice);
        }).attr("r", 1.5).style("fill", function(d) {
            return myColor(d.SalePrice / 5000);
        });
    });
}
$17f6a24b8effbdee$exports = {
    scatter: $17f6a24b8effbdee$var$scatter
};


var $e9a6955869567c5d$exports = {};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ 
var $dlNIw = parcelRequire("dlNIw");

var $aDYzc = parcelRequire("aDYzc");

var $jgIgM = parcelRequire("jgIgM");
// Object.assign(d3, d3hexbin);
function $e9a6955869567c5d$var$density(scaleType) {
    const colorClass = scaleType === "sequential" ? (0, $jgIgM._sequentialScale) : (0, $aDYzc._divergingScale);
    // set the dimensions and margins of the graph
    const margin = {
        top: 10,
        right: 30,
        bottom: 30,
        left: 40
    }, width = 460 - margin.left - margin.right, height = 400 - margin.top - margin.bottom;
    // append the svg object to the body of the page
    const svg = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).select(`${scaleType}Hexbin`).append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", `translate(${margin.left},${margin.top})`);
    // read data
    (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_for_density2d.csv").then(function(data) {
        // Add X axis
        const x = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).scaleLinear().domain([
            5,
            20
        ]).range([
            margin.left,
            width - margin.right
        ]);
        svg.append("g").attr("transform", `translate(0, ${height})`).call((0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).axisBottom(x));
        // Add Y axis
        const y = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).scaleLinear().domain([
            5,
            25
        ]).range([
            height - margin.bottom,
            margin.top
        ]);
        svg.append("g").call((0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).axisLeft(y));
        // Prepare a color palette
        const color = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).scaleLinear().domain([
            0,
            1
        ]) // Points per square pixel.
        .range([
            "white",
            "#69b3a2"
        ]);
        // compute the density data
        const densityData = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).contourDensity().x(function(d) {
            return x(d.x);
        }).y(function(d) {
            return y(d.y);
        }).size([
            width,
            height
        ]).bandwidth(20)(data);
        // show the shape!
        svg.insert("g", "g").selectAll("path").data(densityData).enter().append("path").attr("d", (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).geoPath()).attr("fill", function(d) {
            return color(d.value);
        });
    });
}
$e9a6955869567c5d$exports = {
    density: $e9a6955869567c5d$var$density
};


function $b23be941d43c3510$var$createDemos(scaleType, colors) {
    const destHeatmap = document.getElementById(`${scaleType}Heatmap`);
    const destChoropleth = document.getElementById(`${scaleType}Choropleth`);
    const destChord = document.getElementById(`${scaleType}Chord`);
    const destStackedArea = document.getElementById(`${scaleType}StackedArea`);
    const destDonut = document.getElementById(`${scaleType}Donut`);
    const destScatter = document.getElementById(`${scaleType}Scatter`);
    let dests;
    if (scaleType === "qualitative") {
        dests = [
            destChord,
            destStackedArea,
            destDonut
        ];
        (0, $013174d8cc933c6d$exports.chord)(scaleType, colors);
        (0, $117c9b1188a9101f$exports.stackedArea)(scaleType, colors);
        (0, $50995619545a96cd$exports.donut)(scaleType, colors);
    } else {
        dests = [
            destHeatmap,
            destChoropleth,
            destScatter
        ];
        (0, $588a4618c0e29cdf$exports.heatmap)(scaleType);
        (0, $17f6a24b8effbdee$exports.scatter)(scaleType);
        (0, $e9a6955869567c5d$exports.density)(scaleType);
        (0, $3b9e365a98426c2f$exports.choropleth)(scaleType);
    }
    setTimeout(()=>{
        for(let i = 0; i < dests.length; i++)while(dests[i].childNodes.length > 1)dests[i].removeChild(dests[i].firstChild);
    }, 300);
}
$b23be941d43c3510$exports = {
    createDemos: $b23be941d43c3510$var$createDemos
};



var $jpWZ9 = parcelRequire("jpWZ9");
var $97716ccee5959fd8$exports = {};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ 
var $W2lsj = parcelRequire("W2lsj");

var $bnPzD = parcelRequire("bnPzD");

var $6A7nx = parcelRequire("6A7nx");

var $oZyht = parcelRequire("oZyht");
function $97716ccee5959fd8$var$createPanelReportTable(colors, background, scaleType, level) {
    if (!colors) {
        const colorClass = scaleType === "sequential" ? _sequentialScale : _divergingScale;
        let scaleColors = colorClass.colors;
        if (scaleType === "sequential") colors = [
            scaleColors[0],
            scaleColors[scaleColors.length - 1]
        ];
        else colors = [
            scaleColors[0],
            colorClass.middleKey,
            scaleColors[scaleColors.length - 1]
        ];
    }
    if (!background) background = document.getElementById(`scales_bgColor`).value;
    if (scaleType && !level) {
        let compliancePicker = document.getElementById(`scales_complianceLevel`);
        level = compliancePicker.value;
    }
    let bgArray = $oZyht(background).rgb();
    const minimumThreshold = 11;
    const WCAGmin = level === "AA" ? 3 : 4.5;
    let reportWrapper = document.getElementById(`${scaleType}_a11yTable`);
    reportWrapper.innerHTML = " ";
    let headers = [
        "Compared colors",
        "Preview",
        "Status",
        "Contrast",
        "Color difference"
    ];
    let rows = [];
    for(let i = 0; i < colors.length; i++){
        let fgArray = $oZyht(colors[i]).rgb();
        let contrast = $W2lsj.contrast(fgArray, bgArray);
        if (contrast < 0) contrast = contrast * -1;
        let deltaE = (0, $6A7nx.getDifference)(colors[i], background);
        let meterPercent = (0, $6A7nx.round)(deltaE, 2);
        let uiClass = contrast < WCAGmin || deltaE < minimumThreshold ? "negative" : "positive";
        let uiStatus = contrast < WCAGmin || deltaE < minimumThreshold ? "Fail" : "Pass";
        let meterClass = deltaE < minimumThreshold ? "is-negative" : "is-positive";
        let color1;
        if (scaleType === "sequential") color1 = i === 0 ? "Start color" : "End color";
        else color1 = i === 0 ? "Start color" : i === 1 ? "Middle color" : "End color";
        let color2 = "Background";
        let rowItem = [
            `${color1} vs ${color2}`,
            `<div class="dualSwatch">
        <div class="swatch" style="background-color: ${colors[i]}"></div>
        <div class="swatch" style="background-color: ${background}"></div>
      </div>`,
            `<span class="spectrum-Badge spectrum-Badge--sizeS spectrum-Badge--${uiClass}">${uiStatus}</span>`,
            `<span class="spectrum-Body spectrum-Body--sizeM">${(0, $6A7nx.round)(contrast, 2)}:1</span>`,
            `<div">
        <div class="spectrum-ProgressBar spectrum-ProgressBar--sizeM deltaE-meter ${meterClass}" value="${meterPercent}" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
          <div class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-ProgressBar-label">Delta E</div>
          <div class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-ProgressBar-percentage">${meterPercent}</div>
          <div class="spectrum-ProgressBar-track">
            <div class="spectrum-ProgressBar-fill" style="width: ${meterPercent}%;"></div>
          </div>
        </div>
      </div>`
        ];
        rows.push(rowItem);
    }
    // Duplicate same process against the two input colors themselves...
    if (scaleType === "sequential") {
        let fgArray = $oZyht(colors[0]).rgb();
        let altArray = $oZyht(colors[1]).rgb();
        let contrast = $W2lsj.contrast(fgArray, altArray);
        if (contrast < 0) contrast = contrast * -1;
        let deltaE = (0, $6A7nx.getDifference)(colors[0], colors[1]);
        let meterPercent = (0, $6A7nx.round)(deltaE, 2);
        let meterClass = deltaE < minimumThreshold ? "is-negative" : "is-positive";
        let uiClass = contrast < WCAGmin || deltaE < minimumThreshold ? "negative" : "positive";
        let uiStatus = contrast < WCAGmin || deltaE < minimumThreshold ? "Fail" : "Pass";
        let color1 = "Start color";
        let color2 = "End color";
        let rowItem = [
            `${color1} vs ${color2}`,
            `<div class="dualSwatch">
        <div class="swatch" style="background-color: ${colors[0]}"></div>
        <div class="swatch" style="background-color: ${colors[1]}"></div>
      </div>`,
            `<span class="spectrum-Badge spectrum-Badge--sizeS spectrum-Badge--${uiClass}">${uiStatus}</span>`,
            `<span class="spectrum-Body spectrum-Body--sizeM">${(0, $6A7nx.round)(contrast, 2)}:1</span>`,
            `<div">
        <div class="spectrum-ProgressBar spectrum-ProgressBar--sizeM deltaE-meter ${meterClass}" value="${meterPercent}" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
          <div class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-ProgressBar-label">Delta E</div>
          <div class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-ProgressBar-percentage">${meterPercent}</div>
          <div class="spectrum-ProgressBar-track">
            <div class="spectrum-ProgressBar-fill" style="width: ${meterPercent}%;"></div>
          </div>
        </div>
      </div>`
        ];
        rows.push(rowItem);
    }
    if (scaleType === "diverging") {
        let color1Array = $oZyht(colors[0]).rgb();
        let color2Array = $oZyht(colors[1]).rgb();
        let color3Array = $oZyht(colors[2]).rgb();
        let contrast1 = $W2lsj.contrast(color1Array, color2Array);
        let contrast2 = $W2lsj.contrast(color2Array, color3Array);
        if (contrast1 < 0) contrast1 = contrast1 * -1;
        if (contrast2 < 0) contrast2 = contrast2 * -1;
        let deltaE1 = (0, $6A7nx.getDifference)(colors[0], colors[1]);
        let deltaE2 = (0, $6A7nx.getDifference)(colors[1], colors[2]);
        let meterPercent1 = (0, $6A7nx.round)(deltaE1, 2);
        let meterPercent2 = (0, $6A7nx.round)(deltaE2, 2);
        let meterClass1 = deltaE1 < minimumThreshold ? "is-negative" : "is-positive";
        let meterClass2 = deltaE1 < minimumThreshold ? "is-negative" : "is-positive";
        let uiClass1 = contrast1 < WCAGmin || deltaE1 < minimumThreshold ? "negative" : "positive";
        let uiClass2 = contrast2 < WCAGmin || deltaE2 < minimumThreshold ? "negative" : "positive";
        let uiStatus1 = contrast1 < WCAGmin || deltaE1 < minimumThreshold ? "Fail" : "Pass";
        let uiStatus2 = contrast2 < WCAGmin || deltaE2 < minimumThreshold ? "Fail" : "Pass";
        let color1 = "Start color";
        let color2 = "Middle color";
        let color3 = "End color";
        let rowItem1 = [
            `${color1} vs ${color2}`,
            `<div class="dualSwatch">
        <div class="swatch" style="background-color: ${colors[0]}"></div>
        <div class="swatch" style="background-color: ${colors[1]}"></div>
      </div>`,
            `<span class="spectrum-Badge spectrum-Badge--sizeS spectrum-Badge--${uiClass1}">${uiStatus1}</span>`,
            `<span class="spectrum-Body spectrum-Body--sizeM">${(0, $6A7nx.round)(contrast1, 2)}:1</span>`,
            `<div">
        <div class="spectrum-ProgressBar spectrum-ProgressBar--sizeM deltaE-meter ${meterClass1}" value="${meterPercent1}" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
          <div class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-ProgressBar-label">Delta E</div>
          <div class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-ProgressBar-percentage">${meterPercent1}</div>
          <div class="spectrum-ProgressBar-track">
            <div class="spectrum-ProgressBar-fill" style="width: ${meterPercent1}%;"></div>
          </div>
        </div>
      </div>`
        ];
        let rowItem2 = [
            `${color2} vs ${color3}`,
            `<div class="dualSwatch">
        <div class="swatch" style="background-color: ${colors[1]}"></div>
        <div class="swatch" style="background-color: ${colors[2]}"></div>
      </div>`,
            `<span class="spectrum-Badge spectrum-Badge--sizeS spectrum-Badge--${uiClass2}">${uiStatus2}</span>`,
            `<span class="spectrum-Body spectrum-Body--sizeM">${(0, $6A7nx.round)(contrast2, 2)}:1</span>`,
            `<div">
        <div class="spectrum-ProgressBar spectrum-ProgressBar--sizeM deltaE-meter ${meterClass2}" value="${meterPercent2}" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
          <div class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-ProgressBar-label">Delta E</div>
          <div class="spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-ProgressBar-percentage">${meterPercent2}</div>
          <div class="spectrum-ProgressBar-track">
            <div class="spectrum-ProgressBar-fill" style="width: ${meterPercent2}%;"></div>
          </div>
        </div>
      </div>`
        ];
        rows.push(rowItem1);
        rows.push(rowItem2);
    }
    (0, $bnPzD.createTable)(headers, rows, `${scaleType}_a11yTable`);
}
$97716ccee5959fd8$exports = {
    createPanelReportTable: $97716ccee5959fd8$var$createPanelReportTable
};



var $oZyht = parcelRequire("oZyht");

var $66fty = parcelRequire("66fty");
var $81ca9048247c0114$require$extendChroma = $66fty.extendChroma;
function $81ca9048247c0114$var$addScaleKeyColorInput(c, thisId = this.id, scaleType, index, scalePosition) {
    let sampleNumber = document.getElementById(`${scaleType}Samples`);
    let chartsModeSelect = document.getElementById(`${scaleType}_chartsMode`);
    let currentColor;
    if (scaleType === "sequential") currentColor = _sequentialScale;
    if (scaleType === "diverging") currentColor = _divergingScale;
    let currentKeys = scaleType === "sequential" ? currentColor.colorKeys : scalePosition === "start" ? currentColor.startKeys : scalePosition === "end" ? currentColor.endKeys : currentColor.middleKey;
    let parent = thisId.replace("_addKeyColor", "").replace("_addStartKeyColor", "").replace("_addEndKeyColor", "");
    let concatString = scaleType === "theme" || scaleType === "sequential" ? "_keyColors" : `_${scalePosition}KeyColors`;
    let destId = parent.concat(concatString);
    let dest = document.getElementById(destId);
    let div = document.createElement("div");
    let randId = (0, $6A7nx.randomId)();
    if (scalePosition === "middle") div.className = `keyColor keyColor-${scaleType} keyColor-${scaleType}-${scalePosition}`;
    else div.className = `keyColor keyColor-${scaleType}`;
    div.id = randId + "-item";
    let sw = document.createElement("input");
    sw.type = "color";
    sw.value = c;
    sw.addEventListener("input", (0, $6A7nx.throttle)((e)=>{
        // Replace current indexed value from color keys with new value from color input field
        c = e.target.value;
        if (scaleType === "sequential") {
            // let currentKeys = currentColor.colorKeys;
            currentKeys.splice(index, 1, c);
            currentColor.colorKeys = currentKeys;
        }
        if (scaleType === "diverging") {
            if (scalePosition === "start") {
                // let currentKeys = currentColor.startKeys;
                currentKeys.splice(index, 1, c);
                currentColor.startKeys = currentKeys;
            }
            if (scalePosition === "end") {
                // let currentKeys = currentColor.endKeys;
                currentKeys.splice(index, 1, c);
                currentColor.endKeys = currentKeys;
            }
            if (scalePosition === "middle") currentColor.middleKey = c;
        }
        (0, $7yS3p.updateRamps)(currentColor, parent, scaleType);
        (0, $4O58B.updateColorDots)(chartsModeSelect.value, scaleType);
        (0, $9c50c98679544d2a$exports.createSamples)(sampleNumber.value, scaleType);
        if (scaleType === "sequential" || scaleType === "diverging") (0, $97716ccee5959fd8$exports.createPanelReportTable)(null, null, scaleType);
    }, 10));
    sw.addEventListener("input", (0, $6A7nx.throttle)(()=>{
        (0, $b23be941d43c3510$exports.createDemos)(scaleType);
        (0, $jpWZ9.create3dModel)(`${scaleType}ModelWrapper`, [
            currentColor
        ], chartsModeSelect.value, scaleType);
    }, 250));
    sw.className = "keyColor-Item";
    sw.id = randId + "-sw";
    sw.style.backgroundColor = c;
    div.appendChild(sw);
    let isDisabledClass;
    if (scaleType === "sequential") isDisabledClass = currentKeys.length > 2 ? "" : "is-disabled";
    else isDisabledClass = currentKeys.length > 1 ? "" : "is-disabled";
    if (scalePosition !== "middle") {
        let button = document.createElement("button");
        button.className = scaleType === "diverging" ? `spectrum-ActionButton spectrum-ActionButton--sizeM removeKeyColor-${scaleType}-${scalePosition} ${isDisabledClass}` : `spectrum-ActionButton spectrum-ActionButton--sizeM removeKeyColor-${scaleType} ${isDisabledClass}`;
        button.innerHTML = `
    <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Delete">
      <use xlink:href="#spectrum-icon-18-Delete" />
    </svg>`;
        button.addEventListener("click", function(e) {
            let sampleNumber = document.getElementById(`${scaleType}Samples`);
            let samples = sampleNumber.value;
            $81ca9048247c0114$var$replaceScaleKeyInputsFromClass(thisId, scaleType, index, scalePosition);
            (0, $4O58B.updateColorDots)(chartsModeSelect.value, scaleType);
            (0, $9c50c98679544d2a$exports.createSamples)(samples, scaleType);
        });
        div.appendChild(button);
    }
    dest.appendChild(div);
}
function $81ca9048247c0114$var$replaceScaleKeyInputsFromClass(id, scaleType, index, scalePosition) {
    let smoothWrapper = document.getElementById(`${scaleType}_smoothWrapper`);
    let smooth = document.getElementById(`${scaleType}_smooth`);
    let parentId = id.replace("_addKeyColor", "");
    let currentColor, colorKeys;
    if (scaleType === "sequential") {
        currentColor = _sequentialScale;
        colorKeys = currentColor.colorKeys;
    }
    if (scaleType === "diverging") {
        currentColor = _divergingScale;
        colorKeys = scalePosition === "start" ? currentColor.startKeys : currentColor.endKeys;
    }
    colorKeys.splice(index, 1);
    // reassign new array to color class
    if (scaleType === "sequential") currentColor.colorKeys = colorKeys;
    if (scaleType === "diverging") {
        if (scalePosition === "start") currentColor.startKeys = colorKeys;
        if (scalePosition === "end") currentColor.endKeys = colorKeys;
    }
    if (scaleType === "sequential") (0, $6A7nx.removeElementsByClass)(`keyColor-${scaleType}`);
    else if (scalePosition === "start") {
        // only remove respective inputs
        let parentDest = document.getElementById("diverging_startKeyColors");
        (0, $6A7nx.removeElementsByClass)(`keyColor-${scaleType}`, parentDest);
    } else {
        // only remove respective inputs
        let parentDest = document.getElementById("diverging_endKeyColors");
        (0, $6A7nx.removeElementsByClass)(`keyColor-${scaleType}`, parentDest);
    }
    // If new color keys length is less than three, force
    // smoothing to false, and update UI toggle, as smooth
    // option should be removed when only two key colors are
    // present... colorscale becomes all black.
    if (colorKeys.length < 3) {
        smooth.checked = false;
        currentColor.smooth = false;
    }
    if (scaleType === "sequential") currentColor.colorKeys.forEach((key, i)=>{
        $81ca9048247c0114$var$addScaleKeyColorInput(key, id, scaleType, i, scalePosition);
    });
    else if (scalePosition === "start") currentColor.startKeys.forEach((key, i)=>{
        $81ca9048247c0114$var$addScaleKeyColorInput(key, id, scaleType, i, scalePosition);
    });
    else currentColor.endKeys.forEach((key, i)=>{
        $81ca9048247c0114$var$addScaleKeyColorInput(key, id, scaleType, i, scalePosition);
    });
    // Update gradient
    (0, $7yS3p.updateRamps)(currentColor, parentId, scaleType);
    let targetClass, buttons;
    if (scaleType === "diverging") {
        targetClass = `removeKeyColor-${scaleType}-${scalePosition}`;
        buttons = document.getElementsByClassName(targetClass);
    } else {
        targetClass = `removeKeyColor-${scaleType}`;
        buttons = document.getElementsByClassName(targetClass);
    }
    if (colorKeys.length >= 2) for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove("is-disabled");
        buttons[i].disabled = false;
    }
    else for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.add("is-disabled");
        buttons[i].disabled = true;
    }
    if (colorKeys.length >= 3) {
        smooth.disabled = false;
        smoothWrapper.classList.remove("is-disabled");
    } else {
        smooth.disabled = true;
        smoothWrapper.classList.add("is-disabled");
    }
}
function $81ca9048247c0114$var$addScaleKeyColor(scaleType, e, position) {
    let smoothWrapper = document.getElementById(`${scaleType}_smoothWrapper`);
    let smooth = document.getElementById(`${scaleType}_smooth`);
    let thisId = e.target.id;
    let parentId = thisId.replace("_addKeyColor", "");
    let currentColor = scaleType === "sequential" ? _sequentialScale : _divergingScale; // TODO: replace with _diverging when available
    let currentKeys = scaleType === "sequential" ? currentColor.colorKeys : position === "start" ? currentColor.startKeys : currentColor.endKeys;
    let lastIndex = currentKeys.length;
    if (!lastIndex) lastIndex = 0;
    let lastColor = lastIndex > 0 ? $oZyht(currentKeys[lastIndex - 1]).hsluv() : $oZyht(currentKeys[0]).hsluv();
    let lastColorLightness = lastColor[2];
    let fCtintHalf = (100 - lastColorLightness) / 3 + lastColorLightness;
    let fCshadeHalf = lastColorLightness / 2;
    let c = lastColorLightness >= 50 ? $oZyht.hsluv(lastColor[0], lastColor[1], fCshadeHalf) : $oZyht.hsluv(lastColor[0], lastColor[1], fCtintHalf);
    c = c.hex();
    currentKeys.push(c);
    // Update color class arguments via the theme class
    if (scaleType === "sequential") {
        currentColor.colorKeys = currentKeys;
        (0, $6A7nx.removeElementsByClass)(`keyColor-${scaleType}`);
    } else if (position === "start") {
        currentColor.startKeys = currentKeys;
        // only remove respective inputs
        let parentDest = document.getElementById("diverging_startKeyColors");
        (0, $6A7nx.removeElementsByClass)(`keyColor-${scaleType}`, parentDest);
    } else {
        currentColor.endKeys = currentKeys;
        // only remove respective inputs
        let parentDest = document.getElementById("diverging_endKeyColors");
        (0, $6A7nx.removeElementsByClass)(`keyColor-${scaleType}`, parentDest);
    }
    if (scaleType === "sequential") currentColor.colorKeys.forEach((key, i)=>{
        $81ca9048247c0114$var$addScaleKeyColorInput(key, thisId, scaleType, i, position);
    });
    else if (position === "start") currentColor.startKeys.forEach((key, i)=>{
        $81ca9048247c0114$var$addScaleKeyColorInput(key, thisId, scaleType, i, position);
    });
    else currentColor.endKeys.forEach((key, i)=>{
        $81ca9048247c0114$var$addScaleKeyColorInput(key, thisId, scaleType, i, position);
    });
    // Update gradient
    (0, $7yS3p.updateRamps)(currentColor, parentId, scaleType);
    if (currentKeys.length >= 3) {
        smooth.disabled = false;
        smoothWrapper.classList.remove("is-disabled");
    } else {
        smooth.disabled = true;
        smoothWrapper.classList.add("is-disabled");
    }
}
function $81ca9048247c0114$var$clearAllColors(e) {
    let targetId = e.target.id;
    let parentId = targetId.replace("_clearAllColors", "");
    let keyColorsId = targetId.replace("_clearAllColors", "_keyColors");
    document.getElementById(keyColorsId).innerHTML = " ";
    let color = getColorClassById(parentId);
    _theme.updateColor = {
        color: color.name,
        colorKeys: [
            "#000000"
        ]
    };
    (0, $7yS3p.updateRamps)();
}
window.clearAllColors = $81ca9048247c0114$var$clearAllColors;
$81ca9048247c0114$exports = {
    addScaleKeyColor: $81ca9048247c0114$var$addScaleKeyColor,
    addScaleKeyColorInput: $81ca9048247c0114$var$addScaleKeyColorInput,
    clearAllColors: $81ca9048247c0114$var$clearAllColors
};



var $7yS3p = parcelRequire("7yS3p");
parcelRequire("jgIgM");

var $aDYzc = parcelRequire("aDYzc");

var $2jobM = parcelRequire("2jobM");

var $fVnLK = parcelRequire("fVnLK");

var $i1YNd = parcelRequire("i1YNd");

var $4O58B = parcelRequire("4O58B");

var $jpWZ9 = parcelRequire("jpWZ9");




var $oZyht = parcelRequire("oZyht");
function $3c376242dd3fb361$var$colorScaleDiverging(scaleType = "diverging") {
    /**
   * Have to keep this manual changing of the diverging scale because the initial scale
   *  does not output the colors properly. Unclear why, but for now this will work.
   */ let defaultMiddleColor = "#FFFFE0";
    (0, $aDYzc._divergingScale).middleKey = defaultMiddleColor;
    (0, $aDYzc._divergingScale).distributeLightness = "polynomial";
    let defaultBackgroundColor;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    if (mq.matches) {
        //dark mode
        defaultBackgroundColor = "#1d1d1d";
        document.getElementById("main_sequential").classList.add("spectrum--darkest");
    } else {
        //light mode
        defaultBackgroundColor = "#f8f8f8";
        document.getElementById("main_sequential").classList.add("spectrum--light");
    }
    let downloadGradient = document.getElementById(`${scaleType}_downloadGradient`);
    let chartsModeSelect = document.getElementById(`${scaleType}_chartsMode`);
    let interpolationMode = document.getElementById(`${scaleType}_mode`);
    let smoothWrapper = document.getElementById(`${scaleType}_smoothWrapper`);
    let smooth = document.getElementById(`${scaleType}_smooth`);
    let sampleNumber = document.getElementById(`${scaleType}Samples`);
    let sampleOutput = document.getElementById(`${scaleType}_format`);
    let quoteSwitch = document.getElementById(`${scaleType}paramStringQuotes`);
    let PlotDestId = `${scaleType}ModelWrapper`;
    let samples = sampleNumber.value;
    const colorClass = (0, $aDYzc._divergingScale);
    const colorKeys = colorClass.colorKeys;
    // If class is preset to smooth, check the smooth switch in the UI
    if (colorClass.smooth === true) smooth.checked = true;
    interpolationMode.value = colorClass.colorspace;
    let gradientId = `${scaleType}_gradient`;
    let buttonId = `${scaleType}_addKeyColor`;
    let buttonStartId = `${scaleType}_addStartKeyColor`;
    let buttonEndId = `${scaleType}_addEndKeyColor`;
    const hasStartKeys = Promise.resolve(colorClass.startKeys);
    const hasMiddleKey = Promise.resolve(colorClass.middleKey);
    const hasEndKeys = Promise.resolve(colorClass.endKeys);
    Promise.all([
        hasStartKeys,
        hasMiddleKey,
        hasEndKeys
    ]).then((divergingKeys)=>{
        const starts = divergingKeys[0];
        const middle = divergingKeys[1];
        const ends = divergingKeys[2];
        for(let i = 0; i < starts.length; i++)(0, $81ca9048247c0114$exports.addScaleKeyColorInput)(starts[i], buttonId, scaleType, i, "start");
        (0, $81ca9048247c0114$exports.addScaleKeyColorInput)(middle, buttonId, scaleType, 0, "middle");
        for(let i = 0; i < ends.length; i++)(0, $81ca9048247c0114$exports.addScaleKeyColorInput)(ends[i], buttonId, scaleType, i, "end");
    });
    let colors = colorClass.colors;
    (0, $7yS3p.themeRamp)(colors, gradientId, "90");
    (0, $7yS3p.themeRampKeyColors)(colorKeys, gradientId, scaleType);
    (0, $fVnLK.createRGBchannelChart)(colors, `${scaleType}RGBchart`);
    (0, $2jobM.createPaletteInterpolationCharts)([
        colorClass.startScale.colorsReversed,
        colorClass.endScale.colors
    ], chartsModeSelect.value, scaleType);
    (0, $jpWZ9.create3dModel)(PlotDestId, [
        colorClass
    ], chartsModeSelect.value, scaleType);
    (0, $9c50c98679544d2a$exports.createSamples)(samples, scaleType);
    (0, $b23be941d43c3510$exports.createDemos)(scaleType);
    (0, $4O58B.createColorWheel)(chartsModeSelect.value, 50, scaleType);
    (0, $4O58B.updateColorDots)(chartsModeSelect.value, scaleType);
    let bgInput = document.getElementById(`scales_bgColor`);
    bgInput.value = defaultBackgroundColor;
    const color2 = colors[0];
    const color1 = colors[colors.length - 1];
    const color3 = colorClass.middleKey;
    (0, $97716ccee5959fd8$exports.createPanelReportTable)([
        color1,
        color3,
        color2
    ], defaultBackgroundColor, scaleType, "AA");
    bgInput.addEventListener("input", (e)=>{
        // change <main> background
        let value = e.target.value;
        let wrapper = document.getElementById(`main_${scaleType}`);
        wrapper.style.backgroundColor = value;
        // toggle class based on lightness
        let lightness = $oZyht(value).jch()[0];
        if (lightness < 50) {
            wrapper.classList.remove("spectrum--light");
            wrapper.classList.add("spectrum--darkest");
        } else {
            wrapper.classList.remove("spectrum--darkest");
            wrapper.classList.add("spectrum--light");
        }
        let level = document.getElementById(`scales_complianceLevel`).value;
        (0, $97716ccee5959fd8$exports.createPanelReportTable)([
            color1,
            color3,
            color2
        ], value, scaleType, level);
    });
    const compliancePicker = document.getElementById(`scales_complianceLevel`);
    compliancePicker.addEventListener("change", (e)=>{
        let level = e.target.value;
        (0, $97716ccee5959fd8$exports.createPanelReportTable)(null, null, scaleType, level);
    });
    interpolationMode.addEventListener("change", (e)=>{
        let colorspace = e.target.value;
        colorClass.colorspace = colorspace;
        (0, $7yS3p.updateRamps)(colorClass, scaleType, scaleType);
        (0, $9c50c98679544d2a$exports.createSamples)(sampleNumber.value, scaleType);
        (0, $4O58B.updateColorDots)(chartsModeSelect.value, scaleType);
        (0, $2jobM.createPaletteInterpolationCharts)([
            colorClass.startScale.colorsReversed,
            colorClass.endScale.colors
        ], chartsModeSelect.value, scaleType);
        (0, $b23be941d43c3510$exports.createDemos)(scaleType);
        (0, $jpWZ9.create3dModel)(PlotDestId, [
            colorClass
        ], chartsModeSelect.value, scaleType);
    });
    smooth.addEventListener("change", (e)=>{
        colorClass.smooth = e.target.checked;
        colors = colorClass.colors;
        (0, $7yS3p.updateRamps)(colorClass, scaleType, scaleType);
        (0, $2jobM.createPaletteInterpolationCharts)([
            colorClass.startScale.colorsReversed,
            colorClass.endScale.colors
        ], chartsModeSelect.value, scaleType);
        (0, $4O58B.updateColorDots)(chartsModeSelect.value, scaleType);
        (0, $9c50c98679544d2a$exports.createSamples)(sampleNumber.value, scaleType);
        (0, $b23be941d43c3510$exports.createDemos)(scaleType);
        (0, $jpWZ9.create3dModel)(PlotDestId, [
            colorClass
        ], chartsModeSelect.value, scaleType);
    });
    downloadGradient.addEventListener("click", (e)=>{
        const originalSwatches = colorClass.swatches;
        const stops = 100;
        colorClass.swatches = Number(stops);
        let scaleName = document.getElementById(`${scaleType}_name`).value;
        let filename = `${scaleName}_${scaleType}`;
        const gradientColors = colorClass.colors;
        setTimeout(()=>{
            (0, $i1YNd.downloadSVGgradient)(gradientColors, colorClass.colorspace, filename);
            colorClass.swatches = originalSwatches;
        }, 500);
    });
    chartsModeSelect.addEventListener("change", (e)=>{
        (0, $2jobM.createPaletteInterpolationCharts)([
            colorClass.startScale.colorsReversed,
            colorClass.endScale.colors
        ], chartsModeSelect.value, scaleType);
        let lightness = e.target.value === "HSV" ? 100 : e.target.value === "HSLuv" ? 60 : 50;
        (0, $4O58B.updateColorWheel)(e.target.value, lightness, true, null, scaleType);
        (0, $jpWZ9.create3dModel)(PlotDestId, [
            colorClass
        ], e.target.value, scaleType);
    });
    const hasStartButton = Promise.resolve(document.getElementById(buttonStartId));
    const hasEndButton = Promise.resolve(document.getElementById(buttonEndId));
    Promise.all([
        hasStartButton,
        hasEndButton
    ]).then(()=>{
        document.getElementById(buttonStartId).addEventListener("click", (e)=>{
            (0, $81ca9048247c0114$exports.addScaleKeyColor)(scaleType, e, "start");
            (0, $4O58B.updateColorDots)(chartsModeSelect.value, scaleType);
            (0, $9c50c98679544d2a$exports.createSamples)(sampleNumber.value, scaleType);
            (0, $b23be941d43c3510$exports.createDemos)(scaleType);
            (0, $jpWZ9.create3dModel)(PlotDestId, [
                colorClass
            ], chartsModeSelect.value, scaleType);
        });
        document.getElementById(buttonEndId).addEventListener("click", (e)=>{
            (0, $81ca9048247c0114$exports.addScaleKeyColor)(scaleType, e, "end");
            (0, $4O58B.updateColorDots)(chartsModeSelect.value, scaleType);
            (0, $9c50c98679544d2a$exports.createSamples)(sampleNumber.value, scaleType);
            (0, $b23be941d43c3510$exports.createDemos)(scaleType);
            (0, $jpWZ9.create3dModel)(PlotDestId, [
                colorClass
            ], chartsModeSelect.value, scaleType);
        });
    });
    sampleNumber.addEventListener("input", (e)=>{
        (0, $9c50c98679544d2a$exports.createSamples)(e.target.value, scaleType);
    });
    sampleOutput.addEventListener("input", ()=>{
        (0, $9c50c98679544d2a$exports.createSamples)(sampleNumber.value, scaleType);
    });
    quoteSwitch.addEventListener("change", ()=>{
        (0, $9c50c98679544d2a$exports.createSamples)(sampleNumber.value, scaleType);
    });
}
$3c376242dd3fb361$exports = {
    colorScaleDiverging: $3c376242dd3fb361$var$colorScaleDiverging
};


var $2c03cb0347d3dbfe$exports = {};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ 

var $7yS3p = parcelRequire("7yS3p");

var $jgIgM = parcelRequire("jgIgM");

var $aDYzc = parcelRequire("aDYzc");

var $2DjVK = parcelRequire("2DjVK");

var $fVnLK = parcelRequire("fVnLK");

var $i1YNd = parcelRequire("i1YNd");

var $4O58B = parcelRequire("4O58B");

var $jpWZ9 = parcelRequire("jpWZ9");




var $oZyht = parcelRequire("oZyht");
function $2c03cb0347d3dbfe$var$colorScaleSequential(scaleType = "sequential") {
    let defaultBackgroundColor;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    if (mq.matches) {
        //dark mode
        defaultBackgroundColor = "#1d1d1d";
        document.getElementById("main_sequential").classList.add("spectrum--darkest");
    } else {
        //light mode
        defaultBackgroundColor = "#f8f8f8";
        document.getElementById("main_sequential").classList.add("spectrum--light");
    }
    let downloadGradient = document.getElementById(`${scaleType}_downloadGradient`);
    let chartsModeSelect = document.getElementById(`${scaleType}_chartsMode`);
    let interpolationMode = document.getElementById(`${scaleType}_mode`);
    let smoothWrapper = document.getElementById(`${scaleType}_smoothWrapper`);
    let smooth = document.getElementById(`${scaleType}_smooth`);
    let sampleNumber = document.getElementById(`${scaleType}Samples`);
    let sampleOutput = document.getElementById(`${scaleType}_format`);
    let quoteSwitch = document.getElementById(`${scaleType}paramStringQuotes`);
    let PlotDestId = `${scaleType}ModelWrapper`;
    let samples = sampleNumber.value;
    const colorClass = scaleType === "sequential" ? (0, $jgIgM._sequentialScale) : (0, $aDYzc._divergingScale);
    const colorKeys = colorClass.colorKeys;
    // If class is preset to smooth, check the smooth switch in the UI
    if (colorClass.smooth === true) smooth.checked = true;
    if (colorKeys.length >= 3) {
        smooth.disabled = false;
        smoothWrapper.classList.remove("is-disabled");
    } else {
        smooth.disabled = true;
        smoothWrapper.classList.add("is-disabled");
    }
    interpolationMode.value = colorClass.colorspace;
    let gradientId = `${scaleType}_gradient`;
    let buttonId = `${scaleType}_addKeyColor`;
    const hasColorKeys = Promise.resolve(colorKeys);
    hasColorKeys.then((values)=>{
        for(let i = 0; i < values.length; i++)(0, $81ca9048247c0114$exports.addScaleKeyColorInput)(values[i], buttonId, scaleType, i);
    });
    let colors = colorClass.colors;
    (0, $7yS3p.themeRamp)(colors, gradientId, "90");
    (0, $7yS3p.themeRampKeyColors)(colorKeys, gradientId, scaleType);
    (0, $fVnLK.createRGBchannelChart)(colors, `${scaleType}RGBchart`);
    (0, $2DjVK.createInterpolationCharts)(colors, "CAM02", scaleType);
    (0, $jpWZ9.create3dModel)(PlotDestId, [
        colorClass
    ], chartsModeSelect.value, scaleType);
    (0, $9c50c98679544d2a$exports.createSamples)(samples, scaleType);
    (0, $b23be941d43c3510$exports.createDemos)(scaleType);
    (0, $4O58B.createColorWheel)(chartsModeSelect.value, 50, scaleType);
    (0, $4O58B.updateColorDots)(chartsModeSelect.value, scaleType);
    let bgInput = document.getElementById(`scales_bgColor`);
    bgInput.value = defaultBackgroundColor;
    const color2 = colors[0];
    const color1 = colors[colors.length - 1];
    (0, $97716ccee5959fd8$exports.createPanelReportTable)([
        color1,
        color2
    ], defaultBackgroundColor, scaleType, "AA");
    bgInput.addEventListener("input", (e)=>{
        // change <main> background
        let value = e.target.value;
        let wrapper = document.getElementById(`main_${scaleType}`);
        wrapper.style.backgroundColor = value;
        // toggle class based on lightness
        let lightness = $oZyht(value).jch()[0];
        if (lightness < 50) {
            wrapper.classList.remove("spectrum--light");
            wrapper.classList.add("spectrum--darkest");
        } else {
            wrapper.classList.remove("spectrum--darkest");
            wrapper.classList.add("spectrum--light");
        }
        let level = document.getElementById(`scales_complianceLevel`).value;
        (0, $97716ccee5959fd8$exports.createPanelReportTable)([
            color1,
            color2
        ], value, scaleType, level);
    });
    const compliancePicker = document.getElementById(`scales_complianceLevel`);
    compliancePicker.addEventListener("change", (e)=>{
        let level = e.target.value;
        (0, $97716ccee5959fd8$exports.createPanelReportTable)(null, null, scaleType, level);
    });
    interpolationMode.addEventListener("change", (e)=>{
        let colorspace = e.target.value;
        colorClass.colorspace = colorspace;
        (0, $7yS3p.updateRamps)(colorClass, scaleType, scaleType);
        (0, $9c50c98679544d2a$exports.createSamples)(sampleNumber.value, scaleType);
        (0, $4O58B.updateColorDots)(chartsModeSelect.value, scaleType);
        (0, $b23be941d43c3510$exports.createDemos)(scaleType);
        (0, $jpWZ9.create3dModel)(PlotDestId, [
            colorClass
        ], chartsModeSelect.value, scaleType);
    });
    smooth.addEventListener("change", (e)=>{
        colorClass.smooth = e.target.checked;
        colors = colorClass.colors;
        (0, $7yS3p.updateRamps)(colorClass, scaleType, scaleType);
        (0, $2DjVK.createInterpolationCharts)(colors, chartsModeSelect.value, scaleType);
        (0, $4O58B.updateColorDots)(chartsModeSelect.value, scaleType);
        (0, $9c50c98679544d2a$exports.createSamples)(sampleNumber.value, scaleType);
        (0, $b23be941d43c3510$exports.createDemos)(scaleType);
        (0, $jpWZ9.create3dModel)(PlotDestId, [
            colorClass
        ], chartsModeSelect.value, scaleType);
    });
    downloadGradient.addEventListener("click", (e)=>{
        const stops = 100;
        colorClass.swatches = Number(stops);
        const gradientColors = colorClass.colors;
        let scaleName = document.getElementById(`${scaleType}_name`).value;
        let filename = `${scaleName}_${scaleType}`;
        setTimeout(()=>{
            (0, $i1YNd.downloadSVGgradient)(gradientColors, colorClass.colorspace, filename);
            colorClass.swatches = originalSwatches;
        }, 500);
    });
    chartsModeSelect.addEventListener("change", (e)=>{
        (0, $2DjVK.createInterpolationCharts)(colors, e.target.value, scaleType);
        let lightness = e.target.value === "HSV" ? 100 : e.target.value === "HSLuv" ? 60 : 50;
        (0, $4O58B.updateColorWheel)(e.target.value, lightness, true, null, scaleType);
        (0, $jpWZ9.create3dModel)(PlotDestId, [
            colorClass
        ], e.target.value, scaleType);
    });
    const hasButton = Promise.resolve(document.getElementById(buttonId));
    hasButton.then((value)=>{
        value.addEventListener("click", (e)=>{
            (0, $81ca9048247c0114$exports.addScaleKeyColor)(scaleType, e);
            (0, $4O58B.updateColorDots)(chartsModeSelect.value, scaleType);
            (0, $9c50c98679544d2a$exports.createSamples)(sampleNumber.value, scaleType);
            (0, $b23be941d43c3510$exports.createDemos)(scaleType);
            (0, $jpWZ9.create3dModel)(PlotDestId, [
                colorClass
            ], chartsModeSelect.value, scaleType);
        });
    });
    sampleNumber.addEventListener("input", (e)=>{
        (0, $9c50c98679544d2a$exports.createSamples)(e.target.value, scaleType);
    });
    sampleOutput.addEventListener("input", ()=>{
        (0, $9c50c98679544d2a$exports.createSamples)(sampleNumber.value, scaleType);
    });
    quoteSwitch.addEventListener("change", ()=>{
        (0, $9c50c98679544d2a$exports.createSamples)(sampleNumber.value, scaleType);
    });
}
$2c03cb0347d3dbfe$exports = {
    colorScaleSequential: $2c03cb0347d3dbfe$var$colorScaleSequential
};


var $7119c8d1e2efeb27$exports = {};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ 
var $W2lsj = parcelRequire("W2lsj");


var $6A7nx = parcelRequire("6A7nx");

var $4O58B = parcelRequire("4O58B");


var $oZyht = parcelRequire("oZyht");

var $66fty = parcelRequire("66fty");
var $7119c8d1e2efeb27$require$extendChroma = $66fty.extendChroma;
parcelRequire("8oHP0");
$7119c8d1e2efeb27$require$extendChroma($oZyht);
const $7119c8d1e2efeb27$var$rangeInput = document.getElementById("qualitative_Threshold");
const $7119c8d1e2efeb27$var$rangeLabel = document.getElementById("qualitative_ThresholdValue");
const $7119c8d1e2efeb27$var$button = document.getElementById("qualitative_Generate");
const $7119c8d1e2efeb27$var$testColorsInput = document.getElementById("qualitative_sampleColors");
const $7119c8d1e2efeb27$var$chartsModeSelect = document.getElementById("qualitative_chartsMode");
const $7119c8d1e2efeb27$var$outputModeSelect = document.getElementById("qualitative_format");
const $7119c8d1e2efeb27$var$quoteSwitch = document.getElementById(`qualitativeparamStringQuotes`);
const $7119c8d1e2efeb27$var$backgroundInput = document.getElementById("scales_bgColor");
const $7119c8d1e2efeb27$var$minContrast = document.getElementById("qualitative_minContrast");
const $7119c8d1e2efeb27$var$protan = document.getElementById("check_Protanopia");
const $7119c8d1e2efeb27$var$deutan = document.getElementById("check_Deuteranopia");
const $7119c8d1e2efeb27$var$tritan = document.getElementById("check_Tritanopia");
const $7119c8d1e2efeb27$var$achroma = document.getElementById("check_Achromatopsia");
let $7119c8d1e2efeb27$var$newSafeColors; // Equals the array of generated CVD colors (regardless of keepers)
window._qualitativeScale = (0, $9165ecfe625ca0df$exports._qualitativeScale);
function $7119c8d1e2efeb27$var$colorScaleQualitative(scaleType = "qualitative") {
    const testColors = (0, $9165ecfe625ca0df$exports._qualitativeScale).sampleColors;
    $7119c8d1e2efeb27$var$testColorsInput.value = (0, $9165ecfe625ca0df$exports._qualitativeScale).sampleColors;
    $7119c8d1e2efeb27$var$showColors(testColors, "originalColors", true);
    (0, $4O58B.createColorWheel)($7119c8d1e2efeb27$var$chartsModeSelect.value, 50, scaleType);
    $7119c8d1e2efeb27$var$button.click();
    (0, $b23be941d43c3510$exports.createDemos)(scaleType, (0, $9165ecfe625ca0df$exports._qualitativeScale).keeperColors);
    $7119c8d1e2efeb27$var$createOutput();
}
$7119c8d1e2efeb27$var$chartsModeSelect.addEventListener("change", (e)=>{
    let lightness = e.target.value === "HSV" ? 100 : e.target.value === "HSLuv" ? 60 : 50;
    (0, $4O58B.updateColorWheel)(e.target.value, lightness, true, null, "qualitative", (0, $9165ecfe625ca0df$exports._qualitativeScale).keeperColors);
});
function $7119c8d1e2efeb27$var$updateColors() {
    const scaleType = "qualitative";
    $7119c8d1e2efeb27$var$clearKeepers();
    const testColors = (0, $9165ecfe625ca0df$exports._qualitativeScale).sampleColors;
    document.getElementById("cvdSafeColors").innerHTML = " ";
    const getSafeColors = Promise.resolve($7119c8d1e2efeb27$var$getCvdSafeColors(testColors));
    getSafeColors.then((newSafeColors)=>{
        $7119c8d1e2efeb27$var$showColors(newSafeColors, "cvdSafeColors");
        $7119c8d1e2efeb27$var$showSimulatedColors(newSafeColors, true);
        (0, $b23be941d43c3510$exports.createDemos)(scaleType, (0, $9165ecfe625ca0df$exports._qualitativeScale).keeperColors);
        $7119c8d1e2efeb27$var$createOutput();
    });
}
$7119c8d1e2efeb27$var$testColorsInput.addEventListener("input", (0, $6A7nx.throttle)($7119c8d1e2efeb27$var$inputUpdate, 10));
function $7119c8d1e2efeb27$var$inputUpdate(e) {
    const newTestColors = e.target.value.replaceAll(" ", "").split(",");
    (0, $9165ecfe625ca0df$exports._qualitativeScale).sampleColors = newTestColors;
    $7119c8d1e2efeb27$var$showColors(newTestColors, "originalColors", true);
    setTimeout(()=>{
        $7119c8d1e2efeb27$var$updateColors();
    }, 100);
}
$7119c8d1e2efeb27$var$rangeInput.addEventListener("input", function(e) {
    $7119c8d1e2efeb27$var$updateColors();
    const val = e.target.value;
    $7119c8d1e2efeb27$var$rangeLabel.innerHTML = val;
});
$7119c8d1e2efeb27$var$minContrast.addEventListener("input", function() {
    $7119c8d1e2efeb27$var$updateColors();
});
$7119c8d1e2efeb27$var$protan.addEventListener("input", function() {
    $7119c8d1e2efeb27$var$updateColors();
});
$7119c8d1e2efeb27$var$deutan.addEventListener("input", function() {
    $7119c8d1e2efeb27$var$updateColors();
});
$7119c8d1e2efeb27$var$tritan.addEventListener("input", function() {
    $7119c8d1e2efeb27$var$updateColors();
});
$7119c8d1e2efeb27$var$achroma.addEventListener("input", function() {
    $7119c8d1e2efeb27$var$updateColors();
});
$7119c8d1e2efeb27$var$backgroundInput.addEventListener("input", function(e) {
    // change <main> background
    const scaleType = "qualitative";
    let value = e.target.value;
    let wrapper = document.getElementById(`main_${scaleType}`);
    wrapper.style.backgroundColor = value;
    // toggle class based on lightness
    let lightness = $oZyht(value).jch()[0];
    if (lightness < 50) {
        wrapper.classList.remove("spectrum--light");
        wrapper.classList.add("spectrum--darkest");
    } else {
        wrapper.classList.remove("spectrum--darkest");
        wrapper.classList.add("spectrum--light");
    }
});
function $7119c8d1e2efeb27$var$updateColorsIfContrast() {
    if ($7119c8d1e2efeb27$var$minContrast.checked) $7119c8d1e2efeb27$var$updateColors();
}
$7119c8d1e2efeb27$var$backgroundInput.addEventListener("input", (0, $6A7nx.throttle)($7119c8d1e2efeb27$var$updateColorsIfContrast, 100));
$7119c8d1e2efeb27$var$button.addEventListener("click", function() {
    const scaleType = "qualitative";
    document.getElementById("cvdSafeColors").innerHTML = " ";
    const testColors = Promise.resolve((0, $9165ecfe625ca0df$exports._qualitativeScale).sampleColors);
    const getKeepers = Promise.resolve((0, $9165ecfe625ca0df$exports._qualitativeScale).keeperColors);
    let valid = true;
    getKeepers.then((keepers)=>{
        keepers.map((item)=>{
            if (item.length < 7) valid = false;
        });
    });
    Promise.all([
        testColors,
        getKeepers
    ]).then((resolve)=>{
        let testColors = resolve[0];
        let keepers = resolve[1];
        const getSafeColorSet = Promise.resolve($7119c8d1e2efeb27$var$getLargestSetCvdColors(testColors, (0, $9165ecfe625ca0df$exports._qualitativeScale).keeperColors));
        getSafeColorSet.then((newSafeColors)=>{
            if (valid) {
                if (newSafeColors === undefined) newSafeColors = $7119c8d1e2efeb27$var$getLargestSetCvdColors(testColors, keepers);
                if (!newSafeColors && keepers.length > 0) {
                    // If newSafeColors is undefined, and keeperColors are larger than one,
                    // this means we've found the only available combination of CVD safe colors.
                    // In this case, we want to show the keeper colors in the simulations.
                    $7119c8d1e2efeb27$var$showColors(keepers, "cvdSafeColors");
                    $7119c8d1e2efeb27$var$showSimulatedColors(keepers, true);
                } else {
                    // Otherwise, show the newSafeColors set, because it includes additional
                    // color options that can be added to the keeperColors set.
                    // console.log(newSafeColors)
                    $7119c8d1e2efeb27$var$showColors(newSafeColors, "cvdSafeColors");
                    $7119c8d1e2efeb27$var$showSimulatedColors(newSafeColors, true);
                }
            } else {
                $7119c8d1e2efeb27$var$showColors(newSafeColors, "cvdSafeColors");
                $7119c8d1e2efeb27$var$showSimulatedColors(newSafeColors, true);
            }
            (0, $4O58B.updateColorDots)($7119c8d1e2efeb27$var$chartsModeSelect.value, scaleType, keepers);
            (0, $b23be941d43c3510$exports.createDemos)(scaleType, keepers);
            $7119c8d1e2efeb27$var$createOutput();
        });
    });
});
function $7119c8d1e2efeb27$var$clearKeepers() {
    (0, $9165ecfe625ca0df$exports._qualitativeScale).keeperColors = [];
    let wrapper = document.getElementById("qualitative_selectedColors");
    wrapper.classList.add("isEmpty");
    wrapper.innerHTML = "Select generated colors to begin building your scale";
}
function $7119c8d1e2efeb27$var$getModes() {
    let modes = [];
    if ($7119c8d1e2efeb27$var$protan.checked) modes.push("protanopia");
    if ($7119c8d1e2efeb27$var$deutan.checked) modes.push("deuteranopia");
    if ($7119c8d1e2efeb27$var$tritan.checked) modes.push("tritanopia");
    if ($7119c8d1e2efeb27$var$achroma.checked) modes.push("achromatopsia");
    (0, $9165ecfe625ca0df$exports._qualitativeScale).cvdSupport = modes;
    return modes;
}
function $7119c8d1e2efeb27$var$createOutput() {
    const scaleType = "qualitative";
    const output = (0, $9165ecfe625ca0df$exports._qualitativeScale).output;
    const quoteSwitch = document.getElementById(`${scaleType}paramStringQuotes`);
    const quotes = quoteSwitch.checked;
    // reassign new swatch value
    const panelOutputContent = document.getElementById(`${scaleType}ColorScaleOutput`);
    panelOutputContent.innerHTML = " ";
    const sampleColors = (0, $9165ecfe625ca0df$exports._qualitativeScale).keeperColors;
    (0, $9165ecfe625ca0df$exports._qualitativeScale).keeperColors = (0, $9165ecfe625ca0df$exports._qualitativeScale).output === "HEX" || (0, $9165ecfe625ca0df$exports._qualitativeScale).output === "RGB" ? sampleColors : sampleColors.map((c)=>{
        return (0, $6A7nx.cssColorToRgb)(c);
    });
    let colorvalueString = quotes ? sampleColors.map((c)=>{
        return `"${c}"`;
    }).toString().replaceAll(",", ", ") : sampleColors.toString().replaceAll(",", ", ");
    panelOutputContent.innerHTML = colorvalueString;
}
$7119c8d1e2efeb27$var$outputModeSelect.addEventListener("change", (e)=>{
    let format = e.target.value;
    (0, $9165ecfe625ca0df$exports._qualitativeScale).output = format;
    $7119c8d1e2efeb27$var$createOutput();
});
$7119c8d1e2efeb27$var$quoteSwitch.addEventListener("change", $7119c8d1e2efeb27$var$createOutput);
/**
 *  Helper function to test two colors for all CVD
 *  types. Returns true or false
 *
 *  let testColor1 = '#e41a1c';
 *  let testColor2 = '#25547a';
 *  console.log(testCvd(testColor1, testColor2))
 *  // returns true
 *
 *  let testColor1 = '#e41a1c';
 *  let testColor2 = '#cf2b22';
 *  console.log(testCvd(testColor1, testColor2))
 *  // returns false
 */ function $7119c8d1e2efeb27$var$testCvd(color1, color2, log) {
    //  grab threshold from the UI
    let minimumThreshold = Number($7119c8d1e2efeb27$var$rangeInput.value);
    const modes = $7119c8d1e2efeb27$var$getModes();
    let result = true;
    for(let i = 0; i < modes.length; i++){
        let sim1 = (0, $6A7nx.simulateCvd)(color1, modes[i]);
        let sim2 = (0, $6A7nx.simulateCvd)(color2, modes[i]);
        let deltaE = (0, $6A7nx.getDifference)(sim1, sim2);
        if (deltaE < minimumThreshold) {
            if (log) console.error(`${color1} conflicts with ${color2} in ${modes[i]}\nDeltaE: ${deltaE}`);
            result = false;
            break;
        } else continue;
    }
    return result;
}
/**
 *  Function for getting CVD safe colors from a set
 *  Grab a random color. Then loop through the array of colors.
 *  For each color, if it passes & then passes with all other colors,
 *  put it in the safeColors array
 */ function $7119c8d1e2efeb27$var$getCvdSafeColors(colors, sample, random = false) {
    let set;
    if (random) set = (0, $6A7nx.shuffleArray)(colors);
    else set = $7119c8d1e2efeb27$var$orderColors(colors, "hue", "lightness");
    let ratios = $7119c8d1e2efeb27$var$minContrast.checked;
    let background = $7119c8d1e2efeb27$var$backgroundInput.value;
    let complianceLevelPicker = document.getElementById("scales_complianceLevel");
    let complianceLevel = complianceLevelPicker.value;
    let contrastMinimum = complianceLevel === "AAA" ? 4.5 : 3;
    // TODO: Compliance picker does not run updateColor
    if (ratios) set = $7119c8d1e2efeb27$var$eliminateLowContrastFromSet(set, background, contrastMinimum);
    let safeColors = [];
    if (sample) {
        if (sample.length > 1) {
            // test all sample colors against themselves first
            for(let i = 0; i < sample.length; i++){
                // loop this color against all other colors
                let result = true;
                for(let j = 0; j < sample.length; j++){
                    if (i === j) continue;
                    else {
                        let test = $7119c8d1e2efeb27$var$testCvd(sample[i], sample[j], true); // true will log any conflicts
                        if (test === false) {
                            result = false;
                            break;
                        }
                    }
                }
                if (result === true) safeColors.push(sample[i]);
                else console.warn(`Conflict: eliminating color ${sample[i]} from set`);
            }
            // Remove duplicates
            safeColors = [
                ...new Set(safeColors)
            ];
        }
        if (sample.length === 1) safeColors.push(sample[0]);
    } else {
        const randomIndex = $7119c8d1e2efeb27$var$getRandomInt(set.length);
        // Grab a random color to start with
        const randomColor = set[randomIndex];
        safeColors.push(randomColor);
    }
    let end = safeColors.length;
    for(let i = 0; i < set.length; i++){
        let result = true;
        // For each color of the setay,
        // loop it against all colors of safeColors
        for(let j = 0; j < end; j++){
            let test = $7119c8d1e2efeb27$var$testCvd(set[i], safeColors[j]);
            if (test === false) {
                result = false;
                break;
            } else continue;
        }
        if (result === true) {
            // safeColors = [...safeColors, set[i] ];
            safeColors.push(set[i]);
            end = end + 1;
        }
    }
    return safeColors;
}
let $7119c8d1e2efeb27$var$cache;
function $7119c8d1e2efeb27$var$getLargestSetCvdColors(set, sample) {
    let sets = [];
    for(let i = 0; i < 18; i++)sets.push($7119c8d1e2efeb27$var$getCvdSafeColors(set, sample));
    let maxLengthArray = Math.max(...sets.map((a)=>a.length));
    let indicies = sets.map((a)=>a.length);
    let index = indicies.indexOf(maxLengthArray);
    let matchingIndicies = [];
    while(index != -1){
        matchingIndicies.push(index);
        index = indicies.indexOf(maxLengthArray, index + 1);
    }
    for(let i = 0; i < matchingIndicies.length; i++){
        let currentIndex = matchingIndicies[i];
        if ($7119c8d1e2efeb27$var$arraysEqual(sets[currentIndex], $7119c8d1e2efeb27$var$cache)) continue;
        if (!sets[currentIndex]) continue;
        else {
            $7119c8d1e2efeb27$var$cache = sets[currentIndex];
            return sets[currentIndex];
        }
    }
}
/**
 *  Helper function to order colors
 *  by hue and lightness
 */ function $7119c8d1e2efeb27$var$orderColors(colors, priority1, priority2) {
    let validOptions = [
        "hue",
        "saturation",
        "lightness"
    ];
    for(let i = 0; i < validOptions.length; i++){
        if (!validOptions.includes(priority1)) console.warn(`${priority1} is not a valid option of ${validOptions}`);
        if (!validOptions.includes(priority2)) console.warn(`${priority1} is not a valid option of ${validOptions}`);
    }
    // for each color, convert to lch object
    let colorsLch = colors.map((color, i)=>{
        let lch = $oZyht(color).jch();
        return {
            hue: lch[2],
            saturation: lch[1],
            lightness: lch[0],
            color: color,
            index: i
        };
    });
    // Sort by priority 1, then by priority 1
    let sorted = colorsLch.sort((a, b)=>a[priority1] > b[priority1] ? 1 : a[priority1] === b[priority1] ? a[priority2] > b[priority2] ? 1 : -1 : -1);
    // Create random "starting point" for hues
    if (priority1 === "hue") {
        let randomIndex = $7119c8d1e2efeb27$var$getRandomInt(sorted.length);
        let firstHalf = sorted.splice(0, randomIndex);
        let secondHalf = sorted.splice(randomIndex);
        sorted = secondHalf.concat(firstHalf);
    }
    const orderedColors = sorted.map((object)=>{
        return object.color;
    });
    return orderedColors;
}
function $7119c8d1e2efeb27$var$showColors(arr, dest, panel = false) {
    let wrap = document.getElementById(dest);
    wrap.innerHTML = " ";
    if (!arr) {
        let swatch = document.createElement("div");
        swatch.className = "emptyColorsGroup";
        swatch.innerHTML = "No colors available.";
        wrap.appendChild(swatch);
    } else arr.map((color)=>{
        let swatch = document.createElement("div");
        let colorArr = $oZyht(color).rgb();
        let contrast = $W2lsj.contrast([
            0,
            0,
            0
        ], colorArr);
        if (contrast < 0) contrast = contrast * -1;
        swatch.className = !panel ? "simulationSwatch" : "panelSwatch";
        swatch.style.backgroundColor = color;
        swatch.style.color = contrast < 4.5 ? "#ffffff" : "#000000";
        if (dest === "cvdSafeColors") {
            swatch.innerHTML = `${color}`;
            let button = document.createElement("button");
            button.className = (0, $9165ecfe625ca0df$exports._qualitativeScale).keeperColors.indexOf(color) >= 0 ? "saveColorToKeepers showSvg" : "saveColorToKeepers", button.style.color = contrast < 4.5 ? "#ffffff" : "#000000";
            button.innerHTML = (0, $9165ecfe625ca0df$exports._qualitativeScale).keeperColors.indexOf(color) >= 0 ? `<svg xmlns:xlink="http://www.w3.org/1999/xlink" class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Locked">
          <use xlink:href="#spectrum-icon-18-LockClosed"></use>
        </svg>` : `<svg xmlns:xlink="http://www.w3.org/1999/xlink" class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Add">
            <use xlink:href="#spectrum-icon-18-Add"></use>
          </svg>`;
            button.addEventListener("click", (e)=>{
                if ((0, $9165ecfe625ca0df$exports._qualitativeScale).keeperColors.indexOf(color) < 0) {
                    (0, $9165ecfe625ca0df$exports._qualitativeScale).keeperColors.push(color);
                    $7119c8d1e2efeb27$var$showColors((0, $9165ecfe625ca0df$exports._qualitativeScale).keeperColors, "qualitative_selectedColors");
                    (0, $4O58B.updateColorDots)($7119c8d1e2efeb27$var$chartsModeSelect.value, "qualitative", (0, $9165ecfe625ca0df$exports._qualitativeScale).keeperColors);
                    (0, $b23be941d43c3510$exports.createDemos)("qualitative", (0, $9165ecfe625ca0df$exports._qualitativeScale).keeperColors);
                    document.getElementById("qualitative_selectedColors").classList.remove("isEmpty");
                    $7119c8d1e2efeb27$var$createOutput();
                }
            });
            swatch.appendChild(button);
        }
        if (dest === "qualitative_selectedColors") {
            let button = document.createElement("button");
            button.className = "saveColorToKeepers", button.style.color = contrast < 4.5 ? "#ffffff" : "#000000";
            button.innerHTML = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Delete">
          <use xlink:href="#spectrum-icon-18-Delete"></use>
        </svg>`;
            button.addEventListener("click", ()=>{
                const index = (0, $9165ecfe625ca0df$exports._qualitativeScale).keeperColors.indexOf(color);
                if (index > -1) (0, $9165ecfe625ca0df$exports._qualitativeScale).keeperColors.splice(index, 1);
                $7119c8d1e2efeb27$var$showColors((0, $9165ecfe625ca0df$exports._qualitativeScale).keeperColors, "qualitative_selectedColors");
                (0, $4O58B.updateColorDots)($7119c8d1e2efeb27$var$chartsModeSelect.value, "qualitative", (0, $9165ecfe625ca0df$exports._qualitativeScale).keeperColors);
                (0, $b23be941d43c3510$exports.createDemos)("qualitative", (0, $9165ecfe625ca0df$exports._qualitativeScale).keeperColors);
                $7119c8d1e2efeb27$var$createOutput();
                if ((0, $9165ecfe625ca0df$exports._qualitativeScale).keeperColors.length < 1) {
                    const selectedColors = document.getElementById("qualitative_selectedColors");
                    selectedColors.classList.add("isEmpty");
                    selectedColors.innerHTML = "Select generated colors to begin building your scale";
                }
            });
            swatch.appendChild(button);
        }
        wrap.appendChild(swatch);
    });
}
function $7119c8d1e2efeb27$var$showSimulatedColors(array, sortBySimmilarity) {
    let wrap = document.getElementById("simulatedColors");
    wrap.innerHTML = " ";
    let parentWrap = document.getElementById("qualitativeSimulationWrapper");
    // parentWrap.innerHTML = ' ';
    const getAllModes = Promise.resolve($7119c8d1e2efeb27$var$getModes());
    const arr = Promise.resolve(array);
    Promise.all([
        getAllModes,
        arr
    ]).then((resolve)=>{
        let modes = resolve[0];
        let arr = resolve[1];
        modes.forEach((mode, index)=>{
            // if arr is an array, that means colors have been passed.
            // showSimulatedColors should display all colors in their respective simulations
            if (Array.isArray(arr)) {
                const simArray = Promise.resolve(arr.map((color)=>{
                    return (0, $6A7nx.simulateCvd)(color, mode);
                }));
                simArray.then((simColor)=>{
                    let label = document.createElement("h3");
                    label.className = "spectrum-Heading spectrum-Heading--sizeXXS";
                    label.innerHTML = `${(0, $6A7nx.capitalizeFirstLetter)(mode)}`;
                    wrap.appendChild(label);
                    let originalIndicies = Array.from(Array(arr.length - 1).keys());
                    // if sort by similarity, order colors by hue
                    if (sortBySimmilarity) {
                        // for each color, convert to lch object
                        let colorsLch = simColor.map((color, i)=>{
                            let lch = $oZyht(color).lch();
                            return {
                                hue: lch[2],
                                saturation: lch[1],
                                lightness: lch[0],
                                color: color,
                                index: i
                            };
                        });
                        if (mode === "achromatopsia") colorsLch.sort((a, b)=>a.lightness > b.lightness ? 1 : -1);
                        else colorsLch.sort((a, b)=>a.hue > b.hue ? 1 : a.hue === b.hue ? a.saturation > b.saturation ? 1 : -1 : -1);
                        // Redefine simColor with sorted colors
                        simColor = colorsLch.map((object)=>{
                            return object.color;
                        });
                        // Redefine original indicies so we can properly map original
                        // color value to the newly sorted simultated colors
                        originalIndicies = colorsLch.map((object)=>{
                            return object.index;
                        });
                    }
                    simColor.map((color, index)=>{
                        let swatch = document.createElement("div");
                        swatch.className = "simulationSwatch";
                        swatch.style.backgroundColor = color;
                        let tinySwatch = document.createElement("div");
                        tinySwatch.className = "tinySwatch";
                        tinySwatch.style.backgroundColor = arr[originalIndicies[index]];
                        swatch.appendChild(tinySwatch);
                        // swatch.innerHTML = arr[originalIndicies[index]]
                        wrap.appendChild(swatch);
                    });
                });
                // Only add this text once; don't add if its already there.
                if (!document.getElementById("simulationDisclaimer")) {
                    let textSpan = document.createElement("p");
                    textSpan.id = "simulationDisclaimer";
                    textSpan.className = "spectrum-Body spectrum-Body--sizeXXS";
                    textSpan.innerHTML = "Simulated colors are ordered by hue and saturation for best comparison of similar colors.";
                    parentWrap.appendChild(textSpan);
                }
            } else {
                let textSpan = document.createElement("p");
                textSpan.className = "spectrum-Body spectrum-Body--sizeXXS";
                textSpan.innerHTML = "No colors to preview. Cycle through colors again.";
                parentWrap.appendChild(textSpan);
            }
        });
    });
}
function $7119c8d1e2efeb27$var$arrayRemove(arr, values) {
    const toRemove = new Set(values);
    return arr.filter((value)=>{
        // return those elements not in the namesToDeleteSet
        return !toRemove.has(value);
    });
}
function $7119c8d1e2efeb27$var$getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function $7119c8d1e2efeb27$var$arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.
    for(var i = 0; i < a.length; ++i){
        if (a[i] !== b[i]) return false;
    }
    return true;
}
function $7119c8d1e2efeb27$var$eliminateLowContrastFromSet(set, background, ratio) {
    let lowContrastColors = [];
    const backgroundArray = $oZyht(background).rgb();
    for(let i = 0; i < set.length; i++){
        let colorArray = $oZyht(set[i]).rgb();
        let contrast = $W2lsj.contrast(colorArray, backgroundArray);
        if (contrast < ratio) lowContrastColors.push(set[i]);
    }
    let newSet = $7119c8d1e2efeb27$var$arrayRemove(set, lowContrastColors);
    return newSet;
}
$7119c8d1e2efeb27$exports = {
    colorScaleQualitative: $7119c8d1e2efeb27$var$colorScaleQualitative
};


parcelRequire("9AhIT");
parcelRequire("jpWZ9");
var $a52e1ad7917f2fa8$exports = {};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ 
var $67uIO = parcelRequire("67uIO");

var $jgIgM = parcelRequire("jgIgM");

var $aDYzc = parcelRequire("aDYzc");

function $a52e1ad7917f2fa8$var$createSVGswatches(scaleType) {
    let colorClass = scaleType === "sequential" ? (0, $jgIgM._sequentialScale) : scaleType === "diverging" ? (0, $aDYzc._divergingScale) : (0, $9165ecfe625ca0df$exports._qualitativeScale);
    let colors = scaleType === "qualitative" ? colorClass.keeperColors : colorClass.samples.reverse();
    var svgns = "http://www.w3.org/2000/svg";
    const rectSize = 80;
    const marginX = 8;
    const swatchesPerColor = colors.length;
    const maxColorWidth = (rectSize + marginX) * swatchesPerColor;
    const maxSvgWidth = maxColorWidth;
    const maxSvgHeight = rectSize;
    let svgWrapper = document.createElementNS(svgns, "svg");
    svgWrapper.setAttribute("xmlns", svgns);
    svgWrapper.setAttribute("version", "1.1");
    svgWrapper.setAttributeNS(null, "width", maxSvgWidth + "px");
    svgWrapper.setAttributeNS(null, "height", maxSvgHeight + "px");
    svgWrapper.setAttribute("aria-hidden", "true");
    svgWrapper.id = "svg";
    let outerElement = document.createElement("div");
    outerElement.id = `${scaleType}SVGcolorSamples`;
    let y = 0;
    outerElement.appendChild(svgWrapper);
    document.body.appendChild(outerElement);
    for(let i = 0; i < colors.length; i++){
        let x = (rectSize + marginX) * i;
        let rect = document.createElementNS(svgns, "rect");
        rect.setAttributeNS(null, "x", x);
        rect.setAttributeNS(null, "y", y);
        rect.setAttributeNS(null, "width", rectSize);
        rect.setAttributeNS(null, "height", rectSize);
        rect.setAttributeNS(null, "rx", 8);
        rect.setAttributeNS(null, "fill", colors[i]);
        svgWrapper.appendChild(rect);
    }
}
function $a52e1ad7917f2fa8$var$downloadSwatches(scaleType) {
    const createSvg = Promise.resolve($a52e1ad7917f2fa8$var$createSVGswatches(scaleType));
    createSvg.then(()=>{
        let svg = document.getElementById(`${scaleType}SVGcolorSamples`).innerHTML;
        let scaleName = document.getElementById(`${scaleType}_name`).value;
        let filename = `${scaleName}_${scaleType}_colors.svg`;
        var blob = new Blob([
            `${svg}`
        ], {
            type: "image/svg+xml;charset=utf-8"
        });
        (0, $67uIO.saveAs)(blob, filename);
        document.getElementById(`${scaleType}SVGcolorSamples`).remove();
    });
}
window.downloadSwatches = $a52e1ad7917f2fa8$var$downloadSwatches;
document.getElementById("downloadSequentialSwatches").addEventListener("click", ()=>{
    setTimeout(function() {
        $a52e1ad7917f2fa8$var$downloadSwatches("sequential");
    });
});
document.getElementById("downloadDivergingSwatches").addEventListener("click", ()=>{
    setTimeout(function() {
        $a52e1ad7917f2fa8$var$downloadSwatches("diverging");
    });
});
document.getElementById("downloadQualitativeSwatches").addEventListener("click", ()=>{
    setTimeout(function() {
        $a52e1ad7917f2fa8$var$downloadSwatches("qualitative");
    });
});
$a52e1ad7917f2fa8$exports = {
    createSVGswatches: $a52e1ad7917f2fa8$var$createSVGswatches,
    downloadSwatches: $a52e1ad7917f2fa8$var$downloadSwatches
};


var $0d20623712bdc51f$exports = {};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ 
var $67uIO = parcelRequire("67uIO");

var $jgIgM = parcelRequire("jgIgM");

var $aDYzc = parcelRequire("aDYzc");

function $0d20623712bdc51f$var$createXML(scaleType) {
    let colorClass = scaleType === "sequential" ? (0, $jgIgM._sequentialScale) : scaleType === "diverging" ? (0, $aDYzc._divergingScale) : (0, $9165ecfe625ca0df$exports._qualitativeScale);
    let colors = scaleType === "qualitative" ? colorClass.keeperColors : colorClass.samples.reverse();
    // Type names for Tableau XML
    let type = scaleType === "sequential" ? "ordered-sequential" : scaleType === "diverging" ? "ordered-diverging" : "regular";
    let scaleName = document.getElementById(`${scaleType}_name`).value;
    let colorTags = colors.map((c)=>{
        return `<color>${c}</color>`;
    });
    let colorTagString = colorTags.toString().replaceAll(",<", "\n        <");
    let xml = `
  <?xml version='1.0'?>
  <workbook>
    <preferences>
      <color-palette name="${scaleName}" type="${type}">
        ${colorTagString}
      </color-palette>
    </preferences>
  </workbook>`;
    return xml;
}
function $0d20623712bdc51f$var$downloadXML(scaleType) {
    const createXmlFile = Promise.resolve($0d20623712bdc51f$var$createXML(scaleType));
    createXmlFile.then((file)=>{
        let scaleName = document.getElementById(`${scaleType}_name`).value;
        let filename = `${scaleName}_${scaleType}_colors.xml`;
        var blob = new Blob([
            `${file}`
        ], {
            type: "text/plain"
        });
        (0, $67uIO.saveAs)(blob, filename);
    });
}
window.downloadXML = $0d20623712bdc51f$var$downloadXML;
document.getElementById("sequential_downloadXml").addEventListener("click", ()=>{
    setTimeout(function() {
        $0d20623712bdc51f$var$downloadXML("sequential");
    });
});
document.getElementById("diverging_downloadXml").addEventListener("click", ()=>{
    setTimeout(function() {
        $0d20623712bdc51f$var$downloadXML("diverging");
    });
});
document.getElementById("qualitative_downloadXml").addEventListener("click", ()=>{
    setTimeout(function() {
        $0d20623712bdc51f$var$downloadXML("qualitative");
    });
});
$0d20623712bdc51f$exports = {
    createXML: $0d20623712bdc51f$var$createXML,
    downloadXML: $0d20623712bdc51f$var$downloadXML
};


(0, (/*@__PURE__*/$parcel$interopDefault($lPtXq)))("./spectrum-css-icons.svg");
(0, (/*@__PURE__*/$parcel$interopDefault($lPtXq)))("./spectrum-icons.svg");

var $oZyht = parcelRequire("oZyht");

var $66fty = parcelRequire("66fty");
var $9a64f708798bfb11$require$extendChroma = $66fty.extendChroma;
$9a64f708798bfb11$require$extendChroma($oZyht);
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
const $9a64f708798bfb11$var$mq = window.matchMedia("(prefers-color-scheme: dark)");
if ($9a64f708798bfb11$var$mq.matches) //dark mode
document.querySelector("body").classList.add("spectrum--darkest");
else //light mode
document.querySelector("body").classList.add("spectrum--light");
document.getElementById("tabSequential").click();
// Open default tab of "charts" for each color scale tab
document.getElementById("tabsequentialDemo").click();
document.getElementById("tabdivergingDemo").click();
document.getElementById("tabqualitativeDemo").click();
document.getElementById("welcome").click();
(0, $2c03cb0347d3dbfe$exports.colorScaleSequential)();
(0, $3c376242dd3fb361$exports.colorScaleDiverging)();
(0, $7119c8d1e2efeb27$exports.colorScaleQualitative)();
window.onload = function() {
    // let uri = window.location.toString();
    // let cleanURL = uri.substring(0, uri.indexOf("?"));
    // window.history.replaceState({}, document.title, cleanURL);
    // On window load, transition to remove page loader
    (0, $jzSuI.pageLoader)();
};


//# sourceMappingURL=scales.27e55053.js.map
