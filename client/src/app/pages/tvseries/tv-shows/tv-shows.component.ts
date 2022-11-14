import { Component, OnInit } from '@angular/core';
import { TvseriesService } from '../Service/tvseries.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {

  latestTv:any =[];
  listTv:any = [];

  constructor(private tv:TvseriesService, private __loader:NgxUiLoaderService,) { }

  ngOnInit(): void {
    this.__loader.start();
    this.getTvSeries()
  }

  getTvSeries() {
    this.tv.getTv().subscribe({
      next: data =>{
        this.latestTv = data;
        this.listTv = this.latestTv.results;
        this.__loader.stop();
      }
    })
  }
}
