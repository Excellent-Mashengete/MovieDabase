//Modules =========================
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


//Components ========================

import { NavbarComponent } from './navbar/navbar.component';
import { PublicComponent } from './public.component';

const routes: Routes = [
  {path:'', component: PublicComponent},
];

@NgModule({
  declarations: [
    NavbarComponent,
    PublicComponent,
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class PublicModule { }
