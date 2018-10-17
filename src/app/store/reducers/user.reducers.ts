import * as actions from '../actions';

export interface User {
  username: string;
}

export const userInitialState: User = {
  username: null,
};


export function userReducer(state: any = userInitialState, action: any) {
  const payload = action.payload;
  switch (action.type) {
    case actions.SELECT_SNACKBAR: {
      return { ...state, ...payload };
    }
    case actions.CLOSE_SNACKBAR: {
      return { ...state, ...userInitialState };
    }
    case actions.LOGIN_USER: {
      return { ...state, ...payload };
    }
    case actions.LOGOUT_USER: {
      return { ...state, ...userInitialState };
    }
  }
  return state;
}
