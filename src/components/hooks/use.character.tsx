import { SyntheticEvent, useCallback, useMemo, useReducer } from 'react';
import { AppState, characterReducer } from '../redurcer/redurcer';
import { ApiCharacters } from '../data/api.fetch';
import { loadActionCreator } from '../redurcer/actions';
import { Info } from '../../models/character';

export function useCharacter() {
  const initialState: AppState = {
    info: {} as Info,
    results: [],
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

  const handleFilterStatus = async (event: SyntheticEvent) => {
    const filterElementStatus = event.target as HTMLSelectElement;
    let urlValueStatus: string = '';
    if (!filterElementStatus) throw new Error('There are no more pages');

    if (filterElementStatus.value === 'all') {
      urlValueStatus = 'https://rickandmortyapi.com/api/character/';
    } else {
      urlValueStatus =
        'https://rickandmortyapi.com/api/character/?status=' +
        filterElementStatus.value;
    }

    const loadedRepo = await repo.getCharacters(urlValueStatus);

    dispatch(loadActionCreator(loadedRepo));
  };

  const handleFilterGender = async (event: SyntheticEvent) => {
    const filterElementGender = event.target as HTMLSelectElement;
    let urlValueGender: string = '';
    if (!filterElementGender) throw new Error('There are no more pages');

    if (filterElementGender.value === 'all') {
      urlValueGender = 'https://rickandmortyapi.com/api/character/';
    } else {
      urlValueGender =
        'https://rickandmortyapi.com/api/character/?gender=' +
        filterElementGender.value;
    }

    const loadedRepo = await repo.getCharacters(urlValueGender);

    dispatch(loadActionCreator(loadedRepo));
  };

  return {
    appState,
    loadCharacters,
    handleNext,
    handlePrevious,
    handleFilterStatus,
    handleFilterGender,
  };
}
