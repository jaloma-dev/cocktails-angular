import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { PanierService } from 'src/app/shared/services/panier.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.sass']
})
export class IngredientsListComponent implements OnInit, OnDestroy {
  public ingredients: Ingredient[] = [];
  private subscribtion: Subscription;
  
  constructor(
    private panierService: PanierService,
  ) { }

  ngOnInit() {
    this.subscribtion = this.panierService.panier.subscribe( (ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    })
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }

}
