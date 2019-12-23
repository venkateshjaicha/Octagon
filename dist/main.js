(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/about/about.module": [
		"./src/app/about/about.module.ts",
		"app-about-about-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shell/shell.service */ "./src/app/shell/shell.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_2__["Shell"].childRoutes([{ path: 'about', loadChildren: 'app/about/about.module#AboutModule' }]),
    // Fallback when no prior route is matched
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var log = new _app_core__WEBPACK_IMPORTED_MODULE_7__["Logger"]('App');
var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, titleService, translateService, i18nService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.translateService = translateService;
        this.i18nService = i18nService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Setup logger
        if (_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production) {
            _app_core__WEBPACK_IMPORTED_MODULE_7__["Logger"].enableProductionMode();
        }
        log.debug('init');
        // Setup translations
        this.i18nService.init(_env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].defaultLanguage, _env_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].supportedLanguages);
        var onNavigationEnd = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }));
        // Change page title on navigation or language change, based on route data
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.translateService.onLangChange, onNavigationEnd)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
            var route = _this.activatedRoute;
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (route) { return route.outlet === 'primary'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (route) { return route.data; }))
            .subscribe(function (event) {
            var title = event['title'];
            if (title) {
                _this.titleService.setTitle(_this.translateService.instant(title));
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _app_core__WEBPACK_IMPORTED_MODULE_7__["I18nService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _shell_shell_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shell/shell.module */ "./src/app/shell/shell.module.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('./ngsw-worker.js', { enabled: _env_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _app_core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _app_shared__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _shell_shell_module__WEBPACK_IMPORTED_MODULE_11__["ShellModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_10__["HomeModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_12__["LoginModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot({
                    positionClass: 'toast-top-right',
                    progressBar: true,
                    progressAnimation: 'increasing',
                    timeOut: 3000,
                }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/authentication/authentication.guard.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/authentication/authentication.guard.ts ***!
  \*************************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logger.service */ "./src/app/core/logger.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/core/authentication/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var log = new _logger_service__WEBPACK_IMPORTED_MODULE_2__["Logger"]('AuthenticationGuard');
var AuthenticationGuard = /** @class */ (function () {
    function AuthenticationGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthenticationGuard.prototype.canActivate = function (route, state) {
        if (this.authenticationService.isAuthenticated()) {
            return true;
        }
        log.debug('Not authenticated, redirecting and adding redirect url...');
        this.router.navigate(['/login'], { queryParams: { redirect: state.url }, replaceUrl: true });
        return false;
    };
    AuthenticationGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "./src/app/core/authentication/authentication.service.mock.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/authentication/authentication.service.mock.ts ***!
  \********************************************************************/
/*! exports provided: MockAuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockAuthenticationService", function() { return MockAuthenticationService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var MockAuthenticationService = /** @class */ (function () {
    function MockAuthenticationService() {
        this.credentials = {
            username: 'test',
            token: '123'
        };
    }
    MockAuthenticationService.prototype.login = function (context) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])({
            username: context.username,
            token: '123456'
        });
    };
    MockAuthenticationService.prototype.logout = function () {
        this.credentials = null;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
    };
    MockAuthenticationService.prototype.isAuthenticated = function () {
        return !!this.credentials;
    };
    return MockAuthenticationService;
}());



/***/ }),

/***/ "./src/app/core/authentication/authentication.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/authentication/authentication.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var credentialsKey = 'credentials';
/**
 * Provides a base for authentication workflow.
 * The Credentials interface as well as login/logout methods should be replaced with proper implementation.
 */
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService() {
        var savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
        if (savedCredentials) {
            this._credentials = JSON.parse(savedCredentials);
        }
    }
    /**
     * Authenticates the user.
     * @param context The login parameters.
     * @return The user credentials.
     */
    AuthenticationService.prototype.login = function (context) {
        // Replace by proper authentication call
        var data = {
            username: context.username,
            token: '123456'
        };
        this.setCredentials(data, context.remember);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(data);
    };
    /**
     * Logs out the user and clear credentials.
     * @return True if the user was logged out successfully.
     */
    AuthenticationService.prototype.logout = function () {
        // Customize credentials invalidation here
        this.setCredentials();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
    };
    /**
     * Checks is the user is authenticated.
     * @return True if the user is authenticated.
     */
    AuthenticationService.prototype.isAuthenticated = function () {
        return !!this.credentials;
    };
    Object.defineProperty(AuthenticationService.prototype, "credentials", {
        /**
         * Gets the user credentials.
         * @return The user credentials or null if the user is not authenticated.
         */
        get: function () {
            return this._credentials;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the user credentials.
     * The credentials may be persisted across sessions by setting the `remember` parameter to true.
     * Otherwise, the credentials are only persisted for the current session.
     * @param credentials The user credentials.
     * @param remember True to remember credentials across sessions.
     */
    AuthenticationService.prototype.setCredentials = function (credentials, remember) {
        this._credentials = credentials || null;
        if (credentials) {
            var storage = remember ? localStorage : sessionStorage;
            storage.setItem(credentialsKey, JSON.stringify(credentials));
        }
        else {
            sessionStorage.removeItem(credentialsKey);
            localStorage.removeItem(credentialsKey);
        }
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./route-reusable-strategy */ "./src/app/core/route-reusable-strategy.ts");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication/authentication.service */ "./src/app/core/authentication/authentication.service.ts");
/* harmony import */ var _authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication/authentication.guard */ "./src/app/core/authentication/authentication.guard.ts");
/* harmony import */ var _i18n_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./i18n.service */ "./src/app/core/i18n.service.ts");
/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./http/http.service */ "./src/app/core/http/http.service.ts");
/* harmony import */ var _http_http_cache_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./http/http-cache.service */ "./src/app/core/http/http-cache.service.ts");
/* harmony import */ var _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./http/api-prefix.interceptor */ "./src/app/core/http/api-prefix.interceptor.ts");
/* harmony import */ var _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./http/error-handler.interceptor */ "./src/app/core/http/error-handler.interceptor.ts");
/* harmony import */ var _http_cache_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./http/cache.interceptor */ "./src/app/core/http/cache.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};














var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        // Import guard
        if (parentModule) {
            throw new Error(parentModule + " has already been loaded. Import Core module in the AppModule only.");
        }
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            providers: [
                _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
                _authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_7__["AuthenticationGuard"],
                _i18n_service__WEBPACK_IMPORTED_MODULE_8__["I18nService"],
                _http_http_cache_service__WEBPACK_IMPORTED_MODULE_10__["HttpCacheService"],
                _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_11__["ApiPrefixInterceptor"],
                _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_12__["ErrorHandlerInterceptor"],
                _http_cache_interceptor__WEBPACK_IMPORTED_MODULE_13__["CacheInterceptor"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
                    useClass: _http_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]
                },
                {
                    provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
                    useClass: _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_5__["RouteReusableStrategy"]
                }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/http/api-prefix.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/http/api-prefix.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: ApiPrefixInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiPrefixInterceptor", function() { return ApiPrefixInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Prefixes all requests with `environment.serverUrl`.
 */
var ApiPrefixInterceptor = /** @class */ (function () {
    function ApiPrefixInterceptor() {
    }
    ApiPrefixInterceptor.prototype.intercept = function (request, next) {
        if (!/^(http|https):/i.test(request.url)) {
            request = request.clone({ url: _env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverUrl + request.url });
        }
        return next.handle(request);
    };
    ApiPrefixInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ApiPrefixInterceptor);
    return ApiPrefixInterceptor;
}());



/***/ }),

/***/ "./src/app/core/http/cache.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/core/http/cache.interceptor.ts ***!
  \************************************************/
/*! exports provided: CacheInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheInterceptor", function() { return CacheInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _http_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http-cache.service */ "./src/app/core/http/http-cache.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Caches HTTP requests.
 * Use ExtendedHttpClient fluent API to configure caching for each request.
 */
var CacheInterceptor = /** @class */ (function () {
    function CacheInterceptor(httpCacheService) {
        this.httpCacheService = httpCacheService;
        this.forceUpdate = false;
    }
    CacheInterceptor_1 = CacheInterceptor;
    /**
     * Configures interceptor options
     * @param options If update option is enabled, forces request to be made and updates cache entry.
     * @return The configured instance.
     */
    CacheInterceptor.prototype.configure = function (options) {
        var instance = new CacheInterceptor_1(this.httpCacheService);
        if (options && options.update) {
            instance.forceUpdate = true;
        }
        return instance;
    };
    CacheInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        if (request.method !== 'GET') {
            return next.handle(request);
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (subscriber) {
            var cachedData = _this.forceUpdate ? null : _this.httpCacheService.getCacheData(request.urlWithParams);
            if (cachedData !== null) {
                // Create new response to avoid side-effects
                subscriber.next(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"](cachedData));
                subscriber.complete();
            }
            else {
                next.handle(request).subscribe(function (event) {
                    if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                        _this.httpCacheService.setCacheData(request.urlWithParams, event);
                    }
                    subscriber.next(event);
                }, function (error) { return subscriber.error(error); }, function () { return subscriber.complete(); });
            }
        });
    };
    var CacheInterceptor_1;
    CacheInterceptor = CacheInterceptor_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_http_cache_service__WEBPACK_IMPORTED_MODULE_3__["HttpCacheService"]])
    ], CacheInterceptor);
    return CacheInterceptor;
}());



/***/ }),

/***/ "./src/app/core/http/error-handler.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/core/http/error-handler.interceptor.ts ***!
  \********************************************************/
/*! exports provided: ErrorHandlerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function() { return ErrorHandlerInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger.service */ "./src/app/core/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var log = new _logger_service__WEBPACK_IMPORTED_MODULE_3__["Logger"]('ErrorHandlerInterceptor');
/**
 * Adds a default error handler to all requests.
 */
var ErrorHandlerInterceptor = /** @class */ (function () {
    function ErrorHandlerInterceptor() {
    }
    ErrorHandlerInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) { return _this.errorHandler(error); }));
    };
    // Customize the default error handler here if needed
    ErrorHandlerInterceptor.prototype.errorHandler = function (response) {
        if (!_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
            // Do something with the error
            log.error('Request error', response);
        }
        throw response;
    };
    ErrorHandlerInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ErrorHandlerInterceptor);
    return ErrorHandlerInterceptor;
}());



/***/ }),

/***/ "./src/app/core/http/http-cache.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/http/http-cache.service.ts ***!
  \*************************************************/
/*! exports provided: HttpCacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpCacheService", function() { return HttpCacheService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logger.service */ "./src/app/core/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var log = new _logger_service__WEBPACK_IMPORTED_MODULE_2__["Logger"]('HttpCacheService');
var cachePersistenceKey = 'httpCache';
/**
 * Provides a cache facility for HTTP requests with configurable persistence policy.
 */
var HttpCacheService = /** @class */ (function () {
    function HttpCacheService() {
        this.cachedData = {};
        this.storage = null;
        this.loadCacheData();
    }
    /**
     * Sets the cache data for the specified request.
     * @param url The request URL.
     * @param data The received data.
     * @param lastUpdated The cache last update, current date is used if not specified.
     */
    HttpCacheService.prototype.setCacheData = function (url, data, lastUpdated) {
        this.cachedData[url] = {
            lastUpdated: lastUpdated || new Date(),
            data: data
        };
        log.debug("Cache set for key: \"" + url + "\"");
        this.saveCacheData();
    };
    /**
     * Gets the cached data for the specified request.
     * @param url The request URL.
     * @return The cached data or null if no cached data exists for this request.
     */
    HttpCacheService.prototype.getCacheData = function (url) {
        var cacheEntry = this.cachedData[url];
        if (cacheEntry) {
            log.debug("Cache hit for key: \"" + url + "\"");
            return cacheEntry.data;
        }
        return null;
    };
    /**
     * Gets the cached entry for the specified request.
     * @param url The request URL.
     * @return The cache entry or null if no cache entry exists for this request.
     */
    HttpCacheService.prototype.getHttpCacheEntry = function (url) {
        return this.cachedData[url] || null;
    };
    /**
     * Clears the cached entry (if exists) for the specified request.
     * @param url The request URL.
     */
    HttpCacheService.prototype.clearCache = function (url) {
        delete this.cachedData[url];
        log.debug("Cache cleared for key: \"" + url + "\"");
        this.saveCacheData();
    };
    /**
     * Cleans cache entries older than the specified date.
     * @param expirationDate The cache expiration date. If no date is specified, all cache is cleared.
     */
    HttpCacheService.prototype.cleanCache = function (expirationDate) {
        var _this = this;
        if (expirationDate) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_1__["each"])(this.cachedData, function (value, key) {
                if (expirationDate >= value.lastUpdated) {
                    delete _this.cachedData[key];
                }
            });
        }
        else {
            this.cachedData = {};
        }
        this.saveCacheData();
    };
    /**
     * Sets the cache persistence policy.
     * Note that changing the cache persistence will also clear the cache from its previous storage.
     * @param persistence How the cache should be persisted, it can be either local or session storage, or if no value is
     *   provided it will be only in-memory (default).
     */
    HttpCacheService.prototype.setPersistence = function (persistence) {
        this.cleanCache();
        this.storage = persistence === 'local' || persistence === 'session' ? window[persistence + 'Storage'] : null;
        this.loadCacheData();
    };
    HttpCacheService.prototype.saveCacheData = function () {
        if (this.storage) {
            this.storage[cachePersistenceKey] = JSON.stringify(this.cachedData);
        }
    };
    HttpCacheService.prototype.loadCacheData = function () {
        var data = this.storage ? this.storage[cachePersistenceKey] : null;
        this.cachedData = data ? JSON.parse(data) : {};
    };
    HttpCacheService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HttpCacheService);
    return HttpCacheService;
}());



/***/ }),

/***/ "./src/app/core/http/http.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/http/http.service.ts ***!
  \*******************************************/
/*! exports provided: HTTP_DYNAMIC_INTERCEPTORS, HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_DYNAMIC_INTERCEPTORS", function() { return HTTP_DYNAMIC_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-handler.interceptor */ "./src/app/core/http/error-handler.interceptor.ts");
/* harmony import */ var _cache_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cache.interceptor */ "./src/app/core/http/cache.interceptor.ts");
/* harmony import */ var _api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api-prefix.interceptor */ "./src/app/core/http/api-prefix.interceptor.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





// From @angular/common/http/src/interceptor: allows to chain interceptors
var HttpInterceptorHandler = /** @class */ (function () {
    function HttpInterceptorHandler(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    HttpInterceptorHandler.prototype.handle = function (request) {
        return this.interceptor.intercept(request, this.next);
    };
    return HttpInterceptorHandler;
}());
/**
 * Allows to override default dynamic interceptors that can be disabled with the HttpService extension.
 * Except for very specific needs, you should better configure these interceptors directly in the constructor below
 * for better readability.
 *
 * For static interceptors that should always be enabled (like ApiPrefixInterceptor), use the standard
 * HTTP_INTERCEPTORS token.
 */
var HTTP_DYNAMIC_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('HTTP_DYNAMIC_INTERCEPTORS');
/**
 * Extends HttpClient with per request configuration using dynamic interceptors.
 */
var HttpService = /** @class */ (function (_super) {
    __extends(HttpService, _super);
    function HttpService(httpHandler, injector, interceptors) {
        if (interceptors === void 0) { interceptors = []; }
        var _this = _super.call(this, httpHandler) || this;
        _this.httpHandler = httpHandler;
        _this.injector = injector;
        _this.interceptors = interceptors;
        if (!_this.interceptors) {
            // Configure default interceptors that can be disabled here
            _this.interceptors = [_this.injector.get(_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_4__["ApiPrefixInterceptor"]), _this.injector.get(_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlerInterceptor"])];
        }
        return _this;
    }
    HttpService_1 = HttpService;
    HttpService.prototype.cache = function (forceUpdate) {
        var cacheInterceptor = this.injector.get(_cache_interceptor__WEBPACK_IMPORTED_MODULE_3__["CacheInterceptor"]).configure({ update: forceUpdate });
        return this.addInterceptor(cacheInterceptor);
    };
    HttpService.prototype.skipErrorHandler = function () {
        return this.removeInterceptor(_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlerInterceptor"]);
    };
    HttpService.prototype.disableApiPrefix = function () {
        return this.removeInterceptor(_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_4__["ApiPrefixInterceptor"]);
    };
    // Override the original method to wire interceptors when triggering the request.
    HttpService.prototype.request = function (method, url, options) {
        var handler = this.interceptors.reduceRight(function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }, this.httpHandler);
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](handler).request(method, url, options);
    };
    HttpService.prototype.removeInterceptor = function (interceptorType) {
        return new HttpService_1(this.httpHandler, this.injector, this.interceptors.filter(function (i) { return !(i instanceof interceptorType); }));
    };
    HttpService.prototype.addInterceptor = function (interceptor) {
        return new HttpService_1(this.httpHandler, this.injector, this.interceptors.concat([interceptor]));
    };
    var HttpService_1;
    HttpService = HttpService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(HTTP_DYNAMIC_INTERCEPTORS)),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHandler"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], Array])
    ], HttpService);
    return HttpService;
}(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));



/***/ }),

/***/ "./src/app/core/i18n.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/i18n.service.ts ***!
  \**************************************/
/*! exports provided: extract, I18nService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extract", function() { return extract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nService", function() { return I18nService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger.service */ "./src/app/core/logger.service.ts");
/* harmony import */ var _translations_en_US_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../translations/en-US.json */ "./src/translations/en-US.json");
var _translations_en_US_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../translations/en-US.json */ "./src/translations/en-US.json", 1);
/* harmony import */ var _translations_fr_FR_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../translations/fr-FR.json */ "./src/translations/fr-FR.json");
var _translations_fr_FR_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../translations/fr-FR.json */ "./src/translations/fr-FR.json", 1);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var log = new _logger_service__WEBPACK_IMPORTED_MODULE_3__["Logger"]('I18nService');
var languageKey = 'language';
/**
 * Pass-through function to mark a string for translation extraction.
 * Running `npm translations:extract` will include the given string by using this.
 * @param s The string to extract for translation.
 * @return The same string.
 */
function extract(s) {
    return s;
}
var I18nService = /** @class */ (function () {
    function I18nService(translateService) {
        this.translateService = translateService;
        // Embed languages to avoid extra HTTP requests
        translateService.setTranslation('en-US', _translations_en_US_json__WEBPACK_IMPORTED_MODULE_4__);
        translateService.setTranslation('fr-FR', _translations_fr_FR_json__WEBPACK_IMPORTED_MODULE_5__);
    }
    /**
     * Initializes i18n for the application.
     * Loads language from local storage if present, or sets default language.
     * @param defaultLanguage The default language to use.
     * @param supportedLanguages The list of supported languages.
     */
    I18nService.prototype.init = function (defaultLanguage, supportedLanguages) {
        this.defaultLanguage = defaultLanguage;
        this.supportedLanguages = supportedLanguages;
        this.language = '';
        this.translateService.onLangChange.subscribe(function (event) {
            localStorage.setItem(languageKey, event.lang);
        });
    };
    Object.defineProperty(I18nService.prototype, "language", {
        /**
         * Gets the current language.
         * @return The current language code.
         */
        get: function () {
            return this.translateService.currentLang;
        },
        /**
         * Sets the current language.
         * Note: The current language is saved to the local storage.
         * If no parameter is specified, the language is loaded from local storage (if present).
         * @param language The IETF language code to set.
         */
        set: function (language) {
            language = language || localStorage.getItem(languageKey) || this.translateService.getBrowserCultureLang();
            var isSupportedLanguage = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["includes"])(this.supportedLanguages, language);
            // If no exact match is found, search without the region
            if (language && !isSupportedLanguage) {
                language = language.split('-')[0];
                language = this.supportedLanguages.find(function (supportedLanguage) { return supportedLanguage.startsWith(language); }) || '';
                isSupportedLanguage = Boolean(language);
            }
            // Fallback if language is not supported
            if (!isSupportedLanguage) {
                language = this.defaultLanguage;
            }
            log.debug("Language set to " + language);
            this.translateService.use(language);
        },
        enumerable: true,
        configurable: true
    });
    I18nService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], I18nService);
    return I18nService;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: CoreModule, AuthenticationService, MockAuthenticationService, AuthenticationGuard, extract, I18nService, HTTP_DYNAMIC_INTERCEPTORS, HttpService, HttpCacheService, ApiPrefixInterceptor, CacheInterceptor, ErrorHandlerInterceptor, RouteReusableStrategy, LogLevel, Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"]; });

/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication/authentication.service */ "./src/app/core/authentication/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _authentication_authentication_service_mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication/authentication.service.mock */ "./src/app/core/authentication/authentication.service.mock.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MockAuthenticationService", function() { return _authentication_authentication_service_mock__WEBPACK_IMPORTED_MODULE_2__["MockAuthenticationService"]; });

/* harmony import */ var _authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/authentication.guard */ "./src/app/core/authentication/authentication.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return _authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_3__["AuthenticationGuard"]; });

/* harmony import */ var _i18n_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./i18n.service */ "./src/app/core/i18n.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extract", function() { return _i18n_service__WEBPACK_IMPORTED_MODULE_4__["extract"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "I18nService", function() { return _i18n_service__WEBPACK_IMPORTED_MODULE_4__["I18nService"]; });

/* harmony import */ var _http_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http/http.service */ "./src/app/core/http/http.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_DYNAMIC_INTERCEPTORS", function() { return _http_http_service__WEBPACK_IMPORTED_MODULE_5__["HTTP_DYNAMIC_INTERCEPTORS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return _http_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]; });

/* harmony import */ var _http_http_cache_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http/http-cache.service */ "./src/app/core/http/http-cache.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpCacheService", function() { return _http_http_cache_service__WEBPACK_IMPORTED_MODULE_6__["HttpCacheService"]; });

/* harmony import */ var _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http/api-prefix.interceptor */ "./src/app/core/http/api-prefix.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiPrefixInterceptor", function() { return _http_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_7__["ApiPrefixInterceptor"]; });

/* harmony import */ var _http_cache_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./http/cache.interceptor */ "./src/app/core/http/cache.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheInterceptor", function() { return _http_cache_interceptor__WEBPACK_IMPORTED_MODULE_8__["CacheInterceptor"]; });

/* harmony import */ var _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./http/error-handler.interceptor */ "./src/app/core/http/error-handler.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function() { return _http_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_9__["ErrorHandlerInterceptor"]; });

/* harmony import */ var _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./route-reusable-strategy */ "./src/app/core/route-reusable-strategy.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouteReusableStrategy", function() { return _route_reusable_strategy__WEBPACK_IMPORTED_MODULE_10__["RouteReusableStrategy"]; });

/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logger.service */ "./src/app/core/logger.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return _logger_service__WEBPACK_IMPORTED_MODULE_11__["LogLevel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _logger_service__WEBPACK_IMPORTED_MODULE_11__["Logger"]; });















/***/ }),

/***/ "./src/app/core/logger.service.ts":
/*!****************************************!*\
  !*** ./src/app/core/logger.service.ts ***!
  \****************************************/
/*! exports provided: LogLevel, Logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });
/**
 * Simple logger system with the possibility of registering custom outputs.
 *
 * 4 different log levels are provided, with corresponding methods:
 * - debug   : for debug information
 * - info    : for informative status of the application (success, ...)
 * - warning : for non-critical errors that do not prevent normal application behavior
 * - error   : for critical errors that prevent normal application behavior
 *
 * Example usage:
 * ```
 * import { Logger } from 'app/core/logger.service';
 *
 * const log = new Logger('myFile');
 * ...
 * log.debug('something happened');
 * ```
 *
 * To disable debug and info logs in production, add this snippet to your root component:
 * ```
 * export class AppComponent implements OnInit {
 *   ngOnInit() {
 *     if (environment.production) {
 *       Logger.enableProductionMode();
 *     }
 *     ...
 *   }
 * }
 *
 * If you want to process logs through other outputs than console, you can add LogOutput functions to Logger.outputs.
 */
/**
 * The possible log levels.
 * LogLevel.Off is never emitted and only used with Logger.level property to disable logs.
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Off"] = 0] = "Off";
    LogLevel[LogLevel["Error"] = 1] = "Error";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Debug"] = 4] = "Debug";
})(LogLevel || (LogLevel = {}));
var Logger = /** @class */ (function () {
    function Logger(source) {
        this.source = source;
    }
    /**
     * Enables production mode.
     * Sets logging level to LogLevel.Warning.
     */
    Logger.enableProductionMode = function () {
        Logger.level = LogLevel.Warning;
    };
    /**
     * Logs messages or objects  with the debug level.
     * Works the same as console.log().
     */
    Logger.prototype.debug = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.log, LogLevel.Debug, objects);
    };
    /**
     * Logs messages or objects  with the info level.
     * Works the same as console.log().
     */
    Logger.prototype.info = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.info, LogLevel.Info, objects);
    };
    /**
     * Logs messages or objects  with the warning level.
     * Works the same as console.log().
     */
    Logger.prototype.warn = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.warn, LogLevel.Warning, objects);
    };
    /**
     * Logs messages or objects  with the error level.
     * Works the same as console.log().
     */
    Logger.prototype.error = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        this.log(console.error, LogLevel.Error, objects);
    };
    Logger.prototype.log = function (func, level, objects) {
        var _this = this;
        if (level <= Logger.level) {
            var log = this.source ? ['[' + this.source + ']'].concat(objects) : objects;
            func.apply(console, log);
            Logger.outputs.forEach(function (output) { return output.apply(output, [_this.source, level].concat(objects)); });
        }
    };
    /**
     * Current logging level.
     * Set it to LogLevel.Off to disable logs completely.
     */
    Logger.level = LogLevel.Debug;
    /**
     * Additional log outputs.
     */
    Logger.outputs = [];
    return Logger;
}());



/***/ }),

/***/ "./src/app/core/route-reusable-strategy.ts":
/*!*************************************************!*\
  !*** ./src/app/core/route-reusable-strategy.ts ***!
  \*************************************************/
/*! exports provided: RouteReusableStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteReusableStrategy", function() { return RouteReusableStrategy; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * A route strategy allowing for explicit route reuse.
 * Used as a workaround for https://github.com/angular/angular/issues/18374
 * To reuse a given route, add `data: { reuse: true }` to the route definition.
 */
var RouteReusableStrategy = /** @class */ (function (_super) {
    __extends(RouteReusableStrategy, _super);
    function RouteReusableStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RouteReusableStrategy.prototype.shouldDetach = function (route) {
        return false;
    };
    RouteReusableStrategy.prototype.store = function (route, detachedTree) { };
    RouteReusableStrategy.prototype.shouldAttach = function (route) {
        return false;
    };
    RouteReusableStrategy.prototype.retrieve = function (route) {
        return null;
    };
    RouteReusableStrategy.prototype.shouldReuseRoute = function (future, curr) {
        return future.routeConfig === curr.routeConfig || future.data.reuse;
    };
    return RouteReusableStrategy;
}(_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouteReuseStrategy"]));



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shell/shell.service */ "./src/app/shell/shell.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    _app_shell_shell_service__WEBPACK_IMPORTED_MODULE_4__["Shell"].childRoutes([
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: 'home', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], data: { title: Object(_app_core__WEBPACK_IMPORTED_MODULE_2__["extract"])('Home') } }
    ])
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"card\">\r\n<div class=\"card-body\">\r\n<div class=\"row\">\r\n<div class=\"col-md-12\">\r\n<button type=\"button\" class=\"btn advance-settingbtn\" (click)=\"AdvancedSetting(content);\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i>&nbsp;Advanced Settings</button>\r\n</div>\r\n</div>\r\n<div class=\"row content-div\">\r\n<div class=\"col-md-12 text-center\">\r\n<h5 class=\"divheader\">Reject Table Information</h5>\r\n</div>\r\n<div class=\"col-md-5 margin-left\">\r\n<div class=\"input-group\">\r\n<label class=\"custom-lbl\">Reject Directory Name</label>\r\n<select id=\"reject-select\" class=\"form-control inpt-cmn\" placeholder=\"Select Directory\" [(ngModel)]=\"Rejectid\">\r\n<option *ngFor=\"let rejedir of RejectDirName\" [value]=\"rejedir\">\r\n{{rejedir}}\r\n</option>\r\n</select>\r\n</div>\r\n</div>\r\n<div class=\"col-md-4 margin-left\">\r\n<div class=\"input-group\">\r\n\r\n<label class=\"custom-lbl\">Reject Table Name</label>\r\n<input type=\"text\" required class=\"inpt-cmn form-control\" [(ngModel)]=\"RejectTableName\" placeholder=\"ca_bi_c53012a_rejects\">\r\n\r\n</div>\r\n<p *ngIf=\"req_reject_tablename\" class=\"text-danger error-message\" translate>*This field is required</p>\r\n</div>\r\n</div>\r\n<div class=\"row content-div\">\r\n<div class=\"col-md-12 text-center\">\r\n<h5 class=\"divheader\">Output Table Information</h5>\r\n</div>\r\n<div class=\"col-md-5 margin-left\">\r\n<div class=\"input-group\">\r\n<label class=\"custom-lbl\">Output Directory Name</label>\r\n<select id=\"outptdirname\" class=\"form-control inpt-cmn\" placeholder=\"Select Directory\" [(ngModel)]=\"Outputid\">\r\n<option *ngFor=\"let outdir of OutputDirName\" [value]=\"outdir\">\r\n{{outdir}}\r\n</option>\r\n</select>\r\n</div>\r\n</div>\r\n<div class=\"col-md-4 margin-left\">\r\n<div class=\"input-group\">\r\n\r\n<label class=\"custom-lbl\">Output Table Name</label>\r\n<input type=\"text\" class=\"inpt-cmn form-control\" [(ngModel)]=\"OutputTableName\" placeholder=\"ca_bi_c53012a_rejects\">\r\n</div>\r\n<p *ngIf=\"req_output_tablename\" class=\"text-danger error-message\" translate>*This field is required</p>\r\n</div>\r\n</div>\r\n<div class=\"row content-div\">\r\n<div class=\"col-md-12 text-center\">\r\n<h5 class=\"divheader\">Date Information</h5>\r\n</div>\r\n<div class=\"col-md-3 margin-left\">\r\n<div class=\"input-group\">\r\n<label class=\"custom-lbl\">Start Date</label>\r\n<input class=\"inpt-cmn form-control\" [(ngModel)]=\"StartDate\" placeholder=\"yyyy-mm-dd\" readonly name=\"startdt\" ngbDatepicker #d1=\"ngbDatepicker\" [placement]=\"'top'\">\r\n<button class=\"btn btn-outline-secondary calendar\" (click)=\"d1.toggle()\" style=\"top:8px;box-shadow: none;\" type=\"button\"></button>\r\n\r\n</div>\r\n<p *ngIf=\"req_start_date\" class=\"text-danger error-message\" translate>*This field is required</p>\r\n\r\n</div>\r\n<div class=\"col-md-3 margin-left\">\r\n<div class=\"input-group\">\r\n<label class=\"custom-lbl\">End Date</label>\r\n<input class=\"inpt-cmn form-control\" [(ngModel)]=\"EndDate\" placeholder=\"yyyy-mm-dd\" readonly name=\"startdt\" ngbDatepicker #d2=\"ngbDatepicker\" [placement]=\"'top'\">\r\n<button class=\"btn btn-outline-secondary calendar\" (click)=\"d2.toggle()\" style=\"top:8px;box-shadow: none;\" type=\"button\"></button>\r\n\r\n</div>\r\n<p *ngIf=\"req_end_date\" class=\"text-danger error-message\" translate>*This field is required</p>\r\n\r\n</div>\r\n<div class=\"col-md-3 margin-left\">\r\n<div class=\"input-group\">\r\n\r\n<label class=\"custom-lbl\">Base Month</label>\r\n<input type=\"text\" [(ngModel)]=\"BaseMonth\" class=\"inpt-cmn form-control\">\r\n</div>\r\n<p *ngIf=\"req_base_month\" class=\"text-danger error-message\" translate>*This field is required</p>\r\n</div>\r\n</div>\r\n\r\n\r\n<div class=\"row content-div\" style=\"height:200px\" >\r\n<div class=\"col-md-12 text-center\">\r\n<h5 class=\"divheader\" style=\"padding-left: 130px;\">Hierarchy Information\r\n\t<button type=\"button\" class=\"btn advance-settingbtn\" [disabled]=\"proxyButton\" (click)=\"Addproxy();\"><i class=\"fa fa-plus-square\" aria-hidden=\"true\"></i>&nbsp;Add Proxy</button>\r\n</h5>\r\n</div>\r\n<ng-container *ngFor=\"let att of anArrays; let i = index\">\r\n<div class=\"col-md-2 margin-left\">\r\n<div class=\"proxy input-group\">\r\n<label class=\"custom-lbl\" >Proxy {{i + 1}}</label>\r\n<select id=\"prxy1\" class=\"form-control inpt-cmn\" (change)=\"OnSelectchange(i);\" [(ngModel)]=\"anArrays[i]\">\r\n<option *ngFor=\"let prx of proxy\" [value]=\"prx\">\r\n{{prx}}\r\n</option>\r\n</select>\r\n<button class=\"select-close\" *ngIf=\"i >= 2\" (click)=\"Removeproxys(i)\" style=\"top:8px;box-shadow: none;\" type=\"button\"></button>\r\n</div>\r\n</div>\r\n</ng-container>\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n<div class=\"col-md-7\" style=\"margin-top: 2rem\">\r\n<button type=\"button\" class=\"btn custombtn\" (click)=\"Submit();\" style=\"float: right\">Submit</button>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n<ng-template #content let-modal>\r\n<div class=\"modal-header\">\r\n<h5 class=\"modal-title modalfeaturetitle\" id=\"modal-basic-title\">Advanced Settings</h5>\r\n<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n<span aria-hidden=\"true\">&times;</span>\r\n</button>\r\n</div>\r\n<div class=\"modal-body\">\r\n<div class=\"row\">\r\n<div class=\"col-md-4 margin-left\">\r\n<div class=\"input-group\">\r\n\r\n<label class=\"custom-lbl\">Reject Unique Id</label>\r\n<input type=\"text\" class=\"inpt-cmn form-control\" [(ngModel)]=\"AdvRejectId\">\r\n</div>\r\n\r\n</div>\r\n<div class=\"col-md-4 margin-left\">\r\n<div class=\"input-group\">\r\n\r\n<label class=\"custom-lbl\">Reject Date Column</label>\r\n<input type=\"text\" class=\"inpt-cmn form-control\" [(ngModel)]=\"AdvRejectDate\">\r\n</div>\r\n\r\n\r\n</div>\r\n</div>\r\n<div class=\"row\">\r\n<div class=\"col-md-4 margin-left\" style=\"margin-top: 1rem;\">\r\n<label class=\"custom-lbl\">Use Public Records</label>\r\n<mat-radio-group aria-label=\"Select an option\" style=\"margin-left: 10px;\" [(ngModel)]=\"AdvPublicrec\" (change)=\"radiopublicChange($event)\">\r\n<mat-radio-button [checked]=true value=\"Y\"><span style=\"color:#000;\">Yes</span></mat-radio-button>\r\n<mat-radio-button value=\"N\"><span style=\"color:#000;\">No</span></mat-radio-button>\r\n</mat-radio-group>\r\n</div>\r\n\r\n<div class=\"col-md-5 margin-left\" style=\"margin-top: 1rem;\">\r\n<label class=\"custom-lbl\">Use Collection Records</label>\r\n<mat-radio-group aria-label=\"Select an option\" style=\"margin-left: 10px;\" [(ngModel)]=\"AdvCollectionrec\" (change)=\"radiocollectionChange($event)\">\r\n<mat-radio-button [checked]=true value=\"Y\"><span style=\"color:#000;\">Yes</span></mat-radio-button>\r\n<mat-radio-button value=\"N\"><span style=\"color:#000;\">No</span></mat-radio-button>\r\n</mat-radio-group>\r\n</div>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n<div class=\"col-md-4 margin-left\">\r\n<div class=\"input-group\" style=\"left: 35px;margin-top: 10px;\">\r\n<label class=\"custom-lbl\">Host Name</label>\r\n<input type=\"text\" class=\"inpt-cmn form-control\" [(ngModel)]=\"AdvHostName\">\r\n</div>\r\n</div>\r\n</div>\r\n\r\n\r\n<div class=\"row\" style=\"margin-top: 20px;\">\r\n<div class=\"col-md-4 margin-left\" style=\"left: 105px;\">\r\n<label class=\"custom-lbl\">New trade open window months before application date</label>\r\n\r\n</div>\r\n\r\n<div class=\"col-md-2\" style=\"left: 75px;\">\r\n<select id=\"reject-select\" class=\"form-control inpt-cmn\" [(ngModel)]=\"AdvWinBefore\">\r\n<option value=\"\" disabled selected hidden>Select</option>\r\n<option *ngFor=\"let winbefore of winbeforeappln\" [value]=\"winbefore\">\r\n{{winbefore}}\r\n</option>\r\n</select>\r\n</div>\r\n</div>\r\n<div class=\"row\" style=\"margin-top: 20px;\">\r\n<div class=\"col-md-4 margin-left\" style=\"left: 105px;\">\r\n<label class=\"custom-lbl\">New trade open window months after application date</label>\r\n\r\n</div>\r\n\r\n<div class=\"col-md-2\" style=\"left: 75px;\">\r\n<select id=\"reject-select\" class=\"form-control inpt-cmn\" [(ngModel)]=\"AdvWinAfter\">\r\n<option value=\"\" disabled selected hidden>Select</option>\r\n<option *ngFor=\"let winafter of winafterappln\" [value]=\"winafter\">\r\n{{winafter}}\r\n</option>\r\n</select>\r\n</div>\r\n</div>\r\n\r\n<div class=\"row\" style=\"margin-top: 20px;\">\r\n<div class=\"col-md-4 margin-left\" style=\"left: 105px;\">\r\n<label class=\"custom-lbl\">Mininimum Months to be qualified as good(Performance window)</label>\r\n\r\n</div>\r\n\r\n<div class=\"col-md-2\" style=\"left: 75px;\">\r\n<select id=\"reject-select\" class=\"form-control inpt-cmn\" [(ngModel)]=\"AdvPerformanceval\">\r\n<option value=\"\" disabled selected hidden>Select</option>\r\n<option *ngFor=\"let performance of performancewin\" [value]=\"performance\">\r\n{{performance}}\r\n</option>\r\n</select>\r\n</div>\r\n</div>\r\n\r\n<div class=\"row\" style=\"margin-top: 20px;\">\r\n<div class=\"col-md-4 margin-left\" style=\"left: 105px;\">\r\n<label class=\"custom-lbl\">Bad Definition(Worst Ever)</label>\r\n\r\n</div>\r\n\r\n<div class=\"col-md-3\" style=\"left: 75px;\">\r\n<select id=\"reject-select\" class=\"form-control inpt-cmn\" [(ngModel)]=\"AdvBadefinition\">\r\n<option value=\"\" disabled selected hidden>Select</option>\r\n<option *ngFor=\"let baddef of badefinition\" [value]=\"baddef\">\r\n{{baddef}}\r\n</option>\r\n</select>\r\n</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n<div class=\"col-md-4\" style=\"left: 50px;\">\r\n<button type=\"button\" class=\"btn custombtn\" (click)=\"closemodal();\" style=\"float: left\">Cancel</button>\r\n</div>\r\n<div class=\"col-md-5\" style=\"left: 135px;\">\r\n<button type=\"button\" class=\"btn custombtn\" (click)=\"savemodal();\" style=\"float: right\">Save</button>\r\n</div>\r\n\r\n</div>\r\n</div>\r\n</ng-template>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.logo {\n  width: 240px;\n  height: 140px; }\nq {\n  font-style: italic;\n  font-size: 1.2rem;\n  quotes: \"« \" \" »\"; }\n.card {\n  margin-top: 3rem;\n  margin-bottom: 3rem; }\n.advance-settingbtn {\n  color: #fff;\n  background: #00A8FF;\n  float: right;\n  margin-top: 5px; }\n.custombtn {\n  color: #fff;\n  background: #00A8FF;\n  float: left;\n  width: 110px;\n  margin-top: 5px; }\n.custom-lbl {\n  color: #000; }\n.content-div {\n  border: 1px solid #000;\n  margin-top: 20px;\n  height: 150px; }\n.inpt-cmn {\n  left: 10px; }\n.margin-left {\n  margin-left: 4rem; }\n.outpt-dir-margin-left {\n  margin-left: 10rem; }\n.outpt-tbl-margin-left {\n  margin-left: 0; }\n.divheader {\n  margin-top: 10px;\n  color: #000; }\n/*Date picker*/\nbutton.calendar {\n  width: 55px;\n  background-image: url('calendar.png') !important;\n  background-repeat: no-repeat !important;\n  background-size: 25px !important;\n  background-position: center !important;\n  height: 37px;\n  border-color: #000; }\nbutton.select-close {\n  width: 32px;\n  background-image: url('closed.png') !important;\n  background-repeat: no-repeat !important;\n  background-size: 14px !important;\n  background-position: center !important;\n  height: 14px;\n  border-color: #000;\n  border: none;\n  background-color: #fff; }\n.form-control {\n  border-color: #000 !important; }\n.aligndate {\n  top: 8px;\n  background-color: #fff; }\n/*Date picker*/\n/*Modal box */\n.modal-title {\n  color: #fff !important; }\n.modal-header {\n  background-color: #007BFF !important; }\n.modal-body {\n  background-color: #fff !important; }\n.modalfeaturetitle {\n  font-size: 16px !important;\n  margin-left: 445px !important; }\n/*Modal box */\n.mat-radio-button ~ .mat-radio-button {\n  margin-left: 30px; }\n::ng-deep .mat-radio-button.mat-accent .mat-radio-inner-circle {\n  background-color: #2e91fb !important;\n  /*inner circle color change*/ }\n::ng-deep.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #2e91fb !important;\n  /*outer ring color change*/ }\n::ng-deep.mat-radio-outer-circle {\n  border-color: #2e91fb !important;\n  /*outer ring color change*/ }\ntable.mat-table {\n  border-spacing: 0 !important;\n  width: 100%; }\n.error-message {\n  padding-left: 25px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL0Q6XFxFeHBlcmlhbi9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7QUNBakI7RUFDRSxhQUFZO0VBQ1osY0FDRixFQUFDO0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLGtCQUFnQixFQUNqQjtBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLG9CQUFtQixFQUVwQjtBQUVEO0VBQ0UsWUFBVztFQUNYLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osZ0JBQWUsRUFDaEI7QUFFRDtFQUNFLFlBQVc7RUFDWCxvQkFBbUI7RUFDbkIsWUFBVztFQUNYLGFBQVk7RUFDWixnQkFBZSxFQUNoQjtBQUVEO0VBQ0UsWUFBVyxFQUNaO0FBRUQ7RUFDRSx1QkFBc0I7RUFDdEIsaUJBQWdCO0VBQ2hCLGNBQWEsRUFFZDtBQUVEO0VBQ0UsV0FBVSxFQUNYO0FBRUQ7RUFDRSxrQkFBaUIsRUFDbEI7QUFFRDtFQUNFLG1CQUFrQixFQUNuQjtBQUVEO0VBQ0UsZUFBYyxFQUNmO0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsWUFBVyxFQUNaO0FBR0QsZUFBZTtBQUNmO0VBQ0UsWUFBVztFQUNYLGlEQUE4RDtFQUM5RCx3Q0FBdUM7RUFDdkMsaUNBQWdDO0VBQ2hDLHVDQUFzQztFQUN0QyxhQUFZO0VBQ1osbUJBQWtCLEVBQ25CO0FBRUQ7RUFDRSxZQUFXO0VBQ1gsK0NBQTREO0VBQzVELHdDQUF1QztFQUN2QyxpQ0FBZ0M7RUFDaEMsdUNBQXNDO0VBQ3RDLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLHVCQUFxQixFQUN0QjtBQUdEO0VBQ0UsOEJBQTZCLEVBQzlCO0FBR0Q7RUFDRSxTQUFRO0VBQ1IsdUJBQXNCLEVBQ3ZCO0FBRUQsZUFBZTtBQUdmLGNBQWM7QUFDZDtFQUNFLHVCQUFzQixFQUN2QjtBQUVEO0VBQ0UscUNBQW9DLEVBQ3JDO0FBRUQ7RUFDRSxrQ0FBaUMsRUFDbEM7QUFFRDtFQUNFLDJCQUEwQjtFQUMxQiw4QkFBNkIsRUFDOUI7QUFHRCxjQUFjO0FBRWQ7RUFDRSxrQkFBaUIsRUFDbEI7QUFFRDtFQUNFLHFDQUFvQztFQUNwQyw2QkFBNkIsRUFDOUI7QUFFRDtFQUNFLGlDQUFnQztFQUNoQywyQkFBMkIsRUFDNUI7QUFFRDtFQUNFLGlDQUFnQztFQUNoQywyQkFBMkIsRUFDNUI7QUFFRDtFQUNFLDZCQUE0QjtFQUM1QixZQUFXLEVBQ1o7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixtQkFBa0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ubG9nbyB7XG4gIHdpZHRoOiAyNDBweDtcbiAgaGVpZ2h0OiAxNDBweDsgfVxuXG5xIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgcXVvdGVzOiBcIsKrIFwiIFwiIMK7XCI7IH1cblxuLmNhcmQge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtOyB9XG5cbi5hZHZhbmNlLXNldHRpbmdidG4ge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzAwQThGRjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiA1cHg7IH1cblxuLmN1c3RvbWJ0biB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDBBOEZGO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDExMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7IH1cblxuLmN1c3RvbS1sYmwge1xuICBjb2xvcjogIzAwMDsgfVxuXG4uY29udGVudC1kaXYge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBoZWlnaHQ6IDE1MHB4OyB9XG5cbi5pbnB0LWNtbiB7XG4gIGxlZnQ6IDEwcHg7IH1cblxuLm1hcmdpbi1sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IDRyZW07IH1cblxuLm91dHB0LWRpci1tYXJnaW4tbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHJlbTsgfVxuXG4ub3V0cHQtdGJsLW1hcmdpbi1sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cblxuLmRpdmhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiAjMDAwOyB9XG5cbi8qRGF0ZSBwaWNrZXIqL1xuYnV0dG9uLmNhbGVuZGFyIHtcbiAgd2lkdGg6IDU1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWFnZXMvY2FsZW5kYXIucG5nXCIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGJvcmRlci1jb2xvcjogIzAwMDsgfVxuXG5idXR0b24uc2VsZWN0LWNsb3NlIHtcbiAgd2lkdGg6IDMycHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWFnZXMvY2xvc2VkLnBuZ1wiKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBib3JkZXItY29sb3I6ICMwMDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxuXG4uZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7IH1cblxuLmFsaWduZGF0ZSB7XG4gIHRvcDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XG5cbi8qRGF0ZSBwaWNrZXIqL1xuLypNb2RhbCBib3ggKi9cbi5tb2RhbC10aXRsZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7IH1cblxuLm1vZGFsLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdCRkYgIWltcG9ydGFudDsgfVxuXG4ubW9kYWwtYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDsgfVxuXG4ubW9kYWxmZWF0dXJldGl0bGUge1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDQ0NXB4ICFpbXBvcnRhbnQ7IH1cblxuLypNb2RhbCBib3ggKi9cbi5tYXQtcmFkaW8tYnV0dG9uIH4gLm1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMzBweDsgfVxuXG46Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTkxZmIgIWltcG9ydGFudDtcbiAgLyppbm5lciBjaXJjbGUgY29sb3IgY2hhbmdlKi8gfVxuXG46Om5nLWRlZXAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMmU5MWZiICFpbXBvcnRhbnQ7XG4gIC8qb3V0ZXIgcmluZyBjb2xvciBjaGFuZ2UqLyB9XG5cbjo6bmctZGVlcC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMmU5MWZiICFpbXBvcnRhbnQ7XG4gIC8qb3V0ZXIgcmluZyBjb2xvciBjaGFuZ2UqLyB9XG5cbnRhYmxlLm1hdC10YWJsZSB7XG4gIGJvcmRlci1zcGFjaW5nOiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiIsIi5sb2dvIHtcbiAgd2lkdGg6IDI0MHB4O1xuICBoZWlnaHQ6IDE0MHB4XG59XG5cbnEge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBxdW90ZXM6IFwiwqsgXCJcIiDCu1wiO1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbi10b3A6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG5cbn1cblxuLmFkdmFuY2Utc2V0dGluZ2J0biB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDBBOEZGO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmN1c3RvbWJ0biB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMDBBOEZGO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDExMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5jdXN0b20tbGJsIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5jb250ZW50LWRpdiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIC8vYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbn1cblxuLmlucHQtY21uIHtcbiAgbGVmdDogMTBweDtcbn1cblxuLm1hcmdpbi1sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IDRyZW07XG59XG5cbi5vdXRwdC1kaXItbWFyZ2luLWxlZnQge1xuICBtYXJnaW4tbGVmdDogMTByZW07XG59XG5cbi5vdXRwdC10YmwtbWFyZ2luLWxlZnQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLmRpdmhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG5cbi8qRGF0ZSBwaWNrZXIqL1xuYnV0dG9uLmNhbGVuZGFyIHtcbiAgd2lkdGg6IDU1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWFnZXMvY2FsZW5kYXIucG5nXCIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGJvcmRlci1jb2xvcjogIzAwMDtcbn1cblxuYnV0dG9uLnNlbGVjdC1jbG9zZSB7XG4gIHdpZHRoOiAzMnB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1hZ2VzL2Nsb3NlZC5wbmdcIikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTRweDtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZjtcbn1cblxuXG4uZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5cblxuLmFsaWduZGF0ZSB7XG4gIHRvcDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4vKkRhdGUgcGlja2VyKi9cblxuXG4vKk1vZGFsIGJveCAqL1xuLm1vZGFsLXRpdGxlIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdCRkYgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbGZlYXR1cmV0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNDQ1cHggIWltcG9ydGFudDtcbn1cblxuXG4vKk1vZGFsIGJveCAqL1xuXG4ubWF0LXJhZGlvLWJ1dHRvbn4ubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTkxZmIgIWltcG9ydGFudDtcbiAgLyppbm5lciBjaXJjbGUgY29sb3IgY2hhbmdlKi9cbn1cblxuOjpuZy1kZWVwLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogIzJlOTFmYiAhaW1wb3J0YW50O1xuICAvKm91dGVyIHJpbmcgY29sb3IgY2hhbmdlKi9cbn1cblxuOjpuZy1kZWVwLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICBib3JkZXItY29sb3I6ICMyZTkxZmIgIWltcG9ydGFudDtcbiAgLypvdXRlciByaW5nIGNvbG9yIGNoYW5nZSovXG59XG5cbnRhYmxlLm1hdC10YWJsZSB7XG4gIGJvcmRlci1zcGFjaW5nOiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.service */ "./src/app/home/home.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(formBuilder, homeservice, renderer, toastr, modalService) {
        this.formBuilder = formBuilder;
        this.homeservice = homeservice;
        this.renderer = renderer;
        this.toastr = toastr;
        this.modalService = modalService;
        this.proxyButton = false;
        this.RejectDirName = ['ascend', 'ascend_lite',
            'atg', 's99grp', 'sbcs'
        ];
        this.OutputDirName = ['ascend', 'ascend_lite',
            'atg', 's99grp', 'sbcs'
        ];
        this.winbeforeappln = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        this.winafterappln = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        this.performancewin = ['6', '12', '18', '24'];
        this.badefinition = ['0 DPD', '0-30 DPD', '31-60 DPD', '61-90 DPD', '90+ DPD (BK, CO)'];
        this.proxy = ['Unsecured', 'secured',
            'Auto Loan', 'Mortage', 'Home Equity', 'Credit Union', 'Mtf Loan', 'Student Loan'
        ];
        /*GENERAL*/
        this.Rejectid = 'ascend';
        this.Outputid = 'ascend';
        this.RejectTableName = '';
        this.OutputTableName = '';
        this.req_reject_tablename = false;
        this.req_output_tablename = false;
        this.req_base_month = false;
        this.req_start_date = false;
        this.req_end_date = false;
        this.anArrays = ['Unsecured', 'secured'];
        this.BaseMonth = '';
        this.prxy1 = 'Unsecured';
        this.prxy2 = 'secured';
        /*Advance Settings*/
        this.AdvRejectId = '';
        this.AdvRejectDate = '';
        this.AdvPublicrec = 'Y';
        this.AdvCollectionrec = 'Y';
        this.AdvHostName = '';
        this.AdvWinBefore = '';
        this.AdvWinAfter = '';
        this.FilteredStartdt = '';
        this.FilteredEnddt = '';
        this.AdvPerformanceval = '';
        this.AdvBadefinition = '';
        this.advsaved = false;
        this.requiredall = true;
        this.count = 2;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onChange = function (event) {
        if (event != '') {
            this.requiredall = false;
        }
        else {
            this.requiredall = true;
        }
    };
    HomeComponent.prototype.addElement = function () {
        var div = this.renderer.createElement('p');
        div.innerHTML = "<select id='reject-select' class='form-control inpt-cmn'  [(ngModel)]='Rejectid' ><option *ngFor='let rejedir of RejectDirName' [value]='rejedir'>{{rejedir}}</option></select>";
        this.renderer.appendChild(this.div.nativeElement, div);
    };
    HomeComponent.prototype.AdvancedSetting = function (content) {
        var _this = this;
        this.modalService.open(content, {
            backdrop: 'static',
            keyboard: false,
            ariaLabelledBy: 'modal-basic-title',
            windowClass: "AdvcnModal"
        }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    HomeComponent.prototype.closemodal = function () {
        this.modalService.dismissAll();
        this.AdvRejectId = '';
        this.AdvRejectDate = '';
        this.AdvHostName = '';
        this.AdvWinBefore = '';
        this.AdvWinAfter = '';
        this.AdvPerformanceval = '';
        this.AdvBadefinition = '';
    };
    HomeComponent.prototype.savemodal = function () {
        this.modalService.dismissAll();
        this.advsaved = true;
        this.toastr.success('Settings saved successfully!', 'Advanced settings');
    };
    HomeComponent.prototype.radiopublicChange = function (event) {
    };
    HomeComponent.prototype.radiocollectionChange = function (event) {
    };
    HomeComponent.prototype.Addproxy = function () {
        this.count = this.count + 1;
        if (this.count == 3) {
            this.anArrays.push('Auto Loan');
        }
        else if (this.count == 4) {
            this.anArrays.push('Mortage');
        }
        else if (this.count == 5) {
            this.anArrays.push('Home Equity');
        }
        else if (this.count == 6) {
            this.anArrays.push('Credit Union');
        }
        else if (this.count == 7) {
            this.anArrays.push('Mtf Loan');
        }
        else if (this.count == 8) {
            this.anArrays.push('Student Loan');
        }
        if (this.count == 8) {
            this.proxyButton = true;
        }
        else {
            this.proxyButton = false;
        }
    };
    HomeComponent.prototype.OnSelectchange = function (index) {
        for (var i = 0; i < this.anArrays.length; i++) {
            if (i != index) {
                if (this.anArrays[index] == this.anArrays[i]) {
                    this.anArrays[i] = '';
                    return;
                }
            }
        }
    };
    HomeComponent.prototype.Removeproxys = function (i) {
        this.count = this.count - 1;
        this.anArrays.splice(i, 1);
        if (this.count == 8) {
            this.proxyButton = true;
        }
        else {
            this.proxyButton = false;
        }
    };
    HomeComponent.prototype.Submit = function () {
        var _this = this;
        if (this.RejectTableName != '') {
            this.req_reject_tablename = false;
        }
        else {
            this.req_reject_tablename = true;
        }
        if (this.OutputTableName != '') {
            this.req_output_tablename = false;
        }
        else {
            this.req_output_tablename = true;
        }
        if (this.BaseMonth != '') {
            this.req_base_month = false;
        }
        else {
            this.req_base_month = true;
        }
        if (this.StartDate) {
            this.req_start_date = false;
        }
        else {
            this.req_start_date = true;
        }
        if (this.EndDate) {
            this.req_end_date = false;
        }
        else {
            this.req_end_date = true;
        }
        if (this.StartDate) {
            this.FilteredStartdt = this.StartDate.year + '-' + this.StartDate.month + '-' + this.StartDate.day;
        }
        if (this.EndDate) {
            this.FilteredEnddt = this.EndDate.year + '-' + this.EndDate.month + '-' + this.EndDate.day;
        }
        var proxyobj = {};
        for (var i = 0; i < this.anArrays.length; i++) {
            proxyobj["proxy" + (i + 1)] = this.anArrays[i];
        }
        //console.log(proxyobj);
        if (this.RejectTableName && this.OutputTableName && this.StartDate && this.EndDate && this.BaseMonth) {
            var data = {
                reject_table_name: this.RejectTableName,
                reject_directory_col: this.Rejectid,
                output_table_name: this.OutputTableName,
                output_directory_name: this.Outputid,
                start_date: this.FilteredStartdt,
                end_date: this.FilteredEnddt,
                base_month: this.BaseMonth,
                proxy: proxyobj,
                adv_reject_unique_id: this.AdvRejectId,
                adv_reject_date_col: this.AdvRejectDate,
                adv_public_rec: this.AdvPublicrec,
                adv_collection_rec: this.AdvCollectionrec,
                adv_host_name: this.AdvHostName,
                adv_before_appln: this.AdvWinBefore,
                adv_after_appln: this.AdvWinAfter,
                adv_performance_win: this.AdvPerformanceval,
                adv_bad_def: this.AdvBadefinition,
            };
            console.log(data);
            this.homeservice.GenerateQuery(data).subscribe(function (apiresponse) {
                if (apiresponse.query == "Success") {
                    _this.toastr.success('Data Saved Successfully !', 'Success');
                }
                else { }
            });
        }
        else {
            this.toastr.error('Please Fill out all fields!', 'Warning');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('div'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "div", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var ngx_select_ex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-select-ex */ "./node_modules/ngx-select-ex/fesm5/ngx-select-ex.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"], _app_core__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _app_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeRoutingModule"], ngx_select_ex__WEBPACK_IMPORTED_MODULE_8__["NgxSelectModule"]],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]],
            providers: [_home_service__WEBPACK_IMPORTED_MODULE_7__["HomeService"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/home.service.ts":
/*!**************************************!*\
  !*** ./src/app/home/home.service.ts ***!
  \**************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeService = /** @class */ (function () {
    function HomeService(httpClient) {
        this.httpClient = httpClient;
    }
    HomeService.prototype.GenerateQuery = function (data) {
        return this.httpClient
            .post('GenerateQuery', { "data": data })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (body) {
            if (body) {
                if (body) {
                    return body;
                }
                else {
                    return {};
                }
            }
            else {
                return {};
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]); }));
    };
    HomeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{ path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], data: { title: Object(_app_core__WEBPACK_IMPORTED_MODULE_2__["extract"])('Login') } }];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body id=\"Loginbody\">\r\n <div style=\"margin-top:60px\"> <h3 style=\"text-align: center;\">Bureau Inference Tool </h3></div>\r\n<div class=\"login\">\r\n  <h1>Sign In</h1>\r\n  <form method=\"post\" action=\"\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n    <p><input type=\"text\" name=\"login\" formControlName=\"username\" value=\"\" [placeholder]=\"'Username' | translate\"></p>\r\n    <span hidden translate>Username</span>\r\n                <small [hidden]=\"loginForm.controls.username.valid || loginForm.controls.username.untouched\"\r\n                       class=\"text-danger\" translate>\r\n                  Username is required\r\n                </small>\r\n    <p><input type=\"password\" name=\"password\" value=\"\" formControlName=\"password\"  [placeholder]=\"'Password' | translate\" required></p>\r\n    <small [hidden]=\"loginForm.controls.password.valid || loginForm.controls.password.untouched\"\r\n                       class=\"text-danger\" translate>\r\n                  Password is required\r\n                </small>\r\n        <p class=\"submit\"><input type=\"submit\" name=\"commit\" value=\"Sign In\" [disabled]=\"loginForm.invalid || isLoading\"></p>\r\n<p style=\"text-align: center;color:red\" [hidden]=authuser>Username or Password incorrect!<p>\r\n  </form>\r\n</div>\r\n\r\n</body>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * Copyright (c) 2012 Thibaut Courouble\n * http://www.cssflow.com\n * Licensed under the MIT License\n *\n * Sass/SCSS source: https://goo.gl/0jzXf\n * PSD by Orman Clark: https://goo.gl/D8zmk\n */\n.login {\n  /* margin-top: 3rem; */\n  position: relative;\n  margin: 30px auto;\n  padding: 20px 20px 20px;\n  width: 390px;\n  height: 300px;\n  background: white;\n  border-radius: 3px;\n  box-shadow: 0 0 200px rgba(255, 255, 255, 0.5), 0 12px 15px 6px rgba(0, 0, 0, 0.3); }\n.login h1 {\n  margin: -20px -20px 21px;\n  line-height: 50px;\n  font-size: 20px;\n  font-weight: bold;\n  color: #fff;\n  text-align: center;\n  background: #0F90FF;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(whiteffd), to(#eef2f5));\n  background-image: linear-gradient(to bottom, whiteffd, #eef2f5);\n  box-shadow: 0 1px whitesmoke; }\n.login p {\n  margin: 20px 0 0; }\n.login p:first-child {\n  margin-top: 0; }\n.login input[type=text], .login input[type=password] {\n  width: 345px; }\n.login p.remember_me {\n  float: left;\n  line-height: 31px; }\n.login p.remember_me label {\n  font-size: 12px;\n  color: #777;\n  cursor: pointer; }\n.login p.remember_me input {\n  position: relative;\n  bottom: 1px;\n  margin-right: 4px;\n  vertical-align: middle; }\n.login p.submit {\n  text-align: center; }\n.login-help {\n  margin: 20px 0;\n  font-size: 11px;\n  color: white;\n  text-align: center;\n  text-shadow: 0 1px #2a85a1; }\n.login-help a {\n  color: #cce7fa;\n  text-decoration: none; }\n.login-help a:hover {\n  text-decoration: underline; }\n:-moz-placeholder {\n  color: #c9c9c9 !important;\n  font-size: 13px; }\n::-webkit-input-placeholder {\n  color: #ccc;\n  font-size: 13px; }\ninput {\n  font-family: 'Lucida Grande', Tahoma, Verdana, sans-serif;\n  font-size: 14px; }\ninput[type=text], input[type=password] {\n  margin: 5px;\n  padding: 0 10px;\n  width: 200px;\n  height: 34px;\n  color: #404040;\n  background: white;\n  border: 1px solid;\n  border-color: #c4c4c4 #d1d1d1 #d4d4d4;\n  border-radius: 2px;\n  outline: 5px solid #eff4f7;\n  -moz-outline-radius: 3px;\n  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.12); }\ninput[type=text]:focus, input[type=password]:focus {\n  border-color: #7dc9e2;\n  outline-color: #dceefc;\n  outline-offset: 0; }\ninput[type=submit] {\n  padding: 0 18px;\n  height: 29px;\n  font-size: 12px;\n  font-weight: bold;\n  text-shadow: 0 1px #e3f1f1;\n  background: #cde5ef;\n  border: 2px solid;\n  outline: 0;\n  box-sizing: content-box;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#edf5f8), to(#cde5ef));\n  background-image: linear-gradient(to bottom, #edf5f8, #cde5ef);\n  box-shadow: inset 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.15); }\ninput[type=submit]:active {\n  background: #cde5ef;\n  border-color: #9eb9c2 #b3c0c8 #b4ccce;\n  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.2); }\n.lt-ie9 input[type=text], .lt-ie9 input[type=password] {\n  line-height: 34px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXEV4cGVyaWFuL3NyY1xcYXBwXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7R0FPRztBQUlIO0VBQ0ksdUJBQXVCO0VBRXZCLG1CQUFrQjtFQUNsQixrQkFBaUI7RUFDakIsd0JBQXVCO0VBQ3ZCLGFBQVk7RUFDWixjQUFhO0VBQ2Isa0JBQWlCO0VBQ2pCLG1CQUFrQjtFQUNsQixtRkFBa0YsRUFDckY7QUFHRDtFQUNJLHlCQUF3QjtFQUN4QixrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixvQkFBbUI7RUFFbkIsK0ZBQStEO0VBQS9ELGdFQUErRDtFQUMvRCw2QkFBNEIsRUFDL0I7QUFFRDtFQUNFLGlCQUFnQixFQUNqQjtBQUVEO0VBQ0UsY0FBYSxFQUNkO0FBRUQ7RUFDRSxhQUFZLEVBQ2I7QUFFRDtFQUNFLFlBQVc7RUFDWCxrQkFBaUIsRUFDbEI7QUFFRDtFQUNFLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGdCQUFlLEVBQ2hCO0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLGtCQUFpQjtFQUNqQix1QkFBc0IsRUFDdkI7QUFFRDtFQUNFLG1CQUFrQixFQUNuQjtBQUVEO0VBQ0UsZUFBYztFQUNkLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQiwyQkFBMEIsRUFDM0I7QUFFRDtFQUNFLGVBQWM7RUFDZCxzQkFBcUIsRUFDdEI7QUFFRDtFQUNFLDJCQUEwQixFQUMzQjtBQUVEO0VBQ0UsMEJBQXlCO0VBQ3pCLGdCQUFlLEVBQ2hCO0FBRUQ7RUFDRSxZQUFXO0VBQ1gsZ0JBQWUsRUFDaEI7QUFFRDtFQUNFLDBEQUF5RDtFQUN6RCxnQkFBZSxFQUNoQjtBQUVEO0VBQ0UsWUFBVztFQUNYLGdCQUFlO0VBQ2YsYUFBWTtFQUNaLGFBQVk7RUFDWixlQUFjO0VBQ2Qsa0JBQWlCO0VBQ2pCLGtCQUFpQjtFQUNqQixzQ0FBcUM7RUFDckMsbUJBQWtCO0VBQ2xCLDJCQUEwQjtFQUMxQix5QkFBd0I7RUFFeEIsZ0RBQStDLEVBQ2hEO0FBRUQ7RUFDRSxzQkFBcUI7RUFDckIsdUJBQXNCO0VBQ3RCLGtCQUFpQixFQUNsQjtBQUVEO0VBQ0UsZ0JBQWU7RUFDZixhQUFZO0VBQ1osZ0JBQWU7RUFDZixrQkFBaUI7RUFFakIsMkJBQTBCO0VBQzFCLG9CQUFtQjtFQUNuQixrQkFBaUI7RUFHakIsV0FBVTtFQUdWLHdCQUF1QjtFQUl2Qiw4RkFBOEQ7RUFBOUQsK0RBQThEO0VBRTlELDZEQUE0RCxFQUM3RDtBQUVEO0VBQ0Usb0JBQW1CO0VBQ25CLHNDQUFxQztFQUVyQyw2Q0FBNEMsRUFDN0M7QUFFRDtFQUNFLGtCQUFpQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxMiBUaGliYXV0IENvdXJvdWJsZVxuICogaHR0cDovL3d3dy5jc3NmbG93LmNvbVxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKlxuICogU2Fzcy9TQ1NTIHNvdXJjZTogaHR0cHM6Ly9nb28uZ2wvMGp6WGZcbiAqIFBTRCBieSBPcm1hbiBDbGFyazogaHR0cHM6Ly9nb28uZ2wvRDh6bWtcbiAqL1xuXG5cblxuLmxvZ2luIHtcbiAgICAvKiBtYXJnaW4tdG9wOiAzcmVtOyAqL1xuICAgIC8vdG9wOjc1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4O1xuICAgIHdpZHRoOiAzOTBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMjAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCAwIDEycHggMTVweCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG5cbi5sb2dpbiBoMSB7XG4gICAgbWFyZ2luOiAtMjBweCAtMjBweCAyMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogIzBGOTBGRjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKHdoaXRlZmZkKSwgdG8oI2VlZjJmNSkpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlZmZkLCAjZWVmMmY1KTtcbiAgICBib3gtc2hhZG93OiAwIDFweCB3aGl0ZXNtb2tlO1xufVxuXG4ubG9naW4gcCB7XG4gIG1hcmdpbjogMjBweCAwIDA7XG59XG5cbi5sb2dpbiBwOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmxvZ2luIGlucHV0W3R5cGU9dGV4dF0sIC5sb2dpbiBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XG4gIHdpZHRoOiAzNDVweDtcbn1cblxuLmxvZ2luIHAucmVtZW1iZXJfbWUge1xuICBmbG9hdDogbGVmdDtcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XG59XG5cbi5sb2dpbiBwLnJlbWVtYmVyX21lIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzc3NztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubG9naW4gcC5yZW1lbWJlcl9tZSBpbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAxcHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubG9naW4gcC5zdWJtaXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1oZWxwIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAwIDFweCAjMmE4NWExO1xufVxuXG4ubG9naW4taGVscCBhIHtcbiAgY29sb3I6ICNjY2U3ZmE7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmxvZ2luLWhlbHAgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG46LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYzljOWM5ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNjY2M7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuaW5wdXQge1xuICBmb250LWZhbWlseTogJ0x1Y2lkYSBHcmFuZGUnLCBUYWhvbWEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMzRweDtcbiAgY29sb3I6ICM0MDQwNDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjYzRjNGM0ICNkMWQxZDEgI2Q0ZDRkNDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBvdXRsaW5lOiA1cHggc29saWQgI2VmZjRmNztcbiAgLW1vei1vdXRsaW5lLXJhZGl1czogM3B4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cywgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM3ZGM5ZTI7XG4gIG91dGxpbmUtY29sb3I6ICNkY2VlZmM7XG4gIG91dGxpbmUtb2Zmc2V0OiAwO1xufVxuXG5pbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBwYWRkaW5nOiAwIDE4cHg7XG4gIGhlaWdodDogMjlweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLy9jb2xvcjogIzUyNzg4MTtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4ICNlM2YxZjE7XG4gIGJhY2tncm91bmQ6ICNjZGU1ZWY7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICAvL2JvcmRlci1jb2xvcjogI2I0Y2NjZSAjYjNjMGM4ICM5ZWI5YzI7XG4gIC8vYm9yZGVyLXJhZGl1czogMTZweDtcbiAgb3V0bGluZTogMDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2VkZjVmOCwgI2NkZTVlZik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2VkZjVmOCwgI2NkZTVlZik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICNlZGY1ZjgsICNjZGU1ZWYpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZWRmNWY4LCAjY2RlNWVmKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCB3aGl0ZSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IHdoaXRlLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNjZGU1ZWY7XG4gIGJvcmRlci1jb2xvcjogIzllYjljMiAjYjNjMGM4ICNiNGNjY2U7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ubHQtaWU5IGlucHV0W3R5cGU9dGV4dF0sIC5sdC1pZTkgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xuICBsaW5lLWhlaWdodDogMzRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var log = new _app_core__WEBPACK_IMPORTED_MODULE_5__["Logger"]('Login');
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, route, formBuilder, i18nService, authenticationService, toastr) {
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.i18nService = i18nService;
        this.authenticationService = authenticationService;
        this.toastr = toastr;
        this.version = _env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].version;
        this.isLoading = false;
        this.authuser = true;
        this.createForm();
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log(this.loginForm.value);
        if (this.loginForm.value.username == 'admin' && this.loginForm.value.password == "12345") {
            this.isLoading = true;
            this.authenticationService
                .login(this.loginForm.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                _this.loginForm.markAsPristine();
                _this.isLoading = false;
            }))
                .subscribe(function (credentials) {
                log.debug(credentials.username + " successfully logged in");
                _this.route.queryParams.subscribe(function (params) {
                    return _this.router.navigate([params.redirect || '/'], { replaceUrl: true });
                });
            }, function (error) {
                log.debug("Login error: " + error);
                _this.error = error;
            });
            this.authuser = true;
            this.toastr.success('Logged In as: ' + this.loginForm.value.username, 'Login success');
        }
        else {
            this.authuser = false;
        }
    };
    LoginComponent.prototype.setLanguage = function (language) {
        this.i18nService.language = language;
    };
    Object.defineProperty(LoginComponent.prototype, "currentLanguage", {
        get: function () {
            return this.i18nService.language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "languages", {
        get: function () {
            return this.i18nService.supportedLanguages;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            remember: true
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _app_core__WEBPACK_IMPORTED_MODULE_5__["I18nService"],
            _app_core__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginRoutingModule"]],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]],
            bootstrap: [_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule, LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });

/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/shared/loader/loader.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__["LoaderComponent"]; });





/***/ }),

/***/ "./src/app/shared/loader/loader.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/loader/loader.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!isLoading\" class=\"text-xs-center\">\r\n  <i class=\"fas fa-cog fa-spin fa-3x\"></i> <span>{{message}}</span>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/loader/loader.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/loader/loader.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa {\n  vertical-align: middle; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRlci9EOlxcRXhwZXJpYW4vc3JjXFxhcHBcXHNoYXJlZFxcbG9hZGVyXFxsb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBc0IsRUFDdkIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYSB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/loader/loader.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
        this.isLoading = false;
    }
    LoaderComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LoaderComponent.prototype, "isLoading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LoaderComponent.prototype, "message", void 0);
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/shared/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/shared/loader/loader.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/shared/loader/loader.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]],
            exports: [_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__["LoaderComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shell/header/header.component.html":
/*!****************************************************!*\
  !*** ./src/app/shell/header/header.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n<nav class=\"bg-black navbar-expand-lg navbar-dark bg-dark\">\r\n<div class=\"container-fluid\">\r\n<div class=\"row text-center\">\r\n<div class=\"col-md-3\">\r\n     \r\n<img class=\"logo\" src=\"assets/images/experian.jpg\" alt=\"experian\" />\r\n\r\n   \r\n</div>\r\n<div class=\"col-md-6\">\r\n<span class=\"head-text\"><h1 class=\"navbar-brand\" translate>Bureau Inference Tool</h1></span>\r\n</div>\r\n<div class=\"col-md-3\">\r\n<div id=\"navbar-menu\" class=\"collapse navbar-collapse float-xs-none\" [ngbCollapse]=\"menuHidden\">\r\n<div class=\"navbar-nav ml-auto\">      \r\n<div class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n<a id=\"user-dropdown\" class=\"nav-link\" ngbDropdownToggle>\r\n<i class=\"fas fa-user-circle\" id=\"user-circle\"></i>\r\n</a>\r\n<div ngbDropdownMenu aria-labelledby=\"user-dropdown\">\r\n<h6 class=\"dropdown-header\">\r\n<span translate class=\"dropdown-item\">Logged in as</span> <span style=\"padding-left: 45px;\"><b>{{username}}</b></span></h6>\r\n<div class=\"dropdown-divider\"></div>\r\n<button class=\"dropdown-item\" (click)=\"logout()\" translate>Logout</button>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</nav>\r\n</header>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/shell/header/header.component.scss":
/*!****************************************************!*\
  !*** ./src/app/shell/header/header.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * Application global variables.\n */\n.logo {\n  width: 50px;\n  margin-top: 3px; }\n.bg-black {\n  background-color: #fff !important; }\n.collapse:not(.show) {\n  display: block; }\n.nav-link.dropdown-toggle {\n  cursor: pointer; }\n* {\n  margin: 0;\n  padding: 0; }\n.logo {\n  width: 240px;\n  height: 120px; }\n.head-text {\n  text-align: center;\n  vertical-align: middle;\n  line-height: 110px; }\n.navbar-brand {\n  font-size: 35px;\n  color: #000;\n  pointer-events: none; }\n#navbar-menu {\n  height: 55px; }\n#user-circle {\n  font-size: 65px;\n  color: blue;\n  height: 55px;\n  line-height: 160px; }\n.navbar {\n  margin-bottom: 0rem; }\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: .25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvaGVhZGVyL0Q6XFxFeHBlcmlhbi9zcmNcXHRoZW1lXFx0aGVtZS12YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvaGVhZGVyL0Q6XFxFeHBlcmlhbi9zcmNcXGFwcFxcc2hlbGxcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FDQUg7RUFDRSxZQUFXO0VBQ1gsZ0JBQWUsRUFDaEI7QUFDRDtFQUNFLGtDQUNGLEVBQUM7QUFDRDtFQUNJLGVBQWMsRUFDakI7QUFDRDtFQUNFLGdCQUFlLEVBQ2hCO0FBQ0Q7RUFDQSxVQUFTO0VBQ1QsV0FBVSxFQUNUO0FBRUQ7RUFDRSxhQUFZO0VBQ1osY0FDRixFQUFDO0FBRUQ7RUFDQSxtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLG1CQUFrQixFQUNoQjtBQUNGO0VBQ0EsZ0JBQWM7RUFDZCxZQUFVO0VBQ1YscUJBQW9CLEVBQ25CO0FBQ0Q7RUFDQyxhQUFZLEVBQ1o7QUFJRDtFQUNJLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7QUFDRDtFQUNJLG9CQUFtQixFQUN0QjtBQUVEO0VBQ0ksZUFBYztFQUNkLFlBQVc7RUFDWCx1QkFBc0I7RUFDdEIsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2Qsb0JBQW1CO0VBQ25CLG9CQUFtQjtFQUNuQiw4QkFBNkI7RUFDN0IsVUFBUyxFQUNSIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBBcHBsaWNhdGlvbiBnbG9iYWwgdmFyaWFibGVzLlxuICovXG5cbi8vIFNldCBGb250IEF3ZXNvbWUgZm9udCBwYXRoXG4kZmEtZm9udC1wYXRoOiBcIn5AZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS13ZWJmb250cy93ZWJmb250c1wiO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEJvb3RzdHJhcCB2YXJpYWJsZXNcbi8vXG4vLyBPdmVycmlkZSBCb290c3RyYXAgdmFyaWFibGVzIGhlcmUgdG8gc3VpdGUgeW91ciB0aGVtZS5cbi8vIENvcHkgdmFyaWFibGVzIHlvdSB3YW50IHRvIGN1c3RvbWl6ZSBmcm9tIG5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fdmFyaWFibGVzLnNjc3NcblxuLy9cbi8vIENvbG9yIHN5c3RlbVxuLy9cblxuJHdoaXRlOiAjZmZmO1xuJGdyYXktMTAwOiAjZjhmOWZhO1xuJGdyYXktMjAwOiAjZTllY2VmO1xuJGdyYXktMzAwOiAjZGVlMmU2O1xuJGdyYXktNDAwOiAjY2VkNGRhO1xuJGdyYXktNTAwOiAjYWRiNWJkO1xuJGdyYXktNjAwOiAjODY4ZTk2O1xuJGdyYXktNzAwOiAjNDk1MDU3O1xuJGdyYXktODAwOiAjMzQzYTQwO1xuJGdyYXktOTAwOiAjMjEyNTI5O1xuJGJsYWNrOiAjMDAwO1xuXG4kYmx1ZTogIzAwNzNkZDtcbiRpbmRpZ286ICM2NjEwZjI7XG4kcHVycGxlOiAjNmY0MmMxO1xuJHBpbms6ICNlODNlOGM7XG4kcmVkOiAjZGMzNTQ1O1xuJG9yYW5nZTogI2ZkN2UxNDtcbiR5ZWxsb3c6ICNmZmMxMDc7XG4kZ3JlZW46ICMyOGE3NDU7XG4kdGVhbDogIzIwYzk5NztcbiRjeWFuOiAjMTdhMmI4O1xuXG4kdGhlbWUtY29sb3JzOiAoXG4gIHByaW1hcnk6ICRibHVlLFxuICBzZWNvbmRhcnk6ICRncmF5LTYwMCxcbiAgc3VjY2VzczogJGdyZWVuLFxuICBpbmZvOiAkY3lhbixcbiAgd2FybmluZzogJHllbGxvdyxcbiAgZGFuZ2VyOiAkcmVkLFxuICBsaWdodDogJGdyYXktMTAwLFxuICBkYXJrOiAkZ3JheS04MDBcbik7XG5cbi8vIFVzZSBCb290c3RyYXAgZGVmYXVsdHMgZm9yIG90aGVyIHZhcmlhYmxlcywgaW1wb3J0ZWQgaGVyZSBzbyB3ZSBjYW4gYWNjZXNzIGFsbCBhcHAgdmFyaWFibGVzIGluIG9uZSBwbGFjZSB3aGVuIHVzZWRcbi8vIGluIGNvbXBvbmVudHMuXG5AaW1wb3J0IFwifmJvb3RzdHJhcC9zY3NzL19mdW5jdGlvbnNcIjtcbkBpbXBvcnQgXCJ+Ym9vdHN0cmFwL3Njc3MvX3ZhcmlhYmxlc1wiO1xuIiwiQGltcG9ydCBcInNyYy90aGVtZS90aGVtZS12YXJpYWJsZXNcIjtcblxuLmxvZ28ge1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuLmJnLWJsYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50XG59XG4uY29sbGFwc2U6bm90KC5zaG93KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4ubmF2LWxpbmsuZHJvcGRvd24tdG9nZ2xlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuKiB7XG5tYXJnaW46IDA7IFxucGFkZGluZzogMDtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMjQwcHg7XG4gIGhlaWdodDoxMjBweFxufVxuXG4uaGVhZC10ZXh0e1xudGV4dC1hbGlnbjogY2VudGVyO1xudmVydGljYWwtYWxpZ246IG1pZGRsZTtcbmxpbmUtaGVpZ2h0OiAxMTBweDsgIFxuIH1cbi5uYXZiYXItYnJhbmR7XG5mb250LXNpemU6MzVweDtcbmNvbG9yOiMwMDA7XG5wb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbiNuYXZiYXItbWVudXtcbiBoZWlnaHQ6IDU1cHg7IFx0XG59IFxuXG5cblxuI3VzZXItY2lyY2xlIHtcbiAgICBmb250LXNpemU6IDY1cHg7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgaGVpZ2h0OiA1NXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNjBweDtcbn1cbi5uYXZiYXIge1xuICAgIG1hcmdpbi1ib3R0b206IDByZW07XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAuMjVyZW0gMS41cmVtO1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMDtcbiAgICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/shell/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/shell/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, authenticationService, i18nService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.i18nService = i18nService;
        this.menuHidden = true;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.toggleMenu = function () {
        this.menuHidden = !this.menuHidden;
    };
    HeaderComponent.prototype.setLanguage = function (language) {
        this.i18nService.language = language;
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.authenticationService.logout().subscribe(function () { return _this.router.navigate(['/login'], { replaceUrl: true }); });
    };
    Object.defineProperty(HeaderComponent.prototype, "currentLanguage", {
        get: function () {
            return this.i18nService.language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "languages", {
        get: function () {
            return this.i18nService.supportedLanguages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HeaderComponent.prototype, "username", {
        get: function () {
            var credentials = this.authenticationService.credentials;
            return credentials ? credentials.username : null;
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shell/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shell/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _app_core__WEBPACK_IMPORTED_MODULE_2__["I18nService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shell/shell.component.html":
/*!********************************************!*\
  !*** ./src/app/shell/shell.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/shell/shell.component.scss":
/*!********************************************!*\
  !*** ./src/app/shell/shell.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3NoZWxsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shell/shell.component.ts":
/*!******************************************!*\
  !*** ./src/app/shell/shell.component.ts ***!
  \******************************************/
/*! exports provided: ShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellComponent", function() { return ShellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShellComponent = /** @class */ (function () {
    function ShellComponent() {
    }
    ShellComponent.prototype.ngOnInit = function () { };
    ShellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shell',
            template: __webpack_require__(/*! ./shell.component.html */ "./src/app/shell/shell.component.html"),
            styles: [__webpack_require__(/*! ./shell.component.scss */ "./src/app/shell/shell.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ShellComponent);
    return ShellComponent;
}());



/***/ }),

/***/ "./src/app/shell/shell.module.ts":
/*!***************************************!*\
  !*** ./src/app/shell/shell.module.ts ***!
  \***************************************/
/*! exports provided: ShellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellModule", function() { return ShellModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shell.component */ "./src/app/shell/shell.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/shell/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ShellModule = /** @class */ (function () {
    function ShellModule() {
    }
    ShellModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _shell_component__WEBPACK_IMPORTED_MODULE_5__["ShellComponent"]]
        })
    ], ShellModule);
    return ShellModule;
}());



/***/ }),

/***/ "./src/app/shell/shell.service.ts":
/*!****************************************!*\
  !*** ./src/app/shell/shell.service.ts ***!
  \****************************************/
/*! exports provided: Shell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shell", function() { return Shell; });
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shell.component */ "./src/app/shell/shell.component.ts");


/**
 * Provides helper methods to create routes.
 */
var Shell = /** @class */ (function () {
    function Shell() {
    }
    /**
     * Creates routes using the shell component and authentication.
     * @param routes The routes to add.
     * @return The new route using shell as the base.
     */
    Shell.childRoutes = function (routes) {
        return {
            path: '',
            component: _shell_component__WEBPACK_IMPORTED_MODULE_1__["ShellComponent"],
            children: routes,
            canActivate: [_app_core__WEBPACK_IMPORTED_MODULE_0__["AuthenticationGuard"]],
            // Reuse ShellComponent instance when navigating between child views
            data: { reuse: true }
        };
    };
    return Shell;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// `.env.ts` is generated by the `npm run env` command
//import env from './.env';
var environment = {
    production: false,
    version: 1 + '-dev',
    serverUrl: '/api/',
    defaultLanguage: 'en-US',
    supportedLanguages: ['en-US', 'fr-FR']
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */




if (_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/translations/en-US.json":
/*!*************************************!*\
  !*** ./src/translations/en-US.json ***!
  \*************************************/
/*! exports provided: APP_NAME, About, Hello world !, Home, Logged in as, Login, Logout, Password, Password is required, Username, Username is required, Username or password incorrect., Remember me, Version, default */
/***/ (function(module) {

module.exports = {"APP_NAME":"Test and Execute","About":"About","Hello world !":"Hello world !","Home":"Home","Logged in as":"Logged in as","Login":"Login","Logout":"Logout","Password":"Password","Password is required":"Password is required","Username":"Username","Username is required":"Username is required","Username or password incorrect.":"Username or password incorrect.","Remember me":"Remember me","Version":"Version"};

/***/ }),

/***/ "./src/translations/fr-FR.json":
/*!*************************************!*\
  !*** ./src/translations/fr-FR.json ***!
  \*************************************/
/*! exports provided: APP_NAME, About, Hello world !, Home, Logged in as, Login, Logout, Password, Password is required, Username, Username is required, Username or password incorrect., Remember me, Version, default */
/***/ (function(module) {

module.exports = {"APP_NAME":"K7","About":"A propos","Hello world !":"Bonjour le monde !","Home":"Accueil","Logged in as":"Connecté en tant que","Login":"Connexion","Logout":"Déconnexion","Password":"Mot de passe","Password is required":"Mot de passe requis","Username":"Identifiant","Username is required":"Identifiant requis","Username or password incorrect.":"Identifiant ou mot de passe incorrect.","Remember me":"Rester connecté","Version":"Version"};

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Experian\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map