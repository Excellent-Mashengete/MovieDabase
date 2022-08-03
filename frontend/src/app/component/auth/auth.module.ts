import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';


const routes: Routes = [
  {path:'auth', component:AuthComponent,
    children:[
      {path:'login', component:LoginComponent},
      {path:'register', component:RegisterComponent},
      {path:'', redirectTo:'/login', pathMatch:'full'}
    ]
  }
 ];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
