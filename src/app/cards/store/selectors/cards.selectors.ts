import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Card } from '../../models/card.model';
import * as fromCards from '../reducers/cards.reducer';

export const getCardsFeature = createFeatureSelector<fromCards.AppState>('cardsStore');

export const getCardsState = createSelector(
  getCardsFeature,
  cardsStore => cardsStore.cards
);

export const getAllCardsEntities = createSelector(
  getCardsState,
  fromCards.selectEntities
);

export const getAllCards = createSelector(
  getCardsState,
  fromCards.selectAll
);

export const selectCard = (id: string) => createSelector(
  getAllCards,
  ((cards: Card[]) => cards.find(card => card.id === id))
);
