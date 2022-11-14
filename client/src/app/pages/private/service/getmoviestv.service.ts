import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetmoviestvService {
  userUrls = environment.userUrls;
  totalNumber:number = 0;
  totNumber:number = 0;
  constructor(private http: HttpClient) {}
  
  getMovies(name:string){
    return this.http.get(`${this.userUrls}readMovielist/${name}`);
  }
  removeMovie(id:number){
    return this.http.delete(`${this.userUrls}removeMovie/${id}`);
  }

  passNumber(total:number){
    let totalnumber = total;
    this.totNumber = totalnumber
  }

  getNumber(){
    this.totalNumber = this.totNumber;
    return this.totalNumber;
  }
}
