"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccessoSitoComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var AccessoSitoComponent = /** @class */ (function () {
    function AccessoSitoComponent() {
        this.credenziali = [];
        this.nuovoEmail = '';
        this.nuovaPassword = '';
        this.nuoviPrivilegi = '';
    }
    AccessoSitoComponent.prototype.aggiungiCredenziale = function () {
        var nuovaCredenziale = {
            id: this.credenziali.length + 1,
            email: this.nuovoEmail,
            password: this.nuovaPassword,
            privilegi: this.nuoviPrivilegi
        };
        this.credenziali.push(nuovaCredenziale);
        this.nuovoEmail = '';
        this.nuovaPassword = '';
        this.nuoviPrivilegi = '';
    };
    AccessoSitoComponent.prototype.eliminaCredenziale = function (id) {
        this.credenziali = this.credenziali.filter(function (credenziale) { return credenziale.id !== id; });
    };
    AccessoSitoComponent.prototype.modificaCredenziale = function (id, nuovoEmail, nuovaPassword, nuoviPrivilegi) {
        this.credenziali = this.credenziali.map(function (credenziale) {
            if (credenziale.id === id) {
                return __assign(__assign({}, credenziale), { email: nuovoEmail, password: nuovaPassword, privilegi: nuoviPrivilegi });
            }
            return credenziale;
        });
    };
    AccessoSitoComponent = __decorate([
        core_1.Component({
            selector: 'app-accesso-sito',
            standalone: true,
            imports: [common_1.CommonModule, forms_1.ReactiveFormsModule],
            templateUrl: './accesso-sito.component.html',
            styleUrl: './accesso-sito.component.css'
        })
    ], AccessoSitoComponent);
    return AccessoSitoComponent;
}());
exports.AccessoSitoComponent = AccessoSitoComponent;
