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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "F:\\TestTasks\\next-js\\components\\Card\\Card.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Card = function Card(_ref) {
  var id = _ref.id,
      title = _ref.title,
      children = _ref.children;
  return __jsx(_CardStyles__WEBPACK_IMPORTED_MODULE_1__["card"].Item, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(_CardStyles__WEBPACK_IMPORTED_MODULE_1__["card"].ItemWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(_CardStyles__WEBPACK_IMPORTED_MODULE_1__["card"].Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/posts/".concat(id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx("a", {
    title: title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, title))), children));
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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        font-family: \"Comfortaa\",sans-serif;\n        text-align: center;\n        line-height: 1.2;\n        color: #f3969a;\n        font-size: 20px;\n        font-weight: 700;\n        padding-bottom: 10px;\n        position: relative;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        \n        a {\n         color: #f3969a;\n         text-decoration: none;\n         \n         &:hover {\n            text-decoration: none;\n            cursor: pointer;\n            color: #fa6464;\n         }\n        }\n        \n        &:before {\n            content: '';\n            width: 100%;\n            position: absolute;\n            height: 1px;\n            background: linear-gradient(to right, rgba(255,255,255,0)\n                0%,rgba(243, 150, 154,1) \n                49%, rgba(255,255,255,0) 100%);\n            bottom: 0px;\n            left: 0;\n            right: 0;\n            z-index: 1;\n        }\n    "]);

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

/***/ })

})
//# sourceMappingURL=new.js.f5c8f2820344052c7509.hot-update.js.map