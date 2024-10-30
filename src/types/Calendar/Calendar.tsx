import * as React from 'react';

import { DateTimeRangeFloatingPicker } from '@devoinc/genesys-ui-datetime';

import type { TDateRangeType, TValidateResult } from './definitions';
import type { TComponentProps } from '../definitions';

export interface CalendarProps extends TComponentProps<TDateRangeType> {
  locale: string;
  referenceAsParent: boolean;
  size: 'sm' | 'md' | 'lg';
  timezone: string;
  validateDate: () => boolean;
  validateExpression: () => TValidateResult;
  validateOnApply: () => boolean;
  validFormats: string[];
  width: string;
}

export const Calendar: React.FC<CalendarProps> = ({
  value,
  onChange,
  size = 'sm',
}) => (
  <DateTimeRangeFloatingPicker
    controlWidth={'100%'}
    disableApplyButton={false}
    presets={[]}
    id={'test'}
    value={[value.from, value.to]}
    onChange={(newValue) => {
      onChange({
        from: newValue[0] as number,
        to: newValue[1] as number,
        realTime: true,
      });
    }}
    onCancel={() => {
      // Do nothing
    }}
    onRealTimeClick={() => {
      onChange({
        ...value,
        realTime: !value.realTime,
      });
    }}
    realTime={value.realTime ? 'selected' : 'disabled'}
    size={size}
  />
);
