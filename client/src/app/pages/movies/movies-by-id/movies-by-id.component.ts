import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../Service/movies.service';

@Component({
  selector: 'app-movies-by-id',
  templateUrl: './movies-by-id.component.html',
  styleUrls: ['./movies-by-id.component.scss']
})
export class MoviesByIdComponent implements OnInit {

  id:number = 0;

  latestMovies:any = [];
  list:any = [];
  moviebyID:any = [];

  constructor(private router:ActivatedRoute, private movieList: MoviesService) { }

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
      }
    })
  }
}
