import { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Types/Label',
  component: Label,
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Base: Story = {
  args: {
    name: 'Label name',
    value: 'Label value',
    padding: '0',
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'label',
  key: 'key',
  name: 'Label name',
  value: 'Label value',
  padding: '0'
}`,
      },
    },
  },
};

export const Decorators: Story = {
  args: {
    name: 'name',
    value: 'value',
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'label',
  key: 'key',
  name: 'name',
  value: 'value',
}`,
      },
    },
  },
};

export const Padding: Story = {
  args: {
    name: 'Title',
    value: 'Content',
    padding: 'cmp-lg',
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'label',
  key: 'key',
  name: 'Title',
  value: 'Content',
  padding: "5rem",
}`,
      },
    },
  },
};

export const LoremIpsum: Story = {
  args: {
    name: 'Developer Ipsum',
    value:
      'In order to understand recursion, one must first understand recursion. (Anonymous) The best performance improvement is the transition from the nonworking state to the working state. (J. Osterhout) You can either have software quality or you can have pointer arithmetic, but you cannot have both at the same time. (Bertrand Meyer) Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. (Martin Golding) In C++ it’s harder to shoot yourself in the foot, but when you do, you blow off your whole leg. (Bjarne Stroustrup)',
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'label',
  key: 'key',
  name: 'Title',
  value: 'In order to understand recursion, one must first understand recursion. (Anonymous) The best performance improvement is the transition from the nonworking state to the working state. (J. Osterhout) You can either have software quality or you can have pointer arithmetic, but you cannot have both at the same time. (Bertrand Meyer) Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. (Martin Golding) In C++ it’s harder to shoot yourself in the foot, but when you do, you blow off your whole leg. (Bjarne Stroustrup)',
}`,
      },
    },
  },
};
