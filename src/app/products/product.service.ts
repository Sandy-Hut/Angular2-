import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ProductService{
  private productUrl = 'api/products/products.json';
  constructor(private http: HttpClient){}
  getProduct():Observable<IProduct[]>{  // observable of IProduct[], type casting with "<>" and strictly type with ":""
      return this.http.get<IProduct[]>(this.productUrl).pipe(
        tap(data => console.log('all data:'+JSON.stringify(data))),
        catchError(this.handleError)
      )
  }
  private handleError(err:HttpErrorResponse){
    let errorMsg = '';
    if(err.error instanceof ErrorEvent){
      errorMsg = `An error occurred: ${err.error.message} `
    }else{
      errorMsg = `Server returned code: ${err.status} and error message is: ${err.message}`
    }
    console.error(errorMsg);
    return throwError(errorMsg);
  }
}