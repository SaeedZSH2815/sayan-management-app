import { Component, Input } from '@angular/core';
import { AccountInterface } from '../../../../../../../core/interfaces-app/account-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account',
  imports: [CommonModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  @Input({alias:"accountItem"}) accountItem? : AccountInterface;
}
