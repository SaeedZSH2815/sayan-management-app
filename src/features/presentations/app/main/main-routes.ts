import { Routes } from '@angular/router';
import { UserLoginComponent } from '../pages/users/user-login/user-login.component';
import { AccountPageComponent } from '../pages/temp/accounts/account-page/account-page.component';
import { UserInfoComponent } from '../pages/temp/users/user-info/user-info.component';
import { AuthGuard } from './guard-services/auth.guard';
import { inject } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { CanDeactiveUserInfoGuard } from '../pages/temp/users/user-info/can-deactive-user-detail.guard';


export const appMainroutes : Routes = [

  { path: "login",  component: UserLoginComponent },
  { path: "account", component: AccountPageComponent },

  { path: "users"
    ,canActivate:[AuthGuard,
                  /* ()=>inject(AuthService).isAuthenticatedObservable()*/],
    //,canActivateChild:[AuthGuard],
    loadComponent:()=>import('../pages/temp/users/users/users.component').then(c=>c.UsersComponent),
    children:[
          {path:"userInfo/:Id",component:UserInfoComponent,canDeactivate:[CanDeactiveUserInfoGuard] },

          //{path:":name",component:UserInfoComponent}
      ]

  },

];
