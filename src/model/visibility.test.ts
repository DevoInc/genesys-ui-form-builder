import { describe, it, expect } from 'vitest';

import { ModelNodeType } from './definitions';
import { isNodeHidden } from './visibility';

const cases = [
  ['prop visible', false, '', true],
  ['type hidden', undefined, 'hidden', true],
  ['undefined', undefined, undefined, false],
  ['null', null, null, false],
];

describe('isNodeHidden', () => {
  it.each(cases)(
    '%s',
    (
      _title: string,
      visible: boolean,
      type: ModelNodeType,
      expected: boolean
    ) => {
      expect(isNodeHidden(visible, type)).toEqual(expected);
    }
  );
});
