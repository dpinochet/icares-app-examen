/*

  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  Created : 17-March-2020
  This App Template Source code is licensed as per the 
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.

*/
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  all_messages = [
    {
      side: 'left',
      message: 'Hii'
    },
    {
      side: 'right',
      message: 'Hello'
    },
    {
      side: 'left',
      message: 'How are you',
    },
    {
      side: 'left',
      message: '??',
    },
    {
      side: 'right',
      message: 'I am Fine !!'
    },
    {
      side: 'left',
      message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      side: 'right',
      message: 'It is a long established fact that a reader will be distracted by the readable content.',
    }
  ];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

}
