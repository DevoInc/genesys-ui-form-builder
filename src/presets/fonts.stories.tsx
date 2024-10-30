import { Meta, StoryObj } from '@storybook/react';

import { getFontSize, getFontStyle, getFontWeight } from './fonts';
import { FormBuilderTmpl } from '../stories';

const meta: Meta = {
  title: 'Presets/Fonts',
  component: FormBuilderTmpl,
};

export default meta;
type Story = StoryObj<typeof FormBuilderTmpl>;

export const Size: Story = {
  args: {
    model: {
      children: [getFontSize()],
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
  args: {
    model: {
      children: [getFontStyle()],
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
