import { Character } from '../models/character';

export type ActionNotesTypes = 'load' | 'create' | 'update' | 'delete';

type ActionCharacterAll = {
  type: 'load';
  payload: Character[];
};

export type ActionCharacter = ActionCharacterAll;

export const loadActionCreator = (payload: Character[]): ActionCharacter => ({
  type: 'load',
  payload,
});
