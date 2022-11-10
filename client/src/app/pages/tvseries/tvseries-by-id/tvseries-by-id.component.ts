import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/service/auth.service';
import { MoviesService } from '../../movies/Service/movies.service';
import { TvseriesService } from '../Service/tvseries.service';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-tvseries-by-id',
  templateUrl: './tvseries-by-id.component.html',
  styleUrls: ['./tvseries-by-id.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class TvseriesByIdComponent implements OnInit {

  latestTv:any =[];
  listTv:any = [];
  thisArray:any =[];
  tvSeriesById:any = [];
  id:number = 0;
  constructor(private tv:TvseriesService, private router:ActivatedRoute, private movieList: MoviesService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService, public auth:AuthService) { }

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

  addToWatchList(movie:any){
    if(!this.auth.isLoggedIn){
      return
    }

    this.confirmationService.confirm({
      message: 'Are you sure you want to add ' + movie.original_title + '? to your watch list',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {        
        let userMove = {
          backdrop_path: movie.backdrop_path,
          genre_ids: movie.genre_ids,
          id_movie: movie.id,
          original_language: movie.original_language,
          original_title: movie.original_name,
          overview: movie.overview,
          poster_path: movie.poster_path,
          release_date: movie.first_air_date,
          title: movie.name,
          vote_average: movie.vote_average,
          vote_count: movie.vote_count,
          type: 'tv'
        }
        console.log(userMove);
        
        this.movieList.addMovieWatchList(userMove).subscribe({
          next:data => {
            console.log(data);
            
            this.messageService.add({
              key: 'tc', severity:'success', summary: 'Success', detail: "Successfully added to your watch list", life: 3000
            }); 
          },
          error: err => {
            console.log(err);
            this.messageService.add({
              key: 'tc', severity:'error', summary: 'Error', detail: err.error.message, life: 3000
            }); 
          }
        })
      },
      reject: () => {
        this.messageService.add({
          key: 'tc', severity:'warning', summary: 'Warning', detail: "Adding cancelled", life: 3000
        }); 
      }
    })
  }
}
