import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from 'src/app/shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.sass']
})
export class CocktailDetailComponent implements OnInit {

  public cocktail: Cocktail;

  constructor(private Cocktailservice: CocktailService) { }

  ngOnInit() {
    this.Cocktailservice.cocktail.subscribe( (cocktail: Cocktail) => {
      this.cocktail = cocktail;
    })
  }

}
