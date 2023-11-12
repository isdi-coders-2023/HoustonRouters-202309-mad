import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ButtonPreviewPage } from './button.preview.page';
import { AppState } from '../redurcer/redurcer';
import { AppContext, ContextStructure } from '../context/app.contest';
import { userEvent } from '@testing-library/user-event';
import { Character, Info } from '../../models/character';

describe('Given ButtonPreviousPage component', () => {
  describe('When we instantiate', () => {
    const mockState: ContextStructure = {
      characterTools: {
        appState: {
          info: {} as Info,
          results: [{} as Character],
        } as unknown as AppState,
        handlePrevious: jest.fn(),
      },
    } as unknown as ContextStructure;
    beforeEach(() => {
      render(
        <AppContext.Provider value={mockState}>
          <ButtonPreviewPage></ButtonPreviewPage>
        </AppContext.Provider>
      );
    });
    test('Then it should be in the document', () => {
      const element = screen.getByRole('button');
      expect(element).toBeInTheDocument();
    });
    test('It should call handlePrevious when the next button is clicked', async () => {
      const element = screen.getByRole('button');
      await userEvent.click(element);
      expect(mockState.characterTools.handlePrevious).toHaveBeenCalled();
    });
  });
});
