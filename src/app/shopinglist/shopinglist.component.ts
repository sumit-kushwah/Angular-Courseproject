import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopinglist',
  templateUrl: './shopinglist.component.html',
  styleUrls: ['./shopinglist.component.css']
})
export class ShopinglistComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  AddtoIngredientList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
