import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CustomValidator } from './custom-validate';
import { UserService } from '../../../../../../../core/services/user.service';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-project-form',
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss'
})
export class ProjectFormComponent implements OnInit {
  myScriptElement!: HTMLScriptElement;
 projectList :{projectName : string,email:string,projectStatus : string}[] = [];

 projectFormGroup! : FormGroup;

  constructor(private _userService : UserService){


    }

 ngOnInit(): void {
   this.projectFormGroup = new FormGroup({
    "projectName"   : new FormControl(null,{asyncValidators:[this.asyncInvalidProjectName.bind(this)]}

                                          ),
    "email"         : new FormControl(null,{}),
    "projectStatus" : new FormControl(null),
   });
  // this.myScriptElement = document.createElement("script");
 //     this.myScriptElement.src =
  //    "<script> function showMessage() {console.log('ds');  var dialog = document.getElementById('dg');dialog.innerHTML = 'This is a message box.';dialog.show();}</script>";
      //document.body.appendChild(this.myScriptElement);

    this._userService.checkIsProjectNameExists("").subscribe(

       {complete:()=>console.log("1 com"),

        next(value) {console.log(value)
        },
       }
      );

    this._userService.checkIsProjectNameExists2("").subscribe(

      {complete:()=>console.log("2 comp"),

        next(value) {console.log(value)
        },
       }
      );

   }

 projectFormGroupSubmit(){

   if(!this.projectFormGroup.get("projectName")?.valid)
     alert("d");
   else
    {
    console.log(this.projectFormGroup.value);

   this.projectList.push({
    email         : this.projectFormGroup.get("email")?.value,
    projectName   : this.projectFormGroup.get("projectName")?.value,
    projectStatus : ""

  });}
 }


  asyncInvalidProjectName(clControl : AbstractControl):Observable<ValidationErrors | null>{
        console.log(clControl.value);
        return this._userService.checkIsProjectNameExists(clControl.value).pipe(
           tap((r)=>console.log(r))
          ,map(  (v)=>v ? { "invalidProjectName": true }:null)
          //,map((r)=>null)
          ,tap((r)=>console.log(r))
            );

        //return of({ "invalidProjectName": true }).pipe( map((v)=>null) );

     }
}
