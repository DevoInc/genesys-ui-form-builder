import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Color } from './Color';

const meta: Meta<typeof Color> = {
  title: 'Fields/Color',
  component: Color,
  argTypes: {
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

export default meta;
type Story = StoryObj<typeof Color>;

export const Base: Story = {
  render: ({ value: initialValue, ...props }) => {
    const [value, setValue] = React.useState<string>(initialValue);
    return <Color {...props} value={value} onChange={setValue} />;
  },
  args: {
    defaultValue: '',
    disabled: false,
    helper: 'This is a helper text',
    method: 'onBlur',
    name: 'Color name',
    padding: '0',
    value: '#000',
  },
};

export const ValueHex: Story = {
  render: ({ value: initialValue, ...props }) => {
    const [value, setValue] = React.useState<string>(initialValue);
    return <Color {...props} value={value} onChange={setValue} />;
  },
  args: {
    value: '#F00',
    name: 'Red HEX',
  },
};

export const ValueRGB: Story = {
  render: ({ value: initialValue, ...props }) => {
    const [value, setValue] = React.useState<string>(initialValue);
    return <Color {...props} value={value} onChange={setValue} />;
  },
  args: {
    value: 'rgb(0, 255, 0)',
    name: 'Green RGB',
  },
};

export const ValueHSLA: Story = {
  render: ({ value: initialValue, ...props }) => {
    const [value, setValue] = React.useState<string>(initialValue);
    return <Color {...props} value={value} onChange={setValue} />;
  },
  args: {
    value: 'hsla(240, 100%, 50%, 0.7)',
    name: 'Blue HSLA',
  },
};

export const Decorators: Story = {
  render: ({ value: initialValue, ...props }) => {
    const [value, setValue] = React.useState<string>(initialValue);
    return <Color {...props} value={value} onChange={setValue} />;
  },
  args: {
    name: 'This is the name',
    helper: 'This is the helper',
    value: 'red',
  },
};

export const Padding: Story = {
  render: ({ value: initialValue, ...props }) => {
    const [value, setValue] = React.useState<string>(initialValue);
    return <Color {...props} value={value} onChange={setValue} />;
  },
  args: {
    padding: '5rem',
    name: 'This is the name',
    helper: 'This is the helper',
    value: 'red',
  },
};

export const Disabled: Story = {
  render: ({ value: initialValue, ...props }) => {
    const [value, setValue] = React.useState<string>(initialValue);
    return <Color {...props} value={value} onChange={setValue} />;
  },
  args: {
    name: 'This is the name',
    helper: 'This is the helper',
    value: 'red',
    disabled: true,
  },
};
