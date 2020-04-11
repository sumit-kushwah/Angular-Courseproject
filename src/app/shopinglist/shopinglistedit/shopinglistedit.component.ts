import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopinglistedit', // we can make it class also by using . operator
  templateUrl: './shopinglistedit.component.html',
  styleUrls: ['./shopinglistedit.component.css']
})
export class ShopinglisteditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
  constructor() { }
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() ingredientDeleted = new EventEmitter<void>();
  @Output() ingredientCleared = new EventEmitter<void>();
  ngOnInit(): void {
  }
  onGradientAdd() {
    const ingredient_name = this.nameInputRef.nativeElement.value;
    const ingredient_amount = this.amountInputRef.nativeElement.value;
    const ingredient_added = new Ingredient(ingredient_name, ingredient_amount);
    this.ingredientAdded.emit(ingredient_added);
  }
  onGradientDelete() {
    this.ingredientDeleted.emit();
  }
  onGradientClear() {
    this.ingredientCleared.emit();
  }
}
