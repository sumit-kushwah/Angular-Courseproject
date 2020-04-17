import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShopinglistService } from '../shopinglist/shopinglist.service';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class RecipeService {
    public recipeSelected = new Subject<Recipe>();
    public recipeChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [];
      constructor(private slService: ShopinglistService) {}
      getRecipes() {
          return this.recipes.slice();
      }
      getRecipe(index : number) {
          return this.recipes[index];
      }
      addToshopinglist(ingredients: Ingredient[]) {
          this.slService.addIngredients(ingredients);
      }
      addRecipe(recipe: Recipe) {
          this.recipes.push(recipe);
          this.recipeChanged.next(this.recipes.slice());
      }
      updateRecipes(newRecipe: Recipe, index: number) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
      }
      onDeleteRecipe(index: number) {
          this.recipes.splice(index, 1);
          this.recipeChanged.next(this.recipes.slice());
      }
      setRecipes(recipes: Recipe[]) {
          this.recipes = recipes;
          this.recipeChanged.next(this.recipes.slice());
      }
}