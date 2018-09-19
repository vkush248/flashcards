import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { ActionReducerMap } from '@ngrx/store';
import { Card } from '../../models/card.model';
import * as actions from '../actions';

export interface CardsState extends EntityState<Card> {
  loaded: boolean;
  loading: boolean;
}

export const adapter: EntityAdapter<Card> = createEntityAdapter<Card>();

export const reducers: ActionReducerMap<AppState> = {
  cards: cardsReducer,
};

export interface AppState {
  cards: CardsState;
}


export const initialState: CardsState = adapter.getInitialState({
  loaded: false,
  loading: false,
});

export function cardsReducer(
  state: CardsState = initialState,
  action: actions.CardsAction
): CardsState {
  switch (action.type) {
    case actions.LOAD_CARDS: {
      return { ...state, loading: true, loaded: false };
    }

    case actions.LOAD_CARDS_SUCCESS: {
      return adapter.addMany(action.payload, state);
    }

    case actions.LOAD_CARDS_ERROR: {
      return { ...state, loading: false, loaded: false };
    }

    case actions.UPDATE_CARD_SUCCESS:
    case actions.ADD_CARD_SUCCESS: {
      return adapter.upsertOne(action.payload, state);
    }

    case actions.DELETE_CARD: {
      return { ...state };
    }

    case actions.DELETE_CARD_SUCCESS: {
      return adapter.removeOne(action.payload, state);
    }

    case actions.DELETE_CARD_ERROR: {
      return { ...state };
    }
  }
  return state;
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} = adapter.getSelectors();
