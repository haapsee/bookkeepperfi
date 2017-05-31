webpackJsonp([1,4],{

/***/ 143:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 143;


/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(158);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(319),
        styles: [__webpack_require__(311)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__softwarepage_softwarepage_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lanpack_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_column_assets_column_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profitcolumn_profitcolumn_component__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'fi/software', component: __WEBPACK_IMPORTED_MODULE_7__softwarepage_softwarepage_component__["a" /* SoftwarepageComponent */] },
    { path: 'se/software', component: __WEBPACK_IMPORTED_MODULE_7__softwarepage_softwarepage_component__["a" /* SoftwarepageComponent */] },
    { path: 'en/software', component: __WEBPACK_IMPORTED_MODULE_7__softwarepage_softwarepage_component__["a" /* SoftwarepageComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_component__["a" /* HomepageComponent */],
            __WEBPACK_IMPORTED_MODULE_7__softwarepage_softwarepage_component__["a" /* SoftwarepageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__assets_column_assets_column_component__["a" /* AssetsColumnComponent */],
            __WEBPACK_IMPORTED_MODULE_10__profitcolumn_profitcolumn_component__["a" /* ProfitcolumnComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__lanpack_service__["a" /* LanpackService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomepageComponent = (function () {
    function HomepageComponent(router) {
        this.router = router;
        this.flags = [
            {
                shortened: "gb",
                link: "/en/software"
            } /*, {
              shortened: "se",
              link: "/se/software" }*/
        ];
        this.text = "test/1";
        console.log(this.router.url);
        console.log(this.text.split("/"));
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-homepage',
        template: __webpack_require__(321),
        styles: [__webpack_require__(313)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], HomepageComponent);

var _a;
//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Init; });
var Init = (function () {
    function Init() {
    }
    Init.prototype.write = function () {
        localStorage.setItem("todos", "sodot");
    };
    Init.prototype.load = function () {
        console.log(localStorage.getItem("todos"));
    };
    return Init;
}());

//# sourceMappingURL=init-storage.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lanpack_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfitcolumnComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfitcolumnComponent = (function () {
    function ProfitcolumnComponent(router, lanservice) {
        this.router = router;
        this.lanservice = lanservice;
    }
    ProfitcolumnComponent.prototype.ngOnInit = function () { };
    return ProfitcolumnComponent;
}());
ProfitcolumnComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'profitcolumn',
        template: __webpack_require__(322),
        providers: [__WEBPACK_IMPORTED_MODULE_2__lanpack_service__["a" /* LanpackService */]],
        styles: [__webpack_require__(314)],
        inputs: ["strings", "enpack"]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__lanpack_service__["a" /* LanpackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__lanpack_service__["a" /* LanpackService */]) === "function" && _b || Object])
], ProfitcolumnComponent);

var _a, _b;
//# sourceMappingURL=profitcolumn.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lanpack_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_column_assets_column_component__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoftwarepageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SoftwarepageComponent = (function () {
    function SoftwarepageComponent(ts, router, lanservice, assetsCol) {
        /*if(this.router.url == "/se/software"){
          this.language = "sweden";
        }else if(this.router.url == "/fi/software"){
          this.language = "suomi";
        }else{
          this.language = "english";
        }/**/
        //console.log(this.strings);
        //console.log(this.router.url.split("/"));
        this.ts = ts;
        this.router = router;
        this.lanservice = lanservice;
        this.assetsCol = assetsCol;
        this.lan = "en";
        this.asdf = "asdf";
        this.alvs = [0, 10, 14, 24];
        this.items = [
            {
                sell: 123.45,
                vat: 24,
                gategory: "Turnover (net sales)"
            }, {
                sell: 23.45,
                vat: 14,
                gategory: "External services"
            },
        ];
        this.strings = this.lanservice.getPack(this.lan);
        this.enpack = this.lanservice.getPack("en");
    }
    SoftwarepageComponent.prototype.ngOnInit = function () {
    };
    return SoftwarepageComponent;
}());
SoftwarepageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-softwarepage',
        template: __webpack_require__(323),
        providers: [__WEBPACK_IMPORTED_MODULE_2__lanpack_service__["a" /* LanpackService */], __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_4__assets_column_assets_column_component__["a" /* AssetsColumnComponent */]],
        styles: [__webpack_require__(315)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__lanpack_service__["a" /* LanpackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__lanpack_service__["a" /* LanpackService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__assets_column_assets_column_component__["a" /* AssetsColumnComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__assets_column_assets_column_component__["a" /* AssetsColumnComponent */]) === "function" && _d || Object])
], SoftwarepageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=softwarepage.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__init_storage__ = __webpack_require__(154);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageService = (function (_super) {
    __extends(StorageService, _super);
    function StorageService() {
        var _this = _super.call(this) || this;
        _this.load();
        _this.write();
        return _this;
    }
    return StorageService;
}(__WEBPACK_IMPORTED_MODULE_1__init_storage__["a" /* Init */]));
StorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StorageService);

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

module.exports = "<div id=\"fullscreendiv\"></div>\n<router-outlet mdl-shadow=\"2\"></router-outlet>\n"

/***/ }),

/***/ 320:
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2>{{ strings.balanceSheet || enpack.balanceSheet }}</h2>\n</div>\n<div>\n  <ul>\n    <li><div class=\"col-xs-12\">{{ strings.assets || enpack.assets }}</div></li>\n    <li>\n      <ul>\n        <li><div class=\"col-xs-12\">{{ strings.nonCurrentAssets || enpack.nonCurrentAssetsTotal }}</div></li>\n        <li>\n          <ul>\n            <li>\n              <div class=\"col-xs-10\">{{strings.intangibleAssets || enpack.intangibleAssets}}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n          </ul>\n        </li>\n        <li><div class=\"col-xs-12\">{{strings.tangibleAssets || enpack.tangibleAssets}}</div></li>\n        <li>\n          <ul>\n            <li>\n              <div class=\"col-xs-10\">{{strings.buildings || enpack.buildings}}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n            <li>\n              <div class=\"col-xs-10\">{{strings.machineryAndEquipment || enpack.machineryAndEquipment}}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n            <li>\n              <div class=\"col-xs-10\">{{strings.tangibleAssetsTotal || enpack.tangibleAssetsTotal}}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n          </ul>\n        </li>\n        <li>\n          <div class=\"col-xs-10\">{{strings.investments || enpack.investments}}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n        <li>\n          <div class=\"col-xs-10\">{{strings.nonCurrentAssetsTotal || enpack.nonCurrentAssetsTotal}}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n        <li>\n          <div class=\"col-xs-10\">{{strings.currentAssets || enpack.currentAssets}}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n        <li>\n          <div class=\"col-xs-10\">{{strings.stocks || enpack.stocks}}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n        <li><div class=\"col-xs-12\">{{strings.debtors || enpack.debtors}}</div></li>\n        <li>\n          <ul>\n            <li>\n              <div class=\"col-xs-10\">{{strings.longterm || enpack.longterm}}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n            <li><div class=\"col-xs-12\">{{strings.shortterm || enpack.shortterm}}</div></li>\n            <li>\n              <ul>\n                <li><div class=\"col-xs-12\">{{strings.tradeDebtors || enpack.tradeDebtors}}</div></li>\n                <li>\n                  <ul>\n                    <li>\n                      <div class=\"col-xs-10\">{{strings.vatReceivables || enpack.vatReceivables}}</div>\n                      <div class=\"col-xs-2\">0</div>\n                    </li>\n                  </ul>\n                </li>\n                <li><div class=\"col-xs-12\">{{strings.otherReceivables || enpack.otherReceivables}}</div></li>\n                <li>\n                  <ul>\n                    <li>\n                      <div class=\"col-xs-10\">{{strings.shorttermDeptorsTotal || enpack.shorttermDeptorsTotal}}</div>\n                      <div class=\"col-xs-2\">0</div>\n                    </li>\n                  </ul>\n                </li>\n              </ul>\n            </li>\n          </ul>\n        </li>\n        <li>\n          <div class=\"col-xs-10\">{{strings.investments || enpack.investments}}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n        <li>\n          <div class=\"col-xs-10\">{{strings.cashInHandAndInBank || enpack.cashInHandAndInBank}}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n      </ul>\n    </li>\n    <li>\n      <div class=\"col-xs-10\">{{strings.currentAssetsTotal || enpack.currentAssetsTotal}}</div>\n      <div class=\"col-xs-2\">0</div>\n    </li>\n    <li>\n      <div class=\"col-xs-10\">{{strings.assetsTotal || enpack.assetsTotal}}</div>\n      <div class=\"col-xs-2\">0</div>\n    </li>\n    <div class=\"col-xs-12\"><br></div>\n    <li><div class=\"col-xs-12\">{{strings.equityAndLiabilities || enpack.equityAndLiabilities}}</div></li>\n    <li>\n      <ul>\n        <li><div class=\"col-xs-12\">{{strings.capitalAndReserves || enpack.capitalAndReserves}}</div></li>\n        <li>\n          <div class=\"col-xs-10\">{{strings.subscribedCapital || enpack.subscribedCapital}}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n        <li>\n          <div class=\"col-xs-10\">{{strings.revaluationReserve || enpack.revaluationReserve}}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n        <li>\n          <div class=\"col-xs-10\">{{strings.otherReserves || enpack.otherReserves}}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n        <li>\n          <div class=\"col-xs-10\">{{strings.retairnedEarnings || enpack.retairnedEarnings}}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n        <li>\n          <div class=\"col-xs-10\">{{strings.profitLossOfTheFinancialYear || enpack.profitLossOfTheFinancialYear}}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n        <li>\n          <div class=\"col-xs-10\">{{strings.capitalAndReservesTotal || enpack.capitalAndReservesTotal}}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n        <li>\n          <div class=\"col-xs-10\">{{strings.appropriations || enpack.appropriations}}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n        <li>\n          <div class=\"col-xs-10\">{{strings.provisions || enpack.provisions}}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n        <li>\n          <div class=\"col-xs-10\">{{strings.creditors || enpack.creditors}}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n        <li>\n          <div class=\"col-xs-10\">{{strings.longterm || enpack.longterm}}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n        <li><div class=\"col-xs-12\">{{strings.shortterm || enpack.shortterm}}</div></li>\n        <li>\n          <ul>\n            <li><div class=\"col-xs-12\">{{strings.loansFromCreditInstitutions || enpack.loansFromCreditInstitutions}}</div></li>\n            <li>\n              <div class=\"col-xs-10\">{{strings.tradeCreditors || enpack.tradeCreditors}}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n            <li>\n              <div class=\"col-xs-10\">{{strings.vatDebt || enpack.vatDebt}}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n            <li><div class=\"col-xs-12\">{{strings.otherCreditors || enpack.otherCreditors}}</div></li>\n            <li>\n              <div class=\"col-xs-10\">{{strings.shorttermCreditorsTotal || enpack.shorttermCreditorsTotal}}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n          </ul>\n        </li>\n        <li>\n          <div class=\"col-xs-10\">{{strings.creditorsTotal || enpack.creditorsTotal}}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n      </ul>\n    </li>\n    <li>\n      <div class=\"col-xs-10\">{{strings.equityAndLiabilitiesTotal || enpack.equityAndLiabilitiesTotal}}</div>\n      <div class=\"col-xs-2\">0</div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 321:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"centered\">\n  <div class=\"mdl-card mdl-shadow--6dp\">\n    <div class=\"mdl-card__title\">\n      <p><b>Welcome to the bookkeeper.fi</b><br>\n      Select language</p>\n    </div>\n    <div class=\"mdl-card__supporting-text\" style=\"margin: auto;\">\n      <!-- Generate flag buttons for language selection -->\n      <h2 class=\"text-center\" *ngFor=\"let item of flags\" style=\"padding: auto;\">\n        <div class=\"col-xs-{{ 12 / flags.length | number : '1.0-0' }}\">\n          <a routerLink=\"{{ item.link }}\" class=\"mdl-color-text--primary\">\n            <span class=\"flag-icon flag-icon-{{ item.shortened }} mdl-shadow--2dp\"></span>\n          </a>\n        </div>\n      </h2>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 322:
/***/ (function(module, exports) {

module.exports = "\n<div>\n  <h2>{{ strings.profitAndLossAccount || enpack.profitAndLossAccount }}</h2>\n</div>\n<div>\n\n  <ul>\n    <li>\n      <div class=\"col-xs-10\">{{ strings.turnoverNetSales || enpack.turnoverNetSales }}</div>\n      <div class=\"col-xs-2\">0</div>\n    </li>\n    <li><div class=\"col-xs-12\">{{ strings.otherOperatingIncome || enpack.otherOperatingIncome }}</div></li>\n    <li><div class=\"col-xs-12\">{{ strings.rawMaterialsAndServices || enpack.rawMaterialsAndServices }}</div></li>\n    <li>\n      <ul>\n        <li><div class=\"col-xs-12\">{{ strings.rawMaterialsAndConsumables || enpack.rawMaterialsAndConsumables }}</div></li>\n        <li>\n          <ul>\n            <li>\n              <div class=\"col-xs-10\">{{ strings.purchasesDuringTheFinancialYear || enpack.purchasesDuringTheFinancialYear }}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n            <li>\n              <div class=\"col-xs-10\">{{ strings.variationsInStocks || enpack.variationsInStocks }}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n          </ul>\n        </li>\n        <li>\n          <div class=\"col-xs-10\">{{ strings.rawMaterialsAndConsumablesTotal || enpack.rawMaterialsAndConsumablesTotal }}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n      </ul>\n    </li>\n    <li>\n      <div class=\"col-xs-10\">{{ strings.externalServices || enpack.externalServices }}</div>\n      <div class=\"col-xs-2\">0</div>\n    </li>\n    <li>\n      <ul>\n        <li>\n          <div class=\"col-xs-10\">{{ strings.rawMaterialsAndServicesTotal || enpack.rawMaterialsAndServicesTotal }}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n        <li><div class=\"col-xs-12\">{{ strings.staffExpenses || enpack.staffExpenses }}</div></li>\n        <li>\n          <ul>\n            <li>\n              <div class=\"col-xs-10\">{{ strings.wagesAndSalaries || enpack.wagesAndSalaries }}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n            <li><div class=\"col-xs-12\">{{ strings.socialSecurityExpenses || enpack.socialSecurityExpenses }}</div></li>\n            <li>\n              <ul>\n                <li>\n                  <div class=\"col-xs-10\">{{ strings.pensionExpenses || enpack.pensionExpenses }}</div>\n                  <div class=\"col-xs-2\">0</div>\n                </li>\n                <li>\n                  <div class=\"col-xs-10\">{{ strings.otherSocialSecurityExpenses || enpack.otherSocialSecurityExpenses }}</div>\n                  <div class=\"col-xs-2\">0</div>\n                </li>\n              </ul>\n            </li>\n            <li>\n              <div class=\"col-xs-10\">{{ strings.staffExpensesTotal || enpack.staffExpensesTotal }}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n          </ul>\n        </li>\n        <li><div class=\"col-xs-12\">{{ strings.depreciationsAndReductionsInValue || enpack.depreciationsAndReductionsInValue }}</div></li>\n        <li>\n          <ul>\n            <li>\n              <div class=\"col-xs-10\">{{ strings.depreciationsAccordingToPlan || enpack.depreciationsAccordingToPlan }}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n            <li>\n              <div class=\"col-xs-10\">{{ strings.reductionsInValue || enpack.reductionsInValue }}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n            <li>\n              <div class=\"col-xs-10\">{{ strings.depreciationsAndReductionsInValueTotal || enpack.depreciationsAndReductionsInValueTotal }}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n          </ul>\n        </li>\n        <li><div class=\"col-xs-12\">{{ strings.otherOperatingExpenses || enpack.otherOperatingExpenses }}</div></li>\n        <li>\n          <ul>\n            <li>\n              <div class=\"col-xs-10\">{{ strings.optionalStaffExpenses || enpack.optionalStaffExpenses }}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n            <li>\n              <div class=\"col-xs-10\">{{ strings.apartmentExpenses || enpack.apartmentExpenses }}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n            <li>\n              <div class=\"col-xs-10\">{{ strings.vechileExpenses || enpack.vechileExpenses }}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n            <li>\n              <div class=\"col-xs-10\">{{ strings.computerDeviceAndSoftware || enpack.computerDeviceAndSoftware }}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n            <li>\n              <div class=\"col-xs-10\">{{ strings.shorttermEquipment || enpack.shorttermEquipment }}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n            <li>\n              <div class=\"col-xs-10\">{{ strings.travelExpenses || enpack.travelExpenses }}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n            <li>\n              <div class=\"col-xs-10\">{{ strings.representationExpenses || enpack.representationExpenses }}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n            <li>\n              <div class=\"col-xs-10\">{{ strings.salesAndMarketingExpenses || enpack.salesAndMarketingExpenses }}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n            <li>\n              <div class=\"col-xs-10\">{{ strings.researchAndDevelopmentExpenses || enpack.researchAndDevelopmentExpenses }}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n            <li>\n              <div class=\"col-xs-10\">{{ strings.admistrationExpenses || enpack.admistrationExpenses }}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n            <li>\n              <div class=\"col-xs-10\">{{ strings.otherOperatingExpenses || enpack.otherOperatingExpenses }}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n            <li>\n              <div class=\"col-xs-10\">{{ strings.otherOperatingExpensesTotal || enpack.otherOperatingExpensesTotal }}</div>\n              <div class=\"col-xs-2\">0</div>\n            </li>\n          </ul>\n        </li>\n        <li>\n          <div class=\"col-xs-10\">{{ strings.operatingProfitLoss || enpack.operatingProfitLoss }}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n        <li>\n          <div class=\"col-xs-10\">{{ strings.financialIncome || enpack.financialIncome }}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n        <li>\n          <div class=\"col-xs-10\">{{ strings.financialExpenses || enpack.financialExpenses }}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n        <li>\n          <div class=\"col-xs-10\">{{ strings.profitLossBeforeAppropriationsAndTaxes || enpack.profitLossBeforeAppropriationsAndTaxes }}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n        <li>\n          <div class=\"col-xs-10\">{{ strings.appropriationsIncome || enpack.appropriationsIncome }}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n        <li>\n          <div class=\"col-xs-10\">{{ strings.appropriationsExpense || enpack.appropriationsExpense }}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n        <li>\n          <div class=\"col-xs-10\">{{ strings.incomeTaxes || enpack.incomeTaxes }}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n        <li>\n          <div class=\"col-xs-10\">{{ strings.profitLossOfTheFinancialYear || enpack.profitLossOfTheFinancialYear }}</div>\n          <div class=\"col-xs-2\">0</div>\n        </li>\n      </ul>\n    </li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ 323:
/***/ (function(module, exports) {

module.exports = "\n<!--<div class=\"container-fluid mdl-shadow--6dp mdl-color--blue-grey-300\">\n  <h4 class=\"text-right\">\n    <a routerLink=\"/\" class=\"mdl-shadow--2dp mdl-button mdl-js-button mdl-button--primary\">\n      <i class=\"glyphicon glyphicon-menu-left\"></i>{{strings.previous}}\n    </a>\n    <a routerLink=\"/en/software\" class=\"mdl-color-text--primary\">\n      <span class=\"flag-icon flag-icon-gb\"></span>\n    </a>\n    <a routerLink=\"/fi/software\">\n      <span class=\"flag-icon flag-icon-fi\"></span>\n    </a>\n    <a routerLink=\"/se/software\">\n      <span class=\"flag-icon flag-icon-se\"></span>\n    </a>\n  </h4>\n</div>-->\n\n<div class=\"vcentered\">\n\n  <div class=\"container-fluid mdl-color--white mdl-shadow--6dp\">\n    <div class=\"col-xs-12  mdl-shadow--6dp\" style=\"background: rgba(200, 230, 255, 0.66) !important; padding-bottom: 20px;\">\n      <div class=\"col-xs-12 col-lg-4\" style=\"float: right;\">\n        <div class=\"col-xs-12\">\n          <h2>Everything else</h2>\n        </div>\n        <div style=\"clear: both\">\n          <div class=\"col-sm-6 col-lg-12\" style=\"margin-bottom: 50px;\">\n            <form>\n              <div class=\"row\">\n                <div class=\"col-xs-8\">\n                  <div class=\"form-group\">\n                    <label for=\"costsell\">cost/sell</label>\n                    <input type=\"number\" class=\"form-control\" id=\"costsell\">\n                  </div>\n                </div>\n                <div class=\"col-xs-4\">\n                  <div class=\"form-group\">\n                    <label for=\"alv\">ALV %</label>\n                    <select class=\"form-control\" id=\"alv\">\n                      <option *ngFor=\"let alv of alvs\" >{{alv}}</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <h1>There will be gategories</h1>\n              </div>\n              <div class=\"row\">\n                <button class=\"btn btn-disabled btn-block\">submit</button>\n              </div>\n            </form>\n          </div>\n          <div class=\"col-sm-6 col-lg-12\">\n            <div class=\"row text-center\">\n              <h4>Passed data</h4>\n            </div>\n            <div class=\"row mdl-shadow--3dp mdl-color--white\" style='overflow: auto; min-height: 150px; max-height: 250px;'>\n              <div class=\"row text-center\" style=\"width: 100%; padding: 0; margin: 10px 0;\" *ngFor=\"let item of items\">\n                <div class=\"col-sm-3\">{{item.sell}}</div>\n                <div class=\"col-sm-2\">{{item.vat}}%</div>\n                <div class=\"col-sm-6\">{{item.gategory}}</div>\n                <div class=\"col-sm-1\">x</div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      <!-- balance sheet\n          and\n      profit and loss -->\n      <div class=\"col-lg-8\">\n        <!-- balance sheet -->\n          <!-- TODO\n            table and sums\n          -->\n          <div class=\"col-sm-6\">\n            <assetscolumn [strings]=\"strings\" [enpack]=\"enpack\"></assetscolumn>\n            <div style=\"clear: both\"></div>\n          </div>\n\n        <!-- profit and loss -->\n          <!-- TODO\n            table and sums\n          -->\n\n          <div class=\"col-sm-6\">\n            <profitcolumn [strings]=\"strings\" [enpack]=\"enpack\"></profitcolumn>\n            <div style=\"clear: both\"></div>\n          </div>\n\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(144);


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanpackService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LanpackService = (function () {
    function LanpackService() {
        /*
          en = english
          fi = finnish
          se = swedish
        */
        this.strings = {
            // english
            en: {
                admistrationExpenses: "Admistration expenses",
                appropriationsIncome: "Appropriations (income)",
                apartmentExpenses: "Apartment expenses",
                appropriations: "Appropriations",
                appropriationsExpense: "Appropriations (expense)",
                assets: "Assets",
                assetsTotal: "Assets total",
                balanceSheet: "Balance sheet",
                buildings: "Buildings",
                capitalAndReserves: "Capital and reserves",
                capitalAndReservesTotal: "Capital and reserves, Total",
                cashInHandAndInBank: "Cash in hand and in bank",
                computerDeviceAndSoftware: "Computer device and software",
                creditors: "Creditors",
                creditorsTotal: "Creditors total",
                currentAssets: "Current assets",
                currentAssetsTotal: "Current assets, total",
                debtors: "Debtors",
                depreciationsAccordingToPlan: "Depreciations according to plan",
                depreciationsAndReductionsInValue: "Depreciations and reductions in value",
                depreciationsAndReductionsInValueTotal: "Depreciations and reductions in value, total",
                equityAndLiabilities: "Equity and liabilities",
                equityAndLiabilitiesTotal: "Equity and liabilities, total",
                externalServices: "External services",
                financialExpenses: "Financial expenses",
                financialIncome: "Financial income",
                incomeTaxes: "Income taxes",
                intangibleAssets: "Intangible assets",
                investments: "Investments",
                loansFromCreditInstitutions: "Loans from credit institutions",
                longterm: "Longterm",
                machineryAndEquipment: "Machinery and equipment",
                nonCurrentAssets: "Non-current assets",
                nonCurrentAssetsTotal: "Non-current assets total",
                operatingProfitLoss: "Operating profit (loss)",
                optionalStaffExpenses: "Optional staff expenses",
                otherCreditors: "Other creditors",
                otherOperatingExpenses: "Other operating expenses",
                otherOperatingExpensesTotal: "Other operating expenses, total",
                otherOperatingIncome: "Other operating income",
                otherReceivables: "Other receivables",
                otherReserves: "Other reserves",
                otherSocialSecurityExpenses: "Other social security expenses",
                pensionExpenses: "Pension expenses",
                previous: "previous",
                profitAndLossAccount: "Profit and loss account",
                profitLossBeforeAppropriationsAndTaxes: "Profit (loss) before appropriations and taxes",
                profitLossOfTheFinancialYear: "Profit (loss) of the financial year",
                provisions: "Provisions",
                purchasesDuringTheFinancialYear: "Purchases during the financial year",
                rawMaterialsAndConsumables: "Raw materials and consumables",
                rawMaterialsAndConsumablesTotal: "Raw materials and consumables, total",
                rawMaterialsAndServices: "Raw materials and services",
                rawMaterialsAndServicesTotal: "Raw materials and services, total",
                reductionsInValue: "Reductions in value",
                representationExpenses: "Representation expenses",
                researchAndDevelopmentExpenses: "Research and development expenses",
                retairnedEarnings: "Retairned earnings (loss)",
                revaluationReserve: "Revaluation reserve",
                salesAndMarketingExpenses: "Sales and marketing expenses",
                shortterm: "Shortterm",
                shorttermCreditorsTotal: "Shortterm creditors, total",
                shorttermDeptorsTotal: "Shortterm debtors, total",
                shorttermEquipment: "Shortterm equipment",
                socialSecurityExpenses: "Social security expenses",
                staffExpenses: "Staff expenses",
                staffExpensesTotal: "Staff expenses, total",
                stocks: "Stocks",
                subscribedCapital: "Subscribed capital",
                tangibleAssets: "Tangible assets",
                tangibleAssetsTotal: "Tangible assets, total",
                tradeCreditors: "Trade creditors",
                tradeDebtors: "Trade debtors",
                travelExpenses: "Travel expenses",
                turnoverNetSales: "Turnover (net sales)",
                variationsInStocks: "Variations in stocks",
                vatDebt: "Vat-debt",
                vatReceivables: "Vat-receivables",
                vechileExpenses: "Vechile expenses",
                wagesAndSalaries: "Wages and salaries"
            },
            fi: {},
            se: {}
        };
    }
    LanpackService.prototype.getPack = function (lan) {
        return this.strings[lan];
    };
    return LanpackService;
}());
LanpackService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LanpackService);

//# sourceMappingURL=lanpack.service.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lanpack_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetsColumnComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AssetsColumnComponent = (function () {
    function AssetsColumnComponent() {
    }
    AssetsColumnComponent.prototype.ngOnInit = function () { };
    return AssetsColumnComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], AssetsColumnComponent.prototype, "strings", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", Object)
], AssetsColumnComponent.prototype, "enpack", void 0);
AssetsColumnComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'assetscolumn',
        template: __webpack_require__(320),
        providers: [__WEBPACK_IMPORTED_MODULE_1__lanpack_service__["a" /* LanpackService */]],
        styles: [__webpack_require__(312)],
        inputs: ["strings", "enpack"]
    }),
    __metadata("design:paramtypes", [])
], AssetsColumnComponent);

//# sourceMappingURL=assets-column.component.js.map

/***/ })

},[358]);
//# sourceMappingURL=main.bundle.js.map