import React from 'react';

import { ListGroup } from './ListGroup';

export const TemplateAxis = (args) => {
  const [innerValueA, setInnerValueA] = React.useState(args.a.value);
  const [innerValueB, setInnerValueB] = React.useState(args.b.value);

  const onChangeChangeA = React.useCallback((val) => {
    setInnerValueA(val.map((v) => ({ ...v, label: '' })));
  }, []);

  const onChangeChangeB = React.useCallback((val) => {
    setInnerValueB(val.map((v) => ({ ...v, label: '' })));
  }, []);

  return (
    <>
      <ListGroup {...args.a} value={innerValueA} onChange={onChangeChangeA} />
      <ListGroup {...args.b} value={innerValueB} onChange={onChangeChangeB} />
    </>
  );
};
