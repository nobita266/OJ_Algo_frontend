"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/Profile/page",{

/***/ "(app-pages-browser)/./src/app/component/navbar/navbar.js":
/*!********************************************!*\
  !*** ./src/app/component/navbar/navbar.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Navbar() {\n    _s();\n    // Component names should start with a capital letter\n    const [loggedIn, setLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); //\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(localStorage);\n        const token = localStorage.getItem(\"accessToken\");\n        if (token) {\n            setLoggedIn(true);\n        }\n    }, []);\n    // Function to handle logout\n    const handleLogout = ()=>{\n        localStorage.removeItem(\"accessToken\");\n        setLoggedIn(false);\n    };\n    // Function to handle login\n    const handleLogin = ()=>{\n        setLoggedIn(true);\n        router.push(\"/pages/Login\");\n    // Update the state to reflect that the user is logged in\n    };\n    const handleProfilePage = ()=>{\n        const token = localStorage.getItem(\"accessToken\");\n        if (token) {\n            router.push(\"/pages/Profile\");\n        } else {\n            router.replace(\"/pages/Login\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-black w-screen h-20 flex justify-between items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-7\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-purple-500 text-4xl font-semibold\",\n                            children: \"Flock Compiler\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\component\\\\navbar\\\\navbar.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\component\\\\navbar\\\\navbar.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-2 mr-4 font-semibold \",\n                        children: [\n                            loggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-white bg-red-600 w-20 h-8 rounded-md\",\n                                onClick: handleLogout,\n                                children: \"Logout\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\component\\\\navbar\\\\navbar.js\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-white bg-blue-600 w-20 h-8 rounded-md\",\n                                onClick: handleLogin,\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\component\\\\navbar\\\\navbar.js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-white bg-emerald-500 w-20 h-8 rounded-md\",\n                                onClick: handleProfilePage,\n                                children: \"Profile\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\component\\\\navbar\\\\navbar.js\",\n                                lineNumber: 67,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"text-white bg-emerald-500 w-20 h-8 rounded-md\",\n                                onClick: handleProfilePage,\n                                children: \"Admin\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\component\\\\navbar\\\\navbar.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\component\\\\navbar\\\\navbar.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\component\\\\navbar\\\\navbar.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex justify-evenly bg-black text-white\",\n                onClick: ()=>{\n                    console.log(\"clicked\");\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\component\\\\navbar\\\\navbar.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Navbar, \"xZgewIlpass4JvxrLh7XZsL1++8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L25hdmJhci9uYXZiYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUM2QjtBQUNzQjtBQUNQO0FBRTdCLFNBQVNLOztJQUN0QixxREFBcUQ7SUFDckQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDLFFBQVEsRUFBRTtJQUNuRCxNQUFNSyxTQUFTSiwwREFBU0E7SUFFeEJGLGdEQUFTQSxDQUFDO1FBQ1JPLFFBQVFDLEdBQUcsQ0FBQ0M7UUFFWixNQUFNQyxRQUFRRCxhQUFhRSxPQUFPLENBQUM7UUFDbkMsSUFBSUQsT0FBTztZQUNUTCxZQUFZO1FBQ2Q7SUFDRixHQUFHLEVBQUU7SUFFTCw0QkFBNEI7SUFDNUIsTUFBTU8sZUFBZTtRQUNuQkgsYUFBYUksVUFBVSxDQUFDO1FBRXhCUixZQUFZO0lBQ2Q7SUFFQSwyQkFBMkI7SUFDM0IsTUFBTVMsY0FBYztRQUNsQlQsWUFBWTtRQUNaQyxPQUFPUyxJQUFJLENBQUM7SUFFWix5REFBeUQ7SUFDM0Q7SUFDQSxNQUFNQyxvQkFBb0I7UUFDeEIsTUFBTU4sUUFBUUQsYUFBYUUsT0FBTyxDQUFDO1FBQ25DLElBQUlELE9BQU87WUFDVEosT0FBT1MsSUFBSSxDQUFDO1FBQ2QsT0FBTztZQUNMVCxPQUFPVyxPQUFPLENBQUM7UUFDakI7SUFDRjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0M7NEJBQUVELFdBQVU7c0NBQXlDOzs7Ozs7Ozs7OztrQ0FJeEQsOERBQUNEO3dCQUFJQyxXQUFVOzs0QkFDWmYseUJBQ0MsOERBQUNpQjtnQ0FDQ0YsV0FBVTtnQ0FDVkcsU0FBU1Y7MENBQ1Y7Ozs7O3FEQUlELDhEQUFDUztnQ0FDQ0YsV0FBVTtnQ0FDVkcsU0FBU1I7MENBQ1Y7Ozs7OzswQ0FJSCw4REFBQ087Z0NBQ0NGLFdBQVU7Z0NBQ1ZHLFNBQVNOOzBDQUNWOzs7Ozs7MENBR0QsOERBQUNLO2dDQUNDRixXQUFVO2dDQUNWRyxTQUFTTjswQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtMLDhEQUFDTztnQkFDQ0osV0FBVTtnQkFDVkcsU0FBUztvQkFDUGYsUUFBUUMsR0FBRyxDQUFDO2dCQUNkOzs7Ozs7OztBQWNSO0dBN0Z3Qkw7O1FBR1BELHNEQUFTQTs7O0tBSEZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50L25hdmJhci9uYXZiYXIuanM/MmQ4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgLy8gQ29tcG9uZW50IG5hbWVzIHNob3VsZCBzdGFydCB3aXRoIGEgY2FwaXRhbCBsZXR0ZXJcclxuICBjb25zdCBbbG9nZ2VkSW4sIHNldExvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy9cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc1Rva2VuXCIpO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIHNldExvZ2dlZEluKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIGxvZ291dFxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiYWNjZXNzVG9rZW5cIik7XHJcblxyXG4gICAgc2V0TG9nZ2VkSW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBsb2dpblxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gKCkgPT4ge1xyXG4gICAgc2V0TG9nZ2VkSW4odHJ1ZSk7XHJcbiAgICByb3V0ZXIucHVzaChcIi9wYWdlcy9Mb2dpblwiKTtcclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIHN0YXRlIHRvIHJlZmxlY3QgdGhhdCB0aGUgdXNlciBpcyBsb2dnZWQgaW5cclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVByb2ZpbGVQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc1Rva2VuXCIpO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL3BhZ2VzL1Byb2ZpbGVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByb3V0ZXIucmVwbGFjZShcIi9wYWdlcy9Mb2dpblwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ibGFjayB3LXNjcmVlbiBoLTIwIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS03XCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXB1cnBsZS01MDAgdGV4dC00eGwgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICBGbG9jayBDb21waWxlclxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBtci00IGZvbnQtc2VtaWJvbGQgXCI+XHJcbiAgICAgICAgICB7bG9nZ2VkSW4gPyAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLXJlZC02MDAgdy0yMCBoLTggcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9nb3V0fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTG9nb3V0XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctYmx1ZS02MDAgdy0yMCBoLTggcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9naW59XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctZW1lcmFsZC01MDAgdy0yMCBoLTggcm91bmRlZC1tZFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByb2ZpbGVQYWdlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBQcm9maWxlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBiZy1lbWVyYWxkLTUwMCB3LTIwIGgtOCByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJvZmlsZVBhZ2V9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkbWluXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx1bFxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1ldmVubHkgYmctYmxhY2sgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJjbGlja2VkXCIpO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7LyogPGJ1dHRvbj5BcnJheTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24+U3RyaW5nPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbj5IYXNobWFwPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbj5CaW5hcnkgVHJlZTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24+RHluYW1pYyBQcm9ncmFtbWluZzwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24+R3JhcGg8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uPlN0YWNrPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbj5RdWV1ZTwvYnV0dG9uPlxyXG4gICAgICAgIDxsaT5MaW5rZWRMaXN0PC9saT4gKi99XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIk5hdmJhciIsImxvZ2dlZEluIiwic2V0TG9nZ2VkSW4iLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwidG9rZW4iLCJnZXRJdGVtIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsImhhbmRsZUxvZ2luIiwicHVzaCIsImhhbmRsZVByb2ZpbGVQYWdlIiwicmVwbGFjZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/navbar/navbar.js\n"));

/***/ })

});