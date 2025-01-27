import * as React from 'react';

import { Flex, Form, IconButton, Label, Typography } from '@devoinc/genesys-ui';
import { GIPencilEdit } from '@devoinc/genesys-icons';

import { TComponentProps } from '../../definitions';

export interface CodeBoxProps extends TComponentProps {
  value: string;
  editable: boolean;
  name: string;
  placeholder: string;
}

export const CodeBox: React.FC<CodeBoxProps> = ({
  value = '',
  placeholder,
  onChange,
  name,
  editable = true,
}) => {
  const val = value && value.trim() !== '' ? value : placeholder;
  const onChangeFn = () => onChange(val, 'value');

  return (
    <Form.Group direction="column">
      <Flex alignItems="center" justifyContent="space-between">
        <Label>{name}</Label>
        {editable && (
          <IconButton
            onClick={onChangeFn}
            colorScheme="neutral"
            size="sm"
            icon={<GIPencilEdit />}
            tooltip="Edit"
          />
        )}
      </Flex>
      <Typography.CodeBlock
        truncateLine={7}
        onClick={editable ? onChangeFn : null}
      >
        {val}
      </Typography.CodeBlock>
    </Form.Group>
  );
};
