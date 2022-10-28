import { Component, OnInit } from '@angular/core';
import { TvseriesService } from '../Service/tvseries.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {

  latestTv:any =[];
  listTv:any = [];

  constructor(private tv:TvseriesService) { }

  ngOnInit(): void {
    this.getTvSeries()
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
