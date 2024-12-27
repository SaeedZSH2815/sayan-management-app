import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { UserActiveComponent } from '../user-active/user-active.component';
import { UserInactiveComponent } from '../user-inactive/user-inactive.component';
import { UserService } from '../../../../../../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  imports: [RouterLink,RouterLinkActive, CommonModule,UserActiveComponent,UserInactiveComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  providers:[UserService]
})
export class UsersComponent implements OnInit,AfterViewInit, OnDestroy{

  userId? : number | undefined;
  userName? : string | undefined;
  routerSubscription? : Subscription;
  userList? : {userId : number,userName : string}[] =[];
  constructor(private userService :UserService,private activeRouter : ActivatedRoute){

  }
  ngAfterViewInit(): void {
    for (let index = 0; index < this.userService.activeUsers.length; index++) {
   
      console.log(this.userService.activeUsers[index]);
      // this.userList?.push( {userId:index,
       // userName:this.userService.activeUsers[index]});
      
    }


  }

 
  ngOnDestroy(): void {
   if(this.routerSubscription)
   {
    this.routerSubscription.unsubscribe();
   }
  }

  ngOnInit(): void {

    for (let index = 0; index < this.userService.activeUsers.length; index++) {
      this.userList?.push( {userId:index,
        userName:this.userService.activeUsers[index]});
      
    }

    this.userList?.push( {userId:2,
      userName:"this.userService.activeUsers[index]"});


    console.log(   this.userList);
    console.log(this.userService.activeUsers.slice());
    if(this.activeRouter.snapshot.params){
     this.userId = this.activeRouter.snapshot.params['id'];
    }

    
    this.routerSubscription = this.activeRouter.params.subscribe(
      (param : Params)=>{
        if(param['id'])
         this.userId =  param['id'];
        if(param['name'])
         this.userName =  param['name'];
        console.log(param);
      }
    );
  
  }

}
