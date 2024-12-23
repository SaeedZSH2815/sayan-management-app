import { CUSTOM_ELEMENTS_SCHEMA, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserLoginComponent } from '../pages/users/user-login/user-login.component';
import { UnlessDirective } from '../../../../core/directives/unless/unless.directive';
import { HighLightBlueDirective } from '../../../../core/directives/high-light/high-light-blue.directive';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, HighLightBlueDirective, UnlessDirective],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class MainComponent {

  constructor(private _router : Router){

  }
  OnRouter(clId : number):void{
    if(clId == 1)
     this._router.navigate(['/login']);
    else
    this._router.navigate(['/account']);
  }
}
