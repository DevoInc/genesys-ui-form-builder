import * as React from 'react';
import { Preview, ReactRenderer } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { ThemeProvider } from 'styled-components';

import { light, dark } from '@devoinc/genesys-brand-devo';
import '@devoinc/genesys-base-styles/dist/css/styles.min.css';

import './preview.scss';
import { Box, Panel } from '@devoinc/genesys-ui';

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
      defaultTheme:
        window?.matchMedia &&
        window?.matchMedia('(prefers-color-scheme: dark)')?.matches
          ? 'dark'
          : 'light',
      Provider: ThemeProvider,
    }),
  ],
};

export default preview;
