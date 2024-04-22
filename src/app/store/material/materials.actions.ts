import { createAction, props } from "@ngrx/store";

export const addMaterial = createAction("addclass", props<{materialList: Array<object>}>())