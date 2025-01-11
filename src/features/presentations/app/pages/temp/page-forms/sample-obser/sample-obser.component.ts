import { Component } from '@angular/core';
import * as RxJS from "../../../../../../../core/rxjs-operators";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { _admTypeJSON } from './mockData/_admType';
import{IAdmType}from "../../../../../../../core/data/models/test-models/adm-type-interface";
//----------------------------------
@Component({
  selector: 'app-sample-obser',
  imports: [CommonModule],
  templateUrl: './sample-obser.component.html',
  styleUrl: './sample-obser.component.scss'
})
export class SampleObserComponent {

  constructor(private _http:HttpClient){
    let t:string[]=["1","2"];
    let p=t.map((v,i)=>v+"d"); 
    console.log(p);
    let x=t[0];
    let ad : { admitTypeCode: number;  admitType: string; } ={admitTypeCode:1,admitType:"string"};
    //let ad : { admitTypeCode: number;  admitType: string; } ={admitTypeCode:1,admitType:"string"};

    
    // RxJS.from(_admTypeJSON)
    // .pipe(RxJS.tap(v=>console.log(v)))
    // .subscribe();
    
    RxJS.of(_admTypeJSON).
    pipe( 
           RxJS.map(v=> v as any[]),
           RxJS.map(v=> { return {s:{name:"ffdv"}} })
           ,RxJS.catchError(
            err=>{
              
              let errmsg="";
              return errmsg;
            }
          
          )          
        //   ,RxJS.tap(v=>{ console.log(v.length)} )         
        //  ,RxJS.map(v=>{let p:IAdmType[]=v.map((v,i)=>v as IAdmType); return p;})
        //  ,RxJS.tap(v=>{ console.log((v[1] as IAdmType).admitType); } )

     )
    
    .subscribe(
      s=>{ if(s) console.log(s)}
    );


    // this._http.get('assets/adm.json').subscribe(
    // //  console.log
    //   res=>{console.log(res)},
    //   error=>{console.log(error)},
            
    
    // );

  }

}
