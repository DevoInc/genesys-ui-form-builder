import * as React from 'react';

import { type TActiveStatus, Banner } from '@devoinc/genesys-ui';

import { ComponentProps } from '../definitions';

export interface InfoProps extends ComponentProps<string> {
  name: string;
  status: TActiveStatus;
}

export const Info: React.FC<InfoProps> = ({
  value = '',
  status = 'success',
  name,
}) => <Banner content={value} status={status} title={name} />;
