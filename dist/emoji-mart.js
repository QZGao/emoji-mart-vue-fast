(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["EmojiMart"] = factory();
	else
		root["EmojiMart"] = factory();
})(Object(typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}


/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r);
}


/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}


/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!********************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "../../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}


/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "../../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}


/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "../../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "../../node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "../../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(r) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!********************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toPrimitive; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "../../node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ toPropertyKey; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "../../node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "../../node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a) : void 0;
  }
}


/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/shared-props */ "./src/utils/shared-props.js");
/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/emoji-data */ "./src/utils/emoji-data.js");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


/* harmony default export */ __webpack_exports__["default"] = ({
  props: _objectSpread(_objectSpread({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_1__.EmojiProps), {}, {
    data: {
      type: Object,
      required: true
    }
  }),
  emits: ["click", "mouseenter", "mouseleave"],
  computed: {
    view: function view() {
      return new _utils_emoji_data__WEBPACK_IMPORTED_MODULE_2__.EmojiView(this.emojiObject, this.skin, this.set, this.native, this.fallback, this.tooltip, this.size);
    },
    sanitizedData: function sanitizedData() {
      return this.emojiObject._sanitized;
    },
    title: function title() {
      return this.tooltip ? this.emojiObject.short_name : null;
    },
    emojiObject: function emojiObject() {
      if (typeof this.emoji == 'string') {
        return this.data.findEmoji(this.emoji);
      } else {
        return this.emoji;
      }
    }
  },
  created: function created() {},
  methods: {
    onClick: function onClick() {
      this.$emit('click', this.emojiObject);
    },
    onMouseEnter: function onMouseEnter() {
      this.$emit('mouseenter', this.emojiObject);
    },
    onMouseLeave: function onMouseLeave() {
      this.$emit('mouseleave', this.emojiObject);
    }
  }
});

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Picker.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Picker.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vendor/raf-polyfill */ "./src/vendor/raf-polyfill.js");
/* harmony import */ var _vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_raf_polyfill__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/store */ "./src/utils/store.js");
/* harmony import */ var _utils_frequently__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/frequently */ "./src/utils/frequently.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var _utils_shared_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/shared-props */ "./src/utils/shared-props.js");
/* harmony import */ var _utils_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/picker */ "./src/utils/picker.js");
/* harmony import */ var _anchors_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./anchors.vue */ "./src/components/anchors.vue");
/* harmony import */ var _category_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category.vue */ "./src/components/category.vue");
/* harmony import */ var _preview_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./preview.vue */ "./src/components/preview.vue");
/* harmony import */ var _search_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search.vue */ "./src/components/search.vue");

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }










var I18N = {
  search: 'Search',
  notfound: 'No Emoji Found',
  categories: {
    search: 'Search Results',
    recent: 'Frequently Used',
    smileys: 'Smileys & Emotion',
    people: 'People & Body',
    nature: 'Animals & Nature',
    foods: 'Food & Drink',
    activity: 'Activity',
    places: 'Travel & Places',
    objects: 'Objects',
    symbols: 'Symbols',
    flags: 'Flags',
    custom: 'Custom'
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  props: _objectSpread(_objectSpread({}, _utils_shared_props__WEBPACK_IMPORTED_MODULE_5__.PickerProps), {}, {
    data: {
      type: Object,
      required: true
    }
  }),
  emits: ['select', 'skin-change'],
  data: function data() {
    return {
      activeSkin: this.skin || _utils_store__WEBPACK_IMPORTED_MODULE_2__["default"].get('skin') || this.defaultSkin,
      view: new _utils_picker__WEBPACK_IMPORTED_MODULE_6__.PickerView(this)
    };
  },
  computed: {
    customStyles: function customStyles() {
      return _objectSpread({
        width: this.calculateWidth + 'px'
      }, this.pickerStyles);
    },
    emojiProps: function emojiProps() {
      return {
        native: this.native,
        skin: this.activeSkin,
        set: this.set,
        emojiTooltip: this.emojiTooltip,
        emojiSize: this.emojiSize,
        selectedEmoji: this.view.previewEmoji,
        selectedEmojiCategory: this.view.previewEmojiCategory,
        onEnter: this.onEmojiEnter.bind(this),
        onLeave: this.onEmojiLeave.bind(this),
        onClick: this.onEmojiClick.bind(this)
      };
    },
    skinProps: function skinProps() {
      return {
        skin: this.activeSkin
      };
    },
    calculateWidth: function calculateWidth() {
      return this.perLine * (this.emojiSize + 12) + 12 + 2 + (0,_utils__WEBPACK_IMPORTED_MODULE_4__.measureScrollbar)();
    },
    // emojisPerRow() {
    //   const listEl = this.$refs.scrollContent
    //   const emojiEl = listEl.querySelector('.emoji-mart-emoji')
    //   return Math.floor(listEl.offsetWidth / emojiEl.offsetWidth)
    // },
    filteredCategories: function filteredCategories() {
      return this.view.filteredCategories;
    },
    mergedI18n: function mergedI18n() {
      return Object.freeze((0,_utils__WEBPACK_IMPORTED_MODULE_4__.deepMerge)(I18N, this.i18n));
    },
    idleEmoji: function idleEmoji() {
      try {
        return this.data.emoji(this.emoji);
      } catch (e) {
        console.error('Default preview emoji `' + this.emoji + '` is not available, check the Picker `emoji` property');
        console.error(e);
        return this.data.firstEmoji();
      }
    },
    isSearching: function isSearching() {
      return this.view.searchEmojis != null;
    }
  },
  watch: {
    skin: function skin() {
      this.onSkinChange(this.skin);
    }
  },
  methods: {
    onScroll: function onScroll() {
      if (this.infiniteScroll && !this.waitingForPaint) {
        this.waitingForPaint = true;
        window.requestAnimationFrame(this.onScrollPaint.bind(this));
      }
    },
    onScrollPaint: function onScrollPaint() {
      this.waitingForPaint = false;
      this.view.onScroll();
    },
    onAnchorClick: function onAnchorClick(category) {
      this.view.onAnchorClick(category);
    },
    onSearch: function onSearch(value) {
      this.view.onSearch(value);
    },
    onEmojiEnter: function onEmojiEnter(emoji) {
      this.view.onEmojiEnter(emoji);
    },
    onEmojiLeave: function onEmojiLeave(emoji) {
      this.view.onEmojiLeave(emoji);
    },
    onArrowLeft: function onArrowLeft($event) {
      var oldIdx = this.view.previewEmojiIdx;
      this.view.onArrowLeft();
      if ($event && this.view.previewEmojiIdx !== oldIdx) {
        // Prevent cursor movement inside the input
        $event.preventDefault();
      }
    },
    onArrowRight: function onArrowRight() {
      this.view.onArrowRight();
    },
    onArrowDown: function onArrowDown() {
      this.view.onArrowDown();
    },
    onArrowUp: function onArrowUp($event) {
      this.view.onArrowUp();
      // Prevent cursor movement inside the input
      $event.preventDefault();
    },
    onEnter: function onEnter() {
      if (!this.view.previewEmoji) {
        // We may press "Enter" when nothing is selected,
        // for example, if we search for "asdf".
        return;
      }
      this.$emit('select', this.view.previewEmoji);
      _utils_frequently__WEBPACK_IMPORTED_MODULE_3__["default"].add(this.view.previewEmoji);
    },
    onEmojiClick: function onEmojiClick(emoji) {
      this.$emit('select', emoji);
      _utils_frequently__WEBPACK_IMPORTED_MODULE_3__["default"].add(emoji);
    },
    onTextSelect: function onTextSelect($event) {
      // Prevent default text select event.
      // In Vue 3 it goes through the component and triggers the `select`
      // event that is supposed to be emmited only with emoji.
      // (there is no such problem in Vue 2).
      $event.stopPropagation();
    },
    onSkinChange: function onSkinChange(skin) {
      this.activeSkin = skin;
      _utils_store__WEBPACK_IMPORTED_MODULE_2__["default"].update({
        skin: skin
      });
      this.$emit('skin-change', skin);
    },
    getCategoryComponent: function getCategoryComponent(index) {
      var component = this.$refs['categories_' + index];
      if (component && '0' in component) {
        // Vue 2 has $refs under v-for as an array.
        return component['0'];
      }
      // Vue 3 does not support $refs as array.
      return component;
    }
  },
  components: {
    Anchors: _anchors_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    Category: _category_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    Preview: _preview_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    Search: _search_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  }
});

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/anchors.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/anchors.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _svgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../svgs */ "./src/svgs/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    i18n: {
      type: Object,
      required: true
    },
    color: {
      type: String
    },
    categories: {
      type: Array,
      required: true
    },
    activeCategory: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  emits: ['click'],
  created: function created() {
    this.svgs = _svgs__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
});

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/category.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/category.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/emoji-data */ "./src/utils/emoji-data.js");
/* harmony import */ var _Emoji_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emoji.vue */ "./src/components/Emoji.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      required: true
    },
    i18n: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    emojis: {
      type: Array
    },
    emojiProps: {
      type: Object,
      required: true
    }
  },
  methods: {
    activeClass: function activeClass(emojiObject) {
      if (!this.emojiProps.selectedEmoji) {
        return '';
      }
      if (!this.emojiProps.selectedEmojiCategory) {
        return '';
      }
      if (this.emojiProps.selectedEmoji.id == emojiObject.id && this.emojiProps.selectedEmojiCategory.id == this.id) {
        return 'emoji-mart-emoji-selected';
      }
      return '';
    }
  },
  computed: {
    isVisible: function isVisible() {
      return !!this.emojis;
    },
    isSearch: function isSearch() {
      return this.name == 'Search';
    },
    hasResults: function hasResults() {
      return this.emojis.length > 0;
    },
    emojiObjects: function emojiObjects() {
      var _this = this;
      return this.emojis.map(function (emoji) {
        var emojiObject = emoji;
        var emojiView = new _utils_emoji_data__WEBPACK_IMPORTED_MODULE_0__.EmojiView(emoji, _this.emojiProps.skin, _this.emojiProps.set, _this.emojiProps.native, _this.emojiProps.fallback, _this.emojiProps.emojiTooltip, _this.emojiProps.emojiSize);
        return {
          emojiObject: emojiObject,
          emojiView: emojiView
        };
      });
    }
  },
  components: {
    Emoji: _Emoji_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/preview.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/preview.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Emoji_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Emoji.vue */ "./src/components/Emoji.vue");
/* harmony import */ var _skins_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skins.vue */ "./src/components/skins.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    emoji: {
      type: [String, Object]
    },
    idleEmoji: {
      type: [String, Object],
      required: true
    },
    showSkinTones: {
      type: Boolean,
      default: true
    },
    emojiProps: {
      type: Object,
      required: true
    },
    skinProps: {
      type: Object,
      required: true
    },
    onSkinChange: {
      type: Function,
      required: true
    }
  },
  computed: {
    emojiData: function emojiData() {
      if (this.emoji) {
        return this.emoji;
      } else {
        return {};
      }
    },
    emojiShortNames: function emojiShortNames() {
      return this.emojiData.short_names;
    },
    emojiEmoticons: function emojiEmoticons() {
      return this.emojiData.emoticons;
    }
  },
  components: {
    Emoji: _Emoji_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Skins: _skins_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/search.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/search.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    data: {
      type: Object,
      required: true
    },
    i18n: {
      type: Object,
      required: true
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    onSearch: {
      type: Function,
      required: true
    },
    onArrowLeft: {
      type: Function,
      required: false
    },
    onArrowRight: {
      type: Function,
      required: false
    },
    onArrowDown: {
      type: Function,
      required: false
    },
    onArrowUp: {
      type: Function,
      required: false
    },
    onEnter: {
      type: Function,
      required: false
    }
  },
  emits: ['search', 'enter', 'arrowUp', 'arrowDown', 'arrowRight', 'arrowLeft'],
  data: function data() {
    return {
      value: ''
    };
  },
  computed: {
    emojiIndex: function emojiIndex() {
      return this.data;
    }
  },
  watch: {
    value: function value() {
      this.$emit('search', this.value);
    }
  },
  methods: {
    clear: function clear() {
      this.value = '';
    }
  },
  mounted: function mounted() {
    var $input = this.$el.querySelector('input');
    if (this.autoFocus) {
      $input.focus();
    }
  }
});

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/skins.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/skins.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    skin: {
      type: Number,
      required: true
    }
  },
  emits: ['change'],
  data: function data() {
    return {
      opened: false
    };
  },
  methods: {
    onClick: function onClick(skinTone) {
      if (this.opened) {
        if (skinTone != this.skin) {
          this.$emit('change', skinTone);
        }
      }
      this.opened = !this.opened;
    }
  }
});

/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=template&id=534ad946":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=template&id=534ad946 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.view.canRender ? _c(_vm.tag, {
    tag: "component",
    staticClass: "emoji-mart-emoji",
    attrs: {
      title: _vm.view.title,
      "aria-label": _vm.view.ariaLabel,
      "data-title": _vm.title
    },
    on: {
      mouseenter: _vm.onMouseEnter,
      mouseleave: _vm.onMouseLeave,
      click: _vm.onClick
    }
  }, [_c("span", {
    class: _vm.view.cssClass,
    style: _vm.view.cssStyle
  }, [_vm._v(_vm._s(_vm.view.content))])]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Picker.vue?vue&type=template&id=d16e9084":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Picker.vue?vue&type=template&id=d16e9084 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "emoji-mart emoji-mart-static",
    style: _vm.customStyles
  }, [_vm.showCategories ? _c("div", {
    staticClass: "emoji-mart-bar emoji-mart-bar-anchors"
  }, [_c("anchors", {
    attrs: {
      data: _vm.data,
      i18n: _vm.mergedI18n,
      color: _vm.color,
      categories: _vm.view.allCategories,
      "active-category": _vm.view.activeCategory
    },
    on: {
      click: _vm.onAnchorClick
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm._t("searchTemplate", function () {
    return [_vm.showSearch ? _c("search", {
      ref: "search",
      attrs: {
        data: _vm.data,
        i18n: _vm.mergedI18n,
        "auto-focus": _vm.autoFocus,
        "on-search": _vm.onSearch
      },
      on: {
        search: _vm.onSearch,
        arrowLeft: _vm.onArrowLeft,
        arrowRight: _vm.onArrowRight,
        arrowDown: _vm.onArrowDown,
        arrowUp: _vm.onArrowUp,
        enter: _vm.onEnter,
        select: _vm.onTextSelect
      }
    }) : _vm._e()];
  }, {
    data: _vm.data,
    i18n: _vm.i18n,
    autoFocus: _vm.autoFocus,
    onSearch: _vm.onSearch
  }), _vm._v(" "), _c("div", {
    ref: "scroll",
    staticClass: "emoji-mart-scroll",
    attrs: {
      role: "tabpanel"
    },
    on: {
      scroll: _vm.onScroll
    }
  }, [_c("div", {
    ref: "scrollContent",
    attrs: {
      id: "emoji-mart-list",
      role: "listbox",
      "aria-expanded": "true"
    }
  }, [_vm._t("customCategory"), _vm._v(" "), _vm._l(_vm.view.filteredCategories, function (category, idx) {
    return _c("category", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.infiniteScroll || category == _vm.view.activeCategory || _vm.isSearching,
        expression: "infiniteScroll || category == view.activeCategory || isSearching"
      }],
      key: category.id,
      ref: "categories_" + idx,
      refInFor: true,
      attrs: {
        data: _vm.data,
        i18n: _vm.mergedI18n,
        id: category.id,
        name: category.name,
        emojis: category.emojis,
        "emoji-props": _vm.emojiProps
      }
    });
  })], 2)]), _vm._v(" "), _vm._t("previewTemplate", function () {
    return [_vm.showPreview ? _c("div", {
      staticClass: "emoji-mart-bar emoji-mart-bar-preview"
    }, [_c("preview", {
      attrs: {
        data: _vm.data,
        title: _vm.title,
        emoji: _vm.view.previewEmoji,
        "idle-emoji": _vm.idleEmoji,
        "show-skin-tones": _vm.showSkinTones,
        "emoji-props": _vm.emojiProps,
        "skin-props": _vm.skinProps,
        "on-skin-change": _vm.onSkinChange
      }
    })], 1) : _vm._e()];
  }, {
    data: _vm.data,
    title: _vm.title,
    emoji: _vm.view.previewEmoji,
    idleEmoji: _vm.idleEmoji,
    showSkinTones: _vm.showSkinTones,
    emojiProps: _vm.emojiProps,
    skinProps: _vm.skinProps,
    onSkinChange: _vm.onSkinChange
  })], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/anchors.vue?vue&type=template&id=51188104":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/anchors.vue?vue&type=template&id=51188104 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "emoji-mart-anchors",
    attrs: {
      role: "tablist"
    }
  }, _vm._l(_vm.categories, function (category) {
    return _c("button", {
      key: category.id,
      class: {
        "emoji-mart-anchor": true,
        "emoji-mart-anchor-selected": category.id == _vm.activeCategory.id
      },
      style: {
        color: category.id == _vm.activeCategory.id ? _vm.color : ""
      },
      attrs: {
        role: "tab",
        type: "button",
        "aria-label": category.name,
        "aria-selected": category.id == _vm.activeCategory.id,
        "data-title": _vm.i18n.categories[category.id]
      },
      on: {
        click: function click($event) {
          return _vm.$emit("click", category);
        }
      }
    }, [_c("div", {
      attrs: {
        "aria-hidden": "true"
      },
      domProps: {
        innerHTML: _vm._s(_vm.svgs[category.id])
      }
    }), _vm._v(" "), _c("span", {
      staticClass: "emoji-mart-anchor-bar",
      style: {
        backgroundColor: _vm.color
      },
      attrs: {
        "aria-hidden": "true"
      }
    })]);
  }), 0);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/category.vue?vue&type=template&id=376cda0e":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/category.vue?vue&type=template&id=376cda0e ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.isVisible && (_vm.isSearch || _vm.hasResults) ? _c("section", {
    class: {
      "emoji-mart-category": true,
      "emoji-mart-no-results": !_vm.hasResults
    },
    attrs: {
      "aria-label": _vm.i18n.categories[_vm.id]
    }
  }, [_c("div", {
    staticClass: "emoji-mart-category-label"
  }, [_c("h3", {
    staticClass: "emoji-mart-category-label"
  }, [_vm._v(_vm._s(_vm.i18n.categories[_vm.id]))])]), _vm._v(" "), _vm._l(_vm.emojiObjects, function (_ref) {
    var emojiObject = _ref.emojiObject,
      emojiView = _ref.emojiView;
    return [emojiView.canRender ? _c("button", {
      key: emojiObject.id,
      staticClass: "emoji-mart-emoji",
      class: _vm.activeClass(emojiObject),
      attrs: {
        "aria-label": emojiView.ariaLabel,
        role: "option",
        "aria-selected": "false",
        "aria-posinset": "1",
        "aria-setsize": "1812",
        type: "button",
        "data-title": emojiObject.short_name,
        title: emojiView.title
      },
      on: {
        mouseenter: function mouseenter($event) {
          _vm.emojiProps.onEnter(emojiView.getEmoji());
        },
        mouseleave: function mouseleave($event) {
          _vm.emojiProps.onLeave(emojiView.getEmoji());
        },
        click: function click($event) {
          _vm.emojiProps.onClick(emojiView.getEmoji());
        }
      }
    }, [_c("span", {
      class: emojiView.cssClass,
      style: emojiView.cssStyle
    }, [_vm._v(_vm._s(emojiView.content))])]) : _vm._e()];
  }), _vm._v(" "), !_vm.hasResults ? _c("div", [_c("emoji", {
    attrs: {
      data: _vm.data,
      emoji: "sleuth_or_spy",
      native: _vm.emojiProps.native,
      skin: _vm.emojiProps.skin,
      set: _vm.emojiProps.set
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "emoji-mart-no-results-label"
  }, [_vm._v(_vm._s(_vm.i18n.notfound))])], 1) : _vm._e()], 2) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/preview.vue?vue&type=template&id=35056c30":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/preview.vue?vue&type=template&id=35056c30 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "emoji-mart-preview"
  }, [_vm.emoji ? [_c("div", {
    staticClass: "emoji-mart-preview-emoji"
  }, [_c("emoji", {
    attrs: {
      data: _vm.data,
      emoji: _vm.emoji,
      native: _vm.emojiProps.native,
      skin: _vm.emojiProps.skin,
      set: _vm.emojiProps.set
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "emoji-mart-preview-data"
  }, [_c("div", {
    staticClass: "emoji-mart-preview-name"
  }, [_vm._v(_vm._s(_vm.emoji.name))]), _vm._v(" "), _c("div", {
    staticClass: "emoji-mart-preview-shortnames"
  }, _vm._l(_vm.emojiShortNames, function (shortName) {
    return _c("span", {
      key: shortName,
      staticClass: "emoji-mart-preview-shortname"
    }, [_vm._v(":" + _vm._s(shortName) + ":")]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "emoji-mart-preview-emoticons"
  }, _vm._l(_vm.emojiEmoticons, function (emoticon) {
    return _c("span", {
      key: emoticon,
      staticClass: "emoji-mart-preview-emoticon"
    }, [_vm._v(_vm._s(emoticon))]);
  }), 0)])] : [_c("div", {
    staticClass: "emoji-mart-preview-emoji"
  }, [_c("emoji", {
    attrs: {
      data: _vm.data,
      emoji: _vm.idleEmoji,
      native: _vm.emojiProps.native,
      skin: _vm.emojiProps.skin,
      set: _vm.emojiProps.set
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "emoji-mart-preview-data"
  }, [_c("span", {
    staticClass: "emoji-mart-title-label"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _vm.showSkinTones ? _c("div", {
    staticClass: "emoji-mart-preview-skins"
  }, [_c("skins", {
    attrs: {
      skin: _vm.skinProps.skin
    },
    on: {
      change: function change($event) {
        return _vm.onSkinChange($event);
      }
    }
  })], 1) : _vm._e()]], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/search.vue?vue&type=template&id=4ad41bb8":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/search.vue?vue&type=template&id=4ad41bb8 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "emoji-mart-search"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.value,
      expression: "value"
    }],
    attrs: {
      type: "text",
      placeholder: _vm.i18n.search,
      role: "textbox",
      "aria-autocomplete": "list",
      "aria-owns": "emoji-mart-list",
      "aria-label": "Search for an emoji",
      "aria-describedby": "emoji-mart-search-description"
    },
    domProps: {
      value: _vm.value
    },
    on: {
      keydown: [function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "left", 37, $event.key, ["Left", "ArrowLeft"])) return null;
        if ("button" in $event && $event.button !== 0) return null;
        return function ($event) {
          return _vm.$emit("arrowLeft", $event);
        }.apply(null, arguments);
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "right", 39, $event.key, ["Right", "ArrowRight"])) return null;
        if ("button" in $event && $event.button !== 2) return null;
        return function () {
          return _vm.$emit("arrowRight");
        }.apply(null, arguments);
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "down", 40, $event.key, ["Down", "ArrowDown"])) return null;
        return function () {
          return _vm.$emit("arrowDown");
        }.apply(null, arguments);
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "up", 38, $event.key, ["Up", "ArrowUp"])) return null;
        return function ($event) {
          return _vm.$emit("arrowUp", $event);
        }.apply(null, arguments);
      }, function ($event) {
        if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
        return function () {
          return _vm.$emit("enter");
        }.apply(null, arguments);
      }],
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.value = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "hidden",
    attrs: {
      id: "emoji-picker-search-description"
    }
  }, [_vm._v("Use the left, right, up and down arrow keys to navigate the emoji search\n    results.")])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/skins.vue?vue&type=template&id=1c614894":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/skins.vue?vue&type=template&id=1c614894 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   staticRenderFns: function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    class: {
      "emoji-mart-skin-swatches": true,
      "emoji-mart-skin-swatches-opened": _vm.opened
    }
  }, _vm._l(6, function (skinTone) {
    return _c("span", {
      key: skinTone,
      class: {
        "emoji-mart-skin-swatch": true,
        "emoji-mart-skin-swatch-selected": _vm.skin == skinTone
      }
    }, [_c("span", {
      class: "emoji-mart-skin emoji-mart-skin-tone-" + skinTone,
      on: {
        click: function click($event) {
          return _vm.onClick(skinTone);
        }
      }
    })]);
  }), 0);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!************************************************************************!*\
  !*** ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ normalizeComponent; }
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./src/components/Emoji.vue":
/*!**********************************!*\
  !*** ./src/components/Emoji.vue ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Emoji_vue_vue_type_template_id_534ad946__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Emoji.vue?vue&type=template&id=534ad946 */ "./src/components/Emoji.vue?vue&type=template&id=534ad946");
/* harmony import */ var _Emoji_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emoji.vue?vue&type=script&lang=js */ "./src/components/Emoji.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Emoji_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Emoji_vue_vue_type_template_id_534ad946__WEBPACK_IMPORTED_MODULE_0__.render,
  _Emoji_vue_vue_type_template_id_534ad946__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "src/components/Emoji.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Emoji.vue?vue&type=script&lang=js":
/*!**********************************************************!*\
  !*** ./src/components/Emoji.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Emoji.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Emoji.vue?vue&type=template&id=534ad946":
/*!****************************************************************!*\
  !*** ./src/components/Emoji.vue?vue&type=template&id=534ad946 ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_template_id_534ad946__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_template_id_534ad946__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Emoji_vue_vue_type_template_id_534ad946__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Emoji.vue?vue&type=template&id=534ad946 */ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Emoji.vue?vue&type=template&id=534ad946");


/***/ }),

/***/ "./src/components/Picker.vue":
/*!***********************************!*\
  !*** ./src/components/Picker.vue ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Picker_vue_vue_type_template_id_d16e9084__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Picker.vue?vue&type=template&id=d16e9084 */ "./src/components/Picker.vue?vue&type=template&id=d16e9084");
/* harmony import */ var _Picker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Picker.vue?vue&type=script&lang=js */ "./src/components/Picker.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Picker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Picker_vue_vue_type_template_id_d16e9084__WEBPACK_IMPORTED_MODULE_0__.render,
  _Picker_vue_vue_type_template_id_d16e9084__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "src/components/Picker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Picker.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/components/Picker.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Picker.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Picker.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Picker.vue?vue&type=template&id=d16e9084":
/*!*****************************************************************!*\
  !*** ./src/components/Picker.vue?vue&type=template&id=d16e9084 ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_template_id_d16e9084__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_template_id_d16e9084__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Picker_vue_vue_type_template_id_d16e9084__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Picker.vue?vue&type=template&id=d16e9084 */ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Picker.vue?vue&type=template&id=d16e9084");


/***/ }),

/***/ "./src/components/anchors.vue":
/*!************************************!*\
  !*** ./src/components/anchors.vue ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _anchors_vue_vue_type_template_id_51188104__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anchors.vue?vue&type=template&id=51188104 */ "./src/components/anchors.vue?vue&type=template&id=51188104");
/* harmony import */ var _anchors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./anchors.vue?vue&type=script&lang=js */ "./src/components/anchors.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _anchors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _anchors_vue_vue_type_template_id_51188104__WEBPACK_IMPORTED_MODULE_0__.render,
  _anchors_vue_vue_type_template_id_51188104__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "src/components/anchors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/anchors.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./src/components/anchors.vue?vue&type=script&lang=js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./anchors.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/anchors.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/anchors.vue?vue&type=template&id=51188104":
/*!******************************************************************!*\
  !*** ./src/components/anchors.vue?vue&type=template&id=51188104 ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_template_id_51188104__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_template_id_51188104__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_anchors_vue_vue_type_template_id_51188104__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./anchors.vue?vue&type=template&id=51188104 */ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/anchors.vue?vue&type=template&id=51188104");


/***/ }),

/***/ "./src/components/category.vue":
/*!*************************************!*\
  !*** ./src/components/category.vue ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_vue_vue_type_template_id_376cda0e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.vue?vue&type=template&id=376cda0e */ "./src/components/category.vue?vue&type=template&id=376cda0e");
/* harmony import */ var _category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue?vue&type=script&lang=js */ "./src/components/category.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _category_vue_vue_type_template_id_376cda0e__WEBPACK_IMPORTED_MODULE_0__.render,
  _category_vue_vue_type_template_id_376cda0e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "src/components/category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/category.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/components/category.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./category.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/category.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/category.vue?vue&type=template&id=376cda0e":
/*!*******************************************************************!*\
  !*** ./src/components/category.vue?vue&type=template&id=376cda0e ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_376cda0e__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_376cda0e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_376cda0e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./category.vue?vue&type=template&id=376cda0e */ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/category.vue?vue&type=template&id=376cda0e");


/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Anchors: function() { return /* reexport safe */ _anchors_vue__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   Category: function() { return /* reexport safe */ _category_vue__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   Emoji: function() { return /* reexport safe */ _Emoji_vue__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   Picker: function() { return /* reexport safe */ _Picker_vue__WEBPACK_IMPORTED_MODULE_6__["default"]; },
/* harmony export */   Preview: function() { return /* reexport safe */ _preview_vue__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   Search: function() { return /* reexport safe */ _search_vue__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   Skins: function() { return /* reexport safe */ _skins_vue__WEBPACK_IMPORTED_MODULE_4__["default"]; }
/* harmony export */ });
/* harmony import */ var _anchors_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anchors.vue */ "./src/components/anchors.vue");
/* harmony import */ var _category_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue */ "./src/components/category.vue");
/* harmony import */ var _preview_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preview.vue */ "./src/components/preview.vue");
/* harmony import */ var _search_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.vue */ "./src/components/search.vue");
/* harmony import */ var _skins_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skins.vue */ "./src/components/skins.vue");
/* harmony import */ var _Emoji_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Emoji.vue */ "./src/components/Emoji.vue");
/* harmony import */ var _Picker_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Picker.vue */ "./src/components/Picker.vue");








/***/ }),

/***/ "./src/components/preview.vue":
/*!************************************!*\
  !*** ./src/components/preview.vue ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preview_vue_vue_type_template_id_35056c30__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preview.vue?vue&type=template&id=35056c30 */ "./src/components/preview.vue?vue&type=template&id=35056c30");
/* harmony import */ var _preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview.vue?vue&type=script&lang=js */ "./src/components/preview.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _preview_vue_vue_type_template_id_35056c30__WEBPACK_IMPORTED_MODULE_0__.render,
  _preview_vue_vue_type_template_id_35056c30__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "src/components/preview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/preview.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./src/components/preview.vue?vue&type=script&lang=js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./preview.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/preview.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/preview.vue?vue&type=template&id=35056c30":
/*!******************************************************************!*\
  !*** ./src/components/preview.vue?vue&type=template&id=35056c30 ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_template_id_35056c30__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_template_id_35056c30__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_preview_vue_vue_type_template_id_35056c30__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./preview.vue?vue&type=template&id=35056c30 */ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/preview.vue?vue&type=template&id=35056c30");


/***/ }),

/***/ "./src/components/search.vue":
/*!***********************************!*\
  !*** ./src/components/search.vue ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_4ad41bb8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=4ad41bb8 */ "./src/components/search.vue?vue&type=template&id=4ad41bb8");
/* harmony import */ var _search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js */ "./src/components/search.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_4ad41bb8__WEBPACK_IMPORTED_MODULE_0__.render,
  _search_vue_vue_type_template_id_4ad41bb8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "src/components/search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/search.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./src/components/search.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./search.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/search.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/search.vue?vue&type=template&id=4ad41bb8":
/*!*****************************************************************!*\
  !*** ./src/components/search.vue?vue&type=template&id=4ad41bb8 ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_4ad41bb8__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_4ad41bb8__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_template_id_4ad41bb8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./search.vue?vue&type=template&id=4ad41bb8 */ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/search.vue?vue&type=template&id=4ad41bb8");


/***/ }),

/***/ "./src/components/skins.vue":
/*!**********************************!*\
  !*** ./src/components/skins.vue ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _skins_vue_vue_type_template_id_1c614894__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skins.vue?vue&type=template&id=1c614894 */ "./src/components/skins.vue?vue&type=template&id=1c614894");
/* harmony import */ var _skins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./skins.vue?vue&type=script&lang=js */ "./src/components/skins.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _skins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _skins_vue_vue_type_template_id_1c614894__WEBPACK_IMPORTED_MODULE_0__.render,
  _skins_vue_vue_type_template_id_1c614894__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) // removed by dead control flow
{ var api; }
component.options.__file = "src/components/skins.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/skins.vue?vue&type=script&lang=js":
/*!**********************************************************!*\
  !*** ./src/components/skins.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./skins.vue?vue&type=script&lang=js */ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/skins.vue?vue&type=script&lang=js");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/skins.vue?vue&type=template&id=1c614894":
/*!****************************************************************!*\
  !*** ./src/components/skins.vue?vue&type=template&id=1c614894 ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_template_id_1c614894__WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   staticRenderFns: function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_template_id_1c614894__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_skins_vue_vue_type_template_id_1c614894__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./skins.vue?vue&type=template&id=1c614894 */ "../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/skins.vue?vue&type=template&id=1c614894");


/***/ }),

/***/ "./src/polyfills/stringFromCodePoint.js":
/*!**********************************************!*\
  !*** ./src/polyfills/stringFromCodePoint.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _String = String;
/* harmony default export */ __webpack_exports__["default"] = (_String.fromCodePoint || function stringFromCodePoint() {
  var MAX_SIZE = 0x4000;
  var codeUnits = [];
  var highSurrogate;
  var lowSurrogate;
  var index = -1;
  var length = arguments.length;
  if (!length) {
    return '';
  }
  var result = '';
  while (++index < length) {
    var codePoint = Number(arguments[index]);
    if (!isFinite(codePoint) ||
    // `NaN`, `+Infinity`, or `-Infinity`
    codePoint < 0 ||
    // not a valid Unicode code point
    codePoint > 0x10ffff ||
    // not a valid Unicode code point
    Math.floor(codePoint) != codePoint // not an integer
    ) {
      throw RangeError('Invalid code point: ' + codePoint);
    }
    if (codePoint <= 0xffff) {
      // BMP code point
      codeUnits.push(codePoint);
    } else {
      // Astral code point; split in surrogate halves
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      codePoint -= 0x10000;
      highSurrogate = (codePoint >> 10) + 0xd800;
      lowSurrogate = codePoint % 0x400 + 0xdc00;
      codeUnits.push(highSurrogate, lowSurrogate);
    }
    if (index + 1 === length || codeUnits.length > MAX_SIZE) {
      result += String.fromCharCode.apply(null, codeUnits);
      codeUnits.length = 0;
    }
  }
  return result;
});

/***/ }),

/***/ "./src/svgs/index.js":
/*!***************************!*\
  !*** ./src/svgs/index.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SVGs = {
  activity: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113\"/></svg>",
  custom: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><g transform=\"translate(2.000000, 1.000000)\"><rect id=\"Rectangle\" x=\"8\" y=\"0\" width=\"3\" height=\"21\" rx=\"1.5\"></rect><rect id=\"Rectangle\" transform=\"translate(9.843, 10.549) rotate(60) translate(-9.843, -10.549) \" x=\"8.343\" y=\"0.049\" width=\"3\" height=\"21\" rx=\"1.5\"></rect><rect id=\"Rectangle\" transform=\"translate(9.843, 10.549) rotate(-60) translate(-9.843, -10.549) \" x=\"8.343\" y=\"0.049\" width=\"3\" height=\"21\" rx=\"1.5\"></rect></g></svg>",
  flags: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z\"/></svg>",
  foods: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9\"/></svg>",
  nature: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8\"/><path d=\"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235\"/></svg>",
  objects: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z\"/><path d=\"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789\"/></svg>",
  smileys: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"/><path d=\"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0\"/></svg>",
  people: "<svg xmlns:svg=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\" viewBox=\"0 0 24 24\"> <path id=\"path3814\" d=\"m 3.3591089,21.17726 c 0.172036,0.09385 4.265994,2.29837 8.8144451,2.29837 4.927767,0 8.670894,-2.211883 8.82782,-2.306019 0.113079,-0.06785 0.182268,-0.190051 0.182267,-0.321923 0,-3.03119 -0.929494,-5.804936 -2.617196,-7.810712 -1.180603,-1.403134 -2.661918,-2.359516 -4.295699,-2.799791 4.699118,-2.236258 3.102306,-9.28617162 -2.097191,-9.28617162 -5.1994978,0 -6.7963103,7.04991362 -2.097192,9.28617162 -1.6337821,0.440275 -3.1150971,1.396798 -4.2956991,2.799791 -1.687703,2.005776 -2.617196,4.779522 -2.617196,7.810712 1.2e-6,0.137378 0.075039,0.263785 0.195641,0.329572 z M 8.0439319,5.8308783 C 8.0439309,2.151521 12.492107,0.30955811 15.093491,2.9109411 17.694874,5.5123241 15.852911,9.9605006 12.173554,9.9605 9.8938991,9.9579135 8.0465186,8.1105332 8.0439319,5.8308783 Z m -1.688782,7.6894977 c 1.524535,-1.811449 3.5906601,-2.809035 5.8184041,-2.809035 2.227744,0 4.293869,0.997586 5.818404,2.809035 1.533639,1.822571 2.395932,4.339858 2.439152,7.108301 -0.803352,0.434877 -4.141636,2.096112 -8.257556,2.096112 -3.8062921,0 -7.3910861,-1.671043 -8.2573681,-2.104981 0.04505,-2.765017 0.906968,-5.278785 2.438964,-7.099432 z\" /> <path id=\"path3816\" d=\"M 12.173828 0.38867188 C 9.3198513 0.38867187 7.3770988 2.3672285 6.8652344 4.6308594 C 6.4218608 6.5916015 7.1153562 8.7676117 8.9648438 10.126953 C 7.6141249 10.677376 6.3550511 11.480944 5.3496094 12.675781 C 3.5629317 14.799185 2.6015625 17.701475 2.6015625 20.847656 C 2.6015654 21.189861 2.7894276 21.508002 3.0898438 21.671875 C 3.3044068 21.788925 7.4436239 24.039062 12.173828 24.039062 C 17.269918 24.039062 21.083568 21.776786 21.291016 21.652344 C 21.57281 21.483266 21.746097 21.176282 21.746094 20.847656 C 21.746094 17.701475 20.78277 14.799185 18.996094 12.675781 C 17.990455 11.480591 16.733818 10.675362 15.382812 10.125 C 17.231132 8.7655552 17.925675 6.5910701 17.482422 4.6308594 C 16.970557 2.3672285 15.027805 0.38867188 12.173828 0.38867188 z M 12.792969 2.3007812 C 13.466253 2.4161792 14.125113 2.7383941 14.695312 3.3085938 C 15.835712 4.4489931 15.985604 5.9473549 15.46875 7.1953125 C 14.951896 8.4432701 13.786828 9.3984378 12.173828 9.3984375 C 10.197719 9.3961954 8.607711 7.806187 8.6054688 5.8300781 C 8.6054683 4.2170785 9.5606362 3.0520102 10.808594 2.5351562 C 11.432573 2.2767293 12.119685 2.1853833 12.792969 2.3007812 z M 12.173828 11.273438 C 14.233647 11.273438 16.133674 12.185084 17.5625 13.882812 C 18.93069 15.508765 19.698347 17.776969 19.808594 20.283203 C 18.807395 20.800235 15.886157 22.162109 12.173828 22.162109 C 8.7614632 22.162109 5.6245754 20.787069 4.5390625 20.265625 C 4.6525896 17.766717 5.4203315 15.504791 6.7851562 13.882812 C 8.2139827 12.185084 10.11401 11.273438 12.173828 11.273438 z \" /> </svg>",
  places: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5\"/><path d=\"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z\"/></svg>",
  recent: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z\"/><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"/></svg>",
  symbols: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path d=\"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76\"/></svg>"
};
/* harmony default export */ __webpack_exports__["default"] = (SVGs);

/***/ }),

/***/ "./src/utils/data.js":
/*!***************************!*\
  !*** ./src/utils/data.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildSearch: function() { return /* binding */ buildSearch; },
/* harmony export */   uncompress: function() { return /* binding */ uncompress; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/esm/typeof.js");

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var mapping = {
  name: 'a',
  unified: 'b',
  non_qualified: 'c',
  has_img_apple: 'd',
  has_img_google: 'e',
  has_img_twitter: 'f',
  has_img_facebook: 'h',
  keywords: 'j',
  sheet: 'k',
  emoticons: 'l',
  text: 'm',
  short_names: 'n',
  added_in: 'o'
};
var buildSearch = function buildSearch(emoji) {
  var search = [];
  var addToSearch = function addToSearch(strings, split) {
    if (!strings) {
      return;
    }
    ;
    (Array.isArray(strings) ? strings : [strings]).forEach(function (string) {
      ;
      (split ? string.split(/[-|_|\s]+/) : [string]).forEach(function (s) {
        s = s.toLowerCase();
        if (search.indexOf(s) == -1) {
          search.push(s);
        }
      });
    });
  };
  addToSearch(emoji.short_names, true);
  addToSearch(emoji.name, true);
  addToSearch(emoji.keywords, false);
  addToSearch(emoji.emoticons, false);
  return search.join(',');
};
function deepFreeze(object) {
  // Retrieve the property names defined on object
  var propNames = Object.getOwnPropertyNames(object);

  // Freeze properties before freezing self
  var _iterator = _createForOfIteratorHelper(propNames),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var name = _step.value;
      var value = object[name];
      object[name] = value && (0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object' ? deepFreeze(value) : value;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return Object.freeze(object);
}
var uncompress = function uncompress(data) {
  if (!data.compressed) {
    return data;
  }
  data.compressed = false;
  for (var id in data.emojis) {
    var emoji = data.emojis[id];
    for (var key in mapping) {
      emoji[key] = emoji[mapping[key]];
      delete emoji[mapping[key]];
    }
    if (!emoji.short_names) emoji.short_names = [];
    emoji.short_names.unshift(id);
    emoji.sheet_x = emoji.sheet[0];
    emoji.sheet_y = emoji.sheet[1];
    delete emoji.sheet;
    if (!emoji.text) emoji.text = '';
    if (!emoji.added_in) emoji.added_in = 6;
    emoji.added_in = emoji.added_in.toFixed(1);
    emoji.search = buildSearch(emoji);
  }
  data = deepFreeze(data);
  return data;
};


/***/ }),

/***/ "./src/utils/emoji-data.js":
/*!*********************************!*\
  !*** ./src/utils/emoji-data.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmojiData: function() { return /* binding */ EmojiData; },
/* harmony export */   EmojiIndex: function() { return /* binding */ EmojiIndex; },
/* harmony export */   EmojiView: function() { return /* binding */ EmojiView; },
/* harmony export */   sanitize: function() { return /* binding */ sanitize; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/utils/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/utils/data.js");
/* harmony import */ var _frequently__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frequently */ "./src/utils/frequently.js");


function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }



var SHEET_COLUMNS = 61;
var COLONS_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
// Skin tones
var SKINS = ['1F3FA', '1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];
function mergeAliases(baseAliases, localizedAliases) {
  return Object.assign({}, baseAliases || {}, localizedAliases || {});
}
function buildAliasesById(aliases) {
  var result = {};
  if (!aliases) {
    return result;
  }
  for (var alias in aliases) {
    if (!aliases.hasOwnProperty(alias)) {
      continue;
    }
    var id = aliases[alias];
    if (!result[id]) {
      result[id] = [];
    }
    result[id].push(alias);
  }
  return result;
}
function mergeKeywords() {
  var result = [];
  var seen = new Set();
  for (var idx = 0; idx < arguments.length; idx += 1) {
    var list = arguments[idx];
    if (!list || !list.length) {
      continue;
    }
    list.forEach(function (value) {
      if (typeof value !== 'string') {
        return;
      }
      var key = value.toLowerCase();
      if (seen.has(key)) {
        return;
      }
      seen.add(key);
      result.push(value);
    });
  }
  return result;
}

/**
 * Emoji data structure:
 * {
 *    "compressed": false,
 *    "aliases": {
 *      collision: "boom"
 *      cooking: "fried_egg"
 *      envelope: "email"
 *      face_with_finger_covering_closed_lips: "shushing_face"
 *      ...
 *    },
 *    "categories": [ {
 *      id: "people",
 *      name: "Smileys & Emotion",
 *      emojis: [ "grinning", "grin", "joy", ... ]
 *    }, {
 *      id: "nature",
 *      name: "Animals & Nature",
 *      emojis: [ "monkey_face", "money", "gorilla", ... ]
 *    },
 *    ...
 *    ],
 *    "emojis": [
 *      smiley: {
 *        added_in: "6.0",
 *        emoticons: ["=)", "=-)"],
 *        has_img_apple: true,
 *        has_img_facebook: true,
 *        has_img_google: true,
 *        has_img_twitter: true,
 *        keywords: ["face", "happy", "joy", "haha", ":D", ":)", "smile", "funny"],
 *        name: "Smiling Face with Open Mouth",
 *        non_qualified: undefined,
 *        search: "smiley,smiling,face,with,open,mouth,happy,joy,haha,:d,:),smile,funny,=),=-)",
 *        sheet_x: 30,
 *        sheet_y: 27,
 *        short_names: ["smiley"],
 *        text: ":)",
 *        unified: "1F603",
 *      }, {
 *      +1: {    // emoji with skin_variations
 *          ..., // all the regular fields are present
 *          name: "Thumbs Up Sign",
 *          short_names: (2) ["+1", "thumbsup"],
 *          skin_variations: {
 *            1F3FB:             // each variation has additional set of fields:
 *              added_in: "8.0",
 *              has_img_apple: true,
 *              has_img_facebook: true,
 *              has_img_google: true,
 *              has_img_twitter: true,
 *              image: "1f44d-1f3fb.png",
 *              non_qualified: null,
 *              sheet_x: 14,
 *              sheet_y: 50,
 *              unified: "1F44D-1F3FB",
 *            1F3FB: {…},
 *            1F3FC: {…},
 *            1F3FD: {…},
 *            1F3FE: {…},
 *            1F3FF: {…}
 *            },
 *          ...
 *      },
 *      a: {  // emoji with non_qualified field set
 *        added_in: "6.0",
 *        emoticons: undefined,
 *        has_img_apple: true,
 *        ...
 *        non_qualified: "1F170",
 *        unified: "1F170-FE0F",
 *     },
 *     ...
 *   ]
 * }
 */

/**
 * Wraps raw jason emoji data, serves as data source for
 * emoji picker components.
 *
 * Usage:
 *
 *   import data from '../data/all.json'
 *   let index = new EmojiIndex(data)
 *
 */
var EmojiIndex = /*#__PURE__*/function () {
  /**
   * Constructor.
   *
   * @param {object} data - Raw json data, see the structure above.
   * @param {object} options - additional options, as an object:
   * @param {Function} emojisToShowFilter - optional, function to filter out
   *   some emojis, function(emoji) { return true|false }
   *   where `emoji` is an raw emoji object, see data.emojis above.
   * @param {Array} include - optional, a list of category ids to include.
   * @param {Array} exclude - optional, a list of category ids to exclude.
   * @param {Array} custom - optional, a list custom emojis, each emoji is
   *   an object, see data.emojis above for examples.
   */
  function EmojiIndex(data) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      emojisToShowFilter = _ref.emojisToShowFilter,
      include = _ref.include,
      exclude = _ref.exclude,
      custom = _ref.custom,
      emojiI18n = _ref.emojiI18n,
      recent = _ref.recent,
      _ref$recentLength = _ref.recentLength,
      recentLength = _ref$recentLength === void 0 ? 20 : _ref$recentLength;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EmojiIndex);
    this._data = (0,_data__WEBPACK_IMPORTED_MODULE_3__.uncompress)(data);
    // Callback to exclude specific emojis
    this._emojisFilter = emojisToShowFilter || null;
    // Categories to include / exclude
    this._include = include || null;
    this._exclude = exclude || null;
    // Custom emojis
    this._custom = custom || [];
    // Emoji i18n data (localized names, keywords, aliases)
    this._emojiI18n = emojiI18n || null;
    this._aliases = mergeAliases(this._data.aliases, this._emojiI18n && this._emojiI18n.aliases);
    this._aliasesById = buildAliasesById(this._aliases);
    // Recent emojis
    // TODO: make parameter configurable
    this._recent = recent || _frequently__WEBPACK_IMPORTED_MODULE_4__["default"].get(recentLength);
    this._emojis = {};
    this._nativeEmojis = {};
    this._emoticons = {};
    this._categories = [];
    this._recentCategory = {
      id: 'recent',
      name: 'Recent',
      emojis: []
    };
    this._customCategory = {
      id: 'custom',
      name: 'Custom',
      emojis: []
    };
    this._searchIndex = {};
    this.buildIndex();
    Object.freeze(this);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EmojiIndex, [{
    key: "buildIndex",
    value: function buildIndex() {
      var _this = this;
      var allCategories = this._data.categories;
      if (this._include) {
        // Remove categories that are not in the include list.
        allCategories = allCategories.filter(function (item) {
          return _this._include.includes(item.id);
        });
        // Sort categories according to the include list.
        allCategories = allCategories.sort(function (a, b) {
          var indexA = _this._include.indexOf(a.id);
          var indexB = _this._include.indexOf(b.id);
          if (indexA < indexB) {
            return -1;
          }
          if (indexA > indexB) {
            return 1;
          }
          return 0;
        });
      }
      allCategories.forEach(function (categoryData) {
        if (!_this.isCategoryNeeded(categoryData.id)) {
          return;
        }
        var category = {
          id: categoryData.id,
          name: categoryData.name,
          emojis: []
        };
        categoryData.emojis.forEach(function (emojiId) {
          var emoji = _this.addEmoji(emojiId);
          if (emoji) {
            category.emojis.push(emoji);
          }
        });
        if (category.emojis.length) {
          _this._categories.push(category);
        }
      });
      if (this.isCategoryNeeded('custom')) {
        if (this._custom.length > 0) {
          var _iterator = _createForOfIteratorHelper(this._custom),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var customEmoji = _step.value;
              this.addCustomEmoji(customEmoji);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        if (this._customCategory.emojis.length) {
          this._categories.push(this._customCategory);
        }
      }
      if (this.isCategoryNeeded('recent')) {
        if (this._recent.length) {
          this._recent.map(function (id) {
            var _iterator2 = _createForOfIteratorHelper(_this._customCategory.emojis),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _customEmoji = _step2.value;
                if (_customEmoji.id === id) {
                  _this._recentCategory.emojis.push(_customEmoji);
                  return;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            if (_this.hasEmoji(id)) {
              _this._recentCategory.emojis.push(_this.emoji(id));
            }
            return;
          });
        }
        // Add recent category to the top
        if (this._recentCategory.emojis.length) {
          this._categories.unshift(this._recentCategory);
        }
      }
    }

    /**
     * Find the emoji from the string
     */
  }, {
    key: "findEmoji",
    value: function findEmoji(emoji, skin) {
      // 1. Parse as :emoji_name:skin-tone-xx:
      var matches = emoji.match(COLONS_REGEX);
      if (matches) {
        emoji = matches[1];
        if (matches[2]) {
          skin = parseInt(matches[2], 10);
        }
      }

      // 2. Check if the specified emoji is an alias
      if (this._aliases && this._aliases.hasOwnProperty(emoji)) {
        emoji = this._aliases[emoji];
      }

      // 3. Check if we have the specified emoji
      if (this._emojis.hasOwnProperty(emoji)) {
        var emojiObject = this._emojis[emoji];
        if (skin) {
          return emojiObject.getSkin(skin);
        }
        return emojiObject;
      }

      // 4. Check if we have the specified native emoji
      if (this._nativeEmojis.hasOwnProperty(emoji)) {
        return this._nativeEmojis[emoji];
      }
      return null;
    }
  }, {
    key: "categories",
    value: function categories() {
      return this._categories;
    }
  }, {
    key: "emoji",
    value: function emoji(emojiId) {
      if (this._aliases && this._aliases.hasOwnProperty(emojiId)) {
        emojiId = this._aliases[emojiId];
      }
      var emoji = this._emojis[emojiId];
      if (!emoji) {
        throw new Error('Can not find emoji by id: ' + emojiId);
      }
      return emoji;
    }
  }, {
    key: "firstEmoji",
    value: function firstEmoji() {
      var emoji = this._emojis[Object.keys(this._emojis)[0]];
      if (!emoji) {
        throw new Error('Can not get first emoji');
      }
      return emoji;
    }
  }, {
    key: "hasEmoji",
    value: function hasEmoji(emojiId) {
      if (this._aliases && this._aliases.hasOwnProperty(emojiId)) {
        emojiId = this._aliases[emojiId];
      }
      if (this._emojis[emojiId]) {
        return true;
      }
      return false;
    }
  }, {
    key: "nativeEmoji",
    value: function nativeEmoji(unicodeEmoji) {
      if (this._nativeEmojis.hasOwnProperty(unicodeEmoji)) {
        return this._nativeEmojis[unicodeEmoji];
      }
      return null;
    }
  }, {
    key: "search",
    value: function search(value, maxResults) {
      var _this2 = this;
      maxResults || (maxResults = 75);
      if (!value.length) {
        return null;
      }
      if (value == '-' || value == '-1') {
        return [this.emoji('-1')];
      }
      var values = value.toLowerCase().split(/[\s|,|\-|_]+/);
      var allResults = [];
      if (values.length > 2) {
        values = [values[0], values[1]];
      }
      allResults = values.map(function (value) {
        // Start searchin in the global list of emojis
        var emojis = _this2._emojis;
        var currentIndex = _this2._searchIndex;
        var length = 0;
        var _loop = function _loop() {
          var char = value[charIndex];
          length++;
          currentIndex[char] || (currentIndex[char] = {});
          currentIndex = currentIndex[char];
          if (!currentIndex.results) {
            var scores = {};
            currentIndex.results = [];
            currentIndex.emojis = {};
            for (var emojiId in emojis) {
              var emoji = emojis[emojiId];
              // search is a comma-separated string with words, related
              // to the emoji, for example:
              // search: "smiley,smiling,face,joy,haha,:d,:),smile,funny,=),=-)",
              var _search = emoji._data.search;
              var sub = value.substr(0, length);
              var subIndex = _search.indexOf(sub);
              if (subIndex != -1) {
                var score = subIndex + 1;
                if (sub == emojiId) score = 0;
                currentIndex.results.push(emoji);
                currentIndex.emojis[emojiId] = emoji;
                scores[emojiId] = score;
              }
            }
            currentIndex.results.sort(function (a, b) {
              var aScore = scores[a.id],
                bScore = scores[b.id];
              return aScore - bScore;
            });
          }

          // continue search in the reduced set of emojis
          emojis = currentIndex.emojis;
        };
        for (var charIndex = 0; charIndex < value.length; charIndex++) {
          _loop();
        }
        return currentIndex.results;
        // The "filter" call removes undefined values from allResults
        // array, for example, if we have "test " (with trailing space),
        // we will get "[Array, undefined]" for allResults and after
        // the "filter" call it will turn into "[Array]"
      }).filter(function (a) {
        return a;
      });
      var results = null;
      if (allResults.length > 1) {
        results = _index__WEBPACK_IMPORTED_MODULE_2__.intersect.apply(null, allResults);
      } else if (allResults.length) {
        results = allResults[0];
      } else {
        results = [];
      }
      if (results && results.length > maxResults) {
        results = results.slice(0, maxResults);
      }
      return results;
    }
  }, {
    key: "addCustomEmoji",
    value: function addCustomEmoji(customEmoji) {
      var emojiData = Object.assign({}, customEmoji, {
        id: customEmoji.short_names[0],
        custom: true
      });
      if (!emojiData.search) {
        emojiData.search = (0,_data__WEBPACK_IMPORTED_MODULE_3__.buildSearch)(emojiData);
      }
      var emoji = new EmojiData(emojiData);
      this._emojis[emoji.id] = emoji;
      this._customCategory.emojis.push(emoji);
      return emoji;
    }
  }, {
    key: "addEmoji",
    value: function addEmoji(emojiId) {
      var _this3 = this;
      // We expect the correct emoji id that is present in the emojis data.
      var data = this._data.emojis[emojiId];
      if (this._emojiI18n && this._emojiI18n.emojis && this._emojiI18n.emojis[emojiId]) {
        var _this$_aliasesById;
        var i18nEmoji = this._emojiI18n.emojis[emojiId];
        var baseKeywords = Array.isArray(data.keywords) ? data.keywords : [];
        var localizedKeywords = Array.isArray(i18nEmoji.keywords) ? i18nEmoji.keywords : typeof i18nEmoji.keywords === 'string' ? [i18nEmoji.keywords] : [];
        var aliasKeywords = ((_this$_aliasesById = this._aliasesById) === null || _this$_aliasesById === void 0 ? void 0 : _this$_aliasesById[emojiId]) || [];
        var mergedKeywords = mergeKeywords(baseKeywords, localizedKeywords, aliasKeywords, data.name ? [data.name] : [], i18nEmoji.name ? [i18nEmoji.name] : []);
        data = Object.assign({}, data, {
          i18nName: i18nEmoji.name,
          keywords: mergedKeywords
        });
      } else if (this._aliasesById && this._aliasesById[emojiId] && this._aliasesById[emojiId].length) {
        var _baseKeywords = Array.isArray(data.keywords) ? data.keywords : [];
        var _mergedKeywords = mergeKeywords(_baseKeywords, this._aliasesById[emojiId]);
        data = Object.assign({}, data, {
          keywords: _mergedKeywords
        });
      }
      if (!this.isEmojiNeeded(data)) {
        return false;
      }
      var emoji = new EmojiData(data);
      this._emojis[emojiId] = emoji;
      if (emoji.native) {
        this._nativeEmojis[emoji.native] = emoji;
      }
      if (emoji._skins) {
        for (var idx in emoji._skins) {
          var skin = emoji._skins[idx];
          if (skin.native) {
            this._nativeEmojis[skin.native] = skin;
          }
        }
      }
      if (emoji.emoticons) {
        emoji.emoticons.forEach(function (emoticon) {
          if (_this3._emoticons[emoticon]) {
            return;
          }
          _this3._emoticons[emoticon] = emojiId;
        });
      }
      return emoji;
    }

    /**
     * Check if we need to include given category.
     *
     * @param {string} category_id - The category id.
     * @return {boolean} - Whether to include the emoji.
     */
  }, {
    key: "isCategoryNeeded",
    value: function isCategoryNeeded(category_id) {
      var isIncluded = this._include && this._include.length ? this._include.indexOf(category_id) > -1 : true;
      var isExcluded = this._exclude && this._exclude.length ? this._exclude.indexOf(category_id) > -1 : false;
      if (!isIncluded || isExcluded) {
        return false;
      }
      return true;
    }

    /**
     * Check if we need to include given emoji.
     *
     * @param {object} emoji - The raw emoji object.
     * @return {boolean} - Whether to include the emoji.
     */
  }, {
    key: "isEmojiNeeded",
    value: function isEmojiNeeded(emoji) {
      if (this._emojisFilter) {
        return this._emojisFilter(emoji);
      }
      return true;
    }
  }]);
}();
var EmojiData = /*#__PURE__*/function () {
  function EmojiData(data) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EmojiData);
    this._data = Object.assign({}, data);
    this._skins = null;
    if (this._data.skin_variations) {
      this._skins = [];
      for (var skinIdx in SKINS) {
        var skinKey = SKINS[skinIdx];
        var variationData = this._data.skin_variations[skinKey];
        var skinData = Object.assign({}, data);
        for (var k in variationData) {
          skinData[k] = variationData[k];
        }
        delete skinData.skin_variations;
        skinData['skin_tone'] = parseInt(skinIdx) + 1;
        this._skins.push(new EmojiData(skinData));
      }
    }
    this._sanitized = sanitize(this._data);
    for (var key in this._sanitized) {
      this[key] = this._sanitized[key];
    }
    this.i18nName = this._data.i18nName || null;
    this.short_names = this._data.short_names;
    this.short_name = this._data.short_names[0];
    Object.freeze(this);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EmojiData, [{
    key: "getSkin",
    value: function getSkin(skinIdx) {
      if (skinIdx && skinIdx != 'native' && this._skins) {
        return this._skins[skinIdx - 1];
      }
      return this;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      var adjustedColumns = SHEET_COLUMNS - 1,
        x = +(100 / adjustedColumns * this._data.sheet_x).toFixed(2),
        y = +(100 / adjustedColumns * this._data.sheet_y).toFixed(2);
      return "".concat(x, "% ").concat(y, "%");
    }
  }, {
    key: "ariaLabel",
    value: function ariaLabel() {
      var parts = [this.native];
      if (this.i18nName) {
        parts.push(this.i18nName);
      }
      return parts.concat(this.short_names).filter(Boolean).join(', ');
    }
  }]);
}();
var EmojiView = /*#__PURE__*/function () {
  /**
   * emoji - Emoji to display
   * set - string, emoji set name
   * native - boolean, whether to render native emoji
   * fallback - fallback function to render missing emoji, optional
   * emojiTooltip - wether we need to show the emoji tooltip, optional
   * emojiSize - emoji size in pixels, optional
   */
  function EmojiView(emoji, skin, set, native, fallback, emojiTooltip, emojiSize) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EmojiView);
    this._emoji = emoji;
    this._native = native;
    this._skin = skin;
    this._set = set;
    this._fallback = fallback;
    this.canRender = this._canRender();
    this.cssClass = this._cssClass();
    this.cssStyle = this._cssStyle(emojiSize);
    this.content = this._content();
    this.title = emojiTooltip === true ? emoji.i18nName || emoji.short_name : null;
    this.ariaLabel = emoji.ariaLabel();
    Object.freeze(this);
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EmojiView, [{
    key: "getEmoji",
    value: function getEmoji() {
      return this._emoji.getSkin(this._skin);
    }
  }, {
    key: "_canRender",
    value: function _canRender() {
      return this._isCustom() || this._isNative() || this._hasEmoji() || this._fallback;
    }
  }, {
    key: "_cssClass",
    value: function _cssClass() {
      return ['emoji-set-' + this._set, 'emoji-type-' + this._emojiType()];
    }
  }, {
    key: "_cssStyle",
    value: function _cssStyle(emojiSize) {
      var cssStyle = {};
      if (this._isCustom()) {
        cssStyle = {
          backgroundImage: 'url(' + this.getEmoji()._data.imageUrl + ')',
          backgroundSize: '100%',
          width: emojiSize + 'px',
          height: emojiSize + 'px'
        };
      } else if (this._hasEmoji() && !this._isNative()) {
        cssStyle = {
          backgroundPosition: this.getEmoji().getPosition()
        };
      }
      if (emojiSize) {
        if (this._isNative()) {
          // Set font-size for native emoji.
          cssStyle = Object.assign(cssStyle, {
            // font-size is used for native emoji which we need
            // to scale with 0.95 factor to have them look approximately
            // the same size as image-based emoji.
            fontSize: Math.round(emojiSize * 0.95 * 10) / 10 + 'px'
          });
        } else {
          // Set width/height for image emoji.
          cssStyle = Object.assign(cssStyle, {
            width: emojiSize + 'px',
            height: emojiSize + 'px'
          });
        }
      }
      return cssStyle;
    }
  }, {
    key: "_content",
    value: function _content() {
      if (this._isCustom()) {
        return '';
      }
      if (this._isNative()) {
        return this.getEmoji().native;
      }
      if (this._hasEmoji()) {
        return '';
      }
      return this._fallback ? this._fallback(this.getEmoji()) : null;
    }
  }, {
    key: "_isNative",
    value: function _isNative() {
      return this._native;
    }
  }, {
    key: "_isCustom",
    value: function _isCustom() {
      return this.getEmoji().custom;
    }
  }, {
    key: "_hasEmoji",
    value: function _hasEmoji() {
      if (!this.getEmoji()._data) {
        // Return false if we have no data.
        return false;
      }
      var hasImage = this.getEmoji()._data['has_img_' + this._set];
      if (hasImage === undefined) {
        // If there is no has_img_xxx in the data, we are working with
        // specific data file, like facebook.json, so we assume all
        // emojis are available (the :set setting for picker should
        // match the data file).
        return true;
      }
      // Otherwise, we are using all.json and can switch between different
      // sets - in this case the `has_img_{set_name}` is a boolean that
      // indicates if there is such image or not for a given set.
      return hasImage;
    }
  }, {
    key: "_emojiType",
    value: function _emojiType() {
      if (this._isCustom()) {
        return 'custom';
      }
      if (this._isNative()) {
        return 'native';
      }
      if (this._hasEmoji()) {
        return 'image';
      }
      return 'fallback';
    }
  }]);
}();
function sanitize(emoji) {
  var name = emoji.name,
    short_names = emoji.short_names,
    skin_tone = emoji.skin_tone,
    skin_variations = emoji.skin_variations,
    emoticons = emoji.emoticons,
    unified = emoji.unified,
    custom = emoji.custom,
    imageUrl = emoji.imageUrl,
    id = emoji.id || short_names[0],
    colons = ":".concat(id, ":");
  if (custom) {
    return {
      id: id,
      name: name,
      colons: colons,
      emoticons: emoticons,
      custom: custom,
      imageUrl: imageUrl
    };
  }
  if (skin_tone) {
    colons += ":skin-tone-".concat(skin_tone, ":");
  }
  return {
    id: id,
    name: name,
    colons: colons,
    emoticons: emoticons,
    unified: unified.toLowerCase(),
    skin: skin_tone || (skin_variations ? 1 : null),
    native: (0,_index__WEBPACK_IMPORTED_MODULE_2__.unifiedToNative)(unified)
  };
}

/***/ }),

/***/ "./src/utils/frequently.js":
/*!*********************************!*\
  !*** ./src/utils/frequently.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/utils/store.js");

var DEFAULTS = ['+1', 'grinning', 'kissing_heart', 'heart_eyes', 'laughing', 'stuck_out_tongue_winking_eye', 'sweat_smile', 'joy', 'scream', 'disappointed', 'unamused', 'weary', 'sob', 'sunglasses', 'heart', 'hankey'];
var frequently, initialized;
var defaults = {};
function init() {
  initialized = true;
  frequently = _store__WEBPACK_IMPORTED_MODULE_0__["default"].get('frequently');
}
function add(emoji) {
  if (!initialized) init();
  var id = emoji.id;
  frequently || (frequently = defaults);
  frequently[id] || (frequently[id] = 0);
  frequently[id] += 1;
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].set('last', id);
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].set('frequently', frequently);
}
function get(maxNumber) {
  if (!initialized) init();
  if (!frequently) {
    defaults = {};
    var result = [];
    var defaultLength = Math.min(maxNumber, DEFAULTS.length);
    for (var i = 0; i < defaultLength; i++) {
      defaults[DEFAULTS[i]] = parseInt((defaultLength - i) / 4, 10) + 1;
      result.push(DEFAULTS[i]);
    }
    return result;
  }
  var quantity = maxNumber;
  var frequentlyKeys = [];
  for (var key in frequently) {
    if (frequently.hasOwnProperty(key)) {
      frequentlyKeys.push(key);
    }
  }
  var sorted = frequentlyKeys.sort(function (a, b) {
    return frequently[a] - frequently[b];
  }).reverse();
  var sliced = sorted.slice(0, quantity);
  var last = _store__WEBPACK_IMPORTED_MODULE_0__["default"].get('last');
  if (last && sliced.indexOf(last) == -1) {
    sliced.pop();
    sliced.push(last);
  }
  return sliced;
}
/* harmony default export */ __webpack_exports__["default"] = ({
  add: add,
  get: get
});

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deepMerge: function() { return /* binding */ deepMerge; },
/* harmony export */   intersect: function() { return /* binding */ intersect; },
/* harmony export */   measureScrollbar: function() { return /* binding */ measureScrollbar; },
/* harmony export */   unifiedToNative: function() { return /* binding */ unifiedToNative; },
/* harmony export */   uniq: function() { return /* binding */ uniq; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _polyfills_stringFromCodePoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/stringFromCodePoint */ "./src/polyfills/stringFromCodePoint.js");


function unifiedToNative(unified) {
  var unicodes = unified.split('-'),
    codePoints = unicodes.map(function (u) {
      return "0x".concat(u);
    });
  return _polyfills_stringFromCodePoint__WEBPACK_IMPORTED_MODULE_1__["default"].apply(null, codePoints);
}
function uniq(arr) {
  return arr.reduce(function (acc, item) {
    if (acc.indexOf(item) === -1) {
      acc.push(item);
    }
    return acc;
  }, []);
}
function intersect(a, b) {
  var uniqA = uniq(a);
  var uniqB = uniq(b);
  return uniqA.filter(function (item) {
    return uniqB.indexOf(item) >= 0;
  });
}
function deepMerge(a, b) {
  var o = {};
  for (var key in a) {
    var originalValue = a[key],
      value = originalValue;
    if (Object.prototype.hasOwnProperty.call(b, key)) {
      value = b[key];
    }
    if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object') {
      value = deepMerge(originalValue, value);
    }
    o[key] = value;
  }
  return o;
}

// https://github.com/sonicdoe/measure-scrollbar
function measureScrollbar() {
  if (typeof document == 'undefined') return 0;
  var div = document.createElement('div');
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.overflow = 'scroll';
  div.style.position = 'absolute';
  div.style.top = '-9999px';
  document.body.appendChild(div);
  var scrollbarWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);
  return scrollbarWidth;
}


/***/ }),

/***/ "./src/utils/picker.js":
/*!*****************************!*\
  !*** ./src/utils/picker.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PickerView: function() { return /* binding */ PickerView; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");



var PickerView = /*#__PURE__*/function () {
  function PickerView(pickerComponent) {
    var _this$_categories;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PickerView);
    this._vm = pickerComponent;
    this._data = pickerComponent.data;
    this._perLine = pickerComponent.perLine;
    this._categories = [];
    (_this$_categories = this._categories).push.apply(_this$_categories, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this._data.categories()));
    this._categories = this._categories.filter(function (category) {
      return category.emojis.length > 0;
    });
    this._categories[0].first = true;
    Object.freeze(this._categories);
    this.activeCategory = this._categories[0];
    this.searchEmojis = null;

    // Preview emoji, shown on mouse over or when we move
    // with arrow keys.
    this.previewEmoji = null;
    // Indexes are used to keep the position when moving
    // with arrows: current category and current emoji
    // inside the category.
    this.previewEmojiCategoryIdx = 0;
    this.previewEmojiIdx = -1;
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PickerView, [{
    key: "onScroll",
    value: function onScroll() {
      var scrollElement = this._vm.$refs.scroll;
      if (!scrollElement) {
        // Reported in https://github.com/serebrov/emoji-mart-vue/issues/305
        // Would be good to understand how it can happen, but at least
        // exiting early we prevent the error.
        return;
      }
      var scrollTop = scrollElement.scrollTop;
      var activeCategory = this.filteredCategories[0];
      for (var i = 0, l = this.filteredCategories.length; i < l; i++) {
        var category = this.filteredCategories[i];
        var component = this._vm.getCategoryComponent(i);
        // The `-50` offset switches active category (selected in the
        // anchors bar) a bit eariler, before it actually reaches the top.
        if (component && component.$el.offsetTop - 50 > scrollTop) {
          break;
        }
        activeCategory = category;
      }
      this.activeCategory = activeCategory;
    }
  }, {
    key: "allCategories",
    get: function get() {
      return this._categories;
    }
  }, {
    key: "filteredCategories",
    get: function get() {
      if (this.searchEmojis) {
        return [{
          id: 'search',
          name: 'Search',
          emojis: this.searchEmojis
        }];
      }
      return this._categories.filter(function (category) {
        var hasEmojis = category.emojis.length > 0;
        return hasEmojis;
      });
    }
  }, {
    key: "previewEmojiCategory",
    get: function get() {
      if (this.previewEmojiCategoryIdx >= 0) {
        return this.filteredCategories[this.previewEmojiCategoryIdx];
      }
      return null;
    }
  }, {
    key: "onAnchorClick",
    value: function onAnchorClick(category) {
      var _this = this;
      if (this.searchEmojis) {
        // No categories are shown when search is active.
        return;
      }
      var i = this.filteredCategories.indexOf(category);
      var component = this._vm.getCategoryComponent(i);
      var scrollToComponent = function scrollToComponent() {
        if (component) {
          var top = component.$el.offsetTop;
          if (category.first) {
            top = 0;
          }
          _this._vm.$refs.scroll.scrollTop = top;
        }
      };
      if (this._vm.infiniteScroll) {
        scrollToComponent();
      } else {
        this.activeCategory = this.filteredCategories[i];
      }
    }
  }, {
    key: "onSearch",
    value: function onSearch(value) {
      var emojis = this._data.search(value, this.maxSearchResults);
      this.searchEmojis = emojis;
      this.previewEmojiCategoryIdx = 0;
      this.previewEmojiIdx = 0;
      this.updatePreviewEmoji();
    }
  }, {
    key: "onEmojiEnter",
    value: function onEmojiEnter(emoji) {
      this.previewEmoji = emoji;
      this.previewEmojiIdx = -1;
      this.previewEmojiCategoryIdx = -1;
    }
  }, {
    key: "onEmojiLeave",
    value: function onEmojiLeave(emoji) {
      this.previewEmoji = null;
    }
  }, {
    key: "onArrowLeft",
    value: function onArrowLeft() {
      // Moving left, decrease emoji index.
      if (this.previewEmojiIdx > 0) {
        this.previewEmojiIdx -= 1;
      } else {
        // If emoji index is zero, go to the previous category.
        this.previewEmojiCategoryIdx -= 1;
        if (this.previewEmojiCategoryIdx < 0) {
          // If we reached first category, keep it.
          this.previewEmojiCategoryIdx = 0;
        } else {
          // Update emoji index - we moved to the previous category,
          // get the last emoji in it.
          this.previewEmojiIdx = this.filteredCategories[this.previewEmojiCategoryIdx].emojis.length - 1;
        }
      }
      this.updatePreviewEmoji();
    }
  }, {
    key: "onArrowRight",
    value: function onArrowRight() {
      if (this.previewEmojiIdx < this.emojisLength(this.previewEmojiCategoryIdx) - 1) {
        // Moving right within category, increase emoji index.
        this.previewEmojiIdx += 1;
      } else {
        // Go to the next category.
        this.previewEmojiCategoryIdx += 1;
        if (this.previewEmojiCategoryIdx >= this.filteredCategories.length) {
          // If we reached the last category - keep it.
          this.previewEmojiCategoryIdx = this.filteredCategories.length - 1;
        } else {
          // If we moved to the next category, update emoji index to the
          // first emoji in the new category.
          this.previewEmojiIdx = 0;
        }
      }
      this.updatePreviewEmoji();
    }
  }, {
    key: "onArrowDown",
    value: function onArrowDown() {
      // If we are out of the emoji control (index is -1), select the first
      // emoji in the first category by calling `onArrowRight`.
      if (this.previewEmojiIdx == -1) {
        return this.onArrowRight();
      }
      var categoryLength = this.filteredCategories[this.previewEmojiCategoryIdx].emojis.length;

      // When moving down, we can move `_perLine` icons right to
      // jump to the same position in the next row.
      var diff = this._perLine;

      // TODO: previewCategory should match activeCategory
      // (so it would be both highlighted in UI and used
      // when we start moving with arrows after clicking
      // the category).

      // Note: probably we can alwasy take current row length
      // as a `diff` - it will fit both case of any row and
      // special case of the last row.
      // Note: it can be also easier to update indexes
      // directly here instead of calling onArrowRight.
      // Same is true for `onArrowUp`.

      // Unless if we are on the last row of the category and
      // there are less then `_perLine` emojis in it.
      // In this case we use the last row length as diff
      // so we go straight down, for example:
      //
      //   1 2 3 4 5 6
      //   7 8 9
      //   A B C D E F
      //
      // If we go down from `8`, we need to move 3 emojis right
      // to lend at `B` (and 3 is the length of the last row of
      // this category).
      // And if we used 6 instead (row length, `_perLine`), we would
      // lend up at `E`.
      if (this.previewEmojiIdx + diff > categoryLength) {
        // Calculate the last row length.
        diff = categoryLength % this._perLine;
      }
      for (var i = 0; i < diff; i++) {
        this.onArrowRight();
      }
      this.updatePreviewEmoji();
    }
  }, {
    key: "onArrowUp",
    value: function onArrowUp() {
      // Similar to `onArrowDown`, to move up we can move left
      // by `_perLine` number of emojis.
      var diff = this._perLine;
      if (this.previewEmojiIdx - diff < 0) {
        if (this.previewEmojiCategoryIdx > 0) {
          // Unless if we are on the first line of the category and
          // the last line in the previous category is shorter than
          // `_perLine`.
          // In this case we use the last row length as diff, so
          // we go straight up, for example:
          //
          //   1 2 3 4 5
          //   6 7 8
          //   9 A B C D
          //
          // If we go up from `A`, we need to move 3 emojis left to get
          // to `7` (and 3 is the length of the last row of the previous
          // category).
          var prevCategoryLastRowLength = this.filteredCategories[this.previewEmojiCategoryIdx - 1].emojis.length % this._perLine;
          // diff = this.previewEmojiIdx + prevCategoryLastRowLength
          diff = prevCategoryLastRowLength;
        } else {
          diff = 0;
        }
      }
      for (var i = 0; i < diff; i++) {
        this.onArrowLeft();
      }
      this.updatePreviewEmoji();
    }
  }, {
    key: "updatePreviewEmoji",
    value: function updatePreviewEmoji() {
      var _this2 = this;
      this.previewEmoji = this.filteredCategories[this.previewEmojiCategoryIdx].emojis[this.previewEmojiIdx];
      this._vm.$nextTick(function () {
        // Scroll the view if the `previewEmoji` goes out of the visible area.
        var scrollEl = _this2._vm.$refs.scroll;

        // Note: it would be more Vue-ish to mark all emojis with `ref`s
        // and then do something similar here to what we do in the
        // `getCategories` instead of using `querySelector` directly,
        // but I am not sure if having many refs would affect the performance
        // (it might, so I use `querySelector` for now).
        var emojiEl = scrollEl.querySelector('.emoji-mart-emoji-selected');
        var scrollHeight = scrollEl.offsetTop - scrollEl.offsetHeight;
        if (emojiEl && emojiEl.offsetTop + emojiEl.offsetHeight > scrollHeight + scrollEl.scrollTop) {
          scrollEl.scrollTop += emojiEl.offsetHeight;
        }
        if (emojiEl && emojiEl.offsetTop < scrollEl.scrollTop) {
          scrollEl.scrollTop -= emojiEl.offsetHeight;
        }
      });
    }
  }, {
    key: "emojisLength",
    value: function emojisLength(categoryIdx) {
      if (categoryIdx == -1) {
        return 0;
      }
      return this.filteredCategories[categoryIdx].emojis.length;
    }
  }]);
}();

/***/ }),

/***/ "./src/utils/shared-props.js":
/*!***********************************!*\
  !*** ./src/utils/shared-props.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmojiProps: function() { return /* binding */ EmojiProps; },
/* harmony export */   PickerProps: function() { return /* binding */ PickerProps; }
/* harmony export */ });
var EmojiProps = {
  native: {
    type: Boolean,
    default: false
  },
  tooltip: {
    type: Boolean,
    default: false
  },
  fallback: {
    type: Function
  },
  skin: {
    type: Number,
    default: 1
  },
  set: {
    type: String,
    default: 'apple'
  },
  emoji: {
    type: [String, Object],
    required: true
  },
  size: {
    type: Number,
    default: null
  },
  tag: {
    type: String,
    default: 'span'
  }
};
var PickerProps = {
  perLine: {
    type: Number,
    default: 9
  },
  maxSearchResults: {
    type: Number,
    default: 75
  },
  emojiSize: {
    type: Number,
    default: 24
  },
  title: {
    type: String,
    default: 'Emoji Mart™'
  },
  emoji: {
    type: String,
    default: 'department_store'
  },
  color: {
    type: String,
    default: '#ae65c5'
  },
  set: {
    type: String,
    default: 'apple'
  },
  skin: {
    type: Number,
    default: null
  },
  defaultSkin: {
    type: Number,
    default: 1
  },
  native: {
    type: Boolean,
    default: false
  },
  emojiTooltip: {
    type: Boolean,
    default: false
  },
  autoFocus: {
    type: Boolean,
    default: false
  },
  i18n: {
    type: Object,
    default: function _default() {
      return {};
    }
  },
  showPreview: {
    type: Boolean,
    default: true
  },
  showSearch: {
    type: Boolean,
    default: true
  },
  showCategories: {
    type: Boolean,
    default: true
  },
  showSkinTones: {
    type: Boolean,
    default: true
  },
  infiniteScroll: {
    type: Boolean,
    default: true
  },
  pickerStyles: {
    type: Object,
    default: function _default() {
      return {};
    }
  }
};


/***/ }),

/***/ "./src/utils/store.js":
/*!****************************!*\
  !*** ./src/utils/store.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var NAMESPACE = 'emoji-mart';
var _JSON = JSON;
var isLocalStorageSupported = typeof window !== 'undefined' && 'localStorage' in window;
var getter;
var setter;
function setHandlers(handlers) {
  handlers || (handlers = {});
  getter = handlers.getter;
  setter = handlers.setter;
}
function setNamespace(namespace) {
  NAMESPACE = namespace;
}
function update(state) {
  for (var key in state) {
    var value = state[key];
    set(key, value);
  }
}
function set(key, value) {
  if (setter) {
    setter(key, value);
  } else {
    if (!isLocalStorageSupported) return;
    try {
      window.localStorage["".concat(NAMESPACE, ".").concat(key)] = _JSON.stringify(value);
    } catch (e) {}
  }
}
function get(key) {
  if (getter) {
    return getter(key);
  } else {
    if (!isLocalStorageSupported) return;
    try {
      var value = window.localStorage["".concat(NAMESPACE, ".").concat(key)];
    } catch (e) {
      return;
    }
    if (value) {
      return JSON.parse(value);
    }
  }
}
/* harmony default export */ __webpack_exports__["default"] = ({
  update: update,
  set: set,
  get: get,
  setNamespace: setNamespace,
  setHandlers: setHandlers
});

/***/ }),

/***/ "./src/vendor/raf-polyfill.js":
/*!************************************!*\
  !*** ./src/vendor/raf-polyfill.js ***!
  \************************************/
/***/ (function() {

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

var isWindowAvailable = typeof window !== 'undefined';
isWindowAvailable && function () {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }
  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
}();

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Anchors: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Anchors; },
/* harmony export */   Category: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Category; },
/* harmony export */   Emoji: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Emoji; },
/* harmony export */   EmojiData: function() { return /* reexport safe */ _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__.EmojiData; },
/* harmony export */   EmojiIndex: function() { return /* reexport safe */ _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__.EmojiIndex; },
/* harmony export */   EmojiView: function() { return /* reexport safe */ _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__.EmojiView; },
/* harmony export */   Picker: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Picker; },
/* harmony export */   Preview: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Preview; },
/* harmony export */   Search: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Search; },
/* harmony export */   Skins: function() { return /* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_3__.Skins; },
/* harmony export */   frequently: function() { return /* reexport safe */ _utils_frequently__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   sanitize: function() { return /* reexport safe */ _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__.sanitize; },
/* harmony export */   store: function() { return /* reexport safe */ _utils_store__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   uncompress: function() { return /* reexport safe */ _utils_data__WEBPACK_IMPORTED_MODULE_1__.uncompress; }
/* harmony export */ });
/* harmony import */ var _utils_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/store */ "./src/utils/store.js");
/* harmony import */ var _utils_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/data */ "./src/utils/data.js");
/* harmony import */ var _utils_frequently__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/frequently */ "./src/utils/frequently.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/components/index.js");
/* harmony import */ var _utils_emoji_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/emoji-data */ "./src/utils/emoji-data.js");






}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktbWFydC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0EsZ0NBQWdDLE9BQU87QUFDdkM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKcUQ7QUFDckQ7QUFDQSwrQkFBK0IsZ0VBQWdCO0FBQy9DOzs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0YrQztBQUMvQztBQUNBLGtCQUFrQixjQUFjO0FBQ2hDO0FBQ0Esd0hBQXdILDZEQUFhO0FBQ3JJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWCtDO0FBQy9DO0FBQ0EsY0FBYyw2REFBYTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGdUQ7QUFDSjtBQUNzQjtBQUNsQjtBQUN2RDtBQUNBLFNBQVMsaUVBQWlCLE9BQU8sK0RBQWUsT0FBTywwRUFBMEIsT0FBTyxpRUFBaUI7QUFDekc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmtDO0FBQ2xDO0FBQ0Esa0JBQWtCLHNEQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzREFBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmtDO0FBQ1M7QUFDM0M7QUFDQSxVQUFVLDJEQUFXO0FBQ3JCLHFCQUFxQixzREFBTztBQUM1Qjs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNScUQ7QUFDckQ7QUFDQTtBQUNBLHFDQUFxQyxnRUFBZ0I7QUFDckQsY0FBYztBQUNkLCtMQUErTCxnRUFBZ0I7QUFDL007QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1lBO0FBQ0E7QUFFQSwrREFBZTtFQUNmRSxLQUFBLEVBQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUNBSCwyREFBQTtJQUNBSSxJQUFBO01BQ0FDLElBQUEsRUFBQUMsTUFBQTtNQUNBQyxRQUFBO0lBQ0E7RUFBQSxFQUNBO0VBQ0FDLEtBQUE7RUFDQUMsUUFBQTtJQUNBQyxJQUFBLFdBQUFBLEtBQUE7TUFDQSxXQUFBVCx3REFBQSxDQUNBLEtBQUFVLFdBQUEsRUFDQSxLQUFBQyxJQUFBLEVBQ0EsS0FBQUMsR0FBQSxFQUNBLEtBQUFDLE1BQUEsRUFDQSxLQUFBQyxRQUFBLEVBQ0EsS0FBQUMsT0FBQSxFQUNBLEtBQUFDLElBQ0E7SUFDQTtJQUNBQyxhQUFBLFdBQUFBLGNBQUE7TUFDQSxZQUFBUCxXQUFBLENBQUFRLFVBQUE7SUFDQTtJQUNBQyxLQUFBLFdBQUFBLE1BQUE7TUFDQSxZQUFBSixPQUFBLFFBQUFMLFdBQUEsQ0FBQVUsVUFBQTtJQUNBO0lBQ0FWLFdBQUEsV0FBQUEsWUFBQTtNQUNBLGdCQUFBVyxLQUFBO1FBQ0EsWUFBQWxCLElBQUEsQ0FBQW1CLFNBQUEsTUFBQUQsS0FBQTtNQUNBO1FBQ0EsWUFBQUEsS0FBQTtNQUNBO0lBQ0E7RUFDQTtFQUNBRSxPQUFBLFdBQUFBLFFBQUE7RUFDQUMsT0FBQTtJQUNBQyxPQUFBLFdBQUFBLFFBQUE7TUFDQSxLQUFBQyxLQUFBLGVBQUFoQixXQUFBO0lBQ0E7SUFDQWlCLFlBQUEsV0FBQUEsYUFBQTtNQUNBLEtBQUFELEtBQUEsb0JBQUFoQixXQUFBO0lBQ0E7SUFDQWtCLFlBQUEsV0FBQUEsYUFBQTtNQUNBLEtBQUFGLEtBQUEsb0JBQUFoQixXQUFBO0lBQ0E7RUFDQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeUJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBQTZCLElBQUE7RUFDQUMsTUFBQTtFQUNBQyxRQUFBO0VBQ0FDLFVBQUE7SUFDQUYsTUFBQTtJQUNBRyxNQUFBO0lBQ0FDLE9BQUE7SUFDQUMsTUFBQTtJQUNBQyxNQUFBO0lBQ0FDLEtBQUE7SUFDQUMsUUFBQTtJQUNBQyxNQUFBO0lBQ0FDLE9BQUE7SUFDQUMsT0FBQTtJQUNBQyxLQUFBO0lBQ0FDLE1BQUE7RUFDQTtBQUNBO0FBRUEsK0RBQWU7RUFDZnBELEtBQUEsRUFBQUMsYUFBQSxDQUFBQSxhQUFBLEtBQ0ErQiw0REFBQTtJQUNBOUIsSUFBQTtNQUNBQyxJQUFBLEVBQUFDLE1BQUE7TUFDQUMsUUFBQTtJQUNBO0VBQUEsRUFDQTtFQUNBQyxLQUFBO0VBQ0FKLElBQUEsV0FBQUEsS0FBQTtJQUNBO01BQ0FtRCxVQUFBLE9BQUEzQyxJQUFBLElBQUFrQixvREFBQSxDQUFBMEIsR0FBQSxpQkFBQUMsV0FBQTtNQUNBL0MsSUFBQSxNQUFBeUIscURBQUE7SUFDQTtFQUNBO0VBQ0ExQixRQUFBO0lBQ0FpRCxZQUFBLFdBQUFBLGFBQUE7TUFDQSxPQUFBdkQsYUFBQTtRQUNBd0QsS0FBQSxPQUFBQyxjQUFBO01BQUEsR0FDQSxLQUFBQyxZQUFBO0lBRUE7SUFDQUMsVUFBQSxXQUFBQSxXQUFBO01BQ0E7UUFDQWhELE1BQUEsT0FBQUEsTUFBQTtRQUNBRixJQUFBLE9BQUEyQyxVQUFBO1FBQ0ExQyxHQUFBLE9BQUFBLEdBQUE7UUFDQWtELFlBQUEsT0FBQUEsWUFBQTtRQUNBQyxTQUFBLE9BQUFBLFNBQUE7UUFDQUMsYUFBQSxPQUFBdkQsSUFBQSxDQUFBd0QsWUFBQTtRQUNBQyxxQkFBQSxPQUFBekQsSUFBQSxDQUFBMEQsb0JBQUE7UUFDQUMsT0FBQSxPQUFBQyxZQUFBLENBQUFDLElBQUE7UUFDQUMsT0FBQSxPQUFBQyxZQUFBLENBQUFGLElBQUE7UUFDQTdDLE9BQUEsT0FBQWdELFlBQUEsQ0FBQUgsSUFBQTtNQUNBO0lBQ0E7SUFDQUksU0FBQSxXQUFBQSxVQUFBO01BQ0E7UUFDQS9ELElBQUEsT0FBQTJDO01BQ0E7SUFDQTtJQUNBSyxjQUFBLFdBQUFBLGVBQUE7TUFDQSxZQUFBZ0IsT0FBQSxTQUFBWixTQUFBLGtCQUFBL0Isd0RBQUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTRDLGtCQUFBLFdBQUFBLG1CQUFBO01BQ0EsWUFBQW5FLElBQUEsQ0FBQW1FLGtCQUFBO0lBQ0E7SUFDQUMsVUFBQSxXQUFBQSxXQUFBO01BQ0EsT0FBQXhFLE1BQUEsQ0FBQXlFLE1BQUEsQ0FBQS9DLGlEQUFBLENBQUFRLElBQUEsT0FBQXdDLElBQUE7SUFDQTtJQUNBQyxTQUFBLFdBQUFBLFVBQUE7TUFDQTtRQUNBLFlBQUE3RSxJQUFBLENBQUFrQixLQUFBLE1BQUFBLEtBQUE7TUFDQSxTQUFBNEQsQ0FBQTtRQUNBQyxPQUFBLENBQUFDLEtBQUEsQ0FDQSw0QkFDQSxLQUFBOUQsS0FBQSxHQUNBLHVEQUNBO1FBQ0E2RCxPQUFBLENBQUFDLEtBQUEsQ0FBQUYsQ0FBQTtRQUNBLFlBQUE5RSxJQUFBLENBQUFpRixVQUFBO01BQ0E7SUFDQTtJQUNBQyxXQUFBLFdBQUFBLFlBQUE7TUFDQSxZQUFBNUUsSUFBQSxDQUFBNkUsWUFBQTtJQUNBO0VBQ0E7RUFDQUMsS0FBQTtJQUNBNUUsSUFBQSxXQUFBQSxLQUFBO01BQ0EsS0FBQTZFLFlBQUEsTUFBQTdFLElBQUE7SUFDQTtFQUNBO0VBQ0FhLE9BQUE7SUFDQWlFLFFBQUEsV0FBQUEsU0FBQTtNQUNBLFNBQUFDLGNBQUEsVUFBQUMsZUFBQTtRQUNBLEtBQUFBLGVBQUE7UUFDQUMsTUFBQSxDQUFBQyxxQkFBQSxNQUFBQyxhQUFBLENBQUF4QixJQUFBO01BQ0E7SUFDQTtJQUNBd0IsYUFBQSxXQUFBQSxjQUFBO01BQ0EsS0FBQUgsZUFBQTtNQUNBLEtBQUFsRixJQUFBLENBQUFnRixRQUFBO0lBQ0E7SUFDQU0sYUFBQSxXQUFBQSxjQUFBQyxRQUFBO01BQ0EsS0FBQXZGLElBQUEsQ0FBQXNGLGFBQUEsQ0FBQUMsUUFBQTtJQUNBO0lBQ0FDLFFBQUEsV0FBQUEsU0FBQUMsS0FBQTtNQUNBLEtBQUF6RixJQUFBLENBQUF3RixRQUFBLENBQUFDLEtBQUE7SUFDQTtJQUNBN0IsWUFBQSxXQUFBQSxhQUFBaEQsS0FBQTtNQUNBLEtBQUFaLElBQUEsQ0FBQTRELFlBQUEsQ0FBQWhELEtBQUE7SUFDQTtJQUNBbUQsWUFBQSxXQUFBQSxhQUFBbkQsS0FBQTtNQUNBLEtBQUFaLElBQUEsQ0FBQStELFlBQUEsQ0FBQW5ELEtBQUE7SUFDQTtJQUNBOEUsV0FBQSxXQUFBQSxZQUFBQyxNQUFBO01BQ0EsSUFBQUMsTUFBQSxRQUFBNUYsSUFBQSxDQUFBNkYsZUFBQTtNQUNBLEtBQUE3RixJQUFBLENBQUEwRixXQUFBO01BQ0EsSUFBQUMsTUFBQSxTQUFBM0YsSUFBQSxDQUFBNkYsZUFBQSxLQUFBRCxNQUFBO1FBQ0E7UUFDQUQsTUFBQSxDQUFBRyxjQUFBO01BQ0E7SUFDQTtJQUNBQyxZQUFBLFdBQUFBLGFBQUE7TUFDQSxLQUFBL0YsSUFBQSxDQUFBK0YsWUFBQTtJQUNBO0lBQ0FDLFdBQUEsV0FBQUEsWUFBQTtNQUNBLEtBQUFoRyxJQUFBLENBQUFnRyxXQUFBO0lBQ0E7SUFDQUMsU0FBQSxXQUFBQSxVQUFBTixNQUFBO01BQ0EsS0FBQTNGLElBQUEsQ0FBQWlHLFNBQUE7TUFDQTtNQUNBTixNQUFBLENBQUFHLGNBQUE7SUFDQTtJQUNBbkMsT0FBQSxXQUFBQSxRQUFBO01BQ0EsVUFBQTNELElBQUEsQ0FBQXdELFlBQUE7UUFDQTtRQUNBO1FBQ0E7TUFDQTtNQUNBLEtBQUF2QyxLQUFBLGdCQUFBakIsSUFBQSxDQUFBd0QsWUFBQTtNQUNBbkMseURBQUEsQ0FBQTZFLEdBQUEsTUFBQWxHLElBQUEsQ0FBQXdELFlBQUE7SUFDQTtJQUNBUSxZQUFBLFdBQUFBLGFBQUFwRCxLQUFBO01BQ0EsS0FBQUssS0FBQSxXQUFBTCxLQUFBO01BQ0FTLHlEQUFBLENBQUE2RSxHQUFBLENBQUF0RixLQUFBO0lBQ0E7SUFDQXVGLFlBQUEsV0FBQUEsYUFBQVIsTUFBQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0FBLE1BQUEsQ0FBQVMsZUFBQTtJQUNBO0lBQ0FyQixZQUFBLFdBQUFBLGFBQUE3RSxJQUFBO01BQ0EsS0FBQTJDLFVBQUEsR0FBQTNDLElBQUE7TUFDQWtCLG9EQUFBLENBQUFpRixNQUFBO1FBQUFuRyxJQUFBLEVBQUFBO01BQUE7TUFFQSxLQUFBZSxLQUFBLGdCQUFBZixJQUFBO0lBQ0E7SUFDQW9HLG9CQUFBLFdBQUFBLHFCQUFBQyxLQUFBO01BQ0EsSUFBQUMsU0FBQSxRQUFBQyxLQUFBLGlCQUFBRixLQUFBO01BQ0EsSUFBQUMsU0FBQSxXQUFBQSxTQUFBO1FBQ0E7UUFDQSxPQUFBQSxTQUFBO01BQ0E7TUFDQTtNQUNBLE9BQUFBLFNBQUE7SUFDQTtFQUNBO0VBQ0FFLFVBQUE7SUFDQWhGLE9BQUEsRUFBQUEsb0RBQUE7SUFDQUMsUUFBQSxFQUFBQSxxREFBQTtJQUNBQyxPQUFBLEVBQUFBLG9EQUFBO0lBQ0FDLE1BQUEsRUFBQUEsb0RBQUFBO0VBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7QUNqUUQ7QUFFQSwrREFBZTtFQUNmckMsS0FBQTtJQUNBOEUsSUFBQTtNQUNBM0UsSUFBQSxFQUFBQyxNQUFBO01BQ0FDLFFBQUE7SUFDQTtJQUNBK0csS0FBQTtNQUNBakgsSUFBQSxFQUFBa0g7SUFDQTtJQUNBNUUsVUFBQTtNQUNBdEMsSUFBQSxFQUFBbUgsS0FBQTtNQUNBakgsUUFBQTtJQUNBO0lBQ0FrSCxjQUFBO01BQ0FwSCxJQUFBLEVBQUFDLE1BQUE7TUFDQW9ILE9BQUEsV0FBQUEsU0FBQTtRQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FsSCxLQUFBO0VBQ0FnQixPQUFBLFdBQUFBLFFBQUE7SUFDQSxLQUFBNkYsSUFBQSxHQUFBQSw2Q0FBQTtFQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7Ozs7OztBQ0hEO0FBQ0E7QUFFQSwrREFBZTtFQUNmbkgsS0FBQTtJQUNBRSxJQUFBO01BQ0FDLElBQUEsRUFBQUMsTUFBQTtNQUNBQyxRQUFBO0lBQ0E7SUFDQXlFLElBQUE7TUFDQTNFLElBQUEsRUFBQUMsTUFBQTtNQUNBQyxRQUFBO0lBQ0E7SUFDQXFILEVBQUE7TUFDQXZILElBQUEsRUFBQWtILE1BQUE7TUFDQWhILFFBQUE7SUFDQTtJQUNBc0gsSUFBQTtNQUNBeEgsSUFBQSxFQUFBa0gsTUFBQTtNQUNBaEgsUUFBQTtJQUNBO0lBQ0F1SCxNQUFBO01BQ0F6SCxJQUFBLEVBQUFtSDtJQUNBO0lBQ0ExRCxVQUFBO01BQ0F6RCxJQUFBLEVBQUFDLE1BQUE7TUFDQUMsUUFBQTtJQUNBO0VBQ0E7RUFDQWtCLE9BQUE7SUFDQXNHLFdBQUEsV0FBQUEsWUFBQXBILFdBQUE7TUFDQSxVQUFBbUQsVUFBQSxDQUFBRyxhQUFBO1FBQ0E7TUFDQTtNQUNBLFVBQUFILFVBQUEsQ0FBQUsscUJBQUE7UUFDQTtNQUNBO01BQ0EsSUFDQSxLQUFBTCxVQUFBLENBQUFHLGFBQUEsQ0FBQTJELEVBQUEsSUFBQWpILFdBQUEsQ0FBQWlILEVBQUEsSUFDQSxLQUFBOUQsVUFBQSxDQUFBSyxxQkFBQSxDQUFBeUQsRUFBQSxTQUFBQSxFQUFBLEVBQ0E7UUFDQTtNQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FuSCxRQUFBO0lBQ0F1SCxTQUFBLFdBQUFBLFVBQUE7TUFDQSxjQUFBRixNQUFBO0lBQ0E7SUFDQUcsUUFBQSxXQUFBQSxTQUFBO01BQ0EsWUFBQUosSUFBQTtJQUNBO0lBQ0FLLFVBQUEsV0FBQUEsV0FBQTtNQUNBLFlBQUFKLE1BQUEsQ0FBQUssTUFBQTtJQUNBO0lBQ0FDLFlBQUEsV0FBQUEsYUFBQTtNQUFBLElBQUFDLEtBQUE7TUFDQSxZQUFBUCxNQUFBLENBQUFRLEdBQUEsV0FBQWhILEtBQUE7UUFDQSxJQUFBWCxXQUFBLEdBQUFXLEtBQUE7UUFDQSxJQUFBaUgsU0FBQSxPQUFBdEksd0RBQUEsQ0FDQXFCLEtBQUEsRUFDQStHLEtBQUEsQ0FBQXZFLFVBQUEsQ0FBQWxELElBQUEsRUFDQXlILEtBQUEsQ0FBQXZFLFVBQUEsQ0FBQWpELEdBQUEsRUFDQXdILEtBQUEsQ0FBQXZFLFVBQUEsQ0FBQWhELE1BQUEsRUFDQXVILEtBQUEsQ0FBQXZFLFVBQUEsQ0FBQS9DLFFBQUEsRUFDQXNILEtBQUEsQ0FBQXZFLFVBQUEsQ0FBQUMsWUFBQSxFQUNBc0UsS0FBQSxDQUFBdkUsVUFBQSxDQUFBRSxTQUNBO1FBQ0E7VUFBQXJELFdBQUEsRUFBQUEsV0FBQTtVQUFBNEgsU0FBQSxFQUFBQTtRQUFBO01BQ0E7SUFDQTtFQUNBO0VBQ0FuQixVQUFBO0lBQ0FPLEtBQUEsRUFBQUEsa0RBQUFBO0VBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7Ozs7O0FDNUVEO0FBQ0E7QUFFQSwrREFBZTtFQUNmekgsS0FBQTtJQUNBRSxJQUFBO01BQ0FDLElBQUEsRUFBQUMsTUFBQTtNQUNBQyxRQUFBO0lBQ0E7SUFDQWEsS0FBQTtNQUNBZixJQUFBLEVBQUFrSCxNQUFBO01BQ0FoSCxRQUFBO0lBQ0E7SUFDQWUsS0FBQTtNQUNBakIsSUFBQSxHQUFBa0gsTUFBQSxFQUFBakgsTUFBQTtJQUNBO0lBQ0EyRSxTQUFBO01BQ0E1RSxJQUFBLEdBQUFrSCxNQUFBLEVBQUFqSCxNQUFBO01BQ0FDLFFBQUE7SUFDQTtJQUNBa0ksYUFBQTtNQUNBcEksSUFBQSxFQUFBcUksT0FBQTtNQUNBaEIsT0FBQTtJQUNBO0lBQ0E1RCxVQUFBO01BQ0F6RCxJQUFBLEVBQUFDLE1BQUE7TUFDQUMsUUFBQTtJQUNBO0lBQ0FvRSxTQUFBO01BQ0F0RSxJQUFBLEVBQUFDLE1BQUE7TUFDQUMsUUFBQTtJQUNBO0lBQ0FrRixZQUFBO01BQ0FwRixJQUFBLEVBQUFzSSxRQUFBO01BQ0FwSSxRQUFBO0lBQ0E7RUFDQTtFQUNBRSxRQUFBO0lBQ0FtSSxTQUFBLFdBQUFBLFVBQUE7TUFDQSxTQUFBdEgsS0FBQTtRQUNBLFlBQUFBLEtBQUE7TUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBdUgsZUFBQSxXQUFBQSxnQkFBQTtNQUNBLFlBQUFELFNBQUEsQ0FBQUUsV0FBQTtJQUNBO0lBQ0FDLGNBQUEsV0FBQUEsZUFBQTtNQUNBLFlBQUFILFNBQUEsQ0FBQUksU0FBQTtJQUNBO0VBQ0E7RUFDQTVCLFVBQUE7SUFDQU8sS0FBQSxFQUFBQSxrREFBQTtJQUNBYSxLQUFBLEVBQUFBLGtEQUFBQTtFQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUNqRkQsK0RBQWU7RUFDZnRJLEtBQUE7SUFDQUUsSUFBQTtNQUNBQyxJQUFBLEVBQUFDLE1BQUE7TUFDQUMsUUFBQTtJQUNBO0lBQ0F5RSxJQUFBO01BQ0EzRSxJQUFBLEVBQUFDLE1BQUE7TUFDQUMsUUFBQTtJQUNBO0lBQ0EwSSxTQUFBO01BQ0E1SSxJQUFBLEVBQUFxSSxPQUFBO01BQ0FoQixPQUFBO0lBQ0E7SUFDQXhCLFFBQUE7TUFDQTdGLElBQUEsRUFBQXNJLFFBQUE7TUFDQXBJLFFBQUE7SUFDQTtJQUNBNkYsV0FBQTtNQUNBL0YsSUFBQSxFQUFBc0ksUUFBQTtNQUNBcEksUUFBQTtJQUNBO0lBQ0FrRyxZQUFBO01BQ0FwRyxJQUFBLEVBQUFzSSxRQUFBO01BQ0FwSSxRQUFBO0lBQ0E7SUFDQW1HLFdBQUE7TUFDQXJHLElBQUEsRUFBQXNJLFFBQUE7TUFDQXBJLFFBQUE7SUFDQTtJQUNBb0csU0FBQTtNQUNBdEcsSUFBQSxFQUFBc0ksUUFBQTtNQUNBcEksUUFBQTtJQUNBO0lBQ0E4RCxPQUFBO01BQ0FoRSxJQUFBLEVBQUFzSSxRQUFBO01BQ0FwSSxRQUFBO0lBQ0E7RUFDQTtFQUNBQyxLQUFBO0VBQ0FKLElBQUEsV0FBQUEsS0FBQTtJQUNBO01BQ0ErRixLQUFBO0lBQ0E7RUFDQTtFQUNBMUYsUUFBQTtJQUNBeUksVUFBQSxXQUFBQSxXQUFBO01BQ0EsWUFBQTlJLElBQUE7SUFDQTtFQUNBO0VBQ0FvRixLQUFBO0lBQ0FXLEtBQUEsV0FBQUEsTUFBQTtNQUNBLEtBQUF4RSxLQUFBLGdCQUFBd0UsS0FBQTtJQUNBO0VBQ0E7RUFDQTFFLE9BQUE7SUFDQTBILEtBQUEsV0FBQUEsTUFBQTtNQUNBLEtBQUFoRCxLQUFBO0lBQ0E7RUFDQTtFQUNBaUQsT0FBQSxXQUFBQSxRQUFBO0lBQ0EsSUFBQUMsTUFBQSxRQUFBQyxHQUFBLENBQUFDLGFBQUE7SUFFQSxTQUFBTixTQUFBO01BQ0FJLE1BQUEsQ0FBQUcsS0FBQTtJQUNBO0VBQ0E7QUFDQSxDQUFDLEU7Ozs7Ozs7Ozs7OztBQ2hGRCwrREFBZTtFQUNmdEosS0FBQTtJQUNBVSxJQUFBO01BQ0FQLElBQUEsRUFBQW9KLE1BQUE7TUFDQWxKLFFBQUE7SUFDQTtFQUNBO0VBQ0FDLEtBQUE7RUFDQUosSUFBQSxXQUFBQSxLQUFBO0lBQ0E7TUFDQXNKLE1BQUE7SUFDQTtFQUNBO0VBQ0FqSSxPQUFBO0lBQ0FDLE9BQUEsV0FBQUEsUUFBQWlJLFFBQUE7TUFDQSxTQUFBRCxNQUFBO1FBQ0EsSUFBQUMsUUFBQSxTQUFBL0ksSUFBQTtVQUNBLEtBQUFlLEtBQUEsV0FBQWdJLFFBQUE7UUFDQTtNQUNBO01BRUEsS0FBQUQsTUFBQSxTQUFBQSxNQUFBO0lBQ0E7RUFDQTtBQUNBLENBQUMsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDRCxJQUFJRSxNQUFNLEdBQUcsU0FBU0EsTUFBTUEsQ0FBQSxFQUFHO0VBQzdCLElBQUlDLEdBQUcsR0FBRyxJQUFJO0lBQ1pDLEVBQUUsR0FBR0QsR0FBRyxDQUFDRSxLQUFLLENBQUNELEVBQUU7RUFDbkIsT0FBT0QsR0FBRyxDQUFDbkosSUFBSSxDQUFDc0osU0FBUyxHQUNyQkYsRUFBRSxDQUNBRCxHQUFHLENBQUNJLEdBQUcsRUFDUDtJQUNFQSxHQUFHLEVBQUUsV0FBVztJQUNoQkMsV0FBVyxFQUFFLGtCQUFrQjtJQUMvQkMsS0FBSyxFQUFFO01BQ0wvSSxLQUFLLEVBQUV5SSxHQUFHLENBQUNuSixJQUFJLENBQUNVLEtBQUs7TUFDckIsWUFBWSxFQUFFeUksR0FBRyxDQUFDbkosSUFBSSxDQUFDMEosU0FBUztNQUNoQyxZQUFZLEVBQUVQLEdBQUcsQ0FBQ3pJO0lBQ3BCLENBQUM7SUFDRGlKLEVBQUUsRUFBRTtNQUNGQyxVQUFVLEVBQUVULEdBQUcsQ0FBQ2pJLFlBQVk7TUFDNUIySSxVQUFVLEVBQUVWLEdBQUcsQ0FBQ2hJLFlBQVk7TUFDNUIySSxLQUFLLEVBQUVYLEdBQUcsQ0FBQ25JO0lBQ2I7RUFDRixDQUFDLEVBQ0QsQ0FDRW9JLEVBQUUsQ0FBQyxNQUFNLEVBQUU7SUFBRVcsS0FBSyxFQUFFWixHQUFHLENBQUNuSixJQUFJLENBQUNnSyxRQUFRO0lBQUVDLEtBQUssRUFBRWQsR0FBRyxDQUFDbkosSUFBSSxDQUFDa0s7RUFBUyxDQUFDLEVBQUUsQ0FDakVmLEdBQUcsQ0FBQ2dCLEVBQUUsQ0FBQ2hCLEdBQUcsQ0FBQ2lCLEVBQUUsQ0FBQ2pCLEdBQUcsQ0FBQ25KLElBQUksQ0FBQ3FLLE9BQU8sQ0FBQyxDQUFDLENBQ2pDLENBQUMsQ0FFTixDQUFDLEdBQ0RsQixHQUFHLENBQUNtQixFQUFFLENBQUMsQ0FBQztBQUNkLENBQUM7QUFDRCxJQUFJQyxlQUFlLEdBQUcsRUFBRTtBQUN4QnJCLE1BQU0sQ0FBQ3NCLGFBQWEsR0FBRyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdCM0IsSUFBSXRCLE1BQU0sR0FBRyxTQUFTQSxNQUFNQSxDQUFBLEVBQUc7RUFDN0IsSUFBSUMsR0FBRyxHQUFHLElBQUk7SUFDWkMsRUFBRSxHQUFHRCxHQUFHLENBQUNFLEtBQUssQ0FBQ0QsRUFBRTtFQUNuQixPQUFPQSxFQUFFLENBQ1AsU0FBUyxFQUNUO0lBQUVJLFdBQVcsRUFBRSw4QkFBOEI7SUFBRVMsS0FBSyxFQUFFZCxHQUFHLENBQUNuRztFQUFhLENBQUMsRUFDeEUsQ0FDRW1HLEdBQUcsQ0FBQ3NCLGNBQWMsR0FDZHJCLEVBQUUsQ0FDQSxLQUFLLEVBQ0w7SUFBRUksV0FBVyxFQUFFO0VBQXdDLENBQUMsRUFDeEQsQ0FDRUosRUFBRSxDQUFDLFNBQVMsRUFBRTtJQUNaSyxLQUFLLEVBQUU7TUFDTC9KLElBQUksRUFBRXlKLEdBQUcsQ0FBQ3pKLElBQUk7TUFDZDRFLElBQUksRUFBRTZFLEdBQUcsQ0FBQy9FLFVBQVU7TUFDcEJ3QyxLQUFLLEVBQUV1QyxHQUFHLENBQUN2QyxLQUFLO01BQ2hCM0UsVUFBVSxFQUFFa0gsR0FBRyxDQUFDbkosSUFBSSxDQUFDMEssYUFBYTtNQUNsQyxpQkFBaUIsRUFBRXZCLEdBQUcsQ0FBQ25KLElBQUksQ0FBQytHO0lBQzlCLENBQUM7SUFDRDRDLEVBQUUsRUFBRTtNQUFFRyxLQUFLLEVBQUVYLEdBQUcsQ0FBQzdEO0lBQWM7RUFDakMsQ0FBQyxDQUFDLENBQ0gsRUFDRCxDQUNGLENBQUMsR0FDRDZELEdBQUcsQ0FBQ21CLEVBQUUsQ0FBQyxDQUFDLEVBQ1puQixHQUFHLENBQUNnQixFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hoQixHQUFHLENBQUN3QixFQUFFLENBQ0osZ0JBQWdCLEVBQ2hCLFlBQVk7SUFDVixPQUFPLENBQ0x4QixHQUFHLENBQUN5QixVQUFVLEdBQ1Z4QixFQUFFLENBQUMsUUFBUSxFQUFFO01BQ1h5QixHQUFHLEVBQUUsUUFBUTtNQUNicEIsS0FBSyxFQUFFO1FBQ0wvSixJQUFJLEVBQUV5SixHQUFHLENBQUN6SixJQUFJO1FBQ2Q0RSxJQUFJLEVBQUU2RSxHQUFHLENBQUMvRSxVQUFVO1FBQ3BCLFlBQVksRUFBRStFLEdBQUcsQ0FBQ1osU0FBUztRQUMzQixXQUFXLEVBQUVZLEdBQUcsQ0FBQzNEO01BQ25CLENBQUM7TUFDRG1FLEVBQUUsRUFBRTtRQUNGNUgsTUFBTSxFQUFFb0gsR0FBRyxDQUFDM0QsUUFBUTtRQUNwQnNGLFNBQVMsRUFBRTNCLEdBQUcsQ0FBQ3pELFdBQVc7UUFDMUJxRixVQUFVLEVBQUU1QixHQUFHLENBQUNwRCxZQUFZO1FBQzVCaUYsU0FBUyxFQUFFN0IsR0FBRyxDQUFDbkQsV0FBVztRQUMxQmlGLE9BQU8sRUFBRTlCLEdBQUcsQ0FBQ2xELFNBQVM7UUFDdEJpRixLQUFLLEVBQUUvQixHQUFHLENBQUN4RixPQUFPO1FBQ2xCd0gsTUFBTSxFQUFFaEMsR0FBRyxDQUFDaEQ7TUFDZDtJQUNGLENBQUMsQ0FBQyxHQUNGZ0QsR0FBRyxDQUFDbUIsRUFBRSxDQUFDLENBQUMsQ0FDYjtFQUNILENBQUMsRUFDRDtJQUNFNUssSUFBSSxFQUFFeUosR0FBRyxDQUFDekosSUFBSTtJQUNkNEUsSUFBSSxFQUFFNkUsR0FBRyxDQUFDN0UsSUFBSTtJQUNkaUUsU0FBUyxFQUFFWSxHQUFHLENBQUNaLFNBQVM7SUFDeEIvQyxRQUFRLEVBQUUyRCxHQUFHLENBQUMzRDtFQUNoQixDQUNGLENBQUMsRUFDRDJELEdBQUcsQ0FBQ2dCLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWGYsRUFBRSxDQUNBLEtBQUssRUFDTDtJQUNFeUIsR0FBRyxFQUFFLFFBQVE7SUFDYnJCLFdBQVcsRUFBRSxtQkFBbUI7SUFDaENDLEtBQUssRUFBRTtNQUFFMkIsSUFBSSxFQUFFO0lBQVcsQ0FBQztJQUMzQnpCLEVBQUUsRUFBRTtNQUFFMEIsTUFBTSxFQUFFbEMsR0FBRyxDQUFDbkU7SUFBUztFQUM3QixDQUFDLEVBQ0QsQ0FDRW9FLEVBQUUsQ0FDQSxLQUFLLEVBQ0w7SUFDRXlCLEdBQUcsRUFBRSxlQUFlO0lBQ3BCcEIsS0FBSyxFQUFFO01BQ0x2QyxFQUFFLEVBQUUsaUJBQWlCO01BQ3JCa0UsSUFBSSxFQUFFLFNBQVM7TUFDZixlQUFlLEVBQUU7SUFDbkI7RUFDRixDQUFDLEVBQ0QsQ0FDRWpDLEdBQUcsQ0FBQ3dCLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUN4QnhCLEdBQUcsQ0FBQ2dCLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWGhCLEdBQUcsQ0FBQ21DLEVBQUUsQ0FBQ25DLEdBQUcsQ0FBQ25KLElBQUksQ0FBQ21FLGtCQUFrQixFQUFFLFVBQVVvQixRQUFRLEVBQUVnRyxHQUFHLEVBQUU7SUFDM0QsT0FBT25DLEVBQUUsQ0FBQyxVQUFVLEVBQUU7TUFDcEJvQyxVQUFVLEVBQUUsQ0FDVjtRQUNFckUsSUFBSSxFQUFFLE1BQU07UUFDWnNFLE9BQU8sRUFBRSxRQUFRO1FBQ2pCaEcsS0FBSyxFQUNIMEQsR0FBRyxDQUFDbEUsY0FBYyxJQUNsQk0sUUFBUSxJQUFJNEQsR0FBRyxDQUFDbkosSUFBSSxDQUFDK0csY0FBYyxJQUNuQ29DLEdBQUcsQ0FBQ3ZFLFdBQVc7UUFDakI4RyxVQUFVLEVBQ1I7TUFDSixDQUFDLENBQ0Y7TUFDREMsR0FBRyxFQUFFcEcsUUFBUSxDQUFDMkIsRUFBRTtNQUNoQjJELEdBQUcsRUFBRSxhQUFhLEdBQUdVLEdBQUc7TUFDeEJLLFFBQVEsRUFBRSxJQUFJO01BQ2RuQyxLQUFLLEVBQUU7UUFDTC9KLElBQUksRUFBRXlKLEdBQUcsQ0FBQ3pKLElBQUk7UUFDZDRFLElBQUksRUFBRTZFLEdBQUcsQ0FBQy9FLFVBQVU7UUFDcEI4QyxFQUFFLEVBQUUzQixRQUFRLENBQUMyQixFQUFFO1FBQ2ZDLElBQUksRUFBRTVCLFFBQVEsQ0FBQzRCLElBQUk7UUFDbkJDLE1BQU0sRUFBRTdCLFFBQVEsQ0FBQzZCLE1BQU07UUFDdkIsYUFBYSxFQUFFK0IsR0FBRyxDQUFDL0Y7TUFDckI7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDLENBQUMsQ0FDSCxFQUNELENBQ0YsQ0FBQyxDQUVMLENBQUMsRUFDRCtGLEdBQUcsQ0FBQ2dCLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWGhCLEdBQUcsQ0FBQ3dCLEVBQUUsQ0FDSixpQkFBaUIsRUFDakIsWUFBWTtJQUNWLE9BQU8sQ0FDTHhCLEdBQUcsQ0FBQzBDLFdBQVcsR0FDWHpDLEVBQUUsQ0FDQSxLQUFLLEVBQ0w7TUFBRUksV0FBVyxFQUFFO0lBQXdDLENBQUMsRUFDeEQsQ0FDRUosRUFBRSxDQUFDLFNBQVMsRUFBRTtNQUNaSyxLQUFLLEVBQUU7UUFDTC9KLElBQUksRUFBRXlKLEdBQUcsQ0FBQ3pKLElBQUk7UUFDZGdCLEtBQUssRUFBRXlJLEdBQUcsQ0FBQ3pJLEtBQUs7UUFDaEJFLEtBQUssRUFBRXVJLEdBQUcsQ0FBQ25KLElBQUksQ0FBQ3dELFlBQVk7UUFDNUIsWUFBWSxFQUFFMkYsR0FBRyxDQUFDNUUsU0FBUztRQUMzQixpQkFBaUIsRUFBRTRFLEdBQUcsQ0FBQ3BCLGFBQWE7UUFDcEMsYUFBYSxFQUFFb0IsR0FBRyxDQUFDL0YsVUFBVTtRQUM3QixZQUFZLEVBQUUrRixHQUFHLENBQUNsRixTQUFTO1FBQzNCLGdCQUFnQixFQUFFa0YsR0FBRyxDQUFDcEU7TUFDeEI7SUFDRixDQUFDLENBQUMsQ0FDSCxFQUNELENBQ0YsQ0FBQyxHQUNEb0UsR0FBRyxDQUFDbUIsRUFBRSxDQUFDLENBQUMsQ0FDYjtFQUNILENBQUMsRUFDRDtJQUNFNUssSUFBSSxFQUFFeUosR0FBRyxDQUFDekosSUFBSTtJQUNkZ0IsS0FBSyxFQUFFeUksR0FBRyxDQUFDekksS0FBSztJQUNoQkUsS0FBSyxFQUFFdUksR0FBRyxDQUFDbkosSUFBSSxDQUFDd0QsWUFBWTtJQUM1QmUsU0FBUyxFQUFFNEUsR0FBRyxDQUFDNUUsU0FBUztJQUN4QndELGFBQWEsRUFBRW9CLEdBQUcsQ0FBQ3BCLGFBQWE7SUFDaEMzRSxVQUFVLEVBQUUrRixHQUFHLENBQUMvRixVQUFVO0lBQzFCYSxTQUFTLEVBQUVrRixHQUFHLENBQUNsRixTQUFTO0lBQ3hCYyxZQUFZLEVBQUVvRSxHQUFHLENBQUNwRTtFQUNwQixDQUNGLENBQUMsQ0FDRixFQUNELENBQ0YsQ0FBQztBQUNILENBQUM7QUFDRCxJQUFJd0YsZUFBZSxHQUFHLEVBQUU7QUFDeEJyQixNQUFNLENBQUNzQixhQUFhLEdBQUcsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSjNCLElBQUl0QixNQUFNLEdBQUcsU0FBU0EsTUFBTUEsQ0FBQSxFQUFHO0VBQzdCLElBQUlDLEdBQUcsR0FBRyxJQUFJO0lBQ1pDLEVBQUUsR0FBR0QsR0FBRyxDQUFDRSxLQUFLLENBQUNELEVBQUU7RUFDbkIsT0FBT0EsRUFBRSxDQUNQLEtBQUssRUFDTDtJQUFFSSxXQUFXLEVBQUUsb0JBQW9CO0lBQUVDLEtBQUssRUFBRTtNQUFFMkIsSUFBSSxFQUFFO0lBQVU7RUFBRSxDQUFDLEVBQ2pFakMsR0FBRyxDQUFDbUMsRUFBRSxDQUFDbkMsR0FBRyxDQUFDbEgsVUFBVSxFQUFFLFVBQVVzRCxRQUFRLEVBQUU7SUFDekMsT0FBTzZELEVBQUUsQ0FDUCxRQUFRLEVBQ1I7TUFDRXVDLEdBQUcsRUFBRXBHLFFBQVEsQ0FBQzJCLEVBQUU7TUFDaEI2QyxLQUFLLEVBQUU7UUFDTCxtQkFBbUIsRUFBRSxJQUFJO1FBQ3pCLDRCQUE0QixFQUFFeEUsUUFBUSxDQUFDMkIsRUFBRSxJQUFJaUMsR0FBRyxDQUFDcEMsY0FBYyxDQUFDRztNQUNsRSxDQUFDO01BQ0QrQyxLQUFLLEVBQUU7UUFDTHJELEtBQUssRUFBRXJCLFFBQVEsQ0FBQzJCLEVBQUUsSUFBSWlDLEdBQUcsQ0FBQ3BDLGNBQWMsQ0FBQ0csRUFBRSxHQUFHaUMsR0FBRyxDQUFDdkMsS0FBSyxHQUFHO01BQzVELENBQUM7TUFDRDZDLEtBQUssRUFBRTtRQUNMMkIsSUFBSSxFQUFFLEtBQUs7UUFDWHpMLElBQUksRUFBRSxRQUFRO1FBQ2QsWUFBWSxFQUFFNEYsUUFBUSxDQUFDNEIsSUFBSTtRQUMzQixlQUFlLEVBQUU1QixRQUFRLENBQUMyQixFQUFFLElBQUlpQyxHQUFHLENBQUNwQyxjQUFjLENBQUNHLEVBQUU7UUFDckQsWUFBWSxFQUFFaUMsR0FBRyxDQUFDN0UsSUFBSSxDQUFDckMsVUFBVSxDQUFDc0QsUUFBUSxDQUFDMkIsRUFBRTtNQUMvQyxDQUFDO01BQ0R5QyxFQUFFLEVBQUU7UUFDRkcsS0FBSyxFQUFFLFNBQVBBLEtBQUtBLENBQVluRSxNQUFNLEVBQUU7VUFDdkIsT0FBT3dELEdBQUcsQ0FBQ2xJLEtBQUssQ0FBQyxPQUFPLEVBQUVzRSxRQUFRLENBQUM7UUFDckM7TUFDRjtJQUNGLENBQUMsRUFDRCxDQUNFNkQsRUFBRSxDQUFDLEtBQUssRUFBRTtNQUNSSyxLQUFLLEVBQUU7UUFBRSxhQUFhLEVBQUU7TUFBTyxDQUFDO01BQ2hDcUMsUUFBUSxFQUFFO1FBQUVDLFNBQVMsRUFBRTVDLEdBQUcsQ0FBQ2lCLEVBQUUsQ0FBQ2pCLEdBQUcsQ0FBQ3hDLElBQUksQ0FBQ3BCLFFBQVEsQ0FBQzJCLEVBQUUsQ0FBQztNQUFFO0lBQ3ZELENBQUMsQ0FBQyxFQUNGaUMsR0FBRyxDQUFDZ0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYZixFQUFFLENBQUMsTUFBTSxFQUFFO01BQ1RJLFdBQVcsRUFBRSx1QkFBdUI7TUFDcENTLEtBQUssRUFBRTtRQUFFK0IsZUFBZSxFQUFFN0MsR0FBRyxDQUFDdkM7TUFBTSxDQUFDO01BQ3JDNkMsS0FBSyxFQUFFO1FBQUUsYUFBYSxFQUFFO01BQU87SUFDakMsQ0FBQyxDQUFDLENBRU4sQ0FBQztFQUNILENBQUMsQ0FBQyxFQUNGLENBQ0YsQ0FBQztBQUNILENBQUM7QUFDRCxJQUFJYyxlQUFlLEdBQUcsRUFBRTtBQUN4QnJCLE1BQU0sQ0FBQ3NCLGFBQWEsR0FBRyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEM0IsSUFBSXRCLE1BQU0sR0FBRyxTQUFTQSxNQUFNQSxDQUFBLEVBQUc7RUFDN0IsSUFBSUMsR0FBRyxHQUFHLElBQUk7SUFDWkMsRUFBRSxHQUFHRCxHQUFHLENBQUNFLEtBQUssQ0FBQ0QsRUFBRTtFQUNuQixPQUFPRCxHQUFHLENBQUM3QixTQUFTLEtBQUs2QixHQUFHLENBQUM1QixRQUFRLElBQUk0QixHQUFHLENBQUMzQixVQUFVLENBQUMsR0FDcEQ0QixFQUFFLENBQ0EsU0FBUyxFQUNUO0lBQ0VXLEtBQUssRUFBRTtNQUNMLHFCQUFxQixFQUFFLElBQUk7TUFDM0IsdUJBQXVCLEVBQUUsQ0FBQ1osR0FBRyxDQUFDM0I7SUFDaEMsQ0FBQztJQUNEaUMsS0FBSyxFQUFFO01BQUUsWUFBWSxFQUFFTixHQUFHLENBQUM3RSxJQUFJLENBQUNyQyxVQUFVLENBQUNrSCxHQUFHLENBQUNqQyxFQUFFO0lBQUU7RUFDckQsQ0FBQyxFQUNELENBQ0VrQyxFQUFFLENBQUMsS0FBSyxFQUFFO0lBQUVJLFdBQVcsRUFBRTtFQUE0QixDQUFDLEVBQUUsQ0FDdERKLEVBQUUsQ0FBQyxJQUFJLEVBQUU7SUFBRUksV0FBVyxFQUFFO0VBQTRCLENBQUMsRUFBRSxDQUNyREwsR0FBRyxDQUFDZ0IsRUFBRSxDQUFDaEIsR0FBRyxDQUFDaUIsRUFBRSxDQUFDakIsR0FBRyxDQUFDN0UsSUFBSSxDQUFDckMsVUFBVSxDQUFDa0gsR0FBRyxDQUFDakMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUM1QyxDQUFDLENBQ0gsQ0FBQyxFQUNGaUMsR0FBRyxDQUFDZ0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYaEIsR0FBRyxDQUFDbUMsRUFBRSxDQUFDbkMsR0FBRyxDQUFDekIsWUFBWSxFQUFFLFVBQUF1RSxJQUFBLEVBQXNDO0lBQUEsSUFBMUJoTSxXQUFXLEdBQUFnTSxJQUFBLENBQVhoTSxXQUFXO01BQUU0SCxTQUFTLEdBQUFvRSxJQUFBLENBQVRwRSxTQUFTO0lBQ3pELE9BQU8sQ0FDTEEsU0FBUyxDQUFDeUIsU0FBUyxHQUNmRixFQUFFLENBQ0EsUUFBUSxFQUNSO01BQ0V1QyxHQUFHLEVBQUUxTCxXQUFXLENBQUNpSCxFQUFFO01BQ25Cc0MsV0FBVyxFQUFFLGtCQUFrQjtNQUMvQk8sS0FBSyxFQUFFWixHQUFHLENBQUM5QixXQUFXLENBQUNwSCxXQUFXLENBQUM7TUFDbkN3SixLQUFLLEVBQUU7UUFDTCxZQUFZLEVBQUU1QixTQUFTLENBQUM2QixTQUFTO1FBQ2pDMEIsSUFBSSxFQUFFLFFBQVE7UUFDZCxlQUFlLEVBQUUsT0FBTztRQUN4QixlQUFlLEVBQUUsR0FBRztRQUNwQixjQUFjLEVBQUUsTUFBTTtRQUN0QnpMLElBQUksRUFBRSxRQUFRO1FBQ2QsWUFBWSxFQUFFTSxXQUFXLENBQUNVLFVBQVU7UUFDcENELEtBQUssRUFBRW1ILFNBQVMsQ0FBQ25IO01BQ25CLENBQUM7TUFDRGlKLEVBQUUsRUFBRTtRQUNGQyxVQUFVLEVBQUUsU0FBWkEsVUFBVUEsQ0FBWWpFLE1BQU0sRUFBRTtVQUM1QndELEdBQUcsQ0FBQy9GLFVBQVUsQ0FBQ08sT0FBTyxDQUFDa0UsU0FBUyxDQUFDcUUsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBQ0RyQyxVQUFVLEVBQUUsU0FBWkEsVUFBVUEsQ0FBWWxFLE1BQU0sRUFBRTtVQUM1QndELEdBQUcsQ0FBQy9GLFVBQVUsQ0FBQ1UsT0FBTyxDQUFDK0QsU0FBUyxDQUFDcUUsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBQ0RwQyxLQUFLLEVBQUUsU0FBUEEsS0FBS0EsQ0FBWW5FLE1BQU0sRUFBRTtVQUN2QndELEdBQUcsQ0FBQy9GLFVBQVUsQ0FBQ3BDLE9BQU8sQ0FBQzZHLFNBQVMsQ0FBQ3FFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDOUM7TUFDRjtJQUNGLENBQUMsRUFDRCxDQUNFOUMsRUFBRSxDQUNBLE1BQU0sRUFDTjtNQUNFVyxLQUFLLEVBQUVsQyxTQUFTLENBQUNtQyxRQUFRO01BQ3pCQyxLQUFLLEVBQUVwQyxTQUFTLENBQUNxQztJQUNuQixDQUFDLEVBQ0QsQ0FBQ2YsR0FBRyxDQUFDZ0IsRUFBRSxDQUFDaEIsR0FBRyxDQUFDaUIsRUFBRSxDQUFDdkMsU0FBUyxDQUFDd0MsT0FBTyxDQUFDLENBQUMsQ0FDcEMsQ0FBQyxDQUVMLENBQUMsR0FDRGxCLEdBQUcsQ0FBQ21CLEVBQUUsQ0FBQyxDQUFDLENBQ2I7RUFDSCxDQUFDLENBQUMsRUFDRm5CLEdBQUcsQ0FBQ2dCLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWCxDQUFDaEIsR0FBRyxDQUFDM0IsVUFBVSxHQUNYNEIsRUFBRSxDQUNBLEtBQUssRUFDTCxDQUNFQSxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQ1ZLLEtBQUssRUFBRTtNQUNML0osSUFBSSxFQUFFeUosR0FBRyxDQUFDekosSUFBSTtNQUNka0IsS0FBSyxFQUFFLGVBQWU7TUFDdEJSLE1BQU0sRUFBRStJLEdBQUcsQ0FBQy9GLFVBQVUsQ0FBQ2hELE1BQU07TUFDN0JGLElBQUksRUFBRWlKLEdBQUcsQ0FBQy9GLFVBQVUsQ0FBQ2xELElBQUk7TUFDekJDLEdBQUcsRUFBRWdKLEdBQUcsQ0FBQy9GLFVBQVUsQ0FBQ2pEO0lBQ3RCO0VBQ0YsQ0FBQyxDQUFDLEVBQ0ZnSixHQUFHLENBQUNnQixFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hmLEVBQUUsQ0FBQyxLQUFLLEVBQUU7SUFBRUksV0FBVyxFQUFFO0VBQThCLENBQUMsRUFBRSxDQUN4REwsR0FBRyxDQUFDZ0IsRUFBRSxDQUFDaEIsR0FBRyxDQUFDaUIsRUFBRSxDQUFDakIsR0FBRyxDQUFDN0UsSUFBSSxDQUFDdEMsUUFBUSxDQUFDLENBQUMsQ0FDbEMsQ0FBQyxDQUNILEVBQ0QsQ0FDRixDQUFDLEdBQ0RtSCxHQUFHLENBQUNtQixFQUFFLENBQUMsQ0FBQyxDQUNiLEVBQ0QsQ0FDRixDQUFDLEdBQ0RuQixHQUFHLENBQUNtQixFQUFFLENBQUMsQ0FBQztBQUNkLENBQUM7QUFDRCxJQUFJQyxlQUFlLEdBQUcsRUFBRTtBQUN4QnJCLE1BQU0sQ0FBQ3NCLGFBQWEsR0FBRyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdGM0IsSUFBSXRCLE1BQU0sR0FBRyxTQUFTQSxNQUFNQSxDQUFBLEVBQUc7RUFDN0IsSUFBSUMsR0FBRyxHQUFHLElBQUk7SUFDWkMsRUFBRSxHQUFHRCxHQUFHLENBQUNFLEtBQUssQ0FBQ0QsRUFBRTtFQUNuQixPQUFPQSxFQUFFLENBQ1AsS0FBSyxFQUNMO0lBQUVJLFdBQVcsRUFBRTtFQUFxQixDQUFDLEVBQ3JDLENBQ0VMLEdBQUcsQ0FBQ3ZJLEtBQUssR0FDTCxDQUNFd0ksRUFBRSxDQUNBLEtBQUssRUFDTDtJQUFFSSxXQUFXLEVBQUU7RUFBMkIsQ0FBQyxFQUMzQyxDQUNFSixFQUFFLENBQUMsT0FBTyxFQUFFO0lBQ1ZLLEtBQUssRUFBRTtNQUNML0osSUFBSSxFQUFFeUosR0FBRyxDQUFDekosSUFBSTtNQUNka0IsS0FBSyxFQUFFdUksR0FBRyxDQUFDdkksS0FBSztNQUNoQlIsTUFBTSxFQUFFK0ksR0FBRyxDQUFDL0YsVUFBVSxDQUFDaEQsTUFBTTtNQUM3QkYsSUFBSSxFQUFFaUosR0FBRyxDQUFDL0YsVUFBVSxDQUFDbEQsSUFBSTtNQUN6QkMsR0FBRyxFQUFFZ0osR0FBRyxDQUFDL0YsVUFBVSxDQUFDakQ7SUFDdEI7RUFDRixDQUFDLENBQUMsQ0FDSCxFQUNELENBQ0YsQ0FBQyxFQUNEZ0osR0FBRyxDQUFDZ0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYZixFQUFFLENBQUMsS0FBSyxFQUFFO0lBQUVJLFdBQVcsRUFBRTtFQUEwQixDQUFDLEVBQUUsQ0FDcERKLEVBQUUsQ0FBQyxLQUFLLEVBQUU7SUFBRUksV0FBVyxFQUFFO0VBQTBCLENBQUMsRUFBRSxDQUNwREwsR0FBRyxDQUFDZ0IsRUFBRSxDQUFDaEIsR0FBRyxDQUFDaUIsRUFBRSxDQUFDakIsR0FBRyxDQUFDdkksS0FBSyxDQUFDdUcsSUFBSSxDQUFDLENBQUMsQ0FDL0IsQ0FBQyxFQUNGZ0MsR0FBRyxDQUFDZ0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYZixFQUFFLENBQ0EsS0FBSyxFQUNMO0lBQUVJLFdBQVcsRUFBRTtFQUFnQyxDQUFDLEVBQ2hETCxHQUFHLENBQUNtQyxFQUFFLENBQUNuQyxHQUFHLENBQUNoQixlQUFlLEVBQUUsVUFBVWdFLFNBQVMsRUFBRTtJQUMvQyxPQUFPL0MsRUFBRSxDQUNQLE1BQU0sRUFDTjtNQUNFdUMsR0FBRyxFQUFFUSxTQUFTO01BQ2QzQyxXQUFXLEVBQUU7SUFDZixDQUFDLEVBQ0QsQ0FBQ0wsR0FBRyxDQUFDZ0IsRUFBRSxDQUFDLEdBQUcsR0FBR2hCLEdBQUcsQ0FBQ2lCLEVBQUUsQ0FBQytCLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUN4QyxDQUFDO0VBQ0gsQ0FBQyxDQUFDLEVBQ0YsQ0FDRixDQUFDLEVBQ0RoRCxHQUFHLENBQUNnQixFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hmLEVBQUUsQ0FDQSxLQUFLLEVBQ0w7SUFBRUksV0FBVyxFQUFFO0VBQStCLENBQUMsRUFDL0NMLEdBQUcsQ0FBQ21DLEVBQUUsQ0FBQ25DLEdBQUcsQ0FBQ2QsY0FBYyxFQUFFLFVBQVUrRCxRQUFRLEVBQUU7SUFDN0MsT0FBT2hELEVBQUUsQ0FDUCxNQUFNLEVBQ047TUFDRXVDLEdBQUcsRUFBRVMsUUFBUTtNQUNiNUMsV0FBVyxFQUFFO0lBQ2YsQ0FBQyxFQUNELENBQUNMLEdBQUcsQ0FBQ2dCLEVBQUUsQ0FBQ2hCLEdBQUcsQ0FBQ2lCLEVBQUUsQ0FBQ2dDLFFBQVEsQ0FBQyxDQUFDLENBQzNCLENBQUM7RUFDSCxDQUFDLENBQUMsRUFDRixDQUNGLENBQUMsQ0FDRixDQUFDLENBQ0gsR0FDRCxDQUNFaEQsRUFBRSxDQUNBLEtBQUssRUFDTDtJQUFFSSxXQUFXLEVBQUU7RUFBMkIsQ0FBQyxFQUMzQyxDQUNFSixFQUFFLENBQUMsT0FBTyxFQUFFO0lBQ1ZLLEtBQUssRUFBRTtNQUNML0osSUFBSSxFQUFFeUosR0FBRyxDQUFDekosSUFBSTtNQUNka0IsS0FBSyxFQUFFdUksR0FBRyxDQUFDNUUsU0FBUztNQUNwQm5FLE1BQU0sRUFBRStJLEdBQUcsQ0FBQy9GLFVBQVUsQ0FBQ2hELE1BQU07TUFDN0JGLElBQUksRUFBRWlKLEdBQUcsQ0FBQy9GLFVBQVUsQ0FBQ2xELElBQUk7TUFDekJDLEdBQUcsRUFBRWdKLEdBQUcsQ0FBQy9GLFVBQVUsQ0FBQ2pEO0lBQ3RCO0VBQ0YsQ0FBQyxDQUFDLENBQ0gsRUFDRCxDQUNGLENBQUMsRUFDRGdKLEdBQUcsQ0FBQ2dCLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDWGYsRUFBRSxDQUFDLEtBQUssRUFBRTtJQUFFSSxXQUFXLEVBQUU7RUFBMEIsQ0FBQyxFQUFFLENBQ3BESixFQUFFLENBQUMsTUFBTSxFQUFFO0lBQUVJLFdBQVcsRUFBRTtFQUF5QixDQUFDLEVBQUUsQ0FDcERMLEdBQUcsQ0FBQ2dCLEVBQUUsQ0FBQ2hCLEdBQUcsQ0FBQ2lCLEVBQUUsQ0FBQ2pCLEdBQUcsQ0FBQ3pJLEtBQUssQ0FBQyxDQUFDLENBQzFCLENBQUMsQ0FDSCxDQUFDLEVBQ0Z5SSxHQUFHLENBQUNnQixFQUFFLENBQUMsR0FBRyxDQUFDLEVBQ1hoQixHQUFHLENBQUNwQixhQUFhLEdBQ2JxQixFQUFFLENBQ0EsS0FBSyxFQUNMO0lBQUVJLFdBQVcsRUFBRTtFQUEyQixDQUFDLEVBQzNDLENBQ0VKLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDVkssS0FBSyxFQUFFO01BQUV2SixJQUFJLEVBQUVpSixHQUFHLENBQUNsRixTQUFTLENBQUMvRDtJQUFLLENBQUM7SUFDbkN5SixFQUFFLEVBQUU7TUFDRjBDLE1BQU0sRUFBRSxTQUFSQSxNQUFNQSxDQUFZMUcsTUFBTSxFQUFFO1FBQ3hCLE9BQU93RCxHQUFHLENBQUNwRSxZQUFZLENBQUNZLE1BQU0sQ0FBQztNQUNqQztJQUNGO0VBQ0YsQ0FBQyxDQUFDLENBQ0gsRUFDRCxDQUNGLENBQUMsR0FDRHdELEdBQUcsQ0FBQ21CLEVBQUUsQ0FBQyxDQUFDLENBQ2IsQ0FDTixFQUNELENBQ0YsQ0FBQztBQUNILENBQUM7QUFDRCxJQUFJQyxlQUFlLEdBQUcsRUFBRTtBQUN4QnJCLE1BQU0sQ0FBQ3NCLGFBQWEsR0FBRyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9HM0IsSUFBSXRCLE1BQU0sR0FBRyxTQUFTQSxNQUFNQSxDQUFBLEVBQUc7RUFDN0IsSUFBSUMsR0FBRyxHQUFHLElBQUk7SUFDWkMsRUFBRSxHQUFHRCxHQUFHLENBQUNFLEtBQUssQ0FBQ0QsRUFBRTtFQUNuQixPQUFPQSxFQUFFLENBQUMsS0FBSyxFQUFFO0lBQUVJLFdBQVcsRUFBRTtFQUFvQixDQUFDLEVBQUUsQ0FDckRKLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDVm9DLFVBQVUsRUFBRSxDQUNWO01BQ0VyRSxJQUFJLEVBQUUsT0FBTztNQUNic0UsT0FBTyxFQUFFLFNBQVM7TUFDbEJoRyxLQUFLLEVBQUUwRCxHQUFHLENBQUMxRCxLQUFLO01BQ2hCaUcsVUFBVSxFQUFFO0lBQ2QsQ0FBQyxDQUNGO0lBQ0RqQyxLQUFLLEVBQUU7TUFDTDlKLElBQUksRUFBRSxNQUFNO01BQ1oyTSxXQUFXLEVBQUVuRCxHQUFHLENBQUM3RSxJQUFJLENBQUN2QyxNQUFNO01BQzVCcUosSUFBSSxFQUFFLFNBQVM7TUFDZixtQkFBbUIsRUFBRSxNQUFNO01BQzNCLFdBQVcsRUFBRSxpQkFBaUI7TUFDOUIsWUFBWSxFQUFFLHFCQUFxQjtNQUNuQyxrQkFBa0IsRUFBRTtJQUN0QixDQUFDO0lBQ0RVLFFBQVEsRUFBRTtNQUFFckcsS0FBSyxFQUFFMEQsR0FBRyxDQUFDMUQ7SUFBTSxDQUFDO0lBQzlCa0UsRUFBRSxFQUFFO01BQ0Y0QyxPQUFPLEVBQUUsQ0FDUCxVQUFVNUcsTUFBTSxFQUFFO1FBQ2hCLElBQ0UsQ0FBQ0EsTUFBTSxDQUFDaEcsSUFBSSxDQUFDNk0sT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUMzQnJELEdBQUcsQ0FBQ3NELEVBQUUsQ0FBQzlHLE1BQU0sQ0FBQytHLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFL0csTUFBTSxDQUFDZ0csR0FBRyxFQUFFLENBQzdDLE1BQU0sRUFDTixXQUFXLENBQ1osQ0FBQyxFQUVGLE9BQU8sSUFBSTtRQUNiLElBQUksUUFBUSxJQUFJaEcsTUFBTSxJQUFJQSxNQUFNLENBQUNnSCxNQUFNLEtBQUssQ0FBQyxFQUFFLE9BQU8sSUFBSTtRQUMxRCxPQUFRLFVBQUNoSCxNQUFNO1VBQUEsT0FBS3dELEdBQUcsQ0FBQ2xJLEtBQUssQ0FBQyxXQUFXLEVBQUUwRSxNQUFNLENBQUM7UUFBQSxFQUFFaUgsS0FBSyxDQUN2RCxJQUFJLEVBQ0pDLFNBQ0YsQ0FBQztNQUNILENBQUMsRUFDRCxVQUFVbEgsTUFBTSxFQUFFO1FBQ2hCLElBQ0UsQ0FBQ0EsTUFBTSxDQUFDaEcsSUFBSSxDQUFDNk0sT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUMzQnJELEdBQUcsQ0FBQ3NELEVBQUUsQ0FBQzlHLE1BQU0sQ0FBQytHLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFL0csTUFBTSxDQUFDZ0csR0FBRyxFQUFFLENBQzlDLE9BQU8sRUFDUCxZQUFZLENBQ2IsQ0FBQyxFQUVGLE9BQU8sSUFBSTtRQUNiLElBQUksUUFBUSxJQUFJaEcsTUFBTSxJQUFJQSxNQUFNLENBQUNnSCxNQUFNLEtBQUssQ0FBQyxFQUFFLE9BQU8sSUFBSTtRQUMxRCxPQUFRO1VBQUEsT0FBTXhELEdBQUcsQ0FBQ2xJLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFBQSxFQUFFMkwsS0FBSyxDQUFDLElBQUksRUFBRUMsU0FBUyxDQUFDO01BQy9ELENBQUMsRUFDRCxVQUFVbEgsTUFBTSxFQUFFO1FBQ2hCLElBQ0UsQ0FBQ0EsTUFBTSxDQUFDaEcsSUFBSSxDQUFDNk0sT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUMzQnJELEdBQUcsQ0FBQ3NELEVBQUUsQ0FBQzlHLE1BQU0sQ0FBQytHLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFL0csTUFBTSxDQUFDZ0csR0FBRyxFQUFFLENBQzdDLE1BQU0sRUFDTixXQUFXLENBQ1osQ0FBQyxFQUVGLE9BQU8sSUFBSTtRQUNiLE9BQVE7VUFBQSxPQUFNeEMsR0FBRyxDQUFDbEksS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUFBLEVBQUUyTCxLQUFLLENBQUMsSUFBSSxFQUFFQyxTQUFTLENBQUM7TUFDOUQsQ0FBQyxFQUNELFVBQVVsSCxNQUFNLEVBQUU7UUFDaEIsSUFDRSxDQUFDQSxNQUFNLENBQUNoRyxJQUFJLENBQUM2TSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQzNCckQsR0FBRyxDQUFDc0QsRUFBRSxDQUFDOUcsTUFBTSxDQUFDK0csT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUvRyxNQUFNLENBQUNnRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsRUFFL0QsT0FBTyxJQUFJO1FBQ2IsT0FBUSxVQUFDaEcsTUFBTTtVQUFBLE9BQUt3RCxHQUFHLENBQUNsSSxLQUFLLENBQUMsU0FBUyxFQUFFMEUsTUFBTSxDQUFDO1FBQUEsRUFBRWlILEtBQUssQ0FDckQsSUFBSSxFQUNKQyxTQUNGLENBQUM7TUFDSCxDQUFDLEVBQ0QsVUFBVWxILE1BQU0sRUFBRTtRQUNoQixJQUNFLENBQUNBLE1BQU0sQ0FBQ2hHLElBQUksQ0FBQzZNLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFDM0JyRCxHQUFHLENBQUNzRCxFQUFFLENBQUM5RyxNQUFNLENBQUMrRyxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRS9HLE1BQU0sQ0FBQ2dHLEdBQUcsRUFBRSxPQUFPLENBQUMsRUFFeEQsT0FBTyxJQUFJO1FBQ2IsT0FBUTtVQUFBLE9BQU14QyxHQUFHLENBQUNsSSxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQUEsRUFBRTJMLEtBQUssQ0FBQyxJQUFJLEVBQUVDLFNBQVMsQ0FBQztNQUMxRCxDQUFDLENBQ0Y7TUFDREMsS0FBSyxFQUFFLFNBQVBBLEtBQUtBLENBQVluSCxNQUFNLEVBQUU7UUFDdkIsSUFBSUEsTUFBTSxDQUFDb0gsTUFBTSxDQUFDQyxTQUFTLEVBQUU7UUFDN0I3RCxHQUFHLENBQUMxRCxLQUFLLEdBQUdFLE1BQU0sQ0FBQ29ILE1BQU0sQ0FBQ3RILEtBQUs7TUFDakM7SUFDRjtFQUNGLENBQUMsQ0FBQyxFQUNGMEQsR0FBRyxDQUFDZ0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUNYZixFQUFFLENBQ0EsTUFBTSxFQUNOO0lBQ0VJLFdBQVcsRUFBRSxRQUFRO0lBQ3JCQyxLQUFLLEVBQUU7TUFBRXZDLEVBQUUsRUFBRTtJQUFrQztFQUNqRCxDQUFDLEVBQ0QsQ0FDRWlDLEdBQUcsQ0FBQ2dCLEVBQUUsQ0FDSix3RkFDRixDQUFDLENBRUwsQ0FBQyxDQUNGLENBQUM7QUFDSixDQUFDO0FBQ0QsSUFBSUksZUFBZSxHQUFHLEVBQUU7QUFDeEJyQixNQUFNLENBQUNzQixhQUFhLEdBQUcsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RzNCLElBQUl0QixNQUFNLEdBQUcsU0FBU0EsTUFBTUEsQ0FBQSxFQUFHO0VBQzdCLElBQUlDLEdBQUcsR0FBRyxJQUFJO0lBQ1pDLEVBQUUsR0FBR0QsR0FBRyxDQUFDRSxLQUFLLENBQUNELEVBQUU7RUFDbkIsT0FBT0EsRUFBRSxDQUNQLEtBQUssRUFDTDtJQUNFVyxLQUFLLEVBQUU7TUFDTCwwQkFBMEIsRUFBRSxJQUFJO01BQ2hDLGlDQUFpQyxFQUFFWixHQUFHLENBQUNIO0lBQ3pDO0VBQ0YsQ0FBQyxFQUNERyxHQUFHLENBQUNtQyxFQUFFLENBQUMsQ0FBQyxFQUFFLFVBQVVyQyxRQUFRLEVBQUU7SUFDNUIsT0FBT0csRUFBRSxDQUNQLE1BQU0sRUFDTjtNQUNFdUMsR0FBRyxFQUFFMUMsUUFBUTtNQUNiYyxLQUFLLEVBQUU7UUFDTCx3QkFBd0IsRUFBRSxJQUFJO1FBQzlCLGlDQUFpQyxFQUFFWixHQUFHLENBQUNqSixJQUFJLElBQUkrSTtNQUNqRDtJQUNGLENBQUMsRUFDRCxDQUNFRyxFQUFFLENBQUMsTUFBTSxFQUFFO01BQ1RXLEtBQUssRUFBRSx1Q0FBdUMsR0FBR2QsUUFBUTtNQUN6RFUsRUFBRSxFQUFFO1FBQ0ZHLEtBQUssRUFBRSxTQUFQQSxLQUFLQSxDQUFZbkUsTUFBTSxFQUFFO1VBQ3ZCLE9BQU93RCxHQUFHLENBQUNuSSxPQUFPLENBQUNpSSxRQUFRLENBQUM7UUFDOUI7TUFDRjtJQUNGLENBQUMsQ0FBQyxDQUVOLENBQUM7RUFDSCxDQUFDLENBQUMsRUFDRixDQUNGLENBQUM7QUFDSCxDQUFDO0FBQ0QsSUFBSXNCLGVBQWUsR0FBRyxFQUFFO0FBQ3hCckIsTUFBTSxDQUFDc0IsYUFBYSxHQUFHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQzNCOztBQUVBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZtRjtBQUMzQjtBQUNMOzs7QUFHbkQ7QUFDQSxDQUFnRztBQUNoRyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsNEVBQU07QUFDUixFQUFFLHFGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFO0FBQUEsWUFpQmY7QUFDRDtBQUNBLCtEQUFlLGlCOzs7Ozs7Ozs7Ozs7O0FDdENzTCxDQUFDLCtEQUFlLDZMQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVBckk7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ0EsQ0FBZ0c7QUFDaEcsZ0JBQWdCLHVHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLDZFQUFNO0FBQ1IsRUFBRSxzRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRTtBQUFBLFlBaUJmO0FBQ0Q7QUFDQSwrREFBZSxpQjs7Ozs7Ozs7Ozs7OztBQ3RDdUwsQ0FBQywrREFBZSw4TEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFQXJJO0FBQzNCO0FBQ0w7OztBQUdyRDtBQUNBLENBQWdHO0FBQ2hHLGdCQUFnQix1R0FBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSw4RUFBTTtBQUNSLEVBQUUsdUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUU7QUFBQSxZQWlCZjtBQUNEO0FBQ0EsK0RBQWUsaUI7Ozs7Ozs7Ozs7Ozs7QUN0Q3dMLENBQUMsK0RBQWUsK0xBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRUFySTtBQUMzQjtBQUNMOzs7QUFHdEQ7QUFDQSxDQUFnRztBQUNoRyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsK0VBQU07QUFDUixFQUFFLHdGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFO0FBQUEsWUFpQmY7QUFDRDtBQUNBLCtEQUFlLGlCOzs7Ozs7Ozs7Ozs7O0FDdEN5TCxDQUFDLCtEQUFlLGdNQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFQTFLO0FBQ0U7QUFDRjtBQUNGO0FBQ0Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0x1QztBQUMzQjtBQUNMOzs7QUFHckQ7QUFDQSxDQUFnRztBQUNoRyxnQkFBZ0IsdUdBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsOEVBQU07QUFDUixFQUFFLHVGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFO0FBQUEsWUFpQmY7QUFDRDtBQUNBLCtEQUFlLGlCOzs7Ozs7Ozs7Ozs7O0FDdEN3TCxDQUFDLCtEQUFlLCtMQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUVBdkk7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ0EsQ0FBZ0c7QUFDaEcsZ0JBQWdCLHVHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLDZFQUFNO0FBQ1IsRUFBRSxzRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRTtBQUFBLFlBaUJmO0FBQ0Q7QUFDQSwrREFBZSxpQjs7Ozs7Ozs7Ozs7OztBQ3RDdUwsQ0FBQywrREFBZSw4TEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFQXZJO0FBQzNCO0FBQ0w7OztBQUduRDtBQUNBLENBQWdHO0FBQ2hHLGdCQUFnQix1R0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSw0RUFBTTtBQUNSLEVBQUUscUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUU7QUFBQSxZQWlCZjtBQUNEO0FBQ0EsK0RBQWUsaUI7Ozs7Ozs7Ozs7Ozs7QUN0Q3NMLENBQUMsK0RBQWUsNkxBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRUF6TixJQUFNMEMsT0FBTyxHQUFHckcsTUFBTTtBQUV0QiwrREFBZXFHLE9BQU8sQ0FBQ0MsYUFBYSxJQUNsQyxTQUFTQyxtQkFBbUJBLENBQUEsRUFBRztFQUM3QixJQUFJQyxRQUFRLEdBQUcsTUFBTTtFQUNyQixJQUFJQyxTQUFTLEdBQUcsRUFBRTtFQUNsQixJQUFJQyxhQUFhO0VBQ2pCLElBQUlDLFlBQVk7RUFDaEIsSUFBSWpILEtBQUssR0FBRyxDQUFDLENBQUM7RUFDZCxJQUFJa0IsTUFBTSxHQUFHb0YsU0FBUyxDQUFDcEYsTUFBTTtFQUM3QixJQUFJLENBQUNBLE1BQU0sRUFBRTtJQUNYLE9BQU8sRUFBRTtFQUNYO0VBQ0EsSUFBSWdHLE1BQU0sR0FBRyxFQUFFO0VBQ2YsT0FBTyxFQUFFbEgsS0FBSyxHQUFHa0IsTUFBTSxFQUFFO0lBQ3ZCLElBQUlpRyxTQUFTLEdBQUczRSxNQUFNLENBQUM4RCxTQUFTLENBQUN0RyxLQUFLLENBQUMsQ0FBQztJQUN4QyxJQUNFLENBQUNvSCxRQUFRLENBQUNELFNBQVMsQ0FBQztJQUFJO0lBQ3hCQSxTQUFTLEdBQUcsQ0FBQztJQUFJO0lBQ2pCQSxTQUFTLEdBQUcsUUFBUTtJQUFJO0lBQ3hCRSxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsU0FBUyxDQUFDLElBQUlBLFNBQVMsQ0FBQztJQUFBLEVBQ25DO01BQ0EsTUFBTUksVUFBVSxDQUFDLHNCQUFzQixHQUFHSixTQUFTLENBQUM7SUFDdEQ7SUFDQSxJQUFJQSxTQUFTLElBQUksTUFBTSxFQUFFO01BQ3ZCO01BQ0FKLFNBQVMsQ0FBQ1MsSUFBSSxDQUFDTCxTQUFTLENBQUM7SUFDM0IsQ0FBQyxNQUFNO01BQ0w7TUFDQTtNQUNBQSxTQUFTLElBQUksT0FBTztNQUNwQkgsYUFBYSxHQUFHLENBQUNHLFNBQVMsSUFBSSxFQUFFLElBQUksTUFBTTtNQUMxQ0YsWUFBWSxHQUFJRSxTQUFTLEdBQUcsS0FBSyxHQUFJLE1BQU07TUFDM0NKLFNBQVMsQ0FBQ1MsSUFBSSxDQUFDUixhQUFhLEVBQUVDLFlBQVksQ0FBQztJQUM3QztJQUNBLElBQUlqSCxLQUFLLEdBQUcsQ0FBQyxLQUFLa0IsTUFBTSxJQUFJNkYsU0FBUyxDQUFDN0YsTUFBTSxHQUFHNEYsUUFBUSxFQUFFO01BQ3ZESSxNQUFNLElBQUk1RyxNQUFNLENBQUNtSCxZQUFZLENBQUNwQixLQUFLLENBQUMsSUFBSSxFQUFFVSxTQUFTLENBQUM7TUFDcERBLFNBQVMsQ0FBQzdGLE1BQU0sR0FBRyxDQUFDO0lBQ3RCO0VBQ0Y7RUFDQSxPQUFPZ0csTUFBTTtBQUNmLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDekNILElBQU1RLElBQUksR0FBRztFQUNYMUwsUUFBUSwwMEJBQWcwQjtFQUV4MEJLLE1BQU0sOGpCQUE0Z0I7RUFFbGhCRCxLQUFLLGtSQUF3UTtFQUU3UUwsS0FBSyxtOEJBQXk3QjtFQUU5N0JELE1BQU0seXZEQUE2dUQ7RUFFbnZESSxPQUFPLDRoQ0FBZ2hDO0VBRXZoQ04sT0FBTyxzYkFBMGE7RUFFamJDLE1BQU0seXlGQUF5eEY7RUFFL3hGSSxNQUFNLHVsQ0FBMmtDO0VBRWpsQ04sTUFBTSxvVEFBd1M7RUFFOVNRLE9BQU87QUFDVCxDQUFDO0FBRUQsK0RBQWV1TCxJQUFJLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCbkIsSUFBTUMsT0FBTyxHQUFHO0VBQ2QvRyxJQUFJLEVBQUUsR0FBRztFQUNUZ0gsT0FBTyxFQUFFLEdBQUc7RUFDWkMsYUFBYSxFQUFFLEdBQUc7RUFDbEJDLGFBQWEsRUFBRSxHQUFHO0VBQ2xCQyxjQUFjLEVBQUUsR0FBRztFQUNuQkMsZUFBZSxFQUFFLEdBQUc7RUFDcEJDLGdCQUFnQixFQUFFLEdBQUc7RUFDckJDLFFBQVEsRUFBRSxHQUFHO0VBQ2JDLEtBQUssRUFBRSxHQUFHO0VBQ1ZwRyxTQUFTLEVBQUUsR0FBRztFQUNkcUcsSUFBSSxFQUFFLEdBQUc7RUFDVHZHLFdBQVcsRUFBRSxHQUFHO0VBQ2hCd0csUUFBUSxFQUFFO0FBQ1osQ0FBQztBQUVELElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJak8sS0FBSyxFQUFLO0VBQzdCLElBQU1tQixNQUFNLEdBQUcsRUFBRTtFQUVqQixJQUFJK00sV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUlDLE9BQU8sRUFBRUMsS0FBSyxFQUFLO0lBQ3BDLElBQUksQ0FBQ0QsT0FBTyxFQUFFO01BQ1o7SUFDRjtJQUVBO0lBQUMsQ0FBQ2pJLEtBQUssQ0FBQ21JLE9BQU8sQ0FBQ0YsT0FBTyxDQUFDLEdBQUdBLE9BQU8sR0FBRyxDQUFDQSxPQUFPLENBQUMsRUFBRUcsT0FBTyxDQUFDLFVBQUNDLE1BQU0sRUFBSztNQUNsRTtNQUFDLENBQUNILEtBQUssR0FBR0csTUFBTSxDQUFDSCxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEVBQUVELE9BQU8sQ0FBQyxVQUFDRSxDQUFDLEVBQUs7UUFDN0RBLENBQUMsR0FBR0EsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztRQUVuQixJQUFJdE4sTUFBTSxDQUFDeUssT0FBTyxDQUFDNEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7VUFDM0JyTixNQUFNLENBQUNnTSxJQUFJLENBQUNxQixDQUFDLENBQUM7UUFDaEI7TUFDRixDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7RUFDSixDQUFDO0VBRUROLFdBQVcsQ0FBQ2xPLEtBQUssQ0FBQ3dILFdBQVcsRUFBRSxJQUFJLENBQUM7RUFDcEMwRyxXQUFXLENBQUNsTyxLQUFLLENBQUN1RyxJQUFJLEVBQUUsSUFBSSxDQUFDO0VBQzdCMkgsV0FBVyxDQUFDbE8sS0FBSyxDQUFDNk4sUUFBUSxFQUFFLEtBQUssQ0FBQztFQUNsQ0ssV0FBVyxDQUFDbE8sS0FBSyxDQUFDMEgsU0FBUyxFQUFFLEtBQUssQ0FBQztFQUVuQyxPQUFPdkcsTUFBTSxDQUFDdU4sSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUN6QixDQUFDO0FBRUQsU0FBU0MsVUFBVUEsQ0FBQ0MsTUFBTSxFQUFFO0VBQzFCO0VBQ0EsSUFBSUMsU0FBUyxHQUFHN1AsTUFBTSxDQUFDOFAsbUJBQW1CLENBQUNGLE1BQU0sQ0FBQzs7RUFFbEQ7RUFBQSxJQUFBRyxTQUFBLEdBQUFDLDBCQUFBLENBQ2lCSCxTQUFTO0lBQUFJLEtBQUE7RUFBQTtJQUExQixLQUFBRixTQUFBLENBQUFQLENBQUEsTUFBQVMsS0FBQSxHQUFBRixTQUFBLENBQUFHLENBQUEsSUFBQUMsSUFBQSxHQUE0QjtNQUFBLElBQW5CNUksSUFBSSxHQUFBMEksS0FBQSxDQUFBcEssS0FBQTtNQUNYLElBQUlBLEtBQUssR0FBRytKLE1BQU0sQ0FBQ3JJLElBQUksQ0FBQztNQUN4QnFJLE1BQU0sQ0FBQ3JJLElBQUksQ0FBQyxHQUNWMUIsS0FBSyxJQUFJdUsseUVBQUEsQ0FBT3ZLLEtBQUssTUFBSyxRQUFRLEdBQUc4SixVQUFVLENBQUM5SixLQUFLLENBQUMsR0FBR0EsS0FBSztJQUNsRTtFQUFDLFNBQUF3SyxHQUFBO0lBQUFOLFNBQUEsQ0FBQW5MLENBQUEsQ0FBQXlMLEdBQUE7RUFBQTtJQUFBTixTQUFBLENBQUFPLENBQUE7RUFBQTtFQUNELE9BQU90USxNQUFNLENBQUN5RSxNQUFNLENBQUNtTCxNQUFNLENBQUM7QUFDOUI7QUFFQSxJQUFNVyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBSXpRLElBQUksRUFBSztFQUMzQixJQUFJLENBQUNBLElBQUksQ0FBQzBRLFVBQVUsRUFBRTtJQUNwQixPQUFPMVEsSUFBSTtFQUNiO0VBQ0FBLElBQUksQ0FBQzBRLFVBQVUsR0FBRyxLQUFLO0VBRXZCLEtBQUssSUFBSWxKLEVBQUUsSUFBSXhILElBQUksQ0FBQzBILE1BQU0sRUFBRTtJQUMxQixJQUFJeEcsS0FBSyxHQUFHbEIsSUFBSSxDQUFDMEgsTUFBTSxDQUFDRixFQUFFLENBQUM7SUFFM0IsS0FBSyxJQUFJeUUsR0FBRyxJQUFJdUMsT0FBTyxFQUFFO01BQ3ZCdE4sS0FBSyxDQUFDK0ssR0FBRyxDQUFDLEdBQUcvSyxLQUFLLENBQUNzTixPQUFPLENBQUN2QyxHQUFHLENBQUMsQ0FBQztNQUNoQyxPQUFPL0ssS0FBSyxDQUFDc04sT0FBTyxDQUFDdkMsR0FBRyxDQUFDLENBQUM7SUFDNUI7SUFFQSxJQUFJLENBQUMvSyxLQUFLLENBQUN3SCxXQUFXLEVBQUV4SCxLQUFLLENBQUN3SCxXQUFXLEdBQUcsRUFBRTtJQUM5Q3hILEtBQUssQ0FBQ3dILFdBQVcsQ0FBQ2lJLE9BQU8sQ0FBQ25KLEVBQUUsQ0FBQztJQUU3QnRHLEtBQUssQ0FBQzBQLE9BQU8sR0FBRzFQLEtBQUssQ0FBQzhOLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDOUI5TixLQUFLLENBQUMyUCxPQUFPLEdBQUczUCxLQUFLLENBQUM4TixLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzlCLE9BQU85TixLQUFLLENBQUM4TixLQUFLO0lBRWxCLElBQUksQ0FBQzlOLEtBQUssQ0FBQytOLElBQUksRUFBRS9OLEtBQUssQ0FBQytOLElBQUksR0FBRyxFQUFFO0lBRWhDLElBQUksQ0FBQy9OLEtBQUssQ0FBQ2dPLFFBQVEsRUFBRWhPLEtBQUssQ0FBQ2dPLFFBQVEsR0FBRyxDQUFDO0lBQ3ZDaE8sS0FBSyxDQUFDZ08sUUFBUSxHQUFHaE8sS0FBSyxDQUFDZ08sUUFBUSxDQUFDNEIsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUUxQzVQLEtBQUssQ0FBQ21CLE1BQU0sR0FBRzhNLFdBQVcsQ0FBQ2pPLEtBQUssQ0FBQztFQUNuQztFQUNBbEIsSUFBSSxHQUFHNlAsVUFBVSxDQUFDN1AsSUFBSSxDQUFDO0VBQ3ZCLE9BQU9BLElBQUk7QUFDYixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RGbUQ7QUFDSjtBQUNYO0FBRXJDLElBQU1pUixhQUFhLEdBQUcsRUFBRTtBQUN4QixJQUFNQyxZQUFZLEdBQUcsMkNBQTJDO0FBQ2hFO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7QUFFcEUsU0FBU0MsWUFBWUEsQ0FBQ0MsV0FBVyxFQUFFQyxnQkFBZ0IsRUFBRTtFQUNuRCxPQUFPcFIsTUFBTSxDQUFDcVIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFRixXQUFXLElBQUksQ0FBQyxDQUFDLEVBQUVDLGdCQUFnQixJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3JFO0FBRUEsU0FBU0UsZ0JBQWdCQSxDQUFDQyxPQUFPLEVBQUU7RUFDakMsSUFBTTFELE1BQU0sR0FBRyxDQUFDLENBQUM7RUFDakIsSUFBSSxDQUFDMEQsT0FBTyxFQUFFO0lBQ1osT0FBTzFELE1BQU07RUFDZjtFQUNBLEtBQUssSUFBSTJELEtBQUssSUFBSUQsT0FBTyxFQUFFO0lBQ3pCLElBQUksQ0FBQ0EsT0FBTyxDQUFDRSxjQUFjLENBQUNELEtBQUssQ0FBQyxFQUFFO01BQ2xDO0lBQ0Y7SUFDQSxJQUFNbEssRUFBRSxHQUFHaUssT0FBTyxDQUFDQyxLQUFLLENBQUM7SUFDekIsSUFBSSxDQUFDM0QsTUFBTSxDQUFDdkcsRUFBRSxDQUFDLEVBQUU7TUFDZnVHLE1BQU0sQ0FBQ3ZHLEVBQUUsQ0FBQyxHQUFHLEVBQUU7SUFDakI7SUFDQXVHLE1BQU0sQ0FBQ3ZHLEVBQUUsQ0FBQyxDQUFDNkcsSUFBSSxDQUFDcUQsS0FBSyxDQUFDO0VBQ3hCO0VBQ0EsT0FBTzNELE1BQU07QUFDZjtBQUVBLFNBQVM2RCxhQUFhQSxDQUFBLEVBQUc7RUFDdkIsSUFBTTdELE1BQU0sR0FBRyxFQUFFO0VBQ2pCLElBQU04RCxJQUFJLEdBQUcsSUFBSUMsR0FBRyxDQUFDLENBQUM7RUFDdEIsS0FBSyxJQUFJakcsR0FBRyxHQUFHLENBQUMsRUFBRUEsR0FBRyxHQUFHc0IsU0FBUyxDQUFDcEYsTUFBTSxFQUFFOEQsR0FBRyxJQUFJLENBQUMsRUFBRTtJQUNsRCxJQUFNa0csSUFBSSxHQUFHNUUsU0FBUyxDQUFDdEIsR0FBRyxDQUFDO0lBQzNCLElBQUksQ0FBQ2tHLElBQUksSUFBSSxDQUFDQSxJQUFJLENBQUNoSyxNQUFNLEVBQUU7TUFDekI7SUFDRjtJQUNBZ0ssSUFBSSxDQUFDdkMsT0FBTyxDQUFDLFVBQUN6SixLQUFLLEVBQUs7TUFDdEIsSUFBSSxPQUFPQSxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzdCO01BQ0Y7TUFDQSxJQUFNa0csR0FBRyxHQUFHbEcsS0FBSyxDQUFDNEosV0FBVyxDQUFDLENBQUM7TUFDL0IsSUFBSWtDLElBQUksQ0FBQ0csR0FBRyxDQUFDL0YsR0FBRyxDQUFDLEVBQUU7UUFDakI7TUFDRjtNQUNBNEYsSUFBSSxDQUFDckwsR0FBRyxDQUFDeUYsR0FBRyxDQUFDO01BQ2I4QixNQUFNLENBQUNNLElBQUksQ0FBQ3RJLEtBQUssQ0FBQztJQUNwQixDQUFDLENBQUM7RUFDSjtFQUNBLE9BQU9nSSxNQUFNO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNa0UsVUFBVTtFQUNyQjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNFLFNBQUFBLFdBQ0VqUyxJQUFJLEVBVUo7SUFBQSxJQUFBdU0sSUFBQSxHQUFBWSxTQUFBLENBQUFwRixNQUFBLFFBQUFvRixTQUFBLFFBQUErRSxTQUFBLEdBQUEvRSxTQUFBLE1BREksQ0FBQyxDQUFDO01BUEpnRixrQkFBa0IsR0FBQTVGLElBQUEsQ0FBbEI0RixrQkFBa0I7TUFDbEJDLE9BQU8sR0FBQTdGLElBQUEsQ0FBUDZGLE9BQU87TUFDUEMsT0FBTyxHQUFBOUYsSUFBQSxDQUFQOEYsT0FBTztNQUNQblAsTUFBTSxHQUFBcUosSUFBQSxDQUFOckosTUFBTTtNQUNOb1AsU0FBUyxHQUFBL0YsSUFBQSxDQUFUK0YsU0FBUztNQUNUOVAsTUFBTSxHQUFBK0osSUFBQSxDQUFOL0osTUFBTTtNQUFBK1AsaUJBQUEsR0FBQWhHLElBQUEsQ0FDTmlHLFlBQVk7TUFBWkEsWUFBWSxHQUFBRCxpQkFBQSxjQUFHLEVBQUUsR0FBQUEsaUJBQUE7SUFBQUUsaUZBQUEsT0FBQVIsVUFBQTtJQUduQixJQUFJLENBQUNTLEtBQUssR0FBR2pDLGlEQUFVLENBQUN6USxJQUFJLENBQUM7SUFDN0I7SUFDQSxJQUFJLENBQUMyUyxhQUFhLEdBQUdSLGtCQUFrQixJQUFJLElBQUk7SUFDL0M7SUFDQSxJQUFJLENBQUNTLFFBQVEsR0FBR1IsT0FBTyxJQUFJLElBQUk7SUFDL0IsSUFBSSxDQUFDUyxRQUFRLEdBQUdSLE9BQU8sSUFBSSxJQUFJO0lBQy9CO0lBQ0EsSUFBSSxDQUFDUyxPQUFPLEdBQUc1UCxNQUFNLElBQUksRUFBRTtJQUMzQjtJQUNBLElBQUksQ0FBQzZQLFVBQVUsR0FBR1QsU0FBUyxJQUFJLElBQUk7SUFDbkMsSUFBSSxDQUFDVSxRQUFRLEdBQUc1QixZQUFZLENBQzFCLElBQUksQ0FBQ3NCLEtBQUssQ0FBQ2pCLE9BQU8sRUFDbEIsSUFBSSxDQUFDc0IsVUFBVSxJQUFJLElBQUksQ0FBQ0EsVUFBVSxDQUFDdEIsT0FDckMsQ0FBQztJQUNELElBQUksQ0FBQ3dCLFlBQVksR0FBR3pCLGdCQUFnQixDQUFDLElBQUksQ0FBQ3dCLFFBQVEsQ0FBQztJQUNuRDtJQUNBO0lBQ0EsSUFBSSxDQUFDRSxPQUFPLEdBQUcxUSxNQUFNLElBQUliLG1EQUFVLENBQUN5QixHQUFHLENBQUNvUCxZQUFZLENBQUM7SUFFckQsSUFBSSxDQUFDVyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLElBQUksQ0FBQ0MsYUFBYSxHQUFHLENBQUMsQ0FBQztJQUN2QixJQUFJLENBQUNDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFFcEIsSUFBSSxDQUFDQyxXQUFXLEdBQUcsRUFBRTtJQUNyQixJQUFJLENBQUNDLGVBQWUsR0FBRztNQUFFL0wsRUFBRSxFQUFFLFFBQVE7TUFBRUMsSUFBSSxFQUFFLFFBQVE7TUFBRUMsTUFBTSxFQUFFO0lBQUcsQ0FBQztJQUNuRSxJQUFJLENBQUM4TCxlQUFlLEdBQUc7TUFBRWhNLEVBQUUsRUFBRSxRQUFRO01BQUVDLElBQUksRUFBRSxRQUFRO01BQUVDLE1BQU0sRUFBRTtJQUFHLENBQUM7SUFDbkUsSUFBSSxDQUFDK0wsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUNDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pCeFQsTUFBTSxDQUFDeUUsTUFBTSxDQUFDLElBQUksQ0FBQztFQUNyQjtFQUFDLE9BQUFnUCw4RUFBQSxDQUFBMUIsVUFBQTtJQUFBaEcsR0FBQTtJQUFBbEcsS0FBQSxFQUVELFNBQUEyTixVQUFVQSxDQUFBLEVBQUc7TUFBQSxJQUFBekwsS0FBQTtNQUNYLElBQUkrQyxhQUFhLEdBQUcsSUFBSSxDQUFDMEgsS0FBSyxDQUFDblEsVUFBVTtNQUV6QyxJQUFJLElBQUksQ0FBQ3FRLFFBQVEsRUFBRTtRQUNqQjtRQUNBNUgsYUFBYSxHQUFHQSxhQUFhLENBQUM0SSxNQUFNLENBQUMsVUFBQ0MsSUFBSSxFQUFLO1VBQzdDLE9BQU81TCxLQUFJLENBQUMySyxRQUFRLENBQUNrQixRQUFRLENBQUNELElBQUksQ0FBQ3JNLEVBQUUsQ0FBQztRQUN4QyxDQUFDLENBQUM7UUFDRjtRQUNBd0QsYUFBYSxHQUFHQSxhQUFhLENBQUMrSSxJQUFJLENBQUMsVUFBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUs7VUFDM0MsSUFBTUMsTUFBTSxHQUFHak0sS0FBSSxDQUFDMkssUUFBUSxDQUFDOUYsT0FBTyxDQUFDa0gsQ0FBQyxDQUFDeE0sRUFBRSxDQUFDO1VBQzFDLElBQU0yTSxNQUFNLEdBQUdsTSxLQUFJLENBQUMySyxRQUFRLENBQUM5RixPQUFPLENBQUNtSCxDQUFDLENBQUN6TSxFQUFFLENBQUM7VUFDMUMsSUFBSTBNLE1BQU0sR0FBR0MsTUFBTSxFQUFFO1lBQ25CLE9BQU8sQ0FBQyxDQUFDO1VBQ1g7VUFDQSxJQUFJRCxNQUFNLEdBQUdDLE1BQU0sRUFBRTtZQUNuQixPQUFPLENBQUM7VUFDVjtVQUNBLE9BQU8sQ0FBQztRQUNWLENBQUMsQ0FBQztNQUNKO01BRUFuSixhQUFhLENBQUN3RSxPQUFPLENBQUMsVUFBQzRFLFlBQVksRUFBSztRQUN0QyxJQUFJLENBQUNuTSxLQUFJLENBQUNvTSxnQkFBZ0IsQ0FBQ0QsWUFBWSxDQUFDNU0sRUFBRSxDQUFDLEVBQUU7VUFDM0M7UUFDRjtRQUNBLElBQUkzQixRQUFRLEdBQUc7VUFDYjJCLEVBQUUsRUFBRTRNLFlBQVksQ0FBQzVNLEVBQUU7VUFDbkJDLElBQUksRUFBRTJNLFlBQVksQ0FBQzNNLElBQUk7VUFDdkJDLE1BQU0sRUFBRTtRQUNWLENBQUM7UUFDRDBNLFlBQVksQ0FBQzFNLE1BQU0sQ0FBQzhILE9BQU8sQ0FBQyxVQUFDOEUsT0FBTyxFQUFLO1VBQ3ZDLElBQUlwVCxLQUFLLEdBQUcrRyxLQUFJLENBQUNzTSxRQUFRLENBQUNELE9BQU8sQ0FBQztVQUNsQyxJQUFJcFQsS0FBSyxFQUFFO1lBQ1QyRSxRQUFRLENBQUM2QixNQUFNLENBQUMyRyxJQUFJLENBQUNuTixLQUFLLENBQUM7VUFDN0I7UUFDRixDQUFDLENBQUM7UUFDRixJQUFJMkUsUUFBUSxDQUFDNkIsTUFBTSxDQUFDSyxNQUFNLEVBQUU7VUFDMUJFLEtBQUksQ0FBQ3FMLFdBQVcsQ0FBQ2pGLElBQUksQ0FBQ3hJLFFBQVEsQ0FBQztRQUNqQztNQUNGLENBQUMsQ0FBQztNQUVGLElBQUksSUFBSSxDQUFDd08sZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDbkMsSUFBSSxJQUFJLENBQUN2QixPQUFPLENBQUMvSyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQUEsSUFBQWtJLFNBQUEsR0FBQUMsMEJBQUEsQ0FDSCxJQUFJLENBQUM0QyxPQUFPO1lBQUEzQyxLQUFBO1VBQUE7WUFBcEMsS0FBQUYsU0FBQSxDQUFBUCxDQUFBLE1BQUFTLEtBQUEsR0FBQUYsU0FBQSxDQUFBRyxDQUFBLElBQUFDLElBQUEsR0FBc0M7Y0FBQSxJQUE3Qm1FLFdBQVcsR0FBQXJFLEtBQUEsQ0FBQXBLLEtBQUE7Y0FDbEIsSUFBSSxDQUFDME8sY0FBYyxDQUFDRCxXQUFXLENBQUM7WUFDbEM7VUFBQyxTQUFBakUsR0FBQTtZQUFBTixTQUFBLENBQUFuTCxDQUFBLENBQUF5TCxHQUFBO1VBQUE7WUFBQU4sU0FBQSxDQUFBTyxDQUFBO1VBQUE7UUFDSDtRQUNBLElBQUksSUFBSSxDQUFDZ0QsZUFBZSxDQUFDOUwsTUFBTSxDQUFDSyxNQUFNLEVBQUU7VUFDdEMsSUFBSSxDQUFDdUwsV0FBVyxDQUFDakYsSUFBSSxDQUFDLElBQUksQ0FBQ21GLGVBQWUsQ0FBQztRQUM3QztNQUNGO01BRUEsSUFBSSxJQUFJLENBQUNhLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ25DLElBQUksSUFBSSxDQUFDbkIsT0FBTyxDQUFDbkwsTUFBTSxFQUFFO1VBQ3ZCLElBQUksQ0FBQ21MLE9BQU8sQ0FBQ2hMLEdBQUcsQ0FBQyxVQUFDVixFQUFFLEVBQUs7WUFBQSxJQUFBa04sVUFBQSxHQUFBeEUsMEJBQUEsQ0FDQ2pJLEtBQUksQ0FBQ3VMLGVBQWUsQ0FBQzlMLE1BQU07Y0FBQWlOLE1BQUE7WUFBQTtjQUFuRCxLQUFBRCxVQUFBLENBQUFoRixDQUFBLE1BQUFpRixNQUFBLEdBQUFELFVBQUEsQ0FBQXRFLENBQUEsSUFBQUMsSUFBQSxHQUFxRDtnQkFBQSxJQUE1Q21FLFlBQVcsR0FBQUcsTUFBQSxDQUFBNU8sS0FBQTtnQkFDbEIsSUFBSXlPLFlBQVcsQ0FBQ2hOLEVBQUUsS0FBS0EsRUFBRSxFQUFFO2tCQUN6QlMsS0FBSSxDQUFDc0wsZUFBZSxDQUFDN0wsTUFBTSxDQUFDMkcsSUFBSSxDQUFDbUcsWUFBVyxDQUFDO2tCQUM3QztnQkFDRjtjQUNGO1lBQUMsU0FBQWpFLEdBQUE7Y0FBQW1FLFVBQUEsQ0FBQTVQLENBQUEsQ0FBQXlMLEdBQUE7WUFBQTtjQUFBbUUsVUFBQSxDQUFBbEUsQ0FBQTtZQUFBO1lBQ0QsSUFBSXZJLEtBQUksQ0FBQzJNLFFBQVEsQ0FBQ3BOLEVBQUUsQ0FBQyxFQUFFO2NBQ3JCUyxLQUFJLENBQUNzTCxlQUFlLENBQUM3TCxNQUFNLENBQUMyRyxJQUFJLENBQUNwRyxLQUFJLENBQUMvRyxLQUFLLENBQUNzRyxFQUFFLENBQUMsQ0FBQztZQUNsRDtZQUNBO1VBQ0YsQ0FBQyxDQUFDO1FBQ0o7UUFDQTtRQUNBLElBQUksSUFBSSxDQUFDK0wsZUFBZSxDQUFDN0wsTUFBTSxDQUFDSyxNQUFNLEVBQUU7VUFDdEMsSUFBSSxDQUFDdUwsV0FBVyxDQUFDM0MsT0FBTyxDQUFDLElBQUksQ0FBQzRDLGVBQWUsQ0FBQztRQUNoRDtNQUNGO0lBQ0Y7O0lBRUE7QUFDRjtBQUNBO0VBRkU7SUFBQXRILEdBQUE7SUFBQWxHLEtBQUEsRUFHQSxTQUFBNUUsU0FBU0EsQ0FBQ0QsS0FBSyxFQUFFVixJQUFJLEVBQUU7TUFDckI7TUFDQSxJQUFJcVUsT0FBTyxHQUFHM1QsS0FBSyxDQUFDNFQsS0FBSyxDQUFDNUQsWUFBWSxDQUFDO01BRXZDLElBQUkyRCxPQUFPLEVBQUU7UUFDWDNULEtBQUssR0FBRzJULE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBSUEsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1VBQ2RyVSxJQUFJLEdBQUd1VSxRQUFRLENBQUNGLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDakM7TUFDRjs7TUFFQTtNQUNBLElBQUksSUFBSSxDQUFDN0IsUUFBUSxJQUFJLElBQUksQ0FBQ0EsUUFBUSxDQUFDckIsY0FBYyxDQUFDelEsS0FBSyxDQUFDLEVBQUU7UUFDeERBLEtBQUssR0FBRyxJQUFJLENBQUM4UixRQUFRLENBQUM5UixLQUFLLENBQUM7TUFDOUI7O01BRUE7TUFDQSxJQUFJLElBQUksQ0FBQ2lTLE9BQU8sQ0FBQ3hCLGNBQWMsQ0FBQ3pRLEtBQUssQ0FBQyxFQUFFO1FBQ3RDLElBQUlYLFdBQVcsR0FBRyxJQUFJLENBQUM0UyxPQUFPLENBQUNqUyxLQUFLLENBQUM7UUFDckMsSUFBSVYsSUFBSSxFQUFFO1VBQ1IsT0FBT0QsV0FBVyxDQUFDeVUsT0FBTyxDQUFDeFUsSUFBSSxDQUFDO1FBQ2xDO1FBQ0EsT0FBT0QsV0FBVztNQUNwQjs7TUFFQTtNQUNBLElBQUksSUFBSSxDQUFDNlMsYUFBYSxDQUFDekIsY0FBYyxDQUFDelEsS0FBSyxDQUFDLEVBQUU7UUFDNUMsT0FBTyxJQUFJLENBQUNrUyxhQUFhLENBQUNsUyxLQUFLLENBQUM7TUFDbEM7TUFDQSxPQUFPLElBQUk7SUFDYjtFQUFDO0lBQUErSyxHQUFBO0lBQUFsRyxLQUFBLEVBRUQsU0FBQXhELFVBQVVBLENBQUEsRUFBRztNQUNYLE9BQU8sSUFBSSxDQUFDK1EsV0FBVztJQUN6QjtFQUFDO0lBQUFySCxHQUFBO0lBQUFsRyxLQUFBLEVBRUQsU0FBQTdFLEtBQUtBLENBQUNvVCxPQUFPLEVBQUU7TUFDYixJQUFJLElBQUksQ0FBQ3RCLFFBQVEsSUFBSSxJQUFJLENBQUNBLFFBQVEsQ0FBQ3JCLGNBQWMsQ0FBQzJDLE9BQU8sQ0FBQyxFQUFFO1FBQzFEQSxPQUFPLEdBQUcsSUFBSSxDQUFDdEIsUUFBUSxDQUFDc0IsT0FBTyxDQUFDO01BQ2xDO01BQ0EsSUFBSXBULEtBQUssR0FBRyxJQUFJLENBQUNpUyxPQUFPLENBQUNtQixPQUFPLENBQUM7TUFDakMsSUFBSSxDQUFDcFQsS0FBSyxFQUFFO1FBQ1YsTUFBTSxJQUFJK1QsS0FBSyxDQUFDLDRCQUE0QixHQUFHWCxPQUFPLENBQUM7TUFDekQ7TUFDQSxPQUFPcFQsS0FBSztJQUNkO0VBQUM7SUFBQStLLEdBQUE7SUFBQWxHLEtBQUEsRUFFRCxTQUFBZCxVQUFVQSxDQUFBLEVBQUc7TUFDWCxJQUFJL0QsS0FBSyxHQUFHLElBQUksQ0FBQ2lTLE9BQU8sQ0FBQ2pULE1BQU0sQ0FBQ2dWLElBQUksQ0FBQyxJQUFJLENBQUMvQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN0RCxJQUFJLENBQUNqUyxLQUFLLEVBQUU7UUFDVixNQUFNLElBQUkrVCxLQUFLLENBQUMseUJBQXlCLENBQUM7TUFDNUM7TUFDQSxPQUFPL1QsS0FBSztJQUNkO0VBQUM7SUFBQStLLEdBQUE7SUFBQWxHLEtBQUEsRUFFRCxTQUFBNk8sUUFBUUEsQ0FBQ04sT0FBTyxFQUFFO01BQ2hCLElBQUksSUFBSSxDQUFDdEIsUUFBUSxJQUFJLElBQUksQ0FBQ0EsUUFBUSxDQUFDckIsY0FBYyxDQUFDMkMsT0FBTyxDQUFDLEVBQUU7UUFDMURBLE9BQU8sR0FBRyxJQUFJLENBQUN0QixRQUFRLENBQUNzQixPQUFPLENBQUM7TUFDbEM7TUFDQSxJQUFJLElBQUksQ0FBQ25CLE9BQU8sQ0FBQ21CLE9BQU8sQ0FBQyxFQUFFO1FBQ3pCLE9BQU8sSUFBSTtNQUNiO01BQ0EsT0FBTyxLQUFLO0lBQ2Q7RUFBQztJQUFBckksR0FBQTtJQUFBbEcsS0FBQSxFQUVELFNBQUFvUCxXQUFXQSxDQUFDQyxZQUFZLEVBQUU7TUFDeEIsSUFBSSxJQUFJLENBQUNoQyxhQUFhLENBQUN6QixjQUFjLENBQUN5RCxZQUFZLENBQUMsRUFBRTtRQUNuRCxPQUFPLElBQUksQ0FBQ2hDLGFBQWEsQ0FBQ2dDLFlBQVksQ0FBQztNQUN6QztNQUNBLE9BQU8sSUFBSTtJQUNiO0VBQUM7SUFBQW5KLEdBQUE7SUFBQWxHLEtBQUEsRUFFRCxTQUFBMUQsTUFBTUEsQ0FBQzBELEtBQUssRUFBRXNQLFVBQVUsRUFBRTtNQUFBLElBQUFDLE1BQUE7TUFDeEJELFVBQVUsS0FBS0EsVUFBVSxHQUFHLEVBQUUsQ0FBQztNQUMvQixJQUFJLENBQUN0UCxLQUFLLENBQUNnQyxNQUFNLEVBQUU7UUFDakIsT0FBTyxJQUFJO01BQ2I7TUFDQSxJQUFJaEMsS0FBSyxJQUFJLEdBQUcsSUFBSUEsS0FBSyxJQUFJLElBQUksRUFBRTtRQUNqQyxPQUFPLENBQUMsSUFBSSxDQUFDN0UsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO01BQzNCO01BRUEsSUFBSXFVLE1BQU0sR0FBR3hQLEtBQUssQ0FBQzRKLFdBQVcsQ0FBQyxDQUFDLENBQUNMLEtBQUssQ0FBQyxjQUFjLENBQUM7TUFDdEQsSUFBSWtHLFVBQVUsR0FBRyxFQUFFO01BRW5CLElBQUlELE1BQU0sQ0FBQ3hOLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDckJ3TixNQUFNLEdBQUcsQ0FBQ0EsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFQSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDakM7TUFFQUMsVUFBVSxHQUFHRCxNQUFNLENBQ2hCck4sR0FBRyxDQUFDLFVBQUNuQyxLQUFLLEVBQUs7UUFDZDtRQUNBLElBQUkyQixNQUFNLEdBQUc0TixNQUFJLENBQUNuQyxPQUFPO1FBQ3pCLElBQUlzQyxZQUFZLEdBQUdILE1BQUksQ0FBQzdCLFlBQVk7UUFDcEMsSUFBSTFMLE1BQU0sR0FBRyxDQUFDO1FBQUEsSUFBQTJOLEtBQUEsWUFBQUEsTUFBQSxFQUVpRDtVQUM3RCxJQUFNQyxJQUFJLEdBQUc1UCxLQUFLLENBQUM2UCxTQUFTLENBQUM7VUFDN0I3TixNQUFNLEVBQUU7VUFFUjBOLFlBQVksQ0FBQ0UsSUFBSSxDQUFDLEtBQUtGLFlBQVksQ0FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7VUFDL0NGLFlBQVksR0FBR0EsWUFBWSxDQUFDRSxJQUFJLENBQUM7VUFFakMsSUFBSSxDQUFDRixZQUFZLENBQUNJLE9BQU8sRUFBRTtZQUN6QixJQUFJQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ2ZMLFlBQVksQ0FBQ0ksT0FBTyxHQUFHLEVBQUU7WUFDekJKLFlBQVksQ0FBQy9OLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFFeEIsS0FBSyxJQUFJNE0sT0FBTyxJQUFJNU0sTUFBTSxFQUFFO2NBQzFCLElBQUl4RyxLQUFLLEdBQUd3RyxNQUFNLENBQUM0TSxPQUFPLENBQUM7Y0FDM0I7Y0FDQTtjQUNBO2NBQ0EsSUFBSWpTLE9BQU0sR0FBR25CLEtBQUssQ0FBQ3dSLEtBQUssQ0FBQ3JRLE1BQU07Y0FDL0IsSUFBSTBULEdBQUcsR0FBR2hRLEtBQUssQ0FBQ2lRLE1BQU0sQ0FBQyxDQUFDLEVBQUVqTyxNQUFNLENBQUM7Y0FDakMsSUFBSWtPLFFBQVEsR0FBRzVULE9BQU0sQ0FBQ3lLLE9BQU8sQ0FBQ2lKLEdBQUcsQ0FBQztjQUNsQyxJQUFJRSxRQUFRLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ2xCLElBQUlDLEtBQUssR0FBR0QsUUFBUSxHQUFHLENBQUM7Z0JBQ3hCLElBQUlGLEdBQUcsSUFBSXpCLE9BQU8sRUFBRTRCLEtBQUssR0FBRyxDQUFDO2dCQUU3QlQsWUFBWSxDQUFDSSxPQUFPLENBQUN4SCxJQUFJLENBQUNuTixLQUFLLENBQUM7Z0JBQ2hDdVUsWUFBWSxDQUFDL04sTUFBTSxDQUFDNE0sT0FBTyxDQUFDLEdBQUdwVCxLQUFLO2dCQUVwQzRVLE1BQU0sQ0FBQ3hCLE9BQU8sQ0FBQyxHQUFHNEIsS0FBSztjQUN6QjtZQUNGO1lBQ0FULFlBQVksQ0FBQ0ksT0FBTyxDQUFDOUIsSUFBSSxDQUFDLFVBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUFLO2NBQ2xDLElBQUlrQyxNQUFNLEdBQUdMLE1BQU0sQ0FBQzlCLENBQUMsQ0FBQ3hNLEVBQUUsQ0FBQztnQkFDdkI0TyxNQUFNLEdBQUdOLE1BQU0sQ0FBQzdCLENBQUMsQ0FBQ3pNLEVBQUUsQ0FBQztjQUN2QixPQUFPMk8sTUFBTSxHQUFHQyxNQUFNO1lBQ3hCLENBQUMsQ0FBQztVQUNKOztVQUVBO1VBQ0ExTyxNQUFNLEdBQUcrTixZQUFZLENBQUMvTixNQUFNO1FBQzlCLENBQUM7UUF2Q0QsS0FBSyxJQUFJa08sU0FBUyxHQUFHLENBQUMsRUFBRUEsU0FBUyxHQUFHN1AsS0FBSyxDQUFDZ0MsTUFBTSxFQUFFNk4sU0FBUyxFQUFFO1VBQUFGLEtBQUE7UUFBQTtRQXdDN0QsT0FBT0QsWUFBWSxDQUFDSSxPQUFPO1FBQzNCO1FBQ0E7UUFDQTtRQUNBO01BQ0YsQ0FBQyxDQUFDLENBQ0RqQyxNQUFNLENBQUMsVUFBQ0ksQ0FBQztRQUFBLE9BQUtBLENBQUM7TUFBQSxFQUFDO01BRW5CLElBQUk2QixPQUFPLEdBQUcsSUFBSTtNQUNsQixJQUFJTCxVQUFVLENBQUN6TixNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3pCOE4sT0FBTyxHQUFHOUUsNkNBQVMsQ0FBQzdELEtBQUssQ0FBQyxJQUFJLEVBQUVzSSxVQUFVLENBQUM7TUFDN0MsQ0FBQyxNQUFNLElBQUlBLFVBQVUsQ0FBQ3pOLE1BQU0sRUFBRTtRQUM1QjhOLE9BQU8sR0FBR0wsVUFBVSxDQUFDLENBQUMsQ0FBQztNQUN6QixDQUFDLE1BQU07UUFDTEssT0FBTyxHQUFHLEVBQUU7TUFDZDtNQUNBLElBQUlBLE9BQU8sSUFBSUEsT0FBTyxDQUFDOU4sTUFBTSxHQUFHc04sVUFBVSxFQUFFO1FBQzFDUSxPQUFPLEdBQUdBLE9BQU8sQ0FBQ1EsS0FBSyxDQUFDLENBQUMsRUFBRWhCLFVBQVUsQ0FBQztNQUN4QztNQUNBLE9BQU9RLE9BQU87SUFDaEI7RUFBQztJQUFBNUosR0FBQTtJQUFBbEcsS0FBQSxFQUVELFNBQUEwTyxjQUFjQSxDQUFDRCxXQUFXLEVBQUU7TUFDMUIsSUFBSWhNLFNBQVMsR0FBR3RJLE1BQU0sQ0FBQ3FSLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRWlELFdBQVcsRUFBRTtRQUM3Q2hOLEVBQUUsRUFBRWdOLFdBQVcsQ0FBQzlMLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDOUJ4RixNQUFNLEVBQUU7TUFDVixDQUFDLENBQUM7TUFDRixJQUFJLENBQUNzRixTQUFTLENBQUNuRyxNQUFNLEVBQUU7UUFDckJtRyxTQUFTLENBQUNuRyxNQUFNLEdBQUc4TSxrREFBVyxDQUFDM0csU0FBUyxDQUFDO01BQzNDO01BQ0EsSUFBSXRILEtBQUssR0FBRyxJQUFJb1YsU0FBUyxDQUFDOU4sU0FBUyxDQUFDO01BQ3BDLElBQUksQ0FBQzJLLE9BQU8sQ0FBQ2pTLEtBQUssQ0FBQ3NHLEVBQUUsQ0FBQyxHQUFHdEcsS0FBSztNQUM5QixJQUFJLENBQUNzUyxlQUFlLENBQUM5TCxNQUFNLENBQUMyRyxJQUFJLENBQUNuTixLQUFLLENBQUM7TUFDdkMsT0FBT0EsS0FBSztJQUNkO0VBQUM7SUFBQStLLEdBQUE7SUFBQWxHLEtBQUEsRUFFRCxTQUFBd08sUUFBUUEsQ0FBQ0QsT0FBTyxFQUFFO01BQUEsSUFBQWlDLE1BQUE7TUFDaEI7TUFDQSxJQUFJdlcsSUFBSSxHQUFHLElBQUksQ0FBQzBTLEtBQUssQ0FBQ2hMLE1BQU0sQ0FBQzRNLE9BQU8sQ0FBQztNQUNyQyxJQUFJLElBQUksQ0FBQ3ZCLFVBQVUsSUFBSSxJQUFJLENBQUNBLFVBQVUsQ0FBQ3JMLE1BQU0sSUFBSSxJQUFJLENBQUNxTCxVQUFVLENBQUNyTCxNQUFNLENBQUM0TSxPQUFPLENBQUMsRUFBRTtRQUFBLElBQUFrQyxrQkFBQTtRQUNoRixJQUFNQyxTQUFTLEdBQUcsSUFBSSxDQUFDMUQsVUFBVSxDQUFDckwsTUFBTSxDQUFDNE0sT0FBTyxDQUFDO1FBQ2pELElBQU1vQyxZQUFZLEdBQUd0UCxLQUFLLENBQUNtSSxPQUFPLENBQUN2UCxJQUFJLENBQUMrTyxRQUFRLENBQUMsR0FBRy9PLElBQUksQ0FBQytPLFFBQVEsR0FBRyxFQUFFO1FBQ3RFLElBQU00SCxpQkFBaUIsR0FBR3ZQLEtBQUssQ0FBQ21JLE9BQU8sQ0FBQ2tILFNBQVMsQ0FBQzFILFFBQVEsQ0FBQyxHQUN2RDBILFNBQVMsQ0FBQzFILFFBQVEsR0FDbEIsT0FBTzBILFNBQVMsQ0FBQzFILFFBQVEsS0FBSyxRQUFRLEdBQ3BDLENBQUMwSCxTQUFTLENBQUMxSCxRQUFRLENBQUMsR0FDcEIsRUFBRTtRQUNSLElBQU02SCxhQUFhLEdBQUcsRUFBQUosa0JBQUEsT0FBSSxDQUFDdkQsWUFBWSxjQUFBdUQsa0JBQUEsdUJBQWpCQSxrQkFBQSxDQUFvQmxDLE9BQU8sQ0FBQyxLQUFJLEVBQUU7UUFDeEQsSUFBTXVDLGNBQWMsR0FBR2pGLGFBQWEsQ0FDbEM4RSxZQUFZLEVBQ1pDLGlCQUFpQixFQUNqQkMsYUFBYSxFQUNiNVcsSUFBSSxDQUFDeUgsSUFBSSxHQUFHLENBQUN6SCxJQUFJLENBQUN5SCxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQzVCZ1AsU0FBUyxDQUFDaFAsSUFBSSxHQUFHLENBQUNnUCxTQUFTLENBQUNoUCxJQUFJLENBQUMsR0FBRyxFQUN0QyxDQUFDO1FBQ0R6SCxJQUFJLEdBQUdFLE1BQU0sQ0FBQ3FSLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRXZSLElBQUksRUFBRTtVQUM3QjhXLFFBQVEsRUFBRUwsU0FBUyxDQUFDaFAsSUFBSTtVQUN4QnNILFFBQVEsRUFBRThIO1FBQ1osQ0FBQyxDQUFDO01BQ0osQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDNUQsWUFBWSxJQUFJLElBQUksQ0FBQ0EsWUFBWSxDQUFDcUIsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDckIsWUFBWSxDQUFDcUIsT0FBTyxDQUFDLENBQUN2TSxNQUFNLEVBQUU7UUFDL0YsSUFBTTJPLGFBQVksR0FBR3RQLEtBQUssQ0FBQ21JLE9BQU8sQ0FBQ3ZQLElBQUksQ0FBQytPLFFBQVEsQ0FBQyxHQUFHL08sSUFBSSxDQUFDK08sUUFBUSxHQUFHLEVBQUU7UUFDdEUsSUFBTThILGVBQWMsR0FBR2pGLGFBQWEsQ0FBQzhFLGFBQVksRUFBRSxJQUFJLENBQUN6RCxZQUFZLENBQUNxQixPQUFPLENBQUMsQ0FBQztRQUM5RXRVLElBQUksR0FBR0UsTUFBTSxDQUFDcVIsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFdlIsSUFBSSxFQUFFO1VBQUUrTyxRQUFRLEVBQUU4SDtRQUFlLENBQUMsQ0FBQztNQUM5RDtNQUVBLElBQUksQ0FBQyxJQUFJLENBQUNFLGFBQWEsQ0FBQy9XLElBQUksQ0FBQyxFQUFFO1FBQzdCLE9BQU8sS0FBSztNQUNkO01BRUEsSUFBSWtCLEtBQUssR0FBRyxJQUFJb1YsU0FBUyxDQUFDdFcsSUFBSSxDQUFDO01BQy9CLElBQUksQ0FBQ21ULE9BQU8sQ0FBQ21CLE9BQU8sQ0FBQyxHQUFHcFQsS0FBSztNQUM3QixJQUFJQSxLQUFLLENBQUNSLE1BQU0sRUFBRTtRQUNoQixJQUFJLENBQUMwUyxhQUFhLENBQUNsUyxLQUFLLENBQUNSLE1BQU0sQ0FBQyxHQUFHUSxLQUFLO01BQzFDO01BQ0EsSUFBSUEsS0FBSyxDQUFDOFYsTUFBTSxFQUFFO1FBQ2hCLEtBQUssSUFBSW5MLEdBQUcsSUFBSTNLLEtBQUssQ0FBQzhWLE1BQU0sRUFBRTtVQUM1QixJQUFJeFcsSUFBSSxHQUFHVSxLQUFLLENBQUM4VixNQUFNLENBQUNuTCxHQUFHLENBQUM7VUFDNUIsSUFBSXJMLElBQUksQ0FBQ0UsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDMFMsYUFBYSxDQUFDNVMsSUFBSSxDQUFDRSxNQUFNLENBQUMsR0FBR0YsSUFBSTtVQUN4QztRQUNGO01BQ0Y7TUFFQSxJQUFJVSxLQUFLLENBQUMwSCxTQUFTLEVBQUU7UUFDbkIxSCxLQUFLLENBQUMwSCxTQUFTLENBQUM0RyxPQUFPLENBQUMsVUFBQzlDLFFBQVEsRUFBSztVQUNwQyxJQUFJNkosTUFBSSxDQUFDbEQsVUFBVSxDQUFDM0csUUFBUSxDQUFDLEVBQUU7WUFDN0I7VUFDRjtVQUNBNkosTUFBSSxDQUFDbEQsVUFBVSxDQUFDM0csUUFBUSxDQUFDLEdBQUc0SCxPQUFPO1FBQ3JDLENBQUMsQ0FBQztNQUNKO01BQ0EsT0FBT3BULEtBQUs7SUFDZDs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMRTtJQUFBK0ssR0FBQTtJQUFBbEcsS0FBQSxFQU1BLFNBQUFzTyxnQkFBZ0JBLENBQUM0QyxXQUFXLEVBQUU7TUFDNUIsSUFBSUMsVUFBVSxHQUNaLElBQUksQ0FBQ3RFLFFBQVEsSUFBSSxJQUFJLENBQUNBLFFBQVEsQ0FBQzdLLE1BQU0sR0FDakMsSUFBSSxDQUFDNkssUUFBUSxDQUFDOUYsT0FBTyxDQUFDbUssV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQ3ZDLElBQUk7TUFDVixJQUFJRSxVQUFVLEdBQ1osSUFBSSxDQUFDdEUsUUFBUSxJQUFJLElBQUksQ0FBQ0EsUUFBUSxDQUFDOUssTUFBTSxHQUNqQyxJQUFJLENBQUM4SyxRQUFRLENBQUMvRixPQUFPLENBQUNtSyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FDdkMsS0FBSztNQUNYLElBQUksQ0FBQ0MsVUFBVSxJQUFJQyxVQUFVLEVBQUU7UUFDN0IsT0FBTyxLQUFLO01BQ2Q7TUFDQSxPQUFPLElBQUk7SUFDYjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMRTtJQUFBbEwsR0FBQTtJQUFBbEcsS0FBQSxFQU1BLFNBQUFnUixhQUFhQSxDQUFDN1YsS0FBSyxFQUFFO01BQ25CLElBQUksSUFBSSxDQUFDeVIsYUFBYSxFQUFFO1FBQ3RCLE9BQU8sSUFBSSxDQUFDQSxhQUFhLENBQUN6UixLQUFLLENBQUM7TUFDbEM7TUFDQSxPQUFPLElBQUk7SUFDYjtFQUFDO0FBQUE7QUFHSSxJQUFNb1YsU0FBUztFQUNwQixTQUFBQSxVQUFZdFcsSUFBSSxFQUFFO0lBQUF5UyxpRkFBQSxPQUFBNkQsU0FBQTtJQUNoQixJQUFJLENBQUM1RCxLQUFLLEdBQUd4UyxNQUFNLENBQUNxUixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUV2UixJQUFJLENBQUM7SUFDcEMsSUFBSSxDQUFDZ1gsTUFBTSxHQUFHLElBQUk7SUFDbEIsSUFBSSxJQUFJLENBQUN0RSxLQUFLLENBQUMwRSxlQUFlLEVBQUU7TUFDOUIsSUFBSSxDQUFDSixNQUFNLEdBQUcsRUFBRTtNQUNoQixLQUFLLElBQUlLLE9BQU8sSUFBSWxHLEtBQUssRUFBRTtRQUN6QixJQUFJbUcsT0FBTyxHQUFHbkcsS0FBSyxDQUFDa0csT0FBTyxDQUFDO1FBQzVCLElBQUlFLGFBQWEsR0FBRyxJQUFJLENBQUM3RSxLQUFLLENBQUMwRSxlQUFlLENBQUNFLE9BQU8sQ0FBQztRQUN2RCxJQUFJRSxRQUFRLEdBQUd0WCxNQUFNLENBQUNxUixNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUV2UixJQUFJLENBQUM7UUFDdEMsS0FBSyxJQUFJeVgsQ0FBQyxJQUFJRixhQUFhLEVBQUU7VUFDM0JDLFFBQVEsQ0FBQ0MsQ0FBQyxDQUFDLEdBQUdGLGFBQWEsQ0FBQ0UsQ0FBQyxDQUFDO1FBQ2hDO1FBQ0EsT0FBT0QsUUFBUSxDQUFDSixlQUFlO1FBQy9CSSxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUd6QyxRQUFRLENBQUNzQyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQzdDLElBQUksQ0FBQ0wsTUFBTSxDQUFDM0ksSUFBSSxDQUFDLElBQUlpSSxTQUFTLENBQUNrQixRQUFRLENBQUMsQ0FBQztNQUMzQztJQUNGO0lBQ0EsSUFBSSxDQUFDelcsVUFBVSxHQUFHMlcsUUFBUSxDQUFDLElBQUksQ0FBQ2hGLEtBQUssQ0FBQztJQUN0QyxLQUFLLElBQUl6RyxHQUFHLElBQUksSUFBSSxDQUFDbEwsVUFBVSxFQUFFO01BQy9CLElBQUksQ0FBQ2tMLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQ2xMLFVBQVUsQ0FBQ2tMLEdBQUcsQ0FBQztJQUNsQztJQUNBLElBQUksQ0FBQzZLLFFBQVEsR0FBRyxJQUFJLENBQUNwRSxLQUFLLENBQUNvRSxRQUFRLElBQUksSUFBSTtJQUMzQyxJQUFJLENBQUNwTyxXQUFXLEdBQUcsSUFBSSxDQUFDZ0ssS0FBSyxDQUFDaEssV0FBVztJQUN6QyxJQUFJLENBQUN6SCxVQUFVLEdBQUcsSUFBSSxDQUFDeVIsS0FBSyxDQUFDaEssV0FBVyxDQUFDLENBQUMsQ0FBQztJQUMzQ3hJLE1BQU0sQ0FBQ3lFLE1BQU0sQ0FBQyxJQUFJLENBQUM7RUFDckI7RUFBQyxPQUFBZ1AsOEVBQUEsQ0FBQTJDLFNBQUE7SUFBQXJLLEdBQUE7SUFBQWxHLEtBQUEsRUFFRCxTQUFBaVAsT0FBT0EsQ0FBQ3FDLE9BQU8sRUFBRTtNQUNmLElBQUlBLE9BQU8sSUFBSUEsT0FBTyxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUNMLE1BQU0sRUFBRTtRQUNqRCxPQUFPLElBQUksQ0FBQ0EsTUFBTSxDQUFDSyxPQUFPLEdBQUcsQ0FBQyxDQUFDO01BQ2pDO01BQ0EsT0FBTyxJQUFJO0lBQ2I7RUFBQztJQUFBcEwsR0FBQTtJQUFBbEcsS0FBQSxFQUVELFNBQUE0UixXQUFXQSxDQUFBLEVBQUc7TUFDWixJQUFJQyxlQUFlLEdBQUczRyxhQUFhLEdBQUcsQ0FBQztRQUNyQzRHLENBQUMsR0FBRyxDQUFDLENBQUUsR0FBRyxHQUFHRCxlQUFlLEdBQUksSUFBSSxDQUFDbEYsS0FBSyxDQUFDOUIsT0FBTyxFQUFFRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzlEZ0gsQ0FBQyxHQUFHLENBQUMsQ0FBRSxHQUFHLEdBQUdGLGVBQWUsR0FBSSxJQUFJLENBQUNsRixLQUFLLENBQUM3QixPQUFPLEVBQUVDLE9BQU8sQ0FBQyxDQUFDLENBQUM7TUFDaEUsVUFBQWlILE1BQUEsQ0FBVUYsQ0FBQyxRQUFBRSxNQUFBLENBQUtELENBQUM7SUFDbkI7RUFBQztJQUFBN0wsR0FBQTtJQUFBbEcsS0FBQSxFQUVELFNBQUFpRSxTQUFTQSxDQUFBLEVBQUc7TUFDVixJQUFNZ08sS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDdFgsTUFBTSxDQUFDO01BQzNCLElBQUksSUFBSSxDQUFDb1csUUFBUSxFQUFFO1FBQ2pCa0IsS0FBSyxDQUFDM0osSUFBSSxDQUFDLElBQUksQ0FBQ3lJLFFBQVEsQ0FBQztNQUMzQjtNQUNBLE9BQU9rQixLQUFLLENBQUNELE1BQU0sQ0FBQyxJQUFJLENBQUNyUCxXQUFXLENBQUMsQ0FBQ2tMLE1BQU0sQ0FBQ3RMLE9BQU8sQ0FBQyxDQUFDc0gsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsRTtFQUFDO0FBQUE7QUFHSSxJQUFNL1AsU0FBUztFQUNwQjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsU0FBQUEsVUFBWXFCLEtBQUssRUFBRVYsSUFBSSxFQUFFQyxHQUFHLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFZ0QsWUFBWSxFQUFFQyxTQUFTLEVBQUU7SUFBQTZPLGlGQUFBLE9BQUE1UyxTQUFBO0lBQ3ZFLElBQUksQ0FBQ29ZLE1BQU0sR0FBRy9XLEtBQUs7SUFDbkIsSUFBSSxDQUFDZ1gsT0FBTyxHQUFHeFgsTUFBTTtJQUNyQixJQUFJLENBQUN5WCxLQUFLLEdBQUczWCxJQUFJO0lBQ2pCLElBQUksQ0FBQzRYLElBQUksR0FBRzNYLEdBQUc7SUFDZixJQUFJLENBQUM0WCxTQUFTLEdBQUcxWCxRQUFRO0lBRXpCLElBQUksQ0FBQ2lKLFNBQVMsR0FBRyxJQUFJLENBQUMwTyxVQUFVLENBQUMsQ0FBQztJQUNsQyxJQUFJLENBQUNoTyxRQUFRLEdBQUcsSUFBSSxDQUFDaU8sU0FBUyxDQUFDLENBQUM7SUFDaEMsSUFBSSxDQUFDL04sUUFBUSxHQUFHLElBQUksQ0FBQ2dPLFNBQVMsQ0FBQzVVLFNBQVMsQ0FBQztJQUN6QyxJQUFJLENBQUMrRyxPQUFPLEdBQUcsSUFBSSxDQUFDOE4sUUFBUSxDQUFDLENBQUM7SUFDOUIsSUFBSSxDQUFDelgsS0FBSyxHQUNSMkMsWUFBWSxLQUFLLElBQUksR0FBR3pDLEtBQUssQ0FBQzRWLFFBQVEsSUFBSTVWLEtBQUssQ0FBQ0QsVUFBVSxHQUFHLElBQUk7SUFDbkUsSUFBSSxDQUFDK0ksU0FBUyxHQUFHOUksS0FBSyxDQUFDOEksU0FBUyxDQUFDLENBQUM7SUFFbEM5SixNQUFNLENBQUN5RSxNQUFNLENBQUMsSUFBSSxDQUFDO0VBQ3JCO0VBQUMsT0FBQWdQLDhFQUFBLENBQUE5VCxTQUFBO0lBQUFvTSxHQUFBO0lBQUFsRyxLQUFBLEVBRUQsU0FBQXlHLFFBQVFBLENBQUEsRUFBRztNQUNULE9BQU8sSUFBSSxDQUFDeUwsTUFBTSxDQUFDakQsT0FBTyxDQUFDLElBQUksQ0FBQ21ELEtBQUssQ0FBQztJQUN4QztFQUFDO0lBQUFsTSxHQUFBO0lBQUFsRyxLQUFBLEVBRUQsU0FBQXVTLFVBQVVBLENBQUEsRUFBRztNQUNYLE9BQ0UsSUFBSSxDQUFDSSxTQUFTLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDUCxTQUFTO0lBRTlFO0VBQUM7SUFBQXBNLEdBQUE7SUFBQWxHLEtBQUEsRUFFRCxTQUFBd1MsU0FBU0EsQ0FBQSxFQUFHO01BQ1YsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUNILElBQUksRUFBRSxhQUFhLEdBQUcsSUFBSSxDQUFDUyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3RFO0VBQUM7SUFBQTVNLEdBQUE7SUFBQWxHLEtBQUEsRUFFRCxTQUFBeVMsU0FBU0EsQ0FBQzVVLFNBQVMsRUFBRTtNQUNuQixJQUFJNEcsUUFBUSxHQUFHLENBQUMsQ0FBQztNQUNqQixJQUFJLElBQUksQ0FBQ2tPLFNBQVMsQ0FBQyxDQUFDLEVBQUU7UUFDcEJsTyxRQUFRLEdBQUc7VUFDVHNPLGVBQWUsRUFBRSxNQUFNLEdBQUcsSUFBSSxDQUFDdE0sUUFBUSxDQUFDLENBQUMsQ0FBQ2tHLEtBQUssQ0FBQ3FHLFFBQVEsR0FBRyxHQUFHO1VBQzlEQyxjQUFjLEVBQUUsTUFBTTtVQUN0QnpWLEtBQUssRUFBRUssU0FBUyxHQUFHLElBQUk7VUFDdkJxVixNQUFNLEVBQUVyVixTQUFTLEdBQUc7UUFDdEIsQ0FBQztNQUNILENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQ2dWLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUNELFNBQVMsQ0FBQyxDQUFDLEVBQUU7UUFDaERuTyxRQUFRLEdBQUc7VUFDVDBPLGtCQUFrQixFQUFFLElBQUksQ0FBQzFNLFFBQVEsQ0FBQyxDQUFDLENBQUNtTCxXQUFXLENBQUM7UUFDbEQsQ0FBQztNQUNIO01BQ0EsSUFBSS9ULFNBQVMsRUFBRTtRQUNiLElBQUksSUFBSSxDQUFDK1UsU0FBUyxDQUFDLENBQUMsRUFBRTtVQUNwQjtVQUNBbk8sUUFBUSxHQUFHdEssTUFBTSxDQUFDcVIsTUFBTSxDQUFDL0csUUFBUSxFQUFFO1lBQ2pDO1lBQ0E7WUFDQTtZQUNBMk8sUUFBUSxFQUFFakwsSUFBSSxDQUFDa0wsS0FBSyxDQUFDeFYsU0FBUyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUc7VUFDckQsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxNQUFNO1VBQ0w7VUFDQTRHLFFBQVEsR0FBR3RLLE1BQU0sQ0FBQ3FSLE1BQU0sQ0FBQy9HLFFBQVEsRUFBRTtZQUNqQ2pILEtBQUssRUFBRUssU0FBUyxHQUFHLElBQUk7WUFDdkJxVixNQUFNLEVBQUVyVixTQUFTLEdBQUc7VUFDdEIsQ0FBQyxDQUFDO1FBQ0o7TUFDRjtNQUNBLE9BQU80RyxRQUFRO0lBQ2pCO0VBQUM7SUFBQXlCLEdBQUE7SUFBQWxHLEtBQUEsRUFFRCxTQUFBMFMsUUFBUUEsQ0FBQSxFQUFHO01BQ1QsSUFBSSxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxFQUFFO01BQ1g7TUFDQSxJQUFJLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUMsRUFBRTtRQUNwQixPQUFPLElBQUksQ0FBQ25NLFFBQVEsQ0FBQyxDQUFDLENBQUM5TCxNQUFNO01BQy9CO01BQ0EsSUFBSSxJQUFJLENBQUNrWSxTQUFTLENBQUMsQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sRUFBRTtNQUNYO01BQ0EsT0FBTyxJQUFJLENBQUNQLFNBQVMsR0FBRyxJQUFJLENBQUNBLFNBQVMsQ0FBQyxJQUFJLENBQUM3TCxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSTtJQUNoRTtFQUFDO0lBQUFQLEdBQUE7SUFBQWxHLEtBQUEsRUFFRCxTQUFBNFMsU0FBU0EsQ0FBQSxFQUFHO01BQ1YsT0FBTyxJQUFJLENBQUNULE9BQU87SUFDckI7RUFBQztJQUFBak0sR0FBQTtJQUFBbEcsS0FBQSxFQUVELFNBQUEyUyxTQUFTQSxDQUFBLEVBQUc7TUFDVixPQUFPLElBQUksQ0FBQ2xNLFFBQVEsQ0FBQyxDQUFDLENBQUN0SixNQUFNO0lBQy9CO0VBQUM7SUFBQStJLEdBQUE7SUFBQWxHLEtBQUEsRUFFRCxTQUFBNlMsU0FBU0EsQ0FBQSxFQUFHO01BQ1YsSUFBSSxDQUFDLElBQUksQ0FBQ3BNLFFBQVEsQ0FBQyxDQUFDLENBQUNrRyxLQUFLLEVBQUU7UUFDMUI7UUFDQSxPQUFPLEtBQUs7TUFDZDtNQUNBLElBQU0yRyxRQUFRLEdBQUcsSUFBSSxDQUFDN00sUUFBUSxDQUFDLENBQUMsQ0FBQ2tHLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDMEYsSUFBSSxDQUFDO01BQzlELElBQUlpQixRQUFRLEtBQUtuSCxTQUFTLEVBQUU7UUFDMUI7UUFDQTtRQUNBO1FBQ0E7UUFDQSxPQUFPLElBQUk7TUFDYjtNQUNBO01BQ0E7TUFDQTtNQUNBLE9BQU9tSCxRQUFRO0lBQ2pCO0VBQUM7SUFBQXBOLEdBQUE7SUFBQWxHLEtBQUEsRUFFRCxTQUFBOFMsVUFBVUEsQ0FBQSxFQUFHO01BQ1gsSUFBSSxJQUFJLENBQUNILFNBQVMsQ0FBQyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxRQUFRO01BQ2pCO01BQ0EsSUFBSSxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxRQUFRO01BQ2pCO01BQ0EsSUFBSSxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxPQUFPO01BQ2hCO01BQ0EsT0FBTyxVQUFVO0lBQ25CO0VBQUM7QUFBQTtBQUdJLFNBQVNsQixRQUFRQSxDQUFDeFcsS0FBSyxFQUFFO0VBQzlCLElBQ0l1RyxJQUFJLEdBUUZ2RyxLQUFLLENBUlB1RyxJQUFJO0lBQ0ppQixXQUFXLEdBT1R4SCxLQUFLLENBUFB3SCxXQUFXO0lBQ1g0USxTQUFTLEdBTVBwWSxLQUFLLENBTlBvWSxTQUFTO0lBQ1RsQyxlQUFlLEdBS2JsVyxLQUFLLENBTFBrVyxlQUFlO0lBQ2Z4TyxTQUFTLEdBSVAxSCxLQUFLLENBSlAwSCxTQUFTO0lBQ1Q2RixPQUFPLEdBR0x2TixLQUFLLENBSFB1TixPQUFPO0lBQ1B2TCxNQUFNLEdBRUpoQyxLQUFLLENBRlBnQyxNQUFNO0lBQ042VixRQUFRLEdBQ043WCxLQUFLLENBRFA2WCxRQUFRO0lBRVZ2UixFQUFFLEdBQUd0RyxLQUFLLENBQUNzRyxFQUFFLElBQUlrQixXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQy9CNlEsTUFBTSxPQUFBeEIsTUFBQSxDQUFPdlEsRUFBRTtFQUVqQixJQUFJdEUsTUFBTSxFQUFFO0lBQ1YsT0FBTztNQUNMc0UsRUFBRSxFQUFGQSxFQUFFO01BQ0ZDLElBQUksRUFBSkEsSUFBSTtNQUNKOFIsTUFBTSxFQUFOQSxNQUFNO01BQ04zUSxTQUFTLEVBQVRBLFNBQVM7TUFDVDFGLE1BQU0sRUFBTkEsTUFBTTtNQUNONlYsUUFBUSxFQUFSQTtJQUNGLENBQUM7RUFDSDtFQUVBLElBQUlPLFNBQVMsRUFBRTtJQUNiQyxNQUFNLGtCQUFBeEIsTUFBQSxDQUFrQnVCLFNBQVMsTUFBRztFQUN0QztFQUVBLE9BQU87SUFDTDlSLEVBQUUsRUFBRkEsRUFBRTtJQUNGQyxJQUFJLEVBQUpBLElBQUk7SUFDSjhSLE1BQU0sRUFBTkEsTUFBTTtJQUNOM1EsU0FBUyxFQUFUQSxTQUFTO0lBQ1Q2RixPQUFPLEVBQUVBLE9BQU8sQ0FBQ2tCLFdBQVcsQ0FBQyxDQUFDO0lBQzlCblAsSUFBSSxFQUFFOFksU0FBUyxLQUFLbEMsZUFBZSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDL0MxVyxNQUFNLEVBQUVzUSx1REFBZSxDQUFDdkMsT0FBTztFQUNqQyxDQUFDO0FBQ0gsQzs7Ozs7Ozs7Ozs7OztBQ3R2QjJCO0FBRTNCLElBQU0rSyxRQUFRLEdBQUcsQ0FDZixJQUFJLEVBQ0osVUFBVSxFQUNWLGVBQWUsRUFDZixZQUFZLEVBQ1osVUFBVSxFQUNWLDhCQUE4QixFQUM5QixhQUFhLEVBQ2IsS0FBSyxFQUNMLFFBQVEsRUFDUixjQUFjLEVBQ2QsVUFBVSxFQUNWLE9BQU8sRUFDUCxLQUFLLEVBQ0wsWUFBWSxFQUNaLE9BQU8sRUFDUCxRQUFRLENBQ1Q7QUFFRCxJQUFJN1gsVUFBVSxFQUFFOFgsV0FBVztBQUMzQixJQUFJQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBRWpCLFNBQVNDLElBQUlBLENBQUEsRUFBRztFQUNkRixXQUFXLEdBQUcsSUFBSTtFQUNsQjlYLFVBQVUsR0FBR0QsOENBQUssQ0FBQzBCLEdBQUcsQ0FBQyxZQUFZLENBQUM7QUFDdEM7QUFFQSxTQUFTb0QsR0FBR0EsQ0FBQ3RGLEtBQUssRUFBRTtFQUNsQixJQUFJLENBQUN1WSxXQUFXLEVBQUVFLElBQUksQ0FBQyxDQUFDO0VBQ3hCLElBQU1uUyxFQUFFLEdBQUt0RyxLQUFLLENBQVpzRyxFQUFFO0VBRVI3RixVQUFVLEtBQUtBLFVBQVUsR0FBRytYLFFBQVEsQ0FBQztFQUNyQy9YLFVBQVUsQ0FBQzZGLEVBQUUsQ0FBQyxLQUFLN0YsVUFBVSxDQUFDNkYsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ3RDN0YsVUFBVSxDQUFDNkYsRUFBRSxDQUFDLElBQUksQ0FBQztFQUVuQjlGLDhDQUFLLENBQUNqQixHQUFHLENBQUMsTUFBTSxFQUFFK0csRUFBRSxDQUFDO0VBQ3JCOUYsOENBQUssQ0FBQ2pCLEdBQUcsQ0FBQyxZQUFZLEVBQUVrQixVQUFVLENBQUM7QUFDckM7QUFFQSxTQUFTeUIsR0FBR0EsQ0FBQ3dXLFNBQVMsRUFBRTtFQUN0QixJQUFJLENBQUNILFdBQVcsRUFBRUUsSUFBSSxDQUFDLENBQUM7RUFDeEIsSUFBSSxDQUFDaFksVUFBVSxFQUFFO0lBQ2YrWCxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBRWIsSUFBTTNMLE1BQU0sR0FBRyxFQUFFO0lBRWpCLElBQUk4TCxhQUFhLEdBQUczTCxJQUFJLENBQUM0TCxHQUFHLENBQUNGLFNBQVMsRUFBRUosUUFBUSxDQUFDelIsTUFBTSxDQUFDO0lBQ3hELEtBQUssSUFBSWdTLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsYUFBYSxFQUFFRSxDQUFDLEVBQUUsRUFBRTtNQUN0Q0wsUUFBUSxDQUFDRixRQUFRLENBQUNPLENBQUMsQ0FBQyxDQUFDLEdBQUdoRixRQUFRLENBQUMsQ0FBQzhFLGFBQWEsR0FBR0UsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDO01BQ2pFaE0sTUFBTSxDQUFDTSxJQUFJLENBQUNtTCxRQUFRLENBQUNPLENBQUMsQ0FBQyxDQUFDO0lBQzFCO0lBRUEsT0FBT2hNLE1BQU07RUFDZjtFQUVBLElBQU1pTSxRQUFRLEdBQUdKLFNBQVM7RUFDMUIsSUFBTUssY0FBYyxHQUFHLEVBQUU7RUFFekIsS0FBSyxJQUFJaE8sR0FBRyxJQUFJdEssVUFBVSxFQUFFO0lBQzFCLElBQUlBLFVBQVUsQ0FBQ2dRLGNBQWMsQ0FBQzFGLEdBQUcsQ0FBQyxFQUFFO01BQ2xDZ08sY0FBYyxDQUFDNUwsSUFBSSxDQUFDcEMsR0FBRyxDQUFDO0lBQzFCO0VBQ0Y7RUFFQSxJQUFNaU8sTUFBTSxHQUFHRCxjQUFjLENBQzFCbEcsSUFBSSxDQUFDLFVBQUNDLENBQUMsRUFBRUMsQ0FBQztJQUFBLE9BQUt0UyxVQUFVLENBQUNxUyxDQUFDLENBQUMsR0FBR3JTLFVBQVUsQ0FBQ3NTLENBQUMsQ0FBQztFQUFBLEVBQUMsQ0FDN0NrRyxPQUFPLENBQUMsQ0FBQztFQUNaLElBQU1DLE1BQU0sR0FBR0YsTUFBTSxDQUFDN0QsS0FBSyxDQUFDLENBQUMsRUFBRTJELFFBQVEsQ0FBQztFQUV4QyxJQUFNSyxJQUFJLEdBQUczWSw4Q0FBSyxDQUFDMEIsR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUU5QixJQUFJaVgsSUFBSSxJQUFJRCxNQUFNLENBQUN0TixPQUFPLENBQUN1TixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtJQUN0Q0QsTUFBTSxDQUFDRSxHQUFHLENBQUMsQ0FBQztJQUNaRixNQUFNLENBQUMvTCxJQUFJLENBQUNnTSxJQUFJLENBQUM7RUFDbkI7RUFFQSxPQUFPRCxNQUFNO0FBQ2Y7QUFFQSwrREFBZTtFQUFFNVQsR0FBRyxFQUFIQSxHQUFHO0VBQUVwRCxHQUFHLEVBQUhBO0FBQUksQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZ1QztBQUVsRSxTQUFTNE4sZUFBZUEsQ0FBQ3ZDLE9BQU8sRUFBRTtFQUNoQyxJQUFJOEwsUUFBUSxHQUFHOUwsT0FBTyxDQUFDYSxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQy9Ca0wsVUFBVSxHQUFHRCxRQUFRLENBQUNyUyxHQUFHLENBQUMsVUFBQ3VTLENBQUM7TUFBQSxZQUFBMUMsTUFBQSxDQUFVMEMsQ0FBQztJQUFBLENBQUUsQ0FBQztFQUU1QyxPQUFPL00sc0VBQW1CLENBQUNSLEtBQUssQ0FBQyxJQUFJLEVBQUVzTixVQUFVLENBQUM7QUFDcEQ7QUFFQSxTQUFTRSxJQUFJQSxDQUFDQyxHQUFHLEVBQUU7RUFDakIsT0FBT0EsR0FBRyxDQUFDQyxNQUFNLENBQUMsVUFBQ0MsR0FBRyxFQUFFaEgsSUFBSSxFQUFLO0lBQy9CLElBQUlnSCxHQUFHLENBQUMvTixPQUFPLENBQUMrRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtNQUM1QmdILEdBQUcsQ0FBQ3hNLElBQUksQ0FBQ3dGLElBQUksQ0FBQztJQUNoQjtJQUNBLE9BQU9nSCxHQUFHO0VBQ1osQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUNSO0FBRUEsU0FBUzlKLFNBQVNBLENBQUNpRCxDQUFDLEVBQUVDLENBQUMsRUFBRTtFQUN2QixJQUFNNkcsS0FBSyxHQUFHSixJQUFJLENBQUMxRyxDQUFDLENBQUM7RUFDckIsSUFBTStHLEtBQUssR0FBR0wsSUFBSSxDQUFDekcsQ0FBQyxDQUFDO0VBRXJCLE9BQU82RyxLQUFLLENBQUNsSCxNQUFNLENBQUMsVUFBQ0MsSUFBSTtJQUFBLE9BQUtrSCxLQUFLLENBQUNqTyxPQUFPLENBQUMrRyxJQUFJLENBQUMsSUFBSSxDQUFDO0VBQUEsRUFBQztBQUN6RDtBQUVBLFNBQVNqUyxTQUFTQSxDQUFDb1MsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7RUFDdkIsSUFBSStHLENBQUMsR0FBRyxDQUFDLENBQUM7RUFFVixLQUFLLElBQUkvTyxHQUFHLElBQUkrSCxDQUFDLEVBQUU7SUFDakIsSUFBSWlILGFBQWEsR0FBR2pILENBQUMsQ0FBQy9ILEdBQUcsQ0FBQztNQUN4QmxHLEtBQUssR0FBR2tWLGFBQWE7SUFFdkIsSUFBSS9hLE1BQU0sQ0FBQ2diLFNBQVMsQ0FBQ3ZKLGNBQWMsQ0FBQ3dKLElBQUksQ0FBQ2xILENBQUMsRUFBRWhJLEdBQUcsQ0FBQyxFQUFFO01BQ2hEbEcsS0FBSyxHQUFHa08sQ0FBQyxDQUFDaEksR0FBRyxDQUFDO0lBQ2hCO0lBRUEsSUFBSXFFLHlFQUFBLENBQU92SyxLQUFLLE1BQUssUUFBUSxFQUFFO01BQzdCQSxLQUFLLEdBQUduRSxTQUFTLENBQUNxWixhQUFhLEVBQUVsVixLQUFLLENBQUM7SUFDekM7SUFFQWlWLENBQUMsQ0FBQy9PLEdBQUcsQ0FBQyxHQUFHbEcsS0FBSztFQUNoQjtFQUVBLE9BQU9pVixDQUFDO0FBQ1Y7O0FBRUE7QUFDQSxTQUFTblosZ0JBQWdCQSxDQUFBLEVBQUc7RUFDMUIsSUFBSSxPQUFPdVosUUFBUSxJQUFJLFdBQVcsRUFBRSxPQUFPLENBQUM7RUFDNUMsSUFBTUMsR0FBRyxHQUFHRCxRQUFRLENBQUNFLGFBQWEsQ0FBQyxLQUFLLENBQUM7RUFFekNELEdBQUcsQ0FBQzlRLEtBQUssQ0FBQ2hILEtBQUssR0FBRyxPQUFPO0VBQ3pCOFgsR0FBRyxDQUFDOVEsS0FBSyxDQUFDME8sTUFBTSxHQUFHLE9BQU87RUFDMUJvQyxHQUFHLENBQUM5USxLQUFLLENBQUNnUixRQUFRLEdBQUcsUUFBUTtFQUM3QkYsR0FBRyxDQUFDOVEsS0FBSyxDQUFDaVIsUUFBUSxHQUFHLFVBQVU7RUFDL0JILEdBQUcsQ0FBQzlRLEtBQUssQ0FBQ2tSLEdBQUcsR0FBRyxTQUFTO0VBRXpCTCxRQUFRLENBQUNNLElBQUksQ0FBQ0MsV0FBVyxDQUFDTixHQUFHLENBQUM7RUFDOUIsSUFBTU8sY0FBYyxHQUFHUCxHQUFHLENBQUNRLFdBQVcsR0FBR1IsR0FBRyxDQUFDUyxXQUFXO0VBQ3hEVixRQUFRLENBQUNNLElBQUksQ0FBQ0ssV0FBVyxDQUFDVixHQUFHLENBQUM7RUFFOUIsT0FBT08sY0FBYztBQUN2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlETyxJQUFNN1osVUFBVTtFQUNyQixTQUFBQSxXQUFZaWEsZUFBZSxFQUFFO0lBQUEsSUFBQUMsaUJBQUE7SUFBQXhKLGlGQUFBLE9BQUExUSxVQUFBO0lBQzNCLElBQUksQ0FBQzBILEdBQUcsR0FBR3VTLGVBQWU7SUFDMUIsSUFBSSxDQUFDdEosS0FBSyxHQUFHc0osZUFBZSxDQUFDaGMsSUFBSTtJQUNqQyxJQUFJLENBQUNrYyxRQUFRLEdBQUdGLGVBQWUsQ0FBQ3hYLE9BQU87SUFFdkMsSUFBSSxDQUFDOE8sV0FBVyxHQUFHLEVBQUU7SUFDckIsQ0FBQTJJLGlCQUFBLE9BQUksQ0FBQzNJLFdBQVcsRUFBQ2pGLElBQUksQ0FBQW5CLEtBQUEsQ0FBQStPLGlCQUFBLEVBQUFFLG9GQUFBLENBQUksSUFBSSxDQUFDekosS0FBSyxDQUFDblEsVUFBVSxDQUFDLENBQUMsRUFBQztJQUNqRCxJQUFJLENBQUMrUSxXQUFXLEdBQUcsSUFBSSxDQUFDQSxXQUFXLENBQUNNLE1BQU0sQ0FBQyxVQUFDL04sUUFBUSxFQUFLO01BQ3ZELE9BQU9BLFFBQVEsQ0FBQzZCLE1BQU0sQ0FBQ0ssTUFBTSxHQUFHLENBQUM7SUFDbkMsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDdUwsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDOEksS0FBSyxHQUFHLElBQUk7SUFDaENsYyxNQUFNLENBQUN5RSxNQUFNLENBQUMsSUFBSSxDQUFDMk8sV0FBVyxDQUFDO0lBRS9CLElBQUksQ0FBQ2pNLGNBQWMsR0FBRyxJQUFJLENBQUNpTSxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLElBQUksQ0FBQ25PLFlBQVksR0FBRyxJQUFJOztJQUV4QjtJQUNBO0lBQ0EsSUFBSSxDQUFDckIsWUFBWSxHQUFHLElBQUk7SUFDeEI7SUFDQTtJQUNBO0lBQ0EsSUFBSSxDQUFDdVksdUJBQXVCLEdBQUcsQ0FBQztJQUNoQyxJQUFJLENBQUNsVyxlQUFlLEdBQUcsQ0FBQyxDQUFDO0VBQzNCO0VBQUMsT0FBQXdOLDhFQUFBLENBQUE1UixVQUFBO0lBQUFrSyxHQUFBO0lBQUFsRyxLQUFBLEVBRUQsU0FBQVQsUUFBUUEsQ0FBQSxFQUFHO01BQ1QsSUFBTWdYLGFBQWEsR0FBRyxJQUFJLENBQUM3UyxHQUFHLENBQUMxQyxLQUFLLENBQUM0RSxNQUFNO01BRTNDLElBQUksQ0FBQzJRLGFBQWEsRUFBRTtRQUNsQjtRQUNBO1FBQ0E7UUFDQTtNQUNGO01BRUEsSUFBTUMsU0FBUyxHQUFHRCxhQUFhLENBQUNDLFNBQVM7TUFFekMsSUFBSWxWLGNBQWMsR0FBRyxJQUFJLENBQUM1QyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7TUFDL0MsS0FBSyxJQUFJc1YsQ0FBQyxHQUFHLENBQUMsRUFBRXlDLENBQUMsR0FBRyxJQUFJLENBQUMvWCxrQkFBa0IsQ0FBQ3NELE1BQU0sRUFBRWdTLENBQUMsR0FBR3lDLENBQUMsRUFBRXpDLENBQUMsRUFBRSxFQUFFO1FBQzlELElBQUlsVSxRQUFRLEdBQUcsSUFBSSxDQUFDcEIsa0JBQWtCLENBQUNzVixDQUFDLENBQUM7UUFDekMsSUFBSWpULFNBQVMsR0FBRyxJQUFJLENBQUMyQyxHQUFHLENBQUM3QyxvQkFBb0IsQ0FBQ21ULENBQUMsQ0FBQztRQUNoRDtRQUNBO1FBQ0EsSUFBSWpULFNBQVMsSUFBSUEsU0FBUyxDQUFDb0MsR0FBRyxDQUFDdVQsU0FBUyxHQUFHLEVBQUUsR0FBR0YsU0FBUyxFQUFFO1VBQ3pEO1FBQ0Y7UUFDQWxWLGNBQWMsR0FBR3hCLFFBQVE7TUFDM0I7TUFDQSxJQUFJLENBQUN3QixjQUFjLEdBQUdBLGNBQWM7SUFDdEM7RUFBQztJQUFBNEUsR0FBQTtJQUFBN0ksR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBb0I7TUFDbEIsT0FBTyxJQUFJLENBQUNrUSxXQUFXO0lBQ3pCO0VBQUM7SUFBQXJILEdBQUE7SUFBQTdJLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQXlCO01BQ3ZCLElBQUksSUFBSSxDQUFDK0IsWUFBWSxFQUFFO1FBQ3JCLE9BQU8sQ0FDTDtVQUNFcUMsRUFBRSxFQUFFLFFBQVE7VUFDWkMsSUFBSSxFQUFFLFFBQVE7VUFDZEMsTUFBTSxFQUFFLElBQUksQ0FBQ3ZDO1FBQ2YsQ0FBQyxDQUNGO01BQ0g7TUFDQSxPQUFPLElBQUksQ0FBQ21PLFdBQVcsQ0FBQ00sTUFBTSxDQUFDLFVBQUMvTixRQUFRLEVBQUs7UUFDM0MsSUFBSTZXLFNBQVMsR0FBRzdXLFFBQVEsQ0FBQzZCLE1BQU0sQ0FBQ0ssTUFBTSxHQUFHLENBQUM7UUFDMUMsT0FBTzJVLFNBQVM7TUFDbEIsQ0FBQyxDQUFDO0lBQ0o7RUFBQztJQUFBelEsR0FBQTtJQUFBN0ksR0FBQSxFQUVELFNBQUFBLElBQUEsRUFBMkI7TUFDekIsSUFBSSxJQUFJLENBQUNpWix1QkFBdUIsSUFBSSxDQUFDLEVBQUU7UUFDckMsT0FBTyxJQUFJLENBQUM1WCxrQkFBa0IsQ0FBQyxJQUFJLENBQUM0WCx1QkFBdUIsQ0FBQztNQUM5RDtNQUNBLE9BQU8sSUFBSTtJQUNiO0VBQUM7SUFBQXBRLEdBQUE7SUFBQWxHLEtBQUEsRUFFRCxTQUFBSCxhQUFhQSxDQUFDQyxRQUFRLEVBQUU7TUFBQSxJQUFBb0MsS0FBQTtNQUN0QixJQUFJLElBQUksQ0FBQzlDLFlBQVksRUFBRTtRQUNyQjtRQUNBO01BQ0Y7TUFDQSxJQUFJNFUsQ0FBQyxHQUFHLElBQUksQ0FBQ3RWLGtCQUFrQixDQUFDcUksT0FBTyxDQUFDakgsUUFBUSxDQUFDO01BQ2pELElBQUlpQixTQUFTLEdBQUcsSUFBSSxDQUFDMkMsR0FBRyxDQUFDN0Msb0JBQW9CLENBQUNtVCxDQUFDLENBQUM7TUFDaEQsSUFBSTRDLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUEsRUFBUztRQUM1QixJQUFJN1YsU0FBUyxFQUFFO1VBQ2IsSUFBSTJVLEdBQUcsR0FBRzNVLFNBQVMsQ0FBQ29DLEdBQUcsQ0FBQ3VULFNBQVM7VUFDakMsSUFBSTVXLFFBQVEsQ0FBQ3VXLEtBQUssRUFBRTtZQUNsQlgsR0FBRyxHQUFHLENBQUM7VUFDVDtVQUNBeFQsS0FBSSxDQUFDd0IsR0FBRyxDQUFDMUMsS0FBSyxDQUFDNEUsTUFBTSxDQUFDNFEsU0FBUyxHQUFHZCxHQUFHO1FBQ3ZDO01BQ0YsQ0FBQztNQUNELElBQUksSUFBSSxDQUFDaFMsR0FBRyxDQUFDbEUsY0FBYyxFQUFFO1FBQzNCb1gsaUJBQWlCLENBQUMsQ0FBQztNQUNyQixDQUFDLE1BQU07UUFDTCxJQUFJLENBQUN0VixjQUFjLEdBQUcsSUFBSSxDQUFDNUMsa0JBQWtCLENBQUNzVixDQUFDLENBQUM7TUFDbEQ7SUFDRjtFQUFDO0lBQUE5TixHQUFBO0lBQUFsRyxLQUFBLEVBRUQsU0FBQUQsUUFBUUEsQ0FBQ0MsS0FBSyxFQUFFO01BQ2QsSUFBSTJCLE1BQU0sR0FBRyxJQUFJLENBQUNnTCxLQUFLLENBQUNyUSxNQUFNLENBQUMwRCxLQUFLLEVBQUUsSUFBSSxDQUFDNlcsZ0JBQWdCLENBQUM7TUFDNUQsSUFBSSxDQUFDelgsWUFBWSxHQUFHdUMsTUFBTTtNQUUxQixJQUFJLENBQUMyVSx1QkFBdUIsR0FBRyxDQUFDO01BQ2hDLElBQUksQ0FBQ2xXLGVBQWUsR0FBRyxDQUFDO01BQ3hCLElBQUksQ0FBQzBXLGtCQUFrQixDQUFDLENBQUM7SUFDM0I7RUFBQztJQUFBNVEsR0FBQTtJQUFBbEcsS0FBQSxFQUVELFNBQUE3QixZQUFZQSxDQUFDaEQsS0FBSyxFQUFFO01BQ2xCLElBQUksQ0FBQzRDLFlBQVksR0FBRzVDLEtBQUs7TUFDekIsSUFBSSxDQUFDaUYsZUFBZSxHQUFHLENBQUMsQ0FBQztNQUN6QixJQUFJLENBQUNrVyx1QkFBdUIsR0FBRyxDQUFDLENBQUM7SUFDbkM7RUFBQztJQUFBcFEsR0FBQTtJQUFBbEcsS0FBQSxFQUVELFNBQUExQixZQUFZQSxDQUFDbkQsS0FBSyxFQUFFO01BQ2xCLElBQUksQ0FBQzRDLFlBQVksR0FBRyxJQUFJO0lBQzFCO0VBQUM7SUFBQW1JLEdBQUE7SUFBQWxHLEtBQUEsRUFFRCxTQUFBQyxXQUFXQSxDQUFBLEVBQUc7TUFDWjtNQUNBLElBQUksSUFBSSxDQUFDRyxlQUFlLEdBQUcsQ0FBQyxFQUFFO1FBQzVCLElBQUksQ0FBQ0EsZUFBZSxJQUFJLENBQUM7TUFDM0IsQ0FBQyxNQUFNO1FBQ0w7UUFDQSxJQUFJLENBQUNrVyx1QkFBdUIsSUFBSSxDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDQSx1QkFBdUIsR0FBRyxDQUFDLEVBQUU7VUFDcEM7VUFDQSxJQUFJLENBQUNBLHVCQUF1QixHQUFHLENBQUM7UUFDbEMsQ0FBQyxNQUFNO1VBQ0w7VUFDQTtVQUNBLElBQUksQ0FBQ2xXLGVBQWUsR0FDbEIsSUFBSSxDQUFDMUIsa0JBQWtCLENBQUMsSUFBSSxDQUFDNFgsdUJBQXVCLENBQUMsQ0FBQzNVLE1BQU0sQ0FBQ0ssTUFBTSxHQUNuRSxDQUFDO1FBQ0w7TUFDRjtNQUNBLElBQUksQ0FBQzhVLGtCQUFrQixDQUFDLENBQUM7SUFDM0I7RUFBQztJQUFBNVEsR0FBQTtJQUFBbEcsS0FBQSxFQUVELFNBQUFNLFlBQVlBLENBQUEsRUFBRztNQUNiLElBQ0UsSUFBSSxDQUFDRixlQUFlLEdBQ3BCLElBQUksQ0FBQzJXLFlBQVksQ0FBQyxJQUFJLENBQUNULHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxFQUNuRDtRQUNBO1FBQ0EsSUFBSSxDQUFDbFcsZUFBZSxJQUFJLENBQUM7TUFDM0IsQ0FBQyxNQUFNO1FBQ0w7UUFDQSxJQUFJLENBQUNrVyx1QkFBdUIsSUFBSSxDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDQSx1QkFBdUIsSUFBSSxJQUFJLENBQUM1WCxrQkFBa0IsQ0FBQ3NELE1BQU0sRUFBRTtVQUNsRTtVQUNBLElBQUksQ0FBQ3NVLHVCQUF1QixHQUFHLElBQUksQ0FBQzVYLGtCQUFrQixDQUFDc0QsTUFBTSxHQUFHLENBQUM7UUFDbkUsQ0FBQyxNQUFNO1VBQ0w7VUFDQTtVQUNBLElBQUksQ0FBQzVCLGVBQWUsR0FBRyxDQUFDO1FBQzFCO01BQ0Y7TUFDQSxJQUFJLENBQUMwVyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzNCO0VBQUM7SUFBQTVRLEdBQUE7SUFBQWxHLEtBQUEsRUFFRCxTQUFBTyxXQUFXQSxDQUFBLEVBQUc7TUFDWjtNQUNBO01BQ0EsSUFBSSxJQUFJLENBQUNILGVBQWUsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUM5QixPQUFPLElBQUksQ0FBQ0UsWUFBWSxDQUFDLENBQUM7TUFDNUI7TUFFQSxJQUFNMFcsY0FBYyxHQUNsQixJQUFJLENBQUN0WSxrQkFBa0IsQ0FBQyxJQUFJLENBQUM0WCx1QkFBdUIsQ0FBQyxDQUFDM1UsTUFBTSxDQUFDSyxNQUFNOztNQUVyRTtNQUNBO01BQ0EsSUFBSWlWLElBQUksR0FBRyxJQUFJLENBQUNkLFFBQVE7O01BRXhCO01BQ0E7TUFDQTtNQUNBOztNQUVBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTs7TUFFQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0EsSUFBSSxJQUFJLENBQUMvVixlQUFlLEdBQUc2VyxJQUFJLEdBQUdELGNBQWMsRUFBRTtRQUNoRDtRQUNBQyxJQUFJLEdBQUdELGNBQWMsR0FBRyxJQUFJLENBQUNiLFFBQVE7TUFDdkM7TUFDQSxLQUFLLElBQUluQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdpRCxJQUFJLEVBQUVqRCxDQUFDLEVBQUUsRUFBRTtRQUM3QixJQUFJLENBQUMxVCxZQUFZLENBQUMsQ0FBQztNQUNyQjtNQUNBLElBQUksQ0FBQ3dXLGtCQUFrQixDQUFDLENBQUM7SUFDM0I7RUFBQztJQUFBNVEsR0FBQTtJQUFBbEcsS0FBQSxFQUVELFNBQUFRLFNBQVNBLENBQUEsRUFBRztNQUNWO01BQ0E7TUFDQSxJQUFJeVcsSUFBSSxHQUFHLElBQUksQ0FBQ2QsUUFBUTtNQUV4QixJQUFJLElBQUksQ0FBQy9WLGVBQWUsR0FBRzZXLElBQUksR0FBRyxDQUFDLEVBQUU7UUFDbkMsSUFBSSxJQUFJLENBQUNYLHVCQUF1QixHQUFHLENBQUMsRUFBRTtVQUNwQztVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLElBQU1ZLHlCQUF5QixHQUM3QixJQUFJLENBQUN4WSxrQkFBa0IsQ0FBQyxJQUFJLENBQUM0WCx1QkFBdUIsR0FBRyxDQUFDLENBQUMsQ0FBQzNVLE1BQU0sQ0FDN0RLLE1BQU0sR0FBRyxJQUFJLENBQUNtVSxRQUFRO1VBQzNCO1VBQ0FjLElBQUksR0FBR0MseUJBQXlCO1FBQ2xDLENBQUMsTUFBTTtVQUNMRCxJQUFJLEdBQUcsQ0FBQztRQUNWO01BQ0Y7TUFDQSxLQUFLLElBQUlqRCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdpRCxJQUFJLEVBQUVqRCxDQUFDLEVBQUUsRUFBRTtRQUM3QixJQUFJLENBQUMvVCxXQUFXLENBQUMsQ0FBQztNQUNwQjtNQUNBLElBQUksQ0FBQzZXLGtCQUFrQixDQUFDLENBQUM7SUFDM0I7RUFBQztJQUFBNVEsR0FBQTtJQUFBbEcsS0FBQSxFQUVELFNBQUE4VyxrQkFBa0JBLENBQUEsRUFBRztNQUFBLElBQUF2SCxNQUFBO01BQ25CLElBQUksQ0FBQ3hSLFlBQVksR0FDZixJQUFJLENBQUNXLGtCQUFrQixDQUFDLElBQUksQ0FBQzRYLHVCQUF1QixDQUFDLENBQUMzVSxNQUFNLENBQzFELElBQUksQ0FBQ3ZCLGVBQWUsQ0FDckI7TUFFSCxJQUFJLENBQUNzRCxHQUFHLENBQUN5VCxTQUFTLENBQUMsWUFBTTtRQUN2QjtRQUNBLElBQU1DLFFBQVEsR0FBRzdILE1BQUksQ0FBQzdMLEdBQUcsQ0FBQzFDLEtBQUssQ0FBQzRFLE1BQU07O1FBRXRDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFNeVIsT0FBTyxHQUFHRCxRQUFRLENBQUNoVSxhQUFhLENBQUMsNEJBQTRCLENBQUM7UUFFcEUsSUFBTWtVLFlBQVksR0FBR0YsUUFBUSxDQUFDVixTQUFTLEdBQUdVLFFBQVEsQ0FBQ0csWUFBWTtRQUMvRCxJQUNFRixPQUFPLElBQ1BBLE9BQU8sQ0FBQ1gsU0FBUyxHQUFHVyxPQUFPLENBQUNFLFlBQVksR0FDdENELFlBQVksR0FBR0YsUUFBUSxDQUFDWixTQUFTLEVBQ25DO1VBQ0FZLFFBQVEsQ0FBQ1osU0FBUyxJQUFJYSxPQUFPLENBQUNFLFlBQVk7UUFDNUM7UUFDQSxJQUFJRixPQUFPLElBQUlBLE9BQU8sQ0FBQ1gsU0FBUyxHQUFHVSxRQUFRLENBQUNaLFNBQVMsRUFBRTtVQUNyRFksUUFBUSxDQUFDWixTQUFTLElBQUlhLE9BQU8sQ0FBQ0UsWUFBWTtRQUM1QztNQUNGLENBQUMsQ0FBQztJQUNKO0VBQUM7SUFBQXJSLEdBQUE7SUFBQWxHLEtBQUEsRUFFRCxTQUFBK1csWUFBWUEsQ0FBQ1MsV0FBVyxFQUFFO01BQ3hCLElBQUlBLFdBQVcsSUFBSSxDQUFDLENBQUMsRUFBRTtRQUNyQixPQUFPLENBQUM7TUFDVjtNQUNBLE9BQU8sSUFBSSxDQUFDOVksa0JBQWtCLENBQUM4WSxXQUFXLENBQUMsQ0FBQzdWLE1BQU0sQ0FBQ0ssTUFBTTtJQUMzRDtFQUFDO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7OztBQy9SSCxJQUFNbkksVUFBVSxHQUFHO0VBQ2pCYyxNQUFNLEVBQUU7SUFDTlQsSUFBSSxFQUFFcUksT0FBTztJQUNiaEIsT0FBTyxFQUFFO0VBQ1gsQ0FBQztFQUNEMUcsT0FBTyxFQUFFO0lBQ1BYLElBQUksRUFBRXFJLE9BQU87SUFDYmhCLE9BQU8sRUFBRTtFQUNYLENBQUM7RUFDRDNHLFFBQVEsRUFBRTtJQUNSVixJQUFJLEVBQUVzSTtFQUNSLENBQUM7RUFDRC9ILElBQUksRUFBRTtJQUNKUCxJQUFJLEVBQUVvSixNQUFNO0lBQ1ovQixPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0Q3RyxHQUFHLEVBQUU7SUFDSFIsSUFBSSxFQUFFa0gsTUFBTTtJQUNaRyxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0RwRyxLQUFLLEVBQUU7SUFDTGpCLElBQUksRUFBRSxDQUFDa0gsTUFBTSxFQUFFakgsTUFBTSxDQUFDO0lBQ3RCQyxRQUFRLEVBQUU7RUFDWixDQUFDO0VBQ0RVLElBQUksRUFBRTtJQUNKWixJQUFJLEVBQUVvSixNQUFNO0lBQ1ovQixPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0R1QyxHQUFHLEVBQUU7SUFDSDVKLElBQUksRUFBRWtILE1BQU07SUFDWkcsT0FBTyxFQUFFO0VBQ1g7QUFDRixDQUFDO0FBRUQsSUFBTXhGLFdBQVcsR0FBRztFQUNsQjBDLE9BQU8sRUFBRTtJQUNQdkUsSUFBSSxFQUFFb0osTUFBTTtJQUNaL0IsT0FBTyxFQUFFO0VBQ1gsQ0FBQztFQUNEc1YsZ0JBQWdCLEVBQUU7SUFDaEIzYyxJQUFJLEVBQUVvSixNQUFNO0lBQ1ovQixPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0QxRCxTQUFTLEVBQUU7SUFDVDNELElBQUksRUFBRW9KLE1BQU07SUFDWi9CLE9BQU8sRUFBRTtFQUNYLENBQUM7RUFDRHRHLEtBQUssRUFBRTtJQUNMZixJQUFJLEVBQUVrSCxNQUFNO0lBQ1pHLE9BQU8sRUFBRTtFQUNYLENBQUM7RUFDRHBHLEtBQUssRUFBRTtJQUNMakIsSUFBSSxFQUFFa0gsTUFBTTtJQUNaRyxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0RKLEtBQUssRUFBRTtJQUNMakgsSUFBSSxFQUFFa0gsTUFBTTtJQUNaRyxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0Q3RyxHQUFHLEVBQUU7SUFDSFIsSUFBSSxFQUFFa0gsTUFBTTtJQUNaRyxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0Q5RyxJQUFJLEVBQUU7SUFDSlAsSUFBSSxFQUFFb0osTUFBTTtJQUNaL0IsT0FBTyxFQUFFO0VBQ1gsQ0FBQztFQUNEakUsV0FBVyxFQUFFO0lBQ1hwRCxJQUFJLEVBQUVvSixNQUFNO0lBQ1ovQixPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0Q1RyxNQUFNLEVBQUU7SUFDTlQsSUFBSSxFQUFFcUksT0FBTztJQUNiaEIsT0FBTyxFQUFFO0VBQ1gsQ0FBQztFQUNEM0QsWUFBWSxFQUFFO0lBQ1oxRCxJQUFJLEVBQUVxSSxPQUFPO0lBQ2JoQixPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0R1QixTQUFTLEVBQUU7SUFDVDVJLElBQUksRUFBRXFJLE9BQU87SUFDYmhCLE9BQU8sRUFBRTtFQUNYLENBQUM7RUFDRDFDLElBQUksRUFBRTtJQUNKM0UsSUFBSSxFQUFFQyxNQUFNO0lBQ1pvSCxPQUFPLFdBQVBBLFFBQU9BLENBQUEsRUFBRztNQUNSLE9BQU8sQ0FBQyxDQUFDO0lBQ1g7RUFDRixDQUFDO0VBQ0Q2RSxXQUFXLEVBQUU7SUFDWGxNLElBQUksRUFBRXFJLE9BQU87SUFDYmhCLE9BQU8sRUFBRTtFQUNYLENBQUM7RUFDRDRELFVBQVUsRUFBRTtJQUNWakwsSUFBSSxFQUFFcUksT0FBTztJQUNiaEIsT0FBTyxFQUFFO0VBQ1gsQ0FBQztFQUNEeUQsY0FBYyxFQUFFO0lBQ2Q5SyxJQUFJLEVBQUVxSSxPQUFPO0lBQ2JoQixPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0RlLGFBQWEsRUFBRTtJQUNicEksSUFBSSxFQUFFcUksT0FBTztJQUNiaEIsT0FBTyxFQUFFO0VBQ1gsQ0FBQztFQUNEL0IsY0FBYyxFQUFFO0lBQ2R0RixJQUFJLEVBQUVxSSxPQUFPO0lBQ2JoQixPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0Q3RCxZQUFZLEVBQUU7SUFDWnhELElBQUksRUFBRUMsTUFBTTtJQUNab0gsT0FBTyxXQUFQQSxRQUFPQSxDQUFBLEVBQUc7TUFDUixPQUFPLENBQUMsQ0FBQztJQUNYO0VBQ0Y7QUFDRixDQUFDOzs7Ozs7Ozs7Ozs7O0FDbkhELElBQUlrVyxTQUFTLEdBQUcsWUFBWTtBQUU1QixJQUFNQyxLQUFLLEdBQUdDLElBQUk7QUFFbEIsSUFBSUMsdUJBQXVCLEdBQ3pCLE9BQU9sWSxNQUFNLEtBQUssV0FBVyxJQUFJLGNBQWMsSUFBSUEsTUFBTTtBQUUzRCxJQUFJbVksTUFBTTtBQUNWLElBQUlDLE1BQU07QUFFVixTQUFTQyxXQUFXQSxDQUFDQyxRQUFRLEVBQUU7RUFDN0JBLFFBQVEsS0FBS0EsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBRTNCSCxNQUFNLEdBQUdHLFFBQVEsQ0FBQ0gsTUFBTTtFQUN4QkMsTUFBTSxHQUFHRSxRQUFRLENBQUNGLE1BQU07QUFDMUI7QUFFQSxTQUFTRyxZQUFZQSxDQUFDQyxTQUFTLEVBQUU7RUFDL0JULFNBQVMsR0FBR1MsU0FBUztBQUN2QjtBQUVBLFNBQVN0WCxNQUFNQSxDQUFDdVgsS0FBSyxFQUFFO0VBQ3JCLEtBQUssSUFBSWpTLEdBQUcsSUFBSWlTLEtBQUssRUFBRTtJQUNyQixJQUFJblksS0FBSyxHQUFHbVksS0FBSyxDQUFDalMsR0FBRyxDQUFDO0lBQ3RCeEwsR0FBRyxDQUFDd0wsR0FBRyxFQUFFbEcsS0FBSyxDQUFDO0VBQ2pCO0FBQ0Y7QUFFQSxTQUFTdEYsR0FBR0EsQ0FBQ3dMLEdBQUcsRUFBRWxHLEtBQUssRUFBRTtFQUN2QixJQUFJOFgsTUFBTSxFQUFFO0lBQ1ZBLE1BQU0sQ0FBQzVSLEdBQUcsRUFBRWxHLEtBQUssQ0FBQztFQUNwQixDQUFDLE1BQU07SUFDTCxJQUFJLENBQUM0WCx1QkFBdUIsRUFBRTtJQUM5QixJQUFJO01BQ0ZsWSxNQUFNLENBQUMwWSxZQUFZLElBQUFwRyxNQUFBLENBQUl5RixTQUFTLE9BQUF6RixNQUFBLENBQUk5TCxHQUFHLEVBQUcsR0FBR3dSLEtBQUssQ0FBQ1csU0FBUyxDQUFDclksS0FBSyxDQUFDO0lBQ3JFLENBQUMsQ0FBQyxPQUFPakIsQ0FBQyxFQUFFLENBQUM7RUFDZjtBQUNGO0FBRUEsU0FBUzFCLEdBQUdBLENBQUM2SSxHQUFHLEVBQUU7RUFDaEIsSUFBSTJSLE1BQU0sRUFBRTtJQUNWLE9BQU9BLE1BQU0sQ0FBQzNSLEdBQUcsQ0FBQztFQUNwQixDQUFDLE1BQU07SUFDTCxJQUFJLENBQUMwUix1QkFBdUIsRUFBRTtJQUM5QixJQUFJO01BQ0YsSUFBSTVYLEtBQUssR0FBR04sTUFBTSxDQUFDMFksWUFBWSxJQUFBcEcsTUFBQSxDQUFJeUYsU0FBUyxPQUFBekYsTUFBQSxDQUFJOUwsR0FBRyxFQUFHO0lBQ3hELENBQUMsQ0FBQyxPQUFPbkgsQ0FBQyxFQUFFO01BQ1Y7SUFDRjtJQUVBLElBQUlpQixLQUFLLEVBQUU7TUFDVCxPQUFPMlgsSUFBSSxDQUFDVyxLQUFLLENBQUN0WSxLQUFLLENBQUM7SUFDMUI7RUFDRjtBQUNGO0FBRUEsK0RBQWU7RUFBRVksTUFBTSxFQUFOQSxNQUFNO0VBQUVsRyxHQUFHLEVBQUhBLEdBQUc7RUFBRTJDLEdBQUcsRUFBSEEsR0FBRztFQUFFNGEsWUFBWSxFQUFaQSxZQUFZO0VBQUVGLFdBQVcsRUFBWEE7QUFBWSxDQUFDLEU7Ozs7Ozs7Ozs7QUN4RDlEO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsSUFBSVEsaUJBQWlCLEdBQUcsT0FBTzdZLE1BQU0sS0FBSyxXQUFXO0FBRXJENlksaUJBQWlCLElBQ2QsWUFBWTtFQUNYLElBQUlDLFFBQVEsR0FBRyxDQUFDO0VBQ2hCLElBQUlDLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQztFQUUxQyxLQUFLLElBQUkzRyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUcyRyxPQUFPLENBQUN6VyxNQUFNLElBQUksQ0FBQ3RDLE1BQU0sQ0FBQ0MscUJBQXFCLEVBQUUsRUFBRW1TLENBQUMsRUFBRTtJQUN4RXBTLE1BQU0sQ0FBQ0MscUJBQXFCLEdBQzFCRCxNQUFNLENBQUMrWSxPQUFPLENBQUMzRyxDQUFDLENBQUMsR0FBRyx1QkFBdUIsQ0FBQztJQUM5Q3BTLE1BQU0sQ0FBQ2daLG9CQUFvQixHQUN6QmhaLE1BQU0sQ0FBQytZLE9BQU8sQ0FBQzNHLENBQUMsQ0FBQyxHQUFHLHNCQUFzQixDQUFDLElBQzNDcFMsTUFBTSxDQUFDK1ksT0FBTyxDQUFDM0csQ0FBQyxDQUFDLEdBQUcsNkJBQTZCLENBQUM7RUFDdEQ7RUFFQSxJQUFJLENBQUNwUyxNQUFNLENBQUNDLHFCQUFxQixFQUMvQkQsTUFBTSxDQUFDQyxxQkFBcUIsR0FBRyxVQUFVZ1osUUFBUSxFQUFFQyxPQUFPLEVBQUU7SUFDMUQsSUFBSUMsUUFBUSxHQUFHLElBQUlDLElBQUksQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLElBQUlDLFVBQVUsR0FBRzdRLElBQUksQ0FBQzhRLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJSixRQUFRLEdBQUdMLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELElBQUkvVyxFQUFFLEdBQUcvQixNQUFNLENBQUN3WixVQUFVLENBQUMsWUFBWTtNQUNyQ1AsUUFBUSxDQUFDRSxRQUFRLEdBQUdHLFVBQVUsQ0FBQztJQUNqQyxDQUFDLEVBQUVBLFVBQVUsQ0FBQztJQUVkUixRQUFRLEdBQUdLLFFBQVEsR0FBR0csVUFBVTtJQUNoQyxPQUFPdlgsRUFBRTtFQUNYLENBQUM7RUFFSCxJQUFJLENBQUMvQixNQUFNLENBQUNnWixvQkFBb0IsRUFDOUJoWixNQUFNLENBQUNnWixvQkFBb0IsR0FBRyxVQUFValgsRUFBRSxFQUFFO0lBQzFDMFgsWUFBWSxDQUFDMVgsRUFBRSxDQUFDO0VBQ2xCLENBQUM7QUFDTCxDQUFDLENBQUUsQ0FBQyxDOzs7Ozs7VUN0Q047VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0MsZUFBZTtXQUNmLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsOENBQThDLHlEOzs7OztXQ0E5QztXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmlDO0FBQ1E7QUFDRTtBQVV0QjtBQUUwRCIsInNvdXJjZXMiOlsid2VicGFjazovL0Vtb2ppTWFydC93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9QcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1Byb3BlcnR5S2V5LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3NyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3NyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3NyYy9jb21wb25lbnRzL3NlYXJjaC52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3NyYy9jb21wb25lbnRzL3NraW5zLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9FbW9qaS52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9jYXRlZ29yeS52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9za2lucy52dWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvRW1vamkudnVlP2Q4ODciLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvRW1vamkudnVlPzc1YTgiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvRW1vamkudnVlPzllNDkiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZT8wZGQzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL1BpY2tlci52dWU/ZDI4MyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9QaWNrZXIudnVlPzcxMjciLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvYW5jaG9ycy52dWU/NWIxZSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9hbmNob3JzLnZ1ZT8yZjVmIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlPzQ4NWUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlPzBkNTUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlPzllZmEiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvY2F0ZWdvcnkudnVlP2U4MjgiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvcHJldmlldy52dWU/NDNlOSIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9wcmV2aWV3LnZ1ZT85Nzk4Iiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3ByZXZpZXcudnVlPzNlYzAiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2VhcmNoLnZ1ZT9hYmRkIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9jb21wb25lbnRzL3NlYXJjaC52dWU/OWFiYyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvY29tcG9uZW50cy9zZWFyY2gudnVlPzhiMTIiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlPzNhMWYiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlPzUxZDUiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL2NvbXBvbmVudHMvc2tpbnMudnVlPzdjZDciLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3BvbHlmaWxscy9zdHJpbmdGcm9tQ29kZVBvaW50LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy9zdmdzL2luZGV4LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy91dGlscy9kYXRhLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy91dGlscy9lbW9qaS1kYXRhLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy91dGlscy9mcmVxdWVudGx5LmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvdXRpbHMvcGlja2VyLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy91dGlscy9zaGFyZWQtcHJvcHMuanMiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0Ly4vc3JjL3V0aWxzL3N0b3JlLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC8uL3NyYy92ZW5kb3IvcmFmLXBvbHlmaWxsLmpzIiwid2VicGFjazovL0Vtb2ppTWFydC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vRW1vamlNYXJ0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9FbW9qaU1hcnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiRW1vamlNYXJ0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkVtb2ppTWFydFwiXSA9IGZhY3RvcnkoKTtcbn0pKE9iamVjdCh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcyksIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KHIsIGEpIHtcbiAgKG51bGwgPT0gYSB8fCBhID4gci5sZW5ndGgpICYmIChhID0gci5sZW5ndGgpO1xuICBmb3IgKHZhciBlID0gMCwgbiA9IEFycmF5KGEpOyBlIDwgYTsgZSsrKSBuW2VdID0gcltlXTtcbiAgcmV0dXJuIG47XG59XG5leHBvcnQgeyBfYXJyYXlMaWtlVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKHIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KHIpO1xufVxuZXhwb3J0IHsgX2FycmF5V2l0aG91dEhvbGVzIGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soYSwgbikge1xuICBpZiAoIShhIGluc3RhbmNlb2YgbikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG59XG5leHBvcnQgeyBfY2xhc3NDYWxsQ2hlY2sgYXMgZGVmYXVsdCB9OyIsImltcG9ydCB0b1Byb3BlcnR5S2V5IGZyb20gXCIuL3RvUHJvcGVydHlLZXkuanNcIjtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKGUsIHIpIHtcbiAgZm9yICh2YXIgdCA9IDA7IHQgPCByLmxlbmd0aDsgdCsrKSB7XG4gICAgdmFyIG8gPSByW3RdO1xuICAgIG8uZW51bWVyYWJsZSA9IG8uZW51bWVyYWJsZSB8fCAhMSwgby5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIG8gJiYgKG8ud3JpdGFibGUgPSAhMCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCB0b1Byb3BlcnR5S2V5KG8ua2V5KSwgbyk7XG4gIH1cbn1cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhlLCByLCB0KSB7XG4gIHJldHVybiByICYmIF9kZWZpbmVQcm9wZXJ0aWVzKGUucHJvdG90eXBlLCByKSwgdCAmJiBfZGVmaW5lUHJvcGVydGllcyhlLCB0KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogITFcbiAgfSksIGU7XG59XG5leHBvcnQgeyBfY3JlYXRlQ2xhc3MgYXMgZGVmYXVsdCB9OyIsImltcG9ydCB0b1Byb3BlcnR5S2V5IGZyb20gXCIuL3RvUHJvcGVydHlLZXkuanNcIjtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShlLCByLCB0KSB7XG4gIHJldHVybiAociA9IHRvUHJvcGVydHlLZXkocikpIGluIGUgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwge1xuICAgIHZhbHVlOiB0LFxuICAgIGVudW1lcmFibGU6ICEwLFxuICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgd3JpdGFibGU6ICEwXG4gIH0pIDogZVtyXSA9IHQsIGU7XG59XG5leHBvcnQgeyBfZGVmaW5lUHJvcGVydHkgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkocikge1xuICBpZiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIG51bGwgIT0gcltTeW1ib2wuaXRlcmF0b3JdIHx8IG51bGwgIT0gcltcIkBAaXRlcmF0b3JcIl0pIHJldHVybiBBcnJheS5mcm9tKHIpO1xufVxuZXhwb3J0IHsgX2l0ZXJhYmxlVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbmV4cG9ydCB7IF9ub25JdGVyYWJsZVNwcmVhZCBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhyKSB8fCBpdGVyYWJsZVRvQXJyYXkocikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkocikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cbmV4cG9ydCB7IF90b0NvbnN1bWFibGVBcnJheSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5mdW5jdGlvbiB0b1ByaW1pdGl2ZSh0LCByKSB7XG4gIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0O1xuICB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgIHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpO1xufVxuZXhwb3J0IHsgdG9QcmltaXRpdmUgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IHRvUHJpbWl0aXZlIGZyb20gXCIuL3RvUHJpbWl0aXZlLmpzXCI7XG5mdW5jdGlvbiB0b1Byb3BlcnR5S2V5KHQpIHtcbiAgdmFyIGkgPSB0b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjtcbn1cbmV4cG9ydCB7IHRvUHJvcGVydHlLZXkgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59XG5leHBvcnQgeyBfdHlwZW9mIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkociwgYSkge1xuICBpZiAocikge1xuICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiByKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShyLCBhKTtcbiAgICB2YXIgdCA9IHt9LnRvU3RyaW5nLmNhbGwocikuc2xpY2UoOCwgLTEpO1xuICAgIHJldHVybiBcIk9iamVjdFwiID09PSB0ICYmIHIuY29uc3RydWN0b3IgJiYgKHQgPSByLmNvbnN0cnVjdG9yLm5hbWUpLCBcIk1hcFwiID09PSB0IHx8IFwiU2V0XCIgPT09IHQgPyBBcnJheS5mcm9tKHIpIDogXCJBcmd1bWVudHNcIiA9PT0gdCB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdCh0KSA/IGFycmF5TGlrZVRvQXJyYXkociwgYSkgOiB2b2lkIDA7XG4gIH1cbn1cbmV4cG9ydCB7IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiPHRlbXBsYXRlPlxyXG4gIDxjb21wb25lbnRcclxuICAgIDppcz1cInRhZ1wiXHJcbiAgICB2LWlmPVwidmlldy5jYW5SZW5kZXJcIlxyXG4gICAgOnRpdGxlPVwidmlldy50aXRsZVwiXHJcbiAgICA6YXJpYS1sYWJlbD1cInZpZXcuYXJpYUxhYmVsXCJcclxuICAgIDpkYXRhLXRpdGxlPVwidGl0bGVcIlxyXG4gICAgY2xhc3M9XCJlbW9qaS1tYXJ0LWVtb2ppXCJcclxuICAgIEBtb3VzZWVudGVyPVwib25Nb3VzZUVudGVyXCJcclxuICAgIEBtb3VzZWxlYXZlPVwib25Nb3VzZUxlYXZlXCJcclxuICAgIEBjbGljaz1cIm9uQ2xpY2tcIlxyXG4gID5cclxuICAgIDxzcGFuIDpjbGFzcz1cInZpZXcuY3NzQ2xhc3NcIiA6c3R5bGU9XCJ2aWV3LmNzc1N0eWxlXCI+e3tcclxuICAgICAgdmlldy5jb250ZW50XHJcbiAgICB9fTwvc3Bhbj5cclxuICA8L2NvbXBvbmVudD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IEVtb2ppUHJvcHMgfSBmcm9tICcuLi91dGlscy9zaGFyZWQtcHJvcHMnXHJcbmltcG9ydCB7IEVtb2ppVmlldyB9IGZyb20gJy4uL3V0aWxzL2Vtb2ppLWRhdGEnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIC4uLkVtb2ppUHJvcHMsXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZW1pdHM6IFtcImNsaWNrXCIsIFwibW91c2VlbnRlclwiLCBcIm1vdXNlbGVhdmVcIl0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIHZpZXcoKSB7XHJcbiAgICAgIHJldHVybiBuZXcgRW1vamlWaWV3KFxyXG4gICAgICAgIHRoaXMuZW1vamlPYmplY3QsXHJcbiAgICAgICAgdGhpcy5za2luLFxyXG4gICAgICAgIHRoaXMuc2V0LFxyXG4gICAgICAgIHRoaXMubmF0aXZlLFxyXG4gICAgICAgIHRoaXMuZmFsbGJhY2ssXHJcbiAgICAgICAgdGhpcy50b29sdGlwLFxyXG4gICAgICAgIHRoaXMuc2l6ZSxcclxuICAgICAgKVxyXG4gICAgfSxcclxuICAgIHNhbml0aXplZERhdGEoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmVtb2ppT2JqZWN0Ll9zYW5pdGl6ZWRcclxuICAgIH0sXHJcbiAgICB0aXRsZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudG9vbHRpcCA/IHRoaXMuZW1vamlPYmplY3Quc2hvcnRfbmFtZSA6IG51bGxcclxuICAgIH0sXHJcbiAgICBlbW9qaU9iamVjdCgpIHtcclxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmVtb2ppID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5maW5kRW1vamkodGhpcy5lbW9qaSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5lbW9qaVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY3JlYXRlZCgpIHt9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgdGhpcy5lbW9qaU9iamVjdClcclxuICAgIH0sXHJcbiAgICBvbk1vdXNlRW50ZXIoKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ21vdXNlZW50ZXInLCB0aGlzLmVtb2ppT2JqZWN0KVxyXG4gICAgfSxcclxuICAgIG9uTW91c2VMZWF2ZSgpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnbW91c2VsZWF2ZScsIHRoaXMuZW1vamlPYmplY3QpXHJcbiAgICB9LFxyXG4gIH0sXHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8c2VjdGlvbiBjbGFzcz1cImVtb2ppLW1hcnQgZW1vamktbWFydC1zdGF0aWNcIiA6c3R5bGU9XCJjdXN0b21TdHlsZXNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LWJhciBlbW9qaS1tYXJ0LWJhci1hbmNob3JzXCIgdi1pZj1cInNob3dDYXRlZ29yaWVzXCI+XHJcbiAgICAgIDxhbmNob3JzXHJcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcclxuICAgICAgICA6aTE4bj1cIm1lcmdlZEkxOG5cIlxyXG4gICAgICAgIDpjb2xvcj1cImNvbG9yXCJcclxuICAgICAgICA6Y2F0ZWdvcmllcz1cInZpZXcuYWxsQ2F0ZWdvcmllc1wiXHJcbiAgICAgICAgOmFjdGl2ZS1jYXRlZ29yeT1cInZpZXcuYWN0aXZlQ2F0ZWdvcnlcIlxyXG4gICAgICAgIEBjbGljaz1cIm9uQW5jaG9yQ2xpY2tcIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHNsb3RcclxuICAgICAgbmFtZT1cInNlYXJjaFRlbXBsYXRlXCJcclxuICAgICAgOmRhdGE9XCJkYXRhXCJcclxuICAgICAgOmkxOG49XCJpMThuXCJcclxuICAgICAgOmF1dG8tZm9jdXM9XCJhdXRvRm9jdXNcIlxyXG4gICAgICA6b24tc2VhcmNoPVwib25TZWFyY2hcIlxyXG4gICAgPlxyXG4gICAgICA8c2VhcmNoXHJcbiAgICAgICAgdi1pZj1cInNob3dTZWFyY2hcIlxyXG4gICAgICAgIHJlZj1cInNlYXJjaFwiXHJcbiAgICAgICAgOmRhdGE9XCJkYXRhXCJcclxuICAgICAgICA6aTE4bj1cIm1lcmdlZEkxOG5cIlxyXG4gICAgICAgIDphdXRvLWZvY3VzPVwiYXV0b0ZvY3VzXCJcclxuICAgICAgICA6b24tc2VhcmNoPVwib25TZWFyY2hcIlxyXG4gICAgICAgIEBzZWFyY2g9XCJvblNlYXJjaFwiXHJcbiAgICAgICAgQGFycm93TGVmdD1cIm9uQXJyb3dMZWZ0XCJcclxuICAgICAgICBAYXJyb3dSaWdodD1cIm9uQXJyb3dSaWdodFwiXHJcbiAgICAgICAgQGFycm93RG93bj1cIm9uQXJyb3dEb3duXCJcclxuICAgICAgICBAYXJyb3dVcD1cIm9uQXJyb3dVcFwiXHJcbiAgICAgICAgQGVudGVyPVwib25FbnRlclwiXHJcbiAgICAgICAgQHNlbGVjdD1cIm9uVGV4dFNlbGVjdFwiXHJcbiAgICAgIC8+XHJcbiAgICA8L3Nsb3Q+XHJcblxyXG4gICAgPGRpdlxyXG4gICAgICByb2xlPVwidGFicGFuZWxcIlxyXG4gICAgICBjbGFzcz1cImVtb2ppLW1hcnQtc2Nyb2xsXCJcclxuICAgICAgcmVmPVwic2Nyb2xsXCJcclxuICAgICAgQHNjcm9sbD1cIm9uU2Nyb2xsXCJcclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGlkPVwiZW1vamktbWFydC1saXN0XCJcclxuICAgICAgICByZWY9XCJzY3JvbGxDb250ZW50XCJcclxuICAgICAgICByb2xlPVwibGlzdGJveFwiXHJcbiAgICAgICAgYXJpYS1leHBhbmRlZD1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHNsb3QgbmFtZT1cImN1c3RvbUNhdGVnb3J5XCI+IDwvc2xvdD5cclxuXHJcbiAgICAgICAgPGNhdGVnb3J5XHJcbiAgICAgICAgICB2LWZvcj1cIihjYXRlZ29yeSwgaWR4KSBpbiB2aWV3LmZpbHRlcmVkQ2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICB2LXNob3c9XCJpbmZpbml0ZVNjcm9sbCB8fCBjYXRlZ29yeSA9PSB2aWV3LmFjdGl2ZUNhdGVnb3J5IHx8IGlzU2VhcmNoaW5nXCJcclxuICAgICAgICAgIDpyZWY9XCInY2F0ZWdvcmllc18nICsgaWR4XCJcclxuICAgICAgICAgIDprZXk9XCJjYXRlZ29yeS5pZFwiXHJcbiAgICAgICAgICA6ZGF0YT1cImRhdGFcIlxyXG4gICAgICAgICAgOmkxOG49XCJtZXJnZWRJMThuXCJcclxuICAgICAgICAgIDppZD1cImNhdGVnb3J5LmlkXCJcclxuICAgICAgICAgIDpuYW1lPVwiY2F0ZWdvcnkubmFtZVwiXHJcbiAgICAgICAgICA6ZW1vamlzPVwiY2F0ZWdvcnkuZW1vamlzXCJcclxuICAgICAgICAgIDplbW9qaS1wcm9wcz1cImVtb2ppUHJvcHNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHNsb3RcclxuICAgICAgbmFtZT1cInByZXZpZXdUZW1wbGF0ZVwiXHJcbiAgICAgIDpkYXRhPVwiZGF0YVwiXHJcbiAgICAgIDp0aXRsZT1cInRpdGxlXCJcclxuICAgICAgOmVtb2ppPVwidmlldy5wcmV2aWV3RW1vamlcIlxyXG4gICAgICA6aWRsZS1lbW9qaT1cImlkbGVFbW9qaVwiXHJcbiAgICAgIDpzaG93LXNraW4tdG9uZXM9XCJzaG93U2tpblRvbmVzXCJcclxuICAgICAgOmVtb2ppLXByb3BzPVwiZW1vamlQcm9wc1wiXHJcbiAgICAgIDpza2luLXByb3BzPVwic2tpblByb3BzXCJcclxuICAgICAgOm9uLXNraW4tY2hhbmdlPVwib25Ta2luQ2hhbmdlXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtYmFyIGVtb2ppLW1hcnQtYmFyLXByZXZpZXdcIiB2LWlmPVwic2hvd1ByZXZpZXdcIj5cclxuICAgICAgICA8cHJldmlld1xyXG4gICAgICAgICAgOmRhdGE9XCJkYXRhXCJcclxuICAgICAgICAgIDp0aXRsZT1cInRpdGxlXCJcclxuICAgICAgICAgIDplbW9qaT1cInZpZXcucHJldmlld0Vtb2ppXCJcclxuICAgICAgICAgIDppZGxlLWVtb2ppPVwiaWRsZUVtb2ppXCJcclxuICAgICAgICAgIDpzaG93LXNraW4tdG9uZXM9XCJzaG93U2tpblRvbmVzXCJcclxuICAgICAgICAgIDplbW9qaS1wcm9wcz1cImVtb2ppUHJvcHNcIlxyXG4gICAgICAgICAgOnNraW4tcHJvcHM9XCJza2luUHJvcHNcIlxyXG4gICAgICAgICAgOm9uLXNraW4tY2hhbmdlPVwib25Ta2luQ2hhbmdlXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2xvdD5cclxuICA8L3NlY3Rpb24+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgJy4uL3ZlbmRvci9yYWYtcG9seWZpbGwnXHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi91dGlscy9zdG9yZSdcclxuaW1wb3J0IGZyZXF1ZW50bHkgZnJvbSAnLi4vdXRpbHMvZnJlcXVlbnRseSdcclxuaW1wb3J0IHsgZGVlcE1lcmdlLCBtZWFzdXJlU2Nyb2xsYmFyIH0gZnJvbSAnLi4vdXRpbHMnXHJcbmltcG9ydCB7IFBpY2tlclByb3BzIH0gZnJvbSAnLi4vdXRpbHMvc2hhcmVkLXByb3BzJ1xyXG5pbXBvcnQgeyBQaWNrZXJWaWV3IH0gZnJvbSAnLi4vdXRpbHMvcGlja2VyJ1xyXG5pbXBvcnQgQW5jaG9ycyBmcm9tICcuL2FuY2hvcnMudnVlJ1xyXG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSAnLi9jYXRlZ29yeS52dWUnXHJcbmltcG9ydCBQcmV2aWV3IGZyb20gJy4vcHJldmlldy52dWUnXHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9zZWFyY2gudnVlJ1xyXG5cclxuY29uc3QgSTE4TiA9IHtcclxuICBzZWFyY2g6ICdTZWFyY2gnLFxyXG4gIG5vdGZvdW5kOiAnTm8gRW1vamkgRm91bmQnLFxyXG4gIGNhdGVnb3JpZXM6IHtcclxuICAgIHNlYXJjaDogJ1NlYXJjaCBSZXN1bHRzJyxcclxuICAgIHJlY2VudDogJ0ZyZXF1ZW50bHkgVXNlZCcsXHJcbiAgICBzbWlsZXlzOiAnU21pbGV5cyAmIEVtb3Rpb24nLFxyXG4gICAgcGVvcGxlOiAnUGVvcGxlICYgQm9keScsXHJcbiAgICBuYXR1cmU6ICdBbmltYWxzICYgTmF0dXJlJyxcclxuICAgIGZvb2RzOiAnRm9vZCAmIERyaW5rJyxcclxuICAgIGFjdGl2aXR5OiAnQWN0aXZpdHknLFxyXG4gICAgcGxhY2VzOiAnVHJhdmVsICYgUGxhY2VzJyxcclxuICAgIG9iamVjdHM6ICdPYmplY3RzJyxcclxuICAgIHN5bWJvbHM6ICdTeW1ib2xzJyxcclxuICAgIGZsYWdzOiAnRmxhZ3MnLFxyXG4gICAgY3VzdG9tOiAnQ3VzdG9tJyxcclxuICB9LFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IHtcclxuICAgIC4uLlBpY2tlclByb3BzLFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGVtaXRzOiBbJ3NlbGVjdCcsICdza2luLWNoYW5nZSddLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhY3RpdmVTa2luOiB0aGlzLnNraW4gfHwgc3RvcmUuZ2V0KCdza2luJykgfHwgdGhpcy5kZWZhdWx0U2tpbixcclxuICAgICAgdmlldzogbmV3IFBpY2tlclZpZXcodGhpcyksXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgY3VzdG9tU3R5bGVzKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHdpZHRoOiB0aGlzLmNhbGN1bGF0ZVdpZHRoICsgJ3B4JyxcclxuICAgICAgICAuLi50aGlzLnBpY2tlclN0eWxlcyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVtb2ppUHJvcHMoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbmF0aXZlOiB0aGlzLm5hdGl2ZSxcclxuICAgICAgICBza2luOiB0aGlzLmFjdGl2ZVNraW4sXHJcbiAgICAgICAgc2V0OiB0aGlzLnNldCxcclxuICAgICAgICBlbW9qaVRvb2x0aXA6IHRoaXMuZW1vamlUb29sdGlwLFxyXG4gICAgICAgIGVtb2ppU2l6ZTogdGhpcy5lbW9qaVNpemUsXHJcbiAgICAgICAgc2VsZWN0ZWRFbW9qaTogdGhpcy52aWV3LnByZXZpZXdFbW9qaSxcclxuICAgICAgICBzZWxlY3RlZEVtb2ppQ2F0ZWdvcnk6IHRoaXMudmlldy5wcmV2aWV3RW1vamlDYXRlZ29yeSxcclxuICAgICAgICBvbkVudGVyOiB0aGlzLm9uRW1vamlFbnRlci5iaW5kKHRoaXMpLFxyXG4gICAgICAgIG9uTGVhdmU6IHRoaXMub25FbW9qaUxlYXZlLmJpbmQodGhpcyksXHJcbiAgICAgICAgb25DbGljazogdGhpcy5vbkVtb2ppQ2xpY2suYmluZCh0aGlzKSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNraW5Qcm9wcygpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBza2luOiB0aGlzLmFjdGl2ZVNraW4sXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjYWxjdWxhdGVXaWR0aCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMucGVyTGluZSAqICh0aGlzLmVtb2ppU2l6ZSArIDEyKSArIDEyICsgMiArIG1lYXN1cmVTY3JvbGxiYXIoKVxyXG4gICAgfSxcclxuICAgIC8vIGVtb2ppc1BlclJvdygpIHtcclxuICAgIC8vICAgY29uc3QgbGlzdEVsID0gdGhpcy4kcmVmcy5zY3JvbGxDb250ZW50XHJcbiAgICAvLyAgIGNvbnN0IGVtb2ppRWwgPSBsaXN0RWwucXVlcnlTZWxlY3RvcignLmVtb2ppLW1hcnQtZW1vamknKVxyXG4gICAgLy8gICByZXR1cm4gTWF0aC5mbG9vcihsaXN0RWwub2Zmc2V0V2lkdGggLyBlbW9qaUVsLm9mZnNldFdpZHRoKVxyXG4gICAgLy8gfSxcclxuICAgIGZpbHRlcmVkQ2F0ZWdvcmllcygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmlldy5maWx0ZXJlZENhdGVnb3JpZXNcclxuICAgIH0sXHJcbiAgICBtZXJnZWRJMThuKCkge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShkZWVwTWVyZ2UoSTE4TiwgdGhpcy5pMThuKSlcclxuICAgIH0sXHJcbiAgICBpZGxlRW1vamkoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5lbW9qaSh0aGlzLmVtb2ppKVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICdEZWZhdWx0IHByZXZpZXcgZW1vamkgYCcgK1xyXG4gICAgICAgICAgICB0aGlzLmVtb2ppICtcclxuICAgICAgICAgICAgJ2AgaXMgbm90IGF2YWlsYWJsZSwgY2hlY2sgdGhlIFBpY2tlciBgZW1vamlgIHByb3BlcnR5JyxcclxuICAgICAgICApXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKVxyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuZmlyc3RFbW9qaSgpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBpc1NlYXJjaGluZygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMudmlldy5zZWFyY2hFbW9qaXMgIT0gbnVsbDtcclxuICAgIH0sXHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgc2tpbigpIHtcclxuICAgICAgdGhpcy5vblNraW5DaGFuZ2UodGhpcy5za2luKVxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uU2Nyb2xsKCkge1xyXG4gICAgICBpZiAodGhpcy5pbmZpbml0ZVNjcm9sbCAmJiAhdGhpcy53YWl0aW5nRm9yUGFpbnQpIHtcclxuICAgICAgICB0aGlzLndhaXRpbmdGb3JQYWludCA9IHRydWVcclxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMub25TY3JvbGxQYWludC5iaW5kKHRoaXMpKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25TY3JvbGxQYWludCgpIHtcclxuICAgICAgdGhpcy53YWl0aW5nRm9yUGFpbnQgPSBmYWxzZVxyXG4gICAgICB0aGlzLnZpZXcub25TY3JvbGwoKVxyXG4gICAgfSxcclxuICAgIG9uQW5jaG9yQ2xpY2soY2F0ZWdvcnkpIHtcclxuICAgICAgdGhpcy52aWV3Lm9uQW5jaG9yQ2xpY2soY2F0ZWdvcnkpXHJcbiAgICB9LFxyXG4gICAgb25TZWFyY2godmFsdWUpIHtcclxuICAgICAgdGhpcy52aWV3Lm9uU2VhcmNoKHZhbHVlKVxyXG4gICAgfSxcclxuICAgIG9uRW1vamlFbnRlcihlbW9qaSkge1xyXG4gICAgICB0aGlzLnZpZXcub25FbW9qaUVudGVyKGVtb2ppKVxyXG4gICAgfSxcclxuICAgIG9uRW1vamlMZWF2ZShlbW9qaSkge1xyXG4gICAgICB0aGlzLnZpZXcub25FbW9qaUxlYXZlKGVtb2ppKVxyXG4gICAgfSxcclxuICAgIG9uQXJyb3dMZWZ0KCRldmVudCkge1xyXG4gICAgICBjb25zdCBvbGRJZHggPSB0aGlzLnZpZXcucHJldmlld0Vtb2ppSWR4XHJcbiAgICAgIHRoaXMudmlldy5vbkFycm93TGVmdCgpXHJcbiAgICAgIGlmICgkZXZlbnQgJiYgdGhpcy52aWV3LnByZXZpZXdFbW9qaUlkeCAhPT0gb2xkSWR4KSB7XHJcbiAgICAgICAgLy8gUHJldmVudCBjdXJzb3IgbW92ZW1lbnQgaW5zaWRlIHRoZSBpbnB1dFxyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkFycm93UmlnaHQoKSB7XHJcbiAgICAgIHRoaXMudmlldy5vbkFycm93UmlnaHQoKVxyXG4gICAgfSxcclxuICAgIG9uQXJyb3dEb3duKCkge1xyXG4gICAgICB0aGlzLnZpZXcub25BcnJvd0Rvd24oKVxyXG4gICAgfSxcclxuICAgIG9uQXJyb3dVcCgkZXZlbnQpIHtcclxuICAgICAgdGhpcy52aWV3Lm9uQXJyb3dVcCgpXHJcbiAgICAgIC8vIFByZXZlbnQgY3Vyc29yIG1vdmVtZW50IGluc2lkZSB0aGUgaW5wdXRcclxuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIH0sXHJcbiAgICBvbkVudGVyKCkge1xyXG4gICAgICBpZiAoIXRoaXMudmlldy5wcmV2aWV3RW1vamkpIHtcclxuICAgICAgICAvLyBXZSBtYXkgcHJlc3MgXCJFbnRlclwiIHdoZW4gbm90aGluZyBpcyBzZWxlY3RlZCxcclxuICAgICAgICAvLyBmb3IgZXhhbXBsZSwgaWYgd2Ugc2VhcmNoIGZvciBcImFzZGZcIi5cclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRlbWl0KCdzZWxlY3QnLCB0aGlzLnZpZXcucHJldmlld0Vtb2ppKVxyXG4gICAgICBmcmVxdWVudGx5LmFkZCh0aGlzLnZpZXcucHJldmlld0Vtb2ppKVxyXG4gICAgfSxcclxuICAgIG9uRW1vamlDbGljayhlbW9qaSkge1xyXG4gICAgICB0aGlzLiRlbWl0KCdzZWxlY3QnLCBlbW9qaSlcclxuICAgICAgZnJlcXVlbnRseS5hZGQoZW1vamkpXHJcbiAgICB9LFxyXG4gICAgb25UZXh0U2VsZWN0KCRldmVudCkge1xyXG4gICAgICAvLyBQcmV2ZW50IGRlZmF1bHQgdGV4dCBzZWxlY3QgZXZlbnQuXHJcbiAgICAgIC8vIEluIFZ1ZSAzIGl0IGdvZXMgdGhyb3VnaCB0aGUgY29tcG9uZW50IGFuZCB0cmlnZ2VycyB0aGUgYHNlbGVjdGBcclxuICAgICAgLy8gZXZlbnQgdGhhdCBpcyBzdXBwb3NlZCB0byBiZSBlbW1pdGVkIG9ubHkgd2l0aCBlbW9qaS5cclxuICAgICAgLy8gKHRoZXJlIGlzIG5vIHN1Y2ggcHJvYmxlbSBpbiBWdWUgMikuXHJcbiAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgfSxcclxuICAgIG9uU2tpbkNoYW5nZShza2luKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlU2tpbiA9IHNraW5cclxuICAgICAgc3RvcmUudXBkYXRlKHsgc2tpbiB9KVxyXG5cclxuICAgICAgdGhpcy4kZW1pdCgnc2tpbi1jaGFuZ2UnLCBza2luKVxyXG4gICAgfSxcclxuICAgIGdldENhdGVnb3J5Q29tcG9uZW50KGluZGV4KSB7XHJcbiAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzLiRyZWZzWydjYXRlZ29yaWVzXycgKyBpbmRleF1cclxuICAgICAgaWYgKGNvbXBvbmVudCAmJiAnMCcgaW4gY29tcG9uZW50KSB7XHJcbiAgICAgICAgLy8gVnVlIDIgaGFzICRyZWZzIHVuZGVyIHYtZm9yIGFzIGFuIGFycmF5LlxyXG4gICAgICAgIHJldHVybiBjb21wb25lbnRbJzAnXVxyXG4gICAgICB9XHJcbiAgICAgIC8vIFZ1ZSAzIGRvZXMgbm90IHN1cHBvcnQgJHJlZnMgYXMgYXJyYXkuXHJcbiAgICAgIHJldHVybiBjb21wb25lbnRcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBBbmNob3JzLFxyXG4gICAgQ2F0ZWdvcnksXHJcbiAgICBQcmV2aWV3LFxyXG4gICAgU2VhcmNoLFxyXG4gIH0sXHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IHJvbGU9XCJ0YWJsaXN0XCIgY2xhc3M9XCJlbW9qaS1tYXJ0LWFuY2hvcnNcIj5cclxuICAgIDxidXR0b25cclxuICAgICAgdi1mb3I9XCJjYXRlZ29yeSBpbiBjYXRlZ29yaWVzXCJcclxuICAgICAgcm9sZT1cInRhYlwiXHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICA6YXJpYS1sYWJlbD1cImNhdGVnb3J5Lm5hbWVcIlxyXG4gICAgICA6YXJpYS1zZWxlY3RlZD1cImNhdGVnb3J5LmlkID09IGFjdGl2ZUNhdGVnb3J5LmlkXCJcclxuICAgICAgOmtleT1cImNhdGVnb3J5LmlkXCJcclxuICAgICAgOmNsYXNzPVwie1xyXG4gICAgICAgICdlbW9qaS1tYXJ0LWFuY2hvcic6IHRydWUsXHJcbiAgICAgICAgJ2Vtb2ppLW1hcnQtYW5jaG9yLXNlbGVjdGVkJzogY2F0ZWdvcnkuaWQgPT0gYWN0aXZlQ2F0ZWdvcnkuaWQsXHJcbiAgICAgIH1cIlxyXG4gICAgICA6c3R5bGU9XCJ7IGNvbG9yOiBjYXRlZ29yeS5pZCA9PSBhY3RpdmVDYXRlZ29yeS5pZCA/IGNvbG9yIDogJycgfVwiXHJcbiAgICAgIDpkYXRhLXRpdGxlPVwiaTE4bi5jYXRlZ29yaWVzW2NhdGVnb3J5LmlkXVwiXHJcbiAgICAgIEBjbGljaz1cIiRlbWl0KCdjbGljaycsIGNhdGVnb3J5KVwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdi1odG1sPVwic3Znc1tjYXRlZ29yeS5pZF1cIiAvPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgY2xhc3M9XCJlbW9qaS1tYXJ0LWFuY2hvci1iYXJcIlxyXG4gICAgICAgIDpzdHlsZT1cInsgYmFja2dyb3VuZENvbG9yOiBjb2xvciB9XCJcclxuICAgICAgPjwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHN2Z3MgZnJvbSAnLi4vc3ZncydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG4gICAgaTE4bjoge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGNvbG9yOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgIH0sXHJcbiAgICBjYXRlZ29yaWVzOiB7XHJcbiAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBhY3RpdmVDYXRlZ29yeToge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIGRlZmF1bHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZW1pdHM6IFsnY2xpY2snXSxcclxuICBjcmVhdGVkKCkge1xyXG4gICAgdGhpcy5zdmdzID0gc3Znc1xyXG4gIH0sXHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8c2VjdGlvblxyXG4gICAgOmNsYXNzPVwie1xyXG4gICAgICAnZW1vamktbWFydC1jYXRlZ29yeSc6IHRydWUsXHJcbiAgICAgICdlbW9qaS1tYXJ0LW5vLXJlc3VsdHMnOiAhaGFzUmVzdWx0cyxcclxuICAgIH1cIlxyXG4gICAgOmFyaWEtbGFiZWw9XCJpMThuLmNhdGVnb3JpZXNbaWRdXCJcclxuICAgIHYtaWY9XCJpc1Zpc2libGUgJiYgKGlzU2VhcmNoIHx8IGhhc1Jlc3VsdHMpXCJcclxuICA+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1jYXRlZ29yeS1sYWJlbFwiPlxyXG4gICAgICA8aDMgY2xhc3M9XCJlbW9qaS1tYXJ0LWNhdGVnb3J5LWxhYmVsXCI+e3sgaTE4bi5jYXRlZ29yaWVzW2lkXSB9fTwvaDM+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8dGVtcGxhdGUgdi1mb3I9XCJ7IGVtb2ppT2JqZWN0LCBlbW9qaVZpZXcgfSBpbiBlbW9qaU9iamVjdHNcIj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHYtaWY9XCJlbW9qaVZpZXcuY2FuUmVuZGVyXCJcclxuICAgICAgICA6YXJpYS1sYWJlbD1cImVtb2ppVmlldy5hcmlhTGFiZWxcIlxyXG4gICAgICAgIHJvbGU9XCJvcHRpb25cIlxyXG4gICAgICAgIGFyaWEtc2VsZWN0ZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgYXJpYS1wb3NpbnNldD1cIjFcIlxyXG4gICAgICAgIGFyaWEtc2V0c2l6ZT1cIjE4MTJcIlxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIDpkYXRhLXRpdGxlPVwiZW1vamlPYmplY3Quc2hvcnRfbmFtZVwiXHJcbiAgICAgICAgOmtleT1cImVtb2ppT2JqZWN0LmlkXCJcclxuICAgICAgICA6dGl0bGU9XCJlbW9qaVZpZXcudGl0bGVcIlxyXG4gICAgICAgIGNsYXNzPVwiZW1vamktbWFydC1lbW9qaVwiXHJcbiAgICAgICAgOmNsYXNzPVwiYWN0aXZlQ2xhc3MoZW1vamlPYmplY3QpXCJcclxuICAgICAgICBAbW91c2VlbnRlcj1cImVtb2ppUHJvcHMub25FbnRlcihlbW9qaVZpZXcuZ2V0RW1vamkoKSlcIlxyXG4gICAgICAgIEBtb3VzZWxlYXZlPVwiZW1vamlQcm9wcy5vbkxlYXZlKGVtb2ppVmlldy5nZXRFbW9qaSgpKVwiXHJcbiAgICAgICAgQGNsaWNrPVwiZW1vamlQcm9wcy5vbkNsaWNrKGVtb2ppVmlldy5nZXRFbW9qaSgpKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiA6Y2xhc3M9XCJlbW9qaVZpZXcuY3NzQ2xhc3NcIiA6c3R5bGU9XCJlbW9qaVZpZXcuY3NzU3R5bGVcIj57e1xyXG4gICAgICAgICAgZW1vamlWaWV3LmNvbnRlbnRcclxuICAgICAgICB9fTwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgIDxkaXYgdi1pZj1cIiFoYXNSZXN1bHRzXCI+XHJcbiAgICAgIDxlbW9qaVxyXG4gICAgICAgIDpkYXRhPVwiZGF0YVwiXHJcbiAgICAgICAgZW1vamk9XCJzbGV1dGhfb3Jfc3B5XCJcclxuICAgICAgICA6bmF0aXZlPVwiZW1vamlQcm9wcy5uYXRpdmVcIlxyXG4gICAgICAgIDpza2luPVwiZW1vamlQcm9wcy5za2luXCJcclxuICAgICAgICA6c2V0PVwiZW1vamlQcm9wcy5zZXRcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1uby1yZXN1bHRzLWxhYmVsXCI+e3sgaTE4bi5ub3Rmb3VuZCB9fTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9zZWN0aW9uPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgRW1vamlWaWV3IH0gZnJvbSAnLi4vdXRpbHMvZW1vamktZGF0YSdcclxuaW1wb3J0IEVtb2ppIGZyb20gJy4vRW1vamkudnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiB7XHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgaTE4bjoge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGlkOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgbmFtZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGVtb2ppczoge1xyXG4gICAgICB0eXBlOiBBcnJheSxcclxuICAgIH0sXHJcbiAgICBlbW9qaVByb3BzOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYWN0aXZlQ2xhc3M6IGZ1bmN0aW9uKGVtb2ppT2JqZWN0KSB7XHJcbiAgICAgIGlmICghdGhpcy5lbW9qaVByb3BzLnNlbGVjdGVkRW1vamkpIHtcclxuICAgICAgICByZXR1cm4gJydcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMuZW1vamlQcm9wcy5zZWxlY3RlZEVtb2ppQ2F0ZWdvcnkpIHtcclxuICAgICAgICByZXR1cm4gJydcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5lbW9qaVByb3BzLnNlbGVjdGVkRW1vamkuaWQgPT0gZW1vamlPYmplY3QuaWQgJiZcclxuICAgICAgICB0aGlzLmVtb2ppUHJvcHMuc2VsZWN0ZWRFbW9qaUNhdGVnb3J5LmlkID09IHRoaXMuaWRcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuICdlbW9qaS1tYXJ0LWVtb2ppLXNlbGVjdGVkJ1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAnJ1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBpc1Zpc2libGUoKSB7XHJcbiAgICAgIHJldHVybiAhIXRoaXMuZW1vamlzXHJcbiAgICB9LFxyXG4gICAgaXNTZWFyY2goKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5hbWUgPT0gJ1NlYXJjaCdcclxuICAgIH0sXHJcbiAgICBoYXNSZXN1bHRzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5lbW9qaXMubGVuZ3RoID4gMFxyXG4gICAgfSxcclxuICAgIGVtb2ppT2JqZWN0cygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZW1vamlzLm1hcCgoZW1vamkpID0+IHtcclxuICAgICAgICBsZXQgZW1vamlPYmplY3QgPSBlbW9qaVxyXG4gICAgICAgIGxldCBlbW9qaVZpZXcgPSBuZXcgRW1vamlWaWV3KFxyXG4gICAgICAgICAgZW1vamksXHJcbiAgICAgICAgICB0aGlzLmVtb2ppUHJvcHMuc2tpbixcclxuICAgICAgICAgIHRoaXMuZW1vamlQcm9wcy5zZXQsXHJcbiAgICAgICAgICB0aGlzLmVtb2ppUHJvcHMubmF0aXZlLFxyXG4gICAgICAgICAgdGhpcy5lbW9qaVByb3BzLmZhbGxiYWNrLFxyXG4gICAgICAgICAgdGhpcy5lbW9qaVByb3BzLmVtb2ppVG9vbHRpcCxcclxuICAgICAgICAgIHRoaXMuZW1vamlQcm9wcy5lbW9qaVNpemUsXHJcbiAgICAgICAgKVxyXG4gICAgICAgIHJldHVybiB7IGVtb2ppT2JqZWN0LCBlbW9qaVZpZXcgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIEVtb2ppLFxyXG4gIH0sXHJcbn1cclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuXHJcbjxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXdcIj5cclxuICA8dGVtcGxhdGUgdi1pZj1cImVtb2ppXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vamlcIj5cclxuICAgICAgICA8ZW1vamlcclxuICAgICAgICAgIDpkYXRhPVwiZGF0YVwiXHJcbiAgICAgICAgICA6ZW1vamk9XCJlbW9qaVwiXHJcbiAgICAgICAgICA6bmF0aXZlPVwiZW1vamlQcm9wcy5uYXRpdmVcIlxyXG4gICAgICAgICAgOnNraW49XCJlbW9qaVByb3BzLnNraW5cIlxyXG4gICAgICAgICAgOnNldD1cImVtb2ppUHJvcHMuc2V0XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctZGF0YVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1tYXJ0LXByZXZpZXctbmFtZVwiPnt7IGVtb2ppLm5hbWUgfX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZXNcIj5cclxuICAgICAgICAgIDxzcGFuIHYtZm9yPVwic2hvcnROYW1lIGluIGVtb2ppU2hvcnROYW1lc1wiIDprZXk9XCJzaG9ydE5hbWVcIiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1zaG9ydG5hbWVcIj46e3sgc2hvcnROYW1lIH19Ojwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb3RpY29uc1wiPlxyXG4gICAgICAgICAgPHNwYW4gdi1mb3I9XCJlbW90aWNvbiBpbiBlbW9qaUVtb3RpY29uc1wiIDprZXk9XCJlbW90aWNvblwiIGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb3RpY29uXCI+e3sgZW1vdGljb24gfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gIDwvdGVtcGxhdGU+XHJcblxyXG4gIDx0ZW1wbGF0ZSB2LWVsc2U+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCI+XHJcbiAgICAgIDxlbW9qaVxyXG4gICAgICAgIDpkYXRhPVwiZGF0YVwiXHJcbiAgICAgICAgOmVtb2ppPVwiaWRsZUVtb2ppXCJcclxuICAgICAgICA6bmF0aXZlPVwiZW1vamlQcm9wcy5uYXRpdmVcIlxyXG4gICAgICAgIDpza2luPVwiZW1vamlQcm9wcy5za2luXCJcclxuICAgICAgICA6c2V0PVwiZW1vamlQcm9wcy5zZXRcIlxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtcHJldmlldy1kYXRhXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZW1vamktbWFydC10aXRsZS1sYWJlbFwiPnt7IHRpdGxlIH19PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiB2LWlmPVwic2hvd1NraW5Ub25lc1wiIGNsYXNzPVwiZW1vamktbWFydC1wcmV2aWV3LXNraW5zXCI+XHJcbiAgICAgIDxza2lucyA6c2tpbj1cInNraW5Qcm9wcy5za2luXCIgQGNoYW5nZT1cIm9uU2tpbkNoYW5nZSgkZXZlbnQpXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gIDwvdGVtcGxhdGU+XHJcbjwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5pbXBvcnQgRW1vamkgZnJvbSAnLi9FbW9qaS52dWUnXHJcbmltcG9ydCBTa2lucyBmcm9tICcuL3NraW5zLnZ1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG4gICAgZGF0YToge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGVtb2ppOiB7XHJcbiAgICAgIHR5cGU6IFtTdHJpbmcsIE9iamVjdF1cclxuICAgIH0sXHJcbiAgICBpZGxlRW1vamk6IHtcclxuICAgICAgdHlwZTogW1N0cmluZywgT2JqZWN0XSxcclxuICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBzaG93U2tpblRvbmVzOiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBlbW9qaVByb3BzOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbiAgICBza2luUHJvcHM6IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIG9uU2tpbkNoYW5nZToge1xyXG4gICAgICB0eXBlOiBGdW5jdGlvbixcclxuICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBlbW9qaURhdGEoKSB7XHJcbiAgICAgIGlmICh0aGlzLmVtb2ppKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1vamlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4ge31cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGVtb2ppU2hvcnROYW1lcygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZW1vamlEYXRhLnNob3J0X25hbWVzXHJcbiAgICB9LFxyXG4gICAgZW1vamlFbW90aWNvbnMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmVtb2ppRGF0YS5lbW90aWNvbnNcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIEVtb2ppLFxyXG4gICAgU2tpbnNcclxuICB9XHJcbn1cclxuXHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImVtb2ppLW1hcnQtc2VhcmNoXCI+XHJcbiAgICA8aW5wdXRcclxuICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICA6cGxhY2Vob2xkZXI9XCJpMThuLnNlYXJjaFwiXHJcbiAgICAgIHJvbGU9XCJ0ZXh0Ym94XCJcclxuICAgICAgYXJpYS1hdXRvY29tcGxldGU9XCJsaXN0XCJcclxuICAgICAgYXJpYS1vd25zPVwiZW1vamktbWFydC1saXN0XCJcclxuICAgICAgYXJpYS1sYWJlbD1cIlNlYXJjaCBmb3IgYW4gZW1vamlcIlxyXG4gICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1vamktbWFydC1zZWFyY2gtZGVzY3JpcHRpb25cIlxyXG4gICAgICBAa2V5ZG93bi5sZWZ0PVwiKCRldmVudCkgPT4gJGVtaXQoJ2Fycm93TGVmdCcsICRldmVudClcIlxyXG4gICAgICBAa2V5ZG93bi5yaWdodD1cIigpID0+ICRlbWl0KCdhcnJvd1JpZ2h0JylcIlxyXG4gICAgICBAa2V5ZG93bi5kb3duPVwiKCkgPT4gJGVtaXQoJ2Fycm93RG93bicpXCJcclxuICAgICAgQGtleWRvd24udXA9XCIoJGV2ZW50KSA9PiAkZW1pdCgnYXJyb3dVcCcsICRldmVudClcIlxyXG4gICAgICBAa2V5ZG93bi5lbnRlcj1cIigpID0+ICRlbWl0KCdlbnRlcicpXCJcclxuICAgICAgdi1tb2RlbD1cInZhbHVlXCJcclxuICAgIC8+XHJcbiAgICA8c3BhbiBjbGFzcz1cImhpZGRlblwiIGlkPVwiZW1vamktcGlja2VyLXNlYXJjaC1kZXNjcmlwdGlvblwiXHJcbiAgICAgID5Vc2UgdGhlIGxlZnQsIHJpZ2h0LCB1cCBhbmQgZG93biBhcnJvdyBrZXlzIHRvIG5hdmlnYXRlIHRoZSBlbW9qaSBzZWFyY2hcclxuICAgICAgcmVzdWx0cy48L3NwYW5cclxuICAgID5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczoge1xyXG4gICAgZGF0YToge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGkxOG46IHtcclxuICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBhdXRvRm9jdXM6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgb25TZWFyY2g6IHtcclxuICAgICAgdHlwZTogRnVuY3Rpb24sXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIG9uQXJyb3dMZWZ0OiB7XHJcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxyXG4gICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgb25BcnJvd1JpZ2h0OiB7XHJcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxyXG4gICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgb25BcnJvd0Rvd246IHtcclxuICAgICAgdHlwZTogRnVuY3Rpb24sXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBvbkFycm93VXA6IHtcclxuICAgICAgdHlwZTogRnVuY3Rpb24sXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBvbkVudGVyOiB7XHJcbiAgICAgIHR5cGU6IEZ1bmN0aW9uLFxyXG4gICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZW1pdHM6IFsnc2VhcmNoJywgJ2VudGVyJywgJ2Fycm93VXAnLCAnYXJyb3dEb3duJywgJ2Fycm93UmlnaHQnLCAnYXJyb3dMZWZ0J10sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHZhbHVlOiAnJyxcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBlbW9qaUluZGV4KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5kYXRhXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIHZhbHVlKCkge1xyXG4gICAgICB0aGlzLiRlbWl0KCdzZWFyY2gnLCB0aGlzLnZhbHVlKVxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGNsZWFyKCkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gJydcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgbGV0ICRpbnB1dCA9IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcclxuXHJcbiAgICBpZiAodGhpcy5hdXRvRm9jdXMpIHtcclxuICAgICAgJGlucHV0LmZvY3VzKClcclxuICAgIH1cclxuICB9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcblxyXG48ZGl2IDpjbGFzcz1cInsgJ2Vtb2ppLW1hcnQtc2tpbi1zd2F0Y2hlcyc6IHRydWUsICdlbW9qaS1tYXJ0LXNraW4tc3dhdGNoZXMtb3BlbmVkJzogb3BlbmVkIH1cIj5cclxuICA8c3BhbiB2LWZvcj1cInNraW5Ub25lIGluIDZcIiA6a2V5PVwic2tpblRvbmVcIiA6Y2xhc3M9XCJ7ICdlbW9qaS1tYXJ0LXNraW4tc3dhdGNoJzogdHJ1ZSwgJ2Vtb2ppLW1hcnQtc2tpbi1zd2F0Y2gtc2VsZWN0ZWQnOiBza2luID09IHNraW5Ub25lIH1cIj5cclxuICAgIDxzcGFuIDpjbGFzcz1cIidlbW9qaS1tYXJ0LXNraW4gZW1vamktbWFydC1za2luLXRvbmUtJyArIHNraW5Ub25lXCIgQGNsaWNrPVwib25DbGljayhza2luVG9uZSlcIj48L3NwYW4+XHJcbiAgPC9zcGFuPlxyXG48L2Rpdj5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiB7XHJcbiAgICBza2luOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH1cclxuICB9LFxyXG4gIGVtaXRzOiBbJ2NoYW5nZSddLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvcGVuZWQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvbkNsaWNrKHNraW5Ub25lKSB7XHJcbiAgICAgIGlmICh0aGlzLm9wZW5lZCkge1xyXG4gICAgICAgIGlmIChza2luVG9uZSAhPSB0aGlzLnNraW4pIHtcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHNraW5Ub25lKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5vcGVuZWQgPSAhdGhpcy5vcGVuZWRcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbjwvc2NyaXB0PlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX3ZtLnZpZXcuY2FuUmVuZGVyXG4gICAgPyBfYyhcbiAgICAgICAgX3ZtLnRhZyxcbiAgICAgICAge1xuICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWVtb2ppXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHRpdGxlOiBfdm0udmlldy50aXRsZSxcbiAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBfdm0udmlldy5hcmlhTGFiZWwsXG4gICAgICAgICAgICBcImRhdGEtdGl0bGVcIjogX3ZtLnRpdGxlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIG1vdXNlZW50ZXI6IF92bS5vbk1vdXNlRW50ZXIsXG4gICAgICAgICAgICBtb3VzZWxlYXZlOiBfdm0ub25Nb3VzZUxlYXZlLFxuICAgICAgICAgICAgY2xpY2s6IF92bS5vbkNsaWNrLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBjbGFzczogX3ZtLnZpZXcuY3NzQ2xhc3MsIHN0eWxlOiBfdm0udmlldy5jc3NTdHlsZSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS52aWV3LmNvbnRlbnQpKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXVxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJzZWN0aW9uXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0IGVtb2ppLW1hcnQtc3RhdGljXCIsIHN0eWxlOiBfdm0uY3VzdG9tU3R5bGVzIH0sXG4gICAgW1xuICAgICAgX3ZtLnNob3dDYXRlZ29yaWVzXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LWJhciBlbW9qaS1tYXJ0LWJhci1hbmNob3JzXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJhbmNob3JzXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICBpMThuOiBfdm0ubWVyZ2VkSTE4bixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBfdm0uY29sb3IsXG4gICAgICAgICAgICAgICAgICBjYXRlZ29yaWVzOiBfdm0udmlldy5hbGxDYXRlZ29yaWVzLFxuICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtY2F0ZWdvcnlcIjogX3ZtLnZpZXcuYWN0aXZlQ2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uQW5jaG9yQ2xpY2sgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX3QoXG4gICAgICAgIFwic2VhcmNoVGVtcGxhdGVcIixcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfdm0uc2hvd1NlYXJjaFxuICAgICAgICAgICAgICA/IF9jKFwic2VhcmNoXCIsIHtcbiAgICAgICAgICAgICAgICAgIHJlZjogXCJzZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBpMThuOiBfdm0ubWVyZ2VkSTE4bixcbiAgICAgICAgICAgICAgICAgICAgXCJhdXRvLWZvY3VzXCI6IF92bS5hdXRvRm9jdXMsXG4gICAgICAgICAgICAgICAgICAgIFwib24tc2VhcmNoXCI6IF92bS5vblNlYXJjaCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBzZWFyY2g6IF92bS5vblNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dMZWZ0OiBfdm0ub25BcnJvd0xlZnQsXG4gICAgICAgICAgICAgICAgICAgIGFycm93UmlnaHQ6IF92bS5vbkFycm93UmlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGFycm93RG93bjogX3ZtLm9uQXJyb3dEb3duLFxuICAgICAgICAgICAgICAgICAgICBhcnJvd1VwOiBfdm0ub25BcnJvd1VwLFxuICAgICAgICAgICAgICAgICAgICBlbnRlcjogX3ZtLm9uRW50ZXIsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdDogX3ZtLm9uVGV4dFNlbGVjdCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICBpMThuOiBfdm0uaTE4bixcbiAgICAgICAgICBhdXRvRm9jdXM6IF92bS5hdXRvRm9jdXMsXG4gICAgICAgICAgb25TZWFyY2g6IF92bS5vblNlYXJjaCxcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogXCJzY3JvbGxcIixcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXNjcm9sbFwiLFxuICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwidGFicGFuZWxcIiB9LFxuICAgICAgICAgIG9uOiB7IHNjcm9sbDogX3ZtLm9uU2Nyb2xsIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogXCJzY3JvbGxDb250ZW50XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZW1vamktbWFydC1saXN0XCIsXG4gICAgICAgICAgICAgICAgcm9sZTogXCJsaXN0Ym94XCIsXG4gICAgICAgICAgICAgICAgXCJhcmlhLWV4cGFuZGVkXCI6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl90KFwiY3VzdG9tQ2F0ZWdvcnlcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbChfdm0udmlldy5maWx0ZXJlZENhdGVnb3JpZXMsIGZ1bmN0aW9uIChjYXRlZ29yeSwgaWR4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiY2F0ZWdvcnlcIiwge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pbmZpbml0ZVNjcm9sbCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgPT0gX3ZtLnZpZXcuYWN0aXZlQ2F0ZWdvcnkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc1NlYXJjaGluZyxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbmZpbml0ZVNjcm9sbCB8fCBjYXRlZ29yeSA9PSB2aWV3LmFjdGl2ZUNhdGVnb3J5IHx8IGlzU2VhcmNoaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAga2V5OiBjYXRlZ29yeS5pZCxcbiAgICAgICAgICAgICAgICAgIHJlZjogXCJjYXRlZ29yaWVzX1wiICsgaWR4LFxuICAgICAgICAgICAgICAgICAgcmVmSW5Gb3I6IHRydWUsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgaTE4bjogX3ZtLm1lcmdlZEkxOG4sXG4gICAgICAgICAgICAgICAgICAgIGlkOiBjYXRlZ29yeS5pZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogY2F0ZWdvcnkubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZW1vamlzOiBjYXRlZ29yeS5lbW9qaXMsXG4gICAgICAgICAgICAgICAgICAgIFwiZW1vamktcHJvcHNcIjogX3ZtLmVtb2ppUHJvcHMsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApLFxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fdChcbiAgICAgICAgXCJwcmV2aWV3VGVtcGxhdGVcIixcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfdm0uc2hvd1ByZXZpZXdcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtYmFyIGVtb2ppLW1hcnQtYmFyLXByZXZpZXdcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInByZXZpZXdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0udGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbW9qaTogX3ZtLnZpZXcucHJldmlld0Vtb2ppLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpZGxlLWVtb2ppXCI6IF92bS5pZGxlRW1vamksXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNob3ctc2tpbi10b25lc1wiOiBfdm0uc2hvd1NraW5Ub25lcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZW1vamktcHJvcHNcIjogX3ZtLmVtb2ppUHJvcHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNraW4tcHJvcHNcIjogX3ZtLnNraW5Qcm9wcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib24tc2tpbi1jaGFuZ2VcIjogX3ZtLm9uU2tpbkNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgIHRpdGxlOiBfdm0udGl0bGUsXG4gICAgICAgICAgZW1vamk6IF92bS52aWV3LnByZXZpZXdFbW9qaSxcbiAgICAgICAgICBpZGxlRW1vamk6IF92bS5pZGxlRW1vamksXG4gICAgICAgICAgc2hvd1NraW5Ub25lczogX3ZtLnNob3dTa2luVG9uZXMsXG4gICAgICAgICAgZW1vamlQcm9wczogX3ZtLmVtb2ppUHJvcHMsXG4gICAgICAgICAgc2tpblByb3BzOiBfdm0uc2tpblByb3BzLFxuICAgICAgICAgIG9uU2tpbkNoYW5nZTogX3ZtLm9uU2tpbkNoYW5nZSxcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1hbmNob3JzXCIsIGF0dHJzOiB7IHJvbGU6IFwidGFibGlzdFwiIH0gfSxcbiAgICBfdm0uX2woX3ZtLmNhdGVnb3JpZXMsIGZ1bmN0aW9uIChjYXRlZ29yeSkge1xuICAgICAgcmV0dXJuIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAga2V5OiBjYXRlZ29yeS5pZCxcbiAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgXCJlbW9qaS1tYXJ0LWFuY2hvclwiOiB0cnVlLFxuICAgICAgICAgICAgXCJlbW9qaS1tYXJ0LWFuY2hvci1zZWxlY3RlZFwiOiBjYXRlZ29yeS5pZCA9PSBfdm0uYWN0aXZlQ2F0ZWdvcnkuaWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgY29sb3I6IGNhdGVnb3J5LmlkID09IF92bS5hY3RpdmVDYXRlZ29yeS5pZCA/IF92bS5jb2xvciA6IFwiXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgcm9sZTogXCJ0YWJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogY2F0ZWdvcnkubmFtZSxcbiAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBjYXRlZ29yeS5pZCA9PSBfdm0uYWN0aXZlQ2F0ZWdvcnkuaWQsXG4gICAgICAgICAgICBcImRhdGEtdGl0bGVcIjogX3ZtLmkxOG4uY2F0ZWdvcmllc1tjYXRlZ29yeS5pZF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImNsaWNrXCIsIGNhdGVnb3J5KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnN2Z3NbY2F0ZWdvcnkuaWRdKSB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtYW5jaG9yLWJhclwiLFxuICAgICAgICAgICAgc3R5bGU6IHsgYmFja2dyb3VuZENvbG9yOiBfdm0uY29sb3IgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXVxuICAgICAgKVxuICAgIH0pLFxuICAgIDBcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfdm0uaXNWaXNpYmxlICYmIChfdm0uaXNTZWFyY2ggfHwgX3ZtLmhhc1Jlc3VsdHMpXG4gICAgPyBfYyhcbiAgICAgICAgXCJzZWN0aW9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgXCJlbW9qaS1tYXJ0LWNhdGVnb3J5XCI6IHRydWUsXG4gICAgICAgICAgICBcImVtb2ppLW1hcnQtbm8tcmVzdWx0c1wiOiAhX3ZtLmhhc1Jlc3VsdHMsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhdHRyczogeyBcImFyaWEtbGFiZWxcIjogX3ZtLmkxOG4uY2F0ZWdvcmllc1tfdm0uaWRdIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtY2F0ZWdvcnktbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1jYXRlZ29yeS1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaTE4bi5jYXRlZ29yaWVzW192bS5pZF0pKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS5lbW9qaU9iamVjdHMsIGZ1bmN0aW9uICh7IGVtb2ppT2JqZWN0LCBlbW9qaVZpZXcgfSkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgZW1vamlWaWV3LmNhblJlbmRlclxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IGVtb2ppT2JqZWN0LmlkLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtZW1vamlcIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmFjdGl2ZUNsYXNzKGVtb2ppT2JqZWN0KSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IGVtb2ppVmlldy5hcmlhTGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlOiBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6IFwiZmFsc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1wb3NpbnNldFwiOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZXRzaXplXCI6IFwiMTgxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS10aXRsZVwiOiBlbW9qaU9iamVjdC5zaG9ydF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGVtb2ppVmlldy50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWVudGVyOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbW9qaVByb3BzLm9uRW50ZXIoZW1vamlWaWV3LmdldEVtb2ppKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VsZWF2ZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1vamlQcm9wcy5vbkxlYXZlKGVtb2ppVmlldy5nZXRFbW9qaSgpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbW9qaVByb3BzLm9uQ2xpY2soZW1vamlWaWV3LmdldEVtb2ppKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogZW1vamlWaWV3LmNzc0NsYXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogZW1vamlWaWV3LmNzc1N0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGVtb2ppVmlldy5jb250ZW50KSldXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAhX3ZtLmhhc1Jlc3VsdHNcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImVtb2ppXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICBlbW9qaTogXCJzbGV1dGhfb3Jfc3B5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbmF0aXZlOiBfdm0uZW1vamlQcm9wcy5uYXRpdmUsXG4gICAgICAgICAgICAgICAgICAgICAgc2tpbjogX3ZtLmVtb2ppUHJvcHMuc2tpbixcbiAgICAgICAgICAgICAgICAgICAgICBzZXQ6IF92bS5lbW9qaVByb3BzLnNldCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1uby1yZXN1bHRzLWxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pMThuLm5vdGZvdW5kKSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICB2YXIgX3ZtID0gdGhpcyxcbiAgICBfYyA9IF92bS5fc2VsZi5fY1xuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtcHJldmlld1wiIH0sXG4gICAgW1xuICAgICAgX3ZtLmVtb2ppXG4gICAgICAgID8gW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZW1vamlcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGVtb2ppOiBfdm0uZW1vamksXG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZTogX3ZtLmVtb2ppUHJvcHMubmF0aXZlLFxuICAgICAgICAgICAgICAgICAgICBza2luOiBfdm0uZW1vamlQcm9wcy5za2luLFxuICAgICAgICAgICAgICAgICAgICBzZXQ6IF92bS5lbW9qaVByb3BzLnNldCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5lbW9qaS5uYW1lKSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZXNcIiB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZW1vamlTaG9ydE5hbWVzLCBmdW5jdGlvbiAoc2hvcnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBzaG9ydE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LXNob3J0bmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiOlwiICsgX3ZtLl9zKHNob3J0TmFtZSkgKyBcIjpcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LWVtb3RpY29uc1wiIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5lbW9qaUVtb3RpY29ucywgZnVuY3Rpb24gKGVtb3RpY29uKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBlbW90aWNvbixcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbW9qaS1tYXJ0LXByZXZpZXctZW1vdGljb25cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoZW1vdGljb24pKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdXG4gICAgICAgIDogW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LWVtb2ppXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZW1vamlcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIGVtb2ppOiBfdm0uaWRsZUVtb2ppLFxuICAgICAgICAgICAgICAgICAgICBuYXRpdmU6IF92bS5lbW9qaVByb3BzLm5hdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgc2tpbjogX3ZtLmVtb2ppUHJvcHMuc2tpbixcbiAgICAgICAgICAgICAgICAgICAgc2V0OiBfdm0uZW1vamlQcm9wcy5zZXQsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LWRhdGFcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtdGl0bGUtbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uc2hvd1NraW5Ub25lc1xuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZW1vamktbWFydC1wcmV2aWV3LXNraW5zXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJza2luc1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2tpbjogX3ZtLnNraW5Qcm9wcy5za2luIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uU2tpbkNoYW5nZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgXSxcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVtb2ppLW1hcnQtc2VhcmNoXCIgfSwgW1xuICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgIHZhbHVlOiBfdm0udmFsdWUsXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWx1ZVwiLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICBwbGFjZWhvbGRlcjogX3ZtLmkxOG4uc2VhcmNoLFxuICAgICAgICByb2xlOiBcInRleHRib3hcIixcbiAgICAgICAgXCJhcmlhLWF1dG9jb21wbGV0ZVwiOiBcImxpc3RcIixcbiAgICAgICAgXCJhcmlhLW93bnNcIjogXCJlbW9qaS1tYXJ0LWxpc3RcIixcbiAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiU2VhcmNoIGZvciBhbiBlbW9qaVwiLFxuICAgICAgICBcImFyaWEtZGVzY3JpYmVkYnlcIjogXCJlbW9qaS1tYXJ0LXNlYXJjaC1kZXNjcmlwdGlvblwiLFxuICAgICAgfSxcbiAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udmFsdWUgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGtleWRvd246IFtcbiAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJsZWZ0XCIsIDM3LCAkZXZlbnQua2V5LCBbXG4gICAgICAgICAgICAgICAgXCJMZWZ0XCIsXG4gICAgICAgICAgICAgICAgXCJBcnJvd0xlZnRcIixcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIGlmIChcImJ1dHRvblwiIGluICRldmVudCAmJiAkZXZlbnQuYnV0dG9uICE9PSAwKSByZXR1cm4gbnVsbFxuICAgICAgICAgICAgcmV0dXJuICgoJGV2ZW50KSA9PiBfdm0uJGVtaXQoXCJhcnJvd0xlZnRcIiwgJGV2ZW50KSkuYXBwbHkoXG4gICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgIGFyZ3VtZW50c1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwicmlnaHRcIiwgMzksICRldmVudC5rZXksIFtcbiAgICAgICAgICAgICAgICBcIlJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgXCJBcnJvd1JpZ2h0XCIsXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICBpZiAoXCJidXR0b25cIiBpbiAkZXZlbnQgJiYgJGV2ZW50LmJ1dHRvbiAhPT0gMikgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIHJldHVybiAoKCkgPT4gX3ZtLiRlbWl0KFwiYXJyb3dSaWdodFwiKSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZG93blwiLCA0MCwgJGV2ZW50LmtleSwgW1xuICAgICAgICAgICAgICAgIFwiRG93blwiLFxuICAgICAgICAgICAgICAgIFwiQXJyb3dEb3duXCIsXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICByZXR1cm4gKCgpID0+IF92bS4kZW1pdChcImFycm93RG93blwiKSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwidXBcIiwgMzgsICRldmVudC5rZXksIFtcIlVwXCIsIFwiQXJyb3dVcFwiXSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIHJldHVybiAoKCRldmVudCkgPT4gX3ZtLiRlbWl0KFwiYXJyb3dVcFwiLCAkZXZlbnQpKS5hcHBseShcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgYXJndW1lbnRzXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlbnRlclwiLCAxMywgJGV2ZW50LmtleSwgXCJFbnRlclwiKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgcmV0dXJuICgoKSA9PiBfdm0uJGVtaXQoXCJlbnRlclwiKSkuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm5cbiAgICAgICAgICBfdm0udmFsdWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcInNwYW5cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGlkZGVuXCIsXG4gICAgICAgIGF0dHJzOiB7IGlkOiBcImVtb2ppLXBpY2tlci1zZWFyY2gtZGVzY3JpcHRpb25cIiB9LFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLl92KFxuICAgICAgICAgIFwiVXNlIHRoZSBsZWZ0LCByaWdodCwgdXAgYW5kIGRvd24gYXJyb3cga2V5cyB0byBuYXZpZ2F0ZSB0aGUgZW1vamkgc2VhcmNoXFxuICAgIHJlc3VsdHMuXCJcbiAgICAgICAgKSxcbiAgICAgIF1cbiAgICApLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIHZhciBfdm0gPSB0aGlzLFxuICAgIF9jID0gX3ZtLl9zZWxmLl9jXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGNsYXNzOiB7XG4gICAgICAgIFwiZW1vamktbWFydC1za2luLXN3YXRjaGVzXCI6IHRydWUsXG4gICAgICAgIFwiZW1vamktbWFydC1za2luLXN3YXRjaGVzLW9wZW5lZFwiOiBfdm0ub3BlbmVkLFxuICAgICAgfSxcbiAgICB9LFxuICAgIF92bS5fbCg2LCBmdW5jdGlvbiAoc2tpblRvbmUpIHtcbiAgICAgIHJldHVybiBfYyhcbiAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IHNraW5Ub25lLFxuICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICBcImVtb2ppLW1hcnQtc2tpbi1zd2F0Y2hcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZW1vamktbWFydC1za2luLXN3YXRjaC1zZWxlY3RlZFwiOiBfdm0uc2tpbiA9PSBza2luVG9uZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgIGNsYXNzOiBcImVtb2ppLW1hcnQtc2tpbiBlbW9qaS1tYXJ0LXNraW4tdG9uZS1cIiArIHNraW5Ub25lLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2xpY2soc2tpblRvbmUpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdXG4gICAgICApXG4gICAgfSksXG4gICAgMFxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciAvKiBzZXJ2ZXIgb25seSAqLyxcbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID1cbiAgICB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJyA/IHNjcmlwdEV4cG9ydHMub3B0aW9ucyA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikge1xuICAgIC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmcgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9FbW9qaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTM0YWQ5NDZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FbW9qaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXE9uZURyaXZlXFxcXFByb2plY3RzXFxcXHdpa2lfZ2FkZ2V0c1xcXFxSZWFjdGlvblxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1MzRhZDk0NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1MzRhZDk0NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1MzRhZDk0NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRW1vamkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUzNGFkOTQ2XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTM0YWQ5NDYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL0Vtb2ppLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2UhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FbW9qaS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Vtb2ppLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2UhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FbW9qaS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTM0YWQ5NDZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGlja2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMTZlOTA4NFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1BpY2tlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGlja2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxPbmVEcml2ZVxcXFxQcm9qZWN0c1xcXFx3aWtpX2dhZGdldHNcXFxcUmVhY3Rpb25cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZDE2ZTkwODQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZDE2ZTkwODQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZDE2ZTkwODQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1BpY2tlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDE2ZTkwODRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkMTZlOTA4NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvUGlja2VyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2UhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2UhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QaWNrZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BpY2tlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDE2ZTkwODRcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYW5jaG9ycy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTExODgxMDRcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxPbmVEcml2ZVxcXFxQcm9qZWN0c1xcXFx3aWtpX2dhZGdldHNcXFxcUmVhY3Rpb25cXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTExODgxMDQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTExODgxMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTExODgxMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUxMTg4MTA0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTExODgxMDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL2FuY2hvcnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FuY2hvcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2UhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2UhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hbmNob3JzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MTE4ODEwNFwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzc2Y2RhMGVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXE9uZURyaXZlXFxcXFByb2plY3RzXFxcXHdpa2lfZ2FkZ2V0c1xcXFxSZWFjdGlvblxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczNzZjZGEwZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNzZjZGEwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNzZjZGEwZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY2F0ZWdvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3NmNkYTBlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzc2Y2RhMGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL2NhdGVnb3J5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2UhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhdGVnb3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2UhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXRlZ29yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzc2Y2RhMGVcIiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQW5jaG9ycyB9IGZyb20gJy4vYW5jaG9ycy52dWUnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2F0ZWdvcnkgfSBmcm9tICcuL2NhdGVnb3J5LnZ1ZSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcmV2aWV3IH0gZnJvbSAnLi9wcmV2aWV3LnZ1ZSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWFyY2ggfSBmcm9tICcuL3NlYXJjaC52dWUnXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2tpbnMgfSBmcm9tICcuL3NraW5zLnZ1ZSdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFbW9qaSB9IGZyb20gJy4vRW1vamkudnVlJ1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIFBpY2tlciB9IGZyb20gJy4vUGlja2VyLnZ1ZSdcclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9wcmV2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTA1NmMzMFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXE9uZURyaXZlXFxcXFByb2plY3RzXFxcXHdpa2lfZ2FkZ2V0c1xcXFxSZWFjdGlvblxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczNTA1NmMzMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNTA1NmMzMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNTA1NmMzMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcHJldmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzUwNTZjMzBcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczNTA1NmMzMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvcHJldmlldy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcHJldmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ByZXZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1MDU2YzMwXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGFkNDFiYjhcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcT25lRHJpdmVcXFxcUHJvamVjdHNcXFxcd2lraV9nYWRnZXRzXFxcXFJlYWN0aW9uXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRhZDQxYmI4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRhZDQxYmI4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRhZDQxYmI4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhZDQxYmI4XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGFkNDFiYjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL3NlYXJjaC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2UhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhZDQxYmI4XCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3NraW5zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzYxNDg5NFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NraW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9za2lucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcT25lRHJpdmVcXFxcUHJvamVjdHNcXFxcd2lraV9nYWRnZXRzXFxcXFJlYWN0aW9uXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzFjNjE0ODk0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFjNjE0ODk0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFjNjE0ODk0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9za2lucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWM2MTQ4OTRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYzYxNDg5NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvc2tpbnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NraW5zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTEudXNlIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2tpbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1syXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NraW5zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYzYxNDg5NFwiIiwiY29uc3QgX1N0cmluZyA9IFN0cmluZ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgX1N0cmluZy5mcm9tQ29kZVBvaW50IHx8XHJcbiAgZnVuY3Rpb24gc3RyaW5nRnJvbUNvZGVQb2ludCgpIHtcclxuICAgIHZhciBNQVhfU0laRSA9IDB4NDAwMFxyXG4gICAgdmFyIGNvZGVVbml0cyA9IFtdXHJcbiAgICB2YXIgaGlnaFN1cnJvZ2F0ZVxyXG4gICAgdmFyIGxvd1N1cnJvZ2F0ZVxyXG4gICAgdmFyIGluZGV4ID0gLTFcclxuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXHJcbiAgICBpZiAoIWxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gJydcclxuICAgIH1cclxuICAgIHZhciByZXN1bHQgPSAnJ1xyXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgdmFyIGNvZGVQb2ludCA9IE51bWJlcihhcmd1bWVudHNbaW5kZXhdKVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIWlzRmluaXRlKGNvZGVQb2ludCkgfHwgLy8gYE5hTmAsIGArSW5maW5pdHlgLCBvciBgLUluZmluaXR5YFxyXG4gICAgICAgIGNvZGVQb2ludCA8IDAgfHwgLy8gbm90IGEgdmFsaWQgVW5pY29kZSBjb2RlIHBvaW50XHJcbiAgICAgICAgY29kZVBvaW50ID4gMHgxMGZmZmYgfHwgLy8gbm90IGEgdmFsaWQgVW5pY29kZSBjb2RlIHBvaW50XHJcbiAgICAgICAgTWF0aC5mbG9vcihjb2RlUG9pbnQpICE9IGNvZGVQb2ludCAvLyBub3QgYW4gaW50ZWdlclxyXG4gICAgICApIHtcclxuICAgICAgICB0aHJvdyBSYW5nZUVycm9yKCdJbnZhbGlkIGNvZGUgcG9pbnQ6ICcgKyBjb2RlUG9pbnQpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNvZGVQb2ludCA8PSAweGZmZmYpIHtcclxuICAgICAgICAvLyBCTVAgY29kZSBwb2ludFxyXG4gICAgICAgIGNvZGVVbml0cy5wdXNoKGNvZGVQb2ludClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBBc3RyYWwgY29kZSBwb2ludDsgc3BsaXQgaW4gc3Vycm9nYXRlIGhhbHZlc1xyXG4gICAgICAgIC8vIGh0dHA6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmcjc3Vycm9nYXRlLWZvcm11bGFlXHJcbiAgICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcclxuICAgICAgICBoaWdoU3Vycm9nYXRlID0gKGNvZGVQb2ludCA+PiAxMCkgKyAweGQ4MDBcclxuICAgICAgICBsb3dTdXJyb2dhdGUgPSAoY29kZVBvaW50ICUgMHg0MDApICsgMHhkYzAwXHJcbiAgICAgICAgY29kZVVuaXRzLnB1c2goaGlnaFN1cnJvZ2F0ZSwgbG93U3Vycm9nYXRlKVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChpbmRleCArIDEgPT09IGxlbmd0aCB8fCBjb2RlVW5pdHMubGVuZ3RoID4gTUFYX1NJWkUpIHtcclxuICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBjb2RlVW5pdHMpXHJcbiAgICAgICAgY29kZVVuaXRzLmxlbmd0aCA9IDBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFxyXG4gIH1cclxuIiwiY29uc3QgU1ZHcyA9IHtcclxuICBhY3Rpdml0eTogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzcyIDAgMTJjMCA2LjYyNyA1LjM3MyAxMiAxMiAxMiA2LjYyOCAwIDEyLTUuMzczIDEyLTEyIDAtNi42MjgtNS4zNzItMTItMTItMTJtOS45NDkgMTFIMTcuMDVjLjIyNC0yLjUyNyAxLjIzMi00Ljc3MyAxLjk2OC02LjExM0E5Ljk2NiA5Ljk2NiAwIDAgMSAyMS45NDkgMTFNMTMgMTFWMi4wNTFhOS45NDUgOS45NDUgMCAwIDEgNC40MzIgMS41NjRjLS44NTggMS40OTEtMi4xNTYgNC4yMi0yLjM5MiA3LjM4NUgxM3ptLTIgMEg4Ljk2MWMtLjIzOC0zLjE2NS0xLjUzNi01Ljg5NC0yLjM5My03LjM4NUE5Ljk1IDkuOTUgMCAwIDEgMTEgMi4wNTFWMTF6bTAgMnY4Ljk0OWE5LjkzNyA5LjkzNyAwIDAgMS00LjQzMi0xLjU2NGMuODU3LTEuNDkyIDIuMTU1LTQuMjIxIDIuMzkzLTcuMzg1SDExem00LjA0IDBjLjIzNiAzLjE2NCAxLjUzNCA1Ljg5MyAyLjM5MiA3LjM4NUE5LjkyIDkuOTIgMCAwIDEgMTMgMjEuOTQ5VjEzaDIuMDR6TTQuOTgyIDQuODg3QzUuNzE4IDYuMjI3IDYuNzI2IDguNDczIDYuOTUxIDExaC00LjlhOS45NzcgOS45NzcgMCAwIDEgMi45MzEtNi4xMTNNMi4wNTEgMTNoNC45Yy0uMjI2IDIuNTI3LTEuMjMzIDQuNzcxLTEuOTY5IDYuMTEzQTkuOTcyIDkuOTcyIDAgMCAxIDIuMDUxIDEzbTE2Ljk2NyA2LjExM2MtLjczNS0xLjM0Mi0xLjc0NC0zLjU4Ni0xLjk2OC02LjExM2g0Ljg5OWE5Ljk2MSA5Ljk2MSAwIDAgMS0yLjkzMSA2LjExM1wiLz48L3N2Zz5gLFxyXG5cclxuICBjdXN0b206IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDIuMDAwMDAwLCAxLjAwMDAwMClcIj48cmVjdCBpZD1cIlJlY3RhbmdsZVwiIHg9XCI4XCIgeT1cIjBcIiB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIyMVwiIHJ4PVwiMS41XCI+PC9yZWN0PjxyZWN0IGlkPVwiUmVjdGFuZ2xlXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkuODQzLCAxMC41NDkpIHJvdGF0ZSg2MCkgdHJhbnNsYXRlKC05Ljg0MywgLTEwLjU0OSkgXCIgeD1cIjguMzQzXCIgeT1cIjAuMDQ5XCIgd2lkdGg9XCIzXCIgaGVpZ2h0PVwiMjFcIiByeD1cIjEuNVwiPjwvcmVjdD48cmVjdCBpZD1cIlJlY3RhbmdsZVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5Ljg0MywgMTAuNTQ5KSByb3RhdGUoLTYwKSB0cmFuc2xhdGUoLTkuODQzLCAtMTAuNTQ5KSBcIiB4PVwiOC4zNDNcIiB5PVwiMC4wNDlcIiB3aWR0aD1cIjNcIiBoZWlnaHQ9XCIyMVwiIHJ4PVwiMS41XCI+PC9yZWN0PjwvZz48L3N2Zz5gLFxyXG5cclxuICBmbGFnczogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTAgMGw2LjA4NCAyNEg4TDEuOTE2IDB6TTIxIDVoLTRsLTEtNEg0bDMgMTJoM2wxIDRoMTNMMjEgNXpNNi41NjMgM2g3Ljg3NWwyIDhIOC41NjNsLTItOHptOC44MzIgMTBsLTIuODU2IDEuOTA0TDEyLjA2MyAxM2gzLjMzMnpNMTkgMTNsLTEuNS02aDEuOTM4bDIgOEgxNmwzLTJ6XCIvPjwvc3ZnPmAsXHJcblxyXG4gIGZvb2RzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTcgNC45NzhjLTEuODM4IDAtMi44NzYuMzk2LTMuNjguOTM0LjUxMy0xLjE3MiAxLjc2OC0yLjkzNCA0LjY4LTIuOTM0YTEgMSAwIDAgMCAwLTJjLTIuOTIxIDAtNC42MjkgMS4zNjUtNS41NDcgMi41MTItLjA2NC4wNzgtLjExOS4xNjItLjE4LjI0NEMxMS43MyAxLjgzOCAxMC43OTguMDIzIDkuMjA3LjAyMyA4LjU3OS4wMjIgNy44NS4zMDYgNyAuOTc4IDUuMDI3IDIuNTQgNS4zMjkgMy45MDIgNi40OTIgNC45OTkgMy42MDkgNS4yMjIgMCA3LjM1MiAwIDEyLjk2OWMwIDQuNTgyIDQuOTYxIDExLjAwOSA5IDExLjAwOSAxLjk3NSAwIDIuMzcxLS40ODYgMy0xIC42MjkuNTE0IDEuMDI1IDEgMyAxIDQuMDM5IDAgOS02LjQxOCA5LTExIDAtNS45NTMtNC4wNTUtOC03LThNOC4yNDIgMi41NDZjLjY0MS0uNTA4Ljk0My0uNTIzLjk2NS0uNTIzLjQyNi4xNjkuOTc1IDEuNDA1IDEuMzU3IDMuMDU1LTEuNTI3LS42MjktMi43NDEtMS4zNTItMi45OC0xLjg0Ni4wNTktLjExMi4yNDEtLjM1Ni42NTgtLjY4Nk0xNSAyMS45NzhjLTEuMDggMC0xLjIxLS4xMDktMS41NTktLjQwMmwtLjE3Ni0uMTQ2Yy0uMzY3LS4zMDItLjgxNi0uNDUyLTEuMjY2LS40NTJzLS44OTguMTUtMS4yNjYuNDUybC0uMTc2LjE0NmMtLjM0Ny4yOTItLjQ3Ny40MDItMS41NTcuNDAyLTIuODEzIDAtNy01LjM4OS03LTkuMDA5IDAtNS44MjMgNC40ODgtNS45OTEgNS01Ljk5MSAxLjkzOSAwIDIuNDg0LjQ3MSAzLjM4NyAxLjI1MWwuMzIzLjI3NmExLjk5NSAxLjk5NSAwIDAgMCAyLjU4IDBsLjMyMy0uMjc2Yy45MDItLjc4IDEuNDQ3LTEuMjUxIDMuMzg3LTEuMjUxLjUxMiAwIDUgLjE2OCA1IDYgMCAzLjYxNy00LjE4NyA5LTcgOVwiLz48L3N2Zz5gLFxyXG5cclxuICBuYXR1cmU6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xNS41IDhhMS41IDEuNSAwIDEgMCAuMDAxIDMuMDAxQTEuNSAxLjUgMCAwIDAgMTUuNSA4TTguNSA4YTEuNSAxLjUgMCAxIDAgLjAwMSAzLjAwMUExLjUgMS41IDAgMCAwIDguNSA4XCIvPjxwYXRoIGQ9XCJNMTguOTMzIDBoLS4wMjdjLS45NyAwLTIuMTM4Ljc4Ny0zLjAxOCAxLjQ5Ny0xLjI3NC0uMzc0LTIuNjEyLS41MS0zLjg4Ny0uNTEtMS4yODUgMC0yLjYxNi4xMzMtMy44NzQuNTE3QzcuMjQ1Ljc5IDYuMDY5IDAgNS4wOTMgMGgtLjAyN0MzLjM1MiAwIC4wNyAyLjY3LjAwMiA3LjAyNmMtLjAzOSAyLjQ3OS4yNzYgNC4yMzggMS4wNCA1LjAxMy4yNTQuMjU4Ljg4Mi42NzcgMS4yOTUuODgyLjE5MSAzLjE3Ny45MjIgNS4yMzggMi41MzYgNi4zOC44OTcuNjM3IDIuMTg3Ljk0OSAzLjIgMS4xMDJDOC4wNCAyMC42IDggMjAuNzk1IDggMjFjMCAxLjc3MyAyLjM1IDMgNCAzIDEuNjQ4IDAgNC0xLjIyNyA0LTMgMC0uMjAxLS4wMzgtLjM5My0uMDcyLS41ODYgMi41NzMtLjM4NSA1LjQzNS0xLjg3NyA1LjkyNS03LjU4Ny4zOTYtLjIyLjg4Ny0uNTY4IDEuMTA0LS43ODguNzYzLS43NzQgMS4wNzktMi41MzQgMS4wNC01LjAxM0MyMy45MjkgMi42NyAyMC42NDYgMCAxOC45MzMgME0zLjIyMyA5LjEzNWMtLjIzNy4yODEtLjgzNyAxLjE1NS0uODg0IDEuMjM4LS4xNS0uNDEtLjM2OC0xLjM0OS0uMzM3LTMuMjkxLjA1MS0zLjI4MSAyLjQ3OC00Ljk3MiAzLjA5MS01LjAzMS4yNTYuMDE1LjczMS4yNyAxLjI2NS42NDYtMS4xMSAxLjE3MS0yLjI3NSAyLjkxNS0yLjM1MiA1LjEyNS0uMTMzLjU0Ni0uMzk4Ljg1OC0uNzgzIDEuMzEzTTEyIDIyYy0uOTAxIDAtMS45NTQtLjY5My0yLTEgMC0uNjU0LjQ3NS0xLjIzNiAxLTEuNjAyVjIwYTEgMSAwIDEgMCAyIDB2LS42MDJjLjUyNC4zNjUgMSAuOTQ3IDEgMS42MDItLjA0Ni4zMDctMS4wOTkgMS0yIDFtMy0zLjQ4di4wMmE0Ljc1MiA0Ljc1MiAwIDAgMC0xLjI2Mi0xLjAyYzEuMDkyLS41MTYgMi4yMzktMS4zMzQgMi4yMzktMi4yMTcgMC0xLjg0Mi0xLjc4MS0yLjE5NS0zLjk3Ny0yLjE5NS0yLjE5NiAwLTMuOTc4LjM1NC0zLjk3OCAyLjE5NSAwIC44ODMgMS4xNDggMS43MDEgMi4yMzggMi4yMTdBNC44IDQuOCAwIDAgMCA5IDE4LjUzOXYtLjAyNWMtMS0uMDc2LTIuMTgyLS4yODEtMi45NzMtLjg0Mi0xLjMwMS0uOTItMS44MzgtMy4wNDUtMS44NTMtNi40NzhsLjAyMy0uMDQxYy40OTYtLjgyNiAxLjQ5LTEuNDUgMS44MDQtMy4xMDIgMC0yLjA0NyAxLjM1Ny0zLjYzMSAyLjM2Mi00LjUyMkM5LjM3IDMuMTc4IDEwLjU1NSAzIDExLjk0OCAzYzEuNDQ3IDAgMi42ODUuMTkyIDMuNzMzLjU3IDEgLjkgMi4zMTYgMi40NjUgMi4zMTYgNC40OC4zMTMgMS42NTEgMS4zMDcgMi4yNzUgMS44MDMgMy4xMDIuMDM1LjA1OC4wNjguMTE3LjEwMi4xNzgtLjA1OSA1Ljk2Ny0xLjk0OSA3LjAxLTQuOTAyIDcuMTltNi42MjgtOC4yMDJjLS4wMzctLjA2NS0uMDc0LS4xMy0uMTEzLS4xOTVhNy41ODcgNy41ODcgMCAwIDAtLjczOS0uOTg3Yy0uMzg1LS40NTUtLjY0OC0uNzY4LS43ODItMS4zMTMtLjA3Ni0yLjIwOS0xLjI0MS0zLjk1NC0yLjM1My01LjEyNC41MzEtLjM3NiAxLjAwNC0uNjMgMS4yNjEtLjY0Ny42MzYuMDcxIDMuMDQ0IDEuNzY0IDMuMDk2IDUuMDMxLjAyNyAxLjgxLS4zNDcgMy4yMTgtLjM3IDMuMjM1XCIvPjwvc3ZnPmAsXHJcblxyXG4gIG9iamVjdHM6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0xMiAwYTkgOSAwIDAgMC01IDE2LjQ4MlYyMXMyLjAzNSAzIDUgMyA1LTMgNS0zdi00LjUxOEE5IDkgMCAwIDAgMTIgMHptMCAyYzMuODYgMCA3IDMuMTQxIDcgN3MtMy4xNCA3LTcgNy03LTMuMTQxLTctNyAzLjE0LTcgNy03ek05IDE3LjQ3N2MuOTQuMzMyIDEuOTQ2LjUyMyAzIC41MjNzMi4wNi0uMTkgMy0uNTIzdi44MzRjLS45MS40MzYtMS45MjUuNjg5LTMgLjY4OWE2LjkyNCA2LjkyNCAwIDAgMS0zLS42OXYtLjgzM3ptLjIzNiAzLjA3QTguODU0IDguODU0IDAgMCAwIDEyIDIxYy45NjUgMCAxLjg4OC0uMTY3IDIuNzU4LS40NTFDMTQuMTU1IDIxLjE3MyAxMy4xNTMgMjIgMTIgMjJjLTEuMTAyIDAtMi4xMTctLjc4OS0yLjc2NC0xLjQ1M3pcIi8+PHBhdGggZD1cIk0xNC43NDUgMTIuNDQ5aC0uMDA0Yy0uODUyLS4wMjQtMS4xODgtLjg1OC0xLjU3Ny0xLjgyNC0uNDIxLTEuMDYxLS43MDMtMS41NjEtMS4xODItMS41NjZoLS4wMDljLS40ODEgMC0uNzgzLjQ5Ny0xLjIzNSAxLjUzNy0uNDM2Ljk4Mi0uODAxIDEuODExLTEuNjM2IDEuNzkxbC0uMjc2LS4wNDNjLS41NjUtLjE3MS0uODUzLS42OTEtMS4yODQtMS43OTQtLjEyNS0uMzEzLS4yMDItLjYzMi0uMjctLjkxMy0uMDUxLS4yMTMtLjEyNy0uNTMtLjE5NS0uNjM0QzcuMDY3IDkuMDA0IDcuMDM5IDkgNi45OSA5QTEgMSAwIDAgMSA3IDdoLjAxYzEuNjYyLjAxNyAyLjAxNSAxLjM3MyAyLjE5OCAyLjEzNC40ODYtLjk4MSAxLjMwNC0yLjA1OCAyLjc5Ny0yLjA3NSAxLjUzMS4wMTggMi4yOCAxLjE1MyAyLjczMSAyLjE0MWwuMDAyLS4wMDhDMTQuOTQ0IDguNDI0IDE1LjMyNyA3IDE2Ljk3OSA3aC4wMzJBMSAxIDAgMSAxIDE3IDloLS4wMTFjLS4xNDkuMDc2LS4yNTYuNDc0LS4zMTkuNzA5YTYuNDg0IDYuNDg0IDAgMCAxLS4zMTEuOTUxYy0uNDI5Ljk3My0uNzkgMS43ODktMS42MTQgMS43ODlcIi8+PC9zdmc+YCxcclxuXHJcbiAgc21pbGV5czogYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIj48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMG0wIDIyQzYuNDg2IDIyIDIgMTcuNTE0IDIgMTJTNi40ODYgMiAxMiAyczEwIDQuNDg2IDEwIDEwLTQuNDg2IDEwLTEwIDEwXCIvPjxwYXRoIGQ9XCJNOCA3YTIgMiAwIDEgMC0uMDAxIDMuOTk5QTIgMiAwIDAgMCA4IDdNMTYgN2EyIDIgMCAxIDAtLjAwMSAzLjk5OUEyIDIgMCAwIDAgMTYgN00xNS4yMzIgMTVjLS42OTMgMS4xOTUtMS44NyAyLTMuMzQ5IDItMS40NzcgMC0yLjY1NS0uODA1LTMuMzQ3LTJIMTVtMy0ySDZhNiA2IDAgMSAwIDEyIDBcIi8+PC9zdmc+YCxcclxuXHJcbiAgcGVvcGxlOiBgPHN2ZyB4bWxuczpzdmc9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjI0XCIgd2lkdGg9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj4gPHBhdGggaWQ9XCJwYXRoMzgxNFwiIGQ9XCJtIDMuMzU5MTA4OSwyMS4xNzcyNiBjIDAuMTcyMDM2LDAuMDkzODUgNC4yNjU5OTQsMi4yOTgzNyA4LjgxNDQ0NTEsMi4yOTgzNyA0LjkyNzc2NywwIDguNjcwODk0LC0yLjIxMTg4MyA4LjgyNzgyLC0yLjMwNjAxOSAwLjExMzA3OSwtMC4wNjc4NSAwLjE4MjI2OCwtMC4xOTAwNTEgMC4xODIyNjcsLTAuMzIxOTIzIDAsLTMuMDMxMTkgLTAuOTI5NDk0LC01LjgwNDkzNiAtMi42MTcxOTYsLTcuODEwNzEyIC0xLjE4MDYwMywtMS40MDMxMzQgLTIuNjYxOTE4LC0yLjM1OTUxNiAtNC4yOTU2OTksLTIuNzk5NzkxIDQuNjk5MTE4LC0yLjIzNjI1OCAzLjEwMjMwNiwtOS4yODYxNzE2MiAtMi4wOTcxOTEsLTkuMjg2MTcxNjIgLTUuMTk5NDk3OCwwIC02Ljc5NjMxMDMsNy4wNDk5MTM2MiAtMi4wOTcxOTIsOS4yODYxNzE2MiAtMS42MzM3ODIxLDAuNDQwMjc1IC0zLjExNTA5NzEsMS4zOTY3OTggLTQuMjk1Njk5MSwyLjc5OTc5MSAtMS42ODc3MDMsMi4wMDU3NzYgLTIuNjE3MTk2LDQuNzc5NTIyIC0yLjYxNzE5Niw3LjgxMDcxMiAxLjJlLTYsMC4xMzczNzggMC4wNzUwMzksMC4yNjM3ODUgMC4xOTU2NDEsMC4zMjk1NzIgeiBNIDguMDQzOTMxOSw1LjgzMDg3ODMgQyA4LjA0MzkzMDksMi4xNTE1MjEgMTIuNDkyMTA3LDAuMzA5NTU4MTEgMTUuMDkzNDkxLDIuOTEwOTQxMSAxNy42OTQ4NzQsNS41MTIzMjQxIDE1Ljg1MjkxMSw5Ljk2MDUwMDYgMTIuMTczNTU0LDkuOTYwNSA5Ljg5Mzg5OTEsOS45NTc5MTM1IDguMDQ2NTE4Niw4LjExMDUzMzIgOC4wNDM5MzE5LDUuODMwODc4MyBaIG0gLTEuNjg4NzgyLDcuNjg5NDk3NyBjIDEuNTI0NTM1LC0xLjgxMTQ0OSAzLjU5MDY2MDEsLTIuODA5MDM1IDUuODE4NDA0MSwtMi44MDkwMzUgMi4yMjc3NDQsMCA0LjI5Mzg2OSwwLjk5NzU4NiA1LjgxODQwNCwyLjgwOTAzNSAxLjUzMzYzOSwxLjgyMjU3MSAyLjM5NTkzMiw0LjMzOTg1OCAyLjQzOTE1Miw3LjEwODMwMSAtMC44MDMzNTIsMC40MzQ4NzcgLTQuMTQxNjM2LDIuMDk2MTEyIC04LjI1NzU1NiwyLjA5NjExMiAtMy44MDYyOTIxLDAgLTcuMzkxMDg2MSwtMS42NzEwNDMgLTguMjU3MzY4MSwtMi4xMDQ5ODEgMC4wNDUwNSwtMi43NjUwMTcgMC45MDY5NjgsLTUuMjc4Nzg1IDIuNDM4OTY0LC03LjA5OTQzMiB6XCIgLz4gPHBhdGggaWQ9XCJwYXRoMzgxNlwiIGQ9XCJNIDEyLjE3MzgyOCAwLjM4ODY3MTg4IEMgOS4zMTk4NTEzIDAuMzg4NjcxODcgNy4zNzcwOTg4IDIuMzY3MjI4NSA2Ljg2NTIzNDQgNC42MzA4NTk0IEMgNi40MjE4NjA4IDYuNTkxNjAxNSA3LjExNTM1NjIgOC43Njc2MTE3IDguOTY0ODQzOCAxMC4xMjY5NTMgQyA3LjYxNDEyNDkgMTAuNjc3Mzc2IDYuMzU1MDUxMSAxMS40ODA5NDQgNS4zNDk2MDk0IDEyLjY3NTc4MSBDIDMuNTYyOTMxNyAxNC43OTkxODUgMi42MDE1NjI1IDE3LjcwMTQ3NSAyLjYwMTU2MjUgMjAuODQ3NjU2IEMgMi42MDE1NjU0IDIxLjE4OTg2MSAyLjc4OTQyNzYgMjEuNTA4MDAyIDMuMDg5ODQzOCAyMS42NzE4NzUgQyAzLjMwNDQwNjggMjEuNzg4OTI1IDcuNDQzNjIzOSAyNC4wMzkwNjIgMTIuMTczODI4IDI0LjAzOTA2MiBDIDE3LjI2OTkxOCAyNC4wMzkwNjIgMjEuMDgzNTY4IDIxLjc3Njc4NiAyMS4yOTEwMTYgMjEuNjUyMzQ0IEMgMjEuNTcyODEgMjEuNDgzMjY2IDIxLjc0NjA5NyAyMS4xNzYyODIgMjEuNzQ2MDk0IDIwLjg0NzY1NiBDIDIxLjc0NjA5NCAxNy43MDE0NzUgMjAuNzgyNzcgMTQuNzk5MTg1IDE4Ljk5NjA5NCAxMi42NzU3ODEgQyAxNy45OTA0NTUgMTEuNDgwNTkxIDE2LjczMzgxOCAxMC42NzUzNjIgMTUuMzgyODEyIDEwLjEyNSBDIDE3LjIzMTEzMiA4Ljc2NTU1NTIgMTcuOTI1Njc1IDYuNTkxMDcwMSAxNy40ODI0MjIgNC42MzA4NTk0IEMgMTYuOTcwNTU3IDIuMzY3MjI4NSAxNS4wMjc4MDUgMC4zODg2NzE4OCAxMi4xNzM4MjggMC4zODg2NzE4OCB6IE0gMTIuNzkyOTY5IDIuMzAwNzgxMiBDIDEzLjQ2NjI1MyAyLjQxNjE3OTIgMTQuMTI1MTEzIDIuNzM4Mzk0MSAxNC42OTUzMTIgMy4zMDg1OTM4IEMgMTUuODM1NzEyIDQuNDQ4OTkzMSAxNS45ODU2MDQgNS45NDczNTQ5IDE1LjQ2ODc1IDcuMTk1MzEyNSBDIDE0Ljk1MTg5NiA4LjQ0MzI3MDEgMTMuNzg2ODI4IDkuMzk4NDM3OCAxMi4xNzM4MjggOS4zOTg0Mzc1IEMgMTAuMTk3NzE5IDkuMzk2MTk1NCA4LjYwNzcxMSA3LjgwNjE4NyA4LjYwNTQ2ODggNS44MzAwNzgxIEMgOC42MDU0NjgzIDQuMjE3MDc4NSA5LjU2MDYzNjIgMy4wNTIwMTAyIDEwLjgwODU5NCAyLjUzNTE1NjIgQyAxMS40MzI1NzMgMi4yNzY3MjkzIDEyLjExOTY4NSAyLjE4NTM4MzMgMTIuNzkyOTY5IDIuMzAwNzgxMiB6IE0gMTIuMTczODI4IDExLjI3MzQzOCBDIDE0LjIzMzY0NyAxMS4yNzM0MzggMTYuMTMzNjc0IDEyLjE4NTA4NCAxNy41NjI1IDEzLjg4MjgxMiBDIDE4LjkzMDY5IDE1LjUwODc2NSAxOS42OTgzNDcgMTcuNzc2OTY5IDE5LjgwODU5NCAyMC4yODMyMDMgQyAxOC44MDczOTUgMjAuODAwMjM1IDE1Ljg4NjE1NyAyMi4xNjIxMDkgMTIuMTczODI4IDIyLjE2MjEwOSBDIDguNzYxNDYzMiAyMi4xNjIxMDkgNS42MjQ1NzU0IDIwLjc4NzA2OSA0LjUzOTA2MjUgMjAuMjY1NjI1IEMgNC42NTI1ODk2IDE3Ljc2NjcxNyA1LjQyMDMzMTUgMTUuNTA0NzkxIDYuNzg1MTU2MiAxMy44ODI4MTIgQyA4LjIxMzk4MjcgMTIuMTg1MDg0IDEwLjExNDAxIDExLjI3MzQzOCAxMi4xNzM4MjggMTEuMjczNDM4IHogXCIgLz4gPC9zdmc+YCxcclxuXHJcbiAgcGxhY2VzOiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNNi41IDEyQzUuMTIyIDEyIDQgMTMuMTIxIDQgMTQuNVM1LjEyMiAxNyA2LjUgMTcgOSAxNS44NzkgOSAxNC41IDcuODc4IDEyIDYuNSAxMm0wIDNjLS4yNzUgMC0uNS0uMjI1LS41LS41cy4yMjUtLjUuNS0uNS41LjIyNS41LjUtLjIyNS41LS41LjVNMTcuNSAxMmMtMS4zNzggMC0yLjUgMS4xMjEtMi41IDIuNXMxLjEyMiAyLjUgMi41IDIuNSAyLjUtMS4xMjEgMi41LTIuNS0xLjEyMi0yLjUtMi41LTIuNW0wIDNjLS4yNzUgMC0uNS0uMjI1LS41LS41cy4yMjUtLjUuNS0uNS41LjIyNS41LjUtLjIyNS41LS41LjVcIi8+PHBhdGggZD1cIk0yMi40ODIgOS40OTRsLTEuMDM5LS4zNDZMMjEuNCA5aC42Yy41NTIgMCAxLS40MzkgMS0uOTkyIDAtLjAwNi0uMDAzLS4wMDgtLjAwMy0uMDA4SDIzYzAtMS0uODg5LTItMS45ODQtMmgtLjY0MmwtLjczMS0xLjcxN0MxOS4yNjIgMy4wMTIgMTguMDkxIDIgMTYuNzY0IDJINy4yMzZDNS45MDkgMiA0LjczOCAzLjAxMiA0LjM1NyA0LjI4M0wzLjYyNiA2aC0uNjQyQzEuODg5IDYgMSA3IDEgOGguMDAzUzEgOC4wMDIgMSA4LjAwOEMxIDguNTYxIDEuNDQ4IDkgMiA5aC42bC0uMDQzLjE0OC0xLjAzOS4zNDZhMi4wMDEgMi4wMDEgMCAwIDAtMS4zNTkgMi4wOTdsLjc1MSA3LjUwOGExIDEgMCAwIDAgLjk5NC45MDFIM3YxYzAgMS4xMDMuODk2IDIgMiAyaDJjMS4xMDQgMCAyLS44OTcgMi0ydi0xaDZ2MWMwIDEuMTAzLjg5NiAyIDIgMmgyYzEuMTA0IDAgMi0uODk3IDItMnYtMWgxLjA5NmEuOTk5Ljk5OSAwIDAgMCAuOTk0LS45MDFsLjc1MS03LjUwOGEyLjAwMSAyLjAwMSAwIDAgMC0xLjM1OS0yLjA5N002LjI3MyA0Ljg1N0M2LjQwMiA0LjQzIDYuNzg4IDQgNy4yMzYgNGg5LjUyN2MuNDQ4IDAgLjgzNC40My45NjMuODU3TDE5LjMxMyA5SDQuNjg4bDEuNTg1LTQuMTQzek03IDIxSDV2LTFoMnYxem0xMiAwaC0ydi0xaDJ2MXptMi4xODktM0gyLjgxMWwtLjY2Mi02LjYwN0wzIDExaDE4bC44NTIuMzkzTDIxLjE4OSAxOHpcIi8+PC9zdmc+YCxcclxuXHJcbiAgcmVjZW50OiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiPjxwYXRoIGQ9XCJNMTMgNGgtMmwtLjAwMSA3SDl2MmgydjJoMnYtMmg0di0yaC00elwiLz48cGF0aCBkPVwiTTEyIDBDNS4zNzMgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMG0wIDIyQzYuNDg2IDIyIDIgMTcuNTE0IDIgMTJTNi40ODYgMiAxMiAyczEwIDQuNDg2IDEwIDEwLTQuNDg2IDEwLTEwIDEwXCIvPjwvc3ZnPmAsXHJcblxyXG4gIHN5bWJvbHM6IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCI+PHBhdGggZD1cIk0wIDBoMTF2Mkgwek00IDExaDNWNmg0VjRIMHYyaDR6TTE1LjUgMTdjMS4zODEgMCAyLjUtMS4xMTYgMi41LTIuNDkzcy0xLjExOS0yLjQ5My0yLjUtMi40OTNTMTMgMTMuMTMgMTMgMTQuNTA3IDE0LjExOSAxNyAxNS41IDE3bTAtMi45ODZjLjI3NiAwIC41LjIyMi41LjQ5MyAwIC4yNzItLjIyNC40OTMtLjUuNDkzcy0uNS0uMjIxLS41LS40OTMuMjI0LS40OTMuNS0uNDkzTTIxLjUgMTkuMDE0Yy0xLjM4MSAwLTIuNSAxLjExNi0yLjUgMi40OTNTMjAuMTE5IDI0IDIxLjUgMjRzMi41LTEuMTE2IDIuNS0yLjQ5My0xLjExOS0yLjQ5My0yLjUtMi40OTNtMCAyLjk4NmEuNDk3LjQ5NyAwIDAgMS0uNS0uNDkzYzAtLjI3MS4yMjQtLjQ5My41LS40OTNzLjUuMjIyLjUuNDkzYS40OTcuNDk3IDAgMCAxLS41LjQ5M00yMiAxM2wtOSA5IDEuNTEzIDEuNSA4Ljk5LTkuMDA5ek0xNyAxMWMyLjIwOSAwIDQtMS4xMTkgNC0yLjVWMnMuOTg1LS4xNjEgMS40OTguOTQ5QzIzLjAxIDQuMDU1IDIzIDYgMjMgNnMxLTEuMTE5IDEtMy4xMzVDMjQtLjAyIDIxIDAgMjEgMGgtMnY2LjM0N0E1Ljg1MyA1Ljg1MyAwIDAgMCAxNyA2Yy0yLjIwOSAwLTQgMS4xMTktNCAyLjVzMS43OTEgMi41IDQgMi41TTEwLjI5NyAyMC40ODJsLTEuNDc1LTEuNTg1YTQ3LjU0IDQ3LjU0IDAgMCAxLTEuNDQyIDEuMTI5Yy0uMzA3LS4yODgtLjk4OS0xLjAxNi0yLjA0NS0yLjE4My45MDItLjgzNiAxLjQ3OS0xLjQ2NiAxLjcyOS0xLjg5MnMuMzc2LS44NzEuMzc2LTEuMzM2YzAtLjU5Mi0uMjczLTEuMTc4LS44MTgtMS43NTktLjU0Ni0uNTgxLTEuMzI5LS44NzEtMi4zNDktLjg3MS0xLjAwOCAwLTEuNzkuMjkzLTIuMzQ0Ljg3OS0uNTU2LjU4Ny0uODMyIDEuMTgxLS44MzIgMS43ODQgMCAuODEzLjQxOSAxLjc0OCAxLjI1NiAyLjgwNS0uODQ3LjYxNC0xLjQ0NCAxLjIwOC0xLjc5NCAxLjc4NGEzLjQ2NSAzLjQ2NSAwIDAgMC0uNTIzIDEuODMzYzAgLjg1Ny4zMDggMS41Ni45MjQgMi4xMDcuNjE2LjU0OSAxLjQyMy44MjMgMi40Mi44MjMgMS4xNzMgMCAyLjQ0NC0uMzc5IDMuODEzLTEuMTM3TDguMjM1IDI0aDIuODE5bC0yLjA5LTIuMzgzIDEuMzMzLTEuMTM1em0tNi43MzYtNi4zODlhMS4wMiAxLjAyIDAgMCAxIC43My0uMjg2Yy4zMSAwIC41NTkuMDg1Ljc0Ny4yNTRhLjg0OS44NDkgMCAwIDEgLjI4My42NTljMCAuNTE4LS40MTkgMS4xMTItMS4yNTcgMS43ODQtLjUzNi0uNjUxLS44MDUtMS4yMzEtLjgwNS0xLjc0MmEuOTAxLjkwMSAwIDAgMSAuMzAyLS42NjlNMy43NCAyMmMtLjQyNyAwLS43NzgtLjExNi0xLjA1Ny0uMzQ5LS4yNzktLjIzMi0uNDE4LS40ODctLjQxOC0uNzY2IDAtLjU5NC41MDktMS4yODggMS41MjctMi4wODMuOTY4IDEuMTM0IDEuNzE3IDEuOTQ2IDIuMjQ4IDIuNDM4LS45MjEuNTA3LTEuNjg2Ljc2LTIuMy43NlwiLz48L3N2Zz5gLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTVkdzXHJcbiIsImNvbnN0IG1hcHBpbmcgPSB7XHJcbiAgbmFtZTogJ2EnLFxyXG4gIHVuaWZpZWQ6ICdiJyxcclxuICBub25fcXVhbGlmaWVkOiAnYycsXHJcbiAgaGFzX2ltZ19hcHBsZTogJ2QnLFxyXG4gIGhhc19pbWdfZ29vZ2xlOiAnZScsXHJcbiAgaGFzX2ltZ190d2l0dGVyOiAnZicsXHJcbiAgaGFzX2ltZ19mYWNlYm9vazogJ2gnLFxyXG4gIGtleXdvcmRzOiAnaicsXHJcbiAgc2hlZXQ6ICdrJyxcclxuICBlbW90aWNvbnM6ICdsJyxcclxuICB0ZXh0OiAnbScsXHJcbiAgc2hvcnRfbmFtZXM6ICduJyxcclxuICBhZGRlZF9pbjogJ28nLFxyXG59XHJcblxyXG5jb25zdCBidWlsZFNlYXJjaCA9IChlbW9qaSkgPT4ge1xyXG4gIGNvbnN0IHNlYXJjaCA9IFtdXHJcblxyXG4gIHZhciBhZGRUb1NlYXJjaCA9IChzdHJpbmdzLCBzcGxpdCkgPT4ge1xyXG4gICAgaWYgKCFzdHJpbmdzKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIDsoQXJyYXkuaXNBcnJheShzdHJpbmdzKSA/IHN0cmluZ3MgOiBbc3RyaW5nc10pLmZvckVhY2goKHN0cmluZykgPT4ge1xyXG4gICAgICA7KHNwbGl0ID8gc3RyaW5nLnNwbGl0KC9bLXxffFxcc10rLykgOiBbc3RyaW5nXSkuZm9yRWFjaCgocykgPT4ge1xyXG4gICAgICAgIHMgPSBzLnRvTG93ZXJDYXNlKClcclxuXHJcbiAgICAgICAgaWYgKHNlYXJjaC5pbmRleE9mKHMpID09IC0xKSB7XHJcbiAgICAgICAgICBzZWFyY2gucHVzaChzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhZGRUb1NlYXJjaChlbW9qaS5zaG9ydF9uYW1lcywgdHJ1ZSlcclxuICBhZGRUb1NlYXJjaChlbW9qaS5uYW1lLCB0cnVlKVxyXG4gIGFkZFRvU2VhcmNoKGVtb2ppLmtleXdvcmRzLCBmYWxzZSlcclxuICBhZGRUb1NlYXJjaChlbW9qaS5lbW90aWNvbnMsIGZhbHNlKVxyXG5cclxuICByZXR1cm4gc2VhcmNoLmpvaW4oJywnKVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWVwRnJlZXplKG9iamVjdCkge1xyXG4gIC8vIFJldHJpZXZlIHRoZSBwcm9wZXJ0eSBuYW1lcyBkZWZpbmVkIG9uIG9iamVjdFxyXG4gIHZhciBwcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmplY3QpXHJcblxyXG4gIC8vIEZyZWV6ZSBwcm9wZXJ0aWVzIGJlZm9yZSBmcmVlemluZyBzZWxmXHJcbiAgZm9yIChsZXQgbmFtZSBvZiBwcm9wTmFtZXMpIHtcclxuICAgIGxldCB2YWx1ZSA9IG9iamVjdFtuYW1lXVxyXG4gICAgb2JqZWN0W25hbWVdID1cclxuICAgICAgdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IGRlZXBGcmVlemUodmFsdWUpIDogdmFsdWVcclxuICB9XHJcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUob2JqZWN0KVxyXG59XHJcblxyXG5jb25zdCB1bmNvbXByZXNzID0gKGRhdGEpID0+IHtcclxuICBpZiAoIWRhdGEuY29tcHJlc3NlZCkge1xyXG4gICAgcmV0dXJuIGRhdGFcclxuICB9XHJcbiAgZGF0YS5jb21wcmVzc2VkID0gZmFsc2VcclxuXHJcbiAgZm9yIChsZXQgaWQgaW4gZGF0YS5lbW9qaXMpIHtcclxuICAgIGxldCBlbW9qaSA9IGRhdGEuZW1vamlzW2lkXVxyXG5cclxuICAgIGZvciAobGV0IGtleSBpbiBtYXBwaW5nKSB7XHJcbiAgICAgIGVtb2ppW2tleV0gPSBlbW9qaVttYXBwaW5nW2tleV1dXHJcbiAgICAgIGRlbGV0ZSBlbW9qaVttYXBwaW5nW2tleV1dXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFlbW9qaS5zaG9ydF9uYW1lcykgZW1vamkuc2hvcnRfbmFtZXMgPSBbXVxyXG4gICAgZW1vamkuc2hvcnRfbmFtZXMudW5zaGlmdChpZClcclxuXHJcbiAgICBlbW9qaS5zaGVldF94ID0gZW1vamkuc2hlZXRbMF1cclxuICAgIGVtb2ppLnNoZWV0X3kgPSBlbW9qaS5zaGVldFsxXVxyXG4gICAgZGVsZXRlIGVtb2ppLnNoZWV0XHJcblxyXG4gICAgaWYgKCFlbW9qaS50ZXh0KSBlbW9qaS50ZXh0ID0gJydcclxuXHJcbiAgICBpZiAoIWVtb2ppLmFkZGVkX2luKSBlbW9qaS5hZGRlZF9pbiA9IDZcclxuICAgIGVtb2ppLmFkZGVkX2luID0gZW1vamkuYWRkZWRfaW4udG9GaXhlZCgxKVxyXG5cclxuICAgIGVtb2ppLnNlYXJjaCA9IGJ1aWxkU2VhcmNoKGVtb2ppKVxyXG4gIH1cclxuICBkYXRhID0gZGVlcEZyZWV6ZShkYXRhKVxyXG4gIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmV4cG9ydCB7IGJ1aWxkU2VhcmNoLCB1bmNvbXByZXNzIH1cclxuIiwiaW1wb3J0IHsgaW50ZXJzZWN0LCB1bmlmaWVkVG9OYXRpdmUgfSBmcm9tICcuL2luZGV4J1xuaW1wb3J0IHsgdW5jb21wcmVzcywgYnVpbGRTZWFyY2ggfSBmcm9tICcuL2RhdGEnXG5pbXBvcnQgZnJlcXVlbnRseSBmcm9tICcuL2ZyZXF1ZW50bHknXG5cclxuY29uc3QgU0hFRVRfQ09MVU1OUyA9IDYxXHJcbmNvbnN0IENPTE9OU19SRUdFWCA9IC9eKD86XFw6KFteXFw6XSspXFw6KSg/OlxcOnNraW4tdG9uZS0oXFxkKVxcOik/JC9cclxuLy8gU2tpbiB0b25lc1xyXG5jb25zdCBTS0lOUyA9IFsnMUYzRkEnLCAnMUYzRkInLCAnMUYzRkMnLCAnMUYzRkQnLCAnMUYzRkUnLCAnMUYzRkYnXVxuXG5mdW5jdGlvbiBtZXJnZUFsaWFzZXMoYmFzZUFsaWFzZXMsIGxvY2FsaXplZEFsaWFzZXMpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGJhc2VBbGlhc2VzIHx8IHt9LCBsb2NhbGl6ZWRBbGlhc2VzIHx8IHt9KVxufVxuXG5mdW5jdGlvbiBidWlsZEFsaWFzZXNCeUlkKGFsaWFzZXMpIHtcbiAgY29uc3QgcmVzdWx0ID0ge31cbiAgaWYgKCFhbGlhc2VzKSB7XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG4gIGZvciAobGV0IGFsaWFzIGluIGFsaWFzZXMpIHtcbiAgICBpZiAoIWFsaWFzZXMuaGFzT3duUHJvcGVydHkoYWxpYXMpKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBjb25zdCBpZCA9IGFsaWFzZXNbYWxpYXNdXG4gICAgaWYgKCFyZXN1bHRbaWRdKSB7XG4gICAgICByZXN1bHRbaWRdID0gW11cbiAgICB9XG4gICAgcmVzdWx0W2lkXS5wdXNoKGFsaWFzKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gbWVyZ2VLZXl3b3JkcygpIHtcbiAgY29uc3QgcmVzdWx0ID0gW11cbiAgY29uc3Qgc2VlbiA9IG5ldyBTZXQoKVxuICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBhcmd1bWVudHMubGVuZ3RoOyBpZHggKz0gMSkge1xuICAgIGNvbnN0IGxpc3QgPSBhcmd1bWVudHNbaWR4XVxuICAgIGlmICghbGlzdCB8fCAhbGlzdC5sZW5ndGgpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGxpc3QuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3Qga2V5ID0gdmFsdWUudG9Mb3dlckNhc2UoKVxuICAgICAgaWYgKHNlZW4uaGFzKGtleSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBzZWVuLmFkZChrZXkpXG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSlcbiAgICB9KVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxyXG4vKipcclxuICogRW1vamkgZGF0YSBzdHJ1Y3R1cmU6XHJcbiAqIHtcclxuICogICAgXCJjb21wcmVzc2VkXCI6IGZhbHNlLFxyXG4gKiAgICBcImFsaWFzZXNcIjoge1xyXG4gKiAgICAgIGNvbGxpc2lvbjogXCJib29tXCJcclxuICogICAgICBjb29raW5nOiBcImZyaWVkX2VnZ1wiXHJcbiAqICAgICAgZW52ZWxvcGU6IFwiZW1haWxcIlxyXG4gKiAgICAgIGZhY2Vfd2l0aF9maW5nZXJfY292ZXJpbmdfY2xvc2VkX2xpcHM6IFwic2h1c2hpbmdfZmFjZVwiXHJcbiAqICAgICAgLi4uXHJcbiAqICAgIH0sXHJcbiAqICAgIFwiY2F0ZWdvcmllc1wiOiBbIHtcclxuICogICAgICBpZDogXCJwZW9wbGVcIixcclxuICogICAgICBuYW1lOiBcIlNtaWxleXMgJiBFbW90aW9uXCIsXHJcbiAqICAgICAgZW1vamlzOiBbIFwiZ3Jpbm5pbmdcIiwgXCJncmluXCIsIFwiam95XCIsIC4uLiBdXHJcbiAqICAgIH0sIHtcclxuICogICAgICBpZDogXCJuYXR1cmVcIixcclxuICogICAgICBuYW1lOiBcIkFuaW1hbHMgJiBOYXR1cmVcIixcclxuICogICAgICBlbW9qaXM6IFsgXCJtb25rZXlfZmFjZVwiLCBcIm1vbmV5XCIsIFwiZ29yaWxsYVwiLCAuLi4gXVxyXG4gKiAgICB9LFxyXG4gKiAgICAuLi5cclxuICogICAgXSxcclxuICogICAgXCJlbW9qaXNcIjogW1xyXG4gKiAgICAgIHNtaWxleToge1xyXG4gKiAgICAgICAgYWRkZWRfaW46IFwiNi4wXCIsXHJcbiAqICAgICAgICBlbW90aWNvbnM6IFtcIj0pXCIsIFwiPS0pXCJdLFxyXG4gKiAgICAgICAgaGFzX2ltZ19hcHBsZTogdHJ1ZSxcclxuICogICAgICAgIGhhc19pbWdfZmFjZWJvb2s6IHRydWUsXHJcbiAqICAgICAgICBoYXNfaW1nX2dvb2dsZTogdHJ1ZSxcclxuICogICAgICAgIGhhc19pbWdfdHdpdHRlcjogdHJ1ZSxcclxuICogICAgICAgIGtleXdvcmRzOiBbXCJmYWNlXCIsIFwiaGFwcHlcIiwgXCJqb3lcIiwgXCJoYWhhXCIsIFwiOkRcIiwgXCI6KVwiLCBcInNtaWxlXCIsIFwiZnVubnlcIl0sXHJcbiAqICAgICAgICBuYW1lOiBcIlNtaWxpbmcgRmFjZSB3aXRoIE9wZW4gTW91dGhcIixcclxuICogICAgICAgIG5vbl9xdWFsaWZpZWQ6IHVuZGVmaW5lZCxcclxuICogICAgICAgIHNlYXJjaDogXCJzbWlsZXksc21pbGluZyxmYWNlLHdpdGgsb3Blbixtb3V0aCxoYXBweSxqb3ksaGFoYSw6ZCw6KSxzbWlsZSxmdW5ueSw9KSw9LSlcIixcclxuICogICAgICAgIHNoZWV0X3g6IDMwLFxyXG4gKiAgICAgICAgc2hlZXRfeTogMjcsXHJcbiAqICAgICAgICBzaG9ydF9uYW1lczogW1wic21pbGV5XCJdLFxyXG4gKiAgICAgICAgdGV4dDogXCI6KVwiLFxyXG4gKiAgICAgICAgdW5pZmllZDogXCIxRjYwM1wiLFxyXG4gKiAgICAgIH0sIHtcclxuICogICAgICArMTogeyAgICAvLyBlbW9qaSB3aXRoIHNraW5fdmFyaWF0aW9uc1xyXG4gKiAgICAgICAgICAuLi4sIC8vIGFsbCB0aGUgcmVndWxhciBmaWVsZHMgYXJlIHByZXNlbnRcclxuICogICAgICAgICAgbmFtZTogXCJUaHVtYnMgVXAgU2lnblwiLFxyXG4gKiAgICAgICAgICBzaG9ydF9uYW1lczogKDIpIFtcIisxXCIsIFwidGh1bWJzdXBcIl0sXHJcbiAqICAgICAgICAgIHNraW5fdmFyaWF0aW9uczoge1xyXG4gKiAgICAgICAgICAgIDFGM0ZCOiAgICAgICAgICAgICAvLyBlYWNoIHZhcmlhdGlvbiBoYXMgYWRkaXRpb25hbCBzZXQgb2YgZmllbGRzOlxyXG4gKiAgICAgICAgICAgICAgYWRkZWRfaW46IFwiOC4wXCIsXHJcbiAqICAgICAgICAgICAgICBoYXNfaW1nX2FwcGxlOiB0cnVlLFxyXG4gKiAgICAgICAgICAgICAgaGFzX2ltZ19mYWNlYm9vazogdHJ1ZSxcclxuICogICAgICAgICAgICAgIGhhc19pbWdfZ29vZ2xlOiB0cnVlLFxyXG4gKiAgICAgICAgICAgICAgaGFzX2ltZ190d2l0dGVyOiB0cnVlLFxyXG4gKiAgICAgICAgICAgICAgaW1hZ2U6IFwiMWY0NGQtMWYzZmIucG5nXCIsXHJcbiAqICAgICAgICAgICAgICBub25fcXVhbGlmaWVkOiBudWxsLFxyXG4gKiAgICAgICAgICAgICAgc2hlZXRfeDogMTQsXHJcbiAqICAgICAgICAgICAgICBzaGVldF95OiA1MCxcclxuICogICAgICAgICAgICAgIHVuaWZpZWQ6IFwiMUY0NEQtMUYzRkJcIixcclxuICogICAgICAgICAgICAxRjNGQjoge+KApn0sXHJcbiAqICAgICAgICAgICAgMUYzRkM6IHvigKZ9LFxyXG4gKiAgICAgICAgICAgIDFGM0ZEOiB74oCmfSxcclxuICogICAgICAgICAgICAxRjNGRToge+KApn0sXHJcbiAqICAgICAgICAgICAgMUYzRkY6IHvigKZ9XHJcbiAqICAgICAgICAgICAgfSxcclxuICogICAgICAgICAgLi4uXHJcbiAqICAgICAgfSxcclxuICogICAgICBhOiB7ICAvLyBlbW9qaSB3aXRoIG5vbl9xdWFsaWZpZWQgZmllbGQgc2V0XHJcbiAqICAgICAgICBhZGRlZF9pbjogXCI2LjBcIixcclxuICogICAgICAgIGVtb3RpY29uczogdW5kZWZpbmVkLFxyXG4gKiAgICAgICAgaGFzX2ltZ19hcHBsZTogdHJ1ZSxcclxuICogICAgICAgIC4uLlxyXG4gKiAgICAgICAgbm9uX3F1YWxpZmllZDogXCIxRjE3MFwiLFxyXG4gKiAgICAgICAgdW5pZmllZDogXCIxRjE3MC1GRTBGXCIsXHJcbiAqICAgICB9LFxyXG4gKiAgICAgLi4uXHJcbiAqICAgXVxyXG4gKiB9XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFdyYXBzIHJhdyBqYXNvbiBlbW9qaSBkYXRhLCBzZXJ2ZXMgYXMgZGF0YSBzb3VyY2UgZm9yXHJcbiAqIGVtb2ppIHBpY2tlciBjb21wb25lbnRzLlxyXG4gKlxyXG4gKiBVc2FnZTpcclxuICpcclxuICogICBpbXBvcnQgZGF0YSBmcm9tICcuLi9kYXRhL2FsbC5qc29uJ1xyXG4gKiAgIGxldCBpbmRleCA9IG5ldyBFbW9qaUluZGV4KGRhdGEpXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRW1vamlJbmRleCB7XHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0b3IuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIFJhdyBqc29uIGRhdGEsIHNlZSB0aGUgc3RydWN0dXJlIGFib3ZlLlxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gYWRkaXRpb25hbCBvcHRpb25zLCBhcyBhbiBvYmplY3Q6XHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZW1vamlzVG9TaG93RmlsdGVyIC0gb3B0aW9uYWwsIGZ1bmN0aW9uIHRvIGZpbHRlciBvdXRcclxuICAgKiAgIHNvbWUgZW1vamlzLCBmdW5jdGlvbihlbW9qaSkgeyByZXR1cm4gdHJ1ZXxmYWxzZSB9XHJcbiAgICogICB3aGVyZSBgZW1vamlgIGlzIGFuIHJhdyBlbW9qaSBvYmplY3QsIHNlZSBkYXRhLmVtb2ppcyBhYm92ZS5cclxuICAgKiBAcGFyYW0ge0FycmF5fSBpbmNsdWRlIC0gb3B0aW9uYWwsIGEgbGlzdCBvZiBjYXRlZ29yeSBpZHMgdG8gaW5jbHVkZS5cclxuICAgKiBAcGFyYW0ge0FycmF5fSBleGNsdWRlIC0gb3B0aW9uYWwsIGEgbGlzdCBvZiBjYXRlZ29yeSBpZHMgdG8gZXhjbHVkZS5cclxuICAgKiBAcGFyYW0ge0FycmF5fSBjdXN0b20gLSBvcHRpb25hbCwgYSBsaXN0IGN1c3RvbSBlbW9qaXMsIGVhY2ggZW1vamkgaXNcclxuICAgKiAgIGFuIG9iamVjdCwgc2VlIGRhdGEuZW1vamlzIGFib3ZlIGZvciBleGFtcGxlcy5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGRhdGEsXHJcbiAgICB7XHJcbiAgICAgIGVtb2ppc1RvU2hvd0ZpbHRlcixcclxuICAgICAgaW5jbHVkZSxcbiAgICAgIGV4Y2x1ZGUsXG4gICAgICBjdXN0b20sXG4gICAgICBlbW9qaUkxOG4sXG4gICAgICByZWNlbnQsXG4gICAgICByZWNlbnRMZW5ndGggPSAyMCxcbiAgICB9ID0ge30sXG4gICkge1xuICAgIHRoaXMuX2RhdGEgPSB1bmNvbXByZXNzKGRhdGEpXG4gICAgLy8gQ2FsbGJhY2sgdG8gZXhjbHVkZSBzcGVjaWZpYyBlbW9qaXNcclxuICAgIHRoaXMuX2Vtb2ppc0ZpbHRlciA9IGVtb2ppc1RvU2hvd0ZpbHRlciB8fCBudWxsXHJcbiAgICAvLyBDYXRlZ29yaWVzIHRvIGluY2x1ZGUgLyBleGNsdWRlXHJcbiAgICB0aGlzLl9pbmNsdWRlID0gaW5jbHVkZSB8fCBudWxsXHJcbiAgICB0aGlzLl9leGNsdWRlID0gZXhjbHVkZSB8fCBudWxsXHJcbiAgICAvLyBDdXN0b20gZW1vamlzXG4gICAgdGhpcy5fY3VzdG9tID0gY3VzdG9tIHx8IFtdXG4gICAgLy8gRW1vamkgaTE4biBkYXRhIChsb2NhbGl6ZWQgbmFtZXMsIGtleXdvcmRzLCBhbGlhc2VzKVxuICAgIHRoaXMuX2Vtb2ppSTE4biA9IGVtb2ppSTE4biB8fCBudWxsXG4gICAgdGhpcy5fYWxpYXNlcyA9IG1lcmdlQWxpYXNlcyhcbiAgICAgIHRoaXMuX2RhdGEuYWxpYXNlcyxcbiAgICAgIHRoaXMuX2Vtb2ppSTE4biAmJiB0aGlzLl9lbW9qaUkxOG4uYWxpYXNlcyxcbiAgICApXG4gICAgdGhpcy5fYWxpYXNlc0J5SWQgPSBidWlsZEFsaWFzZXNCeUlkKHRoaXMuX2FsaWFzZXMpXG4gICAgLy8gUmVjZW50IGVtb2ppc1xuICAgIC8vIFRPRE86IG1ha2UgcGFyYW1ldGVyIGNvbmZpZ3VyYWJsZVxuICAgIHRoaXMuX3JlY2VudCA9IHJlY2VudCB8fCBmcmVxdWVudGx5LmdldChyZWNlbnRMZW5ndGgpXG5cclxuICAgIHRoaXMuX2Vtb2ppcyA9IHt9XHJcbiAgICB0aGlzLl9uYXRpdmVFbW9qaXMgPSB7fVxyXG4gICAgdGhpcy5fZW1vdGljb25zID0ge31cclxuXHJcbiAgICB0aGlzLl9jYXRlZ29yaWVzID0gW11cclxuICAgIHRoaXMuX3JlY2VudENhdGVnb3J5ID0geyBpZDogJ3JlY2VudCcsIG5hbWU6ICdSZWNlbnQnLCBlbW9qaXM6IFtdIH1cclxuICAgIHRoaXMuX2N1c3RvbUNhdGVnb3J5ID0geyBpZDogJ2N1c3RvbScsIG5hbWU6ICdDdXN0b20nLCBlbW9qaXM6IFtdIH1cclxuICAgIHRoaXMuX3NlYXJjaEluZGV4ID0ge31cclxuICAgIHRoaXMuYnVpbGRJbmRleCgpXHJcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXHJcbiAgfVxyXG5cclxuICBidWlsZEluZGV4KCkge1xyXG4gICAgbGV0IGFsbENhdGVnb3JpZXMgPSB0aGlzLl9kYXRhLmNhdGVnb3JpZXNcclxuXHJcbiAgICBpZiAodGhpcy5faW5jbHVkZSkge1xyXG4gICAgICAvLyBSZW1vdmUgY2F0ZWdvcmllcyB0aGF0IGFyZSBub3QgaW4gdGhlIGluY2x1ZGUgbGlzdC5cclxuICAgICAgYWxsQ2F0ZWdvcmllcyA9IGFsbENhdGVnb3JpZXMuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luY2x1ZGUuaW5jbHVkZXMoaXRlbS5pZClcclxuICAgICAgfSlcclxuICAgICAgLy8gU29ydCBjYXRlZ29yaWVzIGFjY29yZGluZyB0byB0aGUgaW5jbHVkZSBsaXN0LlxyXG4gICAgICBhbGxDYXRlZ29yaWVzID0gYWxsQ2F0ZWdvcmllcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5kZXhBID0gdGhpcy5faW5jbHVkZS5pbmRleE9mKGEuaWQpXHJcbiAgICAgICAgY29uc3QgaW5kZXhCID0gdGhpcy5faW5jbHVkZS5pbmRleE9mKGIuaWQpXHJcbiAgICAgICAgaWYgKGluZGV4QSA8IGluZGV4Qikge1xyXG4gICAgICAgICAgcmV0dXJuIC0xXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpbmRleEEgPiBpbmRleEIpIHtcclxuICAgICAgICAgIHJldHVybiAxXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYWxsQ2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeURhdGEpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLmlzQ2F0ZWdvcnlOZWVkZWQoY2F0ZWdvcnlEYXRhLmlkKSkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGxldCBjYXRlZ29yeSA9IHtcclxuICAgICAgICBpZDogY2F0ZWdvcnlEYXRhLmlkLFxyXG4gICAgICAgIG5hbWU6IGNhdGVnb3J5RGF0YS5uYW1lLFxyXG4gICAgICAgIGVtb2ppczogW10sXHJcbiAgICAgIH1cclxuICAgICAgY2F0ZWdvcnlEYXRhLmVtb2ppcy5mb3JFYWNoKChlbW9qaUlkKSA9PiB7XHJcbiAgICAgICAgbGV0IGVtb2ppID0gdGhpcy5hZGRFbW9qaShlbW9qaUlkKVxyXG4gICAgICAgIGlmIChlbW9qaSkge1xyXG4gICAgICAgICAgY2F0ZWdvcnkuZW1vamlzLnB1c2goZW1vamkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBpZiAoY2F0ZWdvcnkuZW1vamlzLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuX2NhdGVnb3JpZXMucHVzaChjYXRlZ29yeSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAodGhpcy5pc0NhdGVnb3J5TmVlZGVkKCdjdXN0b20nKSkge1xyXG4gICAgICBpZiAodGhpcy5fY3VzdG9tLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBmb3IgKGxldCBjdXN0b21FbW9qaSBvZiB0aGlzLl9jdXN0b20pIHtcclxuICAgICAgICAgIHRoaXMuYWRkQ3VzdG9tRW1vamkoY3VzdG9tRW1vamkpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLl9jdXN0b21DYXRlZ29yeS5lbW9qaXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5fY2F0ZWdvcmllcy5wdXNoKHRoaXMuX2N1c3RvbUNhdGVnb3J5KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNDYXRlZ29yeU5lZWRlZCgncmVjZW50JykpIHtcclxuICAgICAgaWYgKHRoaXMuX3JlY2VudC5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLl9yZWNlbnQubWFwKChpZCkgPT4ge1xyXG4gICAgICAgICAgZm9yIChsZXQgY3VzdG9tRW1vamkgb2YgdGhpcy5fY3VzdG9tQ2F0ZWdvcnkuZW1vamlzKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXN0b21FbW9qaS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICB0aGlzLl9yZWNlbnRDYXRlZ29yeS5lbW9qaXMucHVzaChjdXN0b21FbW9qaSlcclxuICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHRoaXMuaGFzRW1vamkoaWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlY2VudENhdGVnb3J5LmVtb2ppcy5wdXNoKHRoaXMuZW1vamkoaWQpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICAvLyBBZGQgcmVjZW50IGNhdGVnb3J5IHRvIHRoZSB0b3BcclxuICAgICAgaWYgKHRoaXMuX3JlY2VudENhdGVnb3J5LmVtb2ppcy5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLl9jYXRlZ29yaWVzLnVuc2hpZnQodGhpcy5fcmVjZW50Q2F0ZWdvcnkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpbmQgdGhlIGVtb2ppIGZyb20gdGhlIHN0cmluZ1xyXG4gICAqL1xyXG4gIGZpbmRFbW9qaShlbW9qaSwgc2tpbikge1xuICAgIC8vIDEuIFBhcnNlIGFzIDplbW9qaV9uYW1lOnNraW4tdG9uZS14eDpcclxuICAgIGxldCBtYXRjaGVzID0gZW1vamkubWF0Y2goQ09MT05TX1JFR0VYKVxyXG5cclxuICAgIGlmIChtYXRjaGVzKSB7XHJcbiAgICAgIGVtb2ppID0gbWF0Y2hlc1sxXVxyXG4gICAgICBpZiAobWF0Y2hlc1syXSkge1xyXG4gICAgICAgIHNraW4gPSBwYXJzZUludChtYXRjaGVzWzJdLCAxMClcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIDIuIENoZWNrIGlmIHRoZSBzcGVjaWZpZWQgZW1vamkgaXMgYW4gYWxpYXNcbiAgICBpZiAodGhpcy5fYWxpYXNlcyAmJiB0aGlzLl9hbGlhc2VzLmhhc093blByb3BlcnR5KGVtb2ppKSkge1xuICAgICAgZW1vamkgPSB0aGlzLl9hbGlhc2VzW2Vtb2ppXVxuICAgIH1cblxyXG4gICAgLy8gMy4gQ2hlY2sgaWYgd2UgaGF2ZSB0aGUgc3BlY2lmaWVkIGVtb2ppXHJcbiAgICBpZiAodGhpcy5fZW1vamlzLmhhc093blByb3BlcnR5KGVtb2ppKSkge1xyXG4gICAgICBsZXQgZW1vamlPYmplY3QgPSB0aGlzLl9lbW9qaXNbZW1vamldXHJcbiAgICAgIGlmIChza2luKSB7XHJcbiAgICAgICAgcmV0dXJuIGVtb2ppT2JqZWN0LmdldFNraW4oc2tpbilcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZW1vamlPYmplY3RcclxuICAgIH1cclxuXHJcbiAgICAvLyA0LiBDaGVjayBpZiB3ZSBoYXZlIHRoZSBzcGVjaWZpZWQgbmF0aXZlIGVtb2ppXHJcbiAgICBpZiAodGhpcy5fbmF0aXZlRW1vamlzLmhhc093blByb3BlcnR5KGVtb2ppKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fbmF0aXZlRW1vamlzW2Vtb2ppXVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIGNhdGVnb3JpZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2F0ZWdvcmllc1xyXG4gIH1cclxuXHJcbiAgZW1vamkoZW1vamlJZCkge1xuICAgIGlmICh0aGlzLl9hbGlhc2VzICYmIHRoaXMuX2FsaWFzZXMuaGFzT3duUHJvcGVydHkoZW1vamlJZCkpIHtcbiAgICAgIGVtb2ppSWQgPSB0aGlzLl9hbGlhc2VzW2Vtb2ppSWRdXG4gICAgfVxuICAgIGxldCBlbW9qaSA9IHRoaXMuX2Vtb2ppc1tlbW9qaUlkXVxuICAgIGlmICghZW1vamkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBmaW5kIGVtb2ppIGJ5IGlkOiAnICsgZW1vamlJZClcbiAgICB9XG4gICAgcmV0dXJuIGVtb2ppXHJcbiAgfVxyXG5cclxuICBmaXJzdEVtb2ppKCkge1xyXG4gICAgbGV0IGVtb2ppID0gdGhpcy5fZW1vamlzW09iamVjdC5rZXlzKHRoaXMuX2Vtb2ppcylbMF1dXHJcbiAgICBpZiAoIWVtb2ppKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG5vdCBnZXQgZmlyc3QgZW1vamknKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVtb2ppXHJcbiAgfVxyXG5cclxuICBoYXNFbW9qaShlbW9qaUlkKSB7XG4gICAgaWYgKHRoaXMuX2FsaWFzZXMgJiYgdGhpcy5fYWxpYXNlcy5oYXNPd25Qcm9wZXJ0eShlbW9qaUlkKSkge1xuICAgICAgZW1vamlJZCA9IHRoaXMuX2FsaWFzZXNbZW1vamlJZF1cbiAgICB9XG4gICAgaWYgKHRoaXMuX2Vtb2ppc1tlbW9qaUlkXSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICBuYXRpdmVFbW9qaSh1bmljb2RlRW1vamkpIHtcclxuICAgIGlmICh0aGlzLl9uYXRpdmVFbW9qaXMuaGFzT3duUHJvcGVydHkodW5pY29kZUVtb2ppKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fbmF0aXZlRW1vamlzW3VuaWNvZGVFbW9qaV1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICBzZWFyY2godmFsdWUsIG1heFJlc3VsdHMpIHtcclxuICAgIG1heFJlc3VsdHMgfHwgKG1heFJlc3VsdHMgPSA3NSlcclxuICAgIGlmICghdmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUgPT0gJy0nIHx8IHZhbHVlID09ICctMScpIHtcclxuICAgICAgcmV0dXJuIFt0aGlzLmVtb2ppKCctMScpXVxyXG4gICAgfVxyXG5cclxuICAgIGxldCB2YWx1ZXMgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpLnNwbGl0KC9bXFxzfCx8XFwtfF9dKy8pXHJcbiAgICBsZXQgYWxsUmVzdWx0cyA9IFtdXHJcblxyXG4gICAgaWYgKHZhbHVlcy5sZW5ndGggPiAyKSB7XHJcbiAgICAgIHZhbHVlcyA9IFt2YWx1ZXNbMF0sIHZhbHVlc1sxXV1cclxuICAgIH1cclxuXHJcbiAgICBhbGxSZXN1bHRzID0gdmFsdWVzXHJcbiAgICAgIC5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgLy8gU3RhcnQgc2VhcmNoaW4gaW4gdGhlIGdsb2JhbCBsaXN0IG9mIGVtb2ppc1xyXG4gICAgICAgIGxldCBlbW9qaXMgPSB0aGlzLl9lbW9qaXNcclxuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gdGhpcy5fc2VhcmNoSW5kZXhcclxuICAgICAgICBsZXQgbGVuZ3RoID0gMFxyXG5cclxuICAgICAgICBmb3IgKGxldCBjaGFySW5kZXggPSAwOyBjaGFySW5kZXggPCB2YWx1ZS5sZW5ndGg7IGNoYXJJbmRleCsrKSB7XHJcbiAgICAgICAgICBjb25zdCBjaGFyID0gdmFsdWVbY2hhckluZGV4XVxyXG4gICAgICAgICAgbGVuZ3RoKytcclxuXHJcbiAgICAgICAgICBjdXJyZW50SW5kZXhbY2hhcl0gfHwgKGN1cnJlbnRJbmRleFtjaGFyXSA9IHt9KVxyXG4gICAgICAgICAgY3VycmVudEluZGV4ID0gY3VycmVudEluZGV4W2NoYXJdXHJcblxyXG4gICAgICAgICAgaWYgKCFjdXJyZW50SW5kZXgucmVzdWx0cykge1xyXG4gICAgICAgICAgICBsZXQgc2NvcmVzID0ge31cclxuICAgICAgICAgICAgY3VycmVudEluZGV4LnJlc3VsdHMgPSBbXVxyXG4gICAgICAgICAgICBjdXJyZW50SW5kZXguZW1vamlzID0ge31cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGVtb2ppSWQgaW4gZW1vamlzKSB7XHJcbiAgICAgICAgICAgICAgbGV0IGVtb2ppID0gZW1vamlzW2Vtb2ppSWRdXHJcbiAgICAgICAgICAgICAgLy8gc2VhcmNoIGlzIGEgY29tbWEtc2VwYXJhdGVkIHN0cmluZyB3aXRoIHdvcmRzLCByZWxhdGVkXHJcbiAgICAgICAgICAgICAgLy8gdG8gdGhlIGVtb2ppLCBmb3IgZXhhbXBsZTpcclxuICAgICAgICAgICAgICAvLyBzZWFyY2g6IFwic21pbGV5LHNtaWxpbmcsZmFjZSxqb3ksaGFoYSw6ZCw6KSxzbWlsZSxmdW5ueSw9KSw9LSlcIixcclxuICAgICAgICAgICAgICBsZXQgc2VhcmNoID0gZW1vamkuX2RhdGEuc2VhcmNoXHJcbiAgICAgICAgICAgICAgbGV0IHN1YiA9IHZhbHVlLnN1YnN0cigwLCBsZW5ndGgpXHJcbiAgICAgICAgICAgICAgbGV0IHN1YkluZGV4ID0gc2VhcmNoLmluZGV4T2Yoc3ViKVxyXG4gICAgICAgICAgICAgIGlmIChzdWJJbmRleCAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNjb3JlID0gc3ViSW5kZXggKyAxXHJcbiAgICAgICAgICAgICAgICBpZiAoc3ViID09IGVtb2ppSWQpIHNjb3JlID0gMFxyXG5cclxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleC5yZXN1bHRzLnB1c2goZW1vamkpXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXguZW1vamlzW2Vtb2ppSWRdID0gZW1vamlcclxuXHJcbiAgICAgICAgICAgICAgICBzY29yZXNbZW1vamlJZF0gPSBzY29yZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50SW5kZXgucmVzdWx0cy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgdmFyIGFTY29yZSA9IHNjb3Jlc1thLmlkXSxcclxuICAgICAgICAgICAgICAgIGJTY29yZSA9IHNjb3Jlc1tiLmlkXVxyXG4gICAgICAgICAgICAgIHJldHVybiBhU2NvcmUgLSBiU2NvcmVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBjb250aW51ZSBzZWFyY2ggaW4gdGhlIHJlZHVjZWQgc2V0IG9mIGVtb2ppc1xyXG4gICAgICAgICAgZW1vamlzID0gY3VycmVudEluZGV4LmVtb2ppc1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3VycmVudEluZGV4LnJlc3VsdHNcclxuICAgICAgICAvLyBUaGUgXCJmaWx0ZXJcIiBjYWxsIHJlbW92ZXMgdW5kZWZpbmVkIHZhbHVlcyBmcm9tIGFsbFJlc3VsdHNcclxuICAgICAgICAvLyBhcnJheSwgZm9yIGV4YW1wbGUsIGlmIHdlIGhhdmUgXCJ0ZXN0IFwiICh3aXRoIHRyYWlsaW5nIHNwYWNlKSxcclxuICAgICAgICAvLyB3ZSB3aWxsIGdldCBcIltBcnJheSwgdW5kZWZpbmVkXVwiIGZvciBhbGxSZXN1bHRzIGFuZCBhZnRlclxyXG4gICAgICAgIC8vIHRoZSBcImZpbHRlclwiIGNhbGwgaXQgd2lsbCB0dXJuIGludG8gXCJbQXJyYXldXCJcclxuICAgICAgfSlcclxuICAgICAgLmZpbHRlcigoYSkgPT4gYSlcclxuXHJcbiAgICB2YXIgcmVzdWx0cyA9IG51bGxcclxuICAgIGlmIChhbGxSZXN1bHRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgcmVzdWx0cyA9IGludGVyc2VjdC5hcHBseShudWxsLCBhbGxSZXN1bHRzKVxyXG4gICAgfSBlbHNlIGlmIChhbGxSZXN1bHRzLmxlbmd0aCkge1xyXG4gICAgICByZXN1bHRzID0gYWxsUmVzdWx0c1swXVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0cyA9IFtdXHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0cyAmJiByZXN1bHRzLmxlbmd0aCA+IG1heFJlc3VsdHMpIHtcclxuICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuc2xpY2UoMCwgbWF4UmVzdWx0cylcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHRzXHJcbiAgfVxyXG5cclxuICBhZGRDdXN0b21FbW9qaShjdXN0b21FbW9qaSkge1xyXG4gICAgbGV0IGVtb2ppRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGN1c3RvbUVtb2ppLCB7XHJcbiAgICAgIGlkOiBjdXN0b21FbW9qaS5zaG9ydF9uYW1lc1swXSxcclxuICAgICAgY3VzdG9tOiB0cnVlLFxyXG4gICAgfSlcclxuICAgIGlmICghZW1vamlEYXRhLnNlYXJjaCkge1xyXG4gICAgICBlbW9qaURhdGEuc2VhcmNoID0gYnVpbGRTZWFyY2goZW1vamlEYXRhKVxyXG4gICAgfVxyXG4gICAgbGV0IGVtb2ppID0gbmV3IEVtb2ppRGF0YShlbW9qaURhdGEpXHJcbiAgICB0aGlzLl9lbW9qaXNbZW1vamkuaWRdID0gZW1vamlcclxuICAgIHRoaXMuX2N1c3RvbUNhdGVnb3J5LmVtb2ppcy5wdXNoKGVtb2ppKVxyXG4gICAgcmV0dXJuIGVtb2ppXHJcbiAgfVxyXG5cclxuICBhZGRFbW9qaShlbW9qaUlkKSB7XG4gICAgLy8gV2UgZXhwZWN0IHRoZSBjb3JyZWN0IGVtb2ppIGlkIHRoYXQgaXMgcHJlc2VudCBpbiB0aGUgZW1vamlzIGRhdGEuXG4gICAgbGV0IGRhdGEgPSB0aGlzLl9kYXRhLmVtb2ppc1tlbW9qaUlkXVxuICAgIGlmICh0aGlzLl9lbW9qaUkxOG4gJiYgdGhpcy5fZW1vamlJMThuLmVtb2ppcyAmJiB0aGlzLl9lbW9qaUkxOG4uZW1vamlzW2Vtb2ppSWRdKSB7XG4gICAgICBjb25zdCBpMThuRW1vamkgPSB0aGlzLl9lbW9qaUkxOG4uZW1vamlzW2Vtb2ppSWRdXG4gICAgICBjb25zdCBiYXNlS2V5d29yZHMgPSBBcnJheS5pc0FycmF5KGRhdGEua2V5d29yZHMpID8gZGF0YS5rZXl3b3JkcyA6IFtdXG4gICAgICBjb25zdCBsb2NhbGl6ZWRLZXl3b3JkcyA9IEFycmF5LmlzQXJyYXkoaTE4bkVtb2ppLmtleXdvcmRzKVxuICAgICAgICA/IGkxOG5FbW9qaS5rZXl3b3Jkc1xuICAgICAgICA6IHR5cGVvZiBpMThuRW1vamkua2V5d29yZHMgPT09ICdzdHJpbmcnXG4gICAgICAgICAgPyBbaTE4bkVtb2ppLmtleXdvcmRzXVxuICAgICAgICAgIDogW11cbiAgICAgIGNvbnN0IGFsaWFzS2V5d29yZHMgPSB0aGlzLl9hbGlhc2VzQnlJZD8uW2Vtb2ppSWRdIHx8IFtdXG4gICAgICBjb25zdCBtZXJnZWRLZXl3b3JkcyA9IG1lcmdlS2V5d29yZHMoXG4gICAgICAgIGJhc2VLZXl3b3JkcyxcbiAgICAgICAgbG9jYWxpemVkS2V5d29yZHMsXG4gICAgICAgIGFsaWFzS2V5d29yZHMsXG4gICAgICAgIGRhdGEubmFtZSA/IFtkYXRhLm5hbWVdIDogW10sXG4gICAgICAgIGkxOG5FbW9qaS5uYW1lID8gW2kxOG5FbW9qaS5uYW1lXSA6IFtdLFxuICAgICAgKVxuICAgICAgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgICAgaTE4bk5hbWU6IGkxOG5FbW9qaS5uYW1lLFxuICAgICAgICBrZXl3b3JkczogbWVyZ2VkS2V5d29yZHMsXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5fYWxpYXNlc0J5SWQgJiYgdGhpcy5fYWxpYXNlc0J5SWRbZW1vamlJZF0gJiYgdGhpcy5fYWxpYXNlc0J5SWRbZW1vamlJZF0ubGVuZ3RoKSB7XG4gICAgICBjb25zdCBiYXNlS2V5d29yZHMgPSBBcnJheS5pc0FycmF5KGRhdGEua2V5d29yZHMpID8gZGF0YS5rZXl3b3JkcyA6IFtdXG4gICAgICBjb25zdCBtZXJnZWRLZXl3b3JkcyA9IG1lcmdlS2V5d29yZHMoYmFzZUtleXdvcmRzLCB0aGlzLl9hbGlhc2VzQnlJZFtlbW9qaUlkXSlcbiAgICAgIGRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7IGtleXdvcmRzOiBtZXJnZWRLZXl3b3JkcyB9KVxuICAgIH1cblxyXG4gICAgaWYgKCF0aGlzLmlzRW1vamlOZWVkZWQoZGF0YSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGVtb2ppID0gbmV3IEVtb2ppRGF0YShkYXRhKVxyXG4gICAgdGhpcy5fZW1vamlzW2Vtb2ppSWRdID0gZW1vamlcclxuICAgIGlmIChlbW9qaS5uYXRpdmUpIHtcclxuICAgICAgdGhpcy5fbmF0aXZlRW1vamlzW2Vtb2ppLm5hdGl2ZV0gPSBlbW9qaVxyXG4gICAgfVxyXG4gICAgaWYgKGVtb2ppLl9za2lucykge1xyXG4gICAgICBmb3IgKGxldCBpZHggaW4gZW1vamkuX3NraW5zKSB7XHJcbiAgICAgICAgbGV0IHNraW4gPSBlbW9qaS5fc2tpbnNbaWR4XVxyXG4gICAgICAgIGlmIChza2luLm5hdGl2ZSkge1xyXG4gICAgICAgICAgdGhpcy5fbmF0aXZlRW1vamlzW3NraW4ubmF0aXZlXSA9IHNraW5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZW1vamkuZW1vdGljb25zKSB7XHJcbiAgICAgIGVtb2ppLmVtb3RpY29ucy5mb3JFYWNoKChlbW90aWNvbikgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9lbW90aWNvbnNbZW1vdGljb25dKSB7XHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZW1vdGljb25zW2Vtb3RpY29uXSA9IGVtb2ppSWRcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiBlbW9qaVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgd2UgbmVlZCB0byBpbmNsdWRlIGdpdmVuIGNhdGVnb3J5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhdGVnb3J5X2lkIC0gVGhlIGNhdGVnb3J5IGlkLlxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IC0gV2hldGhlciB0byBpbmNsdWRlIHRoZSBlbW9qaS5cclxuICAgKi9cclxuICBpc0NhdGVnb3J5TmVlZGVkKGNhdGVnb3J5X2lkKSB7XHJcbiAgICBsZXQgaXNJbmNsdWRlZCA9XHJcbiAgICAgIHRoaXMuX2luY2x1ZGUgJiYgdGhpcy5faW5jbHVkZS5sZW5ndGhcclxuICAgICAgICA/IHRoaXMuX2luY2x1ZGUuaW5kZXhPZihjYXRlZ29yeV9pZCkgPiAtMVxyXG4gICAgICAgIDogdHJ1ZVxyXG4gICAgbGV0IGlzRXhjbHVkZWQgPVxyXG4gICAgICB0aGlzLl9leGNsdWRlICYmIHRoaXMuX2V4Y2x1ZGUubGVuZ3RoXHJcbiAgICAgICAgPyB0aGlzLl9leGNsdWRlLmluZGV4T2YoY2F0ZWdvcnlfaWQpID4gLTFcclxuICAgICAgICA6IGZhbHNlXHJcbiAgICBpZiAoIWlzSW5jbHVkZWQgfHwgaXNFeGNsdWRlZCkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiB3ZSBuZWVkIHRvIGluY2x1ZGUgZ2l2ZW4gZW1vamkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge29iamVjdH0gZW1vamkgLSBUaGUgcmF3IGVtb2ppIG9iamVjdC5cclxuICAgKiBAcmV0dXJuIHtib29sZWFufSAtIFdoZXRoZXIgdG8gaW5jbHVkZSB0aGUgZW1vamkuXHJcbiAgICovXHJcbiAgaXNFbW9qaU5lZWRlZChlbW9qaSkge1xyXG4gICAgaWYgKHRoaXMuX2Vtb2ppc0ZpbHRlcikge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZW1vamlzRmlsdGVyKGVtb2ppKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFbW9qaURhdGEge1xyXG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLl9kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSlcbiAgICB0aGlzLl9za2lucyA9IG51bGxcclxuICAgIGlmICh0aGlzLl9kYXRhLnNraW5fdmFyaWF0aW9ucykge1xyXG4gICAgICB0aGlzLl9za2lucyA9IFtdXHJcbiAgICAgIGZvciAodmFyIHNraW5JZHggaW4gU0tJTlMpIHtcclxuICAgICAgICBsZXQgc2tpbktleSA9IFNLSU5TW3NraW5JZHhdXHJcbiAgICAgICAgbGV0IHZhcmlhdGlvbkRhdGEgPSB0aGlzLl9kYXRhLnNraW5fdmFyaWF0aW9uc1tza2luS2V5XVxyXG4gICAgICAgIGxldCBza2luRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGRhdGEpXHJcbiAgICAgICAgZm9yIChsZXQgayBpbiB2YXJpYXRpb25EYXRhKSB7XHJcbiAgICAgICAgICBza2luRGF0YVtrXSA9IHZhcmlhdGlvbkRhdGFba11cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsZXRlIHNraW5EYXRhLnNraW5fdmFyaWF0aW9uc1xyXG4gICAgICAgIHNraW5EYXRhWydza2luX3RvbmUnXSA9IHBhcnNlSW50KHNraW5JZHgpICsgMVxyXG4gICAgICAgIHRoaXMuX3NraW5zLnB1c2gobmV3IEVtb2ppRGF0YShza2luRGF0YSkpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuX3Nhbml0aXplZCA9IHNhbml0aXplKHRoaXMuX2RhdGEpXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuX3Nhbml0aXplZCkge1xuICAgICAgdGhpc1trZXldID0gdGhpcy5fc2FuaXRpemVkW2tleV1cbiAgICB9XG4gICAgdGhpcy5pMThuTmFtZSA9IHRoaXMuX2RhdGEuaTE4bk5hbWUgfHwgbnVsbFxuICAgIHRoaXMuc2hvcnRfbmFtZXMgPSB0aGlzLl9kYXRhLnNob3J0X25hbWVzXG4gICAgdGhpcy5zaG9ydF9uYW1lID0gdGhpcy5fZGF0YS5zaG9ydF9uYW1lc1swXVxuICAgIE9iamVjdC5mcmVlemUodGhpcylcbiAgfVxuXHJcbiAgZ2V0U2tpbihza2luSWR4KSB7XHJcbiAgICBpZiAoc2tpbklkeCAmJiBza2luSWR4ICE9ICduYXRpdmUnICYmIHRoaXMuX3NraW5zKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9za2luc1tza2luSWR4IC0gMV1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzXHJcbiAgfVxyXG5cclxuICBnZXRQb3NpdGlvbigpIHtcclxuICAgIGxldCBhZGp1c3RlZENvbHVtbnMgPSBTSEVFVF9DT0xVTU5TIC0gMSxcclxuICAgICAgeCA9ICsoKDEwMCAvIGFkanVzdGVkQ29sdW1ucykgKiB0aGlzLl9kYXRhLnNoZWV0X3gpLnRvRml4ZWQoMiksXHJcbiAgICAgIHkgPSArKCgxMDAgLyBhZGp1c3RlZENvbHVtbnMpICogdGhpcy5fZGF0YS5zaGVldF95KS50b0ZpeGVkKDIpXHJcbiAgICByZXR1cm4gYCR7eH0lICR7eX0lYFxyXG4gIH1cclxuXHJcbiAgYXJpYUxhYmVsKCkge1xuICAgIGNvbnN0IHBhcnRzID0gW3RoaXMubmF0aXZlXVxuICAgIGlmICh0aGlzLmkxOG5OYW1lKSB7XG4gICAgICBwYXJ0cy5wdXNoKHRoaXMuaTE4bk5hbWUpXG4gICAgfVxuICAgIHJldHVybiBwYXJ0cy5jb25jYXQodGhpcy5zaG9ydF9uYW1lcykuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJywgJylcbiAgfVxufVxuXHJcbmV4cG9ydCBjbGFzcyBFbW9qaVZpZXcge1xyXG4gIC8qKlxyXG4gICAqIGVtb2ppIC0gRW1vamkgdG8gZGlzcGxheVxyXG4gICAqIHNldCAtIHN0cmluZywgZW1vamkgc2V0IG5hbWVcclxuICAgKiBuYXRpdmUgLSBib29sZWFuLCB3aGV0aGVyIHRvIHJlbmRlciBuYXRpdmUgZW1vamlcclxuICAgKiBmYWxsYmFjayAtIGZhbGxiYWNrIGZ1bmN0aW9uIHRvIHJlbmRlciBtaXNzaW5nIGVtb2ppLCBvcHRpb25hbFxyXG4gICAqIGVtb2ppVG9vbHRpcCAtIHdldGhlciB3ZSBuZWVkIHRvIHNob3cgdGhlIGVtb2ppIHRvb2x0aXAsIG9wdGlvbmFsXHJcbiAgICogZW1vamlTaXplIC0gZW1vamkgc2l6ZSBpbiBwaXhlbHMsIG9wdGlvbmFsXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoZW1vamksIHNraW4sIHNldCwgbmF0aXZlLCBmYWxsYmFjaywgZW1vamlUb29sdGlwLCBlbW9qaVNpemUpIHtcbiAgICB0aGlzLl9lbW9qaSA9IGVtb2ppXHJcbiAgICB0aGlzLl9uYXRpdmUgPSBuYXRpdmVcclxuICAgIHRoaXMuX3NraW4gPSBza2luXHJcbiAgICB0aGlzLl9zZXQgPSBzZXRcclxuICAgIHRoaXMuX2ZhbGxiYWNrID0gZmFsbGJhY2tcclxuXHJcbiAgICB0aGlzLmNhblJlbmRlciA9IHRoaXMuX2NhblJlbmRlcigpXHJcbiAgICB0aGlzLmNzc0NsYXNzID0gdGhpcy5fY3NzQ2xhc3MoKVxyXG4gICAgdGhpcy5jc3NTdHlsZSA9IHRoaXMuX2Nzc1N0eWxlKGVtb2ppU2l6ZSlcclxuICAgIHRoaXMuY29udGVudCA9IHRoaXMuX2NvbnRlbnQoKVxyXG4gICAgdGhpcy50aXRsZSA9XG4gICAgICBlbW9qaVRvb2x0aXAgPT09IHRydWUgPyBlbW9qaS5pMThuTmFtZSB8fCBlbW9qaS5zaG9ydF9uYW1lIDogbnVsbFxuICAgIHRoaXMuYXJpYUxhYmVsID0gZW1vamkuYXJpYUxhYmVsKClcclxuXHJcbiAgICBPYmplY3QuZnJlZXplKHRoaXMpXHJcbiAgfVxyXG5cclxuICBnZXRFbW9qaSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9lbW9qaS5nZXRTa2luKHRoaXMuX3NraW4pXHJcbiAgfVxyXG5cclxuICBfY2FuUmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5faXNDdXN0b20oKSB8fCB0aGlzLl9pc05hdGl2ZSgpIHx8IHRoaXMuX2hhc0Vtb2ppKCkgfHwgdGhpcy5fZmFsbGJhY2tcclxuICAgIClcclxuICB9XHJcblxyXG4gIF9jc3NDbGFzcygpIHtcclxuICAgIHJldHVybiBbJ2Vtb2ppLXNldC0nICsgdGhpcy5fc2V0LCAnZW1vamktdHlwZS0nICsgdGhpcy5fZW1vamlUeXBlKCldXHJcbiAgfVxyXG5cclxuICBfY3NzU3R5bGUoZW1vamlTaXplKSB7XHJcbiAgICBsZXQgY3NzU3R5bGUgPSB7fVxyXG4gICAgaWYgKHRoaXMuX2lzQ3VzdG9tKCkpIHtcclxuICAgICAgY3NzU3R5bGUgPSB7XHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyB0aGlzLmdldEVtb2ppKCkuX2RhdGEuaW1hZ2VVcmwgKyAnKScsXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemU6ICcxMDAlJyxcclxuICAgICAgICB3aWR0aDogZW1vamlTaXplICsgJ3B4JyxcclxuICAgICAgICBoZWlnaHQ6IGVtb2ppU2l6ZSArICdweCcsXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5faGFzRW1vamkoKSAmJiAhdGhpcy5faXNOYXRpdmUoKSkge1xyXG4gICAgICBjc3NTdHlsZSA9IHtcclxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IHRoaXMuZ2V0RW1vamkoKS5nZXRQb3NpdGlvbigpLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZW1vamlTaXplKSB7XHJcbiAgICAgIGlmICh0aGlzLl9pc05hdGl2ZSgpKSB7XHJcbiAgICAgICAgLy8gU2V0IGZvbnQtc2l6ZSBmb3IgbmF0aXZlIGVtb2ppLlxyXG4gICAgICAgIGNzc1N0eWxlID0gT2JqZWN0LmFzc2lnbihjc3NTdHlsZSwge1xyXG4gICAgICAgICAgLy8gZm9udC1zaXplIGlzIHVzZWQgZm9yIG5hdGl2ZSBlbW9qaSB3aGljaCB3ZSBuZWVkXHJcbiAgICAgICAgICAvLyB0byBzY2FsZSB3aXRoIDAuOTUgZmFjdG9yIHRvIGhhdmUgdGhlbSBsb29rIGFwcHJveGltYXRlbHlcclxuICAgICAgICAgIC8vIHRoZSBzYW1lIHNpemUgYXMgaW1hZ2UtYmFzZWQgZW1vamkuXHJcbiAgICAgICAgICBmb250U2l6ZTogTWF0aC5yb3VuZChlbW9qaVNpemUgKiAwLjk1ICogMTApIC8gMTAgKyAncHgnLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gU2V0IHdpZHRoL2hlaWdodCBmb3IgaW1hZ2UgZW1vamkuXHJcbiAgICAgICAgY3NzU3R5bGUgPSBPYmplY3QuYXNzaWduKGNzc1N0eWxlLCB7XHJcbiAgICAgICAgICB3aWR0aDogZW1vamlTaXplICsgJ3B4JyxcclxuICAgICAgICAgIGhlaWdodDogZW1vamlTaXplICsgJ3B4JyxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY3NzU3R5bGVcclxuICB9XHJcblxyXG4gIF9jb250ZW50KCkge1xyXG4gICAgaWYgKHRoaXMuX2lzQ3VzdG9tKCkpIHtcclxuICAgICAgcmV0dXJuICcnXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5faXNOYXRpdmUoKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRFbW9qaSgpLm5hdGl2ZVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2hhc0Vtb2ppKCkpIHtcclxuICAgICAgcmV0dXJuICcnXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fZmFsbGJhY2sgPyB0aGlzLl9mYWxsYmFjayh0aGlzLmdldEVtb2ppKCkpIDogbnVsbFxyXG4gIH1cclxuXHJcbiAgX2lzTmF0aXZlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hdGl2ZVxyXG4gIH1cclxuXHJcbiAgX2lzQ3VzdG9tKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0RW1vamkoKS5jdXN0b21cclxuICB9XHJcblxyXG4gIF9oYXNFbW9qaSgpIHtcclxuICAgIGlmICghdGhpcy5nZXRFbW9qaSgpLl9kYXRhKSB7XHJcbiAgICAgIC8vIFJldHVybiBmYWxzZSBpZiB3ZSBoYXZlIG5vIGRhdGEuXHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGFzSW1hZ2UgPSB0aGlzLmdldEVtb2ppKCkuX2RhdGFbJ2hhc19pbWdfJyArIHRoaXMuX3NldF1cclxuICAgIGlmIChoYXNJbWFnZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIC8vIElmIHRoZXJlIGlzIG5vIGhhc19pbWdfeHh4IGluIHRoZSBkYXRhLCB3ZSBhcmUgd29ya2luZyB3aXRoXHJcbiAgICAgIC8vIHNwZWNpZmljIGRhdGEgZmlsZSwgbGlrZSBmYWNlYm9vay5qc29uLCBzbyB3ZSBhc3N1bWUgYWxsXHJcbiAgICAgIC8vIGVtb2ppcyBhcmUgYXZhaWxhYmxlICh0aGUgOnNldCBzZXR0aW5nIGZvciBwaWNrZXIgc2hvdWxkXHJcbiAgICAgIC8vIG1hdGNoIHRoZSBkYXRhIGZpbGUpLlxyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gICAgLy8gT3RoZXJ3aXNlLCB3ZSBhcmUgdXNpbmcgYWxsLmpzb24gYW5kIGNhbiBzd2l0Y2ggYmV0d2VlbiBkaWZmZXJlbnRcclxuICAgIC8vIHNldHMgLSBpbiB0aGlzIGNhc2UgdGhlIGBoYXNfaW1nX3tzZXRfbmFtZX1gIGlzIGEgYm9vbGVhbiB0aGF0XHJcbiAgICAvLyBpbmRpY2F0ZXMgaWYgdGhlcmUgaXMgc3VjaCBpbWFnZSBvciBub3QgZm9yIGEgZ2l2ZW4gc2V0LlxyXG4gICAgcmV0dXJuIGhhc0ltYWdlXHJcbiAgfVxyXG5cclxuICBfZW1vamlUeXBlKCkge1xyXG4gICAgaWYgKHRoaXMuX2lzQ3VzdG9tKCkpIHtcclxuICAgICAgcmV0dXJuICdjdXN0b20nXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5faXNOYXRpdmUoKSkge1xyXG4gICAgICByZXR1cm4gJ25hdGl2ZSdcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9oYXNFbW9qaSgpKSB7XHJcbiAgICAgIHJldHVybiAnaW1hZ2UnXHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ2ZhbGxiYWNrJ1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplKGVtb2ppKSB7XHJcbiAgdmFyIHtcclxuICAgICAgbmFtZSxcclxuICAgICAgc2hvcnRfbmFtZXMsXHJcbiAgICAgIHNraW5fdG9uZSxcclxuICAgICAgc2tpbl92YXJpYXRpb25zLFxyXG4gICAgICBlbW90aWNvbnMsXHJcbiAgICAgIHVuaWZpZWQsXHJcbiAgICAgIGN1c3RvbSxcclxuICAgICAgaW1hZ2VVcmwsXHJcbiAgICB9ID0gZW1vamksXHJcbiAgICBpZCA9IGVtb2ppLmlkIHx8IHNob3J0X25hbWVzWzBdLFxyXG4gICAgY29sb25zID0gYDoke2lkfTpgXHJcblxyXG4gIGlmIChjdXN0b20pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGlkLFxyXG4gICAgICBuYW1lLFxyXG4gICAgICBjb2xvbnMsXHJcbiAgICAgIGVtb3RpY29ucyxcclxuICAgICAgY3VzdG9tLFxyXG4gICAgICBpbWFnZVVybCxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChza2luX3RvbmUpIHtcclxuICAgIGNvbG9ucyArPSBgOnNraW4tdG9uZS0ke3NraW5fdG9uZX06YFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGlkLFxyXG4gICAgbmFtZSxcclxuICAgIGNvbG9ucyxcclxuICAgIGVtb3RpY29ucyxcclxuICAgIHVuaWZpZWQ6IHVuaWZpZWQudG9Mb3dlckNhc2UoKSxcclxuICAgIHNraW46IHNraW5fdG9uZSB8fCAoc2tpbl92YXJpYXRpb25zID8gMSA6IG51bGwpLFxyXG4gICAgbmF0aXZlOiB1bmlmaWVkVG9OYXRpdmUodW5pZmllZCksXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJ1xyXG5cclxuY29uc3QgREVGQVVMVFMgPSBbXHJcbiAgJysxJyxcclxuICAnZ3Jpbm5pbmcnLFxyXG4gICdraXNzaW5nX2hlYXJ0JyxcclxuICAnaGVhcnRfZXllcycsXHJcbiAgJ2xhdWdoaW5nJyxcclxuICAnc3R1Y2tfb3V0X3Rvbmd1ZV93aW5raW5nX2V5ZScsXHJcbiAgJ3N3ZWF0X3NtaWxlJyxcclxuICAnam95JyxcclxuICAnc2NyZWFtJyxcclxuICAnZGlzYXBwb2ludGVkJyxcclxuICAndW5hbXVzZWQnLFxyXG4gICd3ZWFyeScsXHJcbiAgJ3NvYicsXHJcbiAgJ3N1bmdsYXNzZXMnLFxyXG4gICdoZWFydCcsXHJcbiAgJ2hhbmtleScsXHJcbl1cclxuXHJcbmxldCBmcmVxdWVudGx5LCBpbml0aWFsaXplZFxyXG5sZXQgZGVmYXVsdHMgPSB7fVxyXG5cclxuZnVuY3Rpb24gaW5pdCgpIHtcclxuICBpbml0aWFsaXplZCA9IHRydWVcclxuICBmcmVxdWVudGx5ID0gc3RvcmUuZ2V0KCdmcmVxdWVudGx5JylcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkKGVtb2ppKSB7XHJcbiAgaWYgKCFpbml0aWFsaXplZCkgaW5pdCgpXHJcbiAgdmFyIHsgaWQgfSA9IGVtb2ppXHJcblxyXG4gIGZyZXF1ZW50bHkgfHwgKGZyZXF1ZW50bHkgPSBkZWZhdWx0cylcclxuICBmcmVxdWVudGx5W2lkXSB8fCAoZnJlcXVlbnRseVtpZF0gPSAwKVxyXG4gIGZyZXF1ZW50bHlbaWRdICs9IDFcclxuXHJcbiAgc3RvcmUuc2V0KCdsYXN0JywgaWQpXHJcbiAgc3RvcmUuc2V0KCdmcmVxdWVudGx5JywgZnJlcXVlbnRseSlcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0KG1heE51bWJlcikge1xyXG4gIGlmICghaW5pdGlhbGl6ZWQpIGluaXQoKVxyXG4gIGlmICghZnJlcXVlbnRseSkge1xyXG4gICAgZGVmYXVsdHMgPSB7fVxyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IFtdXHJcblxyXG4gICAgbGV0IGRlZmF1bHRMZW5ndGggPSBNYXRoLm1pbihtYXhOdW1iZXIsIERFRkFVTFRTLmxlbmd0aClcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVmYXVsdExlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGRlZmF1bHRzW0RFRkFVTFRTW2ldXSA9IHBhcnNlSW50KChkZWZhdWx0TGVuZ3RoIC0gaSkgLyA0LCAxMCkgKyAxXHJcbiAgICAgIHJlc3VsdC5wdXNoKERFRkFVTFRTW2ldKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHRcclxuICB9XHJcblxyXG4gIGNvbnN0IHF1YW50aXR5ID0gbWF4TnVtYmVyXHJcbiAgY29uc3QgZnJlcXVlbnRseUtleXMgPSBbXVxyXG5cclxuICBmb3IgKGxldCBrZXkgaW4gZnJlcXVlbnRseSkge1xyXG4gICAgaWYgKGZyZXF1ZW50bHkuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICBmcmVxdWVudGx5S2V5cy5wdXNoKGtleSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHNvcnRlZCA9IGZyZXF1ZW50bHlLZXlzXHJcbiAgICAuc29ydCgoYSwgYikgPT4gZnJlcXVlbnRseVthXSAtIGZyZXF1ZW50bHlbYl0pXHJcbiAgICAucmV2ZXJzZSgpXHJcbiAgY29uc3Qgc2xpY2VkID0gc29ydGVkLnNsaWNlKDAsIHF1YW50aXR5KVxyXG5cclxuICBjb25zdCBsYXN0ID0gc3RvcmUuZ2V0KCdsYXN0JylcclxuXHJcbiAgaWYgKGxhc3QgJiYgc2xpY2VkLmluZGV4T2YobGFzdCkgPT0gLTEpIHtcclxuICAgIHNsaWNlZC5wb3AoKVxyXG4gICAgc2xpY2VkLnB1c2gobGFzdClcclxuICB9XHJcblxyXG4gIHJldHVybiBzbGljZWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBhZGQsIGdldCB9XHJcbiIsImltcG9ydCBzdHJpbmdGcm9tQ29kZVBvaW50IGZyb20gJy4uL3BvbHlmaWxscy9zdHJpbmdGcm9tQ29kZVBvaW50J1xyXG5cclxuZnVuY3Rpb24gdW5pZmllZFRvTmF0aXZlKHVuaWZpZWQpIHtcclxuICB2YXIgdW5pY29kZXMgPSB1bmlmaWVkLnNwbGl0KCctJyksXHJcbiAgICBjb2RlUG9pbnRzID0gdW5pY29kZXMubWFwKCh1KSA9PiBgMHgke3V9YClcclxuXHJcbiAgcmV0dXJuIHN0cmluZ0Zyb21Db2RlUG9pbnQuYXBwbHkobnVsbCwgY29kZVBvaW50cylcclxufVxyXG5cclxuZnVuY3Rpb24gdW5pcShhcnIpIHtcclxuICByZXR1cm4gYXJyLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XHJcbiAgICBpZiAoYWNjLmluZGV4T2YoaXRlbSkgPT09IC0xKSB7XHJcbiAgICAgIGFjYy5wdXNoKGl0ZW0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWNjXHJcbiAgfSwgW10pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGludGVyc2VjdChhLCBiKSB7XHJcbiAgY29uc3QgdW5pcUEgPSB1bmlxKGEpXHJcbiAgY29uc3QgdW5pcUIgPSB1bmlxKGIpXHJcblxyXG4gIHJldHVybiB1bmlxQS5maWx0ZXIoKGl0ZW0pID0+IHVuaXFCLmluZGV4T2YoaXRlbSkgPj0gMClcclxufVxyXG5cclxuZnVuY3Rpb24gZGVlcE1lcmdlKGEsIGIpIHtcclxuICB2YXIgbyA9IHt9XHJcblxyXG4gIGZvciAobGV0IGtleSBpbiBhKSB7XHJcbiAgICBsZXQgb3JpZ2luYWxWYWx1ZSA9IGFba2V5XSxcclxuICAgICAgdmFsdWUgPSBvcmlnaW5hbFZhbHVlXHJcblxyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBrZXkpKSB7XHJcbiAgICAgIHZhbHVlID0gYltrZXldXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgdmFsdWUgPSBkZWVwTWVyZ2Uob3JpZ2luYWxWYWx1ZSwgdmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgb1trZXldID0gdmFsdWVcclxuICB9XHJcblxyXG4gIHJldHVybiBvXHJcbn1cclxuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zb25pY2RvZS9tZWFzdXJlLXNjcm9sbGJhclxyXG5mdW5jdGlvbiBtZWFzdXJlU2Nyb2xsYmFyKCkge1xyXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT0gJ3VuZGVmaW5lZCcpIHJldHVybiAwXHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbiAgZGl2LnN0eWxlLndpZHRoID0gJzEwMHB4J1xyXG4gIGRpdi5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnXHJcbiAgZGl2LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCdcclxuICBkaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXHJcbiAgZGl2LnN0eWxlLnRvcCA9ICctOTk5OXB4J1xyXG5cclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdilcclxuICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IGRpdi5vZmZzZXRXaWR0aCAtIGRpdi5jbGllbnRXaWR0aFxyXG4gIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KVxyXG5cclxuICByZXR1cm4gc2Nyb2xsYmFyV2lkdGhcclxufVxyXG5cclxuZXhwb3J0IHsgdW5pcSwgaW50ZXJzZWN0LCBkZWVwTWVyZ2UsIHVuaWZpZWRUb05hdGl2ZSwgbWVhc3VyZVNjcm9sbGJhciB9XHJcbiIsImV4cG9ydCBjbGFzcyBQaWNrZXJWaWV3IHtcclxuICBjb25zdHJ1Y3RvcihwaWNrZXJDb21wb25lbnQpIHtcclxuICAgIHRoaXMuX3ZtID0gcGlja2VyQ29tcG9uZW50XHJcbiAgICB0aGlzLl9kYXRhID0gcGlja2VyQ29tcG9uZW50LmRhdGFcclxuICAgIHRoaXMuX3BlckxpbmUgPSBwaWNrZXJDb21wb25lbnQucGVyTGluZVxyXG5cclxuICAgIHRoaXMuX2NhdGVnb3JpZXMgPSBbXVxyXG4gICAgdGhpcy5fY2F0ZWdvcmllcy5wdXNoKC4uLnRoaXMuX2RhdGEuY2F0ZWdvcmllcygpKVxyXG4gICAgdGhpcy5fY2F0ZWdvcmllcyA9IHRoaXMuX2NhdGVnb3JpZXMuZmlsdGVyKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICByZXR1cm4gY2F0ZWdvcnkuZW1vamlzLmxlbmd0aCA+IDBcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5fY2F0ZWdvcmllc1swXS5maXJzdCA9IHRydWVcclxuICAgIE9iamVjdC5mcmVlemUodGhpcy5fY2F0ZWdvcmllcylcclxuXHJcbiAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gdGhpcy5fY2F0ZWdvcmllc1swXVxyXG4gICAgdGhpcy5zZWFyY2hFbW9qaXMgPSBudWxsXHJcblxyXG4gICAgLy8gUHJldmlldyBlbW9qaSwgc2hvd24gb24gbW91c2Ugb3ZlciBvciB3aGVuIHdlIG1vdmVcclxuICAgIC8vIHdpdGggYXJyb3cga2V5cy5cclxuICAgIHRoaXMucHJldmlld0Vtb2ppID0gbnVsbFxyXG4gICAgLy8gSW5kZXhlcyBhcmUgdXNlZCB0byBrZWVwIHRoZSBwb3NpdGlvbiB3aGVuIG1vdmluZ1xyXG4gICAgLy8gd2l0aCBhcnJvd3M6IGN1cnJlbnQgY2F0ZWdvcnkgYW5kIGN1cnJlbnQgZW1vamlcclxuICAgIC8vIGluc2lkZSB0aGUgY2F0ZWdvcnkuXHJcbiAgICB0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID0gMFxyXG4gICAgdGhpcy5wcmV2aWV3RW1vamlJZHggPSAtMVxyXG4gIH1cclxuXHJcbiAgb25TY3JvbGwoKSB7XHJcbiAgICBjb25zdCBzY3JvbGxFbGVtZW50ID0gdGhpcy5fdm0uJHJlZnMuc2Nyb2xsXHJcblxyXG4gICAgaWYgKCFzY3JvbGxFbGVtZW50KSB7XHJcbiAgICAgIC8vIFJlcG9ydGVkIGluIGh0dHBzOi8vZ2l0aHViLmNvbS9zZXJlYnJvdi9lbW9qaS1tYXJ0LXZ1ZS9pc3N1ZXMvMzA1XHJcbiAgICAgIC8vIFdvdWxkIGJlIGdvb2QgdG8gdW5kZXJzdGFuZCBob3cgaXQgY2FuIGhhcHBlbiwgYnV0IGF0IGxlYXN0XHJcbiAgICAgIC8vIGV4aXRpbmcgZWFybHkgd2UgcHJldmVudCB0aGUgZXJyb3IuXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHNjcm9sbEVsZW1lbnQuc2Nyb2xsVG9wXHJcblxyXG4gICAgbGV0IGFjdGl2ZUNhdGVnb3J5ID0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbMF1cclxuICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIGxldCBjYXRlZ29yeSA9IHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzW2ldXHJcbiAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzLl92bS5nZXRDYXRlZ29yeUNvbXBvbmVudChpKVxyXG4gICAgICAvLyBUaGUgYC01MGAgb2Zmc2V0IHN3aXRjaGVzIGFjdGl2ZSBjYXRlZ29yeSAoc2VsZWN0ZWQgaW4gdGhlXHJcbiAgICAgIC8vIGFuY2hvcnMgYmFyKSBhIGJpdCBlYXJpbGVyLCBiZWZvcmUgaXQgYWN0dWFsbHkgcmVhY2hlcyB0aGUgdG9wLlxyXG4gICAgICBpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC4kZWwub2Zmc2V0VG9wIC0gNTAgPiBzY3JvbGxUb3ApIHtcclxuICAgICAgICBicmVha1xyXG4gICAgICB9XHJcbiAgICAgIGFjdGl2ZUNhdGVnb3J5ID0gY2F0ZWdvcnlcclxuICAgIH1cclxuICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSBhY3RpdmVDYXRlZ29yeVxyXG4gIH1cclxuXHJcbiAgZ2V0IGFsbENhdGVnb3JpZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2F0ZWdvcmllc1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZpbHRlcmVkQ2F0ZWdvcmllcygpIHtcclxuICAgIGlmICh0aGlzLnNlYXJjaEVtb2ppcykge1xyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnc2VhcmNoJyxcclxuICAgICAgICAgIG5hbWU6ICdTZWFyY2gnLFxyXG4gICAgICAgICAgZW1vamlzOiB0aGlzLnNlYXJjaEVtb2ppcyxcclxuICAgICAgICB9LFxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fY2F0ZWdvcmllcy5maWx0ZXIoKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGxldCBoYXNFbW9qaXMgPSBjYXRlZ29yeS5lbW9qaXMubGVuZ3RoID4gMFxyXG4gICAgICByZXR1cm4gaGFzRW1vamlzXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0IHByZXZpZXdFbW9qaUNhdGVnb3J5KCkge1xyXG4gICAgaWYgKHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPj0gMCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeF1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICBvbkFuY2hvckNsaWNrKGNhdGVnb3J5KSB7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hFbW9qaXMpIHtcclxuICAgICAgLy8gTm8gY2F0ZWdvcmllcyBhcmUgc2hvd24gd2hlbiBzZWFyY2ggaXMgYWN0aXZlLlxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxldCBpID0gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXMuaW5kZXhPZihjYXRlZ29yeSlcclxuICAgIGxldCBjb21wb25lbnQgPSB0aGlzLl92bS5nZXRDYXRlZ29yeUNvbXBvbmVudChpKVxyXG4gICAgbGV0IHNjcm9sbFRvQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gICAgICBpZiAoY29tcG9uZW50KSB7XHJcbiAgICAgICAgbGV0IHRvcCA9IGNvbXBvbmVudC4kZWwub2Zmc2V0VG9wXHJcbiAgICAgICAgaWYgKGNhdGVnb3J5LmZpcnN0KSB7XHJcbiAgICAgICAgICB0b3AgPSAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3ZtLiRyZWZzLnNjcm9sbC5zY3JvbGxUb3AgPSB0b3BcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX3ZtLmluZmluaXRlU2Nyb2xsKSB7XHJcbiAgICAgIHNjcm9sbFRvQ29tcG9uZW50KClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1tpXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TZWFyY2godmFsdWUpIHtcclxuICAgIGxldCBlbW9qaXMgPSB0aGlzLl9kYXRhLnNlYXJjaCh2YWx1ZSwgdGhpcy5tYXhTZWFyY2hSZXN1bHRzKVxyXG4gICAgdGhpcy5zZWFyY2hFbW9qaXMgPSBlbW9qaXNcclxuXHJcbiAgICB0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID0gMFxyXG4gICAgdGhpcy5wcmV2aWV3RW1vamlJZHggPSAwXHJcbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdFbW9qaSgpXHJcbiAgfVxyXG5cclxuICBvbkVtb2ppRW50ZXIoZW1vamkpIHtcclxuICAgIHRoaXMucHJldmlld0Vtb2ppID0gZW1vamlcclxuICAgIHRoaXMucHJldmlld0Vtb2ppSWR4ID0gLTFcclxuICAgIHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPSAtMVxyXG4gIH1cclxuXHJcbiAgb25FbW9qaUxlYXZlKGVtb2ppKSB7XHJcbiAgICB0aGlzLnByZXZpZXdFbW9qaSA9IG51bGxcclxuICB9XHJcblxyXG4gIG9uQXJyb3dMZWZ0KCkge1xyXG4gICAgLy8gTW92aW5nIGxlZnQsIGRlY3JlYXNlIGVtb2ppIGluZGV4LlxyXG4gICAgaWYgKHRoaXMucHJldmlld0Vtb2ppSWR4ID4gMCkge1xyXG4gICAgICB0aGlzLnByZXZpZXdFbW9qaUlkeCAtPSAxXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBJZiBlbW9qaSBpbmRleCBpcyB6ZXJvLCBnbyB0byB0aGUgcHJldmlvdXMgY2F0ZWdvcnkuXHJcbiAgICAgIHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggLT0gMVxyXG4gICAgICBpZiAodGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCA8IDApIHtcclxuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGZpcnN0IGNhdGVnb3J5LCBrZWVwIGl0LlxyXG4gICAgICAgIHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPSAwXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gVXBkYXRlIGVtb2ppIGluZGV4IC0gd2UgbW92ZWQgdG8gdGhlIHByZXZpb3VzIGNhdGVnb3J5LFxyXG4gICAgICAgIC8vIGdldCB0aGUgbGFzdCBlbW9qaSBpbiBpdC5cclxuICAgICAgICB0aGlzLnByZXZpZXdFbW9qaUlkeCA9XHJcbiAgICAgICAgICB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1t0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4XS5lbW9qaXMubGVuZ3RoIC1cclxuICAgICAgICAgIDFcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy51cGRhdGVQcmV2aWV3RW1vamkoKVxyXG4gIH1cclxuXHJcbiAgb25BcnJvd1JpZ2h0KCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLnByZXZpZXdFbW9qaUlkeCA8XHJcbiAgICAgIHRoaXMuZW1vamlzTGVuZ3RoKHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHgpIC0gMVxyXG4gICAgKSB7XHJcbiAgICAgIC8vIE1vdmluZyByaWdodCB3aXRoaW4gY2F0ZWdvcnksIGluY3JlYXNlIGVtb2ppIGluZGV4LlxyXG4gICAgICB0aGlzLnByZXZpZXdFbW9qaUlkeCArPSAxXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBHbyB0byB0aGUgbmV4dCBjYXRlZ29yeS5cclxuICAgICAgdGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCArPSAxXHJcbiAgICAgIGlmICh0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4ID49IHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzLmxlbmd0aCkge1xyXG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgdGhlIGxhc3QgY2F0ZWdvcnkgLSBrZWVwIGl0LlxyXG4gICAgICAgIHRoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHggPSB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllcy5sZW5ndGggLSAxXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gSWYgd2UgbW92ZWQgdG8gdGhlIG5leHQgY2F0ZWdvcnksIHVwZGF0ZSBlbW9qaSBpbmRleCB0byB0aGVcclxuICAgICAgICAvLyBmaXJzdCBlbW9qaSBpbiB0aGUgbmV3IGNhdGVnb3J5LlxyXG4gICAgICAgIHRoaXMucHJldmlld0Vtb2ppSWR4ID0gMFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdFbW9qaSgpXHJcbiAgfVxyXG5cclxuICBvbkFycm93RG93bigpIHtcclxuICAgIC8vIElmIHdlIGFyZSBvdXQgb2YgdGhlIGVtb2ppIGNvbnRyb2wgKGluZGV4IGlzIC0xKSwgc2VsZWN0IHRoZSBmaXJzdFxyXG4gICAgLy8gZW1vamkgaW4gdGhlIGZpcnN0IGNhdGVnb3J5IGJ5IGNhbGxpbmcgYG9uQXJyb3dSaWdodGAuXHJcbiAgICBpZiAodGhpcy5wcmV2aWV3RW1vamlJZHggPT0gLTEpIHtcclxuICAgICAgcmV0dXJuIHRoaXMub25BcnJvd1JpZ2h0KClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYXRlZ29yeUxlbmd0aCA9XHJcbiAgICAgIHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzW3RoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHhdLmVtb2ppcy5sZW5ndGhcclxuXHJcbiAgICAvLyBXaGVuIG1vdmluZyBkb3duLCB3ZSBjYW4gbW92ZSBgX3BlckxpbmVgIGljb25zIHJpZ2h0IHRvXHJcbiAgICAvLyBqdW1wIHRvIHRoZSBzYW1lIHBvc2l0aW9uIGluIHRoZSBuZXh0IHJvdy5cclxuICAgIGxldCBkaWZmID0gdGhpcy5fcGVyTGluZVxyXG5cclxuICAgIC8vIFRPRE86IHByZXZpZXdDYXRlZ29yeSBzaG91bGQgbWF0Y2ggYWN0aXZlQ2F0ZWdvcnlcclxuICAgIC8vIChzbyBpdCB3b3VsZCBiZSBib3RoIGhpZ2hsaWdodGVkIGluIFVJIGFuZCB1c2VkXHJcbiAgICAvLyB3aGVuIHdlIHN0YXJ0IG1vdmluZyB3aXRoIGFycm93cyBhZnRlciBjbGlja2luZ1xyXG4gICAgLy8gdGhlIGNhdGVnb3J5KS5cclxuXHJcbiAgICAvLyBOb3RlOiBwcm9iYWJseSB3ZSBjYW4gYWx3YXN5IHRha2UgY3VycmVudCByb3cgbGVuZ3RoXHJcbiAgICAvLyBhcyBhIGBkaWZmYCAtIGl0IHdpbGwgZml0IGJvdGggY2FzZSBvZiBhbnkgcm93IGFuZFxyXG4gICAgLy8gc3BlY2lhbCBjYXNlIG9mIHRoZSBsYXN0IHJvdy5cclxuICAgIC8vIE5vdGU6IGl0IGNhbiBiZSBhbHNvIGVhc2llciB0byB1cGRhdGUgaW5kZXhlc1xyXG4gICAgLy8gZGlyZWN0bHkgaGVyZSBpbnN0ZWFkIG9mIGNhbGxpbmcgb25BcnJvd1JpZ2h0LlxyXG4gICAgLy8gU2FtZSBpcyB0cnVlIGZvciBgb25BcnJvd1VwYC5cclxuXHJcbiAgICAvLyBVbmxlc3MgaWYgd2UgYXJlIG9uIHRoZSBsYXN0IHJvdyBvZiB0aGUgY2F0ZWdvcnkgYW5kXHJcbiAgICAvLyB0aGVyZSBhcmUgbGVzcyB0aGVuIGBfcGVyTGluZWAgZW1vamlzIGluIGl0LlxyXG4gICAgLy8gSW4gdGhpcyBjYXNlIHdlIHVzZSB0aGUgbGFzdCByb3cgbGVuZ3RoIGFzIGRpZmZcclxuICAgIC8vIHNvIHdlIGdvIHN0cmFpZ2h0IGRvd24sIGZvciBleGFtcGxlOlxyXG4gICAgLy9cclxuICAgIC8vICAgMSAyIDMgNCA1IDZcclxuICAgIC8vICAgNyA4IDlcclxuICAgIC8vICAgQSBCIEMgRCBFIEZcclxuICAgIC8vXHJcbiAgICAvLyBJZiB3ZSBnbyBkb3duIGZyb20gYDhgLCB3ZSBuZWVkIHRvIG1vdmUgMyBlbW9qaXMgcmlnaHRcclxuICAgIC8vIHRvIGxlbmQgYXQgYEJgIChhbmQgMyBpcyB0aGUgbGVuZ3RoIG9mIHRoZSBsYXN0IHJvdyBvZlxyXG4gICAgLy8gdGhpcyBjYXRlZ29yeSkuXHJcbiAgICAvLyBBbmQgaWYgd2UgdXNlZCA2IGluc3RlYWQgKHJvdyBsZW5ndGgsIGBfcGVyTGluZWApLCB3ZSB3b3VsZFxyXG4gICAgLy8gbGVuZCB1cCBhdCBgRWAuXHJcbiAgICBpZiAodGhpcy5wcmV2aWV3RW1vamlJZHggKyBkaWZmID4gY2F0ZWdvcnlMZW5ndGgpIHtcclxuICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBsYXN0IHJvdyBsZW5ndGguXHJcbiAgICAgIGRpZmYgPSBjYXRlZ29yeUxlbmd0aCAlIHRoaXMuX3BlckxpbmVcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZjsgaSsrKSB7XHJcbiAgICAgIHRoaXMub25BcnJvd1JpZ2h0KClcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlUHJldmlld0Vtb2ppKClcclxuICB9XHJcblxyXG4gIG9uQXJyb3dVcCgpIHtcclxuICAgIC8vIFNpbWlsYXIgdG8gYG9uQXJyb3dEb3duYCwgdG8gbW92ZSB1cCB3ZSBjYW4gbW92ZSBsZWZ0XHJcbiAgICAvLyBieSBgX3BlckxpbmVgIG51bWJlciBvZiBlbW9qaXMuXHJcbiAgICBsZXQgZGlmZiA9IHRoaXMuX3BlckxpbmVcclxuXHJcbiAgICBpZiAodGhpcy5wcmV2aWV3RW1vamlJZHggLSBkaWZmIDwgMCkge1xyXG4gICAgICBpZiAodGhpcy5wcmV2aWV3RW1vamlDYXRlZ29yeUlkeCA+IDApIHtcclxuICAgICAgICAvLyBVbmxlc3MgaWYgd2UgYXJlIG9uIHRoZSBmaXJzdCBsaW5lIG9mIHRoZSBjYXRlZ29yeSBhbmRcclxuICAgICAgICAvLyB0aGUgbGFzdCBsaW5lIGluIHRoZSBwcmV2aW91cyBjYXRlZ29yeSBpcyBzaG9ydGVyIHRoYW5cclxuICAgICAgICAvLyBgX3BlckxpbmVgLlxyXG4gICAgICAgIC8vIEluIHRoaXMgY2FzZSB3ZSB1c2UgdGhlIGxhc3Qgcm93IGxlbmd0aCBhcyBkaWZmLCBzb1xyXG4gICAgICAgIC8vIHdlIGdvIHN0cmFpZ2h0IHVwLCBmb3IgZXhhbXBsZTpcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgMSAyIDMgNCA1XHJcbiAgICAgICAgLy8gICA2IDcgOFxyXG4gICAgICAgIC8vICAgOSBBIEIgQyBEXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBJZiB3ZSBnbyB1cCBmcm9tIGBBYCwgd2UgbmVlZCB0byBtb3ZlIDMgZW1vamlzIGxlZnQgdG8gZ2V0XHJcbiAgICAgICAgLy8gdG8gYDdgIChhbmQgMyBpcyB0aGUgbGVuZ3RoIG9mIHRoZSBsYXN0IHJvdyBvZiB0aGUgcHJldmlvdXNcclxuICAgICAgICAvLyBjYXRlZ29yeSkuXHJcbiAgICAgICAgY29uc3QgcHJldkNhdGVnb3J5TGFzdFJvd0xlbmd0aCA9XHJcbiAgICAgICAgICB0aGlzLmZpbHRlcmVkQ2F0ZWdvcmllc1t0aGlzLnByZXZpZXdFbW9qaUNhdGVnb3J5SWR4IC0gMV0uZW1vamlzXHJcbiAgICAgICAgICAgIC5sZW5ndGggJSB0aGlzLl9wZXJMaW5lXHJcbiAgICAgICAgLy8gZGlmZiA9IHRoaXMucHJldmlld0Vtb2ppSWR4ICsgcHJldkNhdGVnb3J5TGFzdFJvd0xlbmd0aFxyXG4gICAgICAgIGRpZmYgPSBwcmV2Q2F0ZWdvcnlMYXN0Um93TGVuZ3RoXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGlmZiA9IDBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWZmOyBpKyspIHtcclxuICAgICAgdGhpcy5vbkFycm93TGVmdCgpXHJcbiAgICB9XHJcbiAgICB0aGlzLnVwZGF0ZVByZXZpZXdFbW9qaSgpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVQcmV2aWV3RW1vamkoKSB7XHJcbiAgICB0aGlzLnByZXZpZXdFbW9qaSA9XHJcbiAgICAgIHRoaXMuZmlsdGVyZWRDYXRlZ29yaWVzW3RoaXMucHJldmlld0Vtb2ppQ2F0ZWdvcnlJZHhdLmVtb2ppc1tcclxuICAgICAgICB0aGlzLnByZXZpZXdFbW9qaUlkeFxyXG4gICAgICBdXHJcblxyXG4gICAgdGhpcy5fdm0uJG5leHRUaWNrKCgpID0+IHtcclxuICAgICAgLy8gU2Nyb2xsIHRoZSB2aWV3IGlmIHRoZSBgcHJldmlld0Vtb2ppYCBnb2VzIG91dCBvZiB0aGUgdmlzaWJsZSBhcmVhLlxyXG4gICAgICBjb25zdCBzY3JvbGxFbCA9IHRoaXMuX3ZtLiRyZWZzLnNjcm9sbFxyXG5cclxuICAgICAgLy8gTm90ZTogaXQgd291bGQgYmUgbW9yZSBWdWUtaXNoIHRvIG1hcmsgYWxsIGVtb2ppcyB3aXRoIGByZWZgc1xyXG4gICAgICAvLyBhbmQgdGhlbiBkbyBzb21ldGhpbmcgc2ltaWxhciBoZXJlIHRvIHdoYXQgd2UgZG8gaW4gdGhlXHJcbiAgICAgIC8vIGBnZXRDYXRlZ29yaWVzYCBpbnN0ZWFkIG9mIHVzaW5nIGBxdWVyeVNlbGVjdG9yYCBkaXJlY3RseSxcclxuICAgICAgLy8gYnV0IEkgYW0gbm90IHN1cmUgaWYgaGF2aW5nIG1hbnkgcmVmcyB3b3VsZCBhZmZlY3QgdGhlIHBlcmZvcm1hbmNlXHJcbiAgICAgIC8vIChpdCBtaWdodCwgc28gSSB1c2UgYHF1ZXJ5U2VsZWN0b3JgIGZvciBub3cpLlxyXG4gICAgICBjb25zdCBlbW9qaUVsID0gc2Nyb2xsRWwucXVlcnlTZWxlY3RvcignLmVtb2ppLW1hcnQtZW1vamktc2VsZWN0ZWQnKVxyXG5cclxuICAgICAgY29uc3Qgc2Nyb2xsSGVpZ2h0ID0gc2Nyb2xsRWwub2Zmc2V0VG9wIC0gc2Nyb2xsRWwub2Zmc2V0SGVpZ2h0XHJcbiAgICAgIGlmIChcclxuICAgICAgICBlbW9qaUVsICYmXHJcbiAgICAgICAgZW1vamlFbC5vZmZzZXRUb3AgKyBlbW9qaUVsLm9mZnNldEhlaWdodCA+XHJcbiAgICAgICAgICBzY3JvbGxIZWlnaHQgKyBzY3JvbGxFbC5zY3JvbGxUb3BcclxuICAgICAgKSB7XHJcbiAgICAgICAgc2Nyb2xsRWwuc2Nyb2xsVG9wICs9IGVtb2ppRWwub2Zmc2V0SGVpZ2h0XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGVtb2ppRWwgJiYgZW1vamlFbC5vZmZzZXRUb3AgPCBzY3JvbGxFbC5zY3JvbGxUb3ApIHtcclxuICAgICAgICBzY3JvbGxFbC5zY3JvbGxUb3AgLT0gZW1vamlFbC5vZmZzZXRIZWlnaHRcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGVtb2ppc0xlbmd0aChjYXRlZ29yeUlkeCkge1xyXG4gICAgaWYgKGNhdGVnb3J5SWR4ID09IC0xKSB7XHJcbiAgICAgIHJldHVybiAwXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJlZENhdGVnb3JpZXNbY2F0ZWdvcnlJZHhdLmVtb2ppcy5sZW5ndGhcclxuICB9XHJcbn1cclxuIiwiY29uc3QgRW1vamlQcm9wcyA9IHtcclxuICBuYXRpdmU6IHtcclxuICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICBkZWZhdWx0OiBmYWxzZSxcclxuICB9LFxyXG4gIHRvb2x0aXA6IHtcclxuICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICBkZWZhdWx0OiBmYWxzZSxcclxuICB9LFxyXG4gIGZhbGxiYWNrOiB7XHJcbiAgICB0eXBlOiBGdW5jdGlvbixcclxuICB9LFxyXG4gIHNraW46IHtcclxuICAgIHR5cGU6IE51bWJlcixcclxuICAgIGRlZmF1bHQ6IDEsXHJcbiAgfSxcclxuICBzZXQ6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIGRlZmF1bHQ6ICdhcHBsZScsXHJcbiAgfSxcclxuICBlbW9qaToge1xyXG4gICAgdHlwZTogW1N0cmluZywgT2JqZWN0XSxcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gIH0sXHJcbiAgc2l6ZToge1xyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gICAgZGVmYXVsdDogbnVsbCxcclxuICB9LFxyXG4gIHRhZzoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgZGVmYXVsdDogJ3NwYW4nLFxyXG4gIH0sXHJcbn1cclxuXHJcbmNvbnN0IFBpY2tlclByb3BzID0ge1xyXG4gIHBlckxpbmU6IHtcclxuICAgIHR5cGU6IE51bWJlcixcclxuICAgIGRlZmF1bHQ6IDksXHJcbiAgfSxcclxuICBtYXhTZWFyY2hSZXN1bHRzOiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICBkZWZhdWx0OiA3NSxcclxuICB9LFxyXG4gIGVtb2ppU2l6ZToge1xyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gICAgZGVmYXVsdDogMjQsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgZGVmYXVsdDogJ0Vtb2ppIE1hcnTihKInLFxyXG4gIH0sXHJcbiAgZW1vamk6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIGRlZmF1bHQ6ICdkZXBhcnRtZW50X3N0b3JlJyxcclxuICB9LFxyXG4gIGNvbG9yOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBkZWZhdWx0OiAnI2FlNjVjNScsXHJcbiAgfSxcclxuICBzZXQ6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIGRlZmF1bHQ6ICdhcHBsZScsXHJcbiAgfSxcclxuICBza2luOiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICBkZWZhdWx0OiBudWxsLFxyXG4gIH0sXHJcbiAgZGVmYXVsdFNraW46IHtcclxuICAgIHR5cGU6IE51bWJlcixcclxuICAgIGRlZmF1bHQ6IDEsXHJcbiAgfSxcclxuICBuYXRpdmU6IHtcclxuICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICBkZWZhdWx0OiBmYWxzZSxcclxuICB9LFxyXG4gIGVtb2ppVG9vbHRpcDoge1xyXG4gICAgdHlwZTogQm9vbGVhbixcclxuICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAgYXV0b0ZvY3VzOiB7XHJcbiAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgfSxcclxuICBpMThuOiB7XHJcbiAgICB0eXBlOiBPYmplY3QsXHJcbiAgICBkZWZhdWx0KCkge1xyXG4gICAgICByZXR1cm4ge31cclxuICAgIH0sXHJcbiAgfSxcclxuICBzaG93UHJldmlldzoge1xyXG4gICAgdHlwZTogQm9vbGVhbixcclxuICAgIGRlZmF1bHQ6IHRydWUsXHJcbiAgfSxcclxuICBzaG93U2VhcmNoOiB7XHJcbiAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgZGVmYXVsdDogdHJ1ZSxcclxuICB9LFxyXG4gIHNob3dDYXRlZ29yaWVzOiB7XHJcbiAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgZGVmYXVsdDogdHJ1ZSxcclxuICB9LFxyXG4gIHNob3dTa2luVG9uZXM6IHtcclxuICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICBkZWZhdWx0OiB0cnVlLFxyXG4gIH0sXHJcbiAgaW5maW5pdGVTY3JvbGw6IHtcclxuICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICBkZWZhdWx0OiB0cnVlLFxyXG4gIH0sXHJcbiAgcGlja2VyU3R5bGVzOiB7XHJcbiAgICB0eXBlOiBPYmplY3QsXHJcbiAgICBkZWZhdWx0KCkge1xyXG4gICAgICByZXR1cm4ge31cclxuICAgIH0sXHJcbiAgfSxcclxufVxyXG5cclxuZXhwb3J0IHsgRW1vamlQcm9wcywgUGlja2VyUHJvcHMgfVxyXG4iLCJ2YXIgTkFNRVNQQUNFID0gJ2Vtb2ppLW1hcnQnXHJcblxyXG5jb25zdCBfSlNPTiA9IEpTT05cclxuXHJcbnZhciBpc0xvY2FsU3RvcmFnZVN1cHBvcnRlZCA9XHJcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2xvY2FsU3RvcmFnZScgaW4gd2luZG93XHJcblxyXG5sZXQgZ2V0dGVyXHJcbmxldCBzZXR0ZXJcclxuXHJcbmZ1bmN0aW9uIHNldEhhbmRsZXJzKGhhbmRsZXJzKSB7XHJcbiAgaGFuZGxlcnMgfHwgKGhhbmRsZXJzID0ge30pXHJcblxyXG4gIGdldHRlciA9IGhhbmRsZXJzLmdldHRlclxyXG4gIHNldHRlciA9IGhhbmRsZXJzLnNldHRlclxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXROYW1lc3BhY2UobmFtZXNwYWNlKSB7XHJcbiAgTkFNRVNQQUNFID0gbmFtZXNwYWNlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZShzdGF0ZSkge1xyXG4gIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xyXG4gICAgbGV0IHZhbHVlID0gc3RhdGVba2V5XVxyXG4gICAgc2V0KGtleSwgdmFsdWUpXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xyXG4gIGlmIChzZXR0ZXIpIHtcclxuICAgIHNldHRlcihrZXksIHZhbHVlKVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAoIWlzTG9jYWxTdG9yYWdlU3VwcG9ydGVkKSByZXR1cm5cclxuICAgIHRyeSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2VbYCR7TkFNRVNQQUNFfS4ke2tleX1gXSA9IF9KU09OLnN0cmluZ2lmeSh2YWx1ZSlcclxuICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXQoa2V5KSB7XHJcbiAgaWYgKGdldHRlcikge1xyXG4gICAgcmV0dXJuIGdldHRlcihrZXkpXHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICghaXNMb2NhbFN0b3JhZ2VTdXBwb3J0ZWQpIHJldHVyblxyXG4gICAgdHJ5IHtcclxuICAgICAgdmFyIHZhbHVlID0gd2luZG93LmxvY2FsU3RvcmFnZVtgJHtOQU1FU1BBQ0V9LiR7a2V5fWBdXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgdXBkYXRlLCBzZXQsIGdldCwgc2V0TmFtZXNwYWNlLCBzZXRIYW5kbGVycyB9XHJcbiIsIi8vIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXHJcbi8vIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcclxuXHJcbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcclxuXHJcbi8vIE1JVCBsaWNlbnNlXHJcblxyXG52YXIgaXNXaW5kb3dBdmFpbGFibGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xyXG5cclxuaXNXaW5kb3dBdmFpbGFibGUgJiZcclxuICAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGxhc3RUaW1lID0gMFxyXG4gICAgdmFyIHZlbmRvcnMgPSBbJ21zJywgJ21veicsICd3ZWJraXQnLCAnbyddXHJcblxyXG4gICAgZm9yICh2YXIgeCA9IDA7IHggPCB2ZW5kb3JzLmxlbmd0aCAmJiAhd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTsgKyt4KSB7XHJcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPVxyXG4gICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgJ1JlcXVlc3RBbmltYXRpb25GcmFtZSddXHJcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9XHJcbiAgICAgICAgd2luZG93W3ZlbmRvcnNbeF0gKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fFxyXG4gICAgICAgIHdpbmRvd1t2ZW5kb3JzW3hdICsgJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKVxyXG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBlbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIGN1cnJUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKClcclxuICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJUaW1lIC0gbGFzdFRpbWUpKVxyXG4gICAgICAgIHZhciBpZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGNhbGxiYWNrKGN1cnJUaW1lICsgdGltZVRvQ2FsbClcclxuICAgICAgICB9LCB0aW1lVG9DYWxsKVxyXG5cclxuICAgICAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbFxyXG4gICAgICAgIHJldHVybiBpZFxyXG4gICAgICB9XHJcblxyXG4gICAgaWYgKCF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpXHJcbiAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChpZClcclxuICAgICAgfVxyXG4gIH0pKClcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHN0b3JlIGZyb20gJy4vdXRpbHMvc3RvcmUnXHJcbmltcG9ydCB7IHVuY29tcHJlc3MgfSBmcm9tICcuL3V0aWxzL2RhdGEnXHJcbmltcG9ydCBmcmVxdWVudGx5IGZyb20gJy4vdXRpbHMvZnJlcXVlbnRseSdcclxuXHJcbmV4cG9ydCB7XHJcbiAgUGlja2VyLFxyXG4gIEVtb2ppLFxyXG4gIEFuY2hvcnMsXHJcbiAgUHJldmlldyxcclxuICBTZWFyY2gsXHJcbiAgQ2F0ZWdvcnksXHJcbiAgU2tpbnMsXHJcbn0gZnJvbSAnLi9jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IHsgRW1vamlJbmRleCwgRW1vamlWaWV3LCBFbW9qaURhdGEsIHNhbml0aXplIH0gZnJvbSAnLi91dGlscy9lbW9qaS1kYXRhJ1xyXG5leHBvcnQgeyB1bmNvbXByZXNzLCBzdG9yZSwgZnJlcXVlbnRseSB9XHJcbiJdLCJuYW1lcyI6WyJFbW9qaVByb3BzIiwiRW1vamlWaWV3IiwicHJvcHMiLCJfb2JqZWN0U3ByZWFkIiwiZGF0YSIsInR5cGUiLCJPYmplY3QiLCJyZXF1aXJlZCIsImVtaXRzIiwiY29tcHV0ZWQiLCJ2aWV3IiwiZW1vamlPYmplY3QiLCJza2luIiwic2V0IiwibmF0aXZlIiwiZmFsbGJhY2siLCJ0b29sdGlwIiwic2l6ZSIsInNhbml0aXplZERhdGEiLCJfc2FuaXRpemVkIiwidGl0bGUiLCJzaG9ydF9uYW1lIiwiZW1vamkiLCJmaW5kRW1vamkiLCJjcmVhdGVkIiwibWV0aG9kcyIsIm9uQ2xpY2siLCIkZW1pdCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInN0b3JlIiwiZnJlcXVlbnRseSIsImRlZXBNZXJnZSIsIm1lYXN1cmVTY3JvbGxiYXIiLCJQaWNrZXJQcm9wcyIsIlBpY2tlclZpZXciLCJBbmNob3JzIiwiQ2F0ZWdvcnkiLCJQcmV2aWV3IiwiU2VhcmNoIiwiSTE4TiIsInNlYXJjaCIsIm5vdGZvdW5kIiwiY2F0ZWdvcmllcyIsInJlY2VudCIsInNtaWxleXMiLCJwZW9wbGUiLCJuYXR1cmUiLCJmb29kcyIsImFjdGl2aXR5IiwicGxhY2VzIiwib2JqZWN0cyIsInN5bWJvbHMiLCJmbGFncyIsImN1c3RvbSIsImFjdGl2ZVNraW4iLCJnZXQiLCJkZWZhdWx0U2tpbiIsImN1c3RvbVN0eWxlcyIsIndpZHRoIiwiY2FsY3VsYXRlV2lkdGgiLCJwaWNrZXJTdHlsZXMiLCJlbW9qaVByb3BzIiwiZW1vamlUb29sdGlwIiwiZW1vamlTaXplIiwic2VsZWN0ZWRFbW9qaSIsInByZXZpZXdFbW9qaSIsInNlbGVjdGVkRW1vamlDYXRlZ29yeSIsInByZXZpZXdFbW9qaUNhdGVnb3J5Iiwib25FbnRlciIsIm9uRW1vamlFbnRlciIsImJpbmQiLCJvbkxlYXZlIiwib25FbW9qaUxlYXZlIiwib25FbW9qaUNsaWNrIiwic2tpblByb3BzIiwicGVyTGluZSIsImZpbHRlcmVkQ2F0ZWdvcmllcyIsIm1lcmdlZEkxOG4iLCJmcmVlemUiLCJpMThuIiwiaWRsZUVtb2ppIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImZpcnN0RW1vamkiLCJpc1NlYXJjaGluZyIsInNlYXJjaEVtb2ppcyIsIndhdGNoIiwib25Ta2luQ2hhbmdlIiwib25TY3JvbGwiLCJpbmZpbml0ZVNjcm9sbCIsIndhaXRpbmdGb3JQYWludCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9uU2Nyb2xsUGFpbnQiLCJvbkFuY2hvckNsaWNrIiwiY2F0ZWdvcnkiLCJvblNlYXJjaCIsInZhbHVlIiwib25BcnJvd0xlZnQiLCIkZXZlbnQiLCJvbGRJZHgiLCJwcmV2aWV3RW1vamlJZHgiLCJwcmV2ZW50RGVmYXVsdCIsIm9uQXJyb3dSaWdodCIsIm9uQXJyb3dEb3duIiwib25BcnJvd1VwIiwiYWRkIiwib25UZXh0U2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwidXBkYXRlIiwiZ2V0Q2F0ZWdvcnlDb21wb25lbnQiLCJpbmRleCIsImNvbXBvbmVudCIsIiRyZWZzIiwiY29tcG9uZW50cyIsInN2Z3MiLCJjb2xvciIsIlN0cmluZyIsIkFycmF5IiwiYWN0aXZlQ2F0ZWdvcnkiLCJkZWZhdWx0IiwiRW1vamkiLCJpZCIsIm5hbWUiLCJlbW9qaXMiLCJhY3RpdmVDbGFzcyIsImlzVmlzaWJsZSIsImlzU2VhcmNoIiwiaGFzUmVzdWx0cyIsImxlbmd0aCIsImVtb2ppT2JqZWN0cyIsIl90aGlzIiwibWFwIiwiZW1vamlWaWV3IiwiU2tpbnMiLCJzaG93U2tpblRvbmVzIiwiQm9vbGVhbiIsIkZ1bmN0aW9uIiwiZW1vamlEYXRhIiwiZW1vamlTaG9ydE5hbWVzIiwic2hvcnRfbmFtZXMiLCJlbW9qaUVtb3RpY29ucyIsImVtb3RpY29ucyIsImF1dG9Gb2N1cyIsImVtb2ppSW5kZXgiLCJjbGVhciIsIm1vdW50ZWQiLCIkaW5wdXQiLCIkZWwiLCJxdWVyeVNlbGVjdG9yIiwiZm9jdXMiLCJOdW1iZXIiLCJvcGVuZWQiLCJza2luVG9uZSIsInJlbmRlciIsIl92bSIsIl9jIiwiX3NlbGYiLCJjYW5SZW5kZXIiLCJ0YWciLCJzdGF0aWNDbGFzcyIsImF0dHJzIiwiYXJpYUxhYmVsIiwib24iLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsImNsaWNrIiwiY2xhc3MiLCJjc3NDbGFzcyIsInN0eWxlIiwiY3NzU3R5bGUiLCJfdiIsIl9zIiwiY29udGVudCIsIl9lIiwic3RhdGljUmVuZGVyRm5zIiwiX3dpdGhTdHJpcHBlZCIsInNob3dDYXRlZ29yaWVzIiwiYWxsQ2F0ZWdvcmllcyIsIl90Iiwic2hvd1NlYXJjaCIsInJlZiIsImFycm93TGVmdCIsImFycm93UmlnaHQiLCJhcnJvd0Rvd24iLCJhcnJvd1VwIiwiZW50ZXIiLCJzZWxlY3QiLCJyb2xlIiwic2Nyb2xsIiwiX2wiLCJpZHgiLCJkaXJlY3RpdmVzIiwicmF3TmFtZSIsImV4cHJlc3Npb24iLCJrZXkiLCJyZWZJbkZvciIsInNob3dQcmV2aWV3IiwiZG9tUHJvcHMiLCJpbm5lckhUTUwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJfcmVmIiwiZ2V0RW1vamkiLCJzaG9ydE5hbWUiLCJlbW90aWNvbiIsImNoYW5nZSIsInBsYWNlaG9sZGVyIiwia2V5ZG93biIsImluZGV4T2YiLCJfayIsImtleUNvZGUiLCJidXR0b24iLCJhcHBseSIsImFyZ3VtZW50cyIsImlucHV0IiwidGFyZ2V0IiwiY29tcG9zaW5nIiwiUGlja2VyIiwiX1N0cmluZyIsImZyb21Db2RlUG9pbnQiLCJzdHJpbmdGcm9tQ29kZVBvaW50IiwiTUFYX1NJWkUiLCJjb2RlVW5pdHMiLCJoaWdoU3Vycm9nYXRlIiwibG93U3Vycm9nYXRlIiwicmVzdWx0IiwiY29kZVBvaW50IiwiaXNGaW5pdGUiLCJNYXRoIiwiZmxvb3IiLCJSYW5nZUVycm9yIiwicHVzaCIsImZyb21DaGFyQ29kZSIsIlNWR3MiLCJtYXBwaW5nIiwidW5pZmllZCIsIm5vbl9xdWFsaWZpZWQiLCJoYXNfaW1nX2FwcGxlIiwiaGFzX2ltZ19nb29nbGUiLCJoYXNfaW1nX3R3aXR0ZXIiLCJoYXNfaW1nX2ZhY2Vib29rIiwia2V5d29yZHMiLCJzaGVldCIsInRleHQiLCJhZGRlZF9pbiIsImJ1aWxkU2VhcmNoIiwiYWRkVG9TZWFyY2giLCJzdHJpbmdzIiwic3BsaXQiLCJpc0FycmF5IiwiZm9yRWFjaCIsInN0cmluZyIsInMiLCJ0b0xvd2VyQ2FzZSIsImpvaW4iLCJkZWVwRnJlZXplIiwib2JqZWN0IiwicHJvcE5hbWVzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJuIiwiZG9uZSIsIl90eXBlb2YiLCJlcnIiLCJmIiwidW5jb21wcmVzcyIsImNvbXByZXNzZWQiLCJ1bnNoaWZ0Iiwic2hlZXRfeCIsInNoZWV0X3kiLCJ0b0ZpeGVkIiwiaW50ZXJzZWN0IiwidW5pZmllZFRvTmF0aXZlIiwiU0hFRVRfQ09MVU1OUyIsIkNPTE9OU19SRUdFWCIsIlNLSU5TIiwibWVyZ2VBbGlhc2VzIiwiYmFzZUFsaWFzZXMiLCJsb2NhbGl6ZWRBbGlhc2VzIiwiYXNzaWduIiwiYnVpbGRBbGlhc2VzQnlJZCIsImFsaWFzZXMiLCJhbGlhcyIsImhhc093blByb3BlcnR5IiwibWVyZ2VLZXl3b3JkcyIsInNlZW4iLCJTZXQiLCJsaXN0IiwiaGFzIiwiRW1vamlJbmRleCIsInVuZGVmaW5lZCIsImVtb2ppc1RvU2hvd0ZpbHRlciIsImluY2x1ZGUiLCJleGNsdWRlIiwiZW1vamlJMThuIiwiX3JlZiRyZWNlbnRMZW5ndGgiLCJyZWNlbnRMZW5ndGgiLCJfY2xhc3NDYWxsQ2hlY2siLCJfZGF0YSIsIl9lbW9qaXNGaWx0ZXIiLCJfaW5jbHVkZSIsIl9leGNsdWRlIiwiX2N1c3RvbSIsIl9lbW9qaUkxOG4iLCJfYWxpYXNlcyIsIl9hbGlhc2VzQnlJZCIsIl9yZWNlbnQiLCJfZW1vamlzIiwiX25hdGl2ZUVtb2ppcyIsIl9lbW90aWNvbnMiLCJfY2F0ZWdvcmllcyIsIl9yZWNlbnRDYXRlZ29yeSIsIl9jdXN0b21DYXRlZ29yeSIsIl9zZWFyY2hJbmRleCIsImJ1aWxkSW5kZXgiLCJfY3JlYXRlQ2xhc3MiLCJmaWx0ZXIiLCJpdGVtIiwiaW5jbHVkZXMiLCJzb3J0IiwiYSIsImIiLCJpbmRleEEiLCJpbmRleEIiLCJjYXRlZ29yeURhdGEiLCJpc0NhdGVnb3J5TmVlZGVkIiwiZW1vamlJZCIsImFkZEVtb2ppIiwiY3VzdG9tRW1vamkiLCJhZGRDdXN0b21FbW9qaSIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJoYXNFbW9qaSIsIm1hdGNoZXMiLCJtYXRjaCIsInBhcnNlSW50IiwiZ2V0U2tpbiIsIkVycm9yIiwia2V5cyIsIm5hdGl2ZUVtb2ppIiwidW5pY29kZUVtb2ppIiwibWF4UmVzdWx0cyIsIl90aGlzMiIsInZhbHVlcyIsImFsbFJlc3VsdHMiLCJjdXJyZW50SW5kZXgiLCJfbG9vcCIsImNoYXIiLCJjaGFySW5kZXgiLCJyZXN1bHRzIiwic2NvcmVzIiwic3ViIiwic3Vic3RyIiwic3ViSW5kZXgiLCJzY29yZSIsImFTY29yZSIsImJTY29yZSIsInNsaWNlIiwiRW1vamlEYXRhIiwiX3RoaXMzIiwiX3RoaXMkX2FsaWFzZXNCeUlkIiwiaTE4bkVtb2ppIiwiYmFzZUtleXdvcmRzIiwibG9jYWxpemVkS2V5d29yZHMiLCJhbGlhc0tleXdvcmRzIiwibWVyZ2VkS2V5d29yZHMiLCJpMThuTmFtZSIsImlzRW1vamlOZWVkZWQiLCJfc2tpbnMiLCJjYXRlZ29yeV9pZCIsImlzSW5jbHVkZWQiLCJpc0V4Y2x1ZGVkIiwic2tpbl92YXJpYXRpb25zIiwic2tpbklkeCIsInNraW5LZXkiLCJ2YXJpYXRpb25EYXRhIiwic2tpbkRhdGEiLCJrIiwic2FuaXRpemUiLCJnZXRQb3NpdGlvbiIsImFkanVzdGVkQ29sdW1ucyIsIngiLCJ5IiwiY29uY2F0IiwicGFydHMiLCJfZW1vamkiLCJfbmF0aXZlIiwiX3NraW4iLCJfc2V0IiwiX2ZhbGxiYWNrIiwiX2NhblJlbmRlciIsIl9jc3NDbGFzcyIsIl9jc3NTdHlsZSIsIl9jb250ZW50IiwiX2lzQ3VzdG9tIiwiX2lzTmF0aXZlIiwiX2hhc0Vtb2ppIiwiX2Vtb2ppVHlwZSIsImJhY2tncm91bmRJbWFnZSIsImltYWdlVXJsIiwiYmFja2dyb3VuZFNpemUiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJmb250U2l6ZSIsInJvdW5kIiwiaGFzSW1hZ2UiLCJza2luX3RvbmUiLCJjb2xvbnMiLCJERUZBVUxUUyIsImluaXRpYWxpemVkIiwiZGVmYXVsdHMiLCJpbml0IiwibWF4TnVtYmVyIiwiZGVmYXVsdExlbmd0aCIsIm1pbiIsImkiLCJxdWFudGl0eSIsImZyZXF1ZW50bHlLZXlzIiwic29ydGVkIiwicmV2ZXJzZSIsInNsaWNlZCIsImxhc3QiLCJwb3AiLCJ1bmljb2RlcyIsImNvZGVQb2ludHMiLCJ1IiwidW5pcSIsImFyciIsInJlZHVjZSIsImFjYyIsInVuaXFBIiwidW5pcUIiLCJvIiwib3JpZ2luYWxWYWx1ZSIsInByb3RvdHlwZSIsImNhbGwiLCJkb2N1bWVudCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwidG9wIiwiYm9keSIsImFwcGVuZENoaWxkIiwic2Nyb2xsYmFyV2lkdGgiLCJvZmZzZXRXaWR0aCIsImNsaWVudFdpZHRoIiwicmVtb3ZlQ2hpbGQiLCJwaWNrZXJDb21wb25lbnQiLCJfdGhpcyRfY2F0ZWdvcmllcyIsIl9wZXJMaW5lIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiZmlyc3QiLCJwcmV2aWV3RW1vamlDYXRlZ29yeUlkeCIsInNjcm9sbEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJsIiwib2Zmc2V0VG9wIiwiaGFzRW1vamlzIiwic2Nyb2xsVG9Db21wb25lbnQiLCJtYXhTZWFyY2hSZXN1bHRzIiwidXBkYXRlUHJldmlld0Vtb2ppIiwiZW1vamlzTGVuZ3RoIiwiY2F0ZWdvcnlMZW5ndGgiLCJkaWZmIiwicHJldkNhdGVnb3J5TGFzdFJvd0xlbmd0aCIsIiRuZXh0VGljayIsInNjcm9sbEVsIiwiZW1vamlFbCIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImNhdGVnb3J5SWR4IiwiTkFNRVNQQUNFIiwiX0pTT04iLCJKU09OIiwiaXNMb2NhbFN0b3JhZ2VTdXBwb3J0ZWQiLCJnZXR0ZXIiLCJzZXR0ZXIiLCJzZXRIYW5kbGVycyIsImhhbmRsZXJzIiwic2V0TmFtZXNwYWNlIiwibmFtZXNwYWNlIiwic3RhdGUiLCJsb2NhbFN0b3JhZ2UiLCJzdHJpbmdpZnkiLCJwYXJzZSIsImlzV2luZG93QXZhaWxhYmxlIiwibGFzdFRpbWUiLCJ2ZW5kb3JzIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsImVsZW1lbnQiLCJjdXJyVGltZSIsIkRhdGUiLCJnZXRUaW1lIiwidGltZVRvQ2FsbCIsIm1heCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==