(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-product-product-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"main_content_div\">\n    <div class=\"upper_div\" [class.ios_test]=\"plt == 'ios'\">\n      <img src=\"assets/imgs/back_btn.png\" style=\"width: 20px;\" (click)=\"goBack()\">\n      <img src=\"assets/imgs/burger.png\" class=\"scooter\">\n      <ion-label class=\"round_lbl\">20 - 30 mins</ion-label>\n    </div>\n    <div class=\"lower_div\">\n      <div class=\"heading_div\">\n        <ion-label class=\"heading_lbl\">Really Cool <br> Burgers</ion-label>\n        <!-- <ion-icon name=\"heart-empty\" mode=\"md\" class=\"heart\"></ion-icon> -->\n        <ion-icon name=\"heart-outline\" mode=\"md\" class=\"heart\"></ion-icon>\n      </div>\n\n      <div class=\"rating_div\">\n        <ion-icon name=\"star\" class=\"rating\"></ion-icon>\n        <ion-label class=\"small_lbl\"><span class=\"red_lbl\">4.9 </span>(124 rating)</ion-label>\n        <ion-label class=\"small_lbl top_item\">Burger - western food - $$</ion-label>\n      </div>\n\n      <div class=\"rating_div\">\n        <ion-icon name=\"pin\"></ion-icon>\n        <ion-label class=\"small_lbl top_item\">123 Rock street, New York City</ion-label>\n      </div>\n\n      <div class=\"slider_div\">\n        <ion-label class=\"heading_lbl\">Popular Choices</ion-label>\n        <ion-slides [options]=\"slideOpts\">\n\n          <ion-slide>\n            <div class=\"slide_div\">\n              <div class=\"img_back\">\n                <img src=\"assets/imgs/burger1.jpg\" class=\"slider_img\">\n              </div>\n              <div>\n                <ion-label class=\"slider_lbl\">American Beef Burgers</ion-label>\n                <ion-label class=\"slider_lbl\">$16</ion-label>\n              </div>\n            </div>\n          </ion-slide>\n\n          <ion-slide>\n            <div class=\"slide_div\">\n              <div class=\"img_back\">\n                <img src=\"assets/imgs/burger1.jpg\" class=\"slider_img\">\n              </div>\n              <div>\n                <ion-label class=\"slider_lbl\">American Beef Burgers</ion-label>\n                <ion-label class=\"slider_lbl\">$16</ion-label>\n              </div>\n            </div>\n          </ion-slide>\n\n          <ion-slide>\n            <div class=\"slide_div\">\n              <div class=\"img_back\">\n                <img src=\"assets/imgs/burger1.jpg\" class=\"slider_img\">\n              </div>\n              <div>\n                <ion-label class=\"slider_lbl\">American Beef Burgers</ion-label>\n                <ion-label class=\"slider_lbl\">$16</ion-label>\n              </div>\n            </div>\n          </ion-slide>\n\n          <ion-slide>\n            <div class=\"slide_div\">\n              <div class=\"img_back\">\n                <img src=\"assets/imgs/burger1.jpg\" class=\"slider_img\">\n              </div>\n              <div>\n                <ion-label class=\"slider_lbl\">American Beef Burgers</ion-label>\n                <ion-label class=\"slider_lbl\">$16</ion-label>\n              </div>\n            </div>\n          </ion-slide>\n        </ion-slides>\n      </div>\n\n      <div class=\"card_div\">\n        <ion-label class=\"heading_lbl\">Burgers</ion-label>\n        <div class=\"card\" *ngFor=\"let item of [1,2,3]\">\n          <div class=\"desc_div\">\n            <ion-label class=\"product_name\">Classic Cheese Burger</ion-label>\n            <ion-label class=\"addons\">Beef, cheese, onion , tomato, jam, pickes</ion-label>\n          </div>\n          <div class=\"price_div\">\n            <ion-label class=\"price\">$16</ion-label>\n            <ion-label class=\"popular\">\n              <ion-icon name=\"star\"></ion-icon>Popular\n            </ion-label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card_div\">\n        <ion-label class=\"heading_lbl\">Snacks</ion-label>\n        <div class=\"card\" *ngFor=\"let item of [1,2,3]\">\n          <div class=\"desc_div\">\n            <ion-label class=\"product_name\">Classic Cheese Burger</ion-label>\n            <ion-label class=\"addons\">Beef, cheese, onion , tomato, jam, pickes</ion-label>\n          </div>\n          <div class=\"price_div\">\n            <ion-label class=\"price\">$16</ion-label>\n            <ion-label class=\"popular\">\n              <ion-icon name=\"star\"></ion-icon>Popular\n            </ion-label>\n          </div>\n        </div>\n      </div>\n\n      <ion-button (click)=\"goToHome()\" expand=\"full\" shape=\"round\" class=\"red_btn\">\n        Add to Basket\n      </ion-button>\n\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/product/product-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/product/product-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProductPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageRoutingModule", function() { return ProductPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.page */ "./src/app/pages/product/product.page.ts");




const routes = [
    {
        path: '',
        component: _product_page__WEBPACK_IMPORTED_MODULE_3__["ProductPage"]
    }
];
let ProductPageRoutingModule = class ProductPageRoutingModule {
};
ProductPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProductPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/product/product.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/product/product.module.ts ***!
  \*************************************************/
/*! exports provided: ProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPageModule", function() { return ProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-routing.module */ "./src/app/pages/product/product-routing.module.ts");
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product.page */ "./src/app/pages/product/product.page.ts");







let ProductPageModule = class ProductPageModule {
};
ProductPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _product_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductPageRoutingModule"]
        ],
        declarations: [_product_page__WEBPACK_IMPORTED_MODULE_6__["ProductPage"]]
    })
], ProductPageModule);



/***/ }),

/***/ "./src/app/pages/product/product.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/product/product.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ios_test {\n  padding-top: 40px !important;\n}\n\n.main_content_div {\n  width: 100%;\n}\n\n.main_content_div .upper_div {\n  width: 100%;\n  height: 250px;\n  background-color: #FFBAAE;\n  padding: 20px;\n  position: relative;\n}\n\n.main_content_div .upper_div .scooter {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.main_content_div .upper_div .round_lbl {\n  background: white;\n  padding: 10px;\n  border-radius: 25px;\n  background: white;\n  padding: 10px;\n  border-radius: 25px;\n  bottom: 35px;\n  right: 16px;\n  position: absolute;\n}\n\n.main_content_div .lower_div {\n  width: 100%;\n  background: white;\n  height: 200px;\n  z-index: 99999;\n  margin-top: -20px;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 5px;\n  position: absolute;\n}\n\n.main_content_div .lower_div .heading_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.main_content_div .lower_div .heading_div .heading_lbl {\n  font-size: 22px;\n  font-family: open-bold;\n  margin-top: 10px;\n  color: var(--ion-color-main);\n}\n\n.main_content_div .lower_div .heading_div .heart {\n  font-size: 25px;\n}\n\n.main_content_div .lower_div .rating_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 10px;\n}\n\n.main_content_div .lower_div .rating_div .rating {\n  color: red;\n}\n\n.main_content_div .lower_div .rating_div .red_lbl {\n  color: var(--ion-color-main);\n  margin-left: 5px;\n}\n\n.main_content_div .lower_div .rating_div .small_lbl {\n  color: var(--ion-color-light) !important;\n}\n\n.main_content_div .lower_div .rating_div .top_item {\n  margin-left: 10px;\n}\n\n.main_content_div .lower_div .slider_div {\n  margin-top: 20px;\n}\n\n.main_content_div .lower_div .slider_div .heading_lbl {\n  font-size: 22px;\n  font-family: open-bold;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  display: block;\n}\n\n.main_content_div .lower_div .slider_div .slide_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.main_content_div .lower_div .slider_div .slide_div .img_back .slider_img {\n  width: 85px;\n  border-radius: 10px;\n}\n\n.main_content_div .lower_div .slider_div .slide_div .slider_lbl {\n  display: block;\n  font-size: 12px;\n  font-family: open-regular;\n  font-weight: bold;\n  margin-top: 5px;\n  text-align: left;\n  margin-left: 10px;\n}\n\n.main_content_div .lower_div .card_div {\n  margin-top: 20px;\n}\n\n.main_content_div .lower_div .card_div .heading_lbl {\n  font-size: 20px;\n  font-family: open-bold;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  display: block;\n}\n\n.main_content_div .lower_div .card_div .card {\n  width: 100%;\n  border-radius: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  padding: 20px;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  position: relative;\n  margin-bottom: 20px;\n}\n\n.main_content_div .lower_div .card_div .card .desc_div {\n  width: 80%;\n}\n\n.main_content_div .lower_div .card_div .card .desc_div .product_name {\n  display: block;\n}\n\n.main_content_div .lower_div .card_div .card .desc_div .addons {\n  color: var(--ion-color-light) !important;\n}\n\n.main_content_div .lower_div .card_div .card .price_div .price {\n  font-weight: bold;\n}\n\n.main_content_div .lower_div .card_div .card .price_div .popular {\n  position: absolute;\n  display: block;\n  right: 10px;\n  bottom: 10px;\n  color: var(--ion-color-main);\n}\n\n.main_content_div .lower_div .red_btn {\n  --background: var(--ion-color-main);\n  height: 40px;\n  --background-activated: var(--ion-color-main);\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxwaW5vY2hldC9Eb2N1bWVudHMvR2l0SHViL2ljYXJlcy1hcHAtZXhhbWVuL3NyYy9hcHAvcGFnZXMvcHJvZHVjdC9wcm9kdWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxXQUFBO0FDRUo7O0FEREk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDR1I7O0FERFE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtBQ0daOztBRERRO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNHWjs7QURBSTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNFUjs7QURBUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDRVo7O0FEQVk7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDRWhCOztBREFZO0VBQ0ksZUFBQTtBQ0VoQjs7QURFUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBWjs7QURFWTtFQUNJLFVBQUE7QUNBaEI7O0FERVk7RUFDSSw0QkFBQTtFQUNBLGdCQUFBO0FDQWhCOztBREVZO0VBQ0ksd0NBQUE7QUNBaEI7O0FERVk7RUFDSSxpQkFBQTtBQ0FoQjs7QURJUTtFQUNJLGdCQUFBO0FDRlo7O0FER1k7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0RoQjs7QURJWTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0ZoQjs7QURJb0I7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUNGeEI7O0FES2dCO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNIcEI7O0FEUVE7RUFDSSxnQkFBQTtBQ05aOztBRE9ZO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNMaEI7O0FET1k7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0xoQjs7QURPZ0I7RUFDSSxVQUFBO0FDTHBCOztBRE1vQjtFQUNJLGNBQUE7QUNKeEI7O0FETW9CO0VBQ0ksd0NBQUE7QUNKeEI7O0FEU29CO0VBQ0csaUJBQUE7QUNQdkI7O0FEU29CO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQ1B4Qjs7QURhUTtFQUNJLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLDZDQUFBO0VBQ0EsZ0JBQUE7QUNYWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9zX3Rlc3R7XG4gICAgcGFkZGluZy10b3A6IDQwcHggIWltcG9ydGFudDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC51cHBlcl9kaXZ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCQUFFO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgLnNjb290ZXJ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgIH1cbiAgICAgICAgLnJvdW5kX2xibHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgYm90dG9tOiAzNXB4O1xuICAgICAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxvd2VyX2RpdntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICB6LWluZGV4OiA5OTk5OTtcbiAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICAuaGVhZGluZ19kaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5oZWFkaW5nX2xibHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVhcnR7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnJhdGluZ19kaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgICAgICAgICAucmF0aW5ne1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmVkX2xibHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc21hbGxfbGJse1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudG9wX2l0ZW17XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc2xpZGVyX2RpdntcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAuaGVhZGluZ19sYmx7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLWJvbGQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2xpZGVfZGl2e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAuaW1nX2JhY2t7XG4gICAgICAgICAgICAgICAgICAgIC5zbGlkZXJfaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zbGlkZXJfbGJse1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZF9kaXZ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgLmhlYWRpbmdfbGJse1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogb3Blbi1ib2xkO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jYXJke1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgICAgICAgICAgICAgIC5kZXNjX2RpdntcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgLnByb2R1Y3RfbmFtZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hZGRvbnN7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5wcmljZV9kaXZ7XG4gICAgICAgICAgICAgICAgICAgIC5wcmljZXtcbiAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnBvcHVsYXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmVkX2J0bntcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZCA6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQgOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogMHB4IDZweCAxNXB4O1xuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxufSIsIi5pb3NfdGVzdCB7XG4gIHBhZGRpbmctdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudXBwZXJfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkJBQUU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC51cHBlcl9kaXYgLnNjb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLm1haW5fY29udGVudF9kaXYgLnVwcGVyX2RpdiAucm91bmRfbGJsIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBib3R0b206IDM1cHg7XG4gIHJpZ2h0OiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICB6LWluZGV4OiA5OTk5OTtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLmhlYWRpbmdfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuaGVhZGluZ19kaXYgLmhlYWRpbmdfbGJsIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LWZhbWlseTogb3Blbi1ib2xkO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuaGVhZGluZ19kaXYgLmhlYXJ0IHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAucmF0aW5nX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLnJhdGluZ19kaXYgLnJhdGluZyB7XG4gIGNvbG9yOiByZWQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5yYXRpbmdfZGl2IC5yZWRfbGJsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLnJhdGluZ19kaXYgLnNtYWxsX2xibCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpICFpbXBvcnRhbnQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5yYXRpbmdfZGl2IC50b3BfaXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuc2xpZGVyX2RpdiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5zbGlkZXJfZGl2IC5oZWFkaW5nX2xibCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5zbGlkZXJfZGl2IC5zbGlkZV9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuc2xpZGVyX2RpdiAuc2xpZGVfZGl2IC5pbWdfYmFjayAuc2xpZGVyX2ltZyB7XG4gIHdpZHRoOiA4NXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuc2xpZGVyX2RpdiAuc2xpZGVfZGl2IC5zbGlkZXJfbGJsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5jYXJkX2RpdiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5jYXJkX2RpdiAuaGVhZGluZ19sYmwge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLWJvbGQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuY2FyZF9kaXYgLmNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBwYWRkaW5nOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLmNhcmRfZGl2IC5jYXJkIC5kZXNjX2RpdiB7XG4gIHdpZHRoOiA4MCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAubG93ZXJfZGl2IC5jYXJkX2RpdiAuY2FyZCAuZGVzY19kaXYgLnByb2R1Y3RfbmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuY2FyZF9kaXYgLmNhcmQgLmRlc2NfZGl2IC5hZGRvbnMge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSAhaW1wb3J0YW50O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAuY2FyZF9kaXYgLmNhcmQgLnByaWNlX2RpdiAucHJpY2Uge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5sb3dlcl9kaXYgLmNhcmRfZGl2IC5jYXJkIC5wcmljZV9kaXYgLnBvcHVsYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xufVxuLm1haW5fY29udGVudF9kaXYgLmxvd2VyX2RpdiAucmVkX2J0biB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICBoZWlnaHQ6IDQwcHg7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/product/product.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/product/product.page.ts ***!
  \***********************************************/
/*! exports provided: ProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPage", function() { return ProductPage; });
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



let ProductPage = class ProductPage {
    constructor(platform, navCtrl, router) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.router = router;
        this.slideOpts = {
            slidesPerView: 3.5,
        };
        if (this.platform.is('ios')) {
            this.plt = "ios";
        }
        else {
            this.plt = "android";
        }
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
    goToProductList() {
        this.router.navigate(['/product-list']);
    }
    goToHome() {
        this.router.navigate(['my-order']);
    }
};
ProductPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProductPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/product/product.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product.page.scss */ "./src/app/pages/product/product.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ProductPage);



/***/ })

}]);
//# sourceMappingURL=pages-product-product-module-es2015.js.map