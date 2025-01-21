import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../../../../main/store-ngrx/store/counter.actions';
import { CounterOutputComponent } from '../counter-output/counter-output.component';
import { CounterEffects } from '../../../../main/store-ngrx/store/counter.effects';

///import { increment, decrement } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  imports:[CounterOutputComponent],
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  constructor(private store: Store,public c:CounterEffects) {
    this.c.saveCount.subscribe((v:any)=>console.log("ddtrrrrrrrr",v));

  }

  increment() {
    this.store.dispatch(increment({ value: 2 }));



  }

  decrement() {
    this.store.dispatch(decrement({ value: 2 }));
  }
}
