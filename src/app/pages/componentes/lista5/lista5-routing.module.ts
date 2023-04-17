import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lista5Page } from './lista5.page';

const routes: Routes = [
  {
    path: '',
    component: Lista5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lista5PageRoutingModule {}
