import { describe, it, expect } from 'vitest';

import { ListGroupValue } from './declarations';
import {
  filterNullAndEmptyValue,
  // normalizeValue,
  addEmptyValue,
  removeIndex,
  replaceIndex,
} from './values';

describe('types', () => {
  describe('ListGroup', () => {
    describe('values', () => {
      describe('filterNullAndEmptyValue', () => {
        const cases: [string, ListGroupValue[], ListGroupValue[]][] = [
          [
            'mixed valid and invalid',
            [{ label: 'label', value: [undefined, null, 'a'] }],
            [{ label: 'label', value: ['a'] }],
          ],
          [
            'nothing to filter',
            [{ label: 'label', value: ['a'] }],
            [{ label: 'label', value: ['a'] }],
          ],
          ['null value', [{ label: 'label', value: [] }], []],
        ];
        it.each(cases)('%s', (_title, value, expected) => {
          expect(filterNullAndEmptyValue(value)).toEqual(expected);
        });
      });

      describe('addEmptyValue', () => {
        const cases: [string, ListGroupValue[], ListGroupValue[]][] = [
          [
            'collection of values',
            [
              { label: 'A', value: ['a'] },
              { label: 'B', value: ['b'] },
            ],
            [
              { label: 'A', value: ['a'] },
              { label: 'B', value: ['b'] },
              { label: '', value: [] },
            ],
          ],
          ['null', null, [{ label: '', value: [] }]],
        ];

        it.each(cases)('%s', (_title, args, expected) => {
          expect(addEmptyValue(args)).toEqual(expected);
        });
      });

      describe('removeIndex', () => {
        const cases: [string, ListGroupValue[], number, ListGroupValue[]][] = [
          [
            'real index',
            [
              { label: 'A', value: ['a'] },
              { label: 'B', value: ['b'] },
            ],
            1,
            [{ label: 'A', value: ['a'] }],
          ],
          [
            'out of bound index',
            [{ label: 'A', value: ['a'] }],
            5,
            [{ label: 'A', value: ['a'] }],
          ],
          ['in null collection', null, 1, []],
        ];

        it.each(cases)('%s', (_title, value, index, expected) => {
          expect(removeIndex(value, index)).toEqual(expected);
        });
      });

      describe('replaceIndex', () => {
        const cases: [
          string,
          ListGroupValue[],
          number,
          string[],
          ListGroupValue[]
        ][] = [
          [
            'real index',
            [
              { label: 'A', value: ['a'] },
              { label: 'B', value: ['b'] },
            ],
            1,
            ['c'],
            [
              { label: 'A', value: ['a'] },
              { label: 'B', value: ['c'] },
            ],
          ],
          [
            'out of bound index',
            [
              { label: 'A', value: ['a'] },
              { label: 'B', value: ['b'] },
            ],
            3,
            ['c'],
            [
              { label: 'A', value: ['a'] },
              { label: 'B', value: ['b'] },
            ],
          ],
          [
            'with null',
            [
              { label: 'A', value: ['a'] },
              { label: 'B', value: ['b'] },
            ],
            1,
            null,
            [
              { label: 'A', value: ['a'] },
              { label: 'B', value: null },
            ],
          ],
          ['in null collection', null, 1, ['a'], []],
        ];

        it.each(cases)('%s', (_title, values, index, value, expected) => {
          expect(replaceIndex(values, index, value)).toEqual(expected);
        });
      });
    });
  });
});
