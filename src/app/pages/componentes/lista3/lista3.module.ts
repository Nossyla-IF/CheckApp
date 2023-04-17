import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lista3PageRoutingModule } from './lista3-routing.module';

import { Lista3Page } from './lista3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lista3PageRoutingModule
  ],
  declarations: [Lista3Page]
})
export class Lista3PageModule {}
