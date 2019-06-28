import { Component, OnInit, Input } from '@angular/core';
import { Cocktail } from '../cocktail';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.sass']
})
export class CocktailsListComponent implements OnInit {
  
  @Input() public cocktails:Cocktail;
  
  constructor() { }

  ngOnInit() {
  }

}
