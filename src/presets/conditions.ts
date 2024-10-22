export const getConditionPredicate = (
  args: { [id: string]: unknown } = {},
) => ({
  type: 'hflex',
  key: 'predicate',
  children: [
    {
      type: 'toggle',
      key: 'operator',
      value: 'greater',
      options: [
        { value: 'greater', label: '>' },
        { value: 'equal', label: '=' },
        { value: 'less', label: '<' },
        { value: 'not', label: '!=' },
      ],
    },
    {
      type: 'text',
      key: 'value',
      value: '100',
    },
  ],
  ...args,
});

export const getConditionColors = () => ({
  type: 'hflex',
  key: 'predicate',
  children: [
    {
      type: 'color',
      key: 'foreground',
      value: 'black',
      name: 'Foreground',
    },
    {
      type: 'color',
      key: 'background',
      value: 'white',
      name: 'Background',
    },
  ],
});
