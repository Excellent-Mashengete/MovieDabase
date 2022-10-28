import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { WatchListComponent } from './watch-list/watch-list.component';

const routes: Routes = [
  {path:'myaccount', component:PrivateComponent,
  children:[
    {path:'watchList', component:WatchListComponent,}
  ]}
]

@NgModule({
  declarations: [
    PrivateComponent,
    WatchListComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],
  ]
})
export class PrivateModule { }
