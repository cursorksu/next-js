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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "F:\\TestTasks\\next-js\\pages\\post.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var BASE_URL = 'https://simple-blog-api.crew.red/posts';
function Posts() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      currentPost = _useState[0],
      setCurrentPost = _useState[1];

  var getPost = function getPost() {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(BASE_URL, {
      params: {
        title: router.query.title
      }
    }).then(function (response) {
      console.log(response.data);
      var post = {
        id: response.data[0].id,
        title: response.data[0].title,
        body: response.data[0].body
      };
      setCurrentPost(post);
    });
  };

  var getLatestPost = function getLatestPost() {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(BASE_URL, {
      params: {
        title: router.query.title
      }
    }).then(function (response) {
      console.log(response.data);
      var post = {
        id: response.data[0].id,
        title: response.data[0].title,
        body: response.data[0].body
      };
      setCurrentPost(post);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getPost();
  }, []);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    title: router.query.title.toString(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, router.query.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, currentPost.body)));
}

/***/ })

})
//# sourceMappingURL=post.js.a7d39c4f92a95f9cda90.hot-update.js.map