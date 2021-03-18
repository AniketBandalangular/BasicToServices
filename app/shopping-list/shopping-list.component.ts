import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.model';
import { ShoppingListService } from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  Ingredients:Ingredient[];//=[new Ingredient("Apple",5),new Ingredient("Tomato",5)];

  constructor(private slService:ShoppingListService) { }

  selectIngredient(i:number){
 this.slService.selectIngredient.emit(i);
  }



  ngOnInit(): void {
    this.Ingredients=this.slService.getIngredients();
    this.slService.saveingredient.subscribe((ingredients:Ingredient[])=>{
      this.Ingredients=ingredients;
    })
  }


}
