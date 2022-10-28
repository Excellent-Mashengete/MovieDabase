import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  mode:any;
  
  changeMode(e:any){
    this.mode = e;
    console.log(this.mode);
    
  }
}
