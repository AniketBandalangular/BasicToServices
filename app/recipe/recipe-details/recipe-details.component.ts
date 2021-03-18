import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shoppinglist.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input()recipe:Recipe;
  constructor(private slsService:ShoppingListService) { }

  toAddIntoShoppingList(){
    this.slsService.addIngredients(this.recipe.Igredients);
  }

  ngOnInit(): void {
  }

}
