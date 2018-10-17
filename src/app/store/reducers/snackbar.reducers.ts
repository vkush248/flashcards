import * as actions from '../actions';

export interface Snackbar {
  message: string;
  type: SnackbarType;
}

export type SnackbarType = 'warn' | 'success' | 'info' | 'danger';

export const snackbarInitialState: Snackbar = {
  message: null,
  type: null,
};


export function snackbarReducer(state: any = snackbarInitialState, action: any) {
  const payload = action.payload;
  switch (action.type) {
    case actions.SELECT_SNACKBAR: {
      return { ...state, ...payload };
    }
    case actions.CLOSE_SNACKBAR: {
      return { ...state, ...snackbarInitialState };
    }
    case actions.LOGIN_USER: {
      return { ...state, ...payload };
    }
    case actions.LOGOUT_USER: {
      return { ...state, ...snackbarInitialState };
    }
  }
  return state;
}
