/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  plt;
  constructor(private platform: Platform, private navCtrl: NavController, private router: Router) {
    if (this.platform.is('ios')) {
      this.plt = "ios";
    }
    else {
      this.plt = "android";
    }
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

  goToMyOrder() {
    this.router.navigate(['/my-order']);
  }

  goToProduct() {
    this.router.navigate(['/product']);
  }

  goToFilter() {
    this.router.navigate(['/filter']);
  }

}
