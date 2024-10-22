import { ModelNodeType } from '../model';
import { ComponentProps } from './definitions';

import { Bool } from './Bool';
import { Calendar } from './Calendar';
import { CodeBox } from './CodeBox';
import { Color } from './Color';
import { Group } from './Group';
import { GroupList } from './GroupList';
import { GroupListItem } from './GroupListItem';
import { HFlex } from './HFlex';
import { Info } from './Info';
import { Number } from './Number';
import { Label } from './Label';
import { List } from './List';
import { ListGroup } from './ListGroup';
import { Text } from './Text';
import { TextArea } from './TextArea';
import { Toggle } from './Toggle';

const factory = {
  bool: Bool,
  calendar: Calendar,
  codebox: CodeBox,
  color: Color,
  group: Group,
  groupList: GroupList,
  groupListItem: GroupListItem,
  hflex: HFlex,
  info: Info,
  number: Number,
  label: Label,
  list: List,
  listGroup: ListGroup,
  text: Text,
  textarea: TextArea,
  toggle: Toggle,
};

export const getComponent = (type: ModelNodeType): React.FC<ComponentProps> =>
  factory[type] ? factory[type] : null;
