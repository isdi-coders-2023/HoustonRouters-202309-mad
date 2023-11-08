import { ApiResponse, Character, Info } from '../../models/character';

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

type ActionNextPage = {
  type: 'pageNext';
  payload: Info;
};

export type ActionCharacter = ActionCharacterAll | ActionNextPage;

export const loadActionCreator = (payload: ApiResponse): ActionCharacter => ({
  type: 'load',
  payload,
});

export const nextPageActions = (payload: Info): ActionNextPage => ({
  type: 'pageNext',
  payload,
});
