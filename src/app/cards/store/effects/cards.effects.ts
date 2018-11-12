import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';
import * as cardsActions from '../actions';

@Injectable()
export class CardsEffects {
  constructor(
    private actions$: Actions,
    private cardService: CardService,
  ) { }

  @Effect()
  loadCards$ = this.actions$.pipe(ofType(cardsActions.LOAD_CARDS)).pipe(
    switchMap((action: cardsActions.LoadCards) => {
      return this.cardService.getCards().pipe(
        map((cards: Card[]) => new cardsActions.LoadCardsSuccess(cards)),
        catchError((error: Error) => of(new cardsActions.LoadCardsError(error)))
      );
    })
  );

  @Effect()
  loadUsersCards$ = this.actions$.pipe(ofType(cardsActions.LOAD_USERS_CARDS)).pipe(
    switchMap((action: cardsActions.LoadUsersCards) => {
      return this.cardService.getUsersCards(action.payload).pipe(
        map((cards: Card[]) => new cardsActions.LoadUsersCardsSuccess(cards)),
        catchError((error: Error) => of(new cardsActions.LoadUsersCardsError(error)))
      );
    })
  );

  @Effect()
  loadCard$ = this.actions$.pipe(ofType(cardsActions.LOAD_CARD)).pipe(
    map((action: cardsActions.LoadCard) => action.payload),
    switchMap((id) => {
      return this.cardService.getCard(id).pipe(
        map((card: Card) => new cardsActions.LoadCardSuccess(card)),
        catchError((error: Error) => of(new cardsActions.LoadCardError(error)))
      );
    })
  );

  @Effect()
  updateCard$ = this.actions$.pipe(ofType(cardsActions.UPDATE_CARD)).pipe(
    map((action: cardsActions.UpdateCard) => action.payload),
    switchMap(card => {
      return this.cardService.updateCard(card)
        .pipe(
          map(response => new cardsActions.UpdateCardSuccess(card)),
          catchError(error => of(new cardsActions.DeleteCardError(JSON.parse(error._body))))
        );
    })
  );

  @Effect()
  addCard$ = this.actions$.pipe(ofType(cardsActions.ADD_CARD)).pipe(
    map((action: cardsActions.AddCard) => action.payload),
    switchMap(card => {
      return this.cardService.addCard(card)
        .pipe(
          // tslint:disable-next-line:no-shadowed-variable
          map(card => new cardsActions.AddCardSuccess(card)),
          catchError(error => of(new cardsActions.DeleteCardError(JSON.parse(error._body))))
        );
    })
  );

  @Effect()
  deleteCard$ = this.actions$.pipe(ofType(cardsActions.DELETE_CARD)).pipe(
    map((action: cardsActions.DeleteCard) => action.payload),
    switchMap((id: string) => {
      return this.cardService.deleteCard(id)
        .pipe(
          map(() => new cardsActions.DeleteCardSuccess(id)),
          catchError(error => of(new cardsActions.DeleteCardError(JSON.parse(error._body))))
        );
    })
  );


}
