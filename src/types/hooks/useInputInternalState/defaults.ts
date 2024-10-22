import { TValidateFunction } from './definitions';

/**
 * Return a default positive validation
 *
 * @return The positive validation
 */
export const defaultValidate: TValidateFunction = () => ({
  result: true,
  status: 'base',
  message: null,
});
