import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../../../core/services/user.service';
import { CommonModule } from '@angular/common';
import {AppUtility, sum} from '../../../../../../../utils/utility'

@Component({
  selector: 'app-user-active',
  imports: [CommonModule],
  templateUrl: './user-active.component.html',
  styleUrl: './user-active.component.scss',
  providers:[AppUtility]
})
export class UserActiveComponent implements OnInit {


 activeUsers? : string[];

 constructor(public userService : UserService,
             public appUtility  : AppUtility
 ){

 }
 
 ngOnInit(): void {
  this.activeUsers = this.userService.activeUsers; 
  
 }

 setInactive(clId : number,clEvent : any):void{
  <PointerEvent>clEvent.preventDefault();
  this.userService.setToInactive(clId);
   console.log(this.userService.activeUsers.length); 
 }
}
