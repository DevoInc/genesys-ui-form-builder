import * as React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useTheme } from 'styled-components';

import { Form, Divider, Collapse } from '@devoinc/genesys-ui';

import { TComponentProps } from '../../definitions';

export interface GroupProps extends TComponentProps {
  actions: React.ReactNode[];
  name: string;
  isExpanded?: boolean;
  truncateLine?: 1 | 2;
  isSortable?: boolean;
  id?: string;
  children: React.ReactNode;
  role?: string;
}

export const Group: React.FC<GroupProps> = ({
  actions,
  isExpanded = true,
  name,
  level,
  truncateLine = 1,
  isSortable,
  children,
  id,
  role,
}) => {
  const [expanded, setExpanded] = React.useState(isExpanded);
  const theme = useTheme();
  const { active, isDragging, attributes, listeners, setNodeRef, transform } =
    useSortable({
      id,
      disabled: !isSortable,
      attributes: {
        role,
        roleDescription: isSortable ? 'sortable' : null,
        tabIndex: -1,
      },
    });

  const style = {
    transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
    zIndex: active?.id === id ? '999' : '',
    backgroundColor: isSortable && isDragging ? 'white' : 'transparent',
    borderLeft: `1px solid ${expanded ? theme.alias.color.border.separator.base.weak : 'transparent'}`,
    boxShadow:
      isSortable && isDragging
        ? '0 0.8rem 1.6rem -0.4rem rgba(12, 41, 56, 0.25), 0 0 0.1rem 0 rgba(12, 41, 56, 0.31)'
        : 'none',
    transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
    // marginTop: '-1.6rem',
  };

  return (
    <div style={style} {...attributes} ref={setNodeRef}>
      <Collapse
        expanded={expanded}
        heading={name}
        onClick={() => {
          setExpanded((x) => !x);
        }}
        id={`trigger-${id}`}
        aria-controls={id}
        appendContent={actions}
        isDraggable={isSortable}
        truncateLine={truncateLine}
        {...listeners}
      />

      <div
        id={id}
        aria-labelledby={`trigger-${id}`}
        style={{
          display: expanded ? 'block' : 'none',
        }}
      >
        <Form.Group
          direction="column"
          style={{
            padding: `${theme.alias.space.cmp.sm} ${level > 0 ? '0' : theme.alias.space.cmp.sm} ${theme.alias.space.cmp.md} ${theme.alias.space.cmp.sm}`,
          }}
        >
          {children}
        </Form.Group>
        <Divider margin={'0'} colorScheme={'weak'} />
      </div>
    </div>
  );
};
