import { ApiResponse, Info } from '../../models/character';

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

type ActionCreate = {
  type: 'create';
  payload: ApiResponse;
};

export type ActionCharacter =
  | ActionCharacterAll
  | ActionNextPage
  | ActionCreate;

export const loadActionCreator = (payload: ApiResponse): ActionCharacter => ({
  type: 'load',
  payload,
});

export const nextPageActions = (payload: Info): ActionNextPage => ({
  type: 'pageNext',
  payload,
});

export const ActionCreate = (payload: ApiResponse): ActionCreate => ({
  type: 'create',
  payload,
});
