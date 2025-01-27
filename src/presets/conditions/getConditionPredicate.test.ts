import { describe, it, expect } from 'vitest';

import { getConditionPredicate } from './getConditionPredicate';

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
  });
});
