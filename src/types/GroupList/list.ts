import { cloneNodeList, IModelNode } from '../../model';

/**
 * Remove an item from the list
 */
export const remove = (list: IModelNode[], key: string) =>
  list.filter((item) => item.key !== key);

/**
 * Move an item into another position
 */
export const move = (
  list: IModelNode[],
  itemKey: string,
  targetKey: string,
) => {
  // If equals then we are moving to the very same position
  if (itemKey === targetKey) {
    return list;
  }

  // Some needed index
  const targetIndex = list.findIndex((item) => item.key === targetKey);
  const movedItem = list.find((item) => item.key === itemKey);

  // First remove the moved element from the list
  const newList = remove(list, itemKey);

  // Split the new list by the targetIndex
  const leftHand = newList.slice(0, targetIndex);
  const righthand = newList.slice(targetIndex);

  // And finally put all together
  return leftHand.concat([movedItem], righthand);
};

/**
 * Get the next avaiable key
 */
export const getNextKey = (list: IModelNode[], mask: string) => {
  const keys = list.map((item) => item.key);
  let len = list.length;
  let key = mask.replace('$INDEX', String(len));
  while (keys.includes(key)) {
    key = mask.replace('$INDEX', String(++len));
  }
  return { key, idx: len };
};

/**
 * Add a new element to list
 */
export const add = (
  list: IModelNode[],
  prototype: IModelNode[],
  key: string,
  name: string,
) =>
  list.concat([
    { key, type: 'groupListItem', name, children: cloneNodeList(prototype) },
  ]);
