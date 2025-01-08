import { Component } from '@angular/core';
import { SayanOrderServicesService } from '../../../../../../core/services/sayan-orders-services/sayan-order-services.service';

@Component({
  selector: 'app-patient-doctor',
  imports: [],
  templateUrl: './patient-doctor.component.html',
  styleUrl: './patient-doctor.component.scss'
})
export class PatientDoctorComponent {

  constructor(private _sayanOrderServicesService: SayanOrderServicesService){
    this._sayanOrderServicesService.getToken();
  }
}
