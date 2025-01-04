import { CommonModule, JsonPipe } from '@angular/common';
import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { IUser } from '../../users/user-detail/user-detail-resolve';
import { IUserModel } from '../../data-model-test/user-model';

export  class userFormModer  {
  txtEmail? : string
  txtPassword? : string;
  userAddress?:{txtCityName:string,txtUserStreetName:string,selectCityName:string};
  genderItemGroup?:{gender:string};
    // this.userForm?.controls['genderItemGroup'].setValue({gender:"Male"});
}

@Component({
  selector: 'app-user-form',
  imports: [CommonModule,FormsModule,JsonPipe],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit,AfterViewInit,AfterViewChecked {
  x : userFormModer={txtPassword:"",txtEmail:"Saeed@gmail.com",genderItemGroup:{gender:"Male"},userAddress:{selectCityName:"Tehran",txtCityName:"Tehran",txtUserStreetName:"Golha"}};
  
  isSubmited : boolean = false;    
  userData : {cityName : string,email:string} = {email:"",cityName:""};
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
    
    //console.log(this.userForm?.controls);
    // this.userForm?.controls['txtEmail'].setValue("saeedzsh@gmail.com");
    // this.userForm?.controls['txtPassword'].setValue("saeedzsh@gmail.com");
    // this.userForm?.controls['userAddress'].setValue({txtCityName:"ALi",txtUserStreetName:"sad",selectCityName:"Hamedan"});
    // this.userForm?.controls['genderItemGroup'].setValue({gender:"Male"}); v
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  
  ngAfterViewInit(): void {
   
    setTimeout(() => {
      if(this.userForm)
       {
        this.userForm.setValue(this.x);//setValue Whole Form
        this.userForm?.form.patchValue({txtEmail:"saeed@g.com"}); //patch the Parts Form
        

       }
    }, 0);
   
   
    console.log(this.userForm);
     
  }

  @ViewChild("userForm") userForm? : NgForm;
  
  title = 'web-app';
  
  public userModel : IUserModel = {email:"", userCityName:"",userCode:0,userName:"",userStreetName:"",cityName:""};
  

  public genders : string[] = ["Male","Female"]
  public defualtSelectCity : string = "Hamedan";
  
  setInit(){
   // this.userForm?.setValue({
   
    
    //this.userForm?.controls['txtPassword'].setValue("saeedzsh@gmail.com");
    //this.userForm?.controls['userAddress'].setValue({txtCityName:"ALi",txtUserStreetName:"sad",selectCityName:"Hamedan"});
    //this.userForm?.controls['genderItemGroup'].setValue({gender:"Male"});
  }
  ngOnInit(): void {
    this.isSubmited = false;
    initFlowbite();
    console.log("ngOnInit")    

  }
  

  onSubmit(clUserForm : NgForm /*clUserForm : HTMLHeadElement*/){
    this.isSubmited = true;    
    this.userData.email = clUserForm.value.txtEmail;
    this.userData.cityName = clUserForm.value.userAddress.selectCityName;
    clUserForm.reset;
    console.log(clUserForm);
  }

}
