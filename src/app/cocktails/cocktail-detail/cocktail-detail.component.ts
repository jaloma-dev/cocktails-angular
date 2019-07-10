import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/models/cocktail.model';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { PanierService } from 'src/app/shared/services/panier.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  styleUrls: ['./cocktail-detail.component.sass']
})
export class CocktailDetailComponent implements OnInit {


    public cocktail: Cocktail;
    public index: number;

    constructor(
        private cocktailService: CocktailService,
        private activatedRoute: ActivatedRoute,
        private panierService: PanierService,
    ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe( (params: Params) => {
        if(params.index){
            this.index = params.index;
        } else {
            this.index = 0;
        }
        this.cocktail = this.cocktailService.getCocktail(this.index);
        })
    }

    addToCard() :void{
        this.panierService.addIngredients(this.cocktail.ingredients);
    }

    getUrl() :string[]{
        return ['/cocktails', this.index + '', 'edit']
    }

}
