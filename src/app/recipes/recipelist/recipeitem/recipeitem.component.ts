import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() { }
  ngOnInit(): void {
  }
  @Output() selRecipe = new EventEmitter<void>();
  selectedRecipe() {
    // console.log("selected");
    this.selRecipe.emit();
  }
}
