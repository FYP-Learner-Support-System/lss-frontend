import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = inject(HttpClient)
  domain:string = "https://localhost:7275/api/User"

  GetUserDetails(token: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Authorization', `${token}`);
    return this.http.get<any>(`${this.domain}/user-detail`, {headers, observe: 'response' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError({ status: error.status, message: error.error }); // Forward the error to the caller
        })
      );
  }
}
