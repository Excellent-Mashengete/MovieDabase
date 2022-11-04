import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TvseriesComponent } from './tvseries.component';
import { TvseriesByIdComponent } from './tvseries-by-id/tvseries-by-id.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';

const routes: Routes = [
  {path:'tv', component:TvseriesComponent,
  children:[
    {path:'alltvseries', component:TvShowsComponent},
    {path:'tvseries/:id', component:TvseriesByIdComponent},
  ]}
]

@NgModule({
  declarations: [
    TvseriesComponent,
    TvseriesByIdComponent,
    TvShowsComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
  ]
})
export class TvseriesModule { }
