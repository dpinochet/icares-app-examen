function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-address-book-address-book-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address-book/address-book.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address-book/address-book.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAddressBookAddressBookPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <div class=\"header_div\">\n\n      <ion-buttons slot=\"start\" class=\"btn_back\">\n        <ion-button (click)=\"goBack()\">\n          <img src=\"assets/imgs/back2.png\">\n        </ion-button>\n      </ion-buttons>\n      <ion-label class=\"title\">My Addresses</ion-label>\n\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"button_div\">\n      <ion-button slot=\"end\" size=\"small\" class=\"add_btn\" (click)=\"goToLogin()\">\n        ADD +\n      </ion-button>\n    </div>\n\n    <div class=\"list_div\" *ngFor=\"let item of [1,2,3,4]\">\n      <ion-label class=\"head_lbl\">Work</ion-label>\n      <ion-label class=\"small_lbl\">\n        1152 Hartway Street Hayti SD South Dakota 57241\n      </ion-label>\n\n      <div class=\"action_div\" *ngIf=\"id == item\">\n        <div class=\"edit\">Edit</div>\n        <div class=\"delete\">Delete</div>\n      </div>\n\n      <ion-buttons slot=\"end\" class=\"btn\">\n        <ion-button (click)=\"clickMenu(item)\">\n          <img src=\"assets/imgs/menu3.png\" class=\"menu_btn\">\n        </ion-button>\n      </ion-buttons>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/address-book/address-book-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/address-book/address-book-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: AddressBookPageRoutingModule */

  /***/
  function srcAppPagesAddressBookAddressBookRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressBookPageRoutingModule", function () {
      return AddressBookPageRoutingModule;
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


    var _address_book_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./address-book.page */
    "./src/app/pages/address-book/address-book.page.ts");

    var routes = [{
      path: '',
      component: _address_book_page__WEBPACK_IMPORTED_MODULE_3__["AddressBookPage"]
    }];

    var AddressBookPageRoutingModule = function AddressBookPageRoutingModule() {
      _classCallCheck(this, AddressBookPageRoutingModule);
    };

    AddressBookPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddressBookPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/address-book/address-book.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/address-book/address-book.module.ts ***!
    \***********************************************************/

  /*! exports provided: AddressBookPageModule */

  /***/
  function srcAppPagesAddressBookAddressBookModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressBookPageModule", function () {
      return AddressBookPageModule;
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


    var _address_book_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./address-book-routing.module */
    "./src/app/pages/address-book/address-book-routing.module.ts");
    /* harmony import */


    var _address_book_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./address-book.page */
    "./src/app/pages/address-book/address-book.page.ts");

    var AddressBookPageModule = function AddressBookPageModule() {
      _classCallCheck(this, AddressBookPageModule);
    };

    AddressBookPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _address_book_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddressBookPageRoutingModule"]],
      declarations: [_address_book_page__WEBPACK_IMPORTED_MODULE_6__["AddressBookPage"]]
    })], AddressBookPageModule);
    /***/
  },

  /***/
  "./src/app/pages/address-book/address-book.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/address-book/address-book.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAddressBookAddressBookPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar:last-child {\n  --border-width: 0px;\n}\n\n.header-md:after {\n  background: none;\n}\n\n.header_div {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n}\n\n.header_div .title {\n  color: black;\n  font-family: open-regular;\n}\n\n.header_div .btn_back {\n  position: absolute;\n  left: 16px;\n  width: 35px;\n}\n\n.main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n\n.main_content_div .button_div {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.main_content_div .button_div .add_btn {\n  color: white;\n  --background: var(--ion-color-main);\n  --border-radius: 3px;\n  --background-activated:var(--ion-color-main);\n}\n\n.main_content_div .list_div {\n  border-bottom: 1px solid #E8E8E8;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  position: relative;\n}\n\n.main_content_div .list_div .head_lbl {\n  display: block;\n  font-family: open-bold;\n}\n\n.main_content_div .list_div .small_lbl {\n  display: block;\n  font-family: open-regular;\n  font-size: 14px;\n}\n\n.main_content_div .list_div .action_div {\n  width: 80px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);\n  position: absolute;\n  right: 0;\n  top: 40px;\n  border-radius: 5px;\n  z-index: 99999;\n  text-align: center;\n  background-color: white;\n}\n\n.main_content_div .list_div .action_div .edit {\n  color: green;\n  font-family: open-regular;\n  font-size: 12px;\n  border-bottom: 1px solid #E8E8E8;\n  height: 30px;\n  width: 100;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.main_content_div .list_div .action_div .delete {\n  color: var(--ion-color-main);\n  font-family: open-regular;\n  font-size: 12px;\n  height: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.main_content_div .list_div .btn {\n  position: absolute;\n  top: 10px;\n  right: 0;\n}\n\n.main_content_div .list_div .menu_btn {\n  width: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxwaW5vY2hldC9Eb2N1bWVudHMvR2l0SHViL2ljYXJlcy1hcHAtZXhhbWVuL3NyYy9hcHAvcGFnZXMvYWRkcmVzcy1ib29rL2FkZHJlc3MtYm9vay5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkZHJlc3MtYm9vay9hZGRyZXNzLWJvb2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxXQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFJO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FDRVI7O0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQ1I7O0FERUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENJO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7QUNDUjs7QURDUTtFQUNJLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsNENBQUE7QUNDWjs7QURHSTtFQUNJLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRFI7O0FER1E7RUFDSSxjQUFBO0VBQ0Esc0JBQUE7QUNEWjs7QURHUTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNEWjs7QURJUTtFQUNJLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDRlo7O0FESVk7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRmhCOztBRElZO0VBQ0ksNEJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNGaEI7O0FETVE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDSlo7O0FETVE7RUFDSSxXQUFBO0FDSloiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hZGRyZXNzLWJvb2svYWRkcmVzcy1ib29rLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG59XG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLmhlYWRlcl9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAudGl0bGV7XG4gICAgICAgIGNvbG9yOiBibGFjazsgXG4gICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gICAgfVxuXG4gICAgLmJ0bl9iYWNrIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAxNnB4O1xuICAgICAgICB3aWR0aDogMzVweDtcbiAgICB9XG59XG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgLmJ1dHRvbl9kaXZ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAgIC5hZGRfYnRue1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kIDogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzXHQ6IDNweDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQgOnZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5saXN0X2RpdntcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFOEU4RTg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC5oZWFkX2xibHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAuc21hbGxfbGJse1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9IFxuXG4gICAgICAgIC5hY3Rpb25fZGl2e1xuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogNDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTk5O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgICAgICAgICAgIC5lZGl0e1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U4RThFODtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVsZXRle1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmJ0bntcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICAgIC5tZW51X2J0bntcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICB9XG4gICAgfVxufSIsImlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xufVxuXG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmhlYWRlcl9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZWFkZXJfZGl2IC50aXRsZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbn1cbi5oZWFkZXJfZGl2IC5idG5fYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTZweDtcbiAgd2lkdGg6IDM1cHg7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYnV0dG9uX2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLm1haW5fY29udGVudF9kaXYgLmJ1dHRvbl9kaXYgLmFkZF9idG4ge1xuICBjb2xvcjogd2hpdGU7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDp2YXIoLS1pb24tY29sb3ItbWFpbik7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdF9kaXYge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U4RThFODtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdF9kaXYgLmhlYWRfbGJsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLWJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdF9kaXYgLnNtYWxsX2xibCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdF9kaXYgLmFjdGlvbl9kaXYge1xuICB3aWR0aDogODBweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgei1pbmRleDogOTk5OTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdF9kaXYgLmFjdGlvbl9kaXYgLmVkaXQge1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFOEU4RTg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDEwMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubGlzdF9kaXYgLmFjdGlvbl9kaXYgLmRlbGV0ZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saXN0X2RpdiAuYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpc3RfZGl2IC5tZW51X2J0biB7XG4gIHdpZHRoOiAxNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/address-book/address-book.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/address-book/address-book.page.ts ***!
    \*********************************************************/

  /*! exports provided: AddressBookPage */

  /***/
  function srcAppPagesAddressBookAddressBookPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressBookPage", function () {
      return AddressBookPage;
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
    /*
    
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      Created : 17-March-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    
    */


    var AddressBookPage =
    /*#__PURE__*/
    function () {
      function AddressBookPage(navCtrl) {
        _classCallCheck(this, AddressBookPage);

        this.navCtrl = navCtrl;
        this.id = 0;
      }

      _createClass(AddressBookPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }, {
        key: "clickMenu",
        value: function clickMenu(value) {
          // this.id = value;
          if (value == this.id) {
            this.id = 0;
          } else {
            this.id = value;
          }
        }
      }, {
        key: "goToLogin",
        value: function goToLogin() {}
      }]);

      return AddressBookPage;
    }();

    AddressBookPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    AddressBookPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-address-book',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./address-book.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/address-book/address-book.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./address-book.page.scss */
      "./src/app/pages/address-book/address-book.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], AddressBookPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-address-book-address-book-module-es5.js.map