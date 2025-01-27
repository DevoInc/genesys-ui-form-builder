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
