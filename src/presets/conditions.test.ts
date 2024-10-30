import { describe, it, expect } from 'vitest';

import { getConditionPredicate, getConditionColors } from './conditions';

describe('presets', () => {
  describe('conditions', () => {
    it('getConditionPredicate', () => {
      expect(getConditionPredicate({ something: 'still here' })).toStrictEqual({
        type: 'hflex',
        key: 'predicate',
        children: [
          {
            type: 'toggle',
            key: 'operator',
            value: 'greater',
            options: [
              { value: 'greater', label: '>' },
              { value: 'equal', label: '=' },
              { value: 'less', label: '<' },
              { value: 'not', label: '!=' },
            ],
          },
          {
            type: 'text',
            key: 'value',
            value: '100',
          },
        ],
        something: 'still here',
      });
    });

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
