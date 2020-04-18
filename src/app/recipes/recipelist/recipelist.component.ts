import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipe.model'
import { RecipeService } from '../recipe.service';

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
        this.recipeService.recipesChanged$.subscribe(
            (recipes: Recipe[]) => {
                this.recipes = recipes;
            }
        );
    }
    onAddRecipe() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }
}
