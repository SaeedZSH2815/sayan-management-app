import { CUSTOM_ELEMENTS_SCHEMA, Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { UnlessDirective } from '../../../../core/directives/unless/unless.directive';
import { HighLightBlueDirective } from '../../../../core/directives/high-light/high-light-blue.directive';
import { CommonModule } from '@angular/common';
import { SignalRService } from '../../../../core/services/signalr.service';
import { CounterOutputComponent } from '../pages/temp/count-store/counter-output/counter-output.component';
import { CounterControlsComponent } from '../pages/temp/count-store/counter-controls/counter-controls.component';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet,RouterLinkActive,RouterLink, CommonModule,CounterOutputComponent,CounterControlsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class MainComponent implements OnInit{

  constructor(private _router : Router,
    private s : SignalRService,
  ){

  }
  ngOnInit(): void {
  //  this.s.start();
  }
  OnRouter(clId : number):void{
    switch(clId){
      case 1 : { this._router.navigate(['/login']);break;}
      case 2 : { this._router.navigate(['/account']);break;}
      case 3 : { this._router.navigate(['/users']);break;}
      case 4 : { this._router.navigate(['/userResolve/','1']);break;}
    }


  }
}
