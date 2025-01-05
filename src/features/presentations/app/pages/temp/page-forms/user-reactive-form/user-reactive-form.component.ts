import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AppUtility } from '../../../../../../../utils/utility';
import { UserService } from '../../../../../../../core/services/user.service';
import { catchError, map, Observable, of, Subscription } from 'rxjs';


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
export class UserReactiveFormComponent implements OnInit,AfterContentInit,AfterContentChecked,OnDestroy {

  userFormGroupUserNameIsAdmin : boolean = false;
  isRequiredUserName : boolean = false;

  checkIsAdminUser$? : Subscription;

  constructor(private app : AppUtility,private _userService : UserService){

    console.log( this.app.ARoundStr("dfs",10));
  }
  ngOnDestroy(): void {
    if(this.checkIsAdminUser$)
      this.checkIsAdminUser$.unsubscribe();
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

    "cityName"   : new FormControl("cityName",{asyncValidators:[this.validCityNameAsync.bind(this)]}),

    "userName"   : new FormControl(null,[ Validators.required,this.validateIsAdmin.bind(this)]),
    "gender"     : new FormControl("female"),
    "userEmail"  : new FormControl(null,[Validators.required,Validators.email]),
    //------------
    "userCityDataInfo" : new FormGroup(
      {
        "country"  : new FormControl("Iran",[this.validateCountry.bind(this)]),
        "street"   : new FormControl(null,[Validators.required]),
      }
    ),

    "hobbies" : new FormArray([new FormControl(),])
  });


  ngOnInit(): void {
    this.checkIsAdminUser$= this._userService.checkIfUsernameExists("Arina1").subscribe(
     (res)=>console.log("checkIfUsernameExists",res)
    );


    this.userFormGroup.patchValue({"userName" :"Saeed ZSh 2815"});
    this.userFormGroup.patchValue({"gender" :"Male"});
    this.userFormGroup.patchValue({"userEmail" :"SaeedZSh2815@gmail.com"});

   this.userFormGroup.get("userName")?.valueChanges.pipe(
    catchError((re)=>of(re))
   ).subscribe(
     (res)=>console.log("res")


  );
   this.userFormGroup.valueChanges.pipe(
    catchError((re)=>of(re))
   ).subscribe(
     (res)=>console.log("res")


  );


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

    validCityNameAsync(clControl : AbstractControl):Observable<ValidationErrors | null> {

      // let p = new Promise<any>((resove,reject)=>{
      //   setTimeout( ()=>{resove({"id":true})} ,1000)
      // });
      if(this._userService)
      { return this._userService.checkIfCityNameExists(clControl.value).pipe(
         map( (res) => (res ? { isHamedan: true } : null) ),
        catchError((er)=>of(null))
       );}
      else
      return of(null);
//      return p;
    }
}

