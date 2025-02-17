import { OptionType } from './definitions';

/**
 * Extract the value from a select result
 *
 * Note: when is sortable, react-select returns an array of strings
 *
 * @param value The option or options for extract value
 * @return The value or values extracted
 */
export const getValue = (value: OptionType | OptionType[]) =>
  Array.isArray(value)
    ? value.map((item) => (typeof item === 'string' ? item : item.value))
    : value
      ? typeof value === 'string'
        ? value
        : value.value
      : [];
