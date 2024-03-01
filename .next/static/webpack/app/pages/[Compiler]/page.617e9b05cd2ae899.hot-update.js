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

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/code */ \"(app-pages-browser)/./src/app/pages/api/code.js\");\n/* harmony import */ var _api_problems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/problems */ \"(app-pages-browser)/./src/app/pages/api/problems.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction page() {\n    _s();\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [output, setOutput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"cpp\");\n    const [problemNumber, setproblemNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [statement, setStatement] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [examples, setExamples] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [constraints, setConstraints] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProblemDetails = async ()=>{\n            try {\n                const res = await (0,_api_problems__WEBPACK_IMPORTED_MODULE_3__.problem)(problemNumber);\n                const qusDetails = await res.json();\n                setName(qusDetails.name);\n                setStatement(qusDetails.statement);\n                setExamples(qusDetails.examples);\n                setConstraints(qusDetails.constraints);\n                console.log(qusDetails);\n            } catch (error) {\n                console.error(\"Error fetching problem details:\", error);\n            }\n        };\n        fetchProblemDetails();\n    }, [\n        problemNumber\n    ]);\n    const handleSubmit = async (param)=>{\n        let { params } = param;\n        console.log(next_navigation__WEBPACK_IMPORTED_MODULE_4__.useParams);\n        console.log(params);\n        // e.preventDefault();\n        const payload = {\n            language,\n            code\n        };\n        try {\n            const { data } = await (0,_api_code__WEBPACK_IMPORTED_MODULE_2__.printOutput)(payload);\n            setOutput(data.output + \"hello world!\");\n            console.log(data);\n        } catch (err) {\n            console.log(err.response);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-screen flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"left w-1/2 h-screen bg-red-300 flex flex-col gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: problemNumber\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: [\n                                    \"problem statment: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 31\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            statement\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: examples.map((example, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Input:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" \",\n                                            example.input\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Output:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" \",\n                                            example.output\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                children: \"Explanation:\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                                lineNumber: 75,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" \",\n                                            example.explanation\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                children: \"constraints:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this),\n                            constraints\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"right w-1/2 h-screen bg-slate-100\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-bold text-3xl\",\n                        children: \"online code compiler\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Language: \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                value: language,\n                                onChange: (e)=>{\n                                    setLanguage(e.target.value);\n                                    console.log(e.target.value);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"cpp\",\n                                        children: \"c++\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"py\",\n                                        children: \"python\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        rows: \"20\",\n                        cols: \"75\",\n                        className: \"h-3/4 w-full bg-slate-300 \",\n                        value: code,\n                        onChange: (e)=>{\n                            e.preventDefault();\n                            setCode(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"submit_code bg-green-700 rounded-sm text-white w-1/2 \",\n                        onClick: handleSubmit,\n                        children: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"submit_code bg-blue-700 rounded-sm text-white w-1/2 \",\n                        onClick: handleSubmit,\n                        children: \"submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: output\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\[Compiler]\\\\page.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"nHCV6xp7J8zs3cDWdss/WxHMEvs=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvW0NvbXBpbGVyXS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDbUQ7QUFDekI7QUFDZ0I7QUFDQTtBQUNFO0FBRTVDLFNBQVNPOztJQUNQLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNRLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1ksZUFBZUMsaUJBQWlCLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ2MsTUFBTUMsUUFBUSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNnQixXQUFXQyxhQUFhLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNrQixVQUFVQyxZQUFZLEdBQUduQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ29CLGFBQWFDLGVBQWUsR0FBR3JCLCtDQUFRQSxDQUFDO0lBQy9DRCxnREFBU0EsQ0FBQztRQUNSLE1BQU11QixzQkFBc0I7WUFDMUIsSUFBSTtnQkFDRixNQUFNQyxNQUFNLE1BQU1wQixzREFBT0EsQ0FBQ1M7Z0JBQzFCLE1BQU1ZLGFBQWEsTUFBTUQsSUFBSUUsSUFBSTtnQkFFakNWLFFBQVFTLFdBQVdWLElBQUk7Z0JBQ3ZCRyxhQUFhTyxXQUFXUixTQUFTO2dCQUNqQ0csWUFBWUssV0FBV04sUUFBUTtnQkFDL0JHLGVBQWVHLFdBQVdKLFdBQVc7Z0JBQ3JDTSxRQUFRQyxHQUFHLENBQUNIO1lBQ2QsRUFBRSxPQUFPSSxPQUFPO2dCQUNkRixRQUFRRSxLQUFLLENBQUMsbUNBQW1DQTtZQUNuRDtRQUNGO1FBRUFOO0lBQ0YsR0FBRztRQUFDVjtLQUFjO0lBRWxCLE1BQU1pQixlQUFlO1lBQU8sRUFBRUMsTUFBTSxFQUFFO1FBQ3BDSixRQUFRQyxHQUFHLENBQUN2QixzREFBU0E7UUFDckJzQixRQUFRQyxHQUFHLENBQUNHO1FBQ1osc0JBQXNCO1FBQ3RCLE1BQU1DLFVBQVU7WUFDZHJCO1lBQ0FKO1FBQ0Y7UUFDQSxJQUFJO1lBQ0YsTUFBTSxFQUFFMEIsSUFBSSxFQUFFLEdBQUcsTUFBTTlCLHNEQUFXQSxDQUFDNkI7WUFDbkN0QixVQUFVdUIsS0FBS3hCLE1BQU0sR0FBRztZQUV4QmtCLFFBQVFDLEdBQUcsQ0FBQ0s7UUFDZCxFQUFFLE9BQU9DLEtBQUs7WUFDWlAsUUFBUUMsR0FBRyxDQUFDTSxJQUFJQyxRQUFRO1FBQzFCO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7OzBDQUNaLDhEQUFDRTswQ0FBTTFCOzs7Ozs7NEJBQXFCOzRCQUFFRTs7Ozs7OztrQ0FFaEMsOERBQUN5Qjs7MENBQ0MsOERBQUNDOztvQ0FBTztrREFDWSw4REFBQ0M7Ozs7Ozs7Ozs7OzRCQUNYOzRCQUNUekI7Ozs7Ozs7a0NBRUgsOERBQUNtQjtrQ0FDRWpCLFNBQVN3QixHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3RCLDhEQUFDVDs7a0RBQ0MsOERBQUNJOzswREFDQyw4REFBQ0M7MERBQU87Ozs7Ozs0Q0FBZTs0Q0FBRUcsUUFBUUUsS0FBSzs7Ozs7OztrREFFeEMsOERBQUNOOzswREFDQyw4REFBQ0M7MERBQU87Ozs7Ozs0Q0FBZ0I7NENBQUVHLFFBQVFuQyxNQUFNOzs7Ozs7O2tEQUUxQyw4REFBQytCOzswREFDQyw4REFBQ0M7MERBQU87Ozs7Ozs0Q0FBcUI7NENBQUVHLFFBQVFHLFdBQVc7Ozs7Ozs7OytCQVI1Q0Y7Ozs7Ozs7Ozs7a0NBYWQsOERBQUNMOzs0QkFDRTswQ0FDRCw4REFBQ0M7MENBQU87Ozs7OzswQ0FDUiw4REFBQ0M7Ozs7OzRCQUNBckI7Ozs7Ozs7Ozs7Ozs7MEJBR0wsOERBQUNlO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQXFCOzs7Ozs7a0NBQ25DLDhEQUFDRTs7MENBQ0MsOERBQUNTOzBDQUFNOzs7Ozs7MENBQ1AsOERBQUNDO2dDQUNDQyxPQUFPdkM7Z0NBQ1B3QyxVQUFVLENBQUNDO29DQUNUeEMsWUFBWXdDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQ0FDMUJ2QixRQUFRQyxHQUFHLENBQUN3QixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0NBQzVCOztrREFFQSw4REFBQ0k7d0NBQU9KLE9BQU07a0RBQU07Ozs7OztrREFDcEIsOERBQUNJO3dDQUFPSixPQUFNO2tEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSXZCLDhEQUFDSzt3QkFDQ0MsTUFBSzt3QkFDTEMsTUFBSzt3QkFDTHBCLFdBQVU7d0JBQ1ZhLE9BQU8zQzt3QkFDUDRDLFVBQVUsQ0FBQ0M7NEJBQ1RBLEVBQUVNLGNBQWM7NEJBQ2hCbEQsUUFBUTRDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDeEI7Ozs7OztrQ0FFRiw4REFBQ1I7Ozs7O2tDQUVELDhEQUFDaUI7d0JBQ0N0QixXQUFVO3dCQUNWdUIsU0FBUzlCO2tDQUNWOzs7Ozs7a0NBSUQsOERBQUM2Qjt3QkFDQ3RCLFdBQVU7d0JBQ1Z1QixTQUFTOUI7a0NBQ1Y7Ozs7OztrQ0FHRCw4REFBQ1E7a0NBQUk3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWI7R0E1SFNIO0FBOEhULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZXMvW0NvbXBpbGVyXS9wYWdlLmpzP2ZjNmMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgcHJpbnRPdXRwdXQgfSBmcm9tIFwiLi4vYXBpL2NvZGVcIjtcclxuaW1wb3J0IHsgcHJvYmxlbSB9IGZyb20gXCIuLi9hcGkvcHJvYmxlbXNcIjtcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuZnVuY3Rpb24gcGFnZSgpIHtcclxuICBjb25zdCBbY29kZSwgc2V0Q29kZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb3V0cHV0LCBzZXRPdXRwdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xhbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZShcImNwcFwiKTtcclxuICBjb25zdCBbcHJvYmxlbU51bWJlciwgc2V0cHJvYmxlbU51bWJlcl0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3RhdGVtZW50LCBzZXRTdGF0ZW1lbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2V4YW1wbGVzLCBzZXRFeGFtcGxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NvbnN0cmFpbnRzLCBzZXRDb25zdHJhaW50c10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hQcm9ibGVtRGV0YWlscyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBwcm9ibGVtKHByb2JsZW1OdW1iZXIpO1xyXG4gICAgICAgIGNvbnN0IHF1c0RldGFpbHMgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgICBzZXROYW1lKHF1c0RldGFpbHMubmFtZSk7XHJcbiAgICAgICAgc2V0U3RhdGVtZW50KHF1c0RldGFpbHMuc3RhdGVtZW50KTtcclxuICAgICAgICBzZXRFeGFtcGxlcyhxdXNEZXRhaWxzLmV4YW1wbGVzKTtcclxuICAgICAgICBzZXRDb25zdHJhaW50cyhxdXNEZXRhaWxzLmNvbnN0cmFpbnRzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhxdXNEZXRhaWxzKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcHJvYmxlbSBkZXRhaWxzOlwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hQcm9ibGVtRGV0YWlscygpO1xyXG4gIH0sIFtwcm9ibGVtTnVtYmVyXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VQYXJhbXMpO1xyXG4gICAgY29uc29sZS5sb2cocGFyYW1zKTtcclxuICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgIGxhbmd1YWdlLFxyXG4gICAgICBjb2RlLFxyXG4gICAgfTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgcHJpbnRPdXRwdXQocGF5bG9hZCk7XHJcbiAgICAgIHNldE91dHB1dChkYXRhLm91dHB1dCArIFwiaGVsbG8gd29ybGQhXCIpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHctc2NyZWVuIGZsZXhcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0IHctMS8yIGgtc2NyZWVuIGJnLXJlZC0zMDAgZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5cclxuICAgICAgICAgIDxzcGFuPntwcm9ibGVtTnVtYmVyfTwvc3Bhbj4ge25hbWV9XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxzdHJvbmc+XHJcbiAgICAgICAgICAgIHByb2JsZW0gc3RhdG1lbnQ6IDxiciAvPlxyXG4gICAgICAgICAgPC9zdHJvbmc+e1wiIFwifVxyXG4gICAgICAgICAge3N0YXRlbWVudH1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtleGFtcGxlcy5tYXAoKGV4YW1wbGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPklucHV0Ojwvc3Ryb25nPiB7ZXhhbXBsZS5pbnB1dH1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPk91dHB1dDo8L3N0cm9uZz4ge2V4YW1wbGUub3V0cHV0fVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+RXhwbGFuYXRpb246PC9zdHJvbmc+IHtleGFtcGxlLmV4cGxhbmF0aW9ufVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIDxzdHJvbmc+Y29uc3RyYWludHM6PC9zdHJvbmc+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIHtjb25zdHJhaW50c31cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IHctMS8yIGgtc2NyZWVuIGJnLXNsYXRlLTEwMFwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0zeGxcIj5vbmxpbmUgY29kZSBjb21waWxlcjwvaDE+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICA8bGFiZWw+TGFuZ3VhZ2U6IDwvbGFiZWw+XHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIHZhbHVlPXtsYW5ndWFnZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0TGFuZ3VhZ2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNwcFwiPmMrKzwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHlcIj5weXRob248L29wdGlvbj5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICByb3dzPVwiMjBcIlxyXG4gICAgICAgICAgY29scz1cIjc1XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtMy80IHctZnVsbCBiZy1zbGF0ZS0zMDAgXCJcclxuICAgICAgICAgIHZhbHVlPXtjb2RlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2V0Q29kZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzdWJtaXRfY29kZSBiZy1ncmVlbi03MDAgcm91bmRlZC1zbSB0ZXh0LXdoaXRlIHctMS8yIFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgc3VibWl0XHJcbiAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInN1Ym1pdF9jb2RlIGJnLWJsdWUtNzAwIHJvdW5kZWQtc20gdGV4dC13aGl0ZSB3LTEvMiBcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHN1Ym1pdFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxoMT57b3V0cHV0fTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsInByaW50T3V0cHV0IiwicHJvYmxlbSIsInVzZVBhcmFtcyIsInBhZ2UiLCJjb2RlIiwic2V0Q29kZSIsIm91dHB1dCIsInNldE91dHB1dCIsImxhbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJwcm9ibGVtTnVtYmVyIiwic2V0cHJvYmxlbU51bWJlciIsIm5hbWUiLCJzZXROYW1lIiwic3RhdGVtZW50Iiwic2V0U3RhdGVtZW50IiwiZXhhbXBsZXMiLCJzZXRFeGFtcGxlcyIsImNvbnN0cmFpbnRzIiwic2V0Q29uc3RyYWludHMiLCJmZXRjaFByb2JsZW1EZXRhaWxzIiwicmVzIiwicXVzRGV0YWlscyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJwYXJhbXMiLCJwYXlsb2FkIiwiZGF0YSIsImVyciIsInJlc3BvbnNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzcGFuIiwicCIsInN0cm9uZyIsImJyIiwibWFwIiwiZXhhbXBsZSIsImluZGV4IiwiaW5wdXQiLCJleHBsYW5hdGlvbiIsImxhYmVsIiwic2VsZWN0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvcHRpb24iLCJ0ZXh0YXJlYSIsInJvd3MiLCJjb2xzIiwicHJldmVudERlZmF1bHQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/[Compiler]/page.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/next/navigation.js":
/*!*****************************************!*\
  !*** ./node_modules/next/navigation.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/client/components/navigation */ \"(app-pages-browser)/./node_modules/next/dist/client/components/navigation.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6IkFBQUEsK0pBQStEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25hdmlnYXRpb24uanM/MmE5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvY29tcG9uZW50cy9uYXZpZ2F0aW9uJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/navigation.js\n"));

/***/ })

});