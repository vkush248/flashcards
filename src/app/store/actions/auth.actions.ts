import { Action } from '@ngrx/store';
export const LOGIN_USER = '[User] LOGIN_USER';
export const LOGIN_USER_SUCCESS = '[User] LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = '[User] LOGIN_USER_ERROR';
export const LOGOUT_USER = '[User] LOGOUT_USER';
export const LOGOUT_USER_SUCCESS = '[User] LOGOUT_USER_SUCCESS';
export const LOGOUT_USER_ERROR = '[User] LOGOUT_USER_ERROR';

export class LoginUser implements Action {
  readonly type = LOGIN_USER;
  constructor(public payload: any) { }
}
export class LoginUserSuccess implements Action {
  readonly type = LOGIN_USER_SUCCESS;
  constructor(public payload: any) { }
}
export class LoginUserError implements Action {
  readonly type = LOGIN_USER_ERROR;
  constructor(public payload: any) { }
}

export class LogoutUser implements Action {
  readonly type = LOGOUT_USER;
  constructor(public payload: any) { }
}
export class LogoutUserSuccess implements Action {
  readonly type = LOGOUT_USER_SUCCESS;
  constructor(public payload: any) { }
}
export class LogoutUserError implements Action {
  readonly type = LOGOUT_USER_ERROR;
  constructor(public payload: any) { }
}

export type UserAction =
  LoginUser
  | LoginUserSuccess
  | LoginUserError
  | LogoutUser
  | LogoutUserSuccess
  | LogoutUserError;
