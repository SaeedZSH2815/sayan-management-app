import { createSelector } from "@ngrx/store";

export const selectconterFn = (state :{ conterFn : {age:number;firstName:string} })=>state;


const selectorCounter = createSelector(
  selectconterFn,
  (state)=>{conterFn : {age:state.conterFn.age+2;firstName:state.conterFn.firstName}}
);
;
