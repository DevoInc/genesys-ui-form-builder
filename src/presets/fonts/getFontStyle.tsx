import * as React from 'react';

import {
  GITextStyleBold,
  GITextStyleItalic,
  GITextStyleStrikethrough,
  GITextStyleUnderline,
} from '@devoinc/genesys-icons';

import { IModelNode } from '../../definitions';

export const getFontStyle = (
  args: { [key: string]: unknown } = {},
): IModelNode => ({
  type: 'toggle',
  name: 'Style',
  value: [],
  isMulti: true,
  options: [
    {
      icon: <GITextStyleItalic />,
      value: 'italic',
      label: 'italic',
      hideLabel: true,
    },
    {
      icon: <GITextStyleBold />,
      value: 'bold',
      label: 'bold',
      hideLabel: true,
    },
    {
      icon: <GITextStyleUnderline />,
      value: 'underline',
      label: 'underline',
      hideLabel: true,
    },
    {
      icon: <GITextStyleStrikethrough />,
      value: 'strikethrough',
      label: 'strikethrough',
      hideLabel: true,
    },
  ],
  ...args,
});
