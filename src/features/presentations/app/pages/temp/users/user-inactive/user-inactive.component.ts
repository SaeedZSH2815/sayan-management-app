import { Component } from '@angular/core';
import { UserService } from '../../../../../../../core/services/user.service';
import { AppUtility } from '../../../../../../../utils/utility';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-inactive',
  imports: [CommonModule],
  templateUrl: './user-inactive.component.html',
  styleUrl: './user-inactive.component.scss',
  providers:[AppUtility]

})
export class UserInactiveComponent {


 inactiveUsers? : string[];

 constructor(public userService : UserService,
             public appUtility  : AppUtility
 ){

 }
 
 ngOnInit(): void {
  this.inactiveUsers = this.userService.inactiveUsers; 
  
 }

 setActive(clId : number,clEvent : any):void{
  <PointerEvent>clEvent.preventDefault();
  this.userService.setToActive(clId);
   console.log(this.userService.activeUsers.length); 
 }
}
