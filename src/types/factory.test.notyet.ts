import { describe, it, expect } from 'vitest';
import * as React from 'react';

import { getComponent } from './factory';
import { ComponentProps } from './definitions';
import { ModelNodeType } from '../model';
import { Bool } from './Bool';
import { Calendar } from './Calendar';

describe('types', () => {
  describe('factory', () => {
    describe('getComponent', () => {
      const cases: [
        string,
        ModelNodeType,
        React.FC<ComponentProps<unknown>>,
      ][] = [
        ['Bool', 'bool', Bool],
        ['Calendar', 'calendar', Calendar],
      ];

      it.each(cases)('%s', (_title, key, expected) => {
        expect(getComponent(key)).toBeInstanceOf(expected);
      });
    });
  });
});
