webpackHotUpdate("static\\development\\pages\\posts.js",{

/***/ "./pages/posts.tsx":
/*!*************************!*\
  !*** ./pages/posts.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Posts; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.ts");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Card */ "./components/Card/index.ts");
/* harmony import */ var _styles_PostStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/PostStyles */ "./pages/styles/PostStyles.ts");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal/index.ts");
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Form */ "./components/Form/index.ts");

var _jsxFileName = "F:\\TestTasks\\next-js\\pages\\posts.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var BASE_URL = 'https://simple-blog-api.crew.red/posts';
function Posts() {
  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      posts = _useState[0],
      setPosts = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isModalOpen = _useState2[0],
      setIsModalOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      currentPost = _useState3[0],
      setCurrentPost = _useState3[1];

  var getPosts = function getPosts() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getPosts$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(BASE_URL).then(function (response) {
              var postList = response.data.reverse();
              setPosts(postList);
            })["catch"](function (error) {
              console.log(error);
            })["finally"](function () {}));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getPosts();
  }, [posts]);

  var handleClickEdit = function handleClickEdit(id) {
    setIsModalOpen(true);
    setCurrentPost(posts.find(function (post) {
      return post.id === id;
    }));
  };

  var editPost = function editPost(post) {
    axios__WEBPACK_IMPORTED_MODULE_2___default()({
      method: 'patch',
      url: "".concat(BASE_URL, "/").concat(currentPost.id),
      data: post
    });
    setIsModalOpen(false);
    setCurrentPost(null);
  };

  var handleClickDelete = function handleClickDelete(id) {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("".concat(BASE_URL, "/").concat(id));
    setPosts(posts.filter(function (post) {
      return post.id !== id;
    }));
  };

  var closeModal = function closeModal() {
    setIsModalOpen(false);
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_5__["list"].List, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, posts.map(function (post) {
    return __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      key: "".concat(post.id, "-").concat(post.title, " "),
      title: post.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 21
      }
    }, __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_5__["list"].BtnWrapper, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 29
      }
    }, __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_5__["list"].Button, {
      type: "button",
      onClick: function onClick() {
        return handleClickEdit(post.id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 33
      }
    }, __jsx("svg", {
      version: "1.1",
      id: "Layer_1",
      xmlns: "http://www.w3.org/2000/svg",
      x: "0px",
      y: "0px",
      viewBox: "0 0 469.336 469.336",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 37
      }
    }, __jsx("path", {
      d: "M456.836,76.168l-64-64.054c-16.125-16.139-44.177-16.17-60.365,0.031L45.763,301.682\r c-1.271,1.282-2.188,2.857-2.688,4.587L0.409,455.73c-1.063,3.722-0.021,7.736,2.719,10.478c2.031,2.033,4.75,3.128,7.542,3.128\r c0.979,0,1.969-0.136,2.927-0.407l149.333-42.703c1.729-0.5,3.302-1.418,4.583-2.69l289.323-286.983\r c8.063-8.069,12.5-18.787,12.5-30.192S464.899,84.237,456.836,76.168z M285.989,89.737l39.264,39.264L120.257,333.998\r l-14.712-29.434c-1.813-3.615-5.5-5.896-9.542-5.896H78.921L285.989,89.737z M26.201,443.137L40.095,394.5l34.742,34.742\r L26.201,443.137z M149.336,407.96l-51.035,14.579l-51.503-51.503l14.579-51.035h28.031l18.385,36.771\r c1.031,2.063,2.708,3.74,4.771,4.771l36.771,18.385V407.96z M170.67,390.417v-17.082c0-4.042-2.281-7.729-5.896-9.542\r l-29.434-14.712l204.996-204.996l39.264,39.264L170.67,390.417z M441.784,121.72l-47.033,46.613l-93.747-93.747l46.582-47.001\r c8.063-8.063,22.104-8.063,30.167,0l64,64c4.031,4.031,6.25,9.385,6.25,15.083S445.784,117.72,441.784,121.72z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 41
      }
    }))), __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_5__["list"].Button, {
      type: "button",
      onClick: function onClick() {
        return handleClickDelete(post.id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 33
      }
    }, __jsx("svg", {
      version: "1.1",
      id: "Capa_1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 37
      }
    }, __jsx("path", {
      d: "M472,83H351V60c0-33.084-26.916-60-60-60h-70c-33.084,0-60,26.916-60,60v23H40c-11.046,0-20,8.954-20,20s8.954,20,20,20\r h20.712l24.374,315.987c0.007,0.092,0.015,0.185,0.023,0.278c1.816,19.924,10.954,38.326,25.73,51.816\r C125.615,504.571,144.771,512,164.778,512h182.444c41.667,0,75.917-31.032,79.669-72.183\r c1.003-11.001-7.101-20.731-18.101-21.734c-11.011-1.003-20.731,7.101-21.734,18.101C385.195,456.603,368.07,472,347.222,472\r H164.778c-20.777,0-37.875-15.571-39.823-36.242L100.831,123h310.338l-17.082,221.462c-0.849,11.013,7.39,20.629,18.403,21.479\r c0.524,0.04,1.043,0.06,1.56,0.06c10.347,0,19.11-7.974,19.919-18.463L451.288,123H472c11.046,0,20-8.954,20-20\r S483.046,83,472,83z M311,83H201V60c0-11.028,8.972-20,20-20h70c11.028,0,20,8.972,20,20V83z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 41
      }
    }), __jsx("path", {
      d: "M165.127,163.019c-11.035,0.482-19.59,9.818-19.108,20.854l10,228.933c0.469,10.738,9.322,19.128,19.966,19.128\r c0.294,0,0.591-0.006,0.888-0.02c11.035-0.482,19.59-9.818,19.108-20.854l-10-228.934\r C185.499,171.092,176.145,162.523,165.127,163.019z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 41
      }
    }), __jsx("path", {
      d: "M326.019,182.127l-10,228.934c-0.482,11.035,8.073,20.372,19.108,20.854c0.297,0.013,0.593,0.02,0.888,0.02\r c10.643,0,19.497-8.39,19.966-19.128l10-228.933c0.482-11.035-8.073-20.372-19.108-20.854\r C335.856,162.527,326.501,171.092,326.019,182.127z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 41
      }
    }), __jsx("path", {
      d: "M236,183v228.933c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V183c0-11.046-8.954-20-20-20S236,171.954,236,183z",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 41
      }
    })))), __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_5__["list"].PostBody, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 29
      }
    }, post.body));
  })), isModalOpen && __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    onClose: closeModal,
    title: currentPost.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, __jsx(_components_Form__WEBPACK_IMPORTED_MODULE_7__["Form"], {
    onSubmitForm: editPost,
    currentPost: currentPost,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 19
    }
  })));
}

/***/ })

})
//# sourceMappingURL=posts.js.d7b364fd364222bc22ad.hot-update.js.map