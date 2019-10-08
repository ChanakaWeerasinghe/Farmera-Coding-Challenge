import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {RootObject} from '../models/models'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  base_path = 'https://randomuser.me/api/?results=3';

  constructor(private http: HttpClient) {}
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
        'Something bad happened; please try again later.');
  };



  getUsers(): Observable<RootObject> {
    return this.http
        .get<RootObject>(this.base_path)
        .pipe(
            retry(2),
            catchError(this.handleError)
        )
  }

  // // Get single student data by ID
  // getItem(id): Observable<UserObject> {
  //   return this.http
  //       .get<Student>(this.base_path + '/' + id)
  //       .pipe(
  //           retry(2),
  //           catchError(this.handleError)
  //       )
  // }
  //
  // // Get students data
  // getList(): Observable<Student> {
  //   return this.http
  //       .get<Student>(this.base_path)
  //       .pipe(
  //           retry(2),
  //           catchError(this.handleError)
  //       )
  // }

}
