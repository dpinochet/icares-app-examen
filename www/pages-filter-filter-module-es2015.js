(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-filter-filter-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filter/filter.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filter/filter.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"header_div\">\n      \n      <ion-buttons slot=\"start\" class=\"btn_back\">\n        <ion-button (click)=\"goBack()\">\n          <img src=\"assets/imgs/back2.png\">\n        </ion-button>\n      </ion-buttons>\n      <ion-label class=\"title\">Filter</ion-label>\n\n      <ion-buttons class=\"chat_lbl\">\n        <ion-button (click)=\"goToChat()\">\n          <ion-label class=\"red_lbl\">Reset</ion-label>\n        </ion-button>\n      </ion-buttons>\n\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\" [class.ios_test]=\"plt == 'ios'\">\n    \n    <!-- <div class=\"header_div\">\n      <img src=\"assets/imgs/back2.png\" style=\"width: 20px;\" class=\"btn_back\" (click)=\"goBack()\">\n      <ion-label>Filter</ion-label>\n      <ion-label class=\"chat_lbl\">Reset</ion-label>\n    </div> -->\n\n    <div class=\"question_div\">\n      <ion-label class=\"head_lbl\">Sort By</ion-label>\n      <div class=\"list_div\" *ngFor=\"let item of filters; let i = index\" (click)=\"click_filter(i)\">\n        <ion-label [class.red_lbl]=\"i == id\">{{item}}</ion-label>\n        <img *ngIf=\"i == id\" src=\"assets/imgs/true.png\" slot=\"end\" style=\"width: 15px;\">\n      </div>\n    </div>\n\n    <div class=\"question_div\">\n      <ion-label class=\"head_lbl\">Cuisines</ion-label>\n      <div class=\"chips\">\n        <div class=\"chip_item\" *ngFor=\"let item of foods; let i = index\" [class.chip_item_active]=\"i == id_cuisines\" (click)=\"click_filter_cuisines(i)\">{{item}}</div>\n      </div>\n    </div>\n\n    <div class=\"question_div\">\n      <ion-label class=\"head_lbl\">Price</ion-label>\n      <div class=\"list_div\">\n        <ion-label>$00.00</ion-label>\n        <ion-label>$100.00</ion-label>\n      </div>\n      <ion-range dualKnobs=\"true\" min=\"0\" max=\"100\" mode=\"ios\"></ion-range>\n    </div>\n\n    <ion-button (click)=\"ApplyFilter()\" expand=\"full\" shape=\"round\" class=\"red_btn\">Apply</ion-button>\n\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/filter/filter-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/filter/filter-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: FilterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageRoutingModule", function() { return FilterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _filter_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter.page */ "./src/app/pages/filter/filter.page.ts");




const routes = [
    {
        path: '',
        component: _filter_page__WEBPACK_IMPORTED_MODULE_3__["FilterPage"]
    }
];
let FilterPageRoutingModule = class FilterPageRoutingModule {
};
FilterPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FilterPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/filter/filter.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/filter/filter.module.ts ***!
  \***********************************************/
/*! exports provided: FilterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPageModule", function() { return FilterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _filter_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter-routing.module */ "./src/app/pages/filter/filter-routing.module.ts");
/* harmony import */ var _filter_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter.page */ "./src/app/pages/filter/filter.page.ts");







let FilterPageModule = class FilterPageModule {
};
FilterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _filter_routing_module__WEBPACK_IMPORTED_MODULE_5__["FilterPageRoutingModule"]
        ],
        declarations: [_filter_page__WEBPACK_IMPORTED_MODULE_6__["FilterPage"]]
    })
], FilterPageModule);



/***/ }),

/***/ "./src/app/pages/filter/filter.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/filter/filter.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar:last-child {\n  --border-width: 0px;\n}\n\n.header-md:after {\n  background: none;\n}\n\n.header_div {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n}\n\n.header_div .title {\n  color: black;\n  font-family: open-regular;\n}\n\n.header_div .btn_back {\n  position: absolute;\n  left: 16px;\n  width: 35px;\n}\n\n.header_div .red_lbl {\n  color: black;\n  font-family: open-regular;\n}\n\n.header_div .chat_lbl {\n  position: absolute;\n  right: 16px;\n}\n\n.main_content_div {\n  width: 100%;\n  background: #FAFAFA;\n}\n\n.main_content_div .header_div {\n  width: 100%;\n  height: 50px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n  font-family: open-regular;\n}\n\n.main_content_div .header_div .red_chat {\n  color: var(--ion-color-main);\n  font-size: 20px;\n}\n\n.main_content_div .header_div .btn_back {\n  position: absolute;\n  left: 16px;\n}\n\n.main_content_div .header_div .chat_lbl {\n  position: absolute;\n  right: 16px;\n}\n\n.main_content_div .question_div {\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-top: 25px;\n}\n\n.main_content_div .question_div .head_lbl {\n  font-size: 16px;\n  font-family: open-bold;\n  margin-bottom: 20px;\n  display: block;\n}\n\n.main_content_div .question_div .list_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  height: 50px;\n  -webkit-box-align: center;\n          align-items: center;\n  border-bottom: 1px solid #E8E8E8;\n}\n\n.main_content_div .question_div .red_lbl {\n  color: var(--ion-color-main);\n}\n\n.main_content_div .question_div .chips {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.main_content_div .question_div .chips .chip_item {\n  margin-right: 10px;\n  background-color: white;\n  border-radius: 25px;\n  padding: 10px;\n  padding-left: 15px;\n  padding-right: 15px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  margin-bottom: 10px;\n}\n\n.main_content_div .question_div .chips .chip_item_active {\n  background: var(--ion-color-main);\n  color: white;\n}\n\n.main_content_div .question_div ion-range {\n  --bar-background: #E8E8E8;\n  --bar-background-active: var(--ion-color-main);\n  --knob-background: var(--ion-color-main);\n  --bar-height: 5px;\n  --knob-size: 18px;\n  --knob-border-radius: 50%;\n  --knob-box-shadow: 0px 0px 0px 3px #fff;\n}\n\n.main_content_div .red_btn {\n  --background: var(--ion-color-main);\n  height: 40px;\n  --background-activated: var(--ion-color-main);\n  margin-top: 30px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxwaW5vY2hldC9Eb2N1bWVudHMvR2l0SHViL2ljYXJlcy1hcHAtZXhhbWVuL3NyYy9hcHAvcGFnZXMvZmlsdGVyL2ZpbHRlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZpbHRlci9maWx0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksbUJBQUE7QUNISjs7QURLQTtFQUNJLGdCQUFBO0FDRko7O0FESUE7RUFDSSxXQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBRElJO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FDRlI7O0FES0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDSFI7O0FES0k7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUNIUjs7QURLSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ0hSOztBRE1BO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0FDSEo7O0FET0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0xSOztBRFFRO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0FDTlo7O0FEUVE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNOWjs7QURRUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ05aOztBRFVJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDUlI7O0FEU1E7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNQWjs7QURTUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdDQUFBO0FDUFo7O0FEU1E7RUFDSSw0QkFBQTtBQ1BaOztBRFNRO0VBQ0ksV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUNQWjs7QURTWTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtBQ1BoQjs7QURTWTtFQUNJLGlDQUFBO0VBQ0EsWUFBQTtBQ1BoQjs7QURXUTtFQUNJLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVDQUFBO0FDVFo7O0FEYUk7RUFDSSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1hSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmlsdGVyL2ZpbHRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuaW9zX3Rlc3R7XG4vLyAgICAgcGFkZGluZy10b3A6IDQwcHggIWltcG9ydGFudDtcbi8vIH1cblxuaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcbn1cbi5oZWFkZXItbWQ6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uaGVhZGVyX2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC50aXRsZXtcbiAgICAgICAgY29sb3I6IGJsYWNrOyBcbiAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICB9XG5cbiAgICAuYnRuX2JhY2sge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgIH1cbiAgICAucmVkX2xibHtcbiAgICAgICAgY29sb3I6IGJsYWNrOyBcbiAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICB9XG4gICAgLmNoYXRfbGJse1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgIH1cbn1cbi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNGQUZBRkE7XG4gICAgLy8gcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG5cbiAgICAuaGVhZGVyX2RpdntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICAgICAgXG5cbiAgICAgICAgLnJlZF9jaGF0e1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuYnRuX2JhY2sge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAuY2hhdF9sYmx7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMTZweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5xdWVzdGlvbl9kaXZ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgLmhlYWRfbGJse1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICAubGlzdF9kaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U4RThFODtcbiAgICAgICAgfVxuICAgICAgICAucmVkX2xibHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gICAgICAgIH0gIFxuICAgICAgICAuY2hpcHN7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6ICBmbGV4O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246ICByb3c7XG4gICAgICAgIFxuICAgICAgICAgICAgLmNoaXBfaXRlbXtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNoaXBfaXRlbV9hY3RpdmV7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1yYW5nZXtcbiAgICAgICAgICAgIC0tYmFyLWJhY2tncm91bmQgOiAjRThFOEU4O1xuICAgICAgICAgICAgLS1iYXItYmFja2dyb3VuZC1hY3RpdmUgOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gICAgICAgICAgICAtLWtub2ItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICAgICAgLS1iYXItaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICAtLWtub2Itc2l6ZTogMThweDtcbiAgICAgICAgICAgIC0ta25vYi1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAtLWtub2ItYm94LXNoYWRvdzogMHB4IDBweCAwcHggM3B4ICNmZmY7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucmVkX2J0bntcbiAgICAgICAgLS1iYWNrZ3JvdW5kIDogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQgOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICB9XG59XG4iLCJpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbn1cblxuLmhlYWRlci1tZDphZnRlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5oZWFkZXJfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyX2RpdiAudGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG59XG4uaGVhZGVyX2RpdiAuYnRuX2JhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE2cHg7XG4gIHdpZHRoOiAzNXB4O1xufVxuLmhlYWRlcl9kaXYgLnJlZF9sYmwge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG59XG4uaGVhZGVyX2RpdiAuY2hhdF9sYmwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNnB4O1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjRkFGQUZBO1xufVxuLm1haW5fY29udGVudF9kaXYgLmhlYWRlcl9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogb3Blbi1yZWd1bGFyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmhlYWRlcl9kaXYgLnJlZF9jaGF0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmhlYWRlcl9kaXYgLmJ0bl9iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxNnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmhlYWRlcl9kaXYgLmNoYXRfbGJsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTZweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5xdWVzdGlvbl9kaXYge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucXVlc3Rpb25fZGl2IC5oZWFkX2xibCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucXVlc3Rpb25fZGl2IC5saXN0X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiA1MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U4RThFODtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5xdWVzdGlvbl9kaXYgLnJlZF9sYmwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xufVxuLm1haW5fY29udGVudF9kaXYgLnF1ZXN0aW9uX2RpdiAuY2hpcHMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLm1haW5fY29udGVudF9kaXYgLnF1ZXN0aW9uX2RpdiAuY2hpcHMgLmNoaXBfaXRlbSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnF1ZXN0aW9uX2RpdiAuY2hpcHMgLmNoaXBfaXRlbV9hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWFpbik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5xdWVzdGlvbl9kaXYgaW9uLXJhbmdlIHtcbiAgLS1iYXItYmFja2dyb3VuZDogI0U4RThFODtcbiAgLS1iYXItYmFja2dyb3VuZC1hY3RpdmU6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgLS1rbm9iLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgLS1iYXItaGVpZ2h0OiA1cHg7XG4gIC0ta25vYi1zaXplOiAxOHB4O1xuICAtLWtub2ItYm9yZGVyLXJhZGl1czogNTAlO1xuICAtLWtub2ItYm94LXNoYWRvdzogMHB4IDBweCAwcHggM3B4ICNmZmY7XG59XG4ubWFpbl9jb250ZW50X2RpdiAucmVkX2J0biB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1haW4pO1xuICBoZWlnaHQ6IDQwcHg7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHZhcigtLWlvbi1jb2xvci1tYWluKTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/filter/filter.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/filter/filter.page.ts ***!
  \*********************************************/
/*! exports provided: FilterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPage", function() { return FilterPage; });
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



let FilterPage = class FilterPage {
    constructor(router, navCtrl, platform) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.filters = [
            'Most Popular',
            'Price High to Low',
            'Price Low to High',
            'Nearest to me'
        ];
        this.foods = ['All', 'Japanese', 'Pizza', 'American', 'Thai', 'Greek', 'Italian', 'Asian', 'Dessert', 'Mexican'];
        if (this.platform.is('ios')) {
            this.plt = "ios";
        }
        else {
            this.plt = "android";
        }
    }
    ngOnInit() {
    }
    click_filter(value) {
        console.log(value);
        this.id = value;
    }
    click_filter_cuisines(value) {
        console.log(value);
        this.id_cuisines = value;
    }
    goBack() {
        this.navCtrl.back();
    }
    goToChat() {
    }
    ApplyFilter() {
        this.goBack();
    }
};
FilterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
FilterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filter.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/filter/filter.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./filter.page.scss */ "./src/app/pages/filter/filter.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], FilterPage);



/***/ })

}]);
//# sourceMappingURL=pages-filter-filter-module-es2015.js.map