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
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.page.html',
  styleUrls: ['./account-detail.page.scss'],
})
export class AccountDetailPage implements OnInit {
  plt: any;
  constructor(private router: Router, private platform: Platform) {
    this.plt = this.platform.is('android') ? 'android' : 'ios';
  }

  ngOnInit() {
  }

  goToAddressBook() {
    this.router.navigate(['/address-book']);
  }

  goToSupport() {
    this.router.navigate(['/support']);
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }

  goToUserProfile() {
    this.router.navigate(['/user-profile']);
  }

  goToPaymentMethod() {
    this.router.navigate(['/payment-method']);
  }

  goToOrderHistory() {
    this.router.navigate(['/order-history']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }

}
