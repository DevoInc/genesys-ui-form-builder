import * as React from 'react';

import { Flex } from '@devoinc/genesys-ui';

import { Node } from '../Node';
import { FormBuilderContext } from '../../context';
import type { IFormBuilderProps, IModelNode } from '../../definitions';
import { collection } from '../../fields';

export const FormBuilder: React.FC<IFormBuilderProps> = ({
  model = { children: [] },
  onChange = () => {},
  actions = {},
  fields: userFields = {},
}) => {
  const fields = React.useMemo(
    () => ({
      ...collection,
      ...userFields,
    }),
    [userFields],
  );
  return (
    <FormBuilderContext.Provider value={{ model, onChange, actions, fields }}>
      <Flex flexDirection="column">
        {model?.children.map((node: IModelNode, idx) => {
          const { key, ...rest } = node;
          return (
            <Node
              key={key}
              nodeKey={key}
              parentPath={['children']}
              level={0}
              ordinal={idx}
              sibilings={model.children.length}
              {...rest}
            />
          );
        })}
      </Flex>
    </FormBuilderContext.Provider>
  );
};
