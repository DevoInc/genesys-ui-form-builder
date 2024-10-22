import * as React from 'react';

import { Flex } from '@devoinc/genesys-ui';

import { Node } from './Node';
import { FormBuilderContext, IFormBuilderContextProps } from './context';
import { IModelNode } from './model';

export const FormBuilder: React.FC<IFormBuilderContextProps> = ({
  model,
  onChange,
  actions = {},
}) => (
  <FormBuilderContext.Provider value={{ model, onChange, actions }}>
    <Flex flexDirection="column">
      {model.children.map((node: IModelNode, idx) => (
        <Node
          key={node.key}
          nodeKey={node.key}
          parentPath={['children']}
          level={0}
          ordinal={idx}
          sibilings={model.children.length}
          {...node}
        />
      ))}
    </Flex>
  </FormBuilderContext.Provider>
);
