/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style-index.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style-index.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/RubikIso.ttf */ "./src/fonts/RubikIso.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/fonts/StickNoBills.ttf */ "./src/fonts/StickNoBills.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: rubik-iso;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n    font-family: stick-no-bills;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n* {\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n}\n\nbody {\n    margin: 0;\n    background-color: #edf4fb;\n}\n\n#top {\n    background-color: #4992d3;\n    height: 15vh;\n    font-family: rubik-iso;\n    font-weight: bold;\n    color: white;\n    font-size: 5rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#mid {\n    height: 85vh;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    /* background-color: #edf4fb; */\n}\n\n#info {\n    align-self: center;\n    font-family: stick-no-bills;\n    font-size: 3rem;\n    margin-top: 1rem;\n}\n\nbutton {\n    width: 12rem;\n    align-self: center;\n    font-family: stick-no-bills;\n    font-size: 2rem;\n    background-color: #4992d3;\n    border: 3px solid #0357a0;\n    color: white;\n    font-weight: bolder;\n    border-radius: 10px;\n}\n\n#random-button, #flip-button {\n    width: 8rem;\n    font-size: 1.5rem;\n    margin-right: 20px;\n}\n\nbutton:hover {\n    background-color: #0357a0;\n    cursor: pointer;\n}\n\n#boards {\n    display: flex;\n    gap: 2rem;\n    justify-content: center;\n    margin-top: 2rem;\n}\n\n.grid-name {\n    font-family: stick-no-bills;\n    font-size: 2.5rem;\n    font-weight: bold;\n    text-align: center;\n    margin-bottom: 0.5rem;\n}\n\n.grid-row {\n    display: flex;\n}\n\n.grid-row-element {\n    height: 40px;\n    width: 40px;\n    border: 2px solid #0357a0;\n    /* cursor: crosshair; */\n}\n\n/* .grid-row-element-computer:hover, */ .playable:hover {\n    background-color: aquamarine;\n    cursor: crosshair;\n}\n\n.ship {\n    background-color: orange;\n}\n\n.miss {\n    background-color: greenyellow;\n}\n\n.hit {\n    background-color: red;\n}\n\n.sunk {\n    background-color: blueviolet;\n}\n\n#results {\n    font-size: x-large;\n}\n\n.blocks-flex {\n    display: flex;\n    gap: 5px;\n}\n\n.block-container {\n    display: flex;\n    margin-bottom: 5px;\n}\n\n.block {\n    height: 40px;\n    width: 40px;\n    border: 1px solid black;\n    background-color: orange;\n}\n\n.vertical {\n    flex-direction: column;\n}\n\n\n.drag-over {\n    border: dashed 3px red;\n}\n\n.hide {\n    display: none;\n}\n\n#player-name-div {\n    width: 30rem;\n    height: 10vh;\n    align-self: center;\n    font-family: stick-no-bills;\n    font-size: 1rem;\n    background-color: #4992d3;\n    border: 3px solid #0357a0;\n    color: white;\n    font-weight: bolder;\n    border-radius: 10px;\n    padding: 1rem;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 5px;\n}\n\n#player-name-input {\n    border-radius: 5px;\n    border: 1px solid #0357a0;\n    outline: none;\n}\n\n.grid-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#blocks {\n    margin-top: 10px;\n}\n\n@media only screen and (max-width: 850px) {\n    #top {\n        font-size: 2.5rem;\n        height: 5rem;\n    }\n\n    #boards {\n      flex-direction: column;\n      margin-top: 1rem;\n      gap: 1rem;\n    }\n\n    .grid-row-element {\n        height: 35px;\n        width: 35px;\n    }\n\n    #blocks {\n        display: none;\n    }\n\n    #flip-button {\n        display: none;\n    }\n\n    #random-button {\n        margin-left: 15px;\n    }\n\n    #info {\n        margin: 0;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style-index.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,4CAAmC;AACvC;;AAEA;IACI,2BAA2B;IAC3B,4CAAuC;AAC3C;;AAEA;IACI,sBAAsB;IACtB,iCAAiC;AACrC;;AAEA;IACI,SAAS;IACT,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;IACzB,YAAY;IACZ,sBAAsB;IACtB,iBAAiB;IACjB,YAAY;IACZ,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,+BAA+B;AACnC;;AAEA;IACI,kBAAkB;IAClB,2BAA2B;IAC3B,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,2BAA2B;IAC3B,eAAe;IACf,yBAAyB;IACzB,yBAAyB;IACzB,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,2BAA2B;IAC3B,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,uBAAuB;AAC3B;;AAEA,sCAAsC,EAAE;IACpC,4BAA4B;IAC5B,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,wBAAwB;AAC5B;;AAEA;IACI,sBAAsB;AAC1B;;;AAGA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,2BAA2B;IAC3B,eAAe;IACf,yBAAyB;IACzB,yBAAyB;IACzB,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;;IAEb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,QAAQ;AACZ;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI;QACI,iBAAiB;QACjB,YAAY;IAChB;;IAEA;MACE,sBAAsB;MACtB,gBAAgB;MAChB,SAAS;IACX;;IAEA;QACI,YAAY;QACZ,WAAW;IACf;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,SAAS;IACb;AACJ","sourcesContent":["@font-face {\n    font-family: rubik-iso;\n    src: url(../src/fonts/RubikIso.ttf);\n}\n\n@font-face {\n    font-family: stick-no-bills;\n    src: url(../src/fonts/StickNoBills.ttf);\n}\n\n* {\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n}\n\nbody {\n    margin: 0;\n    background-color: #edf4fb;\n}\n\n#top {\n    background-color: #4992d3;\n    height: 15vh;\n    font-family: rubik-iso;\n    font-weight: bold;\n    color: white;\n    font-size: 5rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#mid {\n    height: 85vh;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    /* background-color: #edf4fb; */\n}\n\n#info {\n    align-self: center;\n    font-family: stick-no-bills;\n    font-size: 3rem;\n    margin-top: 1rem;\n}\n\nbutton {\n    width: 12rem;\n    align-self: center;\n    font-family: stick-no-bills;\n    font-size: 2rem;\n    background-color: #4992d3;\n    border: 3px solid #0357a0;\n    color: white;\n    font-weight: bolder;\n    border-radius: 10px;\n}\n\n#random-button, #flip-button {\n    width: 8rem;\n    font-size: 1.5rem;\n    margin-right: 20px;\n}\n\nbutton:hover {\n    background-color: #0357a0;\n    cursor: pointer;\n}\n\n#boards {\n    display: flex;\n    gap: 2rem;\n    justify-content: center;\n    margin-top: 2rem;\n}\n\n.grid-name {\n    font-family: stick-no-bills;\n    font-size: 2.5rem;\n    font-weight: bold;\n    text-align: center;\n    margin-bottom: 0.5rem;\n}\n\n.grid-row {\n    display: flex;\n}\n\n.grid-row-element {\n    height: 40px;\n    width: 40px;\n    border: 2px solid #0357a0;\n    /* cursor: crosshair; */\n}\n\n/* .grid-row-element-computer:hover, */ .playable:hover {\n    background-color: aquamarine;\n    cursor: crosshair;\n}\n\n.ship {\n    background-color: orange;\n}\n\n.miss {\n    background-color: greenyellow;\n}\n\n.hit {\n    background-color: red;\n}\n\n.sunk {\n    background-color: blueviolet;\n}\n\n#results {\n    font-size: x-large;\n}\n\n.blocks-flex {\n    display: flex;\n    gap: 5px;\n}\n\n.block-container {\n    display: flex;\n    margin-bottom: 5px;\n}\n\n.block {\n    height: 40px;\n    width: 40px;\n    border: 1px solid black;\n    background-color: orange;\n}\n\n.vertical {\n    flex-direction: column;\n}\n\n\n.drag-over {\n    border: dashed 3px red;\n}\n\n.hide {\n    display: none;\n}\n\n#player-name-div {\n    width: 30rem;\n    height: 10vh;\n    align-self: center;\n    font-family: stick-no-bills;\n    font-size: 1rem;\n    background-color: #4992d3;\n    border: 3px solid #0357a0;\n    color: white;\n    font-weight: bolder;\n    border-radius: 10px;\n    padding: 1rem;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 5px;\n}\n\n#player-name-input {\n    border-radius: 5px;\n    border: 1px solid #0357a0;\n    outline: none;\n}\n\n.grid-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#blocks {\n    margin-top: 10px;\n}\n\n@media only screen and (max-width: 850px) {\n    #top {\n        font-size: 2.5rem;\n        height: 5rem;\n    }\n\n    #boards {\n      flex-direction: column;\n      margin-top: 1rem;\n      gap: 1rem;\n    }\n\n    .grid-row-element {\n        height: 35px;\n        width: 35px;\n    }\n\n    #blocks {\n        display: none;\n    }\n\n    #flip-button {\n        display: none;\n    }\n\n    #random-button {\n        margin-left: 15px;\n    }\n\n    #info {\n        margin: 0;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style-index.css":
/*!*****************************!*\
  !*** ./src/style-index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style-index.css */ "./node_modules/css-loader/dist/cjs.js!./src/style-index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBlock": () => (/* binding */ createBlock),
/* harmony export */   "createButton": () => (/* binding */ createButton),
/* harmony export */   "displayGameResults": () => (/* binding */ displayGameResults),
/* harmony export */   "generateGrid": () => (/* binding */ generateGrid),
/* harmony export */   "playerMove": () => (/* binding */ playerMove),
/* harmony export */   "setBlockContainerWidthHeight": () => (/* binding */ setBlockContainerWidthHeight),
/* harmony export */   "updateBoard": () => (/* binding */ updateBoard),
/* harmony export */   "updateBoardShips": () => (/* binding */ updateBoardShips)
/* harmony export */ });
function generateGrid(size, player, container, playableClass = null) {
    const content = document.getElementById(container);
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid-container');
    gridContainer.classList.add(player);
    const playerName = document.createElement('div');
    playerName.classList.add('grid-name');
    playerName.textContent = player + `'s board`;
    const grid = document.createElement('div');
    grid.classList.add('grid');
    
    for (let i = 0; i < size; i++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add('grid-row');
        for (let j = 0; j < size; j++) {
            let gridRowElement = document.createElement('div');
            gridRowElement.classList.add('grid-row-element');
            gridRowElement.classList.add('grid-row-element-' + player);
            gridRowElement.setAttribute('x-cord', i);
            gridRowElement.setAttribute('y-cord', j);
            if (playableClass !== null) {
                gridRowElement.classList.add(playableClass);
            }
            gridRow.appendChild(gridRowElement);
        }
        grid.appendChild(gridRow);
    }

    gridContainer.appendChild(playerName);
    gridContainer.appendChild(grid);

    // create main container for player blocks
    if (playableClass === null) {
        const blocks = document.createElement('div');
        blocks.id = 'blocks';
        gridContainer.appendChild(blocks);
    }

    content.appendChild(gridContainer);
}

// returns coordinates when the user selects a box on the board
function playerMove(gridElementClass) {
    return new Promise ((resolve) => {
        const gridElement = document.querySelectorAll(gridElementClass);
    
        let values = [];
        gridElement.forEach(element => element.addEventListener('click', (e) => {
            let x = parseInt(e.currentTarget.getAttribute('x-cord'));
            let y = parseInt(e.currentTarget.getAttribute('y-cord'));
            if (values.length === 2) {
                resolve(values);
            } else {
                values.push(x, y);
                e.currentTarget.classList.remove(gridElementClass.substring(1));
                if (values.length === 2) {
                    resolve(values);
                }
            }
        }));
    })
}

// takes a gameboard array (from the player or computer object)
// iterates through the array and changes the grid accordingly by adding classes to the elements
function updateBoard(gameboard, gridClass) {
    for (let i = 0; i < gameboard.length; i++) {
        for (let j = 0; j < gameboard.length; j++) {
            let gridElement = document.querySelector(`.${gridClass}[x-cord="${i}"][y-cord="${j}"]`);
            if (gameboard[i][j].hit === true && gameboard[i][j].hasSunkShip === true) {
                gridElement.classList.add('sunk');
            } else if (gameboard[i][j].hit === true && gameboard[i][j].shipID !== null) {
                gridElement.classList.add('hit');
            } else if (gameboard[i][j].hit === true && gameboard[i][j].shipID === null) {
                gridElement.classList.add('miss');
            }
        }
    }
}

// displays ships on the grid (for random player ship placement)
function updateBoardShips(gameboard, gridClass) {
    for (let i = 0; i < gameboard.length; i++) {
        for (let j = 0; j < gameboard.length; j++) {
            let gridElement = document.querySelector(`.${gridClass}[x-cord="${i}"][y-cord="${j}"]`);
            if (gameboard[i][j].shipID !== null) {
                gridElement.classList.add('ship');
            }
        }
    }
}

function displayGameResults(infoElement, computerObject) {
    const results = document.getElementById(infoElement);
    if (computerObject.board.areAllShipsSunk() === true) {
        results.textContent = 'Player won!';
    } else {
        results.textContent = 'Computer won!';
    }
}

function createBlock(size, customID = size) {
    const blockContainer = document.createElement('div');
    blockContainer.classList.add('block-container');
    blockContainer.id = `block-container-${customID}`;

    for (let i = 0; i < size; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        blockContainer.appendChild(block);
    }

    blockContainer.draggable = true;
    return blockContainer;
}

// creates a new button and returns the dom element
function createButton(text) {
    const button = document.createElement('button');
    let id = `${text}-button`;
    button.textContent = `${text}`;
    button.id = id;
    const infoDiv = document.getElementById('info');
    infoDiv.appendChild(button);

    return document.getElementById(id);
}

// width of block containers = number of blocks * their size; fixes container width issue on Chrome
function setBlockContainerWidthHeight(vertical = false) {
    const blockContainers = document.querySelectorAll('.block-container');
    const blockWidth = 40;
    for (let i = 0; i < blockContainers.length; i++) {
        const blockLength = blockContainers[i].getElementsByTagName('div').length;

        if (vertical === false) {
            blockContainers[i].style.width = `${blockLength * blockWidth}px`;
            blockContainers[i].style.height = `40px`;
        } else {
            blockContainers[i].style.height = `${blockLength * blockWidth}px`;
            blockContainers[i].style.width = `40px`;
        }
    }
}



/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeGame": () => (/* binding */ initializeGame)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/player.js");



async function initializeGame(size = 10) {
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.generateGrid)(size, 'player', 'boards');
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.generateGrid)(size, 'computer', 'boards', 'playable');

    let player1 = new _player__WEBPACK_IMPORTED_MODULE_1__.Player('player1', size);
    let computer1 = new _player__WEBPACK_IMPORTED_MODULE_1__.Computer('computer1', size);

    // random ships for computer
    computer1.board.createShips(null, 5);
    computer1.board.createShips(null, 4);
    computer1.board.createShips(null, 3);
    computer1.board.createShips(null, 3);
    computer1.board.createShips(null, 2);

    // this function either returns previosuly declared player1 object with manualy placed ships 
    // or a new player object with randomly placed ships
    let playerObject = await dragAndDrop(player1, size);

    // start the game if all ships are placed
    gameWithAI(playerObject, computer1);
}

// drag and drop players ships
function dragAndDrop(player1, size) {
        return new Promise ((resolve) => {
            // removes existing drag & drop blocks first
            document.querySelectorAll('.block-container').forEach(block => block.remove());

            // recreates them
            const mainBlockContainer = document.getElementById('blocks');
            mainBlockContainer.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createBlock)(5));
            mainBlockContainer.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createBlock)(4));
            mainBlockContainer.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createBlock)(3));
            mainBlockContainer.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createBlock)(3, '3-2'));
            mainBlockContainer.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_0__.createBlock)(2));

            // width of block containers = number of blocks inside * their width
            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.setBlockContainerWidthHeight)();

            // create buttons and select them by id
            const randomButton = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createButton)('random');
            const flipButton = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createButton)('flip');

            const blockToDrag = document.querySelectorAll('.block-container');
            blockToDrag.forEach(block => block.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', e.currentTarget.id);
            }))

            const gridBoxes = document.querySelectorAll('.grid-row-element-player');
            gridBoxes.forEach(box => {
                box.addEventListener('dragover', dragOver);
                box.addEventListener('dragleave', dragLeave);
                box.addEventListener('drop', drop);
            });

            function dragOver(e) {
                e.preventDefault();
                e.target.classList.add('drag-over');
            }
            
            function dragLeave(e) {
                e.target.classList.remove('drag-over');
            }
            
            function drop(e) {
                e.target.classList.remove('drag-over');
            
                // element's id
                const id = e.dataTransfer.getData('text/plain');
        
                // coordinates of the grid box where the ship block will be dropped
                let x = e.currentTarget.getAttribute('x-cord');
                let y = e.currentTarget.getAttribute('y-cord');

                // get block's length; each box inside = ship size
                const blockLength = document.getElementById(id).getElementsByTagName('div').length;

                // do nothing if ship / block is out of bounds or there's already a ship in its path
                // horizontal
                if (document.getElementById(id).classList.contains('vertical') === false) {
                    for (let i = 0; i < blockLength; i++) {
                        if (document.querySelector(`.grid-row-element-player[x-cord="${x}"][y-cord="${parseInt(y) + i}"]`) == undefined || 
                        document.querySelector(`.grid-row-element-player[x-cord="${x}"][y-cord="${parseInt(y) + i}"]`).classList.contains('ship') == true) {
                            return;
                        }
                    }
                // vertical
                } else {
                    for (let i = 0; i < blockLength; i++) {
                        if (document.querySelector(`.grid-row-element-player[x-cord="${parseInt(x) + i}"][y-cord="${y}"]`) == undefined || 
                        document.querySelector(`.grid-row-element-player[x-cord="${parseInt(x) + i}"][y-cord="${y}"]`).classList.contains('ship') == true) {
                            return;
                        }
                    }
                }
        
                // if the ship / block can be placed, get the cords and create a new ship
                let arrayCords = [];
                // horizontal
                if (document.getElementById(id).classList.contains('vertical') === false) {
                    for (let i = 0; i < blockLength; i++) {
                        let doc = document.querySelector(`.grid-row-element-player[x-cord="${x}"][y-cord="${parseInt(y) + i}"]`);
                        doc.classList.add('ship');
                        document.getElementById(id).classList.add('hide');
            
                        arrayCords.push([parseInt(x), parseInt(y) + i]);
                    }
                // vertical
                } else {
                    for (let i = 0; i < blockLength; i++) {
                        let doc = document.querySelector(`.grid-row-element-player[x-cord="${parseInt(x) + i}"][y-cord="${y}"]`);
                        doc.classList.add('ship');
                        document.getElementById(id).classList.add('hide');
                        arrayCords.push([parseInt(x) + i, parseInt(y)]);
                    }
                }
                
                // creates a new ship based on the cords
                player1.board.createShips(arrayCords);

                if (player1.board.numberOfShips === 5) { 
                    randomButton.classList.add('hide');
                    flipButton.classList.add('hide');
                    resolve(player1);
                }
            }

            // flips the ship blocks horizontally or vertically
            flipButton.addEventListener('click', () => {
                if (blockToDrag[0].classList.contains('vertical') === false) {
                    blockToDrag.forEach(block => block.classList.add('vertical'));
                    mainBlockContainer.classList.add('blocks-flex');
                    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.setBlockContainerWidthHeight)(true);
                } else {
                    blockToDrag.forEach(block => block.classList.remove('vertical'));
                    mainBlockContainer.classList.remove('blocks-flex');
                    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.setBlockContainerWidthHeight)();
                }
            })

            // places player's ships randomly
            randomButton.addEventListener('click', (e) => {
                // remove buttons and blocks
                e.currentTarget.classList.add('hide');
                mainBlockContainer.classList.add('hide');
                flipButton.classList.add('hide');

                // clear player and computer boards and then recreate them
                const grids = document.querySelectorAll('.grid-container');
                grids[0].remove();
                grids[1].remove();
                
                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.generateGrid)(size, 'player', 'boards');
                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.generateGrid)(size, 'computer', 'boards', 'playable');

                // create a new player object
                player1 = new _player__WEBPACK_IMPORTED_MODULE_1__.Player('player1', size);

                // create new ships randomly and show them
                player1.board.createShips(null, 5);
                player1.board.createShips(null, 4);
                player1.board.createShips(null, 3);
                player1.board.createShips(null, 3);
                player1.board.createShips(null, 2);
                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.updateBoardShips)(player1.board.gameboardArray, 'grid-row-element-player');

                resolve(player1);
            })
        })
}

// computer makes a random move first but checks adjacent boxes after hitting a ship until it's sunk
async function gameWithAI(playerObject, computerObject) {
    // the game ends when all player or computer ships are sunk
    while (computerObject.board.areAllShipsSunk() === false && playerObject.board.areAllShipsSunk() === false) {
        
        // Player plays
        // allows player to select a box on the computer's grid and get its coordinates
        let cords = await (0,_dom__WEBPACK_IMPORTED_MODULE_0__.playerMove)('.playable');
        playerObject.fire(cords, computerObject.board);
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.updateBoard)(computerObject.board.gameboardArray, 'grid-row-element-computer');

        // Computer plays
        // if computer found any ships in previous moves it will try hitting and sinking the first found ship
        if (computerObject.foundPlayerShips.length > 0) {
            let foundShipID = computerObject.foundPlayerShips[0].shipID;

            // removes empty subarrays 
            computerObject.foundPlayerShips[0].possibleMoves = computerObject.AIRemoveArraysWithEmptyMoves(computerObject.foundPlayerShips[0].possibleMoves);

            let cordss = computerObject.foundPlayerShips[0].possibleMoves[0][0];
            computerObject.fire(cordss, playerObject.board);

            // adds a new ship to the foundShips array if computer hit another ship 
            if (playerObject.board.gameboardArray[cordss[0]][cordss[1]].shipID != foundShipID && 
                playerObject.board.gameboardArray[cordss[0]][cordss[1]].shipID !== null) {
                computerObject.AIFoundShip(cordss, playerObject);
            }

            // removes the entire subarray with e.g. possible horizontal left moves if the coordinates didn't have the ship
            if (playerObject.board.gameboardArray[cordss[0]][cordss[1]].shipID != foundShipID) {
                computerObject.foundPlayerShips[0].possibleMoves.shift();
            // if there's a hit, removes just the first element from this subarray, so the computer can continue with this in the next move
            } else {
                computerObject.foundPlayerShips[0].possibleMoves[0].shift();
            }

            // remove the ship from the foundShips array if computer has hit and sunk it
            if (playerObject.board.gameboardArray[cordss[0]][cordss[1]].shipID == foundShipID && 
                playerObject.board.gameboardArray[cordss[0]][cordss[1]].hasSunkShip === true) {
                computerObject.foundPlayerShips.shift();
            }

        // if the foundShips array is empty, computer will make a random move instead
        } else {
            let computerPlaysCords = computerObject.randomMove(playerObject.board);
            // if computer hit a ship, add it to the found ships array
            computerObject.AIFoundShip(computerPlaysCords, playerObject);
        }

        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.updateBoard)(playerObject.board.gameboardArray, 'grid-row-element-player');
    }
    
    // display game results when all computer's or player's ships have been sunk
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.displayGameResults)('info', computerObject);
}



/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");


class Gameboard {
    constructor(size) { // size is ususually 10 (so 10x10=100)
        this.gameboardArray = this.generateGameboardArray(size);
        this.ships = [];
        this.numberOfShips = 0; // 5 max
        this.sunkShips = 0;
    }

    // creates a new Ship object and pushes it to the ships array
    // and then places that ship on the board
    createShips(arrayWithCoordinates = null, shipSize = null) {
        if (this.numberOfShips < 5) {
            // random cords
            if (arrayWithCoordinates === null) {
                let randomCords = this.getRandomShipCords(shipSize);
                let newShip = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](randomCords);
                this.ships.push(newShip);
                this.placeShip(randomCords, this.numberOfShips);
            // provided cords
            } else {
                let newShip = new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](arrayWithCoordinates);
                this.ships.push(newShip);
                this.placeShip(arrayWithCoordinates, this.numberOfShips);
            }
            this.numberOfShips++;
        }
    }

    // accepts coordinates like [[0, 0], [0, 1], [0, 2]]; shipID = numberOfShips
    placeShip(arrayWithCoordinates, shipID) {
        for (let i = 0; i < arrayWithCoordinates.length; i++) {
            let x = arrayWithCoordinates[i][0];
            let y = arrayWithCoordinates[i][1];
            this.gameboardArray[x][y].shipID = shipID;
        }
    }

    getRandomShipCords(shipSize) {
        let gameboardArraySize = this.gameboardArray.length;
        
        while (true) {
            let randomX = Math.floor(Math.random() * gameboardArraySize);
            let randomY = Math.floor(Math.random() * gameboardArraySize);
    
            if (this.gameboardArray[randomX][randomY].shipID === null) {
                let cordsArray = [];
                // 0 - above; 1 - right; 2 - below; 3 - left
                let randomDirection = Math.floor(Math.random() * 4);
                for (let i = 0; i < shipSize; i++) {
                    // above
                    if (randomDirection === 0) {
                        if (this.gameboardArray[randomX - i] !== undefined && 
                            this.gameboardArray[randomX - i][randomY].shipID === null) {
                            cordsArray.push([randomX - i, randomY]);
                        }
                    // right
                    } else if (randomDirection === 1) {
                        if (this.gameboardArray[randomX][randomY + i] !== undefined && 
                            this.gameboardArray[randomX][randomY + i].shipID === null) {
                            cordsArray.push([randomX, randomY + i]);
                        }
                    // below
                    } else if (randomDirection === 2) {
                        if (this.gameboardArray[randomX + i] !== undefined && 
                            this.gameboardArray[randomX + i][randomY].shipID === null) {
                            cordsArray.push([randomX + i, randomY]);
                        }
                    // left
                    } else if (randomDirection === 3) {
                        if (this.gameboardArray[randomX][randomY - i] !== undefined && 
                            this.gameboardArray[randomX][randomY - i].shipID === null) {
                            cordsArray.push([randomX, randomY - i]);
                        }
                    }
                }

                if (cordsArray.length === shipSize) {
                    return cordsArray;
                }
            }
        }
    }

    receiveAttack(x, y) {
        if (this.gameboardArray[x][y].hit === false) {
            this.gameboardArray[x][y].hit = true;
            let shipID = this.gameboardArray[x][y].shipID;
            if (shipID !== null) {
                this.ships[shipID].hit([x, y]); // ship id = position in the ships array
                // check if sunk
                if (this.ships[shipID].isSunk()) {
                    this.sunkShipAction(this.ships[shipID].shipArray);
                }
            }
        }
    }

    sunkShipAction(ship) {
        // iterates through a ship's arrray ( like [[0, 0], [0, 1], [0, 2]] ) to get its cords
        for (let sunkShipCord = 0; sunkShipCord < ship.length; sunkShipCord++) {
            // e.g. [0, 2] x = 0; y = 2
            let x = ship[sunkShipCord][0];
            let y = ship[sunkShipCord][1];
            // changes the gameboard's object to show that this coordinate has a sunk ship now
            this.gameboardArray[x][y].hasSunkShip = true;
        }
        this.sunkShips++;
    }

    areAllShipsSunk() {
        if (this.sunkShips === this.numberOfShips) {
            return true;
        }
        return false;
    }

    generateGameboardArray(size) {
        let gameboardArray = [];
        for (let i = 0; i < size; i++) {
            gameboardArray[i] = [];
            for (let j = 0; j < size; j++) {
                gameboardArray[i][j] = {shipID: null, hit: false, hasSunkShip: false };
            }
        }
        return gameboardArray;
    }
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boardScreen": () => (/* binding */ boardScreen),
/* harmony export */   "upperScreen": () => (/* binding */ upperScreen)
/* harmony export */ });
function upperScreen() {
    const content = document.getElementById('content');

    const top = document.createElement('div');
    top.id = 'top';
    top.textContent = 'Battleship Game';

    content.appendChild(top);
}

function boardScreen() {
    const content = document.getElementById('content');

    const mid = document.createElement('div');
    mid.id = 'mid';
    const boards = document.createElement('div');
    boards.id = 'boards';
    const info = document.createElement('div');
    info.id = 'info';

    // const blocks = document.createElement('div');
    // blocks.id = 'blocks';

    const button = document.createElement('button');
    button.id = 'restart-btn';
    button.textContent = 'Start Game';

    mid.appendChild(boards);
    // mid.appendChild(blocks);
    mid.appendChild(info);
    mid.appendChild(button);
    content.appendChild(mid);
}



/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Computer": () => (/* binding */ Computer),
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


class Player {
    constructor(name, boardSize = 10) {
        this.name = name;
        this.board = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](boardSize);
    }

    fire(cords, opponentGameboard) { // cords [x, y]
        opponentGameboard.receiveAttack(cords[0], cords[1]);
    }
}

class Computer extends Player {
    constructor(name, boardSize = 10) {
        super(name, boardSize);
        this.foundPlayerShips = [];
    }

    randomMove(opponentGameboard) {
        let randomX;
        let randomY;
        
        while (true) {
            randomX = Math.floor(Math.random() * opponentGameboard.gameboardArray.length);
            randomY = Math.floor(Math.random() * opponentGameboard.gameboardArray.length);
    
            if (opponentGameboard.gameboardArray[randomX][randomY].hit === false) {
                this.fire([randomX, randomY], opponentGameboard);
                return [randomX, randomY];
            }
        }
    }

    // adds hit player's ship and next possible moves (to sink it) to the array
    AIFoundShip(cords, playerObject) {
        let x = cords[0];
        let y = cords[1];
        let boardElement = playerObject.board.gameboardArray[x][y];
        let checkIfShipInArray = this.AICheckIfFoundShipAlreadyInArray(boardElement.shipID);
        
        if (boardElement.shipID !== null && checkIfShipInArray === false) {
            let allPossibleMoves = [];
            let horizontalLeft = this.AIGetPossibleMovesHorizontal(cords, boardElement.shipID, playerObject);
            let horizontalRight = this.AIGetPossibleMovesHorizontal(cords, boardElement.shipID, playerObject, false);
            let verticalUp = this.AIGetPossibleMovesVertical(cords, boardElement.shipID, playerObject);
            let verticalDown = this.AIGetPossibleMovesVertical(cords, boardElement.shipID, playerObject, false);

            allPossibleMoves.push(horizontalLeft, horizontalRight, verticalUp, verticalDown);
            
            this.foundPlayerShips.push(
                {
                    shipID: boardElement.shipID, 
                    foundAtCords: cords, 
                    possibleMoves: allPossibleMoves
                }
            );
        }
    }

    // checks if a ship is already in the array to avoid duplicates 
    AICheckIfFoundShipAlreadyInArray(shipID) {
        for (let i = 0; i < this.foundPlayerShips.length; i++) {
            if (this.foundPlayerShips[i].shipID == shipID) {
                return true;
            }
        }
        return false;
    }

    AIGetPossibleMovesHorizontal(cords, shipID, playerObject, horizontalLeft = true) {
        let shipLength = playerObject.board.ships[shipID].shipArray.length;
        let x = cords[0];
        let y = cords[1];
        let possibleMovesArray = [];
        
        if (horizontalLeft === true) {
            // left option
            for (let i = 1; i < shipLength; i++) {
                if (playerObject.board.gameboardArray[x][y - i] !== undefined && 
                    playerObject.board.gameboardArray[x][y - i].hit === false) {
                    possibleMovesArray.push([x, y - i]);
                } else {
                    break;
                }
            }
        } else {
            // right option
            for (let i = 1; i < shipLength; i++) {
                if (playerObject.board.gameboardArray[x][y + i] !== undefined && 
                    playerObject.board.gameboardArray[x][y + i].hit === false) {
                    possibleMovesArray.push([x, y + i]);
                } else {
                    break;
                }
            }
        }
        return possibleMovesArray;
    }

    AIGetPossibleMovesVertical(cords, shipID, playerObject, verticalUp = true) {
        let shipLength = playerObject.board.ships[shipID].shipArray.length;
        let x = cords[0];
        let y = cords[1];
        let possibleMovesArray = [];
        
        if (verticalUp === true) {
            // up option
            for (let i = 1; i < shipLength; i++) {
                if (playerObject.board.gameboardArray[x - i] !== undefined && 
                    playerObject.board.gameboardArray[x - i][y].hit === false) {
                    possibleMovesArray.push([x - i, y]);
                } else {
                    break;
                }
            }
        } else {
            // down option
            for (let i = 1; i < shipLength; i++) {
                if (playerObject.board.gameboardArray[x + i] !== undefined && 
                    playerObject.board.gameboardArray[x + i][y].hit === false) {
                    possibleMovesArray.push([x + i, y]);
                } else {
                    break;
                }
            }
        }
        return possibleMovesArray;
    }

    // removes empty subarrays with possible moves
    AIRemoveArraysWithEmptyMoves(movesArray) {
        let newArray = [];
        for (let i = 0; i < movesArray.length; i++) {
            if (movesArray[i].length !== 0) {
                newArray.push(movesArray[i]);
            }
        }
        return newArray;
    }
}



/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
    constructor(arrayWithCoordinates) {
        // e.g. [[0, 0], [0, 1], [0, 2]] or [[0, 0], [1, 0], [2, 0]]
        this.shipArray = arrayWithCoordinates;
        this.hitsArray = [];
    }

    // e.g. [0, 0]
    hit(cordArray) {
        // checks if the coordinates are already in the hitsArray (to avoid the same values multiple times) 
        // and if they match the values in the ship array (accept only values relevant to this ship)
        if (this.checkIfCordsAlreadyInArray(this.hitsArray, cordArray) === false && this.checkIfCordsAlreadyInArray(this.shipArray, cordArray)) {
            this.hitsArray.push(cordArray);
        }
    }

    // e.g. hitsArray = [[1, 2], [3, 4]]
    checkIfCordsAlreadyInArray(hitsArray, cordsArray) {
        for (let i = 0; i < hitsArray.length; i++) {
            if (cordsArray[0] === hitsArray[i][0] && cordsArray[1] === hitsArray[i][1]) {
                return true;
            }
        }
        return false;
    }

    isSunk() {
        if (this.shipArray.length === this.hitsArray.length) {
            return true;
        } else {
            return false;
        }
    }
}

/***/ }),

/***/ "./src/fonts/RubikIso.ttf":
/*!********************************!*\
  !*** ./src/fonts/RubikIso.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88a94199325f890b981d.ttf";

/***/ }),

/***/ "./src/fonts/StickNoBills.ttf":
/*!************************************!*\
  !*** ./src/fonts/StickNoBills.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da94bf7e6e547a00063b.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style-index.css */ "./src/style-index.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/game.js");




(0,_home__WEBPACK_IMPORTED_MODULE_1__.upperScreen)();
(0,_home__WEBPACK_IMPORTED_MODULE_1__.boardScreen)();

const restartButton = document.getElementById('restart-btn');
restartButton.addEventListener('click', (e) => {
    e.currentTarget.textContent = 'Restart Game'

    // removes existing boards
    const grids = document.querySelectorAll('.grid-container');
    if (grids.length === 2) {
        grids[0].remove();
        grids[1].remove();
        document.getElementById('info').textContent = '';
    }
    
    (0,_game__WEBPACK_IMPORTED_MODULE_2__.initializeGame)();
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQTJCO0FBQ3VCO0FBQ1Y7O0FBRXhDLGtEQUFXO0FBQ1gsa0RBQVc7O0FBRVg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFjO0FBQ2xCLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL3N0eWxlLWluZGV4LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc3R5bGUtaW5kZXguY3NzPzIwNWMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXBzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcHMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXBzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvZm9udHMvUnViaWtJc28udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2ZvbnRzL1N0aWNrTm9CaWxscy50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBydWJpay1pc287XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBzdGljay1uby1iaWxscztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmNGZiO1xcbn1cXG5cXG4jdG9wIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5OTJkMztcXG4gICAgaGVpZ2h0OiAxNXZoO1xcbiAgICBmb250LWZhbWlseTogcnViaWstaXNvO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jbWlkIHtcXG4gICAgaGVpZ2h0OiA4NXZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNlZGY0ZmI7ICovXFxufVxcblxcbiNpbmZvIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogc3RpY2stbm8tYmlsbHM7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEycmVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBzdGljay1uby1iaWxscztcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk5MmQzO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDM1N2EwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNyYW5kb20tYnV0dG9uLCAjZmxpcC1idXR0b24ge1xcbiAgICB3aWR0aDogOHJlbTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzNTdhMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYm9hcmRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLmdyaWQtbmFtZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBzdGljay1uby1iaWxscztcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLmdyaWQtcm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmdyaWQtcm93LWVsZW1lbnQge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDM1N2EwO1xcbiAgICAvKiBjdXJzb3I6IGNyb3NzaGFpcjsgKi9cXG59XFxuXFxuLyogLmdyaWQtcm93LWVsZW1lbnQtY29tcHV0ZXI6aG92ZXIsICovIC5wbGF5YWJsZTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG59XFxuXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLnN1bmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcbn1cXG5cXG4jcmVzdWx0cyB7XFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG59XFxuXFxuLmJsb2Nrcy1mbGV4IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5ibG9jay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbi5ibG9jayB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi52ZXJ0aWNhbCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcblxcbi5kcmFnLW92ZXIge1xcbiAgICBib3JkZXI6IGRhc2hlZCAzcHggcmVkO1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNwbGF5ZXItbmFtZS1kaXYge1xcbiAgICB3aWR0aDogMzByZW07XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogc3RpY2stbm8tYmlsbHM7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5OTJkMztcXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAzNTdhMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbiNwbGF5ZXItbmFtZS1pbnB1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAzNTdhMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Jsb2NrcyB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcXG4gICAgI3RvcCB7XFxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgICAgIGhlaWdodDogNXJlbTtcXG4gICAgfVxcblxcbiAgICAjYm9hcmRzIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgICAgZ2FwOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIC5ncmlkLXJvdy1lbGVtZW50IHtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICAgIHdpZHRoOiAzNXB4O1xcbiAgICB9XFxuXFxuICAgICNibG9ja3Mge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAjZmxpcC1idXR0b24ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAjcmFuZG9tLWJ1dHRvbiB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcXG4gICAgfVxcblxcbiAgICAjaW5mbyB7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLWluZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0Qiw0Q0FBbUM7QUFDdkM7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsNENBQXVDO0FBQzNDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHVCQUF1QjtBQUMzQjs7QUFFQSxzQ0FBc0MsRUFBRTtJQUNwQyw0QkFBNEI7SUFDNUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7OztBQUdBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhOztJQUViLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsWUFBWTtJQUNoQjs7SUFFQTtNQUNFLHNCQUFzQjtNQUN0QixnQkFBZ0I7TUFDaEIsU0FBUztJQUNYOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksU0FBUztJQUNiO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBydWJpay1pc287XFxuICAgIHNyYzogdXJsKC4uL3NyYy9mb250cy9SdWJpa0lzby50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IHN0aWNrLW5vLWJpbGxzO1xcbiAgICBzcmM6IHVybCguLi9zcmMvZm9udHMvU3RpY2tOb0JpbGxzLnR0Zik7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGY0ZmI7XFxufVxcblxcbiN0b3Age1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk5MmQzO1xcbiAgICBoZWlnaHQ6IDE1dmg7XFxuICAgIGZvbnQtZmFtaWx5OiBydWJpay1pc287XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNtaWQge1xcbiAgICBoZWlnaHQ6IDg1dmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2VkZjRmYjsgKi9cXG59XFxuXFxuI2luZm8ge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBzdGljay1uby1iaWxscztcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICB3aWR0aDogMTJyZW07XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IHN0aWNrLW5vLWJpbGxzO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0OTkyZDM7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwMzU3YTA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI3JhbmRvbS1idXR0b24sICNmbGlwLWJ1dHRvbiB7XFxuICAgIHdpZHRoOiA4cmVtO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDM1N2EwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNib2FyZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uZ3JpZC1uYW1lIHtcXG4gICAgZm9udC1mYW1pbHk6IHN0aWNrLW5vLWJpbGxzO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uZ3JpZC1yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZ3JpZC1yb3ctZWxlbWVudCB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMzU3YTA7XFxuICAgIC8qIGN1cnNvcjogY3Jvc3NoYWlyOyAqL1xcbn1cXG5cXG4vKiAuZ3JpZC1yb3ctZWxlbWVudC1jb21wdXRlcjpob3ZlciwgKi8gLnBsYXlhYmxlOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uc3VuayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XFxufVxcblxcbiNyZXN1bHRzIHtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbn1cXG5cXG4uYmxvY2tzLWZsZXgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLmJsb2NrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLmJsb2NrIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLnZlcnRpY2FsIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuXFxuLmRyYWctb3ZlciB7XFxuICAgIGJvcmRlcjogZGFzaGVkIDNweCByZWQ7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3BsYXllci1uYW1lLWRpdiB7XFxuICAgIHdpZHRoOiAzMHJlbTtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBzdGljay1uby1iaWxscztcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk5MmQzO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDM1N2EwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuI3BsYXllci1uYW1lLWlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDM1N2EwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYmxvY2tzIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xcbiAgICAjdG9wIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgICAgaGVpZ2h0OiA1cmVtO1xcbiAgICB9XFxuXFxuICAgICNib2FyZHMge1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgICBnYXA6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgLmdyaWQtcm93LWVsZW1lbnQge1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgd2lkdGg6IDM1cHg7XFxuICAgIH1cXG5cXG4gICAgI2Jsb2NrcyB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgICNmbGlwLWJ1dHRvbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgICNyYW5kb20tYnV0dG9uIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICB9XFxuXFxuICAgICNpbmZvIHtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUtaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS1pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gZ2VuZXJhdGVHcmlkKHNpemUsIHBsYXllciwgY29udGFpbmVyLCBwbGF5YWJsZUNsYXNzID0gbnVsbCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXIpO1xuICAgIGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2dyaWQtY29udGFpbmVyJyk7XG4gICAgZ3JpZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHBsYXllcik7XG4gICAgY29uc3QgcGxheWVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBsYXllck5hbWUuY2xhc3NMaXN0LmFkZCgnZ3JpZC1uYW1lJyk7XG4gICAgcGxheWVyTmFtZS50ZXh0Q29udGVudCA9IHBsYXllciArIGAncyBib2FyZGA7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZCcpO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGxldCBncmlkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdyaWRSb3cuY2xhc3NMaXN0LmFkZCgnZ3JpZC1yb3cnKTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBncmlkUm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZ3JpZFJvd0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ3JpZC1yb3ctZWxlbWVudCcpO1xuICAgICAgICAgICAgZ3JpZFJvd0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ3JpZC1yb3ctZWxlbWVudC0nICsgcGxheWVyKTtcbiAgICAgICAgICAgIGdyaWRSb3dFbGVtZW50LnNldEF0dHJpYnV0ZSgneC1jb3JkJywgaSk7XG4gICAgICAgICAgICBncmlkUm93RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3ktY29yZCcsIGopO1xuICAgICAgICAgICAgaWYgKHBsYXlhYmxlQ2xhc3MgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBncmlkUm93RWxlbWVudC5jbGFzc0xpc3QuYWRkKHBsYXlhYmxlQ2xhc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ3JpZFJvdy5hcHBlbmRDaGlsZChncmlkUm93RWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChncmlkUm93KTtcbiAgICB9XG5cbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllck5hbWUpO1xuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZCk7XG5cbiAgICAvLyBjcmVhdGUgbWFpbiBjb250YWluZXIgZm9yIHBsYXllciBibG9ja3NcbiAgICBpZiAocGxheWFibGVDbGFzcyA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBibG9ja3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmxvY2tzLmlkID0gJ2Jsb2Nrcyc7XG4gICAgICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoYmxvY2tzKTtcbiAgICB9XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGdyaWRDb250YWluZXIpO1xufVxuXG4vLyByZXR1cm5zIGNvb3JkaW5hdGVzIHdoZW4gdGhlIHVzZXIgc2VsZWN0cyBhIGJveCBvbiB0aGUgYm9hcmRcbmZ1bmN0aW9uIHBsYXllck1vdmUoZ3JpZEVsZW1lbnRDbGFzcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSAoKHJlc29sdmUpID0+IHtcbiAgICAgICAgY29uc3QgZ3JpZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGdyaWRFbGVtZW50Q2xhc3MpO1xuICAgIFxuICAgICAgICBsZXQgdmFsdWVzID0gW107XG4gICAgICAgIGdyaWRFbGVtZW50LmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCB4ID0gcGFyc2VJbnQoZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgneC1jb3JkJykpO1xuICAgICAgICAgICAgbGV0IHkgPSBwYXJzZUludChlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd5LWNvcmQnKSk7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2goeCwgeSk7XG4gICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoZ3JpZEVsZW1lbnRDbGFzcy5zdWJzdHJpbmcoMSkpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9KVxufVxuXG4vLyB0YWtlcyBhIGdhbWVib2FyZCBhcnJheSAoZnJvbSB0aGUgcGxheWVyIG9yIGNvbXB1dGVyIG9iamVjdClcbi8vIGl0ZXJhdGVzIHRocm91Z2ggdGhlIGFycmF5IGFuZCBjaGFuZ2VzIHRoZSBncmlkIGFjY29yZGluZ2x5IGJ5IGFkZGluZyBjbGFzc2VzIHRvIHRoZSBlbGVtZW50c1xuZnVuY3Rpb24gdXBkYXRlQm9hcmQoZ2FtZWJvYXJkLCBncmlkQ2xhc3MpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdhbWVib2FyZC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgbGV0IGdyaWRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Z3JpZENsYXNzfVt4LWNvcmQ9XCIke2l9XCJdW3ktY29yZD1cIiR7an1cIl1gKTtcbiAgICAgICAgICAgIGlmIChnYW1lYm9hcmRbaV1bal0uaGl0ID09PSB0cnVlICYmIGdhbWVib2FyZFtpXVtqXS5oYXNTdW5rU2hpcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGdyaWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FtZWJvYXJkW2ldW2pdLmhpdCA9PT0gdHJ1ZSAmJiBnYW1lYm9hcmRbaV1bal0uc2hpcElEICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZ3JpZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGdhbWVib2FyZFtpXVtqXS5oaXQgPT09IHRydWUgJiYgZ2FtZWJvYXJkW2ldW2pdLnNoaXBJRCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGdyaWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gZGlzcGxheXMgc2hpcHMgb24gdGhlIGdyaWQgKGZvciByYW5kb20gcGxheWVyIHNoaXAgcGxhY2VtZW50KVxuZnVuY3Rpb24gdXBkYXRlQm9hcmRTaGlwcyhnYW1lYm9hcmQsIGdyaWRDbGFzcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZWJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2FtZWJvYXJkLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgZ3JpZEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtncmlkQ2xhc3N9W3gtY29yZD1cIiR7aX1cIl1beS1jb3JkPVwiJHtqfVwiXWApO1xuICAgICAgICAgICAgaWYgKGdhbWVib2FyZFtpXVtqXS5zaGlwSUQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBncmlkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlHYW1lUmVzdWx0cyhpbmZvRWxlbWVudCwgY29tcHV0ZXJPYmplY3QpIHtcbiAgICBjb25zdCByZXN1bHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5mb0VsZW1lbnQpO1xuICAgIGlmIChjb21wdXRlck9iamVjdC5ib2FyZC5hcmVBbGxTaGlwc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgICByZXN1bHRzLnRleHRDb250ZW50ID0gJ1BsYXllciB3b24hJztcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzLnRleHRDb250ZW50ID0gJ0NvbXB1dGVyIHdvbiEnO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlQmxvY2soc2l6ZSwgY3VzdG9tSUQgPSBzaXplKSB7XG4gICAgY29uc3QgYmxvY2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBibG9ja0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdibG9jay1jb250YWluZXInKTtcbiAgICBibG9ja0NvbnRhaW5lci5pZCA9IGBibG9jay1jb250YWluZXItJHtjdXN0b21JRH1gO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZCgnYmxvY2snKTtcbiAgICAgICAgYmxvY2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYmxvY2spO1xuICAgIH1cblxuICAgIGJsb2NrQ29udGFpbmVyLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgcmV0dXJuIGJsb2NrQ29udGFpbmVyO1xufVxuXG4vLyBjcmVhdGVzIGEgbmV3IGJ1dHRvbiBhbmQgcmV0dXJucyB0aGUgZG9tIGVsZW1lbnRcbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbih0ZXh0KSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbGV0IGlkID0gYCR7dGV4dH0tYnV0dG9uYDtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBgJHt0ZXh0fWA7XG4gICAgYnV0dG9uLmlkID0gaWQ7XG4gICAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvJyk7XG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbn1cblxuLy8gd2lkdGggb2YgYmxvY2sgY29udGFpbmVycyA9IG51bWJlciBvZiBibG9ja3MgKiB0aGVpciBzaXplOyBmaXhlcyBjb250YWluZXIgd2lkdGggaXNzdWUgb24gQ2hyb21lXG5mdW5jdGlvbiBzZXRCbG9ja0NvbnRhaW5lcldpZHRoSGVpZ2h0KHZlcnRpY2FsID0gZmFsc2UpIHtcbiAgICBjb25zdCBibG9ja0NvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmxvY2stY29udGFpbmVyJyk7XG4gICAgY29uc3QgYmxvY2tXaWR0aCA9IDQwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2tDb250YWluZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGJsb2NrTGVuZ3RoID0gYmxvY2tDb250YWluZXJzW2ldLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdkaXYnKS5sZW5ndGg7XG5cbiAgICAgICAgaWYgKHZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgYmxvY2tDb250YWluZXJzW2ldLnN0eWxlLndpZHRoID0gYCR7YmxvY2tMZW5ndGggKiBibG9ja1dpZHRofXB4YDtcbiAgICAgICAgICAgIGJsb2NrQ29udGFpbmVyc1tpXS5zdHlsZS5oZWlnaHQgPSBgNDBweGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBibG9ja0NvbnRhaW5lcnNbaV0uc3R5bGUuaGVpZ2h0ID0gYCR7YmxvY2tMZW5ndGggKiBibG9ja1dpZHRofXB4YDtcbiAgICAgICAgICAgIGJsb2NrQ29udGFpbmVyc1tpXS5zdHlsZS53aWR0aCA9IGA0MHB4YDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHsgXG4gICAgZ2VuZXJhdGVHcmlkLCBcbiAgICBwbGF5ZXJNb3ZlLCBcbiAgICB1cGRhdGVCb2FyZCwgXG4gICAgdXBkYXRlQm9hcmRTaGlwcywgXG4gICAgZGlzcGxheUdhbWVSZXN1bHRzLCBcbiAgICBjcmVhdGVCbG9jaywgXG4gICAgY3JlYXRlQnV0dG9uLCBcbiAgICBzZXRCbG9ja0NvbnRhaW5lcldpZHRoSGVpZ2h0IFxufTsiLCJpbXBvcnQgeyBcbiAgICBnZW5lcmF0ZUdyaWQsIFxuICAgIHBsYXllck1vdmUsIFxuICAgIHVwZGF0ZUJvYXJkLCBcbiAgICB1cGRhdGVCb2FyZFNoaXBzLCBcbiAgICBkaXNwbGF5R2FtZVJlc3VsdHMsIFxuICAgIGNyZWF0ZUJsb2NrLCBcbiAgICBjcmVhdGVCdXR0b24sIFxuICAgIHNldEJsb2NrQ29udGFpbmVyV2lkdGhIZWlnaHQgXG59IGZyb20gJy4vZG9tJztcbmltcG9ydCB7IFBsYXllciwgQ29tcHV0ZXIgfSBmcm9tICcuL3BsYXllcic7XG5cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVHYW1lKHNpemUgPSAxMCkge1xuICAgIGdlbmVyYXRlR3JpZChzaXplLCAncGxheWVyJywgJ2JvYXJkcycpO1xuICAgIGdlbmVyYXRlR3JpZChzaXplLCAnY29tcHV0ZXInLCAnYm9hcmRzJywgJ3BsYXlhYmxlJyk7XG5cbiAgICBsZXQgcGxheWVyMSA9IG5ldyBQbGF5ZXIoJ3BsYXllcjEnLCBzaXplKTtcbiAgICBsZXQgY29tcHV0ZXIxID0gbmV3IENvbXB1dGVyKCdjb21wdXRlcjEnLCBzaXplKTtcblxuICAgIC8vIHJhbmRvbSBzaGlwcyBmb3IgY29tcHV0ZXJcbiAgICBjb21wdXRlcjEuYm9hcmQuY3JlYXRlU2hpcHMobnVsbCwgNSk7XG4gICAgY29tcHV0ZXIxLmJvYXJkLmNyZWF0ZVNoaXBzKG51bGwsIDQpO1xuICAgIGNvbXB1dGVyMS5ib2FyZC5jcmVhdGVTaGlwcyhudWxsLCAzKTtcbiAgICBjb21wdXRlcjEuYm9hcmQuY3JlYXRlU2hpcHMobnVsbCwgMyk7XG4gICAgY29tcHV0ZXIxLmJvYXJkLmNyZWF0ZVNoaXBzKG51bGwsIDIpO1xuXG4gICAgLy8gdGhpcyBmdW5jdGlvbiBlaXRoZXIgcmV0dXJucyBwcmV2aW9zdWx5IGRlY2xhcmVkIHBsYXllcjEgb2JqZWN0IHdpdGggbWFudWFseSBwbGFjZWQgc2hpcHMgXG4gICAgLy8gb3IgYSBuZXcgcGxheWVyIG9iamVjdCB3aXRoIHJhbmRvbWx5IHBsYWNlZCBzaGlwc1xuICAgIGxldCBwbGF5ZXJPYmplY3QgPSBhd2FpdCBkcmFnQW5kRHJvcChwbGF5ZXIxLCBzaXplKTtcblxuICAgIC8vIHN0YXJ0IHRoZSBnYW1lIGlmIGFsbCBzaGlwcyBhcmUgcGxhY2VkXG4gICAgZ2FtZVdpdGhBSShwbGF5ZXJPYmplY3QsIGNvbXB1dGVyMSk7XG59XG5cbi8vIGRyYWcgYW5kIGRyb3AgcGxheWVycyBzaGlwc1xuZnVuY3Rpb24gZHJhZ0FuZERyb3AocGxheWVyMSwgc2l6ZSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UgKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAvLyByZW1vdmVzIGV4aXN0aW5nIGRyYWcgJiBkcm9wIGJsb2NrcyBmaXJzdFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsb2NrLWNvbnRhaW5lcicpLmZvckVhY2goYmxvY2sgPT4gYmxvY2sucmVtb3ZlKCkpO1xuXG4gICAgICAgICAgICAvLyByZWNyZWF0ZXMgdGhlbVxuICAgICAgICAgICAgY29uc3QgbWFpbkJsb2NrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jsb2NrcycpO1xuICAgICAgICAgICAgbWFpbkJsb2NrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUJsb2NrKDUpKTtcbiAgICAgICAgICAgIG1haW5CbG9ja0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVCbG9jayg0KSk7XG4gICAgICAgICAgICBtYWluQmxvY2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQmxvY2soMykpO1xuICAgICAgICAgICAgbWFpbkJsb2NrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUJsb2NrKDMsICczLTInKSk7XG4gICAgICAgICAgICBtYWluQmxvY2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQmxvY2soMikpO1xuXG4gICAgICAgICAgICAvLyB3aWR0aCBvZiBibG9jayBjb250YWluZXJzID0gbnVtYmVyIG9mIGJsb2NrcyBpbnNpZGUgKiB0aGVpciB3aWR0aFxuICAgICAgICAgICAgc2V0QmxvY2tDb250YWluZXJXaWR0aEhlaWdodCgpO1xuXG4gICAgICAgICAgICAvLyBjcmVhdGUgYnV0dG9ucyBhbmQgc2VsZWN0IHRoZW0gYnkgaWRcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUJ1dHRvbiA9IGNyZWF0ZUJ1dHRvbigncmFuZG9tJyk7XG4gICAgICAgICAgICBjb25zdCBmbGlwQnV0dG9uID0gY3JlYXRlQnV0dG9uKCdmbGlwJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJsb2NrVG9EcmFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsb2NrLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgYmxvY2tUb0RyYWcuZm9yRWFjaChibG9jayA9PiBibG9jay5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCBlLmN1cnJlbnRUYXJnZXQuaWQpO1xuICAgICAgICAgICAgfSkpXG5cbiAgICAgICAgICAgIGNvbnN0IGdyaWRCb3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLXJvdy1lbGVtZW50LXBsYXllcicpO1xuICAgICAgICAgICAgZ3JpZEJveGVzLmZvckVhY2goYm94ID0+IHtcbiAgICAgICAgICAgICAgICBib3guYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnT3Zlcik7XG4gICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGRyYWdMZWF2ZSk7XG4gICAgICAgICAgICAgICAgYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcm9wKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBkcmFnT3ZlcihlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2RyYWctb3ZlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmdW5jdGlvbiBkcmFnTGVhdmUoZSkge1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWctb3ZlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmdW5jdGlvbiBkcm9wKGUpIHtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnLW92ZXInKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGVsZW1lbnQncyBpZFxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gZS5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBjb29yZGluYXRlcyBvZiB0aGUgZ3JpZCBib3ggd2hlcmUgdGhlIHNoaXAgYmxvY2sgd2lsbCBiZSBkcm9wcGVkXG4gICAgICAgICAgICAgICAgbGV0IHggPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCd4LWNvcmQnKTtcbiAgICAgICAgICAgICAgICBsZXQgeSA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ktY29yZCcpO1xuXG4gICAgICAgICAgICAgICAgLy8gZ2V0IGJsb2NrJ3MgbGVuZ3RoOyBlYWNoIGJveCBpbnNpZGUgPSBzaGlwIHNpemVcbiAgICAgICAgICAgICAgICBjb25zdCBibG9ja0xlbmd0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZGl2JykubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgLy8gZG8gbm90aGluZyBpZiBzaGlwIC8gYmxvY2sgaXMgb3V0IG9mIGJvdW5kcyBvciB0aGVyZSdzIGFscmVhZHkgYSBzaGlwIGluIGl0cyBwYXRoXG4gICAgICAgICAgICAgICAgLy8gaG9yaXpvbnRhbFxuICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2xhc3NMaXN0LmNvbnRhaW5zKCd2ZXJ0aWNhbCcpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2NrTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ3JpZC1yb3ctZWxlbWVudC1wbGF5ZXJbeC1jb3JkPVwiJHt4fVwiXVt5LWNvcmQ9XCIke3BhcnNlSW50KHkpICsgaX1cIl1gKSA9PSB1bmRlZmluZWQgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ3JpZC1yb3ctZWxlbWVudC1wbGF5ZXJbeC1jb3JkPVwiJHt4fVwiXVt5LWNvcmQ9XCIke3BhcnNlSW50KHkpICsgaX1cIl1gKS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gdmVydGljYWxcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2NrTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ3JpZC1yb3ctZWxlbWVudC1wbGF5ZXJbeC1jb3JkPVwiJHtwYXJzZUludCh4KSArIGl9XCJdW3ktY29yZD1cIiR7eX1cIl1gKSA9PSB1bmRlZmluZWQgfHwgXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ3JpZC1yb3ctZWxlbWVudC1wbGF5ZXJbeC1jb3JkPVwiJHtwYXJzZUludCh4KSArIGl9XCJdW3ktY29yZD1cIiR7eX1cIl1gKS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgc2hpcCAvIGJsb2NrIGNhbiBiZSBwbGFjZWQsIGdldCB0aGUgY29yZHMgYW5kIGNyZWF0ZSBhIG5ldyBzaGlwXG4gICAgICAgICAgICAgICAgbGV0IGFycmF5Q29yZHMgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyBob3Jpem9udGFsXG4gICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5jbGFzc0xpc3QuY29udGFpbnMoJ3ZlcnRpY2FsJykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmxvY2tMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRvYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ncmlkLXJvdy1lbGVtZW50LXBsYXllclt4LWNvcmQ9XCIke3h9XCJdW3ktY29yZD1cIiR7cGFyc2VJbnQoeSkgKyBpfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycmF5Q29yZHMucHVzaChbcGFyc2VJbnQoeCksIHBhcnNlSW50KHkpICsgaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gdmVydGljYWxcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJsb2NrTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkb2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ3JpZC1yb3ctZWxlbWVudC1wbGF5ZXJbeC1jb3JkPVwiJHtwYXJzZUludCh4KSArIGl9XCJdW3ktY29yZD1cIiR7eX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlDb3Jkcy5wdXNoKFtwYXJzZUludCh4KSArIGksIHBhcnNlSW50KHkpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlcyBhIG5ldyBzaGlwIGJhc2VkIG9uIHRoZSBjb3Jkc1xuICAgICAgICAgICAgICAgIHBsYXllcjEuYm9hcmQuY3JlYXRlU2hpcHMoYXJyYXlDb3Jkcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAocGxheWVyMS5ib2FyZC5udW1iZXJPZlNoaXBzID09PSA1KSB7IFxuICAgICAgICAgICAgICAgICAgICByYW5kb21CdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICBmbGlwQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwbGF5ZXIxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGZsaXBzIHRoZSBzaGlwIGJsb2NrcyBob3Jpem9udGFsbHkgb3IgdmVydGljYWxseVxuICAgICAgICAgICAgZmxpcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2tUb0RyYWdbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCd2ZXJ0aWNhbCcpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBibG9ja1RvRHJhZy5mb3JFYWNoKGJsb2NrID0+IGJsb2NrLmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJykpO1xuICAgICAgICAgICAgICAgICAgICBtYWluQmxvY2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmxvY2tzLWZsZXgnKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0QmxvY2tDb250YWluZXJXaWR0aEhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBibG9ja1RvRHJhZy5mb3JFYWNoKGJsb2NrID0+IGJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ3ZlcnRpY2FsJykpO1xuICAgICAgICAgICAgICAgICAgICBtYWluQmxvY2tDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYmxvY2tzLWZsZXgnKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0QmxvY2tDb250YWluZXJXaWR0aEhlaWdodCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIHBsYWNlcyBwbGF5ZXIncyBzaGlwcyByYW5kb21seVxuICAgICAgICAgICAgcmFuZG9tQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgYnV0dG9ucyBhbmQgYmxvY2tzXG4gICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBtYWluQmxvY2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIGZsaXBCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gICAgICAgICAgICAgICAgLy8gY2xlYXIgcGxheWVyIGFuZCBjb21wdXRlciBib2FyZHMgYW5kIHRoZW4gcmVjcmVhdGUgdGhlbVxuICAgICAgICAgICAgICAgIGNvbnN0IGdyaWRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdyaWQtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgZ3JpZHNbMF0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgZ3JpZHNbMV0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVHcmlkKHNpemUsICdwbGF5ZXInLCAnYm9hcmRzJyk7XG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVHcmlkKHNpemUsICdjb21wdXRlcicsICdib2FyZHMnLCAncGxheWFibGUnKTtcblxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBwbGF5ZXIgb2JqZWN0XG4gICAgICAgICAgICAgICAgcGxheWVyMSA9IG5ldyBQbGF5ZXIoJ3BsYXllcjEnLCBzaXplKTtcblxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBuZXcgc2hpcHMgcmFuZG9tbHkgYW5kIHNob3cgdGhlbVxuICAgICAgICAgICAgICAgIHBsYXllcjEuYm9hcmQuY3JlYXRlU2hpcHMobnVsbCwgNSk7XG4gICAgICAgICAgICAgICAgcGxheWVyMS5ib2FyZC5jcmVhdGVTaGlwcyhudWxsLCA0KTtcbiAgICAgICAgICAgICAgICBwbGF5ZXIxLmJvYXJkLmNyZWF0ZVNoaXBzKG51bGwsIDMpO1xuICAgICAgICAgICAgICAgIHBsYXllcjEuYm9hcmQuY3JlYXRlU2hpcHMobnVsbCwgMyk7XG4gICAgICAgICAgICAgICAgcGxheWVyMS5ib2FyZC5jcmVhdGVTaGlwcyhudWxsLCAyKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVCb2FyZFNoaXBzKHBsYXllcjEuYm9hcmQuZ2FtZWJvYXJkQXJyYXksICdncmlkLXJvdy1lbGVtZW50LXBsYXllcicpO1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShwbGF5ZXIxKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG59XG5cbi8vIGNvbXB1dGVyIG1ha2VzIGEgcmFuZG9tIG1vdmUgZmlyc3QgYnV0IGNoZWNrcyBhZGphY2VudCBib3hlcyBhZnRlciBoaXR0aW5nIGEgc2hpcCB1bnRpbCBpdCdzIHN1bmtcbmFzeW5jIGZ1bmN0aW9uIGdhbWVXaXRoQUkocGxheWVyT2JqZWN0LCBjb21wdXRlck9iamVjdCkge1xuICAgIC8vIHRoZSBnYW1lIGVuZHMgd2hlbiBhbGwgcGxheWVyIG9yIGNvbXB1dGVyIHNoaXBzIGFyZSBzdW5rXG4gICAgd2hpbGUgKGNvbXB1dGVyT2JqZWN0LmJvYXJkLmFyZUFsbFNoaXBzU3VuaygpID09PSBmYWxzZSAmJiBwbGF5ZXJPYmplY3QuYm9hcmQuYXJlQWxsU2hpcHNTdW5rKCkgPT09IGZhbHNlKSB7XG4gICAgICAgIFxuICAgICAgICAvLyBQbGF5ZXIgcGxheXNcbiAgICAgICAgLy8gYWxsb3dzIHBsYXllciB0byBzZWxlY3QgYSBib3ggb24gdGhlIGNvbXB1dGVyJ3MgZ3JpZCBhbmQgZ2V0IGl0cyBjb29yZGluYXRlc1xuICAgICAgICBsZXQgY29yZHMgPSBhd2FpdCBwbGF5ZXJNb3ZlKCcucGxheWFibGUnKTtcbiAgICAgICAgcGxheWVyT2JqZWN0LmZpcmUoY29yZHMsIGNvbXB1dGVyT2JqZWN0LmJvYXJkKTtcbiAgICAgICAgdXBkYXRlQm9hcmQoY29tcHV0ZXJPYmplY3QuYm9hcmQuZ2FtZWJvYXJkQXJyYXksICdncmlkLXJvdy1lbGVtZW50LWNvbXB1dGVyJyk7XG5cbiAgICAgICAgLy8gQ29tcHV0ZXIgcGxheXNcbiAgICAgICAgLy8gaWYgY29tcHV0ZXIgZm91bmQgYW55IHNoaXBzIGluIHByZXZpb3VzIG1vdmVzIGl0IHdpbGwgdHJ5IGhpdHRpbmcgYW5kIHNpbmtpbmcgdGhlIGZpcnN0IGZvdW5kIHNoaXBcbiAgICAgICAgaWYgKGNvbXB1dGVyT2JqZWN0LmZvdW5kUGxheWVyU2hpcHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGZvdW5kU2hpcElEID0gY29tcHV0ZXJPYmplY3QuZm91bmRQbGF5ZXJTaGlwc1swXS5zaGlwSUQ7XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZXMgZW1wdHkgc3ViYXJyYXlzIFxuICAgICAgICAgICAgY29tcHV0ZXJPYmplY3QuZm91bmRQbGF5ZXJTaGlwc1swXS5wb3NzaWJsZU1vdmVzID0gY29tcHV0ZXJPYmplY3QuQUlSZW1vdmVBcnJheXNXaXRoRW1wdHlNb3Zlcyhjb21wdXRlck9iamVjdC5mb3VuZFBsYXllclNoaXBzWzBdLnBvc3NpYmxlTW92ZXMpO1xuXG4gICAgICAgICAgICBsZXQgY29yZHNzID0gY29tcHV0ZXJPYmplY3QuZm91bmRQbGF5ZXJTaGlwc1swXS5wb3NzaWJsZU1vdmVzWzBdWzBdO1xuICAgICAgICAgICAgY29tcHV0ZXJPYmplY3QuZmlyZShjb3Jkc3MsIHBsYXllck9iamVjdC5ib2FyZCk7XG5cbiAgICAgICAgICAgIC8vIGFkZHMgYSBuZXcgc2hpcCB0byB0aGUgZm91bmRTaGlwcyBhcnJheSBpZiBjb21wdXRlciBoaXQgYW5vdGhlciBzaGlwIFxuICAgICAgICAgICAgaWYgKHBsYXllck9iamVjdC5ib2FyZC5nYW1lYm9hcmRBcnJheVtjb3Jkc3NbMF1dW2NvcmRzc1sxXV0uc2hpcElEICE9IGZvdW5kU2hpcElEICYmIFxuICAgICAgICAgICAgICAgIHBsYXllck9iamVjdC5ib2FyZC5nYW1lYm9hcmRBcnJheVtjb3Jkc3NbMF1dW2NvcmRzc1sxXV0uc2hpcElEICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29tcHV0ZXJPYmplY3QuQUlGb3VuZFNoaXAoY29yZHNzLCBwbGF5ZXJPYmplY3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByZW1vdmVzIHRoZSBlbnRpcmUgc3ViYXJyYXkgd2l0aCBlLmcuIHBvc3NpYmxlIGhvcml6b250YWwgbGVmdCBtb3ZlcyBpZiB0aGUgY29vcmRpbmF0ZXMgZGlkbid0IGhhdmUgdGhlIHNoaXBcbiAgICAgICAgICAgIGlmIChwbGF5ZXJPYmplY3QuYm9hcmQuZ2FtZWJvYXJkQXJyYXlbY29yZHNzWzBdXVtjb3Jkc3NbMV1dLnNoaXBJRCAhPSBmb3VuZFNoaXBJRCkge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVyT2JqZWN0LmZvdW5kUGxheWVyU2hpcHNbMF0ucG9zc2libGVNb3Zlcy5zaGlmdCgpO1xuICAgICAgICAgICAgLy8gaWYgdGhlcmUncyBhIGhpdCwgcmVtb3ZlcyBqdXN0IHRoZSBmaXJzdCBlbGVtZW50IGZyb20gdGhpcyBzdWJhcnJheSwgc28gdGhlIGNvbXB1dGVyIGNhbiBjb250aW51ZSB3aXRoIHRoaXMgaW4gdGhlIG5leHQgbW92ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlck9iamVjdC5mb3VuZFBsYXllclNoaXBzWzBdLnBvc3NpYmxlTW92ZXNbMF0uc2hpZnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBzaGlwIGZyb20gdGhlIGZvdW5kU2hpcHMgYXJyYXkgaWYgY29tcHV0ZXIgaGFzIGhpdCBhbmQgc3VuayBpdFxuICAgICAgICAgICAgaWYgKHBsYXllck9iamVjdC5ib2FyZC5nYW1lYm9hcmRBcnJheVtjb3Jkc3NbMF1dW2NvcmRzc1sxXV0uc2hpcElEID09IGZvdW5kU2hpcElEICYmIFxuICAgICAgICAgICAgICAgIHBsYXllck9iamVjdC5ib2FyZC5nYW1lYm9hcmRBcnJheVtjb3Jkc3NbMF1dW2NvcmRzc1sxXV0uaGFzU3Vua1NoaXAgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlck9iamVjdC5mb3VuZFBsYXllclNoaXBzLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgdGhlIGZvdW5kU2hpcHMgYXJyYXkgaXMgZW1wdHksIGNvbXB1dGVyIHdpbGwgbWFrZSBhIHJhbmRvbSBtb3ZlIGluc3RlYWRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjb21wdXRlclBsYXlzQ29yZHMgPSBjb21wdXRlck9iamVjdC5yYW5kb21Nb3ZlKHBsYXllck9iamVjdC5ib2FyZCk7XG4gICAgICAgICAgICAvLyBpZiBjb21wdXRlciBoaXQgYSBzaGlwLCBhZGQgaXQgdG8gdGhlIGZvdW5kIHNoaXBzIGFycmF5XG4gICAgICAgICAgICBjb21wdXRlck9iamVjdC5BSUZvdW5kU2hpcChjb21wdXRlclBsYXlzQ29yZHMsIHBsYXllck9iamVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVCb2FyZChwbGF5ZXJPYmplY3QuYm9hcmQuZ2FtZWJvYXJkQXJyYXksICdncmlkLXJvdy1lbGVtZW50LXBsYXllcicpO1xuICAgIH1cbiAgICBcbiAgICAvLyBkaXNwbGF5IGdhbWUgcmVzdWx0cyB3aGVuIGFsbCBjb21wdXRlcidzIG9yIHBsYXllcidzIHNoaXBzIGhhdmUgYmVlbiBzdW5rXG4gICAgZGlzcGxheUdhbWVSZXN1bHRzKCdpbmZvJywgY29tcHV0ZXJPYmplY3QpO1xufVxuXG5leHBvcnQgeyBpbml0aWFsaXplR2FtZSB9IiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKHNpemUpIHsgLy8gc2l6ZSBpcyB1c3VzdWFsbHkgMTAgKHNvIDEweDEwPTEwMClcbiAgICAgICAgdGhpcy5nYW1lYm9hcmRBcnJheSA9IHRoaXMuZ2VuZXJhdGVHYW1lYm9hcmRBcnJheShzaXplKTtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgICAgICB0aGlzLm51bWJlck9mU2hpcHMgPSAwOyAvLyA1IG1heFxuICAgICAgICB0aGlzLnN1bmtTaGlwcyA9IDA7XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlcyBhIG5ldyBTaGlwIG9iamVjdCBhbmQgcHVzaGVzIGl0IHRvIHRoZSBzaGlwcyBhcnJheVxuICAgIC8vIGFuZCB0aGVuIHBsYWNlcyB0aGF0IHNoaXAgb24gdGhlIGJvYXJkXG4gICAgY3JlYXRlU2hpcHMoYXJyYXlXaXRoQ29vcmRpbmF0ZXMgPSBudWxsLCBzaGlwU2l6ZSA9IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMubnVtYmVyT2ZTaGlwcyA8IDUpIHtcbiAgICAgICAgICAgIC8vIHJhbmRvbSBjb3Jkc1xuICAgICAgICAgICAgaWYgKGFycmF5V2l0aENvb3JkaW5hdGVzID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbUNvcmRzID0gdGhpcy5nZXRSYW5kb21TaGlwQ29yZHMoc2hpcFNpemUpO1xuICAgICAgICAgICAgICAgIGxldCBuZXdTaGlwID0gbmV3IFNoaXAocmFuZG9tQ29yZHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlU2hpcChyYW5kb21Db3JkcywgdGhpcy5udW1iZXJPZlNoaXBzKTtcbiAgICAgICAgICAgIC8vIHByb3ZpZGVkIGNvcmRzXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBuZXdTaGlwID0gbmV3IFNoaXAoYXJyYXlXaXRoQ29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsYWNlU2hpcChhcnJheVdpdGhDb29yZGluYXRlcywgdGhpcy5udW1iZXJPZlNoaXBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubnVtYmVyT2ZTaGlwcysrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWNjZXB0cyBjb29yZGluYXRlcyBsaWtlIFtbMCwgMF0sIFswLCAxXSwgWzAsIDJdXTsgc2hpcElEID0gbnVtYmVyT2ZTaGlwc1xuICAgIHBsYWNlU2hpcChhcnJheVdpdGhDb29yZGluYXRlcywgc2hpcElEKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlXaXRoQ29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB4ID0gYXJyYXlXaXRoQ29vcmRpbmF0ZXNbaV1bMF07XG4gICAgICAgICAgICBsZXQgeSA9IGFycmF5V2l0aENvb3JkaW5hdGVzW2ldWzFdO1xuICAgICAgICAgICAgdGhpcy5nYW1lYm9hcmRBcnJheVt4XVt5XS5zaGlwSUQgPSBzaGlwSUQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRSYW5kb21TaGlwQ29yZHMoc2hpcFNpemUpIHtcbiAgICAgICAgbGV0IGdhbWVib2FyZEFycmF5U2l6ZSA9IHRoaXMuZ2FtZWJvYXJkQXJyYXkubGVuZ3RoO1xuICAgICAgICBcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGxldCByYW5kb21YID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkQXJyYXlTaXplKTtcbiAgICAgICAgICAgIGxldCByYW5kb21ZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZ2FtZWJvYXJkQXJyYXlTaXplKTtcbiAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWVib2FyZEFycmF5W3JhbmRvbVhdW3JhbmRvbVldLnNoaXBJRCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGxldCBjb3Jkc0FycmF5ID0gW107XG4gICAgICAgICAgICAgICAgLy8gMCAtIGFib3ZlOyAxIC0gcmlnaHQ7IDIgLSBiZWxvdzsgMyAtIGxlZnRcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tRGlyZWN0aW9uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwU2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFib3ZlXG4gICAgICAgICAgICAgICAgICAgIGlmIChyYW5kb21EaXJlY3Rpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVib2FyZEFycmF5W3JhbmRvbVggLSBpXSAhPT0gdW5kZWZpbmVkICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZWJvYXJkQXJyYXlbcmFuZG9tWCAtIGldW3JhbmRvbVldLnNoaXBJRCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcmRzQXJyYXkucHVzaChbcmFuZG9tWCAtIGksIHJhbmRvbVldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gcmlnaHRcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5kb21EaXJlY3Rpb24gPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVib2FyZEFycmF5W3JhbmRvbVhdW3JhbmRvbVkgKyBpXSAhPT0gdW5kZWZpbmVkICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZWJvYXJkQXJyYXlbcmFuZG9tWF1bcmFuZG9tWSArIGldLnNoaXBJRCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcmRzQXJyYXkucHVzaChbcmFuZG9tWCwgcmFuZG9tWSArIGldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gYmVsb3dcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5kb21EaXJlY3Rpb24gPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdhbWVib2FyZEFycmF5W3JhbmRvbVggKyBpXSAhPT0gdW5kZWZpbmVkICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZWJvYXJkQXJyYXlbcmFuZG9tWCArIGldW3JhbmRvbVldLnNoaXBJRCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcmRzQXJyYXkucHVzaChbcmFuZG9tWCArIGksIHJhbmRvbVldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gbGVmdFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJhbmRvbURpcmVjdGlvbiA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZWJvYXJkQXJyYXlbcmFuZG9tWF1bcmFuZG9tWSAtIGldICE9PSB1bmRlZmluZWQgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lYm9hcmRBcnJheVtyYW5kb21YXVtyYW5kb21ZIC0gaV0uc2hpcElEID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29yZHNBcnJheS5wdXNoKFtyYW5kb21YLCByYW5kb21ZIC0gaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvcmRzQXJyYXkubGVuZ3RoID09PSBzaGlwU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29yZHNBcnJheTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKHgsIHkpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2FtZWJvYXJkQXJyYXlbeF1beV0uaGl0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5nYW1lYm9hcmRBcnJheVt4XVt5XS5oaXQgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IHNoaXBJRCA9IHRoaXMuZ2FtZWJvYXJkQXJyYXlbeF1beV0uc2hpcElEO1xuICAgICAgICAgICAgaWYgKHNoaXBJRCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNbc2hpcElEXS5oaXQoW3gsIHldKTsgLy8gc2hpcCBpZCA9IHBvc2l0aW9uIGluIHRoZSBzaGlwcyBhcnJheVxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHN1bmtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGlwc1tzaGlwSURdLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3Vua1NoaXBBY3Rpb24odGhpcy5zaGlwc1tzaGlwSURdLnNoaXBBcnJheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3Vua1NoaXBBY3Rpb24oc2hpcCkge1xuICAgICAgICAvLyBpdGVyYXRlcyB0aHJvdWdoIGEgc2hpcCdzIGFycnJheSAoIGxpa2UgW1swLCAwXSwgWzAsIDFdLCBbMCwgMl1dICkgdG8gZ2V0IGl0cyBjb3Jkc1xuICAgICAgICBmb3IgKGxldCBzdW5rU2hpcENvcmQgPSAwOyBzdW5rU2hpcENvcmQgPCBzaGlwLmxlbmd0aDsgc3Vua1NoaXBDb3JkKyspIHtcbiAgICAgICAgICAgIC8vIGUuZy4gWzAsIDJdIHggPSAwOyB5ID0gMlxuICAgICAgICAgICAgbGV0IHggPSBzaGlwW3N1bmtTaGlwQ29yZF1bMF07XG4gICAgICAgICAgICBsZXQgeSA9IHNoaXBbc3Vua1NoaXBDb3JkXVsxXTtcbiAgICAgICAgICAgIC8vIGNoYW5nZXMgdGhlIGdhbWVib2FyZCdzIG9iamVjdCB0byBzaG93IHRoYXQgdGhpcyBjb29yZGluYXRlIGhhcyBhIHN1bmsgc2hpcCBub3dcbiAgICAgICAgICAgIHRoaXMuZ2FtZWJvYXJkQXJyYXlbeF1beV0uaGFzU3Vua1NoaXAgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3Vua1NoaXBzKys7XG4gICAgfVxuXG4gICAgYXJlQWxsU2hpcHNTdW5rKCkge1xuICAgICAgICBpZiAodGhpcy5zdW5rU2hpcHMgPT09IHRoaXMubnVtYmVyT2ZTaGlwcykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdlbmVyYXRlR2FtZWJvYXJkQXJyYXkoc2l6ZSkge1xuICAgICAgICBsZXQgZ2FtZWJvYXJkQXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcbiAgICAgICAgICAgIGdhbWVib2FyZEFycmF5W2ldID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xuICAgICAgICAgICAgICAgIGdhbWVib2FyZEFycmF5W2ldW2pdID0ge3NoaXBJRDogbnVsbCwgaGl0OiBmYWxzZSwgaGFzU3Vua1NoaXA6IGZhbHNlIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZEFycmF5O1xuICAgIH1cbn0iLCJmdW5jdGlvbiB1cHBlclNjcmVlbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IHRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvcC5pZCA9ICd0b3AnO1xuICAgIHRvcC50ZXh0Q29udGVudCA9ICdCYXR0bGVzaGlwIEdhbWUnO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0b3ApO1xufVxuXG5mdW5jdGlvbiBib2FyZFNjcmVlbigpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IG1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1pZC5pZCA9ICdtaWQnO1xuICAgIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJvYXJkcy5pZCA9ICdib2FyZHMnO1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvLmlkID0gJ2luZm8nO1xuXG4gICAgLy8gY29uc3QgYmxvY2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gYmxvY2tzLmlkID0gJ2Jsb2Nrcyc7XG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uaWQgPSAncmVzdGFydC1idG4nO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdGFydCBHYW1lJztcblxuICAgIG1pZC5hcHBlbmRDaGlsZChib2FyZHMpO1xuICAgIC8vIG1pZC5hcHBlbmRDaGlsZChibG9ja3MpO1xuICAgIG1pZC5hcHBlbmRDaGlsZChpbmZvKTtcbiAgICBtaWQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1pZCk7XG59XG5cbmV4cG9ydCB7IHVwcGVyU2NyZWVuLCBib2FyZFNjcmVlbiB9OyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgYm9hcmRTaXplID0gMTApIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IG5ldyBHYW1lYm9hcmQoYm9hcmRTaXplKTtcbiAgICB9XG5cbiAgICBmaXJlKGNvcmRzLCBvcHBvbmVudEdhbWVib2FyZCkgeyAvLyBjb3JkcyBbeCwgeV1cbiAgICAgICAgb3Bwb25lbnRHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb3Jkc1swXSwgY29yZHNbMV0pO1xuICAgIH1cbn1cblxuY2xhc3MgQ29tcHV0ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGJvYXJkU2l6ZSA9IDEwKSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIGJvYXJkU2l6ZSk7XG4gICAgICAgIHRoaXMuZm91bmRQbGF5ZXJTaGlwcyA9IFtdO1xuICAgIH1cblxuICAgIHJhbmRvbU1vdmUob3Bwb25lbnRHYW1lYm9hcmQpIHtcbiAgICAgICAgbGV0IHJhbmRvbVg7XG4gICAgICAgIGxldCByYW5kb21ZO1xuICAgICAgICBcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIHJhbmRvbVggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBvcHBvbmVudEdhbWVib2FyZC5nYW1lYm9hcmRBcnJheS5sZW5ndGgpO1xuICAgICAgICAgICAgcmFuZG9tWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG9wcG9uZW50R2FtZWJvYXJkLmdhbWVib2FyZEFycmF5Lmxlbmd0aCk7XG4gICAgXG4gICAgICAgICAgICBpZiAob3Bwb25lbnRHYW1lYm9hcmQuZ2FtZWJvYXJkQXJyYXlbcmFuZG9tWF1bcmFuZG9tWV0uaGl0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyZShbcmFuZG9tWCwgcmFuZG9tWV0sIG9wcG9uZW50R2FtZWJvYXJkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gW3JhbmRvbVgsIHJhbmRvbVldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYWRkcyBoaXQgcGxheWVyJ3Mgc2hpcCBhbmQgbmV4dCBwb3NzaWJsZSBtb3ZlcyAodG8gc2luayBpdCkgdG8gdGhlIGFycmF5XG4gICAgQUlGb3VuZFNoaXAoY29yZHMsIHBsYXllck9iamVjdCkge1xuICAgICAgICBsZXQgeCA9IGNvcmRzWzBdO1xuICAgICAgICBsZXQgeSA9IGNvcmRzWzFdO1xuICAgICAgICBsZXQgYm9hcmRFbGVtZW50ID0gcGxheWVyT2JqZWN0LmJvYXJkLmdhbWVib2FyZEFycmF5W3hdW3ldO1xuICAgICAgICBsZXQgY2hlY2tJZlNoaXBJbkFycmF5ID0gdGhpcy5BSUNoZWNrSWZGb3VuZFNoaXBBbHJlYWR5SW5BcnJheShib2FyZEVsZW1lbnQuc2hpcElEKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChib2FyZEVsZW1lbnQuc2hpcElEICE9PSBudWxsICYmIGNoZWNrSWZTaGlwSW5BcnJheSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxldCBhbGxQb3NzaWJsZU1vdmVzID0gW107XG4gICAgICAgICAgICBsZXQgaG9yaXpvbnRhbExlZnQgPSB0aGlzLkFJR2V0UG9zc2libGVNb3Zlc0hvcml6b250YWwoY29yZHMsIGJvYXJkRWxlbWVudC5zaGlwSUQsIHBsYXllck9iamVjdCk7XG4gICAgICAgICAgICBsZXQgaG9yaXpvbnRhbFJpZ2h0ID0gdGhpcy5BSUdldFBvc3NpYmxlTW92ZXNIb3Jpem9udGFsKGNvcmRzLCBib2FyZEVsZW1lbnQuc2hpcElELCBwbGF5ZXJPYmplY3QsIGZhbHNlKTtcbiAgICAgICAgICAgIGxldCB2ZXJ0aWNhbFVwID0gdGhpcy5BSUdldFBvc3NpYmxlTW92ZXNWZXJ0aWNhbChjb3JkcywgYm9hcmRFbGVtZW50LnNoaXBJRCwgcGxheWVyT2JqZWN0KTtcbiAgICAgICAgICAgIGxldCB2ZXJ0aWNhbERvd24gPSB0aGlzLkFJR2V0UG9zc2libGVNb3Zlc1ZlcnRpY2FsKGNvcmRzLCBib2FyZEVsZW1lbnQuc2hpcElELCBwbGF5ZXJPYmplY3QsIGZhbHNlKTtcblxuICAgICAgICAgICAgYWxsUG9zc2libGVNb3Zlcy5wdXNoKGhvcml6b250YWxMZWZ0LCBob3Jpem9udGFsUmlnaHQsIHZlcnRpY2FsVXAsIHZlcnRpY2FsRG93bik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZm91bmRQbGF5ZXJTaGlwcy5wdXNoKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcElEOiBib2FyZEVsZW1lbnQuc2hpcElELCBcbiAgICAgICAgICAgICAgICAgICAgZm91bmRBdENvcmRzOiBjb3JkcywgXG4gICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXM6IGFsbFBvc3NpYmxlTW92ZXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2hlY2tzIGlmIGEgc2hpcCBpcyBhbHJlYWR5IGluIHRoZSBhcnJheSB0byBhdm9pZCBkdXBsaWNhdGVzIFxuICAgIEFJQ2hlY2tJZkZvdW5kU2hpcEFscmVhZHlJbkFycmF5KHNoaXBJRCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZm91bmRQbGF5ZXJTaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm91bmRQbGF5ZXJTaGlwc1tpXS5zaGlwSUQgPT0gc2hpcElEKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIEFJR2V0UG9zc2libGVNb3Zlc0hvcml6b250YWwoY29yZHMsIHNoaXBJRCwgcGxheWVyT2JqZWN0LCBob3Jpem9udGFsTGVmdCA9IHRydWUpIHtcbiAgICAgICAgbGV0IHNoaXBMZW5ndGggPSBwbGF5ZXJPYmplY3QuYm9hcmQuc2hpcHNbc2hpcElEXS5zaGlwQXJyYXkubGVuZ3RoO1xuICAgICAgICBsZXQgeCA9IGNvcmRzWzBdO1xuICAgICAgICBsZXQgeSA9IGNvcmRzWzFdO1xuICAgICAgICBsZXQgcG9zc2libGVNb3Zlc0FycmF5ID0gW107XG4gICAgICAgIFxuICAgICAgICBpZiAoaG9yaXpvbnRhbExlZnQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIC8vIGxlZnQgb3B0aW9uXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJPYmplY3QuYm9hcmQuZ2FtZWJvYXJkQXJyYXlbeF1beSAtIGldICE9PSB1bmRlZmluZWQgJiYgXG4gICAgICAgICAgICAgICAgICAgIHBsYXllck9iamVjdC5ib2FyZC5nYW1lYm9hcmRBcnJheVt4XVt5IC0gaV0uaGl0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzQXJyYXkucHVzaChbeCwgeSAtIGldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyByaWdodCBvcHRpb25cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllck9iamVjdC5ib2FyZC5nYW1lYm9hcmRBcnJheVt4XVt5ICsgaV0gIT09IHVuZGVmaW5lZCAmJiBcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyT2JqZWN0LmJvYXJkLmdhbWVib2FyZEFycmF5W3hdW3kgKyBpXS5oaXQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXNBcnJheS5wdXNoKFt4LCB5ICsgaV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9zc2libGVNb3Zlc0FycmF5O1xuICAgIH1cblxuICAgIEFJR2V0UG9zc2libGVNb3Zlc1ZlcnRpY2FsKGNvcmRzLCBzaGlwSUQsIHBsYXllck9iamVjdCwgdmVydGljYWxVcCA9IHRydWUpIHtcbiAgICAgICAgbGV0IHNoaXBMZW5ndGggPSBwbGF5ZXJPYmplY3QuYm9hcmQuc2hpcHNbc2hpcElEXS5zaGlwQXJyYXkubGVuZ3RoO1xuICAgICAgICBsZXQgeCA9IGNvcmRzWzBdO1xuICAgICAgICBsZXQgeSA9IGNvcmRzWzFdO1xuICAgICAgICBsZXQgcG9zc2libGVNb3Zlc0FycmF5ID0gW107XG4gICAgICAgIFxuICAgICAgICBpZiAodmVydGljYWxVcCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gdXAgb3B0aW9uXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJPYmplY3QuYm9hcmQuZ2FtZWJvYXJkQXJyYXlbeCAtIGldICE9PSB1bmRlZmluZWQgJiYgXG4gICAgICAgICAgICAgICAgICAgIHBsYXllck9iamVjdC5ib2FyZC5nYW1lYm9hcmRBcnJheVt4IC0gaV1beV0uaGl0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZU1vdmVzQXJyYXkucHVzaChbeCAtIGksIHldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBkb3duIG9wdGlvblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyT2JqZWN0LmJvYXJkLmdhbWVib2FyZEFycmF5W3ggKyBpXSAhPT0gdW5kZWZpbmVkICYmIFxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJPYmplY3QuYm9hcmQuZ2FtZWJvYXJkQXJyYXlbeCArIGldW3ldLmhpdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zc2libGVNb3Zlc0FycmF5LnB1c2goW3ggKyBpLCB5XSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3NzaWJsZU1vdmVzQXJyYXk7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlcyBlbXB0eSBzdWJhcnJheXMgd2l0aCBwb3NzaWJsZSBtb3Zlc1xuICAgIEFJUmVtb3ZlQXJyYXlzV2l0aEVtcHR5TW92ZXMobW92ZXNBcnJheSkge1xuICAgICAgICBsZXQgbmV3QXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3Zlc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobW92ZXNBcnJheVtpXS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgICAgICBuZXdBcnJheS5wdXNoKG1vdmVzQXJyYXlbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFBsYXllciwgQ29tcHV0ZXIgfTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihhcnJheVdpdGhDb29yZGluYXRlcykge1xuICAgICAgICAvLyBlLmcuIFtbMCwgMF0sIFswLCAxXSwgWzAsIDJdXSBvciBbWzAsIDBdLCBbMSwgMF0sIFsyLCAwXV1cbiAgICAgICAgdGhpcy5zaGlwQXJyYXkgPSBhcnJheVdpdGhDb29yZGluYXRlcztcbiAgICAgICAgdGhpcy5oaXRzQXJyYXkgPSBbXTtcbiAgICB9XG5cbiAgICAvLyBlLmcuIFswLCAwXVxuICAgIGhpdChjb3JkQXJyYXkpIHtcbiAgICAgICAgLy8gY2hlY2tzIGlmIHRoZSBjb29yZGluYXRlcyBhcmUgYWxyZWFkeSBpbiB0aGUgaGl0c0FycmF5ICh0byBhdm9pZCB0aGUgc2FtZSB2YWx1ZXMgbXVsdGlwbGUgdGltZXMpIFxuICAgICAgICAvLyBhbmQgaWYgdGhleSBtYXRjaCB0aGUgdmFsdWVzIGluIHRoZSBzaGlwIGFycmF5IChhY2NlcHQgb25seSB2YWx1ZXMgcmVsZXZhbnQgdG8gdGhpcyBzaGlwKVxuICAgICAgICBpZiAodGhpcy5jaGVja0lmQ29yZHNBbHJlYWR5SW5BcnJheSh0aGlzLmhpdHNBcnJheSwgY29yZEFycmF5KSA9PT0gZmFsc2UgJiYgdGhpcy5jaGVja0lmQ29yZHNBbHJlYWR5SW5BcnJheSh0aGlzLnNoaXBBcnJheSwgY29yZEFycmF5KSkge1xuICAgICAgICAgICAgdGhpcy5oaXRzQXJyYXkucHVzaChjb3JkQXJyYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZS5nLiBoaXRzQXJyYXkgPSBbWzEsIDJdLCBbMywgNF1dXG4gICAgY2hlY2tJZkNvcmRzQWxyZWFkeUluQXJyYXkoaGl0c0FycmF5LCBjb3Jkc0FycmF5KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGl0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29yZHNBcnJheVswXSA9PT0gaGl0c0FycmF5W2ldWzBdICYmIGNvcmRzQXJyYXlbMV0gPT09IGhpdHNBcnJheVtpXVsxXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLnNoaXBBcnJheS5sZW5ndGggPT09IHRoaXMuaGl0c0FycmF5Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUtaW5kZXguY3NzJztcbmltcG9ydCB7IHVwcGVyU2NyZWVuLCBib2FyZFNjcmVlbiB9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgeyBpbml0aWFsaXplR2FtZSB9IGZyb20gJy4vZ2FtZSc7XG5cbnVwcGVyU2NyZWVuKCk7XG5ib2FyZFNjcmVlbigpO1xuXG5jb25zdCByZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhcnQtYnRuJyk7XG5yZXN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLmN1cnJlbnRUYXJnZXQudGV4dENvbnRlbnQgPSAnUmVzdGFydCBHYW1lJ1xuXG4gICAgLy8gcmVtb3ZlcyBleGlzdGluZyBib2FyZHNcbiAgICBjb25zdCBncmlkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkLWNvbnRhaW5lcicpO1xuICAgIGlmIChncmlkcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgZ3JpZHNbMF0ucmVtb3ZlKCk7XG4gICAgICAgIGdyaWRzWzFdLnJlbW92ZSgpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mbycpLnRleHRDb250ZW50ID0gJyc7XG4gICAgfVxuICAgIFxuICAgIGluaXRpYWxpemVHYW1lKCk7XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==