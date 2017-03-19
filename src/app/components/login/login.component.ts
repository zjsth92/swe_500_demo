import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username: string;
  private password: string;
  private returnUrl: string;
  private errorMessage: string;

  constructor(private route: ActivatedRoute, private router: Router, @Inject("auth") private auth) { }

  ngOnInit() {
    this.auth.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  signIn() {
    this.auth
      .login(this.username, this.password)
      .then((result) => {
        this.router.navigate([this.returnUrl]);
      })
      .catch((error) => {
        this.errorMessage = error;
      });
  }

}
