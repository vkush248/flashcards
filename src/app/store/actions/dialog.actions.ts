import { Action } from '@ngrx/store';
import { Dialog } from '../reducers';
export const OPEN_DIALOG = '[Dialog] OPEN_DIALOG';
export const CLOSE_DIALOG = '[Dialog] CLOSE_DIALOG';

export class OpenDialog implements Action {
  readonly type = OPEN_DIALOG;
  constructor(public payload: Dialog) { }
}

export class CloseDialog implements Action {
  readonly type = CLOSE_DIALOG;
  constructor() { }
}

export type DialogActions = OpenDialog | CloseDialog;
