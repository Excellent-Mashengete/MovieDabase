import { Component, OnInit } from '@angular/core';
import { GetmoviestvService } from '../service/getmoviestv.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-movie-watch',
  templateUrl: './movie-watch.component.html',
  styleUrls: ['./movie-watch.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class MovieWatchComponent implements OnInit {
  MovieList:any; 
  list:any;
  messageInfo:any;
  number:number = 0;

  constructor(private tv:GetmoviestvService, private messageService: MessageService,
    private confirmationService: ConfirmationService,) { }

  ngOnInit(): void {
    this.getMovieList();
  }

  getMovieList(){
    let movies = 'movie';
    return this.tv.getMovies(movies).subscribe({
      next:data => {
        this.list = data;
        this.MovieList = this.list.movieData;
      }
    })
  }

  remove(movie:any){
    this.confirmationService.confirm({
      message: 'Are you sure you want to remove ' + movie.original_title + '? from your watch list',
      header: 'Confirm removal',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.tv.removeMovie(movie._id).subscribe({
          next:data => {
            this.messageInfo= data
            this.messageService.add({
              key: 'tc', severity:'success', summary: 'Success', detail: this.messageInfo.message, life: 3000
            }); 
            location.reload();
          },
          error: err => {
            console.log(err);
            this.messageService.add({
              key: 'tc', severity:'error', summary: 'Error', detail: "Movie unable to remove from your watch list ", life: 3000
            }); 
          }
        })
      },
      reject: () => {
        this.messageService.add({
          key: 'tc', severity:'warn', summary: 'Warning', detail: "remove cancelled", life: 3000
        }); 
      }
    })
  }
}
