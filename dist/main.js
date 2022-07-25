/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_maps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/maps.js */ \"./src/scripts/maps.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const map = new _scripts_maps_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2pELE1BQU1DLEdBQUcsR0FBRyxJQUFJSCx3REFBSixFQUFaO0FBRUYsQ0FIRCIsInNvdXJjZXMiOlsid2VicGFjazovL2VsZWN0cmljX3ZlaGljbGVzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hcCBmcm9tICcuL3NjcmlwdHMvbWFwcy5qcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICBjb25zdCBtYXAgPSBuZXcgTWFwKCk7XG4gICBcbn0pXG5cbiJdLCJuYW1lcyI6WyJNYXAiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/maps.js":
/*!*****************************!*\
  !*** ./src/scripts/maps.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Map {\n  constructor() {\n    this.drawMap();\n  }\n\n  drawMap() {\n    const svg = d3.select(\"svg\"),\n          width = +svg.attr(\"width\"),\n          height = +svg.attr(\"height\");\n    const projection = d3.geoPatterson().scale(160).translate([width / 2, height / 1.6]).precision(0.1);\n    const path = d3.geoPath().projection(projection); // svg.append(\"path\")\n    //     .datum(d3.geoGraticule10())\n    //     .attr(\"class\", \"graticule\")\n    //     .attr(\"d\", path);\n\n    d3.json(\"https://d3js.org/world-50m.v1.json\", function (error, world) {\n      if (error) throw error;\n      svg.insert(\"path\", \".graticule\").datum(topojson.feature(world, world.objects.land)).attr(\"class\", \"land\").attr(\"d\", path);\n      svg.insert(\"path\", \".graticule\").datum(topojson.mesh(world, world.objects.countries, function (a, b) {\n        return a !== b;\n      })).attr(\"class\", \"boundary\").attr(\"d\", path);\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tYXBzLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFDQSxNQUFNQSxHQUFOLENBQVU7RUFDTkMsV0FBVyxHQUFFO0lBQ1QsS0FBS0MsT0FBTDtFQUNIOztFQUVEQSxPQUFPLEdBQUc7SUFDTixNQUFNQyxHQUFHLEdBQUdDLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLEtBQVYsQ0FBWjtJQUFBLE1BQ0lDLEtBQUssR0FBRyxDQUFDSCxHQUFHLENBQUNJLElBQUosQ0FBUyxPQUFULENBRGI7SUFBQSxNQUVJQyxNQUFNLEdBQUcsQ0FBQ0wsR0FBRyxDQUFDSSxJQUFKLENBQVMsUUFBVCxDQUZkO0lBS0EsTUFBTUUsVUFBVSxHQUFHTCxFQUFFLENBQUNNLFlBQUgsR0FDZEMsS0FEYyxDQUNSLEdBRFEsRUFFZEMsU0FGYyxDQUVKLENBQUNOLEtBQUssR0FBRyxDQUFULEVBQVlFLE1BQU0sR0FBRyxHQUFyQixDQUZJLEVBR2RLLFNBSGMsQ0FHSixHQUhJLENBQW5CO0lBS0EsTUFBTUMsSUFBSSxHQUFHVixFQUFFLENBQUNXLE9BQUgsR0FDUk4sVUFEUSxDQUNHQSxVQURILENBQWIsQ0FYTSxDQWNOO0lBQ0E7SUFDQTtJQUNBOztJQUVBTCxFQUFFLENBQUNZLElBQUgsQ0FBUSxvQ0FBUixFQUE4QyxVQUFVQyxLQUFWLEVBQWlCQyxLQUFqQixFQUF3QjtNQUNsRSxJQUFJRCxLQUFKLEVBQVcsTUFBTUEsS0FBTjtNQUVYZCxHQUFHLENBQUNnQixNQUFKLENBQVcsTUFBWCxFQUFtQixZQUFuQixFQUNLQyxLQURMLENBQ1dDLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQkosS0FBakIsRUFBd0JBLEtBQUssQ0FBQ0ssT0FBTixDQUFjQyxJQUF0QyxDQURYLEVBRUtqQixJQUZMLENBRVUsT0FGVixFQUVtQixNQUZuQixFQUdLQSxJQUhMLENBR1UsR0FIVixFQUdlTyxJQUhmO01BS0FYLEdBQUcsQ0FBQ2dCLE1BQUosQ0FBVyxNQUFYLEVBQW1CLFlBQW5CLEVBQ0tDLEtBREwsQ0FDV0MsUUFBUSxDQUFDSSxJQUFULENBQWNQLEtBQWQsRUFBcUJBLEtBQUssQ0FBQ0ssT0FBTixDQUFjRyxTQUFuQyxFQUE4QyxVQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7UUFBRSxPQUFPRCxDQUFDLEtBQUtDLENBQWI7TUFBaUIsQ0FBakYsQ0FEWCxFQUVLckIsSUFGTCxDQUVVLE9BRlYsRUFFbUIsVUFGbkIsRUFHS0EsSUFITCxDQUdVLEdBSFYsRUFHZU8sSUFIZjtJQUlILENBWkQ7RUFjSDs7QUF0Q0s7O0FBMENWLCtEQUFlZCxHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlY3RyaWNfdmVoaWNsZXMvLi9zcmMvc2NyaXB0cy9tYXBzLmpzPzRiNjMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBNYXAge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuZHJhd01hcCgpO1xuICAgIH1cblxuICAgIGRyYXdNYXAgKCl7XG4gICAgICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChcInN2Z1wiKSxcbiAgICAgICAgICAgIHdpZHRoID0gK3N2Zy5hdHRyKFwid2lkdGhcIiksXG4gICAgICAgICAgICBoZWlnaHQgPSArc3ZnLmF0dHIoXCJoZWlnaHRcIik7XG5cblxuICAgICAgICBjb25zdCBwcm9qZWN0aW9uID0gZDMuZ2VvUGF0dGVyc29uKClcbiAgICAgICAgICAgIC5zY2FsZSgxNjApXG4gICAgICAgICAgICAudHJhbnNsYXRlKFt3aWR0aCAvIDIsIGhlaWdodCAvIDEuNl0pXG4gICAgICAgICAgICAucHJlY2lzaW9uKDAuMSk7XG5cbiAgICAgICAgY29uc3QgcGF0aCA9IGQzLmdlb1BhdGgoKVxuICAgICAgICAgICAgLnByb2plY3Rpb24ocHJvamVjdGlvbik7XG5cbiAgICAgICAgLy8gc3ZnLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgLy8gICAgIC5kYXR1bShkMy5nZW9HcmF0aWN1bGUxMCgpKVxuICAgICAgICAvLyAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImdyYXRpY3VsZVwiKVxuICAgICAgICAvLyAgICAgLmF0dHIoXCJkXCIsIHBhdGgpO1xuXG4gICAgICAgIGQzLmpzb24oXCJodHRwczovL2QzanMub3JnL3dvcmxkLTUwbS52MS5qc29uXCIsIGZ1bmN0aW9uIChlcnJvciwgd29ybGQpIHtcbiAgICAgICAgICAgIGlmIChlcnJvcikgdGhyb3cgZXJyb3I7XG5cbiAgICAgICAgICAgIHN2Zy5pbnNlcnQoXCJwYXRoXCIsIFwiLmdyYXRpY3VsZVwiKVxuICAgICAgICAgICAgICAgIC5kYXR1bSh0b3BvanNvbi5mZWF0dXJlKHdvcmxkLCB3b3JsZC5vYmplY3RzLmxhbmQpKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJsYW5kXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkXCIsIHBhdGgpO1xuXG4gICAgICAgICAgICBzdmcuaW5zZXJ0KFwicGF0aFwiLCBcIi5ncmF0aWN1bGVcIilcbiAgICAgICAgICAgICAgICAuZGF0dW0odG9wb2pzb24ubWVzaCh3b3JsZCwgd29ybGQub2JqZWN0cy5jb3VudHJpZXMsIGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhICE9PSBiOyB9KSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYm91bmRhcnlcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImRcIiwgcGF0aCk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1hcDsiXSwibmFtZXMiOlsiTWFwIiwiY29uc3RydWN0b3IiLCJkcmF3TWFwIiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJ3aWR0aCIsImF0dHIiLCJoZWlnaHQiLCJwcm9qZWN0aW9uIiwiZ2VvUGF0dGVyc29uIiwic2NhbGUiLCJ0cmFuc2xhdGUiLCJwcmVjaXNpb24iLCJwYXRoIiwiZ2VvUGF0aCIsImpzb24iLCJlcnJvciIsIndvcmxkIiwiaW5zZXJ0IiwiZGF0dW0iLCJ0b3BvanNvbiIsImZlYXR1cmUiLCJvYmplY3RzIiwibGFuZCIsIm1lc2giLCJjb3VudHJpZXMiLCJhIiwiYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/maps.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVjdHJpY192ZWhpY2xlcy8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;