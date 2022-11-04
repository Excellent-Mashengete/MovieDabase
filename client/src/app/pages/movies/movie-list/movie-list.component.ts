import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../Service/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  
  responsiveOptions;
  latestMovies:any = [];
  list:any = [];
  latestTv:any = [];
  listTv:any = [];
  mode:any;

  constructor( private movieList: MoviesService) { 
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movieList.getMovies().subscribe({
      next: data =>{
        this.latestMovies = data;
        this.list = this.latestMovies.results
    
      }
    })
  }
}
