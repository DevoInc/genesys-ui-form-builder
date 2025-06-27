import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Bool } from './Bool';

const meta: Meta<typeof Bool> = {
  title: 'Fields/Bool',
  component: Bool,
};

export default meta;
type Story = StoryObj<typeof Bool>;

export const Base: Story = {
  render: ({ value: initialValue, ...props }) => {
    const [value, setValue] = React.useState<boolean>(initialValue);
    return <Bool {...props} value={value} onChange={setValue} />;
  },
  args: {
    helper: 'This is a helper text',
    name: 'Bool name',
    padding: '0',
    value: true,
  },
};

export const Value: Story = {
  render: ({ value: initialValue, ...props }) => {
    const [value, setValue] = React.useState<boolean>(initialValue);
    return <Bool {...props} value={value} onChange={setValue} />;
  },
  args: {
    value: true,
  },
};

export const Decorators: Story = {
  render: ({ value: initialValue, ...props }) => {
    const [value, setValue] = React.useState<boolean>(initialValue);
    return <Bool {...props} value={value} onChange={setValue} />;
  },
  args: {
    name: 'With name and helper',
    helper: 'This is the helper',
  },
};

export const Padding: Story = {
  render: ({ value: initialValue, ...props }) => {
    const [value, setValue] = React.useState<boolean>(initialValue);
    return <Bool {...props} value={value} onChange={setValue} />;
  },
  args: {
    padding: '5rem',
    name: 'With 5rem padding',
    helper: 'This is the helper',
  },
};
