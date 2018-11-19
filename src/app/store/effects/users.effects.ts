import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import * as usersActions from '../actions';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService,
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
    switchMap((action: usersActions.CheckIfLoggedIn) => {
      return this.authService.isLoggedIn().pipe(
        map((isLoggedIn: boolean) => {
          if (!isLoggedIn) {
            this.router.navigate(['/login']);
            throw new Error('Please log in');
          }
        }),
        map((isLoggedIn: boolean) => new usersActions.CheckIfLoggedInSuccess({ isLoggedIn })),
        catchError((error: Error) => of(new usersActions.CheckIfLoggedInError({ message: error.message }))),
      );
    })
  );

}
