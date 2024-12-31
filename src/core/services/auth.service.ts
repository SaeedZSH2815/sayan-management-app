import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  isAuthenticatedObservable():Observable<boolean>{

    let observableResult = new Observable<boolean>(
       observable => {
         observable.next(false);
         observable.complete;
        }
    );

    return observableResult;
  }

  isAuthenticated(){

   const promiseResult = new Promise<boolean>(
      (resolve,reject)=>{
        setTimeout( ()=>{resolve(this.loggedIn)},8);
      }
    );
   return promiseResult;
  }

  isAuthenticatedChild(){

    const promiseResult = new Promise<boolean>(
       (resolve,reject)=>{

        resolve(this.loggedIn);
       }

     );
    return promiseResult;
   }


  loggedIn : boolean = true;
  constructor() { }

  login(){
    this.loggedIn = true;
  }

  logout(){
    this.loggedIn = false;
  }
}
