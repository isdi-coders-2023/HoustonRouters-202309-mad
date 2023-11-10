import { createContext } from 'react';
import { useCharacter } from '../hooks/use.character';

export type ContextStructure = {
  characterTools: ReturnType<typeof useCharacter>;
};

const initialContext = {} as ContextStructure;

export const AppContext = createContext<ContextStructure>(initialContext);
