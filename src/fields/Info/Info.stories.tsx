import { Meta, StoryObj } from '@storybook/react-vite';

import { Info } from './Info';

const meta: Meta<typeof Info> = {
  title: 'Fields/Info',
  component: Info,
};

export default meta;
type Story = StoryObj<typeof Info>;

export const Base: Story = {
  args: {
    name: 'Info title',
    value: 'Info content',
    status: 'success',
    padding: '0',
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'info',
  key: 'key',
  name: 'Info title',
  value: 'Info content',
  status: 'success',
  padding: '0'
}`,
      },
    },
  },
  argTypes: {
    status: {
      options: ['success', 'error', 'warning', 'help'],
      control: { type: 'select' },
    },
  },
};

export const Status: Story = {
  args: {
    name: 'Title',
    value: 'Content',
    status: 'error',
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'info',
  key: 'key',
  name: 'Title',
  value: 'Content',
  status: 'error',
}`,
      },
    },
  },
};

export const Padding: Story = {
  args: {
    name: 'Title',
    value: 'Content',
    padding: '5rem',
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'info',
  key: 'key',
  name: 'Title',
  value: 'Content',
  padding: "5rem",
}`,
      },
    },
  },
};
