//Modules =========================
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


//Components ========================

import { MoviesbyidComponent } from './movies/moviesbyid/moviesbyid.component';
import { PopularComponent } from './movies/popular/popular.component';
import { NowplayingComponent } from './movies/nowplaying/nowplaying.component';
import { UpcomingComponent } from './movies/upcoming/upcoming.component';
import { TopratingComponent } from './movies/toprating/toprating.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PublicComponent } from './public.component';
import { TvshowsComponent } from './tvshows/tvshows/tvshows.component';
import { TopratedComponent } from './tvshows/toprated/toprated.component';

const routes: Routes = [
  {path:'', component: PublicComponent},
  {path:'movies', component: PublicComponent,
    children:[
      {path:'moviebyid/:id', component:MoviesbyidComponent},
      {path:'popular', component:PopularComponent},
      {path:'now-playing', component:NowplayingComponent},
      {path:'upcoming', component:UpcomingComponent},
      {path:'top-rated', component:TopratingComponent},
      {path:'', redirectTo:'/movies', pathMatch:'full'},
    ]
  },
  {path:'tv', component: PublicComponent,
    children:[
      {path:'popular', component:PopularComponent},
      {path:'top-rated', component:TopratedComponent},
      {path:'now-playing', component:NowplayingComponent},
      {path:'', redirectTo:'/movies', pathMatch:'full'},
    ]
  }
 ];


@NgModule({
  declarations: [
    MoviesbyidComponent,
    PopularComponent,
    NowplayingComponent,
    UpcomingComponent,
    TopratingComponent,
    NavbarComponent,
    PublicComponent,
    TvshowsComponent,
    TopratedComponent,
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class PublicModule { }
