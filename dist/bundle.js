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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/galleryItems.json":
/*!*******************************!*\
  !*** ./src/galleryItems.json ***!
  \*******************************/
/*! exports provided: images, default */
/***/ (function(module) {

eval("module.exports = {\"images\":[{\"thumb\":\"./assets/images/gallery/thumb.jpg\",\"src\":\"./assets/images/gallery/thumb.jpg\",\"tags\":[]},{\"thumb\":\"./assets/images/gallery/thumb.jpg\",\"src\":\"./assets/images/gallery/thumb.jpg\",\"tags\":[]},{\"thumb\":\"./assets/images/gallery/thumb.jpg\",\"src\":\"./assets/images/gallery/thumb.jpg\",\"tags\":[]},{\"thumb\":\"./assets/images/gallery/thumb.jpg\",\"src\":\"./assets/images/gallery/thumb.jpg\",\"tags\":[]},{\"thumb\":\"./assets/images/gallery/thumb.jpg\",\"src\":\"./assets/images/gallery/thumb.jpg\",\"tags\":[]},{\"thumb\":\"./assets/images/gallery/thumb.jpg\",\"src\":\"./assets/images/gallery/thumb.jpg\",\"tags\":[]},{\"thumb\":\"./assets/images/gallery/thumb.jpg\",\"src\":\"./assets/images/gallery/thumb.jpg\",\"tags\":[]},{\"thumb\":\"./assets/images/gallery/thumb.jpg\",\"src\":\"./assets/images/gallery/thumb.jpg\",\"tags\":[]},{\"thumb\":\"./assets/images/gallery/thumb.jpg\",\"src\":\"./assets/images/gallery/thumb.jpg\",\"tags\":[]},{\"thumb\":\"./assets/images/gallery/thumb.jpg\",\"src\":\"./assets/images/gallery/thumb.jpg\",\"tags\":[]},{\"thumb\":\"./assets/images/gallery/thumb.jpg\",\"src\":\"./assets/images/gallery/thumb.jpg\",\"tags\":[]},{\"thumb\":\"./assets/images/gallery/thumb.jpg\",\"src\":\"./assets/images/gallery/thumb.jpg\",\"tags\":[]}]};\n\n//# sourceURL=webpack:///./src/galleryItems.json?");

/***/ }),

/***/ "./src/js/Gallery.js":
/*!***************************!*\
  !*** ./src/js/Gallery.js ***!
  \***************************/
/*! exports provided: Gallery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Gallery\", function() { return Gallery; });\n/* harmony import */ var _galleryItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../galleryItems */ \"./src/galleryItems.json\");\nvar _galleryItems__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../galleryItems */ \"./src/galleryItems.json\", 1);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\n\nclass Gallery {\n  constructor(galleryClassName) {\n    this.items = [];\n    this.$gallery = document.getElementsByClassName(galleryClassName)[0];\n    this.$itemTemplate = document.getElementById(\"galleryItemTemplate\");\n  }\n\n  loadImages() {\n    this.items = _galleryItems__WEBPACK_IMPORTED_MODULE_0__.images;\n    return this;\n  }\n\n  renderImages() {\n    let $galleryItems = document.createDocumentFragment();\n    this.items.forEach((item, index) => {\n      let $item = this.$itemTemplate.cloneNode(true);\n      let $thumb = $item.content.querySelector(\"img\");\n      let $li = $item.content.querySelector(\"li\");\n      $thumb.setAttribute(\"src\", item.thumb);\n      $li.dataset.imageId = index;\n      $li.classList.add(\"js\");\n      $galleryItems.appendChild($item.content);\n    });\n    this.$gallery.appendChild($galleryItems);\n    return this;\n  }\n\n  setEvents() {\n    this.$gallery.addEventListener(\"click\", event => {\n      const image = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getRootElement\"])(event.target, \"js\");\n\n      if (image) {\n        console.log(image.dataset.imageId);\n      }\n    });\n  }\n\n}\n\n//# sourceURL=webpack:///./src/js/Gallery.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/index.scss */ \"./src/scss/index.scss\");\n/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n/* harmony import */ var _Gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gallery */ \"./src/js/Gallery.js\");\n\n\n\nconst linkSelector = \"nav-list__item\";\nconst tabContentSelector = \"tab\";\nconst links = [...document.getElementsByClassName(linkSelector)];\nconst tabContent = [...document.getElementsByClassName(tabContentSelector)];\nlinks.forEach(link => link.addEventListener(\"click\", function (event) {\n  const rootElement = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getRootElement\"])(event.target, linkSelector);\n  const tabName = rootElement.dataset.tab;\n  links.forEach(item => setActiveClass(item, `${linkSelector}--${tabName}`, `${linkSelector}--active`));\n  tabContent.forEach(item => setActiveClass(item, tabName, `${tabContentSelector}--active`));\n}));\n\nfunction setActiveClass(item, searchClassName, activeClassName) {\n  item.classList.contains(searchClassName) ? item.classList.add(activeClassName) : item.classList.remove(activeClassName);\n}\n\nconst imageGallery = new _Gallery__WEBPACK_IMPORTED_MODULE_2__[\"Gallery\"](\"gallery-list\");\nimageGallery.loadImages().renderImages().setEvents();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: getRootElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRootElement\", function() { return getRootElement; });\nfunction getRootElement(elem, className) {\n  if (elem == document) return null;else return elem.classList.contains(className) ? elem : getRootElement(elem.parentElement, className);\n}\n\n\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/index.scss?");

/***/ })

/******/ });