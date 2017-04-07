import { Component, OnInit, Inject } from '@angular/core';
import { LoginUser } from '../../models/login-user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( @Inject("auth") private auth) { }

  private title: string = "HolidayPlan";

  ngOnInit() {
  }

  getProfileUrl() {
    let user: LoginUser = this.auth.getLoginUser();
    return user.profileUrl
  }
  getUserName() {
    let user: LoginUser = this.auth.getLoginUser();
    return user.name
  }
  getUserEmail() {
    let user: LoginUser = this.auth.getLoginUser();
    console.log(user)
    return user.email
  }

  isAdmin() {
    return this.auth.isAdmin();
  }

  logout() {
    this.auth.logout();
  }

}
