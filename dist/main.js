/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home.js */ \"./src/pages/home.js\");\n\n\nfunction createHeader() {\n    const header = document.createElement(\"header\");\n    header.classList.add(\"header\");\n\n    const restaurant = document.createElement(\"h1\");\n    restaurant.classList.add(\"restaurant\");\n    restaurant.innerText = \"Dragon Bowl\";\n\n    header.appendChild(restaurant);\n    header.appendChild(createNavElements());\n    \n    return header;\n}\n\nfunction createNavElements() {\n    const navContainer = document.createElement(\"nav\");\n    navContainer.classList.add(\"navigation\");\n\n    const home = document.createElement(\"button\");\n    home.classList.add(\"nav-button\");\n    home.innerText = \"Home\";\n    home.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActive(home);\n        (0,_pages_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n\n    const menu = document.createElement(\"button\");\n    menu.classList.add(\"nav-button\");\n    menu.innerText = \"Menu\";\n    menu.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActive(menu);\n        (0,_pages_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n\n    const contact = document.createElement(\"button\");\n    contact.classList.add(\"nav-button\");\n    contact.innerText = \"Contact\";\n    contact.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActive(contact);\n        (0,_pages_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n\n    navContainer.appendChild(home);\n    navContainer.appendChild(menu);\n    navContainer.appendChild(contact);\n\n    return navContainer\n}\n\nfunction setActive(button) {\n    const buttons = document.querySelectorAll(\".nav-button\");\n\n    buttons.forEach((button) => {\n        if (button !== this) {\n            button.classList.remove(\"active\");\n        }\n    });\n    button.classList.add(\"active\");\n}\n\nfunction initWebsite() {\n    const content = document.getElementById(\"content\");\n    content.appendChild(createHeader());\n}\n\ninitWebsite();\n(0,_pages_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadHome = () => {\n    const home = document.createElement(\"div\");\n    home.classList.add(\"main-body-home\");\n\n    const main_img = document.createElement(\"img\");\n    main_img.src = \"images/homepage.png\";\n    main_img.alt = \"Yummy Food!\";\n\n\n    home.appendChild(main_img);\n\n    return home;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://odin-restaurant/./src/pages/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;