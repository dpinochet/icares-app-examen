(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"main_content_div\" [class.ios_test]=\"plt == 'ios'\">\n\n    <div class=\"upper_div\">\n      <img src=\"assets/imgs/back2.png\" class=\"back_arrow\" (click)=\"goBack()\">\n\n      <div class=\"content_div\">\n        <ion-label class=\"head_lbl\">Log in to your<br> Account</ion-label>\n\n        <div class=\"div_form\">\n          <ion-input type=\"text\" class=\"ip\" placeholder=\"Email\"></ion-input>\n          <ion-input type=\"text\" class=\"ip\" placeholder=\"Password\"></ion-input>\n          <ion-label class=\"forgot_lbl\" (click)=\"goToForgot()\">Forgot ?</ion-label>\n        </div>\n\n        <ion-button (click)=\"goToHome()\" expand=\"full\" shape=\"round\" class=\"red_btn\">\n          Log in\n        </ion-button>\n      </div>\n    </div>\n\n    <div class=\"lower_div\">\n      <ion-label class=\"bottom_lbl\" (click)=\"goToRegister()\">Don't have an account ? <span class=\"red_lbl\">SignUp</span>\n      </ion-label>\n    </div>\n    \n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ios_test {\n  padding-top: 40px !important;\n}\n\n.main_content_div {\n  width: 100%;\n  padding: 20px;\n  height: 100%;\n  background-color: #FAFAFA;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.main_content_div .upper_div .back_arrow {\n  width: 20px;\n}\n\n.main_content_div .upper_div .content_div {\n  padding: 15px;\n}\n\n.main_content_div .upper_div .content_div .head_lbl {\n  color: var(--ion-color-main);\n  font-size: 24px;\n  font-weight: bold;\n  display: block;\n  margin-top: 5px;\n  font-family: open-bold;\n}\n\n.main_content_div .upper_div .content_div .div_form {\n  margin-top: 40px;\n}\n\n.main_content_div .upper_div .content_div .div_form .ip {\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 25px;\n  margin-top: 10px;\n  --padding-start: 15px;\n  height: 40px;\n  background: white;\n}\n\n.main_content_div .upper_div .content_div .div_form .forgot_lbl {\n  color: var(--ion-color-main);\n  margin-top: 15px;\n  display: block;\n  float: right;\n  margin-bottom: 10px;\n  font-family: open-regular;\n}\n\n.main_content_div .upper_div .content_div .red_btn {\n  --background: var(--ion-color-main);\n  height: 40px;\n  --background-activated: var(--ion-color-main);\n  margin-top: 30px;\n}\n\n.main_content_div .lower_div .bottom_lbl {\n  display: block;\n  text-align: center;\n}\n\n.main_content_div .lower_div .bottom_lbl .red_lbl {\n  color: var(--ion-color-main);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxwaW5vY2hldC9Eb2N1bWVudHMvR2l0SHViL2ljYXJlcy1hcHAtZXhhbWVuL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDRUo7O0FEQ1E7RUFDSSxXQUFBO0FDQ1o7O0FERVE7RUFDSSxhQUFBO0FDQVo7O0FERVk7RUFDSSw0QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNBaEI7O0FER1k7RUFDSSxnQkFBQTtBQ0RoQjs7QURFZ0I7RUFDSSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0FwQjs7QURFZ0I7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQXBCOztBRElZO0VBQ0ksbUNBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQkFBQTtBQ0ZoQjs7QURPUTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0xaOztBRE1ZO0VBQ0ksNEJBQUE7QUNKaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9zX3Rlc3R7XG4gICAgcGFkZGluZy10b3A6IDQwcHggIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIC51cHBlcl9kaXZ7XG4gICAgICAgIC5iYWNrX2Fycm93e1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLmNvbnRlbnRfZGl2e1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICBcbiAgICAgICAgICAgIC5oZWFkX2xibHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAuZGl2X2Zvcm17XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgICAgICAgICAuaXB7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0IDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZvcmdvdF9sYmx7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yIDogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnJlZF9idG57XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kIDogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkIDogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxvd2VyX2RpdntcbiAgICAgICAgLmJvdHRvbV9sYmx7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIC5yZWRfbGJse1xuICAgICAgICAgICAgICAgIGNvbG9yIDogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxufSIsIi5pb3NfdGVzdCB7XG4gIHBhZGRpbmctdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1haW5fY29udGVudF9kaXYgLnVwcGVyX2RpdiAuYmFja19hcnJvdyB7XG4gIHdpZHRoOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnVwcGVyX2RpdiAuY29udGVudF9kaXYge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnVwcGVyX2RpdiAuY29udGVudF9kaXYgLmhlYWRfbGJsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC51cHBlcl9kaXYgLmNvbnRlbnRfZGl2IC5kaXZfZm9ybSB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudXBwZXJfZGl2IC5jb250ZW50X2RpdiAuZGl2X2Zvcm0gLmlwIHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudXBwZXJfZGl2IC5jb250ZW50X2RpdiAuZGl2X2Zvcm0gLmZvcmdvdF9sYmwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xufVxuLm1haW5fY29udGVudF9kaXYgLnVwcGVyX2RpdiAuY29udGVudF9kaXYgLnJlZF9idG4ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgaGVpZ2h0OiA0MHB4O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5ib3R0b21fbGJsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLmJvdHRvbV9sYmwgLnJlZF9sYmwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
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



let LoginPage = class LoginPage {
    constructor(navCtrl, router, platform) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.platform = platform;
        if (this.platform.is('ios')) {
            this.plt = 'ios';
        }
        else {
            this.plt = 'android';
        }
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
    goToRegister() {
        this.router.navigate(['/register']);
    }
    goToHome() {
        this.router.navigate(['/home']);
    }
    goToForgot() {
        this.router.navigate(['/forgot-password']);
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map