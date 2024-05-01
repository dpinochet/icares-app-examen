import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettimgsPageRoutingModule } from './settimgs-routing.module';

import { SettimgsPage } from './settimgs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettimgsPageRoutingModule
  ],
  declarations: [SettimgsPage]
})
export class SettimgsPageModule {}
