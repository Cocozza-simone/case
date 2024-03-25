import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ReactiveFormsModule,  HttpClientModule ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  formData = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Inizializzazione, se necessaria
  }

  onSubmit(): void {
    // Invia i dati del modulo al server
    this.http.post('URL_DEL_TUO_ENDPOINT', this.formData).subscribe(response => {
      console.log('Risposta dal server:', response);
      // Effettua altre azioni in base alla risposta del server, ad esempio mostrare un messaggio di conferma
    }, error => {
      console.error('Errore durante l\'invio del modulo:', error);
      // Gestisci l'errore, ad esempio mostrando un messaggio di errore all'utente
    });
  }

}