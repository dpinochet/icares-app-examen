(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-order-my-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-order/my-order.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-order/my-order.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"header_div\">\n      \n      <ion-buttons slot=\"start\" class=\"btn_back\">\n        <ion-button (click)=\"goBack()\">\n          <img src=\"assets/imgs/back2.png\">\n        </ion-button>\n      </ion-buttons>\n      <ion-label class=\"title\">My Order</ion-label>\n\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\" [class.ios_test]=\"plt == 'ios'\">\n<!-- \n    <div class=\"header_div\">\n      <img src=\"assets/imgs/back2.png\" style=\"width: 20px;\" class=\"btn_back\" (click)=\"goBack()\">\n      <ion-label class=\"round_lbl\">My Order</ion-label>\n    </div> -->\n\n    <div *ngIf=\"have_product\">\n      <div class=\"product_div\">\n        <div class=\"image_div\" [style.backgroundImage]=\"'url(assets/imgs/image2.jpg)'\"></div>\n        <div class=\"desc_div\">\n          <ion-label class=\"heading_lbl\">Really Cool Burgers</ion-label>\n          <ion-label class=\"small_lbl\">Burger - Western Food - $$</ion-label>\n          <ion-icon name=\"star\" class=\"rating\"></ion-icon>\n          <ion-label class=\"red_lbl\"><span class=\"red_lbl\">4.9</span> (124 rating)</ion-label><br>\n          <ion-icon name=\"pin\" class=\"rating\"></ion-icon>\n          <ion-label class=\"small_lbl2\">123 Rock Street, New York City</ion-label>\n        </div>\n      </div>\n\n      <div class=\"product_list\">\n        <div class=\"list_item\" *ngFor=\"let item of [1,2,3,4]\">\n          <ion-label>Classic Cheese Burger X 1</ion-label>\n          <ion-label class=\"price\">$16</ion-label>\n        </div>\n\n        <div class=\"list_item\" style=\"border-bottom: none;\">\n          <ion-label class=\"red_lbl\">Add More Foods</ion-label>\n        </div>\n      </div>\n\n      <div class=\"delivery_div\">\n        <div class=\"list_item\">\n          <ion-label>Delivery Instuction</ion-label>\n          <ion-label class=\"red_lbl\">Add Notes +</ion-label>\n        </div>\n\n        <div class=\"list_item\">\n          <ion-label>Sub Total</ion-label>\n          <ion-label class=\"price\">$64.00</ion-label>\n        </div>\n\n        <div class=\"list_item\">\n          <ion-label>Delivery Cost</ion-label>\n          <ion-label class=\"price\">Free</ion-label>\n        </div>\n\n      </div>\n\n      <ion-button (click)=\"goToCheckout()\" expand=\"full\" shape=\"round\" class=\"red_btn\">Check Out</ion-button>\n\n    </div>\n\n    <div *ngIf=\"!have_product\" class=\"empty_cart\">\n      <img src=\"assets/imgs/cart.png\" alt=\"\">\n      <ion-label class=\"heading_lbl\">Your Basket is empty</ion-label>\n      <ion-label class=\"small_lbl\">Make your basket happy and <br> add foods to it</ion-label>\n    </div>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/my-order/my-order-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/my-order/my-order-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MyOrderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrderPageRoutingModule", function() { return MyOrderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _my_order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-order.page */ "./src/app/pages/my-order/my-order.page.ts");




const routes = [
    {
        path: '',
        component: _my_order_page__WEBPACK_IMPORTED_MODULE_3__["MyOrderPage"]
    }
];
let MyOrderPageRoutingModule = class MyOrderPageRoutingModule {
};
MyOrderPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyOrderPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/my-order/my-order.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/my-order/my-order.module.ts ***!
  \***************************************************/
/*! exports provided: MyOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrderPageModule", function() { return MyOrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _my_order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-order-routing.module */ "./src/app/pages/my-order/my-order-routing.module.ts");
/* harmony import */ var _my_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-order.page */ "./src/app/pages/my-order/my-order.page.ts");







let MyOrderPageModule = class MyOrderPageModule {
};
MyOrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_order_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyOrderPageRoutingModule"]
        ],
        declarations: [_my_order_page__WEBPACK_IMPORTED_MODULE_6__["MyOrderPage"]]
    })
], MyOrderPageModule);



/***/ }),

/***/ "./src/app/pages/my-order/my-order.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/my-order/my-order.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar:last-child {\n  --border-width: 0px;\n}\n\n.header-md:after {\n  background: none;\n}\n\n.header_div {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n}\n\n.header_div .title {\n  color: black;\n  font-family: open-regular;\n}\n\n.header_div .btn_back {\n  position: absolute;\n  left: 16px;\n  width: 35px;\n}\n\n.main_content_div {\n  width: 100%;\n}\n\n.main_content_div .product_div {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  padding: 10px;\n  margin-bottom: 20px;\n  position: relative;\n  padding: 16px;\n}\n\n.main_content_div .product_div .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100px;\n  height: 100px;\n}\n\n.main_content_div .product_div .desc_div {\n  margin-left: 20px;\n}\n\n.main_content_div .product_div .desc_div .heading_lbl {\n  font-size: 20px;\n  font-family: open-bold;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div .product_div .desc_div .small_lbl {\n  font-size: 12px;\n  color: var(--ion-color-light);\n  font-family: open-regular;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div .product_div .desc_div .rating {\n  color: var(--ion-color-main);\n  font-size: 15px;\n}\n\n.main_content_div .product_div .desc_div .red_lbl {\n  color: var(--ion-color-main);\n  font-size: 12px;\n  font-family: open-regular;\n}\n\n.main_content_div .product_div .desc_div .small_lbl2 {\n  font-size: 12px;\n  color: var(--ion-color-light);\n  font-family: open-regular;\n  text-align: left;\n}\n\n.main_content_div .product_list {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background-color: #FAFAFA;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.main_content_div .product_list .list_item {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  border-bottom: 1px solid #E8E8E8;\n  padding-bottom: 15px;\n  padding-top: 15px;\n  font-family: open-regular;\n}\n\n.main_content_div .product_list .list_item .price {\n  font-family: open-bold;\n  font-size: 16px;\n}\n\n.main_content_div .product_list .list_item .red_lbl {\n  color: var(--ion-color-main);\n}\n\n.main_content_div .delivery_div {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.main_content_div .delivery_div .list_item {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  border-bottom: 1px solid #E8E8E8;\n  padding-bottom: 15px;\n  padding-top: 15px;\n  font-family: open-regular;\n}\n\n.main_content_div .delivery_div .list_item .price {\n  font-family: open-bold;\n  font-size: 16px;\n}\n\n.main_content_div .delivery_div .list_item .red_lbl {\n  color: var(--ion-color-main);\n}\n\n.main_content_div .red_btn {\n  --background: var(--ion-color-main);\n  height: 40px;\n  --background-activated: var(--ion-color-main);\n  margin-top: 30px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.main_content_div .empty_cart {\n  width: 100%;\n  height: 80vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.main_content_div .empty_cart .heading_lbl {\n  color: var(--ion-color-main);\n  font-family: open-bold;\n  font-size: 24px;\n  display: block;\n  margin-top: 20px;\n}\n\n.main_content_div .empty_cart .small_lbl {\n  display: block;\n  margin-top: 20px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxwaW5vY2hldC9Eb2N1bWVudHMvR2l0SHViL2ljYXJlcy1hcHAtZXhhbWVuL3NyYy9hcHAvcGFnZXMvbXktb3JkZXIvbXktb3JkZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9teS1vcmRlci9teS1vcmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7QUNFSjs7QURBQTtFQUNJLFdBQUE7RUFFQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUk7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUNFUjs7QURDSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNDUjs7QURFQTtFQUNJLFdBQUE7QUNDSjs7QURlSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNiUjs7QURlUTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNiWjs7QURlUTtFQUNJLGlCQUFBO0FDYlo7O0FEY1k7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNaaEI7O0FEY1k7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1poQjs7QURjWTtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtBQ1poQjs7QURjWTtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDWmhCOztBRGNZO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFFQSxnQkFBQTtBQ2JoQjs7QURrQkk7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ2hCUjs7QURrQlE7RUFDSSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDaEJaOztBRGtCWTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtBQ2hCaEI7O0FEa0JZO0VBQ0ksNEJBQUE7QUNoQmhCOztBRHFCSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNuQlI7O0FEb0JRO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ2xCWjs7QURvQlk7RUFDSSxzQkFBQTtFQUNBLGVBQUE7QUNsQmhCOztBRHFCWTtFQUNJLDRCQUFBO0FDbkJoQjs7QUR3Qkk7RUFDSSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ3RCUjs7QUR5Qkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDdkJSOztBRHlCUTtFQUNJLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDdkJaOztBRHlCUTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDdkJaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbXktb3JkZXIvbXktb3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcbn1cbi5oZWFkZXItbWQ6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uaGVhZGVyX2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBcbiAgICAudGl0bGV7XG4gICAgICAgIGNvbG9yOiBibGFjazsgXG4gICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gICAgfVxuXG4gICAgLmJ0bl9iYWNrIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAxNnB4O1xuICAgICAgICB3aWR0aDogMzVweDtcbiAgICB9XG59XG4ubWFpbl9jb250ZW50X2RpdntcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC8vIC5oZWFkZXJfZGl2e1xuICAgIC8vICAgICB3aWR0aDogMTAwJTtcbiAgICAvLyAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIC8vICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLy8gICAgIC5idG5fYmFjayB7XG4gICAgLy8gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gICAgICAgICBsZWZ0OiAxNnB4O1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgLnByb2R1Y3RfZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgICAgIC5pbWFnZV9kaXZ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5kZXNjX2RpdntcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgLmhlYWRpbmdfbGJse1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogb3Blbi1ib2xkO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc21hbGxfbGJse1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmF0aW5ne1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJlZF9sYmx7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjsgICAgIFxuICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAuc21hbGxfbGJsMntcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnByb2R1Y3RfbGlzdHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuXG4gICAgICAgIC5saXN0X2l0ZW17XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFOEU4RTg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcblxuICAgICAgICAgICAgLnByaWNle1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLWJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJlZF9sYmx7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kZWxpdmVyeV9kaXZ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICAgICAgLmxpc3RfaXRlbXtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U4RThFODtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuXG4gICAgICAgICAgICAucHJpY2V7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9ICAgXG5cbiAgICAgICAgICAgIC5yZWRfbGJse1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnJlZF9idG57XG4gICAgICAgIC0tYmFja2dyb3VuZCA6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkIDogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgfVxuXG4gICAgLmVtcHR5X2NhcnR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIC5oZWFkaW5nX2xibHtcbiAgICAgICAgICAgIGNvbG9yIDogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuc21hbGxfbGJse1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxufSIsImlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xufVxuXG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmhlYWRlcl9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZWFkZXJfZGl2IC50aXRsZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbn1cbi5oZWFkZXJfZGl2IC5idG5fYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTZweDtcbiAgd2lkdGg6IDM1cHg7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucHJvZHVjdF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnByb2R1Y3RfZGl2IC5pbWFnZV9kaXYge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5wcm9kdWN0X2RpdiAuZGVzY19kaXYge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5wcm9kdWN0X2RpdiAuZGVzY19kaXYgLmhlYWRpbmdfbGJsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogb3Blbi1ib2xkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5wcm9kdWN0X2RpdiAuZGVzY19kaXYgLnNtYWxsX2xibCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1haW5fY29udGVudF9kaXYgLnByb2R1Y3RfZGl2IC5kZXNjX2RpdiAucmF0aW5nIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnByb2R1Y3RfZGl2IC5kZXNjX2RpdiAucmVkX2xibCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5wcm9kdWN0X2RpdiAuZGVzY19kaXYgLnNtYWxsX2xibDIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1haW5fY29udGVudF9kaXYgLnByb2R1Y3RfbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5wcm9kdWN0X2xpc3QgLmxpc3RfaXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRThFOEU4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucHJvZHVjdF9saXN0IC5saXN0X2l0ZW0gLnByaWNlIHtcbiAgZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnByb2R1Y3RfbGlzdCAubGlzdF9pdGVtIC5yZWRfbGJsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZWxpdmVyeV9kaXYge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGVsaXZlcnlfZGl2IC5saXN0X2l0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U4RThFODtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmRlbGl2ZXJ5X2RpdiAubGlzdF9pdGVtIC5wcmljZSB7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLWJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5kZWxpdmVyeV9kaXYgLmxpc3RfaXRlbSAucmVkX2xibCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVkX2J0biB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICBoZWlnaHQ6IDQwcHg7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmVtcHR5X2NhcnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5lbXB0eV9jYXJ0IC5oZWFkaW5nX2xibCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLWJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZW1wdHlfY2FydCAuc21hbGxfbGJsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/my-order/my-order.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/my-order/my-order.page.ts ***!
  \*************************************************/
/*! exports provided: MyOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrderPage", function() { return MyOrderPage; });
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



let MyOrderPage = class MyOrderPage {
    constructor(navCtrl, router, platform) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.platform = platform;
        this.have_product = true;
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
    goToCheckout() {
        this.router.navigate(['/checkout']);
    }
};
MyOrderPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
MyOrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-order.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-order/my-order.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-order.page.scss */ "./src/app/pages/my-order/my-order.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], MyOrderPage);



/***/ })

}]);
//# sourceMappingURL=pages-my-order-my-order-module-es2015.js.map