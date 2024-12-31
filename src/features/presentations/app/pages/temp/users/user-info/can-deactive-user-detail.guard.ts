import { ActivatedRouteSnapshot, CanDeactivate, CanDeactivateFn, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
export const canDeactiveUserDetailGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};

export interface CanDeactiveComponent {
  aCanDeactive: () => Observable<boolean> | Promise<boolean> |  boolean;
}


export class CanDeactiveUserInfoGuard implements CanDeactivate<CanDeactiveComponent>{
  canDeactivate(  component: CanDeactiveComponent
                , currentRoute: ActivatedRouteSnapshot
                , currentState: RouterStateSnapshot
                , nextState: RouterStateSnapshot): MaybeAsync<GuardResult> {
    console.log(component);
    return component.aCanDeactive();
  }
  
}