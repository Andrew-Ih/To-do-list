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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    width: max(100vw,1512px);\n    height: max(100vh, 700px);\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Noto Sans\", \n    Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", sans-serif;\n    display: flex;\n}\n\n.svg {\n    height: 30px;\n    width: 30px;\n}\n\n.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black color */\n    z-index: 999; /* Ensure the overlay is on top of other content */\n    display: none; /* Initially hidden */\n}\n\n.sidebar {\n    background-color: rgb(249, 246, 243);\n    height: max(100%, 700px);\n    /* width: max(20%,300px); */\n    width: 300px;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    padding: 0 15px;\n    box-sizing: border-box;\n    gap: 20px;\n}\n\n.content {\n    width: max(1262px, 100%);\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.tasks-projects-left {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    font-size: 15px;\n}\n\n.num {\n    font-size: 15px;\n}\n\n/* Header  */\n.header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.title {\n    color: rgb(81, 81, 81);\n}\n\n/* Tasks sidebar div */\n.tasks-container {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n/* Add task button */\n.add-task-btn {\n    font-size: 15px;\n    font-weight: bold;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-style: none;\n    background-color: rgb(249, 246, 243);\n    gap: 5px;\n    padding-left: 1px;\n}\n\n.add-task-btn:active {\n    transform: translateY(2px); \n    box-shadow: none; \n}\n\n.add-task-btn:hover {\n    color: red;\n}\n\n.add-task-btn img {\n    width: 40px;\n    height: 40px;\n}\n\n\n/* All tasks button */\n.all-tasks-btn {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    border-style: none;\n    background-color: rgb(249, 246, 243);\n}\n\n.all-tasks-btn:hover {\n    background-color: rgb(239, 225, 211);\n}\n\n/* Today button */\n.today-btn {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    border-style: none;\n    background-color: rgb(249, 246, 243);\n}\n\n.today-btn:hover {\n    background-color: rgb(239, 225, 211);\n}\n\n/* Overdue button */\n.overdue-btn {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    border-style: none;\n    background-color: rgb(249, 246, 243);\n}\n\n.overdue-btn:hover {\n    background-color: rgb(239, 225, 211);\n}\n\n/* Projects */\n.projects-container {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n}\n\n.title-projects {\n    font-weight: bold;\n    margin-bottom: 15px;\n}\n\n\n.website-btn {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    border-style: none;\n    background-color: rgb(249, 246, 243);\n}\n\n.website-btn:hover {\n    background-color: rgb(239, 225, 211);\n}\n\n.video-btn {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    border-style: none;\n    background-color: rgb(249, 246, 243);\n}\n\n.video-btn:hover {\n    background-color: rgb(239, 225, 211);\n}\n\n.project-btn {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    border-style: none;\n    background-color: rgb(249, 246, 243);\n}\n\n.project-btn:hover {\n    background-color: rgb(239, 225, 211);\n}\n\n/* create new project button */\n.new-project {\n    background-color: rgb(249, 246, 243);\n    border-style: none;\n}\n\n.new-project:hover {\n    color: red;\n}\n\n.new-project:active {\n    transform: translateY(2px);\n    box-shadow: none; \n}\n\n\n/* All tasks container */\n\n.all-task-container {\n    height: 100%;\n    width: 100%;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.today-task-container {\n    height: 100%;\n    width: 100%;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.overdue-task-container {\n    height: 100%;\n    width: 100%;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n\n/* EACH TASK DESIGN */\n/* EACH TASK DESIGN */\n.task {\n    width: 100%;\n    height: auto;\n    padding: 10px 0;\n    display: flex;\n    justify-content: space-between; /* Space between content and delete button */\n    align-items: center;\n    border-bottom: 1px solid lightgrey;\n    box-sizing: border-box;\n}\n\n/* Container for checkbox and task details */\n.task-content-container {\n    display: flex;\n    align-items: center;\n    flex-grow: 1; /* Allows this container to grow and take up remaining space */\n    height: 100%;\n}\n\n/* Checkbox container */\n.check-box-container {\n    width: 30px;\n    padding-top: 12px;\n    margin-right: 15px; /* Adds space between the checkbox and task details */\n}\n\n.round {\n    position: relative;\n}\n\n.round label {\n    background-color: white;\n    border: 1px solid #ccc;\n    border-radius: 50%;\n    cursor: pointer;\n    height: 28px;\n    width: 28px;\n    left: 0;\n    top: 0;\n    position: absolute;\n}\n\n.round label:after {\n    border: 2px solid #fff;\n    border-top: none;\n    border-right: none;\n    content: \"\";\n    height: 6px;\n    left: 6px;\n    top: 8px;\n    opacity: 0;\n    position: absolute;\n    transform: rotate(-45deg);\n    width: 12px;\n}\n\n.round input[type=\"checkbox\"] {\n    visibility: hidden;\n}\n\n.round input[type=\"checkbox\"]:checked+label {\n    background-color: #66bb6a;\n    border-color: #66bb6a;\n}\n\n.round input[type=\"checkbox\"]:checked+label:after {\n    opacity: 1;\n}\n\n/* Task details container */\n.task-details {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    box-sizing: border-box;\n}\n\n.task-heading {\n    font-weight: bold;\n    font-size: 20px;\n}\n\n.task-notes {\n    font-size: 15px;\n    color: #555;\n}\n\n.task-duedate {\n    border-right: 1px solid black;\n    padding-right: 10px;\n}\n\n.date-project {\n    display: flex;\n    gap: 10px;\n    font-size: 15px;\n    color: red;\n}\n\n/* Delete button */\n.delete-task {\n    background-color: red;\n    color: white;\n    border: none;\n    border-radius: 50%;\n    width: 30px;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 16px;\n    cursor: pointer;\n    margin-left: 20px; /* Adds some space between the delete button and task details */\n}\n\n.delete-task:hover {\n    background-color: darkred;\n}\n\n\n/* *************************************************** */\n\n.display-mode {\n    width: 100%;\n    height: 200px;\n}\n\n.content-container {\n    border-bottom: 2px solid black;\n    height: 150px;\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    /* background-color: black; */\n}\n\n.task-container {\n    height: 100%;\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    /* background-color: red; */\n}\n\n\n/* Add button dialog form */\n.add-task-dialog {\n    position: fixed;\n    width: 350px;\n    height: 450px;\n    border-style: none;\n    border-radius: 20px;\n}\n\n.dialog-content {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    justify-content: space-between;\n    align-items: center;\n    box-sizing: border-box;\n    padding: 20px;\n    padding-top: 0px;\n}\n\n.add-task-form {\n    display: flex;\n    flex-direction: column;\n}\n\nform label {\n    font-weight: bold;\n}\n\nform input, select, textarea {\n    width: 300px;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    padding: 8px;\n    margin-top: 5px;\n    margin-bottom: 10px;\n    font-size: 13px;\n}\n\nform #notes {\n    height: 40px;\n    vertical-align: top; \n    resize: none; \n    overflow-y: auto; \n}\n\nform select {\n    width: 317px;\n}\n\n.form-buttons {\n    display: flex;\n    gap: 10px;\n}\n\n.form-buttons button {\n    width: 150px;\n    height: 40px;\n    border-style: none;\n    border-radius: 5px;\n    font-size: 15px;\n}\n\n.form-buttons button:active {\n    transform: translateY(2px); \n    box-shadow: none; \n}\n\n.form-buttons button:hover {\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);\n}\n\n.form-buttons .cancel-task {\n    background-color: #ccc;\n}\n\n.form-buttons .save-task {\n    background-color: rgb(0, 180, 0);\n}\n\n\n/* CREATE NEW PROJECT DIALOG */\n.add-new-project {\n    position: fixed;\n    width: 350px;\n    height: 200px;\n    border-style: none;\n    border-radius: 20px;\n}\n\n.add-project-form {\n    display: flex;\n    flex-direction: column;\n}\n\n.form-buttons .cancel-project {\n    background-color: #ccc;\n}\n\n.form-buttons .save-project {\n    background-color: rgb(0, 180, 0);\n}\n\n\n\n\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ \"./src/sidebar.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _img_folder_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/folder.svg */ \"./src/img/folder.svg\");\n\n\n\n\n\nconst addTaskDialog = document.querySelector('.add-task-dialog');\nconst addTaskButton = document.querySelector('.add-task-btn');\nconst addProjectDialog = document.querySelector('.add-new-project');\nconst addProjectButton = document.querySelector('.new-project');\nconst overlay = document.querySelector('.overlay');\n\n\n(0,_sidebar__WEBPACK_IMPORTED_MODULE_1__.createSidebar)();\n(0,_tasks__WEBPACK_IMPORTED_MODULE_2__.allTasksContainer)();\n\n// todaysTasksContainer();\n// overdueTasksContainer();\n\n\n// Add event listeners to buttons\ndocument.querySelector('.all-tasks-btn').addEventListener('click', () => {\n    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.allTasksContainer)();\n});\n\ndocument.querySelector('.today-btn').addEventListener('click', () => {\n    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.todaysTasksContainer)();\n});\n\ndocument.querySelector('.overdue-btn').addEventListener('click', () => {\n    (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.overdueTasksContainer)();\n});\n\n\nconst saveProjectButton = document.querySelector('.save-project');\n(0,_sidebar__WEBPACK_IMPORTED_MODULE_1__.addNewProject)(saveProjectButton);\n\naddTaskButton.addEventListener('click', () => {\n    addTaskDialog.showModal(); // Open the dialog\n    overlay.style.display = 'block'; // Display the overlay\n});\n\naddProjectButton.addEventListener('click', () => {\n    addProjectDialog.showModal(); // Open the dialog\n    overlay.style.display = 'block'; // Display the overlay\n});\n\n(0,_tasks__WEBPACK_IMPORTED_MODULE_2__.cancelTaskButton)();\n(0,_tasks__WEBPACK_IMPORTED_MODULE_2__.cancelProjectButton)();\n(0,_tasks__WEBPACK_IMPORTED_MODULE_2__.saveTaskButton)();\n// displayTasks();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addNewProject: () => (/* binding */ addNewProject),\n/* harmony export */   createSidebar: () => (/* binding */ createSidebar)\n/* harmony export */ });\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _img_dashboard_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/dashboard.svg */ \"./src/img/dashboard.svg\");\n/* harmony import */ var _img_add_button_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/add-button.svg */ \"./src/img/add-button.svg\");\n/* harmony import */ var _img_tasks_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/tasks.svg */ \"./src/img/tasks.svg\");\n/* harmony import */ var _img_calender_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/calender.svg */ \"./src/img/calender.svg\");\n/* harmony import */ var _img_clock_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/clock.svg */ \"./src/img/clock.svg\");\n/* harmony import */ var _img_folder_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/folder.svg */ \"./src/img/folder.svg\");\n\n\n\n\n\n\n\n\nconst addProjectDialog = document.querySelector('.add-new-project');\nconst overlay = document.querySelector('.overlay');\n\nfunction createSidebar () {\n    //Create header content of sidebar\n    const header = document.querySelector('.header');\n    const dashboard_img = document.createElement('img');\n    dashboard_img.classList.add('svg');\n    dashboard_img.src = _img_dashboard_svg__WEBPACK_IMPORTED_MODULE_1__;\n    header.appendChild(dashboard_img);\n\n    // Add image to add task button \n    const addBtn_img = document.querySelector('.add-task-btn img');\n    addBtn_img.src = _img_add_button_svg__WEBPACK_IMPORTED_MODULE_2__;\n\n    const allTasks_img = document.querySelector('.all-tasks-btn img');\n    allTasks_img.src = _img_tasks_svg__WEBPACK_IMPORTED_MODULE_3__;\n\n    const today_img = document.querySelector('.today-btn img');\n    today_img.src = _img_calender_svg__WEBPACK_IMPORTED_MODULE_4__;\n\n    const overdue_img = document.querySelector('.overdue-btn img');\n    overdue_img.src = _img_clock_svg__WEBPACK_IMPORTED_MODULE_5__;\n\n    const website_img = document.querySelector('.website-btn img');\n    website_img.src = _img_folder_svg__WEBPACK_IMPORTED_MODULE_6__;\n\n    const video_img = document.querySelector('.video-btn img');\n    video_img.src = _img_folder_svg__WEBPACK_IMPORTED_MODULE_6__;\n}\n\nfunction addNewProject(saveProjectButton) {\n    // Add event listener to the save button inside the \"Create New Project\" dialog\n    \n    saveProjectButton.addEventListener('click', () => {\n    // Get the value of the project title from the input field\n    const projectTitle = document.getElementById('project_title').value;\n\n    // Create a new project element\n    const newProject = document.createElement('div');\n    newProject.classList.add('project'); \n\n    // Create a button element for the new project\n    const projectButton = document.createElement('button');\n    projectButton.classList.add('project-btn');\n    // projectButton.textContent = projectTitle;\n\n    // Create an image element for the folder icon\n    const folderIcon = document.createElement('img');\n    folderIcon.classList.add('svg');\n    folderIcon.src = _img_folder_svg__WEBPACK_IMPORTED_MODULE_6__;\n\n    // Create a div for the tasks-projects-left container\n    const tasksProjectsLeft = document.createElement('div');\n    tasksProjectsLeft.classList.add('tasks-projects-left');\n\n    // Append the folder icon and project title to the tasks-projects-left container\n    tasksProjectsLeft.appendChild(folderIcon);\n    tasksProjectsLeft.appendChild(document.createTextNode(projectTitle));\n\n    // Create a div for the project-num\n    const projectNum = document.createElement('div');\n    projectNum.classList.add('num');\n    projectNum.classList.add('project-num'); \n    projectNum.textContent = '0';\n\n    // Append the tasks-projects-left and project-num to the button\n    projectButton.appendChild(tasksProjectsLeft);\n    projectButton.appendChild(projectNum);\n\n    // Append the project button to the new project element\n    newProject.appendChild(projectButton);\n\n    const projectsContainer = document.querySelector('.projects-container');\n    projectsContainer.appendChild(newProject);\n\n    addProjectDialog.close();\n\n    const addProjectForm = document.querySelector('.add-project-form');\n    addProjectForm.reset();\n\n    overlay.style.display = 'none';\n});\n}\n\n//# sourceURL=webpack://to-do-list/./src/sidebar.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allTasksContainer: () => (/* binding */ allTasksContainer),\n/* harmony export */   cancelProjectButton: () => (/* binding */ cancelProjectButton),\n/* harmony export */   cancelTaskButton: () => (/* binding */ cancelTaskButton),\n/* harmony export */   closeTaskForm: () => (/* binding */ closeTaskForm),\n/* harmony export */   displayTasks: () => (/* binding */ displayTasks),\n/* harmony export */   incrementAllTasksNum: () => (/* binding */ incrementAllTasksNum),\n/* harmony export */   incrementOverdueNum: () => (/* binding */ incrementOverdueNum),\n/* harmony export */   incrementTodayNum: () => (/* binding */ incrementTodayNum),\n/* harmony export */   overdueTasksContainer: () => (/* binding */ overdueTasksContainer),\n/* harmony export */   saveTaskButton: () => (/* binding */ saveTaskButton),\n/* harmony export */   todaysTasksContainer: () => (/* binding */ todaysTasksContainer)\n/* harmony export */ });\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\n\nconst addTaskDialog = document.querySelector('.add-task-dialog');\nconst addProjectDialog = document.querySelector('.add-new-project');\nconst overlay = document.querySelector('.overlay');\n\nconst numberOfAllTasks = document.querySelector('.all-tasks-num');\nconst numberOfTodayTasks = document.querySelector('.today-num');\nconst numberOfOverdueTasks = document.querySelector('.overdue-num');\n\n// const main = document.querySelector('.content');\nconst main = document.querySelector('.task-container');\n\nconst allTaskContainer = document.createElement('div');\nconst todaysContainer = document.createElement('div');\nconst overdueContainer = document.createElement('div');\n\nlet tasks = [];\nlet todayTasks = [];\nlet overdueTasks = [];\n\n\nconst newTask1 = { title: 'Walk the dog', notes: 'go to kings park', dueDate: '2024-05-15', priority: 'High', project: 'Project A' };\nconst newTask2 = { title: 'Get groceries', notes: 'get veggies', dueDate: '2024-05-20', priority: 'Medium', project: 'Project B' };\n\ntasks.push(newTask1);\ntasks.push(newTask2);\n\n\nfunction initializeTaskArrays() {\n    const today = new Date().toISOString().split('T')[0];\n    todayTasks = tasks.filter(task => task.dueDate === today);\n    overdueTasks = tasks.filter(task => task.dueDate < today);\n    initializeOverdueTasksCount();\n    updateTaskCounts();\n}\n\nfunction updateTaskCounts() {\n    numberOfAllTasks.textContent = tasks.length;\n    numberOfTodayTasks.textContent = todayTasks.length;\n    numberOfOverdueTasks.textContent = overdueTasks.length;\n}\n\n// Call initialize function after setting up tasks\ninitializeTaskArrays();\n\n\n//******************************************************************************* */\n//Creating the display container for AllTasks, Today and Overdue\n//******************************************************************************* */\nfunction allTasksContainer() {\n    allTaskContainer.classList.add('all-task-container');\n\n    const allTaskHeader = document.querySelector('.content-container h2');\n    numberOfAllTasks.textContent = tasks.length;\n    let AllTasksNum = tasks.length;\n    allTaskHeader.innerHTML = \"All Tasks (\" + AllTasksNum + \")\";\n\n    main.innerHTML = '';\n    main.appendChild(allTaskContainer);\n    displayTasks(tasks, allTaskContainer);\n}\n\nfunction todaysTasksContainer() {\n    todaysContainer.classList.add('today-task-container');\n\n    const todayHeader = document.querySelector('.content-container h2');\n    const today = new Date().toISOString().split('T')[0];\n    todayTasks = tasks.filter(task => task.dueDate === today);\n    let todayNum = todayTasks.length;\n    todayHeader.innerHTML = \"Today (\" + todayNum + \")\";\n\n    main.innerHTML = '';\n    main.appendChild(todaysContainer);\n    displayTasks(todayTasks, todaysContainer);\n}\n\nfunction overdueTasksContainer() {\n    overdueContainer.classList.add('overdue-task-container');\n\n    const overdueHeader = document.querySelector('.content-container h2');\n    const today = new Date().toISOString().split('T')[0];\n    const overdueTasks = tasks.filter(task => task.dueDate < today);\n    let overdueNum = overdueTasks.length;\n    // numberOfOverdueTasks = overdueTasks.length;\n    overdueHeader.innerHTML = \"Overdue (\" + overdueNum + \")\";\n\n    main.innerHTML = '';\n    main.appendChild(overdueContainer);\n    displayTasks(overdueTasks, overdueContainer);\n}\n//******************************************************************************* */\n\nfunction cancelTaskButton() {\n    const cancelTaskButton = document.querySelector('.cancel-task');\n\n    cancelTaskButton.addEventListener('click', () => {\n        const addTaskForm = document.querySelector('.add-task-form'); // Select the \"Add Task\" form\n        addTaskForm.reset(); // Reset the form\n        addTaskDialog.close(); // Close the \"Add Task\" dialog\n        overlay.style.display = 'none'; // Hide the overlay\n    });\n}\n\nfunction cancelProjectButton() {\n    const cancelProjectButton = document.querySelector('.cancel-project');\n\n    cancelProjectButton.addEventListener('click', () => {\n        const addProjectForm = document.querySelector('.add-project-form'); // Select the \"Create New Project\" form\n        addProjectForm.reset(); // Reset the form\n        addProjectDialog.close(); // Close the \"Create New Project\" dialog\n        overlay.style.display = 'none'; // Hide the overlay\n    });\n}\n\nfunction saveTaskButton() {\n    const saveTaskButton = document.querySelector('.save-task');\n    saveTaskButton.addEventListener('click', function(event) {\n        event.preventDefault();\n\n        // Get the values from the form inputs\n        const title = document.getElementById('task_title').value;\n        const notes = document.getElementById('notes').value;\n        const dueDate = document.getElementById('due_date').value;\n        const priority = document.getElementById('priority').value;\n        const project = document.getElementById('project').value;\n\n        const newTask = {\n            title: title,\n            notes: notes,\n            dueDate: dueDate,\n            priority: priority,\n            project: project\n        };\n\n        tasks.push(newTask);\n\n        displayTasks(tasks, allTaskContainer);\n        incrementAllTasksNum();\n\n        // Check if the due date is today\n        const today = new Date().toISOString().split('T')[0];\n        if (newTask.dueDate === today) {\n            todayTasks = tasks.filter(task => task.dueDate === today);\n            displayTasks(todayTasks, todaysContainer);\n            incrementTodayNum();\n        }\n\n        // Check if the due date is before today (overdue)\n        if (newTask.dueDate < today) {\n            const overdueTasks = tasks.filter(task => task.dueDate < today);\n            displayTasks(overdueTasks, overdueContainer); // Display overdue tasks\n            incrementOverdueNum();\n        }\n\n        closeTaskForm()\n    });\n}\n\nfunction closeTaskForm() {\n    const addTaskDialog = document.querySelector('.add-task-dialog');\n    addTaskDialog.close();\n\n    const addTaskForm = document.querySelector('.add-task-form');\n    addTaskForm.reset();\n\n    const overlay = document.querySelector('.overlay');\n    overlay.style.display = 'none';\n}\n\nfunction displayTasks(taskArray, tasksContainer) {\n    tasksContainer.innerHTML = ''; \n    // Iterate over each task in the tasks array\n    taskArray.forEach((task, index) => {\n        // Create HTML elements for the task\n        const taskElement = document.createElement('div');\n        taskElement.classList.add('task');\n\n        // Create a container for checkbox and task details\n        const taskContentContainer = document.createElement('div');\n        taskContentContainer.classList.add('task-content-container'); // Flex container for checkbox and details\n\n        const checkBoxContainer = document.createElement('div');\n        checkBoxContainer.classList.add('check-box-container');\n\n        // Create checkbox\n        const checkBox = document.createElement('div');\n        checkBox.classList.add('round');\n\n        const input = document.createElement('input');\n        input.setAttribute('type', 'checkbox'); \n        input.setAttribute('name', 'check-box');\n        input.setAttribute('id', task.title); \n\n        const label = document.createElement('label');\n        label.setAttribute('for', task.title);\n\n        checkBox.appendChild(input);\n        checkBox.appendChild(label);\n\n        checkBoxContainer.appendChild(checkBox);\n\n        const taskDetailsContainer = document.createElement('div');\n        taskDetailsContainer.classList.add('task-details');\n\n        taskDetailsContainer.innerHTML = `\n            <div class=\"task-heading\">${task.title}</div>\n            <div class=\"task-notes\">${task.notes}</div>    \n        `;\n\n        const dateAndProject = document.createElement('div');\n        dateAndProject.classList.add('date-project');\n\n        dateAndProject.innerHTML = `\n            <div class=\"task-duedate\">${task.dueDate}</div>\n            <div class=\"task_project\">${task.project}</div>  \n        `;\n\n        taskDetailsContainer.appendChild(dateAndProject);\n\n        // Append the checkbox and task details to the task content container\n        taskContentContainer.appendChild(checkBoxContainer);\n        taskContentContainer.appendChild(taskDetailsContainer);\n\n        // Create delete button\n        const deleteButton = document.createElement('button');\n        deleteButton.classList.add('delete-task');\n        deleteButton.textContent = 'X';\n\n        // Add click event listener to delete the task\n        deleteButton.addEventListener('click', () => {\n            // Remove the task from the tasks array\n            tasks.splice(index, 1);\n\n            // Update the task count\n            updateTaskCounts();\n\n            // Re-display tasks\n            allTasksContainer();\n            // todaysTasksContainer();\n            // overdueTasksContainer();\n        });\n\n        // Append the content container and delete button to the task element\n        taskElement.appendChild(taskContentContainer);  // Now both checkbox and task details are grouped\n        taskElement.appendChild(deleteButton);          // Delete button goes on the far right\n\n        // Append the task element to the tasks container\n        tasksContainer.appendChild(taskElement);\n    });\n}\n\n\n//******************************************************************************* */\n//Increment the number of tasks for all tasks, today and overdue \n//******************************************************************************* */\nfunction incrementAllTasksNum() {\n    if (numberOfAllTasks) {\n        let currentAllTaskNumber = parseInt(numberOfAllTasks.textContent, 10);\n        currentAllTaskNumber++;\n        numberOfAllTasks.textContent = currentAllTaskNumber;\n    }\n}\n\nfunction incrementTodayNum() {\n    if (numberOfTodayTasks) {\n        let currentTodayNumber = parseInt(numberOfTodayTasks.textContent, 10);\n        currentTodayNumber++;\n        numberOfTodayTasks.textContent = currentTodayNumber;\n    }\n}\n\nfunction incrementOverdueNum() {\n    if (numberOfOverdueTasks) {\n        let currentOverdueNumber = parseInt(numberOfOverdueTasks.textContent, 10);\n        currentOverdueNumber++;\n        numberOfOverdueTasks.textContent = currentOverdueNumber;\n    }\n}\n//******************************************************************************* */\n\nfunction initializeOverdueTasksCount() {\n    const today = new Date().toISOString().split('T')[0];\n    const overdueTasks = tasks.filter(task => task.dueDate < today);\n    const overdueNum = overdueTasks.length;\n    numberOfOverdueTasks.textContent = overdueNum;\n}\n\nclass Task {\n    constructor(title, notes, dueDate, priority, projectKey, complete, key) {\n        this.title = title;\n        this.notes = notes;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.project = getProjects().find(project => project.key == projectKey);\n        this.complete = complete;\n        this.key = key;\n    }\n};\n\nfunction createTask(title, notes, dueDate, priority, projectKey, complete = false, key) {\n\n}\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/tasks.js?");

/***/ }),

/***/ "./src/img/add-button.svg":
/*!********************************!*\
  !*** ./src/img/add-button.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a491e1ccd1e748b2e24b.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/img/add-button.svg?");

/***/ }),

/***/ "./src/img/calender.svg":
/*!******************************!*\
  !*** ./src/img/calender.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"76923f691b83499925dc.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/img/calender.svg?");

/***/ }),

/***/ "./src/img/clock.svg":
/*!***************************!*\
  !*** ./src/img/clock.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5920df31f3490ea650ab.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/img/clock.svg?");

/***/ }),

/***/ "./src/img/dashboard.svg":
/*!*******************************!*\
  !*** ./src/img/dashboard.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5a9f7dc0fad68b39ad2f.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/img/dashboard.svg?");

/***/ }),

/***/ "./src/img/folder.svg":
/*!****************************!*\
  !*** ./src/img/folder.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e0b35bef062f05cf7d4e.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/img/folder.svg?");

/***/ }),

/***/ "./src/img/tasks.svg":
/*!***************************!*\
  !*** ./src/img/tasks.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c346f9a7e80dd1390145.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/img/tasks.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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