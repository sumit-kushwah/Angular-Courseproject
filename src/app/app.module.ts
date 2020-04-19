import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { headerComponent } from './header/header.component';

import { ShopinglistComponent } from './shopinglist/shopinglist.component';
import { ShopinglisteditComponent } from './shopinglist/shopinglistedit/shopinglistedit.component';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipelistComponent } from './recipes/recipelist/recipelist.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeitemComponent } from './recipes/recipelist/recipeitem/recipeitem.component';

import { DropdownDirective } from './shared/dropdown.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

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
		RecipeEditComponent,
		AuthComponent,
		LoadingSpinnerComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
	bootstrap: [AppComponent]
})
export class AppModule { }
