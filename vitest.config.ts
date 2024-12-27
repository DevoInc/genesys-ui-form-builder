import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    include: ['src/**/*.test.ts?(x)'],
    server: {
      deps: {
        external: [/\/node_modules\//, 'react-windowed-select'],
        fallbackCJS: true,
      },
    },
    coverage: {
      provider: 'v8',
      include: ['src/**/*'],
    },
  },
});
