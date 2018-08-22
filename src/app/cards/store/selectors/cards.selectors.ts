import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as reducers from '../reducers/cards.reducer';

export const getCardsFeature = createFeatureSelector<reducers.AppState>(
  'cardsStore'
);

export const SelectCards = createSelector(getCardsFeature, reducers.getCards);

export const SelectCardsLoaded = createSelector(
  SelectCards,
  reducers.getCardsLoaded
);

export const SelectCardsLoading = createSelector(
  SelectCards,
  reducers.getCardsLoading
);
