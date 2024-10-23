import * as React from 'react';

import { HFlex as HFlexLib, TGlobalSpacing } from '@devoinc/genesys-ui';

import { TComponentProps } from '../definitions';

export interface HFlexProps extends TComponentProps<null> {
  justifyContent: React.CSSProperties['justifyContent'];
  gap?: TGlobalSpacing;
  children: React.ReactNode;
}

export const HFlex: React.FC<HFlexProps> = ({
  children,
  justifyContent,
  gap = 'cmp-xs',
}) => (
  <HFlexLib justifyContent={justifyContent}>
    {React.Children.map(children, (child, idx: number) => (
      <HFlexLib.Item key={idx} marginLeft={idx > 0 ? gap : undefined}>
        {child}
      </HFlexLib.Item>
    ))}
  </HFlexLib>
);
