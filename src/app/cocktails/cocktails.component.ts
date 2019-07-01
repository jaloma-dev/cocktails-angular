import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.sass'],
  providers: [CocktailService]
})
export class CocktailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
