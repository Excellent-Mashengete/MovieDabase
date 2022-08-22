import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../Services/movies.service';
import { TvseriesService } from '../Services/tvseries.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  latestMovies:any = [];
  listMovies:any = [];
  latestTv:any = [];
  listTv:any = [];
  responsiveOptions;

  constructor( private movieList: MoviesService, private tv:TvseriesService)  { 
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
    this.getTvSeries();
  }

  getMovies() {
    this.movieList.getMovies().subscribe({
      next: data =>{
        this.latestMovies = data;
        this.listMovies = this.latestMovies.results
        console.log(this.latestMovies.results)
      }
    })
  }

  getTvSeries() {
    this.tv.getTv().subscribe({
      next: data =>{
        this.latestTv = data;
        this.listTv = this.latestTv.results
        console.log(this.latestTv.results)
      }
    })
  }
}
