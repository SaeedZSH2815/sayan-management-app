import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from './user-detail-resolve';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit {

  public user? : IUser;
  constructor(private _activateRoute : ActivatedRoute){

  }
  ngOnInit(): void {
   this._activateRoute.data.subscribe(
    (data)=>{console.log(data);

      if (data['user']){
       console.log(data['user']);
      }
    }
   );
  }


}
