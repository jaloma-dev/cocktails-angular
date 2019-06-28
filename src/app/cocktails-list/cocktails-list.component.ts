import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cocktail } from '../cocktail';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.sass']
})
export class CocktailsListComponent implements OnInit {
  
  @Input() public cocktails:Cocktail[];
  @Output() public changeC: EventEmitter<Cocktail> =  new EventEmitter<Cocktail>();

  constructor() { }

  changeCocktail(event, cocktail){
    event.preventDefault();
    this.changeC.emit(cocktail);
  }

  ngOnInit() {
  }

}
