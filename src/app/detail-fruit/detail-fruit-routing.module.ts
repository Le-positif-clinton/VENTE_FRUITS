import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailFruitPage } from './detail-fruit.page';

const routes: Routes = [
  {
    path: '',
    component: DetailFruitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailFruitPageRoutingModule {}
