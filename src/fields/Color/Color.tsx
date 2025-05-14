import * as React from 'react';

import { ColorPicker } from '@devoinc/genesys-ui-color';

import type { TComponentProps, TMethod } from '../../definitions';
import { slugify } from '../../helper/strings';
export interface ColorProps extends TComponentProps {
  value: string;
  defaultValue: string;
  disabled: boolean;
  helper: string;
  method: TMethod;
  /** The name over the color */
  name: string;
}

export const Color: React.FC<ColorProps> = ({
  defaultValue = 'rgba(0,0,0,0)',
  disabled = false,
  helper,
  method = 'onBlur',
  name = '',
  onChange,
  value,
}) => (
  <ColorPicker
    defaultValue={defaultValue}
    disabled={disabled}
    helper={helper}
    id={slugify(name)}
    label={name}
    liveUpdate={!(method && method === 'onBlur')}
    onChange={(val: string) => onChange(val, 'value')}
    size={'sm'}
    value={value}
  />
);
