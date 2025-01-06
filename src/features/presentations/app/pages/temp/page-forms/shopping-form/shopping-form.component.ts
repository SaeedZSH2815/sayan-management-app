import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { ShortLengthPipe } from '../../../../../../../core/pipes/short-length.pipe';
import { ArrayFilterPipe } from '../../../../../../../core/pipes/array-filter.pipe';

@Component({
  selector: 'app-shopping-form',
  imports: [FormsModule,ReactiveFormsModule,CommonModule,ShortLengthPipe,ArrayFilterPipe],
  templateUrl: './shopping-form.component.html',
  styleUrl: './shopping-form.component.scss'
})
export class ShoppingFormComponent implements OnInit,AfterViewInit {
  ngAfterViewInit(): void {
  
  }
  @ViewChild("shoppingForm") shoppingForm! : NgForm;
  
  ngOnInit(): void {
    let x = "asd";
    for (let index = 0; index < 10000; index++) {
      this.shoppingList.push({productId:index+1,productName:"bread"+index});
      
    }
  }

  projectNameCaption = "Project Name Caption";
  amountInputPattern = "/[^0-9]/g";
  shoppingList : {productName:string,productId:number}[] = 
  [
    {productId:1,productName:"bread"}
  ];

  addSubmitShopingForm(clShoppingForm : NgForm){
    this.shoppingList.push({productId:2,productName:"bread1"});
    if(!this.shoppingForm.controls["productName"].valid)
      alert("Product Name Invalid");
    //if(clShoppingForm.getContr
    console.log(this.shoppingForm.controls);
  }

}
