import { Component } from '@angular/core';
import { Cocktail } from './cocktail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public cocktails: Cocktail[] = [
    new Cocktail("Mojito","http://bigoven-res.cloudinary.com/image/upload/mojito-11.jpg", "The Mojito, from Cuba, is traditional, minty & refreshing. Perfect for a spring or summer meal; pairs well with grilled food and outdoor settings."),
    new Cocktail("Margarita", "https://cdn.liquor.com/wp-content/uploads/2018/04/23134943/Margarita-720x720-recipe-v2.jpg", "A margarita is a cocktail consisting of tequila, orange liqueur, and lime juice often served with salt on the rim of the glass. The drink is served shaken with ice, blended with ice, or without ice."),
    new Cocktail("Bloody Mary", "https://cdn.liquor.com/wp-content/uploads/2017/09/01105541/classic-bloody-mary-720x720-recipe.jpg", "A Bloody Mary is a cocktail containing vodka, tomato juice, and combinations of other spices and flavorings including Worcestershire sauce, hot sauces, garlic, herbs, horseradish, celery, olives, salt, black pepper, lemon juice, lime juice and/or celery salt."),
  ];
  public currentCocktail: Cocktail = cocktails[0];
}
