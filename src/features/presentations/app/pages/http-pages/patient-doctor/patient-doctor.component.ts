import { Component, OnDestroy, OnInit } from '@angular/core';
import { SayanOrderServicesService } from '../../../../../../core/services/sayan-orders-services/sayan-order-services.service';
import { map, mergeAll,mergeMap, Observable, of, Subscription } from 'rxjs';
import data from "../../../../../../../public/assets/adm.json"
import srvViewData from "../../../../../../../public/assets/srvView.json"
import addressData from "../../../../../../../public/assets/address.json";
import * as RxJS from "../../../../../../core/rxjs-operators";


@Component({
  selector: 'app-patient-doctor',
  imports: [],
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

   this.pList$?.
   pipe(

    RxJS.tap( (  v   ) =>console.log(v) ),
    RxJS.map( (v)=>{ let x :any[] = <any[]>v;  return {...x};}  ),
    RxJS.tap(v=>console.log(v["0"]))
   // RxJS.map( (v1)=>{ let y :{} = v1;  return y["0"]}  )
  )

   .subscribe(console.log);

 //  this.srvView$?.subscribe(console.log);

  }
  getAddress(i : number){
    return this.srvView$
  }

  ngOnDestroy(): void {
    if(this.getToken$)
      this.getToken$.unsubscribe();
  }
}
