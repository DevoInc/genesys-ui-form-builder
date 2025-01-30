// Model: These are the model types

export interface IModel {
  children: IModelNode[];
}

export interface IModelNodeAction {
  id: string;
  params: { [id: string]: unknown };
}

export interface IModelNode {
  key?: string;
  type: string;
  children?: IModelNode[];
  visible?: boolean;
  action?: IModelNodeAction;
  isDraggable?: boolean;
  name?: string;
  // modifiers?: TModifier[];
  [key: string]: unknown;
}

// Actions

export type TChangeFunction = (val: unknown) => void;
export type TResetFunction = () => void;

export interface IActionFunctionProps {
  prev: unknown;
  next: unknown;
  props: INodeProps;
  change: TChangeFunction;
  reset: TResetFunction;
}
export type TActionFunction = (props: IActionFunctionProps) => void;

// Fields: These are the fields types

export type TOnChangeFuntion = (
  value: unknown,
  prop?: string,
  reset?: TResetFunction,
) => void;

export type TComponentProps = {
  /** Level of depth of the Field */
  level?: number;
  /** Number of field on the same level */
  ordinal?: number;
  /** Number of sibilings on the same level */
  sibilings?: number;
  /** Padding calculated by the parent element */
  // TODO: This should be refactored.
  padding?: string;
  /** All the nodes has value. */
  value?: unknown;
  /** All the nodes has an onChange function */
  onChange?: TOnChangeFuntion;
  /** Internal copy of the children for manipulation in nodes like Lists or
   * Groups */
  childrenModel?: IModelNode[];
  action?: IModelNodeAction;
  children?: React.ReactNode;
};

export type TMethod = 'onBlur' | 'onChange';

export interface IFields {
  [key: string]: React.FC<TComponentProps>;
}

// Node

export interface INodeProps {
  nodeKey: string;
  type: string;
  children?: IModelNode[];
  parentPath: string[];
  level: number;
  ordinal: number;
  sibilings?: number;
  visible?: boolean;
  action?: IModelNodeAction;
  // modifiers?: TModifier[];
}

// Modifiers

//export interface IModifierParams {
//  fieldModel: IModelNode;
//  model: IModel;
//  newValue: unknown;
//}
//
//export type TOnChangePromise = Promise<IModelNode>;
//
//export type TModifier = ({
//  fieldModel,
//  model,
//  newValue,
//}: IModifierParams) => TOnChangePromise;

// FormBuilder

export interface IFormBuilderProps {
  model?: IModel;
  actions?: { [id: string]: TActionFunction };
  onChange?: TChangeFunction;
  fields?: IFields;
  // modifiers?: TModifier[];
}
