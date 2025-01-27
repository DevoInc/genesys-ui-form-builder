import { OptionType } from './definitions';

const notValid = (option: OptionType | string | number) => !!option;

export const validateOptions = (options: OptionType[]): OptionType[] =>
  options.filter(notValid);

export const validateValue = (value: (string | number)[] | string | number) =>
  value instanceof Array ? value.filter(notValid) : value;
