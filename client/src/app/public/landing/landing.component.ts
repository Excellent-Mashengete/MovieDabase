import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../Services/movies.service';
import { TvseriesService } from '../Services/tvseries.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  //Popular Movies
  latestMovies:any = [];
  listMovies:any = [];
  orders:any;

  //Upcomming Movies
  listUpcomming:any =[];
  upcomming:any = [];

  //Top-Rated Movies
  listTopRatedMovies:any =[];
  top_Rated_movies:any = [];

  //Now-Playing Movies
  listNowPlayingMovies:any =[];
  Now_Playing_Movies:any = [];

  //Popular Tv Shows
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
    this.getUpComming();
  }

  //Movies 
  getMovies() {
    this.movieList.getMovies().subscribe({
      next: data =>{
        this.latestMovies = data;
        this.listMovies = this.latestMovies.results;
        console.log(this.listMovies)
      }
    });
  };

  getUpComming(){
    this.movieList.getUpcoming().subscribe({
      next:data => {
        this.upcomming = data;
        this.listUpcomming = this.upcomming.results;
        console.log(this.listUpcomming)
      }
    });
  };


  //Tv Shows
  getTvSeries() {
    this.tv.getTv().subscribe({
      next: data =>{
        this.latestTv = data;
        this.listTv = this.latestTv.results;
      }
    });
  };
}
