import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("first recipe", "this is good Recipe", "https://image.shutterstock.com/image-photo/red-apple-on-white-background-260nw-158989157.jpg"),
    new Recipe("second recipe", "this is good Recipe", "https://image.shutterstock.com/image-photo/red-apple-on-white-background-260nw-158989157.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }
  @Output() recipeWasSelected = new  EventEmitter<Recipe>();

  setSelectedRecipe(recipe: Recipe) {
    // console.log("selected here also");
    this.recipeWasSelected.emit(recipe);
  }
}
