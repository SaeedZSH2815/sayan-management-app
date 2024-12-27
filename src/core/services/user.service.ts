import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  activeUsers = ["Reza","Ali"];
  inactiveUsers = ["Arsa","Arina"];

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

  str(cls : string) :string{
    return cls + "fvfvf";
  }
}
