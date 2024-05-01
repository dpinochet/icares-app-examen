import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalOrderPageRoutingModule } from './modal-order-routing.module';

import { ModalOrderPage } from './modal-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalOrderPageRoutingModule
  ],
  declarations: [ModalOrderPage]
})
export class ModalOrderPageModule {}
