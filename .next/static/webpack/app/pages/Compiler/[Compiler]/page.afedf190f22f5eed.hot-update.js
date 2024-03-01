/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/Compiler/[Compiler]/page",{

/***/ "(app-pages-browser)/./src/app/pages/Compiler/[Compiler]/page.js":
/*!***************************************************!*\
  !*** ./src/app/pages/Compiler/[Compiler]/page.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// import { printOutput } from \"../api/code\";\n// import { problem } from \"../api/problems\";\nfunction page() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(router);\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [output, setOutput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"cpp\");\n    const [problemNumber, setproblemNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [statement, setStatement] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [examples, setExamples] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [constraints, setConstraints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProblemDetails = async ()=>{\n            try {\n                const res = await problem(problemNumber);\n                const qusDetails = await res.json();\n                setName(qusDetails.name);\n                setStatement(qusDetails.statement);\n                setExamples(qusDetails.examples);\n                setConstraints(qusDetails.constraints);\n                console.log(qusDetails);\n            } catch (error) {\n                console.error(\"Error fetching problem details:\", error);\n            }\n        };\n        fetchProblemDetails();\n    }, [\n        problemNumber\n    ]);\n    const handleSubmit = async ()=>{\n        // e.preventDefault();\n        const payload = {\n            language,\n            code\n        };\n        try {\n            const { data } = await printOutput(payload);\n            setOutput(data.output + \"hello world!\");\n            console.log(data);\n        } catch (err) {\n            console.log(err.response);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-screen flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"left w-1/2 h-screen bg-red-300 flex flex-col gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: problemNumber\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: [\n                                    \"problem statment: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 31\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            statement\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: examples.map((example, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Input:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" \",\n                                            example.input\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Output:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" \",\n                                            example.output\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Explanation:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                                                lineNumber: 75,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" \",\n                                            example.explanation\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"constraints:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this),\n                            constraints\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"right w-1/2 h-screen bg-slate-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-bold text-3xl\",\n                        children: \"online code compiler\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Language: \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                value: language,\n                                onChange: (e)=>{\n                                    setLanguage(e.target.value);\n                                    console.log(e.target.value);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"cpp\",\n                                        children: \"c++\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"py\",\n                                        children: \"python\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        rows: \"20\",\n                        cols: \"75\",\n                        className: \"h-3/4 w-full bg-slate-300 \",\n                        value: code,\n                        onChange: (e)=>{\n                            e.preventDefault();\n                            setCode(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"submit_code bg-green-700 rounded-sm text-white w-1/2 \",\n                        onClick: handleSubmit,\n                        children: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"submit_code bg-blue-700 rounded-sm text-white w-1/2 \",\n                        onClick: handleSubmit,\n                        children: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: output\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Compiler\\\\[Compiler]\\\\page.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"su8s6HLSVUdERQ3lC9xiajnuIyA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvQ29tcGlsZXIvW0NvbXBpbGVyXS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ21EO0FBQ1A7QUFDbEI7QUFDMUIsNkNBQTZDO0FBQzdDLDZDQUE2QztBQUU3QyxTQUFTSzs7SUFDUCxNQUFNQyxTQUFTSCwwREFBU0E7SUFDeEJJLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixNQUFNLENBQUNHLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDUyxRQUFRQyxVQUFVLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1csVUFBVUMsWUFBWSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNhLGVBQWVDLGlCQUFpQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNlLE1BQU1DLFFBQVEsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2lCLFdBQVdDLGFBQWEsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ21CLFVBQVVDLFlBQVksR0FBR3BCLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDcUIsYUFBYUMsZUFBZSxHQUFHdEIsK0NBQVFBLENBQUM7SUFDL0NELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTXdCLHNCQUFzQjtZQUMxQixJQUFJO2dCQUNGLE1BQU1DLE1BQU0sTUFBTUMsUUFBUVo7Z0JBQzFCLE1BQU1hLGFBQWEsTUFBTUYsSUFBSUcsSUFBSTtnQkFFakNYLFFBQVFVLFdBQVdYLElBQUk7Z0JBQ3ZCRyxhQUFhUSxXQUFXVCxTQUFTO2dCQUNqQ0csWUFBWU0sV0FBV1AsUUFBUTtnQkFDL0JHLGVBQWVJLFdBQVdMLFdBQVc7Z0JBQ3JDaEIsUUFBUUMsR0FBRyxDQUFDb0I7WUFDZCxFQUFFLE9BQU9FLE9BQU87Z0JBQ2R2QixRQUFRdUIsS0FBSyxDQUFDLG1DQUFtQ0E7WUFDbkQ7UUFDRjtRQUVBTDtJQUNGLEdBQUc7UUFBQ1Y7S0FBYztJQUVsQixNQUFNZ0IsZUFBZTtRQUNuQixzQkFBc0I7UUFDdEIsTUFBTUMsVUFBVTtZQUNkbkI7WUFDQUo7UUFDRjtRQUNBLElBQUk7WUFDRixNQUFNLEVBQUV3QixJQUFJLEVBQUUsR0FBRyxNQUFNQyxZQUFZRjtZQUNuQ3BCLFVBQVVxQixLQUFLdEIsTUFBTSxHQUFHO1lBRXhCSixRQUFRQyxHQUFHLENBQUN5QjtRQUNkLEVBQUUsT0FBT0UsS0FBSztZQUNaNUIsUUFBUUMsR0FBRyxDQUFDMkIsSUFBSUMsUUFBUTtRQUMxQjtJQUNGO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVOzswQ0FDWiw4REFBQ0U7MENBQU16Qjs7Ozs7OzRCQUFxQjs0QkFBRUU7Ozs7Ozs7a0NBRWhDLDhEQUFDd0I7OzBDQUNDLDhEQUFDQzs7b0NBQU87a0RBQ1ksOERBQUNDOzs7Ozs7Ozs7Ozs0QkFDWDs0QkFDVHhCOzs7Ozs7O2tDQUVILDhEQUFDa0I7a0NBQ0VoQixTQUFTdUIsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUN0Qiw4REFBQ1Q7O2tEQUNDLDhEQUFDSTs7MERBQ0MsOERBQUNDOzBEQUFPOzs7Ozs7NENBQWU7NENBQUVHLFFBQVFFLEtBQUs7Ozs7Ozs7a0RBRXhDLDhEQUFDTjs7MERBQ0MsOERBQUNDOzBEQUFPOzs7Ozs7NENBQWdCOzRDQUFFRyxRQUFRbEMsTUFBTTs7Ozs7OztrREFFMUMsOERBQUM4Qjs7MERBQ0MsOERBQUNDOzBEQUFPOzs7Ozs7NENBQXFCOzRDQUFFRyxRQUFRRyxXQUFXOzs7Ozs7OzsrQkFSNUNGOzs7Ozs7Ozs7O2tDQWFkLDhEQUFDTDs7NEJBQ0U7MENBQ0QsOERBQUNDOzBDQUFPOzs7Ozs7MENBQ1IsOERBQUNDOzs7Ozs0QkFDQXBCOzs7Ozs7Ozs7Ozs7OzBCQUdMLDhEQUFDYztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFxQjs7Ozs7O2tDQUNuQyw4REFBQ0U7OzBDQUNDLDhEQUFDUzswQ0FBTTs7Ozs7OzBDQUNQLDhEQUFDQztnQ0FDQ0MsT0FBT3RDO2dDQUNQdUMsVUFBVSxDQUFDQztvQ0FDVHZDLFlBQVl1QyxFQUFFQyxNQUFNLENBQUNILEtBQUs7b0NBQzFCNUMsUUFBUUMsR0FBRyxDQUFDNkMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUM1Qjs7a0RBRUEsOERBQUNJO3dDQUFPSixPQUFNO2tEQUFNOzs7Ozs7a0RBQ3BCLDhEQUFDSTt3Q0FBT0osT0FBTTtrREFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUl2Qiw4REFBQ0s7d0JBQ0NDLE1BQUs7d0JBQ0xDLE1BQUs7d0JBQ0xwQixXQUFVO3dCQUNWYSxPQUFPMUM7d0JBQ1AyQyxVQUFVLENBQUNDOzRCQUNUQSxFQUFFTSxjQUFjOzRCQUNoQmpELFFBQVEyQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQ3hCOzs7Ozs7a0NBRUYsOERBQUNSOzs7OztrQ0FFRCw4REFBQ2lCO3dCQUNDdEIsV0FBVTt3QkFDVnVCLFNBQVM5QjtrQ0FDVjs7Ozs7O2tDQUlELDhEQUFDNkI7d0JBQ0N0QixXQUFVO3dCQUNWdUIsU0FBUzlCO2tDQUNWOzs7Ozs7a0NBR0QsOERBQUNRO2tDQUFJNUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUliO0dBNUhTTjs7UUFDUUYsc0RBQVNBOzs7QUE2SDFCLCtEQUFlRSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZXMvQ29tcGlsZXIvW0NvbXBpbGVyXS9wYWdlLmpzPzJjOTciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG4vLyBpbXBvcnQgeyBwcmludE91dHB1dCB9IGZyb20gXCIuLi9hcGkvY29kZVwiO1xyXG4vLyBpbXBvcnQgeyBwcm9ibGVtIH0gZnJvbSBcIi4uL2FwaS9wcm9ibGVtc1wiO1xyXG5cclxuZnVuY3Rpb24gcGFnZSgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zb2xlLmxvZyhyb3V0ZXIpO1xyXG4gIGNvbnN0IFtjb2RlLCBzZXRDb2RlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtvdXRwdXQsIHNldE91dHB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGFuZ3VhZ2UsIHNldExhbmd1YWdlXSA9IHVzZVN0YXRlKFwiY3BwXCIpO1xyXG4gIGNvbnN0IFtwcm9ibGVtTnVtYmVyLCBzZXRwcm9ibGVtTnVtYmVyXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzdGF0ZW1lbnQsIHNldFN0YXRlbWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZXhhbXBsZXMsIHNldEV4YW1wbGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbY29uc3RyYWludHMsIHNldENvbnN0cmFpbnRzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaFByb2JsZW1EZXRhaWxzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHByb2JsZW0ocHJvYmxlbU51bWJlcik7XHJcbiAgICAgICAgY29uc3QgcXVzRGV0YWlscyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIHNldE5hbWUocXVzRGV0YWlscy5uYW1lKTtcclxuICAgICAgICBzZXRTdGF0ZW1lbnQocXVzRGV0YWlscy5zdGF0ZW1lbnQpO1xyXG4gICAgICAgIHNldEV4YW1wbGVzKHF1c0RldGFpbHMuZXhhbXBsZXMpO1xyXG4gICAgICAgIHNldENvbnN0cmFpbnRzKHF1c0RldGFpbHMuY29uc3RyYWludHMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHF1c0RldGFpbHMpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwcm9ibGVtIGRldGFpbHM6XCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFByb2JsZW1EZXRhaWxzKCk7XHJcbiAgfSwgW3Byb2JsZW1OdW1iZXJdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgbGFuZ3VhZ2UsXHJcbiAgICAgIGNvZGUsXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBwcmludE91dHB1dChwYXlsb2FkKTtcclxuICAgICAgc2V0T3V0cHV0KGRhdGEub3V0cHV0ICsgXCJoZWxsbyB3b3JsZCFcIik7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW4gZmxleFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQgdy0xLzIgaC1zY3JlZW4gYmctcmVkLTMwMCBmbGV4IGZsZXgtY29sIGdhcC00XCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgPHNwYW4+e3Byb2JsZW1OdW1iZXJ9PC9zcGFuPiB7bmFtZX1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgcHJvYmxlbSBzdGF0bWVudDogPGJyIC8+XHJcbiAgICAgICAgICA8L3N0cm9uZz57XCIgXCJ9XHJcbiAgICAgICAgICB7c3RhdGVtZW50fVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge2V4YW1wbGVzLm1hcCgoZXhhbXBsZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+SW5wdXQ6PC9zdHJvbmc+IHtleGFtcGxlLmlucHV0fVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+T3V0cHV0Ojwvc3Ryb25nPiB7ZXhhbXBsZS5vdXRwdXR9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5FeHBsYW5hdGlvbjo8L3N0cm9uZz4ge2V4YW1wbGUuZXhwbGFuYXRpb259XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgPHN0cm9uZz5jb25zdHJhaW50czo8L3N0cm9uZz5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAge2NvbnN0cmFpbnRzfVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQgdy0xLzIgaC1zY3JlZW4gYmctc2xhdGUtMTAwXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LTN4bFwiPm9ubGluZSBjb2RlIGNvbXBpbGVyPC9oMT5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIDxsYWJlbD5MYW5ndWFnZTogPC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgdmFsdWU9e2xhbmd1YWdlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICBzZXRMYW5ndWFnZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY3BwXCI+YysrPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJweVwiPnB5dGhvbjwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgIHJvd3M9XCIyMFwiXHJcbiAgICAgICAgICBjb2xzPVwiNzVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC0zLzQgdy1mdWxsIGJnLXNsYXRlLTMwMCBcIlxyXG4gICAgICAgICAgdmFsdWU9e2NvZGV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZXRDb2RlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInN1Ym1pdF9jb2RlIGJnLWdyZWVuLTcwMCByb3VuZGVkLXNtIHRleHQtd2hpdGUgdy0xLzIgXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBzdWJtaXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic3VibWl0X2NvZGUgYmctYmx1ZS03MDAgcm91bmRlZC1zbSB0ZXh0LXdoaXRlIHctMS8yIFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgc3VibWl0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGgxPntvdXRwdXR9PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImF4aW9zIiwicGFnZSIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwic2V0Q29kZSIsIm91dHB1dCIsInNldE91dHB1dCIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJwcm9ibGVtTnVtYmVyIiwic2V0cHJvYmxlbU51bWJlciIsIm5hbWUiLCJzZXROYW1lIiwic3RhdGVtZW50Iiwic2V0U3RhdGVtZW50IiwiZXhhbXBsZXMiLCJzZXRFeGFtcGxlcyIsImNvbnN0cmFpbnRzIiwic2V0Q29uc3RyYWludHMiLCJmZXRjaFByb2JsZW1EZXRhaWxzIiwicmVzIiwicHJvYmxlbSIsInF1c0RldGFpbHMiLCJqc29uIiwiZXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJwYXlsb2FkIiwiZGF0YSIsInByaW50T3V0cHV0IiwiZXJyIiwicmVzcG9uc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNwYW4iLCJwIiwic3Ryb25nIiwiYnIiLCJtYXAiLCJleGFtcGxlIiwiaW5kZXgiLCJpbnB1dCIsImV4cGxhbmF0aW9uIiwibGFiZWwiLCJzZWxlY3QiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsIm9wdGlvbiIsInRleHRhcmVhIiwicm93cyIsImNvbHMiLCJwcmV2ZW50RGVmYXVsdCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/Compiler/[Compiler]/page.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/next/navigation.js":
/*!*****************************************!*\
  !*** ./node_modules/next/navigation.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/components/navigation */ \"(app-pages-browser)/./node_modules/next/dist/client/components/navigation.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6IkFBQUEsK0pBQStEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25hdmlnYXRpb24uanM/MmE5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvY29tcG9uZW50cy9uYXZpZ2F0aW9uJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/navigation.js\n"));

/***/ })

});