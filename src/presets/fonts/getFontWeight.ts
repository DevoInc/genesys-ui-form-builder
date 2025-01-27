import { IModelNode } from '../../definitions';

export const getFontWeight = (
  args: { [key: string]: unknown } = {},
): IModelNode => ({
  type: 'list',
  name: 'Weight',
  options: [
    { value: '100', label: '100 - Extra Light or Ultra Light' },
    { value: '200', label: '200 - Light or Thin' },
    { value: '300', label: '300 - Book or Demi' },
    { value: '400', label: '400 - Normal or Regular' },
    { value: '500', label: '500 - Medium' },
    { value: '600', label: '600 - Semibold, Demibold' },
    { value: '700', label: '700 - Bold' },
    { value: '800', label: '800 - Black, Extra Bold or Heavy' },
    { value: '900', label: '900 - Extra Black, Fat, Poster or Ultra Black' },
  ],
  ...args,
});
