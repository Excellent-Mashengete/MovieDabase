import { Component, OnInit } from '@angular/core';
import { GetmoviestvService } from '../service/getmoviestv.service';

@Component({
  selector: 'app-tv-watch-series',
  templateUrl: './tv-watch-series.component.html',
  styleUrls: ['./tv-watch-series.component.scss']
})
export class TvWatchSeriesComponent implements OnInit {
  tvList:any 
  list:any;

  constructor(private tv:GetmoviestvService) { }

  ngOnInit(): void {
    this.getMovieList();
  }

  getMovieList(){
    let movies = 'tv';
    return this.tv.getMovies(movies).subscribe({
      next:data => {
        this.list = data;
        this.tvList = this.list.movieData
        console.log(this.tvList);
      }
    })
  }
}
