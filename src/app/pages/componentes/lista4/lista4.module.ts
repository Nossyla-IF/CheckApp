import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lista4PageRoutingModule } from './lista4-routing.module';

import { Lista4Page } from './lista4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lista4PageRoutingModule
  ],
  declarations: [Lista4Page]
})
export class Lista4PageModule {}
