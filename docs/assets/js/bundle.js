/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --primary-color: rgb(17, 86, 102);
    --primary-color-darker: rgb(9, 48, 56);
    font-size: 62.5%;
}

*{
    box-sizing: border-box; 
    outline: 0;
}

body {
    margin: 0;
    padding: 0;
    background-color: var(--primary-color);
    font-family: sans-serif;
    font-size: 2.5rem;
}

p{
    margin: 0;
}

#bg-img{
    object-fit: cover; ;
    
    height: 100%; width: 100%;

    position: absolute;
    filter: blur(7px);
    z-index: -2;
    top: 0; bottom: 0; right: 0; left: 0;
    overflow: hidden;
}

#bg-img::before{
    overflow: hidden;
}

.search{
    display: flex; flex-direction: row;
    justify-content: center; 
    gap: 1rem;
}

.search div{
    display: flex; flex-direction: column;
    /* position: relative; */
}

.myLocation svg{         
    fill: inherit;
}

.myLocation{
    width: 6rem; height: 3rem;
}

.home input{
    width: 30rem; height: 3.3rem;
    font-size: 1.6rem;
    padding: 0 1rem;
    border-radius: 1rem;
    background-color: var(--primary-color);
    border: none; border-bottom: solid var(--primary-color-darker) 0.3rem;
    color: white;
}

.home input::placeholder{
   color: rgb(255, 255, 255);
   text-align: center;
   font-weight: bolder;
}

.home button{
    height: 3.3rem; width: 4rem;
    background-color: var(--primary-color); color: white;
    border-radius: 1rem;
    font-weight: bolder;
    fill: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
}

.home button:hover{
    background-color: white; color: var(--primary-color);
    cursor: pointer;    
    fill: var(--primary-color);  
}

.container{
    max-width: 85rem;
    margin: 3rem auto;
    background-color:#fff;
    padding: 1rem;
    border-radius: 1rem;
    overflow-y: hidden;
    filter: none;

 
}

.container h1 {
    text-align: center;
    margin-top: 0; margin-bottom: 0;
    border-bottom: 2px solid var(--primary-color);
}

#suggestions {
    width: 30rem;
    max-height: 130px; max-width: 94%;
    overflow-y: auto;
    padding: 0 1rem; margin-top: 3rem;
    background-color: #fff;
    font-size: 1.5rem;
    position: fixed; z-index: 10;
}

.suggestion-item {
    padding: 2px;
    cursor: pointer;
}

.suggestion-item:hover {
    background-color: #f0f0f0;
}

.skeleton{
    background-color: var(--primary-color);
    position: absolute;
    height: 100%; width: 100%;

    top: 0; bottom: 0; left: 0; right: 0;
    overflow-x: hidden;

    display: flex;
    justify-content: center; align-items: center;
}

.loader-circle {
    width: 100px; height: 100px;
    border-radius: 50%; border: 10px solid #fff;
    border-top-color: var(--primary-color-darker);
    animation: loader-circle 1s linear infinite;
  }
  
  @keyframes loader-circle {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

.current-title{
    padding: 1rem;
    margin: 0;
    text-align: center;
}

.current-content{
    justify-content: center;
}

.current-temperature{
    font-size: 7.6rem;
    height: 10rem;
    margin: 0;
    justify-content: center;
}

.current-info{
    display: flex;
    flex-direction: column; 
}

.icone-grande{
    height: 10rem;
    object-fit: contain;
    
}

.current-temperature-text{
    background-color: #fff;
    margin: 0;
    text-align: center;
    font-size: 3.5rem;
    font-weight: bold;
}

.current-content-temp{
    display: flex;
    align-items: center;
    justify-content: center;
}

.week{
    margin-top: 2rem;
}

.forecast{
    display: flex; 
    justify-content: space-between;
}

.card{
    background-color: #fff;

    display: flex; flex-direction: column;
    
    align-items: center;

    background: rgb(255, 255, 255);
    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgb(80, 80, 80) 0%, rgba(255,255,255,1) 100%);

    overflow-wrap: break-word;

    border-radius: 0 0 2rem 2rem;
    width: 13rem;

    justify-content: space-between;
}

.card-icon{
    height: 10rem;
}

.card-description{

    font-size: 2rem; font-weight: bolder;
    min-height: 4rem; min-width: 10rem;

    align-items: center; text-align: center;

    padding: 2px 2px;
    /* width: 12rem; */
}


.max-min p{
    height: 4rem;
}

.max-min p{
    margin: 1rem 0rem;
    justify-content: center;
}

.max-icon, .min-icon{
    height: 5rem;
    color: #fff;
}

.max-line, .min-line{
    display: flex;
    color: #fff;
}

.max-line p, .min-line p{
    width: 5rem;
    text-align: center;
}

.dayOfWeek{
    margin: 0;
}

@media (max-width: 368px){
    
    .container{
        display: none;
    }
    
    body{
        display: flex; flex-direction: column;
        justify-content: center;
        align-items: center; 
        height: 100vh;
    }

    body::before{
        text-align: center;
        background-color: white;
        content: 'Resolução não suportada';
        border-radius: 5rem;
        padding: 2rem;
        min-width: 15rem;
    }  
}

@media (min-width: 369px) and (max-width: 504px){

    .container{
        max-width: 95vw;
    }

    .forecast{
        flex-direction: column;
        gap: 2rem;
    }

    .card{
        width: initial;
        gap: 1rem;

        display: grid;

        grid-template-columns: repeat(3, 1fr);

        background: rgb(255, 255, 255);
        background: linear-gradient(270deg, rgba(2,0,36,1) 0%, rgb(80, 80, 80) 0%, rgba(255,255,255,1) 100%);

        border-radius: 0 2rem 2rem 0;
    }

    .card-icon{
        margin: auto;
    }

    .day-of-week{
        padding-left: 1rem;
        min-width: 2rem;
    }

    .max-min{
        justify-content: center;
        grid-area: 1/*linha inicial*/ / -1/*linha final*/ / 2/*coluna inicial*/ / 3/*coluna final*/;
    }


    .day-of-week{
        text-align: center;
        margin: 0;
        min-width: 8rem;
    }
    .card-description{
        margin: 0;
        grid-column: span 3;
        font-size: 2.8rem; font-weight: bold;
        width: 100%; min-height: 5rem;
        padding: 0.5rem;
        text-align: center;
    }
    

}

@media (min-width: 505px) and (max-width: 900px){

    .container{
        max-width: 95vw;
    }

    .forecast{

        display: grid;
        grid-template-columns: 1fr;

        gap: 2rem;
    }

    .card{
        width: initial;
        gap: 1rem;

        display: grid;

        grid-template-columns: 1fr 1fr 1fr 1fr;
        /* grid-template-columns: 7rem 10rem 2fr 1fr; */

        background: rgb(255, 255, 255);
        background: linear-gradient(270deg, rgba(2,0,36,1) 0%, rgb(80, 80, 80) 0%, rgba(255,255,255,1) 100%);

        border-radius: 0 2rem 2rem 0;

        justify-content: center;
        align-items: center;
    }

    .card-icon{
        margin: auto;
    }

    .day-of-week{
        text-align: center; 
        margin: 0;
    }

    .max-min{
        padding-right: 5rem;
        display: flex;
        flex-direction: column;
    }

    .card-description{
        font-size: 2rem; font-weight: bold;
        display: flex;
        justify-content: center;
    }
}`, "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');\r\n\r\n:root{\r\n    --primary-color: rgb(17, 86, 102);\r\n    --primary-color-darker: rgb(9, 48, 56);\r\n    font-size: 62.5%;\r\n}\r\n\r\n*{\r\n    box-sizing: border-box; \r\n    outline: 0;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background-color: var(--primary-color);\r\n    font-family: sans-serif;\r\n    font-size: 2.5rem;\r\n}\r\n\r\np{\r\n    margin: 0;\r\n}\r\n\r\n#bg-img{\r\n    object-fit: cover; ;\r\n    \r\n    height: 100%; width: 100%;\r\n\r\n    position: absolute;\r\n    filter: blur(7px);\r\n    z-index: -2;\r\n    top: 0; bottom: 0; right: 0; left: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n#bg-img::before{\r\n    overflow: hidden;\r\n}\r\n\r\n.search{\r\n    display: flex; flex-direction: row;\r\n    justify-content: center; \r\n    gap: 1rem;\r\n}\r\n\r\n.search div{\r\n    display: flex; flex-direction: column;\r\n    /* position: relative; */\r\n}\r\n\r\n.myLocation svg{         \r\n    fill: inherit;\r\n}\r\n\r\n.myLocation{\r\n    width: 6rem; height: 3rem;\r\n}\r\n\r\n.home input{\r\n    width: 30rem; height: 3.3rem;\r\n    font-size: 1.6rem;\r\n    padding: 0 1rem;\r\n    border-radius: 1rem;\r\n    background-color: var(--primary-color);\r\n    border: none; border-bottom: solid var(--primary-color-darker) 0.3rem;\r\n    color: white;\r\n}\r\n\r\n.home input::placeholder{\r\n   color: rgb(255, 255, 255);\r\n   text-align: center;\r\n   font-weight: bolder;\r\n}\r\n\r\n.home button{\r\n    height: 3.3rem; width: 4rem;\r\n    background-color: var(--primary-color); color: white;\r\n    border-radius: 1rem;\r\n    font-weight: bolder;\r\n    fill: #fff;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.home button:hover{\r\n    background-color: white; color: var(--primary-color);\r\n    cursor: pointer;    \r\n    fill: var(--primary-color);  \r\n}\r\n\r\n.container{\r\n    max-width: 85rem;\r\n    margin: 3rem auto;\r\n    background-color:#fff;\r\n    padding: 1rem;\r\n    border-radius: 1rem;\r\n    overflow-y: hidden;\r\n    filter: none;\r\n\r\n \r\n}\r\n\r\n.container h1 {\r\n    text-align: center;\r\n    margin-top: 0; margin-bottom: 0;\r\n    border-bottom: 2px solid var(--primary-color);\r\n}\r\n\r\n#suggestions {\r\n    width: 30rem;\r\n    max-height: 130px; max-width: 94%;\r\n    overflow-y: auto;\r\n    padding: 0 1rem; margin-top: 3rem;\r\n    background-color: #fff;\r\n    font-size: 1.5rem;\r\n    position: fixed; z-index: 10;\r\n}\r\n\r\n.suggestion-item {\r\n    padding: 2px;\r\n    cursor: pointer;\r\n}\r\n\r\n.suggestion-item:hover {\r\n    background-color: #f0f0f0;\r\n}\r\n\r\n.skeleton{\r\n    background-color: var(--primary-color);\r\n    position: absolute;\r\n    height: 100%; width: 100%;\r\n\r\n    top: 0; bottom: 0; left: 0; right: 0;\r\n    overflow-x: hidden;\r\n\r\n    display: flex;\r\n    justify-content: center; align-items: center;\r\n}\r\n\r\n.loader-circle {\r\n    width: 100px; height: 100px;\r\n    border-radius: 50%; border: 10px solid #fff;\r\n    border-top-color: var(--primary-color-darker);\r\n    animation: loader-circle 1s linear infinite;\r\n  }\r\n  \r\n  @keyframes loader-circle {\r\n    0% {\r\n      transform: rotate(0);\r\n    }\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n.current-title{\r\n    padding: 1rem;\r\n    margin: 0;\r\n    text-align: center;\r\n}\r\n\r\n.current-content{\r\n    justify-content: center;\r\n}\r\n\r\n.current-temperature{\r\n    font-size: 7.6rem;\r\n    height: 10rem;\r\n    margin: 0;\r\n    justify-content: center;\r\n}\r\n\r\n.current-info{\r\n    display: flex;\r\n    flex-direction: column; \r\n}\r\n\r\n.icone-grande{\r\n    height: 10rem;\r\n    object-fit: contain;\r\n    \r\n}\r\n\r\n.current-temperature-text{\r\n    background-color: #fff;\r\n    margin: 0;\r\n    text-align: center;\r\n    font-size: 3.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.current-content-temp{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.week{\r\n    margin-top: 2rem;\r\n}\r\n\r\n.forecast{\r\n    display: flex; \r\n    justify-content: space-between;\r\n}\r\n\r\n.card{\r\n    background-color: #fff;\r\n\r\n    display: flex; flex-direction: column;\r\n    \r\n    align-items: center;\r\n\r\n    background: rgb(255, 255, 255);\r\n    background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgb(80, 80, 80) 0%, rgba(255,255,255,1) 100%);\r\n\r\n    overflow-wrap: break-word;\r\n\r\n    border-radius: 0 0 2rem 2rem;\r\n    width: 13rem;\r\n\r\n    justify-content: space-between;\r\n}\r\n\r\n.card-icon{\r\n    height: 10rem;\r\n}\r\n\r\n.card-description{\r\n\r\n    font-size: 2rem; font-weight: bolder;\r\n    min-height: 4rem; min-width: 10rem;\r\n\r\n    align-items: center; text-align: center;\r\n\r\n    padding: 2px 2px;\r\n    /* width: 12rem; */\r\n}\r\n\r\n\r\n.max-min p{\r\n    height: 4rem;\r\n}\r\n\r\n.max-min p{\r\n    margin: 1rem 0rem;\r\n    justify-content: center;\r\n}\r\n\r\n.max-icon, .min-icon{\r\n    height: 5rem;\r\n    color: #fff;\r\n}\r\n\r\n.max-line, .min-line{\r\n    display: flex;\r\n    color: #fff;\r\n}\r\n\r\n.max-line p, .min-line p{\r\n    width: 5rem;\r\n    text-align: center;\r\n}\r\n\r\n.dayOfWeek{\r\n    margin: 0;\r\n}\r\n\r\n@media (max-width: 368px){\r\n    \r\n    .container{\r\n        display: none;\r\n    }\r\n    \r\n    body{\r\n        display: flex; flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center; \r\n        height: 100vh;\r\n    }\r\n\r\n    body::before{\r\n        text-align: center;\r\n        background-color: white;\r\n        content: 'Resolução não suportada';\r\n        border-radius: 5rem;\r\n        padding: 2rem;\r\n        min-width: 15rem;\r\n    }  \r\n}\r\n\r\n@media (min-width: 369px) and (max-width: 504px){\r\n\r\n    .container{\r\n        max-width: 95vw;\r\n    }\r\n\r\n    .forecast{\r\n        flex-direction: column;\r\n        gap: 2rem;\r\n    }\r\n\r\n    .card{\r\n        width: initial;\r\n        gap: 1rem;\r\n\r\n        display: grid;\r\n\r\n        grid-template-columns: repeat(3, 1fr);\r\n\r\n        background: rgb(255, 255, 255);\r\n        background: linear-gradient(270deg, rgba(2,0,36,1) 0%, rgb(80, 80, 80) 0%, rgba(255,255,255,1) 100%);\r\n\r\n        border-radius: 0 2rem 2rem 0;\r\n    }\r\n\r\n    .card-icon{\r\n        margin: auto;\r\n    }\r\n\r\n    .day-of-week{\r\n        padding-left: 1rem;\r\n        min-width: 2rem;\r\n    }\r\n\r\n    .max-min{\r\n        justify-content: center;\r\n        grid-area: 1/*linha inicial*/ / -1/*linha final*/ / 2/*coluna inicial*/ / 3/*coluna final*/;\r\n    }\r\n\r\n\r\n    .day-of-week{\r\n        text-align: center;\r\n        margin: 0;\r\n        min-width: 8rem;\r\n    }\r\n    .card-description{\r\n        margin: 0;\r\n        grid-column: span 3;\r\n        font-size: 2.8rem; font-weight: bold;\r\n        width: 100%; min-height: 5rem;\r\n        padding: 0.5rem;\r\n        text-align: center;\r\n    }\r\n    \r\n\r\n}\r\n\r\n@media (min-width: 505px) and (max-width: 900px){\r\n\r\n    .container{\r\n        max-width: 95vw;\r\n    }\r\n\r\n    .forecast{\r\n\r\n        display: grid;\r\n        grid-template-columns: 1fr;\r\n\r\n        gap: 2rem;\r\n    }\r\n\r\n    .card{\r\n        width: initial;\r\n        gap: 1rem;\r\n\r\n        display: grid;\r\n\r\n        grid-template-columns: 1fr 1fr 1fr 1fr;\r\n        /* grid-template-columns: 7rem 10rem 2fr 1fr; */\r\n\r\n        background: rgb(255, 255, 255);\r\n        background: linear-gradient(270deg, rgba(2,0,36,1) 0%, rgb(80, 80, 80) 0%, rgba(255,255,255,1) 100%);\r\n\r\n        border-radius: 0 2rem 2rem 0;\r\n\r\n        justify-content: center;\r\n        align-items: center;\r\n    }\r\n\r\n    .card-icon{\r\n        margin: auto;\r\n    }\r\n\r\n    .day-of-week{\r\n        text-align: center; \r\n        margin: 0;\r\n    }\r\n\r\n    .max-min{\r\n        padding-right: 5rem;\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n\r\n    .card-description{\r\n        font-size: 2rem; font-weight: bold;\r\n        display: flex;\r\n        justify-content: center;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/assets/css/style.css");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

function getData() {
  return _getData.apply(this, arguments);
}
function _getData() {
  _getData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var _tabela, response, texto, parser, doc, leitura, rodadas, _iterator, _step, rodada, _loop, i;
    return _regeneratorRuntime().wrap(function _callee$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _tabela = [];
          _context2.next = 4;
          return fetch('https://p1.trrsf.com/api/musa-soccer/ms-standings-games-light?idChampionship=1420&idPhase=&language=pt-BR&country=BR&nav=N&timezone=BR');
        case 4:
          response = _context2.sent;
          if (response.ok) {
            _context2.next = 7;
            break;
          }
          throw new Error('Dados nao encontrados');
        case 7:
          ;
          _context2.next = 10;
          return response.text();
        case 10:
          texto = _context2.sent;
          parser = new DOMParser();
          doc = parser.parseFromString(texto, 'text/html');
          leitura = doc.querySelector('ul.rounds');
          console.log(leitura);

          //Encontra as rodadas
          rodadas = doc.querySelectorAll('li.round .header-round'); //Adiciona um objeto em cada indice do array
          _iterator = _createForOfIteratorHelper(rodadas);
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              rodada = _step.value;
              _tabela.push({
                rodada: rodada.innerText
              });
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(i) {
            var rodadasData;
            return _regeneratorRuntime().wrap(function _loop$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  console.log("#round-".concat(i));
                  rodadasData = doc.querySelectorAll("#round-".concat(i, " .date-round"));
                  if (_typeof(_tabela[i - 1].datas) !== 'object') {
                    _tabela[i - 1].datas = {}; // Inicializa como um objeto vazio, caso não seja
                  }
                  console.log(rodadasData);
                  rodadasData.forEach(function (value, key) {
                    console.log('================');
                    console.log(value.dataset.date);
                    console.log(key);
                    console.log(value.dataset.date);
                    _tabela[i - 1].datas[key] = {
                      data: value.dataset.date
                    };
                  });

                  // const a = 'aaaa'
                  // tabela[0].data = {a};
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _loop);
          });
          i = 1;
        case 20:
          if (!(i < _tabela.length + 1)) {
            _context2.next = 25;
            break;
          }
          return _context2.delegateYield(_loop(i), "t0", 22);
        case 22:
          i++;
          _context2.next = 20;
          break;
        case 25:
          console.log(_tabela);
          return _context2.abrupt("return", _tabela);
        case 29:
          _context2.prev = 29;
          _context2.t1 = _context2["catch"](0);
          console.error('Erro:', _context2.t1);
        case 32:
          ;
        case 33:
        case "end":
          return _context2.stop();
      }
    }, _callee, null, [[0, 29]]);
  }));
  return _getData.apply(this, arguments);
}
;
var tabela = document.querySelector('.tabela');
var data = getData();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map