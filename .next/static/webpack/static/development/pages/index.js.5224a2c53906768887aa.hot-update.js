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
var _jsxFileName = "C:\\fullstack\\covid-19\\components\\lastUpdate.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Last(_ref) {
  var url = _ref.url;

  var _useStats = Object(_src_useStats__WEBPACK_IMPORTED_MODULE_1__["default"])(url),
      stats = _useStats.stats,
      loading = _useStats.loading,
      error = _useStats.error;

  console.log(stats);
  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Loading...");
  if (error) return __jsx(Typography, {
    variant: "h6",
    component: "h6",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "No info");
  return __jsx(Typography, {
    variant: "h6",
    component: "h6",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Last Update: ", stats.lastUpdate, " ");
}

/***/ })

})
//# sourceMappingURL=index.js.5224a2c53906768887aa.hot-update.js.map