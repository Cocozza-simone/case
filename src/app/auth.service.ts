import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app'; // Aggiornato per le importazioni di Firebase
import 'firebase/compat/auth'; // Assicurati di importare anche auth se necessario
import { HttpClient } from '@angular/common/http';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl = environment.apiUrl; // Utilizza l'URL dell'API dall'ambiente

  private userSubject = new BehaviorSubject<firebase.User | null>(null); // Aggiornato per l'uso di firebase.User
  user$ = this.userSubject.asObservable();

  constructor(private afAuth: AngularFireAuth, private http: HttpClient) {}

  loginWithGoogle(): Promise<any> {
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  login(email: string, password: string): Promise<any> {
    // Implementa la logica effettiva per il login con il backend
    // In questa versione, restituisce una promessa fittizia
    return new Promise((resolve, reject) => {
      if (email === 'example@example.com' && password === 'password') {
        resolve({ success: true });
      } else {
        reject({ success: false, message: 'Credenziali non valide' });
      }
    });
  }

  logout(): Observable<any> {
    localStorage.removeItem('userToken');
    return this.http.post<any>(`${this.apiUrl}/logout`, {}).pipe(
      catchError(error => {
        console.error('Errore durante il logout:', error);
        return throwError('Errore durante il logout');
      })
    );
  }


  register(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user).pipe(
      catchError(error => {
        console.error('Errore durante la registrazione:', error);
        return throwError(error.error.message || 'Errore durante la registrazione');
      })
    );
  }

  resetPassword(email: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/reset-password`, { email }).pipe(
      catchError(error => {
        console.error('Errore durante il reset della password:', error);
        return throwError(error.error.message || 'Errore durante il reset della password');
      })
    );
  }

  sendRecoveryEmail(email: string): Observable<any> {
    // Simula una chiamata API per inviare un'email di recupero
    const url = `${this.apiUrl}/send-recovery-email`;
    return this.http.post(url, { email }).pipe(
      catchError(this.handleError<any>('sendRecoveryEmail'))
    );
  }

  confirmCode(code: string): Observable<any> {
    // Simula una chiamata API per confermare il codice di recupero ricevuto via email
    const url = `${this.apiUrl}/confirm-recovery-code`;
    return this.http.post(url, { code }).pipe(
      catchError(this.handleError<any>('confirmCode'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed:`, error);
      return throwError(result as T);
    };
  }
}
