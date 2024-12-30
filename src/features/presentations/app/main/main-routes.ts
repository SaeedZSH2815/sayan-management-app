import { Routes } from '@angular/router';
import { FirstComponent } from '../pages/temp/first/first.component';
import { UserLoginComponent } from '../pages/users/user-login/user-login.component';
import { AccountPageComponent } from '../pages/temp/accounts/account-page/account-page.component';
import { UsersComponent } from '../pages/temp/users/users/users.component';
import { UserInfoComponent } from '../pages/temp/users/user-info/user-info.component';

export const routes: Routes = [

  { path: "login", component: UserLoginComponent },
  { path: "account", component: AccountPageComponent },

  { path: "users",
     loadComponent:()=>import('../pages/temp/users/users/users.component').then(c=>c.UsersComponent),
     data: { reuse: true },
     children:[
          {path:"userInfo/:Id",component:UserInfoComponent,    data: { reuse: true },},
          {path:"userNameInfo/:Id",component:UserInfoComponent,    data: { reuse: true },},
          //{path:":name",component:UserInfoComponent}
      ]

  },

];
