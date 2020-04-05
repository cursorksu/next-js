webpackHotUpdate("static\\development\\pages\\new.js",{

/***/ "./components/Form/Form.tsx":
/*!**********************************!*\
  !*** ./components/Form/Form.tsx ***!
  \**********************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_styles_PostStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/styles/PostStyles */ "./pages/styles/PostStyles.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");



var _this = undefined,
    _jsxFileName = "F:\\TestTasks\\next-js\\components\\Form\\Form.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Form = function Form(_ref) {
  var onSubmitForm = _ref.onSubmitForm;

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
            onSubmitForm(post);
            setPost({
              id: 0,
              title: '',
              body: ''
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var handleTitle = function handleTitle(event) {
    var id = Object(uuid__WEBPACK_IMPORTED_MODULE_4__["v4"])().substring(0, 6);
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

  return __jsx("form", {
    action: "#",
    onSubmit: handleSubmitCreate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, error && __jsx(_pages_styles_PostStyles__WEBPACK_IMPORTED_MODULE_3__["errorMess"].TitleError, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 23
    }
  }, error), __jsx(_pages_styles_PostStyles__WEBPACK_IMPORTED_MODULE_3__["newPost"].Label, {
    htmlFor: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "Post`s title"), __jsx(_pages_styles_PostStyles__WEBPACK_IMPORTED_MODULE_3__["newPost"].Input, {
    placeholder: "Input Title of Post",
    id: "title",
    type: "text",
    value: post.title,
    onChange: handleTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  })), __jsx(_pages_styles_PostStyles__WEBPACK_IMPORTED_MODULE_3__["newPost"].Label, {
    htmlFor: "body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, "Post`s text"), __jsx(_pages_styles_PostStyles__WEBPACK_IMPORTED_MODULE_3__["newPost"].Textarea, {
    placeholder: "Input Body of Post",
    id: "body",
    value: post.body,
    onChange: handleBody,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  })), __jsx(_pages_styles_PostStyles__WEBPACK_IMPORTED_MODULE_3__["newPost"].Button, {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, "Create post"));
};

/***/ }),

/***/ "./components/Form/index.ts":
/*!**********************************!*\
  !*** ./components/Form/index.ts ***!
  \**********************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "./components/Form/Form.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_0__["Form"]; });



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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal/index.ts");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.ts");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Form */ "./components/Form/index.ts");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Card */ "./components/Card/index.ts");

var _jsxFileName = "F:\\TestTasks\\next-js\\pages\\new.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var BASE_URL = 'https://simple-blog-api.crew.red/posts';
function New() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isModalOpen = _useState[0],
      setIsModalOpen = _useState[1];

  var setNewPost = function setNewPost(post) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function setNewPost$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default()({
              method: 'post',
              url: "".concat(BASE_URL),
              data: post
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var closeModal = function closeModal() {
    setIsModalOpen(false);
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_6__["Card"], {
    title: "Create new post now!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_5__["Form"], {
    onSubmitForm: setNewPost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  })), isModalOpen && __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    onClose: closeModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  }));
}

/***/ })

})
//# sourceMappingURL=new.js.a06827a0e3ceb13a6c08.hot-update.js.map