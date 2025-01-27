import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { getFontSize } from './getFontSize';
import { getFontStyle } from './getFontStyle';
import { getFontWeight } from './getFontWeight';
import { FormBuilder } from '../../components/FormBuilder/FormBuilder';

const meta: Meta = {
  title: 'Presets/Fonts',
  component: FormBuilder,
};

export default meta;
type Story = StoryObj<typeof FormBuilder>;

export const Size: Story = {
  render: ({ model }) => {
    const [innerModel, setInnerModel] = React.useState(model);
    return <FormBuilder model={innerModel} onChange={setInnerModel} />;
  },
  args: {
    model: {
      children: [getFontSize({ key: 'font-size' })],
    },
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `import { getFontSize } from '@devoinc/genesys-ui-form-builder';
getFontSize();`,
      },
    },
  },
};

export const Weight: Story = {
  render: ({ model }) => {
    const [innerModel, setInnerModel] = React.useState(model);
    return <FormBuilder model={innerModel} onChange={setInnerModel} />;
  },
  args: {
    model: {
      children: [getFontWeight()],
    },
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `import { getFontWeight } from '@devoinc/genesys-ui-form-builder';
getFontWeight();`,
      },
    },
  },
};

export const Style: Story = {
  render: ({ model }) => {
    const [innerModel, setInnerModel] = React.useState(model);
    return <FormBuilder model={innerModel} onChange={setInnerModel} />;
  },
  args: {
    model: {
      children: [getFontStyle({ key: 'font-style' })],
    },
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `import { getFontStyle } from '@devoinc/genesys-ui-form-builder';
getFontStyle();`,
      },
    },
  },
};
