import { ActivatedRouteSnapshot, MaybeAsync, RedirectCommand, Resolve, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../../../../../../../core/services/user.service";
import { Injectable } from "@angular/core";

export interface IUser{
  id : number;
  userName : string;
}

@Injectable()
export class UserDetailResolve implements Resolve<IUser>{



  constructor(private _userService : UserService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<IUser | RedirectCommand> {

    let Lid : number = +route.params['id'];
    let LuserName = this._userService.activeUsers[Lid];
    let user : IUser = {id:Lid,userName:LuserName};
    return user;
    //return user;
  }

}
