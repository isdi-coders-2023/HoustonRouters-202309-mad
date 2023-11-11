import { Character, Info } from '../../models/character';
import { PrivateCharacter } from '../../models/private.character';
import { ActionCharacter, ActionPrivateCharacter } from './actions';

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

export type AppPrivateState = {
  results: PrivateCharacter[];
};

export function privateCharacterReducer(
  privateState: AppPrivateState,
  { type, payload }: ActionPrivateCharacter
): AppPrivateState {
  switch (type) {
    case 'loadPrivate':
      console.log('LOAD:');
      console.log(payload);
      return { ...privateState, results: payload.results };

    default:
      return { ...privateState };
  }
}
