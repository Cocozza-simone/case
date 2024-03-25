
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'; // Import the authentication service from the correct file path
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule from the correct package
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule from the correct package
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule from the correct package



@Component({
  selector: 'app-password-recovery',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatInputModule, MatButtonModule, MatFormFieldModule],
  
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css'] // Corretto in styleUrls in forma plurale
})
export class PasswordRecoveryComponent {
  recoveryForm: FormGroup;
  codeConfirmationForm: FormGroup;
  newPasswordForm: FormGroup;
  step: 'email' | 'code' | 'password' = 'email';
  emailSent: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.recoveryForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.codeConfirmationForm = this.formBuilder.group({
      code: ['', Validators.required]
    });

    this.newPasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  sendRecoveryEmail() {
    const email = this.recoveryForm.get('email')?.value;
    if (email) {
      this.authService.sendRecoveryEmail(email).subscribe(
        () => {
          this.emailSent = true;
          this.step = 'code';
        },
        (error) => {
          console.error('Errore durante l\'invio dell\'email di recupero:', error);
        }
      );
    }
  }

  confirmCode() {
    const code = this.codeConfirmationForm.get('code')?.value;
    if (code) {
      this.authService.confirmCode(code).subscribe(
        () => {
          this.step = 'password';
        },
        (error) => {
          console.error('Codice di conferma non valido:', error);
        }
      );
    }
  }

  createNewPassword() {
    const password = this.newPasswordForm.get('password')?.value;
    if (password) {
      this.authService.resetPassword(password).subscribe(
        () => {
          console.log('Password resettata con successo.');
        },
        (error) => {
          console.error('Errore durante il reset della password:', error);
        }
      );
    }
  }

  passwordMatchValidator(formGroup: FormGroup): void {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    }
  }
}
