import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder,FormGroup,Validators,ReactiveFormsModule,} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { PasswordRecoveryComponent } from '../password-recovery/password-recovery.component';
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
  loginForm: FormGroup;
  registrationForm: FormGroup;
  showLoginForm: boolean = true;

 
  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit(): void {}
  
  onLoginSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      // Simula l'autenticazione con credenziali fisse
      if (email === 'admin@example.com' && password === 'password') {
        console.log('Autenticazione riuscita');
        // Esegui le azioni necessarie dopo l'autenticazione, come reindirizzamento a una pagina protetta
      } else {
        console.error('Credenziali non valide. Riprova.');
      }
    } else {
      // Ottieni tutti i controlli del form che sono invalidi
      Object.keys(this.loginForm.controls).forEach(field => {
        const control = this.loginForm.get(field);
        // Se il controllo è invalido, ottieni il messaggio di errore associato e stampalo nella console
        if (control && !control.valid) {
          const errors = control.errors || {};
          console.error(`Campo ${field}:`);
          Object.keys(errors).forEach(keyError => {
            console.error(`- ${keyError}: ${this.getErrorMessage(keyError)}`);
          });
        }
      });
    }
  }

  getErrorMessage(errorCode: string) {
    const errorMessages: { [key: string]: string } = {
      required: 'Il campo è obbligatorio.',
      email: 'Inserisci un indirizzo email valido.',
      minlength: 'Il campo deve contenere almeno 6 caratteri.'
      // Aggiungi altri messaggi di errore se necessario
    };
    return errorMessages[errorCode] || 'Errore sconosciuto';
  }

  onRegistrationSubmit() {
    if (this.registrationForm.valid) {
      // Implementa la logica di registrazione
      console.log('Registrazione completata con successo');
      // Esegui le azioni necessarie dopo la registrazione, come reindirizzamento a una pagina protetta
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
    // Chiudi il dialogo di login prima di aprirne uno nuovo per il recupero password
    if (this.dialog.openDialogs.length > 0) {
      this.dialog.closeAll(); // Chiudi tutti i dialoghi aperti
    }
  
    // Apri il dialogo di recupero password
    const dialogRef = this.dialog.open(PasswordRecoveryComponent, {
      width: '450px',
      data: {},
    });
  
    // Gestisci l'evento dopo la chiusura del dialogo
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialogo password recovery chiuso');
      // Chiudi il dialogo di login dopo la chiusura del dialogo di recupero password
      this.toggleLoginForm();
    });
  }
  
}  
