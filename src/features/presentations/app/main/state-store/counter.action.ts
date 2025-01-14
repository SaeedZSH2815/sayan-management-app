import { createAction, props } from "@ngrx/store";

export const incrementAction = createAction(
    '[Counter] Increment'
    ,props<{clValue : number}>()
);

export const cont2Action = createAction(
    '[cont2] Increment'
    ,props<{clValue : number}>()
);

// export const incrementAction2 = createAction(
//     '[Counter2] Increment2'
//     ,props<{clValue : number}>()
// );