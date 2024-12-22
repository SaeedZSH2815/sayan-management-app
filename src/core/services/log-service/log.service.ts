import { Injectable } from '@angular/core';


export class LogService {

  constructor() { }

  logError(clMsg: string): void {
    console.log("Error : ", clMsg);
    
  }

  logSuccess(clMsg: string): void {
    console.log("Success : ", clMsg);
  }

  logWarnig(clMsg: string): void {
    console.log("Warnig : ", clMsg);
  }


}
