import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TvseriesComponent } from './tvseries.component';
import { TvseriesByIdComponent } from './tvseries-by-id/tvseries-by-id.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

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
export class TvseriesModule { }
