import { ApiResponse } from '../../models/character';

export type ActionNotesTypes =
  | 'load'
  | 'create'
  | 'update'
  | 'delete'
  | 'pageNext'
  | 'pagePrevious';

type ActionCharacterAll = {
  type: 'load';
  payload: ApiResponse;
};

export type ActionCharacter = ActionCharacterAll;

export const loadActionCreator = (payload: ApiResponse): ActionCharacter => ({
  type: 'load',
  payload,
});
