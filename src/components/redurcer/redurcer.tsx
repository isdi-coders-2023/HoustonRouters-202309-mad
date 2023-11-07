import { Character } from '../models/character';
import { ActionCharacter } from './actions';

export function characterReducer(
  state: Character[],
  { type, payload }: ActionCharacter
): Character[] {
  switch (type) {
    case 'load':
      return payload;

    default:
      return [...state];
  }
}
