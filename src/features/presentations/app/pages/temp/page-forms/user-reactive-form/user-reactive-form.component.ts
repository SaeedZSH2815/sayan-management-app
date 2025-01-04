import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AppUtility } from '../../../../../../../utils/utility';


const x=(c : FormControl)=>{
  return null;
}
@Component({
  selector: 'app-user-reactive-form',
  imports: [FormsModule,CommonModule,ReactiveFormsModule/** */],
  templateUrl: './user-reactive-form.component.html',
  styleUrl: './user-reactive-form.component.scss',
  providers:[AppUtility]
})
export class UserReactiveFormComponent implements OnInit,AfterContentInit,AfterContentChecked {

  userFormGroupUserNameIsAdmin : boolean = false;
  isRequiredUserName : boolean = false;

  constructor(private app : AppUtility){

    console.log( this.app.ARoundStr("dfs",10));
  }
  genderList : string[] = ["male","female"];
  StreetList : string[] = ["Laleh","Sadaf"];


  ngAfterContentChecked(): void {
  //  console.log("ngAfterContentChecked",this.userFormGroup.value);
     console.log("");
     if(this.userFormGroup.get('userName')?.errors?.['isAdmin'])
      this.userFormGroupUserNameIsAdmin = true;
     else
      this.userFormGroupUserNameIsAdmin = false;
     
  
  }
  ngAfterContentInit(): void {
  //  console.log("ngAfterContentInit",this.userFormGroup.value);
  }

  userFormGroup : FormGroup = new FormGroup({
    "cityName"   : new FormControl("cityName"),
    "userName"   : new FormControl(null,[ Validators.required,this.validateIsAdmin.bind(this)]),
    "gender"     : new FormControl("female"),
    "userEmail"  : new FormControl(null,[Validators.required,Validators.email]),
    //------------
    "userCityDataInfo" : new FormGroup(
      {
        "country" : new FormControl("Iran",[this.validateCountry.bind(this)]),
        "street"   : new FormControl(null,[Validators.required]),
      }
    ),

    "hobbies" : new FormArray([])
  });

  ngOnInit(): void {


  }

  getHobbyControls() {
    return (<FormArray>this.userFormGroup.get('hobbies')).controls;
  }

  onAddHubby(){
    let control = new FormControl("",[Validators.required]);
    (<FormArray>this.userFormGroup.get("hobbies")).push(control);
  }

  IsCountryValid(control: AbstractControl): ValidationErrors | null  {

    return (control: AbstractControl): ValidationErrors | null => {
      console.log("ValidatorFn",control.value);

      const forbidden = control.value === "Iran";
      return forbidden ? { forbiddenName: { value: control.value } } : null;
    };

  }

  
  private validateCountry(clControl: AbstractControl) {
    
    
    if(this.app)
     {
      this.app.ARoundStr("dfs",10);
     }

    const val = clControl.value.length>0;
    return !val ? { alreadyExist: true } : null;}



    onSubmit(){
      console.log(this.userFormGroup);
    }


    validateIsAdmin(clControl : AbstractControl){
      return clControl.value != "Admin" ? {isAdmin : true}: null;
    }
 }

