import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable()
export class UserService {

  activeUsers = ["Reza","Ali"];
  inactiveUsers = ["Arsa","Arina"];

  userList = ["Reza","Ali","Arsa","Arina"];
  constructor() { }

  setToActive(clId : number):void{
    this.activeUsers.push(this.inactiveUsers[clId]);
    this.inactiveUsers.splice(clId,1);
  }
  setToInactive(clId : number):void{
    this.inactiveUsers.push(this.activeUsers[clId]);
    this.activeUsers.splice(clId,1);
    console.log("gbgfhg"+this.activeUsers.length);
  }

  checkIfCityNameExists(clValue : string):Observable<boolean>{
     if(clValue == "Hamedan"){
      return of(false).pipe(delay(100));
     }
     else 
     return of(true).pipe(delay(100));
   }

  checkIfUsernameExists(clValue : string):Observable<boolean>{
   return of(this.userList.some( (res) =>res == clValue)).pipe(delay(1000));
  }

  str(cls : string) :string{
    return cls + "fvfvf";
  }
}
