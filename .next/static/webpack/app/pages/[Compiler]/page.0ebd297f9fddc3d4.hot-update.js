"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/[Compiler]/page",{

/***/ "(app-pages-browser)/./src/app/pages/[Compiler]/page.js":
/*!******************************************!*\
  !*** ./src/app/pages/[Compiler]/page.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/code */ \"(app-pages-browser)/./src/app/pages/api/code.js\");\n/* harmony import */ var _api_problems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/problems */ \"(app-pages-browser)/./src/app/pages/api/problems.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction page(param) {\n    let { params } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [output, setOutput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"cpp\");\n    const [problemNumber, setproblemNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(parseInt(params.Compiler));\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [statement, setStatement] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [examples, setExamples] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [constraints, setConstraints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProblemDetails = async ()=>{\n            try {\n                const res = await (0,_api_problems__WEBPACK_IMPORTED_MODULE_3__.problem)(problemNumber);\n                if (!res.ok) {\n                    router.replace(\"/pages/Homepage\");\n                }\n                const qusDetails = await res.json();\n                setName(qusDetails.name);\n                setStatement(qusDetails.statement);\n                setExamples(qusDetails.examples);\n                setConstraints(qusDetails.constraints);\n                console.log(qusDetails);\n            } catch (error) {\n                console.error(\"Error fetching problem details:\", error);\n            }\n        };\n        fetchProblemDetails();\n    }, [\n        problemNumber\n    ]);\n    const handleSubmit = async ()=>{\n        // e.preventDefault();\n        console.log(input);\n        const payload = {\n            language,\n            code,\n            input\n        };\n        console.log(payload);\n        try {\n            const res = await (0,_api_code__WEBPACK_IMPORTED_MODULE_2__.printOutput)(payload);\n            const z = await res.json();\n            console.log(\"Response:\", z); // Check the structure of the response object\n            // Access the output depending on the structure of the response object\n            const output = z.output;\n            console.log(output);\n            if (output !== undefined) {\n                // Update the output state\n                setOutput(output);\n            } else {\n                console.log(\"Output not found in response:\", res);\n            }\n        } catch (err) {\n            console.log(err.response);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-screen flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"left w-1/2 h-screen text-gray-950 flex flex-col gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: problemNumber\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: [\n                                    \"problem statment: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 31\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            statement\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: examples.map((example, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Input:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                                lineNumber: 88,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" \",\n                                            example.input\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                        lineNumber: 87,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Output:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                                lineNumber: 91,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" \",\n                                            example.output\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Explanation:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                                lineNumber: 94,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" \",\n                                            example.explanation\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"constraints:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, this),\n                            constraints\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"right w-1/2 h-screen bg-slate-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-bold text-3xl\",\n                        children: \"online code compiler\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Language: \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                lineNumber: 109,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                value: language,\n                                onChange: (e)=>{\n                                    setLanguage(e.target.value);\n                                    console.log(e.target.value);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"cpp\",\n                                        children: \"c++\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                        lineNumber: 117,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"py\",\n                                        children: \"python\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                        lineNumber: 118,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                lineNumber: 110,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        rows: \"20\",\n                        cols: \"75\",\n                        className: \"h-3/4 w-full bg-gray-600 text-green-500 text-xl\",\n                        value: code,\n                        onChange: (e)=>{\n                            e.preventDefault();\n                            setCode(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 132,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"submit_code bg-green-700 rounded-sm text-white w-1/2 \",\n                        onClick: handleSubmit,\n                        children: \"run\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 134,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"submit_code bg-blue-700 rounded-sm text-white w-1/2 \",\n                        onClick: handleSubmit,\n                        children: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 141,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"TestInput\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 147,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        rows: \"5\",\n                        cols: \"15\",\n                        value: input,\n                        placeholder: \"Input\",\n                        onChange: (e)=>setInput(e.target.value),\n                        className: \"w-full border border-solid border-black\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 148,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"output\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 156,\n                        columnNumber: 9\n                    }, this),\n                    output && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"w-full border border-solid border-black\",\n                        children: output\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 158,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"mKEqtYjIXJ2841PBjdifvUMpRR8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvW0NvbXBpbGVyXS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDbUQ7QUFDVDtBQUNBO0FBRUU7QUFFNUMsU0FBU00sS0FBSyxLQUFVO1FBQVYsRUFBRUMsTUFBTSxFQUFFLEdBQVY7O0lBQ1osTUFBTUMsU0FBU0gsMERBQVNBO0lBRXhCLE1BQU0sQ0FBQ0ksTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNTLFFBQVFDLFVBQVUsR0FBR1YsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDVyxPQUFPQyxTQUFTLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2EsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNlLGVBQWVDLGlCQUFpQixHQUFHaEIsK0NBQVFBLENBQUNpQixTQUFTWixPQUFPYSxRQUFRO0lBQzNFLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHcEIsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDcUIsV0FBV0MsYUFBYSxHQUFHdEIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDdUIsVUFBVUMsWUFBWSxHQUFHeEIsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUN5QixhQUFhQyxlQUFlLEdBQUcxQiwrQ0FBUUEsQ0FBQztJQUMvQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNNEIsc0JBQXNCO1lBQzFCLElBQUk7Z0JBQ0YsTUFBTUMsTUFBTSxNQUFNMUIsc0RBQU9BLENBQUNhO2dCQUMxQixJQUFJLENBQUNhLElBQUlDLEVBQUUsRUFBRTtvQkFDWHZCLE9BQU93QixPQUFPLENBQUM7Z0JBQ2pCO2dCQUNBLE1BQU1DLGFBQWEsTUFBTUgsSUFBSUksSUFBSTtnQkFFakNaLFFBQVFXLFdBQVdaLElBQUk7Z0JBQ3ZCRyxhQUFhUyxXQUFXVixTQUFTO2dCQUNqQ0csWUFBWU8sV0FBV1IsUUFB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QUNWOzs7Ozs7a0NBR0QsOERBQUNVO2tDQUFFOzs7Ozs7a0NBQ0gsOERBQUNjO3dCQUNDQyxNQUFLO3dCQUNMQyxNQUFLO3dCQUNMUCxPQUFPNUM7d0JBQ1B1RCxhQUFZO3dCQUNaVixVQUFVLENBQUNDLElBQU03QyxTQUFTNkMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO3dCQUN4Q1osV0FBVTs7Ozs7O2tDQUVaLDhEQUFDRztrQ0FBRTs7Ozs7O29CQUNGckMsd0JBQ0MsOERBQUNtRDt3QkFBU2pCLFdBQVU7a0NBQ2pCbEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9iO0dBOUpTTDs7UUFDUUQsc0RBQVNBOzs7QUErSjFCLCtEQUFlQyxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZXMvW0NvbXBpbGVyXS9wYWdlLmpzP2ZjNmMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHByaW50T3V0cHV0IH0gZnJvbSBcIi4uL2FwaS9jb2RlXCI7XHJcbmltcG9ydCB7IHByb2JsZW0gfSBmcm9tIFwiLi4vYXBpL3Byb2JsZW1zXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5mdW5jdGlvbiBwYWdlKHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW291dHB1dCwgc2V0T3V0cHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZShcImNwcFwiKTtcclxuICBjb25zdCBbcHJvYmxlbU51bWJlciwgc2V0cHJvYmxlbU51bWJlcl0gPSB1c2VTdGF0ZShwYXJzZUludChwYXJhbXMuQ29tcGlsZXIpKTtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RhdGVtZW50LCBzZXRTdGF0ZW1lbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2V4YW1wbGVzLCBzZXRFeGFtcGxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NvbnN0cmFpbnRzLCBzZXRDb25zdHJhaW50c10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hQcm9ibGVtRGV0YWlscyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBwcm9ibGVtKHByb2JsZW1OdW1iZXIpO1xyXG4gICAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9wYWdlcy9Ib21lcGFnZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcXVzRGV0YWlscyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIHNldE5hbWUocXVzRGV0YWlscy5uYW1lKTtcclxuICAgICAgICBzZXRTdGF0ZW1lbnQocXVzRGV0YWlscy5zdGF0ZW1lbnQpO1xyXG4gICAgICAgIHNldEV4YW1wbGVzKHF1c0RldGFpbHMuZXhhbXBsZXMpO1xyXG4gICAgICAgIHNldENvbnN0cmFpbnRzKHF1c0RldGFpbHMuY29uc3RyYWludHMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHF1c0RldGFpbHMpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwcm9ibGVtIGRldGFpbHM6XCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaFByb2JsZW1EZXRhaWxzKCk7XHJcbiAgfSwgW3Byb2JsZW1OdW1iZXJdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coaW5wdXQpO1xyXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcclxuICAgICAgbGFuZ3VhZ2UsXHJcbiAgICAgIGNvZGUsXHJcbiAgICAgIGlucHV0LFxyXG4gICAgfTtcclxuICAgIGNvbnNvbGUubG9nKHBheWxvYWQpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgcHJpbnRPdXRwdXQocGF5bG9hZCk7XHJcbiAgICAgIGNvbnN0IHogPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJSZXNwb25zZTpcIiwgeik7IC8vIENoZWNrIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIHJlc3BvbnNlIG9iamVjdFxyXG5cclxuICAgICAgLy8gQWNjZXNzIHRoZSBvdXRwdXQgZGVwZW5kaW5nIG9uIHRoZSBzdHJ1Y3R1cmUgb2YgdGhlIHJlc3BvbnNlIG9iamVjdFxyXG4gICAgICBjb25zdCBvdXRwdXQgPSB6Lm91dHB1dDtcclxuICAgICAgY29uc29sZS5sb2cob3V0cHV0KTtcclxuXHJcbiAgICAgIGlmIChvdXRwdXQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgb3V0cHV0IHN0YXRlXHJcbiAgICAgICAgc2V0T3V0cHV0KG91dHB1dCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPdXRwdXQgbm90IGZvdW5kIGluIHJlc3BvbnNlOlwiLCByZXMpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LXNjcmVlbiBmbGV4XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdCB3LTEvMiBoLXNjcmVlbiB0ZXh0LWdyYXktOTUwIGZsZXggZmxleC1jb2wgZ2FwLTRcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICA8c3Bhbj57cHJvYmxlbU51bWJlcn08L3NwYW4+IHtuYW1lfVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICBwcm9ibGVtIHN0YXRtZW50OiA8YnIgLz5cclxuICAgICAgICAgIDwvc3Ryb25nPntcIiBcIn1cclxuICAgICAgICAgIHtzdGF0ZW1lbnR9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICB7ZXhhbXBsZXMubWFwKChleGFtcGxlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5JbnB1dDo8L3N0cm9uZz4ge2V4YW1wbGUuaW5wdXR9XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5PdXRwdXQ6PC9zdHJvbmc+IHtleGFtcGxlLm91dHB1dH1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPkV4cGxhbmF0aW9uOjwvc3Ryb25nPiB7ZXhhbXBsZS5leHBsYW5hdGlvbn1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICA8c3Ryb25nPmNvbnN0cmFpbnRzOjwvc3Ryb25nPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICB7Y29uc3RyYWludHN9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodCB3LTEvMiBoLXNjcmVlbiBiZy1zbGF0ZS0xMDBcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtM3hsXCI+b25saW5lIGNvZGUgY29tcGlsZXI8L2gxPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgPGxhYmVsPkxhbmd1YWdlOiA8L2xhYmVsPlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICB2YWx1ZT17bGFuZ3VhZ2V9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldExhbmd1YWdlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjcHBcIj5jKys8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInB5XCI+cHl0aG9uPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgcm93cz1cIjIwXCJcclxuICAgICAgICAgIGNvbHM9XCI3NVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTMvNCB3LWZ1bGwgYmctZ3JheS02MDAgdGV4dC1ncmVlbi01MDAgdGV4dC14bFwiXHJcbiAgICAgICAgICB2YWx1ZT17Y29kZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHNldENvZGUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic3VibWl0X2NvZGUgYmctZ3JlZW4tNzAwIHJvdW5kZWQtc20gdGV4dC13aGl0ZSB3LTEvMiBcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHJ1blxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzdWJtaXRfY29kZSBiZy1ibHVlLTcwMCByb3VuZGVkLXNtIHRleHQtd2hpdGUgdy0xLzIgXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBzdWJtaXRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8cD5UZXN0SW5wdXQ8L3A+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICByb3dzPVwiNVwiXHJcbiAgICAgICAgICBjb2xzPVwiMTVcIlxyXG4gICAgICAgICAgdmFsdWU9e2lucHV0fVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnB1dFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1ibGFja1wiXHJcbiAgICAgICAgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgPHA+b3V0cHV0PC9wPlxyXG4gICAgICAgIHtvdXRwdXQgJiYgKFxyXG4gICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1ibGFja1wiPlxyXG4gICAgICAgICAgICB7b3V0cHV0fVxyXG4gICAgICAgICAgPC90ZXh0YXJlYT5cclxuICAgICAgICApfVxyXG4gICAgICAgIHsvKiA8aDE+e291dHB1dH08L2gxPiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInByaW50T3V0cHV0IiwicHJvYmxlbSIsInVzZVJvdXRlciIsInBhZ2UiLCJwYXJhbXMiLCJyb3V0ZXIiLCJjb2RlIiwic2V0Q29kZSIsIm91dHB1dCIsInNldE91dHB1dCIsImlucHV0Iiwic2V0SW5wdXQiLCJsYW5ndWFnZSIsInNldExhbmd1YWdlIiwicHJvYmxlbU51bWJlciIsInNldHByb2JsZW1OdW1iZXIiLCJwYXJzZUludCIsIkNvbXBpbGVyIiwibmFtZSIsInNldE5hbWUiLCJzdGF0ZW1lbnQiLCJzZXRTdGF0ZW1lbnQiLCJleGFtcGxlcyIsInNldEV4YW1wbGVzIiwiY29uc3RyYWludHMiLCJzZXRDb25zdHJhaW50cyIsImZldGNoUHJvYmxlbURldGFpbHMiLCJyZXMiLCJvayIsInJlcGxhY2UiLCJxdXNEZXRhaWxzIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImhhbmRsZVN1Ym1pdCIsInBheWxvYWQiLCJ6IiwidW5kZWZpbmVkIiwiZXJyIiwicmVzcG9uc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNwYW4iLCJwIiwic3Ryb25nIiwiYnIiLCJtYXAiLCJleGFtcGxlIiwiaW5kZXgiLCJleHBsYW5hdGlvbiIsImxhYmVsIiwic2VsZWN0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvcHRpb24iLCJ0ZXh0YXJlYSIsInJvd3MiLCJjb2xzIiwicHJldmVudERlZmF1bHQiLCJidXR0b24iLCJvbkNsaWNrIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/[Compiler]/page.js\n"));

/***/ })

});