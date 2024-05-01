/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  plt;
  slideOpts = {
    slidesPerView: 1.2,
  };
  constructor(private platform: Platform,
    private router: Router) {
    if (this.platform.is('ios')) {
      this.plt = 'ios';
    } else {
      this.plt = 'android';
    }
  }

  ngOnInit() {
  }
  openMenu() {
    this.router.navigate(['product-list']);
  }
  onSearchChange(event) {

  }

}
