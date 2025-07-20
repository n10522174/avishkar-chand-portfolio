/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/PhoneSection.tsx":
/*!*************************************!*\
  !*** ./components/PhoneSection.tsx ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/About */ \"./components/About.tsx\");\n/* harmony import */ var _components_Experience__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Experience */ \"./components/Experience.tsx\");\n/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Projects */ \"./components/Projects.tsx\");\n/* harmony import */ var _components_Skills__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Skills */ \"./components/Skills.tsx\");\n/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Contact */ \"./components/Contact.tsx\");\n/* harmony import */ var _components_PhoneSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PhoneSection */ \"./components/PhoneSection.tsx\");\n/* harmony import */ var _components_PhoneSection__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_PhoneSection__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nconst Hero = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(()=>__webpack_require__.e(/*! import() */ \"components_Hero_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/Hero */ \"./components/Hero.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"pages/index.tsx -> \" + \"../components/Hero\"\n        ]\n    },\n    ssr: false\n});\n_c = Hero;\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Avi Chand – Data Engineer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/avichand/Desktop/avishkar-chand-portfolio/pages/index.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Portfolio of Avi Chand, Data Engineer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/avichand/Desktop/avishkar-chand-portfolio/pages/index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/avichand/Desktop/avishkar-chand-portfolio/pages/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-black min-h-screen text-white scroll-smooth\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Hero, {}, void 0, false, {\n                        fileName: \"/Users/avichand/Desktop/avishkar-chand-portfolio/pages/index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_About__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/avichand/Desktop/avishkar-chand-portfolio/pages/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Experience__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/avichand/Desktop/avishkar-chand-portfolio/pages/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/avichand/Desktop/avishkar-chand-portfolio/pages/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Skills__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/avichand/Desktop/avishkar-chand-portfolio/pages/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Contact__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/avichand/Desktop/avishkar-chand-portfolio/pages/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_PhoneSection__WEBPACK_IMPORTED_MODULE_8___default()), {}, void 0, false, {\n                        fileName: \"/Users/avichand/Desktop/avishkar-chand-portfolio/pages/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/avichand/Desktop/avishkar-chand-portfolio/pages/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"Hero\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ047QUFFVztBQUNVO0FBQ0o7QUFDSjtBQUNFO0FBQ1U7QUFHdEQsTUFBTVEsT0FBT1IsbURBQU9BLENBQUMsSUFBTSxtS0FBTzs7Ozs7O0lBQXlCUyxLQUFLOztLQUExREQ7QUFFUyxTQUFTRTtJQUN0QixxQkFDRTs7MEJBQ0UsOERBQUNULGtEQUFJQTs7a0NBQ0gsOERBQUNVO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBRW5DLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNSOzs7OztrQ0FDRCw4REFBQ04seURBQUtBOzs7OztrQ0FDTiw4REFBQ0MsOERBQVVBOzs7OztrQ0FDWCw4REFBQ0MsNERBQVFBOzs7OztrQ0FDVCw4REFBQ0MsMERBQU1BOzs7OztrQ0FDUCw4REFBQ0MsMkRBQU9BOzs7OztrQ0FDUiw4REFBQ0MsaUVBQVlBOzs7Ozs7Ozs7Ozs7O0FBSXJCO01BbEJ3QkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBBYm91dCBmcm9tICcuLi9jb21wb25lbnRzL0Fib3V0JztcbmltcG9ydCBFeHBlcmllbmNlIGZyb20gJy4uL2NvbXBvbmVudHMvRXhwZXJpZW5jZSc7XG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9qZWN0cyc7XG5pbXBvcnQgU2tpbGxzIGZyb20gJy4uL2NvbXBvbmVudHMvU2tpbGxzJztcbmltcG9ydCBDb250YWN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdCc7XG5pbXBvcnQgUGhvbmVTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUGhvbmVTZWN0aW9uJztcblxuXG5jb25zdCBIZXJvID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvSGVybycpLCB7IHNzcjogZmFsc2UgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+QXZpIENoYW5kIOKAkyBEYXRhIEVuZ2luZWVyPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J1BvcnRmb2xpbyBvZiBBdmkgQ2hhbmQsIERhdGEgRW5naW5lZXInIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctYmxhY2sgbWluLWgtc2NyZWVuIHRleHQtd2hpdGUgc2Nyb2xsLXNtb290aCc+XG4gICAgICAgIDxIZXJvIC8+XG4gICAgICAgIDxBYm91dCAvPlxuICAgICAgICA8RXhwZXJpZW5jZSAvPlxuICAgICAgICA8UHJvamVjdHMgLz5cbiAgICAgICAgPFNraWxscyAvPlxuICAgICAgICA8Q29udGFjdCAvPlxuICAgICAgICA8UGhvbmVTZWN0aW9uIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn0iXSwibmFtZXMiOlsiZHluYW1pYyIsIkhlYWQiLCJBYm91dCIsIkV4cGVyaWVuY2UiLCJQcm9qZWN0cyIsIlNraWxscyIsIkNvbnRhY3QiLCJQaG9uZVNlY3Rpb24iLCJIZXJvIiwic3NyIiwiSG9tZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});