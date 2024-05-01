function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-checkout-checkout-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCheckoutCheckoutPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <div class=\"header_div\">\n      \n      <ion-buttons slot=\"start\" class=\"btn_back\">\n        <ion-button (click)=\"goBack()\">\n          <img src=\"assets/imgs/back2.png\">\n        </ion-button>\n      </ion-buttons>\n      <ion-label class=\"title\">Check Out</ion-label>\n\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\" [class.ios_test]=\"plt == 'ios'\">\n\n    <!-- <div class=\"header_div\">\n      <img src=\"assets/imgs/back2.png\" style=\"width: 20px;\" class=\"btn_back\" (click)=\"goBack()\">\n      <ion-label>Check Out</ion-label>\n    </div> -->\n\n    <div class=\"content_div\">\n      <ion-label class=\"small_lbl\">Delivery Address</ion-label>\n      <div class=\"address_div\">\n        <ion-label class=\"address_lbl\">123 York StBrooklyn, Ny 11201, USA</ion-label>\n        <ion-label class=\"red_lbl\">Change</ion-label>\n      </div>\n\n      <div class=\"payment_div\">\n        <ion-label class=\"small_lbl\">Payment Method</ion-label>\n        <ion-label class=\"red_lbl\">Add +</ion-label>\n      </div>\n\n      <div class=\"payment_method\">\n        <div class=\"list_item\" (click)=\"choosePaymentMethod(1)\">\n          <img src=\"assets/imgs/visa.png\" style=\"width: 25px;height: 30px\">\n          <ion-label style=\"margin-left: 10px;\">**** **** **** 4242</ion-label>\n          <img src=\"assets/imgs/verified.png\" class=\"right_img\" style=\"width: 25px;height: 25px;\" *ngIf=\"id == 1\">          \n        </div>\n\n        <div class=\"list_item\" (click)=\"choosePaymentMethod(2)\">\n          <img src=\"assets/imgs/paypal.png\" style=\"width: 25px;height: 30px\">\n          <ion-label style=\"margin-left: 10px;\">jonhdoe@gmail.com</ion-label>\n          <img src=\"assets/imgs/verified.png\" class=\"right_img\" style=\"width: 25px;height: 25px;\" *ngIf=\"id == 2\">          \n        </div>\n      </div>\n\n      <div class=\"coupon_div\">\n        <ion-label class=\"small_lbl\">Enter Coupon</ion-label> \n        <ion-input type=\"text\" placeholder=\"HUNGRY10\"></ion-input>\n      </div>\n\n      <div class=\"summary_div\">\n        <ion-label class=\"head\">Summary</ion-label>\n\n        <div class=\"summary_sub\">\n          <ion-label>Sub Total</ion-label>\n          <ion-label class=\"price\">$64.00</ion-label>\n        </div>\n\n        <div class=\"summary_sub\">\n          <ion-label>Delivery Cost</ion-label>\n          <ion-label class=\"price\">Free</ion-label>\n        </div>\n\n        <div class=\"summary_sub\">\n          <ion-label>Discount</ion-label>\n          <ion-label class=\"price\">- $6.4</ion-label>\n        </div>\n       \n      </div>\n\n      <div class=\"address_div\" style=\"border-bottom: none;margin-top: 15px\">\n        <ion-label>Total</ion-label>\n        <ion-label class=\"red_lbl2\">$57.60</ion-label>\n      </div>\n\n      <ion-button (click)=\"goToSendOrder()\" expand=\"full\" shape=\"round\" class=\"red_btn\">Send Order</ion-button>\n\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/checkout/checkout-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/checkout/checkout-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: CheckoutPageRoutingModule */

  /***/
  function srcAppPagesCheckoutCheckoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutPageRoutingModule", function () {
      return CheckoutPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _checkout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./checkout.page */
    "./src/app/pages/checkout/checkout.page.ts");

    var routes = [{
      path: '',
      component: _checkout_page__WEBPACK_IMPORTED_MODULE_3__["CheckoutPage"]
    }];

    var CheckoutPageRoutingModule = function CheckoutPageRoutingModule() {
      _classCallCheck(this, CheckoutPageRoutingModule);
    };

    CheckoutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CheckoutPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/checkout/checkout.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/checkout/checkout.module.ts ***!
    \***************************************************/

  /*! exports provided: CheckoutPageModule */

  /***/
  function srcAppPagesCheckoutCheckoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function () {
      return CheckoutPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./checkout-routing.module */
    "./src/app/pages/checkout/checkout-routing.module.ts");
    /* harmony import */


    var _checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./checkout.page */
    "./src/app/pages/checkout/checkout.page.ts");

    var CheckoutPageModule = function CheckoutPageModule() {
      _classCallCheck(this, CheckoutPageModule);
    };

    CheckoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__["CheckoutPageRoutingModule"]],
      declarations: [_checkout_page__WEBPACK_IMPORTED_MODULE_6__["CheckoutPage"]]
    })], CheckoutPageModule);
    /***/
  },

  /***/
  "./src/app/pages/checkout/checkout.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/checkout/checkout.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCheckoutCheckoutPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar:last-child {\n  --border-width: 0px;\n}\n\n.header-md:after {\n  background: none;\n}\n\n.header_div {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n}\n\n.header_div .title {\n  color: black;\n  font-family: open-regular;\n}\n\n.header_div .btn_back {\n  position: absolute;\n  left: 16px;\n  width: 35px;\n}\n\n.main_content_div {\n  width: 100%;\n}\n\n.main_content_div .content_div {\n  padding: 16px;\n  width: 100%;\n}\n\n.main_content_div .content_div .small_lbl {\n  font-family: open-regular;\n  font-size: 12px;\n  display: block;\n}\n\n.main_content_div .content_div .address_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  border-bottom: 1px solid #E8E8E8;\n  padding-bottom: 20px;\n}\n\n.main_content_div .content_div .address_div .address_lbl {\n  width: 60%;\n}\n\n.main_content_div .content_div .address_div .red_lbl {\n  color: var(--ion-color-main);\n  font-family: open-regular;\n}\n\n.main_content_div .content_div .address_div .red_lbl2 {\n  color: var(--ion-color-main);\n  font-family: open-bold;\n}\n\n.main_content_div .content_div .payment_div {\n  margin-top: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-bottom: 20px;\n}\n\n.main_content_div .content_div .payment_div .small_lbl {\n  font-family: open-regular;\n  font-size: 12px;\n  display: block;\n}\n\n.main_content_div .content_div .payment_div .red_lbl {\n  color: var(--ion-color-main);\n}\n\n.main_content_div .content_div .payment_method {\n  border-bottom: 1px solid #E8E8E8;\n  padding-bottom: 15px;\n}\n\n.main_content_div .content_div .payment_method .list_item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px;\n  border-radius: 5px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  background: #FAFAFA;\n  padding-left: 16px;\n  padding-right: 16px;\n  position: relative;\n  margin-bottom: 15px;\n}\n\n.main_content_div .content_div .payment_method .list_item .right_img {\n  position: absolute;\n  right: 16px;\n}\n\n.main_content_div .content_div .coupon_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  width: 100%;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  border-bottom: 1px solid #E8E8E8;\n  height: 50px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.main_content_div .content_div .coupon_div .small_lbl {\n  font-size: 12px;\n  font-family: open-regular;\n  width: 70%;\n}\n\n.main_content_div .content_div .coupon_div ion-input {\n  width: 30%;\n  color: var(--ion-color-main);\n  --placeholder-color: var(--ion-color-light);\n}\n\n.main_content_div .content_div .summary_div {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #E8E8E8;\n}\n\n.main_content_div .content_div .summary_div .head {\n  font-family: open-bold;\n  font-size: 20px;\n}\n\n.main_content_div .content_div .summary_div .summary_sub {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  margin-top: 10px;\n}\n\n.main_content_div .content_div .summary_div .summary_sub .price {\n  font-family: open-bold;\n  font-size: 16px;\n}\n\n.main_content_div .content_div .red_btn {\n  --background: var(--ion-color-main);\n  height: 40px;\n  --background-activated: var(--ion-color-main);\n  margin-top: 30px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxwaW5vY2hldC9Eb2N1bWVudHMvR2l0SHViL2ljYXJlcy1hcHAtZXhhbWVuL3NyYy9hcHAvcGFnZXMvY2hlY2tvdXQvY2hlY2tvdXQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGVja291dC9jaGVja291dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7RUFFQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUk7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUNFUjs7QURDSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNDUjs7QURLQTtFQUNJLFdBQUE7QUNGSjs7QURtQkk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ2pCUjs7QURrQlE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDaEJaOztBRGtCUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0FDaEJaOztBRGtCWTtFQUNJLFVBQUE7QUNoQmhCOztBRG1CWTtFQUNJLDRCQUFBO0VBQ0EseUJBQUE7QUNqQmhCOztBRG1CWTtFQUNJLDRCQUFBO0VBQ0Esc0JBQUE7QUNqQmhCOztBRHFCUTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLG9CQUFBO0FDbkJaOztBRHFCWTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNuQmhCOztBRHNCWTtFQUNJLDRCQUFBO0FDcEJoQjs7QUR3QlE7RUFDSSxnQ0FBQTtFQUNBLG9CQUFBO0FDdEJaOztBRHVCWTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNyQmhCOztBRHVCZ0I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNyQnBCOztBRDBCUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ3hCWjs7QUQwQlk7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDeEJoQjs7QUQwQlk7RUFDSSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQ0FBQTtBQ3hCaEI7O0FENEJRO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FDMUJaOztBRDRCWTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtBQzFCaEI7O0FENEJZO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQkFBQTtBQzFCaEI7O0FENEJnQjtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtBQzFCcEI7O0FEK0JRO0VBQ0ksbUNBQUE7RUFDQSxZQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUM3QloiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGVja291dC9jaGVja291dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgICAtLWJvcmRlci13aWR0aDogMHB4O1xufVxuLmhlYWRlci1tZDphZnRlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5oZWFkZXJfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxuICAgIC50aXRsZXtcbiAgICAgICAgY29sb3I6IGJsYWNrOyBcbiAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICB9XG5cbiAgICAuYnRuX2JhY2sge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgIH1cbn1cbi8vIC5pb3NfdGVzdHtcbi8vICAgICBwYWRkaW5nLXRvcDogNDBweCAhaW1wb3J0YW50O1xuLy8gfVxuLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gcGFkZGluZzogMTZweDtcblxuICAgIC8vIC5oZWFkZXJfZGl2e1xuICAgIC8vICAgICB3aWR0aDogMTAwJTtcbiAgICAvLyAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIC8vICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLy8gICAgIC5idG5fYmFjayB7XG4gICAgLy8gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gICAgICAgICBsZWZ0OiAxNnB4O1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLmNvbnRlbnRfZGl2e1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLnNtYWxsX2xibHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAuYWRkcmVzc19kaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRThFOEU4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG5cbiAgICAgICAgICAgIC5hZGRyZXNzX2xibHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmVkX2xibHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmVkX2xibDJ7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogb3Blbi1ib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnBheW1lbnRfZGl2e1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG5cbiAgICAgICAgICAgIC5zbWFsbF9sYmx7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yZWRfbGJse1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG5cbiAgICAgICAgLnBheW1lbnRfbWV0aG9ke1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFOEU4RTg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIC5saXN0X2l0ZW17XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZBRkFGQTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICAgICAgICAgICAgICAgIC5yaWdodF9pbWd7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNvdXBvbl9kaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFOEU4RTg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAuc21hbGxfbGJse1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24taW5wdXR7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3IgOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnN1bW1hcnlfZGl2e1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRThFOEU4O1xuXG4gICAgICAgICAgICAuaGVhZHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogb3Blbi1ib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdW1tYXJ5X3N1YntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICAgICAgICAgICAgICAucHJpY2V7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLWJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmVkX2J0bntcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZCA6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQgOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbn1cblxuLmhlYWRlci1tZDphZnRlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5oZWFkZXJfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyX2RpdiAudGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG59XG4uaGVhZGVyX2RpdiAuYnRuX2JhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE2cHg7XG4gIHdpZHRoOiAzNXB4O1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IHtcbiAgcGFkZGluZzogMTZweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLnNtYWxsX2xibCB7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmFkZHJlc3NfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U4RThFODtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmFkZHJlc3NfZGl2IC5hZGRyZXNzX2xibCB7XG4gIHdpZHRoOiA2MCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmFkZHJlc3NfZGl2IC5yZWRfbGJsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuYWRkcmVzc19kaXYgLnJlZF9sYmwyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAucGF5bWVudF9kaXYge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5wYXltZW50X2RpdiAuc21hbGxfbGJsIHtcbiAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAucGF5bWVudF9kaXYgLnJlZF9sYmwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5wYXltZW50X21ldGhvZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRThFOEU4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAucGF5bWVudF9tZXRob2QgLmxpc3RfaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5wYXltZW50X21ldGhvZCAubGlzdF9pdGVtIC5yaWdodF9pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jb3Vwb25fZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFOEU4RTg7XG4gIGhlaWdodDogNTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuY291cG9uX2RpdiAuc21hbGxfbGJsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuICB3aWR0aDogNzAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5jb3Vwb25fZGl2IGlvbi1pbnB1dCB7XG4gIHdpZHRoOiAzMCU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLnN1bW1hcnlfZGl2IHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U4RThFODtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuc3VtbWFyeV9kaXYgLmhlYWQge1xuICBmb250LWZhbWlseTogb3Blbi1ib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLnN1bW1hcnlfZGl2IC5zdW1tYXJ5X3N1YiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLnN1bW1hcnlfZGl2IC5zdW1tYXJ5X3N1YiAucHJpY2Uge1xuICBmb250LWZhbWlseTogb3Blbi1ib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLnJlZF9idG4ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgaGVpZ2h0OiA0MHB4O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/checkout/checkout.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/checkout/checkout.page.ts ***!
    \*************************************************/

  /*! exports provided: CheckoutPage */

  /***/
  function srcAppPagesCheckoutCheckoutPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutPage", function () {
      return CheckoutPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _modal_order_modal_order_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../modal-order/modal-order.page */
    "./src/app/pages/modal-order/modal-order.page.ts");
    /*
    
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      Created : 17-March-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    
    */


    var CheckoutPage =
    /*#__PURE__*/
    function () {
      function CheckoutPage(navCtrl, router, platform, modalCtrl) {
        _classCallCheck(this, CheckoutPage);

        this.navCtrl = navCtrl;
        this.router = router;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.id = 1;

        if (this.platform.is('ios')) {
          this.plt = "ios";
        } else {
          this.plt = "android";
        }
      }

      _createClass(CheckoutPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToSendOrder",
        value: function goToSendOrder() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _modal_order_modal_order_page__WEBPACK_IMPORTED_MODULE_4__["ModalOrderPage"],
                      cssClass: 'modalorder'
                    });

                  case 2:
                    modal = _context.sent;
                    _context.next = 5;
                    return modal.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }, {
        key: "choosePaymentMethod",
        value: function choosePaymentMethod(value) {
          this.id = value;
        }
      }]);

      return CheckoutPage;
    }();

    CheckoutPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-checkout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./checkout.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/checkout/checkout.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./checkout.page.scss */
      "./src/app/pages/checkout/checkout.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], CheckoutPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-checkout-checkout-module-es5.js.map