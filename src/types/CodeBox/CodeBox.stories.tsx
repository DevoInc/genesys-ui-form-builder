import { Meta, StoryObj } from '@storybook/react';

import { CodeBox } from './CodeBox';

const meta: Meta<typeof CodeBox> = {
  title: 'Types/CodeBox',
  component: CodeBox,
};

export default meta;
type Story = StoryObj<typeof CodeBox>;

export const Base: Story = {
  args: {
    editable: true,
    name: 'CodeBox name',
    padding: '0',
    placeholder: 'This is the placeholder',
    value: 'Some code for the CodeBox :)',
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'codebox',
  key: 'key',
  editable: true,
  name: 'CodeBox name',
  padding: '0',
  placeholder: 'This is the placeholder',
  value: 'Some code for the CodeBox :)',
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
    value: 'This goes inside the CodeBox',
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'codebox',
  key: 'key',
  value: 'This goes inside the CodeBox',
}`,
      },
    },
  },
};

export const Decorators: Story = {
  args: {
    name: 'This is the name',
    placeholder: 'Custom placeholder...',
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'codebox',
  key: 'key',
  name: "This is the name",
  placeholder: 'Custom placeholder...'
}`,
      },
    },
  },
};

export const Editable: Story = {
  args: {
    value: 'This goes inside the CodeBox',
    name: 'CodeBox name',
    editable: false,
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'codebox',
  key: 'key',
  value: 'This goes inside the CodeBox',
  name: 'CodeBox name',
  editable: false,
}`,
      },
    },
  },
};

export const Padding: Story = {
  args: {
    padding: '5rem',
    name: 'This is the name',
    value: 'Some code',
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'codebox',
  key: 'key',
  padding: "5rem",
  name: "This is the name",
  value: "Some code",
}`,
      },
    },
  },
};
