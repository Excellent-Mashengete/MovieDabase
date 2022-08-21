//Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Components
import { PublicComponent } from './public.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesComponent } from './movies/movies.component';
import { TvseriesComponent } from './tvseries/tvseries.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
//Primeng Imports
//primeNG 
import {CarouselModule} from 'primeng/carousel';
import { ToastModule } from 'primeng/toast';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule, } from 'primeng/card';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


const routes: Routes = [
  {path:'', component:PublicComponent,
  children:[
      {path:'home', component:LandingComponent},
      {path:'movies', component:MoviesComponent},
      {path:'tvseries', component:TvseriesComponent },
      {path:'', redirectTo:'/home', pathMatch:'full'}
  ]}
]

@NgModule({
  declarations: [
    PublicComponent,
    FooterComponent,
    MoviesComponent,
    TvseriesComponent,
    HeaderComponent,
    LandingComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,

    //Search module
    Ng2SearchPipeModule,
    
    //loader
     NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.5)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff',
      fullScreenBackdrop: false,
    }),

    //PrimeNg
    CarouselModule,
    ToastModule,
    InputMaskModule,
    InputNumberModule,
    CardModule,
		DropdownModule,
		ButtonModule,
    InputTextModule,
    ConfirmDialogModule,
    MessagesModule,
    [RouterModule.forChild(routes)]
  ],
  providers: [ MessageService, ConfirmationService],
})
export class PublicModule { }
