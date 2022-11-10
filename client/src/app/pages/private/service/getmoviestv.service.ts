import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetmoviestvService {
  userUrls = environment.userUrls;

  constructor(private http: HttpClient) {}
  
  getMovies(name:string){
    return this.http.get(`${this.userUrls}readMovielist/${name}`,);
  }
}
