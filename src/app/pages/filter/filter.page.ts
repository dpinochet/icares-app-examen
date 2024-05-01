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
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  plt;
  id;
  id_cuisines;
  filters = [
    'Most Popular',
    'Price High to Low',
    'Price Low to High',
    'Nearest to me'
  ];

  foods = ['All', 'Japanese', 'Pizza', 'American', 'Thai', 'Greek', 'Italian', 'Asian', 'Dessert', 'Mexican']
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

  click_filter(value) {
    console.log(value);
    this.id = value;
  }

  click_filter_cuisines(value) {
    console.log(value);
    this.id_cuisines = value;
  }

  goBack() {
    this.navCtrl.back();
  }
  goToChat() {

  }
  ApplyFilter() {
    this.goBack();
  }

}
