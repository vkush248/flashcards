import { ActionReducerMap } from '@ngrx/store';
import * as fromAppState from './reducers';

export const reducers: ActionReducerMap<AppState> = {
  snackbar: fromAppState.snackbarReducer,
  user: fromAppState.userReducer,
};

export interface AppState {
  snackbar: fromAppState.Snackbar;
  user: fromAppState.User;
}
