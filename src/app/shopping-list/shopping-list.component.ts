import { Component, OnInit } from '@angular/core';
import {IngredientsModel as Ingredient } from "../shared/ingredients.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients = [new Ingredient('Apples',5)
,new Ingredient('Oranges',3)];
  constructor() { }

  ngOnInit(): void {
  }

}
