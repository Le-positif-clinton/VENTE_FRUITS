import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailFruitPageRoutingModule } from './detail-fruit-routing.module';

import { DetailFruitPage } from './detail-fruit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailFruitPageRoutingModule
  ],
  declarations: [DetailFruitPage]
})
export class DetailFruitPageModule {}
