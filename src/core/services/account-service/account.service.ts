import { Injectable } from '@angular/core';
import { AccountInterface } from '../../interfaces-app/account-interface';


export class AccountService {

 accountList? : AccountInterface[];
 constructor() { 
  this.accountList = [];  
  
  for (let I = 0; I < 10; I++) 
  {
    this.accountList.push({AccountId:I,AccountName:"Account"+I}); 
   
  }
  
}
 
 

}

