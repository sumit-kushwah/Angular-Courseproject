import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
// import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShopinglistService {
    ingredientsChanged = new Subject<Ingredient[]>();
    editingSubject = new Subject<number>();
    ingredients: Ingredient[] = [];
    public ingredientAdded = new EventEmitter<Ingredient>();
    getIngredients() {
        return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    onEditShopingItem(index: number) {
        this.editingSubject.next(index);
    }
    getIngredient(index: number) {
        return this.ingredients[index];
    }
    updateItem(index: number, new_ingredient: Ingredient) {
        this.ingredients[index] = new_ingredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    onDeleteItem(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}