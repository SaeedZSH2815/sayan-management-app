import { Component } from '@angular/core';
import * as RxJS from "../../../../../../../core/rxjs-operators";
import { SayanOrderService } from '../../../../../../../core/services/sayan-orders-services/sayan-order.service';
import { IPermissions,Permissions as PermissionsEntity } from '../../../../../../../core/data/entities/permission-entity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-obser-form',
  imports: [CommonModule],
  templateUrl: './obser-form.component.html',
  styleUrl: './obser-form.component.scss'
})
export class ObserFormComponent {


  permissionsEntity : PermissionsEntity[] = [];

  constructor(private _sayanOrderService : SayanOrderService){
 //   this._sayanOrderService.getToken().subscribe(console.log);
    this._sayanOrderService.getPermissions().subscribe(
      {
        next:x=>this.ProccessPermissionList(x)
      }
    );
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
