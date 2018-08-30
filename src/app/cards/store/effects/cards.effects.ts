import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';
import * as cardsActions from '../actions';

@Injectable()
export class CardsEffects {
  constructor(private actions$: Actions, private cardService: CardService) { }

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
  updateCard$ = this.actions$.pipe(ofType(cardsActions.UPDATE_CARD)).pipe(
    map((action: cardsActions.UpdateCard) => action.payload),
    switchMap(card$ => {
      return this.cardService.updateCard(card$)
        .pipe(
          map(card => new cardsActions.UpdateCardSuccess(card)),
          catchError(error => of(new cardsActions.UpdateCardError(error))),
      );
    })
  );

  @Effect()
  addCard$ = this.actions$.pipe(ofType(cardsActions.ADD_CARD)).pipe(
    map((action: cardsActions.AddCard) => action.payload),
    switchMap(card$ => {
      return this.cardService.addCard(card$)
        .pipe(
          map(card => new cardsActions.AddCardSuccess(card)),
          catchError(error => of(new cardsActions.AddCardError(error))),
      );
    })
  );

  @Effect()
  deleteCard$ = this.actions$.pipe(ofType(cardsActions.DELETE_CARD)).pipe(
    map((action: cardsActions.DeleteCard) => action.payload),
    switchMap(card$ => {
      return this.cardService.deleteCard(card$)
        .pipe(
          map(() => new cardsActions.DeleteCardSuccess(card$)),
          catchError(error => of(new cardsActions.DeleteCardError(error))),
      );
    })
  );
}
