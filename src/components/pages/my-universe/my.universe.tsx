import { ActionsList } from '../../actions-list/actions.list';
import { Actions } from '../../actions/actions';
import { Display } from '../../display/display';
import { List } from '../../list/list';

export default function MyUniversePage() {
  return (
    <>
      <Display></Display>
      <Actions></Actions>
      <List></List>
      <ActionsList></ActionsList>
    </>
  );
}
