import { Component } from '@angular/core';
import { AddCcountComponent } from '../add-ccount/add-ccount.component';

@Component({
  selector: 'app-account-page',
  imports: [AddCcountComponent],
  templateUrl: './account-page.component.html',
  styleUrl: './account-page.component.scss'
})
export class AccountPageComponent {

}
