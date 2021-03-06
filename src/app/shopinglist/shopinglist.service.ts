import { Injectable} from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ShopinglistService {

    ingredientsChanged = new Subject<Ingredient[]>();
    editingSubject = new Subject<number>();
    ingredients: Ingredient[] = []; // represents shoping list ingredients for whole app

    getIngredient(index: number) {
        return this.ingredients[index];
    }
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
    onEditIngredient(index: number) {
        this.editingSubject.next(index);
    }
    updateIngredient(index: number, new_ingredient: Ingredient) {
        this.ingredients[index] = new_ingredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    onDeleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}