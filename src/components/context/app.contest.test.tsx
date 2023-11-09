import '@testing-library/jest-dom';
import { AppContext } from './app.contest'; // Asegúrate de importar el archivo correcto
import { Info } from '../../models/character';
import { useCharacter } from '../hooks/use.character';
import { render } from '@testing-library/react';
import { AppContextProvider } from './app.context.provider';

jest.mock('../hooks/use.character');

const mockUseCharacter = {
  appState: {
    info: {} as Info,
    results: [],
  },
  characterTools: {
    loadCharacters: jest.fn(),
    handleNext: jest.fn(),
    handlePrevious: jest.fn(),
  },
};

describe('AppContext', () => {
  it('Debe inicializarse correctamente', () => {
    (useCharacter as jest.Mock).mockReturnValue(mockUseCharacter);
    const { container } = render(
      <AppContextProvider>
        <AppContext.Consumer>
          {(value) => (
            <div data-test="context-test">
              App State : {value.characterTools.appState.results.length}{' '}
            </div>
          )}
        </AppContext.Consumer>
      </AppContextProvider>
    );

    expect(container).toHaveTextContent('App State : 0');
  });
});
