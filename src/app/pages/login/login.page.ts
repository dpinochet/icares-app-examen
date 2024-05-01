/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  plt;
  constructor(private navCtrl: NavController, private router: Router, private platform: Platform) {
    if (this.platform.is('ios')) {
      this.plt = 'ios';
    } else {
      this.plt = 'android';
    }
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToForgot() {
    this.router.navigate(['/forgot-password']);
  }

}
