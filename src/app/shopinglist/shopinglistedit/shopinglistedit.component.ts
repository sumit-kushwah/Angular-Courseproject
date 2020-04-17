import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShopinglistService } from '../shopinglist.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopinglistedit', // we can make it class also by using . operator
  templateUrl: './shopinglistedit.component.html',
  styleUrls: ['./shopinglistedit.component.css']
})
export class ShopinglisteditComponent implements OnInit, OnDestroy {
  subscription : Subscription;
  editMode = false;
  editItemId : number;
  @ViewChild('f', {static: false}) ngform: NgForm;
  editedItem: Ingredient;
  constructor( private shopingListService: ShopinglistService) { }
  ngOnInit(): void {
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
    const value = form.value;
    const ingredient_added = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shopingListService.updateItem(this.editItemId, ingredient_added);
    } else {
      this.shopingListService.addIngredient(ingredient_added);
    }   
    this.ngform.reset();
    this.editMode = false;
  }
  onClear() {
    this.editMode = false;
    this.ngform.reset();
  // this.shopingListService.ingredients = [];
  // this.shopingListService.ingredientsChanged.next(this.shopingListService.ingredients.slice());
  }
  onDeleteItem() {
    // this.shopingListService.ingredients.
    this.onClear();
    this.shopingListService.onDeleteItem(this.editItemId);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
