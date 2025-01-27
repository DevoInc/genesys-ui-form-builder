import * as React from 'react';
import { describe, it, expect } from 'vitest';

import { getFontStyle } from './getFontStyle';
import {
  GITextStyleBold,
  GITextStyleItalic,
  GITextStyleStrikethrough,
  GITextStyleUnderline,
} from '@devoinc/genesys-icons';

describe('presets', () => {
  describe('fonts', () => {
    it('getFontStyle', () => {
      expect(getFontStyle({ something: 'still here' })).toStrictEqual({
        isMulti: true,
        type: 'toggle',
        name: 'Style',
        value: [],
        options: [
          {
            icon: <GITextStyleItalic />,
            value: 'italic',
            label: 'italic',
            hideLabel: true,
          },
          {
            icon: <GITextStyleBold />,
            value: 'bold',
            label: 'bold',
            hideLabel: true,
          },
          {
            icon: <GITextStyleUnderline />,
            value: 'underline',
            label: 'underline',
            hideLabel: true,
          },
          {
            icon: <GITextStyleStrikethrough />,
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
