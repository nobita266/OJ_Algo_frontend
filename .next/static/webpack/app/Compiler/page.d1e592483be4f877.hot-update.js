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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/code */ \"(app-pages-browser)/./src/app/api/code.js\");\n/* harmony import */ var _api_problems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/problems */ \"(app-pages-browser)/./src/app/api/problems.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction page() {\n    _s();\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [output, setOutput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"cpp\");\n    const [problemNumber, setproblemNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [statement, setStatement] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [examples, setExamples] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [constraints, setConstraints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProblemDetails = async ()=>{\n            try {\n                const res = await (0,_api_problems__WEBPACK_IMPORTED_MODULE_3__.problem)(problemNumber);\n                const qusDetails = await res.json();\n                setName(qusDetails.name);\n                setStatement(qusDetails.statement);\n                setExamples(qusDetails.examples);\n                setConstraints(qusDetails.constraints);\n                console.log(qusDetails);\n            } catch (error) {\n                console.error(\"Error fetching problem details:\", error);\n            }\n        };\n        fetchProblemDetails();\n    }, [\n        problemNumber\n    ]);\n    const handleSubmit = async ()=>{\n        // e.preventDefault();\n        const payload = {\n            language,\n            code\n        };\n        try {\n            const { data } = await (0,_api_code__WEBPACK_IMPORTED_MODULE_2__.printOutput)(payload);\n            setOutput(data.output + \"hello world!\");\n            console.log(data);\n        } catch (err) {\n            console.log(err.response);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-screen flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"left w-1/2 h-screen bg-red-300 flex flex-col gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: problemNumber\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"problem statment: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                                lineNumber: 57,\n                                columnNumber: 29\n                            }, this),\n                            \" \",\n                            statement\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: examples.map((example, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Input:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                                                lineNumber: 63,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" \",\n                                            example.input\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Output:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" \",\n                                            example.output\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Explanation:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" \",\n                                            example.explanation\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"constraints:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this),\n                            constraints\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"right w-1/2 h-screen bg-slate-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-bold text-3xl\",\n                        children: \"online code compiler\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Language: \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                                lineNumber: 84,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                value: language,\n                                onChange: (e)=>{\n                                    setLanguage(e.target.value);\n                                    console.log(e.target.value);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"cpp\",\n                                        children: \"c++\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"py\",\n                                        children: \"python\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        rows: \"20\",\n                        cols: \"75\",\n                        className: \"h-3/4 w-full bg-slate-300 \",\n                        value: code,\n                        onChange: (e)=>{\n                            e.preventDefault();\n                            setCode(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"submit_code bg-green-700 rounded-sm text-white w-1/2 \",\n                        onClick: handleSubmit,\n                        children: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: output\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\Compiler\\\\page.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"nHCV6xp7J8zs3cDWdss/WxHMEvs=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29tcGlsZXIvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNtRDtBQUN6QjtBQUNnQjtBQUNBO0FBRTFDLFNBQVNNOztJQUNQLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNPLFFBQVFDLFVBQVUsR0FBR1IsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDUyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1csZUFBZUMsaUJBQWlCLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ2EsTUFBTUMsUUFBUSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNlLFdBQVdDLGFBQWEsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ2lCLFVBQVVDLFlBQVksR0FBR2xCLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDbUIsYUFBYUMsZUFBZSxHQUFHcEIsK0NBQVFBLENBQUM7SUFDL0NELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTXNCLHNCQUFzQjtZQUMxQixJQUFJO2dCQUNGLE1BQU1DLE1BQU0sTUFBTW5CLHNEQUFPQSxDQUFDUTtnQkFDMUIsTUFBTVksYUFBYSxNQUFNRCxJQUFJRSxJQUFJO2dCQUVqQ1YsUUFBUVMsV0FBV1YsSUFBSTtnQkFDdkJHLGFBQWFPLFdBQVdSLFNBQVM7Z0JBQ2pDRyxZQUFZSyxXQUFXTixRQUFRO2dCQUMvQkcsZUFBZUcsV0FBV0osV0FBVztnQkFDckNNLFFBQVFDLEdBQUcsQ0FBQ0g7WUFDZCxFQUFFLE9BQU9JLE9BQU87Z0JBQ2RGLFFBQVFFLEtBQUssQ0FBQyxtQ0FBbUNBO1lBQ25EO1FBQ0Y7UUFFQU47SUFDRixHQUFHO1FBQUNWO0tBQWM7SUFFbEIsTUFBTWlCLGVBQWU7UUFDbkIsc0JBQXNCO1FBQ3RCLE1BQU1DLFVBQVU7WUFDZHBCO1lBQ0FKO1FBQ0Y7UUFDQSxJQUFJO1lBQ0YsTUFBTSxFQUFFeUIsSUFBSSxFQUFFLEdBQUcsTUFBTTVCLHNEQUFXQSxDQUFDMkI7WUFDbkNyQixVQUFVc0IsS0FBS3ZCLE1BQU0sR0FBRztZQUV4QmtCLFFBQVFDLEdBQUcsQ0FBQ0k7UUFDZCxFQUFFLE9BQU9DLEtBQUs7WUFDWk4sUUFBUUMsR0FBRyxDQUFDSyxJQUFJQyxRQUFRO1FBQzFCO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7OzBDQUNaLDhEQUFDRTswQ0FBTXpCOzs7Ozs7NEJBQXFCOzRCQUFFRTs7Ozs7OztrQ0FFaEMsOERBQUN3Qjs7NEJBQUU7MENBQ2lCLDhEQUFDQzs7Ozs7NEJBQUs7NEJBQUV2Qjs7Ozs7OztrQ0FFNUIsOERBQUNrQjtrQ0FDRWhCLFNBQVNzQixHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3RCLDhEQUFDUjs7a0RBQ0MsOERBQUNJOzswREFDQyw4REFBQ0s7MERBQU87Ozs7Ozs0Q0FBZTs0Q0FBRUYsUUFBUUcsS0FBSzs7Ozs7OztrREFFeEMsOERBQUNOOzswREFDQyw4REFBQ0s7MERBQU87Ozs7Ozs0Q0FBZ0I7NENBQUVGLFFBQVFqQyxNQUFNOzs7Ozs7O2tEQUUxQyw4REFBQzhCOzswREFDQyw4REFBQ0s7MERBQU87Ozs7Ozs0Q0FBcUI7NENBQUVGLFFBQVFJLFdBQVc7Ozs7Ozs7OytCQVI1Q0g7Ozs7Ozs7Ozs7a0NBYWQsOERBQUNKOzs0QkFDRTswQ0FDRCw4REFBQ0s7MENBQU87Ozs7OzswQ0FDUiw4REFBQ0o7Ozs7OzRCQUNBbkI7Ozs7Ozs7Ozs7Ozs7MEJBR0wsOERBQUNjO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQXFCOzs7Ozs7a0NBQ25DLDhEQUFDRTs7MENBQ0MsOERBQUNTOzBDQUFNOzs7Ozs7MENBQ1AsOERBQUNDO2dDQUNDQyxPQUFPdEM7Z0NBQ1B1QyxVQUFVLENBQUNDO29DQUNUdkMsWUFBWXVDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQ0FDMUJ0QixRQUFRQyxHQUFHLENBQUN1QixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0NBQzVCOztrREFFQSw4REFBQ0k7d0NBQU9KLE9BQU07a0RBQU07Ozs7OztrREFDcEIsOERBQUNJO3dDQUFPSixPQUFNO2tEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSXZCLDhEQUFDSzt3QkFDQ0MsTUFBSzt3QkFDTEMsTUFBSzt3QkFDTHBCLFdBQVU7d0JBQ1ZhLE9BQU8xQzt3QkFDUDJDLFVBQVUsQ0FBQ0M7NEJBQ1RBLEVBQUVNLGNBQWM7NEJBQ2hCakQsUUFBUTJDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDeEI7Ozs7OztrQ0FFRiw4REFBQ1Q7Ozs7O2tDQUNELDhEQUFDa0I7d0JBQ0N0QixXQUFVO3dCQUNWdUIsU0FBUzdCO2tDQUNWOzs7Ozs7a0NBR0QsOERBQUNPO2tDQUFJNUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUliO0dBL0dTSDtBQWlIVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0NvbXBpbGVyL3BhZ2UuanM/ODAxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBwcmludE91dHB1dCB9IGZyb20gXCIuLi9hcGkvY29kZVwiO1xyXG5pbXBvcnQgeyBwcm9ibGVtIH0gZnJvbSBcIi4uL2FwaS9wcm9ibGVtc1wiO1xyXG5cclxuZnVuY3Rpb24gcGFnZSgpIHtcclxuICBjb25zdCBbY29kZSwgc2V0Q29kZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb3V0cHV0LCBzZXRPdXRwdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZShcImNwcFwiKTtcclxuICBjb25zdCBbcHJvYmxlbU51bWJlciwgc2V0cHJvYmxlbU51bWJlcl0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RhdGVtZW50LCBzZXRTdGF0ZW1lbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2V4YW1wbGVzLCBzZXRFeGFtcGxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NvbnN0cmFpbnRzLCBzZXRDb25zdHJhaW50c10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hQcm9ibGVtRGV0YWlscyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBwcm9ibGVtKHByb2JsZW1OdW1iZXIpO1xyXG4gICAgICAgIGNvbnN0IHF1c0RldGFpbHMgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgICBzZXROYW1lKHF1c0RldGFpbHMubmFtZSk7XHJcbiAgICAgICAgc2V0U3RhdGVtZW50KHF1c0RldGFpbHMuc3RhdGVtZW50KTtcclxuICAgICAgICBzZXRFeGFtcGxlcyhxdXNEZXRhaWxzLmV4YW1wbGVzKTtcclxuICAgICAgICBzZXRDb25zdHJhaW50cyhxdXNEZXRhaWxzLmNvbnN0cmFpbnRzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhxdXNEZXRhaWxzKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcHJvYmxlbSBkZXRhaWxzOlwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hQcm9ibGVtRGV0YWlscygpO1xyXG4gIH0sIFtwcm9ibGVtTnVtYmVyXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgIGxhbmd1YWdlLFxyXG4gICAgICBjb2RlLFxyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcHJpbnRPdXRwdXQocGF5bG9hZCk7XHJcbiAgICAgIHNldE91dHB1dChkYXRhLm91dHB1dCArIFwiaGVsbG8gd29ybGQhXCIpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHctc2NyZWVuIGZsZXhcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0IHctMS8yIGgtc2NyZWVuIGJnLXJlZC0zMDAgZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5cclxuICAgICAgICAgIDxzcGFuPntwcm9ibGVtTnVtYmVyfTwvc3Bhbj4ge25hbWV9XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIHByb2JsZW0gc3RhdG1lbnQ6IDxiciAvPiB7c3RhdGVtZW50fVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge2V4YW1wbGVzLm1hcCgoZXhhbXBsZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+SW5wdXQ6PC9zdHJvbmc+IHtleGFtcGxlLmlucHV0fVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+T3V0cHV0Ojwvc3Ryb25nPiB7ZXhhbXBsZS5vdXRwdXR9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5FeHBsYW5hdGlvbjo8L3N0cm9uZz4ge2V4YW1wbGUuZXhwbGFuYXRpb259XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgPHN0cm9uZz5jb25zdHJhaW50czo8L3N0cm9uZz5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAge2NvbnN0cmFpbnRzfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQgdy0xLzIgaC1zY3JlZW4gYmctc2xhdGUtMTAwXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTN4bFwiPm9ubGluZSBjb2RlIGNvbXBpbGVyPC9oMT5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIDxsYWJlbD5MYW5ndWFnZTogPC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgdmFsdWU9e2xhbmd1YWdlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRMYW5ndWFnZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY3BwXCI+YysrPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJweVwiPnB5dGhvbjwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHJvd3M9XCIyMFwiXHJcbiAgICAgICAgICBjb2xzPVwiNzVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC0zLzQgdy1mdWxsIGJnLXNsYXRlLTMwMCBcIlxyXG4gICAgICAgICAgdmFsdWU9e2NvZGV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXRDb2RlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic3VibWl0X2NvZGUgYmctZ3JlZW4tNzAwIHJvdW5kZWQtc20gdGV4dC13aGl0ZSB3LTEvMiBcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHN1Ym1pdFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxoMT57b3V0cHV0fTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsInByaW50T3V0cHV0IiwicHJvYmxlbSIsInBhZ2UiLCJjb2RlIiwic2V0Q29kZSIsIm91dHB1dCIsInNldE91dHB1dCIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJwcm9ibGVtTnVtYmVyIiwic2V0cHJvYmxlbU51bWJlciIsIm5hbWUiLCJzZXROYW1lIiwic3RhdGVtZW50Iiwic2V0U3RhdGVtZW50IiwiZXhhbXBsZXMiLCJzZXRFeGFtcGxlcyIsImNvbnN0cmFpbnRzIiwic2V0Q29uc3RyYWludHMiLCJmZXRjaFByb2JsZW1EZXRhaWxzIiwicmVzIiwicXVzRGV0YWlscyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJwYXlsb2FkIiwiZGF0YSIsImVyciIsInJlc3BvbnNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwicCIsImJyIiwibWFwIiwiZXhhbXBsZSIsImluZGV4Iiwic3Ryb25nIiwiaW5wdXQiLCJleHBsYW5hdGlvbiIsImxhYmVsIiwic2VsZWN0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvcHRpb24iLCJ0ZXh0YXJlYSIsInJvd3MiLCJjb2xzIiwicHJldmVudERlZmF1bHQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Compiler/page.js\n"));

/***/ })

});