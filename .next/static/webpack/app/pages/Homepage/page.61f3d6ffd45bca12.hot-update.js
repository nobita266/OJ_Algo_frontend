"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/Homepage/page",{

/***/ "(app-pages-browser)/./src/app/pages/Homepage/page.js":
/*!****************************************!*\
  !*** ./src/app/pages/Homepage/page.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_problemList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/problemList */ \"(app-pages-browser)/./src/app/pages/api/problemList.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_component_navbar_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/component/navbar/navbar */ \"(app-pages-browser)/./src/app/component/navbar/navbar.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction page() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [allProblem, setAllProblem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProblemList = async ()=>{\n            try {\n                const res = await (0,_api_problemList__WEBPACK_IMPORTED_MODULE_2__.problemList)();\n                const z = await res.json();\n                setAllProblem(z);\n                console.log(allProblem);\n            } catch (error) {\n                console.error(\"Error fetching problem List:\", error);\n            }\n        };\n        fetchProblemList();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_component_navbar_navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Homepage\\\\page.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gray-600 w-screen h-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"bg-gray-950  text-white flex justify-center items-center text-xl p-2 mt-1\",\n                        children: \"List of problems\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Homepage\\\\page.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"\",\n                        children: allProblem.map((problem)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"bg-gray-700 border-b-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/pages/\".concat(problem.problemNumber),\n                                    children: [\n                                        problem.problemNumber,\n                                        \": \",\n                                        problem.name\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Homepage\\\\page.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, this)\n                            }, problem.problemNumber, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Homepage\\\\page.js\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Homepage\\\\page.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Homepage\\\\page.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Homepage\\\\page.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"0tEVzxotsNRKNzvarNgfXeEFIpM=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvSG9tZXBhZ2UvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ21EO0FBQ0Y7QUFDcEI7QUFDc0I7QUFFbkQsU0FBU007O0lBQ1AsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ08sWUFBWUMsY0FBYyxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRS9DRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLG1CQUFtQjtZQUN2QixJQUFJO2dCQUNGLE1BQU1DLE1BQU0sTUFBTVQsNkRBQVdBO2dCQUM3QixNQUFNVSxJQUFJLE1BQU1ELElBQUlFLElBQUk7Z0JBQ3hCSixjQUFjRztnQkFFZEUsUUFBUUMsR0FBRyxDQUFDUDtZQUNkLEVBQUUsT0FBT1EsT0FBTztnQkFDZEYsUUFBUUUsS0FBSyxDQUFDLGdDQUFnQ0E7WUFDaEQ7UUFDRjtRQUNBTjtJQUNGLEdBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDTzs7MEJBQ0MsOERBQUNiLG9FQUFNQTs7Ozs7MEJBQ1AsOERBQUNhO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQTRFOzs7Ozs7a0NBRzFGLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FDWFYsV0FBV2EsR0FBRyxDQUFDLENBQUNDLHdCQUNmLDhEQUFDQztnQ0FBR0wsV0FBVTswQ0FDWiw0RUFBQ2Ysa0RBQUlBO29DQUFDcUIsTUFBTSxVQUFnQyxPQUF0QkYsUUFBUUcsYUFBYTs7d0NBQ3hDSCxRQUFRRyxhQUFhO3dDQUFDO3dDQUFHSCxRQUFRaEIsSUFBSTs7Ozs7OzsrQkFGRWdCLFFBQVFHLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVN0U7R0FyQ1NwQjtBQXVDVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2VzL0hvbWVwYWdlL3BhZ2UuanM/Y2JkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcHJvYmxlbUxpc3QgfSBmcm9tIFwiLi4vYXBpL3Byb2JsZW1MaXN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiQC9hcHAvY29tcG9uZW50L25hdmJhci9uYXZiYXJcIjtcclxuXHJcbmZ1bmN0aW9uIHBhZ2UoKSB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2FsbFByb2JsZW0sIHNldEFsbFByb2JsZW1dID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hQcm9ibGVtTGlzdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBwcm9ibGVtTGlzdCgpO1xyXG4gICAgICAgIGNvbnN0IHogPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHNldEFsbFByb2JsZW0oeik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGFsbFByb2JsZW0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBwcm9ibGVtIExpc3Q6XCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoUHJvYmxlbUxpc3QoKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTYwMCB3LXNjcmVlbiBoLXNjcmVlblwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJiZy1ncmF5LTk1MCAgdGV4dC13aGl0ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LXhsIHAtMiBtdC0xXCI+XHJcbiAgICAgICAgICBMaXN0IG9mIHByb2JsZW1zXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICB7YWxsUHJvYmxlbS5tYXAoKHByb2JsZW0pID0+IChcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImJnLWdyYXktNzAwIGJvcmRlci1iLTFcIiBrZXk9e3Byb2JsZW0ucHJvYmxlbU51bWJlcn0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wYWdlcy8ke3Byb2JsZW0ucHJvYmxlbU51bWJlcn1gfT5cclxuICAgICAgICAgICAgICAgIHtwcm9ibGVtLnByb2JsZW1OdW1iZXJ9OiB7cHJvYmxlbS5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJwcm9ibGVtTGlzdCIsIkxpbmsiLCJOYXZiYXIiLCJwYWdlIiwibmFtZSIsInNldE5hbWUiLCJhbGxQcm9ibGVtIiwic2V0QWxsUHJvYmxlbSIsImZldGNoUHJvYmxlbUxpc3QiLCJyZXMiLCJ6IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidWwiLCJtYXAiLCJwcm9ibGVtIiwibGkiLCJocmVmIiwicHJvYmxlbU51bWJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/Homepage/page.js\n"));

/***/ })

});