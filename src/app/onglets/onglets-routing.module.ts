import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OngletsPage } from './onglets.page';

const routes: Routes = [
  {
    path: '',
    component: OngletsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'favoris',
        loadChildren: () => import('../favoris/favoris.module').then( m => m.FavorisPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then( m => m.AboutPageModule)
      },
       {
        path: 'fruits',
        loadChildren: () => import('../fruits/fruits.module').then( m => m.FruitsPageModule)
      }
      // {
      //   path: 'onglets/home/detail-fruit',
      //   loadChildren: () => import('../detail-fruit/detail-fruit.module').then( m => m.DetailFruitPageModule)
      // },
    ]

  },
  {
    path: '',
    redirectTo: 'fruits',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OngletsPageRoutingModule {}
