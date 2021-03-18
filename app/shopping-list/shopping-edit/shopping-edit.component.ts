import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/Ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  constructor(private slsService:ShoppingListService) { }
  public ingredient:Ingredient;
  public Ingredient_Index:number;
  @ViewChild("nameInput")namevalue:ElementRef;
  @ViewChild("amountInput")amaountvalue:ElementRef;
  onAddIngredients(){
    // this.newIngredient.emit(new Ingredient(name,amount));
    // this.newIngredient.emit(new Ingredient(this.namevalue.nativeElement.value,this.amaountvalue.nativeElement.value));
    this.slsService.addIngredient(new Ingredient(this.namevalue.nativeElement.value,this.amaountvalue.nativeElement.value));
    //this.slsService.Ingredients.push(new Ingredient(this.namevalue.nativeElement.value,this.amaountvalue.nativeElement.value));
  }

  deleteIngredients(){
 this.slsService.deleteIngredientByIndex(this.Ingredient_Index);
  }
  ngOnInit(): void {
    this.slsService.selectIngredient.subscribe((index:number)=>{
      this.Ingredient_Index=index;
      this.ingredient=this.slsService.getIngredientsByIndex(index);
      this.namevalue.nativeElement.value=this.ingredient.name;
      this.amaountvalue.nativeElement.value=this.ingredient.amount;
    })
  }

}
