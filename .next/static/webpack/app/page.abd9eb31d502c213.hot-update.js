"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/helpers/validator.js":
/*!**************************************!*\
  !*** ./src/app/helpers/validator.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   emailValidator: function() { return /* binding */ emailValidator; },\n/* harmony export */   fieldValidation: function() { return /* binding */ fieldValidation; }\n/* harmony export */ });\nconst emailValidator = (email)=>{\n    if (/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/.test(email) === false) {\n        return {\n            isEmailValid: false,\n            msg: \"please enter a valid email address\"\n        };\n    }\n    return {\n        isEmailValid: true\n    };\n};\nconst fieldValidation = (collectionOfFields)=>{\n    const fields = Object.keys(collectionOfFields);\n    for(let i = 0; i < fields.length; i++){\n        const field = fields[i];\n        const fieldValue = collectionOfFields[field];\n        if (field === \"email\") {\n            const { isEmailValid, msg } = emailValidator(fieldValue);\n            if (!isEmailValid) {\n                return {\n                    isDataValid: false,\n                    field,\n                    msg\n                };\n            }\n        }\n        if (fieldValue.length === 0) {\n            return {\n                isDataValid: false,\n                field,\n                msg: \"please provide a valid \".concat(field)\n            };\n        }\n        if (field === \"password\" && fields.includes(\"confirmPassword\")) {\n            if (fieldValue !== collectionOfFields[\"confirmPassword\"]) {\n                return {\n                    isDataValid: false,\n                    field,\n                    msg: \"password and confirm password field does not match\"\n                };\n            }\n        }\n    }\n    return {\n        isDataValid: true\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaGVscGVycy92YWxpZGF0b3IuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxNQUFNQSxpQkFBaUIsQ0FBQ0M7SUFDN0IsSUFBSSxnREFBZ0RDLElBQUksQ0FBQ0QsV0FBVyxPQUFPO1FBQ3pFLE9BQU87WUFDTEUsY0FBYztZQUNkQyxLQUFLO1FBQ1A7SUFDRjtJQUNBLE9BQU87UUFDTEQsY0FBYztJQUNoQjtBQUNGLEVBQUU7QUFFSyxNQUFNRSxrQkFBa0IsQ0FBQ0M7SUFDOUIsTUFBTUMsU0FBU0MsT0FBT0MsSUFBSSxDQUFDSDtJQUMzQixJQUFLLElBQUlJLElBQUksR0FBR0EsSUFBSUgsT0FBT0ksTUFBTSxFQUFFRCxJQUFLO1FBQ3RDLE1BQU1FLFFBQVFMLE1BQU0sQ0FBQ0csRUFBRTtRQUN2QixNQUFNRyxhQUFhUCxrQkFBa0IsQ0FBQ00sTUFBTTtRQUM1QyxJQUFJQSxVQUFVLFNBQVM7WUFDckIsTUFBTSxFQUFFVCxZQUFZLEVBQUVDLEdBQUcsRUFBRSxHQUFHSixlQUFlYTtZQUM3QyxJQUFJLENBQUNWLGNBQWM7Z0JBQ2pCLE9BQU87b0JBQ0xXLGFBQWE7b0JBQ2JGO29CQUNBUjtnQkFDRjtZQUNGO1FBQ0Y7UUFDQSxJQUFJUyxXQUFXRixNQUFNLEtBQUssR0FBRztZQUMzQixPQUFPO2dCQUNMRyxhQUFhO2dCQUNiRjtnQkFDQVIsS0FBSywwQkFBZ0MsT0FBTlE7WUFDakM7UUFDRjtRQUNBLElBQUlBLFVBQVUsY0FBY0wsT0FBT1EsUUFBUSxDQUFDLG9CQUFvQjtZQUM5RCxJQUFJRixlQUFlUCxrQkFBa0IsQ0FBQyxrQkFBa0IsRUFBRTtnQkFDeEQsT0FBTztvQkFDTFEsYUFBYTtvQkFDYkY7b0JBQ0FSLEtBQU07Z0JBQ1I7WUFDRjtRQUNGO0lBQ0Y7SUFDQSxPQUFPO1FBQ0xVLGFBQWE7SUFDZjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9oZWxwZXJzL3ZhbGlkYXRvci5qcz9hNTQ3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBlbWFpbFZhbGlkYXRvciA9IChlbWFpbCkgPT4ge1xyXG4gIGlmICgvXlxcdysoW1xcLi1dP1xcdyspKkBcXHcrKFtcXC4tXT9cXHcrKSooXFwuXFx3ezIsM30pKyQvLnRlc3QoZW1haWwpID09PSBmYWxzZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNFbWFpbFZhbGlkOiBmYWxzZSxcclxuICAgICAgbXNnOiBcInBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3NcIixcclxuICAgIH07XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBpc0VtYWlsVmFsaWQ6IHRydWUsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmaWVsZFZhbGlkYXRpb24gPSAoY29sbGVjdGlvbk9mRmllbGRzKSA9PiB7XHJcbiAgY29uc3QgZmllbGRzID0gT2JqZWN0LmtleXMoY29sbGVjdGlvbk9mRmllbGRzKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpZWxkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3QgZmllbGQgPSBmaWVsZHNbaV07XHJcbiAgICBjb25zdCBmaWVsZFZhbHVlID0gY29sbGVjdGlvbk9mRmllbGRzW2ZpZWxkXTtcclxuICAgIGlmIChmaWVsZCA9PT0gXCJlbWFpbFwiKSB7XHJcbiAgICAgIGNvbnN0IHsgaXNFbWFpbFZhbGlkLCBtc2cgfSA9IGVtYWlsVmFsaWRhdG9yKGZpZWxkVmFsdWUpO1xyXG4gICAgICBpZiAoIWlzRW1haWxWYWxpZCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpc0RhdGFWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgICBmaWVsZCxcclxuICAgICAgICAgIG1zZyxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZmllbGRWYWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpc0RhdGFWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgZmllbGQsXHJcbiAgICAgICAgbXNnOiBgcGxlYXNlIHByb3ZpZGUgYSB2YWxpZCAke2ZpZWxkfWAsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBpZiAoZmllbGQgPT09IFwicGFzc3dvcmRcIiAmJiBmaWVsZHMuaW5jbHVkZXMoXCJjb25maXJtUGFzc3dvcmRcIikpIHtcclxuICAgICAgaWYgKGZpZWxkVmFsdWUgIT09IGNvbGxlY3Rpb25PZkZpZWxkc1tcImNvbmZpcm1QYXNzd29yZFwiXSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpc0RhdGFWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgICBmaWVsZCxcclxuICAgICAgICAgIG1zZzogYHBhc3N3b3JkIGFuZCBjb25maXJtIHBhc3N3b3JkIGZpZWxkIGRvZXMgbm90IG1hdGNoYCxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBpc0RhdGFWYWxpZDogdHJ1ZSxcclxuICB9O1xyXG59O1xyXG4iXSwibmFtZXMiOlsiZW1haWxWYWxpZGF0b3IiLCJlbWFpbCIsInRlc3QiLCJpc0VtYWlsVmFsaWQiLCJtc2ciLCJmaWVsZFZhbGlkYXRpb24iLCJjb2xsZWN0aW9uT2ZGaWVsZHMiLCJmaWVsZHMiLCJPYmplY3QiLCJrZXlzIiwiaSIsImxlbmd0aCIsImZpZWxkIiwiZmllbGRWYWx1ZSIsImlzRGF0YVZhbGlkIiwiaW5jbHVkZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/helpers/validator.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_netflix_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/netflix.jpg */ \"(app-pages-browser)/./public/netflix.jpg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/validator */ \"(app-pages-browser)/./src/app/helpers/validator.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst defaultUserCredentials = {\n    email: \"\",\n    password: \"\"\n};\nconst defaultError = {};\nfunction Home() {\n    _s();\n    const [userCredentials, setUserCredentials] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(defaultUserCredentials);\n    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(defaultError);\n    const handleEmail = (e)=>{\n        setUserCredentials((prev)=>({\n                ...prev,\n                email: e.target.value\n            }));\n    };\n    const handlePassword = (e)=>{\n        console.log(\"enter\");\n        setUserCredentials((prev)=>({\n                ...prev,\n                password: e.target.value\n            }));\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(userCredentials);\n        const { isDataValid, field, msg } = (0,_helpers_validator__WEBPACK_IMPORTED_MODULE_4__.fieldvalidation)(userCredentials);\n        console.log(isDataValid, field, msg);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"main-container  h-screen w-screen flex  justify-center items-center \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[rgba(0,0,0,0.7)] w-1/2 h-1/2  \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"login_container flex flex-col justify-center items-center gap-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-white font-[700] text-[3rem]\",\n                            children: \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\page.js\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"space-y-2 \",\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        placeholder: \"email\",\n                                        value: userCredentials.email,\n                                        onChange: handleEmail\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: showPassword == true ? \"text\" : \"password\",\n                                        placeholder: \"Password\",\n                                        value: userCredentials.password,\n                                        onChange: handlePassword\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"bg-red-600 w-full\",\n                                    children: \"Login\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\page.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\page.js\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\page.js\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\page.js\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ROG STRIX\\\\Desktop\\\\oj_alg0\\\\frontend\\\\src\\\\app\\\\page.js\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Home, \"CBIzE0dQCiavpOTgJggBahWq0M4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQytCO0FBQ2E7QUFDWDtBQUNxQjtBQUN0RCxNQUFNSSx5QkFBeUI7SUFDN0JDLE9BQU87SUFDUEMsVUFBVTtBQUNaO0FBQ0EsTUFBTUMsZUFBZSxDQUFDO0FBQ1AsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR1IsK0NBQVFBLENBQ3BERTtJQUVGLE1BQU0sQ0FBQ08sY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1csV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNhLFFBQVFDLFVBQVUsR0FBR2QsK0NBQVFBLENBQUNLO0lBQ3JDLE1BQU1VLGNBQWMsQ0FBQ0M7UUFDbkJSLG1CQUFtQixDQUFDUyxPQUFVO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUVkLE9BQU9hLEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSztZQUFDO0lBQ2pFO0lBQ0EsTUFBTUMsaUJBQWlCLENBQUNKO1FBQ3RCSyxRQUFRQyxHQUFHLENBQUM7UUFDWmQsbUJBQW1CLENBQUNTLE9BQVU7Z0JBQUUsR0FBR0EsSUFBSTtnQkFBRWIsVUFBVVksRUFBRUUsTUFBTSxDQUFDQyxLQUFLO1lBQUM7SUFDcEU7SUFDQSxNQUFNSSxlQUFlLENBQUNQO1FBQ3BCQSxFQUFFUSxjQUFjO1FBQ2hCSCxRQUFRQyxHQUFHLENBQUNmO1FBQ1osTUFBTSxFQUFFa0IsV0FBVyxFQUFFQyxLQUFLLEVBQUVDLEdBQUcsRUFBRSxHQUFHMUIsbUVBQWVBLENBQUNNO1FBQ3BEYyxRQUFRQyxHQUFHLENBQUNHLGFBQWFDLE9BQU9DO0lBQ2xDO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFHRCxXQUFVO3NDQUFvQzs7Ozs7O3NDQUNsRCw4REFBQ0U7NEJBQUtGLFdBQVU7NEJBQWFHLFVBQVVUOzs4Q0FDckMsOERBQUNLOzhDQUNDLDRFQUFDSzt3Q0FDQ0MsTUFBSzt3Q0FDTEMsYUFBWTt3Q0FDWmhCLE9BQU9aLGdCQUFnQkosS0FBSzt3Q0FDNUJpQyxVQUFVckI7Ozs7Ozs7Ozs7OzhDQUdkLDhEQUFDYTs4Q0FDQyw0RUFBQ0s7d0NBQ0NDLE1BQU16QixnQkFBZ0IsT0FBTyxTQUFTO3dDQUN0QzBCLGFBQVk7d0NBQ1poQixPQUFPWixnQkFBZ0JILFFBQVE7d0NBQy9CZ0MsVUFBVWhCOzs7Ozs7Ozs7Ozs4Q0FJZCw4REFBQ2lCO29DQUFPSCxNQUFLO29DQUFTTCxXQUFVOzhDQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTbEU7R0F0RHdCdkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBsb2dvIGZyb20gXCIuLi8uLi9wdWJsaWMvbmV0ZmxpeC5qcGdcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBmaWVsZHZhbGlkYXRpb24gfSBmcm9tIFwiLi9oZWxwZXJzL3ZhbGlkYXRvclwiO1xuY29uc3QgZGVmYXVsdFVzZXJDcmVkZW50aWFscyA9IHtcbiAgZW1haWw6IFwiXCIsXG4gIHBhc3N3b3JkOiBcIlwiLFxufTtcbmNvbnN0IGRlZmF1bHRFcnJvciA9IHt9O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3VzZXJDcmVkZW50aWFscywgc2V0VXNlckNyZWRlbnRpYWxzXSA9IHVzZVN0YXRlKFxuICAgIGRlZmF1bHRVc2VyQ3JlZGVudGlhbHNcbiAgKTtcbiAgY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9ycywgc2V0RXJyb3JzXSA9IHVzZVN0YXRlKGRlZmF1bHRFcnJvcik7XG4gIGNvbnN0IGhhbmRsZUVtYWlsID0gKGUpID0+IHtcbiAgICBzZXRVc2VyQ3JlZGVudGlhbHMoKHByZXYpID0+ICh7IC4uLnByZXYsIGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVBhc3N3b3JkID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImVudGVyXCIpO1xuICAgIHNldFVzZXJDcmVkZW50aWFscygocHJldikgPT4gKHsgLi4ucHJldiwgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2codXNlckNyZWRlbnRpYWxzKTtcbiAgICBjb25zdCB7IGlzRGF0YVZhbGlkLCBmaWVsZCwgbXNnIH0gPSBmaWVsZHZhbGlkYXRpb24odXNlckNyZWRlbnRpYWxzKTtcbiAgICBjb25zb2xlLmxvZyhpc0RhdGFWYWxpZCwgZmllbGQsIG1zZyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbnRhaW5lciAgaC1zY3JlZW4gdy1zY3JlZW4gZmxleCAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVtyZ2JhKDAsMCwwLDAuNyldIHctMS8yIGgtMS8yICBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luX2NvbnRhaW5lciBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1bNzAwXSB0ZXh0LVszcmVtXVwiPlNpZ24gSW48L2gxPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic3BhY2UteS0yIFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlckNyZWRlbnRpYWxzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVtYWlsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3N3b3JkID09IHRydWUgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJDcmVkZW50aWFscy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQYXNzd29yZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJiZy1yZWQtNjAwIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwibG9nbyIsInVzZVN0YXRlIiwiZmllbGR2YWxpZGF0aW9uIiwiZGVmYXVsdFVzZXJDcmVkZW50aWFscyIsImVtYWlsIiwicGFzc3dvcmQiLCJkZWZhdWx0RXJyb3IiLCJIb21lIiwidXNlckNyZWRlbnRpYWxzIiwic2V0VXNlckNyZWRlbnRpYWxzIiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwiaGFuZGxlRW1haWwiLCJlIiwicHJldiIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlUGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJpc0RhdGFWYWxpZCIsImZpZWxkIiwibXNnIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});