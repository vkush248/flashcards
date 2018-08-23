import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCards from '../reducers/cards.reducer';

export const getCardsFeature = createFeatureSelector<fromCards.AppState>(
  'cardsStore'
);

export const selectCards = createSelector(getCardsFeature, fromCards.getCards);

export const selectCardsLoaded = createSelector(
  selectCards,
  fromCards.getCardsLoaded
);

export const selectCardsLoading = createSelector(
  selectCards,
  fromCards.getCardsLoading
);
