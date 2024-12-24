import { Component, Input } from '@angular/core';
import { AccountInterface } from '../../../../../../../core/interfaces-app/account-interface';
import { CommonModule } from '@angular/common';
import { AccountService } from '../../../../../../../core/services/account-service/account.service';

@Component({
  selector: 'app-account',
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {

  @Input({alias:"accountItem"}) accountItem? : AccountInterface;

  IsActive1 : boolean = true;

  constructor(private accountService : AccountService){

  }


  IsActive(clValue : string | undefined):boolean{
    clValue = clValue ?? "";
    if(this.accountItem)
    { if(clValue.includes("Active"))
       return true;
      else
      return false;}else return false;
  }

  onSetStatus(clValue : number){

    this.accountService.statusUpdatedEmit.emit(clValue == 1 ? "Active" : "Hidden");
  }
}
