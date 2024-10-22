import { OptionType } from '../List/definitions';
import { ListGroupValue } from './declarations';

/**
 * Filter option list
 *
 * @param options The options to filter
 * @param valuesToRemove The values to be remove
 * @return List of options filtered
 */
export const filterOptions = (
  options: OptionType[],
  valuesToRemove: ListGroupValue[]
) =>
  options.filter(
    (option) =>
      !valuesToRemove.some((value) => value.value.includes(option.value))
  );

export const isSomeOptionUnused = (
  groupsList: ListGroupValue[],
  options: OptionType[]
) => {
  const optionsUsed = [];
  groupsList.map((n) => n.value.map((x) => optionsUsed.push(x)));
  return optionsUsed.length !== options.length ? true : false;
};
