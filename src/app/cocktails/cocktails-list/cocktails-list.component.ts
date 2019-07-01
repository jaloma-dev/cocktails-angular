import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.sass']
})
export class CocktailsListComponent implements OnInit {
  
  @Input() public cocktails:Cocktail[];
  @Output() public changeC: EventEmitter<Cocktail> =  new EventEmitter<Cocktail>();

  public activeCocktail: number = 0;

  constructor() { }

  changeCocktail(event, index): void{
    event.preventDefault();
    this.activeCocktail = index;
    this.changeC.emit(index);
  }

  ngOnInit() {
  }

}
