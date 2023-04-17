import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lista5PageRoutingModule } from './lista5-routing.module';

import { Lista5Page } from './lista5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lista5PageRoutingModule
  ],
  declarations: [Lista5Page]
})
export class Lista5PageModule {}
