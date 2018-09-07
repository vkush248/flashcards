import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Card } from '../../models/card.model';
import * as fromCards from '../reducers/cards.reducer';

export const getCardsFeature = createFeatureSelector('cardsStore');

export const selectCards = createSelector(getCardsFeature, fromCards.getCards);

export const selectCard = (id: string) => createSelector<Object, Object, Card>(
  selectCards,
  ((cards: Card[]) => cards.find(card => card.id === id))
);

export const selectCardsLoaded = createSelector(
  selectCards,
  fromCards.getCardsLoaded
);

export const selectCardsLoading = createSelector(
  selectCards,
  fromCards.getCardsLoading
);
