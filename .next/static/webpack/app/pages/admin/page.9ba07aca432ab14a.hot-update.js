/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/admin/page",{

/***/ "(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=C%3A%5CUsers%5CROG%20STRIX%5CDesktop%5Coj_alg0%5Cfrontend%5Csrc%5Capp%5Cpages%5Cadmin%5Cpage.js&server=false!":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=C%3A%5CUsers%5CROG%20STRIX%5CDesktop%5Coj_alg0%5Cfrontend%5Csrc%5Capp%5Cpages%5Cadmin%5Cpage.js&server=false! ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! ./src/app/pages/admin/page.js */ \"(app-pages-browser)/./src/app/pages/admin/page.js\"))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtZmxpZ2h0LWNsaWVudC1lbnRyeS1sb2FkZXIuanM/bW9kdWxlcz1DJTNBJTVDVXNlcnMlNUNST0clMjBTVFJJWCU1Q0Rlc2t0b3AlNUNval9hbGcwJTVDZnJvbnRlbmQlNUNzcmMlNUNhcHAlNUNwYWdlcyU1Q2FkbWluJTVDcGFnZS5qcyZzZXJ2ZXI9ZmFsc2UhIiwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/Y2RlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyBcIkM6XFxcXFVzZXJzXFxcXFJPRyBTVFJJWFxcXFxEZXNrdG9wXFxcXG9qX2FsZzBcXFxcZnJvbnRlbmRcXFxcc3JjXFxcXGFwcFxcXFxwYWdlc1xcXFxhZG1pblxcXFxwYWdlLmpzXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?modules=C%3A%5CUsers%5CROG%20STRIX%5CDesktop%5Coj_alg0%5Cfrontend%5Csrc%5Capp%5Cpages%5Cadmin%5Cpage.js&server=false!\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/pages/admin/page.js":
/*!*************************************!*\
  !*** ./src/app/pages/admin/page.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_component_accordion_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/component/accordion/accordion */ \"(app-pages-browser)/./src/app/component/accordion/accordion.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n // Adjust the import path as necessary\nfunction Page() {\n    _s();\n    const [formState, setFormState] = useState({\n        problemNumber: \"\",\n        name: \"\",\n        statement: \"\",\n        constraints: \"\"\n    });\n    const handleChange = (e)=>{\n        setFormState({\n            ...formState,\n            [e.target.name]: e.target.value\n        });\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        // Here you would handle the form submission, e.g., sending the data to your backend\n        console.log(formState);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Admin Panel\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\admin\\\\page.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_component_accordion_accordion__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"Add more problems\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"space-y-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"problemNumber\",\n                                    className: \"block text-sm font-medium text-gray-700\",\n                                    children: \"Problem Number\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\admin\\\\page.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"number\",\n                                    name: \"problemNumber\",\n                                    id: \"problemNumber\",\n                                    value: formState.problemNumber,\n                                    onChange: handleChange,\n                                    className: \"mt-1 block w-full p-2 border border-gray-300 rounded-md\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\admin\\\\page.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\admin\\\\page.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"name\",\n                                    className: \"block text-sm font-medium text-gray-700\",\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\admin\\\\page.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"name\",\n                                    id: \"name\",\n                                    value: formState.name,\n                                    onChange: handleChange,\n                                    className: \"mt-1 block w-full p-2 border border-gray-300 rounded-md\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\admin\\\\page.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\admin\\\\page.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"statement\",\n                                    className: \"block text-sm font-medium text-gray-700\",\n                                    children: \"Statement\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\admin\\\\page.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    name: \"statement\",\n                                    id: \"statement\",\n                                    value: formState.statement,\n                                    onChange: handleChange,\n                                    className: \"mt-1 block w-full p-2 border border-gray-300 rounded-md\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\admin\\\\page.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\admin\\\\page.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"constraints\",\n                                    className: \"block text-sm font-medium text-gray-700\",\n                                    children: \"Constraints\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\admin\\\\page.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    name: \"constraints\",\n                                    id: \"constraints\",\n                                    value: formState.constraints,\n                                    onChange: handleChange,\n                                    className: \"mt-1 block w-full p-2 border border-gray-300 rounded-md\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\admin\\\\page.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\admin\\\\page.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"px-4 py-2 bg-blue-500 text-white rounded-md\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\admin\\\\page.js\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\admin\\\\page.js\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\admin\\\\page.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\admin\\\\page.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_component_accordion_accordion__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: \"Delete or add problems\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Content for deleting or adding problems.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\admin\\\\page.js\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\admin\\\\page.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\admin\\\\page.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"fbgxIeFRcZtCL6AfjOdUJIaETyY=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvYWRtaW4vcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzBCO0FBQ2tDLENBQUMsc0NBQXNDO0FBRW5HLFNBQVNFOztJQUNQLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHQyxTQUFTO1FBQ3pDQyxlQUFlO1FBQ2ZDLE1BQU07UUFDTkMsV0FBVztRQUNYQyxhQUFhO0lBQ2Y7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCUCxhQUFhO1lBQ1gsR0FBR0QsU0FBUztZQUNaLENBQUNRLEVBQUVDLE1BQU0sQ0FBQ0wsSUFBSSxDQUFDLEVBQUVJLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztRQUNqQztJQUNGO0lBRUEsTUFBTUMsZUFBZSxDQUFDSDtRQUNwQkEsRUFBRUksY0FBYztRQUNoQixvRkFBb0Y7UUFDcEZDLFFBQVFDLEdBQUcsQ0FBQ2Q7SUFDZDtJQUNBLHFCQUNFLDhEQUFDZTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTBCOzs7Ozs7MEJBQ3hDLDhEQUFDbEIsMEVBQVNBO2dCQUFDb0IsT0FBTTswQkFDZiw0RUFBQ0M7b0JBQUtDLFVBQVVUO29CQUFjSyxXQUFVOztzQ0FDdEMsOERBQUNEOzs4Q0FDQyw4REFBQ007b0NBQ0NDLFNBQVE7b0NBQ1JOLFdBQVU7OENBQ1g7Ozs7Ozs4Q0FHRCw4REFBQ087b0NBQ0NDLE1BQUs7b0NBQ0xwQixNQUFLO29DQUNMcUIsSUFBRztvQ0FDSGYsT0FBT1YsVUFBVUcsYUFBYTtvQ0FDOUJ1QixVQUFVbkI7b0NBQ1ZTLFdBQVU7b0NBQ1ZXLFFBQVE7Ozs7Ozs7Ozs7OztzQ0FHWiw4REFBQ1o7OzhDQUNDLDhEQUFDTTtvQ0FDQ0MsU0FBUTtvQ0FDUk4sV0FBVTs4Q0FDWDs7Ozs7OzhDQUdELDhEQUFDTztvQ0FDQ0MsTUFBSztvQ0FDTHBCLE1BQUs7b0NBQ0xxQixJQUFHO29DQUNIZixPQUFPVixVQUFVSSxJQUFJO29DQUNyQnNCLFVBQVVuQjtvQ0FDVlMsV0FBVTtvQ0FDVlcsUUFBUTs7Ozs7Ozs7Ozs7O3NDQUdaLDhEQUFDWjs7OENBQ0MsOERBQUNNO29DQUNDQyxTQUFRO29DQUNSTixXQUFVOzhDQUNYOzs7Ozs7OENBR0QsOERBQUNZO29DQUNDeEIsTUFBSztvQ0FDTHFCLElBQUc7b0NBQ0hmLE9BQU9WLFVBQVVLLFNBQVM7b0NBQzFCcUIsVUFBVW5CO29DQUNWUyxXQUFVO29DQUNWVyxRQUFROzs7Ozs7Ozs7Ozs7c0NBR1osOERBQUNaOzs4Q0FDQyw4REFBQ007b0NBQ0NDLFNBQVE7b0NBQ1JOLFdBQVU7OENBQ1g7Ozs7Ozs4Q0FHRCw4REFBQ1k7b0NBQ0N4QixNQUFLO29DQUNMcUIsSUFBRztvQ0FDSGYsT0FBT1YsVUFBVU0sV0FBVztvQ0FDNUJvQixVQUFVbkI7b0NBQ1ZTLFdBQVU7b0NBQ1ZXLFFBQVE7Ozs7Ozs7Ozs7OztzQ0FHWiw4REFBQ1o7c0NBQ0MsNEVBQUNjO2dDQUNDTCxNQUFLO2dDQUNMUixXQUFVOzBDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU1QLDhEQUFDbEIsMEVBQVNBO2dCQUFDb0IsT0FBTTswQkFDZiw0RUFBQ1k7OEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVg7R0ExR1MvQjtLQUFBQTtBQTRHVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2VzL2FkbWluL3BhZ2UuanM/OGEyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gXCJAL2FwcC9jb21wb25lbnQvYWNjb3JkaW9uL2FjY29yZGlvblwiOyAvLyBBZGp1c3QgdGhlIGltcG9ydCBwYXRoIGFzIG5lY2Vzc2FyeVxyXG5cclxuZnVuY3Rpb24gUGFnZSgpIHtcclxuICBjb25zdCBbZm9ybVN0YXRlLCBzZXRGb3JtU3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgcHJvYmxlbU51bWJlcjogXCJcIixcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBzdGF0ZW1lbnQ6IFwiXCIsXHJcbiAgICBjb25zdHJhaW50czogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldEZvcm1TdGF0ZSh7XHJcbiAgICAgIC4uLmZvcm1TdGF0ZSxcclxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBIZXJlIHlvdSB3b3VsZCBoYW5kbGUgdGhlIGZvcm0gc3VibWlzc2lvbiwgZS5nLiwgc2VuZGluZyB0aGUgZGF0YSB0byB5b3VyIGJhY2tlbmRcclxuICAgIGNvbnNvbGUubG9nKGZvcm1TdGF0ZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+QWRtaW4gUGFuZWw8L2gxPlxyXG4gICAgICA8QWNjb3JkaW9uIHRpdGxlPVwiQWRkIG1vcmUgcHJvYmxlbXNcIj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgIGh0bWxGb3I9XCJwcm9ibGVtTnVtYmVyXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUHJvYmxlbSBOdW1iZXJcclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInByb2JsZW1OdW1iZXJcIlxyXG4gICAgICAgICAgICAgIGlkPVwicHJvYmxlbU51bWJlclwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1TdGF0ZS5wcm9ibGVtTnVtYmVyfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgcC0yIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgaHRtbEZvcj1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybVN0YXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCBwLTIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICBodG1sRm9yPVwic3RhdGVtZW50XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU3RhdGVtZW50XHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJzdGF0ZW1lbnRcIlxyXG4gICAgICAgICAgICAgIGlkPVwic3RhdGVtZW50XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybVN0YXRlLnN0YXRlbWVudH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHAtMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgIGh0bWxGb3I9XCJjb25zdHJhaW50c1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENvbnN0cmFpbnRzXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjb25zdHJhaW50c1wiXHJcbiAgICAgICAgICAgICAgaWQ9XCJjb25zdHJhaW50c1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1TdGF0ZS5jb25zdHJhaW50c31cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHAtMiBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctYmx1ZS01MDAgdGV4dC13aGl0ZSByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgIDxBY2NvcmRpb24gdGl0bGU9XCJEZWxldGUgb3IgYWRkIHByb2JsZW1zXCI+XHJcbiAgICAgICAgPHA+Q29udGVudCBmb3IgZGVsZXRpbmcgb3IgYWRkaW5nIHByb2JsZW1zLjwvcD5cclxuICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBY2NvcmRpb24iLCJQYWdlIiwiZm9ybVN0YXRlIiwic2V0Rm9ybVN0YXRlIiwidXNlU3RhdGUiLCJwcm9ibGVtTnVtYmVyIiwibmFtZSIsInN0YXRlbWVudCIsImNvbnN0cmFpbnRzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ0aXRsZSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInRleHRhcmVhIiwiYnV0dG9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/admin/page.js\n"));

/***/ })

});