import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  http = inject(HttpClient)
  domain:string = "https://model-production-0858.up.railway.app/get_response/"
  domain1:string = "https://localhost:7275"

  getResponse(body: any): Observable<any>{
    const token = JSON.parse(localStorage.getItem('myUser') || "{}").token
    const headers = new HttpHeaders().set('Authorization', `${token}`).set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.domain1}/api/Classroom/chat-box/request`,body, {headers,observe: 'response' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError({ status: error.status, message: error.error }); // Forward the error to the caller
        })
      );
  }

  getAllChats(body: any): Observable<any>{
    const token = JSON.parse(localStorage.getItem('myUser') || "{}").token
    const headers = new HttpHeaders().set('Authorization', `${token}`).set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.domain1}/api/Classroom/chat-box/request-messages`,body, {headers,observe: 'response' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError({ status: error.status, message: error.error }); // Forward the error to the caller
        })
      );
  }
}
