import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexComponent } from './pokedex.component';
import { HomeComponent } from './v1/home/home.component';


const routes: Routes = [
  {
    path: ':name',
    component: PokedexComponent
  },
  { 
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
