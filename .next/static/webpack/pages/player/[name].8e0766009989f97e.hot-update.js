"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/player/[name]",{

/***/ "./pages/player/[name].tsx":
/*!*********************************!*\
  !*** ./pages/player/[name].tsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst PlayerPage = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { name } = router.query;\n    const [playerImage, setPlayerImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"PlayerPage.useEffect\": ()=>{\n            if (name) {\n                if (name === \"Sabrina\") {\n                    setPlayerImage(\"/photo/CorpsSabrina.png\");\n                } else if (name === \"Aude\") {\n                    setPlayerImage(\"/photo/CorpsAude.png\");\n                } else if (name === \"Charly\") {\n                    setPlayerImage(\"/photo/CorpsCharly.png\");\n                }\n            }\n        }\n    }[\"PlayerPage.useEffect\"], [\n        name\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        style: {\n            backgroundImage: \"url('/photo/setting.png')\",\n            backgroundSize: \"cover\",\n            backgroundPosition: \"center\",\n            height: \"100vh\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"center\",\n            alignItems: \"center\",\n            position: \"relative\",\n            textAlign: \"center\",\n            color: \"white\",\n            padding: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"absolute\",\n                    top: \"20px\",\n                    left: \"20px\",\n                    zIndex: 10\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/photo/logo.png\" // Assurez-vous que le logo est dans ce chemin\n                    ,\n                    alt: \"Logo\",\n                    style: {\n                        width: \"50px\",\n                        height: \"50px\",\n                        objectFit: \"contain\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/sabrina/Downloads/Nuit de l'info bis/dococean/pages/player/[name].tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/sabrina/Downloads/Nuit de l'info bis/dococean/pages/player/[name].tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    fontSize: \"40px\",\n                    fontWeight: \"bold\",\n                    marginBottom: \"20px\"\n                },\n                children: [\n                    \"Votre joueur : \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sabrina/Downloads/Nuit de l'info bis/dococean/pages/player/[name].tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            playerImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: playerImage,\n                alt: name,\n                style: {\n                    width: \"400px\",\n                    height: \"400px\",\n                    objectFit: \"contain\",\n                    borderRadius: \"15px\",\n                    boxShadow: \"0 4px 15px rgba(0, 0, 0, 0.5)\",\n                    marginBottom: \"20px\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/sabrina/Downloads/Nuit de l'info bis/dococean/pages/player/[name].tsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sabrina/Downloads/Nuit de l'info bis/dococean/pages/player/[name].tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PlayerPage, \"2cT+DoKuSZmA6rNIHJEF1Shj/8Y=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = PlayerPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerPage);\nvar _c;\n$RefreshReg$(_c, \"PlayerPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wbGF5ZXIvW25hbWVdLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QztBQUNXO0FBRW5ELE1BQU1JLGFBQWE7O0lBQ2pCLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVNLElBQUksRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBRTdCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBUztJQUV2REQsZ0RBQVNBO2dDQUFDO1lBQ1IsSUFBSUksTUFBTTtnQkFDUixJQUFJQSxTQUFTLFdBQVc7b0JBQ3RCRyxlQUFlO2dCQUNqQixPQUFPLElBQUlILFNBQVMsUUFBUTtvQkFDMUJHLGVBQWU7Z0JBQ2pCLE9BQU8sSUFBSUgsU0FBUyxVQUFVO29CQUM1QkcsZUFBZTtnQkFDakI7WUFDRjtRQUNGOytCQUFHO1FBQUNIO0tBQUs7SUFFVCxxQkFDRSw4REFBQ0k7UUFDQ0MsT0FBTztZQUNMQyxpQkFBaUI7WUFDakJDLGdCQUFnQjtZQUNoQkMsb0JBQW9CO1lBQ3BCQyxRQUFRO1lBQ1JDLFNBQVM7WUFDVEMsZUFBZTtZQUNmQyxnQkFBZ0I7WUFDaEJDLFlBQVk7WUFDWkMsVUFBVTtZQUNWQyxXQUFXO1lBQ1hDLE9BQU87WUFDUEMsU0FBUztRQUNYOzswQkFHQSw4REFBQ0M7Z0JBQ0NiLE9BQU87b0JBQ0xTLFVBQVU7b0JBQ1ZLLEtBQUs7b0JBQ0xDLE1BQU07b0JBQ05DLFFBQVE7Z0JBQ1Y7MEJBRUEsNEVBQUNDO29CQUNDQyxLQUFJLGtCQUFrQiw4Q0FBOEM7O29CQUNwRUMsS0FBSTtvQkFDSm5CLE9BQU87d0JBQ0xvQixPQUFPO3dCQUNQaEIsUUFBUTt3QkFDUmlCLFdBQVc7b0JBQ2I7Ozs7Ozs7Ozs7OzBCQUlKLDhEQUFDQztnQkFDQ3RCLE9BQU87b0JBQ0x1QixVQUFVO29CQUNWQyxZQUFZO29CQUNaQyxjQUFjO2dCQUNoQjs7b0JBQ0Q7b0JBQ2lCOUI7Ozs7Ozs7WUFJakJFLDZCQUNDLDhEQUFDb0I7Z0JBQ0NDLEtBQUtyQjtnQkFDTHNCLEtBQUt4QjtnQkFDTEssT0FBTztvQkFDTG9CLE9BQU87b0JBQ1BoQixRQUFRO29CQUNSaUIsV0FBVztvQkFDWEssY0FBYztvQkFDZEMsV0FBVztvQkFDWEYsY0FBYztnQkFDaEI7Ozs7Ozs7Ozs7OztBQUtWO0dBbEZNaEM7O1FBQ1dKLGtEQUFTQTs7O0tBRHBCSTtBQW9GTixpRUFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL3NhYnJpbmEvRG93bmxvYWRzL051aXQgZGUgbCdpbmZvIGJpcy9kb2NvY2Vhbi9wYWdlcy9wbGF5ZXIvW25hbWVdLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFBsYXllclBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IG5hbWUgfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zdCBbcGxheWVySW1hZ2UsIHNldFBsYXllckltYWdlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobmFtZSkge1xuICAgICAgaWYgKG5hbWUgPT09IFwiU2FicmluYVwiKSB7XG4gICAgICAgIHNldFBsYXllckltYWdlKFwiL3Bob3RvL0NvcnBzU2FicmluYS5wbmdcIik7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwiQXVkZVwiKSB7XG4gICAgICAgIHNldFBsYXllckltYWdlKFwiL3Bob3RvL0NvcnBzQXVkZS5wbmdcIik7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwiQ2hhcmx5XCIpIHtcbiAgICAgICAgc2V0UGxheWVySW1hZ2UoXCIvcGhvdG8vQ29ycHNDaGFybHkucG5nXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW25hbWVdKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBzdHlsZT17e1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKCcvcGhvdG8vc2V0dGluZy5wbmcnKVwiLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgcGFkZGluZzogXCIyMHB4XCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHsvKiBMb2dvIGVuIGhhdXQgw6AgZ2F1Y2hlICovfVxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgdG9wOiBcIjIwcHhcIixcbiAgICAgICAgICBsZWZ0OiBcIjIwcHhcIixcbiAgICAgICAgICB6SW5kZXg6IDEwLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL3Bob3RvL2xvZ28ucG5nXCIgLy8gQXNzdXJlei12b3VzIHF1ZSBsZSBsb2dvIGVzdCBkYW5zIGNlIGNoZW1pblxuICAgICAgICAgIGFsdD1cIkxvZ29cIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogXCI1MHB4XCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiNTBweFwiLFxuICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxoMVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGZvbnRTaXplOiBcIjQwcHhcIixcbiAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIiwgLy8gVGV4dGUgZW4gZ3Jhc1xuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIyMHB4XCIsIC8vIEVzcGFjZW1lbnQgZW50cmUgbGUgdGV4dGUgZXQgbCdpbWFnZVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBWb3RyZSBqb3VldXIgOiB7bmFtZX1cbiAgICAgIDwvaDE+XG5cbiAgICAgIHsvKiBJbWFnZSBkdSBqb3VldXIgKi99XG4gICAgICB7cGxheWVySW1hZ2UgJiYgKFxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtwbGF5ZXJJbWFnZX1cbiAgICAgICAgICBhbHQ9e25hbWUgYXMgc3RyaW5nfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB3aWR0aDogXCI0MDBweFwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjQwMHB4XCIsXG4gICAgICAgICAgICBvYmplY3RGaXQ6IFwiY29udGFpblwiLFxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjE1cHhcIixcbiAgICAgICAgICAgIGJveFNoYWRvdzogXCIwIDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC41KVwiLFxuICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjIwcHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJQYWdlO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQbGF5ZXJQYWdlIiwicm91dGVyIiwibmFtZSIsInF1ZXJ5IiwicGxheWVySW1hZ2UiLCJzZXRQbGF5ZXJJbWFnZSIsInNlY3Rpb24iLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiaGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJwb3NpdGlvbiIsInRleHRBbGlnbiIsImNvbG9yIiwicGFkZGluZyIsImRpdiIsInRvcCIsImxlZnQiLCJ6SW5kZXgiLCJpbWciLCJzcmMiLCJhbHQiLCJ3aWR0aCIsIm9iamVjdEZpdCIsImgxIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibWFyZ2luQm90dG9tIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/player/[name].tsx\n"));

/***/ })

});