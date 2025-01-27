import { Bool } from './Bool';
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
import { IFields } from '../definitions';

export const collection: IFields = {
  bool: Bool,
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
