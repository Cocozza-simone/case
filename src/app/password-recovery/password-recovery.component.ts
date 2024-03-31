import { Component, Injectable, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-password-recovery',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],

  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss'], // Corretto in styleUrls in forma plurale
})
export class PasswordRecoveryComponent implements OnInit {
  step: string = 'email'; // Inizialmente mostra il passo di inserimento dell'email
  recoveryForm: FormGroup;
  codeConfirmationForm: FormGroup;
  newPasswordForm: FormGroup;
  private userSubject = new BehaviorSubject<boolean>(false); // Simulazione utente autenticato
  user$ = this.userSubject.asObservable();
  passwordMatchValidator: any;

  constructor(private formBuilder: FormBuilder) {
    this.recoveryForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });

    this.codeConfirmationForm = this.formBuilder.group({
      code: ['', Validators.required],
    });

    this.newPasswordForm = this.formBuilder.group(
      {
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  }
  ngOnInit(): void {
    // Inizializzazione dei form
    this.recoveryForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });

    this.codeConfirmationForm = this.formBuilder.group({
      code: ['', Validators.required],
    });

    this.newPasswordForm = this.formBuilder.group(
      {
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  sendRecoveryEmail(email: string): Observable<any> {
    // Simula l'invio dell'email di recupero
    console.log('Simulazione: Email di recupero inviata a', email);
    return of(true); // Simula una risposta positiva
  }

  confirmCode(code: string): Observable<any> {
    // Simula la conferma del codice di recupero
    console.log('Simulazione: Codice di recupero confermato');
    return of(true); // Simula una risposta positiva
  }

  resetPassword(password: string): Observable<any> {
    // Simula il reset della password
    console.log('Simulazione: Password resettata con successo');
    return of(true); // Simula una risposta positiva
  }

  login(email: string, password: string): Observable<any> {
    // Simula il login con successo se le credenziali corrispondono
    if (email === 'example@example.com' && password === 'password') {
      this.userSubject.next(true); // Simula l'utente autenticato
      return of({ success: true });
    } else {
      return throwError({ success: false, message: 'Credenziali non valide' });
    }
  }

  // Questo metodo può essere utilizzato per simulare il logout
  logout(): Observable<any> {
    this.userSubject.next(false); // Simula il logout
    return of(true); // Simula una risposta positiva
  }
  createNewPassword() {}
}
