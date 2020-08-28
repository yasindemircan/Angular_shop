import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Product } from '../product/product';
import { Observable, throwError } from 'rxjs';
import {tap,catchError} from 'rxjs/operators';
import { error } from '@angular/compiler/src/util';
import { Category } from '../category/category';

@Injectable()
export class CategoryService {
  constructor(private http:HttpClient) {}
  path = "http://localhost:3000/categories";
  getCategies():Observable<Category[]> {
   return this.http
   .get<Category[]>(this.path).pipe(
     tap(data=>console.log(JSON.stringify(data))),
     catchError(this.handleError)
   );
  
  }
  handleError(err:HttpErrorResponse){
    let errorMessage =''
    if(err.error instanceof ErrorEvent){
      errorMessage="Bir hata Oluştu" + err.error.message
    }else{
      errorMessage ="Sistemsel Hata"
    }
    return throwError( errorMessage);
  }
}

