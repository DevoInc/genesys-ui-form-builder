export interface IMutableNode {
  children?: IMutableNode[];
  key?: string;
  value?: unknown;
}

/**
 * Get partial mutated node
 * This method return a new node where only the changed branch is replaced by the
 * new inmutable data
 */
export const getPartialMutatedNode = (
  node: IMutableNode,
  path: string[],
  value: unknown
): IMutableNode =>
  path.length > 1
    ? // If path is [children, key, ...]
      {
        ...node,
        children: node.children.map((child) =>
          child.key === path[1]
            ? getPartialMutatedNode(child, path.slice(2), value)
            : child
        ),
      }
    : // If path is [prop]
      {
        ...node,
        [path[0]]: value,
      };
