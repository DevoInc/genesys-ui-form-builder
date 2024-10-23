import type { IModelNode, ModelNodeType, IModelNodeAction } from './model';

export type ChangeFunction = (val: unknown) => void;
export type ResetFunction = (val: unknown) => void;

export interface IActionFunctionProps {
  prev: unknown;
  next: unknown;
  props: INodeProps;
  change: ChangeFunction;
  reset: ResetFunction;
}
export type ActionFunction = (props: IActionFunctionProps) => void;

export interface INodeProps {
  nodeKey: string;
  type: ModelNodeType;
  children?: IModelNode[];
  parentPath: string[];
  level: number;
  ordinal: number;
  sibilings?: number;
  visible?: boolean;
  action?: IModelNodeAction;
}
