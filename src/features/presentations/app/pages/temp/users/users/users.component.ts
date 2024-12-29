import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { UserActiveComponent } from '../user-active/user-active.component';
import { UserInactiveComponent } from '../user-inactive/user-inactive.component';
import { UserService } from '../../../../../../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserInfoComponent } from '../user-info/user-info.component';

@Component({
  selector: 'app-users',
  imports: [RouterLink,RouterOutlet,CommonModule,UserInfoComponent,UserActiveComponent,UserInactiveComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  providers:[UserService]
})
export class UsersComponent implements OnInit,AfterViewInit, OnDestroy{

  userId? : number | undefined;
  userName? : string | undefined;
  routerSubscription? : Subscription;
  userList : {userId : number,userName : string}[] = [];

  constructor(private userService :UserService
             ,private activeRouter : ActivatedRoute){

  }
  ngAfterViewInit(): void {

  }


  ngOnDestroy(): void {
   if(this.routerSubscription)
   {
    this.routerSubscription.unsubscribe();
   }
  }

  ngOnInit(): void {

    for (let index = 0; index < this.userService.activeUsers.length; index++) {
      this.userList.push( {userId:index,
                            userName:this.userService.activeUsers[index]});

    }
    if (this.userList)
     console.log(this.userList.slice());

    if(this.activeRouter.snapshot.params){
     this.userId = this.activeRouter.snapshot.params['id'];
    }


    this.routerSubscription = this.activeRouter.params.subscribe(
      (param : Params)=>{
        if(param['id'])
         this.userId =  param['id'];
        if(param['name'])
         this.userName =  param['name'];

      }
    );

  }
  setUserId(clId : number):void{
    this.userId = clId;
  }
}
