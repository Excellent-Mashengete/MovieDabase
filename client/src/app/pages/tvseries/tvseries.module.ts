import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TvseriesComponent } from './tvseries.component';
import { TvseriesByIdComponent } from './tvseries-by-id/tvseries-by-id.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';

//PrimeNG Impots Modules
import {CarouselModule} from 'primeng/carousel';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

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
    CarouselModule,
    MessagesModule,
    ToastModule,
    ConfirmDialogModule,
    [RouterModule.forChild(routes)],
  ],
  providers: [MessageService, ConfirmationService],
})
export class TvseriesModule { }
