import * as React from 'react';

import { ColorPicker } from '@devoinc/genesys-ui-color';

import type { TComponentProps, TMethod } from '../definitions';

export interface ColorProps extends TComponentProps<string> {
  defaultValue: string;
  disabled: boolean;
  helper: string;
  method: TMethod;
  /** The name over the color */
  name: string;
}

export const Color: React.FC<ColorProps> = ({
  defaultValue = 'rgba(0,0,0,0)',
  disabled,
  helper,
  method = 'onBlur',
  name,
  onChange,
  value,
}) => (
  <ColorPicker
    defaultValue={defaultValue}
    disabled={disabled}
    helper={helper}
    id={name}
    label={name || ''}
    liveUpdate={!(method && method === 'onBlur')}
    onChange={(val: string) => onChange(val, 'value')}
    size={'sm'}
    value={value}
  />
);
