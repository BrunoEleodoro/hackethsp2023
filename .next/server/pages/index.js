"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _taikai_dappkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @taikai/dappkit */ \"@taikai/dappkit\");\n/* harmony import */ var _taikai_dappkit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_taikai_dappkit__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Home() {\n    const { 0: web3Host , 1: setWeb3Host  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"https://kovan.infura.io/v3/\");\n    const { 0: privateKey , 1: setPrivateKey  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: web3Connection , 1: setWeb3Connection  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const { 0: address , 1: setAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function connect() {\n        const _web3Connection = new _taikai_dappkit__WEBPACK_IMPORTED_MODULE_3__.Web3Connection({\n            web3Host,\n            privateKey\n        });\n        _web3Connection.start();\n        if (!_web3Connection.options.privateKey) await _web3Connection.connect();\n        setAddress(await _web3Connection.getAddress());\n        setWeb3Connection(_web3Connection);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"@taikai/dappkit\"\n                }, void 0, false, {\n                    fileName: \"/Users/bruno/Projetos/hackethsp2023/pages/index.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/bruno/Projetos/hackethsp2023/pages/index.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {}, void 0, false, {\n                fileName: \"/Users/bruno/Projetos/hackethsp2023/pages/index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bruno/Projetos/hackethsp2023/pages/index.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNJO0FBQ2dCO0FBRWxDLFNBQVNHLElBQUksR0FBRztJQUM3QixNQUFNLEtBQUNDLFFBQVEsTUFBRUMsV0FBVyxNQUFJSiwrQ0FBUSxDQUFDLDZCQUE2QixDQUFDO0lBQ3ZFLE1BQU0sS0FBQ0ssVUFBVSxNQUFFQyxhQUFhLE1BQUlOLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ2hELE1BQU0sS0FBQ08sY0FBYyxNQUFFQyxpQkFBaUIsTUFBSVIsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFDMUQsTUFBTSxLQUFDUyxPQUFPLE1BQUVDLFVBQVUsTUFBSVYsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFFMUMsZUFBZVcsT0FBTyxHQUFHO1FBQ3ZCLE1BQU1DLGVBQWUsR0FBRyxJQUFJWCwyREFBYyxDQUFDO1lBQUVFLFFBQVE7WUFBRUUsVUFBVTtTQUFFLENBQUM7UUFDcEVPLGVBQWUsQ0FBQ0MsS0FBSyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDRCxlQUFlLENBQUNFLE9BQU8sQ0FBQ1QsVUFBVSxFQUFFLE1BQU1PLGVBQWUsQ0FBQ0QsT0FBTyxFQUFFLENBQUM7UUFDekVELFVBQVUsQ0FBQyxNQUFNRSxlQUFlLENBQUNHLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDL0NQLGlCQUFpQixDQUFDSSxlQUFlLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQscUJBQ0UsOERBQUNJLEtBQUc7OzBCQUNGLDhEQUFDakIsa0RBQUk7MEJBQ0gsNEVBQUNrQixPQUFLOzhCQUFDLGlCQUFlOzs7Ozt3QkFBUTs7Ozs7b0JBQ3pCOzBCQUVQLDhEQUFDQyxNQUFJOzs7O29CQUVFOzs7Ozs7WUFDSCxDQUNOO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLXNmZ3RzLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBXZWIzQ29ubmVjdGlvbiB9IGZyb20gJ0B0YWlrYWkvZGFwcGtpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt3ZWIzSG9zdCwgc2V0V2ViM0hvc3RdID0gdXNlU3RhdGUoJ2h0dHBzOi8va292YW4uaW5mdXJhLmlvL3YzLycpO1xuICBjb25zdCBbcHJpdmF0ZUtleSwgc2V0UHJpdmF0ZUtleV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt3ZWIzQ29ubmVjdGlvbiwgc2V0V2ViM0Nvbm5lY3Rpb25dID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKTtcblxuICBhc3luYyBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgIGNvbnN0IF93ZWIzQ29ubmVjdGlvbiA9IG5ldyBXZWIzQ29ubmVjdGlvbih7IHdlYjNIb3N0LCBwcml2YXRlS2V5IH0pO1xuICAgIF93ZWIzQ29ubmVjdGlvbi5zdGFydCgpO1xuICAgIGlmICghX3dlYjNDb25uZWN0aW9uLm9wdGlvbnMucHJpdmF0ZUtleSkgYXdhaXQgX3dlYjNDb25uZWN0aW9uLmNvbm5lY3QoKTtcbiAgICBzZXRBZGRyZXNzKGF3YWl0IF93ZWIzQ29ubmVjdGlvbi5nZXRBZGRyZXNzKCkpO1xuICAgIHNldFdlYjNDb25uZWN0aW9uKF93ZWIzQ29ubmVjdGlvbik7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5AdGFpa2FpL2RhcHBraXQ8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgXG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVN0YXRlIiwiV2ViM0Nvbm5lY3Rpb24iLCJIb21lIiwid2ViM0hvc3QiLCJzZXRXZWIzSG9zdCIsInByaXZhdGVLZXkiLCJzZXRQcml2YXRlS2V5Iiwid2ViM0Nvbm5lY3Rpb24iLCJzZXRXZWIzQ29ubmVjdGlvbiIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwiY29ubmVjdCIsIl93ZWIzQ29ubmVjdGlvbiIsInN0YXJ0Iiwib3B0aW9ucyIsImdldEFkZHJlc3MiLCJkaXYiLCJ0aXRsZSIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@taikai/dappkit":
/*!**********************************!*\
  !*** external "@taikai/dappkit" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@taikai/dappkit");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();