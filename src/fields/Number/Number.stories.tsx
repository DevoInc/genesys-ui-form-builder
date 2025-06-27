import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Flex } from '@devoinc/genesys-ui';

import { Number } from './Number';
import { FormBuilder } from '../../components';

const meta: Meta<typeof Number> = {
  title: 'Fields/Number',
  component: Number,
};

export default meta;
type Story = StoryObj<typeof Number>;

export const Base: Story = {
  args: {
    disabled: false,
    float: true,
    helper: 'This is a helper text',
    max: 100,
    method: 'onBlur',
    min: 0,
    name: 'Number',
    padding: '0',
    placeholder: 'Placeholder',
    step: 1,
    value: 50,
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'number',
  key: 'key',
  disabled: false,
  float: true,
  helper: 'This is a helper text',
  max: 100,
  method: 'onBlur',
  min: 0,
  name: 'Number',
  padding: '0',
  placeholder: 'Placeholder',
  step: 1,
  value: 50,
}`,
      },
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
};

export const Float: Story = {
  args: {
    float: true,
    helper: 'This is a helper text',
    name: 'Float number',
    value: 3.14,
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'number',
  key: 'key',
  float: true,
  helper: 'This is a helper text',
  name: 'Float number',
  value: 3.14,
}`,
      },
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
};

export const Limits: Story = {
  render: () => {
    const [model, setModel] = React.useState({
      children: [
        {
          type: 'number',
          key: 'key',
          helper: 'This is a helper text',
          name: 'Limit number',
          value: 5,
          min: 0,
          max: 10,
        },
      ],
    });
    return <FormBuilder model={model} onChange={setModel} />;
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'number',
  key: 'key',
  helper: 'This is a helper text',
  name: 'Limit number',
  value: 5,
  min: 0,
  max: 10,
}`,
      },
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
};

export const Validation: Story = {
  render: () => {
    const [model, setModel] = React.useState({
      children: [
        {
          type: 'number',
          key: 'key',
          name: 'Number under 10',
          value: 5,
          validation: (x) =>
            x < 10
              ? { result: true }
              : {
                  result: false,
                  status: 'error',
                  message: 'The number is over 10',
                },
        },
      ],
    });
    return <FormBuilder model={model} onChange={setModel} />;
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'number',
  key: 'key',
  name: 'Number under 10',
  value: 5,
  validation: (x) =>
    x < 10
      ? { result: true }
      : {
          result: false,
          status: 'error',
          message: 'The number is over 10',
        },
}`,
      },
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
};

export const ValidationStartingWithNull: Story = {
  render: () => {
    const [model, setModel] = React.useState({
      children: [
        {
          type: 'number',
          key: 'key',
          name: 'Number under 10',
          value: undefined,
          validation: (x) =>
            x < 10
              ? { result: true }
              : {
                  result: false,
                  status: 'error',
                  message: 'The number is over 10',
                },
        },
      ],
    });
    return <FormBuilder model={model} onChange={setModel} />;
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'number',
  key: 'key',
  name: 'Number under 10',
  value: undefined,
  validation: (x) =>
    x < 10
      ? { result: true }
      : {
          result: false,
          status: 'error',
          message: 'The number is over 10',
        },
}`,
      },
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
};

export const MinAndMax: Story = {
  args: {
    disabled: false,
    float: true,
    helper: 'This is a helper text',
    max: 100,
    method: 'onBlur',
    min: 0,
    name: 'Number',
    padding: '0',
    placeholder: 'Placeholder',
    step: 1,
    value: 50,
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `[
  {
    type: 'number',
    key: 'val1',
    value: 40,
    validation={(val) => {
      return val > val2
        ? {
            result: false,
            status: 'error',
            message: 'Min cant be greater than Max',
          }
        : { result: true };
    }}
  },
  {
    type: 'number',
    key: 'val2',
    value: 50,
    validation={(val) => {
      return val < val1
        ? {
            result: false,
            status: 'error',
            message: 'Max cant be lower than Min',
          }
        : { result: true };
    }}
  }
]`,
      },
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
  render: (args) =>
    (({ onChange }) => {
      const [val1, setVal1] = React.useState(40);
      const [val2, setVal2] = React.useState(50);
      return (
        <Flex>
          <Number
            name={'Min'}
            value={val1}
            onChange={(_path, _prop, val) => {
              setVal1(val);
              onChange(val, val2);
            }}
            validation={(val) => {
              return val > val2
                ? {
                    result: false,
                    status: 'error',
                    message: 'Min cant be greater than Max',
                  }
                : { result: true };
            }}
          />
          <Number
            name={'Max'}
            value={val2}
            onChange={(_path, _prop, val) => {
              setVal2(val);
              onChange(val1, val);
            }}
            validation={(val) => {
              return val < val1
                ? {
                    result: false,
                    status: 'error',
                    message: 'Max cant be lower than Min',
                  }
                : { result: true };
            }}
          />
        </Flex>
      );
    })(args),
};
