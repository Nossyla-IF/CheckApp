import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lista2PageRoutingModule } from './lista2-routing.module';

import { Lista2Page } from './lista2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lista2PageRoutingModule
  ],
  declarations: [Lista2Page]
})
export class Lista2PageModule {}
