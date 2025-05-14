import * as React from 'react';

import { ChoiceGroup } from '@devoinc/genesys-ui';

import { TComponentProps } from '../../definitions';
import { slugify } from '../../helper/strings';

type Option = {
  icon?: React.ReactNode;
  label: string;
  value: string;
  hideLabel?: boolean;
  disabled?: boolean;
};

export interface ToggleProps extends TComponentProps {
  /** Options values */
  options?: Option[];
  /** Allow to selecte several chips */
  isMulti?: boolean;
  value: string | string[];
}

const toggleArrayOption = (arr: string[], value: string) => {
  if (arr.includes(value)) {
    return arr.filter((x) => x !== value);
  } else {
    return [...arr, value];
  }
};

export const Toggle: React.FC<ToggleProps> = ({
  options = [],
  isMulti = false,
  value,
  onChange,
}) => (
  <ChoiceGroup
    colorScheme="quiet"
    selectionScheme={isMulti ? 'multiple' : 'single'}
    size="md"
    status="base"
  >
    {options.map((option) => {
      const isSelected = isMulti
        ? value.includes(option.value)
        : option.value === value;
      return (
        <ChoiceGroup.IconButton
          id={slugify(option.value)}
          key={slugify(option.value)}
          icon={option.icon}
          tooltip={option.label}
          state={isSelected ? 'selected' : 'enabled'}
          aria-selected={isSelected ? true : false}
          onChange={() => {
            onChange?.(
              isMulti
                ? toggleArrayOption(value as string[], option.value)
                : option.value,
            );
          }}
        />
      );
    })}
  </ChoiceGroup>
);
