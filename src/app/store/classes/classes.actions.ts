import { createAction, props } from "@ngrx/store";

export const fetchclass = createAction("fetchclass", props<{classlist: Array<object>}>())
export const addclass = createAction("addclass", props<{classitem: object}>())
export const removeclass = createAction("removeclass", props<{classitem: object}>())