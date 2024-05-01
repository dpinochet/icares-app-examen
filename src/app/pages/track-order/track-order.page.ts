/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.page.html',
  styleUrls: ['./track-order.page.scss'],
})
export class TrackOrderPage implements OnInit {

  plt;
  order_detail = [
    {
      'status': 1,
      'value': 'Order Confirmed'
    },
    {
      'status': 1,
      'value': 'Prepering Your Order'
    },
    {
      'status': 1,
      'value': 'Order is ready at the restaurant'
    },
    {
      'status': 2,
      'value': 'Rider is picking up your order'
    },
    {
      'status': 0,
      'value': 'Rider is near by at your place'
    },
  ]
  constructor(private router: Router, private navCtrl: NavController, private platform: Platform) {
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

  goToChat() {
    this.router.navigate(['/chat'])
  }
}
