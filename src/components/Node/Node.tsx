import * as React from 'react';

import { Flex } from '@devoinc/genesys-ui';

import { getPartialMutatedNode, isNodeHidden, getPadding } from '../../model';
import { FormBuilderContext } from '../../context';
import type { INodeProps } from '../../definitions';
import { findActionFn } from '../../helper';

export const Node: React.FC<INodeProps> = ({
  nodeKey,
  type,
  children,
  parentPath,
  level,
  ordinal,
  sibilings,
  visible,
  action,
  ...props
}) => {
  const path = parentPath.concat([nodeKey]);
  const { model, onChange, actions, fields } =
    React.useContext(FormBuilderContext);
  const Cmp = fields[type];

  const onChangeFn = (
    next: unknown,
    prop = 'value',
    reset = () => {
      // Empty function
    },
  ) => {
    const actionFn = findActionFn(actions, action);
    if (actionFn) {
      const prev = props[prop];
      actionFn({
        prev,
        next,
        props: {
          ...props,
          action,
          visible,
          ordinal,
          level,
          sibilings,
          parentPath,
          type,
          nodeKey,
        },
        change: (val: unknown) => {
          if (onChange) {
            onChange(getPartialMutatedNode(model, path.concat([prop]), val));
          }
        },
        reset,
      });
    } else {
      if (onChange) {
        onChange(getPartialMutatedNode(model, path.concat([prop]), next));
      }
    }
  };

  return (
    !isNodeHidden(visible, type) &&
    Cmp && (
      <Flex.Item
        paddingTop={
          type != 'group' && level == 0 && ordinal != 0 ? 'cmp-md' : '0'
        }
      >
        <Cmp
          level={level}
          sibilings={sibilings}
          ordinal={ordinal}
          padding={getPadding(level, ordinal)}
          childrenModel={children}
          onChange={onChangeFn}
          action={action}
          {...props}
        >
          {children &&
            children.map((node, idx) => {
              const { key, ...rest } = node;
              return (
                <Node
                  key={key}
                  nodeKey={key}
                  parentPath={path.concat(['children'])}
                  level={level + 1}
                  ordinal={idx}
                  sibilings={children.length}
                  {...rest}
                />
              );
            })}
        </Cmp>
      </Flex.Item>
    )
  );
};
