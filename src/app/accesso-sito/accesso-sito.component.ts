import { Component } from '@angular/core';
import { EntraComponent } from '../entra/entra.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
export interface Credenziali {
  id: number;
  email: string;
  password: string;
  privilegi: string; // Aggiungi campo per i privilegi
}


@Component({
  selector: 'app-accesso-sito',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './accesso-sito.component.html',
  styleUrl: './accesso-sito.component.css',
})
export class AccessoSitoComponent {

  credenziali: Credenziali[] = [];
  nuovoEmail: string = '';
  nuovaPassword: string = '';
  nuoviPrivilegi: string = '';

  aggiungiCredenziale() {
    const nuovaCredenziale: Credenziali = {
      id: this.credenziali.length + 1,
      email: this.nuovoEmail,
      password: this.nuovaPassword,
      privilegi: this.nuoviPrivilegi,
    };
    this.credenziali.push(nuovaCredenziale);
    this.nuovoEmail = '';
    this.nuovaPassword = '';
    this.nuoviPrivilegi = '';
  }

  eliminaCredenziale(id: number) {
    this.credenziali = this.credenziali.filter(
      (credenziale) => credenziale.id !== id
    );
  }

  modificaCredenziale(
    id: number,
    nuovoEmail: string,
    nuovaPassword: string,
    nuoviPrivilegi: string
  ) {
    this.credenziali = this.credenziali.map((credenziale) => {
      if (credenziale.id === id) {
        return {
          ...credenziale,
          email: nuovoEmail,
          password: nuovaPassword,
          privilegi: nuoviPrivilegi,
        };
      }
      return credenziale;
    });
  }
}
