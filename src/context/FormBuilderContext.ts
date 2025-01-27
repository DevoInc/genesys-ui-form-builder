import * as React from 'react';

import type { IFormBuilderProps } from '../definitions';

export const FormBuilderContext = React.createContext<IFormBuilderProps>({
  model: { children: [] },
  actions: {},
  onChange: () => {},
  fields: [],
});
