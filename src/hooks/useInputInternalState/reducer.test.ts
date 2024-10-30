import { describe, it, expect } from 'vitest';

import {
  internalStateReducer,
  ACTION,
  InternalStateAction,
  InternalState,
} from './reducer';

describe('hook', () => {
  describe('useInnerValue', () => {
    describe('test', () => {
      const cases: [
        string,
        InternalState,
        InternalStateAction,
        InternalState
      ][] = [
        [
          'reset',
          { status: 'error', message: 'test', innerValue: 5 },
          { type: ACTION.RESET, value: 10 },
          { status: 'base', message: null, innerValue: 10 },
        ],
        [
          'update inner value',
          { status: 'warning', message: null, innerValue: 5 },
          { type: ACTION.UPDATE_INNER_VALUE, value: 10 },
          { status: 'warning', message: null, innerValue: 10 },
        ],
        [
          'update',
          { status: 'error', message: 'test', innerValue: 5 },
          {
            type: ACTION.UPDATE,
            value: 10,
            status: 'warning',
            message: 'warning',
          },
          { status: 'warning', message: 'warning', innerValue: 10 },
        ],
      ];

      it.each(cases)('%s', (_title, state, action, expected) => {
        expect(internalStateReducer(state, action)).toEqual(expected);
      });
    });
  });
});
