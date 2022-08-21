import { Component, OnInit } from '@angular/core';
import { TvseriesService } from '../Services/tvseries.service';

@Component({
  selector: 'app-tvseries',
  templateUrl: './tvseries.component.html',
  styleUrls: ['./tvseries.component.scss']
})
export class TvseriesComponent implements OnInit {
  latestTv:any = [];
  list:any = [];
  constructor(private tv:TvseriesService) { }

  ngOnInit(): void {
    this.getTvSeries();
    
  }

  getTvSeries() {
    this.tv.getTv().subscribe({
      next: data =>{
        this.latestTv = data;
        this.list = this.latestTv.results
        console.log(this.latestTv.results)
      }
    })
  }

}
