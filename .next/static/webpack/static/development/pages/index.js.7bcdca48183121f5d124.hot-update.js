webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/PostList/PostList.tsx":
/*!******************************************!*\
  !*** ./components/PostList/PostList.tsx ***!
  \******************************************/
/*! exports provided: PostList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostList", function() { return PostList; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PostListStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostListStyles */ "./components/PostList/PostListStyles.ts");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Card */ "./components/Card/index.ts");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Modal */ "./components/Modal/index.ts");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Form */ "./components/Form/index.ts");
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Buttons */ "./components/Buttons/index.ts");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/constants */ "./utils/constants.ts");


var _this = undefined,
    _jsxFileName = "F:\\TestTasks\\next-js\\components\\PostList\\PostList.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // @ts-ignore







var PostList = function PostList(_ref) {
  var postList = _ref.postList;
  console.log(postList);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(postList),
      posts = _useState[0],
      setPosts = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isModalOpen = _useState2[0],
      setIsModalOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      currentPost = _useState3[0],
      setCurrentPost = _useState3[1];

  var deletePost = function deletePost(id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function deletePost$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a["delete"]("https://simple-blog-api.crew.red/posts/".concat(id)));

          case 2:
            _context.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(_utils_constants__WEBPACK_IMPORTED_MODULE_8__["BASE_URL"]).then(function (_ref2) {
              var data = _ref2.data;
              setPosts(data.reverse());
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var handleClickDelete = function handleClickDelete(id) {
    deletePost(id).then(function () {
      setPosts(posts.filter(function (post) {
        return post.id !== id;
      }));
    });
  };

  var handleClickEdit = function handleClickEdit(id) {
    setIsModalOpen(true);
    setCurrentPost(postList.find(function (post) {
      return post.id === id;
    }));
  };

  var editPost = function editPost(post) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function editPost$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default()({
              method: 'PUT',
              url: "".concat(_utils_constants__WEBPACK_IMPORTED_MODULE_8__["BASE_URL"], "/").concat(currentPost.id),
              data: post
            }).then(function () {
              setIsModalOpen(false);
              setCurrentPost(null);
            }));

          case 2:
            _context2.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(_utils_constants__WEBPACK_IMPORTED_MODULE_8__["BASE_URL"]).then(function (_ref3) {
              var data = _ref3.data;
              setPosts(data.reverse());
            }));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var closeModal = function closeModal() {
    setIsModalOpen(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_PostListStyles__WEBPACK_IMPORTED_MODULE_3__["List"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, posts.map(function (_ref4) {
    var id = _ref4.id,
        title = _ref4.title,
        body = _ref4.body;
    return __jsx(_Card__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      key: id,
      title: title,
      id: id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }
    }, __jsx(_Buttons__WEBPACK_IMPORTED_MODULE_7__["Buttons"], {
      onEdit: function onEdit() {
        return handleClickEdit(id);
      },
      onDelete: function onDelete() {
        return handleClickDelete(id);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }), __jsx(_PostListStyles__WEBPACK_IMPORTED_MODULE_3__["PostBody"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }, body));
  })), isModalOpen && __jsx(_Modal__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    onClose: closeModal,
    title: currentPost.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx(_Form__WEBPACK_IMPORTED_MODULE_6__["Form"], {
    onSubmitForm: editPost,
    currentPost: currentPost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  })));
};

PostList.getInitialProps = function _callee() {
  var res;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(_utils_constants__WEBPACK_IMPORTED_MODULE_8__["BASE_URL"]));

        case 2:
          res = _context3.sent;
          return _context3.abrupt("return", {
            posts: res.data.reverse()
          });

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (PostList);

/***/ })

})
//# sourceMappingURL=index.js.7bcdca48183121f5d124.hot-update.js.map