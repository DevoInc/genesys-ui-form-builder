import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { HFlex } from './HFlex';
import { Typography } from '@devoinc/genesys-ui';

const meta: Meta<typeof HFlex> = {
  title: 'Fields/HFlex',
  component: HFlex,
};

export default meta;
type Story = StoryObj<typeof HFlex>;

export const Base: Story = {
  args: {
    children: [
      <Typography>Left</Typography>,
      <Typography>Center</Typography>,
      <Typography>Right</Typography>,
    ],
    justifyContent: 'space-between',
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'hflex',
  key: 'key',
  children: [
    'test',
    'this',
    'items'
  ],
  justifyContent: 'space-between',
}`,
      },
    },
  },
};
