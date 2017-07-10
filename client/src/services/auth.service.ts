import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
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
    console.log(token);
    localStorage.setItem('token', token.token);
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
