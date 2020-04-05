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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card */ "./components/Card/index.ts");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "F:\\TestTasks\\next-js\\pages\\post.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var BASE_URL = 'https://simple-blog-api.crew.red/posts';
function Posts() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  console.log(router.pathname);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      currentPost = _useState[0],
      setCurrentPost = _useState[1];

  var getPost = function getPost() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getPost$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(BASE_URL, {
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
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var getLatestPost = function getLatestPost() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getLatestPost$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_5___default.a.get(BASE_URL).then(function (response) {
              var post = {
                id: response.data[response.data.length - 1].id,
                title: response.data[response.data.length - 1].title,
                body: response.data[response.data.length - 1].body
              };
              setCurrentPost(post);
            }));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  }; // useEffect(() => {
  //     switch () {
  //         case :
  //             getLatestPost();
  //             break
  //         default:
  //             getPost();
  //     }
  // }, []);


  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    title: router.query.title.toString(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, router.query.title), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, currentPost.body)));
}

/***/ })

})
//# sourceMappingURL=post.js.30e3d0dd74d7d3c6e868.hot-update.js.map