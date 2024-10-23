import * as React from 'react';

import { Input, InputProps } from '@devoinc/genesys-ui';

import {
  useInputInternalState,
  type TValidateFunction,
  METHODS,
} from '../hooks';
import { normalize, round } from './filter';
import { TComponentProps, TMethod } from '../definitions';
import { useFocus } from '../hooks/useFocus';

export interface NumberProps extends TComponentProps<number> {
  id: string;
  method: TMethod;
  min: number;
  max: number;
  disabled: boolean;
  float: boolean;
  helper: string;
  name: string;
  placeholder: string;
  status: InputProps['status'];
  step: number;
  validation: TValidateFunction;
}

export const Number: React.FC<NumberProps> = ({
  id,
  value,
  method = METHODS.INDIRECT,
  min,
  max,
  float: hasFloat = true,
  onChange,
  validation,
  disabled,
  helper,
  name,
  placeholder,
  step,
}) => {
  const { focusRef, takeFocus, looseFocus } = useFocus();
  const { innerValue, status, message, triggerOnChange, handleChange } =
    useInputInternalState({
      method,
      onChange,
      validate: validation,
      value,
      focusRef,
    });
  return (
    <Input
      id={id}
      disabled={disabled}
      helper={message || helper}
      label={name}
      max={max}
      min={min}
      onBlur={(event) => {
        looseFocus();
        if (method === METHODS.INDIRECT) {
          const eventValue = +(event.target as HTMLInputElement).value;
          const nextValue = round(normalize(eventValue, min, max), hasFloat);
          triggerOnChange(nextValue);
        }
      }}
      onChange={(event) => {
        const eventValue = (event.target as HTMLInputElement).value;
        handleChange(eventValue);
      }}
      onClick={(event: React.MouseEvent<HTMLInputElement>) => {
        (event.target as HTMLInputElement).select();
      }}
      onFocus={takeFocus}
      onKeyUp={(event) => {
        if (event.key === 'Enter') {
          const eventValue = +(event.target as HTMLInputElement).value;
          const nextValue = round(normalize(eventValue, min, max), hasFloat);
          triggerOnChange(nextValue);
        }
      }}
      placeholder={placeholder}
      type="number"
      status={status}
      step={step}
      value={innerValue != null ? innerValue : ''}
    />
  );
};
