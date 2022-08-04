//Modules =========================
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PublicModule } from './component/public/public.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './component/auth/auth.module';

//Components ========================
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    AuthModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
