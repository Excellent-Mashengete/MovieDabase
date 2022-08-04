import { Component, OnInit } from '@angular/core';
import { MovieListService } from '../Service/movie-list.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  products: any = [];
  constructor(private movies: MovieListService){}

  ngOnInit(){
    this.getMovies();
  }

  getMovies(){
    this.movies.getMovies().subscribe({
      next:data => {
        this.products = data
        console.log( this.products )
      }
    })
  }
}
