import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies.component';
import { MoviesByIdComponent } from './movies-by-id/movies-by-id.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

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
    NgxUiLoaderModule.forRoot({
      overlayColor: "rgba(0,0,0,0.85)",
      logoPosition: "center-center",
      textPosition: "center-center",
      bgsPosition: "center-center",
      fgsPosition: "center-center",
      bgsType: "wandering-cubes",
      masterLoaderId: "master",
      overlayBorderRadius: "0",
      fgsType: "three-strings",
      hasProgressBar: false,
      textColor: "#33b5e5",
      bgsColor: "#33b5e5",
      fgsColor: "#33b5e5",
      pbDirection: "ltr",
      pbColor: "#33b5e5",
      text: "Loading...",
      fastFadeOut: true,
      bgsOpacity: 0.4,
      pbThickness: 3,
      logoSize: 120,
      bgsSize: 80,
      logoUrl: "",
      fgsSize: 80,
      delay: 0,
      blur: 15,
      gap: 10,
    }),
    [RouterModule.forChild(routes)],
  ],
  providers: [MessageService, ConfirmationService],
})
export class MoviesModule { }
