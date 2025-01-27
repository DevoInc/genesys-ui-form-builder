import { describe, it, expect } from 'vitest';

import { OptionType } from '../List/definitions';
import { ListGroupValue } from './declarations';
import { filterOptions, isSomeOptionUnused } from './options';

describe('filterOptions', () => {
  const cases: [string, OptionType[], ListGroupValue[], OptionType[]][] = [
    [
      'filter element',
      [
        { value: 'a', label: 'A' },
        { value: 'b', label: 'B' },
        { value: 'c', label: 'C' },
      ],
      [{ label: 'A', value: ['a'] }],
      [
        { value: 'b', label: 'B' },
        { value: 'c', label: 'C' },
      ],
    ],
    [
      'unknown element',
      [
        { value: 'a', label: 'A' },
        { value: 'b', label: 'B' },
        { value: 'c', label: 'C' },
      ],
      [{ label: 'D', value: ['d'] }],
      [
        { value: 'a', label: 'A' },
        { value: 'b', label: 'B' },
        { value: 'c', label: 'C' },
      ],
    ],
    ['empty list', [], [{ label: 'A', value: ['a'] }], []],
  ];
  it.each(cases)('%s', (_title, options, removeOnes, expected) => {
    expect(filterOptions(options, removeOnes)).toEqual(expected);
  });
});

describe('isAllOptionsUnused', () => {
  const cases: [string, ListGroupValue[], OptionType[], boolean][] = [
    [
      'no new select',
      [
        { label: 'G1', value: ['a', 'b'] },
        { label: 'G2', value: ['c'] },
      ],
      [
        { value: 'a', label: 'A' },
        { value: 'b', label: 'B' },
        { value: 'c', label: 'C' },
      ],
      false,
    ],
    [
      'add new select',
      [
        { label: 'G1', value: ['a'] },
        { label: 'G2', value: ['c'] },
      ],
      [
        { value: 'a', label: 'A' },
        { value: 'b', label: 'B' },
        { value: 'c', label: 'C' },
      ],
      true,
    ],
  ];
  it.each(cases)('%s', (_title, normalaize, options, expected) => {
    expect(isSomeOptionUnused(normalaize, options)).toEqual(expected);
  });
});
