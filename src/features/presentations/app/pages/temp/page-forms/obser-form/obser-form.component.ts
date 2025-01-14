import { Component, OnDestroy, ViewChild } from '@angular/core';
import * as RxJS from "../../../../../../../core/rxjs-operators";
import { SayanOrderService } from '../../../../../../../core/services/sayan-orders-services/sayan-order.service';
import { IPermissions,Permissions as PermissionsEntity } from '../../../../../../../core/data/entities/permission-entity';
import { CommonModule } from '@angular/common';
import { AlertComponent } from '../../alert/alert/alert.component';
import { PlaceHolderDirective } from '../../../../../../../core/directives/place-holder.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-obser-form',
  imports: [CommonModule,AlertComponent,PlaceHolderDirective],
  templateUrl: './obser-form.component.html',
  styleUrl: './obser-form.component.scss'
})
export class ObserFormComponent implements OnDestroy{

  @ViewChild(PlaceHolderDirective) appPlaceHolder? : PlaceHolderDirective;
  errorMsg :any = null;
  placeCloseSubs$? : Subscription;
  permissionsEntity : PermissionsEntity[] = [];
  setError(){
    
    this.appPlaceHolder!.vcRef.clear();
    const alertComponent = this.appPlaceHolder?.vcRef.createComponent(AlertComponent);

    if(alertComponent)
     {
      
      alertComponent.instance.message = "This Is a Message";     
     
      //alertComponent.instance.onClose = ()=>{this.onHandleError();}
      //or
      this.placeCloseSubs$ = alertComponent.instance.close.subscribe(
        ()=>{
          if(this.placeCloseSubs$)
            this.placeCloseSubs$.unsubscribe();
          this.appPlaceHolder!.vcRef.clear();
        }       
        
      );

     }

 
  }
  constructor(private _sayanOrderService : SayanOrderService){
 //   this._sayanOrderService.getToken().subscribe(console.log);
    // this._sayanOrderService.getPermissions().subscribe(
    //   {
    //     next:x=>this.ProccessPermissionList(x)
    //   }
    // );
  }
  ngOnDestroy(): void {
    if(this.placeCloseSubs$)
      this.placeCloseSubs$.unsubscribe();
  }

  onHandleError(){
    if(this.appPlaceHolder)
     this.appPlaceHolder.vcRef.clear();
  }

  ProccessPermissionList(clValue : any){

    if(clValue){
      if(Array.isArray(clValue)){
        Object.assign(this.permissionsEntity, clValue);
      }
    }
    console.log(this.permissionsEntity)
  }
}
