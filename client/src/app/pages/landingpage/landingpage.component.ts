import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies/Service/movies.service';
import { TvseriesService } from '../tvseries/Service/tvseries.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  responsiveOptions;
  latestMovies:any = [];
  list:any = [];
  latestTv:any = [];
  listTv:any = [];
  mode:any;

  constructor( private movieList: MoviesService, private tv:TvseriesService) { 
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
        this.list = this.latestMovies.results
      }
    })
  }

  getTvSeries() {
    this.tv.getTv().subscribe({
      next: data =>{
        this.latestTv = data;
        this.listTv = this.latestTv.results
      }
    })
  }
}
