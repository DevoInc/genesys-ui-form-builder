/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    sourcemap: true,
    rollupOptions: {
      external: [
        '@devoinc/genesys-ui',
        '@devoinc/genesys-ui-datetime',
        '@devoinc/genesys-ui-color',
        '@devoinc/genesys-base-styles',
        '@devoinc/genesys-brand-devo',
        'react',
        'react-dom',
        // 'react-range',
        'styled-components',
        // 'lodash',
      ],
    },
  },
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html',
    }),
  ],
  test: {
    environment: 'happy-dom',
    include: ['src/**/*.test.ts?(x)'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*'],
    },
  },
});
