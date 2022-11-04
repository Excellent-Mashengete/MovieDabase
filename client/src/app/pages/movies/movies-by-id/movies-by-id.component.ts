import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';
import { MoviesService } from '../Service/movies.service';

@Component({
  selector: 'app-movies-by-id',
  templateUrl: './movies-by-id.component.html',
  styleUrls: ['./movies-by-id.component.scss']
})
export class MoviesByIdComponent implements OnInit {

  id:number = 0;

  latestMovies:any = [];
  list:any = [];
  moviebyID:any = [];
  thisArray:any =[];
  constructor(private router:ActivatedRoute, private movieList: MoviesService, private auth:AuthService) { }

  ngOnInit(): void {
   this.id = this.router.snapshot.params['id']
   this.getMovies(this.id) 
  }

  getMovies(id:number) {
    this.movieList.getMovies().subscribe({
      next: data =>{
        this.latestMovies = data;

        this.list = this.latestMovies.results

        this.moviebyID = this.list.filter((item:any) => item.id == id)   

        this.moviebyID[0].genre_ids.forEach((element:any) => {
          this.thisArray.push(this.movieList.getgenres(element))
        });
      }
    })
  }

  addToWatchList(movie:any){
    if(!this.auth.isLoggedIn){
      console.log("Please login");
    }else{
      console.log(movie);
    }
    
  }
}
