import { Character, Info } from '../../models/character';
import { ActionCharacter } from './actions';

export type AppState = {
  info: Info;
  results: Character[];
};

export function characterReducer(
  state: AppState,
  { type, payload }: ActionCharacter
): AppState {
  switch (type) {
    case 'load':
      return { ...state, results: payload.results, info: payload.info };

    default:
      return { ...state };
  }
}
