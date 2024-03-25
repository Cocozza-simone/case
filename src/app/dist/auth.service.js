"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var app_1 = require("firebase/compat/app"); // Aggiornato per le importazioni di Firebase
require("firebase/compat/auth"); // Assicurati di importare anche auth se necessario
var environment_1 = require("./environments/environment");
var AuthService = /** @class */ (function () {
    function AuthService(afAuth, http) {
        this.afAuth = afAuth;
        this.http = http;
        this.apiUrl = environment_1.environment.apiUrl; // Utilizza l'URL dell'API dall'ambiente
        this.userSubject = new rxjs_1.BehaviorSubject(null); // Aggiornato per l'uso di firebase.User
        this.user$ = this.userSubject.asObservable();
    }
    AuthService.prototype.loginWithGoogle = function () {
        return this.afAuth.signInWithPopup(new app_1["default"].auth.GoogleAuthProvider());
    };
    AuthService.prototype.login = function (email, password) {
        // Implementa la logica effettiva per il login con il backend
        // In questa versione, restituisce una promessa fittizia
        return new Promise(function (resolve, reject) {
            if (email === 'example@example.com' && password === 'password') {
                resolve({ success: true });
            }
            else {
                reject({ success: false, message: 'Credenziali non valide' });
            }
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('userToken');
        return this.http.post(this.apiUrl + "/logout", {}).pipe(operators_1.catchError(function (error) {
            console.error('Errore durante il logout:', error);
            return rxjs_1.throwError('Errore durante il logout');
        }));
    };
    AuthService.prototype.register = function (user) {
        return this.http.post(this.apiUrl + "/register", user).pipe(operators_1.catchError(function (error) {
            console.error('Errore durante la registrazione:', error);
            return rxjs_1.throwError(error.error.message || 'Errore durante la registrazione');
        }));
    };
    AuthService.prototype.resetPassword = function (email) {
        return this.http.post(this.apiUrl + "/reset-password", { email: email }).pipe(operators_1.catchError(function (error) {
            console.error('Errore durante il reset della password:', error);
            return rxjs_1.throwError(error.error.message || 'Errore durante il reset della password');
        }));
    };
    AuthService.prototype.sendRecoveryEmail = function (email) {
        // Simula una chiamata API per inviare un'email di recupero
        var url = this.apiUrl + "/send-recovery-email";
        return this.http.post(url, { email: email }).pipe(operators_1.catchError(this.handleError('sendRecoveryEmail')));
    };
    AuthService.prototype.confirmCode = function (code) {
        // Simula una chiamata API per confermare il codice di recupero ricevuto via email
        var url = this.apiUrl + "/confirm-recovery-code";
        return this.http.post(url, { code: code }).pipe(operators_1.catchError(this.handleError('confirmCode')));
    };
    AuthService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(operation + " failed:", error);
            return rxjs_1.throwError(result);
        };
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
