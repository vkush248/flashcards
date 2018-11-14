import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import * as usersActions from '../actions';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
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
  logoutUser$ = this.actions$.pipe(ofType(usersActions.LOGOUT_USER)).pipe(
    switchMap((action: usersActions.LogoutUser) => {
      return this.authService.logOut().pipe(
        map(() => new usersActions.LogoutUserSuccess()),
        catchError((error: Error) => of(new usersActions.LogoutUserError(error)))
      );
    })
  );

}
