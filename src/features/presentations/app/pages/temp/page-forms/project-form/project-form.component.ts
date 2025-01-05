import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss'
})
export class ProjectFormComponent implements OnInit {

 projectList :{projectName : string,email:string,projectStatus : string}[] = [];

 projectFormGroup! : FormGroup;


 ngOnInit(): void {
   this.projectFormGroup = new FormGroup({
    "projectName":new FormControl(null),
    "email":new FormControl(null),
    "projectStatus":new FormControl(null),
   });
 }

 projectFormGroupSubmit(){
   console.log(this.projectFormGroup.value);
   this.projectList.push({
    email:this.projectFormGroup.get("email")?.value,
    projectName:this.projectFormGroup.get("projectName")?.value,
    projectStatus:""

  })
 }
}
