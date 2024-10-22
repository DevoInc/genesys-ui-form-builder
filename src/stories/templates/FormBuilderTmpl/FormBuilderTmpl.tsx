import * as React from 'react';
import { FormBuilder } from '../../../FormBuilder';

export const FormBuilderTmpl = ({ model }) => {
  const [innerModel, setInnerModel] = React.useState(model);
  return <FormBuilder model={innerModel} onChange={setInnerModel} />;
};
