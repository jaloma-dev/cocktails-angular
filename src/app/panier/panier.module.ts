import { NgModule } from '@angular/core';
import { PanierComponent } from './panier.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { SharedModule } from '../shared/modules/shared.module';
import { panierRouting } from './panier.routing';

@NgModule({
    declarations: [
        PanierComponent,
        IngredientsListComponent,
    ],
    imports: [
        SharedModule,
        panierRouting,
    ],
})
export class PanierModule {}