import type { TActionFunction, IModelNodeAction } from '../definitions';

export const findActionFn: (
  actions: {
    [id: string]: TActionFunction;
  },
  action: IModelNodeAction,
) => TActionFunction = (actions, action) => {
  return action && action.id && actions[action.id];
};
