import { Injectable } from '@angular/core';
import { Recipe } from '../recipeRenita/recipeRenita.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../sharedRenita/ingredientRenita.model';
import { ShoppingListRenitaService } from '../shopping-listRenita/shopping-listRenita.service';

@Injectable()
export class RecipeRenitaService {

  recipeRenitaSelected = new EventEmitter<Recipe>();

  recipes:Recipe[]=[
    new Recipe('Burger',
    'A hamburger with a rim of lettuce sitting on a black plate agains a black background',
    'https://upload.wikimedia.org/wikipedia/commons/6/62/NCI_Visuals_Food_Hamburger.jpg',
  [
    new Ingredient('meal',1),
    new Ingredient('tomato',2)
  ]),
    new Recipe('Special fried rice',
    'Fried rice is a dish of cooked rice that has been stir-fried in a wok or a'+ 
    'frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat. It is often eaten by itself or as an accompaniment to another dish.',
    '../src/app/img/nasi-goreng.jpg',
  [
    new Ingredient('rice',1),
    new Ingredient('meal',3),
    new Ingredient('egg',1)
  ]),
  ];

  getRecipes(){
    return this.recipes.slice();
  }
  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }
constructor(private slsService: ShoppingListRenitaService) { }

}
