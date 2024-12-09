import * as React from 'react';

import { Textarea, type TFieldStatus } from '@devoinc/genesys-ui';

import { useInputInternalState, TValidateFunction, METHODS } from '../../hooks';
import { TComponentProps, TMethod } from '../definitions';
import { useFocus } from '../../hooks/useFocus';

export interface TextAreaProps extends TComponentProps<string> {
  disabled: boolean;
  helper: string;
  id: string;
  method: TMethod;
  name: string;
  placeholder: string;
  validation: TValidateFunction;
  rows: number;
}

export const TextArea: React.FC<TextAreaProps> = ({
  disabled,
  helper,
  method = METHODS.INDIRECT,
  name,
  onChange,
  placeholder,
  validation,
  value,
  rows,
  id,
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
    <Textarea
      id={id}
      disabled={disabled}
      helper={status === 'error' ? message : helper}
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
      onFocus={takeFocus} // TODO: it's used?
      placeholder={placeholder}
      status={status as TFieldStatus}
      rows={rows}
      value={innerValue}
    />
  );
};
