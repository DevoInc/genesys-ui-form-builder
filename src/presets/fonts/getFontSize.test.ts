import { describe, it, expect } from 'vitest';

import { getFontSize } from './getFontSize';

describe('presets', () => {
  describe('fonts', () => {
    it('getFontSize', () => {
      expect(getFontSize({ something: 'still here' })).toStrictEqual({
        type: 'number',
        name: 'Size (px)',
        min: 16,
        max: 320,
        helper: 'Select the font size (from 16px to 320px)',
        something: 'still here',
      });
    });
  });
});
