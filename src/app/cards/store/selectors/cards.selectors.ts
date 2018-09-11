import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Card } from '../../models/card.model';
import * as fromCards from '../reducers/cards.reducer';

export const getCardsFeature = createFeatureSelector<fromCards.AppState>('cardsStore');

export const getCardsState = createSelector(
  getCardsFeature,
  (state: fromCards.AppState): fromCards.CardsState => state.cards
);

export const getAllCardsEntities = createSelector(getCardsState, fromCards.getCardsEntities);

export const getAllCards = createSelector(
  getAllCardsEntities,
  entities => Object.keys(entities).map(id => entities[id])
);

export const selectCard = (id: string) => createSelector(
  getAllCards,
  ((cards: Card[]) => cards.find(card => card.id === id))
);

export const selectCardsLoaded = createSelector(
  getCardsState,
  fromCards.getCardsLoaded
);

export const selectCardsLoading = createSelector(
  getCardsState,
  fromCards.getCardsLoading
);
