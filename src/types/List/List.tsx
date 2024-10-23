import * as React from 'react';

import { Select } from '@devoinc/genesys-ui';

import { validateOptions, validateValue } from './validations';
import { OptionType } from './definitions';
import { TComponentProps } from '../definitions';
import { getValue } from './options';

export interface ListProps extends TComponentProps<string[] | string> {
  /** Allow to create items */
  creatable?: boolean;
  /** Text to show at the bottom of the component */
  helper?: string;
  /** Identifier */
  id: string;
  /** Allow to remove all elements from a select */
  isClearable?: boolean;
  /** Allow multiple options */
  isMulti?: boolean;
  /** Allow to show a serach of options */
  isSearchable?: boolean;
  /** Allow to reorder the elements from a select */
  isSortable: boolean;
  /** Text for the label */
  name: string;
  /** Options values */
  options: OptionType[];
  /** Text for the placeholder of the select */
  placeholder: string;
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
    placeholder={placeholder}
    sortable={isSortable}
    value={validateValue(value)}
  />
);
