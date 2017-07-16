import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod, Headers } from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class AuthService {
  constructor(private http : Http){

}

  login(userData): Observable<Response> {
    return this.http.post('http://localhost:3000/api/authenticate', userData);
  }

  signin(userData): Observable<Response> {
    return this.http.post('http://localhost:3000/api/createuser', userData);
  }

  finishAuth(token): void {
    localStorage.setItem('token', token.token);
  }

  logout(): void {
    localStorage.clear();
  }

  verify(): Observable<Response>{
    return this.http.get('http://localhost:3000/api/verify', this.authHeader());
  }

  authHeader() : RequestOptions{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', localStorage.token);
    return new RequestOptions({headers : headers});
  }
}
