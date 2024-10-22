import { describe, it, expect } from 'vitest';

import { OptionType } from './definitions';
import { getValue } from './options';

describe('getValue', () => {
  const cases: [string, OptionType | OptionType[], string | string[]][] = [
    ['simple option', { label: 'A', value: 'a' }, 'a'],
    [
      'arary of options',
      [
        { label: 'A', value: 'a' },
        { label: 'B', value: 'b' },
      ],
      ['a', 'b'],
    ],
    ['null value', null, []],
  ];

  it.each(cases)('%s', (_title, value, expected) => {
    expect(getValue(value)).toEqual(expected);
  });
});
