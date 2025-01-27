import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { ListGroup } from './ListGroup';
import { TemplateAxis } from './TemplateAxis';

const meta: Meta<typeof ListGroup> = {
  title: 'Types/ListGroup',
  component: ListGroup,
};

export default meta;
type Story = StoryObj<typeof ListGroup>;

export const Template = ({ value, ...args }) => {
  const [innerValue, setInnerValue] = React.useState(value);
  const onChangeC = React.useCallback((val) => {
    setInnerValue(val.map((v, idx) => ({ ...v, label: `xAxis${idx}` })));
  }, []);
  return <ListGroup {...args} value={innerValue} onChange={onChangeC} />;
};

export const Base: Story = {
  args: {
    helper: 'This is a helper text',
    isClearable: true,
    creatable: false,
    name: 'ListGroup',
    isMulti: false,
    consumeOptions: true,
    options: [
      { value: 'a', label: 'A' },
      { value: 'b', label: 'B' },
      { value: 'c', label: 'C' },
    ],
    padding: '0',
    placeholder: 'Placeholder',
    isSortable: false,
    value: [{ label: 'group0', value: ['a'] }],
  },
  render: (args) => <Template {...args} />,
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'listGroup',
  key: 'key',
  helper: 'This is a helper text',
  isClearable: true,
  creatable: false,
  name: 'ListGroup',
  isMulti: false,
  consumeOptions: true,
  options: [
    { value: 'a', label: 'A' },
    { value: 'b', label: 'B' },
    { value: 'c', label: 'C' },
  ],
  padding: '0',
  placeholder: 'Placeholder',
  isSortable: false,
  value: [{ label: 'group0', value: ['a'] }],
}`,
      },
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
};

export const IsMulti: Story = {
  args: {
    helper: 'This is a helper text',
    isClearable: true,
    name: 'ListGroup',
    isMulti: true,
    options: [
      { value: 'a', label: 'A' },
      { value: 'b', label: 'B' },
      { value: 'c', label: 'C' },
    ],
    value: [{ label: 'group0', value: ['a'] }],
  },
  render: (args) => <Template {...args} />,
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'listGroup',
  key: 'key',
  helper: 'This is a helper text',
  isClearable: true,
  name: 'ListGroup',
  isMulti: true,
  options: [
    { value: 'a', label: 'A' },
    { value: 'b', label: 'B' },
    { value: 'c', label: 'C' },
  ],
  value: [['a']],
}`,
      },
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
};

export const ConsumeOptions: Story = {
  args: {
    helper: 'This is a helper text',
    isClearable: true,
    name: 'ListGroup',
    isMulti: true,
    options: [
      { value: 'a', label: 'A' },
      { value: 'b', label: 'B' },
      { value: 'c', label: 'C' },
    ],
    value: [['a']],
    consumeOptions: false,
  },
  render: (args) => <Template {...args} />,
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'listGroup',
  key: 'key',
  helper: 'This is a helper text',
  isClearable: true,
  name: 'ListGroup',
  isMulti: true,
  options: [
    { value: 'a', label: 'A' },
    { value: 'b', label: 'B' },
    { value: 'c', label: 'C' },
  ],
  value: [['a']],
  consumeOptions: false,
}`,
      },
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
};

export const Axis: Story = {
  args: {
    a: {
      consumeOptions: true,
      helper:
        'Create as many axes as you need or include fields in any of the axes created. Note that you can only have one field on each axis.',
      isClearable: true,
      isMulti: true,
      label: 'X-Axis',
      options: [
        { value: 'evendate', label: 'evendate' },
        { value: 'username', label: 'username' },
        { value: 'method', label: 'method' },
      ],
      placeholder: 'Create new X-axis',
      value: [{ label: '', value: ['evendate'] }],
    },
    b: {
      helper: 'Add new axes or add new keys on the axes',
      isClearable: true,
      label: 'Y-axis',
      isMulti: true,
      options: [
        { value: 'count', label: 'count' },
        { value: 'average', label: 'average' },
        { value: 'srcPort', label: 'srcPort' },
      ],
      value: [{ label: 'yAxis0', value: ['count'] }],
      consumeOptions: true,
      placeholder: 'Create new Y-axis',
    },
  },
  render: (args) => <TemplateAxis {...args} />,
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'listGroup',
  key: 'key',
  helper: 'This is a helper text',
  isClearable: true,
  name: 'ListGroup',
  isMulti: true,
  options: [
    { value: 'a', label: 'A' },
    { value: 'b', label: 'B' },
    { value: 'c', label: 'C' },
  ],
  value: [['a']],
  consumeOptions: false,
}`,
      },
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
};
