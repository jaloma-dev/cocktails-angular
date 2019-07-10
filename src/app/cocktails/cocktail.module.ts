import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CocktailsComponent } from './cocktails.component';
import { CocktailDetailComponent } from './cocktail-detail/cocktail-detail.component';
import { CocktailEditComponent } from './cocktail-edit/cocktail-edit.component';
import { FilterCocktailPipe } from '../shared/filters/filter-cocktail.pipe';
import { CocktailsListComponent } from './cocktails-list/cocktails-list.component';
import { cocktailRouting } from './cocktail.routing';
import { SharedModule } from '../shared/modules/shared.module';


@NgModule({
    declarations: [
        CocktailsComponent,
        CocktailDetailComponent,
        CocktailEditComponent,
        FilterCocktailPipe,
        CocktailsListComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        cocktailRouting,
        SharedModule,
    ],
    providers: [],
    exports: [],
})
export class CocktailModule {}