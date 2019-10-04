webpackHotUpdate("main",{

/***/ "./src/components/ParkInfo.js":
/*!************************************!*\
  !*** ./src/components/ParkInfo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tallan_Desktop_vschool_development_assignments_projects_rec_sites_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/ThemeProvider */ "./src/providers/ThemeProvider.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/tallan/Desktop/vschool/development/assignments/projects/rec-sites/src/components/ParkInfo.js";


 //if an identical object is inside the savedPlaces array set imageSent to true.

const ParkInfo = props => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_Users_tallan_Desktop_vschool_development_assignments_projects_rec_sites_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        imageSent = _useState2[0],
        setImageSent = _useState2[1];

  const parks = props.parks,
        saveImage = props.saveImage,
        savedPlaces = props.savedPlaces,
        saveParkToLocalStorage = props.saveParkToLocalStorage,
        pushStorageToSavedPlaces = props.pushStorageToSavedPlaces;
  const savedPlacesIds = savedPlaces.map(aPlace => {
    return aPlace.id;
  });
  const parksId = parks.id;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setImageSent(savedPlacesIds.includes(parksId));
    pushStorageToSavedPlaces(localStorage.getItem(parks.name), parksId, parks);

    if (localStorage.getItem(parks.name) === parksId && savedPlacesIds !== localStorage.getItem(parks.name)) {
      saveImage(parks);
    }
  }, []); // when ready to retrieve dont forget to JSON.parse(parks)

  const send = () => {
    setImageSent(true);
    !imageSent && saveImage(parks);
    saveParkToLocalStorage(parks.name, parks.id);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: !imageSent === false && 'clicked',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    onClick: send,
    src: parks.picture,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), !className === 'clicked' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, parks.name));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(ParkInfo));

/***/ })

})
//# sourceMappingURL=main.1e94ea018c5143f97ce3.hot-update.js.map