import * as React from 'react';

import { Switch } from '@devoinc/genesys-ui';

import { TComponentProps } from '../../definitions';

export interface BoolProps extends TComponentProps {
  helper?: string;
  name?: string;
  value: boolean;
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
      if (onChange) {
        onChange(!value);
      }
    }}
  />
);
