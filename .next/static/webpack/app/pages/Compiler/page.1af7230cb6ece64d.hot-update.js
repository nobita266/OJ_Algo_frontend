"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/Compiler/page",{

/***/ "(app-pages-browser)/./src/app/pages/Compiler/page.js":
/*!****************************************!*\
  !*** ./src/app/pages/Compiler/page.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/code */ \"(app-pages-browser)/./src/app/pages/api/code.js\");\n/* harmony import */ var _api_problems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/problems */ \"(app-pages-browser)/./src/app/pages/api/problems.js\");\n/* harmony import */ var _api_problems__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_api_problems__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction page() {\n    _s();\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [output, setOutput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"cpp\");\n    const [problemNumber, setproblemNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [statement, setStatement] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [examples, setExamples] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [constraints, setConstraints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProblemDetails = async ()=>{\n            try {\n                const res = await (0,_api_problems__WEBPACK_IMPORTED_MODULE_3__.problem)(problemNumber);\n                const qusDetails = await res.json();\n                setName(qusDetails.name);\n                setStatement(qusDetails.statement);\n                setExamples(qusDetails.examples);\n                setConstraints(qusDetails.constraints);\n                console.log(qusDetails);\n            } catch (error) {\n                console.error(\"Error fetching problem details:\", error);\n            }\n        };\n        fetchProblemDetails();\n    }, [\n        problemNumber\n    ]);\n    const handleSubmit = async ()=>{\n        // e.preventDefault();\n        const payload = {\n            language,\n            code\n        };\n        try {\n            const { data } = await (0,_api_code__WEBPACK_IMPORTED_MODULE_2__.printOutput)(payload);\n            setOutput(data.output + \"hello world!\");\n            console.log(data);\n        } catch (err) {\n            console.log(err.response);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-screen flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"left w-1/2 h-screen bg-red-300 flex flex-col gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: problemNumber\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: [\n                                    \"problem statment: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 31\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            statement\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: examples.map((example, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Input:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" \",\n                                            example.input\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Output:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" \",\n                                            example.output\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Explanation:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" \",\n                                            example.explanation\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"constraints:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            constraints\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"right w-1/2 h-screen bg-slate-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-bold text-3xl\",\n                        children: \"online code compiler\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Language: \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                value: language,\n                                onChange: (e)=>{\n                                    setLanguage(e.target.value);\n                                    console.log(e.target.value);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"cpp\",\n                                        children: \"c++\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"py\",\n                                        children: \"python\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        rows: \"20\",\n                        cols: \"75\",\n                        className: \"h-3/4 w-full bg-slate-300 \",\n                        value: code,\n                        onChange: (e)=>{\n                            e.preventDefault();\n                            setCode(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"submit_code bg-green-700 rounded-sm text-white w-1/2 \",\n                        onClick: handleSubmit,\n                        children: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"submit_code bg-blue-700 rounded-sm text-white w-1/2 \",\n                        onClick: handleSubmit,\n                        children: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: output\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                        lineNumber: 125,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\page.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"nHCV6xp7J8zs3cDWdss/WxHMEvs=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvQ29tcGlsZXIvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDbUQ7QUFDekI7QUFDZ0I7QUFDQTtBQUUxQyxTQUFTTTs7SUFDUCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDTyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNXLGVBQWVDLGlCQUFpQixHQUFHWiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNhLE1BQU1DLFFBQVEsR0FBR2QsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDZSxXQUFXQyxhQUFhLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNpQixVQUFVQyxZQUFZLEdBQUdsQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ21CLGFBQWFDLGVBQWUsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQy9DRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1zQixzQkFBc0I7WUFDMUIsSUFBSTtnQkFDRixNQUFNQyxNQUFNLE1BQU1uQixzREFBT0EsQ0FBQ1E7Z0JBQzFCLE1BQU1ZLGFBQWEsTUFBTUQsSUFBSUUsSUFBSTtnQkFFakNWLFFBQVFTLFdBQVdWLElBQUk7Z0JBQ3ZCRyxhQUFhTyxXQUFXUixTQUFTO2dCQUNqQ0csWUFBWUssV0FBV04sUUFBUTtnQkFDL0JHLGVBQWVHLFdBQVdKLFdBQVc7Z0JBQ3JDTSxRQUFRQyxHQUFHLENBQUNIO1lBQ2QsRUFBRSxPQUFPSSxPQUFPO2dCQUNkRixRQUFRRSxLQUFLLENBQUMsbUNBQW1DQTtZQUNuRDtRQUNGO1FBRUFOO0lBQ0YsR0FBRztRQUFDVjtLQUFjO0lBRWxCLE1BQU1pQixlQUFlO1FBQ25CLHNCQUFzQjtRQUN0QixNQUFNQyxVQUFVO1lBQ2RwQjtZQUNBSjtRQUNGO1FBQ0EsSUFBSTtZQUNGLE1BQU0sRUFBRXlCLElBQUksRUFBRSxHQUFHLE1BQU01QixzREFBV0EsQ0FBQzJCO1lBQ25DckIsVUFBVXNCLEtBQUt2QixNQUFNLEdBQUc7WUFFeEJrQixRQUFRQyxHQUFHLENBQUNJO1FBQ2QsRUFBRSxPQUFPQyxLQUFLO1lBQ1pOLFFBQVFDLEdBQUcsQ0FBQ0ssSUFBSUMsUUFBUTtRQUMxQjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVOzswQ0FDWiw4REFBQ0U7MENBQU16Qjs7Ozs7OzRCQUFxQjs0QkFBRUU7Ozs7Ozs7a0NBRWhDLDhEQUFDd0I7OzBDQUNDLDhEQUFDQzs7b0NBQU87a0RBQ1ksOERBQUNDOzs7Ozs7Ozs7Ozs0QkFDWDs0QkFDVHhCOzs7Ozs7O2tDQUVILDhEQUFDa0I7a0NBQ0VoQixTQUFTdUIsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUN0Qiw4REFBQ1Q7O2tEQUNDLDhEQUFDSTs7MERBQ0MsOERBQUNDOzBEQUFPOzs7Ozs7NENBQWU7NENBQUVHLFFBQVFFLEtBQUs7Ozs7Ozs7a0RBRXhDLDhEQUFDTjs7MERBQ0MsOERBQUNDOzBEQUFPOzs7Ozs7NENBQWdCOzRDQUFFRyxRQUFRbEMsTUFBTTs7Ozs7OztrREFFMUMsOERBQUM4Qjs7MERBQ0MsOERBQUNDOzBEQUFPOzs7Ozs7NENBQXFCOzRDQUFFRyxRQUFRRyxXQUFXOzs7Ozs7OzsrQkFSNUNGOzs7Ozs7Ozs7O2tDQWFkLDhEQUFDTDs7NEJBQ0U7MENBQ0QsOERBQUNDOzBDQUFPOzs7Ozs7MENBQ1IsOERBQUNDOzs7Ozs0QkFDQXBCOzs7Ozs7Ozs7Ozs7OzBCQUdMLDhEQUFDYztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFxQjs7Ozs7O2tDQUNuQyw4REFBQ0U7OzBDQUNDLDhEQUFDUzswQ0FBTTs7Ozs7OzBDQUNQLDhEQUFDQztnQ0FDQ0MsT0FBT3RDO2dDQUNQdUMsVUFBVSxDQUFDQztvQ0FDVHZDLFlBQVl1QyxFQUFFQyxNQUFNLENBQUNILEtBQUs7b0NBQzFCdEIsUUFBUUMsR0FBRyxDQUFDdUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUM1Qjs7a0RBRUEsOERBQUNJO3dDQUFPSixPQUFNO2tEQUFNOzs7Ozs7a0RBQ3BCLDhEQUFDSTt3Q0FBT0osT0FBTTtrREFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUl2Qiw4REFBQ0s7d0JBQ0NDLE1BQUs7d0JBQ0xDLE1BQUs7d0JBQ0xwQixXQUFVO3dCQUNWYSxPQUFPMUM7d0JBQ1AyQyxVQUFVLENBQUNDOzRCQUNUQSxFQUFFTSxjQUFjOzRCQUNoQmpELFFBQVEyQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQ3hCOzs7Ozs7a0NBRUYsOERBQUNSOzs7OztrQ0FFRCw4REFBQ2lCO3dCQUNDdEIsV0FBVTt3QkFDVnVCLFNBQVM3QjtrQ0FDVjs7Ozs7O2tDQUlELDhEQUFDNEI7d0JBQ0N0QixXQUFVO3dCQUNWdUIsU0FBUzdCO2tDQUNWOzs7Ozs7a0NBR0QsOERBQUNPO2tDQUFJNUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUliO0dBMUhTSDtBQTRIVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2VzL0NvbXBpbGVyL3BhZ2UuanM/M2MzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBwcmludE91dHB1dCB9IGZyb20gXCIuLi9hcGkvY29kZVwiO1xyXG5pbXBvcnQgeyBwcm9ibGVtIH0gZnJvbSBcIi4uL2FwaS9wcm9ibGVtc1wiO1xyXG5cclxuZnVuY3Rpb24gcGFnZSgpIHtcclxuICBjb25zdCBbY29kZSwgc2V0Q29kZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb3V0cHV0LCBzZXRPdXRwdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZShcImNwcFwiKTtcclxuICBjb25zdCBbcHJvYmxlbU51bWJlciwgc2V0cHJvYmxlbU51bWJlcl0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RhdGVtZW50LCBzZXRTdGF0ZW1lbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2V4YW1wbGVzLCBzZXRFeGFtcGxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NvbnN0cmFpbnRzLCBzZXRDb25zdHJhaW50c10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hQcm9ibGVtRGV0YWlscyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBwcm9ibGVtKHByb2JsZW1OdW1iZXIpO1xyXG4gICAgICAgIGNvbnN0IHF1c0RldGFpbHMgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgICBzZXROYW1lKHF1c0RldGFpbHMubmFtZSk7XHJcbiAgICAgICAgc2V0U3RhdGVtZW50KHF1c0RldGFpbHMuc3RhdGVtZW50KTtcclxuICAgICAgICBzZXRFeGFtcGxlcyhxdXNEZXRhaWxzLmV4YW1wbGVzKTtcclxuICAgICAgICBzZXRDb25zdHJhaW50cyhxdXNEZXRhaWxzLmNvbnN0cmFpbnRzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhxdXNEZXRhaWxzKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcHJvYmxlbSBkZXRhaWxzOlwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hQcm9ibGVtRGV0YWlscygpO1xyXG4gIH0sIFtwcm9ibGVtTnVtYmVyXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgIGxhbmd1YWdlLFxyXG4gICAgICBjb2RlLFxyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcHJpbnRPdXRwdXQocGF5bG9hZCk7XHJcbiAgICAgIHNldE91dHB1dChkYXRhLm91dHB1dCArIFwiaGVsbG8gd29ybGQhXCIpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHctc2NyZWVuIGZsZXhcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0IHctMS8yIGgtc2NyZWVuIGJnLXJlZC0zMDAgZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5cclxuICAgICAgICAgIDxzcGFuPntwcm9ibGVtTnVtYmVyfTwvc3Bhbj4ge25hbWV9XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgIHByb2JsZW0gc3RhdG1lbnQ6IDxiciAvPlxyXG4gICAgICAgICAgPC9zdHJvbmc+e1wiIFwifVxyXG4gICAgICAgICAge3N0YXRlbWVudH1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtleGFtcGxlcy5tYXAoKGV4YW1wbGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPklucHV0Ojwvc3Ryb25nPiB7ZXhhbXBsZS5pbnB1dH1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPk91dHB1dDo8L3N0cm9uZz4ge2V4YW1wbGUub3V0cHV0fVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+RXhwbGFuYXRpb246PC9zdHJvbmc+IHtleGFtcGxlLmV4cGxhbmF0aW9ufVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIDxzdHJvbmc+Y29uc3RyYWludHM6PC9zdHJvbmc+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIHtjb25zdHJhaW50c31cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IHctMS8yIGgtc2NyZWVuIGJnLXNsYXRlLTEwMFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0zeGxcIj5vbmxpbmUgY29kZSBjb21waWxlcjwvaDE+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICA8bGFiZWw+TGFuZ3VhZ2U6IDwvbGFiZWw+XHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIHZhbHVlPXtsYW5ndWFnZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0TGFuZ3VhZ2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNwcFwiPmMrKzwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHlcIj5weXRob248L29wdGlvbj5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICByb3dzPVwiMjBcIlxyXG4gICAgICAgICAgY29scz1cIjc1XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtMy80IHctZnVsbCBiZy1zbGF0ZS0zMDAgXCJcclxuICAgICAgICAgIHZhbHVlPXtjb2RlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0Q29kZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzdWJtaXRfY29kZSBiZy1ncmVlbi03MDAgcm91bmRlZC1zbSB0ZXh0LXdoaXRlIHctMS8yIFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgc3VibWl0XHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInN1Ym1pdF9jb2RlIGJnLWJsdWUtNzAwIHJvdW5kZWQtc20gdGV4dC13aGl0ZSB3LTEvMiBcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHN1Ym1pdFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxoMT57b3V0cHV0fTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsInByaW50T3V0cHV0IiwicHJvYmxlbSIsInBhZ2UiLCJjb2RlIiwic2V0Q29kZSIsIm91dHB1dCIsInNldE91dHB1dCIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJwcm9ibGVtTnVtYmVyIiwic2V0cHJvYmxlbU51bWJlciIsIm5hbWUiLCJzZXROYW1lIiwic3RhdGVtZW50Iiwic2V0U3RhdGVtZW50IiwiZXhhbXBsZXMiLCJzZXRFeGFtcGxlcyIsImNvbnN0cmFpbnRzIiwic2V0Q29uc3RyYWludHMiLCJmZXRjaFByb2JsZW1EZXRhaWxzIiwicmVzIiwicXVzRGV0YWlscyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJwYXlsb2FkIiwiZGF0YSIsImVyciIsInJlc3BvbnNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwicCIsInN0cm9uZyIsImJyIiwibWFwIiwiZXhhbXBsZSIsImluZGV4IiwiaW5wdXQiLCJleHBsYW5hdGlvbiIsImxhYmVsIiwic2VsZWN0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvcHRpb24iLCJ0ZXh0YXJlYSIsInJvd3MiLCJjb2xzIiwicHJldmVudERlZmF1bHQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/Compiler/page.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/pages/api/problems.js":
/*!***************************************!*\
  !*** ./src/app/pages/api/problems.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nconst ENDPOINT = \"http://localhost:8000\";\nconst problem = async (problemNumber)=>await fetch(\"\".concat(ENDPOINT, \"/problems/\").concat(problemNumber), {\n        method: \"GET\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\nmodule.exports = {\n    problem\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvYXBpL3Byb2JsZW1zLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxXQUFXO0FBQ2pCLE1BQU1DLFVBQVUsT0FBT0MsZ0JBQ3JCLE1BQU1DLE1BQU0sR0FBd0JELE9BQXJCRixVQUFTLGNBQTBCLE9BQWRFLGdCQUFpQjtRQUNuREUsUUFBUTtRQUNSQyxTQUFTO1lBQUUsZ0JBQWdCO1FBQW1CO0lBQ2hEO0FBQ0ZDLE9BQU9DLE9BQU8sR0FBRztJQUFFTjtBQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZXMvYXBpL3Byb2JsZW1zLmpzPzNkY2MiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRU5EUE9JTlQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMFwiO1xyXG5jb25zdCBwcm9ibGVtID0gYXN5bmMgKHByb2JsZW1OdW1iZXIpID0+XHJcbiAgYXdhaXQgZmV0Y2goYCR7RU5EUE9JTlR9L3Byb2JsZW1zLyR7cHJvYmxlbU51bWJlcn1gLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgfSk7XHJcbm1vZHVsZS5leHBvcnRzID0geyBwcm9ibGVtIH07XHJcbiJdLCJuYW1lcyI6WyJFTkRQT0lOVCIsInByb2JsZW0iLCJwcm9ibGVtTnVtYmVyIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/api/problems.js\n"));

/***/ })

});