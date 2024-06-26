import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  http = inject(HttpClient)
  
  domain:string = "https://asksphere.azurewebsites.net"
  // domain:string = "https://localhost:7275"

  GetAllMaterial(classId: number): Observable<any>{
    const token = JSON.parse(localStorage.getItem('myUser') || "{}").token
    const headers = new HttpHeaders().set('Authorization', `${token}`).set('Content-Type', 'application/json');
    return this.http.get<any>(`${this.domain}/api/Classroom/classroom-content/get-content?classId=${classId}`, {headers, observe: 'response' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError({ status: error.status, message: error.error }); // Forward the error to the caller
        })
      );
  }

  postAnnouncement(body: any): Observable<any>{
    const token = JSON.parse(localStorage.getItem('myUser') || "{}").token
    const headers = new HttpHeaders().set('Authorization', `${token}`).set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.domain}/api/Classroom/classroom-content/announcement/create-announcement`, body,{headers, observe: 'response' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError({ status: error.status, message: error.error }); // Forward the error to the caller
        })
      );
  }

  editAnnouncement(body: any): Observable<any>{
    const token = JSON.parse(localStorage.getItem('myUser') || "{}").token
    const headers = new HttpHeaders().set('Authorization', `${token}`).set('Content-Type', 'application/json');
    console.log("content services edit announce: ",body)
    return this.http.put<any>(`${this.domain}/api/Classroom/classroom-content/announcement/edit-announcement`, body,{headers, observe: 'response' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError({ status: error.status, message: error.error }); // Forward the error to the caller
        })
      );
  }

  postBook(body: FormData): Observable<any>{
    const token = JSON.parse(localStorage.getItem('myUser') || "{}").token
    const headers = new HttpHeaders().set('Authorization', `${token}`)
    return this.http.post<any>(`${this.domain}/api/Classroom/classroom-content/post-multiple-content`, body,{headers, observe: 'response' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError({ status: error.status, message: error.error }); // Forward the error to the caller
        })
      );
  }

  deleteMaterial(id:number){
    const token = JSON.parse(localStorage.getItem('myUser') || "{}").token
    const headers = new HttpHeaders().set('Authorization', `${token}`)
    return this.http.delete<any>(`${this.domain}/api/Classroom/class-material/${id}`,{headers, observe: 'response' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError({ status: error.status, message: error.error }); // Forward the error to the caller
        })
      );
  }

  deleteAnnouncement(id:number){
    const token = JSON.parse(localStorage.getItem('myUser') || "{}").token
    const headers = new HttpHeaders().set('Authorization', `${token}`)
    return this.http.delete<any>(`${this.domain}/api/Classroom/classroom-content/announcement/delete-announcement-${id}`,{headers, observe: 'response' })
      .pipe(
        catchError((error: HttpErrorResponse) => {
          return throwError({ status: error.status, message: error.error }); // Forward the error to the caller
        })
      );
  }

  downloadBook(materialId:number,bookId:number): Observable<Blob>{
    const token = JSON.parse(localStorage.getItem('myUser') || "{}").token
    const headers = new HttpHeaders().set('Authorization', `${token}`).set('Content-Type', 'application/pdf');
    return this.http.get(`${this.domain}/api/Classroom/classroom-content/get-file?MaterialId=${materialId}&BookId=${bookId}`,{headers, responseType: 'blob'})
  }



}
