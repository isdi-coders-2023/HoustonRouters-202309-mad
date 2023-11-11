import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ActionFilterGender } from './action.filter.gender';
import { AppContext, ContextStructure } from '../context/app.contest';
import userEvent from '@testing-library/user-event';

const mockContext: ContextStructure = {
  characterTools: {
    handleFilterGender: jest.fn(),
    loadCharacters: jest.fn(),
  },
} as unknown as ContextStructure;

describe('Given ActionFilterStatus component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <AppContext.Provider value={mockContext}>
          <ActionFilterGender></ActionFilterGender>
        </AppContext.Provider>
      );
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('combobox');
      expect(element).toBeInTheDocument();
    });

    test('Then the handleFilterSelectStatus should be executed', async () => {
      const element = screen.getByRole('combobox');
      await userEvent.selectOptions(element, 'Female');
      expect(mockContext.characterTools.handleFilterGender).toHaveBeenCalled();
    });
  });
});
