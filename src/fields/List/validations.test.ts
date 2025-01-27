import { describe, it, expect } from 'vitest';

import { OptionType } from './definitions';
import { validateOptions, validateValue } from './validations';

describe('types', () => {
  describe('List', () => {
    describe('validations', () => {
      describe('validateOptions', () => {
        const cases: [string, OptionType[], OptionType[]][] = [
          [
            'valid options',
            [{ value: 'x', label: 'X' }],
            [{ value: 'x', label: 'X' }],
          ],
          [
            'valid options with null',
            [{ value: 'x', label: 'X' }],
            [{ value: 'x', label: 'X' }],
          ],
        ];
        it.each(cases)('%s', (_title, options, expected) => {
          expect(validateOptions(options)).toEqual(expected);
        });
      });

      describe('validateValue', () => {
        const cases: [string, number[] | number, number[] | number][] = [
          ['empty array', [], []],
          ['null', null, null],
          ['array with null', [null], []],
          ['number', 12, 12],
          ['undefined', undefined, undefined],
        ];
        it.each(cases)('%s', (_title, value, expected) => {
          expect(validateValue(value)).toEqual(expected);
        });
      });
    });
  });
});
