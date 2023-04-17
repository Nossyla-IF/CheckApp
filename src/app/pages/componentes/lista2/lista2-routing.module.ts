import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lista2Page } from './lista2.page';

const routes: Routes = [
  {
    path: '',
    component: Lista2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lista2PageRoutingModule {}
