import { CardsState } from '../../models/cardsState.model';
import * as actions from '../actions';

export const initialState: CardsState = {
  data: [],
  loaded: false,
  loading: false
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
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }

    case actions.LOAD_CARDS_ERROR: {
      return { ...state, loading: false, loaded: false };
    }
  }
  return state;
}

export const getCards = (state: CardsState) => state.data;
export const getCardsLoaded = (state: CardsState) => state.loaded;
export const getCardsLoading = (state: CardsState) => state.loading;
