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

module.exports = {"images":[{"thumb":"./assets/images/gallery/thumb.jpg","src":"./assets/images/gallery/thumb.jpg","tags":[]},{"thumb":"./assets/images/gallery/thumb.jpg","src":"./assets/images/gallery/big.jpg","tags":[]},{"thumb":"./assets/images/gallery/thumb.jpg","src":"./assets/images/gallery/big.jpg","tags":[]},{"thumb":"./assets/images/gallery/thumb.jpg","src":"./assets/images/gallery/big.jpg","tags":[]},{"thumb":"./assets/images/gallery/thumb.jpg","src":"./assets/images/gallery/big.jpg","tags":[]},{"thumb":"./assets/images/gallery/thumb.jpg","src":"./assets/images/gallery/big.jpg","tags":[]},{"thumb":"./assets/images/gallery/thumb.jpg","src":"./assets/images/gallery/big.jpg","tags":[]},{"thumb":"./assets/images/gallery/thumb.jpg","src":"./assets/images/gallery/big.jpg","tags":[]},{"thumb":"./assets/images/gallery/thumb.jpg","src":"./assets/images/gallery/big.jpg","tags":[]},{"thumb":"./assets/images/gallery/thumb.jpg","src":"./assets/images/gallery/big.jpg","tags":[]},{"thumb":"./assets/images/gallery/thumb.jpg","src":"./assets/images/gallery/big.jpg","tags":[]},{"thumb":"./assets/images/gallery/thumb.jpg","src":"./assets/images/gallery/big.jpg","tags":[]}]};

/***/ }),

/***/ "./src/js/Gallery.js":
/*!***************************!*\
  !*** ./src/js/Gallery.js ***!
  \***************************/
/*! exports provided: Gallery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gallery", function() { return Gallery; });
/* harmony import */ var _galleryItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../galleryItems */ "./src/galleryItems.json");
var _galleryItems__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../galleryItems */ "./src/galleryItems.json", 1);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Popup */ "./src/js/Popup.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Gallery =
/*#__PURE__*/
function () {
  function Gallery(galleryClassName) {
    _classCallCheck(this, Gallery);

    this.items = [];
    this.$gallery = document.getElementsByClassName(galleryClassName)[0];
    this.$itemTemplate = document.getElementById("galleryItemTemplate");
    this.popUp = new _Popup__WEBPACK_IMPORTED_MODULE_2__["default"](".modal", ".popup__close-button");
  }

  _createClass(Gallery, [{
    key: "loadImages",
    value: function loadImages() {
      this.items = _galleryItems__WEBPACK_IMPORTED_MODULE_0__.images;
      return this;
    }
  }, {
    key: "renderImages",
    value: function renderImages() {
      var _this = this;

      var $galleryItems = document.createDocumentFragment();
      this.items.forEach(function (item, index) {
        var $item = _this.$itemTemplate.cloneNode(true);

        var $thumb = $item.content.querySelector("img");
        var $li = $item.content.querySelector("li");
        $thumb.setAttribute("src", item.thumb);
        $li.dataset.imageId = index;
        $li.classList.add("js");
        $galleryItems.appendChild($item.content);
      });
      this.$gallery.appendChild($galleryItems);
      return this;
    }
  }, {
    key: "initEventListeners",
    value: function initEventListeners() {
      var _this2 = this;

      this.$gallery.addEventListener("click", function (event) {
        var image = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRootElement"])(event.target, "js");

        if (image) {
          var imageId = image.dataset.imageId;
          var imageSrc = _this2.items[imageId].src;

          _this2.popUp.loadImage(imageSrc);

          _this2.popUp.showPopup();
        }
      });
    }
  }]);

  return Gallery;
}();

/***/ }),

/***/ "./src/js/Popup.js":
/*!*************************!*\
  !*** ./src/js/Popup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PopUp; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ANIMATED_LOADER = "./assets/images/loader.svg";

var PopUp =
/*#__PURE__*/
function () {
  function PopUp(modalSelector, closeButtonSelector) {
    _classCallCheck(this, PopUp);

    this.$modal = document.querySelector(modalSelector);
    this.$closeButton = this.$modal.querySelector(closeButtonSelector);
    this.$image = this.$modal.querySelector("img");
    this.init();
  }

  _createClass(PopUp, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.$closeButton.addEventListener("click", function (e) {
        return _this.closePopUp();
      });
      this.closePopUp();
    }
  }, {
    key: "closePopUp",
    value: function closePopUp() {
      this.$modal.style = "display:none";
    }
  }, {
    key: "showPopup",
    value: function showPopup() {
      this.$modal.style = "display:flex";
    }
  }, {
    key: "loadImage",
    value: function loadImage(imageSrc) {
      var _this2 = this;

      this.$image.setAttribute("src", ANIMATED_LOADER);
      var imageLoader = new Image();
      imageLoader.src = imageSrc;

      imageLoader.onload = function () {
        return _this2.$image.setAttribute("src", imageLoader.src);
      };
    }
  }]);

  return PopUp;
}();



/***/ }),

/***/ "./src/js/Tabs.js":
/*!************************!*\
  !*** ./src/js/Tabs.js ***!
  \************************/
/*! exports provided: Tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var defaults = function defaults() {
  return {
    headingSelector: ".nav-list__item",
    contentSelector: ".tab",
    activeClassName: "nav-list__item--active"
  };
};

var Tabs =
/*#__PURE__*/
function () {
  function Tabs() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaults(),
        headingSelector = _ref.headingSelector,
        contentSelector = _ref.contentSelector,
        activeClassName = _ref.activeClassName;

    _classCallCheck(this, Tabs);

    var _this$getElements = this.getElements(headingSelector, contentSelector),
        tabHeadElements = _this$getElements.tabHeadElements,
        tabContentElements = _this$getElements.tabContentElements;

    this.addTabIndex(tabHeadElements);
    this.attachListeners({
      tabHeadElements: tabHeadElements,
      tabContentElements: tabContentElements,
      activeClassName: activeClassName
    });
    this.toggleTabs({
      tabHeadElements: tabHeadElements,
      tabContentElements: tabContentElements,
      activeClassName: activeClassName
    }, 0);
  }

  _createClass(Tabs, [{
    key: "getElements",
    value: function getElements(headingSelector, contentSelector) {
      var tabHeadElements = _toConsumableArray(document.querySelectorAll(headingSelector));

      var tabContentElements = _toConsumableArray(document.querySelectorAll(contentSelector));

      return {
        tabHeadElements: tabHeadElements,
        tabContentElements: tabContentElements
      };
    }
  }, {
    key: "addTabIndex",
    value: function addTabIndex(listOfElements) {
      listOfElements.map(function (element, index) {
        return element.dataset.tab = index;
      });
    }
  }, {
    key: "attachListeners",
    value: function attachListeners(options) {
      var _this = this;

      var tabHeadElements = options.tabHeadElements;
      tabHeadElements.map(function (element) {
        return element.addEventListener('click', function (_ref2) {
          var currentTarget = _ref2.currentTarget;
          var selectedTabIndex = currentTarget.dataset.tab;

          _this.toggleTabs(options, selectedTabIndex);
        });
      });
    }
  }, {
    key: "toggleTabs",
    value: function toggleTabs(_ref3, selectedTabIndex) {
      var _this2 = this;

      var tabHeadElements = _ref3.tabHeadElements,
          tabContentElements = _ref3.tabContentElements,
          activeClassName = _ref3.activeClassName;
      tabHeadElements.map(function (heading) {
        return _this2.makeInactive(heading, activeClassName);
      });
      this.makeActive(tabHeadElements[selectedTabIndex], activeClassName);
      tabContentElements.map(function (tab) {
        return _this2.hide(tab);
      });
      this.show(tabContentElements[selectedTabIndex]);
    }
  }, {
    key: "hide",
    value: function hide(element) {
      element.style.display = "none";
    }
  }, {
    key: "show",
    value: function show(element) {
      element.style.display = "";
    }
  }, {
    key: "makeActive",
    value: function makeActive(element, className) {
      element.classList.add(className);
    }
  }, {
    key: "makeInactive",
    value: function makeInactive(element, className) {
      element.classList.remove(className);
    }
  }]);

  return Tabs;
}();

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/index.scss */ "./src/scss/index.scss");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tabs */ "./src/js/Tabs.js");
/* harmony import */ var _Gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Gallery */ "./src/js/Gallery.js");



var tabs = new _Tabs__WEBPACK_IMPORTED_MODULE_1__["Tabs"]();
var imageGallery = new _Gallery__WEBPACK_IMPORTED_MODULE_2__["Gallery"]("gallery-list");
imageGallery.loadImages().renderImages().initEventListeners();

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: getRootElement, toggleActiveClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRootElement", function() { return getRootElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleActiveClass", function() { return toggleActiveClass; });
function getRootElement(elem, className) {
  if (elem == null) return null;else return elem.classList.contains(className) ? elem : getRootElement(elem.parentElement, className);
}

function toggleActiveClass(item, searchClassName, activeClassName) {
  item.classList.contains(searchClassName) ? item.classList.add(activeClassName) : item.classList.remove(activeClassName);
}



/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map