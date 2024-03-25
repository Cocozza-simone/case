"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AboutComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var AboutComponent = /** @class */ (function () {
    function AboutComponent(http) {
        this.http = http;
        this.formData = {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        };
    }
    AboutComponent.prototype.ngOnInit = function () {
        // Inizializzazione, se necessaria
    };
    AboutComponent.prototype.onSubmit = function () {
        // Invia i dati del modulo al server
        this.http.post('URL_DEL_TUO_ENDPOINT', this.formData).subscribe(function (response) {
            console.log('Risposta dal server:', response);
            // Effettua altre azioni in base alla risposta del server, ad esempio mostrare un messaggio di conferma
        }, function (error) {
            console.error('Errore durante l\'invio del modulo:', error);
            // Gestisci l'errore, ad esempio mostrando un messaggio di errore all'utente
        });
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'app-about',
            standalone: true,
            imports: [forms_1.ReactiveFormsModule, http_1.HttpClientModule],
            templateUrl: './about.component.html',
            styleUrl: './about.component.scss'
        })
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
