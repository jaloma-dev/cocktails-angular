import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cocktail } from '../models/cocktail.model';
import { Ingredient } from '../models/ingredient.model';


@Injectable()
export class CocktailService {

  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject(
    [
      new Cocktail(
        "Mojito",
        "http://bigoven-res.cloudinary.com/image/upload/mojito-11.jpg",
        "The Mojito, from Cuba, is traditional, minty & refreshing. Perfect for a spring or summer meal; pairs well with grilled food and outdoor settings.",
        [
          new Ingredient('Citron vert', 1),
          new Ingredient('Rhum', 1.5),
          new Ingredient('Menthe', 6),
          new Ingredient('Eau gazeuse', 20),
          new Ingredient('Glaçon', 4),
          new Ingredient('Sucre', 2),
        ],
        ),
      new Cocktail(
        "Margarita",
        "https://cdn.liquor.com/wp-content/uploads/2018/04/23134943/Margarita-720x720-recipe-v2.jpg",
        "A margarita is a cocktail consisting of tequila, orange liqueur, and lime juice often served with salt on the rim of the glass. The drink is served shaken with ice, blended with ice, or without ice.",
        [
          new Ingredient('Tequila', 2),
          new Ingredient('Jus de citron vert', 1),
          new Ingredient('Cointreau', 1),
        ],
        ),
      new Cocktail(
        "Bloody Mary",
        "https://cdn.liquor.com/wp-content/uploads/2017/09/01105541/classic-bloody-mary-720x720-recipe.jpg",
        "A Bloody Mary is a cocktail containing vodka, tomato juice, and combinations of other spices and flavorings including Worcestershire sauce, hot sauces, garlic, herbs, horseradish, celery, olives, salt, black pepper, lemon juice, lime juice and/or celery salt.",
        [
          new Ingredient('Jus de citron', .5),
          new Ingredient('Vodka', 1.5),
          new Ingredient('Jus de tomate', 3),
          new Ingredient('Tabasco', 1),
          new Ingredient('Sel et poivre', 1),
        ],
        ),
    ]
  );

  public cocktail: BehaviorSubject<Cocktail> = new BehaviorSubject(this.cocktails.value[0]);

  constructor() { }

  getCocktail(index: number) :Cocktail{
    return this.cocktails.value[index];
  }

  addCocktail(cocktail: Cocktail): void{
    const cocktails = this.cocktails.value.slice();

    cocktails.push(
        new Cocktail(
            cocktail.name,
            cocktail.image,
            cocktail.description,
            cocktail.ingredients.map(
                ingredient => new Ingredient(ingredient.name, ingredient.quantity)
            )
        )
    )

    this.cocktails.next(cocktails);
  }

  editCocktail(editCocktail: Cocktail): void {
      const cocktails = this.cocktails.value.slice();
      const index = cocktails.findIndex(c => c.name === editCocktail.name);
      cocktails[index] = editCocktail;
      this.cocktails.next(cocktails);
  }
}
