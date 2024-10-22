import { describe, it, expect } from 'vitest';

import { add, getNextKey, move, remove } from './list';
import { IModelNode } from '../../model';

describe('list', () => {
  describe('remove', () => {
    const cases: [string, IModelNode[], string, IModelNode[]][] = [
      [
        'three elements',
        [
          { key: 'a', type: 'bool' },
          { key: 'b', type: 'bool' },
          { key: 'c', type: 'bool' },
        ],
        'b',
        [
          { key: 'a', type: 'bool' },
          { key: 'c', type: 'bool' },
        ],
      ],
      ['one elements', [{ key: 'a', type: 'bool' }], 'a', []],
      ['empty list', [], 'a', []],
    ];

    it.each(cases)('%s', (_, list, key, expected) => {
      expect(remove(list, key)).toEqual(expected);
    });
  });

  describe('move', () => {
    const cases: [string, IModelNode[], string, string, IModelNode[]][] = [
      [
        'move from down',
        [
          { key: 'a', type: 'bool' },
          { key: 'b', type: 'bool' },
          { key: 'c', type: 'bool' },
        ],
        'c',
        'a',
        [
          { key: 'c', type: 'bool' },
          { key: 'a', type: 'bool' },
          { key: 'b', type: 'bool' },
        ],
      ],
      [
        'move from up',
        [
          { key: 'a', type: 'bool' },
          { key: 'b', type: 'bool' },
          { key: 'c', type: 'bool' },
        ],
        'a',
        'c',
        [
          { key: 'b', type: 'bool' },
          { key: 'c', type: 'bool' },
          { key: 'a', type: 'bool' },
        ],
      ],
    ];

    it.each(cases)('%s', (_, list, itemKey, targetKey, expected) => {
      expect(move(list, itemKey, targetKey)).toEqual(expected);
    });
  });

  describe('getNextKey', () => {
    const cases: [
      string,
      IModelNode[],
      string,
      { key: string; idx: number }
    ][] = [
      [
        'nest to filled list',
        [
          { key: 'item0', type: 'bool' },
          { key: 'item1', type: 'bool' },
          { key: 'item2', type: 'bool' },
        ],
        'item$INDEX',
        { key: 'item3', idx: 3 },
      ],
      [
        'next to middle hollowed list',
        [
          { key: 'item0', type: 'bool' },
          { key: 'item2', type: 'bool' },
        ],
        'item$INDEX',
        { key: 'item3', idx: 3 },
      ],
      [
        'next to start hollowed list',
        [{ key: 'item2', type: 'bool' }],
        'item$INDEX',
        { key: 'item1', idx: 1 },
      ],
      ['next to empty list', [], 'item$INDEX', { key: 'item0', idx: 0 }],
      ['mask without INDEX', [], 'item', { key: 'item', idx: 0 }],
    ];

    it.each(cases)('%s', (_, list, mask, expected) => {
      expect(getNextKey(list, mask)).toEqual(expected);
    });
  });

  describe('add', () => {
    const cases: [
      string,
      IModelNode[],
      IModelNode[],
      string,
      string,
      IModelNode[]
    ][] = [
      [
        'adds a new item',
        [
          {
            key: 'item0',
            name: 'Item 0',
            type: 'groupListItem',
            children: [{ key: 'key', type: 'bool' }],
          },
        ],
        [{ key: 'key', type: 'bool' }],
        'item1',
        'Item 1',
        [
          {
            key: 'item0',
            name: 'Item 0',
            type: 'groupListItem',
            children: [{ key: 'key', type: 'bool' }],
          },
          {
            key: 'item1',
            name: 'Item 1',
            type: 'groupListItem',
            children: [{ key: 'key', type: 'bool' }],
          },
        ],
      ],
    ];

    it.each(cases)('%s', (_, list, prototype, key, name, expected) => {
      expect(add(list, prototype, key, name)).toEqual(expected);
    });
  });
});
