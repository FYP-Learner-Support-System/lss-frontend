import { createAction, props } from "@ngrx/store";

export const addclass = createAction("addclass", props<{classitem: object}>)
export const removeclass = createAction("removeclass", props<{classitem: object}>)