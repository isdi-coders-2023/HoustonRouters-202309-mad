import { ActionsList } from '../../actions-list/actions.list';
import { ButtonNewCharacter } from '../../button-new-character/button.new.character';
import { Display } from '../../display/display';
import { List } from '../../list/list';

export default function MyUniversePage() {
  return (
    <>
      <Display></Display>
      <ButtonNewCharacter></ButtonNewCharacter>
      <List></List>
      <ActionsList></ActionsList>
    </>
  );
}
