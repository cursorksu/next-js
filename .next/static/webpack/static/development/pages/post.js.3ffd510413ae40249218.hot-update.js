webpackHotUpdate("static\\development\\pages\\post.js",{

/***/ "./components/Header/Header.tsx":
/*!**************************************!*\
  !*** ./components/Header/Header.tsx ***!
  \**************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HeaderStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderStyles */ "./components/Header/HeaderStyles.ts");
var _this = undefined,
    _jsxFileName = "F:\\TestTasks\\next-js\\components\\Header\\Header.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Header = function Header() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__["s"].Nav, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__["s"].NavList, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__["s"].NavItem, {
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
  }, __jsx(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__["s"].NavLink, {
    title: "Home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, "Home"))), __jsx(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__["s"].NavItem, {
    className: router.pathname.includes('/posts') ? "active" : "",
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
  }, __jsx(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__["s"].NavLink, {
    title: "List of posts",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, "List of posts"))), __jsx(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__["s"].NavItem, {
    className: router.pathname.includes('/post') ? "active" : "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__["s"].NavLink, {
    title: "Last Post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, "Last Post"))), __jsx(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__["s"].NavItem, {
    className: router.pathname === "/new" ? "active" : "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/new",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__["s"].NavLink, {
    title: "New post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, "New post")))));
};

/***/ })

})
//# sourceMappingURL=post.js.3ffd510413ae40249218.hot-update.js.map