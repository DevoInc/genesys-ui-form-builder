import { IModelNode } from '../../definitions';

export const getFontSize = (
  args: { [key: string]: unknown } = {},
): IModelNode => ({
  type: 'number',
  name: 'Size (px)',
  min: 16,
  max: 320,
  helper: 'Select the font size (from 16px to 320px)',
  ...args,
});
