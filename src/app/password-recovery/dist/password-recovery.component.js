"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PasswordRecoveryComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var button_1 = require("@angular/material/button");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var PasswordRecoveryComponent = /** @class */ (function () {
    function PasswordRecoveryComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.step = 'email'; // Inizialmente mostra il passo di inserimento dell'email
        this.userSubject = new rxjs_1.BehaviorSubject(false); // Simulazione utente autenticato
        this.user$ = this.userSubject.asObservable();
        this.recoveryForm = this.formBuilder.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]]
        });
        this.codeConfirmationForm = this.formBuilder.group({
            code: ['', forms_1.Validators.required]
        });
        this.newPasswordForm = this.formBuilder.group({
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]],
            confirmPassword: ['', forms_1.Validators.required]
        }, { validator: this.passwordMatchValidator });
    }
    PasswordRecoveryComponent.prototype.ngOnInit = function () {
        // Inizializzazione dei form
        this.recoveryForm = this.formBuilder.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]]
        });
        this.codeConfirmationForm = this.formBuilder.group({
            code: ['', forms_1.Validators.required]
        });
        this.newPasswordForm = this.formBuilder.group({
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]],
            confirmPassword: ['', forms_1.Validators.required]
        }, { validator: this.passwordMatchValidator });
    };
    PasswordRecoveryComponent.prototype.sendRecoveryEmail = function (email) {
        // Simula l'invio dell'email di recupero
        console.log('Simulazione: Email di recupero inviata a', email);
        return rxjs_1.of(true); // Simula una risposta positiva
    };
    PasswordRecoveryComponent.prototype.confirmCode = function (code) {
        // Simula la conferma del codice di recupero
        console.log('Simulazione: Codice di recupero confermato');
        return rxjs_1.of(true); // Simula una risposta positiva
    };
    PasswordRecoveryComponent.prototype.resetPassword = function (password) {
        // Simula il reset della password
        console.log('Simulazione: Password resettata con successo');
        return rxjs_1.of(true); // Simula una risposta positiva
    };
    PasswordRecoveryComponent.prototype.login = function (email, password) {
        // Simula il login con successo se le credenziali corrispondono
        if (email === 'example@example.com' && password === 'password') {
            this.userSubject.next(true); // Simula l'utente autenticato
            return rxjs_1.of({ success: true });
        }
        else {
            return rxjs_1.throwError({ success: false, message: 'Credenziali non valide' });
        }
    };
    // Questo metodo può essere utilizzato per simulare il logout
    PasswordRecoveryComponent.prototype.logout = function () {
        this.userSubject.next(false); // Simula il logout
        return rxjs_1.of(true); // Simula una risposta positiva
    };
    PasswordRecoveryComponent.prototype.createNewPassword = function () { };
    PasswordRecoveryComponent = __decorate([
        core_1.Component({
            selector: 'app-password-recovery',
            standalone: true,
            imports: [
                forms_1.ReactiveFormsModule,
                common_1.CommonModule,
                input_1.MatInputModule,
                button_1.MatButtonModule,
                form_field_1.MatFormFieldModule,
            ],
            templateUrl: './password-recovery.component.html',
            styleUrls: ['./password-recovery.component.scss']
        })
    ], PasswordRecoveryComponent);
    return PasswordRecoveryComponent;
}());
exports.PasswordRecoveryComponent = PasswordRecoveryComponent;
