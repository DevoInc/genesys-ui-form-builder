import * as React from 'react';

import { Select, SelectProps } from '@devoinc/genesys-ui';

import { validateOptions, validateValue } from './validations';
import { OptionType } from './definitions';
import { TComponentProps } from '../../definitions';
import { getValue } from './options';

export interface ListProps
  extends Omit<TComponentProps, 'value'>,
    Pick<
      SelectProps,
      | 'creatable'
      | 'helper'
      | 'isClearable'
      | 'isMulti'
      | 'isSearchable'
      | 'placeholder'
      | 'value'
    > {
  // value: string[] | string;
  /** Identifier */
  id: string;
  /** Allow to reorder the elements from a select */
  isSortable: boolean;
  /** Text for the label */
  name: string;
  /** Options values */
  options: OptionType[];
}

export const List: React.FC<ListProps> = ({
  name,
  helper,
  isClearable,
  isSearchable = true,
  creatable,
  id,
  isMulti,
  onChange,
  options,
  placeholder,
  isSortable,
  value,
}) => (
  <Select
    label={name}
    helper={helper}
    isClearable={isClearable}
    isSearchable={isSearchable}
    creatable={creatable}
    id={id}
    isMulti={isMulti}
    onChange={(nextValue: OptionType | OptionType[]) => {
      onChange(getValue(nextValue));
    }}
    options={validateOptions(options)}
    size={'md'}
    placeholder={placeholder}
    sortable={isSortable}
    value={validateValue(value)}
  />
);
