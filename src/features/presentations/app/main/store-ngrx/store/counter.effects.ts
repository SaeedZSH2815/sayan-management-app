import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject, Injectable } from '@angular/core';
import { map, mergeMap, of, tap } from 'rxjs';

import { decrement, increment } from './counter.actions';

@Injectable()
export class CounterEffects {
  saveCount = createEffect(
    () =>
      inject(Actions).pipe(
        ofType(increment, decrement),
        mergeMap((r)=>of({r:"sddfsfd"}))
      //   tap((action) => {
      //     console.log("act:",action);
      //     //localStorage.setItem('count', action.value.toString());
      //   }

      // )
      ),
    { dispatch: false }
  );

  constructor(/*private actions$: Actions*/) {
    //console.log("act:",actions$);
  }
  // constructor(private readonly actions$: Actions) {
  //   console.log(actions$)
  // }

}
