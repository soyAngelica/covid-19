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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\fullstack\\covid-19\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function useStats() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      stats = _useState[0],
      setStats = _useState[1];

  var url = 'https://covid19.mathdro.id/api';
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    function fetchData() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('Fetching Data');
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url).then(function (res) {
                return res.json();
              }));

            case 3:
              data = _context.sent;
              setStats(data);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }

    fetchData();
  }, []);
  return stats;
}

function Stats() {
  var stats = useStats();
  if (!stats) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Loading...");
  console.log(stats);
  return __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
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
      lineNumber: 44
    },
    __self: this
  }, "puto", __jsx(Stats, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.9078e3a996639af79a2e.hot-update.js.map