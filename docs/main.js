(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mapap\Desktop\all\Rxjs-angular\rxjs-practice\src\main.ts */"zUnb");


/***/ }),

/***/ "1eTX":
/*!************************************************************!*\
  !*** ./src/app/worksheet-task/worksheet-task.component.ts ***!
  \************************************************************/
/*! exports provided: WorksheetTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksheetTaskComponent", function() { return WorksheetTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _provider_common_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../provider/common-service.service */ "5IlR");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/header/header.component */ "320Y");




class WorksheetTaskComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.getDataList();
    }
    getDataList() {
        this.http.getApi('country/getSelectionList', 1).subscribe(res => {
            console.log(res);
        });
    }
}
WorksheetTaskComponent.ɵfac = function WorksheetTaskComponent_Factory(t) { return new (t || WorksheetTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_provider_common_service_service__WEBPACK_IMPORTED_MODULE_1__["CommonServiceService"])); };
WorksheetTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorksheetTaskComponent, selectors: [["app-worksheet-task"]], decls: 1, vars: 0, template: function WorksheetTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmtzaGVldC10YXNrL3dvcmtzaGVldC10YXNrLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorksheetTaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-worksheet-task',
                templateUrl: './worksheet-task.component.html',
                styleUrls: ['./worksheet-task.component.scss']
            }]
    }], function () { return [{ type: _provider_common_service_service__WEBPACK_IMPORTED_MODULE_1__["CommonServiceService"] }]; }, null); })();


/***/ }),

/***/ "320Y":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 12, vars: 0, consts: [["role", "banner", 1, "toolbar"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "spacer"], ["aria-label", "Angular on twitter", "target", "_blank", "rel", "noopener", "href", "https://www.linkedin.com/in/mpandeyji/", "title", "Twitter"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "#fff", "width", "24", "height", "24", "viewBox", "0 0 24 24"], ["d", "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"], ["aria-label", "Angular on YouTube", "target", "_blank", "rel", "noopener", "href", "https://github.com/mpandey78", "title", "YouTube"], ["id", "youtube-logo", "height", "24", "width", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "#fff"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome to To-Do App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 8px;\n}\n.toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 16px;\n}\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover, .toolbar[_ngcontent-%COMP%]   #youtube-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 82px auto 32px;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n}\nsvg.material-icons[_ngcontent-%COMP%] {\n  height: 24px;\n  width: auto;\n}\nsvg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 8px;\n}\n.card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #888;\n}\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  all: unset;\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0;\n}\n.card.card-small[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 168px;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n  cursor: pointer;\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #696767;\n}\n.card.highlight-card[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 60px;\n}\nsvg#rocket[_ngcontent-%COMP%] {\n  width: 80px;\n  position: absolute;\n  left: -10px;\n  top: -24px;\n}\nsvg#rocket-smoke[_ngcontent-%COMP%] {\n  height: calc(100vh - 95px);\n  position: absolute;\n  top: 10px;\n  right: 180px;\n  z-index: -10;\n}\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #125699;\n}\n.terminal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10;\n}\n.terminal[_ngcontent-%COMP%]::before {\n  content: \"\u2022\u2022\u2022\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n}\n.circle-link[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n.circle-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\nfooter[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  line-height: 20px;\n}\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.github-star-badge[_ngcontent-%COMP%] {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n}\n.github-star-badge[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\nsvg#clouds[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n\n@media screen and (max-width: 767px) {\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 72px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n}\n@media screen and (max-width: 575px) {\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    display: none;\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBS2hCO0VBQ0ksMEpBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQUhKO0FBTUU7Ozs7OztFQU1FLGFBQUE7QUFISjtBQU1FO0VBQ0UsU0FBQTtBQUhKO0FBTUU7RUFDRSxPQUFBO0FBSEo7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBSEo7QUFNRTtFQUNFLGNBQUE7QUFISjtBQU1FO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFISjtBQU1FO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFISjtBQU1FOztFQUVFLFlBQUE7QUFISjtBQU1FO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUhKO0FBTUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUhKO0FBTUU7RUFDRSxpQkFBQTtBQUhKO0FBTUU7RUFDRSxVQUFBO0FBSEo7QUFNRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUhKO0FBTUU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQUhKO0FBTUU7RUFDRSxlQUFBO0FBSEo7QUFNRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBSEo7QUFNRTtFQUNFLGVBQUE7QUFISjtBQU1FO0VBQ0UsMkJBQUE7RUFDQSwwQ0FBQTtBQUhKO0FBTUU7RUFDRSxhQUFBO0FBSEo7QUFNRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFISjtBQU1FO0VBQ0UsaUJBQUE7QUFISjtBQU1FO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFISjtBQU1FO0VBQ0UsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUhKO0FBTUU7OztFQUdFLGNBQUE7RUFDQSxxQkFBQTtBQUhKO0FBTUU7RUFDRSxjQUFBO0FBSEo7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBSEo7QUFNRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUhKO0FBTUU7RUFDRSx3RUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7QUFISjtBQU1FO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0VBQUE7RUFDQSx1QkFBQTtBQUhKO0FBTUU7RUFDRSwrQkFBQTtFQUNBLDJDQUFBO0FBSEo7QUFNRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUhKO0FBTUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFISjtBQU1FO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnRUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFISjtBQU1FO0VBQ0UsZ0VBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0FBSEo7QUFNRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFISjtBQU1FO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFISjtBQU1FLHNCQUFBO0FBQ0E7RUFDRTs7SUFFRSxXQUFBO0VBSEo7O0VBTUU7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQUhKOztFQU1FO0lBQ0UsaUJBQUE7RUFISjs7RUFNRTtJQUNFLFlBQUE7SUFDQSx3QkFBQTtFQUhKO0FBQ0Y7QUFNRTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGtCQUFBO0VBSko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuOmhvc3Qge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzMzM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDhweCAwO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMTtcbn1cblxuLnRvb2xiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udG9vbGJhciBpbWcge1xuICBtYXJnaW46IDAgMTZweDtcbn1cblxuLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAwIDhweDtcbn1cblxuLnRvb2xiYXIgI3lvdXR1YmUtbG9nbyB7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIsXG4udG9vbGJhciAjeW91dHViZS1sb2dvOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogODJweCBhdXRvIDMycHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuc3ZnLm1hdGVyaWFsLWljb25zIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuc3ZnLm1hdGVyaWFsLWljb25zOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmNhcmQgc3ZnLm1hdGVyaWFsLWljb25zIHBhdGgge1xuICBmaWxsOiAjODg4O1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4uY2FyZCB7XG4gIGFsbDogdW5zZXQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogMCA4cHggMTZweDtcbiAgcGFkZGluZzogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5jYXJkLmNhcmQtc21hbGwge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNjhweDtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIC5tYXRlcmlhbC1pY29ucyBwYXRoIHtcbiAgZmlsbDogIzY5Njc2Nztcbn1cblxuLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogMzAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJkLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xufVxuXG5zdmcjcm9ja2V0IHtcbiAgd2lkdGg6IDgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwcHg7XG4gIHRvcDogLTI0cHg7XG59XG5cbnN2ZyNyb2NrZXQtc21va2Uge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxODBweDtcbiAgei1pbmRleDogLTEwO1xufVxuXG5hLFxuYTp2aXNpdGVkLFxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMTk3NmQyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogIzEyNTY5OTtcbn1cblxuLnRlcm1pbmFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmctdG9wOiA0NXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjBmMTA7XG59XG5cbi50ZXJtaW5hbDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLigKLigKLigKJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjM2EzYTNhO1xuICBjb2xvcjogI2MyYzNjNDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDE0cHggMDtcbiAgdGV4dC1pbmRlbnQ6IDRweDtcbn1cblxuLnRlcm1pbmFsIHByZSB7XG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhciwgQ29uc29sYXMsIExpYmVyYXRpb24gTW9ubywgTWVubG8sIG1vbm9zcGFjZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2lyY2xlLWxpbmsge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBtYXJnaW46IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XG59XG5cbi5jaXJjbGUtbGluazpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbmZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbmZvb3RlciBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdpdGh1Yi1zdGFyLWJhZGdlIHtcbiAgY29sb3I6ICMyNDI5MmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2ZhZmJmYywgI2VmZjNmNiA5MCUpO1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZ2l0aHViLXN0YXItYmFkZ2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2YwZjNmNiwgI2U2ZWJmMSA5MCUpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjcsIDMxLCAzNSwgMC4zNSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0wLjVlbTtcbn1cblxuLmdpdGh1Yi1zdGFyLWJhZGdlIC5tYXRlcmlhbC1pY29ucyB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG5zdmcjY2xvdWRzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IC0xNjBweDtcbiAgbGVmdDogLTIzMHB4O1xuICB6LWluZGV4OiAtMTA7XG4gIHdpZHRoOiAxOTIwcHg7XG59XG5cbi8qIFJlc3BvbnNpdmUgU3R5bGVzICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY2FyZC1jb250YWluZXIgPiAqOm5vdCguY2lyY2xlLWxpbmspLFxuLnRlcm1pbmFsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgbWFyZ2luOiA4cHggMDtcbiAgfVxuXG4gIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xuICB9XG5cbiAgc3ZnI3JvY2tldC1zbW9rZSB7XG4gICAgcmlnaHQ6IDEyMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgc3ZnI3JvY2tldC1zbW9rZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5IlR":
/*!****************************************************!*\
  !*** ./src/app/provider/common-service.service.ts ***!
  \****************************************************/
/*! exports provided: CommonServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonServiceService", function() { return CommonServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




let auth_token = "YTdoekJnaWFyRTBBWTJsMHIwWUZOUk1BRkRwNTNYdjRFcUpNVEdoag==";
// let auth_token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6IjcxIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJkZWZhdWx0bG9naW5icmFuY2giOjEsImlzcyI6InN5c3RlbSIsImlhdCI6MTY3NTc2MTkwNSwiZXhwIjoxNjc1Nzc5OTA1fQ.X0qyxO45KbcCzFPrTve0VhrU3f7GJIfYFyvvXyiiQAk"
// let auth_token ="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6IjcwIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJkZWZhdWx0bG9naW5icmFuY2giOjEsImlzcyI6InN5c3RlbSIsImlhdCI6MTY3NTkyMTM2NiwiZXhwIjoxNjc1OTM5MzY2fQ.ayIHKhTsufoZAFcdcp_VyLRLxLpbcS15zUe9dzcrZXc"
class CommonServiceService {
    constructor(http) {
        this.http = http;
        //  public baseUrl = "https://ats.hiromation.com:5126/"
        this.baseUrl = "https://api.countrystatecity.in/v1/";
    }
    getApi(endPoint, isHeader) {
        var httpHeaders;
        if (isHeader == 0) {
            httpHeaders = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'method': 'GET',
                    'headers': 'headers',
                    'redirect': 'follow'
                }),
            };
        }
        else {
            httpHeaders = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'X-CSCAPI-KEY': `${auth_token}`
                }),
            };
        }
        return this.http.get(this.baseUrl + endPoint, httpHeaders);
    }
}
CommonServiceService.ɵfac = function CommonServiceService_Factory(t) { return new (t || CommonServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CommonServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonServiceService, factory: CommonServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "8+r2":
/*!**********************************************************!*\
  !*** ./src/app/register-task/register-task.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterTaskComponent", function() { return RegisterTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/header/header.component */ "320Y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/footer/footer.component */ "jQpT");









function RegisterTaskComponent_small_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*company id is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterTaskComponent_small_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*user id is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterTaskComponent_small_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*role id is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterTaskComponent_small_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*project id is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterTaskComponent_small_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*service id is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterTaskComponent_small_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*branch id is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterTaskComponent_small_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*work date id is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterTaskComponent_small_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*total time id is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterTaskComponent_small_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*work hours id is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterTaskComponent_small_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*comments id is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterTaskComponent_small_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*break time is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RegisterTaskComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        this.registerTaskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            company_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            role_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            project_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            service_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            branch_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            work_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            total_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            work_hour: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            comments: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            break_time: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    registerTask() {
        let urlReqData = {
            company_id: this.registerTaskForm.value.company_id,
            user_id: this.registerTaskForm.value.user_id,
            role_id: this.registerTaskForm.value.role_id,
            project_id: this.registerTaskForm.value.project_id,
            service_id: this.registerTaskForm.value.service_id,
            branch_id: this.registerTaskForm.value.branch_id,
            work_date: this.registerTaskForm.value.work_date,
            totol_time: this.registerTaskForm.value.totol_time,
            work_hour: this.registerTaskForm.value.work_hour,
            comments: this.registerTaskForm.value.comments,
            break_time: this.registerTaskForm.value.break_time,
        };
        console.log(urlReqData);
        let url = 'https://onjyb.dss.gos.mybluehostin.me/api/WorkSheet_Controller/addEmpWorkSheet_1/';
        this.http.post(url, urlReqData).subscribe(res => {
            console.log(res);
        });
    }
}
RegisterTaskComponent.ɵfac = function RegisterTaskComponent_Factory(t) { return new (t || RegisterTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RegisterTaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterTaskComponent, selectors: [["app-register-task"]], decls: 70, vars: 13, consts: [[1, "container"], [1, "row"], ["action", "", 2, "overflow-y", "scroll", 3, "formGroup"], [1, "card-title", "text-center"], [1, "row", "text-center"], [1, "col-md-4"], ["for", "", 1, "text-start"], ["type", "text", "placeholder", "enter your company id", "formControlName", "company_id", "maxlength", "120", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "placeholder", "enter your user id", "formControlName", "user_id", "maxlength", "120", 1, "form-control"], ["type", "text", "placeholder", "enter your role id", "formControlName", "role_id", "maxlength", "120", 1, "form-control"], ["type", "text", "placeholder", "enter your project id", "formControlName", "project_id", "maxlength", "120", 1, "form-control"], ["type", "text", "placeholder", "enter your service id", "formControlName", "service_id", "maxlength", "120", 1, "form-control"], ["type", "text", "placeholder", "enter your branch id", "formControlName", "branch_id", "maxlength", "120", 1, "form-control"], ["type", "date", "placeholder", "", "formControlName", "work_date", "maxlength", "120", 1, "form-control"], ["type", "text", "placeholder", "enter your total time", "formControlName", "total_time", "maxlength", "120", 1, "form-control"], ["type", "text", "placeholder", "enter your work hours", "formControlName", "work_hour", "maxlength", "120", 1, "form-control"], ["type", "text", "placeholder", "enter your comments", "formControlName", "comments", "maxlength", "120", 1, "form-control"], ["type", "text", "placeholder", "enter your break time", "formControlName", "break_time", "maxlength", "120", 1, "form-control"], [1, "col-md-4", "text-center", "mt-4", "mb-1", "d-flex", 2, "justify-content", "center", "align-item", "center", "display", "flex"], [1, "btn", "btn-sm", "btn-primary", 2, "display", "flex", "justify-content", "center", "align-items", "center", 3, "disabled", "click"], ["routerLink", "/login", 1, "mt-4", "register"], [1, "text-danger"]], template: function RegisterTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Register your task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Company Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RegisterTaskComponent_small_11_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "User Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RegisterTaskComponent_small_16_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Role Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RegisterTaskComponent_small_21_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Project Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RegisterTaskComponent_small_27_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Service Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, RegisterTaskComponent_small_32_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Branch Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RegisterTaskComponent_small_37_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Work Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, RegisterTaskComponent_small_43_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Total Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, RegisterTaskComponent_small_48_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Work Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, RegisterTaskComponent_small_53_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, RegisterTaskComponent_small_58_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Break Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, RegisterTaskComponent_small_63_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterTaskComponent_Template_button_click_65_listener() { return ctx.registerTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "app-footer");
    } if (rf & 2) {
        var tmp_1_0 = null;
        var tmp_2_0 = null;
        var tmp_3_0 = null;
        var tmp_4_0 = null;
        var tmp_5_0 = null;
        var tmp_6_0 = null;
        var tmp_7_0 = null;
        var tmp_8_0 = null;
        var tmp_9_0 = null;
        var tmp_10_0 = null;
        var tmp_11_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerTaskForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.registerTaskForm.get("company_id")) == null ? null : tmp_1_0.hasError("required")) && ((tmp_1_0 = ctx.registerTaskForm.get("company_id")) == null ? null : tmp_1_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.registerTaskForm.get("user_id")) == null ? null : tmp_2_0.hasError("required")) && ((tmp_2_0 = ctx.registerTaskForm.get("user_id")) == null ? null : tmp_2_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.registerTaskForm.get("role_id")) == null ? null : tmp_3_0.hasError("required")) && ((tmp_3_0 = ctx.registerTaskForm.get("role_id")) == null ? null : tmp_3_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.registerTaskForm.get("project_id")) == null ? null : tmp_4_0.hasError("required")) && ((tmp_4_0 = ctx.registerTaskForm.get("project_id")) == null ? null : tmp_4_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.registerTaskForm.get("service_id")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx.registerTaskForm.get("service_id")) == null ? null : tmp_5_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.registerTaskForm.get("branch_id")) == null ? null : tmp_6_0.hasError("required")) && ((tmp_6_0 = ctx.registerTaskForm.get("branch_id")) == null ? null : tmp_6_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.registerTaskForm.get("work_date")) == null ? null : tmp_7_0.hasError("required")) && ((tmp_7_0 = ctx.registerTaskForm.get("work_date")) == null ? null : tmp_7_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.registerTaskForm.get("total_time")) == null ? null : tmp_8_0.hasError("required")) && ((tmp_8_0 = ctx.registerTaskForm.get("total_time")) == null ? null : tmp_8_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx.registerTaskForm.get("work_hour")) == null ? null : tmp_9_0.hasError("required")) && ((tmp_9_0 = ctx.registerTaskForm.get("work_hour")) == null ? null : tmp_9_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx.registerTaskForm.get("comments")) == null ? null : tmp_10_0.hasError("required")) && ((tmp_10_0 = ctx.registerTaskForm.get("comments")) == null ? null : tmp_10_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.registerTaskForm.get("break_time")) == null ? null : tmp_11_0.hasError("required")) && ((tmp_11_0 = ctx.registerTaskForm.get("break_time")) == null ? null : tmp_11_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerTaskForm.valid);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  background-color: #080710 !important;\n}\n\n.background[_ngcontent-%COMP%] {\n  width: 430px;\n  height: 520px;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  top: 50%;\n}\n\n.background[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.shape[_ngcontent-%COMP%]:first-child {\n  background: linear-gradient(#1845ad, #23a2f6);\n  left: -80px;\n  top: -80px;\n}\n\n.shape[_ngcontent-%COMP%]:last-child {\n  background: linear-gradient(to right, #ff512f, #f09819);\n  right: -30px;\n  bottom: -80px;\n}\n\nform[_ngcontent-%COMP%] {\n  height: 500px;\n  width: 1000px;\n  background-color: rgba(255, 255, 255, 0.13);\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  border-radius: 10px;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);\n  padding: 50px 35px;\n}\n\nform[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  color: #273ab8;\n  letter-spacing: 0.5px;\n  outline: none;\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 500;\n  line-height: 42px;\n  text-align: center;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 30px;\n  font-size: 16px;\n  font-weight: 500;\n}\n\ninput[_ngcontent-%COMP%] {\n  display: block;\n  height: 50px;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.07);\n  border-radius: 3px;\n  padding: 0 10px;\n  margin-top: 8px;\n  font-size: 14px;\n  font-weight: 300;\n  border: 1px solid black !important;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #3c2929;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  width: 100%;\n  background-color: #2a185e;\n  color: #fcfcfe !important;\n  padding: 15px 0;\n  font-size: 18px;\n  font-weight: 600;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  color: blue;\n  font-size: 20px;\n  font-weight: bold;\n  margin-top: -20px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.register[_ngcontent-%COMP%] {\n  width: 85px;\n  font-size: medium;\n  font-weight: bold;\n  cursor: pointer;\n  border-radius: 10%;\n  color: white !important;\n  background-color: #273ab8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nsmall[_ngcontent-%COMP%] {\n  text-align: start;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXItdGFzay9yZWdpc3Rlci10YXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFEQTtFQUNJLDZDQUFBO0VBSUEsV0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFDQTtFQUNJLHVEQUFBO0VBS0EsWUFBQTtFQUNBLGFBQUE7QUFGSjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSwwQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFHQTtFQUNJLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFBSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7QUFHSjs7QUFEQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFIQTtFQUNJLGFBQUE7QUFNSjs7QUFIQTtFQUNJLFdBQUE7RUFFQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBS0o7O0FBSEE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7QUFNSiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLXRhc2svcmVnaXN0ZXItdGFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgwNzEwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJhY2tncm91bmR7XHJcbiAgICB3aWR0aDogNDMwcHg7XHJcbiAgICBoZWlnaHQ6IDUyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG59XHJcbi5iYWNrZ3JvdW5kIC5zaGFwZXtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLnNoYXBlOmZpcnN0LWNoaWxke1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICMxODQ1YWQsXHJcbiAgICAgICAgIzIzYTJmNlxyXG4gICAgKTtcclxuICAgIGxlZnQ6IC04MHB4O1xyXG4gICAgdG9wOiAtODBweDtcclxufVxyXG4uc2hhcGU6bGFzdC1jaGlsZHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byByaWdodCxcclxuICAgICAgICAjZmY1MTJmLFxyXG4gICAgICAgICNmMDk4MTlcclxuICAgICk7XHJcbiAgICByaWdodDogLTMwcHg7XHJcbiAgICBib3R0b206IC04MHB4O1xyXG59XHJcbmZvcm17XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4xMyk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggcmdiYSg4LDcsMTYsMC42KTtcclxuICAgIHBhZGRpbmc6IDUwcHggMzVweDtcclxufVxyXG5mb3JtICp7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzI3M2FiODtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuZm9ybSBoM3tcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogNDJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubGFiZWx7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbmlucHV0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG46OnBsYWNlaG9sZGVye1xyXG4gICAgY29sb3I6ICMzYzI5Mjk7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhMTg1ZTtcclxuICAgIGNvbG9yOiAjZmNmY2ZlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jYXJkLXRpdGxle1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucmVnaXN0ZXIge1xyXG4gICAgd2lkdGg6IDg1cHg7XHJcbiAgICAvLyBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjczYWI4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5zbWFsbHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterTaskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register-task',
                templateUrl: './register-task.component.html',
                styleUrls: ['./register-task.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "8vV2":
/*!*****************************************************************************!*\
  !*** ./src/app/New-Task-Component/add-user-list/add-user-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddUserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserListComponent", function() { return AddUserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/header/header.component */ "320Y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");









function AddUserListComponent_small_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*zone name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserListComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.name);
} }
function AddUserListComponent_small_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*country is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserListComponent_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.name);
} }
function AddUserListComponent_small_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*status is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserListComponent_small_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*status is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserListComponent_small_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*description id is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddUserListComponent {
    constructor(http, route) {
        this.http = http;
        this.route = route;
        this.countryList = [];
        this.stateList = [];
        this.getStateByiso2 = [];
    }
    ngOnInit() {
        this.getCountrytList();
        this.registerTaskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            zone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            desciption: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    getCountrytList() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6IjcxIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJkZWZhdWx0bG9naW5icmFuY2giOjEsImlzcyI6InN5c3RlbSIsImlhdCI6MTY3NjYyNjI2OCwiZXhwIjoxNjc2NjQ0MjY4fQ.B6AW3biGLGGdjBVhevYym9kXtWaEVKZtippc6IE4Ye8', "Content-Type": "application/json", "moduleId": '132' });
        this.http.get('https://ats.hiromation.com:5126/country/getSelectionList', { headers }).subscribe(res => {
            this.countryList = res['data'];
            console.log(this.countryList);
        });
    }
    getStateList(event) {
        this.id = event.target.value;
        console.log(this.id);
        let apiUrl = `${'https://ats.hiromation.com:5126/state/getSelectionList'}`;
        // const headers = new HttpHeaders({ 'Authorization':'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6IjcxIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJkZWZhdWx0bG9naW5icmFuY2giOjEsImlzcyI6InN5c3RlbSIsImlhdCI6MTY3NjAyMzA2MywiZXhwIjoxNjc2MDQxMDYzfQ.GhEpP4ShEfXPFfJkQXwAZudrd9A05ihf0XsBROievjM',"Content-Type": "application/json","moduleId" : '132' })
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6IjcxIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJkZWZhdWx0bG9naW5icmFuY2giOjEsImlzcyI6InN5c3RlbSIsImlhdCI6MTY3NjYyNjI2OCwiZXhwIjoxNjc2NjQ0MjY4fQ.B6AW3biGLGGdjBVhevYym9kXtWaEVKZtippc6IE4Ye8', "Content-Type": "application/json", "moduleId": '132' });
        this.http.get(apiUrl, { headers, params: { "countryId": this.id } }).subscribe(res => {
            console.log(res);
            this.stateList = res['data'];
            this.getStateByiso2 = this.stateList;
            console.log(this.getStateByiso2);
        });
    }
    registerZone() {
        // this.route.navigate(['/zone-list'])
        let dataUrl = {
            zone: this.registerTaskForm.value.zone,
            country: this.registerTaskForm.value.country,
            state: this.registerTaskForm.value.state,
            description: this.registerTaskForm.value.desciption,
            status: this.registerTaskForm.value.status
        };
        let datazoneurl = JSON.stringify(dataUrl);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6IjcxIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJkZWZhdWx0bG9naW5icmFuY2giOjEsImlzcyI6InN5c3RlbSIsImlhdCI6MTY3NjAyMzA2MywiZXhwIjoxNjc2MDQxMDYzfQ.GhEpP4ShEfXPFfJkQXwAZudrd9A05ihf0XsBROievjM', "Content-Type": "application/json", "moduleId": '132' });
        this.http.post('https://ats.hiromation.com:5126/zone/add', datazoneurl, { headers }).subscribe(res => {
        });
    }
}
AddUserListComponent.ɵfac = function AddUserListComponent_Factory(t) { return new (t || AddUserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AddUserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddUserListComponent, selectors: [["app-add-user-list"]], decls: 51, vars: 8, consts: [[1, "newcontainer"], [1, "row", 2, "margin-top", "70px", "width", "400px", "height", "450px"], [1, "card", "p-4"], [1, "text-center", "reg-user"], ["action", "", 2, "overflow-y", "scroll", 3, "formGroup"], [1, "col-md-12", "mt-2"], ["for", "", 1, "text-start"], ["type", "text", "placeholder", "enter your zone name", "formControlName", "zone", "maxlength", "120", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["name", "", "id", "", "formControlName", "country", 1, "form-control", 3, "change"], ["value", "", "selected", ""], ["value", "in", 3, "value", 4, "ngFor", "ngForOf"], [1, "row"], ["name", "", "id", "", "formControlName", "state", "multiple", "", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "", "id", "", "formControlName", "status", 1, "form-control"], ["value", "active"], ["value", "inactive"], ["type", "text", "placeholder", "enter your desciption", "formControlName", "desctiption", "maxlength", "120", 1, "form-control"], [1, "modal-footer", "justify-content-start", "mt-4"], ["type", "button", "data-bs-dismiss", "modal", "routerLink", "/zone-list", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary", 2, "margin-left", "20px", 3, "click"], [1, "text-danger"], ["value", "in", 3, "value"], [3, "value"]], template: function AddUserListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Zone Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddUserListComponent_small_11_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddUserListComponent_Template_select_change_15_listener($event) { return ctx.getStateList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Select your Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddUserListComponent_option_18_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddUserListComponent_small_19_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Select State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AddUserListComponent_option_27_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AddUserListComponent_small_28_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Select Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AddUserListComponent_small_40_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AddUserListComponent_small_45_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddUserListComponent_Template_button_click_49_listener() { return ctx.registerZone(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_1_0 = null;
        var tmp_3_0 = null;
        var tmp_5_0 = null;
        var tmp_6_0 = null;
        var tmp_7_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerTaskForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.registerTaskForm.get("zone")) == null ? null : tmp_1_0.hasError("required")) && ((tmp_1_0 = ctx.registerTaskForm.get("zone")) == null ? null : tmp_1_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.registerTaskForm.get("country")) == null ? null : tmp_3_0.hasError("required")) && ((tmp_3_0 = ctx.registerTaskForm.get("country")) == null ? null : tmp_3_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getStateByiso2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.registerTaskForm.get("state")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx.registerTaskForm.get("state")) == null ? null : tmp_5_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.registerTaskForm.get("status")) == null ? null : tmp_6_0.hasError("required")) && ((tmp_6_0 = ctx.registerTaskForm.get("status")) == null ? null : tmp_6_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.registerTaskForm.get("desciption")) == null ? null : tmp_7_0.hasError("required")) && ((tmp_7_0 = ctx.registerTaskForm.get("desciption")) == null ? null : tmp_7_0.touched));
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectMultipleControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".container[_ngcontent-%COMP%] {\n  background-color: #080710 !important;\n}\n\n.background[_ngcontent-%COMP%] {\n  width: 430px;\n  height: 520px;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  top: 50%;\n}\n\n.background[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.shape[_ngcontent-%COMP%]:first-child {\n  background: linear-gradient(#1845ad, #23a2f6);\n  left: -80px;\n  top: -80px;\n}\n\n.shape[_ngcontent-%COMP%]:last-child {\n  background: linear-gradient(to right, #ff512f, #f09819);\n  right: -30px;\n  bottom: -80px;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #3c2929;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  color: blue;\n  font-size: 20px;\n  font-weight: bold;\n  margin-top: -20px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.register[_ngcontent-%COMP%] {\n  width: 85px;\n  font-size: medium;\n  font-weight: bold;\n  cursor: pointer;\n  border-radius: 10%;\n  color: white !important;\n  background-color: #273ab8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nsmall[_ngcontent-%COMP%] {\n  text-align: start;\n  display: flex;\n}\n\n.task[_ngcontent-%COMP%] {\n  background-color: #154615;\n  color: white;\n  cursor: pointer;\n}\n\n.task[_ngcontent-%COMP%]:hover {\n  background: blue;\n}\n\n.addUser[_ngcontent-%COMP%]:hover {\n  color: blue !important;\n  cursor: pointer;\n}\n\n.newcontainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.reg-user[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 22px;\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTmV3LVRhc2stQ29tcG9uZW50L2FkZC11c2VyLWxpc3QvYWRkLXVzZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREE7RUFDSSw2Q0FBQTtFQUlBLFdBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBQ0E7RUFDSSx1REFBQTtFQUtBLFlBQUE7RUFDQSxhQUFBO0FBRko7O0FBa0RBO0VBQ0ksY0FBQTtBQS9DSjs7QUE0REE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUF6REo7O0FBMkRBO0VBQ0ksYUFBQTtBQXhESjs7QUEyREE7RUFDSSxXQUFBO0VBRUEsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXpESjs7QUEyREE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7QUF4REo7O0FBMkRBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQXhESjs7QUEwREE7RUFDSSxnQkFBQTtBQXZESjs7QUF5REE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUF0REE7O0FBd0RBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFyREo7O0FBdURBO0VBQ0ksaUJBQUE7RUFBbUIsZUFBQTtFQUFnQixXQUFBO0FBbER2QyIsImZpbGUiOiJzcmMvYXBwL05ldy1UYXNrLUNvbXBvbmVudC9hZGQtdXNlci1saXN0L2FkZC11c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA4MDcxMCAhaW1wb3J0YW50O1xyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG4gICAgd2lkdGg6IDQzMHB4O1xyXG4gICAgaGVpZ2h0OiA1MjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxufVxyXG4uYmFja2dyb3VuZCAuc2hhcGV7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5zaGFwZTpmaXJzdC1jaGlsZHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAjMTg0NWFkLFxyXG4gICAgICAgICMyM2EyZjZcclxuICAgICk7XHJcbiAgICBsZWZ0OiAtODBweDtcclxuICAgIHRvcDogLTgwcHg7XHJcbn1cclxuLnNoYXBlOmxhc3QtY2hpbGR7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgdG8gcmlnaHQsXHJcbiAgICAgICAgI2ZmNTEyZixcclxuICAgICAgICAjZjA5ODE5XHJcbiAgICApO1xyXG4gICAgcmlnaHQ6IC0zMHB4O1xyXG4gICAgYm90dG9tOiAtODBweDtcclxufVxyXG4vLyBmb3Jte1xyXG4vLyAgICAgaGVpZ2h0OiA1MDBweDtcclxuLy8gICAgIHdpZHRoOiAxMDAwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTMpO1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuLy8gICAgIHRvcDogNTAlO1xyXG4vLyAgICAgbGVmdDogNTAlO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuLy8gICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcclxuLy8gICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoOCw3LDE2LDAuNik7XHJcbi8vICAgICBwYWRkaW5nOiA1MHB4IDM1cHg7XHJcbi8vIH1cclxuLy8gZm9ybSAqe1xyXG4vLyAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4vLyAgICAgY29sb3I6ICMyNzNhYjg7XHJcbi8vICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbi8vICAgICBvdXRsaW5lOiBub25lO1xyXG4vLyAgICAgYm9yZGVyOiBub25lO1xyXG4vLyB9XHJcbi8vIGZvcm0gaDN7XHJcbi8vICAgICBmb250LXNpemU6IDMycHg7XHJcbi8vICAgICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIGxhYmVse1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gfVxyXG4vLyBpbnB1dCxzZWxlY3R7XHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIGhlaWdodDogNTBweDtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjA3KTtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuLy8gICAgIHBhZGRpbmc6IDAgMTBweDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDhweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbjo6cGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjogIzNjMjkyOTtcclxufVxyXG4vLyBidXR0b257XHJcbi8vICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmExODVlO1xyXG4vLyAgICAgY29sb3I6ICNmY2ZjZmUgIWltcG9ydGFudDtcclxuLy8gICAgIHBhZGRpbmc6IDE1cHggMDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMThweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vIH1cclxuLmNhcmQtdGl0bGV7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5yZWdpc3RlciB7XHJcbiAgICB3aWR0aDogODVweDtcclxuICAgIC8vIGhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzNhYjg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbnNtYWxse1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxufVxyXG4udGFza3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMSwgNzAsIDIxKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udGFzazpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IGJsdWU7XHJcbn1cclxuLmFkZFVzZXI6aG92ZXJ7XHJcbmNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubmV3Y29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ucmVnLXVzZXJ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAyMnB4O2NvbG9yOiBibHVlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddUserListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-user-list',
                templateUrl: './add-user-list.component.html',
                styleUrls: ['./add-user-list.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "9DFq":
/*!************************************************!*\
  !*** ./src/app/add-user/add-user.component.ts ***!
  \************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _provider_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../provider/shared.service */ "Sltx");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/header/header.component */ "320Y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/footer/footer.component */ "jQpT");










function AddUserComponent_small_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*user name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_small_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*email id is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_small_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Please enter valid email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_small_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*gender is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddUserComponent_small_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*status is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddUserComponent {
    constructor(http, router, service) {
        this.http = http;
        this.router = router;
        this.service = service;
        this.userList = [];
        this.itemPerPage = 5;
        this.currentPage = 1;
        this.getData = [];
    }
    ngOnInit() {
        this.getUserList();
        this.registerTaskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,5}')]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        }),
            this.editUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,]),
                gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            });
    }
    registerTask() {
        let urlReqData = {
            name: this.registerTaskForm.value.name,
            email: this.registerTaskForm.value.email,
            gender: this.registerTaskForm.value.gender,
            status: this.registerTaskForm.value.status,
        };
        console.log(urlReqData);
        // https://gorest.co.in/public/v2/users
        this.service.postApi('users', urlReqData, 1).subscribe(res => {
            if (res) {
                this.router.navigate(['/user-list']);
                this.getUserList();
            }
            else {
                alert("something went wrong!!");
            }
        });
    }
    getUserList() {
        this.service.getApi('users', 1).subscribe(res => {
            this.userList = res;
            this.totalItems = this.userList.length;
            console.log(this.totalItems);
            console.log(this.userList);
        });
    }
    pagination(event) {
        console.log(event);
        this.currentPage = event;
        this.getUserList();
    }
    editUser(_id) {
        // alert(_id)
        this.u_id = _id;
        this.service.getApi('users/' + _id, 1).subscribe(res => {
            this.getData = res;
            console.log(this.getData);
            this.editUserForm.patchValue({
                id: this.getData.id,
                name: this.getData.name,
                email: this.getData.email,
                gender: this.getData.gender,
                status: this.getData.status
            });
        });
        // this._id = _id;
        // this._id=_id
        // $("#exampleModal").modal("show");
    }
    editUserByid() {
        var apiReqData = {
            name: this.editUserForm.value.name,
            email: this.editUserForm.value.email,
            gender: this.editUserForm.value.gender,
            status: this.editUserForm.value.status
        };
        this.service.putApi('users/' + this.u_id, apiReqData, 1).subscribe(res => {
            if (res) {
                this.getUserList();
                $("#exampleModal").modal("hide");
            }
        });
    }
}
AddUserComponent.ɵfac = function AddUserComponent_Factory(t) { return new (t || AddUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_provider_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"])); };
AddUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddUserComponent, selectors: [["app-add-user"]], decls: 47, vars: 7, consts: [[1, "newcontainer"], [1, "row", 2, "margin-top", "70px", "width", "400px", "height", "450px"], [1, "card", "p-4"], [1, "text-center", "reg-user"], ["action", "", 2, "overflow-y", "scroll", 3, "formGroup"], [1, "col-md-12", "mt-2"], ["for", "", 1, "text-start"], ["type", "text", "placeholder", "enter your Name", "formControlName", "name", "maxlength", "120", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "placeholder", "enter your email id", "formControlName", "email", "maxlength", "120", 1, "form-control"], ["class", " text-danger", 4, "ngIf"], ["name", "", "id", "", "formControlName", "gender", 1, "form-control"], ["value", "", "selected", ""], ["value", "male"], ["value", "female"], [1, "row"], ["name", "", "id", "", "formControlName", "status", 1, "form-control"], ["value", "active"], ["value", "inactive"], [1, "modal-footer", "justify-content-start", "mt-4"], ["type", "button", "data-bs-dismiss", "modal", "routerLink", "/user-list", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary", 2, "margin-left", "20px", 3, "disabled", "click"], [1, "text-danger"]], template: function AddUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Register User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddUserComponent_small_11_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AddUserComponent_small_16_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AddUserComponent_small_17_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Select your Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AddUserComponent_small_28_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Select Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, AddUserComponent_small_40_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddUserComponent_Template_button_click_44_listener() { return ctx.registerTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-footer");
    } if (rf & 2) {
        var tmp_1_0 = null;
        var tmp_2_0 = null;
        var tmp_3_0 = null;
        var tmp_4_0 = null;
        var tmp_5_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerTaskForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.registerTaskForm.get("name")) == null ? null : tmp_1_0.hasError("required")) && ((tmp_1_0 = ctx.registerTaskForm.get("name")) == null ? null : tmp_1_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.registerTaskForm.get("email")) == null ? null : tmp_2_0.hasError("required")) && ((tmp_2_0 = ctx.registerTaskForm.get("email")) == null ? null : tmp_2_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.registerTaskForm.get("email")) == null ? null : tmp_3_0.hasError("pattern")) && ((tmp_3_0 = ctx.registerTaskForm.get("email")) == null ? null : tmp_3_0.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.registerTaskForm.get("gender")) == null ? null : tmp_4_0.hasError("required")) && ((tmp_4_0 = ctx.registerTaskForm.get("gender")) == null ? null : tmp_4_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.registerTaskForm.get("status")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx.registerTaskForm.get("status")) == null ? null : tmp_5_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerTaskForm.valid);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  background-color: #080710 !important;\n}\n\n.background[_ngcontent-%COMP%] {\n  width: 430px;\n  height: 520px;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  top: 50%;\n}\n\n.background[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.shape[_ngcontent-%COMP%]:first-child {\n  background: linear-gradient(#1845ad, #23a2f6);\n  left: -80px;\n  top: -80px;\n}\n\n.shape[_ngcontent-%COMP%]:last-child {\n  background: linear-gradient(to right, #ff512f, #f09819);\n  right: -30px;\n  bottom: -80px;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #3c2929;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  color: blue;\n  font-size: 20px;\n  font-weight: bold;\n  margin-top: -20px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.register[_ngcontent-%COMP%] {\n  width: 85px;\n  font-size: medium;\n  font-weight: bold;\n  cursor: pointer;\n  border-radius: 10%;\n  color: white !important;\n  background-color: #273ab8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nsmall[_ngcontent-%COMP%] {\n  text-align: start;\n  display: flex;\n}\n\n.task[_ngcontent-%COMP%] {\n  background-color: #154615;\n  color: white;\n  cursor: pointer;\n}\n\n.task[_ngcontent-%COMP%]:hover {\n  background: blue;\n}\n\n.addUser[_ngcontent-%COMP%]:hover {\n  color: blue !important;\n  cursor: pointer;\n}\n\n.newcontainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.reg-user[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 22px;\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXVzZXIvYWRkLXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksNkNBQUE7RUFJQSxXQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUNBO0VBQ0ksdURBQUE7RUFLQSxZQUFBO0VBQ0EsYUFBQTtBQUZKOztBQWtEQTtFQUNJLGNBQUE7QUEvQ0o7O0FBNERBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBekRKOztBQTJEQTtFQUNJLGFBQUE7QUF4REo7O0FBMkRBO0VBQ0ksV0FBQTtFQUVBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF6REo7O0FBMkRBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0FBeERKOztBQTJEQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUF4REo7O0FBMERBO0VBQ0ksZ0JBQUE7QUF2REo7O0FBeURBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBdERBOztBQXdEQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBckRKOztBQXVEQTtFQUNJLGlCQUFBO0VBQW1CLGVBQUE7RUFBZ0IsV0FBQTtBQWxEdkMiLCJmaWxlIjoic3JjL2FwcC9hZGQtdXNlci9hZGQtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgwNzEwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJhY2tncm91bmR7XHJcbiAgICB3aWR0aDogNDMwcHg7XHJcbiAgICBoZWlnaHQ6IDUyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG59XHJcbi5iYWNrZ3JvdW5kIC5zaGFwZXtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLnNoYXBlOmZpcnN0LWNoaWxke1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICMxODQ1YWQsXHJcbiAgICAgICAgIzIzYTJmNlxyXG4gICAgKTtcclxuICAgIGxlZnQ6IC04MHB4O1xyXG4gICAgdG9wOiAtODBweDtcclxufVxyXG4uc2hhcGU6bGFzdC1jaGlsZHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byByaWdodCxcclxuICAgICAgICAjZmY1MTJmLFxyXG4gICAgICAgICNmMDk4MTlcclxuICAgICk7XHJcbiAgICByaWdodDogLTMwcHg7XHJcbiAgICBib3R0b206IC04MHB4O1xyXG59XHJcbi8vIGZvcm17XHJcbi8vICAgICBoZWlnaHQ6IDUwMHB4O1xyXG4vLyAgICAgd2lkdGg6IDEwMDBweDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4xMyk7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4vLyAgICAgdG9wOiA1MCU7XHJcbi8vICAgICBsZWZ0OiA1MCU7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4vLyAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xyXG4vLyAgICAgYm94LXNoYWRvdzogMCAwIDQwcHggcmdiYSg4LDcsMTYsMC42KTtcclxuLy8gICAgIHBhZGRpbmc6IDUwcHggMzVweDtcclxuLy8gfVxyXG4vLyBmb3JtICp7XHJcbi8vICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbi8vICAgICBjb2xvcjogIzI3M2FiODtcclxuLy8gICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuLy8gICAgIG91dGxpbmU6IG5vbmU7XHJcbi8vICAgICBib3JkZXI6IG5vbmU7XHJcbi8vIH1cclxuLy8gZm9ybSBoM3tcclxuLy8gICAgIGZvbnQtc2l6ZTogMzJweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vICAgICBsaW5lLWhlaWdodDogNDJweDtcclxuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gbGFiZWx7XHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbi8vICAgICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgICBmb250LXdlaWdodDogNTAwO1xyXG4vLyB9XHJcbi8vIGlucHV0LHNlbGVjdHtcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgaGVpZ2h0OiA1MHB4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDcpO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4vLyAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4vLyAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuOjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiAjM2MyOTI5O1xyXG59XHJcbi8vIGJ1dHRvbntcclxuLy8gICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTE4NWU7XHJcbi8vICAgICBjb2xvcjogI2ZjZmNmZSAhaW1wb3J0YW50O1xyXG4vLyAgICAgcGFkZGluZzogMTVweCAwO1xyXG4vLyAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gfVxyXG4uY2FyZC10aXRsZXtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnJlZ2lzdGVyIHtcclxuICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgLy8gaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3M2FiODtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuc21hbGx7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG59XHJcbi50YXNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxLCA3MCwgMjEpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50YXNrOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogYmx1ZTtcclxufVxyXG4uYWRkVXNlcjpob3ZlcntcclxuY29sb3I6IGJsdWUgIWltcG9ydGFudDtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5uZXdjb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5yZWctdXNlcntcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDIycHg7Y29sb3I6IGJsdWU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-user',
                templateUrl: './add-user.component.html',
                styleUrls: ['./add-user.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _provider_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CG1p":
/*!*****************************************!*\
  !*** ./src/app/authGuard/auth.guard.ts ***!
  \*****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AuthGuard {
    canActivate(route, state) {
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "SBxm":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_provider_auth_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/provider/auth-service.service */ "tGZc");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/header/header.component */ "320Y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/footer/footer.component */ "jQpT");










function SignupComponent_small_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*first name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_small_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*user id is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_small_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*role id is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_small_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*project id is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_small_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*service id is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_small_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*branch id is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_small_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*work date id is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SignupComponent_small_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*total time id is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SignupComponent {
    constructor(http, router, authService) {
        this.http = http;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.getUserList();
        this.registerTaskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            dateOfBirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    registerTask() {
        let urlReqData = {
            firstName: this.registerTaskForm.value.firstName,
            lastName: this.registerTaskForm.value.lastName,
            email: this.registerTaskForm.value.email,
            mobileNumber: this.registerTaskForm.value.mobileNumber,
            address: this.registerTaskForm.value.address,
            dateOfBirth: this.registerTaskForm.value.dateOfBirth,
            password: this.registerTaskForm.value.password,
            confirmPassword: this.registerTaskForm.value.confirmPassword,
        };
        console.log(urlReqData);
        // https://gorest.co.in/public/v2/users
        this.authService.postApi('signUp', urlReqData, 0).subscribe(res => {
            console.log(res);
            alert(res);
        });
    }
    getUserList() {
        this.http.get('https://gorest.co.in/public/v2/users').subscribe(res => {
            console.log(res);
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_provider_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 55, vars: 10, consts: [[1, "container"], [1, "row"], ["action", "", 2, "overflow-y", "scroll", 3, "formGroup"], [1, "card-title", "text-center"], [1, "row", "text-center"], [1, "col-md-4"], ["for", "", 1, "text-start"], ["type", "text", "placeholder", "enter your first name", "formControlName", "firstName", "maxlength", "120", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "placeholder", "enter your last name", "formControlName", "lastName", "maxlength", "120", 1, "form-control"], ["type", "text", "placeholder", "enter your email id", "formControlName", "email", "maxlength", "120", 1, "form-control"], ["type", "text", "placeholder", "enter your mobile number", "formControlName", "mobileNumber", "maxlength", "120", 1, "form-control"], ["type", "text", "placeholder", "enter your address", "formControlName", "address", "maxlength", "120", 1, "form-control"], ["type", "date", "placeholder", "enter your branch id", "formControlName", "dateofBirth", "maxlength", "120", 1, "form-control"], ["type", "password", "placeholder", "enter your password", "formControlName", "password", "maxlength", "120", 1, "form-control"], ["type", "password", "placeholder", "enter your confirm password", "formControlName", "confirmPassword", "maxlength", "120", 1, "form-control"], [1, "col-md-4", "text-center", "mt-4", "mb-1", "d-flex", 2, "justify-content", "center", "align-item", "center", "display", "flex"], [1, "btn", "btn-sm", "btn-primary", 2, "display", "flex", "justify-content", "center", "align-items", "center", 3, "disabled", "click"], ["routerLink", "/login", 1, "mt-4", "register"], [1, "text-danger"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Register your task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SignupComponent_small_11_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SignupComponent_small_16_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SignupComponent_small_21_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, SignupComponent_small_27_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SignupComponent_small_32_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Date of Birth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, SignupComponent_small_37_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, SignupComponent_small_43_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, SignupComponent_small_48_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_50_listener() { return ctx.registerTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "app-footer");
    } if (rf & 2) {
        var tmp_1_0 = null;
        var tmp_2_0 = null;
        var tmp_3_0 = null;
        var tmp_4_0 = null;
        var tmp_5_0 = null;
        var tmp_6_0 = null;
        var tmp_7_0 = null;
        var tmp_8_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerTaskForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.registerTaskForm.get("firstName")) == null ? null : tmp_1_0.hasError("required")) && ((tmp_1_0 = ctx.registerTaskForm.get("firstName")) == null ? null : tmp_1_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.registerTaskForm.get("lastName")) == null ? null : tmp_2_0.hasError("required")) && ((tmp_2_0 = ctx.registerTaskForm.get("lastName")) == null ? null : tmp_2_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.registerTaskForm.get("email")) == null ? null : tmp_3_0.hasError("required")) && ((tmp_3_0 = ctx.registerTaskForm.get("email")) == null ? null : tmp_3_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.registerTaskForm.get("mobileNumber")) == null ? null : tmp_4_0.hasError("required")) && ((tmp_4_0 = ctx.registerTaskForm.get("mobileNumber")) == null ? null : tmp_4_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.registerTaskForm.get("address")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx.registerTaskForm.get("address")) == null ? null : tmp_5_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.registerTaskForm.get("dateofBirth")) == null ? null : tmp_6_0.hasError("required")) && ((tmp_6_0 = ctx.registerTaskForm.get("dateofBirth")) == null ? null : tmp_6_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.registerTaskForm.get("password")) == null ? null : tmp_7_0.hasError("required")) && ((tmp_7_0 = ctx.registerTaskForm.get("password")) == null ? null : tmp_7_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.registerTaskForm.get("confirmPassword")) == null ? null : tmp_8_0.hasError("required")) && ((tmp_8_0 = ctx.registerTaskForm.get("confirmPassword")) == null ? null : tmp_8_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerTaskForm.valid);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  background-color: #080710 !important;\n}\n\n.background[_ngcontent-%COMP%] {\n  width: 430px;\n  height: 520px;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  top: 50%;\n}\n\n.background[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.shape[_ngcontent-%COMP%]:first-child {\n  background: linear-gradient(#1845ad, #23a2f6);\n  left: -80px;\n  top: -80px;\n}\n\n.shape[_ngcontent-%COMP%]:last-child {\n  background: linear-gradient(to right, #ff512f, #f09819);\n  right: -30px;\n  bottom: -80px;\n}\n\nform[_ngcontent-%COMP%] {\n  height: 500px;\n  width: 1000px;\n  background-color: rgba(255, 255, 255, 0.13);\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  border-radius: 10px;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);\n  padding: 50px 35px;\n}\n\nform[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  color: #273ab8;\n  letter-spacing: 0.5px;\n  outline: none;\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 500;\n  line-height: 42px;\n  text-align: center;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 30px;\n  font-size: 16px;\n  font-weight: 500;\n}\n\ninput[_ngcontent-%COMP%] {\n  display: block;\n  height: 50px;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.07);\n  border-radius: 3px;\n  padding: 0 10px;\n  margin-top: 8px;\n  font-size: 14px;\n  font-weight: 300;\n  border: 1px solid black !important;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #3c2929;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  width: 100%;\n  background-color: #2a185e;\n  color: #fcfcfe !important;\n  padding: 15px 0;\n  font-size: 18px;\n  font-weight: 600;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  color: blue;\n  font-size: 20px;\n  font-weight: bold;\n  margin-top: -20px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.register[_ngcontent-%COMP%] {\n  width: 85px;\n  font-size: medium;\n  font-weight: bold;\n  cursor: pointer;\n  border-radius: 10%;\n  color: white !important;\n  background-color: #273ab8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nsmall[_ngcontent-%COMP%] {\n  text-align: start;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFEQTtFQUNJLDZDQUFBO0VBSUEsV0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFDQTtFQUNJLHVEQUFBO0VBS0EsWUFBQTtFQUNBLGFBQUE7QUFGSjs7QUFJQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSwwQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFHQTtFQUNJLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFBSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFFSjs7QUFBQTtFQUNJLGNBQUE7QUFHSjs7QUFEQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFIQTtFQUNJLGFBQUE7QUFNSjs7QUFIQTtFQUNJLFdBQUE7RUFFQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBS0o7O0FBSEE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7QUFNSiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgwNzEwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJhY2tncm91bmR7XHJcbiAgICB3aWR0aDogNDMwcHg7XHJcbiAgICBoZWlnaHQ6IDUyMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNTAlO1xyXG59XHJcbi5iYWNrZ3JvdW5kIC5zaGFwZXtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLnNoYXBlOmZpcnN0LWNoaWxke1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICMxODQ1YWQsXHJcbiAgICAgICAgIzIzYTJmNlxyXG4gICAgKTtcclxuICAgIGxlZnQ6IC04MHB4O1xyXG4gICAgdG9wOiAtODBweDtcclxufVxyXG4uc2hhcGU6bGFzdC1jaGlsZHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byByaWdodCxcclxuICAgICAgICAjZmY1MTJmLFxyXG4gICAgICAgICNmMDk4MTlcclxuICAgICk7XHJcbiAgICByaWdodDogLTMwcHg7XHJcbiAgICBib3R0b206IC04MHB4O1xyXG59XHJcbmZvcm17XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4xMyk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggcmdiYSg4LDcsMTYsMC42KTtcclxuICAgIHBhZGRpbmc6IDUwcHggMzVweDtcclxufVxyXG5mb3JtICp7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzI3M2FiODtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuZm9ybSBoM3tcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogNDJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubGFiZWx7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbmlucHV0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG46OnBsYWNlaG9sZGVye1xyXG4gICAgY29sb3I6ICMzYzI5Mjk7XHJcbn1cclxuYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhMTg1ZTtcclxuICAgIGNvbG9yOiAjZmNmY2ZlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jYXJkLXRpdGxle1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucmVnaXN0ZXIge1xyXG4gICAgd2lkdGg6IDg1cHg7XHJcbiAgICAvLyBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjczYWI4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5zbWFsbHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_provider_auth_service_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceService"] }]; }, null); })();


/***/ }),

/***/ "Sltx":
/*!********************************************!*\
  !*** ./src/app/provider/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");





let auth_token = "ba1017f6c901adb5b42969ee70a334e94b4ec3ee870e80f2ad17ce3d67250d3b";
// let auth_token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6IjcxIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJkZWZhdWx0bG9naW5icmFuY2giOjEsImlzcyI6InN5c3RlbSIsImlhdCI6MTY3NTc2MTkwNSwiZXhwIjoxNjc1Nzc5OTA1fQ.X0qyxO45KbcCzFPrTve0VhrU3f7GJIfYFyvvXyiiQAk"
class SharedService {
    // public baseUrl = 'https://ats.hiromation.com:5126/zone/'
    constructor(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.baseUrl = 'https://gorest.co.in/public/v2/';
    }
    // ----------- get api ---------------- //
    getApi(endPoint, isHeader) {
        var httpHeaders;
        if (isHeader == 0) {
            httpHeaders = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                    "Content-Type": "application/json"
                    // 'Authorization': `Bearer ${auth_token}`
                }),
            };
        }
        else {
            httpHeaders = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${auth_token}`
                }),
            };
        }
        return this.http.get(this.baseUrl + endPoint, httpHeaders);
    }
    postApi(endPointURL, data, isHeader) {
        var httpHeaders;
        if (isHeader == 0) {
            httpHeaders = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
        }
        else {
            httpHeaders = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth_token}`
                    //  token:`${localStorage.getItem("token")}`
                })
            };
        }
        return this.http.post(this.baseUrl + endPointURL, data, httpHeaders);
    }
    putApi(endPointURL, data, isHeader) {
        var httpHeaders;
        if (isHeader == 0) {
            httpHeaders = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({})
            };
        }
        else {
            httpHeaders = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                    //  token:`${localStorage.getItem("token")}`
                    'Authorization': `Bearer ${auth_token}`
                })
            };
        }
        return this.http.put(this.baseUrl + endPointURL, data, httpHeaders);
    }
    patchApi(endPointURL, data, isHeader) {
        var httpHeaders;
        if (isHeader == 0) {
            httpHeaders = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
        }
        else {
            httpHeaders = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth_token}`
                    //  token: `${localStorage.getItem("token")}`,
                })
            };
        }
        return this.http.patch(this.baseUrl + endPointURL, data, httpHeaders);
    }
    // toastr service
    successToast(msg) {
        this.toastr.success(msg);
    }
    errorToast(msg) {
        this.toastr.error("erro");
    }
    infoToast(msg) {
        this.toastr.info(msg);
    }
    warningToast(msg) {
        this.toastr.warning(msg);
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'rxjs-practice';
        this.weatherData = [
            {
                "name": "San Jose",
                "temperature": "36º F",
                "wind": "31Kmph",
                "humidity": "66%"
            },
            {
                "name": "Seattle",
                "temperature": "30º F",
                "wind": "4Kmph",
                "humidity": "9%"
            },
            {
                "name": "New York",
                "temperature": "20º F",
                "wind": "8Kmph",
                "humidity": "61%"
            },
            {
                "name": "Chicago",
                "temperature": "27º F",
                "wind": "35Kmph",
                "humidity": "2%"
            },
            {
                "name": "Atlanta",
                "temperature": "22º F",
                "wind": "25Kmph",
                "humidity": "5%"
            },
            {
                "name": "Austin",
                "temperature": "25º F",
                "wind": "1Kmph",
                "humidity": "5%"
            },
            {
                "name": "Denver",
                "temperature": "30º F",
                "wind": "8Kmph",
                "humidity": "48%"
            }
        ];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "UMdc":
/*!**************************************************!*\
  !*** ./src/app/user-list/user-list.component.ts ***!
  \**************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _provider_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../provider/shared.service */ "Sltx");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/header/header.component */ "320Y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/footer/footer.component */ "jQpT");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "oOf3");











function UserListComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_tr_26_Template_td_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const item_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.editUser(item_r13.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13.status);
} }
function UserListComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No data found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserListComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pagination-controls", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function UserListComponent_div_30_Template_pagination_controls_pageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.pagination($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserListComponent_small_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*user name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserListComponent_small_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*email id is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserListComponent_small_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Please enter valid email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserListComponent_small_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*gender is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserListComponent_small_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*status is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserListComponent_small_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*user name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserListComponent_small_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*email id is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserListComponent_small_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Please enter valid email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserListComponent_small_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*gender is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserListComponent_small_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*status is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
class UserListComponent {
    constructor(http, router, service) {
        this.http = http;
        this.router = router;
        this.service = service;
        this.userList = [];
        this.itemPerPage = 5;
        this.currentPage = 1;
        this.getData = [];
    }
    ngOnInit() {
        this.getUserList();
        this.registerTaskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,5}')]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        }),
            this.editUserForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,]),
                gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
                status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            });
    }
    registerTask() {
        let urlReqData = {
            name: this.registerTaskForm.value.name,
            email: this.registerTaskForm.value.email,
            gender: this.registerTaskForm.value.gender,
            status: this.registerTaskForm.value.status,
        };
        console.log(urlReqData);
        // https://gorest.co.in/public/v2/users
        this.service.postApi('users', urlReqData, 1).subscribe(res => {
            if (true) {
                this.router.navigate(['/user-list']);
                this.getUserList();
            }
            else {}
        });
    }
    getUserList() {
        this.service.getApi('users', 1).subscribe(res => {
            this.userList = res;
            this.totalItems = this.userList.length;
            console.log(this.totalItems);
            console.log(this.userList);
        });
    }
    pagination(event) {
        console.log(event);
        this.currentPage = event;
        this.getUserList();
    }
    editUser(_id) {
        // alert(_id)
        this.u_id = _id;
        this.service.getApi('users/' + _id, 1).subscribe(res => {
            this.getData = res;
            console.log(this.getData);
            this.editUserForm.patchValue({
                id: this.getData.id,
                name: this.getData.name,
                email: this.getData.email,
                gender: this.getData.gender,
                status: this.getData.status
            });
        });
        // this._id = _id;
        // this._id=_id
    }
    editUserByid() {
        $("#exampleModal").modal('show');
        var apiReqData = {
            name: this.editUserForm.value.name,
            email: this.editUserForm.value.email,
            gender: this.editUserForm.value.gender,
            status: this.editUserForm.value.status
        };
        this.service.putApi('users/' + this.u_id, apiReqData, 1).subscribe(res => {
            if (res) {
                this.service.successToast("Updated");
                this.getUserList();
                // this.router.navigate(['/user-list'])
                window.location.href = '/user-list';
                // $("#exampleModal").modal("hide");
            }
        });
    }
}
UserListComponent.ɵfac = function UserListComponent_Factory(t) { return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_provider_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"])); };
UserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserListComponent, selectors: [["app-user-list"]], decls: 126, vars: 24, consts: [[1, "container"], [1, "col-lg-12", "mt-3", "col-new"], [1, "head", "d-flex", "justify-content-between"], [1, "mt-2"], ["skipLocationChange", "", "routerLink", "/add-user", 1, "text-success", "addUser", "mt-2"], [1, "fa", "fa-plus"], [1, "table-responsive-md", "sortable", "mt-2"], [1, "table", "table-bordered", 2, "border", "1px solid #7fa8d0"], [2, "background-color", "blue", "color", "white"], ["scope", "col"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "custom-pagination mt-2  text-align-center", "style", "text-align: center !important; color: blue;", 4, "ngIf"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], [1, "modal-body"], ["action", "", 2, "overflow-y", "scroll", 3, "formGroup"], [1, "col-md-12"], ["for", "", 1, "text-start"], ["type", "text", "placeholder", "enter your Name", "formControlName", "name", "maxlength", "120", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], [1, "col-md-12", "mt-2"], ["type", "text", "placeholder", "enter your email id", "formControlName", "email", "maxlength", "120", 1, "form-control"], ["class", " text-danger", 4, "ngIf"], ["name", "", "id", "", "formControlName", "gender", 1, "form-control"], ["value", "", "selected", ""], ["value", "male"], ["value", "female"], [1, "row"], ["name", "", "id", "", "formControlName", "status", 1, "form-control"], ["value", "active"], ["value", "inactive"], [1, "modal-footer", "justify-content-start", "mt-2"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["id", "addUser", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "tabindex", "-1", "aria-labelledby", "staticBackdropLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "staticBackdropLabel", 1, "modal-title"], [1, "modal-footer", "justify-content-start"], ["scope", "row"], [1, "task", 3, "click"], [1, "fa", "fa-edit"], [1, "fa", "fa-eye", 2, "margin-left", "10px"], ["colspan", "6", 1, "text-center", "noData"], [1, "custom-pagination", "mt-2", "text-align-center", 2, "text-align", "center !important", "color", "blue"], [3, "pageChange"], [1, "text-danger"]], template: function UserListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "List of Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Add User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Edit User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UserListComponent_tr_26_Template, 14, 5, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, UserListComponent_tr_29_Template, 3, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, UserListComponent_div_30_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Edit/Update User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, UserListComponent_small_44_Template, 2, 0, "small", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, UserListComponent_small_49_Template, 2, 0, "small", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, UserListComponent_small_50_Template, 2, 0, "small", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Select your Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, UserListComponent_small_61_Template, 2, 0, "small", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Select Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, UserListComponent_small_73_Template, 2, 0, "small", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_77_listener() { return ctx.editUserByid(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h5", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "User Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, UserListComponent_small_91_Template, 2, 0, "small", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, UserListComponent_small_96_Template, 2, 0, "small", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, UserListComponent_small_97_Template, 2, 0, "small", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Select your Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, UserListComponent_small_108_Template, 2, 0, "small", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Select Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "option", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, UserListComponent_small_120_Template, 2, 0, "small", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_124_listener() { return ctx.registerTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_4_0 = null;
        var tmp_5_0 = null;
        var tmp_6_0 = null;
        var tmp_7_0 = null;
        var tmp_8_0 = null;
        var tmp_11_0 = null;
        var tmp_12_0 = null;
        var tmp_13_0 = null;
        var tmp_14_0 = null;
        var tmp_15_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](27, 17, ctx.userList, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](20, _c0, ctx.itemPerPage, ctx.currentPage, ctx.totalItems)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalItems > 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.editUserForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.editUserForm.get("name")) == null ? null : tmp_4_0.hasError("required")) && ((tmp_4_0 = ctx.editUserForm.get("name")) == null ? null : tmp_4_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.editUserForm.get("email")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx.editUserForm.get("email")) == null ? null : tmp_5_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.editUserForm.get("email")) == null ? null : tmp_6_0.hasError("pattern")) && ((tmp_6_0 = ctx.editUserForm.get("email")) == null ? null : tmp_6_0.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.editUserForm.get("gender")) == null ? null : tmp_7_0.hasError("required")) && ((tmp_7_0 = ctx.editUserForm.get("gender")) == null ? null : tmp_7_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.editUserForm.get("status")) == null ? null : tmp_8_0.hasError("required")) && ((tmp_8_0 = ctx.editUserForm.get("status")) == null ? null : tmp_8_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.editUserForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerTaskForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.registerTaskForm.get("name")) == null ? null : tmp_11_0.hasError("required")) && ((tmp_11_0 = ctx.registerTaskForm.get("name")) == null ? null : tmp_11_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx.registerTaskForm.get("email")) == null ? null : tmp_12_0.hasError("required")) && ((tmp_12_0 = ctx.registerTaskForm.get("email")) == null ? null : tmp_12_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_13_0 = ctx.registerTaskForm.get("email")) == null ? null : tmp_13_0.hasError("pattern")) && ((tmp_13_0 = ctx.registerTaskForm.get("email")) == null ? null : tmp_13_0.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_14_0 = ctx.registerTaskForm.get("gender")) == null ? null : tmp_14_0.hasError("required")) && ((tmp_14_0 = ctx.registerTaskForm.get("gender")) == null ? null : tmp_14_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_15_0 = ctx.registerTaskForm.get("status")) == null ? null : tmp_15_0.hasError("required")) && ((tmp_15_0 = ctx.registerTaskForm.get("status")) == null ? null : tmp_15_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerTaskForm.valid);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  background-color: #dee2e6 !important;\n}\n\n.col-new[_ngcontent-%COMP%] {\n  margin-top: 75px !important;\n}\n\n.background[_ngcontent-%COMP%] {\n  width: 430px;\n  height: 520px;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  top: 50%;\n}\n\n.background[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.shape[_ngcontent-%COMP%]:first-child {\n  background: linear-gradient(#1845ad, #23a2f6);\n  left: -80px;\n  top: -80px;\n}\n\n.shape[_ngcontent-%COMP%]:last-child {\n  background: linear-gradient(to right, #ff512f, #f09819);\n  right: -30px;\n  bottom: -80px;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #3c2929;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  color: blue;\n  font-size: 20px;\n  font-weight: bold;\n  margin-top: -20px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.register[_ngcontent-%COMP%] {\n  width: 85px;\n  font-size: medium;\n  font-weight: bold;\n  cursor: pointer;\n  border-radius: 10%;\n  color: white !important;\n  background-color: #273ab8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nsmall[_ngcontent-%COMP%] {\n  text-align: start;\n  display: flex;\n}\n\n.task[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.fa-edit[_ngcontent-%COMP%]:hover {\n  background: #7979b5;\n}\n\n.addUser[_ngcontent-%COMP%]:hover {\n  color: blue !important;\n  cursor: pointer;\n}\n\n.addUser[_ngcontent-%COMP%] {\n  border: 1px solid green;\n  height: 45px;\n  width: 140px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n}\n\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  \n  position: absolute;\n  z-index: 1;\n  top: -5px;\n  left: 105%;\n}\n\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.noData[_ngcontent-%COMP%] {\n  height: 250px;\n  font-size: 22px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG9DQUFBO0FBQUo7O0FBRUE7RUFDSSwyQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksNkNBQUE7RUFJQSxXQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUNBO0VBQ0ksdURBQUE7RUFLQSxZQUFBO0VBQ0EsYUFBQTtBQUZKOztBQWtEQTtFQUNJLGNBQUE7QUEvQ0o7O0FBNERBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBekRKOztBQTJEQTtFQUNJLGFBQUE7QUF4REo7O0FBMkRBO0VBQ0ksV0FBQTtFQUVBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF6REo7O0FBMkRBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0FBeERKOztBQTJEQTtFQUdJLGVBQUE7QUExREo7O0FBNERBO0VBQ0ksbUJBQUE7QUF6REo7O0FBMkRBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBeERBOztBQTBEQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQXZESjs7QUF5REE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7QUF0REo7O0FBeURFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBdkRKOztBQTBERTtFQUNFLG1CQUFBO0FBdkRKOztBQXlERTtFQUNFLGFBQUE7RUFBYyxlQUFBO0VBQWdCLGdCQUFBO0FBcERsQyIsImZpbGUiOiJzcmMvYXBwL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzA4MDcxMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNiAhaW1wb3J0YW50O1xyXG59XHJcbi5jb2wtbmV3e1xyXG4gICAgbWFyZ2luLXRvcDogNzVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG4gICAgd2lkdGg6IDQzMHB4O1xyXG4gICAgaGVpZ2h0OiA1MjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxufVxyXG4uYmFja2dyb3VuZCAuc2hhcGV7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5zaGFwZTpmaXJzdC1jaGlsZHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAjMTg0NWFkLFxyXG4gICAgICAgICMyM2EyZjZcclxuICAgICk7XHJcbiAgICBsZWZ0OiAtODBweDtcclxuICAgIHRvcDogLTgwcHg7XHJcbn1cclxuLnNoYXBlOmxhc3QtY2hpbGR7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgdG8gcmlnaHQsXHJcbiAgICAgICAgI2ZmNTEyZixcclxuICAgICAgICAjZjA5ODE5XHJcbiAgICApO1xyXG4gICAgcmlnaHQ6IC0zMHB4O1xyXG4gICAgYm90dG9tOiAtODBweDtcclxufVxyXG4vLyBmb3Jte1xyXG4vLyAgICAgaGVpZ2h0OiA1MDBweDtcclxuLy8gICAgIHdpZHRoOiAxMDAwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTMpO1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuLy8gICAgIHRvcDogNTAlO1xyXG4vLyAgICAgbGVmdDogNTAlO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuLy8gICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcclxuLy8gICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoOCw3LDE2LDAuNik7XHJcbi8vICAgICBwYWRkaW5nOiA1MHB4IDM1cHg7XHJcbi8vIH1cclxuLy8gZm9ybSAqe1xyXG4vLyAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4vLyAgICAgY29sb3I6ICMyNzNhYjg7XHJcbi8vICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbi8vICAgICBvdXRsaW5lOiBub25lO1xyXG4vLyAgICAgYm9yZGVyOiBub25lO1xyXG4vLyB9XHJcbi8vIGZvcm0gaDN7XHJcbi8vICAgICBmb250LXNpemU6IDMycHg7XHJcbi8vICAgICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIGxhYmVse1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gfVxyXG4vLyBpbnB1dCxzZWxlY3R7XHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIGhlaWdodDogNTBweDtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjA3KTtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuLy8gICAgIHBhZGRpbmc6IDAgMTBweDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDhweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbjo6cGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjogIzNjMjkyOTtcclxufVxyXG4vLyBidXR0b257XHJcbi8vICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmExODVlO1xyXG4vLyAgICAgY29sb3I6ICNmY2ZjZmUgIWltcG9ydGFudDtcclxuLy8gICAgIHBhZGRpbmc6IDE1cHggMDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMThweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vIH1cclxuLmNhcmQtdGl0bGV7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5yZWdpc3RlciB7XHJcbiAgICB3aWR0aDogODVweDtcclxuICAgIC8vIGhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzNhYjg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbnNtYWxse1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxufVxyXG4udGFza3tcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyMSwgNzAsIDIxKTtcclxuICAgIC8vIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZmEtZWRpdDpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHJnYigxMjEsIDEyMSwgMTgxKTtcclxufVxyXG4uYWRkVXNlcjpob3ZlcntcclxuY29sb3I6IGJsdWUgIWltcG9ydGFudDtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hZGRVc2Vye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLnRvb2x0aXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIFxyXG4gICAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IC01cHg7XHJcbiAgICBsZWZ0OiAxMDUlO1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbiAgLm5vRGF0YXtcclxuICAgIGhlaWdodDogMjUwcHg7Zm9udC1zaXplOiAyMnB4O21hcmdpbi10b3A6IDIwcHg7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-list',
                templateUrl: './user-list.component.html',
                styleUrls: ['./user-list.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _provider_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }]; }, null); })();


/***/ }),

/***/ "X3+m":
/*!***************************************************************!*\
  !*** ./src/app/practice/temperature/temperature.component.ts ***!
  \***************************************************************/
/*! exports provided: TemperatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperatureComponent", function() { return TemperatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/header/header.component */ "320Y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function TemperatureComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " city temp ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " temp convert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " next topic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " next topic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Temperature converter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Enter Temperature in @c (celsius)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function TemperatureComponent_div_3_Template_input_keypress_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.NumOnly($event); })("ngModelChange", function TemperatureComponent_div_3_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.cel = $event; })("ngModelChange", function TemperatureComponent_div_3_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.getChangeFah($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Enter Temperature in @f (fernheight)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function TemperatureComponent_div_3_Template_input_keypress_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.NumOnly($event); })("ngModelChange", function TemperatureComponent_div_3_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.fah = $event; })("ngModelChange", function TemperatureComponent_div_3_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.getChangeCel($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " converted temperature is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " converted temperature is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.temperatureForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.cel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.fah);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.fah, " f");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.cel, " c");
} }
function TemperatureComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "wb_sunny");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.cityDetails.temperature, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Wind: ", ctx_r1.cityDetails.wind, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Humidity: ", ctx_r1.cityDetails.humidity, " ");
} }
function TemperatureComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Results Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TemperatureComponent {
    constructor() {
        this.c = "";
        this.f = "";
        this.fah = 32;
        this.cel = 0;
        this.hide = true;
        this.showNoResult = false;
        this.hideDetails = false;
    }
    ngOnInit() {
        this.temperatureForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            tempc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            tempf: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    // sendTempValue(event:string, type:'c' | 'f'){
    //  if(event === null){
    //   this.c ="";
    //   this.f ="";
    //   return;
    //  }
    //  const temperatureDada = Number(event);
    //  if(type === 'c'){
    //   this.f = ((temperatureDada * 9) / 5 + 32 ).toFixed(1);
    //  }
    //  else
    //  {
    //   this.c = (((temperatureDada-32)*5 )/9).toFixed(1);
    //  }
    // }
    getChangeCel(event) {
        const newC = ((Number(this.fah) - 32) * (5 / 9));
        this.cel = newC;
    }
    getChangeFah(event) {
        const newF = (Number(this.cel) * (9 / 5) + 32);
        this.fah = newF;
    }
    NumOnly(event) {
        let Numpattern = /^([0-9])*$/;
        let resultNum = Numpattern.test(event.key);
        return resultNum;
    }
    cityChange(value) {
        if (value) {
            let foundCityDetails = this.weatherData.find(city => city.name.toLowerCase() == value.toLowerCase());
            if (foundCityDetails) {
                this.cityDetails = foundCityDetails;
                this.hideDetails = true;
                this.showNoResult = false;
            }
            else {
                this.showNoResult = true;
                this.hideDetails = false;
            }
        }
        else {
            this.showNoResult = false;
            this.hideDetails = false;
        }
    }
}
TemperatureComponent.ɵfac = function TemperatureComponent_Factory(t) { return new (t || TemperatureComponent)(); };
TemperatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TemperatureComponent, selectors: [["app-temperature"]], inputs: { weatherData: "weatherData" }, decls: 13, vars: 4, consts: [[1, "container"], [1, "row", "d-flex", 2, "justify-content", "center", "align-items", "center"], ["class", "card", 4, "ngIf"], [1, "weather-data", "d-flex", "align-items-center", "mt-50"], [1, "d-flex", "align-items-center", "justify-content-center"], ["type", "text", "placeholder", "Seattle", "data-test-id", "app-input", 1, "large", "ml-30", 3, "ngModel", "ngModelChange"], [1, "mt-20", "layout-row", "align-items-center", "justify-content-center"], [1, "card"], ["data-test-id", "weather-details", "class", "card-text pt-10 layout-row justify-content-between", 4, "ngIf"], ["data-test-id", "no-results", "class", "card-text", 4, "ngIf"], [1, "row", "d-flex", "w-100", "mb-4"], [1, "col-md-3"], [1, "city", "active"], [1, "temp"], [1, "card-title"], [3, "formGroup"], [1, "row"], [1, "mt-3"], ["for", "", 1, "mb-2"], ["type", "text", "placeholder", "enter temperature ", "maxlength", "5", "formControlName", "tempc", 1, "form-control", 3, "ngModel", "keypress", "ngModelChange"], ["type", "text", "placeholder", "enter temperature ", "maxlength", "10", "formControlName", "tempf", 1, "form-control", 3, "ngModel", "keypress", "ngModelChange"], [1, "btn-submit", "mb-4"], [1, "converted"], [1, "text-success"], [1, "converted", "mt-4"], ["data-test-id", "weather-details", 1, "card-text", "pt-10", "layout-row", "justify-content-between"], [1, "mt-20", "outlined"], [1, "icon-only", "mx-2"], [1, "material-icons"], ["data-test-id", "output-temperature", 1, "temperature"], [1, "mr-15", "mb-15"], ["data-test-id", "output-wind", 1, "mt-20"], ["data-test-id", "output-humidity", 1, "mt-20"], ["data-test-id", "no-results", 1, "card-text"]], template: function TemperatureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TemperatureComponent_div_3_Template, 32, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Enter City: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TemperatureComponent_Template_input_ngModelChange_8_listener($event) { return ctx.city = $event; })("ngModelChange", function TemperatureComponent_Template_input_ngModelChange_8_listener($event) { return ctx.cityChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TemperatureComponent_div_11_Template, 12, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TemperatureComponent_div_12_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cityDetails && ctx.hideDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNoResult);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".container[_ngcontent-%COMP%] {\n  padding-top: 7rem;\n}\n\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 600px;\n  max-width: 800px;\n  height: 50vh;\n}\n\n.converted[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1px;\n}\n\n.city[_ngcontent-%COMP%], div.temp[_ngcontent-%COMP%] {\n  display: flex;\n  cursor: pointer;\n  justify-content: center;\n}\n\n.city[_ngcontent-%COMP%]:hover {\n  background: #85a167;\n  color: black;\n  display: flex;\n  justify-content: center;\n  border-bottom: 2px solid grey;\n}\n\n.temp[_ngcontent-%COMP%]:hover {\n  background: #85a167;\n  color: black;\n  display: flex;\n  justify-content: center;\n  border-bottom: 2px solid grey;\n}\n\n.city[_ngcontent-%COMP%]:active {\n  border-bottom: 2px solid;\n}\n\nsection[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.weather-data[_ngcontent-%COMP%] {\n  border: 1px solid #cbc9c9;\n  padding: 50px;\n}\n\n.temperature[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJhY3RpY2UvdGVtcGVyYXR1cmUvdGVtcGVyYXR1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUdKOztBQURBO0VBQ0MsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUFJRDs7QUFGQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0FBS0o7O0FBSEE7RUFDSSx3QkFBQTtBQU1KOztBQUFBO0VBQ0ksaUJBQUE7QUFHSjs7QUFBRTtFQUNFLFlBQUE7QUFHSjs7QUFBRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQUdKOztBQUFFO0VBQ0UsZUFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvcHJhY3RpY2UvdGVtcGVyYXR1cmUvdGVtcGVyYXR1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgcGFkZGluZy10b3A6IDdyZW07XHJcbiAgXHJcbn1cclxuLmNhcmR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIGhlaWdodDogNTB2aDtcclxufVxyXG4uY29udmVydGVke1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbn1cclxuLmNpdHkgLCBkaXYudGVtcHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uY2l0eTpob3ZlciB7XHJcbiBiYWNrZ3JvdW5kOiAjODVhMTY3O1xyXG4gY29sb3I6IGJsYWNrO1xyXG4gZGlzcGxheTogZmxleDtcclxuIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XHJcbn1cclxuLnRlbXA6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODVhMTY3O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XHJcbn1cclxuLmNpdHk6YWN0aXZle1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xyXG59XHJcblxyXG5cclxuLy9cclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLXRleHQge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuICBcclxuICAud2VhdGhlci1kYXRhIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkI2NiYzljOTtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC50ZW1wZXJhdHVyZSB7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgfVxyXG4gIC8vIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemperatureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-temperature',
                templateUrl: './temperature.component.html',
                styleUrls: ['./temperature.component.scss']
            }]
    }], function () { return []; }, { weatherData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/header/header.component */ "320Y");
/* harmony import */ var _promise_promise_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./promise/promise.component */ "yAK/");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");
/* harmony import */ var _observable_observable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./observable/observable.component */ "xYnf");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/login/login.component */ "bsvf");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/signup/signup.component */ "SBxm");
/* harmony import */ var _register_task_register_task_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register-task/register-task.component */ "8+r2");
/* harmony import */ var _worksheet_task_worksheet_task_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./worksheet-task/worksheet-task.component */ "1eTX");
/* harmony import */ var _worksheet_worksheet_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./worksheet/worksheet.component */ "suXe");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-list/user-list.component */ "UMdc");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-user/add-user.component */ "9DFq");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _New_Task_Component_add_user_list_add_user_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./New-Task-Component/add-user-list/add-user-list.component */ "8vV2");
/* harmony import */ var _New_Task_Component_user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./New-Task-Component/user-lists/user-lists.component */ "tR8r");
/* harmony import */ var _New_Task_Component_view_zone_list_view_zone_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./New-Task-Component/view-zone-list/view-zone-list.component */ "lbPx");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./filter.pipe */ "i6q1");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _UserAuth_user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./UserAuth/user-signup/user-signup.component */ "rGRD");
/* harmony import */ var _UserAuth_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./UserAuth/user-login/user-login.component */ "vTBl");
/* harmony import */ var _authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./authGuard/auth.guard */ "CG1p");
/* harmony import */ var _practice_temperature_temperature_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./practice/temperature/temperature.component */ "X3+m");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-echarts */ "DKVz");
/* harmony import */ var _practice_chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./practice/chartjs/chartjs.component */ "ZoSP");


































// import { NgSelectModule } from "@ng-select/ng-select";
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_23__["GoogleLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_23__["GoogleLoginProvider"](
                        // '1016994148249-cvijokf575kprvsj6899n1ms5a213uu4.apps.googleusercontent.com' //stack
                        // '50058279728-v41t0ssdg5potbruufdmh1svalg9o3oq.apps.googleusercontent.com' //old
                        '683195763952-m83jicm4l9vamgdvtq3spu9mi4n2557t.apps.googleusercontent.com' //new manish
                        )
                    },
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_23__["FacebookLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_23__["FacebookLoginProvider"]('282577308941815')
                    }
                ],
                onError: (err) => {
                    console.error(err);
                }
            },
        },
        [_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]]
        // {provide:HTTP_INTERCEPTORS,useClass:HttpErrorInterceptor}
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_16__["NgxPaginationModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_18__["ToastrModule"].forRoot({
                positionClass: 'toast-top-right',
                maxOpened: 1,
                preventDuplicates: true,
            }),
            angularx_social_login__WEBPACK_IMPORTED_MODULE_23__["SocialLoginModule"],
            ngx_echarts__WEBPACK_IMPORTED_MODULE_28__["NgxEchartsModule"].forRoot({
                /**
                 * This will import all modules from echarts.
                 * If you only need custom modules,
                 * please refer to [Custom Build] section.
                 */
                echarts: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! echarts */ "MT78")),
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _promise_promise_component__WEBPACK_IMPORTED_MODULE_6__["PromiseComponent"],
        _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _observable_observable_component__WEBPACK_IMPORTED_MODULE_8__["ObservableComponent"],
        _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
        _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
        _register_task_register_task_component__WEBPACK_IMPORTED_MODULE_12__["RegisterTaskComponent"],
        _worksheet_task_worksheet_task_component__WEBPACK_IMPORTED_MODULE_13__["WorksheetTaskComponent"],
        _worksheet_worksheet_component__WEBPACK_IMPORTED_MODULE_14__["WorksheetComponent"],
        _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_15__["UserListComponent"],
        _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_17__["AddUserComponent"],
        _New_Task_Component_add_user_list_add_user_list_component__WEBPACK_IMPORTED_MODULE_19__["AddUserListComponent"],
        _New_Task_Component_user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_20__["UserListsComponent"],
        _New_Task_Component_view_zone_list_view_zone_list_component__WEBPACK_IMPORTED_MODULE_21__["ViewZoneListComponent"],
        _filter_pipe__WEBPACK_IMPORTED_MODULE_22__["FilterPipe"],
        _UserAuth_user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_24__["UserSignupComponent"],
        _UserAuth_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_25__["UserLoginComponent"],
        _practice_temperature_temperature_component__WEBPACK_IMPORTED_MODULE_27__["TemperatureComponent"],
        _practice_chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_29__["ChartjsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_16__["NgxPaginationModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_18__["ToastrModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_23__["SocialLoginModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_28__["NgxEchartsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _shared_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _promise_promise_component__WEBPACK_IMPORTED_MODULE_6__["PromiseComponent"],
                    _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _observable_observable_component__WEBPACK_IMPORTED_MODULE_8__["ObservableComponent"],
                    _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                    _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__["SignupComponent"],
                    _register_task_register_task_component__WEBPACK_IMPORTED_MODULE_12__["RegisterTaskComponent"],
                    _worksheet_task_worksheet_task_component__WEBPACK_IMPORTED_MODULE_13__["WorksheetTaskComponent"],
                    _worksheet_worksheet_component__WEBPACK_IMPORTED_MODULE_14__["WorksheetComponent"],
                    _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_15__["UserListComponent"],
                    _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_17__["AddUserComponent"],
                    _New_Task_Component_add_user_list_add_user_list_component__WEBPACK_IMPORTED_MODULE_19__["AddUserListComponent"],
                    _New_Task_Component_user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_20__["UserListsComponent"],
                    _New_Task_Component_view_zone_list_view_zone_list_component__WEBPACK_IMPORTED_MODULE_21__["ViewZoneListComponent"],
                    _filter_pipe__WEBPACK_IMPORTED_MODULE_22__["FilterPipe"],
                    _UserAuth_user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_24__["UserSignupComponent"],
                    _UserAuth_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_25__["UserLoginComponent"],
                    _practice_temperature_temperature_component__WEBPACK_IMPORTED_MODULE_27__["TemperatureComponent"],
                    _practice_chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_29__["ChartjsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_16__["NgxPaginationModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_18__["ToastrModule"].forRoot({
                        positionClass: 'toast-top-right',
                        maxOpened: 1,
                        preventDuplicates: true,
                    }),
                    angularx_social_login__WEBPACK_IMPORTED_MODULE_23__["SocialLoginModule"],
                    ngx_echarts__WEBPACK_IMPORTED_MODULE_28__["NgxEchartsModule"].forRoot({
                        /**
                         * This will import all modules from echarts.
                         * If you only need custom modules,
                         * please refer to [Custom Build] section.
                         */
                        echarts: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! echarts */ "MT78")),
                    }),
                ],
                providers: [
                    {
                        provide: 'SocialAuthServiceConfig',
                        useValue: {
                            autoLogin: false,
                            providers: [
                                {
                                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_23__["GoogleLoginProvider"].PROVIDER_ID,
                                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_23__["GoogleLoginProvider"](
                                    // '1016994148249-cvijokf575kprvsj6899n1ms5a213uu4.apps.googleusercontent.com' //stack
                                    // '50058279728-v41t0ssdg5potbruufdmh1svalg9o3oq.apps.googleusercontent.com' //old
                                    '683195763952-m83jicm4l9vamgdvtq3spu9mi4n2557t.apps.googleusercontent.com' //new manish
                                    )
                                },
                                {
                                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_23__["FacebookLoginProvider"].PROVIDER_ID,
                                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_23__["FacebookLoginProvider"]('282577308941815')
                                }
                            ],
                            onError: (err) => {
                                console.error(err);
                            }
                        },
                    },
                    [_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]]
                    // {provide:HTTP_INTERCEPTORS,useClass:HttpErrorInterceptor}
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZoSP":
/*!*******************************************************!*\
  !*** ./src/app/practice/chartjs/chartjs.component.ts ***!
  \*******************************************************/
/*! exports provided: ChartjsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartjsComponent", function() { return ChartjsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts */ "MT78");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/header/header.component */ "320Y");




class ChartjsComponent {
    constructor() {
        this.option = {
            series: [
                {
                    name: 'hour',
                    type: 'gauge',
                    startAngle: 90,
                    endAngle: -270,
                    min: 0,
                    max: 12,
                    splitNumber: 12,
                    clockwise: true,
                    axisLine: {
                        lineStyle: {
                            width: 15,
                            color: [[1, 'rgba(0,0,0,0.7)']],
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            shadowBlur: 15
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            shadowColor: 'rgba(0, 0, 0, 0.3)',
                            shadowBlur: 3,
                            shadowOffsetX: 1,
                            shadowOffsetY: 2
                        }
                    },
                    axisLabel: {
                        fontSize: 50,
                        distance: 25,
                        formatter: function (value) {
                            if (value === 0) {
                                return '';
                            }
                            return value + '';
                        }
                    },
                    anchor: {
                        show: true,
                        icon: 'path://M532.8,70.8C532.8,70.8,532.8,70.8,532.8,70.8L532.8,70.8C532.7,70.8,532.8,70.8,532.8,70.8z M456.1,49.6c-2.2-6.2-8.1-10.6-15-10.6h-37.5v10.6h37.5l0,0c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3v0h-22.5c-1.5,0.1-3,0.4-4.3,0.9c-4.5,1.6-8.1,5.2-9.7,9.8c-0.6,1.7-0.9,3.4-0.9,5.3v16h10.6v-16l0,0l0,0c0-2.7,2.1-5,4.7-5.3h10.3l10.4,21.2h11.8l-10.4-21.2h0c6.9,0,12.8-4.4,15-10.6c0.6-1.7,0.9-3.5,0.9-5.3C457,53,456.7,51.2,456.1,49.6z M388.9,92.1h11.3L381,39h-3.6h-11.3L346.8,92v0h11.3l3.9-10.7h7.3h7.7l3.9-10.6h-7.7h-7.3l7.7-21.2v0L388.9,92.1z M301,38.9h-10.6v53.1H301V70.8h28.4l3.7-10.6H301V38.9zM333.2,38.9v10.6v10.7v31.9h10.6V38.9H333.2z M249.5,81.4L249.5,81.4L249.5,81.4c-2.9,0-5.3-2.4-5.3-5.3h0V54.9h0l0,0c0-2.9,2.4-5.3,5.3-5.3l0,0l0,0h33.6l3.9-10.6h-37.5c-1.9,0-3.6,0.3-5.3,0.9c-4.5,1.6-8.1,5.2-9.7,9.7c-0.6,1.7-0.9,3.5-0.9,5.3l0,0v21.3c0,1.9,0.3,3.6,0.9,5.3c1.6,4.5,5.2,8.1,9.7,9.7c1.7,0.6,3.5,0.9,5.3,0.9h33.6l3.9-10.6H249.5z M176.8,38.9v10.6h49.6l3.9-10.6H176.8z M192.7,81.4L192.7,81.4L192.7,81.4c-2.9,0-5.3-2.4-5.3-5.3l0,0v-5.3h38.9l3.9-10.6h-53.4v10.6v5.3l0,0c0,1.9,0.3,3.6,0.9,5.3c1.6,4.5,5.2,8.1,9.7,9.7c1.7,0.6,3.4,0.9,5.3,0.9h23.4h10.2l3.9-10.6l0,0H192.7z M460.1,38.9v10.6h21.4v42.5h10.6V49.6h17.5l3.8-10.6H460.1z M541.6,68.2c-0.2,0.1-0.4,0.3-0.7,0.4C541.1,68.4,541.4,68.3,541.6,68.2L541.6,68.2z M554.3,60.2h-21.6v0l0,0c-2.9,0-5.3-2.4-5.3-5.3c0-2.9,2.4-5.3,5.3-5.3l0,0l0,0h33.6l3.8-10.6h-37.5l0,0c-6.9,0-12.8,4.4-15,10.6c-0.6,1.7-0.9,3.5-0.9,5.3c0,1.9,0.3,3.7,0.9,5.3c2.2,6.2,8.1,10.6,15,10.6h21.6l0,0c2.9,0,5.3,2.4,5.3,5.3c0,2.9-2.4,5.3-5.3,5.3l0,0h-37.5v10.6h37.5c6.9,0,12.8-4.4,15-10.6c0.6-1.7,0.9-3.5,0.9-5.3c0-1.9-0.3-3.7-0.9-5.3C567.2,64.6,561.3,60.2,554.3,60.2z',
                        showAbove: false,
                        offsetCenter: [0, '-35%'],
                        size: 120,
                        keepAspect: true,
                        itemStyle: {
                            color: '#707177'
                        }
                    },
                    pointer: {
                        icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                        width: 12,
                        length: '55%',
                        offsetCenter: [0, '8%'],
                        itemStyle: {
                            color: '#C0911F',
                            shadowColor: 'rgba(0, 0, 0, 0.3)',
                            shadowBlur: 8,
                            shadowOffsetX: 2,
                            shadowOffsetY: 4
                        }
                    },
                    detail: {
                        show: false
                    },
                    title: {
                        offsetCenter: [0, '30%']
                    },
                    data: [
                        {
                            value: 0
                        }
                    ]
                },
                {
                    name: 'minute',
                    type: 'gauge',
                    startAngle: 90,
                    endAngle: -270,
                    min: 0,
                    max: 60,
                    clockwise: true,
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    pointer: {
                        icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                        width: 8,
                        length: '70%',
                        offsetCenter: [0, '8%'],
                        itemStyle: {
                            color: '#C0911F',
                            shadowColor: 'rgba(0, 0, 0, 0.3)',
                            shadowBlur: 8,
                            shadowOffsetX: 2,
                            shadowOffsetY: 4
                        }
                    },
                    anchor: {
                        show: true,
                        size: 20,
                        showAbove: false,
                        itemStyle: {
                            borderWidth: 15,
                            borderColor: '#C0911F',
                            shadowColor: 'rgba(0, 0, 0, 0.3)',
                            shadowBlur: 8,
                            shadowOffsetX: 2,
                            shadowOffsetY: 4
                        }
                    },
                    detail: {
                        show: false
                    },
                    title: {
                        offsetCenter: ['0%', '-40%']
                    },
                    data: [
                        {
                            value: 0
                        }
                    ]
                },
                {
                    name: 'second',
                    type: 'gauge',
                    startAngle: 90,
                    endAngle: -270,
                    min: 0,
                    max: 60,
                    animationEasingUpdate: 'bounceOut',
                    clockwise: true,
                    axisLine: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    pointer: {
                        icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
                        width: 4,
                        length: '85%',
                        offsetCenter: [0, '8%'],
                        itemStyle: {
                            color: '#C0911F',
                            shadowColor: 'rgba(0, 0, 0, 0.3)',
                            shadowBlur: 8,
                            shadowOffsetX: 2,
                            shadowOffsetY: 4
                        }
                    },
                    anchor: {
                        show: true,
                        size: 15,
                        showAbove: true,
                        itemStyle: {
                            color: '#C0911F',
                            shadowColor: 'rgba(0, 0, 0, 0.3)',
                            shadowBlur: 8,
                            shadowOffsetX: 2,
                            shadowOffsetY: 4
                        }
                    },
                    detail: {
                        show: false
                    },
                    title: {
                        offsetCenter: ['0%', '-40%']
                    },
                    data: [
                        {
                            value: 0
                        }
                    ]
                }
            ]
        };
    }
    ngOnInit() {
        var chartDom = document.getElementById('main');
        var myChart = echarts__WEBPACK_IMPORTED_MODULE_1__["init"](chartDom);
        // var option: EChartsOption;
        setInterval(function () {
            var date = new Date();
            var second = date.getSeconds();
            var minute = date.getMinutes() + second / 60;
            var hour = (date.getHours() % 12) + minute / 60;
            // this.option.animationDurationUpdate = 300;
            myChart.setOption({
                series: [
                    {
                        name: 'hour',
                        animation: hour !== 0,
                        data: [{ value: hour }]
                    },
                    {
                        name: 'minute',
                        animation: minute !== 0,
                        data: [{ value: minute }]
                    },
                    {
                        animation: second !== 0,
                        name: 'second',
                        data: [{ value: second }]
                    }
                ]
            });
        }, 1000);
        this.option && myChart.setOption(this.option);
        // alert(this.option.toString())
    }
}
ChartjsComponent.ɵfac = function ChartjsComponent_Factory(t) { return new (t || ChartjsComponent)(); };
ChartjsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartjsComponent, selectors: [["app-chartjs"]], decls: 2, vars: 0, consts: [["id", "main", 1, "demo-chart", "mt-4"]], template: function ChartjsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]], styles: [".demo-chart[_ngcontent-%COMP%] {\n  height: 700px;\n  width: 720px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJhY3RpY2UvY2hhcnRqcy9jaGFydGpzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3ByYWN0aWNlL2NoYXJ0anMvY2hhcnRqcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZW1vLWNoYXJ0e1xyXG4gICAgaGVpZ2h0OiA3MDBweDtcclxuICAgIHdpZHRoOiA3MjBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartjsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chartjs',
                templateUrl: './chartjs.component.html',
                styleUrls: ['./chartjs.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bsvf":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_provider_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/provider/auth-service.service */ "tGZc");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/header/header.component */ "320Y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/footer/footer.component */ "jQpT");












function LoginComponent_small_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *Please enter valid email address.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Email address is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_small_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*Password is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.user.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.user.email);
} }
class LoginComponent {
    constructor(socialAuth, router, http, authService) {
        this.socialAuth = socialAuth;
        this.router = router;
        this.http = http;
        this.authService = authService;
        this.visible = false;
        this.changetype = true;
    }
    viewpass() {
        this.visible = !this.visible;
        this.changetype = !this.changetype;
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,5}')]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    loginWithGoggle() {
        this.socialAuth.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID);
        this.socialAuth.authState.subscribe((user) => {
            console.log(user);
            this.user = user;
            console.log(this.user);
        });
    }
    OnSubmit() {
        // this.router.navigate(['/worksheet'])
        //   const user =this.userAuth(this.loginForm.value)
        //   if(user){
        //     alert('Login successfully')
        //     this.router.navigateByUrl('promise')
        //   }
        //   else{
        //     alert('Incorrect login credintial')
        //   }
        // }
        // userAuth(user:any){
        //   let userArray =[]
        //   if(localStorage.getItem('User')){
        //     userArray=JSON.parse(localStorage.getItem('User'))
        //     return userArray.find(p=>p.email === user.email && p.password === user.password)
        //   }
        let dataApi = {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password
        };
        console.log(dataApi);
        this.authService.postApi('login', dataApi, 0).subscribe(res => {
            if (res['reponseCode'] == 200) {
                this.authService.successToast(res['responseMessage']);
                // localStorage.setItem('token', res['result']['token'])
                this.router.navigate(['/user-list'], { skipLocationChange: true });
            }
            else {
                this.authService.errorToast(res['responseMessage']);
            }
        }, err => {
            this.authService.errorToast(err['responseMessage']);
        });
        // let url='https://onjyb.dss.gos.mybluehostin.me/api/User_Controller/login'
        // this.http.post(`${url}?txtEmail=jignesh@etechmavens.com+txtPassword=a`,dataApi).subscribe(res=>{
        //   this.router.navigate( ['/worksheet'], {queryParams: { txtEmail:"jignesh@etechmavens.com",txtPassword:"a"
        // }});    
        // })
    }
    logOut() {
        this.socialAuth.signOut();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_provider_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthServiceService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 44, vars: 8, consts: [[1, "container"], [1, "row", "mt-3"], [1, "col-md-3"], [1, "echart"], ["routerLink", "/echart", 1, "btn", "btn-primary"], [1, "row"], ["action", "", 3, "formGroup"], [1, "card-title", "text-center"], [1, "col-md-12", "mt-4", "text-center"], ["type", "email", "placeholder", "enter your email", "formControlName", "email", "maxlength", "120", 1, "form-control"], ["class", " text-danger", 4, "ngIf"], ["class", "text-danger", 4, "ngIf"], ["type", "password", "placeholder", "enter your Password", "formControlName", "password", "maxlength", "16", 1, "form-control", 3, "type"], [1, "eyeicon", 3, "click"], [3, "ngClass"], [1, "col-md-12", "text-center", "d-flex", 2, "justify-content", "center"], [1, "btn", "btn-sm", "btn-primary", 3, "disabled", "click"], ["routerLink", "/register-task", 1, "mt-3", "register"], ["class", "card text-center", 4, "ngIf"], [3, "click"], [1, "text-danger"], [1, "card", "text-center"], [1, "card-title"], [1, "img-fluid"], ["alt", "", 3, "src"], [1, "email"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "echats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "echats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "echats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "echats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Welcome to Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, LoginComponent_small_25_Template, 2, 0, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LoginComponent_small_26_Template, 2, 0, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_29_listener() { return ctx.viewpass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, LoginComponent_small_31_Template, 2, 0, "small", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_33_listener() { return ctx.OnSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, LoginComponent_div_37_Template, 7, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_38_listener() { return ctx.loginWithGoggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Google Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_40_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "logOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "app-footer");
    } if (rf & 2) {
        var tmp_1_0 = null;
        var tmp_2_0 = null;
        var tmp_5_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.hasError("pattern")) && ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.dirty));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.hasError("required")) && ((tmp_2_0 = ctx.loginForm.get("email")) == null ? null : tmp_2_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.changetype ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.visible ? "fa-solid fa-eye" : "fa-solid fa-eye-slash");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.loginForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.background[_ngcontent-%COMP%] {\n  width: 430px;\n  height: 520px;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  top: 50%;\n}\n\n.background[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.shape[_ngcontent-%COMP%]:first-child {\n  background: linear-gradient(#1845ad, #23a2f6);\n  left: -80px;\n  top: -80px;\n}\n\n.shape[_ngcontent-%COMP%]:last-child {\n  background: linear-gradient(to right, #ff512f, #f09819);\n  right: -30px;\n  bottom: -80px;\n}\n\nform[_ngcontent-%COMP%] {\n  height: 420px;\n  width: 400px;\n  background-color: rgba(255, 255, 255, 0.13);\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 50%;\n  border-radius: 10px;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border: 2px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);\n  padding: 50px 35px;\n}\n\nform[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  color: #273ab8;\n  letter-spacing: 0.5px;\n  outline: none;\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 500;\n  line-height: 42px;\n  text-align: center;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 30px;\n  font-size: 16px;\n  font-weight: 500;\n}\n\ninput[_ngcontent-%COMP%] {\n  display: block;\n  height: 55px;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.07);\n  border-radius: 3px;\n  padding: 0 10px;\n  margin-top: 8px;\n  font-size: 14px;\n  font-weight: 300;\n  border: 1px solid black !important;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #3c2929;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  width: 100%;\n  background-color: #2a185e;\n  color: #fcfcfe !important;\n  padding: 15px 0;\n  font-size: 18px;\n  font-weight: 600;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  color: blue;\n  font-size: 20px;\n  font-weight: bold;\n  margin-top: -20px;\n}\n\n.eyeicon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  margin-top: -39px;\n  \n  margin-left: 120px;\n}\n\n.fa-eye-slash[_ngcontent-%COMP%]:before {\n  color: black !important;\n}\n\n.fa-eye[_ngcontent-%COMP%]:before {\n  color: black !important;\n}\n\n.register[_ngcontent-%COMP%] {\n  width: 85px;\n  font-size: medium;\n  font-weight: bold;\n  cursor: pointer;\n  border-radius: 10%;\n  color: white !important;\n  background-color: #273ab8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQUE7QUFBSjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLDZDQUFBO0VBRUEsV0FBQTtFQUNBLFVBQUE7QUFESjs7QUFJQTtFQUNJLHVEQUFBO0VBR0EsWUFBQTtFQUNBLGFBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSwwQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFNQTtFQUNJLGtDQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFISjs7QUFNQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFNQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU1BO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFISjs7QUFNQTtFQUNJLGNBQUE7QUFISjs7QUFNQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSEo7O0FBTUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFNQTtFQUlJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQU5KOztBQVNBO0VBQ0ksdUJBQUE7QUFOSjs7QUFTQTtFQUNJLHVCQUFBO0FBTko7O0FBU0E7RUFDSSxXQUFBO0VBRUEsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVBKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzA4MDcxMCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmJhY2tncm91bmQge1xyXG4gICAgd2lkdGg6IDQzMHB4O1xyXG4gICAgaGVpZ2h0OiA1MjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kIC5zaGFwZSB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uc2hhcGU6Zmlyc3QtY2hpbGQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMxODQ1YWQsXHJcbiAgICAgICAgICAgICMyM2EyZjYpO1xyXG4gICAgbGVmdDogLTgwcHg7XHJcbiAgICB0b3A6IC04MHB4O1xyXG59XHJcblxyXG4uc2hhcGU6bGFzdC1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsXHJcbiAgICAgICAgICAgICNmZjUxMmYsXHJcbiAgICAgICAgICAgICNmMDk4MTkpO1xyXG4gICAgcmlnaHQ6IC0zMHB4O1xyXG4gICAgYm90dG9tOiAtODBweDtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICBoZWlnaHQ6IDQyMHB4O1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggcmdiYSg4LCA3LCAxNiwgMC42KTtcclxuICAgIHBhZGRpbmc6IDUwcHggMzVweDtcclxufVxyXG5cclxuZm9ybSAqIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzI3M2FiODtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmZvcm0gaDMge1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjM2MyOTI5O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhMTg1ZTtcclxuICAgIGNvbG9yOiAjZmNmY2ZlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbn1cclxuXHJcbi5leWVpY29uIHtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIHJpZ2h0OiAyNSU7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAxMXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLXRvcDogLTM5cHg7XHJcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IC00OHB4OyAqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xyXG59XHJcblxyXG4uZmEtZXllLXNsYXNoOmJlZm9yZSB7XHJcbiAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZhLWV5ZTpiZWZvcmUge1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZWdpc3RlciB7XHJcbiAgICB3aWR0aDogODVweDtcclxuICAgIC8vIGhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzNhYjg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialAuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: src_app_provider_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["AuthServiceService"] }]; }, null); })();


/***/ }),

/***/ "i6q1":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilterPipe {
    transform(value, searchValue) {
        if (!searchValue)
            return value;
        return value.filter((v) => v.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 || v.size.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter'
            }]
    }], null, null); })();


/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 6, vars: 0, consts: [[1, "bg-light", "text-center", "text-lg-start", "footer", 2, "margin-top", "230px"], [1, "text-center", "p-3", 2, "background-color", "#1976d2"], ["target", "_blank", "href", "https://www.linkedin.com/in/mpandeyji/", 1, "text-light"], [1, "fa", "fa-heart"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Designed by 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "23 Manish Pandey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".fa-heart[_ngcontent-%COMP%] {\n  color: red;\n}\n\n@media (max-width: 480px) {\n  .footer[_ngcontent-%COMP%] {\n    margin-top: 10px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FBQ0o7O0FBQ0E7RUFDSTtJQUNJLDJCQUFBO0VBRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLWhlYXJ0e1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjQ4MHB4KXtcclxuICAgIC5mb290ZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lbPx":
/*!*******************************************************************************!*\
  !*** ./src/app/New-Task-Component/view-zone-list/view-zone-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ViewZoneListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewZoneListComponent", function() { return ViewZoneListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");








function ViewZoneListComponent_small_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*zone name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewZoneListComponent_small_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*country is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewZoneListComponent_small_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*status is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewZoneListComponent_small_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*status is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewZoneListComponent_small_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*description id is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ViewZoneListComponent {
    constructor(http) {
        this.http = http;
        this.getData = [];
    }
    ngOnInit() {
        this.editUser("_id");
        this.registerTaskForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            zone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            desciption: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    // https://ats.hiromation.com:5126/zone/getById/{id}/132  
    editUser(_id) {
        // alert(_id)
        // this.u_id=_id;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Authorization': 'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6IjcxIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJkZWZhdWx0bG9naW5icmFuY2giOjEsImlzcyI6InN5c3RlbSIsImlhdCI6MTY3NjAyMzA2MywiZXhwIjoxNjc2MDQxMDYzfQ.GhEpP4ShEfXPFfJkQXwAZudrd9A05ihf0XsBROievjM', "Content-Type": "application/json", "moduleId": '132' });
        this.http.get('https://ats.hiromation.com:5126/zone/getById/%7Bid%7D/132', { headers }).subscribe(res => {
            this.getData = res;
            console.log(this.getData);
            this.registerTaskForm.patchValue({
                id: this.getData.id,
                name: this.getData.name,
                email: this.getData.email,
                gender: this.getData.gender,
                status: this.getData.status
            });
        });
        // this._id = _id;
        // this._id=_id
    }
}
ViewZoneListComponent.ɵfac = function ViewZoneListComponent_Factory(t) { return new (t || ViewZoneListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ViewZoneListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewZoneListComponent, selectors: [["app-view-zone-list"]], decls: 49, vars: 7, consts: [[1, "newcontainer"], [1, "row", 2, "margin-top", "70px", "width", "400px", "height", "450px"], [1, "card", "p-4"], [1, "text-center", "reg-user"], ["action", "", 2, "overflow-y", "scroll", 3, "formGroup"], [1, "col-md-12", "mt-2"], ["for", "", 1, "text-start"], ["type", "text", "placeholder", "enter your zone name", "formControlName", "zone", "maxlength", "120", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["value", "", "selected", ""], [1, "row"], ["name", "", "id", "", "formControlName", "state", 1, "form-control"], ["value", "inactive"], ["name", "", "id", "", "formControlName", "status", 1, "form-control"], ["value", "active"], ["type", "text", "placeholder", "enter your desciption", "formControlName", "desctiption", "maxlength", "120", 1, "form-control"], [1, "modal-footer", "justify-content-start", "mt-4"], ["type", "button", "data-bs-dismiss", "modal", "routerLink", "/zone-list", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary", 2, "margin-left", "20px", 3, "disabled"], [1, "text-danger"]], template: function ViewZoneListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit Zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Zone Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ViewZoneListComponent_small_10_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Select your Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ViewZoneListComponent_small_16_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Select State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ViewZoneListComponent_small_26_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Select State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ViewZoneListComponent_small_38_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ViewZoneListComponent_small_43_Template, 2, 0, "small", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_1_0 = null;
        var tmp_2_0 = null;
        var tmp_3_0 = null;
        var tmp_4_0 = null;
        var tmp_5_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerTaskForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.registerTaskForm.get("zone")) == null ? null : tmp_1_0.hasError("required")) && ((tmp_1_0 = ctx.registerTaskForm.get("zone")) == null ? null : tmp_1_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.registerTaskForm.get("country")) == null ? null : tmp_2_0.hasError("required")) && ((tmp_2_0 = ctx.registerTaskForm.get("country")) == null ? null : tmp_2_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.registerTaskForm.get("state")) == null ? null : tmp_3_0.hasError("required")) && ((tmp_3_0 = ctx.registerTaskForm.get("state")) == null ? null : tmp_3_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.registerTaskForm.get("status")) == null ? null : tmp_4_0.hasError("required")) && ((tmp_4_0 = ctx.registerTaskForm.get("status")) == null ? null : tmp_4_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.registerTaskForm.get("desciption")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx.registerTaskForm.get("desciption")) == null ? null : tmp_5_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.registerTaskForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".container[_ngcontent-%COMP%] {\n  background-color: #080710 !important;\n}\n\n.background[_ngcontent-%COMP%] {\n  width: 430px;\n  height: 520px;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  top: 50%;\n}\n\n.background[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.shape[_ngcontent-%COMP%]:first-child {\n  background: linear-gradient(#1845ad, #23a2f6);\n  left: -80px;\n  top: -80px;\n}\n\n.shape[_ngcontent-%COMP%]:last-child {\n  background: linear-gradient(to right, #ff512f, #f09819);\n  right: -30px;\n  bottom: -80px;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #3c2929;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  color: blue;\n  font-size: 20px;\n  font-weight: bold;\n  margin-top: -20px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.register[_ngcontent-%COMP%] {\n  width: 85px;\n  font-size: medium;\n  font-weight: bold;\n  cursor: pointer;\n  border-radius: 10%;\n  color: white !important;\n  background-color: #273ab8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nsmall[_ngcontent-%COMP%] {\n  text-align: start;\n  display: flex;\n}\n\n.task[_ngcontent-%COMP%] {\n  background-color: #154615;\n  color: white;\n  cursor: pointer;\n}\n\n.task[_ngcontent-%COMP%]:hover {\n  background: blue;\n}\n\n.addUser[_ngcontent-%COMP%]:hover {\n  color: blue !important;\n  cursor: pointer;\n}\n\n.newcontainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.reg-user[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 22px;\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTmV3LVRhc2stQ29tcG9uZW50L3ZpZXctem9uZS1saXN0L3ZpZXctem9uZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7QUFDSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFEQTtFQUNJLDZDQUFBO0VBSUEsV0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFDQTtFQUNJLHVEQUFBO0VBS0EsWUFBQTtFQUNBLGFBQUE7QUFGSjs7QUFrREE7RUFDSSxjQUFBO0FBL0NKOztBQTREQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQXpESjs7QUEyREE7RUFDSSxhQUFBO0FBeERKOztBQTJEQTtFQUNJLFdBQUE7RUFFQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBekRKOztBQTJEQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtBQXhESjs7QUEyREE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBeERKOztBQTBEQTtFQUNJLGdCQUFBO0FBdkRKOztBQXlEQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQXREQTs7QUF3REE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXJESjs7QUF1REE7RUFDSSxpQkFBQTtFQUFtQixlQUFBO0VBQWdCLFdBQUE7QUFsRHZDIiwiZmlsZSI6InNyYy9hcHAvTmV3LVRhc2stQ29tcG9uZW50L3ZpZXctem9uZS1saXN0L3ZpZXctem9uZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODA3MTAgIWltcG9ydGFudDtcclxufVxyXG4uYmFja2dyb3VuZHtcclxuICAgIHdpZHRoOiA0MzBweDtcclxuICAgIGhlaWdodDogNTIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbn1cclxuLmJhY2tncm91bmQgLnNoYXBle1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uc2hhcGU6Zmlyc3QtY2hpbGR7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgIzE4NDVhZCxcclxuICAgICAgICAjMjNhMmY2XHJcbiAgICApO1xyXG4gICAgbGVmdDogLTgwcHg7XHJcbiAgICB0b3A6IC04MHB4O1xyXG59XHJcbi5zaGFwZTpsYXN0LWNoaWxke1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICAgICNmZjUxMmYsXHJcbiAgICAgICAgI2YwOTgxOVxyXG4gICAgKTtcclxuICAgIHJpZ2h0OiAtMzBweDtcclxuICAgIGJvdHRvbTogLTgwcHg7XHJcbn1cclxuLy8gZm9ybXtcclxuLy8gICAgIGhlaWdodDogNTAwcHg7XHJcbi8vICAgICB3aWR0aDogMTAwMHB4O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjEzKTtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbi8vICAgICB0b3A6IDUwJTtcclxuLy8gICAgIGxlZnQ6IDUwJTtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbi8vICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XHJcbi8vICAgICBib3gtc2hhZG93OiAwIDAgNDBweCByZ2JhKDgsNywxNiwwLjYpO1xyXG4vLyAgICAgcGFkZGluZzogNTBweCAzNXB4O1xyXG4vLyB9XHJcbi8vIGZvcm0gKntcclxuLy8gICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsc2Fucy1zZXJpZjtcclxuLy8gICAgIGNvbG9yOiAjMjczYWI4O1xyXG4vLyAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4vLyAgICAgb3V0bGluZTogbm9uZTtcclxuLy8gICAgIGJvcmRlcjogbm9uZTtcclxuLy8gfVxyXG4vLyBmb3JtIGgze1xyXG4vLyAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB9XHJcblxyXG4vLyBsYWJlbHtcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbi8vIH1cclxuLy8gaW5wdXQsc2VsZWN0e1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNyk7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbi8vICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbi8vICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbi8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgICBmb250LXdlaWdodDogMzAwO1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcclxuLy8gfVxyXG46OnBsYWNlaG9sZGVye1xyXG4gICAgY29sb3I6ICMzYzI5Mjk7XHJcbn1cclxuLy8gYnV0dG9ue1xyXG4vLyAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJhMTg1ZTtcclxuLy8gICAgIGNvbG9yOiAjZmNmY2ZlICFpbXBvcnRhbnQ7XHJcbi8vICAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbi8vICAgICBmb250LXNpemU6IDE4cHg7XHJcbi8vICAgICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyB9XHJcbi5jYXJkLXRpdGxle1xyXG4gICAgY29sb3I6IGJsdWU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ucmVnaXN0ZXIge1xyXG4gICAgd2lkdGg6IDg1cHg7XHJcbiAgICAvLyBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjczYWI4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5zbWFsbHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbn1cclxuLnRhc2t7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEsIDcwLCAyMSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnRhc2s6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xyXG59XHJcbi5hZGRVc2VyOmhvdmVye1xyXG5jb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm5ld2NvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnJlZy11c2Vye1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogMjJweDtjb2xvcjogYmx1ZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewZoneListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-zone-list',
                templateUrl: './view-zone-list.component.html',
                styleUrls: ['./view-zone-list.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "rGRD":
/*!***************************************************************!*\
  !*** ./src/app/UserAuth/user-signup/user-signup.component.ts ***!
  \***************************************************************/
/*! exports provided: UserSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSignupComponent", function() { return UserSignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_provider_common_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/provider/common-service.service */ "5IlR");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/header/header.component */ "320Y");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function UserSignupComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r3.iso2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.name);
} }
function UserSignupComponent_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r4.iso2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.name);
} }
function UserSignupComponent_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.name);
} }
class UserSignupComponent {
    constructor(commonService) {
        this.commonService = commonService;
        this.countryList = [];
        this.stateList = [];
        this.cityList = [];
    }
    ngOnInit() {
        this.getCountry();
    }
    getCountry() {
        this.commonService.getApi('countries', 1).subscribe(res => {
            this.countryList = res;
        });
    }
    getStateList(iso) {
        this.IsoContryCode = iso.target.value;
        // countries/IN/states/MH/cities
        this.commonService.getApi(`countries/${this.IsoContryCode}/states`, 1).subscribe(res => {
            this.stateList = res;
        });
    }
    getCityList(st) {
        this.IsoCity = st.target.value;
        console.log(this.IsoCity);
        this.commonService.getApi(`countries/${this.IsoContryCode}/states/${this.IsoCity}/cities`, 1).subscribe(res => {
            this.cityList = res;
        });
    }
}
UserSignupComponent.ɵfac = function UserSignupComponent_Factory(t) { return new (t || UserSignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_provider_common_service_service__WEBPACK_IMPORTED_MODULE_1__["CommonServiceService"])); };
UserSignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserSignupComponent, selectors: [["app-user-signup"]], decls: 24, vars: 4, consts: [[1, "containerNew"], [1, "row"], [3, "formGroup"], [1, "card"], [1, "col-md-12", "p-3"], [1, "form-control", 3, "change"], ["value", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["multiple", "", 1, "form-control", 3, "change"], ["multiple", "", 1, "form-control"], ["value", "", 4, "ngFor", "ngForOf"], ["type", "text", 1, "form-control"], [3, "value"], ["value", ""]], template: function UserSignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserSignupComponent_Template_select_change_6_listener($event) { return ctx.getStateList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "select Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserSignupComponent_option_9_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserSignupComponent_Template_select_change_11_listener($event) { return ctx.getCityList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Select State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UserSignupComponent_option_14_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Select City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UserSignupComponent_option_19_Template, 2, 1, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userSignupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stateList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cityList);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".containerNew[_ngcontent-%COMP%] {\n  margin: 120px 0px 0px 0px;\n  justify-content: center;\n  display: flex;\n}\n\n.card[_ngcontent-%COMP%] {\n  height: 60vh;\n  width: 450px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVXNlckF1dGgvdXNlci1zaWdudXAvdXNlci1zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL1VzZXJBdXRoL3VzZXItc2lnbnVwL3VzZXItc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lck5ld3tcclxuICAgIG1hcmdpbjogMTIwcHggMHB4IDBweCAwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICB3aWR0aDogNDUwcHg7XHJcblxyXG59XHJcbi5pbnB1dHtcclxuICAgIC8vIHBhZGRpbmc6IDBweCA1cHggMHB4IDVweCAhaW1wb3J0YW50O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-signup',
                templateUrl: './user-signup.component.html',
                styleUrls: ['./user-signup.component.scss']
            }]
    }], function () { return [{ type: src_app_provider_common_service_service__WEBPACK_IMPORTED_MODULE_1__["CommonServiceService"] }]; }, null); })();


/***/ }),

/***/ "suXe":
/*!**************************************************!*\
  !*** ./src/app/worksheet/worksheet.component.ts ***!
  \**************************************************/
/*! exports provided: WorksheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksheetComponent", function() { return WorksheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/header/header.component */ "320Y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/footer/footer.component */ "jQpT");





class WorksheetComponent {
    constructor() { }
    ngOnInit() {
    }
}
WorksheetComponent.ɵfac = function WorksheetComponent_Factory(t) { return new (t || WorksheetComponent)(); };
WorksheetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorksheetComponent, selectors: [["app-worksheet"]], decls: 83, vars: 0, consts: [[1, "col-lg-12", "text-right", "mt-2"], ["routerLink", "/add-product", 1, "btn", "btn-primary", "btn-theme"], [1, "col-lg-12", "mt-3"], [1, "table-responsive-md", "sortable"], [1, "table", "table-bordered", 2, "border", "1px solid #dee2e6"], ["scope", "col"], ["scope", "row"], ["routerLink", "/register-task", 1, "task"]], template: function WorksheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Work Sheet List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "company_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "user_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "role_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "project_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "service_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "branch_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "work_date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "totol_time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "work_hour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "break_time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "16/01/2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Hii");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Create task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "17/01/2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "45");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "app-footer");
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".position-relative[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -15px;\n  bottom: 12px;\n}\n\n.d-none[_ngcontent-%COMP%] {\n  display: none;\n}\n\ninput[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  background: transparent;\n  bottom: 0;\n  color: transparent;\n  cursor: pointer;\n  height: auto;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: auto;\n}\n\n.btn-theme[_ngcontent-%COMP%] {\n  background: #7cb73f !important;\n  border-color: #7cb73f !important;\n}\n\n.w-40[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.w-10[_ngcontent-%COMP%] {\n  width: 10%;\n}\n\n.inputDate[_ngcontent-%COMP%] {\n  min-width: 160px;\n}\n\nthead[_ngcontent-%COMP%] {\n  background: #7cb740;\n}\n\nthead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  color: black;\n}\n\na[_ngcontent-%COMP%] {\n  color: #7cb740 !important;\n  margin-left: 15px !important;\n  text-decoration: underline !important;\n  font-size: small;\n}\n\n.table-bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border: 0px solid #000000 !important;\n}\n\ninput.form-control[_ngcontent-%COMP%], input.form-control[_ngcontent-%COMP%]:focus {\n  background: transparent;\n  color: blue;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.cancle-delete-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.modal-data[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 150.5%;\n  \n  font-feature-settings: \"tnum\" on, \"lnum\" on;\n  color: #FFFFFF;\n}\n\n.main-modal[_ngcontent-%COMP%] {\n  background: #1F1C1C;\n  border: 2px solid #7cb740;\n}\n\n.btn-cancle[_ngcontent-%COMP%] {\n  background: #7CB93E;\n  color: white;\n  padding: 8px 67px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n}\n\n.btn-add[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #7CB93E;\n  border: 1px solid #7CB93E;\n  padding: 8px 67px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n}\n\n.task[_ngcontent-%COMP%] {\n  background-color: #d3d7ce;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya3NoZWV0L3dvcmtzaGVldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLDhCQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7QUFFSjs7QUFBQTtFQUNJLFVBQUE7QUFHSjs7QUFEQTtFQUNJLGdCQUFBO0FBSUo7O0FBRkE7RUFDSSxtQkFBQTtBQUtKOztBQUhBO0VBQ0ksWUFBQTtBQU1KOztBQUZBO0VBQ0kseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFDQTtFQUNJLG9DQUFBO0FBRUo7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFLQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLDJDQUFBO0VBRUEsY0FBQTtBQUhKOztBQU1BO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtBQUhKOztBQU1BO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBSEo7O0FBTUE7RUFDSSx1QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQUhKOztBQVFBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FBTEoiLCJmaWxlIjoic3JjL2FwcC93b3Jrc2hlZXQvd29ya3NoZWV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc2l0aW9uLXJlbGF0aXZlID4gaXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAtMTVweDtcclxuICAgIGJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLmQtbm9uZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmJ0bi10aGVtZXtcclxuICAgIGJhY2tncm91bmQ6ICM3Y2I3M2YgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogIzdjYjczZiAhaW1wb3J0YW50O1xyXG59XHJcbi53LTQwe1xyXG4gICAgd2lkdGg6IDQwJTtcclxufVxyXG4udy0xMHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbn1cclxuLmlucHV0RGF0ZXtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbn1cclxudGhlYWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjN2NiNzQwO1xyXG59XHJcbnRoZWFkID50ciA+IHRoICwgdGJvZHkgPnRyID4gdGQsICB0Ym9keSA+dHIgPiB0aHtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICM3Y2I3NDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuLy8gdHIge1xyXG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbi8vIH1cclxuLnRhYmxlLWJvcmRlcmVkIHRkLCAudGFibGUtYm9yZGVyZWQgdGgge1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgIzAwMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuaW5wdXQuZm9ybS1jb250cm9sLCAgaW5wdXQuZm9ybS1jb250cm9sOmZvY3Vze1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLm1vZGFsLWJvZHl7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgXHJcbn1cclxuLmNhbmNsZS1kZWxldGUtYnRue1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLm1vZGFsLWRhdGF7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1MC41JTtcclxuICAgIC8qIG9yIDM2cHggKi9cclxuICAgIFxyXG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAndG51bScgb24sICdsbnVtJyBvbjtcclxuICAgIFxyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBcclxufVxyXG4ubWFpbi1tb2RhbHtcclxuICAgIGJhY2tncm91bmQ6ICMxRjFDMUM7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjN2NiNzQwO1xyXG59XHJcblxyXG4uYnRuLWNhbmNsZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjN0NCOTNFO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogOHB4IDY3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5idG4tYWRkIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICM3Q0I5M0U7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjN0NCOTNFO1xyXG4gICAgcGFkZGluZzogOHB4IDY3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLy8gLmJsb2Nre1xyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyB9XHJcbi50YXNre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDdjZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorksheetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-worksheet',
                templateUrl: './worksheet.component.html',
                styleUrls: ['./worksheet.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tGZc":
/*!**************************************************!*\
  !*** ./src/app/provider/auth-service.service.ts ***!
  \**************************************************/
/*! exports provided: AuthServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceService", function() { return AuthServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "5eHb");





class AuthServiceService {
    constructor(httpClient, toastr) {
        this.httpClient = httpClient;
        this.toastr = toastr;
        this.baseURL = 'http://localhost:27017/user/';
    }
    getApi(endPointURL, isHeader) {
        var httpHeaders;
        if (isHeader == 0) {
            httpHeaders = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
        }
        else {
            httpHeaders = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    token: `${localStorage.getItem("token")}`
                })
            };
        }
        return this.httpClient.get(this.baseURL + endPointURL, httpHeaders);
    }
    postApi(endPointURL, data, isHeader) {
        var httpHeaders;
        if (isHeader == 0) {
            httpHeaders = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
        }
        else {
            httpHeaders = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    token: `${localStorage.getItem("token")}`
                })
            };
        }
        return this.httpClient.post(this.baseURL + endPointURL, data, httpHeaders);
    }
    putApi(endPointURL, data, isHeader) {
        var httpHeaders;
        if (isHeader == 0) {
            httpHeaders = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({})
            };
        }
        else {
            httpHeaders = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    token: `${localStorage.getItem("token")}`
                })
            };
        }
        return this.httpClient.put(this.baseURL + endPointURL, data, httpHeaders);
    }
    // toastr service
    successToast(msg) {
        this.toastr.success(msg);
    }
    errorToast(msg) {
        this.toastr.error("erro");
    }
    infoToast(msg) {
        this.toastr.info(msg);
    }
    warningToast(msg) {
        this.toastr.warning(msg);
    }
    getAuthStatus() {
    }
}
AuthServiceService.ɵfac = function AuthServiceService_Factory(t) { return new (t || AuthServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
AuthServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthServiceService, factory: AuthServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "tR8r":
/*!***********************************************************************!*\
  !*** ./src/app/New-Task-Component/user-lists/user-lists.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListsComponent", function() { return UserListsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_provider_common_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/provider/common-service.service */ "5IlR");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/header/header.component */ "320Y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "oOf3");









function UserListsComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListsComponent_tr_37_Template_i_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.viewZone(item_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.zoneName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.statusDetail.description);
} }
function UserListsComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No data found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserListsComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pagination-controls", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function UserListsComponent_div_41_Template_pagination_controls_pageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.pagination($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
class UserListsComponent {
    constructor(route, service, http) {
        this.route = route;
        this.service = service;
        this.http = http;
        this.zoneList = [];
        this.itemPerPage = 5;
        this.currentPage = 1;
    }
    ngOnInit() {
        this.getListData();
        this.getCountryList();
    }
    getListData() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Authorization': 'Bearer  eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6IjcxIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJkZWZhdWx0bG9naW5icmFuY2giOjEsImlzcyI6InN5c3RlbSIsImlhdCI6MTY3NjYyNjI2OCwiZXhwIjoxNjc2NjQ0MjY4fQ.B6AW3biGLGGdjBVhevYym9kXtWaEVKZtippc6IE4Ye8', "Content-Type": "application/json", "moduleId": '132' });
        this.http.get('https://ats.hiromation.com:5126/zone/list?page_limit=10&page_order=desc&page_page=1&page_search=&page_sort=id&page_entryType=&module_id=132', { headers }).subscribe(res => {
            this.zoneList = res['data']['content'];
            this.totalItems = this.zoneList.length;
            console.log(this.zoneList);
        });
    }
    pagination(event) {
        console.log(event);
        this.currentPage = event;
        this.getListData();
    }
    getCountryList() {
        this.service.getApi("country/getSelectionList", 1).subscribe(res => {
            console.log(res);
        });
    }
    viewZone(id) {
        this.route.navigate(['/view-zone'], { skipLocationChange: true });
    }
}
UserListsComponent.ɵfac = function UserListsComponent_Factory(t) { return new (t || UserListsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_provider_common_service_service__WEBPACK_IMPORTED_MODULE_3__["CommonServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserListsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserListsComponent, selectors: [["app-user-lists"]], decls: 42, vars: 10, consts: [[1, "container"], [1, "col-lg-12", "mt-3", "col-new"], [1, "row"], [1, "col-md-3"], [1, "echart"], ["routerLink", "/echart", 1, "btn", "btn-primary"], [1, "head", "d-flex", "justify-content-between"], [1, "mt-2"], ["skipLocationChange", "", "routerLink", "/add-zone-list"], [1, "text-success", "addUser", "mt-2"], [1, "fa", "fa-plus"], [1, "table-responsive-md", "sortable", "mt-2"], [1, "table", "table-bordered", 2, "border", "1px solid #7fa8d0"], [2, "background-color", "blue", "color", "white"], ["scope", "col"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "custom-pagination mt-2  text-align-center", "style", "text-align: center !important; color: blue;", 4, "ngIf"], ["scope", "row"], [1, "task"], [1, "fa", "fa-edit", 3, "click"], ["routerLink", "/view-zone", 1, "fa", "fa-eye", 2, "margin-left", "10px"], ["colspan", "6", 1, "text-center", "noData"], [1, "custom-pagination", "mt-2", "text-align-center", 2, "text-align", "center !important", "color", "blue"], [3, "pageChange"]], template: function UserListsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "echats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "List of Zones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Add Zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Zone Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "View/Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, UserListsComponent_tr_37_Template, 16, 6, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, UserListsComponent_tr_40_Template, 3, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, UserListsComponent_div_41_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](38, 3, ctx.zoneList, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c0, ctx.itemPerPage, ctx.currentPage, ctx.totalItems)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.zoneList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.totalItems > 2);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginatePipe"]], styles: [".container[_ngcontent-%COMP%] {\n  background-color: #dee2e6 !important;\n}\n\n.col-new[_ngcontent-%COMP%] {\n  margin-top: 75px !important;\n}\n\n.background[_ngcontent-%COMP%] {\n  width: 430px;\n  height: 520px;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  left: 50%;\n  top: 50%;\n}\n\n.background[_ngcontent-%COMP%]   .shape[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.shape[_ngcontent-%COMP%]:first-child {\n  background: linear-gradient(#1845ad, #23a2f6);\n  left: -80px;\n  top: -80px;\n}\n\n.shape[_ngcontent-%COMP%]:last-child {\n  background: linear-gradient(to right, #ff512f, #f09819);\n  right: -30px;\n  bottom: -80px;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #3c2929;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  color: blue;\n  font-size: 20px;\n  font-weight: bold;\n  margin-top: -20px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.register[_ngcontent-%COMP%] {\n  width: 85px;\n  font-size: medium;\n  font-weight: bold;\n  cursor: pointer;\n  border-radius: 10%;\n  color: white !important;\n  background-color: #273ab8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nsmall[_ngcontent-%COMP%] {\n  text-align: start;\n  display: flex;\n}\n\n.task[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.fa-edit[_ngcontent-%COMP%]:hover {\n  background: #7979b5;\n}\n\n.addUser[_ngcontent-%COMP%]:hover {\n  color: blue !important;\n  cursor: pointer;\n}\n\n.addUser[_ngcontent-%COMP%] {\n  border: 1px solid green;\n  height: 45px;\n  width: 140px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n}\n\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  \n  position: absolute;\n  z-index: 1;\n  top: -5px;\n  left: 105%;\n}\n\n.tooltip[_ngcontent-%COMP%]:hover   .tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.noData[_ngcontent-%COMP%] {\n  height: 250px;\n  font-size: 22px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTmV3LVRhc2stQ29tcG9uZW50L3VzZXItbGlzdHMvdXNlci1saXN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG9DQUFBO0FBQUo7O0FBRUE7RUFDSSwyQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFFSjs7QUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksNkNBQUE7RUFJQSxXQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUNBO0VBQ0ksdURBQUE7RUFLQSxZQUFBO0VBQ0EsYUFBQTtBQUZKOztBQWtEQTtFQUNJLGNBQUE7QUEvQ0o7O0FBNERBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBekRKOztBQTJEQTtFQUNJLGFBQUE7QUF4REo7O0FBMkRBO0VBQ0ksV0FBQTtFQUVBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF6REo7O0FBMkRBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0FBeERKOztBQTJEQTtFQUdJLGVBQUE7QUExREo7O0FBNERBO0VBQ0ksbUJBQUE7QUF6REo7O0FBMkRBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBeERBOztBQTBEQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQXZESjs7QUF5REE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7QUF0REo7O0FBeURFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFFQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBdkRKOztBQTBERTtFQUNFLG1CQUFBO0FBdkRKOztBQXlERTtFQUNFLGFBQUE7RUFBYyxlQUFBO0VBQWdCLGdCQUFBO0FBcERsQyIsImZpbGUiOiJzcmMvYXBwL05ldy1UYXNrLUNvbXBvbmVudC91c2VyLWxpc3RzL3VzZXItbGlzdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzA4MDcxMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNiAhaW1wb3J0YW50O1xyXG59XHJcbi5jb2wtbmV3e1xyXG4gICAgbWFyZ2luLXRvcDogNzVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5iYWNrZ3JvdW5ke1xyXG4gICAgd2lkdGg6IDQzMHB4O1xyXG4gICAgaGVpZ2h0OiA1MjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0b3A6IDUwJTtcclxufVxyXG4uYmFja2dyb3VuZCAuc2hhcGV7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5zaGFwZTpmaXJzdC1jaGlsZHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAjMTg0NWFkLFxyXG4gICAgICAgICMyM2EyZjZcclxuICAgICk7XHJcbiAgICBsZWZ0OiAtODBweDtcclxuICAgIHRvcDogLTgwcHg7XHJcbn1cclxuLnNoYXBlOmxhc3QtY2hpbGR7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgdG8gcmlnaHQsXHJcbiAgICAgICAgI2ZmNTEyZixcclxuICAgICAgICAjZjA5ODE5XHJcbiAgICApO1xyXG4gICAgcmlnaHQ6IC0zMHB4O1xyXG4gICAgYm90dG9tOiAtODBweDtcclxufVxyXG4vLyBmb3Jte1xyXG4vLyAgICAgaGVpZ2h0OiA1MDBweDtcclxuLy8gICAgIHdpZHRoOiAxMDAwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTMpO1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuLy8gICAgIHRvcDogNTAlO1xyXG4vLyAgICAgbGVmdDogNTAlO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuLy8gICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcclxuLy8gICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoOCw3LDE2LDAuNik7XHJcbi8vICAgICBwYWRkaW5nOiA1MHB4IDM1cHg7XHJcbi8vIH1cclxuLy8gZm9ybSAqe1xyXG4vLyAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyxzYW5zLXNlcmlmO1xyXG4vLyAgICAgY29sb3I6ICMyNzNhYjg7XHJcbi8vICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbi8vICAgICBvdXRsaW5lOiBub25lO1xyXG4vLyAgICAgYm9yZGVyOiBub25lO1xyXG4vLyB9XHJcbi8vIGZvcm0gaDN7XHJcbi8vICAgICBmb250LXNpemU6IDMycHg7XHJcbi8vICAgICBmb250LXdlaWdodDogNTAwO1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIGxhYmVse1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gfVxyXG4vLyBpbnB1dCxzZWxlY3R7XHJcbi8vICAgICBkaXNwbGF5OiBibG9jaztcclxuLy8gICAgIGhlaWdodDogNTBweDtcclxuLy8gICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjA3KTtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuLy8gICAgIHBhZGRpbmc6IDAgMTBweDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDhweDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjayAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbjo6cGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjogIzNjMjkyOTtcclxufVxyXG4vLyBidXR0b257XHJcbi8vICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmExODVlO1xyXG4vLyAgICAgY29sb3I6ICNmY2ZjZmUgIWltcG9ydGFudDtcclxuLy8gICAgIHBhZGRpbmc6IDE1cHggMDtcclxuLy8gICAgIGZvbnQtc2l6ZTogMThweDtcclxuLy8gICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vIH1cclxuLmNhcmQtdGl0bGV7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5yZWdpc3RlciB7XHJcbiAgICB3aWR0aDogODVweDtcclxuICAgIC8vIGhlaWdodDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzNhYjg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbnNtYWxse1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxufVxyXG4udGFza3tcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigyMSwgNzAsIDIxKTtcclxuICAgIC8vIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZmEtZWRpdDpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHJnYigxMjEsIDEyMSwgMTgxKTtcclxufVxyXG4uYWRkVXNlcjpob3ZlcntcclxuY29sb3I6IGJsdWUgIWltcG9ydGFudDtcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hZGRVc2Vye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuLnRvb2x0aXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgIFxyXG4gICAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0b3A6IC01cHg7XHJcbiAgICBsZWZ0OiAxMDUlO1xyXG4gIH1cclxuICBcclxuICAudG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbiAgLm5vRGF0YXtcclxuICAgIGhlaWdodDogMjUwcHg7Zm9udC1zaXplOiAyMnB4O21hcmdpbi10b3A6IDIwcHg7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserListsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-lists',
                templateUrl: './user-lists.component.html',
                styleUrls: ['./user-lists.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_provider_common_service_service__WEBPACK_IMPORTED_MODULE_3__["CommonServiceService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vTBl":
/*!*************************************************************!*\
  !*** ./src/app/UserAuth/user-login/user-login.component.ts ***!
  \*************************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UserLoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserLoginComponent.ɵfac = function UserLoginComponent_Factory(t) { return new (t || UserLoginComponent)(); };
UserLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserLoginComponent, selectors: [["app-user-login"]], decls: 2, vars: 0, template: function UserLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user-login works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1VzZXJBdXRoL3VzZXItbG9naW4vdXNlci1sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-login',
                templateUrl: './user-login.component.html',
                styleUrls: ['./user-login.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-user/add-user.component */ "9DFq");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "bsvf");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/signup/signup.component */ "SBxm");
/* harmony import */ var _authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authGuard/auth.guard */ "CG1p");
/* harmony import */ var _New_Task_Component_add_user_list_add_user_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./New-Task-Component/add-user-list/add-user-list.component */ "8vV2");
/* harmony import */ var _New_Task_Component_user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./New-Task-Component/user-lists/user-lists.component */ "tR8r");
/* harmony import */ var _New_Task_Component_view_zone_list_view_zone_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./New-Task-Component/view-zone-list/view-zone-list.component */ "lbPx");
/* harmony import */ var _observable_observable_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./observable/observable.component */ "xYnf");
/* harmony import */ var _practice_chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./practice/chartjs/chartjs.component */ "ZoSP");
/* harmony import */ var _practice_temperature_temperature_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./practice/temperature/temperature.component */ "X3+m");
/* harmony import */ var _promise_promise_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./promise/promise.component */ "yAK/");
/* harmony import */ var _register_task_register_task_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register-task/register-task.component */ "8+r2");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-list/user-list.component */ "UMdc");
/* harmony import */ var _UserAuth_user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./UserAuth/user-signup/user-signup.component */ "rGRD");
/* harmony import */ var _worksheet_worksheet_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./worksheet/worksheet.component */ "suXe");



















const routes = [
    { path: '', redirectTo: 'zone-list', pathMatch: 'full' },
    { path: 'zone-list', component: _New_Task_Component_user_lists_user_lists_component__WEBPACK_IMPORTED_MODULE_7__["UserListsComponent"] },
    { path: 'user-list', component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_14__["UserListComponent"], canActivate: [_authGuard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'view-zone', component: _New_Task_Component_view_zone_list_view_zone_list_component__WEBPACK_IMPORTED_MODULE_8__["ViewZoneListComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    // {path:'home',component:WorksheetTaskComponent},
    { path: 'promise', component: _promise_promise_component__WEBPACK_IMPORTED_MODULE_12__["PromiseComponent"] },
    { path: 'observable', component: _observable_observable_component__WEBPACK_IMPORTED_MODULE_9__["ObservableComponent"] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'register-task', component: _register_task_register_task_component__WEBPACK_IMPORTED_MODULE_13__["RegisterTaskComponent"] },
    { path: 'worksheet', component: _worksheet_worksheet_component__WEBPACK_IMPORTED_MODULE_16__["WorksheetComponent"] },
    { path: 'add-user', component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__["AddUserComponent"] },
    { path: 'add-zone-list', component: _New_Task_Component_add_user_list_add_user_list_component__WEBPACK_IMPORTED_MODULE_6__["AddUserListComponent"] },
    { path: 'user-signup', component: _UserAuth_user_signup_user_signup_component__WEBPACK_IMPORTED_MODULE_15__["UserSignupComponent"] },
    { path: 'temperature', component: _practice_temperature_temperature_component__WEBPACK_IMPORTED_MODULE_11__["TemperatureComponent"] },
    { path: 'echart', component: _practice_chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_10__["ChartjsComponent"] },
    { path: '**', redirectTo: 'zone-list' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xYnf":
/*!****************************************************!*\
  !*** ./src/app/observable/observable.component.ts ***!
  \****************************************************/
/*! exports provided: ObservableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableComponent", function() { return ObservableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/header/header.component */ "320Y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function ObservableComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4);
} }
function ObservableComponent_tbody_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.status);
} }
class ObservableComponent {
    constructor(http) {
        this.http = http;
        this.newMemberName = '';
        this.members = [];
        this.count = [];
        this.value = "mahadev";
        this.textStyle = {
            'color': 'green',
            'text-align': 'center',
            'font-size': '20px'
        };
        this.studentData = [];
    }
    ngOnInit() {
        this.student();
    }
    addName() {
        this.members.push(this.newMemberName);
        this.newMemberName = '';
        console.log(this.members);
        this.count = this.members.length;
        console.log(this.count);
    }
    OnInput(member) {
        this.newMemberName = member;
        console.log(this.newMemberName);
    }
    student() {
        this.http.get('http://localhost:3000/').subscribe(res => {
            this.studentData = res;
            console.log(this.studentData);
            console.log(res);
        });
    }
}
ObservableComponent.ɵfac = function ObservableComponent_Factory(t) { return new (t || ObservableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ObservableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ObservableComponent, selectors: [["app-observable"]], decls: 26, vars: 7, consts: [[1, "container"], [1, "containernew"], [1, "ul"], [4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Name of player", 1, "enter", 3, "value", "input"], ["addMemberInput", ""], [1, "btn", "btn-primary", "mb-1", 3, "click"], ["type", "text", "name", "value", 3, "ngModel", "ngModelChange"], ["newValue", ""], [1, "value", 3, "ngStyle"], [1, "row"]], template: function ObservableComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " observable\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ObservableComponent_li_5_Template, 2, 1, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ObservableComponent_Template_input_input_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.OnInput(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ObservableComponent_Template_button_click_10_listener() { return ctx.addName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ObservableComponent_Template_input_ngModelChange_12_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ObservableComponent_tbody_25_Template, 7, 3, "tbody", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.members);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.count, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.newMemberName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.textStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value.toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.studentData);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], styles: [".container[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  margin-top: 10px;\n  background-color: aquamarine;\n}\n\n.containernew[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 300px;\n  margin-left: 42%;\n  height: 300px;\n  border: 2px solid #390f0f;\n}\n\nli[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.enter[_ngcontent-%COMP%] {\n  margin-left: 42%;\n  margin-top: 6px;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2JzZXJ2YWJsZS9vYnNlcnZhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFBQTtFQUNJLGdCQUFBO0FBR0o7O0FBREE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBSUoiLCJmaWxlIjoic3JjL2FwcC9vYnNlcnZhYmxlL29ic2VydmFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xyXG59XHJcbi5jb250YWluZXJuZXd7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDIlO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig1NywgMTUsIDE1KTtcclxufVxyXG5saXtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLmVudGVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQyJTtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObservableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-observable',
                templateUrl: './observable.component.html',
                styleUrls: ['./observable.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "yAK/":
/*!**********************************************!*\
  !*** ./src/app/promise/promise.component.ts ***!
  \**********************************************/
/*! exports provided: PromiseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromiseComponent", function() { return PromiseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _provider_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../provider/shared.service */ "Sltx");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/header/header.component */ "320Y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function PromiseComponent_tr_18_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r3.totalHrs, " Hr");
} }
function PromiseComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PromiseComponent_tr_18_td_5_Template, 2, 1, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.EmployeeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.totalHrs <= 100);
} }
function PromiseComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", item_r7, "\n");
} }
class PromiseComponent {
    constructor(sharedService, http) {
        this.sharedService = sharedService;
        this.http = http;
        this.totalData = [];
        this.startTime = [];
        this.hrStart = [];
        this.hrEnd = [];
        this.date = [];
        this.unique = [];
        this.finalData = [];
        this.uniqueEmployess = [];
        this.allData = [];
        this.newData = '';
        this.dell = {
            brand: 'dell',
            hardDisc: '1TB',
            color: 'Black'
        };
        this.hp = {
            brand: 'HP 4205',
            hardDisc: '2TB',
            color: 'silver'
        };
        this.notAvail = {
            brand: 'not avail',
            hardDisc: 'not avail',
            color: 'not avail'
        };
    }
    Hpavailble() {
        return true;
    }
    Dellavailble() {
        return false;
    }
    ngOnInit() {
        this.getData();
        let buyLaptop = new Promise((resolve, reject) => {
            // resolve('Promise is resolved')
            // reject('Promise is rejected')
            if (this.Hpavailble()) {
                return setTimeout(() => {
                    resolve(this.hp);
                }, 3000);
            }
            else if (this.Dellavailble()) {
                return setTimeout(() => {
                    resolve(this.dell);
                }, 3000);
            }
            else {
                return setTimeout(() => {
                    reject(this.notAvail);
                }, 3000);
            }
        });
        buyLaptop.then(res => {
            console.log('then code=>', res);
            this.laptopData = JSON.stringify(res);
        }).catch(res => {
            console.log('catch code =>', res);
            this.laptopData = res;
        });
    }
    sendData() {
        this.allData.push(this.newData);
        this.newData = '';
        console.log(this.allData);
    }
    onInput(data) {
        this.newData = data;
    }
    getData() {
        this.http.get('https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ==').subscribe(res => {
            this.totalData = res;
            //  console.log(this.totalData.filter(n=>n !=null));
            const key = 'EmployeeName';
            this.unique = [...new Map(this.totalData.map(item => [item[key], item])).values()];
            this.uniqueEmployess = this.unique.filter((e) => e.EmployeeName != null);
            this.finalData = this.uniqueEmployess.sort((a, b) => (a.totalHrs < b.totalHrs) ? 1 : -1);
            console.log("final data", this.finalData);
            this.totalData.forEach((ele) => {
                if (new Date(ele.EndTimeUtc).getTime() > new Date(ele.StarTimeUtc).getTime()) {
                    ele.timeDiff =
                        new Date(ele.EndTimeUtc).getTime() -
                            new Date(ele.StarTimeUtc).getTime();
                }
                else {
                    ele.timeDiff = 0;
                }
            });
            this.uniqueEmployess.forEach((elem) => {
                elem.totalHrs = new Date(this.totalData.reduce((acc, val) => {
                    if (val.EmployeeName == elem.EmployeeName)
                        return acc + val.timeDiff;
                    return acc;
                }, 0)).getHours();
            });
            console.log('uniqueEmployess---->', this.totalData);
            console.log('this.uniqueEmployee---->', this.uniqueEmployess);
            //  this.hrStart =new Date( this.totalData[2].StarTimeUtc)
            //  this.hrEnd =new Date (this.totalData[2].EndTimeUtc)
            //  this.diffTime = Math.abs(this.hrEnd - this.hrStart)/36e5;
            // this.fixedtime =this.diffTime.toFixed(1)
            // console.log(this.fixedtime);
        });
    }
    getPager(totalItems, currentPage = 1, googlePager = false, pageSize = 10) {
        let totalPages = Math.ceil(totalItems / pageSize);
        let startPage;
        let endPage;
        let pages = [];
        // google-like paging
        if (totalPages <= 5 || !googlePager) {
            startPage = 1;
            endPage = totalPages;
        }
        else {
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            }
            else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }
        // set number of pages
        for (let i = 1; i <= endPage; i++) {
            pages.push(i);
        }
        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
}
PromiseComponent.ɵfac = function PromiseComponent_Factory(t) { return new (t || PromiseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_provider_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PromiseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PromiseComponent, selectors: [["app-promise"]], decls: 28, vars: 4, consts: [[1, "container"], [1, "my-3"], [1, "row"], [1, "col-md-6"], [1, ""], [4, "ngFor", "ngForOf"], ["type", "text", 1, "form-control", 3, "value", "input"], ["newValue", ""], [1, "submitbtn", "mt-2"], [1, "btn", "btn-primary", 3, "click"], ["class", "array", 4, "ngFor", "ngForOf"], ["style", "background-color: red;color: white;", 4, "ngIf"], [2, "background-color", "red", "color", "white"], [1, "array"]], template: function PromiseComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Promise");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "SN.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Employee Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Total Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PromiseComponent_tr_18_Template, 6, 3, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "No Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function PromiseComponent_Template_input_input_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return ctx.onInput(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PromiseComponent_Template_button_click_25_listener() { return ctx.sendData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, PromiseComponent_div_27_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.laptopData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.finalData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.newData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allData);
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["h2[_ngcontent-%COMP%] {\n  width: 87%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\ntr[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: 1px solid greenyellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvbWlzZS9wcm9taXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDQTtFQUNJLDZCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9wcm9taXNlL3Byb21pc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcclxuICAgIHdpZHRoOiA4NyU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG50cix0ZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVueWVsbG93O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromiseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-promise',
                templateUrl: './promise.component.html',
                styleUrls: ['./promise.component.scss']
            }]
    }], function () { return [{ type: _provider_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map