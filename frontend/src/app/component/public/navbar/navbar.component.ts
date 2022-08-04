import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../auth/Service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public auth:AuthenticationService) { }

  isloggedin = false;

  ngOnInit(): void {
    this.getlogged();
  }
  fullname = "name"
  user = "name"

  getlogged(){
   return this.isloggedin = false
  }

  Logout(){
    this.auth.doLogout
  }
}
