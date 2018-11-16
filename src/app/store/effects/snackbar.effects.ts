import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import * as cardsActions from '../../cards/store/actions';
import * as snackbarActions from '../actions/snackbar.actions';
import * as authActions from '../actions/users.actions';


@Injectable()
export class SnackbarsEffects {
  constructor(
    private actions$: Actions,
  ) { }
  @Effect()
  showErrorMessage$ = this.actions$.pipe(ofType(
    cardsActions.DELETE_CARD_ERROR,
    cardsActions.UPDATE_CARD_ERROR,
    cardsActions.ADD_CARD_ERROR,
    authActions.LOGIN_USER_ERROR,
    authActions.LOGOUT_USER_ERROR,
    authActions.REGISTER_USER_ERROR,
  )).pipe(
    map((action: any) => action.payload),
    map((payload: { message: string } = { message: 'Something went wrong!' }) => {
      return new snackbarActions.SelectSnackbar({ ...payload, type: 'warn' });
    })
  );

  @Effect()
  showSuccessMessage$ = this.actions$.pipe(ofType(
    cardsActions.ADD_CARD_TO_USERS_SUCCESS,
    cardsActions.ADD_CARD_SUCCESS,
    cardsActions.UPDATE_CARD_SUCCESS,
    cardsActions.DELETE_CARD_SUCCESS,
    cardsActions.REMOVE_CARD_SUCCESS,
  )).pipe(
    map(() => new snackbarActions.SelectSnackbar({ message: 'Done!', type: 'success' }))
  );


  @Effect()
  showWelcomeMessage$ = this.actions$.pipe(ofType(
    authActions.REGISTER_USER_SUCCESS,
  )).pipe(
    map((action: any) => action.payload),
    tap(x => console.log(x)),
    map(() => new snackbarActions.SelectSnackbar({ message: 'Welcome', type: 'success' }))
  );
}
