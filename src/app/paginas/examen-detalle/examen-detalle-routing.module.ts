import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamenDetallePage } from './examen-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: ExamenDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamenDetallePageRoutingModule {}
