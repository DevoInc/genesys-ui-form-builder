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
): InternalState =>
  action.type === ACTION.RESET
    ? {
        status: 'base',
        message: null,
        innerValue: action.value,
      }
    : action.type === ACTION.UPDATE_INNER_VALUE
      ? action.value !== state.innerValue
        ? { ...state, innerValue: action.value }
        : state
      : action.type === ACTION.UPDATE
        ? {
            status: action.status ?? 'base',
            message: action.message ?? null,
            innerValue: action.value,
          }
        : state;
