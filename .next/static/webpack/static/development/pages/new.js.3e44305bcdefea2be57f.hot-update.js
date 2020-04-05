webpackHotUpdate("static\\development\\pages\\new.js",{

/***/ "./components/Card/Card.tsx":
/*!**********************************!*\
  !*** ./components/Card/Card.tsx ***!
  \**********************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_styles_PostStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/styles/PostStyles */ "./pages/styles/PostStyles.ts");
var _this = undefined,
    _jsxFileName = "F:\\TestTasks\\next-js\\components\\Card\\Card.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Card = function Card(_ref) {
  var children = _ref.children;
  return __jsx(_pages_styles_PostStyles__WEBPACK_IMPORTED_MODULE_1__["card"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_pages_styles_PostStyles__WEBPACK_IMPORTED_MODULE_1__["card"].ItemWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, children));
};

/***/ }),

/***/ "./components/Card/index.ts":
/*!**********************************!*\
  !*** ./components/Card/index.ts ***!
  \**********************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./components/Card/Card.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _Card__WEBPACK_IMPORTED_MODULE_0__["Card"]; });



/***/ }),

/***/ "./pages/new.tsx":
/*!***********************!*\
  !*** ./pages/new.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return New; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal/index.ts");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.ts");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Card */ "./components/Card/index.ts");
/* harmony import */ var _styles_PostStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/PostStyles */ "./pages/styles/PostStyles.ts");


var _jsxFileName = "F:\\TestTasks\\next-js\\pages\\new.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var BASE_URL = 'https://simple-blog-api.crew.red/posts';
function New() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    id: 0,
    title: '',
    body: ''
  }),
      post = _useState[0],
      setPost = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isModalOpen = _useState3[0],
      setIsModalOpen = _useState3[1];

  var handleSubmitCreate = function handleSubmitCreate(e) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function handleSubmitCreate$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();

            if (!(!post.title || !post.body)) {
              _context.next = 4;
              break;
            }

            setError('Why do you want to send an empty post? Write something!');
            return _context.abrupt("return");

          case 4:
            _context.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_4___default()({
              method: 'post',
              url: "".concat(BASE_URL),
              data: post
            }));

          case 6:
            setIsModalOpen(true);
            setPost({
              id: 0,
              title: '',
              body: ''
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var handleTitle = function handleTitle(event) {
    var id = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])().substring(0, 6);
    setError('');
    setPost(_objectSpread({}, post, {
      id: id,
      title: event.target.value
    }));
  };

  var handleBody = function handleBody(event) {
    setError('');
    setPost(_objectSpread({}, post, {
      body: event.target.value
    }));
  };

  var closeModal = function closeModal() {
    setIsModalOpen(false);
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_8__["card"].Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 12
    }
  }, "Create new post now!"), __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_7__["Card"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("form", {
    action: "#",
    onSubmit: handleSubmitCreate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, error && __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_8__["errorMess"].TitleError, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 29
    }
  }, error), __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_8__["newPost"].Label, {
    htmlFor: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }, "Post`s title"), __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_8__["newPost"].Input, {
    placeholder: "Input Title of Post",
    id: "title",
    type: "text",
    value: post.title,
    onChange: handleTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 19
    }
  })), __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_8__["newPost"].Label, {
    htmlFor: "body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 19
    }
  }, "Post`s text"), __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_8__["newPost"].Textarea, {
    placeholder: "Input Body of Post",
    id: "body",
    value: post.body,
    onChange: handleBody,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 19
    }
  })), __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_8__["newPost"].Button, {
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, "Create post"))), isModalOpen && __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    onClose: closeModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }));
}

/***/ })

})
//# sourceMappingURL=new.js.3e44305bcdefea2be57f.hot-update.js.map