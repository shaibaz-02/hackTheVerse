"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"About\": function() { return /* reexport safe */ _About_About__WEBPACK_IMPORTED_MODULE_2__.About; },\n/* harmony export */   \"FAQ\": function() { return /* reexport safe */ _FAQ_FAQ__WEBPACK_IMPORTED_MODULE_6__.FAQ; },\n/* harmony export */   \"Footer\": function() { return /* reexport safe */ _Footer_Footer__WEBPACK_IMPORTED_MODULE_4__.Footer; },\n/* harmony export */   \"JoinDiscordBtn\": function() { return /* reexport safe */ _JoinDiscordBtn_JoinDiscordBtn__WEBPACK_IMPORTED_MODULE_8__.JoinDiscordBtn; },\n/* harmony export */   \"Main\": function() { return /* reexport safe */ _Main_Main__WEBPACK_IMPORTED_MODULE_1__.Main; },\n/* harmony export */   \"Navbar\": function() { return /* reexport safe */ _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_0__.Navbar; },\n/* harmony export */   \"Prizes\": function() { return /* reexport safe */ _Prizes_Prizes__WEBPACK_IMPORTED_MODULE_7__.Prizes; },\n/* harmony export */   \"Rules\": function() { return /* reexport safe */ _Rules_Rules__WEBPACK_IMPORTED_MODULE_5__.Rules; },\n/* harmony export */   \"Tracks\": function() { return /* reexport safe */ _Tracks_Tracks__WEBPACK_IMPORTED_MODULE_3__.Tracks; }\n/* harmony export */ });\n/* harmony import */ var _Navbar_Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar/Navbar */ \"./components/Navbar/Navbar.jsx\");\n/* harmony import */ var _Main_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main/Main */ \"./components/Main/Main.jsx\");\n/* harmony import */ var _About_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About/About */ \"./components/About/About.jsx\");\n/* harmony import */ var _Tracks_Tracks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tracks/Tracks */ \"./components/Tracks/Tracks.jsx\");\n/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer/Footer */ \"./components/Footer/Footer.jsx\");\n/* harmony import */ var _Rules_Rules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Rules/Rules */ \"./components/Rules/Rules.jsx\");\n/* harmony import */ var _FAQ_FAQ__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FAQ/FAQ */ \"./components/FAQ/FAQ.jsx\");\n/* harmony import */ var _Prizes_Prizes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Prizes/Prizes */ \"./components/Prizes/Prizes.jsx\");\n/* harmony import */ var _JoinDiscordBtn_JoinDiscordBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./JoinDiscordBtn/JoinDiscordBtn */ \"./components/JoinDiscordBtn/JoinDiscordBtn.jsx\");\n\n\n//export { ApplyWithDevfolioBtn } from \"./ApplyWithDevfolioBtn/ApplyWithDevfolioBtn\";\n\n// export { Sponsors } from \"./Sponsors/Sponsors\";\n\n// export { Timeline } from \"./Timeline/Timeline\";\n\n\n\n\n//export { DevfolioPrizes } from \"./DevfolioPrizes/DevfolioPrizes\";\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNOO0FBQ25DLHFGQUFxRjtBQUMvQztBQUN0QyxrREFBa0Q7QUFDVDtBQUN6QyxrREFBa0Q7QUFDVDtBQUNIO0FBQ047QUFDUztBQUN6QyxtRUFBbUU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2luZGV4LmpzPzUwZDMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgTmF2YmFyIH0gZnJvbSBcIi4vTmF2YmFyL05hdmJhclwiO1xuZXhwb3J0IHsgTWFpbiB9IGZyb20gXCIuL01haW4vTWFpblwiO1xuLy9leHBvcnQgeyBBcHBseVdpdGhEZXZmb2xpb0J0biB9IGZyb20gXCIuL0FwcGx5V2l0aERldmZvbGlvQnRuL0FwcGx5V2l0aERldmZvbGlvQnRuXCI7XG5leHBvcnQgeyBBYm91dCB9IGZyb20gXCIuL0Fib3V0L0Fib3V0XCI7XG4vLyBleHBvcnQgeyBTcG9uc29ycyB9IGZyb20gXCIuL1Nwb25zb3JzL1Nwb25zb3JzXCI7XG5leHBvcnQgeyBUcmFja3MgfSBmcm9tIFwiLi9UcmFja3MvVHJhY2tzXCI7XG4vLyBleHBvcnQgeyBUaW1lbGluZSB9IGZyb20gXCIuL1RpbWVsaW5lL1RpbWVsaW5lXCI7XG5leHBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi9Gb290ZXIvRm9vdGVyXCI7XG5leHBvcnQgeyBSdWxlcyB9IGZyb20gXCIuL1J1bGVzL1J1bGVzXCI7XG5leHBvcnQgeyBGQVEgfSBmcm9tIFwiLi9GQVEvRkFRXCI7XG5leHBvcnQgeyBQcml6ZXMgfSBmcm9tIFwiLi9Qcml6ZXMvUHJpemVzXCI7XG4vL2V4cG9ydCB7IERldmZvbGlvUHJpemVzIH0gZnJvbSBcIi4vRGV2Zm9saW9Qcml6ZXMvRGV2Zm9saW9Qcml6ZXNcIjtcbmV4cG9ydCB7IEpvaW5EaXNjb3JkQnRuIH0gZnJvbSBcIi4vSm9pbkRpc2NvcmRCdG4vSm9pbkRpc2NvcmRCdG5cIjtcbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJNYWluIiwiQWJvdXQiLCJUcmFja3MiLCJGb290ZXIiLCJSdWxlcyIsIkZBUSIsIlByaXplcyIsIkpvaW5EaXNjb3JkQnRuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/index.js\n"));

/***/ })

});