import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from '../cocktail';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.sass']
})
export class CocktailDetailComponent implements OnInit {
  @Input() public currentCocktail: Cocktail;

  constructor() { }

  ngOnInit() {
  }

}
