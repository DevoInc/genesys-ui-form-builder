import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  core: {
    disableTelemetry: true,
  },
  stories: [
    '../doc/Welcome.mdx',
    '../doc/**/*.@(mdx|stories.tsx)',
    '../src/**/*.@(mdx|stories.tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
  ],
  async viteFinal(config) {
    return mergeConfig(config, {
      optimizeDeps: {
        include: [
          '@storybook/blocks',
          '@storybook/addon-themes',
          '@devoinc/genesys-brand-devo',
          'styled-components',
        ],
      },
      plugins: [tsconfigPaths()],
    });
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
