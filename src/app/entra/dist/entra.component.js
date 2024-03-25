"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EntraComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var button_1 = require("@angular/material/button");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var password_recovery_component_1 = require("../password-recovery/password-recovery.component");
var http_1 = require("@angular/common/http");
var EntraComponent = /** @class */ (function () {
    function EntraComponent(ServiceEntra, formBuilder, dialog) {
        this.ServiceEntra = ServiceEntra;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.loginForm = new forms_1.FormGroup({});
        this.registrationForm = new forms_1.FormGroup({});
        this.showLoginForm = true;
    }
    EntraComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', forms_1.Validators.required]
        });
        this.registrationForm = this.formBuilder.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]],
            confirmPassword: ['', forms_1.Validators.required]
        }, { validator: this.passwordMatchValidator });
    };
    EntraComponent.prototype.onLoginSubmit = function () {
        if (this.loginForm.valid) {
            // Implementa la logica di autenticazione
        }
        else {
            console.error('Form di login non valido. Controlla i campi.');
        }
    };
    EntraComponent.prototype.onRegistrationSubmit = function () {
        if (this.registrationForm.valid) {
            // Implementa la logica di registrazione
        }
        else {
            console.error('Form di registrazione non valido. Controlla i campi.');
        }
    };
    EntraComponent.prototype.passwordMatchValidator = function (formGroup) {
        var passwordControl = formGroup.get('password');
        var confirmPasswordControl = formGroup.get('confirmPassword');
        if (passwordControl &&
            confirmPasswordControl &&
            passwordControl.value === confirmPasswordControl.value) {
            confirmPasswordControl.setErrors(null);
        }
        else if (confirmPasswordControl) {
            confirmPasswordControl.setErrors({ passwordMismatch: true });
        }
    };
    EntraComponent.prototype.onEnterButtonClick = function () {
        // Implementa la logica per il pulsante "Entra"
    };
    EntraComponent.prototype.toggleLoginForm = function () {
        this.showLoginForm = !this.showLoginForm;
    };
    EntraComponent.prototype.openPasswordRecoveryDialog = function () {
        var _this = this;
        // Apri il dialogo di recupero password
        var dialogRef = this.dialog.open(password_recovery_component_1.PasswordRecoveryComponent, {
            width: '450px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('Dialogo password recovery chiuso');
            // Chiudi il dialogo di login dopo la chiusura del dialogo di recupero password
            _this.toggleLoginForm();
        });
    };
    EntraComponent = __decorate([
        core_1.Component({
            selector: 'app-entra',
            standalone: true,
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                input_1.MatInputModule,
                button_1.MatButtonModule,
                form_field_1.MatFormFieldModule,
                http_1.HttpClientModule,
            ],
            templateUrl: './entra.component.html',
            styleUrl: './entra.component.scss'
        })
    ], EntraComponent);
    return EntraComponent;
}());
exports.EntraComponent = EntraComponent;
