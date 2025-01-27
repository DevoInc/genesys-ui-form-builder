import * as React from 'react';

import { Form, Typography } from '@devoinc/genesys-ui';

import { List, ListProps } from '../List';
import {
  addEmptyValue,
  filterNullAndEmptyValue,
  removeIndex,
  replaceIndex,
} from './values';
import { filterOptions, isSomeOptionUnused } from './options';
import { TComponentProps } from '../../definitions';
import { ListGroupValue } from './declarations';

export interface ListGroupProps
  extends TComponentProps,
    Pick<
      ListProps,
      | 'creatable'
      | 'helper'
      | 'id'
      | 'isClearable'
      | 'isMulti'
      | 'isSortable'
      | 'options'
      | 'placeholder'
    > {
  value: ListGroupValue[];
  /** Show only the unused options. */
  consumeOptions: boolean;
  /** Text of the ListGroup container */
  label: string;
}

export const ListGroup: React.FC<ListGroupProps> = ({
  consumeOptions = true,
  creatable,
  helper,
  isClearable,
  isMulti,
  isSortable,
  label,
  onChange,
  options,
  placeholder,
  value,
}) => {
  // remove null values and empty arrays from groups
  const normalize = filterNullAndEmptyValue(value);
  // check if all options are included in a group
  const someOptionUnused = isSomeOptionUnused(normalize, options);
  const selects = someOptionUnused ? addEmptyValue(normalize) : normalize;
  return (
    <Form.Group boxed legend={label}>
      {selects.map((val: ListGroupValue, idx: number) => {
        return (
          <List
            creatable={creatable}
            id={String(idx)}
            isClearable={isClearable}
            isMulti={isMulti}
            isSortable={isSortable}
            key={idx}
            name={val.label}
            onChange={(listValue) => {
              const newValue = replaceIndex(
                selects,
                idx,
                typeof listValue === 'string' ? [listValue] : listValue,
              );

              onChange(filterNullAndEmptyValue(newValue));
            }}
            options={
              consumeOptions
                ? filterOptions(options, removeIndex(selects, idx))
                : options
            }
            placeholder={placeholder}
            value={isMulti ? val.value : val.value[0]}
          />
        );
      })}
      {helper && (
        <Typography.Paragraph colorScheme="weak">{helper}</Typography.Paragraph>
      )}
    </Form.Group>
  );
};
