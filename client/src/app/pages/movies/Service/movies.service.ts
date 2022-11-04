import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
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
  genres:any;

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any>{
    return this.http.get(`${this.baseUrl}movie/popular${this.api_key}`);
  }

  getUpcoming(): Observable<any>{
    return this.http.get(`${this.baseUrl}movie/upcoming${this.api_key}`);
  }

  getgenres(id:any){
    let name: string = '';
    let genres = [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 16, name: "Animation" },
      { id: 35, name: "Comedy" },
      { id: 80, name: "Crime" },
      { id: 99, name: "Documentary" },
      { id: 18, name: "Drama" },
      { id: 10751, name: "Family" },
      { id: 14, name: "Fantasy" },
      { id: 36, name: "History" },
      { id: 27, name: "Horror" },
      { id: 10402, name: "Music" },
      { id: 9648, name: "Mystery" },
      { id: 10749, name: "Romance" },
      { id: 878, name: "Science Fiction" },
      { id: 10770, name: "TV Movie" },
      { id: 53, name: "Thriller" },
      { id: 10752, name: "War" },
      { id: 37, name: "Western" }
    ]
     
    for (const i of genres) {
      if (i.id == id) {
        name = i.name
      }
    }

    return name;
  }
}
