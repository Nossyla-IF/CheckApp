import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista-de-compras',
    pathMatch: 'full'
  },
  
  {
    path: 'home',
    loadChildren: () => import('./pages/componentes/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'lista-de-compras',
    loadChildren: () => import('./pages/componentes/lista-de-compras/lista-de-compras.module').then( m => m.ListaDeComprasPageModule)
  },
  {
    path: 'lista1',
    loadChildren: () => import('./pages/componentes/lista1/lista1.module').then( m => m.Lista1PageModule)
  },
  {
    path: 'lista2',
    loadChildren: () => import('./pages/componentes/lista2/lista2.module').then( m => m.Lista2PageModule)
  },
  {
    path: 'lista3',
    loadChildren: () => import('./pages/componentes/lista3/lista3.module').then( m => m.Lista3PageModule)
  },
  {
    path: 'lista4',
    loadChildren: () => import('./pages/componentes/lista4/lista4.module').then( m => m.Lista4PageModule)
  },
  {
    path: 'lista5',
    loadChildren: () => import('./pages/componentes/lista5/lista5.module').then( m => m.Lista5PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
