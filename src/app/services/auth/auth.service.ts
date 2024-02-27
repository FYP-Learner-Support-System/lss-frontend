import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor(private http: HttpClient) { }
  http = inject(HttpClient)
  domain:string = `https://localhost:7275/api/User`
  
  login(body: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({'Content-Type':'application/json;'});
    
    return this.http.post<any>(`${this.domain}/login`, body, { headers, observe: 'response' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError({ status: error.status, message: error.error }); // Forward the error to the caller
        })
      );
  }

  signup(body: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({'Content-Type':'application/json;'});
    
    return this.http.post<any>(`${this.domain}/register`, body, { headers, observe: 'response' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError({ status: error.status, message: error.error }); // Forward the error to the caller
        })
      );
  }

  verifyUser(token: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(`${this.domain}/register/verification?token=${token}`,token, { observe: 'response' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError({ status: error.status, message: error.error }); // Forward the error to the caller
        })
      );
  }

  SendTokentoResetPassword(email: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({'Content-Type':'application/json;'});
    
    return this.http.post<any>(`${this.domain}/forgot-password?email=${email}`,email, { headers, observe: 'response' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError({ status: error.status, message: error.error }); // Forward the error to the caller
        })
      );
  }

  ResetPassword(body: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({'Content-Type':'application/json;'});
    
    return this.http.post<any>(`${this.domain}/reset-password`,body, { headers, observe: 'response' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError({ status: error.status, message: error.error }); // Forward the error to the caller
        })
      );
  }
}
