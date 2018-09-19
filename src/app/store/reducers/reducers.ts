import { ActionReducerMap } from '@ngrx/store';
import * as cardsActions from '../../cards/store/actions';
import * as actions from '../actions';

export const reducers: ActionReducerMap<AppState> = {
  snackbar: snackbarReducer,
};

export interface AppState {
  snackbar: Snackbar;
}

export interface Snackbar {
  message: string;
  type: SnackbarType;
}

export type SnackbarType = 'warn' | 'success' | 'info' | 'danger';

export const initialState: Snackbar = {
  message: null,
  type: null
};

export function snackbarReducer(
  state: any = initialState,
  action: any) {

  switch (action.type) {
    case actions.SELECT_SNACKBAR: {
      switch (action.payload.type) {
        case cardsActions.DELETE_CARD_ERROR:
          return { message: 'Something went wrong. The card hasn\'t been deleted.', type: 'warn' };
        case cardsActions.UPDATE_CARD_ERROR:
          return { message: 'Something went wrong. The card hasn\'t been updated.', type: 'warn' };
        case cardsActions.ADD_CARD_ERROR:
          return { message: 'Something went wrong. The card hasn\'t been added.', type: 'warn' };
        case cardsActions.DELETE_CARD_SUCCESS:
          return { message: 'You\'ve successfully deleted the card.', type: 'success' };
        case cardsActions.UPDATE_CARD_SUCCESS:
          return { message: 'You\'ve successfully updated the card.', type: 'success' };
        case cardsActions.ADD_CARD_SUCCESS:
          return { message: 'You\'ve successfully added the card.', type: 'success' };
      }
      return state;
    }
    case actions.CLOSE_SNACKBAR: {
      return { ...state, ...initialState };
    }
  }
  return state;
}
