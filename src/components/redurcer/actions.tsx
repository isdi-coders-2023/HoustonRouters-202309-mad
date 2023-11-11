import { ApiResponse, Info } from '../../models/character';
import { ApiPrivateResponse } from '../../models/private.character';

type ActionCharacterAll = {
  type: 'load';
  payload: ApiResponse;
};

type ActionPrivateCharacterAll = {
  type: 'loadPrivate';
  payload: ApiPrivateResponse;
};

type ActionNextPage = {
  type: 'pageNext';
  payload: Info;
};

export type ActionCharacter = ActionCharacterAll | ActionNextPage;

export type ActionPrivateCharacter = ActionPrivateCharacterAll;

export const loadActionCreator = (payload: ApiResponse): ActionCharacter => ({
  type: 'load',
  payload,
});

export const loadActionPrivateCreator = (
  payload: ApiPrivateResponse
): ActionPrivateCharacter => ({
  type: 'loadPrivate',
  payload,
});

export const nextPageActions = (payload: Info): ActionNextPage => ({
  type: 'pageNext',
  payload,
});
