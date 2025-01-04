import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


const x=(c : FormControl)=>{
  return null;
}
@Component({
  selector: 'app-user-reactive-form',
  imports: [FormsModule,CommonModule,ReactiveFormsModule/** */],
  templateUrl: './user-reactive-form.component.html',
  styleUrl: './user-reactive-form.component.scss'
})
export class UserReactiveFormComponent implements OnInit,AfterContentInit,AfterContentChecked {

  genderList : string[] = ["male","female"];
  StreetList : string[] = ["Laleh","Sadaf"];


  ngAfterContentChecked(): void {
  //  console.log("ngAfterContentChecked",this.userFormGroup.value);
  console.log(this.userFormGroup.get("userCityDataInfo.country")?.valid);
  }
  ngAfterContentInit(): void {
  //  console.log("ngAfterContentInit",this.userFormGroup.value);
  }

  userFormGroup : FormGroup = new FormGroup({
    "cityName"   : new FormControl("cityName"),
    "userName"   : new FormControl(null,[ Validators.required]),
    "gender"     : new FormControl("female"),
    "userEmail"  : new FormControl(null,[Validators.required,Validators.email]),
    //------------
    "userCityDataInfo" : new FormGroup(
      {
        "country" : new FormControl("Iran",[this.validateUsername.bind(this)]),
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

  private validateUsername(control: AbstractControl) {
    const val = control.value;
    return "Iran" != val ? { alreadyExist: true } : null;}


}

