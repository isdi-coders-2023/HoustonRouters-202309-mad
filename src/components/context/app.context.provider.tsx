import { useCharacter } from '../hooks/use.character';
import { usePrivateCharacter } from '../hooks/use.private.character';

import { AppContext, ContextStructure } from './app.contest';

type Props = {
  children: JSX.Element;
};

export function AppContextProvider({ children }: Props) {
  const charactersState = useCharacter();
  const charactersPrivateState = usePrivateCharacter();
  const context: ContextStructure = {
    characterTools: charactersState,
    characterPrivateTools: charactersPrivateState,
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
