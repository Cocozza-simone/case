"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var entra_component_1 = require("./entra/entra.component");
var about_component_1 = require("./about/about.component");
var accesso_sito_component_1 = require("./accesso-sito/accesso-sito.component");
var AppComponent = /** @class */ (function () {
    function AppComponent(dialog) {
        this.dialog = dialog;
    }
    AppComponent.prototype.title = function (title) {
        throw new Error('Method not implemented.');
    };
    AppComponent.prototype.openEntraDialog = function () {
        var dialogRef = this.dialog.open(entra_component_1.EntraComponent, {
            width: 'auto',
            panelClass: 'login-container' // Aggiungi una classe per rimuovere il bordo
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('Il dialogo è stato chiuso', result);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            standalone: true,
            imports: [common_1.CommonModule, router_1.RouterLinkActive, router_1.RouterLink, router_1.RouterOutlet, home_component_1.HomeComponent, about_component_1.AboutComponent, entra_component_1.EntraComponent, accesso_sito_component_1.AccessoSitoComponent,],
            templateUrl: './app.component.html',
            styleUrl: './app.component.scss'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
