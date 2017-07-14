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

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_books_service__ = __webpack_require__("../../../../../src/services/books.service.ts");
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
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__services_books_service__["a" /* BooksService */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mainpage_addbook_addbook_component__ = __webpack_require__("../../../../../src/app/mainpage/addbook/addbook.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mainpage_editbook_editbook_component__ = __webpack_require__("../../../../../src/app/mainpage/editbook/editbook.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_10__mainpage_books_list_books_list_component__["a" /* BooksListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__mainpage_addbook_addbook_component__["a" /* AddbookComponent */],
            __WEBPACK_IMPORTED_MODULE_12__mainpage_editbook_editbook_component__["a" /* EditbookComponent */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mainpage_addbook_addbook_component__ = __webpack_require__("../../../../../src/app/mainpage/addbook/addbook.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mainpage_editbook_editbook_component__ = __webpack_require__("../../../../../src/app/mainpage/editbook/editbook.component.ts");
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
            { path: 'addbook', component: __WEBPACK_IMPORTED_MODULE_3__mainpage_addbook_addbook_component__["a" /* AddbookComponent */] },
            { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_4__mainpage_editbook_editbook_component__["a" /* EditbookComponent */] }
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
exports.push([module.i, "\r\n.input-field input:focus + label {\r\n  color: #795548 !important;\r\n}\r\n\r\n.row .input-field input:focus {\r\n  border-bottom: 1px solid #795548 !important;\r\n  box-shadow: 0 1px 0 0 #795548 !important\r\n}\r\n\r\n.authCard {\r\n  margin-top: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authtentificate/authtentificate.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row authCard\">\r\n  <div class=\"col s4 offset-s4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-image\">\r\n        <img src=\"./img/start-img.jpg\">\r\n        <span class=\"card-title\">Book Chest</span>\r\n      </div>\r\n      <div class=\"card-content\">\r\n        <div class=\"row\">\r\n          <div class=\"input-field col s12\">\r\n            <p>{{errorMsg}}</p>\r\n            <input [(ngModel)]=\"userData.email\" id=\"email\" type=\"email\" class=\"validate\">\r\n            <label for=\"email\">Email</label>\r\n          </div>\r\n        </div>\r\n          <div class=\"row\">\r\n            <div class=\"input-field col s12\">\r\n              <input [(ngModel)]=\"userData.password\" id=\"password\" type=\"password\" class=\"validate\">\r\n              <label for=\"password\">Password</label>\r\n            </div>\r\n          </div>\r\n        <div class=\"row\" *ngIf=\"registerTab\">\r\n          <div class=\"input-field col s12\">\r\n            <input [(ngModel)]=\"duplicatePass\" id=\"duplicate-pass\" type=\"password\" class=\"validate\">\r\n            <label for=\"duplicate-pass\">Confirm Password</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-action\">\r\n\r\n          <div class=\"row\" *ngIf=\"!registerTab\">\r\n            <a class=\"waves-effect waves-light btn col s4 offset-m1 brown darken-2\" (click)=\"registerTab = true\"><i class=\"material-icons left\">perm_contact_calendar</i>SignUp</a>\r\n            <button class=\"btn waves-effect waves-light col s4 offset-m2 brown darken-2\" (click)=\"authenticate()\" type=\"submit\" name=\"action\">SignIn\r\n              <i class=\"material-icons left\">input</i>\r\n            </button>\r\n          </div>\r\n\r\n          <div class=\"row\" *ngIf=\"registerTab\">\r\n            <a class=\"waves-effect waves-light btn col s4 brown darken-2\" (click)=\"registerTab = false\"><i class=\"material-icons left\">replay</i>Back</a>\r\n            <button class=\"btn waves-effect waves-light col s4 offset-m4 brown darken-2\" (click)=\"register()\" type=\"submit\" name=\"action\">SignUp\r\n              <i class=\"material-icons left\">done</i>\r\n            </button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n"

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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AuthtentificateComponent);

var _a, _b;
//# sourceMappingURL=authtentificate.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainpage/addbook/addbook.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainpage/addbook/addbook.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row container\">\r\n  <h2>Add your book</h2>\r\n  <form class=\"col s12\">\r\n    <div class=\"row col s6 offset-s3\">\r\n      <a href=\"/\">Select file to uppload</a>\r\n      <div class=\"col s12\">\r\n        <div class=\"input-field col s12\">\r\n          <input type=\"text\" id=\"author\" class=\"form-control\"\r\n                 required minlength=\"4\" maxlength=\"24\"\r\n                 name=\"name\" [(ngModel)]=\"book.author\"\r\n                 #author=\"ngModel\" >\r\n          <label for=\"author\" data-error=\"wrong\" data-success=\"right\">Author</label>\r\n        </div>\r\n        <div class=\"input-field col s12\">\r\n          <input type=\"text\" id=\"title\" class=\"form-control\"\r\n                 required minlength=\"4\" maxlength=\"24\"\r\n                 name=\"name\" [(ngModel)]=\"book.title\"\r\n                 #title=\"ngModel\">\r\n          <label for=\"title\" data-error=\"wrong\" data-success=\"right\">Title</label>\r\n        </div>\r\n        <div class=\"input-field col s12\">\r\n          <textarea  type=\"text\" id=\"description\" class=\"form-control\"\r\n                     required minlength=\"4\" maxlength=\"400\"\r\n                     name=\"name\" [(ngModel)]=\"book.description\"\r\n                     #author=\"ngModel\" class=\"materialize-textarea\"></textarea>\r\n          <label for=\"description\">Description</label>\r\n        </div>\r\n        <div class=\"row\">\r\n        <div class=\"input-field col s4\">\r\n          <select id=\"power\" class=\"form-control browser-default\"\r\n                  name=\"power\"\r\n                  [(ngModel)]=\"statusValue\" required\r\n                  #power=\"ngModel\" >\r\n            <option value=\"\" disabled selected>Status</option>\r\n            <option *ngFor=\"let p of statuses\" [value]=\"p\">{{p}}</option>\r\n          </select>\r\n        </div>\r\n          <div class=\"input-field col s6 offset-s2\">\r\n        <button class=\"btn waves-effect waves-light\" type=\"submit\" (click)=\"submitBook()\" name=\"action\">Submit\r\n          <i class=\"material-icons right\">send</i>\r\n        </button>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/mainpage/addbook/addbook.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_books_service__ = __webpack_require__("../../../../../src/services/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_book__ = __webpack_require__("../../../../../src/models/book.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddbookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var URL = 'http://localhost:3000/api/uploadbook';
var AddbookComponent = (function () {
    function AddbookComponent(bookService) {
        this.bookService = bookService;
        this.book = new __WEBPACK_IMPORTED_MODULE_2__models_book__["a" /* Book */]();
        this.statuses = [true, false];
    }
    AddbookComponent.prototype.ngOnInit = function () {
    };
    AddbookComponent.prototype.submitBook = function () {
        this.book.status = this.statusValue;
        this.book.token = localStorage.token;
        this.bookService.postBook(this.book)
            .subscribe(function (responce) {
            console.log(responce);
        });
    };
    return AddbookComponent;
}());
AddbookComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'addbook',
        template: __webpack_require__("../../../../../src/app/mainpage/addbook/addbook.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mainpage/addbook/addbook.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_books_service__["a" /* BooksService */]) === "function" && _a || Object])
], AddbookComponent);

var _a;
//# sourceMappingURL=addbook.component.js.map

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

module.exports = "\r\n<div class=\"container\">\r\n<h3>Books</h3>\r\n<table>\r\n  <thead>\r\n  <tr style=\"background-color: #795548; color: white\">\r\n    <th style=\"width: 5%; border: 1px solid\">№</th>\r\n    <th style=\"width: 15%; border: 1px solid\">Author</th>\r\n    <th style=\"width: 30%; border: 1px solid\">Title</th>\r\n    <th style=\"width: 20%; border: 1px solid\">BookRating</th>\r\n    <th style=\"width: 20%; border: 1px solid\">Status</th>\r\n    <th style=\"width: 10%; border: 1px solid\">Actions</th>\r\n  </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n  <tr *ngFor=\"let book of books; let i = index\" [attr.data-index]=\"i\"  style=\"border: 1px solid darkgray\">\r\n    <th>{{i+1}}</th>\r\n    <td (click)=\"open(book)\">{{book.author}}</td>\r\n    <td (click)=\"open(book)\">{{book.title}}</td>\r\n    <td><i *ngFor=\"let star of [1,2,3]\" class=\"tiny material-icons\">grade</i></td>\r\n    <td>\r\n      <div class=\"switch\">\r\n        <label>\r\n          Off\r\n          <input [(ngModel)]=\"book.status\" type=\"checkbox\">\r\n          <span class=\"lever\"></span>\r\n          On\r\n        </label>\r\n      </div>\r\n    </td>\r\n    <td>\r\n      <a [routerLink]=\"['../edit',book._id]\" class=\"btn-floating btn-small waves-effect waves-light blue\"><i class=\"material-icons\">mode_edit</i></a>\r\n      <a (click)=\"deleteBook(book._id)\" class=\"btn-floating right btn-small waves-effect waves-light red\"><i class=\"material-icons\">delete</i></a>\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n\r\n  <div class=\"col s8 offset-s2\" *ngIf=\"showBook\">\r\n    <div class=\"card horizontal\">\r\n      <div class=\"card-image\">\r\n        <img src=\"../../../img/noimg.jpg\">\r\n      </div>\r\n      <div class=\"card-stacked\">\r\n        <div class=\"card-content\">\r\n          <h3>{{showBook.author}} - {{showBook.title}}</h3>\r\n          <p>{{showBook.rating}}</p>\r\n          <p>{{showBook.description}}</p>\r\n        </div>\r\n        <div class=\"card-action\">\r\n          <a href=\"#\">Download</a>\r\n          <a (click)=\"showBook = null\" class=\"right\">Close</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/mainpage/books-list/books-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_books_service__ = __webpack_require__("../../../../../src/services/books.service.ts");
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
    function BooksListComponent(bookService) {
        this.bookService = bookService;
    }
    BooksListComponent.prototype.ngOnInit = function () {
        this.loadBooks();
    };
    BooksListComponent.prototype.open = function (book) {
        this.showBook = book;
    };
    BooksListComponent.prototype.deleteBook = function (id) {
        var _this = this;
        this.bookService.deleteBook(id)
            .subscribe(function (responce) {
            _this.loadBooks();
        });
    };
    BooksListComponent.prototype.loadBooks = function () {
        var _this = this;
        this.bookService.getBooks()
            .subscribe(function (responce) {
            _this.books = responce.json().data;
        });
    };
    return BooksListComponent;
}());
BooksListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-books-list',
        template: __webpack_require__("../../../../../src/app/mainpage/books-list/books-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mainpage/books-list/books-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_books_service__["a" /* BooksService */]) === "function" && _a || Object])
], BooksListComponent);

var _a;
//# sourceMappingURL=books-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/mainpage/editbook/editbook.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainpage/editbook/editbook.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row container\">\n  <h2>Edit your book</h2>\n  <form class=\"col s12\">\n    <div class=\"row col s6 offset-s3\">\n      <div class=\"col s12\">\n        <div class=\"input-field col s12\">\n          <input type=\"text\" id=\"author\" class=\"form-control\"\n                 required minlength=\"4\" maxlength=\"24\"\n                 name=\"author\" [(ngModel)]=\"book.author\"\n                 #author=\"ngModel\" >\n          <label for=\"author\" data-error=\"wrong\" style=\"transform: translateY(-140%);\" data-success=\"right\">Author</label>\n        </div>\n        <div class=\"input-field col s12\">\n          <input type=\"text\" id=\"title\" class=\"form-control\"\n                 required minlength=\"4\" maxlength=\"24\"\n                 name=\"title\" [(ngModel)]=\"book.title\"\n                 #title=\"ngModel\">\n          <label  for=\"title\" data-error=\"wrong\" style=\"transform: translateY(-140%);\" data-success=\"right\">Title</label>\n        </div>\n        <div class=\"input-field col s12\">\n          <textarea  type=\"text\" id=\"description\" class=\"form-control\"\n                     required minlength=\"4\" maxlength=\"400\"\n                     name=\"description\" [(ngModel)]=\"book.description\"\n                     #description=\"ngModel\" class=\"materialize-textarea\"></textarea>\n          <label for=\"description\" style=\"transform: translateY(-140%);\">Description</label>\n        </div>\n        <a href=\"/\">Select file to uppload</a>\n        <div class=\"row\">\n          <div class=\"input-field col s4\">\n            <select id=\"power\" class=\"form-control browser-default\"\n                    name=\"power\"\n                    [(ngModel)]=\"book.status\" required\n                    #power=\"ngModel\" >\n              <option value=\"\" disabled selected>Status</option>\n              <option *ngFor=\"let p of statuses\" [value]=\"p\">{{p}}</option>\n            </select>\n          </div>\n          <div class=\"input-field col s6 offset-s2\">\n            <button class=\"btn waves-effect waves-light\" type=\"submit\" (click)=\"updateBook()\" name=\"action\">Change\n              <i class=\"material-icons right\">send</i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/mainpage/editbook/editbook.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_books_service__ = __webpack_require__("../../../../../src/services/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_book__ = __webpack_require__("../../../../../src/models/book.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditbookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditbookComponent = (function () {
    function EditbookComponent(booksService, route) {
        this.booksService = booksService;
        this.route = route;
        this.book = new __WEBPACK_IMPORTED_MODULE_2__models_book__["a" /* Book */];
        this.statuses = [true, false];
    }
    EditbookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.getCurentBook(p['id']);
        });
    };
    EditbookComponent.prototype.getCurentBook = function (id) {
        var _this = this;
        this.booksService.getBook(id)
            .subscribe(function (responce) {
            _this.book = responce.json();
        });
    };
    EditbookComponent.prototype.updateBook = function () {
        this.booksService.updateBook(this.book)
            .subscribe(function (responce) {
            console.log(responce);
        });
    };
    return EditbookComponent;
}());
EditbookComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'editbook',
        template: __webpack_require__("../../../../../src/app/mainpage/editbook/editbook.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mainpage/editbook/editbook.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_books_service__["a" /* BooksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], EditbookComponent);

var _a, _b;
//# sourceMappingURL=editbook.component.js.map

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

module.exports = "<nav>\r\n  <div class=\"nav-wrapper\">\r\n      <a href=\"#\" class=\"brand-logo\">BookChest</a>\r\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\r\n        <li><a routerLink=\"bookslist\">Books</a></li>\r\n        <li><a routerLink=\"addbook\">Add book</a></li>\r\n        <li><a (click)=\"logout()\">Logout</a></li>\r\n      </ul>\r\n  </div>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>\r\n"

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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
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

/***/ "../../../../../src/models/book.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = (function () {
    function Book() {
    }
    return Book;
}());

//# sourceMappingURL=book.js.map

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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/services/books.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BooksService = (function () {
    function BooksService(http) {
        this.http = http;
    }
    BooksService.prototype.getBooks = function () {
        return this.http.get('http://localhost:3000/api/getbooks');
    };
    BooksService.prototype.postBook = function (book) {
        return this.http.post('http://localhost:3000/secure-api/postbook', book);
    };
    BooksService.prototype.deleteBook = function (id) {
        return this.http.delete('http://localhost:3000/secure-api/deletebook/' + id, this.authHeader());
    };
    BooksService.prototype.getBook = function (id) {
        return this.http.get('http://localhost:3000/api/getbook/' + id);
    };
    BooksService.prototype.updateBook = function (book) {
        return this.http.put('http://localhost:3000/secure-api/updatebook/' + book._id, book, this.authHeader());
    };
    BooksService.prototype.authHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('token', localStorage.token);
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
    };
    return BooksService;
}());
BooksService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], BooksService);

var _a;
//# sourceMappingURL=books.service.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map