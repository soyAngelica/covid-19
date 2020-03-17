webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/lastUpdate.js":
/*!**********************************!*\
  !*** ./components/lastUpdate.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Last; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_useStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/useStats */ "./src/useStats.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
var _jsxFileName = "C:\\fullstack\\covid-19\\components\\lastUpdate.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Last(_ref) {
  var url = _ref.url;

  var _useStats = Object(_src_useStats__WEBPACK_IMPORTED_MODULE_1__["default"])(url),
      stats = _useStats.stats,
      loading = _useStats.loading,
      error = _useStats.error;

  var options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  });
  if (error) return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h6",
    component: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, " ");
  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
    variant: "h6",
    component: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Last Update: ", new Date(stats.lastUpdate).toLocaleDateString('en-US', options));
}

/***/ })

})
//# sourceMappingURL=index.js.66feea99fd4103004429.hot-update.js.map