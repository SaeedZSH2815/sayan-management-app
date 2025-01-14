import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementAction } from '../../../../../../main/state-store/counter.action';
@Component({
  selector: 'app-counter-out-put',
  imports: [AsyncPipe],
  templateUrl: './counter-out-put.component.html',
  styleUrl: './counter-out-put.component.scss'
})
export class CounterOutPutComponent {

  constructor(private _stor:Store<{cont2:number}>){

   
    this._stor.select('cont2').subscribe(console.log);
  }

  inc(){
  //  this._stor.dispatch(incrementAction({clValue:20}));
    this._stor.dispatch(incrementAction({clValue:20}));
    //cnt
  }
}
