import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  http = inject(HttpClient)
  domain:string = "https://model-production-0858.up.railway.app"
  domain1:string = "http://localhost:8000"

  getResponse(body: any): Observable<any>{
    // const headers = new HttpHeaders().set('Authorization', `${token}`).set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.domain}/get_response/`,body, {observe: 'response' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError({ status: error.status, message: error.error }); // Forward the error to the caller
        })
      );
  }
}
