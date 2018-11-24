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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/arrows.js":
/*!**********************!*\
  !*** ./js/arrows.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return arrows; });
var arrows = function arrows() {
  var left = document.createElement('div');
  var right = document.createElement('div');
  left.innerHTML = '<i class="fas fa-arrow-left"></i>';
  right.innerHTML = '<i class="fas fa-arrow-right"></i>';
  left.classList.add('controls');
  left.classList.add('left');
  right.classList.add('controls');
  right.classList.add('right');
  document.body.appendChild(left);
  document.body.appendChild(right);
  return [left, right];
};



/***/ }),

/***/ "./js/element.js":
/*!***********************!*\
  !*** ./js/element.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Element; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var cutBack = function cutBack(number) {
  var num = parseInt(number, 10);

  if (num > 1000000) {
    num = Math.floor(num / 1000000);
    num += 'M';
  } else if (num > 1000) {
    num = Math.floor(num / 1000);
    num += 'K';
  }

  return num;
};

var Element =
/*#__PURE__*/
function () {
  function Element() {
    var _this = this;

    _classCallCheck(this, Element);

    this.video = document.createElement('div');
    this.thumbnails = document.createElement('img');
    this.title = document.createElement('a');
    this.channel = document.createElement('a');
    this.description = document.createElement('div');
    this.statistics = document.createElement('ul');
    this.title.setAttribute('target', '_blank');
    this.channel.setAttribute('target', '_blank');
    Object.keys(this).forEach(function (key) {
      _this[key].classList.add(key);

      if (key !== 'video') {
        _this.video.appendChild(_this[key]);
      }
    });
    return this;
  }

  _createClass(Element, [{
    key: "fillStatistics",
    value: function fillStatistics(statistics) {
      var _this2 = this;

      var faIcons = ['<i class="far fa-eye"></i>', '<i class="far fa-thumbs-up"></i>', '<i class="far fa-thumbs-down"></i>', '<i class="far fa-star"></i>', '<i class="far fa-comment"></i>', '<i class="far fa-calendar-alt"></i>'];
      Object.keys(statistics).forEach(function (key, i) {
        var li = document.createElement('li');
        li.classList.add(key);
        li.innerHTML = faIcons[i] + cutBack(statistics[key]);

        _this2.statistics.appendChild(li);
      });
      this.publishedAt = document.createElement('li');
      this.publishedAt.innerHTML = "".concat(faIcons[5]).concat(this.publishedDate);
      this.statistics.appendChild(this.publishedAt);
      return this;
    }
  }, {
    key: "fillMain",
    value: function fillMain(main) {
      this.thumbnails.src = main.snippet.thumbnails.medium.url;
      this.title.href = "https://www.youtube.com/watch?v=".concat(main.id.videoId);
      this.title.textContent = main.snippet.title;
      this.channel.href = "https://www.youtube.com/channel/".concat(main.snippet.channelId);
      this.channel.innerHTML = "<i class=\"fas fa-user-circle\"></i>".concat(main.snippet.channelTitle);
      this.description.textContent = main.snippet.description;
      var date = main.snippet.publishedAt.slice(0, 10).split('-');
      this.publishedDate = "".concat(date[1], ".").concat(date[0].slice(2));
      return this;
    }
  }, {
    key: "getElem",
    value: function getElem() {
      return this.video;
    }
  }]);

  return Element;
}();



/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./js/element.js");
/* harmony import */ var _youtube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./youtube */ "./js/youtube.js");
/* harmony import */ var _searchInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchInput */ "./js/searchInput.js");
/* harmony import */ var _arrows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arrows */ "./js/arrows.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tooltip */ "./js/tooltip.js");
/* harmony import */ var _videosOnPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./videosOnPage */ "./js/videosOnPage.js");






var swiper = document.createElement('div');
var youTubeSearch = new _youtube__WEBPACK_IMPORTED_MODULE_1__["default"]();
var searchElem = Object(_searchInput__WEBPACK_IMPORTED_MODULE_2__["default"])();
var input = searchElem.children[1];
var _document = document,
    body = _document.body;
var pageViewer = body.querySelector('.page');
var videosOnLoad = [];
var pageControl = document.createElement('div');
var swiperWrapper = document.createElement('div');
pageControl.classList.add('page-control');
body.appendChild(pageControl);
var activeVideo = 1;
var videosCount = 0;
var activePage = 1;
var pages = 1;
var pageToken = false;
var videosOnPage = 0;
var width = parseInt(document.documentElement.clientWidth, 10);
swiper.classList.add('swiper');
swiperWrapper.classList.add('swiper-wrapper');
swiperWrapper.appendChild(swiper);
body.appendChild(swiperWrapper);
input.autofocus = true;

var searchBy = function searchBy(query, nextpageToken, options) {
  youTubeSearch.byQuery(query, nextpageToken, options).then(function (main) {
    pageToken = main.nextPageToken;
    Array.from(main.items).forEach(function (item) {
      var video = new _element__WEBPACK_IMPORTED_MODULE_0__["default"]();
      video.fillMain(item);
      videosOnLoad.push(video);
      youTubeSearch.byID(item.id.videoId).then(function (statistics) {
        videosOnLoad[0].fillStatistics(statistics.items[0].statistics);
        swiper.appendChild(videosOnLoad[0].getElem());
        var animationTrick = videosOnLoad.shift().getElem();
        videosCount += 1;
        setTimeout(function () {
          animationTrick.style.opacity = 1;
        }, 300);
      });
    });
  });
};

var inputSubmit = function inputSubmit() {
  while (swiper.lastChild) {
    swiper.removeChild(swiper.lastChild);
  }

  pageToken = false;
  activeVideo = 1;
  videosCount = 0;
  activePage = 1;
  pages = 1;
  pageViewer.style.transform = "rotate(".concat(0, "deg)");
  searchElem.classList.add('close');
  input.blur();
  swiper.style.transform = 'translateX(0px)';
  setTimeout(function () {
    pageViewer.textContent = activePage;
  }, 200);
  var query = input.value;
  searchBy(query, pageToken);
};

var scroll = function scroll() {
  var reverse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (videosCount - activeVideo < 12) {
    searchBy(input.value, pageToken);
  }

  setTimeout(function () {
    pageViewer.textContent = activePage;
  }, 200);
  var lastSwiperPosition = parseInt(swiper.style.transform.slice(11), 10) || 0;
  var deg = parseInt(pageViewer.style.transform.slice(7), 10) || 0;

  if (reverse) {
    if (lastSwiperPosition === 0) {
      swiper.style.transform = 'translateX(0px)';
    } else {
      swiper.style.transform = "translateX(".concat(lastSwiperPosition + width, "px)");
      activeVideo -= videosOnPage;
      activePage -= 1;
    }

    pageViewer.style.transform = "rotate(".concat(deg - 360, "deg)");
  } else {
    swiper.style.transform = "translateX(".concat(lastSwiperPosition - width, "px)");
    swiper.style.minWidth = "".concat(parseInt(swiper.style.minWidth, 10) + 100, "vw");
    pageViewer.style.transform = "rotate(".concat(deg + 360, "deg)");
    activeVideo += videosOnPage;
    activePage += 1;
    pages += 1;
  }
};

var lettersOrNums = function lettersOrNums(keyCode) {
  var isUsefulSymbol = keyCode > 45 && keyCode < 90 || keyCode === 8;
  isUsefulSymbol = keyCode > 103 && keyCode < 112 || isUsefulSymbol;
  isUsefulSymbol = keyCode > 185 && keyCode < 223 || isUsefulSymbol;
  return isUsefulSymbol;
};

videosOnPage = Object(_videosOnPage__WEBPACK_IMPORTED_MODULE_5__["default"])();

var fillPageControl = function fillPageControl() {
  while (pageControl.lastChild) {
    pageControl.removeChild(pageControl.lastChild);
  }

  if (pageControl.style.opacity === '0' || pageControl.style.opacity === '') {
    for (var i = 1; i <= pages; i += 1) {
      var elem = document.createElement('div');
      var text = document.createElement('span');
      elem.classList.add('pages');
      text.textContent = i;
      elem.appendChild(text);
      pageControl.appendChild(elem);
    }

    pageControl.style.zIndex = '2';
    pageControl.style.opacity = '1';
    swiper.classList.add('blured');
  } else {
    pageControl.style.opacity = '0';
    swiper.classList.remove('blured');
    setTimeout(function () {
      pageControl.style.zIndex = -1;
    }, 100);
  }

  pageControl.scrollTop = pageControl.scrollHeight;
};

var touchListener = function touchListener() {
  var touchstart = 0;
  var touchmove = 0;
  var touchend = 0;
  var savePosition = 0;

  var touchWide = function touchWide() {
    var percent = Math.abs(touchmove * 100 / width);
    swiper.style.transform = "translateX(".concat(savePosition, "px)");

    if (percent > 5) {
      scroll(touchstart < touchend);
    }
  };

  var move = function move(event) {
    touchend = event.touches[0].screenX;
    touchmove = touchstart - touchend;
    swiper.style.transform = "translateX(".concat(savePosition - touchmove / 2, "px)");
  };

  var moveMouse = function moveMouse(event) {
    touchend = event.screenX;
    touchmove = touchstart - touchend;
    swiper.style.transform = "translateX(".concat(savePosition - touchmove / 2, "px)");
  };

  var end = function end() {
    swiper.style.transition = 'all 1s';
    touchWide();
    swiperWrapper.removeEventListener('touchmove', move);
    touchstart = 0;
    touchend = 0;
  };

  var start = function start(event) {
    touchstart = event.touches[0].screenX;
    touchend = touchstart;
    touchmove = 0;
    savePosition = parseInt(swiper.style.transform.slice(11), 10) || 0;
    swiper.style.transition = 'all 0.1s';
    swiperWrapper.addEventListener('touchmove', move);
  };

  var endMouse = function endMouse() {
    swiper.style.transition = 'all 1s';
    touchWide();
    swiperWrapper.removeEventListener('mousemove', moveMouse);
    touchstart = 0;
    touchend = 0;
  };

  var startMouse = function startMouse(event) {
    touchstart = event.screenX;
    touchend = touchstart;
    touchmove = 0;
    savePosition = parseInt(swiper.style.transform.slice(11), 10) || 0;
    swiper.style.transition = 'all 0.1s';
    swiperWrapper.addEventListener('mousemove', moveMouse);
  };

  swiperWrapper.addEventListener('touchstart', start);
  swiperWrapper.addEventListener('touchend', end);
  swiperWrapper.addEventListener('touchcansel', end);
  swiperWrapper.addEventListener('mousedown', startMouse);
  swiperWrapper.addEventListener('mouseup', endMouse);
};

var hideElems = function hideElems(e) {
  if (!searchElem.contains(e.target)) {
    searchElem.classList.add('close');
    input.blur();
  } else {
    searchElem.classList.remove('close');
    input.focus();
  }

  if (pageControl.contains(e.target) && pageControl !== e.target) {
    swiper.style.transform = "translateX(".concat(-(e.target.textContent - 1) * width, "px)");
    activeVideo = (e.target.textContent - 1) * videosOnPage + 1;
    activePage = +e.target.textContent;
    setTimeout(function () {
      pageViewer.textContent = activePage;
    }, 200);
    var deg = parseInt(pageViewer.style.transform.slice(7), 10) || 0;
    pageViewer.style.transform = "rotate(".concat(deg + 360, "deg)");
  }

  if (!pageControl.contains(e.target) && !pageViewer.contains(e.target) && pageControl.style.opacity === '1') {
    fillPageControl();
  }

  Object(_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"])();
};

searchElem.addEventListener('keypress', function (e) {
  if (e.keyCode === 13 && e.target.value) {
    inputSubmit();

    if (!document.querySelector('.controls')) {
      var controls = Object(_arrows__WEBPACK_IMPORTED_MODULE_3__["default"])();
      controls[0].addEventListener('click', function () {
        scroll(true);
      });
      controls[1].addEventListener('click', function () {
        scroll();
      });
      touchListener();
    }
  }
});
body.addEventListener('keydown', function (e) {
  if (!searchElem.contains(e.target) && lettersOrNums(e.keyCode)) {
    searchElem.classList.remove('close');
    input.focus();
  }
});
pageControl.addEventListener('mouseover', function (e) {
  if (e.target.tagName === 'SPAN') {
    Object(_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"])(e.target, e.currentTarget);
  }
});
pageControl.addEventListener('mouseout', function (e) {
  if (e.target.tagName === 'SPAN') {
    Object(_tooltip__WEBPACK_IMPORTED_MODULE_4__["default"])();
  }
});
body.addEventListener('mousedown', hideElems);
body.addEventListener('touchstart', hideElems);
pageViewer.addEventListener('click', fillPageControl);
window.addEventListener('resize', function () {
  if (videosCount) {
    width = parseInt(document.documentElement.clientWidth, 10);
    videosOnPage = Object(_videosOnPage__WEBPACK_IMPORTED_MODULE_5__["default"])();
    activePage = Math.ceil(activeVideo / videosOnPage);
    pages = Math.ceil(videosCount / videosOnPage);
    var translate = (activePage - 1) * width;
    setTimeout(function () {
      pageViewer.textContent = activePage;
    }, 200);
    setTimeout(function () {
      swiper.style.transform = "translateX(".concat(-translate, "px)");
      var deg = parseInt(pageViewer.style.transform.slice(7), 10) || 0;
      pageViewer.style.transform = "rotate(".concat(deg + 360, "deg)");
    }, 2);
  }
});

/***/ }),

/***/ "./js/searchInput.js":
/*!***************************!*\
  !*** ./js/searchInput.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createFixElem; });
var createFixElem = function createFixElem() {
  var elem = document.createElement('div');
  var searchString = document.createElement('input');
  var wrapper = document.createElement('div');
  var circle = document.createElement('div');
  var pageListener = document.createElement('div');
  elem.classList.add('search');
  searchString.classList.add('search-string');
  wrapper.classList.add('search-wrapper');
  wrapper.innerHTML = '<i class="fas fa-search"></i>';
  wrapper.appendChild(searchString);
  elem.appendChild(wrapper);
  circle.classList.add('circle');
  pageListener.classList.add('page');
  pageListener.textContent = '1';
  circle.appendChild(pageListener);
  document.body.appendChild(elem);
  document.body.appendChild(circle);
  return wrapper;
};



/***/ }),

/***/ "./js/tooltip.js":
/*!***********************!*\
  !*** ./js/tooltip.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toggleTooltip; });
var toggleTooltip = function toggleTooltip(elem) {
  if (elem) {
    var tooltip = document.createElement('div');
    var coordinates = elem.getBoundingClientRect();

    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    var border = rest[0].getBoundingClientRect();
    tooltip.textContent = "This is ".concat(elem.textContent, " page, trust me");
    var left = coordinates.left + coordinates.width / 2 - 100;
    var top = coordinates.top - 30;

    if (left < border.left) {
      left = coordinates.left;
    } else if (left + 200 > border.left + border.width) {
      left = coordinates.left + coordinates.width - 200;
    }

    if (coordinates.top - border.top < 60) {
      top = coordinates.top + coordinates.height;
    }

    tooltip.style.top = "".concat(top, "px");
    tooltip.style.left = "".concat(left, "px");
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);
  } else if (document.body.lastChild.className === 'tooltip') {
    document.body.removeChild(document.body.lastChild);
  }
};



/***/ }),

/***/ "./js/videosOnPage.js":
/*!****************************!*\
  !*** ./js/videosOnPage.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return videosOnPageCounter; });
var videosOnPageCounter = function videosOnPageCounter() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : parseInt(document.documentElement.clientWidth, 10);
  var videosOnPageCount;

  if (width >= 1300) {
    videosOnPageCount = 4;
  } else if (width >= 768) {
    videosOnPageCount = 2;
  } else {
    videosOnPageCount = 1;
  }

  return videosOnPageCount;
};



/***/ }),

/***/ "./js/youtube.js":
/*!***********************!*\
  !*** ./js/youtube.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return YouTube; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var YouTube =
/*#__PURE__*/
function () {
  function YouTube() {
    _classCallCheck(this, YouTube);

    this.API_KEY = 'AIzaSyCdISf55j9mhBorWJrGWFfkvLJPFz0toRg';
    this.URL = 'https://www.googleapis.com/youtube/v3/';
  }

  _createClass(YouTube, [{
    key: "byQuery",
    value: function byQuery(query, pageToken, optionObj) {
      var options = optionObj || {
        type: 'video',
        maxResults: 15
      };
      var optionsString = '';
      Object.keys(options).forEach(function (key) {
        optionsString += "".concat(key, "=").concat(options[key], "&");
      });

      if (pageToken) {
        optionsString += "pageToken=".concat(pageToken, "&");
      }

      optionsString += "part=snippet&q=".concat(query, "&key=").concat(this.API_KEY);
      return fetch("".concat(this.URL, "search?").concat(optionsString)).then(function (answer) {
        return answer.json();
      });
    }
  }, {
    key: "byID",
    value: function byID(id) {
      var optionsString = '';
      optionsString += "part=statistics&id=".concat(id, "&key=").concat(this.API_KEY);
      return fetch("".concat(this.URL, "videos?").concat(optionsString)).then(function (answer) {
        return answer.json();
      });
    }
  }]);

  return YouTube;
}();



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map