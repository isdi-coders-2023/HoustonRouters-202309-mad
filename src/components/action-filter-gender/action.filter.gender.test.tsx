import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ActionFilterGender } from './action.filter.gender';
import { AppContext, ContextStructure } from '../context/app.contest';

const mockContext: ContextStructure = {
  characterTools: {
    handleFilterGender: jest.fn(),
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
  });
});
