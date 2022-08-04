import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from 'src/app/interface/login';
import { Register } from 'src/app/interface/register';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const token = localStorage.getItem('access_token');
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'token': `${token}` })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient,private router: Router) { }

  //create a login request using 
  login(users : Login): Observable<any> {
    return this.http.post(`${this.baseUrl}login`, users)
  }

  //create a register request 
  register(users : Register) {
    return this.http.post(`${this.baseUrl}register`, users);
  }
  
  //get a token 
  getToken() {
    return localStorage.getItem('access_token');
  }

  //create a login request 
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  
  //Create a logout 
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['products']);
    }
  }
  
  //create a get request for current logged in user
  //pass the token back to the backend to be decoded in order to receive current logged in user
  getUserProfile(){
    return this.http.get(`${this.baseUrl}profile`,httpOptions)
  }
}