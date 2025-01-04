import { Routes } from '@angular/router';
import { UserLoginComponent } from '../pages/users/user-login/user-login.component';
import { AccountPageComponent } from '../pages/temp/accounts/account-page/account-page.component';
import { UserInfoComponent } from '../pages/temp/users/user-info/user-info.component';
import { AuthGuard } from './guard-services/auth.guard';
import { inject } from '@angular/core';
import { AuthService } from '../../../../core/services/auth.service';
import { CanDeactiveUserInfoGuard } from '../pages/temp/users/user-info/can-deactive-user-detail.guard';
import { ErrorComponent } from '../pages/temp/error/error.component';
import { UserDetailResolve } from '../pages/temp/users/user-detail/user-detail-resolve';
import { UserDetailComponent } from '../pages/temp/users/user-detail/user-detail.component';
import { UserFormComponent } from '../pages/temp/page-forms/user-form/user-form.component';
import { UserReactiveFormComponent } from '../pages/temp/page-forms/user-reactive-form/user-reactive-form.component';


export const appMainroutes : Routes = [

  { path: "login",  component: UserLoginComponent },

  { path: "account", component: AccountPageComponent },
  { path: "userForm", component: UserFormComponent },
  
  { path: "userReactiveForm", component: UserReactiveFormComponent },
  { path: "userResolve/:id", component: UserDetailComponent,resolve:{user1:UserDetailResolve} },


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

  {path:"not-found",component:ErrorComponent,data:{message:"Page Not Found!",isMessage:true}},
  {path:"**",redirectTo:"not-found"}


];
