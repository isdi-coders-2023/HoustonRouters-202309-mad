import {
  SyntheticEvent,
  useCallback,
  useMemo,
  useReducer,
  useState,
} from 'react';
import { characterReducer } from '../redurcer/redurcer';
import { ApiCharacters } from '../data/api.fetch';
import { loadActionCreator } from '../redurcer/actions';

export function useCharacter() {
  const [Characters, dispatch] = useReducer(characterReducer, []);
  const [page, setPage] = useState(1);
  const repo = useMemo(() => new ApiCharacters(page), [page]);
  const loadCharacters = useCallback(async () => {
    try {
      // Asíncrona
      const loadedRepo = await repo.getCharacters();
      const loadedCharacters = loadedRepo.results;
      console.log(loadedCharacters);

      // Síncrono
      dispatch(loadActionCreator(loadedCharacters));
    } catch (error) {}
  }, [repo]);

  const handleNext = (event: SyntheticEvent) => {
    event.preventDefault();
    setPage(page + 1);
  };

  const handlePrevious = (event: SyntheticEvent) => {
    event.preventDefault();
    setPage(page - 1);
  };

  return {
    Characters,
    loadCharacters,
    page,
    setPage,
    handleNext,
    handlePrevious,
  };
}
