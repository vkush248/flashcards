import * as actions from '../actions';

export interface User {
  username: string;
  password?: string;
  isLoggedIn: boolean;
}

export const userInitialState: User = {
  username: null,
  isLoggedIn: false,
};


export function userReducer(state: User = userInitialState, action: any) {
  const payload = action.payload;
  switch (action.type) {

    case actions.LOGIN_USER:
    case actions.REGISTER_USER:
    case actions.LOGOUT_USER: {
      return { ...state, loading: true, loaded: false };
    }

    case actions.LOGIN_USER_ERROR:
    case actions.REGISTER_USER_ERROR:
    case actions.LOGOUT_USER_ERROR: {
      return { ...state, loading: false, loaded: false };
    }

    case actions.LOGIN_USER_SUCCESS:
    case actions.REGISTER_USER_SUCCESS: {
      return { ...state, ...payload, isLoggedIn: true, loading: false, loaded: true };
    }

    case actions.checkIfLoggedInSuccess: {
      return { ...state, ...payload, loading: false, loaded: true };
    }

    case actions.LOGOUT_USER_SUCCESS: {
      return { ...state, ...userInitialState, loading: false, loaded: true };
    }

  }
  return state;
}


