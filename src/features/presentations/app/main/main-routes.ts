import { Routes } from '@angular/router';
import { FirstComponent } from '../pages/temp/first/first.component';
import { UserLoginComponent } from '../pages/users/user-login/user-login.component';
import { AccountPageComponent } from '../pages/temp/accounts/account-page/account-page.component';

export const routes: Routes = [

  { path: "login", component: UserLoginComponent },
  { path: "account", component: AccountPageComponent }
];
