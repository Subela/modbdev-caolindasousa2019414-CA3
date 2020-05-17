(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["character-details-character-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar color=\"success\">\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button defaulthref=\"/tabs/characters\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-title>Characters Details</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"unfavouriteCharacter()\" *ngIf=\"isFavourite\">\n\t\t\t\t<ion-icon name=\"star\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t\t<ion-button (click)=\"favouriteCharacter()\" *ngIf=\"!isFavourite\">\n\t\t\t\t<ion-icon name=\"star-outline\" slot=\"icon-only\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\t<ion-card *ngIf=\"character\">\n\t\t<img style=\"width: 100%; height: auto;\" src=\"{{ character.img }}\">\n\t\t<ion-card-header>\n\t\t\t<ion-card-subtitle>Character Name:</ion-card-subtitle>\n\t\t\t<ion-card-title>{{ character.name }}</ion-card-title>\n\t\t</ion-card-header>\n\t</ion-card>\n\n\t<ion-card *ngIf=\"character\">\n\t\t<ion-item>\n\t\t\t<ion-icon name=\"film\" slot=\"start\"></ion-icon>\n\t\t\t<ion-label>Brasking Bad Season: {{ character.appearance }} </ion-label>\n\t\t</ion-item>\n\n\t\t<ion-item>\n\t\t\t<ion-icon name=\"heart-half-sharp\" slot=\"start\"></ion-icon>\n\t\t\t<ion-label>Status: {{ character.status }}</ion-label>\n\t\t</ion-item>\n\n\t\t<ion-item>\n\t\t\t<ion-icon name=\"information-circle-sharp\" slot=\"start\"></ion-icon>\n\t\t\t<ion-label>Ocuppation:\n\t\t\t\t<ion-list-header style='margin-left: 80px;' *ngFor=\"let occupation of character.occupation\">\n\t\t\t\t\t{{ occupation }}\n\t\t\t\t</ion-list-header>\n\t\t\t</ion-label>\n\t\t</ion-item>\n\n\t</ion-card>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/character-details/character-details-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/character-details/character-details-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CharacterDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPageRoutingModule", function() { return CharacterDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _character_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./character-details.page */ "./src/app/pages/character-details/character-details.page.ts");




const routes = [
    {
        path: '',
        component: _character_details_page__WEBPACK_IMPORTED_MODULE_3__["CharacterDetailsPage"]
    }
];
let CharacterDetailsPageRoutingModule = class CharacterDetailsPageRoutingModule {
};
CharacterDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CharacterDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/character-details/character-details.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/character-details/character-details.module.ts ***!
  \*********************************************************************/
/*! exports provided: CharacterDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPageModule", function() { return CharacterDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _character_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./character-details-routing.module */ "./src/app/pages/character-details/character-details-routing.module.ts");
/* harmony import */ var _character_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./character-details.page */ "./src/app/pages/character-details/character-details.page.ts");







let CharacterDetailsPageModule = class CharacterDetailsPageModule {
};
CharacterDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _character_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharacterDetailsPageRoutingModule"]
        ],
        declarations: [_character_details_page__WEBPACK_IMPORTED_MODULE_6__["CharacterDetailsPage"]]
    })
], CharacterDetailsPageModule);



/***/ }),

/***/ "./src/app/pages/character-details/character-details.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/character-details/character-details.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: rgb(0, 0, 0, 0.5);\n  --background: url(/assets/img/BrBa.jpg) no-repeat 100%/cover fixed;\n}\n\nion-list {\n  background-color: rgba(163, 207, 134, 0.2);\n}\n\nion-item {\n  --background: rgba(163, 207, 134, 0.2);\n}\n\nion-searchbar {\n  background-color: rgba(163, 207, 134, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9kYmRldi1jYW9saW5kYXNvdXNhMjAxOTQxNC1DQTMvc3JjL2FwcC9wYWdlcy9jaGFyYWN0ZXItZGV0YWlscy9jaGFyYWN0ZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXJhY3Rlci1kZXRhaWxzL2NoYXJhY3Rlci1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0Esa0VBQUE7QUNDSjs7QURDQTtFQUNJLDBDQUFBO0FDRUo7O0FEQ0E7RUFDSSxzQ0FBQTtBQ0VKOztBRENBO0VBQ0ksMENBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJhY3Rlci1kZXRhaWxzL2NoYXJhY3Rlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigwLCAwLCAwLCAwLjUpO1xuICAgIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL0JyQmEuanBnKSBuby1yZXBlYXQgMTAwJS9jb3ZlciBmaXhlZDsgICAgXG59XG5pb24tbGlzdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTYzLCAyMDcsIDEzNCwgMC4yKTsgXG59XG4gIFxuaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgxNjMsIDIwNywgMTM0LCAwLjIpO1xufVxuXG5pb24tc2VhcmNoYmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgxNjMsIDIwNywgMTM0LCAwLjIpO1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCwgMC41KTtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvQnJCYS5qcGcpIG5vLXJlcGVhdCAxMDAlL2NvdmVyIGZpeGVkO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYzLCAyMDcsIDEzNCwgMC4yKTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMTYzLCAyMDcsIDEzNCwgMC4yKTtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYzLCAyMDcsIDEzNCwgMC4yKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/character-details/character-details.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/character-details/character-details.page.ts ***!
  \*******************************************************************/
/*! exports provided: CharacterDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsPage", function() { return CharacterDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_favourite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/favourite.service */ "./src/app/services/favourite.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");





let CharacterDetailsPage = class CharacterDetailsPage {
    constructor(activatedRoute, api, favouriteService) {
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.favouriteService = favouriteService;
        this.isFavourite = false;
        this.characterId = null;
    }
    ngOnInit() {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
        });
        this.favouriteService.isFavouriteC(this.characterId).then(isFav => {
            this.isFavourite = isFav;
        });
    }
    favouriteEpisode() {
        this.favouriteService.favouriteCharacter(this.characterId).then(() => {
            this.isFavourite = true;
        });
    }
    unfavouriteEpisode() {
        this.favouriteService.unfavouriteCharacter(this.characterId).then(() => {
            this.isFavourite = false;
        });
    }
};
CharacterDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _services_favourite_service__WEBPACK_IMPORTED_MODULE_2__["FavouriteService"] }
];
CharacterDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-character-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./character-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/character-details/character-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./character-details.page.scss */ "./src/app/pages/character-details/character-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _services_favourite_service__WEBPACK_IMPORTED_MODULE_2__["FavouriteService"]])
], CharacterDetailsPage);



/***/ })

}]);
//# sourceMappingURL=character-details-character-details-module-es2015.js.map