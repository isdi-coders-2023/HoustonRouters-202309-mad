import { useCharacter } from '../hooks/use.character';
import { AppContext, ContextStructure } from './app.contest';

type Props = {
  children: JSX.Element;
};

export function AppContextProvider({ children }: Props) {
  const charactersState = useCharacter();
  const context: ContextStructure = {
    characterTools: charactersState,
    appState: undefined,
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
