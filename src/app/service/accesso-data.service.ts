import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credenziali } from '../accesso-sito/accesso-sito.component';

@Injectable({
  providedIn: 'root'
})
export class AccessoDataService {

  constructor(private http: HttpClient) { }

  // Metodo per ottenere le credenziali dal database
  getCredenziali(): Observable<Credenziali[]> {
    return this.http.get<Credenziali[]>('/api/credenziali');
  }

  // Metodo per aggiungere una nuova credenziale nel database
  aggiungiCredenziale(credenziale: Credenziali): Observable<any> {
    return this.http.post('/api/credenziali', credenziale);
  }

  // Metodo per eliminare una credenziale dal database
  eliminaCredenziale(id: number): Observable<any> {
    return this.http.delete(`/api/credenziali/${id}`);
  }

  // Metodo per modificare una credenziale nel database
  modificaCredenziale(credenziale: Credenziali): Observable<any> {
    return this.http.put(`/api/credenziali/${credenziale.id}`, credenziale);
  }
}
