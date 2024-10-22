import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { GroupList } from './GroupList';
import { FormBuilderTmpl } from '@sb';

const meta: Meta<typeof GroupList> = {
  title: 'Types/GroupList',
  component: GroupList,
};

export default meta;
type Story = StoryObj<typeof GroupList>;

export const Base: Story = {
  render: () => (
    <FormBuilderTmpl
      model={{
        children: [
          {
            key: 'list',
            type: 'groupList',
            name: 'List',
            isExpanded: true,
            prototype: [
              { key: 'color', name: 'Color', type: 'color', value: '#FFFFFF' },
            ],
            children: [
              {
                key: 'item0',
                name: 'Item 0',
                type: 'groupListItem',
                children: [
                  {
                    key: 'color',
                    name: 'Color',
                    type: 'color',
                    value: '#FF0000',
                  },
                ],
              },
              {
                key: 'item1',
                name: 'Item 1',
                type: 'groupListItem',
                children: [
                  {
                    key: 'color',
                    name: 'Color',
                    type: 'color',
                    value: '#00FF00',
                  },
                ],
              },
              {
                key: 'item2',
                name: 'Item 2',
                type: 'groupListItem',
                children: [
                  {
                    key: 'color',
                    name: 'Color',
                    type: 'color',
                    value: '#0000FF',
                  },
                ],
              },
            ],
          },
        ],
      }}
    />
  ),
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  key: 'list',
  type: 'groupList',
  name: 'List',
  isExpanded: true,
  prototype: [
    { key: 'color', name: 'Color', type: 'color', value: '#FFFFFF' },
  ],
  children: [
    {
      key: 'item0',
      name: 'Item 0',
      type: 'groupListItem',
      children: [
        { key: 'color', name: 'Color', type: 'color', value: '#FF0000' },
      ],
    },
    {
      key: 'item1',
      name: 'Item 1',
      type: 'groupListItem',
      children: [
        { key: 'color', name: 'Color', type: 'color', value: '#00FF00' },
      ],
    },
    {
      key: 'item2',
      name: 'Item 2',
      type: 'groupListItem',
      children: [
        { key: 'color', name: 'Color', type: 'color', value: '#0000FF' },
      ],
    },
  ],
}`,
      },
    },
  },
};

export const NoNewGroup: Story = {
  render: () => (
    <FormBuilderTmpl
      model={{
        children: [
          {
            key: 'list',
            type: 'groupList',
            name: 'List',
            isExpanded: true,
            allowNewItems: false,
            prototype: [
              { key: 'color', name: 'Color', type: 'color', value: '#FFFFFF' },
            ],
            children: [
              {
                key: 'item0',
                name: 'Item 0',
                type: 'groupListItem',
                children: [
                  {
                    key: 'color',
                    name: 'Color',
                    type: 'color',
                    value: '#FF0000',
                  },
                ],
              },
              {
                key: 'item1',
                name: 'Item 1',
                type: 'groupListItem',
                children: [
                  {
                    key: 'color',
                    name: 'Color',
                    type: 'color',
                    value: '#00FF00',
                  },
                ],
              },
              {
                key: 'item2',
                name: 'Item 2',
                type: 'groupListItem',
                children: [
                  {
                    key: 'color',
                    name: 'Color',
                    type: 'color',
                    value: '#0000FF',
                  },
                ],
              },
            ],
          },
        ],
      }}
    />
  ),
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  key: 'list',
  type: 'groupList',
  name: 'List',
  isExpanded: true,
  prototype: [
    { key: 'color', name: 'Color', type: 'color', value: '#FFFFFF' },
  ],
  children: [
    {
      key: 'item0',
      name: 'Item 0',
      type: 'groupListItem',
      children: [
        { key: 'color', name: 'Color', type: 'color', value: '#FF0000' },
      ],
    },
    {
      key: 'item1',
      name: 'Item 1',
      type: 'groupListItem',
      children: [
        { key: 'color', name: 'Color', type: 'color', value: '#00FF00' },
      ],
    },
    {
      key: 'item2',
      name: 'Item 2',
      type: 'groupListItem',
      children: [
        { key: 'color', name: 'Color', type: 'color', value: '#0000FF' },
      ],
    },
  ],
}`,
      },
    },
  },
};

export const Sortable: Story = {
  render: () => (
    <FormBuilderTmpl
      model={{
        children: [
          {
            key: 'list',
            type: 'groupList',
            name: 'List',
            isExpanded: true,
            isSortable: true,
            prototype: [
              { key: 'color', name: 'Color', type: 'color', value: '#FFFFFF' },
            ],
            children: [
              {
                key: 'item0',
                name: 'Item 0',
                type: 'groupListItem',
                children: [
                  {
                    key: 'color',
                    name: 'Color',
                    type: 'color',
                    value: '#FF0000',
                  },
                ],
              },
              {
                key: 'item1',
                name: 'Item 1',
                type: 'groupListItem',
                children: [
                  {
                    key: 'color',
                    name: 'Color',
                    type: 'color',
                    value: '#00FF00',
                  },
                ],
              },
              {
                key: 'item2',
                name: 'Item 2',
                type: 'groupListItem',
                children: [
                  {
                    key: 'color',
                    name: 'Color',
                    type: 'color',
                    value: '#0000FF',
                  },
                ],
              },
            ],
          },
        ],
      }}
    />
  ),
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  key: 'list',
  type: 'groupList',
  name: 'List',
  isExpanded: true,
  isSortable: true,
  prototype: [
    { key: 'color', name: 'Color', type: 'color', value: '#FFFFFF' },
  ],
  children: [
    {
      key: 'item0',
      type: 'groupListItem',
      children: [
        { key: 'color', name: 'Color', type: 'color', value: '#FF0000' },
      ],
    },
    {
      key: 'item1',
      type: 'groupListItem',
      children: [
        { key: 'color', name: 'Color', type: 'color', value: '#00FF00' },
      ],
    },
    {
      key: 'item2',
      type: 'groupListItem',
      children: [
        { key: 'color', name: 'Color', type: 'color', value: '#0000FF' },
      ],
    },
  ],
}`,
      },
    },
  },
};

export const NoAllowNewItems: Story = {
  render: () => (
    <FormBuilderTmpl
      model={{
        children: [
          {
            key: 'list',
            type: 'groupList',
            name: 'List',
            isExpanded: true,
            allowNewItems: false,
            prototype: [
              { key: 'color', name: 'Color', type: 'color', value: '#FFFFFF' },
            ],
            children: [
              {
                key: 'item0',
                name: 'Item 0',
                type: 'groupListItem',
                children: [
                  {
                    key: 'color',
                    name: 'Color',
                    type: 'color',
                    value: '#FF0000',
                  },
                ],
              },
            ],
          },
        ],
      }}
    />
  ),
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  key: 'list',
  type: 'groupList',
  name: 'List',
  isExpanded: true,
  allowNewItems: false,
  prototype: [
    { key: 'color', name: 'Color', type: 'color', value: '#FFFFFF' },
  ],
  children: [
    {
      key: 'item0',
      type: 'groupListItem',
      children: [
        { key: 'color', name: 'Color', type: 'color', value: '#FF0000' },
      ],
    },
  ],
}`,
      },
    },
  },
};
