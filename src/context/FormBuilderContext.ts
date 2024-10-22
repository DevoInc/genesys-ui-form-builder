import * as React from 'react';

import { IModel } from '../model';
import { ChangeFunction, ActionFunction } from '../definitions';

export interface IFormBuilderContextProps {
  model: IModel;
  actions?: { [id: string]: ActionFunction };
  onChange: ChangeFunction;
}

export const FormBuilderContext = React.createContext<IFormBuilderContextProps>(
  {
    model: null,
    actions: {},
    onChange: null,
  },
);
