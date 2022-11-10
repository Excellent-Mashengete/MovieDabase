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
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
