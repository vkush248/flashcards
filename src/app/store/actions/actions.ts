import { Action } from '@ngrx/store';
export const SELECT_SNACKBAR = '[Snackbar] SELECT_SNACKBAR';
export const CLOSE_SNACKBAR = '[Snackbar] CLOSE_SNACKBAR';

export class SelectSnackbar implements Action {
  readonly type = SELECT_SNACKBAR;
  constructor(public payload: any) { }
}
export class CloseSnackbar implements Action {
  readonly type = CLOSE_SNACKBAR;
}

export type SnackbarAction = SelectSnackbar | CloseSnackbar;
