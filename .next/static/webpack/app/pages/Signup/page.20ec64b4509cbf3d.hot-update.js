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

/***/ "(app-pages-browser)/./src/app/pages/api/auth.js":
/*!***********************************!*\
  !*** ./src/app/pages/api/auth.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   userLogin: function() { return /* binding */ userLogin; },\n/* harmony export */   userSignup: function() { return /* binding */ userSignup; }\n/* harmony export */ });\nconst ENDPOINT = \"https://oj-algo.onrender.com/api/auth\";\nconst userLogin = async (userCredentials)=>await fetch(\"\".concat(ENDPOINT, \"/LogIn\"), {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(userCredentials)\n    });\nconst userSignup = async (userCredentials)=>await fetch(\"\".concat(ENDPOINT, \"/signUp\"), {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(userCredentials)\n    });\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvYXBpL2F1dGguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNQSxXQUFXO0FBQ1YsTUFBTUMsWUFBWSxPQUFPQyxrQkFDOUIsTUFBTUMsTUFBTSxHQUFZLE9BQVRILFVBQVMsV0FBUztRQUMvQkksUUFBUTtRQUNSQyxTQUFTO1lBQUUsZ0JBQWdCO1FBQW1CO1FBQzlDQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNOO0lBQ3ZCLEdBQUc7QUFDRSxNQUFNTyxhQUFhLE9BQU9QLGtCQUMvQixNQUFNQyxNQUFNLEdBQVksT0FBVEgsVUFBUyxZQUFVO1FBQ2hDSSxRQUFRO1FBQ1JDLFNBQVM7WUFBRSxnQkFBZ0I7UUFBbUI7UUFDOUNDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ047SUFDdkIsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2VzL2FwaS9hdXRoLmpzPzY2NGIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRU5EUE9JTlQgPSBcImh0dHBzOi8vb2otYWxnby5vbnJlbmRlci5jb20vYXBpL2F1dGhcIjtcclxuZXhwb3J0IGNvbnN0IHVzZXJMb2dpbiA9IGFzeW5jICh1c2VyQ3JlZGVudGlhbHMpID0+XHJcbiAgYXdhaXQgZmV0Y2goYCR7RU5EUE9JTlR9L0xvZ0luYCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJDcmVkZW50aWFscyksXHJcbiAgfSk7XHJcbmV4cG9ydCBjb25zdCB1c2VyU2lnbnVwID0gYXN5bmMgKHVzZXJDcmVkZW50aWFscykgPT5cclxuICBhd2FpdCBmZXRjaChgJHtFTkRQT0lOVH0vc2lnblVwYCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJDcmVkZW50aWFscyksXHJcbiAgfSk7XHJcbiJdLCJuYW1lcyI6WyJFTkRQT0lOVCIsInVzZXJMb2dpbiIsInVzZXJDcmVkZW50aWFscyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlclNpZ251cCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/api/auth.js\n"));

/***/ })

});