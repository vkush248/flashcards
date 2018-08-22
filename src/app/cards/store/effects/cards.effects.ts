import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';
import * as cardsActions from '../actions';
@Injectable()
export class CardsEffects {
  constructor(private actions$: Actions, private cardService: CardService) {}

  @Effect()
  loadCards$ = this.actions$.pipe(ofType(cardsActions.LOAD_CARDS)).pipe(
    switchMap((action: cardsActions.LoadCards) => {
      return of(this.cardService.getMockedCards()).pipe(
        map((cards: Card[]) => new cardsActions.LoadCardsSuccess(cards)),
        catchError((error: Error) => of(new cardsActions.LoadCardsError(error)))
      );
    })
  );
}
