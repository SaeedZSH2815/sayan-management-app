import { Component } from '@angular/core';
import { UserActiveComponent } from '../user-active/user-active.component';
import { UserInactiveComponent } from '../user-inactive/user-inactive.component';
import { UserService } from '../../../../../../../core/services/user.service';

@Component({
  selector: 'app-users',
  imports: [UserActiveComponent,UserInactiveComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  providers:[UserService]
})
export class UsersComponent {

}
