(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-offers-offers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/offers/offers.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/offers/offers.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"main_content_div\">\n    <div class=\"upper_div\" [class.ios_test]=\"plt == 'ios'\">\n      <ion-label class=\"heading_lbl\">Latest Offres</ion-label>\n      <ion-label class=\"small_lbl\">Find discount, offres, <br>specoals meals amd more !</ion-label>\n      <ion-label class=\"round_lbl\">20 Restaurants</ion-label>\n      <img src=\"assets/imgs/scooter.png\" class=\"scooter\">\n    </div>\n    <div class=\"lower_div\">\n      <div class=\"card_div\">\n        <div class=\"card\" *ngFor=\"let item of [1,2,3]\">\n          <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/image1.jpg)'\" (click)=\"openMenu()\">\n            <ion-label class=\"time_lbl\">Free chips</ion-label>\n          </div>\n          <ion-label class=\"heading_lbl\" (click)=\"openMenu()\">Hollywood Starz Cafe</ion-label>\n          <div class=\"price_rating\" (click)=\"openMenu()\">\n            <ion-icon name=\"star\" class=\"rating\"></ion-icon>\n            <ion-label class=\"red_lbl\">4.9 (124 ratings)</ion-label>\n            <ion-label class=\"small_lbl\">Cafe - Western Food - $$</ion-label>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<app-customtabs></app-customtabs>");

/***/ }),

/***/ "./src/app/pages/offers/offers-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/offers/offers-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: OffersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageRoutingModule", function() { return OffersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offers.page */ "./src/app/pages/offers/offers.page.ts");




const routes = [
    {
        path: '',
        component: _offers_page__WEBPACK_IMPORTED_MODULE_3__["OffersPage"]
    }
];
let OffersPageRoutingModule = class OffersPageRoutingModule {
};
OffersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OffersPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/offers/offers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/offers/offers.module.ts ***!
  \***********************************************/
/*! exports provided: OffersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPageModule", function() { return OffersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _offers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offers-routing.module */ "./src/app/pages/offers/offers-routing.module.ts");
/* harmony import */ var _offers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offers.page */ "./src/app/pages/offers/offers.page.ts");
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/component.module */ "./src/app/components/component.module.ts");








let OffersPageModule = class OffersPageModule {
};
OffersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _offers_routing_module__WEBPACK_IMPORTED_MODULE_5__["OffersPageRoutingModule"],
            _components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"]
        ],
        declarations: [_offers_page__WEBPACK_IMPORTED_MODULE_6__["OffersPage"]]
    })
], OffersPageModule);



/***/ }),

/***/ "./src/app/pages/offers/offers.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/offers/offers.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ios_test {\n  padding-top: 40px !important;\n}\n\n.main_content_div {\n  width: 100%;\n}\n\n.main_content_div .upper_div {\n  width: 100%;\n  height: 250px;\n  background-color: var(--ion-color-main);\n  padding: 20px;\n  position: relative;\n}\n\n.main_content_div .upper_div .heading_lbl {\n  font-size: 24px;\n  font-family: open-bold;\n  display: block;\n  text-align: left;\n  color: white;\n}\n\n.main_content_div .upper_div .small_lbl {\n  font-size: 12px;\n  color: white;\n  font-family: open-regular;\n  display: block;\n}\n\n.main_content_div .upper_div .round_lbl {\n  background: white;\n  padding: 10px;\n  border-radius: 25px;\n  background: white;\n  padding: 10px;\n  border-radius: 25px;\n  margin-top: 20px;\n  display: block;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n\n.main_content_div .upper_div .scooter {\n  width: 150px;\n  position: absolute;\n  right: 0;\n  bottom: 10px;\n}\n\n.main_content_div .lower_div {\n  width: 100%;\n  background: white;\n  height: 200px;\n  z-index: 99999;\n  margin-top: -20px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 5px;\n  position: absolute;\n}\n\n.main_content_div .lower_div .card_div .card {\n  margin-top: 15px;\n}\n\n.main_content_div .lower_div .card_div .card .back_image {\n  height: 200px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 10px;\n  position: relative;\n}\n\n.main_content_div .lower_div .card_div .card .back_image .time_lbl {\n  padding: 10px;\n  position: absolute;\n  background: var(--ion-color-main);\n  bottom: 15px;\n  right: 15px;\n  border-radius: 25px;\n  font-size: 12px;\n  font-family: open-regular;\n  color: white;\n}\n\n.main_content_div .lower_div .card_div .card .heading_lbl {\n  font-size: 20px;\n  font-family: open-bold;\n  display: block;\n  margin-top: 10px;\n}\n\n.main_content_div .lower_div .card_div .card .price_rating {\n  display: -webkit-box;\n  display: flex;\n  height: 25px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.main_content_div .lower_div .card_div .card .price_rating .rating {\n  color: var(--ion-color-main);\n  font-size: 20px;\n}\n\n.main_content_div .lower_div .card_div .card .price_rating .red_lbl {\n  color: var(--ion-color-main);\n  font-size: 12px;\n  font-family: open-regular;\n}\n\n.main_content_div .lower_div .card_div .card .price_rating .small_lbl {\n  font-size: 12px;\n  color: var(--ion-color-light);\n  font-family: open-regular;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxwaW5vY2hldC9Eb2N1bWVudHMvR2l0SHViL2ljYXJlcy1hcHAtZXhhbWVuL3NyYy9hcHAvcGFnZXMvb2ZmZXJzL29mZmVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL29mZmVycy9vZmZlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7QUNFSjs7QURESTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNHUjs7QUREUTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNHWjs7QUREUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDR1o7O0FERFE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDR1o7O0FEQVE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ0VaOztBRENJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NSOztBREdZO0VBQ0ksZ0JBQUE7QUNEaEI7O0FERWdCO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBcEI7O0FERW9CO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0F4Qjs7QURHZ0I7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNEcEI7O0FER2dCO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNEcEI7O0FERW9CO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0FDQXhCOztBREVvQjtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDQXhCOztBREVvQjtFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNBeEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vZmZlcnMvb2ZmZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb3NfdGVzdHtcbiAgICBwYWRkaW5nLXRvcDogNDBweCAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLnVwcGVyX2RpdntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC5oZWFkaW5nX2xibHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLWJvbGQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLnNtYWxsX2xibHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAucm91bmRfbGJse1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG5cbiAgICAgICAgfVxuICAgICAgICAuc2Nvb3RlcntcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5sb3dlcl9kaXZ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgei1pbmRleDogOTk5OTk7XG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgLmNhcmRfZGl2e1xuICAgICAgICAgICAgLy8gbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIC5jYXJke1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAudGltZV9sYmx7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaGVhZGluZ19sYmx7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcmljZV9yYXRpbmd7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7ICAgICBcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC5yYXRpbmd7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5yZWRfbGJse1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zbWFsbF9sYmx7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0gICAiLCIuaW9zX3Rlc3Qge1xuICBwYWRkaW5nLXRvcDogNDBweCAhaW1wb3J0YW50O1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnVwcGVyX2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC51cHBlcl9kaXYgLmhlYWRpbmdfbGJsIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogb3Blbi1ib2xkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnVwcGVyX2RpdiAuc21hbGxfbGJsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5fY29udGVudF9kaXYgLnVwcGVyX2RpdiAucm91bmRfbGJsIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLnVwcGVyX2RpdiAuc2Nvb3RlciB7XG4gIHdpZHRoOiAxNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgei1pbmRleDogOTk5OTk7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5jYXJkX2RpdiAuY2FyZCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5jYXJkX2RpdiAuY2FyZCAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuY2FyZF9kaXYgLmNhcmQgLmJhY2tfaW1hZ2UgLnRpbWVfbGJsIHtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gIGJvdHRvbTogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuY2FyZF9kaXYgLmNhcmQgLmhlYWRpbmdfbGJsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogb3Blbi1ib2xkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLmNhcmRfZGl2IC5jYXJkIC5wcmljZV9yYXRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5jYXJkX2RpdiAuY2FyZCAucHJpY2VfcmF0aW5nIC5yYXRpbmcge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5jYXJkX2RpdiAuY2FyZCAucHJpY2VfcmF0aW5nIC5yZWRfbGJsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuY2FyZF9kaXYgLmNhcmQgLnByaWNlX3JhdGluZyAuc21hbGxfbGJsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/offers/offers.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/offers/offers.page.ts ***!
  \*********************************************/
/*! exports provided: OffersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersPage", function() { return OffersPage; });
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



let OffersPage = class OffersPage {
    constructor(platform, router) {
        this.platform = platform;
        this.router = router;
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
};
OffersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
OffersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./offers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/offers/offers.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./offers.page.scss */ "./src/app/pages/offers/offers.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], OffersPage);



/***/ })

}]);
//# sourceMappingURL=pages-offers-offers-module-es2015.js.map