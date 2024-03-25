import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PasswordRecoveryComponent } from '../password-recovery/password-recovery.component';
import { HttpClientModule } from '@angular/common/http';

import { EntraService } from '../service/entra.service';

@Component({
  selector: 'app-entra',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    HttpClientModule,
  ],
  templateUrl: './entra.component.html',
  styleUrl: './entra.component.scss',
})
export class EntraComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  registrationForm: FormGroup = new FormGroup({});
  showLoginForm: boolean = true;

  constructor(
    private ServiceEntra: EntraService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.registrationForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      // Implementa la logica di autenticazione
    } else {
      console.error('Form di login non valido. Controlla i campi.');
    }
  }

  onRegistrationSubmit() {
    if (this.registrationForm.valid) {
      // Implementa la logica di registrazione
    } else {
      console.error('Form di registrazione non valido. Controlla i campi.');
    }
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('confirmPassword');

    if (
      passwordControl &&
      confirmPasswordControl &&
      passwordControl.value === confirmPasswordControl.value
    ) {
      confirmPasswordControl.setErrors(null);
    } else if (confirmPasswordControl) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
    }
  }

  onEnterButtonClick() {
    // Implementa la logica per il pulsante "Entra"
  }

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
  }

  openPasswordRecoveryDialog() {
    // Apri il dialogo di recupero password
    const dialogRef = this.dialog.open(PasswordRecoveryComponent, {
      width: '450px', // Imposta la larghezza della finestra modale
      data: {}, // Eventuali dati da passare al componente PasswordRecoveryComponent
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialogo password recovery chiuso');
      // Chiudi il dialogo di login dopo la chiusura del dialogo di recupero password
      this.toggleLoginForm();
    });
  }
}
