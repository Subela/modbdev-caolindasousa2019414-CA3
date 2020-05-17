function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["death-details-death-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/death-details/death-details.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/death-details/death-details.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDeathDetailsDeathDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar color=\"success\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaulthref=\"/tabs/deaths\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Deaths Details</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\t<ion-card *ngIf=\"death\">\n\n\t\t<ion-item>\n\t\t\t<ion-icon name=\"person-sharp\" slot=\"start\"></ion-icon>\n\t\t\t<ion-label><strong>Responsible: </strong>{{ death.responsible }}</ion-label>\n\t\t</ion-item>\n\n\t\t<ion-item>\n\t\t\t<ion-icon name=\"skull\" slot=\"start\"></ion-icon>\n\t\t\t<ion-label><strong>Number of deahts: </strong>{{ death.deathCount }}</ion-label>\n\t\t</ion-item>\n\n\t</ion-card>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/death-details/death-details-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/death-details/death-details-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: DeathDetailsPageRoutingModule */

  /***/
  function srcAppPagesDeathDetailsDeathDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeathDetailsPageRoutingModule", function () {
      return DeathDetailsPageRoutingModule;
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


    var _death_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./death-details.page */
    "./src/app/pages/death-details/death-details.page.ts");

    var routes = [{
      path: '',
      component: _death_details_page__WEBPACK_IMPORTED_MODULE_3__["DeathDetailsPage"]
    }];

    var DeathDetailsPageRoutingModule = function DeathDetailsPageRoutingModule() {
      _classCallCheck(this, DeathDetailsPageRoutingModule);
    };

    DeathDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DeathDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/death-details/death-details.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/death-details/death-details.module.ts ***!
    \*************************************************************/

  /*! exports provided: DeathDetailsPageModule */

  /***/
  function srcAppPagesDeathDetailsDeathDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeathDetailsPageModule", function () {
      return DeathDetailsPageModule;
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


    var _death_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./death-details-routing.module */
    "./src/app/pages/death-details/death-details-routing.module.ts");
    /* harmony import */


    var _death_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./death-details.page */
    "./src/app/pages/death-details/death-details.page.ts");

    var DeathDetailsPageModule = function DeathDetailsPageModule() {
      _classCallCheck(this, DeathDetailsPageModule);
    };

    DeathDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _death_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeathDetailsPageRoutingModule"]],
      declarations: [_death_details_page__WEBPACK_IMPORTED_MODULE_6__["DeathDetailsPage"]]
    })], DeathDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/death-details/death-details.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/death-details/death-details.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDeathDetailsDeathDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: rgb(0, 0, 0, 0.5);\n  --background: url(/assets/img/BrBa.jpg) no-repeat 100%/cover fixed;\n}\n\nion-list {\n  background-color: rgba(163, 207, 134, 0.2);\n}\n\nion-item {\n  --background: rgba(163, 207, 134, 0.2);\n}\n\nion-searchbar {\n  background-color: rgba(163, 207, 134, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9kYmRldi1jYW9saW5kYXNvdXNhMjAxOTQxNC1DQTMvc3JjL2FwcC9wYWdlcy9kZWF0aC1kZXRhaWxzL2RlYXRoLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZWF0aC1kZXRhaWxzL2RlYXRoLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFDQSxrRUFBQTtBQ0NKOztBRENBO0VBQ0ksMENBQUE7QUNFSjs7QURDQTtFQUNJLHNDQUFBO0FDRUo7O0FEQ0E7RUFDSSwwQ0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGVhdGgtZGV0YWlscy9kZWF0aC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigwLCAwLCAwLCAwLjUpO1xuICAgIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL0JyQmEuanBnKSBuby1yZXBlYXQgMTAwJS9jb3ZlciBmaXhlZDsgICAgXG59XG5pb24tbGlzdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTYzLCAyMDcsIDEzNCwgMC4yKTsgXG59XG4gIFxuaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgxNjMsIDIwNywgMTM0LCAwLjIpO1xufVxuXG5pb24tc2VhcmNoYmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgxNjMsIDIwNywgMTM0LCAwLjIpO1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCwgMC41KTtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvQnJCYS5qcGcpIG5vLXJlcGVhdCAxMDAlL2NvdmVyIGZpeGVkO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYzLCAyMDcsIDEzNCwgMC4yKTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMTYzLCAyMDcsIDEzNCwgMC4yKTtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYzLCAyMDcsIDEzNCwgMC4yKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/death-details/death-details.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/death-details/death-details.page.ts ***!
    \***********************************************************/

  /*! exports provided: DeathDetailsPage */

  /***/
  function srcAppPagesDeathDetailsDeathDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeathDetailsPage", function () {
      return DeathDetailsPage;
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


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");

    var DeathDetailsPage = /*#__PURE__*/function () {
      function DeathDetailsPage(activatedRoute, api) {
        _classCallCheck(this, DeathDetailsPage);

        this.activatedRoute = activatedRoute;
        this.api = api;
        this.deathCount = null;
      }

      _createClass(DeathDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.deathCount = this.activatedRoute.snapshot.paramMap.get('name');
          this.api.getDeath(this.deathCount).subscribe(function (res) {
            _this.death = res[0];
          });
        }
      }]);

      return DeathDetailsPage;
    }();

    DeathDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }];
    };

    DeathDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-death-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./death-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/death-details/death-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./death-details.page.scss */
      "./src/app/pages/death-details/death-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])], DeathDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=death-details-death-details-module-es5.js.map