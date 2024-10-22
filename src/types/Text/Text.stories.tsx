import { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Types/Text',
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Base: Story = {
  args: {
    disabled: false,
    helper: 'This is a helper text',
    method: 'onBlur',
    name: 'Text',
    padding: '0',
    placeholder: 'Placeholder',
    value: 'example',
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'text',
  key: 'key',
  disabled: false,
  helper: 'This is a helper text',
  method: 'onBlur',
  name: 'Text',
  padding: '0',
  placeholder: 'Placeholder',
  value: 'example',
}`,
      },
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
};
