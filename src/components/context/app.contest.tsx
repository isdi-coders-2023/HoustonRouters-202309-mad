import { createContext } from 'react';
import { useCharacter } from '../hooks/use.character';
import { usePrivateCharacter } from '../hooks/use.private.character';

export type ContextStructure = {
  characterTools: ReturnType<typeof useCharacter>;
  characterPrivateTools: ReturnType<typeof usePrivateCharacter>;
};

const initialContext = {} as ContextStructure;

export const AppContext = createContext<ContextStructure>(initialContext);
