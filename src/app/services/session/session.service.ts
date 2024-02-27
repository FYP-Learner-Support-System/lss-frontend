import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  http = inject(HttpClient)
  domain:string = "https://localhost:7275/api/Session"

  isSessionValid(token: any): Observable<boolean> {
    return this.http.get<any>(`${this.domain}/${token}`, { observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          const expirationTime = new Date(response.body.item.expirationTime);
          expirationTime.setHours(expirationTime.getHours() + 5);
          const currentTime = new Date();

          console.log("expirationTime:",expirationTime)
          console.log("currentTime:",currentTime)


          return expirationTime > currentTime;
        }),
        catchError((error: HttpErrorResponse) => {
          return throwError({ status: error.status, message: error.error }); 
        })
      );
  }
}
