webpackHotUpdate("static\\development\\pages\\new.js",{

/***/ "./components/Modal/Modal.tsx":
/*!************************************!*\
  !*** ./components/Modal/Modal.tsx ***!
  \************************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ModalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModalStyles */ "./components/Modal/ModalStyles.ts");
var _this = undefined,
    _jsxFileName = "F:\\TestTasks\\next-js\\components\\Modal\\Modal.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Modal = function Modal() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx(_ModalStyles__WEBPACK_IMPORTED_MODULE_3__["s"].Nav, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_ModalStyles__WEBPACK_IMPORTED_MODULE_3__["s"].NavList, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(_ModalStyles__WEBPACK_IMPORTED_MODULE_3__["s"].NavItem, {
    className: router.pathname === "/" ? "active" : "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, __jsx(_ModalStyles__WEBPACK_IMPORTED_MODULE_3__["s"].NavLink, {
    title: "Last Post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, "Last Post"))), __jsx(_ModalStyles__WEBPACK_IMPORTED_MODULE_3__["s"].NavItem, {
    className: router.pathname === "/posts" ? "active" : "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/posts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx(_ModalStyles__WEBPACK_IMPORTED_MODULE_3__["s"].NavLink, {
    title: "List of posts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, "List of posts"))), __jsx(_ModalStyles__WEBPACK_IMPORTED_MODULE_3__["s"].NavItem, {
    className: router.pathname === "/new" ? "active" : "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/new",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx(_ModalStyles__WEBPACK_IMPORTED_MODULE_3__["s"].NavLink, {
    title: "New post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, "New post")))));
};

/***/ }),

/***/ "./components/Modal/ModalStyles.ts":
/*!*****************************************!*\
  !*** ./components/Modal/ModalStyles.ts ***!
  \*****************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return s; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        display: block;\n        padding: 0.5rem 1rem;\n        color: #fff;\n        text-decoration: none;\n        background-color: transparent;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        transition: background-color 0.3s ease-in-out;\n        margin: 0 12px;\n        \n        &:hover {\n            background: rgba(255,255,255,0.3);\n        }\n        \n        &.active {\n            background: #fff;\n            & a {\n                color:  #f3969a;\n            }\n        }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        display: flex;\n        justify-content: center;\n        padding-left: 0;\n        margin: 15px 0;\n        list-style: none;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        margin: 0;\n        font-size: 1rem;\n        font-weight: 400;\n        line-height: 1.5;\n        color: #888;\n        text-align: left;\n        background-color: #f3969a;\n        position: sticky;\n        top: 0;\n        left: 0;\n        right: 0;\n        z-index: 2;\n        width: 100%;\n        margin-bottom: 40px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var s = {
  Nav: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav(_templateObject()),
  NavList: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul(_templateObject2()),
  NavItem: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].li(_templateObject3()),
  NavLink: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a(_templateObject4())
};

/***/ }),

/***/ "./components/Modal/index.ts":
/*!***********************************!*\
  !*** ./components/Modal/index.ts ***!
  \***********************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./components/Modal/Modal.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _Modal__WEBPACK_IMPORTED_MODULE_0__["Modal"]; });



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
/* harmony import */ var _styles_PostStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/PostStyles */ "./pages/styles/PostStyles.ts");


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
            setPost({
              id: 0,
              title: '',
              body: ''
            });

          case 7:
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

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_7__["card"].Title, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 12
    }
  }, "Create new post now!"), __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_7__["card"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_7__["card"].ItemWrapper, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("form", {
    action: "#",
    onSubmit: handleSubmitCreate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, error && __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_7__["errorMess"].TitleError, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 35
    }
  }, error), __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_7__["newPost"].Label, {
    htmlFor: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }, "Post`s title"), __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_7__["newPost"].Input, {
    placeholder: "Input Title of Post",
    id: "title",
    type: "text",
    value: post.title,
    onChange: handleTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  })), __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_7__["newPost"].Label, {
    htmlFor: "body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }, "Post`s text"), __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_7__["newPost"].Textarea, {
    placeholder: "Input Body of Post",
    id: "body",
    value: post.body,
    onChange: handleBody,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 29
    }
  })), __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_7__["newPost"].Button, {
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, "Create post")))), isModalOpen && __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }));
}

/***/ })

})
//# sourceMappingURL=new.js.01087b07a33b735a3cba.hot-update.js.map