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

export interface ToggleProps extends TComponentProps<string | string[]> {
  /** Options values */
  options: Option[];
  /** Allow to selecte several chips */
  isMulti: boolean;
}

const toggleArrayOption = (arr: string[], value: string) => {
  if (arr.includes(value)) {
    return arr.filter((x) => x !== value);
  } else {
    return [...arr, value];
  }
};

export const Toggle: React.FC<ToggleProps> = ({
  options,
  isMulti = false,
  value,
  onChange,
}) => (
  <ContentSwitcher>
    {options.map((option) => (
      <ContentSwitcher.Item
        key={option.value}
        state={value === option.value ? 'selected' : undefined}
        onClick={() => {
          if (isMulti) {
            onChange?.(toggleArrayOption(value as string[], option.value));
          } else {
            onChange?.(option.value);
          }
        }}
      >
        {option.label}
      </ContentSwitcher.Item>
    ))}
  </ContentSwitcher>
);
