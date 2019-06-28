import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.sass']
})
export class CocktailDetailComponent implements OnInit {
  public cocktail: Cocktail = new Cocktail("Mojito", "http://bigoven-res.cloudinary.com/image/upload/mojito-11.jpg", "The Mojito, from Cuba, is traditional, minty & refreshing. Perfect for a spring or summer meal; pairs well with grilled food and outdoor settings.");

  constructor() { }

  ngOnInit() {
  }

}
