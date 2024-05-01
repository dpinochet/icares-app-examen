import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalOrderPage } from './modal-order.page';

const routes: Routes = [
  {
    path: '',
    component: ModalOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalOrderPageRoutingModule {}
