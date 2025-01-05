import { CommonModule } from '@angular/common';
import { AfterContentChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

export class Account {
  public firstName?:string;
  public lastName?:string;
  public email?:string;
  public phone?:string;
  public students?: Student[];
  constructor(){
    this.students = [];
  }
}

export class Student {
  firstName?:string;
  lastName?:string;
  dob?:string;
}

@Component({
  selector: 'app-account-student-form',
  imports: [CommonModule,  FormsModule,
    ReactiveFormsModule,],
  templateUrl: './account-student-form.component.html',
  styleUrl: './account-student-form.component.scss'
})
export class AccountStudentFormComponent implements OnInit, OnChanges,AfterContentChecked {
  accountForm!: FormGroup;
  account: Account = new Account();

  constructor(private _formBuilder : FormBuilder){

    this.accountForm = this._formBuilder.group({
      'firstName': '',
      'lastName': '',
      'email': '',
      'phone': '',
      'studentsArray': this._formBuilder.array([])
    });
  }
  ngOnInit(): void {
    this.accountForm.valueChanges.subscribe((r)=>console.log(r));
  }
  ngAfterContentChecked(): void {


  }

  ngOnChanges(changes: SimpleChanges): void {
    this.accountForm.reset({
      firstName: this.account.firstName,
      lastName: this.account.lastName,
      email: this.account.email,
      phone: this.account.phone
    });
    if(this.account!.students)
     this.setStudents(this.account!.students!);

  }
  setStudents(students: Student[]) {
    const studentFGs = students.map(student => this._formBuilder.group(student));
    const studentFormArray = this._formBuilder.array(studentFGs);
    this.accountForm.setControl('studentsArray', studentFormArray);
  }

  createForm() {
    this.accountForm = this._formBuilder.group({
      'firstName': '',
      'lastName': '',
      'email': '',
      'phone': '',
      'studentsArray': this._formBuilder.array([])
    });
   }

  get studentsArray(): FormArray {
    return this.accountForm?.get('studentsArray') as FormArray;
  }
  addStudent(){
    this.studentsArray.push(this._formBuilder.group(new Student()));
  }
}
