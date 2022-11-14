import { Component, OnInit } from '@angular/core';
import { GetmoviestvService } from './service/getmoviestv.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {
  totalMovies:number = 0;
  totalTv:number = 0;
  list:any;
  tvList:any;
  movieList:any;
  listMovies:any;
  user:boolean = false;
  mode:any;
  constructor(private getWatchList:GetmoviestvService) { }

  ngOnInit(): void {
    this.getMovieList();
    this.getTv()
  }
  getTv(){
    let movies = 'tv';
    return this.getWatchList.getMovies(movies).subscribe({
      next:data => {
        this.list = data;
        this.tvList = this.list.movieData
        this.totalTv = this.tvList.length
      }
    })
  }

  getMovieList(){
    let movies = 'movie';
    return this.getWatchList.getMovies(movies).subscribe({
      next:data => {
        this.listMovies = data;
        this.movieList = this.listMovies.movieData
        this.totalMovies = this.movieList.length
      }
    })
  }

  order(e:any){
    this.mode = e;
    if(this.mode == true){
      this.user = false;
      console.log("Accessding"); 
    }
    else{
      console.log("Descending");
      this.user = true;
    }
  }
}
