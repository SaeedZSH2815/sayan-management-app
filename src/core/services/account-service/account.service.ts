import { EventEmitter, Injectable } from '@angular/core';
import { AccountInterface } from '../../interfaces-app/account-interface';
import { LogService } from '../log-service/log.service';

@Injectable()/* به  این معنی میباشد که میتواند سرویسی را inject کند */
export class AccountService {

 accountList? : AccountInterface[];

 statusUpdatedEmit = new EventEmitter<string>();

 constructor(private logService : LogService) {
  this.accountList = [];

  for (let I = 0; I < 10; I++)
  {
    this.accountList.push({AccountId:I,AccountName:"Account "+(I+1),Status:"Hidden"});

  }

  }


 updateStatus(clId : number,clStatus : string):void{
   if(this.accountList){
    this.accountList[clId].Status = clStatus;
   }
 }
}

