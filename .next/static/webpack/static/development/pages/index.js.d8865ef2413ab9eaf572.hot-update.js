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

var _jsxFileName = "C:\\fullstack\\covid-19\\components\\CountrySelect.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var emojiFlags = __webpack_require__(/*! emoji-flags */ "./node_modules/emoji-flags/index.js");

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

  console.log(countries);
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
      lineNumber: 70
    },
    __self: this
  }, __jsx(_material_ui_core_NativeSelect__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "demo-customized-select-native",
    input: __jsx(BootstrapInput, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }),
    onChange: function onChange(e) {
      setSelectedCountry(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
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
        lineNumber: 74
      },
      __self: this
    }, countries.iso3[code], " - ", country);
  })), __jsx(_components_Stats__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: "https://covid19.mathdro.id/api/countries/".concat(selectedCountry),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, " "));
}

/***/ }),

/***/ "./node_modules/emoji-flags/data.json":
/*!********************************************!*\
  !*** ./node_modules/emoji-flags/data.json ***!
  \********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"code\":\"AD\",\"emoji\":\"🇦🇩\",\"unicode\":\"U+1F1E6 U+1F1E9\",\"name\":\"Andorra\",\"title\":\"flag for Andorra\"},{\"code\":\"AE\",\"emoji\":\"🇦🇪\",\"unicode\":\"U+1F1E6 U+1F1EA\",\"name\":\"United Arab Emirates\",\"title\":\"flag for United Arab Emirates\"},{\"code\":\"AF\",\"emoji\":\"🇦🇫\",\"unicode\":\"U+1F1E6 U+1F1EB\",\"name\":\"Afghanistan\",\"title\":\"flag for Afghanistan\"},{\"code\":\"AG\",\"emoji\":\"🇦🇬\",\"unicode\":\"U+1F1E6 U+1F1EC\",\"name\":\"Antigua and Barbuda\",\"title\":\"flag for Antigua and Barbuda\"},{\"code\":\"AI\",\"emoji\":\"🇦🇮\",\"unicode\":\"U+1F1E6 U+1F1EE\",\"name\":\"Anguilla\",\"title\":\"flag for Anguilla\"},{\"code\":\"AL\",\"emoji\":\"🇦🇱\",\"unicode\":\"U+1F1E6 U+1F1F1\",\"name\":\"Albania\",\"title\":\"flag for Albania\"},{\"code\":\"AM\",\"emoji\":\"🇦🇲\",\"unicode\":\"U+1F1E6 U+1F1F2\",\"name\":\"Armenia\",\"title\":\"flag for Armenia\"},{\"code\":\"AO\",\"emoji\":\"🇦🇴\",\"unicode\":\"U+1F1E6 U+1F1F4\",\"name\":\"Angola\",\"title\":\"flag for Angola\"},{\"code\":\"AQ\",\"emoji\":\"🇦🇶\",\"unicode\":\"U+1F1E6 U+1F1F6\",\"name\":\"Antarctica\",\"title\":\"flag for Antarctica\"},{\"code\":\"AR\",\"emoji\":\"🇦🇷\",\"unicode\":\"U+1F1E6 U+1F1F7\",\"name\":\"Argentina\",\"title\":\"flag for Argentina\"},{\"code\":\"AS\",\"emoji\":\"🇦🇸\",\"unicode\":\"U+1F1E6 U+1F1F8\",\"name\":\"American Samoa\",\"title\":\"flag for American Samoa\"},{\"code\":\"AT\",\"emoji\":\"🇦🇹\",\"unicode\":\"U+1F1E6 U+1F1F9\",\"name\":\"Austria\",\"title\":\"flag for Austria\"},{\"code\":\"AU\",\"emoji\":\"🇦🇺\",\"unicode\":\"U+1F1E6 U+1F1FA\",\"name\":\"Australia\",\"title\":\"flag for Australia\"},{\"code\":\"AW\",\"emoji\":\"🇦🇼\",\"unicode\":\"U+1F1E6 U+1F1FC\",\"name\":\"Aruba\",\"title\":\"flag for Aruba\"},{\"code\":\"AX\",\"emoji\":\"🇦🇽\",\"unicode\":\"U+1F1E6 U+1F1FD\",\"name\":\"Åland Islands\",\"title\":\"flag for Åland Islands\"},{\"code\":\"AZ\",\"emoji\":\"🇦🇿\",\"unicode\":\"U+1F1E6 U+1F1FF\",\"name\":\"Azerbaijan\",\"title\":\"flag for Azerbaijan\"},{\"code\":\"BA\",\"emoji\":\"🇧🇦\",\"unicode\":\"U+1F1E7 U+1F1E6\",\"name\":\"Bosnia and Herzegovina\",\"title\":\"flag for Bosnia and Herzegovina\"},{\"code\":\"BB\",\"emoji\":\"🇧🇧\",\"unicode\":\"U+1F1E7 U+1F1E7\",\"name\":\"Barbados\",\"title\":\"flag for Barbados\"},{\"code\":\"BD\",\"emoji\":\"🇧🇩\",\"unicode\":\"U+1F1E7 U+1F1E9\",\"name\":\"Bangladesh\",\"title\":\"flag for Bangladesh\"},{\"code\":\"BE\",\"emoji\":\"🇧🇪\",\"unicode\":\"U+1F1E7 U+1F1EA\",\"name\":\"Belgium\",\"title\":\"flag for Belgium\"},{\"code\":\"BF\",\"emoji\":\"🇧🇫\",\"unicode\":\"U+1F1E7 U+1F1EB\",\"name\":\"Burkina Faso\",\"title\":\"flag for Burkina Faso\"},{\"code\":\"BG\",\"emoji\":\"🇧🇬\",\"unicode\":\"U+1F1E7 U+1F1EC\",\"name\":\"Bulgaria\",\"title\":\"flag for Bulgaria\"},{\"code\":\"BH\",\"emoji\":\"🇧🇭\",\"unicode\":\"U+1F1E7 U+1F1ED\",\"name\":\"Bahrain\",\"title\":\"flag for Bahrain\"},{\"code\":\"BI\",\"emoji\":\"🇧🇮\",\"unicode\":\"U+1F1E7 U+1F1EE\",\"name\":\"Burundi\",\"title\":\"flag for Burundi\"},{\"code\":\"BJ\",\"emoji\":\"🇧🇯\",\"unicode\":\"U+1F1E7 U+1F1EF\",\"name\":\"Benin\",\"title\":\"flag for Benin\"},{\"code\":\"BL\",\"emoji\":\"🇧🇱\",\"unicode\":\"U+1F1E7 U+1F1F1\",\"name\":\"Saint Barthélemy\",\"title\":\"flag for Saint Barthélemy\"},{\"code\":\"BM\",\"emoji\":\"🇧🇲\",\"unicode\":\"U+1F1E7 U+1F1F2\",\"name\":\"Bermuda\",\"title\":\"flag for Bermuda\"},{\"code\":\"BN\",\"emoji\":\"🇧🇳\",\"unicode\":\"U+1F1E7 U+1F1F3\",\"name\":\"Brunei Darussalam\",\"title\":\"flag for Brunei Darussalam\"},{\"code\":\"BO\",\"emoji\":\"🇧🇴\",\"unicode\":\"U+1F1E7 U+1F1F4\",\"name\":\"Bolivia\",\"title\":\"flag for Bolivia\"},{\"code\":\"BQ\",\"emoji\":\"🇧🇶\",\"unicode\":\"U+1F1E7 U+1F1F6\",\"name\":\"Bonaire, Sint Eustatius and Saba\",\"title\":\"flag for Bonaire, Sint Eustatius and Saba\"},{\"code\":\"BR\",\"emoji\":\"🇧🇷\",\"unicode\":\"U+1F1E7 U+1F1F7\",\"name\":\"Brazil\",\"title\":\"flag for Brazil\"},{\"code\":\"BS\",\"emoji\":\"🇧🇸\",\"unicode\":\"U+1F1E7 U+1F1F8\",\"name\":\"Bahamas\",\"title\":\"flag for Bahamas\"},{\"code\":\"BT\",\"emoji\":\"🇧🇹\",\"unicode\":\"U+1F1E7 U+1F1F9\",\"name\":\"Bhutan\",\"title\":\"flag for Bhutan\"},{\"code\":\"BV\",\"emoji\":\"🇧🇻\",\"unicode\":\"U+1F1E7 U+1F1FB\",\"name\":\"Bouvet Island\",\"title\":\"flag for Bouvet Island\"},{\"code\":\"BW\",\"emoji\":\"🇧🇼\",\"unicode\":\"U+1F1E7 U+1F1FC\",\"name\":\"Botswana\",\"title\":\"flag for Botswana\"},{\"code\":\"BY\",\"emoji\":\"🇧🇾\",\"unicode\":\"U+1F1E7 U+1F1FE\",\"name\":\"Belarus\",\"title\":\"flag for Belarus\"},{\"code\":\"BZ\",\"emoji\":\"🇧🇿\",\"unicode\":\"U+1F1E7 U+1F1FF\",\"name\":\"Belize\",\"title\":\"flag for Belize\"},{\"code\":\"CA\",\"emoji\":\"🇨🇦\",\"unicode\":\"U+1F1E8 U+1F1E6\",\"name\":\"Canada\",\"title\":\"flag for Canada\"},{\"code\":\"CC\",\"emoji\":\"🇨🇨\",\"unicode\":\"U+1F1E8 U+1F1E8\",\"name\":\"Cocos (Keeling) Islands\",\"title\":\"flag for Cocos (Keeling) Islands\"},{\"code\":\"CD\",\"emoji\":\"🇨🇩\",\"unicode\":\"U+1F1E8 U+1F1E9\",\"name\":\"Congo\",\"title\":\"flag for Congo\"},{\"code\":\"CF\",\"emoji\":\"🇨🇫\",\"unicode\":\"U+1F1E8 U+1F1EB\",\"name\":\"Central African Republic\",\"title\":\"flag for Central African Republic\"},{\"code\":\"CG\",\"emoji\":\"🇨🇬\",\"unicode\":\"U+1F1E8 U+1F1EC\",\"name\":\"Congo\",\"title\":\"flag for Congo\"},{\"code\":\"CH\",\"emoji\":\"🇨🇭\",\"unicode\":\"U+1F1E8 U+1F1ED\",\"name\":\"Switzerland\",\"title\":\"flag for Switzerland\"},{\"code\":\"CI\",\"emoji\":\"🇨🇮\",\"unicode\":\"U+1F1E8 U+1F1EE\",\"name\":\"Côte D'Ivoire\",\"title\":\"flag for Côte D'Ivoire\"},{\"code\":\"CK\",\"emoji\":\"🇨🇰\",\"unicode\":\"U+1F1E8 U+1F1F0\",\"name\":\"Cook Islands\",\"title\":\"flag for Cook Islands\"},{\"code\":\"CL\",\"emoji\":\"🇨🇱\",\"unicode\":\"U+1F1E8 U+1F1F1\",\"name\":\"Chile\",\"title\":\"flag for Chile\"},{\"code\":\"CM\",\"emoji\":\"🇨🇲\",\"unicode\":\"U+1F1E8 U+1F1F2\",\"name\":\"Cameroon\",\"title\":\"flag for Cameroon\"},{\"code\":\"CN\",\"emoji\":\"🇨🇳\",\"unicode\":\"U+1F1E8 U+1F1F3\",\"name\":\"China\",\"title\":\"flag for China\"},{\"code\":\"CO\",\"emoji\":\"🇨🇴\",\"unicode\":\"U+1F1E8 U+1F1F4\",\"name\":\"Colombia\",\"title\":\"flag for Colombia\"},{\"code\":\"CR\",\"emoji\":\"🇨🇷\",\"unicode\":\"U+1F1E8 U+1F1F7\",\"name\":\"Costa Rica\",\"title\":\"flag for Costa Rica\"},{\"code\":\"CU\",\"emoji\":\"🇨🇺\",\"unicode\":\"U+1F1E8 U+1F1FA\",\"name\":\"Cuba\",\"title\":\"flag for Cuba\"},{\"code\":\"CV\",\"emoji\":\"🇨🇻\",\"unicode\":\"U+1F1E8 U+1F1FB\",\"name\":\"Cape Verde\",\"title\":\"flag for Cape Verde\"},{\"code\":\"CW\",\"emoji\":\"🇨🇼\",\"unicode\":\"U+1F1E8 U+1F1FC\",\"name\":\"Curaçao\",\"title\":\"flag for Curaçao\"},{\"code\":\"CX\",\"emoji\":\"🇨🇽\",\"unicode\":\"U+1F1E8 U+1F1FD\",\"name\":\"Christmas Island\",\"title\":\"flag for Christmas Island\"},{\"code\":\"CY\",\"emoji\":\"🇨🇾\",\"unicode\":\"U+1F1E8 U+1F1FE\",\"name\":\"Cyprus\",\"title\":\"flag for Cyprus\"},{\"code\":\"CZ\",\"emoji\":\"🇨🇿\",\"unicode\":\"U+1F1E8 U+1F1FF\",\"name\":\"Czech Republic\",\"title\":\"flag for Czech Republic\"},{\"code\":\"DE\",\"emoji\":\"🇩🇪\",\"unicode\":\"U+1F1E9 U+1F1EA\",\"name\":\"Germany\",\"title\":\"flag for Germany\"},{\"code\":\"DJ\",\"emoji\":\"🇩🇯\",\"unicode\":\"U+1F1E9 U+1F1EF\",\"name\":\"Djibouti\",\"title\":\"flag for Djibouti\"},{\"code\":\"DK\",\"emoji\":\"🇩🇰\",\"unicode\":\"U+1F1E9 U+1F1F0\",\"name\":\"Denmark\",\"title\":\"flag for Denmark\"},{\"code\":\"DM\",\"emoji\":\"🇩🇲\",\"unicode\":\"U+1F1E9 U+1F1F2\",\"name\":\"Dominica\",\"title\":\"flag for Dominica\"},{\"code\":\"DO\",\"emoji\":\"🇩🇴\",\"unicode\":\"U+1F1E9 U+1F1F4\",\"name\":\"Dominican Republic\",\"title\":\"flag for Dominican Republic\"},{\"code\":\"DZ\",\"emoji\":\"🇩🇿\",\"unicode\":\"U+1F1E9 U+1F1FF\",\"name\":\"Algeria\",\"title\":\"flag for Algeria\"},{\"code\":\"EC\",\"emoji\":\"🇪🇨\",\"unicode\":\"U+1F1EA U+1F1E8\",\"name\":\"Ecuador\",\"title\":\"flag for Ecuador\"},{\"code\":\"EE\",\"emoji\":\"🇪🇪\",\"unicode\":\"U+1F1EA U+1F1EA\",\"name\":\"Estonia\",\"title\":\"flag for Estonia\"},{\"code\":\"EG\",\"emoji\":\"🇪🇬\",\"unicode\":\"U+1F1EA U+1F1EC\",\"name\":\"Egypt\",\"title\":\"flag for Egypt\"},{\"code\":\"EH\",\"emoji\":\"🇪🇭\",\"unicode\":\"U+1F1EA U+1F1ED\",\"name\":\"Western Sahara\",\"title\":\"flag for Western Sahara\"},{\"code\":\"ER\",\"emoji\":\"🇪🇷\",\"unicode\":\"U+1F1EA U+1F1F7\",\"name\":\"Eritrea\",\"title\":\"flag for Eritrea\"},{\"code\":\"ES\",\"emoji\":\"🇪🇸\",\"unicode\":\"U+1F1EA U+1F1F8\",\"name\":\"Spain\",\"title\":\"flag for Spain\"},{\"code\":\"ET\",\"emoji\":\"🇪🇹\",\"unicode\":\"U+1F1EA U+1F1F9\",\"name\":\"Ethiopia\",\"title\":\"flag for Ethiopia\"},{\"code\":\"EU\",\"emoji\":\"🇪🇺\",\"unicode\":\"U+1F1EA U+1F1FA\",\"name\":\"European Union\",\"title\":\"flag for European Union\"},{\"code\":\"FI\",\"emoji\":\"🇫🇮\",\"unicode\":\"U+1F1EB U+1F1EE\",\"name\":\"Finland\",\"title\":\"flag for Finland\"},{\"code\":\"FJ\",\"emoji\":\"🇫🇯\",\"unicode\":\"U+1F1EB U+1F1EF\",\"name\":\"Fiji\",\"title\":\"flag for Fiji\"},{\"code\":\"FK\",\"emoji\":\"🇫🇰\",\"unicode\":\"U+1F1EB U+1F1F0\",\"name\":\"Falkland Islands (Malvinas)\",\"title\":\"flag for Falkland Islands (Malvinas)\"},{\"code\":\"FM\",\"emoji\":\"🇫🇲\",\"unicode\":\"U+1F1EB U+1F1F2\",\"name\":\"Micronesia\",\"title\":\"flag for Micronesia\"},{\"code\":\"FO\",\"emoji\":\"🇫🇴\",\"unicode\":\"U+1F1EB U+1F1F4\",\"name\":\"Faroe Islands\",\"title\":\"flag for Faroe Islands\"},{\"code\":\"FR\",\"emoji\":\"🇫🇷\",\"unicode\":\"U+1F1EB U+1F1F7\",\"name\":\"France\",\"title\":\"flag for France\"},{\"code\":\"GA\",\"emoji\":\"🇬🇦\",\"unicode\":\"U+1F1EC U+1F1E6\",\"name\":\"Gabon\",\"title\":\"flag for Gabon\"},{\"code\":\"GB\",\"emoji\":\"🇬🇧\",\"unicode\":\"U+1F1EC U+1F1E7\",\"name\":\"United Kingdom\",\"title\":\"flag for United Kingdom\"},{\"code\":\"GD\",\"emoji\":\"🇬🇩\",\"unicode\":\"U+1F1EC U+1F1E9\",\"name\":\"Grenada\",\"title\":\"flag for Grenada\"},{\"code\":\"GE\",\"emoji\":\"🇬🇪\",\"unicode\":\"U+1F1EC U+1F1EA\",\"name\":\"Georgia\",\"title\":\"flag for Georgia\"},{\"code\":\"GF\",\"emoji\":\"🇬🇫\",\"unicode\":\"U+1F1EC U+1F1EB\",\"name\":\"French Guiana\",\"title\":\"flag for French Guiana\"},{\"code\":\"GG\",\"emoji\":\"🇬🇬\",\"unicode\":\"U+1F1EC U+1F1EC\",\"name\":\"Guernsey\",\"title\":\"flag for Guernsey\"},{\"code\":\"GH\",\"emoji\":\"🇬🇭\",\"unicode\":\"U+1F1EC U+1F1ED\",\"name\":\"Ghana\",\"title\":\"flag for Ghana\"},{\"code\":\"GI\",\"emoji\":\"🇬🇮\",\"unicode\":\"U+1F1EC U+1F1EE\",\"name\":\"Gibraltar\",\"title\":\"flag for Gibraltar\"},{\"code\":\"GL\",\"emoji\":\"🇬🇱\",\"unicode\":\"U+1F1EC U+1F1F1\",\"name\":\"Greenland\",\"title\":\"flag for Greenland\"},{\"code\":\"GM\",\"emoji\":\"🇬🇲\",\"unicode\":\"U+1F1EC U+1F1F2\",\"name\":\"Gambia\",\"title\":\"flag for Gambia\"},{\"code\":\"GN\",\"emoji\":\"🇬🇳\",\"unicode\":\"U+1F1EC U+1F1F3\",\"name\":\"Guinea\",\"title\":\"flag for Guinea\"},{\"code\":\"GP\",\"emoji\":\"🇬🇵\",\"unicode\":\"U+1F1EC U+1F1F5\",\"name\":\"Guadeloupe\",\"title\":\"flag for Guadeloupe\"},{\"code\":\"GQ\",\"emoji\":\"🇬🇶\",\"unicode\":\"U+1F1EC U+1F1F6\",\"name\":\"Equatorial Guinea\",\"title\":\"flag for Equatorial Guinea\"},{\"code\":\"GR\",\"emoji\":\"🇬🇷\",\"unicode\":\"U+1F1EC U+1F1F7\",\"name\":\"Greece\",\"title\":\"flag for Greece\"},{\"code\":\"GS\",\"emoji\":\"🇬🇸\",\"unicode\":\"U+1F1EC U+1F1F8\",\"name\":\"South Georgia\",\"title\":\"flag for South Georgia\"},{\"code\":\"GT\",\"emoji\":\"🇬🇹\",\"unicode\":\"U+1F1EC U+1F1F9\",\"name\":\"Guatemala\",\"title\":\"flag for Guatemala\"},{\"code\":\"GU\",\"emoji\":\"🇬🇺\",\"unicode\":\"U+1F1EC U+1F1FA\",\"name\":\"Guam\",\"title\":\"flag for Guam\"},{\"code\":\"GW\",\"emoji\":\"🇬🇼\",\"unicode\":\"U+1F1EC U+1F1FC\",\"name\":\"Guinea-Bissau\",\"title\":\"flag for Guinea-Bissau\"},{\"code\":\"GY\",\"emoji\":\"🇬🇾\",\"unicode\":\"U+1F1EC U+1F1FE\",\"name\":\"Guyana\",\"title\":\"flag for Guyana\"},{\"code\":\"HK\",\"emoji\":\"🇭🇰\",\"unicode\":\"U+1F1ED U+1F1F0\",\"name\":\"Hong Kong\",\"title\":\"flag for Hong Kong\"},{\"code\":\"HM\",\"emoji\":\"🇭🇲\",\"unicode\":\"U+1F1ED U+1F1F2\",\"name\":\"Heard Island and Mcdonald Islands\",\"title\":\"flag for Heard Island and Mcdonald Islands\"},{\"code\":\"HN\",\"emoji\":\"🇭🇳\",\"unicode\":\"U+1F1ED U+1F1F3\",\"name\":\"Honduras\",\"title\":\"flag for Honduras\"},{\"code\":\"HR\",\"emoji\":\"🇭🇷\",\"unicode\":\"U+1F1ED U+1F1F7\",\"name\":\"Croatia\",\"title\":\"flag for Croatia\"},{\"code\":\"HT\",\"emoji\":\"🇭🇹\",\"unicode\":\"U+1F1ED U+1F1F9\",\"name\":\"Haiti\",\"title\":\"flag for Haiti\"},{\"code\":\"HU\",\"emoji\":\"🇭🇺\",\"unicode\":\"U+1F1ED U+1F1FA\",\"name\":\"Hungary\",\"title\":\"flag for Hungary\"},{\"code\":\"ID\",\"emoji\":\"🇮🇩\",\"unicode\":\"U+1F1EE U+1F1E9\",\"name\":\"Indonesia\",\"title\":\"flag for Indonesia\"},{\"code\":\"IE\",\"emoji\":\"🇮🇪\",\"unicode\":\"U+1F1EE U+1F1EA\",\"name\":\"Ireland\",\"title\":\"flag for Ireland\"},{\"code\":\"IL\",\"emoji\":\"🇮🇱\",\"unicode\":\"U+1F1EE U+1F1F1\",\"name\":\"Israel\",\"title\":\"flag for Israel\"},{\"code\":\"IM\",\"emoji\":\"🇮🇲\",\"unicode\":\"U+1F1EE U+1F1F2\",\"name\":\"Isle of Man\",\"title\":\"flag for Isle of Man\"},{\"code\":\"IN\",\"emoji\":\"🇮🇳\",\"unicode\":\"U+1F1EE U+1F1F3\",\"name\":\"India\",\"title\":\"flag for India\"},{\"code\":\"IO\",\"emoji\":\"🇮🇴\",\"unicode\":\"U+1F1EE U+1F1F4\",\"name\":\"British Indian Ocean Territory\",\"title\":\"flag for British Indian Ocean Territory\"},{\"code\":\"IQ\",\"emoji\":\"🇮🇶\",\"unicode\":\"U+1F1EE U+1F1F6\",\"name\":\"Iraq\",\"title\":\"flag for Iraq\"},{\"code\":\"IR\",\"emoji\":\"🇮🇷\",\"unicode\":\"U+1F1EE U+1F1F7\",\"name\":\"Iran\",\"title\":\"flag for Iran\"},{\"code\":\"IS\",\"emoji\":\"🇮🇸\",\"unicode\":\"U+1F1EE U+1F1F8\",\"name\":\"Iceland\",\"title\":\"flag for Iceland\"},{\"code\":\"IT\",\"emoji\":\"🇮🇹\",\"unicode\":\"U+1F1EE U+1F1F9\",\"name\":\"Italy\",\"title\":\"flag for Italy\"},{\"code\":\"JE\",\"emoji\":\"🇯🇪\",\"unicode\":\"U+1F1EF U+1F1EA\",\"name\":\"Jersey\",\"title\":\"flag for Jersey\"},{\"code\":\"JM\",\"emoji\":\"🇯🇲\",\"unicode\":\"U+1F1EF U+1F1F2\",\"name\":\"Jamaica\",\"title\":\"flag for Jamaica\"},{\"code\":\"JO\",\"emoji\":\"🇯🇴\",\"unicode\":\"U+1F1EF U+1F1F4\",\"name\":\"Jordan\",\"title\":\"flag for Jordan\"},{\"code\":\"JP\",\"emoji\":\"🇯🇵\",\"unicode\":\"U+1F1EF U+1F1F5\",\"name\":\"Japan\",\"title\":\"flag for Japan\"},{\"code\":\"KE\",\"emoji\":\"🇰🇪\",\"unicode\":\"U+1F1F0 U+1F1EA\",\"name\":\"Kenya\",\"title\":\"flag for Kenya\"},{\"code\":\"KG\",\"emoji\":\"🇰🇬\",\"unicode\":\"U+1F1F0 U+1F1EC\",\"name\":\"Kyrgyzstan\",\"title\":\"flag for Kyrgyzstan\"},{\"code\":\"KH\",\"emoji\":\"🇰🇭\",\"unicode\":\"U+1F1F0 U+1F1ED\",\"name\":\"Cambodia\",\"title\":\"flag for Cambodia\"},{\"code\":\"KI\",\"emoji\":\"🇰🇮\",\"unicode\":\"U+1F1F0 U+1F1EE\",\"name\":\"Kiribati\",\"title\":\"flag for Kiribati\"},{\"code\":\"KM\",\"emoji\":\"🇰🇲\",\"unicode\":\"U+1F1F0 U+1F1F2\",\"name\":\"Comoros\",\"title\":\"flag for Comoros\"},{\"code\":\"KN\",\"emoji\":\"🇰🇳\",\"unicode\":\"U+1F1F0 U+1F1F3\",\"name\":\"Saint Kitts and Nevis\",\"title\":\"flag for Saint Kitts and Nevis\"},{\"code\":\"KP\",\"emoji\":\"🇰🇵\",\"unicode\":\"U+1F1F0 U+1F1F5\",\"name\":\"North Korea\",\"title\":\"flag for North Korea\"},{\"code\":\"KR\",\"emoji\":\"🇰🇷\",\"unicode\":\"U+1F1F0 U+1F1F7\",\"name\":\"South Korea\",\"title\":\"flag for South Korea\"},{\"code\":\"KW\",\"emoji\":\"🇰🇼\",\"unicode\":\"U+1F1F0 U+1F1FC\",\"name\":\"Kuwait\",\"title\":\"flag for Kuwait\"},{\"code\":\"KY\",\"emoji\":\"🇰🇾\",\"unicode\":\"U+1F1F0 U+1F1FE\",\"name\":\"Cayman Islands\",\"title\":\"flag for Cayman Islands\"},{\"code\":\"KZ\",\"emoji\":\"🇰🇿\",\"unicode\":\"U+1F1F0 U+1F1FF\",\"name\":\"Kazakhstan\",\"title\":\"flag for Kazakhstan\"},{\"code\":\"LA\",\"emoji\":\"🇱🇦\",\"unicode\":\"U+1F1F1 U+1F1E6\",\"name\":\"Lao People's Democratic Republic\",\"title\":\"flag for Lao People's Democratic Republic\"},{\"code\":\"LB\",\"emoji\":\"🇱🇧\",\"unicode\":\"U+1F1F1 U+1F1E7\",\"name\":\"Lebanon\",\"title\":\"flag for Lebanon\"},{\"code\":\"LC\",\"emoji\":\"🇱🇨\",\"unicode\":\"U+1F1F1 U+1F1E8\",\"name\":\"Saint Lucia\",\"title\":\"flag for Saint Lucia\"},{\"code\":\"LI\",\"emoji\":\"🇱🇮\",\"unicode\":\"U+1F1F1 U+1F1EE\",\"name\":\"Liechtenstein\",\"title\":\"flag for Liechtenstein\"},{\"code\":\"LK\",\"emoji\":\"🇱🇰\",\"unicode\":\"U+1F1F1 U+1F1F0\",\"name\":\"Sri Lanka\",\"title\":\"flag for Sri Lanka\"},{\"code\":\"LR\",\"emoji\":\"🇱🇷\",\"unicode\":\"U+1F1F1 U+1F1F7\",\"name\":\"Liberia\",\"title\":\"flag for Liberia\"},{\"code\":\"LS\",\"emoji\":\"🇱🇸\",\"unicode\":\"U+1F1F1 U+1F1F8\",\"name\":\"Lesotho\",\"title\":\"flag for Lesotho\"},{\"code\":\"LT\",\"emoji\":\"🇱🇹\",\"unicode\":\"U+1F1F1 U+1F1F9\",\"name\":\"Lithuania\",\"title\":\"flag for Lithuania\"},{\"code\":\"LU\",\"emoji\":\"🇱🇺\",\"unicode\":\"U+1F1F1 U+1F1FA\",\"name\":\"Luxembourg\",\"title\":\"flag for Luxembourg\"},{\"code\":\"LV\",\"emoji\":\"🇱🇻\",\"unicode\":\"U+1F1F1 U+1F1FB\",\"name\":\"Latvia\",\"title\":\"flag for Latvia\"},{\"code\":\"LY\",\"emoji\":\"🇱🇾\",\"unicode\":\"U+1F1F1 U+1F1FE\",\"name\":\"Libya\",\"title\":\"flag for Libya\"},{\"code\":\"MA\",\"emoji\":\"🇲🇦\",\"unicode\":\"U+1F1F2 U+1F1E6\",\"name\":\"Morocco\",\"title\":\"flag for Morocco\"},{\"code\":\"MC\",\"emoji\":\"🇲🇨\",\"unicode\":\"U+1F1F2 U+1F1E8\",\"name\":\"Monaco\",\"title\":\"flag for Monaco\"},{\"code\":\"MD\",\"emoji\":\"🇲🇩\",\"unicode\":\"U+1F1F2 U+1F1E9\",\"name\":\"Moldova\",\"title\":\"flag for Moldova\"},{\"code\":\"ME\",\"emoji\":\"🇲🇪\",\"unicode\":\"U+1F1F2 U+1F1EA\",\"name\":\"Montenegro\",\"title\":\"flag for Montenegro\"},{\"code\":\"MF\",\"emoji\":\"🇲🇫\",\"unicode\":\"U+1F1F2 U+1F1EB\",\"name\":\"Saint Martin (French Part)\",\"title\":\"flag for Saint Martin (French Part)\"},{\"code\":\"MG\",\"emoji\":\"🇲🇬\",\"unicode\":\"U+1F1F2 U+1F1EC\",\"name\":\"Madagascar\",\"title\":\"flag for Madagascar\"},{\"code\":\"MH\",\"emoji\":\"🇲🇭\",\"unicode\":\"U+1F1F2 U+1F1ED\",\"name\":\"Marshall Islands\",\"title\":\"flag for Marshall Islands\"},{\"code\":\"MK\",\"emoji\":\"🇲🇰\",\"unicode\":\"U+1F1F2 U+1F1F0\",\"name\":\"Macedonia\",\"title\":\"flag for Macedonia\"},{\"code\":\"ML\",\"emoji\":\"🇲🇱\",\"unicode\":\"U+1F1F2 U+1F1F1\",\"name\":\"Mali\",\"title\":\"flag for Mali\"},{\"code\":\"MM\",\"emoji\":\"🇲🇲\",\"unicode\":\"U+1F1F2 U+1F1F2\",\"name\":\"Myanmar\",\"title\":\"flag for Myanmar\"},{\"code\":\"MN\",\"emoji\":\"🇲🇳\",\"unicode\":\"U+1F1F2 U+1F1F3\",\"name\":\"Mongolia\",\"title\":\"flag for Mongolia\"},{\"code\":\"MO\",\"emoji\":\"🇲🇴\",\"unicode\":\"U+1F1F2 U+1F1F4\",\"name\":\"Macao\",\"title\":\"flag for Macao\"},{\"code\":\"MP\",\"emoji\":\"🇲🇵\",\"unicode\":\"U+1F1F2 U+1F1F5\",\"name\":\"Northern Mariana Islands\",\"title\":\"flag for Northern Mariana Islands\"},{\"code\":\"MQ\",\"emoji\":\"🇲🇶\",\"unicode\":\"U+1F1F2 U+1F1F6\",\"name\":\"Martinique\",\"title\":\"flag for Martinique\"},{\"code\":\"MR\",\"emoji\":\"🇲🇷\",\"unicode\":\"U+1F1F2 U+1F1F7\",\"name\":\"Mauritania\",\"title\":\"flag for Mauritania\"},{\"code\":\"MS\",\"emoji\":\"🇲🇸\",\"unicode\":\"U+1F1F2 U+1F1F8\",\"name\":\"Montserrat\",\"title\":\"flag for Montserrat\"},{\"code\":\"MT\",\"emoji\":\"🇲🇹\",\"unicode\":\"U+1F1F2 U+1F1F9\",\"name\":\"Malta\",\"title\":\"flag for Malta\"},{\"code\":\"MU\",\"emoji\":\"🇲🇺\",\"unicode\":\"U+1F1F2 U+1F1FA\",\"name\":\"Mauritius\",\"title\":\"flag for Mauritius\"},{\"code\":\"MV\",\"emoji\":\"🇲🇻\",\"unicode\":\"U+1F1F2 U+1F1FB\",\"name\":\"Maldives\",\"title\":\"flag for Maldives\"},{\"code\":\"MW\",\"emoji\":\"🇲🇼\",\"unicode\":\"U+1F1F2 U+1F1FC\",\"name\":\"Malawi\",\"title\":\"flag for Malawi\"},{\"code\":\"MX\",\"emoji\":\"🇲🇽\",\"unicode\":\"U+1F1F2 U+1F1FD\",\"name\":\"Mexico\",\"title\":\"flag for Mexico\"},{\"code\":\"MY\",\"emoji\":\"🇲🇾\",\"unicode\":\"U+1F1F2 U+1F1FE\",\"name\":\"Malaysia\",\"title\":\"flag for Malaysia\"},{\"code\":\"MZ\",\"emoji\":\"🇲🇿\",\"unicode\":\"U+1F1F2 U+1F1FF\",\"name\":\"Mozambique\",\"title\":\"flag for Mozambique\"},{\"code\":\"NA\",\"emoji\":\"🇳🇦\",\"unicode\":\"U+1F1F3 U+1F1E6\",\"name\":\"Namibia\",\"title\":\"flag for Namibia\"},{\"code\":\"NC\",\"emoji\":\"🇳🇨\",\"unicode\":\"U+1F1F3 U+1F1E8\",\"name\":\"New Caledonia\",\"title\":\"flag for New Caledonia\"},{\"code\":\"NE\",\"emoji\":\"🇳🇪\",\"unicode\":\"U+1F1F3 U+1F1EA\",\"name\":\"Niger\",\"title\":\"flag for Niger\"},{\"code\":\"NF\",\"emoji\":\"🇳🇫\",\"unicode\":\"U+1F1F3 U+1F1EB\",\"name\":\"Norfolk Island\",\"title\":\"flag for Norfolk Island\"},{\"code\":\"NG\",\"emoji\":\"🇳🇬\",\"unicode\":\"U+1F1F3 U+1F1EC\",\"name\":\"Nigeria\",\"title\":\"flag for Nigeria\"},{\"code\":\"NI\",\"emoji\":\"🇳🇮\",\"unicode\":\"U+1F1F3 U+1F1EE\",\"name\":\"Nicaragua\",\"title\":\"flag for Nicaragua\"},{\"code\":\"NL\",\"emoji\":\"🇳🇱\",\"unicode\":\"U+1F1F3 U+1F1F1\",\"name\":\"Netherlands\",\"title\":\"flag for Netherlands\"},{\"code\":\"NO\",\"emoji\":\"🇳🇴\",\"unicode\":\"U+1F1F3 U+1F1F4\",\"name\":\"Norway\",\"title\":\"flag for Norway\"},{\"code\":\"NP\",\"emoji\":\"🇳🇵\",\"unicode\":\"U+1F1F3 U+1F1F5\",\"name\":\"Nepal\",\"title\":\"flag for Nepal\"},{\"code\":\"NR\",\"emoji\":\"🇳🇷\",\"unicode\":\"U+1F1F3 U+1F1F7\",\"name\":\"Nauru\",\"title\":\"flag for Nauru\"},{\"code\":\"NU\",\"emoji\":\"🇳🇺\",\"unicode\":\"U+1F1F3 U+1F1FA\",\"name\":\"Niue\",\"title\":\"flag for Niue\"},{\"code\":\"NZ\",\"emoji\":\"🇳🇿\",\"unicode\":\"U+1F1F3 U+1F1FF\",\"name\":\"New Zealand\",\"title\":\"flag for New Zealand\"},{\"code\":\"OM\",\"emoji\":\"🇴🇲\",\"unicode\":\"U+1F1F4 U+1F1F2\",\"name\":\"Oman\",\"title\":\"flag for Oman\"},{\"code\":\"PA\",\"emoji\":\"🇵🇦\",\"unicode\":\"U+1F1F5 U+1F1E6\",\"name\":\"Panama\",\"title\":\"flag for Panama\"},{\"code\":\"PE\",\"emoji\":\"🇵🇪\",\"unicode\":\"U+1F1F5 U+1F1EA\",\"name\":\"Peru\",\"title\":\"flag for Peru\"},{\"code\":\"PF\",\"emoji\":\"🇵🇫\",\"unicode\":\"U+1F1F5 U+1F1EB\",\"name\":\"French Polynesia\",\"title\":\"flag for French Polynesia\"},{\"code\":\"PG\",\"emoji\":\"🇵🇬\",\"unicode\":\"U+1F1F5 U+1F1EC\",\"name\":\"Papua New Guinea\",\"title\":\"flag for Papua New Guinea\"},{\"code\":\"PH\",\"emoji\":\"🇵🇭\",\"unicode\":\"U+1F1F5 U+1F1ED\",\"name\":\"Philippines\",\"title\":\"flag for Philippines\"},{\"code\":\"PK\",\"emoji\":\"🇵🇰\",\"unicode\":\"U+1F1F5 U+1F1F0\",\"name\":\"Pakistan\",\"title\":\"flag for Pakistan\"},{\"code\":\"PL\",\"emoji\":\"🇵🇱\",\"unicode\":\"U+1F1F5 U+1F1F1\",\"name\":\"Poland\",\"title\":\"flag for Poland\"},{\"code\":\"PM\",\"emoji\":\"🇵🇲\",\"unicode\":\"U+1F1F5 U+1F1F2\",\"name\":\"Saint Pierre and Miquelon\",\"title\":\"flag for Saint Pierre and Miquelon\"},{\"code\":\"PN\",\"emoji\":\"🇵🇳\",\"unicode\":\"U+1F1F5 U+1F1F3\",\"name\":\"Pitcairn\",\"title\":\"flag for Pitcairn\"},{\"code\":\"PR\",\"emoji\":\"🇵🇷\",\"unicode\":\"U+1F1F5 U+1F1F7\",\"name\":\"Puerto Rico\",\"title\":\"flag for Puerto Rico\"},{\"code\":\"PS\",\"emoji\":\"🇵🇸\",\"unicode\":\"U+1F1F5 U+1F1F8\",\"name\":\"Palestinian Territory\",\"title\":\"flag for Palestinian Territory\"},{\"code\":\"PT\",\"emoji\":\"🇵🇹\",\"unicode\":\"U+1F1F5 U+1F1F9\",\"name\":\"Portugal\",\"title\":\"flag for Portugal\"},{\"code\":\"PW\",\"emoji\":\"🇵🇼\",\"unicode\":\"U+1F1F5 U+1F1FC\",\"name\":\"Palau\",\"title\":\"flag for Palau\"},{\"code\":\"PY\",\"emoji\":\"🇵🇾\",\"unicode\":\"U+1F1F5 U+1F1FE\",\"name\":\"Paraguay\",\"title\":\"flag for Paraguay\"},{\"code\":\"QA\",\"emoji\":\"🇶🇦\",\"unicode\":\"U+1F1F6 U+1F1E6\",\"name\":\"Qatar\",\"title\":\"flag for Qatar\"},{\"code\":\"RE\",\"emoji\":\"🇷🇪\",\"unicode\":\"U+1F1F7 U+1F1EA\",\"name\":\"Réunion\",\"title\":\"flag for Réunion\"},{\"code\":\"RO\",\"emoji\":\"🇷🇴\",\"unicode\":\"U+1F1F7 U+1F1F4\",\"name\":\"Romania\",\"title\":\"flag for Romania\"},{\"code\":\"RS\",\"emoji\":\"🇷🇸\",\"unicode\":\"U+1F1F7 U+1F1F8\",\"name\":\"Serbia\",\"title\":\"flag for Serbia\"},{\"code\":\"RU\",\"emoji\":\"🇷🇺\",\"unicode\":\"U+1F1F7 U+1F1FA\",\"name\":\"Russia\",\"title\":\"flag for Russia\"},{\"code\":\"RW\",\"emoji\":\"🇷🇼\",\"unicode\":\"U+1F1F7 U+1F1FC\",\"name\":\"Rwanda\",\"title\":\"flag for Rwanda\"},{\"code\":\"SA\",\"emoji\":\"🇸🇦\",\"unicode\":\"U+1F1F8 U+1F1E6\",\"name\":\"Saudi Arabia\",\"title\":\"flag for Saudi Arabia\"},{\"code\":\"SB\",\"emoji\":\"🇸🇧\",\"unicode\":\"U+1F1F8 U+1F1E7\",\"name\":\"Solomon Islands\",\"title\":\"flag for Solomon Islands\"},{\"code\":\"SC\",\"emoji\":\"🇸🇨\",\"unicode\":\"U+1F1F8 U+1F1E8\",\"name\":\"Seychelles\",\"title\":\"flag for Seychelles\"},{\"code\":\"SD\",\"emoji\":\"🇸🇩\",\"unicode\":\"U+1F1F8 U+1F1E9\",\"name\":\"Sudan\",\"title\":\"flag for Sudan\"},{\"code\":\"SE\",\"emoji\":\"🇸🇪\",\"unicode\":\"U+1F1F8 U+1F1EA\",\"name\":\"Sweden\",\"title\":\"flag for Sweden\"},{\"code\":\"SG\",\"emoji\":\"🇸🇬\",\"unicode\":\"U+1F1F8 U+1F1EC\",\"name\":\"Singapore\",\"title\":\"flag for Singapore\"},{\"code\":\"SH\",\"emoji\":\"🇸🇭\",\"unicode\":\"U+1F1F8 U+1F1ED\",\"name\":\"Saint Helena, Ascension and Tristan Da Cunha\",\"title\":\"flag for Saint Helena, Ascension and Tristan Da Cunha\"},{\"code\":\"SI\",\"emoji\":\"🇸🇮\",\"unicode\":\"U+1F1F8 U+1F1EE\",\"name\":\"Slovenia\",\"title\":\"flag for Slovenia\"},{\"code\":\"SJ\",\"emoji\":\"🇸🇯\",\"unicode\":\"U+1F1F8 U+1F1EF\",\"name\":\"Svalbard and Jan Mayen\",\"title\":\"flag for Svalbard and Jan Mayen\"},{\"code\":\"SK\",\"emoji\":\"🇸🇰\",\"unicode\":\"U+1F1F8 U+1F1F0\",\"name\":\"Slovakia\",\"title\":\"flag for Slovakia\"},{\"code\":\"SL\",\"emoji\":\"🇸🇱\",\"unicode\":\"U+1F1F8 U+1F1F1\",\"name\":\"Sierra Leone\",\"title\":\"flag for Sierra Leone\"},{\"code\":\"SM\",\"emoji\":\"🇸🇲\",\"unicode\":\"U+1F1F8 U+1F1F2\",\"name\":\"San Marino\",\"title\":\"flag for San Marino\"},{\"code\":\"SN\",\"emoji\":\"🇸🇳\",\"unicode\":\"U+1F1F8 U+1F1F3\",\"name\":\"Senegal\",\"title\":\"flag for Senegal\"},{\"code\":\"SO\",\"emoji\":\"🇸🇴\",\"unicode\":\"U+1F1F8 U+1F1F4\",\"name\":\"Somalia\",\"title\":\"flag for Somalia\"},{\"code\":\"SR\",\"emoji\":\"🇸🇷\",\"unicode\":\"U+1F1F8 U+1F1F7\",\"name\":\"Suriname\",\"title\":\"flag for Suriname\"},{\"code\":\"SS\",\"emoji\":\"🇸🇸\",\"unicode\":\"U+1F1F8 U+1F1F8\",\"name\":\"South Sudan\",\"title\":\"flag for South Sudan\"},{\"code\":\"ST\",\"emoji\":\"🇸🇹\",\"unicode\":\"U+1F1F8 U+1F1F9\",\"name\":\"Sao Tome and Principe\",\"title\":\"flag for Sao Tome and Principe\"},{\"code\":\"SV\",\"emoji\":\"🇸🇻\",\"unicode\":\"U+1F1F8 U+1F1FB\",\"name\":\"El Salvador\",\"title\":\"flag for El Salvador\"},{\"code\":\"SX\",\"emoji\":\"🇸🇽\",\"unicode\":\"U+1F1F8 U+1F1FD\",\"name\":\"Sint Maarten (Dutch Part)\",\"title\":\"flag for Sint Maarten (Dutch Part)\"},{\"code\":\"SY\",\"emoji\":\"🇸🇾\",\"unicode\":\"U+1F1F8 U+1F1FE\",\"name\":\"Syrian Arab Republic\",\"title\":\"flag for Syrian Arab Republic\"},{\"code\":\"SZ\",\"emoji\":\"🇸🇿\",\"unicode\":\"U+1F1F8 U+1F1FF\",\"name\":\"Swaziland\",\"title\":\"flag for Swaziland\"},{\"code\":\"TC\",\"emoji\":\"🇹🇨\",\"unicode\":\"U+1F1F9 U+1F1E8\",\"name\":\"Turks and Caicos Islands\",\"title\":\"flag for Turks and Caicos Islands\"},{\"code\":\"TD\",\"emoji\":\"🇹🇩\",\"unicode\":\"U+1F1F9 U+1F1E9\",\"name\":\"Chad\",\"title\":\"flag for Chad\"},{\"code\":\"TF\",\"emoji\":\"🇹🇫\",\"unicode\":\"U+1F1F9 U+1F1EB\",\"name\":\"French Southern Territories\",\"title\":\"flag for French Southern Territories\"},{\"code\":\"TG\",\"emoji\":\"🇹🇬\",\"unicode\":\"U+1F1F9 U+1F1EC\",\"name\":\"Togo\",\"title\":\"flag for Togo\"},{\"code\":\"TH\",\"emoji\":\"🇹🇭\",\"unicode\":\"U+1F1F9 U+1F1ED\",\"name\":\"Thailand\",\"title\":\"flag for Thailand\"},{\"code\":\"TJ\",\"emoji\":\"🇹🇯\",\"unicode\":\"U+1F1F9 U+1F1EF\",\"name\":\"Tajikistan\",\"title\":\"flag for Tajikistan\"},{\"code\":\"TK\",\"emoji\":\"🇹🇰\",\"unicode\":\"U+1F1F9 U+1F1F0\",\"name\":\"Tokelau\",\"title\":\"flag for Tokelau\"},{\"code\":\"TL\",\"emoji\":\"🇹🇱\",\"unicode\":\"U+1F1F9 U+1F1F1\",\"name\":\"Timor-Leste\",\"title\":\"flag for Timor-Leste\"},{\"code\":\"TM\",\"emoji\":\"🇹🇲\",\"unicode\":\"U+1F1F9 U+1F1F2\",\"name\":\"Turkmenistan\",\"title\":\"flag for Turkmenistan\"},{\"code\":\"TN\",\"emoji\":\"🇹🇳\",\"unicode\":\"U+1F1F9 U+1F1F3\",\"name\":\"Tunisia\",\"title\":\"flag for Tunisia\"},{\"code\":\"TO\",\"emoji\":\"🇹🇴\",\"unicode\":\"U+1F1F9 U+1F1F4\",\"name\":\"Tonga\",\"title\":\"flag for Tonga\"},{\"code\":\"TR\",\"emoji\":\"🇹🇷\",\"unicode\":\"U+1F1F9 U+1F1F7\",\"name\":\"Turkey\",\"title\":\"flag for Turkey\"},{\"code\":\"TT\",\"emoji\":\"🇹🇹\",\"unicode\":\"U+1F1F9 U+1F1F9\",\"name\":\"Trinidad and Tobago\",\"title\":\"flag for Trinidad and Tobago\"},{\"code\":\"TV\",\"emoji\":\"🇹🇻\",\"unicode\":\"U+1F1F9 U+1F1FB\",\"name\":\"Tuvalu\",\"title\":\"flag for Tuvalu\"},{\"code\":\"TW\",\"emoji\":\"🇹🇼\",\"unicode\":\"U+1F1F9 U+1F1FC\",\"name\":\"Taiwan\",\"title\":\"flag for Taiwan\"},{\"code\":\"TZ\",\"emoji\":\"🇹🇿\",\"unicode\":\"U+1F1F9 U+1F1FF\",\"name\":\"Tanzania\",\"title\":\"flag for Tanzania\"},{\"code\":\"UA\",\"emoji\":\"🇺🇦\",\"unicode\":\"U+1F1FA U+1F1E6\",\"name\":\"Ukraine\",\"title\":\"flag for Ukraine\"},{\"code\":\"UG\",\"emoji\":\"🇺🇬\",\"unicode\":\"U+1F1FA U+1F1EC\",\"name\":\"Uganda\",\"title\":\"flag for Uganda\"},{\"code\":\"UM\",\"emoji\":\"🇺🇲\",\"unicode\":\"U+1F1FA U+1F1F2\",\"name\":\"United States Minor Outlying Islands\",\"title\":\"flag for United States Minor Outlying Islands\"},{\"code\":\"US\",\"emoji\":\"🇺🇸\",\"unicode\":\"U+1F1FA U+1F1F8\",\"name\":\"United States\",\"title\":\"flag for United States\"},{\"code\":\"UY\",\"emoji\":\"🇺🇾\",\"unicode\":\"U+1F1FA U+1F1FE\",\"name\":\"Uruguay\",\"title\":\"flag for Uruguay\"},{\"code\":\"UZ\",\"emoji\":\"🇺🇿\",\"unicode\":\"U+1F1FA U+1F1FF\",\"name\":\"Uzbekistan\",\"title\":\"flag for Uzbekistan\"},{\"code\":\"VA\",\"emoji\":\"🇻🇦\",\"unicode\":\"U+1F1FB U+1F1E6\",\"name\":\"Vatican City\",\"title\":\"flag for Vatican City\"},{\"code\":\"VC\",\"emoji\":\"🇻🇨\",\"unicode\":\"U+1F1FB U+1F1E8\",\"name\":\"Saint Vincent and The Grenadines\",\"title\":\"flag for Saint Vincent and The Grenadines\"},{\"code\":\"VE\",\"emoji\":\"🇻🇪\",\"unicode\":\"U+1F1FB U+1F1EA\",\"name\":\"Venezuela\",\"title\":\"flag for Venezuela\"},{\"code\":\"VG\",\"emoji\":\"🇻🇬\",\"unicode\":\"U+1F1FB U+1F1EC\",\"name\":\"Virgin Islands, British\",\"title\":\"flag for Virgin Islands, British\"},{\"code\":\"VI\",\"emoji\":\"🇻🇮\",\"unicode\":\"U+1F1FB U+1F1EE\",\"name\":\"Virgin Islands, U.S.\",\"title\":\"flag for Virgin Islands, U.S.\"},{\"code\":\"VN\",\"emoji\":\"🇻🇳\",\"unicode\":\"U+1F1FB U+1F1F3\",\"name\":\"Viet Nam\",\"title\":\"flag for Viet Nam\"},{\"code\":\"VU\",\"emoji\":\"🇻🇺\",\"unicode\":\"U+1F1FB U+1F1FA\",\"name\":\"Vanuatu\",\"title\":\"flag for Vanuatu\"},{\"code\":\"WF\",\"emoji\":\"🇼🇫\",\"unicode\":\"U+1F1FC U+1F1EB\",\"name\":\"Wallis and Futuna\",\"title\":\"flag for Wallis and Futuna\"},{\"code\":\"WS\",\"emoji\":\"🇼🇸\",\"unicode\":\"U+1F1FC U+1F1F8\",\"name\":\"Samoa\",\"title\":\"flag for Samoa\"},{\"code\":\"YE\",\"emoji\":\"🇾🇪\",\"unicode\":\"U+1F1FE U+1F1EA\",\"name\":\"Yemen\",\"title\":\"flag for Yemen\"},{\"code\":\"YT\",\"emoji\":\"🇾🇹\",\"unicode\":\"U+1F1FE U+1F1F9\",\"name\":\"Mayotte\",\"title\":\"flag for Mayotte\"},{\"code\":\"ZA\",\"emoji\":\"🇿🇦\",\"unicode\":\"U+1F1FF U+1F1E6\",\"name\":\"South Africa\",\"title\":\"flag for South Africa\"},{\"code\":\"ZM\",\"emoji\":\"🇿🇲\",\"unicode\":\"U+1F1FF U+1F1F2\",\"name\":\"Zambia\",\"title\":\"flag for Zambia\"},{\"code\":\"ZW\",\"emoji\":\"🇿🇼\",\"unicode\":\"U+1F1FF U+1F1FC\",\"name\":\"Zimbabwe\",\"title\":\"flag for Zimbabwe\"}]");

/***/ }),

/***/ "./node_modules/emoji-flags/index.js":
/*!*******************************************!*\
  !*** ./node_modules/emoji-flags/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var data = __webpack_require__(/*! ./data.json */ "./node_modules/emoji-flags/data.json");
var find = __webpack_require__(/*! lodash.find */ "./node_modules/lodash.find/index.js");

var methods = {
  countryCode: function(countryCode) {
    if (!countryCode) {
      throw new Error('Expected 1 country code as the first argument');
    }

    return find(data, function(country) {
      return country.code === countryCode.toUpperCase();
    });
  },

  get data() {
    return data;
  }
};

['emoji', 'code', 'name', 'unicode'].forEach(function(prop) {
  Object.defineProperty(methods, prop + 's', {
    get: function() {
      return data.map(function(country) {
        return country[prop];
      });
    }
  });
});

// TODO: figure out if this is a good idea
data.forEach(function(prop, index) {
  methods[prop.code] = data[index];
});

module.exports = methods;


/***/ }),

/***/ "./node_modules/lodash._basecallback/index.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash._basecallback/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * lodash 3.3.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseIsEqual = __webpack_require__(/*! lodash._baseisequal */ "./node_modules/lodash._baseisequal/index.js"),
    bindCallback = __webpack_require__(/*! lodash._bindcallback */ "./node_modules/lodash._bindcallback/index.js"),
    isArray = __webpack_require__(/*! lodash.isarray */ "./node_modules/lodash.isarray/index.js"),
    pairs = __webpack_require__(/*! lodash.pairs */ "./node_modules/lodash.pairs/index.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `value` to a string if it's not one. An empty string is returned
 * for `null` or `undefined` values.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  return value == null ? '' : (value + '');
}

/**
 * The base implementation of `_.callback` which supports specifying the
 * number of arguments to provide to `func`.
 *
 * @private
 * @param {*} [func=_.identity] The value to convert to a callback.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {number} [argCount] The number of arguments to provide to `func`.
 * @returns {Function} Returns the callback.
 */
function baseCallback(func, thisArg, argCount) {
  var type = typeof func;
  if (type == 'function') {
    return thisArg === undefined
      ? func
      : bindCallback(func, thisArg, argCount);
  }
  if (func == null) {
    return identity;
  }
  if (type == 'object') {
    return baseMatches(func);
  }
  return thisArg === undefined
    ? property(func)
    : baseMatchesProperty(func, thisArg);
}

/**
 * The base implementation of `get` without support for string paths
 * and default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path of the property to get.
 * @param {string} [pathKey] The key representation of path.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path, pathKey) {
  if (object == null) {
    return;
  }
  if (pathKey !== undefined && pathKey in toObject(object)) {
    path = [pathKey];
  }
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[path[index++]];
  }
  return (index && index == length) ? object : undefined;
}

/**
 * The base implementation of `_.isMatch` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Array} matchData The propery names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparing objects.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = toObject(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var result = customizer ? customizer(objValue, srcValue, key) : undefined;
      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
        return false;
      }
    }
  }
  return true;
}

/**
 * The base implementation of `_.matches` which does not clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    var key = matchData[0][0],
        value = matchData[0][1];

    return function(object) {
      if (object == null) {
        return false;
      }
      return object[key] === value && (value !== undefined || (key in toObject(object)));
    };
  }
  return function(object) {
    return baseIsMatch(object, matchData);
  };
}

/**
 * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to compare.
 * @returns {Function} Returns the new function.
 */
function baseMatchesProperty(path, srcValue) {
  var isArr = isArray(path),
      isCommon = isKey(path) && isStrictComparable(srcValue),
      pathKey = (path + '');

  path = toPath(path);
  return function(object) {
    if (object == null) {
      return false;
    }
    var key = pathKey;
    object = toObject(object);
    if ((isArr || !isCommon) && !(key in object)) {
      object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
      if (object == null) {
        return false;
      }
      key = last(path);
      object = toObject(object);
    }
    return object[key] === srcValue
      ? (srcValue !== undefined || (key in object))
      : baseIsEqual(srcValue, object[key], undefined, true);
  };
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new function.
 */
function basePropertyDeep(path) {
  var pathKey = (path + '');
  path = toPath(path);
  return function(object) {
    return baseGet(object, path, pathKey);
  };
}

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  start = start == null ? 0 : (+start || 0);
  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = (end === undefined || end > length) ? length : (+end || 0);
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * Gets the propery names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = pairs(object),
      length = result.length;

  while (length--) {
    result[length][2] = isStrictComparable(result[length][1]);
  }
  return result;
}

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  var type = typeof value;
  if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
    return true;
  }
  if (isArray(value)) {
    return false;
  }
  var result = !reIsDeepProp.test(value);
  return result || (object != null && value in toObject(object));
}

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

/**
 * Converts `value` to an object if it's not one.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {Object} Returns the object.
 */
function toObject(value) {
  return isObject(value) ? value : Object(value);
}

/**
 * Converts `value` to property path array if it's not one.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {Array} Returns the property path array.
 */
function toPath(value) {
  if (isArray(value)) {
    return value;
  }
  var result = [];
  baseToString(value).replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
}

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array ? array.length : 0;
  return length ? array[length - 1] : undefined;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * This method returns the first argument provided to it.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'user': 'fred' };
 *
 * _.identity(object) === object;
 * // => true
 */
function identity(value) {
  return value;
}

/**
 * Creates a function that returns the property value at `path` on a
 * given object.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': { 'c': 2 } } },
 *   { 'a': { 'b': { 'c': 1 } } }
 * ];
 *
 * _.map(objects, _.property('a.b.c'));
 * // => [2, 1]
 *
 * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
}

module.exports = baseCallback;


/***/ }),

/***/ "./node_modules/lodash._baseeach/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash._baseeach/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var keys = __webpack_require__(/*! lodash.keys */ "./node_modules/lodash.keys/index.js");

/**
 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * The base implementation of `_.forEach` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object|string} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

/**
 * The base implementation of `baseForIn` and `baseForOwn` which iterates
 * over `object` properties returned by `keysFunc` invoking `iteratee` for
 * each property. Iteratee functions may exit iteration early by explicitly
 * returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

/**
 * The base implementation of `_.forOwn` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return baseFor(object, iteratee, keys);
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    var length = collection ? getLength(collection) : 0;
    if (!isLength(length)) {
      return eachFunc(collection, iteratee);
    }
    var index = fromRight ? length : -1,
        iterable = toObject(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

/**
 * Creates a base function for `_.forIn` or `_.forInRight`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var iterable = toObject(object),
        props = keysFunc(object),
        length = props.length,
        index = fromRight ? length : -1;

    while ((fromRight ? index-- : ++index < length)) {
      var key = props[index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Converts `value` to an object if it's not one.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {Object} Returns the object.
 */
function toObject(value) {
  return isObject(value) ? value : Object(value);
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = baseEach;


/***/ }),

/***/ "./node_modules/lodash._basefind/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash._basefind/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * The base implementation of `_.find`, `_.findLast`, `_.findKey`, and `_.findLastKey`,
 * without support for callback shorthands and `this` binding, which iterates
 * over `collection` using the provided `eachFunc`.
 *
 * @private
 * @param {Array|Object|string} collection The collection to search.
 * @param {Function} predicate The function invoked per iteration.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @param {boolean} [retKey] Specify returning the key of the found element
 *  instead of the element itself.
 * @returns {*} Returns the found element or its key, else `undefined`.
 */
function baseFind(collection, predicate, eachFunc, retKey) {
  var result;
  eachFunc(collection, function(value, key, collection) {
    if (predicate(value, key, collection)) {
      result = retKey ? key : value;
      return false;
    }
  });
  return result;
}

module.exports = baseFind;


/***/ }),

/***/ "./node_modules/lodash._basefindindex/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash._basefindindex/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash 3.6.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for callback shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to search.
 * @param {Function} predicate The function invoked per iteration.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromRight) {
  var length = array.length,
      index = fromRight ? length : -1;

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./node_modules/lodash._baseisequal/index.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash._baseisequal/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * lodash 3.0.7 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var isArray = __webpack_require__(/*! lodash.isarray */ "./node_modules/lodash.isarray/index.js"),
    isTypedArray = __webpack_require__(/*! lodash.istypedarray */ "./node_modules/lodash.istypedarray/index.js"),
    keys = __webpack_require__(/*! lodash.keys */ "./node_modules/lodash.keys/index.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    stringTag = '[object String]';

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/**
 * A specialized version of `_.some` for arrays without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.isEqual` without support for `this` binding
 * `customizer` functions.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparing values.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA] Tracks traversed `value` objects.
 * @param {Array} [stackB] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparing objects.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = objToString.call(object);
    if (objTag == argsTag) {
      objTag = objectTag;
    } else if (objTag != objectTag) {
      objIsArr = isTypedArray(object);
    }
  }
  if (!othIsArr) {
    othTag = objToString.call(other);
    if (othTag == argsTag) {
      othTag = objectTag;
    } else if (othTag != objectTag) {
      othIsArr = isTypedArray(other);
    }
  }
  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && !(objIsArr || objIsObj)) {
    return equalByTag(object, other, objTag);
  }
  if (!isLoose) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
    }
  }
  if (!isSameTag) {
    return false;
  }
  // Assume cyclic values are equal.
  // For more information on detecting circular references see https://es5.github.io/#JO.
  stackA || (stackA = []);
  stackB || (stackB = []);

  var length = stackA.length;
  while (length--) {
    if (stackA[length] == object) {
      return stackB[length] == other;
    }
  }
  // Add `object` and `other` to the stack of traversed objects.
  stackA.push(object);
  stackB.push(other);

  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);

  stackA.pop();
  stackB.pop();

  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparing arrays.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA] Tracks traversed `value` objects.
 * @param {Array} [stackB] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
  var index = -1,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
    return false;
  }
  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index],
        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;

    if (result !== undefined) {
      if (result) {
        continue;
      }
      return false;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (isLoose) {
      if (!arraySome(other, function(othValue) {
            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
          })) {
        return false;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
      return false;
    }
  }
  return true;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} value The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag) {
  switch (tag) {
    case boolTag:
    case dateTag:
      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
      return +object == +other;

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case numberTag:
      // Treat `NaN` vs. `NaN` as equal.
      return (object != +object)
        ? other != +other
        : object == +other;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings primitives and string
      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
      return object == (other + '');
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparing values.
 * @param {boolean} [isLoose] Specify performing partial comparisons.
 * @param {Array} [stackA] Tracks traversed `value` objects.
 * @param {Array} [stackB] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
  var objProps = keys(object),
      objLength = objProps.length,
      othProps = keys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isLoose) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  var skipCtor = isLoose;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key],
        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;

    // Recursively compare objects (susceptible to call stack limits).
    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
      return false;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (!skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      return false;
    }
  }
  return true;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash._bindcallback/index.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash._bindcallback/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * A specialized version of `baseCallback` which only supports `this` binding
 * and specifying the number of arguments to provide to `func`.
 *
 * @private
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {number} [argCount] The number of arguments to provide to `func`.
 * @returns {Function} Returns the callback.
 */
function bindCallback(func, thisArg, argCount) {
  if (typeof func != 'function') {
    return identity;
  }
  if (thisArg === undefined) {
    return func;
  }
  switch (argCount) {
    case 1: return function(value) {
      return func.call(thisArg, value);
    };
    case 3: return function(value, index, collection) {
      return func.call(thisArg, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(thisArg, accumulator, value, index, collection);
    };
    case 5: return function(value, other, key, object, source) {
      return func.call(thisArg, value, other, key, object, source);
    };
  }
  return function() {
    return func.apply(thisArg, arguments);
  };
}

/**
 * This method returns the first argument provided to it.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'user': 'fred' };
 *
 * _.identity(object) === object;
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = bindCallback;


/***/ }),

/***/ "./node_modules/lodash._getnative/index.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash._getnative/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash.find/index.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash.find/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * lodash 3.2.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseCallback = __webpack_require__(/*! lodash._basecallback */ "./node_modules/lodash._basecallback/index.js"),
    baseEach = __webpack_require__(/*! lodash._baseeach */ "./node_modules/lodash._baseeach/index.js"),
    baseFind = __webpack_require__(/*! lodash._basefind */ "./node_modules/lodash._basefind/index.js"),
    baseFindIndex = __webpack_require__(/*! lodash._basefindindex */ "./node_modules/lodash._basefindindex/index.js"),
    isArray = __webpack_require__(/*! lodash.isarray */ "./node_modules/lodash.isarray/index.js");

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new find function.
 */
function createFind(eachFunc, fromRight) {
  return function(collection, predicate, thisArg) {
    predicate = baseCallback(predicate, thisArg, 3);
    if (isArray(collection)) {
      var index = baseFindIndex(collection, predicate, fromRight);
      return index > -1 ? collection[index] : undefined;
    }
    return baseFind(collection, predicate, eachFunc);
  };
}

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is bound to `thisArg` and
 * invoked with three arguments: (value, index|key, collection).
 *
 * If a property name is provided for `predicate` the created `_.property`
 * style callback returns the property value of the given element.
 *
 * If a value is also provided for `thisArg` the created `_.matchesProperty`
 * style callback returns `true` for elements that have a matching property
 * value, else `false`.
 *
 * If an object is provided for `predicate` the created `_.matches` style
 * callback returns `true` for elements that have the properties of the given
 * object, else `false`.
 *
 * @static
 * @memberOf _
 * @alias detect
 * @category Collection
 * @param {Array|Object|string} collection The collection to search.
 * @param {Function|Object|string} [predicate=_.identity] The function invoked
 *  per iteration.
 * @param {*} [thisArg] The `this` binding of `predicate`.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.result(_.find(users, function(chr) {
 *   return chr.age < 40;
 * }), 'user');
 * // => 'barney'
 *
 * // using the `_.matches` callback shorthand
 * _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
 * // => 'pebbles'
 *
 * // using the `_.matchesProperty` callback shorthand
 * _.result(_.find(users, 'active', false), 'user');
 * // => 'fred'
 *
 * // using the `_.property` callback shorthand
 * _.result(_.find(users, 'active'), 'user');
 * // => 'barney'
 */
var find = createFind(baseEach);

module.exports = find;


/***/ }),

/***/ "./node_modules/lodash.isarguments/index.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash.isarguments/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash.isarray/index.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash.isarray/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/** `Object#toString` result references. */
var arrayTag = '[object Array]',
    funcTag = '[object Function]';

/** Used to detect host constructors (Safari > 5). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/**
 * Checks if `value` is object-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var fnToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/* Native method references for those with the same name as other `lodash` methods. */
var nativeIsArray = getNative(Array, 'isArray');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = object == null ? undefined : object[key];
  return isNative(value) ? value : undefined;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(function() { return arguments; }());
 * // => false
 */
var isArray = nativeIsArray || function(value) {
  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
};

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in older versions of Chrome and Safari which return 'function' for regexes
  // and Safari 8 equivalents which return 'object' for typed array constructors.
  return isObject(value) && objToString.call(value) == funcTag;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is a native function.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 * @example
 *
 * _.isNative(Array.prototype.push);
 * // => true
 *
 * _.isNative(_);
 * // => false
 */
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(fnToString.call(value));
  }
  return isObjectLike(value) && reIsHostCtor.test(value);
}

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash.istypedarray/index.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash.istypedarray/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash 3.0.6 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length,
 *  else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 *  else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
function isTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
}

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash.keys/index.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash.keys/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var getNative = __webpack_require__(/*! lodash._getnative */ "./node_modules/lodash._getnative/index.js"),
    isArguments = __webpack_require__(/*! lodash.isarguments */ "./node_modules/lodash.isarguments/index.js"),
    isArray = __webpack_require__(/*! lodash.isarray */ "./node_modules/lodash.isarray/index.js");

/** Used to detect unsigned integer values. */
var reIsUint = /^\d+$/;

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/* Native method references for those with the same name as other `lodash` methods. */
var nativeKeys = getNative(Object, 'keys');

/**
 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
 * of an array-like value.
 */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Gets the "length" property value of `object`.
 *
 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
 * that affects Safari on at least iOS 8.1-8.3 ARM64.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {*} Returns the "length" value.
 */
var getLength = baseProperty('length');

/**
 * Checks if `value` is array-like.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 */
function isArrayLike(value) {
  return value != null && isLength(getLength(value));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return value > -1 && value % 1 == 0 && value < length;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * A fallback implementation of `Object.keys` which creates an array of the
 * own enumerable property names of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function shimKeys(object) {
  var props = keysIn(object),
      propsLength = props.length,
      length = propsLength && object.length;

  var allowIndexes = !!length && isLength(length) &&
    (isArray(object) || isArguments(object));

  var index = -1,
      result = [];

  while (++index < propsLength) {
    var key = props[index];
    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
var keys = !nativeKeys ? shimKeys : function(object) {
  var Ctor = object == null ? undefined : object.constructor;
  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
      (typeof object != 'function' && isArrayLike(object))) {
    return shimKeys(object);
  }
  return isObject(object) ? nativeKeys(object) : [];
};

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  if (object == null) {
    return [];
  }
  if (!isObject(object)) {
    object = Object(object);
  }
  var length = object.length;
  length = (length && isLength(length) &&
    (isArray(object) || isArguments(object)) && length) || 0;

  var Ctor = object.constructor,
      index = -1,
      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
      result = Array(length),
      skipIndexes = length > 0;

  while (++index < length) {
    result[index] = (index + '');
  }
  for (var key in object) {
    if (!(skipIndexes && isIndex(key, length)) &&
        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash.pairs/index.js":
/*!********************************************!*\
  !*** ./node_modules/lodash.pairs/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * lodash 3.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var keys = __webpack_require__(/*! lodash.keys */ "./node_modules/lodash.keys/index.js");

/**
 * Converts `value` to an object if it's not one.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {Object} Returns the object.
 */
function toObject(value) {
  return isObject(value) ? value : Object(value);
}

/**
 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Creates a two dimensional array of the key-value pairs for `object`,
 * e.g. `[[key1, value1], [key2, value2]]`.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the new array of key-value pairs.
 * @example
 *
 * _.pairs({ 'barney': 36, 'fred': 40 });
 * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
 */
function pairs(object) {
  object = toObject(object);

  var index = -1,
      props = keys(object),
      length = props.length,
      result = Array(length);

  while (++index < length) {
    var key = props[index];
    result[index] = [key, object[key]];
  }
  return result;
}

module.exports = pairs;


/***/ })

})
//# sourceMappingURL=index.js.d8865ef2413ab9eaf572.hot-update.js.map