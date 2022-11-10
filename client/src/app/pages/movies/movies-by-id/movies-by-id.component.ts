import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthService } from '../../auth/service/auth.service';
import { MoviesService } from '../Service/movies.service';

@Component({
  selector: 'app-movies-by-id',
  templateUrl: './movies-by-id.component.html',
  styleUrls: ['./movies-by-id.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class MoviesByIdComponent implements OnInit {

  id:number = 0;

  latestMovies:any = [];
  list:any = [];
  moviebyID:any = [];
  thisArray:any =[];
  constructor(private router:ActivatedRoute, private messageService: MessageService,
    private confirmationService: ConfirmationService, private movieList: MoviesService, public auth:AuthService,) { }

  ngOnInit(): void {
   this.id = this.router.snapshot.params['id']
   this.getMovies(this.id) 
  }

  getMovies(id:number) {
    this.movieList.getMovies().subscribe({
      next: data =>{
        this.latestMovies = data;

        this.list = this.latestMovies.results

        this.moviebyID = this.list.filter((item:any) => item.id == id)   

        this.moviebyID[0].genre_ids.forEach((element:any) => {
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
          original_title: movie.original_title,
          overview: movie.overview,
          poster_path: movie.poster_path,
          release_date: movie.release_date,
          title: movie.title,
          vote_average: movie.vote_average,
          vote_count: movie.vote_count,
          type:'movie'
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
