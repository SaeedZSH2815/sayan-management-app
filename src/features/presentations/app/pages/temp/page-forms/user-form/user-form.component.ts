import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit {
  title = 'web-app';

  //@ViewChild('f') FormContro

  ngOnInit(): void {
    initFlowbite();
  }

  onSubmit(f : any){
    console.log(f);
  }

}
