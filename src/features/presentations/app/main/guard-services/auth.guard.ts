import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../../../../core/services/auth.service';
import { Injectable } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {
  console.log(route,state);
  return false;
};


//-----------------------------------------------------
@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild{


  constructor(private _authService : AuthService,private _route : Router){

  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this._authService.isAuthenticatedChild()
     .then( (auth:boolean)=>{ if(auth) return true;else {this._route.navigate(['/']);return false;}} );
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {

    return this._authService.isAuthenticated()
     .then( (auth:boolean)=>{ if(auth) return true;else {this._route.navigate(['/']);return false;}} );
  }

}


