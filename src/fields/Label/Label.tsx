import * as React from 'react';

import { Typography, Form } from '@devoinc/genesys-ui';

import { TComponentProps } from '../../definitions';

export interface LabelProps extends TComponentProps {
  value: string;
  name: string;
}

export const Label: React.FC<LabelProps> = ({ name, value }) => (
  <Form.Group direction="column" itemsGap="sm">
    {name && <Typography.Heading size="overline-md">{name}</Typography.Heading>}
    <Typography.Paragraph>{value}</Typography.Paragraph>
  </Form.Group>
);
