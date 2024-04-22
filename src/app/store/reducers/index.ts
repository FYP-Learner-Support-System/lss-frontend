import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { classesReducer } from '../classes/classes.reducer';
import { UserReducer } from '../user/user.reducer';
import { materialsReducer } from '../material/materials.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  classes: classesReducer,
  user: UserReducer,
  material: materialsReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
