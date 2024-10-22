import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { getConditionColors, getConditionPredicate } from './conditions';
import { FormBuilderTmpl } from '../stories';

const meta: Meta = {
  title: 'Presest/Conditions',
};

export default meta;
type Story = StoryObj<typeof FormBuilderTmpl>;

export const Predicate: Story = {
  args: {
    model: {
      children: [getConditionPredicate()],
    },
  },
  render: (args) => <FormBuilderTmpl {...args} />,
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `import { getConditionPredicate } from '@devoinc/genesys-ui-form-builder';
getConditionPredicate();`,
      },
    },
  },
};

export const Colors: Story = {
  args: {
    model: {
      children: [getConditionColors()],
    },
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `import { getConditionColors } from '@devoinc/genesys-ui-form-builder';
getConditionColors();`,
      },
    },
  },
};
