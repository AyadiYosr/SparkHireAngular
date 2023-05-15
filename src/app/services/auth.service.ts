import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  link = 'http://localhost:3000/auth';

  signUp(identifiants: any) {
    return this.http.post(`${this.link}/register`, identifiants);
  }

  signIn(identifiants: any) {
    return this.http.post(`${this.link}/login`, identifiants);
  }

  logOut() {
    localStorage.removeItem('myToken');
  }

  isLogging() {
    let token = localStorage.getItem('myToken');
    if (token) return true;
    return false;
  }

  constructor(private http: HttpClient) {}

}
