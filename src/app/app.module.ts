import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
@NgModule({
  declarations: [
    // Rimuovi AppComponent dalle dichiarazioni
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
     
  ],
  providers: [],
})
export class AppModule {}

// Avvia l'applicazione utilizzando la funzione bootstrapApplication



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
