import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
   recipeDetail: Recipe;
   id: number;
  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeDetail = this.recipeService.getRecipe(+params['id']);
      }
    );
    console.log(this.recipeDetail);
  }
  addToshopingList() {
  this.recipeService.addToshopinglist(this.recipeDetail.ingredients);
    }
    onEditRecipe() {
      this.router.navigate(['edit'], {relativeTo: this.route});
    }
    onDeleteRecipe() {
      this.recipeService.onDeleteRecipe(this.id);
      this.router.navigate(["../"], {relativeTo: this.route})
    }
}
