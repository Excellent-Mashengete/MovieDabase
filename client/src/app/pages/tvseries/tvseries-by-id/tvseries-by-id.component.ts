import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';
import { MoviesService } from '../../movies/Service/movies.service';
import { TvseriesService } from '../Service/tvseries.service';

@Component({
  selector: 'app-tvseries-by-id',
  templateUrl: './tvseries-by-id.component.html',
  styleUrls: ['./tvseries-by-id.component.scss']
})
export class TvseriesByIdComponent implements OnInit {

  latestTv:any =[];
  listTv:any = [];
  thisArray:any =[];
  tvSeriesById:any = [];
  id:number = 0;
  constructor(private tv:TvseriesService, private router:ActivatedRoute, private movieList: MoviesService, private auth:AuthService) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id']
    this.getTvSeries(this.id)
  }

  getTvSeries(id:number) {
    this.tv.getTv().subscribe({
      next: data =>{
        this.latestTv = data;
        this.listTv = this.latestTv.results
        this.tvSeriesById = this.listTv.filter((item:any) => item.id == id)
        this.tvSeriesById[0].genre_ids.forEach((element:any) => {
          this.thisArray.push(this.movieList.getgenres(element))
        });
      }
    })
  }

  addToWatchList(tv:any){
    if(!this.auth.isLoggedIn){
      console.log("pop modal");
      
      console.log("Please login");
    }else{
      console.log(tv);
    }
  }
}
