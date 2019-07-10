import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { FilterCocktailPipe } from 'src/app/shared/filters/filter-cocktail.pipe';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.sass'],
  providers: [FilterCocktailPipe],
})
export class CocktailsListComponent implements OnInit {

  public cocktails: Cocktail[];
  public activeCocktail: number = 0;
  public search: string;

  constructor(private cocktailService: CocktailService) { }

  ngOnInit() {
    this.cocktailService.cocktails.subscribe( (cocktails: Cocktail[]) => {
      this.cocktails = cocktails;
    })
  }

}
