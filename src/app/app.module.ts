import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ShopinglistComponent } from './shopinglist/shopinglist.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShopinglisteditComponent } from './shopinglist/shopinglistedit/shopinglistedit.component';
import { RecipelistComponent } from './recipes/recipelist/recipelist.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import { headerComponent } from './header/header.component';
import { RecipeitemComponent } from './recipes/recipelist/recipeitem/recipeitem.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShopinglistService } from './shopinglist/shopinglist.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

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
    DropdownDirective,
    PageNotFoundComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ShopinglistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
