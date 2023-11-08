import { SyntheticEvent, useCallback, useMemo, useReducer } from 'react';
import { AppState, characterReducer } from '../redurcer/redurcer';
import { ApiCharacters } from '../data/api.fetch';
import { loadActionCreator } from '../redurcer/actions';
import { Info } from '../../models/character';

export function useCharacter() {
  const initialState: AppState = {
    info: {} as Info,
    characters: [],
  };

  const [appState, dispatch] = useReducer(characterReducer, initialState);

  const repo = useMemo(() => new ApiCharacters(), []);
  const loadCharacters = useCallback(async () => {
    try {
      // Asíncrona
      const loadedRepo = await repo.getCharacters();

      // Síncrono
      dispatch(loadActionCreator(loadedRepo));
    } catch (error) {}
  }, [repo]);

  const handleNext = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (!appState.info.next) throw new Error('There are no more pages');
    const loadedRepo = await repo.getCharacters(appState.info.next);
    dispatch(loadActionCreator(loadedRepo));
  };

  const handlePrevious = async (event: SyntheticEvent) => {
    event.preventDefault();
    if (!appState.info.prev) throw new Error('There are no more pages');
    const loadedRepo = await repo.getCharacters(appState.info.prev);

    dispatch(loadActionCreator(loadedRepo));
  };

  return {
    appState,
    loadCharacters,
    handleNext,
    handlePrevious,
  };
}
