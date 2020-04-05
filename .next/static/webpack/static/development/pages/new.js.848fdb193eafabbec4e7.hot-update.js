webpackHotUpdate("static\\development\\pages\\new.js",{

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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        white-space: pre-line;\n        font-family: 'Raleway', sans-serif;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    "]);

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
//# sourceMappingURL=new.js.848fdb193eafabbec4e7.hot-update.js.map