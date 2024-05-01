function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-list-product-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-list/product-list.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-list/product-list.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProductListProductListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"main_content_div\">\n    <div class=\"upper_div\" [class.ios_test]=\"plt == 'ios'\" [style.backgroundImage]=\"'url(assets/imgs/burger_main.jpg)'\">\n      <img src=\"assets/imgs/back_btn.png\" style=\"width: 20px;\" (click)=\"goBack()\">\n      <!-- <img src=\"assets/imgs/burger_main.jpg\" class=\"scooter\"> -->\n      <ion-label class=\"round_lbl\">Burgers</ion-label>\n    </div>\n    <div class=\"lower_div\">\n      <div class=\"heading_div\">\n        <ion-label>128 Restaurants</ion-label>\n        <img src=\"assets/imgs/menu2.png\" (click)=\"goToFilter()\" style=\"width: 20px;\">\n      </div>\n\n      <div class=\"card\" *ngFor=\"let item of [1,2,3,4]\" (click)=\"goToProduct()\">\n        <div class=\"image_div\" [style.backgroundImage]=\"'url(assets/imgs/image2.jpg)'\"></div>\n        <div class=\"desc_div\">\n          <ion-label class=\"heading_lbl\">Super Good Cafe</ion-label>\n          <ion-label class=\"small_lbl\">Cafe - Western Food - $$</ion-label>\n          <ion-icon name=\"star\" class=\"rating\"></ion-icon>\n          <ion-label class=\"red_lbl\"><span class=\"red_lbl\">4.9</span> (124 rating)</ion-label>\n          <!-- <ion-icon name=\"heart-empty\" ></ion-icon> -->\n          <ion-icon name=\"heart-outline\" mode=\"md\" class=\"heart\"></ion-icon>\n          <ion-button class=\"offer_btn\" shape=\"round\" size=\"small\" *ngIf=\"item == 1\">Offer\n          </ion-button>\n        </div>\n      </div>\n\n      <ion-button (click)=\"goToMyOrder()\" expand=\"full\" shape=\"round\" class=\"red_btn\">\n        Add to Basket\n      </ion-button>\n\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/product-list/product-list-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/product-list/product-list-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ProductListPageRoutingModule */

  /***/
  function srcAppPagesProductListProductListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListPageRoutingModule", function () {
      return ProductListPageRoutingModule;
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


    var _product_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product-list.page */
    "./src/app/pages/product-list/product-list.page.ts");

    var routes = [{
      path: '',
      component: _product_list_page__WEBPACK_IMPORTED_MODULE_3__["ProductListPage"]
    }];

    var ProductListPageRoutingModule = function ProductListPageRoutingModule() {
      _classCallCheck(this, ProductListPageRoutingModule);
    };

    ProductListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/product-list/product-list.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/product-list/product-list.module.ts ***!
    \***********************************************************/

  /*! exports provided: ProductListPageModule */

  /***/
  function srcAppPagesProductListProductListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListPageModule", function () {
      return ProductListPageModule;
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


    var _product_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./product-list-routing.module */
    "./src/app/pages/product-list/product-list-routing.module.ts");
    /* harmony import */


    var _product_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product-list.page */
    "./src/app/pages/product-list/product-list.page.ts");

    var ProductListPageModule = function ProductListPageModule() {
      _classCallCheck(this, ProductListPageModule);
    };

    ProductListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _product_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductListPageRoutingModule"]],
      declarations: [_product_list_page__WEBPACK_IMPORTED_MODULE_6__["ProductListPage"]]
    })], ProductListPageModule);
    /***/
  },

  /***/
  "./src/app/pages/product-list/product-list.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/product-list/product-list.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProductListProductListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ios_test {\n  padding-top: 40px !important;\n}\n\n.main_content_div {\n  width: 100%;\n}\n\n.main_content_div .upper_div {\n  width: 100%;\n  height: 250px;\n  padding: 20px;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}\n\n.main_content_div .upper_div .scooter {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.main_content_div .upper_div .round_lbl {\n  bottom: 35px;\n  left: 16px;\n  position: absolute;\n  font-size: 28px;\n  font-family: open-bold;\n  color: white;\n}\n\n.main_content_div .lower_div {\n  width: 100%;\n  background: white;\n  height: 200px;\n  z-index: 99999;\n  margin-top: -20px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 5px;\n  position: absolute;\n}\n\n.main_content_div .lower_div .heading_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 50px;\n}\n\n.main_content_div .lower_div .card {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  padding: 10px;\n  border-radius: 10px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.5);\n  margin-bottom: 20px;\n  position: relative;\n}\n\n.main_content_div .lower_div .card .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100px;\n  height: 100px;\n}\n\n.main_content_div .lower_div .card .desc_div {\n  margin-left: 20px;\n}\n\n.main_content_div .lower_div .card .desc_div .heading_lbl {\n  font-size: 20px;\n  font-family: open-bold;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div .lower_div .card .desc_div .small_lbl {\n  font-size: 12px;\n  color: var(--ion-color-light);\n  font-family: open-regular;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div .lower_div .card .desc_div .rating {\n  color: var(--ion-color-main);\n  font-size: 15px;\n}\n\n.main_content_div .lower_div .card .desc_div .red_lbl {\n  color: var(--ion-color-main);\n  font-size: 12px;\n  font-family: open-regular;\n}\n\n.main_content_div .lower_div .card .desc_div .heart {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  color: var(--ion-color-light);\n  font-size: 20px;\n}\n\n.main_content_div .lower_div .card .desc_div .offer_btn {\n  --background: var(--ion-color-main);\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  width: 70px;\n  z-index: 99999;\n}\n\n.main_content_div .lower_div .red_btn {\n  --background: var(--ion-color-main);\n  height: 40px;\n  --background-activated: var(--ion-color-main);\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxwaW5vY2hldC9Eb2N1bWVudHMvR2l0SHViL2ljYXJlcy1hcHAtZXhhbWVuL3NyYy9hcHAvcGFnZXMvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7QUNFSjs7QURESTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBRUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDRVI7O0FEQVE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQ0VaOztBREFRO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNFWjs7QURDSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDUjs7QURDUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NaOztBREVRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FaOztBREVZO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0FoQjs7QURFWTtFQUNJLGlCQUFBO0FDQWhCOztBRENnQjtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NwQjs7QURDZ0I7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NwQjs7QURDZ0I7RUFDSSw0QkFBQTtFQUNBLGVBQUE7QUNDcEI7O0FEQ2dCO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNDcEI7O0FEQ2dCO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ0NwQjs7QURDZ0I7RUFDSSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0NwQjs7QURJUTtFQUNJLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLDZDQUFBO0VBQ0EsZ0JBQUE7QUNGWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvc190ZXN0e1xuICAgIHBhZGRpbmctdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICAudXBwZXJfZGl2e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0ZGQkFBRTtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cbiAgICAgICAgLnNjb290ZXJ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgIH1cbiAgICAgICAgLnJvdW5kX2xibHtcbiAgICAgICAgICAgIGJvdHRvbTogMzVweDtcbiAgICAgICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogb3Blbi1ib2xkO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5sb3dlcl9kaXZ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgei1pbmRleDogOTk5OTk7XG4gICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAgICAgLmhlYWRpbmdfZGl2e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmR7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuNSk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAuaW1hZ2VfZGl2e1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXNjX2RpdntcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAuaGVhZGluZ19sYmx7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zbWFsbF9sYmx7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmF0aW5ne1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yZWRfbGJse1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgICAgICAuaGVhcnR7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm9mZmVyX2J0bntcbiAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kIDogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk5OTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmVkX2J0bntcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZCA6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQgOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDZweCAxNXB4O1xuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxufSIsIi5pb3NfdGVzdCB7XG4gIHBhZGRpbmctdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudXBwZXJfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLnVwcGVyX2RpdiAuc2Nvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudXBwZXJfZGl2IC5yb3VuZF9sYmwge1xuICBib3R0b206IDM1cHg7XG4gIGxlZnQ6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LWZhbWlseTogb3Blbi1ib2xkO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB6LWluZGV4OiA5OTk5OTtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLmhlYWRpbmdfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuY2FyZCAuaW1hZ2VfZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5jYXJkIC5kZXNjX2RpdiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuY2FyZCAuZGVzY19kaXYgLmhlYWRpbmdfbGJsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogb3Blbi1ib2xkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLmNhcmQgLmRlc2NfZGl2IC5zbWFsbF9sYmwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLmNhcmQgLmRlc2NfZGl2IC5yYXRpbmcge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5jYXJkIC5kZXNjX2RpdiAucmVkX2xibCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLmNhcmQgLmRlc2NfZGl2IC5oZWFydCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLmNhcmQgLmRlc2NfZGl2IC5vZmZlcl9idG4ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiAxMHB4O1xuICB3aWR0aDogNzBweDtcbiAgei1pbmRleDogOTk5OTk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5yZWRfYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gIGhlaWdodDogNDBweDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/product-list/product-list.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/product-list/product-list.page.ts ***!
    \*********************************************************/

  /*! exports provided: ProductListPage */

  /***/
  function srcAppPagesProductListProductListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListPage", function () {
      return ProductListPage;
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
    /*
    
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      Created : 17-March-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    
    */


    var ProductListPage =
    /*#__PURE__*/
    function () {
      function ProductListPage(platform, navCtrl, router) {
        _classCallCheck(this, ProductListPage);

        this.platform = platform;
        this.navCtrl = navCtrl;
        this.router = router;

        if (this.platform.is('ios')) {
          this.plt = "ios";
        } else {
          this.plt = "android";
        }
      }

      _createClass(ProductListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }, {
        key: "goToMyOrder",
        value: function goToMyOrder() {
          this.router.navigate(['/my-order']);
        }
      }, {
        key: "goToProduct",
        value: function goToProduct() {
          this.router.navigate(['/product']);
        }
      }, {
        key: "goToFilter",
        value: function goToFilter() {
          this.router.navigate(['/filter']);
        }
      }]);

      return ProductListPage;
    }();

    ProductListPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ProductListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product-list/product-list.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-list.page.scss */
      "./src/app/pages/product-list/product-list.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], ProductListPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-product-list-product-list-module-es5.js.map