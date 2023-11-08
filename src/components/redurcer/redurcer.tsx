import { Character, Info } from '../../models/character';
import { ActionCharacter } from './actions';

export type AppState = {
  info: Info;
  charecters: Character[];
};

export function characterReducer(
  state: AppState,
  { type, payload }: ActionCharacter
): AppState {
  switch (type) {
    case 'load':
      return { ...state, charecters: payload.characters, info: payload.info };

    default:
      return { ...state };
  }
}
