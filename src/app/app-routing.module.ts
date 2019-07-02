import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { PanierComponent } from './panier/panier.component';
import { CocktailDetailComponent } from './cocktails/cocktail-detail/cocktail-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
  { path: 'panier', component: PanierComponent },
  { path: 'cocktails', component: CocktailsComponent, children: [
    { path: ':index', component: CocktailDetailComponent },
    { path: '', component: CocktailDetailComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
