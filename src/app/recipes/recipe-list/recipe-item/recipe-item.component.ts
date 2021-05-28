import { Component, OnInit,Input } from '@angular/core';
import { RecipeModel as Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe!: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
