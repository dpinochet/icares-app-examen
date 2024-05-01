/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';
import { NavController, Platform, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalOrderPage } from '../modal-order/modal-order.page';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  plt;
  id = 1;
  constructor(private navCtrl: NavController, private router: Router, private platform: Platform, private modalCtrl: ModalController) {
    if (this.platform.is('ios')) {
      this.plt = "ios";
    }
    else {
      this.plt = "android";
    }
  }

  ngOnInit() {
  }

  async goToSendOrder() {
    const modal = await this.modalCtrl.create({
      component: ModalOrderPage,
      cssClass: 'modalorder'
    });
    return await modal.present();
  }

  goBack() {
    this.navCtrl.back()
  }

  choosePaymentMethod(value) {
    this.id = value
  }

}
