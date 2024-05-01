import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamenDetallePageRoutingModule } from './examen-detalle-routing.module';

import { ExamenDetallePage } from './examen-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamenDetallePageRoutingModule
  ],
  declarations: [ExamenDetallePage]
})
export class ExamenDetallePageModule {}
