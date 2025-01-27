import * as React from 'react';
import { DndContext } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
  restrictToFirstScrollableAncestor,
  restrictToVerticalAxis,
} from '@dnd-kit/modifiers';

import { ButtonGroup } from '@devoinc/genesys-ui';
import { GIPlusSignAddNew } from '@devoinc/genesys-icons';

import { Group } from '../Group';
import { TComponentProps } from '../../definitions';
import { Item } from './Item';
import { add, remove, move, getNextKey } from './list';
import { IModelItem } from './definitions';
import { IModelNode } from '../../definitions';

export interface GroupListProps extends TComponentProps {
  prototype: IModelNode[];
  name?: string;
  childName?: string;
  childKey?: string;
  isExpanded?: boolean;
  isSortable?: boolean;
  allowNewItems?: boolean;
  children: React.ReactNode;
  value: IModelItem[];
}

export const GroupList: React.FC<GroupListProps> = ({
  onChange,
  prototype,
  name = 'List',
  childName = 'Item $INDEX',
  childKey = 'item$INDEX',
  children,
  childrenModel,
  level = 0,
  isExpanded = true,
  isSortable = false,
  allowNewItems = true,
}) => (
  <DndContext
    modifiers={[restrictToVerticalAxis, restrictToFirstScrollableAncestor]}
    onDragEnd={({ active, over }) => {
      // if it is the same position or dropped outside the container don't do anything
      if (over && active.id !== over.id) {
        onChange(
          move(childrenModel, active.id as string, over.id as string),
          'children',
        );
      }
    }}
  >
    <Group
      name={name}
      level={level}
      isExpanded={isExpanded}
      role={'list'}
      actions={[
        <ButtonGroup key="actions" size={'xs'}>
          <ButtonGroup.IconButton
            circular
            icon={<GIPlusSignAddNew />}
            onClick={(event) => {
              // Stop propagation for avoid toggle the group
              event.stopPropagation();
              const { key: nextKey, idx } = getNextKey(childrenModel, childKey);
              onChange(
                add(
                  childrenModel,
                  prototype,
                  nextKey,
                  childName.replace('$INDEX', String(idx)),
                ),
                'children',
              );
            }}
            tooltip={allowNewItems ? 'Add new group' : 'Groups cannot be added'}
            colorScheme="quiet"
          />
        </ButtonGroup>,
      ]}
    >
      <SortableContext
        items={childrenModel.map((child) => child.key)}
        strategy={verticalListSortingStrategy}
      >
        {childrenModel.map((child, idx) => (
          <Item
            key={child.key}
            id={child.key}
            name={child.name}
            level={level + 1}
            removeFn={() => {
              onChange(remove(childrenModel, child.key), 'children');
            }}
            isSortable={isSortable}
          >
            {children[idx]}
          </Item>
        ))}
      </SortableContext>
    </Group>
  </DndContext>
);
