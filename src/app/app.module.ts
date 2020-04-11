import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopinglistComponent } from './shopinglist/shopinglist.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShopinglisteditComponent } from './shopinglist/shopinglistedit/shopinglistedit.component';
import { RecipelistComponent } from './recipes/recipelist/recipelist.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import { headerComponent } from './header/header.component';
import { RecipeitemComponent } from './recipes/recipelist/recipeitem/recipeitem.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShopinglistComponent,
    RecipesComponent,
    ShopinglisteditComponent,
    RecipedetailComponent,
    headerComponent,
    RecipeitemComponent,
    RecipelistComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
