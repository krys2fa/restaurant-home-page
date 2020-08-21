/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_banner_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/banner.jpg */ \"./src/images/banner.jpg\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;800&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_banner_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: 'Poppins', sans-serif;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  height: 100%;\\n}\\n\\nnav {\\n  justify-content: space-between;\\n}\\n\\nnav ul {\\n  list-style-type: none;\\n  margin-right: 60px;\\n}\\n\\nnav li {\\n  color: #fb704f;\\n  font-weight: 500;\\n  font-size: 35px;\\n  margin: 10px 20px;\\n}\\n\\nform {\\n  width: 80%;\\n  background-color: #fff;\\n  padding: 20px;\\n  margin: 40px auto;\\n  border-radius: 10px;\\n}\\n\\ninput,\\ntextarea {\\n  width: 100%;\\n  padding: 12px 20px;\\n  border-radius: 4px;\\n  box-sizing: border-box;\\n  display: block;\\n  margin: 20px auto;\\n  font-family: 'Poppins', sans-serif;\\n}\\n\\ntextarea {\\n  border: 2px solid #000;\\n}\\n\\ntextarea:invalid,\\ninput:invalid {\\n  border: 2px dashed red;\\n}\\n\\ninput:invalid:required {\\n  background-image: linear-gradient(to right, #fff, #fb704f);\\n}\\n\\n.logo {\\n  height: 100px;\\n  width: 100px;\\n  border-radius: 100%;\\n  margin: 10px 40px;\\n}\\n\\n.banner-div {\\n  font-size: 42px;\\n  color: #f15631;\\n  margin: 145px 40px;\\n  font-weight: 800;\\n}\\n\\n.home-bg {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat center center fixed;\\n  background-size: cover;\\n}\\n\\n.main-bg {\\n  background-color: #232323;\\n}\\n\\n.btn {\\n  background-color: #f15631;\\n  width: 15%;\\n  border-radius: 20px;\\n  font-size: 16px;\\n  font-family: 'Poppins', sans-serif;\\n}\\n\\n.flex-h {\\n  display: flex;\\n}\\n\\n.space-between {\\n  justify-content: space-between;\\n}\\n\\n.space-around {\\n  justify-content: space-around;\\n}\\n\\n.dish,\\n.special-offer {\\n  margin: 40px;\\n  color: #fff;\\n}\\n\\n.img-div {\\n  margin: 20px;\\n}\\n\\n.items-list {\\n  margin: 20px;\\n  margin-left: -60px;\\n  justify-content: space-evenly;\\n}\\n\\n#content {\\n  height: 100%;\\n}\\n\\n@media only screen and (min-width: 320px) and (max-width: 767px) {\\n  nav li {\\n    font-size: 15px;\\n    margin: 10px;\\n  }\\n\\n  .logo {\\n    height: 60px;\\n    width: 60px;\\n    margin-left: 10px;\\n  }\\n\\n  #menu-list {\\n    margin-left: -100px;\\n  }\\n\\n  nav ul {\\n    margin-right: 0;\\n  }\\n\\n  .banner-div {\\n    margin: 0 40px;\\n    font-weight: 500;\\n  }\\n\\n  .btn {\\n    width: 35%;\\n  }\\n\\n  .img-div {\\n    display: block;\\n    margin-bottom: 20px;\\n  }\\n\\n  .items-list {\\n    margin: 0;\\n    display: block;\\n  }\\n}\\n\\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\\n  nav li {\\n    font-size: 25px;\\n  }\\n\\n  .logo {\\n    height: 80px;\\n    width: 80px;\\n  }\\n\\n  .banner-div {\\n    font-size: 55px;\\n    font-weight: 500;\\n  }\\n}\\n\\n@media only screen and (min-width: 1024px) and (max-width: 1439px) {\\n  .banner-div {\\n    font-size: 52px;\\n    font-weight: 600;\\n  }\\n}\\n\\n@media only screen and (min-width: 1440px) and (max-width: 2559px) {\\n  .img-div {\\n    justify-content: space-evenly;\\n  }\\n\\n  .dish h3,\\n  .dish p,\\n  .special-offer h3,\\n  .special-offer p {\\n    margin: 20px 40px;\\n  }\\n\\n  .banner-div {\\n    font-size: 60px;\\n  }\\n\\n  nav li {\\n    font-size: 55px;\\n  }\\n\\n  .dish,\\n  .special-offer {\\n    font-size: 21px;\\n  }\\n}\\n\\n@media only screen and (min-width: 2560px) {\\n  .img-div {\\n    justify-content: space-evenly;\\n  }\\n\\n  .dish h3,\\n  .dish p,\\n  .special-offer h3,\\n  .special-offer p {\\n    margin: 20px 40px;\\n  }\\n\\n  .banner-div {\\n    font-size: 100px;\\n    font-weight: 800;\\n    margin: 500px 100px;\\n  }\\n\\n  nav li {\\n    font-size: 100px;\\n  }\\n\\n  .dish,\\n  .special-offer {\\n    font-size: 40px;\\n  }\\n\\n  .logo {\\n    height: 200px;\\n    width: 200px;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: homePageLoad, contactPageLoad, menuPageLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"homePageLoad\", function() { return homePageLoad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactPageLoad\", function() { return contactPageLoad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menuPageLoad\", function() { return menuPageLoad; });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav */ \"./src/components/nav.js\");\n/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/form */ \"./src/components/form.js\");\n/* harmony import */ var _components_catalogue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/catalogue */ \"./src/components/catalogue.js\");\n\n\n\n\n\nconst navbar = () => {\n  const nav = document.createElement('nav');\n  const tabs = Object(_components_nav__WEBPACK_IMPORTED_MODULE_1__[\"navMenu\"])();\n\n  nav.classList.add('flex-h');\n  nav.appendChild(Object(_components_nav__WEBPACK_IMPORTED_MODULE_1__[\"logo\"])());\n  nav.appendChild(tabs);\n  return nav;\n};\n\nconst homePageLoad = (content) => {\n  document.body.classList.remove('home-bg');\n  document.body.classList.add('home-bg');\n\n  content.innerHTML = '';\n  content.appendChild(navbar());\n\n\n  const divElement = document.createElement('div');\n  divElement.innerHTML = '<p>Your home of authentic ghanaian dishes...</p>';\n  divElement.classList.add('banner-div');\n  content.appendChild(divElement);\n};\n\nconst clearPage = (content) => {\n  document.body.classList.remove('home-bg');\n  document.body.classList.add('main-bg');\n  content.innerHTML = '';\n};\nconst menuPageLoad = (content) => {\n  clearPage(content);\n  content.appendChild(navbar());\n  content.appendChild(Object(_components_catalogue__WEBPACK_IMPORTED_MODULE_3__[\"specials\"])());\n  content.appendChild(Object(_components_catalogue__WEBPACK_IMPORTED_MODULE_3__[\"dishes\"])());\n};\n\nconst contactPageLoad = (content) => {\n  clearPage(content);\n  content.appendChild(navbar());\n  content.appendChild(Object(_components_form__WEBPACK_IMPORTED_MODULE_2__[\"form\"])());\n};\n\n\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/components/catalogue.js":
/*!*************************************!*\
  !*** ./src/components/catalogue.js ***!
  \*************************************/
/*! exports provided: specials, dishes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"specials\", function() { return specials; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dishes\", function() { return dishes; });\n/* harmony import */ var _images_fufu_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/fufu.jpg */ \"./src/images/fufu.jpg\");\n/* harmony import */ var _images_banku_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/banku.jpg */ \"./src/images/banku.jpg\");\n/* harmony import */ var _images_jollof_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/jollof.jpg */ \"./src/images/jollof.jpg\");\n/* harmony import */ var _images_waakye_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/waakye.jpg */ \"./src/images/waakye.jpg\");\n/* harmony import */ var _images_kenkey_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/kenkey.jpg */ \"./src/images/kenkey.jpg\");\n\n\n\n\n\n\nconst imageCreator = (source, cssClass) => {\n  const image = new Image();\n  image.src = source;\n  image.classList.add(cssClass);\n  return image;\n};\n\nconst dishCreator = (picture, cssClass, name, price) => {\n  const dish = document.createElement('div');\n  const dishDetail = document.createElement('div');\n\n  const img = imageCreator(picture, cssClass);\n\n  const dishName = document.createElement('h3');\n  dishName.innerHTML = name;\n\n  const dishPrice = document.createElement('p');\n  dishPrice.innerHTML = price;\n\n  dishDetail.appendChild(dishName);\n  dishDetail.appendChild(dishPrice);\n\n  dish.appendChild(img);\n  dish.appendChild(dishDetail);\n\n  dish.classList.add('flex-h');\n\n  return dish;\n};\n\nconst specials = () => {\n  const specialOffer = document.createElement('div');\n  specialOffer.innerHTML = '<h3>SPECIAL OFFER</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>';\n\n  const dishOne = dishCreator(_images_banku_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"], 'logo', 'Banku', 'GHS 15.50');\n  const dishTwo = dishCreator(_images_waakye_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"], 'logo', 'Waakye', 'GHS 25.00');\n  const dishThree = dishCreator(_images_jollof_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], 'logo', 'Jollof Rice', 'GHS 12.00');\n\n  const imgDiv = document.createElement('div');\n  imgDiv.classList.add('img-div', 'flex-h');\n\n  imgDiv.appendChild(dishOne);\n  imgDiv.appendChild(dishTwo);\n  imgDiv.appendChild(dishThree);\n\n  specialOffer.appendChild(imgDiv);\n\n  specialOffer.classList.add('special-offer');\n\n  return specialOffer;\n};\n\nconst dishes = () => {\n  const items = document.createElement('div');\n  const itemList = document.createElement('div');\n  const itemsOne = document.createElement('div');\n  const itemsTwo = document.createElement('div');\n\n  itemList.classList.add('flex-h', 'items-list');\n\n  const dishOne = dishCreator(_images_kenkey_jpg__WEBPACK_IMPORTED_MODULE_4__[\"default\"], 'logo', 'Kenkey', 'GHS 15.50');\n  const dishTwo = dishCreator(_images_fufu_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"], 'logo', 'Fufu', 'GHS 25.00');\n\n  itemsOne.appendChild(dishOne);\n  itemsTwo.appendChild(dishTwo);\n\n  items.innerHTML = '<h3>MENU</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>';\n  itemList.appendChild(itemsOne);\n  itemList.appendChild(itemsTwo);\n  items.appendChild(itemList);\n\n  items.classList.add('dish');\n\n  return items;\n};\n\n\n\n\n\n//# sourceURL=webpack:///./src/components/catalogue.js?");

/***/ }),

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/*! exports provided: form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"form\", function() { return form; });\nconst inputField = (labelName, fieldType) => {\n  const input = document.createElement('input');\n  input.setAttribute('name', labelName);\n  input.setAttribute('type', fieldType);\n  input.setAttribute('placeholder', labelName);\n  input.setAttribute('minLength', 3);\n  input.required = true;\n  return input;\n};\n\nconst textArea = (labelName) => {\n  const areaInput = document.createElement('textarea');\n  areaInput.setAttribute('placeholder', labelName);\n  areaInput.setAttribute('rows', 6);\n  areaInput.setAttribute('cols', 50);\n  areaInput.setAttribute('minLength', 3);\n  areaInput.required = true;\n  return areaInput;\n};\n\nconst button = () => {\n  const btn = document.createElement('input');\n  btn.setAttribute('type', 'submit');\n  btn.setAttribute('value', 'SEND');\n  btn.classList.add('btn');\n  return btn;\n};\n\nconst form = () => {\n  const firstNameInput = inputField('First Name', 'text');\n  const lastNameInput = inputField('Last Name', 'text');\n  const emailInput = inputField('Email', 'email');\n  const messageInput = textArea('Message');\n  const formDiv = document.createElement('form');\n\n  formDiv.appendChild(firstNameInput);\n  formDiv.appendChild(lastNameInput);\n  formDiv.appendChild(emailInput);\n  formDiv.appendChild(messageInput);\n  formDiv.appendChild(button());\n\n  return formDiv;\n};\n\n// eslint-disable-next-line import/prefer-default-export\n\n\n\n//# sourceURL=webpack:///./src/components/form.js?");

/***/ }),

/***/ "./src/components/nav.js":
/*!*******************************!*\
  !*** ./src/components/nav.js ***!
  \*******************************/
/*! exports provided: logo, navMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logo\", function() { return logo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navMenu\", function() { return navMenu; });\n/* harmony import */ var _images_banner_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/banner.jpg */ \"./src/images/banner.jpg\");\n\n\nconst logo = () => {\n  const divElement = document.createElement('div');\n  const logoImage = new Image();\n  logoImage.src = _images_banner_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  logoImage.classList.add('logo');\n  divElement.appendChild(logoImage);\n  return divElement;\n};\n\nconst navMenu = () => {\n  const ulElement = document.createElement('ul');\n  ulElement.setAttribute('id', 'menu-list');\n  const homeListElement = document.createElement('li');\n  const menuListElement = document.createElement('li');\n  const contactListElement = document.createElement('li');\n\n  homeListElement.innerHTML = 'HOME';\n  menuListElement.innerHTML = 'MENU';\n  contactListElement.innerHTML = 'CONTACT US';\n\n  ulElement.classList.add('flex-h');\n  ulElement.appendChild(homeListElement);\n  ulElement.appendChild(menuListElement);\n  ulElement.appendChild(contactListElement);\n  return ulElement;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/components/nav.js?");

/***/ }),

/***/ "./src/images/banku.jpg":
/*!******************************!*\
  !*** ./src/images/banku.jpg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"22aca5f1a73d7579ad7970a92ff0b435.jpg\");\n\n//# sourceURL=webpack:///./src/images/banku.jpg?");

/***/ }),

/***/ "./src/images/banner.jpg":
/*!*******************************!*\
  !*** ./src/images/banner.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d0cf80e56bab7f4595a9779bdb913dab.jpg\");\n\n//# sourceURL=webpack:///./src/images/banner.jpg?");

/***/ }),

/***/ "./src/images/fufu.jpg":
/*!*****************************!*\
  !*** ./src/images/fufu.jpg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b6db3d7bb22429c2f181b0670ff1f622.jpg\");\n\n//# sourceURL=webpack:///./src/images/fufu.jpg?");

/***/ }),

/***/ "./src/images/jollof.jpg":
/*!*******************************!*\
  !*** ./src/images/jollof.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"dbd590b0290ed9f27dca42df105abc91.jpg\");\n\n//# sourceURL=webpack:///./src/images/jollof.jpg?");

/***/ }),

/***/ "./src/images/kenkey.jpg":
/*!*******************************!*\
  !*** ./src/images/kenkey.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"62b1cffe6e5590096061ed09b987eaed.jpg\");\n\n//# sourceURL=webpack:///./src/images/kenkey.jpg?");

/***/ }),

/***/ "./src/images/waakye.jpg":
/*!*******************************!*\
  !*** ./src/images/waakye.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"2aa2846cb6e39174900da78812fd363e.jpg\");\n\n//# sourceURL=webpack:///./src/images/waakye.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\nconst content = document.querySelector('#content');\n\nObject(_app__WEBPACK_IMPORTED_MODULE_0__[\"homePageLoad\"])(content);\n\nconst render = (content, e) => {\n  const clickedItem = e.target.innerHTML;\n\n  if (clickedItem === 'CONTACT US') {\n    Object(_app__WEBPACK_IMPORTED_MODULE_0__[\"contactPageLoad\"])(content);\n    // eslint-disable-next-line no-use-before-define\n    handleClick();\n  } else if (clickedItem === 'MENU') {\n    Object(_app__WEBPACK_IMPORTED_MODULE_0__[\"menuPageLoad\"])(content);\n    // eslint-disable-next-line no-use-before-define\n    handleClick();\n  } else {\n    Object(_app__WEBPACK_IMPORTED_MODULE_0__[\"homePageLoad\"])(content);\n    // eslint-disable-next-line no-use-before-define\n    handleClick();\n  }\n};\n\nconst handleClick = () => {\n  document\n    .getElementById('menu-list')\n    .addEventListener('click', (e) => render(content, e));\n};\n\nhandleClick();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });