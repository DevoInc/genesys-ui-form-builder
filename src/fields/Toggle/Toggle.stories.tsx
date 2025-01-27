import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Toggle } from './Toggle';
import {
  GITextAlignCenterParagraph,
  GITextAlignLeftParagraph,
  GITextAlignRightParagraph,
} from '@devoinc/genesys-icons';

const meta: Meta<typeof Toggle> = {
  title: 'Types/Toggle',
  component: Toggle,
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Playground: Story = {
  args: {
    value: 'left',
    options: [
      {
        icon: <GITextAlignLeftParagraph />,
        label: 'Left',
        value: 'left',
      },
      {
        icon: <GITextAlignCenterParagraph />,
        label: 'Center',
        value: 'center',
      },
      {
        icon: <GITextAlignRightParagraph />,
        label: 'Right',
        value: 'right',
      },
    ],
  },
  parameters: {
    docs: {
      language: 'ts',
      source: {
        code: `{
  type: 'toggle',
  key: 'key',
  value: 'left'
  options: [
    {
      icon: 'text_align_left_paragraph',
      label: 'Left',
      value: 'left',
    },
    {
      icon: 'text_align_center_paragraph',
      label: 'Center',
      value: 'center',
    },
    {
      icon: 'text_align_right_paragraph',
      label: 'Right',
      value: 'right',
    },
  ],
}`,
      },
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
  render: ({ value, options }) => {
    const [state, setState] = React.useState(value);
    return (
      <Toggle
        options={options}
        value={state}
        onChange={(newValue) => {
          // eslint-disable-next-line no-console
          console.log(newValue);
          setState(newValue);
        }}
      />
    );
  },
};
