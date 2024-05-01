(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"div_searchbar\">\n      <ion-searchbar animated=\"true\" mode=\"ios\" placeholder=\"Search Food\" (ionChange)=\"onSearchChange($event)\"\n        [debounce]=\"250\" class=\"search_bar\"></ion-searchbar>\n      <img src=\"assets/imgs/menu.png\" class=\"menu_icon\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\" [class.ios_test]=\"plt == 'ios'\">\n    <!-- <div class=\"div_searchbar\">\n      <ion-searchbar animated=\"true\" mode=\"ios\" placeholder=\"Search Food\" (ionChange)=\"onSearchChange($event)\" [debounce]=\"250\" class=\"search_bar\"></ion-searchbar>\n      <img src=\"assets/imgs/menu.png\" class=\"menu_icon\">\n    </div> -->\n\n    <div class=\"heading\">\n      <ion-label class=\"heading_lbl\">Popular Choices</ion-label>\n      <ion-label class=\"small_lbl\">Show All</ion-label>\n    </div>\n\n    <div class=\"slider_div\">\n      <ion-slides [options]=\"slideOpts\">\n\n        <ion-slide *ngFor=\"let item of [1,2,3]\">\n          <div class=\"card\" (click)=\"openMenu()\">\n            <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/image1.jpg)'\">\n              <ion-label class=\"time_lbl\">20 - 30 mins</ion-label>\n            </div>\n            <ion-label class=\"heading_lbl\">Hollywood Starz Cafe</ion-label>\n            <div class=\"price_rating\">\n              <ion-label class=\"small_lbl\">Cafe - Western Food - $$</ion-label>\n              <ion-icon name=\"star\" class=\"rating\"></ion-icon>\n              <ion-label class=\"red_lbl\">4.9</ion-label>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <div class=\"card_div\">\n      <div class=\"heading\">\n        <ion-label class=\"heading_lbl\">New Restaurants</ion-label>\n        <ion-label class=\"small_lbl\" (click)=\"openMenu()\">Show All</ion-label>\n      </div>\n\n      <div class=\"card\" *ngFor=\"let item of [1,2,3,4]\">\n        <div class=\"image_div\" (click)=\"openMenu()\" [style.backgroundImage]=\"'url(assets/imgs/image2.jpg)'\"></div>\n        <div class=\"desc_div\" (click)=\"openMenu()\">\n          <ion-label class=\"heading_lbl\">Super Good Cafe</ion-label>\n          <ion-label class=\"small_lbl\">Cafe - Western Food - $$</ion-label>\n          <ion-icon name=\"star\" class=\"rating\"></ion-icon>\n          <ion-label class=\"red_lbl\"><span class=\"red_lbl\">4.9</span> (124 rating)</ion-label>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<app-customtabs></app-customtabs>");

/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var src_app_components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/component.module */ "./src/app/components/component.module.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            src_app_components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar:last-child {\n  --border-width: 0px;\n}\n\n.header-md:after {\n  background: none;\n}\n\n.div_searchbar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 8px;\n}\n\n.div_searchbar .search_bar {\n  padding: 0px;\n  width: 90%;\n}\n\n.div_searchbar .menu_icon {\n  width: 20px;\n  height: 20px;\n}\n\n.heading {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 10px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.heading .heading_lbl {\n  font-size: 20px;\n  font-family: open-bold;\n  display: block;\n  text-align: left;\n  color: var(--ion-color-main);\n}\n\n.heading .small_lbl {\n  font-size: 12px;\n  color: var(--ion-color-light);\n  font-family: open-regular;\n}\n\n.main_content_div {\n  padding: 16px;\n}\n\n.main_content_div .heading {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 10px;\n}\n\n.main_content_div .heading .heading_lbl {\n  font-size: 20px;\n  font-family: open-bold;\n  display: block;\n  text-align: left;\n  color: var(--ion-color-main);\n}\n\n.main_content_div .heading .small_lbl {\n  font-size: 12px;\n  color: var(--ion-color-light);\n  font-family: open-regular;\n}\n\n.main_content_div .slider_div .card {\n  margin-top: 15px;\n}\n\n.main_content_div .slider_div .card .back_image {\n  height: 200px;\n  width: 250px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 10px;\n  position: relative;\n}\n\n.main_content_div .slider_div .card .back_image .time_lbl {\n  padding: 10px;\n  position: absolute;\n  background: white;\n  bottom: 15px;\n  right: 15px;\n  border-radius: 25px;\n  font-size: 12px;\n  font-family: open-regular;\n}\n\n.main_content_div .slider_div .card .heading_lbl {\n  font-size: 20px;\n  font-family: open-bold;\n  display: block;\n  margin-top: 10px;\n  text-align: left;\n}\n\n.main_content_div .slider_div .card .price_rating {\n  display: -webkit-box;\n  display: flex;\n  height: 25px;\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n\n.main_content_div .slider_div .card .price_rating .rating {\n  color: var(--ion-color-main);\n  font-size: 15px;\n  margin-left: 10px;\n}\n\n.main_content_div .slider_div .card .price_rating .red_lbl {\n  color: var(--ion-color-main);\n  font-size: 12px;\n  font-family: open-regular;\n}\n\n.main_content_div .slider_div .card .price_rating .small_lbl {\n  font-size: 12px;\n  color: var(--ion-color-light);\n  font-family: open-regular;\n}\n\n.main_content_div .card_div .heading {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 10px;\n}\n\n.main_content_div .card_div .heading .heading_lbl {\n  font-size: 20px;\n  font-family: open-bold;\n  display: block;\n  text-align: left;\n  color: var(--ion-color-main);\n}\n\n.main_content_div .card_div .heading .small_lbl {\n  font-size: 12px;\n  color: var(--ion-color-light);\n  font-family: open-regular;\n}\n\n.main_content_div .card_div .card {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n\n.main_content_div .card_div .card .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100px;\n  height: 100px;\n}\n\n.main_content_div .card_div .card .desc_div {\n  margin-left: 20px;\n}\n\n.main_content_div .card_div .card .desc_div .heading_lbl {\n  font-size: 20px;\n  font-family: open-bold;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div .card_div .card .desc_div .small_lbl {\n  font-size: 12px;\n  color: var(--ion-color-light);\n  font-family: open-regular;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div .card_div .card .desc_div .rating {\n  color: var(--ion-color-main);\n  font-size: 15px;\n}\n\n.main_content_div .card_div .card .desc_div .red_lbl {\n  color: var(--ion-color-main);\n  font-size: 12px;\n  font-family: open-regular;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxwaW5vY2hldC9Eb2N1bWVudHMvR2l0SHViL2ljYXJlcy1hcHAtZXhhbWVuL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLG1CQUFBO0FDRko7O0FESUE7RUFDSSxnQkFBQTtBQ0RKOztBREdBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURFSTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FDQVI7O0FERUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0FSOztBRElBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FER0k7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ0RSOztBREdJO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUNEUjs7QURJQTtFQUNJLGFBQUE7QUNESjs7QURrQkk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxtQkFBQTtBQ2hCUjs7QURrQlE7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ2hCWjs7QURrQlE7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQ2hCWjs7QURxQlE7RUFDSSxnQkFBQTtBQ25CWjs7QURvQlk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNsQmhCOztBRG9CZ0I7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNsQnBCOztBRHFCWTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDbkJoQjs7QURxQlk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ25CaEI7O0FEb0JnQjtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDbEJwQjs7QURvQmdCO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNsQnBCOztBRG9CZ0I7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQ2xCcEI7O0FEeUJRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUN2Qlo7O0FEeUJZO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUN2QmhCOztBRHlCWTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDdkJoQjs7QUQwQlE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNkNBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDeEJaOztBRDBCWTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUN4QmhCOztBRDBCWTtFQUNJLGlCQUFBO0FDeEJoQjs7QUR5QmdCO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDdkJwQjs7QUR5QmdCO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUN2QnBCOztBRHlCZ0I7RUFDSSw0QkFBQTtFQUNBLGVBQUE7QUN2QnBCOztBRHlCZ0I7RUFDSSw0QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ3ZCcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmlvc190ZXN0e1xuLy8gICAgIHBhZGRpbmctdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XG4vLyB9XG5pb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xufVxuLmhlYWRlci1tZDphZnRlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5kaXZfc2VhcmNoYmFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuXG4gICAgLnNlYXJjaF9iYXJ7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG4gICAgLm1lbnVfaWNvbntcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICB9XG59XG5cbi5oZWFkaW5ne1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuXG4gICAgLmhlYWRpbmdfbGJse1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLWJvbGQ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgIH1cbiAgICAuc21hbGxfbGJse1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuICAgIH1cbn1cbi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAvLyAuZGl2X3NlYXJjaGJhcntcbiAgICAvLyAgICAgZGlzcGxheTogZmxleDtcbiAgICAvLyAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAvLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC8vICAgICAuc2VhcmNoX2JhcntcbiAgICAvLyAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAvLyAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgLm1lbnVfaWNvbntcbiAgICAvLyAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgIC8vICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLmhlYWRpbmd7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAgICAgLmhlYWRpbmdfbGJse1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gICAgICAgIH1cbiAgICAgICAgLnNtYWxsX2xibHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zbGlkZXJfZGl2e1xuICAgICAgICAuY2FyZHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICAuYmFja19pbWFnZXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAgICAgLnRpbWVfbGJse1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmhlYWRpbmdfbGJse1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogb3Blbi1ib2xkO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wcmljZV9yYXRpbmd7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDsgICAgIFxuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDs7ICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAucmF0aW5ne1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmVkX2xibHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNtYWxsX2xibHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FyZF9kaXZ7XG4gICAgICAgIC5oZWFkaW5ne1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICAgICAgICAuaGVhZGluZ19sYmx7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLWJvbGQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNtYWxsX2xibHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuY2FyZHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuXG4gICAgICAgICAgICAuaW1hZ2VfZGl2e1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXNjX2RpdntcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAuaGVhZGluZ19sYmx7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zbWFsbF9sYmx7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmF0aW5ne1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yZWRfbGJse1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbn1cblxuLmhlYWRlci1tZDphZnRlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5kaXZfc2VhcmNoYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG4uZGl2X3NlYXJjaGJhciAuc2VhcmNoX2JhciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDkwJTtcbn1cbi5kaXZfc2VhcmNoYmFyIC5tZW51X2ljb24ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cbi5oZWFkaW5nIC5oZWFkaW5nX2xibCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG59XG4uaGVhZGluZyAuc21hbGxfbGJsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmhlYWRpbmcgLmhlYWRpbmdfbGJsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogb3Blbi1ib2xkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWFkaW5nIC5zbWFsbF9sYmwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xufVxuLm1haW5fY29udGVudF9kaXYgLnNsaWRlcl9kaXYgLmNhcmQge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnNsaWRlcl9kaXYgLmNhcmQgLmJhY2tfaW1hZ2Uge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnNsaWRlcl9kaXYgLmNhcmQgLmJhY2tfaW1hZ2UgLnRpbWVfbGJsIHtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm90dG9tOiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xufVxuLm1haW5fY29udGVudF9kaXYgLnNsaWRlcl9kaXYgLmNhcmQgLmhlYWRpbmdfbGJsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogb3Blbi1ib2xkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zbGlkZXJfZGl2IC5jYXJkIC5wcmljZV9yYXRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLm1haW5fY29udGVudF9kaXYgLnNsaWRlcl9kaXYgLmNhcmQgLnByaWNlX3JhdGluZyAucmF0aW5nIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zbGlkZXJfZGl2IC5jYXJkIC5wcmljZV9yYXRpbmcgLnJlZF9sYmwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVyX2RpdiAuY2FyZCAucHJpY2VfcmF0aW5nIC5zbWFsbF9sYmwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAuaGVhZGluZyAuaGVhZGluZ19sYmwge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLWJvbGQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5oZWFkaW5nIC5zbWFsbF9sYmwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5jYXJkIC5pbWFnZV9kaXYge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAuY2FyZCAuZGVzY19kaXYge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAuY2FyZCAuZGVzY19kaXYgLmhlYWRpbmdfbGJsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogb3Blbi1ib2xkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAuY2FyZCAuZGVzY19kaXYgLnNtYWxsX2xibCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5jYXJkIC5kZXNjX2RpdiAucmF0aW5nIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5jYXJkIC5kZXNjX2RpdiAucmVkX2xibCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/



let HomePage = class HomePage {
    constructor(platform, router) {
        this.platform = platform;
        this.router = router;
        this.slideOpts = {
            slidesPerView: 1.2,
        };
        if (this.platform.is('ios')) {
            this.plt = 'ios';
        }
        else {
            this.plt = 'android';
        }
    }
    ngOnInit() {
    }
    openMenu() {
        this.router.navigate(['product-list']);
    }
    onSearchChange(event) {
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map