import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { ArrayFilterPipe } from '../../../../../../../core/pipes/array-filter.pipe';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from './shared/ingredient.model';
import { Subscription } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@Component({
  selector: 'app-shopping-form',
  imports: [CommonModule,ArrayFilterPipe,ShoppingEditComponent],
  templateUrl: './shopping-form.component.html',
  styleUrl: './shopping-form.component.scss',
  providers:[ShoppingListService]
})
export class ShoppingFormComponent implements OnInit,AfterViewInit,OnDestroy {

  ingredients: Ingredient[] = [];
  private subscription?: Subscription;
  constructor(private slService : ShoppingListService){

  }
  ngOnDestroy(): void {
    if(this.subscription)
      this.subscription.unsubscribe();
  }


  ngAfterViewInit(): void {

  }
  ngOnInit(): void {
   this.ingredients = this.slService.getIngredients();
   this.subscription = this.slService.ingredientsChanged.subscribe(
    (res:Ingredient[])=> this.ingredients = res
   );
  }

  onEdit(clIndex : number){
   this.slService.startedEditing.next(clIndex);
  }




}
