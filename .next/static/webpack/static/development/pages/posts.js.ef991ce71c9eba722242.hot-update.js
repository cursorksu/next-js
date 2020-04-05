webpackHotUpdate("static\\development\\pages\\posts.js",{

/***/ "./components/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./components/Layout/Layout.tsx ***!
  \**************************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modal */ "./components/Header/index.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


var _this = undefined,
    _jsxFileName = "F:\\TestTasks\\next-js\\components\\Layout\\Layout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    max-width: 1200px;\n    padding: 40px 20px;\n    margin: 0 auto;\n    display: flex;\n    justify-content:center;\n    align-items: center;\n    flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var Layout = function Layout(_ref) {
  var children = _ref.children;
  return __jsx(Wrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), children);
};

/***/ }),

/***/ "./pages/PostStyles.ts":
/*!*****************************!*\
  !*** ./pages/PostStyles.ts ***!
  \*****************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return s; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        display: flex;\n        justify-content:center;\n        align-items: center;\n        flex-direction: column;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        display: grid;\n        grid-template-columns: repeat(2, 46%);\n        grid-gap: 20px;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        box-sizing: border-box;\n        width: 100%;\n        height: 100%;\n        background: white;\n        padding: 20px;\n        box-shadow: 0 0 70px rgba(0, 0, 0, 0.1) inset;\n        position: relative;\n        z-index: 1;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        max-width: 100%;\n        position: relative;\n        box-sizing: border-box;\n        margin: 0;\n    \n    &:after,\n    &:before {\n        content: \"\";\n        position: absolute;\n        bottom: 18px;\n        left: 5px;\n        width: 50%;\n        height: 30px;\n        z-index: 0;\n        max-width: 300px;\n        box-shadow: 0 20px 5px rgba(0, 0, 0, 0.3);\n        transform: rotate(-3deg);\n        }\n        \n    &:after {\n        right: 5px;\n        left: auto;\n        transform: rotate(3deg);\n        }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var s = {
  Item: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject()),
  ItemWrapper: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2()),
  List: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3()),
  ListWrapper: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4())
};

/***/ }),

/***/ "./pages/posts.tsx":
/*!*************************!*\
  !*** ./pages/posts.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Posts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.ts");
/* harmony import */ var _PostStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostStyles */ "./pages/PostStyles.ts");
var _jsxFileName = "F:\\TestTasks\\next-js\\pages\\posts.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var BASE_URL = 'https://simple-blog-api.crew.red/posts';
function Posts() {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      posts = _useState[0],
      setPosts = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(BASE_URL).then(function (response) {
      var postList = response.data.reverse();
      setPosts(postList);
    })["catch"](function (error) {
      console.log(error);
    })["finally"](function () {});
  }, []);

  var handleClickEdit = function handleClickEdit(id) {
    console.log(id);
  };

  var handleClickDelete = function handleClickDelete(id) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("".concat(BASE_URL, "/").concat(id));
    setPosts(posts.filter(function (post) {
      return post.id !== id;
    }));
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_PostStyles__WEBPACK_IMPORTED_MODULE_3__["s"].List, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, posts.map(function (post) {
    return __jsx(_PostStyles__WEBPACK_IMPORTED_MODULE_3__["s"].Item, {
      key: "".concat(post.id, "-").concat(post.title, " "),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }
    }, __jsx(_PostStyles__WEBPACK_IMPORTED_MODULE_3__["s"].ItemWrapper, {
      className: "card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "card-header",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 29
      }
    }, __jsx("a", {
      title: post.title,
      className: "card-title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 33
      }
    }, "#".concat(post.id, " ").concat(post.title)), __jsx("button", {
      type: "button",
      onClick: handleClickEdit,
      className: "btn-edit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 33
      }
    }, "Edit"), __jsx("button", {
      type: "button",
      onClick: function onClick() {
        return handleClickDelete(post.id);
      },
      className: "btn-delete",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 33
      }
    }, "Delete")), __jsx("div", {
      className: "card-body",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 29
      }
    }, post.body)));
  })));
}

/***/ })

})
//# sourceMappingURL=posts.js.ef991ce71c9eba722242.hot-update.js.map