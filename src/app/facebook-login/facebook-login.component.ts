import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams, LoginResponse, LoginOptions } from 'ngx-facebook';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.css']
})
export class FacebookLoginComponent implements OnInit {

  constructor(private fb: FacebookService, private router: Router) {

    let initParams: InitParams = {
      appId: '1572984926130990',
      xfbml: true,
      version: 'v2.11'
    };

    fb.init(initParams);
  }

  loginWithOptions() {

  const loginOptions: LoginOptions = {
    enable_profile_selector: true,
    return_scopes: true,
    scope: 'public_profile,user_friends,email,pages_show_list'
  };

  this.fb.login(loginOptions)
    .then((res: LoginResponse) => {
      console.log('Logged in', res);
      this.router.navigate(['dashboard']);
    })
    .catch((error: any) => console.error(error));
  }

  ngOnInit() {
  }

}
