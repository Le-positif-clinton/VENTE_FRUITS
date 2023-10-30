import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
    // children: [
    //   {
    //     path: 'detail-fruit',
    //     loadChildren: () => import('../detail-fruit/detail-fruit.module').then( m => m.DetailFruitPageModule)
    //   },
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
