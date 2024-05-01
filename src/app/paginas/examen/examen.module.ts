import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamenPageRoutingModule } from './examen-routing.module';

import { ExamenPage } from './examen.page';
import { ApiService } from 'src/app/servicios/api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamenPageRoutingModule
  ],
  providers: [
   ApiService
  ],
  declarations: [ExamenPage]
})
export class ExamenPageModule {}
