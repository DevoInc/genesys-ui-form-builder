import { describe, it, expect } from 'vitest';

import { normalize, round } from './filter';

describe('types', () => {
  describe('Number', () => {
    describe('normalize', () => {
      const cases: [string, number, number, number, number][] = [
        ['value', 5, 0, 10, 5],
        ['lower', 2, 5, 10, 5],
        ['negative lower', -2, 5, 10, 5],
        ['negative min', -2, -5, 10, -2],
        ['upper', 20, 0, 10, 10],
        ['upper exact', 20, 0, 20, 20],
        ['null', null, 0, 10, 0],
      ];
      it.each(cases)('%s', (_title, val, min, max, expected) => {
        expect(normalize(val, min, max)).toEqual(expected);
      });
    });

    describe('round', () => {
      const cases: [string, number, boolean, number][] = [
        ['float', 5.5, true, 5.5],
        ['no float', 5.5, false, 5],
      ];
      it.each(cases)('%s', (_title, val, hasFloat, expected) => {
        expect(round(val, hasFloat)).toEqual(expected);
      });
    });
  });
});
