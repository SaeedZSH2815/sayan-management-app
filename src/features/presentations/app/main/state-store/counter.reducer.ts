import { createReducer, on, State } from "@ngrx/store";
import { incrementAction } from "./counter.action";

 const initialState = 0;

export const counterReducer = createReducer(
      initialState,
    on(incrementAction, (state,action)=>state + action.clValue)
);



//or
export function counterReducer(state=initialState,action:any){
    console.log("fffffffff",action.type);
    if(action.type === '[Counter] Increment'  ){
        
        return state * action.clValue;
  }

  return state;
}