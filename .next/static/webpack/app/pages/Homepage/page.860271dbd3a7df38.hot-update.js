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

/***/ "(app-pages-browser)/./src/app/component/navbar/navbar.js":
/*!********************************************!*\
  !*** ./src/app/component/navbar/navbar.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Navbar() {\n    _s();\n    // Component names should start with a capital letter\n    const [loggedIn, setLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); //\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(localStorage);\n        const token = localStorage.getItem(\"accessToken\");\n        if (token) {\n            setLoggedIn(true);\n        }\n    }, []);\n    // Function to handle logout\n    const handleLogout = ()=>{\n        localStorage.removeItem(\"accessToken\");\n        setLoggedIn(false);\n    };\n    // Function to handle login\n    const handleLogin = ()=>{\n        setLoggedIn(true);\n        router.push(\"/pages/Login\");\n    // Update the state to reflect that the user is logged in\n    };\n    const handleProfilePage = ()=>{\n        const token = localStorage.getItem(\"accessToken\");\n        if (token) {\n            router.push(\"/pages/Profile\");\n        } else {\n            router.replace(\"/pages/Login\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-black w-screen h-20 flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-7\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-purple-500 text-4xlxl font-semibold\",\n                            children: \"Flock Compiler\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\component\\\\navbar\\\\navbar.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\component\\\\navbar\\\\navbar.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2 mr-4 font-semibold \",\n                        children: [\n                            loggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-white bg-red-600 w-20 h-8 rounded-md\",\n                                onClick: handleLogout,\n                                children: \"Logout\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\component\\\\navbar\\\\navbar.js\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-white bg-blue-600 w-20 h-8 rounded-md\",\n                                onClick: handleLogin,\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\component\\\\navbar\\\\navbar.js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-white bg-emerald-500 w-20 h-8 rounded-md\",\n                                onClick: handleProfilePage,\n                                children: \"Profile\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\component\\\\navbar\\\\navbar.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\component\\\\navbar\\\\navbar.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\component\\\\navbar\\\\navbar.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex justify-evenly bg-black text-white\",\n                onClick: ()=>{\n                    console.log(\"clicked\");\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\component\\\\navbar\\\\navbar.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Navbar, \"xZgewIlpass4JvxrLh7XZsL1++8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L25hdmJhci9uYXZiYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUM2QjtBQUNzQjtBQUNQO0FBRTdCLFNBQVNLOztJQUN0QixxREFBcUQ7SUFDckQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDLFFBQVEsRUFBRTtJQUNuRCxNQUFNSyxTQUFTSiwwREFBU0E7SUFFeEJGLGdEQUFTQSxDQUFDO1FBQ1JPLFFBQVFDLEdBQUcsQ0FBQ0M7UUFFWixNQUFNQyxRQUFRRCxhQUFhRSxPQUFPLENBQUM7UUFDbkMsSUFBSUQsT0FBTztZQUNUTCxZQUFZO1FBQ2Q7SUFDRixHQUFHLEVBQUU7SUFFTCw0QkFBNEI7SUFDNUIsTUFBTU8sZUFBZTtRQUNuQkgsYUFBYUksVUFBVSxDQUFDO1FBRXhCUixZQUFZO0lBQ2Q7SUFFQSwyQkFBMkI7SUFDM0IsTUFBTVMsY0FBYztRQUNsQlQsWUFBWTtRQUNaQyxPQUFPUyxJQUFJLENBQUM7SUFFWix5REFBeUQ7SUFDM0Q7SUFDQSxNQUFNQyxvQkFBb0I7UUFDeEIsTUFBTU4sUUFBUUQsYUFBYUUsT0FBTyxDQUFDO1FBQ25DLElBQUlELE9BQU87WUFDVEosT0FBT1MsSUFBSSxDQUFDO1FBQ2QsT0FBTztZQUNMVCxPQUFPVyxPQUFPLENBQUM7UUFDakI7SUFDRjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0M7NEJBQUVELFdBQVU7c0NBQTJDOzs7Ozs7Ozs7OztrQ0FJMUQsOERBQUNEO3dCQUFJQyxXQUFVOzs0QkFDWmYseUJBQ0MsOERBQUNpQjtnQ0FDQ0YsV0FBVTtnQ0FDVkcsU0FBU1Y7MENBQ1Y7Ozs7O3FEQUlELDhEQUFDUztnQ0FDQ0YsV0FBVTtnQ0FDVkcsU0FBU1I7MENBQ1Y7Ozs7OzswQ0FJSCw4REFBQ087Z0NBQ0NGLFdBQVU7Z0NBQ1ZHLFNBQVNOOzBDQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS0wsOERBQUNPO2dCQUNDSixXQUFVO2dCQUNWRyxTQUFTO29CQUNQZixRQUFRQyxHQUFHLENBQUM7Z0JBQ2Q7Ozs7Ozs7O0FBY1I7R0F2RndCTDs7UUFHUEQsc0RBQVNBOzs7S0FIRkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnQvbmF2YmFyL25hdmJhci5qcz8yZDhlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcclxuICAvLyBDb21wb25lbnQgbmFtZXMgc2hvdWxkIHN0YXJ0IHdpdGggYSBjYXBpdGFsIGxldHRlclxyXG4gIGNvbnN0IFtsb2dnZWRJbiwgc2V0TG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpOyAvL1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcclxuXHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzVG9rZW5cIik7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgc2V0TG9nZ2VkSW4odHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgbG9nb3V0XHJcbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhY2Nlc3NUb2tlblwiKTtcclxuXHJcbiAgICBzZXRMb2dnZWRJbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGxvZ2luXHJcbiAgY29uc3QgaGFuZGxlTG9naW4gPSAoKSA9PiB7XHJcbiAgICBzZXRMb2dnZWRJbih0cnVlKTtcclxuICAgIHJvdXRlci5wdXNoKFwiL3BhZ2VzL0xvZ2luXCIpO1xyXG5cclxuICAgIC8vIFVwZGF0ZSB0aGUgc3RhdGUgdG8gcmVmbGVjdCB0aGF0IHRoZSB1c2VyIGlzIGxvZ2dlZCBpblxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlUHJvZmlsZVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzVG9rZW5cIik7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvcGFnZXMvUHJvZmlsZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKFwiL3BhZ2VzL0xvZ2luXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWJsYWNrIHctc2NyZWVuIGgtMjAgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTdcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcHVycGxlLTUwMCB0ZXh0LTR4bHhsIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgRmxvY2sgQ29tcGlsZXJcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgbXItNCBmb250LXNlbWlib2xkIFwiPlxyXG4gICAgICAgICAge2xvZ2dlZEluID8gKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1yZWQtNjAwIHctMjAgaC04IHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIExvZ291dFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLWJsdWUtNjAwIHctMjAgaC04IHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLWVtZXJhbGQtNTAwIHctMjAgaC04IHJvdW5kZWQtbWRcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQcm9maWxlUGFnZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgUHJvZmlsZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dWxcclxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktZXZlbmx5IGJnLWJsYWNrIHRleHQtd2hpdGVcIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIDxidXR0b24+QXJyYXk8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uPlN0cmluZzwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24+SGFzaG1hcDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24+QmluYXJ5IFRyZWU8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uPkR5bmFtaWMgUHJvZ3JhbW1pbmc8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uPkdyYXBoPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbj5TdGFjazwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24+UXVldWU8L2J1dHRvbj5cclxuICAgICAgICA8bGk+TGlua2VkTGlzdDwvbGk+ICovfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJOYXZiYXIiLCJsb2dnZWRJbiIsInNldExvZ2dlZEluIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsInRva2VuIiwiZ2V0SXRlbSIsImhhbmRsZUxvZ291dCIsInJlbW92ZUl0ZW0iLCJoYW5kbGVMb2dpbiIsInB1c2giLCJoYW5kbGVQcm9maWxlUGFnZSIsInJlcGxhY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiYnV0dG9uIiwib25DbGljayIsInVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/navbar/navbar.js\n"));

/***/ })

});