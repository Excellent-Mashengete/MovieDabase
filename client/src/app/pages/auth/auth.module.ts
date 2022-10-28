import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//COMPONENTS
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth.component';

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
    [RouterModule.forChild(routes)],
  ]
})
export class AuthModule { }
