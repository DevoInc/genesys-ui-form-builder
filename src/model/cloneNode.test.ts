import { describe, expect, it } from 'vitest';

import { cloneNode, cloneNodeList } from './cloneNode';
import type { IModelNode } from './definitions';

describe('model', () => {
  describe('cloneNode', () => {
    it('cloneNode', () => {
      const original: IModelNode = {
        key: 'test',
        type: 'bool',
        name: 'Bool test',
      };
      const cloned = cloneNode(original);
      expect(cloned).toStrictEqual({
        key: 'test',
        type: 'bool',
        name: 'Bool test',
      });
      expect(cloned === original).toBeFalsy();
    });

    it('cloneNodeList', () => {
      const original: IModelNode[] = [
        {
          key: 'test1',
          type: 'bool',
          name: 'Bool test 1',
        },
        {
          key: 'test2',
          type: 'bool',
          name: 'Bool test 2',
        },
      ];
      const cloned = cloneNodeList(original);
      expect(cloned).toStrictEqual([
        {
          key: 'test1',
          type: 'bool',
          name: 'Bool test 1',
        },
        {
          key: 'test2',
          type: 'bool',
          name: 'Bool test 2',
        },
      ]);
      expect(cloned === original).toBeFalsy();
      expect(cloned[0] === original[0]).toBeFalsy();
      expect(cloned[1] === original[1]).toBeFalsy();
    });
  });
});
