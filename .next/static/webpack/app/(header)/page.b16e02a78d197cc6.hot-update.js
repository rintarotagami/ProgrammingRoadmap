"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(header)/page",{

/***/ "(app-pages-browser)/./src/app/(header)/page.tsx":
/*!***********************************!*\
  !*** ./src/app/(header)/page.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var leader_line_new__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leader-line-new */ \"(app-pages-browser)/./node_modules/leader-line-new/leader-line.min.js\");\n/* harmony import */ var leader_line_new__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leader_line_new__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_elements_mindmap_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/elements/mindmap/card */ \"(app-pages-browser)/./src/components/elements/mindmap/card.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const cards = [\n        {\n            cardId: \"1\",\n            cardName: \"Internet\"\n        },\n        {\n            cardId: \"2\",\n            cardName: \"HTML\"\n        },\n        {\n            cardId: \"3\",\n            cardName: \"CSS\"\n        },\n        {\n            cardId: \"4\",\n            cardName: \"JavaScript\"\n        },\n        {\n            cardId: \"5\",\n            cardName: \"パッケージマネージャー\"\n        },\n        {\n            cardId: \"6\",\n            cardName: \"JSフレームワーク\"\n        },\n        {\n            cardId: \"7\",\n            cardName: \"CSSフレームワーク\"\n        },\n        {\n            cardId: \"8\",\n            cardName: \"CSSアーキテクチャ\"\n        }\n    ];\n    const relations = [\n        {\n            start: \"1\",\n            end: \"2\"\n        },\n        {\n            start: \"2\",\n            end: \"3\"\n        },\n        {\n            start: \"3\",\n            end: \"4\"\n        },\n        {\n            start: \"4\",\n            end: \"5\"\n        },\n        {\n            start: \"5\",\n            end: \"6\"\n        },\n        {\n            start: \"6\",\n            end: \"7\"\n        },\n        {\n            start: \"7\",\n            end: \"8\"\n        }\n    ];\n    const lines = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        relations.forEach((connection, index)=>{\n            const startElement = document.getElementById(\"card-\".concat(connection.start));\n            const endElement = document.getElementById(\"card-\".concat(connection.end));\n            if (startElement && endElement) {\n                const line = new (leader_line_new__WEBPACK_IMPORTED_MODULE_2___default())(startElement, endElement);\n                lines.current.push(line);\n            }\n        });\n        return ()=>{\n            lines.current.forEach((line)=>line.remove());\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-8 flex flex-col items-center justify-center h-screen\",\n        children: cards.map((card)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_elements_mindmap_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                cardId: card.cardId,\n                cardName: card.cardName\n            }, card.cardId, false, {\n                fileName: \"C:\\\\Users\\\\rintaro\\\\Desktop\\\\Vscode\\\\G's Acaedmy\\\\ProgrammingRoadmap\\\\src\\\\app\\\\(header)\\\\page.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\rintaro\\\\Desktop\\\\Vscode\\\\G's Acaedmy\\\\ProgrammingRoadmap\\\\src\\\\app\\\\(header)\\\\page.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Z5m7NjWGx+aNc7gjCWxIqXRUsqs=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGhlYWRlcikvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ2lEO0FBQ1I7QUFDaUI7QUFFM0MsU0FBU0s7O0lBQ3RCLE1BQU1DLFFBQVE7UUFDWjtZQUFFQyxRQUFRO1lBQUtDLFVBQVU7UUFBVztRQUNwQztZQUFFRCxRQUFRO1lBQUtDLFVBQVU7UUFBTztRQUNoQztZQUFFRCxRQUFRO1lBQUtDLFVBQVU7UUFBTTtRQUMvQjtZQUFFRCxRQUFRO1lBQUtDLFVBQVU7UUFBYTtRQUN0QztZQUFFRCxRQUFRO1lBQUtDLFVBQVU7UUFBYztRQUN2QztZQUFFRCxRQUFRO1lBQUtDLFVBQVU7UUFBWTtRQUNyQztZQUFFRCxRQUFRO1lBQUtDLFVBQVU7UUFBYTtRQUN0QztZQUFFRCxRQUFRO1lBQUtDLFVBQVU7UUFBYTtLQUN2QztJQUVELE1BQU1DLFlBQVk7UUFDaEI7WUFBRUMsT0FBTztZQUFLQyxLQUFLO1FBQUk7UUFDdkI7WUFBRUQsT0FBTztZQUFLQyxLQUFLO1FBQUk7UUFDdkI7WUFBRUQsT0FBTztZQUFLQyxLQUFLO1FBQUk7UUFDdkI7WUFBRUQsT0FBTztZQUFLQyxLQUFLO1FBQUk7UUFDdkI7WUFBRUQsT0FBTztZQUFLQyxLQUFLO1FBQUk7UUFDdkI7WUFBRUQsT0FBTztZQUFLQyxLQUFLO1FBQUk7UUFDdkI7WUFBRUQsT0FBTztZQUFLQyxLQUFLO1FBQUk7S0FDeEI7SUFFRCxNQUFNQyxRQUFRViw2Q0FBTUEsQ0FBZSxFQUFFO0lBRXJDRCxnREFBU0EsQ0FBQztRQUNSUSxVQUFVSSxPQUFPLENBQUMsQ0FBQ0MsWUFBWUM7WUFDN0IsTUFBTUMsZUFBZUMsU0FBU0MsY0FBYyxDQUFDLFFBQXlCLE9BQWpCSixXQUFXSixLQUFLO1lBQ3JFLE1BQU1TLGFBQWFGLFNBQVNDLGNBQWMsQ0FBQyxRQUF1QixPQUFmSixXQUFXSCxHQUFHO1lBQ2pFLElBQUlLLGdCQUFnQkcsWUFBWTtnQkFDOUIsTUFBTUMsT0FBTyxJQUFJakIsd0RBQVVBLENBQUNhLGNBQWNHO2dCQUMxQ1AsTUFBTVMsT0FBTyxDQUFDQyxJQUFJLENBQUNGO1lBQ3JCO1FBQ0Y7UUFFQSxPQUFPO1lBQ0xSLE1BQU1TLE9BQU8sQ0FBQ1IsT0FBTyxDQUFDTyxDQUFBQSxPQUFRQSxLQUFLRyxNQUFNO1FBQzNDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1puQixNQUFNb0IsR0FBRyxDQUFDQyxDQUFBQSxxQkFDVCw4REFBQ3ZCLHlFQUFJQTtnQkFBbUJHLFFBQVFvQixLQUFLcEIsTUFBTTtnQkFBRUMsVUFBVW1CLEtBQUtuQixRQUFRO2VBQXpEbUIsS0FBS3BCLE1BQU07Ozs7Ozs7Ozs7QUFJOUI7R0E5Q3dCRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhoZWFkZXIpL3BhZ2UudHN4P2FlYWUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGVhZGVyTGluZSBmcm9tIFwibGVhZGVyLWxpbmUtbmV3XCI7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZWxlbWVudHMvbWluZG1hcC9jYXJkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgY2FyZHMgPSBbXHJcbiAgICB7IGNhcmRJZDogJzEnLCBjYXJkTmFtZTogJ0ludGVybmV0JyB9LFxyXG4gICAgeyBjYXJkSWQ6ICcyJywgY2FyZE5hbWU6ICdIVE1MJyB9LFxyXG4gICAgeyBjYXJkSWQ6ICczJywgY2FyZE5hbWU6ICdDU1MnIH0sXHJcbiAgICB7IGNhcmRJZDogJzQnLCBjYXJkTmFtZTogJ0phdmFTY3JpcHQnIH0sXHJcbiAgICB7IGNhcmRJZDogJzUnLCBjYXJkTmFtZTogJ+ODkeODg+OCseODvOOCuOODnuODjeODvOOCuOODo+ODvCcgfSxcclxuICAgIHsgY2FyZElkOiAnNicsIGNhcmROYW1lOiAnSlPjg5Xjg6zjg7zjg6Djg6/jg7zjgq8nIH0sXHJcbiAgICB7IGNhcmRJZDogJzcnLCBjYXJkTmFtZTogJ0NTU+ODleODrOODvOODoOODr+ODvOOCrycgfSxcclxuICAgIHsgY2FyZElkOiAnOCcsIGNhcmROYW1lOiAnQ1NT44Ki44O844Kt44OG44Kv44OB44OjJyB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IHJlbGF0aW9ucyA9IFtcclxuICAgIHsgc3RhcnQ6ICcxJywgZW5kOiAnMicgfSxcclxuICAgIHsgc3RhcnQ6ICcyJywgZW5kOiAnMycgfSxcclxuICAgIHsgc3RhcnQ6ICczJywgZW5kOiAnNCcgfSxcclxuICAgIHsgc3RhcnQ6ICc0JywgZW5kOiAnNScgfSxcclxuICAgIHsgc3RhcnQ6ICc1JywgZW5kOiAnNicgfSxcclxuICAgIHsgc3RhcnQ6ICc2JywgZW5kOiAnNycgfSxcclxuICAgIHsgc3RhcnQ6ICc3JywgZW5kOiAnOCcgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGxpbmVzID0gdXNlUmVmPExlYWRlckxpbmVbXT4oW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVsYXRpb25zLmZvckVhY2goKGNvbm5lY3Rpb24sIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHN0YXJ0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYXJkLSR7Y29ubmVjdGlvbi5zdGFydH1gKTtcclxuICAgICAgY29uc3QgZW5kRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYXJkLSR7Y29ubmVjdGlvbi5lbmR9YCk7XHJcbiAgICAgIGlmIChzdGFydEVsZW1lbnQgJiYgZW5kRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGxpbmUgPSBuZXcgTGVhZGVyTGluZShzdGFydEVsZW1lbnQsIGVuZEVsZW1lbnQpO1xyXG4gICAgICAgIGxpbmVzLmN1cnJlbnQucHVzaChsaW5lKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgbGluZXMuY3VycmVudC5mb3JFYWNoKGxpbmUgPT4gbGluZS5yZW1vdmUoKSk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC04IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGgtc2NyZWVuXCI+XHJcbiAgICAgIHtjYXJkcy5tYXAoY2FyZCA9PiAoXHJcbiAgICAgICAgPENhcmQga2V5PXtjYXJkLmNhcmRJZH0gY2FyZElkPXtjYXJkLmNhcmRJZH0gY2FyZE5hbWU9e2NhcmQuY2FyZE5hbWV9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJMZWFkZXJMaW5lIiwiQ2FyZCIsIkhvbWUiLCJjYXJkcyIsImNhcmRJZCIsImNhcmROYW1lIiwicmVsYXRpb25zIiwic3RhcnQiLCJlbmQiLCJsaW5lcyIsImZvckVhY2giLCJjb25uZWN0aW9uIiwiaW5kZXgiLCJzdGFydEVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZW5kRWxlbWVudCIsImxpbmUiLCJjdXJyZW50IiwicHVzaCIsInJlbW92ZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImNhcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(header)/page.tsx\n"));

/***/ })

});