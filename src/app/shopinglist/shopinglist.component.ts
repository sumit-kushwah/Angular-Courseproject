import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShopinglistService } from './shopinglist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopinglist',
  templateUrl: './shopinglist.component.html',
  styleUrls: ['./shopinglist.component.css']
})
export class ShopinglistComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  firstsub : Subscription;
  constructor(private shopingListService: ShopinglistService) { }
  ngOnInit(): void {
    this.ingredients = this.shopingListService.ingredients;
    this.firstsub = this.shopingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[] ) => {
        this.ingredients = ingredients;
      }
    );
  }
  ngOnDestroy() {
    this.firstsub.unsubscribe();
    }
  onClickItem(index: number) {
    this.shopingListService.onEditShopingItem(index);
    }

}
