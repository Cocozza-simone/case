import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class FetchInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Aggiungi qui la logica per modificare la richiesta in base alle tue esigenze
    const fetchReq = req.clone({
      // Esempio: aggiungi un'intestazione personalizzata
      headers: req.headers.set('X-Custom-Interceptor', 'FetchInterceptor')
    });

    // Inoltra la richiesta modificata all'handler HTTP successivo
    return next.handle(fetchReq);
  }
}
