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
  responsiveOptions;
  
  constructor(private tv:TvseriesService) { 
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
