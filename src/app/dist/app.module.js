"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var compat_1 = require("@angular/fire/compat");
var environment_1 = require("./environments/environment");
var firestore_1 = require("@angular/fire/compat/firestore");
var auth_1 = require("@angular/fire/compat/auth");
var http_1 = require("@angular/common/http");
var button_1 = require("@angular/material/button");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var common_1 = require("@angular/common");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
            // Rimuovi AppComponent dalle dichiarazioni
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                common_1.CommonModule,
                compat_1.AngularFireModule.initializeApp(environment_1.environment.firebaseConfig),
                firestore_1.AngularFirestoreModule,
                auth_1.AngularFireAuthModule,
                form_field_1.MatFormFieldModule,
                button_1.MatButtonModule,
                input_1.MatInputModule,
            ],
            providers: []
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
// Avvia l'applicazione utilizzando la funzione bootstrapApplication
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule)["catch"](function (err) { return console.error(err); });
