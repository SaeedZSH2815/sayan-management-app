import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticateEntity } from '../../data/entities/authenticate-entity';
import * as RxJS from '../../../core/rxjs-operators';





@Injectable({
  providedIn: 'root'
})
export class SayanOrderService {

  constructor(private http : HttpClient) {


  }

  getToken() {

    let apiUrlUser = "http://192.168.20.88:44320/api/Users/Login";
    let cParams = new HttpParams();
    let queryParams = new HttpParams().append('username', "شرکت")
                                      .append('password', "d79683715389cfa89d95d9f610e338890ad436bb");

                                      console.log(queryParams )
       let cIAuth : AuthenticateEntity = new AuthenticateEntity();

    return   this.http.get(apiUrlUser, {params:queryParams } )
            .pipe(
              //RxJS.tap(r=>console.log(typeof cIAuth ))
             //RxJS.tap(r=>console.log(r ))
            //RxJS.mergeMap((x,i)=>RxJS.of(AuthenticateEntity.fromJS(x))),
             RxJS.map((v,i)=>{return AuthenticateEntity.fromJS(v);})

            ,RxJS.catchError((err)=>RxJS.throwError(()=>new HttpErrorResponse({error:"ddd",status: err.status,statusText:err.message})))
          // ,RxJS.catchError((err)=>RxJS.of(null) )
           ) ;
  }

  getPermissions(){
    //accept: text/plain
    const apiGetPermissions = 'http://192.168.20.88:44320/api/Users/GetPermissions';

    let cHeaders = new HttpHeaders().append("accept","text/plain");
    //let cParams = new HttpParams();
    let cOptions = {
      headers : cHeaders
    }

    return this.http.get(apiGetPermissions,cOptions).pipe();
  }


}
