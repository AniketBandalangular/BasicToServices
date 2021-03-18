import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/Ingredient.model";

export class ShoppingListService{
    selectIngredient=new EventEmitter<number>();
    saveingredient=new EventEmitter<Ingredient[]>();
    Ingredients:Ingredient[]=[new Ingredient("Apple",5),new Ingredient("Tomato",5)];
 
    getIngredients(){
        return this.Ingredients.slice();
    }
    getIngredientsByIndex(index:number){
        return this.Ingredients[index];
    }

    addIngredient(ingredient:Ingredient){
        //console.log("Hello i am in add ingredient method");
        this.Ingredients.push(ingredient);
        this.saveingredient.emit(this.Ingredients.slice());
    }
    addIngredients(ingredient:Ingredient[]){
        console.log("Hello i am in add ingredient method");
       // this.Ingredients=this.Ingredients.slice().concat(ingredient);
       this.Ingredients.push(...ingredient);
        console.log(this.Ingredients);
        this.saveingredient.emit(this.Ingredients.slice());
    }

    deleteIngredientByIndex(index:number){
        this.Ingredients.splice(index,1);
        this.saveingredient.emit(this.Ingredients.slice());
    }
}