import { describe, it, expect } from 'vitest';

import { getFontSize, getFontStyle, getFontWeight } from './fonts';

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

    it('getFontWeight', () => {
      expect(getFontWeight({ something: 'still here' })).toStrictEqual({
        type: 'list',
        name: 'Weight',
        options: [
          { value: '100', label: '100 - Extra Light or Ultra Light' },
          { value: '200', label: '200 - Light or Thin' },
          { value: '300', label: '300 - Book or Demi' },
          { value: '400', label: '400 - Normal or Regular' },
          { value: '500', label: '500 - Medium' },
          { value: '600', label: '600 - Semibold, Demibold' },
          { value: '700', label: '700 - Bold' },
          { value: '800', label: '800 - Black, Extra Bold or Heavy' },
          {
            value: '900',
            label: '900 - Extra Black, Fat, Poster or Ultra Black',
          },
        ],
        something: 'still here',
      });
    });

    it('getFontStyle', () => {
      expect(getFontStyle({ something: 'still here' })).toStrictEqual({
        type: 'toggle',
        name: 'Style',
        value: 'normal',
        options: [
          {
            icon: 'remove_clear_text_style',
            value: 'normal',
            label: 'normal',
            hideLabel: true,
          },
          {
            icon: 'text_style_italic',
            value: 'italic',
            label: 'italic',
            hideLabel: true,
          },
          {
            icon: 'text_style_bold',
            value: 'bold',
            label: 'bold',
            hideLabel: true,
          },
          {
            icon: 'text_style_underline',
            value: 'underline',
            label: 'underline',
            hideLabel: true,
          },
          {
            icon: 'text_style_strikethrough',
            value: 'strikethrough',
            label: 'strikethrough',
            hideLabel: true,
          },
        ],
        something: 'still here',
      });
    });
  });
});