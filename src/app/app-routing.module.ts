import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ShopinglistComponent } from './shopinglist/shopinglist.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeResolverServcie } from './recipes/recipes-resolver.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: "", redirectTo: '/recipies', pathMatch: 'full' },
    { path: "shopinglist", component: ShopinglistComponent },
    {
        path: "recipies", component: RecipesComponent, children: [
            { path: "", component: RecipeStartComponent },
            { path: "new", component: RecipeEditComponent },
            { path: ":id", component: RecipedetailComponent, resolve: [RecipeResolverServcie] },
            { path: ":id/edit", component: RecipeEditComponent, resolve: [RecipeResolverServcie] }
        ]
    },
    { path: "**", component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
