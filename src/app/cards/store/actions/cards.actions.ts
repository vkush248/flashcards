import { Action } from '@ngrx/store';
import { Card } from '../../models/card.model';

export const LOAD_CARDS = '[Card] LOAD_CARDS';
export const LOAD_CARDS_SUCCESS = '[Card] LOAD_CARDS_SUCCESS';
export const LOAD_CARDS_ERROR = '[Card] LOAD_CARDS_ERROR';
export const UPDATE_CARD = '[Card] UPDATE_CARD';
export const UPDATE_CARD_SUCCESS = '[Card] UPDATE_CARD_SUCCESS';
export const UPDATE_CARD_ERROR = '[Card] UPDATE_CARD_ERROR';

export class LoadCards implements Action {
  readonly type = LOAD_CARDS;
  constructor(public payload: any = new Error('no payload')) { }
}

export class LoadCardsSuccess implements Action {
  readonly type = LOAD_CARDS_SUCCESS;
  constructor(public payload: Card[]) { }
}

export class LoadCardsError implements Action {
  readonly type = LOAD_CARDS_ERROR;
  constructor(public payload: any) { }
}

export class UpdateCard implements Action {
  readonly type = UPDATE_CARD;
  constructor(public payload: Card) { }
}
export class UpdateCardSuccess implements Action {
  readonly type = UPDATE_CARD_SUCCESS;
  constructor(public payload: Card) { }
}
export class UpdateCardError implements Action {
  readonly type = UPDATE_CARD_ERROR;
  constructor(public payload: any) { }
}

export type CardsAction =
  LoadCards
  | LoadCardsSuccess
  | LoadCardsError
  | UpdateCard
  | UpdateCardSuccess
  | UpdateCardError;
