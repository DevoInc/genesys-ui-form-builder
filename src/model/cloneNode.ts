import type { IModelNode } from './definitions';

export const cloneNode = (node: IModelNode) => ({
  ...node,
  ...(node.children ? { children: cloneNodeList(node.children) } : {}),
  ...(node.action
    ? {
        action: {
          ...node.action,
          ...(node.action.params
            ? {
                params: {
                  ...node.action.params,
                },
              }
            : {}),
        },
      }
    : {}),
});

export const cloneNodeList = (nodes: IModelNode[] = []) => nodes.map(cloneNode);
