(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-history-order-history-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-history/order-history.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-history/order-history.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"header_div\">\n      \n      <ion-buttons slot=\"start\" class=\"btn_back\">\n        <ion-button (click)=\"goBack()\">\n          <img src=\"assets/imgs/back2.png\">\n        </ion-button>\n      </ion-buttons>\n      <ion-label class=\"title\">Order History</ion-label>\n\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"card\" *ngFor=\"let item of [1,2,3,4,5]\">\n      <div class=\"image_div\" [style.backgroundImage]=\"'url(assets/imgs/image2.jpg)'\"></div>\n      <div class=\"desc_div\">\n        <ion-label class=\"heading_lbl\">Super Good Cafe</ion-label>\n        <ion-label class=\"small_lbl\">Cafe - Western Food - $$</ion-label>\n        <ion-icon name=\"star\" class=\"rating\"></ion-icon>\n        <ion-label class=\"red_lbl\"><span class=\"red_lbl\">4.9</span> (124 rating)</ion-label>\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/order-history/order-history-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/order-history/order-history-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: OrderHistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryPageRoutingModule", function() { return OrderHistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _order_history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-history.page */ "./src/app/pages/order-history/order-history.page.ts");




const routes = [
    {
        path: '',
        component: _order_history_page__WEBPACK_IMPORTED_MODULE_3__["OrderHistoryPage"]
    }
];
let OrderHistoryPageRoutingModule = class OrderHistoryPageRoutingModule {
};
OrderHistoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderHistoryPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/order-history/order-history.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/order-history/order-history.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryPageModule", function() { return OrderHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _order_history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-history-routing.module */ "./src/app/pages/order-history/order-history-routing.module.ts");
/* harmony import */ var _order_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-history.page */ "./src/app/pages/order-history/order-history.page.ts");







let OrderHistoryPageModule = class OrderHistoryPageModule {
};
OrderHistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_history_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderHistoryPageRoutingModule"]
        ],
        declarations: [_order_history_page__WEBPACK_IMPORTED_MODULE_6__["OrderHistoryPage"]]
    })
], OrderHistoryPageModule);



/***/ }),

/***/ "./src/app/pages/order-history/order-history.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/order-history/order-history.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar:last-child {\n  --border-width: 0px;\n}\n\n.header-md:after {\n  background: none;\n}\n\n.header_div {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n}\n\n.header_div .title {\n  color: black;\n  font-family: open-regular;\n}\n\n.header_div .btn_back {\n  position: absolute;\n  left: 16px;\n  width: 35px;\n}\n\n.main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n\n.main_content_div .card {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);\n  margin-bottom: 20px;\n  position: relative;\n}\n\n.main_content_div .card .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100px;\n  height: 100px;\n}\n\n.main_content_div .card .desc_div {\n  margin-left: 20px;\n}\n\n.main_content_div .card .desc_div .heading_lbl {\n  font-size: 20px;\n  font-family: open-bold;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div .card .desc_div .small_lbl {\n  font-size: 12px;\n  color: var(--ion-color-light);\n  font-family: open-regular;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div .card .desc_div .rating {\n  color: var(--ion-color-main);\n  font-size: 15px;\n}\n\n.main_content_div .card .desc_div .red_lbl {\n  color: var(--ion-color-main);\n  font-size: 12px;\n  font-family: open-regular;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxwaW5vY2hldC9Eb2N1bWVudHMvR2l0SHViL2ljYXJlcy1hcHAtZXhhbWVuL3NyYy9hcHAvcGFnZXMvb3JkZXItaGlzdG9yeS9vcmRlci1oaXN0b3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3JkZXItaGlzdG9yeS9vcmRlci1oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksV0FBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBSTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQ0VSOztBRENJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NSOztBREdBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNBSjs7QURFSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBUjs7QURFUTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNBWjs7QURFUTtFQUNJLGlCQUFBO0FDQVo7O0FEQ1k7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDaEI7O0FEQ1k7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NoQjs7QURDWTtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtBQ0NoQjs7QURDWTtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvb3JkZXItaGlzdG9yeS9vcmRlci1oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG59XG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLmhlYWRlcl9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXG4gICAgLnRpdGxle1xuICAgICAgICBjb2xvcjogYmxhY2s7IFxuICAgICAgICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuICAgIH1cblxuICAgIC5idG5fYmFjayB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMTZweDtcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgfVxufVxuXG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgLmNhcmR7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAuaW1hZ2VfZGl2e1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgfVxuICAgICAgICAuZGVzY19kaXZ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgIC5oZWFkaW5nX2xibHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNtYWxsX2xibHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdGluZ3tcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZWRfbGJse1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSAgIFxuICAgICAgICB9XG4gICAgfVxufSIsImlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xufVxuXG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmhlYWRlcl9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZWFkZXJfZGl2IC50aXRsZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbn1cbi5oZWFkZXJfZGl2IC5idG5fYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTZweDtcbiAgd2lkdGg6IDM1cHg7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkIC5pbWFnZV9kaXYge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkIC5kZXNjX2RpdiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmQgLmRlc2NfZGl2IC5oZWFkaW5nX2xibCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZCAuZGVzY19kaXYgLnNtYWxsX2xibCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmQgLmRlc2NfZGl2IC5yYXRpbmcge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZCAuZGVzY19kaXYgLnJlZF9sYmwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/order-history/order-history.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/order-history/order-history.page.ts ***!
  \***********************************************************/
/*! exports provided: OrderHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryPage", function() { return OrderHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/


let OrderHistoryPage = class OrderHistoryPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
};
OrderHistoryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
OrderHistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-history.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-history/order-history.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-history.page.scss */ "./src/app/pages/order-history/order-history.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], OrderHistoryPage);



/***/ })

}]);
//# sourceMappingURL=pages-order-history-order-history-module-es2015.js.map