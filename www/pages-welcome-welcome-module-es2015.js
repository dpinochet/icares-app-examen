(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content scroll-y=\"false\">\n  <div class=\"main_content_div\">\n    <div class=\"button_div\">\n      <ion-button fill=\"clear\" color=\"danger\" slot=\"end\" (click)=\"goToLogin()\">\n        Log in\n      </ion-button>\n    </div>\n\n    <div class=\"slider_div\">\n      <ion-slides mode=\"ios\" pager=\"ios\">\n        <ion-slide>\n          <div class=\"div_slide\">\n            <img class=\"slider_img\" src=\"assets/imgs/pizza.png\">\n            <ion-label class=\"head_lbl\">Find Foods You Love</ion-label>\n            <ion-label class=\"small_lbl\">Discover the best foods from <br> over 1,000 restaurant</ion-label>\n          </div>\n        </ion-slide>\n\n        <ion-slide>\n          <div class=\"div_slide\">\n            <img class=\"slider_img\" src=\"assets/imgs/pizza.png\">\n            <ion-label class=\"head_lbl\">Fast Delivery</ion-label>\n            <ion-label class=\"small_lbl\">Fast delivery to home, office <br> and whatever you are</ion-label>\n          </div>\n        </ion-slide>\n\n        <ion-slide>\n          <div class=\"div_slide\">\n            <img class=\"slider_img\" src=\"assets/imgs/pizza.png\">\n            <ion-label class=\"head_lbl\">Live Tracking</ion-label>\n            <ion-label class=\"small_lbl\">Rwal time tracking of your food <br> on the app after ordered.</ion-label>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n\n    <div class=\"bottom_btn_div\">\n      <ion-button (click)=\"goToRegister()\" expand=\"full\" shape=\"round\" class=\"red_btn\">\n        Create Account\n      </ion-button>\n\n      <ion-button expand=\"full\" shape=\"round\" class=\"gray_btn\">\n        Continue with Facebook\n        <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>\n      </ion-button>\n    </div>\n\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/welcome/welcome-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/welcome/welcome-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WelcomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageRoutingModule", function() { return WelcomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome.page */ "./src/app/pages/welcome/welcome.page.ts");




const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_3__["WelcomePage"]
    }
];
let WelcomePageRoutingModule = class WelcomePageRoutingModule {
};
WelcomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WelcomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/welcome/welcome.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.module.ts ***!
  \*************************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome-routing.module */ "./src/app/pages/welcome/welcome-routing.module.ts");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/pages/welcome/welcome.page.ts");







let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomePageRoutingModule"]
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
    })
], WelcomePageModule);



/***/ }),

/***/ "./src/app/pages/welcome/welcome.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep.swiper-pagination-bullet-active {\n  background: var(--ion-color-main) !important;\n}\n\n.main_content_div {\n  width: 100%;\n  padding: 20px;\n  position: relative;\n  height: 100%;\n}\n\n.main_content_div .button_div {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  font-family: open-regular;\n}\n\n.main_content_div .slider_div ion-slide {\n  height: 65vh;\n}\n\n.main_content_div .slider_div ion-slide .div_slide .slider_img {\n  width: 200px;\n}\n\n.main_content_div .slider_div ion-slide .div_slide .head_lbl {\n  color: var(--ion-color-main);\n  font-size: 24px;\n  font-weight: bold;\n  display: block;\n  text-align: center;\n  margin-top: 40px;\n  font-family: open-bold;\n}\n\n.main_content_div .slider_div ion-slide .div_slide .small_lbl {\n  color: #707070;\n  font-size: 12px;\n  margin-top: 40px;\n  font-family: open-regular;\n}\n\n.main_content_div .bottom_btn_div {\n  position: absolute;\n  bottom: 20px;\n  width: 90%;\n}\n\n.main_content_div .bottom_btn_div .red_btn {\n  --background: var(--ion-color-main);\n  height: 40px;\n  --background-activated: var(--ion-color-main);\n}\n\n.main_content_div .bottom_btn_div .gray_btn {\n  margin-top: 10px;\n  --background: #F1F0F6;\n  color: black;\n  height: 40px;\n  --background-activated: #F1F0F6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxwaW5vY2hldC9Eb2N1bWVudHMvR2l0SHViL2ljYXJlcy1hcHAtZXhhbWVuL3NyYy9hcHAvcGFnZXMvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFJO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFDQSx5QkFBQTtBQ0VSOztBREVRO0VBQ0ksWUFBQTtBQ0FaOztBRElnQjtFQUNJLFlBQUE7QUNGcEI7O0FESWdCO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDRnBCOztBRElnQjtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0ZwQjs7QURRSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNOUjs7QURPUTtFQUNJLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLDZDQUFBO0FDTFo7O0FET1E7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtBQ0xaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWFpbikgIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIC5idXR0b25fZGl2e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICB9XG5cbiAgICAuc2xpZGVyX2RpdntcbiAgICAgICAgaW9uLXNsaWRle1xuICAgICAgICAgICAgaGVpZ2h0OiA2NXZoO1xuXG4gICAgICAgICAgICAuZGl2X3NsaWRle1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5zbGlkZXJfaW1ne1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5oZWFkX2xibHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNtYWxsX2xibHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgOiAjNzA3MDcwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJvdHRvbV9idG5fZGl2e1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgLnJlZF9idG57XG4gICAgICAgICAgICAtLWJhY2tncm91bmQgOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkIDogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICB9XG4gICAgICAgIC5ncmF5X2J0bntcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQgOiAjRjFGMEY2O1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZCA6ICNGMUYwRjY7XG4gICAgICAgIH1cbiAgICB9XG59IiwiOjpuZy1kZWVwLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWFpbikgIWltcG9ydGFudDtcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYnV0dG9uX2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xufVxuLm1haW5fY29udGVudF9kaXYgLnNsaWRlcl9kaXYgaW9uLXNsaWRlIHtcbiAgaGVpZ2h0OiA2NXZoO1xufVxuLm1haW5fY29udGVudF9kaXYgLnNsaWRlcl9kaXYgaW9uLXNsaWRlIC5kaXZfc2xpZGUgLnNsaWRlcl9pbWcge1xuICB3aWR0aDogMjAwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVyX2RpdiBpb24tc2xpZGUgLmRpdl9zbGlkZSAuaGVhZF9sYmwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBmb250LWZhbWlseTogb3Blbi1ib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLnNsaWRlcl9kaXYgaW9uLXNsaWRlIC5kaXZfc2xpZGUgLnNtYWxsX2xibCB7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYm90dG9tX2J0bl9kaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDkwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib3R0b21fYnRuX2RpdiAucmVkX2J0biB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICBoZWlnaHQ6IDQwcHg7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5ib3R0b21fYnRuX2RpdiAuZ3JheV9idG4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICAtLWJhY2tncm91bmQ6ICNGMUYwRjY7XG4gIGNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiA0MHB4O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRjFGMEY2O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/welcome/welcome.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/welcome/welcome.page.ts ***!
  \***********************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/


let WelcomePage = class WelcomePage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToRegister() {
        this.router.navigate(['/register']);
    }
    goToLogin() {
        this.router.navigate(['/login']);
    }
};
WelcomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/welcome/welcome.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.page.scss */ "./src/app/pages/welcome/welcome.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], WelcomePage);



/***/ })

}]);
//# sourceMappingURL=pages-welcome-welcome-module-es2015.js.map