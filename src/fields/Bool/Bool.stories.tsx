import { Meta, StoryObj } from '@storybook/react';

import { Bool } from './Bool';

const meta: Meta<typeof Bool> = {
  title: 'Types/Bool',
  component: Bool,
};

export default meta;
type Story = StoryObj<typeof Bool>;

export const Base: Story = {
  args: {
    helper: 'This is a helper text',
    name: 'Bool name',
    padding: '0',
    value: true,
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'bool',
  key: 'key',
  value: true,
  name: 'Bool name',
  helper: 'This is a helper text',
  padding: '0'
}`,
      },
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
};

export const Value: Story = {
  args: {
    value: true,
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'bool',
  key: 'key',
  value: true,
}`,
      },
    },
  },
  argTypes: {
    value: { table: { defaultValue: { summary: 'false' } } },
  },
};

export const Decorators: Story = {
  args: {
    name: 'This is the name',
    helper: 'This is the helper',
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'bool',
  key: 'key',
  name: "This is the name",
  helper: 'This is a helper text',
}`,
      },
    },
  },
};

export const Padding: Story = {
  args: {
    padding: '5rem',
    name: 'This is the name',
    helper: 'This is the helper',
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'bool',
  key: 'key',
  padding: "5rem",
  name: "This is the name",
  helper: "This is the helper",
}`,
      },
    },
  },
};
