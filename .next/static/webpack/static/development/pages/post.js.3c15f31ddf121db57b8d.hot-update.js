webpackHotUpdate("static\\development\\pages\\post.js",{

/***/ "./pages/post.tsx":
/*!************************!*\
  !*** ./pages/post.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Posts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Card */ "./components/Card/index.ts");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.ts");
var _jsxFileName = "F:\\TestTasks\\next-js\\pages\\post.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Posts() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    title: router.query.title.toString(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, router.query.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "This is the blog post content.")));
}

/***/ })

})
//# sourceMappingURL=post.js.3c15f31ddf121db57b8d.hot-update.js.map