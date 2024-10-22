import * as React from 'react';

import { ContentSwitcher } from '@devoinc/genesys-ui';

import { TComponentProps } from '../definitions';

type Option = {
  icon?: string;
  label: string;
  value: string;
  hideLabel?: boolean;
  disabled?: boolean;
};

type Props = TComponentProps<string> & {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

export const Toggle: React.FC<Props> = ({ options, value, onChange }) => (
  <ContentSwitcher>
    {options.map((option) => (
      <ContentSwitcher.Item
        key={option.value}
        state={value === option.value ? 'selected' : null}
        onClick={() => {
          onChange?.(option.value);
        }}
      >
        {option.label}
      </ContentSwitcher.Item>
    ))}
  </ContentSwitcher>
);
