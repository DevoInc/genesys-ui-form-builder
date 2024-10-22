import * as React from 'react';
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';

import { Flex, Typography, IconButtonCollapse } from '@devoinc/genesys-ui';
import { GIRowDragDrop } from '@devoinc/genesys-icons';

import { StyledHeader, StyledHeaderButton } from './StyledHeader';

interface HeaderProps {
  isDragging: boolean;
  isExpanded: boolean;
  name: string;
  onClick: () => void;
  actions: React.ReactNode[];
  truncateLine?: number;
  isSortable?: boolean;
  listeners?: SyntheticListenerMap;
  setActivatorNodeRef?: (element: HTMLElement) => void;
  id: string;
  ['aria-controls']: string;
}

export const Header: React.FC<HeaderProps> = ({
  name,
  actions,
  isDragging,
  isExpanded,
  onClick,
  truncateLine = 1,
  isSortable,
  listeners,
  setActivatorNodeRef,
  id,
  'aria-controls': ariaControls,
}) => (
  <StyledHeader isExpanded={isExpanded}>
    {isSortable && (
      <StyledHeaderButton
        id={id}
        ref={setActivatorNodeRef}
        {...listeners}
        aria-controls={ariaControls}
        aria-expanded={isExpanded}
        isDragging={isDragging}
        isSortable={isSortable}
        onClick={onClick}
        aria-label={`${name} content`}
      >
        <GIRowDragDrop />
      </StyledHeaderButton>
    )}
    <Flex
      alignItems={'center'}
      height={'100%'}
      padding={isSortable ? 'cmp-xs cmp-sm cmp-xs cmp-md' : 'cmp-xs cmp-sm'}
    >
      <Flex.Item flex={'0 0 auto'} marginRight={'cmp-sm'}>
        <IconButtonCollapse
          onClick={(event) => {
            event.stopPropagation();
            onClick();
          }}
          state={isExpanded ? 'expanded' : 'enabled'}
          size="sm"
        />
      </Flex.Item>
      <Flex.Item flex={'1 1 auto'} minWidth={'0'}>
        <Flex alignItems={'center'}>
          <Typography.Heading truncateLine={truncateLine} size={'h6'}>
            {name}
          </Typography.Heading>
        </Flex>
      </Flex.Item>
      <Flex.Item flex={'0 0 auto'} marginLeft={'auto'}>
        {actions}
      </Flex.Item>
    </Flex>
  </StyledHeader>
);
