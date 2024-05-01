function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-profile-user-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/user-profile.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/user-profile.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUserProfileUserProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <div class=\"header_div\">\n      \n      <ion-buttons slot=\"start\" class=\"btn_back\">\n        <ion-button (click)=\"goBack()\">\n          <img src=\"assets/imgs/back2.png\">\n        </ion-button>\n      </ion-buttons>\n      <ion-label class=\"title\">Profile</ion-label>\n\n      <ion-buttons class=\"chat_lbl\" class=\"btn_edit\" *ngIf=\"is_edit == false\">\n        <ion-button (click)=\"edit_profile()\">\n          <img src=\"assets/imgs/edit.png\">\n        </ion-button>\n      </ion-buttons>\n\n      <ion-buttons class=\"chat_lbl\" class=\"btn_edit\" *ngIf=\"is_edit == true\">\n        <ion-button (click)=\"save_profile()\">\n          <img src=\"assets/imgs/true.png\">\n        </ion-button>\n      </ion-buttons>\n\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <div class=\"user_image\" [style.backgroundImage] = \"'url(assets/imgs/user.jpg)'\"></div>\n    <ion-label class=\"username\">Jonh Doe</ion-label>\n\n    <div class=\"div_form\">\n      <ion-input type=\"text\" class=\"ip\" placeholder=\"First Name\" value=\"Jonh\" [disabled]=\"!is_edit\"></ion-input>\n      <ion-input type=\"text\" class=\"ip\" placeholder=\"Last Name\" value=\"Doe\" [disabled]=\"!is_edit\"></ion-input>\n      <ion-input type=\"text\" class=\"ip\" placeholder=\"Mobile\" value=\"9807656754\" [disabled]=\"!is_edit\"></ion-input>\n      <ion-input type=\"text\" class=\"ip\" placeholder=\"Email ID\" value=\"john@gmail.com\" [disabled]=\"!is_edit\"></ion-input>\n    </div>\n\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/user-profile/user-profile-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/user-profile/user-profile-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: UserProfilePageRoutingModule */

  /***/
  function srcAppPagesUserProfileUserProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfilePageRoutingModule", function () {
      return UserProfilePageRoutingModule;
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


    var _user_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-profile.page */
    "./src/app/pages/user-profile/user-profile.page.ts");

    var routes = [{
      path: '',
      component: _user_profile_page__WEBPACK_IMPORTED_MODULE_3__["UserProfilePage"]
    }];

    var UserProfilePageRoutingModule = function UserProfilePageRoutingModule() {
      _classCallCheck(this, UserProfilePageRoutingModule);
    };

    UserProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/user-profile/user-profile.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/user-profile/user-profile.module.ts ***!
    \***********************************************************/

  /*! exports provided: UserProfilePageModule */

  /***/
  function srcAppPagesUserProfileUserProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function () {
      return UserProfilePageModule;
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


    var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-profile-routing.module */
    "./src/app/pages/user-profile/user-profile-routing.module.ts");
    /* harmony import */


    var _user_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-profile.page */
    "./src/app/pages/user-profile/user-profile.page.ts");

    var UserProfilePageModule = function UserProfilePageModule() {
      _classCallCheck(this, UserProfilePageModule);
    };

    UserProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserProfilePageRoutingModule"]],
      declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"]]
    })], UserProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/user-profile/user-profile.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/user-profile/user-profile.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUserProfileUserProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar:last-child {\n  --border-width: 0px;\n}\n\n.header-md:after {\n  background: none;\n}\n\n.header_div {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n}\n\n.header_div .title {\n  color: black;\n  font-family: open-regular;\n}\n\n.header_div .btn_back {\n  position: absolute;\n  left: 16px;\n  width: 35px;\n}\n\n.header_div .btn_edit {\n  position: absolute;\n  width: 35px;\n  right: 16px;\n}\n\n.main_content_div {\n  width: 100%;\n  padding: 25px;\n  margin-top: 50px;\n}\n\n.main_content_div .user_image {\n  height: 100px;\n  width: 100px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 50%;\n  display: block;\n  margin: auto;\n}\n\n.main_content_div .username {\n  font-family: open-bold;\n  font-size: 18px;\n  display: block;\n  text-align: center;\n  margin-top: 10px;\n}\n\n.main_content_div .div_form {\n  margin-top: 40px;\n}\n\n.main_content_div .div_form .ip {\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  margin-top: 15px;\n  --padding-start: 15px;\n  height: 40px;\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxwaW5vY2hldC9Eb2N1bWVudHMvR2l0SHViL2ljYXJlcy1hcHAtZXhhbWVuL3NyYy9hcHAvcGFnZXMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxXQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFJO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FDRVI7O0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQ1I7O0FEQ0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQ1I7O0FER0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQUo7O0FERUk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNBUjs7QURFSTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQVI7O0FER0k7RUFDSSxnQkFBQTtBQ0RSOztBREVRO0VBQ0ksMENBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcbn1cbi5oZWFkZXItbWQ6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uaGVhZGVyX2RpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC50aXRsZXtcbiAgICAgICAgY29sb3I6IGJsYWNrOyBcbiAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICB9XG5cbiAgICAuYnRuX2JhY2sge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgIHdpZHRoOiAzNXB4O1xuICAgIH1cbiAgICAuYnRuX2VkaXR7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgIH1cbn1cblxuLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuXG4gICAgLnVzZXJfaW1hZ2V7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIC51c2VybmFtZXtcbiAgICAgICAgZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cblxuICAgIC5kaXZfZm9ybXtcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgICAgLmlwe1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydCA6IDE1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpb24tdG9vbGJhcjpsYXN0LWNoaWxkIHtcbiAgLS1ib3JkZXItd2lkdGg6IDBweDtcbn1cblxuLmhlYWRlci1tZDphZnRlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5oZWFkZXJfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyX2RpdiAudGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG59XG4uaGVhZGVyX2RpdiAuYnRuX2JhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDE2cHg7XG4gIHdpZHRoOiAzNXB4O1xufVxuLmhlYWRlcl9kaXYgLmJ0bl9lZGl0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzVweDtcbiAgcmlnaHQ6IDE2cHg7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAudXNlcl9pbWFnZSB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG4ubWFpbl9jb250ZW50X2RpdiAudXNlcm5hbWUge1xuICBmb250LWZhbWlseTogb3Blbi1ib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZGl2X2Zvcm0ge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmRpdl9mb3JtIC5pcCB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/user-profile/user-profile.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/user-profile/user-profile.page.ts ***!
    \*********************************************************/

  /*! exports provided: UserProfilePage */

  /***/
  function srcAppPagesUserProfileUserProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfilePage", function () {
      return UserProfilePage;
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


    var UserProfilePage =
    /*#__PURE__*/
    function () {
      function UserProfilePage(navCtrl) {
        _classCallCheck(this, UserProfilePage);

        this.navCtrl = navCtrl;
        this.is_edit = false;
      }

      _createClass(UserProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }, {
        key: "edit_profile",
        value: function edit_profile() {
          this.is_edit = true;
        }
      }, {
        key: "save_profile",
        value: function save_profile() {
          this.is_edit = false;
        }
      }]);

      return UserProfilePage;
    }();

    UserProfilePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    UserProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/user-profile.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-profile.page.scss */
      "./src/app/pages/user-profile/user-profile.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], UserProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-user-profile-user-profile-module-es5.js.map