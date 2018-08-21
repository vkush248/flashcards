import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { CardsState } from '../../models/cardsState.model';
import * as fromCards from './cards.reducer';

export interface ProductsState {
  cards: CardsState;
  data?: any;
}

export const reducers: ActionReducerMap<ProductsState> = {
  cards: fromCards.cardsReducer
};

export const getProductsState = createFeatureSelector<ProductsState>(
  'cardsStore'
);

export const getCardState = createSelector(
  getProductsState,
  (state: ProductsState) => state.data
);

export const getAllCards = createSelector(getCardState, fromCards.getCards);
export const getCardsLoaded = createSelector(
  getCardState,
  fromCards.getCardsLoaded
);
export const getCardsLoading = createSelector(
  getCardState,
  fromCards.getCardsLoading
);
