import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShopinglistService } from 'src/app/shopinglist/shopinglist.service';

@Component({
    selector: 'app-recipedetail',
    templateUrl: './recipedetail.component.html',
    styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {

    recipe: Recipe;
    id: number;

    constructor(private recipeService: RecipeService,
        private slService: ShopinglistService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit(): void {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.recipe = this.recipeService.getRecipe(this.id);
            }
        );
    }
    addToshopingList() { // add all ingredients of current recipe to shoping list 
        this.slService.addIngredients(this.recipe.ingredients);
    }
    onEditRecipe() {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }
    onDeleteRecipe() {
        this.recipeService.onDeleteRecipe(this.id);
        this.router.navigate(["../"], { relativeTo: this.route })
    }

}
