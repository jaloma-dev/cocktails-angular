import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CocktailService } from 'src/app/shared/services/cocktail.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Cocktail } from 'src/app/shared/models/cocktail.model';

@Component({
  selector: 'app-cocktail-edit',
  templateUrl: './cocktail-edit.component.html',
  styleUrls: ['./cocktail-edit.component.sass']
})
export class CocktailEditComponent implements OnInit {

    public cocktailForm: FormGroup;
    public cocktail: Cocktail;
    private edit:boolean;

    constructor(
        private formBuilder: FormBuilder,
        private cocktailService: CocktailService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(( params: Params) => {
            if(params.index){
                this.cocktailService.getCocktail(params.index).subscribe( (cocktail:Cocktail) => {
                    this.cocktail = cocktail;
                    this.initForm(this.cocktail);
                });
                this.edit = true;
            } else {
                this.initForm();
                this.edit = false;
            }
        });

        
    }

    initForm(cocktail:Cocktail = { name: '', image: '', description: '', ingredients: []}){
        this.cocktailForm = this.formBuilder.group({
            name: [cocktail.name, Validators.required],
            image: [cocktail.image, Validators.required],
            description: [cocktail.description],
            ingredients: this.formBuilder.array(
                cocktail.ingredients.map(
                    ingredient => this.formBuilder.group({
                        name: [ingredient.name],
                        quantity: [ingredient.quantity]
                    })
                )
            )
        })
    }

    addIngredient() :void{
        (<FormArray>this.cocktailForm.get('ingredients')).controls.push(this.formBuilder.group({
            name: [''],
            quantity: ['']
        }));
    }

    removeIngredient(i) :void{
        (<FormArray>this.cocktailForm.get('ingredients')).removeAt(i);
    }

    addCocktail(): void{
        if(this.edit){
            this.cocktailService.editCocktail(this.cocktailForm.value);
        } else {
            this.cocktailService.addCocktail(this.cocktailForm.value);
        }
    }

}