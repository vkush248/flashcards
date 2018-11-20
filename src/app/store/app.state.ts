import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import * as fromAppState from './reducers';
import { RouterStateUrl } from './reducers/router.reducer';

export const reducers: ActionReducerMap<AppState> = {
  routerReducer: fromRouter.routerReducer,
  snackbar: fromAppState.snackbarReducer,
  user: fromAppState.userReducer,
  dialog: fromAppState.dialogReducer,
};

export interface AppState {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
  snackbar: fromAppState.Snackbar;
  user: fromAppState.User;
  dialog: fromAppState.Dialog;
}
