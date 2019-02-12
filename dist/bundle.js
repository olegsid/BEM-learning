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



class Gallery {
  constructor(galleryClassName) {
    this.items = [];
    this.$gallery = document.getElementsByClassName(galleryClassName)[0];
    this.$itemTemplate = document.getElementById("galleryItemTemplate");
    this.popUp = new _Popup__WEBPACK_IMPORTED_MODULE_2__["default"](".modal", ".popup__close-button");
  }

  loadImages() {
    this.items = _galleryItems__WEBPACK_IMPORTED_MODULE_0__.images;
    return this;
  }

  renderImages() {
    let $galleryItems = document.createDocumentFragment();
    this.items.forEach((item, index) => {
      let $item = this.$itemTemplate.cloneNode(true);
      let $thumb = $item.content.querySelector("img");
      let $li = $item.content.querySelector("li");
      $thumb.setAttribute("src", item.thumb);
      $li.dataset.imageId = index;
      $li.classList.add("js");
      $galleryItems.appendChild($item.content);
    });
    this.$gallery.appendChild($galleryItems);
    return this;
  }

  initEventListeners() {
    this.$gallery.addEventListener("click", event => {
      const image = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRootElement"])(event.target, "js");

      if (image) {
        const imageId = image.dataset.imageId;
        const imageSrc = this.items[imageId].src;
        this.popUp.loadImage(imageSrc);
        this.popUp.showPopup();
      }
    });
  }

}

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
const ANIMATED_LOADER = "./assets/images/loader.svg";
class PopUp {
  constructor(modalSelector, closeButtonSelector) {
    this.$modal = document.querySelector(modalSelector);
    this.$closeButton = this.$modal.querySelector(closeButtonSelector);
    this.$image = this.$modal.querySelector("img");
    this.init();
  }

  init() {
    this.$closeButton.addEventListener("click", e => this.closePopUp());
    this.closePopUp();
  }

  closePopUp() {
    this.$modal.style = "display:none";
  }

  showPopup() {
    this.$modal.style = "display:flex";
  }

  loadImage(imageSrc) {
    this.$image.setAttribute("src", ANIMATED_LOADER);
    const imageLoader = new Image();
    imageLoader.src = imageSrc;

    imageLoader.onload = () => this.$image.setAttribute("src", imageLoader.src);
  }

}

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
const defaults = () => ({
  headingSelector: ".nav-list__item",
  contentSelector: ".tab",
  activeClassName: "nav-list__item--active"
});

class Tabs {
  constructor({
    headingSelector,
    contentSelector,
    activeClassName
  } = defaults()) {
    const {
      tabHeadElements,
      tabContentElements
    } = this.getElements(headingSelector, contentSelector);
    this.addTabIndex(tabHeadElements);
    this.attachListeners({
      tabHeadElements,
      tabContentElements,
      activeClassName
    });
    this.toggleTabs({
      tabHeadElements,
      tabContentElements,
      activeClassName
    }, 0);
  }

  getElements(headingSelector, contentSelector) {
    const tabHeadElements = [...document.querySelectorAll(headingSelector)];
    const tabContentElements = [...document.querySelectorAll(contentSelector)];
    return {
      tabHeadElements,
      tabContentElements
    };
  }

  addTabIndex(listOfElements) {
    listOfElements.map((element, index) => element.dataset.tab = index);
  }

  attachListeners(options) {
    const {
      tabHeadElements
    } = options;
    tabHeadElements.map(element => element.addEventListener('click', ({
      currentTarget
    }) => {
      const selectedTabIndex = currentTarget.dataset.tab;
      this.toggleTabs(options, selectedTabIndex);
    }));
  }

  toggleTabs({
    tabHeadElements,
    tabContentElements,
    activeClassName
  }, selectedTabIndex) {
    tabHeadElements.map(heading => this.makeInactive(heading, activeClassName));
    this.makeActive(tabHeadElements[selectedTabIndex], activeClassName);
    tabContentElements.map(tab => this.hide(tab));
    this.show(tabContentElements[selectedTabIndex]);
  }

  hide(element) {
    element.style.display = "none";
  }

  show(element) {
    element.style.display = "";
  }

  makeActive(element, className) {
    element.classList.add(className);
  }

  makeInactive(element, className) {
    element.classList.remove(className);
  }

}

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



const tabs = new _Tabs__WEBPACK_IMPORTED_MODULE_1__["Tabs"]();
const imageGallery = new _Gallery__WEBPACK_IMPORTED_MODULE_2__["Gallery"]("gallery-list");
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