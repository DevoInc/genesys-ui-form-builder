import * as React from 'react';

import { type TActiveStatus, Banner } from '@devoinc/genesys-ui';

import { TComponentProps } from '../definitions';

export interface InfoProps extends TComponentProps<string> {
  name: string;
  status: TActiveStatus;
}

export const Info: React.FC<InfoProps> = ({
  value = '',
  status = 'success',
  name,
}) => <Banner content={value} status={status} title={name} />;
