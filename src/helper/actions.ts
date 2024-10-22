import type { ActionFunction } from '../definitions';
import type { IModelNodeAction } from '../model';

export const findActionFn: (
  actions: {
    [id: string]: ActionFunction;
  },
  action: IModelNodeAction,
) => ActionFunction = (actions, action) => {
  return action && action.id && actions[action.id];
};
