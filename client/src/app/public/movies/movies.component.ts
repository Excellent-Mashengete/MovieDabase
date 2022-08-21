import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../Services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  latestMovies:any = [];
  list:any = [];

  constructor( private movieList: MoviesService)  { }

  ngOnInit(): void {
    this.getMovies();
    
  }

  getMovies() {
    this.movieList.getMovies().subscribe({
      next: data =>{
        this.latestMovies = data;
        this.list = this.latestMovies.results
        console.log(this.latestMovies.results)
      }
    })
  }
}
