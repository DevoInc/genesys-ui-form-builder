import * as React from 'react';

import { Form } from '@devoinc/genesys-ui';

import { ComponentProps } from '../definitions';

export const GroupListItem: React.FC<ComponentProps<null>> = ({ children }) => {
  return <Form.Group>{children}</Form.Group>;
};
