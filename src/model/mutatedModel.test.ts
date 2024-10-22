import { describe, it, expect } from 'vitest';

import { getPartialMutatedNode, IMutableNode } from './mutatedModel';

describe('model', () => {
  describe('mutatedModel', () => {
    describe('getPartialMutatedNode', () => {
      describe('cases', () => {
        const cases: [string, IMutableNode, string[], number, IMutableNode][] =
          [
            [
              'level 1 change value',
              { children: [{ key: 'test', value: 1 }] },
              ['children', 'test', 'value'],
              2,
              { children: [{ key: 'test', value: 2 }] },
            ],
            [
              'level 2 change value',
              {
                children: [
                  { key: 'test', children: [{ key: 'test', value: 1 }] },
                ],
              },
              ['children', 'test', 'children', 'test', 'value'],
              2,
              {
                children: [
                  { key: 'test', children: [{ key: 'test', value: 2 }] },
                ],
              },
            ],
            [
              'path not found leave intact the node',
              { children: [{ key: 'test', value: 1 }] },
              ['children', 'test2', 'value'],
              2,
              { children: [{ key: 'test', value: 1 }] },
            ],
          ];

        it.each(cases)(
          '%s',
          (
            _title: string,
            node: IMutableNode,
            path: string[],
            value: number,
            expected: IMutableNode
          ) => {
            expect(getPartialMutatedNode(node, path, value)).toEqual(expected);
          }
        );
      });

      it('inmutability check', () => {
        const node = {
          children: [
            { key: 'a', value: 1 },
            { key: 'b', value: 1 },
          ],
        };
        const result = getPartialMutatedNode(
          node,
          ['children', 'b', 'value'],
          2
        );
        expect(result.children[0]).toBe(node.children[0]);
        expect(result.children[1]).not.toBe(node.children[1]);
        expect(result.children[1]).toEqual({ key: 'b', value: 2 });
      });
    });
  });
});
