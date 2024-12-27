import { Component } from '@angular/core';
import { AccountService } from '../../../../../../../core/services/account-service/account.service';

@Component({
  selector: 'app-add-ccount',
  imports: [],
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.scss'
})
export class AddAccountComponent {
  constructor(private ac : AccountService){
    this.ac.statusUpdatedEmit.subscribe((e)=>{console.log(e); alert(e)});

  }
}
