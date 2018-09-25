import { ActionReducerMap } from '@ngrx/store';
import * as actions from '../actions';

export const reducers: ActionReducerMap<AppState> = {
  snackbar: snackbarReducer,
};

export interface AppState {
  snackbar: Snackbar;
}

export interface Snackbar {
  message: string;
  type: SnackbarType;
}

export type SnackbarType = 'warn' | 'success' | 'info' | 'danger';

export const initialState: Snackbar = {
  message: null,
  type: null
};

export function snackbarReducer(state: any = initialState, action: any) {
  const snackbar = action.payload;
  switch (action.type) {
    case actions.SELECT_SNACKBAR: {
      return { ...state, ...snackbar };
    }
    case actions.CLOSE_SNACKBAR: {
      return { ...state, ...initialState };
    }
  }
  return state;
}
