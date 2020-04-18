import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {

    subscription: Subscription;
    id: number;
    editmode = false;
    recipeForm: FormGroup;
    recipe: Recipe;

    constructor(
        private route: ActivatedRoute,
        private recipeService: RecipeService,
        private router: Router) { }

    ngOnInit(): void {
        this.subscription = this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.editmode = params['id'] != null;
                this.initializeForm();
            }
        );
    }
    //intialization of the form before loading recipeEdit component
    initializeForm() {
        let recipeName = '';
        let recipeImagePath = '';
        let recipeDescription = '';
        let ingredientArray = new FormArray([]);

        // setting input fields form-controls values of form in editing mode
        if (this.editmode) {
            this.recipe = this.recipeService.getRecipe(this.id);
            recipeName = this.recipe.name;
            recipeImagePath = this.recipe.imagePath;
            recipeDescription = this.recipe.description;
            if (this.recipe['ingredients']) {
                for (let ingredient of this.recipe.ingredients) {
                    ingredientArray.push(
                        new FormGroup({
                            'name': new FormControl(ingredient.name, Validators.required),
                            'amount': new FormControl(ingredient.amount, Validators.pattern(/^[1-9]+[0-9]*$/))
                        })
                    );
                }
            }
        }
        this.recipeForm = new FormGroup({
            'name': new FormControl(recipeName, Validators.required),
            'imagePath': new FormControl(recipeImagePath, Validators.required),
            'description': new FormControl(recipeDescription, Validators.required),
            'ingredients': ingredientArray
        });
    }
    onSubmit() {
        if (this.editmode) {
            this.recipeService.updateRecipe(this.recipeForm.value, this.id);
        } else {
            this.recipeService.addRecipe(this.recipeForm.value);
        }
        this.router.navigate(["../"], { relativeTo: this.route });
    }
    onCancel() {
        this.router.navigate(["../"], { relativeTo: this.route });
    }
    // return a formarray of formcontrols
    getControls() {
        return (<FormArray>this.recipeForm.get('ingredients')).controls;
    }
    onAddIngredient() {
        (<FormArray>this.recipeForm.get('ingredients')).push(
            new FormGroup(
                {
                    'name': new FormControl(null, Validators.required),
                    'amount': new FormControl(null, Validators.pattern(/^[1-9]+[0-9]*$/))
                }
            )
        );
    }
    ondeleteIngredient(index: number) {
        (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
