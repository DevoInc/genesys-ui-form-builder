import * as React from 'react';

import { Switch } from '@devoinc/genesys-ui';

import { ComponentProps } from '../definitions';

export interface BoolProps extends ComponentProps<boolean> {
  helper?: string;
  name?: string;
}

export const Bool: React.FC<BoolProps> = ({
  helper = '',
  name = '',
  onChange,
  value = false,
}) => (
  <Switch
    checked={value}
    helper={helper}
    label={name}
    labelPosition="between"
    id={name}
    onChange={() => {
      onChange(!value);
    }}
  />
);
