// Filter an array of anything, if the items are arrays is recursive
// - Filter empty arrays

import { ListGroupValue } from './declarations';

// - Filter null like values
const filter = (items: ListGroupValue[]) =>
  items
    .map((item) => ({
      ...item,
      value: Array.isArray(item.value) && item.value.filter((i) => i != null),
    }))
    .filter((item) => Array.isArray(item.value) && item.value.length > 0);

/**
 * Filter list of values
 * - remove null values
 * - also removes empty arrays values
 */
export const filterNullAndEmptyValue = (value: ListGroupValue[]) =>
  Array.isArray(value) ? filter(value) : [];

/**
 * Adds an empty value at the end of the values
 *
 * @param groupsList The values collection
 * @return The values with the empty value added
 */
export const addEmptyValue = (groupsList: ListGroupValue[]): ListGroupValue[] =>
  groupsList
    ? groupsList.concat([{ label: '', value: [] }])
    : [{ label: '', value: [] }];

/**
 * Remove value given an index
 *
 * @param value The values for extract the element
 * @param index The index of the element to remove
 * @return The values without the element in the index position
 */
export const removeIndex = (value: ListGroupValue[], index: number) =>
  value ? value.filter((_item, idx) => index !== idx) : [];

/**
 * Replace an index with another element
 *
 * @param groupList The collection of values
 * @param index The index to replace
 * @param newValues The new value
 * @return The collection with the value replaced
 */
export const replaceIndex = (
  groupList: ListGroupValue[],
  index: number,
  newValues: string[]
): ListGroupValue[] =>
  groupList
    ? groupList.map((item, idx) =>
        index === idx ? { ...item, value: newValues } : item
      )
    : [];
