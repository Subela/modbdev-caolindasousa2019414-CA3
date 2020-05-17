(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["characters-characters-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar color=\"success\">\n\t\t<ion-title>Characters</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\t<ion-searchbar [(ngModel)]=\"terms\"></ion-searchbar>\n\n\t<ion-list>\n\t\t<ion-item button detail lines=\"inset\" *ngFor=\"let character of characters | async\"\n\t\t\t(click)=\"openDetails(character)\">\n\n\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t<img src=\"{{ character.img }}\">\n\t\t\t</ion-avatar>\n\t\t\t<p>{{ character.name }}</p>\n\t\t</ion-item>\n\n\t</ion-list>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/characters/characters-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/characters/characters-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CharactersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersPageRoutingModule", function() { return CharactersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _characters_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters.page */ "./src/app/pages/characters/characters.page.ts");




const routes = [
    {
        path: '',
        component: _characters_page__WEBPACK_IMPORTED_MODULE_3__["CharactersPage"]
    }
];
let CharactersPageRoutingModule = class CharactersPageRoutingModule {
};
CharactersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CharactersPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/characters/characters.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/characters/characters.module.ts ***!
  \*******************************************************/
/*! exports provided: CharactersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersPageModule", function() { return CharactersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _characters_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters-routing.module */ "./src/app/pages/characters/characters-routing.module.ts");
/* harmony import */ var _characters_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./characters.page */ "./src/app/pages/characters/characters.page.ts");







let CharactersPageModule = class CharactersPageModule {
};
CharactersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _characters_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharactersPageRoutingModule"]
        ],
        declarations: [_characters_page__WEBPACK_IMPORTED_MODULE_6__["CharactersPage"]]
    })
], CharactersPageModule);



/***/ }),

/***/ "./src/app/pages/characters/characters.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/characters/characters.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: rgb(0, 0, 0, 0.5);\n  --background: url(/assets/img/BrBa.jpg) no-repeat 100%/cover fixed;\n}\n\nion-list {\n  background-color: rgba(163, 207, 134, 0.2);\n}\n\nion-item {\n  --background: rgba(163, 207, 134, 0.2);\n}\n\nion-searchbar {\n  background-color: rgba(163, 207, 134, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvbW9kYmRldi1jYW9saW5kYXNvdXNhMjAxOTQxNC1DQTMvc3JjL2FwcC9wYWdlcy9jaGFyYWN0ZXJzL2NoYXJhY3RlcnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGFyYWN0ZXJzL2NoYXJhY3RlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFDQSxrRUFBQTtBQ0NKOztBRENBO0VBQ0ksMENBQUE7QUNFSjs7QURDQTtFQUNJLHNDQUFBO0FDRUo7O0FEQ0E7RUFDSSwwQ0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hhcmFjdGVycy9jaGFyYWN0ZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHJnYigwLCAwLCAwLCAwLjUpO1xuICAgIC0tYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaW1nL0JyQmEuanBnKSBuby1yZXBlYXQgMTAwJS9jb3ZlciBmaXhlZDsgICAgXG59XG5pb24tbGlzdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTYzLCAyMDcsIDEzNCwgMC4yKTsgXG59XG4gIFxuaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSgxNjMsIDIwNywgMTM0LCAwLjIpO1xufVxuXG5pb24tc2VhcmNoYmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgxNjMsIDIwNywgMTM0LCAwLjIpO1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMCwgMCwgMCwgMC41KTtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pbWcvQnJCYS5qcGcpIG5vLXJlcGVhdCAxMDAlL2NvdmVyIGZpeGVkO1xufVxuXG5pb24tbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYzLCAyMDcsIDEzNCwgMC4yKTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMTYzLCAyMDcsIDEzNCwgMC4yKTtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYzLCAyMDcsIDEzNCwgMC4yKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/characters/characters.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/characters/characters.page.ts ***!
  \*****************************************************/
/*! exports provided: CharactersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersPage", function() { return CharactersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");




let CharactersPage = class CharactersPage {
    constructor(router, api) {
        this.router = router;
        this.api = api;
    }
    ngOnInit() {
        this.characters = this.api.getCharacters();
        this.characters.subscribe(data => {
            console.log('my data', data);
        });
    }
    openDetails(character) {
        let characterId = character.char_id;
        this.router.navigateByUrl(`/tabs/characters/${characterId}`);
    }
};
CharactersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
CharactersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-characters',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./characters.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characters/characters.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./characters.page.scss */ "./src/app/pages/characters/characters.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], CharactersPage);



/***/ })

}]);
//# sourceMappingURL=characters-characters-module-es2015.js.map