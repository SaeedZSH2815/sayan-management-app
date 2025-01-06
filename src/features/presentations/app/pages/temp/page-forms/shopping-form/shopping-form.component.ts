import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-form',
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './shopping-form.component.html',
  styleUrl: './shopping-form.component.scss'
})
export class ShoppingFormComponent implements OnInit,AfterViewInit {
  ngAfterViewInit(): void {
  
  }
  @ViewChild("shoppingForm") shoppingForm! : NgForm;
  
  ngOnInit(): void {
    let x = "asd";
    
  }

  amountInputPattern = "/[^0-9]/g";
  
  addSubmitShopingForm(clShoppingForm : NgForm){
    if(!this.shoppingForm.controls["productName"].valid)
      alert("Product Name Invalid");
    //if(clShoppingForm.getContr
    console.log(this.shoppingForm.controls);
  }

}
