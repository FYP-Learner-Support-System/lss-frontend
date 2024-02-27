import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  http = inject(HttpClient)
  domain:string = "https://localhost:7275/api/Classroom"

  GetClassById(id: any): Observable<any>{
    // const headers = new HttpHeaders().set('Authorization', `${token}`).set('Content-Type', 'application/json');
    return this.http.get<any>(`${this.domain}/get-class-details?classId=${id}`, {observe: 'response' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError({ status: error.status, message: error.error }); // Forward the error to the caller
        })
      );
  }

  GetStudents(id: any): Observable<any>{
    // const headers = new HttpHeaders().set('Authorization', `${token}`).set('Content-Type', 'application/json');
    return this.http.get<any>(`${this.domain}/${id}/students`, {observe: 'response' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError({ status: error.status, message: error.error }); // Forward the error to the caller
        })
      );
  }

  GetTeacherClassList(token: any): Observable<any>{
    const headers = new HttpHeaders().set('Authorization', `${token}`).set('Content-Type', 'application/json');
    return this.http.get<any>(`${this.domain}/get-all-classes`, {headers, observe: 'response' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError({ status: error.status, message: error.error }); // Forward the error to the caller
        })
      );
  }

  GetStudentClassList(token: any): Observable<any> {

    const headers = new HttpHeaders().set('Authorization', `${token}`).set('Content-Type', 'application/json');
    return this.http.get<any>(`${this.domain}/joined-classes`, {headers, observe: 'response' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError({ status: error.status, message: error.error }); // Forward the error to the caller
        })
      );

  }


  createClass(token: any, body:any): Observable<HttpResponse<any>> {
    console.log(token,body)
    const headers = new HttpHeaders().set('Authorization', `${token}`).set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.domain}/create`,body, {headers, observe: 'response' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError({ status: error.status, message: error.error }); // Forward the error to the caller
        })
      );
  }

  joinClass(token: any, body:any): Observable<HttpResponse<any>> {
    console.log(token,body)
    const headers = new HttpHeaders().set('Authorization', `${token}`).set('Content-Type', 'application/json');;
    return this.http.post<any>(`${this.domain}/enroll-in-classroom?ClassCode=${body}`,body, {headers, observe: 'response' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError({ status: error.status, message: error.error }); // Forward the error to the caller
        })
      );
  }

  approveRequests(token: any, body:any): Observable<HttpResponse<any>> {
    console.log(token,body)
    const headers = new HttpHeaders().set('Authorization', `${token}`).set('Content-Type', 'application/json');;
    return this.http.post<any>(`${this.domain}/approve-student-request`,body, {headers, observe: 'response' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError({ status: error.status, message: error.error }); // Forward the error to the caller
        })
      );
  }

  denyRequests(token: any, body:any): Observable<HttpResponse<any>> {
    console.log(token,body)
    const headers = new HttpHeaders().set('Authorization', `${token}`).set('Content-Type', 'application/json');;
    return this.http.post<any>(`${this.domain}/decline-student-request`,body, {headers, observe: 'response' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError({ status: error.status, message: error.error }); // Forward the error to the caller
        })
      );
  }

  // GetUserDetails(token: any): Observable<HttpResponse<any>> {
  //   const headers = new HttpHeaders().set('Authorization', `${token}`);
  //   return this.http.get<any>(`${this.domain}`, {headers, observe: 'response' })
  //     .pipe(
  //       catchError((error: HttpErrorResponse) => {
  //         return throwError({ status: error.status, message: error.error }); // Forward the error to the caller
  //       })
  //     );
  // }
}
