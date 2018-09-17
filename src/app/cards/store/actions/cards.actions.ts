import { Action } from '@ngrx/store';
import { Card } from '../../models/card.model';
export const LOAD_CARDS = '[Card] LOAD_CARDS';
export const LOAD_CARDS_SUCCESS = '[Card] LOAD_CARDS_SUCCESS';
export const LOAD_CARDS_ERROR = '[Card] LOAD_CARDS_ERROR';
export const UPDATE_CARD = '[Card] UPDATE_CARD';
export const UPDATE_CARD_SUCCESS = '[Card] UPDATE_CARD_SUCCESS';
export const UPDATE_CARD_ERROR = '[Card] UPDATE_CARD_ERROR';
export const ADD_CARD = '[Card] ADD_CARD';
export const ADD_CARD_SUCCESS = '[Card] ADD_CARD_SUCCESS';
export const ADD_CARD_ERROR = '[Card] ADD_CARD_ERROR';
export const DELETE_CARD = '[Card] DELETE_CARD';
export const DELETE_CARD_SUCCESS = '[Card] DELETE_CARD_SUCCESS';
export const DELETE_CARD_ERROR = '[Card] DELETE_CARD_ERROR';

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
  constructor(public payload: Error) { }
}

export class UpdateCard implements Action {
  readonly type = UPDATE_CARD;
  constructor(public payload: any) { }
}

export class UpdateCardSuccess implements Action {
  readonly type = UPDATE_CARD_SUCCESS;
  constructor(public payload: Card) { }
}

export class UpdateCardError implements Action {
  readonly type = UPDATE_CARD_ERROR;
  constructor(public payload: Error) { }
}

export class AddCard implements Action {
  readonly type = ADD_CARD;
  constructor(public payload: any) { }
}

export class AddCardSuccess implements Action {
  readonly type = ADD_CARD_SUCCESS;
  constructor(public payload: Card) { }
}

export class AddCardError implements Action {
  readonly type = ADD_CARD_ERROR;
  constructor(public payload: Error) { }
}

export class DeleteCard implements Action {
  readonly type = DELETE_CARD;
  constructor(public payload: string) { }
}

export class DeleteCardSuccess implements Action {
  readonly type = DELETE_CARD_SUCCESS;
  constructor(public payload: string) { }
}

export class DeleteCardError implements Action {
  readonly type = DELETE_CARD_ERROR;
  constructor(public payload: any) { }
}

export type CardsAction =
  LoadCards
  | LoadCardsSuccess
  | LoadCardsError
  | UpdateCard
  | UpdateCardSuccess
  | UpdateCardError
  | AddCard
  | AddCardSuccess
  | AddCardError
  | DeleteCard
  | DeleteCardSuccess
  | DeleteCardError;
