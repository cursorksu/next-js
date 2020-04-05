webpackHotUpdate("static\\development\\pages\\new.js",{

/***/ "./pages/new.tsx":
/*!***********************!*\
  !*** ./pages/new.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return New; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.ts");
var _jsxFileName = "F:\\TestTasks\\next-js\\pages\\new.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var BASE_URL = 'https://simple-blog-api.crew.red/posts';

var handleClickCreate = function handleClickCreate() {
  var id = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])().substr(0, 4);
  axios__WEBPACK_IMPORTED_MODULE_2___default()({
    method: 'post',
    url: "".concat(BASE_URL),
    data: {
      id: id,
      title: 'title',
      body: 'Flintstone'
    }
  });
};

function New() {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 12
    }
  }, "Create new post now."), __jsx("button", {
    type: "button",
    onClick: handleClickCreate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Create post"));
}

/***/ })

})
//# sourceMappingURL=new.js.3c5da01aedad9237ce17.hot-update.js.map