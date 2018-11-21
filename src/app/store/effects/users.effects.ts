import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import * as usersActions from '../actions';
import { AppState } from '../app.state';
import { getIsLoggedIn } from '../selectors';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService,
    private store: Store<AppState>
  ) { }

  @Effect()
  loginUser$ = this.actions$.pipe(ofType(usersActions.LOGIN_USER)).pipe(
    switchMap((action: usersActions.LoginUser) => {
      return this.authService.signIn(action.payload).pipe(
        map(username => new usersActions.LoginUserSuccess(username)),
        catchError((error: Error) => of(new usersActions.LoginUserError({ message: error.message })))
      );
    })
  );

  @Effect()
  registerUser$ = this.actions$.pipe(ofType(usersActions.REGISTER_USER)).pipe(
    switchMap((action: usersActions.RegisterUser) => {
      return this.authService.signUp(action.payload).pipe(
        map(username => new usersActions.RegisterUserSuccess(username)),
        catchError((error: Error) => of(new usersActions.RegisterUserError({ message: error.message })))
      );
    })
  );

  @Effect()
  logoutUser$ = this.actions$.pipe(ofType(usersActions.LOGOUT_USER)).pipe(
    switchMap((action: usersActions.LogoutUser) => {
      return this.authService.logOut().pipe(
        map((username) => new usersActions.LogoutUserSuccess(username)),
        catchError((error: Error) => of(new usersActions.LogoutUserError(error)))
      );
    })
  );

  @Effect()
  checkIfLoggedIn$ = this.actions$.pipe(ofType(usersActions.CHECK_IF_LOGGED_IN)).pipe(
    switchMap(() => this.store.select(getIsLoggedIn)),
    filter(isLoggedIn => !isLoggedIn),
    switchMap(() => {
      return this.authService.isLoggedIn().pipe(
        map((result: { username: string, isLoggedIn: string }) => new usersActions.CheckIfLoggedInSuccess(result)),
        catchError((error: Error) => of(new usersActions.CheckIfLoggedInError({ message: 'Please log in' }))),
      );
    })
  );

}
