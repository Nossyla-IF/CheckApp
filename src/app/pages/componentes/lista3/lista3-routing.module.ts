import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lista3Page } from './lista3.page';

const routes: Routes = [
  {
    path: '',
    component: Lista3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lista3PageRoutingModule {}
