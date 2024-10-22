import { describe, it, expect } from 'vitest';

import { getPadding } from './helpers';
import { PADDING } from '../constants';

const cases = [
  ['level 0 ordinal 0', 0, 0, `${PADDING} ${PADDING} ${PADDING}`],
  ['level 0 ordinal 1', 0, 1, `0 ${PADDING} ${PADDING}`],
  ['level 1 ordinal 0', 1, 0, ''],
  ['level 1 ordinal 1', 1, 1, ''],
];

describe('getPadding', () => {
  it.each(cases)('%s', (_title, level: number, ordinal: number, expected) => {
    expect(getPadding(level, ordinal)).toEqual(expected);
  });
});
