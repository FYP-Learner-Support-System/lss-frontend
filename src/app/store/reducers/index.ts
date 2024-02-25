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

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  classes: classesReducer,
  user: UserReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
