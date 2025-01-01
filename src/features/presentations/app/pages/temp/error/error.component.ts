import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error',
  imports: [UpperCasePipe],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent implements OnInit{
 public message : string = "Page...";


 constructor(private _activateRoute : ActivatedRoute){

 }

 ngOnInit(){
  if((this._activateRoute.snapshot.data)&&(this._activateRoute.snapshot.data['message']))
  {
    this.message = this._activateRoute.snapshot.data['message'];
  }
  /*
   this._activateRoute.data.subscribe(
    (aData:Data)=>{
      if(aData['message'])
      {
        this.message = aData['message'];
      }
    }
   );
   */
 }

}
