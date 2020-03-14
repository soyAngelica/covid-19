webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\fullstack\\covid-19\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function useStats() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      stats = _useState[0],
      setStats = _useState[1];

  var url = 'https://covid19.mathdro.id/api';
  setStats('algo'); // useEffect(() => {
  //     async function fetchData() {
  //         console.log('Fetching Data');
  //         const data = await fetch(url)
  //         .then(res => res.json());
  //         setStats(data);
  //     }
  //     fetchData();
  // }, []);

  return stats;
}

function Stats() {
  var stats = useStats();
  if (!stats) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Loading...");
  console.log(stats);
  return __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "stats") // <div>
  //     <div>
  //         <h3>Confirmados</h3>
  //         <p>{stats.confirmed.value}</p>
  //     </div>
  //     <div>
  //         <h3>Muertos</h3>
  //         <p>{stats.deaths.value}</p>
  //     </div>
  //     <div>
  //         <h3>Curados</h3>
  //         <p>{stats.recovered.value}</p>
  //     </div>
  // </div>
  ;
}

function Index() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "puto", __jsx(Stats, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.e1fbf7c21565fe1e6f67.hot-update.js.map