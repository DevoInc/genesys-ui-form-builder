import { Meta, StoryObj } from '@storybook/react';

import { Calendar } from './Calendar';

const meta: Meta<typeof Calendar> = {
  title: 'Types/Calendar',
  component: Calendar,
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Base: Story = {
  args: {
    locale: 'es',
    padding: '0',
    timezone: 'Europe/Madrid',
    value: {
      from: new Date(2020, 0, 1, 2),
      to: new Date(2020, 2, 1, 2),
      realTime: false,
    },
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'calendar',
  key: 'key',
  value: {
    from: '2020-01-01 02:00:00',
    to: '2020-03-01 02:00:00',
    realTime: false,
  },
  locale: 'es',
  padding: '0',
  timezone: 'Europe/Madrid',
}`,
      },
    },
  },
  argTypes: {
    onChange: { action: 'onChange' },
  },
};

export const Size: Story = {
  args: {
    value: {
      from: new Date(2020, 0, 1, 2),
      to: new Date(2020, 2, 1, 2),
      realTime: false,
    },
    size: 'lg',
  },
  parameters: {
    docs: {
      language: 'js',
      source: {
        code: `{
  type: 'calendar',
  key: 'key',
  value: {
    from: '2020-01-01 02:00:00',
    to: '2020-03-01 02:00:00',
    realTime: false,
  },
  size: 'lg',
}`,
      },
    },
  },
};
