import { Meta, StoryObj } from '@storybook/react';

import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Types/Toggle',
  component: Toggle,
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Base: Story = {
  args: {
    value: 'left',
    options: [
      {
        icon: 'text_align_left_paragraph',
        label: 'Left',
        value: 'left',
      },
      {
        icon: 'text_align_center_paragraph',
        label: 'Center',
        value: 'center',
      },
      {
        icon: 'text_align_right_paragraph',
        label: 'Right',
        value: 'right',
      },
    ],
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'toggle',
  key: 'key',
  value: 'left'
  options: [
    {
      icon: 'text_align_left_paragraph',
      label: 'Left',
      value: 'left',
    },
    {
      icon: 'text_align_center_paragraph',
      label: 'Center',
      value: 'center',
    },
    {
      icon: 'text_align_right_paragraph',
      label: 'Right',
      value: 'right',
    },
  ],
}`,
      },
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
};
