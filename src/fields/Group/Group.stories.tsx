import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Group } from './Group';
import { FormBuilder } from '../../components';

const meta: Meta<typeof Group> = {
  title: 'Fields/Group',
  component: Group,
};

export default meta;
type Story = StoryObj<typeof Group>;

export const Base: Story = {
  args: {
    name: 'Group name',
    isExpanded: true,
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'group',
  key: 'key',
  name: 'Group name',
  isExpanded: true,
  children: []
}`,
      },
    },
  },
};

export const IsExpanded: Story = {
  args: {
    name: 'Group name',
    isExpanded: false,
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'group',
  key: 'key',
  name: 'Group name',
  isExpanded: false,
}`,
      },
    },
  },
};

export const Decorators: Story = {
  args: {
    name: 'This is my special group name',
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'group',
  key: 'key',
  name: 'This is my special group name',
}`,
      },
    },
  },
};

export const TruncateLine: Story = {
  args: {
    name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel neque vulputate, ultrices nulla nec, eleifend orci. Fusce a libero quis velit aliquet tempor eget vitae ante. Morbi dolor lorem, consequat et malesuada sit amet, sodales et sem. Nam ornare massa sit amet augue efficitur, sit amet pretium augue consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent congue ac massa vel pretium. Nulla aliquam magna augue, quis mollis nisl fringilla in. Morbi vitae tellus ultrices, ornare metus non, rutrum felis. Aliquam erat leo, auctor eu velit sodales, dictum congue tellus.',
    truncateLine: 2,
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'group',
  key: 'key',
  name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel neque vulputate, ultrices nulla nec, eleifend orci. Fusce a libero quis velit aliquet tempor eget vitae ante. Morbi dolor lorem, consequat et malesuada sit amet, sodales et sem. Nam ornare massa sit amet augue efficitur, sit amet pretium augue consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent congue ac massa vel pretium. Nulla aliquam magna augue, quis mollis nisl fringilla in. Morbi vitae tellus ultrices, ornare metus non, rutrum felis. Aliquam erat leo, auctor eu velit sodales, dictum congue tellus.',
  truncateLine: 2,
}`,
      },
    },
  },
};

export const NestedGroups: Story = {
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'group',
  key: 'key',
  name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel neque vulputate, ultrices nulla nec, eleifend orci. Fusce a libero quis velit aliquet tempor eget vitae ante. Morbi dolor lorem, consequat et malesuada sit amet, sodales et sem. Nam ornare massa sit amet augue efficitur, sit amet pretium augue consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent congue ac massa vel pretium. Nulla aliquam magna augue, quis mollis nisl fringilla in. Morbi vitae tellus ultrices, ornare metus non, rutrum felis. Aliquam erat leo, auctor eu velit sodales, dictum congue tellus.',
  hasTruncatedName: false,
}`,
      },
    },
  },
  render: () => {
    const [model, setModel] = React.useState({
      children: [
        {
          key: 'group1',
          name: 'Group 1',
          type: 'group',
          children: [
            {
              key: 'group11',
              name: 'Group 1.1',
              type: 'group',
              children: [
                {
                  key: 'group11a',
                  name: 'Group 1.1.a',
                  type: 'group',
                  children: [
                    {
                      key: 'group11aa',
                      name: 'Group 1.1.a.a',
                      type: 'group',
                      children: [{ key: 'input', name: 'Input', type: 'text' }],
                    },
                  ],
                },
              ],
            },
            {
              key: 'group12',
              name: 'Group 1.2',
              type: 'group',
              children: [{ key: 'input', name: 'Input', type: 'text' }],
            },
            { key: 'input', name: 'Input', type: 'text' },
          ],
        },
        {
          key: 'group2',
          name: 'Group 2',
          type: 'group',
          children: [{ key: 'input', name: 'Input', type: 'text' }],
        },
      ],
    });
    return <FormBuilder model={model} onChange={setModel} />;
  },
};
