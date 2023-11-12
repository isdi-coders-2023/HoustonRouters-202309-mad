import { useCallback, useMemo, useReducer } from 'react';
import { AppPrivateState, privateCharacterReducer } from '../redurcer/redurcer';
import { loadActionPrivateCreator } from '../redurcer/actions';
import { ApiPrivateCharacters } from '../data/api.private.fetch';

export function usePrivateCharacter() {
  const initialState: AppPrivateState = {
    results: [],
  };

  const [appPrivateState, dispatch] = useReducer(
    privateCharacterReducer,
    initialState
  );

  const repo = useMemo(() => new ApiPrivateCharacters(), []);
  const loadPrivateCharacters = useCallback(async () => {
    try {
      const loadedRepo = await repo.getCharacters();

      console.log('VALUE:');
      console.log(loadedRepo);

      dispatch(loadActionPrivateCreator(loadedRepo));
    } catch (error) {}
  }, [repo]);

  return {
    appPrivateState,
    loadPrivateCharacters,
  };
}
