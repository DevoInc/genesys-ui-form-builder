import { OptionType } from './definitions';

/**
 * Extract the value from a select result
 *
 * @param value The option or options for extract value
 * @return The value or values extracted
 */
export const getValue = (value: OptionType | OptionType[]) =>
  Array.isArray(value)
    ? value.map((item) => item.value)
    : value
    ? value.value
    : [];
