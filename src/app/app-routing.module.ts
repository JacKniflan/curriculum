import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'habilidades',
    loadChildren: () => import('./pages/habilidades/habilidades.module').then(m => m.HabilidadesPageModule)
  },
  {
    path: 'sobre-mi',
    loadChildren: () => import('./pages/sobre-mi/sobre-mi.module').then(m => m.SobreMiPageModule)
  },
  {
    path: 'hobbies',
    loadChildren: () => import('./pages/hobbies/hobbies.module').then(m => m.HobbiesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
