import { TFieldStatus } from '@devoinc/genesys-ui';

export const ACTION = {
  RESET: 0,
  UPDATE_INNER_VALUE: 1,
  UPDATE: 2,
};

export interface InternalStateAction {
  type: number;
  value?: number | string;
  status?: TFieldStatus;
  message?: string;
}

export interface InternalState {
  status: TFieldStatus;
  message: string;
  innerValue: number | string;
}

export const internalStateReducer = (
  state: InternalState,
  action: InternalStateAction,
) => {
  switch (action.type) {
    case ACTION.RESET:
      return { status: null, message: null, innerValue: action.value };
    case ACTION.UPDATE_INNER_VALUE:
      return action.value !== state.innerValue
        ? { ...state, innerValue: action.value }
        : state;
    case ACTION.UPDATE:
      return {
        status: action.status ?? null,
        message: action.message ?? null,
        innerValue: action.value,
      };
  }
  return state;
};
