import { describe, expect, it } from 'vitest';

import { slugify } from './strings';

describe('helper', () => {
  describe('strings', () => {
    describe('slugify', () => {
      const cases = [
        [
          'should convert text with spaces into a URL-friendly format',
          'Hello world',
          'hello-world',
        ],
        [
          'should remove special characters',
          'Hello, world! How are you?',
          'hello-world-how-are-you',
        ],
        [
          'should handle accented characters',
          'Árboles y cafés',
          'arboles-y-cafes',
        ],
        [
          'should remove extra spaces',
          '   Text   with   spaces   ',
          'text-with-spaces',
        ],
        ['should preserve numbers', 'Version 2.0', 'version-20'],
        ['should return an empty string if given an empty input', '', ''],
      ];

      it.each(cases)('%s', (_, text, expected) => {
        expect(slugify(text)).toEqual(expected);
      });
    });
  });
});
