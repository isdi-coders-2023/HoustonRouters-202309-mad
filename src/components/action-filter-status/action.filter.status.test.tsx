import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ActionFilterStatus } from './action.filter.status';
import { AppContext, ContextStructure } from '../context/app.contest';

const mockContext: ContextStructure = {
  characterTools: {
    handleFilterStatus: jest.fn(),
  },
} as unknown as ContextStructure;

describe('Given ActionFilterStatus component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <AppContext.Provider value={mockContext}>
          <ActionFilterStatus></ActionFilterStatus>
        </AppContext.Provider>
      );
    });

    test('Then it should be in the document', () => {
      const element = screen.getByRole('combobox');
      expect(element).toBeInTheDocument();
    });
  });
});
