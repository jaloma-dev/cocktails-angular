import { RouterModule, Route } from '@angular/router';
import { CocktailsComponent } from './cocktails.component';
import { CocktailEditComponent } from './cocktail-edit/cocktail-edit.component';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';

const COCKTAIL_ROUTES: Route[] = [
    { path: 'cocktails', component: CocktailsComponent, children: [
        { path: 'new', component: CocktailEditComponent },
        { path: ':index', component: CocktailDetailComponent },
        { path: ':index/edit', component: CocktailEditComponent },
        { path: '', component: CocktailDetailComponent },
    ]},
]

export const cocktailRouting = RouterModule.forChild(COCKTAIL_ROUTES)