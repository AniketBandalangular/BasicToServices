import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import{ Recipe }from'./recipe.model';

export class RecipeService{

    selectedRecipe=new EventEmitter<Recipe>();

    recipes:Recipe[]=[new Recipe("Test Recipe",
    "Test recipe description",
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/nutty-chicken-sate-strips-54be1ea.jpg",
    [new Ingredient("roti",2),new Ingredient("Potato",2)]),
    new Recipe("Another Test Recipe",
    "Test recipe description",
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2018%2F12%2F5302785.jpg",
    [new Ingredient("potato",2),new Ingredient("paav",1)]),
  ];
 
  getRecipes(){
      return this.recipes.slice();
  }
}