import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/Models/login';
import { Register } from 'src/app/Models/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.userUrls;
  
  constructor(private http: HttpClient, private router: Router, private activeRoute:ActivatedRoute) { }

  login(users : Login) {
    return this.http.post(`${this.baseUrl}signin`, users)
  }

  //create a register request 
  register(users : Register) {
    return this.http.post(`${this.baseUrl}signup`, users)
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    let url = this.router.url
    if(url == '/myaccount/watchList'){
      if (removeToken == null) {
        this.router.navigate(['/']);
      }
    }
  }
}
