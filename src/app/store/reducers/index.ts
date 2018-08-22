import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromCards from './cards.reducer';

export const reducers: ActionReducerMap<fromCards.AppState> = {
  cards: fromCards.cardsReducer,
};

export const getCardsFeature = createFeatureSelector<fromCards.AppState>(
  'cardsStore'
);

export const getAllCards = createSelector(getCardsFeature, fromCards.getCards);

export const getCardsLoaded = createSelector(
  getAllCards,
  fromCards.getCardsLoaded
);

export const getCardsLoading = createSelector(
  getAllCards,
  fromCards.getCardsLoading
);
