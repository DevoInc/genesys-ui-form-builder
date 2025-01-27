import * as React from 'react';

import { Form } from '@devoinc/genesys-ui';

import { TComponentProps } from '../../definitions';

export const GroupListItem: React.FC<TComponentProps> = ({ children }) => {
  return <Form.Group>{children}</Form.Group>;
};
