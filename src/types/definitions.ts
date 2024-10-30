import { IModelNodeAction, IModelNode } from '../model';

export type TResetFunction = () => void;

export type TOnChangeFuntion<T> = (
  value: T,
  prop?: string,
  reset?: TResetFunction,
) => void;

export type TComponentProps<T = string | number | boolean> = {
  level?: number;
  ordinal?: number;
  sibilings?: number;
  onChange?: TOnChangeFuntion<T>;
  padding?: string;
  value?: T;
  childrenModel?: IModelNode[];
  action?: IModelNodeAction;
  children?: React.ReactNode;
};

export type TMethod = 'onBlur' | 'onChange';
