import { Card } from '../models/card.model';
import { CardsState } from '../models/cardsState.model';
import * as actions from './cards.actions';

export const initialState: CardsState = {
  data: [
    {
      id: 1,
      topic: 'management',
      wordEn: 'a resource',
      exampleEn: 'untapped resources',
      contextEn: 'We lacked the resources to do the job properly',
      img: 'https://image.flaticon.com/icons/png/512/113/113398.png',
      wordRu: 'Ресурс',
      exampleRu: 'Неиспользованные ресурсы',
      contextRu: 'Нам не хватало ресурсов, чтобы правильно выполнять работу'
    }
  ],
  loaded: false,
  loading: false
};

export function cardsReducer(
  state = initialState,
  action: actions.CardsAction
): CardsState {
  switch (action.type) {
    case actions.LOAD_CARDS: {
      return { ...state, loading: true };
    }
    case actions.LOAD_CARDS_SUCCESS: {
      return { ...state, loading: false, loaded: true };
    }
    case actions.LOAD_CARDS_ERROR: {
      return { ...state, loading: false, loaded: false };
    }
  }
  return state;
}

export const getCards = (state: CardsState): Card[] => state.data;
export const getCardsLoaded = (state: CardsState) => state.loaded;
export const getCardsLoading = (state: CardsState) => state.loading;
