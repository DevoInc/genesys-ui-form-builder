import { IModelNodeAction, IModelNode } from '../model';

export type TResetFunction = () => void;

export type TOnChangeFuntion<T> = (
  value: T,
  prop?: string,
  reset?: TResetFunction,
) => void;

export type TComponentProps<TValue> = {
  level?: number;
  ordinal?: number;
  sibilings?: number;
  onChange?: TOnChangeFuntion<TValue>;
  padding?: string;
  value?: TValue;
  childrenModel?: IModelNode[];
  action?: IModelNodeAction;
  children?: React.ReactNode;
};

export type TMethod = 'onBlur' | 'onChange';
