import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

//COMPONENTS
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//PrimeNG
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

const routes: Routes = [
  {path:'auth', component:AuthComponent,
  children:[
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent}
  ]},
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    MessagesModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
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
  exports: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
