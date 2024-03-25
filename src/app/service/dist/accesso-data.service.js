"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccessoDataService = void 0;
var core_1 = require("@angular/core");
var AccessoDataService = /** @class */ (function () {
    function AccessoDataService(http) {
        this.http = http;
    }
    // Metodo per ottenere le credenziali dal database
    AccessoDataService.prototype.getCredenziali = function () {
        return this.http.get('/api/credenziali');
    };
    // Metodo per aggiungere una nuova credenziale nel database
    AccessoDataService.prototype.aggiungiCredenziale = function (credenziale) {
        return this.http.post('/api/credenziali', credenziale);
    };
    // Metodo per eliminare una credenziale dal database
    AccessoDataService.prototype.eliminaCredenziale = function (id) {
        return this.http["delete"]("/api/credenziali/" + id);
    };
    // Metodo per modificare una credenziale nel database
    AccessoDataService.prototype.modificaCredenziale = function (credenziale) {
        return this.http.put("/api/credenziali/" + credenziale.id, credenziale);
    };
    AccessoDataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AccessoDataService);
    return AccessoDataService;
}());
exports.AccessoDataService = AccessoDataService;
