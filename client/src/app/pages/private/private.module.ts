import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { TvWatchSeriesComponent } from './tv-watch-series/tv-watch-series.component';
import { MovieWatchComponent } from './movie-watch/movie-watch.component';

//PrimeNG Impots Modules
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

const routes: Routes = [
  {path:'myaccount', component:PrivateComponent,
  children:[
    {path:'moviesWatch', component:MovieWatchComponent},
    {path:'tvWtach', component:TvWatchSeriesComponent},
    {path:'', redirectTo:'/myaccount/moviesWatch', pathMatch:'full'},
  ]}
]

@NgModule({
  declarations: [
    PrivateComponent,
    TvWatchSeriesComponent,
    MovieWatchComponent
  ],
  imports: [
    CommonModule,
    MessagesModule,
    ToastModule,
    ConfirmDialogModule,
    [RouterModule.forChild(routes)],
  ],
  providers: [MessageService, ConfirmationService],
})
export class PrivateModule { }
