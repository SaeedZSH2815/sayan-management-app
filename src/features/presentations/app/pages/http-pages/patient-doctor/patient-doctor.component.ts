import { Component, OnDestroy, OnInit } from '@angular/core';
import { SayanOrderServicesService } from '../../../../../../core/services/sayan-orders-services/sayan-order-services.service';
import { map, mergeAll,mergeMap, Observable, of, Subscription } from 'rxjs';
import data from "../../../../../../../public/assets/adm.json"
import srvViewData from "../../../../../../../public/assets/srvView.json"
import addressData from "../../../../../../../public/assets/address.json";
import * as RxJS from "../../../../../../core/rxjs-operators";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-patient-doctor',
  imports: [CommonModule],
  templateUrl: './patient-doctor.component.html',
  styleUrl: './patient-doctor.component.scss'
})
export class PatientDoctorComponent implements OnInit,OnDestroy {
  getToken$? : Subscription;
  pList$? : Observable<any>;
  srvView$? : Observable<any>;
  address$? : Observable<any>;
  constructor(private _sayanOrderServicesService: SayanOrderServicesService){

    this.pList$ = new Observable((obs)=>{
      obs.next(data);
      obs.complete();
    });

    this.srvView$ = new Observable((obs)=>{
      obs.next(srvViewData);
      obs.complete();
    });
    this.address$ = new Observable((obs)=>{
      obs.next(addressData);
      obs.complete();
    });





    //console.log("dd",data)
   // this.getToken$ = this._sayanOrderServicesService.getToken();
  }
  ngOnInit(): void {
  // this.pList$?.subscribe(console.log);
 //  this.srvView$?.subscribe(console.log);
   let p:string[]=["1","2"];
   //console.log(p.map(v=>v+"d"));
   this.pList$?.
   pipe(

   
   
    RxJS.map( (v)=>{ let x :any[] = <any[]>v;  
                     // let y=x.map(v=>v["admitType"]);
                      return {...v}}  ),
                      RxJS.mergeMap((v)=>this.ArrayOb(v)),
                      RxJS.tap( (  v   ) =>{  console.log(v["admitTypeCode"])} ),
 //    RxJS.map((v)=>{  let c:{admitTypeCode:number,admitType:string} = <{admitTypeCode:number,admitType:string}>v;  
              //        return {as:v["admitTypeCode"]} })
    //RxJS.tap(v=>console.log(v["0"]))
   // RxJS.map( (v1)=>{ let y :{} = v1;  return y["0"]}  )
  );

   

 //  this.srvView$?.subscribe(console.log);

  }
  ArrayOb(v:any[]){
   return new Observable<{[k:string]:any}>(
     (obs)=>{
    //  console.log(v.length)
      for (const key in v) {
        if (Object.prototype.hasOwnProperty.call(v, key)) {
          const element = v[key];
          //let c1:{admitType:string,admitTypeCode:number} = element as {admitType:string,admitTypeCode:number};
          
          let y:{[k:string]:any}=element
            console.log("b",y)
          obs.next(y);  
          
        }
      }
      
      obs.complete();
     }
   );
  }
  getAddress(i : number){
    return this.srvView$
  }

  ngOnDestroy(): void {
    if(this.getToken$)
      this.getToken$.unsubscribe();
  }
}
