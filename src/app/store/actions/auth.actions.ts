import { Action } from '@ngrx/store';
export const LOGIN_USER = '[User] LOGIN_USER';
export const LOGOUT_USER = '[User] LOGOUT_USER';

export class LoginUser implements Action {
  readonly type = LOGIN_USER;
  constructor(public payload: any) { }
}

export class LogoutUser implements Action {
  readonly type = LOGOUT_USER;
  constructor(public payload: any) { }
}

export type UserAction = LoginUser | LogoutUser;
