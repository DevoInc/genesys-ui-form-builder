import { Meta, StoryObj } from '@storybook/react';

import { Color } from './Color';

const meta: Meta<typeof Color> = {
  title: 'Types/Color',
  component: Color,
};

export default meta;
type Story = StoryObj<typeof Color>;

export const Base: Story = {
  args: {
    defaultValue: '',
    disabled: false,
    helper: 'This is a helper text',
    method: 'onBlur',
    name: 'Color name',
    padding: '0',
    value: '#000',
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'color',
  key: 'key',
  defaultValue: '#000',
  disabled: false,
  helper: 'This is a helper text',
  method: 'onBlur',
  name: 'Color name',
  padding: '0',
  value: '#000',
}`,
      },
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
    method: {
      options: ['onBlur', 'onChange'],
      control: { type: 'radio' },
    },
    value: {
      control: {
        type: 'color',
      },
    },
  },
};

export const ValueHex: Story = {
  args: {
    value: '#F00',
    name: 'Red HEX',
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'color',
  key: 'key',
  value: '#F00',
  name: 'Red HEX',
}`,
      },
    },
  },
};

export const ValueRGB: Story = {
  args: {
    value: 'rgb(0, 255, 0)',
    name: 'Green RGB',
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'color',
  key: 'key',
  value: 'rgb(0, 255, 0)',
  name: 'Green RGB',
}`,
      },
    },
  },
};

export const ValueHSLA: Story = {
  args: {
    value: 'hsla(240, 100%, 50%, 0.7)',
    name: 'Blue HSLA',
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'color',
  key: 'key',
  value: 'hsla(240, 100%, 50%, 0.7)',
  name: 'Blue HSLA',
}`,
      },
    },
  },
};

export const Decorators: Story = {
  args: {
    name: 'This is the name',
    helper: 'This is the helper',
    value: 'red',
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'color',
  key: 'key',
  value: 'red',
  name: "This is the name",
  helper: "This is the helper",
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
    value: 'red',
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'color',
  key: 'key',
  value: 'red',
  name: "This is the name",
  helper: "This is the helper",
  padding: "5rem",
}`,
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    name: 'This is the name',
    helper: 'This is the helper',
    value: 'red',
    disabled: true,
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'color',
  key: 'key',
  value: 'red',
  name: "This is the name",
  helper: "This is the helper",
  disabled: true,
}`,
      },
    },
  },
};
