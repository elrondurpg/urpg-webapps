import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'stats/:name',
    loadChildren: () => import('./stats/stats.module').then(m => m.StatsModule)
  },
  {
    path: 'pokemon/:name',
    loadChildren: () => import('./pokedex/pokedex.module').then(m => m.PokedexModule)
  },
  {
    path: 'resources',
    loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule)
  }/*,
  {
    path: '**',
    loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
