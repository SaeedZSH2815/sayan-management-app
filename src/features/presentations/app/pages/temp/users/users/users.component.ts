import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { UserActiveComponent } from '../user-active/user-active.component';
import { UserInactiveComponent } from '../user-inactive/user-inactive.component';
import { UserService } from '../../../../../../../core/services/user.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Params, Router, RouteReuseStrategy, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserInfoComponent } from '../user-info/user-info.component';
import { CustomRouteReuseStrategy } from '../../../../main/CustomRouteReuseStrategy';
import { Location } from '@angular/common';
@Component({
  selector: 'app-users',
  imports: [RouterLink,
    RouterLink,RouterLinkActive,
    RouterOutlet,CommonModule,UserActiveComponent,UserInactiveComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  providers:[UserService,
   //  { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy }
    ]
})
export class UsersComponent implements OnInit,AfterViewInit, OnDestroy{

  userId? : number | undefined;
  userName? : string | undefined;
  routerSubscription? : Subscription;
  userList : {userId : number,userName : string}[] = [];

  constructor(private userService :UserService
             ,private activeRouter : ActivatedRoute
             ,private _router : Router

             ){


              //this._router.routerState.root.component = UsersComponent;
  }
  ngAfterViewInit(): void {

  }


  ngOnDestroy(): void {
    console.log("UsersComponent ngOnDestroy");
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

  setNavigate(clId : number):void{
    this.userId = clId;



    this._router.navigate(["/users/userInfo/",clId],{
                           queryParams:{userId:clId},/* replaceUrl: true*/ } );

    console.log("Na",clId);
  }
}
