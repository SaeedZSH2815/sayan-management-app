import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { ArrayFilterPipe } from '../../../../../../../../core/pipes/array-filter.pipe';
import { ShortLengthPipe } from '../../../../../../../../core/pipes/short-length.pipe';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import * as data from "../../../../../../../../../public/assets/adm.json"

@Component({
  selector: 'app-shopping-edit',
  imports: [FormsModule,ReactiveFormsModule,CommonModule,ShortLengthPipe,ArrayFilterPipe],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.scss'
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
    @ViewChild("shoppingForm") shoppingForm! : NgForm;

    projectNameCaption = "Project Name Caption";
    amountInputPattern = "^[1-9]+[0-9]*$";
    subscription? : Subscription;
    shoppingList : {productName:string,productId:number}[] =
    [
      {productId:1,productName:"bread"}
    ];

    editMode : boolean = false;
    editItemIndex?:number;
    editItem? : Ingredient;
   constructor(private slService:ShoppingListService){

   }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    console.log( data);
    console.log( '/public/assets/adm.json' );


    this.subscription = this.slService.startedEditing.subscribe(
      (res:number)=>{
        //console.log("edit",res);
        this.editMode = true;
        this.editItemIndex = res;
        this.editItem = this.slService.getIngredient(res);
        this.shoppingForm.form.patchValue({"productName":this.editItem.name});
        this.shoppingForm.form.patchValue({"amount":this.editItem.amount});
      }
    );
  }



    addSubmitShopingForm(clShoppingForm : NgForm){
      //this.shoppingList.push({productId:2,productName:"bread1"});
      //if(!this.shoppingForm.controls["productName"].valid)
      //  alert("Product Name Invalid");

      const frmValues = clShoppingForm.value;
      console.log(frmValues);
      const newItem = new Ingredient(frmValues["productName"],frmValues["amount"]);
      if(this.editMode)
      {
        this.slService.updateIngredient(this.editItemIndex!,newItem);
      }
      else
      this.slService.addIngredient(newItem);
      clShoppingForm.reset();
    }








}


