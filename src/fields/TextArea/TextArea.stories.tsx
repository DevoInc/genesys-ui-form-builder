import { Meta, StoryObj } from '@storybook/react-vite';

import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Fields/TextArea',
  component: TextArea,
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Base: Story = {
  args: {
    disabled: false,
    helper: 'This is a helper text',
    method: 'onBlur',
    name: 'TextArea',
    padding: '0',
    placeholder: 'Placeholder',
    value:
      'In order to understand recursion, one must first understand recursion. (Anonymous) The best performance improvement is the transition from the nonworking state to the working state. (J. Osterhout) You can either have software quality or you can have pointer arithmetic, but you cannot have both at the same time. (Bertrand Meyer) Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. (Martin Golding) In C++ it’s harder to shoot yourself in the foot, but when you do, you blow off your whole leg. (Bjarne Stroustrup)',
    rows: 5,
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'textarea',
  key: 'key',
  disabled: false,
  helper: 'This is a helper text',
  method: 'onBlur',
  name: 'TextArea',
  padding: '0',
  placeholder: 'Placeholder',
  value: 'In order to understand recursion, one must first understand recursion. (Anonymous) The best performance improvement is the transition from the nonworking state to the working state. (J. Osterhout) You can either have software quality or you can have pointer arithmetic, but you cannot have both at the same time. (Bertrand Meyer) Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. (Martin Golding) In C++ it’s harder to shoot yourself in the foot, but when you do, you blow off your whole leg. (Bjarne Stroustrup)',
  rows: 5,
}`,
      },
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
};
