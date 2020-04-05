webpackHotUpdate("static\\development\\pages\\new.js",{

/***/ "./components/Header/Header.tsx":
/*!**************************************!*\
  !*** ./components/Modal/Modal.tsx ***!
  \**************************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HeaderStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderStyles */ "./components/Header/HeaderStyles.ts");
var _this = undefined,
    _jsxFileName = "F:\\TestTasks\\next-js\\components\\Modal\\Modal.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Header = function Header() {
  return __jsx(_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__["s"].Nav, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__["s"].NavList, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx(_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__["s"].NavItem, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }
  }, __jsx(_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__["s"].NavLink, {
    title: "Last Post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 25
    }
  }, "Last Post"))), __jsx(_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__["s"].NavItem, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/posts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx(_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__["s"].NavLink, {
    title: "List of posts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, "List of posts"))), __jsx(_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__["s"].NavItem, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/new",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx(_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__["s"].NavLink, {
    title: "New post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  }, "New post")))));
};

/***/ }),

/***/ "./components/Header/HeaderStyles.ts":
/*!*******************************************!*\
  !*** ./components/Modal/Modal.ts ***!
  \*******************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return s; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        display: block;\n        padding: 0.5rem 1rem;\n        color: #fff;\n        text-decoration: none;\n        background-color: transparent;\n        transition: color 0.3s ease-in-out;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    transition: background-color 0.3s ease-in-out;\n   \n        &:hover {\n             background: #fff;\n             & a {\n              color:  #f3969a;\n             }\n        }\n    "]);

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

/***/ })

})
//# sourceMappingURL=new.js.adf9b7613c29435f0051.hot-update.js.map