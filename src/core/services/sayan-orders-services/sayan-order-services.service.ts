import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as RxJS from '../../../core/rxjs-operators';

import { AuthenticateEntity } from '../../data/entities/authenticate-entity';
import { UseCase } from '../../use-case';
import { DataFailed, DataState, DataSuccess } from '../../data-state';
import { AuthenticateModel } from '../../data/models/authenticate-model';

@Injectable({
  providedIn: 'root'
})
export class SayanOrderServicesService {

  constructor(private http : HttpClient) { }

  x:string="";
  authCall(clAuth : any):RxJS.Observable<DataSuccess<AuthenticateEntity>>{

    if( typeof clAuth === "object"){
      let auth = AuthenticateEntity.fromJS(clAuth);
      let data= new DataSuccess<AuthenticateEntity>();
      data.dataObject =auth;
      return RxJS.of(data);
    }else{
      let data= new DataFailed<any>();
      data.errorMsg = "";
    return RxJS.of(data);}
  }
  getToken(){

    let apiUrlUser = "http://192.168.20.88:44320/api/Users";
    let cParams = new HttpParams();
    let queryParams = new HttpParams().append('username', "شرکت")
                                      .append('password', "d79683715389cfa89d95d9f610e338890ad436bb");

    let cIAuth : AuthenticateEntity = new AuthenticateEntity();



    //return null;
    // let apiUrlUser = "http://192.168.20.88:44320/api/Users";

    // console.log(queryParams);


return   this.http.get(apiUrlUser,{params:queryParams })
     .pipe( RxJS.tap(r=>console.log(typeof cIAuth )),
            //RxJS.mergeMap((x,i)=>RxJS.of(AuthenticateEntity.fromJS(x))),
            RxJS.map((v,i)=>{return AuthenticateEntity.fromJS(v);})
           ,
           //RxJS.catchError((err)=>RxJS.throwError(()=>new HttpErrorResponse({error:"ddd",status: err.status,statusText:err.message})))
           RxJS.catchError((err)=>RxJS.of(null) )
          )
     .subscribe(
      {
        next(value) {
            console.log(value);
        },
        error(err) {
            console.log("err",err.message  );
        },
      }
    );
  }



}
