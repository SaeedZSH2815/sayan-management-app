import { Action as NG_Action, createAction, props } from "@ngrx/store";


export const INCREMENT = '[Counter] Increment';
export const DECREMENT = '[Counter] Decrement';

export const IncrementAction = createAction(
  INCREMENT,
  props<{fName:string}>()

);

// Or Action

export class DecrymentAction implements NG_Action{
  readonly type = DECREMENT;

  constructor(public fName : string){}
}
;

export type CounterActions = DecrymentAction | NG_Action ;

