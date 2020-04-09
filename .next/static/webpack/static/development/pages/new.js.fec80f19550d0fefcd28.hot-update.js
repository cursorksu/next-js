webpackHotUpdate("static\\development\\pages\\new.js",{

/***/ "./components/Form/Form.tsx":
/*!**********************************!*\
  !*** ./components/Form/Form.tsx ***!
  \**********************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _FormStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormStyles */ "./components/Form/FormStyles.ts");


var _this = undefined,
    _jsxFileName = "F:\\TestTasks\\next-js\\components\\Form\\Form.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Form = function Form(_ref) {
  var onSubmitForm = _ref.onSubmitForm,
      currentPost = _ref.currentPost;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(currentPost || {
    id: '',
    title: '',
    body: ''
  }),
      post = _useState[0],
      setPost = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      error = _useState2[0],
      setError = _useState2[1];

  var handleSubmitCreate = function handleSubmitCreate(e) {
    e.preventDefault();

    if (!post.title || !post.body) {
      setError('Why do you want to send an empty posts? Write something!');
      return;
    }

    var preparedPost = _objectSpread({}, post, {
      title: post.title.trim(),
      body: post.body.trim()
    });

    onSubmitForm(preparedPost);
    setPost({
      id: '',
      title: '',
      body: ''
    });
  };

  var handleTitle = function handleTitle(event) {
    var id = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])().substring(0, 6);
    setError('');
    setPost(_objectSpread({}, post, {
      id: id,
      title: event.target.value
    }));
  };

  var handleBody = function handleBody(event) {
    setError('');
    setPost(_objectSpread({}, post, {
      body: event.target.value
    }));
  };

  return __jsx("form", {
    action: "#",
    onSubmit: handleSubmitCreate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, error && __jsx(_FormStyles__WEBPACK_IMPORTED_MODULE_3__["ErrorMess"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, error), __jsx(_FormStyles__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    htmlFor: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, "Post`s title"), __jsx(_FormStyles__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    placeholder: "Input Title of Post",
    id: "title",
    type: "text",
    value: post.title,
    onChange: handleTitle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  })), __jsx(_FormStyles__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    htmlFor: "body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, "Post`s text"), __jsx(_FormStyles__WEBPACK_IMPORTED_MODULE_3__["Textarea"], {
    placeholder: "Input Body of Post",
    id: "body",
    value: post.body,
    onChange: handleBody,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  })), __jsx(_FormStyles__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, currentPost ? 'Edit posts' : 'Create posts'));
};

/***/ })

})
//# sourceMappingURL=new.js.fec80f19550d0fefcd28.hot-update.js.map