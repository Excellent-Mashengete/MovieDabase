import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movies } from '../../Models/movies';
import { environment } from 'src/environments/environment';

//const baseUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=b47305b354135433a8512ad26ed78b50&language=en-US&page=1";
const movieUrl = "https://api.themoviedb.org/3/movie"
const movieID =`?api_key=b47305b354135433a8512ad26ed78b50&language=en-US`;
const search = `https://api.themoviedb.org/3/search/movie?api_key=b47305b354135433a8512ad26ed78b50&query=`;

const watch = "watch/providers?api_key=b47305b354135433a8512ad26ed78b50";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = environment.baseUrl;
  api_key = environment.api_key;

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any>{
    return this.http.get(`${this.baseUrl}movie/popular${this.api_key}`);
  }

  getUpcoming(): Observable<any>{
    return this.http.get(`${this.baseUrl}movie/upcoming${this.api_key}`);
  }

  // getOneMovie(id:any): Observable<Movies> {
  //   return this.http.get(`${movieUrl}/${id}${movieID}`);
  // }

  // getCast(id:any): Observable<Movies> {
  //   return this.http.get(`${movieUrl}/${id}/credits${movieID}`);
  // }

  // searchMovie(title: any): Observable<Movies[]> {
  //   return this.http.get<Movies[]>(`${search}${title}`);
  // }

  // getProvider(id: any): Observable<any[]> {
  //   return this.http.get<any[]>(`${movieUrl}/${id}/${watch}`);
  // }
}
