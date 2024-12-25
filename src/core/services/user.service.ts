import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  activeUsers = ["Reza","Ali"];
  inactiveUsers = ["Arsa","Arina"];

  constructor() { }

  setActiveToInactive(cl):void{}
}
