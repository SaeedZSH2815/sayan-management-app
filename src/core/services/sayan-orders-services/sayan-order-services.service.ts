import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as RxJS from '../../../core/rxjs-operators';

import { AuthenticateEntity } from '../../data/entities/authenticate-entity';

@Injectable({
  providedIn: 'root'
})
export class SayanOrderServicesService {

  constructor(private http : HttpClient) { }


  getToken():any{
    let apiUrlUser = "http://192.168.20.88:44320/api/Users?username=%D8%B4%D8%B1%DA%A9%D8%AA&password=d79683715389cfa89d95d9f610e338890ad436bb";
    let cHeader = new HttpHeaders();
    let cParams = new HttpParams();

    cParams.append("username","شرکت");
    cParams.append("password","d79683715389cfa89d95d9f610e338890ad436bb");
    let iAuth:AuthenticateEntity = new AuthenticateEntity();


    this.http.get(apiUrlUser,{headers:cHeader,params:cParams})
     .pipe(RxJS.tap(r=>console.log("r")),
           RxJS.map((v,i)=>{ console.log("tfg",AuthenticateEntity.fromJS(v)) ;return {"x":"123"}})
           )
     .subscribe(
      console.log
    );
  }



}
