import { Component } from '@angular/core';
import { AccountService } from '../../../../../../../core/services/account-service/account.service';

@Component({
  selector: 'app-add-ccount',
  imports: [],
  templateUrl: './add-ccount.component.html',
  styleUrl: './add-ccount.component.scss'
})
export class AddCcountComponent {
  constructor(private ac : AccountService){
    this.ac.statusUpdatedEmit.subscribe((e)=>{console.log(e); alert(e)});

  }
}
