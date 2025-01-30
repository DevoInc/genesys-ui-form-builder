import { Meta, StoryObj } from '@storybook/react';

import { HFlex } from './HFlex';

const meta: Meta<typeof HFlex> = {
  title: 'Fields/HFlex',
  component: HFlex,
};

export default meta;
type Story = StoryObj<typeof HFlex>;

export const Base: Story = {
  args: {
    children: ['test', 'this', 'items'],
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
