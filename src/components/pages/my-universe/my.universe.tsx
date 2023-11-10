import { ActionsList } from '../../actions-list/actions.list';
import { Actions } from '../../actions/actions';
import { Display } from '../../display/display';

export default function MyUniversePage() {
  return (
    <>
      <Display></Display>
      <Actions></Actions>
      <ActionsList></ActionsList>
    </>
  );
}
