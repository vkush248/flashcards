import * as actions from '../actions';

export interface Dialog {
  config: {
    width: string,
    data: {
      title: string,
      message: string,
      ok: string,
      cancel: string,
    }
  };
  action?: {
    name: string,
    payload?: any
  };
}

export const dialogInitialState: Dialog = {
  config: null,
};

export function dialogReducer(state: any = dialogInitialState, action: any) {
  const payload = action.payload;
  switch (action.type) {
    case actions.OPEN_DIALOG: {
      return { ...state, ...payload };
    }
    case actions.CLOSE_DIALOG: {
      return { ...state, ...dialogInitialState };
    }
  }
  return state;
}
