webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/CountrySelect.js":
/*!*************************************!*\
  !*** ./components/CountrySelect.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountrySelector; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_useStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/useStats */ "./src/useStats.js");
/* harmony import */ var _components_Stats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Stats */ "./components/Stats.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/theme */ "./src/theme.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/NativeSelect */ "./node_modules/@material-ui/core/esm/NativeSelect/index.js");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var react_country_flag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-country-flag */ "./node_modules/react-country-flag/dist/index.es.js");

var _jsxFileName = "C:\\fullstack\\covid-19\\components\\CountrySelect.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var BootstrapInput = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(function (theme) {
  return {
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
        position: 'inherit',
        margin: '0px auto'
      }
    },
    input: {
      margin: "".concat(theme.spacing(3), "px auto"),
      width: '100%',
      display: 'block',
      borderRadius: 4,
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)'
      }
    }
  };
})(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_9__["default"]);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    margin: {
      margin: theme.spacing(1)
    }
  };
});
function CountrySelector() {
  var classes = useStyles();

  var _useStats = Object(_src_useStats__WEBPACK_IMPORTED_MODULE_2__["default"])('https://covid19.mathdro.id/api/countries'),
      countries = _useStats.stats,
      loading = _useStats.loading,
      error = _useStats.error;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('MX'),
      selectedCountry = _useState[0],
      setSelectedCountry = _useState[1];

  var emoji = function emoji(selectedCountry) {
    var flag = emojiFlags.countryCode(selectedCountry);
    console.log(flag);
  };

  if (loading) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Loading...");
  if (error) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Error...");
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(react_country_flag__WEBPACK_IMPORTED_MODULE_10__["default"], {
    code: selectedCountry,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "demo-customized-select-native",
    input: __jsx(BootstrapInput, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }),
    onChange: function onChange(e) {
      setSelectedCountry(e.target.value), emoji(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, Object.entries(countries.countries).map(function (_ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
        country = _ref2[0],
        code = _ref2[1];

    return __jsx("option", {
      selected: selectedCountry === code,
      key: code,
      value: countries.iso3[code],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, countries.iso3[code], " - ", country);
  })), __jsx(_components_Stats__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: "https://covid19.mathdro.id/api/countries/".concat(selectedCountry),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, " "));
}

/***/ }),

/***/ "./node_modules/react-country-flag/dist/index.es.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-country-flag/dist/index.es.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var DEFAULT_CDN_URL = 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/';
var DEFAULT_CDN_SUFFIX = 'svg';

// offset between uppercase ascii and regional indicator symbols
var OFFSET = 127397;

function ReactCountryFlag(_ref) {
    var cdnSuffix = _ref.cdnSuffix,
        cdnUrl = _ref.cdnUrl,
        countryCode = _ref.countryCode,
        style = _ref.style,
        svg = _ref.svg,
        props = objectWithoutProperties(_ref, ['cdnSuffix', 'cdnUrl', 'countryCode', 'style', 'svg']);

    if (typeof countryCode !== 'string') {
        return null;
    }

    if (svg) {
        var flagUrl = '' + cdnUrl + countryCode.toLowerCase() + '.' + DEFAULT_CDN_SUFFIX;

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('img', _extends({}, props, {
            src: flagUrl,
            style: _extends({
                display: 'inline-block',
                width: '1em',
                height: '1em',
                verticalAlign: 'middle'
            }, style)
        }));
    }

    var emoji = countryCode.toUpperCase().replace(/./g, function (char) {
        return String.fromCodePoint(char.charCodeAt(0) + OFFSET);
    });

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'span',
        _extends({
            role: 'img'
        }, props, {
            style: _extends({
                display: 'inline-block',
                fontSize: '1em',
                lineHeight: '1em',
                verticalAlign: 'middle'
            }, style)
        }),
        emoji
    );
}

ReactCountryFlag.propTypes = {
    cdnUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    countryCode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    svg: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

ReactCountryFlag.defaultProps = {
    cdnUrl: DEFAULT_CDN_URL,
    svg: false
};

/* harmony default export */ __webpack_exports__["default"] = (ReactCountryFlag);
//# sourceMappingURL=index.es.js.map


/***/ })

})
//# sourceMappingURL=index.js.a25504730235677b37a4.hot-update.js.map