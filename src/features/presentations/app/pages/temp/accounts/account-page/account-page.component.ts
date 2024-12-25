import { Component } from '@angular/core';
import { AccountComponent } from '../account/account.component';
import { CommonModule } from '@angular/common';
import { AccountService } from '../../../../../../../core/services/account-service/account.service';
import { AccountInterface } from '../../../../../../../core/interfaces-app/account-interface';
import { AddAccountComponent } from '../add-ccount/add-account.component';

@Component({
  selector: 'app-account-page',
  imports: [CommonModule,AddAccountComponent,AccountComponent],
  templateUrl: './account-page.component.html',
  styleUrl: './account-page.component.scss'
})
export class AccountPageComponent {
  accountList? : AccountInterface[];


  constructor(private accountService : AccountService){
    this.accountList = this.accountService.accountList;
  }
}
