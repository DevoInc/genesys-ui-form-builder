import { IModelNodeAction, IModelNode } from '../model';

type ResetFunction = () => void;

export type TOnChangeFuntion<T> = (
  value: T,
  prop?: string,
  reset?: ResetFunction,
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
