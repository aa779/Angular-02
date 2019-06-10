import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProduct } from './products';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private productUrl = 'api/products/products.json';
  constructor (private http: HttpClient) {

  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'An error occurred: ${error.massage}';
    } else {
      errorMessage = 'Server returned response: ${error.status}, error is: ${error.massege}';
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
