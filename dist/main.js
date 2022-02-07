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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home.js */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu.js */ \"./src/pages/menu.js\");\n/* harmony import */ var _pages_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contact.js */ \"./src/pages/contact.js\");\n\n\n\n\n\n\nfunction createHeader() {\n    const header = document.createElement(\"header\");\n    header.classList.add(\"header\");\n\n    const restaurant = document.createElement(\"h1\");\n    restaurant.classList.add(\"restaurant\");\n    restaurant.innerText = \"Dragon Bowl\";\n\n    header.appendChild(restaurant);\n    header.appendChild(createNavElements());\n    header.appendChild(createHamburgerNavElements());\n    \n    return header;\n}\n\nfunction createNavElements() {\n    const navContainer = document.createElement(\"nav\");\n    navContainer.classList.add(\"navigation\");\n\n    // hamburger nav\n    const anchor = document.createElement(\"a\");\n    anchor.href = \"#\";\n    anchor.classList.add(\"toggle-button\");\n\n    for (let i =0; i < 3; i++) {\n        const span = document.createElement(\"span\");\n        span.classList.add(\"bar\");\n        anchor.appendChild(span);\n    }\n\n    navContainer.appendChild(anchor);\n\n    // regular nav\n    const home = document.createElement(\"button\");\n    home.classList.add(\"nav-button\");\n    home.innerText = \"Home\";\n    home.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActive(home);\n        setContent((0,_pages_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    });\n\n    const menu = document.createElement(\"button\");\n    menu.classList.add(\"nav-button\");\n    menu.innerText = \"Menu\";\n    menu.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActive(menu);\n        setContent((0,_pages_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    });\n\n    const contact = document.createElement(\"button\");\n    contact.classList.add(\"nav-button\");\n    contact.classList.add(\"contact-button\");\n    contact.innerText = \"Contact\";\n    contact.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setActive(contact);\n        setContent((0,_pages_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    });\n\n    navContainer.appendChild(home);\n    navContainer.appendChild(menu);\n    navContainer.appendChild(contact);\n\n    return navContainer\n}\n\nfunction createHamburgerNavElements() {\n    const nav = document.createElement(\"nav\");\n    nav.classList.add(\"mobile-nav\");\n\n    const homeButton = document.createElement(\"button\");\n    homeButton.classList.add(\"b\");\n    homeButton.innerText = \"Home\";\n    homeButton.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setContent((0,_pages_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    });\n    nav.appendChild(homeButton);\n\n    const menuButton = document.createElement(\"button\");\n    menuButton.classList.add(\"b\");\n    menuButton.innerText = \"Menu\";\n    menuButton.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setContent((0,_pages_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    });\n    nav.appendChild(menuButton);\n\n    const contactButton = document.createElement(\"button\");\n    contactButton.classList.add(\"b\");\n    contactButton.innerText = \"Contact\";\n    contactButton.addEventListener(\"click\", (e) => {\n        if (e.target.classList.contains(\"active\")) return;\n        setContent((0,_pages_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    });\n    nav.appendChild(contactButton);\n\n    return nav;\n    \n}\n\nfunction setActive(button) {\n    const buttons = document.querySelectorAll(\".nav-button\");\n\n    buttons.forEach((button) => {\n        if (button !== this) {\n            button.classList.remove(\"active\");\n        }\n    });\n    button.classList.add(\"active\");\n}\n\nfunction setContent(newContent) {\n    const content = document.getElementById(\"content\");\n    while (content.firstChild) {\n        content.removeChild(content.lastChild);\n    }\n    content.appendChild(newContent);\n}\n\nfunction createResizeListener() {\n    const mobileMenu = document.getElementsByClassName(\"mobile-nav\")[0];\n    const toggleButton = document.getElementsByClassName(\"toggle-button\")[0];\n    toggleButton.addEventListener(\"click\", () => {\n        mobileMenu.classList.toggle(\"active\");\n    })\n\n    window.addEventListener(\"resize\", () => {\n        if (window.matchMedia(\"(min-width: 600px)\").matches) {\n            mobileMenu.classList.remove(\"active\");\n        }\n    })\n};\n\nfunction initWebsite() {\n    const body = document.body;\n    body.prepend(createHeader());\n    createResizeListener();\n\n}\n\ninitWebsite();\nsetContent((0,_pages_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadContact = () => {\n    const container = document.createElement(\"div\");\n    container.classList.add(\"contact-body\");\n\n    const phoneNumber = document.createElement(\"div\");\n    phoneNumber.classList.add(\"contact-phone\");\n    phoneNumber.innerText = \"📞 0800 838383\";\n    container.appendChild(phoneNumber);\n\n    const location = document.createElement(\"div\");\n    location.classList.add(\"contact-location\");\n    location.innerText = \"🏠 123 Asia Lane, Javenport, New Zealand\";\n    container.appendChild(location);\n\n    return container\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://odin-restaurant/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadHome = () => {\n    const home = document.createElement(\"div\");\n    home.classList.add(\"main-body-home\");\n    home.innerText = \"Eat the Best Asian Food... \\n\\n Right in Your Neighbourhood\";\n    \n    return home;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://odin-restaurant/./src/pages/home.js?");

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadMenu = () => {\n    const container = document.createElement(\"div\");\n    container.classList.add(\"menu-body\");\n\n    const menu_title = document.createElement(\"div\");\n    menu_title.classList.add(\"menu-title\");\n    menu_title.innerText = \"Menu...\";\n    container.appendChild(menu_title);\n\n\n    const item_1 = document.createElement(\"div\");\n    item_1.classList.add(\"menu-item-container\");\n    const item_1_title = document.createElement(\"div\");\n    item_1_title.classList.add(\"menu-item-title\");\n    item_1_title.innerText = \"Asian BBQ Chicken\";\n    item_1.appendChild(item_1_title);\n    const item_1_description = document.createElement(\"div\");\n    item_1_description.classList.add(\"menu_item-desc\");\n    item_1_description.innerText = \"Chicken cooked to perfection dipped in beautiful BBQ sauce\";\n    item_1.appendChild(item_1_description);\n    container.appendChild(item_1);\n\n    const item_2 = document.createElement(\"div\");\n    item_2.classList.add(\"menu-item-container\");\n    const item_2_title = document.createElement(\"div\");\n    item_2_title.classList.add(\"menu-item-title\");\n    item_2_title.innerText = \"Sweet and Sour Pork\";\n    item_2.appendChild(item_2_title);\n    const item_2_description = document.createElement(\"div\");\n    item_2_description.classList.add(\"menu_item-desc\");\n    item_2_description.innerText = \"Unbelievable pork drizzled with sweet and sour sauce\";\n    item_2.appendChild(item_2_description);\n    container.appendChild(item_2);\n\n    const item_3 = document.createElement(\"div\");\n    item_3.classList.add(\"menu-item-container\");\n    const item_3_title = document.createElement(\"div\");\n    item_3_title.classList.add(\"menu-item-title\");\n    item_3_title.innerText = \"Black Bean Beef\";\n    item_3.appendChild(item_3_title);\n    const item_3_description = document.createElement(\"div\");\n    item_3_description.classList.add(\"menu_item-desc\");\n    item_3_description.innerText = \"Sticky rice, black bean sauce, sesame oil mixed with red pepper\";\n    item_3.appendChild(item_3_description);\n    container.appendChild(item_3);\n\n    const item_4 = document.createElement(\"div\");\n    item_4.classList.add(\"menu-item-container\");\n    const item_4_title = document.createElement(\"div\");\n    item_4_title.classList.add(\"menu-item-title\");\n    item_4_title.innerText = \"Combination Vegetable\";\n    item_4.appendChild(item_4_title);\n    const item_4_description = document.createElement(\"div\");\n    item_4_description.classList.add(\"menu_item-desc\");\n    item_4_description.innerText = \"A vegetarian option consisting of a vegetable potpourri and others\";\n    item_4.appendChild(item_4_description);\n    container.appendChild(item_4);\n    \n    \n    return container;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://odin-restaurant/./src/pages/menu.js?");

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