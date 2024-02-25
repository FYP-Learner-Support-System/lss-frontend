import { createAction, props } from "@ngrx/store";

export const adduser = createAction("adduser", props<{useritem: object}>())
export const removeuser = createAction("removeuser", props<{useritem: object}>())