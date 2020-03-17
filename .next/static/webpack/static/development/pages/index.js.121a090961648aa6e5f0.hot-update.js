webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Stats.js":
/*!*****************************!*\
  !*** ./components/Stats.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Stats; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_useStats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/useStats */ "./src/useStats.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/theme */ "./src/theme.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
var _jsxFileName = "C:\\fullstack\\covid-19\\components\\Stats.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  };
});
function Stats(_ref) {
  var url = _ref.url;

  var _useStats = Object(_src_useStats__WEBPACK_IMPORTED_MODULE_1__["default"])(url),
      stats = _useStats.stats,
      loading = _useStats.loading,
      error = _useStats.error;

  var classes = useStyles(); // console.log(stats, loading, error);

  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Loading...");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, error.message, "...");
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    item: true,
    xs: 4,
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5",
    component: "h5",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Confirmados"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, stats.confirmed.value)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    item: true,
    xs: 4,
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5",
    component: "h5",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Muertos"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, stats.deaths.value)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    item: true,
    xs: 4,
    spacing: 3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5",
    com: true,
    ponent: "h5",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Curados"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, stats.recovered.value)));
}

/***/ })

})
//# sourceMappingURL=index.js.121a090961648aa6e5f0.hot-update.js.map