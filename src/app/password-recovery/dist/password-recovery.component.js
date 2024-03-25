"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PasswordRecoveryComponent = void 0;
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var forms_2 = require("@angular/forms");
var common_1 = require("@angular/common");
var input_1 = require("@angular/material/input"); // Import MatInputModule from the correct package
var button_1 = require("@angular/material/button"); // Import MatButtonModule from the correct package
var form_field_1 = require("@angular/material/form-field"); // Import MatFormFieldModule from the correct package
var PasswordRecoveryComponent = /** @class */ (function () {
    function PasswordRecoveryComponent(formBuilder, authService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.step = 'email';
        this.emailSent = false;
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
    PasswordRecoveryComponent.prototype.sendRecoveryEmail = function () {
        var _this = this;
        var _a;
        var email = (_a = this.recoveryForm.get('email')) === null || _a === void 0 ? void 0 : _a.value;
        if (email) {
            this.authService.sendRecoveryEmail(email).subscribe(function () {
                _this.emailSent = true;
                _this.step = 'code';
            }, function (error) {
                console.error('Errore durante l\'invio dell\'email di recupero:', error);
            });
        }
    };
    PasswordRecoveryComponent.prototype.confirmCode = function () {
        var _this = this;
        var _a;
        var code = (_a = this.codeConfirmationForm.get('code')) === null || _a === void 0 ? void 0 : _a.value;
        if (code) {
            this.authService.confirmCode(code).subscribe(function () {
                _this.step = 'password';
            }, function (error) {
                console.error('Codice di conferma non valido:', error);
            });
        }
    };
    PasswordRecoveryComponent.prototype.createNewPassword = function () {
        var _a;
        var password = (_a = this.newPasswordForm.get('password')) === null || _a === void 0 ? void 0 : _a.value;
        if (password) {
            this.authService.resetPassword(password).subscribe(function () {
                console.log('Password resettata con successo.');
            }, function (error) {
                console.error('Errore durante il reset della password:', error);
            });
        }
    };
    PasswordRecoveryComponent.prototype.passwordMatchValidator = function (formGroup) {
        var _a, _b, _c;
        var password = (_a = formGroup.get('password')) === null || _a === void 0 ? void 0 : _a.value;
        var confirmPassword = (_b = formGroup.get('confirmPassword')) === null || _b === void 0 ? void 0 : _b.value;
        if (password !== confirmPassword) {
            (_c = formGroup.get('confirmPassword')) === null || _c === void 0 ? void 0 : _c.setErrors({ passwordMismatch: true });
        }
    };
    PasswordRecoveryComponent = __decorate([
        core_1.Component({
            selector: 'app-password-recovery',
            standalone: true,
            imports: [forms_2.ReactiveFormsModule, common_1.CommonModule, input_1.MatInputModule, button_1.MatButtonModule, form_field_1.MatFormFieldModule],
            templateUrl: './password-recovery.component.html',
            styleUrls: ['./password-recovery.component.css'] // Corretto in styleUrls in forma plurale
        })
    ], PasswordRecoveryComponent);
    return PasswordRecoveryComponent;
}());
exports.PasswordRecoveryComponent = PasswordRecoveryComponent;
