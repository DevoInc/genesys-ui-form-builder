import { Meta, StoryObj } from '@storybook/react';

import { List } from './List';

const meta: Meta<typeof List> = {
  title: 'Fields/List',
  component: List,
};

export default meta;
type Story = StoryObj<typeof List>;

export const Base: Story = {
  args: {
    helper: 'This is a helper text',
    isClearable: false,
    creatable: false,
    name: 'List',
    isMulti: false,
    options: [
      { value: 'a', label: 'A' },
      { value: 'b', label: 'B' },
      { value: 'c', label: 'C' },
    ],
    padding: '0',
    placeholder: 'Placeholder',
    isSortable: false,
    value: 'a',
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'list',
  key: 'key',
  helper: 'This is a helper text',
  isClearable: false,
  creatable: false,
  name: 'List',
  isMulti: false,
  options: [
    { value: 'a', label: 'A' },
    { value: 'b', label: 'B' },
    { value: 'c', label: 'C' },
  ],
  padding: '0',
  placeholder: 'Placeholder',
  isSortable: false,
  value: 'a',
}`,
      },
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
};

export const Multiple: Story = {
  args: {
    helper: 'This is a helper text',
    isClearable: false,
    isSearchable: true,
    creatable: false,
    name: 'List',
    isMulti: true,
    options: [
      { value: 'a', label: 'A' },
      { value: 'b', label: 'B' },
      { value: 'c', label: 'C' },
    ],
    padding: '0',
    placeholder: 'Placeholder',
    isSortable: true,
    value: ['a', 'b'],
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'list',
  key: 'key',
  helper: 'This is a helper text',
  isClearable: false,
  isSearchable: true,
  creatable: false,
  name: 'List',
  isMulti: true,
  options: [
    { value: 'a', label: 'A' },
    { value: 'b', label: 'B' },
    { value: 'c', label: 'C' },
  ],
  padding: '0',
  placeholder: 'Placeholder',
  isSortable: true,
  value: ['a', 'b'],
}`,
      },
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
};

export const ArrayOfNull: Story = {
  args: {
    helper: 'This is a helper text',
    isClearable: false,
    creatable: false,
    name: 'List',
    isMulti: true,
    options: [null],
    padding: '0',
    placeholder: 'Placeholder',
    isSortable: true,
    value: [null],
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'list',
  key: 'key',
  helper: 'This is a helper text',
  isClearable: false,
  creatable: false,
  name: 'List',
  isMulti: true,
  options: [null],
  padding: '0',
  placeholder: 'Placeholder',
  isSortable: true,
  value: [null],
}`,
      },
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
};
