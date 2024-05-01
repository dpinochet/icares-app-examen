(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-detail-account-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-detail/account-detail.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-detail/account-detail.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"main_content_div\" [class.ios_test]=\"plt == 'ios'\">\n    \n    <div class=\"profile_div\">\n      <div class=\"first\">\n        <div class=\"user_image\" [style.backgroundImage] = \"'url(assets/imgs/user.jpg)'\"></div>\n      </div>\n      <div class=\"second\">\n        <ion-label class=\"bold_lbl\">Kelly Chan</ion-label>\n        <ion-label class=\"small_lbl\">kelly@gmail.com</ion-label>\n      </div>\n    </div>\n\n    <div class=\"question_div\">\n      <div class=\"list_div\" (click)=\"goToUserProfile()\">\n        <ion-label>Profile</ion-label>\n        <img src=\"assets/imgs/next.png\" slot=\"end\" style=\"width: 10px;\">\n      </div>\n\n      <div class=\"list_div\" (click)=\"goToPaymentMethod()\">\n        <ion-label>Payment Method</ion-label>\n        <img src=\"assets/imgs/next.png\" slot=\"end\" style=\"width: 10px;\">\n      </div>\n\n      <div class=\"list_div\" (click)=\"goToOrderHistory()\">\n        <ion-label>Order History</ion-label>\n        <img src=\"assets/imgs/next.png\" slot=\"end\" style=\"width: 10px;\">\n      </div>\n\n      <div class=\"list_div\" (click)=\"goToAddressBook()\">\n        <ion-label>Delivery Address</ion-label>\n        <img src=\"assets/imgs/next.png\" slot=\"end\" style=\"width: 10px;\">\n      </div>\n\n      <div class=\"list_div\" (click)=\"goToSettings()\">\n        <ion-label>Settings</ion-label>\n        <img src=\"assets/imgs/next.png\" slot=\"end\" style=\"width: 10px;\">\n      </div>\n\n      <div class=\"list_div\" (click)=\"goToAbout()\">\n        <ion-label>About us</ion-label>\n        <img src=\"assets/imgs/next.png\" slot=\"end\" style=\"width: 10px;\">\n      </div>\n\n      <div class=\"list_div\" (click)=\"goToSupport()\">\n        <ion-label>Support Center</ion-label>\n        <img src=\"assets/imgs/next.png\" slot=\"end\" style=\"width: 10px;\">\n      </div>\n    </div>\n\n  </div>\n</ion-content>\n<app-customtabs></app-customtabs>");

/***/ }),

/***/ "./src/app/pages/account-detail/account-detail-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/account-detail/account-detail-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AccountDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailPageRoutingModule", function() { return AccountDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _account_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-detail.page */ "./src/app/pages/account-detail/account-detail.page.ts");




const routes = [
    {
        path: '',
        component: _account_detail_page__WEBPACK_IMPORTED_MODULE_3__["AccountDetailPage"]
    }
];
let AccountDetailPageRoutingModule = class AccountDetailPageRoutingModule {
};
AccountDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/account-detail/account-detail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/account-detail/account-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: AccountDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailPageModule", function() { return AccountDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _account_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-detail-routing.module */ "./src/app/pages/account-detail/account-detail-routing.module.ts");
/* harmony import */ var _account_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-detail.page */ "./src/app/pages/account-detail/account-detail.page.ts");
/* harmony import */ var src_app_components_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/component.module */ "./src/app/components/component.module.ts");








let AccountDetailPageModule = class AccountDetailPageModule {
};
AccountDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _account_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountDetailPageRoutingModule"],
            src_app_components_component_module__WEBPACK_IMPORTED_MODULE_7__["ComponentModule"]
        ],
        declarations: [_account_detail_page__WEBPACK_IMPORTED_MODULE_6__["AccountDetailPage"]]
    })
], AccountDetailPageModule);



/***/ }),

/***/ "./src/app/pages/account-detail/account-detail.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/account-detail/account-detail.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ios_test {\n  padding-top: 40px !important;\n  background: #FAFAFA;\n}\n\n.main_content_div {\n  width: 100%;\n}\n\n.main_content_div .profile_div {\n  background: #FAFAFA;\n  height: 200px;\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.main_content_div .profile_div .first {\n  width: 150px;\n}\n\n.main_content_div .profile_div .first .user_image {\n  height: 100px;\n  width: 100px;\n  background-position: center;\n  background-size: cover;\n  border-radius: 100%;\n  background-repeat: no-repeat;\n}\n\n.main_content_div .profile_div .second {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-left: 20px;\n}\n\n.main_content_div .profile_div .second .bold_lbl {\n  font-family: open-bold;\n  font-size: 16px;\n}\n\n.main_content_div .profile_div .second .small_lbl {\n  font-family: open-regular;\n  color: var(--ion-color-light);\n  font-size: 12px;\n}\n\n.main_content_div .question_div {\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-top: 25px;\n}\n\n.main_content_div .question_div .list_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  height: 50px;\n  -webkit-box-align: center;\n          align-items: center;\n  border-bottom: 1px solid #E8E8E8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxwaW5vY2hldC9Eb2N1bWVudHMvR2l0SHViL2ljYXJlcy1hcHAtZXhhbWVuL3NyYy9hcHAvcGFnZXMvYWNjb3VudC1kZXRhaWwvYWNjb3VudC1kZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hY2NvdW50LWRldGFpbC9hY2NvdW50LWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0FDRUo7O0FEREk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNHUjs7QURGUTtFQUNJLFlBQUE7QUNJWjs7QURIWTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUNLaEI7O0FERlE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsaUJBQUE7QUNJWjs7QURIWTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtBQ0toQjs7QURIWTtFQUNJLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDS2hCOztBREFJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDRVI7O0FERFE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQ0FBQTtBQ0daIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjb3VudC1kZXRhaWwvYWNjb3VudC1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvc190ZXN0e1xuICAgIHBhZGRpbmctdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI0ZBRkFGQTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5wcm9maWxlX2RpdntcbiAgICAgICAgYmFja2dyb3VuZDogI0ZBRkFGQTtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgICAgLmZpcnN0e1xuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgLnVzZXJfaW1hZ2V7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zZWNvbmR7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAuYm9sZF9sYmx7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc21hbGxfbGJse1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnF1ZXN0aW9uX2RpdntcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICAubGlzdF9kaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U4RThFODtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIuaW9zX3Rlc3Qge1xuICBwYWRkaW5nLXRvcDogNDBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnByb2ZpbGVfZGl2IHtcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5wcm9maWxlX2RpdiAuZmlyc3Qge1xuICB3aWR0aDogMTUwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucHJvZmlsZV9kaXYgLmZpcnN0IC51c2VyX2ltYWdlIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucHJvZmlsZV9kaXYgLnNlY29uZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5wcm9maWxlX2RpdiAuc2Vjb25kIC5ib2xkX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLWJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5wcm9maWxlX2RpdiAuc2Vjb25kIC5zbWFsbF9sYmwge1xuICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnF1ZXN0aW9uX2RpdiB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5xdWVzdGlvbl9kaXYgLmxpc3RfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRThFOEU4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/account-detail/account-detail.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/account-detail/account-detail.page.ts ***!
  \*************************************************************/
/*! exports provided: AccountDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailPage", function() { return AccountDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/



let AccountDetailPage = class AccountDetailPage {
    constructor(router, platform) {
        this.router = router;
        this.platform = platform;
        this.plt = this.platform.is('android') ? 'android' : 'ios';
    }
    ngOnInit() {
    }
    goToAddressBook() {
        this.router.navigate(['/address-book']);
    }
    goToSupport() {
        this.router.navigate(['/support']);
    }
    goToAbout() {
        this.router.navigate(['/about']);
    }
    goToUserProfile() {
        this.router.navigate(['/user-profile']);
    }
    goToPaymentMethod() {
        this.router.navigate(['/payment-method']);
    }
    goToOrderHistory() {
        this.router.navigate(['/order-history']);
    }
    goToSettings() {
        this.router.navigate(['/settings']);
    }
};
AccountDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
AccountDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account-detail/account-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account-detail.page.scss */ "./src/app/pages/account-detail/account-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
], AccountDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-account-detail-account-detail-module-es2015.js.map