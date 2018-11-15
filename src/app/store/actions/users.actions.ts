import { Action } from '@ngrx/store';
export const LOGIN_USER = '[User] LOGIN_USER';
export const LOGIN_USER_SUCCESS = '[User] LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = '[User] LOGIN_USER_ERROR';
export const REGISTER_USER = '[User] REGISTER_USER';
export const REGISTER_USER_SUCCESS = '[User] REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = '[User] REGISTER_USER_ERROR';
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

export class RegisterUser implements Action {
  readonly type = REGISTER_USER;
  constructor(public payload: any) { }
}

export class RegisterUserSuccess implements Action {
  readonly type = REGISTER_USER_SUCCESS;
  constructor(public payload: any) { }
}

export class RegisterUserError implements Action {
  readonly type = REGISTER_USER_ERROR;
  constructor(public payload: any) { }
}

export class LogoutUser implements Action {
  readonly type = LOGOUT_USER;
  constructor() { }
}

export class LogoutUserSuccess implements Action {
  readonly type = LOGOUT_USER_SUCCESS;
  constructor() { }
}

export class LogoutUserError implements Action {
  readonly type = LOGOUT_USER_ERROR;
  constructor(public payload: any) { }
}

export type UserAction =
  LoginUser
  | LoginUserSuccess
  | LoginUserError
  | LoginUser
  | LoginUserSuccess
  | LoginUserError
  | LogoutUser
  | LogoutUserSuccess
  | LogoutUserError;
