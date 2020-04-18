import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShopinglistService } from './shopinglist.service';

@Component({
	selector: 'app-shopinglist',
	templateUrl: './shopinglist.component.html',
	styleUrls: ['./shopinglist.component.css']
})
export class ShopinglistComponent implements OnInit, OnDestroy {

	ingredients: Ingredient[] = [];
	subscription: Subscription;

	constructor(private shopingListService: ShopinglistService) { }
	ngOnInit(): void {
		this.ingredients = this.shopingListService.getIngredients();
		this.subscription = this.shopingListService.ingredientsChanged.subscribe(
			(ingredients: Ingredient[]) => {
				this.ingredients = ingredients;
			}
		);
	}
	onClickItem(index: number) {
		this.shopingListService.onEditIngredient(index);
	}
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
