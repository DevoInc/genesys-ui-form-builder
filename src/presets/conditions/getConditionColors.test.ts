import { describe, it, expect } from 'vitest';

import { getConditionColors } from './getConditionColors';

describe('presets', () => {
  describe('conditions', () => {
    it('getConditionColors', () => {
      expect(getConditionColors()).toStrictEqual({
        type: 'hflex',
        key: 'predicate',
        children: [
          {
            type: 'color',
            key: 'foreground',
            value: 'black',
            name: 'Foreground',
          },
          {
            type: 'color',
            key: 'background',
            value: 'white',
            name: 'Background',
          },
        ],
      });
    });
  });
});
