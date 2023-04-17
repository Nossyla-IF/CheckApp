import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lista4Page } from './lista4.page';

const routes: Routes = [
  {
    path: '',
    component: Lista4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lista4PageRoutingModule {}
