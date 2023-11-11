import { ActionsList } from '../../actions-list/actions.list';
import { ButtonNewCharacter } from '../../button-new-character/button.new.character';
import { Display } from '../../display/display';
import { ListPrivate } from '../../list-private/list.private';

export default function MyUniversePage() {
  return (
    <>
      <Display></Display>
      <ButtonNewCharacter></ButtonNewCharacter>
      <ListPrivate></ListPrivate>
      <ActionsList></ActionsList>
    </>
  );
}
