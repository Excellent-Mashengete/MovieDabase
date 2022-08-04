import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../auth/Service/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  ngOnInit(): void {
  }
  fullname = "name"
  user = "name"

  Logout(){
    this.auth.doLogout
  }
}
