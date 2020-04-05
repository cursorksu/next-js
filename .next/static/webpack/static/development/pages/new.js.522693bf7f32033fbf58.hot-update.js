webpackHotUpdate("static\\development\\pages\\new.js",{

/***/ "./components/Card/Card.tsx":
/*!**********************************!*\
  !*** ./components/Card/Card.tsx ***!
  \**********************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardStyles */ "./components/Card/CardStyles.ts");
var _this = undefined,
    _jsxFileName = "F:\\TestTasks\\next-js\\components\\Card\\Card.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Card = function Card(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return __jsx(_CardStyles__WEBPACK_IMPORTED_MODULE_1__["card"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(_CardStyles__WEBPACK_IMPORTED_MODULE_1__["card"].ItemWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx(_CardStyles__WEBPACK_IMPORTED_MODULE_1__["card"].Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("a", {
    title: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, title)), children));
};

/***/ }),

/***/ "./components/Card/CardStyles.ts":
/*!***************************************!*\
  !*** ./components/Card/CardStyles.ts ***!
  \***************************************/
/*! exports provided: card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "card", function() { return card; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        font-family: \"Comfortaa\",sans-serif;\n        text-align: center;\n        line-height: 1.2;\n        color: #f3969a;\n        font-size: 20px;\n        font-weight: 700;\n        padding-bottom: 10px;\n        position: relative;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        \n        &:before {\n            content: '';\n            width: 100%;\n            position: absolute;\n            height: 1px;\n            background: linear-gradient(to right, rgba(255,255,255,0)\n                0%,rgba(243, 150, 154,1) \n                49%, rgba(255,255,255,0) 100%);\n            bottom: 0px;\n            left: 0;\n            right: 0;\n            z-index: 1;\n        }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        box-sizing: border-box;\n        width: 100%;\n        height: 100%;\n        background: white;\n        padding: 20px;\n        box-shadow: 0 0 70px rgba(0, 0, 0, 0.1) inset;\n        position: relative;\n        z-index: 1;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        min-width: 500px;\n        max-width: 100%;\n        position: relative;\n        box-sizing: border-box;\n        margin: 0;\n            \n        &:hover h2 + div {\n            -webkit-animation: ", " 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) forwards;\n            animation: ", " 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) forwards;\n        }\n    \n    &:after,\n    &:before {\n        content: \"\";\n        position: absolute;\n        bottom: 18px;\n        left: 5px;\n        width: 50%;\n        height: 30px;\n        z-index: 0;\n        max-width: 300px;\n        box-shadow: 0 20px 5px rgba(0, 0, 0, 0.3);\n        transform: rotate(-3deg);\n        }\n        \n        &:after {\n            right: 5px;\n            left: auto;\n            transform: rotate(3deg);\n            }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        border-radius: 50%;\n        border: none;\n        background: #f3969a;\n        width: 40px;\n        height: 40px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-right: 10px;\n        \n        & svg {\n            fill: #fff;\n            width: 22px;\n            height: 22px;\n        }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        transform: translateY(-200px);\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n     -webkit-transform: translateY(-200px);\n            transform: translateY(-200px);\n  }\n\n  to {\n      -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var SlideBottom = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var card = {
  BtnWrapper: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2()),
  Button: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3()),
  Item: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4(), SlideBottom, SlideBottom),
  ItemWrapper: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject5()),
  Title: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2(_templateObject6())
};

/***/ }),

/***/ "./pages/new.tsx":
/*!***********************!*\
  !*** ./pages/new.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return New; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal/index.ts");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.ts");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Card */ "./components/Card/index.ts");
/* harmony import */ var _styles_PostStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/PostStyles */ "./pages/styles/PostStyles.ts");


var _jsxFileName = "F:\\TestTasks\\next-js\\pages\\new.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var BASE_URL = 'https://simple-blog-api.crew.red/posts';
function New() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    id: 0,
    title: '',
    body: ''
  }),
      post = _useState[0],
      setPost = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isModalOpen = _useState3[0],
      setIsModalOpen = _useState3[1];

  var handleSubmitCreate = function handleSubmitCreate(e) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function handleSubmitCreate$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();

            if (!(!post.title || !post.body)) {
              _context.next = 4;
              break;
            }

            setError('Why do you want to send an empty post? Write something!');
            return _context.abrupt("return");

          case 4:
            _context.next = 6;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_4___default()({
              method: 'post',
              url: "".concat(BASE_URL),
              data: post
            }));

          case 6:
            setIsModalOpen(true);
            setPost({
              id: 0,
              title: '',
              body: ''
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var handleTitle = function handleTitle(event) {
    var id = Object(uuid__WEBPACK_IMPORTED_MODULE_3__["v4"])().substring(0, 6);
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

  var closeModal = function closeModal() {
    setIsModalOpen(false);
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_7__["Card"], {
    title: "Create new post now!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("form", {
    action: "#",
    onSubmit: handleSubmitCreate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, error && __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_8__["errorMess"].TitleError, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 29
    }
  }, error), __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_8__["newPost"].Label, {
    htmlFor: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, "Post`s title"), __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_8__["newPost"].Input, {
    placeholder: "Input Title of Post",
    id: "title",
    type: "text",
    value: post.title,
    onChange: handleTitle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  })), __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_8__["newPost"].Label, {
    htmlFor: "body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  }, "Post`s text"), __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_8__["newPost"].Textarea, {
    placeholder: "Input Body of Post",
    id: "body",
    value: post.body,
    onChange: handleBody,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 19
    }
  })), __jsx(_styles_PostStyles__WEBPACK_IMPORTED_MODULE_8__["newPost"].Button, {
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, "Create post"))), isModalOpen && __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    onClose: closeModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }));
}

/***/ }),

/***/ "./pages/styles/PostStyles.ts":
/*!************************************!*\
  !*** ./pages/styles/PostStyles.ts ***!
  \************************************/
/*! exports provided: list, errorMess, newPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorMess", function() { return errorMess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newPost", function() { return newPost; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Card_CardStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Card/CardStyles */ "./components/Card/CardStyles.ts");


function _templateObject10() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n       border: 2px solid #f3969a;\n        box-sizing: border-box;\n        width: 100%;\n        display: block;\n        line-height: 40px;\n        background: #f3969a;\n        color: #fff;\n        font-family: \"Comfortaa\", sans-serif;\n        text-transform: uppercase;\n        transition: background-color 0.3s ease-in-out;\n        \n        &:hover {\n            background: rgba(243, 150, 154, 0.8) ;\n        }\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        font-family: \"Comfortaa\", sans-serif;\n        display: block;\n        box-sizing: border-box;\n        margin-bottom: 20px;\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        box-sizing: border-box;\n        width: 100%;\n        height: 150px;\n        display: block;\n        line-height: 1.2;\n        background: transparent;\n        font-size: 14px;\n        padding: 12px;\n        font-family: \"Raleway\", sans-serif;\n        color: rgba (0, 0, 0, 0.4);\n        border: 2px solid #f3969a;\n        \n        &:placeholder-shown {\n            font-family: \"Raleway\", sans-serif;\n            color: rgba (0, 0, 0, 0.4);\n        }\n        \n         &:focus {\n            outline: none;\n        }\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        box-sizing: border-box;\n        width: 100%;\n        display: block;\n        line-height: 40px;\n        border: none;\n        background: transparent;\n        font-size: 14px;\n        padding: 0 12px;\n        font-family: \"Raleway\", sans-serif;\n        color: rgba (0, 0, 0, 0.4);\n        border-bottom: 2px solid #f3969a;\n        \n        &:placeholder-shown {\n            font-family: \"Raleway\", sans-serif;\n            color: rgba (0, 0, 0, 0.4);\n        }\n        \n         &:focus {\n            outline: none;\n        }\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        font-size: 14px;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        font-family: 'Raleway', sans-serif;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        display: grid;\n        grid-template-columns: repeat(2, 500px);\n        grid-gap: 20px;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        border-radius: 50%;\n        border: none;\n        background: #f3969a;\n        width: 40px;\n        height: 40px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-right: 10px;\n        \n        & svg {\n            fill: #fff;\n            width: 22px;\n            height: 22px;\n        }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        transform: translateY(-200px);\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n     -webkit-transform: translateY(-200px);\n            transform: translateY(-200px);\n  }\n\n  to {\n      -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var SlideBottom = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var list = {
  BtnWrapper: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2()),
  Button: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3()),
  List: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4()),
  PostBody: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject5())
};
var errorMess = {
  TitleError: Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Card_CardStyles__WEBPACK_IMPORTED_MODULE_2__["card"].Title)(_templateObject6())
};
var newPost = {
  Input: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input(_templateObject7()),
  Textarea: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].textarea(_templateObject8()),
  Label: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label(_templateObject9()),
  Button: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject10())
};

/***/ })

})
//# sourceMappingURL=new.js.522693bf7f32033fbf58.hot-update.js.map