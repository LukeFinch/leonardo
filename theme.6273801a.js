
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

var $lPtXq = parcelRequire("lPtXq");
var $7f3c1b36d41ba014$exports = {};
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */ (function webpackUniversalModuleDefinition(root, factory) {
    $7f3c1b36d41ba014$exports = factory();
})($7f3c1b36d41ba014$exports, function() {
    return /******/ function() {
        /******/ var __webpack_modules__ = {
            /***/ 686: /***/ function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
                "use strict";
                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    "default": function() {
                        return /* binding */ clipboard;
                    }
                });
                // EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
                var tiny_emitter = __webpack_require__(279);
                var tiny_emitter_default = /*#__PURE__*/ __webpack_require__.n(tiny_emitter);
                // EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js
                var listen = __webpack_require__(370);
                var listen_default = /*#__PURE__*/ __webpack_require__.n(listen);
                // EXTERNAL MODULE: ./node_modules/select/src/select.js
                var src_select = __webpack_require__(817);
                var select_default = /*#__PURE__*/ __webpack_require__.n(src_select);
                /**
 * Executes a given operation type.
 * @param {String} type
 * @return {Boolean}
 */ function command(type) {
                    try {
                        return document.execCommand(type);
                    } catch (err) {
                        return false;
                    }
                }
                /**
 * Cut action wrapper.
 * @param {String|HTMLElement} target
 * @return {String}
 */ var ClipboardActionCut = function ClipboardActionCut(target) {
                    var selectedText = select_default()(target);
                    command("cut");
                    return selectedText;
                };
                /* harmony default export */ var actions_cut = ClipboardActionCut;
                /**
 * Creates a fake textarea element with a value.
 * @param {String} value
 * @return {HTMLElement}
 */ function createFakeElement(value) {
                    var isRTL = document.documentElement.getAttribute("dir") === "rtl";
                    var fakeElement = document.createElement("textarea"); // Prevent zooming on iOS
                    fakeElement.style.fontSize = "12pt"; // Reset box model
                    fakeElement.style.border = "0";
                    fakeElement.style.padding = "0";
                    fakeElement.style.margin = "0"; // Move element out of screen horizontally
                    fakeElement.style.position = "absolute";
                    fakeElement.style[isRTL ? "right" : "left"] = "-9999px"; // Move element to the same position vertically
                    var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                    fakeElement.style.top = "".concat(yPosition, "px");
                    fakeElement.setAttribute("readonly", "");
                    fakeElement.value = value;
                    return fakeElement;
                }
                /**
 * Create fake copy action wrapper using a fake element.
 * @param {String} target
 * @param {Object} options
 * @return {String}
 */ var fakeCopyAction = function fakeCopyAction(value, options) {
                    var fakeElement = createFakeElement(value);
                    options.container.appendChild(fakeElement);
                    var selectedText = select_default()(fakeElement);
                    command("copy");
                    fakeElement.remove();
                    return selectedText;
                };
                /**
 * Copy action wrapper.
 * @param {String|HTMLElement} target
 * @param {Object} options
 * @return {String}
 */ var ClipboardActionCopy = function ClipboardActionCopy(target) {
                    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                        container: document.body
                    };
                    var selectedText = "";
                    if (typeof target === "string") selectedText = fakeCopyAction(target, options);
                    else if (target instanceof HTMLInputElement && ![
                        "text",
                        "search",
                        "url",
                        "tel",
                        "password"
                    ].includes(target === null || target === void 0 ? void 0 : target.type)) // If input type doesn't support `setSelectionRange`. Simulate it. https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
                    selectedText = fakeCopyAction(target.value, options);
                    else {
                        selectedText = select_default()(target);
                        command("copy");
                    }
                    return selectedText;
                };
                /* harmony default export */ var actions_copy = ClipboardActionCopy;
                function _typeof(obj) {
                    "@babel/helpers - typeof";
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
                        return typeof obj;
                    };
                    else _typeof = function _typeof(obj) {
                        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                    };
                    return _typeof(obj);
                }
                /**
 * Inner function which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 * @param {Object} options
 */ var ClipboardActionDefault = function ClipboardActionDefault() {
                    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                    // Defines base properties passed from constructor.
                    var _options$action = options.action, action = _options$action === void 0 ? "copy" : _options$action, container = options.container, target = options.target, text = options.text; // Sets the `action` to be performed which can be either 'copy' or 'cut'.
                    if (action !== "copy" && action !== "cut") throw new Error('Invalid "action" value, use either "copy" or "cut"');
                     // Sets the `target` property using an element that will be have its content copied.
                    if (target !== undefined) {
                        if (target && _typeof(target) === "object" && target.nodeType === 1) {
                            if (action === "copy" && target.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                            if (action === "cut" && (target.hasAttribute("readonly") || target.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        } else throw new Error('Invalid "target" value, use a valid Element');
                    } // Define selection strategy based on `text` property.
                    if (text) return actions_copy(text, {
                        container: container
                    });
                     // Defines which selection strategy based on `target` property.
                    if (target) return action === "cut" ? actions_cut(target) : actions_copy(target, {
                        container: container
                    });
                };
                /* harmony default export */ var actions_default = ClipboardActionDefault;
                function clipboard_typeof(obj) {
                    "@babel/helpers - typeof";
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") clipboard_typeof = function _typeof(obj) {
                        return typeof obj;
                    };
                    else clipboard_typeof = function _typeof(obj) {
                        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                    };
                    return clipboard_typeof(obj);
                }
                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }
                function _defineProperties(target, props) {
                    for(var i = 0; i < props.length; i++){
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) _defineProperties(Constructor, staticProps);
                    return Constructor;
                }
                function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
                    subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: {
                            value: subClass,
                            writable: true,
                            configurable: true
                        }
                    });
                    if (superClass) _setPrototypeOf(subClass, superClass);
                }
                function _setPrototypeOf(o, p) {
                    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                        o.__proto__ = p;
                        return o;
                    };
                    return _setPrototypeOf(o, p);
                }
                function _createSuper(Derived) {
                    var hasNativeReflectConstruct = _isNativeReflectConstruct();
                    return function _createSuperInternal() {
                        var Super = _getPrototypeOf(Derived), result;
                        if (hasNativeReflectConstruct) {
                            var NewTarget = _getPrototypeOf(this).constructor;
                            result = Reflect.construct(Super, arguments, NewTarget);
                        } else result = Super.apply(this, arguments);
                        return _possibleConstructorReturn(this, result);
                    };
                }
                function _possibleConstructorReturn(self, call) {
                    if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) return call;
                    return _assertThisInitialized(self);
                }
                function _assertThisInitialized(self) {
                    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return self;
                }
                function _isNativeReflectConstruct() {
                    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                    if (Reflect.construct.sham) return false;
                    if (typeof Proxy === "function") return true;
                    try {
                        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                        return true;
                    } catch (e) {
                        return false;
                    }
                }
                function _getPrototypeOf(o) {
                    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                        return o.__proto__ || Object.getPrototypeOf(o);
                    };
                    return _getPrototypeOf(o);
                }
                /**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */ function getAttributeValue(suffix, element) {
                    var attribute = "data-clipboard-".concat(suffix);
                    if (!element.hasAttribute(attribute)) return;
                    return element.getAttribute(attribute);
                }
                /**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */ var Clipboard = /*#__PURE__*/ function(_Emitter) {
                    _inherits(Clipboard, _Emitter);
                    var _super = _createSuper(Clipboard);
                    /**
   * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
   * @param {Object} options
   */ function Clipboard(trigger, options) {
                        var _this;
                        _classCallCheck(this, Clipboard);
                        _this = _super.call(this);
                        _this.resolveOptions(options);
                        _this.listenClick(trigger);
                        return _this;
                    }
                    /**
   * Defines if attributes would be resolved using internal setter functions
   * or custom functions that were passed in the constructor.
   * @param {Object} options
   */ _createClass(Clipboard, [
                        {
                            key: "resolveOptions",
                            value: function resolveOptions() {
                                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                                this.action = typeof options.action === "function" ? options.action : this.defaultAction;
                                this.target = typeof options.target === "function" ? options.target : this.defaultTarget;
                                this.text = typeof options.text === "function" ? options.text : this.defaultText;
                                this.container = clipboard_typeof(options.container) === "object" ? options.container : document.body;
                            }
                        },
                        {
                            key: "listenClick",
                            value: function listenClick(trigger) {
                                var _this2 = this;
                                this.listener = listen_default()(trigger, "click", function(e) {
                                    return _this2.onClick(e);
                                });
                            }
                        },
                        {
                            key: "onClick",
                            value: function onClick(e) {
                                var trigger = e.delegateTarget || e.currentTarget;
                                var action = this.action(trigger) || "copy";
                                var text = actions_default({
                                    action: action,
                                    container: this.container,
                                    target: this.target(trigger),
                                    text: this.text(trigger)
                                }); // Fires an event based on the copy operation result.
                                this.emit(text ? "success" : "error", {
                                    action: action,
                                    text: text,
                                    trigger: trigger,
                                    clearSelection: function clearSelection() {
                                        if (trigger) trigger.focus();
                                        window.getSelection().removeAllRanges();
                                    }
                                });
                            }
                        },
                        {
                            key: "defaultAction",
                            value: function defaultAction(trigger) {
                                return getAttributeValue("action", trigger);
                            }
                        },
                        {
                            key: "defaultTarget",
                            value: function defaultTarget(trigger) {
                                var selector = getAttributeValue("target", trigger);
                                if (selector) return document.querySelector(selector);
                            }
                        },
                        {
                            key: "defaultText",
                            /**
     * Default `text` lookup function.
     * @param {Element} trigger
     */ value: function defaultText(trigger) {
                                return getAttributeValue("text", trigger);
                            }
                        },
                        {
                            key: "destroy",
                            value: function destroy() {
                                this.listener.destroy();
                            }
                        }
                    ], [
                        {
                            key: "copy",
                            value: function copy(target) {
                                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                                    container: document.body
                                };
                                return actions_copy(target, options);
                            }
                        },
                        {
                            key: "cut",
                            value: function cut(target) {
                                return actions_cut(target);
                            }
                        },
                        {
                            key: "isSupported",
                            value: function isSupported() {
                                var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [
                                    "copy",
                                    "cut"
                                ];
                                var actions = typeof action === "string" ? [
                                    action
                                ] : action;
                                var support = !!document.queryCommandSupported;
                                actions.forEach(function(action) {
                                    support = support && !!document.queryCommandSupported(action);
                                });
                                return support;
                            }
                        }
                    ]);
                    return Clipboard;
                }(tiny_emitter_default());
                /* harmony default export */ var clipboard = Clipboard;
            /***/ },
            /***/ 828: /***/ function(module1) {
                var DOCUMENT_NODE_TYPE = 9;
                /**
 * A polyfill for Element.matches()
 */ if (typeof Element !== "undefined" && !Element.prototype.matches) {
                    var proto = Element.prototype;
                    proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
                }
                /**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */ function closest(element, selector) {
                    while(element && element.nodeType !== DOCUMENT_NODE_TYPE){
                        if (typeof element.matches === "function" && element.matches(selector)) return element;
                        element = element.parentNode;
                    }
                }
                module1.exports = closest;
            /***/ },
            /***/ 438: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var closest = __webpack_require__(828);
                /**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */ function _delegate(element, selector, type, callback, useCapture) {
                    var listenerFn = listener.apply(this, arguments);
                    element.addEventListener(type, listenerFn, useCapture);
                    return {
                        destroy: function() {
                            element.removeEventListener(type, listenerFn, useCapture);
                        }
                    };
                }
                /**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */ function delegate(elements, selector, type, callback, useCapture) {
                    // Handle the regular Element usage
                    if (typeof elements.addEventListener === "function") return _delegate.apply(null, arguments);
                    // Handle Element-less usage, it defaults to global delegation
                    if (typeof type === "function") // Use `document` as the first parameter, then apply arguments
                    // This is a short way to .unshift `arguments` without running into deoptimizations
                    return _delegate.bind(null, document).apply(null, arguments);
                    // Handle Selector-based usage
                    if (typeof elements === "string") elements = document.querySelectorAll(elements);
                    // Handle Array-like based usage
                    return Array.prototype.map.call(elements, function(element) {
                        return _delegate(element, selector, type, callback, useCapture);
                    });
                }
                /**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */ function listener(element, selector, type, callback) {
                    return function(e) {
                        e.delegateTarget = closest(e.target, selector);
                        if (e.delegateTarget) callback.call(element, e);
                    };
                }
                module1.exports = delegate;
            /***/ },
            /***/ 879: /***/ function(__unused_webpack_module, exports) {
                /**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */ exports.node = function(value) {
                    return value !== undefined && value instanceof HTMLElement && value.nodeType === 1;
                };
                /**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */ exports.nodeList = function(value) {
                    var type = Object.prototype.toString.call(value);
                    return value !== undefined && (type === "[object NodeList]" || type === "[object HTMLCollection]") && "length" in value && (value.length === 0 || exports.node(value[0]));
                };
                /**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */ exports.string = function(value) {
                    return typeof value === "string" || value instanceof String;
                };
                /**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */ exports.fn = function(value) {
                    var type = Object.prototype.toString.call(value);
                    return type === "[object Function]";
                };
            /***/ },
            /***/ 370: /***/ function(module1, __unused_webpack_exports, __webpack_require__) {
                var is = __webpack_require__(879);
                var delegate = __webpack_require__(438);
                /**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */ function listen(target, type, callback) {
                    if (!target && !type && !callback) throw new Error("Missing required arguments");
                    if (!is.string(type)) throw new TypeError("Second argument must be a String");
                    if (!is.fn(callback)) throw new TypeError("Third argument must be a Function");
                    if (is.node(target)) return listenNode(target, type, callback);
                    else if (is.nodeList(target)) return listenNodeList(target, type, callback);
                    else if (is.string(target)) return listenSelector(target, type, callback);
                    else throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                }
                /**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */ function listenNode(node, type, callback) {
                    node.addEventListener(type, callback);
                    return {
                        destroy: function() {
                            node.removeEventListener(type, callback);
                        }
                    };
                }
                /**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */ function listenNodeList(nodeList, type, callback) {
                    Array.prototype.forEach.call(nodeList, function(node) {
                        node.addEventListener(type, callback);
                    });
                    return {
                        destroy: function() {
                            Array.prototype.forEach.call(nodeList, function(node) {
                                node.removeEventListener(type, callback);
                            });
                        }
                    };
                }
                /**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */ function listenSelector(selector, type, callback) {
                    return delegate(document.body, selector, type, callback);
                }
                module1.exports = listen;
            /***/ },
            /***/ 817: /***/ function(module1) {
                function select(element) {
                    var selectedText;
                    if (element.nodeName === "SELECT") {
                        element.focus();
                        selectedText = element.value;
                    } else if (element.nodeName === "INPUT" || element.nodeName === "TEXTAREA") {
                        var isReadOnly = element.hasAttribute("readonly");
                        if (!isReadOnly) element.setAttribute("readonly", "");
                        element.select();
                        element.setSelectionRange(0, element.value.length);
                        if (!isReadOnly) element.removeAttribute("readonly");
                        selectedText = element.value;
                    } else {
                        if (element.hasAttribute("contenteditable")) element.focus();
                        var selection = window.getSelection();
                        var range = document.createRange();
                        range.selectNodeContents(element);
                        selection.removeAllRanges();
                        selection.addRange(range);
                        selectedText = selection.toString();
                    }
                    return selectedText;
                }
                module1.exports = select;
            /***/ },
            /***/ 279: /***/ function(module1) {
                function E() {
                // Keep this empty so it's easier to inherit from
                // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
                }
                E.prototype = {
                    on: function(name, callback, ctx) {
                        var e = this.e || (this.e = {});
                        (e[name] || (e[name] = [])).push({
                            fn: callback,
                            ctx: ctx
                        });
                        return this;
                    },
                    once: function(name, callback, ctx) {
                        var self = this;
                        function listener() {
                            self.off(name, listener);
                            callback.apply(ctx, arguments);
                        }
                        listener._ = callback;
                        return this.on(name, listener, ctx);
                    },
                    emit: function(name) {
                        var data = [].slice.call(arguments, 1);
                        var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
                        var i = 0;
                        var len = evtArr.length;
                        for(i; i < len; i++)evtArr[i].fn.apply(evtArr[i].ctx, data);
                        return this;
                    },
                    off: function(name, callback) {
                        var e = this.e || (this.e = {});
                        var evts = e[name];
                        var liveEvents = [];
                        if (evts && callback) {
                            for(var i = 0, len = evts.length; i < len; i++)if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
                        }
                        // Remove event from queue to prevent memory leak
                        // Suggested by https://github.com/lazd
                        // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910
                        liveEvents.length ? e[name] = liveEvents : delete e[name];
                        return this;
                    }
                };
                module1.exports = E;
                module1.exports.TinyEmitter = E;
            /***/ }
        };
        /************************************************************************/ /******/ // The module cache
        /******/ var __webpack_module_cache__ = {};
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ // Check if module is in cache
            /******/ if (__webpack_module_cache__[moduleId]) /******/ return __webpack_module_cache__[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = __webpack_module_cache__[moduleId] = {
                /******/ // no module.id needed
                /******/ // no module.loaded needed
                /******/ exports: {}
            };
            /******/ /******/ // Execute the module function
            /******/ __webpack_modules__[moduleId](module1, module1.exports, __webpack_require__);
            /******/ /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ /************************************************************************/ /******/ /* webpack/runtime/compat get default export */ /******/ !function() {
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/ __webpack_require__.n = function(module1) {
                /******/ var getter = module1 && module1.__esModule ? /******/ function() {
                    return module1["default"];
                } : /******/ function() {
                    return module1;
                };
                /******/ __webpack_require__.d(getter, {
                    a: getter
                });
                /******/ return getter;
            /******/ };
        /******/ }();
        /******/ /******/ /* webpack/runtime/define property getters */ /******/ !function() {
            /******/ // define getter functions for harmony exports
            /******/ __webpack_require__.d = function(exports, definition) {
                /******/ for(var key in definition)/******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) /******/ Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: definition[key]
                });
            /******/ };
        /******/ }();
        /******/ /******/ /* webpack/runtime/hasOwnProperty shorthand */ /******/ !function() {
            /******/ __webpack_require__.o = function(obj, prop) {
                return Object.prototype.hasOwnProperty.call(obj, prop);
            };
        /******/ }();
        /******/ /************************************************************************/ /******/ // module exports must be returned from runtime so entry inlining is disabled
        /******/ // startup
        /******/ // Load entry module and return exports
        /******/ return __webpack_require__(686);
    /******/ }().default;
});



var $doFvi = parcelRequire("doFvi");
var $922db13c1d19444e$exports = {};
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
var $177b1a3f13a023d5$exports = {};
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

var $doFvi = parcelRequire("doFvi");

var $hHLLK = parcelRequire("hHLLK");

var $6A7nx = parcelRequire("6A7nx");
var $860250b19110ee55$exports = {};
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
var $47sY3 = parcelRequire("47sY3");

var $doFvi = parcelRequire("doFvi");

var $2jobM = parcelRequire("2jobM");

var $hHLLK = parcelRequire("hHLLK");
var $2d53cd9ea854a169$exports = {};
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ 
var $W2lsj = parcelRequire("W2lsj");

var $dlNIw = parcelRequire("dlNIw");

var $doFvi = parcelRequire("doFvi");

var $6A7nx = parcelRequire("6A7nx");
function $2d53cd9ea854a169$var$createOutputColors(dest) {
    if (dest) dest = document.getElementById(dest);
    let wcagFormula = document.getElementById("themeWCAG").value;
    let swatchesOutputs = document.getElementById("swatchesOutputs");
    let themeOutputs1 = document.getElementById("themeOutputs");
    swatchesOutputs.classList = "hideSwatchLuminosity hideSwatchContrast";
    let theme = (0, $doFvi._theme).contrastColors;
    let themeBackgroundColor;
    if ((0, $doFvi._theme).output === "RGB" || (0, $doFvi._theme).output === "HEX") themeBackgroundColor = theme[0].background;
    else // First, make the color an RGB color
    themeBackgroundColor = (0, $6A7nx.cssColorToRgb)(theme[0].background);
    let themeBackgroundColorArray = [
        (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).rgb(themeBackgroundColor).r,
        (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).rgb(themeBackgroundColor).g,
        (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).rgb(themeBackgroundColor).b
    ];
    const backgroundLum = (0, $doFvi._theme).lightness;
    let themeColorArray = [];
    themeOutputs1.style.backgroundColor = themeBackgroundColor;
    let destinations = dest ? [
        dest
    ] : [
        themeOutputs1,
        swatchesOutputs
    ];
    // Iterate each color from theme except 1st object (background)
    destinations.map((dest)=>{
        dest.innerHTML = " ";
        // Ignore first theme item (background color) when making swatches for
        // the Swatch tab. Only create the background color in the Theme preview
        // Only grab one color (i=1, i<2) to show in UI, which will be turned grayscale
        let length = dest === swatchesOutputs ? 2 : theme.length;
        for(let i = dest === swatchesOutputs ? 1 : 0; i < length; i++){
            let wrapper = document.createElement("div");
            wrapper.className = "themeOutputItem";
            let swatchWrapper = document.createElement("div");
            swatchWrapper.className = "themeOutputColor";
            let colorName = theme[i].name;
            let outerTextColor = backgroundLum > 50 ? "#000000" : "#ffffff";
            // Iterate each color value
            if (theme[i].values) {
                let p = document.createElement("p");
                p.className = "spectrum-Heading spectrum-Heading--sizeXXS themeOutputItem--Heading";
                p.style.color = outerTextColor;
                p.innerHTML = theme[i].name;
                if (dest === themeOutputs1) wrapper.appendChild(p);
                for(let j = 0; j < theme[i].values.length; j++){
                    // for each value object
                    let originalValue = theme[i].values[j].value; // output value of color
                    let formattedName = colorName.replace(/\s+/g, ""); // these names will have had spaces removed already
                    let swatchName = theme[i].values[j].name.replace(formattedName, "");
                    let colorForTransform;
                    if ((0, $doFvi._theme).output === "RGB" || (0, $doFvi._theme).output === "HEX") colorForTransform = originalValue;
                    else // First, make the color an RGB color
                    colorForTransform = (0, $6A7nx.cssColorToRgb)(originalValue);
                    let colorValue = colorForTransform;
                    if (dest === swatchesOutputs) colorValue = (0, $6A7nx.colorToGrayScale)(colorForTransform);
                    // get the ratio to print inside the swatch
                    let contrast = theme[i].values[j].contrast;
                    let colorArray = [
                        (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).rgb(colorForTransform).r,
                        (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).rgb(colorForTransform).g,
                        (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).rgb(colorForTransform).b
                    ];
                    let actualContrast = $W2lsj.contrast(colorArray, themeBackgroundColorArray, undefined, wcagFormula);
                    let innerTextColor = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).hsluv(colorForTransform).v > 50 ? "#000000" : "#ffffff";
                    let contrastRounded = Math.round(actualContrast * 100) / 100;
                    let contrastTextNode = wcagFormula === "wcag2" ? contrastRounded + " :1" : contrastRounded;
                    let contrastText = document.createTextNode(contrastTextNode);
                    let contrastTextSpan = document.createElement("span");
                    contrastTextSpan.className = "themeOutputSwatch_contrast";
                    contrastTextSpan.appendChild(contrastText);
                    contrastTextSpan.style.color = innerTextColor;
                    let luminosityValue = (0, $6A7nx.round)((0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).hsluv(colorForTransform).v, 2);
                    let luminosityText = document.createTextNode(luminosityValue + "%");
                    let luminosityTextSpan = document.createElement("span");
                    luminosityTextSpan.className = "themeOutputSwatch_luminosity";
                    luminosityTextSpan.appendChild(luminosityText);
                    luminosityTextSpan.style.color = innerTextColor;
                    let swatchIndexText = document.createTextNode(swatchName);
                    let swatchIndexTextSpan = document.createElement("span");
                    swatchIndexTextSpan.className = "themeOutputSwatch_index";
                    swatchIndexTextSpan.appendChild(swatchIndexText);
                    swatchIndexTextSpan.style.color = outerTextColor;
                    let div = document.createElement("div");
                    div.className = "themeOutputSwatch";
                    if (dest === themeOutputs1) {
                        div.title = `Click to copy value ${originalValue}`;
                        // copy text should be for value of original color, not of preview color.
                        div.setAttribute("data-clipboard-text", originalValue);
                        div.setAttribute("tabindex", "0");
                    }
                    if (dest !== themeOutputs1) div.style.cursor = "default";
                    div.style.backgroundColor = colorValue;
                    div.style.borderColor = backgroundLum > 50 && contrast < 3 ? "rgba(0, 0, 0, 0.2)" : backgroundLum <= 50 && contrast < 3 ? " rgba(255, 255, 255, 0.4)" : "transparent";
                    if (dest === themeOutputs1) div.appendChild(swatchIndexTextSpan);
                    else div.appendChild(luminosityTextSpan);
                    div.appendChild(contrastTextSpan);
                    swatchWrapper.appendChild(div);
                    themeColorArray.push(originalValue);
                }
                wrapper.appendChild(swatchWrapper);
            } else if (theme[i].background && dest === themeOutputs1) {
                let p = document.createElement("p");
                p.className = "spectrum-Heading spectrum-Heading--sizeXXS  themeOutputItem--Heading";
                p.innerHTML = "Background color";
                p.style.color = backgroundLum > 50 ? "#000000" : "#ffffff";
                wrapper.appendChild(p);
                let originalValue = theme[i].background; // output value of color
                // set global variable value. Probably shouldn't do it this way.
                let colorForTransform;
                if ((0, $doFvi._theme).output === "RGB" || (0, $doFvi._theme).output === "HEX") colorForTransform = originalValue;
                else // First, make the color an RGB color
                colorForTransform = (0, $6A7nx.cssColorToRgb)(originalValue);
                let colorValue = colorForTransform;
                let div = document.createElement("div");
                div.className = "themeOutputSwatch";
                div.title = `Click to copy value ${originalValue}`;
                div.setAttribute("tabindex", "0");
                div.setAttribute("data-clipboard-text", originalValue);
                div.style.backgroundColor = colorValue;
                div.style.borderColor = backgroundLum > 50 ? "rgba(0, 0, 0, 0.2)" : backgroundLum <= 50 ? " rgba(255, 255, 255, 0.4)" : "transparent";
                swatchWrapper.appendChild(div);
                wrapper.appendChild(swatchWrapper);
                themeColorArray.push(originalValue);
            }
            dest.appendChild(wrapper);
        }
    });
    // Unique values only
    const colorsForCopy = [
        ...new Set(themeColorArray)
    ];
    let copyThemeColors = document.getElementById("copyThemeColors");
    copyThemeColors.setAttribute("data-clipboard-text", colorsForCopy);
}
function $2d53cd9ea854a169$var$createDetailOutputColors(colorName) {
    let wcagFormula = document.getElementById("themeWCAG").value;
    let swatchesOutputs = document.getElementById("detailSwatchesOutputs");
    if (swatchesOutputs) swatchesOutputs.innerHTML = " ";
    let dest = swatchesOutputs;
    let theme = (0, $doFvi._theme).contrastColors;
    let themeBackgroundColor;
    if ((0, $doFvi._theme).output === "RGB" || (0, $doFvi._theme).output === "HEX") themeBackgroundColor = theme[0].background;
    else // First, make the color an RGB color
    themeBackgroundColor = (0, $6A7nx.cssColorToRgb)(theme[0].background);
    let themeBackgroundColorArray = [
        (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).rgb(themeBackgroundColor).r,
        (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).rgb(themeBackgroundColor).g,
        (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).rgb(themeBackgroundColor).b
    ];
    const backgroundLum = (0, $doFvi._theme).lightness;
    // Rather than looping for each color in the theme, find only the
    // color defined within the panel.
    let colorOutput = theme.filter((obj)=>{
        return obj.name === colorName;
    });
    colorOutput = colorOutput[0];
    let wrapper = document.createElement("div");
    wrapper.className = "themeOutputItem";
    let swatchWrapper = document.createElement("div");
    swatchWrapper.className = "themeOutputColor";
    let outerTextColor = backgroundLum > 50 ? "#000000" : "#ffffff";
    // Iterate each color value
    // if (colorOutput.values) {
    let p = document.createElement("p");
    p.className = "spectrum-Heading spectrum-Heading--sizeXXS themeOutputItem--Heading";
    p.style.color = outerTextColor;
    p.innerHTML = colorOutput.name;
    if (dest === themeOutputs) wrapper.appendChild(p);
    for(let j = 0; j < colorOutput.values.length; j++){
        // for each value object
        let originalValue = colorOutput.values[j].value; // output value of color
        let formattedName = colorName.replace(/\s+/g, ""); // these names will have had spaces removed already
        let swatchName = colorOutput.values[j].name.replace(formattedName, "");
        let colorForTransform;
        if ((0, $doFvi._theme).output === "RGB" || (0, $doFvi._theme).output === "HEX") colorForTransform = originalValue;
        else // First, make the color an RGB color
        colorForTransform = (0, $6A7nx.cssColorToRgb)(originalValue);
        // transform original color based on preview mode
        // let colorValue = cvdColors(colorForTransform);
        let colorValue = colorForTransform;
        // get the ratio to print inside the swatch
        let contrast = colorOutput.values[j].contrast;
        let colorArray = [
            (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).rgb(colorForTransform).r,
            (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).rgb(colorForTransform).g,
            (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).rgb(colorForTransform).b
        ];
        let actualContrast = $W2lsj.contrast(colorArray, themeBackgroundColorArray, undefined, wcagFormula);
        let innerTextColor = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).hsluv(colorForTransform).v > 50 ? "#000000" : "#ffffff";
        let contrastRounded = Math.round(actualContrast * 100) / 100;
        let contrastTextNode = wcagFormula === "wcag2" ? contrastRounded + " :1" : contrastRounded;
        let contrastText = document.createTextNode(contrastTextNode);
        let contrastTextSpan = document.createElement("span");
        contrastTextSpan.className = "themeOutputSwatch_contrast";
        contrastTextSpan.appendChild(contrastText);
        contrastTextSpan.style.color = innerTextColor;
        let luminosityValue = (0, $6A7nx.round)((0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).hsluv(colorForTransform).v, 2);
        let luminosityText = document.createTextNode(luminosityValue + "%");
        let luminosityTextSpan = document.createElement("span");
        luminosityTextSpan.className = "themeOutputSwatch_luminosity";
        luminosityTextSpan.appendChild(luminosityText);
        luminosityTextSpan.style.color = innerTextColor;
        let swatchIndexText = document.createTextNode(swatchName);
        let swatchIndexTextSpan = document.createElement("span");
        swatchIndexTextSpan.className = "themeOutputSwatch_index";
        swatchIndexTextSpan.appendChild(swatchIndexText);
        swatchIndexTextSpan.style.color = outerTextColor;
        let div = document.createElement("div");
        div.className = "themeOutputSwatch";
        // copy text should be for value of original color, not of preview color.
        div.setAttribute("data-clipboard-text", originalValue);
        div.setAttribute("tabindex", "0");
        div.style.backgroundColor = colorValue;
        div.style.borderColor = backgroundLum > 50 && contrast < 3 ? "rgba(0, 0, 0, 0.2)" : backgroundLum <= 50 && contrast < 3 ? " rgba(255, 255, 255, 0.4)" : "transparent";
        if (dest === themeOutputs) div.appendChild(swatchIndexTextSpan);
        else div.appendChild(luminosityTextSpan);
        div.appendChild(contrastTextSpan);
        swatchWrapper.appendChild(div);
    }
    wrapper.appendChild(swatchWrapper);
    dest.appendChild(wrapper);
}
$2d53cd9ea854a169$exports = {
    createOutputColors: $2d53cd9ea854a169$var$createOutputColors,
    createDetailOutputColors: $2d53cd9ea854a169$var$createDetailOutputColors
};


var $7ea7fc020a95ce10$exports = {};
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

var $18Jwm = parcelRequire("18Jwm");

var $hHLLK = parcelRequire("hHLLK");

var $doFvi = parcelRequire("doFvi");

var $oZyht = parcelRequire("oZyht");

var $66fty = parcelRequire("66fty");
var $7ea7fc020a95ce10$require$extendChroma = $66fty.extendChroma;
$7ea7fc020a95ce10$require$extendChroma($oZyht);
const $7ea7fc020a95ce10$var$lineTypeSelect = document.getElementById("chartLineType");
const $7ea7fc020a95ce10$var$lineType = $7ea7fc020a95ce10$var$lineTypeSelect.value;
let $7ea7fc020a95ce10$var$isStep = $7ea7fc020a95ce10$var$lineType === "step" ? true : false;
$7ea7fc020a95ce10$var$lineTypeSelect.addEventListener("change", (e)=>{
    let val = e.target.value;
    $7ea7fc020a95ce10$var$isStep = val === "step" ? true : false;
    let chartRatios = Promise.resolve((0, $hHLLK.getThemeContrastRatios)());
    chartRatios.then(function(resolve) {
        $7ea7fc020a95ce10$var$createRatioChart(resolve, $7ea7fc020a95ce10$var$isStep);
    });
    let chartLuminosities = Promise.resolve((0, $hHLLK.getLuminosities)());
    chartLuminosities.then(function(resolve) {
        $7ea7fc020a95ce10$var$createLuminosityChart(resolve, $7ea7fc020a95ce10$var$isStep);
    });
});
function $7ea7fc020a95ce10$var$createRatioChart(chartRatios, bool) {
    if (!bool) bool = $7ea7fc020a95ce10$var$isStep;
    let dest = document.getElementById("contrastChart");
    dest.innerHTML = " ";
    let dest2 = document.getElementById("detailContrastChart");
    if (dest2) dest2.innerHTML = " ";
    let wcagFormula = document.getElementById("themeWCAG").value;
    let lightness = Number(document.getElementById("themeBrightnessSlider").value);
    // Calculate highest possible contrast ratio (black or white) against background color
    const maxPossibleRatio = lightness > 50 ? $W2lsj.contrast([
        0,
        0,
        0
    ], $oZyht((0, $doFvi._theme).contrastColors[0].background).rgb(), undefined, wcagFormula) : $W2lsj.contrast([
        255,
        255,
        255
    ], $oZyht((0, $doFvi._theme).contrastColors[0].background).rgb(), undefined, wcagFormula);
    const fillRange = (start, end)=>{
        return Array(end - start + 1).fill().map((item, index)=>start + index);
    };
    let dataXcontrast = fillRange(1, chartRatios.length);
    let dataContrast = [
        {
            x: dataXcontrast,
            y: chartRatios.map(function(d) {
                let cappedRatio = d > maxPossibleRatio ? maxPossibleRatio : d;
                return parseFloat(cappedRatio);
            }) // convert to number
        }
    ];
    let minRatio = Math.min(...chartRatios);
    let yMin = wcagFormula === "wcag3" ? 0 : minRatio < 1 ? minRatio : 1;
    let yMax = wcagFormula === "wcag3" ? 106 : 21;
    (0, $18Jwm.createChart)(dataContrast, "Contrast ratio", "Swatches", "#contrastChart", yMin, yMax, true, undefined, undefined, bool);
    // for color details view
    (0, $18Jwm.createChart)(dataContrast, "Contrast ratio", "Swatches", "#detailContrastChart", yMin, yMax, true, undefined, undefined, bool);
}
function $7ea7fc020a95ce10$var$createLuminosityChart(chartLuminosities, bool) {
    if (!bool) bool = $7ea7fc020a95ce10$var$isStep;
    let dest = document.getElementById("luminosityChart");
    dest.innerHTML = " ";
    let dest2 = document.getElementById("detailLightnessChart");
    if (dest2) dest2.innerHTML = " ";
    const fillRange = (start, end)=>{
        return Array(end - start + 1).fill().map((item, index)=>start + index);
    };
    let dataXluminosity = fillRange(1, chartLuminosities.length);
    let dataLuminosity = [
        {
            x: dataXluminosity,
            y: chartLuminosities.map(function(d) {
                return parseFloat(d);
            }) // convert to number
        }
    ];
    let yMin = 0;
    let yMax = 100;
    (0, $18Jwm.createChart)(dataLuminosity, "Lightness", "Swatches", "#luminosityChart", yMin, yMax, true, undefined, undefined, bool);
    // for color details view
    (0, $18Jwm.createChart)(dataLuminosity, "Lightness", "Swatches", "#detailLightnessChart", yMin, yMax, true, undefined, undefined, bool);
}
$7ea7fc020a95ce10$exports = {
    createRatioChart: $7ea7fc020a95ce10$var$createRatioChart,
    createLuminosityChart: $7ea7fc020a95ce10$var$createLuminosityChart
};



var $4O58B = parcelRequire("4O58B");
var $0a05a28c60be444f$exports = {};
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
var $doFvi = parcelRequire("doFvi");

var $hHLLK = parcelRequire("hHLLK");

var $6A7nx = parcelRequire("6A7nx");

var $47sY3 = parcelRequire("47sY3");

var $gv7Pp = parcelRequire("gv7Pp");

var $6Ufyd = parcelRequire("6Ufyd");
(0, (/*@__PURE__*/$parcel$interopDefault($47sY3))).registerLanguage("javascript", (0, (/*@__PURE__*/$parcel$interopDefault($gv7Pp))));
(0, (/*@__PURE__*/$parcel$interopDefault($47sY3))).registerLanguage("css", (0, (/*@__PURE__*/$parcel$interopDefault($6Ufyd))));
const $0a05a28c60be444f$var$outputFormatPicker = document.getElementById("colorOutputFormat");
function $0a05a28c60be444f$var$createOutputParameters() {
    const outputFormat = $0a05a28c60be444f$var$outputFormatPicker.value;
    const update = Promise.resolve((0, $doFvi._theme).output = outputFormat);
    update.then(()=>{
        $0a05a28c60be444f$var$createJSOutput();
        $0a05a28c60be444f$var$createCSSOutput();
        $0a05a28c60be444f$var$createTokensOutput();
        // Reset to hex so all other functions of the UI continue to work.
        // Otherwise CSS Module 4 formatted colors won't be parsed by Chroma.js
        (0, $doFvi._theme).output = "HEX";
    });
}
function $0a05a28c60be444f$var$createJSOutput() {
    let paramsOutput = document.getElementById("themeJSParams");
    let themeName = (0, $hHLLK.getThemeName)();
    if (!themeName) themeName = "myTheme";
    let colors = (0, $doFvi._theme).colors;
    let colorNames = (0, $hHLLK.getAllColorNames)();
    let colorDeclarations = [];
    for(let i = 0; i < colors.length; i++){
        let thisColor = colors[i];
        let colorString = `let ${(0, $6A7nx.camelCase)(thisColor.name)} = new Leo.Color({
  name: "${thisColor.name}",
  colorKeys: [${thisColor.colorKeys.map((c)=>`'${c}'`)}],
  ratios: [${thisColor.ratios}],
  colorspace: "${thisColor.colorspace}",
  smooth: ${thisColor.smooth}
});`;
        colorDeclarations.push(colorString);
    }
    const joinedDeclarations = colorDeclarations.join(`\n\n`);
    let paramOutputString = `${joinedDeclarations}

let ${themeName.replace(/\s/g, "")} = new Leo.Theme({
  colors: [${colorNames.map((n)=>(0, $6A7nx.camelCase)(n))}],
  backgroundColor: ${(0, $6A7nx.camelCase)((0, $doFvi._theme).backgroundColor.name)},
  lightness: ${(0, $doFvi._theme).lightness},
  contrast: ${(0, $doFvi._theme).contrast},
  saturation: ${(0, $doFvi._theme).saturation},
  output: "${(0, $doFvi._theme).output}"
  formula: "${(0, $doFvi._theme).formula}"
});`;
    const highlightedCode = (0, (/*@__PURE__*/$parcel$interopDefault($47sY3))).highlight(paramOutputString, {
        language: "javascript"
    }).value;
    paramsOutput.innerHTML = highlightedCode;
}
function $0a05a28c60be444f$var$createCSSOutput() {
    let themeName = (0, $hHLLK.getThemeName)();
    let themeCssClass = `.${themeName.replace(/\s/g, "")}`;
    if (!themeName) themeCssClass = ":root";
    let paramsOutput = document.getElementById("themeCSSParams");
    let contrastPairs = (0, $doFvi._theme).contrastColorPairs;
    let declarations = [];
    for (const [key, value] of Object.entries(contrastPairs))declarations.push(`  --${key}: ${value};`);
    const joinedDeclarations = declarations.join(`\n`);
    let paramOutputString = `${themeCssClass} {
${joinedDeclarations}
}`;
    const highlightedCode = (0, (/*@__PURE__*/$parcel$interopDefault($47sY3))).highlight(paramOutputString, {
        language: "css"
    }).value;
    paramsOutput.innerHTML = highlightedCode;
}
function $0a05a28c60be444f$var$createTokensOutput() {
    let paramsOutput = document.getElementById("themeTokensParams");
    let themeName = (0, $hHLLK.getThemeName)();
    let themeObj = {};
    let contrastText = (0, $doFvi._theme).contrast != 1 ? `, contrast of ${(0, $doFvi._theme).contrast * 100}%` : "";
    let saturationText = (0, $doFvi._theme).saturation != 100 ? `, saturation of ${(0, $doFvi._theme).saturation}%` : "";
    themeObj["description"] = `Color theme tokens at lightness of ${(0, $doFvi._theme).lightness}%${contrastText}${saturationText}`;
    const textLowContrast = "Do not use for UI elements or text.";
    const textLarge = "Color can be used for UI elements or large text.";
    const textSmall = "Color can be used for small text.";
    let contrastColors = (0, $doFvi._theme).contrastColors;
    let backgroundColor = (0, $doFvi._theme).contrastColors[0].background;
    let backgroundColorObj = {
        value: backgroundColor,
        type: "color",
        description: `UI background color. All color contrasts evaluated and generated against this color.`
    };
    themeObj["Background"] = backgroundColorObj;
    let formulaString = (0, $doFvi._theme).formula === "wcag2" ? "WCAG 2.x (relative luminance)" : "WCAG 3 (APCA)";
    let largeText = (0, $doFvi._theme).formula === "wcag3" ? 60 : 3;
    let smallText = (0, $doFvi._theme).formula === "wcag3" ? 75 : 4.5;
    for(let i = 1; i < contrastColors.length; i++){
        let thisColor = contrastColors[i];
        for(let j = 0; j < thisColor.values.length; j++){
            let color = thisColor.values[j];
            let descriptionText = color.contrast < largeText ? textLowContrast : color.contrast >= largeText && color.contrast < smallText ? textLarge : textSmall;
            let colorObj = {
                value: color.value,
                type: "color",
                description: `${descriptionText} ${formulaString} contrast is ${color.contrast}:1 against background ${backgroundColor}`
            };
            themeObj[color.name] = colorObj;
        }
    }
    let tokenObj = {
        [themeName]: themeObj
    };
    const highlightedCode = (0, (/*@__PURE__*/$parcel$interopDefault($47sY3))).highlight(JSON.stringify(tokenObj, null, 2), {
        language: "javascript"
    }).value;
    paramsOutput.innerHTML = highlightedCode;
}
$0a05a28c60be444f$var$outputFormatPicker.addEventListener("change", $0a05a28c60be444f$var$createOutputParameters);
$0a05a28c60be444f$var$createOutputParameters();
$0a05a28c60be444f$exports = {
    createOutputParameters: $0a05a28c60be444f$var$createOutputParameters
};



var $6A7nx = parcelRequire("6A7nx");

var $jpWZ9 = parcelRequire("jpWZ9");

var $gv7Pp = parcelRequire("gv7Pp");
(0, (/*@__PURE__*/$parcel$interopDefault($47sY3))).registerLanguage("javascript", (0, (/*@__PURE__*/$parcel$interopDefault($gv7Pp))));
function $860250b19110ee55$var$themeUpdate() {
    (0, $2d53cd9ea854a169$exports.createOutputColors)();
    (0, $0a05a28c60be444f$exports.createOutputParameters)();
    let chartRatios = Promise.resolve((0, $hHLLK.getThemeContrastRatios)());
    chartRatios.then(function(resolve) {
        (0, $7ea7fc020a95ce10$exports.createRatioChart)(resolve);
    });
    // Create dots for color wheel
    let colorWheelModeDropdown = document.getElementById("chartsMode");
    let colorWheelMode = colorWheelModeDropdown.value;
    (0, $2jobM.createPaletteCharts)(colorWheelMode);
    (0, $4O58B.updateColorDots)(null, "theme");
    (0, $jpWZ9.create3dModel)("paletteModelWrapper", (0, $doFvi._theme).colors, colorWheelMode);
    let chartLuminosities = Promise.resolve((0, $hHLLK.getLuminosities)());
    chartLuminosities.then(function(resolve) {
        (0, $7ea7fc020a95ce10$exports.createLuminosityChart)(resolve);
    });
}
function $860250b19110ee55$var$themeUpdateParams() {
    $860250b19110ee55$var$themeUpdate();
}
// Toggle disabled state of adaptive theme controls
function $860250b19110ee55$var$toggleControls() {
    let items = document.getElementsByClassName("themeColor_item");
    let brightnessSliderWrap = document.getElementById("brightnessSliderWrapper");
    let brightnessSlider = document.getElementById("themeBrightnessSlider");
    let contrastSliderWrap = document.getElementById("contrastSliderWrapper");
    let contrastSlider = document.getElementById("themeContrastSlider");
    let saturationSliderWrap = document.getElementById("saturationSliderWrapper");
    let saturationSlider = document.getElementById("themeSaturationSlider");
    let themeBaseLabel = document.getElementById("themeBaseLabel");
    let baseSelect = document.getElementById("themeBase");
    if (items.length > 0) {
        // if there are items, enable fields
        brightnessSliderWrap.classList.remove("is-disabled");
        contrastSliderWrap.classList.remove("is-disabled");
        saturationSliderWrap.classList.remove("is-disabled");
        themeBaseLabel.classList.remove("is-disabled");
        baseSelect.classList.remove("is-disabled");
        brightnessSlider.disabled = false;
        contrastSlider.disabled = false;
        saturationSlider.disabled = false;
        baseSelect.disabled = false;
    } else if (items.length == 0) {
        // disable fields
        brightnessSliderWrap.classList.add("is-disabled");
        contrastSliderWrap.classList.add("is-disabled");
        saturationSliderWrap.classList.add("is-disabled");
        themeBaseLabel.classList.add("is-disabled");
        baseSelect.classList.add("is-disabled");
        brightnessSlider.disabled = true;
        contrastSlider.disabled = true;
        saturationSlider.disabled = true;
        baseSelect.disabled = true;
        baseSelect.value = " ";
    }
}
// Update theme when theme name is changed
document.getElementById("themeNameInput").addEventListener("change", (0, $6A7nx.throttle)($860250b19110ee55$var$themeUpdateParams, 50));
// Update theme when base color selection is changed
document.getElementById("themeBase").addEventListener("input", (0, $6A7nx.throttle)($860250b19110ee55$var$themeUpdateParams, 50));
window.themeUpdate = $860250b19110ee55$var$themeUpdate;
window.themeUpdateParams = $860250b19110ee55$var$themeUpdateParams;
$860250b19110ee55$exports = {
    themeUpdate: $860250b19110ee55$var$themeUpdate,
    themeUpdateParams: $860250b19110ee55$var$themeUpdateParams,
    toggleControls: $860250b19110ee55$var$toggleControls
};


var $392150148bbf3b8e$exports = {};
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
var $hHLLK = parcelRequire("hHLLK");



var $doFvi = parcelRequire("doFvi");
// Create options for colors to use as base scale
function $392150148bbf3b8e$var$baseScaleOptions() {
    let baseSelect = document.getElementById("themeBase");
    let colorNames = (0, $hHLLK.getAllColorNames)();
    // Remove all existing options and start from scratch
    var i, L = baseSelect.options.length - 1;
    for(i = L; i >= 0; i--)baseSelect.remove(i);
    let opts = {};
    for(let i = 0; i < colorNames.length; i++){
        let colorname = colorNames[i];
        opts[colorname] = colorname;
    }
    for(let index in opts)baseSelect.options[baseSelect.options.length] = new Option(opts[index], index);
}
let $392150148bbf3b8e$var$baseSelect = document.getElementById("themeBase");
$392150148bbf3b8e$var$baseSelect.addEventListener("change", function(e) {
    let colorName = `${e.target.value}`;
    let colorClass = (0, $hHLLK.getColorClassByName)(colorName);
    (0, $doFvi._theme).backgroundColor = colorClass;
    (0, $2d53cd9ea854a169$exports.createOutputColors)();
    (0, $0a05a28c60be444f$exports.createOutputParameters)();
});
$392150148bbf3b8e$exports = {
    baseScaleOptions: $392150148bbf3b8e$var$baseScaleOptions
};


var $fc64f11466e0b2d2$exports = {};
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
var $hHLLK = parcelRequire("hHLLK");
var $bf295db41cd4ddea$exports = {};
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

var $6A7nx = parcelRequire("6A7nx");

var $7yS3p = parcelRequire("7yS3p");

var $4O58B = parcelRequire("4O58B");


var $hHLLK = parcelRequire("hHLLK");

var $jpWZ9 = parcelRequire("jpWZ9");

var $doFvi = parcelRequire("doFvi");

function $bf295db41cd4ddea$var$addKeyColorInput(c, thisId = this.id, currentColorName, index) {
    let parent = thisId.replace("_addKeyColor", "");
    let destId = parent.concat("_keyColors");
    let dest = document.getElementById(destId);
    let div = document.createElement("div");
    let randId = (0, $6A7nx.randomId)();
    div.className = "keyColor";
    div.id = randId + "-item";
    let sw = document.createElement("input");
    sw.type = "color";
    sw.value = c;
    const currentColorIndex = (0, $doFvi._theme).colors.map((e)=>e.name).indexOf(currentColorName);
    const chartsModeSelect = document.getElementById("chartsMode");
    const currentColor = (0, $doFvi._theme).colors[currentColorIndex];
    sw.oninput = (e)=>{
        // Replace current indexed value from color keys with new value from color input field
        let currentKeys = currentColor.colorKeys;
        let currentColorName = (0, $doFvi._theme).colors[currentColorIndex].name;
        currentKeys.splice(index, 1, e.target.value);
        (0, $doFvi._theme).updateColor = {
            color: currentColorName,
            colorKeys: currentKeys
        };
        (0, $6A7nx.throttle)((0, $7yS3p.updateRamps)(currentColor, parent), 10);
        (0, $6A7nx.throttle)((0, $2d53cd9ea854a169$exports.createDetailOutputColors)(currentColorName), 10);
        setTimeout(function() {
            (0, $4O58B.updateColorDots)(chartsModeSelect.value, "colorScale", currentKeys, parent);
        }, 500);
    };
    const updateModel = ()=>{
        (0, $jpWZ9.create3dModel)("tabModelContent", [
            currentColor
        ], chartsModeSelect.value);
    };
    sw.addEventListener("input", (0, $6A7nx.throttle)(updateModel, 50));
    sw.className = "keyColor-Item";
    sw.id = randId + "-sw";
    sw.style.backgroundColor = c;
    let button = document.createElement("button");
    button.className = "spectrum-ActionButton spectrum-ActionButton--sizeM";
    button.innerHTML = `
  <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Delete">
    <use xlink:href="#spectrum-icon-18-Delete" />
  </svg>`;
    button.addEventListener("click", function(e) {
        // Remove current indexed value from color keys
        let currentColor = (0, $doFvi._theme).colors[currentColorIndex];
        let currentKeys = currentColor.colorKeys;
        currentKeys.splice(index, 1);
        (0, $doFvi._theme).updateColor = {
            color: currentColorName,
            colorKeys: currentKeys
        };
        (0, $7yS3p.updateRamps)(currentColor, parent);
        let contentArea = document.getElementById("colorDetails");
        let configPanel = document.getElementById("colorConfigPanel");
        contentArea.innerHTML = " ";
        contentArea.style.display = "none";
        configPanel.innerHTML = " ";
        configPanel.style.display = "none";
        let triggerId = parent.concat("-toggleConfig");
        let trigger = document.getElementById(triggerId);
        trigger.click();
        (0, $2d53cd9ea854a169$exports.createDetailOutputColors)(currentColor.name);
    });
    div.appendChild(sw);
    div.appendChild(button);
    dest.appendChild(div);
}
function $bf295db41cd4ddea$var$addKeyColor(e) {
    let thisId = e.target.id;
    let parentId = thisId.replace("_addKeyColor", "");
    let currentColorNameInput = parentId.concat("_colorName2");
    let currentColorName = document.getElementById(currentColorNameInput).value;
    let currentColor = (0, $doFvi._theme).colors.filter((entry)=>{
        return entry.name === currentColorName;
    });
    currentColor = currentColor[0];
    let currentKeys = [
        ...currentColor.colorKeys
    ];
    let lastIndex = currentColor.colorKeys.length;
    if (!lastIndex) lastIndex = 0;
    let lastColor = lastIndex > 0 ? (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).hsluv(currentColor.colorKeys[lastIndex - 1]) : (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).hsluv(currentColor.colorKeys[0]);
    let lastColorLightness = lastColor.v;
    let fCtintHalf = (100 - lastColorLightness) / 3 + lastColorLightness;
    let fCshadeHalf = lastColorLightness / 2;
    let c = lastColorLightness >= 50 ? (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).hsluv(lastColor.l, lastColor.u, fCshadeHalf) : (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).hsluv(lastColor.l, lastColor.u, fCtintHalf);
    c = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).rgb(c).formatHex();
    currentKeys.push(c);
    // Update color class arguments via the theme class
    (0, $doFvi._theme).updateColor = {
        color: currentColorName,
        colorKeys: currentKeys
    };
    $bf295db41cd4ddea$var$addKeyColorInput(c, thisId, currentColorName, lastIndex);
    // Update gradient
    (0, $7yS3p.updateRamps)(currentColor, parentId);
    (0, $4O58B.updateColorDots)(null, "theme");
    (0, $2d53cd9ea854a169$exports.createDetailOutputColors)(currentColorName);
}
function $bf295db41cd4ddea$var$deleteColor(e) {
    var id = e.target.parentNode.id;
    var self = document.getElementById(id);
    self.remove();
    (0, $860250b19110ee55$exports.themeUpdateParams)();
}
function $bf295db41cd4ddea$var$clearAllColors(e) {
    let targetId = e.target.id;
    let parentId = targetId.replace("_clearAllColors", "");
    let keyColorsId = targetId.replace("_clearAllColors", "_keyColors");
    document.getElementById(keyColorsId).innerHTML = " ";
    const currentColor = (0, $hHLLK.getColorClassById)(parentId);
    $bf295db41cd4ddea$var$addKeyColorInput("#000000", parentId, currentColor.name, 0);
    (0, $doFvi._theme).updateColor = {
        color: currentColor.name,
        colorKeys: [
            "#000000"
        ]
    };
    (0, $7yS3p.updateRamps)(currentColor, parentId);
    (0, $4O58B.updateColorDots)(null, "theme");
    (0, $860250b19110ee55$exports.themeUpdateParams)();
}
window.clearAllColors = $bf295db41cd4ddea$var$clearAllColors;
$bf295db41cd4ddea$exports = {
    addKeyColor: $bf295db41cd4ddea$var$addKeyColor,
    deleteColor: $bf295db41cd4ddea$var$deleteColor,
    addKeyColorInput: $bf295db41cd4ddea$var$addKeyColorInput,
    clearAllColors: $bf295db41cd4ddea$var$clearAllColors
};


var $e3fcc4aed6d6ba45$exports = {};
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


var $hHLLK = parcelRequire("hHLLK");

var $7yS3p = parcelRequire("7yS3p");

var $4O58B = parcelRequire("4O58B");
function $e3fcc4aed6d6ba45$var$addBulk(e) {
    let id = e.target.parentNode.parentNode.parentNode.id.replace("-themeColor_configs", "");
    let button = document.getElementById("bulkAddButton");
    button.addEventListener("click", $e3fcc4aed6d6ba45$var$bulkItemColorInput);
    let dialog = document.getElementsByClassName("addBulkColorDialog");
    for(let i = 0; i < dialog.length; i++){
        let colorName = (0, $hHLLK.getColorClassById)(id).name;
        document.getElementById("addBulkDialog_ScaleName").innerHTML = colorName;
        dialog[i].classList.add("is-open");
        dialog[i].id = id.concat("_dialog");
    }
    document.getElementById("dialogOverlay").style.display = "block";
}
function $e3fcc4aed6d6ba45$var$cancelBulk() {
    let dialog = document.getElementsByClassName("addBulkColorDialog");
    for(let i = 0; i < dialog.length; i++){
        dialog[i].classList.remove("is-open");
        dialog[i].id = " ";
    }
    document.getElementById("dialogOverlay").style.display = "none";
}
function $e3fcc4aed6d6ba45$var$bulkItemColorInput(e) {
    let id = e.target.parentNode.parentNode.parentNode.id;
    let itemId = id.replace("_dialog", "");
    const currentColor = (0, $hHLLK.getColorClassById)(itemId);
    const currentColorName = currentColor.name;
    const currentKeys = currentColor.colorKeys;
    let bulkInputs = document.getElementById("bulkColors");
    let bulkValues = bulkInputs.value.replace(/\r\n/g, "\n").replace(/[,\/]/g, "\n").replace(" ", "").replace(/['\/]/g, "").replace(/["\/]/g, "").replace(" ", "").split("\n");
    for(let i = 0; i < bulkValues.length; i++)if (!bulkValues[i].startsWith("#")) bulkValues[i] = "#" + bulkValues[i];
    let newKeys = [
        ...currentKeys
    ];
    // add key colors for each input
    for(let i = 0; i < bulkValues.length; i++){
        let colorVal = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).color(bulkValues[i]).formatHex();
        (0, $bf295db41cd4ddea$exports.addKeyColorInput)(colorVal, itemId);
        newKeys.push(colorVal);
    }
    _theme.updateColor = {
        color: currentColorName,
        colorKeys: newKeys
    };
    // Update gradient
    (0, $7yS3p.updateRamps)(currentColor, itemId);
    (0, $4O58B.updateColorDots)(null, "theme");
    // Hide dialog
    $e3fcc4aed6d6ba45$var$cancelBulk();
    // Run colorinput
    themeUpdateParams();
    // clear inputs on close
    bulkInputs.value = " ";
}
window.addBulk = $e3fcc4aed6d6ba45$var$addBulk;
window.cancelBulk = $e3fcc4aed6d6ba45$var$cancelBulk;
window.bulkItemColorInput = $e3fcc4aed6d6ba45$var$bulkItemColorInput;
$e3fcc4aed6d6ba45$exports = {
    addBulk: $e3fcc4aed6d6ba45$var$addBulk,
    bulkItemColorInput: $e3fcc4aed6d6ba45$var$bulkItemColorInput,
    cancelBulk: $e3fcc4aed6d6ba45$var$cancelBulk
};



var $6A7nx = parcelRequire("6A7nx");


var $7yS3p = parcelRequire("7yS3p");

var $2DjVK = parcelRequire("2DjVK");

var $fVnLK = parcelRequire("fVnLK");


var $4r4R6 = parcelRequire("4r4R6");


var $doFvi = parcelRequire("doFvi");

var $i1YNd = parcelRequire("i1YNd");

var $jpWZ9 = parcelRequire("jpWZ9");

var $4O58B = parcelRequire("4O58B");

function $fc64f11466e0b2d2$var$showColorDetails(e, colorId) {
    let panelOpen = true;
    let element = e.target.id;
    const chartsModeSelect = document.getElementById("chartsMode");
    const id = colorId ? colorId : element.replace("-toggleConfig", "");
    let triggeredColorNameInputId = id.concat("_colorName");
    let triggeredColorNameInput = document.getElementById(triggeredColorNameInputId);
    let triggeredColorName = triggeredColorNameInput.value;
    const lineTypeSelect = document.getElementById("chartLineType");
    const lineType = lineTypeSelect.value;
    let colorData = (0, $hHLLK.getColorClassByName)(triggeredColorName);
    // Clear main container
    let contentArea = document.getElementById("colorDetails");
    contentArea.style.display = "flex";
    // Clear config panel, just to be safe
    let configPanel = document.getElementById("colorConfigPanel");
    configPanel.innerHTML = " ";
    configPanel.style.display = "flex";
    let configPanelTopWrapper = document.createElement("div");
    configPanelTopWrapper.className = "spectrum-Panel-Item spectrum-Panel-Item--noPadding";
    let configPanelItem = document.createElement("div");
    configPanelItem.className = "spectrum-Panel-Item spectrum-Form--row";
    // create unique ID for color object
    let thisId = id;
    let wrapper = contentArea;
    // Create back button
    let panelHeader = document.createElement("div");
    panelHeader.className = "spectrum-Panel-Item";
    let backButton = document.createElement("button");
    backButton.className = "spectrum-Button spectrum-Button--sizeM spectrum-Button--cta spectrum-ButtonGroup-item";
    backButton.title = "Save and go back";
    backButton.innerHTML = `Save and go back`;
    backButton.onclick = ()=>{
        contentArea.innerHTML = " ";
        contentArea.style.display = "none";
        configPanel.innerHTML = " ";
        configPanel.style.display = "none";
        panelOpen = false;
        (0, $860250b19110ee55$exports.themeUpdateParams)();
    };
    let headerButtonGroup = document.createElement("div");
    headerButtonGroup.className = "spectrum-ButtonGroup";
    headerButtonGroup.appendChild(backButton);
    panelHeader.appendChild(headerButtonGroup);
    // Create gradient
    let gradient = document.createElement("div");
    gradient.className = "themeColor_gradient";
    let gradientId = thisId.concat("_gradient");
    gradient.id = gradientId;
    // Create first panel item
    let panelColorName = document.createElement("div");
    panelColorName.className = "spectrum-Panel-Item";
    // Create form container
    let inputs = document.createElement("div");
    inputs.className = `spectrum-Form spectrum-Form--row themeColor_configs`;
    inputs.id = `${thisId}-themeColor_configs`;
    let interpInputs = document.createElement("div");
    interpInputs.className = `spectrum-Form spectrum-Form--row`;
    interpInputs.id = `${thisId}-themeColor_keyColors`;
    // Field label
    let colorNameLabel = document.createElement("label");
    colorNameLabel.className = "spectrum-Fieldlabel spectrum-Fieldlabel--sizeM";
    colorNameLabel.innerHTML = "Color name";
    // Color Name Input
    let colorName = document.createElement("div");
    colorName.className = "spectrum-Form-item";
    let colorNameInput = document.createElement("input");
    let colorNameWrapper = document.createElement("div");
    colorNameWrapper.className = "spectrum-Textfield spectrum-Textfield--sizeM";
    colorNameInput.type = "text";
    colorNameInput.className = "spectrum-Textfield-input colorNameInput";
    colorNameInput.id = thisId.concat("_colorName2");
    colorNameInput.name = thisId.concat("_colorName2");
    colorNameInput.value = colorData.name;
    let originalName = colorData.name;
    // colorNameInput.oninput = throttle(themeUpdateParams, 10);
    colorNameInput.onchange = (e)=>{
        let paletteNameInput = document.getElementById(thisId.concat("_colorName"));
        const newName = `${e.target.value}`;
        paletteNameInput.value = newName;
        (0, $doFvi._theme).updateColor = {
            color: originalName,
            name: newName
        };
        (0, $392150148bbf3b8e$exports.baseScaleOptions)();
        originalName = newName;
    };
    colorNameWrapper.appendChild(colorNameInput);
    colorName.appendChild(colorNameLabel);
    colorName.appendChild(colorNameWrapper);
    // Create second panel item
    let panelKeyColors = document.createElement("div");
    panelKeyColors.className = "spectrum-Panel-Item";
    // Key Color Input
    let keyColors = document.createElement("div");
    keyColors.className = "themeColor_subheading";
    let keyColorsLabel = document.createElement("h4");
    keyColorsLabel.className = "spectrum-Heading spectrum-Heading--sizeXXS";
    keyColorsLabel.for = thisId.concat("_keyColors");
    let keyColorsInput = document.createElement("div");
    keyColorsInput.className = "keyColorsWrapper";
    let keyColorsId = thisId.concat("_keyColors");
    keyColorsInput.id = keyColorsId;
    keyColorsLabel.innerHTML = "Key colors";
    keyColors.appendChild(keyColorsLabel);
    // Key Colors Actions
    let addColors = document.createElement("div");
    addColors.className = "keyColorActions";
    let addButton = document.createElement("button");
    addButton.className = "spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionButton--quiet";
    let buttonId = thisId.concat("_addKeyColor");
    addButton.id = buttonId;
    addButton.title = "Add key color";
    addButton.addEventListener("click", (0, $bf295db41cd4ddea$exports.addKeyColor));
    addButton.innerHTML = `
  <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Add">
    <use xlink:href="#spectrum-icon-18-Add" />
  </svg>
  `;
    let bulkButton = document.createElement("button");
    bulkButton.className = "spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionButton--quiet";
    let bulkId = thisId.concat("_addBulk");
    bulkButton.title = "Add bulk key colors";
    bulkButton.id = bulkId;
    bulkButton.addEventListener("click", (0, $e3fcc4aed6d6ba45$exports.addBulk));
    bulkButton.innerHTML = `
  <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Add">
    <use xlink:href="#spectrum-icon-18-BoxAdd" />
  </svg>
  `;
    let clearKeyColorsButton = document.createElement("button");
    clearKeyColorsButton.className = "spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionButton--quiet";
    let clearColorsId = thisId.concat("_clearAllColors");
    clearKeyColorsButton.title = "Clear all key colors";
    clearKeyColorsButton.id = clearColorsId;
    clearKeyColorsButton.addEventListener("click", (0, $bf295db41cd4ddea$exports.clearAllColors));
    clearKeyColorsButton.innerHTML = `
  <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Add">
    <use xlink:href="#spectrum-icon-18-CloseCircle" />
  </svg>
  `;
    addColors.appendChild(clearKeyColorsButton);
    addColors.appendChild(addButton);
    addColors.appendChild(bulkButton);
    keyColors.appendChild(addColors);
    // Create third panel item
    let panelInterpolationMode = document.createElement("div");
    panelInterpolationMode.className = "spectrum-Panel-Item";
    let panelInterpTitle = document.createElement("span");
    panelInterpTitle.className = "spectrum-Heading spectrum-Heading--sizeXXS spectrum-Panel-Item-Title";
    panelInterpTitle.innerHTML = "Interpolation";
    // Interpolation mode
    let interp = document.createElement("div");
    interp.className = "spectrum-Form-item spectrum-Form-item--row";
    let interpLabel = document.createElement("label");
    interpLabel.className = "spectrum-FieldLabel spectrum-Fieldlabel--sizeM spectrum-FieldLabel--left";
    interpLabel.for = thisId.concat("_mode");
    let interpLabelText = "Color space";
    let interpSelect = document.createElement("select");
    interpSelect.className = "spectrum-Picker spectrum-Picker--sizeM pickerMode";
    interpSelect.id = thisId.concat("_mode");
    interpSelect.name = thisId.concat("_mode");
    interpSelect.oninput = (0, $6A7nx.throttle)((0, $860250b19110ee55$exports.themeUpdateParams), 20);
    interpSelect.addEventListener("change", (e)=>{
        (0, $doFvi._theme).updateColor = {
            color: colorData.name,
            colorspace: e.target.value
        };
        (0, $7yS3p.updateRamps)(colorData, thisId);
        (0, $4O58B.updateColorDots)(chartsModeSelect.value, scaleType, colorData.colorKeys, id);
        (0, $jpWZ9.create3dModel)("tabModelContent", colorData, chartsModeSelect.value);
        (0, $2d53cd9ea854a169$exports.createDetailOutputColors)(colorData.name);
    });
    let interpDropdownIcon = document.createElement("span");
    interpDropdownIcon.className = "spectrum-Picker-iconWrapper";
    interpDropdownIcon.innerHTML = `
  <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="spectrum-Picker-icon spectrum-UIIcon-ChevronDownMedium spectrum-Picker-icon">
    <use xlink:href="#spectrum-css-icon-ChevronDownMedium"></use>
  </svg>`;
    interpLabel.innerHTML = interpLabelText;
    interpSelect.appendChild(interpDropdownIcon);
    interp.appendChild(interpLabel);
    interp.appendChild(interpSelect);
    // Interpolation options
    interpSelect.options.length = 0;
    let opts = {
        CAM02: "CAM02",
        CAM02p: "CAM02 (Ch)",
        LCH: "Lch",
        LAB: "Lab",
        HSL: "HSL",
        HSLuv: "HSLuv",
        HSV: "HSV",
        RGB: "RGB",
        OKLAB: "OKLAB",
        OKLCH: "OKLCH"
    };
    for(let index in opts)interpSelect.options[interpSelect.options.length] = new Option(opts[index], index);
    interpSelect.value = colorData.colorspace;
    // Smoothing
    let smoothFormItem = document.createElement("div");
    smoothFormItem.className = "spectrum-Form-item";
    let smoothWrapper = document.createElement("div");
    smoothWrapper.className = "spectrum-Switch";
    let smoothInput = document.createElement("input");
    smoothInput.type = "checkbox";
    smoothInput.className = "spectrum-Switch-input";
    smoothInput.id = thisId.concat("_smooth");
    smoothInput.checked = colorData.smooth;
    smoothInput.oninput = (0, $6A7nx.throttle)((0, $860250b19110ee55$exports.themeUpdateParams), 20);
    smoothInput.addEventListener("input", (e)=>{
        const checked = e.target.checked;
        const boolean = checked ? true : "false";
        (0, $doFvi._theme).updateColor = {
            color: colorData.name,
            smooth: boolean
        };
        const colorData2 = (0, $hHLLK.getColorClassById)(id);
        const chartModeSelect = document.getElementById("chartsMode");
        const chartsMode = chartModeSelect.value;
        const colors = colorData2.backgroundColorScale;
        (0, $7yS3p.updateRamps)(colorData2, thisId);
        (0, $4O58B.updateColorDots)(chartsModeSelect.value, scaleType, colorData.colorKeys, id);
        (0, $jpWZ9.create3dModel)("tabModelContent", colorData2, chartsModeSelect.value);
        (0, $2d53cd9ea854a169$exports.createDetailOutputColors)(colorData2.name);
    });
    let smoothSwitch = document.createElement("span");
    smoothSwitch.className = "spectrum-Switch-switch";
    let smoothLabel = document.createElement("label");
    smoothLabel.className = "spectrum-Switch-label";
    smoothLabel.htmlFor = thisId.concat("_smooth");
    smoothLabel.innerHTML = "Smooth";
    smoothWrapper.appendChild(smoothInput);
    smoothWrapper.appendChild(smoothSwitch);
    smoothWrapper.appendChild(smoothLabel);
    smoothFormItem.appendChild(smoothWrapper);
    // Add detail description of interpolation
    let interpDetails = document.createElement("p");
    interpDetails.className = "spectrum-Body spectrum-Body--sizeXS";
    interpDetails.style.marginBottom = "12px";
    interpDetails.innerHTML = "Color scales intersect each of your key colors by a straight line in color space. Different color spaces will change the appearance of your scale.";
    let downloadGradient = document.createElement("button");
    downloadGradient.className = "spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionButton--quiet";
    downloadGradient.title = "Download SVG gradient";
    downloadGradient.id = thisId.concat("_downloadGradient");
    downloadGradient.innerHTML = `<svg class="spectrum-Icon spectrum-Icon--sizeM" focusable="false" aria-hidden="true" aria-label="Download">
  <use xlink:href="#spectrum-icon-18-Download"></use>
</svg>
<span class="spectrum-ActionButton-label">Download SVG gradient</span>`;
    downloadGradient.addEventListener("click", (e)=>{
        (0, $i1YNd.downloadSVGgradient)(colorData.backgroundColorScale, colorData.colorspace, colorData.name);
    });
    let panelExport = document.createElement("div");
    panelExport.className = "spectrum-Panel-Item";
    let panelExportTitle = document.createElement("span");
    panelExportTitle.className = "spectrum-Heading spectrum-Heading--sizeXXS spectrum-Panel-Item-Title";
    panelExportTitle.innerHTML = "Export color scale";
    panelExport.appendChild(panelExportTitle);
    panelExport.appendChild(downloadGradient);
    // Actions
    let actions = document.createElement("div");
    actions.className = "spectrum-ButtonGroup";
    let deleteColor = document.createElement("button");
    deleteColor.className = "spectrum-Button spectrum-Button--sizeM spectrum-Button--negative";
    deleteColor.title = "Delete color";
    deleteColor.id = thisId.concat("_delete");
    deleteColor.innerHTML = "Delete color";
    let bottomPanel = document.createElement("div");
    bottomPanel.className = "spectrum-Panel-Item spectrum-Panel-Item--noPadding";
    // Create color wheel for the scale
    const scaleType = "colorScale";
    let colorWheelPanel = document.createElement("div");
    colorWheelPanel.className = "spectrum-Panel-Item";
    let colorWheelWrapper = document.createElement("div");
    colorWheelWrapper.id = scaleType.concat("ColorWheelWrapper");
    colorWheelWrapper.className = "tab-ColorWheel";
    let colorWheel = document.createElement("div");
    colorWheel.id = scaleType.concat("ColorWheel");
    let colorWheelPaths = document.createElement("div");
    colorWheelPaths.id = scaleType.concat("ColorWheelPaths");
    colorWheelPaths.className = "polarPathsWrapper";
    colorWheel.appendChild(colorWheelPaths);
    colorWheelWrapper.appendChild(colorWheel);
    // colorWheelPanel.appendChild(colorWheelWrapper);
    let deletePanel = document.createElement("div");
    deletePanel.className = "spectrum-Panel-Item spectrum-ButtonGroup";
    deletePanel.appendChild(deleteColor);
    colorName.appendChild(actions);
    /**
   *
   *  Now we build the main area of the UI
   *
   */ // Title
    let title = document.createElement("h2");
    title.className = "spectrum-Typography spectrum-Heading spectrum-Heading--sizeXS";
    title.innerHTML = "Color scale";
    // Tabs
    let tabsWrapper = document.createElement("div");
    tabsWrapper.className = "spectrum-Detail-Tabs";
    let tabs = document.createElement("div");
    tabs.className = "spectrum-Tabs spectrum-Tabs--horizontal spectrum-Tabs--quiet";
    let tabItem1 = document.createElement("div");
    tabItem1.className = "spectrum-Tabs-item detail-Tabs-item";
    tabItem1.id = "tabInterpCharts";
    let tabItem1Label = document.createElement("label");
    tabItem1Label.className = "spectrum-Tabs-itemLabel";
    tabItem1Label.innerHTML = "Color charts";
    let tabItem2 = document.createElement("div");
    tabItem2.className = "spectrum-Tabs-item detail-Tabs-item";
    tabItem2.id = "tabLightness";
    let tabItem2Label = document.createElement("label");
    tabItem2Label.className = "spectrum-Tabs-itemLabel";
    tabItem2Label.innerHTML = "Lightness stops";
    let tabItem3 = document.createElement("div");
    tabItem3.className = "spectrum-Tabs-item detail-Tabs-item";
    tabItem3.id = "tabModel";
    let tabItem3Label = document.createElement("label");
    tabItem3Label.className = "spectrum-Tabs-itemLabel";
    tabItem3Label.innerHTML = "3d model";
    let tabContent1 = document.createElement("div");
    tabContent1.id = "tabInterpChartsContent";
    tabContent1.className = "tabDetailContent";
    let tabContent2 = document.createElement("div");
    tabContent2.id = "tabLightnessContent";
    tabContent2.className = "tabDetailContent";
    let tabContent3 = document.createElement("div");
    tabContent3.id = "tabModelContent";
    tabContent3.className = "tabDetailContent";
    // Create charts grid (wrapper)
    let chartsGrid = document.createElement("div");
    chartsGrid.className = "paletteContrastChartsGrid";
    // Create select for chart line type
    let chartsForm = document.createElement("div");
    chartsForm.className = "spectrum-Form spectrum-Form--row";
    chartsForm.style.justifyContent = "space-between";
    // Create title
    let chartsFormTitle = document.createElement("h5");
    chartsFormTitle.className = "spectrum-Heading spectrum-Heading--sizeXXS";
    chartsFormTitle.style.width = "auto";
    chartsFormTitle.innerHTML = "Output color (ordered by contrast ascending)";
    // Create form item
    let chartsFormItem = document.createElement("div");
    chartsFormItem.className = "spectrum-Form-item spectrum-Form-item--row";
    // Create lebel
    let chartsFormLabel = document.createElement("label");
    chartsFormLabel.for = "lightnessChartLineType";
    chartsFormLabel.className = "spectrum-FieldLabel spectrum-Fieldlabel--sizeM spectrum-FieldLabel--left";
    chartsFormLabel.innerHTML = "Chart line type";
    // Create select
    let chartsSelect = document.createElement("select");
    chartsSelect.className = "spectrum-Picker spectrum-Picker--sizeM";
    chartsSelect.name = "lightnessChartLineType";
    chartsSelect.id = "lightnessChartLineType";
    let chartsSelectIcon = document.createElement("span");
    chartsSelectIcon.className = "spectrum-Picker-iconWrapper";
    chartsSelectIcon.innerHTML = `
  <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="spectrum-Picker-icon spectrum-UIIcon-ChevronDownMedium spectrum-Picker-icon">
    <use xlink:href="#spectrum-css-icon-ChevronDownMedium"></use>
  </svg>`;
    // Populate options
    chartsSelect.options.length = 0;
    let chartsSelectOpts = {
        step: "Steps",
        curve: "Curve"
    };
    for(let index in chartsSelectOpts)chartsSelect.options[chartsSelect.options.length] = new Option(chartsSelectOpts[index], index);
    chartsSelect.value = lineType;
    // Create swatch output wrapper
    let swatchWrapper = document.createElement("div");
    swatchWrapper.id = "detailJustifiedWrapper";
    let swatches = document.createElement("div");
    swatches.className = "hideSwatchLuminosity hideSwatchContrast";
    swatches.id = "detailSwatchesOutputs";
    // Create charts wrapper
    let swatchChartsWrapper = document.createElement("div");
    swatchChartsWrapper.id = "detailContrastChartsWrapper";
    // Create Contrast chart
    let contrastChartWrapper = document.createElement("div");
    let contrastChartTitle = document.createElement("h5");
    contrastChartTitle.className = "spectrum-Heading spectrum-Heading--sizeXXS";
    contrastChartTitle.innerHTML = "Contrast";
    let contrastChart = document.createElement("div");
    contrastChart.className = "panel-SubTab-Content";
    contrastChart.id = "detailContrastChart";
    let lightnessChartWrapper = document.createElement("div");
    let lightnessChartTitle = document.createElement("h5");
    lightnessChartTitle.className = "spectrum-Heading spectrum-Heading--sizeXXS";
    lightnessChartTitle.innerHTML = "Lightness";
    let lightnessChart = document.createElement("div");
    lightnessChart.className = "panel-SubTab-Content";
    lightnessChart.id = "detailLightnessChart";
    // Put the charts tab content together
    chartsSelect.appendChild(chartsSelectIcon);
    chartsFormItem.appendChild(chartsFormLabel);
    chartsFormItem.appendChild(chartsSelect);
    chartsForm.appendChild(chartsFormTitle);
    chartsForm.appendChild(chartsFormItem);
    swatchWrapper.appendChild(swatches);
    contrastChartWrapper.appendChild(contrastChartTitle);
    contrastChartWrapper.appendChild(contrastChart);
    lightnessChartWrapper.appendChild(lightnessChartTitle);
    lightnessChartWrapper.appendChild(lightnessChart);
    swatchChartsWrapper.appendChild(contrastChartWrapper);
    swatchChartsWrapper.appendChild(lightnessChartWrapper);
    chartsGrid.appendChild(chartsForm);
    chartsGrid.appendChild(swatchWrapper);
    chartsGrid.appendChild(swatchChartsWrapper);
    tabContent2.appendChild(chartsGrid);
    // Put the tabs together
    tabItem1.appendChild(tabItem1Label);
    tabItem2.appendChild(tabItem2Label);
    tabItem3.appendChild(tabItem3Label);
    tabs.appendChild(tabItem1);
    tabs.appendChild(tabItem2);
    tabs.appendChild(tabItem3);
    tabsWrapper.appendChild(tabs);
    // Put it all together
    inputs.appendChild(keyColors);
    inputs.appendChild(keyColorsInput);
    interpInputs.appendChild(interp);
    interpInputs.appendChild(smoothFormItem);
    configPanelItem.appendChild(colorName);
    panelKeyColors.appendChild(inputs);
    panelInterpolationMode.appendChild(panelInterpTitle);
    panelInterpolationMode.appendChild(interpDetails);
    panelInterpolationMode.appendChild(interpInputs);
    configPanelTopWrapper.appendChild(panelHeader);
    configPanelTopWrapper.appendChild(configPanelItem);
    configPanelTopWrapper.appendChild(panelKeyColors);
    configPanelTopWrapper.appendChild(panelInterpolationMode);
    configPanelTopWrapper.appendChild(panelExport);
    configPanel.appendChild(configPanelTopWrapper);
    bottomPanel.appendChild(deletePanel);
    configPanel.appendChild(bottomPanel);
    // Content area needs to be appended with items
    wrapper.appendChild(title);
    wrapper.appendChild(gradient);
    // Create divs for charts
    let chartsRow = document.createElement("div");
    chartsRow.className = "chartsRow";
    let chartsColLeft = document.createElement("div");
    chartsColLeft.className = "chartsColumn--left";
    let chartsColRight = document.createElement("div");
    chartsColRight.className = "chartsColumn--right";
    let chart1 = document.createElement("div");
    chart1.id = "interpolationChart";
    let chart2 = document.createElement("div");
    chart2.id = "interpolationChart2";
    let chart3 = document.createElement("div");
    chart3.id = "interpolationChart3";
    let chartRgb = document.createElement("div");
    chartRgb.id = "RGBchart";
    chartsColLeft.appendChild(colorWheelWrapper); // wheel
    chartsColLeft.appendChild(chartRgb);
    chartsColRight.appendChild(chart1);
    chartsColRight.appendChild(chart2);
    chartsColRight.appendChild(chart3);
    chartsRow.appendChild(chartsColLeft);
    chartsRow.appendChild(chartsColRight);
    tabContent1.appendChild(chartsRow);
    wrapper.appendChild(tabsWrapper);
    wrapper.appendChild(tabContent1);
    wrapper.appendChild(tabContent2);
    wrapper.appendChild(tabContent3);
    // Then run functions on the basic placeholder inputs
    let colorKeys = colorData.colorKeys;
    for(let i = 0; i < colorKeys.length; i++)(0, $bf295db41cd4ddea$exports.addKeyColorInput)(colorKeys[i], buttonId, colorData.name, i);
    let rampData = colorData.backgroundColorScale;
    let colors = rampData;
    let detailLineType = document.getElementById("lightnessChartLineType");
    chartsModeSelect.addEventListener("change", (e)=>{
        if (panelOpen) {
            const thisColorId = id;
            let colorData = (0, $hHLLK.getColorClassById)(thisColorId);
            let lightness = e.target.value === "HSV" ? 100 : e.target.value === "HSLuv" ? 60 : 50;
            let colors = colorData.backgroundColorScale;
            (0, $2DjVK.createInterpolationCharts)(colors, e.target.value);
            (0, $jpWZ9.create3dModel)("tabModelContent", [
                colorData
            ], e.target.value);
            (0, $4O58B.updateColorWheel)(e.target.value, lightness, true, null, scaleType, colorData.colorKeys, thisColorId);
        }
    });
    (0, $7yS3p.themeRamp)(colors, gradientId);
    (0, $7yS3p.themeRampKeyColors)(colorKeys, gradientId);
    (0, $fVnLK.createRGBchannelChart)(colors);
    (0, $2DjVK.createInterpolationCharts)(colors, chartsModeSelect.value);
    // Create output swatches for lightness tab
    (0, $2d53cd9ea854a169$exports.createDetailOutputColors)(colorData.name);
    // Get theme data for contrast and lightness stops and populate visualizations
    let chartRatios = Promise.resolve((0, $hHLLK.getThemeContrastRatios)());
    chartRatios.then(function(resolve) {
        (0, $7ea7fc020a95ce10$exports.createRatioChart)(resolve);
    });
    let chartLuminosities = Promise.resolve((0, $hHLLK.getLuminosities)());
    chartLuminosities.then(function(resolve) {
        (0, $7ea7fc020a95ce10$exports.createLuminosityChart)(resolve);
    });
    (0, $jpWZ9.create3dModel)("tabModelContent", [
        colorData
    ], chartsModeSelect.value);
    // Make the color wheel
    (0, $4O58B.createColorWheel)(chartsModeSelect.value, 50, scaleType);
    (0, $4O58B.updateColorDots)(chartsModeSelect.value, scaleType, colorData.colorKeys, id);
    (0, $860250b19110ee55$exports.toggleControls)();
    document.getElementById(thisId.concat("_colorName")).addEventListener("input", function(e) {});
    document.getElementById("tabInterpCharts").addEventListener("click", (e)=>{
        (0, $4r4R6.openDetailTab)(e, "tabInterpChartsContent");
    });
    document.getElementById("tabLightness").addEventListener("click", (e)=>{
        (0, $4r4R6.openDetailTab)(e, "tabLightnessContent");
    });
    document.getElementById("tabModel").addEventListener("click", (e)=>{
        (0, $4r4R6.openDetailTab)(e, "tabModelContent", colors);
    });
    document.getElementById("tabInterpCharts").click();
    deleteColor.addEventListener("click", function(e) {
        const thisColorId = id;
        // let colorData = getColorClassById(thisColorId);
        // TODO: Figure out a way to remove the other
        // UI element for the color in the palette view...
        // _theme.removeColor = colorData;
        const deleteButton = document.getElementById(`${thisColorId}_delete`);
        deleteButton.click();
        contentArea.innerHTML = " ";
        contentArea.style.display = "none";
        configPanel.innerHTML = " ";
        configPanel.style.display = "none";
        panelOpen = false;
    });
    detailLineType.addEventListener("change", (e)=>{
        let val = e.target.value;
        lineTypeSelect.value = val;
        lineTypeSelect.dispatchEvent(new Event("change"));
    });
}
$fc64f11466e0b2d2$exports = {
    showColorDetails: $fc64f11466e0b2d2$var$showColorDetails
};



var $7yS3p = parcelRequire("7yS3p");
var $c423ae23eb006f6d$exports = {};
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
var $hHLLK = parcelRequire("hHLLK");

var $6A7nx = parcelRequire("6A7nx");
var $f4ef336d8e0ad6ef$exports = {};
$f4ef336d8e0ad6ef$exports = JSON.parse('{"cloudy blue":"#acc2d9","dark pastel green":"#56ae57","dust":"#b2996e","electric lime":"#a8ff04","fresh green":"#69d84f","light eggplant":"#894585","nasty green":"#70b23f","really light blue":"#d4ffff","tea":"#65ab7c","warm purple":"#952e8f","yellowish tan":"#fcfc81","cement":"#a5a391","dark grass green":"#388004","dusty teal":"#4c9085","grey teal":"#5e9b8a","macaroni and cheese":"#efb435","pinkish tan":"#d99b82","spruce":"#0a5f38","strong blue":"#0c06f7","toxic green":"#61de2a","windows blue":"#3778bf","blue blue":"#2242c7","blue with a hint of purple":"#533cc6","bright sea green":"#05ffa6","dark green blue":"#1f6357","deep turquoise":"#017374","green teal":"#0cb577","strong pink":"#ff0789","bland":"#afa88b","deep aqua":"#08787f","lavender pink":"#dd85d7","light moss green":"#a6c875","light seafoam green":"#a7ffb5","olive yellow":"#c2b709","pig pink":"#e78ea5","deep lilac":"#966ebd","desert":"#ccad60","dusty lavender":"#ac86a8","purpley grey":"#947e94","purply":"#983fb2","candy pink":"#ff63e9","light pastel green":"#b2fba5","boring green":"#63b365","kiwi green":"#8ee53f","light grey green":"#b7e1a1","orange pink":"#ff6f52","tea green":"#bdf8a3","very light brown":"#d3b683","egg shell":"#fffcc4","eggplant purple":"#430541","powder pink":"#ffb2d0","reddish grey":"#997570","liliac":"#c48efd","stormy blue":"#507b9c","ugly brown":"#7d7103","custard":"#fffd78","darkish pink":"#da467d","deep brown":"#885f01","greenish beige":"#c9d179","manilla":"#fffa86","off blue":"#5684ae","battleship grey":"#6b7c85","browny green":"#6f6c0a","bruise":"#7e4071","kelley green":"#009337","mutedly yellow":"#d0e429","sunny yellow":"#fff917","azul":"#1d5dec","darkgreen":"#054907","green/yellow":"#b5ce08","lichen":"#8fb67b","light light green":"#c8ffb0","pale gold":"#fdde6c","sun yellow":"#ffdf22","tan green":"#a9be70","burple":"#6832e3","butterscotch":"#fdb147","toupe":"#c7ac7d","dark cream":"#fff39a","indian red":"#850e04","light lavendar":"#efc0fe","poison green":"#40fd14","light olive":"#acbf69","bright yellow green":"#9dff00","charcoal grey":"#3c4142","squash":"#f2ab15","cinnamon":"#ac4f06","light pea green":"#c4fe82","radioactive green":"#2cfa1f","raw sienna":"#9a6200","baby purple":"#ca9bf7","cocoa":"#875f42","light royal blue":"#3a2efe","orangeish":"#fd8d49","rust brown":"#8b3103","sand brown":"#cba560","swamp":"#698339","tealish green":"#0cdc73","burnt siena":"#b75203","camo":"#7f8f4e","dusk blue":"#26538d","fern":"#63a950","old rose":"#c87f89","pale light green":"#b1fc99","peachy pink":"#ff9a8a","rosy pink":"#f6688e","light bluish green":"#76fda8","light bright green":"#53fe5c","light neon green":"#4efd54","light seafoam":"#a0febf","tiffany blue":"#7bf2da","washed out green":"#bcf5a6","browny orange":"#ca6b02","nice blue":"#107ab0","sapphire":"#2138ab","greyish teal":"#719f91","orangey yellow":"#fdb915","parchment":"#fefcaf","straw":"#fcf679","very dark brown":"#1d0200","terracota":"#cb6843","ugly blue":"#31668a","clear blue":"#247afd","creme":"#ffffb6","foam green":"#90fda9","grey/green":"#86a17d","light gold":"#fddc5c","seafoam blue":"#78d1b6","topaz":"#13bbaf","violet pink":"#fb5ffc","wintergreen":"#20f986","yellow tan":"#ffe36e","dark fuchsia":"#9d0759","indigo blue":"#3a18b1","light yellowish green":"#c2ff89","pale magenta":"#d767ad","rich purple":"#720058","sunflower yellow":"#ffda03","green/blue":"#01c08d","leather":"#ac7434","racing green":"#014600","vivid purple":"#9900fa","dark royal blue":"#02066f","hazel":"#8e7618","muted pink":"#d1768f","canary":"#fdff63","cool grey":"#95a3a6","dark taupe":"#7f684e","darkish purple":"#751973","true green":"#089404","coral pink":"#ff6163","dark sage":"#598556","dark slate blue":"#214761","flat blue":"#3c73a8","mushroom":"#ba9e88","rich blue":"#021bf9","dirty purple":"#734a65","greenblue":"#23c48b","icky green":"#8fae22","light khaki":"#e6f2a2","warm blue":"#4b57db","dark hot pink":"#d90166","deep sea blue":"#015482","carmine":"#9d0216","dark yellow green":"#728f02","pale peach":"#ffe5ad","plum purple":"#4e0550","golden rod":"#f9bc08","neon red":"#ff073a","old pink":"#c77986","very pale blue":"#d6fffe","blood orange":"#fe4b03","grapefruit":"#fd5956","sand yellow":"#fce166","clay brown":"#b2713d","dark blue grey":"#1f3b4d","flat green":"#699d4c","light green blue":"#56fca2","warm pink":"#fb5581","dodger blue":"#3e82fc","gross green":"#a0bf16","ice":"#d6fffa","metallic blue":"#4f738e","pale salmon":"#ffb19a","sap green":"#5c8b15","algae":"#54ac68","bluey grey":"#89a0b0","greeny grey":"#7ea07a","highlighter green":"#1bfc06","light light blue":"#cafffb","light mint":"#b6ffbb","raw umber":"#a75e09","vivid blue":"#152eff","deep lavender":"#8d5eb7","dull teal":"#5f9e8f","light greenish blue":"#63f7b4","mud green":"#606602","pinky":"#fc86aa","red wine":"#8c0034","tan brown":"#ab7e4c","darkblue":"#030764","rosa":"#fe86a4","lipstick":"#d5174e","pale mauve":"#fed0fc","claret":"#680018","dandelion":"#fedf08","orangered":"#fe420f","ruby":"#ca0147","dark":"#1b2431","greenish turquoise":"#00fbb0","pastel red":"#db5856","bright cyan":"#41fdfe","dark coral":"#cf524e","algae green":"#21c36f","darkish red":"#a90308","reddy brown":"#6e1005","blush pink":"#fe828c","camouflage green":"#4b6113","lawn green":"#4da409","putty":"#beae8a","vibrant blue":"#0339f8","dark sand":"#a88f59","purple/blue":"#5d21d0","saffron":"#feb209","twilight":"#4e518b","warm brown":"#947706","bluegrey":"#85a3b2","bubble gum pink":"#ff69af","duck egg blue":"#c3fbf4","greenish cyan":"#2afeb7","petrol":"#005f6a","royal":"#0c1793","butter":"#ffff81","dusty orange":"#f0833a","off yellow":"#f1f33f","pale olive green":"#b1d27b","orangish":"#fc824a","leaf":"#71aa34","light blue grey":"#b7c9e2","deep red":"#9a0200","lightish purple":"#a552e6","rusty red":"#af2f0d","lavender blue":"#8b88f8","light grass green":"#9af764","light mint green":"#a6fbb2","sunflower":"#ffc512","velvet":"#750851","brick orange":"#c14a09","lightish red":"#fe2f4a","pure blue":"#0203e2","twilight blue":"#0a437a","violet red":"#a50055","yellowy brown":"#ae8b0c","carnation":"#fd798f","muddy yellow":"#bfac05","dark seafoam green":"#3eaf76","deep rose":"#c74767","dusty red":"#b9484e","grey/blue":"#647d8e","lemon lime":"#bffe28","purple/pink":"#d725de","brown yellow":"#b29705","purple brown":"#673a3f","wisteria":"#a87dc2","banana yellow":"#fafe4b","lipstick red":"#c0022f","water blue":"#0e87cc","brown grey":"#8d8468","vibrant purple":"#ad03de","baby green":"#8cff9e","dull green":"#74a662","eggshell blue":"#c4fff7","sandy yellow":"#fdee73","cool green":"#33b864","pale":"#fff9d0","blue/grey":"#758da3","hot magenta":"#f504c9","greyblue":"#77a1b5","purpley":"#8756e4","brownish pink":"#c27e79","dark aquamarine":"#017371","diarrhea":"#9f8303","light mustard":"#f7d560","pale sky blue":"#bdf6fe","turtle green":"#75b84f","bright olive":"#9cbb04","dark grey blue":"#29465b","greeny brown":"#696006","lemon green":"#adf802","light periwinkle":"#c1c6fc","seaweed green":"#35ad6b","sunshine yellow":"#fffd37","ugly purple":"#a442a0","medium pink":"#f36196","very light pink":"#fff4f2","viridian":"#1e9167","faded yellow":"#feff7f","very pale green":"#cffdbc","vibrant green":"#0add08","bright lime":"#87fd05","spearmint":"#1ef876","light aquamarine":"#7bfdc7","light sage":"#bcecac","yellowgreen":"#bbf90f","deep brass":"#ab9004","dark seafoam":"#1fb57a","deep teal":"#00555a","heather":"#a484ac","rust orange":"#c45508","dirty blue":"#3f829d","fern green":"#548d44","bright lilac":"#c95efb","bright green":"#01ff07","peacock blue":"#016795","avocado green":"#87a922","faded orange":"#f0944d","grape purple":"#5d1451","hot green":"#25ff29","lime yellow":"#d0fe1d","mango":"#ffa62b","shamrock":"#01b44c","bubblegum":"#ff6cb5","purplish brown":"#6b4247","pale cyan":"#b7fffa","key lime":"#aeff6e","tomato red":"#ec2d01","lightgreen":"#76ff7b","merlot":"#730039","night blue":"#040348","purpleish pink":"#df4ec8","apple":"#6ecb3c","green apple":"#5edc1f","heliotrope":"#d94ff5","yellow/green":"#c8fd3d","almost black":"#070d0d","cool blue":"#4984b8","leafy green":"#51b73b","mustard brown":"#ac7e04","dusk":"#4e5481","dull brown":"#876e4b","frog green":"#58bc08","vivid green":"#2fef10","bright light green":"#2dfe54","fluro green":"#0aff02","kiwi":"#9cef43","seaweed":"#18d17b","navy green":"#35530a","ultramarine blue":"#1805db","iris":"#6258c4","pastel orange":"#ff964f","yellowish orange":"#ffab0f","perrywinkle":"#8f8ce7","tealish":"#24bca8","dark plum":"#3f012c","pear":"#cbf85f","pinkish orange":"#ff724c","midnight purple":"#280137","light urple":"#b36ff6","dark mint":"#48c072","greenish tan":"#bccb7a","light burgundy":"#a8415b","turquoise blue":"#06b1c4","ugly pink":"#cd7584","sandy":"#f1da7a","electric pink":"#ff0490","muted purple":"#805b87","mid green":"#50a747","greyish":"#a8a495","neon yellow":"#cfff04","banana":"#ffff7e","carnation pink":"#ff7fa7","tomato":"#ef4026","sea":"#3c9992","muddy brown":"#886806","turquoise green":"#04f489","buff":"#fef69e","fawn":"#cfaf7b","muted blue":"#3b719f","pale rose":"#fdc1c5","dark mint green":"#20c073","amethyst":"#9b5fc0","blue/green":"#0f9b8e","chestnut":"#742802","muted green":"#5fa052","pea":"#a4bf20","rusty orange":"#cd5909","stone":"#ada587","rose red":"#be013c","pale aqua":"#b8ffeb","deep orange":"#dc4d01","earth":"#a2653e","mossy green":"#638b27","grassy green":"#419c03","pale lime green":"#b1ff65","light grey blue":"#9dbcd4","pale grey":"#fdfdfe","asparagus":"#77ab56","blueberry":"#464196","purple red":"#990147","pale lime":"#befd73","greenish teal":"#32bf84","caramel":"#af6f09","deep magenta":"#a0025c","light peach":"#ffd8b1","milk chocolate":"#7f4e1e","ocher":"#bf9b0c","off green":"#6ba353","purply pink":"#f075e6","lightblue":"#7bc8f6","dusky blue":"#475f94","golden":"#f5bf03","light beige":"#fffeb6","butter yellow":"#fffd74","dusky purple":"#895b7b","french blue":"#436bad","ugly yellow":"#d0c101","greeny yellow":"#c6f808","orangish red":"#f43605","shamrock green":"#02c14d","orangish brown":"#b25f03","tree green":"#2a7e19","deep violet":"#490648","steel":"#738595","blue/purple":"#5a06ef","cherry":"#cf0234","sandy brown":"#c4a661","warm grey":"#978a84","dark indigo":"#1f0954","midnight":"#03012d","bluey green":"#2bb179","grey pink":"#c3909b","soft purple":"#a66fb5","dark red":"#840000","brown red":"#922b05","medium grey":"#7d7f7c","berry":"#990f4b","brown":"#653700","purpley pink":"#c83cb9","light salmon":"#fea993","easter purple":"#c071fe","light yellow green":"#ccfd7f","dark navy blue":"#00022e","drab":"#828344","light rose":"#ffc5cb","rouge":"#ab1239","purplish red":"#b0054b","slime green":"#99cc04","irish green":"#019529","pink/purple":"#ef1de7","dark navy":"#000435","greeny blue":"#42b395","light plum":"#9d5783","pinkish grey":"#c8aca9","dirty orange":"#c87606","rust red":"#aa2704","pale lilac":"#e4cbff","orangey red":"#fa4224","primary blue":"#0804f9","kermit green":"#5cb200","brownish purple":"#76424e","murky green":"#6c7a0e","wheat":"#fbdd7e","very dark purple":"#2a0134","bottle green":"#044a05","watermelon":"#fd4659","deep sky blue":"#0d75f8","fire engine red":"#fe0002","yellow ochre":"#cb9d06","pumpkin orange":"#fb7d07","pale olive":"#b9cc81","light lilac":"#edc8ff","lightish green":"#61e160","carolina blue":"#8ab8fe","mulberry":"#920a4e","shocking pink":"#fe02a2","auburn":"#9a3001","bright lime green":"#65fe08","celadon":"#befdb7","pinkish brown":"#b17261","bright sky blue":"#02ccfe","celery":"#c1fd95","dirt brown":"#836539","strawberry":"#fb2943","dark lime":"#84b701","copper":"#b66325","medium brown":"#7f5112","robins egg":"#6dedfd","bright aqua":"#0bf9ea","bright lavender":"#c760ff","ivory":"#ffffcb","very light purple":"#f6cefc","light navy":"#155084","pink red":"#f5054f","olive brown":"#645403","mustard green":"#a8b504","ocean green":"#3d9973","very dark blue":"#000133","dusty green":"#76a973","light navy blue":"#2e5a88","minty green":"#0bf77d","adobe":"#bd6c48","barney":"#ac1db8","jade green":"#2baf6a","bright light blue":"#26f7fd","light lime":"#aefd6c","dark khaki":"#9b8f55","orange yellow":"#ffad01","ocre":"#c69c04","maize":"#f4d054","faded pink":"#de9dac","british racing green":"#05480d","sandstone":"#c9ae74","mud brown":"#60460f","light sea green":"#98f6b0","robin egg blue":"#8af1fe","aqua marine":"#2ee8bb","dark sea green":"#11875d","soft pink":"#fdb0c0","orangey brown":"#b16002","cherry red":"#f7022a","burnt yellow":"#d5ab09","brownish grey":"#86775f","camel":"#c69f59","purplish grey":"#7a687f","marine":"#042e60","greyish pink":"#c88d94","pale turquoise":"#a5fbd5","pastel yellow":"#fffe71","bluey purple":"#6241c7","canary yellow":"#fffe40","faded red":"#d3494e","sepia":"#985e2b","coffee":"#a6814c","bright magenta":"#ff08e8","mocha":"#9d7651","ecru":"#feffca","purpleish":"#98568d","cranberry":"#9e003a","darkish green":"#287c37","brown orange":"#b96902","dusky rose":"#ba6873","melon":"#ff7855","mutedly green":"#94b21c","silver":"#c5c9c7","purply blue":"#661aee","purpleish blue":"#6140ef","hospital green":"#9be5aa","mid blue":"#276ab3","amber":"#feb308","easter green":"#8cfd7e","soft blue":"#6488ea","cerulean blue":"#056eee","golden brown":"#b27a01","bright turquoise":"#0ffef9","red pink":"#fa2a55","red purple":"#820747","greyish brown":"#7a6a4f","vermillion":"#f4320c","russet":"#a13905","steel grey":"#6f828a","lighter purple":"#a55af4","bright violet":"#ad0afd","prussian blue":"#004577","slate green":"#658d6d","dirty pink":"#ca7b80","dark blue green":"#005249","pine":"#2b5d34","yellowy green":"#bff128","dark gold":"#b59410","bluish":"#2976bb","darkish blue":"#014182","dull red":"#bb3f3f","pinky red":"#fc2647","bronze":"#a87900","pale teal":"#82cbb2","military green":"#667c3e","barbie pink":"#fe46a5","bubblegum pink":"#fe83cc","pea soup green":"#94a617","dark mustard":"#a88905","medium purple":"#9e43a2","very dark green":"#062e03","dirt":"#8a6e45","dusky pink":"#cc7a8b","red violet":"#9e0168","lemon yellow":"#fdff38","pistachio":"#c0fa8b","dull yellow":"#eedc5b","dark lime green":"#7ebd01","denim blue":"#3b5b92","teal blue":"#01889f","lightish blue":"#3d7afd","purpley blue":"#5f34e7","light indigo":"#6d5acf","swamp green":"#748500","brown green":"#706c11","dark maroon":"#3c0008","hot purple":"#cb00f5","dark forest green":"#002d04","faded blue":"#658cbb","drab green":"#749551","light lime green":"#b9ff66","muted olive green":"#9dc100","yellowish":"#faee66","light blue green":"#7efbb3","bordeaux":"#7b002c","light mauve":"#c292a1","ocean":"#017b92","marigold":"#fcc006","muddy green":"#657432","dull orange":"#d8863b","electric purple":"#aa23ff","fluorescent green":"#08ff08","yellowish brown":"#9b7a01","blush":"#f29e8e","soft green":"#6fc276","bright orange":"#ff5b00","lemon":"#fdff52","purple grey":"#866f85","acid green":"#8ffe09","pale lavender":"#eecffe","violet blue":"#510ac9","light forest green":"#4f9153","burnt red":"#9f2305","khaki green":"#728639","cerise":"#de0c62","faded purple":"#916e99","apricot":"#ffb16d","dark olive green":"#3c4d03","grey brown":"#7f7053","green grey":"#77926f","true blue":"#010fcc","pale violet":"#ceaefa","periwinkle blue":"#8f99fb","light sky blue":"#c6fcff","blurple":"#5539cc","green brown":"#544e03","bluegreen":"#017a79","bright teal":"#01f9c6","brownish yellow":"#c9b003","pea soup":"#929901","forest":"#0b5509","barney purple":"#a00498","ultramarine":"#2000b1","purplish":"#94568c","faded brass":"#c2be0e","bluish grey":"#748b97","dark periwinkle":"#665fd1","dark lilac":"#9c6da5","reddish":"#c44240","light maroon":"#a24857","dusty purple":"#825f87","terra cotta":"#c9643b","avocado":"#90b134","marine blue":"#01386a","teal green":"#25a36f","slate grey":"#59656d","lighter green":"#75fd63","electric green":"#21fc0d","dusty blue":"#5a86ad","golden yellow":"#fec615","bright yellow":"#fffd01","light lavender":"#dfc5fe","umber":"#b26400","mid brown":"#7f5e00","dark peach":"#de7e5d","jungle green":"#048243","eggshell":"#ffffd4","denim":"#3b638c","yellow brown":"#b79400","dull purple":"#84597e","chocolate brown":"#411900","wine red":"#7b0323","neon blue":"#04d9ff","dirty green":"#667e2c","light tan":"#fbeeac","ice blue":"#d7fffe","cadet blue":"#4e7496","dark mauve":"#874c62","very light blue":"#d5ffff","grey purple":"#826d8c","pastel pink":"#ffbacd","very light green":"#d1ffbd","dark sky blue":"#448ee4","evergreen":"#05472a","dull pink":"#d5869d","aubergine":"#3d0734","mahogany":"#4a0100","reddish orange":"#f8481c","deep green":"#02590f","purple pink":"#e03fd8","dusty pink":"#d58a94","faded green":"#7bb274","camo green":"#526525","pinky purple":"#c94cbe","pink purple":"#db4bda","brownish red":"#9e3623","dark rose":"#b5485d","mud":"#735c12","brownish":"#9c6d57","emerald green":"#028f1e","pale brown":"#b1916e","dull blue":"#49759c","burnt umber":"#a0450e","medium green":"#39ad48","clay":"#b66a50","light aqua":"#8cffdb","light olive green":"#a4be5c","brownish orange":"#cb7723","dark aqua":"#05696b","purplish pink":"#ce5dae","dark salmon":"#c85a53","greenish grey":"#96ae8d","jade":"#1fa774","ugly green":"#7a9703","dark beige":"#ac9362","emerald":"#01a049","pale red":"#d9544d","light magenta":"#fa5ff7","sky":"#82cafc","light cyan":"#acfffc","yellow orange":"#fcb001","reddish purple":"#910951","reddish pink":"#fe2c54","orchid":"#c875c4","dirty yellow":"#cdc50a","orange red":"#fd411e","orange brown":"#be6400","cobalt blue":"#030aa7","neon pink":"#fe019a","rose pink":"#f7879a","greyish purple":"#887191","raspberry":"#b00149","aqua green":"#12e193","salmon pink":"#fe7b7c","tangerine":"#ff9408","brownish green":"#6a6e09","red brown":"#8b2e16","greenish brown":"#696112","pumpkin":"#e17701","pine green":"#0a481e","charcoal":"#343837","baby pink":"#ffb7ce","cornflower":"#6a79f7","blue violet":"#5d06e9","chocolate":"#3d1c02","greyish green":"#82a67d","scarlet":"#be0119","green yellow":"#c9ff27","dark olive":"#373e02","sienna":"#a9561e","pastel purple":"#caa0ff","terracotta":"#ca6641","aqua blue":"#02d8e9","sage green":"#88b378","crimson":"#8c000f","deep pink":"#cb0162","grass":"#5cac2d","moss":"#769958","pastel blue":"#a2bffe","bluish green":"#10a674","green blue":"#06b48b","dark tan":"#af884a","greenish blue":"#0b8b87","pale orange":"#ffa756","forrest green":"#154406","dark lavender":"#856798","dark violet":"#34013f","purple blue":"#632de9","dark cyan":"#0a888a","olive drab":"#6f7632","pinkish":"#d46a7e","cobalt":"#1e488f","neon purple":"#bc13fe","light turquoise":"#7ef4cc","apple green":"#76cd26","wine":"#80013f","powder blue":"#b1d1fc","off white":"#ffffe4","electric blue":"#0652ff","dark turquoise":"#045c5a","blue purple":"#5729ce","azure":"#069af3","bright red":"#ff000d","pinkish red":"#f10c45","cornflower blue":"#5170d7","grape":"#6c3461","greyish blue":"#5e819d","purplish blue":"#601ef9","yellowish green":"#b0dd16","greenish yellow":"#cdfd02","medium blue":"#2c6fbb","dusty rose":"#c0737a","light violet":"#d6b4fc","midnight blue":"#020035","bluish purple":"#703be7","red orange":"#fd3c06","dark magenta":"#960056","greenish":"#40a368","ocean blue":"#03719c","coral":"#fc5a50","cream":"#ffffc2","reddish brown":"#7f2b0a","burnt sienna":"#b04e0f","brick":"#a03623","sage":"#87ae73","grey green":"#789b73","white":"#ffffff","robins egg blue":"#98eff9","moss green":"#658b38","steel blue":"#5a7d9a","eggplant":"#380835","light yellow":"#fffe7a","leaf green":"#5ca904","light grey":"#d8dcd6","dull gold":"#a5a502","pinkish purple":"#d648d7","sea blue":"#047495","pale purple":"#b790d4","slate blue":"#5b7c99","blue grey":"#607c8e","hunter green":"#0b4008","fuchsia":"#ed0dd9","pale yellow":"#ffff84","ochre":"#bf9005","mustard yellow":"#d2bd0a","light red":"#ff474c","cerulean":"#0485d1","pale pink":"#ffcfdc","deep blue":"#040273","rust":"#a83c09","light teal":"#90e4c1","slate":"#516572","goldenrod":"#fac205","dark yellow":"#d5b60a","dark grey":"#363737","army green":"#4b5d16","grey blue":"#6b8ba4","seafoam":"#80f9ad","puce":"#a57e52","spring green":"#a9f971","dark orange":"#c65102","sand":"#e2ca76","pastel green":"#b0ff9d","mint":"#9ffeb0","light orange":"#fdaa48","bright pink":"#fe01b1","chartreuse":"#c1f80a","deep purple":"#36013f","dark brown":"#341c02","taupe":"#b9a281","pea green":"#8eab12","olive green":"#677a04","kelly green":"#02ab2e","seafoam green":"#7af9ab","blue green":"#137e6d","khaki":"#aaa662","burgundy":"#610023","dark teal":"#014d4e","brick red":"#8f1402","royal purple":"#4b006e","plum":"#580f41","mint green":"#8fff9f","gold":"#dbb40c","baby blue":"#a2cffe","yellow green":"#c0fb2d","bright purple":"#be03fd","pale blue":"#d0fefe","grass green":"#3f9b0b","navy":"#01153e","aquamarine":"#04d8b2","burnt orange":"#c04e01","neon green":"#0cff0c","bright blue":"#0165fc","rose":"#cf6275","light pink":"#ffd1df","mustard":"#ceb301","indigo":"#380282","lime":"#aaff32","sea green":"#53fca1","periwinkle":"#8e82fe","dark pink":"#cb416b","peach":"#ffb07c","pale green":"#c7fdb5","light brown":"#ad8150","hot pink":"#ff028d","black":"#000000","lilac":"#cea2fd","navy blue":"#001146","royal blue":"#0504aa","beige":"#e6daa6","salmon":"#ff796c","olive":"#6e750e","maroon":"#650021","dark purple":"#35063e","mauve":"#ae7181","forest green":"#06470c","aqua":"#13eac9","cyan":"#00ffff","tan":"#d1b26f","dark blue":"#00035b","lavender":"#c79fef","turquoise":"#06c2ac","dark green":"#033500","violet":"#9a0eea","light purple":"#bf77f6","lime green":"#89fe05","grey":"#929591","sky blue":"#75bbfd","yellow":"#ffff14","magenta":"#c20078","light green":"#96f97b","orange":"#f97306","teal":"#029386","light blue":"#95d0fc","red":"#e50000","pink":"#ff81c0","blue":"#0343df","green":"#15b01a","purple":"#7e1e9c"}');


const $c423ae23eb006f6d$var$predefinedColorNames = [
    "Azure",
    "Forest",
    "Cerulean",
    "Blue",
    "Pink",
    "Red",
    "Indigo",
    "Purple",
    "Blue",
    "Green",
    "Crimson",
    "Salmon",
    "Orange",
    "Tangerine",
    "Yellow",
    "Brown",
    "Umber",
    "Ochre",
    "Periwinkle",
    "Sage",
    "Rose",
    "Lavender",
    "Lilac",
    "Mauve",
    "Mustard",
    "Seafoam",
    "Celery",
    "Teal",
    "Turquise",
    "Sky",
    "Gray",
    "Slate"
];
function $c423ae23eb006f6d$var$getClosestColorName(color) {
    let diffs = [];
    let keys = [];
    for (const [key, value] of Object.entries($f4ef336d8e0ad6ef$exports)){
        let colorDifference = (0, $6A7nx.getColorDifference)(color, value);
        if (colorDifference < 10) {
            diffs.push(colorDifference);
            keys.push(key);
        }
    }
    if (diffs.length > 0) {
        const minDiff = Math.min(...diffs);
        const index = diffs.indexOf(minDiff);
        const closestMatchingKey = keys[index];
        return (0, $6A7nx.capitalizeFirstLetter)(closestMatchingKey);
    }
}
function $c423ae23eb006f6d$var$getRandomColorName() {
    const existingColorNames = (0, $hHLLK.getAllColorNames)();
    const predefinedColorNames = Object.keys($f4ef336d8e0ad6ef$exports);
    let colorNameOptions = predefinedColorNames.filter((item)=>!existingColorNames.includes(item));
    return (0, $6A7nx.capitalizeFirstLetter)(colorNameOptions[Math.floor(Math.random() * colorNameOptions.length)]);
}
$c423ae23eb006f6d$exports = {
    predefinedColorNames: $c423ae23eb006f6d$var$predefinedColorNames,
    getClosestColorName: $c423ae23eb006f6d$var$getClosestColorName,
    getRandomColorName: $c423ae23eb006f6d$var$getRandomColorName
};


function $177b1a3f13a023d5$var$addColorScaleUpdate(c, k, s, r) {
    $177b1a3f13a023d5$var$addColorScale(c, k, s, r);
    (0, $860250b19110ee55$exports.themeUpdateParams)();
}
function $177b1a3f13a023d5$var$addColorScale(newColor, addToTheme = true) {
    // if first color item, just name it gray.
    let colorNameValue;
    let colorNameOptions = (0, $c423ae23eb006f6d$exports.predefinedColorNames);
    if (!newColor) {
        if ((0, $doFvi._theme).colors.length == 0) colorNameValue = "Gray";
        else colorNameValue = (0, $c423ae23eb006f6d$exports.getRandomColorName)();
        let ratios = (0, $hHLLK.getContrastRatioInputs)();
        if (ratios === undefined) ratios = [
            4.5
        ];
        newColor = new $W2lsj.BackgroundColor({
            name: colorNameValue,
            colorKeys: [
                "#000000"
            ],
            colorspace: "RGB",
            ratios: ratios,
            output: "RGB"
        });
    } else colorNameValue = newColor.name;
    if (addToTheme) (0, $doFvi._theme).addColor = newColor;
    // create unique ID for color object
    let thisId = (0, $6A7nx.randomId)();
    let wrapper = document.getElementById("themeColorWrapper");
    let emptyState = document.getElementById("themeColorEmptyState");
    // Remove empty state
    if (emptyState.classList.contains("is-hidden")) ;
    else emptyState.classList.add("is-hidden");
    // Create theme item
    let item = document.createElement("button");
    item.className = "themeColor_item";
    item.id = thisId;
    item.tabIndex = -1;
    // Create color gradient swatch
    let gradientSwatch = document.createElement("div");
    let gradientSwatchId = thisId.concat("_gradientSwatch");
    gradientSwatch.id = gradientSwatchId;
    gradientSwatch.className = "gradientSwatch";
    // Color Name Input
    let colorName = document.createElement("div");
    colorName.className = "spectrum-Form-item spectrum-Form-item--row";
    let colorNameInputWrapper = document.createElement("div");
    colorNameInputWrapper.className = "spectrum-Textfield spectrum-Textfield--quiet colorNameInput";
    let colorNameInput = document.createElement("input");
    colorNameInput.type = "text";
    colorNameInput.className = "spectrum-Textfield-input";
    colorNameInput.id = thisId.concat("_colorName");
    colorNameInput.name = thisId.concat("_colorName");
    colorNameInput.value = newColor.name;
    colorNameInput.addEventListener("focus", (e)=>{
        colorNameValue = e.target.value;
    });
    colorNameInput.addEventListener("change", (e)=>{
        let newValue = e.target.value;
        (0, $doFvi._theme).updateColor = {
            color: colorNameValue,
            name: newValue
        };
        (0, $392150148bbf3b8e$exports.baseScaleOptions)();
        colorNameValue = newValue;
    });
    colorNameInputWrapper.appendChild(colorNameInput);
    colorName.appendChild(colorNameInputWrapper);
    // Actions
    let actions = document.createElement("div");
    actions.className = "spectrum-ButtonGroup spectrum-Form-item spectrum-Form-item--row labelSpacer";
    let edit = document.createElement("button");
    edit.className = "spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionButton--quiet";
    edit.id = `${thisId}-toggleConfig`;
    edit.title = "Show / hide configurations";
    edit.innerHTML = `
  <!-- <span class="spectrum-ActionButton-label">Add from URL</span> -->
  <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Add">
    <use xlink:href="#spectrum-icon-18-Edit" />
  </svg>`;
    edit.addEventListener("click", (0, $fc64f11466e0b2d2$exports.showColorDetails));
    let deleteColor = document.createElement("button");
    deleteColor.className = "spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionButton--quiet";
    deleteColor.title = "Delete color scale";
    deleteColor.id = thisId.concat("_delete");
    deleteColor.innerHTML = `
  <!-- <span class="spectrum-ActionButton-label">Add Color</span> -->
  <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Add">
    <use xlink:href="#spectrum-icon-18-Delete" />
  </svg>`;
    actions.appendChild(edit);
    actions.appendChild(deleteColor);
    colorName.appendChild(actions);
    item.appendChild(gradientSwatch);
    item.appendChild(colorName);
    wrapper.appendChild(item);
    let rampData = newColor.backgroundColorScale;
    let colors = rampData;
    (0, $7yS3p.themeRamp)(colors, gradientSwatchId, "45");
    (0, $860250b19110ee55$exports.toggleControls)();
    if (addToTheme) (0, $392150148bbf3b8e$exports.baseScaleOptions)();
    document.getElementById(thisId.concat("_colorName")).addEventListener("input", (0, $392150148bbf3b8e$exports.baseScaleOptions));
    deleteColor.addEventListener("click", function(e) {
        $177b1a3f13a023d5$var$themeDeleteItem(e);
        (0, $doFvi._theme).removeColor = newColor;
        (0, $860250b19110ee55$exports.themeUpdateParams)();
    });
}
// Deletes a Color class from Theme
function $177b1a3f13a023d5$var$themeDeleteItem(e) {
    let id = e.target.parentNode.parentNode.parentNode.id;
    let self = document.getElementById(id);
    self.remove();
    (0, $392150148bbf3b8e$exports.baseScaleOptions)();
    let items = document.getElementsByClassName("themeColor_item");
    if (items.length == 0) {
        clearParams();
        document.documentElement.style.setProperty("--theme-background", "#f5f5f5");
    }
}
window.addColorScale = $177b1a3f13a023d5$var$addColorScale;
window.addColorScaleUpdate = $177b1a3f13a023d5$var$addColorScaleUpdate;
window.themeDeleteItem = $177b1a3f13a023d5$var$themeDeleteItem;
$177b1a3f13a023d5$exports = {
    addColorScale: $177b1a3f13a023d5$var$addColorScale,
    addColorScaleUpdate: $177b1a3f13a023d5$var$addColorScaleUpdate,
    themeDeleteItem: $177b1a3f13a023d5$var$themeDeleteItem
};


var $fd70b18c5f23e12d$exports = {};
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

var $dlNIw = parcelRequire("dlNIw");

var $hHLLK = parcelRequire("hHLLK");

var $doFvi = parcelRequire("doFvi");




var $6A7nx = parcelRequire("6A7nx");
parcelRequire("1X0rJ");
function $fd70b18c5f23e12d$var$addRatio() {
    let wcagFormula = document.getElementById("themeWCAG").value;
    // Gather all existing ratios from _theme
    let themeRatios = (0, $hHLLK.getContrastRatioInputs)();
    // find highest value
    var hi = Math.max(...themeRatios);
    // Define cap based on wcag formula
    let cap = wcagFormula === "wcag2" ? 20 : 106;
    // Assign an incremented value for the new ratio
    let value;
    if (hi < cap - 1) value = Number(hi + 1).toFixed(2);
    if (hi == cap) value = Number(hi - 1).toFixed(2);
    // Add new value to array of existing ratios
    themeRatios.push(value);
    themeRatios = themeRatios.map((r)=>{
        return Number(r);
    });
    // Pass new array to function that updates all ratio values in the _theme
    $fd70b18c5f23e12d$var$ratioUpdateValues(themeRatios);
    // createHtmlElement
    $fd70b18c5f23e12d$var$createRatioInput(value);
    // Update the rest of the components dependent upon the ratios
    $fd70b18c5f23e12d$var$ratioUpdate(themeRatios);
}
function $fd70b18c5f23e12d$var$createRatioInput(v, c) {
    if (!c) {
        const AllRatios = Promise.resolve((0, $hHLLK.getContrastRatioInputs)());
        AllRatios.then(function(resolve) {
            let ratioIndex = resolve.length;
            let indexedColor = (0, $doFvi._theme).contrastColors[1].values[ratioIndex];
            if (!indexedColor) c = "#cacaca";
            else c = indexedColor.value;
        });
    }
    const luminosityGradient = document.getElementById("luminosityGradient");
    let luminosityValue = $dlNIw.hsluv(c).v;
    let swatchColor = $dlNIw.hsluv(0, 0, luminosityValue).formatHex();
    // let methodPicker = document.getElementById('contrastMethod');
    // let method = methodPicker.value;
    let themeWCAG = document.getElementById("themeWCAG").value;
    let method = themeWCAG === "wcag2" ? "WCAG" : "APCA";
    var ratios = document.getElementById("ratioInput-wrapper");
    var div = document.createElement("div");
    var randId = (0, $6A7nx.randomId)();
    div.className = "ratio-Item ratioGrid";
    div.id = randId + "-item";
    var inputWrapper = document.createElement("span");
    var sw = document.createElement("span");
    sw.className = "ratio-Swatch";
    sw.id = randId + "-sw";
    sw.style.backgroundColor = swatchColor;
    var ratioInput = document.createElement("input");
    let ratioInputWrapper = document.createElement("div");
    ratioInputWrapper.className = "spectrum-Textfield ratioGrid--ratio";
    ratioInput.className = "spectrum-Textfield-input ratio-Field";
    ratioInput.type = "number";
    ratioInput.min = method === "APCA" ? "-107" : "-10";
    ratioInput.max = method === "APCA" ? "106" : "21";
    ratioInput.step = ".01";
    let ratioInputDefaultValue = method === "WCAG" ? 4.5 : 60;
    ratioInput.placeholder = ratioInputDefaultValue;
    ratioInput.id = randId;
    ratioInput.value = v;
    ratioInput.onkeydown = $fd70b18c5f23e12d$var$checkRatioStepModifiers;
    ratioInput.oninput = $fd70b18c5f23e12d$var$syncRatioInputs;
    var luminosityInput = document.createElement("input");
    let luminosityInputWrapper = document.createElement("div");
    luminosityInputWrapper.className = "spectrum-Textfield ratioGrid--luminosity";
    luminosityInput.className = "spectrum-Textfield-input luminosity-Field";
    luminosityInput.type = "number";
    luminosityInput.min = "0";
    luminosityInput.max = "100";
    luminosityInput.step = ".01";
    luminosityInput.id = randId + "_luminosity";
    luminosityInput.onkeydown = $fd70b18c5f23e12d$var$checkRatioStepModifiers;
    luminosityInput.oninput = $fd70b18c5f23e12d$var$syncRatioInputs;
    // Pass fail status
    let statusLabel = document.createElement("div");
    statusLabel.id = randId + "_status";
    let statusIconName = v < 3 ? "Alert" : "Checkmak";
    let statusClass = v < 3 ? "statusLabel--fail" : "statusLabel--pass";
    let statusLabelText = v < 3 ? "Fail" : v < 4.5 ? "+18px" : "Pass";
    statusLabel.title = v < 3 ? "Contrast fails minimums for text and UI components" : v < 4.5 ? "Contrast passes minimum for large text and UI components" : "Contrast passes minimums for all text and UI components";
    let statusLabelSpan = document.createElement("span");
    statusLabel.className = `statusLabel ${statusClass}`;
    statusLabelSpan.className = "spectrum-Body spectrum-Body--sizeXS statusLabel-text";
    statusLabelSpan.innerHTML = statusLabelText;
    let statusIcon = `<svg class="spectrum-Icon spectrum-Icon--sizeS statusLabel-validationIcon" focusable="false" aria-hidden="true">
  <use xlink:href="#spectrum-icon-18-${statusIconName}"></use>
</svg>`;
    statusLabel.innerHTML = statusIcon;
    statusLabel.appendChild(statusLabelSpan);
    // Customize swatch names input
    // var swatchNameInput = document.createElement('input');
    // let swatchNameInputWrapper = document.createElement('div');
    // swatchNameInputWrapper.className = 'spectrum-Textfield spectrum-Textfield--quiet ratioGrid--swatchName is-readonly';
    // swatchNameInput.className = 'spectrum-Textfield-input swatchName-Field is-readonly';
    // swatchNameInput.type = "text";
    // swatchNameInput.id = randId + "_swatchName";
    // swatchNameInput.readOnly = true;
    // swatchNameInput.value = '-100'
    // swatchNameInput.oninput = syncRatioInputs;
    var button = document.createElement("button");
    button.className = "spectrum-ActionButton spectrum-ActionButton--sizeM spectrum-ActionButton--quiet ratioGrid--actions";
    button.title = "Delete contrast ratio";
    button.innerHTML = `
  <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Delete">
    <use xlink:href="#spectrum-icon-18-Delete" />
  </svg>`;
    button.onclick = $fd70b18c5f23e12d$var$deleteRatio;
    inputWrapper.appendChild(sw);
    ratioInputWrapper.appendChild(ratioInput);
    inputWrapper.appendChild(ratioInputWrapper);
    luminosityInputWrapper.appendChild(luminosityInput);
    // swatchNameInputWrapper.appendChild(swatchNameInput);
    div.appendChild(inputWrapper);
    div.appendChild(luminosityInputWrapper);
    // div.appendChild(swatchNameInputWrapper);
    div.appendChild(button);
    div.appendChild(statusLabel);
    ratios.appendChild(div);
    /**
   * Luminosity input and gradient dot need to be
   * constructed AFTER the ratio input has been
   * added to the DOM, that way we can find the
   * index of the new ratio (from all ratios) and
   * use that index to identify a color sample from
   * the output theme to calculate the luminosity
   * value which will be populated in the luminosity
   * input and used to position the dot.
   */ // const AllRatios = getContrastRatios();
    // let ratioIndex = AllRatios.indexOf(v);
    // TODO: Remove condition, which currently stops the ui from breaking with paramSetup values...
    // let tempColor = (_theme.contrastColors && ratioIndex > -1) ? _theme.contrastColors[1].values[ratioIndex].value : '#cacaca';
    // let luminosityValue = d3.hsluv(tempColor).v;
    let lDot = document.createElement("div");
    lDot.className = "luminosityDot";
    lDot.id = randId.concat("_dot");
    let lightnessPerc = 100 - luminosityValue;
    let dotOffset = 0;
    let topPosition = `${Math.round(lightnessPerc)}%`;
    lDot.style.top = topPosition;
    luminosityGradient.appendChild(lDot);
    let lumInput = document.getElementById(randId + "_luminosity");
    lumInput.value = luminosityValue.toFixed(2);
    document.getElementById(randId).dispatchEvent(new Event("input"));
}
function $fd70b18c5f23e12d$var$addRatioInputs(ratios, colors) {
    ratios.forEach((ratio, index)=>{
        return $fd70b18c5f23e12d$var$createRatioInput(ratio, colors[index]);
    });
    let ratioFields = document.getElementsByClassName("ratio-Field");
    for(let i = 0; i < ratioFields.length; i++)ratioFields[i].dispatchEvent(new Event("input"));
}
function $fd70b18c5f23e12d$var$distributeRatios() {
    // Temporarily "disable" wrapper
    let inputWrapper = document.getElementById("ratioInput-wrapper");
    setTimeout(()=>{
        inputWrapper.classList.add("is-disabled");
    }, 100);
    let ratioFields = document.getElementsByClassName("ratio-Field");
    let ratioInputs = [];
    for(let i = 0; i < ratioFields.length; i++)ratioInputs.push(Number(ratioFields[i].value));
    let minVal = Math.min(...ratioInputs);
    let maxVal = Math.max(...ratioInputs);
    let length = ratioInputs.length - 1;
    let newRatios = [];
    for(let i = 0; i < length + 1; i++){
        let perc = i / length;
        if (i === 0) perc = 0;
        let newVal = (0, $6A7nx.lerp)(minVal, maxVal, perc);
        newRatios.push((0, $6A7nx.round)(newVal, 2));
    }
    // Update ratio inputs with new values
    for(let i = 0; i < newRatios.length; i++){
        ratioFields[i].value = newRatios[i];
        ratioFields[i].dispatchEvent(new Event("input"));
    }
    setTimeout(()=>{
        $fd70b18c5f23e12d$var$ratioUpdate();
        inputWrapper.classList.remove("is-disabled");
    }, 500);
}
function $fd70b18c5f23e12d$var$distributeLuminosity() {
    let LumFields = document.getElementsByClassName("luminosity-Field");
    let LumInputs = [];
    for(let i = 0; i < LumFields.length; i++)LumInputs.push(Number(LumFields[i].value));
    let inputWrapper = document.getElementById("ratioInput-wrapper");
    inputWrapper.classList.add("is-disabled");
    let minVal = Math.min(...LumInputs);
    let maxVal = Math.max(...LumInputs);
    let length = LumInputs.length - 1;
    let newLums = [];
    for(let i = 0; i < length + 1; i++){
        let perc = i / length;
        if (i === 0) perc = 0;
        let newVal = (0, $6A7nx.lerp)(minVal, maxVal, perc);
        newLums.push((0, $6A7nx.round)(newVal, 2));
    }
    if ((0, $doFvi._theme).lightness > 50) newLums.reverse();
    // newLums.sort(function(a, b){return a-b});
    // Update ratio inputs with new values
    for(let i = 0; i < newLums.length; i++)LumFields[i].value = newLums[i];
    setTimeout(()=>{
        for(let i = 0; i < LumFields.length; i++)LumFields[i].dispatchEvent(new Event("input"));
    }, 200);
    setTimeout(()=>{
        $fd70b18c5f23e12d$var$sortRatios();
    }, 200);
    setTimeout(()=>{
        $fd70b18c5f23e12d$var$ratioUpdate();
    }, 500);
    setTimeout(()=>{
        inputWrapper.classList.remove("is-disabled");
    }, 900);
}
document.getElementById("distribute").addEventListener("input", function(e) {
    let value = e.target.value;
    if (value === "ratios") $fd70b18c5f23e12d$var$distributeRatios();
    if (value === "luminosity") $fd70b18c5f23e12d$var$distributeLuminosity();
    e.target.value = "none";
});
// Sort swatches in UI
function $fd70b18c5f23e12d$var$sort() {
    let ratioFields = document.getElementsByClassName("ratio-Field");
    let ratioInputs = [];
    for(let i = 0; i < ratioFields.length; i++)ratioInputs.push(ratioFields[i].value);
    // console.log(ratioInputs)
    ratioInputs.sort(function(a, b) {
        return a - b;
    });
    // Update ratio inputs with new values
    for(let i = 0; i < ratioInputs.length; i++)ratioFields[i].value = ratioInputs[i];
    setTimeout(()=>{
        for(let i = 0; i < ratioInputs.length; i++)ratioFields[i].dispatchEvent(new Event("input"));
    }, 200);
}
function $fd70b18c5f23e12d$var$sortRatios() {
    $fd70b18c5f23e12d$var$sort();
// ratioUpdate();
}
function $fd70b18c5f23e12d$var$syncRatioInputs(e) {
    let thisId = e.target.id;
    let baseId = thisId.includes("_luminosity") ? thisId.replace("_luminosity", "") : thisId;
    let swatchId = baseId.concat("-sw");
    let wcagFormula = document.getElementById("themeWCAG").value;
    let val = e.target.value;
    let targetContrast, luminosity, swatchColor;
    let swatch = document.getElementById(swatchId);
    if (thisId.includes("_luminosity")) {
        // Luminosity input
        baseId = thisId.replace("_luminosity", "");
        let ratioInput = document.getElementById(baseId);
        luminosity = val;
        let currentSwatchColor = window.getComputedStyle(swatch).getPropertyValue("background-color");
        let tempColorHsluv = $dlNIw.lch(currentSwatchColor);
        swatchColor = $dlNIw.lch(val, tempColorHsluv.c, tempColorHsluv.h).formatHex();
        let bg = (0, $doFvi._theme).contrastColors[0].background;
        let fgArray = [
            $dlNIw.rgb(swatchColor).r,
            $dlNIw.rgb(swatchColor).g,
            $dlNIw.rgb(swatchColor).b
        ];
        let bgArray = [
            $dlNIw.rgb(bg).r,
            $dlNIw.rgb(bg).g,
            $dlNIw.rgb(bg).b
        ];
        targetContrast = (0, $6A7nx.round)($W2lsj.contrast(fgArray, bgArray, undefined, wcagFormula), 2);
        ratioInput.value = targetContrast;
    } else {
        // Ratio input create status report output only
        targetContrast = val;
        baseId = thisId;
        let largeText = wcagFormula === "wcag3" ? 60 : 3;
        let smallText = wcagFormula === "wcag3" ? 75 : 4.5;
        // update status value
        let status = document.getElementById(`${thisId}_status`);
        let statusClass = val < largeText ? "statusLabel--fail" : "statusLabel--pass";
        let statusLabelText = val < largeText ? "Fail" : val < smallText ? "+18px" : "Pass";
        status.title = val < largeText ? "Contrast fails minimums for text and UI components" : val < smallText ? "Contrast passes minimum for large text and UI components" : "Contrast passes minimums for all text and UI components";
        status.className = `statusLabel ${statusClass}`;
        let statusIconName = val < largeText ? "Alert" : "Checkmark";
        let statusContent = `<svg class="spectrum-Icon spectrum-Icon--sizeS statusLabel-validationIcon" focusable="false" aria-hidden="true">
    <use xlink:href="#spectrum-icon-18-${statusIconName}"></use>
  </svg> <span class="spectrum-Body spectrum-Body--sizeXS statusLabel-text">${statusLabelText}</span>`;
        status.innerHTML = statusContent;
    }
    let themeRatios = Promise.resolve((0, $hHLLK.getContrastRatioInputs)()); // grab array of all inputs & their values for the ratios
    themeRatios.then(function(resolve) {
        const index = resolve.indexOf(targetContrast);
        if (index > -1) resolve[index] = targetContrast;
        $fd70b18c5f23e12d$var$ratioUpdateValues(resolve);
        $fd70b18c5f23e12d$var$ratioUpdate();
        if (!thisId.includes("_luminosity")) {
            let luminosityInputId = `${thisId}_luminosity`;
            let luminosityInput = document.getElementById(luminosityInputId);
            // Must calculate luminosity of respective contrast value
            let tempColor = (0, $doFvi._theme).contrastColors[1].values[index].value;
            luminosity = $dlNIw.lch(tempColor).l;
            luminosityInput.value = (0, $6A7nx.round)(luminosity, 2);
            swatchColor = $dlNIw.lch(luminosity, 0, 0).formatHex();
        }
        swatch.style.backgroundColor = swatchColor;
    });
    setTimeout(()=>{
        let lDotId = baseId.concat("_dot");
        let lDot = document.getElementById(lDotId);
        let lumReversed = 100 - luminosity;
        let dotPercentOffset = lumReversed / 100 * 8;
        let dotPosition = `calc(${Math.round(lumReversed)}% - ${Math.round(dotPercentOffset)}px)`;
        lDot.style.top = dotPosition;
    }, 250);
}
function $fd70b18c5f23e12d$var$checkRatioStepModifiers(e) {
    if (!e.shiftKey) return;
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const value = Number(e.target.value);
    let newValue;
    switch(e.key){
        case "ArrowDown":
            newValue = value - 1;
            e.target.value = newValue.toFixed(2);
            e.target.oninput(e);
            break;
        case "ArrowUp":
            newValue = value + 1;
            e.target.value = newValue.toFixed(2);
            e.target.oninput(e);
            break;
        default:
    }
}
// Delete ratio
function $fd70b18c5f23e12d$var$deleteRatio(e) {
    let id = e.target.parentNode.id;
    let inputId = id.replace("-item", "");
    let input = document.getElementById(inputId);
    let value = input.value;
    let self = document.getElementById(id);
    // var sliderid = id.replace('-item', '') + '-sl';
    // var slider = document.getElementById(sliderid);
    let dotId = inputId.concat("_dot");
    let dot = document.getElementById(dotId);
    dot.remove();
    self.remove();
    // slider.remove();
    let themeRatios = (0, $hHLLK.getContrastRatioInputs)();
    const index = themeRatios.indexOf(value);
    if (index > -1) themeRatios.splice(index, 1);
    $fd70b18c5f23e12d$var$ratioUpdateValues();
    $fd70b18c5f23e12d$var$ratioUpdate();
}
function $fd70b18c5f23e12d$var$ratioUpdate(chartRatios = Promise.resolve((0, $hHLLK.getThemeContrastRatios)()), chartLuminosities = Promise.resolve((0, $hHLLK.getLuminosities)())) {
    Promise.all([
        chartRatios,
        chartLuminosities
    ]).then(function(values) {
        (0, $2d53cd9ea854a169$exports.createOutputColors)();
        (0, $7ea7fc020a95ce10$exports.createRatioChart)(values[0]);
        (0, $7ea7fc020a95ce10$exports.createLuminosityChart)(values[1]);
        (0, $0a05a28c60be444f$exports.createOutputParameters)();
    });
}
function $fd70b18c5f23e12d$var$ratioUpdateValues(themeRatios = (0, $hHLLK.getThemeContrastRatios)()) {
    themeRatios = themeRatios.map((r)=>{
        return Number(r);
    });
    let argArray = [];
    (0, $doFvi._theme).colors.forEach((c)=>{
        if (c) argArray.push({
            color: c.name,
            ratios: themeRatios
        });
    });
    (0, $doFvi._theme).updateColor = argArray;
}
function $fd70b18c5f23e12d$var$dispatchRatioInputEvents() {
    let inputWrapper = document.getElementById("ratioInput-wrapper");
    inputWrapper.classList.add("is-disabled");
    // Loop every target ratio input and trigger input event to refresh
    // lightness values and position of dot on gradient visual
    let ratioFields = document.getElementsByClassName("ratio-Field");
    for(let i = 0; i < ratioFields.length; i++)ratioFields[i].dispatchEvent(new Event("input"));
    setTimeout(()=>{
        inputWrapper.classList.remove("is-disabled");
    }, 900);
}
document.getElementById("themeWCAG").addEventListener("input", function(e) {
    let inputWrapper = document.getElementById("ratioInput-wrapper");
    inputWrapper.classList.add("is-disabled");
    let value = e.target.value;
    (0, $doFvi._theme).formula = value;
    let label = document.getElementById("ratioInputLabel");
    label.innerHTML = value === "wcag2" ? "WCAG 2 contrast" : value === "wcag3" ? "APCA contrast" : "Contrast";
    // Gather all luminosity input values
    // Create temporary color for each with it's L value
    // Calculate new contrast formula value based on the temp color
    // Map that to the new ratio input values
    let LumFields = document.getElementsByClassName("luminosity-Field");
    let LumValues = [];
    for(let i = 0; i < LumFields.length; i++)LumValues.push(LumFields[i].value);
    let newContrasts = LumValues.map((l)=>{
        let swatchColor = $dlNIw.hsluv(0, 0, l).formatHex();
        let bg = (0, $doFvi._theme).contrastColors[0].background;
        let fgArray = [
            $dlNIw.rgb(swatchColor).r,
            $dlNIw.rgb(swatchColor).g,
            $dlNIw.rgb(swatchColor).b
        ];
        let bgArray = [
            $dlNIw.rgb(bg).r,
            $dlNIw.rgb(bg).g,
            $dlNIw.rgb(bg).b
        ];
        return (0, $6A7nx.round)($W2lsj.contrast(fgArray, bgArray, undefined, value), 2);
    });
    let RatioFields = document.getElementsByClassName("ratio-Field");
    const updateRatioValues = ()=>{
        for(let i = 0; i < RatioFields.length; i++){
            RatioFields[i].min = value === "wcag3" ? "-107" : "-10";
            RatioFields[i].max = value === "wcag3" ? "106" : "21";
            RatioFields[i].value = newContrasts[i];
        }
    };
    const update = Promise.resolve(updateRatioValues());
    update.then(function() {
        for(let i = 0; i < RatioFields.length; i++)RatioFields[i].dispatchEvent(new Event("input"));
    });
    setTimeout(()=>{
        inputWrapper.classList.remove("is-disabled");
    }, 500);
});
window.addRatio = $fd70b18c5f23e12d$var$addRatio;
window.sortRatios = $fd70b18c5f23e12d$var$sortRatios;
window.distributeRatios = $fd70b18c5f23e12d$var$distributeRatios;
window.dispatchRatioInputEvents = $fd70b18c5f23e12d$var$dispatchRatioInputEvents;
$fd70b18c5f23e12d$exports = {
    addRatio: $fd70b18c5f23e12d$var$addRatio,
    createRatioInput: $fd70b18c5f23e12d$var$createRatioInput,
    addRatioInputs: $fd70b18c5f23e12d$var$addRatioInputs,
    sort: $fd70b18c5f23e12d$var$sort,
    sortRatios: $fd70b18c5f23e12d$var$sortRatios,
    dispatchRatioInputEvents: $fd70b18c5f23e12d$var$dispatchRatioInputEvents,
    syncRatioInputs: $fd70b18c5f23e12d$var$syncRatioInputs,
    distributeRatios: $fd70b18c5f23e12d$var$distributeRatios,
    checkRatioStepModifiers: $fd70b18c5f23e12d$var$checkRatioStepModifiers,
    deleteRatio: $fd70b18c5f23e12d$var$deleteRatio
};





var $6A7nx = parcelRequire("6A7nx");

var $doFvi = parcelRequire("doFvi");
function $922db13c1d19444e$var$paramSetup() {
    let setFirstColorSmoothing = false;
    let url = new URL(window.location);
    let params = new URLSearchParams(url.search.slice(1));
    let themeBase = document.getElementById("themeBase");
    let RATIOS;
    let RATIOCOLORS;
    let themeNameInput = document.getElementById("themeNameInput");
    if (params.has("name")) {
        themeNameInput.value = params.get("name").toString();
        let characters = params.get("name").toString().length;
        themeNameInput.style.width = `${characters + 4}ch`;
    } else {
        themeNameInput.value = "Untitled";
        let characters = 8;
        themeNameInput.style.width = `${characters + 4}ch`;
    }
    // updateThemeTitle();
    if (params.has("config") && params.get("config") !== undefined) {
        let configParam = params.get("config");
        let config = JSON.parse(configParam);
        let colorScales = config.colorScales;
        let baseScale = config.baseScale;
        let lightness = config.lightness ? config.lightness : config.brightness;
        let contrast;
        let formula;
        if (!config.formula) formula = "wcag2";
        else formula = config.formula;
        (0, $doFvi._theme).formula = formula;
        if (!config.contrast) contrast = 1;
        else contrast = config.contrast;
        if (colorScales.length > 0) {
            (0, $doFvi._theme).removeColor = (0, $doFvi.tempGray);
            colorScales.map((color, i)=>{
                let colorName = color.name;
                let keyColors = color.colorKeys;
                let colorSpace = color.colorspace;
                let ratios = color.ratios;
                let smooth = i === 0 ? false : color.smooth;
                if (color.smooth === "true") {
                    if (color.colorspace === "OKLAB" || color.colorspace === "OKLCH") setFirstColorSmoothing = true;
                }
                // Create color scale item
                let newColor = new $W2lsj.BackgroundColor({
                    name: colorName,
                    colorKeys: keyColors,
                    colorspace: colorSpace,
                    ratios: ratios,
                    smooth: smooth
                });
                (0, $177b1a3f13a023d5$exports.addColorScale)(newColor);
                // If the color scale name matches the base scale
                // in the config, assign it to the theme's backgroundColor
                // via the theme setter
                if (colorName === baseScale) (0, $doFvi._theme).backgroundColor = newColor;
            });
            RATIOS = Promise.resolve([
                ...colorScales[0].ratios
            ]);
            RATIOCOLORS = Promise.resolve((0, $doFvi._theme).contrastColors[1].values.map((c)=>{
                return c.value;
            }));
        }
        let slider = document.getElementById("themeBrightnessSlider");
        let sliderVal = document.getElementById("themeBrightnessValue");
        if (lightness === undefined) lightness = 0;
        (0, $doFvi._theme).lightness = lightness;
        slider.value = lightness;
        sliderVal.innerHTML = lightness;
        let contrastSlider = document.getElementById("themeContrastSlider");
        let contrastSliderVal = document.getElementById("themeContrastValue");
        contrastSlider.value = contrast;
        contrastSliderVal.innerHTML = `${(0, $6A7nx.round)(contrast * 100)}%`;
        (0, $doFvi._theme).contrast = contrast;
        // generate the options for the base scale,
        // then select the option defined in parameters
        (0, $392150148bbf3b8e$exports.baseScaleOptions)();
        themeBase.value = baseScale;
        Promise.all([
            RATIOS,
            RATIOCOLORS
        ]).then((values)=>{
            (0, $fd70b18c5f23e12d$exports.addRatioInputs)(values[0], values[1]);
        }).then(()=>{
            setTimeout(()=>{
                document.getElementById("themeWCAG").value = formula;
                let label = document.getElementById("ratioInputLabel");
                label.innerHTML = formula === "wcag2" ? "WCAG 2 contrast" : formula === "wcag3" ? "APCA contrast" : "Contrast";
                (0, $fd70b18c5f23e12d$exports.sortRatios)();
            }, 500);
        });
    } else if (params.has("colorKeys")) {
        // old way used #, but now it's seen as a hash.
        // Have to replace # with character code and reset URL
        if (window.location.hash) {
            let hash = window.location.hash.toString();
            // let newParam = hash.replaceAll(`#`, `%23`).replaceAll(`,`, `%54`);
            let paramArray = hash.split("&");
            // console.log(paramArray)
            let paramOptions = [
                "base",
                "mode",
                "ratios"
            ];
            paramArray.map((p)=>{
                for(let i = 0; i < paramOptions.length; i++)if (p.includes(paramOptions[i])) {
                    // strip string to reveal parameters
                    let value = p.replace(`${paramOptions[i]}=`, "");
                    params.set(`${paramOptions[i]}`, value);
                }
            });
            params.set("colorKeys", paramArray[0]);
            window.history.replaceState({}, "", "?" + params); // update the page's URL.
        }
        let colorKeys = Promise.resolve(params.get("colorKeys").split(","));
        let colorspace = Promise.resolve(params.get("mode"));
        let ratios = Promise.resolve(params.get("ratios").split(",").map((r)=>{
            return Number(r);
        }));
        Promise.all([
            colorKeys,
            colorspace,
            ratios
        ]).then((values)=>{
            RATIOS = values[2];
            let newColor = new $W2lsj.BackgroundColor({
                name: (0, $c423ae23eb006f6d$exports.getClosestColorName)(values[0][0]),
                colorKeys: values[0],
                colorspace: values[1],
                ratios: values[2],
                smooth: false
            });
            let length = (0, $doFvi._theme).colors.length;
            for(let i = 0; i < length; i++)// Add default color
            (0, $177b1a3f13a023d5$exports.addColorScale)((0, $doFvi._theme).colors[i], false);
            (0, $177b1a3f13a023d5$exports.addColorScale)(newColor);
            (0, $392150148bbf3b8e$exports.baseScaleOptions)();
            themeBase.value = (0, $doFvi._theme).backgroundColor.name;
        }).then(()=>{
            // Update default gray to input ratios
            (0, $doFvi._theme).updateParams = {
                name: (0, $doFvi._theme).colors[0].name,
                ratios: RATIOS
            };
        }).then(()=>{
            setTimeout(()=>{
                RATIOCOLORS = Promise.resolve((0, $doFvi._theme).contrastColors[1].values.map((c)=>{
                    return c.value;
                }));
                RATIOCOLORS.then((resolve)=>{
                    // console.log(resolve)
                    (0, $fd70b18c5f23e12d$exports.addRatioInputs)(RATIOS, resolve);
                });
            }, 100);
        }).then(()=>{
            setTimeout(()=>{
                (0, $fd70b18c5f23e12d$exports.sortRatios)();
            }, 500);
        });
    } else if (!params.has("config") || params.get("config") === undefined || !params.has("colorKeys")) {
        (0, $fd70b18c5f23e12d$exports.addRatioInputs)([
            1.45,
            2.05,
            3.02,
            4.54,
            7,
            10.86
        ], [
            "#d6d6d6",
            "#b5b5b5",
            "#8a8a8a",
            "#767676",
            "#595959",
            "#3d3d3d"
        ]);
        let length = (0, $doFvi._theme).colors.length;
        for(let i = 0; i < length; i++)// add color scale to UI from the default theme,
        // but do not add it to _theme, since they are already
        // coming from the _theme class to begin with.
        (0, $177b1a3f13a023d5$exports.addColorScale)((0, $doFvi._theme).colors[i], false);
        // generate the options for the base scale,
        // then select the option defined from the initial theme
        (0, $392150148bbf3b8e$exports.baseScaleOptions)();
        themeBase.value = (0, $doFvi._theme).backgroundColor.name;
    }
    setTimeout(()=>{
        if (setFirstColorSmoothing) {
            let firstColorName = (0, $doFvi._theme).colors[0].name;
            (0, $doFvi._theme).updateColor = {
                name: firstColorName,
                smooth: "true"
            };
        }
        themeUpdate();
    }, 200);
    $922db13c1d19444e$var$clearParams();
}
function $922db13c1d19444e$var$clearParams() {
    let uri = window.location.toString();
    let cleanURL = uri.substring(0, uri.indexOf("?"));
    window.history.replaceState({}, document.title, cleanURL);
}
$922db13c1d19444e$exports = {
    paramSetup: $922db13c1d19444e$var$paramSetup,
    clearParams: $922db13c1d19444e$var$clearParams
};


parcelRequire("6A7nx");

var $hHLLK = parcelRequire("hHLLK");

var $ff299fd312fb395f$exports = {};
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

var $doFvi = parcelRequire("doFvi");



var $hHLLK = parcelRequire("hHLLK");


var $6A7nx = parcelRequire("6A7nx");
var $da180c3ef1a701c4$var$getSrc = (item)=>typeof item === "string" ? item : item.src;
var $da180c3ef1a701c4$var$getArgs = ({ amount: amount = 3, format: format = "array", group: group = 20, sample: sample = 10 } = {})=>({
        amount: amount,
        format: format,
        group: group,
        sample: sample
    });
var $da180c3ef1a701c4$var$format = (input, args)=>{
    var list = input.map((val)=>{
        var rgb = Array.isArray(val) ? val : val.split(",").map(Number);
        return args.format === "hex" ? $da180c3ef1a701c4$var$rgbToHex(rgb) : rgb;
    });
    return args.amount === 1 || list.length === 1 ? list[0] : list;
};
var $da180c3ef1a701c4$var$group = (number, grouping)=>{
    var grouped = Math.round(number / grouping) * grouping;
    return Math.min(grouped, 255);
};
var $da180c3ef1a701c4$var$rgbToHex = (rgb)=>"#" + rgb.map((val)=>{
        var hex = val.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }).join("");
var $da180c3ef1a701c4$var$getImageData = (src)=>new Promise((resolve, reject)=>{
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        var img = new Image();
        img.onload = ()=>{
            canvas.height = img.height;
            canvas.width = img.width;
            context.drawImage(img, 0, 0);
            var data = context.getImageData(0, 0, img.width, img.height).data;
            resolve(data);
        };
        img.onerror = ()=>reject(Error("Image loading failed."));
        img.crossOrigin = "";
        img.src = src;
    });
var $da180c3ef1a701c4$var$getAverage = (data, args)=>{
    var gap = 4 * args.sample;
    var amount = data.length / gap;
    var rgb = {
        r: 0,
        g: 0,
        b: 0
    };
    for(var i = 0; i < data.length; i += gap){
        rgb.r += data[i];
        rgb.g += data[i + 1];
        rgb.b += data[i + 2];
    }
    return $da180c3ef1a701c4$var$format([
        [
            Math.round(rgb.r / amount),
            Math.round(rgb.g / amount),
            Math.round(rgb.b / amount)
        ]
    ], args);
};
var $da180c3ef1a701c4$var$getProminent = (data, args)=>{
    var gap = 4 * args.sample;
    var colors = {};
    for(var i = 0; i < data.length; i += gap){
        var rgb = [
            $da180c3ef1a701c4$var$group(data[i], args.group),
            $da180c3ef1a701c4$var$group(data[i + 1], args.group),
            $da180c3ef1a701c4$var$group(data[i + 2], args.group)
        ].join();
        colors[rgb] = colors[rgb] ? colors[rgb] + 1 : 1;
    }
    return $da180c3ef1a701c4$var$format(Object.entries(colors).sort(([_keyA, valA], [_keyB, valB])=>valA > valB ? -1 : 1).slice(0, args.amount).map(([rgb])=>rgb), args);
};
var $da180c3ef1a701c4$var$process = (handler, item, args)=>new Promise((resolve, reject)=>$da180c3ef1a701c4$var$getImageData($da180c3ef1a701c4$var$getSrc(item)).then((data)=>resolve(handler(data, $da180c3ef1a701c4$var$getArgs(args)))).catch((error)=>reject(error)));
var $da180c3ef1a701c4$export$cc6710ee5f037d57 = (item, args)=>$da180c3ef1a701c4$var$process($da180c3ef1a701c4$var$getAverage, item, args);
var $da180c3ef1a701c4$export$26173b1fe91f4b7d = (item, args)=>$da180c3ef1a701c4$var$process($da180c3ef1a701c4$var$getProminent, item, args);


function $ff299fd312fb395f$var$addColorsFromImage() {
    const imageColorAmmount = 18; // 25
    const imageColorGrouping = 100; // 30
    const input = document.getElementById("image-upload");
    const ratios = (0, $hHLLK.getContrastRatioInputs)();
    const preview = document.getElementById("image-preview");
    while(preview.firstChild)preview.removeChild(preview.firstChild);
    const curFiles = input.files;
    if (curFiles.length === 0) {
        const para = document.createElement("p");
    } else for (const file of curFiles){
        const para = document.createElement("p");
        para.className = "spectrum-Body image-preview_text";
        if ($ff299fd312fb395f$var$validFileType(file)) {
            para.textContent = `Color scales extracted from ${file.name}.`;
            const image = document.createElement("img");
            const fileUrl = URL.createObjectURL(file);
            image.src = fileUrl;
            preview.appendChild(image);
            (0, $da180c3ef1a701c4$export$cc6710ee5f037d57)(fileUrl).then((color)=>{
                (0, $6A7nx.removeElementsByClass)("themeColor_item");
                const existingColorNames = (0, $hHLLK.getAllColorNames)();
                color = chroma(color[0], color[1], color[2], "rgb");
                let colorName;
                let closest = (0, $c423ae23eb006f6d$exports.getClosestColorName)(color);
                let duplicateName = existingColorNames.includes(closest);
                if (closest && !duplicateName) colorName = closest;
                if (!colorName) colorName = "Gray";
                // Remove gray and replace with new average color as the base
                (0, $doFvi._theme).removeColor = {
                    name: "Gray"
                };
                let newColor = new $W2lsj.BackgroundColor({
                    name: colorName,
                    colorKeys: [
                        color.hex()
                    ],
                    colorspace: "CAM02p",
                    ratios: ratios,
                    smooth: true
                });
                (0, $177b1a3f13a023d5$exports.addColorScale)(newColor, true);
                (0, $doFvi._theme).backgroundColor = newColor;
            }).then(()=>{
                (0, $da180c3ef1a701c4$export$26173b1fe91f4b7d)(fileUrl, {
                    amount: imageColorAmmount,
                    format: "hex",
                    group: imageColorGrouping
                }).then((colors)=>{
                    // First we grab a large group of colors from Prominant/color.js
                    // then, we need to call our own utility function to group
                    // common hues to become key colors of the same color scale.
                    let grouped = (0, $6A7nx.groupCommonHues)(colors);
                    grouped.forEach((color)=>{
                        const existingColorNames = (0, $hHLLK.getAllColorNames)();
                        let colorName;
                        for(let i = 0; i < color.length; i++){
                            let closest = (0, $c423ae23eb006f6d$exports.getClosestColorName)(color[i]);
                            let duplicateName = existingColorNames.includes(closest);
                            if (closest && !duplicateName) colorName = closest;
                        }
                        if (!colorName) colorName = (0, $c423ae23eb006f6d$exports.getRandomColorName)();
                        let newColor = new $W2lsj.BackgroundColor({
                            name: colorName,
                            colorKeys: color,
                            colorspace: "CAM02p",
                            ratios: ratios,
                            smooth: true
                        });
                        (0, $177b1a3f13a023d5$exports.addColorScale)(newColor, true);
                    });
                });
            }).then(()=>{
                preview.appendChild(para);
                setTimeout(()=>{
                    (0, $860250b19110ee55$exports.themeUpdateParams)();
                }, 100);
            });
        } else {
            para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
            preview.appendChild(para);
        }
    }
}
// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
const $ff299fd312fb395f$var$fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    `image/x-icon`
];
function $ff299fd312fb395f$var$validFileType(file) {
    return $ff299fd312fb395f$var$fileTypes.includes(file.type);
}
window.addColorsFromImage = $ff299fd312fb395f$var$addColorsFromImage;
$ff299fd312fb395f$exports = {
    addColorsFromImage: $ff299fd312fb395f$var$addColorsFromImage
};



var $8039994d1575cf98$exports = {};
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


var $hHLLK = parcelRequire("hHLLK");


var $doFvi = parcelRequire("doFvi");


var $6A7nx = parcelRequire("6A7nx");
function $8039994d1575cf98$var$sliderValue(e) {
    let id = e.target.id;
    let slider = document.getElementById(id);
    let labelId = id.replace("Slider", "Value");
    let label = document.getElementById(labelId);
    let labelValue = labelId.includes("Contrast") ? `${(0, $6A7nx.round)(slider.value * 100)}%` : `${slider.value}%`;
    label.innerHTML = labelValue;
}
function $8039994d1575cf98$var$sliderInput(e) {
    let value = e.target.value;
    let id = e.target.id;
    let property = id === "themeBrightnessSlider" ? "lightness" : id === "themeContrastSlider" ? "contrast" : id === "themeSaturationSlider" ? "saturation" : undefined;
    const updateThemeClass = Promise.resolve((0, $doFvi._theme)[property] = Number(value));
    updateThemeClass.then(()=>{
        (0, $2d53cd9ea854a169$exports.createOutputColors)();
        (0, $0a05a28c60be444f$exports.createOutputParameters)();
        if (document.getElementById("detailJustifiedWrapper")) {
            const currentColorId = document.querySelector('[id$="_colorName2"]').id;
            const currentColorName = document.getElementById(currentColorId).value;
            (0, $2d53cd9ea854a169$exports.createDetailOutputColors)(currentColorName);
        }
        const lineTypeSelect = document.getElementById("chartLineType");
        const lineType = lineTypeSelect.value;
        let isStep = lineType === "step" ? true : false;
        let chartLuminosities = Promise.resolve((0, $hHLLK.getLuminosities)());
        chartLuminosities.then(function(resolve) {
            (0, $7ea7fc020a95ce10$exports.createLuminosityChart)(resolve, isStep);
        });
        let chartRatios = Promise.resolve((0, $hHLLK.getThemeContrastRatios)());
        chartRatios.then(function(resolve) {
            (0, $7ea7fc020a95ce10$exports.createRatioChart)(resolve, isStep);
        });
    });
}
const $8039994d1575cf98$var$sliderB = document.getElementById("themeBrightnessSlider");
const $8039994d1575cf98$var$sliderC = document.getElementById("themeContrastSlider");
const $8039994d1575cf98$var$sliderD = document.getElementById("themeSaturationSlider");
$8039994d1575cf98$var$sliderB.addEventListener("input", $8039994d1575cf98$var$sliderValue);
$8039994d1575cf98$var$sliderB.addEventListener("input", (0, $6A7nx.throttle)($8039994d1575cf98$var$sliderInput, 10));
$8039994d1575cf98$var$sliderB.addEventListener("change", (0, $6A7nx.throttle)((0, $fd70b18c5f23e12d$exports.dispatchRatioInputEvents), 20));
$8039994d1575cf98$var$sliderC.addEventListener("input", $8039994d1575cf98$var$sliderValue);
$8039994d1575cf98$var$sliderC.addEventListener("input", (0, $6A7nx.throttle)($8039994d1575cf98$var$sliderInput, 10));
$8039994d1575cf98$var$sliderD.addEventListener("input", $8039994d1575cf98$var$sliderValue);
$8039994d1575cf98$var$sliderD.addEventListener("input", (0, $6A7nx.throttle)($8039994d1575cf98$var$sliderInput, 10));
window.sliderValue = $8039994d1575cf98$var$sliderValue;
window.sliderInput = $8039994d1575cf98$var$sliderInput;
$8039994d1575cf98$exports = {
    sliderValue: $8039994d1575cf98$var$sliderValue,
    sliderInput: $8039994d1575cf98$var$sliderInput
};


parcelRequire("4O58B");

var $72f1903a71e6f205$exports = {};
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

var $W2lsj = parcelRequire("W2lsj");


var $6A7nx = parcelRequire("6A7nx");
function $72f1903a71e6f205$var$addLightnessBulk(e) {
    let dialog = document.getElementById("addBulkLightnessDialog");
    dialog.classList.add("is-open");
    document.getElementById("dialogOverlay").style.display = "block";
}
function $72f1903a71e6f205$var$cancelLightnessBulk() {
    let dialog = document.getElementById("addBulkLightnessDialog");
    dialog.classList.remove("is-open");
    document.getElementById("dialogOverlay").style.display = "none";
}
function $72f1903a71e6f205$var$bulkLightnessInput(e) {
    let bulkInputs = document.getElementById("bulkLightnessColors");
    let bulkValues = bulkInputs.value.replace(/\r\n/g, "\n").replace(/[,\/]/g, "\n").replace(" ", "").replace(/['\/]/g, "").replace(/["\/]/g, "").replace(" ", "").split("\n");
    for(let i = 0; i < bulkValues.length; i++)if (!bulkValues[i].startsWith("#")) bulkValues[i] = "#" + bulkValues[i];
    let themeBackgroundColorArray = [
        (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).rgb(_theme.backgroundColorValue).r,
        (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).rgb(_theme.backgroundColorValue).g,
        (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).rgb(_theme.backgroundColorValue).b
    ];
    let contrasts = bulkValues.map((value)=>{
        let colorArray = [
            (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).rgb(value).r,
            (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).rgb(value).g,
            (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).rgb(value).b
        ];
        return (0, $6A7nx.round)($W2lsj.contrast(colorArray, themeBackgroundColorArray), 2);
    });
    (0, $fd70b18c5f23e12d$exports.addRatioInputs)(contrasts, bulkValues);
    (0, $fd70b18c5f23e12d$exports.sortRatios)();
    // Hide dialog
    $72f1903a71e6f205$var$cancelLightnessBulk();
    // Run colorinput
    themeUpdateParams();
    // clear inputs on close
    bulkInputs.value = " ";
}
window.addLightnessBulk = $72f1903a71e6f205$var$addLightnessBulk;
window.cancelLightnessBulk = $72f1903a71e6f205$var$cancelLightnessBulk;
window.bulkLightnessInput = $72f1903a71e6f205$var$bulkLightnessInput;
$72f1903a71e6f205$exports = {
    addLightnessBulk: $72f1903a71e6f205$var$addLightnessBulk,
    bulkLightnessInput: $72f1903a71e6f205$var$bulkLightnessInput,
    cancelLightnessBulk: $72f1903a71e6f205$var$cancelLightnessBulk
};



var $22d4a4efefbe7e8a$exports = {};
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
function $22d4a4efefbe7e8a$var$showToast() {
    let toast = document.getElementById("toastCVDpreview");
    if (toast.classList.contains("is-visible")) ;
    else {
        toast.classList.remove("spectrum-Exit");
        toast.classList.add("spectrum-Bounce");
        toast.classList.add("is-visible");
    }
}
function $22d4a4efefbe7e8a$var$hideToast() {
    let toast = document.getElementById("toastCVDpreview");
    toast.classList.remove("spectrum-Bounce");
    toast.classList.add("spectrum-Exit");
    toast.classList.remove("is-visible");
}
function $22d4a4efefbe7e8a$var$exitPreview() {
    cvdModeDropdown.value = "None";
    (0, $860250b19110ee55$exports.themeUpdate)();
    $22d4a4efefbe7e8a$var$hideToast();
}
function $22d4a4efefbe7e8a$var$neverShowToast() {
    let toast = document.getElementById("toastCVDpreview");
    toast.classList.remove("spectrum-Bounce");
    toast.classList.add("spectrum-Exit");
    toast.classList.remove("is-visible");
    toast.classList.add("hidden");
}
window.showToast = $22d4a4efefbe7e8a$var$showToast;
window.hideToast = $22d4a4efefbe7e8a$var$hideToast;
window.exitPreview = $22d4a4efefbe7e8a$var$exitPreview;
window.neverShowToast = $22d4a4efefbe7e8a$var$neverShowToast;
$22d4a4efefbe7e8a$exports = {
    showToast: $22d4a4efefbe7e8a$var$showToast,
    hideToast: $22d4a4efefbe7e8a$var$hideToast,
    exitPreview: $22d4a4efefbe7e8a$var$exitPreview,
    neverShowToast: $22d4a4efefbe7e8a$var$neverShowToast
};


var $5fc4408e9a5c4920$exports = {};
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
function $5fc4408e9a5c4920$var$addFromURLDialog() {
    let button = document.getElementById("addFromURLButton");
    button.addEventListener("click", $5fc4408e9a5c4920$var$addFromURL);
    let dialog = document.getElementById("addFromURLDialog");
    dialog.classList.add("is-open");
    document.getElementById("dialogOverlay").style.display = "block";
}
function $5fc4408e9a5c4920$var$cancelURL() {
    let dialog = document.getElementById("addFromURLDialog");
    dialog.classList.remove("is-open");
    document.getElementById("dialogOverlay").style.display = "none";
}
function $5fc4408e9a5c4920$var$addFromURL() {
    let input = document.getElementById("addFromURLinput");
    let value = input.value;
    let url = new URL(value);
    let params = new URLSearchParams(url.search.slice(1));
    let pathName = url.pathname;
    let crs, ratios, mode;
    let cName = predefinedColorNames[Math.floor(Math.random() * predefinedColorNames.length)];
    // // If parameters exist, use parameter; else use default html input values
    if (params.has("colorKeys")) {
        let cr = params.get("colorKeys");
        crs = cr.split(",");
    }
    if (params.has("ratios")) {
        // transform parameter values into array of numbers
        let rat = params.get("ratios");
        ratios = rat.split(",");
        ratios = ratios.map(Number);
        if (ratios[0] == 0) // if no parameter value, default to [3, 4.5]
        ratios = [
            3,
            4.5
        ];
    }
    if (params.has("mode")) mode = params.get("mode");
    (0, $177b1a3f13a023d5$exports.addColorScaleUpdate)(cName, crs, mode, ratios);
    $5fc4408e9a5c4920$var$cancelURL();
    // Run colorinput
    // throttle(themeUpdate, 10);
    // Clear out value when done
    input.value = " ";
}
window.addFromURLDialog = $5fc4408e9a5c4920$var$addFromURLDialog;
window.cancelURL = $5fc4408e9a5c4920$var$cancelURL;
window.addFromURL = $5fc4408e9a5c4920$var$addFromURL;
$5fc4408e9a5c4920$exports = {
    addFromURL: $5fc4408e9a5c4920$var$addFromURL,
    addFromURLDialog: $5fc4408e9a5c4920$var$addFromURLDialog,
    cancelURL: $5fc4408e9a5c4920$var$cancelURL
};


/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ let $a3c5c751f2a37a90$var$themeTitleInput = document.getElementById("themeNameInput");
let $a3c5c751f2a37a90$var$themeTitleTextField = document.getElementById("themeNameTextfield");
function $a3c5c751f2a37a90$var$handleKeyUp(event) {
    //key code for enter
    if (event.keyCode === 13) {
        event.preventDefault();
        event.target.blur();
        $a3c5c751f2a37a90$var$themeTitleTextField.classList.add("spectrum-Textfield--custom");
        let characters = $a3c5c751f2a37a90$var$themeTitleInput.value.length;
        $a3c5c751f2a37a90$var$themeTitleInput.style.width = `${characters + 4}ch`;
    }
}
$a3c5c751f2a37a90$var$themeTitleInput.addEventListener("focus", ()=>{
    $a3c5c751f2a37a90$var$themeTitleTextField.classList.remove("spectrum-Textfield--custom");
    $a3c5c751f2a37a90$var$themeTitleInput.style.width = `200px`;
});
$a3c5c751f2a37a90$var$themeTitleInput.addEventListener("blur", ()=>{
    $a3c5c751f2a37a90$var$themeTitleTextField.classList.add("spectrum-Textfield--custom");
    let characters = $a3c5c751f2a37a90$var$themeTitleInput.value.length;
    $a3c5c751f2a37a90$var$themeTitleInput.style.width = `${characters + 4}ch`;
});
$a3c5c751f2a37a90$var$themeTitleInput.addEventListener("keydown", (e)=>{
    $a3c5c751f2a37a90$var$handleKeyUp(e);
});



parcelRequire("4r4R6");
parcelRequire("9AhIT");
var $740907495f9a1e69$exports = {};
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

var $dlNIw = parcelRequire("dlNIw");

var $doFvi = parcelRequire("doFvi");

var $hHLLK = parcelRequire("hHLLK");

var $6A7nx = parcelRequire("6A7nx");
function $740907495f9a1e69$var$createSVGuiKit() {
    let colors = (0, $doFvi._theme).contrastColors;
    let bgLum = (0, (/*@__PURE__*/$parcel$interopDefault($dlNIw))).hsluv(colors[0].background).v;
    let isDark = bgLum > 50 ? false : true;
    var svgns = "http://www.w3.org/2000/svg";
    const rectSize = 80;
    const marginX = rectSize + 16;
    const offsetX = 166;
    const titleYOffset = 72;
    const marginY = rectSize + 57;
    const swatchesPerColor = colors[1].values.length;
    const numberOfColors = colors.length - 1;
    const maxColorWidth = marginX * swatchesPerColor + offsetX;
    const maxSvgWidth = maxColorWidth;
    const maxColorsHeight = marginY * numberOfColors + titleYOffset;
    const maxSvgHeight = maxColorsHeight;
    let textColorPositive = isDark ? "#fff" : "#000";
    let textColorInverse = isDark ? "#000" : "#fff";
    let svgWrapper = document.createElementNS(svgns, "svg");
    svgWrapper.setAttribute("xmlns", svgns);
    svgWrapper.setAttribute("version", "1.1");
    svgWrapper.setAttributeNS(null, "width", maxSvgWidth + "px");
    svgWrapper.setAttributeNS(null, "height", maxSvgHeight + "px");
    svgWrapper.setAttribute("aria-hidden", "true");
    let background = document.createElementNS(svgns, "rect");
    background.setAttribute("fill", colors[0].background);
    background.setAttribute("width", maxSvgWidth + "px");
    background.setAttribute("height", maxSvgHeight + "px");
    svgWrapper.appendChild(background);
    let outerElement = document.createElement("div");
    outerElement.id = "UIkit";
    // Create text element with theme url at bottom of kit
    let textTitle = document.createElementNS(svgns, "text");
    textTitle.setAttribute("x", 16);
    textTitle.setAttribute("y", 48);
    textTitle.setAttribute("fill", textColorPositive);
    textTitle.setAttribute("font-size", 32);
    textTitle.setAttribute("font-weight", 700);
    textTitle.setAttribute("font-family", "Adobe Clean, AdobeClean-Regular, Adobe Clean");
    textTitle.textContent = `${(0, $hHLLK.getThemeName)()}`;
    svgWrapper.appendChild(textTitle);
    for(let i = 0; i < colors.length; i++){
        if (!colors[i].name) ;
        else {
            let name = colors[i].name;
            let tokenColorName = `${name.replace(/\s+/g, "")}`; // these names will have had spaces removed already
            let values = colors[i].values;
            let increment = i - 0.75;
            let y = marginY * increment + titleYOffset;
            var title = document.createElementNS(svgns, "text");
            var descriptor = document.createElementNS(svgns, "text");
            var descriptor2 = document.createElementNS(svgns, "text");
            title.setAttribute("x", 16);
            title.setAttribute("y", y + 13);
            title.setAttribute("fill", textColorPositive);
            title.setAttribute("font-size", 16);
            title.setAttribute("font-weight", 700);
            title.setAttribute("font-family", "Adobe Clean, AdobeClean-Regular, Adobe Clean");
            title.textContent = (0, $6A7nx.capitalizeFirstLetter)(name);
            descriptor.setAttribute("x", 16);
            descriptor.setAttribute("y", y + 60);
            descriptor.setAttribute("fill", textColorPositive);
            descriptor.setAttribute("font-size", 11);
            descriptor.setAttribute("letter-spacing", 0.6);
            descriptor.setAttribute("font-weight", "bold");
            descriptor.setAttribute("font-family", "Adobe Clean, AdobeClean-Regular, Adobe Clean");
            descriptor.textContent = `Contrast with`;
            descriptor2.setAttribute("x", 16);
            descriptor2.setAttribute("y", y + 72);
            descriptor2.setAttribute("fill", textColorPositive);
            descriptor2.setAttribute("font-size", 11);
            descriptor2.setAttribute("letter-spacing", 0.6);
            descriptor2.setAttribute("font-weight", "bold");
            descriptor2.setAttribute("font-family", "Adobe Clean, AdobeClean-Regular, Adobe Clean");
            descriptor2.textContent = `background color`;
            svgWrapper.appendChild(title);
            svgWrapper.appendChild(descriptor);
            svgWrapper.appendChild(descriptor2);
            // loop each value to create a swatch
            for(let j = 0; j < values.length; j++){
                var rect = document.createElementNS(svgns, "rect");
                var text = document.createElementNS(svgns, "text");
                var subHead = document.createElementNS(svgns, "text");
                let x = marginX * j + offsetX;
                let textX = x + 8;
                let textY = y + rectSize - 8;
                let textColor = values[j].contrast > 4.5 ? textColorInverse : textColorPositive;
                rect.setAttributeNS(null, "x", x);
                rect.setAttributeNS(null, "y", y);
                rect.setAttributeNS(null, "width", "80");
                rect.setAttributeNS(null, "height", "80");
                rect.setAttributeNS(null, "rx", "8");
                rect.setAttributeNS(null, "fill", values[j].value);
                text.setAttribute("x", textX);
                text.setAttribute("y", textY);
                text.setAttribute("fill", textColor);
                text.setAttribute("font-size", 12);
                text.setAttribute("font-family", "Adobe Clean, AdobeClean-Regular, Adobe Clean");
                text.textContent = `${values[j].contrast}:1`;
                subHead.setAttribute("x", x);
                subHead.setAttribute("y", y - 11);
                subHead.setAttribute("fill", textColorPositive);
                subHead.setAttribute("font-size", 14);
                subHead.setAttribute("font-family", "Adobe Clean, AdobeClean-Regular, Adobe Clean");
                subHead.textContent = values[j].name.replace(tokenColorName, "");
                svgWrapper.appendChild(rect);
                svgWrapper.appendChild(text);
                svgWrapper.appendChild(subHead);
            }
        }
    }
    outerElement.appendChild(svgWrapper);
    document.body.appendChild(outerElement);
}
function $740907495f9a1e69$var$downloadUiKit() {
    $740907495f9a1e69$var$createSVGuiKit();
    let themeName = (0, $hHLLK.getThemeName)();
    let svg = document.getElementById("UIkit").innerHTML;
    let filename = `${themeName}.svg`;
    var blob = new Blob([
        `${svg}`
    ], {
        type: "image/svg+xml;charset=utf-8"
    });
    (0, $67uIO.saveAs)(blob, filename);
    document.getElementById("UIkit").remove();
}
window.downloadUiKit = $740907495f9a1e69$var$downloadUiKit;
document.getElementById("downloadThemeColorsSvg").addEventListener("click", ()=>{
    setTimeout(function() {
        $740907495f9a1e69$var$downloadUiKit();
    });
});
$740907495f9a1e69$exports = {
    createSVGuiKit: $740907495f9a1e69$var$createSVGuiKit,
    downloadUiKit: $740907495f9a1e69$var$downloadUiKit
};


var $9720abb0b401a4bb$exports = {};
/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ function $9720abb0b401a4bb$var$toggleSwatchContrast(e) {
    let on = e.target.checked;
    let wrapper = document.getElementById("swatchesOutputs");
    if (!on) wrapper.classList.add("hideSwatchContrast");
    else wrapper.classList.remove("hideSwatchContrast");
}
function $9720abb0b401a4bb$var$toggleSwatchLuminosity(e) {
    let on = e.target.checked;
    let wrapper = document.getElementById("swatchesOutputs");
    if (!on) wrapper.classList.add("hideSwatchLuminosity");
    else wrapper.classList.remove("hideSwatchLuminosity");
}
window.toggleSwatchContrast = $9720abb0b401a4bb$var$toggleSwatchContrast;
window.toggleSwatchLuminosity = $9720abb0b401a4bb$var$toggleSwatchLuminosity;
$9720abb0b401a4bb$exports = {
    toggleSwatchContrast: $9720abb0b401a4bb$var$toggleSwatchContrast,
    toggleSwatchLuminosity: $9720abb0b401a4bb$var$toggleSwatchLuminosity
};



var $jzSuI = parcelRequire("jzSuI");
parcelRequire("1lReL");
parcelRequire("jpWZ9");
var $4a3920cb4f3d0213$exports = {};
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
var $doFvi = parcelRequire("doFvi");



var $6A7nx = parcelRequire("6A7nx");

var $oZyht = parcelRequire("oZyht");

var $66fty = parcelRequire("66fty");
var $4a3920cb4f3d0213$require$extendChroma = $66fty.extendChroma;
$4a3920cb4f3d0213$require$extendChroma($oZyht);
window.sortColorScales = $4a3920cb4f3d0213$var$sortColorScales;
function $4a3920cb4f3d0213$var$sortColorScales() {
    // Create an overlay to show progress
    const wrapper = document.getElementById("themeColorWrapper");
    wrapper.style.opacity = 0.4;
    // Artificially pause
    setTimeout(()=>{
        // For each color scale, find the average hue of all key colors
        // Create a new array [ { hue: 0, color: Color }, etc]
        // which just nests each color scale in an object containing the hue
        let objArr = [];
        for(let i = 0; i < (0, $doFvi._theme).colors.length; i++){
            let currentKeys = (0, $doFvi._theme).colors[i].colorKeys;
            let hues = currentKeys.map((key)=>{
                return $oZyht(key).jch()[2];
            });
            let chromas = currentKeys.map((key)=>{
                return $oZyht(key).jch()[1];
            });
            let sumChromas = chromas.reduce((a, b)=>a + b, 0);
            let avgChromas = sumChromas / chromas.length || 0;
            let sumHues = hues.reduce((a, b)=>a + b, 0);
            let avgHues = sumHues / hues.length || 0;
            // Gray or near-gray should be placed at the top of
            // this sort function, so we force it artificially
            if (avgChromas < 10) avgHues = 0;
            // Hack to force placement of color that has hues
            // that cross over the 360deg threshold (ie, [1, 358])
            if (Math.max(...hues) > 340 && Math.min(...hues) < 20) avgHues = 360;
            objArr.push({
                hue: avgHues,
                color: (0, $doFvi._theme).colors[i]
            });
        }
        // Then, sort the new array by the hue key
        objArr.sort((a, b)=>{
            return a.hue - b.hue;
        });
        let sortedColors = objArr.map((item)=>{
            return item.color;
        });
        // Remove colors from theme before re-adding
        (0, $doFvi._theme).colors = [];
        // Then replace all DOM elements for colorscales with new ones so they're
        // presented in the same order as the theme has them.
        (0, $6A7nx.removeElementsByClass)("themeColor_item");
        for(let i = 0; i < sortedColors.length; i++)(0, $177b1a3f13a023d5$exports.addColorScale)(sortedColors[i]);
        (0, $860250b19110ee55$exports.themeUpdate)();
        wrapper.style.opacity = 1;
    }, 50);
}
$4a3920cb4f3d0213$exports = {
    sortColorScales: $4a3920cb4f3d0213$var$sortColorScales
};


var $508174e029aa5258$exports = {};
/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/ function $508174e029aa5258$var$togglePopover(e) {
    let thisId = e.target.id;
    let baseId;
    if (thisId.includes("button")) baseId = thisId.replace("button", "");
    if (thisId.includes("close")) baseId = thisId.replace("close", "");
    let targetId = `popover`.concat(baseId);
    let buttonId = `button`.concat(baseId);
    let button = document.getElementById(buttonId);
    let popover = document.getElementById(targetId);
    if (popover.classList.contains("is-open")) {
        popover.classList.remove("is-open");
        button.classList.remove("is-selected");
    } else {
        popover.classList.add("is-open");
        button.classList.add("is-selected");
    }
    // Remove open/selection states from all other buttons and popovers
    let popovers = document.getElementsByClassName("spectrum-Popover");
    let buttons = document.getElementsByClassName("spectrum-Popover-trigger");
    for(i = 0; i < popovers.length; i++)if (popovers[i].id !== targetId) popovers[i].classList.remove("is-open");
    for(i = 0; i < buttons.length; i++)if (buttons[i].id !== buttonId) buttons[i].classList.remove("is-selected");
}
window.togglePopover = $508174e029aa5258$var$togglePopover;
document.getElementById("buttonAdaptiveControls").addEventListener("click", $508174e029aa5258$var$togglePopover);
document.getElementById("closeAdaptiveControls").addEventListener("click", $508174e029aa5258$var$togglePopover);
document.getElementById("buttonAnalysisColorSpace").addEventListener("click", $508174e029aa5258$var$togglePopover);
document.getElementById("closeAnalysisColorSpace").addEventListener("click", $508174e029aa5258$var$togglePopover);
document.getElementById("buttonShareOptions").addEventListener("click", $508174e029aa5258$var$togglePopover);
document.getElementById("closeShareOptions").addEventListener("click", $508174e029aa5258$var$togglePopover);
$508174e029aa5258$exports = {
    togglePopover: $508174e029aa5258$var$togglePopover
};


parcelRequire("1X0rJ");
(0, (/*@__PURE__*/$parcel$interopDefault($lPtXq)))("./spectrum-css-icons.svg");
(0, (/*@__PURE__*/$parcel$interopDefault($lPtXq)))("./spectrum-icons.svg");

var $aSy1q = parcelRequire("aSy1q");
var $d0b19d18bc3ea283$require$readFileSync = $aSy1q.readFileSync;

var $kqltW = parcelRequire("kqltW");
const $d0b19d18bc3ea283$var$options = {
};

$kqltW().use((parcelRequire("3A3O3"))($d0b19d18bc3ea283$var$options)).process('<html dir="ltr">\n  <head>\n    <include src="src/htmlHead.html"></include>\n  </head>\n  <body class="spectrum spectrum--medium appFrame">\n    <div id="pageLoader">\n      <div class="spectrum-ProgressCircle spectrum-ProgressCircle--indeterminate spectrum-ProgressCircle--large">\n        <div class="spectrum-ProgressCircle-track"></div>\n        <div class="spectrum-ProgressCircle-fills">\n          <div class="spectrum-ProgressCircle-fillMask1">\n            <div class="spectrum-ProgressCircle-fillSubMask1">\n              <div class="spectrum-ProgressCircle-fill"></div>\n            </div>\n          </div>\n          <div class="spectrum-ProgressCircle-fillMask2">\n            <div class="spectrum-ProgressCircle-fillSubMask2">\n              <div class="spectrum-ProgressCircle-fill"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div id="page" style="opacity: 0">\n      <include src="src/views/header_theme.html"></include>\n\n      <include src="src/views/tab_home.html"></include>\n\n      <include src="src/views/tab_palette.html"></include>\n      <include src="src/views/tab_accessibility.html"></include>\n      <include src="src/views/tab_theme.html"></include>\n\n      <div id="dialogOverlay" style="display: none"></div>\n\n      <include src="src/views/dialog_bulkKeyColors.html"></include>\n      <include src="src/views/dialog_bulkLightnessStops.html"></include>\n      <include src="src/views/dialog_importURL.html"></include>\n\n      <include src="src/views/toast_cvdPreview.html"></include>\n    </div>\n\n    <script src="theme.js" type="module"></script>\n  </body>\n</html>\n').then((result)=>result);
window.updateParams = $d0b19d18bc3ea283$var$updateParams;
function $d0b19d18bc3ea283$var$updateParams() {
    let name = document.getElementById("themeNameInput").value;
    let ratios = (0, $hHLLK.getContrastRatioInputs)();
    let theme = {
        baseScale: (0, $doFvi._theme).backgroundColor.name,
        colorScales: (0, $doFvi._theme).colors.map((c)=>{
            return {
                name: c.name,
                colorKeys: c.colorKeys,
                colorspace: c.colorspace,
                ratios: ratios,
                smooth: c.smooth
            };
        }),
        lightness: (0, $doFvi._theme).lightness,
        contrast: (0, $doFvi._theme).contrast,
        saturation: (0, $doFvi._theme).saturation,
        formula: (0, $doFvi._theme).formula
    };
    let url = new URL(window.location);
    let params = new URLSearchParams(url.search.slice(1));
    params.set("name", name); // Theme name
    params.set("config", JSON.stringify(theme)); // Configurations
    window.history.replaceState({}, "", "?" + params); // update the page's URL.
}
new (0, (/*@__PURE__*/$parcel$interopDefault($7f3c1b36d41ba014$exports)))(".copyButton");
new (0, (/*@__PURE__*/$parcel$interopDefault($7f3c1b36d41ba014$exports)))(".themeOutputSwatch");
new (0, (/*@__PURE__*/$parcel$interopDefault($7f3c1b36d41ba014$exports)))(".copyThemeURL", {
    text: function() {
        $d0b19d18bc3ea283$var$updateParams();
        const params = window.location.href;
        let uri = window.location.toString();
        let cleanURL = uri.substring(0, uri.indexOf("?"));
        window.history.replaceState({}, document.title, cleanURL);
        return params;
    }
});
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
const $d0b19d18bc3ea283$var$mq = window.matchMedia("(prefers-color-scheme: dark)");
if ($d0b19d18bc3ea283$var$mq.matches) //dark mode
document.querySelector("body").classList.add("spectrum--darkest");
else //light mode
document.querySelector("body").classList.add("spectrum--light");
// Build the site based on URL parameters
(0, $922db13c1d19444e$exports.paramSetup)();
// Default to CAM02ch for charts modes
document.getElementById("chartsMode").value = "CAM02p";
document.getElementById("tabPanelColorScales").click();
document.getElementById("tabJSParameters").click();
document.getElementById("tabPalette").click();
document.getElementById("tabContrastingPairs").click();
document.getElementById("welcome").click();
document.getElementById("tabColorWheel").click();
window.onload = function() {
    (0, $jzSuI.pageLoader)();
};


//# sourceMappingURL=theme.6273801a.js.map
