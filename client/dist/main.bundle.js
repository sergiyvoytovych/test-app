webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authtentificate_authtentificate_component__ = __webpack_require__("../../../../../src/app/authtentificate/authtentificate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mainpage_mainpage_component__ = __webpack_require__("../../../../../src/app/mainpage/mainpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mainpage_books_list_books_list_component__ = __webpack_require__("../../../../../src/app/mainpage/books-list/books-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__authtentificate_authtentificate_component__["a" /* AuthtentificateComponent */],
            __WEBPACK_IMPORTED_MODULE_9__mainpage_mainpage_component__["a" /* MainpageComponent */],
            __WEBPACK_IMPORTED_MODULE_10__mainpage_books_list_books_list_component__["a" /* BooksListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular2_materialize__["a" /* MaterializeModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mainpage_mainpage_component__ = __webpack_require__("../../../../../src/app/mainpage/mainpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authtentificate_authtentificate_component__ = __webpack_require__("../../../../../src/app/authtentificate/authtentificate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mainpage_books_list_books_list_component__ = __webpack_require__("../../../../../src/app/mainpage/books-list/books-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });



var routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        component: __WEBPACK_IMPORTED_MODULE_1__authtentificate_authtentificate_component__["a" /* AuthtentificateComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_0__mainpage_mainpage_component__["a" /* MainpageComponent */],
        children: [
            { path: '', redirectTo: '', pathMatch: 'full' },
            { path: 'bookslist', component: __WEBPACK_IMPORTED_MODULE_2__mainpage_books_list_books_list_component__["a" /* BooksListComponent */] },
        ]
    }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/authtentificate/authtentificate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.input-field input:focus + label {\r\n  color: #795548 !important;\r\n}\r\n\r\n.row .input-field input:focus {\r\n  border-bottom: 1px solid #795548 !important;\r\n  box-shadow: 0 1px 0 0 #795548 !important\r\n}\r\n\r\n.authCard {\r\n  margin-top: 100px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authtentificate/authtentificate.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row authCard\">\n  <div class=\"col s4 offset-s4\">\n    <div class=\"card\">\n      <div class=\"card-image\">\n        <img src=\"./img/start-img.jpg\">\n        <span class=\"card-title\">Book Chest</span>\n      </div>\n      <div class=\"card-content\">\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <p>{{errorMsg}}</p>\n            <input [(ngModel)]=\"userData.email\" id=\"email\" type=\"email\" class=\"validate\">\n            <label for=\"email\">Email</label>\n          </div>\n        </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input [(ngModel)]=\"userData.password\" id=\"password\" type=\"password\" class=\"validate\">\n              <label for=\"password\">Password</label>\n            </div>\n          </div>\n        <div class=\"row\" *ngIf=\"registerTab\">\n          <div class=\"input-field col s12\">\n            <input [(ngModel)]=\"duplicatePass\" id=\"duplicate-pass\" type=\"password\" class=\"validate\">\n            <label for=\"duplicate-pass\">Confirm Password</label>\n          </div>\n        </div>\n        <div class=\"card-action\">\n\n          <div class=\"row\" *ngIf=\"!registerTab\">\n            <a class=\"waves-effect waves-light btn col s4 offset-m1 brown darken-2\" (click)=\"registerTab = true\"><i class=\"material-icons left\">perm_contact_calendar</i>SignUp</a>\n            <button class=\"btn waves-effect waves-light col s4 offset-m2 brown darken-2\" (click)=\"authenticate()\" type=\"submit\" name=\"action\">SignIn\n              <i class=\"material-icons left\">input</i>\n            </button>\n          </div>\n\n          <div class=\"row\" *ngIf=\"registerTab\">\n            <a class=\"waves-effect waves-light btn col s4 brown darken-2\" (click)=\"registerTab = false\"><i class=\"material-icons left\">replay</i>Back</a>\n            <button class=\"btn waves-effect waves-light col s4 offset-m4 brown darken-2\" (click)=\"register()\" type=\"submit\" name=\"action\">SignUp\n              <i class=\"material-icons left\">done</i>\n            </button>\n          </div>\n\n        </div>\n      </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/authtentificate/authtentificate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthtentificateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthtentificateComponent = (function () {
    function AuthtentificateComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.registerTab = false;
        this.userData = {
            email: '',
            password: ''
        };
    }
    AuthtentificateComponent.prototype.ngOnInit = function () {
        if (localStorage.token) {
            this.router.navigate(["home"]);
        }
    };
    AuthtentificateComponent.prototype.authenticate = function () {
        var _this = this;
        if (this.userData.email && this.userData.password) {
            this.auth.login(this.userData)
                .subscribe(function (response) {
                if (response.json().succsess === true) {
                    _this.auth.finishAuth(response.json());
                    _this.router.navigate(["home"]);
                }
                else {
                    _this.errorMsg = 'Wrong user or password!';
                    _this.router.navigate(["auth"]);
                }
            });
        }
    };
    AuthtentificateComponent.prototype.register = function () {
        var _this = this;
        if (this.userData.email && this.userData.password && (this.userData.password === this.duplicatePass)) {
            this.auth.signin(this.userData)
                .subscribe(function (response) {
                _this.auth.finishAuth(response.json());
                _this.router.navigate(["home"]);
            });
        }
    };
    return AuthtentificateComponent;
}());
AuthtentificateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-authtentificate',
        template: __webpack_require__("../../../../../src/app/authtentificate/authtentificate.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authtentificate/authtentificate.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthtentificateComponent);

var _a, _b;
//# sourceMappingURL=authtentificate.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainpage/books-list/books-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainpage/books-list/books-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  books-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/mainpage/books-list/books-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BooksListComponent = (function () {
    function BooksListComponent() {
    }
    BooksListComponent.prototype.ngOnInit = function () {
    };
    return BooksListComponent;
}());
BooksListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-books-list',
        template: __webpack_require__("../../../../../src/app/mainpage/books-list/books-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mainpage/books-list/books-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BooksListComponent);

//# sourceMappingURL=books-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainpage/mainpage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-wrapper {\r\n  background-color: #795548 !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainpage/mainpage.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"nav-wrapper\">\n      <a href=\"#\" class=\"brand-logo\">BookChest</a>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li><a routerLink=\"bookslist\">Books</a></li>\n        <li><a href=\"\">Ipsum</a></li>\n        <li><a href=\"\">Lorem</a></li>\n        <li><a (click)=\"logout()\">Logout</a></li>\n      </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/mainpage/mainpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainpageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainpageComponent = (function () {
    function MainpageComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    MainpageComponent.prototype.ngOnInit = function () {
        if (!localStorage.token) {
            this.router.navigate(["auth"]);
        }
    };
    MainpageComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigate(["auth"]);
    };
    return MainpageComponent;
}());
MainpageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'mainpage',
        template: __webpack_require__("../../../../../src/app/mainpage/mainpage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mainpage/mainpage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MainpageComponent);

var _a, _b;
//# sourceMappingURL=mainpage.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (userData) {
        return this.http.post('http://localhost:3000/api/authenticate', userData);
    };
    AuthService.prototype.signin = function (userData) {
        return this.http.post('http://localhost:3000/api/createuser', userData);
    };
    AuthService.prototype.finishAuth = function (token) {
        console.log(token);
        localStorage.setItem('token', token.token);
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map