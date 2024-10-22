import * as React from 'react';

import { ACTION, internalStateReducer } from './reducer';
import { defaultValidate } from './defaults';
import type { TValidateFunction } from './definitions';
import { OnChangeFuntion } from '../../../types/definitions';

interface UseInputInternalStateProps {
  value: number | string;
  onChange: OnChangeFuntion<number | string>;
  method?: 'onBlur' | 'onChange';
  validate?: TValidateFunction;
  focusRef?: React.MutableRefObject<boolean>;
}

export enum METHODS {
  'INDIRECT' = 'onBlur',
  'DIRECT' = 'onChange',
}

export const useInputInternalState = ({
  value,
  // the onChange external function
  onChange,
  // indirect or direct method
  method = METHODS.INDIRECT,
  // validate the value
  validate = defaultValidate,
  // focusRef
  focusRef = null,
}: UseInputInternalStateProps) => {
  const [state, dispatch] = React.useReducer(internalStateReducer, {
    innerValue: value,
    status: 'base',
    message: null,
  });

  React.useEffect(() => {
    if (!focusRef?.current) {
      dispatch({ type: ACTION.UPDATE_INNER_VALUE, value });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const triggerOnChange = (val?: string | number) => {
    const nextValue = val != null ? val : state.innerValue;
    const validationResult = validate(nextValue);

    if (validationResult.result && onChange && nextValue !== value) {
      onChange(nextValue, 'value', () => {
        dispatch({
          type: ACTION.RESET,
          value: value,
        });
      });
    }

    dispatch({
      type: ACTION.RESET,
      value: validationResult.result ? nextValue : value,
    });
  };

  const changeInnerValue = (val: string | number) => {
    const validationResult = validate(val);
    dispatch({
      type: ACTION.UPDATE,
      value: val,
      status: validationResult.status,
      message: validationResult.message,
    });
  };

  const handleChange =
    method === METHODS.DIRECT ? triggerOnChange : changeInnerValue;

  return {
    handleChange,
    triggerOnChange,
    ...state,
  };
};
