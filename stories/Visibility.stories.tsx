import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { FormBuilder } from '../src/';

const meta: Meta = {
  title: 'Visibility',
};

export default meta;
type Story = StoryObj<typeof FormBuilder>;

export const Example: Story = {
  args: {
    model: {
      children: [
        {
          key: 'bool',
          name: 'Bool',
          type: 'bool',
          helper: 'This field check changes after a hidden node',
          value: false,
        },
        {
          key: 'textHidden',
          name: 'Text Hidden',
          type: 'text',
          helper: 'Helper of hidden element',
          method: 'onBlur',
          placeholder: 'Placeholder...',
          visible: false,
        },
      ],
    },
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `<FormBuilder
  model={{
    children: [
      {
        key: 'bool',
        name: 'Bool',
        type: 'bool',
        helper: 'This field check changes after a hidden node',
        value: false,
      },
      {
        key: 'textHidden',
        name: 'Text Hidden',
        type: 'text',
        helper: 'Helper of hidden element',
        method: 'onBlur',
        placeholder: 'Placeholder...',
        visible: false,
      },
    ],
  }}
  onChange={(newModel) => {
    newModel.children[1].visible = newModel.children[0].value;
    setModel(newModel);
  }}
/>`,
      },
    },
  },
  render: (args) =>
    (({ model: initialModel }) => {
      const [model, setModel] = React.useState(initialModel);
      return (
        <FormBuilder
          model={model}
          onChange={(newModel) => {
            newModel.children[1].visible = newModel.children[0].value;
            setModel(newModel);
          }}
        />
      );
    })(args),
};
Example.storyName = 'Example show/hide';

export const Example2: Story = {
  args: {
    model: {
      children: [
        {
          key: 'bool',
          name: 'Bool',
          type: 'bool',
          helper: 'This field check changes after a hidden node',
          value: false,
        },
      ],
    },
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `<FormBuilder
  model={{
    children: [
      {
        key: 'bool',
        name: 'Bool',
        type: 'bool',
        helper: 'This field check changes after a hidden node',
        value: false,
      },
    ],
  }}
  onChange={(newModel) => {
    if (newModel.children[0].value && newModel.children.length === 1) {
      newModel.children.push({
        key: 'textHidden',
        name: 'Text Hidden',
        type: 'text',
        helper: 'Helper of hidden element',
        method: 'onBlur',
        placeholder: 'Placeholder...',
      });
    } else if (
      !newModel.children[0].value &&
      newModel.children.length === 2
    ) {
      newModel = { children: [newModel.children[0]] };
    }
    setModel(newModel);
  }}
/>`,
      },
    },
  },
  render: (args) =>
    (({ model: initialModel }) => {
      const [model, setModel] = React.useState(initialModel);
      return (
        <FormBuilder
          model={model}
          onChange={(newModel) => {
            if (newModel.children[0].value && newModel.children.length === 1) {
              newModel.children.push({
                key: 'textHidden',
                name: 'Text Hidden',
                type: 'text',
                helper: 'Helper of hidden element',
                method: 'onBlur',
                placeholder: 'Placeholder...',
              });
            } else if (
              !newModel.children[0].value &&
              newModel.children.length === 2
            ) {
              newModel = { children: [newModel.children[0]] };
            }
            setModel(newModel);
          }}
        />
      );
    })(args),
};
Example2.storyName = 'Example create/remove';
