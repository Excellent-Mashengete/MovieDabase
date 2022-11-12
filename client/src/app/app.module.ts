//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PrivateModule } from './pages/private/private.module';
import { MoviesModule } from './pages/movies/movies.module';
import { TvseriesModule } from './pages/tvseries/tvseries.module';
import { AuthModule } from './pages/auth/auth.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';

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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LandingpageComponent,

  ],
  imports: [
    PrivateModule,
    AuthModule,
    TvseriesModule,
    MoviesModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    //PrimeNg
    CarouselModule,
    ToastModule,
    InputMaskModule,
    InputNumberModule,
    CardModule,
		DropdownModule,
		ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    MessagesModule,
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
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
