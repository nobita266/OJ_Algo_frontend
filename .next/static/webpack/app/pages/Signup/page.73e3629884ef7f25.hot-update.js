"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/Signup/page",{

/***/ "(app-pages-browser)/./src/app/pages/Signup/page.js":
/*!**************************************!*\
  !*** ./src/app/pages/Signup/page.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/validator */ \"(app-pages-browser)/./src/app/helpers/validator.js\");\n/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/auth */ \"(app-pages-browser)/./src/app/pages/api/auth.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst defaultUserData = {\n    firstName: \"\",\n    lastName: \"\",\n    email: \"\",\n    password: \"\",\n    confirmPassword: \"\"\n};\nconst defaultError = {\n    firstName: \"\",\n    lastName: \"\",\n    email: \"\",\n    password: \"\",\n    confirmPassword: \"\"\n};\nfunction page() {\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultUserData);\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultError);\n    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const togglePasswordVisibility = ()=>{\n        setShowPassword((prevPassword)=>!prevPassword);\n    };\n    const handleFirstName = (e)=>{\n        e.preventDefault();\n        setUserData((prev)=>({\n                ...prev,\n                firstName: e.target.value\n            }));\n    };\n    const handleLastName = (e)=>{\n        e.preventDefault();\n        setUserData((prev)=>({\n                ...prev,\n                lastName: e.target.value\n            }));\n    };\n    const handleEmail = (e)=>{\n        e.preventDefault();\n        setUserData((prev)=>({\n                ...prev,\n                email: e.target.value\n            }));\n    };\n    const handlePassword = (e)=>{\n        setUserData((prev)=>({\n                ...prev,\n                password: e.target.value\n            }));\n    };\n    const handleConfirmPassword = (e)=>{\n        e.preventDefault();\n        setUserData((prev)=>({\n                ...prev,\n                confirmPassword: e.target.value\n            }));\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const { firstName, lastName, email, password } = userData;\n        const { isDataValid, msg, field } = (0,_helpers_validator__WEBPACK_IMPORTED_MODULE_2__.fieldValidation)(userData);\n        if (!isDataValid) {\n            setErrors({\n                [field]: msg\n            });\n            console.log(msg);\n            return;\n        }\n        setIsLoading(true);\n        await (0,_api_auth__WEBPACK_IMPORTED_MODULE_3__.userSignup)({\n            firstName,\n            lastName,\n            email,\n            password\n        }).then(async (res)=>{\n            if (res.ok) {\n                // revalidateTag(\"username\");\n                console.log(\"congratulation your account has been created successfully\");\n                setUserData(defaultUserData);\n                router.replace(\"/pages/Homepage\");\n            // redirect(`./Homepage`);\n            } else if (!res.ok) {\n                const { msg } = await res.json();\n                console.log(msg);\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-400  w-screen h-screen flex justify-center items-center\",\n        style: {\n            backgroundImage: \"url('/netflix.jpg')\",\n            backgroundSize: \"cover\",\n            backgroundRepeat: \"no-repeat\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"w-1/2 h-1/2 bg-[rgba(0,0,0,0.7)] flex flex-col p-2 \",\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"input-field mb-2 h-8 \",\n                    placeholder: \"First Name\",\n                    name: \"firstName\",\n                    value: userData.firstName,\n                    onChange: handleFirstName\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this),\n                errors.firstName && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"input-error\",\n                    children: errors.firstName\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                    lineNumber: 105,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"input-field mb-2 h-8 \",\n                    placeholder: \"Last Name\",\n                    name: \"lastName\",\n                    value: userData.lastName,\n                    onChange: handleLastName\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, this),\n                errors.lastName && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"input-error\",\n                    children: errors.lastName\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                    lineNumber: 116,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"h-8 mb-2\",\n                    placeholder: \"Email\",\n                    name: \"email\",\n                    value: userData.email,\n                    onChange: handleEmail\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, this),\n                errors.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"input-error\",\n                    children: errors.email\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                    lineNumber: 126,\n                    columnNumber: 26\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: showPassword ? \"text\" : \"password\",\n                    className: \"input-field h-8 mb-2\",\n                    placeholder: \"Password\",\n                    value: userData.password,\n                    onChange: handlePassword\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: showPassword ? \"text\" : \"password\",\n                    className: \"h-8 mb-2\",\n                    placeholder: \"confirm Password\",\n                    value: userData.confirmPassword,\n                    name: \"confirmPassword\",\n                    onChange: handleConfirmPassword\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                    lineNumber: 137,\n                    columnNumber: 9\n                }, this),\n                errors.confirmPassword && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"input-error text-white\",\n                    children: errors.confirmPassword\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                    lineNumber: 149,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-blue-600 text-white rounded-md h-8\",\n                    children: \"sign up\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                    lineNumber: 153,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-white\",\n                    children: [\n                        \"Already have an account?\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                className: \"text-blue-600 font-semibold\",\n                                href: \"/pages/Login\",\n                                children: \"SignIn\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                                lineNumber: 160,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                            lineNumber: 158,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                    lineNumber: 156,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n            lineNumber: 92,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"ZgIP5o82MMpPQ5AVbyXJCjpEHbc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvU2lnbnVwL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ2tCO0FBQ2pCO0FBRUc7QUFDZjtBQUU3QixNQUFNTSxrQkFBa0I7SUFDdEJDLFdBQVc7SUFDWEMsVUFBVTtJQUNWQyxPQUFPO0lBQ1BDLFVBQVU7SUFDVkMsaUJBQWlCO0FBQ25CO0FBQ0EsTUFBTUMsZUFBZTtJQUNuQkwsV0FBVztJQUNYQyxVQUFVO0lBQ1ZDLE9BQU87SUFDUEMsVUFBVTtJQUNWQyxpQkFBaUI7QUFDbkI7QUFDQSxTQUFTRTs7SUFDUCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR2QsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDZSxVQUFVQyxZQUFZLEdBQUdoQiwrQ0FBUUEsQ0FBQ0s7SUFDekMsTUFBTSxDQUFDWSxRQUFRQyxVQUFVLEdBQUdsQiwrQ0FBUUEsQ0FBQ1c7SUFDckMsTUFBTSxDQUFDUSxjQUFjQyxnQkFBZ0IsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU1xQixTQUFTbEIsMERBQVNBO0lBQ3hCLE1BQU1tQiwyQkFBMkI7UUFDL0JGLGdCQUFnQixDQUFDRyxlQUFpQixDQUFDQTtJQUNyQztJQUNBLE1BQU1DLGtCQUFrQixDQUFDQztRQUN2QkEsRUFBRUMsY0FBYztRQUNoQlYsWUFBWSxDQUFDVyxPQUFVO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUVyQixXQUFXbUIsRUFBRUcsTUFBTSxDQUFDQyxLQUFLO1lBQUM7SUFDOUQ7SUFDQSxNQUFNQyxpQkFBaUIsQ0FBQ0w7UUFDdEJBLEVBQUVDLGNBQWM7UUFDaEJWLFlBQVksQ0FBQ1csT0FBVTtnQkFBRSxHQUFHQSxJQUFJO2dCQUFFcEIsVUFBVWtCLEVBQUVHLE1BQU0sQ0FBQ0MsS0FBSztZQUFDO0lBQzdEO0lBQ0EsTUFBTUUsY0FBYyxDQUFDTjtRQUNuQkEsRUFBRUMsY0FBYztRQUNoQlYsWUFBWSxDQUFDVyxPQUFVO2dC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OztnQkFLWGhCLE9BQU9QLGVBQWUsa0JBQ3JCLDhEQUFDZ0Q7b0JBQUtaLFdBQVU7OEJBQ2I3QixPQUFPUCxlQUFlOzs7Ozs7OEJBRzNCLDhEQUFDaUQ7b0JBQU9iLFdBQVU7OEJBQXdDOzs7Ozs7OEJBRzFELDhEQUFDYztvQkFBRWQsV0FBVTs7d0JBQWE7c0NBRXhCLDhEQUFDWTtzQ0FFQyw0RUFBQ3RELGtEQUFJQTtnQ0FBQzBDLFdBQVU7Z0NBQThCZSxNQUFNOzBDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFoRjtHQWpKU2pEOztRQUtRVCxzREFBU0E7OztBQThJMUIsK0RBQWVTLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlcy9TaWdudXAvcGFnZS5qcz9kODFkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZmllbGRWYWxpZGF0aW9uIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IHVzZXJTaWdudXAgfSBmcm9tIFwiLi4vYXBpL2F1dGhcIjtcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgZGVmYXVsdFVzZXJEYXRhID0ge1xyXG4gIGZpcnN0TmFtZTogXCJcIixcclxuICBsYXN0TmFtZTogXCJcIixcclxuICBlbWFpbDogXCJcIixcclxuICBwYXNzd29yZDogXCJcIixcclxuICBjb25maXJtUGFzc3dvcmQ6IFwiXCIsXHJcbn07XHJcbmNvbnN0IGRlZmF1bHRFcnJvciA9IHtcclxuICBmaXJzdE5hbWU6IFwiXCIsXHJcbiAgbGFzdE5hbWU6IFwiXCIsXHJcbiAgZW1haWw6IFwiXCIsXHJcbiAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgY29uZmlybVBhc3N3b3JkOiBcIlwiLFxyXG59O1xyXG5mdW5jdGlvbiBwYWdlKCkge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZShkZWZhdWx0VXNlckRhdGEpO1xyXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZShkZWZhdWx0RXJyb3IpO1xyXG4gIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgdG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5ID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd1Bhc3N3b3JkKChwcmV2UGFzc3dvcmQpID0+ICFwcmV2UGFzc3dvcmQpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRmlyc3ROYW1lID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFVzZXJEYXRhKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBmaXJzdE5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUxhc3ROYW1lID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFVzZXJEYXRhKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBsYXN0TmFtZTogZS50YXJnZXQudmFsdWUgfSkpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRW1haWwgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0VXNlckRhdGEoKHByZXYpID0+ICh7IC4uLnByZXYsIGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVQYXNzd29yZCA9IChlKSA9PiB7XHJcbiAgICBzZXRVc2VyRGF0YSgocHJldikgPT4gKHsgLi4ucHJldiwgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNvbmZpcm1QYXNzd29yZCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRVc2VyRGF0YSgocHJldikgPT4gKHtcclxuICAgICAgLi4ucHJldixcclxuICAgICAgY29uZmlybVBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSxcclxuICAgIH0pKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSA9IHVzZXJEYXRhO1xyXG4gICAgY29uc3QgeyBpc0RhdGFWYWxpZCwgbXNnLCBmaWVsZCB9ID0gZmllbGRWYWxpZGF0aW9uKHVzZXJEYXRhKTtcclxuICAgIGlmICghaXNEYXRhVmFsaWQpIHtcclxuICAgICAgc2V0RXJyb3JzKHsgW2ZpZWxkXTogbXNnIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICBhd2FpdCB1c2VyU2lnbnVwKHsgZmlyc3ROYW1lLCBsYXN0TmFtZSwgZW1haWwsIHBhc3N3b3JkIH0pLnRoZW4oXHJcbiAgICAgIGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAvLyByZXZhbGlkYXRlVGFnKFwidXNlcm5hbWVcIik7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIFwiY29uZ3JhdHVsYXRpb24geW91ciBhY2NvdW50IGhhcyBiZWVuIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBzZXRVc2VyRGF0YShkZWZhdWx0VXNlckRhdGEpO1xyXG4gICAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvcGFnZXMvSG9tZXBhZ2VcIik7XHJcbiAgICAgICAgICAvLyByZWRpcmVjdChgLi9Ib21lcGFnZWApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgICAgY29uc3QgeyBtc2cgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImJnLXNsYXRlLTQwMCAgdy1zY3JlZW4gaC1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoJy9uZXRmbGl4LmpwZycpXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcclxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInctMS8yIGgtMS8yIGJnLVtyZ2JhKDAsMCwwLDAuNyldIGZsZXggZmxleC1jb2wgcC0yIFwiXHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgbWItMiBoLTggXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiXHJcbiAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcclxuICAgICAgICAgIHZhbHVlPXt1c2VyRGF0YS5maXJzdE5hbWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlyc3ROYW1lfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2Vycm9ycy5maXJzdE5hbWUgJiYgKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZXJyb3JcIj57ZXJyb3JzLmZpcnN0TmFtZX08L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIG1iLTIgaC04IFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiXHJcbiAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxyXG4gICAgICAgICAgdmFsdWU9e3VzZXJEYXRhLmxhc3ROYW1lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUxhc3ROYW1lfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2Vycm9ycy5sYXN0TmFtZSAmJiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1lcnJvclwiPntlcnJvcnMubGFzdE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTggbWItMlwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICB2YWx1ZT17dXNlckRhdGEuZW1haWx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRW1haWx9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWVycm9yXCI+e2Vycm9ycy5lbWFpbH08L3NwYW4+fVxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT17c2hvd1Bhc3N3b3JkID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBoLTggbWItMlwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgIHZhbHVlPXt1c2VyRGF0YS5wYXNzd29yZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQYXNzd29yZH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJzaG93LWhpZGVcIiBvbkNsaWNrPXt0b2dnbGVQYXNzd29yZFZpc2liaWxpdHl9PlxyXG4gICAgICAgICAge3Nob3dQYXNzd29yZCA/IFwiSGlkZVwiIDogXCJzaG93XCJ9XHJcbiAgICAgICAgPC9zcGFuPiAqL31cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZCA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC04IG1iLTJcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJjb25maXJtIFBhc3N3b3JkXCJcclxuICAgICAgICAgIHZhbHVlPXt1c2VyRGF0YS5jb25maXJtUGFzc3dvcmR9XHJcbiAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDb25maXJtUGFzc3dvcmR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwic2hvdy1oaWRlIG5vbmVcIiBvbkNsaWNrPXt0b2dnbGVQYXNzd29yZFZpc2liaWxpdHl9PlxyXG4gICAgICAgICAge3Nob3dQYXNzd29yZCA/IFwiSGlkZVwiIDogXCJzaG93XCJ9XHJcbiAgICAgICAgPC9zcGFuPiAqL31cclxuICAgICAgICB7ZXJyb3JzLmNvbmZpcm1QYXNzd29yZCAmJiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1lcnJvciB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIHtlcnJvcnMuY29uZmlybVBhc3N3b3JkfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgaC04XCI+XHJcbiAgICAgICAgICBzaWduIHVwXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgey8qIDxhIGhyZWY9XCJcIj5TaWdudXA8L2E+ICovfVxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwIGZvbnQtc2VtaWJvbGRcIiBocmVmPXtcIi9wYWdlcy9Mb2dpblwifT5cclxuICAgICAgICAgICAgICBTaWduSW5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJmaWVsZFZhbGlkYXRpb24iLCJ1c2VyU2lnbnVwIiwidXNlUm91dGVyIiwiTGluayIsImRlZmF1bHRVc2VyRGF0YSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImRlZmF1bHRFcnJvciIsInBhZ2UiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwicm91dGVyIiwidG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5IiwicHJldlBhc3N3b3JkIiwiaGFuZGxlRmlyc3ROYW1lIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJldiIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlTGFzdE5hbWUiLCJoYW5kbGVFbWFpbCIsImhhbmRsZVBhc3N3b3JkIiwiaGFuZGxlQ29uZmlybVBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiaXNEYXRhVmFsaWQiLCJtc2ciLCJmaWVsZCIsImNvbnNvbGUiLCJsb2ciLCJ0aGVuIiwicmVzIiwib2siLCJyZXBsYWNlIiwianNvbiIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJuYW1lIiwib25DaGFuZ2UiLCJzcGFuIiwiYnV0dG9uIiwicCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/Signup/page.js\n"));

/***/ })

});