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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/validator */ \"(app-pages-browser)/./src/app/helpers/validator.js\");\n/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/auth */ \"(app-pages-browser)/./src/app/pages/api/auth.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst defaultUserData = {\n    firstName: \"\",\n    lastName: \"\",\n    email: \"\",\n    password: \"\",\n    confirmPassword: \"\"\n};\nconst defaultError = {\n    firstName: \"\",\n    lastName: \"\",\n    email: \"\",\n    password: \"\",\n    confirmPassword: \"\"\n};\nfunction page() {\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultUserData);\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(defaultError);\n    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const togglePasswordVisibility = ()=>{\n        setShowPassword((prevPassword)=>!prevPassword);\n    };\n    const handleFirstName = (e)=>{\n        e.preventDefault();\n        setUserData((prev)=>({\n                ...prev,\n                firstName: e.target.value\n            }));\n    };\n    const handleLastName = (e)=>{\n        e.preventDefault();\n        setUserData((prev)=>({\n                ...prev,\n                lastName: e.target.value\n            }));\n    };\n    const handleEmail = (e)=>{\n        e.preventDefault();\n        setUserData((prev)=>({\n                ...prev,\n                email: e.target.value\n            }));\n    };\n    const handlePassword = (e)=>{\n        setUserData((prev)=>({\n                ...prev,\n                password: e.target.value\n            }));\n    };\n    const handleConfirmPassword = (e)=>{\n        e.preventDefault();\n        setUserData((prev)=>({\n                ...prev,\n                confirmPassword: e.target.value\n            }));\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const { firstName, lastName, email, password } = userData;\n        const { isDataValid, msg, field } = (0,_helpers_validator__WEBPACK_IMPORTED_MODULE_2__.fieldValidation)(userData);\n        if (!isDataValid) {\n            setErrors({\n                [field]: msg\n            });\n            console.log(msg);\n            return;\n        }\n        setIsLoading(true);\n        await (0,_api_auth__WEBPACK_IMPORTED_MODULE_3__.userSignup)({\n            firstName,\n            lastName,\n            email,\n            password\n        }).then(async (res)=>{\n            let result = await res.json();\n            if (res.ok) {\n                console.log(res);\n                // revalidateTag(\"username\");\n                localStorage.setItem(\"accessToken\", result.accessToken);\n                console.log(\"congratulation your account has been created successfully\");\n                setUserData(defaultUserData);\n                router.replace(\"/pages/Homepage\");\n            // redirect(`./Homepage`);\n            } else if (!res.ok) {\n                const { msg } = await res.json();\n                console.log(msg);\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-slate-400  w-screen h-screen flex justify-center items-center\",\n        style: {\n            backgroundImage: \"url('/netflix.jpg')\",\n            backgroundSize: \"cover\",\n            backgroundRepeat: \"no-repeat\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: \"w-1/2 h-1/2 bg-[rgba(0,0,0,0.7)] flex flex-col p-2 rounded-3xl\",\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-white text-2xl font-bold\",\n                    children: \"Sign Up\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"input-field mb-2 h-8 \",\n                    placeholder: \"First Name\",\n                    name: \"firstName\",\n                    value: userData.firstName,\n                    onChange: handleFirstName\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, this),\n                errors.firstName && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"input-error\",\n                    children: errors.firstName\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                    lineNumber: 113,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"input-field mb-2 h-8 \",\n                    placeholder: \"Last Name\",\n                    name: \"lastName\",\n                    value: userData.lastName,\n                    onChange: handleLastName\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, this),\n                errors.lastName && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"input-error\",\n                    children: errors.lastName\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                    lineNumber: 124,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    className: \"h-8 mb-2\",\n                    placeholder: \"Email\",\n                    name: \"email\",\n                    value: userData.email,\n                    onChange: handleEmail\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                    lineNumber: 126,\n                    columnNumber: 9\n                }, this),\n                errors.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"input-error\",\n                    children: errors.email\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                    lineNumber: 134,\n                    columnNumber: 26\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: showPassword ? \"text\" : \"password\",\n                    className: \"input-field h-8 mb-2\",\n                    placeholder: \"Password\",\n                    value: userData.password,\n                    onChange: handlePassword\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                    lineNumber: 135,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: showPassword ? \"text\" : \"password\",\n                    className: \"h-8 mb-2\",\n                    placeholder: \"confirm Password\",\n                    value: userData.confirmPassword,\n                    name: \"confirmPassword\",\n                    onChange: handleConfirmPassword\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                    lineNumber: 145,\n                    columnNumber: 9\n                }, this),\n                errors.confirmPassword && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"input-error text-white\",\n                    children: errors.confirmPassword\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                    lineNumber: 157,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-blue-600 text-white rounded-md h-8\",\n                    children: \"sign up\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                    lineNumber: 161,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-white\",\n                    children: [\n                        \"Already have an account?\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                className: \"text-blue-600 font-semibold\",\n                                href: \"/pages/Login\",\n                                children: \"SignIn\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                                lineNumber: 168,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                            lineNumber: 166,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n                    lineNumber: 164,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n            lineNumber: 99,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\pages\\\\Signup\\\\page.js\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"ZgIP5o82MMpPQ5AVbyXJCjpEHbc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvU2lnbnVwL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3dDO0FBQ2tCO0FBQ2pCO0FBRUc7QUFDZjtBQUU3QixNQUFNTSxrQkFBa0I7SUFDdEJDLFdBQVc7SUFDWEMsVUFBVTtJQUNWQyxPQUFPO0lBQ1BDLFVBQVU7SUFDVkMsaUJBQWlCO0FBQ25CO0FBQ0EsTUFBTUMsZUFBZTtJQUNuQkwsV0FBVztJQUNYQyxVQUFVO0lBQ1ZDLE9BQU87SUFDUEMsVUFBVTtJQUNWQyxpQkFBaUI7QUFDbkI7QUFDQSxTQUFTRTs7SUFDUCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR2QsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDZSxVQUFVQyxZQUFZLEdBQUdoQiwrQ0FBUUEsQ0FBQ0s7SUFDekMsTUFBTSxDQUFDWSxRQUFRQyxVQUFVLEdBQUdsQiwrQ0FBUUEsQ0FBQ1c7SUFDckMsTUFBTSxDQUFDUSxjQUFjQyxnQkFBZ0IsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU1xQixTQUFTbEIsMERBQVNBO0lBQ3hCLE1BQU1tQiwyQkFBMkI7UUFDL0JGLGdCQUFnQixDQUFDRyxlQUFpQixDQUFDQTtJQUNyQztJQUNBLE1BQU1DLGtCQUFrQixDQUFDQztRQUN2QkEsRUFBRUMsY0FBYztRQUNoQlYsWUFBWSxDQUFDVyxPQUFVO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUVyQixXQUFXbUIsRUFBRUcsTUFBTSxDQUFDQyxLQUFLO1lBQUM7SUFDOUQ7SUFDQSxNQUFNQyxpQkFBaUIsQ0FBQ0w7UUFDdEJBLEVBQUVDLGNBQWM7UUFDaEJWLFlBQVksQ0FBQ1csT0FBVTtnQkFBRSxHQUFHQSxJQUFJO2dCQUFFcEIsVUFBVWtCLEVBQUVHLE1BQU0sQ0FBQ0MsS0FBSztZQUFDO0lBQzdEO0lBQ0EsTUFBTUUsY0FBYyxDQUFDTjtRQUNuQkEsRUFBRUMsY0FBYztRQUNoQlYsWUFBWSxDQUFDVyxPQUFVO2dC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QnFELFVBQVU5Qjs7Ozs7OzhCQUtaLDhEQUFDMEI7b0JBQ0NDLE1BQU14QyxlQUFlLFNBQVM7b0JBQzlCK0IsV0FBVTtvQkFDVlUsYUFBWTtvQkFDWi9CLE9BQU9kLFNBQVNMLGVBQWU7b0JBQy9CbUQsTUFBSztvQkFDTEMsVUFBVTdCOzs7Ozs7Z0JBS1hoQixPQUFPUCxlQUFlLGtCQUNyQiw4REFBQ3FEO29CQUFLYixXQUFVOzhCQUNiakMsT0FBT1AsZUFBZTs7Ozs7OzhCQUczQiw4REFBQ3NEO29CQUFPZCxXQUFVOzhCQUF3Qzs7Ozs7OzhCQUcxRCw4REFBQ2U7b0JBQUVmLFdBQVU7O3dCQUFhO3NDQUV4Qiw4REFBQ2E7c0NBRUMsNEVBQUMzRCxrREFBSUE7Z0NBQUM4QyxXQUFVO2dDQUE4QmdCLE1BQU07MENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWhGO0dBekpTdEQ7O1FBS1FULHNEQUFTQTs7O0FBc0oxQiwrREFBZVMsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2VzL1NpZ251cC9wYWdlLmpzP2Q4MWQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBmaWVsZFZhbGlkYXRpb24gfSBmcm9tIFwiLi4vLi4vaGVscGVycy92YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgdXNlclNpZ251cCB9IGZyb20gXCIuLi9hcGkvYXV0aFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5jb25zdCBkZWZhdWx0VXNlckRhdGEgPSB7XHJcbiAgZmlyc3ROYW1lOiBcIlwiLFxyXG4gIGxhc3ROYW1lOiBcIlwiLFxyXG4gIGVtYWlsOiBcIlwiLFxyXG4gIHBhc3N3b3JkOiBcIlwiLFxyXG4gIGNvbmZpcm1QYXNzd29yZDogXCJcIixcclxufTtcclxuY29uc3QgZGVmYXVsdEVycm9yID0ge1xyXG4gIGZpcnN0TmFtZTogXCJcIixcclxuICBsYXN0TmFtZTogXCJcIixcclxuICBlbWFpbDogXCJcIixcclxuICBwYXNzd29yZDogXCJcIixcclxuICBjb25maXJtUGFzc3dvcmQ6IFwiXCIsXHJcbn07XHJcbmZ1bmN0aW9uIHBhZ2UoKSB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKGRlZmF1bHRVc2VyRGF0YSk7XHJcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKGRlZmF1bHRFcnJvcik7XHJcbiAgY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93UGFzc3dvcmQoKHByZXZQYXNzd29yZCkgPT4gIXByZXZQYXNzd29yZCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVGaXJzdE5hbWUgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0VXNlckRhdGEoKHByZXYpID0+ICh7IC4uLnByZXYsIGZpcnN0TmFtZTogZS50YXJnZXQudmFsdWUgfSkpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlTGFzdE5hbWUgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0VXNlckRhdGEoKHByZXYpID0+ICh7IC4uLnByZXYsIGxhc3ROYW1lOiBlLnRhcmdldC52YWx1ZSB9KSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVFbWFpbCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRVc2VyRGF0YSgocHJldikgPT4gKHsgLi4ucHJldiwgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZVBhc3N3b3JkID0gKGUpID0+IHtcclxuICAgIHNldFVzZXJEYXRhKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSkpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ29uZmlybVBhc3N3b3JkID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldFVzZXJEYXRhKChwcmV2KSA9PiAoe1xyXG4gICAgICAuLi5wcmV2LFxyXG4gICAgICBjb25maXJtUGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgfSkpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCB7IGZpcnN0TmFtZSwgbGFzdE5hbWUsIGVtYWlsLCBwYXNzd29yZCB9ID0gdXNlckRhdGE7XHJcbiAgICBjb25zdCB7IGlzRGF0YVZhbGlkLCBtc2csIGZpZWxkIH0gPSBmaWVsZFZhbGlkYXRpb24odXNlckRhdGEpO1xyXG4gICAgaWYgKCFpc0RhdGFWYWxpZCkge1xyXG4gICAgICBzZXRFcnJvcnMoeyBbZmllbGRdOiBtc2cgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKG1zZyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHNldElzTG9hZGluZyh0cnVlKTtcclxuICAgIGF3YWl0IHVzZXJTaWdudXAoe1xyXG4gICAgICBmaXJzdE5hbWUsXHJcbiAgICAgIGxhc3ROYW1lLFxyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICB9KS50aGVuKGFzeW5jIChyZXMpID0+IHtcclxuICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIC8vIHJldmFsaWRhdGVUYWcoXCJ1c2VybmFtZVwiKTtcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY2Nlc3NUb2tlblwiLCByZXN1bHQuYWNjZXNzVG9rZW4pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgIFwiY29uZ3JhdHVsYXRpb24geW91ciBhY2NvdW50IGhhcyBiZWVuIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5XCJcclxuICAgICAgICApO1xyXG4gICAgICAgIHNldFVzZXJEYXRhKGRlZmF1bHRVc2VyRGF0YSk7XHJcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvcGFnZXMvSG9tZXBhZ2VcIik7XHJcbiAgICAgICAgLy8gcmVkaXJlY3QoYC4vSG9tZXBhZ2VgKTtcclxuICAgICAgfSBlbHNlIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgY29uc3QgeyBtc2cgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobXNnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJiZy1zbGF0ZS00MDAgIHctc2NyZWVuIGgtc2NyZWVuIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCcvbmV0ZmxpeC5qcGcnKVwiLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBjbGFzc05hbWU9XCJ3LTEvMiBoLTEvMiBiZy1bcmdiYSgwLDAsMCwwLjcpXSBmbGV4IGZsZXgtY29sIHAtMiByb3VuZGVkLTN4bFwiXHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtMnhsIGZvbnQtYm9sZFwiPlNpZ24gVXA8L2gxPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgbWItMiBoLTggXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiXHJcbiAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcclxuICAgICAgICAgIHZhbHVlPXt1c2VyRGF0YS5maXJzdE5hbWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlyc3ROYW1lfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2Vycm9ycy5maXJzdE5hbWUgJiYgKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZXJyb3JcIj57ZXJyb3JzLmZpcnN0TmFtZX08L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIG1iLTIgaC04IFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiXHJcbiAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxyXG4gICAgICAgICAgdmFsdWU9e3VzZXJEYXRhLmxhc3ROYW1lfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUxhc3ROYW1lfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2Vycm9ycy5sYXN0TmFtZSAmJiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1lcnJvclwiPntlcnJvcnMubGFzdE5hbWV9PC9zcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJoLTggbWItMlwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICB2YWx1ZT17dXNlckRhdGEuZW1haWx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRW1haWx9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWVycm9yXCI+e2Vycm9ycy5lbWFpbH08L3NwYW4+fVxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT17c2hvd1Bhc3N3b3JkID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBoLTggbWItMlwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgIHZhbHVlPXt1c2VyRGF0YS5wYXNzd29yZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQYXNzd29yZH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJzaG93LWhpZGVcIiBvbkNsaWNrPXt0b2dnbGVQYXNzd29yZFZpc2liaWxpdHl9PlxyXG4gICAgICAgICAge3Nob3dQYXNzd29yZCA/IFwiSGlkZVwiIDogXCJzaG93XCJ9XHJcbiAgICAgICAgPC9zcGFuPiAqL31cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZCA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaC04IG1iLTJcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJjb25maXJtIFBhc3N3b3JkXCJcclxuICAgICAgICAgIHZhbHVlPXt1c2VyRGF0YS5jb25maXJtUGFzc3dvcmR9XHJcbiAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDb25maXJtUGFzc3dvcmR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwic2hvdy1oaWRlIG5vbmVcIiBvbkNsaWNrPXt0b2dnbGVQYXNzd29yZFZpc2liaWxpdHl9PlxyXG4gICAgICAgICAge3Nob3dQYXNzd29yZCA/IFwiSGlkZVwiIDogXCJzaG93XCJ9XHJcbiAgICAgICAgPC9zcGFuPiAqL31cclxuICAgICAgICB7ZXJyb3JzLmNvbmZpcm1QYXNzd29yZCAmJiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1lcnJvciB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIHtlcnJvcnMuY29uZmlybVBhc3N3b3JkfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgaC04XCI+XHJcbiAgICAgICAgICBzaWduIHVwXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgey8qIDxhIGhyZWY9XCJcIj5TaWdudXA8L2E+ICovfVxyXG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwIGZvbnQtc2VtaWJvbGRcIiBocmVmPXtcIi9wYWdlcy9Mb2dpblwifT5cclxuICAgICAgICAgICAgICBTaWduSW5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJmaWVsZFZhbGlkYXRpb24iLCJ1c2VyU2lnbnVwIiwidXNlUm91dGVyIiwiTGluayIsImRlZmF1bHRVc2VyRGF0YSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImRlZmF1bHRFcnJvciIsInBhZ2UiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwicm91dGVyIiwidG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5IiwicHJldlBhc3N3b3JkIiwiaGFuZGxlRmlyc3ROYW1lIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJldiIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlTGFzdE5hbWUiLCJoYW5kbGVFbWFpbCIsImhhbmRsZVBhc3N3b3JkIiwiaGFuZGxlQ29uZmlybVBhc3N3b3JkIiwiaGFuZGxlU3VibWl0IiwiaXNEYXRhVmFsaWQiLCJtc2ciLCJmaWVsZCIsImNvbnNvbGUiLCJsb2ciLCJ0aGVuIiwicmVzIiwicmVzdWx0IiwianNvbiIsIm9rIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImFjY2Vzc1Rva2VuIiwicmVwbGFjZSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiZm9ybSIsIm9uU3VibWl0IiwiaDEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJvbkNoYW5nZSIsInNwYW4iLCJidXR0b24iLCJwIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/Signup/page.js\n"));

/***/ })

});