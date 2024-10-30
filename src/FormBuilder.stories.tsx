import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { FormBuilder } from './FormBuilder';
import { FormBuilderTmpl } from './stories';

const meta: Meta<typeof FormBuilder> = {
  title: 'FormBuilder',
  component: FormBuilder,
};

export default meta;
type Story = StoryObj<typeof FormBuilderTmpl>;

export const Example: Story = {
  render: ({ model }) => <FormBuilderTmpl model={model} />,
  args: {
    model: {
      children: [
        {
          key: 'groupInfo',
          type: 'group',
          name: 'Info Group',
          children: [
            {
              key: 'info',
              type: 'info',
              name: 'Info',
              value:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
  Maecenas vitae elementum neque.',
              status: 'success',
            },
            {
              key: 'label',
              type: 'label',
              name: 'Label',
              value:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
          Maecenas vitae elementum neque.',
            },
          ],
        },
        {
          key: 'groupBasicFields',
          type: 'group',
          name: 'Basic Fields Group',
          children: [
            {
              key: 'bool',
              name: 'Bool',
              type: 'bool',
              value: false,
            },
            {
              key: 'text',
              name: 'Text',
              type: 'text',
              helper:
                'Helper: Lorem ipsum dolor sit amet, consectetur adipiscing \
      elit. Maecenas vitae elementum neque.',
              method: 'onBlur',
              placeholder: 'Placeholder...',
            },
            {
              key: 'list',
              name: 'List',
              type: 'list',
              options: [
                { value: 'op1', label: 'Option 1' },
                { value: 'op2', label: 'Option 2' },
              ],
              value: 'op1',
            },
            {
              key: 'textarea',
              name: 'Text Area',
              type: 'textarea',
              placeholder: 'Placeholder...',
            },
            {
              key: 'color',
              name: 'Color',
              type: 'color',
            },
            {
              key: 'number',
              name: 'Number',
              type: 'number',
              method: 'onBlur',
            },
          ],
        },
        {
          key: 'groupListField',
          type: 'group',
          name: 'List Group',
          children: [
            {
              key: 'list100',
              name: 'List With 100 Elements',
              type: 'list',
              options: Array(100)
                .fill(0)
                .map((_, idx) => ({
                  value: `op${idx}`,
                  label: `Item ${idx}`,
                })),
              value: 'op1',
            },
            {
              key: 'multi',
              name: 'Multiple & Sortable',
              type: 'list',
              options: Array(10)
                .fill(0)
                .map((_, idx) => ({
                  value: `item${idx}`,
                  label: `Item ${idx}`,
                })),
              isMulti: true,
              isSortable: true,
            },
          ],
        },
        {
          key: 'specialGroup',
          type: 'group',
          name: 'Special Group',
          children: [
            {
              key: 'calendar',
              name: 'Calendar',
              type: 'calendar',
              value: {
                from: new Date(2020, 0, 1, 2),
                to: new Date(2020, 2, 1, 2),
                realtime: false,
              },
              validateDate: () => true,
              validateExpression: () => ({
                result: true,
                errorMessage: null,
              }),
              validateOnApply: () => true,
              validFormats: ['YYYY-MM-DD HH:mm:ssHH:mm:ss:SSS', 'L HH:mm:ss'],
            },
            {
              key: 'slider',
              name: 'Slider',
              type: 'slider',
              helper: 'This is a placeholder...',
              value: 50,
              minValue: 0,
              maxValue: 100,
              step: 5,
            },
            {
              key: 'hflex',
              type: 'hflex',
              children: [
                {
                  key: 'left',
                  name: 'Left',
                  type: 'text',
                  method: 'onBlur',
                  placeholder: 'Placeholder...',
                },
                {
                  key: 'right',
                  name: 'Right',
                  type: 'text',
                  method: 'onBlur',
                  placeholder: 'Placeholder...',
                },
              ],
            },
          ],
        },
      ],
    },
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  children: [
    {
      key: 'groupInfo',
      type: 'group',
      name: 'Info Group',
      children: [
        {
          key: 'info',
          type: 'info',
          name: 'Info',
          value:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
Maecenas vitae elementum neque.',
          status: 'success',
        },
        {
          key: 'label',
          type: 'label',
          name: 'Label',
          value:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
    Maecenas vitae elementum neque.',
        },
      ],
    },
    {
      key: 'groupBasicFields',
      type: 'group',
      name: 'Basic Fields Group',
      children: [
        {
          key: 'bool',
          name: 'Bool',
          type: 'bool',
          value: false,
        },
        {
          key: 'text',
          name: 'Text',
          type: 'text',
          helper:
            'Helper: Lorem ipsum dolor sit amet, consectetur adipiscing \
elit. Maecenas vitae elementum neque.',
          method: 'onBlur',
          placeholder: 'Placeholder...',
        },
        {
          key: 'list',
          name: 'List',
          type: 'list',
          options: [
            { value: 'op1', label: 'Option 1' },
            { value: 'op2', label: 'Option 2' },
          ],
          value: 'op1',
        },
        {
          key: 'textarea',
          name: 'Text Area',
          type: 'textarea',
          placeholder: 'Placeholder...',
        },
        {
          key: 'color',
          name: 'Color',
          type: 'color',
        },
        {
          key: 'number',
          name: 'Number',
          type: 'number',
          method: 'onBlur',
        },
      ],
    }
    {
      key: 'groupListField',
      type: 'group',
      name: 'List Group',
      children: [
        {
          key: 'list100',
          name: 'List With 100 Elements',
          type: 'list',
          options: [
            { value: 'item1', label: 'Item 1' }
            { value: 'item2', label: 'Item 2' }
            { value: 'item3', label: 'Item 3' }
          ],
          value: 'item1',
        },
        {
          key: 'multi',
          name: 'Multiple & Sortable',
          type: 'list',
          options: [
            { value: 'item1', label: 'Item 1' }
            { value: 'item2', label: 'Item 2' }
            { value: 'item3', label: 'Item 3' }
          ],
          isMulti: true,
          isSortable: true,
        },
      ],
    },
    {
      key: 'specialGroup',
      type: 'group',
      name: 'Special Group',
      children: [
        {
          key: 'calendar',
          name: 'Calendar',
          type: 'calendar',
          value: {
            from: '2020-01-01 02:00:00',
            to: '2020-03-01 02:00:00',
            realtime: false,
          },
          validateDate: () => true,
          validateExpression: () => ({
            result: true,
            errorMessage: null,
          }),
          validateOnApply: () => true,
          validFormats: ['YYYY-MM-DD HH:mm:ssHH:mm:ss:SSS', 'L HH:mm:ss'],
        },
        {
          key: 'slider',
          name: 'Slider',
          type: 'slider',
          helper: 'This is a placeholder...',
          value: 50,
          minValue: 0,
          maxValue: 100,
          step: 5,
        },
        {
          key: 'hflex',
          type: 'hflex',
          children: [
            {
              key: 'left',
              name: 'Left',
              type: 'text',
              method: 'onBlur',
              placeholder: 'Placeholder...',
            },
            {
              key: 'right',
              name: 'Right',
              type: 'text',
              method: 'onBlur',
              placeholder: 'Placeholder...',
            },
          ],
        },
      ],
    },
  ]
      }`,
      },
    },
  },
};

export const WithoutGroup: Story = {
  render: ({ model }) => <FormBuilderTmpl model={model} />,
  args: {
    model: {
      children: [
        {
          key: 'bool',
          name: 'Bool',
          type: 'bool',
          value: false,
        },
        {
          key: 'text',
          name: 'Text',
          type: 'text',
          helper: 'Helper: Lorem ipsum dolor sit amet, consectetur ',
          method: 'onBlur',
          placeholder: 'Placeholder...',
        },
        {
          key: 'list',
          name: 'List',
          type: 'list',
          options: [
            { value: 'op1', label: 'Option 1' },
            { value: 'op2', label: 'Option 2' },
          ],
          value: 'op1',
        },
        {
          key: 'textarea',
          name: 'Text Area',
          type: 'textarea',
          placeholder: 'Placeholder...',
        },
        {
          key: 'color',
          name: 'Color',
          type: 'color',
        },
        {
          key: 'number',
          name: 'Number',
          type: 'number',
          method: 'onBlur',
        },
      ],
    },
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
        children: [
          {
            key: 'groupInfo',
            type: 'group',
            name: 'Info Group',
            showHeader: false,
            expanded: false,
            children: [
              {
                key: 'bool',
                name: 'Bool',
                type: 'bool',
                value: false,
              },
              {
                key: 'text',
                name: 'Text',
                type: 'text',
                helper: 'Helper: Lorem ipsum dolor sit amet, consectetur ',
                method: 'onBlur',
                placeholder: 'Placeholder...',
              },
              {
                key: 'list',
                name: 'List',
                type: 'list',
                options: [
                  { value: 'op1', label: 'Option 1' },
                  { value: 'op2', label: 'Option 2' },
                ],
                value: 'op1',
              },
              {
                key: 'textarea',
                name: 'Text Area',
                type: 'textarea',
                placeholder: 'Placeholder...',
              },
              {
                key: 'color',
                name: 'Color',
                type: 'color',
              },
              {
                key: 'number',
                name: 'Number',
                type: 'number',
                method: 'onBlur',
              },
            ],
          },
        ],
      }`,
      },
    },
  },
};
