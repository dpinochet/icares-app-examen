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
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-customtabs',
  templateUrl: './customtabs.component.html',
  styleUrls: ['./customtabs.component.scss'],
})
export class CustomtabsComponent implements OnInit {
  tabId: any;
  constructor(private router: Router, private navCtrl: NavController) {
    if (localStorage.getItem('tabIndex') != null && localStorage.getItem('tabIndex')) {
      this.tabId = localStorage.getItem('tabIndex');
    } else {
      this.tabId = 1;
    }
  }

  ngOnInit() { }

  goTo(id) {
    this.tabId = id;
    console.log(this.tabId, id)
    localStorage.setItem('tabIndex', id);
    if (id == 1) {
      this.navCtrl.navigateRoot('/home');
      // return true;
    }
    else if (id == 2) {
      this.navCtrl.navigateRoot('/offers');
      // return true;
    }
    else if (id == 3) {
      this.navCtrl.navigateRoot('/account-detail');
      // return true;
    }
  }

}
