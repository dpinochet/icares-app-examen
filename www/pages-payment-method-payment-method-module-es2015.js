(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-method-payment-method-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-method/payment-method.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-method/payment-method.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"header_div\">\n      \n      <ion-buttons slot=\"start\" class=\"btn_back\">\n        <ion-button (click)=\"goBack()\">\n          <img src=\"assets/imgs/back2.png\">\n        </ion-button>\n      </ion-buttons>\n      <ion-label class=\"title\">Payment Methods</ion-label>\n\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    \n    <div class=\"button_div\">\n      <ion-button slot=\"end\" size=\"small\" class=\"add_btn\" (click)=\"goToLogin()\">\n        ADD +\n      </ion-button>\n    </div>\n\n    <div class=\"list_div\">\n      <div class=\"first_div\">\n        <img src=\"assets/imgs/visa_card.png\" class=\"card_image\">\n      </div>\n      <div class=\"second_div\">\n        <ion-label class=\"name_lbl\">Personal</ion-label>\n        <ion-label class=\"small_lbl\">XXXX XXXX XXXX 4242</ion-label>\n      </div>\n\n      <div class=\"action_div\" *ngIf=\"id == 1\">\n        <div class=\"edit\">Edit</div>\n        <div class=\"delete\">Delete</div>\n      </div>\n\n      <ion-buttons slot=\"end\" class=\"btn\">\n        <ion-button (click)=\"clickMenu(1)\">\n          <img src=\"assets/imgs/menu3.png\" class=\"menu_btn\">\n        </ion-button>\n      </ion-buttons>\n    </div>\n\n    <div class=\"list_div\">\n      <div class=\"first_div\">\n        <img src=\"assets/imgs/mastercard.png\" class=\"card_image\">\n      </div>\n      <div class=\"second_div\">\n        <ion-label class=\"name_lbl\">Personal</ion-label>\n        <ion-label class=\"small_lbl\">XXXX XXXX XXXX 4242</ion-label>\n      </div>\n\n      <div class=\"action_div\" *ngIf=\"id == 2\">\n        <div class=\"edit\">Edit</div>\n        <div class=\"delete\">Delete</div>\n      </div>\n\n      <ion-buttons slot=\"end\" class=\"btn\">\n        <ion-button (click)=\"clickMenu(2)\">\n          <img src=\"assets/imgs/menu3.png\" class=\"menu_btn\">\n        </ion-button>\n      </ion-buttons>\n    </div>\n\n  </div>  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/payment-method/payment-method-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/payment-method/payment-method-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: PaymentMethodPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodPageRoutingModule", function() { return PaymentMethodPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payment_method_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-method.page */ "./src/app/pages/payment-method/payment-method.page.ts");




const routes = [
    {
        path: '',
        component: _payment_method_page__WEBPACK_IMPORTED_MODULE_3__["PaymentMethodPage"]
    }
];
let PaymentMethodPageRoutingModule = class PaymentMethodPageRoutingModule {
};
PaymentMethodPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentMethodPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/payment-method/payment-method.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/payment-method/payment-method.module.ts ***!
  \***************************************************************/
/*! exports provided: PaymentMethodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodPageModule", function() { return PaymentMethodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_method_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-method-routing.module */ "./src/app/pages/payment-method/payment-method-routing.module.ts");
/* harmony import */ var _payment_method_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-method.page */ "./src/app/pages/payment-method/payment-method.page.ts");







let PaymentMethodPageModule = class PaymentMethodPageModule {
};
PaymentMethodPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_method_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentMethodPageRoutingModule"]
        ],
        declarations: [_payment_method_page__WEBPACK_IMPORTED_MODULE_6__["PaymentMethodPage"]]
    })
], PaymentMethodPageModule);



/***/ }),

/***/ "./src/app/pages/payment-method/payment-method.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/payment-method/payment-method.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar:last-child {\n  --border-width: 0px;\n}\n\n.header-md:after {\n  background: none;\n}\n\n.header_div {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n}\n\n.header_div .title {\n  color: black;\n  font-family: open-regular;\n}\n\n.header_div .btn_back {\n  position: absolute;\n  left: 16px;\n  width: 35px;\n}\n\n.main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n\n.main_content_div .button_div {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.main_content_div .button_div .add_btn {\n  color: white;\n  --background: var(--ion-color-main);\n  --border-radius: 3px;\n  --background-activated:var(--ion-color-main);\n}\n\n.main_content_div .list_div {\n  border-bottom: 1px solid #E8E8E8;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  position: relative;\n}\n\n.main_content_div .list_div .first_div .card_image {\n  width: 35px;\n}\n\n.main_content_div .list_div .second_div {\n  margin-left: 20px;\n}\n\n.main_content_div .list_div .second_div .name_lbl {\n  font-family: open-regular;\n  display: block;\n}\n\n.main_content_div .list_div .second_div .small_lbl {\n  font-family: open-regular;\n  display: block;\n  color: var(--ion-color-light);\n}\n\n.main_content_div .list_div .head_lbl {\n  display: block;\n  font-family: open-bold;\n}\n\n.main_content_div .list_div .small_lbl {\n  display: block;\n  font-family: open-regular;\n  font-size: 14px;\n}\n\n.main_content_div .list_div .action_div {\n  width: 80px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);\n  position: absolute;\n  right: 0;\n  top: 40px;\n  border-radius: 5px;\n  z-index: 99999;\n  text-align: center;\n  background-color: white;\n}\n\n.main_content_div .list_div .action_div .edit {\n  color: green;\n  font-family: open-regular;\n  font-size: 12px;\n  border-bottom: 1px solid #E8E8E8;\n  height: 30px;\n  width: 100;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.main_content_div .list_div .action_div .delete {\n  color: var(--ion-color-main);\n  font-family: open-regular;\n  font-size: 12px;\n  height: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.main_content_div .list_div .btn {\n  position: absolute;\n  top: 10px;\n  right: 0;\n}\n\n.main_content_div .list_div .menu_btn {\n  width: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxwaW5vY2hldC9Eb2N1bWVudHMvR2l0SHViL2ljYXJlcy1hcHAtZXhhbWVuL3NyYy9hcHAvcGFnZXMvcGF5bWVudC1tZXRob2QvcGF5bWVudC1tZXRob2QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7RUFFQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUk7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUNFUjs7QURDSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNDUjs7QURFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0k7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtBQ0NSOztBRENRO0VBQ0ksWUFBQTtFQUNBLG1DQUFBO0VBQ0Esb0JBQUE7RUFDQSw0Q0FBQTtBQ0NaOztBREdJO0VBQ0ksZ0NBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7QUNEUjs7QURJWTtFQUNJLFdBQUE7QUNGaEI7O0FES1E7RUFDSSxpQkFBQTtBQ0haOztBRElZO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FDRmhCOztBRElZO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7QUNGaEI7O0FETVE7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7QUNKWjs7QURNUTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNKWjs7QURPUTtFQUNJLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDTFo7O0FET1k7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDTGhCOztBRE9ZO0VBQ0ksNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNMaEI7O0FEU1E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDUFo7O0FEU1E7RUFDSSxXQUFBO0FDUFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXltZW50LW1ldGhvZC9wYXltZW50LW1ldGhvZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xufVxuLmhlYWRlci1tZDphZnRlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5oZWFkZXJfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLnRpdGxle1xuICAgICAgICBjb2xvcjogYmxhY2s7IFxuICAgICAgICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuICAgIH1cblxuICAgIC5idG5fYmFjayB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMTZweDtcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgfVxufVxuLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIC5idXR0b25fZGl2e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgICAuYWRkX2J0bntcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZCA6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1c1x0OiAzcHg7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkIDp2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubGlzdF9kaXZ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRThFOEU4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAuZmlyc3RfZGl2e1xuICAgICAgICAgICAgLmNhcmRfaW1hZ2V7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnNlY29uZF9kaXZ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgIC5uYW1lX2xibHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc21hbGxfbGJse1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaGVhZF9sYmx7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLWJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLnNtYWxsX2xibHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfSBcblxuICAgICAgICAuYWN0aW9uX2RpdntcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjUpO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB0b3A6IDQwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5OTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICAgICAuZWRpdHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFOEU4RTg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDA7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRlbGV0ZXtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5idG57XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgfVxuICAgICAgICAubWVudV9idG57XG4gICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbn1cblxuLmhlYWRlci1tZDphZnRlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5oZWFkZXJfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyX2RpdiAudGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG59XG4uaGVhZGVyX2RpdiAuYnRuX2JhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE2cHg7XG4gIHdpZHRoOiAzNXB4O1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJ1dHRvbl9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5idXR0b25fZGl2IC5hZGRfYnRuIHtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6dmFyKC0taW9uLWNvbG9yLW1haW4pO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RfZGl2IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFOEU4RTg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RfZGl2IC5maXJzdF9kaXYgLmNhcmRfaW1hZ2Uge1xuICB3aWR0aDogMzVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0X2RpdiAuc2Vjb25kX2RpdiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RfZGl2IC5zZWNvbmRfZGl2IC5uYW1lX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RfZGl2IC5zZWNvbmRfZGl2IC5zbWFsbF9sYmwge1xuICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdF9kaXYgLmhlYWRfbGJsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLWJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdF9kaXYgLnNtYWxsX2xibCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdF9kaXYgLmFjdGlvbl9kaXYge1xuICB3aWR0aDogODBweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgei1pbmRleDogOTk5OTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdF9kaXYgLmFjdGlvbl9kaXYgLmVkaXQge1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFOEU4RTg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDEwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdF9kaXYgLmFjdGlvbl9kaXYgLmRlbGV0ZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0X2RpdiAuYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RfZGl2IC5tZW51X2J0biB7XG4gIHdpZHRoOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/payment-method/payment-method.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/payment-method/payment-method.page.ts ***!
  \*************************************************************/
/*! exports provided: PaymentMethodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentMethodPage", function() { return PaymentMethodPage; });
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


let PaymentMethodPage = class PaymentMethodPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.id = 0;
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
    clickMenu(value) {
        if (value == this.id) {
            this.id = 0;
        }
        else {
            this.id = value;
        }
    }
    goToLogin() {
    }
};
PaymentMethodPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
PaymentMethodPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-method',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment-method.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-method/payment-method.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment-method.page.scss */ "./src/app/pages/payment-method/payment-method.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], PaymentMethodPage);



/***/ })

}]);
//# sourceMappingURL=pages-payment-method-payment-method-module-es2015.js.map