function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["episode-details-episode-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episode-details/episode-details.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episode-details/episode-details.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEpisodeDetailsEpisodeDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar color=\"success\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaulthref=\"/tabs/episodes\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Episodes Details</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"unfavouriteEpisode()\" *ngIf=\"isFavourite\">\n\t\t\t\t<ion-icon name=\"star\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<ion-button (click)=\"favouriteEpisode()\" *ngIf=\"!isFavourite\">\n\t\t\t\t<ion-icon name=\"star-outline\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\t<ion-card *ngIf=\"episode\">\n\t\t<ion-card-content>\n\t\t\t<h3><strong>Title:</strong> {{ episode.title }} </h3>\n\t\t</ion-card-content>\n\t</ion-card>\n\n\t<ion-card *ngIf=\"episode\">\n\t\t<ion-card-content>\n\t\t\t<h3><strong>Season:</strong> {{ episode.season }} </h3>\n\t\t</ion-card-content>\n\t</ion-card>\n\n\t<ion-card *ngIf=\"episode\">\n\t\t<ion-card-content>\n\t\t\t<h3><strong>Episode n°:</strong> {{ episode.episode }}</h3>\n\t\t</ion-card-content>\n\t</ion-card>\n\n\t<ion-card *ngIf=\"episode\">\n\t\t<ion-card-content>\n\t\t\t<h3><strong>Episode ID:</strong> {{ episode.episode_id }} </h3>\n\t\t</ion-card-content>\n\t</ion-card>\n\n\t<ion-card *ngIf=\"episode\">\n\t\t<ion-card-content>\n\t\t\t<h3><strong>Air Date:</strong> {{ episode.air_date }} </h3>\n\t\t</ion-card-content>\n\t</ion-card>\n\n\t<ion-card *ngIf=\"episode\">\n\t\t<ion-card-content>\n\t\t\t<h3><strong>Characters:</strong></h3>\n\t\t\t<ion-list style='margin-left: 80px;' *ngFor=\"let character of episode.characters\">\n\t\t\t\t{{ character }}\n\t\t\t</ion-list>\n\t\t</ion-card-content>\n\t</ion-card>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/episode-details/episode-details-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/episode-details/episode-details-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: EpisodeDetailsPageRoutingModule */

  /***/
  function srcAppPagesEpisodeDetailsEpisodeDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodeDetailsPageRoutingModule", function () {
      return EpisodeDetailsPageRoutingModule;
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


    var _episode_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./episode-details.page */
    "./src/app/pages/episode-details/episode-details.page.ts");

    var routes = [{
      path: '',
      component: _episode_details_page__WEBPACK_IMPORTED_MODULE_3__["EpisodeDetailsPage"]
    }];

    var EpisodeDetailsPageRoutingModule = function EpisodeDetailsPageRoutingModule() {
      _classCallCheck(this, EpisodeDetailsPageRoutingModule);
    };

    EpisodeDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EpisodeDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/episode-details/episode-details.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/episode-details/episode-details.module.ts ***!
    \*****************************************************************/

  /*! exports provided: EpisodeDetailsPageModule */

  /***/
  function srcAppPagesEpisodeDetailsEpisodeDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodeDetailsPageModule", function () {
      return EpisodeDetailsPageModule;
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


    var _episode_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./episode-details-routing.module */
    "./src/app/pages/episode-details/episode-details-routing.module.ts");
    /* harmony import */


    var _episode_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./episode-details.page */
    "./src/app/pages/episode-details/episode-details.page.ts");

    var EpisodeDetailsPageModule = function EpisodeDetailsPageModule() {
      _classCallCheck(this, EpisodeDetailsPageModule);
    };

    EpisodeDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _episode_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["EpisodeDetailsPageRoutingModule"]],
      declarations: [_episode_details_page__WEBPACK_IMPORTED_MODULE_6__["EpisodeDetailsPage"]]
    })], EpisodeDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/episode-details/episode-details.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/episode-details/episode-details.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEpisodeDetailsEpisodeDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: rgb(0, 0, 0, 0.5);\n  --background: url(/assets/img/BrBa.jpg) no-repeat 100%/cover fixed;\n}\n\nion-list {\n  --background-color:rgba(163, 207, 134, 0.2);\n}\n\nion-item {\n  --background: rgba(163, 207, 134, 0.2);\n}\n\nion-searchbar {\n  --background-color:rgba(163, 207, 134, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9kYmRldi1jYW9saW5kYXNvdXNhMjAxOTQxNC1DQTMvc3JjL2FwcC9wYWdlcy9lcGlzb2RlLWRldGFpbHMvZXBpc29kZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXBpc29kZS1kZXRhaWxzL2VwaXNvZGUtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLGtFQUFBO0FDQ0o7O0FEQ0E7RUFDSSwyQ0FBQTtBQ0VKOztBRENBO0VBQ0ksc0NBQUE7QUNFSjs7QURDQTtFQUNJLDJDQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lcGlzb2RlLWRldGFpbHMvZXBpc29kZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigwLCAwLCAwLCAwLjUpO1xuICAgIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL0JyQmEuanBnKSBuby1yZXBlYXQgMTAwJS9jb3ZlciBmaXhlZDsgICAgXG59XG5pb24tbGlzdHtcbiAgICAtLWJhY2tncm91bmQtY29sb3I6cmdiYSgxNjMsIDIwNywgMTM0LCAwLjIpOyBcbn1cbiAgXG5pb24taXRlbSB7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDE2MywgMjA3LCAxMzQsIDAuMik7XG59XG5cbmlvbi1zZWFyY2hiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTYzLCAyMDcsIDEzNCwgMC4yKTtcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDAsIDAsIDAsIDAuNSk7XG4gIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL0JyQmEuanBnKSBuby1yZXBlYXQgMTAwJS9jb3ZlciBmaXhlZDtcbn1cblxuaW9uLWxpc3Qge1xuICAtLWJhY2tncm91bmQtY29sb3I6cmdiYSgxNjMsIDIwNywgMTM0LCAwLjIpO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgxNjMsIDIwNywgMTM0LCAwLjIpO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTYzLCAyMDcsIDEzNCwgMC4yKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/episode-details/episode-details.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/episode-details/episode-details.page.ts ***!
    \***************************************************************/

  /*! exports provided: EpisodeDetailsPage */

  /***/
  function srcAppPagesEpisodeDetailsEpisodeDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodeDetailsPage", function () {
      return EpisodeDetailsPage;
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


    var _services_favourite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/favourite.service */
    "./src/app/services/favourite.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");

    var EpisodeDetailsPage = /*#__PURE__*/function () {
      function EpisodeDetailsPage(activatedRoute, api, favouriteService) {
        _classCallCheck(this, EpisodeDetailsPage);

        this.activatedRoute = activatedRoute;
        this.api = api;
        this.favouriteService = favouriteService;
        this.isFavourite = false;
        this.episodeId = null;
      }

      _createClass(EpisodeDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
          this.api.getEpisode(this.episodeId).subscribe(function (res) {
            _this.episode = res[0];
          });
          this.favouriteService.isFavouriteE(this.episodeId).then(function (isFav) {
            _this.isFavourite = isFav;
          });
        }
      }, {
        key: "favouriteEpisode",
        value: function favouriteEpisode() {
          var _this2 = this;

          this.favouriteService.favouriteEpisode(this.episodeId).then(function () {
            _this2.isFavourite = true;
          });
        }
      }, {
        key: "unfavouriteEpisode",
        value: function unfavouriteEpisode() {
          var _this3 = this;

          this.favouriteService.unfavouriteEpisode(this.episodeId).then(function () {
            _this3.isFavourite = false;
          });
        }
      }]);

      return EpisodeDetailsPage;
    }();

    EpisodeDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _services_favourite_service__WEBPACK_IMPORTED_MODULE_2__["FavouriteService"]
      }];
    };

    EpisodeDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-episode-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./episode-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episode-details/episode-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./episode-details.page.scss */
      "./src/app/pages/episode-details/episode-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _services_favourite_service__WEBPACK_IMPORTED_MODULE_2__["FavouriteService"]])], EpisodeDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=episode-details-episode-details-module-es5.js.map