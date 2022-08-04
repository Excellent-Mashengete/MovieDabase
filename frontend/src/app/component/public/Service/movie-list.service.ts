import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient,private router: Router) { }

  getMovies(){
    return this.http.get(`${this.baseUrl}listmovies`)
  }

  getMovieById(id:number){
    return this.http.get(`${this.baseUrl}moviebyid/${id}`)
  }
}
