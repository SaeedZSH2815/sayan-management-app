import { createReducer, on } from "@ngrx/store";
import { CounterActions, DECREMENT, DecrymentAction, INCREMENT, IncrementAction } from "../action-count/increment-action";
import { AppUtility } from "../../../../../../../utils/utility";

const initialState = {age : 20};


export const counterReducer = createReducer(initialState,

   on(IncrementAction,(x:{age : number},action)=>{return {age:x.age+1,firstName:action.fName}})
);


export function conterFnReducer(state = initialState,action:CounterActions){
  /*
  if(AppUtility.isPropertyInObject(action,"type"))
  {
    console.log(action)
    if(action["type"] === "[Counter] Increment")
      return {age:state.age + 1,firstName:"Saeed"};
    else
     return state;
  }
  AppUtility.printObject(state);

  */
  //console.log("fgdfg",action)
  console.log(AppUtility.getValuePropertyInObject(action,"fName"),

  Reflect.get(action, 'fName'));
  if(action.type === DECREMENT)
  {
    return {age:state.age + 1,firstName:(action as DecrymentAction).fName};
  }
  else
  if(action.type === INCREMENT)
    {

      return {age:state.age + 1,firstName:"bnmb" };
    }
  return state;
};

