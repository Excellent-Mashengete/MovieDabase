//Modules =========================
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxScrollTopModule } from 'ngx-scrolltop';

//Components ========================
import { NavbarComponent } from './navbar/navbar.component';
import { PublicComponent } from './public.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieIdComponent } from './movie-id/movie-id.component';

const routes: Routes = [
  {path:'', component: PublicComponent},
  {path:'movies', component:MoviesComponent},
  {path:'movie/:id', component:MovieIdComponent}
];

@NgModule({
  declarations: [
    NavbarComponent,
    PublicComponent,
    MoviesComponent,
    MovieIdComponent,
  ],
  imports: [
    CommonModule, 
    NgxScrollTopModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicModule { }
