import * as React from 'react';

import { GIBinTrashRecycleDeleteGarbageEmpty } from '@devoinc/genesys-icons';
import { ButtonGroup } from '@devoinc/genesys-ui';

import { Group } from '../Group';

interface ItemProps {
  id: string;
  name: string;
  level: number;
  removeFn: () => void;
  isSortable?: boolean;
  key?: string;
  children: React.ReactNode;
}

export const Item: React.FC<ItemProps> = ({
  id,
  name,
  level,
  removeFn,
  children,
  isSortable = false,
}) => (
  <Group
    id={id}
    role={'listitem'}
    name={name}
    level={level}
    isSortable={isSortable}
    actions={[
      <ButtonGroup key="actions" size={'xs'}>
        <ButtonGroup.IconButton
          circular
          icon={<GIBinTrashRecycleDeleteGarbageEmpty />}
          onClick={(event) => {
            event.stopPropagation();
            removeFn();
          }}
          tooltip="Remove item"
          colorScheme="quiet"
        />
      </ButtonGroup>,
    ]}
  >
    {children}
  </Group>
);
