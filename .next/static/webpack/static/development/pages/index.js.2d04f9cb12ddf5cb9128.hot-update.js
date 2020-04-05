webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/styles/fonts.ts":
/*!*******************************!*\
  !*** ./pages/styles/fonts.ts ***!
  \*******************************/
/*! exports provided: Fonts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fonts", function() { return Fonts; });
/* harmony import */ var fontfaceobserver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fontfaceobserver */ "./node_modules/fontfaceobserver/fontfaceobserver.standalone.js");
/* harmony import */ var fontfaceobserver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fontfaceobserver__WEBPACK_IMPORTED_MODULE_0__);

var Fonts = function Fonts() {
  var link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Raleway:wght@300&display=swapp';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
  var comfortaa = new fontfaceobserver__WEBPACK_IMPORTED_MODULE_0___default.a('Comfortaa');
  var raleway = new fontfaceobserver__WEBPACK_IMPORTED_MODULE_0___default.a('Raleway');
  Promise.all([comfortaa.load(), raleway.load()]).then(function () {
    if (document.querySelector('h2')) {
      document.querySelector('h2').style.cssText = 'font-family: Comfortaa, sans-serif';
    }

    document.querySelector('body').style.cssText = 'font-family: Raleway, sans-serif';
    console.log('fonts');
  });
};

/***/ })

})
//# sourceMappingURL=index.js.2d04f9cb12ddf5cb9128.hot-update.js.map