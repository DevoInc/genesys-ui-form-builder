export type TNodeType =
  | 'hidden'
  | 'bool'
  | 'calendar'
  | 'codebox'
  | 'color'
  | 'group'
  | 'groupList'
  | 'groupListItem'
  | 'hflex'
  | 'info'
  | 'number'
  | 'label'
  | 'list'
  | 'listGroup'
  | 'slider'
  | 'text'
  | 'textarea'
  | 'toggle';

export interface IModelNodeAction {
  id: string;
  params: { [id: string]: unknown };
}

export interface IModelNode {
  key: string;
  type: TNodeType;
  children?: IModelNode[];
  visible?: boolean;
  action?: IModelNodeAction;
  isDraggable?: boolean;
  name?: string;
}

export interface IModel {
  children: IModelNode[];
}
