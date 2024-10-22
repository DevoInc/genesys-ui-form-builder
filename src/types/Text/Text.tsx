import * as React from 'react';

import { Input } from '@devoinc/genesys-ui';

import {
  useInputInternalState,
  type TValidateFunction,
  METHODS,
} from '../hooks';
import { ComponentProps, Method } from '../definitions';
import { useFocus } from '../hooks/useFocus';

export interface TextProps extends ComponentProps<string> {
  disabled: boolean;
  helper: string;
  id: string;
  method: Method;
  name: string;
  placeholder: string;
  validation: TValidateFunction;
}

export const Text: React.FC<TextProps> = ({
  disabled,
  helper,
  id,
  method = METHODS.INDIRECT,
  name,
  onChange,
  placeholder,
  validation,
  value,
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
  console.log(status);
  return (
    <Input
      disabled={disabled}
      helper={message || helper}
      id={id}
      label={name}
      onBlur={() => {
        looseFocus();
        if (method === METHODS.INDIRECT) {
          triggerOnChange();
        }
      }}
      onChange={(event) => {
        handleChange((event.target as HTMLInputElement).value);
      }}
      onFocus={takeFocus}
      onKeyUp={(event) => {
        if (event.key === 'Enter') {
          triggerOnChange();
        }
      }}
      placeholder={placeholder}
      status={status}
      value={innerValue}
    />
  );
};
