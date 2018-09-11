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
  entities: { [id: number]: Card };
  loaded: boolean;
  loading: boolean;
}

export const initialState: CardsState = {
  entities: {},
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

      const entities = cards.reduce(
        (entities: { [id: number]: Card }, card: Card) => {
          return { ...entities, [card.id]: card };
        },
        { ...state.entities }
      );
      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
      };
    }

    case actions.LOAD_CARDS_ERROR: {
      return { ...state, loading: false, loaded: false };
    }

    case actions.UPDATE_CARD_SUCCESS:
    case actions.ADD_CARD_SUCCESS: {
      const card = action.payload;
      const entities = {
        ...state.entities,
        [card.id]: card,
      };
      return { ...state, entities };
    }

    case actions.DELETE_CARD_SUCCESS: {
      const id = action.payload;
      const { [id]: removed, ...entities } = state.entities;
      return { ...state, entities };
    }
  }
  return state;
}

export const getCardsEntities = (state: CardsState) => state.entities;
export const getCardsLoaded = (state: CardsState) => state.loaded;
export const getCardsLoading = (state: CardsState) => state.loading;
