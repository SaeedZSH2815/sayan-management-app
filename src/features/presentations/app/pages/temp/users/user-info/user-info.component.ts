import { CommonModule } from '@angular/common';
import { CompilerConfig } from '@angular/compiler';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AppUtility } from '../../../../../../../utils/utility';
import { AuthService } from '../../../../../../../core/services/auth.service';
import { UserService } from '../../../../../../../core/services/user.service';
import { FormsModule } from '@angular/forms';
import { CanDeactiveComponent } from './can-deactive-user-detail.guard';

@Component({
  selector: 'app-user-info',
  imports: [CommonModule,FormsModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent implements OnInit,OnDestroy, CanDeactiveComponent {


  auth = inject(AuthService);
  userService = inject(UserService);

  userName : string = "";
  txtUserName : string = "";
  private _userStateCode : number = -1;
  userId : number = -1;

  public set userStateCode(clValue : number) {
    this._userStateCode = clValue;
    if(this.userId>=0){
     this.userName = this.userService.activeUsers[this.userId];
     this.txtUserName = this.userService.activeUsers[this.userId];
     console.log("User :",this.userService.activeUsers[this.userId])}
    else
     {this.userName = "" ;
      this.txtUserName= "" ;
     }

  }

  public get userStateCode() : number {
    return this._userStateCode;
  }



  routeSubscribtion? : Subscription;
  constructor(private activatedRoute : ActivatedRoute,private _router :Router){
  }

  aCanDeactive(): Observable<boolean> | Promise<boolean> | boolean{
    if(this.userName !== this.txtUserName)
    {
      confirm("Can you Discard change?");
      return true;
    }
    else  return true;
  }

  ngOnDestroy(): void {

   if(this.routeSubscribtion){
    this.routeSubscribtion.unsubscribe();
   }
  }

  ngOnInit(): void {
    
    this.routeSubscribtion = this.activatedRoute.queryParams.subscribe(
    
      (param : Params)=>{
        
        if (param['userId'])
        {

         this.userId = parseInt(param['userId']);
         if(this.userId>=0)
          this.userStateCode = this.userId;

        }
        else
        if(param['name'])        {
          this.userId = param['userId'];
          if(this.userId)
           this.userStateCode = 1;
         }
         switch(this.userStateCode){
          case 0:{
                  //console.log("User (1) ",this.userStateCode)
                  break;
                 }
          case 1:{
                  //console.log("User (2) ",this.userStateCode)
                  break;
                 }
          default:{  console.log("User default ",this.userStateCode)}
         }

      }
    );
  }

  editUser():void{
    
  }
}
