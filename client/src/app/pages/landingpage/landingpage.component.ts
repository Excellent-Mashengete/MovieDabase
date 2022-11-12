import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../movies/Service/movies.service';
import { TvseriesService } from '../tvseries/Service/tvseries.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

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
  name:any;
  constructor( private movieList: MoviesService, private tv:TvseriesService, private router:Router,
    private __loader: NgxUiLoaderService,) { 
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
    this.__loader.start();
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
        this.__loader.stop();
      }
    })
  }
  
 
}
