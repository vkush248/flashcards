import * as actions from '../actions';

export interface User {
  username: string;
  password?: string;
}

export const userInitialState: User = {
  username: null,
};


export function userReducer(state: any = userInitialState, action: any) {
  const payload = action.payload;
  switch (action.type) {
    case actions.LOGIN_USER: {
      return { ...state, loading: true, loaded: false };
    }
    case actions.LOGIN_USER_ERROR: {
      return { ...state, loading: false, loaded: false };
    }
    case actions.LOGIN_USER_SUCCESS: {
      return { ...state, ...payload, loading: false, loaded: true };
    }
    case actions.LOGOUT_USER: {
      return { ...state, loading: true, loaded: false };
    }
    case actions.LOGOUT_USER_ERROR: {
      return { ...state, loading: false, loaded: false };
    }
    case actions.LOGOUT_USER_SUCCESS: {
      return { ...state, ...userInitialState, loading: false, loaded: true };
    }

  }
  return state;
}


