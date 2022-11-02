import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MoviesByIdComponent } from './movies-by-id/movies-by-id.component';
import { MovieListComponent } from './movie-list/movie-list.component';

//PrimeNG Impots Modules
import {CarouselModule} from 'primeng/carousel';

const routes: Routes = [
  {path:'movies', component:MoviesComponent,
  children:[
    {path:'allmovies', component:MovieListComponent},
    {path:'movieByID/:id', component:MoviesByIdComponent},
  ]}
]

@NgModule({
  declarations: [
    MoviesComponent,
    MoviesByIdComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    [RouterModule.forChild(routes)],
  ]
})
export class MoviesModule { }
