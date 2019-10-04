(window["webpackJsonprec-sites"] = window["webpackJsonprec-sites"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tallan_Desktop_vschool_development_assignments_projects_rec_sites_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _Users_tallan_Desktop_vschool_development_assignments_projects_rec_sites_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers/ThemeProvider */ "./src/providers/ThemeProvider.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Nav */ "./src/components/Nav.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Home */ "./src/components/Home.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/About */ "./src/components/About.js");
/* harmony import */ var _components_MyParks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/MyParks */ "./src/components/MyParks.js");
/* harmony import */ var _images_arcadia_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/arcadia.jpg */ "./src/images/arcadia.jpg");
/* harmony import */ var _images_arcadia_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_arcadia_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _images_sunset_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/sunset.jpg */ "./src/images/sunset.jpg");
/* harmony import */ var _images_sunset_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_images_sunset_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _images_redRock_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/redRock.jpg */ "./src/images/redRock.jpg");
/* harmony import */ var _images_redRock_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_images_redRock_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _images_sunset2_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/sunset2.jpg */ "./src/images/sunset2.jpg");
/* harmony import */ var _images_sunset2_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_images_sunset2_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _images_nightSky_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/nightSky.jpg */ "./src/images/nightSky.jpg");
/* harmony import */ var _images_nightSky_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_images_nightSky_jpg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _images_jaged_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/jaged.jpg */ "./src/images/jaged.jpg");
/* harmony import */ var _images_jaged_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_images_jaged_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _images_nebula_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./images/nebula.jpg */ "./src/images/nebula.jpg");
/* harmony import */ var _images_nebula_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_images_nebula_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _images_gizer_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./images/gizer.jpg */ "./src/images/gizer.jpg");
/* harmony import */ var _images_gizer_jpg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_images_gizer_jpg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _images_snow_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./images/snow.jpg */ "./src/images/snow.jpg");
/* harmony import */ var _images_snow_jpg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_images_snow_jpg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _images_northernLights1_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./images/northernLights1.jpg */ "./src/images/northernLights1.jpg");
/* harmony import */ var _images_northernLights1_jpg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_images_northernLights1_jpg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _images_bear_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./images/bear.jpg */ "./src/images/bear.jpg");
/* harmony import */ var _images_bear_jpg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_images_bear_jpg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _images_river_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./images/river.jpg */ "./src/images/river.jpg");
/* harmony import */ var _images_river_jpg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_images_river_jpg__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _images_arch_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./images/arch.jpg */ "./src/images/arch.jpg");
/* harmony import */ var _images_arch_jpg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_images_arch_jpg__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _images_fall_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./images/fall.jpg */ "./src/images/fall.jpg");
/* harmony import */ var _images_fall_jpg__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_images_fall_jpg__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _images_nl2_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./images/nl2.jpg */ "./src/images/nl2.jpg");
/* harmony import */ var _images_nl2_jpg__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_images_nl2_jpg__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _images_person_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./images/person.jpg */ "./src/images/person.jpg");
/* harmony import */ var _images_person_jpg__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_images_person_jpg__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _images_waterfall_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./images/waterfall.jpg */ "./src/images/waterfall.jpg");
/* harmony import */ var _images_waterfall_jpg__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_images_waterfall_jpg__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _images_handleHold_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./images/handleHold.jpg */ "./src/images/handleHold.jpg");
/* harmony import */ var _images_handleHold_jpg__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_images_handleHold_jpg__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _images_raft_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./images/raft.jpg */ "./src/images/raft.jpg");
/* harmony import */ var _images_raft_jpg__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_images_raft_jpg__WEBPACK_IMPORTED_MODULE_29__);


var _jsxFileName = "/Users/tallan/Desktop/vschool/development/assignments/projects/rec-sites/src/App.js";

function _templateObject() {
  const data = Object(_Users_tallan_Desktop_vschool_development_assignments_projects_rec_sites_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n      height: 100%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background: ", ";\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_Users_tallan_Desktop_vschool_development_assignments_projects_rec_sites_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




























 //main goals 
//1: mobile responsive 
//2: transitions and fades 
//3:  responsive grid landing page 
// pictures for sites 
// make nice home page with pictures and a responsive grid. 
// when image is clicked, take user to page about picture 
//todos make the ability to comment with full crud on a specific park 
//make users have identity with context
//make aria labels for site
// make a second language option
//make a global style

const pictures = [_images_arcadia_jpg__WEBPACK_IMPORTED_MODULE_11___default.a, _images_sunset_jpg__WEBPACK_IMPORTED_MODULE_12___default.a, _images_redRock_jpg__WEBPACK_IMPORTED_MODULE_13___default.a, _images_sunset2_jpg__WEBPACK_IMPORTED_MODULE_14___default.a, _images_nightSky_jpg__WEBPACK_IMPORTED_MODULE_15___default.a, _images_jaged_jpg__WEBPACK_IMPORTED_MODULE_16___default.a, _images_nebula_jpg__WEBPACK_IMPORTED_MODULE_17___default.a, _images_gizer_jpg__WEBPACK_IMPORTED_MODULE_18___default.a, _images_snow_jpg__WEBPACK_IMPORTED_MODULE_19___default.a, _images_northernLights1_jpg__WEBPACK_IMPORTED_MODULE_20___default.a, _images_bear_jpg__WEBPACK_IMPORTED_MODULE_21___default.a, _images_river_jpg__WEBPACK_IMPORTED_MODULE_22___default.a, _images_arch_jpg__WEBPACK_IMPORTED_MODULE_23___default.a, _images_fall_jpg__WEBPACK_IMPORTED_MODULE_24___default.a, _images_nl2_jpg__WEBPACK_IMPORTED_MODULE_25___default.a, _images_person_jpg__WEBPACK_IMPORTED_MODULE_26___default.a, _images_waterfall_jpg__WEBPACK_IMPORTED_MODULE_27___default.a, _images_handleHold_jpg__WEBPACK_IMPORTED_MODULE_28___default.a, _images_raft_jpg__WEBPACK_IMPORTED_MODULE_29___default.a]; //{...park, picture: pictures[i]}

class App extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      parks: []
    };
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://developer.nps.gov/api/v1/parks?limit=15&api_key=ITWTCahKz7ncRmMjAZ6IgeJ5QG1iZNe12NftfXaE").then(res => {
      this.setState({
        parks: res.data.data.map((park, i) => {
          return _objectSpread({}, park, {
            picture: pictures[i]
          });
        })
      });
    }).catch(err => console.log(err));
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
      exact: true,
      path: "/",
      render: rProps => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, rProps, {
        parks: this.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
      exact: true,
      path: "/about",
      render: rProps => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_About__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({}, rProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
      exact: true,
      path: "/your-parks",
      render: rProps => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MyParks__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({}, rProps, {
        parks: this.state.parks,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }))));
  }

}

const Container = Object(_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["withTheme"])(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject(), props => props.theme === 'forest' ? 'linear-gradient(-45deg,#405C87,#2f5609)' : 'linear-gradient(45deg, #EEB686 ,#40314E)'));
/* harmony default export */ __webpack_exports__["default"] = (Object(_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["withTheme"])(App));

/***/ }),

/***/ "./src/components/About.js":
/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/tallan/Desktop/vschool/development/assignments/projects/rec-sites/src/components/About.js";


const About = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, "About");
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tallan_Desktop_vschool_development_assignments_projects_rec_sites_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/ThemeProvider */ "./src/providers/ThemeProvider.js");
/* harmony import */ var _ParkInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ParkInfo */ "./src/components/ParkInfo.js");

var _jsxFileName = "/Users/tallan/Desktop/vschool/development/assignments/projects/rec-sites/src/components/Home.js";

function _templateObject() {
  const data = Object(_Users_tallan_Desktop_vschool_development_assignments_projects_rec_sites_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n  .container {\n    margin: 5px;\n    display: grid;\n    grid-gap: 10px;\n    grid-template-columns: repeat(auto-fit, minmax(150px, 2fr));\n    grid-auto-rows: 150px;\n    grid-auto-flow: dense;\n    opacity: 1;\n  }\n\n   .container > div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: 0.5s\n   }\n   .container > div:hover {\n    transform: scale(1.08)\n   }\n   \n\n   \n    .container > div > img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n\n    .container > .clicked {\n      opacity: 0.5;\n    }\n\n\n    div:nth-child(3n+0) {\n    grid-column: auto / span 2; \n  }\n\n  div:nth-child(4n+0) {\n    grid-row: auto / span 2;\n  }\n\n\n  \n  div:nth-child(5n+0) {\n\n    grid-row: auto / span 2;\n    grid-column: auto / span 2;\n  } \n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}




 // i want to make a photo go opac when it is false 

const Home = props => {
  const parks = props.parks.parks;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HomeStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, parks.map(park => {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ParkInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
      parks: park,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: undefined
    });
  })));
};

const HomeStyle = Object(_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__["withTheme"])(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject()));
/* harmony default export */ __webpack_exports__["default"] = (Object(_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__["withTheme"])(Home));

/***/ }),

/***/ "./src/components/MyParks.js":
/*!***********************************!*\
  !*** ./src/components/MyParks.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tallan_Desktop_vschool_development_assignments_projects_rec_sites_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/ThemeProvider */ "./src/providers/ThemeProvider.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _PickedPark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PickedPark */ "./src/components/PickedPark.js");

var _jsxFileName = "/Users/tallan/Desktop/vschool/development/assignments/projects/rec-sites/src/components/MyParks.js";

function _templateObject() {
  const data = Object(_Users_tallan_Desktop_vschool_development_assignments_projects_rec_sites_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(150px, 2fr));\n    grid-gap: 5px;\n    grid-auto-rows: 150px;\n    grid-auto-flow: dense; \n  }\n\n  .container > div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .container > div > img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  div:nth-child(3n+0) {\n    grid-column: auto / span 2; \n  }\n  div:nth-child(4n+0) {\n    grid-row: auto / span 2;\n  }\n  div:nth-child(5n+0) {\n    grid-row: auto / span 2;\n    grid-column: auto / span 2;\n  }\n\n\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}




 //make it so that you can delete the parks you choose.

const MyParks = props => {
  const savedPlaces = props.savedPlaces,
        parks = props.parks;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ParkStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, savedPlaces.length === 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Pick some parks then come back.") : savedPlaces.map(park => {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PickedPark__WEBPACK_IMPORTED_MODULE_4__["default"], {
      park: park,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    });
  }))));
};

const ParkStyles = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Object(_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(MyParks));

/***/ }),

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tallan_Desktop_vschool_development_assignments_projects_rec_sites_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/ThemeProvider */ "./src/providers/ThemeProvider.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _navlinks_NavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navlinks/NavLink */ "./src/components/navlinks/NavLink.js");

var _jsxFileName = "/Users/tallan/Desktop/vschool/development/assignments/projects/rec-sites/src/components/Nav.js";

function _templateObject() {
  const data = Object(_Users_tallan_Desktop_vschool_development_assignments_projects_rec_sites_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nbackground: ", ";\n\ndisplay: flex;\njustify-content: space-around;\nalign-items: center;\nmargin: auto;\nleft: 0;\nright: 0;\nbackground-image: ", ";\nbackground-repeat: no-repeat;\nwidth: 100%;\nborder: 1px solid black;\n\na {\n  text-decoration: none;\n  color: black;\n  transition: 0.3s;\n}\na:hover {\n  color: ", ";\n}\n.home {\n  margin-left: 10px;\n  color: #1A160D;\n  transition: 0.3s;\n}\n.home:hover {\n  color: black;\n}\n.select {\n  margin-bottom: 10px;\n}\n .themes {\n  align-self: center;\n}\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}




 //make the dropdown menu a hover and nice. 

const Nav = props => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_navlinks_NavLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    link: "/",
    title: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_navlinks_NavLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    link: "/about",
    title: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_navlinks_NavLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
    link: "/your-parks",
    title: "your parks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "themes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Themes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
    class: "select",
    onChange: props.selectTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "forest",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "forest"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: "desert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "desert"))));
};

const NavStyle = Object(_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject(), props => props.theme === 'forest' ? 'linear-gradient(-45deg,#405C87,#2f5609)' : 'linear-gradient(45deg, #EEB686 ,#40314E)', props => props.theme === 'forest' ? "#EEB686" : "#405C87", props => props.theme === 'forest' ? '#1A160D' : '#9C887B'));
/* harmony default export */ __webpack_exports__["default"] = (Object(_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__["withTheme"])(Nav));

/***/ }),

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

/***/ }),

/***/ "./src/components/PickedPark.js":
/*!**************************************!*\
  !*** ./src/components/PickedPark.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/ThemeProvider */ "./src/providers/ThemeProvider.js");
var _jsxFileName = "/Users/tallan/Desktop/vschool/development/assignments/projects/rec-sites/src/components/PickedPark.js";



const PickedPark = props => {
  const park = props.park;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: park.picture,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__["withTheme"])(PickedPark));

/***/ }),

/***/ "./src/components/navlinks/NavLink.js":
/*!********************************************!*\
  !*** ./src/components/navlinks/NavLink.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_tallan_Desktop_vschool_development_assignments_projects_rec_sites_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/ThemeProvider */ "./src/providers/ThemeProvider.js");
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal */ "./node_modules/react-reveal/index.js");
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MyParks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MyParks */ "./src/components/MyParks.js");

var _jsxFileName = "/Users/tallan/Desktop/vschool/development/assignments/projects/rec-sites/src/components/navlinks/NavLink.js";






const NavLink = props => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState2 = Object(_Users_tallan_Desktop_vschool_development_assignments_projects_rec_sites_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        fade = _useState2[0],
        setFade = _useState2[1];

  const savedPlaces = props.savedPlaces,
        title = props.title,
        theme = props.theme;

  const parkCount = () => {
    if (savedPlaces.length === 0 && title === 'home') {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: undefined
      }, "Pick a park");
    } else if (title !== 'home') {
      return null;
    } else {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_4___default.a, {
        bottom: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: undefined
      }, "Parks: ", savedPlaces.length));
    }
  };

  const toggle = () => {
    setFade(!fade);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, parkCount(), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: props.link,
    onMouseEnter: toggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_4___default.a, {
    top: true,
    cascade: true,
    when: !fade,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    onMouseOver: toggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, title === 'home' && theme === 'desert' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      color: '#8D0000'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "home") : title)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    cascade: true,
    when: fade,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    onMouseOver: toggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, title === 'home' && theme === 'desert' ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    style: {
      color: '#8D0000'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "home") : title))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__["withTheme"])(NavLink));

/***/ }),

/***/ "./src/images/arcadia.jpg":
/*!********************************!*\
  !*** ./src/images/arcadia.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/arcadia.94c931ce.jpg";

/***/ }),

/***/ "./src/images/arch.jpg":
/*!*****************************!*\
  !*** ./src/images/arch.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/arch.93adda17.jpg";

/***/ }),

/***/ "./src/images/bear.jpg":
/*!*****************************!*\
  !*** ./src/images/bear.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bear.d6a63049.jpg";

/***/ }),

/***/ "./src/images/fall.jpg":
/*!*****************************!*\
  !*** ./src/images/fall.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/fall.6ca4feec.jpg";

/***/ }),

/***/ "./src/images/gizer.jpg":
/*!******************************!*\
  !*** ./src/images/gizer.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/gizer.c88fd6aa.jpg";

/***/ }),

/***/ "./src/images/handleHold.jpg":
/*!***********************************!*\
  !*** ./src/images/handleHold.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/handleHold.7b23e718.jpg";

/***/ }),

/***/ "./src/images/jaged.jpg":
/*!******************************!*\
  !*** ./src/images/jaged.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/jaged.121a0b60.jpg";

/***/ }),

/***/ "./src/images/nebula.jpg":
/*!*******************************!*\
  !*** ./src/images/nebula.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/nebula.a50bcc54.jpg";

/***/ }),

/***/ "./src/images/nightSky.jpg":
/*!*********************************!*\
  !*** ./src/images/nightSky.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/images/nl2.jpg":
/*!****************************!*\
  !*** ./src/images/nl2.jpg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/nl2.52651809.jpg";

/***/ }),

/***/ "./src/images/northernLights1.jpg":
/*!****************************************!*\
  !*** ./src/images/northernLights1.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "./src/images/person.jpg":
/*!*******************************!*\
  !*** ./src/images/person.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/person.1d09e661.jpg";

/***/ }),

/***/ "./src/images/raft.jpg":
/*!*****************************!*\
  !*** ./src/images/raft.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/raft.ef1dbf7f.jpg";

/***/ }),

/***/ "./src/images/redRock.jpg":
/*!********************************!*\
  !*** ./src/images/redRock.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/redRock.80d161a9.jpg";

/***/ }),

/***/ "./src/images/river.jpg":
/*!******************************!*\
  !*** ./src/images/river.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/river.7a023ecb.jpg";

/***/ }),

/***/ "./src/images/snow.jpg":
/*!*****************************!*\
  !*** ./src/images/snow.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/snow.7fc77e4e.jpg";

/***/ }),

/***/ "./src/images/sunset.jpg":
/*!*******************************!*\
  !*** ./src/images/sunset.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sunset.d9f9f366.jpg";

/***/ }),

/***/ "./src/images/sunset2.jpg":
/*!********************************!*\
  !*** ./src/images/sunset2.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sunset2.f7ff12ce.jpg";

/***/ }),

/***/ "./src/images/waterfall.jpg":
/*!**********************************!*\
  !*** ./src/images/waterfall.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/waterfall.bef87598.jpg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Nav */ "./src/components/Nav.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers/ThemeProvider */ "./src/providers/ThemeProvider.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/tallan/Desktop/vschool/development/assignments/projects/rec-sites/src/index.js";







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_providers_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}))), document.getElementById('root'));
_serviceWorker__WEBPACK_IMPORTED_MODULE_6__["unregister"]();

/***/ }),

/***/ "./src/providers/ThemeProvider.js":
/*!****************************************!*\
  !*** ./src/providers/ThemeProvider.js ***!
  \****************************************/
/*! exports provided: withTheme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony import */ var _Users_tallan_Desktop_vschool_development_assignments_projects_rec_sites_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/tallan/Desktop/vschool/development/assignments/projects/rec-sites/src/providers/ThemeProvider.js";

function _templateObject() {
  const data = Object(_Users_tallan_Desktop_vschool_development_assignments_projects_rec_sites_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nbackground-color: aliceblue;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}




const _React$createContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext(),
      Provider = _React$createContext.Provider,
      Consumer = _React$createContext.Consumer; // test if you can throw styled sandwiches into a styled object and call on the styles as needed, 


class ThemeProvider extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);
    this.state = {
      theme: 'forest',
      savedPlaces: []
    };

    this.changeTheme = () => {
      this.setState(prev => ({
        theme: prev.theme === 'forest' ? 'desert' : 'forest'
      }));
    };

    this.saveImage = parkObj => {
      this.setState(prev => {
        const filterDublicates = new Set([...prev.savedPlaces, parkObj]);
        const backToArray = [...filterDublicates];
        return {
          savedPlaces: backToArray
        };
      });
    };

    this.saveParkToLocalStorage = (theKey, theValue) => {
      this.state.savedPlaces.map(aPlace => {
        localStorage.setItem(theKey, theValue);
      });
    };

    this.pushStorageToSavedPlaces = (localStorageId, parksId, parkObj) => {
      if (localStorageId === parksId) {
        console.log(localStorageId, 'they Match????', parksId, "this is savedPlaces");
        this.setState(prev => ({
          savedPlaces: [...prev.savedPlaces, parkObj]
        }));
      }
    };

    this.selectTheme = e => {
      const _e$target = e.target,
            name = _e$target.name,
            value = _e$target.value;
      this.setState({
        theme: value
      });
    };
  }

  render() {
    const _this$state = this.state,
          theme = _this$state.theme,
          savedPlaces = _this$state.savedPlaces;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Provider, {
      value: {
        theme,
        savedPlaces,
        changeTheme: this.changeTheme,
        selectTheme: this.selectTheme,
        saveImage: this.saveImage,
        saveParkToLocalStorage: this.saveParkToLocalStorage,
        pushStorageToSavedPlaces: this.pushStorageToSavedPlaces
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, this.props.children);
  }

}

const Test = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
const withTheme = T => props => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Consumer, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}, value => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(T, Object.assign({}, value, props, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
})));
/* harmony default export */ __webpack_exports__["default"] = (ThemeProvider);

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/tallan/Desktop/vschool/development/assignments/projects/rec-sites/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/tallan/Desktop/vschool/development/assignments/projects/rec-sites/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map