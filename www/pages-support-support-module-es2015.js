(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-support-support-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"header_div\">\n      \n      <ion-buttons slot=\"start\" class=\"btn_back\">\n        <ion-button (click)=\"goBack()\">\n          <img src=\"assets/imgs/back2.png\">\n        </ion-button>\n      </ion-buttons>\n      <ion-label class=\"title\">Support</ion-label>\n\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\" [class.ios_test]=\"plt == 'ios'\">\n\n    <!-- <div class=\"header_div\">\n      <img src=\"assets/imgs/back2.png\" style=\"width: 20px;\" class=\"btn_back\" (click)=\"goBack()\">\n      <ion-label class=\"round_lbl\">Support</ion-label>\n    </div> -->\n\n      <ion-searchbar animated=\"true\" mode=\"ios\" placeholder=\"Search for help\" (ionChange)=\"onSearchChange($event)\" [debounce]=\"250\" class=\"search_bar\"></ion-searchbar>\n      \n      <div class=\"content_div\">\n        <div class=\"live_chat_div\">\n          <div class=\"first_div\">\n            <ion-label class=\"head_lbl\">Live chat with <br>our Support</ion-label>\n            <ion-button class=\"chat_btn\" shape=\"round\" size=\"small\" (click)=\"goToChat()\">Start</ion-button>\n          </div>\n          <div class=\"second_div\">\n            <img class=\"chat_img\" src=\"assets/imgs/live.png\">\n          </div>\n        </div>\n\n        <div class=\"question_div\">\n          <ion-label class=\"head_lbl\">Frequently Asked Questions</ion-label>\n\n          <div class=\"list_div\" *ngFor=\"let item of [1,2,3,4,5]\">\n            <ion-label>My order didn't delivered</ion-label>\n            <img src=\"assets/imgs/next.png\" slot=\"end\" style=\"width: 10px;\">\n          </div>\n\n        </div>\n\n        <div class=\"question_div\">\n          <ion-label class=\"head_lbl\">Payment Methods</ion-label>\n\n          <div class=\"list_div\" *ngFor=\"let item of [1,2,3]\">\n            <ion-label>How do I change my payment method</ion-label>\n            <img src=\"assets/imgs/next.png\" slot=\"end\" style=\"width: 10px;\">\n          </div>\n\n        </div>\n\n      </div>\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/support/support-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/support/support-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SupportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageRoutingModule", function() { return SupportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./support.page */ "./src/app/pages/support/support.page.ts");




const routes = [
    {
        path: '',
        component: _support_page__WEBPACK_IMPORTED_MODULE_3__["SupportPage"]
    }
];
let SupportPageRoutingModule = class SupportPageRoutingModule {
};
SupportPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SupportPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/support/support.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/support/support.module.ts ***!
  \*************************************************/
/*! exports provided: SupportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageModule", function() { return SupportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./support-routing.module */ "./src/app/pages/support/support-routing.module.ts");
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support.page */ "./src/app/pages/support/support.page.ts");







let SupportPageModule = class SupportPageModule {
};
SupportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _support_routing_module__WEBPACK_IMPORTED_MODULE_5__["SupportPageRoutingModule"]
        ],
        declarations: [_support_page__WEBPACK_IMPORTED_MODULE_6__["SupportPage"]]
    })
], SupportPageModule);



/***/ }),

/***/ "./src/app/pages/support/support.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/support/support.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar:last-child {\n  --border-width: 0px;\n}\n\n.header-md:after {\n  background: none;\n}\n\n.header_div {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n}\n\n.header_div .title {\n  color: black;\n  font-family: open-regular;\n}\n\n.header_div .btn_back {\n  position: absolute;\n  left: 16px;\n  width: 35px;\n}\n\n.main_content_div {\n  width: 100%;\n}\n\n.main_content_div .content_div {\n  background-color: #FAFAFA;\n}\n\n.main_content_div .content_div .live_chat_div {\n  margin-left: 16px;\n  margin-right: 16px;\n  background-color: white;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  padding: 15px;\n}\n\n.main_content_div .content_div .live_chat_div .first_div {\n  width: 60%;\n}\n\n.main_content_div .content_div .live_chat_div .first_div .head_lbl {\n  color: var(--ion-color-main);\n  font-family: open-bold;\n  font-size: 22px;\n  display: block;\n}\n\n.main_content_div .content_div .live_chat_div .first_div .chat_btn {\n  --background: var(--ion-color-main);\n  color: white;\n}\n\n.main_content_div .content_div .live_chat_div .second_div {\n  width: 40%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.main_content_div .content_div .live_chat_div .second_div .chat_img {\n  width: 100px;\n  height: 100px;\n}\n\n.main_content_div .content_div .question_div {\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-top: 25px;\n}\n\n.main_content_div .content_div .question_div .head_lbl {\n  font-size: 16px;\n  font-family: open-bold;\n  margin-bottom: 20px;\n  display: block;\n}\n\n.main_content_div .content_div .question_div .list_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  height: 50px;\n  -webkit-box-align: center;\n          align-items: center;\n  border-bottom: 1px solid #E8E8E8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxwaW5vY2hldC9Eb2N1bWVudHMvR2l0SHViL2ljYXJlcy1hcHAtZXhhbWVuL3NyYy9hcHAvcGFnZXMvc3VwcG9ydC9zdXBwb3J0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3VwcG9ydC9zdXBwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLG1CQUFBO0FDRko7O0FESUE7RUFDSSxnQkFBQTtBQ0RKOztBREdBO0VBQ0ksV0FBQTtFQUVBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURHSTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQ0RSOztBRElJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0ZSOztBREtBO0VBQ0ksV0FBQTtBQ0ZKOztBRGlCSTtFQUNFLHlCQUFBO0FDZk47O0FEaUJNO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGFBQUE7QUNmVjs7QURnQlE7RUFDSSxVQUFBO0FDZFo7O0FEZVk7RUFDSSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNiaEI7O0FEZVk7RUFDSSxtQ0FBQTtFQUNBLFlBQUE7QUNiaEI7O0FEZ0JRO0VBQ0ksVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNkWjs7QURlWTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDYmhCOztBRGtCTTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ2hCVjs7QURpQlU7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNmZDs7QURpQlU7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQ0FBQTtBQ2ZkIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3VwcG9ydC9zdXBwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5pb3NfdGVzdHtcbi8vICAgICBwYWRkaW5nLXRvcDogNDBweCAhaW1wb3J0YW50O1xuLy8gfVxuaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcbn1cbi5oZWFkZXItbWQ6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uaGVhZGVyX2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC50aXRsZXtcbiAgICAgICAgY29sb3I6IGJsYWNrOyBcbiAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICB9XG5cbiAgICAuYnRuX2JhY2sge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgIH1cbn1cbi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLy8gLmhlYWRlcl9kaXZ7XG4gICAgLy8gICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAvLyAgICAgLmJ0bl9iYWNrIHtcbiAgICAvLyAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyAgICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgLmNvbnRlbnRfZGl2e1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTsgIFxuXG4gICAgICAubGl2ZV9jaGF0X2RpdntcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgLmZpcnN0X2RpdntcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAuaGVhZF9sYmx7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogb3Blbi1ib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaGF0X2J0bntcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnNlY29uZF9kaXZ7XG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgLmNoYXRfaW1ne1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5xdWVzdGlvbl9kaXZ7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICAuaGVhZF9sYmx7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5saXN0X2RpdntcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRThFOEU4O1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG59IiwiaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XG59XG5cbi5oZWFkZXItbWQ6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uaGVhZGVyX2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRlcl9kaXYgLnRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xufVxuLmhlYWRlcl9kaXYgLmJ0bl9iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNnB4O1xuICB3aWR0aDogMzVweDtcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmxpdmVfY2hhdF9kaXYge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmxpdmVfY2hhdF9kaXYgLmZpcnN0X2RpdiB7XG4gIHdpZHRoOiA2MCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmxpdmVfY2hhdF9kaXYgLmZpcnN0X2RpdiAuaGVhZF9sYmwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICBmb250LWZhbWlseTogb3Blbi1ib2xkO1xuICBmb250LXNpemU6IDIycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5saXZlX2NoYXRfZGl2IC5maXJzdF9kaXYgLmNoYXRfYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAubGl2ZV9jaGF0X2RpdiAuc2Vjb25kX2RpdiB7XG4gIHdpZHRoOiA0MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5saXZlX2NoYXRfZGl2IC5zZWNvbmRfZGl2IC5jaGF0X2ltZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAucXVlc3Rpb25fZGl2IHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5xdWVzdGlvbl9kaXYgLmhlYWRfbGJsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogb3Blbi1ib2xkO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAucXVlc3Rpb25fZGl2IC5saXN0X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U4RThFODtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/support/support.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/support/support.page.ts ***!
  \***********************************************/
/*! exports provided: SupportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPage", function() { return SupportPage; });
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



let SupportPage = class SupportPage {
    constructor(platform, router, navCtrl) {
        this.platform = platform;
        this.router = router;
        this.navCtrl = navCtrl;
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
    goToChat() {
        this.router.navigate(['/chat']);
    }
    onSearchChange(events) {
    }
};
SupportPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
SupportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-support',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./support.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./support.page.scss */ "./src/app/pages/support/support.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], SupportPage);



/***/ })

}]);
//# sourceMappingURL=pages-support-support-module-es2015.js.map