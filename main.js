(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./route.ts":
/*!******************!*\
  !*** ./route.ts ***!
  \******************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _src_app_register_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _src_app_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/app/quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _src_app_result_result_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/app/result/result.component */ "./src/app/result/result.component.ts");



var appRoutes = [
    { path: 'register', component: _src_app_register_register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"] },
    { path: 'quiz', component: _src_app_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_1__["QuizComponent"] },
    { path: 'result', component: _src_app_result_result_component__WEBPACK_IMPORTED_MODULE_2__["ResultComponent"] },
    { path: '', redirectTo: '/register', pathMatch: 'full' },
    { path: '**', component: _src_app_register_register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"] }
];


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Model/QuizModelParticipant.ts":
/*!***********************************************!*\
  !*** ./src/app/Model/QuizModelParticipant.ts ***!
  \***********************************************/
/*! exports provided: Participant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Participant", function() { return Participant; });
var Participant = /** @class */ (function () {
    function Participant() {
    }
    return Participant;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Quiz7v';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../route */ "./route.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");













































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_11__["QuizComponent"],
                _result_result_component__WEBPACK_IMPORTED_MODULE_12__["ResultComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_43__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_route__WEBPACK_IMPORTED_MODULE_2__["appRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_19__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_27__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCardModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__["MatExpansionModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_32__["MatButtonToggleModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_33__["MatChipsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__["MatIconModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__["MatProgressSpinnerModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__["MatProgressBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_37__["MatDialogModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__["MatTooltipModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_39__["MatSnackBarModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_40__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_41__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_42__["MatPaginatorModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title-center {\r\n    margin: 0 auto;\r\n    border-bottom: 0ch;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZS1jZW50ZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXItYm90dG9tOiAwY2g7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-toolbar color=\"primary\">\n      <span class=\"title-center\">Quiz Organisation 2020-21</span>\n  </mat-toolbar>\n  </div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title-center {\r\n    margin: 0 auto;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZS1jZW50ZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<mat-toolbar color=\"primary\">\n  <span class=\"title-center\">Welcome to Quiz Of India's state and its capital</span>\n</mat-toolbar>\n</div>   "

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/quiz/quiz.component.css":
/*!*****************************************!*\
  !*** ./src/app/quiz/quiz.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .Time{\r\n    position: relative;\r\n    margin-left: 50%;\r\n    margin-bottom: 50%;\r\n    margin-top: 50%;\r\n\r\n} */\r\n\r\nmat-grid-list{\r\n    background-color: rgb(184, 86, 175) ;\r\n  \r\n}\r\n\r\nmat-grid-list  mat-card:hover{\r\n    background-color: #269cb1;\r\n    color: #eafaf9;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n.matcard1{\r\n    \r\n   width: 80%;\r\n    display: inline-block;\r\n}\r\n\r\n.container1{\r\n    text-align: center;\r\n}\r\n\r\n.inside{\r\n    width: 80%;\r\n    height: 50%;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOztBQUVIO0lBQ0ksb0NBQW9DOztBQUV4Qzs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTs7QUFFbkI7O0FBQ0E7O0dBRUcsVUFBVTtJQUNULHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXOztBQUVmIiwiZmlsZSI6InNyYy9hcHAvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuVGltZXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1MCU7XHJcblxyXG59ICovXHJcblxyXG5tYXQtZ3JpZC1saXN0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NCwgODYsIDE3NSkgO1xyXG4gIFxyXG59XHJcbm1hdC1ncmlkLWxpc3QgIG1hdC1jYXJkOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2OWNiMTtcclxuICAgIGNvbG9yOiAjZWFmYWY5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxufVxyXG4ubWF0Y2FyZDF7XHJcbiAgICBcclxuICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmNvbnRhaW5lcjF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmluc2lkZXtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/quiz/quiz.component.html":
/*!******************************************!*\
  !*** ./src/app/quiz/quiz.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <header>\n  <app-header></app-header>\n  </header>\n  <main>\n  <div class=\"container1\">\n  <div class=\"matcard1\">    \n        <mat-card  >\n  \n      \n              <span  style=\"text-align: center;\" class=\"Time\">Time Elapsed : {{quizService.displayTimeElapsed()}}</span>\n                    <br> <br>\n              <mat-progress-bar mode=\"determinate\" value=\"{{(quizService.qnProgress+1)*10}}\"></mat-progress-bar>\n       \n        </mat-card>\n  </div>\n  </div>\n  \n        <mat-card style=\"width: 50%; position: absolute; left: 25%; margin-top:10px; padding-bottom: 10px;\">\n              <div *ngIf=\"quizService.qns==null\">\n                    <span> qns is null</span>\n              </div>\n              <div *ngIf=\"quizService.qns!=null\">\n  \n  \n                    <mat-card-title>\n                          <span>\n                                Ques {{quizService.qnProgress+1}}<br>\n                                <div style=\"text-align: center\"> State : {{quizService.qns[quizService.qnProgress].qn}}\n                                </div>\n                          </span><br>\n                    </mat-card-title>\n                    <mat-grid-list cols=\"2\" rowHeight=\"100px\" (click)=\"hello()\" class=\"card\">\n  \n                          <mat-grid-tile   style=\"border:3px solid white; \">\n                                 <mat-card [style.background-color]=\"colorr1[quizService.qnProgress]\" (click)=\"color1(quizService.qnProgress)\" class=\"inside\" >1 .\n                                {{quizService.qns[quizService.qnProgress].op1}}</mat-card></mat-grid-tile>\n                          <mat-grid-tile  style=\"border:3px solid white;\">\n                                <mat-card [style.background-color]=\"colorr2[quizService.qnProgress]\" (click)=\"color2(quizService.qnProgress)\" class=\"inside\" >2.\n                                {{quizService.qns[quizService.qnProgress].op2}}</mat-card></mat-grid-tile>\n                          <mat-grid-tile  style=\"border:3px solid white;\">\n                                <mat-card [style.background-color]=\"colorr3[quizService.qnProgress]\" (click)=\"color3(quizService.qnProgress)\" class=\"inside\" >3.\n                                {{quizService.qns[quizService.qnProgress].op3}}</mat-card></mat-grid-tile>\n                          <mat-grid-tile   style=\"border:3px solid white;\">\n                                \n                                <mat-card [style.background-color]=\"colorr4[quizService.qnProgress]\" (click)=\"color4(quizService.qnProgress)\" class=\"inside\" >\n                                      4.\n                                {{quizService.qns[quizService.qnProgress].op4}}</mat-card></mat-grid-tile>\n  \n  \n                    </mat-grid-list>\n  \n                    <mat-card-actions>\n                          <div style=\"text-align: center;\">\n                                <button mat-button [disabled]=\"(quizService.qnProgress+1)===1\" (click)=\"prev()\" style=\"background-color: greenyellow;\">\n                                      Prev\n                                </button>\n                                <button mat-raised-button (click)=\"submit()\" style=\"background-color: red;\">Submit</button>\n                                <button mat-button [disabled]=\"(quizService.qnProgress+1)===10\" (click)=\"next()\" style=\"background-color: greenyellow;\">Next</button>\n                          </div>\n                    </mat-card-actions>\n                    <mat-card-footer>\n  \n                    </mat-card-footer>\n  \n              </div>\n        </mat-card>\n  </main>\n  \n  <footer>\n        <app-footer></app-footer>\n  </footer>\n  </div>"

/***/ }),

/***/ "./src/app/quiz/quiz.component.ts":
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../quiz.service */ "./src/quiz.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var QuizComponent = /** @class */ (function () {
    function QuizComponent(quizService, router) {
        this.quizService = quizService;
        this.router = router;
        this.flag = 0;
        this.colorr1 = new Array(10);
        this.colorr2 = new Array(10);
        this.colorr3 = new Array(10);
        this.colorr4 = new Array(10);
    }
    QuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quizService.seconds = 0;
        localStorage.setItem('seconds', this.quizService.seconds.toString());
        if (parseInt(localStorage.getItem('seconds')) > 0) {
            this.quizService.seconds = parseInt(localStorage.getItem('seconds'));
            this.quizService.qnProgress = parseInt(localStorage.getItem('qnProgress'));
            this.quizService.qns = JSON.parse(localStorage.getItem('qns'));
            if (this.quizService.qnProgress == 100)
                this.router.navigate(['/result']);
            else
                this.startTimer();
        }
        else {
            console.log("inside the ngonit");
            this.quizService.seconds = 0;
            this.quizService.qnProgress = 0;
            this.quizService.getQuestions().subscribe(function (data) {
                _this.quizService.qns = data;
                _this.startTimer();
            });
        }
    };
    QuizComponent.prototype.startTimer = function () {
        var _this = this;
        this.quizService.timer = setInterval(function () {
            _this.quizService.seconds++;
            localStorage.setItem('seconds', _this.quizService.seconds.toString());
        }, 1000);
    };
    QuizComponent.prototype.hello = function () {
        console.log("card clickable");
    };
    QuizComponent.prototype.next = function () {
        this.quizService.qnProgress++;
        // this.colorr1=null;
        // this.colorr2=null;
        // this.colorr3=null;
        // this.colorr4=null;
    };
    QuizComponent.prototype.prev = function () {
        this.quizService.qnProgress--;
    };
    QuizComponent.prototype.color1 = function (index) {
        localStorage.setItem('qns', JSON.stringify(this.quizService.qns));
        console.log("color 4 clickable");
        console.log("index " + index);
        console.log(console);
        this.colorr1[index] = "green";
        this.colorr2[index] = null;
        this.colorr3[index] = null;
        this.colorr4[index] = null;
        //*******************score logic************************** */
        this.quizService.answers[index] = 1;
    };
    QuizComponent.prototype.color2 = function (index) {
        console.log("color 4 clickable");
        this.colorr1[index] = null;
        this.colorr2[index] = "green";
        this.colorr3[index] = null;
        this.colorr4[index] = null;
        this.quizService.answers[index] = 2;
    };
    QuizComponent.prototype.color3 = function (index) {
        console.log("color 4 clickable");
        this.colorr1[index] = null;
        this.colorr2[index] = null;
        this.colorr3[index] = "green";
        this.colorr4[index] = null;
        this.quizService.answers[index] = 3;
    };
    QuizComponent.prototype.color4 = function (index) {
        localStorage.setItem('qnProgress', this.quizService.qnProgress.toString());
        console.log("color 4 clickable");
        this.colorr1[index] = null;
        this.colorr2[index] = null;
        this.colorr3[index] = null;
        this.colorr4[index] = "green";
        this.quizService.answers[index] = 4;
    };
    QuizComponent.prototype.submit = function () {
        console.log(this.quizService.answers);
        clearInterval(this.quizService.timer);
        this.router.navigate(['/result']);
    };
    QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/quiz/quiz.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <header>\n  <app-header></app-header>\n</header>\n\n<main>\n<div style=\"text-align: center;\">\n<!-- <button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\n    {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\n  </button> -->\n  <div style=\"align-self: center;\">\n      <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n    <mat-step [stepControl]=\"firstFormGroup\" errorMessage=\"Name is required.\" >\n      <form [formGroup]=\"firstFormGroup\">\n        <ng-template matStepLabel>Fill out your full name</ng-template>\n        <mat-form-field>\n          <input matInput placeholder=\"Full Name\"  id=\"firstCtrl\" #firstCtrl formControlName=\"firstCtrl\" required>\n        </mat-form-field>\n        <!-- <div *ngIf=\"firstCtrl\">  Invalid</div> -->\n   <div>\n          <button   mat-button matStepperNext>Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step [stepControl]=\"secondFormGroup\">\n      <form [formGroup]=\"secondFormGroup\">\n        <ng-template matStepLabel>Email </ng-template>\n        <mat-form-field>\n          <input matInput placeholder=\"Email\" formControlName=\"secondCtrl\" required>\n        </mat-form-field>\n        <div>\n          <button mat-button matStepperPrevious>Back</button>\n          <button mat-button matStepperNext>Next</button>\n        </div>\n      </form>\n    </mat-step>\n    <mat-step>\n      <ng-template matStepLabel>Done</ng-template>\n      You are now done.\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button (click)=\"submit()\">Submit</button>\n        <button mat-button (click)=\"stepper.reset()\">Reset</button>\n      </div>\n    </mat-step>\n  </mat-vertical-stepper>\n</div>\n\n  </div>\n  <div style=\"text-align: center;\" *ngIf=\"errormessage!=null\" >\n    <span>{{errormessage}}</span>\n  </div>\n  <div style=\"text-align: center;\" *ngIf=\"successmessage!=null\" >\n    <span>{{successmessage}}</span>\n  </div>\n</main>\n <footer>\n  <app-footer></app-footer>\n </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../register.service */ "./src/register.service.ts");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../quiz.service */ "./src/quiz.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Model_QuizModelParticipant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Model/QuizModelParticipant */ "./src/app/Model/QuizModelParticipant.ts");







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_formBuilder, regs, router, quizService) {
        this._formBuilder = _formBuilder;
        this.regs = regs;
        this.router = router;
        this.quizService = quizService;
        this.isLinear = true;
        this.check = true;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]]
        });
    };
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        this.successmessage = null;
        this.successmessage = null;
        this.participant = new _Model_QuizModelParticipant__WEBPACK_IMPORTED_MODULE_6__["Participant"]();
        this.participant.name = this.firstFormGroup.controls['firstCtrl'].value;
        this.participant.email = this.secondFormGroup.controls['secondCtrl'].value;
        this.participant.score = 90;
        this.participant.time = 800;
        this.participant.pid = 0;
        this.quizService.name = this.participant.name;
        this.regs.sendData(this.participant).subscribe(function (success) { _this.successmessage = success; }, function (error) { _this.errormessage = error; }, function () { _this.router.navigate(['/quiz']); });
        this.router.navigate(['/quiz']);
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _register_service__WEBPACK_IMPORTED_MODULE_1__["RegisterService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/result/result.component.css":
/*!*********************************************!*\
  !*** ./src/app/result/result.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.matcard1{\r\n    width: 80%;\r\n     display: inline-block;\r\n }\r\n \r\n .container1{\r\n     text-align: center;\r\n }\r\n \r\n .text{\r\n    -webkit-text-emphasis-color: blue;\r\n            text-emphasis-color: blue;\r\n    -webkit-text-decoration-color: green;\r\n            text-decoration-color: green;\r\n    background-color: blue;\r\n }\r\n \r\n .ngcon{\r\n    text-align: center;\r\n\r\n }\r\n \r\n .matcard2{\r\n    width: 60%;\r\n    display: inline-block;\r\n    left: 20%;\r\n }\r\n \r\n .mat-card-footer{\r\n   text-align:center;\r\n }\r\n \r\n .correct{\r\n    background-color: ivory;\r\n    color: rgb(47, 255, 109);\r\n }\r\n \r\n .Incorrect{\r\n   background-color: ivory;\r\n   color: rgba(245, 12, 12, 0.801);\r\n}\r\n \r\n .notAttempt{\r\n   background-color: ivory;\r\n   color:blueviolet;\r\n}\r\n \r\n .image{\r\n  height:100%;\r\n  display: flex;\r\n}\r\n \r\n .content{\r\n   justify-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFVBQVU7S0FDVCxxQkFBcUI7Q0FDekI7O0NBRUE7S0FDSSxrQkFBa0I7Q0FDdEI7O0NBRUE7SUFDRyxpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0NBQ3pCOztDQUNBO0lBQ0csa0JBQWtCOztDQUVyQjs7Q0FDQTtJQUNHLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsU0FBUztDQUNaOztDQUNBO0dBQ0UsaUJBQWlCO0NBQ25COztDQUNBO0lBQ0csdUJBQXVCO0lBQ3ZCLHdCQUF3QjtDQUMzQjs7Q0FDQTtHQUNFLHVCQUF1QjtHQUN2QiwrQkFBK0I7QUFDbEM7O0NBQ0E7R0FDRyx1QkFBdUI7R0FDdkIsZ0JBQWdCO0FBQ25COztDQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7Q0FDQTtHQUNHLHVCQUF1QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWF0Y2FyZDF7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuIH1cclxuIFxyXG4gLmNvbnRhaW5lcjF7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG4gXHJcbiAudGV4dHtcclxuICAgIHRleHQtZW1waGFzaXMtY29sb3I6IGJsdWU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IGdyZWVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuIH1cclxuIC5uZ2NvbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiB9XHJcbiAubWF0Y2FyZDJ7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbGVmdDogMjAlO1xyXG4gfVxyXG4gLm1hdC1jYXJkLWZvb3RlcntcclxuICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiB9XHJcbiAuY29ycmVjdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xyXG4gICAgY29sb3I6IHJnYig0NywgMjU1LCAxMDkpO1xyXG4gfVxyXG4gLkluY29ycmVjdHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XHJcbiAgIGNvbG9yOiByZ2JhKDI0NSwgMTIsIDEyLCAwLjgwMSk7XHJcbn1cclxuLm5vdEF0dGVtcHR7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IGl2b3J5O1xyXG4gICBjb2xvcjpibHVldmlvbGV0O1xyXG59XHJcbi5pbWFnZXtcclxuICBoZWlnaHQ6MTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5jb250ZW50e1xyXG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/result/result.component.html":
/*!**********************************************!*\
  !*** ./src/app/result/result.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <header>\n    <app-header></app-header>\n  </header>\n  <main>\n  <div class=\"container1\">\n      <div class=\"matcard1\">\n          <mat-card >\n            <div>\n             <div  class=\"image\" >\n               <img  mat-card-xl-image src=\"./../../assets/assets/globe.jpg\">\n  \n               <div style=\"text-align: center;margin-top: 10%;margin-left: 5%;margin-right: 5%;\"> Thank You  <b>{{quizService.name}}</b> for taking Test.\n               </div><br>\n               <img  mat-card-xl-image src=\"./../../assets/assets/globe.jpg\">\n  \n               <div style=\"text-align: center;margin-top: 10%;margin-left: 5%;margin-right: 5%;font: large;\">Time used : {{quizService.displayTimeElapsed()}}</div>\n             \n             \n               </div>\n      </div>\n  \n          </mat-card>\n      </div>\n  </div> \n  <div>\n  \n  \n  <h3 style=\"text-align: center;\">Your Score is   :{{score}}/10 </h3>\n  \n  <h3 style=\"text-align: center;\">Question And their Answers are follows : </h3>\n  \n  </div>\n  <div>\n  <ng-container *ngFor=\"let qn of quizService.qns;let i=index\" class=\"ngcon\">\n     \n      <mat-card  class=\"matcard2\">\n       \n      <mat-card-title>\n          <span>\n                Ques {{i+1}}<br>\n                <div style=\"text-align: center\"> State : {{qn.qn}}\n                </div>\n          </span><br>\n    </mat-card-title>\n    <mat-card-content>\n      <mat-grid-list cols=\"2\" rowHeight=\"100px\" >\n  \n  \n          <div *ngIf=\"qn.answer==quizService.answers[i]&&qn.answer==1; else option1\">\n          <mat-grid-tile   style=\"border:3px solid rgb(10, 180, 247); background-color: green;\">\n               1 . {{qn.op1}}</mat-grid-tile>\n          </div>\n  \n          <ng-template #option1>\n              <mat-grid-tile   style=\"border:3px solid rgb(10, 180, 247);\">   1 . {{qn.op1}}</mat-grid-tile>\n              </ng-template>>\n              \n              <div *ngIf=\"qn.answer==quizService.answers[i]&&qn.answer==2;  else option2\">\n          <mat-grid-tile  style=\"border:3px solid rgb(10, 180, 247); background-color: green;\">\n              2.\n                {{qn.op2}} </mat-grid-tile>\n                </div>\n                <ng-template #option2>\n                  <mat-grid-tile  style=\"border:3px solid rgb(10, 180, 247);\">\n                      2.\n                        {{qn.op2}} </mat-grid-tile>\n                        </ng-template>>\n  \n                        <div *ngIf=\"qn.answer==quizService.answers[i]&&qn.answer==3;  else option3\">\n          <mat-grid-tile  style=\"border:3px solid rgb(10, 180, 247);background-color: green;\">\n               3.  {{qn.op3}}</mat-grid-tile>\n        </div>\n        \n        <ng-template #option3>\n          <mat-grid-tile  style=\"border:3px solid rgb(10, 180, 247);\">\n               3.  {{qn.op3}}</mat-grid-tile>\n        </ng-template>>\n  \n  \n        <div *ngIf=\"qn.answer==quizService.answers[i]&&qn.answer==4;  else option4\">\n                <mat-grid-tile   style=\"border:3px solid rgb(10, 180, 247);background-color: green;\">                          \n                4.\n                {{qn.op4}}</mat-grid-tile>\n              </div>          \n              \n              <ng-template #option4>\n          <mat-grid-tile   style=\"border:3px solid rgb(10, 180, 247);\">                          \n          4. {{qn.op4}}</mat-grid-tile>\n        </ng-template>> \n              \n     \n      </mat-grid-list>\n  </mat-card-content>\n      <mat-card-footer>\n  <div class=\"correct\" *ngIf=\"qn.answer==quizService.answers[i]\">\n          correct answer\n          </div>\n          <div  class=\"Incorrect\" *ngIf=\"quizService.answers[i]!=null&&qn.answer!=quizService.answers[i]\">\n              Incorrect answer, Correct Answer is option : {{qn.answer}}\n              <div>You choose option : {{quizService.answers[i]}}</div>\n              </div>\n              <div  class=\"notAttempt\"*ngIf=\"quizService.answers[i]==null\">\n                 Not attempted Correct Answer is option : {{qn.answer}}\n                  </div>\n  \n  \n  \n      </mat-card-footer>\n  \n  </mat-card>\n  \n  \n  </ng-container>\n  </div>\n  </main>\n  \n  <footer>\n  <app-footer></app-footer>\n  \n  </footer>\n  </div>\n  \n  \n  \n  \n  \n  \n  "

/***/ }),

/***/ "./src/app/result/result.component.ts":
/*!********************************************!*\
  !*** ./src/app/result/result.component.ts ***!
  \********************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../quiz.service */ "./src/quiz.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ResultComponent = /** @class */ (function () {
    function ResultComponent(quizService) {
        this.quizService = quizService;
        this.score = 0;
    }
    ResultComponent.prototype.ngOnInit = function () {
        var i = 0;
        for (var _i = 0, _a = this.quizService.qns; _i < _a.length; _i++) {
            var question = _a[_i];
            if (question.answer == this.quizService.answers[i++])
                this.score++;
        }
    };
    ResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.css */ "./src/app/result/result.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quiz_service__WEBPACK_IMPORTED_MODULE_1__["QuizService"]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/quiz.service.ts":
/*!*****************************!*\
  !*** ./src/quiz.service.ts ***!
  \*****************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var QuizService = /** @class */ (function () {
    function QuizService(http) {
        this.http = http;
        this.seconds = 0;
        this.correctAnswerCount = 0;
        this.answers = new Array(10);
        this.name = "";
    }
    //*****************Http Methods******************************** */
    QuizService.prototype.getQuestions = function () {
        console.log("inside the getquesitons");
        return this.http.get('https://quiz-back-end1997.herokuapp.com/questions');
    };
    QuizService.prototype.displayTimeElapsed = function () {
        return Math.floor(this.seconds / 3600) + ':' + Math.floor((this.seconds / 60) % 60) + ':' + Math.floor(this.seconds % 60);
    };
    QuizService.prototype.getAnswers = function () {
        console.log("inside the getANswers");
        return this.http.get('https://quiz-back-end1997.herokuapp.com/answers');
    };
    QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QuizService);
    return QuizService;
}());



/***/ }),

/***/ "./src/register.service.ts":
/*!*********************************!*\
  !*** ./src/register.service.ts ***!
  \*********************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService.prototype.sendData = function (data) {
        return this.http.post("https://quiz-back-end1997.herokuapp.com/insert", data);
    };
    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\v127p\Quiz7v\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map