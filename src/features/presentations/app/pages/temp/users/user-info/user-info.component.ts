import { CommonModule } from '@angular/common';
import { CompilerConfig } from '@angular/compiler';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppUtility } from '../../../../../../../utils/utility';
import { AuthService } from '../../../../../../../core/services/auth.service';

@Component({
  selector: 'app-user-info',
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss'
})
export class UserInfoComponent implements OnInit,OnDestroy {


  auth = inject(AuthService);
  private _userStateCode : number = 0;

  public set userStateCode(clValue : number) {
    this._userStateCode = clValue;
  }

  public get userStateCode() : number {
    return this._userStateCode;
  }


  userId : number = 0;
  routeSubscribtion? : Subscription;
  constructor(private activatedRoute : ActivatedRoute,private _router :Router){
  }

  ngOnDestroy(): void {

   if(this.routeSubscribtion){
    this.routeSubscribtion.unsubscribe();
   }
  }

  ngOnInit(): void {
    console.log("this.auth.loggedIn",this.auth.loggedIn);
    this.routeSubscribtion = this.activatedRoute.queryParams.subscribe(
      (param : Params)=>{
        console.log("Params",param);
        this.userStateCode = parseInt(param['userId']);
        if (param['userId'])
        {

         this.userId = parseInt(param['userId']);
         if(this.userId)
          this.userStateCode = this.userId;

        }
        else
        if(param['name'])        {
          this.userId = param['userId'];
          if(this.userId)
           this.userStateCode = 1;
         }
         switch(this.userStateCode){
          case 1:{
                  //console.log("User (1) ",this.userStateCode)
                  break;
                 }
          case 2:{
                  //console.log("User (2) ",this.userStateCode)
                  break;
                 }
          default:{  console.log("User default ",this.userStateCode)}
         }

      }
    );
  }

  editUser():void{
    this._router.navigate(["/users/userInfo/",1],{queryParamsHandling:"merge"});
  }
}
