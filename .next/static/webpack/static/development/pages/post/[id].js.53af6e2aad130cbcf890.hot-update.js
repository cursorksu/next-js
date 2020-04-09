webpackHotUpdate("static\\development\\pages\\posts\\[id].js",{

/***/ "./pages/post/[id].tsx":
/*!*****************************!*\
  !*** ./pages/posts/[id].tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout/index.ts");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Card */ "./components/Card/index.ts");
/* harmony import */ var _components_Card_CardStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Card/CardStyles */ "./components/Card/CardStyles.ts");


var _this = undefined,
    _jsxFileName = "F:\\TestTasks\\next-js\\pages\\posts\\[id].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Post = function Post(_ref) {
  var post = _ref.post;
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    heading: post.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, post.body), post.comments.length > 0 && __jsx(_components_Card_CardStyles__WEBPACK_IMPORTED_MODULE_5__["Title"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 38
    }
  }, "Comments"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, post.comments.map(function (item) {
    return __jsx("li", {
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, item.body);
  }))));
};

Post.getInitialProps = function _callee(context) {
  var id, postWithComments, post;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = context.query.id;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://simple-blog-api.crew.red/posts/".concat(id, "?_embed=comments")));

        case 3:
          postWithComments = _context.sent;
          post = postWithComments.data;
          return _context.abrupt("return", {
            post: post
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[id].js.53af6e2aad130cbcf890.hot-update.js.map