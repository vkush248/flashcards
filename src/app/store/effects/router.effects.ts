import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import * as usersActions from '../actions';

@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService,
  ) { }

  @Effect(({ dispatch: false }))
  redirectToCards$ = this.actions$.pipe(ofType(
    usersActions.LOGIN_USER_SUCCESS,
    usersActions.REGISTER_USER_SUCCESS
  )).pipe(
    tap(() => this.router.navigate(['cards'])),
  );

  @Effect(({ dispatch: false }))
  redirectToLogin$ = this.actions$.pipe(ofType(
    usersActions.LOGOUT_USER_SUCCESS
  )).pipe(
    tap(() => this.router.navigate(['login'])),
  );
}