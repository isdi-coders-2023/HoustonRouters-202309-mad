import { PrivateCharacter } from '../../models/character';
import { ActionsPrivate } from './actions';

export type PrivateResponse = {
  private: PrivateCharacter[];
};

export function characterReducer(
  state: PrivateResponse,
  { type, payload }: ActionsPrivate
): PrivateResponse {
  switch (type) {
    case 'create':
      return { ...state, private: payload.private };
  }
}
