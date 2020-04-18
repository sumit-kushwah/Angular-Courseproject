import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    public recipesChanged$ = new Subject<Recipe[]>();
    private recipes: Recipe[] = []; // represents recipe list for whole application

    constructor() { }

    // all functions below either affects or retrieve recipe list data 

    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index: number) {
        return this.recipes[index];
    }
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged$.next(this.recipes.slice());
    }
    updateRecipe(newRecipe: Recipe, index: number) {
        this.recipes[index] = newRecipe;
        this.recipesChanged$.next(this.recipes.slice());
    }
    onDeleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged$.next(this.recipes.slice());
    }
    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged$.next(this.recipes.slice());
    }
}