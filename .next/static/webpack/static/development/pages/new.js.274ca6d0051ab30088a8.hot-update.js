webpackHotUpdate("static\\development\\pages\\new.js",{

/***/ "./components/Modal/Modal.tsx":
/*!************************************!*\
  !*** ./components/Modal/Modal.tsx ***!
  \************************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ModalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalStyles */ "./components/Modal/ModalStyles.ts");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card */ "./components/Card/index.ts");
var _this = undefined,
    _jsxFileName = "F:\\TestTasks\\next-js\\components\\Modal\\Modal.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Modal = function Modal(_ref) {
  var onClose = _ref.onClose,
      children = _ref.children;

  var handleClose = function handleClose() {
    onClose();
  };

  return __jsx(_ModalStyles__WEBPACK_IMPORTED_MODULE_1__["modal"].Backdrop, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx(_ModalStyles__WEBPACK_IMPORTED_MODULE_1__["modal"].BtnClose, {
    type: "button",
    onClick: handleClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("svg", {
    version: "1.1",
    id: "Layer_1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 492 492",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx("path", {
    d: "M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872\r c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872\r c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052\r L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116\r c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952\r c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116\r c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }))), __jsx(_ModalStyles__WEBPACK_IMPORTED_MODULE_1__["modal"].Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, children)));
};

/***/ }),

/***/ "./components/Modal/ModalStyles.ts":
/*!*****************************************!*\
  !*** ./components/Modal/ModalStyles.ts ***!
  \*****************************************/
/*! exports provided: modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modal", function() { return modal; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject4() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        position: absolute;\n        top: 0;\n        right: 20px;\n        background-color: $main-light;\n        border-radius: 50%;\n        border: 1px solid #d9d9d9;\n        padding: 0;\n        width: 40px;\n        height: 40px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        \n        & path {\n            fill: #f3969a;\n        }\n        \n    \n        &:hover {\n          background: #f3969a;\n          border: 1px solid #df5c44;\n          box-shadow: 0 2px 6px 0 $main-light;\n    \n          & path {\n            fill: #fff;\n          }\n        }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        box-shadow: 0 2px 4px rgba(100, 100, 100, 0.5);\n        padding-bottom: 25px;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        min-width: 400px;\n        padding-top: 16px;\n        position: relative;\n        background:  #f3969a;\n    \n        @media (max-width: 600px) {\n          min-width: 100%;\n        }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        position: fixed;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        z-index: 999;\n        background-color: rgba(240, 246, 252, 0.5) ;\n        backdrop-filter: blur(4px);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var modal = {
  Backdrop: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject()),
  Wrapper: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2()),
  Content: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3()),
  BtnClose: styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a(_templateObject4())
};

/***/ })

})
//# sourceMappingURL=new.js.274ca6d0051ab30088a8.hot-update.js.map