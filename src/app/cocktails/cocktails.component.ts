import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../shared/models/cocktail.model';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.sass']
})
export class CocktailsComponent implements OnInit {

  constructor() { }

  public cocktails: Cocktail[] = [
    new Cocktail("Mojito","http://bigoven-res.cloudinary.com/image/upload/mojito-11.jpg", "The Mojito, from Cuba, is traditional, minty & refreshing. Perfect for a spring or summer meal; pairs well with grilled food and outdoor settings."),
    new Cocktail("Margarita", "https://cdn.liquor.com/wp-content/uploads/2018/04/23134943/Margarita-720x720-recipe-v2.jpg", "A margarita is a cocktail consisting of tequila, orange liqueur, and lime juice often served with salt on the rim of the glass. The drink is served shaken with ice, blended with ice, or without ice."),
    new Cocktail("Bloody Mary", "https://cdn.liquor.com/wp-content/uploads/2017/09/01105541/classic-bloody-mary-720x720-recipe.jpg", "A Bloody Mary is a cocktail containing vodka, tomato juice, and combinations of other spices and flavorings including Worcestershire sauce, hot sauces, garlic, herbs, horseradish, celery, olives, salt, black pepper, lemon juice, lime juice and/or celery salt."),
  ];

  public currentCocktail: Cocktail;
  
  changeCocktail(index: number): void {
    this.currentCocktail = this.cocktails[index];
  }
  
  ngOnInit() {
    this.currentCocktail = this.cocktails[0];
  }

}
