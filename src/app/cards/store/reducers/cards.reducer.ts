import { ActionReducerMap } from '@ngrx/store';
import { Card } from '../../models/card.model';
import * as actions from '../actions';
export const reducers: ActionReducerMap<AppState> = {
  cards: cardsReducer,
};

export interface AppState {
  cards: CardsState;
}
export interface CardsState {
  cards: Card[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: CardsState = {
  cards: [],
  loaded: false,
  loading: false,
};

export function cardsReducer(
  state: any = initialState,
  action: actions.CardsAction
): CardsState {
  switch (action.type) {
    case actions.LOAD_CARDS: {
      return { ...state, loading: true };
    }

    case actions.LOAD_CARDS_SUCCESS: {
      const cards = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        cards,
      };
    }

    case actions.LOAD_CARDS_ERROR: {
      return { ...state, loading: false, loaded: false };
    }

    case actions.UPDATE_CARD_SUCCESS: {
      const updatedCard = action.payload;
      const cards = [
        ...state.cards.map(card => (card.id === updatedCard.id) ? updatedCard : card),
      ];
      return { ...state, loading: false, loaded: true, cards };
    }

    case actions.ADD_CARD_SUCCESS: {
      const card = action.payload;
      const cards = [...state.cards, card];
      return { ...state, loading: false, loaded: true, cards };
    }

    case actions.DELETE_CARD_SUCCESS: {
      const id = action.payload;
      const cards = [...state.cards.filter(card => card.id !== id)];
      return { ...state, loading: false, loaded: true, cards };
    }
  }
  return state;
}

export const getCards = (state: AppState) => state.cards;
export const getCardsLoaded = (state: CardsState) => state.loaded;
export const getCardsLoading = (state: CardsState) => state.loading;
