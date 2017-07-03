webpackJsonp([1,4],{

/***/ 144:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 144;


/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(159);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 152:
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
        template: __webpack_require__(320),
        styles: [__webpack_require__(312)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__softwarepage_softwarepage_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lanpack_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_column_assets_column_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profitcolumn_profitcolumn_component__ = __webpack_require__(157);
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
    { path: 'fi', component: __WEBPACK_IMPORTED_MODULE_7__softwarepage_softwarepage_component__["a" /* SoftwarepageComponent */] },
    { path: 'se', component: __WEBPACK_IMPORTED_MODULE_7__softwarepage_softwarepage_component__["a" /* SoftwarepageComponent */] },
    { path: 'en', component: __WEBPACK_IMPORTED_MODULE_7__softwarepage_softwarepage_component__["a" /* SoftwarepageComponent */] }
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

/***/ 154:
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
                link: "/en"
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
        template: __webpack_require__(322),
        styles: [__webpack_require__(314)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], HomepageComponent);

var _a;
//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Init; });
var Init = (function () {
    function Init() {
    }
    Init.prototype.write = function (x) {
        localStorage.setItem("data", x);
    };
    Init.prototype.load = function () {
        console.log(localStorage.getItem("data"));
        return localStorage.getItem("data");
    };
    return Init;
}());

//# sourceMappingURL=init-storage.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = (function () {
    function Item(m, v, h, s, c, i) {
        this.money = m;
        this.vat = v;
        this.header = h;
        this.subHeader = s;
        this.cOrD = c;
        this.index = i;
        this.getItem();
    }
    Item.prototype.getItem = function () {
        console.log("Money : " + this.money);
        console.log("vat : " + this.vat);
        console.log("header : " + this.header);
        console.log("subHeader : " + this.subHeader);
        console.log("credit / debit : " + this.cOrD);
    };
    Item.prototype.setIndex = function (i) {
        this.index = i;
    };
    Item.prototype.getMoney = function () { return this.money; };
    Item.prototype.getVat = function () { return this.vat; };
    Item.prototype.getHeader = function () { return this.header; };
    Item.prototype.getSubHeader = function () { return this.subHeader; };
    Item.prototype.getCord = function () { return this.cOrD; };
    Item.prototype.getIndex = function () { return this.index; };
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lanpack_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_service__ = __webpack_require__(61);
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
    function ProfitcolumnComponent(router, lanservice, ts) {
        this.router = router;
        this.lanservice = lanservice;
        this.ts = ts;
    }
    ProfitcolumnComponent.prototype.getSalesOf = function (y) {
        try {
            var x = 0;
            var data = JSON.parse(this.ts.getData());
            for (var i = 0; i < data.length; i++) {
                if (data[i]["subHeader"] == y) {
                    if (data[i]["cOrD"] == "debit") {
                        x -= (data[i]["money"] * ((100 - data[i]["vat"]) / 100));
                    }
                    else {
                        x += (data[i]["money"] * ((100 - data[i]["vat"]) / 100));
                    }
                }
            }
            return Math.round(x * 100) / 100;
        }
        catch (err) {
            return 0;
        }
    };
    ProfitcolumnComponent.prototype.getSalesOfOf = function (z, y) {
        try {
            var x = 0;
            var data = JSON.parse(this.ts.getData());
            for (var i = 0; i < data.length; i++) {
                console.log(data[i]["header"] + " " + z);
                console.log((data[i]["subHeader"] == y) + " " + (data[i]["header"] == z));
                if (data[i]["subHeader"] == y && data[i]["header"] == z) {
                    if (data[i]["cOrD"] == "debit") {
                        x -= (data[i]["money"] * ((100 - data[i]["vat"]) / 100));
                    }
                    else {
                        x += (data[i]["money"] * ((100 - data[i]["vat"]) / 100));
                    }
                }
            }
            return Math.round(x * 100) / 100;
        }
        catch (err) {
            return 0;
        }
    };
    ProfitcolumnComponent.prototype.getOtherOperatingExpenses = function () {
        try {
            var arr = ["optionalStaffExpenses", "apartmentExpenses", "vechileExpenses",
                "computerDeviceAndSoftware", "shorttermEquipment", "travelExpenses",
                "representationExpenses", "salesAndMarketingExpenses", "researchAndDevelopmentExpenses",
                "admistrationExpenses", "otherOperatingExpenses"];
            var x = 0;
            var data = JSON.parse(this.ts.getData());
            for (var i = 0; i < data.length; i++) {
                if (arr.includes(data[i]["subHeader"])) {
                    if (data[i]["cOrD"] == "debit") {
                        x -= (data[i]["money"] * ((100 - data[i]["vat"]) / 100));
                    }
                    else {
                        x += (data[i]["money"] * ((100 - data[i]["vat"]) / 100));
                    }
                }
            }
            return Math.round(x * 100) / 100;
        }
        catch (err) {
            return 0;
        }
    };
    ProfitcolumnComponent.prototype.ngOnInit = function () { };
    return ProfitcolumnComponent;
}());
ProfitcolumnComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'profitcolumn',
        template: __webpack_require__(323),
        providers: [__WEBPACK_IMPORTED_MODULE_2__lanpack_service__["a" /* LanpackService */]],
        styles: [__webpack_require__(315)],
        inputs: ["strings", "enpack"]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__lanpack_service__["a" /* LanpackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__lanpack_service__["a" /* LanpackService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */]) === "function" && _c || Object])
], ProfitcolumnComponent);

var _a, _b, _c;
//# sourceMappingURL=profitcolumn.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lanpack_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_column_assets_column_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item__ = __webpack_require__(156);
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
        this.ts = ts;
        this.router = router;
        this.lanservice = lanservice;
        this.assetsCol = assetsCol;
        this.hello = 1;
        this.lan = "en";
        this.alvs = [0, 10, 14, 24];
        this.items = [];
        this.ts.save(this.items);
        if (this.router.url == "/se") {
            this.lan = "se";
        }
        else if (this.router.url == "/fi") {
            this.lan = "fi";
        }
        else {
            this.lan = "en";
        } /**/
        //console.log(this.strings);
        //console.log(this.router.url.split("/"));
        this.strings = this.lanservice.getPack(this.lan);
        this.enpack = this.lanservice.getPack("en");
        ;
    }
    SoftwarepageComponent.prototype.buttonDisabled = function () {
        if (this.alv == undefined || this.costsell == undefined ||
            this.itemHeader == undefined || this.itemSubHeader == undefined) {
            return "disabled";
        }
        else {
            return "warning";
        }
    };
    SoftwarepageComponent.prototype.remove = function (index) {
        this.items.splice(index, 1);
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].setIndex(i);
        }
        this.ts.save(this.items);
    };
    SoftwarepageComponent.prototype.buttonClicked = function () {
        if (this.buttonDisabled() != "disabled") {
            var item = new __WEBPACK_IMPORTED_MODULE_5__item__["a" /* Item */](this.costsell, this.alv, this.itemHeader, this.itemSubHeader, this.creditordebit, this.items.length);
            this.items.push(item);
            /**/
            this.alv = undefined;
            this.costsell = undefined;
            this.itemSubHeader = undefined;
            this.itemHeader = undefined;
            this.creditordebit = undefined; /**/
            this.ts.save(this.items);
        }
    };
    SoftwarepageComponent.prototype.getVatAmount = function (item) {
        return Math.round(item.getMoney() * item.getVat()) / 100;
    };
    SoftwarepageComponent.prototype.ngOnInit = function () { };
    return SoftwarepageComponent;
}());
SoftwarepageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-softwarepage',
        template: __webpack_require__(324),
        providers: [__WEBPACK_IMPORTED_MODULE_2__lanpack_service__["a" /* LanpackService */], __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_4__assets_column_assets_column_component__["a" /* AssetsColumnComponent */]],
        styles: [__webpack_require__(316)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__lanpack_service__["a" /* LanpackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__lanpack_service__["a" /* LanpackService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__assets_column_assets_column_component__["a" /* AssetsColumnComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__assets_column_assets_column_component__["a" /* AssetsColumnComponent */]) === "function" && _d || Object])
], SoftwarepageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=softwarepage.component.js.map

/***/ }),

/***/ 159:
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

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

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

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 320:
/***/ (function(module, exports) {

module.exports = "<div id=\"fullscreendiv\"></div>\r\n<router-outlet mdl-shadow=\"2\"></router-outlet>\r\n"

/***/ }),

/***/ 321:
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h2>{{ strings.balanceSheet || enpack.balanceSheet }}</h2>\r\n</div>\r\n<div>\r\n  <ul>\r\n    <li><div class=\"col-xs-12\">{{ strings.assets || enpack.assets }}</div></li>\r\n    <li>\r\n      <ul>\r\n        <li><div class=\"col-xs-12\">{{ strings.nonCurrentAssets || enpack.nonCurrentAssetsTotal }}</div></li>\r\n        <li>\r\n          <ul>\r\n            <li>\r\n              <div class=\"col-xs-10\">{{strings.intangibleAssets || enpack.intangibleAssets}}</div>\r\n              <div class=\"col-xs-2\">{{getSalesOf(\"intangibleAssets\")}}</div>\r\n            </li>\r\n            <li><div class=\"col-xs-12\">{{strings.tangibleAssets || enpack.tangibleAssets}}</div></li>\r\n            <li>\r\n              <ul>\r\n                <li>\r\n                  <div class=\"col-xs-10\">{{strings.buildings || enpack.buildings}}</div>\r\n                  <div class=\"col-xs-2\">{{getSalesOf(\"buildings\")}}</div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"col-xs-10\">{{strings.machineryAndEquipment || enpack.machineryAndEquipment}}</div>\r\n                  <div class=\"col-xs-2\">{{getSalesOf(\"machineryAndEquipment\")}}</div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"col-xs-10\">{{strings.tangibleAssetsTotal || enpack.tangibleAssetsTotal}}</div>\r\n                  <div class=\"col-xs-2\">0</div>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n            <li>\r\n              <div class=\"col-xs-10\">{{strings.investments || enpack.investments}}</div>\r\n              <div class=\"col-xs-2\">{{getSalesOfOf(\"longtermExpenses\", \"investments\")}}</div>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{strings.currentAssets || enpack.currentAssets}}</div>\r\n          <div class=\"col-xs-2\"><b>0</b></div>\r\n        </li>\r\n        <li>\r\n          <ul>\r\n            <li>\r\n              <div class=\"col-xs-10\">{{strings.stocks || enpack.stocks}}</div>\r\n              <div class=\"col-xs-2\">{{getSalesOf(\"stocks\")}}</div>\r\n            </li>\r\n            <li (click)=\"toggleDebtors()\"><div class=\"col-xs-12\">\r\n              {{strings.debtors || enpack.debtors}}\r\n              <sub class=\"glyphicon glyphicon-triangle-bottom\"></sub>\r\n            </div></li>\r\n            <li>\r\n              <ul *ngIf=\"debtors\" >\r\n                <li>\r\n                  <div class=\"col-xs-10\">{{strings.longterm || enpack.longterm}}</div>\r\n                  <div class=\"col-xs-2\">{{getSalesOfOf(\"debtor\", \"longterm\")}}</div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"col-xs-10\">{{strings.shortterm || enpack.shortterm}}</div>\r\n                  <div class=\"col-xs-2\"><b>\r\n                    {{getSalesOf(\"tradeDebtors\") + getSalesOf(\"vatReceivables\") + getSalesOf(\"otherReceivables\")}}\r\n                  </b></div>\r\n                </li>\r\n                <li>\r\n                  <ul>\r\n                    <li>\r\n                      <div class=\"col-xs-10\">{{strings.tradeDebtors || enpack.tradeDebtors}}</div>\r\n                      <div class=\"col-xs-2\">{{getSalesOf(\"tradeDebtors\")}}</div>\r\n                    </li>\r\n                    <li>\r\n                      <div class=\"col-xs-10\">{{strings.vatReceivables || enpack.vatReceivables}}</div>\r\n                      <div class=\"col-xs-2\">{{getSalesOf(\"vatReceivables\")}}</div>\r\n                    </li>\r\n                    <li>\r\n                      <div class=\"col-xs-10\">{{strings.otherReceivables || enpack.otherReceivables}}</div>\r\n                      <div class=\"col-xs-2\">{{getSalesOf(\"otherReceivables\")}}</div>\r\n                    </li>\r\n                  </ul>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n            <li>\r\n              <div class=\"col-xs-10\">{{strings.investments || enpack.investments}}</div>\r\n              <div class=\"col-xs-2\">{{getSalesOfOf(\"cashOrBank\", \"investments\")}}</div>\r\n            </li>\r\n            <li>\r\n              <div class=\"col-xs-10\">{{strings.cashInHandAndInBank || enpack.cashInHandAndInBank}}</div>\r\n              <div class=\"col-xs-2\">{{getSalesOfOf(\"cashOrBank\", \"cashInHandAndInBank\")}}</div>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </li>\r\n    <li>\r\n      <div class=\"col-xs-10\">{{strings.assetsTotal || enpack.assetsTotal}}</div>\r\n      <div class=\"col-xs-2\">0</div>\r\n    </li>\r\n    <div class=\"col-xs-12\"><br></div>\r\n    <li><div class=\"col-xs-12\">{{strings.equityAndLiabilities || enpack.equityAndLiabilities}}</div></li>\r\n    <li>\r\n      <ul>\r\n        <li><div class=\"col-xs-12\">{{strings.capitalAndReserves || enpack.capitalAndReserves}}</div></li>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{strings.subscribedCapital || enpack.subscribedCapital}}</div>\r\n          <div class=\"col-xs-2\">{{getSalesOf(\"subscribedCapital\")}}</div>\r\n        </li>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{strings.revaluationReserve || enpack.revaluationReserve}}</div>\r\n          <div class=\"col-xs-2\">{{getSalesOf(\"revaluationReserve\")}}</div>\r\n        </li>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{strings.otherReserves || enpack.otherReserves}}</div>\r\n          <div class=\"col-xs-2\">{{getSalesOf(\"otherReserves\")}}</div>\r\n        </li>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{strings.retairnedEarnings || enpack.retairnedEarnings}}</div>\r\n          <div class=\"col-xs-2\">{{getSalesOf(\"retairnedEarnings\")}}</div>\r\n        </li>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{strings.profitLossOfTheFinancialYear || enpack.profitLossOfTheFinancialYear}}</div>\r\n          <div class=\"col-xs-2\">{{getSalesOf(\"profitLossOfTheFinancialYear\")}}</div>\r\n        </li>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{strings.capitalAndReservesTotal || enpack.capitalAndReservesTotal}}</div>\r\n          <div class=\"col-xs-2\">0</div>\r\n        </li>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{strings.appropriations || enpack.appropriations}}</div>\r\n          <div class=\"col-xs-2\">0</div>\r\n        </li>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{strings.provisions || enpack.provisions}}</div>\r\n          <div class=\"col-xs-2\">0</div>\r\n        </li>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{strings.creditors || enpack.creditors}}</div>\r\n          <div class=\"col-xs-2\">0</div>\r\n        </li>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{strings.longterm || enpack.longterm}}</div>\r\n          <div class=\"col-xs-2\">{{getSalesOfOf(\"loanOrDebt\", \"longterm\")}}</div>\r\n        </li>\r\n        <li><div class=\"col-xs-12\">{{strings.shortterm || enpack.shortterm}}</div></li>\r\n        <li>\r\n          <ul>\r\n            <li>\r\n              <div class=\"col-xs-10\">{{strings.loansFromCreditInstitutions || enpack.loansFromCreditInstitutions}}</div>\r\n              <div class=\"col-xs-2\">{{getSalesOf(\"loansFromCreditInstitutions\")}}</div>\r\n            </li>\r\n            <li>\r\n              <div class=\"col-xs-10\">{{strings.tradeCreditors || enpack.tradeCreditors}}</div>\r\n              <div class=\"col-xs-2\">{{getSalesOf(\"tradeCreditors\")}}</div>\r\n            </li>\r\n            <li>\r\n              <div class=\"col-xs-10\">{{strings.vatDebt || enpack.vatDebt}}</div>\r\n              <div class=\"col-xs-2\">{{getSalesOf(\"vatDebt\")}}</div>\r\n            </li>\r\n            <li>\r\n              <div class=\"col-xs-10\">{{strings.otherCreditors || enpack.otherCreditors}}</div>\r\n              <div class=\"col-xs-2\">{{getSalesOf(\"otherCreditors\")}}</div>\r\n            </li>\r\n            <li>\r\n              <div class=\"col-xs-10\">{{strings.shorttermCreditorsTotal || enpack.shorttermCreditorsTotal}}</div>\r\n              <div class=\"col-xs-2\">0</div>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{strings.creditorsTotal || enpack.creditorsTotal}}</div>\r\n          <div class=\"col-xs-2\">0</div>\r\n        </li>\r\n      </ul>\r\n    </li>\r\n    <li>\r\n      <div class=\"col-xs-10\">{{strings.equityAndLiabilitiesTotal || enpack.equityAndLiabilitiesTotal}}</div>\r\n      <div class=\"col-xs-2\">0</div>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ 322:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"centered\">\r\n  <div class=\"mdl-card mdl-shadow--6dp\">\r\n    <div class=\"mdl-card__title\">\r\n      <p><b>Welcome to the bookkeeper.fi</b><br>\r\n      Select language</p>\r\n    </div>\r\n    <div class=\"mdl-card__supporting-text\" style=\"margin: auto;\">\r\n      <!-- Generate flag buttons for language selection -->\r\n      <h2 class=\"text-center\" *ngFor=\"let item of flags\" style=\"padding: auto;\">\r\n        <div class=\"col-xs-{{ 12 / flags.length | number : '1.0-0' }}\">\r\n          <a routerLink=\"{{ item.link }}\" class=\"mdl-color-text--primary\">\r\n            <span class=\"flag-icon flag-icon-{{ item.shortened }} mdl-shadow--2dp\"></span>\r\n          </a>\r\n        </div>\r\n      </h2>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 323:
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n  <h2>{{ strings.profitAndLossAccount || enpack.profitAndLossAccount }}</h2>\r\n</div>\r\n<div>\r\n\r\n  <ul>\r\n    <li>\r\n      <div class=\"col-xs-10\">{{ strings.turnoverNetSales || enpack.turnoverNetSales }}</div>\r\n      <div class=\"col-xs-2\">{{getSalesOf(\"turnoverNetSales\")}}</div>\r\n    </li>\r\n    <li>\r\n      <div class=\"col-xs-10\">{{ strings.otherOperatingIncome || enpack.otherOperatingIncome }}</div>\r\n      <div class=\"col-xs-2\">{{getSalesOf(\"otherOperatingIncome\")}}</div>\r\n    </li>\r\n    <li><div class=\"col-xs-12\">{{ strings.rawMaterialsAndServices || enpack.rawMaterialsAndServices }}</div></li>\r\n    <li>\r\n      <ul>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{ strings.rawMaterialsAndConsumables || enpack.rawMaterialsAndConsumables }}</div>\r\n          <div class=\"col-xs-2\">\r\n            <b>{{getSalesOf(\"purchasesDuringTheFinancialYear\")+getSalesOf(\"variationsInStocks\")}}</b>\r\n          </div>\r\n        </li>\r\n        <li>\r\n          <ul>\r\n            <li>\r\n              <div class=\"col-xs-10\">{{ strings.purchasesDuringTheFinancialYear || enpack.purchasesDuringTheFinancialYear }}</div>\r\n              <div class=\"col-xs-2\">{{getSalesOf(\"purchasesDuringTheFinancialYear\")}}</div>\r\n            </li>\r\n            <li>\r\n              <div class=\"col-xs-10\">{{ strings.variationsInStocks || enpack.variationsInStocks }}</div>\r\n              <div class=\"col-xs-2\">{{getSalesOf(\"variationsInStocks\")}}</div>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </li>\r\n    <li>\r\n      <div class=\"col-xs-10\">{{ strings.externalServices || enpack.externalServices }}</div>\r\n      <div class=\"col-xs-2\">{{getSalesOf(\"externalServices\")}}</div>\r\n    </li>\r\n    <li>\r\n      <div class=\"col-xs-10\">{{ strings.rawMaterialsAndServicesTotal || enpack.rawMaterialsAndServicesTotal }}</div>\r\n      <div class=\"col-xs-2\">0</div>\r\n    </li>\r\n    <li>\r\n      <div class=\"col-xs-10\">{{ strings.staffExpenses || enpack.staffExpenses }}</div>\r\n      <div class=\"col-xs-2\"><b>\r\n        {{getSalesOf(\"wagesAndSalaries\")+getSalesOf(\"pensionExpenses\")+getSalesOf(\"otherSocialSecurityExpenses\")}}\r\n      </b></div>\r\n    </li>\r\n    <li>\r\n      <ul>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{ strings.wagesAndSalaries || enpack.wagesAndSalaries }}</div>\r\n          <div class=\"col-xs-2\">{{getSalesOf(\"wagesAndSalaries\")}}</div>\r\n        </li>\r\n        <li><div class=\"col-xs-12\">{{ strings.socialSecurityExpenses || enpack.socialSecurityExpenses }}</div></li>\r\n        <li>\r\n          <ul>\r\n            <li>\r\n              <div class=\"col-xs-10\">{{ strings.pensionExpenses || enpack.pensionExpenses }}</div>\r\n              <div class=\"col-xs-2\">{{getSalesOf(\"pensionExpenses\")}}</div>\r\n            </li>\r\n            <li>\r\n              <div class=\"col-xs-10\">{{ strings.otherSocialSecurityExpenses || enpack.otherSocialSecurityExpenses }}</div>\r\n              <div class=\"col-xs-2\">{{getSalesOf(\"otherSocialSecurityExpenses\")}}</div>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </li>\r\n    <li>\r\n      <div class=\"col-xs-10\">{{ strings.depreciationsAndReductionsInValue || enpack.depreciationsAndReductionsInValue }}</div>\r\n      <div class=\"col-xs-2\"><b>{{getSalesOf(\"depreciationsAccordingToPlan\")+getSalesOf(\"reductionsInValue\")}}</b></div>\r\n    </li>\r\n    <li>\r\n      <ul>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{ strings.depreciationsAccordingToPlan || enpack.depreciationsAccordingToPlan }}</div>\r\n          <div class=\"col-xs-2\">{{getSalesOf(\"depreciationsAccordingToPlan\")}}</div>\r\n        </li>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{ strings.reductionsInValue || enpack.reductionsInValue }}</div>\r\n          <div class=\"col-xs-2\">{{getSalesOf(\"reductionsInValue\")}}</div>\r\n        </li>\r\n      </ul>\r\n    </li>\r\n    <li>\r\n      <div class=\"col-xs-10\">{{ strings.otherOperatingExpenses || enpack.otherOperatingExpenses }}</div>\r\n      <div class=\"col-xs-2\"><b>{{getOtherOperatingExpenses()}}</b></div>\r\n    </li>\r\n    <li>\r\n      <ul>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{ strings.optionalStaffExpenses || enpack.optionalStaffExpenses }}</div>\r\n          <div class=\"col-xs-2\">{{getSalesOf(\"optionalStaffExpenses\")}}</div>\r\n        </li>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{ strings.apartmentExpenses || enpack.apartmentExpenses }}</div>\r\n          <div class=\"col-xs-2\">{{getSalesOf(\"apartmentExpenses\")}}</div>\r\n        </li>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{ strings.vechileExpenses || enpack.vechileExpenses }}</div>\r\n          <div class=\"col-xs-2\">{{getSalesOf(\"vechileExpenses\")}}</div>\r\n        </li>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{ strings.computerDeviceAndSoftware || enpack.computerDeviceAndSoftware }}</div>\r\n          <div class=\"col-xs-2\">{{getSalesOf(\"computerDeviceAndSoftware\")}}</div>\r\n        </li>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{ strings.shorttermEquipment || enpack.shorttermEquipment }}</div>\r\n          <div class=\"col-xs-2\">{{getSalesOf(\"shorttermEquipment\")}}</div>\r\n        </li>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{ strings.travelExpenses || enpack.travelExpenses }}</div>\r\n          <div class=\"col-xs-2\">{{getSalesOf(\"travelExpenses\")}}</div>\r\n        </li>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{ strings.representationExpenses || enpack.representationExpenses }}</div>\r\n          <div class=\"col-xs-2\">{{getSalesOf(\"representationExpenses\")}}</div>\r\n        </li>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{ strings.salesAndMarketingExpenses || enpack.salesAndMarketingExpenses }}</div>\r\n          <div class=\"col-xs-2\">{{getSalesOf(\"salesAndMarketingExpenses\")}}</div>\r\n        </li>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{ strings.researchAndDevelopmentExpenses || enpack.researchAndDevelopmentExpenses }}</div>\r\n          <div class=\"col-xs-2\">{{getSalesOf(\"researchAndDevelopmentExpenses\")}}</div>\r\n        </li>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{ strings.admistrationExpenses || enpack.admistrationExpenses }}</div>\r\n          <div class=\"col-xs-2\">{{getSalesOf(\"admistrationExpenses\")}}</div>\r\n        </li>\r\n        <li>\r\n          <div class=\"col-xs-10\">{{ strings.otherOperatingExpenses || enpack.otherOperatingExpenses }}</div>\r\n          <div class=\"col-xs-2\">{{getSalesOf(\"otherOperatingExpenses\")}}</div>\r\n        </li>\r\n      </ul>\r\n    </li>\r\n    <li>\r\n      <div class=\"col-xs-10\">{{ strings.operatingProfitLoss || enpack.operatingProfitLoss }}</div>\r\n      <div class=\"col-xs-2\">0</div>\r\n    </li>\r\n    <li>\r\n      <div class=\"col-xs-10\">{{ strings.financialIncome || enpack.financialIncome }}</div>\r\n      <div class=\"col-xs-2\">{{getSalesOf(\"financialIncome\")}}</div>\r\n    </li>\r\n    <li>\r\n      <div class=\"col-xs-10\">{{ strings.financialExpenses || enpack.financialExpenses }}</div>\r\n      <div class=\"col-xs-2\">{{getSalesOf(\"financialExpenses\")}}</div>\r\n    </li>\r\n    <li>\r\n      <div class=\"col-xs-10\">{{ strings.profitLossBeforeAppropriationsAndTaxes || enpack.profitLossBeforeAppropriationsAndTaxes }}</div>\r\n      <div class=\"col-xs-2\">0</div>\r\n    </li>\r\n    <li>\r\n      <div class=\"col-xs-10\">{{ strings.appropriationsIncome || enpack.appropriationsIncome }}</div>\r\n      <div class=\"col-xs-2\">{{getSalesOf(\"appropriationsIncome\")}}</div>\r\n    </li>\r\n    <li>\r\n      <div class=\"col-xs-10\">{{ strings.appropriationsExpense || enpack.appropriationsExpense }}</div>\r\n      <div class=\"col-xs-2\">{{getSalesOf(\"appropriationsExpense\")}}</div>\r\n    </li>\r\n    <li>\r\n      <div class=\"col-xs-10\">{{ strings.incomeTaxes || enpack.incomeTaxes }}</div>\r\n      <div class=\"col-xs-2\">{{getSalesOf(\"incomeTaxes\")}}</div>\r\n    </li>\r\n    <li>\r\n      <div class=\"col-xs-10\">{{ strings.profitLossOfTheFinancialYear || enpack.profitLossOfTheFinancialYear }}</div>\r\n      <div class=\"col-xs-2\">0</div>\r\n    </li>\r\n  </ul>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 324:
/***/ (function(module, exports) {

module.exports = "\r\n<!--<div class=\"container-fluid mdl-shadow--6dp mdl-color--blue-grey-300\">\r\n  <h4 class=\"text-right\">\r\n    <a routerLink=\"/\" class=\"mdl-shadow--2dp mdl-button mdl-js-button mdl-button--primary\">\r\n      <i class=\"glyphicon glyphicon-menu-left\"></i>{{strings.previous}}\r\n    </a>\r\n    <a routerLink=\"/en/software\" class=\"mdl-color-text--primary\">\r\n      <span class=\"flag-icon flag-icon-gb\"></span>\r\n    </a>\r\n    <a routerLink=\"/fi/software\">\r\n      <span class=\"flag-icon flag-icon-fi\"></span>\r\n    </a>\r\n    <a routerLink=\"/se/software\">\r\n      <span class=\"flag-icon flag-icon-se\"></span>\r\n    </a>\r\n  </h4>\r\n</div>-->\r\n\r\n<div class=\"vcentered\">\r\n\r\n  <div class=\"container-fluid mdl-color--white mdl-shadow--6dp\" style=\"zoom: 80%\">\r\n    <div class=\"col-xs-12  mdl-shadow--6dp\" style=\"background: rgba(210, 240, 255, 0.85) !important; padding: 20px 0;\">\r\n      <div class=\"col-xs-12 col-lg-4\" style=\"float: right;\">\r\n        <div style=\"clear: both\">\r\n          <div class=\"col-sm-6 col-lg-12\" style=\"margin-bottom: 50px;\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-8\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"costsell\">cost/sell</label>\r\n                  <input type=\"number\" class=\"form-control\" id=\"costsell\" [(ngModel)]=\"costsell\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xs-4\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"alv\">{{strings.vat || enpack.vat}}%</label>\r\n                  <select class=\"form-control\" id=\"alv\" [(ngModel)]=\"alv\">\r\n                    <option *ngFor=\"let alv of alvs\" >{{alv}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-4\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"creditOrDebit\">Credit or debit</label>\r\n                  <select class=\"form-control\" id=\"creditOrDebit\" [(ngModel)]=\"creditordebit\">\r\n                    <option value=\"credit\">+</option>\r\n                    <option value=\"debit\">-</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xs-8\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"itemHeader\">Header</label>\r\n                  <div [ngSwitch]=\"creditordebit\">\r\n                    <div *ngSwitchCase=\"'credit'\">\r\n                      <select class=\"form-control\" id=\"itemHeader\" [(ngModel)]=\"itemHeader\">\r\n                        <option value=\"income\">{{strings.income || enpack.income}}</option>\r\n                        <option value=\"debtor\">{{strings.debtor || enpack.debtor}}</option>\r\n                        <option value=\"cashOrBank\">{{strings.cashOrBank || enpack.cashOrBank}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <div *ngSwitchCase=\"'debit'\">\r\n                      <select class=\"form-control\" id=\"itemHeader\" [(ngModel)]=\"itemHeader\">\r\n                        <option value=\"shorttermExpenses\">{{strings.shorttermExpenses || enpack.shorttermExpenses}}</option>\r\n                        <option value=\"longtermExpenses\">{{strings.longtermExpenses || enpack.longtermExpenses}}</option>\r\n                        <option value=\"capital\">{{strings.capital || enpack.capital}}</option>\r\n                        <option value=\"loanOrDebt\">{{strings.loanOrDebt || enpack.loanOrDebt}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <div *ngSwitchDefault><select class=\"form-control\" id=\"itemHeader\" [(ngModel)]=\"itemHeader\"></select></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-xs-12\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"itemSubHeader\">Subheader</label>\r\n                  <div [ngSwitch]=\"itemHeader\">\r\n                    <div *ngSwitchCase=\"'loanOrDebt'\">\r\n                      <select class=\"form-control\" id=\"itemSubHeader\" [(ngModel)]=\"itemSubHeader\">\r\n                        <option value=\"longterm\">{{strings.longterm || enpack.longterm}}</option>\r\n                        <option value=\"loansFromCreditInstitutions\">{{strings.loansFromCreditInstitutions || enpack.loansFromCreditInstitutions}}</option>\r\n                        <option value=\"tradeCreditors\">{{strings.tradeCreditors || enpack.tradeCreditors}}</option>\r\n                        <option value=\"vatDebt\">{{strings.vatDebt || enpack.vatDebt}}</option>\r\n                        <option value=\"otherCreditors\">{{strings.otherCreditors || enpack.otherCreditors}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <div *ngSwitchCase=\"'capital'\">\r\n                      <select class=\"form-control\" id=\"itemSubHeader\" [(ngModel)]=\"itemSubHeader\">\r\n                        <option value=\"subscribedCapital\">{{strings.subscribedCapital || enpack.subscribedCapital}}</option>\r\n                        <option value=\"revaluationReserve\">{{strings.revaluationReserve || enpack.revaluationReserve}}</option>\r\n                        <option value=\"otherReserves\">{{strings.otherReserves || enpack.otherReserves}}</option>\r\n                        <option value=\"retairnedEarnings\">{{strings.retairnedEarnings || enpack.retairnedEarnings}}</option>\r\n                        <option value=\"profitLossOfTheFinancialYear\">{{strings.profitLossOfTheFinancialYear || enpack.profitLossOfTheFinancialYear}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <div *ngSwitchCase=\"'longtermExpenses'\">\r\n                      <select class=\"form-control\" id=\"itemSubHeader\" [(ngModel)]=\"itemSubHeader\">\r\n                        <option value=\"intangibleAssets\">{{strings.intangibleAssets || enpack.intangibleAssets}}</option>\r\n                        <option value=\"buildings\">{{strings.buildings || enpack.buildings}}</option>\r\n                        <option value=\"machineryAndEquipment\">{{strings.machineryAndEquipment || enpack.machineryAndEquipment}}</option>\r\n                        <option value=\"investments\">{{strings.investments || enpack.investments}}</option>\r\n                        <option value=\"stocks\">{{strings.stocks || enpack.stocks}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <div *ngSwitchCase=\"'shorttermExpenses'\">\r\n                      <select class=\"form-control\" id=\"itemSubHeader\" [(ngModel)]=\"itemSubHeader\">\r\n                        <option value=\"purchasesDuringTheFinancialYear\">\r\n                          {{strings.rawMaterialsAndConsumables || enpack.rawMaterialsAndConsumables}},\r\n                          {{strings.purchasesDuringTheFinancialYear || enpack.purchasesDuringTheFinancialYear}}\r\n                        </option>\r\n                        <option value=\"variationsInStocks\">\r\n                          {{strings.rawMaterialsAndConsumables || enpack.rawMaterialsAndConsumables}},\r\n                          {{strings.variationsInStocks || enpack.variationsInStocks}}\r\n                        </option>\r\n                        <option value=\"externalServices\">{{strings.externalServices || enpack.externalServices}}</option>\r\n                        <option value=\"wagesAndSalaries\">{{strings.wagesAndSalaries || enpack.wagesAndSalaries}}</option>\r\n                        <option value=\"pensionExpenses\">{{strings.pensionExpenses || enpack.pensionExpenses}}</option>\r\n                        <option value=\"otherSocialSecurityExpenses\">{{strings.otherSocialSecurityExpenses || enpack.otherSocialSecurityExpenses}}</option>\r\n                        <option value=\"depreciationsAccordingToPlan\">{{strings.depreciationsAccordingToPlan || enpack.depreciationsAccordingToPlan}}</option>\r\n                        <option value=\"reductionsInValue\">{{strings.reductionsInValue || enpack.reductionsInValue}}</option>\r\n                        <option value=\"optionalStaffExpenses\">{{strings.optionalStaffExpenses || enpack.optionalStaffExpenses}}</option>\r\n                        <option value=\"apartmentExpenses\">{{strings.apartmentExpenses || enpack.apartmentExpenses}}</option>\r\n                        <option value=\"vechileExpenses\">{{strings.vechileExpenses || enpack.vechileExpenses}}</option>\r\n                        <option value=\"computerDeviceAndSoftware\">{{strings.computerDeviceAndSoftware || enpack.computerDeviceAndSoftware}}</option>\r\n                        <option value=\"shorttermEquipment\">{{strings.shorttermEquipment || enpack.shorttermEquipment}}</option>\r\n                        <option value=\"travelExpenses\">{{strings.travelExpenses || enpack.travelExpenses}}</option>\r\n                        <option value=\"representationExpenses\">{{strings.representationExpenses || enpack.representationExpenses}}</option>\r\n                        <option value=\"salesAndMarketingExpenses\">{{strings.salesAndMarketingExpenses || enpack.salesAndMarketingExpenses}}</option>\r\n                        <option value=\"researchAndDevelopmentExpenses\">{{strings.researchAndDevelopmentExpenses || enpack.researchAndDevelopmentExpenses}}</option>\r\n                        <option value=\"admistrationExpenses\">{{strings.admistrationExpenses || enpack.admistrationExpenses}}</option>\r\n                        <option value=\"otherOperatingExpenses\">{{strings.otherOperatingExpenses || enpack.otherOperatingExpenses}}</option>\r\n                        <option value=\"financialExpenses\">{{strings.financialExpenses || enpack.financialExpenses}}</option>\r\n                        <option value=\"appropriationsExpense\">{{strings.appropriationsExpense || enpack.appropriationsExpense}}</option>\r\n                        <option value=\"incomeTaxes\">{{strings.incomeTaxes || enpack.incomeTaxes}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <div *ngSwitchCase=\"'income'\">\r\n                      <select class=\"form-control\" id=\"itemSubHeader\" [(ngModel)]=\"itemSubHeader\">\r\n                        <option value=\"turnoverNetSales\">{{strings.turnoverNetSales || enpack.turnoverNetSales}}</option>\r\n                        <option value=\"otherOperatingIncome\">{{strings.otherOperatingIncome || enpack.otherOperatingIncome}}</option>\r\n                        <option value=\"financialIncome\">{{strings.financialIncome || enpack.financialIncome}}</option>\r\n                        <option value=\"appropriationsIncome\">{{strings.appropriationsIncome || enpack.appropriationsIncome}}</option>\r\n                      </select>\r\n                    </div>\r\n                    <div *ngSwitchCase=\"'debtor'\">\n                      <select class=\"form-control\" id=\"itemSubHeader\" [(ngModel)]=\"itemSubHeader\">\n                        <option value=\"longterm\">{{strings.longterm || enpack.longterm}}</option>\n                        <option value=\"tradeDebtors\">{{strings.tradeDebtors || enpack.tradeDebtors}}</option>\n                        <option value=\"otherReceivables\">{{strings.otherReceivables || enpack.otherReceivables}}</option>\n                      </select>\n                    </div>\n                    <div *ngSwitchCase=\"'cashOrBank'\">\n                      <select class=\"form-control\" id=\"itemSubHeader\" [(ngModel)]=\"itemSubHeader\">\n                        <option value=\"cashInHandAndInBank\">{{strings.cashInHandAndInBank || enpack.cashInHandAndInBank}}</option>\n                        <option value=\"investments\">{{strings.investments || enpack.investments}}</option>\n                      </select>\n                    </div>\n                    <div *ngSwitchDefault>\n                      <select class=\"form-control\" id=\"itemSubHeader\" [(ngModel)]=\"itemHeader\"></select>\r\n                    </div>\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xs-12\">\r\n              <div class=\"row\">\r\n                <div class=\"form-group\">\r\n                  <button class=\"btn btn-{{buttonDisabled()}} btn-block\" (click)=\"buttonClicked()\">submit</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-6 col-lg-12\">\r\n            <div class=\"row mdl-shadow--3dp mdl-color--white\">\r\n\r\n                <div class=\"row text-center\" style=\"width: 100%; padding: 0; margin: 10px 0;\">\r\n                  <h4>Passed data</h4>\r\n                </div>\r\n              <div class=\"row text-center mdl-shadow--2dp\" style=\"width: 100%; padding: 0 0 10px; margin: 10px 0 0;\">\r\n                <div class=\"col-xs-4\"><b>Item</b></div>\r\n                <div class=\"col-xs-2\"><b>Price</b></div>\r\n                <div class=\"col-xs-2\"><b>VAT %</b></div>\r\n                <div class=\"col-xs-2\"><b>VAT €</b></div>\r\n                <div class=\"col-xs-1\"><b>Delete</b></div>\r\n              </div>\r\n              <div  style='overflow: auto; min-height: 100px; max-height: 300px;'>\r\n                <div class=\"row text-center\" style=\"width: 100%; padding: 2px 0 10px; margin: 10px 0; border-bottom: #aaa solid 1px;\" *ngFor=\"let item of items\">\r\n                  <div class=\"col-xs-12\">\r\n                    <div class=\"col-xs-4\"><b>{{strings[item.getHeader()]}}</b></div>\r\n                    <div class=\"col-xs-2\">{{item.getMoney()-getVatAmount(item)}}</div>\r\n                    <div class=\"col-xs-2\">{{item.getVat()}}</div>\r\n                    <div class=\"col-xs-2\">{{getVatAmount(item)}}</div>\r\n                    <div class=\"col-xs-1\"><button class=\"btn btn-danger\" (click)=\"remove(item.getIndex());\">x</button></div>\r\n                  </div>\r\n                  <div class=\"col-xs-12\">\r\n                    <div class=\"col-xs-4\">{{strings[item.getSubHeader()]}}</div>\r\n                    <div class=\"col-xs-6\" style=\"border-top: #aaa solid 1px;\"><b>Total: </b>{{item.getMoney()}}€</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- balance sheet\r\n          and\r\n      profit and loss -->\r\n      <div class=\"col-lg-8\">\r\n        <!-- balance sheet -->\r\n          <!-- TODO\r\n            table and sums\r\n          -->\r\n          <div class=\"col-sm-6\">\r\n            <assetscolumn [strings]=\"strings\" [enpack]=\"enpack\"></assetscolumn>\r\n            <div style=\"clear: both\"></div>\r\n          </div>\r\n\r\n        <!-- profit and loss -->\r\n          <!-- TODO\r\n            table and sums\r\n          -->\r\n\r\n          <div class=\"col-sm-6\">\r\n            <profitcolumn [strings]=\"strings\" [enpack]=\"enpack\"></profitcolumn>\r\n            <div style=\"clear: both\"></div>\r\n          </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(145);


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
                capital: "Capital",
                capitalAndReserves: "Capital and reserves",
                capitalAndReservesTotal: "Capital and reserves, Total",
                cashInHandAndInBank: "Cash in hand and in bank",
                cashOrBank: "Cash or bank",
                computerDeviceAndSoftware: "Computer device and software",
                creditors: "Creditors",
                creditorsTotal: "Creditors total",
                currentAssets: "Current assets",
                currentAssetsTotal: "Current assets, total",
                debtor: "Debtor",
                debtors: "Debtors",
                depreciationsAccordingToPlan: "Depreciations according to plan",
                depreciationsAndReductionsInValue: "Depreciations and reductions in value",
                depreciationsAndReductionsInValueTotal: "Depreciations and reductions in value, total",
                equityAndLiabilities: "Equity and liabilities",
                equityAndLiabilitiesTotal: "Equity and liabilities, total",
                externalServices: "External services",
                financialExpenses: "Financial expenses",
                financialIncome: "Financial income",
                income: "Income",
                incomeTaxes: "Income taxes",
                intangibleAssets: "Intangible assets",
                investments: "Investments",
                loanOrDebt: "Loan or debt",
                loansFromCreditInstitutions: "Loans from credit institutions",
                longterm: "Longterm",
                longtermExpenses: "Longterm expenses",
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
                shorttermExpenses: "Shortterm expenses",
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
                vat: "VAT",
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

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__init_storage__ = __webpack_require__(155);
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
        return _super.call(this) || this;
    }
    StorageService.prototype.save = function (x) {
        this.write(JSON.stringify(x));
    };
    StorageService.prototype.getData = function () {
        return this.load();
    };
    return StorageService;
}(__WEBPACK_IMPORTED_MODULE_1__init_storage__["a" /* Init */]));
StorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StorageService);

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lanpack_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__(61);
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
    function AssetsColumnComponent(ts) {
        this.ts = ts;
        this.debtors = true;
    }
    AssetsColumnComponent.prototype.getSalesOf = function (y) {
        try {
            var x = 0;
            var data = JSON.parse(this.ts.getData());
            for (var i = 0; i < data.length; i++) {
                if (data[i]["subHeader"] == y) {
                    if (data[i]["cOrD"] == "debit") {
                        x -= (data[i]["money"] * ((100 - data[i]["vat"]) / 100));
                    }
                    else {
                        x += (data[i]["money"] * ((100 - data[i]["vat"]) / 100));
                    }
                }
            }
            return Math.round(x * 100) / 100;
        }
        catch (err) {
            return 0;
        }
    };
    AssetsColumnComponent.prototype.toggleDebtors = function () {
        if (this.debtors == true) {
            this.debtors = false;
            return false;
        }
        else {
            this.debtors = true;
            return true;
        }
    };
    AssetsColumnComponent.prototype.getSalesOfOf = function (z, y) {
        try {
            var x = 0;
            var data = JSON.parse(this.ts.getData());
            for (var i = 0; i < data.length; i++) {
                console.log(data[i]["header"] + " " + z);
                console.log((data[i]["subHeader"] == y) + " " + (data[i]["header"] == z));
                if (data[i]["subHeader"] == y && data[i]["header"] == z) {
                    if (data[i]["cOrD"] == "debit") {
                        x -= (data[i]["money"] * ((100 - data[i]["vat"]) / 100));
                    }
                    else {
                        x += (data[i]["money"] * ((100 - data[i]["vat"]) / 100));
                    }
                }
            }
            return Math.round(x * 100) / 100;
        }
        catch (err) {
            return 0;
        }
    };
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
        template: __webpack_require__(321),
        providers: [__WEBPACK_IMPORTED_MODULE_1__lanpack_service__["a" /* LanpackService */]],
        styles: [__webpack_require__(313)],
        inputs: ["strings", "enpack"]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]) === "function" && _a || Object])
], AssetsColumnComponent);

var _a;
//# sourceMappingURL=assets-column.component.js.map

/***/ })

},[359]);
//# sourceMappingURL=main.bundle.js.map