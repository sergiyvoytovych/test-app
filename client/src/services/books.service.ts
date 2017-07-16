import { Injectable } from '@angular/core';
import { RequestOptions, RequestMethod, Headers, RequestOptionsArgs, Http, Response } from '@angular/http';
import {Observable} from "rxjs";
import { Book } from '../models/book';

@Injectable()
export class BooksService {
  constructor(private http : Http){

  }

  getBooks(): Observable<Response> {
    return this.http.get('http://localhost:3000/secure-api/getbooks', this.authHeader());
  }

  postBook(book : Book): Observable<Response>{
    return this.http.post('http://localhost:3000/secure-api/postbook',book,this.authHeader());
  }

  deleteBook(id: String): Observable<Response>{

    return this.http.delete('http://localhost:3000/secure-api/deletebook/'+ id, this.authHeader());
  }

  getBook(id: String): Observable<Response> {
    return this.http.get('http://localhost:3000/secure-api/getbook/' + id, this.authHeader());
  }

  updateBook(book : Book): Observable<Response> {
    return this.http.put('http://localhost:3000/secure-api/updatebook/' + book._id, book, this.authHeader());
  }


  authHeader() : RequestOptions{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', localStorage.token);
    return new RequestOptions({headers : headers});
  }



}
