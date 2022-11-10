import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

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
    [RouterModule.forChild(routes)],
  ],
  providers: [MessageService, ConfirmationService],
  exports: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
