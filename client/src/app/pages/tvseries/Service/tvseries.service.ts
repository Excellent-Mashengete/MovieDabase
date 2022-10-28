import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
//const baseUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=b47305b354135433a8512ad26ed78b50&language=en-US&page=1";
const movieUrl = "https://api.themoviedb.org/3/movie"
const movieID =`?api_key=b47305b354135433a8512ad26ed78b50&language=en-US`;
const search = `https://api.themoviedb.org/3/search/movie?api_key=b47305b354135433a8512ad26ed78b50&query=`;

const watch = "watch/providers?api_key=b47305b354135433a8512ad26ed78b50";

@Injectable({
  providedIn: 'root'
})
export class TvseriesService {
  baseUrl = environment.baseUrl;
  api_key = environment.api_key;
  
  constructor(private http: HttpClient) {}

  getTv(): Observable<any>{
    return this.http.get(`${this.baseUrl}tv/popular${this.api_key}`);
  }
}
