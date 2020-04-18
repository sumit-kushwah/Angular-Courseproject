import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShopinglistService } from '../shopinglist.service';

@Component({
	selector: 'app-shopinglistedit',
	templateUrl: './shopinglistedit.component.html',
	styleUrls: ['./shopinglistedit.component.css']
})
export class ShopinglisteditComponent implements OnInit, OnDestroy {

	editMode = false;
	editItemId: number;
	@ViewChild('f', { static: false }) ngform: NgForm;
	editedItem: Ingredient;
	subscription: Subscription;

	constructor(private shopingListService: ShopinglistService) { }
	ngOnInit(): void {
		// intially this code will not work
		this.subscription = this.shopingListService.editingSubject.subscribe(
			(index: number) => {
				this.editMode = true;
				this.editItemId = index;
				this.editedItem = this.shopingListService.getIngredient(index);
				this.ngform.setValue({
					name: this.editedItem.name,
					amount: this.editedItem.amount
				});
			}
		);
	}
	onSubmit(form: NgForm) {
		if (this.editMode) {
			this.shopingListService.updateIngredient(this.editItemId, form.value);
		} else {
			this.shopingListService.addIngredient(form.value);
		}
		this.ngform.reset();
		this.editMode = false;
	}
	onClear() {
		this.editMode = false;
		this.ngform.reset();
	}
	onDeleteIngredient() {
		this.onClear();
		this.shopingListService.onDeleteIngredient(this.editItemId);
	}
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
