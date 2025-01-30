import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { getConditionColors } from './getConditionColors';
import { getConditionPredicate } from './getConditionPredicate';
import { FormBuilder } from '../../components';

const meta: Meta = {
  title: 'Presets/Conditions',
};

export default meta;
type Story = StoryObj<typeof FormBuilder>;

export const Predicate: Story = {
  args: {
    model: {
      children: [getConditionPredicate()],
    },
  },
  render: ({ model: initialModel }) => {
    const [model, setModel] = React.useState(initialModel);
    return <FormBuilder model={model} onChange={setModel} />;
  },
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
