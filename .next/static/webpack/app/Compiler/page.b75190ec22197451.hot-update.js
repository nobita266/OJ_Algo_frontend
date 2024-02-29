"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Compiler/page",{

/***/ "(app-pages-browser)/./src/app/Compiler/page.js":
/*!**********************************!*\
  !*** ./src/app/Compiler/page.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/code */ \"(app-pages-browser)/./src/app/api/code.js\");\n/* harmony import */ var _api_problems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/problems */ \"(app-pages-browser)/./src/app/api/problems.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction page() {\n    _s();\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [output, setOutput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"cpp\");\n    const [problemNumber, setproblemNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [statement, setStatement] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [examples, setExamples] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [constraints, setConstraints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProblemDetails = async ()=>{\n            try {\n                const res = await (0,_api_problems__WEBPACK_IMPORTED_MODULE_3__.problem)(problemNumber);\n                const qusDetails = await res.json();\n                setName(qusDetails.name);\n                setStatement(qusDetails.statement);\n                setExamples(qusDetails.examples);\n                setConstraints(qusDetails.constraints);\n                console.log(qusDetails);\n            } catch (error) {\n                console.error(\"Error fetching problem details:\", error);\n            }\n        };\n        fetchProblemDetails();\n    }, [\n        problemNumber\n    ]);\n    const handleSubmit = async ()=>{\n        // e.preventDefault();\n        const payload = {\n            language,\n            code\n        };\n        try {\n            const { data } = await (0,_api_code__WEBPACK_IMPORTED_MODULE_2__.printOutput)(payload);\n            setOutput(data.output + \"hello world!\");\n            console.log(data);\n        } catch (err) {\n            console.log(err.response);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-screen flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"left w-1/2 h-screen bg-red-300 flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: problemNumber\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: statement\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: examples\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: constraints\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"right w-1/2 h-screen bg-slate-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-bold text-3xl\",\n                        children: \"online code compiler\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Language: \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                value: language,\n                                onChange: (e)=>{\n                                    setLanguage(e.target.value);\n                                    console.log(e.target.value);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"cpp\",\n                                        children: \"c++\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"py\",\n                                        children: \"python\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                                lineNumber: 64,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        rows: \"20\",\n                        cols: \"75\",\n                        className: \"h-3/4 w-full bg-slate-300 \",\n                        value: code,\n                        onChange: (e)=>{\n                            e.preventDefault();\n                            setCode(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"submit_code bg-green-700 rounded-sm text-white w-1/2 \",\n                        onClick: handleSubmit,\n                        children: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: output\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"nHCV6xp7J8zs3cDWdss/WxHMEvs=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29tcGlsZXIvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNtRDtBQUN6QjtBQUNnQjtBQUNBO0FBRTFDLFNBQVNNOztJQUNQLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNPLFFBQVFDLFVBQVUsR0FBR1IsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1csZUFBZUMsaUJBQWlCLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ2EsTUFBTUMsUUFBUSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNlLFdBQVdDLGFBQWEsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2lCLFVBQVVDLFlBQVksR0FBR2xCLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDbUIsYUFBYUMsZUFBZSxHQUFHcEIsK0NBQVFBLENBQUM7SUFDL0NELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTXNCLHNCQUFzQjtZQUMxQixJQUFJO2dCQUNGLE1BQU1DLE1BQU0sTUFBTW5CLHNEQUFPQSxDQUFDUTtnQkFDMUIsTUFBTVksYUFBYSxNQUFNRCxJQUFJRSxJQUFJO2dCQUVqQ1YsUUFBUVMsV0FBV1YsSUFBSTtnQkFDdkJHLGFBQWFPLFdBQVdSLFNBQVM7Z0JBQ2pDRyxZQUFZSyxXQUFXTixRQUFRO2dCQUMvQkcsZUFBZUcsV0FBV0osV0FBVztnQkFDckNNLFFBQVFDLEdBQUcsQ0FBQ0g7WUFDZCxFQUFFLE9BQU9JLE9BQU87Z0JBQ2RGLFFBQVFFLEtBQUssQ0FBQyxtQ0FBbUNBO1lBQ25EO1FBQ0Y7UUFFQU47SUFDRixHQUFHO1FBQUNWO0tBQWM7SUFFbEIsTUFBTWlCLGVBQWU7UUFDbkIsc0JBQXNCO1FBQ3RCLE1BQU1DLFVBQVU7WUFDZHBCO1lBQ0FKO1FBQ0Y7UUFDQSxJQUFJO1lBQ0YsTUFBTSxFQUFFeUIsSUFBSSxFQUFFLEdBQUcsTUFBTTVCLHNEQUFXQSxDQUFDMkI7WUFDbkNyQixVQUFVc0IsS0FBS3ZCLE1BQU0sR0FBRztZQUV4QmtCLFFBQVFDLEdBQUcsQ0FBQ0k7UUFDZCxFQUFFLE9BQU9DLEtBQUs7WUFDWk4sUUFBUUMsR0FBRyxDQUFDSyxJQUFJQyxRQUFRO1FBQzFCO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7OzBDQUNDLDhEQUFDQzswQ0FBTXpCOzs7Ozs7NEJBQXFCOzRCQUFFRTs7Ozs7OztrQ0FFaEMsOERBQUN3QjtrQ0FBR3RCOzs7Ozs7a0NBQ0osOERBQUN1QjtrQ0FBSXJCOzs7Ozs7a0NBQ0wsOERBQUNvQjtrQ0FBR2xCOzs7Ozs7Ozs7Ozs7MEJBRU4sOERBQUNjO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQXFCOzs7Ozs7a0NBQ25DLDhEQUFDRTs7MENBQ0MsOERBQUNHOzBDQUFNOzs7Ozs7MENBQ1AsOERBQUNDO2dDQUNDQyxPQUFPaEM7Z0NBQ1BpQyxVQUFVLENBQUNDO29DQUNUakMsWUFBWWlDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQ0FDMUJoQixRQUFRQyxHQUFHLENBQUNpQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0NBQzVCOztrREFFQSw4REFBQ0k7d0NBQU9KLE9BQU07a0RBQU07Ozs7OztrREFDcEIsOERBQUNJO3dDQUFPSixPQUFNO2tEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSXZCLDhEQUFDSzt3QkFDQ0MsTUFBSzt3QkFDTEMsTUFBSzt3QkFDTGQsV0FBVTt3QkFDVk8sT0FBT3BDO3dCQUNQcUMsVUFBVSxDQUFDQzs0QkFDVEEsRUFBRU0sY0FBYzs0QkFDaEIzQyxRQUFRcUMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO3dCQUN4Qjs7Ozs7O2tDQUVGLDhEQUFDUzs7Ozs7a0NBQ0QsOERBQUNDO3dCQUNDakIsV0FBVTt3QkFDVmtCLFNBQVN4QjtrQ0FDVjs7Ozs7O2tDQUdELDhEQUFDTztrQ0FBSTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJYjtHQTFGU0g7QUE0RlQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9Db21waWxlci9wYWdlLmpzPzgwMTciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgcHJpbnRPdXRwdXQgfSBmcm9tIFwiLi4vYXBpL2NvZGVcIjtcclxuaW1wb3J0IHsgcHJvYmxlbSB9IGZyb20gXCIuLi9hcGkvcHJvYmxlbXNcIjtcclxuXHJcbmZ1bmN0aW9uIHBhZ2UoKSB7XHJcbiAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW291dHB1dCwgc2V0T3V0cHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsYW5ndWFnZSwgc2V0TGFuZ3VhZ2VdID0gdXNlU3RhdGUoXCJjcHBcIik7XHJcbiAgY29uc3QgW3Byb2JsZW1OdW1iZXIsIHNldHByb2JsZW1OdW1iZXJdID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N0YXRlbWVudCwgc2V0U3RhdGVtZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtleGFtcGxlcywgc2V0RXhhbXBsZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtjb25zdHJhaW50cywgc2V0Q29uc3RyYWludHNdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoUHJvYmxlbURldGFpbHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcHJvYmxlbShwcm9ibGVtTnVtYmVyKTtcclxuICAgICAgICBjb25zdCBxdXNEZXRhaWxzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgc2V0TmFtZShxdXNEZXRhaWxzLm5hbWUpO1xyXG4gICAgICAgIHNldFN0YXRlbWVudChxdXNEZXRhaWxzLnN0YXRlbWVudCk7XHJcbiAgICAgICAgc2V0RXhhbXBsZXMocXVzRGV0YWlscy5leGFtcGxlcyk7XHJcbiAgICAgICAgc2V0Q29uc3RyYWludHMocXVzRGV0YWlscy5jb25zdHJhaW50cyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocXVzRGV0YWlscyk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHByb2JsZW0gZGV0YWlsczpcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoUHJvYmxlbURldGFpbHMoKTtcclxuICB9LCBbcHJvYmxlbU51bWJlcl0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICBsYW5ndWFnZSxcclxuICAgICAgY29kZSxcclxuICAgIH07XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHByaW50T3V0cHV0KHBheWxvYWQpO1xyXG4gICAgICBzZXRPdXRwdXQoZGF0YS5vdXRwdXQgKyBcImhlbGxvIHdvcmxkIVwiKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LXNjcmVlbiBmbGV4XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdCB3LTEvMiBoLXNjcmVlbiBiZy1yZWQtMzAwIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICA8c3Bhbj57cHJvYmxlbU51bWJlcn08L3NwYW4+IHtuYW1lfVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPHA+e3N0YXRlbWVudH08L3A+XHJcbiAgICAgICAgPGgzPntleGFtcGxlc308L2gzPlxyXG4gICAgICAgIDxwPntjb25zdHJhaW50c308L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IHctMS8yIGgtc2NyZWVuIGJnLXNsYXRlLTEwMFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0zeGxcIj5vbmxpbmUgY29kZSBjb21waWxlcjwvaDE+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICA8bGFiZWw+TGFuZ3VhZ2U6IDwvbGFiZWw+XHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIHZhbHVlPXtsYW5ndWFnZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0TGFuZ3VhZ2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNwcFwiPmMrKzwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHlcIj5weXRob248L29wdGlvbj5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICByb3dzPVwiMjBcIlxyXG4gICAgICAgICAgY29scz1cIjc1XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtMy80IHctZnVsbCBiZy1zbGF0ZS0zMDAgXCJcclxuICAgICAgICAgIHZhbHVlPXtjb2RlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0Q29kZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInN1Ym1pdF9jb2RlIGJnLWdyZWVuLTcwMCByb3VuZGVkLXNtIHRleHQtd2hpdGUgdy0xLzIgXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBzdWJtaXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8aDE+e291dHB1dH08L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJwcmludE91dHB1dCIsInByb2JsZW0iLCJwYWdlIiwiY29kZSIsInNldENvZGUiLCJvdXRwdXQiLCJzZXRPdXRwdXQiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwicHJvYmxlbU51bWJlciIsInNldHByb2JsZW1OdW1iZXIiLCJuYW1lIiwic2V0TmFtZSIsInN0YXRlbWVudCIsInNldFN0YXRlbWVudCIsImV4YW1wbGVzIiwic2V0RXhhbXBsZXMiLCJjb25zdHJhaW50cyIsInNldENvbnN0cmFpbnRzIiwiZmV0Y2hQcm9ibGVtRGV0YWlscyIsInJlcyIsInF1c0RldGFpbHMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiaGFuZGxlU3VibWl0IiwicGF5bG9hZCIsImRhdGEiLCJlcnIiLCJyZXNwb25zZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3BhbiIsInAiLCJoMyIsImxhYmVsIiwic2VsZWN0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvcHRpb24iLCJ0ZXh0YXJlYSIsInJvd3MiLCJjb2xzIiwicHJldmVudERlZmF1bHQiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Compiler/page.js\n"));

/***/ })

});