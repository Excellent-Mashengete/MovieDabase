import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MoviesByIdComponent } from './movies-by-id/movies-by-id.component';
import { MovieListComponent } from './movie-list/movie-list.component';

//PrimeNG Impots Modules
import {CarouselModule} from 'primeng/carousel';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

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
    MessagesModule,
    ToastModule,
    ConfirmDialogModule,
    CarouselModule,
    [RouterModule.forChild(routes)],
  ],
  providers: [MessageService, ConfirmationService],
})
export class MoviesModule { }
