import { describe, it, expect } from 'vitest';

import { defaultValidate } from './defaults';

describe('hook', () => {
  describe('useInputInternalState', () => {
    describe('defaults', () => {
      it('defaultValidate', () => {
        expect(defaultValidate()).toEqual({ result: true });
      });
    });
  });
});
