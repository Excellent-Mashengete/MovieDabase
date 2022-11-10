import { Component, OnInit } from '@angular/core';
import { GetmoviestvService } from '../service/getmoviestv.service';

@Component({
  selector: 'app-movie-watch',
  templateUrl: './movie-watch.component.html',
  styleUrls: ['./movie-watch.component.scss']
})
export class MovieWatchComponent implements OnInit {
  
  mList:any 

  constructor(private movelist:GetmoviestvService) { }

  ngOnInit(): void {
    //this.getMovieList();
  }

  // getMovieList(){
  //   let movies = 'movie';
  //   return this.movelist.getMovies(movies).subscribe({
  //     next:data => {
  //       this.mList = data;
  //       console.log(this.mList);
        
  //     }
  //   })
  // }
}
