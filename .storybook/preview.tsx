import * as React from 'react';
import { Preview, ReactRenderer } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from 'styled-components';
import { create } from '@storybook/theming';

import { light, dark } from '@devoinc/genesys-brand-devo';
import '@devoinc/genesys-base-styles/dist/css/styles.min.css';

import './preview.scss';
import { Panel } from '@devoinc/genesys-ui';

// Ad-hoc styles for SB documentation
const customLightTheme = create({
  base: 'light',
  fontBase: '"Poppins", sans-serif',
  fontCode: '"Mono Font", monospace',
  textColor: '#5B6870',
  textInverseColor: 'rgba(255,255,255,0.9)',
});
const customDarkTheme = create({
  base: 'dark',
  fontBase: '"Poppins", sans-serif',
  fontCode: '"Mono Font", monospace',
});

const preferTheme =
  window?.matchMedia &&
  window?.matchMedia('(prefers-color-scheme: dark)')?.matches
    ? 'dark'
    : 'light';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: { expanded: true },
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      showPanel: true,
      panelPosition: 'right',
      storySort: {
        order: [
          'Welcome',
          'PropsPanel',
          'Model',
          'Visibility',
          'Validation',
          'Actions',
          'Types',
          'Presets',
          ['Introduction'],
          'Migrations',
          'Developer Guide',
          ['Getting started', 'Publish'],
        ],
      },
    },
    viewport: {
      viewports: [
        {
          name: 'sidebar',
          styles: { width: '360px', height: '500px' },
        },
      ],
    },
    docs: {
      theme: preferTheme === 'dark' ? customDarkTheme : customLightTheme,
    },
  },
  decorators: [
    (Story) => (
      <Panel elevation="ground" padding="cmp-lg">
        <Story />
      </Panel>
    ),
    withThemeFromJSXProvider<ReactRenderer>({
      themes: {
        light,
        dark,
      },
      defaultTheme: preferTheme,
      Provider: ThemeProvider,
    }),
  ],
};

export default preview;
