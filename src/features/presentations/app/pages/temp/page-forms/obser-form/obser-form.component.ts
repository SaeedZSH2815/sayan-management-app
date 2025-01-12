import { Component, ViewChild } from '@angular/core';
import * as RxJS from "../../../../../../../core/rxjs-operators";
import { SayanOrderService } from '../../../../../../../core/services/sayan-orders-services/sayan-order.service';
import { IPermissions,Permissions as PermissionsEntity } from '../../../../../../../core/data/entities/permission-entity';
import { CommonModule } from '@angular/common';
import { AlertComponent } from '../../alert/alert/alert.component';
import { PlaceHolderDirective } from '../../../../../../../core/directives/place-holder.directive';

@Component({
  selector: 'app-obser-form',
  imports: [CommonModule,AlertComponent,PlaceHolderDirective],
  templateUrl: './obser-form.component.html',
  styleUrl: './obser-form.component.scss'
})
export class ObserFormComponent {

  @ViewChild(PlaceHolderDirective) appPlaceHolder? : PlaceHolderDirective;
  errorMsg :any = null;
  permissionsEntity : PermissionsEntity[] = [];
  setError(){
    console.log(this.appPlaceHolder?.vcRef)
    const alertComponent = this.appPlaceHolder?.vcRef.createComponent(AlertComponent);
    if(alertComponent)
     {
      alertComponent.instance.message = "jkjkhjh";
      this.errorMsg = alertComponent.instance.message;
   //   alertComponent.instance.onClose = this.onHandleError;

     }

 //   this.appPlaceHolder?.vcRef.clear();
   // this.errorMsg= "fghfghfghfghgfhgf";
  }
  constructor(private _sayanOrderService : SayanOrderService){
 //   this._sayanOrderService.getToken().subscribe(console.log);
    // this._sayanOrderService.getPermissions().subscribe(
    //   {
    //     next:x=>this.ProccessPermissionList(x)
    //   }
    // );
  }

  onHandleError(){
    this.errorMsg = null;
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
