import { ApiResponse, Info, PrivateResponse } from '../../models/character';

export type ActionPrivateTypes = 'create';

export type ActionNotesTypes =
  | 'load'
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
  payload: PrivateResponse;
};

export type ActionCharacter = ActionCharacterAll | ActionNextPage;

export type ActionsPrivate = ActionCreate;

export const loadActionCreator = (payload: ApiResponse): ActionCharacter => ({
  type: 'load',
  payload,
});

export const nextPageActions = (payload: Info): ActionNextPage => ({
  type: 'pageNext',
  payload,
});

export const createPrivateCharacter = (
  payload: PrivateResponse
): ActionCreate => ({
  type: 'create',
  payload,
});
