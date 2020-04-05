webpackHotUpdate("static\\development\\pages\\posts.js",{

/***/ "./pages/styles/PostStyles.ts":
/*!************************************!*\
  !*** ./pages/styles/PostStyles.ts ***!
  \************************************/
/*! exports provided: card, errorMess, newPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "card", function() { return card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorMess", function() { return errorMess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newPost", function() { return newPost; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject8() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n       border: 2px solid #f3969a;\n        box-sizing: border-box;\n        width: 100%;\n        display: block;\n        line-height: 40px;\n        background: #f3969a;\n        color: #fff;\n        font-family: \"Comfortaa\", sans-serif;\n        text-transform: uppercase;\n        transition: background-color 0.3s ease-in-out;\n        \n        &:hover {\n            background: rgba(243, 150, 154, 0.8) ;\n        }\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        font-family: \"Comfortaa\", sans-serif;\n        display: block;\n        box-sizing: border-box;\n        margin-bottom: 20px;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        box-sizing: border-box;\n        width: 100%;\n        height: 150px;\n        display: block;\n        line-height: 1.2;\n        background: transparent;\n        font-size: 14px;\n        padding: 12px;\n        font-family: \"Raleway\", sans-serif;\n        color: rgba (0, 0, 0, 0.4);\n        border: 2px solid #f3969a;\n        \n        &:placeholder-shown {\n            font-family: \"Raleway\", sans-serif;\n            color: rgba (0, 0, 0, 0.4);\n        }\n        \n         &:focus {\n            outline: none;\n        }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        box-sizing: border-box;\n        width: 100%;\n        display: block;\n        line-height: 40px;\n        border: none;\n        background: transparent;\n        font-size: 14px;\n        padding: 0 12px;\n        font-family: \"Raleway\", sans-serif;\n        color: rgba (0, 0, 0, 0.4);\n        border-bottom: 2px solid #f3969a;\n        \n        &:placeholder-shown {\n            font-family: \"Raleway\", sans-serif;\n            color: rgba (0, 0, 0, 0.4);\n        }\n        \n         &:focus {\n            outline: none;\n        }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        font-size: 14px;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        font-family: \"Comfortaa\",sans-serif;\n        text-align: center;\n        line-height: 1.2;\n        color: #f3969a;\n        font-size: 20px;\n        font-weight: 700;\n        padding-bottom: 10px;\n        position: relative;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        \n        &:before {\n            content: '';\n            width: 100%;\n            position: absolute;\n            height: 1px;\n            background: linear-gradient(to right, rgba(255,255,255,0)\n                0%,rgba(243, 150, 154,1) \n                49%, rgba(255,255,255,0) 100%);\n            bottom: 0px;\n            left: 0;\n            right: 0;\n            z-index: 1;\n        }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        font-family: 'Raleway', sans-serif;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        display: grid;\n        grid-template-columns: repeat(2, 500px);\n        grid-gap: 20px;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var card = {
  List: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject()),
  PostBody: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p(_templateObject2()),
  Title: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2(_templateObject3())
};
var errorMess = {
  TitleError: Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(card.Title)(_templateObject4())
};
var newPost = {
  Input: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input(_templateObject5()),
  Textarea: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].textarea(_templateObject6()),
  Label: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].label(_templateObject7()),
  Button: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button(_templateObject8())
};

/***/ })

})
//# sourceMappingURL=posts.js.353d8df1729789f1262b.hot-update.js.map