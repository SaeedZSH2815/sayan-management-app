import { JsonPipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { IUser } from '../../users/user-detail/user-detail-resolve';
import { IUserModel } from '../../data-model-test/user-model';



@Component({
  selector: 'app-user-form',
  imports: [FormsModule,JsonPipe],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit {
  title = 'web-app';
  public userModel : IUserModel = {userCityName:"",userCode:0,userName:"",userStreetName:"",cityName:""};
  //@ViewChild('f') FormContro

  ngOnInit(): void {
    initFlowbite();
  }

  onSubmit(f : any){
    console.log(f);
  }

}
