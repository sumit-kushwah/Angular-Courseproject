import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  recipes: Recipe[];
  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipeChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
  }
  onAddRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
