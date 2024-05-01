(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-track-order-track-order-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/track-order/track-order.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/track-order/track-order.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"header_div\">\n      \n      <ion-buttons slot=\"start\" class=\"btn_back\">\n        <ion-button (click)=\"goBack()\">\n          <img src=\"assets/imgs/back2.png\">\n        </ion-button>\n      </ion-buttons>\n      <ion-label class=\"title\">Track Your Order</ion-label>\n\n      <ion-buttons class=\"chat_lbl\">\n        <ion-button (click)=\"goToChat()\">\n          <ion-label class=\"red_lbl\">Chat <ion-icon name=\"chatbubbles\" class=\"red_chat\"></ion-icon></ion-label>\n        </ion-button>\n      </ion-buttons>\n\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\" [class.ios_test]=\"plt == 'ios'\">\n    \n    <!-- <div class=\"header_div\">\n      <img src=\"assets/imgs/back2.png\" style=\"width: 20px;\" class=\"btn_back\" (click)=\"goBack()\">\n      <ion-label>Track Your Order</ion-label>\n      <ion-label class=\"chat_lbl\">Chat <ion-icon name=\"chatbubbles\" class=\"red_chat\"></ion-icon></ion-label>\n    </div> -->\n\n    <ion-label class=\"delivery_lbl\">Estimate Delivery Time</ion-label>\n    <ion-label class=\"red_bold\">05:30 PM</ion-label>\n\n    <div class=\"user_rating\">\n      <div class=\"left_div\">\n        <img src=\"assets/imgs/user.jpg\" class=\"user_image\">\n        <div class=\"inner_div\">\n          <ion-label class=\"small_lbl\">Your Rider</ion-label>\n          <ion-label class=\"bold_lbl\">Jason Stroll</ion-label>\n        </div>\n      </div>\n\n      <div class=\"right_div\">\n        <ion-label class=\"red_lbl\"><ion-icon name=\"star\"></ion-icon> 4.9</ion-label>\n        <ion-label class=\"small_lbl\">(124 Ratings)</ion-label>\n      </div>  \n    </div>\n\n    <div class=\"tracking_div\">\n      \n      <div class=\"left\">\n        <span *ngFor=\"let item of order_detail\">\n          <div class=\"line_div\" [class.line_div_darkgray]=\"item.status == 1\"></div>\n          <div class=\"round_div_gray\" [class.round_div_red]=\"item.status == 2\" [class.round_div_darkgray]=\"item.status == 1\"></div>\n        </span>\n      </div>\n      \n      <div class=\"right\">\n        <span *ngFor=\"let item of order_detail\">\n          <div class=\"line_div\"></div>\n          <div class=\"round_div_gray\" [class.round_div_red]=\"item.status == 2\" [class.round_div_darkgray]=\"item.status == 1\">\n            {{item.value}}\n          </div>\n        </span>\n      </div>\n\n    </div>\n\n    <ion-button expand=\"full\" shape=\"round\" class=\"red_btn\">Cancel Your Order</ion-button>\n\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/track-order/track-order-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/track-order/track-order-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TrackOrderPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackOrderPageRoutingModule", function() { return TrackOrderPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _track_order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./track-order.page */ "./src/app/pages/track-order/track-order.page.ts");




const routes = [
    {
        path: '',
        component: _track_order_page__WEBPACK_IMPORTED_MODULE_3__["TrackOrderPage"]
    }
];
let TrackOrderPageRoutingModule = class TrackOrderPageRoutingModule {
};
TrackOrderPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TrackOrderPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/track-order/track-order.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/track-order/track-order.module.ts ***!
  \*********************************************************/
/*! exports provided: TrackOrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackOrderPageModule", function() { return TrackOrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _track_order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./track-order-routing.module */ "./src/app/pages/track-order/track-order-routing.module.ts");
/* harmony import */ var _track_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./track-order.page */ "./src/app/pages/track-order/track-order.page.ts");







let TrackOrderPageModule = class TrackOrderPageModule {
};
TrackOrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _track_order_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrackOrderPageRoutingModule"]
        ],
        declarations: [_track_order_page__WEBPACK_IMPORTED_MODULE_6__["TrackOrderPage"]]
    })
], TrackOrderPageModule);



/***/ }),

/***/ "./src/app/pages/track-order/track-order.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/track-order/track-order.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar:last-child {\n  --border-width: 0px;\n}\n\n.header-md:after {\n  background: none;\n}\n\n.header_div {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n}\n\n.header_div .title {\n  color: black;\n  font-family: open-regular;\n}\n\n.header_div .btn_back {\n  position: absolute;\n  left: 16px;\n  width: 35px;\n}\n\n.header_div .red_chat {\n  color: var(--ion-color-main);\n  font-size: 20px;\n}\n\n.header_div .red_lbl {\n  color: black;\n}\n\n.header_div .chat_lbl {\n  position: absolute;\n  right: 16px;\n}\n\n.main_content_div {\n  width: 100%;\n}\n\n.main_content_div .delivery_lbl {\n  margin-top: 15px;\n  display: block;\n  text-align: center;\n  font-family: open-regular;\n}\n\n.main_content_div .red_bold {\n  display: block;\n  text-align: center;\n  font-family: open-bold;\n  color: var(--ion-color-main);\n  font-size: 24px;\n  border-bottom: 1px solid #E8E8E8;\n  padding-bottom: 10px;\n  margin-left: 16px;\n  margin-right: 16px;\n}\n\n.main_content_div .user_rating {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  width: 100%;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 20px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.main_content_div .user_rating .left_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.main_content_div .user_rating .left_div .user_image {\n  width: 70px;\n  height: 70px;\n  border-radius: 5px;\n}\n\n.main_content_div .user_rating .left_div .inner_div {\n  margin-left: 15px;\n}\n\n.main_content_div .user_rating .left_div .inner_div .small_lbl {\n  display: block;\n  font-family: open-regular;\n}\n\n.main_content_div .user_rating .left_div .inner_div .bold_lbl {\n  display: block;\n  font-family: open-bold;\n  font-size: 18px;\n}\n\n.main_content_div .user_rating .right_div .red_lbl {\n  display: block;\n  color: var(--ion-color-main);\n  text-align: right;\n}\n\n.main_content_div .user_rating .right_div .small_lbl {\n  display: block;\n  color: var(--ion-color-light);\n  text-align: right;\n}\n\n.main_content_div .tracking_div {\n  margin-top: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  background: #FAFAFA;\n}\n\n.main_content_div .tracking_div .left {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 30%;\n}\n\n.main_content_div .tracking_div .left .line_div {\n  height: 40px;\n  width: 3px;\n  border: 3px solid #E8E8E8;\n}\n\n.main_content_div .tracking_div .left .line_div_darkgray {\n  height: 40px;\n  width: 3px;\n  border: 3px solid #C8C7CE;\n}\n\n.main_content_div .tracking_div .left .round_div_gray {\n  height: 20px;\n  width: 20px;\n  background-color: #E8E8E8;\n  border-radius: 50%;\n  margin-left: -7px;\n}\n\n.main_content_div .tracking_div .left .round_div_darkgray {\n  height: 20px;\n  width: 20px;\n  background-color: #C8C7CE;\n  border-radius: 50%;\n  margin-left: -7px;\n}\n\n.main_content_div .tracking_div .left .round_div_red {\n  height: 20px;\n  width: 20px;\n  background-color: var(--ion-color-main);\n  border-radius: 50%;\n  margin-left: -7px;\n}\n\n.main_content_div .tracking_div .right {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  width: 70%;\n}\n\n.main_content_div .tracking_div .right .line_div {\n  height: 40px;\n  width: 100%;\n}\n\n.main_content_div .tracking_div .right .round_div_gray {\n  height: 20px;\n  width: 100% px;\n  color: #E8E8E8;\n}\n\n.main_content_div .tracking_div .right .round_div_red {\n  height: 20px;\n  width: 100% px;\n  color: var(--ion-color-main);\n}\n\n.main_content_div .tracking_div .right .round_div_darkgray {\n  height: 20px;\n  width: 100%;\n  color: #C8C7CE;\n}\n\n.main_content_div .red_btn {\n  --background: #F3F2F7;\n  height: 40px;\n  --background-activated: #F3F2F7;\n  margin-top: 30px;\n  padding-left: 16px;\n  padding-right: 16px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxwaW5vY2hldC9Eb2N1bWVudHMvR2l0SHViL2ljYXJlcy1hcHAtZXhhbWVuL3NyYy9hcHAvcGFnZXMvdHJhY2stb3JkZXIvdHJhY2stb3JkZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy90cmFjay1vcmRlci90cmFjay1vcmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxtQkFBQTtBQ0hKOztBREtBO0VBQ0ksZ0JBQUE7QUNGSjs7QURJQTtFQUNJLFdBQUE7RUFFQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGtCQUFBO0FDRko7O0FESUk7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUNGUjs7QURLSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNIUjs7QURLSTtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtBQ0hSOztBREtJO0VBQ0ksWUFBQTtBQ0hSOztBREtJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDSFI7O0FET0E7RUFDSSxXQUFBO0FDSko7O0FEK0JJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQzdCUjs7QUQrQkk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDN0JSOztBRGdDSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQzlCUjs7QURnQ1E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDOUJaOztBRGdDWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUM5QmhCOztBRGdDWTtFQUNJLGlCQUFBO0FDOUJoQjs7QUQrQmdCO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FDN0JwQjs7QUQrQmdCO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQzdCcEI7O0FEbUNZO0VBQ0ksY0FBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUNqQ2hCOztBRG1DWTtFQUNJLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0FDakNoQjs7QURzQ0k7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLG1CQUFBO0FDcENSOztBRHNDUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxVQUFBO0FDcENaOztBRHFDWTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUNuQ2hCOztBRHNDWTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUNwQ2hCOztBRHVDWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDckNoQjs7QUR1Q1k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ3JDaEI7O0FEdUNZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNyQ2hCOztBRHlDUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxVQUFBO0FDdkNaOztBRHdDWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDdENoQjs7QUR3Q1k7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUN0Q2hCOztBRHdDWTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUN0Q2hCOztBRHdDWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ3RDaEI7O0FEMENJO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDeENSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHJhY2stb3JkZXIvdHJhY2stb3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmlvc190ZXN0e1xuLy8gICAgIHBhZGRpbmctdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XG4vLyB9XG5cbmlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xuICAgIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG59XG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLmhlYWRlcl9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXG4gICAgLnRpdGxle1xuICAgICAgICBjb2xvcjogYmxhY2s7IFxuICAgICAgICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuICAgIH1cblxuICAgIC5idG5fYmFjayB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMTZweDtcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgfVxuICAgIC5yZWRfY2hhdHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAucmVkX2xibHtcbiAgICAgICAgY29sb3I6IGJsYWNrOyBcbiAgICB9XG4gICAgLmNoYXRfbGJse1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgIH1cbn1cblxuLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG5cbiAgICAvLyAuaGVhZGVyX2RpdntcbiAgICAvLyAgICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gICAgIGhlaWdodDogNTBweDtcbiAgICAvLyAgICAgZGlzcGxheTogZmxleDtcbiAgICAvLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvLyAgICAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICAgICAgXG5cbiAgICAvLyAgICAgLnJlZF9jaGF0e1xuICAgIC8vICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgICAvLyAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICAuYnRuX2JhY2sge1xuICAgIC8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vICAgICAgICAgbGVmdDogMTZweDtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICAuY2hhdF9sYmx7XG4gICAgLy8gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gICAgICAgICByaWdodDogMTZweDtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICAuZGVsaXZlcnlfbGJse1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xuICAgIH1cbiAgICAucmVkX2JvbGR7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBvcGVuLWJvbGQ7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDsgICBcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFOEU4RTg7IFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDsgICBcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICB9XG5cbiAgICAudXNlcl9yYXRpbmd7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcblxuICAgICAgICAubGVmdF9kaXZ7ICAgIFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7ICAgXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAudXNlcl9pbWFnZXtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmlubmVyX2RpdntcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICAuc21hbGxfbGJse1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJvbGRfbGJse1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5yaWdodF9kaXZ7XG4gICAgICAgICAgICAucmVkX2xibHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNtYWxsX2xibHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTsgXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudHJhY2tpbmdfZGl2e1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xuXG4gICAgICAgIC5sZWZ0e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgIC5saW5lX2RpdntcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDNweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjRThFOEU4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGluZV9kaXZfZGFya2dyYXl7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI0M4QzdDRTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJvdW5kX2Rpdl9ncmF5e1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThFOEU4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTdweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yb3VuZF9kaXZfZGFya2dyYXl7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDOEM3Q0U7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJvdW5kX2Rpdl9yZWR7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTdweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5yaWdodHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgLmxpbmVfZGl2e1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yb3VuZF9kaXZfZ3JheXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0U4RThFODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yb3VuZF9kaXZfcmVke1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucm91bmRfZGl2X2RhcmtncmF5e1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0M4QzdDRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucmVkX2J0bntcbiAgICAgICAgLS1iYWNrZ3JvdW5kIDogI0YzRjJGNztcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkIDogI0YzRjJGNztcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxufSIsImlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xufVxuXG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmhlYWRlcl9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZWFkZXJfZGl2IC50aXRsZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbn1cbi5oZWFkZXJfZGl2IC5idG5fYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTZweDtcbiAgd2lkdGg6IDM1cHg7XG59XG4uaGVhZGVyX2RpdiAucmVkX2NoYXQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uaGVhZGVyX2RpdiAucmVkX2xibCB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5oZWFkZXJfZGl2IC5jaGF0X2xibCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE2cHg7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGVsaXZlcnlfbGJsIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5yZWRfYm9sZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLWJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFOEU4RTg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnVzZXJfcmF0aW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnVzZXJfcmF0aW5nIC5sZWZ0X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudXNlcl9yYXRpbmcgLmxlZnRfZGl2IC51c2VyX2ltYWdlIHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnVzZXJfcmF0aW5nIC5sZWZ0X2RpdiAuaW5uZXJfZGl2IHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudXNlcl9yYXRpbmcgLmxlZnRfZGl2IC5pbm5lcl9kaXYgLnNtYWxsX2xibCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xufVxuLm1haW5fY29udGVudF9kaXYgLnVzZXJfcmF0aW5nIC5sZWZ0X2RpdiAuaW5uZXJfZGl2IC5ib2xkX2xibCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogb3Blbi1ib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudXNlcl9yYXRpbmcgLnJpZ2h0X2RpdiAucmVkX2xibCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC51c2VyX3JhdGluZyAucmlnaHRfZGl2IC5zbWFsbF9sYmwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDMwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYgLmxlZnQgLmxpbmVfZGl2IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogM3B4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjRThFOEU4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAubGVmdCAubGluZV9kaXZfZGFya2dyYXkge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAzcHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNDOEM3Q0U7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5sZWZ0IC5yb3VuZF9kaXZfZ3JheSB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOEU4RTg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC03cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5sZWZ0IC5yb3VuZF9kaXZfZGFya2dyYXkge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhDN0NFO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtN3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAubGVmdCAucm91bmRfZGl2X3JlZCB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tbGVmdDogLTdweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC50cmFja2luZ19kaXYgLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiA3MCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5yaWdodCAubGluZV9kaXYge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnRyYWNraW5nX2RpdiAucmlnaHQgLnJvdW5kX2Rpdl9ncmF5IHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTAwJSBweDtcbiAgY29sb3I6ICNFOEU4RTg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5yaWdodCAucm91bmRfZGl2X3JlZCB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDEwMCUgcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudHJhY2tpbmdfZGl2IC5yaWdodCAucm91bmRfZGl2X2RhcmtncmF5IHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNDOEM3Q0U7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVkX2J0biB7XG4gIC0tYmFja2dyb3VuZDogI0YzRjJGNztcbiAgaGVpZ2h0OiA0MHB4O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjRjNGMkY3O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/track-order/track-order.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/track-order/track-order.page.ts ***!
  \*******************************************************/
/*! exports provided: TrackOrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackOrderPage", function() { return TrackOrderPage; });
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



let TrackOrderPage = class TrackOrderPage {
    constructor(router, navCtrl, platform) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.order_detail = [
            {
                'status': 1,
                'value': 'Order Confirmed'
            },
            {
                'status': 1,
                'value': 'Prepering Your Order'
            },
            {
                'status': 1,
                'value': 'Order is ready at the restaurant'
            },
            {
                'status': 2,
                'value': 'Rider is picking up your order'
            },
            {
                'status': 0,
                'value': 'Rider is near by at your place'
            },
        ];
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
    goToChat() {
        this.router.navigate(['/chat']);
    }
};
TrackOrderPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
TrackOrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-track-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./track-order.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/track-order/track-order.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./track-order.page.scss */ "./src/app/pages/track-order/track-order.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
], TrackOrderPage);



/***/ })

}]);
//# sourceMappingURL=pages-track-order-track-order-module-es2015.js.map