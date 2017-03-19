import { Component, OnInit, Inject } from '@angular/core';

import { LoginUser } from '../../models/login-user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( @Inject("auth") private auth) { }

  private title: string = "ITUGOGO";
  private user: LoginUser;

  ngOnInit() {
    this.auth.getLoginUser().subscribe(user => {
      this.user = user;
    }, error => {
      console.info(error);
    });
  }

  logout() {
    this.auth.logout();
  }

}
