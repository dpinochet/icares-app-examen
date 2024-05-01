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
import { NavController, Platform, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-order',
  templateUrl: './modal-order.page.html',
  styleUrls: ['./modal-order.page.scss'],
})
export class ModalOrderPage implements OnInit {
  constructor(private router: Router, private navCtrl: NavController, private platform: Platform, private modalCtrl: ModalController) {

  }

  ngOnInit() {
  }

  goToTrackOrder() {
    this.modalCtrl.dismiss();
    this.router.navigate(['/track-order'])
  }

}
